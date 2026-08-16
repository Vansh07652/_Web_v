#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(root, "content");
const dataRoot = path.join(root, "data");
const existingSubjects = JSON.parse(fs.readFileSync(path.join(dataRoot, "subjects.json"), "utf8"));
const questionOnlyLessons = JSON.parse(fs.readFileSync(path.join(dataRoot, "question-only-lessons.json"), "utf8"));
const existingTagNames = new Map(
  JSON.parse(fs.readFileSync(path.join(dataRoot, "tags.json"), "utf8")).map((tag) => [tag.id, tag.name]),
);
const subjectOrder = new Map(existingSubjects.map((subject, index) => [subject.slug, index]));

const parseScalar = (value) => {
  if (value === "") return null;
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value);
  if (value.startsWith('"') && value.endsWith('"')) return JSON.parse(value);
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1);
  return value;
};

const parseFrontMatter = (source, filePath) => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error(`Missing front matter: ${filePath}`);
  const record = {};
  let arrayKey;
  for (const line of match[1].split("\n")) {
    const itemMatch = line.match(/^\s+-\s+(.+)$/);
    if (itemMatch && arrayKey) {
      record[arrayKey].push(parseScalar(itemMatch[1].trim()));
      continue;
    }
    const keyMatch = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!keyMatch) continue;
    const [, key, rawValue] = keyMatch;
    if (rawValue === "" && key === "tags") {
      record[key] = [];
      arrayKey = key;
    } else {
      record[key] = parseScalar(rawValue.trim());
      arrayKey = undefined;
    }
  }
  return record;
};

const relative = (target) => path.relative(root, target).split(path.sep).join("/");
const notes = [];
const questions = [];

for (const subject of existingSubjects) {
  const noteDirectory = path.join(contentRoot, subject.slug, "notes");
  if (fs.existsSync(noteDirectory)) {
    for (const name of fs.readdirSync(noteDirectory).filter((entry) => entry.endsWith(".md")).sort()) {
      const target = path.join(noteDirectory, name);
      const frontMatter = parseFrontMatter(fs.readFileSync(target, "utf8"), relative(target));
      notes.push({
        id: frontMatter.id,
        subject: frontMatter.subject,
        contentType: "note",
        title: frontMatter.title,
        lesson: frontMatter.lesson,
        filePath: relative(target),
        status: frontMatter.status,
        reviewStatus: frontMatter.reviewStatus,
        source: frontMatter.source,
        originalFile: frontMatter.originalFile,
        tags: frontMatter.tags ?? [],
        lessonNumber: frontMatter.lessonNumber,
      });
    }
  }

  const questionDirectory = path.join(contentRoot, subject.slug, "questions");
  if (fs.existsSync(questionDirectory)) {
    for (const name of fs.readdirSync(questionDirectory).filter((entry) => entry.endsWith(".json")).sort()) {
      const target = path.join(questionDirectory, name);
      questions.push({ ...JSON.parse(fs.readFileSync(target, "utf8")), filePath: relative(target) });
    }
  }
}

notes.sort((a, b) => (subjectOrder.get(a.subject) - subjectOrder.get(b.subject)) || a.lessonNumber - b.lessonNumber || a.id.localeCompare(b.id));
const noteLessons = notes.map((note) => ({
  id: note.id,
  subject: note.subject,
  title: note.title,
  slug: note.lesson,
  lessonNumber: note.lessonNumber,
  status: "approved",
}));
const lessons = [...noteLessons, ...questionOnlyLessons]
  .sort((a, b) => (subjectOrder.get(a.subject) - subjectOrder.get(b.subject)) || a.lessonNumber - b.lessonNumber || a.id.localeCompare(b.id));
const lessonIds = new Set();
const lessonKeys = new Set();
for (const lesson of lessons) {
  const key = `${lesson.subject}/${lesson.slug}`;
  if (lessonIds.has(lesson.id)) throw new Error(`Duplicate lesson id: ${lesson.id}`);
  if (lessonKeys.has(key)) throw new Error(`Duplicate lesson key: ${key}`);
  lessonIds.add(lesson.id);
  lessonKeys.add(key);
}
const lessonOrder = new Map(lessons.map((lesson, index) => [`${lesson.subject}/${lesson.slug}`, index]));
for (const question of questions) {
  if (!lessonKeys.has(`${question.subject}/${question.lesson}`)) throw new Error(`Question has no lesson: ${question.id}`);
}
for (const lesson of questionOnlyLessons) {
  if (!questions.some((question) => question.subject === lesson.subject && question.lesson === lesson.slug)) {
    throw new Error(`Question-only lesson has no questions: ${lesson.id}`);
  }
}
questions.sort((a, b) => (subjectOrder.get(a.subject) - subjectOrder.get(b.subject)) || (lessonOrder.get(`${a.subject}/${a.lesson}`) - lessonOrder.get(`${b.subject}/${b.lesson}`)) || a.id.localeCompare(b.id));

const noteRecords = notes.map(({ lessonNumber: _lessonNumber, ...note }) => note);
const subjects = existingSubjects.map((subject) => ({
  id: subject.slug,
  slug: subject.slug,
  name: subject.name,
  status: "approved",
  approvedContentCount: noteRecords.filter((note) => note.subject === subject.slug).length + questions.filter((question) => question.subject === subject.slug).length,
}));
const contentIndex = [
  ...noteRecords,
  ...questions.map((question) => ({
    id: question.id,
    subject: question.subject,
    contentType: "question",
    title: question.question,
    lesson: question.lesson,
    filePath: question.filePath,
    status: question.status,
    reviewStatus: question.reviewStatus,
    source: question.source,
    originalFile: question.originalFile,
    tags: question.tags,
  })),
];
const searchIndex = contentIndex.map((item) => ({
  id: item.id,
  subject: item.subject,
  contentType: item.contentType,
  title: item.title,
  text: item.title,
  filePath: item.filePath,
  tags: item.tags,
}));
const tagCounts = new Map();
for (const item of contentIndex) {
  for (const tag of item.tags) {
    const id = String(tag).toLocaleLowerCase();
    const existing = tagCounts.get(id);
    tagCounts.set(id, {
      name: existing?.name ?? existingTagNames.get(id) ?? `${String(tag).charAt(0).toLocaleUpperCase()}${String(tag).slice(1)}`,
      count: (existing?.count ?? 0) + 1,
    });
  }
}
const tags = [...tagCounts.entries()]
  .map(([id, { name, count }]) => ({ id, name, count }))
  .sort((a, b) => a.id.localeCompare(b.id));

for (const [name, records] of Object.entries({ subjects, lessons, notes: noteRecords, questions, tags, "content-index": contentIndex, "search-index": searchIndex })) {
  fs.writeFileSync(path.join(dataRoot, `${name}.json`), `${JSON.stringify(records, null, 2)}\n`);
  console.log(`Rebuilt data/${name}.json (${records.length} records)`);
}
