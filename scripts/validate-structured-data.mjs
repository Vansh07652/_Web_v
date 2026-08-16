#!/usr/bin/env node
// Guards the two halves of the site's structured data, statically, with no
// build step:
//
//   1. src/lib/structured-data.ts may only ever emit WebSite, BreadcrumbList
//      and ListItem (SearchAction is permitted, but only if it is ever wired to
//      a search page that reads its query parameter). Course, Quiz, Question,
//      credential and medical types are refused: nothing in this repository
//      backs those claims, and a structured-data claim the project cannot back
//      is both untrue and a manual-action risk.
//   2. index.html still carries the crawler-facing tags, and the canonical and
//      og:url tags still match the exact regexes that
//      scripts/create-github-pages-fallback.mjs rewrites them with. That second
//      check is the valuable one: reformat either tag — even just dropping the
//      space before the slash — and the rewrite silently stops matching, so
//      every static route entry point ships the homepage as its canonical URL.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (message) => errors.push(message);

const ALLOWED_TYPES = new Set(["WebSite", "SearchAction", "BreadcrumbList", "ListItem"]);
const REFUSED_TYPES = [
  "Course", "CourseInstance", "Quiz", "Question", "EducationalOccupationalCredential",
  "LearningResource", "MedicalEntity", "MedicalCondition", "MedicalWebPage",
  "MedicalGuideline", "Drug", "Physician", "Review", "AggregateRating", "Rating",
];
const SCHEMA_CONTEXT = "https://schema.org";

const readIfPresent = (relative) => {
  const target = path.join(root, relative);
  if (!fs.existsSync(target)) {
    fail(`Missing ${relative}`);
    return "";
  }
  return fs.readFileSync(target, "utf8");
};

const schemaSource = readIfPresent("src/lib/structured-data.ts");
const indexSource = readIfPresent("index.html");
const fallbackSource = readIfPresent("scripts/create-github-pages-fallback.mjs");

/* -------------------------------------------------------------------------
   src/lib/structured-data.ts
   ------------------------------------------------------------------------- */

// JSON-LD keys in this module are written either as a string literal or as a
// module-level string constant, so resolve one level of indirection before
// judging the value.
const stringConstant = (identifier) => {
  const match = schemaSource.match(new RegExp(`const\\s+${identifier}\\s*=\\s*"([^"]*)"`));
  return match ? match[1] : undefined;
};
const jsonLdValues = (key) => {
  const values = [];
  const pattern = new RegExp(`"${key}"\\s*:\\s*(?:"([^"]*)"|([A-Za-z_$][\\w$]*))`, "g");
  for (const match of schemaSource.matchAll(pattern)) {
    values.push(match[1] !== undefined ? match[1] : stringConstant(match[2]) ?? `unresolved:${match[2]}`);
  }
  return values;
};

const emittedTypes = new Set(jsonLdValues("@type"));
const emittedContexts = jsonLdValues("@context");

if (schemaSource && !emittedTypes.size) fail("src/lib/structured-data.ts emits no schema type at all");
for (const type of emittedTypes) {
  if (!ALLOWED_TYPES.has(type)) fail(`Disallowed schema type "${type}" in src/lib/structured-data.ts (allowed: ${[...ALLOWED_TYPES].join(", ")})`);
}
for (const type of REFUSED_TYPES) {
  if (new RegExp(`"${type}"`).test(schemaSource)) fail(`src/lib/structured-data.ts references the refused schema type "${type}"`);
}

if (schemaSource && !emittedContexts.length) fail("src/lib/structured-data.ts declares no @context");
for (const context of emittedContexts) {
  if (context !== SCHEMA_CONTEXT) fail(`@context is "${context}", expected "${SCHEMA_CONTEXT}"`);
}

if (/innerHTML/.test(schemaSource)) fail("src/lib/structured-data.ts writes markup through innerHTML; JSON-LD must be set as text");
if (schemaSource && !/document\.createElement\(/.test(schemaSource)) fail("src/lib/structured-data.ts does not build its script element with document.createElement");
if (schemaSource && !/\.textContent\s*=/.test(schemaSource)) fail("src/lib/structured-data.ts does not set the JSON-LD payload with textContent");
// Without a marker attribute the module cannot find and remove what it wrote
// last time, and every route change would leave another copy behind.
if (schemaSource && !/data-medmosa-schema/.test(schemaSource)) fail("src/lib/structured-data.ts does not tag its elements with data-medmosa-schema, so route changes would accumulate duplicates");

for (const symbol of ["buildWebSiteSchema", "buildBreadcrumbSchema", "crumbsForPath", "applyStructuredData"]) {
  if (schemaSource && !new RegExp(`export const ${symbol}\\b`).test(schemaSource)) fail(`src/lib/structured-data.ts does not export ${symbol}`);
}

/* -------------------------------------------------------------------------
   index.html
   ------------------------------------------------------------------------- */

// Attribute-level checks, because several of these tags are wrapped across
// three lines by the formatter.
const requiredTags = [
  ["canonical link", /\srel="canonical"/],
  ["og:url", /property="og:url"/],
  ["og:title", /property="og:title"/],
  ["og:description", /property="og:description"/],
  ["og:image", /property="og:image"/],
  ["twitter:card", /name="twitter:card"/],
];
for (const [label, pattern] of requiredTags) {
  if (indexSource && !pattern.test(indexSource)) fail(`index.html is missing its ${label} tag`);
}

const ogImage = indexSource.match(/property="og:image"\s+content="([^"]*)"/);
if (ogImage && !/^https?:\/\//.test(ogImage[1])) fail(`index.html og:image is not an absolute URL: ${ogImage[1]}`);

// A large-image card is a promise that the image exists; without it the card
// renders as a broken preview, so drop back to the summary card instead.
const twitterCard = indexSource.match(/name="twitter:card"\s+content="([^"]*)"/);
if (twitterCard?.[1] === "summary_large_image" && !fs.existsSync(path.join(root, "public/og.png"))) {
  fail("index.html claims twitter:card=summary_large_image but public/og.png does not exist");
}

/* -------------------------------------------------------------------------
   The GitHub Pages canonical rewrite contract
   ------------------------------------------------------------------------- */

const canonicalPattern = /<link rel="canonical" href="[^"]*" \/>/;
const ogUrlPattern = /<meta property="og:url" content="[^"]*" \/>/;
for (const [label, pattern] of [["canonical", canonicalPattern], ["og:url", ogUrlPattern]]) {
  if (indexSource && !pattern.test(indexSource)) {
    fail(`index.html ${label} tag no longer matches ${pattern.source} — create-github-pages-fallback.mjs would leave every static route pointing at the homepage`);
  }
  if (fallbackSource && !fallbackSource.includes(pattern.source)) {
    fail(`scripts/create-github-pages-fallback.mjs no longer rewrites the ${label} tag with ${pattern.source}; this check is out of date`);
  }
}

console.log(`STRUCTURED DATA: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`Schema types emitted: ${[...emittedTypes].sort().join(", ") || "none"}; refused types checked: ${REFUSED_TYPES.length}; index.html tags checked: ${requiredTags.length}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
