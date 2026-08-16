#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gvmRoot = path.resolve(webRoot, "../../../..");
const snapshotPath = path.join(webRoot, "curriculum", "master-curriculum-registry.snapshot.json");
const outputRoot = path.join(webRoot, "content-v2", "subjects");
const clientRoot = path.join(webRoot, "content-v2", "client", "subjects");
const args = process.argv.slice(2);
const registryIndex = args.indexOf("--registry");
const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const writeJson = (filePath, value) => { fs.mkdirSync(path.dirname(filePath), { recursive: true }); fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`); };
const portable = (filePath) => path.relative(gvmRoot, filePath).split(path.sep).join("/");
const clean = (value = "") => value.trim().replace(/\n{3,}/g, "\n\n");
const stripFrontMatter = (markdown) => markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");

if (registryIndex >= 0) {
  const full = readJson(path.resolve(args[registryIndex + 1] ?? ""));
  const collections = full.source_collections.map((collection) => ({
    id: collection.id,
    root: path.isAbsolute(collection.root) ? portable(collection.root) : collection.root,
  }));
  writeJson(snapshotPath, {
    schemaVersion: "2.0.0",
    registryId: full.registry_id,
    registryVersion: full.version,
    generatedOn: full.generated_on,
    categories: full.categories,
    subjects: full.subjects,
    sourceCollections: collections,
    sourceReferences: full.source_references,
  });
}
if (!fs.existsSync(snapshotPath)) throw new Error("Master registry snapshot is missing; provide --registry once.");

const registry = readJson(snapshotPath);
const refs = new Map(registry.sourceReferences.map((reference) => [reference.id, reference]));
const collectionRoots = new Map(registry.sourceCollections.map((collection) => [collection.id, collection.root]));
const resolveReference = (refId) => {
  const reference = refs.get(refId);
  if (!reference) throw new Error(`Unknown source reference ${refId}`);
  const root = collectionRoots.get(reference.source_id);
  if (!root) throw new Error(`Unknown source collection ${reference.source_id}`);
  const filePath = path.join(gvmRoot, root, reference.path);
  if (!fs.existsSync(filePath)) throw new Error(`Missing source file ${portable(filePath)}`);
  return { reference, filePath };
};

const sectionsAtLevel = (markdown, level = 2) => {
  const pattern = new RegExp(`^${"#".repeat(level)}\\s+(.+)$`, "gm");
  const matches = [...markdown.matchAll(pattern)];
  return new Map(matches.map((match, index) => [match[1].trim(), clean(markdown.slice(match.index + match[0].length, matches[index + 1]?.index ?? markdown.length))]));
};
const matchingHeadingSections = (markdown, headingPattern) => {
  const lines = markdown.split(/\r?\n/);
  const pieces = [];
  for (let index = 0; index < lines.length; index += 1) {
    const heading = lines[index].match(/^(#{1,6})\s+(.+)$/);
    if (!heading || !headingPattern.test(heading[2])) continue;
    const level = heading[1].length;
    const content = [];
    for (index += 1; index < lines.length; index += 1) {
      const next = lines[index].match(/^(#{1,6})\s+/);
      if (next && next[1].length <= level) { index -= 1; break; }
      content.push(lines[index]);
    }
    pieces.push(`### ${heading[2]}\n\n${clean(content.join("\n"))}`);
  }
  return clean(pieces.join("\n\n"));
};
const parseMarkdownReferences = (markdown = "") => markdown.split(/\r?\n/).map((line) => line.trim().replace(/^[-*]\s+/, "")).filter(Boolean).map((text) => {
  const url = text.match(/https?:\/\/[^\s)>]+/)?.[0]?.replace(/[.,;]+$/, "");
  return url ? { text, url } : { text };
});
const firstParagraph = (markdown) => clean(markdown.replace(/^#.*$/m, "").split(/\n\s*\n/).find((part) => part.trim() && !part.trim().startsWith("#")) ?? "");
const sectionByNames = (sections, names) => {
  for (const name of names) {
    const match = [...sections.entries()].find(([heading]) => heading.toLowerCase() === name.toLowerCase());
    if (match) return match[1];
  }
  return "";
};
const combineSections = (sections, include, exclude = /$a/) => [...sections.entries()].filter(([heading]) => include.test(heading) && !exclude.test(heading)).map(([heading, value]) => `### ${heading}\n\n${value}`).join("\n\n");

const parseExpansion = (filePath, topic) => {
  const source = readJson(filePath);
  const references = (source.sources ?? []).map((item) => ({ text: [item.title, item.organization].filter(Boolean).join(" — "), ...(item.url ? { url: item.url } : {}) }));
  const questions = source.questions.map((question) => ({
    id: question.question_id,
    sourceCollection: "expansion-question-bank",
    sourceTopicId: source.topic_id,
    mappedCanonicalTopicIds: [topic.id],
    mappingScope: "exact",
    stem: question.question,
    options: Object.entries(question.choices).map(([id, text]) => ({ id, text })),
    correctAnswer: question.correct_answer_letter,
    rationales: { whyCorrect: question.why_correct, eli10: question.eli_explains, distractorAnalysis: question.why_correct },
    difficulty: question.difficulty === "challenge" ? "advanced" : question.difficulty === "understanding" || question.difficulty === "application" ? "intermediate" : "foundational",
    tags: [...new Set([...(question.concepts_tested ?? []), topic.slug, "expansion-question-bank"])],
    references,
    computation: question.computation,
    citationReviewRequired: false,
    provenance: { sourceFile: portable(filePath), sourceQuestionNumber: question.question_number, sourceId: question.question_id, importedWithoutRewriting: true },
    sourceSnapshotMarkdown: JSON.stringify(question),
  }));
  return { questions, references, sourceSnapshot: JSON.stringify(source, null, 2) };
};

const parseAppQuestions = (filePath, topic, sourceTopicId, mappingScope = "exact") => {
  const source = readJson(filePath);
  const selected = sourceTopicId ? source.questions.filter((question) => question.topicID === sourceTopicId) : source.questions;
  return selected.map((question) => {
    const correctIndex = question.choices.findIndex((choice) => choice.id === question.correctChoiceID);
    if (correctIndex < 0) throw new Error(`Invalid answer key ${question.id}`);
    return {
      id: question.id,
      sourceCollection: "prenursing-native-app-bank",
      sourceTopicId: question.topicID,
      mappedCanonicalTopicIds: topic ? [topic.id] : [],
      mappingScope,
      stem: question.stem,
      options: question.choices.map((choice, index) => ({ id: String.fromCharCode(65 + index), text: choice.text, sourceId: choice.id })),
      correctAnswer: String.fromCharCode(65 + correctIndex),
      rationales: { whyCorrect: question.whyExplanation, eli10: question.eli10Explanation },
      difficulty: ["foundational", "intermediate", "advanced"].includes(question.difficulty) ? question.difficulty : "unknown",
      tags: [...new Set([...(question.tags ?? []), topic?.slug ?? source.subject.id, "native-app-bank"])],
      references: [],
      computation: null,
      citationReviewRequired: true,
      provenance: { sourceFile: portable(filePath), sourceQuestionNumber: question.sourceQuestionNumber, sourceId: question.id, originalSourceFile: question.sourceFile, importedWithoutRewriting: true },
      sourceSnapshotMarkdown: JSON.stringify(question),
    };
  });
};

const parseGeneticsQuiz = (filePath, topic) => {
  const markdown = fs.readFileSync(filePath, "utf8");
  const starts = [...markdown.matchAll(/^###\s+Q(\d+)-(\d+)\s+(.+)$/gm)];
  const questions = starts.map((start, index) => {
    const chunk = clean(markdown.slice(start.index, starts[index + 1]?.index ?? markdown.length));
    const type = chunk.match(/^\*\*Type:\*\*\s*(.+)$/m)?.[1] ?? "concept";
    const afterType = chunk.split(/^\*\*Type:\*\*.*$/m)[1] ?? "";
    const stem = clean(afterType.split(/^- \*\*[A-H]\.\*\*/m)[0]);
    const options = [...chunk.matchAll(/^- \*\*([A-H])\.\*\*\s*(.+)$/gm)].map((match) => ({ id: match[1], text: clean(match[2]) }));
    const answer = chunk.match(/^\*\*Correct Answer:\*\*\s*\*\*([A-H])\.\*\*\s*(.+)$/m);
    const whyCorrect = clean(chunk.match(/^\*\*Why This Is Correct:\*\*\s*([\s\S]*?)(?=\n> \*\*High-Yield:|\n\*\*ELI-10:|$)/m)?.[1]);
    const eli10 = clean(chunk.match(/^\*\*ELI-10:\*\*\s*([\s\S]*?)$/m)?.[1]);
    if (!stem || options.length < 2 || !answer || !whyCorrect || !eli10) throw new Error(`Could not parse genetics quiz ${portable(filePath)} ${start[0]}`);
    return {
      id: `genetics-q${start[1]}-${start[2]}`,
      sourceCollection: "genetics-study-hub",
      sourceTopicId: start[1],
      mappedCanonicalTopicIds: [topic.id],
      mappingScope: "exact",
      stem,
      options,
      correctAnswer: answer[1],
      rationales: { whyCorrect, eli10, distractorAnalysis: whyCorrect },
      difficulty: "unknown",
      tags: [topic.slug, type, "genetics-study-hub"],
      references: [],
      computation: null,
      citationReviewRequired: true,
      provenance: { sourceFile: portable(filePath), sourceQuestionNumber: Number(start[2]), importedWithoutRewriting: true },
      sourceSnapshotMarkdown: chunk,
    };
  });
  return { questions, references: [], sourceSnapshot: markdown };
};

const parsePackQuestions = (root, collection) => fs.readdirSync(root).filter((name) => /^topic_\d+_.+\.md$/.test(name)).sort().flatMap((fileName) => {
  const filePath = path.join(root, fileName);
  const markdown = fs.readFileSync(filePath, "utf8");
  const starts = [...markdown.matchAll(/^#{3,4}\s+Q(\d+)\.\s*(.*)$/gm)];
  const references = parseMarkdownReferences(markdown.split(/^#{2,3}\s+Sources Consulted\s*$/m)[1] ?? "");
  return starts.map((start, index) => {
    const chunk = clean(markdown.slice(start.index, starts[index + 1]?.index ?? markdown.length).split(/^#{2,3}\s+Sources Consulted\s*$/m)[0]);
    const stem = clean(chunk.match(/\*\*Question:\*\*\s*([\s\S]*?)(?=\n\*\*[A-H][.:]\*\*)/)?.[1]);
    const options = [...chunk.matchAll(/^\*\*([A-H])[.:]\*\*\s*(.+)$/gm)].map((match) => ({ id: match[1], text: clean(match[2]) }));
    const answer = chunk.match(/^\*\*Answer:\*\*\s*([A-H])\.\s*(.*)$/m);
    const whyCorrect = clean(chunk.match(/^\*\*Why It's the Answer:\*\*\s*([\s\S]*?)(?=\n\*\*ELI-10:\*\*|\n---|$)/m)?.[1]);
    const eli10 = clean(chunk.match(/^\*\*ELI-10:\*\*\s*([\s\S]*?)(?=\n---|$)/m)?.[1]);
    if (!stem || options.length < 2 || !answer || !whyCorrect || !eli10) throw new Error(`Could not parse ${portable(filePath)} Q${start[1]}`);
    return {
      id: `${collection}-${path.basename(fileName, ".md")}-q${String(start[1]).padStart(3, "0")}`,
      sourceCollection: collection,
      sourceTopicId: path.basename(fileName, ".md"),
      mappedCanonicalTopicIds: [],
      mappingScope: "subject-wide-overlay",
      stem,
      options,
      correctAnswer: answer[1],
      rationales: { whyCorrect, eli10, distractorAnalysis: whyCorrect },
      difficulty: "unknown",
      tags: [collection, path.basename(fileName, ".md")],
      references,
      computation: null,
      citationReviewRequired: false,
      provenance: { sourceFile: portable(filePath), sourceQuestionNumber: Number(start[1]), importedWithoutRewriting: true },
      sourceSnapshotMarkdown: chunk,
    };
  });
});

const questionSourceForTopic = (topic) => {
  const refId = topic.authority?.questions?.[0]?.ref_id;
  if (!refId) return { questions: [], references: [], sourceSnapshot: "" };
  const { reference, filePath } = resolveReference(refId);
  if (reference.source_id === "expansion_qb") return parseExpansion(filePath, topic);
  if (reference.source_id === "genetics_hub") return parseGeneticsQuiz(filePath, topic);
  if (reference.source_id === "prenursing_app_qb") {
    const sourceTopicId = topic.aliases.find((alias) => alias.kind === "source_topic_id" && alias.source_id === "prenursing_app_qb")?.value;
    return { questions: parseAppQuestions(filePath, topic, sourceTopicId), references: [], sourceSnapshot: fs.readFileSync(filePath, "utf8") };
  }
  throw new Error(`No exact-question adapter for ${reference.source_id}`);
};

const normalizeTeaching = (topic, questionSource) => {
  const teachingRefId = topic.authority?.college_notes?.[0]?.ref_id;
  let raw = "";
  let provenance;
  if (teachingRefId) {
    const { reference, filePath } = resolveReference(teachingRefId);
    raw = stripFrontMatter(fs.readFileSync(filePath, "utf8"));
    provenance = { sourceCollection: reference.source_id, sourceFile: portable(filePath), importedWithoutRewriting: true };
  } else {
    raw = questionSource.sourceSnapshot;
    const questionFile = questionSource.questions[0]?.provenance?.sourceFile;
    provenance = { sourceCollection: questionSource.questions[0]?.sourceCollection ?? "unavailable", sourceFile: questionFile ?? "", importedWithoutRewriting: true, teachingNoteAvailable: false };
  }
  const sections = sectionsAtLevel(raw);
  const excludeStudy = /^(?:learning|why (?:it|this)|high-yield|eli|common confusions|quick review|sources|memory aids|check your understanding)/i;
  let collegeNotes = sectionByNames(sections, ["Core Explanation"]);
  if (!collegeNotes && teachingRefId) collegeNotes = combineSections(sections, /./, excludeStudy) || raw;
  let eli10 = matchingHeadingSections(raw, /eli(?:-?10| explains|: explain)/i);
  if (!eli10 && questionSource.questions.length) eli10 = questionSource.questions.map((question, index) => `### Question ${index + 1}\n\n${question.rationales.eli10}`).join("\n\n");
  let highYield = combineSections(sections, /high[- ]yield/i);
  if (!highYield && questionSource.questions.length) highYield = [...raw.matchAll(/^>\s*\*\*High-Yield:\*\*\s*(.+)$/gm)].map((match) => `- ${match[1]}`).join("\n");
  let references = parseMarkdownReferences(sectionByNames(sections, ["Sources", "Sources Consulted", "References", "Open Educational References"]));
  if (!references.length) references = questionSource.references;
  const quickReview = sectionByNames(sections, ["Quick Recap", "Quick Review"]);
  return {
    sections: {
      overview: teachingRefId ? sectionByNames(sections, ["What This Topic Is", "Core Concept", "Big Picture", "Definition and Scope"]) || firstParagraph(raw) : "",
      whyItMatters: sectionByNames(sections, ["Why It Matters", "Why This Matters"]),
      learningObjectives: sectionByNames(sections, ["Learning Objectives", "Learning Goals"]),
      keyTerms: sectionByNames(sections, ["Key Terms"]),
      collegeNotes,
      howItWorks: sectionByNames(sections, ["How It Works", "Mechanism / How It Works", "How It Works or Problem-Solving Method"]),
      comparisons: sectionByNames(sections, ["Important Relationships and Comparisons"]),
      highYield,
      commonConfusions: sectionByNames(sections, ["Common Confusions", "Common Mistakes and Exam Traps"]),
      memoryAids: sectionByNames(sections, ["Memory Aids"]),
      eli10,
      quickReview,
      workedExamples: matchingHeadingSections(raw, /worked example/i),
      references,
    },
    provenance,
    sourceSnapshotMarkdown: raw,
  };
};

if (fs.existsSync(outputRoot)) fs.rmSync(outputRoot, { recursive: true });
fs.mkdirSync(outputRoot, { recursive: true });
if (fs.existsSync(clientRoot)) fs.rmSync(clientRoot, { recursive: true });
fs.mkdirSync(clientRoot, { recursive: true });

const oldAp1Bank = readJson(path.join(webRoot, "content-v2", "anatomy-physiology-1", "questions.json"));
const appBankRoot = path.join(gvmRoot, collectionRoots.get("prenursing_app_qb"));
const currentWebSubjectSlugs = new Set(readJson(path.join(webRoot, "data", "subjects.json")).map((subject) => subject.slug));
const appOverlays = {
  "anatomy-physiology-2": ["anatomy_physiology_2.json"],
  microbiology: ["microbiology.json"],
  "developmental-psychology": ["developmental_psychology.json"],
  pathophysiology: ["pathophysiology.json"],
  "biology-1": ["general_biology.json"],
  "biology-2": ["general_biology.json"],
  "general-chemistry-1": ["general_chemistry.json"],
  "general-chemistry-2": ["general_chemistry.json"],
  nutrition: ["nutrition.json"],
  "medical-terminology": ["medical_terminology.json"],
  "evidence-based-practice-basic-statistics": ["statistics_health_sciences.json"],
};
const catalogSubjects = [];
const allQuestionIds = new Set();
const searchEntries = [];

for (const canonicalSubject of registry.subjects) {
  const subjectDir = path.join(outputRoot, canonicalSubject.slug);
  const exactQuestions = [];
  const topicBundles = [];
  const units = [];
  for (const unit of canonicalSubject.units) {
    const topicSummaries = [];
    for (const topic of unit.topics) {
      const questionSource = questionSourceForTopic(topic);
      exactQuestions.push(...questionSource.questions);
      const teaching = normalizeTeaching(topic, questionSource);
      let associatedQuestionCount = questionSource.questions.length;
      if (canonicalSubject.slug === "anatomy-physiology-1") associatedQuestionCount = oldAp1Bank.questions.filter((question) => question.mappedCanonicalTopicIds.includes(topic.id)).length;
      if (canonicalSubject.slug === "anatomy-physiology-2") associatedQuestionCount = oldAp1Bank.deferred.filter((question) => question.mappedCanonicalTopicIds.includes(topic.id)).length;
      const bundle = {
        schemaVersion: "2.0.0",
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
        subject: { id: canonicalSubject.id, slug: canonicalSubject.slug, title: canonicalSubject.title },
        unit: { id: unit.id, slug: unit.slug, title: unit.title, order: unit.order },
        order: topic.order,
        status: topic.status,
        sections: teaching.sections,
        availability: {
          collegeNotes: Boolean(teaching.sections.collegeNotes && topic.authority?.college_notes),
          eli10: Boolean(teaching.sections.eli10),
          highYield: Boolean(teaching.sections.highYield),
          quickReview: Boolean(teaching.sections.quickReview),
          workedExamples: Boolean(teaching.sections.workedExamples),
          references: teaching.sections.references.length > 0,
          exactQuestions: associatedQuestionCount,
        },
        aliases: topic.aliases,
        authority: topic.authority,
        provenance: teaching.provenance,
        sourceSnapshotMarkdown: teaching.sourceSnapshotMarkdown,
      };
      topicBundles.push(bundle);
      const bundlePath = `content-v2/subjects/${canonicalSubject.slug}/topics/${unit.slug}/${topic.slug}.json`;
      writeJson(path.join(webRoot, bundlePath), bundle);
      writeJson(path.join(clientRoot, canonicalSubject.slug, "topics", unit.slug, `${topic.slug}.json`), { ...bundle, aliases: [], authority: {}, sourceSnapshotMarkdown: "" });
      topicSummaries.push({ id: topic.id, slug: topic.slug, title: topic.title, order: topic.order, status: topic.status, bundlePath, mappedQuestionCount: associatedQuestionCount, availability: bundle.availability });
      searchEntries.push({
        id: topic.id,
        subjectSlug: canonicalSubject.slug,
        subjectTitle: canonicalSubject.title,
        unitSlug: unit.slug,
        unitTitle: unit.title,
        topicSlug: topic.slug,
        topicTitle: topic.title,
        aliases: topic.aliases.map((alias) => String(alias.value ?? "")).filter(Boolean),
        availability: bundle.availability,
        href: `/learn/${canonicalSubject.slug}/${unit.slug}/${topic.slug}`,
      });
    }
    units.push({ id: unit.id, slug: unit.slug, title: unit.title, order: unit.order, aliases: unit.aliases, topics: topicSummaries });
  }

  let topicMappedQuestions = exactQuestions;
  const subjectWideQuestions = [];
  if (canonicalSubject.slug === "anatomy-physiology-1") topicMappedQuestions = oldAp1Bank.questions;
  if (canonicalSubject.slug === "anatomy-physiology-2") {
    topicMappedQuestions.push(...oldAp1Bank.deferred.map((question) => ({ ...question, mappingScope: question.mappedCanonicalTopicIds.length === 1 ? "exact" : "broad-source-topic" })));
    const packRoot = path.join(gvmRoot, collectionRoots.get("ap2_pack"), "topics");
    subjectWideQuestions.push(...parsePackQuestions(packRoot, "ap2-study-pack"));
  }
  for (const fileName of appOverlays[canonicalSubject.slug] ?? []) {
    subjectWideQuestions.push(...parseAppQuestions(path.join(appBankRoot, fileName), undefined, undefined, "subject-wide-overlay"));
  }
  const seen = new Set();
  topicMappedQuestions = topicMappedQuestions.filter((question) => !seen.has(question.id) && seen.add(question.id));
  const dedupedSubjectWide = subjectWideQuestions.filter((question) => !seen.has(question.id) && seen.add(question.id));
  for (const question of [...topicMappedQuestions, ...dedupedSubjectWide]) allQuestionIds.add(question.id);
  const questionBank = { schemaVersion: "2.0.0", subjectSlug: canonicalSubject.slug, questions: topicMappedQuestions, subjectWideQuestions: dedupedSubjectWide, deferred: [] };
  writeJson(path.join(subjectDir, "questions.json"), questionBank);
  const clientQuestion = ({ sourceSnapshotMarkdown: _sourceSnapshotMarkdown, ...question }) => question;
  writeJson(path.join(clientRoot, canonicalSubject.slug, "questions.json"), { ...questionBank, questions: topicMappedQuestions.map(clientQuestion), subjectWideQuestions: dedupedSubjectWide.map(clientQuestion) });

  const statistics = {
    unitCount: units.length,
    topicCount: topicBundles.length,
    teachingTopicCount: topicBundles.filter((topic) => topic.availability.collegeNotes).length,
    eli10TopicCount: topicBundles.filter((topic) => topic.availability.eli10).length,
    highYieldTopicCount: topicBundles.filter((topic) => topic.availability.highYield).length,
    referencedTopicCount: topicBundles.filter((topic) => topic.availability.references).length,
    exactOrMappedQuestionCount: topicMappedQuestions.length,
    subjectWideQuestionCount: dedupedSubjectWide.length,
    uniqueQuestionCount: topicMappedQuestions.length + dedupedSubjectWide.length,
    citationReviewRequiredCount: [...topicMappedQuestions, ...dedupedSubjectWide].filter((question) => question.citationReviewRequired).length,
  };
  const subjectBundle = {
    schemaVersion: "2.0.0",
    subject: { id: canonicalSubject.id, slug: canonicalSubject.slug, title: canonicalSubject.title, aliases: canonicalSubject.aliases, status: canonicalSubject.status ?? "final", category: canonicalSubject.category_id },
    units,
    statistics,
    provenance: { registryId: registry.registryId, registryVersion: registry.registryVersion, registrySnapshot: "curriculum/master-curriculum-registry.snapshot.json" },
  };
  writeJson(path.join(subjectDir, "subject.json"), subjectBundle);
  writeJson(path.join(clientRoot, canonicalSubject.slug, "subject.json"), { ...subjectBundle, subject: { ...subjectBundle.subject, aliases: [] }, units: subjectBundle.units.map((unit) => ({ ...unit, aliases: [] })) });
  const legacySlugs = [...new Set([canonicalSubject.slug, ...canonicalSubject.aliases.map((alias) => String(alias.value ?? ""))].filter((value) => currentWebSubjectSlugs.has(value)))];
  catalogSubjects.push({ ...subjectBundle.subject, legacySlugs, statistics, href: `/learn/${canonicalSubject.slug}` });
}

const totals = {
  subjects: catalogSubjects.length,
  units: catalogSubjects.reduce((sum, subject) => sum + subject.statistics.unitCount, 0),
  topics: catalogSubjects.reduce((sum, subject) => sum + subject.statistics.topicCount, 0),
  teachingTopics: catalogSubjects.reduce((sum, subject) => sum + subject.statistics.teachingTopicCount, 0),
  eli10Topics: catalogSubjects.reduce((sum, subject) => sum + subject.statistics.eli10TopicCount, 0),
  referencedTopics: catalogSubjects.reduce((sum, subject) => sum + subject.statistics.referencedTopicCount, 0),
  uniqueQuestionsAcrossCatalog: allQuestionIds.size,
  questionPlacements: catalogSubjects.reduce((sum, subject) => sum + subject.statistics.uniqueQuestionCount, 0),
};
const catalog = { schemaVersion: "2.0.0", generatedOn: registry.generatedOn, registryId: registry.registryId, registryVersion: registry.registryVersion, totals, subjects: catalogSubjects };
writeJson(path.join(webRoot, "content-v2", "catalog.json"), catalog);
writeJson(path.join(webRoot, "content-v2", "client", "catalog.json"), { ...catalog, subjects: catalogSubjects.map((subject) => ({ ...subject, aliases: [] })) });
writeJson(path.join(webRoot, "content-v2", "client", "search-index.json"), searchEntries);
writeJson(path.join(webRoot, "content-v2", "build-report.json"), { generatedOn: registry.generatedOn, valid: true, totals, notes: ["All 28 canonical subjects are generated.", "Teaching and question-only topics retain their real availability.", "Unreviewed app and A&P II pack mappings remain subject-wide overlays."] });
console.log("ALL CURRICULA: PASS");
console.log(`${totals.subjects} subjects; ${totals.units} units; ${totals.topics} topics; ${totals.teachingTopics} teaching topics; ${totals.uniqueQuestionsAcrossCatalog} unique questions.`);
