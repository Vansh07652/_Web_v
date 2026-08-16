import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { sourceClient, SourceClientError } from "../../lib/sources/client";
import type { TerminologyKind, TerminologySearchResult } from "../../lib/sources/types";
import { SourceAttribution } from "./SourceAttribution";
import { SourceStatus } from "./SourceStatus";

export const TERMINOLOGY_DEBOUNCE_MS = 300;

export function TerminologyLookup() {
  const inputId = useId();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<TerminologyKind>("conditions");
  const [result, setResult] = useState<TerminologySearchResult>();
  const [retrievedAt, setRetrievedAt] = useState<string>();
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [message, setMessage] = useState("Enter at least 2 characters.");
  const [activeIndex, setActiveIndex] = useState(-1);
  const requestNumber = useRef(0);

  useEffect(() => {
    const normalized = query.replace(/\s+/g, " ").trim();
    requestNumber.current += 1;
    const current = requestNumber.current;
    if (normalized.length < 2) {
      setState("idle");
      setResult(undefined);
      setMessage("Enter at least 2 characters.");
      setActiveIndex(-1);
      return;
    }
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      setState("loading");
      setMessage("Looking up terminology…");
      void sourceClient.terminology({ query: normalized, kind, limit: 8 }, controller.signal).then((response) => {
        if (requestNumber.current !== current) return;
        setResult(response.data);
        setRetrievedAt(response.retrievedAt);
        setActiveIndex(response.data.results.length ? 0 : -1);
        setState("ready");
        setMessage(response.data.results.length ? `${response.data.results.length} suggestions available.` : "No terminology matches found.");
      }).catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        if (requestNumber.current !== current) return;
        setState("error");
        setMessage(error instanceof SourceClientError ? error.message : "Terminology lookup failed.");
      });
    }, TERMINOLOGY_DEBOUNCE_MS);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [query, kind]);

  const options = result?.results ?? [];
  const select = (index: number) => {
    const option = options[index];
    if (!option) return;
    setQuery(option.code ? `${option.code} — ${option.label}` : option.label);
    setMessage(`Selected ${option.label}.`);
    setActiveIndex(index);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!options.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((index) => (index + direction + options.length) % options.length);
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      select(activeIndex);
    } else if (event.key === "Escape") {
      setResult(undefined);
      setActiveIndex(-1);
      setMessage("Suggestions closed.");
    }
  };

  return (
    <section className="learning-data-panel" aria-labelledby={`${inputId}-heading`}>
      <p className="eyebrow">NLM terminology</p>
      <h2 id={`${inputId}-heading`}>Terminology &amp; coding lookup</h2>
      <p>Terminology and coding reference only — not diagnostic guidance.</p>
      <div className="source-form source-form--lookup">
        <div className="source-field source-field--grow">
          <label htmlFor={inputId}>Search educational terminology</label>
          <input
            id={inputId}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={options.length > 0}
            aria-controls={listId}
            aria-activedescendant={activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
            autoComplete="off"
            maxLength={100}
          />
        </div>
        <div className="source-field">
          <label htmlFor={`${inputId}-kind`}>Reference</label>
          <select id={`${inputId}-kind`} value={kind} onChange={(event) => setKind(event.target.value as TerminologyKind)}>
            <option value="conditions">Medical conditions</option>
            <option value="icd10">ICD-10-CM</option>
          </select>
        </div>
      </div>
      <p className="source-live" role="status" aria-live="polite">{message}</p>
      {state === "loading" && <SourceStatus kind="loading">Looking up NLM terminology…</SourceStatus>}
      {state === "error" && <SourceStatus kind="error">{message}</SourceStatus>}
      {state === "ready" && !options.length && <SourceStatus kind="empty">No terminology matches found.</SourceStatus>}
      <ul id={listId} role="listbox" className="terminology-list">
        {options.map((option, index) => (
          <li key={`${option.kind}-${option.providerId}`} role="option" id={`${listId}-${index}`} aria-selected={activeIndex === index}>
            <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => select(index)}>
              {option.code && <strong>{option.code}</strong>}<span>{option.label}</span>
            </button>
          </li>
        ))}
      </ul>
      {options.length > 0 && <SourceAttribution provider="nlm" retrievedAt={retrievedAt} />}
    </section>
  );
}
