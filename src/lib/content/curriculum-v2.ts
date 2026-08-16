import subjectJson from "../../../content-v2/client/subjects/anatomy-physiology-1/subject.json";
import catalogJson from "../../../content-v2/client/catalog.json";
import type { CurriculumCatalogV2, CurriculumQuestionBankV2, CurriculumSearchEntryV2, CurriculumSubjectV2, CurriculumTopicV2 } from "../../types";

/**
 * Anatomy & Physiology I is the default entry course, so its bundle is imported
 * eagerly; every other course is code-split behind a dynamic import.
 */
const anatomyPhysiology1 = {
  ...subjectJson,
  statistics: { ...subjectJson.statistics, completeTeachingTopicCount: subjectJson.statistics.teachingTopicCount },
} as CurriculumSubjectV2;
const catalog = catalogJson as CurriculumCatalogV2;
const curriculumSubjectModules = import.meta.glob(
  ["../../../content-v2/client/subjects/*/subject.json", "!../../../content-v2/client/subjects/anatomy-physiology-1/subject.json"],
  { import: "default" },
) as Record<string, () => Promise<CurriculumSubjectV2>>;
const curriculumTopicModules = import.meta.glob(
  "../../../content-v2/client/subjects/*/topics/*/*.json",
  { import: "default" },
) as Record<string, () => Promise<CurriculumTopicV2>>;
const curriculumQuestionModules = import.meta.glob(
  "../../../content-v2/client/subjects/*/questions.json",
  { import: "default" },
) as Record<string, () => Promise<CurriculumQuestionBankV2>>;

const subjectLoaders = new Map<string, () => Promise<CurriculumSubjectV2>>();
for (const [modulePath, load] of Object.entries(curriculumSubjectModules)) {
  const match = modulePath.match(/subjects\/([^/]+)\/subject\.json$/);
  if (match) subjectLoaders.set(match[1], load);
}
subjectLoaders.set("anatomy-physiology-1", async () => anatomyPhysiology1);
const curriculumTopicLoaders = new Map<string, () => Promise<CurriculumTopicV2>>();
for (const [modulePath, load] of Object.entries(curriculumTopicModules)) {
  const match = modulePath.match(/subjects\/([^/]+)\/topics\/([^/]+)\/([^/]+)\.json$/);
  if (match) curriculumTopicLoaders.set(`${match[1]}/${match[2]}/${match[3]}`, load);
}
const questionLoaders = new Map<string, () => Promise<CurriculumQuestionBankV2>>();
for (const [modulePath, load] of Object.entries(curriculumQuestionModules)) {
  const match = modulePath.match(/subjects\/([^/]+)\/questions\.json$/);
  if (match) questionLoaders.set(match[1], load);
}

export const loadCurriculumCatalog = (): CurriculumCatalogV2 => catalog;
export const loadCurriculumSearchIndex = async (): Promise<CurriculumSearchEntryV2[]> => {
  const module = await import("../../../content-v2/client/search-index.json");
  return module.default as CurriculumSearchEntryV2[];
};
export const getCurriculumSubjectSummary = (subjectSlug: string) => catalog.subjects.find((item) => item.slug === subjectSlug);
export const loadCurriculumSubject = (subjectSlug: string) => subjectLoaders.get(subjectSlug)?.();
export const loadCurriculumTopic = (subjectSlug: string, unitSlug: string, topicSlug: string) => curriculumTopicLoaders.get(`${subjectSlug}/${unitSlug}/${topicSlug}`)?.();
export const loadCurriculumQuestions = (subjectSlug: string) => questionLoaders.get(subjectSlug)?.();
export const curriculumSubjectHref = (subjectSlug: string) => `/learn/${subjectSlug}`;
export const curriculumUnitHref = (subjectSlug: string, unitSlug: string) => `${curriculumSubjectHref(subjectSlug)}/${unitSlug}`;
export const curriculumTopicHref = (subjectSlug: string, unitSlug: string, topicSlug: string) => `${curriculumUnitHref(subjectSlug, unitSlug)}/${topicSlug}`;
export const curriculumPracticeHref = (subjectSlug: string) => `${curriculumSubjectHref(subjectSlug)}/practice`;
