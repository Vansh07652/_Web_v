import { beforeEach, describe, expect, it } from "vitest";
import {
  computeMastery,
  isReviewDue,
  masteryStatusDescription,
  masteryStatusLabel,
  type MasteryStatus,
} from "../../src/lib/review/mastery";
import {
  clearProgress,
  dayKey,
  readMastery,
  recordAnswer,
  recordTopicView,
  shiftDays,
  type TopicMasteryRecord,
} from "../../src/lib/progress";

/** Minimal localStorage stand-in; these run in a node environment. */
const store = new Map<string, string>();

beforeEach(() => {
  store.clear();
  // A fresh object each time, so the store's write probe runs again.
  globalThis.localStorage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => { store.set(key, value); },
    removeItem: (key: string) => { store.delete(key); },
    clear: () => { store.clear(); },
    key: () => null,
    length: 0,
  } as unknown as Storage;
  clearProgress();
});

const record = (over: Partial<TopicMasteryRecord> = {}): TopicMasteryRecord => ({
  topicsOpened: 0,
  questionsAttempted: 0,
  questionsCorrect: 0,
  streak: 0,
  ...over,
});

const STATUSES: MasteryStatus[] = ["new", "learning", "practicing", "confident"];

describe("topic mastery status", () => {
  it("reports nothing at all for a topic with no record", () => {
    const mastery = computeMastery("topic:none", undefined);
    expect(mastery.status).toBe("new");
    expect(mastery.masteryPercent).toBe(0);
    expect(mastery.questionsAttempted).toBe(0);
    expect(mastery.topicId).toBe("topic:none");
    expect(mastery.lastStudiedAt).toBeUndefined();
    expect(mastery.nextReviewAt).toBeUndefined();
  });

  it("counts an opened but unpracticed topic as learning", () => {
    expect(computeMastery("t", record({ topicsOpened: 1 })).status).toBe("learning");
    // Opening a page is not accuracy, so the percentage stays at zero.
    expect(computeMastery("t", record({ topicsOpened: 9 })).masteryPercent).toBe(0);
  });

  it("stays learning at four attempts and turns practicing at five", () => {
    const four = computeMastery("t", record({ topicsOpened: 1, questionsAttempted: 4, questionsCorrect: 4 }));
    expect(four.status).toBe("learning");
    expect(four.masteryPercent).toBe(100);
    const five = computeMastery("t", record({ topicsOpened: 1, questionsAttempted: 5, questionsCorrect: 5 }));
    expect(five.status).toBe("practicing");
    expect(five.masteryPercent).toBe(100);
  });

  it("holds at practicing until the tenth attempt, however good the accuracy", () => {
    const nine = computeMastery("t", record({ questionsAttempted: 9, questionsCorrect: 9 }));
    expect(nine.status).toBe("practicing");
    expect(nine.masteryPercent).toBe(100);
    const ten = computeMastery("t", record({ questionsAttempted: 10, questionsCorrect: 10 }));
    expect(ten.status).toBe("confident");
  });

  it("needs eighty percent, not seventy-nine", () => {
    const seventyNine = computeMastery("t", record({ questionsAttempted: 100, questionsCorrect: 79 }));
    expect(seventyNine.masteryPercent).toBe(79);
    expect(seventyNine.status).toBe("practicing");
    const eighty = computeMastery("t", record({ questionsAttempted: 100, questionsCorrect: 80 }));
    expect(eighty.masteryPercent).toBe(80);
    expect(eighty.status).toBe("confident");
  });

  it("treats exactly ten attempts at exactly eighty percent as the boundary", () => {
    const mastery = computeMastery("t", record({ questionsAttempted: 10, questionsCorrect: 8 }));
    expect(mastery.masteryPercent).toBe(80);
    expect(mastery.status).toBe("confident");
    const below = computeMastery("t", record({ questionsAttempted: 10, questionsCorrect: 7 }));
    expect(below.masteryPercent).toBe(70);
    expect(below.status).toBe("practicing");
  });

  it("rounds the accuracy it reports", () => {
    expect(computeMastery("t", record({ questionsAttempted: 3, questionsCorrect: 2 })).masteryPercent).toBe(67);
    expect(computeMastery("t", record({ questionsAttempted: 8, questionsCorrect: 1 })).masteryPercent).toBe(13);
  });

  it("clamps a correct count that exceeds the attempts it came from", () => {
    const mastery = computeMastery("t", record({ questionsAttempted: 4, questionsCorrect: 4000 }));
    expect(mastery.questionsCorrect).toBe(4);
    expect(mastery.masteryPercent).toBe(100);
    expect(mastery.masteryPercent).toBeLessThanOrEqual(100);
  });

  it("reads negative and non-numeric counters as zero", () => {
    const mastery = computeMastery("t", record({
      topicsOpened: 1,
      questionsAttempted: -50,
      questionsCorrect: -1,
    }));
    expect(mastery.questionsAttempted).toBe(0);
    expect(mastery.questionsCorrect).toBe(0);
    expect(mastery.masteryPercent).toBe(0);
    // Nothing about a broken record may promote it past the first rung.
    expect(mastery.status).toBe("learning");
  });

  it("drops a date that is not a day key rather than passing it on", () => {
    const mastery = computeMastery("t", record({
      questionsAttempted: 1,
      lastStudiedAt: "2026-3-1",
      nextReviewAt: "not-a-day",
      reviewedAt: "2026-03-01",
    }));
    expect(mastery.lastStudiedAt).toBeUndefined();
    expect(mastery.nextReviewAt).toBeUndefined();
    expect(mastery.reviewedAt).toBe("2026-03-01");
  });
});

describe("mastery copy", () => {
  it("labels every status with something short and distinct", () => {
    const labels = STATUSES.map(masteryStatusLabel);
    expect(labels).toHaveLength(4);
    expect(new Set(labels).size).toBe(4);
    for (const label of labels) expect(label.length).toBeGreaterThan(0);
  });

  it("describes every status without claiming competence or exam readiness", () => {
    for (const status of STATUSES) {
      const description = masteryStatusDescription(status);
      expect(description.length).toBeGreaterThan(0);
      expect(description).not.toMatch(/guarantee/i);
      expect(description).not.toMatch(/exam.ready/i);
      expect(description).not.toMatch(/you are ready/i);
      expect(description).not.toMatch(/\bmastered\b/i);
      expect(description).not.toMatch(/competent/i);
    }
  });

  it("says plainly what confident does and does not mean", () => {
    const description = masteryStatusDescription("confident");
    expect(description).toMatch(/practice questions/i);
    expect(description).toMatch(/not a measure of clinical competence/i);
    expect(description).toMatch(/not a prediction of any exam result/i);
  });
});

describe("review due dates", () => {
  const mastery = (nextReviewAt?: string) => computeMastery("t", record({ questionsAttempted: 1, nextReviewAt }));

  it("is not due when nothing is scheduled", () => {
    expect(isReviewDue(mastery(undefined), "2026-03-01")).toBe(false);
  });

  it("is due on the day itself and every day after", () => {
    expect(isReviewDue(mastery("2026-03-01"), "2026-03-01")).toBe(true);
    expect(isReviewDue(mastery("2026-02-14"), "2026-03-01")).toBe(true);
  });

  it("is not due before the day arrives", () => {
    expect(isReviewDue(mastery("2026-03-02"), "2026-03-01")).toBe(false);
    // Across a year boundary, where a naive comparison would go wrong.
    expect(isReviewDue(mastery("2027-01-01"), "2026-12-31")).toBe(false);
  });
});

describe("mastery read back from the local store", () => {
  it("returns an empty mastery for a topic never touched", () => {
    const mastery = readMastery("topic:unknown");
    expect(mastery.status).toBe("new");
    expect(mastery.topicId).toBe("topic:unknown");
    expect(mastery.topicsOpened).toBe(0);
  });

  it("counts every opening of a topic, not just the first", () => {
    recordTopicView("biology-1", "topic:cells");
    recordTopicView("biology-1", "topic:cells");
    recordTopicView("biology-1", "topic:cells");
    const mastery = readMastery("topic:cells");
    expect(mastery.topicsOpened).toBe(3);
    expect(mastery.lastStudiedAt).toBe(dayKey());
    expect(mastery.status).toBe("learning");
  });

  it("folds practice answers into the topic's record", () => {
    recordAnswer("biology-1", true, { topicId: "topic:cells" });
    recordAnswer("biology-1", false, { topicId: "topic:cells" });
    const mastery = readMastery("topic:cells");
    expect(mastery.questionsAttempted).toBe(2);
    expect(mastery.questionsCorrect).toBe(1);
    expect(mastery.masteryPercent).toBe(50);
    expect(mastery.reviewedAt).toBe(dayKey());
    // A miss puts the topic back on tomorrow's list.
    expect(mastery.nextReviewAt).toBe(shiftDays(dayKey(), 1));
  });
});
