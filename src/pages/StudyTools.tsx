import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import { Breadcrumbs, CheckIcon, EmptyState, ErrorState, Link, PageHeader, TagBadge, TrustNote } from "../components/ui";
import {
  curriculumPracticeHref,
  curriculumSubjectHref,
  curriculumTopicHref,
  loadCurriculumCatalog,
  loadCurriculumSubject,
} from "../lib/content/curriculum-v2";
import { describeContentStatus, getTopicMetadata, listTopicMetadataIds, type TopicContentStatus, type TopicProgram } from "../lib/content/metadata";
import { masteryStatusDescription, masteryStatusLabel, type TopicMastery } from "../lib/review/mastery";
import { REVIEW_INTERVALS, buildReviewQueue, buildWeakTopics, summariseReview, type ReviewQueueItem } from "../lib/review/scheduler";
import { clearReviewHistory, dayKey, readProgress, type ProgressState } from "../lib/progress";
import { getStudyPath, listStudyPaths, studyPathHref, type StudyPathDetail } from "../lib/paths/study-paths";
import {
  MAX_DAYS_PER_WEEK,
  MAX_MINUTES_PER_DAY,
  MIN_DAYS_PER_WEEK,
  MIN_MINUTES_PER_DAY,
  PLAN_DISCLAIMER,
  clampPlanDays,
  clampPlanMinutes,
  clearPlan,
  generatePlan,
  readPlanInput,
  savePlanInput,
  type PlanInput,
  type StudyPlan,
} from "../lib/paths/planner";
import type { Navigate } from "../lib/navigation";

/* -------------------------------------------------------------------------
   Shared helpers

   Three pages share one file because they share one vocabulary: a course, a
   topic id, a day key and a count of things that exist. Every number rendered
   below is read from the generated catalog or the browser's own progress store;
   nothing here estimates, rounds up, or fills a gap with a guess.
   ------------------------------------------------------------------------- */

const catalog = loadCurriculumCatalog();
const courseTitles = new Map(catalog.subjects.map((subject) => [subject.slug, subject.title]));

const CATEGORY_LABELS: Record<string, string> = {
  "pre-health-core": "Pre-health core science",
  "healthcare-foundations": "Healthcare foundations",
  "allied-health": "Allied health",
  pathophysiology: "Pathophysiology",
};

const PROGRAM_ORDER: readonly TopicProgram[] = ["pre-nursing", "nursing", "premed", "healthcare"];
const PROGRAM_LABELS: Record<TopicProgram, string> = {
  "pre-nursing": "Pre-nursing",
  nursing: "Nursing",
  premed: "Pre-med",
  healthcare: "Healthcare",
};

const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Sentence-cased from a slug. Used only where the corpus carries no title. */
const humanise = (slug: string): string => {
  const words = slug.replace(/[-_]+/g, " ").trim();
  return words ? words.charAt(0).toLocaleUpperCase() + words.slice(1) : slug;
};

const formatCount = (value: number): string => value.toLocaleString();

const plural = (value: number, singular: string, many?: string): string =>
  value === 1 ? singular : many ?? `${singular}s`;

const formatMinutes = (minutes: number): string => {
  if (!Number.isFinite(minutes) || minutes <= 0) return "Not estimated";
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest} min`;
  if (!rest) return `${formatCount(hours)} hr`;
  return `${formatCount(hours)} hr ${rest} min`;
};

/**
 * A fixed weekday plus the ISO day key. Deliberately not locale-formatted: the
 * key is what the planner stores, so showing it keeps the table and the storage
 * readable as the same thing.
 */
const formatDay = (key: string): string => {
  const parsed = new Date(`${key}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return key;
  return `${WEEKDAY_NAMES[parsed.getUTCDay()]} ${key}`;
};

interface TopicReference { subjectSlug: string; unitSlug: string; topicSlug: string }

/** `topic:<subjectSlug>:<unitSlug>:<topicSlug>`; anything else is refused. */
const parseTopicId = (topicId: string): TopicReference | undefined => {
  const parts = topicId.split(":");
  if (parts.length !== 4 || parts[0] !== "topic") return undefined;
  return { subjectSlug: parts[1], unitSlug: parts[2], topicSlug: parts[3] };
};

const percentOf = (count: number, total: number): number =>
  total > 0 ? Math.round((count / total) * 100) : 0;

/* -------------------------------------------------------------------------
   Coverage derivation

   Per-course coverage is the catalog's own `statistics` block, joined to the
   metadata sidecar for the programmes a course serves and for any topic that is
   held back from study. Built once, on first ask, because it walks every topic
   id in the sidecar.
   ------------------------------------------------------------------------- */

interface HeldTopicGroup { status: TopicContentStatus; topics: number }

interface CourseCoverage {
  slug: string;
  title: string;
  category: string;
  href: string;
  practiceHref: string;
  topicCount: number;
  questionCount: number;
  collegeNoteCount: number;
  eli10Count: number;
  referencedCount: number;
  citationReviewQuestionCount: number;
  programs: TopicProgram[];
  heldTopics: HeldTopicGroup[];
}

let coverageCache: CourseCoverage[] | null = null;

const listCourseCoverage = (): CourseCoverage[] => {
  if (coverageCache) return coverageCache;
  const programsBySlug = new Map<string, Set<TopicProgram>>();
  const heldBySlug = new Map<string, Map<TopicContentStatus, number>>();
  for (const topicId of listTopicMetadataIds()) {
    const reference = parseTopicId(topicId);
    const metadata = reference ? getTopicMetadata(topicId) : undefined;
    if (!reference || !metadata) continue;
    let programs = programsBySlug.get(reference.subjectSlug);
    if (!programs) {
      programs = new Set<TopicProgram>();
      programsBySlug.set(reference.subjectSlug, programs);
    }
    for (const program of metadata.programs) programs.add(program);
    // `publish` is true only for source-grounded topics, so everything else is
    // material the library is holding back and should say so.
    if (metadata.publish) continue;
    let held = heldBySlug.get(reference.subjectSlug);
    if (!held) {
      held = new Map<TopicContentStatus, number>();
      heldBySlug.set(reference.subjectSlug, held);
    }
    held.set(metadata.contentStatus, (held.get(metadata.contentStatus) ?? 0) + 1);
  }

  coverageCache = catalog.subjects.map((subject) => {
    const statistics = subject.statistics;
    const programs = programsBySlug.get(subject.slug);
    const held = heldBySlug.get(subject.slug);
    return {
      slug: subject.slug,
      title: subject.title,
      category: subject.category ?? "",
      href: curriculumSubjectHref(subject.slug),
      practiceHref: curriculumPracticeHref(subject.slug),
      topicCount: statistics.topicCount,
      questionCount: statistics.uniqueQuestionCount,
      collegeNoteCount: statistics.teachingTopicCount ?? 0,
      eli10Count: statistics.eli10TopicCount ?? 0,
      referencedCount: statistics.referencedTopicCount ?? 0,
      citationReviewQuestionCount: statistics.citationReviewRequiredCount,
      programs: PROGRAM_ORDER.filter((program) => programs?.has(program)),
      heldTopics: held
        ? [...held.entries()].map(([status, topics]) => ({ status, topics })).sort((a, b) => b.topics - a.topics)
        : [],
    };
  });
  return coverageCache;
};

/* -------------------------------------------------------------------------
   Coverage page
   ------------------------------------------------------------------------- */

type CoverageToggle = "collegeNotes" | "eli10" | "references" | "questions" | "citationReview";

const COVERAGE_TOGGLES: ReadonlyArray<{ id: CoverageToggle; label: string }> = [
  { id: "collegeNotes", label: "Has college-level notes" },
  { id: "eli10", label: "Has plain-language explanations" },
  { id: "references", label: "Has topics with references" },
  { id: "questions", label: "Has practice questions" },
  { id: "citationReview", label: "Has questions flagged for citation review" },
];

const NO_TOGGLES: Record<CoverageToggle, boolean> = {
  collegeNotes: false,
  eli10: false,
  references: false,
  questions: false,
  citationReview: false,
};

/**
 * One `n of total` line.
 *
 * `tone` matters: on a coverage row a full bar is the good outcome and earns a
 * tick, but on a flag row — questions awaiting citation review — a full bar is
 * the worst outcome, so it never gets a tick and its wording says "flagged".
 * A tick beside "300 of 300 questions need citation review" would read as an
 * achievement, which is the opposite of the truth.
 */
function CoverageRow({ label, count, total, unit, zeroNote, tone = "coverage" }: {
  label: string;
  count: number;
  total: number;
  unit: string;
  zeroNote: string;
  tone?: "coverage" | "flag";
}) {
  const complete = total > 0 && count >= total;
  const singular = unit.replace(/s$/, "");
  const flag = tone === "flag";
  const note = total === 0
    ? `This course has no ${unit} in the catalog.`
    : count === 0
      ? zeroNote
      : complete
        ? flag ? `Every ${singular} in this course is flagged.` : `Every ${singular} in this course.`
        : `${percentOf(count, total)}% of this course's ${unit}${flag ? " are flagged" : ""}.`;
  return (
    <div className="coverage-row">
      <dt>{label}</dt>
      <dd>
        <span className="coverage-figure">
          {complete && !flag && <span className="study-tick" aria-hidden="true"><CheckIcon /></span>}
          <strong>{formatCount(count)} of {formatCount(total)}</strong> {unit}
        </span>
        <span className="coverage-track" aria-hidden="true">
          <span
            className={flag ? "coverage-fill coverage-fill--flag" : "coverage-fill"}
            style={{ width: `${percentOf(count, total)}%` }}
          />
        </span>
        <span className="coverage-note">{note}</span>
      </dd>
    </div>
  );
}

function CoverageCard({ course, navigate }: { course: CourseCoverage; navigate: Navigate }) {
  const practiceFirst = course.collegeNoteCount === 0 && course.questionCount > 0;
  return (
    <article className="coverage-card">
      <h3><Link href={course.href} navigate={navigate}>{course.title}</Link></h3>
      <p className="coverage-badges">
        <TagBadge>{CATEGORY_LABELS[course.category] ?? humanise(course.category || "Uncategorised")}</TagBadge>
        {course.programs.map((program) => <TagBadge key={program}>{PROGRAM_LABELS[program]}</TagBadge>)}
      </p>
      <dl className="coverage-metrics">
        <div className="coverage-row coverage-row--plain">
          <dt>Topics</dt>
          <dd><strong>{formatCount(course.topicCount)}</strong></dd>
        </div>
        <div className="coverage-row coverage-row--plain">
          <dt>Practice questions</dt>
          <dd><strong>{formatCount(course.questionCount)}</strong></dd>
        </div>
        <CoverageRow
          label="College-level notes"
          count={course.collegeNoteCount}
          total={course.topicCount}
          unit="topics"
          zeroNote="Standalone college-level notes are not yet available for this course. It is practice-first: what exists here is the question bank and the plain-language explanations, not written-out lecture notes."
        />
        <CoverageRow
          label="Plain-language explanations"
          count={course.eli10Count}
          total={course.topicCount}
          unit="topics"
          zeroNote="No plain-language explanation has been written for any topic in this course yet."
        />
        <CoverageRow
          label="Topics with references"
          count={course.referencedCount}
          total={course.topicCount}
          unit="topics"
          zeroNote="No topic in this course carries a cited reference yet."
        />
        <CoverageRow
          label="Questions needing citation review"
          count={course.citationReviewQuestionCount}
          total={course.questionCount}
          unit="questions"
          tone="flag"
          zeroNote="No question in this course is currently flagged for citation review."
        />
      </dl>
      {practiceFirst && (
        <p className="coverage-flag">
          <strong>Practice-first course.</strong> Study it by working the question bank and reading the plain-language
          explanations; there is no separate set of college notes to read first.
        </p>
      )}
      {course.questionCount === 0 && (
        <p className="coverage-flag">
          <strong>Reading only.</strong> This course has no practice questions in this library, so nothing in it can be
          answered as a quiz yet.
        </p>
      )}
      {course.heldTopics.map((group) => (
        <p className="coverage-flag" key={group.status}>
          <strong>{group.topics} {plural(group.topics, "topic")} held back — {humanise(group.status)}.</strong>{" "}
          {describeContentStatus(group.status)}
        </p>
      ))}
      <p className="coverage-links">
        <Link href={course.href} navigate={navigate}>Open course</Link>
        {course.questionCount > 0 && <Link href={course.practiceHref} navigate={navigate}>Practice questions</Link>}
      </p>
    </article>
  );
}

export function CoveragePage({ navigate }: { navigate: Navigate }) {
  const courses = useMemo(() => listCourseCoverage(), []);
  const [course, setCourse] = useState("");
  const [program, setProgram] = useState("");
  const [toggles, setToggles] = useState<Record<CoverageToggle, boolean>>(NO_TOGGLES);
  const aboutId = useId();
  const filtersId = useId();
  const resultsId = useId();
  const courseFieldId = useId();
  const programFieldId = useId();

  const programOptions = useMemo(
    () => PROGRAM_ORDER.filter((option) => courses.some((entry) => entry.programs.includes(option))),
    [courses],
  );

  const visible = useMemo(() => courses.filter((entry) => {
    if (course && entry.slug !== course) return false;
    if (program && !entry.programs.includes(program as TopicProgram)) return false;
    if (toggles.collegeNotes && entry.collegeNoteCount === 0) return false;
    if (toggles.eli10 && entry.eli10Count === 0) return false;
    if (toggles.references && entry.referencedCount === 0) return false;
    if (toggles.questions && entry.questionCount === 0) return false;
    if (toggles.citationReview && entry.citationReviewQuestionCount === 0) return false;
    return true;
  }), [course, courses, program, toggles]);

  const filtered = Boolean(course || program || Object.values(toggles).some(Boolean));
  const clearFilters = () => {
    setCourse("");
    setProgram("");
    setToggles(NO_TOGGLES);
  };

  return (
    <div className="study-tools coverage-page">
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Content coverage" }]} />
      <PageHeader
        eyebrow="Content coverage"
        title="What this library actually contains"
        description={`Every one of the ${catalog.subjects.length} courses, with counts of the material that exists in each. No course is summarized more favorably than its numbers allow.`}
      />

      <section className="study-panel" aria-labelledby={aboutId}>
        <h2 id={aboutId}>What this page measures</h2>
        <p>
          Coverage counts material that exists. For each course it reports how many topics carry college-level notes,
          how many carry a plain-language explanation, how many cite at least one reference, how many practice
          questions the course has, and how many of those questions are flagged for citation review. Each figure is
          shown as a count out of the total it is drawn from, so a small number cannot be mistaken for a large one.
        </p>
        <p>
          <strong>This is a structural measure, not a statement of clinical review.</strong> A topic counted here has
          been written and sourced; it has not been checked by a credentialed clinician. Nothing on this page is a
          quality score, an accuracy claim, or evidence that material is safe to act on.
        </p>
        <p>
          Every number comes from the generated catalog and the metadata sidecar built from this repository. Where a
          course has none of something, this page says so in words rather than showing a bare zero.
        </p>
        <TrustNote />
      </section>

      <section className="study-filters" aria-labelledby={filtersId}>
        <h2 id={filtersId}>Filter courses</h2>
        <div className="study-filter-grid">
          <fieldset className="study-fieldset">
            <legend>Course</legend>
            <label className="study-field" htmlFor={courseFieldId}>Show one course</label>
            <select id={courseFieldId} value={course} onChange={(event) => setCourse(event.target.value)}>
              <option value="">All {catalog.subjects.length} courses</option>
              {courses.map((entry) => <option key={entry.slug} value={entry.slug}>{entry.title}</option>)}
            </select>
          </fieldset>

          <fieldset className="study-fieldset">
            <legend>Program</legend>
            <label className="study-field" htmlFor={programFieldId}>Show courses mapped to</label>
            <select id={programFieldId} value={program} onChange={(event) => setProgram(event.target.value)}>
              <option value="">All programs</option>
              {programOptions.map((option) => <option key={option} value={option}>{PROGRAM_LABELS[option]}</option>)}
            </select>
            <p className="study-hint">
              Program is mapped from a course's category, not judged per topic.
            </p>
          </fieldset>

          <fieldset className="study-fieldset study-fieldset--wide">
            <legend>What a course must include</legend>
            <div className="study-choice-grid">
              {COVERAGE_TOGGLES.map((toggle) => (
                <label className="study-choice" key={toggle.id}>
                  <input
                    type="checkbox"
                    checked={toggles[toggle.id]}
                    onChange={(event) => setToggles({ ...toggles, [toggle.id]: event.target.checked })}
                  />
                  <span>{toggle.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="study-actions">
          <button type="button" className="button button-secondary" onClick={clearFilters} disabled={!filtered}>
            Clear all filters
          </button>
        </div>
      </section>

      <section className="study-results" aria-labelledby={resultsId}>
        <h2 id={resultsId}>Course coverage</h2>
        <p className="study-live" aria-live="polite">
          Showing {formatCount(visible.length)} of {formatCount(courses.length)} {plural(courses.length, "course")}.
          {filtered ? "" : " No filters applied."}
        </p>
        {visible.length === 0 ? (
          <EmptyState
            title="No course matches those filters"
            action={<button type="button" className="button" onClick={clearFilters}>Clear all filters</button>}
          >
            Every filter is applied at once, so asking for several things a single course does not have will return
            nothing. Remove one and the list comes back.
          </EmptyState>
        ) : (
          <div className="coverage-grid">
            {visible.map((entry) => <CoverageCard key={entry.slug} course={entry} navigate={navigate} />)}
          </div>
        )}
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Review page
   ------------------------------------------------------------------------- */

interface TopicTitleEntry { title: string; unitSlug: string }

/** Titles already loaded, kept across visits so a second look costs nothing. */
const topicTitleCache = new Map<string, Map<string, TopicTitleEntry>>();

/**
 * Resolves real topic titles for the courses in play. Falls back silently to a
 * slug-derived title, so a failed bundle load degrades the wording and nothing
 * else.
 */
const useTopicTitles = (subjectSlugs: string[]): Map<string, TopicTitleEntry> => {
  const key = subjectSlugs.join(",");
  const [titles, setTitles] = useState<Map<string, TopicTitleEntry>>(() => new Map());
  useEffect(() => {
    let active = true;
    const slugs = key ? key.split(",") : [];
    if (!slugs.length) {
      setTitles(new Map());
      return () => { active = false; };
    }
    void Promise.all(slugs.map(async (slug) => {
      const cached = topicTitleCache.get(slug);
      if (cached) return cached;
      const entries = new Map<string, TopicTitleEntry>();
      const request = loadCurriculumSubject(slug);
      const subject = request ? await request : undefined;
      for (const unit of subject?.units ?? []) {
        for (const topic of unit.topics) entries.set(topic.id, { title: topic.title, unitSlug: unit.slug });
      }
      topicTitleCache.set(slug, entries);
      return entries;
    })).then((maps) => {
      if (!active) return;
      const merged = new Map<string, TopicTitleEntry>();
      for (const map of maps) for (const [id, entry] of map) merged.set(id, entry);
      setTitles(merged);
    }).catch(() => {
      // Slug-derived titles are already on screen; there is nothing to recover.
    });
    return () => { active = false; };
  }, [key]);
  return titles;
};

const SESSION_SIZES: readonly number[] = [5, 10, 20];

function WeakTopicItem({ mastery, titles, navigate }: {
  mastery: TopicMastery;
  titles: Map<string, TopicTitleEntry>;
  navigate: Navigate;
}) {
  const reference = parseTopicId(mastery.topicId);
  const resolved = titles.get(mastery.topicId);
  const title = resolved?.title ?? (reference ? humanise(reference.topicSlug) : mastery.topicId);
  const courseTitle = reference ? courseTitles.get(reference.subjectSlug) : undefined;
  const href = reference
    ? curriculumTopicHref(reference.subjectSlug, resolved?.unitSlug ?? reference.unitSlug, reference.topicSlug)
    : undefined;
  return (
    <li className="review-topic">
      <p className="review-topic-title">
        {href ? <Link href={href} navigate={navigate}>{title}</Link> : title}
        {courseTitle && <span className="review-topic-course"> · {courseTitle}</span>}
      </p>
      <p className="review-topic-status">
        <span className="study-status-label">{masteryStatusLabel(mastery.status)}</span>
        <span className="review-topic-figures">
          {mastery.questionsAttempted > 0
            ? `${formatCount(mastery.questionsCorrect)} of ${formatCount(mastery.questionsAttempted)} practice ${plural(mastery.questionsAttempted, "question")} answered correctly here`
            : "No practice questions answered here yet"}
        </span>
      </p>
      <p className="review-topic-description">{masteryStatusDescription(mastery.status)}</p>
      {reference && courseTitles.has(reference.subjectSlug) && (
        <p className="review-topic-links">
          <Link href={curriculumPracticeHref(reference.subjectSlug)} navigate={navigate}>
            Practice {courseTitle ?? humanise(reference.subjectSlug)}
          </Link>
        </p>
      )}
    </li>
  );
}

export function ReviewPage({ navigate }: { navigate: Navigate }) {
  const [today] = useState(() => dayKey());
  // Read from the guarded local store as this page mounts. `readProgress` never
  // throws and returns an empty state when storage is blocked or refused, so
  // there is no async gap and nothing to fall back to.
  const [state, setState] = useState<ProgressState>(() => readProgress());
  const [sessionSize, setSessionSize] = useState(10);
  const [session, setSession] = useState<{ questions: ReviewQueueItem[]; topics: TopicMastery[] }>();
  const [confirming, setConfirming] = useState(false);
  const [justCleared, setJustCleared] = useState(false);
  const [message, setMessage] = useState("");
  const confirmRef = useRef<HTMLDivElement>(null);
  const clearedRef = useRef<HTMLParagraphElement>(null);
  const clearRef = useRef<HTMLButtonElement>(null);
  const sessionRef = useRef<HTMLDivElement>(null);
  const sizeGroupName = useId();
  const sizeHintId = useId();
  const summaryId = useId();
  const sessionId = useId();
  const topicsId = useId();
  const manageId = useId();
  const confirmId = useId();

  // Focus follows the step that replaced the control the visitor just used.
  useEffect(() => { if (confirming) confirmRef.current?.focus(); }, [confirming]);
  useEffect(() => { if (justCleared) clearedRef.current?.focus(); }, [justCleared]);

  const summary = useMemo(() => summariseReview(state, today), [state, today]);
  const weakTopics = useMemo(() => buildWeakTopics(state, today), [state, today]);
  const startedCourses = useMemo(() => {
    return Object.entries(state.courses)
      .filter(([slug, record]) => courseTitles.has(slug) && (record.questions > 0 || record.topicsViewed > 0))
      .sort((a, b) => b[1].questions - a[1].questions || (a[0] < b[0] ? -1 : 1))
      .map(([slug, record]) => ({ slug, questions: record.questions }));
  }, [state]);

  const sessionTopics = session?.topics ?? [];
  const subjectSlugs = useMemo(() => {
    const slugs = new Set<string>();
    for (const mastery of [...weakTopics, ...sessionTopics]) {
      const reference = parseTopicId(mastery.topicId);
      if (reference && courseTitles.has(reference.subjectSlug)) slugs.add(reference.subjectSlug);
    }
    return [...slugs].sort();
  }, [sessionTopics, weakTopics]);
  const titles = useTopicTitles(subjectSlugs);

  const startReview = () => {
    const questions = buildReviewQueue(state, today, sessionSize);
    const topics = buildWeakTopics(state, today, sessionSize);
    setSession({ questions, topics });
    setMessage(`Session ready: ${formatCount(questions.length)} due ${plural(questions.length, "question")} and ${formatCount(topics.length)} ${plural(topics.length, "topic")} to revisit.`);
    // The session appears below the button that built it, so take focus there.
    window.requestAnimationFrame(() => sessionRef.current?.focus());
  };

  const confirmClear = () => {
    clearReviewHistory();
    setState(readProgress());
    setSession(undefined);
    setConfirming(false);
    setJustCleared(true);
    setMessage("Review history cleared. Your streak, your daily minutes and your total questions answered are unchanged.");
  };

  const cancelClear = () => {
    setConfirming(false);
    // The control that opened the step is coming back, so send focus to it.
    window.requestAnimationFrame(() => clearRef.current?.focus());
  };

  const nothingToReview = summary.questionsDue === 0 && weakTopics.length === 0;
  const hasHistory = Object.keys(state.questions ?? {}).length > 0 || Object.keys(state.mastery ?? {}).length > 0;

  return (
    <div className="study-tools review-page">
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Review" }]} />
      <PageHeader
        eyebrow="Review"
        title="Your review queue"
        description="Worked out in this browser from what you have practiced. It schedules revision; it does not assess you."
      />

      <p className="study-live" aria-live="polite">{message}</p>

      <section className="study-panel" aria-labelledby={summaryId}>
        <h2 id={summaryId}>Where you are today</h2>
        <dl className="review-stats">
          <div>
            <dt>Questions due</dt>
            <dd>{formatCount(summary.questionsDue)}</dd>
          </div>
          <div>
            <dt>Topics to revisit</dt>
            <dd>{formatCount(summary.topicsToRevisit)}</dd>
          </div>
          <div>
            <dt>Estimated session</dt>
            <dd>{summary.estimatedMinutes > 0 ? `${formatCount(summary.estimatedMinutes)} min` : "0 min"}</dd>
          </div>
        </dl>
        <p className="study-hint">
          The estimate allows 45 seconds a question — enough to read a stem, answer, and glance at the explanation. It
          is an assumption, not a measurement of how you work.
        </p>
      </section>

      {nothingToReview ? (
        <EmptyState
          title="Nothing is scheduled yet"
          action={(
            <>
              <Link href="/learn" navigate={navigate} className="button">Browse the courses</Link>
              <Link href="/paths" navigate={navigate} className="button button-secondary">See study paths</Link>
            </>
          )}
        >
          Review fills up as you practice. Once you have answered some questions, the ones you got wrong come back
          tomorrow, the ones you got right come back later and later, and any topic you are still building accuracy in
          is listed here to revisit. Nothing appears on this page until you have practiced something, and nothing here
          is ever shared.
        </EmptyState>
      ) : (
        <section className="study-panel" aria-labelledby={sessionId}>
          <h2 id={sessionId}>Start a review session</h2>
          <fieldset className="study-fieldset">
            <legend>Session size</legend>
            <p className="study-hint" id={sizeHintId}>How many due questions to put in one sitting.</p>
            <div className="study-choice-grid">
              {SESSION_SIZES.map((size) => (
                <label className="study-choice" key={size}>
                  <input
                    type="radio"
                    name={sizeGroupName}
                    value={size}
                    checked={sessionSize === size}
                    aria-describedby={sizeHintId}
                    onChange={() => setSessionSize(size)}
                  />
                  <span>{size} questions</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="study-actions">
            <button type="button" className="button" onClick={startReview}>Start review</button>
          </div>

          {session && (
            <div className="review-session" ref={sessionRef} tabIndex={-1}>
              <h3>This session</h3>
              <p>
                {formatCount(session.questions.length)} of {formatCount(summary.questionsDue)} due{" "}
                {plural(summary.questionsDue, "question")} and {formatCount(session.topics.length)}{" "}
                {plural(session.topics.length, "topic")} to revisit, hardest first: most missed, then most overdue.
              </p>
              {session.questions.length > 0 && (
                <p className="study-hint">
                  {formatCount(session.questions.filter((item) => item.misses > 0).length)} of these you have missed
                  before, and {formatCount(session.questions.filter((item) => item.overdueDays > 0).length)}{" "}
                  {plural(session.questions.filter((item) => item.overdueDays > 0).length, "is", "are")} past the day
                  they were due.
                </p>
              )}
              {session.topics.length > 0 ? (
                <ol className="review-topic-list">
                  {session.topics.map((mastery) => (
                    <WeakTopicItem key={mastery.topicId} mastery={mastery} titles={titles} navigate={navigate} />
                  ))}
                </ol>
              ) : (
                <p>
                  No individual topic is flagged, so work straight from a course's practice set — the questions due
                  come back as you go.
                </p>
              )}
              {startedCourses.length > 0 && (
                <div className="review-course-links">
                  <h4>Where to practice</h4>
                  <ul>
                    {startedCourses.map((entry) => (
                      <li key={entry.slug}>
                        <Link href={curriculumPracticeHref(entry.slug)} navigate={navigate}>
                          {courseTitles.get(entry.slug)}
                        </Link>
                        <span className="review-course-count">
                          {" "}· {formatCount(entry.questions)} {plural(entry.questions, "question")} answered here
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      )}

      <details className="study-disclosure">
        <summary>Why these are here</summary>
        <div className="study-disclosure-body">
          <p>Three things put an item on this page, and nothing else does:</p>
          <ul>
            <li>a practice question you answered incorrectly, which is scheduled to come back the next day;</li>
            <li>a topic you are practising whose accuracy on this site is still building;</li>
            <li>material you have not revisited since its scheduled date came round.</li>
          </ul>
          <p>
            Spacing runs on a fixed ladder of {REVIEW_INTERVALS.join(", ")} days. A correct answer moves an item up one
            rung; a wrong answer sends it back to the first. An item you have ever missed is capped at the middle rung,
            so it keeps coming back at a medium interval rather than disappearing for two months.
          </p>
          <p>
            All of this is worked out in this browser from your own activity. Your progress stays on this device unless
            you choose optional account sync, and none of it is a measure of clinical competence or a prediction of any
            exam result.
          </p>
        </div>
      </details>

      {weakTopics.length > 0 && (
        <section className="study-panel" aria-labelledby={topicsId}>
          <h2 id={topicsId}>Topics to revisit</h2>
          <p>
            {formatCount(weakTopics.length)} {plural(weakTopics.length, "topic")}, weakest practice accuracy first.
            Each status describes your answers on this site only.
          </p>
          <ol className="review-topic-list">
            {weakTopics.map((mastery) => (
              <WeakTopicItem key={mastery.topicId} mastery={mastery} titles={titles} navigate={navigate} />
            ))}
          </ol>
        </section>
      )}

      <section className="study-panel" aria-labelledby={manageId}>
        <h2 id={manageId}>Manage your review history</h2>
        {confirming ? (
          <div className="study-confirm" ref={confirmRef} tabIndex={-1} role="group" aria-labelledby={confirmId}>
            <p id={confirmId}><strong>Clear your review history?</strong></p>
            <p>
              This removes only the review schedule and the per-topic practice counters it is built from. Your
              streak, your daily minutes and your total questions answered are all kept. It cannot be undone.
            </p>
            <div className="study-actions">
              <button type="button" className="button" onClick={confirmClear}>Yes, clear review history</button>
              <button type="button" className="button button-secondary" onClick={cancelClear}>
                Keep my review history
              </button>
            </div>
          </div>
        ) : hasHistory ? (
          <>
            <p>
              Clearing forgets what is due and the per-topic counters behind it. It keeps your streak and your
              totals, so restarting revision does not cost you your record.
            </p>
            <div className="study-actions">
              <button type="button" className="button button-secondary" ref={clearRef} onClick={() => setConfirming(true)}>
                Clear review history
              </button>
            </div>
          </>
        ) : (
          // Focus lands here after clearing, so it is never dropped to the top
          // of the document when the control that had it is removed.
          <p className="study-cleared" ref={clearedRef} tabIndex={-1}>
            {justCleared
              ? "Review history cleared. Your streak, your daily minutes and your total questions answered are unchanged."
              : "There is no review history stored in this browser yet. Once you have practiced, a control to clear it appears here."}
          </p>
        )}
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Study paths
   ------------------------------------------------------------------------- */

function PathStats({ path }: { path: StudyPathDetail }) {
  return (
    <dl className="path-stats">
      <div><dt>Courses</dt><dd>{formatCount(path.courses.length)}</dd></div>
      <div><dt>Topics</dt><dd>{formatCount(path.topicCount)}</dd></div>
      <div><dt>Practice questions</dt><dd>{formatCount(path.questionCount)}</dd></div>
      <div><dt>Estimated study time</dt><dd>{formatMinutes(path.estimatedMinutes)}</dd></div>
    </dl>
  );
}

export function PathsPage({ navigate }: { navigate: Navigate }) {
  const paths = useMemo(() => listStudyPaths(), []);
  const aboutId = useId();
  const listId = useId();

  return (
    <div className="study-tools paths-page">
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Study paths" }]} />
      <PageHeader
        eyebrow="Study paths"
        title="Groupings of the courses in this library"
        description="A path collects courses that already exist here. It is not a syllabus, an exam blueprint or a prerequisite sequence."
      />

      <section className="study-panel" aria-labelledby={aboutId}>
        <h2 id={aboutId}>What a path is</h2>
        <p>
          Each path is built from three facts the catalog genuinely records: a course's category, its status and its
          own statistics. There is no exam blueprint anywhere in this project, so no path claims alignment to one.
        </p>
        <p>
          MedMosa is not affiliated with, endorsed by or accredited by any testing organization, licensing body or
          school. Every path lists its own limitations in full on its page — read them before planning around it.
        </p>
      </section>

      <section className="study-results" aria-labelledby={listId}>
        <h2 id={listId}>All {paths.length} paths</h2>
        <div className="path-grid">
          {paths.map((path) => (
            <article className="path-card" key={path.slug}>
              <h3><Link href={studyPathHref(path.slug)} navigate={navigate}>{path.title}</Link></h3>
              <p className="path-goal">{path.goal}</p>
              <p>{path.summary}</p>
              <PathStats path={path} />
              <p className="coverage-links">
                <Link href={studyPathHref(path.slug)} navigate={navigate}>
                  Open {path.title}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Path detail, with the plan builder
   ------------------------------------------------------------------------- */

const DEFAULT_DAYS_PER_WEEK = 4;
const DEFAULT_MINUTES_PER_DAY = 30;
const CONFIDENCE_CHOICES: ReadonlyArray<{ value: "" | "low" | "medium" | "high"; label: string }> = [
  { value: "", label: "Prefer not to say" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

interface PlanDateGroup { date: string; sessions: StudyPlan["sessions"] }

const groupSessionsByDate = (plan: StudyPlan): PlanDateGroup[] => {
  const groups: PlanDateGroup[] = [];
  for (const session of plan.sessions) {
    const last = groups[groups.length - 1];
    if (last && last.date === session.date) last.sessions.push(session);
    else groups.push({ date: session.date, sessions: [session] });
  }
  return groups;
};

export function PathDetailPage({ pathSlug, navigate }: { pathSlug: string; navigate: Navigate }) {
  const path = useMemo(() => getStudyPath(pathSlug), [pathSlug]);
  const [today] = useState(() => dayKey());
  // A snapshot for this page's life: nothing here writes progress, so it does
  // not need to change underneath the plan that was generated against it.
  const [state] = useState<ProgressState>(() => readProgress());
  const [targetDate, setTargetDate] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState(String(DEFAULT_DAYS_PER_WEEK));
  const [minutesPerDay, setMinutesPerDay] = useState(String(DEFAULT_MINUTES_PER_DAY));
  const [focusCourses, setFocusCourses] = useState<string[]>([]);
  const [confidence, setConfidence] = useState<"" | "low" | "medium" | "high">("");
  const [plan, setPlan] = useState<StudyPlan>();
  const [planMessage, setPlanMessage] = useState("");
  const [restoredFor, setRestoredFor] = useState<string>();

  const aboutId = useId();
  const coursesId = useId();
  const coverageId = useId();
  const progressId = useId();
  const limitationsId = useId();
  const plannerId = useId();
  const targetId = useId();
  const daysId = useId();
  const minutesId = useId();
  const confidenceGroupName = useId();
  const confidenceHintId = useId();
  const daysHintId = useId();
  const minutesHintId = useId();
  const targetHintId = useId();

  /**
   * Restores the saved settings for whichever path is being shown, including on
   * the first render. This is React's "adjust state when a prop changes"
   * pattern rather than an effect, so a returning visitor never sees an empty
   * form blink before their plan appears. It runs exactly once per path slug.
   */
  if (restoredFor !== pathSlug) {
    const saved = readPlanInput();
    const usable = saved && saved.pathSlug === pathSlug ? saved : undefined;
    const restored = usable ? generatePlan(usable, today, state) : undefined;
    setRestoredFor(pathSlug);
    setTargetDate(usable?.targetDate ?? "");
    setDaysPerWeek(String(usable?.daysPerWeek ?? DEFAULT_DAYS_PER_WEEK));
    setMinutesPerDay(String(usable?.minutesPerDay ?? DEFAULT_MINUTES_PER_DAY));
    setFocusCourses(usable?.focusCourseSlugs ? [...usable.focusCourseSlugs] : []);
    setConfidence(usable?.confidence ?? "");
    setPlan(restored);
    setPlanMessage(restored
      ? `Saved plan restored: ${formatCount(restored.totalSessions)} ${plural(restored.totalSessions, "session")}, ${formatCount(restored.totalMinutes)} minutes in total.`
      : "");
  }

  const progress = useMemo(() => {
    if (!path) return undefined;
    let topicsViewed = 0;
    let questions = 0;
    let correct = 0;
    let started = 0;
    let resumeSlug: string | undefined;
    for (const course of path.courses) {
      const record = state.courses[course.slug];
      if (!record) continue;
      topicsViewed += record.topicsViewed;
      questions += record.questions;
      correct += record.correct;
      if (record.topicsViewed > 0 || record.questions > 0) {
        started += 1;
        if (!resumeSlug) resumeSlug = course.slug;
      }
    }
    return { topicsViewed, questions, correct, started, resumeSlug };
  }, [path, state]);

  if (!path) {
    return (
      <div className="study-tools path-page">
        <ErrorState title="That study path does not exist" navigate={navigate}>
          No path is published under that address. The paths this library does publish are listed on the study paths
          page.
        </ErrorState>
      </div>
    );
  }

  const buildPlan = (): StudyPlan => {
    const input: PlanInput = {
      pathSlug: path.slug,
      targetDate,
      daysPerWeek: clampPlanDays(Number(daysPerWeek)),
      minutesPerDay: clampPlanMinutes(Number(minutesPerDay)),
    };
    if (focusCourses.length) input.focusCourseSlugs = focusCourses;
    if (confidence) input.confidence = confidence;
    savePlanInput(input);
    const generated = generatePlan(input, today, readProgress());
    setPlan(generated);
    setPlanMessage(`Plan generated: ${formatCount(generated.totalSessions)} ${plural(generated.totalSessions, "session")} across ${formatCount(groupSessionsByDate(generated).length)} ${plural(groupSessionsByDate(generated).length, "day")}, ${formatCount(generated.totalMinutes)} minutes in total.${generated.warnings.length ? ` ${formatCount(generated.warnings.length)} ${plural(generated.warnings.length, "note")} to read below.` : ""}`);
    return generated;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    buildPlan();
  };

  const resetPlan = () => {
    clearPlan();
    setTargetDate("");
    setDaysPerWeek(String(DEFAULT_DAYS_PER_WEEK));
    setMinutesPerDay(String(DEFAULT_MINUTES_PER_DAY));
    setFocusCourses([]);
    setConfidence("");
    setPlan(undefined);
    setPlanMessage("Plan reset. The saved settings have been removed from this browser.");
  };

  const toggleFocus = (slug: string, checked: boolean) => {
    setFocusCourses(checked
      ? [...focusCourses, slug].filter((entry, index, all) => all.indexOf(entry) === index)
      : focusCourses.filter((entry) => entry !== slug));
  };

  const resumeCourse = progress?.resumeSlug ?? path.courses[0]?.slug;
  const resumeTitle = resumeCourse ? courseTitles.get(resumeCourse) ?? humanise(resumeCourse) : undefined;
  const accuracy = progress && progress.questions > 0 ? Math.round((progress.correct / progress.questions) * 100) : undefined;
  const groups = plan ? groupSessionsByDate(plan) : [];

  return (
    <div className="study-tools path-page">
      <Breadcrumbs
        navigate={navigate}
        items={[{ label: "Home", href: "/" }, { label: "Study paths", href: "/paths" }, { label: path.title }]}
      />
      <PageHeader
        eyebrow="Study path"
        title={path.title}
        description={path.goal}
        actions={resumeCourse && resumeTitle ? (
          <>
            <Link href={curriculumSubjectHref(resumeCourse)} navigate={navigate} className="button">
              {progress?.resumeSlug ? `Resume ${resumeTitle}` : `Start with ${resumeTitle}`}
            </Link>
            <Link href="/paths" navigate={navigate} className="button button-secondary">All study paths</Link>
          </>
        ) : undefined}
      />

      <section className="study-panel" aria-labelledby={aboutId}>
        <h2 id={aboutId}>What this path is</h2>
        <p>{path.summary}</p>
        <PathStats path={path} />
      </section>

      <section className="study-panel" aria-labelledby={coursesId}>
        <h2 id={coursesId}>Courses in this path</h2>
        <ul className="path-course-list">
          {path.courses.map((course) => (
            <li key={course.slug}>
              <p className="path-course-title">
                <Link href={curriculumSubjectHref(course.slug)} navigate={navigate}>{course.title}</Link>
              </p>
              <p className="path-course-meta">
                {formatCount(course.topicCount)} {plural(course.topicCount, "topic")} ·{" "}
                {course.questionCount > 0
                  ? `${formatCount(course.questionCount)} practice ${plural(course.questionCount, "question")}`
                  : "no practice questions yet"}{" "}
                · Catalog status: {humanise(course.status)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="study-panel" aria-labelledby={coverageId}>
        <h2 id={coverageId}>Coverage across this path</h2>
        <dl className="path-stats">
          <div>
            <dt>Courses with college-level notes</dt>
            <dd>{formatCount(path.coverage.coursesWithCollegeNotes)} of {formatCount(path.courses.length)}</dd>
          </div>
          <div>
            <dt>Courses with plain-language explanations</dt>
            <dd>{formatCount(path.coverage.coursesWithEli10)} of {formatCount(path.courses.length)}</dd>
          </div>
          <div>
            <dt>Courses with practice questions</dt>
            <dd>{formatCount(path.coverage.coursesWithQuestions)} of {formatCount(path.courses.length)}</dd>
          </div>
          <div>
            <dt>Estimated study time</dt>
            <dd>{formatMinutes(path.estimatedMinutes)}</dd>
          </div>
        </dl>
        <p className="study-hint">
          Estimated time comes from topic prose length plus exact-mapped question counts. It excludes subject-wide
          question banks, and it is a planning aid rather than a measurement.{" "}
          <Link href="/coverage" navigate={navigate}>See full course coverage</Link>.
        </p>
      </section>

      <section className="study-panel" aria-labelledby={progressId}>
        <h2 id={progressId}>Your progress in this browser</h2>
        {progress && (
          <>
            <dl className="path-stats">
              <div>
                <dt>Courses started</dt>
                <dd>{formatCount(progress.started)} of {formatCount(path.courses.length)}</dd>
              </div>
              <div>
                <dt>Topics opened</dt>
                <dd>{formatCount(progress.topicsViewed)} of {formatCount(path.topicCount)}</dd>
              </div>
              <div>
                <dt>Questions answered</dt>
                <dd>{formatCount(progress.questions)}</dd>
              </div>
              <div>
                <dt>Answered correctly</dt>
                <dd>{accuracy === undefined ? "Not enough answers yet" : `${formatCount(progress.correct)} (${accuracy}%)`}</dd>
              </div>
            </dl>
            <p className="study-hint">
              Counted from activity recorded in this browser only. It describes what you have opened and answered here;
              it is not a measure of clinical competence and not a prediction of any exam result.
            </p>
          </>
        )}
      </section>

      <section className="study-panel study-limitations" aria-labelledby={limitationsId}>
        <h2 id={limitationsId}>Limitations of this path</h2>
        <p>These apply to everything on this page, including any plan built below.</p>
        <ul>
          {path.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
        </ul>
      </section>

      <section className="study-panel" aria-labelledby={plannerId}>
        <h2 id={plannerId}>Build a study plan</h2>
        <p>
          A plan spreads this path's courses across the days you say you have. It is generated in this browser and
          saved in this browser. {PLAN_DISCLAIMER}
        </p>
        <p className="study-hint">
          Only these settings are collected: a target date, days per week, minutes per day, optional focus courses and
          an optional confidence band. No name, no email, no free text and nothing about your health.
        </p>

        <form className="plan-form" onSubmit={onSubmit}>
          <fieldset className="study-fieldset">
            <legend>When and how much</legend>
            <div className="plan-field-grid">
              <div className="plan-field">
                <label htmlFor={targetId}>Target date</label>
                <input
                  id={targetId}
                  type="date"
                  value={targetDate}
                  min={today}
                  aria-describedby={targetHintId}
                  onChange={(event) => setTargetDate(event.target.value)}
                />
                <p className="study-hint" id={targetHintId}>Optional. Without one, the plan covers the next 14 days.</p>
              </div>
              <div className="plan-field">
                <label htmlFor={daysId}>Days per week</label>
                <input
                  id={daysId}
                  type="number"
                  inputMode="numeric"
                  value={daysPerWeek}
                  min={MIN_DAYS_PER_WEEK}
                  max={MAX_DAYS_PER_WEEK}
                  step={1}
                  aria-describedby={daysHintId}
                  onChange={(event) => setDaysPerWeek(event.target.value)}
                  onBlur={() => setDaysPerWeek(String(clampPlanDays(Number(daysPerWeek))))}
                />
                <p className="study-hint" id={daysHintId}>{MIN_DAYS_PER_WEEK} to {MAX_DAYS_PER_WEEK}.</p>
              </div>
              <div className="plan-field">
                <label htmlFor={minutesId}>Minutes per day</label>
                <input
                  id={minutesId}
                  type="number"
                  inputMode="numeric"
                  value={minutesPerDay}
                  min={MIN_MINUTES_PER_DAY}
                  max={MAX_MINUTES_PER_DAY}
                  step={5}
                  aria-describedby={minutesHintId}
                  onChange={(event) => setMinutesPerDay(event.target.value)}
                  onBlur={() => setMinutesPerDay(String(clampPlanMinutes(Number(minutesPerDay))))}
                />
                <p className="study-hint" id={minutesHintId}>{MIN_MINUTES_PER_DAY} to {MAX_MINUTES_PER_DAY}.</p>
              </div>
            </div>
          </fieldset>

          <fieldset className="study-fieldset">
            <legend>Focus courses (optional)</legend>
            <p className="study-hint">
              Tick any course to schedule only those. Leave every box clear to work through the whole path.
            </p>
            <div className="study-choice-grid">
              {path.courses.map((course) => (
                <label className="study-choice" key={course.slug}>
                  <input
                    type="checkbox"
                    checked={focusCourses.includes(course.slug)}
                    onChange={(event) => toggleFocus(course.slug, event.target.checked)}
                  />
                  <span>{course.title}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="study-fieldset">
            <legend>Confidence with this material (optional)</legend>
            <p className="study-hint" id={confidenceHintId}>
              This changes one thing only: how often a session is set aside for revision instead of new material.
              Lower confidence books more revision.
            </p>
            <div className="study-choice-grid">
              {CONFIDENCE_CHOICES.map((choice) => (
                <label className="study-choice" key={choice.value || "unstated"}>
                  <input
                    type="radio"
                    name={confidenceGroupName}
                    value={choice.value}
                    checked={confidence === choice.value}
                    aria-describedby={confidenceHintId}
                    onChange={() => setConfidence(choice.value)}
                  />
                  <span>{choice.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="study-actions">
            <button type="submit" className="button">{plan ? "Regenerate plan" : "Generate plan"}</button>
            {plan && (
              <button type="button" className="button button-secondary" onClick={resetPlan}>Reset plan</button>
            )}
          </div>
        </form>

        <p className="study-live" aria-live="polite">{planMessage}</p>

        {plan && (
          <div className="plan-result">
            <h3>Your plan</h3>
            {plan.warnings.length > 0 && (
              <div className="plan-warnings">
                <h4>Read this before you follow it</h4>
                <ul>
                  {plan.warnings.map((warning) => <li key={warning}>{warning}</li>)}
                </ul>
              </div>
            )}
            {plan.sessions.length === 0 ? (
              <p>This plan has no sessions. Change the target date, the days per week, or the focus courses above.</p>
            ) : (
              <div className="study-table-scroll">
                <table className="plan-table">
                  <caption>
                    {formatCount(plan.totalSessions)} {plural(plan.totalSessions, "session")} across{" "}
                    {formatCount(groups.length)} {plural(groups.length, "day")}, {formatCount(plan.totalMinutes)}{" "}
                    minutes in total, starting {formatDay(plan.sessions[0].date)}.
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Course</th>
                      <th scope="col">Session</th>
                      <th scope="col">Minutes</th>
                      <th scope="col">Topics to aim for</th>
                    </tr>
                  </thead>
                  {groups.map((group) => (
                    <tbody key={group.date}>
                      {group.sessions.map((session, index) => (
                        <tr key={`${group.date}-${index}`}>
                          {index === 0 && (
                            // One session on a date is a row header; several
                            // share one header spanning the group.
                            <th
                              scope={group.sessions.length > 1 ? "rowgroup" : "row"}
                              rowSpan={group.sessions.length > 1 ? group.sessions.length : undefined}
                            >
                              {formatDay(group.date)}
                            </th>
                          )}
                          <td>{session.courseTitle}</td>
                          <td>{session.kind === "review" ? "Revision" : "New material"}</td>
                          <td>{formatCount(session.minutes)}</td>
                          <td>{formatCount(session.topicTarget)}</td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
                </table>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
