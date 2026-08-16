/**
 * Day-key arithmetic and untrusted-number coercion, shared by the progress
 * store and the review scheduler.
 *
 * These four helpers used to live in `progress.ts` and be imported back by
 * `review/scheduler.ts`, which `progress.ts` itself imports — a runtime cycle.
 * It happened to work, because nothing was called during module evaluation, but
 * `export const` arrow functions are not hoisted, so the first time a bundler
 * reordered that graph the scheduler would have seen `undefined` instead of
 * `clamp`. Moving the shared leaf here removes the cycle; `progress.ts` still
 * re-exports all four so no existing import path changes.
 *
 * A day key is `YYYY-MM-DD` in the visitor's own timezone, so "today" means
 * their today, not UTC's.
 */

const DAY_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** The one place that decides whether a string is a usable day key. */
export const isDayKey = (value: unknown): value is string =>
  typeof value === "string" && DAY_KEY_PATTERN.test(value);

/** `YYYY-MM-DD` in the visitor's own timezone, so "today" means their today. */
export function dayKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Moves a day key by whole days. Uses a local `Date` and `setDate`, which steps
 * calendar days correctly across daylight-saving boundaries where adding
 * 86,400,000ms would not.
 */
export const shiftDays = (key: string, delta: number): string => {
  const [year, month, day] = key.split("-").map(Number);
  const date = new Date(year, (month ?? 1) - 1, day ?? 1);
  date.setDate(date.getDate() + delta);
  return dayKey(date);
};

const utcMidnight = (key: string): number | null => {
  if (!isDayKey(key)) return null;
  const [year, month, day] = key.split("-").map(Number);
  const time = Date.UTC(year, month - 1, day);
  return Number.isFinite(time) ? time : null;
};

/**
 * Whole days from one key to another, positive when `to` is later. Compares at
 * UTC midnight because only the difference matters here, and UTC has no
 * daylight-saving jumps to round away. Returns 0 for anything unparseable.
 */
export const dayDifference = (from: string, to: string): number => {
  const start = utcMidnight(from);
  const end = utcMidnight(to);
  if (start === null || end === null) return 0;
  return Math.round((end - start) / 86_400_000);
};

/** Coerces untrusted input to a whole number in 0..max. */
export const clamp = (value: unknown, max: number): number => {
  const numeric = typeof value === "number" && Number.isFinite(value) ? Math.floor(value) : 0;
  return Math.min(Math.max(numeric, 0), max);
};
