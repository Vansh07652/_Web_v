#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (message) => errors.push(message);
const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));
const stableIds = (records) => records.map((item) => item.id).sort((a, b) => a.localeCompare(b));
const same = (left, right) => JSON.stringify(left) === JSON.stringify(right);

const expected = readJson("audit/expected-content-manifest.json");
const current = readJson("audit/current-content-manifest.json");
const runtime = readJson("audit/runtime-data-manifest.json");
const subjects = readJson("data/subjects.json");
const lessons = readJson("data/lessons.json");
const notes = readJson("data/notes.json");
const questions = readJson("data/questions.json");
const tags = readJson("data/tags.json");
const contentIndex = readJson("data/content-index.json");
const searchIndex = readJson("data/search-index.json");

const requiredTotals = expected.totals;
if (requiredTotals?.subjects !== 11) fail(`expected-content: subjects=${requiredTotals?.subjects}, expected 11`);
for (const manifest of [current, runtime]) {
  for (const [key, value] of Object.entries(requiredTotals)) {
    if (manifest.totals?.[key] !== value) fail(`${manifest.manifestType}: ${key}=${manifest.totals?.[key]}, expected ${value}`);
  }
}

for (const [label, actual] of Object.entries({ subjects: subjects.length, lessons: lessons.length, notes: notes.length, questions: questions.length, tags: tags.length, contentIndexRecords: contentIndex.length, searchIndexRecords: searchIndex.length })) {
  if (actual !== requiredTotals[label]) fail(`${label}=${actual}, expected ${requiredTotals[label]}`);
}

for (const subject of expected.subjects) {
  const currentSubject = current.subjects.find((item) => item.slug === subject.slug);
  const runtimeSubject = runtime.subjects.find((item) => item.slug === subject.slug);
  if (!currentSubject || !runtimeSubject) {
    fail(`${subject.slug}: missing from current or runtime manifest`);
    continue;
  }
  for (const key of ["lessonCount", "noteCount", "questionCount", "assetCount", "tagCount"]) {
    if (currentSubject[key] !== subject[key]) fail(`${subject.slug}: current ${key}=${currentSubject[key]}, expected ${subject[key]}`);
    if (runtimeSubject[key] !== subject[key]) fail(`${subject.slug}: runtime ${key}=${runtimeSubject[key]}, expected ${subject[key]}`);
  }
  for (const key of ["lessons", "notes", "questions"]) {
    const expectedIds = stableIds(subject[key]);
    if (!same(expectedIds, stableIds(currentSubject[key]))) fail(`${subject.slug}: current ${key} ID set differs`);
    if (!same(expectedIds, stableIds(runtimeSubject[key]))) fail(`${subject.slug}: runtime ${key} ID set differs`);
  }
  if (!same([...subject.tags].sort(), [...currentSubject.tags].sort())) fail(`${subject.slug}: current tags differ`);
  if (!same([...subject.tags].sort(), [...runtimeSubject.tags].sort())) fail(`${subject.slug}: runtime tags differ`);
}

for (const subject of subjects) {
  const count = notes.filter((item) => item.subject === subject.slug).length + questions.filter((item) => item.subject === subject.slug).length;
  if (subject.approvedContentCount !== count) fail(`${subject.slug}: approvedContentCount=${subject.approvedContentCount}, actual=${count}`);
}

for (const item of [...notes, ...questions, ...contentIndex]) {
  if (!item.filePath || !fs.existsSync(path.join(root, item.filePath))) fail(`${item.id}: unresolved ${item.filePath ?? "file path"}`);
}

for (const [label, records] of [["subjects", subjects], ["lessons", lessons], ["notes", notes], ["questions", questions], ["tags", tags], ["content-index", contentIndex], ["search-index", searchIndex]]) {
  const ids = records.map((item) => item.id);
  if (new Set(ids).size !== ids.length) fail(`${label}: duplicate IDs`);
}

const appSource = fs.readFileSync(path.join(root, "src/App.tsx"), "utf8");
const searchSource = fs.readFileSync(path.join(root, "src/pages/SearchPage.tsx"), "utf8");
if (/lessons\.slice\s*\(/.test(appSource)) fail("Subject lesson rendering is sliced");
if (/results\.slice\s*\(/.test(searchSource)) fail("Search result rendering is sliced");
if (/popularTags\.slice\s*\(/.test(searchSource)) fail("Search tag options are sliced");
if (/result\.tags\.slice\s*\(/.test(searchSource)) fail("Search result tags are sliced");

for (const relative of [
  "audit/expected-content-manifest.csv",
  "audit/current-content-manifest.csv",
  "audit/runtime-data-manifest.csv",
  "audit/content-gap-report.csv",
]) {
  const source = fs.readFileSync(path.join(root, relative), "utf8");
  if (!source.startsWith("manifest,subject") && !source.startsWith("subject,content_type")) fail(`${relative}: invalid CSV header`);
}

console.log(`CONTENT COMPLETENESS: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`Expected/current/runtime: ${requiredTotals.subjects} subjects; ${requiredTotals.lessons} lessons; ${requiredTotals.notes} notes; ${requiredTotals.questions} questions; ${requiredTotals.tags} tags; ${requiredTotals.assets} subject assets`);
console.log(`Errors: ${errors.length}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
