#!/usr/bin/env node
/**
 * Imports the `Need_Review` study-note libraries into curriculum-v2.
 *
 *   15 source folders, 446 numbered topic notes
 *    9 existing courses have their unit/topic set replaced
 *    6 new courses are created
 *
 * The notes are published verbatim. Every `##` section body is copied across
 * with only its own heading removed and the surrounding blank lines trimmed —
 * tables, lists and emphasis are untouched. Nothing is rewritten, summarised or
 * generated, and no citation is invented: none of these notes carries a sources
 * section, so every imported topic gets `references: []` and reports
 * `availability.references === false` rather than a borrowed bibliography.
 *
 * SECTION MAP
 *
 *   overview           Quick Answer
 *   whyItMatters       "...Connection", then "...Foundation", else ""
 *   learningObjectives Learning Objectives
 *   keyTerms           Key Terms
 *   collegeNotes       Core Concepts
 *   howItWorks         How It Works
 *   comparisons        "" - the notes have no comparative section
 *   highYield          High-Yield Points
 *   commonConfusions   Common Confusions
 *   memoryAids         Memory Aid
 *   eli10              ELI-10 Explanation
 *   quickReview        Topic Recap + Knowledge Check + Answers and Rationales
 *   workedExamples     "...Walkthrough", then Equations and Calculations, else ""
 *
 *   references         []
 *
 * The variable headings are matched by suffix because their prefixes differ per
 * library ("Mechanism, Equation, or Physiology Walkthrough", "Healthcare,
 * Laboratory, or Applied Connection", and a dozen more).
 *
 * Two fields take a primary heading and an optional secondary one. The primary
 * always keeps the lead - "...Connection" outranks "...Foundation", and a
 * "...Walkthrough" outranks "Equations and Calculations" - so a note that has
 * both reads exactly as it did when only the primary was mapped. The secondary
 * is appended beneath it under its own `###` heading instead of being dropped.
 * That recovers the applied-context section from the 39 Pathophysiology notes
 * (Foundation only) and the 32 General Microbiology notes (Foundation *and*
 * Connection, with Foundation printed first in the source), plus the equation
 * tables in 26 of the 28 General Chemistry I notes.
 *
 * The only `##` heading the map still discards is "Related Topics": on all 446
 * notes it holds nothing but Previous/Next pointers and relative links to other
 * files in the source repository, which do not resolve to site routes. It has
 * no teaching content and no sensible schema home, and it survives in
 * `sourceSnapshotMarkdown` like everything else.
 *
 * QUESTIONS ARE NEVER DISCARDED
 *
 * Replacing a course's topics orphans the question mappings that pointed at the
 * old topics. Old titles are matched to new ones by Jaccard token overlap after
 * normalising case, punctuation, leading numbers and stop words. A question is
 * re-pointed only when every topic it referenced clears MATCH_THRESHOLD;
 * otherwise it keeps all of its content and moves to `subjectWideQuestions`,
 * where the subject-wide overlay still shows it to students. The threshold is
 * deliberately strict: an unmapped question is still reachable, a mis-mapped
 * one teaches the wrong topic.
 *
 * Both the count and the exact set of question IDs are asserted per subject and
 * across the run. Every field other than `mappedCanonicalTopicIds` and
 * `mappingScope` is fingerprinted before and after and must match.
 *
 * Idempotent: each touched course is rebuilt from its own current state, and a
 * second run matches every new topic to itself at score 1.0, so re-running
 * reproduces the same bytes.
 *
 * Usage: node scripts/import-need-review-notes.mjs [path-to-Need_Review]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(root, "..");
const contentRoot = path.join(root, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");
const notesRoot = path.resolve(process.argv[2] ?? path.join(repoRoot, "Need_Review"));

const IMPORT_BATCH = "2026-08-15-need-review-notes";
/** Jaccard token overlap an old topic title must reach to re-point questions. */
const MATCH_THRESHOLD = 0.6;

const errors = [];
const fail = (message) => errors.push(message);
const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const readText = (filePath) => fs.readFileSync(filePath, "utf8");
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const exists = (filePath) => fs.existsSync(filePath);
const slugify = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const portable = (filePath) => path.relative(notesRoot, filePath).split(path.sep).join("/");
const walk = (directory) => (exists(directory)
  ? fs.readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => (entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]))
  : []);

// ---------------------------------------------------------------------------
// Course map
// ---------------------------------------------------------------------------

/** Courses whose unit and topic set is replaced; identity fields are kept. */
const REPLACED = [
  { directory: "pathophysiology-study-notes", slug: "pathophysiology" },
  { directory: "biology-2-study-notes", slug: "biology-2" },
  { directory: "developmental-psychology-study-notes", slug: "developmental-psychology" },
  { directory: "general-chemistry-i-study-notes", slug: "general-chemistry-1" },
  { directory: "organic-chemistry-i-study-notes", slug: "organic-chemistry-1" },
  { directory: "organic-chemistry-ii-study-notes", slug: "organic-chemistry-2" },
  { directory: "general-microbiology-study-notes", slug: "microbiology" },
  { directory: "rpsgt-exam-prep-study-notes", slug: "sleep-technology" },
  { directory: "rrt-exam-prep-study-notes", slug: "respiratory-therapy" },
];

/**
 * New courses. Titles are the source library's own catalogue heading; each
 * category is one of the four the catalogue already uses.
 */
const CREATED = [
  { directory: "cna-exam-prep-study-notes", slug: "cna-exam-prep", title: "CNA Exam Preparation", category: "allied-health" },
  { directory: "fundamentals-of-nursing-practice-study-notes", slug: "fundamentals-of-nursing-practice", title: "Fundamentals of Nursing Practice", category: "healthcare-foundations" },
  { directory: "general-ecology-study-notes", slug: "general-ecology", title: "General Ecology", category: "pre-health-core" },
  { directory: "human-physiology-i-study-notes", slug: "human-physiology-1", title: "Human Physiology I", category: "pre-health-core" },
  { directory: "human-physiology-ii-study-notes", slug: "human-physiology-2", title: "Human Physiology II", category: "pre-health-core" },
  { directory: "introduction-to-psychology-study-notes", slug: "introduction-to-psychology", title: "Introduction to Psychology", category: "pre-health-core" },
];

const COURSES = [
  ...REPLACED.map((course) => ({ ...course, replace: true })),
  ...CREATED.map((course) => ({ ...course, replace: false })),
];

// ---------------------------------------------------------------------------
// Note parsing
// ---------------------------------------------------------------------------

/** `## Heading` -> body, with the heading line removed and the body trimmed. */
const sectionsOf = (markdown) => {
  const matches = [...markdown.matchAll(/^##[ \t]+(.+)$/gm)];
  const result = new Map();
  matches.forEach((match, index) => {
    const body = markdown.slice(match.index + match[0].length, matches[index + 1]?.index ?? markdown.length);
    result.set(match[1].trim(), body.replace(/\r\n/g, "\n").trim());
  });
  return result;
};
const findSection = (sections, matches) => {
  for (const [heading, body] of sections) if (matches(heading)) return { heading, body };
  return { heading: "", body: "" };
};

/**
 * A field fed by a primary heading plus an optional secondary one. The primary
 * keeps the lead so a note carrying both reads as it always did; the secondary
 * is appended under its own `###` heading rather than discarded.
 */
const combineSections = (sections, isPrimary, isSecondary) => {
  const primary = findSection(sections, isPrimary);
  const secondary = findSection(sections, isSecondary);
  if (!primary.body) return secondary.body;
  if (!secondary.body || secondary.heading === primary.heading) return primary.body;
  return `${primary.body}\n\n### ${secondary.heading}\n\n${secondary.body}`;
};
const endsWith = (suffix) => (heading) => heading.endsWith(suffix);
const equals = (name) => (heading) => heading === name;

/** Fixed headings the map consumes; the suffix-matched ones are handled apart. */
const MAPPED_HEADINGS = new Set([
  "Quick Answer", "Learning Objectives", "Key Terms", "Core Concepts", "How It Works",
  "High-Yield Points", "Common Confusions", "Memory Aid", "ELI-10 Explanation",
  "Topic Recap", "Knowledge Check", "Answers and Rationales", "Equations and Calculations",
]);
const metadataValue = (markdown, label) => markdown
  .match(new RegExp(`^>[ \\t]*\\*{0,2}${label}:\\*{0,2}[ \\t]*(.+?)[ \\t]*$`, "m"))?.[1] ?? "";

const noteFilesIn = (directory) => walk(path.join(directory, "docs"))
  .filter((filePath) => filePath.endsWith(".md") && !["index.md", "README.md"].includes(path.basename(filePath)))
  .sort();

function parseNote(filePath, collection) {
  const markdown = readText(filePath).replace(/\r\n/g, "\n");
  const heading = markdown.match(/^#[ \t]+(.+)$/m)?.[1]?.trim();
  if (!heading) { fail(`${portable(filePath)}: no level-1 heading`); return null; }
  const numbered = heading.match(/^(\d+)[.)][ \t]*(.+)$/);
  if (!numbered) { fail(`${portable(filePath)}: heading "${heading}" carries no leading number`); return null; }
  const title = numbered[2].trim();
  const sections = sectionsOf(markdown);
  const body = (name) => sections.get(name) ?? "";
  const quickReview = [
    ["Topic Recap", body("Topic Recap")],
    ["Knowledge Check", body("Knowledge Check")],
    ["Answers and Rationales", body("Answers and Rationales")],
  ].filter(([, text]) => text).map(([label, text]) => `### ${label}\n\n${text}`).join("\n\n");

  for (const required of ["Quick Answer", "Learning Objectives", "Core Concepts", "ELI-10 Explanation"]) {
    if (!body(required)) fail(`${portable(filePath)}: missing or empty "${required}"`);
  }

  const unmapped = [...sections.keys()].filter((heading) => !MAPPED_HEADINGS.has(heading)
    && !heading.endsWith("Connection") && !heading.endsWith("Foundation") && !heading.endsWith("Walkthrough"));

  return {
    order: Number(numbered[1]),
    title,
    slug: slugify(title),
    stem: path.basename(filePath, ".md"),
    topicType: metadataValue(markdown, "Topic Type"),
    sourceFile: portable(filePath),
    unmapped,
    // What the primary heading alone would have yielded, so the run can report
    // exactly what the secondary headings recovered.
    whyItMattersPrimary: findSection(sections, endsWith("Connection")).body,
    workedExamplesPrimary: findSection(sections, endsWith("Walkthrough")).body,
    sections: {
      overview: body("Quick Answer"),
      whyItMatters: combineSections(sections, endsWith("Connection"), endsWith("Foundation")),
      learningObjectives: body("Learning Objectives"),
      keyTerms: body("Key Terms"),
      collegeNotes: body("Core Concepts"),
      howItWorks: body("How It Works"),
      comparisons: "",
      highYield: body("High-Yield Points"),
      commonConfusions: body("Common Confusions"),
      memoryAids: body("Memory Aid"),
      eli10: body("ELI-10 Explanation"),
      quickReview,
      workedExamples: combineSections(sections, endsWith("Walkthrough"), equals("Equations and Calculations")),
      references: [],
    },
    provenance: {
      sourceCollection: collection,
      sourceFile: portable(filePath),
      importedWithoutRewriting: true,
      importBatch: IMPORT_BATCH,
    },
    sourceSnapshotMarkdown: markdown,
  };
}

// ---------------------------------------------------------------------------
// Unit grouping
// ---------------------------------------------------------------------------

/** `### Unit N - Title` headings in docs/index.md, with the notes beneath them. */
function unitsFromIndex(directory, notes) {
  const indexPath = path.join(directory, "docs", "index.md");
  if (!exists(indexPath)) return null;
  const docsRoot = path.join(directory, "docs");
  const byFile = new Map(notes.map((note) => [path.resolve(notesRoot, note.sourceFile), note]));
  const groups = [];
  let current = null;
  for (const line of readText(indexPath).split(/\r?\n/)) {
    const heading = line.match(/^###[ \t]+Unit[ \t]+\d+[ \t]*[–—-][ \t]*(.+)$/);
    if (heading) { current = { title: heading[1].trim(), notes: [] }; groups.push(current); continue; }
    const link = line.match(/^[-*][ \t]+\[[^\]]*\]\(([^)]+)\)/);
    if (!link || !current) continue;
    const note = byFile.get(path.resolve(docsRoot, link[1].split("#")[0]));
    if (note) current.notes.push(note);
  }
  const grouped = groups.filter((group) => group.notes.length);
  if (!grouped.length) return null;
  const covered = new Set(grouped.flatMap((group) => group.notes.map((note) => note.sourceFile)));
  if (covered.size !== notes.length) return null;
  return grouped;
}

/** `**Topic Type:**` values in first-appearance order. */
function unitsFromTopicType(notes) {
  const groups = new Map();
  for (const note of notes) {
    if (!note.topicType) return null;
    if (!groups.has(note.topicType)) groups.set(note.topicType, { title: note.topicType, notes: [] });
    groups.get(note.topicType).notes.push(note);
  }
  return [...groups.values()];
}

function buildUnits(course, notes) {
  const directory = path.join(notesRoot, course.directory);
  const groups = unitsFromIndex(directory, notes)
    ?? unitsFromTopicType(notes)
    ?? [{ title: "Core topics", notes }];
  const usedUnitSlugs = new Set();
  return groups.map((group, index) => {
    let unitSlug = slugify(group.title) || "core-topics";
    for (let suffix = 2; usedUnitSlugs.has(unitSlug); suffix += 1) unitSlug = `${slugify(group.title)}-${suffix}`;
    usedUnitSlugs.add(unitSlug);
    const usedTopicSlugs = new Set();
    const topics = group.notes.map((note) => {
      let topicSlug = note.slug || `topic-${note.order}`;
      for (let suffix = 2; usedTopicSlugs.has(topicSlug); suffix += 1) topicSlug = `${note.slug}-${suffix}`;
      usedTopicSlugs.add(topicSlug);
      return { ...note, slug: topicSlug };
    });
    return { slug: unitSlug, title: group.title, order: index + 1, topics };
  });
}

// ---------------------------------------------------------------------------
// Old-topic to new-topic title matching
// ---------------------------------------------------------------------------

const STOP_WORDS = new Set(["a", "an", "the", "and", "or", "of", "in", "on", "for", "to", "with", "its", "their", "vs", "as", "at", "by", "from", "into", "is", "are", "s"]);
const normaliseTitle = (title) => String(title ?? "").toLowerCase()
  .replace(/^\s*\d+\s*[.)]\s*/, "")
  .replace(/[^a-z0-9]+/g, " ")
  .trim();
const tokensOf = (title) => new Set(normaliseTitle(title).split(" ").filter((word) => word && !STOP_WORDS.has(word)));
const jaccard = (left, right) => {
  if (!left.size || !right.size) return 0;
  let shared = 0;
  for (const token of left) if (right.has(token)) shared += 1;
  return shared / (left.size + right.size - shared);
};

/** old topic id -> best new topic id, only where the score clears the bar. */
function buildTopicRemap(oldTopics, newTopics) {
  const candidates = newTopics.map((topic) => ({ id: topic.id, tokens: tokensOf(topic.title) }));
  const remap = new Map();
  const scores = [];
  for (const oldTopic of oldTopics) {
    const tokens = tokensOf(oldTopic.title);
    let winner = null;
    for (const candidate of candidates) {
      const score = jaccard(tokens, candidate.tokens);
      if (!winner || score > winner.score) winner = { score, id: candidate.id };
    }
    scores.push({ id: oldTopic.id, title: oldTopic.title, score: winner?.score ?? 0 });
    if (winner && winner.score >= MATCH_THRESHOLD) remap.set(oldTopic.id, winner.id);
  }
  return { remap, scores };
}

// ---------------------------------------------------------------------------
// Import
// ---------------------------------------------------------------------------

const MUTABLE_QUESTION_FIELDS = new Set(["mappedCanonicalTopicIds", "mappingScope"]);
const questionFingerprint = (question) => JSON.stringify(Object.fromEntries(
  Object.entries(question).filter(([key]) => !MUTABLE_QUESTION_FIELDS.has(key)),
));
const stripSnapshot = ({ sourceSnapshotMarkdown: _snapshot, ...rest }) => rest;

const report = [];
const discardedHeadings = new Map();
let importedTopics = 0;

for (const course of COURSES) {
  const directory = path.join(notesRoot, course.directory);
  if (!exists(directory)) { fail(`${course.slug}: source library ${course.directory} not found`); continue; }
  const collection = `need-review-${course.directory.replace(/-study-notes$/, "")}`;
  const notes = noteFilesIn(directory).map((filePath) => parseNote(filePath, collection)).filter(Boolean);
  if (!notes.length) { fail(`${course.slug}: no topic notes found in ${course.directory}`); continue; }

  const sourceDirectory = path.join(sourceSubjectsRoot, course.slug);
  const clientDirectory = path.join(clientSubjectsRoot, course.slug);
  const subjectPath = path.join(sourceDirectory, "subject.json");
  const bankPath = path.join(sourceDirectory, "questions.json");
  if (course.replace && !exists(subjectPath)) { fail(`${course.slug}: expected an existing course to replace`); continue; }

  const previousSubject = exists(subjectPath) ? readJson(subjectPath) : null;
  const previousBank = exists(bankPath) ? readJson(bankPath) : { questions: [], subjectWideQuestions: [], deferred: [] };
  const oldTopics = (previousSubject?.units ?? []).flatMap((unit) => unit.topics ?? []);
  const incoming = [
    ...(previousBank.questions ?? []),
    ...(previousBank.subjectWideQuestions ?? []),
    ...(previousBank.deferred ?? []),
  ];
  const incomingIds = incoming.map((question) => question.id);
  const incomingFingerprints = new Map(incoming.map((question) => [question.id, questionFingerprint(question)]));

  // Units and topics.
  const units = buildUnits(course, notes);
  const subjectId = `subject:${course.slug}`;
  const subjectTitle = previousSubject?.subject?.title ?? course.title;
  const bundles = [];
  for (const unit of units) {
    unit.id = `unit:${course.slug}:${unit.slug}`;
    for (const topic of unit.topics) {
      topic.id = `topic:${course.slug}:${unit.slug}:${topic.slug}`;
      topic.bundlePath = `content-v2/subjects/${course.slug}/topics/${unit.slug}/${topic.slug}.json`;
      bundles.push({
        schemaVersion: "2.0.0",
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
        subject: { id: subjectId, slug: course.slug, title: subjectTitle },
        unit: { id: unit.id, slug: unit.slug, title: unit.title, order: unit.order },
        order: topic.order,
        status: "final",
        sections: topic.sections,
        availability: null,
        aliases: [
          { value: topic.slug, kind: "canonical_slug" },
          { value: topic.stem, kind: "source_file_stem", source_id: collection },
        ],
        authority: {},
        provenance: topic.provenance,
        sourceSnapshotMarkdown: topic.sourceSnapshotMarkdown,
      });
    }
  }

  // Re-point the questions that pointed at the topics being replaced.
  const newTopics = bundles.map((bundle) => ({ id: bundle.id, title: bundle.title }));
  const { remap, scores } = buildTopicRemap(oldTopics, newTopics);
  const topicMapped = [];
  const subjectWide = [];
  let reMapped = 0;
  let demoted = 0;
  for (const question of previousBank.questions ?? []) {
    const scope = question.mappingScope;
    const pointers = question.mappedCanonicalTopicIds ?? [];
    const resolved = pointers.map((id) => remap.get(id)).filter(Boolean);
    if ((scope === "exact" || scope === "broad-source-topic") && pointers.length && resolved.length === pointers.length) {
      topicMapped.push({ ...question, mappedCanonicalTopicIds: [...new Set(resolved)], mappingScope: scope });
      reMapped += 1;
    } else {
      subjectWide.push({ ...question, mappedCanonicalTopicIds: [], mappingScope: "subject-wide-overlay" });
      demoted += 1;
    }
  }
  for (const question of previousBank.subjectWideQuestions ?? []) subjectWide.push(question);
  const bank = {
    schemaVersion: "2.0.0",
    subjectSlug: course.slug,
    questions: topicMapped,
    subjectWideQuestions: subjectWide,
    deferred: previousBank.deferred ?? [],
  };

  // Nothing may be lost, gained or altered on the way through.
  const outgoing = [...bank.questions, ...bank.subjectWideQuestions, ...bank.deferred];
  const outgoingIds = outgoing.map((question) => question.id);
  if (outgoingIds.length !== incomingIds.length) fail(`${course.slug}: ${incomingIds.length} questions in, ${outgoingIds.length} out`);
  const outgoingSet = new Set(outgoingIds);
  const incomingSet = new Set(incomingIds);
  for (const id of incomingSet) if (!outgoingSet.has(id)) fail(`${course.slug}: question ${id} was dropped`);
  for (const id of outgoingSet) if (!incomingSet.has(id)) fail(`${course.slug}: question ${id} appeared from nowhere`);
  for (const question of outgoing) {
    if (incomingFingerprints.get(question.id) !== questionFingerprint(question)) fail(`${course.slug}: question ${question.id} was altered`);
  }

  // Availability depends on the finished bank.
  const summaries = new Map();
  for (const bundle of bundles) {
    const mapped = bank.questions.filter((question) => question.mappedCanonicalTopicIds.includes(bundle.id)).length;
    bundle.availability = {
      collegeNotes: Boolean(bundle.sections.collegeNotes.trim()),
      eli10: Boolean(bundle.sections.eli10.trim()),
      highYield: Boolean(bundle.sections.highYield.trim()),
      quickReview: Boolean(bundle.sections.quickReview.trim()),
      workedExamples: Boolean(bundle.sections.workedExamples.trim()),
      references: bundle.sections.references.length > 0,
      exactQuestions: mapped,
    };
    summaries.set(bundle.id, { mappedQuestionCount: mapped, availability: bundle.availability });
  }

  // Write both tiers. The topic trees are cleared first so a re-run cannot
  // leave a topic behind that no longer exists.
  for (const directoryPath of [path.join(sourceDirectory, "topics"), path.join(clientDirectory, "topics")]) {
    if (exists(directoryPath)) fs.rmSync(directoryPath, { recursive: true });
  }
  for (const bundle of bundles) {
    writeJson(path.join(root, `content-v2/subjects/${course.slug}/topics/${bundle.unit.slug}/${bundle.slug}.json`), bundle);
    writeJson(path.join(clientDirectory, "topics", bundle.unit.slug, `${bundle.slug}.json`), { ...bundle, sourceSnapshotMarkdown: "" });
  }
  importedTopics += bundles.length;

  const unitRecords = units.map((unit) => ({
    id: unit.id,
    slug: unit.slug,
    title: unit.title,
    order: unit.order,
    aliases: [{ value: unit.slug, kind: "canonical_slug" }],
    topics: unit.topics.map((topic) => ({
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
      order: topic.order,
      status: "final",
      bundlePath: topic.bundlePath,
      mappedQuestionCount: summaries.get(topic.id).mappedQuestionCount,
      availability: summaries.get(topic.id).availability,
    })),
  }));
  const subjectBundle = {
    schemaVersion: "2.0.0",
    subject: previousSubject?.subject ?? {
      id: subjectId,
      slug: course.slug,
      title: course.title,
      aliases: [
        { value: course.slug, kind: "canonical_slug" },
        { value: course.directory, kind: "source_directory", source_id: collection },
      ],
      status: "final",
      category: course.category,
    },
    units: unitRecords,
    statistics: {
      unitCount: unitRecords.length,
      topicCount: bundles.length,
      teachingTopicCount: bundles.filter((bundle) => bundle.availability.collegeNotes).length,
      eli10TopicCount: bundles.filter((bundle) => bundle.availability.eli10).length,
      highYieldTopicCount: bundles.filter((bundle) => bundle.availability.highYield).length,
      referencedTopicCount: bundles.filter((bundle) => bundle.availability.references).length,
      exactOrMappedQuestionCount: bank.questions.length,
      subjectWideQuestionCount: bank.subjectWideQuestions.length,
      uniqueQuestionCount: bank.questions.length + bank.subjectWideQuestions.length,
      citationReviewRequiredCount: [...bank.questions, ...bank.subjectWideQuestions].filter((question) => question.citationReviewRequired).length,
    },
    provenance: previousSubject?.provenance ?? {
      sourceCollection: collection,
      sourceRoot: course.directory,
      importBatch: IMPORT_BATCH,
      importedWithoutRewriting: true,
    },
  };
  writeJson(subjectPath, subjectBundle);
  writeJson(path.join(clientDirectory, "subject.json"), {
    ...subjectBundle,
    subject: { ...subjectBundle.subject, aliases: [] },
    units: unitRecords.map((unit) => ({ ...unit, aliases: [] })),
  });
  writeJson(bankPath, bank);
  writeJson(path.join(clientDirectory, "questions.json"), {
    ...bank,
    questions: bank.questions.map(stripSnapshot),
    subjectWideQuestions: bank.subjectWideQuestions.map(stripSnapshot),
    deferred: bank.deferred.map(stripSnapshot),
  });

  report.push({
    slug: course.slug,
    created: !course.replace,
    topicsBefore: oldTopics.length,
    topicsAfter: bundles.length,
    unitsBefore: previousSubject?.units?.length ?? 0,
    unitsAfter: unitRecords.length,
    questionsBefore: incomingIds.length,
    questionsAfter: outgoingIds.length,
    exactBefore: (previousBank.questions ?? []).length,
    exactAfter: bank.questions.length,
    subjectWideBefore: (previousBank.subjectWideQuestions ?? []).length,
    subjectWideAfter: bank.subjectWideQuestions.length,
    reMapped,
    demoted,
    oldTopicsMatched: remap.size,
    oldTopicsTotal: oldTopics.length,
    bestUnmatchedScore: Math.max(0, ...scores.filter((entry) => !remap.has(entry.id)).map((entry) => entry.score)),
    emptyWhyItMatters: notes.filter((note) => !note.sections.whyItMatters).length,
    emptyWorkedExamples: notes.filter((note) => !note.sections.workedExamples).length,
    whyItMattersGained: notes.filter((note) => !note.whyItMattersPrimary && note.sections.whyItMatters).length,
    whyItMattersAppended: notes.filter((note) => note.whyItMattersPrimary && note.sections.whyItMatters !== note.whyItMattersPrimary).length,
    workedExamplesGained: notes.filter((note) => !note.workedExamplesPrimary && note.sections.workedExamples).length,
    workedExamplesAppended: notes.filter((note) => note.workedExamplesPrimary && note.sections.workedExamples !== note.workedExamplesPrimary).length,
  });
  for (const note of notes) {
    for (const heading of note.unmapped) {
      if (!discardedHeadings.has(heading)) discardedHeadings.set(heading, { notes: 0, courses: new Set() });
      const entry = discardedHeadings.get(heading);
      entry.notes += 1;
      entry.courses.add(course.slug);
    }
  }
}

// ---------------------------------------------------------------------------
// Catalogue, search index and build report, rebuilt from what is on disk
// ---------------------------------------------------------------------------

const catalog = readJson(path.join(contentRoot, "catalog.json"));
const webSubjectSlugs = new Set(readJson(path.join(root, "data", "subjects.json")).map((subject) => subject.slug));
for (const course of CREATED) {
  if (catalog.subjects.some((subject) => subject.slug === course.slug)) continue;
  const subjectPath = path.join(sourceSubjectsRoot, course.slug, "subject.json");
  if (!exists(subjectPath)) continue;
  const created = readJson(subjectPath).subject;
  catalog.subjects.push({
    id: created.id,
    slug: created.slug,
    title: created.title,
    aliases: created.aliases,
    status: created.status,
    category: created.category,
    legacySlugs: webSubjectSlugs.has(course.slug) ? [course.slug] : [],
    statistics: {},
    href: `/learn/${course.slug}`,
  });
}

const searchIndex = [];
const globalQuestionIds = new Set();
const totals = { subjects: 0, units: 0, topics: 0, teachingTopics: 0, eli10Topics: 0, referencedTopics: 0, uniqueQuestionsAcrossCatalog: 0, questionPlacements: 0 };
for (const summary of catalog.subjects) {
  const subject = readJson(path.join(sourceSubjectsRoot, summary.slug, "subject.json"));
  const bank = readJson(path.join(sourceSubjectsRoot, summary.slug, "questions.json"));
  const exact = bank.questions ?? [];
  const subjectWide = bank.subjectWideQuestions ?? [];
  const all = [...exact, ...subjectWide];
  let teaching = 0;
  let eli10 = 0;
  let highYield = 0;
  let referenced = 0;
  let topicCount = 0;
  for (const unit of subject.units ?? []) {
    for (const topic of unit.topics ?? []) {
      topicCount += 1;
      const bundle = readJson(path.join(root, topic.bundlePath));
      if (bundle.availability?.collegeNotes) teaching += 1;
      if (bundle.availability?.eli10) eli10 += 1;
      if (bundle.availability?.highYield) highYield += 1;
      if (bundle.availability?.references) referenced += 1;
      searchIndex.push({
        id: topic.id,
        subjectSlug: summary.slug,
        subjectTitle: subject.subject.title,
        unitSlug: unit.slug,
        unitTitle: unit.title,
        topicSlug: topic.slug,
        topicTitle: topic.title,
        aliases: (bundle.aliases ?? []).map((alias) => alias.value).filter((value) => typeof value === "string"),
        availability: topic.availability,
        href: `/learn/${summary.slug}/${unit.slug}/${topic.slug}`,
      });
    }
  }
  const statistics = {
    unitCount: (subject.units ?? []).length,
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
  // Courses this import did not touch keep their published statistics; a
  // recomputation that disagrees with them is a fault, not a silent correction.
  const touched = COURSES.some((course) => course.slug === summary.slug);
  if (!touched) {
    for (const [key, value] of Object.entries(statistics)) {
      if (subject.statistics?.[key] !== value) fail(`${summary.slug}: untouched statistic ${key} is ${subject.statistics?.[key]}, recomputed ${value}`);
    }
  }
  // Identity fields are left alone; three catalogue entries deliberately carry
  // no alias list even though their subject bundle has one.
  summary.title = subject.subject.title;
  summary.category = subject.subject.category;
  summary.statistics = statistics;
  summary.href = `/learn/${summary.slug}`;
  totals.subjects += 1;
  totals.units += statistics.unitCount;
  totals.topics += statistics.topicCount;
  totals.teachingTopics += statistics.teachingTopicCount;
  totals.eli10Topics += statistics.eli10TopicCount;
  totals.referencedTopics += statistics.referencedTopicCount;
  totals.questionPlacements += statistics.uniqueQuestionCount;
  for (const question of all) globalQuestionIds.add(question.id);
}
totals.uniqueQuestionsAcrossCatalog = globalQuestionIds.size;
catalog.totals = totals;
catalog.generatedOn = new Date().toISOString().slice(0, 10);

writeJson(path.join(contentRoot, "catalog.json"), catalog);
writeJson(path.join(contentRoot, "client", "catalog.json"), catalog);
writeJson(path.join(contentRoot, "client", "search-index.json"), searchIndex);
writeJson(path.join(contentRoot, "build-report.json"), {
  generatedOn: catalog.generatedOn,
  valid: errors.length === 0,
  totals,
  notes: [
    `${totals.subjects} canonical subjects are generated.`,
    "Teaching and question-only topics retain their real availability.",
    "Unreviewed app and A&P II pack mappings remain subject-wide overlays.",
    "Imported generated-subject banks and study hubs (batch 2026-08-14-generated-subjects).",
    `Imported ${importedTopics} Need_Review study notes into ${COURSES.length} courses, ${CREATED.length} of them new (batch ${IMPORT_BATCH}).`,
    "Need_Review notes carry no sources section, so every topic imported in that batch reports references: [].",
    `Question mappings orphaned by the replaced topic sets were re-pointed at a Jaccard title-match threshold of ${MATCH_THRESHOLD}; the rest kept every field and moved to the subject-wide overlay.`,
  ],
});

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

const totalIn = report.reduce((sum, row) => sum + row.questionsBefore, 0);
const totalOut = report.reduce((sum, row) => sum + row.questionsAfter, 0);
if (totalIn !== totalOut) fail(`Across the run ${totalIn} questions went in and ${totalOut} came out`);

const columns = ["subject", "units", "topics in", "topics out", "questions in", "questions out", "exact in", "exact out", "wide in", "wide out"];
console.log(columns.map((label, index) => (index ? label.padStart(12) : label.padEnd(34))).join(""));
for (const row of report) {
  console.log([
    `${row.slug}${row.created ? " (new)" : ""}`.padEnd(34),
    String(row.unitsAfter).padStart(12),
    String(row.topicsBefore).padStart(12),
    String(row.topicsAfter).padStart(12),
    String(row.questionsBefore).padStart(12),
    String(row.questionsAfter).padStart(12),
    String(row.exactBefore).padStart(12),
    String(row.exactAfter).padStart(12),
    String(row.subjectWideBefore).padStart(12),
    String(row.subjectWideAfter).padStart(12),
  ].join(""));
}
console.log(`TOTAL${"".padEnd(29)}${String(totals.units).padStart(12)}${"".padStart(12)}${String(importedTopics).padStart(12)}${String(totalIn).padStart(12)}${String(totalOut).padStart(12)}`);
for (const row of report.filter((entry) => entry.oldTopicsTotal)) {
  console.log(`REMAP ${row.slug}: ${row.oldTopicsMatched}/${row.oldTopicsTotal} old topics matched at >= ${MATCH_THRESHOLD}`
    + ` (best rejected score ${row.bestUnmatchedScore.toFixed(3)});`
    + ` ${row.reMapped} questions stayed topic-mapped, ${row.demoted} became subject-wide.`);
}
const sum = (key) => report.reduce((total, row) => total + row[key], 0);
console.log(`whyItMatters: ${importedTopics - sum("emptyWhyItMatters")}/${importedTopics} topics non-empty`
  + ` (${sum("whyItMattersGained")} recovered from a "...Foundation" heading,`
  + ` ${sum("whyItMattersAppended")} appended beneath a "...Connection" heading); ${sum("emptyWhyItMatters")} still empty.`);
console.log(`workedExamples: ${importedTopics - sum("emptyWorkedExamples")}/${importedTopics} topics non-empty`
  + ` (${sum("workedExamplesGained")} recovered from "Equations and Calculations",`
  + ` ${sum("workedExamplesAppended")} appended beneath a "...Walkthrough" heading); ${sum("emptyWorkedExamples")} still empty.`);
if (discardedHeadings.size) {
  console.log("Headings still discarded (text retained in sourceSnapshotMarkdown):");
  for (const [heading, entry] of [...discardedHeadings.entries()].sort((left, right) => right[1].notes - left[1].notes)) {
    console.log(`- "${heading}": ${entry.notes} note(s) across ${entry.courses.size} course(s)`);
  }
} else {
  console.log("Every source heading is routed to a schema field.");
}
console.log(`Catalogue: ${totals.subjects} subjects; ${totals.units} units; ${totals.topics} topics; ${totals.uniqueQuestionsAcrossCatalog} unique questions; ${totals.questionPlacements} placements.`);
console.log(`NEED_REVIEW IMPORT: ${errors.length ? "FAIL" : "PASS"} - ${importedTopics} topics imported, ${totalOut}/${totalIn} questions preserved.`);
console.log(`Errors: ${errors.length}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
