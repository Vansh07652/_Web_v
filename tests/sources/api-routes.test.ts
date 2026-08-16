import { describe, expect, it, vi } from "vitest";
import { createMemoryCache } from "../../worker/cache";
import { createSourceApp } from "../../worker/index";
import type { Env } from "../../worker/types";

const origin = "https://medmosa.org";
const request = (path: string, body: unknown, headers: HeadersInit = {}) => new Request(`https://api.medmosa.org${path}`, {
  method: "POST",
  headers: { origin, "content-type": "application/json", ...headers },
  body: JSON.stringify(body),
});

describe("source API routes", () => {
  it("returns a normalized success envelope", async () => {
    const fetchMock = vi.fn().mockResolvedValue(Response.json([1, ["I10"], null, [["I10", "Essential hypertension"]]]));
    const app = createSourceApp({ cache: createMemoryCache(), now: () => new Date("2026-08-16T12:00:00Z"), http: { fetch: fetchMock as typeof fetch } });
    const response = await app(request("/v1/terminology", { query: "hypertension", kind: "icd10", limit: 5 }), {}, undefined);
    expect(response.status).toBe(200);
    expect(response.headers.get("access-control-allow-origin")).toBe(origin);
    await expect(response.json()).resolves.toMatchObject({
      retrievedAt: "2026-08-16T12:00:00.000Z",
      data: { provider: "nlm", results: [{ code: "I10", label: "Essential hypertension" }] },
    });
  });

  it("returns a stable validation error shape", async () => {
    const app = createSourceApp({ cache: createMemoryCache() });
    const response = await app(request("/v1/books", { query: "x" }), {}, undefined);
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ error: { code: "INVALID_QUERY", retryable: false } });
  });

  it("degrades cleanly when a provider is disabled", async () => {
    const app = createSourceApp({ cache: createMemoryCache() });
    const response = await app(request("/v1/terminology", { query: "heart" }), { ENABLE_NLM_TERMINOLOGY: "false" }, undefined);
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({ error: { code: "NOT_CONFIGURED", provider: "nlm" } });
  });

  it("enforces the public rate-limit binding", async () => {
    const env: Env = { PUBLIC_RATE_LIMITER: { limit: async () => ({ success: false }) } };
    const app = createSourceApp({ cache: createMemoryCache() });
    const response = await app(request("/v1/books", { query: "anatomy" }), env, undefined);
    expect(response.status).toBe(429);
    await expect(response.json()).resolves.toMatchObject({ error: { code: "RATE_LIMITED" } });
  });

  it("rejects untrusted browser origins", async () => {
    const app = createSourceApp({ cache: createMemoryCache() });
    const response = await app(request("/v1/books", { query: "anatomy" }, { origin: "https://evil.example" }), {}, undefined);
    expect(response.status).toBe(403);
    expect(response.headers.get("access-control-allow-origin")).toBeNull();
  });

  it("answers preflight and health checks without provider calls", async () => {
    const app = createSourceApp({ cache: createMemoryCache() });
    const preflight = await app(new Request("https://api.medmosa.org/v1/books", { method: "OPTIONS", headers: { origin } }), {}, undefined);
    expect(preflight.status).toBe(204);
    expect(preflight.headers.get("access-control-allow-methods")).toContain("POST");
    const health = await app(new Request("https://api.medmosa.org/v1/health", { headers: { origin } }), {}, undefined);
    expect(health.status).toBe(200);
    await expect(health.json()).resolves.toMatchObject({ status: "ok", providers: { pubmed: true, openalex: false, nlm: true, openlibrary: true, cdc: false } });
  });
});
