import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { SiteLayout } from "./layouts/SiteLayout";
import {
  Breadcrumbs,
  CheckIcon,
  EmptyState,
  ErrorState,
  LessonCard,
  Link,
  LoadingState,
  PageHeader,
  PreviousNext,
  SubjectCard,
  TagBadge,
  TrustNote,
} from "./components/ui";
import { StartingPoints } from "./components/CourseCatalog";
import { StudyDashboard } from "./components/StudyDashboard";
import { AuthProvider } from "./lib/auth/context";
import { AuthSheet } from "./components/auth/AuthSheet";
import { AccountControls, AuthToast } from "./components/auth/AccountControls";
import { MarkdownDocument } from "./components/MarkdownDocument";
import { QuestionPractice } from "./components/QuestionPractice";
import { SearchPage } from "./pages/SearchPage";
import { CurriculumRoutes } from "./pages/CurriculumExplorer";
import { CoveragePage, PathDetailPage, PathsPage, ReviewPage } from "./pages/StudyTools";
import { AccessibilityStatementPage, LicensingPage, PrivacyPage, TermsPage } from "./pages/LegalPages";
import {
  ChangelogPage,
  ContactPage,
  ContentReviewProcessPage,
  EditorialPolicyPage,
  MedicalDisclaimerPage,
  ReportErrorPage,
  SourceCitationPolicyPage,
} from "./pages/PolicyPages";
import { LearnLandingPage } from "./pages/LearnLanding";
import { DiagnosticQuizPage } from "./pages/DiagnosticQuiz";
import { LearningDataPage } from "./pages/LearningDataPage";
import { BooksRoutes } from "./pages/BooksLibrary";
import { bookTopicSummary, libraryBook, libraryTotals } from "./lib/book-library";
import { getStudyPath } from "./lib/paths/study-paths";
import {
  curriculumPracticeHref,
  curriculumSubjectHref,
  getCurriculumSubjectSummary,
  loadCurriculumCatalog,
  loadCurriculumSubject,
  loadCurriculumTopic,
} from "./lib/content/curriculum-v2";
import {
  getApprovedQuestionCount,
  getLessonBySlug,
  getLessonsBySubject,
  getNoteByLesson,
  getNoteSource,
  getNotesBySubject,
  getSubjectBySlug,
  loadLessons,
  loadNotes,
  loadQuestionData,
  loadSubjects,
  stripFrontMatter,
} from "./lib/content";
import {
  appPathFromLocation,
  deploymentBasePath,
  lessonHref,
  normalizePath,
  noteHref,
  publicHref,
  questionsHref,
  segmentsFor,
  siteOrigin,
  subjectHref,
  type Navigate,
} from "./lib/navigation";
import {
  applyStructuredData,
  buildBreadcrumbSchema,
  buildWebSiteSchema,
  crumbsForPath,
} from "./lib/structured-data";
import type { Question } from "./types";

const catalog = loadCurriculumCatalog();

// MedAtlas front-end prototype (demo screens, local mock data only) — lazy so
// the production bundle is untouched until /prototype is visited.
const PrototypeRoutes = lazy(() => import("./prototype/PrototypeRoutes"));


/* -------------------------------------------------------------------------
   Metadata
   ------------------------------------------------------------------------- */

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  "": {
    title: "Home",
    description: "Free learning tools, practice resources and clear explanations for aspiring healthcare professionals. No registration, no subscription, no paywall.",
  },
  dashboard: {
    title: "Your study dashboard",
    description: "Your streak, study minutes and per-course progress, worked out in this browser and stored on this device.",
  },
  learn: {
    title: "Learn",
    description: `Free learning tools, practice resources and clear explanations for aspiring healthcare professionals. ${catalog.totals.subjects} courses, ${catalog.totals.units} units and ${catalog.totals.topics} topics, with no registration or subscription.`,
  },
  books: { title: "Books", description: `Open educational nursing and science books, organized into ${libraryTotals().topics.toLocaleString("en-US")} searchable topics.` },
  diagnostic: {
    title: "Find your starting point",
    description: "Answer five short questions about your program, your goals and your time, and get a suggested study path. Nothing is sent anywhere and no account is needed.",
  },
  "content-review": { title: "Content review process", description: "How MedMosa's material is imported, checked and labeled, and what has not been reviewed." },
  "editorial-policy": { title: "Editorial policy", description: "How MedMosa decides what to publish, what to hold back, and how it describes its own coverage." },
  "source-citation-policy": { title: "Source and citation policy", description: "Which sources MedMosa draws on, how they are recorded, and when a citation is described as unverified." },
  "medical-disclaimer": { title: "Medical disclaimer", description: "MedMosa is educational material, not medical advice, and carries no credentialed clinical review." },
  contact: { title: "Contact", description: "How to reach MedMosa about corrections, rights, privacy or accessibility." },
  "report-error": { title: "Report an error", description: "How to report a mistake in MedMosa's study material, and what to include." },
  changelog: { title: "Changelog", description: "A dated record of what has changed on MedMosa." },
  subjects: {
    title: "Classic library",
    description: "The original subject-by-subject library of approved lessons, notes and practice questions.",
  },
  notes: { title: "Notes", description: "Read approved study notes, organized by subject and lesson." },
  questions: { title: "Practice", description: "Practice thousands of questions with worked answer explanations and plain-language rationales." },
  search: { title: "Search", description: "Search every topic, note and practice question. Search runs locally in your browser." },
  resources: { title: "Learning resources", description: "Optional educational lookups from PubMed, NLM and Open Library, with original-source links and clear attribution." },
  prototype: { title: "MedAtlas prototype", description: "MedAtlas — a front-end visual prototype of a study workspace. Demo content only." },
  downloads: { title: "Downloads", description: "Downloadable study files, when they are available." },
  about: { title: "How this works", description: "How MedMosa organizes its material, what is reviewed, and how to study with it." },
  coverage: {
    title: "Content coverage",
    description: `Exactly what each of the ${catalog.totals.subjects} courses contains today: college-level notes, plain-language explanations, cited references and practice questions, course by course.`,
  },
  review: {
    title: "Review",
    description: "Revisit the questions you missed and the topics you are still practising. Your review schedule is worked out in your own browser and stays on your device.",
  },
  paths: {
    title: "Study paths",
    description: "Grouped course routes through the curriculum, with honest coverage figures and a study plan you can build locally.",
  },
  terms: { title: "Terms of use", description: "The terms that apply to MedMosa, including the educational-use scope and the medical disclaimer." },
  privacy: { title: "Privacy policy", description: "What MedMosa stores, where it is stored, and why nothing leaves your device." },
  licensing: { title: "Content licensing and attribution", description: "Where MedMosa's material comes from, how it is licensed and attributed, and how to raise a correction." },
  accessibility: { title: "Accessibility statement", description: "MedMosa's accessibility target, what is implemented today, and the known limitations." },
  error: { title: "Error", description: "Something went wrong loading this page." },
};

function setMetaContent(selector: string, attribute: "name" | "property", value: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function applyDocumentMetadata(title: string, description: string, path: string) {
  const fullTitle = title === "Home" ? "MedMosa — free medical learning, made clear" : `${title} | MedMosa`;
  document.title = fullTitle;

  const url = `${siteOrigin()}${publicHref(path)}`;
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  setMetaContent('meta[name="description"]', "name", "description", description);
  setMetaContent('meta[property="og:title"]', "property", "og:title", fullTitle);
  setMetaContent('meta[property="og:description"]', "property", "og:description", description);
  setMetaContent('meta[property="og:url"]', "property", "og:url", url);
  setMetaContent('meta[property="og:image"]', "property", "og:image", `${siteOrigin()}/og.png`);
  setMetaContent('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
  setMetaContent('meta[name="twitter:description"]', "name", "twitter:description", description);
  setMetaContent('meta[name="twitter:image"]', "name", "twitter:image", `${siteOrigin()}/og.png`);
}

const titleCase = (slug: string) =>
  slug.split("-").map((word) => `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`).join(" ");

/**
 * Breadcrumb names should read like the trail the page renders, not like URL
 * slugs, so resolve everything the app already knows synchronously. Curriculum
 * unit and topic titles are not among them — they live in lazily-loaded
 * bundles — so the route effect passes the deepest segment's real title back
 * in `refinedDeepestTitle` once it has loaded.
 */
function crumbTitleResolver(path: string, refinedDeepestTitle?: string) {
  const segments = segmentsFor(path);
  return (segment: string, index: number): string | undefined => {
    if (refinedDeepestTitle && index === segments.length - 1) return refinedDeepestTitle;
    if (index === 0) return PAGE_METADATA[segment]?.title;
    if (index === 1 && segments[0] === "learn") return getCurriculumSubjectSummary(segment)?.title;
    if (index === 1 && segments[0] === "books") return libraryBook(segment)?.title;
    if (index === 2 && segments[0] === "books") return libraryBook(segments[1])?.chapters.find((chapter) => chapter.slug === segment)?.title;
    if (index === 3 && segments[0] === "books") return bookTopicSummary(segments[1], segments[2], segment)?.topic.title;
    if (index === 1 && segments[0] === "paths") return getStudyPath(segment)?.title;
    if (index === 1 && segments[0] === "subjects") return getSubjectBySlug(segment)?.name;
    if (index === 3 && segments[0] === "subjects") return getLessonBySlug(segments[1], segment)?.title;
    return undefined;
  };
}

function staticMetadataFor(path: string): { title: string; description: string } {
  const segments = segmentsFor(path);
  if (segments[0] === "prototype") return PAGE_METADATA.prototype;
  const known = PAGE_METADATA[segments[0] ?? ""];
  if (!segments.length || (known && segments.length === 1)) {
    return known ?? PAGE_METADATA[""];
  }

  if (segments[0] === "learn") {
    const subject = getCurriculumSubjectSummary(segments[1]);
    if (!subject) return { title: "Page not found", description: "This page is not part of the curriculum." };
    if (segments[2] === "practice") {
      return {
        title: `Practice · ${subject.title}`,
        description: `Practice ${subject.statistics.uniqueQuestionCount} ${subject.title} questions with full answer rationales.`,
      };
    }
    if (segments[3]) {
      return {
        title: titleCase(segments[3]),
        description: `${titleCase(segments[3])} — college-level notes, a plain-language explanation and practice questions from ${subject.title}.`,
      };
    }
    if (segments[2]) {
      return { title: titleCase(segments[2]), description: `${titleCase(segments[2])} — a unit of ${subject.title}.` };
    }
    return {
      title: subject.title,
      description: `${subject.title}: ${subject.statistics.topicCount} topics and ${subject.statistics.uniqueQuestionCount} practice questions, in study order.`,
    };
  }

  if (segments[0] === "books") {
    const book = libraryBook(segments[1]);
    if (!book && segments[1]) return { title: "Page not found", description: "This book is not part of the public library." };
    if (segments[3]) {
      const topic = bookTopicSummary(segments[1], segments[2], segments[3])?.topic;
      if (!topic) return { title: "Page not found", description: "This topic is not part of the public library." };
      return { title: topic.title, description: `${topic.title} — a source-grounded topic from ${book?.title ?? "the learning library"}.` };
    }
    if (book) return { title: book.title, description: `${book.topicCount} topics from this ${book.subjectArea.toLowerCase()} book.` };
    return PAGE_METADATA.books;
  }

  if (segments[0] === "paths" && segments[1]) {
    const studyPath = getStudyPath(segments[1]);
    if (!studyPath) return { title: "Page not found", description: "This study path does not exist." };
    return { title: studyPath.title, description: studyPath.summary };
  }

  if (segments[0] === "subjects" && segments[1]) {
    const subject = getSubjectBySlug(segments[1]);
    if (!subject) return { title: "Page not found", description: "This page is not part of the library." };
    if (segments[3]) {
      const lesson = getLessonBySlug(subject.slug, segments[3]);
      if (!lesson) return { title: "Page not found", description: "This lesson is not part of the library." };
      if (segments[2] === "notes" && !getNoteByLesson(subject.slug, segments[3])) {
        return { title: "Page not found", description: "This note is not part of the library." };
      }
      return { title: lesson.title, description: `${lesson.title} — ${subject.name} lesson ${lesson.lessonNumber}.` };
    }
    if (segments[2]) {
      return { title: `${titleCase(segments[2])} · ${subject.name}`, description: `${titleCase(segments[2])} for ${subject.name}.` };
    }
    return { title: subject.name, description: `${subject.name} lessons, notes and practice questions.` };
  }

  return { title: "Page not found", description: "This page could not be found." };
}

/* -------------------------------------------------------------------------
   App
   ------------------------------------------------------------------------- */

function useQuestions(subjectSlug?: string) {
  const [questions, setQuestions] = useState<readonly Question[]>();
  useEffect(() => {
    let active = true;
    void loadQuestionData().then((module) => {
      if (active) setQuestions(subjectSlug ? module.getQuestionsBySubject(subjectSlug) : module.loadQuestions());
    });
    return () => { active = false; };
  }, [subjectSlug]);
  return questions;
}

function focusMain() {
  requestAnimationFrame(() => document.getElementById("main-content")?.focus());
}

function App() {
  const [path, setPath] = useState(() => appPathFromLocation(window.location.pathname));

  const navigate: Navigate = (nextPath) => {
    const normalized = normalizePath(nextPath);
    if (normalized === path) return;
    window.history.pushState({}, "", publicHref(normalized));
    setPath(normalized);
    window.scrollTo({ top: 0, behavior: "auto" });
    focusMain();
  };

  useEffect(() => {
    // Back/forward has to do the same focus and scroll work as an in-app link,
    // otherwise keyboard and screen-reader users are left focused on the page
    // they just left while the content swaps underneath them.
    const onPopState = () => {
      setPath(appPathFromLocation(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "auto" });
      focusMain();
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    let active = true;
    const fallback = staticMetadataFor(path);
    applyDocumentMetadata(fallback.title, fallback.description, path);

    // Structured data is rewritten from scratch here and torn down again by the
    // cleanup below, so a breadcrumb can never outlive the page it described.
    // The origin carries the deployment base path for the same reason the
    // canonical URL does: on a project page the site does not live at the root.
    const schemaOrigin = `${siteOrigin()}${deploymentBasePath()}`;
    const applySchemas = (title: string, refinedCrumbTitle?: string) => {
      // `staticMetadataFor` returns exactly this title for a route that is not
      // real content; a soft 404 gets no trail describing a page that is not
      // there.
      const crumbs = title === "Page not found"
        ? []
        : crumbsForPath(path, crumbTitleResolver(path, refinedCrumbTitle));
      applyStructuredData([buildWebSiteSchema(schemaOrigin), buildBreadcrumbSchema(schemaOrigin, crumbs)]);
    };
    applySchemas(fallback.title);

    // Curriculum titles live in lazily-loaded bundles, so refine the metadata
    // once the real record is available.
    const segments = segmentsFor(path);
    if (segments[0] === "learn" && segments[1] && segments[2] && segments[2] !== "practice") {
      const refine = (title: string, description: string, crumbTitle?: string) => {
        if (!active) return;
        applyDocumentMetadata(title, description, path);
        applySchemas(title, crumbTitle);
      };
      if (segments[3]) {
        const request = loadCurriculumTopic(segments[1], segments[2], segments[3]);
        if (!request) refine("Page not found", "This topic is not part of the curriculum.");
        else void request.then((topic) => refine(topic.title, `${topic.title} — college-level notes, a plain-language explanation and practice questions.`, topic.title))
          .catch(() => refine("Page not found", "This topic is not part of the curriculum."));
      } else {
        const request = loadCurriculumSubject(segments[1]);
        if (!request) refine("Page not found", "This unit is not part of the curriculum.");
        else void request.then((subject) => {
          const unit = subject.units.find((item) => item.slug === segments[2]);
          if (unit) refine(unit.title, `${unit.title} — ${unit.topics.length} topics in ${subject.subject.title}.`, unit.title);
          else refine("Page not found", "This unit is not part of the curriculum.");
        }).catch(() => refine("Page not found", "This unit is not part of the curriculum."));
      }
    }
    return () => {
      active = false;
      applyStructuredData([]);
    };
  }, [path]);

  if (segmentsFor(path)[0] === "prototype") {
    return (
      <Suspense fallback={<p className="ma-suspense">Loading prototype…</p>}>
        <PrototypeRoutes path={path} navigate={navigate} />
      </Suspense>
    );
  }

  return (
    <AuthProvider>
      <SiteLayout navigate={navigate} currentPath={path}>
        <RouteView path={path} navigate={navigate} />
      </SiteLayout>
      {/* Rendered once at the root so the sheet survives route changes, and
          so nothing inside a page can trap focus behind it. Both render null
          until a Supabase project is configured. */}
      <AuthSheet />
      <AuthToast />
    </AuthProvider>
  );
}

function RouteView({ path, navigate }: { path: string; navigate: Navigate }) {
  const segments = segmentsFor(path);
  // The homepage is the landing page. A returning visitor's dashboard lives at
  // /dashboard and is linked from the header, because the first thing a new
  // visitor sees should explain what this is, not report on progress they do
  // not have yet.
  if (path === "/") return <LearnLandingPage navigate={navigate} />;
  if (path === "/dashboard") return <HomePage navigate={navigate} />;
  if (path === "/subjects") return <LibraryPage navigate={navigate} />;
  if (path === "/notes") return <NotesIndexPage navigate={navigate} />;
  if (path === "/questions") return <PracticeHubPage navigate={navigate} />;
  if (path === "/search") return <SearchPage navigate={navigate} />;
  if (path === "/resources") return <LearningDataPage navigate={navigate} />;
  if (path === "/downloads") return <DownloadsPage navigate={navigate} />;
  if (path === "/about") return <AboutPage navigate={navigate} />;
  // `/learn` is the landing page; every deeper `/learn/...` route is still the
  // curriculum browser, so no course or topic URL changes.
  if (path === "/learn") return <LearnLandingPage navigate={navigate} />;
  if (path === "/diagnostic") return <DiagnosticQuizPage navigate={navigate} />;
  if (path === "/content-review") return <ContentReviewProcessPage navigate={navigate} />;
  if (path === "/editorial-policy") return <EditorialPolicyPage navigate={navigate} />;
  if (path === "/source-citation-policy") return <SourceCitationPolicyPage navigate={navigate} />;
  if (path === "/medical-disclaimer") return <MedicalDisclaimerPage navigate={navigate} />;
  if (path === "/contact") return <ContactPage navigate={navigate} />;
  if (path === "/report-error") return <ReportErrorPage navigate={navigate} />;
  if (path === "/changelog") return <ChangelogPage navigate={navigate} />;
  if (path === "/coverage") return <CoveragePage navigate={navigate} />;
  if (path === "/review") return <ReviewPage navigate={navigate} />;
  if (path === "/paths") return <PathsPage navigate={navigate} />;
  if (path === "/terms") return <TermsPage navigate={navigate} />;
  if (path === "/privacy") return <PrivacyPage navigate={navigate} />;
  if (path === "/licensing") return <LicensingPage navigate={navigate} />;
  if (path === "/accessibility") return <AccessibilityStatementPage navigate={navigate} />;
  if (segments[0] === "paths" && segments[1]) return <PathDetailPage pathSlug={segments[1]} navigate={navigate} />;
  if (path === "/auth/callback") {
    return <p className="notice" role="status">Signing you in…</p>;
  }
  if (path === "/error") {
    return <ErrorState navigate={navigate}>The approved content source could not be read. Try returning to the course list.</ErrorState>;
  }
  if (segments[0] === "learn") return <CurriculumRoutes segments={segments} navigate={navigate} />;
  if (segments[0] === "books") return <BooksRoutes segments={segments} navigate={navigate} />;
  if (segments[0] === "subjects" && segments[1]) return <SubjectRoutes segments={segments} navigate={navigate} />;
  return <NotFoundPage navigate={navigate} />;
}

/* -------------------------------------------------------------------------
   Home
   ------------------------------------------------------------------------- */

const HERO_POINTS = [
  "Every prerequisite in one place — no hunting across eight different sites",
  "Each topic explained twice: college-level, then in plain language",
  "Practice questions that tell you why an answer is right, not just that it is",
];

function HomePage({ navigate }: { navigate: Navigate }) {
  const totals = catalog.totals;
  return (
    <>
      <StudyDashboard navigate={navigate} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">For pre-med, pre-nursing, PA, RT and allied health</p>
            <h2 id="hero-title">Open learning for the health-care path ahead.</h2>
            <p className="lede">
              MedMosa brings {totals.subjects} pre-health courses into one coherent whole —
              college-level notes, plain-language explanations and {totals.uniqueQuestionsAcrossCatalog.toLocaleString("en-US")} practice
              questions with full answer rationales. Free, and it works on your phone.
            </p>
            <ul className="hero-points">
              {HERO_POINTS.map((point) => (
                <li key={point}><CheckIcon />{point}</li>
              ))}
            </ul>
            <div className="action-row">
              <Link href="/learn" navigate={navigate} className="button">Browse all {totals.subjects} courses</Link>
              <Link href="/learn/anatomy-physiology-1" navigate={navigate} className="button button-secondary">Start with A&amp;P I</Link>
            </div>
          </div>

          <aside className="hero-panel" aria-labelledby="quick-start-title">
            <p className="eyebrow">Quick start</p>
            <h2 id="quick-start-title">Jump straight in</h2>
            <ul className="quick-links">
              <li><Link href="/learn" navigate={navigate}><span>All courses</span><span aria-hidden="true">→</span></Link></li>
              <li><Link href="/learn/anatomy-physiology-1" navigate={navigate}><span>Anatomy &amp; Physiology I</span><span aria-hidden="true">→</span></Link></li>
              <li><Link href="/questions" navigate={navigate}><span>Practice questions</span><span aria-hidden="true">→</span></Link></li>
              <li><Link href="/search" navigate={navigate}><span>Search every topic</span><span aria-hidden="true">→</span></Link></li>
              <li><Link href="/about" navigate={navigate}><span>How this works</span><span aria-hidden="true">→</span></Link></li>
            </ul>
          </aside>
        </div>

        <dl className="stat-band" aria-label="What is in the curriculum">
          <div><dt>Courses</dt><dd>{totals.subjects}</dd></div>
          <div><dt>Units</dt><dd>{totals.units}</dd></div>
          <div><dt>Topics</dt><dd>{totals.topics}</dd></div>
          <div><dt>Questions</dt><dd>{totals.uniqueQuestionsAcrossCatalog.toLocaleString("en-US")}</dd></div>
        </dl>
      </section>

      <StartingPoints navigate={navigate} />

      <section className="section-block" aria-labelledby="classic-library-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Also available</p>
            <h2 id="classic-library-title">The classic library</h2>
          </div>
          <Link href="/subjects" navigate={navigate}>Open the classic library</Link>
        </div>
        <p className="lede">
          The original lesson-by-lesson library is still here, with its {loadNotes().length} approved
          Markdown notes and their original URLs. Everything in it is also covered by the courses above.
        </p>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------
   Classic library
   ------------------------------------------------------------------------- */

function SubjectGrid({ navigate }: { navigate: Navigate }) {
  const subjects = loadSubjects();
  const lessons = loadLessons();
  const notes = loadNotes();
  return (
    <div className="card-grid">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.slug}
          subject={subject}
          lessons={lessons.filter((item) => item.subject === subject.slug).length}
          notes={notes.filter((item) => item.subject === subject.slug).length}
          questions={getApprovedQuestionCount(subject.slug)}
          navigate={navigate}
        />
      ))}
    </div>
  );
}

function LibraryPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Classic library" }]} />
      <PageHeader
        eyebrow="Classic library"
        title="Subjects"
        description="The original lesson-by-lesson library. Open a subject to read its approved notes or practice its questions."
        actions={<Link href="/learn" navigate={navigate} className="button">See the full curriculum instead</Link>}
      />
      <div className="notice" role="note">
        <strong>Looking for everything?</strong>
        <p>
          This library covers {loadSubjects().length} subjects. The main curriculum
          covers {catalog.totals.subjects} courses and {catalog.totals.topics} topics, including everything here.
        </p>
      </div>
      <section className="section-block" aria-labelledby="library-subjects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{loadSubjects().length} subjects</p>
            <h2 id="library-subjects">Browse the library</h2>
          </div>
        </div>
        <SubjectGrid navigate={navigate} />
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------
   Practice hub and notes index
   ------------------------------------------------------------------------- */

function PracticeHubPage({ navigate }: { navigate: Navigate }) {
  const withQuestions = catalog.subjects.filter((subject) => subject.statistics.uniqueQuestionCount > 0);
  const withoutQuestions = catalog.subjects.filter((subject) => subject.statistics.uniqueQuestionCount === 0);
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Practice" }]} />
      <PageHeader
        eyebrow="Practice"
        title="Practice questions"
        description={`${catalog.totals.uniqueQuestionsAcrossCatalog.toLocaleString("en-US")} questions across ${withQuestions.length} courses. Every question shows why the right answer is right, and most explain it again in plain language.`}
      />

      <section className="section-block" aria-labelledby="practice-available">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ready now</p>
            <h2 id="practice-available">Choose a course</h2>
          </div>
        </div>
        <div className="card-grid">
          {withQuestions.map((subject) => (
            <article className="card card--accent" key={subject.id}>
              <h3><Link href={curriculumPracticeHref(subject.slug)} navigate={navigate}>{subject.title}</Link></h3>
              <p>{subject.statistics.uniqueQuestionCount.toLocaleString("en-US")} questions · {subject.statistics.topicCount} topics</p>
            </article>
          ))}
        </div>
      </section>

      {withoutQuestions.length > 0 && (
        <section className="section-block" aria-labelledby="practice-pending">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Not yet</p>
              <h2 id="practice-pending">Question banks in progress</h2>
            </div>
          </div>
          <p className="lede">
            These courses have complete teaching notes, but their question banks are still being written.
            You can read and study them now.
          </p>
          <div className="card-grid">
            {withoutQuestions.map((subject) => (
              <article className="card card--muted" key={subject.id}>
                <h3><Link href={curriculumSubjectHref(subject.slug)} navigate={navigate}>{subject.title}</Link></h3>
                <p>{subject.statistics.topicCount} topics with notes · no questions yet</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function NotesIndexPage({ navigate }: { navigate: Navigate }) {
  const subjects = loadSubjects();
  const notes = loadNotes();
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Notes" }]} />
      <PageHeader
        eyebrow="Classic library"
        title="Notes"
        description={`${notes.length} approved Markdown notes, organized by subject. Every course in the main curriculum also has its own teaching notes.`}
        actions={<Link href="/learn" navigate={navigate} className="button">Open the full curriculum</Link>}
      />
      <section className="section-block" aria-labelledby="notes-by-subject">
        <div className="section-heading">
          <div>
            <p className="eyebrow">By subject</p>
            <h2 id="notes-by-subject">Where the notes are</h2>
          </div>
        </div>
        <div className="card-grid">
        {subjects.map((subject) => {
          const count = notes.filter((item) => item.subject === subject.slug).length;
          return count > 0 ? (
            <article className="card" key={subject.slug}>
              <h3><Link href={`${subjectHref(subject.slug)}/notes`} navigate={navigate}>{subject.name}</Link></h3>
              <p>{count} note{count === 1 ? "" : "s"}</p>
            </article>
          ) : (
            <article className="card card--muted" key={subject.slug}>
              <h3>{subject.name}</h3>
              <p className="unavailable">No notes yet</p>
            </article>
          );
        })}
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------
   Legacy subject routes
   ------------------------------------------------------------------------- */

function SubjectRoutes({ segments, navigate }: { segments: string[]; navigate: Navigate }) {
  const subject = getSubjectBySlug(segments[1]);
  if (!subject) return <NotFoundPage navigate={navigate} />;
  if (segments.length === 2) return <SubjectPage subjectSlug={subject.slug} navigate={navigate} />;
  if (segments[2] === "lessons" && segments.length === 3) return <LessonIndex subjectSlug={subject.slug} navigate={navigate} />;
  if (segments[2] === "lessons" && segments[3] && segments.length === 4) return <LessonPage subjectSlug={subject.slug} lessonSlug={segments[3]} navigate={navigate} />;
  if (segments[2] === "notes" && segments.length === 3) return <SubjectNotes subjectSlug={subject.slug} navigate={navigate} />;
  if (segments[2] === "notes" && segments[3] && segments.length === 4) return <NotePage subjectSlug={subject.slug} lessonSlug={segments[3]} navigate={navigate} />;
  if (segments[2] === "questions" && segments.length === 3) return <SubjectQuestions subjectSlug={subject.slug} navigate={navigate} />;
  if (segments[2] === "questions" && segments[3] && segments.length === 4) return <QuestionPage subjectSlug={subject.slug} lessonSlug={segments[3]} navigate={navigate} />;
  return <NotFoundPage navigate={navigate} />;
}

function libraryCrumbs(subjectName: string, subjectSlug: string, tail: Crumbish[] = []): Crumbish[] {
  return [
    { label: "Home", href: "/" },
    { label: "Classic library", href: "/subjects" },
    { label: subjectName, href: subjectHref(subjectSlug) },
    ...tail,
  ];
}

type Crumbish = { label: string; href?: string };

function SubjectPage({ subjectSlug, navigate }: { subjectSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  const lessons = getLessonsBySubject(subjectSlug);
  const notes = getNotesBySubject(subjectSlug);
  const questionCount = getApprovedQuestionCount(subjectSlug);
  const canonical = catalog.subjects.find((item) => item.slug === subjectSlug || (item.legacySlugs ?? []).includes(subjectSlug));

  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Classic library", href: "/subjects" }, { label: subject.name }]} />
      <PageHeader
        eyebrow="Classic library"
        title={subject.name}
        description={lessons.length
          ? "Choose a lesson, read its approved note, or start practising."
          : "This course is listed in the catalog, but no material has cleared review yet."}
        actions={
          <>
            {notes.length > 0 && <Link href={`${subjectHref(subjectSlug)}/notes`} navigate={navigate} className="button">Read notes</Link>}
            {questionCount > 0 && <Link href={questionsHref(subjectSlug)} navigate={navigate} className="button button-secondary">Practice questions</Link>}
            {canonical && <Link href={curriculumSubjectHref(canonical.slug)} navigate={navigate} className="button button-secondary">Open the full course</Link>}
          </>
        }
      />

      <dl className="subject-summary" aria-label={`${subject.name} totals`}>
        <div><dt>Lessons</dt><dd>{lessons.length}</dd></div>
        <div><dt>Notes</dt><dd>{notes.length}</dd></div>
        <div><dt>Questions</dt><dd>{questionCount}</dd></div>
        <div><dt>Format</dt><dd>Markdown</dd></div>
      </dl>

      {subjectSlug === "nclex-review" && (
        <div className="notice" role="note">
          <strong>NCLEX content notice</strong>
          <p>
            No NCLEX-oriented content is published on this site. Anything here is general educational
            material and is not official NCLEX content.
          </p>
        </div>
      )}

      {lessons.length ? (
        <section className="section-block" aria-labelledby="subject-lessons">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Course material</p>
              <h2 id="subject-lessons">Lessons</h2>
            </div>
            <Link href={`${subjectHref(subjectSlug)}/lessons`} navigate={navigate}>Open lesson index</Link>
          </div>
          <LessonList subjectSlug={subjectSlug} navigate={navigate} />
        </section>
      ) : (
        <EmptyState
          title="No approved material yet"
          action={<Link href="/learn" navigate={navigate} className="button">Browse the full curriculum</Link>}
        >
          Content appears here once it completes the approval and audit process. In the meantime, the
          main curriculum may already cover this course.
        </EmptyState>
      )}
    </>
  );
}

function LessonList({ subjectSlug, navigate }: { subjectSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  const lessons = getLessonsBySubject(subjectSlug);
  const notes = getNotesBySubject(subjectSlug);
  const questions = useQuestions(subjectSlug);
  if (!questions) return <LoadingState label="Loading lessons…" />;
  return (
    <div className="lesson-list">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          note={notes.find((note) => note.lesson === lesson.slug)}
          questionCount={questions.filter((question) => question.lesson === lesson.slug).length}
          subjectName={subject.name}
          navigate={navigate}
        />
      ))}
    </div>
  );
}

function LessonIndex({ subjectSlug, navigate }: { subjectSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  return (
    <>
      <Breadcrumbs navigate={navigate} items={libraryCrumbs(subject.name, subjectSlug, [{ label: "Lessons" }])} />
      <PageHeader eyebrow={subject.name} title="Lessons" description="Choose a lesson to read its note or practice the related questions." />
      <LessonList subjectSlug={subjectSlug} navigate={navigate} />
    </>
  );
}

function LessonPage({ subjectSlug, lessonSlug, navigate }: { subjectSlug: string; lessonSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  const lesson = getLessonBySlug(subjectSlug, lessonSlug);
  const note = getNoteByLesson(subjectSlug, lessonSlug);
  const allQuestions = useQuestions(subjectSlug);
  const [source, setSource] = useState<string>();
  const [sourceFailed, setSourceFailed] = useState(false);

  useEffect(() => {
    let active = true;
    if (note) {
      void getNoteSource(note.filePath).then((value) => {
        if (!active) return;
        if (value) setSource(value); else setSourceFailed(true);
      });
    }
    return () => { active = false; };
  }, [note]);

  if (!lesson) return <NotFoundPage navigate={navigate} />;
  if (sourceFailed) return <ErrorState navigate={navigate}>The lesson note is indexed, but its approved Markdown file is unavailable.</ErrorState>;

  const questions = allQuestions?.filter((item) => item.lesson === lessonSlug);
  const lessons = getLessonsBySubject(subjectSlug);
  const index = lessons.findIndex((item) => item.slug === lessonSlug);

  return (
    <>
      <Breadcrumbs navigate={navigate} items={libraryCrumbs(subject.name, subjectSlug, [
        { label: "Lessons", href: `${subjectHref(subjectSlug)}/lessons` },
        { label: lesson.title },
      ])} />
      <PageHeader
        eyebrow={`Lesson ${lesson.lessonNumber} · ${subject.name}`}
        title={lesson.title}
        description={note ? "Read the note, then practice the related questions." : "The study material available for this lesson."}
        actions={questions && questions.length > 0
          ? <Link href={questionsHref(subjectSlug, lessonSlug)} navigate={navigate} className="button">Practice {questions.length} questions</Link>
          : undefined}
      />
      {note && !source && <LoadingState label="Loading note…" />}
      {source && <MarkdownDocument source={stripFrontMatter(source)} />}
      {questions && !note && questions.length > 0 && (
        <article className="card card--accent">
          <p className="badge badge-question">Questions</p>
          <h3>Practice this lesson</h3>
          <p>{questions.length} questions with answer explanations.</p>
          <Link href={questionsHref(subjectSlug, lessonSlug)} navigate={navigate} className="card-link">Start practice →</Link>
        </article>
      )}
      {questions && !note && questions.length === 0 && (
        <EmptyState title="No material for this lesson yet">Return to the subject to choose another lesson.</EmptyState>
      )}
      <PreviousNext
        navigate={navigate}
        previous={index > 0 ? { label: "Previous lesson", title: lessons[index - 1].title, href: lessonHref(subjectSlug, lessons[index - 1].slug) } : undefined}
        next={index < lessons.length - 1 ? { label: "Next lesson", title: lessons[index + 1].title, href: lessonHref(subjectSlug, lessons[index + 1].slug) } : undefined}
        label="Lessons"
      />
    </>
  );
}

function SubjectNotes({ subjectSlug, navigate }: { subjectSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  const notes = getNotesBySubject(subjectSlug);
  const lessonsWithNotes = getLessonsBySubject(subjectSlug).filter((lesson) => notes.some((note) => note.lesson === lesson.slug));
  return (
    <>
      <Breadcrumbs navigate={navigate} items={libraryCrumbs(subject.name, subjectSlug, [{ label: "Notes" }])} />
      <PageHeader eyebrow={subject.name} title="Notes" description={`${notes.length} approved note${notes.length === 1 ? "" : "s"}.`} />
      {lessonsWithNotes.length ? (
        <div className="card-grid">
          {lessonsWithNotes.map((lesson) => (
            <article className="card" key={lesson.id}>
              <p className="badge badge-note">Lesson {lesson.lessonNumber}</p>
              <h3><Link href={noteHref(subjectSlug, lesson.slug)} navigate={navigate}>{lesson.title}</Link></h3>
              <p>Approved study note</p>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState title="No notes yet">Notes appear here after approval and audit.</EmptyState>
      )}
    </>
  );
}

function NotePage({ subjectSlug, lessonSlug, navigate }: { subjectSlug: string; lessonSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  const note = getNoteByLesson(subjectSlug, lessonSlug);
  const lesson = getLessonBySlug(subjectSlug, lessonSlug);
  const allQuestions = useQuestions(subjectSlug);
  const [source, setSource] = useState<string>();
  const [sourceFailed, setSourceFailed] = useState(false);

  useEffect(() => {
    let active = true;
    if (note) {
      void getNoteSource(note.filePath).then((value) => {
        if (!active) return;
        if (value) setSource(value); else setSourceFailed(true);
      });
    }
    return () => { active = false; };
  }, [note]);

  if (!note || !lesson) return <NotFoundPage navigate={navigate} />;
  if (sourceFailed) return <ErrorState navigate={navigate}>The note is indexed, but its approved Markdown file is unavailable.</ErrorState>;

  const notedLessons = getLessonsBySubject(subjectSlug).filter((item) => getNoteByLesson(subjectSlug, item.slug));
  const index = notedLessons.findIndex((item) => item.slug === lessonSlug);
  const relatedQuestions = allQuestions?.filter((item) => item.lesson === lessonSlug);

  return (
    <>
      <Breadcrumbs navigate={navigate} items={libraryCrumbs(subject.name, subjectSlug, [
        { label: "Notes", href: `${subjectHref(subjectSlug)}/notes` },
        { label: note.title },
      ])} />
      <PageHeader
        eyebrow={`Lesson ${lesson.lessonNumber} · Note`}
        title={note.title}
        description={`Approved and audited · ${note.tags.length} tag${note.tags.length === 1 ? "" : "s"}`}
      />
      {note.tags.length > 0 && (
        <div className="tag-row" aria-label="Tags">
          {note.tags.map((tag) => <TagBadge key={tag}>{tag}</TagBadge>)}
        </div>
      )}
      {source ? <MarkdownDocument source={stripFrontMatter(source)} /> : <LoadingState label="Loading note…" />}
      {relatedQuestions && relatedQuestions.length > 0 && (
        <aside className="related-card">
          <div>
            <p className="eyebrow">Keep going</p>
            <h2>Practice related questions</h2>
            <p>{relatedQuestions.length} questions are linked to this lesson.</p>
          </div>
          <Link href={questionsHref(subjectSlug, lessonSlug)} navigate={navigate} className="button">Start practice</Link>
        </aside>
      )}
      <PreviousNext
        navigate={navigate}
        previous={index > 0 ? { label: "Previous note", title: notedLessons[index - 1].title, href: noteHref(subjectSlug, notedLessons[index - 1].slug) } : undefined}
        next={index < notedLessons.length - 1 ? { label: "Next note", title: notedLessons[index + 1].title, href: noteHref(subjectSlug, notedLessons[index + 1].slug) } : undefined}
        label="Lesson notes"
      />
    </>
  );
}

function SubjectQuestions({ subjectSlug, navigate }: { subjectSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  const questions = useQuestions(subjectSlug);
  if (!questions) return <LoadingState label="Loading questions…" />;
  const lessons = getLessonsBySubject(subjectSlug).filter((lesson) => questions.some((question) => question.lesson === lesson.slug));
  return (
    <>
      <Breadcrumbs navigate={navigate} items={libraryCrumbs(subject.name, subjectSlug, [{ label: "Questions" }])} />
      <PageHeader
        eyebrow={subject.name}
        title="Practice questions"
        description={`${questions.length} question${questions.length === 1 ? "" : "s"}, organized by lesson.`}
      />
      {lessons.length ? (
        <div className="practice-list">
          {lessons.map((lesson) => {
            const count = questions.filter((question) => question.lesson === lesson.slug).length;
            return (
              <article key={lesson.id}>
                <div>
                  <p className="eyebrow">Lesson {lesson.lessonNumber}</p>
                  <h3>{lesson.title}</h3>
                  <p>{count} question{count === 1 ? "" : "s"}</p>
                </div>
                <Link href={questionsHref(subjectSlug, lesson.slug)} navigate={navigate} className="button button-secondary">Practice</Link>
              </article>
            );
          })}
        </div>
      ) : (
        <EmptyState title="No questions yet">Questions appear here after approval and audit.</EmptyState>
      )}
    </>
  );
}

function QuestionPage({ subjectSlug, lessonSlug, navigate }: { subjectSlug: string; lessonSlug: string; navigate: Navigate }) {
  const subject = getSubjectBySlug(subjectSlug)!;
  const lesson = getLessonBySlug(subjectSlug, lessonSlug);
  const allQuestions = useQuestions(subjectSlug);
  if (!lesson) return <NotFoundPage navigate={navigate} />;
  const questions = allQuestions?.filter((item) => item.lesson === lessonSlug);
  return (
    <>
      <Breadcrumbs navigate={navigate} items={libraryCrumbs(subject.name, subjectSlug, [
        { label: "Questions", href: questionsHref(subjectSlug) },
        { label: lesson.title },
      ])} />
      <PageHeader
        eyebrow={`${subject.name} · Lesson ${lesson.lessonNumber}`}
        title={lesson.title}
        description="Pick an answer, check it, then read the explanation before you move on."
      />
      {!questions
        ? <LoadingState label="Loading questions…" />
        : questions.length
          ? <QuestionPractice key={`${subjectSlug}-${lessonSlug}`} questions={questions} />
          : <EmptyState title="No questions for this lesson">Return to the subject to choose another lesson.</EmptyState>}
    </>
  );
}

/* -------------------------------------------------------------------------
   Static pages
   ------------------------------------------------------------------------- */

function DownloadsPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Downloads" }]} />
      <PageHeader eyebrow="Offline study" title="Downloads" description="Downloadable study files appear here when they are available." />
      <EmptyState
        title="No downloads yet"
        action={<Link href="/learn" navigate={navigate} className="button">Study online instead</Link>}
      >
        Nothing is available to download right now. Every course page prints cleanly, so you can save a
        topic as a PDF from your browser in the meantime.
      </EmptyState>
    </>
  );
}

function AboutPage({ navigate }: { navigate: Navigate }) {
  const totals = catalog.totals;
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "How this works" }]} />
      <PageHeader
        eyebrow="About MedMosa"
        title="How this works"
        description="Open learning for the health-care path ahead: one curriculum, two explanations of every topic, and practice that tells you why."
      />
      <div className="prose-narrow">
        <h2>Study in four steps</h2>
        <ol>
          <li><strong>Pick a course.</strong> Start from <Link href="/learn" navigate={navigate}>all courses</Link>, or search if you already know the topic.</li>
          <li><strong>Read the topic.</strong> Each topic opens on the college-level explanation.</li>
          <li><strong>Switch to plain language.</strong> The ELI-10 tab explains the same idea without the jargon — useful when the textbook version will not click.</li>
          <li><strong>Practice.</strong> Answer, check, and read why the right answer is right before moving on.</li>
        </ol>

        <h2>What is in here</h2>
        <p>
          {totals.subjects} courses, {totals.units} units and {totals.topics} topics,
          with {totals.teachingTopics} topics carrying full college-level notes,
          {" "}{totals.eli10Topics} carrying a plain-language explanation,
          and {totals.uniqueQuestionsAcrossCatalog.toLocaleString("en-US")} unique practice questions.
        </p>

        <h2>What this is, and what it is not</h2>
        <div className="trust-note">
          <TrustNote />
        </div>

        <h2>Content status — read this</h2>
        <p>
          Coverage is not uniform, and the site says so rather than hiding it. Some courses have
          complete teaching notes but no question bank yet; some question-led courses have practice and
          rationales but no standalone notes yet. Every course card and topic page states what it
          actually has.
        </p>
        <p>
          Where a question's source did not include a structured citation, the question is flagged
          during practice. That flag means the citation could not be verified automatically — not that
          the question is wrong.
        </p>
        <div className="notice" role="note">
          <strong>Study notice</strong>
          <p>
            This is a study aid. It is not guaranteed to be complete or free of error, it is not medical
            advice, and it is not official exam content. Check anything high-stakes against your course
            materials.
          </p>
        </div>

        <h2>Keyboard and screen readers</h2>
        <p>
          Every page is reachable with a keyboard. Use <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> to
          move between controls, <kbd>Space</kbd> to select an answer, <kbd>Enter</kbd> to activate a button or
          link, and <kbd>Escape</kbd> to close the menu. A “Skip to main content” link is the first stop on
          every page, and navigating always moves focus to the top of the new page.
        </p>

        <h2>Privacy</h2>
        <p>
          Search runs entirely in your browser. The site loads no third-party scripts, fonts or
          analytics, and it does not send your study terms anywhere.
        </p>
      </div>
    </>
  );
}

function NotFoundPage({ navigate }: { navigate: Navigate }) {
  return (
    <section className="not-found">
      <p className="error-code">404</p>
      <h1>We could not find that page</h1>
      <p>
        The link may be out of date, or the course or topic may have been renamed. Everything is still
        reachable from the course list.
      </p>
      <div className="action-row">
        <Link href="/learn" navigate={navigate} className="button">Browse all courses</Link>
        <Link href="/search" navigate={navigate} className="button button-secondary">Search instead</Link>
      </div>
    </section>
  );
}

export default App;
