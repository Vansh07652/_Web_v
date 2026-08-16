/**
 * Course coverage, stated in the same words everywhere it appears.
 *
 * Every figure on this surface comes from the catalog's own `statistics` block.
 * Nothing is rounded up, nothing is inferred, and no course is allowed to look
 * more finished than its data supports. Three rules do most of that work:
 *
 *   - **A zero is written out, never shown as a ratio.** "0 of 174" reads as a
 *     progress bar at the start of a job. "This course is practice-first —
 *     standalone college notes are still being written" reads as what it is: a
 *     course with 14,505 questions and no lecture notes, which is a perfectly
 *     good thing to study and a terrible thing to misrepresent.
 *   - **The catalog's own status is surfaced.** Two of the 33 courses are
 *     marked `partial`, eleven are finished question banks with no college
 *     notes, and one has a finished bank whose citations are not yet
 *     authoritative. Each says so on its own card and on its own page.
 *   - **Flagged questions are disclosed, not buried.** Where a course has
 *     questions awaiting citation review, the count is on the card.
 *
 * The full picture, with filters and per-course bars, is at /coverage; every
 * surface here links to it rather than restating it.
 */
import { useId, useMemo, useState, type ReactNode } from "react";
import { EmptyState, Link } from "./ui";
import { CATEGORY_GROUPS } from "./CourseCatalog";
import { curriculumSubjectHref, loadCurriculumCatalog } from "../lib/content/curriculum-v2";
import type { Navigate } from "../lib/navigation";
import type { CurriculumSubjectV2 } from "../types";

const catalog = loadCurriculumCatalog();

type CourseStatistics = CurriculumSubjectV2["statistics"];

const formatCount = (value: number): string => value.toLocaleString("en-US");
const plural = (count: number, word: string): string => (count === 1 ? word : `${word}s`);

interface CourseFigures {
  topicCount: number;
  questionCount: number;
  collegeNoteCount: number;
  eli10Count: number;
  referencedCount: number;
  citationReviewCount: number;
}

const figuresFor = (statistics: CourseStatistics): CourseFigures => ({
  topicCount: statistics.topicCount,
  questionCount: statistics.uniqueQuestionCount,
  collegeNoteCount: statistics.teachingTopicCount ?? 0,
  eli10Count: statistics.eli10TopicCount ?? 0,
  referencedCount: statistics.referencedTopicCount ?? 0,
  citationReviewCount: statistics.citationReviewRequiredCount,
});

/**
 * The catalog's own course statuses, in the catalog's own terms. An unknown
 * status produces no note at all rather than a guess at what it might mean.
 */
const COURSE_STATUS_NOTES: Record<string, { label: string; note: string }> = {
  partial: {
    label: "Partial course",
    note: "The catalog marks this course partial: it is still being assembled, so parts of it are less complete than the rest of the library.",
  },
  final_question_bank_no_college_notes: {
    label: "Finished question bank, no college notes",
    note: "The catalog marks this course as a completed question bank without college-level notes. Study it from the questions and the plain-language explanations.",
  },
  final_question_bank_without_authoritative_citations: {
    label: "Citations still being checked",
    note: "The catalog marks this course as a completed question bank whose citations are not yet authoritative, which is why every one of its questions is flagged for citation review.",
  },
};

const describeCourse = (figures: CourseFigures): string => {
  const { topicCount, collegeNoteCount, questionCount } = figures;
  const topics = `${formatCount(topicCount)} ${plural(topicCount, "topic")}`;
  if (collegeNoteCount && questionCount) return `${topics}, with college-level notes and practice questions.`;
  if (collegeNoteCount) return `${topics} with college-level notes. No practice questions in this course yet.`;
  if (questionCount) return `${topics}, taught through practice questions and plain-language explanations.`;
  return `${topics}. Reading material only for now.`;
};

function CourseFact({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="course-fact">
      <dt>{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}

/**
 * One `n of total` line, or a sentence when there is no `n` to show. `zeroNote`
 * is required rather than optional so no caller can accidentally fall back to a
 * bare zero.
 */
function CoverageFact({ term, count, total, unit, zeroNote }: {
  term: string;
  count: number;
  total: number;
  unit: string;
  zeroNote: string;
}) {
  return (
    <CourseFact term={term}>
      {count > 0 && total > 0
        ? <><strong>{formatCount(count)} of {formatCount(total)}</strong> {unit}</>
        : <span className="course-zero">{zeroNote}</span>}
    </CourseFact>
  );
}

function CourseFigureList({ figures, unitCount, wide = false }: { figures: CourseFigures; unitCount?: number; wide?: boolean }) {
  const { topicCount, questionCount, collegeNoteCount, eli10Count, referencedCount, citationReviewCount } = figures;
  return (
    <dl className={wide ? "course-facts course-facts--wide" : "course-facts"}>
      {unitCount !== undefined && <CourseFact term="Units"><strong>{formatCount(unitCount)}</strong></CourseFact>}
      <CourseFact term="Topics"><strong>{formatCount(topicCount)}</strong></CourseFact>
      <CourseFact term="Practice questions">
        {questionCount > 0
          ? <strong>{formatCount(questionCount)}</strong>
          : <span className="course-zero">None in this course yet</span>}
      </CourseFact>
      <CoverageFact
        term="College-level notes"
        count={collegeNoteCount}
        total={topicCount}
        unit="topics"
        zeroNote="None yet. This course is practice-first, and standalone college notes are still being written."
      />
      <CoverageFact
        term="Plain-language explanations"
        count={eli10Count}
        total={topicCount}
        unit="topics"
        zeroNote="None written for this course yet."
      />
      <CoverageFact
        term="Topics with references"
        count={referencedCount}
        total={topicCount}
        unit="topics"
        zeroNote="No topic in this course carries a cited reference yet."
      />
      {questionCount > 0 && (
        <CourseFact term="Questions needing citation review">
          {citationReviewCount > 0
            ? <><strong>{formatCount(citationReviewCount)} of {formatCount(questionCount)}</strong> flagged</>
            : <span className="course-zero">None flagged</span>}
        </CourseFact>
      )}
    </dl>
  );
}

function CourseStatusNote({ status, collegeNoteCount, questionCount }: {
  status: string;
  collegeNoteCount: number;
  questionCount: number;
}) {
  const described = COURSE_STATUS_NOTES[status];
  // A practice-first course whose status does not already say so still says so.
  const practiceFirst = !described && collegeNoteCount === 0 && questionCount > 0;
  if (!described && !practiceFirst) return null;
  return (
    <p className="course-status-note">
      <strong>{described ? described.label : "Practice-first course"}.</strong>{" "}
      {described
        ? described.note
        : "It has no standalone college notes. Study it from its question bank and its plain-language explanations."}
    </p>
  );
}

type CatalogSubject = typeof catalog.subjects[number];

function CourseCoverageCard({ subject, navigate }: { subject: CatalogSubject; navigate: Navigate }) {
  const figures = figuresFor(subject.statistics);
  return (
    <article className="course-card">
      <h4><Link href={curriculumSubjectHref(subject.slug)} navigate={navigate}>{subject.title}</Link></h4>
      <p className="course-card-lede">{describeCourse(figures)}</p>
      <CourseFigureList figures={figures} />
      <CourseStatusNote
        status={subject.status}
        collegeNoteCount={figures.collegeNoteCount}
        questionCount={figures.questionCount}
      />
    </article>
  );
}

/**
 * The /learn course list. Same filter and same category grouping as the plain
 * catalog, with each card carrying the coverage figures for the course it links
 * to, so nothing has to be opened to find out what is inside it.
 */
export function CourseCoverageCatalog({ navigate }: { navigate: Navigate }) {
  const [query, setQuery] = useState("");
  const fieldId = useId();
  const titleId = useId();
  const trimmed = query.trim();
  const normalized = trimmed.toLocaleLowerCase();

  const filtered = useMemo(
    () => (normalized ? catalog.subjects.filter((subject) => subject.title.toLocaleLowerCase().includes(normalized)) : catalog.subjects),
    [normalized],
  );

  const groups = CATEGORY_GROUPS
    .map((group) => ({ ...group, subjects: filtered.filter((subject) => subject.category === group.id) }))
    .filter((group) => group.subjects.length > 0);

  return (
    <section className="section-block" aria-labelledby={titleId}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Browse</p>
          <h2 id={titleId}>Choose your course</h2>
        </div>
        <Link href="/coverage" navigate={navigate}>View coverage</Link>
      </div>

      <p className="course-catalog-note">
        Courses differ in what they hold. The figures on each card are counted from the course itself: how many of its
        topics have college-level notes, how many have a plain-language explanation, how many carry references, and how
        many of its questions are still waiting on a citation check.
      </p>

      <div className="filter-bar">
        <label htmlFor={fieldId}>Filter courses</label>
        <input
          id={fieldId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try chemistry, anatomy or dosage"
        />
        {trimmed
          ? <button type="button" className="button button-secondary" onClick={() => setQuery("")}>Clear</button>
          : <span aria-hidden="true" />}
      </div>
      <p className="filter-status" role="status">
        {trimmed
          ? `${filtered.length} of ${catalog.subjects.length} ${plural(filtered.length, "course")} match “${trimmed}”`
          : `All ${catalog.subjects.length} courses`}
      </p>

      {groups.length === 0 ? (
        <EmptyState
          title="No course matches that"
          action={<button type="button" className="button" onClick={() => setQuery("")}>Clear the filter</button>}
        >
          Try a shorter word — “chem”, “bio” or “anatomy” all work.
        </EmptyState>
      ) : (
        groups.map((group) => (
          <section key={group.id} className="section-block" aria-labelledby={`course-group-${group.id}`}>
            <div className="section-heading">
              <div>
                <h3 id={`course-group-${group.id}`}>{group.title}</h3>
                <p className="filter-status">{group.blurb}</p>
              </div>
            </div>
            <div className="course-grid">
              {group.subjects.map((subject) => (
                <CourseCoverageCard key={subject.id} subject={subject} navigate={navigate} />
              ))}
            </div>
          </section>
        ))
      )}
    </section>
  );
}

/**
 * The same figures on the course's own page, where they answer the question the
 * reader is actually asking: is there anything here to read, or is this a bank
 * of questions?
 */
export function CourseCoverageSummary({ statistics, status, navigate }: {
  statistics: CourseStatistics;
  status: string;
  navigate: Navigate;
}) {
  const headingId = useId();
  const figures = figuresFor(statistics);
  return (
    <section className="course-coverage" aria-labelledby={headingId}>
      <p className="eyebrow">Counted from this course</p>
      <h2 id={headingId}>What this course contains</h2>
      <CourseFigureList figures={figures} unitCount={statistics.unitCount} wide />
      <CourseStatusNote
        status={status}
        collegeNoteCount={figures.collegeNoteCount}
        questionCount={figures.questionCount}
      />
      <p className="course-links">
        <Link href="/coverage" navigate={navigate}>View coverage for every course</Link>
      </p>
    </section>
  );
}
