/**
 * Ranking and filtering over the curriculum search index.
 *
 * IN THE BROWSER, ALWAYS
 *
 * Search runs against `content-v2/client/search-index.json` — 1,409 entries of
 * titles, slugs and aliases, already lazily loaded by the search page. There is
 * no search server, no query is sent anywhere, and nothing here builds or ships
 * a second index. What the visitor types stays in the tab they typed it in.
 *
 * PURE, AND DELIBERATELY IGNORANT OF PROGRESS
 *
 * This module imports no data, no storage and no React. In particular it does
 * not import the progress store: "my weak topics" and "review due" are applied
 * from two id sets the caller passes in, computed from the caller's own local
 * progress. That keeps the rules testable with a hand-built fixture, and keeps
 * a search helper from becoming a second reader of the visitor's study history.
 *
 * Difficulty is the same story. It lives in the generated topic-metadata
 * sidecar, which is a large JSON import; rather than pull it in here, the caller
 * passes a resolver function. Only the *type* is imported, and a type import is
 * erased at compile time, so this module stays a leaf of the module graph.
 *
 * RANKING
 *
 * Six tiers, highest first:
 *
 *     100   the query is exactly the topic title
 *      80   the title starts with the query
 *      60   the title contains the query
 *      45   the unit title contains the query
 *      40   the subject title contains the query
 *      30   one of the topic's aliases contains the query
 *
 * A hit found only through a synonym expansion scores one tenth of the tier it
 * would otherwise have earned, which places the whole synonym band (10 down to
 * 3) below the lowest direct tier while preserving the same order inside it. A
 * guess about what somebody meant must never outrank what they typed.
 *
 * Ties break on title, then on id — both byte-wise, not by locale, so the order
 * cannot shift between renders, between browsers, or between test runs.
 */
import { expandQuery } from "./synonyms";
import type { TopicDifficulty } from "./metadata";
import type { CurriculumSearchEntryV2 } from "../../types";

export interface CurriculumSearchFilters {
  subjectSlug?: string;
  hasEli10?: boolean;
  hasCollegeNotes?: boolean;
  hasQuestions?: boolean;
  hasReferences?: boolean;
  difficulty?: TopicDifficulty;
  weakTopicsOnly?: boolean;
  reviewDueOnly?: boolean;
}

export interface RankedSearchEntry {
  entry: CurriculumSearchEntryV2;
  score: number;
  matchedOn: "title" | "unit" | "subject" | "alias" | "synonym";
}

/**
 * Supplied by the caller so this module never imports the metadata sidecar.
 * `getTopicMetadata(id)?.difficulty` is the intended implementation.
 */
export type DifficultyResolver = (topicId: string) => TopicDifficulty | undefined;

const SCORE_EXACT_TITLE = 100;
const SCORE_TITLE_PREFIX = 80;
const SCORE_TITLE_SUBSTRING = 60;
const SCORE_UNIT = 45;
const SCORE_SUBJECT = 40;
const SCORE_ALIAS = 30;
/** Ten was chosen so the best synonym hit (10) still loses to the worst direct one (30). */
const SYNONYM_DIVISOR = 10;

/**
 * Lowercased, with every run of non-alphanumeric characters collapsed to one
 * space. Slugs, punctuation and casing therefore stop mattering: the alias
 * "anatomical-terminology" and the query "Anatomical Terminology" become the
 * same string.
 */
const normalize = (value: string): string =>
  (typeof value === "string" ? value : "").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

interface NormalizedEntry {
  title: string;
  unit: string;
  subject: string;
  aliases: string[];
}

/**
 * Normalising 1,409 entries on every keystroke is wasted work, so each entry's
 * normalised form is memoised against the entry object itself. A WeakMap keeps
 * this a cache and nothing more: it holds no entry alive, is invisible to every
 * caller, and cannot change an answer — the same entry always normalises to the
 * same strings.
 */
const normalizedEntries = new WeakMap<CurriculumSearchEntryV2, NormalizedEntry>();

const normalizedEntry = (entry: CurriculumSearchEntryV2): NormalizedEntry => {
  const cached = normalizedEntries.get(entry);
  if (cached) return cached;
  const computed: NormalizedEntry = {
    title: normalize(entry.topicTitle),
    unit: normalize(entry.unitTitle),
    subject: normalize(entry.subjectTitle),
    aliases: (entry.aliases ?? []).map(normalize).filter(Boolean),
  };
  normalizedEntries.set(entry, computed);
  return computed;
};

interface Hit {
  score: number;
  matchedOn: RankedSearchEntry["matchedOn"];
}

/** The best direct tier this query reaches on this entry, or nothing. */
const scoreDirect = (entry: CurriculumSearchEntryV2, query: string): Hit | undefined => {
  if (!query) return undefined;
  const fields = normalizedEntry(entry);
  if (fields.title === query) return { score: SCORE_EXACT_TITLE, matchedOn: "title" };
  if (fields.title.startsWith(query)) return { score: SCORE_TITLE_PREFIX, matchedOn: "title" };
  if (fields.title.includes(query)) return { score: SCORE_TITLE_SUBSTRING, matchedOn: "title" };
  if (fields.unit.includes(query)) return { score: SCORE_UNIT, matchedOn: "unit" };
  if (fields.subject.includes(query)) return { score: SCORE_SUBJECT, matchedOn: "subject" };
  if (fields.aliases.some((alias) => alias.includes(query))) return { score: SCORE_ALIAS, matchedOn: "alias" };
  return undefined;
};

/**
 * `true` filters; `false` and `undefined` both mean "no constraint". Search
 * filters are checkboxes, and an unchecked box asks for everything rather than
 * for the topics that lack the thing.
 */
const wants = (value: boolean | undefined): boolean => value === true;

const passesEntryFilters = (
  entry: CurriculumSearchEntryV2,
  filters: CurriculumSearchFilters,
  resolveDifficulty: DifficultyResolver | undefined,
): boolean => {
  if (filters.subjectSlug && entry.subjectSlug !== filters.subjectSlug) return false;
  const availability = entry.availability;
  if (wants(filters.hasEli10) && availability?.eli10 !== true) return false;
  if (wants(filters.hasCollegeNotes) && availability?.collegeNotes !== true) return false;
  if (wants(filters.hasQuestions) && !((availability?.exactQuestions ?? 0) > 0)) return false;
  if (wants(filters.hasReferences) && availability?.references !== true) return false;
  if (filters.difficulty) {
    // No resolver means no evidence of difficulty, and a filter with no
    // evidence behind it excludes rather than quietly passes everything.
    if (!resolveDifficulty || resolveDifficulty(entry.id) !== filters.difficulty) return false;
  }
  return true;
};

/** Byte-wise, so the order never depends on the visitor's locale. */
const byText = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0);

const byRank = (a: RankedSearchEntry, b: RankedSearchEntry): number =>
  b.score - a.score
  || byText(a.entry.topicTitle, b.entry.topicTitle)
  || byText(a.entry.id, b.entry.id);

/**
 * Filters, scores and orders the curriculum entries.
 *
 * An empty query is not an error: every entry that passes the filters comes
 * back, scored zero, in title-then-id order. That is what the "browse by
 * filter" case needs.
 *
 * The input array is never mutated and never truncated. Paging is the caller's
 * decision, made where the caller knows how much room it has.
 */
export const rankCurriculumEntries = (
  entries: readonly CurriculumSearchEntryV2[],
  query: string,
  filters: CurriculumSearchFilters = {},
  resolveDifficulty?: DifficultyResolver,
): RankedSearchEntry[] => {
  const source = Array.isArray(entries) ? entries : [];
  const eligible = source.filter((entry) => Boolean(entry) && passesEntryFilters(entry, filters ?? {}, resolveDifficulty));
  const [original, ...expansions] = expandQuery(query);
  if (!original) {
    return eligible.map((entry) => ({ entry, score: 0, matchedOn: "title" as const })).sort(byRank);
  }
  const normalizedOriginal = normalize(original);
  const normalizedExpansions = expansions.map(normalize).filter(Boolean);
  const ranked: RankedSearchEntry[] = [];
  for (const entry of eligible) {
    let best = scoreDirect(entry, normalizedOriginal);
    for (const variant of normalizedExpansions) {
      const hit = scoreDirect(entry, variant);
      if (!hit) continue;
      const banded = hit.score / SYNONYM_DIVISOR;
      if (!best || banded > best.score) best = { score: banded, matchedOn: "synonym" };
    }
    if (best) ranked.push({ entry, score: best.score, matchedOn: best.matchedOn });
  }
  return ranked.sort(byRank);
};

/**
 * The two filters that depend on the visitor's own study history.
 *
 * Both id sets are computed by the caller from local progress — typically from
 * `buildWeakTopics` and the topics whose scheduled review has come round — and
 * are passed in already resolved. Nothing about them is read or written here.
 * An empty set is meaningful: "only my weak topics" with nothing weak yet
 * correctly returns nothing.
 *
 * Order is preserved, the input is not mutated, and nothing is truncated.
 */
export const applyLocalFilters = (
  ranked: readonly RankedSearchEntry[],
  options: {
    weakTopicIds: Set<string>;
    dueTopicIds: Set<string>;
    filters?: CurriculumSearchFilters;
  },
): RankedSearchEntry[] => {
  const filters = options?.filters ?? {};
  const weakOnly = wants(filters.weakTopicsOnly);
  const dueOnly = wants(filters.reviewDueOnly);
  const source = Array.isArray(ranked) ? ranked : [];
  if (!weakOnly && !dueOnly) return [...source];
  const weakTopicIds = options?.weakTopicIds ?? new Set<string>();
  const dueTopicIds = options?.dueTopicIds ?? new Set<string>();
  return source.filter((item) => {
    if (weakOnly && !weakTopicIds.has(item.entry.id)) return false;
    if (dueOnly && !dueTopicIds.has(item.entry.id)) return false;
    return true;
  });
};

const difficultyChip: Record<TopicDifficulty, string> = {
  beginner: "Beginner level",
  intermediate: "Intermediate level",
  advanced: "Advanced level",
};

/**
 * Short chips describing what is currently narrowing the results, in a fixed
 * order so they do not reshuffle as filters are toggled. Only active filters
 * produce a chip. The subject chip carries the slug, because resolving it to a
 * title would mean importing the catalogue; a caller that has the title already
 * is expected to render that instead.
 */
export const describeFilters = (filters: CurriculumSearchFilters): string[] => {
  const active = filters ?? {};
  const chips: string[] = [];
  if (active.subjectSlug) chips.push(`Subject: ${active.subjectSlug}`);
  if (wants(active.hasEli10)) chips.push("Has plain-language explanation");
  if (wants(active.hasCollegeNotes)) chips.push("Has college-level notes");
  if (wants(active.hasQuestions)) chips.push("Has practice questions");
  if (wants(active.hasReferences)) chips.push("Has references");
  if (active.difficulty && difficultyChip[active.difficulty]) chips.push(difficultyChip[active.difficulty]);
  if (wants(active.weakTopicsOnly)) chips.push("My weak topics");
  if (wants(active.reviewDueOnly)) chips.push("Review due");
  return chips;
};
