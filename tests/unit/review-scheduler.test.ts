import { beforeEach, describe, expect, it } from "vitest";
import {
  REVIEW_INTERVALS,
  buildReviewQueue,
  buildWeakTopics,
  scheduleQuestion,
  scheduleTopic,
  summariseReview,
} from "../../src/lib/review/scheduler";
import {
  clearProgress,
  clearReviewHistory,
  courseProgress,
  dayKey,
  readProgress,
  recordAnswer,
  recordStudyMinutes,
  recordTopicView,
  replaceProgress,
  shiftDays,
  summarise,
  type ProgressState,
  type QuestionAttemptRecord,
  type TopicMasteryRecord,
} from "../../src/lib/progress";

const STORAGE_KEY = "medmosa.progress.v1";
/** A pinned day, so nothing here depends on when the suite runs. */
const TODAY = "2026-03-01";

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

const attempt = (over: Partial<QuestionAttemptRecord> = {}): QuestionAttemptRecord => ({
  attempts: 1,
  misses: 0,
  lastResult: "correct",
  lastAnsweredAt: TODAY,
  nextReviewAt: TODAY,
  interval: 1,
  ...over,
});

const topic = (over: Partial<TopicMasteryRecord> = {}): TopicMasteryRecord => ({
  topicsOpened: 1,
  questionsAttempted: 0,
  questionsCorrect: 0,
  streak: 0,
  ...over,
});

const stateWith = (
  questions: Record<string, QuestionAttemptRecord> = {},
  mastery: Record<string, TopicMasteryRecord> = {},
): ProgressState => ({ version: 1, days: {}, topics: {}, courses: {}, mastery, questions });

/** The maps are optional on the type; every state this module produces has them. */
const maps = (state: ProgressState) => ({
  mastery: state.mastery ?? {},
  questions: state.questions ?? {},
});

const seedStored = (payload: unknown): void => {
  globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

describe("question scheduling", () => {
  it("uses a fixed ascending ladder of whole days", () => {
    expect([...REVIEW_INTERVALS]).toEqual([1, 3, 7, 14, 30, 60]);
  });

  it("walks the whole ladder one rung per consecutive correct answer", () => {
    let record = scheduleQuestion(undefined, true, TODAY);
    const walked = [record.interval];
    for (let step = 0; step < REVIEW_INTERVALS.length; step += 1) {
      record = scheduleQuestion(record, true, TODAY);
      walked.push(record.interval);
    }
    expect(walked).toEqual([1, 3, 7, 14, 30, 60, 60]);
    expect(record.attempts).toBe(7);
    expect(record.misses).toBe(0);
  });

  it("sets the next review date from the interval it just chose", () => {
    const first = scheduleQuestion(undefined, true, TODAY);
    expect(first.nextReviewAt).toBe("2026-03-02");
    expect(first.lastAnsweredAt).toBe(TODAY);
    expect(first.lastResult).toBe("correct");

    const settled = scheduleQuestion(attempt({ interval: 30, attempts: 6 }), true, TODAY);
    expect(settled.interval).toBe(60);
    expect(settled.nextReviewAt).toBe(shiftDays(TODAY, 60));
    expect(settled.nextReviewAt).toBe("2026-04-30");
  });

  it("collapses to a single day after a miss, however long the interval was", () => {
    const missed = scheduleQuestion(attempt({ interval: 60, attempts: 9 }), false, TODAY);
    expect(missed.interval).toBe(1);
    expect(missed.nextReviewAt).toBe("2026-03-02");
    expect(missed.lastResult).toBe("incorrect");
    expect(missed.misses).toBe(1);
    expect(missed.attempts).toBe(10);
  });

  it("returns a once-missed item at a medium interval rather than the longest", () => {
    let record = scheduleQuestion(attempt({ interval: 60, attempts: 9 }), false, TODAY);
    const recovery: number[] = [];
    for (let step = 0; step < 4; step += 1) {
      record = scheduleQuestion(record, true, TODAY);
      recovery.push(record.interval);
    }
    // One rung at a time, then held at the middle of the ladder for good.
    expect(recovery).toEqual([3, 7, 7, 7]);
    expect(record.nextReviewAt).toBe(shiftDays(TODAY, 7));
  });

  it("never records more misses than attempts", () => {
    const record = scheduleQuestion(attempt({ attempts: 1, misses: 500 }), false, TODAY);
    expect(record.attempts).toBe(2);
    expect(record.misses).toBeLessThanOrEqual(record.attempts);
    expect(record.misses).toBe(2);
  });

  it("ignores a hand-edited interval that sits between rungs", () => {
    // 5 rounds down to the 3-day rung, so the next step up is 7.
    expect(scheduleQuestion(attempt({ interval: 5 }), true, TODAY).interval).toBe(7);
    expect(scheduleQuestion(attempt({ interval: -9 }), true, TODAY).interval).toBe(1);
    expect(scheduleQuestion(attempt({ interval: 1e9 }), true, TODAY).interval).toBe(60);
  });

  it("gives the same answer twice for the same input and day", () => {
    const previous = attempt({ interval: 7, attempts: 4, misses: 1 });
    expect(scheduleQuestion(previous, true, TODAY)).toEqual(scheduleQuestion(previous, true, TODAY));
    expect(scheduleQuestion(previous, false, TODAY)).toEqual(scheduleQuestion(previous, false, TODAY));
  });
});

describe("topic scheduling", () => {
  it("climbs the ladder with the run of consecutive correct answers", () => {
    let previous = topic();
    const intervals: string[] = [];
    for (let step = 0; step < 7; step += 1) {
      const scheduled = scheduleTopic(previous, true, TODAY);
      intervals.push(scheduled.nextReviewAt);
      previous = { ...previous, streak: scheduled.streak };
    }
    expect(previous.streak).toBe(7);
    expect(intervals).toEqual([1, 3, 7, 14, 30, 60, 60].map((days) => shiftDays(TODAY, days)));
  });

  it("resets the streak and comes back tomorrow after a miss", () => {
    const scheduled = scheduleTopic(topic({ streak: 5 }), false, TODAY);
    expect(scheduled.streak).toBe(0);
    expect(scheduled.nextReviewAt).toBe(shiftDays(TODAY, 1));
  });

  it("starts from nothing without a previous record", () => {
    expect(scheduleTopic(undefined, true, TODAY)).toEqual({ nextReviewAt: "2026-03-02", streak: 1 });
    expect(scheduleTopic(undefined, false, TODAY)).toEqual({ nextReviewAt: "2026-03-02", streak: 0 });
  });
});

describe("review queue", () => {
  const queueState = () => stateWith({
    "q-alpha": attempt({ misses: 0, nextReviewAt: TODAY }),
    "q-bravo": attempt({ misses: 2, nextReviewAt: "2026-02-25" }),
    "q-charlie": attempt({ misses: 2, nextReviewAt: "2026-02-27" }),
    "q-delta": attempt({ misses: 1, nextReviewAt: "2026-02-20" }),
    "q-echo": attempt({ misses: 2, nextReviewAt: "2026-02-25" }),
    "q-later": attempt({ misses: 9, nextReviewAt: "2026-03-02" }),
  });

  it("leaves out anything not yet due and includes anything due today", () => {
    const queue = buildReviewQueue(queueState(), TODAY);
    expect(queue.map((item) => item.questionId)).not.toContain("q-later");
    expect(queue).toHaveLength(5);
    expect(queue.map((item) => item.questionId)).toContain("q-alpha");
  });

  it("orders by misses, then by how overdue, then by id", () => {
    const queue = buildReviewQueue(queueState(), TODAY);
    expect(queue.map((item) => item.questionId)).toEqual([
      "q-bravo", "q-echo", "q-charlie", "q-delta", "q-alpha",
    ]);
    expect(queue[0]).toEqual({ questionId: "q-bravo", dueOn: "2026-02-25", misses: 2, overdueDays: 4 });
    expect(queue[4]).toEqual({ questionId: "q-alpha", dueOn: TODAY, misses: 0, overdueDays: 0 });
  });

  it("produces the same order whatever order the records were stored in", () => {
    const forward = buildReviewQueue(queueState(), TODAY);
    const entries = Object.entries(maps(queueState()).questions).reverse();
    const reversed = buildReviewQueue(stateWith(Object.fromEntries(entries)), TODAY);
    expect(reversed).toEqual(forward);
    // And identical again on a repeat run against the same fixed day.
    expect(buildReviewQueue(queueState(), TODAY)).toEqual(forward);
  });

  it("applies a limit when one is given", () => {
    expect(buildReviewQueue(queueState(), TODAY, 2).map((item) => item.questionId)).toEqual(["q-bravo", "q-echo"]);
    expect(buildReviewQueue(queueState(), TODAY, 0)).toHaveLength(0);
    expect(buildReviewQueue(queueState(), TODAY, -5)).toHaveLength(0);
    expect(buildReviewQueue(queueState(), TODAY, 99)).toHaveLength(5);
  });

  it("returns nothing rather than guessing when the day key is unusable", () => {
    expect(buildReviewQueue(queueState(), "today")).toHaveLength(0);
  });

  it("skips records that are not records at all", () => {
    const hostile = { "q-good": attempt({ nextReviewAt: TODAY }), "q-bad": null } as unknown as Record<string, QuestionAttemptRecord>;
    const queue = buildReviewQueue(stateWith(hostile), TODAY);
    expect(queue).toHaveLength(1);
    expect(queue[0].questionId).toBe("q-good");
  });

  it("handles a state that predates review data", () => {
    const old = { version: 1, days: {}, topics: {}, courses: {} } as ProgressState;
    expect(buildReviewQueue(old, TODAY)).toHaveLength(0);
    expect(buildWeakTopics(old, TODAY)).toHaveLength(0);
  });
});

describe("weak topics", () => {
  const weakState = () => stateWith({}, {
    "topic:strong": topic({ questionsAttempted: 20, questionsCorrect: 19, nextReviewAt: "2026-04-01" }),
    "topic:shaky": topic({ questionsAttempted: 20, questionsCorrect: 10 }),
    "topic:worse": topic({ questionsAttempted: 20, questionsCorrect: 4 }),
    "topic:untouched": topic({ topicsOpened: 3 }),
    "topic:tied": topic({ questionsAttempted: 8, questionsCorrect: 4 }),
  });

  it("lists the weakest first, then the topic with the most evidence, then the id", () => {
    expect(buildWeakTopics(weakState(), TODAY).map((item) => item.topicId)).toEqual([
      "topic:worse", "topic:shaky", "topic:tied",
    ]);
  });

  it("leaves out confident topics and topics only ever opened", () => {
    const ids = buildWeakTopics(weakState(), TODAY).map((item) => item.topicId);
    expect(ids).not.toContain("topic:strong");
    expect(ids).not.toContain("topic:untouched");
  });

  it("brings a confident topic back once its review falls due", () => {
    const due = stateWith({}, {
      "topic:strong": topic({ questionsAttempted: 20, questionsCorrect: 19, nextReviewAt: "2026-02-28" }),
    });
    expect(buildWeakTopics(due, TODAY).map((item) => item.topicId)).toEqual(["topic:strong"]);
  });

  it("applies a limit when one is given", () => {
    expect(buildWeakTopics(weakState(), TODAY, 1).map((item) => item.topicId)).toEqual(["topic:worse"]);
  });
});

describe("review summary", () => {
  it("reports zeros for an empty state", () => {
    expect(summariseReview(stateWith(), TODAY)).toEqual({
      questionsDue: 0,
      topicsToRevisit: 0,
      estimatedMinutes: 0,
    });
  });

  it("estimates at forty-five seconds a question, rounded up", () => {
    const build = (count: number) => {
      const questions: Record<string, QuestionAttemptRecord> = {};
      for (let index = 0; index < count; index += 1) {
        questions[`q${index}`] = attempt({ nextReviewAt: TODAY });
      }
      return stateWith(questions);
    };
    expect(summariseReview(build(1), TODAY).estimatedMinutes).toBe(1);
    expect(summariseReview(build(4), TODAY).estimatedMinutes).toBe(3);
    expect(summariseReview(build(80), TODAY).estimatedMinutes).toBe(60);
  });

  it("counts due questions and topics to revisit together", () => {
    const state = stateWith(
      { "q1": attempt({ nextReviewAt: "2026-02-01" }), "q2": attempt({ nextReviewAt: "2026-09-01" }) },
      { "topic:shaky": topic({ questionsAttempted: 20, questionsCorrect: 5 }) },
    );
    expect(summariseReview(state, TODAY)).toEqual({ questionsDue: 1, topicsToRevisit: 1, estimatedMinutes: 1 });
  });

  it("returns the same figures on a repeat run against the same day", () => {
    const state = stateWith(
      { "q1": attempt({ nextReviewAt: "2026-02-01", misses: 3 }), "q2": attempt({ nextReviewAt: TODAY }) },
      { "topic:shaky": topic({ questionsAttempted: 20, questionsCorrect: 5 }) },
    );
    expect(summariseReview(state, TODAY)).toEqual(summariseReview(state, TODAY));
    expect(buildReviewQueue(state, TODAY)).toEqual(buildReviewQueue(state, TODAY));
    expect(buildWeakTopics(state, TODAY).map((item) => item.masteryPercent))
      .toEqual(buildWeakTopics(state, TODAY).map((item) => item.masteryPercent));
  });
});

describe("recording answers against the review state", () => {
  it("keeps the two-argument call working exactly as before", () => {
    recordAnswer("biology-1", true);
    recordAnswer("biology-1", false);
    const state = readProgress();
    expect(courseProgress(state, "biology-1")).toEqual({ topicsViewed: 0, questions: 2, correct: 1 });
    expect(summarise(state).questionsToday).toBe(2);
    // Nothing was scheduled, because nothing said what was answered.
    expect(Object.keys(maps(state).questions)).toHaveLength(0);
    expect(Object.keys(maps(state).mastery)).toHaveLength(0);
  });

  it("files an answer against its topic and its question when told which", () => {
    recordAnswer("biology-1", true, { topicId: "topic:cells", questionId: "q:1" });
    const { mastery, questions } = maps(readProgress());
    expect(mastery["topic:cells"]).toEqual({
      topicsOpened: 0,
      questionsAttempted: 1,
      questionsCorrect: 1,
      streak: 1,
      lastStudiedAt: dayKey(),
      reviewedAt: dayKey(),
      nextReviewAt: shiftDays(dayKey(), 1),
    });
    expect(questions["q:1"]).toEqual({
      attempts: 1,
      misses: 0,
      lastResult: "correct",
      lastAnsweredAt: dayKey(),
      nextReviewAt: shiftDays(dayKey(), 1),
      interval: 1,
    });
    // The existing counters carried on regardless.
    expect(courseProgress(readProgress(), "biology-1").questions).toBe(1);
  });

  it("walks a question up the ladder across repeated correct answers", () => {
    recordAnswer("biology-1", true, { questionId: "q:1" });
    recordAnswer("biology-1", true, { questionId: "q:1" });
    recordAnswer("biology-1", true, { questionId: "q:1" });
    const record = maps(readProgress()).questions["q:1"];
    expect(record.attempts).toBe(3);
    expect(record.interval).toBe(7);
    expect(record.nextReviewAt).toBe(shiftDays(dayKey(), 7));
  });

  it("resets a topic streak on a miss", () => {
    recordAnswer("biology-1", true, { topicId: "topic:cells" });
    recordAnswer("biology-1", true, { topicId: "topic:cells" });
    expect(maps(readProgress()).mastery["topic:cells"].streak).toBe(2);
    recordAnswer("biology-1", false, { topicId: "topic:cells" });
    const record = maps(readProgress()).mastery["topic:cells"];
    expect(record.streak).toBe(0);
    expect(record.questionsAttempted).toBe(3);
    expect(record.questionsCorrect).toBe(2);
    expect(record.nextReviewAt).toBe(shiftDays(dayKey(), 1));
  });

  it("seeds a mastery record when a topic is opened, without double-counting the course", () => {
    recordTopicView("biology-1", "topic:cells");
    recordTopicView("biology-1", "topic:cells");
    const state = readProgress();
    expect(maps(state).mastery["topic:cells"].topicsOpened).toBe(2);
    expect(courseProgress(state, "biology-1").topicsViewed).toBe(1);
  });
});

describe("clearing review history", () => {
  it("forgets the schedule and nothing else", () => {
    recordTopicView("biology-1", "topic:cells");
    recordAnswer("biology-1", true, { topicId: "topic:cells", questionId: "q:1" });
    recordStudyMinutes(20);

    clearReviewHistory();

    const state = readProgress();
    expect(Object.keys(maps(state).mastery)).toHaveLength(0);
    expect(Object.keys(maps(state).questions)).toHaveLength(0);
    expect(courseProgress(state, "biology-1")).toEqual({ topicsViewed: 1, questions: 1, correct: 1 });
    expect(summarise(state).minutesToday).toBe(20);
    expect(summarise(state).hasAnyActivity).toBe(true);
  });

  it("does not throw when the browser refuses to persist", () => {
    globalThis.localStorage = {
      getItem: () => null,
      setItem() { throw new Error("QuotaExceededError"); },
      removeItem() {},
      clear() {},
      key: () => null,
      length: 0,
    } as unknown as Storage;
    expect(() => clearReviewHistory()).not.toThrow();
    expect(() => readProgress()).not.toThrow();
  });
});

describe("stored review state", () => {
  it("loads a payload written before review data existed", () => {
    seedStored({
      version: 1,
      days: { "2026-03-01": { minutes: 20, questions: 3, correct: 2 } },
      topics: { "topic:cells": "2026-03-01" },
      courses: { "biology-1": { topicsViewed: 1, questions: 3, correct: 2 } },
    });
    const state = readProgress();
    expect(state.mastery).toEqual({});
    expect(state.questions).toEqual({});
    expect(state.days["2026-03-01"].minutes).toBe(20);
    expect(courseProgress(state, "biology-1").questions).toBe(3);
    expect(summariseReview(state, TODAY).questionsDue).toBe(0);
  });

  it("survives hostile stored review data without throwing or inflating anything", () => {
    seedStored({
      version: 1,
      days: {},
      topics: {},
      courses: {},
      mastery: {
        "topic:sane": {
          topicsOpened: 1, questionsAttempted: 4, questionsCorrect: 4000,
          streak: -3, lastStudiedAt: "2026-03-01", nextReviewAt: "whenever",
        },
        "topic:huge": { topicsOpened: 1e9, questionsAttempted: 1e9, questionsCorrect: 1e9, streak: 1e9 },
        "topic:empty": { topicsOpened: -4, questionsAttempted: -10, questionsCorrect: -1, streak: 0 },
        "topic:string": "hello",
        "topic:array": [1, 2, 3],
        "topic:null": null,
      },
      questions: {
        "q:good": {
          attempts: 3, misses: 9, lastResult: "correct",
          lastAnsweredAt: "2026-02-01", nextReviewAt: "2026-02-08", interval: 7,
        },
        "q:no-date": {
          attempts: 3, misses: 1, lastResult: "correct",
          lastAnsweredAt: "yesterday", nextReviewAt: "2026-02-08", interval: 7,
        },
        "q:never-answered": {
          attempts: 0, misses: 0, lastResult: "correct",
          lastAnsweredAt: "2026-02-01", nextReviewAt: "2026-02-08", interval: 7,
        },
        "q:huge": {
          attempts: 1e9, misses: 1e9, lastResult: "banana",
          lastAnsweredAt: "2026-02-01", nextReviewAt: "2026-02-08", interval: 1e9,
        },
        "q:number": 42,
      },
    });

    expect(() => readProgress()).not.toThrow();
    const { mastery, questions } = maps(readProgress());

    expect(mastery["topic:sane"].questionsCorrect).toBe(4);
    expect(mastery["topic:sane"].streak).toBe(0);
    expect(mastery["topic:sane"].lastStudiedAt).toBe("2026-03-01");
    expect(mastery["topic:sane"].nextReviewAt).toBeUndefined();
    expect(mastery["topic:huge"].topicsOpened).toBe(1_000_000);
    expect(mastery["topic:huge"].questionsAttempted).toBe(1_000_000);
    expect(mastery["topic:empty"]).toBeUndefined();
    expect(mastery["topic:string"]).toBeUndefined();
    expect(mastery["topic:array"]).toBeUndefined();
    expect(mastery["topic:null"]).toBeUndefined();

    expect(questions["q:good"].misses).toBe(3);
    expect(questions["q:no-date"]).toBeUndefined();
    expect(questions["q:never-answered"]).toBeUndefined();
    expect(questions["q:number"]).toBeUndefined();
    expect(questions["q:huge"].attempts).toBe(1_000_000);
    expect(questions["q:huge"].misses).toBe(1_000_000);
    // An unrecognised result is read as a miss, never as a pass.
    expect(questions["q:huge"].lastResult).toBe("incorrect");
    expect(questions["q:huge"].interval).toBeLessThanOrEqual(400);

    // None of it leaks into the figures the dashboard already shows.
    const summary = summarise(readProgress());
    expect(summary.hasAnyActivity).toBe(false);
    expect(summary.totalQuestions).toBe(0);
  });

  it("caps the question map at five thousand records, oldest answers first", () => {
    const questions: Record<string, unknown> = {};
    for (let index = 0; index < 6000; index += 1) {
      const day = shiftDays("2020-01-01", index);
      questions[`q${String(index).padStart(4, "0")}`] = {
        attempts: 1, misses: 0, lastResult: "correct",
        lastAnsweredAt: day, nextReviewAt: day, interval: 1,
      };
    }
    seedStored({ version: 1, days: {}, topics: {}, courses: {}, questions });

    const stored = maps(readProgress()).questions;
    expect(Object.keys(stored)).toHaveLength(5000);
    expect(stored["q0000"]).toBeUndefined();
    expect(stored["q0999"]).toBeUndefined();
    expect(stored["q1000"]).toBeDefined();
    expect(stored["q5999"]).toBeDefined();

    // And the cap holds on the way back out to storage.
    recordAnswer("biology-1", true, { questionId: "q:new" });
    const written = maps(readProgress()).questions;
    expect(Object.keys(written)).toHaveLength(5000);
    expect(written["q:new"]).toBeDefined();
  });

  it("round-trips the review maps through replaceProgress", () => {
    const state: ProgressState = {
      version: 1,
      days: { "2026-03-01": { minutes: 12, questions: 2, correct: 1 } },
      topics: { "topic:cells": "2026-03-01" },
      courses: { "biology-1": { topicsViewed: 1, questions: 2, correct: 1 } },
      mastery: {
        "topic:cells": {
          topicsOpened: 2, questionsAttempted: 10, questionsCorrect: 9, streak: 3,
          lastStudiedAt: "2026-03-01", reviewedAt: "2026-03-01", nextReviewAt: "2026-03-08",
        },
      },
      questions: {
        "q:1": {
          attempts: 4, misses: 1, lastResult: "correct",
          lastAnsweredAt: "2026-03-01", nextReviewAt: "2026-03-08", interval: 7,
        },
      },
    };

    const saved = replaceProgress(state);
    expect(maps(saved).mastery["topic:cells"].questionsCorrect).toBe(9);
    expect(maps(saved).questions["q:1"].interval).toBe(7);

    const reread = readProgress();
    expect(maps(reread).mastery["topic:cells"]).toEqual(maps(state).mastery["topic:cells"]);
    expect(maps(reread).questions["q:1"]).toEqual(maps(state).questions["q:1"]);
    expect(reread.days["2026-03-01"].minutes).toBe(12);
    expect(summariseReview(reread, "2026-03-09").questionsDue).toBe(1);
  });

  it("validates the review maps it is handed as strictly as the ones it reads", () => {
    const hostile = {
      version: 1,
      days: {},
      topics: {},
      courses: {},
      mastery: { "topic:x": { topicsOpened: 1e9, questionsAttempted: 2, questionsCorrect: 99, streak: -1 } },
      questions: { "q:x": { attempts: -5, misses: 3, lastResult: "correct", lastAnsweredAt: "2026-03-01", nextReviewAt: "2026-03-02", interval: 1 } },
    } as unknown as ProgressState;

    const saved = replaceProgress(hostile);
    expect(maps(saved).mastery["topic:x"].topicsOpened).toBe(1_000_000);
    expect(maps(saved).mastery["topic:x"].questionsCorrect).toBe(2);
    expect(maps(saved).mastery["topic:x"].streak).toBe(0);
    expect(maps(saved).questions["q:x"]).toBeUndefined();
  });

  it("keeps local review data when a caller replaces everything else without it", () => {
    recordAnswer("biology-1", true, { topicId: "topic:cells", questionId: "q:1" });

    // What the account merge produces: counters only, no review data at all.
    const merged = {
      version: 1,
      days: { "2026-03-01": { minutes: 5, questions: 1, correct: 1 } },
      topics: { "topic:cells": "2026-03-01" },
      courses: { "biology-1": { topicsViewed: 1, questions: 1, correct: 1 } },
    } as ProgressState;
    const saved = replaceProgress(merged);

    expect(Object.keys(maps(saved).questions)).toHaveLength(1);
    expect(maps(readProgress()).mastery["topic:cells"].questionsAttempted).toBe(1);

    // Passing the maps explicitly, empty, does clear them.
    replaceProgress({ ...merged, mastery: {}, questions: {} });
    expect(Object.keys(maps(readProgress()).questions)).toHaveLength(0);
    expect(Object.keys(maps(readProgress()).mastery)).toHaveLength(0);
  });

  it("never throws on malformed JSON in the review maps", () => {
    globalThis.localStorage.setItem(STORAGE_KEY, "{\"version\":1,\"questions\":");
    expect(() => readProgress()).not.toThrow();
    expect(() => summariseReview(readProgress(), TODAY)).not.toThrow();
    expect(summariseReview(readProgress(), TODAY).questionsDue).toBe(0);
  });
});
