import { useEffect, useId, useMemo, useRef, useState, type CSSProperties } from "react";
import { CheckIcon, Link } from "../components/ui";
import { HomeQuestionDemo } from "../components/HomeQuestionDemo";
import { CurriculumCourseCatalog } from "./CurriculumExplorer";
import {
  BRAND_POSITIONING,
  PRIMARY_CTA,
  SAFETY_DISCLAIMER,
  SECONDARY_CTA,
  SOURCING_ACCURACY_NOTE,
  TRUST_LINE,
} from "../content/brand";
import { loadCurriculumCatalog } from "../lib/content/curriculum-v2";
import { bookHref, libraryBooks, libraryTotals } from "../lib/book-library";
import { listStudyPaths, studyPathHref } from "../lib/paths/study-paths";
import { courseProgress, readProgress, summarise, type ProgressState } from "../lib/progress";
import type { Navigate } from "../lib/navigation";
import "../styles/learn.css";

const catalog = loadCurriculumCatalog();
const count = (value: number): string => value.toLocaleString("en-US");

const STEPS = [
  { title: "Choose your route", body: "Pick a subject, or use the optional diagnostic to find a sensible starting point." },
  { title: "Build the model", body: "Learn through structured topics, college-level notes and plain-language explanations." },
  { title: "Practise the why", body: "Answer real questions, then read the rationale instead of stopping at a score." },
  { title: "Return with purpose", body: "Use local progress and the review queue to continue what needs attention." },
] as const;

const TRUST_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Coverage", "/coverage"],
  ["Source and citation policy", "/source-citation-policy"],
  ["Content review process", "/content-review"],
  ["Editorial policy", "/editorial-policy"],
  ["Medical disclaimer", "/medical-disclaimer"],
  ["Report an error", "/report-error"],
];

const FAQ = [
  ["Is MedMosa free?", "Yes. Every published course, topic and practice question is available without a paid tier or trial."],
  ["Do I need an account?", "No. You can browse and study immediately. Progress is stored locally in this browser and malformed saved data safely falls back to a clean state."],
  ["Is the material clinically verified?", "No. The material has not received credentialed clinical review, and MedMosa does not present it as clinically verified."],
  ["Is this medical advice?", "No. MedMosa is educational study material and must not be used for diagnosis, treatment decisions or emergency guidance."],
] as const;

function HeartMotif({ active }: { active: boolean }) {
  return (
    <div className={`learn-heart${active ? " is-active" : ""}`} aria-hidden="true">
      <span className="learn-heart-orbit learn-heart-orbit-one" />
      <span className="learn-heart-orbit learn-heart-orbit-two" />
      <svg viewBox="0 0 360 420" fill="none" focusable="false">
        <defs>
          <linearGradient id="heart-line" x1="70" y1="80" x2="290" y2="350" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent-mint)" />
            <stop offset=".55" stopColor="var(--accent-teal)" />
            <stop offset="1" stopColor="var(--accent-violet)" />
          </linearGradient>
          <radialGradient id="heart-wash" cx="0" cy="0" r="1" gradientTransform="translate(180 225) rotate(90) scale(175)">
            <stop stopColor="var(--accent-teal)" stopOpacity=".16" />
            <stop offset="1" stopColor="var(--accent-violet)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="180" cy="225" r="175" fill="url(#heart-wash)" />
        <g stroke="url(#heart-line)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M165 126c-4-30 5-52 25-67 12-9 25-11 37-5 13 7 17 21 13 39-4 19-17 34-31 48" />
          <path d="M195 137c10-29 27-48 49-56 17-6 32 0 39 13 7 14 1 31-14 46-14 14-30 22-46 31" />
          <path d="M143 145c-21-26-25-51-13-73 8-15 22-22 37-18 17 4 27 20 27 43 0 17-5 31-13 45" />
          <path d="M115 169c-31 5-50 21-57 47-9 34 12 72 43 108 28 33 57 51 76 63 8 5 18 5 26-1 42-30 77-65 92-105 15-38 5-79-23-102-27-23-64-24-91-1-16-21-41-28-66-9Z" />
          <path d="M181 177c-4 38-1 78 9 117 7 26 8 51-3 76M139 179c20 18 29 39 28 65-1 34-16 57-43 70M221 182c-15 18-21 39-17 62 5 29 21 51 48 66" />
          <path d="M92 225c20-8 39-4 54 12 11 12 18 28 20 48M270 220c-22-3-40 5-52 25-8 13-12 29-12 48M120 314c25-5 47 1 66 18 15-16 34-23 57-21" opacity=".62" />
        </g>
        <g fill="var(--accent-mint)"><circle cx="181" cy="177" r="4" /><circle cx="166" cy="285" r="3" /><circle cx="206" cy="293" r="3" /></g>
      </svg>
    </div>
  );
}

function useAmbientMotion() {
  const motifRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(() => typeof document === "undefined" || document.visibilityState === "visible");

  useEffect(() => {
    const element = motifRef.current;
    const observer = element && "IntersectionObserver" in globalThis
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "80px" })
      : null;
    if (element) observer?.observe(element);
    const onVisibility = () => setDocumentVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return { motifRef, active: inView && documentVisible };
}

function recentCourse(state: ProgressState) {
  const recentTopic = Object.entries(state.topics)
    .sort(([leftId, leftDate], [rightId, rightDate]) => leftDate.localeCompare(rightDate) || leftId.localeCompare(rightId)).at(-1);
  const recentSlug = recentTopic?.[0].split(":")[1];
  if (recentSlug) {
    const subject = catalog.subjects.find((entry) => entry.slug === recentSlug);
    if (subject) return subject;
  }
  return catalog.subjects.map((subject) => ({ subject, record: courseProgress(state, subject.slug) }))
    .filter(({ record }) => record.topicsViewed || record.questions)
    .sort((a, b) => (b.record.topicsViewed + b.record.questions) - (a.record.topicsViewed + a.record.questions))[0]?.subject;
}

export const LearnLandingPage = ({ navigate }: { navigate: Navigate }) => {
  const headingBase = useId();
  const heading = (name: string) => `${headingBase}-${name}`;
  const paths = useMemo(() => listStudyPaths(), []);
  const books = useMemo(() => libraryBooks(), []);
  const bookTotals = useMemo(() => libraryTotals(), []);
  const progress = useMemo(() => readProgress(), []);
  const summary = useMemo(() => summarise(progress), [progress]);
  const continueCourse = useMemo(() => recentCourse(progress), [progress]);
  const continueRecord = continueCourse ? courseProgress(progress, continueCourse.slug) : undefined;
  const continuePercent = continueCourse && continueRecord
    ? Math.min(100, Math.round((continueRecord.topicsViewed / Math.max(continueCourse.statistics.topicCount, 1)) * 100)) : 0;
  const ambient = useAmbientMotion();

  return (
    <div className="learn-landing">
      <section className="learn-hero" aria-labelledby={heading("hero")}>
        <div className="learn-hero-aurora" aria-hidden="true" />
        <div ref={ambient.motifRef} className="learn-heart-wrap"><HeartMotif active={ambient.active} /></div>
        <div className="learn-hero-copy">
          <p className="learn-eyebrow">Free medical &amp; health-science learning</p>
          <h1 id={heading("hero")}>Medical learning,<br /><span>made brilliantly clear.</span></h1>
          <p className="learn-hero-lede">{BRAND_POSITIONING} Lessons, rationales, local progress and transparent sources are ready when you are.</p>
          <div className="action-row learn-hero-actions">
            <Link href={PRIMARY_CTA.href} navigate={navigate} className="button">{PRIMARY_CTA.label}<span aria-hidden="true">→</span></Link>
            <Link href={SECONDARY_CTA.href} navigate={navigate} className="button button-secondary">{SECONDARY_CTA.label}</Link>
          </div>
          <ul className="learn-trust-points" aria-label="What you can expect">
            <li><CheckIcon />No registration</li><li><CheckIcon />No subscription</li><li><CheckIcon />Educational, not medical advice</li>
          </ul>
          <p className="learn-trust-detail">{TRUST_LINE}</p>
        </div>
      </section>

      <section className="learn-proof-strip" aria-label="Library coverage">
        <div><strong>{count(catalog.totals.subjects)}</strong><span>courses</span></div>
        <div><strong>{count(catalog.totals.topics)}</strong><span>structured topics</span></div>
        <div><strong>{count(catalog.totals.uniqueQuestionsAcrossCatalog)}</strong><span>unique questions</span></div>
        <p>Free to begin. Progress stays in your browser.</p>
      </section>

      <section className="learn-section learn-demo-section" aria-labelledby={heading("demo")}>
        <div className="learn-demo-intro">
          <p className="learn-eyebrow">Practice the why</p>
          <h2 id={heading("demo")}>Learn the why.<br />Not just the answer.</h2>
          <p>Try a real question from the curriculum. MedMosa follows every answer with the reasoning and a plain-language explanation, so practice becomes understanding.</p>
          <p className="learn-demo-note">This sample does not change your study history.</p>
        </div>
        <HomeQuestionDemo />
      </section>

      <section className="learn-section" aria-labelledby={heading("workspace")}>
        <div className="learn-section-heading"><p className="learn-eyebrow">One calm study workspace</p><h2 id={heading("workspace")}>Know what to learn, practise and revisit.</h2><p>Real MedMosa states, connected to the courses and tools already in the library.</p></div>
        <div className="learn-bento">
          <article className="learn-bento-card learn-bento-continue">
            <p className="learn-card-label">{summary.hasAnyActivity ? "Continue learning" : "Start here"}</p>
            <h3>{continueCourse?.title ?? "Anatomy & Physiology I"}</h3>
            <p>{summary.hasAnyActivity ? `${continueRecord?.topicsViewed ?? 0} topics read and ${continueRecord?.questions ?? 0} questions answered in this course.` : "Build a strong first layer with clear topics, quick review and real practice."}</p>
            <div className="learn-progress-row"><progress value={continuePercent} max="100">{continuePercent}%</progress><span>{continuePercent}%</span></div>
            <Link href={continueCourse ? `/learn/${continueCourse.slug}` : PRIMARY_CTA.href} navigate={navigate} className="learn-card-link">{summary.hasAnyActivity ? "Continue course" : "Open the course"} <span aria-hidden="true">→</span></Link>
          </article>

          <article className="learn-bento-card learn-bento-progress">
            <p className="learn-card-label">Your study</p>
            <div className="learn-ring" style={{ "--ring-value": `${Math.min(summary.accuracyToday ?? 0, 100) * 3.6}deg` } as CSSProperties}><span><strong>{summary.accuracyToday ?? "—"}</strong>{summary.accuracyToday === null ? "accuracy" : "% today"}</span></div>
            <dl><div><dt>Streak</dt><dd>{summary.streakDays}d</dd></div><div><dt>Topics</dt><dd>{summary.topicsViewed}</dd></div><div><dt>Questions</dt><dd>{summary.totalQuestions}</dd></div></dl>
            <Link href="/dashboard" navigate={navigate} className="learn-card-link">Open dashboard <span aria-hidden="true">→</span></Link>
          </article>

          <article className="learn-bento-card learn-bento-review"><span className="learn-bento-icon" aria-hidden="true">↺</span><p className="learn-card-label">Review queue</p><h3>Turn misses into momentum.</h3><p>Revisit weaker topics using the local practice history already on this device.</p><Link href="/review" navigate={navigate} className="learn-card-link">Review what is due <span aria-hidden="true">→</span></Link></article>
          <article className="learn-bento-card learn-bento-diagnostic"><span className="learn-bento-icon" aria-hidden="true">⌁</span><p className="learn-card-label">Optional diagnostic</p><h3>Not sure where to begin?</h3><p>Answer five short questions. Nothing leaves your browser.</p><Link href="/diagnostic" navigate={navigate} className="button button-secondary">Find a starting point</Link></article>
          <article className="learn-bento-card learn-bento-sources"><p className="learn-card-label">Source transparency</p><h3>See the evidence—and the gaps.</h3><p>{SOURCING_ACCURACY_NOTE}</p><div className="learn-source-sample"><span aria-hidden="true">✓</span><span><strong>Reference recorded</strong><small>OpenStax · Anatomy &amp; Physiology 2e</small></span></div><Link href="/coverage" navigate={navigate} className="learn-card-link">Explore coverage <span aria-hidden="true">→</span></Link></article>
          <article className="learn-bento-card learn-bento-paths"><p className="learn-card-label">Study paths</p><h3>{paths.length} ways to organise the library.</h3><ul>{paths.slice(0, 3).map((path) => <li key={path.slug}>{path.title}<span>{path.courses.length} courses</span></li>)}</ul><Link href="/paths" navigate={navigate} className="learn-card-link">View every path <span aria-hidden="true">→</span></Link></article>
        </div>
      </section>

      <section id="how-it-works" className="learn-section learn-how" aria-labelledby={heading("how")}>
        <div className="learn-section-heading"><p className="learn-eyebrow">A repeatable learning loop</p><h2 id={heading("how")}>How MedMosa works</h2></div>
        <ol className="learn-steps">{STEPS.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>
      </section>

      <section className="learn-section learn-path-section" aria-labelledby={heading("paths")}>
        <div className="learn-section-heading"><p className="learn-eyebrow">Built from the live catalog</p><h2 id={heading("paths")}>Choose a study path, not a rigid syllabus.</h2><p>Paths group existing courses without inventing prerequisites, clinical sequences or exam alignment.</p></div>
        <div className="learn-path-grid">{paths.map((path, index) => <article className="learn-path-card" key={path.slug} data-accent={index % 5}><span className="learn-path-index" aria-hidden="true">0{index + 1}</span><h3><Link href={studyPathHref(path.slug)} navigate={navigate}>{path.title}</Link></h3><p>{path.goal}</p><dl><div><dt>Courses</dt><dd>{path.courses.length}</dd></div><div><dt>Topics</dt><dd>{count(path.topicCount)}</dd></div><div><dt>Questions</dt><dd>{count(path.questionCount)}</dd></div></dl></article>)}</div>
      </section>

      <section className="learn-section learn-books-feature" aria-labelledby={heading("books")}>
        <div className="learn-section-heading">
          <p className="learn-eyebrow">Go deeper with complete books</p>
          <h2 id={heading("books")}>{bookTotals.books} books, organised for focused study.</h2>
          <p>{bookTotals.topics.toLocaleString("en-US")} source-grounded topics are available in their original chapter order, with provenance visible as you read.</p>
        </div>
        <div className="learn-books-preview">
          {books.slice(0, 3).map((book, index) => <article className="learn-book-preview" key={book.slug} data-book-tone={index % 3}>
            <div className="learn-book-cover" aria-hidden="true"><span>MedMosa<br />Library</span><i /><b>{String(index + 1).padStart(2, "0")}</b></div>
            <p className="learn-card-label">{book.subjectArea} · {book.topicCount} topics</p>
            <h3>{book.title}</h3>
            <p>{book.chapters.length} chapters, in source order.</p>
            <Link href={bookHref(book.slug)} navigate={navigate} className="learn-card-link">Open book <span aria-hidden="true">→</span></Link>
          </article>)}
        </div>
        <Link href="/books" navigate={navigate} className="button button-secondary learn-library-link">Browse the full library <span aria-hidden="true">→</span></Link>
      </section>

      <section className="learn-section learn-catalog" aria-labelledby={heading("catalog")}>
        <div className="learn-section-heading"><p className="learn-eyebrow">Nothing hidden</p><h2 id={heading("catalog")}>Browse all {count(catalog.totals.subjects)} courses.</h2><p>Every current course stays reachable, whether or not a study path includes it.</p></div>
        <CurriculumCourseCatalog navigate={navigate} />
      </section>

      <section className="learn-section learn-trust-section" aria-labelledby={heading("trust")}>
        <div className="learn-trust-copy"><p className="learn-eyebrow">Credibility without overclaiming</p><h2 id={heading("trust")}>Clear about what this library is—and what it is not.</h2><p>{SOURCING_ACCURACY_NOTE}</p><p>{SAFETY_DISCLAIMER}</p></div>
        <nav className="learn-trust-links" aria-label="Sources, policies and corrections">{TRUST_LINKS.map(([label, href]) => <Link key={href} href={href} navigate={navigate}>{label}<span aria-hidden="true">↗</span></Link>)}</nav>
      </section>

      <section className="learn-section learn-faq" aria-labelledby={heading("faq")}>
        <div className="learn-section-heading"><p className="learn-eyebrow">Straight answers</p><h2 id={heading("faq")}>Before you begin</h2></div>
        <div className="learn-faq-list">{FAQ.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="learn-final" aria-labelledby={heading("final")}>
        <div><p className="learn-eyebrow">No gatekeeping. No paywall.</p><h2 id={heading("final")}>Make the next complex topic feel possible.</h2><p>Start with a course, try a question, and keep only the progress you choose to store in this browser.</p></div>
        <div className="action-row"><Link href={PRIMARY_CTA.href} navigate={navigate} className="button">{PRIMARY_CTA.label}<span aria-hidden="true">→</span></Link><Link href="/diagnostic" navigate={navigate} className="button button-secondary">Take the diagnostic</Link></div>
      </section>
    </div>
  );
};
