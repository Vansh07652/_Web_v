// Crawls the single-page app, following in-app links, and reports any route
// that renders the not-found view or throws a runtime error.
import { chromium } from "../node_modules/playwright-core/index.mjs";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const BASE = process.env.BASE ?? "http://127.0.0.1:4173";
const MAX = Number(process.env.MAX ?? 220);

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

const errors = [];
page.on("pageerror", (error) => errors.push({ route: current, message: String(error).slice(0, 200) }));
page.on("console", (message) => { if (message.type() === "error") errors.push({ route: current, message: message.text().slice(0, 200) }); });
page.on("response", (response) => { if (response.status() >= 400) errors.push({ route: current, message: `${response.status()} ${response.url()}` }); });

const queue = ["/"];
const seen = new Set(queue);
const notFound = [];
const visited = [];
let current = "/";

while (queue.length && visited.length < MAX) {
  current = queue.shift();
  try {
    await page.goto(`${BASE}${current}`, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(150);
    const info = await page.evaluate(() => ({
      notFound: Boolean(document.querySelector(".not-found")),
      title: document.title,
      hrefs: [...document.querySelectorAll("a[href]")].map((anchor) => anchor.getAttribute("href")),
      externals: [...document.querySelectorAll("a[href^='http']")].map((anchor) => anchor.href),
    }));
    visited.push(current);
    if (info.notFound) notFound.push({ route: current, title: info.title });
    for (const href of info.hrefs) {
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const clean = href.split("#")[0].replace(/\/$/, "") || "/";
      if (!seen.has(clean)) { seen.add(clean); queue.push(clean); }
    }
  } catch (error) {
    errors.push({ route: current, message: `NAV ${String(error).slice(0, 160)}` });
  }
}

await browser.close();
const result = { visited: visited.length, discovered: seen.size, notFound, errors };
const outFile = fileURLToPath(new URL("../.audit/crawl.json", import.meta.url));
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(result, null, 2));
console.log(`visited ${visited.length} of ${seen.size} discovered routes`);
console.log(`not-found routes: ${notFound.length}`);
for (const item of notFound.slice(0, 25)) console.log(`  404 ${item.route}`);
const unique = [...new Map(errors.map((item) => [`${item.route}|${item.message}`, item])).values()];
console.log(`errors: ${unique.length}`);
for (const item of unique.slice(0, 25)) console.log(`  ${item.route} :: ${item.message}`);
