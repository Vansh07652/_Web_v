import { useEffect, useMemo, useState } from "react";
import { getLessonsBySubject, loadSearchSupport, loadSubjects } from "../lib/content";
import type { Navigate } from "../lib/navigation";
import type { ContentType } from "../types";
import { Breadcrumbs, Link, LoadingState, PageHeader, TagBadge } from "../components/ui";

type SearchSupport = Awaited<ReturnType<typeof loadSearchSupport>>;

export function SearchPage({ navigate }: { navigate: Navigate }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [contentType, setContentType] = useState<ContentType | "all">("all");
  const [lesson, setLesson] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [tag, setTag] = useState("all");
  const [support, setSupport] = useState<SearchSupport>();
  useEffect(() => { void loadSearchSupport().then(setSupport); }, []);
  const subjects = loadSubjects();
  const lessons = subject ? getLessonsBySubject(subject) : [];
  const popularTags = useMemo(() => support ? [...support.loadTags()].sort((a, b) => b.count - a.count) : [], [support]);
  const hasInput = Boolean(query.trim() || subject || contentType !== "all" || lesson || difficulty !== "all" || tag !== "all");
  const results = hasInput && support ? support.searchContent({ query, subject: subject || undefined, contentType, lesson: lesson || undefined, difficulty, tag }) : [];

  const reset = () => { setQuery(""); setSubject(""); setContentType("all"); setLesson(""); setDifficulty("all"); setTag("all"); };
  return (
    <>
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <PageHeader eyebrow="Find study material" title="Search approved content" description="Search notes and questions, then narrow the results with the filters that matter." />
      <section className="search-panel" aria-labelledby="search-controls-title">
        <h2 id="search-controls-title" className="visually-hidden">Search controls</h2>
        <label className="search-field"><span>Keywords</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try a topic or lesson name" /></label>
        <div className="filter-grid">
          <label><span>Subject</span><select value={subject} onChange={(event) => { setSubject(event.target.value); setLesson(""); }}><option value="">All subjects</option>{subjects.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
          <label><span>Content type</span><select value={contentType} onChange={(event) => setContentType(event.target.value as ContentType | "all")}><option value="all">All types</option><option value="note">Notes</option><option value="question">Questions</option></select></label>
          <label><span>Lesson</span><select value={lesson} disabled={!subject} onChange={(event) => setLesson(event.target.value)}><option value="">All lessons</option>{lessons.map((item) => <option key={item.id} value={item.slug}>{item.title}</option>)}</select></label>
          <label><span>Difficulty</span><select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}><option value="all">All levels</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option><option value="unknown">Not specified</option></select></label>
          <label><span>Tag</span><select value={tag} onChange={(event) => setTag(event.target.value)}><option value="all">All tags</option>{popularTags.map((item) => <option key={item.id} value={item.id}>{item.name} ({item.count})</option>)}</select></label>
        </div>
        <button type="button" className="text-button" onClick={reset}>Clear search and filters</button>
      </section>
      <section className="search-results" aria-live="polite" aria-atomic="false">
        {!support && <LoadingState />}
        {support && !hasInput && <div className="search-prompt"><h2>Start with a keyword or filter</h2><p>Results will appear here as you type. Search is local and does not send study terms anywhere.</p></div>}
        {support && hasInput && <h2>{results.length} result{results.length === 1 ? "" : "s"}</h2>}
        {support && hasInput && results.length === 0 && <div className="empty-inline"><h3>No matches found</h3><p>Try fewer keywords, a different subject, or clear one of the filters.</p></div>}
        <div className="result-list">
          {results.map((result) => {
            const subjectName = subjects.find((item) => item.slug === result.subject)?.name ?? result.subject;
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
