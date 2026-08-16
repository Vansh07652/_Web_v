#!/usr/bin/env node
/**
 * Imports every finished-but-unpublished question bank in the GITHUB_VM tree
 * into the canonical `content-v2` catalogue.
 *
 * Two shapes of work:
 *   1. New question-led subjects (Respiratory Therapy, Sleep Technology). These
 *      follow the existing "shell course" pattern already used by the twelve
 *      expansion-bank subjects: real questions, real references, real ELI-10,
 *      and honestly-empty teaching-note sections until notes are written.
 *   2. Top-ups for subjects that already exist. Questions are mapped to a
 *      canonical topic when the source title matches confidently, and fall back
 *      to the established subject-wide overlay when it does not.
 *
 * The script is idempotent. Every question it writes carries
 * `provenance.importBatch`; a re-run strips that batch first and rebuilds, so
 * running it twice produces the same tree as running it once.
 *
 * No source text is paraphrased, summarised or invented. Every stem, option,
 * rationale, ELI-10 and reference is copied verbatim from the source file
 * recorded in `provenance.sourceFile`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gvmRoot = path.resolve(webRoot, "../../../..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");

export const IMPORT_BATCH = "2026-08-14-unpublished-banks";
/** Subjects this script owns end to end. Everything else it only tops up. */
const GENERATED_SUBJECT_SLUGS = ["respiratory-therapy", "sleep-technology"];

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const exists = (filePath) => fs.existsSync(filePath);
const gvm = (...parts) => path.join(gvmRoot, ...parts);
const portable = (absolutePath) => path.relative(gvmRoot, absolutePath).split(path.sep).join("/");
const readText = (filePath) => fs.readFileSync(filePath, "utf8");
/** Absolute paths of every file under a directory, or [] when it does not exist. */
const listFiles = (directory) => (exists(directory)
  ? fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => (entry.isDirectory()
    ? listFiles(path.join(directory, entry.name))
    : [path.resolve(directory, entry.name)]))
  : []);
/** Files a previous run wrote that this run no longer produces. */
const leftovers = [];
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/**
 * Some source markdown files still contain the generation transcript that
 * produced them — self-corrections ("Wait — that is option A"), instructions to
 * a tool, or half-written tool-call markup. Anything carrying these markers is a
 * draft, not finished content, and must never reach a student.
 */
const CONTAMINATION_MARKERS = [
  // Leaked tool-call or chat markup. These cannot occur in prose.
  /<\s*[|｜]{1,2}\s*(?:DSML|tool_calls)/i,
  /[|｜]{1,2}\s*end.?of.?thinking/i,
  /<(?:antml:)?invoke\s+name=/i,
  /<(?:antml:)?parameter\s+name=/i,
  // Self-correction addressed at the question itself rather than at the reader.
  // Deliberately narrow: "Let me fix the form" is legitimate quoted speech
  // inside a rationale, so a bare "let me fix" must not trigger a rejection.
  /\bthe question should (?:say|read|be)\b/i,
  /\bbut the options say\b/i,
  /\blet me (?:just )?(?:change|fix|rewrite) the (?:question|answer|option|stem)\b/i,
  /\bwait\s*[—-]\s*\(?\d/i,
];
const isContaminated = (...values) => {
  const haystack = values.filter(Boolean).join("\n");
  return CONTAMINATION_MARKERS.some((marker) => marker.test(haystack));
};

/**
 * Extracts the body of a `### Heading` block.
 *
 * Deliberately built without the `m` flag: with it, `$` in the terminating
 * lookahead matches every end-of-line, so a lazy capture stops after the first
 * line — silently truncating every rationale, and dropping it entirely when the
 * heading is followed by a blank line.
 */
const headingSection = (markdown, heading) => {
  const pattern = new RegExp(
    `(?:^|\\n)###\\s+${heading}[^\\n]*\\n+([\\s\\S]*?)(?=\\n###\\s|\\n---|$)`,
  );
  return clean(markdown.match(pattern)?.[1] ?? "");
};

/** Same hazard, same fix, for the `**Label:**` inline fields the study hubs use. */
const inlineField = (markdown, label) => {
  const pattern = new RegExp(`(?:^|\\n)>?\\s*\\*\\*${label}:?\\*\\*:?\\s*([\\s\\S]*?)(?=\\n\\s*\\n|$)`);
  return clean(markdown.match(pattern)?.[1] ?? "");
};

const DIFFICULTIES = new Set(["foundational", "intermediate", "advanced", "unknown"]);
const normaliseDifficulty = (value) => {
  const lowered = clean(value).toLowerCase();
  return DIFFICULTIES.has(lowered) ? lowered : "unknown";
};

/** A reference is only publishable if it carries text; the URL is optional. */
const toReference = (text, url) => {
  const label = clean(text);
  if (!label) return null;
  const href = clean(url);
  return /^https?:\/\/\S+$/i.test(href) ? { text: label, url: href } : { text: label };
};

// ---------------------------------------------------------------------------
// Topic matching
// ---------------------------------------------------------------------------

const STOP_WORDS = new Set([
  "and", "the", "of", "for", "in", "to", "a", "an", "with", "on", "or", "its",
  "into", "from", "at", "by", "as", "is", "are", "basic", "basics", "foundations",
  "foundation", "introduction", "intro", "overview", "concepts", "concept", "i", "ii",
]);
const tokens = (value) => new Set(
  slugify(value).split("-").filter((token) => token && !STOP_WORDS.has(token)),
);

/**
 * Scores a source topic title against a canonical topic. Returns the fraction of
 * the source's meaningful tokens that the canonical topic also uses, so a short
 * precise title cannot be beaten by a long one that merely contains it.
 */
const matchScore = (sourceTitle, canonicalTitle, aliases = []) => {
  const source = tokens(sourceTitle);
  if (!source.size) return 0;
  let best = 0;
  for (const candidate of [canonicalTitle, ...aliases]) {
    const target = tokens(candidate);
    if (!target.size) continue;
    let hits = 0;
    for (const token of source) if (target.has(token)) hits += 1;
    const coverage = hits / source.size;
    const precision = hits / target.size;
    best = Math.max(best, (coverage * 2 + precision) / 3);
  }
  return best;
};

const MATCH_THRESHOLD = 0.62;

/** Flattens a subject bundle into the candidate list used for topic matching. */
const candidatesFor = (subject) => (subject.units ?? []).flatMap((unit) =>
  (unit.topics ?? []).map((topic) => ({
    id: topic.id,
    title: topic.title,
    aliases: (topic.aliases ?? []).map((alias) => alias.value).filter((value) => typeof value === "string"),
  })),
);

const bestTopicMatch = (sourceTitle, candidateSets) => {
  let winner = null;
  for (const { slug, candidates } of candidateSets) {
    for (const candidate of candidates) {
      const score = matchScore(sourceTitle, candidate.title, candidate.aliases);
      if (!winner || score > winner.score) winner = { score, subjectSlug: slug, topicId: candidate.id };
    }
  }
  return winner && winner.score >= MATCH_THRESHOLD ? winner : null;
};

// ---------------------------------------------------------------------------
// Source readers
// ---------------------------------------------------------------------------

/**
 * Respiratory Therapy question bank.
 * `data/<section>/<topic>.json`, each holding a full topic bank with verified
 * per-question source IDs resolving against the bank's own source registry.
 */
const RT_ROOT = "Education/respiratory-therapy-question-bank";
/** Unit names are taken verbatim from the bank's own PROGRESS.md curriculum map. */
const RT_UNITS = [
  { key: "01-01", slug: "anatomy-and-physiology", title: "Anatomy & Physiology" },
  { key: "01-02", slug: "microbiology", title: "Microbiology" },
  { key: "01-03", slug: "respiratory-physics", title: "Physics" },
  { key: "01-04", slug: "chemistry", title: "Chemistry" },
  { key: "01-05", slug: "medical-terminology", title: "Medical Terminology" },
  { key: "02-01", slug: "cardiopulmonary-anatomy-and-physiology", title: "Cardiopulmonary A&P" },
];

function readRespiratoryTherapy() {
  const dataRoot = gvm(RT_ROOT, "data");
  if (!exists(dataRoot)) return null;
  const banks = [];
  for (const section of fs.readdirSync(dataRoot).sort()) {
    const sectionDir = path.join(dataRoot, section);
    if (!fs.statSync(sectionDir).isDirectory()) continue;
    for (const file of fs.readdirSync(sectionDir).filter((name) => name.endsWith(".json")).sort()) {
      const filePath = path.join(sectionDir, file);
      const bank = readJson(filePath);
      if (!Array.isArray(bank.questions) || !bank.questions.length) continue;
      banks.push({ bank, sourceFile: portable(filePath) });
    }
  }
  if (!banks.length) return null;

  const units = new Map();
  for (const { bank, sourceFile } of banks) {
    // rt-01-01-01 -> unit key "01-01", topic ordinal "01"
    const parts = String(bank.topic_id).split("-");
    const unitKey = `${parts[1]}-${parts[2]}`;
    const definition = RT_UNITS.find((unit) => unit.key === unitKey);
    if (!definition) throw new Error(`Unmapped respiratory-therapy unit ${unitKey} (${bank.topic_id})`);
    if (!units.has(unitKey)) units.set(unitKey, { ...definition, topics: [] });

    const sourceById = new Map((bank.sources ?? []).map((source) => [source.source_id, source]));
    const referencesFor = (ids) => (ids ?? [])
      .map((id) => sourceById.get(id))
      .filter(Boolean)
      .map((source) => toReference(
        [source.organization_or_author, source.title].filter(Boolean).join(" — "),
        source.url,
      ))
      .filter(Boolean);
    const topicReferences = (bank.sources ?? [])
      .map((source) => toReference([source.organization_or_author, source.title].filter(Boolean).join(" — "), source.url))
      .filter(Boolean);

    const questions = bank.questions.map((question) => {
      const options = Object.entries(question.options ?? {}).map(([id, text]) => ({ id, text: clean(text) }));
      const whyIncorrect = question.explanation?.why_incorrect ?? {};
      const distractorAnalysis = Object.entries(whyIncorrect)
        .filter(([id]) => id !== question.correct_answer)
        .map(([id, text]) => `**${id}.** ${clean(text)}`)
        .join("\n\n");
      const references = referencesFor(question.source_ids);
      return {
        id: question.id,
        stem: clean(question.question),
        options,
        correctAnswer: question.correct_answer,
        rationales: {
          whyCorrect: clean(question.explanation?.why_correct),
          eli10: clean(question.eli_10),
          ...(distractorAnalysis ? { distractorAnalysis } : {}),
          ...(question.clinical_relevance ? { clinicalRelevance: clean(question.clinical_relevance) } : {}),
        },
        difficulty: normaliseDifficulty(question.difficulty),
        tags: ["respiratory-therapy", ...(question.tags ?? [])],
        references,
        computation: null,
        citationReviewRequired: references.length === 0,
        provenance: {
          sourceCollection: "respiratory-therapy-question-bank",
          sourceFile,
          sourceQuestionNumber: question.question_number,
          sourceId: question.id,
          lastVerified: question.last_verified ?? null,
          importedWithoutRewriting: true,
        },
        sourceSnapshotMarkdown: JSON.stringify(question, null, 2),
      };
    });

    units.get(unitKey).topics.push({
      slug: bank.topic_slug || slugify(bank.topic_title),
      title: clean(bank.topic_title),
      learningObjectives: (bank.learning_objectives ?? []).map((item) => `- ${clean(item)}`).join("\n"),
      references: topicReferences,
      sourceFile,
      sourceSnapshotMarkdown: JSON.stringify({ ...bank, questions: undefined }, null, 2),
      aliases: [
        { value: bank.topic_id, kind: "source_topic_id", source_id: "respiratory_therapy_qb" },
        { value: bank.topic_slug, kind: "source_topic_slug", source_id: "respiratory_therapy_qb" },
      ],
      questions,
    });
  }

  return {
    slug: "respiratory-therapy",
    title: "Respiratory Therapy",
    category: "allied-health",
    aliases: [
      { value: "respiratory-therapy", kind: "canonical_slug" },
      { value: "rt", kind: "legacy_or_display_alias" },
      { value: "respiratory care", kind: "legacy_or_display_alias" },
      { value: "respiratory therapy", kind: "legacy_or_display_alias" },
    ],
    provenance: { sourceCollection: "respiratory-therapy-question-bank", sourceRoot: RT_ROOT },
    units: RT_UNITS.map((unit) => units.get(unit.key)).filter(Boolean),
  };
}

/**
 * Parses the RPSGT sleep-medicine library's `questions.md` format:
 *
 *   ## Question 1
 *   <stem>
 *   A. ... B. ... C. ... D. ...
 *   **Correct Answer:** C. <text>
 *   ### Why This Is Correct / ### Why the Other Choices Are Incorrect
 *   ### ELI-10 — Why This Is Correct / ### Concept Tested / ### Difficulty
 */
function parseRpsgtQuestions(markdown, topicId, sourceFile, rejected = []) {
  const blocks = markdown.split(/\n(?=##\s+Question\s+\d+)/).filter((block) => /^##\s+Question\s+\d+/m.test(block));
  const questions = [];
  for (const block of blocks) {
    const number = Number(block.match(/^##\s+Question\s+(\d+)/m)?.[1]);
    const body = block.replace(/^##\s+Question\s+\d+\s*/m, "");
    const optionMatches = [...body.matchAll(/^([A-E])\.\s+(.+)$/gm)];
    if (optionMatches.length < 2) continue;
    // One source file writes a literal "\n" before the answer line.
    const correct = body.match(/^(?:\\n)?\*\*Correct Answer:\*\*\s*([A-E])[.:]?\s*(.*)$/m);
    if (!correct) { rejected.push({ id: `${topicId}-q${number}`, reason: "no correct-answer line" }); continue; }
    const stem = clean(body.slice(0, optionMatches[0].index));
    const section = (heading) => headingSection(body, heading);
    const whyCorrect = section("Why This Is Correct");
    const eli10 = section("ELI-10");
    if (!stem || !whyCorrect || !eli10) { rejected.push({ id: `${topicId}-q${number}`, reason: "missing stem, rationale or ELI-10" }); continue; }
    if (isContaminated(stem, whyCorrect, eli10)) { rejected.push({ id: `${topicId}-q${number}`, reason: "draft/generation artefacts in source" }); continue; }
    questions.push({
      id: `${topicId.toLowerCase()}-q${String(number).padStart(3, "0")}`,
      stem,
      options: optionMatches.map((match) => ({ id: match[1], text: clean(match[2]) })),
      correctAnswer: correct[1],
      rationales: {
        whyCorrect,
        eli10,
        ...(section("Why the Other Choices Are Incorrect") ? { distractorAnalysis: section("Why the Other Choices Are Incorrect") } : {}),
      },
      difficulty: normaliseDifficulty(section("Difficulty")),
      tags: ["sleep-technology", ...(section("Concept Tested") ? [slugify(section("Concept Tested")).slice(0, 60)] : [])],
      sourceFile,
      snapshot: clean(block),
    });
  }
  return questions;
}

const RPSGT_ROOT = "Education/RPSGT_SLEEP_MEDICINE_LIBRARY";
const RPSGT_DOMAIN_TITLES = {
  "01_clinical_patient_support": "Clinical and Patient Support",
  "02_study_preparation_performance": "Study Preparation and Performance",
  "03_scoring_reporting": "Scoring and Reporting",
  "04_treatment_intervention": "Treatment and Intervention",
};

function readSleepTechnology(rejected = []) {
  const domainsRoot = gvm(RPSGT_ROOT, "domains");
  if (!exists(domainsRoot)) return null;
  const units = [];
  for (const domain of fs.readdirSync(domainsRoot).sort()) {
    const topicsRoot = path.join(domainsRoot, domain, "topics");
    if (!exists(topicsRoot)) continue;
    const topics = [];
    for (const topicDir of fs.readdirSync(topicsRoot).sort()) {
      const questionFile = path.join(topicsRoot, topicDir, "questions.md");
      if (!exists(questionFile)) continue;
      const [topicId, ...rest] = topicDir.split("_");
      const sourceFile = portable(questionFile);
      const parsed = parseRpsgtQuestions(readText(questionFile), topicId, sourceFile, rejected);
      if (!parsed.length) continue;

      const sourcesFile = path.join(topicsRoot, topicDir, "sources.md");
      const references = exists(sourcesFile)
        ? [...readText(sourcesFile).matchAll(/^[-*]\s+(.+?)(?:\s*[—-]\s*)?(https?:\/\/\S+)?\s*$/gm)]
            .map((match) => toReference(match[1].replace(/\*\*/g, ""), match[2]))
            .filter(Boolean)
            .slice(0, 12)
        : [];

      topics.push({
        slug: slugify(rest.join("-")),
        title: rest.join("-").replace(/-/g, " ").replace(/\b\w/g, (character) => character.toUpperCase()),
        learningObjectives: "",
        references,
        sourceFile,
        sourceSnapshotMarkdown: clean(readText(questionFile)).slice(0, 20000),
        aliases: [{ value: topicId, kind: "source_topic_id", source_id: "rpsgt_library" }],
        questions: parsed.map((question) => ({
          id: question.id,
          stem: question.stem,
          options: question.options,
          correctAnswer: question.correctAnswer,
          rationales: question.rationales,
          difficulty: question.difficulty,
          tags: question.tags,
          references,
          computation: null,
          citationReviewRequired: references.length === 0,
          provenance: {
            sourceCollection: "rpsgt-sleep-medicine-library",
            sourceFile: question.sourceFile,
            sourceId: question.id,
            importedWithoutRewriting: true,
          },
          sourceSnapshotMarkdown: question.snapshot,
        })),
      });
    }
    if (topics.length) {
      units.push({ slug: slugify(RPSGT_DOMAIN_TITLES[domain] ?? domain), title: RPSGT_DOMAIN_TITLES[domain] ?? domain, topics });
    }
  }
  if (!units.length) return null;
  return {
    slug: "sleep-technology",
    title: "Sleep Technology (RPSGT)",
    category: "allied-health",
    aliases: [
      { value: "sleep-technology", kind: "canonical_slug" },
      { value: "rpsgt", kind: "legacy_or_display_alias" },
      { value: "polysomnography", kind: "legacy_or_display_alias" },
      { value: "sleep medicine", kind: "legacy_or_display_alias" },
    ],
    provenance: { sourceCollection: "rpsgt-sleep-medicine-library", sourceRoot: RPSGT_ROOT },
    units,
  };
}

/**
 * Parses the shared study-hub quiz markdown used by both
 * `chemistry-study-hub` and `developmental-psychology-study-hub`:
 *
 *   ### Q01-01 <label>
 *   <stem>
 *   - **A.** ...
 *   **Correct Answer:** **C.** <text>
 *   **Why This Is Correct:** ...
 *   > **High-Yield:** ...
 *   **ELI-10:** ...
 */
function parseStudyHubQuiz(markdown, sourceFile, idPrefix, tag, rejected = []) {
  const blocks = markdown.split(/\n(?=###\s+Q)/).filter((block) => /^###\s+Q/.test(block.trim()));
  const questions = [];
  for (const block of blocks) {
    const reference = block.match(/^###\s+(Q[\w-]+)/)?.[1];
    if (!reference) continue;
    const note = (reason) => rejected.push({ id: `${sourceFile}#${reference}`, reason });
    const optionMatches = [...block.matchAll(/^[-*]\s+\*\*([A-E])\.\*\*\s+(.+)$/gm)];
    if (optionMatches.length < 2) { note("fewer than two options"); continue; }
    const correct = block.match(/^\*\*Correct Answer:\*\*\s*\*\*([A-E])\.\*\*/m);
    if (!correct) { note("no correct-answer line"); continue; }
    const headingEnd = block.indexOf("\n");
    const stem = clean(block.slice(headingEnd, optionMatches[0].index));
    const field = (label) => inlineField(block, label);
    const whyCorrect = field("Why This Is Correct");
    const eli10 = field("ELI-10");
    if (!stem || !whyCorrect || !eli10) { note("missing stem, rationale or ELI-10"); continue; }
    if (isContaminated(stem, whyCorrect, eli10, block)) { note("draft/generation artefacts in source"); continue; }
    const highYield = field("High-Yield");
    questions.push({
      id: `${idPrefix}-${reference.toLowerCase()}`,
      stem,
      options: optionMatches.map((match) => ({ id: match[1], text: clean(match[2]) })),
      correctAnswer: correct[1],
      rationales: { whyCorrect, eli10, ...(highYield ? { highYield } : {}) },
      difficulty: "unknown",
      tags: [tag],
      references: [],
      computation: null,
      citationReviewRequired: true,
      provenance: {
        sourceCollection: idPrefix.startsWith("chemhub") ? "chemistry-study-hub" : "developmental-psychology-study-hub",
        sourceFile,
        sourceId: reference,
        importedWithoutRewriting: true,
      },
      sourceSnapshotMarkdown: clean(block),
      sourceTopicTitle: clean(block.match(/^###\s+Q[\w-]+\s+(.*)$/m)?.[1] ?? ""),
    });
  }
  return questions;
}

/** Reads a directory of study-hub quiz files, tagging each with its file title. */
function readStudyHubDirectory(relativeDirectory, idPrefix, tag, rejected = []) {
  const directory = gvm(relativeDirectory);
  if (!exists(directory)) return [];
  const groups = [];
  for (const file of fs.readdirSync(directory).filter((name) => name.endsWith(".md")).sort()) {
    const filePath = path.join(directory, file);
    const markdown = readText(filePath);
    const title = clean(markdown.match(/^##\s+[\d.]*\s*(.+)$/m)?.[1] ?? file.replace(/^\d+-|\.md$/g, "").replace(/-/g, " "));
    const questions = parseStudyHubQuiz(markdown, portable(filePath), `${idPrefix}-${file.replace(/\.md$/, "")}`, tag, rejected);
    if (questions.length) groups.push({ title, questions });
  }
  return groups;
}

/** Reads the two expansion-bank subject folders that were never imported. */
function readExpansionFolder(folder, tag) {
  const directory = gvm("Education/pre-nursing-expansion-question-bank/questions", folder);
  if (!exists(directory)) return [];
  const groups = [];
  for (const file of fs.readdirSync(directory).filter((name) => name.endsWith(".json")).sort()) {
    const filePath = path.join(directory, file);
    const bank = readJson(filePath);
    const sourceFile = portable(filePath);
    const references = (bank.sources ?? [])
      .map((source) => toReference([source.organization, source.title].filter(Boolean).join(" — "), source.url))
      .filter(Boolean);
    const questions = (bank.questions ?? []).map((question) => {
      const options = Object.entries(question.choices ?? {}).map(([id, text]) => ({ id, text: clean(text) }));
      return {
        id: `expqb-${bank.topic_number}-q${String(question.question_number).padStart(2, "0")}`,
        stem: clean(question.question),
        options,
        correctAnswer: question.correct_answer_letter,
        rationales: { whyCorrect: clean(question.why_correct), eli10: clean(question.eli_explains) },
        difficulty: normaliseDifficulty(question.difficulty),
        tags: [tag, ...(question.concepts_tested ?? []).map((concept) => slugify(concept)).filter(Boolean)],
        references,
        computation: question.computation ?? null,
        citationReviewRequired: references.length === 0,
        provenance: {
          sourceCollection: "expansion-question-bank",
          sourceFile,
          sourceTopicId: bank.topic_id,
          sourceId: question.question_id,
          importedWithoutRewriting: true,
        },
        sourceSnapshotMarkdown: JSON.stringify(question, null, 2),
      };
    }).filter((question) => question.stem && question.options.length >= 2 && question.rationales.whyCorrect && question.rationales.eli10);
    if (questions.length) groups.push({ title: clean(bank.topic), questions });
  }
  return groups;
}

// ---------------------------------------------------------------------------
// Writers
// ---------------------------------------------------------------------------

const stripSnapshot = (record) => {
  const { sourceSnapshotMarkdown, ...rest } = record;
  return rest;
};

/**
 * Builds a question-led topic bundle. Teaching sections stay empty because no
 * teaching notes exist for these topics yet; ELI-10 is assembled verbatim from
 * the topic's own questions, exactly as the twelve existing expansion-bank
 * subjects already do.
 */
function buildTopicBundle(subject, unit, topic, order, questions) {
  const eli10 = questions
    .map((question, index) => `### Question ${index + 1}\n\n${question.rationales.eli10}`)
    .join("\n\n");
  const sections = {
    overview: "",
    whyItMatters: "",
    learningObjectives: topic.learningObjectives ?? "",
    keyTerms: "",
    collegeNotes: "",
    howItWorks: "",
    comparisons: "",
    highYield: "",
    commonConfusions: "",
    memoryAids: "",
    eli10,
    quickReview: "",
    workedExamples: "",
    references: topic.references ?? [],
  };
  const availability = {
    collegeNotes: Boolean(sections.collegeNotes.trim()),
    eli10: Boolean(sections.eli10.trim()),
    highYield: Boolean(sections.highYield.trim()),
    quickReview: Boolean(sections.quickReview.trim()),
    workedExamples: Boolean(sections.workedExamples.trim()),
    references: Boolean(sections.references.length),
    exactQuestions: questions.length,
  };
  const id = `topic:${subject.slug}:${unit.slug}:${topic.slug}`;
  return {
    bundle: {
      schemaVersion: "2.0.0",
      id,
      slug: topic.slug,
      title: topic.title,
      subject: { id: `subject:${subject.slug}`, slug: subject.slug, title: subject.title },
      unit: { id: `unit:${subject.slug}:${unit.slug}`, slug: unit.slug, title: unit.title, order: unit.order },
      order,
      status: "final",
      sections,
      availability,
      aliases: [{ value: topic.slug, kind: "canonical_slug" }, ...(topic.aliases ?? [])],
      authority: {
        questions: [{ source_file: topic.sourceFile }],
        answer_rationales: [{ source_file: topic.sourceFile }],
        eli10: [{ source_file: topic.sourceFile }],
      },
      provenance: {
        sourceCollection: subject.provenance.sourceCollection,
        sourceFile: topic.sourceFile,
        importedWithoutRewriting: true,
        teachingNoteAvailable: false,
        importBatch: IMPORT_BATCH,
      },
      sourceSnapshotMarkdown: topic.sourceSnapshotMarkdown,
    },
    availability,
    id,
  };
}

/** Writes a whole generated subject (bundle, topics, questions, client mirror). */
function writeGeneratedSubject(subject) {
  const sourceDirectory = path.join(sourceSubjectsRoot, subject.slug);
  const clientDirectory = path.join(clientSubjectsRoot, subject.slug);
  // Every file below is rewritten in place rather than removed first: the
  // workspace mount this runs on refuses unlink, and a delete-then-write cycle
  // would abort the whole import. Files that a previous run wrote and this one
  // no longer produces are reported as leftovers instead of being deleted.
  const before = listFiles(sourceDirectory).concat(listFiles(clientDirectory));
  const written = new Set();
  const record = (filePath, value) => { written.add(path.resolve(filePath)); writeJson(filePath, value); };

  const units = [];
  const questions = [];
  subject.units.forEach((unit, unitIndex) => {
    const unitRecord = {
      id: `unit:${subject.slug}:${unit.slug}`,
      slug: unit.slug,
      title: unit.title,
      order: unitIndex + 1,
      aliases: [{ value: unit.slug, kind: "canonical_slug" }],
      topics: [],
    };
    unit.topics.forEach((topic, topicIndex) => {
      const { bundle, availability, id } = buildTopicBundle(
        subject,
        { ...unit, order: unitIndex + 1 },
        topic,
        topicIndex + 1,
        topic.questions,
      );
      const bundlePath = `content-v2/subjects/${subject.slug}/topics/${unit.slug}/${topic.slug}.json`;
      record(path.join(webRoot, bundlePath), bundle);
      record(
        path.join(clientDirectory, "topics", unit.slug, `${topic.slug}.json`),
        { ...bundle, sourceSnapshotMarkdown: "" },
      );
      unitRecord.topics.push({
        id,
        slug: topic.slug,
        title: topic.title,
        order: topicIndex + 1,
        status: "final",
        bundlePath,
        mappedQuestionCount: topic.questions.length,
        availability,
      });
      for (const question of topic.questions) {
        questions.push({
          ...question,
          sourceCollection: subject.provenance.sourceCollection,
          sourceTopicId: topic.aliases?.[0]?.value ?? topic.slug,
          mappedCanonicalTopicIds: [id],
          mappingScope: "exact",
          provenance: { ...question.provenance, importBatch: IMPORT_BATCH },
        });
      }
    });
    units.push(unitRecord);
  });

  const bank = { schemaVersion: "2.0.0", subjectSlug: subject.slug, questions, subjectWideQuestions: [], deferred: [] };
  record(path.join(sourceDirectory, "questions.json"), bank);
  record(path.join(clientDirectory, "questions.json"), {
    ...bank,
    questions: questions.map(stripSnapshot),
  });

  const bundle = {
    schemaVersion: "2.0.0",
    subject: {
      id: `subject:${subject.slug}`,
      slug: subject.slug,
      title: subject.title,
      aliases: subject.aliases,
      status: "final",
      category: subject.category,
    },
    units,
    statistics: {},
    provenance: { ...subject.provenance, importBatch: IMPORT_BATCH, importedWithoutRewriting: true },
  };
  record(path.join(sourceDirectory, "subject.json"), bundle);
  // recomputeSubject() writes the client subject bundle immediately after this
  // function returns, so it is expected-but-not-yet-written, not stale.
  written.add(path.resolve(path.join(clientDirectory, "subject.json")));
  for (const stale of before) {
    if (!written.has(stale)) leftovers.push(path.relative(webRoot, stale));
  }
  return bundle;
}

/** Recomputes every derived statistic on a subject bundle from its own bank. */
function recomputeSubject(slug) {
  const sourceDirectory = path.join(sourceSubjectsRoot, slug);
  const clientDirectory = path.join(clientSubjectsRoot, slug);
  const bundle = readJson(path.join(sourceDirectory, "subject.json"));
  const bank = readJson(path.join(sourceDirectory, "questions.json"));
  const exact = bank.questions ?? [];
  const subjectWide = bank.subjectWideQuestions ?? [];
  const all = [...exact, ...subjectWide];

  let teaching = 0;
  let eli10 = 0;
  let highYield = 0;
  let referenced = 0;
  let topicCount = 0;
  for (const unit of bundle.units ?? []) {
    for (const topic of unit.topics ?? []) {
      topicCount += 1;
      const mapped = exact.filter((question) => question.mappedCanonicalTopicIds?.includes(topic.id)).length;
      topic.mappedQuestionCount = mapped;
      const bundlePath = path.join(webRoot, topic.bundlePath);
      const topicBundle = readJson(bundlePath);
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
      writeJson(bundlePath, topicBundle);
      const clientPath = path.join(clientDirectory, "topics", unit.slug, `${topic.slug}.json`);
      if (exists(clientPath)) {
        const clientBundle = readJson(clientPath);
        clientBundle.availability = availability;
        clientBundle.sections = topicBundle.sections;
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
    subjectWideQuestionCount: subjectWide.length,
    uniqueQuestionCount: all.length,
    citationReviewRequiredCount: all.filter((question) => question.citationReviewRequired).length,
  };
  writeJson(path.join(sourceDirectory, "subject.json"), bundle);
  writeJson(path.join(clientDirectory, "subject.json"), bundle);
  writeJson(path.join(clientDirectory, "questions.json"), {
    schemaVersion: "2.0.0",
    subjectSlug: slug,
    questions: exact.map(stripSnapshot),
    subjectWideQuestions: subjectWide.map(stripSnapshot),
    deferred: (bank.deferred ?? []).map(stripSnapshot),
  });
  return bundle;
}

/** Appends imported questions to an existing subject's bank, idempotently. */
function topUpSubject(slug, incoming) {
  const bankPath = path.join(sourceSubjectsRoot, slug, "questions.json");
  const bank = readJson(bankPath);
  const notThisBatch = (question) => question.provenance?.importBatch !== IMPORT_BATCH;
  bank.questions = (bank.questions ?? []).filter(notThisBatch);
  bank.subjectWideQuestions = (bank.subjectWideQuestions ?? []).filter(notThisBatch);
  for (const question of incoming) {
    if (question.mappingScope === "exact") bank.questions.push(question);
    else bank.subjectWideQuestions.push(question);
  }
  writeJson(bankPath, bank);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const report = { generated: [], toppedUp: {}, skipped: [] };
/** Every question the import refused to publish, with the reason why. */
const rejected = [];

// 1. Generated subjects.
const generated = [readRespiratoryTherapy(), readSleepTechnology(rejected)].filter(Boolean);
for (const subject of generated) {
  writeGeneratedSubject(subject);
  const bundle = recomputeSubject(subject.slug);
  report.generated.push({
    slug: subject.slug,
    topics: bundle.statistics.topicCount,
    questions: bundle.statistics.uniqueQuestionCount,
  });
}
for (const slug of GENERATED_SUBJECT_SLUGS) {
  if (!generated.some((subject) => subject.slug === slug)) report.skipped.push(slug);
}

// 2. Top-ups for existing subjects.
const subjectCache = new Map();
const loadSubject = (slug) => {
  if (!subjectCache.has(slug)) subjectCache.set(slug, readJson(path.join(sourceSubjectsRoot, slug, "subject.json")));
  return subjectCache.get(slug);
};
const candidateSetsFor = (slugs) => slugs
  .filter((slug) => exists(path.join(sourceSubjectsRoot, slug, "subject.json")))
  .map((slug) => ({ slug, candidates: candidatesFor(loadSubject(slug)) }));

/**
 * Routes each source group to a canonical topic where the title matches
 * confidently, and to the subject-wide overlay where it does not. The overlay
 * is the same fallback the existing catalogue already uses, so an unmatched
 * question is still reachable from the course's practice page.
 */
function routeGroups(groups, targetSlugs, defaultSlug) {
  const sets = candidateSetsFor(targetSlugs);
  const bySubject = new Map();
  const stats = { exact: 0, overlay: 0 };
  for (const group of groups) {
    const groupMatch = bestTopicMatch(group.title, sets);
    for (const question of group.questions) {
      // The per-question label ("Q01-01 Classifying a decomposable pure
      // substance") is far more specific than the file-level title, so it gets
      // first refusal; the group title is the fallback.
      const match = bestTopicMatch(question.sourceTopicTitle ?? "", sets) ?? groupMatch;
      const slug = match?.subjectSlug ?? defaultSlug;
      if (!bySubject.has(slug)) bySubject.set(slug, []);
      const routed = {
        ...question,
        sourceCollection: question.provenance.sourceCollection,
        sourceTopicId: question.provenance.sourceTopicId ?? group.title,
        mappedCanonicalTopicIds: match ? [match.topicId] : [],
        mappingScope: match ? "exact" : "subject-wide-overlay",
        provenance: { ...question.provenance, importBatch: IMPORT_BATCH, mappedByTitleMatch: Boolean(match) },
      };
      delete routed.sourceTopicTitle;
      bySubject.get(slug).push(routed);
      stats[match ? "exact" : "overlay"] += 1;
    }
  }
  return { bySubject, stats };
}

const topUps = [
  {
    label: "expansion-question-bank/10-biology-genetics",
    groups: readExpansionFolder("10-biology-genetics", "biology-genetics"),
    targets: ["biology-1", "biology-2"],
    fallback: "biology-1",
  },
  {
    label: "expansion-question-bank/11-chemistry",
    groups: readExpansionFolder("11-chemistry", "chemistry"),
    targets: ["general-chemistry-1", "general-chemistry-2"],
    fallback: "general-chemistry-1",
  },
  {
    label: "chemistry-study-hub/chem1",
    groups: readStudyHubDirectory("Education/chemistry-study-hub/src/quiz/chem1", "chemhub-chem1", "general-chemistry", rejected),
    targets: ["general-chemistry-1"],
    fallback: "general-chemistry-1",
  },
  {
    label: "chemistry-study-hub/chem2",
    groups: readStudyHubDirectory("Education/chemistry-study-hub/src/quiz/chem2", "chemhub-chem2", "general-chemistry", rejected),
    targets: ["general-chemistry-2"],
    fallback: "general-chemistry-2",
  },
  {
    label: "developmental-psychology-study-hub",
    groups: readStudyHubDirectory("Education/developmental-psychology-study-hub/src/quiz", "devpsych", "developmental-psychology", rejected),
    targets: ["developmental-psychology"],
    fallback: "developmental-psychology",
  },
];

const pending = new Map();
for (const entry of topUps) {
  if (!entry.groups.length) { report.skipped.push(entry.label); continue; }
  const { bySubject, stats } = routeGroups(entry.groups, entry.targets, entry.fallback);
  report.toppedUp[entry.label] = { ...stats, total: stats.exact + stats.overlay };
  for (const [slug, questions] of bySubject) {
    if (!pending.has(slug)) pending.set(slug, []);
    pending.get(slug).push(...questions);
  }
}
for (const [slug, questions] of pending) {
  topUpSubject(slug, questions);
  recomputeSubject(slug);
}

// 3. Rebuild the catalogue, search index and build report from what is on disk.
const catalog = readJson(path.join(contentRoot, "catalog.json"));
const knownSlugs = new Set(catalog.subjects.map((subject) => subject.slug));
for (const subject of generated) {
  if (!knownSlugs.has(subject.slug)) {
    catalog.subjects.push({
      id: `subject:${subject.slug}`,
      slug: subject.slug,
      title: subject.title,
      aliases: [],
      status: "final",
      category: subject.category,
      legacySlugs: [],
      statistics: {},
      href: `/learn/${subject.slug}`,
    });
  }
}

const searchIndex = [];
const totals = {
  subjects: 0, units: 0, topics: 0, teachingTopics: 0, eli10Topics: 0,
  referencedTopics: 0, uniqueQuestionsAcrossCatalog: 0, questionPlacements: 0,
};
const globalQuestionIds = new Set();
for (const summary of catalog.subjects) {
  const bundle = readJson(path.join(sourceSubjectsRoot, summary.slug, "subject.json"));
  const bank = readJson(path.join(sourceSubjectsRoot, summary.slug, "questions.json"));
  summary.title = bundle.subject.title;
  summary.category = bundle.subject.category;
  summary.statistics = bundle.statistics;
  summary.href = `/learn/${summary.slug}`;
  totals.subjects += 1;
  totals.units += bundle.statistics.unitCount;
  totals.topics += bundle.statistics.topicCount;
  totals.teachingTopics += bundle.statistics.teachingTopicCount;
  totals.eli10Topics += bundle.statistics.eli10TopicCount;
  totals.referencedTopics += bundle.statistics.referencedTopicCount;
  totals.questionPlacements += bundle.statistics.uniqueQuestionCount;
  for (const question of [...(bank.questions ?? []), ...(bank.subjectWideQuestions ?? [])]) globalQuestionIds.add(question.id);
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
        aliases: (readJson(path.join(webRoot, topic.bundlePath)).aliases ?? [])
          .map((alias) => alias.value)
          .filter((value) => typeof value === "string"),
        availability: topic.availability,
        href: `/learn/${summary.slug}/${unit.slug}/${topic.slug}`,
      });
    }
  }
}
totals.uniqueQuestionsAcrossCatalog = globalQuestionIds.size;
catalog.totals = totals;
catalog.generatedOn = new Date().toISOString().slice(0, 10);
writeJson(path.join(contentRoot, "catalog.json"), catalog);
writeJson(path.join(contentRoot, "client", "catalog.json"), catalog);
writeJson(path.join(contentRoot, "client", "search-index.json"), searchIndex);
writeJson(path.join(contentRoot, "build-report.json"), {
  generatedOn: catalog.generatedOn,
  valid: true,
  totals,
  notes: [
    `${totals.subjects} canonical subjects are generated.`,
    "Teaching and question-only topics retain their real availability.",
    "Unreviewed app and A&P II pack mappings remain subject-wide overlays.",
    `Imported unpublished question banks (batch ${IMPORT_BATCH}).`,
  ],
});

console.log("IMPORT COMPLETE");
console.log(`Generated subjects: ${report.generated.map((item) => `${item.slug} (${item.topics} topics, ${item.questions} questions)`).join("; ") || "none"}`);
for (const [label, stats] of Object.entries(report.toppedUp)) {
  console.log(`Top-up ${label}: ${stats.total} questions (${stats.exact} topic-mapped, ${stats.overlay} subject-wide)`);
}
if (report.skipped.length) console.log(`Skipped (source not found): ${report.skipped.join(", ")}`);
if (leftovers.length) {
  console.log(`\nStale files from a previous run (delete by hand; this mount forbids unlink):`);
  for (const item of leftovers) console.log(`  - ${item}`);
}
if (rejected.length) {
  console.log(`\nRefused to publish ${rejected.length} source question(s):`);
  for (const item of rejected) console.log(`  - ${item.id}: ${item.reason}`);
}
writeJson(path.join(webRoot, "audit", "question-import-rejections.json"), {
  batch: IMPORT_BATCH,
  generatedOn: catalog.generatedOn,
  rejected,
});
console.log(`Catalogue totals: ${JSON.stringify(totals)}`);
