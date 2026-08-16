import { useId, useState, type FormEvent, type SyntheticEvent } from "react";
import { sourceClient, SourceClientError } from "../../lib/sources/client";
import type { EvidenceFilter, EvidenceSearchResult } from "../../lib/sources/types";
import { SourceAttribution } from "./SourceAttribution";
import { SourceStatus } from "./SourceStatus";

const FILTERS: ReadonlyArray<readonly [EvidenceFilter, string]> = [
  ["all", "All literature"],
  ["review", "Review literature"],
  ["guideline", "Guidelines"],
  ["recent", "Recent (5 years)"],
];

const authorSummary = (authors: string[]) => authors.length > 3 ? `${authors.slice(0, 3).join(", ")} +${authors.length - 3} more` : authors.join(", ");

export function EvidenceExplorer({ initialQuery }: { initialQuery: string }) {
  const queryId = useId();
  const filterId = useId();
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState<EvidenceFilter>("all");
  const [result, setResult] = useState<EvidenceSearchResult>();
  const [retrievedAt, setRetrievedAt] = useState<string>();
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [message, setMessage] = useState("");

  const search = async () => {
    const normalized = query.replace(/\s+/g, " ").trim();
    if (normalized.length < 2) {
      setMessage("Enter at least 2 characters.");
      setState("error");
      return;
    }
    setState("loading");
    setMessage("");
    try {
      const response = await sourceClient.evidence({ query: normalized, filter, limit: 6 });
      setResult(response.data);
      setRetrievedAt(response.retrievedAt);
      setState("ready");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMessage(error instanceof SourceClientError ? error.message : "The evidence search could not be completed.");
      setState("error");
    }
  };

  const onSubmit = (event: FormEvent) => { event.preventDefault(); void search(); };
  const onToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    if (event.currentTarget.open && state === "idle") void search();
  };

  return (
    <details className="source-explorer" onToggle={onToggle}>
      <summary>
        <span><span className="eyebrow">Optional source lookup</span>Sources &amp; Evidence</span>
        <span aria-hidden="true">+</span>
      </summary>
      <div className="source-explorer-body">
        <p className="source-intro">Search PubMed using this topic as a starting point. Filters narrow article types or dates; they do not rate evidence quality.</p>
        <form className="source-form" onSubmit={onSubmit}>
          <div className="source-field source-field--grow">
            <label htmlFor={queryId}>Evidence search</label>
            <input id={queryId} value={query} maxLength={160} onChange={(event) => setQuery(event.target.value)} autoComplete="off" />
          </div>
          <div className="source-field">
            <label htmlFor={filterId}>Filter</label>
            <select id={filterId} value={filter} onChange={(event) => setFilter(event.target.value as EvidenceFilter)}>
              {FILTERS.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
            </select>
          </div>
          <button className="button" type="submit" disabled={state === "loading"}>Search PubMed</button>
        </form>

        {state === "loading" && <SourceStatus kind="loading">Searching PubMed and checking configured enrichment…</SourceStatus>}
        {state === "error" && <SourceStatus kind="error" onRetry={() => void search()}>{message}</SourceStatus>}
        {state === "ready" && result && !result.articles.length && <SourceStatus kind="empty">No PubMed results matched this query and filter.</SourceStatus>}

        {state === "ready" && result && result.articles.length > 0 && (
          <div className="source-results" aria-live="polite">
            <p className="source-result-count">Showing {result.articles.length} of {result.total.toLocaleString("en-US")} PubMed result{result.total === 1 ? "" : "s"}.</p>
            {result.enrichmentStatus === "unconfigured" && <p className="source-note">OpenAlex enrichment is unavailable until its server-side API key is configured. PubMed results remain available.</p>}
            <ol className="evidence-list">
              {result.articles.map((article) => (
                <li key={article.pmid} className="evidence-card">
                  <div className="source-badges"><span className="badge">PubMed</span>{article.openAlex?.isOpenAccess && <span className="badge badge-success">Open access</span>}</div>
                  <h3><a href={article.originalUrl} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
                  {article.authors.length > 0 && <p>{authorSummary(article.authors)}</p>}
                  <dl className="source-metadata">
                    {article.journal && <div><dt>Journal</dt><dd>{article.journal}</dd></div>}
                    {article.publicationDate && <div><dt>Published</dt><dd>{article.publicationDate}</dd></div>}
                    <div><dt>PMID</dt><dd>{article.pmid}</dd></div>
                    {article.doi && <div><dt>DOI</dt><dd>{article.doi}</dd></div>}
                  </dl>
                  {article.openAlex && (
                    <div className="openalex-details">
                      {article.openAlex.landingPageUrl && <a href={article.openAlex.landingPageUrl} target="_blank" rel="noopener noreferrer">Open-access location</a>}
                      {article.openAlex.pdfUrl && <a href={article.openAlex.pdfUrl} target="_blank" rel="noopener noreferrer">PDF supplied by OpenAlex</a>}
                      {article.openAlex.citationCount !== undefined && <span>Cited by {article.openAlex.citationCount.toLocaleString("en-US")} works — not a quality rating.</span>}
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <SourceAttribution provider="pubmed" retrievedAt={retrievedAt} />
          </div>
        )}
      </div>
    </details>
  );
}
