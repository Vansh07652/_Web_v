/**
 * Study paths — groupings of courses, derived only from evidence the catalog
 * really carries.
 *
 * WHAT A PATH IS, AND WHAT IT IS NOT
 *
 * A path here is a grouping of courses already in this library and nothing
 * more. Two kinds are published, and each says which kind it is in its first
 * limitation line:
 *
 *   - a *category* path takes every course the catalog files under one
 *     `category` value. Membership is a catalog field, so it cannot drift from
 *     the corpus;
 *   - a *curated* path names its courses explicitly. Membership is then an
 *     editorial judgement about which courses sit together, and the copy says
 *     so rather than dressing it up as derived. Every slug on the list is
 *     checked against the catalog by the tests and by
 *     `scripts/validate-study-paths.mjs`, so a typo fails the build instead of
 *     rendering an empty path.
 *
 * There is no exam blueprint anywhere in this repository, and no prerequisite
 * graph. The only topic-to-topic edge the corpus evidences is the co-mapping
 * list in the metadata sidecar, and that records only that one question touched
 * two topics — not that one must be studied before the other. So no path is a
 * syllabus, and the entrance-and-certification path is built from courses whose
 * own titles name an exam, not from any exam's published content outline.
 *
 * Paths overlap and they do not partition the library: a course can appear in
 * more than one path, and a course can appear in none. Which of those is true
 * today is computed below rather than asserted, and stated on every path.
 *
 * HOW THE NUMBERS ARE DERIVED
 *
 * `topicCount` and `questionCount` are sums of each course's own catalog
 * statistics — `topicCount` and `uniqueQuestionCount` respectively. Note that
 * `uniqueQuestionCount` is unique *within a course*: across the whole catalog
 * these sum to the question placements rather than the distinct questions,
 * because a question mapped into two courses is counted in both. The limitation
 * copy says so.
 *
 * `estimatedMinutes` is the sum of `estimatedStudyMinutes` over every topic in
 * the path's courses, taken from the generated topic metadata sidecar. That
 * per-topic figure is itself documented there as
 * `round(sectionCharacterCount / 900 + exactQuestionCount)` clamped to
 * `[2, 90]` — a reading-rate assumption plus one minute per exact-mapped
 * question. Two consequences worth stating plainly:
 *
 *   - subject-wide question banks are not counted, because they are attached to
 *     no topic;
 *   - the result is a rough planning aid. It is not a measurement, not a
 *     recommendation and not a promise about how long anything will take.
 *
 * Topics are attributed to a course by the subject slug embedded in the topic
 * id (`topic:<subjectSlug>:<unitSlug>:<topicSlug>`), which is how the corpus
 * names every one of its topics.
 *
 * Everything below is pure: no clock, no storage, no network.
 */
import catalogJson from "../../../content-v2/catalog.json";
import { getTopicMetadata, listTopicMetadataIds } from "../content/metadata";

/** Only the catalog fields this module reads. The file carries more. */
interface CatalogStatistics {
  unitCount: number;
  topicCount: number;
  teachingTopicCount: number;
  eli10TopicCount: number;
  highYieldTopicCount: number;
  referencedTopicCount: number;
  exactOrMappedQuestionCount: number;
  subjectWideQuestionCount: number;
  uniqueQuestionCount: number;
  citationReviewRequiredCount: number;
}

interface CatalogSubjectSummary {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  statistics: CatalogStatistics;
  href: string;
}

interface Catalog {
  subjects: CatalogSubjectSummary[];
}

const catalog = catalogJson as unknown as Catalog;

export interface StudyPathCourse {
  slug: string;
  title: string;
  topicCount: number;
  questionCount: number;
  status: string;
}

export interface StudyPath {
  slug: string;
  title: string;
  goal: string;
  summary: string;
  courseSlugs: string[];
  limitations: string[];
}

export interface StudyPathDetail extends StudyPath {
  courses: StudyPathCourse[];
  topicCount: number;
  questionCount: number;
  estimatedMinutes: number;
  coverage: {
    coursesWithCollegeNotes: number;
    coursesWithEli10: number;
    coursesWithQuestions: number;
  };
}

/**
 * Said on every path, because it is true of every path. The first line is the
 * affiliation disclaimer the brief requires; the rest describe what the
 * grouping is made of.
 */
const SHARED_LIMITATIONS: readonly string[] = [
  "MedMosa is not affiliated with, endorsed by or accredited by any testing organisation, licensing body or school, and claims no alignment to any exam blueprint.",
  "A path is a grouping of courses already in this library. It is not a syllabus, an exam blueprint or a prerequisite sequence — this repository contains none of those.",
  "Course order follows content-v2/catalog.json. It is a stable order, not a recommended teaching order.",
  "Topic and question counts are each course's own catalog statistics. A question mapped into two courses is counted in both, so a path total counts placements rather than distinct questions.",
  "Estimated time is a rough planning aid derived from topic prose length plus exact-mapped question counts. It excludes subject-wide question banks, and it is neither a measurement nor a promise.",
  "Courses differ in what they contain: some have no college-style notes, some have no practice questions. The coverage figures on this path say how many.",
];

/** The line that names the evidence a category path is built from. */
const derivedFromCategory = (category: string, courseCount: number): string =>
  `Derived from every course the catalog files under the category "${category}" — ${courseCount} ${courseCount === 1 ? "course" : "courses"}. Membership is the category field and nothing else.`;

/** The same line for a curated path, which is an editorial judgement instead. */
const curatedMembership = (courseCount: number, reason: string): string =>
  `Membership is an explicit list of ${courseCount} ${courseCount === 1 ? "course" : "courses"} — ${reason} — rather than a catalog field, so it is an editorial judgement about which courses sit together. Every slug on that list is checked against content-v2/catalog.json by the tests and by scripts/validate-study-paths.mjs, so a mistyped course fails the build instead of quietly disappearing.`;

const subjectsInCategory = (category: string): CatalogSubjectSummary[] =>
  catalog.subjects.filter((subject) => subject.category === category);

const catalogIndex = new Map(catalog.subjects.map((subject, index) => [subject.slug, index]));

/**
 * Puts a curated list into catalog order, so course order means the same thing
 * on every path — the stable order the limitations describe, never a claim
 * about what to study first. A slug the catalog does not know sorts last rather
 * than being dropped, so the tests and the validator can see it and fail.
 */
const inCatalogOrder = (slugs: readonly string[]): string[] =>
  [...slugs].sort((left, right) =>
    (catalogIndex.get(left) ?? Number.MAX_SAFE_INTEGER) - (catalogIndex.get(right) ?? Number.MAX_SAFE_INTEGER));

/**
 * One published path before its shared copy is attached. Exactly one of
 * `category` and `courseSlugs` is set: the first makes it a category path, the
 * second a curated one. `scripts/validate-study-paths.mjs` reads these two
 * fields straight out of this file's source, so keep them literal.
 */
interface PathDefinition {
  slug: string;
  title: string;
  goal: string;
  summary: string;
  /** Category path: the catalog category whose courses it takes, in full. */
  category?: string;
  /** Curated path: the explicit membership list, in any order. */
  courseSlugs?: readonly string[];
  /** Why these courses, in a phrase that completes the membership sentence. */
  membership: string;
  extraLimitations?: readonly string[];
}

/**
 * The published set: six curated paths, then the three category paths that
 * between them hold every course in the library. Curated paths come first
 * because they are the ones a visitor can finish; the category paths are the
 * browse-everything groupings behind them.
 *
 * This order is also the documented tie-break for the diagnostic questionnaire
 * in `lib/paths/diagnostic.ts`, so it is deliberate rather than incidental.
 */
const PATH_DEFINITIONS: readonly PathDefinition[] = [
  {
    slug: "anatomy-and-physiology",
    title: "Anatomy and physiology",
    goal: "Learn the body's structure and its function together, across the four courses this library carries on them.",
    summary: "Anatomy & Physiology I and II with Human Physiology I and II, in catalog order. The two A&P courses carry practice questions; the two physiology courses are notes only.",
    courseSlugs: ["anatomy-physiology-1", "anatomy-physiology-2", "human-physiology-1", "human-physiology-2"],
    membership: "the catalog's two anatomy and physiology courses and its two human physiology courses, which cover the same body systems from the structural and the functional side",
  },
  {
    slug: "chemistry-foundations",
    title: "Chemistry foundations",
    goal: "Work through the general and organic chemistry courses in this library.",
    summary: "General Chemistry I and II with Organic Chemistry I and II, in catalog order. The general chemistry courses carry practice questions; the organic chemistry courses are notes only.",
    courseSlugs: ["general-chemistry-1", "general-chemistry-2", "organic-chemistry-1", "organic-chemistry-2"],
    membership: "the catalog's two general chemistry courses and its two organic chemistry courses",
    extraLimitations: [
      "The catalog records both organic chemistry courses with a partial build status, which the course list on this page shows. Read them as the part of an organic chemistry course this library has finished, not as the whole of one.",
    ],
  },
  {
    slug: "behavioral-and-developmental-sciences",
    title: "Behavioral and developmental sciences",
    goal: "Cover the psychology this library carries, from general principles to development across the lifespan.",
    summary: "Developmental Psychology: Lifespan Development and Introduction to Psychology, in catalog order. Both are taught at college level and in plain language.",
    courseSlugs: ["introduction-to-psychology", "developmental-psychology"],
    membership: "the catalog's two psychology courses",
    extraLimitations: [
      "Developmental Psychology's practice questions are a subject-wide bank rather than questions attached to its topics, so they are counted in the question total but not in the estimated time.",
    ],
  },
  {
    slug: "nursing-foundations",
    title: "Nursing foundations",
    goal: "Cover the practice-facing foundations a nursing programme starts from.",
    summary: "The dosage-maths, clinical judgment, health assessment, patient safety and pharmacology courses with Fundamentals of Nursing Practice, in catalog order.",
    courseSlugs: [
      "fundamentals-of-nursing-practice",
      "nursing-math-dosage",
      "health-assessment",
      "patient-safety",
      "clinical-judgment",
      "pharmacology-foundations",
    ],
    membership: "the fundamentals course plus the five foundation courses whose units are written for nursing practice — dosage calculation, health assessment, patient safety, clinical judgment and pharmacology",
    extraLimitations: [
      "Most of these courses are question banks rather than college-style notes, and the catalog's status beside each course says which is which. Pharmacology Foundations is recorded as carrying no authoritative citations.",
    ],
  },
  {
    slug: "clinical-reasoning",
    title: "Clinical reasoning",
    goal: "Follow a problem from the mechanism behind it to the assessment, the decision and the drug.",
    summary: "Pathophysiology with the clinical judgment, health assessment and pharmacology courses, in catalog order.",
    courseSlugs: ["pathophysiology", "health-assessment", "clinical-judgment", "pharmacology-foundations"],
    membership: "the pathophysiology course and the three foundation courses around it — assessment, judgment and pharmacology",
    extraLimitations: [
      "Three of these courses also appear in Nursing foundations. The two paths are different routes through overlapping material, not different material.",
    ],
  },
  {
    slug: "exam-preparation",
    title: "Entrance and certification exam preparation",
    goal: "Practise against the courses in this library whose own titles are written towards an entrance or certification exam.",
    summary: "Respiratory Therapy, Sleep Technology (RPSGT), MCAT Foundations and CNA Exam Preparation, in catalog order.",
    courseSlugs: ["cna-exam-prep", "respiratory-therapy", "sleep-technology", "mcat-foundations"],
    membership: "the four courses whose own catalog titles and unit lists are written towards an entrance or certification exam",
    extraLimitations: [
      "This path is built from courses that already exist in this library. It is not aligned to any published exam blueprint — this repository contains none, so no alignment has been checked and none is claimed. The exam names here are the courses' own titles and nothing more.",
      "Nothing on this path can tell you whether you are ready to sit an exam. Only the awarding body can say what its exam covers.",
    ],
  },
  {
    slug: "pre-health-foundations",
    title: "Pre-health core science",
    goal: "Work through the college science courses this library files as pre-health core.",
    summary: "Every course the catalog files under pre-health-core — anatomy and physiology, biology, chemistry, physics, psychology, genetics, ecology, nutrition, statistics and MCAT Foundations — in catalog order. It is the broadest grouping published here, and the shorter curated paths draw from it.",
    category: "pre-health-core",
    membership: "every course in the pre-health-core category",
    extraLimitations: [
      "MCAT Foundations sits in this category, so it appears both here and in the entrance and certification exam preparation path.",
    ],
  },
  {
    slug: "healthcare-foundations",
    title: "Healthcare foundations",
    goal: "Cover the practice-facing foundation courses — terminology, dosage maths, safety, communication and ethics.",
    summary: "Every course the catalog files under healthcare-foundations, in catalog order. Several are question banks without college-style notes.",
    category: "healthcare-foundations",
    membership: "every course in the healthcare-foundations category",
  },
  {
    slug: "allied-health",
    title: "Allied health programmes",
    goal: "Practise against the allied-health question banks in this library.",
    summary: "Every course the catalog files under allied-health, in catalog order. This is the largest path by question count.",
    category: "allied-health",
    membership: "every course in the allied-health category",
  },
];

/** The membership of one definition, however it declares it. */
const definitionCourses = (definition: PathDefinition): string[] =>
  definition.category
    ? subjectsInCategory(definition.category).map((subject) => subject.slug)
    : inCatalogOrder(definition.courseSlugs ?? []);

const pathedCourseSlugs = new Set<string>();
for (const definition of PATH_DEFINITIONS) {
  for (const slug of definitionCourses(definition)) pathedCourseSlugs.add(slug);
}

/**
 * Courses no published path names. Being in no path is allowed — the course
 * catalog lists everything either way — but it is never left unsaid: the line
 * below is rendered on every path, and it counts rather than claims.
 */
const unpathedCourses: string[] = catalog.subjects
  .filter((subject) => !pathedCourseSlugs.has(subject.slug))
  .map((subject) => subject.slug);

const COVERAGE_LIMITATION: string = unpathedCourses.length === 0
  ? `Paths overlap rather than divide the library up: a course can appear in more than one path, and every one of the ${catalog.subjects.length} courses in the catalog appears in at least one. The course catalog is still the complete list.`
  : `Paths overlap rather than divide the library up: a course can appear in more than one path, and ${unpathedCourses.length} of the ${catalog.subjects.length} courses in the catalog appear in none. The course catalog is still the complete list, and every course is reachable there whether or not a path names it.`;

/**
 * The published set. Every membership list is resolved from the catalog at
 * load, so neither a category that gains a course nor a hand-written list can
 * drift away from the corpus without something failing.
 */
export const STUDY_PATHS: readonly StudyPath[] = PATH_DEFINITIONS.map((definition) => {
  const courseSlugs = definitionCourses(definition);
  return {
    slug: definition.slug,
    title: definition.title,
    goal: definition.goal,
    summary: definition.summary,
    courseSlugs,
    limitations: [
      definition.category
        ? derivedFromCategory(definition.category, courseSlugs.length)
        : curatedMembership(courseSlugs.length, definition.membership),
      ...SHARED_LIMITATIONS,
      COVERAGE_LIMITATION,
      ...(definition.extraLimitations ?? []),
    ],
  };
});

const subjectsBySlug = new Map(catalog.subjects.map((subject) => [subject.slug, subject]));

/**
 * Minutes per course, summed from the topic metadata sidecar the first time
 * anything asks. Built once because it walks every topic id in the corpus.
 */
let minutesByCourse: Map<string, number> | null = null;

const courseMinutes = (): Map<string, number> => {
  if (minutesByCourse) return minutesByCourse;
  const totals = new Map<string, number>();
  for (const topicId of listTopicMetadataIds()) {
    // `topic:<subjectSlug>:<unitSlug>:<topicSlug>`; anything else is skipped
    // rather than guessed at.
    const parts = topicId.split(":");
    if (parts.length !== 4 || parts[0] !== "topic") continue;
    const slug = parts[1];
    if (!subjectsBySlug.has(slug)) continue;
    const minutes = getTopicMetadata(topicId)?.estimatedStudyMinutes;
    if (typeof minutes !== "number" || !Number.isFinite(minutes) || minutes < 0) continue;
    totals.set(slug, (totals.get(slug) ?? 0) + Math.round(minutes));
  }
  minutesByCourse = totals;
  return totals;
};

/**
 * Estimated study minutes for one course, on the derivation in this file's
 * header. Zero for a slug the catalog does not know.
 */
export const estimatedMinutesForCourse = (courseSlug: string): number => courseMinutes().get(courseSlug) ?? 0;

/**
 * The catalog courses no path names, newest copy each call. Empty today; the
 * paths page and the limitation line above both read the same figure, so the
 * page cannot go on claiming full coverage after an import that breaks it.
 */
export const listUnpathedCourses = (): string[] => [...unpathedCourses];

const toCourse = (subject: CatalogSubjectSummary): StudyPathCourse => ({
  slug: subject.slug,
  title: subject.title,
  topicCount: subject.statistics.topicCount,
  questionCount: subject.statistics.uniqueQuestionCount,
  status: subject.status,
});

const detail = (path: StudyPath): StudyPathDetail => {
  const courses: StudyPathCourse[] = [];
  let estimatedMinutes = 0;
  let coursesWithCollegeNotes = 0;
  let coursesWithEli10 = 0;
  let coursesWithQuestions = 0;
  for (const slug of path.courseSlugs) {
    const subject = subjectsBySlug.get(slug);
    // A path can only ever list catalog slugs, but the guard keeps a future
    // catalog edit from producing a course entry with invented numbers.
    if (!subject) continue;
    courses.push(toCourse(subject));
    estimatedMinutes += estimatedMinutesForCourse(slug);
    if (subject.statistics.teachingTopicCount > 0) coursesWithCollegeNotes += 1;
    if (subject.statistics.eli10TopicCount > 0) coursesWithEli10 += 1;
    if (subject.statistics.uniqueQuestionCount > 0) coursesWithQuestions += 1;
  }
  return {
    ...path,
    courseSlugs: [...path.courseSlugs],
    limitations: [...path.limitations],
    courses,
    topicCount: courses.reduce((total, course) => total + course.topicCount, 0),
    questionCount: courses.reduce((total, course) => total + course.questionCount, 0),
    estimatedMinutes,
    coverage: { coursesWithCollegeNotes, coursesWithEli10, coursesWithQuestions },
  };
};

export const listStudyPaths = (): StudyPathDetail[] => STUDY_PATHS.map(detail);

export const getStudyPath = (slug: string): StudyPathDetail | undefined => {
  const path = STUDY_PATHS.find((candidate) => candidate.slug === slug);
  return path ? detail(path) : undefined;
};

export const studyPathHref = (slug: string): string => `/paths/${slug}`;

/** True for a slug this module publishes. Used by the planner's input guard. */
export const isStudyPathSlug = (slug: unknown): slug is string =>
  typeof slug === "string" && STUDY_PATHS.some((path) => path.slug === slug);
