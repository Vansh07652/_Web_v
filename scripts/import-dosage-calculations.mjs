#!/usr/bin/env node
/**
 * Publishes the Nursing Dosage Calculations master study guide into
 * `nursing-math-dosage`, which until now had ten ELI-10 topics and no
 * college-level teaching notes at all.
 *
 * WHAT IS PUBLISHED, AND WHAT IS NOT
 *
 * Part I (seven study-guide sections) and Part IV (rapid-review reference
 * sheets) are published as teaching topics.
 *
 * The bank's 500 practice questions are NOT published as questions. They are
 * free-response calculation problems — "Report the exact value" — and this
 * site's practice engine is multiple choice. Turning them into multiple choice
 * means inventing distractors for medication doses, which is authoring
 * clinical content rather than importing it. Instead, each section's worked
 * answers are attached to its topic as worked examples, which is what they
 * already are: setup, raw calculation, rounding, rationale.
 *
 * ARITHMETIC CHECK
 *
 * Before publishing, every "Raw calculation" line in the answer key is
 * re-derived here and compared with the stated result. Anything that does not
 * reconcile is reported and its worked example is withheld, so a step that
 * disagrees with itself never reaches a topic page. Clock arithmetic
 * ("2130 + 12 hr = 0930") is recognised and exempted rather than counted as a
 * failure.
 *
 * Re-running is safe: topics from a previous run of this batch are removed
 * before anything is written.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");
const sourceRoot = path.join(repoRoot, "generated-subjects", "nursing-dosage-calculations");

const IMPORT_BATCH = "2026-08-14-dosage-calculations";
const SUBJECT_SLUG = "nursing-math-dosage";
const UNIT_SLUG = "master-study-guide";
const UNIT_TITLE = "Master Study Guide";
const COLLECTION = "nursing-dosage-calculations";

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const readText = (filePath) => fs.readFileSync(filePath, "utf8");
const exists = (filePath) => fs.existsSync(filePath);
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// ---------------------------------------------------------------------------
// 1. Re-derive the answer key's arithmetic.
// ---------------------------------------------------------------------------

/** `2130 + 12 hr = 0930` is a clock, not a sum. Recognise it, don't fail it. */
const isClockStep = (step) => /\b\d{3,4}\s*[+-]\s*\d+(\.\d+)?\s*(hr|hour|hours|min|minutes)?\s*=\s*\d{3,4}\b/i.test(step);

function checkAnswerKey() {
  const files = fs.readdirSync(path.join(sourceRoot, "part-3-answer-key")).filter((name) => name.endsWith(".md")).sort();
  const result = { answers: 0, steps: 0, verified: 0, clock: 0, unparsed: 0, mismatches: [] };
  const answers = new Map(); // answer number -> { markdown, ok }

  for (const name of files) {
    const text = readText(path.join(sourceRoot, "part-3-answer-key", name));
    for (const match of text.matchAll(/### Answer (\d+)\n(.*?)(?=\n### Answer |\n---\n*$|$)/gs)) {
      const number = Number(match[1]);
      const body = match[2];
      result.answers += 1;
      let ok = true;
      const raw = body.match(/\*\*Raw calculation:\*\*\s*(.+)/)?.[1] ?? "";
      for (const rawStep of raw.split(";")) {
        const step = rawStep
          .replace(/,/g, "").replace(/×/g, "*").replace(/÷/g, "/")
          .replace(/[−–]/g, "-").trim().replace(/\.$/, "");
        if (!step.includes("=")) continue;
        if (isClockStep(step)) { result.clock += 1; continue; }
        const cut = step.lastIndexOf("=");
        const stated = step.slice(cut + 1).match(/\s*([-+]?\d+\.?\d*)/);
        // Strip unit words but keep the operators and numbers.
        const expression = step.slice(0, cut).replace(/[A-Za-z%µ/]+(?![\d.])/g, " ").trim();
        if (!stated || !/^[\d\s.()*/+-]+$/.test(expression) || !/\d/.test(expression)) { result.unparsed += 1; continue; }
        let computed;
        try {
          // Arithmetic only: the expression was validated against the character
          // class above before it got here.
          computed = Function(`"use strict";return (${expression})`)();
        } catch { result.unparsed += 1; continue; }
        if (!Number.isFinite(computed)) { result.unparsed += 1; continue; }
        result.steps += 1;
        const decimals = stated[1].includes(".") ? stated[1].split(".")[1].length : 0;
        const rounded = Number(computed.toFixed(decimals));
        if (Math.abs(rounded - Number(stated[1])) <= 10 ** -decimals * 0.51) {
          result.verified += 1;
        } else {
          ok = false;
          result.mismatches.push({ answer: number, file: name, step, computes: rounded });
        }
      }
      answers.set(number, { markdown: clean(body), ok });
    }
  }
  return { result, answers };
}

// ---------------------------------------------------------------------------
// 2. Read the study guide, and the questions each section is practised with.
// ---------------------------------------------------------------------------

/** "Part I · Section 1 — Fundamentals & Conversions" -> "Fundamentals & Conversions" */
const displayTitle = (heading) => clean(heading.replace(/^Part\s+[IVX]+\s*[·.\-–—]\s*/i, "").replace(/^Section\s+\d+\s*[—–-]\s*/i, ""));

/** Section letter -> the study-guide file it belongs to, by section number. */
const QUESTION_SECTIONS = {
  "01": ["section-a"],
  "02": [],
  "03": ["section-b", "section-c"],
  "04": ["section-d"],
  "05": ["section-e"],
  "06": ["section-f"],
  "07": ["section-g"],
};

function workedExamplesFor(prefix, answers, questionText) {
  const wanted = QUESTION_SECTIONS[prefix] ?? [];
  if (!wanted.length) return "";
  const parts = [];
  for (const [number, entry] of [...answers.entries()].sort((a, b) => a[0] - b[0])) {
    if (!entry.ok) continue;                      // a step that disagrees with itself is withheld
    const question = questionText.get(number);
    if (!question || !wanted.includes(question.section)) continue;
    parts.push(`### Worked example ${parts.length + 1}\n\n${question.markdown}\n\n${entry.markdown}`);
    if (parts.length >= 6) break;                 // a topic page, not the whole bank
  }
  return parts.join("\n\n---\n\n");
}

function readQuestions() {
  const map = new Map();
  const dir = path.join(sourceRoot, "part-2-questions");
  for (const name of fs.readdirSync(dir).filter((file) => file.endsWith(".md")).sort()) {
    const section = name.match(/^(section-[a-g])/)?.[1] ?? name;
    const text = readText(path.join(dir, name));
    for (const match of text.matchAll(/### Question (\d+)\n(.*?)(?=\n### Question |\n---\n*$|$)/gs)) {
      map.set(Number(match[1]), { section, markdown: clean(match[2]) });
    }
  }
  return map;
}

const parseSources = () => {
  const file = path.join(sourceRoot, "sources", "MASTER_SOURCES.md");
  if (!exists(file)) return [];
  return readText(file).split("\n")
    .map((line) => line.trim().replace(/^[-*]\s+/, ""))
    .filter((line) => line && !line.startsWith("#"))
    .map((text) => {
      const url = text.match(/https?:\/\/[^\s)>\]]+/)?.[0]?.replace(/[.,;]+$/, "");
      const label = clean(text.replace(/https?:\/\/\S+/, "").replace(/[—–-]\s*$/, "").replace(/\(\s*\)/g, ""));
      if (!label) return url ? { text: url, url } : null;
      return url ? { text: label, url } : { text: label };
    })
    .filter(Boolean)
    .slice(0, 12);
};

// ---------------------------------------------------------------------------

const { result: check, answers } = checkAnswerKey();
const questions = readQuestions();
const references = parseSources();

const guideFiles = fs.readdirSync(path.join(sourceRoot, "part-1-study-guide"))
  .filter((name) => name.endsWith(".md")).sort()
  .map((name) => ({ name, prefix: name.slice(0, 2), file: path.join(sourceRoot, "part-1-study-guide", name) }));
guideFiles.push({ name: "part-4-reference-sheets.md", prefix: "99", file: path.join(sourceRoot, "part-4-reference-sheets.md") });

const topics = [];
for (const { name, prefix, file } of guideFiles) {
  if (!exists(file)) continue;
  const markdown = readText(file);
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1] ?? name;
  const title = displayTitle(heading);
  const body = clean(markdown.replace(/^#\s+.+$/m, ""));
  const firstParagraph = clean(body.split(/\n{2,}/).find((block) => !block.startsWith(">") && !block.startsWith("|") && !block.startsWith("#")) ?? "");
  topics.push({
    slug: slugify(title),
    title,
    sections: {
      overview: firstParagraph.slice(0, 900),
      whyItMatters: "",
      learningObjectives: "",
      keyTerms: "",
      collegeNotes: body,
      howItWorks: "",
      comparisons: "",
      highYield: "",
      commonConfusions: "",
      memoryAids: "",
      eli10: "",
      quickReview: "",
      workedExamples: workedExamplesFor(prefix, answers, questions),
      references,
    },
    sourceFile: path.relative(repoRoot, file).split(path.sep).join("/"),
    sourceSnapshotMarkdown: clean(markdown).slice(0, 40000),
  });
}

// ---------------------------------------------------------------------------
// 3. Write the topics.
// ---------------------------------------------------------------------------

const subjectPath = path.join(sourceSubjectsRoot, SUBJECT_SLUG, "subject.json");
const subject = readJson(subjectPath);

// Strip a previous run of this batch from every unit BEFORE writing anything.
for (const unit of subject.units ?? []) {
  unit.topics = (unit.topics ?? []).filter((topic) => {
    const bundlePath = path.join(webRoot, topic.bundlePath);
    if (!exists(bundlePath)) return true;
    return readJson(bundlePath).provenance?.importBatch !== IMPORT_BATCH;
  });
}

let unit = (subject.units ?? []).find((candidate) => candidate.slug === UNIT_SLUG);
if (!unit) {
  unit = {
    id: `unit:${SUBJECT_SLUG}:${UNIT_SLUG}`,
    slug: UNIT_SLUG,
    title: UNIT_TITLE,
    order: (subject.units?.length ?? 0) + 1,
    topics: [],
  };
  subject.units.push(unit);
}

const existing = new Set(unit.topics.map((topic) => topic.slug));
let added = 0;
let skipped = 0;
for (const topic of topics) {
  if (existing.has(topic.slug)) { skipped += 1; continue; }
  existing.add(topic.slug);
  const order = unit.topics.length + 1;
  const id = `topic:${SUBJECT_SLUG}:${UNIT_SLUG}:${topic.slug}`;
  const availability = {
    collegeNotes: Boolean(topic.sections.collegeNotes.trim()),
    eli10: false,
    highYield: false,
    quickReview: false,
    workedExamples: Boolean(topic.sections.workedExamples.trim()),
    references: Boolean(topic.sections.references.length),
    exactQuestions: 0,
  };
  const bundle = {
    schemaVersion: "2.0.0",
    id,
    slug: topic.slug,
    title: topic.title,
    subject: { id: `subject:${SUBJECT_SLUG}`, slug: SUBJECT_SLUG, title: subject.subject.title },
    unit: { id: unit.id, slug: unit.slug, title: unit.title, order: unit.order },
    order,
    status: "final",
    sections: topic.sections,
    availability,
    aliases: [{ value: topic.slug, kind: "canonical_slug" }],
    authority: { college_notes: [{ source_file: topic.sourceFile }] },
    provenance: {
      sourceCollection: COLLECTION,
      sourceFile: topic.sourceFile,
      importedWithoutRewriting: true,
      importBatch: IMPORT_BATCH,
    },
    sourceSnapshotMarkdown: topic.sourceSnapshotMarkdown,
  };
  const bundlePath = `content-v2/subjects/${SUBJECT_SLUG}/topics/${UNIT_SLUG}/${topic.slug}.json`;
  writeJson(path.join(webRoot, bundlePath), bundle);
  writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "topics", UNIT_SLUG, `${topic.slug}.json`), { ...bundle, sourceSnapshotMarkdown: "" });
  unit.topics.push({ id, slug: topic.slug, title: topic.title, order, status: "final", bundlePath, mappedQuestionCount: 0, availability });
  added += 1;
}
writeJson(subjectPath, subject);

// ---------------------------------------------------------------------------
// 4. Recompute statistics, catalogue and search index.
// ---------------------------------------------------------------------------

function recomputeSubject(slug) {
  const bundlePath = path.join(sourceSubjectsRoot, slug, "subject.json");
  const bundle = readJson(bundlePath);
  const bank = readJson(path.join(sourceSubjectsRoot, slug, "questions.json"));
  const exact = bank.questions ?? [];
  const all = [...exact, ...(bank.subjectWideQuestions ?? [])];
  let teaching = 0; let eli10 = 0; let highYield = 0; let referenced = 0; let topicCount = 0;
  for (const currentUnit of bundle.units ?? []) {
    currentUnit.topics = (currentUnit.topics ?? []).map((topic, index) => ({ ...topic, order: index + 1 }));
    for (const topic of currentUnit.topics) {
      topicCount += 1;
      const mapped = exact.filter((question) => question.mappedCanonicalTopicIds?.includes(topic.id)).length;
      topic.mappedQuestionCount = mapped;
      const topicPath = path.join(webRoot, topic.bundlePath);
      const topicBundle = readJson(topicPath);
      topicBundle.order = topic.order;
      const availability = {
        collegeNotes: Boolean(topicBundle.sections?.collegeNotes?.trim()),
        eli10: Boolean(topicBundle.sections?.eli10?.trim()),
        highYield: Boolean(topicBundle.sections?.highYield?.trim()),
        quickReview: Boolean(topicBundle.sections?.quickReview?.trim()),
        workedExamples: Boolean(topicBundle.sections?.workedExamples?.trim()),
        references: Boolean(topicBundle.sections?.references?.length),
        exactQuestions: mapped,
      };
      topicBundle.availability = availability;
      topic.availability = availability;
      writeJson(topicPath, topicBundle);
      const clientPath = path.join(clientSubjectsRoot, slug, "topics", currentUnit.slug, `${topic.slug}.json`);
      if (exists(clientPath)) {
        const clientBundle = readJson(clientPath);
        clientBundle.availability = availability;
        clientBundle.sections = topicBundle.sections;
        clientBundle.order = topic.order;
        writeJson(clientPath, clientBundle);
      }
      if (availability.collegeNotes) teaching += 1;
      if (availability.eli10) eli10 += 1;
      if (availability.highYield) highYield += 1;
      if (availability.references) referenced += 1;
    }
  }
  bundle.statistics = {
    ...bundle.statistics,
    unitCount: (bundle.units ?? []).length,
    topicCount,
    teachingTopicCount: teaching,
    eli10TopicCount: eli10,
    highYieldTopicCount: highYield,
    referencedTopicCount: referenced,
    exactOrMappedQuestionCount: exact.length,
    subjectWideQuestionCount: (bank.subjectWideQuestions ?? []).length,
    uniqueQuestionCount: all.length,
    citationReviewRequiredCount: all.filter((question) => question.citationReviewRequired).length,
  };
  writeJson(bundlePath, bundle);
  writeJson(path.join(clientSubjectsRoot, slug, "subject.json"), bundle);
}

recomputeSubject(SUBJECT_SLUG);

const catalog = readJson(path.join(contentRoot, "catalog.json"));
const searchIndex = [];
const totals = { subjects: 0, units: 0, topics: 0, teachingTopics: 0, eli10Topics: 0, referencedTopics: 0, uniqueQuestionsAcrossCatalog: 0, questionPlacements: 0 };
const globalIds = new Set();
for (const summary of catalog.subjects) {
  const bundle = readJson(path.join(sourceSubjectsRoot, summary.slug, "subject.json"));
  const bank = readJson(path.join(sourceSubjectsRoot, summary.slug, "questions.json"));
  summary.statistics = bundle.statistics;
  totals.subjects += 1;
  totals.units += bundle.statistics.unitCount;
  totals.topics += bundle.statistics.topicCount;
  totals.teachingTopics += bundle.statistics.teachingTopicCount;
  totals.eli10Topics += bundle.statistics.eli10TopicCount;
  totals.referencedTopics += bundle.statistics.referencedTopicCount;
  totals.questionPlacements += bundle.statistics.uniqueQuestionCount;
  for (const question of [...(bank.questions ?? []), ...(bank.subjectWideQuestions ?? [])]) globalIds.add(question.id);
  for (const currentUnit of bundle.units ?? []) {
    for (const topic of currentUnit.topics ?? []) {
      searchIndex.push({
        id: topic.id,
        subjectSlug: summary.slug,
        subjectTitle: bundle.subject.title,
        unitSlug: currentUnit.slug,
        unitTitle: currentUnit.title,
        topicSlug: topic.slug,
        topicTitle: topic.title,
        aliases: (readJson(path.join(webRoot, topic.bundlePath)).aliases ?? []).map((alias) => alias.value).filter((value) => typeof value === "string"),
        availability: topic.availability,
        href: `/learn/${summary.slug}/${currentUnit.slug}/${topic.slug}`,
      });
    }
  }
}
totals.uniqueQuestionsAcrossCatalog = globalIds.size;
catalog.totals = totals;
catalog.generatedOn = new Date().toISOString().slice(0, 10);
writeJson(path.join(contentRoot, "catalog.json"), catalog);
writeJson(path.join(contentRoot, "client", "catalog.json"), catalog);
writeJson(path.join(contentRoot, "client", "search-index.json"), searchIndex);
const buildReport = readJson(path.join(contentRoot, "build-report.json"));
writeJson(path.join(contentRoot, "build-report.json"), { ...buildReport, generatedOn: catalog.generatedOn, totals });
writeJson(path.join(webRoot, "audit", "dosage-calculations-import.json"), {
  batch: IMPORT_BATCH,
  generatedOn: catalog.generatedOn,
  arithmeticCheck: check,
  topicsAdded: added,
  topicsSkippedAsExisting: skipped,
  questionsPublishedAsQuestions: 0,
  questionsPublishedReason: "free-response calculation items; the practice engine is multiple choice, and inventing distractors for medication doses would be authoring clinical content rather than importing it",
});

console.log("DOSAGE CALCULATIONS IMPORT");
console.log(`  answer-key entries read:      ${check.answers}`);
console.log(`  arithmetic steps re-derived:  ${check.steps} (verified ${check.verified}, mismatched ${check.mismatches.length})`);
console.log(`  clock steps exempted:         ${check.clock}`);
console.log(`  steps not machine-checkable:  ${check.unparsed}`);
for (const item of check.mismatches) console.log(`    MISMATCH Answer ${item.answer} (${item.file}): "${item.step}" computes to ${item.computes}`);
console.log(`  topics added:                 ${added}${skipped ? `, ${skipped} skipped as already present` : ""}`);
console.log(`  catalogue totals:             ${JSON.stringify(totals)}`);
