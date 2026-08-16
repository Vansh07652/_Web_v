// Runs the site in Chromium: captures console errors, failed requests, axe-core
// accessibility violations, horizontal-overflow checks and screenshots.
import { chromium } from "../node_modules/playwright-core/index.mjs";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE = process.env.BASE ?? "http://127.0.0.1:4173";
const OUT = process.env.SHOTS ?? fileURLToPath(new URL("../.audit/shots", import.meta.url));
const AXE = readFileSync(new URL("../node_modules/axe-core/axe.min.js", import.meta.url), "utf8");

const ROUTES = JSON.parse(process.env.ROUTES ?? "null") ?? [
  ["home", "/"],
  ["learn", "/learn"],
  ["subject", "/learn/anatomy-physiology-1"],
  ["unit", "/learn/anatomy-physiology-1/body-organization-and-homeostasis"],
  ["subjects", "/subjects"],
  ["notes", "/notes"],
  ["questions", "/questions"],
  ["search", "/search"],
  ["about", "/about"],
  ["downloads", "/downloads"],
  ["notfound", "/this-route-does-not-exist"],
];

const VIEWPORTS = [
  ["mobile", 375, 812],
  ["tablet", 768, 1024],
  ["desktop", 1440, 900],
];

const shot = process.env.SHOT_VIEWPORTS ? process.env.SHOT_VIEWPORTS.split(",") : ["mobile", "desktop"];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });
const report = { routes: [], generatedAt: new Date().toISOString() };

for (const [name, route] of ROUTES) {
  for (const [viewportName, width, height] of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text().slice(0, 300)); });
    page.on("pageerror", (error) => pageErrors.push(String(error).slice(0, 300)));
    page.on("requestfailed", (request) => failedRequests.push(`${request.url()} ${request.failure()?.errorText ?? ""}`.slice(0, 200)));
    page.on("response", (response) => { if (response.status() >= 400) failedRequests.push(`${response.status()} ${response.url()}`.slice(0, 200)); });

    let axeResult = { violations: [] };
    let overflow = null;
    let title = "";
    let headings = [];
    try {
      await page.goto(`${BASE}${route}`, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForTimeout(400);
      title = await page.title();
      await page.addScriptTag({ content: AXE });
      axeResult = await page.evaluate(async () => await window.axe.run(document, { resultTypes: ["violations"] }));
      overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        offenders: [...document.querySelectorAll("body *")]
          .filter((element) => element.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
          .slice(0, 6)
          .map((element) => `${element.tagName.toLowerCase()}.${(element.className || "").toString().split(" ")[0]}`),
      }));
      headings = await page.evaluate(() => [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((element) => `${element.tagName}:${element.textContent.trim().slice(0, 60)}`));
      if (shot.includes(viewportName)) {
        await page.screenshot({ path: path.join(OUT, `${name}-${viewportName}.png`), fullPage: true });
      }
    } catch (error) {
      pageErrors.push(`NAVIGATION: ${String(error).slice(0, 300)}`);
    }
    report.routes.push({
      route, viewport: viewportName, title,
      consoleErrors, pageErrors, failedRequests,
      overflow: overflow && overflow.scrollWidth > overflow.clientWidth + 1 ? overflow : null,
      headings: viewportName === "desktop" ? headings : undefined,
      violations: axeResult.violations.map((violation) => ({
        id: violation.id, impact: violation.impact, nodes: violation.nodes.length,
        help: violation.help,
        sample: violation.nodes.slice(0, 2).map((node) => node.html.slice(0, 160)),
      })),
    });
    await context.close();
  }
}

await browser.close();
writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));

const summary = report.routes.flatMap((entry) => {
  const lines = [];
  const problems = [
    ...entry.pageErrors.map((value) => `pageerror: ${value}`),
    ...entry.consoleErrors.map((value) => `console: ${value}`),
    ...[...new Set(entry.failedRequests)].map((value) => `request: ${value}`),
    ...entry.violations.map((value) => `a11y[${value.impact}] ${value.id} x${value.nodes}: ${value.sample[0] ?? ""}`),
    ...(entry.overflow ? [`overflow: ${entry.overflow.scrollWidth}>${entry.overflow.clientWidth} ${entry.overflow.offenders.join(", ")}`] : []),
  ];
  if (problems.length) lines.push(`\n## ${entry.route} @${entry.viewport}`, ...problems.map((value) => `  - ${value}`));
  return lines;
});
console.log(summary.length ? summary.join("\n") : "No console errors, failed requests, a11y violations or overflow found.");
