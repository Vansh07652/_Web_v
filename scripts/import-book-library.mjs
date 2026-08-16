#!/usr/bin/env node
/**
 * Publishes the health-science book manuscripts as reading courses: one course
 * per series, one unit per book, one topic per chapter.
 *
 * The manuscripts are the finished text of the author's own published books,
 * so nothing here is rewritten — a chapter becomes a topic page with the
 * chapter's own words. Front matter is not study content and is skipped:
 * copyright pages, trademark notices, tables of contents, "about the author",
 * and the like.
 *
 * A chapter shorter than MIN_WORDS is skipped too. Those are section dividers
 * and half-page interstitials; publishing them would pad the topic count with
 * pages that teach nothing.
 *
 * Re-running rebuilds each course from the manuscripts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");
const booksRoot = path.resolve(repoRoot, "..", "kindle-book-library", "books", "manuscripts");

const IMPORT_BATCH = "2026-08-15-book-library";
const MIN_WORDS = 250;
const SKIP = /(front-matter|copyright|legal-notice|dedication|disclaimer|trademark|table-of-contents|about-the-author|colophon|also-by|acknowledg|index|back-matter|title-page)/i;
/**
 * Only the book text is published. Each manuscript also carries an
 * `originals/` tree of production scaffolding — series bible, chapter
 * template, outlines, image prompts, KDP metadata, upload checklists — and the
 * first run of this script put all of it on the site as study topics, next to
 * placeholder pages literally titled "[Chapter Title]".
 */
const CHAPTERS_ONLY = /(^|\/)chapters\//;
const PLACEHOLDER_TITLE = /^\[.*\]$/;

/** course slug -> title, category, and the books that make up its units. */
// Switched off at the owner's request: the book-derived courses were removed
// from the site on 2026-08-15. The configuration is kept so the import can be
// repeated deliberately, but an accidental run publishes nothing.
const ENABLED = false;
const COURSES = [
  {
    slug: "sleep-medicine-library",
    title: "Sleep Medicine Library",
    category: "allied-health",
    summary: "The sleep medicine books, chapter by chapter: how sleep is measured, scored and treated, written for people learning the field rather than for people who already know it.",
    books: [
      ["sleep-medicine-vol-01-foundations", "Foundations of Sleep Medicine"],
      ["sleep-book-1", "Sleep Book I"],
      ["sleep-book-2", "Sleep Book II"],
      ["dr-drowsey-01-sleep-study-scoring", "Sleep Study Scoring"],
    ],
  },
  {
    slug: "rpsgt-exam-prep",
    title: "RPSGT Exam Preparation",
    category: "allied-health",
    summary: "The five RPSGT domains in full, plus PAP titration and oxygen and alternative therapies — the reading that sits behind the question bank in Sleep Technology.",
    books: [
      ["eli-rpsgt-01-clinical-foundations", "Domain 1 — Clinical Foundations"],
      ["eli-rpsgt-02-setup-and-instrumentation", "Domain 2 — Setup and Instrumentation"],
      ["eli-rpsgt-03-study-performance", "Domain 3 — Study Performance"],
      ["eli-rpsgt-04-scoring-and-reporting", "Domain 4 — Scoring and Reporting"],
      ["eli-rpsgt-05-treatment-and-intervention", "Domain 5 — Treatment and Intervention"],
      ["eli-pap-titration", "PAP Titration"],
      ["eli-oxygen-alternative-sleep-therapies", "Oxygen and Alternative Therapies"],
    ],
  },
  {
    slug: "eli-anatomy-physiology",
    title: "ELI Explains: Anatomy & Physiology",
    category: "pre-health-core",
    summary: "Anatomy and physiology explained twice over — the full two-book treatment, in the plain-language style the rest of the site's ELI-10 sections use.",
    books: [
      ["eli-anatomy-physiology-1", "Anatomy & Physiology I"],
      ["eli-anatomy-physiology-2", "Anatomy & Physiology II"],
    ],
  },
  {
    slug: "nclex-foundations",
    title: "NCLEX Foundations",
    category: "healthcare-foundations",
    summary: "The five NCLEX client-need areas, written by the site's author from open educational nursing sources: each section's questions, its answer key, and the plain-language explanation of why the right answer is right. Educational material, not official NCLEX content.",
    books: [
      ["nclex-01-safe-and-effective-care-environment", "Safe and Effective Care Environment"],
      ["nclex-02-pharmacology-and-basic-care", "Pharmacology and Basic Care"],
      ["nclex-03-risk-and-adaptation", "Risk Potential and Physiological Adaptation"],
      ["nclex-04-health-and-heart", "Health Promotion and Cardiac Care"],
      ["nclex-05-clinical-judgment-and-ngn", "Clinical Judgment and the Next Generation NCLEX"],
    ],
  },
  {
    slug: "eli-biology",
    title: "ELI Explains: Biology",
    category: "pre-health-core",
    summary: "General biology across two books, from molecules to ecosystems, written to be read rather than skimmed.",
    books: [
      ["eli-biology-part-1", "Biology, Part I"],
      ["eli-biology-part-2", "Biology, Part II"],
    ],
  },
];

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const exists = (filePath) => fs.existsSync(filePath);
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
const titleCase = (value) => value.replace(/[-_]+/g, " ").replace(/\b\w/g, (character) => character.toUpperCase());

const report = { courses: [], skippedFrontMatter: 0, skippedProduction: 0, skippedPlaceholder: 0, skippedShort: 0, orphansRemoved: 0, missingBooks: [] };

for (const course of (ENABLED ? COURSES : [])) {
  const units = [];
  let topicCount = 0; let teaching = 0; let eli10Count = 0; let referenced = 0;
  const usedTopicSlugs = new Set();

  course.books.forEach(([bookDir, bookTitle], bookIndex) => {
    const root = path.join(booksRoot, bookDir);
    if (!exists(root)) { report.missingBooks.push(bookDir); return; }
    const chapters = [];
    const files = fs.readdirSync(root, { recursive: true })
      .filter((name) => typeof name === "string" && name.endsWith(".md"))
      .sort();

    for (const relative of files) {
      const base = path.basename(relative, ".md");
      if (!CHAPTERS_ONLY.test(relative)) { report.skippedProduction += 1; continue; }
      if (SKIP.test(base)) { report.skippedFrontMatter += 1; continue; }
      const markdown = clean(fs.readFileSync(path.join(root, relative), "utf8"));
      if (markdown.split(/\s+/).length < MIN_WORDS) { report.skippedShort += 1; continue; }
      const heading = markdown.match(/^#\s+(.+)$/m)?.[1];
      const title = clean(heading ?? titleCase(base.replace(/^\d+[-_]?/, "")));
      if (PLACEHOLDER_TITLE.test(title)) { report.skippedPlaceholder += 1; continue; }
      const body = clean(markdown.replace(/^#\s+.+$/m, ""));
      let slug = slugify(title) || slugify(base);
      while (usedTopicSlugs.has(`${bookIndex}:${slug}`)) slug = `${slug}-2`;
      usedTopicSlugs.add(`${bookIndex}:${slug}`);
      chapters.push({ slug, title, body, sourceFile: `kindle-book-library/books/manuscripts/${bookDir}/${relative}`, snapshot: markdown.slice(0, 40000) });
    }
    if (!chapters.length) return;

    const unitSlug = slugify(bookDir);
    const unitId = `unit:${course.slug}:${unitSlug}`;
    const unitTopics = [];
    chapters.forEach((chapter, index) => {
      const id = `topic:${course.slug}:${unitSlug}:${chapter.slug}`;
      const sections = {
        overview: clean(chapter.body.split(/\n{2,}/).find((block) => !block.startsWith("#") && !block.startsWith(">") && !block.startsWith("|")) ?? "").slice(0, 900),
        whyItMatters: "", learningObjectives: "", keyTerms: "",
        collegeNotes: chapter.body,
        howItWorks: "", comparisons: "", highYield: "", commonConfusions: "", memoryAids: "",
        eli10: "", quickReview: "", workedExamples: "", references: [],
      };
      const availability = {
        collegeNotes: Boolean(sections.collegeNotes.trim()),
        eli10: false, highYield: false, quickReview: false, workedExamples: false,
        references: false, exactQuestions: 0,
      };
      const bundlePath = `content-v2/subjects/${course.slug}/topics/${unitSlug}/${chapter.slug}.json`;
      const bundle = {
        schemaVersion: "2.0.0",
        id, slug: chapter.slug, title: chapter.title,
        subject: { id: `subject:${course.slug}`, slug: course.slug, title: course.title },
        unit: { id: unitId, slug: unitSlug, title: bookTitle, order: bookIndex + 1 },
        order: index + 1,
        status: "final",
        sections, availability,
        aliases: [{ value: chapter.slug, kind: "canonical_slug" }],
        authority: { college_notes: [{ source_file: chapter.sourceFile }] },
        provenance: {
          sourceCollection: `book:${bookDir}`,
          sourceFile: chapter.sourceFile,
          importedWithoutRewriting: true,
          importBatch: IMPORT_BATCH,
        },
        sourceSnapshotMarkdown: chapter.snapshot,
      };
      writeJson(path.join(webRoot, bundlePath), bundle);
      writeJson(path.join(clientSubjectsRoot, course.slug, "topics", unitSlug, `${chapter.slug}.json`), { ...bundle, sourceSnapshotMarkdown: "" });
      unitTopics.push({ id, slug: chapter.slug, title: chapter.title, order: index + 1, status: "final", bundlePath, mappedQuestionCount: 0, availability });
      topicCount += 1;
      if (availability.collegeNotes) teaching += 1;
    });
    units.push({ id: unitId, slug: unitSlug, title: bookTitle, order: bookIndex + 1, topics: unitTopics });
  });

  const statistics = {
    unitCount: units.length, topicCount,
    teachingTopicCount: teaching, eli10TopicCount: eli10Count, highYieldTopicCount: 0,
    referencedTopicCount: referenced, exactOrMappedQuestionCount: 0, subjectWideQuestionCount: 0,
    uniqueQuestionCount: 0, citationReviewRequiredCount: 0,
  };
  const subjectBundle = {
    schemaVersion: "2.0.0",
    subject: { id: `subject:${course.slug}`, slug: course.slug, title: course.title, category: course.category, status: "final", summary: course.summary },
    statistics, units,
  };
  writeJson(path.join(sourceSubjectsRoot, course.slug, "subject.json"), subjectBundle);
  writeJson(path.join(clientSubjectsRoot, course.slug, "subject.json"), subjectBundle);
  const emptyBank = { schemaVersion: "2.0.0", subjectSlug: course.slug, questions: [], subjectWideQuestions: [] };
  writeJson(path.join(sourceSubjectsRoot, course.slug, "questions.json"), emptyBank);
  writeJson(path.join(clientSubjectsRoot, course.slug, "questions.json"), emptyBank);

  const catalog = readJson(path.join(contentRoot, "catalog.json"));
  const entry = {
    id: `subject:${course.slug}`, slug: course.slug, title: course.title,
    aliases: [{ value: course.slug, kind: "canonical_slug" }],
    status: "final", category: course.category, legacySlugs: [], statistics, href: `/learn/${course.slug}`,
  };
  const at = catalog.subjects.findIndex((summary) => summary.slug === course.slug);
  if (at >= 0) catalog.subjects[at] = entry; else catalog.subjects.push(entry);
  writeJson(path.join(contentRoot, "catalog.json"), catalog);

  // Anything under this course's topic tree that the run did not just write is
  // an orphan from a previous filter. Left in place it looks like content.
  const keep = new Set(units.flatMap((unit) => unit.topics.map((topic) => path.join(webRoot, topic.bundlePath))));
  for (const base of [path.join(sourceSubjectsRoot, course.slug, "topics"), path.join(clientSubjectsRoot, course.slug, "topics")]) {
    if (!exists(base)) continue;
    const isClient = base.startsWith(clientSubjectsRoot);
    for (const unitDir of fs.readdirSync(base)) {
      const unitPath = path.join(base, unitDir);
      if (!fs.statSync(unitPath).isDirectory()) continue;
      for (const file of fs.readdirSync(unitPath)) {
        const full = path.join(unitPath, file);
        const canonical = isClient
          ? path.join(webRoot, "content-v2", "subjects", course.slug, "topics", unitDir, file)
          : full;
        if (keep.has(canonical)) continue;
        // Moved, not deleted: the sandbox that runs this mounts the repository
        // without permission to unlink, and an EPERM here would abort a run
        // that has already written most of a course.
        const quarantine = path.join(repoRoot, "_to_delete", "orphan-topics", course.slug, unitDir);
        fs.mkdirSync(quarantine, { recursive: true });
        fs.renameSync(full, path.join(quarantine, `${isClient ? "client-" : ""}${file}`));
        report.orphansRemoved += 1;
      }
    }
  }

  report.courses.push({ slug: course.slug, units: units.length, topics: topicCount });
}

// ---------------------------------------------------------------------------
// Recompute catalogue totals and the search index once, at the end.
// ---------------------------------------------------------------------------

const catalog = readJson(path.join(contentRoot, "catalog.json"));
const searchIndex = [];
const totals = { subjects: 0, units: 0, topics: 0, teachingTopics: 0, eli10Topics: 0, referencedTopics: 0, uniqueQuestionsAcrossCatalog: 0, questionPlacements: 0 };
const globalIds = new Set();
for (const summary of catalog.subjects) {
  const bundle = readJson(path.join(sourceSubjectsRoot, summary.slug, "subject.json"));
  const bank = readJson(path.join(sourceSubjectsRoot, summary.slug, "questions.json"));
  summary.statistics = bundle.statistics;
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
        id: topic.id, subjectSlug: summary.slug, subjectTitle: bundle.subject.title,
        unitSlug: unit.slug, unitTitle: unit.title, topicSlug: topic.slug, topicTitle: topic.title,
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
const buildReport = readJson(path.join(contentRoot, "build-report.json"));
writeJson(path.join(contentRoot, "build-report.json"), { ...buildReport, generatedOn: catalog.generatedOn, totals });
writeJson(path.join(webRoot, "audit", "book-library-import.json"), { batch: IMPORT_BATCH, generatedOn: catalog.generatedOn, minWords: MIN_WORDS, report });

console.log("BOOK LIBRARY IMPORT");
for (const course of report.courses) console.log(`  ${course.slug}: ${course.units} books, ${course.topics} chapters`);
console.log(`  skipped production files: ${report.skippedProduction}`);
console.log(`  skipped front matter: ${report.skippedFrontMatter}`);
console.log(`  skipped placeholders: ${report.skippedPlaceholder}`);
console.log(`  orphans removed: ${report.orphansRemoved}`);
console.log(`  skipped under ${MIN_WORDS} words: ${report.skippedShort}`);
if (report.missingBooks.length) console.log(`  manuscripts not found: ${report.missingBooks.join(", ")}`);
console.log(`  catalogue totals: ${JSON.stringify(totals)}`);
