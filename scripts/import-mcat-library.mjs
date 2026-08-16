#!/usr/bin/env node
/**
 * Publishes the MCAT One-Page Topic Study Library as a course.
 *
 * The library is 124 topics across nine MCAT subjects, each already written in
 * the shape this site publishes: a big picture, headed teaching sections, a
 * mechanism section, cross-discipline connections, common traps, an ELI-10
 * explanation, quick recall, and a per-topic source file with titles, licences
 * and URLs. None of it was on the site.
 *
 * It becomes one course rather than being scattered into the existing ones.
 * Merging "Biology: Foundations of Cell Biology" into Biology I would put a
 * second, differently-scoped account of the same material beside the existing
 * topics with no way for a student to tell which they are reading; a course of
 * its own says plainly what this is — one page per MCAT topic.
 *
 * Nothing is invented. Every field below is copied from the library, and a
 * topic is skipped if it has neither teaching sections nor an ELI-10.
 *
 * Re-running is safe: the course is rebuilt from the library each time.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");
const libraryRoot = path.resolve(repoRoot, "..", "MCAT_STUDY_LIBRARY");

const SUBJECT_SLUG = "mcat-foundations";
const SUBJECT_ID = `subject:${SUBJECT_SLUG}`;
const SUBJECT_TITLE = "MCAT Foundations";
const CATEGORY = "pre-health-core";
const IMPORT_BATCH = "2026-08-14-mcat-library";
const COLLECTION = "mcat-one-page-topic-library";

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const exists = (filePath) => fs.existsSync(filePath);
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const bullets = (values) => (Array.isArray(values) ? values.filter(Boolean).map((value) => `- ${clean(value)}`).join("\n") : clean(values));

if (!exists(libraryRoot)) {
  console.error(`MCAT library not found at ${libraryRoot}`);
  process.exit(1);
}

const library = readJson(path.join(libraryRoot, "compiled", "all_topics.json"));
const topicsIn = library.topics ?? [];

/** Per-topic sources: title, organization, licence and URL, as published. */
function referencesFor(topic) {
  const dir = path.join(libraryRoot, "sources", topic.subject_slug);
  if (!exists(dir)) return [];
  const file = fs.readdirSync(dir).find((name) => name.endsWith(".sources.json")
    && readJson(path.join(dir, name)).topic_id === topic.id);
  if (!file) return [];
  return (readJson(path.join(dir, file)).sources ?? []).map((source) => {
    const label = [source.title, source.organization].filter(Boolean).join(" — ");
    const url = typeof source.url === "string" && /^https?:\/\/\S+$/i.test(source.url) ? source.url : undefined;
    return url ? { text: label || url, url } : { text: label };
  }).filter((reference) => reference.text).slice(0, 12);
}

/** The published markdown page, kept as the audit snapshot. */
function snapshotFor(topic) {
  const dir = path.join(libraryRoot, "pages", topic.subject_slug);
  if (!exists(dir)) return "";
  const padded = String(topic.topic_number).padStart(2, "0");
  const file = fs.readdirSync(dir).find((name) => name.startsWith(`${padded}-`) && name.endsWith(".md"));
  return file ? clean(fs.readFileSync(path.join(dir, file), "utf8")).slice(0, 40000) : "";
}

const unitOrder = [];
const unitsBySlug = new Map();
const topicsByUnit = new Map();
let skipped = 0;

for (const topic of topicsIn) {
  const unitSlug = slugify(topic.subject);
  if (!unitsBySlug.has(unitSlug)) {
    unitsBySlug.set(unitSlug, { slug: unitSlug, title: clean(topic.subject) });
    unitOrder.push(unitSlug);
    topicsByUnit.set(unitSlug, []);
  }

  const teaching = [
    ...(topic.sections ?? []).map((section) => `## ${clean(section.heading)}\n\n${clean(section.content)}`),
    topic.how_it_works ? `## How it works\n\n${clean(topic.how_it_works)}` : "",
  ].filter(Boolean).join("\n\n");
  const eli10 = clean(topic.eli_10);
  if (!teaching && !eli10) { skipped += 1; continue; }

  const snapshot = snapshotFor(topic);
  topicsByUnit.get(unitSlug).push({
    slug: slugify(topic.slug || topic.topic),
    title: clean(topic.topic),
    sections: {
      overview: clean(topic.big_picture),
      whyItMatters: "",
      learningObjectives: "",
      keyTerms: bullets(topic.subtopics),
      collegeNotes: teaching,
      howItWorks: clean(topic.how_it_works),
      comparisons: bullets(topic.mcat_connections),
      highYield: "",
      commonConfusions: bullets(topic.high_yield_traps),
      memoryAids: "",
      eli10,
      quickReview: bullets(topic.quick_recall),
      workedExamples: "",
      references: referencesFor(topic),
    },
    // The snapshot is what the validator checks provenance against, so a topic
    // whose page file is missing falls back to the compiled record it was
    // actually built from rather than shipping with an empty one.
    snapshot: snapshot || clean(JSON.stringify(topic, null, 2)).slice(0, 40000),
    sourceFile: `MCAT_STUDY_LIBRARY/pages/${topic.subject_slug}/${String(topic.topic_number).padStart(2, "0")}-${topic.slug}.md`,
  });
}

// ---------------------------------------------------------------------------
// Write the course.
// ---------------------------------------------------------------------------

const units = [];
let topicCount = 0;
let teachingTopics = 0;
let eli10Topics = 0;
let referencedTopics = 0;

unitOrder.forEach((unitSlug, index) => {
  const meta = unitsBySlug.get(unitSlug);
  const unitId = `unit:${SUBJECT_SLUG}:${unitSlug}`;
  const unitTopics = [];
  topicsByUnit.get(unitSlug).forEach((topic, topicIndex) => {
    const id = `topic:${SUBJECT_SLUG}:${unitSlug}:${topic.slug}`;
    const availability = {
      collegeNotes: Boolean(topic.sections.collegeNotes.trim()),
      eli10: Boolean(topic.sections.eli10.trim()),
      highYield: Boolean(topic.sections.highYield.trim()),
      quickReview: Boolean(topic.sections.quickReview.trim()),
      workedExamples: Boolean(topic.sections.workedExamples.trim()),
      references: Boolean(topic.sections.references.length),
      exactQuestions: 0,
    };
    const bundlePath = `content-v2/subjects/${SUBJECT_SLUG}/topics/${unitSlug}/${topic.slug}.json`;
    const bundle = {
      schemaVersion: "2.0.0",
      id,
      slug: topic.slug,
      title: topic.title,
      subject: { id: SUBJECT_ID, slug: SUBJECT_SLUG, title: SUBJECT_TITLE },
      unit: { id: unitId, slug: unitSlug, title: meta.title, order: index + 1 },
      order: topicIndex + 1,
      status: "final",
      sections: topic.sections,
      availability,
      aliases: [{ value: topic.slug, kind: "canonical_slug" }],
      authority: { college_notes: [{ source_file: topic.sourceFile }], eli10: [{ source_file: topic.sourceFile }] },
      provenance: {
        sourceCollection: COLLECTION,
        sourceFile: topic.sourceFile,
        importedWithoutRewriting: true,
        importBatch: IMPORT_BATCH,
      },
      sourceSnapshotMarkdown: topic.snapshot,
    };
    writeJson(path.join(webRoot, bundlePath), bundle);
    writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "topics", unitSlug, `${topic.slug}.json`), { ...bundle, sourceSnapshotMarkdown: "" });
    unitTopics.push({
      id, slug: topic.slug, title: topic.title, order: topicIndex + 1, status: "final",
      bundlePath, mappedQuestionCount: 0, availability,
    });
    topicCount += 1;
    if (availability.collegeNotes) teachingTopics += 1;
    if (availability.eli10) eli10Topics += 1;
    if (availability.references) referencedTopics += 1;
  });
  units.push({ id: unitId, slug: unitSlug, title: meta.title, order: index + 1, topics: unitTopics });
});

const statistics = {
  unitCount: units.length,
  topicCount,
  teachingTopicCount: teachingTopics,
  eli10TopicCount: eli10Topics,
  highYieldTopicCount: 0,
  referencedTopicCount: referencedTopics,
  exactOrMappedQuestionCount: 0,
  subjectWideQuestionCount: 0,
  uniqueQuestionCount: 0,
  citationReviewRequiredCount: 0,
};

const subjectBundle = {
  schemaVersion: "2.0.0",
  subject: {
    id: SUBJECT_ID,
    slug: SUBJECT_SLUG,
    title: SUBJECT_TITLE,
    category: CATEGORY,
    status: "final",
    summary: "One self-contained page for every topic on the AAMC content outline: nine subjects, each topic taught once at college level and once in plain language, with its sources listed.",
  },
  statistics,
  units,
};
writeJson(path.join(sourceSubjectsRoot, SUBJECT_SLUG, "subject.json"), subjectBundle);
writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "subject.json"), subjectBundle);

const emptyBank = { schemaVersion: "2.0.0", subjectSlug: SUBJECT_SLUG, questions: [], subjectWideQuestions: [] };
writeJson(path.join(sourceSubjectsRoot, SUBJECT_SLUG, "questions.json"), emptyBank);
writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "questions.json"), emptyBank);

// ---------------------------------------------------------------------------
// Catalogue, search index, build report.
// ---------------------------------------------------------------------------

const catalog = readJson(path.join(contentRoot, "catalog.json"));
const already = catalog.subjects.findIndex((summary) => summary.slug === SUBJECT_SLUG);
const summaryEntry = {
  id: SUBJECT_ID,
  slug: SUBJECT_SLUG,
  title: SUBJECT_TITLE,
  aliases: [
    { value: SUBJECT_SLUG, kind: "canonical_slug" },
    { value: "mcat", kind: "legacy_or_display_alias" },
    { value: "MCAT", kind: "legacy_or_display_alias" },
  ],
  status: "final",
  category: CATEGORY,
  legacySlugs: [],
  statistics,
  href: `/learn/${SUBJECT_SLUG}`,
};
if (already >= 0) catalog.subjects[already] = summaryEntry; else catalog.subjects.push(summaryEntry);

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
  for (const unit of bundle.units ?? []) {
    for (const topic of unit.topics ?? []) {
      searchIndex.push({
        id: topic.id,
        subjectSlug: summary.slug,
        subjectTitle: bundle.subject.title,
        unitSlug: unit.slug,
        unitTitle: unit.title,
        topicSlug: topic.slug,
        topicTitle: topic.title,
        aliases: (readJson(path.join(webRoot, topic.bundlePath)).aliases ?? []).map((alias) => alias.value).filter((value) => typeof value === "string"),
        availability: topic.availability,
        href: `/learn/${summary.slug}/${unit.slug}/${topic.slug}`,
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
writeJson(path.join(webRoot, "audit", "mcat-library-import.json"), {
  batch: IMPORT_BATCH,
  generatedOn: catalog.generatedOn,
  libraryTopics: topicsIn.length,
  published: topicCount,
  skippedWithoutContent: skipped,
  units: units.map((unit) => ({ slug: unit.slug, title: unit.title, topics: unit.topics.length })),
  questionsPublished: 0,
  questionsNote: "the library is teaching pages only; it ships no question bank",
});

console.log("MCAT LIBRARY IMPORT");
console.log(`  library topics:        ${topicsIn.length}`);
console.log(`  published:             ${topicCount} (${teachingTopics} with teaching notes, ${eli10Topics} with ELI-10, ${referencedTopics} with sources)`);
console.log(`  skipped, no content:   ${skipped}`);
for (const unit of units) console.log(`    ${unit.title}: ${unit.topics.length}`);
console.log(`  catalogue totals:      ${JSON.stringify(totals)}`);
