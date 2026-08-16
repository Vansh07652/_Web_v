import type { SourceResponse } from "../src/lib/sources/types";
import { createEdgeCache, type SourceCache } from "./cache";
import { sourceConfig } from "./config";
import { safeSourceError, SourceError } from "./errors";
import { assertRateLimit } from "./rate-limit";
import { readJsonBody, normalizeQuery, resultLimit, evidenceFilter, terminologyKind } from "./validation";
import { searchPubMed } from "./providers/pubmed";
import { searchNlm } from "./providers/nlm";
import { searchOpenLibrary } from "./providers/open-library";
import type { Env, WorkerContext } from "./types";
import type { HttpDependencies } from "./http";

const PRODUCTION_ORIGINS = new Set(["https://medmosa.org", "https://www.medmosa.org"]);

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true;
  if (PRODUCTION_ORIGINS.has(origin)) return true;
  try {
    const url = new URL(origin);
    return url.protocol === "http:" && (url.hostname === "127.0.0.1" || url.hostname === "localhost");
  } catch {
    return false;
  }
}

function corsHeaders(origin: string | null) {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "referrer-policy": "no-referrer",
    vary: "Origin",
  });
  if (origin && isAllowedOrigin(origin)) headers.set("access-control-allow-origin", origin);
  return headers;
}

function json(body: unknown, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });
}

function routeKey(pathname: string) {
  if (pathname === "/v1/evidence" || pathname === "/v1/terminology" || pathname === "/v1/books") return pathname;
  return "unknown";
}

export interface AppDependencies {
  cache?: SourceCache;
  now?: () => Date;
  http?: Partial<HttpDependencies>;
}

export function createSourceApp(dependencies: AppDependencies = {}) {
  return async function handle(request: Request, env: Env, _context?: WorkerContext) {
    const origin = request.headers.get("origin");
    if (!isAllowedOrigin(origin)) return json({ error: { code: "INVALID_QUERY", message: "Origin not allowed.", retryable: false } }, 403, null);
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      const headers = corsHeaders(origin);
      headers.set("access-control-allow-methods", "POST, OPTIONS");
      headers.set("access-control-allow-headers", "Content-Type");
      headers.set("access-control-max-age", "86400");
      return new Response(null, { status: 204, headers });
    }

    if (request.method === "GET" && url.pathname === "/v1/health") {
      const config = sourceConfig(env);
      return json({
        status: "ok",
        providers: {
          pubmed: config.pubmed.enabled,
          openalex: config.openAlex.enabled && Boolean(config.openAlex.apiKey),
          nlm: config.nlm.enabled,
          openlibrary: config.openLibrary.enabled,
          cdc: config.cdc.enabled && Boolean(config.cdc.datasetId && config.cdc.sourceUrl),
        },
      }, 200, origin);
    }

    if (request.method !== "POST") return json({ error: { code: "INVALID_QUERY", message: "Route not found.", retryable: false } }, 404, origin);

    try {
      const clientIp = request.headers.get("cf-connecting-ip") || "local-development";
      await assertRateLimit(env.PUBLIC_RATE_LIMITER, `${clientIp}:${routeKey(url.pathname)}`, { limit: 30, periodMs: 60_000 });
      const body = await readJsonBody(request);
      const cache = dependencies.cache ?? createEdgeCache();
      const providerContext = { env, cache, now: dependencies.now, http: dependencies.http };
      let data: unknown;

      if (url.pathname === "/v1/evidence") {
        data = await searchPubMed(providerContext, normalizeQuery(body.query, { minimum: 2, maximum: 160 }), evidenceFilter(body.filter), resultLimit(body.limit, 6, 10));
      } else if (url.pathname === "/v1/terminology") {
        data = await searchNlm(providerContext, normalizeQuery(body.query, { minimum: 2, maximum: 100 }), terminologyKind(body.kind), resultLimit(body.limit, 8, 12));
      } else if (url.pathname === "/v1/books") {
        data = await searchOpenLibrary(providerContext, normalizeQuery(body.query, { minimum: 2, maximum: 120 }), resultLimit(body.limit, 8, 12));
      } else {
        throw new SourceError("INVALID_QUERY", "Route not found.");
      }

      const response: SourceResponse<unknown> = { data, retrievedAt: (dependencies.now?.() ?? new Date()).toISOString() };
      return json(response, 200, origin);
    } catch (error) {
      const safe = safeSourceError(error);
      return json({ error: safe.payload }, safe.status, origin);
    }
  };
}

const app = createSourceApp();

export default {
  fetch(request: Request, env: Env, context: WorkerContext) {
    return app(request, env, context);
  },
};
