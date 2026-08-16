// WCAG 2.1 contrast checker for the design-system token pairs actually used.
//
// Pairs are expressed as TOKEN NAMES and resolved from src/styles/main.css at
// run time. They used to be hard-coded hex values, which meant a palette change
// could not fail this check — it happily re-validated the old colours while the
// site shipped new ones.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const cssPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "styles", "main.css");
const rootBlock = fs.readFileSync(cssPath, "utf8").match(/:root\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";
const TOKENS = new Map(
  [...rootBlock.matchAll(/(--[\w-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)].map((match) => [match[1], match[2]]),
);
const resolve = (value) => {
  if (typeof value === "string" && value.startsWith("--")) {
    const found = TOKENS.get(value);
    if (!found) throw new Error(`contrast: token ${value} is not a colour in main.css :root`);
    return found;
  }
  return value;
};
const hex = (value) => {
  const clean = value.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  return [0, 2, 4].map((offset) => parseInt(full.slice(offset, offset + 2), 16));
};

const channel = (value) => {
  const scaled = value / 255;
  return scaled <= 0.03928 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
};

const luminance = (color) => {
  const [r, g, b] = hex(color).map(channel);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const ratio = (a, b) => {
  const first = luminance(a);
  const second = luminance(b);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
};

const PAIRS = JSON.parse(process.argv[2] ?? "null") ?? [
  // [label, foreground token, background token, minimum]
  ["body text on paper", "--ink", "--paper", 4.5],
  ["body text on canvas", "--ink", "--canvas", 4.5],
  ["muted text on paper", "--ink-muted", "--paper", 4.5],
  ["muted text on canvas", "--ink-muted", "--canvas", 4.5],
  ["muted text on amber surface", "--ink-muted", "--amber-050", 4.5],
  ["muted text on accent surface", "--ink-muted", "--teal-050", 4.5],
  ["heading on paper", "--navy-700", "--paper", 4.5],
  ["link on paper", "--teal-700", "--paper", 4.5],
  ["link on canvas", "--teal-700", "--canvas", 4.5],
  ["eyebrow on canvas", "--teal-700", "--canvas", 4.5],
  ["accent on paper", "--teal-600", "--paper", 4.5],
  ["primary button label", "--paper", "--navy-800", 4.5],
  ["primary button hover", "--paper", "--navy-900", 4.5],
  ["accent button label", "--ink", "--amber-500", 4.5],
  ["inverse body on dark", "--on-dark", "--navy-900", 4.5],
  ["inverse muted on dark", "--on-dark-muted", "--navy-900", 4.5],
  ["success text on success surface", "--success", "--success-soft", 4.5],
  ["danger text on danger surface", "--danger", "--danger-soft", 4.5],
  ["warning text on warning surface", "--warning", "--amber-050", 4.5],
  ["badge text on badge surface", "--ink-soft", "--line-soft", 4.5],
  ["focus ring vs canvas", "--teal-700", "--canvas", 3],
  ["focus ring vs paper", "--teal-700", "--paper", 3],
  ["border vs paper", "--line", "--paper", 1.2],
  ["nav current on nav surface", "--navy-700", "--navy-050", 4.5],
].map(([label, fg, bg, min]) => [label, resolve(fg), resolve(bg), min]);


let failures = 0;
const rows = PAIRS.map(([label, foreground, background, minimum]) => {
  const value = ratio(foreground, background);
  const pass = value >= minimum;
  if (!pass) failures += 1;
  return `${pass ? "PASS" : "FAIL"}  ${value.toFixed(2).padStart(6)}:1  (min ${minimum})  ${label}  ${foreground} on ${background}`;
});
console.log(rows.join("\n"));
console.log(failures ? `\n${failures} pair(s) below threshold.` : "\nAll pairs meet their threshold.");
process.exitCode = failures ? 1 : 0;
