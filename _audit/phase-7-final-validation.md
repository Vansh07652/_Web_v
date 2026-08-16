# Phase 7 — Structured data, and final validation of the whole implementation

Scope of this report: the last build phase (SEO and structured data), and the
end-to-end validation of everything Phases 1 through 7 put into the repository.
It is the last phase report; the narrative summary of the whole implementation
is `final-implementation-summary.md` alongside it.

## Phase objective

Two things.

First, give the site the structured data a search engine can actually verify,
and refuse the structured data it cannot. Concretely:

1. `src/lib/structured-data.ts` — build and inject `WebSite` and
   `BreadcrumbList` (with its `ListItem` entries) per route, and tear the
   injected tags down again when the route changes.
2. `scripts/validate-structured-data.mjs` — a static gate that fails the build
   if any refused schema type appears in that module, or if `index.html` loses
   the crawler-facing tags, or if the canonical and `og:url` tags stop matching
   the exact regexes `scripts/create-github-pages-fallback.mjs` rewrites them
   with.
3. `docs/seo-and-structured-data.md` — what is emitted, what is refused, and
   why.

`Course`, `Quiz`, `Question`, credential types and medical types were declined.
Nothing in this repository documents an instructor, an enrollment, a credential
or a clinical review, and a structured-data claim the project cannot back is
both untrue and a manual-action risk.

Second, run every gate the repository has against the finished implementation
and record the results honestly, including the ones the execution sandbox
cannot run.

## Files inspected

- `index.html` — the head block, the `EducationalOrganization` node, and the
  `SearchAction` that used to sit beside it.
- `src/pages/SearchPage.tsx` — checked for a query-string read. There is none:
  the page keeps its query in component state, so `/search?q=` was never a
  working endpoint.
- `src/App.tsx` — the route effect, `PAGE_METADATA`, the canonical-URL helper
  and `deploymentBasePath()`, which the schema origin has to use for the same
  reason the canonical URL does.
- `src/lib/navigation.ts` — `segmentsFor`, `normalizePath`.
- `scripts/create-github-pages-fallback.mjs` — the canonical and `og:url`
  rewrites, and the `--routes` entry-point generation.
- `scripts/generate-sitemap.mjs`, `scripts/site-routes.mjs` — the shared route
  set, and where the new routes had to be added so the sitemap and the static
  entry points could not drift.
- `src/data/routes.json` — the declarative route contract, 30 patterns.
- `content-v2/catalog.json`, `content-v2/build-report.json`,
  `scripts/validate-all-curricula.mjs` — the hard-coded totals the metadata
  sidecar must not disturb.
- `.github/workflows/ci.yml`, `.github/workflows/deploy-pages.yml` — which
  gates actually run in CI, and what the deploy is conditioned on.
- Every module and script created in Phases 1 through 6, for the final
  cross-phase checks: the import-cycle scan, the route wiring, and the
  three-site study-path declaration.

## Files created

- `src/lib/structured-data.ts` — `buildWebSiteSchema`, `buildBreadcrumbSchema`,
  `crumbsForPath`, `applyStructuredData`. Pure builders plus one DOM writer that
  removes its own tags on teardown, so a breadcrumb can never outlive the page
  it described.
- `scripts/validate-structured-data.mjs` — the static gate described above.
- `tests/unit/structured-data.test.ts` — 23 cases.
- `docs/seo-and-structured-data.md`.
- `_audit/phase-7-final-validation.md` — this report.
- `_audit/final-implementation-summary.md` — the closing summary.
- `docs/development-and-validation.md` — the practical guide to running
  everything in this repository.

## Files updated

- `index.html` — the stale `SearchAction` was removed and replaced with a
  comment recording why. The `EducationalOrganization` node was kept.
- `src/App.tsx` — per-route schema application and teardown, breadcrumb title
  resolution, and `PAGE_METADATA` entries for the seven new top-level routes.
- `scripts/site-routes.mjs` — the new static routes and `STUDY_PATH_SLUGS`.
- `scripts/generate-sitemap.mjs` — priorities for the new routes; the legal
  pages are indexable but ranked last.
- `src/data/routes.json` — the eight new route patterns.
- `package.json` — the new validator scripts.
- `README.md` (in `web/`) and the repository-root `README.md` — the new routes,
  validators and docs.
- `_audit/implementation-change-log.md` — one row per phase.

## Files moved or removed

None. No file was moved, renamed or deleted in this phase or in any earlier
phase of this implementation. The only removal anywhere was the `SearchAction`
JSON-LD block inside `index.html`, which is an edit to a file, not a file
removal.

## User-facing behavior changed

- Every route now carries a `WebSite` node and, below the top level, a
  `BreadcrumbList` whose names are the titles the page actually renders rather
  than URL slugs. Curriculum unit and topic titles arrive from a lazily-loaded
  bundle, so the route effect passes the refined title back once it has loaded.
- A soft 404 gets no breadcrumb trail. A page that is not real content does not
  advertise a trail describing one.
- On a GitHub Pages project deployment the schema origin carries the deployment
  base path, so the emitted URLs match the canonical URL rather than assuming
  the site is served from the domain root.
- Nothing visible on the page changed in this phase. Structured data is
  invisible to a reader.

## Data/schema changes

None in this phase. No file under `content-v2/subjects/` or `content-v2/client/`
was read for anything except verification, and none was written. The only
generated data files this implementation adds are the two sidecars created in
Phase 1, `content-v2/indexes/source-registry.json` and
`content-v2/indexes/topic-metadata.json`, both of which are joined to the corpus
at runtime by topic id and never edit it.

Two schema-adjacent facts worth recording here because they are what the final
validation confirmed:

- `content-v2/catalog.json` and `content-v2/build-report.json` still report
  33 subjects, 153 units, 1,409 topics, 24,400 unique questions and 25,000
  question placements, and `scripts/validate-all-curricula.mjs` still asserts
  those exact numbers. The sidecars did not move any of them.
- `content-v2/indexes/topic-metadata.json` is an interned encoding, not a
  pretty-printed object graph. Its `encoding` block on disk is the contract for
  reading it, and `scripts/validate-metadata.mjs` re-derives the whole file from
  the corpus and compares it byte for byte.

## Test and validation commands run

Run from `web/`:

```bash
npm run validate:source
npm run validate:ap1
npm run validate:curricula
npm run validate:metadata
npm run validate:source-registry
npm run validate:question-quality
npm run validate:study-paths
npm run validate:completeness
npm run validate:routes
npm run validate:architecture
npm run check:links
npm run check:assets
npm run scan:secrets
npm run lint
node scripts/validate-structured-data.mjs
```

Type checking was run as both projects separately, `tsconfig.app.json` and
`tsconfig.node.json`. Unit suites were run one file at a time. Both are
described under Test results, because how they were run is part of the result.

## Test results

### Gate table

| Gate | Result | What it reported |
| --- | --- | --- |
| `npm run validate:source` | **FAIL — `MANIFEST_HASH` only** | See the note below. Everything else in this gate passes: 11 subjects, 121 lessons, 111 notes, 1,032 questions; 0 absolute-path findings; 0 possible secrets. |
| `npm run validate:ap1` | PASS | 8 units; 54 topics; 553 published questions; 26 deferred; 0 errors. |
| `npm run validate:curricula` | PASS | 33 subjects; 153 units; 1,409 topics; 1,047 teaching topics; 24,400 unique questions; 0 errors. |
| `npm run validate:metadata` | PASS | 1,409 entries of 1,409 catalog topics; 1,364 publishable; 352 with a derived difficulty; 64 with `relatedTopics`; 0 errors. |
| `npm run validate:source-registry` | PASS | 136 source records (24 collections, 112 reference hosts); 2 carry a license copied literally from the repository; 0 errors. |
| `npm run validate:question-quality` | PASS | 25,000 questions in 33 courses; 310 carry a computation object and all 310 are gradable, against 23,617 placements whose computation is `null`; 175 distinct unit strings against 30 reviewed units and 139 reviewed answer labels. |
| `npm run validate:study-paths` | PASS | 5 paths declared; 5 mirrored for static generation. |
| `npm run validate:completeness` | PASS | 11 subjects; 121 lessons; 111 notes; 1,032 questions; 2,064 tags; 0 errors. |
| `npm run validate:routes` | PASS | 30 route patterns; 11 canonical subjects. |
| `npm run validate:architecture` | PASS | 37 required artifacts; 67 source files scanned. |
| `npm run check:links` | PASS | 111 note routes and 121 lesson routes. |
| `npm run check:assets` | PASS | 0 approved local asset references. |
| `npm run scan:secrets` | PASS | 0 possible secrets. |
| `node scripts/lint` | PASS | Project lint rules. |
| `node scripts/validate-structured-data.mjs` | PASS | Types emitted: `BreadcrumbList`, `ListItem`, `WebSite`; 15 refused types checked; 6 `index.html` tags checked. |
| `tsc --noEmit -p tsconfig.app.json` | PASS | 0 errors. |
| `tsc --noEmit -p tsconfig.node.json` | PASS | 0 errors. |

**The `validate:source` failure is a stale manifest, not a defect.** Every
finding is `MANIFEST_HASH`, and the gate reports nothing else — no content
error, no absolute path, no secret.

When the code gates above were run, there were four findings:
`src/components/LegalNotice.tsx`, `src/components/ui.tsx`,
`src/lib/progress.ts` and `src/lib/review/scheduler.ts` — exactly the four files
touched by the import-cycle removal described below, which happened after
`manifest.json` was last regenerated. Writing this documentation then added two
more, `README.md` and `_audit/implementation-change-log.md`, both of which are
manifest entries that were edited. The gate now reports six.

The manifest records a SHA-256 per file, so editing any tracked file invalidates
its entry, and documentation is a tracked file like any other. The fix is one
command:

```bash
npm run release:manifest
```

It was deliberately not run as part of writing this documentation, because this
pass was scoped to documentation files and `manifest.json` is not one of them.
**Run it before the next commit**, or CI will fail on the same lines. This is the
single most common way to break this repository's build, and it opens
`docs/development-and-validation.md` for that reason.

### Unit tests

333 tests across 12 suites, all passing, 0 failing:

| Suite | Tests |
| --- | ---: |
| `tests/unit/quiz.test.ts` | 3 |
| `tests/unit/mastery.test.ts` | 19 |
| `tests/unit/review-scheduler.test.ts` | 40 |
| `tests/unit/content-metadata.test.ts` | 13 |
| `tests/unit/study-paths.test.ts` | 22 |
| `tests/unit/planner.test.ts` | 44 |
| `tests/unit/calculation.test.ts` | 56 |
| `tests/unit/speech.test.ts` | 47 |
| `tests/unit/synonyms.test.ts` | 24 |
| `tests/unit/search-filters.test.ts` | 40 |
| `tests/unit/structured-data.test.ts` | 23 |
| `src/tests/navigation.test.ts` | 2 |
| **Total** | **333** |

### The environment limitation, stated plainly

**The execution sandbox cannot run `vitest` or `vite build`.** This is a
property of the sandbox, not of the code, and it is the reason the results above
are phrased the way they are.

The checked-out `node_modules` was installed on macOS/arm64. The npm registry is
unreachable from the sandbox, so the missing platform packages cannot be
fetched. Two of them matter:

- `rolldown` ships only `binding-darwin-arm64`. On linux/x64 `vitest` aborts
  with `Cannot find module './rolldown-binding.wasi.cjs'` before it collects a
  single test, and `vite build` fails the same way.
- `typescript@7.0.2` is a thin wrapper around a native binary. Only
  `@typescript/typescript-darwin-arm64` is present, so `npm run typecheck`
  fails with `Unable to resolve @typescript/typescript-linux-x64`.

The consequences, each stated as what was actually done instead:

1. **Type checking used a different compiler.** Both projects were checked with
   a platform-independent TypeScript **6.0.2** compiler available in the
   sandbox, not the project's TypeScript 7. Both reported zero errors. A
   TypeScript 7 run may still surface something 6.0.2 does not.
2. **Unit tests ran through a shim.** A small local shim mapped the `vitest`
   module onto `node:test` and mapped `expect` onto `node:assert/strict`, with a
   resolver that handles Vite's extensionless imports. The shim lives outside
   the repository and is not committed. The 333 results above are real
   assertions against real modules, but they were not produced by `vitest`.
3. **Five pre-existing suites cannot run locally at all.**
   `src/tests/content.test.ts`, `src/tests/curriculum-v2.test.ts`,
   `src/tests/curriculum-all.test.ts`, `tests/unit/data-layer.test.ts` and
   `tests/integration/search-and-routes.test.ts` all reach
   `src/lib/content/index.ts` or `src/lib/content/curriculum-v2.ts`, which use
   Vite's `import.meta.glob`. That is a build-time transform with no Node
   equivalent, so the modules cannot even be imported outside Vite.
4. **Three more suites did not run under the shim either.**
   `tests/accessibility/semantic-markup.test.tsx` and
   `tests/accessibility/topic-experience.test.tsx` are `.tsx` and need a JSX
   transform the shim does not provide. `src/tests/progress.test.ts` registers
   its cases but they are cancelled by the shim's runner. None of these three is
   evidence of a defect; all three are unrun.
5. **The production build was not run locally.** `npm run build` and
   `npm run build:pages` were not executed. In their place the application was
   smoke-bundled with esbuild during implementation, which completed with no
   unresolved imports and an estimated first-paint entry chunk of
   **668,816 bytes minified / 168,755 bytes gzipped**. Those two figures come
   from that run and could not be re-derived while writing this report, because
   esbuild is not present in the checked-out `node_modules` either. Treat them
   as an order-of-magnitude estimate from a different bundler, not as a
   measurement of the Vite output.

**GitHub Actions runs the real toolchain and gates the deploy on it.**
`.github/workflows/ci.yml` runs `npm ci` on ubuntu-latest with Node 22, which
installs the correct linux/x64 binaries, then runs typecheck, lint, the full
`vitest` suite, the content and route validators, the link, asset and secret
checks, and `npm run build`. `.github/workflows/deploy-pages.yml` runs its own
validation step before it builds, and its deploy job runs only if the build job
succeeds. Nothing reaches the live site without passing the real toolchain.

## Accessibility impact

This phase changed no rendered markup, so its direct accessibility impact is
nil. Structured data is not exposed to assistive technology.

The implementation as a whole added, and this phase verified as still present:

- `ExplanationTabs` implements the ARIA tabs pattern properly — `role="tablist"`
  with an `aria-label`, `role="tab"` with `aria-selected` and `aria-controls`,
  a single `role="tabpanel"`, and left/right arrow-key movement between tabs.
- Read-aloud never autoplays and is driven entirely by explicit controls.
- The legal notice uses `role="note"`, so it is announced as an aside rather
  than as an alert.
- The footer's policy links sit in a `nav` labelled `Legal and policies`.
- `/accessibility` publishes the site's accessibility target, what is
  implemented today, and the known limitations.
- `tests/accessibility/topic-experience.test.tsx` covers the topic experience,
  and `tests/accessibility/semantic-markup.test.tsx` continues to cover the
  shell. Neither could be executed in the sandbox; see the limitation above.

The axe-core browser audit, `npm run test:browser`, requires a production build
and a Chromium binary and was not run.

## Privacy impact

None added, and one thing removed. There is no analytics, no telemetry and no
network call introduced anywhere in this implementation.

- Structured data is computed in the browser from the current route and injected
  into the document. Nothing is sent anywhere.
- The stale `SearchAction` removal makes the site advertise one less endpoint.
- Everything a learner does — answers, mastery, review schedule, study plans,
  the read-aloud rate preference — is written to `localStorage` under keys the
  app owns, is read back from there, and never leaves the device.
  `docs/local-progress-and-privacy.md` is the full account, and `/privacy`
  publishes it.
- `src/lib/speech.ts` uses the browser's own `speechSynthesis` and nothing else.
  No cloud voice service, no audio upload.

## Known limitations

- The structured data is limited to `WebSite`, `BreadcrumbList` and `ListItem`.
  Richer markup would improve search presentation, and it is deliberately not
  emitted because the repository cannot back it.
- `crumbsForPath` cannot name a curriculum unit or topic until its bundle has
  loaded, so the deepest breadcrumb is refined a moment after first paint. A
  crawler that does not execute JavaScript sees no breadcrumb at all; it does
  see the correct per-route canonical URL, which is written into the static
  entry points at build time.
- The `EducationalOrganization` node in `index.html` is static. If the site's
  description changes, that block has to be edited by hand.
- `npm run validate:source` currently fails on four stale manifest hashes, as
  described above.
- The environment limitations above are limitations of this report, not of the
  code, but they do mean that the last time the full `vitest` suite and the real
  Vite production build passed is a CI run, not a local one.

## Deferred work

Carried forward. The full list, with the reason for each, is in
`final-implementation-summary.md`; the items that belong to this phase are:

- **Richer structured data.** `Course`, `Quiz` and `Question` markup would be
  legitimate the day the repository holds an instructor, a credential or a
  documented review to point at. It does not today.
- **A working `SearchAction`.** Give `SearchPage` a query-string read, wire
  `/search?q=` as a real endpoint, and the `SearchAction` node becomes true
  again. `scripts/validate-structured-data.mjs` already permits it on exactly
  that condition.
- **The new validators are not in CI.** `validate:metadata`,
  `validate:source-registry`, `validate:question-quality`,
  `validate:study-paths` and `validate-structured-data.mjs` are registered in
  `package.json` and pass, but neither `.github/workflows/ci.yml` nor
  `.github/workflows/deploy-pages.yml` invokes them. Until they are added, the
  sidecars and the study-path mirror can drift without CI noticing.
- **`npm run release:manifest` is not automated.** Nothing fails fast on a stale
  manifest except `validate:source` itself, at the end.

## Risks or assumptions requiring later review

1. **The canonical-URL rewrite is a regex match against `index.html`.**
   `scripts/create-github-pages-fallback.mjs` rewrites the canonical and
   `og:url` tags by matching an exact string, down to the space before the
   closing slash. Reformat either tag and every static route entry point would
   silently ship the homepage as its canonical URL.
   `scripts/validate-structured-data.mjs` exists mainly to catch that, and it is
   not in CI yet.
2. **The sitemap and the route entry points share one route list, and the study
   paths are mirrored by hand.** `scripts/site-routes.mjs` is the single source
   for the first two; `STUDY_PATH_SLUGS` inside it is a hand-maintained mirror
   of `STUDY_PATHS` in TypeScript, because the generator is plain ESM and cannot
   import a `.ts` module that reads the catalog at load.
   `scripts/validate-study-paths.mjs` guards all three declaration sites. If
   that validator is ever removed, a new study path will 404 on a direct hit.
3. **The copyright and source lines exist twice.** `src/lib/legal.ts` exports
   `LEGAL_COPYRIGHT_LINE` and `LEGAL_SOURCE_LINE`; `src/components/ui.tsx`
   renders those exports, but `SiteLegalFooter` in
   `src/components/LegalNotice.tsx` repeats both strings as literals. They agree
   today. Nothing fails if they stop agreeing.
4. **The contact address in the legal pages is not live.**
   `src/pages/LegalPages.tsx` publishes `contact@medmosa.org` as the route for
   corrections, takedown requests, privacy questions and accessibility problems.
   Either make that mailbox real before launch or change the address. A policy
   page that names an address nobody reads is worse than one that names none.
5. **The bundle-size figure is from a different bundler.** 668,816 bytes
   minified is an esbuild estimate. Vite with rolldown will split and tree-shake
   differently. Check the real number on the first successful CI build; the
   88.0% reduction of the metadata sidecar was done specifically because that
   payload was heading into the first-paint bundle, and the assumption behind
   that work should be confirmed against real output.
6. **The `medically-reviewed` content status is legal in the schema and is never
   emitted.** Nothing in this repository evidences a credentialed clinical
   review. If anyone later starts emitting that status, it must be because a
   review actually happened and is documented, not because a topic looks
   finished.
