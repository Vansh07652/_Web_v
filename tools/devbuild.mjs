// Local verification harness: compiles the TSX app to browser-native ES modules
// so the site can be run, screenshotted and audited without the Vite toolchain.
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, statSync, existsSync } from "node:fs";
import { stripTypeScriptTypes } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { compile } from "./jsxc.mjs";

const WEB = path.resolve(process.argv[2] ?? fileURLToPath(new URL("..", import.meta.url)));
const SRC = path.join(WEB, "src");
const OUT = path.join(WEB, ".preview");

const toUrl = (absolute) => "/" + path.relative(WEB, absolute).split(path.sep).join("/");

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function globToRegExp(pattern) {
  let out = "";
  for (let i = 0; i < pattern.length; i += 1) {
    const c = pattern[i];
    if (c === "*" && pattern[i + 1] === "*") {
      if (pattern[i + 2] === "/") { out += "(?:.*/)?"; i += 2; } else { out += ".*"; i += 1; }
      continue;
    }
    if (c === "*") { out += "[^/]*"; continue; }
    if (c === "?") { out += "[^/]"; continue; }
    out += c.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  }
  return new RegExp(`^${out}$`);
}

function matchParen(source, open) {
  let depth = 0;
  for (let i = open; i < source.length; i += 1) {
    const c = source[i];
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      i += 1;
      while (i < source.length && source[i] !== quote) { if (source[i] === "\\") i += 1; i += 1; }
      continue;
    }
    if (c === "(") depth += 1;
    else if (c === ")") { depth -= 1; if (depth === 0) return i; }
  }
  throw new Error("Unbalanced parentheses in import.meta.glob call");
}

function expandGlobCalls(code, fileDir) {
  let result = code;
  for (;;) {
    const marker = result.indexOf("import.meta.glob(");
    if (marker === -1) break;
    const open = result.indexOf("(", marker);
    const close = matchParen(result, open);
    const argsText = result.slice(open + 1, close);
    const args = new Function(`return [${argsText}]`)();
    const [patterns, options = {}] = args;
    const list = Array.isArray(patterns) ? patterns : [patterns];
    const includes = list.filter((item) => !item.startsWith("!"));
    const excludes = list.filter((item) => item.startsWith("!")).map((item) => item.slice(1));
    const entries = [];
    for (const pattern of includes) {
      const absolutePattern = path.resolve(fileDir, pattern);
      const base = absolutePattern.split("/").filter((segment) => !segment.includes("*")).join("/");
      const root = existsSync(base) && statSync(base).isDirectory() ? base : path.dirname(base);
      if (!existsSync(root)) continue;
      const regex = globToRegExp(absolutePattern);
      for (const file of walk(root)) {
        if (!regex.test(file)) continue;
        if (excludes.some((item) => globToRegExp(path.resolve(fileDir, item)).test(file))) continue;
        const key = path.relative(fileDir, file).startsWith(".") ? path.relative(fileDir, file) : `./${path.relative(fileDir, file)}`;
        entries.push([key, file]);
      }
    }
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    const literal = `{\n${entries.map(([key, file]) => {
      const url = toUrl(file);
      if (options.query === "?raw") {
        return `  ${JSON.stringify(key)}: () => fetch(${JSON.stringify(url)}).then((response) => { if (!response.ok) throw new Error("404 " + ${JSON.stringify(url)}); return response.text(); })`;
      }
      if (options.query === "?url") {
        return `  ${JSON.stringify(key)}: ${JSON.stringify(url)}`;
      }
      const loader = `() => import(${JSON.stringify(url)}, { with: { type: "json" } }).then((module) => module.default)`;
      return `  ${JSON.stringify(key)}: ${options.eager ? `await ${loader}()` : loader}`;
    }).join(",\n")}\n}`;
    result = result.slice(0, marker) + literal + result.slice(close + 1);
  }
  return result;
}

function resolveSpecifier(specifier, fileDir) {
  if (specifier === "react") return { url: "/.preview/vendor/react.js" };
  if (specifier === "react-dom/client") return { url: "/.preview/vendor/react-dom-client.js" };
  if (specifier === "react/jsx-runtime") return { url: "/.preview/vendor/react-jsx-runtime.js" };
  if (!specifier.startsWith(".") && !specifier.startsWith("/")) return null;
  const absolute = path.resolve(fileDir, specifier);
  if (specifier.endsWith(".css")) return { drop: true };
  if (specifier.endsWith(".json")) return { url: toUrl(absolute), json: true };
  for (const candidate of [`${absolute}.ts`, `${absolute}.tsx`, `${absolute}/index.ts`, `${absolute}/index.tsx`, absolute]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      const relative = path.relative(SRC, candidate).replace(/\.tsx?$/, ".js");
      return { url: `/.preview/src/${relative.split(path.sep).join("/")}` };
    }
  }
  throw new Error(`Cannot resolve ${specifier} from ${fileDir}`);
}

function rewriteImports(code, fileDir) {
  let out = code.replace(/(\bfrom\s*|\bimport\s*)(["'])([^"']+)\2/g, (match, prefix, quote, specifier) => {
    const resolved = resolveSpecifier(specifier, fileDir);
    if (!resolved) return match;
    if (resolved.drop) return `${prefix}${quote}data:text/javascript,${quote}`;
    const attribute = resolved.json ? ` with { type: "json" }` : "";
    return `${prefix}${quote}${resolved.url}${quote}${attribute}`;
  });
  // Dynamic imports need the JSON attribute inside the call parentheses.
  out = out.replace(/import\((["'])([^"']+)\1\)/g, (match, quote, specifier) => {
    const resolved = resolveSpecifier(specifier, fileDir);
    if (!resolved) return match;
    const attribute = resolved.json ? `, { with: { type: "json" } }` : "";
    return `import(${quote}${resolved.url}${quote}${attribute})`;
  });
  return out;
}

function buildVendor() {
  const vendorDir = path.join(OUT, "vendor");
  mkdirSync(vendorDir, { recursive: true });
  const modules = {
    "react/cjs/react.production.js": "react",
    "react/cjs/react-jsx-runtime.production.js": "react/jsx-runtime",
    "react-dom/cjs/react-dom.production.js": "react-dom",
    "react-dom/cjs/react-dom-client.production.js": "react-dom/client",
    "scheduler/cjs/scheduler.production.js": "scheduler",
  };
  const registry = [];
  for (const [file, id] of Object.entries(modules)) {
    const source = readFileSync(path.join(WEB, "node_modules", file), "utf8");
    registry.push(`  ${JSON.stringify(id)}: function (exports, module, require) {\n${source}\n  }`);
  }
  const runtime = `// Minimal CommonJS shim so React's CJS builds can be consumed as ES modules.
const definitions = {\n${registry.join(",\n")}\n};
const cache = new Map();
function require(id) {
  const key = id === "react-dom" ? "react-dom" : id;
  if (cache.has(key)) return cache.get(key).exports;
  const definition = definitions[key];
  if (!definition) throw new Error("Unknown module: " + id);
  const module = { exports: {} };
  cache.set(key, module);
  definition(module.exports, module, require);
  return module.exports;
}
export { require as __require };
`;
  writeFileSync(path.join(vendorDir, "runtime.js"), runtime);
  writeFileSync(path.join(vendorDir, "react.js"), `import { __require } from "./runtime.js";\nconst mod = __require("react");\nexport default mod;\nexport const { Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, cloneElement, createContext, createElement, createRef, forwardRef, isValidElement, lazy, memo, startTransition, use, useCallback, useContext, useDebugValue, useDeferredValue, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useOptimistic, useReducer, useRef, useState, useSyncExternalStore, useTransition, useActionState, version } = mod;\n`);
  writeFileSync(path.join(vendorDir, "react-jsx-runtime.js"), `import { __require } from "./runtime.js";\nconst mod = __require("react/jsx-runtime");\nexport const { Fragment, jsx, jsxs } = mod;\nexport default mod;\n`);
  writeFileSync(path.join(vendorDir, "react-dom-client.js"), `import { __require } from "./runtime.js";\nconst mod = __require("react-dom/client");\nexport const { createRoot, hydrateRoot } = mod;\nexport default mod;\n`);
}

function buildIndexHtml() {
  const html = readFileSync(path.join(WEB, "index.html"), "utf8")
    .replace('<base id="app-base" href="/" />', '<base id="app-base" href="/" />')
    .replace('src="/src/main.tsx"', 'src="/.preview/src/main.js"')
    .replace("</head>", '  <link rel="stylesheet" href="/src/styles/main.css" />\n  </head>');
  writeFileSync(path.join(OUT, "index.html"), html);
}

function main() {
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });
  const files = walk(SRC).filter((file) => /\.tsx?$/.test(file) && !file.includes("/tests/") && !/ \d+\.tsx?$/.test(file));
  let failures = 0;
  for (const file of files) {
    const relative = path.relative(SRC, file).replace(/\.tsx?$/, ".js");
    const target = path.join(OUT, "src", relative);
    mkdirSync(path.dirname(target), { recursive: true });
    try {
      const source = readFileSync(file, "utf8");
      const jsxCompiled = compile(source, { filename: file });
      const globExpanded = expandGlobCalls(jsxCompiled, path.dirname(file));
      const stripped = stripTypeScriptTypes(globExpanded, { mode: "transform" });
      writeFileSync(target, rewriteImports(stripped, path.dirname(file)));
    } catch (error) {
      failures += 1;
      console.error(`FAIL ${path.relative(WEB, file)}: ${error.message}`);
    }
  }
  buildVendor();
  buildIndexHtml();
  console.log(failures ? `Compiled with ${failures} failure(s).` : `Compiled ${files.length} module(s) cleanly.`);
  process.exitCode = failures ? 1 : 0;
}

main();
