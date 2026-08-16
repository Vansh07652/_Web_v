import type { BookSearchResult } from "../../src/lib/sources/types";
import { cached } from "../cache";
import { sourceConfig } from "../config";
import { SourceError } from "../errors";
import { fetchProviderJson } from "../http";
import { assertRateLimit, paceProvider } from "../rate-limit";
import type { ProviderContext } from "./context";

const TTL = 24 * 60 * 60;

interface OpenLibraryDocument {
  key?: unknown;
  title?: unknown;
  author_name?: unknown;
  first_publish_year?: unknown;
  cover_i?: unknown;
}

export function parseOpenLibrary(payload: unknown, query: string, retrievedAt: string): BookSearchResult {
  if (!payload || typeof payload !== "object" || !Array.isArray((payload as { docs?: unknown }).docs)) {
    throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "Open Library returned unexpected book data.", { provider: "openlibrary" });
  }
  const record = payload as { numFound?: unknown; num_found?: unknown; docs: unknown[] };
  const total = Number(record.numFound ?? record.num_found);
  if (!Number.isFinite(total)) throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "Open Library returned an unexpected result count.", { provider: "openlibrary" });
  const books = record.docs.flatMap((raw) => {
    if (!raw || typeof raw !== "object") return [];
    const document = raw as OpenLibraryDocument;
    if (typeof document.key !== "string" || typeof document.title !== "string") return [];
    return [{
      provider: "openlibrary" as const,
      providerId: document.key,
      title: document.title,
      authors: Array.isArray(document.author_name) ? document.author_name.filter((author): author is string => typeof author === "string").slice(0, 5) : [],
      firstPublishYear: Number.isInteger(document.first_publish_year) ? Number(document.first_publish_year) : undefined,
      coverUrl: Number.isInteger(document.cover_i) ? `https://covers.openlibrary.org/b/id/${document.cover_i}-M.jpg` : undefined,
      originalUrl: `https://openlibrary.org${document.key.startsWith("/") ? document.key : `/${document.key}`}`,
      retrievedAt,
      attribution: "Data provided by Open Library.",
    }];
  });
  return { provider: "openlibrary", query, total, books, attribution: "Data provided by Open Library." };
}

export async function searchOpenLibrary(context: ProviderContext, query: string, limit: number) {
  const config = sourceConfig(context.env).openLibrary;
  if (!config.enabled) throw new SourceError("NOT_CONFIGURED", "Open Library search is disabled.", { provider: "openlibrary" });
  return (await cached(context.cache, `v1:openlibrary:${query.toLowerCase()}:${limit}`, TTL, async () => {
    await assertRateLimit(context.env.OPEN_LIBRARY_RATE_LIMITER, "openlibrary:search", { limit: 20, periodMs: 10_000 });
    await paceProvider("openlibrary", 350);
    const url = new URL("https://openlibrary.org/search.json");
    url.searchParams.set("q", query);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("fields", "key,title,author_name,first_publish_year,cover_i");
    const payload = await fetchProviderJson<unknown>("openlibrary", url, {
      timeoutMs: 7_000,
      headers: { "user-agent": `MedMosa/1.0 (${config.contactEmail})` },
    }, context.http);
    return parseOpenLibrary(payload, query, (context.now?.() ?? new Date()).toISOString());
  })).value;
}
