import { beforeEach, describe, expect, it } from "vitest";
import {
  clearProgress,
  courseProgress,
  createStudyClock,
  dayKey,
  readProgress,
  recordAnswer,
  recordStudyMinutes,
  recordTopicView,
  streakFrom,
  summarise,
} from "../lib/progress";

const STORAGE_KEY = "medmosa.progress.v1";
// Every key this store has ever written under; all must still migrate.
const LEGACY_KEYS = ["medmosaic.progress.v1", "study-compass.progress.v1"];

/** Minimal localStorage stand-in; vitest runs these in a node environment. */
class MemoryStorage implements Storage {
  private map = new Map<string, string>();
  get length() { return this.map.size; }
  clear() { this.map.clear(); }
  getItem(key: string) { return this.map.get(key) ?? null; }
  key(index: number) { return [...this.map.keys()][index] ?? null; }
  removeItem(key: string) { this.map.delete(key); }
  setItem(key: string, value: string) { this.map.set(key, value); }
}

const dayOffset = (delta: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + delta);
  return dayKey(date);
};

const seed = (days: Record<string, { minutes?: number; questions?: number; correct?: number }>) => {
  globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify({
    version: 1,
    days: Object.fromEntries(Object.entries(days).map(([key, value]) => [key, {
      minutes: value.minutes ?? 0, questions: value.questions ?? 0, correct: value.correct ?? 0,
    }])),
    topics: {},
    courses: {},
  }));
};

beforeEach(() => {
  Object.defineProperty(globalThis, "localStorage", { value: new MemoryStorage(), configurable: true, writable: true });
  clearProgress();
});

describe("progress storage", () => {
  it("starts empty and reports no activity", () => {
    const summary = summarise();
    expect(summary.hasAnyActivity).toBe(false);
    expect(summary.streakDays).toBe(0);
    expect(summary.accuracyToday).toBeNull();
  });

  it("counts a topic once no matter how often it is opened", () => {
    recordTopicView("biology-1", "topic:biology-1:unit:cells");
    recordTopicView("biology-1", "topic:biology-1:unit:cells");
    recordTopicView("biology-1", "topic:biology-1:unit:dna");
    expect(courseProgress(readProgress(), "biology-1").topicsViewed).toBe(2);
    expect(summarise().topicsViewed).toBe(2);
  });

  it("tracks answers and today's accuracy", () => {
    recordAnswer("biology-1", true);
    recordAnswer("biology-1", true);
    recordAnswer("biology-1", false);
    const summary = summarise();
    expect(summary.questionsToday).toBe(3);
    expect(summary.correctToday).toBe(2);
    expect(summary.accuracyToday).toBe(67);
    expect(summary.coursesStarted).toBe(1);
  });

  it("counts consecutive days, including a streak not yet continued today", () => {
    seed({ [dayOffset(-1)]: { minutes: 10 }, [dayOffset(-2)]: { minutes: 5 }, [dayOffset(-3)]: { minutes: 5 } });
    expect(streakFrom(readProgress())).toBe(3);
  });

  it("breaks the streak when a day was missed", () => {
    seed({ [dayOffset(0)]: { minutes: 5 }, [dayOffset(-2)]: { minutes: 5 }, [dayOffset(-3)]: { minutes: 5 } });
    expect(streakFrom(readProgress())).toBe(1);
  });

  it("ignores a day with no real activity", () => {
    seed({ [dayOffset(0)]: { minutes: 0, questions: 0 }, [dayOffset(-1)]: { minutes: 7 } });
    expect(streakFrom(readProgress())).toBe(1);
  });

  it("clamps values that were tampered with in storage", () => {
    globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      days: { [dayOffset(0)]: { minutes: 999999, questions: -5, correct: 900 } },
      topics: {},
      courses: { "biology-1": { topicsViewed: 5e9, questions: 2, correct: 40 } },
    }));
    const state = readProgress();
    expect(state.days[dayOffset(0)].minutes).toBeLessThanOrEqual(24 * 60);
    expect(state.days[dayOffset(0)].questions).toBe(0);
    // correct can never exceed questions answered
    expect(state.days[dayOffset(0)].correct).toBe(0);
    expect(courseProgress(state, "biology-1").correct).toBe(2);
  });

  it("survives malformed JSON without throwing", () => {
    globalThis.localStorage.setItem(STORAGE_KEY, "{not json");
    expect(() => readProgress()).not.toThrow();
    expect(summarise().hasAnyActivity).toBe(false);
  });

  // Deliberately last-ish: it swaps in a hostile storage object. The module
  // re-probes whenever the storage object changes, so beforeEach's fresh
  // MemoryStorage restores normal behaviour for later tests — this asserts
  // that recovery, not just the failure handling.
  it("keeps working when the browser refuses to persist, and recovers after", () => {
    Object.defineProperty(globalThis, "localStorage", {
      value: { getItem: () => null, setItem() { throw new Error("QuotaExceededError"); }, removeItem() {}, clear() {}, key: () => null, length: 0 },
      configurable: true, writable: true,
    });
    expect(() => recordAnswer("biology-1", true)).not.toThrow();
    expect(() => summarise()).not.toThrow();

    // A working store appearing again must be picked up rather than ignored.
    Object.defineProperty(globalThis, "localStorage", { value: new MemoryStorage(), configurable: true, writable: true });
    clearProgress();
    recordStudyMinutes(12);
    expect(summarise().minutesToday).toBe(12);
  });

  it("only counts study time while the tab is visible", () => {
    const clock = createStudyClock(1);
    clock.tick(false);
    clock.tick(false);
    expect(summarise().minutesToday).toBe(0);
    clock.tick(true);
    clock.tick(true);
    expect(summarise().minutesToday).toBe(2);
  });

  it("adds this week's minutes across days", () => {
    seed({ [dayOffset(0)]: { minutes: 20 }, [dayOffset(-3)]: { minutes: 15 }, [dayOffset(-9)]: { minutes: 60 } });
    expect(summarise(readProgress()).minutesThisWeek).toBe(35);
  });

  it.each(LEGACY_KEYS)("migrates progress saved under %s", (legacyKey) => {
    globalThis.localStorage.setItem(legacyKey, JSON.stringify({
      version: 1,
      days: { [dayOffset(0)]: { minutes: 25, questions: 4, correct: 3 } },
      topics: { "topic:a": dayOffset(0) },
      courses: { "biology-1": { topicsViewed: 1, questions: 4, correct: 3 } },
    }));
    expect(summarise().minutesToday).toBe(25);
    // The next write moves it across and drops the old key.
    recordStudyMinutes(5);
    expect(globalThis.localStorage.getItem(legacyKey)).toBeNull();
    expect(summarise().minutesToday).toBe(30);
  });

  it("clears everything on request", () => {
    recordAnswer("biology-1", true);
    recordStudyMinutes(10);
    clearProgress();
    expect(summarise().hasAnyActivity).toBe(false);
  });
});
