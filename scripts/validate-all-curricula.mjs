#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gvmRoot = path.resolve(root, "../../../..");
const contentRoot = path.join(root, "content-v2");
const errors = [];
const fail = (message) => errors.push(message);
const readJson = (filePath) => {
  try { return JSON.parse(fs.readFileSync(filePath, "utf8")); }
  catch (error) { fail(`${path.relative(root, filePath)}: ${error.message}`); return {}; }
};
const hasResolvableOrSnapshottedSource = (sourceFile, sourceSnapshotMarkdown) => typeof sourceFile === "string"
  && sourceFile.length > 0
  && !path.isAbsolute(sourceFile)
  && !sourceFile.split("/").includes("..")
  && (fs.existsSync(path.join(gvmRoot, sourceFile)) || Boolean(sourceSnapshotMarkdown?.trim()));

for (const schema of ["curriculum-subject-v2.schema.json", "curriculum-topic-v2.schema.json", "curriculum-question-v2.schema.json", "curriculum-crosswalk-v2.schema.json"]) {
  const filePath = path.join(root, "schemas", schema);
  if (!fs.existsSync(filePath)) fail(`Missing schema: ${schema}`); else readJson(filePath);
}

const catalog = readJson(path.join(contentRoot, "catalog.json"));
const searchIndex = readJson(path.join(contentRoot, "client", "search-index.json"));
const report = readJson(path.join(contentRoot, "build-report.json"));
const registry = readJson(path.join(root, "curriculum", "master-curriculum-registry.snapshot.json"));
// Snapshot of the catalogue as published. These are deliberately hard-coded so
// that content silently disappearing fails the build; update them only when an
// import or edit intentionally changes the totals.
const expectedTotals = {
  subjects: 39,
  units: 201,
  topics: 1317,
  teachingTopics: 1023,
  eli10Topics: 1309,
  referencedTopics: 825,
  uniqueQuestionsAcrossCatalog: 24400,
  questionPlacements: 25000,
};

if (catalog.schemaVersion !== "2.0.0") fail(`Catalog schemaVersion is ${catalog.schemaVersion ?? "missing"}`);
if (registry.registryId !== catalog.registryId) fail("Registry snapshot and catalog registry IDs disagree");
for (const [key, expected] of Object.entries(expectedTotals)) {
  if (catalog.totals?.[key] !== expected) fail(`Catalog ${key}: expected ${expected}, found ${catalog.totals?.[key]}`);
  if (report.totals?.[key] !== expected) fail(`Build report ${key}: expected ${expected}, found ${report.totals?.[key]}`);
}

const subjectIds = new Set();
const subjectSlugs = new Set();
const topicIds = new Set();
const questionFingerprints = new Map();
let unitCount = 0;
let topicCount = 0;
let teachingTopics = 0;
let eli10Topics = 0;
let referencedTopics = 0;
let questionPlacements = 0;

for (const summary of catalog.subjects ?? []) {
  if (subjectIds.has(summary.id)) fail(`Duplicate subject ID: ${summary.id}`);
  if (subjectSlugs.has(summary.slug)) fail(`Duplicate subject slug: ${summary.slug}`);
  subjectIds.add(summary.id); subjectSlugs.add(summary.slug);
  if (!["pre-health-core", "healthcare-foundations", "pathophysiology", "allied-health"].includes(summary.category)) fail(`${summary.slug}: invalid category ${summary.category}`);
  if (summary.href !== `/learn/${summary.slug}`) fail(`${summary.slug}: incorrect catalog href ${summary.href}`);

  const subjectFile = path.join(contentRoot, "subjects", summary.slug, "subject.json");
  const questionFile = path.join(contentRoot, "subjects", summary.slug, "questions.json");
  if (!fs.existsSync(subjectFile)) { fail(`${summary.slug}: subject bundle missing`); continue; }
  if (!fs.existsSync(questionFile)) { fail(`${summary.slug}: question bundle missing`); continue; }
  const subject = readJson(subjectFile);
  const bank = readJson(questionFile);
  if (subject.schemaVersion !== "2.0.0" || bank.schemaVersion !== "2.0.0") fail(`${summary.slug}: generated contracts must use schemaVersion 2.0.0`);
  if (subject.subject?.id !== summary.id || subject.subject?.slug !== summary.slug) fail(`${summary.slug}: subject identity mismatch`);
  if (subject.subject?.category !== summary.category) fail(`${summary.slug}: subject category mismatch`);
  if (bank.subjectSlug !== summary.slug) fail(`${summary.slug}: question bank subject mismatch`);

  const subjectTopicIds = new Set();
  const units = subject.units ?? [];
  const topics = units.flatMap((unit) => unit.topics ?? []);
  unitCount += units.length;
  topicCount += topics.length;
  if (new Set(units.map((unit) => unit.id)).size !== units.length) fail(`${summary.slug}: duplicate unit IDs`);
  if (new Set(units.map((unit) => unit.slug)).size !== units.length) fail(`${summary.slug}: duplicate unit slugs`);
  for (const unit of units) {
    if (new Set((unit.topics ?? []).map((topic) => topic.slug)).size !== (unit.topics ?? []).length) fail(`${summary.slug}/${unit.slug}: duplicate topic slugs`);
    for (const topicSummary of unit.topics ?? []) {
      if (topicIds.has(topicSummary.id)) fail(`Duplicate global topic ID: ${topicSummary.id}`);
      topicIds.add(topicSummary.id); subjectTopicIds.add(topicSummary.id);
      const bundleFile = path.join(root, topicSummary.bundlePath ?? "");
      if (!fs.existsSync(bundleFile)) { fail(`${topicSummary.id}: missing bundle ${topicSummary.bundlePath}`); continue; }
      const topic = readJson(bundleFile);
      if (topic.schemaVersion !== "2.0.0" || topic.id !== topicSummary.id || topic.slug !== topicSummary.slug) fail(`${topicSummary.id}: topic bundle identity mismatch`);
      if (topic.subject?.slug !== summary.slug || topic.unit?.slug !== unit.slug) fail(`${topicSummary.id}: subject/unit relationship mismatch`);
      if (!topic.sourceSnapshotMarkdown?.trim()) fail(`${topicSummary.id}: missing source snapshot`);
      if (!hasResolvableOrSnapshottedSource(topic.provenance?.sourceFile, topic.sourceSnapshotMarkdown)) fail(`${topicSummary.id}: unresolved portable source ${topic.provenance?.sourceFile}`);
      const clientTopicFile = path.join(contentRoot, "client", "subjects", summary.slug, "topics", unit.slug, `${topicSummary.slug}.json`);
      const clientTopic = readJson(clientTopicFile);
      if (clientTopic.id !== topic.id || JSON.stringify(clientTopic.sections) !== JSON.stringify(topic.sections)) fail(`${topicSummary.id}: client topic is not content-equivalent`);
      if (clientTopic.sourceSnapshotMarkdown !== "") fail(`${topicSummary.id}: client topic retained its audit-only source snapshot`);
      const availability = topic.availability ?? {};
      if (availability.collegeNotes !== Boolean(topic.sections?.collegeNotes?.trim())) fail(`${topicSummary.id}: college-note availability mismatch`);
      if (availability.eli10 !== Boolean(topic.sections?.eli10?.trim())) fail(`${topicSummary.id}: ELI-10 availability mismatch`);
      if (availability.references !== Boolean(topic.sections?.references?.length)) fail(`${topicSummary.id}: reference availability mismatch`);
      for (const reference of topic.sections?.references ?? []) if (reference.url && !/^https?:\/\/[^\s]+$/i.test(reference.url)) fail(`${topicSummary.id}: invalid reference URL ${reference.url}`);
      if (availability.collegeNotes) teachingTopics += 1;
      if (availability.eli10) eli10Topics += 1;
      if (availability.references) referencedTopics += 1;
    }
  }

  const exact = bank.questions ?? [];
  const subjectWide = bank.subjectWideQuestions ?? [];
  const clientSubject = readJson(path.join(contentRoot, "client", "subjects", summary.slug, "subject.json"));
  const clientBank = readJson(path.join(contentRoot, "client", "subjects", summary.slug, "questions.json"));
  if (clientSubject.subject?.id !== subject.subject?.id || clientSubject.units?.length !== units.length) fail(`${summary.slug}: client subject is not route-equivalent`);
  if (clientBank.questions?.length !== exact.length || clientBank.subjectWideQuestions?.length !== subjectWide.length) fail(`${summary.slug}: client question bank count mismatch`);
  if ([...(clientBank.questions ?? []), ...(clientBank.subjectWideQuestions ?? [])].some((question) => "sourceSnapshotMarkdown" in question)) fail(`${summary.slug}: client question bank retained audit-only source snapshots`);
  const allQuestions = [...exact, ...subjectWide];
  questionPlacements += allQuestions.length;
  if (new Set(allQuestions.map((question) => question.id)).size !== allQuestions.length) fail(`${summary.slug}: duplicate question IDs within subject`);
  if (exact.length !== summary.statistics?.exactOrMappedQuestionCount) fail(`${summary.slug}: exact question statistic mismatch`);
  if (subjectWide.length !== summary.statistics?.subjectWideQuestionCount) fail(`${summary.slug}: subject-wide question statistic mismatch`);
  if (allQuestions.length !== summary.statistics?.uniqueQuestionCount) fail(`${summary.slug}: unique question statistic mismatch`);
  for (const question of allQuestions) {
    if (!question.stem?.trim() || !Array.isArray(question.options) || question.options.length < 2) fail(`${summary.slug}/${question.id}: invalid stem/options`);
    if (!question.options?.some((option) => option.id === question.correctAnswer)) fail(`${summary.slug}/${question.id}: correct answer does not resolve`);
    if (new Set(question.options?.map((option) => option.id)).size !== question.options?.length) fail(`${summary.slug}/${question.id}: duplicate option IDs`);
    if (!question.rationales?.whyCorrect?.trim()) fail(`${summary.slug}/${question.id}: missing whyCorrect`);
    if (!question.rationales?.eli10?.trim()) fail(`${summary.slug}/${question.id}: missing ELI-10 rationale`);
    if (!question.sourceSnapshotMarkdown?.trim()) fail(`${summary.slug}/${question.id}: missing source snapshot`);
    if (!hasResolvableOrSnapshottedSource(question.provenance?.sourceFile, question.sourceSnapshotMarkdown)) fail(`${summary.slug}/${question.id}: unresolved portable source ${question.provenance?.sourceFile}`);
    if (question.citationReviewRequired === false && !question.references?.length) fail(`${summary.slug}/${question.id}: published reference policy mismatch`);
    for (const reference of question.references ?? []) if (reference.url && !/^https?:\/\/[^\s]+$/i.test(reference.url)) fail(`${summary.slug}/${question.id}: invalid reference URL ${reference.url}`);
    if (subjectWide.includes(question)) {
      if (question.mappingScope !== "subject-wide-overlay" || question.mappedCanonicalTopicIds?.length) fail(`${summary.slug}/${question.id}: invalid subject-wide mapping`);
    } else if (!question.mappedCanonicalTopicIds?.length || question.mappedCanonicalTopicIds.some((id) => !subjectTopicIds.has(id))) {
      fail(`${summary.slug}/${question.id}: unresolved canonical topic mapping`);
    }
    const fingerprint = JSON.stringify({ stem: question.stem, options: question.options, correctAnswer: question.correctAnswer, rationales: question.rationales, sourceFile: question.provenance?.sourceFile });
    const prior = questionFingerprints.get(question.id);
    if (prior && prior !== fingerprint) fail(`${question.id}: shared question ID has conflicting content`); else questionFingerprints.set(question.id, fingerprint);
  }

  for (const topic of topics) {
    const associations = exact.filter((question) => question.mappedCanonicalTopicIds.includes(topic.id)).length;
    if (topic.mappedQuestionCount !== associations || topic.availability?.exactQuestions !== associations) fail(`${topic.id}: mapped question count is ${topic.mappedQuestionCount}/${topic.availability?.exactQuestions}, expected ${associations}`);
  }
  const stats = subject.statistics ?? {};
  const citationReviewCount = allQuestions.filter((question) => question.citationReviewRequired).length;
  if (stats.citationReviewRequiredCount !== citationReviewCount) fail(`${summary.slug}: citation-review statistic mismatch`);

  if (units.length !== stats.unitCount || topics.length !== stats.topicCount) fail(`${summary.slug}: unit/topic statistics mismatch`);
  for (const key of ["unitCount", "topicCount", "teachingTopicCount", "eli10TopicCount", "referencedTopicCount", "exactOrMappedQuestionCount", "subjectWideQuestionCount", "uniqueQuestionCount", "citationReviewRequiredCount"]) {
    if (stats[key] !== summary.statistics?.[key]) fail(`${summary.slug}: catalog statistic ${key} mismatch`);
  }
}

for (const [label, actual, expected] of [
  ["subjects", subjectIds.size, expectedTotals.subjects], ["units", unitCount, expectedTotals.units], ["topics", topicCount, expectedTotals.topics],
  ["teaching topics", teachingTopics, expectedTotals.teachingTopics], ["ELI-10 topics", eli10Topics, expectedTotals.eli10Topics],
  ["referenced topics", referencedTopics, expectedTotals.referencedTopics], ["question placements", questionPlacements, expectedTotals.questionPlacements],
  ["globally unique questions", questionFingerprints.size, expectedTotals.uniqueQuestionsAcrossCatalog],
]) if (actual !== expected) fail(`Computed ${label}: expected ${expected}, found ${actual}`);

if (!Array.isArray(searchIndex) || searchIndex.length !== topicIds.size) fail(`Client search index: expected ${topicIds.size} entries, found ${searchIndex?.length}`);
else {
  if (new Set(searchIndex.map((entry) => entry.id)).size !== searchIndex.length) fail("Client search index contains duplicate topic IDs");
  for (const entry of searchIndex) {
    if (!topicIds.has(entry.id)) fail(`Client search index contains unknown topic ${entry.id}`);
    if (entry.href !== `/learn/${entry.subjectSlug}/${entry.unitSlug}/${entry.topicSlug}`) fail(`${entry.id}: incorrect search href ${entry.href}`);
  }
}

for (const filePath of [path.join(contentRoot, "catalog.json"), path.join(contentRoot, "build-report.json"), path.join(root, "curriculum", "master-curriculum-registry.snapshot.json")]) {
  if (/\/(?:Users|home)\/[^\s"']+/.test(fs.readFileSync(filePath, "utf8"))) fail(`${path.relative(root, filePath)} contains an absolute local path`);
}

console.log(`ALL CURRICULA VALIDATION: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`${subjectIds.size} subjects; ${unitCount} units; ${topicCount} topics; ${teachingTopics} teaching topics; ${questionFingerprints.size} unique questions.`);
console.log(`Known source gaps preserved honestly: ${topicCount - eli10Topics} ELI-10 topics; ${topicCount - referencedTopics} reference lists; ${topicCount - teachingTopics} standalone college-note topics.`);
console.log(`Errors: ${errors.length}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
