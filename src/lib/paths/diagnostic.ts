/**
 * The starting-point questionnaire behind /paths.
 *
 * WHAT THIS IS
 *
 * Five questions about what someone is heading into, what they find hard, what
 * is coming up, how much science they have already done and how much time they
 * have. Each answer adds weight to one or more study paths, and the heaviest
 * path is suggested as a place to start.
 *
 * WHAT THIS IS NOT
 *
 * It is not a knowledge test and it is not an assessment. Five questions cannot
 * measure what anyone knows, cannot say whether anyone is ready for anything,
 * and are not scored against a right answer — there are no right answers here,
 * only preferences. Presenting it as a diagnostic *of ability* would be a claim
 * this library cannot support: there is no exam blueprint in this repository, no
 * calibrated item bank and no norm group. The page says all of that in as many
 * words, and the `rationale` this module returns explains the suggestion purely
 * in terms of the answers given.
 *
 * HOW SCORING WORKS
 *
 * One point per path slug named by a chosen option. Paths are then ordered by
 * score, highest first, and **ties break on the order the path is published in
 * `STUDY_PATHS`** — the first-listed path wins. That order is fixed in
 * `study-paths.ts` and puts the curated, finishable paths ahead of the
 * browse-everything category paths, so a tie resolves towards the more specific
 * suggestion. The rule is total: identical answers always give an identical
 * result, whatever order they arrive in.
 *
 * Answers this module does not recognise — an unknown question id, an unknown
 * option id, a second answer to a question already answered, an option pointing
 * at a path that no longer exists — are ignored rather than guessed at. If
 * nothing recognisable is left, `scoreDiagnostic` returns `undefined` instead of
 * recommending something at random.
 *
 * STORAGE
 *
 * Only question ids and option ids, only in this browser, under one key. No free
 * text, no name, no email, nothing that identifies anybody, and nothing sent
 * anywhere. Reads are validated against the questions below, writes are guarded,
 * and a browser that refuses storage falls back to memory for the visit rather
 * than throwing. Same discipline as `lib/progress.ts` and `lib/paths/planner.ts`.
 *
 * The logic here is pure: no DOM, no clock, no network.
 */
import { STUDY_PATHS, isStudyPathSlug, listStudyPaths } from "./study-paths";

export interface DiagnosticQuestion {
  id: string;
  prompt: string;
  /** Optional guidance shown under the legend, in supporting type rather than as part of the question. */
  hint?: string;
  options: Array<{ id: string; label: string; pathSlugs: string[] }>;
}

export interface DiagnosticAnswer {
  questionId: string;
  optionId: string;
}

export interface DiagnosticResult {
  recommendedPathSlug: string;
  /** Up to two paths that scored next, in the same order the scores are in. */
  runnersUp: string[];
  /** Every path that scored at all, highest first, ties on published order. */
  scores: Array<{ pathSlug: string; score: number }>;
  /** One sentence naming the answers that produced the suggestion. */
  rationale: string;
}

/** How many near-misses the result carries. Two is a shortlist; five is a list. */
const MAX_RUNNERS_UP = 2;

/**
 * Paths ranked shortest to longest by their estimated study minutes — the same
 * figure the paths page shows — with ties keeping published order.
 *
 * The time question's options are the only ones computed rather than written
 * down, because "a shorter path" has to mean the paths that really are shorter,
 * and that is a fact about the catalog rather than about this file. A content
 * import that changes what is short changes these weights with it.
 */
const pathsByLength = (): string[] =>
  listStudyPaths()
    .map((path, index) => ({ slug: path.slug, minutes: path.estimatedMinutes, index }))
    .sort((left, right) => (left.minutes - right.minutes) || (left.index - right.index))
    .map((entry) => entry.slug);

const ranked = pathsByLength();
const band = Math.max(1, Math.ceil(ranked.length / 3));
/** Never empty: with too few paths to split three ways, a band falls back to all of them. */
const lengthBand = (from: number, to?: number): string[] => {
  const slice = ranked.slice(from, to);
  return slice.length ? slice : [...ranked];
};
const SHORTEST_PATHS = lengthBand(0, band);
const MIDDLE_PATHS = lengthBand(band, band * 2);
const LONGEST_PATHS = lengthBand(band * 2);

/**
 * The published questionnaire. Five questions, none of them about the person:
 * what they are heading into, what they find hard, what is next, how much
 * science they have done, how much time they have. Nothing here asks for a
 * name, an age, a school or anything else identifying, and the tests check
 * that it stays that way.
 *
 * One rule runs through the weights. The three category paths — pre-health
 * core, healthcare foundations and allied health — hold most of the library
 * between them, so they are weighted only where breadth really is the answer:
 * on the options that say "not decided", "nothing stands out", "no deadline"
 * and "plenty of time", and on the two places where a whole category is the
 * specific answer. Everything else weights a curated path, because those are
 * the ones somebody can finish.
 */
export const DIAGNOSTIC_QUESTIONS: readonly DiagnosticQuestion[] = [
  {
    id: "programme",
    prompt: "Which program are you heading into?",
    options: [
      {
        id: "nursing",
        label: "Nursing or practical nursing",
        pathSlugs: ["nursing-foundations", "clinical-reasoning"],
      },
      {
        id: "allied-health",
        label: "An allied-health role, such as respiratory therapy, sleep technology or nursing assistant work",
        pathSlugs: ["allied-health", "exam-preparation"],
      },
      {
        id: "medicine",
        label: "Medicine or another graduate-entry health degree",
        pathSlugs: ["pre-health-foundations", "chemistry-foundations", "exam-preparation"],
      },
      {
        id: "health-science",
        label: "Another health science subject, such as public health, nutrition or psychology",
        pathSlugs: ["behavioral-and-developmental-sciences", "healthcare-foundations"],
      },
      {
        id: "undecided",
        label: "Not decided yet",
        pathSlugs: ["pre-health-foundations", "healthcare-foundations"],
      },
    ],
  },
  {
    id: "hardest",
    prompt: "Which subject do you find hardest at the moment?",
    options: [
      { id: "anatomy", label: "Anatomy and physiology", pathSlugs: ["anatomy-and-physiology"] },
      { id: "chemistry", label: "Chemistry", pathSlugs: ["chemistry-foundations"] },
      { id: "psychology", label: "Psychology and human development", pathSlugs: ["behavioral-and-developmental-sciences"] },
      { id: "disease", label: "Disease processes and how medicines work", pathSlugs: ["clinical-reasoning"] },
      { id: "clinical-skills", label: "Clinical skills, patient safety and dosage maths", pathSlugs: ["nursing-foundations"] },
      { id: "nothing-yet", label: "Nothing stands out yet", pathSlugs: ["pre-health-foundations", "healthcare-foundations"] },
    ],
  },
  {
    id: "next",
    prompt: "What is coming up next for you?",
    options: [
      { id: "entrance-exam", label: "An entrance or certification exam", pathSlugs: ["exam-preparation"] },
      {
        id: "course-exam",
        label: "An exam in a college course I am taking now",
        pathSlugs: ["anatomy-and-physiology", "chemistry-foundations"],
      },
      {
        id: "starting-programme",
        label: "Starting a nursing or allied-health program",
        pathSlugs: ["nursing-foundations", "allied-health"],
      },
      {
        id: "no-deadline",
        label: "Nothing with a date on it — I am studying ahead",
        pathSlugs: ["pre-health-foundations", "healthcare-foundations"],
      },
    ],
  },
  {
    id: "background",
    prompt: "How much college science have you already done?",
    options: [
      {
        id: "none",
        label: "Little or none so far",
        pathSlugs: ["healthcare-foundations", "anatomy-and-physiology"],
      },
      {
        id: "some",
        label: "A course or two",
        pathSlugs: ["anatomy-and-physiology", "pre-health-foundations"],
      },
      {
        id: "plenty",
        label: "A full year or more",
        pathSlugs: ["chemistry-foundations", "clinical-reasoning"],
      },
    ],
  },
  {
    id: "time",
    prompt: "About how much time do you have for study each week?",
    hint: "Less time points towards the shorter groupings.",
    options: [
      { id: "under-two-hours", label: "Under two hours", pathSlugs: SHORTEST_PATHS },
      { id: "two-to-five-hours", label: "Two to five hours", pathSlugs: MIDDLE_PATHS },
      { id: "over-five-hours", label: "More than five hours", pathSlugs: LONGEST_PATHS },
    ],
  },
];

export const DIAGNOSTIC_STORAGE_KEY = "medmosa.diagnostic.v1";

const questionsById = new Map(DIAGNOSTIC_QUESTIONS.map((question) => [question.id, question]));
/** Published order, which is what a tie breaks on. */
const publishedOrder = new Map(STUDY_PATHS.map((path, index) => [path.slug, index]));

interface ChosenOption {
  questionId: string;
  optionId: string;
  label: string;
  pathSlugs: string[];
}

/**
 * The answers this module recognises, in the order the questions are published
 * rather than the order they arrived, so two callers passing the same answers
 * shuffled get the same result and the same sentence.
 *
 * One answer per question: the first recognisable one wins, and anything after
 * it for that question is dropped. Unknown ids are dropped too, silently — a
 * stored answer from an older build is not an error, it is just no longer
 * meaningful.
 */
const chosenOptions = (answers: unknown): ChosenOption[] => {
  if (!Array.isArray(answers)) return [];
  const chosen = new Map<string, ChosenOption>();
  for (const answer of answers) {
    if (!answer || typeof answer !== "object" || Array.isArray(answer)) continue;
    const { questionId, optionId } = answer as Partial<DiagnosticAnswer>;
    if (typeof questionId !== "string" || typeof optionId !== "string") continue;
    const question = questionsById.get(questionId);
    if (!question || chosen.has(questionId)) continue;
    const option = question.options.find((candidate) => candidate.id === optionId);
    if (!option) continue;
    chosen.set(questionId, {
      questionId,
      optionId,
      label: option.label,
      // Only slugs a published path still uses can score, so a path removed
      // from the library cannot be recommended by an old stored answer.
      pathSlugs: option.pathSlugs.filter((slug) => isStudyPathSlug(slug)),
    });
  }
  const ordered: ChosenOption[] = [];
  for (const question of DIAGNOSTIC_QUESTIONS) {
    const option = chosen.get(question.id);
    if (option) ordered.push(option);
  }
  return ordered;
};

/** The answers, cleaned down to the two ids that are safe to keep. */
const sanitiseAnswers = (answers: unknown): DiagnosticAnswer[] =>
  chosenOptions(answers).map((option) => ({ questionId: option.questionId, optionId: option.optionId }));

const quoted = (labels: string[]): string => labels.map((label) => `"${label}"`).join("; ");

/**
 * Scores a set of answers. Returns `undefined` when nothing usable was given,
 * because a suggestion nobody asked for is a guess.
 */
export const scoreDiagnostic = (answers: DiagnosticAnswer[]): DiagnosticResult | undefined => {
  const chosen = chosenOptions(answers);
  if (!chosen.length) return undefined;

  const totals = new Map<string, number>();
  for (const option of chosen) {
    for (const slug of option.pathSlugs) totals.set(slug, (totals.get(slug) ?? 0) + 1);
  }
  if (!totals.size) return undefined;

  const scores = [...totals]
    .map(([pathSlug, score]) => ({ pathSlug, score }))
    .sort((left, right) =>
      (right.score - left.score)
      || ((publishedOrder.get(left.pathSlug) ?? 0) - (publishedOrder.get(right.pathSlug) ?? 0)));

  const recommendedPathSlug = scores[0].pathSlug;
  const path = STUDY_PATHS.find((candidate) => candidate.slug === recommendedPathSlug);
  const contributing = chosen.filter((option) => option.pathSlugs.includes(recommendedPathSlug));
  const title = path?.title ?? recommendedPathSlug;
  const rationale = contributing.length === chosen.length
    ? `${title} is suggested because every answer you gave points to it: ${quoted(contributing.map((option) => option.label))}.`
    : `${title} is suggested because ${contributing.length} of your ${chosen.length} answers point to it: ${quoted(contributing.map((option) => option.label))}.`;

  return {
    recommendedPathSlug,
    runnersUp: scores.slice(1, 1 + MAX_RUNNERS_UP).map((entry) => entry.pathSlug),
    scores,
    rationale,
  };
};

/* -------------------------------------------------------------------------
   Storage

   Guarded, validating and silent on failure, exactly as the progress store is:
   the browser can refuse storage, and the stored value is user-editable by
   definition, so nothing read back is trusted.
   ------------------------------------------------------------------------- */

/** In-memory fallback used when the browser refuses persistent storage. */
let memoryAnswers: DiagnosticAnswer[] | null = null;
/**
 * Cached against the storage object rather than latched in a boolean, so one
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
    const probe = `${DIAGNOSTIC_STORAGE_KEY}.probe`;
    candidate.setItem(probe, "1");
    candidate.removeItem(probe);
    probePassed = true;
    return candidate;
  } catch {
    probePassed = false;
    return null;
  }
};

/**
 * Stores the answers, and only the two ids each one is made of. Anything
 * unrecognised is dropped before writing, so no free text can reach storage
 * even if a caller invents an answer.
 */
export const saveDiagnostic = (answers: DiagnosticAnswer[]): void => {
  const safe = sanitiseAnswers(answers);
  memoryAnswers = safe;
  const store = storage();
  if (!store) return;
  try {
    store.setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify(safe));
  } catch {
    // Quota exceeded or storage disabled mid-session. The in-memory copy keeps
    // this visit working; mark the store unwritable until a different one shows
    // up.
    probePassed = false;
  }
};

/** Reads and validates the stored answers. Never throws; empty when there are none. */
export const readDiagnostic = (): DiagnosticAnswer[] => {
  const store = storage();
  if (!store) return memoryAnswers ? memoryAnswers.map((answer) => ({ ...answer })) : [];
  try {
    const raw = store.getItem(DIAGNOSTIC_STORAGE_KEY);
    if (!raw) return [];
    return sanitiseAnswers(JSON.parse(raw));
  } catch {
    // Malformed JSON, or a store that threw on read. Either way there is
    // nothing usable, and nothing worth interrupting the page for.
    return [];
  }
};

/** Deletes the stored answers. Offered in the UI, because it is the visitor's data. */
export const clearDiagnostic = (): void => {
  memoryAnswers = null;
  probedStore = null;
  probePassed = false;
  const store = storage();
  try {
    store?.removeItem(DIAGNOSTIC_STORAGE_KEY);
  } catch {
    /* nothing to do */
  }
};
