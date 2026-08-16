/**
 * MedAtlas prototype — Screen 2: Lesson Reader (flagship).
 * Three-column desktop workspace; on mobile the outline collapses into a
 * drawer and a sticky mini-player appears while the Read Aloud demo is
 * "reading". Front-end demo only.
 */

import { useState } from "react";
import { Link } from "../components/ui";
import type { Navigate } from "../lib/navigation";
import { demoLesson } from "./data";
import {
  ListenButton,
  Pill,
  ProgressBar,
  protoHref,
  ReadAloudPlayerDemo,
  StudyCallout,
  useReadAloudDemo,
  type ProtoVariant,
} from "./components";
import {
  ArrowRightIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  CardsIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsIcon,
  PauseIcon,
  StopIcon,
} from "./icons";

function OutlinePanel({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>({ "unit-1": true, "unit-2": false, "unit-3": false });
  const toggleUnit = (id: string) => setOpenUnits((state) => ({ ...state, [id]: !state[id] }));

  return (
    <aside className={collapsed ? "ma-outline is-collapsed" : "ma-outline"} aria-label="Course outline">
      <div className="ma-outline-head">
        <div className="ma-outline-course">
          <p className="ma-outline-title">{demoLesson.course}</p>
          <p className="ma-outline-progress">
            <ProgressBar value={demoLesson.courseProgress} label="Course progress" slim />
            <span>{demoLesson.courseProgress}% complete</span>
          </p>
        </div>
        <button type="button" className="ma-outline-collapse" aria-expanded={!collapsed} onClick={onToggle}>
          <ChevronLeftIcon />
          <span>{collapsed ? "Expand" : "Collapse"}</span>
        </button>
      </div>
      {!collapsed && (
        <nav aria-label="Lessons in this course">
          {demoLesson.outline.map((unit) => {
            const open = openUnits[unit.id] === true;
            return (
              <section key={unit.id} className="ma-outline-unit">
                <button
                  type="button"
                  className="ma-outline-unit-btn"
                  aria-expanded={open}
                  onClick={() => toggleUnit(unit.id)}
                >
                  <span>{unit.title}</span>
                  <ChevronDownIcon className={open ? "ma-rot is-open" : "ma-rot"} />
                </button>
                {open && (
                  <ul className="ma-outline-lessons">
                    {unit.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <span
                          className={`ma-outline-lesson is-${lesson.state}`}
                          aria-current={lesson.state === "active" ? "true" : undefined}
                        >
                          <span className="ma-outline-dot" aria-hidden="true">
                            {lesson.state === "done" ? <CheckIcon /> : null}
                          </span>
                          {lesson.title}
                          {lesson.state === "done" && <span className="ma-visually-hidden"> (completed)</span>}
                          {lesson.state === "active" && <span className="ma-visually-hidden"> (current lesson)</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </nav>
      )}
    </aside>
  );
}

function StudyToolsPanel({ variant, navigate, saved, onSave }: { variant: ProtoVariant; navigate: Navigate; saved: boolean; onSave: () => void }) {
  return (
    <aside className="ma-tools" aria-label="Study tools">
      <section className="ma-card ma-tools-block">
        <h2 className="ma-tools-title">Lesson progress</h2>
        <p className="ma-tools-big">{demoLesson.courseProgress}%</p>
        <ProgressBar value={demoLesson.courseProgress} label="Lesson progress" />
        <p className="ma-tools-sub">{demoLesson.sectionsComplete.done} of {demoLesson.sectionsComplete.total} sections complete</p>
      </section>
      <section className="ma-card ma-tools-block">
        <h2 className="ma-tools-title">Actions</h2>
        <div className="ma-tools-actions">
          <Link href={protoHref(variant, "practice")} navigate={navigate} className="ma-btn ma-btn-primary">Practice questions</Link>
          <Link href={protoHref(variant, "flashcards")} navigate={navigate} className="ma-btn ma-btn-secondary">Review flashcards</Link>
          <button type="button" className="ma-btn ma-btn-quiet" aria-pressed={saved} onClick={onSave}>
            {saved ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            {saved ? "Saved" : "Save lesson"}
          </button>
          <button type="button" className="ma-btn ma-btn-quiet">
            <CheckCircleIcon />
            Mark complete
          </button>
        </div>
      </section>
      <section className="ma-card ma-tools-block">
        <h2 className="ma-tools-title">Key terms</h2>
        <ul className="ma-term-list">
          {demoLesson.keyTerms.map((term) => (
            <li key={term}><Pill>{term}</Pill></li>
          ))}
        </ul>
      </section>
      <section className="ma-card ma-tools-block ma-upnext">
        <h2 className="ma-tools-title">Up next</h2>
        <p className="ma-upnext-title">{demoLesson.upNext.title}</p>
        <p className="ma-tools-sub">{demoLesson.upNext.detail}</p>
        <ArrowRightIcon className="ma-upnext-arrow" />
      </section>
    </aside>
  );
}

export function LessonScreen({ variant, navigate }: { variant: ProtoVariant; navigate: Navigate }) {
  const player = useReadAloudDemo();
  const [tab, setTab] = useState("Notes");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOutline, setMobileOutline] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="ma-page ma-lesson">
      <div className="ma-mobilebar">
        <Link href={protoHref(variant, "dashboard")} navigate={navigate} className="ma-icon-btn">
          <ChevronLeftIcon />
          <span className="ma-visually-hidden">Back to dashboard</span>
        </Link>
        <p className="ma-mobilebar-title">{demoLesson.course}</p>
        <div className="ma-mobilebar-tools">
          <button type="button" className="ma-icon-btn" aria-pressed={saved} aria-label={saved ? "Remove bookmark" : "Bookmark lesson"} onClick={() => setSaved(!saved)}>
            {saved ? <BookmarkFilledIcon /> : <BookmarkIcon />}
          </button>
          <button type="button" className="ma-icon-btn" aria-label="More options (demo)">
            <DotsIcon />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="ma-outline-toggle"
        aria-expanded={mobileOutline}
        onClick={() => setMobileOutline(!mobileOutline)}
      >
        <span>Lesson outline</span>
        <ChevronDownIcon className={mobileOutline ? "ma-rot is-open" : "ma-rot"} />
      </button>

      <div className={mobileOutline ? "ma-lesson-grid has-mobile-outline" : "ma-lesson-grid"} data-outline-collapsed={collapsed || undefined}>
        <OutlinePanel collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

        <article className="ma-lesson-body">
          <nav className="ma-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>{demoLesson.course}</li>
              <li>{demoLesson.unit}</li>
              <li aria-current="page">{demoLesson.title}</li>
            </ol>
          </nav>

          <header className="ma-lesson-header">
            <h1>{demoLesson.title}</h1>
            <p className="ma-lesson-desc">{demoLesson.description}</p>
            <ul className="ma-lesson-meta">
              <li>{demoLesson.meta.readTime}</li>
              <li>{demoLesson.meta.level}</li>
              <li>{demoLesson.meta.reviewed}</li>
            </ul>
          </header>

          <div className="ma-tabs" role="tablist" aria-label="Lesson views">
            {demoLesson.tabs.map((name) => (
              <button
                key={name}
                type="button"
                role="tab"
                id={`ma-tab-${name}`}
                aria-selected={tab === name}
                aria-controls="ma-tabpanel"
                className={tab === name ? "ma-tab is-active" : "ma-tab"}
                onClick={() => setTab(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <div id="ma-tabpanel" role="tabpanel" aria-labelledby={`ma-tab-${tab}`} className="ma-tabpanel">
            {tab === "Notes" && (
              <div className="ma-lesson-notes">
                <ReadAloudPlayerDemo player={player} title="this lesson" />

                <section className="ma-objectives" aria-labelledby="ma-objectives-title">
                  <h2 id="ma-objectives-title">What you&rsquo;ll learn</h2>
                  <ul>
                    {demoLesson.objectives.map((objective) => (
                      <li key={objective}>
                        <CheckIcon className="ma-objective-check" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="ma-prose" aria-labelledby="ma-section-1">
                  <div className="ma-prose-head">
                    <h2 id="ma-section-1">{demoLesson.intro.heading}</h2>
                    <ListenButton label="Listen to section" onClick={player.listen} />
                  </div>
                  {demoLesson.intro.paragraphs.map((paragraph) => (
                    <p key={paragraph.id}>{paragraph.text}</p>
                  ))}
                </section>

                <section className="ma-card ma-timeline" aria-labelledby="ma-timeline-title">
                  <h2 id="ma-timeline-title">Phases of one heartbeat</h2>
                  <ol className="ma-timeline-list">
                    {demoLesson.phases.map((phase, index) => (
                      <li key={phase.id} className="ma-timeline-item">
                        <span className="ma-timeline-step" aria-hidden="true">{index + 1}</span>
                        <span className="ma-timeline-copy">
                          <span className="ma-timeline-name">{phase.title}</span>
                          <span className="ma-timeline-note">{phase.note}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>

                <StudyCallout kind="high-yield">{demoLesson.callouts.highYield}</StudyCallout>
                <StudyCallout kind="clinical">{demoLesson.callouts.clinical}</StudyCallout>
                <StudyCallout kind="exam-trap">{demoLesson.callouts.examTrap}</StudyCallout>

                <section className="ma-lesson-cta">
                  <h2>Ready to check your understanding?</h2>
                  <div className="ma-lesson-cta-actions">
                    <Link href={protoHref(variant, "practice")} navigate={navigate} className="ma-btn ma-btn-primary">
                      Practice this topic
                      <ArrowRightIcon />
                    </Link>
                    <Link href={protoHref(variant, "flashcards")} navigate={navigate} className="ma-btn ma-btn-secondary">
                      Review flashcards
                    </Link>
                  </div>
                </section>

                <nav className="ma-prevnext" aria-label="Lesson navigation">
                  <span className="ma-prevnext-link is-prev">
                    <ChevronLeftIcon />
                    <span>
                      <span className="ma-prevnext-eyebrow">Previous</span>
                      {demoLesson.previous.title}
                    </span>
                  </span>
                  <span className="ma-prevnext-link is-next">
                    <span>
                      <span className="ma-prevnext-eyebrow">Next</span>
                      {demoLesson.upNext.title}
                    </span>
                    <ChevronRightIcon />
                  </span>
                </nav>
              </div>
            )}

            {tab === "Key Terms" && (
              <section className="ma-card ma-terms-panel" aria-label="Key terms">
                <dl className="ma-terms-dl">
                  <div><dt>Systole</dt><dd>A contraction phase — a chamber squeezes and ejects blood.</dd></div>
                  <div><dt>Diastole</dt><dd>A relaxation phase — a chamber refills with blood.</dd></div>
                  <div><dt>AV valves</dt><dd>Mitral and tricuspid valves between the atria and ventricles.</dd></div>
                  <div><dt>Semilunar valves</dt><dd>Aortic and pulmonary valves at the ventricular outflow tracts.</dd></div>
                  <div><dt>Stroke volume</dt><dd>Blood ejected by one ventricle in a single contraction.</dd></div>
                </dl>
              </section>
            )}

            {tab === "Practice" && (
              <section className="ma-card ma-practice-teaser" aria-label="Practice this lesson">
                <CardsIcon className="ma-practice-teaser-icon" />
                <h2>10 questions on the cardiac cycle</h2>
                <p>Answer rationales included. Your session picks up at question 3.</p>
                <Link href={protoHref(variant, "practice")} navigate={navigate} className="ma-btn ma-btn-primary">
                  Continue practice
                  <ArrowRightIcon />
                </Link>
              </section>
            )}
          </div>
        </article>

        <StudyToolsPanel variant={variant} navigate={navigate} saved={saved} onSave={() => setSaved(!saved)} />
      </div>

      {player.status === "reading" && (
        <div className="ma-miniplayer" role="region" aria-label="Read aloud mini player (visual demo)">
          <span className="ma-eq" aria-hidden="true"><span /><span /><span /></span>
          <p>Reading: {demoLesson.title}</p>
          <div className="ma-miniplayer-actions">
            <button type="button" className="ma-icon-btn" aria-label="Pause reading" onClick={player.pause}>
              <PauseIcon />
            </button>
            <button type="button" className="ma-icon-btn" aria-label="Stop reading" onClick={player.stop}>
              <StopIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
