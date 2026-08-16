/**
 * MedAtlas prototype — Screen 1: Dashboard.
 * Front-end demo only; every value comes from `demoCourses`.
 */

import { useState, type ReactNode } from "react";
import { Link } from "../components/ui";
import type { Navigate } from "../lib/navigation";
import { demoCourses } from "./data";
import {
  ListenButton,
  Pill,
  ProgressBar,
  ProgressStatCard,
  protoHref,
  type ProtoVariant,
} from "./components";
import {
  ArrowRightIcon,
  BookmarkIcon,
  BookOpenIcon,
  CardsIcon,
  CheckIcon,
  NotesIcon,
  RotateIcon,
  TimerIcon,
} from "./icons";

const QUICK_TOOL_ICONS: Record<string, () => ReactNode> = {
  saved: () => <BookmarkIcon />,
  timer: () => <TimerIcon />,
  notes: () => <NotesIcon />,
};

/** Abstract heart-inspired decoration — soft concentric forms and a pulse line. */
function HeartDecoration() {
  return (
    <svg className="ma-continue-art" viewBox="0 0 220 170" fill="none" aria-hidden="true" focusable="false">
      <circle cx="150" cy="72" r="64" className="ma-art-ring is-outer" />
      <circle cx="150" cy="72" r="44" className="ma-art-ring" />
      <path
        d="M150 52c8-12 30-10 30 6 0 12-16 22-30 32-14-10-30-20-30-32 0-16 22-18 30-6Z"
        className="ma-art-heart"
      />
      <path d="M22 128h48l10-24 16 44 14-32 8 12h60" className="ma-art-pulse" />
    </svg>
  );
}

export function DashboardScreen({ variant, navigate }: { variant: ProtoVariant; navigate: Navigate }) {
  const [plan, setPlan] = useState(demoCourses.studyPlan.map((item) => ({ ...item })));
  const togglePlan = (id: string) =>
    setPlan((items) => items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  const planDone = plan.filter((item) => item.done).length;

  return (
    <div className="ma-page ma-dashboard">
      <div className="ma-dashboard-grid">
        <aside className="ma-sidebar" aria-label="My courses and quick tools">
          <section className="ma-sidebar-block">
            <h2 className="ma-sidebar-title">My courses</h2>
            <ul className="ma-course-list">
              {demoCourses.courses.map((course) => (
                <li key={course.id}>
                  <Link href={protoHref(variant, "lesson")} navigate={navigate} className="ma-course-link">
                    <span className="ma-course-name">{course.title}</span>
                    <span className="ma-course-count">{course.lessonsDone}/{course.lessonsTotal}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="ma-sidebar-block">
            <h2 className="ma-sidebar-title">Quick tools</h2>
            <ul className="ma-tool-list">
              {demoCourses.quickTools.map((tool) => (
                <li key={tool.id}>
                  <button type="button" className="ma-tool-btn">
                    <span aria-hidden="true">{(QUICK_TOOL_ICONS[tool.id] ?? (() => <NotesIcon />))()}</span>
                    {tool.label}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="ma-dashboard-main">
          <div className="ma-greeting">
            <h1>{demoCourses.greeting}</h1>
            <p className="ma-greeting-sub">{demoCourses.subtitle}</p>
          </div>

          <section className="ma-continue" aria-labelledby="ma-continue-title">
            <div className="ma-continue-copy">
              <Pill tone="accent">{demoCourses.continueStudying.badge}</Pill>
              <h2 id="ma-continue-title">{demoCourses.continueStudying.title}</h2>
              <p className="ma-continue-text">{demoCourses.continueStudying.text}</p>
              <div className="ma-continue-progress">
                <span className="ma-continue-position">{demoCourses.continueStudying.position}</span>
                <ProgressBar value={demoCourses.continueStudying.progress} label="Lesson progress" />
                <span className="ma-continue-pct">{demoCourses.continueStudying.progress}%</span>
              </div>
              <div className="ma-continue-actions">
                <Link href={protoHref(variant, "lesson")} navigate={navigate} className="ma-btn ma-btn-primary">
                  Resume lesson
                  <ArrowRightIcon />
                </Link>
                <ListenButton label="Listen" />
              </div>
            </div>
            <HeartDecoration />
          </section>

          <section aria-label="Today's numbers" className="ma-metrics">
            {demoCourses.metrics.map((metric) => (
              <ProgressStatCard key={metric.id} icon={metric.icon} value={metric.value} label={metric.label} />
            ))}
          </section>

          <div className="ma-dashboard-columns">
            <section className="ma-card ma-plan" aria-labelledby="ma-plan-title">
              <div className="ma-card-head">
                <h2 id="ma-plan-title">Today&rsquo;s study plan</h2>
                <span className="ma-card-meta">{planDone} of {plan.length} done</span>
              </div>
              <ul className="ma-plan-list">
                {plan.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={item.done ? "ma-plan-item is-done" : "ma-plan-item"}
                      aria-pressed={item.done}
                      onClick={() => togglePlan(item.id)}
                    >
                      <span className="ma-plan-check" aria-hidden="true">{item.done ? <CheckIcon /> : null}</span>
                      <span className="ma-plan-label">{item.label}</span>
                      <span className="ma-plan-state">{item.done ? "Done" : "To do"}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section className="ma-card ma-recs" aria-labelledby="ma-recs-title">
              <div className="ma-card-head">
                <h2 id="ma-recs-title">Recommended for you</h2>
              </div>
              <ul className="ma-rec-list">
                {demoCourses.recommendations.map((rec) => (
                  <li key={rec.id}>
                    <Link
                      href={protoHref(variant, rec.kind === "flashcards" ? "flashcards" : "practice")}
                      navigate={navigate}
                      className="ma-rec-link"
                    >
                      <span className="ma-rec-icon" aria-hidden="true">
                        {rec.kind === "practice" ? <BookOpenIcon /> : rec.kind === "review" ? <RotateIcon /> : <CardsIcon />}
                      </span>
                      <span className="ma-rec-copy">
                        <span className="ma-rec-title">{rec.title}</span>
                        <span className="ma-rec-detail">{rec.detail}</span>
                      </span>
                      <ArrowRightIcon className="ma-rec-arrow" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
