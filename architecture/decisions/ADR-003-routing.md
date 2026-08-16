# ADR-003: Routing

- Status: Accepted
- Date: 2026-08-10

## Context

Routes must be clean and predictable, use canonical source slugs, work on a static GitHub-compatible host, support direct entry, and avoid unnecessary dependencies.

## Decision

Use a small History API router in `App.tsx`, typed URL helpers in `src/lib/navigation.ts`, and a declarative 16-pattern registry in `src/data/routes.json`. Resolve `:subjectSlug` and `:lessonSlug` against the approved loader. Unknown relationships render the not-found page. Vite builds `index.html`, and the post-build script copies it to `404.html` for GitHub Pages direct-entry fallback.

Navigation links preserve normal browser semantics: real `href`, intercepted unmodified primary clicks, Back/Forward handling, page-title updates, scroll reset, and main-content focus. External/modified clicks retain browser behavior.

## Alternatives considered

- React Router: robust but unnecessary for 16 simple patterns and adds a dependency/API surface.
- Hash routes: simplest direct hosting, but URLs are less clean and do not match the requested pattern.
- One HTML file per route: strongest static behavior/SEO but requires a generator or framework and expands Phase 2.

## Consequences

The route model is small, auditable, and dependency-free. GitHub Pages may return HTTP 404 while displaying the SPA fallback for an unknown direct path; a host rewrite or future pre-rendering removes that limitation. The production base path and canonical origin must be finalized before deployment. Adding nested route complexity should trigger reconsideration of a router library.
