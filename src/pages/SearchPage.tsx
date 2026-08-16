import { useEffect, useMemo, useState } from "react";
import { getLessonsBySubject, loadSearchSupport, loadSubjects } from "../lib/content";
import { loadCurriculumCatalog, loadCurriculumSearchIndex } from "../lib/content/curriculum-v2";
import { bookSearchIndex } from "../lib/book-library";
import type { Navigate } from "../lib/navigation";
import type { ContentType, CurriculumSearchEntryV2 } from "../types";
import { Breadcrumbs, Link, LoadingState, PageHeader, TagBadge } from "../components/ui";

type SearchSupport = Awaited<ReturnType<typeof loadSearchSupport>>;
type SearchContentType = ContentType | "topic" | "book-topic" | "all";
const curriculumCatalog = loadCurriculumCatalog();
const normalized = (value: string) => value.toLocaleLowerCase().trim();
const queryTokens = (value: string) => normalized(value).split(/[^\p{L}\p{N}]+/u).filter(Boolean);

export function SearchPage({ navigate }: { navigate: Navigate }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [contentType, setContentType] = useState<SearchContentType>("all");
  const [lesson, setLesson] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [tag, setTag] = useState("all");
  const [support, setSupport] = useState<SearchSupport>();
  const [curriculumIndex, setCurriculumIndex] = useState<CurriculumSearchEntryV2[]>();
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let active = true;
    void Promise.all([loadSearchSupport(), loadCurriculumSearchIndex()]).then(([loadedSupport, loadedCurriculum]) => {
      if (!active) return;
      setSupport(loadedSupport);
      setCurriculumIndex(loadedCurriculum);
    }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, []);

  const legacySubjects = loadSubjects();
  const subjects = useMemo(() => {
    const options = curriculumCatalog.subjects.map((item) => ({ slug: item.slug, name: item.title }));
    const coveredLegacySlugs = new Set(curriculumCatalog.subjects.flatMap((item) => item.legacySlugs ?? []));
    for (const item of legacySubjects) if (!coveredLegacySlugs.has(item.slug)) options.push({ slug: item.slug, name: item.name });
    return options.sort((a, b) => a.name.localeCompare(b.name));
  }, [legacySubjects]);
  const canonicalSubject = curriculumCatalog.subjects.find((item) => item.slug === subject);
  const legacySubjectSlugs = canonicalSubject?.legacySlugs ?? (subject ? [subject] : []);
  const lessons = legacySubjectSlugs.flatMap((slug) => getLessonsBySubject(slug));
  const popularTags = useMemo(() => support ? [...support.loadTags()].sort((a, b) => b.count - a.count) : [], [support]);
  const hasInput = Boolean(query.trim() || subject || contentType !== "all" || lesson || difficulty !== "all" || tag !== "all");
  const legacyResults = hasInput && support && contentType !== "topic" && contentType !== "book-topic" ? support.searchContent({
    query,
    contentType: contentType === "all" ? "all" : contentType,
    lesson: lesson || undefined,
    difficulty,
    tag,
  }).filter((result) => !subject || legacySubjectSlugs.includes(result.subject)) : [];
  const curriculumResults = useMemo(() => {
    if (!hasInput || !curriculumIndex || !["all", "topic"].includes(contentType) || lesson || difficulty !== "all" || tag !== "all") return [];
    const tokens = queryTokens(query);
    return curriculumIndex.filter((entry) => {
      if (subject && entry.subjectSlug !== subject) return false;
      if (!tokens.length) return true;
      const searchable = normalized([entry.topicTitle, entry.unitTitle, entry.subjectTitle, ...entry.aliases].join(" "));
      return tokens.every((token) => searchable.includes(token));
    });
  }, [contentType, curriculumIndex, difficulty, hasInput, lesson, query, subject, tag]);
  const bookResults = useMemo(() => {
    if (!hasInput || !["all", "book-topic"].includes(contentType) || lesson || difficulty !== "all" || tag !== "all") return [];
    const tokens = queryTokens(query);
    return bookSearchIndex().filter((entry) => {
      if (subject) return false;
      if (!tokens.length) return true;
      return tokens.every((token) => normalized([entry.title, entry.chapter.title, entry.book.title, ...entry.aliases].join(" ")).includes(token));
    });
  }, [contentType, difficulty, hasInput, lesson, query, subject, tag]);
  const resultCount = legacyResults.length + curriculumResults.length + bookResults.length;

  const reset = () => { setQuery(""); setSubject(""); setContentType("all"); setLesson(""); setDifficulty("all"); setTag("all"); };
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <PageHeader eyebrow="Find study material" title="Search all study content" description="Search canonical curriculum topics, notes, and questions, then narrow the results with optional filters." />
      <section className="search-panel" aria-labelledby="search-controls-title">
        <h2 id="search-controls-title" className="visually-hidden">Search controls</h2>
        <label className="search-field"><span>Keywords</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try a topic, subject, or lesson name" /></label>
        <div className="filter-grid">
          <label><span>Subject</span><select value={subject} onChange={(event) => { setSubject(event.target.value); setLesson(""); }}><option value="">All subjects</option>{subjects.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
          <label><span>Content type</span><select value={contentType} onChange={(event) => { const next = event.target.value as SearchContentType; setContentType(next); if (next === "topic" || next === "book-topic") { setLesson(""); setDifficulty("all"); setTag("all"); } }}><option value="all">All types</option><option value="topic">Curriculum topics</option><option value="book-topic">Book topics</option><option value="note">Notes</option><option value="question">Questions</option></select></label>
          <label><span>Lesson</span><select value={lesson} disabled={!subject || !lessons.length || contentType === "topic"} onChange={(event) => setLesson(event.target.value)}><option value="">All lessons</option>{lessons.map((item) => <option key={item.id} value={item.slug}>{item.title}</option>)}</select></label>
          <label><span>Difficulty</span><select value={difficulty} disabled={contentType === "topic"} onChange={(event) => setDifficulty(event.target.value)}><option value="all">All levels</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option><option value="unknown">Not specified</option></select></label>
          <label><span>Tag</span><select value={tag} disabled={contentType === "topic"} onChange={(event) => setTag(event.target.value)}><option value="all">All tags</option>{popularTags.map((item) => <option key={item.id} value={item.id}>{item.name} ({item.count})</option>)}</select></label>
        </div>
        <button type="button" className="text-button" onClick={reset}>Clear search and filters</button>
      </section>
      <section className="search-results" aria-live="polite" aria-atomic="false">
        {!failed && (!support || !curriculumIndex) && <LoadingState />}
        {failed && <div className="empty-inline"><h3>Search could not load</h3><p>Reload the page and try again.</p></div>}
        {!failed && support && curriculumIndex && !hasInput && <div className="search-prompt"><h2>Start with a keyword or filter</h2><p>Results will appear here as you type. Search is local and does not send study terms anywhere.</p></div>}
        {!failed && support && curriculumIndex && hasInput && <h2>{resultCount} result{resultCount === 1 ? "" : "s"}</h2>}
        {!failed && support && curriculumIndex && hasInput && resultCount === 0 && <div className="empty-inline"><h3>No matches found</h3><p>Try fewer keywords, a different subject, or clear one of the filters.</p></div>}
        <div className="result-list">
          {curriculumResults.map((result) => (
            <article key={`topic-${result.id}`} className="result-card">
              <div className="result-labels"><span className="content-badge topic">topic</span><span>{result.subjectTitle}</span><span>{result.unitTitle}</span></div>
              <h3><Link href={result.href} navigate={navigate}>{result.topicTitle}</Link></h3>
              <p>{result.availability.collegeNotes ? "College-level teaching note" : "Question-led foundation"} · {result.availability.eli10 ? "ELI‑10 available" : "ELI‑10 source gap"} · {result.availability.exactQuestions} exact questions</p>
            </article>
          ))}
          {bookResults.map((result) => (
            <article key={result.id} className="result-card"><div className="result-labels"><span className="content-badge topic">book topic</span><span>{result.book.title}</span><span>{result.chapter.title}</span></div><h3><Link href={result.href} navigate={navigate}>{result.title}</Link></h3><p>{result.book.subjectArea} learning library</p></article>
          ))}
          {legacyResults.map((result) => {
            const subjectName = legacySubjects.find((item) => item.slug === result.subject)?.name ?? result.subject;
            return (
              <article key={`${result.contentType}-${result.id}`} className="result-card">
                <div className="result-labels"><span className={`content-badge ${result.contentType}`}>{result.contentType}</span><span>{subjectName}</span>{result.difficulty && <span>{result.difficulty}</span>}</div>
                <h3><Link href={result.href} navigate={navigate}>{result.title}</Link></h3>
                <p>{result.excerpt}</p>
                {result.tags.length > 0 && <div className="tag-row" aria-label="Tags">{result.tags.map((item) => <TagBadge key={item}>{item}</TagBadge>)}</div>}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
