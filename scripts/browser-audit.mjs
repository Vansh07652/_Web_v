#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const axeSource = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const subjects = JSON.parse(fs.readFileSync(path.join(root, "data/subjects.json"), "utf8"));
const lessons = JSON.parse(fs.readFileSync(path.join(root, "data/lessons.json"), "utf8"));
const notes = JSON.parse(fs.readFileSync(path.join(root, "data/notes.json"), "utf8"));
const questions = JSON.parse(fs.readFileSync(path.join(root, "data/questions.json"), "utf8"));
const tags = JSON.parse(fs.readFileSync(path.join(root, "data/tags.json"), "utf8"));
const curriculumCatalog = JSON.parse(fs.readFileSync(path.join(root, "content-v2/catalog.json"), "utf8"));
const curriculumSearchIndex = JSON.parse(fs.readFileSync(path.join(root, "content-v2/client/search-index.json"), "utf8"));
const curriculumSubjects = curriculumCatalog.subjects.map((summary) => JSON.parse(fs.readFileSync(path.join(root, "content-v2/subjects", summary.slug, "subject.json"), "utf8")));
const bookLibrary = JSON.parse(fs.readFileSync(path.join(root, "book-library", "manifest.json"), "utf8"));
const publishedBooks = bookLibrary.books.filter((book) => book.status === "published");
const errors = [];
const checkedRoutes = new Set();

const assert = (condition, message) => { if (!condition) errors.push(message); };
const getPort = () => new Promise((resolve, reject) => {
  const server = net.createServer();
  server.once("error", reject);
  server.listen(0, "127.0.0.1", () => {
    const address = server.address();
    server.close(() => resolve(address.port));
  });
});
const waitForServer = async (url) => {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try { if ((await fetch(url)).ok) return; } catch { /* retry while preview starts */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Preview server did not start at ${url}`);
};

const liveBaseUrl = process.env.LIVE_BASE_URL?.replace(/\/+$/, "");
const port = liveBaseUrl ? undefined : await getPort();
const baseUrl = liveBaseUrl ?? `http://127.0.0.1:${port}`;
const viteCli = path.resolve(path.dirname(require.resolve("vite")), "..", "..", "bin", "vite.js");
const preview = liveBaseUrl ? undefined : spawn(process.execPath, [viteCli, "preview", "--host", "127.0.0.1", "--port", String(port)], {
  cwd: root,
  env: { ...process.env, NO_COLOR: "1" },
  stdio: ["ignore", "pipe", "pipe"],
});
let previewLog = "";
preview?.stdout.on("data", (chunk) => { previewLog += chunk; });
preview?.stderr.on("data", (chunk) => { previewLog += chunk; });

let browser;
try {
  await waitForServer(baseUrl);
  const executablePath = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (!fs.existsSync(executablePath)) throw new Error(`Chrome executable not found at ${executablePath}`);
  browser = await chromium.launch({ executablePath, headless: true });
  const context = await browser.newContext({ viewport: { width: 1024, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  const browserErrors = [];
  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const location = message.location();
    const expectedPages404 = Boolean(liveBaseUrl && message.text().includes("status of 404") && /(?:not-a-|\/404\/?$|\/subjects\/chemistry-1\/notes\/atomic-structure-and-the-periodic-table\/?$)/.test(location.url));
    if (expectedPages404) return;
    browserErrors.push(`console: ${message.text()}${location.url ? ` (${location.url})` : ""}`);
  });
  page.on("pageerror", (error) => browserErrors.push(`pageerror: ${error.message}`));
  page.on("requestfailed", (request) => browserErrors.push(`request failed: ${request.url()} (${request.failure()?.errorText ?? "unknown"})`));
  page.on("response", (response) => {
    if (response.status() < 400 || response.request().resourceType() === "document") return;
    browserErrors.push(`response: ${response.status()} ${response.url()}`);
  });

  const representativeRoutes = [
    "/", "/learn", "/dashboard", "/diagnostic", "/paths", "/review", "/coverage",
    "/subjects", "/notes", "/questions", "/search", "/downloads", "/about", "/404", "/error",
    ...subjects.map((subject) => `/subjects/${subject.slug}`),
    "/subjects/biology-1/lessons", "/subjects/biology-1/lessons/chemistry-of-life",
    "/subjects/biology-1/notes", "/subjects/biology-1/notes/chemistry-of-life",
    "/subjects/biology-1/questions", "/subjects/biology-1/questions/chemistry-of-life",
    "/subjects/chemistry-1/lessons/atomic-structure-and-the-periodic-table",
    "/subjects/chemistry-1/questions/atomic-structure-and-the-periodic-table",
    "/subjects/chemistry-1/notes/atomic-structure-and-the-periodic-table",
    "/subjects/not-a-subject", "/subjects/biology-1/lessons/not-a-lesson",
    "/subjects/biology-1/notes/not-a-note", "/subjects/biology-1/questions/not-a-collection",
    ...curriculumCatalog.subjects.map((subject) => `/learn/${subject.slug}`),
    "/books",
    ...publishedBooks.map((book) => `/books/${book.slug}`),
    ...publishedBooks.map((book) => {
      const chapter = book.chapters[0];
      const topic = chapter?.topics[0];
      return topic ? `/books/${book.slug}/${chapter.slug}/${topic.slug}` : `/books/${book.slug}`;
    }),
    "/learn/not-a-subject",
    "/learn/anatomy-physiology-1/introduction-to-the-human-body",
    "/learn/anatomy-physiology-1/introduction-to-the-human-body/homeostasis",
    "/learn/biochemistry/chemistry-review-for-biochemistry/not-a-topic",
    "/learn/medical-terminology/core-topics/word-roots-prefixes-and-suffixes",
  ];

  for (const route of representativeRoutes) {
    const shouldBeNotFound = route.includes("not-a-") || route.endsWith("/not-a-collection") || route === "/404" || route === "/subjects/chemistry-1/notes/atomic-structure-and-the-periodic-table";
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    checkedRoutes.add(route);
    const allowedLiveFallback = Boolean(liveBaseUrl && response?.status() === 404);
    assert(response?.ok() || allowedLiveFallback, `${route}: document returned ${response?.status() ?? "no response"}`);
    assert(await page.locator("main#main-content").count() === 1, `${route}: missing main landmark`);
    assert(await page.locator("main h1").count() === 1, `${route}: expected exactly one main H1`);
    const title = await page.title();
    assert(shouldBeNotFound ? title.includes("Page not found") : !title.includes("Page not found"), `${route}: incorrect document title ${title}`);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    assert(overflow <= 1, `${route}: horizontal overflow of ${overflow}px at 1024px`);
  }

  for (const route of ["/", "/learn"]) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    assert(await page.getByRole("heading", { level: 1, name: /Medical learning/ }).count() === 1, `${route}: landing-page heading missing`);
    assert(await page.getByRole("link", { name: /Start Learning Free/ }).first().getAttribute("href") === "/learn/anatomy-physiology-1", `${route}: primary CTA target drifted`);
    assert(await page.getByRole("link", { name: "Try a Sample Quiz" }).getAttribute("href") === "/learn/anatomy-physiology-1/practice", `${route}: sample CTA target drifted`);
    assert(await page.getByText("Live product sample", { exact: true }).count() === 0, `${route}: removed product preview returned`);
    const headerBox = await page.locator(".site-header").boundingBox();
    const headingBox = await page.getByRole("heading", { level: 1, name: /Medical learning/ }).boundingBox();
    assert(Boolean(headerBox && headingBox && headingBox.y >= headerBox.y + headerBox.height), `${route}: hero heading is obscured by the sticky header`);
  }

  await page.goto(`${baseUrl}/books`, { waitUntil: "networkidle" });
  assert(await page.getByRole("heading", { level: 1, name: "Books for nursing and science" }).count() === 1, "/books: library heading missing");
  assert(await page.getByText("15 open educational books", { exact: false }).count() === 1, "/books: published-book total drifted");
  assert(await page.getByText("Introduction to Behavioral Neuroscience", { exact: true }).count() === 0, "/books: in-progress book is visible");

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.setItem("medmosa.progress.v1", "{malformed"));
  await page.reload({ waitUntil: "networkidle" });
  assert(await page.locator(".learn-bento-continue .learn-card-label").innerText() === "START HERE", "Landing: malformed progress did not fall back to first-time state");
  await page.evaluate(() => localStorage.setItem("medmosa.progress.v1", JSON.stringify({
    version: 1,
    days: { "2026-08-15": { minutes: 20, questions: 3, correct: 2 } },
    topics: { "topic:anatomy-physiology-1:introduction-to-the-human-body:anatomical-terminology": "2026-08-15" },
    courses: { "anatomy-physiology-1": { topicsViewed: 1, questions: 3, correct: 2 } },
    mastery: {},
    questions: {},
  })));
  await page.reload({ waitUntil: "networkidle" });
  assert(await page.locator(".learn-bento-continue .learn-card-label").innerText() === "CONTINUE LEARNING", "Landing: returning state did not surface Continue learning");
  assert((await page.locator(".learn-bento-continue").innerText()).includes("Anatomy & Physiology I"), "Landing: returning state did not surface the recent course");
  await page.evaluate(() => localStorage.removeItem("medmosa.progress.v1"));

  await page.goto(`${baseUrl}/dashboard`, { waitUntil: "networkidle" });
  assert(await page.locator(".sc-dash").count() === 1, "Dashboard: distinct study dashboard missing");
  await page.goto(`${baseUrl}/subjects`, { waitUntil: "networkidle" });
  const directorySubjects = await page.locator(".card-grid .card h3").allTextContents();
  assert(directorySubjects.length === subjects.length, `Subjects directory: rendered ${directorySubjects.length}/${subjects.length} subjects`);
  for (const subject of subjects) {
    const subjectLessons = lessons.filter((item) => item.subject === subject.slug);
    const subjectNotes = notes.filter((item) => item.subject === subject.slug);
    const subjectQuestions = questions.filter((item) => item.subject === subject.slug);
    await page.goto(`${baseUrl}/subjects/${subject.slug}`, { waitUntil: "networkidle" });
    const summaryCounts = (await page.locator(".subject-summary dd").allTextContents()).slice(0, 3);
    assert(summaryCounts.join(",") === [subjectLessons.length, subjectNotes.length, subjectQuestions.length].join(","), `${subject.slug}: incorrect subject summary ${summaryCounts.join(",")}`);
    assert(await page.locator(".lesson-list .lesson-card").count() === subjectLessons.length, `${subject.slug}: subject page rendered ${await page.locator(".lesson-list .lesson-card").count()}/${subjectLessons.length} lessons`);
  }

  const generatedRoutes = ["/", "/learn", "/dashboard", "/diagnostic", "/paths", "/review", "/coverage", "/subjects", "/notes", "/questions", "/search", "/downloads", "/about", "/404", "/error"];
  for (const curriculumSubject of curriculumSubjects) {
    generatedRoutes.push(`/learn/${curriculumSubject.subject.slug}`, `/learn/${curriculumSubject.subject.slug}/practice`);
    for (const unit of curriculumSubject.units) {
      generatedRoutes.push(`/learn/${curriculumSubject.subject.slug}/${unit.slug}`);
      for (const topic of unit.topics) generatedRoutes.push(`/learn/${curriculumSubject.subject.slug}/${unit.slug}/${topic.slug}`);
    }
  }
  for (const subject of subjects) {
    generatedRoutes.push(`/subjects/${subject.slug}`, `/subjects/${subject.slug}/lessons`, `/subjects/${subject.slug}/notes`, `/subjects/${subject.slug}/questions`);
  }
  for (const lesson of lessons) {
    generatedRoutes.push(`/subjects/${lesson.subject}/lessons/${lesson.slug}`);
    if (notes.some((note) => note.subject === lesson.subject && note.lesson === lesson.slug)) {
      generatedRoutes.push(`/subjects/${lesson.subject}/notes/${lesson.slug}`);
    }
    if (questions.some((question) => question.subject === lesson.subject && question.lesson === lesson.slug)) {
      generatedRoutes.push(`/subjects/${lesson.subject}/questions/${lesson.slug}`);
    }
  }
  for (const route of new Set(generatedRoutes)) {
    let response;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      response = await context.request.get(`${baseUrl}${route}`);
      if (response.status() !== 429 && response.status() < 500) break;
      if (attempt < 3) {
        await response.dispose();
        await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
      }
    }
    checkedRoutes.add(route);
    const allowedLiveFallback = Boolean(liveBaseUrl && response.status() === 404 && (await response.text()).includes('id="root"'));
    assert(response.ok() || allowedLiveFallback, `${route}: deep-link request returned ${response.status()}`);
  }

  const quizRoute = "/subjects/biology-1/questions/chemistry-of-life";
  const quizQuestions = questions.filter((question) => question.subject === "biology-1" && question.lesson === "chemistry-of-life");
  await page.goto(`${baseUrl}${quizRoute}`, { waitUntil: "networkidle" });
  const firstCorrect = Array.isArray(quizQuestions[0].correctAnswer) ? quizQuestions[0].correctAnswer[0] : quizQuestions[0].correctAnswer;
  await page.locator(`input[value="${firstCorrect}"]`).check();
  await page.getByRole("button", { name: "Check answer" }).click();
  assert((await page.locator(".question-feedback").innerText()).includes("Correct"), "Quiz: correct answer feedback failed");
  await page.getByRole("button", { name: "Next question" }).click();
  await page.waitForFunction((prompt) => document.querySelector("legend")?.textContent?.includes(prompt), quizQuestions[1].question.replace(/\*\*/g, ""));
  const secondCorrect = Array.isArray(quizQuestions[1].correctAnswer) ? quizQuestions[1].correctAnswer[0] : quizQuestions[1].correctAnswer;
  const secondWrong = quizQuestions[1].options.find((option) => option.id !== secondCorrect)?.id;
  await page.locator(`input[value="${secondWrong}"]`).check();
  await page.getByRole("button", { name: "Check answer" }).click();
  assert((await page.locator(".question-feedback").innerText()).includes("Not quite"), "Quiz: incorrect answer feedback failed");
  assert((await page.locator(".question-feedback").innerText()).includes(quizQuestions[1].explanation.slice(0, 40)), "Quiz: approved explanation did not render");
  await page.getByRole("button", { name: "Previous" }).click();
  assert(await page.locator(`input[value="${firstCorrect}"]`).isChecked(), "Quiz: Previous did not restore the prior answer");
  assert(await page.locator(`input[value="${firstCorrect}"]`).isDisabled(), "Quiz: restored submitted answer was not locked");
  assert(await page.getByRole("button", { name: "Next question" }).isVisible(), "Quiz: Previous did not restore submitted feedback/navigation");

  const pilotTopicRoute = "/learn/anatomy-physiology-1/introduction-to-the-human-body/homeostasis";
  const pilotTopicId = "topic:anatomy-physiology-1:introduction-to-the-human-body:homeostasis";
  const pilotQuestionBank = JSON.parse(fs.readFileSync(path.join(root, "content-v2/subjects/anatomy-physiology-1/questions.json"), "utf8"));
  const pilotTopicQuestions = pilotQuestionBank.questions.filter((question) => question.mappedCanonicalTopicIds.includes(pilotTopicId));
  await page.goto(`${baseUrl}${pilotTopicRoute}`, { waitUntil: "networkidle" });
  assert(await page.title() === "Homeostasis | MedMosa", `Master Curriculum: canonical topic title was not used in document metadata (${await page.title()})`);
  assert(await page.getByRole("tab", { name: "Learn" }).getAttribute("aria-selected") === "true", "Master Curriculum: Learn mode was not active by default");
  await page.getByRole("tab", { name: "Plain language" }).click();
  assert(await page.getByText("Build the mental model here").isVisible(), "Master Curriculum: ELI-10 mode did not render");
  assert(await page.getByRole("button", { name: "Practice a random question" }).count() === 1, "Topic practice: random-question CTA was missing");
  assert((await page.getByText(`${pilotTopicQuestions.length} questions available`, { exact: true }).count()) === 1, "Topic practice: CTA count did not match the mapped pool");
  await page.getByRole("button", { name: "Practice a random question" }).click();
  await page.waitForFunction(() => document.querySelectorAll(".topic-random-practice .question-option").length > 1);
  const firstTopicStem = await page.locator(".topic-random-practice legend").innerText();
  const firstTopicQuestion = pilotTopicQuestions.find((question) => firstTopicStem.includes(question.stem.replace(/\*\*/g, "").slice(0, 80)));
  assert(Boolean(firstTopicQuestion), "Topic practice: rendered a question outside the selected topic pool");
  await page.locator(`.topic-random-practice input[value="${firstTopicQuestion?.correctAnswer}"]`).check();
  await page.getByRole("button", { name: "Check answer" }).click();
  const topicFeedback = await page.locator(".topic-random-practice .question-feedback").innerText();
  assert(topicFeedback.includes("Why it is correct"), "Topic practice: why-correct rationale did not render");
  assert(topicFeedback.includes("In plain language"), "Topic practice: ELI-10 rationale did not render");
  assert(await page.locator(`.topic-random-practice input[value="${firstTopicQuestion?.correctAnswer}"]`).isDisabled(), "Topic practice: submitted answer was not locked");
  await page.getByRole("button", { name: "Next random question" }).click();
  assert(await page.getByText(`Question 2 of ${pilotTopicQuestions.length}`, { exact: true }).isVisible(), "Topic practice: next random question did not advance");
  await page.reload({ waitUntil: "networkidle" });
  await page.getByRole("tab", { name: /Practice/ }).click();
  await page.waitForFunction(() => document.querySelectorAll(".topic-random-practice .question-option").length > 1);
  assert(await page.getByText(`Question 2 of ${pilotTopicQuestions.length}`, { exact: true }).isVisible(), "Topic practice: session did not resume after refresh");
  assert(await page.getByText("Study material.").isVisible(), "Master Curriculum: educational-use notice did not render");
  await page.goto(`${baseUrl}/coverage`, { waitUntil: "networkidle" });
  assert(await page.locator("main h1").innerText() === "What this library actually contains", "Coverage: source-transparency route did not render");

  const questionLedRoute = "/learn/medical-terminology/core-topics/word-roots-prefixes-and-suffixes";
  await page.goto(`${baseUrl}${questionLedRoute}`, { waitUntil: "networkidle" });
  assert(await page.getByRole("tab", { name: "Learn" }).getAttribute("aria-selected") === "true", "Question-led topic: Learn was not the default mode");
  assert(await page.getByText("This topic is explained in plain language only.").isVisible(), "Question-led topic: plain-language-only state did not render");
  await page.getByRole("button", { name: "Practice a random question" }).click();
  await page.waitForFunction(() => document.querySelectorAll(".topic-random-practice .question-option").length > 1);
  assert(await page.locator(".topic-random-practice .question-option").count() === 4, "Question-led topic: exact practice questions did not load");

  const calculationRoute = "/learn/evidence-based-practice-basic-statistics/core-topics/introduction-to-evidence-based-practice";
  const calculationBank = JSON.parse(fs.readFileSync(path.join(root, "content-v2/subjects/evidence-based-practice-basic-statistics/questions.json"), "utf8"));
  const calculationQuestions = calculationBank.questions.filter((question) => question.mappedCanonicalTopicIds.some((id) => id.endsWith(":introduction-to-evidence-based-practice")));
  await page.goto(`${baseUrl}${calculationRoute}`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Practice a random question" }).click();
  await page.waitForFunction(() => document.querySelectorAll(".topic-random-practice .question-option").length > 1);
  for (let questionIndex = 0; questionIndex < 2; questionIndex += 1) {
    await page.locator(`.topic-random-practice input[value="${calculationQuestions[questionIndex].correctAnswer}"]`).check();
    await page.getByRole("button", { name: "Check answer" }).click();
    if (questionIndex === 0) await page.getByRole("button", { name: "Next random question" }).click();
  }
  assert(await page.locator(".topic-random-practice .question-feedback").count() === 1, "Topic practice: calculation-topic feedback did not render");

  await page.goto(`${baseUrl}/learn`, { waitUntil: "networkidle" });
  const courseCardCount = await page.locator(".learn-catalog .course-grid .course-card").count();
  assert(courseCardCount === curriculumCatalog.totals.subjects, `Master Curriculum: rendered ${courseCardCount}/${curriculumCatalog.totals.subjects} subjects`);
  await page.getByLabel("Filter courses").fill("anatomy");
  await page.waitForFunction(() => document.querySelectorAll(".learn-catalog .course-card").length > 0 && document.querySelectorAll(".learn-catalog .course-card").length < 39);
  assert(await page.locator(".learn-catalog .course-card").count() > 0, "Master Curriculum: course filter returned no anatomy result");

  await page.goto(`${baseUrl}/search`, { waitUntil: "networkidle" });
  await page.getByLabel("Keywords").fill("HOMEOSTASIS");
  await page.waitForFunction(() => document.querySelectorAll(".result-card").length > 0);
  assert(await page.locator(".result-card").count() > 0, "Search: case-insensitive curriculum query returned no results");
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  assert(await page.getByLabel("Tag").locator("option").count() === tags.length + 1, `Search: tag filter rendered ${await page.getByLabel("Tag").locator("option").count() - 1}/${tags.length} tags`);
  await page.getByLabel("Subject").selectOption("biology-1");
  const biologySearchCount = notes.filter((item) => item.subject === "biology-1").length + questions.filter((item) => item.subject === "biology-1").length + curriculumSearchIndex.filter((item) => item.subjectSlug === "biology-1").length;
  await page.waitForFunction((count) => document.querySelectorAll(".result-card").length === count, biologySearchCount);
  assert(await page.locator(".result-card").count() === biologySearchCount, `Search: rendered ${await page.locator(".result-card").count()}/${biologySearchCount} Biology 1 results`);
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  await page.getByLabel("Keywords").fill("anatomical position");
  await page.waitForFunction(() => document.querySelectorAll(".result-card .content-badge.topic").length > 0);
  assert(await page.locator(".result-card .content-badge.topic").count() > 0, "Search: canonical curriculum topics were missing from global search");
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  const firstTag = await page.getByLabel("Tag").locator("option").nth(1).getAttribute("value");
  await page.getByLabel("Tag").selectOption(firstTag);
  await page.waitForFunction(() => document.querySelectorAll(".result-card").length > 0);
  assert(await page.locator(".result-card").count() > 0, `Search: tag filter ${firstTag} returned no results`);
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  await page.getByLabel("Keywords").fill("no-match-!@#$%^&*()-983274");
  assert(await page.getByText("No matches found").isVisible(), "Search: special-character no-result state failed");

  const responsiveRoutes = ["/", "/learn", "/dashboard", "/subjects", "/subjects/biology-1/notes/chemistry-of-life", quizRoute, pilotTopicRoute, questionLedRoute, "/search", "/downloads"];
  for (const { width, height } of [{ width: 320, height: 568 }, { width: 375, height: 812 }, { width: 390, height: 844 }, { width: 768, height: 1024 }, { width: 1024, height: 768 }, { width: 1440, height: 900 }]) {
    await page.setViewportSize({ width, height });
    for (const route of responsiveRoutes) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      assert(overflow <= 1, `${route}: horizontal overflow of ${overflow}px at ${width}px`);
    }
  }

  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const primaryNavigation = page.getByRole("navigation", { name: "Primary" });
  const menuButton = page.locator(".menu-button");
  assert(!(await primaryNavigation.isVisible()), "Mobile navigation: menu should start collapsed");
  await menuButton.click();
  assert(await primaryNavigation.isVisible(), "Mobile navigation: Menu did not open");
  assert(await menuButton.getAttribute("aria-expanded") === "true", "Mobile navigation: expanded state was not exposed");
  await page.reload({ waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  assert(await page.evaluate(() => document.activeElement?.classList.contains("skip-link")), "Keyboard: skip link was not first focus target");
  await page.keyboard.press("Enter");
  assert(await page.evaluate(() => document.activeElement?.id === "main-content"), "Keyboard: skip link did not focus main content");

  await page.setViewportSize({ width: 1024, height: 900 });
  const axeRoutes = ["/", "/learn", "/dashboard", "/subjects", "/subjects/biology-1", "/subjects/biology-1/notes/chemistry-of-life", quizRoute, "/learn/anatomy-physiology-1", pilotTopicRoute, questionLedRoute, "/search", "/subjects/nclex-review", "/404"];
  for (const route of axeRoutes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    await page.addScriptTag({ content: axeSource });
    const result = await page.evaluate(async () => window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
    }));
    for (const violation of result.violations) {
      const targets = violation.nodes.slice(0, 8).flatMap((node) => node.target).join(", ");
      errors.push(`${route}: accessibility ${violation.id} (${violation.impact ?? "unknown"}) on ${violation.nodes.length} node(s): ${targets}`);
    }
  }

  for (const error of new Set(browserErrors)) errors.push(error);
  await context.close();
} catch (error) {
  errors.push(error instanceof Error ? error.message : String(error));
} finally {
  if (browser) await browser.close();
  preview?.kill("SIGTERM");
}

console.log(`BROWSER AUDIT: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`Target: ${baseUrl}`);
console.log(`Routes/deep links checked: ${checkedRoutes.size}`);
console.log("Viewports checked: 320×568, 375×812, 390×844, 768×1024, 1024×768, 1440×900");
console.log("Flows checked: landing first/returning/malformed states, dashboard, all-subject curriculum, teaching and question-led topics, rich rationales, registry search, legacy subjects/notes/questions, mobile menu, keyboard skip link");
for (const error of errors) console.log(`- ${error}`);
if (errors.length) {
  if (previewLog.trim()) console.log(previewLog.trim());
  process.exit(1);
}
