import { useEffect, useMemo, useState } from "react";
import { Breadcrumbs, EmptyState, Link, LoadingState, PageHeader, PreviousNext } from "../components/ui";
import { MarkdownDocument } from "../components/MarkdownDocument";
import { StudyUseNotice } from "../components/LegalNotice";
import { bookHref, bookTopicHref, libraryBook, libraryBooks, libraryTotals, loadBookTopic, type LibraryTopic } from "../lib/book-library";
import type { Navigate } from "../lib/navigation";

export function BooksRoutes({ segments, navigate }: { segments: string[]; navigate: Navigate }) {
  if (segments.length === 1) return <BooksCatalog navigate={navigate} />;
  const book = libraryBook(segments[1]);
  if (!book) return <BooksNotFound navigate={navigate} />;
  if (segments.length === 2) return <BookPage bookSlug={book.slug} navigate={navigate} />;
  if (segments.length === 4) return <BookTopicPage bookSlug={book.slug} chapterSlug={segments[2]} topicSlug={segments[3]} navigate={navigate} />;
  return <BooksNotFound navigate={navigate} />;
}

function BooksCatalog({ navigate }: { navigate: Navigate }) {
  const [area, setArea] = useState<"All" | "Nursing" | "Science">("All");
  const totals = libraryTotals();
  const books = libraryBooks().filter((book) => area === "All" || book.subjectArea === area);
  return <>
    <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Books" }]} />
    <div className="books-intro">
      <PageHeader eyebrow="Learning library" title="Books for nursing and science" description={`${totals.books} open educational books and ${totals.topics.toLocaleString("en-US")} source-grounded topics, organized in their original chapter order.`} />
    </div>
    <div className="filter-bar books-filter" aria-label="Book subject filter">
      <label htmlFor="book-area">Subject area</label>
      <select id="book-area" value={area} onChange={(event) => setArea(event.target.value as typeof area)}><option>All</option><option>Nursing</option><option>Science</option></select>
    </div>
    <section className="section-block" aria-labelledby="books-title">
      <h2 id="books-title">{area === "All" ? "All books" : `${area} books`}</h2>
      <div className="unit-grid books-grid">{books.map((book, index) => <article className="unit-card book-card" key={book.slug} data-book-tone={index % 3}>
        <div className="book-card-cover" aria-hidden="true"><span>MedMosa<br />Library</span><i /><b>{String(index + 1).padStart(2, "0")}</b></div>
        <p className="eyebrow">{book.subjectArea} · {book.topicCount} topics</p>
        <h3><Link href={bookHref(book.slug)} navigate={navigate}>{book.title}</Link></h3>
        <p>{book.chapters.length} chapters. Original study-guide content with visible source information.</p>
        <Link className="button button-secondary" href={bookHref(book.slug)} navigate={navigate}>Open book</Link>
      </article>)}</div>
    </section>
  </>;
}

function BookPage({ bookSlug, navigate }: { bookSlug: string; navigate: Navigate }) {
  const book = libraryBook(bookSlug)!;
  const first = book.chapters[0]?.topics[0];
  return <>
    <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Books", href: "/books" }, { label: book.title }]} />
    <PageHeader eyebrow={`${book.subjectArea} · ${book.topicCount} topics`} title={book.title} description="Read in chapter order, or jump directly to a topic. This material is educational and source-grounded; it is not medical advice." actions={first ? <Link className="button" href={bookTopicHref(book.slug, book.chapters[0].slug, first.slug)} navigate={navigate}>Start reading</Link> : undefined} />
    <section className="notice" aria-label="Source information"><strong>Source and provenance</strong><p>{book.source.provenance} {book.source.license ? `License: ${book.source.license}.` : "License details are retained only where documented by the source."}</p></section>
    <section className="section-block" aria-labelledby="chapters-title"><h2 id="chapters-title">Chapters</h2><div className="unit-grid">{book.chapters.map((chapter) => <article className="unit-card" key={chapter.slug}>
      <p className="eyebrow">Chapter {chapter.order}</p><h3>{chapter.title}</h3><ol>{chapter.topics.map((topic) => <li key={topic.slug}><Link href={bookTopicHref(book.slug, chapter.slug, topic.slug)} navigate={navigate}>{topic.title}</Link></li>)}</ol>
    </article>)}</div></section>
  </>;
}

function BookTopicPage({ bookSlug, chapterSlug, topicSlug, navigate }: { bookSlug: string; chapterSlug: string; topicSlug: string; navigate: Navigate }) {
  const book = libraryBook(bookSlug)!;
  const chapter = book.chapters.find((item) => item.slug === chapterSlug);
  const [topic, setTopic] = useState<LibraryTopic>();
  const [failed, setFailed] = useState(false);
  useEffect(() => { let active = true; setTopic(undefined); setFailed(false); const load = loadBookTopic(bookSlug, chapterSlug, topicSlug); if (!load) setFailed(true); else void load.then((result) => { if (active) setTopic(result); }).catch(() => { if (active) setFailed(true); }); return () => { active = false; }; }, [bookSlug, chapterSlug, topicSlug]);
  const allTopics = useMemo(() => book.chapters.flatMap((item) => item.topics.map((topicItem) => ({ chapter: item, topic: topicItem }))), [book]);
  if (!chapter || failed) return <BooksNotFound navigate={navigate} />;
  if (!topic) return <LoadingState label="Loading topic…" />;
  const index = allTopics.findIndex((item) => item.chapter.slug === chapterSlug && item.topic.slug === topicSlug);
  return <>
    <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Books", href: "/books" }, { label: book.title, href: bookHref(book.slug) }, { label: chapter.title }, { label: topic.title }]} />
    <PageHeader eyebrow={`${book.title} · Chapter ${chapter.order} · Topic ${topic.order}`} title={topic.title} description={`A topic from ${book.title}.`} />
    <section className="notice" aria-label="Topic source"><strong>Source</strong><p>{topic.provenance.sourceUrl ? <a href={topic.provenance.sourceUrl}>Documented source page</a> : "The source is documented in the local library record."} · Educational use only; not medical advice.</p></section>
    <article className="topic-panel"><MarkdownDocument source={topic.markdown} /></article>
    {book.subjectArea === "Nursing" && <StudyUseNotice />}
    <PreviousNext navigate={navigate} label="Topics" previous={index > 0 ? { label: "Previous topic", title: allTopics[index - 1].topic.title, href: bookTopicHref(book.slug, allTopics[index - 1].chapter.slug, allTopics[index - 1].topic.slug) } : undefined} next={index >= 0 && index < allTopics.length - 1 ? { label: "Next topic", title: allTopics[index + 1].topic.title, href: bookTopicHref(book.slug, allTopics[index + 1].chapter.slug, allTopics[index + 1].topic.slug) } : undefined} />
  </>;
}

function BooksNotFound({ navigate }: { navigate: Navigate }) { return <EmptyState title="We could not find that book topic" action={<Link href="/books" navigate={navigate} className="button">Browse books</Link>}>The book may be excluded, still in development, or the link may be out of date.</EmptyState>; }
