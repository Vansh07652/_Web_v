#!/usr/bin/env node
/**
 * Imports the RPSGT 500-question bank from the book manuscript into
 * Sleep Technology, which had 72 questions.
 *
 * The manuscript stores each section twice: the question list (stem plus four
 * lettered options) and, later in the same file, the answer key (correct
 * option, the domain it tests, why it is correct, the clue in the question,
 * and an ELI-10 explanation). Both halves are parsed and joined on the
 * question number, so a question is only published when its own answer block
 * was found — a stem without its answer is dropped, not published half-formed.
 *
 * Anything already on the site is skipped by stem, so the 72 questions
 * imported earlier from the same author's library are not duplicated.
 *
 * These are subject-wide questions: the manuscript maps each to an exam domain
 * rather than to one of this course's topics, and inventing a topic mapping
 * would be a claim the source does not make.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");
const chaptersRoot = path.resolve(repoRoot, "..", "kindle-book-library", "books", "manuscripts", "rpsgt-500-questions", "chapters");

const SUBJECT_SLUG = "sleep-technology";
const IMPORT_BATCH = "2026-08-15-rpsgt-500";
const COLLECTION = "rpsgt-500-questions";

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const exists = (filePath) => fs.existsSync(filePath);
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
const normalise = (value = "") => clean(value).toLowerCase().replace(/\W+/g, " ").trim();

if (!exists(chaptersRoot)) { console.error(`Manuscript not found at ${chaptersRoot}`); process.exit(1); }

/** Everything under a heading, up to the next known heading. */
function field(block, heading, next) {
  const pattern = new RegExp(`${heading}\\s*\\n+([\\s\\S]*?)(?=\\n(?:${next.join("|")})\\s*\\n|$)`);
  return clean(block.match(pattern)?.[1] ?? "");
}

/**
 * The book's shared reference list. These questions carry no per-question
 * citation - the answer key cites an exam domain, which is a blueprint
 * reference, not a source - so every one is flagged for citation review and
 * carries the book's own suggested references instead of a fabricated one.
 */
function bookReferences() {
  const file = path.join(chaptersRoot, "14-suggested-educational-references.md");
  if (!exists(file)) return [];
  return fs.readFileSync(file, "utf8").split("\n")
    .map((line) => line.trim().replace(/^[-*]\s+/, "").replace(/^\*\*|\*\*$/g, ""))
    .filter((line) => line && !line.startsWith("#") && line.length > 12)
    .map((line) => {
      const url = line.match(/https?:\/\/\S+/)?.[0]?.replace(/[.,;]+$/, "");
      const label = clean(line.replace(/https?:\/\/\S+/, ""));
      return url ? { text: label || url, url } : { text: label };
    })
    .filter((reference) => reference.text)
    .slice(0, 12);
}

const parsed = new Map();     // "S1-Q001" -> { stem, options }
const answers = new Map();    // "S1-Q001" -> { letter, whyCorrect, clue, eli10, domain }

for (const file of fs.readdirSync(chaptersRoot).filter((name) => /section-\d+-questions\.md$/.test(name)).sort()) {
  const text = fs.readFileSync(path.join(chaptersRoot, file), "utf8");
  // The answer key starts at "Section N Answers"; everything before it is the
  // question list. Splitting first keeps the two halves from being confused,
  // because both repeat the same S1-Q001 identifiers.
  const split = text.search(/Section\s+\d+\s+Answers/i);
  const questionHalf = split > 0 ? text.slice(0, split) : text;
  const answerHalf = split > 0 ? text.slice(split) : "";

  for (const match of questionHalf.matchAll(/^(S\d+-Q\d+)\s*\n([\s\S]*?)(?=^S\d+-Q\d+\s*\n|\Z)/gm)) {
    const key = match[1];
    const body = match[2];
    const options = [...body.matchAll(/^\*\*([A-D])\.\*\*\s*(.+)$/gm)].map((option) => ({ id: option[1], text: clean(option[2]) }));
    if (options.length !== 4) continue;
    const stem = clean(body.slice(0, body.search(/^\*\*[A-D]\.\*\*/m)));
    if (!stem) continue;
    parsed.set(key, { stem, options, raw: clean(match[0]) });
  }

  for (const match of answerHalf.matchAll(/^(S\d+-Q\d+)\s*\n([\s\S]*?)(?=^S\d+-Q\d+\s*\n|\Z)/gm)) {
    const key = match[1];
    const body = match[2];
    const NEXT = ["Correct Answer", "Why This Is Correct", "Clue in the Question", "ELI-10 Explanation", "Domain \\d+"];
    const correct = field(body, "Correct Answer", NEXT);
    const letter = correct.match(/^\*{0,2}([A-D])\.?/)?.[1];
    if (!letter) continue;
    answers.set(key, {
      letter,
      raw: clean(match[0]),
      domain: clean(body.match(/^(Domain \d+:.*)$/m)?.[1] ?? ""),
      whyCorrect: field(body, "Why This Is Correct", NEXT),
      clue: field(body, "Clue in the Question", NEXT),
      eli10: field(body, "ELI-10 Explanation", NEXT),
    });
  }
}

// ---------------------------------------------------------------------------

const bankPath = path.join(sourceSubjectsRoot, SUBJECT_SLUG, "questions.json");
const bank = readJson(bankPath);
// Drop a previous run of this batch BEFORE reading what is already published.
// Read first and the batch's own output counts as pre-existing, so a re-run
// skips all 494 as duplicates and then deletes them - which is exactly what
// happened the first time this ran.
bank.subjectWideQuestions = (bank.subjectWideQuestions ?? []).filter((question) => question.provenance?.importBatch !== IMPORT_BATCH);
const existingStems = new Set([...(bank.questions ?? []), ...bank.subjectWideQuestions].map((question) => normalise(question.stem)));

const references = bookReferences();
const report = { parsedStems: parsed.size, parsedAnswers: answers.size, published: 0, missingAnswer: 0, duplicates: 0, missingRationale: 0 };
const added = [];

for (const [key, question] of parsed) {
  const answer = answers.get(key);
  if (!answer) { report.missingAnswer += 1; continue; }
  if (!answer.whyCorrect) { report.missingRationale += 1; continue; }
  if (existingStems.has(normalise(question.stem))) { report.duplicates += 1; continue; }
  existingStems.add(normalise(question.stem));

  const whyCorrect = [answer.whyCorrect, answer.clue ? `**Clue in the question.** ${answer.clue}` : "", answer.domain]
    .filter(Boolean).join("\n\n");

  added.push({
    id: `rpsgt500-${key.toLowerCase()}`,
    stem: question.stem,
    options: question.options,
    correctAnswer: answer.letter,
    rationales: { whyCorrect, eli10: answer.eli10 || "" },
    mappingScope: "subject-wide-overlay",
    mappedCanonicalTopicIds: [],
    // No per-question citation exists in the source, so this says so rather
    // than implying one: the site flags these during practice.
    citationReviewRequired: true,
    references,
    sourceSnapshotMarkdown: `${question.raw}\n\n---\n\n${answer.raw}`.slice(0, 40000),
    provenance: {
      sourceCollection: COLLECTION,
      sourceFile: "kindle-book-library/books/manuscripts/rpsgt-500-questions/chapters",
      sourceQuestionId: key,
      importedWithoutRewriting: true,
      importBatch: IMPORT_BATCH,
    },
  });
  report.published += 1;
}

bank.subjectWideQuestions.push(...added);
writeJson(bankPath, bank);
writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "questions.json"), {
  ...bank,
  questions: (bank.questions ?? []).map(({ sourceSnapshotMarkdown, ...rest }) => rest),
  subjectWideQuestions: bank.subjectWideQuestions.map(({ sourceSnapshotMarkdown, ...rest }) => rest),
});

// ---------------------------------------------------------------------------
// Recompute the subject, then the catalogue.
// ---------------------------------------------------------------------------

const subjectPath = path.join(sourceSubjectsRoot, SUBJECT_SLUG, "subject.json");
const subject = readJson(subjectPath);
const exact = bank.questions ?? [];
const all = [...exact, ...bank.subjectWideQuestions];
subject.statistics = {
  ...subject.statistics,
  exactOrMappedQuestionCount: exact.length,
  subjectWideQuestionCount: bank.subjectWideQuestions.length,
  uniqueQuestionCount: all.length,
  citationReviewRequiredCount: all.filter((question) => question.citationReviewRequired).length,
};
writeJson(subjectPath, subject);
writeJson(path.join(clientSubjectsRoot, SUBJECT_SLUG, "subject.json"), subject);

const catalog = readJson(path.join(contentRoot, "catalog.json"));
const totals = { subjects: 0, units: 0, topics: 0, teachingTopics: 0, eli10Topics: 0, referencedTopics: 0, uniqueQuestionsAcrossCatalog: 0, questionPlacements: 0 };
const globalIds = new Set();
for (const summary of catalog.subjects) {
  const bundle = readJson(path.join(sourceSubjectsRoot, summary.slug, "subject.json"));
  const subjectBank = readJson(path.join(sourceSubjectsRoot, summary.slug, "questions.json"));
  summary.statistics = bundle.statistics;
  totals.subjects += 1;
  totals.units += bundle.statistics.unitCount;
  totals.topics += bundle.statistics.topicCount;
  totals.teachingTopics += bundle.statistics.teachingTopicCount;
  totals.eli10Topics += bundle.statistics.eli10TopicCount;
  totals.referencedTopics += bundle.statistics.referencedTopicCount;
  totals.questionPlacements += bundle.statistics.uniqueQuestionCount;
  for (const question of [...(subjectBank.questions ?? []), ...(subjectBank.subjectWideQuestions ?? [])]) globalIds.add(question.id);
}
totals.uniqueQuestionsAcrossCatalog = globalIds.size;
catalog.totals = totals;
catalog.generatedOn = new Date().toISOString().slice(0, 10);
writeJson(path.join(contentRoot, "catalog.json"), catalog);
writeJson(path.join(contentRoot, "client", "catalog.json"), catalog);
const buildReport = readJson(path.join(contentRoot, "build-report.json"));
writeJson(path.join(contentRoot, "build-report.json"), { ...buildReport, generatedOn: catalog.generatedOn, totals });
writeJson(path.join(webRoot, "audit", "rpsgt-500-import.json"), { batch: IMPORT_BATCH, generatedOn: catalog.generatedOn, report });

console.log("RPSGT 500 IMPORT");
console.log(`  question blocks parsed: ${report.parsedStems}`);
console.log(`  answer blocks parsed:   ${report.parsedAnswers}`);
console.log(`  published:              ${report.published}`);
console.log(`  skipped, already live:  ${report.duplicates}`);
console.log(`  skipped, no answer:     ${report.missingAnswer}`);
console.log(`  skipped, no rationale:  ${report.missingRationale}`);
console.log(`  sleep-technology bank:  ${all.length} questions`);
console.log(`  catalogue totals:       ${JSON.stringify(totals)}`);
