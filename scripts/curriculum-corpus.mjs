import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Shared, side-effect-free reader for the generated curriculum corpus.
 *
 * Phase 1 adds a metadata *sidecar* under content-v2/indexes/. Nothing in this
 * module writes to content-v2/subjects/ or content-v2/client/: the mirror
 * equivalence and hard-coded totals asserted by validate-all-curricula.mjs must
 * keep passing untouched.
 */
export const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const contentRoot = path.join(repositoryRoot, "content-v2");
export const indexesRoot = path.join(contentRoot, "indexes");

export const readJsonFile = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));

/** Canonical on-disk encoding for every generated index: 2-space JSON plus a trailing newline. */
export const serializeJson = (value) => `${JSON.stringify(value, null, 2)}\n`;

export const writeGeneratedFile = (filePath, contents) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
};

/** Returns the hostname of an absolute http(s) URL, or undefined when the value is unusable. */
export const referenceHost = (url) => {
  if (typeof url !== "string" || url.length === 0) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.hostname : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Reads catalog.json and every subject bundle, topic bundle and question bank it
 * points at. Topic order follows the catalog, then unit order, then topic order,
 * so every generated artefact is reproducible byte-for-byte.
 */
export const readCurriculumCorpus = () => {
  const catalog = readJsonFile(path.join(contentRoot, "catalog.json"));
  const subjects = (catalog.subjects ?? []).map((summary) => {
    const subject = readJsonFile(path.join(contentRoot, "subjects", summary.slug, "subject.json"));
    const bank = readJsonFile(path.join(contentRoot, "subjects", summary.slug, "questions.json"));
    const topics = (subject.units ?? []).flatMap((unit) => (unit.topics ?? []).map((entry) => ({
      unit,
      entry,
      bundle: readJsonFile(path.join(repositoryRoot, entry.bundlePath)),
    })));
    const questions = [bank.questions, bank.subjectWideQuestions, bank.deferred]
      .filter((group) => Array.isArray(group))
      .flat();
    return { summary, subject, topics, questions };
  });
  return { catalog, subjects };
};

/** Every topic id reachable from catalog.json, in catalog order. */
export const collectTopicIds = (corpus) => corpus.subjects.flatMap((subject) => subject.topics.map((topic) => topic.bundle.id));

/** Question -> topic edges. `exact`-scope questions always carry exactly one mapped topic id. */
export const mappedTopicIds = (question) => (Array.isArray(question.mappedCanonicalTopicIds) ? question.mappedCanonicalTopicIds : []);

/**
 * A question's source collection. 494 sleep-technology questions carry the value
 * only under provenance, so the top-level field is read first and provenance is
 * used as a documented fallback. No value is ever invented.
 */
export const questionSourceCollection = (question) => question.sourceCollection ?? question.provenance?.sourceCollection;
