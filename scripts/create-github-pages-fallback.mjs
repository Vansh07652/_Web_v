import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectRoutes, SITE_ORIGIN } from "./site-routes.mjs";

const websiteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(websiteDir, "dist/index.html");
const fallbackPath = path.join(websiteDir, "dist/404.html");
if (!fs.existsSync(indexPath)) throw new Error("Build output index.html is missing");
fs.copyFileSync(indexPath, fallbackPath);
console.log("Created dist/404.html SPA fallback for static hosts.");

if (process.argv.includes("--routes")) {
  const template = fs.readFileSync(indexPath, "utf8");
  const routes = collectRoutes(websiteDir);

  // Each route entry point is a copy of index.html, so without this rewrite
  // every one of them would advertise the homepage as its canonical URL to any
  // crawler that does not execute JavaScript.
  const withCanonicalUrl = (route) => {
    const url = `${SITE_ORIGIN}/${route}`;
    return template
      .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
      .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  };

  for (const route of routes) {
    const routeDirectory = path.join(websiteDir, "dist", ...route.split("/"));
    fs.mkdirSync(routeDirectory, { recursive: true });
    fs.writeFileSync(path.join(routeDirectory, "index.html"), withCanonicalUrl(route));
  }
  console.log(`Created ${routes.length} GitHub Pages route entry points with per-route canonical URLs.`);
}
