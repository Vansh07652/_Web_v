# Testing plan

## Automated coverage

`npm run validate` executes content-source validation, route validation, architecture checks, link checks, asset checks, secret scanning, strict TypeScript, linting, Vitest, the production build, and build-artifact validation.

Unit tests cover subject/lesson/note loading, relationship lookup, invalid slugs, empty subjects, source validation, single-answer grading, multiple-select set equality, and reliable written-answer normalization. Integration tests cover search text, all filter dimensions represented in data, no-result states, question grouping, route normalization, and canonical URL builders. Semantic accessibility tests inspect rendered navigation labels, current-page state, menu expansion state, breadcrumbs, fieldset/legend/radio/progress markup, submit controls, and named empty states.

Node scripts independently verify approved paths and statuses, required architecture files, all 16 route patterns, note and lesson link targets, local Markdown assets, build asset references, local-path leakage, common secret patterns, and the SHA-256 manifest.

## Manual Phase 4 audit

Automated checks cannot replace real-browser review. Phase 4 should exercise keyboard-only navigation, screen-reader announcements, zoom/reflow at 320 CSS pixels, touch targets, long notes/questions, table and code overflow, multiple viewport sizes, direct deep links, browser back/forward, and Lighthouse/axe. The implementation includes the required semantic and responsive foundations for that audit.
