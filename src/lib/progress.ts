/**
 * Study progress, stored only in the visitor's own browser.
 *
 * The site has no accounts and no server, and the product positioning is
 * explicitly "no registration". So progress lives in `localStorage`: the
 * streak, the minutes, the question counts and the per-course totals never
 * leave the device and are never sent anywhere.
 *
 * Three consequences that shape the code below:
 *
 *  1. Storage can throw. Safari in private mode throws on `setItem`, and some
 *     browsers block storage on third-party or file:// contexts entirely.
 *     Every access is guarded, and a failure downgrades to an in-memory store
 *     for the session rather than breaking the page.
 *  2. The data is untrusted. It is user-editable by definition, so everything
 *     read back is validated and clamped before use — a hand-edited streak of
 *     `1e9` must not reach the UI.
 *  3. No personal data is stored. No name, no email, no free text. Only
 *     counters and ISO dates.
 *
 * The store also holds the review state — per-topic mastery counters and
 * per-question scheduling — added in the practice and review work. That data is
 * local only: unlike the day and course counters it is deliberately left out of
 * the account sync payload, so it never leaves the browser even when someone is
 * signed in. See `replaceProgress` for how that is enforced.
 */
// The review modules import this one back, for the day-key arithmetic and the
// counter guard they must share with the store rather than reimplement. The
// cycle is safe because neither side touches the other at module scope: the
// scheduler only holds its own constants, and everything crossing the boundary
// is called long after both modules have finished evaluating.
import { clamp, dayKey, isDayKey, shiftDays } from "./day-keys";
import { computeMastery, type TopicMastery } from "./review/mastery";
import { scheduleQuestion, scheduleTopic } from "./review/scheduler";

const STORAGE_KEY = "medmosa.progress.v1";
/**
 * Keys this store has used before, newest first. Renaming the key at a rebrand
 * would silently reset every visitor's streak and totals, so each old key is
 * still read and is migrated to the current one on the next write.
 */
const LEGACY_STORAGE_KEYS = ["medmosaic.progress.v1", "study-compass.progress.v1"];
/** Days kept. A year is enough for any streak or trend the UI shows. */
const MAX_DAYS = 400;
/** Guards against a corrupted or hand-edited store producing silly figures. */
const MAX_MINUTES_PER_DAY = 24 * 60;
const MAX_COUNT = 1_000_000;
/**
 * Per-question scheduling is the only part of this store that grows with use
 * rather than with the calendar, so it is the only part that could realistically
 * approach the ~5MB localStorage quota. Five thousand records is far more than
 * anyone will answer and still only a few hundred kilobytes; past that the
 * oldest answers are dropped. Topic mastery gets the same treatment for the
 * same reason, though the curriculum makes hitting it unlikely.
 */
const MAX_QUESTION_RECORDS = 5_000;
const MAX_MASTERY_RECORDS = 5_000;

export interface DayRecord {
  minutes: number;
  questions: number;
  correct: number;
}

export interface CourseRecord {
  topicsViewed: number;
  questions: number;
  correct: number;
}

/** What is known about one topic. Dates are day keys, never timestamps. */
export interface TopicMasteryRecord {
  topicsOpened: number;
  questionsAttempted: number;
  questionsCorrect: number;
  /** Last day the topic was opened or practiced. */
  lastStudiedAt?: string;
  nextReviewAt?: string;
  /** Last day a practice question from this topic was answered. */
  reviewedAt?: string;
  /** Consecutive correct answers on this topic; a miss resets it to zero. */
  streak: number;
}

/** One question's scheduling state. See `lib/review/scheduler.ts`. */
export interface QuestionAttemptRecord {
  attempts: number;
  misses: number;
  lastResult: "correct" | "incorrect";
  lastAnsweredAt: string;
  nextReviewAt: string;
  /** Whole days between the last answer and the next review. */
  interval: number;
}

export interface ProgressState {
  version: 1;
  days: Record<string, DayRecord>;
  topics: Record<string, string>;
  courses: Record<string, CourseRecord>;
  /**
   * Review state. Optional on the type, not on the data: everything this module
   * writes carries both maps, and `readProgress` always returns both. They stay
   * optional because a payload from an older build — or from the account row,
   * which deliberately does not carry them — genuinely will not have them, and
   * the type should not pretend otherwise.
   */
  mastery?: Record<string, TopicMasteryRecord>;
  questions?: Record<string, QuestionAttemptRecord>;
}

export interface ProgressSummary {
  streakDays: number;
  minutesToday: number;
  questionsToday: number;
  correctToday: number;
  accuracyToday: number | null;
  totalQuestions: number;
  totalCorrect: number;
  topicsViewed: number;
  coursesStarted: number;
  minutesThisWeek: number;
  hasAnyActivity: boolean;
}

const emptyState = (): ProgressState => ({ version: 1, days: {}, topics: {}, courses: {}, mastery: {}, questions: {} });

/**
 * Day-key arithmetic and the untrusted-number clamp live in `./day-keys` so the
 * review scheduler can share them without importing this module back. They are
 * re-exported here because they were part of this module's public surface
 * first, and callers should not have to care where they moved to.
 */
export { clamp, dayDifference, dayKey, isDayKey, shiftDays } from "./day-keys";

/** In-memory fallback used when the browser refuses persistent storage. */
let memoryState: ProgressState | null = null;
/**
 * The probe result is cached against the storage object it was run on, rather
 * than latched in a boolean. A permanent latch meant one transient failure —
 * a momentarily full quota, say — disabled persistence for the rest of the
 * page's life, and in a single-page app that life is long.
 */
let probedStore: Storage | null = null;
let probePassed = false;

function storage(): Storage | null {
  let candidate: Storage | undefined;
  try {
    candidate = globalThis.localStorage;
  } catch {
    // Accessing the property itself throws when storage is blocked by policy.
    return null;
  }
  if (!candidate) return null;
  if (candidate === probedStore) return probePassed ? candidate : null;
  probedStore = candidate;
  try {
    // Safari private mode only throws on write, so probe with one.
    const probe = `${STORAGE_KEY}.probe`;
    candidate.setItem(probe, "1");
    candidate.removeItem(probe);
    probePassed = true;
    return candidate;
  } catch {
    probePassed = false;
    return null;
  }
}

/**
 * Keeps the newest `limit` records and drops the rest, oldest activity first.
 * Ties break on the key, so two records last touched on the same day are
 * evicted in a fixed order rather than whichever the engine happened to list
 * first.
 */
const capRecords = <T>(records: Record<string, T>, limit: number, dateOf: (record: T) => string): Record<string, T> => {
  const keys = Object.keys(records);
  if (keys.length <= limit) return records;
  keys.sort((a, b) => {
    const left = dateOf(records[a]);
    const right = dateOf(records[b]);
    if (left !== right) return left < right ? -1 : 1;
    return a < b ? -1 : a > b ? 1 : 0;
  });
  const kept: Record<string, T> = {};
  for (const key of keys.slice(keys.length - limit)) kept[key] = records[key];
  return kept;
};

/**
 * Validates the topic mastery map with the same suspicion as the day and course
 * records: counters clamped, a correct count never exceeding the attempts it
 * came from, and each date accepted only if it is a real day key.
 */
const sanitiseMastery = (input: unknown): Record<string, TopicMasteryRecord> => {
  const result: Record<string, TopicMasteryRecord> = {};
  if (!input || typeof input !== "object") return result;
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (!key || !value || typeof value !== "object" || Array.isArray(value)) continue;
    const record = value as Partial<TopicMasteryRecord>;
    const questionsAttempted = clamp(record.questionsAttempted, MAX_COUNT);
    const safe: TopicMasteryRecord = {
      topicsOpened: clamp(record.topicsOpened, MAX_COUNT),
      questionsAttempted,
      questionsCorrect: Math.min(clamp(record.questionsCorrect, MAX_COUNT), questionsAttempted),
      streak: clamp(record.streak, MAX_COUNT),
    };
    // A malformed date is dropped on its own; the counters still stand.
    if (isDayKey(record.lastStudiedAt)) safe.lastStudiedAt = record.lastStudiedAt;
    if (isDayKey(record.nextReviewAt)) safe.nextReviewAt = record.nextReviewAt;
    if (isDayKey(record.reviewedAt)) safe.reviewedAt = record.reviewedAt;
    // Nothing opened and nothing attempted is not a record of anything.
    if (!safe.topicsOpened && !safe.questionsAttempted) continue;
    result[key] = safe;
  }
  return capRecords(result, MAX_MASTERY_RECORDS, (record) => record.lastStudiedAt ?? "");
};

/** The same treatment for per-question scheduling. */
const sanitiseQuestions = (input: unknown): Record<string, QuestionAttemptRecord> => {
  const result: Record<string, QuestionAttemptRecord> = {};
  if (!input || typeof input !== "object") return result;
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (!key || !value || typeof value !== "object" || Array.isArray(value)) continue;
    const record = value as Partial<QuestionAttemptRecord>;
    // Both dates carry the schedule. Without them the record cannot be used,
    // and a record that cannot be used is not worth keeping.
    if (!isDayKey(record.lastAnsweredAt) || !isDayKey(record.nextReviewAt)) continue;
    const attempts = clamp(record.attempts, MAX_COUNT);
    if (!attempts) continue;
    result[key] = {
      attempts,
      misses: Math.min(clamp(record.misses, MAX_COUNT), attempts),
      // Anything unrecognised counts as a miss. Guessing "correct" would let an
      // edited store inflate its own accuracy, and guessing wrong in the safe
      // direction only costs an extra review.
      lastResult: record.lastResult === "correct" ? "correct" : "incorrect",
      lastAnsweredAt: record.lastAnsweredAt,
      nextReviewAt: record.nextReviewAt,
      interval: clamp(record.interval, MAX_DAYS),
    };
  }
  return capRecords(result, MAX_QUESTION_RECORDS, (record) => record.lastAnsweredAt);
};

/** Reads and validates the stored state. Never throws. */
export function readProgress(): ProgressState {
  const store = storage();
  if (!store) return memoryState ? { ...memoryState } : emptyState();
  try {
    let raw = store.getItem(STORAGE_KEY);
    if (!raw) {
      for (const legacy of LEGACY_STORAGE_KEYS) {
        raw = store.getItem(legacy);
        if (raw) break;
      }
    }
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    if (!parsed || typeof parsed !== "object") return emptyState();
    const state = emptyState();
    for (const [key, value] of Object.entries(parsed.days ?? {})) {
      if (!isDayKey(key) || !value || typeof value !== "object") continue;
      const record = value as Partial<DayRecord>;
      state.days[key] = {
        minutes: clamp(record.minutes, MAX_MINUTES_PER_DAY),
        questions: clamp(record.questions, MAX_COUNT),
        correct: clamp(record.correct, MAX_COUNT),
      };
    }
    for (const [key, value] of Object.entries(parsed.topics ?? {})) {
      if (isDayKey(value)) state.topics[key] = value;
    }
    for (const [key, value] of Object.entries(parsed.courses ?? {})) {
      if (!value || typeof value !== "object") continue;
      const record = value as Partial<CourseRecord>;
      state.courses[key] = {
        topicsViewed: clamp(record.topicsViewed, MAX_COUNT),
        questions: clamp(record.questions, MAX_COUNT),
        correct: clamp(record.correct, MAX_COUNT),
      };
    }
    // Absent from anything written before the review work shipped, which is
    // exactly why both are rebuilt from a fresh empty state rather than merged.
    state.mastery = sanitiseMastery(parsed.mastery);
    state.questions = sanitiseQuestions(parsed.questions);
    // A correct count can never exceed the questions answered.
    for (const day of Object.values(state.days)) day.correct = Math.min(day.correct, day.questions);
    for (const course of Object.values(state.courses)) course.correct = Math.min(course.correct, course.questions);
    return state;
  } catch {
    return emptyState();
  }
}

function writeProgress(state: ProgressState): void {
  const keys = Object.keys(state.days).sort();
  if (keys.length > MAX_DAYS) {
    for (const key of keys.slice(0, keys.length - MAX_DAYS)) delete state.days[key];
  }
  // Both maps are always written, even when empty, so a reader never has to
  // guess whether an absent map means "none yet" or "an older build".
  state.mastery = capRecords(state.mastery ?? {}, MAX_MASTERY_RECORDS, (record) => record.lastStudiedAt ?? "");
  state.questions = capRecords(state.questions ?? {}, MAX_QUESTION_RECORDS, (record) => record.lastAnsweredAt);
  memoryState = state;
  const store = storage();
  if (!store) return;
  try {
    store.setItem(STORAGE_KEY, JSON.stringify(state));
    for (const legacy of LEGACY_STORAGE_KEYS) store.removeItem(legacy);
  } catch {
    // Quota exceeded or storage disabled mid-session: keep the in-memory copy
    // so the current visit still shows live numbers, and mark this store as
    // unwritable until a different one appears.
    probePassed = false;
  }
}

function mutate(change: (state: ProgressState) => void): ProgressState {
  const state = readProgress();
  change(state);
  writeProgress(state);
  return state;
}

const dayFor = (state: ProgressState, key: string): DayRecord => {
  if (!state.days[key]) state.days[key] = { minutes: 0, questions: 0, correct: 0 };
  return state.days[key];
};
const courseFor = (state: ProgressState, slug: string): CourseRecord => {
  if (!state.courses[slug]) state.courses[slug] = { topicsViewed: 0, questions: 0, correct: 0 };
  return state.courses[slug];
};
const masteryFor = (state: ProgressState, topicId: string): TopicMasteryRecord => {
  if (!state.mastery) state.mastery = {};
  if (!state.mastery[topicId]) {
    state.mastery[topicId] = { topicsOpened: 0, questionsAttempted: 0, questionsCorrect: 0, streak: 0 };
  }
  return state.mastery[topicId];
};

/**
 * Records a topic as read.
 *
 * The course total still counts a topic once per topic, ever — reopening a page
 * you have already read is not new progress. The mastery record does count
 * every opening, because "how often did I come back to this" is a different
 * question from "how much of the course have I seen".
 */
export function recordTopicView(subjectSlug: string, topicId: string): ProgressState {
  return mutate((state) => {
    const today = dayKey();
    const mastery = masteryFor(state, topicId);
    mastery.topicsOpened = clamp(mastery.topicsOpened + 1, MAX_COUNT);
    mastery.lastStudiedAt = today;
    if (state.topics[topicId]) return;
    state.topics[topicId] = today;
    courseFor(state, subjectSlug).topicsViewed += 1;
  });
}

/** Where an answer came from. Both are optional: older callers pass neither. */
export interface AnswerContext {
  topicId?: string;
  questionId?: string;
}

/**
 * Records one answered practice question.
 *
 * The third argument is additive. `recordAnswer(slug, correct)` behaves exactly
 * as it always has; passing a topic or question id additionally files the answer
 * into the review schedule.
 */
export function recordAnswer(subjectSlug: string, wasCorrect: boolean, context: AnswerContext = {}): ProgressState {
  return mutate((state) => {
    const key = dayKey();
    const today = dayFor(state, key);
    today.questions = clamp(today.questions + 1, MAX_COUNT);
    const course = courseFor(state, subjectSlug);
    course.questions = clamp(course.questions + 1, MAX_COUNT);
    if (wasCorrect) {
      today.correct = clamp(today.correct + 1, MAX_COUNT);
      course.correct = clamp(course.correct + 1, MAX_COUNT);
    }
    if (context.topicId) {
      const mastery = masteryFor(state, context.topicId);
      // Scheduled from the record as it was before this answer landed.
      const scheduled = scheduleTopic(mastery, wasCorrect, key);
      mastery.questionsAttempted = clamp(mastery.questionsAttempted + 1, MAX_COUNT);
      if (wasCorrect) mastery.questionsCorrect = clamp(mastery.questionsCorrect + 1, MAX_COUNT);
      mastery.questionsCorrect = Math.min(mastery.questionsCorrect, mastery.questionsAttempted);
      mastery.lastStudiedAt = key;
      mastery.reviewedAt = key;
      mastery.nextReviewAt = scheduled.nextReviewAt;
      mastery.streak = scheduled.streak;
    }
    if (context.questionId) {
      if (!state.questions) state.questions = {};
      state.questions[context.questionId] = scheduleQuestion(state.questions[context.questionId], wasCorrect, key);
    }
  });
}

/** Adds study time, in whole minutes. */
export function recordStudyMinutes(minutes: number): ProgressState {
  const safe = clamp(minutes, MAX_MINUTES_PER_DAY);
  return mutate((state) => {
    if (!safe) return;
    const today = dayFor(state, dayKey());
    today.minutes = clamp(today.minutes + safe, MAX_MINUTES_PER_DAY);
  });
}

/**
 * Replaces the whole state. Used by account sync after a merge, which computes
 * the result from both sides and must be able to write it back atomically
 * rather than replaying individual increments.
 *
 * The review maps follow one extra rule. Omitting them — `undefined`, which is
 * what an account merge produces, because review data is never uploaded — keeps
 * whatever is already stored, so signing in cannot silently wipe a schedule that
 * only ever existed on this device. Passing `{}` explicitly does clear them.
 */
export function replaceProgress(state: ProgressState): ProgressState {
  // Only read the current state when one of the review maps is actually
  // missing, since that is the only case with anything to carry over.
  const stored = state.mastery === undefined || state.questions === undefined ? readProgress() : null;
  const safe: ProgressState = {
    version: 1,
    days: {},
    topics: {},
    courses: {},
    mastery: state.mastery === undefined ? stored?.mastery ?? {} : sanitiseMastery(state.mastery),
    questions: state.questions === undefined ? stored?.questions ?? {} : sanitiseQuestions(state.questions),
  };
  for (const [key, value] of Object.entries(state.days ?? {})) {
    if (!isDayKey(key)) continue;
    const questions = clamp(value?.questions, MAX_COUNT);
    safe.days[key] = {
      minutes: clamp(value?.minutes, MAX_MINUTES_PER_DAY),
      questions,
      correct: Math.min(clamp(value?.correct, MAX_COUNT), questions),
    };
  }
  for (const [key, value] of Object.entries(state.topics ?? {})) {
    if (isDayKey(value)) safe.topics[key] = value;
  }
  for (const [key, value] of Object.entries(state.courses ?? {})) {
    const questions = clamp(value?.questions, MAX_COUNT);
    safe.courses[key] = {
      topicsViewed: clamp(value?.topicsViewed, MAX_COUNT),
      questions,
      correct: Math.min(clamp(value?.correct, MAX_COUNT), questions),
    };
  }
  writeProgress(safe);
  return safe;
}

/** Deletes everything. Offered in the UI, because it is the visitor's data. */
export function clearProgress(): void {
  memoryState = null;
  try {
    const store = globalThis.localStorage;
    for (const legacy of LEGACY_STORAGE_KEYS) store?.removeItem(legacy);
  } catch { /* nothing to do */ }
  probedStore = null;
  probePassed = false;
  const store = storage();
  try { store?.removeItem(STORAGE_KEY); } catch { /* nothing to do */ }
}

/** What is known about one topic, ready for display. */
export const readMastery = (topicId: string): TopicMastery =>
  computeMastery(topicId, readProgress().mastery?.[topicId]);

/**
 * Forgets the review schedule and the per-topic mastery counters, and nothing
 * else. Days, topics and course totals survive, so someone who wants to restart
 * their revision does not also lose their streak. Safe when storage is refused:
 * the read cannot throw and the write is already guarded.
 */
export const clearReviewHistory = (): void => {
  mutate((state) => {
    state.mastery = {};
    state.questions = {};
  });
};

const isActive = (record: DayRecord | undefined): boolean =>
  Boolean(record && (record.minutes > 0 || record.questions > 0));

/**
 * Consecutive active days ending today. A day studied yesterday but not yet
 * today still counts, so the streak does not appear to break at midnight
 * before the visitor has had a chance to study.
 */
export function streakFrom(state: ProgressState, today = dayKey()): number {
  let cursor = today;
  if (!isActive(state.days[cursor])) {
    cursor = shiftDays(today, -1);
    if (!isActive(state.days[cursor])) return 0;
  }
  let streak = 0;
  while (isActive(state.days[cursor]) && streak < MAX_DAYS) {
    streak += 1;
    cursor = shiftDays(cursor, -1);
  }
  return streak;
}

export function summarise(state: ProgressState = readProgress()): ProgressSummary {
  const today = dayKey();
  const todayRecord = state.days[today] ?? { minutes: 0, questions: 0, correct: 0 };
  let totalQuestions = 0;
  let totalCorrect = 0;
  for (const course of Object.values(state.courses)) {
    totalQuestions += course.questions;
    totalCorrect += course.correct;
  }
  let minutesThisWeek = 0;
  for (let offset = 0; offset < 7; offset += 1) {
    minutesThisWeek += state.days[shiftDays(today, -offset)]?.minutes ?? 0;
  }
  const topicsViewed = Object.keys(state.topics).length;
  const coursesStarted = Object.values(state.courses).filter(
    (course) => course.topicsViewed > 0 || course.questions > 0,
  ).length;
  return {
    streakDays: streakFrom(state, today),
    minutesToday: todayRecord.minutes,
    questionsToday: todayRecord.questions,
    correctToday: todayRecord.correct,
    accuracyToday: todayRecord.questions ? Math.round((todayRecord.correct / todayRecord.questions) * 100) : null,
    totalQuestions,
    totalCorrect,
    topicsViewed,
    coursesStarted,
    minutesThisWeek,
    hasAnyActivity: topicsViewed > 0 || totalQuestions > 0 || minutesThisWeek > 0,
  };
}

/** Per-course figures, for the course cards. */
export function courseProgress(state: ProgressState, subjectSlug: string): CourseRecord {
  return state.courses[subjectSlug] ?? { topicsViewed: 0, questions: 0, correct: 0 };
}

/**
 * Counts a visit as study time. Called on an interval by the app while a
 * learning page is open and the tab is visible, so idle background tabs do not
 * inflate the number.
 */
export function createStudyClock(intervalMinutes = 1) {
  let elapsed = 0;
  return {
    tick(isVisible: boolean): void {
      if (!isVisible) return;
      elapsed += intervalMinutes;
      if (elapsed >= 1) {
        recordStudyMinutes(Math.floor(elapsed));
        elapsed -= Math.floor(elapsed);
      }
    },
  };
}
