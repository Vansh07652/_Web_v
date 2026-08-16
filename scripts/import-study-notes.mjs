#!/usr/bin/env node
/**
 * Imports teaching notes from `generated-subjects/*-study-notes` into existing
 * courses as new topics.
 *
 *   organic-chemistry-1-2-study-notes  133 notes -> Organic Chemistry I and II
 *   microbiology-study-notes           100 notes -> Microbiology
 *
 * Both libraries' directory structure matches the target courses' unit
 * structure one-for-one, so each note file becomes a topic inside the unit its
 * directory maps to. Organic Chemistry II currently has three units with no
 * topics at all (aldehydes-ketones, carboxylic-acids-derivatives, amines);
 * those get filled here.
 *
 * BOILERPLATE DETECTION
 *
 * These files carry a fixed set of `##` headings, and several of them hold the
 * exact same paragraph in every file in the library — "Why It Matters",
 * "Quick Review" and "Common Confusions" are one body repeated 133 times, and
 * organic chemistry's "Mechanism / How It Works" has two bodies across 133
 * files. Publishing those would put identical text on every topic page.
 *
 * Rather than hard-code a list, this measures each heading across the library
 * and drops any whose body is shared by more than `BOILERPLATE_RATIO` of the
 * files that carry it. A section survives only if it was actually written per
 * topic. The result is reported, so what was dropped is visible rather than
 * silent.
 *
 * Nothing is overwritten: a note whose title matches a topic the course already
 * has is skipped, and existing topics are left exactly as they are.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const contentRoot = path.join(webRoot, "content-v2");
const sourceSubjectsRoot = path.join(contentRoot, "subjects");
const clientSubjectsRoot = path.join(contentRoot, "client", "subjects");

const IMPORT_BATCH = "2026-08-14-study-notes";
/** A heading kept only if fewer than this share of files repeat one body. */
const BOILERPLATE_RATIO = 0.5;

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const readText = (filePath) => fs.readFileSync(filePath, "utf8");
const writeJson = (filePath, value) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};
const exists = (filePath) => fs.existsSync(filePath);
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const walk = (directory) => (exists(directory)
  ? fs.readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => (entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]))
  : []);

/** Splits a note into `## Heading` -> body. */
function sections(markdown) {
  const result = new Map();
  const matches = [...markdown.matchAll(/^##\s+(.+)$/gm)];
  matches.forEach((match, index) => {
    const body = markdown.slice(match.index + match[0].length, matches[index + 1]?.index ?? markdown.length);
    result.set(match[1].trim(), clean(body));
  });
  return result;
}
const titleOf = (markdown, fallback) => clean(markdown.match(/^#\s+(.+)$/m)?.[1] ?? fallback);
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** Body text with the topic's own title removed, for template detection. */
const maskTitle = (body, topicTitle) => (topicTitle
  ? body.replace(new RegExp(escapeRegExp(topicTitle), "gi"), "<topic>")
  : body);

/** Sources sections are bullet lists; keep the text and any URL. */
const parseReferences = (body) => clean(body).split(/\n/)
  .map((line) => line.trim().replace(/^[-*]\s+/, ""))
  .filter(Boolean)
  .map((text) => {
    const url = text.match(/https?:\/\/[^\s)>\]]+/)?.[0]?.replace(/[.,;]+$/, "");
    const label = clean(text.replace(/https?:\/\/\S+/, "").replace(/[—–-]\s*$/, "").replace(/\(\s*\)/, ""));
    if (!label) return url ? { text: url, url } : null;
    return url ? { text: label, url } : { text: label };
  })
  .filter(Boolean)
  .slice(0, 12);

/**
 * Which headings in this library were actually written per topic. Returns the
 * kept set plus the dropped ones with the share that repeated, for reporting.
 */
function measureHeadings(files) {
  const bodies = new Map();
  for (const { markdown } of files) {
    const topicTitle = titleOf(markdown, "");
    for (const [heading, body] of sections(markdown)) {
      if (!bodies.has(heading)) bodies.set(heading, []);
      // Compare with the topic's own name masked out. Without this, a single
      // frame like "<Topic> belongs to the larger organic-chemistry pattern:
      // structure controls electron distribution..." counts as 133 distinct
      // bodies purely because the name differs, and sails through the check.
      bodies.get(heading).push(maskTitle(body, topicTitle));
    }
  }
  const kept = new Set();
  const dropped = [];
  for (const [heading, values] of bodies) {
    const counts = new Map();
    for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
    const commonest = Math.max(...counts.values());
    const share = commonest / values.length;
    if (share > BOILERPLATE_RATIO) dropped.push({ heading, files: values.length, repeatedShare: Number(share.toFixed(2)) });
    else kept.add(heading);
  }
  return { kept, dropped };
}

/** First matching heading from a list of candidates. */
const pick = (map, kept, ...candidates) => {
  for (const candidate of candidates) {
    const found = [...map.keys()].find((heading) => heading.toLowerCase() === candidate.toLowerCase());
    if (found && kept.has(found)) return map.get(found);
  }
  return "";
};

// ---------------------------------------------------------------------------

const LIBRARIES = [
  {
    directory: "generated-subjects/organic-chemistry-1-2-study-notes/notes",
    collection: "organic-chemistry-study-notes",
    // <source directory> -> [subject slug, unit slug]
    unitMap: {
      "organic-chemistry-1/01-structure-bonding-resonance": ["organic-chemistry-1", "structure-bonding-resonance"],
      "organic-chemistry-1/02-acids-and-bases": ["organic-chemistry-1", "acids-bases"],
      "organic-chemistry-1/03-alkanes-and-cycloalkanes": ["organic-chemistry-1", "alkanes-cycloalkanes"],
      "organic-chemistry-1/04-stereochemistry": ["organic-chemistry-1", "stereochemistry"],
      "organic-chemistry-1/05-reactivity-and-kinetics": ["organic-chemistry-1", "reactivity-kinetics"],
      "organic-chemistry-1/06-substitution-and-elimination": ["organic-chemistry-1", "substitution-elimination"],
      "organic-chemistry-1/07-alkene-additions": ["organic-chemistry-1", "alkene-additions"],
      "organic-chemistry-1/08-alkynes": ["organic-chemistry-1", "alkynes"],
      "organic-chemistry-1/09-radical-reactions": ["organic-chemistry-1", "radicals"],
      "organic-chemistry-2/10-spectroscopy": ["organic-chemistry-2", "spectroscopy"],
      "organic-chemistry-2/11-alcohols-ethers-epoxides": ["organic-chemistry-2", "alcohols-ethers-epoxides"],
      "organic-chemistry-2/12-conjugated-systems-pericyclic": ["organic-chemistry-2", "conjugated-systems"],
      "organic-chemistry-2/13-aromaticity-benzene": ["organic-chemistry-2", "aromaticity-eas"],
      "organic-chemistry-2/14-aldehydes-ketones": ["organic-chemistry-2", "aldehydes-ketones"],
      "organic-chemistry-2/15-carboxylic-acids-derivatives": ["organic-chemistry-2", "carboxylic-acids-derivatives"],
      "organic-chemistry-2/16-alpha-carbon-chemistry": ["organic-chemistry-2", "enols-enolates"],
      "organic-chemistry-2/17-amines": ["organic-chemistry-2", "amines"],
      "organic-chemistry-2/18-biochemistry-introduction": ["organic-chemistry-2", "biochemistry"],
    },
  },
  {
    directory: "generated-subjects/microbiology-study-notes/notes",
    collection: "microbiology-study-notes",
    unitMap: {
      "01-fundamentals": ["microbiology", "foundations-of-microbiology"],
      "02-prokaryotic-cell-structure": ["microbiology", "bacterial-cell-structure-and-function"],
      "03-metabolism-and-genetics": ["microbiology", "microbial-genetics"],
      "04-growth-and-control": ["microbiology", "control-of-microbial-growth"],
      "05-virology": ["microbiology", "viruses-fungi-parasites-and-prions"],
      "06-eukaryotic-microbes": ["microbiology", "viruses-fungi-parasites-and-prions"],
      "07-immunology": ["microbiology", "immunology-and-infection"],
      "08-pathogenicity-epidemiology": ["microbiology", "immunology-and-infection"],
    },
  },
];

const report = { libraries: [], added: {}, skippedExisting: 0 };
const additions = new Map(); // "subject/unit" -> [topic]

for (const library of LIBRARIES) {
  const root = path.join(repoRoot, library.directory);
  if (!exists(root)) { report.libraries.push({ collection: library.collection, note: "source not found" }); continue; }

  const files = walk(root)
    .filter((filePath) => filePath.endsWith(".md") && !/README/i.test(path.basename(filePath)))
    .filter((filePath) => {
      const relative = path.relative(root, filePath).split(path.sep).join("/");
      return Object.keys(library.unitMap).some((prefix) => relative.startsWith(`${prefix}/`));
    })
    .sort()
    .map((filePath) => ({ filePath, markdown: readText(filePath) }));
  if (!files.length) { report.libraries.push({ collection: library.collection, note: "no note files matched the unit map" }); continue; }

  const { kept, dropped } = measureHeadings(files);
  report.libraries.push({ collection: library.collection, files: files.length, keptHeadings: [...kept], droppedHeadings: dropped });

  for (const { filePath, markdown } of files) {
    const relative = path.relative(root, filePath).split(path.sep).join("/");
    const prefix = Object.keys(library.unitMap).find((key) => relative.startsWith(`${key}/`));
    const [subjectSlug, unitSlug] = library.unitMap[prefix];
    const map = sections(markdown);
    const title = titleOf(markdown, path.basename(filePath, ".md").replace(/^\d+-/, "").replace(/-/g, " "));

    // Sources are deliberately exempt from the boilerplate check: a library
    // citing the same OpenStax chapter on every topic is a shared source
    // registry, which is honest, not filler.
    const sourcesHeading = [...map.keys()].find((heading) => heading.toLowerCase() === "sources");
    // Whichever teaching section survived leads the page, so a topic is never
    // headless just because its "Core Concept" turned out to be a frame.
    const overview = pick(map, kept, "Core Concept", "Curriculum Scope", "Key Structures / Terms", "Essential Structures and Terms");
    const teaching = [
      pick(map, kept, "Core Concept"),
      pick(map, kept, "How It Works", "Mechanism / How It Works"),
      pick(map, kept, "Curriculum Scope"),
    ].filter(Boolean).join("\n\n");
    const sectionsOut = {
      overview,
      whyItMatters: "",
      learningObjectives: pick(map, kept, "Learning Goals"),
      keyTerms: pick(map, kept, "Essential Structures and Terms", "Key Structures / Terms"),
      collegeNotes: teaching,
      howItWorks: pick(map, kept, "How It Works", "Mechanism / How It Works"),
      comparisons: "",
      highYield: pick(map, kept, "High-Yield Facts"),
      commonConfusions: "",
      memoryAids: "",
      eli10: pick(map, kept, "Eli Explains", "ELI Explains", "ELI-10"),
      quickReview: "",
      workedExamples: pick(map, kept, "Worked Example"),
      references: parseReferences(sourcesHeading ? map.get(sourcesHeading) : ""),
    };
    if (!sectionsOut.collegeNotes && !sectionsOut.highYield) continue;

    const key = `${subjectSlug}/${unitSlug}`;
    if (!additions.has(key)) additions.set(key, []);
    additions.get(key).push({
      slug: slugify(title),
      title,
      sections: sectionsOut,
      sourceFile: path.relative(repoRoot, filePath).split(path.sep).join("/"),
      sourceSnapshotMarkdown: clean(markdown).slice(0, 40000),
      collection: library.collection,
    });
  }
}

// ---------------------------------------------------------------------------
// Write topics into the target courses.
// ---------------------------------------------------------------------------

const touched = new Set();
for (const [key, topics] of additions) {
  const [subjectSlug, unitSlug] = key.split("/");
  const subjectPath = path.join(sourceSubjectsRoot, subjectSlug, "subject.json");
  if (!exists(subjectPath)) continue;
  const subject = readJson(subjectPath);
  const unit = subject.units.find((candidate) => candidate.slug === unitSlug);
  if (!unit) { report.added[key] = { added: 0, note: "unit not found" }; continue; }

  // Drop anything a previous run of this batch added, so re-running is clean.
  unit.topics = (unit.topics ?? []).filter((topic) => {
    const bundlePath = path.join(webRoot, topic.bundlePath);
    if (!exists(bundlePath)) return true;
    return readJson(bundlePath).provenance?.importBatch !== IMPORT_BATCH;
  });

  const existing = new Set(unit.topics.map((topic) => topic.slug));
  const existingTitles = new Set(unit.topics.map((topic) => slugify(topic.title)));
  let added = 0;
  let skipped = 0;
  for (const topic of topics) {
    if (existing.has(topic.slug) || existingTitles.has(slugify(topic.title))) { skipped += 1; report.skippedExisting += 1; continue; }
    existing.add(topic.slug);
    const order = unit.topics.length + 1;
    const id = `topic:${subjectSlug}:${unitSlug}:${topic.slug}`;
    const availability = {
      collegeNotes: Boolean(topic.sections.collegeNotes.trim()),
      eli10: Boolean(topic.sections.eli10.trim()),
      highYield: Boolean(topic.sections.highYield.trim()),
      quickReview: Boolean(topic.sections.quickReview.trim()),
      workedExamples: Boolean(topic.sections.workedExamples.trim()),
      references: Boolean(topic.sections.references.length),
      exactQuestions: 0,
    };
    const bundle = {
      schemaVersion: "2.0.0",
      id,
      slug: topic.slug,
      title: topic.title,
      subject: { id: `subject:${subjectSlug}`, slug: subjectSlug, title: subject.subject.title },
      unit: { id: unit.id, slug: unit.slug, title: unit.title, order: unit.order },
      order,
      status: "final",
      sections: topic.sections,
      availability,
      aliases: [{ value: topic.slug, kind: "canonical_slug" }],
      authority: { college_notes: [{ source_file: topic.sourceFile }], eli10: [{ source_file: topic.sourceFile }] },
      provenance: {
        sourceCollection: topic.collection,
        sourceFile: topic.sourceFile,
        importedWithoutRewriting: true,
        importBatch: IMPORT_BATCH,
      },
      sourceSnapshotMarkdown: topic.sourceSnapshotMarkdown,
    };
    const bundlePath = `content-v2/subjects/${subjectSlug}/topics/${unitSlug}/${topic.slug}.json`;
    writeJson(path.join(webRoot, bundlePath), bundle);
    writeJson(path.join(clientSubjectsRoot, subjectSlug, "topics", unitSlug, `${topic.slug}.json`), { ...bundle, sourceSnapshotMarkdown: "" });
    unit.topics.push({ id, slug: topic.slug, title: topic.title, order, status: "final", bundlePath, mappedQuestionCount: 0, availability });
    added += 1;
  }
  writeJson(subjectPath, subject);
  report.added[key] = { added, skippedAsExisting: skipped };
  touched.add(subjectSlug);
}

// ---------------------------------------------------------------------------
// Recompute statistics, catalogue, search index.
// ---------------------------------------------------------------------------

function recomputeSubject(slug) {
  const subjectPath = path.join(sourceSubjectsRoot, slug, "subject.json");
  const bundle = readJson(subjectPath);
  const bank = readJson(path.join(sourceSubjectsRoot, slug, "questions.json"));
  const exact = bank.questions ?? [];
  const all = [...exact, ...(bank.subjectWideQuestions ?? [])];
  let teaching = 0; let eli10 = 0; let highYield = 0; let referenced = 0; let topicCount = 0;
  for (const unit of bundle.units ?? []) {
    unit.topics = (unit.topics ?? []).map((topic, index) => ({ ...topic, order: index + 1 }));
    for (const topic of unit.topics) {
      topicCount += 1;
      const mapped = exact.filter((question) => question.mappedCanonicalTopicIds?.includes(topic.id)).length;
      topic.mappedQuestionCount = mapped;
      const bundlePath = path.join(webRoot, topic.bundlePath);
      const topicBundle = readJson(bundlePath);
      topicBundle.order = topic.order;
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
      const clientPath = path.join(clientSubjectsRoot, slug, "topics", unit.slug, `${topic.slug}.json`);
      if (exists(clientPath)) {
        const clientBundle = readJson(clientPath);
        clientBundle.availability = availability;
        clientBundle.sections = topicBundle.sections;
        clientBundle.order = topic.order;
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
    subjectWideQuestionCount: (bank.subjectWideQuestions ?? []).length,
    uniqueQuestionCount: all.length,
    citationReviewRequiredCount: all.filter((question) => question.citationReviewRequired).length,
  };
  writeJson(subjectPath, bundle);
  writeJson(path.join(clientSubjectsRoot, slug, "subject.json"), bundle);
  return bundle;
}

for (const slug of touched) recomputeSubject(slug);

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
const buildReport = readJson(path.join(contentRoot, "build-report.json"));
writeJson(path.join(contentRoot, "build-report.json"), { ...buildReport, generatedOn: catalog.generatedOn, totals });
writeJson(path.join(webRoot, "audit", "study-notes-import.json"), { batch: IMPORT_BATCH, generatedOn: catalog.generatedOn, report });

console.log("STUDY NOTES IMPORT COMPLETE");
for (const library of report.libraries) {
  if (library.note) { console.log(`${library.collection}: ${library.note}`); continue; }
  console.log(`\n${library.collection} — ${library.files} note files`);
  console.log(`  kept sections:    ${library.keptHeadings.join(", ")}`);
  console.log(`  dropped as boilerplate (one body repeated across the library):`);
  for (const item of library.droppedHeadings) console.log(`    ${item.heading} — same text in ${Math.round(item.repeatedShare * 100)}% of ${item.files} files`);
}
console.log();
for (const [key, stats] of Object.entries(report.added)) {
  console.log(`  ${key}: +${stats.added} topics${stats.skippedAsExisting ? `, ${stats.skippedAsExisting} skipped as already present` : ""}${stats.note ? ` (${stats.note})` : ""}`);
}
console.log(`\nSkipped because the course already had that topic: ${report.skippedExisting}`);
console.log(`Catalogue totals: ${JSON.stringify(totals)}`);
