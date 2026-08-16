#!/usr/bin/env node
// Keeps the four places a study path is declared from drifting apart:
//
//   1. `PATH_DEFINITIONS` in src/lib/paths/study-paths.ts — what the app
//      renders, and where each path's course membership is declared.
//   2. `STUDY_PATH_SLUGS` in scripts/site-routes.mjs — what gets a static
//      route entry point and a sitemap line at build time.
//   3. src/data/routes.json — the declarative route contract.
//   4. content-v2/catalog.json — the courses that actually exist.
//
// A path that exists in (1) but not (2) still works in the single-page app, but
// a direct hit on its URL lands on the 404 shell and its canonical URL points at
// the homepage. A path naming a course that does not exist in (4) renders as a
// path with a missing course, or — if every slug is mistyped — as an empty one.
// Those are the two failures this guards against.
//
// This is plain ESM and cannot import the TypeScript module, so it reads the
// two declarative fields out of the source: `category: "..."` for a path that
// takes a whole catalog category, and `courseSlugs: [...]` for a curated path
// that names its courses. Both are literal in that file for exactly this
// reason.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STUDY_PATH_SLUGS } from "./site-routes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (message) => errors.push(message);

const source = fs.readFileSync(path.join(root, "src/lib/paths/study-paths.ts"), "utf8");
const start = source.indexOf("const PATH_DEFINITIONS");
if (start < 0) fail("Could not find PATH_DEFINITIONS in src/lib/paths/study-paths.ts");
const block = source.slice(Math.max(start, 0));
const end = block.indexOf("\n];");
const declaration = end >= 0 ? block.slice(0, end) : block;

const catalog = JSON.parse(fs.readFileSync(path.join(root, "content-v2/catalog.json"), "utf8"));
const catalogSlugs = new Set(catalog.subjects.map((subject) => subject.slug));
const catalogCategories = new Set(catalog.subjects.map((subject) => subject.category));
const coursesInCategory = (category) =>
  catalog.subjects.filter((subject) => subject.category === category).map((subject) => subject.slug);

// Each definition starts at a `slug:` key indented four spaces; everything up to
// the next one belongs to it.
const declared = [];
const chunks = declaration.split(/\n {4}slug: "/).slice(1);
for (const chunk of chunks) {
  const slug = chunk.slice(0, chunk.indexOf("\""));
  const category = /\n {4}category: "([a-z0-9-]+)"/.exec(chunk)?.[1];
  const courseList = /\n {4}courseSlugs: \[([\s\S]*?)\]/.exec(chunk)?.[1];
  // Every quoted string in the list, not only the well-formed ones: a slug
  // typed with a capital letter or a stray space has to be reported, not
  // skipped for failing to look like a slug.
  const courseSlugs = category
    ? coursesInCategory(category)
    : [...(courseList ?? "").matchAll(/"([^"]*)"/g)].map((match) => match[1]);
  if (category && !catalogCategories.has(category)) {
    fail(`Study path "${slug}" takes the category "${category}", which no course in content-v2/catalog.json uses`);
  }
  if (!category && !courseList) {
    fail(`Study path "${slug}" declares neither a category nor a courseSlugs list`);
  }
  if (!courseSlugs.length) fail(`Study path "${slug}" resolves to no courses at all`);
  const seen = new Set();
  for (const courseSlug of courseSlugs) {
    if (!catalogSlugs.has(courseSlug)) {
      fail(`Study path "${slug}" names the course "${courseSlug}", which does not exist in content-v2/catalog.json`);
    }
    if (seen.has(courseSlug)) fail(`Study path "${slug}" names the course "${courseSlug}" twice`);
    seen.add(courseSlug);
  }
  declared.push({ slug, courseSlugs });
}

if (!declared.length) fail("Could not read any study-path slug from src/lib/paths/study-paths.ts");

const mirrored = new Set(STUDY_PATH_SLUGS);
const declaredSet = new Set(declared.map((entry) => entry.slug));
for (const slug of declaredSet) {
  if (!mirrored.has(slug)) fail(`Study path "${slug}" is declared in study-paths.ts but missing from STUDY_PATH_SLUGS in site-routes.mjs`);
}
for (const slug of mirrored) {
  if (!declaredSet.has(slug)) fail(`STUDY_PATH_SLUGS lists "${slug}", which no longer exists in study-paths.ts`);
}
if (declared.length !== declaredSet.size) fail("study-paths.ts declares the same slug more than once");

const routes = JSON.parse(fs.readFileSync(path.join(root, "src/data/routes.json"), "utf8"));
const routePaths = new Set(routes.map((route) => route.path));
for (const required of ["/paths", "/paths/:pathSlug", "/coverage", "/review", "/terms", "/privacy", "/licensing", "/accessibility"]) {
  if (!routePaths.has(required)) fail(`src/data/routes.json is missing the route pattern ${required}`);
}

// Being in no path is allowed: the course catalog lists every course either
// way, and study-paths.ts states the figure on every path. It is reported here
// rather than failed, so a content import that leaves a course unpathed is a
// visible decision instead of a silent one.
const pathed = new Set(declared.flatMap((entry) => entry.courseSlugs).filter((slug) => catalogSlugs.has(slug)));
const unpathed = [...catalogSlugs].filter((slug) => !pathed.has(slug));

console.log(`STUDY PATH VALIDATION: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`Study paths declared: ${declaredSet.size}; mirrored for static generation: ${mirrored.size}`);
console.log(`Catalog courses: ${catalogSlugs.size}; named by at least one path: ${pathed.size}; named by none: ${unpathed.length}${unpathed.length ? ` (${unpathed.join(", ")})` : ""}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
