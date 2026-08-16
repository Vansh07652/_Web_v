#!/usr/bin/env node
/**
 * Publishes the medical-nursing-mnemonics library as a course.
 *
 * Each entry is a memory device with its components broken out — symbol, term,
 * the association, a plain-language line, a clinical explanation, the
 * physiology underneath it, and a safety note. That is a topic page already.
 *
 * WHAT IS HELD BACK
 *
 * The library labels every mnemonic CURRENT, CURRENT_WITH_CAVEATS or
 * HISTORICAL. HISTORICAL ones are not published: the library keeps them to
 * document what teaching has moved on from, and putting them on a study site
 * would teach exactly the thing they are recorded as no longer being. The
 * caveated ones are published with their status stated on the page rather than
 * silently mixed in with the rest.
 *
 * The library's 168 practice questions are also not published here. Their
 * stored form carries a stem and a lettered answer but no options — the
 * choices live in prose in the docs — so importing them would mean
 * reconstructing clinical answer options rather than copying them.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");
const libraryRoot = path.join(repoRoot, "generated-subjects", "medical-nursing-mnemonics");

const SUBJECT_SLUG = "clinical-mnemonics";
const SUBJECT_ID = `subject:${SUBJECT_SLUG}`;
const SUBJECT_TITLE = "Clinical Mnemonics";
const CATEGORY = "healthcare-foundations";
const IMPORT_BATCH = "2026-08-14-clinical-mnemonics";
const COLLECTION = "medical-nursing-mnemonics";
const PUBLISHABLE = new Set(["CURRENT", "CURRENT_WITH_CAVEATS"]);

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const exists = (filePath) => fs.existsSync(filePath);
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

if (!exists(libraryRoot)) { console.error(`Library not found at ${libraryRoot}`); process.exit(1); }

const raw = readJson(path.join(libraryRoot, "data", "mnemonics.json"));
const entries = Array.isArray(raw) ? raw : raw.mnemonics ?? [];
const sources = exists(path.join(libraryRoot, "data", "sources.json"))
  ? readJson(path.join(libraryRoot, "data", "sources.json"))
  : [];

/** Sources that name this mnemonic in what they support. */
function referencesFor(entry) {
  const name = entry.mnemonic.toLowerCase();
  const matched = sources.filter((source) => (source.supports ?? [])
    .some((item) => String(item).toLowerCase().includes(name)));
  return matched.map((source) => {
    const label = [source.title, source.organization, source.publication_year].filter(Boolean).join(" — ");
    const url = typeof source.url === "string" && /^https?:\/\/\S+$/i.test(source.url) ? source.url : undefined;
    return url ? { text: label, url } : { text: label };
  }).slice(0, 12);
}

const held = [];
const unitOrder = [];
const unitsBySlug = new Map();
const topicsByUnit = new Map();

for (const entry of entries) {
  if (!PUBLISHABLE.has(entry.status)) { held.push({ mnemonic: entry.mnemonic, status: entry.status }); continue; }
  const unitSlug = slugify(entry.category);
  if (!unitsBySlug.has(unitSlug)) {
    unitsBySlug.set(unitSlug, { slug: unitSlug, title: clean(entry.category) });
    unitOrder.push(unitSlug);
    topicsByUnit.set(unitSlug, []);
  }

  const components = entry.components ?? [];
  const caveat = entry.status === "CURRENT_WITH_CAVEATS"
    ? "**Status: current, with caveats.** The source library flags this one as still taught but qualified — read the safety notes on each component before relying on it.\n\n"
    : "";

  const teaching = [
    caveat + clean(entry.purpose),
    ...components.map((component) => [
      `### ${clean(component.symbol)} — ${clean(component.term)}`,
      clean(component.association),
      clean(component.clinical_explanation),
      component.physiology ? `**Physiology.** ${clean(component.physiology)}` : "",
      component.safety_note ? `**Safety.** ${clean(component.safety_note)}` : "",
    ].filter(Boolean).join("\n\n")),
  ].filter(Boolean).join("\n\n");

  const eli10 = [
    clean(entry.eli10_purpose),
    ...components.map((component) => (component.eli10
      ? `**${clean(component.symbol)} — ${clean(component.term)}.** ${clean(component.eli10)}`
      : "")),
  ].filter(Boolean).join("\n\n");

  topicsByUnit.get(unitSlug).push({
    // The mnemonic is the title. Appending its first component produced page
    // names like "OPQRST — A structured six-part framework to characterize a
    // pain or chief complaint..." and slugs to match.
    slug: slugify(entry.mnemonic).slice(0, 80),
    title: clean(entry.mnemonic),
    status: entry.status,
    sections: {
      overview: clean(entry.purpose),
      whyItMatters: "",
      learningObjectives: "",
      keyTerms: components.map((component) => `- **${clean(component.symbol)}** — ${clean(component.term)}`).join("\n"),
      collegeNotes: teaching,
      howItWorks: "",
      comparisons: "",
      highYield: "",
      commonConfusions: "",
      memoryAids: components.map((component) => `- ${clean(component.symbol)} = ${clean(component.term)}`).join("\n"),
      eli10,
      quickReview: components.map((component) => `- ${clean(component.symbol)} = ${clean(component.term)} — ${clean(component.association)}`).join("\n"),
      workedExamples: "",
      references: referencesFor(entry),
    },
    snapshot: clean(JSON.stringify(entry, null, 2)).slice(0, 40000),
    sourceFile: "generated-subjects/medical-nursing-mnemonics/data/mnemonics.json",
  });
}

// ---------------------------------------------------------------------------

const units = [];
let topicCount = 0; let teachingTopics = 0; let eli10Topics = 0; let referencedTopics = 0;

unitOrder.forEach((unitSlug, index) => {
  const meta = unitsBySlug.get(unitSlug);
  const unitId = `unit:${SUBJECT_SLUG}:${unitSlug}`;
  const unitTopics = [];
  topicsByUnit.get(unitSlug).forEach((topic, topicIndex) => {
    const id = `topic:${SUBJECT_SLUG}:${unitSlug}:${topic.slug}`;
    const availability = {
      collegeNotes: Boolean(topic.sections.collegeNotes.trim()),
      eli10: Boolean(topic.sections.eli10.trim()),
      highYield: false,
      quickReview: Boolean(topic.sections.quickReview.trim()),
      workedExamples: false,
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
        sourceStatus: topic.status,
        importedWithoutRewriting: true,
        importBatch: IMPORT_BATCH,
      },
      sourceSnapshotMarkdown: topic.snapshot,
    };
    writeJson(path.join(webRoot, bundlePath), bundle);
    writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "topics", unitSlug, `${topic.slug}.json`), { ...bundle, sourceSnapshotMarkdown: "" });
    unitTopics.push({ id, slug: topic.slug, title: topic.title, order: topicIndex + 1, status: "final", bundlePath, mappedQuestionCount: 0, availability });
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

writeJson(path.join(sourceSubjectsRoot, SUBJECT_SLUG, "subject.json"), {
  schemaVersion: "2.0.0",
  subject: {
    id: SUBJECT_ID, slug: SUBJECT_SLUG, title: SUBJECT_TITLE, category: CATEGORY, status: "final",
    summary: "Memory devices taken apart: what each letter stands for, the physiology underneath it, the safety caveat, and the same thing in plain language. Mnemonics the source library records as outdated are not included.",
  },
  statistics,
  units,
});
writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "subject.json"), readJson(path.join(sourceSubjectsRoot, SUBJECT_SLUG, "subject.json")));
const emptyBank = { schemaVersion: "2.0.0", subjectSlug: SUBJECT_SLUG, questions: [], subjectWideQuestions: [] };
writeJson(path.join(sourceSubjectsRoot, SUBJECT_SLUG, "questions.json"), emptyBank);
writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "questions.json"), emptyBank);

const catalog = readJson(path.join(contentRoot, "catalog.json"));
const summaryEntry = {
  id: SUBJECT_ID, slug: SUBJECT_SLUG, title: SUBJECT_TITLE,
  aliases: [{ value: SUBJECT_SLUG, kind: "canonical_slug" }, { value: "mnemonics", kind: "legacy_or_display_alias" }],
  status: "final", category: CATEGORY, legacySlugs: [], statistics, href: `/learn/${SUBJECT_SLUG}`,
};
const at = catalog.subjects.findIndex((summary) => summary.slug === SUBJECT_SLUG);
if (at >= 0) catalog.subjects[at] = summaryEntry; else catalog.subjects.push(summaryEntry);

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
        id: topic.id, subjectSlug: summary.slug, subjectTitle: bundle.subject.title,
        unitSlug: unit.slug, unitTitle: unit.title, topicSlug: topic.slug, topicTitle: topic.title,
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
writeJson(path.join(webRoot, "audit", "clinical-mnemonics-import.json"), {
  batch: IMPORT_BATCH, generatedOn: catalog.generatedOn,
  libraryEntries: entries.length, published: topicCount, held,
  questionsPublished: 0,
  questionsNote: "the library stores stems and lettered answers without option lists; importing them would mean reconstructing clinical answer choices",
});

console.log("CLINICAL MNEMONICS IMPORT");
console.log(`  library entries: ${entries.length}`);
console.log(`  published:       ${topicCount} (${eli10Topics} with a plain-language explanation, ${referencedTopics} with sources)`);
console.log(`  held back:       ${held.length}${held.length ? ` — ${held.map((item) => `${item.mnemonic} (${item.status})`).join(", ")}` : ""}`);
for (const unit of units) console.log(`    ${unit.title}: ${unit.topics.length}`);
console.log(`  catalogue totals: ${JSON.stringify(totals)}`);
