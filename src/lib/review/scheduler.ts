/**
 * Spaced-repetition scheduling for practice questions and topics.
 *
 * THE LADDER
 *
 * Reviews are placed on a fixed ladder of whole-day intervals:
 *
 *     1, 3, 7, 14, 30, 60 days
 *
 * It is a plain expanding schedule rather than SM-2 or FSRS, chosen because it
 * needs no per-item ease factor, no grading scale beyond right/wrong, and no
 * tuning data — and because every step is a round number a learner can predict.
 * The steps roughly double, which is the property that matters for spacing; the
 * exact values are a judgement call, not a fitted result. The last step is 60
 * days: past two months an item is better re-learned than nudged.
 *
 * THE RULES
 *
 *   - Wrong answers come back tomorrow. A miss resets the item to the first
 *     step, whatever it had reached before.
 *   - Right answers move up exactly one step, so the spacing earns its way out
 *     rather than jumping.
 *   - An item with any recorded miss is capped at the middle of the ladder
 *     (7 days). Something that has been forgotten once gets a medium interval
 *     rather than the longest one, permanently.
 *   - The queue puts repeated misses first, then the most overdue, then sorts
 *     by id so the order is stable and identical between runs.
 *
 * PURITY
 *
 * Every function takes `today` as an explicit `YYYY-MM-DD` key. Nothing here
 * reads a clock or touches storage, so a test can pin the date and get the same
 * answer every time. Date arithmetic is borrowed from the progress store rather
 * than reimplemented, so "a day" means the same thing in both places.
 */
import { clamp, dayDifference, isDayKey, shiftDays } from "../day-keys";
import type { ProgressState, QuestionAttemptRecord, TopicMasteryRecord } from "../progress";
import { computeMastery, isReviewDue, type TopicMastery } from "./mastery";

/** Whole days, ascending. See the header for why these numbers. */
export const REVIEW_INTERVALS: readonly number[] = [1, 3, 7, 14, 30, 60];

const LAST_INDEX = REVIEW_INTERVALS.length - 1;
/** The cap applied to an item that has ever been missed: 7 days. */
const MEDIUM_INDEX = Math.floor(LAST_INDEX / 2);
/**
 * The stated estimate behind `estimatedMinutes`. Forty-five seconds covers
 * reading a stem, answering, and glancing at the explanation. It is an
 * assumption, not a measurement.
 */
const SECONDS_PER_QUESTION = 45;
/** Same order of magnitude as the progress store's own counter guard. */
const SAFE_MAX = 1_000_000;

const intervalAt = (index: number): number => REVIEW_INTERVALS[Math.min(Math.max(index, 0), LAST_INDEX)];

/**
 * The highest rung whose interval the item has already reached, or -1 when it
 * has never been scheduled. A hand-edited interval that sits between rungs
 * rounds down rather than being rejected.
 */
const ladderIndex = (interval: unknown): number => {
  const days = clamp(interval, SAFE_MAX);
  let index = -1;
  for (let step = 0; step <= LAST_INDEX; step += 1) {
    if (REVIEW_INTERVALS[step] <= days) index = step;
  }
  return index;
};

/** Ascending, byte-wise. Not `localeCompare`, which varies by locale. */
const byId = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0);

const applyLimit = <T>(items: T[], limit: number | undefined): T[] => {
  if (typeof limit !== "number" || !Number.isFinite(limit)) return items;
  return items.slice(0, Math.max(Math.floor(limit), 0));
};

/**
 * Places one answered question on the ladder.
 *
 * A miss drops it to the first step. A hit moves it up one step, but never past
 * the middle of the ladder while the item has a miss on its record.
 */
export const scheduleQuestion = (
  previous: QuestionAttemptRecord | undefined,
  wasCorrect: boolean,
  today: string,
): QuestionAttemptRecord => {
  const attempts = Math.min(clamp(previous?.attempts, SAFE_MAX) + 1, SAFE_MAX);
  const misses = Math.min(clamp(previous?.misses, SAFE_MAX) + (wasCorrect ? 0 : 1), attempts);
  let index = 0;
  if (wasCorrect) {
    index = ladderIndex(previous?.interval) + 1;
    if (misses > 0) index = Math.min(index, MEDIUM_INDEX);
  }
  const interval = intervalAt(index);
  return {
    attempts,
    misses,
    lastResult: wasCorrect ? "correct" : "incorrect",
    lastAnsweredAt: today,
    nextReviewAt: shiftDays(today, interval),
    interval,
  };
};

/**
 * Places a topic on the same ladder, driven by its run of consecutive correct
 * answers rather than by a per-item interval: a topic is a bag of questions, so
 * the streak is the only signal it has.
 */
export const scheduleTopic = (
  previous: TopicMasteryRecord | undefined,
  wasCorrect: boolean,
  today: string,
): { nextReviewAt: string; streak: number } => {
  const streak = wasCorrect ? Math.min(clamp(previous?.streak, SAFE_MAX) + 1, SAFE_MAX) : 0;
  const index = wasCorrect ? streak - 1 : 0;
  return { nextReviewAt: shiftDays(today, intervalAt(index)), streak };
};

export interface ReviewQueueItem {
  questionId: string;
  dueOn: string;
  misses: number;
  /** Whole days between the due date and today; never negative. */
  overdueDays: number;
}

/**
 * Every question due on or before `today`, hardest first.
 *
 * Order: most misses, then most overdue, then id ascending. The final tie-break
 * on id is what makes the queue reproducible — without it two items with the
 * same history would swap places between runs.
 *
 * `limit` is optional; omitted, the whole due set comes back.
 */
export const buildReviewQueue = (state: ProgressState, today: string, limit?: number): ReviewQueueItem[] => {
  const items: ReviewQueueItem[] = [];
  if (!isDayKey(today)) return items;
  for (const [questionId, record] of Object.entries(state.questions ?? {})) {
    if (!record || typeof record !== "object") continue;
    const dueOn = record.nextReviewAt;
    if (!isDayKey(dueOn) || dueOn > today) continue;
    items.push({
      questionId,
      dueOn,
      misses: clamp(record.misses, SAFE_MAX),
      overdueDays: Math.max(dayDifference(dueOn, today), 0),
    });
  }
  items.sort((a, b) => b.misses - a.misses || b.overdueDays - a.overdueDays || byId(a.questionId, b.questionId));
  return applyLimit(items, limit);
};

/**
 * Topics worth going back to: anything practiced but not yet confident, plus
 * anything whose scheduled review has come round. Weakest accuracy first, then
 * the topic with the most evidence behind it, then id.
 */
export const buildWeakTopics = (state: ProgressState, today: string, limit?: number): TopicMastery[] => {
  const items: TopicMastery[] = [];
  for (const [topicId, record] of Object.entries(state.mastery ?? {})) {
    if (!record || typeof record !== "object") continue;
    const mastery = computeMastery(topicId, record);
    const stillBuilding = mastery.questionsAttempted > 0 && mastery.status !== "confident";
    if (!stillBuilding && !isReviewDue(mastery, today)) continue;
    items.push(mastery);
  }
  items.sort((a, b) => a.masteryPercent - b.masteryPercent
    || b.questionsAttempted - a.questionsAttempted
    || byId(a.topicId, b.topicId));
  return applyLimit(items, limit);
};

export interface ReviewSummary {
  questionsDue: number;
  topicsToRevisit: number;
  /** At 45 seconds a question, rounded up. Never 0 while anything is due. */
  estimatedMinutes: number;
}

export const summariseReview = (state: ProgressState, today: string): ReviewSummary => {
  const questionsDue = buildReviewQueue(state, today).length;
  const topicsToRevisit = buildWeakTopics(state, today).length;
  return {
    questionsDue,
    topicsToRevisit,
    estimatedMinutes: questionsDue ? Math.max(1, Math.ceil((questionsDue * SECONDS_PER_QUESTION) / 60)) : 0,
  };
};
