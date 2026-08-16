import { useId, useState, type FormEvent } from "react";
import { sourceClient, SourceClientError } from "../../lib/sources/client";
import type { BookSearchResult } from "../../lib/sources/types";
import { SourceAttribution } from "./SourceAttribution";
import { SourceStatus } from "./SourceStatus";

export function RelatedBooks() {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<BookSearchResult>();
  const [retrievedAt, setRetrievedAt] = useState<string>();
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [message, setMessage] = useState("");

  const search = async () => {
    const normalized = query.replace(/\s+/g, " ").trim();
    if (normalized.length < 2) { setMessage("Enter at least 2 characters."); setState("error"); return; }
    setState("loading");
    try {
      const response = await sourceClient.books({ query: normalized, limit: 8 });
      setResult(response.data);
      setRetrievedAt(response.retrievedAt);
      setState("ready");
    } catch (error) {
      setMessage(error instanceof SourceClientError ? error.message : "Book discovery failed.");
      setState("error");
    }
  };
  const onSubmit = (event: FormEvent) => { event.preventDefault(); void search(); };

  return (
    <section className="learning-data-panel" aria-labelledby={`${inputId}-heading`}>
      <p className="eyebrow">Open Library</p>
      <h2 id={`${inputId}-heading`}>Related Books &amp; Learning Resources</h2>
      <p>Find book metadata and follow links to the original Open Library record. MedMosa does not infer that a book is free to read.</p>
      <form className="source-form" onSubmit={onSubmit}>
        <div className="source-field source-field--grow">
          <label htmlFor={inputId}>Book or subject</label>
          <input id={inputId} value={query} onChange={(event) => setQuery(event.target.value)} maxLength={120} autoComplete="off" placeholder="e.g. anatomy and physiology" />
        </div>
        <button className="button" type="submit" disabled={state === "loading"}>Find books</button>
      </form>
      {state === "loading" && <SourceStatus kind="loading">Searching Open Library…</SourceStatus>}
      {state === "error" && <SourceStatus kind="error" onRetry={() => void search()}>{message}</SourceStatus>}
      {state === "ready" && result && !result.books.length && <SourceStatus kind="empty">No Open Library records matched this search.</SourceStatus>}
      {state === "ready" && result && result.books.length > 0 && (
        <div className="source-results" aria-live="polite">
          <p className="source-result-count">Showing {result.books.length} of {result.total.toLocaleString("en-US")} matching records.</p>
          <ul className="book-grid">
            {result.books.map((book) => (
              <li className="book-card" key={book.providerId}>
                {book.coverUrl ? <img src={book.coverUrl} alt="" width="128" height="192" loading="lazy" /> : <div className="book-cover-placeholder" aria-hidden="true">Book</div>}
                <div>
                  <h3><a href={book.originalUrl} target="_blank" rel="noopener noreferrer">{book.title}</a></h3>
                  {book.authors.length > 0 && <p>{book.authors.join(", ")}</p>}
                  {book.firstPublishYear && <p>First published {book.firstPublishYear}</p>}
                  {book.accessUrl && book.accessLabel && <a href={book.accessUrl} target="_blank" rel="noopener noreferrer">{book.accessLabel}</a>}
                </div>
              </li>
            ))}
          </ul>
          <SourceAttribution provider="openlibrary" retrievedAt={retrievedAt} />
        </div>
      )}
    </section>
  );
}
