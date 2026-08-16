import type { EvidenceArticle, OpenAlexEnrichment } from "../../src/lib/sources/types";
import { cached } from "../cache";
import { sourceConfig } from "../config";
import { SourceError } from "../errors";
import { fetchProviderJson } from "../http";
import type { ProviderContext } from "./context";

interface OpenAlexLocation {
  landing_page_url?: unknown;
  pdf_url?: unknown;
  is_oa?: unknown;
}

interface OpenAlexWork {
  id?: unknown;
  doi?: unknown;
  cited_by_count?: unknown;
  ids?: unknown;
  open_access?: unknown;
  best_oa_location?: unknown;
}

const TTL = 7 * 24 * 60 * 60;

const normalizedDoi = (value: string) => value.toLowerCase().replace(/^https?:\/\/(?:dx\.)?doi\.org\//, "");

export function parseOpenAlex(payload: unknown, retrievedAt: string) {
  if (!payload || typeof payload !== "object" || !Array.isArray((payload as { results?: unknown }).results)) {
    throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "OpenAlex returned unexpected metadata.", { provider: "openalex" });
  }
  const map = new Map<string, OpenAlexEnrichment>();
  for (const raw of (payload as { results: unknown[] }).results) {
    if (!raw || typeof raw !== "object") throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "OpenAlex returned unexpected work metadata.", { provider: "openalex" });
    const work = raw as OpenAlexWork;
    if (typeof work.id !== "string") throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "OpenAlex returned a work without an identifier.", { provider: "openalex" });
    const ids = work.ids && typeof work.ids === "object" ? work.ids as Record<string, unknown> : {};
    const openAccess = work.open_access && typeof work.open_access === "object" ? work.open_access as Record<string, unknown> : {};
    const location = work.best_oa_location && typeof work.best_oa_location === "object" ? work.best_oa_location as OpenAlexLocation : undefined;
    const isOpenAccess = openAccess.is_oa === true && location?.is_oa === true;
    const enrichment: OpenAlexEnrichment = {
      provider: "openalex",
      providerId: work.id,
      originalUrl: work.id,
      retrievedAt,
      isOpenAccess,
      openAccessStatus: typeof openAccess.oa_status === "string" ? openAccess.oa_status : undefined,
      landingPageUrl: isOpenAccess && typeof location?.landing_page_url === "string" ? location.landing_page_url : undefined,
      pdfUrl: isOpenAccess && typeof location?.pdf_url === "string" ? location.pdf_url : undefined,
      citationCount: Number.isInteger(work.cited_by_count) ? Number(work.cited_by_count) : undefined,
    };
    if (typeof work.doi === "string") map.set(`doi:${normalizedDoi(work.doi)}`, enrichment);
    if (typeof ids.pmid === "string") map.set(`pmid:${ids.pmid.replace(/^https?:\/\/pubmed\.ncbi\.nlm\.nih\.gov\//, "").replace(/\/$/, "")}`, enrichment);
  }
  return map;
}

async function fetchBatch(context: ProviderContext, filter: string, retrievedAt: string) {
  const apiKey = sourceConfig(context.env).openAlex.apiKey;
  if (!apiKey) throw new SourceError("NOT_CONFIGURED", "OpenAlex enrichment requires a server-side API key.", { provider: "openalex" });
  const url = new URL("https://api.openalex.org/works");
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("filter", filter);
  url.searchParams.set("per_page", "100");
  url.searchParams.set("select", "id,doi,ids,cited_by_count,open_access,best_oa_location");
  const payload = await fetchProviderJson<unknown>("openalex", url, { timeoutMs: 6_000, retries: 2, maxTotalMs: 15_000 }, context.http);
  return parseOpenAlex(payload, retrievedAt);
}

export async function enrichEvidence(context: ProviderContext, articles: EvidenceArticle[]) {
  if (!articles.length) return articles;
  const retrievedAt = (context.now?.() ?? new Date()).toISOString();
  const dois = [...new Set(articles.flatMap((article) => article.doi ? [normalizedDoi(article.doi)] : []))];
  const pmids = [...new Set(articles.filter((article) => !article.doi).map((article) => article.pmid))];
  const maps: Array<Map<string, OpenAlexEnrichment>> = [];
  if (dois.length) {
    const result = await cached(context.cache, `v1:openalex:doi:${dois.slice().sort().join("|")}`, TTL, async () => [...(await fetchBatch(context, `doi:${dois.join("|")}`, retrievedAt)).entries()]);
    maps.push(new Map(result.value));
  }
  if (pmids.length) {
    const result = await cached(context.cache, `v1:openalex:pmid:${pmids.slice().sort().join("|")}`, TTL, async () => [...(await fetchBatch(context, `pmid:${pmids.join("|")}`, retrievedAt)).entries()]);
    maps.push(new Map(result.value));
  }
  const combined = new Map(maps.flatMap((map) => [...map.entries()]));
  return articles.map((article) => ({
    ...article,
    openAlex: (article.doi ? combined.get(`doi:${normalizedDoi(article.doi)}`) : undefined) ?? combined.get(`pmid:${article.pmid}`),
  }));
}
