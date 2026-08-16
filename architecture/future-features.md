# Future features

## Phase 3 priorities

1. Finish content-grade Markdown coverage: ordered/nested lists, accessible figures, captions, formulas, footnotes, and approved internal links.
2. Split content by subject and lazy-load note/search chunks if measured bundle size warrants it; keep selector APIs stable.
3. Add component and end-to-end tests with keyboard and axe coverage.
4. Add complete per-route SEO metadata, sitemap, canonical URLs, and social preview after the production origin is known.
5. Add an explicit asset index and DownloadCard when approved assets exist.
6. Verify final GitHub Pages base path, fallback, caching, and production source-map policy.

## Later enhancements

- Opt-in localStorage for non-sensitive quiz position, bookmarks, and recently viewed lessons; include clear reset and storage notice. No accounts required.
- Flashcards only when structured approved flashcard records exist.
- Print/download note views generated from the same approved source.
- Search URL parameters for shareable searches and preserved filters.
- Subject-level content prefetch based on measured performance.
- Difficulty/topic practice selection and randomized question order with an explicit deterministic restart option.
- Accessible glossary linking approved key terms across notes.
- Offline progressive web app after cache/update behavior and storage impact are tested.
- Analytics only with a documented purpose, minimal events, consent/privacy review, and no question-answer content collection.

## Explicitly out of scope

Authentication, accounts, cloud progress, payments, private dashboards, chat, instructor administration, user-generated content, public answer submission, and a database/backend. Add any of these only after a separate product/security/privacy architecture decision. The site must never generate educational answers or fill missing approved content automatically.

## Triggers for architectural change

- Initial bundle exceeds an agreed mobile budget → lazy content chunks.
- Local string search becomes slow or low quality at measured scale → prebuilt compact inverted index or small local search library.
- Non-static personalization is required → separate privacy/security/backend ADR.
- New question types are approved → per-type interaction/scoring adapters and accessibility tests.
- Subject slug changes → versioned redirects and schema/content migration.
- Multiple languages are approved → locale-aware routes, metadata, typography, and translated content contract.
