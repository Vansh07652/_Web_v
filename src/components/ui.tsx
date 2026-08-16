import { useEffect, useId, useRef, useState, type MouseEvent, type ReactNode } from "react";
import type { Lesson, Note, Subject } from "../types";
import type { Navigate } from "../lib/navigation";
import { noteHref, publicHref, questionsHref, subjectHref } from "../lib/navigation";
import { AccountControls } from "./auth/AccountControls";
import { LEGAL_COPYRIGHT_LINE, LEGAL_LINKS, LEGAL_SOURCE_LINE } from "../lib/legal";
import { PRIMARY_CTA, SAFETY_DISCLAIMER, SOURCING_ACCURACY_NOTE } from "../content/brand";

/* -------------------------------------------------------------------------
   Icons
   ------------------------------------------------------------------------- */

export function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 10.5 8 14.5 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true" focusable="false">
      <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * The MedMosa mark: nine tesserae on a 3x3 grid. The five forming a plus are
 * inked, the four corners amber. Read one way it is a mosaic, read the other a
 * medical cross — which is the name, so the mark carries it too.
 */
function MosaicIcon() {
  const positions = [1.6, 8.3, 15];
  const cross = new Set(["1,0", "0,1", "1,1", "2,1", "1,2"]);
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false">
      {positions.flatMap((y, row) =>
        positions.map((x, column) => (
          <rect
            key={`${column},${row}`}
            x={x}
            y={y}
            width="5.4"
            height="5.4"
            rx="1.2"
            className={cross.has(`${column},${row}`) ? undefined : "brand-tile"}
            fill={cross.has(`${column},${row}`) ? "currentColor" : undefined}
          />
        )),
      )}
    </svg>
  );
}

/* -------------------------------------------------------------------------
   Link
   ------------------------------------------------------------------------- */

interface LinkProps {
  href: string;
  navigate: Navigate;
  children: ReactNode;
  className?: string;
  "aria-current"?: "page";
}

export function Link({ href, navigate, children, className, "aria-current": ariaCurrent }: LinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      navigate(href);
    }
  };
  return <a href={publicHref(href)} onClick={onClick} className={className} aria-current={ariaCurrent}>{children}</a>;
}

/* -------------------------------------------------------------------------
   Header
   ------------------------------------------------------------------------- */

const PRIMARY_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Learn", "/learn"],
  ["Books", "/books"],
  ["Study paths", "/paths"],
  ["How it works", "/about"],
  ["Sources", "/resources"],
  ["My study", "/dashboard"],
];

export function SiteHeader({ navigate, currentPath }: { navigate: Navigate; currentPath: string }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navigationId = useId();

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  };

  // The disclosure menu closes on Escape, on an outside click, and whenever the
  // route changes; Escape returns focus to the control that opened it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(true); }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const isCurrentSection = (href: string) =>
    href === "/" ? currentPath === "/" : currentPath === href || currentPath.startsWith(`${href}/`);

  const navigateAndClose: Navigate = (path) => { setOpen(false); navigate(path); };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        <Link href="/" navigate={navigateAndClose} className="brand">
          <span className="brand-mark" aria-hidden="true"><MosaicIcon /></span>
          <span className="brand-name">MedMosa</span>
        </Link>

        <div className="header-actions">
          <AccountControls />
        </div>

        <button
          ref={toggleRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls={navigationId}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
          {open ? "Close" : "Menu"}
        </button>

        <nav id={navigationId} aria-label="Primary" className={open ? "site-nav is-open" : "site-nav"}>
          {PRIMARY_LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              navigate={navigateAndClose}
              aria-current={isCurrentSection(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <Link href={PRIMARY_CTA.href} navigate={navigateAndClose} className="button button-small nav-cta">{PRIMARY_CTA.label}</Link>
        </nav>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------
   Footer
   ------------------------------------------------------------------------- */

const FOOTER_COLUMNS: ReadonlyArray<{ title: string; links: ReadonlyArray<readonly [string, string]> }> = [
  {
    title: "Study",
    links: [
      ["All courses", "/learn"],
      ["Anatomy & Physiology I", "/learn/anatomy-physiology-1"],
      ["Practice questions", "/questions"],
      ["Search every topic", "/search"],
    ],
  },
  {
    title: "Classic library",
    links: [
      ["Subjects", "/subjects"],
      ["Notes", "/notes"],
      ["Questions by subject", "/questions"],
      ["Downloads", "/downloads"],
    ],
  },
  {
    title: "Study tools",
    links: [
      ["Review queue", "/review"],
      ["Study paths", "/paths"],
      ["Content coverage", "/coverage"],
      ["Learning resources", "/resources"],
    ],
  },
  {
    title: "About",
    links: [
      ["How this works", "/about"],
      ["Content coverage", "/coverage"],
      ["Sources and licensing", "/licensing"],
      ["Accessibility", "/accessibility"],
    ],
  },
];

/**
 * What the material is made of, and what this site is not. Exported so the
 * footer and the "How it works" page render the same words — a disclaimer that
 * says two different things in two places is worse than one that says nothing.
 */
export function TrustNote() {
  return (
    <p>
      {SOURCING_ACCURACY_NOTE} {SAFETY_DISCLAIMER}
    </p>
  );
}

export function Footer({ navigate }: { navigate: Navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" navigate={navigate} className="brand">
              <span className="brand-mark" aria-hidden="true"><MosaicIcon /></span>
              <span className="brand-name">MedMosa</span>
            </Link>
            <p className="footer-mission">Open learning for the health-care path ahead.</p>
            <p>College-level notes, plain-language explanations and practice questions for pre-health students — organised into one curriculum.</p>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <div className="footer-column" key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={`${column.title}-${label}`}><Link href={href} navigate={navigate}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="trust-note">
          <TrustNote />
        </div>
        <div className="footer-legal">
          <p>Educational study aid. Not medical advice, and not official exam content.</p>
          <div className="legal-footer">
            <p className="legal-footer-copyright">{LEGAL_COPYRIGHT_LINE}</p>
            <p className="legal-footer-sources">{LEGAL_SOURCE_LINE}</p>
            <nav className="legal-footer-nav" aria-label="Legal and policies">
              <ul>
                {LEGAL_LINKS.map(([label, href]) => (
                  <li key={href}><Link href={href} navigate={navigate}>{label}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------
   Page furniture
   ------------------------------------------------------------------------- */

export interface Crumb { label: string; href?: string }

export function Breadcrumbs({ items, navigate }: { items: Crumb[]; navigate: Navigate }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} aria-current={index === items.length - 1 ? "page" : undefined}>
            {item.href ? <Link href={item.href} navigate={navigate}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <header className="page-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="lede">{description}</p>}
      {actions && <div className="action-row">{actions}</div>}
    </header>
  );
}

export function EmptyState({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  const headingId = useId();
  return (
    <section className="empty-state" aria-labelledby={headingId}>
      <p className="empty-icon" aria-hidden="true"><CrossIcon /></p>
      <h2 id={headingId}>{title}</h2>
      <p>{children}</p>
      {action && <div className="action-row">{action}</div>}
    </section>
  );
}

export function ErrorState({ title = "We could not load this page", children, navigate }: { title?: string; children: ReactNode; navigate: Navigate }) {
  return (
    <section className="error-state" role="alert">
      <p className="eyebrow">Something went wrong</p>
      <h1>{title}</h1>
      <p>{children}</p>
      <div className="action-row">
        <Link href="/learn" navigate={navigate} className="button">Browse all courses</Link>
        <Link href="/" navigate={navigate} className="button button-secondary">Go home</Link>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Cards
   ------------------------------------------------------------------------- */

export function CourseCard({
  title, href, topics, questions, notes, description, navigate,
}: {
  title: string;
  href: string;
  topics?: number;
  questions: number;
  notes?: number;
  description: string;
  navigate: Navigate;
}) {
  const empty = !questions && !topics && !notes;
  return (
    <article className={empty ? "card card--muted" : "card card--accent"}>
      <h3><Link href={href} navigate={navigate}>{title}</Link></h3>
      <p>{description}</p>
      <div className="card-foot">
        <dl className="card-stats">
          {topics !== undefined && <div><dt>Topics</dt><dd>{topics}</dd></div>}
          {notes !== undefined && <div><dt>Notes</dt><dd>{notes}</dd></div>}
          <div><dt>Questions</dt><dd>{questions}</dd></div>
        </dl>
      </div>
    </article>
  );
}

export function SubjectCard({ subject, notes, questions, lessons, navigate }: { subject: Subject; notes: number; questions: number; lessons: number; navigate: Navigate }) {
  return (
    <CourseCard
      title={subject.name}
      href={subjectHref(subject.slug)}
      notes={notes}
      questions={questions}
      description={lessons
        ? `${lessons} lesson${lessons === 1 ? "" : "s"} in the classic library.`
        : "Listed in the catalog. No approved material has cleared review yet."}
      navigate={navigate}
    />
  );
}

export function LessonCard({ lesson, note, questionCount, subjectName, navigate }: { lesson: Lesson; note?: Note; questionCount: number; subjectName: string; navigate: Navigate }) {
  return (
    <article className="lesson-card">
      <p className="lesson-number" aria-hidden="true">{String(lesson.lessonNumber).padStart(2, "0")}</p>
      <div>
        <p className="eyebrow">{subjectName}</p>
        <h3>{lesson.title}</h3>
        <p className="lesson-meta">
          {note ? "Note available" : "No note yet"} · {questionCount} practice question{questionCount === 1 ? "" : "s"}
        </p>
        <div className="text-links">
          {note && <Link href={noteHref(lesson.subject, lesson.slug)} navigate={navigate}>Read note</Link>}
          {questionCount > 0 && <Link href={questionsHref(lesson.subject, lesson.slug)} navigate={navigate}>Practice questions</Link>}
        </div>
      </div>
    </article>
  );
}

interface PreviousNextTarget { label: string; title: string; href: string }

export function PreviousNext({ previous, next, label, navigate }: { previous?: PreviousNextTarget; next?: PreviousNextTarget; label: string; navigate: Navigate }) {
  if (!previous && !next) return null;
  return (
    <nav className="previous-next" aria-label={label}>
      {previous
        ? <Link href={previous.href} navigate={navigate}><span>{previous.label}</span><strong>{previous.title}</strong></Link>
        : <span />}
      {next && <Link href={next.href} navigate={navigate}><span>{next.label}</span><strong>{next.title}</strong></Link>}
    </nav>
  );
}

export function TagBadge({ children }: { children: ReactNode }) {
  return <span className="tag-badge">{children}</span>;
}

export function LoadingState({ label = "Loading study content…" }: { label?: string } = {}) {
  return <p className="loading-state" role="status"><span aria-hidden="true" /> {label}</p>;
}
