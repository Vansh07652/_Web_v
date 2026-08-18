import { useEffect, useMemo, useState } from "react";
import { Link } from "./ui";
import { CourseArt, StudyHeroArt } from "./illustrations";
import { curriculumPracticeHref, curriculumSubjectHref, loadCurriculumCatalog } from "../lib/content/curriculum-v2";
import {
  clearProgress,
  courseProgress,
  createStudyClock,
  readProgress,
  summarise,
  type ProgressState,
  type ProgressSummary,
} from "../lib/progress";
import type { Navigate } from "../lib/navigation";

const catalog = loadCurriculumCatalog();
type CatalogSubject = typeof catalog.subjects[number];

/** Minutes a visitor is nudged towards per day. Not a rule, just a target. */
const DAILY_MINUTE_GOAL = 45;
const STUDY_TICK_MS = 60_000;

const greeting = (hour: number): string => {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

/** A ring gauge. Purely decorative — the same figure is stated in text beside it. */
function ProgressRing({ value, max, children }: { value: number; max: number; children: React.ReactNode }) {
  const fraction = max > 0 ? Math.min(value / max, 1) : 0;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="sc-ring">
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <circle className="sc-ring-track" cx="50" cy="50" r={radius} />
        <circle
          className="sc-ring-fill"
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={`${circumference}`}
          strokeDashoffset={`${circumference * (1 - fraction)}`}
        />
      </svg>
      <div className="sc-ring-centre">{children}</div>
    </div>
  );
}

function StatCard({ title, children, foot }: { title: string; children: React.ReactNode; foot?: React.ReactNode }) {
  return (
    <section className="sc-stat-card" aria-label={title}>
      <h3 className="sc-stat-title">{title}</h3>
      {children}
      {foot ? <div className="sc-stat-foot">{foot}</div> : null}
    </section>
  );
}

/** The course a visitor has touched most recently, else a sensible first course. */
function pickContinueCourse(state: ProgressState): CatalogSubject | undefined {
  const started = catalog.subjects
    .map((subject) => ({ subject, record: courseProgress(state, subject.slug) }))
    .filter((entry) => entry.record.topicsViewed > 0 || entry.record.questions > 0)
    .sort((a, b) => (b.record.topicsViewed + b.record.questions) - (a.record.topicsViewed + a.record.questions));
  if (started.length) return started[0].subject;
  return catalog.subjects.find((subject) => subject.slug === "anatomy-physiology-1") ?? catalog.subjects[0];
}

function CourseProgressCard({ subject, state, navigate }: { subject: CatalogSubject; state: ProgressState; navigate: Navigate }) {
  const record = courseProgress(state, subject.slug);
  const total = subject.statistics.topicCount || 1;
  const percent = Math.min(Math.round((record.topicsViewed / total) * 100), 100);
  const stage = percent >= 80 ? "Mastered" : percent >= 40 ? "Proficient" : percent > 0 ? "Developing" : "Not started";
  return (
    <article className={`sc-course-card sc-course-card--${stage.toLowerCase().replace(" ", "-")}`}>
      <span className="sc-course-art" aria-hidden="true"><CourseArt slug={subject.slug} /></span>
      <h4 className="sc-course-name">
        <Link href={curriculumSubjectHref(subject.slug)} navigate={navigate}>{subject.title}</Link>
      </h4>
      <p className="sc-course-stage">{stage}</p>
      <div
        className="sc-course-bar"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${subject.title}: ${record.topicsViewed} of ${subject.statistics.topicCount} topics read`}
      >
        <span style={{ inlineSize: `${percent}%` }} />
      </div>
      <p className="sc-course-count">{record.topicsViewed} / {subject.statistics.topicCount} topics</p>
    </article>
  );
}

export function StudyDashboard({ navigate }: { navigate: Navigate }) {
  const [state, setState] = useState<ProgressState>(() => readProgress());
  const [summary, setSummary] = useState<ProgressSummary>(() => summarise());
  const [now] = useState(() => new Date());

  // Count study time only while this tab is actually being looked at, so a
  // dashboard left open in a background tab overnight does not claim credit.
  useEffect(() => {
    const clock = createStudyClock(STUDY_TICK_MS / 60_000);
    const timer = setInterval(() => {
      clock.tick(document.visibilityState === "visible");
      setState(readProgress());
      setSummary(summarise());
    }, STUDY_TICK_MS);
    return () => clearInterval(timer);
  }, []);

  const continueCourse = useMemo(() => pickContinueCourse(state), [state]);
  const featured = useMemo(() => {
    const started = catalog.subjects.filter((subject) => courseProgress(state, subject.slug).topicsViewed > 0);
    const rest = catalog.subjects.filter((subject) => !started.includes(subject) && subject.statistics.teachingTopicCount);
    return [...started, ...rest].slice(0, 6);
  }, [state]);

  const minutes = summary.minutesToday;
  const accuracy = summary.accuracyToday;

  return (
    <div className="sc-dash">
      <header className="sc-dash-head">
        <h1 className="sc-dash-greeting">
          {summary.hasAnyActivity ? `${greeting(now.getHours())}.` : "Every prerequisite, connected."}
        </h1>
        <p className="sc-dash-sub">
          {summary.hasAnyActivity
            ? `You have read ${summary.topicsViewed} ${summary.topicsViewed === 1 ? "topic" : "topics"} and answered ${summary.totalQuestions.toLocaleString("en-US")} ${summary.totalQuestions === 1 ? "question" : "questions"} so far.`
            : `Start anywhere. ${catalog.totals.topics.toLocaleString("en-US")} topics and ${catalog.totals.uniqueQuestionsAcrossCatalog.toLocaleString("en-US")} questions, free and without an account.`}
        </p>
      </header>

      <div className="sc-dash-grid">
        {continueCourse ? (
          <section className="sc-continue" aria-labelledby="sc-continue-title">
            <div className="sc-continue-copy">
              <p className="sc-eyebrow">{summary.hasAnyActivity ? "Continue learning" : "Start here"}</p>
              <h2 id="sc-continue-title" className="sc-continue-title">{continueCourse.title}</h2>
              <p className="sc-continue-text">
                {continueCourse.statistics.topicCount} topics
                {continueCourse.statistics.uniqueQuestionCount
                  ? ` and ${continueCourse.statistics.uniqueQuestionCount.toLocaleString("en-US")} practice questions`
                  : ""}
                , each with the reasoning behind the answer.
              </p>
              <p className="sc-continue-position">
                {courseProgress(state, continueCourse.slug).topicsViewed} of {continueCourse.statistics.topicCount} topics read
              </p>
              <div className="sc-continue-actions">
                <Link href={curriculumSubjectHref(continueCourse.slug)} navigate={navigate} className="button button--primary">
                  {summary.hasAnyActivity ? "Keep going" : "Open the course"}
                </Link>
                {continueCourse.statistics.uniqueQuestionCount ? (
                  <Link href={curriculumPracticeHref(continueCourse.slug)} navigate={navigate} className="button">
                    Practice questions
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="sc-continue-art" aria-hidden="true"><StudyHeroArt /></div>
          </section>
        ) : null}

        <StatCard
          title="Study time today"
          foot={<span>This week: {summary.minutesThisWeek} min</span>}
        >
          <div className="sc-stat-body">
            <ProgressRing value={minutes} max={DAILY_MINUTE_GOAL}>
              <strong>{minutes}</strong>
              <span>/ {DAILY_MINUTE_GOAL} min</span>
            </ProgressRing>
            <dl className="sc-stat-list">
              <div><dt>Day streak</dt><dd>{summary.streakDays} {summary.streakDays === 1 ? "day" : "days"}</dd></div>
              <div><dt>Topics read</dt><dd>{summary.topicsViewed}</dd></div>
            </dl>
          </div>
        </StatCard>

        <StatCard
          title="Practice today"
          foot={
            <Link href="/questions" navigate={navigate} className="sc-stat-link">Start practising</Link>
          }
        >
          <p className="sc-stat-number">{summary.questionsToday}</p>
          <p className="sc-stat-caption">
            {summary.questionsToday
              ? `${summary.correctToday} correct${accuracy === null ? "" : ` · ${accuracy}% accuracy`}`
              : "questions answered so far today"}
          </p>
        </StatCard>

        <section className="sc-systems" aria-labelledby="sc-systems-title">
          <div className="sc-systems-head">
            <h2 id="sc-systems-title">Your courses</h2>
            <Link href="/learn" navigate={navigate}>View all {catalog.totals.subjects}</Link>
          </div>
          <div className="sc-course-grid">
            {featured.map((subject) => (
              <CourseProgressCard key={subject.slug} subject={subject} state={state} navigate={navigate} />
            ))}
          </div>
        </section>
      </div>

      <p className="sc-dash-privacy">
        Your progress is stored in this browser only. Nothing is uploaded, and there is no account.{" "}
        {summary.hasAnyActivity ? (
          <button
            type="button"
            className="sc-linklike"
            onClick={() => {
              clearProgress();
              setState(readProgress());
              setSummary(summarise());
            }}
          >
            Reset my progress
          </button>
        ) : null}
      </p>
    </div>
  );
}
