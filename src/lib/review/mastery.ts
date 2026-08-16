/**
 * Topic mastery, derived from the counters the local progress store already
 * keeps. Pure: this module reads no storage, calls no clock and holds no state,
 * so the same record always produces the same result and every rule below is
 * testable without a browser.
 *
 * It imports only *types* from the progress store, which keeps it a leaf of the
 * module graph — nothing here can accidentally reach for `localStorage`.
 *
 * ON THE WORD "CONFIDENT"
 *
 * The four statuses describe practice accuracy on this site and nothing else.
 * They are not an assessment of clinical skill, and they are not a prediction of
 * any exam result. The descriptions say so in as many words, because a progress
 * badge that reads as a competence claim would be both wrong and unsafe.
 */
import type { TopicMasteryRecord } from "../progress";

export type MasteryStatus = "new" | "learning" | "practicing" | "confident";

export interface TopicMastery {
  topicId: string;
  topicsOpened: number;
  questionsAttempted: number;
  questionsCorrect: number;
  /** Rounded practice accuracy, 0-100. Zero when nothing has been attempted. */
  masteryPercent: number;
  status: MasteryStatus;
  lastStudiedAt?: string;
  nextReviewAt?: string;
  reviewedAt?: string;
}

/** Below this many attempts there is not enough evidence to judge accuracy. */
const MIN_PRACTICE_ATTEMPTS = 5;
/** Accuracy alone is not enough; a short lucky run should not read as settled. */
const MIN_CONFIDENT_ATTEMPTS = 10;
const CONFIDENT_ACCURACY = 80;

const DAY_KEY = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Defence in depth. Records normally arrive already validated by the progress
 * store, but this function is exported and pure, so it also has to cope with a
 * hand-built or hand-edited record. Kept local rather than imported so this
 * module stays free of runtime dependencies.
 */
const count = (value: unknown): number =>
  typeof value === "number" && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;

const day = (value: unknown): string | undefined =>
  typeof value === "string" && DAY_KEY.test(value) ? value : undefined;

const statusFor = (topicsOpened: number, attempted: number, accuracy: number): MasteryStatus => {
  if (!topicsOpened && !attempted) return "new";
  if (attempted < MIN_PRACTICE_ATTEMPTS) return "learning";
  if (attempted >= MIN_CONFIDENT_ATTEMPTS && accuracy >= CONFIDENT_ACCURACY) return "confident";
  return "practicing";
};

/**
 * Turns one stored record into the shape the UI reads.
 *
 *   new         nothing opened and nothing attempted
 *   learning    opened, or fewer than 5 attempts — too early to judge
 *   practicing  at least 5 attempts, accuracy still under 80%
 *   confident   at least 10 attempts and accuracy 80% or better
 */
export const computeMastery = (topicId: string, record: TopicMasteryRecord | undefined): TopicMastery => {
  const topicsOpened = count(record?.topicsOpened);
  const questionsAttempted = count(record?.questionsAttempted);
  // A correct count can never exceed the attempts it came from.
  const questionsCorrect = Math.min(count(record?.questionsCorrect), questionsAttempted);
  const masteryPercent = questionsAttempted
    ? Math.min(Math.max(Math.round((questionsCorrect / questionsAttempted) * 100), 0), 100)
    : 0;
  return {
    topicId,
    topicsOpened,
    questionsAttempted,
    questionsCorrect,
    masteryPercent,
    status: statusFor(topicsOpened, questionsAttempted, masteryPercent),
    lastStudiedAt: day(record?.lastStudiedAt),
    nextReviewAt: day(record?.nextReviewAt),
    reviewedAt: day(record?.reviewedAt),
  };
};

/** Short label for a badge or chip. */
export const masteryStatusLabel = (status: MasteryStatus): string => {
  switch (status) {
    case "new": return "Not started";
    case "learning": return "Learning";
    case "practicing": return "Practicing";
    case "confident": return "Confident";
  }
};

/**
 * The sentence shown next to the label. Deliberately about practice on this
 * site only — no claim of clinical competence, and no promise about an exam.
 */
export const masteryStatusDescription = (status: MasteryStatus): string => {
  switch (status) {
    case "new":
      return "You have not opened this topic or answered any of its practice questions yet.";
    case "learning":
      return "You have started this topic. There are too few practice answers here to say anything about accuracy yet.";
    case "practicing":
      return "You are practicing this topic regularly and your accuracy on these questions is still building.";
    case "confident":
      return "Your recent accuracy on this site's practice questions for this topic is high. That describes your answers here only — it is not a measure of clinical competence and not a prediction of any exam result.";
  }
};

/** True when a scheduled review date has arrived or passed. */
export const isReviewDue = (mastery: TopicMastery, today: string): boolean =>
  Boolean(mastery.nextReviewAt && mastery.nextReviewAt <= today);
