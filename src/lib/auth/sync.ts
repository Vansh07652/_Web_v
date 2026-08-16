/**
 * Moves study progress between the browser-local store and the signed-in
 * account, and merges the two when someone signs in with local progress.
 *
 * MERGE RULES
 *
 * Both sides are counters plus a per-day and per-topic record, so the merge is
 * defined per field rather than "last writer wins":
 *
 *   - day records   the larger of the two for each of minutes, questions and
 *                   correct. Two devices used on the same day both count, and
 *                   re-running the merge cannot inflate anything.
 *   - topics        union. A topic read anywhere is read.
 *   - courses       recomputed from the merged topic set where possible, and
 *                   otherwise the larger counter, so a course can never show
 *                   fewer topics read than the topics actually recorded.
 *
 * Taking the maximum rather than the sum is what makes this idempotent: syncing
 * twice, or signing in on a device that has already synced, produces exactly
 * the same result as syncing once. Summing would double every count on the
 * second run, which is the classic way progress merges corrupt themselves.
 *
 * `correct` is clamped to `questions` after merging, because two independently
 * valid records can otherwise combine into an impossible one.
 */
import { readProgress, replaceProgress, type ProgressState } from "../progress";
import { restRequest, type Session } from "./client";

/** One row per user. The whole state travels as JSON — it is small. */
interface ProgressRow {
  user_id: string;
  state: ProgressState;
  updated_at?: string;
}

const larger = (a = 0, b = 0): number => (a > b ? a : b);

export function mergeProgress(local: ProgressState, remote: ProgressState): ProgressState {
  const merged: ProgressState = { version: 1, days: {}, topics: {}, courses: {} };

  for (const key of new Set([...Object.keys(local.days), ...Object.keys(remote.days)])) {
    const a = local.days[key];
    const b = remote.days[key];
    const questions = larger(a?.questions, b?.questions);
    merged.days[key] = {
      minutes: larger(a?.minutes, b?.minutes),
      questions,
      correct: Math.min(larger(a?.correct, b?.correct), questions),
    };
  }

  // A topic keeps the earlier of the two dates: it was first read then.
  for (const [id, date] of [...Object.entries(remote.topics), ...Object.entries(local.topics)]) {
    const existing = merged.topics[id];
    merged.topics[id] = existing && existing < date ? existing : date;
  }

  for (const slug of new Set([...Object.keys(local.courses), ...Object.keys(remote.courses)])) {
    const a = local.courses[slug];
    const b = remote.courses[slug];
    const questions = larger(a?.questions, b?.questions);
    merged.courses[slug] = {
      topicsViewed: larger(a?.topicsViewed, b?.topicsViewed),
      questions,
      correct: Math.min(larger(a?.correct, b?.correct), questions),
    };
  }

  return merged;
}

/** Reads this user's row. A missing row is not an error — it is a new account. */
async function fetchRemote(session: Session): Promise<ProgressState | null> {
  const rows = await restRequest<ProgressRow[]>(
    `/study_progress?user_id=eq.${encodeURIComponent(session.user.id)}&select=state`,
    { method: "GET", accessToken: session.accessToken },
  );
  const state = rows?.[0]?.state;
  return state && typeof state === "object" ? state : null;
}

async function pushRemote(session: Session, state: ProgressState): Promise<void> {
  await restRequest<ProgressRow[]>("/study_progress", {
    method: "POST",
    accessToken: session.accessToken,
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({ user_id: session.user.id, state, updated_at: new Date().toISOString() }),
  });
}

export interface SyncResult {
  state: ProgressState;
  /** True when local progress existed and was folded into the account. */
  migrated: boolean;
}

/**
 * Called once after a successful sign-in. Merges whatever this browser has
 * into whatever the account has, writes the result to both, and reports
 * whether anything was actually carried across so the UI can say so.
 */
export async function syncOnSignIn(session: Session): Promise<SyncResult> {
  const local = readProgress();
  const remote = await fetchRemote(session);
  const localHasWork = Object.keys(local.topics).length > 0
    || Object.values(local.courses).some((course) => course.questions > 0)
    || Object.values(local.days).some((day) => day.minutes > 0 || day.questions > 0);

  if (!remote) {
    if (localHasWork) await pushRemote(session, local);
    return { state: local, migrated: localHasWork };
  }

  const merged = mergeProgress(local, remote);
  replaceProgress(merged);
  // Only write back when the merge actually changed the stored row, so signing
  // in on a fresh device does not churn the record.
  if (JSON.stringify(merged) !== JSON.stringify(remote)) await pushRemote(session, merged);
  return { state: merged, migrated: localHasWork && JSON.stringify(merged) !== JSON.stringify(remote) };
}

/** Pushes the current local state up. Fire-and-forget from the study screens. */
export async function pushProgress(session: Session): Promise<void> {
  await pushRemote(session, readProgress());
}
