# MedMosa

MedMosa is a static, mobile-first learning website for pre-health students. It provides a 39-course curriculum, open nursing and science books, practice questions with answer rationales, and local-only search and study tools.

## Subjects

- Biology 1 (`biology-1`)
- Biology 2 (`biology-2`)
- Organic Chemistry 1 (`organic-chemistry-1`)
- Organic Chemistry 2 (`organic-chemistry-2`)
- General Chemistry 1 (`chemistry-1`)
- General Chemistry 2 (`chemistry-2`)
- Physics 1 (`physics-1`)
- Physics 2 (`physics-2`)
- Microbiology (`microbiology`)
- Genetics (`genetics`)
- NCLEX Review (`nclex-review`)

## Technology and requirements

The frontend uses React 19, TypeScript 7, Vite 8, and plain CSS. A small Web-Platform-only Cloudflare Worker serves the optional public-source lookups without moving the static site away from GitHub Pages. Vitest covers unit, integration, and semantic accessibility checks; Playwright Core and axe-core run production browser and WCAG audits.

Use Node.js `20.19+` or `22.12+` and npm `10+`. The npm lockfile is authoritative.

## Install, develop, and build

```bash
npm ci
npm run dev
```

Create and preview the production build with:

```bash
npm run build
npm run preview
npm run dev:worker
```

The production site is written to ignored `dist/`. `npm run build:pages` creates the custom-domain root build, route-specific static metadata, canonical route entries, and the GitHub Pages `404.html` fallback.

## Test and validate

```bash
npm run typecheck          # strict TypeScript checks
npm run lint               # project lint and type checks
npm run test:unit          # unit and source-layer tests
npm run test:integration   # integration tests
npm run test:accessibility # semantic accessibility tests
npm test                   # all Vitest suites
npm run validate:source    # approved content, relationships, hashes, and paths
npm run validate:routes    # route registry and canonical subject slugs
npm run validate:architecture
npm run validate:curricula # v2 corpus totals and source/client mirror equivalence
npm run validate:metadata  # re-derives the topic metadata sidecar and compares it byte for byte
npm run validate:source-registry   # re-derives the source registry the same way
npm run validate:question-quality  # answerable multiple choice, gradable numeric entry, unit table
npm run validate:study-paths       # study paths, route mirror, and routes.json agree
node scripts/validate-structured-data.mjs  # refused schema types, and the canonical-URL rewrite
npm run check:links
npm run check:assets
npm run scan:secrets
npm run test:browser       # production routes, flows, responsive layout, and axe
npm run release:inventory  # regenerate approved content inventories
npm run release:manifest   # regenerate the SHA-256 release manifest
npm run validate:release   # verify release cleanliness and metadata
npm run validate           # complete app validation, build, and browser audit
```

For final release validation, run `npm ci`, generate the inventory and manifest, run `npm run validate`, regenerate the manifest after any report changes, remove ignored `node_modules/` and `dist/` from the release copy, and finish with `npm run validate:release`. Only commands that pass are represented as passing in `release-validation-report.md`.

**Editing any tracked file invalidates its manifest hash.** `npm run validate:source` will then fail with `MANIFEST_HASH: <path>` until `npm run release:manifest` is re-run. This is the most common way to break the build; `docs/development-and-validation.md` opens with it.

The CI workflow runs the core type, lint, test, content, metadata, security, route, link, asset, and build validation checks on every push and pull request.

## Study routes and tools

Beyond the subject library and the `/learn` curriculum, the site serves:

- `/coverage` — what each of the 33 v2 courses actually contains: college notes, plain-language explanations, cited references, questions, and how many are flagged for citation review
- `/review` — local mastery per topic and a spaced-repetition queue on a `[1, 3, 7, 14, 30, 60]`-day interval ladder
- `/paths` and `/paths/:pathSlug` — five study paths whose course membership is computed from the catalog, plus a local study planner
- `/resources` — optional NLM terminology/ICD-10-CM lookup and user-initiated Open Library book discovery
- `/terms`, `/privacy`, `/licensing`, `/accessibility` — the policy pages, linked from every footer

`src/data/routes.json` holds the route patterns. Adding a top-level route means editing that file, `src/App.tsx` and `scripts/site-routes.mjs` together, or the route will have no static entry point and no sitemap line.

## Free Learning Data Integrations

Topic pages include a collapsed, on-demand PubMed evidence explorer. OpenAlex enriches deterministic PubMed matches with citation and lawful open-access metadata when its required server-side API key is configured. `/resources` provides NLM condition and ICD-10-CM terminology lookup plus user-initiated Open Library discovery. CDC is represented only by a disabled, configuration-validating adapter because no reviewed MedMosa public-health dataset is currently in scope.

The browser sends each query only to the MedMosa Worker endpoint for the selected tool. Provider credentials remain server-side; responses are normalized, attributed, bounded, rate-limited, cached, and allowed to fail without blocking lessons. See [`docs/free-data-integrations.md`](docs/free-data-integrations.md) for configuration, provider policies, privacy, caching, local development, deployment, and smoke tests.

Progress, mastery, review schedule, study-plan inputs and the read-aloud rate preference are stored in `localStorage` and never transmitted. Read-aloud uses the browser's own `speechSynthesis` and no external service.

## Generated content sidecars

`content-v2/indexes/` holds two generated files that sit beside the curriculum corpus and are joined to it at runtime by topic id. Neither edits, overrides or shadows anything under `content-v2/subjects/` or `content-v2/client/`.

```bash
npm run build:source-registry   # 136 source records: 24 collections, 112 reference hosts
npm run build:topic-metadata    # 1,317 topics, interned encoding
npm run build:coverage-report   # _audit/coverage-report.json and .md
```

Build the source registry first; the topic metadata references its ids. Never hand-edit either file — both validators re-derive them from the corpus and compare byte for byte, so a hand edit fails the gate. `topic-metadata.json` is interned rather than pretty-printed because it is statically imported and would otherwise put 842,493 bytes into the first-paint bundle; the `encoding` block inside the file is the contract for reading it.

## Documentation

`docs/` holds the engineering documentation; `_audit/` holds the phase-by-phase implementation record.

- `docs/development-and-validation.md` — how to run development, tests, every validator, the browser audit and the Pages build; how to regenerate the sidecars and change the curriculum totals safely
- `docs/content-governance.md`, `docs/source-and-license-policy.md`, `docs/topic-metadata-guide.md`, `docs/content-statuses.md` — the content model
- `docs/local-progress-and-privacy.md`, `docs/review-algorithm.md`, `docs/study-paths.md` — practice, review and planning
- `docs/text-to-speech.md`, `docs/search-and-discovery.md`, `docs/seo-and-structured-data.md` — speech, search and structured data
- `docs/legal-and-licensing.md` — the policy pages and what they claim
- `docs/free-data-integrations.md` — provider contracts, Worker configuration, safeguards, deployment, and smoke tests
- `_audit/final-implementation-summary.md` — the closing summary of the whole implementation
- `_audit/coverage-report.md` — generated, per-course coverage

## Directory structure

- `src/` — React UI, routes, content selectors, styles, and source-layer tests
- `content/` — approved Markdown notes and individual question JSON files
- `data/` — subjects, lessons, notes, questions, tags, search/content indexes, and provenance
- `schemas/` — JSON data contracts
- `assets/` and `public/` — approved source and public assets
- `tests/` — unit, integration, and semantic accessibility suites
- `scripts/` — validation, build, browser audit, inventory, manifest, and security tools
- `architecture/` — design, implementation, route, testing, and deployment decisions
- `audit/` — Phase 4 audit evidence
- `content-v2/` — the v2 curriculum corpus, its client mirror, and the generated `indexes/` sidecars
- `docs/` — engineering documentation for the content model, study tools, speech, search, structured data, and legal pages
- `_audit/` — the phase-by-phase implementation record and the generated coverage report

`manifest.json` inventories every release file except itself and documented non-release artifacts. `release-content-inventory.json` and `.csv` inventory the approved note/question files with SHA-256 hashes.

## Content sources and updates

The release contains only Phase 4-approved, audited content. UI components never import educational files directly: `src/lib/content/` loads the generated indexes, resolves subject/lesson/note relationships, lazy-loads Markdown and question/search bundles, and returns public routes rather than internal file paths.

To add a note, create approved Markdown with the required front matter under `content/<subject>/notes/`, then add its lesson, note, content-index, search-index, tag, and provenance records. To add a question, create one schema-valid JSON file under `content/<subject>/questions/`, then update the question, lesson, content-index, search-index, tag, and provenance records. Follow `CONTENT_GUIDE.md` and the schemas; never hardcode educational content in UI components.

After any content change, run:

```bash
npm run release:inventory
npm run release:manifest
npm run validate
npm run release:manifest
# Remove ignored node_modules/ and dist/ from the release copy.
npm run validate:release
```

## GitHub release and deployment

This folder is the complete repository-root release. Pull request #2 was merged into `main` after its checks passed, preserving the release branch and repository history. GitHub Actions runs the validation suite and deploys `main` to GitHub Pages.

The live site is `https://medmosa.org/`; `https://www.medmosa.org/` is its secure alias. See `DEPLOYMENT.md`, `deployment-report.md`, `live-site-smoke-test.md`, and `PHASE_6_STATUS.md` for the authoritative deployment state and operating procedure.

## Known limitations and status

- Organic Chemistry 2 has no recoverable exact approved source and remains an explicit empty state.
- NCLEX Review remains an explicit empty state pending qualified, current clinical review.
- No approved downloadable files exist; Downloads intentionally shows an empty state.
- No content in this repository has a documented credentialed clinical review. The `medically-reviewed` content status exists in the schema and is never emitted. Ten `pharmacology-foundations` topics carry `needs-medical-review` and are held from publish.
- Prerequisites and exam alignment are not offered: the corpus holds no topic-to-topic ordering edge and names no exam blueprint, competency code or test-plan section.
- 5,463 question placements are flagged for citation review. The flag is surfaced in `/coverage` and in the metadata sidecar; the review itself has not been done.
- The contact address published on the policy pages, `contact@medmosa.org`, is not yet confirmed live.
- npm may warn that optional macOS package `fsevents` has an unreviewed install script. The clean install, build, tests, and dependency audit pass without approving it.
- Educational content is a study aid, is not guaranteed fully accurate, and is not medical advice. NCLEX-oriented material is not official NCLEX content.

Current status: see `PHASE_6_STATUS.md`, `deployment-report.md`, and `release-validation-report.md` for the authoritative release and deployment decisions.
