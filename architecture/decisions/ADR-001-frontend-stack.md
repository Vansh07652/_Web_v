# ADR-001: Frontend stack

- Status: Accepted
- Date: 2026-08-10

## Context

The site must be static, TypeScript-based, component-oriented, responsive, accessible, searchable, capable of client-side quizzes, easy for a beginner to maintain, and compatible with approved local content and GitHub hosting. No existing frontend project was present.

## Decision

Use React 19 with strict TypeScript, Vite, and plain CSS. Use Vite raw imports for Markdown, native browser APIs for history/search/form behavior, Vitest for unit checks, and dependency-free Node scripts for source/architecture validation. Build to `dist/`; no backend or environment variables.

Styling uses a single token-driven CSS layer instead of utility/component frameworks. Content loading is build-time and centralized. Search is local substring matching. Testing uses TypeScript, Vitest, validation scripts, and production build now; Phase 3 adds browser/component accessibility tests.

## Why this is simple

Vite has a small configuration surface, direct JSON/Markdown support, and static output. React is broadly understood and handles quiz/search state without custom framework conventions. Plain CSS keeps design roles visible. Avoiding a router, state manager, Markdown package, search package, UI kit, and backend minimizes dependencies and upgrade paths.

## Alternatives considered

- Astro: excellent content-first static output, but interactive islands and external approved content configuration add concepts for a beginner; reconsider if per-page HTML/SEO becomes the top constraint.
- Preact: smaller runtime, but React’s ecosystem/familiarity is a stronger maintenance advantage at this scale.
- Vanilla TypeScript/Web Components: fewer packages but more manual rendering/state and less familiar component testing.
- Next.js/Remix: unnecessary server/full-stack conventions and deployment complexity.
- CSS framework/component library: faster generic styling but adds dependencies, abstraction, and override burden.

## Consequences

Positive: quick static builds, typed components, no service dependency, simple hosting, portable content layer. Tradeoffs: Phase 2 bundles the dataset; native routing requires a static-host fallback; the minimal Markdown renderer needs expansion for full syntax; client-side rendering provides weaker initial SEO than pre-rendering. These are measured Phase 3 decisions, not reasons to restructure the page/data contracts.
