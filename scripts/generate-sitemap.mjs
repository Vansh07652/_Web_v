// Writes dist/sitemap.xml from the same route set the static route entry points
// are generated from, so the sitemap can never drift from what is deployed.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectRoutes, SITE_ORIGIN } from "./site-routes.mjs";

const websiteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(websiteDir, "dist");
if (!fs.existsSync(distDir)) throw new Error("dist/ is missing — run the build first");

const routes = collectRoutes(websiteDir).filter((route) => route !== "auth/callback");
const today = new Date().toISOString().slice(0, 10);

// The legal pages are indexable and belong in the sitemap — they are how a
// reader checks the licensing and the medical disclaimer — but they are not
// what anyone came here to study, so they sit at the bottom of the ranking.
const LEGAL_ROUTES = new Set(["terms", "privacy", "licensing", "accessibility"]);

// Landing pages first, then courses, then everything else.
const priorityFor = (route) => {
  if (route === "") return "1.0";
  if (route === "learn" || route === "search" || route === "questions") return "0.9";
  if (/^learn\/[^/]+$/.test(route)) return "0.8";
  if (/^learn\/[^/]+\/[^/]+$/.test(route)) return "0.7";
  if (route === "coverage" || route === "review" || route === "paths") return "0.8";
  if (/^paths\/[^/]+$/.test(route)) return "0.7";
  if (LEGAL_ROUTES.has(route)) return "0.3";
  if (route === "404" || route === "error") return null;
  return "0.6";
};

const entries = ["", ...routes]
  .map((route) => ({ route, priority: priorityFor(route) }))
  .filter((entry) => entry.priority !== null)
  .map(({ route, priority }) => [
    "  <url>",
    `    <loc>${SITE_ORIGIN}/${route}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n"));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml);
console.log(`Wrote dist/sitemap.xml with ${entries.length} URLs.`);
