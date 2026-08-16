#!/usr/bin/env node
/**
 * Extracts the question banks embedded in the Kindle book manuscripts into the
 * site's question schema, and stages them under `audit/book-question-banks/`.
 *
 * These are NOT written into `content-v2`, and nothing here reaches the site,
 * because 24 of the manuscripts are published on Amazon KDP. Publishing their
 * full text free breaches KDP Select exclusivity where a title is enrolled —
 * a contractual problem, not a stylistic one. Confirm enrolment per title
 * first; `audit/book-question-banks/README.md` records how to promote a bank
 * once that check is done.
 *
 * Every stem, option, rationale and ELI-10 is copied verbatim.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gvmRoot = path.resolve(webRoot, "../../../..");
const booksRoot = path.join(gvmRoot, "Apps/ANON/kindle/kindle-book-library/books/manuscripts");
const outputRoot = path.join(webRoot, "audit", "book-question-banks");

const clean = (value = "") => String(value).replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
const portable = (absolute) => path.relative(gvmRoot, absolute).split(path.sep).join("/");
const readText = (filePath) => fs.readFileSync(filePath, "utf8");
const chapterFiles = (book) => {
  const directory = path.join(booksRoot, book, "chapters");
  return fs.existsSync(directory) ? fs.readdirSync(directory).sort().map((name) => path.join(directory, name)) : [];
};
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};

/** Splits a body of text into `Q<n>.` / `S<n>-Q<nnn>` addressed blocks. */
const blocksBy = (text, pattern) => {
  const matches = [...text.matchAll(pattern)];
  return matches.map((match, index) => ({
    key: match[1],
    body: text.slice(match.index + match[0].length, matches[index + 1]?.index ?? text.length),
  }));
};

// ---------------------------------------------------------------------------
// NCLEX volumes: questions and answers live in separate chapters, addressed
// "Q1.", "Q2.", ... within each section.
// ---------------------------------------------------------------------------

function extractNclex(book) {
  const questionsByKey = new Map();
  const answersByKey = new Map();
  for (const file of chapterFiles(book)) {
    const name = path.basename(file);
    const text = readText(file);
    // Chapter file names are truncated inconsistently ("...-questi.md",
    // "...-quest.md", "...-medicat.md"), so classify by the two markers that
    // are stable across every volume instead of by the word "questions".
    if (/answer-key/.test(name)) continue;
    const isAnswers = /answers-and-eli/.test(name);
    // Three markers are in use across the five volumes: "Q1.",
    // "**Question 1**", and "**Question 1 - Answer: B**" (answer chapters put
    // the letter on the heading line). Normalise to "Q<n>." and keep whatever
    // followed on the line, so the answer letter survives the split.
    const normalised = text.replace(/^\*{0,2}Question\s+(\d+)\b\*{0,2}(.*)$/gm, "Q$1.$2");
    const isQuestions = !isAnswers && (normalised.match(/^Q\d+\.\s/gm)?.length ?? 0) >= 2;
    if (!isQuestions && !isAnswers) continue;
    const section = name.match(/section-(\d+)/)?.[1] ?? "0";
    for (const { key, body } of blocksBy(normalised, /^Q(\d+)\.\s*/gm)) {
      const id = `${section}-${key}`;
      if (isQuestions) questionsByKey.set(id, { body, sourceFile: portable(file) });
      else answersByKey.set(id, { body, sourceFile: portable(file) });
    }
  }

  const questions = [];
  const rejected = [];
  for (const [id, { body, sourceFile }] of questionsByKey) {
    const answer = answersByKey.get(id);
    if (!answer) { rejected.push({ id, reason: "no matching answer block" }); continue; }
    const optionMatches = [...body.matchAll(/^\*{0,2}([A-D])[.)]\*{0,2}\s+(.+)$/gm)];
    if (optionMatches.length < 2) { rejected.push({ id, reason: "fewer than two options" }); continue; }
    const correct = answer.body.match(/(?:Correct answer|Answer):?\s*\*{0,2}([A-D])\b/i)?.[1];
    if (!correct) { rejected.push({ id, reason: "no correct answer recorded" }); continue; }
    const stem = clean(body.slice(0, optionMatches[0].index));
    const whyCorrect = clean(answer.body.match(/Rationale:?\*{0,2}\s*([\s\S]*?)(?=\n\*{0,2}ELI EXPLAINS|$)/i)?.[1] ?? "");
    const eli10 = clean(answer.body.match(/ELI EXPLAINS:?\*{0,2}\s*([\s\S]*)$/i)?.[1] ?? "");
    if (!stem || !whyCorrect || !eli10) { rejected.push({ id, reason: "missing stem, rationale or ELI-10" }); continue; }
    questions.push({
      id: `${book}-s${id}`,
      stem,
      options: optionMatches.map((match) => ({ id: match[1], text: clean(match[2]) })),
      correctAnswer: correct,
      rationales: { whyCorrect, eli10 },
      difficulty: "unknown",
      tags: ["nclex", book],
      references: [],
      computation: null,
      citationReviewRequired: true,
      provenance: {
        sourceCollection: "kindle-book-library",
        sourceBook: book,
        sourceFile,
        answerSourceFile: answer.sourceFile,
        kdpStatus: "published",
        importedWithoutRewriting: true,
      },
    });
  }
  return { questions, rejected };
}

// ---------------------------------------------------------------------------
// RPSGT 500: questions and their answers share a chapter, addressed
// "S1-Q001"; the answer half repeats the same key after an "Answers and
// ELI-10 Explanations" divider. This is the richest rationale format in the
// whole library — it also carries "Clue in the Question", "Exam Trap" and
// "Memory Anchor", which have no equivalent field on the site today.
// ---------------------------------------------------------------------------

function extractRpsgt500(book) {
  const questions = [];
  const rejected = [];
  for (const file of chapterFiles(book).filter((name) => /section-\d+-questions/.test(path.basename(name)))) {
    const text = readText(file);
    const divider = text.search(/Answers and ELI-10 Explanations/i);
    if (divider < 0) continue;
    const askedBlocks = new Map(blocksBy(text.slice(0, divider), /^(S\d+-Q\d+)\s*$/gm).map((item) => [item.key, item.body]));
    const answerBlocks = new Map(blocksBy(text.slice(divider), /^(S\d+-Q\d+)\s*$/gm).map((item) => [item.key, item.body]));
    const sourceFile = portable(file);
    for (const [key, body] of askedBlocks) {
      const answer = answerBlocks.get(key);
      if (!answer) { rejected.push({ id: key, reason: "no matching answer block" }); continue; }
      const optionMatches = [...body.matchAll(/^\*\*([A-D])\.\*\*\s+(.+)$/gm)];
      if (optionMatches.length < 2) { rejected.push({ id: key, reason: "fewer than two options" }); continue; }
      const correct = answer.match(/Correct Answer\s*\n+\s*([A-D])\./i)?.[1];
      if (!correct) { rejected.push({ id: key, reason: "no correct answer recorded" }); continue; }
      const section = (heading, next) => clean(
        answer.match(new RegExp(`${heading}\\s*\\n+([\\s\\S]*?)(?=\\n(?:${next})\\s*\\n|$)`, "i"))?.[1] ?? "",
      );
      const headings = "Correct Answer|Domain \\d|Why This Is Correct|Clue in the Question|ELI-10 Explanation|Why the Other Choices Are Wrong|Exam Trap|Memory Anchor|S\\d+-Q\\d+";
      const whyCorrect = section("Why This Is Correct", headings);
      const eli10 = section("ELI-10 Explanation", headings);
      const stem = clean(body.slice(0, optionMatches[0].index));
      if (!stem || !whyCorrect || !eli10) { rejected.push({ id: key, reason: "missing stem, rationale or ELI-10" }); continue; }
      const distractorAnalysis = section("Why the Other Choices Are Wrong", headings);
      const clue = section("Clue in the Question", headings);
      const examTrap = section("Exam Trap", headings);
      const memoryAnchor = section("Memory Anchor", headings);
      questions.push({
        id: `${book}-${key.toLowerCase()}`,
        stem,
        options: optionMatches.map((match) => ({ id: match[1], text: clean(match[2]) })),
        correctAnswer: correct,
        rationales: {
          whyCorrect,
          eli10,
          ...(distractorAnalysis ? { distractorAnalysis } : {}),
          ...(clue ? { clueInTheQuestion: clue } : {}),
          ...(examTrap ? { examTrap } : {}),
          ...(memoryAnchor ? { memoryAnchor } : {}),
        },
        difficulty: "unknown",
        tags: ["rpsgt", "sleep-technology"],
        references: [],
        computation: null,
        citationReviewRequired: true,
        provenance: {
          sourceCollection: "kindle-book-library",
          sourceBook: book,
          sourceFile,
          kdpStatus: "published",
          importedWithoutRewriting: true,
        },
      });
    }
  }
  return { questions, rejected };
}

// ---------------------------------------------------------------------------

if (!fs.existsSync(booksRoot)) {
  console.log(`Kindle manuscripts not found at ${portable(booksRoot)} — nothing to extract.`);
  process.exit(0);
}

const NCLEX_BOOKS = fs.readdirSync(booksRoot).filter((name) => /^nclex-\d/.test(name)).sort();
const banks = [];
let total = 0;
const allRejected = [];

for (const book of NCLEX_BOOKS) {
  const { questions, rejected } = extractNclex(book);
  allRejected.push(...rejected.map((item) => ({ book, ...item })));
  if (!questions.length) continue;
  banks.push({ book, count: questions.length });
  total += questions.length;
  writeJson(path.join(outputRoot, `${book}.json`), {
    schemaVersion: "2.0.0",
    stagedOnly: true,
    reason: "Published on Amazon KDP — confirm KDP Select enrolment before publishing.",
    sourceBook: book,
    questionCount: questions.length,
    questions,
  });
}

if (fs.existsSync(path.join(booksRoot, "rpsgt-500-questions"))) {
  const { questions, rejected } = extractRpsgt500("rpsgt-500-questions");
  allRejected.push(...rejected.map((item) => ({ book: "rpsgt-500-questions", ...item })));
  if (questions.length) {
    banks.push({ book: "rpsgt-500-questions", count: questions.length });
    total += questions.length;
    writeJson(path.join(outputRoot, "rpsgt-500-questions.json"), {
      schemaVersion: "2.0.0",
      stagedOnly: true,
      reason: "Published on Amazon KDP — confirm KDP Select enrolment before publishing.",
      sourceBook: "rpsgt-500-questions",
      questionCount: questions.length,
      questions,
    });
  }
}

fs.mkdirSync(outputRoot, { recursive: true });
fs.writeFileSync(path.join(outputRoot, "README.md"), `# Staged book question banks

${total.toLocaleString("en-US")} questions extracted from the Kindle manuscripts, in the site's
question schema, **not published**.

| Bank | Questions |
|---|---:|
${banks.map((bank) => `| \`${bank.book}\` | ${bank.count.toLocaleString("en-US")} |`).join("\n")}
| **Total** | **${total.toLocaleString("en-US")}** |

## Why these are staged and not live

Every one of these books is live on Amazon KDP. Publishing its full text free
on the web undercuts the paid edition, and **breaches KDP Select exclusivity
where a title is enrolled** — that is a contract term, not a preference.

Nothing here is loaded by the site. \`content-v2\` does not reference this
directory, and the Vite globs that build the client bundle do not match it.

## To publish a bank

1. Check that specific title's KDP Select enrolment in KDP → Bookshelf →
   Promote and Advertise. If it is enrolled, either wait out the term or
   un-enrol before continuing.
2. Decide what to publish. Safe options in increasing order of exposure:
   questions only (this data), questions plus rationales, or the full chapters.
3. Move the bank into a subject under \`content-v2/subjects/\` and run
   \`node scripts/import-question-banks.mjs\` to rebuild the catalogue,
   then \`node scripts/update-manifest\`.

## Format note

\`rpsgt-500-questions\` carries three rationale fields the site has no home for
yet — \`clueInTheQuestion\`, \`examTrap\` and \`memoryAnchor\`. They are preserved
in the staged JSON. Rendering them would need a small addition to
\`RichQuestionPractice\`; they are the most memorable part of that book's format.
`);

writeJson(path.join(outputRoot, "extraction-report.json"), { total, banks, rejected: allRejected });

console.log(`Staged ${total} book questions (NOT published) under audit/book-question-banks/`);
for (const bank of banks) console.log(`  ${bank.book}: ${bank.count}`);
if (allRejected.length) console.log(`Could not extract ${allRejected.length} question(s); see extraction-report.json`);
