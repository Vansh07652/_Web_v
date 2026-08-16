#!/usr/bin/env node
/**
 * Second import pass: the `generated-subjects/` banks that live inside this
 * repository, plus the biology and physics study hubs that sit alongside it.
 *
 * PUBLISHED
 *   biology-1 / biology-2      336 questions   Biology's only questions today come
 *                                              from the citation-flagged app bank
 *
 * HELD BACK, staged to audit/held-question-banks/ instead
 *   nursing-assistant-cna    3,125 questions
 *   surgical-technology      2,995 questions
 *   physics-1 / physics-2      384 questions
 *
 * The three held banks are frame-generated rather than written. Measured on the
 * raw sources, before any import:
 *
 *   bank                     stems containing     distinct     distinct     ELI-10
 *                            their topic title    openers   option sets   templated
 *   cna-question-bank              100%          75/3,125       37%         100%
 *   surgical-technology            100%         113/2,995       37%         100%
 *   physics-study-hub               50%         199/384                     100%
 *   biology-study-hub                3%         324/336                       0%
 *
 * 37% distinct option sets means roughly two in three of those questions repeat
 * another question's answers outright, which is the duplication this import was
 * asked to avoid. Every ELI-10 in all three is one recycled simile with the
 * topic name dropped in. They are staged in the site's own schema so they can be
 * published the moment their stems and explanations are regenerated.
 *
 * Deliberately skipped: `genetics-study-hub`. Its 192 questions are already in
 * the catalogue from an earlier revision of the same repository — same sixteen
 * topic files, reworded. Importing them would add 192 near-duplicates to a
 * course that already covers them.
 *
 * Every question is fingerprinted against every stem already in the catalogue
 * before it is written, so a re-run or an overlapping source cannot double up.
 *
 * Idempotent: everything written carries `provenance.importBatch`, and a re-run
 * strips that batch first.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const hubsRoot = path.resolve(repoRoot, "..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");

const IMPORT_BATCH = "2026-08-14-generated-subjects";

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const readText = (filePath) => fs.readFileSync(filePath, "utf8");
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const exists = (filePath) => fs.existsSync(filePath);
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const fingerprint = (stem) => String(stem).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const walk = (directory) => (exists(directory)
  ? fs.readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => (entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]))
  : []);

const DIFFICULTIES = new Set(["foundational", "intermediate", "advanced", "unknown"]);
const normaliseDifficulty = (value) => {
  const lowered = clean(value).toLowerCase();
  return DIFFICULTIES.has(lowered) ? lowered : "unknown";
};
const toReference = (text, url) => {
  const label = clean(text);
  if (!label) return null;
  const href = clean(url);
  return /^https?:\/\/\S+$/i.test(href) ? { text: label, url: href } : { text: label };
};

/**
 * QUALITY GATE
 *
 * Three of these four sources were assembled by filling sentence frames, and
 * it shows. Measured across the raw banks before import:
 *
 *   cna-question-bank        100% of ELI-10s are "Think of X like a safety
 *                            rule in a classroom"; 20% of stems open with the
 *                            generator's own scaffold, "In case prompt 043
 *                            for <topic title>, which statement..."
 *   surgical-technology      100% of ELI-10s are "Think of X like an important
 *                            rule in a team project"; 20% of stems open with
 *                            "For the <thing> connected to <topic title>..."
 *   physics-study-hub        100% of ELI-10s and High-Yields are one frame
 *   biology-study-hub        0% — genuinely written, imports untouched
 *
 * Two different problems, handled differently:
 *
 *  1. A stem containing scaffold is a BROKEN QUESTION. "In case prompt 043"
 *     refers to nothing a student can see. These are dropped outright.
 *  2. A templated ELI-10 is a WEAK EXPLANATION attached to an otherwise sound
 *     question — real stem, real options, real per-option rationale, real
 *     citations. Those questions are kept and the field is flagged, but the
 *     topic-page ELI-10 section is NOT assembled from them: stacking ninety
 *     copies of the same simile on one page is the one place the weakness
 *     becomes glaring rather than merely dull.
 */
const SCAFFOLDED_STEM_FRAMES = [
  /^In case prompt \d+ for /i,
  /^For the .{0,80} connected to .{0,80}, /i,
  /^In (?:the )?scenario \d+[,: ]/i,
];
const isScaffoldedStem = (text) => SCAFFOLDED_STEM_FRAMES.some((frame) => frame.test(String(text ?? "").trim()));

const TEMPLATED_FRAMES = [
  // physics-study-hub
  /imagine .{0,80} as a labeled/i,
  /checking the labels keeps/i,
  /identify the model and convention/i,
  /before manipulating symbols/i,
  /the labels tell you what each/i,
  // cna-question-bank / surgical-technology-question-bank
  /like a safety rule in a classroom/i,
  /like an important rule in a team project/i,
];
const isTemplated = (text) => TEMPLATED_FRAMES.some((frame) => frame.test(String(text ?? "")));

/** A topic whose questions are mostly templated gets no ELI-10 section. */
const TEMPLATED_SECTION_THRESHOLD = 0.6;

// ---------------------------------------------------------------------------
// Topic matching (same scoring the first import pass uses)
// ---------------------------------------------------------------------------

const STOP_WORDS = new Set([
  "and", "the", "of", "for", "in", "to", "a", "an", "with", "on", "or", "its",
  "into", "from", "at", "by", "as", "is", "are", "basic", "basics", "foundations",
  "foundation", "introduction", "intro", "overview", "concepts", "concept", "i", "ii",
]);
const tokens = (value) => new Set(slugify(value).split("-").filter((token) => token && !STOP_WORDS.has(token)));
const matchScore = (sourceTitle, canonicalTitle, aliases = []) => {
  const source = tokens(sourceTitle);
  if (!source.size) return 0;
  let best = 0;
  for (const candidate of [canonicalTitle, ...aliases]) {
    const target = tokens(candidate);
    if (!target.size) continue;
    let hits = 0;
    for (const token of source) if (target.has(token)) hits += 1;
    best = Math.max(best, ((hits / source.size) * 2 + hits / target.size) / 3);
  }
  return best;
};
const MATCH_THRESHOLD = 0.62;
const candidatesFor = (subject) => (subject.units ?? []).flatMap((unit) => (unit.topics ?? []).map((topic) => ({
  id: topic.id,
  title: topic.title,
  aliases: (topic.aliases ?? []).map((alias) => alias.value).filter((value) => typeof value === "string"),
})));
const bestTopicMatch = (sourceTitle, sets) => {
  let winner = null;
  for (const { slug, candidates } of sets) {
    for (const candidate of candidates) {
      const score = matchScore(sourceTitle, candidate.title, candidate.aliases);
      if (!winner || score > winner.score) winner = { score, subjectSlug: slug, topicId: candidate.id };
    }
  }
  return winner && winner.score >= MATCH_THRESHOLD ? winner : null;
};

// ---------------------------------------------------------------------------
// Reader: structured JSON topic banks (CNA, surgical technology)
// ---------------------------------------------------------------------------

/**
 * Reads a bank laid out as `data/<unit>/<topic>.json`, where each file holds a
 * whole topic's questions plus its own verified source registry. The
 * "why this matters" field is named per profession, so it is passed in.
 */
function readStructuredBank({ slug, title, category, aliases, bankDirectory, collection, relevanceField, warningField }, rejected) {
  const dataRoot = path.join(repoRoot, bankDirectory, "data");
  if (!exists(dataRoot)) return null;

  const unitOrder = [];
  const units = new Map();
  for (const filePath of walk(dataRoot).filter((name) => name.endsWith(".json")).sort()) {
    const bank = readJson(filePath);
    if (!Array.isArray(bank.questions) || !bank.questions.length) continue;
    const unitKey = bank.unit_id ?? slugify(bank.unit_title ?? "unit");
    if (!units.has(unitKey)) {
      units.set(unitKey, { slug: slugify(bank.unit_title ?? unitKey), title: clean(bank.unit_title ?? unitKey), topics: [] });
      unitOrder.push(unitKey);
    }
    const sourceFile = path.relative(repoRoot, filePath).split(path.sep).join("/");

    const sourceById = new Map((bank.sources ?? []).map((source) => [source.source_id, source]));
    const label = (source) => [source.organization_or_author, source.title].filter(Boolean).join(" — ");
    const referencesFor = (ids) => (ids ?? []).map((id) => sourceById.get(id)).filter(Boolean)
      .map((source) => toReference(label(source), source.url)).filter(Boolean);
    const topicReferences = (bank.sources ?? []).map((source) => toReference(label(source), source.url)).filter(Boolean);

    const questions = bank.questions.filter((question) => {
      if (!isScaffoldedStem(question.question)) return true;
      rejected.push({ id: question.id, source: sourceFile, reason: "stem contains generator scaffold" });
      return false;
    }).map((question) => {
      const options = Object.entries(question.options ?? {}).map(([id, text]) => ({ id, text: clean(text) }));
      const distractorAnalysis = Object.entries(question.explanation?.why_incorrect ?? {})
        .filter(([id]) => id !== question.correct_answer)
        .map(([id, text]) => `**${id}.** ${clean(text)}`).join("\n\n");
      const references = referencesFor(question.source_ids);
      const relevance = clean(question[relevanceField] ?? "");
      const warning = clean(question[warningField] ?? "");
      return {
        id: question.id,
        stem: clean(question.question),
        options,
        correctAnswer: question.correct_answer,
        rationales: {
          whyCorrect: clean(question.explanation?.why_correct),
          eli10: clean(question.eli_10),
          ...(distractorAnalysis ? { distractorAnalysis } : {}),
          ...(relevance ? { clinicalRelevance: relevance } : {}),
          // Both banks warn where practice differs by state or by facility.
          // That caveat has to travel with the question, not be dropped.
          ...(warning ? { scopeVariationWarning: warning } : {}),
        },
        difficulty: normaliseDifficulty(question.difficulty),
        tags: [slug, ...(question.tags ?? []), ...(isTemplated(question.eli_10) ? ["templated-eli10"] : [])],
        references,
        computation: null,
        citationReviewRequired: references.length === 0,
        provenance: {
          sourceCollection: collection,
          sourceFile,
          sourceQuestionNumber: question.question_number,
          sourceId: question.id,
          lastVerified: question.last_verified ?? null,
          importedWithoutRewriting: true,
          ...(isTemplated(question.eli_10) ? { eli10QualityFlag: "templated-frame" } : {}),
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
        { value: bank.topic_id, kind: "source_topic_id", source_id: collection },
        { value: bank.topic_slug, kind: "source_topic_slug", source_id: collection },
      ].filter((alias) => alias.value),
      questions,
    });
  }
  if (!units.size) return null;
  return { slug, title, category, aliases, provenance: { sourceCollection: collection, sourceRoot: bankDirectory }, units: unitOrder.map((key) => units.get(key)) };
}

// ---------------------------------------------------------------------------
// Reader: study-hub quiz markdown (biology, physics)
// ---------------------------------------------------------------------------

const inlineField = (markdown, label) => {
  // No `m` flag: with it, `$` matches every end-of-line and the lazy capture
  // stops after the first line, truncating the rationale.
  const pattern = new RegExp(`(?:^|\\n)>?\\s*\\*\\*${label}:?\\*\\*:?\\s*([\\s\\S]*?)(?=\\n\\s*\\n|$)`);
  return clean(markdown.match(pattern)?.[1] ?? "");
};

function readStudyHubDirectory({ directory, idPrefix, tag, collection, rejected }) {
  const root = path.join(hubsRoot, directory);
  if (!exists(root)) return [];
  const groups = [];
  for (const filePath of walk(root).filter((name) => name.endsWith(".md")).sort()) {
    const markdown = readText(filePath);
    const relative = path.relative(hubsRoot, filePath).split(path.sep).join("/");
    const groupTitle = clean(markdown.match(/^##\s+[\d.]*\s*(.+)$/m)?.[1] ?? path.basename(filePath, ".md").replace(/^\d+-/, "").replace(/-/g, " "));
    const questions = [];
    for (const block of markdown.split(/\n(?=###\s+Q)/).filter((piece) => /^###\s+Q/.test(piece.trim()))) {
      const reference = block.match(/^###\s+(Q[\w-]+)/)?.[1];
      if (!reference) continue;
      const note = (reason) => rejected.push({ id: `${relative}#${reference}`, reason });
      const optionMatches = [...block.matchAll(/^[-*]\s+\*\*([A-E])\.\*\*\s+(.+)$/gm)];
      if (optionMatches.length < 2) { note("fewer than two options"); continue; }
      const correct = block.match(/^\*\*Correct Answer:\*\*\s*\*\*([A-E])\.\*\*/m);
      if (!correct) { note("no correct-answer line"); continue; }
      const stem = clean(block.slice(block.indexOf("\n"), optionMatches[0].index));
      const whyCorrect = inlineField(block, "Why This Is Correct");
      const eli10 = inlineField(block, "ELI-10");
      if (!stem || !whyCorrect || !eli10) { note("missing stem, rationale or ELI-10"); continue; }
      const highYield = inlineField(block, "High-Yield");
      const templated = isTemplated(eli10) || isTemplated(highYield);
      questions.push({
        id: `${idPrefix}-${path.basename(filePath, ".md")}-${reference.toLowerCase()}`,
        stem,
        options: optionMatches.map((match) => ({ id: match[1], text: clean(match[2]) })),
        correctAnswer: correct[1],
        rationales: {
          whyCorrect,
          eli10,
          // A templated High-Yield adds nothing, so it is not carried over.
          ...(highYield && !templated ? { highYield } : {}),
        },
        difficulty: "unknown",
        tags: templated ? [tag, "templated-eli10"] : [tag],
        references: [],
        computation: null,
        citationReviewRequired: true,
        provenance: {
          sourceCollection: collection,
          sourceFile: relative,
          sourceId: reference,
          importedWithoutRewriting: true,
          ...(templated ? { eli10QualityFlag: "templated-frame" } : {}),
        },
        sourceSnapshotMarkdown: clean(block),
        sourceTopicTitle: clean(block.match(/^###\s+Q[\w-]+\s+(.*)$/m)?.[1] ?? ""),
      });
    }
    if (questions.length) groups.push({ title: groupTitle, questions });
  }
  return groups;
}

// ---------------------------------------------------------------------------
// Writers (shared with the first import pass)
// ---------------------------------------------------------------------------

const stripSnapshot = ({ sourceSnapshotMarkdown, ...rest }) => rest;

const templatedShare = (questions) => (questions.length
  ? questions.filter((question) => question.tags?.includes("templated-eli10")).length / questions.length
  : 0);

function buildTopicBundle(subject, unit, topic, order, questions) {
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
    eli10: templatedShare(questions) > TEMPLATED_SECTION_THRESHOLD
      ? ""
      : questions.map((question, index) => `### Question ${index + 1}\n\n${question.rationales.eli10}`).join("\n\n"),
    quickReview: "",
    workedExamples: "",
    references: topic.references ?? [],
  };
  const availability = {
    collegeNotes: false,
    eli10: Boolean(sections.eli10.trim()),
    highYield: false,
    quickReview: false,
    workedExamples: false,
    references: Boolean(sections.references.length),
    exactQuestions: questions.length,
  };
  const id = `topic:${subject.slug}:${unit.slug}:${topic.slug}`;
  return {
    id,
    availability,
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
      authority: { questions: [{ source_file: topic.sourceFile }], answer_rationales: [{ source_file: topic.sourceFile }], eli10: [{ source_file: topic.sourceFile }] },
      provenance: {
        sourceCollection: subject.provenance.sourceCollection,
        sourceFile: topic.sourceFile,
        importedWithoutRewriting: true,
        teachingNoteAvailable: false,
        importBatch: IMPORT_BATCH,
      },
      sourceSnapshotMarkdown: topic.sourceSnapshotMarkdown,
    },
  };
}

function writeGeneratedSubject(subject, seen) {
  const sourceDirectory = path.join(sourceSubjectsRoot, subject.slug);
  const clientDirectory = path.join(clientSubjectsRoot, subject.slug);
  const units = [];
  const questions = [];
  let skippedDuplicates = 0;

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
      const fresh = topic.questions.filter((question) => {
        const key = fingerprint(question.stem);
        if (seen.has(key)) { skippedDuplicates += 1; return false; }
        seen.add(key);
        return true;
      });
      if (!fresh.length) return;
      const { bundle, availability, id } = buildTopicBundle(subject, { ...unit, order: unitIndex + 1 }, topic, unitRecord.topics.length + 1, fresh);
      const bundlePath = `content-v2/subjects/${subject.slug}/topics/${unit.slug}/${topic.slug}.json`;
      writeJson(path.join(webRoot, bundlePath), bundle);
      writeJson(path.join(clientDirectory, "topics", unit.slug, `${topic.slug}.json`), { ...bundle, sourceSnapshotMarkdown: "" });
      unitRecord.topics.push({
        id, slug: topic.slug, title: topic.title, order: unitRecord.topics.length + 1,
        status: "final", bundlePath, mappedQuestionCount: fresh.length, availability,
      });
      for (const question of fresh) {
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
    if (unitRecord.topics.length) units.push(unitRecord);
  });

  const bank = { schemaVersion: "2.0.0", subjectSlug: subject.slug, questions, subjectWideQuestions: [], deferred: [] };
  writeJson(path.join(sourceDirectory, "questions.json"), bank);
  writeJson(path.join(clientDirectory, "questions.json"), { ...bank, questions: questions.map(stripSnapshot) });
  writeJson(path.join(sourceDirectory, "subject.json"), {
    schemaVersion: "2.0.0",
    subject: { id: `subject:${subject.slug}`, slug: subject.slug, title: subject.title, aliases: subject.aliases, status: "final", category: subject.category },
    units,
    statistics: {},
    provenance: { ...subject.provenance, importBatch: IMPORT_BATCH, importedWithoutRewriting: true },
  });
  return { questions: questions.length, topics: units.reduce((total, unit) => total + unit.topics.length, 0), skippedDuplicates };
}

function recomputeSubject(slug) {
  const sourceDirectory = path.join(sourceSubjectsRoot, slug);
  const clientDirectory = path.join(clientSubjectsRoot, slug);
  const bundle = readJson(path.join(sourceDirectory, "subject.json"));
  const bank = readJson(path.join(sourceDirectory, "questions.json"));
  const exact = bank.questions ?? [];
  const subjectWide = bank.subjectWideQuestions ?? [];
  const all = [...exact, ...subjectWide];
  let teaching = 0; let eli10 = 0; let highYield = 0; let referenced = 0; let topicCount = 0;

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

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

const rejected = [];
const report = { published: {}, held: [], duplicatesSkipped: 0, templated: 0 };

/** Every stem already in the catalogue, so nothing can be imported twice. */
const seen = new Set();
for (const slug of fs.readdirSync(sourceSubjectsRoot)) {
  const bankPath = path.join(sourceSubjectsRoot, slug, "questions.json");
  if (!exists(bankPath)) continue;
  const bank = readJson(bankPath);
  for (const question of [...(bank.questions ?? []), ...(bank.subjectWideQuestions ?? [])]) {
    if (question.provenance?.importBatch === IMPORT_BATCH) continue;
    seen.add(fingerprint(question.stem));
  }
}
const seenBefore = seen.size;

/**
 * Strip this batch from EVERY subject BEFORE anything is written.
 *
 * Two reasons it has to run first, both learned the hard way:
 *  - a source removed from the publish list (physics, once it failed the
 *    quality gate) would otherwise leave its previous run's questions
 *    stranded in the catalogue with nothing to clean them out;
 *  - running it after the generated subjects are written deletes the
 *    questions that were just written, because they carry this very batch
 *    marker. That produced a course with 174 topics and zero questions.
 */
for (const slug of fs.readdirSync(sourceSubjectsRoot)) {
  const bankPath = path.join(sourceSubjectsRoot, slug, "questions.json");
  if (!exists(bankPath)) continue;
  const bank = readJson(bankPath);
  const keep = (question) => question.provenance?.importBatch !== IMPORT_BATCH;
  const before = (bank.questions?.length ?? 0) + (bank.subjectWideQuestions?.length ?? 0);
  bank.questions = (bank.questions ?? []).filter(keep);
  bank.subjectWideQuestions = (bank.subjectWideQuestions ?? []).filter(keep);
  const after = (bank.questions?.length ?? 0) + (bank.subjectWideQuestions?.length ?? 0);
  if (after !== before) { writeJson(bankPath, bank); recomputeSubject(slug); }
}


/**
 * Banks that pass the quality gate and publish as courses.
 *
 * medical-office-assistant was measured before import, the same way the held
 * banks were, and it is the opposite result: 100% distinct option sets, 100%
 * distinct rationales, 0% of stems carrying their own topic title, and 13,885
 * distinct ELI-10 openings across 14,685 questions. It was written, not
 * generated from frames.
 */
const PUBLISH_BANKS = [
  {
    slug: "medical-office-assistant",
    title: "Medical Office Assistant",
    category: "allied-health",
    bankDirectory: "generated-subjects/medical-office-assistant-question-bank",
    collection: "medical-office-assistant-question-bank",
    relevanceField: "clinical_relevance",
    warningField: "scope_note",
    aliases: [
      { value: "medical-office-assistant", kind: "canonical_slug" },
      { value: "moa", kind: "legacy_or_display_alias" },
      { value: "medical administrative assistant", kind: "legacy_or_display_alias" },
      { value: "medical assisting", kind: "legacy_or_display_alias" },
    ],
  },
];

/** Nothing here publishes; each is written to audit/held-question-banks/. */
const HELD_BANKS = [
  {
    slug: "nursing-assistant-cna",
    title: "Nursing Assistant (CNA)",
    category: "allied-health",
    bankDirectory: "generated-subjects/cna-question-bank",
    collection: "cna-question-bank",
    relevanceField: "why_this_matters_in_cna_care",
    warningField: "state_variation_warning",
    aliases: [
      { value: "nursing-assistant-cna", kind: "canonical_slug" },
      { value: "cna", kind: "legacy_or_display_alias" },
      { value: "certified nursing assistant", kind: "legacy_or_display_alias" },
      { value: "nurse aide", kind: "legacy_or_display_alias" },
    ],
  },
  {
    slug: "surgical-technology",
    title: "Surgical Technology",
    category: "allied-health",
    bankDirectory: "generated-subjects/surgical-technology-question-bank",
    collection: "surgical-technology-question-bank",
    relevanceField: "why_this_matters_in_surgical_technology",
    warningField: "program_or_facility_variation_warning",
    aliases: [
      { value: "surgical-technology", kind: "canonical_slug" },
      { value: "surg tech", kind: "legacy_or_display_alias" },
      { value: "operating room technology", kind: "legacy_or_display_alias" },
      { value: "cst", kind: "legacy_or_display_alias" },
    ],
  },
];

for (const definition of PUBLISH_BANKS) {
  const subject = readStructuredBank(definition, rejected);
  if (!subject) { report.published[definition.slug] = { total: 0, note: "source not found" }; continue; }
  const written = writeGeneratedSubject(subject, seen);
  report.duplicatesSkipped += written.skippedDuplicates;
  const bundle = recomputeSubject(subject.slug);
  report.published[definition.slug] = {
    total: bundle.statistics.uniqueQuestionCount,
    exact: bundle.statistics.exactOrMappedQuestionCount,
    overlay: bundle.statistics.subjectWideQuestionCount,
    topics: bundle.statistics.topicCount,
    units: bundle.statistics.unitCount,
  };
}

const heldRoot = path.join(webRoot, "audit", "held-question-banks");
for (const definition of HELD_BANKS) {
  const subject = readStructuredBank(definition, rejected);
  if (!subject) { report.held.push({ slug: definition.slug, questions: 0, note: "source not found" }); continue; }
  const topics = subject.units.flatMap((unit) => unit.topics.map((topic) => ({ unit: unit.title, ...topic })));
  const questions = topics.flatMap((topic) => topic.questions);
  writeJson(path.join(heldRoot, `${definition.slug}.json`), {
    schemaVersion: "2.0.0",
    stagedOnly: true,
    reason: "Frame-generated: every stem interpolates its topic title, only ~37% of option sets are distinct, and every ELI-10 is one recycled simile.",
    subject: { slug: definition.slug, title: definition.title, category: definition.category },
    units: subject.units.map((unit) => ({ title: unit.title, topics: unit.topics.length })),
    questionCount: questions.length,
    questions: questions.map(stripSnapshot),
  });
  report.held.push({ slug: definition.slug, topics: topics.length, units: subject.units.length, questions: questions.length });
}

// Top-ups for existing courses.
const subjectCache = new Map();
const loadSubject = (slug) => {
  if (!subjectCache.has(slug)) subjectCache.set(slug, readJson(path.join(sourceSubjectsRoot, slug, "subject.json")));
  return subjectCache.get(slug);
};
const setsFor = (slugs) => slugs.filter((slug) => exists(path.join(sourceSubjectsRoot, slug, "subject.json")))
  .map((slug) => ({ slug, candidates: candidatesFor(loadSubject(slug)) }));

const TOP_UPS = [
  { label: "biology-study-hub/bio1", directory: "biology-study-hub/src/quiz/bio1", idPrefix: "biohub-bio1", tag: "biology", collection: "biology-study-hub", targets: ["biology-1"], fallback: "biology-1" },
  { label: "biology-study-hub/bio2", directory: "biology-study-hub/src/quiz/bio2", idPrefix: "biohub-bio2", tag: "biology", collection: "biology-study-hub", targets: ["biology-2"], fallback: "biology-2" },
];

const pending = new Map();
for (const entry of TOP_UPS) {
  const groups = readStudyHubDirectory({ ...entry, rejected });
  if (!groups.length) { report.published[entry.label] = { total: 0, note: "source not found" }; continue; }
  const sets = setsFor(entry.targets);
  const stats = { exact: 0, overlay: 0, duplicate: 0, templated: 0 };
  for (const group of groups) {
    const groupMatch = bestTopicMatch(group.title, sets);
    for (const question of group.questions) {
      const key = fingerprint(question.stem);
      if (seen.has(key)) { stats.duplicate += 1; report.duplicatesSkipped += 1; continue; }
      seen.add(key);
      if (question.tags.includes("templated-eli10")) { stats.templated += 1; report.templated += 1; }
      const match = bestTopicMatch(question.sourceTopicTitle ?? "", sets) ?? groupMatch;
      const slug = match?.subjectSlug ?? entry.fallback;
      const routed = {
        ...question,
        sourceCollection: entry.collection,
        sourceTopicId: group.title,
        mappedCanonicalTopicIds: match ? [match.topicId] : [],
        mappingScope: match ? "exact" : "subject-wide-overlay",
        provenance: { ...question.provenance, importBatch: IMPORT_BATCH, mappedByTitleMatch: Boolean(match) },
      };
      delete routed.sourceTopicTitle;
      if (!pending.has(slug)) pending.set(slug, []);
      pending.get(slug).push(routed);
      stats[match ? "exact" : "overlay"] += 1;
    }
  }
  report.published[entry.label] = { ...stats, total: stats.exact + stats.overlay };
}

for (const [slug, incoming] of pending) {
  const bankPath = path.join(sourceSubjectsRoot, slug, "questions.json");
  const bank = readJson(bankPath);
  const keep = (question) => question.provenance?.importBatch !== IMPORT_BATCH;
  bank.questions = (bank.questions ?? []).filter(keep);
  bank.subjectWideQuestions = (bank.subjectWideQuestions ?? []).filter(keep);
  for (const question of incoming) {
    if (question.mappingScope === "exact") bank.questions.push(question);
    else bank.subjectWideQuestions.push(question);
  }
  writeJson(bankPath, bank);
  recomputeSubject(slug);
}

// physics-study-hub is staged, not published: half its stems interpolate the
// topic title, 184 of 384 open with the same four words, and every ELI-10 and
// High-Yield is one frame. Physics I and II having no questions is a real gap,
// but filling it with this would be worse than leaving it visible.
for (const entry of [
  { label: "physics-1", directory: "physics-study-hub/src/quiz/phys1", idPrefix: "physhub-phys1", tag: "physics", collection: "physics-study-hub" },
  { label: "physics-2", directory: "physics-study-hub/src/quiz/phys2", idPrefix: "physhub-phys2", tag: "physics", collection: "physics-study-hub" },
]) {
  const groups = readStudyHubDirectory({ ...entry, rejected });
  const questions = groups.flatMap((group) => group.questions.map(stripSnapshot));
  if (!questions.length) continue;
  writeJson(path.join(webRoot, "audit", "held-question-banks", `physics-study-hub-${entry.label}.json`), {
    schemaVersion: "2.0.0",
    stagedOnly: true,
    reason: "Every ELI-10 and High-Yield is one sentence frame; half the stems interpolate the topic title.",
    target: entry.label,
    questionCount: questions.length,
    questions,
  });
  report.held.push({ slug: `physics-study-hub → ${entry.label}`, questions: questions.length });
}

// Rebuild the catalogue from what is on disk.
const catalog = readJson(path.join(contentRoot, "catalog.json"));
// A held bank must never appear in the catalogue, including if an earlier run
// of this script published it before the quality gate existed.
for (const definition of PUBLISH_BANKS) {
  if (catalog.subjects.some((subject) => subject.slug === definition.slug)) continue;
  if (!exists(path.join(sourceSubjectsRoot, definition.slug, "subject.json"))) continue;
  catalog.subjects.push({
    id: `subject:${definition.slug}`, slug: definition.slug, title: definition.title, aliases: [],
    status: "final", category: definition.category, legacySlugs: [], statistics: {}, href: `/learn/${definition.slug}`,
  });
}
const heldSlugs = new Set(HELD_BANKS.map((definition) => definition.slug));
catalog.subjects = catalog.subjects.filter((subject) => !heldSlugs.has(subject.slug)
  && exists(path.join(sourceSubjectsRoot, subject.slug, "subject.json")));

const searchIndex = [];
const totals = { subjects: 0, units: 0, topics: 0, teachingTopics: 0, eli10Topics: 0, referencedTopics: 0, uniqueQuestionsAcrossCatalog: 0, questionPlacements: 0 };
const globalIds = new Set();
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
writeJson(path.join(contentRoot, "build-report.json"), {
  generatedOn: catalog.generatedOn,
  valid: true,
  totals,
  notes: [
    `${totals.subjects} canonical subjects are generated.`,
    "Teaching and question-only topics retain their real availability.",
    "Unreviewed app and A&P II pack mappings remain subject-wide overlays.",
    `Imported generated-subject banks and study hubs (batch ${IMPORT_BATCH}).`,
  ],
});
writeJson(path.join(webRoot, "audit", "generated-subject-import.json"), { batch: IMPORT_BATCH, generatedOn: catalog.generatedOn, report, rejected });

console.log("IMPORT COMPLETE");
console.log(`Stems in the catalogue before this run: ${seenBefore}`);
for (const item of report.held) console.log(`HELD  ${item.slug}: ${item.questions} questions staged, not published${item.topics ? ` (${item.topics} topics)` : ""}`);
for (const [label, stats] of Object.entries(report.published)) {
  console.log(`PUBLISHED ${label}: ${stats.total ?? 0} questions (${stats.exact ?? 0} topic-mapped, ${stats.overlay ?? 0} subject-wide, ${stats.duplicate ?? 0} duplicate)${stats.note ? ` — ${stats.note}` : ""}`);
}
console.log(`Duplicates refused: ${report.duplicatesSkipped}`);
console.log(`Questions flagged as templated ELI-10: ${report.templated}`);
const scaffolded = rejected.filter((item) => item.reason === "stem contains generator scaffold").length;
if (scaffolded) console.log(`Dropped ${scaffolded} question(s) whose stem contained generator scaffold`);
if (rejected.length - scaffolded) console.log(`Unparseable source questions: ${rejected.length - scaffolded}`);
console.log("(all refusals listed in audit/generated-subject-import.json)");
console.log(`Catalogue totals: ${JSON.stringify(totals)}`);
