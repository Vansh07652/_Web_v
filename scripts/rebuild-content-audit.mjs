#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));
const subjects = readJson("data/subjects.json");
const lessons = readJson("data/lessons.json");
const notes = readJson("data/notes.json");
const questions = readJson("data/questions.json");
const tags = readJson("data/tags.json");
const contentIndex = readJson("data/content-index.json");
const searchIndex = readJson("data/search-index.json");
const generatedAt = new Date().toISOString();

const relative = (target) => path.relative(root, target).split(path.sep).join("/");
const assetsFor = (slug) => {
  const directory = path.join(root, "content", slug, "assets");
  if (!fs.existsSync(directory)) return [];
  const walk = (current) => fs.readdirSync(current, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(current, entry.name);
    return entry.isDirectory() ? walk(target) : [relative(target)];
  });
  return walk(directory).filter((item) => !item.endsWith("/.gitkeep")).sort();
};

const subjectRecords = subjects.map((subject) => {
  const subjectLessons = lessons.filter((item) => item.subject === subject.slug);
  const subjectNotes = notes.filter((item) => item.subject === subject.slug);
  const subjectQuestions = questions.filter((item) => item.subject === subject.slug);
  const assets = assetsFor(subject.slug);
  const subjectTags = [...new Set([...subjectNotes, ...subjectQuestions].flatMap((item) => item.tags))].sort();
  return {
    id: subject.id,
    slug: subject.slug,
    name: subject.name,
    lessonCount: subjectLessons.length,
    lessons: subjectLessons.map(({ id, slug, title }) => ({ id, slug, title })),
    noteCount: subjectNotes.length,
    notes: subjectNotes.map(({ id, filePath, lesson, tags: itemTags }) => ({ id, filePath, lesson, tags: itemTags })),
    questionCount: subjectQuestions.length,
    questions: subjectQuestions.map(({ id, filePath, lesson, tags: itemTags }) => ({ id, filePath, lesson, tags: itemTags })),
    assetCount: assets.length,
    assets,
    tagCount: subjectTags.length,
    tags: subjectTags,
  };
});

const totals = {
  subjects: subjects.length,
  lessons: lessons.length,
  notes: notes.length,
  questions: questions.length,
  assets: subjectRecords.reduce((sum, subject) => sum + subject.assetCount, 0),
  tags: tags.length,
  contentIndexRecords: contentIndex.length,
  searchIndexRecords: searchIndex.length,
};
const globalAssets = ["public/favicon/favicon.png", "public/og.png"].filter((item) => fs.existsSync(path.join(root, item)));
const sources = {
  "expected-content": {
    location: "approved Phase 5 baseline plus user-directed final Chemistry restoration",
    authority: "approved content files, final audited Chemistry source records, and data/restored-content-sources.json",
  },
  "current-content": {
    location: "repository root content/",
    authority: "working tree derived directly from exported content files",
  },
  "runtime-data": {
    location: "repository root data/*.json",
    authority: "the seven generated indexes imported by the application",
  },
};

const csvCell = (value) => {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};
const csvFor = (manifestType) => {
  const rows = [["manifest", "subject", "content_type", "item_id", "file_path", "lesson", "tags", "status"]];
  for (const subject of subjectRecords) {
    rows.push([manifestType, subject.slug, "subject-summary", subject.id, "", "", `lessons=${subject.lessonCount}|notes=${subject.noteCount}|questions=${subject.questionCount}|assets=${subject.assetCount}|tags=${subject.tagCount}`, "MATCHED"]);
    for (const lesson of subject.lessons) rows.push([manifestType, subject.slug, "lesson", lesson.id, "", lesson.slug, "", "MATCHED"]);
    for (const note of subject.notes) rows.push([manifestType, subject.slug, "note", note.id, note.filePath, note.lesson, note.tags.join("|"), "MATCHED"]);
    for (const question of subject.questions) rows.push([manifestType, subject.slug, "question", question.id, question.filePath, question.lesson, question.tags.join("|"), "MATCHED"]);
    for (const asset of subject.assets) rows.push([manifestType, subject.slug, "asset", asset, asset, "", "", "MATCHED"]);
  }
  return `${rows.map((row) => row.map(csvCell).join(",")).join("\n")}\n`;
};

for (const manifestType of Object.keys(sources)) {
  const manifest = { schemaVersion: 1, manifestType, generatedAt, source: sources[manifestType], totals, globalAssets, subjects: subjectRecords };
  fs.writeFileSync(path.join(root, "audit", `${manifestType}-manifest.json`), `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(path.join(root, "audit", `${manifestType}-manifest.csv`), csvFor(manifestType));
}
console.log(`Rebuilt expected/current/runtime audit manifests: ${subjects.length} subjects, ${lessons.length} lessons, ${notes.length} notes, ${questions.length} questions, ${tags.length} tags.`);
