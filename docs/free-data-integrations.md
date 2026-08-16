# Free Learning Data Integrations

## Overview

MedMosa's Source Explorer supplements, but never replaces, the site's educational lessons. A learner can open a collapsed **Sources & Evidence** panel on a curriculum topic, search PubMed, and follow direct original-source links. A separate `/resources` page contains an NLM terminology/ICD-10-CM combobox and user-initiated Open Library book discovery.

The static React application stays on GitHub Pages. A Web-Platform-only Cloudflare Worker at `api.medmosa.org` owns provider access, validation, normalization, caching, rate limiting, and CORS. Provider failures remain local to the tool; lesson content and navigation continue to work.

## Providers

| Provider | Purpose and API family | Authentication/identification | Feature flag | Cache | Provider control | UI location |
| --- | --- | --- | --- | --- | --- | --- |
| NCBI PubMed | ESearch + ESummary JSON metadata | `tool=medmosa`, contact email; optional server-only API key | `ENABLE_PUBMED` | Searches 24h; per-PMID metadata 7d | 350ms pacing without a key, 110ms with a key, plus conservative Cloudflare limiter | Collapsed topic panel |
| OpenAlex | Batched Works enrichment by DOI, then PMID | Free server-only API key currently required | `ENABLE_OPENALEX` | 7d | At most two batched calls; bounded 429/5xx/network retry | Inside PubMed cards only when matched |
| NLM Clinical Tables | Conditions and ICD-10-CM search | None | `ENABLE_NLM_TERMINOLOGY` | 7d | Minimum 2 characters; 300ms client debounce and cancellation | `/resources` |
| Open Library | Search API book discovery | Identified `MedMosa/1.0 (contact)` User-Agent | `ENABLE_OPEN_LIBRARY` | 24h | 350ms pacing and conservative Cloudflare limiter | `/resources` |
| CDC | Future population-data abstraction only | Dataset-specific | `ENABLE_CDC_DATA` (default false) | Not active | Refuses enablement without explicit dataset ID and source URL | Not rendered |

The CDC module is intentionally not user-facing. The current MedMosa navigation has no reviewed population-health dataset contract, and the integration never guesses one.

## Environment setup

The flags and public contact values are declared as non-secret Worker variables in `wrangler.jsonc`. Local secrets belong in ignored `.dev.vars`; production secrets belong in Cloudflare.

Required for currently live core modules:

- No secret is required for PubMed, NLM, or Open Library.
- `NCBI_EMAIL` and `MEDMOSA_CONTACT_EMAIL` default to the public `contact@medmosa.org` address in the tracked Worker configuration.

Recommended:

- `NCBI_API_KEY`: raises NCBI's documented per-key allowance; the adapter still uses conservative pacing.
- `OPENALEX_API_KEY`: required by current OpenAlex policy for enrichment. PubMed remains usable when this is absent.

Optional:

- `VITE_SOURCE_API_ORIGIN`: public local/preview API-origin override; never place a credential in it.
- `CDC_DATASET_ID` and `CDC_DATASET_SOURCE_URL`: unused while CDC is disabled.

Set production secrets without printing or committing them:

```bash
npx wrangler secret put OPENALEX_API_KEY
npx wrangler secret put NCBI_API_KEY
```

## Request and response contract

The public API accepts JSON `POST` requests only, keeping raw search strings out of URL/access-query logs:

- `POST /v1/evidence`: `{ "query": string, "filter": "all" | "review" | "guideline" | "recent", "limit": 1..10 }`
- `POST /v1/terminology`: `{ "query": string, "kind": "conditions" | "icd10", "limit": 1..12 }`
- `POST /v1/books`: `{ "query": string, "limit": 1..12 }`
- `GET /v1/health`: provider availability without secret values

Stable errors use `INVALID_QUERY`, `RATE_LIMITED`, `PROVIDER_UNAVAILABLE`, `TIMEOUT`, `NOT_CONFIGURED`, `MALFORMED_PROVIDER_RESPONSE`, or `INTERNAL_ERROR`. Responses never expose upstream bodies, stack traces, filesystem paths, environment data, or credentials.

## Privacy

- MedMosa asks for educational concepts, terminology, literature, and books—not patient data.
- The page explicitly tells learners not to enter names, records, symptoms for diagnosis, or personal health information.
- A search is sent only to the provider needed for the tool the learner uses. After a user-initiated book search, cover images that are present load from Open Library's documented cover host.
- No analytics, trackers, pixels, cookies, fingerprinting, profiling, or raw-query application logging were added.
- Hashed cache keys avoid storing search text in cache URLs.
- Searches use POST bodies rather than URL query strings at the public edge.

## Safety and attribution

The tools are for educational lookup only. They do not perform diagnosis, triage, risk scoring, treatment selection, medication selection, or dosing. Every result links to its original provider and every result group says to verify with the original source.

PubMed abstracts are not displayed because ESummary does not provide them. Citation counts are explicitly labelled as not being quality ratings. Open-access badges and links appear only when OpenAlex reports both an OA work and an OA best location. MedMosa never proxies article or book files. The Search API's availability object is documented as heuristic and does not supply a direct access URL, so the current adapter links to the original Open Library work record rather than inventing a reading link.

## Caching

The Worker caches normalized JSON through Cloudflare's Cache API. Keys include schema version, provider, normalized query/identifier, filter and result limit, then are SHA-256 hashed. Cache values contain their own expiry timestamp as well as an edge `Cache-Control` TTL.

The Cache API is distributed edge cache, not durable global storage: entries are local to the Cloudflare data center handling a request and are not guaranteed to survive eviction or deployment. This is the safest free-compatible fallback for public, re-fetchable metadata and introduces no KV/D1/R2/Durable Object service.

## Rate limiting and resilience

- `PUBLIC_RATE_LIMITER`: 30 endpoint requests per 60 seconds per Cloudflare client IP + route.
- `PUBMED_RATE_LIMITER`: 10 searches/metadata batches per 10 seconds per Cloudflare location. Requests are additionally paced at 350ms without a key or 110ms with a key.
- `OPEN_LIBRARY_RATE_LIMITER`: 20 searches per 10 seconds per Cloudflare location, additionally paced at 350ms.
- OpenAlex enrichment batches DOI and PMID filters instead of performing N+1 requests. Only 429, 5xx, network and timeout failures retry; retries are bounded to two with jitter and a 15-second total budget.
- All provider fetches have fixed allowlisted origins and bounded timeouts.

`CF-Connecting-IP` is accepted only inside the Cloudflare Worker. `X-Forwarded-For` is ignored. A local in-memory limiter exists solely as a development/test fallback; production uses the declared Cloudflare rate-limit bindings. Cloudflare's rate-limit counters and Cache API are location-local, which is documented rather than presented as globally durable coordination.

## Accessibility and failure behavior

The source disclosure does not request data until opened. Controls have associated labels and 44px minimum target heights. Status changes use polite live regions; errors use alerts and retry buttons. The terminology control implements combobox/listbox semantics, arrow navigation, Enter selection, Escape dismissal, visible focus, a 300ms debounce, AbortController cancellation, and stale-response sequence checks. Reduced-motion users do not receive spinner or disclosure rotation animation.

An outage or missing key shows a provider-local state. It never blocks static content, route rendering, the build, or lesson navigation.

## Disabling providers

Set the provider's Worker variable to `false` and deploy with existing dashboard values preserved:

```bash
npx wrangler deploy --keep-vars
```

Disabled routes return a stable `NOT_CONFIGURED` response. `ENABLE_CDC_DATA` must remain `false` until both dataset variables and a reviewed field/refresh contract exist.

## Local development

```bash
npm ci
npm run dev:worker
npm run dev
```

On localhost the browser defaults to `http://127.0.0.1:8787`. Use `VITE_SOURCE_API_ORIGIN` only if Wrangler runs elsewhere. Local `wrangler dev` uses simulated bindings; do not treat local Cache API or rate-limit behavior as proof of production persistence.

## Deployment

`npm run build:worker` performs Worker TypeScript validation and a Wrangler dry-run bundle. `npm run deploy:worker` deploys the isolated API and preserves Cloudflare dashboard secrets. The GitHub workflow `.github/workflows/deploy-source-worker.yml` verifies relevant main-branch changes and deploys when `CLOUDFLARE_API_TOKEN` is configured.

The frontend remains deployed by `.github/workflows/deploy-pages.yml`. No apex DNS record, GitHub Pages custom domain, nameserver, TLS, plan, or unrelated Cloudflare setting is changed by the Worker configuration.

## Smoke-test checklist

1. Run `npm run validate` and `npm run build:worker`.
2. Start the Worker and Vite locally; open a teaching topic.
3. Confirm no provider request is made before opening **Sources & Evidence**.
4. Open the panel, verify the title-derived query, search and change each PubMed filter.
5. Confirm title, authors, journal/date, PMID/DOI, original PubMed link, attribution, and retrieval time.
6. Confirm OpenAlex missing-key degradation and, when configured, verified OA/citation metadata.
7. Open `/resources`; verify the 2-character NLM threshold, rapid typing cancellation, arrow/Enter/Escape operation and both terminology kinds.
8. Search Open Library; confirm records, covers, original links, and that access labels appear only when supplied.
9. Test a provider failure and retry without losing the lesson.
10. Inspect one 320px mobile layout and one desktop layout for overflow and focus visibility.
11. After deployment, check `/v1/health`, all three POST routes, `https://medmosa.org/resources`, and a curriculum topic.

## Official documentation

- [NCBI E-utilities usage guidelines](https://www.ncbi.nlm.nih.gov/books/NBK25497/)
- [NCBI E-utilities parameters and ESummary JSON](https://www.ncbi.nlm.nih.gov/books/NBK25499/)
- [PubMed search filters and field tags](https://pubmed.ncbi.nlm.nih.gov/help/)
- [OpenAlex authentication](https://developers.openalex.org/api-reference/authentication)
- [OpenAlex Works API](https://developers.openalex.org/api-reference/works)
- [OpenAlex filtering and batching](https://developers.openalex.org/guides/filtering)
- [NLM Conditions API](https://clinicaltables.nlm.nih.gov/apidoc/conditions/v3/doc.html)
- [NLM ICD-10-CM API](https://clinicaltables.nlm.nih.gov/apidoc/icd10cm/v3/doc.html)
- [Open Library API policies](https://openlibrary.org/developers/api)
- [Open Library Search API](https://openlibrary.org/dev/docs/api/search)
