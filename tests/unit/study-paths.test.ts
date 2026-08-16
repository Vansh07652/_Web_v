import { describe, expect, it } from "vitest";
import catalogJson from "../../content-v2/catalog.json";
import {
  STUDY_PATHS,
  estimatedMinutesForCourse,
  getStudyPath,
  isStudyPathSlug,
  listStudyPaths,
  listUnpathedCourses,
  studyPathHref,
} from "../../src/lib/paths/study-paths";
import { getTopicMetadata, listTopicMetadataIds } from "../../src/lib/content/metadata";

interface CatalogSubject {
  slug: string;
  title: string;
  category: string;
  status: string;
  statistics: {
    topicCount: number;
    teachingTopicCount: number;
    eli10TopicCount: number;
    uniqueQuestionCount: number;
  };
}

const catalog = catalogJson as unknown as { subjects: CatalogSubject[] };
const bySlug = new Map(catalog.subjects.map((subject) => [subject.slug, subject]));

/** The three paths whose membership is a catalog category rather than a list. */
const CATEGORY_PATHS = ["pre-health-foundations", "healthcare-foundations", "allied-health"];

describe("study path definitions", () => {
  it("publishes a small, named set", () => {
    expect(STUDY_PATHS.length).toBe(9);
    expect(STUDY_PATHS.map((path) => path.slug)).toEqual([
      "anatomy-and-physiology",
      "chemistry-foundations",
      "behavioral-and-developmental-sciences",
      "nursing-foundations",
      "clinical-reasoning",
      "exam-preparation",
      "pre-health-foundations",
      "healthcare-foundations",
      "allied-health",
    ]);
  });

  it("publishes each slug exactly once", () => {
    const slugs = STUDY_PATHS.map((path) => path.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("publishes the two paths the catalog's chemistry and psychology courses ask for", () => {
    expect(getStudyPath("chemistry-foundations")?.courseSlugs).toEqual([
      "general-chemistry-1",
      "general-chemistry-2",
      "organic-chemistry-1",
      "organic-chemistry-2",
    ]);
    expect(getStudyPath("behavioral-and-developmental-sciences")?.courseSlugs).toEqual([
      "developmental-psychology",
      "introduction-to-psychology",
    ]);
  });

  it("groups at least two courses in every path", () => {
    // A path around a single course would be the course with extra words on
    // top; the module folds those into a broader grouping instead.
    for (const path of STUDY_PATHS) expect(path.courseSlugs.length).toBeGreaterThanOrEqual(2);
  });

  it("names only courses that exist in the catalog, and never twice in one path", () => {
    for (const path of STUDY_PATHS) {
      for (const slug of path.courseSlugs) {
        // A typo here must fail the build rather than render a path with a
        // course missing from it. scripts/validate-study-paths.mjs checks the
        // same thing against the source, for builds that do not run vitest.
        expect(bySlug.has(slug)).toBe(true);
      }
      expect(new Set(path.courseSlugs).size).toBe(path.courseSlugs.length);
    }
  });

  it("claims no exam alignment anywhere in its slugs", () => {
    // The corpus carries no exam blueprint, so no path may be named after one.
    // "mcat-foundations" is the exception the catalog itself evidences: a real
    // course with that title.
    for (const path of STUDY_PATHS) {
      expect(["teas", "hesi", "nclex", "mcat", "usmle", "nclex-rn"]).not.toContain(path.slug);
    }
  });

  it("gives every path a goal, a summary and rendered limitations", () => {
    for (const path of STUDY_PATHS) {
      expect(path.title.length).toBeGreaterThan(0);
      expect(path.goal.length).toBeGreaterThan(0);
      expect(path.summary.length).toBeGreaterThan(0);
      expect(path.limitations.length).toBeGreaterThanOrEqual(2);
      for (const line of path.limitations) expect(line.length).toBeGreaterThan(0);
    }
  });

  it("carries the limitations through to every rendered detail", () => {
    for (const detail of listStudyPaths()) {
      expect(detail.limitations.length).toBeGreaterThanOrEqual(2);
      for (const line of detail.limitations) expect(line.trim().length).toBeGreaterThan(0);
    }
  });

  it("states the non-affiliation disclaimer on every path", () => {
    for (const path of STUDY_PATHS) {
      const joined = path.limitations.join(" ");
      expect(joined).toContain("not affiliated with");
      expect(joined).toContain("testing organisation");
    }
  });

  it("says where each path came from in its first limitation", () => {
    expect(getStudyPath("pre-health-foundations")?.limitations[0]).toContain("pre-health-core");
    expect(getStudyPath("healthcare-foundations")?.limitations[0]).toContain("healthcare-foundations");
    expect(getStudyPath("allied-health")?.limitations[0]).toContain("allied-health");
    // A curated path says that its membership is a judgement, not a field.
    for (const path of STUDY_PATHS) {
      if (CATEGORY_PATHS.includes(path.slug)) {
        expect(path.limitations[0]).toContain("Derived from every course the catalog files under the category");
      } else {
        expect(path.limitations[0]).toContain("Membership is an explicit list");
        expect(path.limitations[0]).toContain("editorial judgement");
      }
    }
  });

  it("says on every path how many courses no path names", () => {
    // Being in no path is allowed. Saying nothing about it is not.
    const unpathed = listUnpathedCourses();
    const expected = unpathed.length === 0
      ? `every one of the ${catalog.subjects.length} courses in the catalog appears in at least one`
      : `${unpathed.length} of the ${catalog.subjects.length} courses in the catalog appear in none`;
    for (const path of STUDY_PATHS) expect(path.limitations.join(" ")).toContain(expected);
  });

  it("builds the exam path from courses in this library, not from a blueprint", () => {
    const path = getStudyPath("exam-preparation");
    expect(path).toBeDefined();
    expect(path?.courseSlugs).toEqual(["respiratory-therapy", "sleep-technology", "mcat-foundations", "cna-exam-prep"]);
    const joined = path?.limitations.join(" ") ?? "";
    expect(joined).toContain("not aligned to any published exam blueprint");
    expect(joined).toContain("this repository contains none");
    expect(joined).toContain("courses that already exist in this library");
  });

  it("keeps the overlap it claims between clinical reasoning and nursing foundations", () => {
    const nursing = getStudyPath("nursing-foundations")?.courseSlugs ?? [];
    const shared = (getStudyPath("clinical-reasoning")?.courseSlugs ?? []).filter((slug) => slug !== "pathophysiology");
    expect(shared.length).toBeGreaterThan(0);
    for (const slug of shared) expect(nursing).toContain(slug);
  });

  it("resolves every path and every course slug it names", () => {
    for (const path of STUDY_PATHS) {
      const detail = getStudyPath(path.slug);
      expect(detail).toBeDefined();
      expect(detail?.courseSlugs.length).toBeGreaterThan(0);
      for (const slug of path.courseSlugs) expect(bySlug.has(slug)).toBe(true);
      expect(detail?.courses.length).toBe(path.courseSlugs.length);
    }
  });

  it("names each course exactly as the catalog does", () => {
    for (const detail of listStudyPaths()) {
      for (const course of detail.courses) {
        const subject = bySlug.get(course.slug);
        expect(subject).toBeDefined();
        expect(course.title).toBe(subject?.title);
        expect(course.status).toBe(subject?.status);
        expect(course.topicCount).toBe(subject?.statistics.topicCount);
        expect(course.questionCount).toBe(subject?.statistics.uniqueQuestionCount);
      }
    }
  });

  it("returns undefined for a slug it does not publish", () => {
    expect(getStudyPath("teas")).toBeUndefined();
    expect(getStudyPath("")).toBeUndefined();
    expect(getStudyPath("PRE-HEALTH-FOUNDATIONS")).toBeUndefined();
  });

  it("recognises only its own slugs", () => {
    expect(isStudyPathSlug("allied-health")).toBe(true);
    expect(isStudyPathSlug("nclex")).toBe(false);
    expect(isStudyPathSlug(42)).toBe(false);
    expect(isStudyPathSlug(undefined)).toBe(false);
  });

  it("builds hrefs under /paths", () => {
    expect(studyPathHref("allied-health")).toBe("/paths/allied-health");
    for (const path of STUDY_PATHS) expect(studyPathHref(path.slug)).toBe(`/paths/${path.slug}`);
  });
});

describe("study path totals", () => {
  it("matches the sum of its courses' catalog topic counts", () => {
    for (const detail of listStudyPaths()) {
      const expected = detail.courseSlugs.reduce((total, slug) => total + (bySlug.get(slug)?.statistics.topicCount ?? 0), 0);
      expect(detail.topicCount).toBe(expected);
    }
  });

  it("matches the sum of its courses' catalog question counts", () => {
    for (const detail of listStudyPaths()) {
      const expected = detail.courseSlugs.reduce((total, slug) => total + (bySlug.get(slug)?.statistics.uniqueQuestionCount ?? 0), 0);
      expect(detail.questionCount).toBe(expected);
    }
  });

  it("covers every catalog course exactly once across the three category paths, bar the curated remainder", () => {
    const covered: string[] = [];
    for (const slug of CATEGORY_PATHS) covered.push(...(getStudyPath(slug)?.courseSlugs ?? []));
    // No course is filed under two categories, so the category paths never
    // repeat one between them.
    expect(new Set(covered).size).toBe(covered.length);
    const missing = catalog.subjects.map((subject) => subject.slug).filter((slug) => !covered.includes(slug));
    // Today: the pathophysiology category, whose single course a curated path
    // carries instead. A single-course path is not worth publishing.
    expect(missing).toEqual(["pathophysiology"]);
    expect(getStudyPath("clinical-reasoning")?.courseSlugs).toContain("pathophysiology");
  });

  it("leaves no catalog course out of every path, and reports the same figure it renders", () => {
    const named = new Set(STUDY_PATHS.flatMap((path) => path.courseSlugs));
    const derived = catalog.subjects.map((subject) => subject.slug).filter((slug) => !named.has(slug));
    expect(listUnpathedCourses()).toEqual(derived);
    // A course in no path is permitted — the catalog lists everything — but it
    // must be a decision. Today every course is named by at least one path; if
    // an import changes that, this expectation and the copy change together.
    expect(derived).toEqual([]);
  });

  it("hands back a copy of the unpathed list", () => {
    const first = listUnpathedCourses();
    first.push("tampered");
    expect(listUnpathedCourses()).not.toContain("tampered");
  });

  it("counts coverage from the courses' own statistics", () => {
    for (const detail of listStudyPaths()) {
      let notes = 0;
      let eli10 = 0;
      let questions = 0;
      for (const slug of detail.courseSlugs) {
        const statistics = bySlug.get(slug)?.statistics;
        if (!statistics) continue;
        if (statistics.teachingTopicCount > 0) notes += 1;
        if (statistics.eli10TopicCount > 0) eli10 += 1;
        if (statistics.uniqueQuestionCount > 0) questions += 1;
      }
      expect(detail.coverage.coursesWithCollegeNotes).toBe(notes);
      expect(detail.coverage.coursesWithEli10).toBe(eli10);
      expect(detail.coverage.coursesWithQuestions).toBe(questions);
      expect(detail.coverage.coursesWithQuestions).toBeLessThanOrEqual(detail.courses.length);
    }
  });

  it("reports the exam path's practice questions from the catalog, not from a claim", () => {
    const detail = getStudyPath("exam-preparation");
    expect(detail).toBeDefined();
    const withQuestions = (detail?.courseSlugs ?? []).filter((slug) => (bySlug.get(slug)?.statistics.uniqueQuestionCount ?? 0) > 0);
    expect(detail?.coverage.coursesWithQuestions).toBe(withQuestions.length);
    // MCAT Foundations is on this path and carries no practice questions, so
    // the coverage figure has to be lower than the course count.
    expect(estimatedMinutesForCourse("mcat-foundations")).toBeGreaterThan(0);
    expect(bySlug.get("mcat-foundations")?.statistics.uniqueQuestionCount).toBe(0);
    expect(detail?.coverage.coursesWithQuestions).toBeLessThan(detail?.courses.length ?? 0);
  });
});

describe("estimated minutes", () => {
  /** The documented derivation, recomputed here from the metadata sidecar. */
  const minutesFromSidecar = (courseSlug: string): number => {
    let total = 0;
    for (const topicId of listTopicMetadataIds()) {
      const parts = topicId.split(":");
      if (parts.length !== 4 || parts[0] !== "topic" || parts[1] !== courseSlug) continue;
      total += getTopicMetadata(topicId)?.estimatedStudyMinutes ?? 0;
    }
    return total;
  };

  it("sums the sidecar's per-topic estimate for a course", () => {
    expect(estimatedMinutesForCourse("genetics")).toBe(minutesFromSidecar("genetics"));
    expect(estimatedMinutesForCourse("pathophysiology")).toBe(minutesFromSidecar("pathophysiology"));
    expect(estimatedMinutesForCourse("nursing-math-dosage")).toBe(minutesFromSidecar("nursing-math-dosage"));
  });

  it("returns zero for a course the catalog does not carry", () => {
    expect(estimatedMinutesForCourse("not-a-course")).toBe(0);
    expect(estimatedMinutesForCourse("")).toBe(0);
  });

  it("sums course minutes into the path total", () => {
    for (const detail of listStudyPaths()) {
      const expected = detail.courseSlugs.reduce((total, slug) => total + estimatedMinutesForCourse(slug), 0);
      expect(detail.estimatedMinutes).toBe(expected);
      expect(detail.estimatedMinutes).toBeGreaterThan(0);
    }
  });

  it("gives a two-course path exactly the sum of its two courses", () => {
    expect(getStudyPath("behavioral-and-developmental-sciences")?.estimatedMinutes).toBe(
      estimatedMinutesForCourse("developmental-psychology") + estimatedMinutesForCourse("introduction-to-psychology"),
    );
  });
});

describe("study path immutability", () => {
  it("hands back a fresh copy each time, so a caller cannot edit the published set", () => {
    const first = getStudyPath("allied-health");
    first?.courseSlugs.push("tampered");
    first?.limitations.push("tampered");
    const second = getStudyPath("allied-health");
    expect(second?.courseSlugs).not.toContain("tampered");
    expect(second?.limitations).not.toContain("tampered");
  });

  it("returns equal details for two identical calls", () => {
    expect(getStudyPath("healthcare-foundations")).toEqual(getStudyPath("healthcare-foundations"));
    expect(listStudyPaths()).toEqual(listStudyPaths());
  });
});
