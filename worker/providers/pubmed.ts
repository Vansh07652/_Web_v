import type { EvidenceArticle, EvidenceFilter, EvidenceSearchResult } from "../../src/lib/sources/types";
import { cached } from "../cache";
import { sourceConfig } from "../config";
import { SourceError } from "../errors";
import { fetchProviderJson } from "../http";
import { assertRateLimit, paceProvider } from "../rate-limit";
import type { ProviderContext } from "./context";
import { enrichEvidence } from "./openalex";

interface ESearchResponse {
  esearchresult?: { count?: unknown; idlist?: unknown };
}

interface PubMedSummary {
  uid?: unknown;
  title?: unknown;
  fulljournalname?: unknown;
  source?: unknown;
  authors?: unknown;
  pubdate?: unknown;
  articleids?: unknown;
}

interface ESummaryResponse {
  result?: { uids?: unknown; [pmid: string]: unknown };
}

const PUBMED_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
const SEARCH_TTL = 24 * 60 * 60;
const METADATA_TTL = 7 * 24 * 60 * 60;

export const pubMedMinimumInterval = (hasApiKey: boolean) => hasApiKey ? 110 : 350;

function buildTerm(query: string, filter: EvidenceFilter) {
  if (filter === "review") return `(${query}) AND review[pt]`;
  if (filter === "guideline") return `(${query}) AND guideline[pt]`;
  if (filter === "recent") return `(${query}) AND \"last 5 years\"[dp]`;
  return query;
}

function identification(url: URL, email: string, apiKey?: string) {
  url.searchParams.set("tool", "medmosa");
  url.searchParams.set("email", email);
  if (apiKey) url.searchParams.set("api_key", apiKey);
  return url;
}

function stringValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function parsePubMedSearch(payload: unknown) {
  if (!payload || typeof payload !== "object") throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "PubMed returned an unexpected search response.", { provider: "pubmed" });
  const response = payload as ESearchResponse;
  const ids = response.esearchresult?.idlist;
  const total = Number(response.esearchresult?.count);
  if (!Array.isArray(ids) || ids.some((id) => typeof id !== "string") || !Number.isFinite(total)) {
    throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "PubMed returned an unexpected search response.", { provider: "pubmed" });
  }
  return { ids: ids as string[], total };
}

export function parsePubMedSummary(payload: unknown, retrievedAt: string): EvidenceArticle[] {
  if (!payload || typeof payload !== "object") throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "PubMed returned unexpected article metadata.", { provider: "pubmed" });
  const result = (payload as ESummaryResponse).result;
  if (!result || !Array.isArray(result.uids) || result.uids.some((id) => typeof id !== "string")) {
    throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "PubMed returned unexpected article metadata.", { provider: "pubmed" });
  }
  return (result.uids as string[]).map((pmid) => {
    const raw = result[pmid];
    if (!raw || typeof raw !== "object") throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "PubMed returned incomplete article metadata.", { provider: "pubmed" });
    const summary = raw as PubMedSummary;
    const title = stringValue(summary.title);
    if (!title) throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "PubMed returned an article without a title.", { provider: "pubmed" });
    const authors = Array.isArray(summary.authors)
      ? summary.authors.flatMap((author) => author && typeof author === "object" && typeof (author as { name?: unknown }).name === "string" ? [(author as { name: string }).name] : [])
      : [];
    const articleIds = Array.isArray(summary.articleids) ? summary.articleids : [];
    const doi = articleIds.flatMap((identifier) => {
      if (!identifier || typeof identifier !== "object") return [];
      const candidate = identifier as { idtype?: unknown; value?: unknown };
      return candidate.idtype === "doi" && typeof candidate.value === "string" ? [candidate.value] : [];
    })[0];
    return {
      provider: "pubmed",
      providerId: pmid,
      pmid,
      title,
      journal: stringValue(summary.fulljournalname) ?? stringValue(summary.source),
      authors,
      publicationDate: stringValue(summary.pubdate),
      doi,
      originalUrl: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
      retrievedAt,
      attribution: "Data provided by NCBI PubMed.",
    };
  });
}

async function fetchSearch(context: ProviderContext, query: string, filter: EvidenceFilter, limit: number) {
  const config = sourceConfig(context.env).pubmed;
  await assertRateLimit(context.env.PUBMED_RATE_LIMITER, "pubmed:search", { limit: config.apiKey ? 40 : 10, periodMs: 10_000 });
  await paceProvider("pubmed", pubMedMinimumInterval(Boolean(config.apiKey)));
  const url = identification(new URL("esearch.fcgi", PUBMED_BASE), config.email, config.apiKey);
  url.searchParams.set("db", "pubmed");
  url.searchParams.set("retmode", "json");
  url.searchParams.set("retmax", String(limit));
  url.searchParams.set("retstart", "0");
  url.searchParams.set("sort", "pub date");
  url.searchParams.set("term", buildTerm(query, filter));
  const payload = await fetchProviderJson<unknown>("pubmed", url, { timeoutMs: 7_000 }, context.http);
  return parsePubMedSearch(payload);
}

async function fetchMissingMetadata(context: ProviderContext, ids: string[], retrievedAt: string) {
  if (!ids.length) return [];
  const config = sourceConfig(context.env).pubmed;
  await assertRateLimit(context.env.PUBMED_RATE_LIMITER, "pubmed:metadata", { limit: config.apiKey ? 40 : 10, periodMs: 10_000 });
  await paceProvider("pubmed", pubMedMinimumInterval(Boolean(config.apiKey)));
  const url = identification(new URL("esummary.fcgi", PUBMED_BASE), config.email, config.apiKey);
  url.searchParams.set("db", "pubmed");
  url.searchParams.set("retmode", "json");
  url.searchParams.set("id", ids.join(","));
  const payload = await fetchProviderJson<unknown>("pubmed", url, { timeoutMs: 7_000 }, context.http);
  return parsePubMedSummary(payload, retrievedAt);
}

export async function searchPubMed(context: ProviderContext, query: string, filter: EvidenceFilter, limit: number): Promise<EvidenceSearchResult> {
  const config = sourceConfig(context.env);
  if (!config.pubmed.enabled) throw new SourceError("NOT_CONFIGURED", "PubMed search is disabled.", { provider: "pubmed" });
  const retrievedAt = (context.now?.() ?? new Date()).toISOString();
  const search = await cached(context.cache, `v1:pubmed:search:${query.toLowerCase()}:${filter}:${limit}`, SEARCH_TTL, () => fetchSearch(context, query, filter, limit));
  const articles: EvidenceArticle[] = [];
  const missing: string[] = [];
  for (const pmid of search.value.ids) {
    const hit = await context.cache.get<EvidenceArticle>(`v1:pubmed:article:${pmid}`);
    if (hit) articles.push(hit); else missing.push(pmid);
  }
  const fresh = await fetchMissingMetadata(context, missing, retrievedAt);
  await Promise.all(fresh.map((article) => context.cache.put(`v1:pubmed:article:${article.pmid}`, article, METADATA_TTL)));
  const byId = new Map([...articles, ...fresh].map((article) => [article.pmid, article]));
  const ordered = search.value.ids.flatMap((id) => byId.get(id) ? [byId.get(id)!] : []);

  let enrichmentStatus: EvidenceSearchResult["enrichmentStatus"] = "disabled";
  let enriched = ordered;
  if (config.openAlex.enabled) {
    if (!config.openAlex.apiKey) enrichmentStatus = "unconfigured";
    else {
      try {
        enriched = await enrichEvidence(context, ordered);
        enrichmentStatus = "complete";
      } catch {
        enrichmentStatus = "unavailable";
      }
    }
  }

  return {
    provider: "pubmed",
    query,
    filter,
    total: search.value.total,
    articles: enriched,
    enrichmentStatus,
    attribution: "Data provided by NCBI PubMed. Open-access metadata, when shown, is provided by OpenAlex.",
  };
}
