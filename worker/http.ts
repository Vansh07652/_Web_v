import type { SourceProvider } from "../src/lib/sources/types";
import { SourceError } from "./errors";

const PROVIDER_ORIGINS: Record<SourceProvider, ReadonlySet<string>> = {
  pubmed: new Set(["https://eutils.ncbi.nlm.nih.gov"]),
  openalex: new Set(["https://api.openalex.org"]),
  nlm: new Set(["https://clinicaltables.nlm.nih.gov"]),
  openlibrary: new Set(["https://openlibrary.org"]),
  cdc: new Set(["https://data.cdc.gov"]),
};

export interface HttpOptions {
  headers?: HeadersInit;
  timeoutMs?: number;
  retries?: number;
  maxTotalMs?: number;
}

export interface HttpDependencies {
  fetch: typeof fetch;
  sleep(milliseconds: number): Promise<void>;
  random(): number;
}

const defaults: HttpDependencies = {
  fetch: globalThis.fetch.bind(globalThis),
  sleep: (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
  random: Math.random,
};

const isTransientStatus = (status: number) => status === 429 || status >= 500;

export async function fetchProviderJson<T>(provider: SourceProvider, url: URL, options: HttpOptions = {}, dependencies: Partial<HttpDependencies> = {}): Promise<T> {
  if (!PROVIDER_ORIGINS[provider].has(url.origin)) throw new SourceError("INTERNAL_ERROR", "A provider request was blocked by the origin allowlist.");
  const deps = { ...defaults, ...dependencies };
  const timeoutMs = Math.min(options.timeoutMs ?? 7_000, 10_000);
  const retries = Math.min(options.retries ?? 0, 2);
  const maxTotalMs = Math.min(options.maxTotalMs ?? 15_000, 20_000);
  const started = Date.now();

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await deps.fetch(url, { method: "GET", headers: options.headers, signal: controller.signal });
      if (!response.ok) {
        if (isTransientStatus(response.status) && attempt < retries && Date.now() - started < maxTotalMs) {
          const retryAfter = Number(response.headers.get("retry-after"));
          const delay = Number.isFinite(retryAfter) && retryAfter > 0
            ? Math.min(retryAfter * 1_000, 4_000)
            : Math.min(250 * 2 ** attempt + deps.random() * 150, 2_000);
          await deps.sleep(delay);
          continue;
        }
        if (response.status === 429) throw new SourceError("RATE_LIMITED", "The source is receiving too many requests. Try again shortly.", { provider, retryable: true });
        if (response.status === 401 || response.status === 403) throw new SourceError("NOT_CONFIGURED", "This source is not configured for access.", { provider });
        throw new SourceError("PROVIDER_UNAVAILABLE", "The original source is temporarily unavailable.", { provider, retryable: response.status >= 500 });
      }
      try {
        return await response.json() as T;
      } catch (error) {
        throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "The original source returned an unexpected response.", { provider, cause: error });
      }
    } catch (error) {
      if (error instanceof SourceError) throw error;
      if (error instanceof DOMException && error.name === "AbortError") {
        if (attempt < retries && Date.now() - started < maxTotalMs) continue;
        throw new SourceError("TIMEOUT", "The original source took too long to respond.", { provider, retryable: true, cause: error });
      }
      if (attempt < retries && Date.now() - started < maxTotalMs) {
        await deps.sleep(Math.min(250 * 2 ** attempt + deps.random() * 150, 2_000));
        continue;
      }
      throw new SourceError("PROVIDER_UNAVAILABLE", "The original source could not be reached.", { provider, retryable: true, cause: error });
    } finally {
      clearTimeout(timer);
    }
  }
  throw new SourceError("PROVIDER_UNAVAILABLE", "The original source could not be reached.", { provider, retryable: true });
}
