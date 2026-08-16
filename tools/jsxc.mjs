// Minimal TSX -> JS compiler used ONLY as a local verification harness.
// The project's real build is Vite; this exists because no package registry is
// reachable from this environment, so the native Vite/TS binaries are unusable.
// It converts JSX to react/jsx-runtime calls, then defers TypeScript type
// stripping to Node's built-in stripTypeScriptTypes().

const ID_START = /[A-Za-z_$]/;
const ID_PART = /[A-Za-z0-9_$]/;

const KEYWORDS_BEFORE_EXPR = new Set([
  "return", "typeof", "instanceof", "in", "of", "new", "delete", "void", "await",
  "yield", "case", "do", "else", "throw", "extends", "default", "async",
]);

function isExprPosition(lastTok) {
  if (!lastTok) return true;
  if (lastTok === ")" || lastTok === "]" || lastTok === "}") return false;
  if (lastTok === "++" || lastTok === "--") return false;
  if (ID_START.test(lastTok[0])) return KEYWORDS_BEFORE_EXPR.has(lastTok);
  if (/^[0-9]/.test(lastTok)) return false;
  if (lastTok[0] === '"' || lastTok[0] === "'" || lastTok[0] === "`") return false;
  return true;
}

export function compile(source, { filename = "input.tsx" } = {}) {
  const state = { usedJsx: false, usedJsxs: false, usedFragment: false };
  const body = transformRange(source, 0, source.length, state, filename);
  const imports = [];
  if (state.usedJsx) imports.push("jsx as __jsx");
  if (state.usedJsxs) imports.push("jsxs as __jsxs");
  if (state.usedFragment) imports.push("Fragment as __Fragment");
  const prelude = imports.length ? `import { ${imports.join(", ")} } from "react/jsx-runtime";\n` : "";
  return prelude + body;
}

function transformRange(src, start, end, state, filename) {
  let out = "";
  let i = start;
  let lastTok = "";
  while (i < end) {
    const c = src[i];
    if (c === "/" && src[i + 1] === "/") {
      const stop = src.indexOf("\n", i);
      const cut = stop === -1 || stop > end ? end : stop;
      out += src.slice(i, cut);
      i = cut;
      continue;
    }
    if (c === "/" && src[i + 1] === "*") {
      const stop = src.indexOf("*/", i + 2);
      const cut = stop === -1 ? end : stop + 2;
      out += src.slice(i, cut);
      i = cut;
      continue;
    }
    if (c === '"' || c === "'") {
      const j = readQuoted(src, i);
      out += src.slice(i, j);
      lastTok = src.slice(i, j);
      i = j;
      continue;
    }
    if (c === "`") {
      const j = readTemplate(src, i, state, filename);
      out += transformTemplate(src, i, j, state, filename);
      lastTok = "`";
      i = j;
      continue;
    }
    if (c === "/" && isExprPosition(lastTok)) {
      const j = readRegex(src, i);
      if (j > i) {
        out += src.slice(i, j);
        lastTok = "regex";
        i = j;
        continue;
      }
    }
    if (c === "<" && isExprPosition(lastTok) && looksLikeJsx(src, i)) {
      const parsed = parseElement(src, i, state, filename);
      out += parsed.code;
      i = parsed.end;
      lastTok = ")";
      continue;
    }
    if (ID_START.test(c)) {
      let j = i;
      while (j < end && ID_PART.test(src[j])) j += 1;
      const word = src.slice(i, j);
      out += word;
      lastTok = word;
      i = j;
      continue;
    }
    if (/[0-9]/.test(c)) {
      let j = i;
      while (j < end && /[0-9A-Za-z._]/.test(src[j])) j += 1;
      out += src.slice(i, j);
      lastTok = src.slice(i, j);
      i = j;
      continue;
    }
    if (!/\s/.test(c)) {
      if ((c === "+" || c === "-") && src[i + 1] === c) {
        out += src.slice(i, i + 2);
        lastTok = src.slice(i, i + 2);
        i += 2;
        continue;
      }
      lastTok = c;
    }
    out += c;
    i += 1;
  }
  return out;
}

function readQuoted(src, i) {
  const quote = src[i];
  let j = i + 1;
  while (j < src.length) {
    if (src[j] === "\\") { j += 2; continue; }
    if (src[j] === quote) return j + 1;
    j += 1;
  }
  throw new Error(`Unterminated string literal @${i}: ${src.slice(Math.max(0,i-80), i+80)}`);
}

function readTemplate(src, i) {
  let j = i + 1;
  while (j < src.length) {
    if (src[j] === "\\") { j += 2; continue; }
    if (src[j] === "`") return j + 1;
    if (src[j] === "$" && src[j + 1] === "{") {
      j = matchBrace(src, j + 1) + 1;
      continue;
    }
    j += 1;
  }
  throw new Error(`Unterminated template literal @${i}: ${src.slice(Math.max(0,i-80), i+80)}`);
}

function transformTemplate(src, start, end, state, filename) {
  let out = "";
  let i = start + 1;
  out += "`";
  while (i < end - 1) {
    if (src[i] === "\\") { out += src.slice(i, i + 2); i += 2; continue; }
    if (src[i] === "$" && src[i + 1] === "{") {
      const close = matchBrace(src, i + 1);
      out += "${" + transformRange(src, i + 2, close, state, filename) + "}";
      i = close + 1;
      continue;
    }
    out += src[i];
    i += 1;
  }
  return out + "`";
}

// Returns the index of the matching `}` for the `{` at position `open`.
// JSX-aware: nested elements are skipped wholesale so that closing tags such as
// `</li>` are never mistaken for regular-expression literals.
function matchBrace(src, open) {
  let depth = 0;
  let i = open;
  let lastTok = "";
  const scratch = { usedJsx: false, usedJsxs: false, usedFragment: false };
  while (i < src.length) {
    const c = src[i];
    if (c === "/" && src[i + 1] === "/") { const s = src.indexOf("\n", i); i = s === -1 ? src.length : s; continue; }
    if (c === "/" && src[i + 1] === "*") { const s = src.indexOf("*/", i + 2); i = s === -1 ? src.length : s + 2; continue; }
    if (c === '"' || c === "'") { const j = readQuoted(src, i); lastTok = src.slice(i, j); i = j; continue; }
    if (c === "`") { i = readTemplate(src, i); lastTok = "`"; continue; }
    if (c === "<" && isExprPosition(lastTok) && looksLikeJsx(src, i)) {
      i = parseElement(src, i, scratch, "<brace-scan>").end;
      lastTok = ")";
      continue;
    }
    if (c === "/" && isExprPosition(lastTok)) {
      const j = readRegex(src, i);
      if (j > i) { i = j; lastTok = "regex"; continue; }
    }
    if (ID_START.test(c)) {
      let j = i;
      while (j < src.length && ID_PART.test(src[j])) j += 1;
      lastTok = src.slice(i, j);
      i = j;
      continue;
    }
    if (c === "{") { depth += 1; lastTok = "{"; i += 1; continue; }
    if (c === "}") { depth -= 1; if (depth === 0) return i; lastTok = "}"; i += 1; continue; }
    if (!/\s/.test(c)) lastTok = c;
    i += 1;
  }
  throw new Error(`Unbalanced braces @${open}: ${src.slice(Math.max(0,open-80), open+120)}`);
}

function readRegex(src, i) {
  let j = i + 1;
  let inClass = false;
  while (j < src.length) {
    const c = src[j];
    if (c === "\\") { j += 2; continue; }
    if (c === "\n") return i;
    if (c === "[") inClass = true;
    else if (c === "]") inClass = false;
    else if (c === "/" && !inClass) {
      j += 1;
      while (j < src.length && /[a-z]/.test(src[j])) j += 1;
      return j;
    }
    j += 1;
  }
  return i;
}

function looksLikeJsx(src, i) {
  let j = i + 1;
  while (j < src.length && /\s/.test(src[j])) j += 1;
  return src[j] === ">" || ID_START.test(src[j] ?? "");
}

function readTagName(src, i) {
  let j = i;
  while (j < src.length && /[A-Za-z0-9_$.\-:]/.test(src[j])) j += 1;
  return { name: src.slice(i, j), end: j };
}

function skipSpace(src, i) {
  while (i < src.length && /\s/.test(src[i])) i += 1;
  return i;
}

function tagExpression(name) {
  if (name.includes(".")) return name;
  if (/^[a-z]/.test(name) || name.includes("-")) return JSON.stringify(name);
  return name;
}

function parseElement(src, start, state, filename) {
  let i = skipSpace(src, start + 1);
  // Fragment shorthand
  if (src[i] === ">") {
    state.usedFragment = true;
    const children = parseChildren(src, i + 1, "", state, filename);
    return { code: emit("__Fragment", [], children.children, state), end: children.end };
  }
  const { name, end: nameEnd } = readTagName(src, i);
  i = skipSpace(src, nameEnd);
  const attributes = [];
  while (i < src.length) {
    if (src[i] === "/" && src[i + 1] === ">") {
      return { code: emit(tagExpression(name), attributes, [], state), end: i + 2 };
    }
    if (src[i] === ">") {
      const children = parseChildren(src, i + 1, name, state, filename);
      return { code: emit(tagExpression(name), attributes, children.children, state), end: children.end };
    }
    if (src[i] === "{") {
      const close = matchBrace(src, i);
      let inner = src.slice(i + 1, close).trim();
      if (inner.startsWith("...")) inner = inner.slice(3);
      attributes.push({ spread: true, value: transformRange(src, i + 1, close, state, filename).trim().replace(/^\.\.\./, "") });
      i = skipSpace(src, close + 1);
      continue;
    }
    const attrName = readAttributeName(src, i);
    if (!attrName.name) throw new Error(`Cannot parse JSX attribute in ${filename} near: ${src.slice(i, i + 40)}`);
    i = skipSpace(src, attrName.end);
    if (src[i] !== "=") {
      attributes.push({ name: attrName.name, value: "true" });
      continue;
    }
    i = skipSpace(src, i + 1);
    if (src[i] === "{") {
      const close = matchBrace(src, i);
      attributes.push({ name: attrName.name, value: transformRange(src, i + 1, close, state, filename).trim() });
      i = skipSpace(src, close + 1);
      continue;
    }
    if (src[i] === '"' || src[i] === "'") {
      const close = readQuoted(src, i);
      attributes.push({ name: attrName.name, value: JSON.stringify(decodeEntities(src.slice(i + 1, close - 1))) });
      i = skipSpace(src, close);
      continue;
    }
    if (src[i] === "<") {
      const nested = parseElement(src, i, state, filename);
      attributes.push({ name: attrName.name, value: nested.code });
      i = skipSpace(src, nested.end);
      continue;
    }
    throw new Error(`Unsupported JSX attribute value in ${filename} near: ${src.slice(i, i + 40)}`);
  }
  throw new Error(`Unterminated JSX element <${name}> in ${filename}`);
}

function readAttributeName(src, i) {
  let j = i;
  if (src[j] === '"' || src[j] === "'") {
    const close = readQuoted(src, j);
    return { name: src.slice(j, close), end: close, quoted: true };
  }
  while (j < src.length && /[A-Za-z0-9_$\-:.]/.test(src[j])) j += 1;
  return { name: src.slice(i, j), end: j };
}

function parseChildren(src, start, tagName, state, filename) {
  const children = [];
  let i = start;
  let text = "";
  const flushText = () => {
    const parts = normalizeJsxText(text);
    if (parts !== null) children.push(JSON.stringify(parts));
    text = "";
  };
  while (i < src.length) {
    if (src[i] === "<" && src[i + 1] === "/") {
      flushText();
      const close = src.indexOf(">", i);
      const closingName = src.slice(i + 2, close).trim();
      if (closingName !== tagName) {
        throw new Error(`Mismatched JSX tags in ${filename}: <${tagName}> closed by </${closingName}> @${i}: ${src.slice(Math.max(0,i-160), i+60)}`);
      }
      return { children, end: close + 1 };
    }
    if (src[i] === "<") {
      flushText();
      const nested = parseElement(src, i, state, filename);
      children.push(nested.code);
      i = nested.end;
      continue;
    }
    if (src[i] === "{") {
      flushText();
      const close = matchBrace(src, i);
      const raw = src.slice(i + 1, close);
      if (!/^\s*\/\*/.test(raw) || !/\*\/\s*$/.test(raw)) {
        const expr = transformRange(src, i + 1, close, state, filename).trim();
        if (expr) children.push(expr);
      }
      i = close + 1;
      continue;
    }
    text += src[i];
    i += 1;
  }
  throw new Error(`Unterminated JSX children for <${tagName}> in ${filename}`);
}

const ENTITIES = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&nbsp;": " ",
  "&mdash;": "—", "&ndash;": "–", "&hellip;": "…", "&rsquo;": "’",
  "&lsquo;": "‘", "&ldquo;": "“", "&rdquo;": "”", "&times;": "×",
  "&middot;": "·", "&bull;": "•", "&copy;": "©", "&rarr;": "→",
  "&larr;": "←", "&check;": "✓", "&deg;": "°",
};

function decodeEntities(value) {
  return value.replace(/&(?:#x([0-9a-f]+)|#(\d+)|[a-z]+);/gi, (match, hex, dec) => {
    if (hex) return String.fromCodePoint(parseInt(hex, 16));
    if (dec) return String.fromCodePoint(Number(dec));
    return ENTITIES[match.toLowerCase()] ?? match;
  });
}

// Implements the JSX whitespace rules: lines that are pure whitespace are
// dropped, interior newlines collapse to a single space.
function normalizeJsxText(raw) {
  if (!raw) return null;
  const lines = raw.split("\n");
  const kept = [];
  for (let index = 0; index < lines.length; index += 1) {
    let line = lines[index];
    const isFirst = index === 0;
    const isLast = index === lines.length - 1;
    if (!isFirst) line = line.replace(/^[ \t]+/, "");
    if (!isLast) line = line.replace(/[ \t]+$/, "");
    if (line) kept.push(line);
  }
  const joined = kept.join(" ");
  return joined ? decodeEntities(joined) : null;
}

function emit(tag, attributes, children, state) {
  let keyValue = null;
  const props = [];
  for (const attribute of attributes) {
    if (attribute.spread) { props.push(`...${attribute.value}`); continue; }
    if (attribute.name === "key") { keyValue = attribute.value; continue; }
    const name = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(attribute.name) ? attribute.name : JSON.stringify(attribute.name.replace(/^["']|["']$/g, ""));
    props.push(`${name}: ${attribute.value}`);
  }
  let helper = "__jsx";
  if (children.length === 1) {
    props.push(`children: ${children[0]}`);
  } else if (children.length > 1) {
    helper = "__jsxs";
    props.push(`children: [${children.join(", ")}]`);
  }
  if (helper === "__jsxs") state.usedJsxs = true; else state.usedJsx = true;
  const propsObject = props.length ? `{ ${props.join(", ")} }` : "{}";
  return keyValue === null ? `${helper}(${tag}, ${propsObject})` : `${helper}(${tag}, ${propsObject}, ${keyValue})`;
}
