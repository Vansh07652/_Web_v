import { useMemo, useState } from "react";
import { EmptyState, Link } from "./ui";
import { curriculumSubjectHref, loadCurriculumCatalog } from "../lib/content/curriculum-v2";
import type { Navigate } from "../lib/navigation";

const catalog = loadCurriculumCatalog();

type CatalogSubject = typeof catalog.subjects[number];

export const CATEGORY_GROUPS = [
  {
    id: "pre-health-core",
    title: "Science prerequisites",
    blurb: "The lecture courses your program expects before you apply.",
  },
  {
    id: "healthcare-foundations",
    title: "Healthcare foundations",
    blurb: "Skills clinical programs assume you already have.",
  },
  {
    id: "pathophysiology",
    title: "Pathophysiology",
    blurb: "How disease processes change normal function.",
  },
  {
    id: "allied-health",
    title: "Allied health tracks",
    blurb: "Board-oriented practice for specific clinical professions.",
  },
] as const;

function courseDescription(subject: CatalogSubject): string {
  const { topicCount, teachingTopicCount, uniqueQuestionCount } = subject.statistics;
  if (teachingTopicCount && uniqueQuestionCount) return `${topicCount} topics with teaching notes and practice.`;
  if (teachingTopicCount) return `${topicCount} topics with full teaching notes. Question bank in progress.`;
  if (uniqueQuestionCount) return `${topicCount} question-led topics. Standalone notes in progress.`;
  return `${topicCount} topics.`;
}

function CourseCard({ subject, navigate }: { subject: CatalogSubject; navigate: Navigate }) {
  const { topicCount, uniqueQuestionCount } = subject.statistics;
  return (
    <article className={uniqueQuestionCount ? "card card--accent" : "card"}>
      <h3><Link href={curriculumSubjectHref(subject.slug)} navigate={navigate}>{subject.title}</Link></h3>
      <p>{courseDescription(subject)}</p>
      <div className="card-foot">
        <dl className="card-stats">
          <div><dt>Topics</dt><dd>{topicCount}</dd></div>
          <div><dt>Questions</dt><dd>{uniqueQuestionCount.toLocaleString("en-US")}</dd></div>
        </dl>
      </div>
    </article>
  );
}

export const STARTING_POINTS = [
  "anatomy-physiology-1",
  "anatomy-physiology-2",
  "respiratory-therapy",
  "microbiology",
  "general-chemistry-1",
  "biology-1",
];

/**
 * A short, curated shelf for the homepage. The full 28-course grid lives on
 * /learn — putting all of it on the homepage pushed the phone layout past
 * 9,000 px of scroll.
 */
export function StartingPoints({ navigate }: { navigate: Navigate }) {
  const subjects = STARTING_POINTS
    .map((slug) => catalog.subjects.find((subject) => subject.slug === slug))
    .filter((subject): subject is CatalogSubject => Boolean(subject));

  return (
    <section className="section-block" aria-labelledby="starting-points-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Most students start here</p>
          <h2 id="starting-points-title">Popular courses</h2>
        </div>
        <Link href="/learn" navigate={navigate}>See all {catalog.subjects.length} courses</Link>
      </div>
      <div className="card-grid">
        {subjects.map((subject) => <CourseCard key={subject.id} subject={subject} navigate={navigate} />)}
      </div>
      <div className="action-row">
        <Link href="/learn" navigate={navigate} className="button button-secondary">
          Browse all {catalog.subjects.length} courses
        </Link>
      </div>
    </section>
  );
}

/**
 * The full course browser. Lives on /learn, and is the single source the
 * homepage links into, so the two can never drift apart the way the old
 * homepage grid and curriculum page did.
 */
export function CourseCatalog({ navigate, eyebrow = "The curriculum" }: { navigate: Navigate; eyebrow?: string }) {
  const [query, setQuery] = useState("");
  const trimmed = query.trim();
  const normalized = trimmed.toLocaleLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return catalog.subjects;
    return catalog.subjects.filter((subject) => subject.title.toLocaleLowerCase().includes(normalized));
  }, [normalized]);

  const groups = CATEGORY_GROUPS
    .map((group) => ({ ...group, subjects: filtered.filter((subject) => subject.category === group.id) }))
    .filter((group) => group.subjects.length > 0);

  return (
    <section className="section-block" aria-labelledby="catalog-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="catalog-title">Choose your course</h2>
        </div>
      </div>

      <div className="filter-bar">
        <label>
          Filter courses
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try chemistry, anatomy or dosage"
          />
        </label>
        <p className="filter-status" role="status">
          {trimmed
            ? `${filtered.length} of ${catalog.subjects.length} course${filtered.length === 1 ? "" : "s"} match “${trimmed}”`
            : `All ${catalog.subjects.length} courses`}
        </p>
        {trimmed && <button type="button" className="button button-secondary" onClick={() => setQuery("")}>Clear</button>}
      </div>

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
            <div className="card-grid">
              {group.subjects.map((subject) => <CourseCard key={subject.id} subject={subject} navigate={navigate} />)}
            </div>
          </section>
        ))
      )}
    </section>
  );
}
