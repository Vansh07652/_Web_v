import { beforeEach, describe, expect, it } from "vitest";
import {
  DEFAULT_HORIZON_DAYS,
  MAX_DAYS_PER_WEEK,
  MAX_HORIZON_DAYS,
  MAX_MINUTES_PER_DAY,
  MIN_DAYS_PER_WEEK,
  MIN_MINUTES_PER_DAY,
  PLAN_DISCLAIMER,
  PLAN_STORAGE_KEY,
  clearPlan,
  countReviewSessions,
  generatePlan,
  readPlanInput,
  savePlanInput,
  type PlanInput,
} from "../../src/lib/paths/planner";
import { getStudyPath } from "../../src/lib/paths/study-paths";
import type { ProgressState } from "../../src/lib/progress";

/** Minimal localStorage stand-in; these run in a node environment. */
const store = new Map<string, string>();

const memoryStorage = (): Storage => ({
  getItem: (key: string) => store.get(key) ?? null,
  setItem: (key: string, value: string) => { store.set(key, value); },
  removeItem: (key: string) => { store.delete(key); },
  clear: () => { store.clear(); },
  key: () => null,
  length: 0,
} as unknown as Storage);

const useStorage = (value: Storage | undefined) => {
  Object.defineProperty(globalThis, "localStorage", { value, configurable: true, writable: true });
};

beforeEach(() => {
  store.clear();
  // A fresh object each time, so the module's write probe runs again.
  useStorage(memoryStorage());
  clearPlan();
});

const TODAY = "2026-08-15";

const input = (over: Partial<PlanInput> = {}): PlanInput => ({
  pathSlug: "healthcare-foundations",
  targetDate: "2026-09-15",
  daysPerWeek: 4,
  minutesPerDay: 45,
  ...over,
});

const emptyState = (): ProgressState => ({ version: 1, days: {}, topics: {}, courses: {}, mastery: {}, questions: {} });

describe("plan generation", () => {
  it("schedules sessions inside the horizon, in date order", () => {
    const plan = generatePlan(input(), TODAY);
    expect(plan.totalSessions).toBeGreaterThan(0);
    expect(plan.sessions.length).toBe(plan.totalSessions);
    expect(plan.generatedFor).toBe(TODAY);
    expect(plan.targetDate).toBe("2026-09-15");
    expect(plan.sessions[0].date).toBe(TODAY);
    for (let index = 1; index < plan.sessions.length; index += 1) {
      expect(plan.sessions[index].date > plan.sessions[index - 1].date).toBe(true);
    }
    expect(plan.sessions[plan.sessions.length - 1].date <= "2026-09-15").toBe(true);
  });

  it("totals the minutes it actually scheduled", () => {
    const plan = generatePlan(input({ minutesPerDay: 30 }), TODAY);
    expect(plan.totalMinutes).toBe(plan.totalSessions * 30);
    for (const session of plan.sessions) expect(session.minutes).toBe(30);
  });

  it("gives exactly daysPerWeek sessions in the first seven days", () => {
    for (const days of [1, 2, 3, 4, 5, 6, 7]) {
      const plan = generatePlan(input({ daysPerWeek: days, targetDate: "2026-08-21" }), TODAY);
      expect(plan.sessions.filter((session) => session.date < "2026-08-22").length).toBe(days);
    }
  });

  it("only ever schedules courses that belong to the path", () => {
    const path = getStudyPath("healthcare-foundations");
    const plan = generatePlan(input(), TODAY);
    for (const session of plan.sessions) {
      expect(path?.courseSlugs).toContain(session.courseSlug);
      expect(session.courseTitle.length).toBeGreaterThan(0);
      expect(session.topicTarget).toBeGreaterThanOrEqual(1);
    }
  });

  it("balances across courses rather than finishing one before starting the next", () => {
    const plan = generatePlan(input({ daysPerWeek: 7, targetDate: "2026-09-15" }), TODAY);
    const studySessions = plan.sessions.filter((session) => session.kind === "study");
    const distinct = new Set(studySessions.map((session) => session.courseSlug));
    expect(distinct.size).toBeGreaterThanOrEqual(5);
    // The first three study sessions must be three different courses.
    expect(new Set(studySessions.slice(0, 3).map((session) => session.courseSlug)).size).toBe(3);
  });

  it("is deterministic for identical inputs and an identical today", () => {
    const first = generatePlan(input({ confidence: "low", focusCourseSlugs: ["patient-safety", "clinical-judgment"] }), TODAY);
    const second = generatePlan(input({ confidence: "low", focusCourseSlugs: ["patient-safety", "clinical-judgment"] }), TODAY);
    expect(first).toEqual(second);
    expect(JSON.stringify(first)).toBe(JSON.stringify(second));
  });

  it("is deterministic when a progress state is supplied too", () => {
    const state = emptyState();
    state.courses["medical-terminology"] = { topicsViewed: 3, questions: 10, correct: 4 };
    state.mastery = { "topic:patient-safety:core-topics:x": { topicsOpened: 1, questionsAttempted: 8, questionsCorrect: 2, streak: 0 } };
    expect(generatePlan(input(), TODAY, state)).toEqual(generatePlan(input(), TODAY, state));
  });

  it("never mutates the input it was given", () => {
    const original = input({ focusCourseSlugs: ["patient-safety"], confidence: "high" });
    const snapshot = JSON.parse(JSON.stringify(original));
    generatePlan(original, TODAY);
    expect(original).toEqual(snapshot);
  });
});

describe("review sessions", () => {
  it("reserves every fourth session by default", () => {
    const plan = generatePlan(input({ daysPerWeek: 7, targetDate: "2026-09-15" }), TODAY);
    expect(countReviewSessions(plan)).toBeGreaterThan(0);
    for (let index = 0; index < plan.sessions.length; index += 1) {
      expect(plan.sessions[index].kind).toBe((index + 1) % 4 === 0 ? "review" : "study");
    }
  });

  it("reserves more when confidence is low and less when it is high", () => {
    const base = input({ daysPerWeek: 7, targetDate: "2026-09-15" });
    const low = countReviewSessions(generatePlan({ ...base, confidence: "low" }, TODAY));
    const medium = countReviewSessions(generatePlan({ ...base, confidence: "medium" }, TODAY));
    const high = countReviewSessions(generatePlan({ ...base, confidence: "high" }, TODAY));
    expect(low).toBeGreaterThan(medium);
    expect(medium).toBeGreaterThan(high);
    expect(high).toBeGreaterThan(0);
  });

  it("never makes the first session a review, and revisits the course just studied", () => {
    const plan = generatePlan(input({ daysPerWeek: 7, targetDate: "2026-09-15", confidence: "low" }), TODAY);
    expect(plan.sessions[0].kind).toBe("study");
    for (let index = 1; index < plan.sessions.length; index += 1) {
      if (plan.sessions[index].kind !== "review") continue;
      expect(plan.sessions[index].courseSlug).toBe(plan.sessions[index - 1].courseSlug);
    }
  });

  it("counts nothing on an empty plan", () => {
    expect(countReviewSessions(generatePlan(input({ pathSlug: "nclex" }), TODAY))).toBe(0);
  });
});

describe("plan clamping", () => {
  it("clamps minutesPerDay at both ends", () => {
    expect(generatePlan(input({ minutesPerDay: 0 }), TODAY).sessions[0].minutes).toBe(MIN_MINUTES_PER_DAY);
    expect(generatePlan(input({ minutesPerDay: -500 }), TODAY).sessions[0].minutes).toBe(MIN_MINUTES_PER_DAY);
    expect(generatePlan(input({ minutesPerDay: 1_000_000 }), TODAY).sessions[0].minutes).toBe(MAX_MINUTES_PER_DAY);
    expect(generatePlan(input({ minutesPerDay: Number.NaN }), TODAY).sessions[0].minutes).toBe(MIN_MINUTES_PER_DAY);
    expect(generatePlan(input({ minutesPerDay: Number.POSITIVE_INFINITY }), TODAY).sessions[0].minutes).toBe(MIN_MINUTES_PER_DAY);
    expect(generatePlan(input({ minutesPerDay: 45 }), TODAY).sessions[0].minutes).toBe(45);
  });

  it("clamps daysPerWeek at both ends", () => {
    const window = "2026-08-21";
    const low = generatePlan(input({ daysPerWeek: 0, targetDate: window }), TODAY);
    expect(low.sessions.filter((session) => session.date < "2026-08-22").length).toBe(MIN_DAYS_PER_WEEK);
    const high = generatePlan(input({ daysPerWeek: 99, targetDate: window }), TODAY);
    expect(high.sessions.filter((session) => session.date < "2026-08-22").length).toBe(MAX_DAYS_PER_WEEK);
    const broken = generatePlan(input({ daysPerWeek: Number.NaN, targetDate: window }), TODAY);
    expect(broken.sessions.filter((session) => session.date < "2026-08-22").length).toBe(MIN_DAYS_PER_WEEK);
  });

  it("rounds a fractional preference rather than rejecting it", () => {
    expect(generatePlan(input({ minutesPerDay: 44.6 }), TODAY).sessions[0].minutes).toBe(45);
  });

  it("stops at the maximum horizon", () => {
    const plan = generatePlan(input({ daysPerWeek: 7, targetDate: "2030-01-01" }), TODAY);
    expect(plan.totalSessions).toBe(MAX_HORIZON_DAYS);
    expect(plan.warnings.join(" ")).toContain(`${MAX_HORIZON_DAYS} days`);
  });
});

describe("plan warnings", () => {
  it("warns on a past target date and still returns a usable plan", () => {
    const plan = generatePlan(input({ targetDate: "2026-01-01" }), TODAY);
    expect(plan.warnings.join(" ")).toContain("not after");
    expect(plan.totalSessions).toBeGreaterThan(0);
    expect(plan.sessions[0].date).toBe(TODAY);
    // The fallback horizon, not the target.
    expect(plan.sessions[plan.sessions.length - 1].date < "2026-08-29").toBe(true);
    expect(plan.targetDate).toBe("2026-01-01");
  });

  it("warns on today as a target date, which leaves no days to plan", () => {
    const plan = generatePlan(input({ targetDate: TODAY }), TODAY);
    expect(plan.warnings.join(" ")).toContain("not after");
    expect(plan.totalSessions).toBeGreaterThan(0);
  });

  it("warns and falls back when the target date is unreadable", () => {
    const plan = generatePlan(input({ targetDate: "not a date" }), TODAY);
    expect(plan.warnings.join(" ")).toContain(`${DEFAULT_HORIZON_DAYS} days`);
    expect(plan.totalSessions).toBeGreaterThan(0);
  });

  it("warns rather than throwing when a focus course is not in the path", () => {
    const plan = generatePlan(input({ focusCourseSlugs: ["respiratory-therapy", "patient-safety"] }), TODAY);
    expect(plan.warnings.join(" ")).toContain("respiratory-therapy");
    expect(plan.warnings.join(" ")).toContain("is not a course in this path");
    // The usable focus course still drives the plan.
    for (const session of plan.sessions) expect(session.courseSlug).toBe("patient-safety");
  });

  it("falls back to the whole path when every focus course is unknown", () => {
    const plan = generatePlan(input({ focusCourseSlugs: ["nope", "also-nope"] }), TODAY);
    expect(plan.totalSessions).toBeGreaterThan(0);
    expect(new Set(plan.sessions.map((session) => session.courseSlug)).size).toBeGreaterThan(1);
  });

  it("warns when a scheduled course has no practice questions", () => {
    const plan = generatePlan(input({ pathSlug: "exam-preparation", targetDate: "2026-08-25" }), TODAY);
    expect(plan.warnings.join(" ")).toContain("no practice questions");
    expect(plan.totalSessions).toBeGreaterThan(0);
  });

  it("says nothing about questions when every scheduled course has them", () => {
    const plan = generatePlan(input({ pathSlug: "clinical-reasoning", targetDate: "2026-08-25" }), TODAY);
    expect(plan.warnings.join(" ")).not.toContain("no practice questions");
  });

  it("warns when the time booked cannot cover the estimate", () => {
    const plan = generatePlan(input({ daysPerWeek: 1, minutesPerDay: 10, targetDate: "2026-08-22" }), TODAY);
    expect(plan.warnings.join(" ")).toContain("will not reach all of them");
  });

  it("does not warn about time when the plan books more than the estimate", () => {
    const plan = generatePlan(input({ pathSlug: "clinical-reasoning", daysPerWeek: 7, minutesPerDay: 240, targetDate: "2026-09-15" }), TODAY);
    expect(plan.warnings.join(" ")).not.toContain("will not reach all of them");
  });

  it("returns an empty plan with a warning for an unknown path", () => {
    const plan = generatePlan(input({ pathSlug: "teas" }), TODAY);
    expect(plan.sessions).toEqual([]);
    expect(plan.totalSessions).toBe(0);
    expect(plan.totalMinutes).toBe(0);
    expect(plan.warnings.join(" ")).toContain("No study path is published");
  });

  it("returns an empty plan with a warning when today is unreadable", () => {
    const plan = generatePlan(input(), "yesterday");
    expect(plan.sessions).toEqual([]);
    expect(plan.warnings.join(" ")).toContain("could not be read");
  });

  it("never promises exam readiness", () => {
    const plan = generatePlan(input({ daysPerWeek: 7, confidence: "low" }), TODAY);
    const copy = `${plan.warnings.join(" ")} ${PLAN_DISCLAIMER}`.toLowerCase();
    expect(copy).not.toContain("you will pass");
    expect(copy).not.toContain("guarantee");
    expect(copy).not.toContain("ready for your exam");
    expect(PLAN_DISCLAIMER).toContain("not an assessment");
  });
});

describe("prioritisation from local progress", () => {
  it("follows path order when no state is supplied", () => {
    const path = getStudyPath("healthcare-foundations");
    const plan = generatePlan(input(), TODAY);
    expect(plan.sessions[0].courseSlug).toBe(path?.courseSlugs[0]);
  });

  it("puts a course with weak practice accuracy first", () => {
    const state = emptyState();
    state.mastery = {
      "topic:patient-safety:core-topics:handwashing": {
        topicsOpened: 2,
        questionsAttempted: 9,
        questionsCorrect: 2,
        streak: 0,
      },
    };
    const plan = generatePlan(input(), TODAY, state);
    expect(plan.sessions[0].courseSlug).toBe("patient-safety");
  });

  it("prefers a course the visitor has not started over one they have", () => {
    const state = emptyState();
    state.courses["medical-terminology"] = { topicsViewed: 5, questions: 20, correct: 15 };
    const plan = generatePlan(input(), TODAY, state);
    expect(plan.sessions[0].courseSlug).not.toBe("medical-terminology");
    expect(plan.sessions[0].courseSlug).toBe("nursing-math-dosage");
  });

  it("lets an explicit focus outrank anything the state says", () => {
    const state = emptyState();
    state.mastery = {
      "topic:patient-safety:core-topics:handwashing": {
        topicsOpened: 2,
        questionsAttempted: 9,
        questionsCorrect: 2,
        streak: 0,
      },
    };
    const plan = generatePlan(input({ focusCourseSlugs: ["clinical-judgment", "patient-safety"] }), TODAY, state);
    expect(plan.sessions[0].courseSlug).toBe("clinical-judgment");
  });

  it("copes with a state carrying nothing at all", () => {
    const plan = generatePlan(input(), TODAY, emptyState());
    expect(plan.totalSessions).toBeGreaterThan(0);
  });
});

describe("plan storage", () => {
  it("round-trips the six preference values", () => {
    const value = input({ focusCourseSlugs: ["patient-safety"], confidence: "high" });
    savePlanInput(value);
    expect(readPlanInput()).toEqual(value);
  });

  it("returns undefined when nothing has been saved", () => {
    expect(readPlanInput()).toBeUndefined();
  });

  it("clears what it stored", () => {
    savePlanInput(input());
    clearPlan();
    expect(readPlanInput()).toBeUndefined();
    expect(store.get(PLAN_STORAGE_KEY)).toBeUndefined();
  });

  it("stores nothing but the six values, dropping anything else", () => {
    const smuggled = { ...input(), name: "Ada Lovelace", email: "ada@example.com", notes: "chest pain since Tuesday" };
    savePlanInput(smuggled as unknown as PlanInput);
    const raw = store.get(PLAN_STORAGE_KEY) ?? "";
    expect(raw).not.toContain("Ada");
    expect(raw).not.toContain("example.com");
    expect(raw).not.toContain("chest pain");
    expect(Object.keys(JSON.parse(raw)).sort()).toEqual(["daysPerWeek", "minutesPerDay", "pathSlug", "targetDate"]);
  });

  it("refuses to store an unknown path", () => {
    savePlanInput(input({ pathSlug: "nclex" }));
    expect(readPlanInput()).toBeUndefined();
  });

  it("does not throw on an empty or corrupt stored payload", () => {
    for (const payload of ["", "{", "null", "[]", "\"a string\"", "{\"pathSlug\":null}", "{\"pathSlug\":\"teas\"}"]) {
      store.set(PLAN_STORAGE_KEY, payload);
      expect(readPlanInput()).toBeUndefined();
    }
  });

  it("clamps and drops junk read back from storage", () => {
    store.set(PLAN_STORAGE_KEY, JSON.stringify({
      pathSlug: "allied-health",
      targetDate: "31/12/2026",
      daysPerWeek: 900,
      minutesPerDay: -12,
      focusCourseSlugs: ["<script>alert(1)</script>", "respiratory-therapy", "respiratory-therapy", 7],
      confidence: "extremely low",
      email: "ada@example.com",
    }));
    const restored = readPlanInput();
    expect(restored).toEqual({
      pathSlug: "allied-health",
      targetDate: "",
      daysPerWeek: MAX_DAYS_PER_WEEK,
      minutesPerDay: MIN_MINUTES_PER_DAY,
      focusCourseSlugs: ["respiratory-therapy"],
    });
    expect(Object.keys(restored ?? {})).not.toContain("email");
  });

  it("still plans from a restored input with no usable target date", () => {
    store.set(PLAN_STORAGE_KEY, JSON.stringify({ pathSlug: "clinical-reasoning", targetDate: "nope", daysPerWeek: 3, minutesPerDay: 30 }));
    const restored = readPlanInput();
    expect(restored).toBeDefined();
    const plan = generatePlan(restored as PlanInput, TODAY);
    expect(plan.totalSessions).toBeGreaterThan(0);
    expect(plan.warnings.join(" ")).toContain("No usable target date");
  });

  it("is safe when storage is blocked outright", () => {
    useStorage(undefined);
    clearPlan();
    expect(() => savePlanInput(input())).not.toThrow();
    expect(() => clearPlan()).not.toThrow();
    expect(readPlanInput()).toBeUndefined();
  });

  it("is safe when reading localStorage itself throws", () => {
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      get() { throw new Error("blocked by policy"); },
    });
    expect(() => savePlanInput(input())).not.toThrow();
    expect(() => readPlanInput()).not.toThrow();
    expect(() => clearPlan()).not.toThrow();
    useStorage(memoryStorage());
  });

  it("keeps working in memory when the browser refuses writes", () => {
    const value = input({ confidence: "low" });
    useStorage({
      getItem: () => null,
      setItem: () => { throw new Error("QuotaExceededError"); },
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    } as unknown as Storage);
    clearPlan();
    expect(() => savePlanInput(value)).not.toThrow();
    expect(readPlanInput()).toEqual(value);
  });
});
