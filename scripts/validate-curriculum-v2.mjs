#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gvmRoot = path.resolve(root, "../../../..");
const contentRoot = path.join(root, "content-v2", "anatomy-physiology-1");
const errors = [];
const fail = (message) => errors.push(message);
const hasResolvableOrSnapshottedSource = (sourceFile, sourceSnapshotMarkdown) => {
  if (!sourceFile || path.isAbsolute(sourceFile) || sourceFile.includes("..")) return false;
  return fs.existsSync(path.join(gvmRoot, sourceFile)) || Boolean(sourceSnapshotMarkdown?.trim());
};
const readJson = (filePath) => {
  try { return JSON.parse(fs.readFileSync(filePath, "utf8")); }
  catch (error) { fail(`${path.relative(root, filePath)}: ${error.message}`); return {}; }
};

for (const schema of ["curriculum-subject-v2.schema.json", "curriculum-topic-v2.schema.json", "curriculum-question-v2.schema.json", "curriculum-crosswalk-v2.schema.json"]) {
  const filePath = path.join(root, "schemas", schema);
  if (!fs.existsSync(filePath)) fail(`Missing schema: ${schema}`); else readJson(filePath);
}

const subject = readJson(path.join(contentRoot, "subject.json"));
const questionBank = readJson(path.join(contentRoot, "questions.json"));
const crosswalk = readJson(path.join(root, "curriculum", "anatomy-physiology-1.crosswalk.json"));
const registry = readJson(path.join(root, "curriculum", "anatomy-physiology-1.registry.json"));
const report = readJson(path.join(contentRoot, "build-report.json"));

if (subject.schemaVersion !== "2.0.0" || questionBank.schemaVersion !== "2.0.0" || crosswalk.schemaVersion !== "2.0.0") fail("All pilot contracts must use schemaVersion 2.0.0");
if (subject.subject?.slug !== "anatomy-physiology-1") fail("Unexpected subject slug");
if (subject.units?.length !== 8) fail(`Expected 8 units, found ${subject.units?.length}`);
const topicSummaries = (subject.units ?? []).flatMap((unit) => unit.topics ?? []);
if (topicSummaries.length !== 54) fail(`Expected 54 canonical topics, found ${topicSummaries.length}`);
if (new Set(topicSummaries.map((topic) => topic.id)).size !== topicSummaries.length) fail("Duplicate canonical topic IDs");
if (new Set(topicSummaries.map((topic) => topic.slug)).size !== topicSummaries.length) fail("Duplicate canonical topic slugs");

const canonicalIds = new Set(topicSummaries.map((topic) => topic.id));
for (const topic of topicSummaries) {
  const bundlePath = path.join(root, topic.bundlePath ?? "");
  if (!fs.existsSync(bundlePath)) { fail(`${topic.id}: missing bundle ${topic.bundlePath}`); continue; }
  const bundle = readJson(bundlePath);
  if (bundle.schemaVersion !== "2.0.0" || bundle.id !== topic.id) fail(`${topic.id}: bundle identity mismatch`);
  for (const field of ["overview", "whyItMatters", "learningObjectives", "collegeNotes", "howItWorks", "comparisons", "highYield", "commonConfusions", "memoryAids", "eli10", "quickReview"]) {
    if (!bundle.sections?.[field]?.trim()) fail(`${topic.id}: empty ${field}`);
  }
  if (!Array.isArray(bundle.sections?.references) || bundle.sections.references.length === 0) fail(`${topic.id}: no references`);
  if (!bundle.sourceSnapshotMarkdown?.trim()) fail(`${topic.id}: missing source snapshot`);
  const sourceFile = bundle.provenance?.sourceFile;
  if (!hasResolvableOrSnapshottedSource(sourceFile, bundle.sourceSnapshotMarkdown)) fail(`${topic.id}: unresolved portable source ${sourceFile}`);
}

const questions = questionBank.questions ?? [];
const deferred = questionBank.deferred ?? [];
if (questions.length !== 553) fail(`Expected 553 published A&P I questions, found ${questions.length}`);
if (deferred.length !== 26) fail(`Expected 26 A&P II-deferred questions, found ${deferred.length}`);
if (new Set([...questions, ...deferred].map((question) => question.id)).size !== questions.length + deferred.length) fail("Duplicate question IDs");
for (const question of [...questions, ...deferred]) {
  if (!question.stem?.trim() || question.options?.length < 2) fail(`${question.id}: invalid stem/options`);
  if (!question.options?.some((option) => option.id === question.correctAnswer)) fail(`${question.id}: correct answer does not resolve to an option`);
  if (!question.rationales?.whyCorrect?.trim()) fail(`${question.id}: missing whyCorrect`);
  if (!question.rationales?.eli10?.trim()) fail(`${question.id}: missing ELI-10 rationale`);
  if (!question.sourceSnapshotMarkdown?.trim()) fail(`${question.id}: missing source snapshot`);
  if (!question.mappedCanonicalTopicIds?.length) fail(`${question.id}: no canonical mapping`);
  if (question.mappingScope === "deferred-to-other-subject") {
    if (question.mappedCanonicalTopicIds.some((id) => canonicalIds.has(id))) fail(`${question.id}: deferred question maps back into A&P I`);
  } else if (question.mappedCanonicalTopicIds.some((id) => !canonicalIds.has(id))) fail(`${question.id}: unresolved A&P I mapping`);
  const sourceFile = question.provenance?.sourceFile;
  if (!hasResolvableOrSnapshottedSource(sourceFile, question.sourceSnapshotMarkdown)) fail(`${question.id}: unresolved portable source ${sourceFile}`);
}

const appQuestions = questions.filter((question) => question.sourceCollection === "prenursing-native-app-bank");
const packQuestions = questions.filter((question) => question.sourceCollection === "ap1-study-pack");
if (appQuestions.length !== 300 || !appQuestions.every((question) => question.citationReviewRequired && question.references.length === 0)) fail("Native app citation-review policy was not preserved");
if (packQuestions.length !== 253 || !packQuestions.every((question) => !question.citationReviewRequired && question.references.length > 0)) fail("Study-pack reference policy was not preserved");

const mappings = (crosswalk.sources ?? []).flatMap((source) => source.mappings.map((mapping) => `${source.sourceCollection}/${mapping.sourceTopicId}`));
if (mappings.length !== 32 || new Set(mappings).size !== mappings.length) fail(`Expected 32 unique source-topic mappings, found ${mappings.length}`);
if (registry.subject?.id !== subject.subject?.id || registry.subject?.units?.length !== 8) fail("Registry snapshot and generated subject disagree");
if (!report.valid) fail("Build report is not valid");

const filesToScan = [
  path.join(root, "curriculum", "anatomy-physiology-1.crosswalk.json"),
  path.join(root, "curriculum", "anatomy-physiology-1.registry.json"),
  ...fs.readdirSync(contentRoot, { recursive: true }).filter((entry) => String(entry).endsWith(".json")).map((entry) => path.join(contentRoot, String(entry))),
];
for (const filePath of filesToScan) {
  if (/\/(?:Users|home)\/[^\s"']+/.test(fs.readFileSync(filePath, "utf8"))) fail(`${path.relative(root, filePath)} contains an absolute local path`);
}

console.log(`CURRICULUM V2: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`${subject.units?.length ?? 0} units; ${topicSummaries.length} topics; ${questions.length} published questions; ${deferred.length} deferred questions.`);
console.log(`Errors: ${errors.length}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
