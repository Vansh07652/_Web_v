# Technical architecture

## Outcome

Study Compass is a static React and TypeScript single-page application built by Vite. Approved content remains a separate, immutable source package. Build-time imports convert that package into browser assets, so the production site needs no database, API, server runtime, authentication, or environment variables.

## System boundaries

```text
content/ + data/ + schemas/ + assets/ (approved source)
  data/*.json + content/**/*.md + assets/**
                   │ build-time typed imports
                   ▼
src/lib/content/ (single integration boundary)
                   │ selectors + search results
                   ▼
pages → reusable components → accessible browser UI
                   │
                   ▼
vite build → dist/ (static files)
```

The browser never receives local filesystem paths. Routes are assembled from canonical subject and lesson slugs. Source `filePath` values are used only to match build-time modules.

## Selected stack

- React 19 for component state and accessible question interactions.
- TypeScript in strict mode for contracts and route helpers.
- Vite for development, JSON/Markdown raw imports, and static output.
- Plain CSS with local design tokens; no CSS framework.
- Native History API for routing; no router dependency.
- Native string matching for local search; no hosted search service.
- Vitest plus Node validation scripts for Phase 3 checks.

The project has six direct runtime/build packages and no production service dependency. Details and alternatives are in ADR-001.

## Runtime layers

1. `src/types/` defines source records and view models.
2. `src/lib/content/` imports the seven approved JSON indexes and all approved Markdown notes, then exposes typed selectors.
3. `src/lib/navigation.ts` owns path normalization and URL builders.
4. `src/App.tsx` resolves the current path and delegates to page layouts.
5. `src/pages/` and `src/components/` render reusable accessible experiences.
6. `src/styles/main.css` implements tokens, responsive behavior, focus, print, and reduced motion.

## Content lifecycle

At development/build start, Vite imports data and approved Markdown from this repository's `data/` and `content/` directories. Lightweight subject, lesson, and note metadata forms the initial chunk. Markdown is emitted as one lazy chunk per note, keyed by its approved repository-relative path, stripped of front matter, and rendered into React elements without injecting HTML. The structured question dataset loads on demand when a page needs lesson-level question details. Search metadata and filters load only on the Search route. Search joins search-index records to content and question metadata and returns public URLs rather than file paths.

The source validation script independently verifies readiness, JSON, schemas, SHA-256 manifest hashes, unique IDs, relationships, safe indexed paths, approvals, front matter, question answers, absence of common secrets, and absence of absolute local paths.

## State and failure behavior

- Navigation state: the current normalized browser pathname.
- Quiz state: question index, selected option, and submitted state; reset when lesson changes.
- Search state: local controlled inputs; results are derived and capped at 100 rendered items.
- Missing subject or lesson: not-found page.
- Indexed note with missing module: plain-language error page.
- Valid subject with zero approved material: non-error empty state.
- Build/source failure: validation exits nonzero before deployment.

No account progress is stored. A future opt-in local-storage layer can save non-sensitive quiz position without changing content contracts.

## Security and privacy

- Only approved root content/data/assets are imported; raw, working, quarantine, and review folders are out of scope.
- Markdown is converted to React text nodes; no `dangerouslySetInnerHTML` is used.
- Links are rendered as links, and source filesystem paths never appear in user-facing results.
- No credentials or runtime configuration are needed.
- Validation checks the export manifest and scans for common secret formats.
- Dependencies should be audited and lockfile changes reviewed during Phase 3 maintenance.

## Performance

The static shell prioritizes a small dependency graph and native browser APIs. The production build keeps the initial application near 83 kB gzip, loads each note independently, and defers the question/search datasets (about 197 kB and 173 kB gzip in the validated build) until needed. Before production, measure interaction timings. If a deferred dataset grows excessively, preserve the loader API while switching to subject-level JSON chunks or a generated compact search index.

## Maintainability rules

- Components must call selectors, not import approved files directly.
- Subject names/slugs must come from `subjects.json`.
- New data fields begin in the data contract and types.
- Public routes use subject and lesson slugs, never record filesystem paths.
- Empty content is a valid state, not a reason to invent content.
- Run `npm run validate` before any release candidate.
