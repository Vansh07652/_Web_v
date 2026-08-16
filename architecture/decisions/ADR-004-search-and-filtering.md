# ADR-004: Search and filtering

- Status: Accepted
- Date: 2026-08-10

## Context

Search must cover subject, lesson, note title, question text, tags, and keywords, with subject/content-type/lesson/difficulty/tag filters. The site is static, the approved search index has 1,143 records, and no backend is justified.

## Decision

Use local case-insensitive substring matching over `search-index.json`, joined to content-index and question metadata. Combine filters with AND. Subject/type/lesson/difficulty/tag values come from approved data, not interface constants except documented enum display choices. Results show public title, excerpt, content label, subject, optional difficulty, tags, and route; never file paths. Render no results until the user types or chooses a filter, render every match, and provide clear prompt/no-result/reset states.

The current shell computes results in memory. Phase 3 may debounce announcements and encode filters in query parameters without changing result contracts.

## Alternatives considered

- Hosted search: network, privacy, credentials, indexing, and cost are unjustified.
- Fuse.js/MiniSearch: typo tolerance and ranking, but another dependency and index cost are unnecessary at current scale.
- Browser full-text database/Web Worker: useful only after measured responsiveness problems.
- Search note bodies at runtime: increases memory and bundle work; approved search index is the intended source.

## Consequences

Search is fast enough for the current index, offline-capable, private, and easy to understand. It lacks fuzzy matching, stemming, relevance scoring, synonyms, and full note-body discovery beyond exported index text. Measure input latency and result quality with real students. If needed, generate a compact inverted index during content export and load it lazily, keeping hosted services out unless scale proves otherwise.
