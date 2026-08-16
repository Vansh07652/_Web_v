import { describe, expect, it, vi } from "vitest";
import { cached, createMemoryCache } from "../../worker/cache";
import { fetchProviderJson } from "../../worker/http";
import { assertRateLimit } from "../../worker/rate-limit";
import { evidenceFilter, normalizeQuery, resultLimit, terminologyKind } from "../../worker/validation";

describe("source input validation", () => {
  it("rejects empty and too-short queries", () => {
    expect(() => normalizeQuery("", { minimum: 2 })).toThrow("at least 2");
    expect(() => normalizeQuery("a", { minimum: 2 })).toThrow("at least 2");
  });

  it("trims and normalizes legitimate biomedical queries", () => {
    expect(normalizeQuery("  heart   failure  ", { minimum: 2 })).toBe("heart failure");
  });

  it("rejects too-long queries and control characters", () => {
    expect(() => normalizeQuery("a".repeat(11), { minimum: 2, maximum: 10 })).toThrow("under 11");
    expect(() => normalizeQuery("heart\u0000failure", { minimum: 2 })).toThrow("unsupported characters");
  });

  it("allowlists filters and terminology kinds", () => {
    expect(evidenceFilter("review")).toBe("review");
    expect(terminologyKind("icd10")).toBe("icd10");
    expect(() => evidenceFilter("randomized")).toThrow("supported evidence filter");
    expect(() => terminologyKind("diagnosis")).toThrow("conditions or ICD-10-CM");
  });

  it("bounds result counts", () => {
    expect(resultLimit(undefined, 6, 10)).toBe(6);
    expect(resultLimit(10, 6, 10)).toBe(10);
    expect(() => resultLimit(0, 6, 10)).toThrow("between 1 and 10");
    expect(() => resultLimit(11, 6, 10)).toThrow("between 1 and 10");
  });
});

describe("source cache", () => {
  it("handles misses, hits and TTL expiration", async () => {
    let now = 1_000;
    const cache = createMemoryCache(() => now);
    expect(await cache.get("pubmed:key")).toBeUndefined();
    await cache.put("pubmed:key", { title: "hit" }, 10);
    expect(await cache.get("pubmed:key")).toEqual({ title: "hit" });
    now = 11_001;
    expect(await cache.get("pubmed:key")).toBeUndefined();
  });

  it("separates provider keys and avoids duplicate loads on a hit", async () => {
    const cache = createMemoryCache();
    const load = vi.fn(async () => "pubmed-value");
    expect((await cached(cache, "pubmed:heart", 60, load)).cached).toBe(false);
    expect((await cached(cache, "pubmed:heart", 60, load)).cached).toBe(true);
    expect(await cache.get("openlibrary:heart")).toBeUndefined();
    expect(load).toHaveBeenCalledTimes(1);
  });
});

describe("safe provider HTTP", () => {
  it("blocks non-allowlisted origins", async () => {
    await expect(fetchProviderJson("pubmed", new URL("https://evil.example/api"))).rejects.toMatchObject({ payload: { code: "INTERNAL_ERROR" } });
  });

  it("retries a transient 5xx and succeeds", async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response("down", { status: 503 }))
      .mockResolvedValueOnce(Response.json({ ok: true }));
    const value = await fetchProviderJson<{ ok: boolean }>("openalex", new URL("https://api.openalex.org/works"), { retries: 1 }, {
      fetch: fetchMock as typeof fetch,
      sleep: async () => undefined,
      random: () => 0,
    });
    expect(value).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("retries OpenAlex 429 with bounded backoff", async () => {
    const sleep = vi.fn(async () => undefined);
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response("limited", { status: 429, headers: { "retry-after": "1" } }))
      .mockResolvedValueOnce(Response.json({ results: [] }));
    await fetchProviderJson("openalex", new URL("https://api.openalex.org/works"), { retries: 1 }, { fetch: fetchMock as typeof fetch, sleep, random: () => 0 });
    expect(sleep).toHaveBeenCalledWith(1_000);
  });

  it("does not retry permanent 4xx failures", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("bad", { status: 400 }));
    await expect(fetchProviderJson("openalex", new URL("https://api.openalex.org/works"), { retries: 2 }, { fetch: fetchMock as typeof fetch })).rejects.toMatchObject({ payload: { code: "PROVIDER_UNAVAILABLE", retryable: false } });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("normalizes timeout and malformed JSON failures", async () => {
    const timeoutFetch = vi.fn(async (_input: RequestInfo | URL, init?: RequestInit) => {
      await new Promise<void>((_resolve, reject) => init?.signal?.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError"))));
      return Response.json({});
    });
    await expect(fetchProviderJson("nlm", new URL("https://clinicaltables.nlm.nih.gov/api/conditions/v3/search"), { timeoutMs: 1 }, { fetch: timeoutFetch as typeof fetch })).rejects.toMatchObject({ payload: { code: "TIMEOUT" } });
    const malformed = vi.fn().mockResolvedValue(new Response("not json", { status: 200 }));
    await expect(fetchProviderJson("nlm", new URL("https://clinicaltables.nlm.nih.gov/api/conditions/v3/search"), {}, { fetch: malformed as typeof fetch })).rejects.toMatchObject({ payload: { code: "MALFORMED_PROVIDER_RESPONSE" } });
  });
});

describe("public endpoint rate limiting", () => {
  it("accepts a successful native binding result", async () => {
    await expect(assertRateLimit({ limit: async () => ({ success: true }) }, "client", { limit: 1, periodMs: 60_000 })).resolves.toBeUndefined();
  });

  it("returns a stable rate-limit error", async () => {
    await expect(assertRateLimit({ limit: async () => ({ success: false }) }, "client", { limit: 1, periodMs: 60_000 })).rejects.toMatchObject({ payload: { code: "RATE_LIMITED", retryable: true } });
  });
});
