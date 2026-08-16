#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const websiteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gvmRoot = path.resolve(websiteDir, "../../../..");
const curriculumDir = path.join(websiteDir, "curriculum");
const outputRoot = path.join(websiteDir, "content-v2", "anatomy-physiology-1");
const topicsOutput = path.join(outputRoot, "topics");
const crosswalkPath = path.join(curriculumDir, "anatomy-physiology-1.crosswalk.json");
const snapshotPath = path.join(curriculumDir, "anatomy-physiology-1.registry.json");
const args = process.argv.slice(2);
const registryArgument = args.indexOf("--registry");

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const writeJson = (filePath, value) => fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
const clean = (value = "") => value.trim().replace(/\n{3,}/g, "\n\n");
const sourcePath = (...parts) => path.join(gvmRoot, ...parts);
const portablePath = (absolutePath) => path.relative(gvmRoot, absolutePath).split(path.sep).join("/");

fs.mkdirSync(curriculumDir, { recursive: true });
fs.mkdirSync(topicsOutput, { recursive: true });

if (registryArgument >= 0) {
  const inputPath = path.resolve(args[registryArgument + 1] ?? "");
  const registry = readJson(inputPath);
  const subject = registry.subjects.find((item) => item.slug === "anatomy-physiology-1");
  if (!subject) throw new Error("The supplied master registry has no anatomy-physiology-1 subject.");
  const referenced = new Set();
  for (const unit of subject.units) {
    for (const topic of unit.topics) {
      for (const entries of Object.values(topic.authority ?? {})) {
        for (const entry of entries) if (entry.ref_id) referenced.add(entry.ref_id);
      }
    }
  }
  const sourceReferences = registry.source_references.filter((reference) => referenced.has(reference.id));
  writeJson(snapshotPath, {
    schemaVersion: "2.0.0",
    registryId: registry.registry_id,
    registryVersion: registry.version,
    generatedOn: registry.generated_on,
    subject,
    sourceReferences,
  });
}

if (!fs.existsSync(snapshotPath)) {
  throw new Error("Registry snapshot is missing. Run with --registry /path/to/master-curriculum-registry.json once.");
}

const registry = readJson(snapshotPath);
const canonicalSubject = registry.subject;
const crosswalk = readJson(crosswalkPath);

const stripFrontMatter = (markdown) => markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
const frontMatter = (markdown) => {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return {};
  return Object.fromEntries(match[1].split(/\r?\n/).flatMap((line) => {
    const field = line.match(/^([a-zA-Z0-9_-]+):\s*["']?(.*?)["']?\s*$/);
    return field ? [[field[1], field[2]]] : [];
  }));
};

const sectionsAtLevel = (markdown, level = 2) => {
  const marker = "#".repeat(level);
  const pattern = new RegExp(`^${marker}\\s+(.+)$`, "gm");
  const matches = [...markdown.matchAll(pattern)];
  const result = new Map();
  matches.forEach((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.length;
    result.set(match[1].trim(), clean(markdown.slice(start, end)));
  });
  return result;
};

const parseReferences = (markdown = "") => markdown.split(/\r?\n/)
  .map((line) => line.trim().replace(/^[-*]\s+/, ""))
  .filter(Boolean)
  .map((text) => {
    const url = text.match(/https?:\/\/[^\s)>]+/)?.[0]?.replace(/[.,;]+$/, "");
    return url ? { text, url } : { text };
  });

const canonicalTopics = canonicalSubject.units.flatMap((unit) => unit.topics.map((topic) => ({
  ...topic,
  unit: { id: unit.id, slug: unit.slug, title: unit.title, order: unit.order },
})));
const canonicalByCoordinates = new Map(canonicalTopics.map((topic) => [
  `${canonicalSubject.slug}/${topic.unit.slug}/${topic.slug}`,
  topic,
]));

const targetTopicIds = (mapping) => {
  const targets = [mapping.target, ...(mapping.targets ?? []), ...(mapping.additionalTargets ?? [])].filter(Boolean);
  return targets.flatMap((target) => target.topicSlugs.map((slug) => {
    const canonical = canonicalByCoordinates.get(`${target.subjectSlug}/${target.unitSlug}/${slug}`);
    return canonical?.id ?? `topic:${target.subjectSlug}:${target.unitSlug}:${slug}`;
  }));
};

const teachingRoot = sourcePath("Education", "pre-nursing-study-hub-content", "content", "01-anatomy-physiology-i");
const teachingFiles = fs.readdirSync(teachingRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).flatMap((unit) => {
  const unitRoot = path.join(teachingRoot, unit.name);
  return fs.readdirSync(unitRoot).filter((name) => name.endsWith(".md")).map((name) => path.join(unitRoot, name));
});
const teachingBySlug = new Map();
for (const filePath of teachingFiles) {
  const markdown = fs.readFileSync(filePath, "utf8");
  const meta = frontMatter(markdown);
  if (meta.slug) teachingBySlug.set(meta.slug, { filePath, markdown, meta });
}

const referenceById = new Map(registry.sourceReferences.map((reference) => [reference.id, reference]));
const topicBundles = [];
for (const unit of canonicalSubject.units) {
  for (const topic of unit.topics) {
    const source = teachingBySlug.get(topic.slug);
    if (!source) throw new Error(`No teaching source found for ${topic.id}`);
    const body = stripFrontMatter(source.markdown);
    const sourceSections = sectionsAtLevel(body);
    const references = parseReferences(sourceSections.get("Sources"));
    const bundle = {
      schemaVersion: "2.0.0",
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
      subject: { id: canonicalSubject.id, slug: canonicalSubject.slug, title: canonicalSubject.title },
      unit: { id: unit.id, slug: unit.slug, title: unit.title, order: unit.order },
      order: topic.order,
      status: topic.status,
      sections: {
        overview: sourceSections.get("What This Topic Is") ?? "",
        whyItMatters: sourceSections.get("Why It Matters") ?? "",
        learningObjectives: sourceSections.get("Learning Objectives") ?? "",
        keyTerms: sourceSections.get("Key Terms") ?? "",
        collegeNotes: sourceSections.get("Core Explanation") ?? "",
        howItWorks: sourceSections.get("How It Works") ?? "",
        comparisons: sourceSections.get("Important Relationships and Comparisons") ?? "",
        highYield: sourceSections.get("High-Yield Pre-Nursing Connections") ?? "",
        commonConfusions: sourceSections.get("Common Confusions") ?? "",
        memoryAids: sourceSections.get("Memory Aids") ?? "",
        eli10: sourceSections.get("ELI-10 Explains") ?? "",
        quickReview: sourceSections.get("Quick Recap") ?? "",
        references,
      },
      aliases: topic.aliases,
      authority: Object.fromEntries(Object.entries(topic.authority ?? {}).map(([field, entries]) => [field, entries.map((entry) => ({
        ...entry,
        sourceReference: referenceById.get(entry.ref_id),
      }))])),
      provenance: {
        sourceCollection: "pre-nursing-study-hub-content",
        sourceFile: portablePath(source.filePath),
        sourceStatus: source.meta.status,
        factChecked: source.meta.fact_checked === "true",
        coverageChecked: source.meta.coverage_checked === "true",
        importedWithoutRewriting: true,
      },
      sourceSnapshotMarkdown: body,
    };
    topicBundles.push(bundle);
    writeJson(path.join(topicsOutput, `${topic.slug}.json`), bundle);
  }
}

const sourceMapping = new Map();
for (const source of crosswalk.sources) {
  for (const mapping of source.mappings) sourceMapping.set(`${source.sourceCollection}/${mapping.sourceTopicId}`, mapping);
}

const packRoot = sourcePath("Education", "anatomy-physiology-1-study-pack", "topics");
const packFiles = fs.readdirSync(packRoot).filter((name) => /^topic_\d+_.+\.md$/.test(name)).sort();

const parsePackQuestions = (filePath, sourceTopicId, mapping, topicReferences) => {
  const markdown = fs.readFileSync(filePath, "utf8");
  const starts = [...markdown.matchAll(/^#{3,4}\s+Q(\d+)\.\s*(.*)$/gm)];
  return starts.map((start, index) => {
    const chunk = clean(markdown.slice(start.index, starts[index + 1]?.index ?? markdown.length).split(/^#{2,3}\s+Sources Consulted\s*$/m)[0]);
    const stem = clean(chunk.match(/\*\*Question:\*\*\s*([\s\S]*?)(?=\n\*\*[A-H][.:]\*\*)/)?.[1]);
    const options = [...chunk.matchAll(/^\*\*([A-H])[.:]\*\*\s*(.+)$/gm)].map((option) => ({ id: option[1], text: clean(option[2]) }));
    const answer = chunk.match(/^\*\*Answer:\*\*\s*([A-H])\.\s*(.*)$/m);
    const whyCorrect = clean(chunk.match(/^\*\*Why It's the Answer:\*\*\s*([\s\S]*?)(?=\n\*\*ELI-10:\*\*|\n---|$)/m)?.[1]);
    const eli10 = clean(chunk.match(/^\*\*ELI-10:\*\*\s*([\s\S]*?)(?=\n---|$)/m)?.[1]);
    if (!stem || options.length < 2 || !answer || !whyCorrect || !eli10) throw new Error(`Could not parse ${portablePath(filePath)} Q${start[1]}`);
    const mappedCanonicalTopicIds = targetTopicIds(mapping);
    const deferred = mapping.disposition === "defer-to-canonical-subject";
    return {
      id: `ap1-pack-${sourceTopicId}-q${String(start[1]).padStart(3, "0")}`,
      sourceCollection: "ap1-study-pack",
      sourceTopicId,
      mappedCanonicalTopicIds,
      mappingScope: deferred ? "deferred-to-other-subject" : mappedCanonicalTopicIds.length === 1 ? "exact" : "broad-source-topic",
      stem,
      options,
      correctAnswer: answer[1],
      rationales: { whyCorrect, eli10, distractorAnalysis: whyCorrect },
      difficulty: "unknown",
      tags: ["anatomy-physiology-1", sourceTopicId, "study-pack"],
      references: topicReferences,
      citationReviewRequired: false,
      provenance: { sourceFile: portablePath(filePath), sourceQuestionNumber: Number(start[1]), sourceHeading: start[2], importedWithoutRewriting: true },
      sourceSnapshotMarkdown: chunk,
    };
  });
};

const packQuestions = [];
for (const fileName of packFiles) {
  const number = Number(fileName.match(/^topic_(\d+)_/)?.[1]);
  const sourceTopicId = `topic-${String(number).padStart(2, "0")}`;
  const mapping = sourceMapping.get(`ap1-study-pack/${sourceTopicId}`);
  if (!mapping) throw new Error(`Missing study-pack mapping for ${sourceTopicId}`);
  const markdown = fs.readFileSync(path.join(packRoot, fileName), "utf8");
  const consulted = markdown.split(/^#{2,3}\s+Sources Consulted\s*$/m)[1] ?? "";
  packQuestions.push(...parsePackQuestions(path.join(packRoot, fileName), sourceTopicId, mapping, parseReferences(consulted)));
}

const appBankPath = sourcePath("Apps", "ANON", "apps", "PreNursing_app", "PreNursingPrep", "Resources", "QuestionBank", "anatomy_physiology_1.json");
const appBank = readJson(appBankPath);
const appQuestions = appBank.questions.map((question) => {
  const mapping = sourceMapping.get(`prenursing-native-app-bank/${question.topicID}`);
  if (!mapping) throw new Error(`Missing native-app mapping for ${question.topicID}`);
  const correctIndex = question.choices.findIndex((choice) => choice.id === question.correctChoiceID);
  if (correctIndex < 0) throw new Error(`Invalid correctChoiceID on ${question.id}`);
  return {
    id: question.id,
    sourceCollection: "prenursing-native-app-bank",
    sourceTopicId: question.topicID,
    mappedCanonicalTopicIds: targetTopicIds(mapping),
    mappingScope: targetTopicIds(mapping).length === 1 ? "exact" : "broad-source-topic",
    stem: question.stem,
    options: question.choices.map((choice, index) => ({ id: String.fromCharCode(65 + index), text: choice.text, sourceId: choice.id })),
    correctAnswer: String.fromCharCode(65 + correctIndex),
    rationales: { whyCorrect: question.whyExplanation, eli10: question.eli10Explanation },
    difficulty: ["foundational", "intermediate", "advanced"].includes(question.difficulty) ? question.difficulty : "unknown",
    tags: [...new Set([...(question.tags ?? []), "anatomy-physiology-1", "native-app-bank"])],
    references: [],
    citationReviewRequired: true,
    provenance: { sourceFile: portablePath(appBankPath), sourceQuestionNumber: question.sourceQuestionNumber, sourceId: question.id, originalSourceFile: question.sourceFile, importedWithoutRewriting: true },
    sourceSnapshotMarkdown: `**Question:** ${question.stem}\n\n${question.choices.map((choice, index) => `**${String.fromCharCode(65 + index)}.** ${choice.text}`).join("\n")}\n\n**Why It's the Answer:** ${question.whyExplanation}\n\n**ELI-10:** ${question.eli10Explanation}`,
  };
});

const deferred = packQuestions.filter((question) => question.mappingScope === "deferred-to-other-subject");
const questions = [...packQuestions.filter((question) => question.mappingScope !== "deferred-to-other-subject"), ...appQuestions];
const questionBank = { schemaVersion: "2.0.0", subjectSlug: canonicalSubject.slug, questions, deferred };
writeJson(path.join(outputRoot, "questions.json"), questionBank);

const subjectBundle = {
  schemaVersion: "2.0.0",
  subject: { id: canonicalSubject.id, slug: canonicalSubject.slug, title: canonicalSubject.title, aliases: canonicalSubject.aliases, status: canonicalSubject.status ?? "final" },
  units: canonicalSubject.units.map((unit) => ({
    id: unit.id,
    slug: unit.slug,
    title: unit.title,
    order: unit.order,
    aliases: unit.aliases,
    topics: unit.topics.map((topic) => ({
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
      order: topic.order,
      status: topic.status,
      bundlePath: `content-v2/anatomy-physiology-1/topics/${topic.slug}.json`,
      mappedQuestionCount: questions.filter((question) => question.mappedCanonicalTopicIds.includes(topic.id)).length,
    })),
  })),
  statistics: {
    unitCount: canonicalSubject.units.length,
    topicCount: canonicalTopics.length,
    completeTeachingTopicCount: topicBundles.filter((topic) => topic.sections.collegeNotes && topic.sections.eli10 && topic.sections.highYield && topic.sections.references.length).length,
    uniqueQuestionCount: questions.length,
    studyPackQuestionCount: questions.filter((question) => question.sourceCollection === "ap1-study-pack").length,
    nativeAppQuestionCount: appQuestions.length,
    deferredToAnatomyPhysiology2QuestionCount: deferred.length,
    questionAssociationCount: questions.reduce((total, question) => total + question.mappedCanonicalTopicIds.length, 0),
    citationReviewRequiredCount: questions.filter((question) => question.citationReviewRequired).length,
  },
  provenance: {
    registryId: registry.registryId,
    registryVersion: registry.registryVersion,
    registrySnapshot: "curriculum/anatomy-physiology-1.registry.json",
    crosswalk: "curriculum/anatomy-physiology-1.crosswalk.json",
    teachingAuthority: "Education/pre-nursing-study-hub-content/content/01-anatomy-physiology-i",
    practiceOverlays: ["Education/anatomy-physiology-1-study-pack/topics", "Apps/ANON/apps/PreNursing_app/PreNursingPrep/Resources/QuestionBank/anatomy_physiology_1.json"],
  },
};
writeJson(path.join(outputRoot, "subject.json"), subjectBundle);

const report = {
  generatedAt: registry.generatedOn,
  valid: true,
  checks: {
    units: subjectBundle.statistics.unitCount,
    canonicalTopics: subjectBundle.statistics.topicCount,
    completeTeachingTopics: subjectBundle.statistics.completeTeachingTopicCount,
    studyPackSourceTopics: packFiles.length,
    studyPackQuestionsParsed: packQuestions.length,
    nativeAppSourceTopics: appBank.subject.topics.length,
    nativeAppQuestionsParsed: appQuestions.length,
    ap1QuestionsPublished: questions.length,
    questionsDeferredToAp2: deferred.length,
    sourceMappings: [...sourceMapping.keys()].length,
  },
  notes: [
    "Canonical teaching content is imported without rewriting from the 54-topic pre-nursing corpus.",
    "Broad question-bank topics retain every mapped canonical topic ID; they are not falsely represented as exact mappings.",
    "Endocrine and blood study-pack material is preserved in deferred[] for the Anatomy & Physiology II build.",
    "Native app questions have no authoritative citation arrays and remain flagged citationReviewRequired=true."
  ],
};
writeJson(path.join(outputRoot, "build-report.json"), report);

console.log(`A&P I PILOT: PASS`);
console.log(`${subjectBundle.statistics.unitCount} units; ${subjectBundle.statistics.topicCount} canonical topics; ${questions.length} published questions; ${deferred.length} deferred to A&P II.`);
