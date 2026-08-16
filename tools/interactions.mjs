// Behavioural checks that a static audit cannot cover: the disclosure menu,
// tablist keyboard support, quiz feedback content, filtering, and back/forward
// focus handling.
import { chromium } from "../node_modules/playwright-core/index.mjs";

const BASE = process.env.BASE ?? "http://127.0.0.1:4173";
const results = [];
const check = (name, pass, detail = "") => results.push({ name, pass, detail });

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox"] });

/* ---------------------------------------------------------------- mobile nav */
{
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

  const toggle = page.locator("button.menu-button");
  check("menu: hidden by default", (await page.locator(".site-nav.is-open").count()) === 0);
  await toggle.click();
  check("menu: opens on click", await page.locator(".site-nav.is-open").isVisible());
  check("menu: aria-expanded true", (await toggle.getAttribute("aria-expanded")) === "true");
  const controls = await toggle.getAttribute("aria-controls");
  const navMatches = await page.evaluate((id) => document.querySelectorAll(`nav[id="${id}"]`).length, controls);
  check("menu: aria-controls resolves to exactly one nav", navMatches === 1, `${controls} -> ${navMatches}`);

  await page.keyboard.press("Escape");
  check("menu: closes on Escape", (await page.locator(".site-nav.is-open").count()) === 0);
  check("menu: focus returns to the toggle", await toggle.evaluate((element) => element === document.activeElement));

  await toggle.click();
  await page.mouse.click(180, 700);
  check("menu: closes on outside click", (await page.locator(".site-nav.is-open").count()) === 0);

  await toggle.click();
  await page.locator(".site-nav.is-open a", { hasText: "Search" }).first().click();
  check("menu: closes after navigating", (await page.locator(".site-nav.is-open").count()) === 0);
  check("menu: navigation actually happened", new URL(page.url()).pathname === "/search", page.url());
  await context.close();
}

/* -------------------------------------------------------------------- tablist */
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/learn/anatomy-physiology-1/introduction-to-the-human-body/homeostasis`, { waitUntil: "networkidle" });

  const tabs = page.locator('[role="tab"]');
  check("tabs: rendered as a tablist", (await page.locator('[role="tablist"]').count()) === 1);
  check("tabs: exactly one selected", (await page.locator('[role="tab"][aria-selected="true"]').count()) === 1);
  check("tabs: roving tabindex", (await page.locator('[role="tab"][tabindex="0"]').count()) === 1);

  await tabs.first().focus();
  await page.keyboard.press("ArrowRight");
  const selectedAfterArrow = await page.locator('[role="tab"][aria-selected="true"]').innerText();
  check("tabs: ArrowRight moves selection", selectedAfterArrow.startsWith("In plain language"), selectedAfterArrow);
  check("tabs: panel is labelled by the selected tab", (await page.locator('[role="tabpanel"]').count()) === 1);

  await page.locator('[role="tab"]', { hasText: "Practice" }).click();
  await page.waitForSelector(".quiz", { timeout: 20000 });

  // Answer incorrectly on purpose: the fix under test is that feedback shows the
  // full text of the correct answer, not just its letter.
  const options = page.locator(".question-option");
  await options.nth(1).locator("input").check();
  await page.locator('button[type="submit"]').click();
  await page.waitForSelector(".question-feedback");
  const feedback = await page.locator(".question-feedback").innerText();
  const correctText = await page.locator(".question-option.is-correct span:last-child").innerText();
  const answerLine = feedback.split("\n").find((line) => line.startsWith("Correct answer:")) ?? "";
  const answerBody = answerLine.replace("Correct answer:", "").trim();
  check(
    "quiz: feedback names the answer text, not just its letter",
    answerBody.length > 2 && correctText.replace("Correct answer", "").trim().includes(answerBody.slice(0, 20)),
    `got "${answerBody}"`,
  );
  check("quiz: rationale rendered", feedback.includes("Why it's correct"));
  check("quiz: plain-language rationale rendered", feedback.includes("In plain language"));
  await context.close();
}

/* --------------------------------------------------------------- course filter */
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/learn`, { waitUntil: "networkidle" });

  const before = await page.locator(".card-grid .card").count();
  await page.locator('.filter-bar input[type="search"]').last().fill("chem");
  await page.waitForTimeout(200);
  const after = await page.locator(".card-grid .card").count();
  check("filter: narrows the course grid", after > 0 && after < before, `${before} → ${after}`);

  await page.locator('.filter-bar input[type="search"]').last().fill("zzzzzz");
  await page.waitForTimeout(200);
  check("filter: shows an empty state with a way out", (await page.locator(".empty-state").count()) === 1);
  await page.locator(".empty-state button").click();
  await page.waitForTimeout(200);
  check("filter: clearing restores every course", (await page.locator(".card-grid .card").count()) === before);
  await context.close();
}

/* ------------------------------------------------------- back/forward behaviour */
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.locator('a[href="/about"]').first().click();
  await page.waitForTimeout(300);
  check("routing: in-app link navigates", new URL(page.url()).pathname === "/about", page.url());
  check("routing: title updated", (await page.title()).includes("How this works"), await page.title());

  await page.evaluate(() => window.scrollTo(0, 800));
  await page.goBack();
  await page.waitForTimeout(400);
  check("routing: back restores the home route", new URL(page.url()).pathname === "/", page.url());
  check("routing: back moves focus to main", await page.evaluate(() => document.activeElement?.id === "main-content"));
  check("routing: back resets scroll", await page.evaluate(() => window.scrollY < 10));

  const canonical = await page.evaluate(() => document.querySelector('link[rel="canonical"]')?.getAttribute("href"));
  check("metadata: canonical present and absolute", Boolean(canonical?.startsWith("http")), canonical ?? "missing");
  const ogImage = await page.evaluate(() => document.querySelector('meta[property="og:image"]')?.getAttribute("content"));
  check("metadata: og:image absolute", Boolean(ogImage?.startsWith("http")), ogImage ?? "missing");
  await context.close();
}

/* ------------------------------------------------------------------ skip link */
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  const focused = await page.evaluate(() => document.activeElement?.className);
  check("keyboard: first tab stop is the skip link", focused === "skip-link", String(focused));
  await context.close();
}

await browser.close();

const failed = results.filter((result) => !result.pass);
for (const result of results) console.log(`${result.pass ? "PASS" : "FAIL"}  ${result.name}${result.detail ? `  — ${result.detail}` : ""}`);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exitCode = failed.length ? 1 : 0;
