import { describe, expect, it } from "vitest";
import {
  applyLocalFilters,
  describeFilters,
  rankCurriculumEntries,
  type CurriculumSearchFilters,
  type RankedSearchEntry,
} from "../../src/lib/content/search-filters";
import type { CurriculumSearchEntryV2 } from "../../src/types";

/**
 * A hand-built fixture rather than the real 1,409-entry index: the ranking
 * rules are the thing under test, and a fixture makes every tier reachable in
 * one query.
 */
const entry = (overrides: Partial<CurriculumSearchEntryV2> & { id: string }): CurriculumSearchEntryV2 => ({
  subjectSlug: "physiology",
  subjectTitle: "Physiology",
  unitSlug: "unit",
  unitTitle: "General Unit",
  topicSlug: "topic",
  topicTitle: "Untitled Topic",
  aliases: [],
  availability: {
    collegeNotes: false,
    eli10: false,
    highYield: false,
    quickReview: false,
    workedExamples: false,
    references: false,
    exactQuestions: 0,
  },
  href: "/learn/physiology/unit/topic",
  ...overrides,
});

const rankingFixture: CurriculumSearchEntryV2[] = [
  entry({ id: "t-alias", topicTitle: "Stroke Volume", aliases: ["cardiac-cycle-overview"] }),
  entry({ id: "t-subject", topicTitle: "Valve Anatomy", subjectTitle: "Cardiac Cycle Foundations" }),
  entry({ id: "t-substring", topicTitle: "The Cardiac Cycle Explained" }),
  entry({ id: "t-none", topicTitle: "Bone Growth" }),
  entry({ id: "t-exact", topicTitle: "Cardiac Cycle" }),
  entry({ id: "t-unit", topicTitle: "Preload And Afterload", unitTitle: "Cardiac Cycle Mechanics" }),
  entry({ id: "t-prefix", topicTitle: "Cardiac Cycle Phases" }),
];

const ids = (ranked: RankedSearchEntry[]): string[] => ranked.map((item) => item.entry.id);

const filterFixture: CurriculumSearchEntryV2[] = [
  entry({
    id: "f-full",
    topicTitle: "Acid Base Balance",
    subjectSlug: "anatomy-physiology-1",
    availability: { collegeNotes: true, eli10: true, highYield: true, quickReview: true, workedExamples: true, references: true, exactQuestions: 12 },
  }),
  entry({
    id: "f-notes-only",
    topicTitle: "Buffer Systems",
    subjectSlug: "anatomy-physiology-1",
    availability: { collegeNotes: true, eli10: false, highYield: false, quickReview: false, workedExamples: false, references: false, exactQuestions: 0 },
  }),
  entry({
    id: "f-eli10-only",
    topicTitle: "Blood Gas Basics",
    subjectSlug: "biochemistry",
    availability: { collegeNotes: false, eli10: true, highYield: false, quickReview: false, workedExamples: false, references: false, exactQuestions: 0 },
  }),
  entry({
    id: "f-questions-only",
    topicTitle: "Renal Compensation",
    subjectSlug: "biochemistry",
    availability: { collegeNotes: false, eli10: false, highYield: false, quickReview: false, workedExamples: false, references: true, exactQuestions: 4 },
  }),
];

const difficultyOf = (topicId: string): "beginner" | "intermediate" | "advanced" | undefined => {
  if (topicId === "f-full") return "beginner";
  if (topicId === "f-notes-only") return "advanced";
  return undefined;
};

describe("rankCurriculumEntries ranking order", () => {
  it("orders exact title, prefix, substring, unit, subject, then alias", () => {
    const ranked = rankCurriculumEntries(rankingFixture, "cardiac cycle");
    expect(ids(ranked)).toEqual(["t-exact", "t-prefix", "t-substring", "t-unit", "t-subject", "t-alias"]);
    expect(ranked.map((item) => item.score)).toEqual([100, 80, 60, 45, 40, 30]);
    expect(ranked.map((item) => item.matchedOn)).toEqual(["title", "title", "title", "unit", "subject", "alias"]);
  });

  it("drops entries the query does not reach at all", () => {
    expect(ids(rankCurriculumEntries(rankingFixture, "cardiac cycle"))).not.toContain("t-none");
    expect(rankCurriculumEntries(rankingFixture, "endocrine feedback loops")).toEqual([]);
  });

  it("ignores punctuation and casing on both sides", () => {
    const ranked = rankCurriculumEntries(rankingFixture, "  CARDIAC   cycle!  ");
    expect(ids(ranked)).toEqual(["t-exact", "t-prefix", "t-substring", "t-unit", "t-subject", "t-alias"]);
  });

  it("matches a slug alias typed with spaces", () => {
    const ranked = rankCurriculumEntries([entry({ id: "a", topicTitle: "Stroke Volume", aliases: ["cardiac-cycle-overview"] })], "cardiac cycle overview");
    expect(ranked).toHaveLength(1);
    expect(ranked[0].matchedOn).toBe("alias");
    expect(ranked[0].score).toBe(30);
  });

  it("ranks every synonym-expanded hit below every direct one", () => {
    const fixture = [
      entry({ id: "s-synonym", topicTitle: "Myocardial Infarction" }),
      entry({ id: "s-alias", topicTitle: "Chest Pain Triage", aliases: ["heart-attack-basics"] }),
    ];
    const ranked = rankCurriculumEntries(fixture, "heart attack");
    expect(ids(ranked)).toEqual(["s-alias", "s-synonym"]);
    expect(ranked[0].matchedOn).toBe("alias");
    expect(ranked[0].score).toBe(30);
    expect(ranked[1].matchedOn).toBe("synonym");
    expect(ranked[1].score).toBe(10);
  });

  it("keeps the tier order inside the synonym band", () => {
    const fixture = [
      entry({ id: "s-exact", topicTitle: "Myocardial Infarction" }),
      entry({ id: "s-prefix", topicTitle: "Myocardial Infarction Complications" }),
      entry({ id: "s-substring", topicTitle: "Acute Myocardial Infarction Care" }),
      entry({ id: "s-unit", topicTitle: "Troponin", unitTitle: "Myocardial Infarction Workup" }),
    ];
    const ranked = rankCurriculumEntries(fixture, "heart attack");
    expect(ids(ranked)).toEqual(["s-exact", "s-prefix", "s-substring", "s-unit"]);
    expect(ranked.map((item) => item.score)).toEqual([10, 8, 6, 4.5]);
    expect(ranked.map((item) => item.matchedOn)).toEqual(["synonym", "synonym", "synonym", "synonym"]);
  });

  it("prefers a direct hit over a synonym hit on the same entry", () => {
    const fixture = [entry({ id: "both", topicTitle: "Heart Attack", aliases: ["myocardial-infarction"] })];
    const ranked = rankCurriculumEntries(fixture, "heart attack");
    expect(ranked[0].score).toBe(100);
    expect(ranked[0].matchedOn).toBe("title");
  });

  it("never fires a synonym on a substring of a longer word", () => {
    const fixture = [entry({ id: "micro", topicTitle: "Myocardial Infarction" })];
    expect(rankCurriculumEntries(fixture, "microbiology")).toEqual([]);
  });
});

describe("rankCurriculumEntries determinism", () => {
  it("breaks ties on title, then on id", () => {
    const fixture = [
      entry({ id: "z-second", topicTitle: "Cardiac Cycle" }),
      entry({ id: "a-second", topicTitle: "Cardiac Cycle" }),
      entry({ id: "m-first", topicTitle: "Cardiac Cycle" }),
    ];
    expect(ids(rankCurriculumEntries(fixture, "cardiac cycle"))).toEqual(["a-second", "m-first", "z-second"]);
  });

  it("sorts equal scores by title before id", () => {
    const fixture = [
      entry({ id: "a", topicTitle: "Cardiac Cycle Zones" }),
      entry({ id: "b", topicTitle: "Cardiac Cycle Basics" }),
    ];
    expect(ids(rankCurriculumEntries(fixture, "cardiac cycle"))).toEqual(["b", "a"]);
  });

  it("returns the same result on a second run", () => {
    const first = rankCurriculumEntries(rankingFixture, "cardiac cycle");
    const second = rankCurriculumEntries(rankingFixture, "cardiac cycle");
    expect(second).toEqual(first);
    expect(ids(second)).toEqual(ids(first));
    const third = rankCurriculumEntries([...rankingFixture].reverse(), "cardiac cycle");
    expect(ids(third)).toEqual(ids(first));
  });

  it("returns every entry for an empty query, in a stable order", () => {
    const ranked = rankCurriculumEntries(rankingFixture, "");
    expect(ranked).toHaveLength(rankingFixture.length);
    expect(ids(ranked)).toEqual(["t-none", "t-exact", "t-prefix", "t-unit", "t-alias", "t-substring", "t-subject"]);
    expect(ranked.every((item) => item.score === 0)).toBe(true);
    expect(rankCurriculumEntries(rankingFixture, "   ")).toEqual(ranked);
  });

  it("copes with an empty entry list", () => {
    expect(rankCurriculumEntries([], "cardiac cycle")).toEqual([]);
    expect(rankCurriculumEntries([], "")).toEqual([]);
  });
});

describe("rankCurriculumEntries filters", () => {
  it("filters by subject", () => {
    const ranked = rankCurriculumEntries(filterFixture, "", { subjectSlug: "anatomy-physiology-1" });
    expect(ids(ranked)).toEqual(["f-full", "f-notes-only"]);
  });

  it("filters by plain-language explanation", () => {
    expect(ids(rankCurriculumEntries(filterFixture, "", { hasEli10: true }))).toEqual(["f-full", "f-eli10-only"]);
  });

  it("filters by college notes", () => {
    expect(ids(rankCurriculumEntries(filterFixture, "", { hasCollegeNotes: true }))).toEqual(["f-full", "f-notes-only"]);
  });

  it("filters by practice questions", () => {
    expect(ids(rankCurriculumEntries(filterFixture, "", { hasQuestions: true }))).toEqual(["f-full", "f-questions-only"]);
  });

  it("filters by references", () => {
    expect(ids(rankCurriculumEntries(filterFixture, "", { hasReferences: true }))).toEqual(["f-full", "f-questions-only"]);
  });

  it("filters by difficulty through the supplied resolver", () => {
    expect(ids(rankCurriculumEntries(filterFixture, "", { difficulty: "beginner" }, difficultyOf))).toEqual(["f-full"]);
    expect(ids(rankCurriculumEntries(filterFixture, "", { difficulty: "advanced" }, difficultyOf))).toEqual(["f-notes-only"]);
    expect(rankCurriculumEntries(filterFixture, "", { difficulty: "intermediate" }, difficultyOf)).toEqual([]);
  });

  it("returns nothing for a difficulty filter with no resolver behind it", () => {
    expect(rankCurriculumEntries(filterFixture, "", { difficulty: "beginner" })).toEqual([]);
  });

  it("treats false and undefined as no constraint at all", () => {
    const none = ids(rankCurriculumEntries(filterFixture, ""));
    expect(ids(rankCurriculumEntries(filterFixture, "", { hasEli10: false, hasQuestions: false }))).toEqual(none);
    expect(ids(rankCurriculumEntries(filterFixture, "", { subjectSlug: "" }))).toEqual(none);
    expect(none).toHaveLength(4);
  });

  it("combines two filters with AND", () => {
    expect(ids(rankCurriculumEntries(filterFixture, "", { subjectSlug: "anatomy-physiology-1", hasQuestions: true }))).toEqual(["f-full"]);
    expect(rankCurriculumEntries(filterFixture, "", { subjectSlug: "biochemistry", hasCollegeNotes: true })).toEqual([]);
  });

  it("combines a filter with a query", () => {
    const ranked = rankCurriculumEntries(filterFixture, "acid base balance", { hasQuestions: true });
    expect(ids(ranked)).toEqual(["f-full"]);
    expect(ranked[0].score).toBe(100);
  });

  it("does not apply the progress-derived filters", () => {
    // Those two need id sets the caller owns; ranking must ignore them rather
    // than guess.
    const ranked = rankCurriculumEntries(filterFixture, "", { weakTopicsOnly: true, reviewDueOnly: true });
    expect(ranked).toHaveLength(4);
  });
});

describe("applyLocalFilters", () => {
  const ranked = (): RankedSearchEntry[] => rankCurriculumEntries(filterFixture, "");
  const empty = new Set<string>();

  it("returns everything when neither progress filter is on", () => {
    const input = ranked();
    const result = applyLocalFilters(input, { weakTopicIds: empty, dueTopicIds: empty });
    expect(ids(result)).toEqual(ids(input));
    expect(result).not.toBe(input);
  });

  it("returns nothing for weak topics only when nothing is weak yet", () => {
    const result = applyLocalFilters(ranked(), { weakTopicIds: empty, dueTopicIds: empty, filters: { weakTopicsOnly: true } });
    expect(result).toEqual([]);
  });

  it("keeps only the weak topics the caller supplied", () => {
    const result = applyLocalFilters(ranked(), {
      weakTopicIds: new Set(["f-full", "f-eli10-only"]),
      dueTopicIds: empty,
      filters: { weakTopicsOnly: true },
    });
    expect(ids(result)).toEqual(["f-full", "f-eli10-only"]);
  });

  it("keeps only the topics whose review is due", () => {
    const result = applyLocalFilters(ranked(), {
      weakTopicIds: empty,
      dueTopicIds: new Set(["f-questions-only"]),
      filters: { reviewDueOnly: true },
    });
    expect(ids(result)).toEqual(["f-questions-only"]);
  });

  it("intersects the two sets when both filters are on", () => {
    const result = applyLocalFilters(ranked(), {
      weakTopicIds: new Set(["f-full", "f-notes-only"]),
      dueTopicIds: new Set(["f-notes-only", "f-eli10-only"]),
      filters: { weakTopicsOnly: true, reviewDueOnly: true },
    });
    expect(ids(result)).toEqual(["f-notes-only"]);
  });

  it("preserves the ranking order it was given", () => {
    const input = rankCurriculumEntries(rankingFixture, "cardiac cycle");
    const result = applyLocalFilters(input, {
      weakTopicIds: new Set(["t-alias", "t-exact", "t-substring"]),
      dueTopicIds: empty,
      filters: { weakTopicsOnly: true },
    });
    expect(ids(result)).toEqual(["t-exact", "t-substring", "t-alias"]);
  });

  it("ignores an unknown id in either set", () => {
    const result = applyLocalFilters(ranked(), {
      weakTopicIds: new Set(["not-a-topic"]),
      dueTopicIds: empty,
      filters: { weakTopicsOnly: true },
    });
    expect(result).toEqual([]);
  });

  it("ignores the filters it does not own", () => {
    const input = ranked();
    const result = applyLocalFilters(input, {
      weakTopicIds: empty,
      dueTopicIds: empty,
      filters: { subjectSlug: "biochemistry", hasEli10: true },
    });
    expect(ids(result)).toEqual(ids(input));
  });
});

describe("no input is mutated", () => {
  it("leaves the entry array and every entry untouched", () => {
    const before = JSON.stringify(rankingFixture);
    const ranked = rankCurriculumEntries(rankingFixture, "cardiac cycle", { hasEli10: true });
    rankCurriculumEntries(rankingFixture, "");
    applyLocalFilters(ranked, { weakTopicIds: new Set(["t-exact"]), dueTopicIds: new Set(), filters: { weakTopicsOnly: true } });
    expect(JSON.stringify(rankingFixture)).toBe(before);
    expect(rankingFixture).toHaveLength(7);
  });

  it("leaves the ranked array it is given untouched", () => {
    const input = rankCurriculumEntries(rankingFixture, "cardiac cycle");
    const before = ids(input);
    applyLocalFilters(input, { weakTopicIds: new Set(["t-exact"]), dueTopicIds: new Set(), filters: { weakTopicsOnly: true } });
    expect(ids(input)).toEqual(before);
    expect(input).toHaveLength(6);
  });

  it("hands back the same entry objects rather than copies", () => {
    const ranked = rankCurriculumEntries(rankingFixture, "cardiac cycle");
    const exact = rankingFixture.find((item) => item.id === "t-exact");
    expect(ranked[0].entry).toBe(exact);
  });

  it("does not truncate", () => {
    const many = Array.from({ length: 60 }, (_, index) => entry({
      id: `bulk-${String(index).padStart(2, "0")}`,
      topicTitle: `Cardiac Cycle Part ${String(index).padStart(2, "0")}`,
    }));
    expect(rankCurriculumEntries(many, "cardiac cycle")).toHaveLength(60);
    expect(rankCurriculumEntries(many, "")).toHaveLength(60);
  });
});

describe("describeFilters", () => {
  it("says nothing when nothing is filtered", () => {
    expect(describeFilters({})).toEqual([]);
    expect(describeFilters({ hasEli10: false, weakTopicsOnly: false, subjectSlug: "" })).toEqual([]);
  });

  it("names each filter in a fixed order", () => {
    const all: CurriculumSearchFilters = {
      subjectSlug: "anatomy-physiology-1",
      hasEli10: true,
      hasCollegeNotes: true,
      hasQuestions: true,
      hasReferences: true,
      difficulty: "intermediate",
      weakTopicsOnly: true,
      reviewDueOnly: true,
    };
    expect(describeFilters(all)).toEqual([
      "Subject: anatomy-physiology-1",
      "Has plain-language explanation",
      "Has college-level notes",
      "Has practice questions",
      "Has references",
      "Intermediate level",
      "My weak topics",
      "Review due",
    ]);
  });

  it("describes one filter on its own", () => {
    expect(describeFilters({ hasEli10: true })).toEqual(["Has plain-language explanation"]);
    expect(describeFilters({ difficulty: "beginner" })).toEqual(["Beginner level"]);
    expect(describeFilters({ difficulty: "advanced" })).toEqual(["Advanced level"]);
    expect(describeFilters({ weakTopicsOnly: true })).toEqual(["My weak topics"]);
    expect(describeFilters({ reviewDueOnly: true })).toEqual(["Review due"]);
  });

  it("is deterministic", () => {
    const filters: CurriculumSearchFilters = { hasQuestions: true, subjectSlug: "biochemistry" };
    expect(describeFilters(filters)).toEqual(describeFilters(filters));
  });
});
