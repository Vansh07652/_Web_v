import { describe, expect, it } from "vitest";
import { parsePubMedSearch, parsePubMedSummary, pubMedMinimumInterval } from "../../worker/providers/pubmed";
import { parseOpenAlex } from "../../worker/providers/openalex";
import { parseNlm } from "../../worker/providers/nlm";
import { parseOpenLibrary } from "../../worker/providers/open-library";

const retrievedAt = "2026-08-16T12:00:00.000Z";

describe("provider response normalization", () => {
  it("normalizes PubMed search results", () => {
    expect(parsePubMedSearch({ esearchresult: { count: "42", idlist: ["123", "456"] } })).toEqual({ total: 42, ids: ["123", "456"] });
  });

  it("normalizes PubMed metadata without inventing abstracts", () => {
    const articles = parsePubMedSummary({
      result: {
        uids: ["123"],
        "123": {
          title: "An evidence title",
          fulljournalname: "Example Journal",
          pubdate: "2026 Aug",
          authors: [{ name: "River A" }, { name: "Lee B" }],
          articleids: [{ idtype: "doi", value: "10.1000/example" }],
        },
      },
    }, retrievedAt);
    expect(articles[0]).toMatchObject({ pmid: "123", title: "An evidence title", doi: "10.1000/example", authors: ["River A", "Lee B"] });
    expect(articles[0]).not.toHaveProperty("abstract");
  });

  it("rejects malformed PubMed responses", () => {
    expect(() => parsePubMedSearch({ esearchresult: { count: "bad", idlist: [] } })).toThrow("unexpected search response");
    expect(() => parsePubMedSummary({ result: { uids: ["1"], "1": {} } }, retrievedAt)).toThrow("without a title");
  });

  it("normalizes OpenAlex OA metadata only when both OA signals agree", () => {
    const map = parseOpenAlex({ results: [{
      id: "https://openalex.org/W1",
      doi: "https://doi.org/10.1000/example",
      cited_by_count: 12,
      ids: { pmid: "https://pubmed.ncbi.nlm.nih.gov/123/" },
      open_access: { is_oa: true, oa_status: "gold" },
      best_oa_location: { is_oa: true, landing_page_url: "https://example.edu/article", pdf_url: "https://example.edu/article.pdf" },
    }] }, retrievedAt);
    expect(map.get("doi:10.1000/example")).toMatchObject({ isOpenAccess: true, citationCount: 12, openAccessStatus: "gold" });
    expect(map.get("pmid:123")?.pdfUrl).toBe("https://example.edu/article.pdf");
  });

  it("does not infer OpenAlex OA from a URL alone", () => {
    const map = parseOpenAlex({ results: [{
      id: "https://openalex.org/W2",
      doi: "https://doi.org/10.1000/closed",
      open_access: { is_oa: false },
      best_oa_location: { is_oa: true, landing_page_url: "https://example.edu/article" },
    }] }, retrievedAt);
    expect(map.get("doi:10.1000/closed")).toMatchObject({ isOpenAccess: false, landingPageUrl: undefined, pdfUrl: undefined });
  });

  it("rejects malformed OpenAlex responses", () => {
    expect(() => parseOpenAlex({ results: "not-an-array" }, retrievedAt)).toThrow("unexpected metadata");
  });

  it("normalizes NLM conditions and ICD-10-CM arrays", () => {
    const conditions = parseNlm([1, ["4230"], null, [["Cardiomyopathy"]]], "conditions", "cardio", retrievedAt);
    const icd = parseNlm([1, ["I10"], null, [["I10", "Essential hypertension"]]], "icd10", "hypertension", retrievedAt);
    expect(conditions.results[0]).toMatchObject({ label: "Cardiomyopathy", kind: "conditions" });
    expect(icd.results[0]).toMatchObject({ code: "I10", label: "Essential hypertension", kind: "icd10" });
  });

  it("rejects malformed NLM responses", () => {
    expect(() => parseNlm({ results: [] }, "conditions", "cardio", retrievedAt)).toThrow("unexpected terminology data");
  });

  it("normalizes Open Library records without deriving access URLs", () => {
    const result = parseOpenLibrary({ numFound: 1, docs: [{
      key: "/works/OL1W",
      title: "Anatomy",
      author_name: ["A. Author"],
      first_publish_year: 2020,
      cover_i: 123,
      availability: { status: "open", identifier: "anatomy-example" },
    }] }, "anatomy", retrievedAt);
    expect(result.books[0]).toMatchObject({ title: "Anatomy", firstPublishYear: 2020 });
    expect(result.books[0].accessUrl).toBeUndefined();
  });

  it("does not claim book access when Open Library does not supply it", () => {
    const result = parseOpenLibrary({ numFound: 1, docs: [{ key: "/works/OL2W", title: "Physiology" }] }, "physiology", retrievedAt);
    expect(result.books[0].accessUrl).toBeUndefined();
    expect(result.books[0].accessLabel).toBeUndefined();
  });

  it("rejects malformed Open Library responses", () => {
    expect(() => parseOpenLibrary({ docs: "bad" }, "anatomy", retrievedAt)).toThrow("unexpected book data");
  });

  it("uses NCBI-safe pacing with and without an API key", () => {
    expect(pubMedMinimumInterval(false)).toBe(350);
    expect(pubMedMinimumInterval(true)).toBe(110);
  });
});
