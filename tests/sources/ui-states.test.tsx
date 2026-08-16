import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { SourceAttribution } from "../../src/components/sources/SourceAttribution";
import { SourceStatus } from "../../src/components/sources/SourceStatus";
import { LearningDataPage } from "../../src/pages/LearningDataPage";
import { TERMINOLOGY_DEBOUNCE_MS } from "../../src/components/sources/TerminologyLookup";

describe("learning-data UI states and semantics", () => {
  it("renders an announced loading state", () => {
    const html = renderToStaticMarkup(<SourceStatus kind="loading">Searching…</SourceStatus>);
    expect(html).toContain('role="status"');
    expect(html).toContain('aria-live="polite"');
    expect(html).toContain("Searching…");
  });

  it("renders an alert with a retry action for errors", () => {
    const html = renderToStaticMarkup(<SourceStatus kind="error" onRetry={() => undefined}>Unavailable</SourceStatus>);
    expect(html).toContain('role="alert"');
    expect(html).toContain("Try again");
  });

  it("renders an honest empty state", () => {
    const html = renderToStaticMarkup(<SourceStatus kind="empty">No results.</SourceStatus>);
    expect(html).toContain("No results.");
    expect(html).not.toContain("Try again");
  });

  it("always renders provider attribution and educational warning", () => {
    const html = renderToStaticMarkup(<SourceAttribution provider="pubmed" retrievedAt="2026-08-16T12:00:00Z" />);
    expect(html).toContain("NCBI PubMed");
    expect(html).toContain("Educational use only");
    expect(html).toContain("original source");
  });

  it("renders labelled, keyboard-oriented terminology controls and privacy guidance", () => {
    const html = renderToStaticMarkup(<LearningDataPage navigate={() => undefined} />);
    expect(html).toContain('role="combobox"');
    expect(html).toContain('aria-autocomplete="list"');
    expect(html).toContain("Do not enter patient names");
    expect(html).toContain("Terminology and coding reference only");
    expect(html).toContain("Related Books &amp; Learning Resources");
  });

  it("uses the documented 300ms terminology debounce", () => {
    expect(TERMINOLOGY_DEBOUNCE_MS).toBe(300);
  });
});
