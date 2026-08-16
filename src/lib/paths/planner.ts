/**
 * A local study planner.
 *
 * DETERMINISM
 *
 * `generatePlan` takes `today` as an explicit `YYYY-MM-DD` key and reads no
 * clock, no storage and no network. The same input plus the same `today` plus
 * the same progress state always produces byte-identical output; there is no
 * randomness anywhere, and every ordering decision falls back to a fixed
 * tie-break so two runs cannot disagree.
 *
 * WHAT IS COLLECTED, AND WHAT IS NOT
 *
 * Six values, all of them preferences or course slugs: the path, a target date,
 * days per week, minutes per day, an optional list of focus courses and an
 * optional confidence band. No name, no email, no free text, no health
 * information — and nothing that could carry any, because the only strings that
 * survive the guard are slugs the catalog already publishes and a date that
 * matches `YYYY-MM-DD`. The stored payload lives in `localStorage` and is never
 * sent anywhere.
 *
 * Reading it back follows the same discipline as `lib/progress.ts`: storage may
 * be blocked or may throw, the payload is user-editable and therefore untrusted,
 * and nothing here throws — a corrupt value is dropped or clamped, never
 * propagated.
 *
 * WHICH DAYS BECOME SESSIONS
 *
 * Within each rolling seven-day block from `today`, day `d` is a study day when
 * `(d * daysPerWeek) % 7 < daysPerWeek`. That is a Bresenham distribution: it
 * yields exactly `daysPerWeek` days per block, spread as evenly as seven allows,
 * and it always includes the first day so a plan starts the day it is made.
 *
 * HOW REVIEW TIME IS RESERVED
 *
 * Every Nth session is a review session, revisiting the course of the session
 * before it rather than opening new material:
 *
 *     confidence "low"        every 3rd session
 *     confidence "medium"     every 4th session   (also the default)
 *     confidence "high"       every 5th session
 *
 * Lower stated confidence buys more revision, which is the only thing the
 * confidence value is used for.
 *
 * WHAT A PLAN IS NOT
 *
 * A schedule of sessions. It is not an assessment, and it cannot tell anyone
 * whether they are ready for an exam. Nothing in this module says otherwise;
 * see `PLAN_DISCLAIMER`.
 */
import { dayDifference, isDayKey, shiftDays, type ProgressState } from "../progress";
import { buildWeakTopics } from "../review/scheduler";
import { estimatedMinutesForCourse, getStudyPath, isStudyPathSlug, type StudyPathCourse } from "./study-paths";

export interface PlanInput {
  pathSlug: string;
  /** `YYYY-MM-DD`. */
  targetDate: string;
  daysPerWeek: number;
  minutesPerDay: number;
  focusCourseSlugs?: string[];
  confidence?: "low" | "medium" | "high";
}

export interface PlanSession {
  date: string;
  courseSlug: string;
  courseTitle: string;
  minutes: number;
  kind: "study" | "review";
  topicTarget: number;
}

export interface StudyPlan {
  pathSlug: string;
  /** The `today` the plan was generated against, echoed back. */
  generatedFor: string;
  targetDate: string;
  sessions: PlanSession[];
  totalMinutes: number;
  totalSessions: number;
  warnings: string[];
}

export const PLAN_STORAGE_KEY = "medmosa.plan.v1";

/** Standing copy for the UI. A plan schedules time; it predicts nothing. */
export const PLAN_DISCLAIMER =
  "This is a schedule you asked for, not an assessment. It cannot tell you whether you are ready for an exam, and MedMosa claims no alignment to any exam blueprint.";

export const MIN_MINUTES_PER_DAY = 10;
export const MAX_MINUTES_PER_DAY = 240;
export const MIN_DAYS_PER_WEEK = 1;
export const MAX_DAYS_PER_WEEK = 7;
/** Used when the target date is missing, unreadable or not in the future. */
export const DEFAULT_HORIZON_DAYS = 14;
/** Matches the progress store's own day cap; a plan past a year is not a plan. */
export const MAX_HORIZON_DAYS = 400;
/** More than this many focus courses is not a focus. */
const MAX_FOCUS_COURSES = 12;

const REVIEW_CADENCE: Record<"low" | "medium" | "high", number> = { low: 3, medium: 4, high: 5 };

/** Coerces untrusted input to a whole number inside an inclusive range. */
const clampRange = (value: unknown, min: number, max: number): number => {
  const numeric = typeof value === "number" && Number.isFinite(value) ? Math.round(value) : min;
  return Math.min(Math.max(numeric, min), max);
};

const isConfidence = (value: unknown): value is "low" | "medium" | "high" =>
  value === "low" || value === "medium" || value === "high";

/**
 * The one gate every stored or supplied input passes through. Returns
 * `undefined` only when the path itself is unusable, because without a path
 * there is nothing to plan.
 */
const sanitiseInput = (value: unknown): PlanInput | undefined => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;
  const raw = value as Record<string, unknown>;
  if (!isStudyPathSlug(raw.pathSlug)) return undefined;
  const path = getStudyPath(raw.pathSlug);
  if (!path) return undefined;
  const input: PlanInput = {
    pathSlug: raw.pathSlug,
    // An unusable date is dropped rather than repaired; the planner warns and
    // falls back to its documented horizon.
    targetDate: isDayKey(raw.targetDate) ? raw.targetDate : "",
    daysPerWeek: clampRange(raw.daysPerWeek, MIN_DAYS_PER_WEEK, MAX_DAYS_PER_WEEK),
    minutesPerDay: clampRange(raw.minutesPerDay, MIN_MINUTES_PER_DAY, MAX_MINUTES_PER_DAY),
  };
  if (Array.isArray(raw.focusCourseSlugs)) {
    const seen = new Set<string>();
    const focus: string[] = [];
    for (const entry of raw.focusCourseSlugs) {
      // Only slugs this path already publishes survive, so no free text can be
      // smuggled into the stored payload.
      if (typeof entry !== "string" || seen.has(entry) || !path.courseSlugs.includes(entry)) continue;
      seen.add(entry);
      focus.push(entry);
      if (focus.length >= MAX_FOCUS_COURSES) break;
    }
    if (focus.length) input.focusCourseSlugs = focus;
  }
  if (isConfidence(raw.confidence)) input.confidence = raw.confidence;
  return input;
};

/** In-memory fallback for a browser that refuses persistent storage. */
let memoryInput: PlanInput | undefined;
/**
 * Cached against the store object rather than latched in a boolean, so one
 * transient failure does not disable persistence for the rest of the page's
 * life. Same reasoning as `lib/progress.ts`.
 */
let probedStore: Storage | null = null;
let probePassed = false;

const storage = (): Storage | null => {
  let candidate: Storage | undefined;
  try {
    candidate = globalThis.localStorage;
  } catch {
    // Reading the property itself throws when storage is blocked by policy.
    return null;
  }
  if (!candidate) return null;
  if (candidate === probedStore) return probePassed ? candidate : null;
  probedStore = candidate;
  try {
    // Safari private mode only throws on write, so probe with one.
    const probe = `${PLAN_STORAGE_KEY}.probe`;
    candidate.setItem(probe, "1");
    candidate.removeItem(probe);
    probePassed = true;
    return candidate;
  } catch {
    probePassed = false;
    return null;
  }
};

/** Stores the six preference values. Silently does nothing if they are unusable. */
export const savePlanInput = (input: PlanInput): void => {
  const safe = sanitiseInput(input);
  if (!safe) return;
  memoryInput = safe;
  const store = storage();
  if (!store) return;
  try {
    store.setItem(PLAN_STORAGE_KEY, JSON.stringify(safe));
  } catch {
    // Quota exceeded or storage disabled mid-session. The in-memory copy keeps
    // this visit working; mark the store unwritable until a different one shows
    // up.
    probePassed = false;
  }
};

/** Reads and validates the stored preferences. Never throws. */
export const readPlanInput = (): PlanInput | undefined => {
  const store = storage();
  if (!store) return memoryInput ? { ...memoryInput } : undefined;
  try {
    const raw = store.getItem(PLAN_STORAGE_KEY);
    if (!raw) return undefined;
    return sanitiseInput(JSON.parse(raw));
  } catch {
    return undefined;
  }
};

/** Deletes the stored preferences. Offered in the UI, because it is the visitor's data. */
export const clearPlan = (): void => {
  memoryInput = undefined;
  probedStore = null;
  probePassed = false;
  const store = storage();
  try {
    store?.removeItem(PLAN_STORAGE_KEY);
  } catch {
    /* nothing to do */
  }
};

/** Whole days from `today` that carry a session, given the weekly rhythm. */
const sessionOffsets = (horizonDays: number, daysPerWeek: number): number[] => {
  const offsets: number[] = [];
  for (let offset = 0; offset < horizonDays; offset += 1) {
    if (((offset % 7) * daysPerWeek) % 7 < daysPerWeek) offsets.push(offset);
  }
  return offsets;
};

/** Courses the visitor is currently weakest in, keyed by the course slug in each topic id. */
const weakCourses = (state: ProgressState, today: string): Set<string> => {
  const slugs = new Set<string>();
  for (const mastery of buildWeakTopics(state, today)) {
    const parts = mastery.topicId.split(":");
    if (parts.length === 4 && parts[0] === "topic") slugs.add(parts[1]);
  }
  return slugs;
};

const hasStarted = (state: ProgressState, slug: string): boolean => {
  const record = state.courses[slug];
  return Boolean(record && (record.topicsViewed > 0 || record.questions > 0));
};

/**
 * Course order for the rotation.
 *
 *   focus courses first, in the order they were given;
 *   then courses with weak practice accuracy;
 *   then courses not started;
 *   then everything else — each group in path order.
 *
 * The final tie-break is the course's index in the path, so the result is fully
 * determined by the inputs.
 */
const prioritiseCourses = (
  courses: StudyPathCourse[],
  focus: string[],
  state: ProgressState | undefined,
  today: string,
): StudyPathCourse[] => {
  const weak = state ? weakCourses(state, today) : new Set<string>();
  const focusRank = new Map(focus.map((slug, index) => [slug, index]));
  const ranked = courses.map((course, index) => {
    // Without a progress state every course sits in the same group, so the plan
    // simply follows path order.
    let group = 3;
    if (state && weak.has(course.slug)) group = 1;
    else if (state && !hasStarted(state, course.slug)) group = 2;
    return {
      course,
      index,
      focus: focusRank.has(course.slug) ? 0 : 1,
      focusOrder: focusRank.get(course.slug) ?? 0,
      group,
    };
  });
  ranked.sort((a, b) => a.focus - b.focus
    || (a.focus === 0 ? a.focusOrder - b.focusOrder : 0)
    || a.group - b.group
    || a.index - b.index);
  return ranked.map((entry) => entry.course);
};

/**
 * How many topics one session can realistically open, from the course's own
 * estimated minutes per topic. Never zero, never more topics than the course
 * has. Review sessions use the same figure: this module does not assume that
 * revisiting material is faster, because nothing here measures that.
 */
const topicTargetFor = (course: StudyPathCourse, minutes: number): number => {
  if (course.topicCount <= 0) return 0;
  const courseMinutes = estimatedMinutesForCourse(course.slug);
  if (courseMinutes <= 0) return 1;
  const minutesPerTopic = courseMinutes / course.topicCount;
  if (!Number.isFinite(minutesPerTopic) || minutesPerTopic <= 0) return 1;
  return Math.min(Math.max(1, Math.round(minutes / minutesPerTopic)), course.topicCount);
};

const emptyPlan = (pathSlug: string, today: string, targetDate: string, warnings: string[]): StudyPlan => ({
  pathSlug,
  generatedFor: today,
  targetDate,
  sessions: [],
  totalMinutes: 0,
  totalSessions: 0,
  warnings,
});

/**
 * Builds a schedule. Pure and total: every failure becomes a warning and a
 * usable (possibly empty) plan rather than an exception.
 */
export const generatePlan = (input: PlanInput, today: string, state?: ProgressState): StudyPlan => {
  const warnings: string[] = [];
  // Typed as PlanInput, but a caller in plain JavaScript can still hand over
  // anything, so every field is read defensively.
  const raw = input as Partial<PlanInput> | undefined;
  const requestedTarget = typeof raw?.targetDate === "string" ? raw.targetDate : "";
  const pathSlug = typeof raw?.pathSlug === "string" ? raw.pathSlug : "";

  if (!isDayKey(today)) {
    warnings.push("Today's date could not be read, so no sessions could be dated.");
    return emptyPlan(pathSlug, today, requestedTarget, warnings);
  }
  const path = getStudyPath(pathSlug);
  if (!path) {
    warnings.push(`No study path is published under "${pathSlug}", so this plan is empty.`);
    return emptyPlan(pathSlug, today, requestedTarget, warnings);
  }

  const minutesPerDay = clampRange(raw?.minutesPerDay, MIN_MINUTES_PER_DAY, MAX_MINUTES_PER_DAY);
  const daysPerWeek = clampRange(raw?.daysPerWeek, MIN_DAYS_PER_WEEK, MAX_DAYS_PER_WEEK);

  // Horizon. An unusable or non-future target falls back to a fixed number of
  // days so the visitor still gets something they can act on.
  let horizonDays = DEFAULT_HORIZON_DAYS;
  if (!isDayKey(requestedTarget)) {
    warnings.push(`No usable target date was given, so this plan covers the next ${DEFAULT_HORIZON_DAYS} days from ${today}.`);
  } else if (dayDifference(today, requestedTarget) < 1) {
    warnings.push(`The target date ${requestedTarget} is not after ${today}, so this plan covers the next ${DEFAULT_HORIZON_DAYS} days instead.`);
  } else {
    // Inclusive of the target day itself.
    horizonDays = dayDifference(today, requestedTarget) + 1;
    if (horizonDays > MAX_HORIZON_DAYS) {
      warnings.push(`The target date is more than ${MAX_HORIZON_DAYS} days away, so this plan stops after ${MAX_HORIZON_DAYS} days.`);
      horizonDays = MAX_HORIZON_DAYS;
    }
  }

  // Focus courses. Anything outside the path is reported and ignored.
  const focus: string[] = [];
  const seenFocus = new Set<string>();
  const requestedFocus: unknown[] = Array.isArray(raw?.focusCourseSlugs) ? raw.focusCourseSlugs : [];
  for (const slug of requestedFocus) {
    if (typeof slug !== "string" || seenFocus.has(slug)) continue;
    seenFocus.add(slug);
    if (path.courseSlugs.includes(slug)) {
      if (focus.length < MAX_FOCUS_COURSES) focus.push(slug);
    } else {
      warnings.push(`"${slug}" is not a course in this path, so it was ignored.`);
    }
  }

  const pool = focus.length
    ? path.courses.filter((course) => focus.includes(course.slug))
    : path.courses;
  if (pool.length === 0) {
    warnings.push("This path lists no courses, so there is nothing to schedule.");
    return emptyPlan(path.slug, today, requestedTarget, warnings);
  }

  const ordered = prioritiseCourses(pool, focus, state, today);
  const confidence = isConfidence(raw?.confidence) ? raw.confidence : "medium";
  const cadence = REVIEW_CADENCE[confidence];
  const offsets = sessionOffsets(horizonDays, daysPerWeek);

  const sessions: PlanSession[] = [];
  let studyIndex = 0;
  let previous: StudyPathCourse | undefined;
  for (let index = 0; index < offsets.length; index += 1) {
    const isReview = (index + 1) % cadence === 0 && previous !== undefined;
    const course = isReview && previous ? previous : ordered[studyIndex % ordered.length];
    if (!isReview) studyIndex += 1;
    sessions.push({
      date: shiftDays(today, offsets[index]),
      courseSlug: course.slug,
      courseTitle: course.title,
      minutes: minutesPerDay,
      kind: isReview ? "review" : "study",
      topicTarget: topicTargetFor(course, minutesPerDay),
    });
    previous = course;
  }

  const totalMinutes = sessions.reduce((total, session) => total + session.minutes, 0);

  // Courses in the plan that cannot be practised as a quiz at all.
  const scheduled = new Set(sessions.map((session) => session.courseSlug));
  const withoutQuestions = ordered
    .filter((course) => scheduled.has(course.slug) && course.questionCount === 0)
    .map((course) => course.title);
  if (withoutQuestions.length) {
    warnings.push(`${withoutQuestions.join(", ")} ${withoutQuestions.length === 1 ? "has" : "have"} no practice questions in this library, so sessions on ${withoutQuestions.length === 1 ? "it" : "them"} are reading only.`);
  }

  const scheduledEstimate = ordered
    .filter((course) => scheduled.has(course.slug))
    .reduce((total, course) => total + estimatedMinutesForCourse(course.slug), 0);
  if (totalMinutes < scheduledEstimate) {
    warnings.push(`This plan sets aside ${totalMinutes} minutes. The topics it covers are estimated at ${scheduledEstimate} minutes, so it will not reach all of them. More minutes a day, more days a week, or fewer courses would close the gap.`);
  }
  if (sessions.length === 0) {
    warnings.push("No days in this range carry a session, so the plan is empty.");
  }

  return {
    pathSlug: path.slug,
    generatedFor: today,
    targetDate: requestedTarget,
    sessions,
    totalMinutes,
    totalSessions: sessions.length,
    warnings,
  };
};

/**
 * Whole review sessions in a plan. Small, but it keeps the UI from having to
 * know the cadence rule, and it is what the tests assert against.
 */
export const countReviewSessions = (plan: StudyPlan): number =>
  plan.sessions.reduce((total, session) => total + (session.kind === "review" ? 1 : 0), 0);

/** Exported so a form clamps its own fields with exactly the rule the planner uses. */
export const clampPlanMinutes = (value: unknown): number => clampRange(value, MIN_MINUTES_PER_DAY, MAX_MINUTES_PER_DAY);
export const clampPlanDays = (value: unknown): number => clampRange(value, MIN_DAYS_PER_WEEK, MAX_DAYS_PER_WEEK);
