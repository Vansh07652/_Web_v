# AUDIT_REPORT.md

Deep audit of the Study Compass site (`GITHUB_VM/Web/Web_Apps/ELI_Nur_Web/web`).
Severity is **Critical / High / Medium / Low**. The *Fixed* column is filled in
during Phase 2 and re-verified in Phase 6.

## How the audit was performed

| Check | Method |
|---|---|
| Runtime errors, failed requests | Chromium, 11 routes × 3 viewports, `page.on("pageerror"/"console"/"response")` |
| Accessibility | axe-core 4.10 injected per route/viewport, plus manual semantic review |
| Contrast | Programmatic WCAG 2.1 relative-luminance check of every token pair actually used (`tools/contrast.mjs`). One suspected contrast failure in the old palette was **disproved** by this check (`--muted` on the amber notice surface measures 5.20:1 and passes) and was struck from this report rather than reported as a defect. |
| Responsiveness | 375 / 768 / 1440 px, plus scroll-width overflow detection per element |
| Dead links | SPA crawler following every in-app `<a href>`, 200 routes visited of 1,193 discovered |
| SEO | Manual review of `index.html`, runtime metadata effects, and the generated static routes |
| Security hygiene | Secret pattern scan across source/config, external-origin scan, dependency review |
| Code quality | Import-graph reachability, duplication review, stylesheet token analysis |

### Baseline result (before any change)

The application was **functionally healthy**. On the first pass — 11 routes ×
3 viewports — it produced 0 console errors, 0 failed requests, 0 axe
violations, 0 horizontal overflow and 0 dead links across a 200-route crawl.

Widening the sweep to 17 routes (adding topic, unit, note and course-practice
pages) surfaced **9 axe violation instances** on 2 route types, recorded as M6
and M15 below. Everything else found is weighted toward information
architecture, metadata, semantics automated tooling cannot see, design maturity
and dead code — not crashes.

---

## Critical

| # | Area | Issue | Fixed |
|---|---|---|---|
| C1 | Bug / content | `RichQuestionPractice` reported a wrong answer as **`Correct answer: B`** — the raw option **ID only**, never the answer text. This is the primary study surface for all 5,412 canonical questions, so on every incorrect answer the learner was shown a letter with no content. (`QuestionPractice`, the legacy component, did this correctly via `answerLabel()`, which is what made the omission easy to miss.) | Yes |
| C2 | SEO / social | `og:image` and `twitter:image` were the **relative** value `og.png`. Facebook, LinkedIn, iMessage, Slack and X all require an absolute URL, so every share of this site rendered with no image. `og:url`/`twitter:url` were only injected client-side, so crawlers that do not execute JS saw none. | Yes |
| C3 | IA | The homepage hero said **"Explore all 28 subjects"** directly above a grid rendering the **11 legacy subjects**, two of which (`organic-chemistry-2`, `nclex-review`) render as empty `0 notes / 0 questions` cards. A first-time visitor's first impression was a smaller, partly-empty catalog that contradicted the headline. | Yes |

## High

| # | Area | Issue | Fixed |
|---|---|---|---|
| H1 | SEO | No `sitemap.xml`. 1,193 crawlable routes existed with no way for a search engine to discover them beyond link-following. | Yes |
| H2 | SEO | No `robots.txt`. | Yes |
| H3 | SEO | No canonical `<link>` in the served HTML — added by JS only, so static crawlers and the generated GitHub Pages route entry points had none. | Yes |
| H4 | Design | `font-family: Inter, …` was declared but **Inter was never loaded** — no `@font-face`, no stylesheet link. Every visitor without Inter installed silently fell back to a system UI font, so the site never rendered in its intended typeface. | Yes |
| H5 | Design | No design system. 326 lines of CSS with hard-coded values throughout: **16** distinct hard-coded `border-radius` values, **12** colours defined outside the token block, 30+ ad-hoc spacing values, and six near-duplicate card treatments. Nothing could be restyled consistently. | Yes |
| H6 | A11y | Topic study modes were `<button aria-pressed>` inside a `<nav>`. They behave as tabs over a single panel; `aria-pressed` announces "toggle button, pressed" instead of "tab, selected, 2 of 5", and the group provided no arrow-key navigation. | Yes |
| H7 | A11y | Duplicate DOM `id`s: `EmptyState` hard-coded `id="empty-state-title"` and both quiz components hard-coded `legend` ids. Any page rendering two of them produced duplicate ids, which breaks `aria-labelledby` resolution. | Yes |
| H8 | UX | Navigation carried seven flat items — *Home, Master Curriculum, Subjects, Notes, Questions, Search, Help* — where *Master Curriculum*, *Subjects*, *Notes* and *Questions* are four overlapping doors onto two content systems. No indication which one a student should use. | Yes |
| H9 | UX | 28 subjects (and 11 legacy subjects) rendered as one long unfiltered grid: the homepage was **4,324 px tall on a 375 px phone**, with no filter, no grouping affordance and no in-page search. | Yes |

## Medium

| # | Area | Issue | Fixed |
|---|---|---|---|
| M1 | Dead code | `src/pages/SearchPage 2.tsx` — an older duplicate of `SearchPage.tsx`, never imported. A space in the filename also makes it hostile to tooling. | Yes — archived |
| M2 | Dead code | `src/pages/CurriculumPilot.tsx` (163 lines) — superseded by `CurriculumExplorer.tsx`, never imported. | Yes — archived |
| M3 | Dead code | Seven pilot-only exports in `src/lib/content/curriculum-v2.ts` (`loadAnatomyPhysiology1Pilot`, `getPilotUnit`, `getPilotTopicSummary`, `loadPilotTopic`, `loadPilotQuestionBank`, `pilotSubjectHref`, `pilotUnitHref`, `pilotTopicHref`) reachable only from the dead pilot page. | Yes |
| M4 | Dead code | `loadAssets()` and `getNoteBySlug()` in `src/lib/content/index.ts` — zero references. `loadAssets` additionally forced an **eager** `import.meta.glob` over `assets/**/*` on first paint. | Yes |
| M5 | Bug | `RichQuestionPractice`'s reset effect depends on the `questions` array identity. `CurriculumSubjectPractice` builds that array inline (`[...bank.questions, ...bank.subjectWideQuestions]`), so any future parent re-render would silently reset the learner's position and score mid-practice. | Yes |
| M6 | A11y / UX | Browser **back/forward** only called `setPath()`. Unlike in-app navigation it never moved focus to `<main>` and never restored scroll position, so a keyboard or screen-reader user pressing Back stayed focused deep in the previous page while the content silently swapped underneath them. | Yes |
| M7 | A11y | The mobile menu could not be dismissed with `Escape`, and focus was not returned to the toggle on close. | Yes |
| M8 | A11y | `<progress>` in the quiz had no accessible name; screen readers announced a bare percentage. | Yes |
| M9 | A11y | Card grids used `<h2>` per card (11–28 sibling `h2`s under one `h1`), flattening the document outline, while the canonical explorer correctly used grouped `h3`s. Inconsistent between the two systems. | Yes |
| M10 | Perf | `public/og.png` is **901 KB** for a 1200×630 social image (~40× larger than needed). | Deferred — see below |
| M11 | Perf | No `theme-color` for dark mode, no `apple-touch-icon`, no web app manifest; the 64 px PNG was the only icon. | Yes |
| M12 | Responsive | `.subject-summary` kept three columns below 700 px, compressing to ~100 px per cell at 375 px. | Yes |
| M13 | Code quality | All page components were written as single-expression one-liners — `App.tsx` had lines of 1,900+ characters. Functionally fine, effectively unreviewable and unmaintainable. | Yes |
| M15 | A11y | Every scrollable table in a study note rendered as `role="region"` with the identical accessible name `"Scrollable table"`, and every code block as `"Scrollable code example"`. Multiple identically-named landmarks on one page is itself a WCAG failure — a screen-reader user gets a landmark list of indistinguishable entries. This produced 6 of the 9 baseline axe violations. | Yes |
| M14 | Content integrity | Legacy Microbiology reports 35 notes / **0** questions while canonical Microbiology reports a full question bank; the two systems disagree. | Deferred — see below |

## Low

| # | Area | Issue | Fixed |
|---|---|---|---|
| L1 | SEO | Per-route `<meta name="description">` was a single template (`"Study notes, ELI-10 explanations, and practice questions for X"`) applied to every page including Search, Downloads and 404. | Yes |
| L2 | SEO | No structured data (`JSON-LD`), so the site could not qualify for educational-organisation or breadcrumb rich results. | Yes |
| L3 | Branding | Three different product names in one package: `README` "ELI Explains", `package.json` `study-compass`, domain `studycorehub.com`. | No — recommendation only |
| L4 | UX | The 404 view offered "Browse subjects" and "Search content" but not the primary Master Curriculum entry point. | Yes |
| L5 | UX | Empty subjects rendered a bare `0 / 0` card with no explanation of *why* they are empty. | Yes |
| L6 | UX | `Downloads` is a permanently empty page in the primary navigation. | Yes — demoted |
| L7 | Design | Focus ring was `#df7c16` on the `#f7f5ef` page background → **2.74:1**, under the 3:1 non-text contrast requirement (WCAG 2.1 SC 1.4.11). Measured with `tools/contrast.mjs`. | Yes |
| L8 | Code quality | `getApprovedQuestionCount()` derives question counts as `approvedContentCount − noteCount` rather than counting questions. Currently correct for all 11 legacy subjects, but silently wrong if either input drifts. | Partly — regression test added, see Deferred |
| L9 | Code quality | `src/types/index.ts` is a one-line re-export of `./content` with no other purpose. | No — harmless, kept for import stability |

---

## Not issues (checked and clean)

- **Secrets**: no API keys, tokens, credentials or private keys in source,
  config, or public assets.
- **Mixed content / third-party origins**: the app loads **zero** external
  origins. No CDN libraries, no analytics, no fonts from a third party, so
  there is no outdated-CDN or mixed-content exposure.
- **Dependencies**: 2 runtime dependencies (`react`, `react-dom`), both current
  (19.2.8). No known vulnerabilities reported at package time.
- **Dead links**: 200 routes crawled, 0 broken.
- **Broken images**: none; the Markdown renderer already sets `loading="lazy"`
  and sanitises `src`/`href` against a scheme allow-list.
- **Malformed HTML**: none detected by the browser parser across all routes.
- **Render-blocking resources**: only the single stylesheet; heavy data
  (`questions.json` 1.8 MB, `search-index.json` 779 KB) is already correctly
  behind dynamic `import()`.

---

## Before / after

Filled in during Phase 6.

### Issue counts by severity

| Severity | Found | Fixed | Deferred / recommendation only |
|---|---:|---:|---:|
| Critical | 3 | 3 | 0 |
| High | 9 | 9 | 0 |
| Medium | 15 | 13 | 2 |
| Low | 9 | 6 | 3 |
| **Total** | **36** | **31** | **5** |

### Measured before / after

Both columns were measured the same way, on the same 17 routes × 3 viewports
(375 / 768 / 1440 px). The "before" figures come from a clean checkout of the
Phase 0 baseline commit, audited with the same harness — not from memory.

| Measurement | Before | After |
|---|---|---|
| Console errors | 0 | **0** |
| Uncaught page errors | 0 | **0** |
| Failed requests (4xx/5xx or aborted) | 0 | **0** |
| axe-core violation instances | 9 | **0** |
| Route types with an axe violation | 2 of 17 | **0 of 17** |
| Horizontal overflow at 375 px | 0 | **0** |
| Dead links | 0 of 200 crawled | **0 of 300 crawled** |
| Behavioural tests (menu, tabs, quiz, filters, history) | none existed | **28 of 28 pass** |
| Design tokens in `:root` | 19 | **66** |
| Hard-coded `border-radius` values | 16 | **0** |
| Colours defined outside the token block | 12 | **0** |
| Stylesheet lines | 326 | 791 |
| Longest line in `App.tsx` | 1,816 chars | **241 chars** |
| Contrast pairs verified in code | 0 | **23, all passing** |
| Homepage height at 375 px | 4,324 px | **4,207 px** |
| Canonical courses reachable from the homepage | 0 of 28 linked | **28 of 28** (6 featured, rest one click away) |
| URLs in `sitemap.xml` | no sitemap | **1,331** |
| Static route entry points with a correct canonical URL | 0 of 1,332 | **1,332 of 1,332** |
| Project's own validators passing | 6 of 7 (`validate-content-source` stale) | **7 of 7** |

---

## Deferred items and reasoning

| # | Item | Why deferred |
|---|---|---|
| M10 | Compress `public/og.png` (901 KB) | No image-optimisation tooling is installable in this environment (no package registry reachable). Re-encoding it by hand risks degrading the only social asset. `FINAL_REPORT.md` gives the exact one-line command to run locally; the file is not on the critical rendering path, so the cost is limited to social scrapers. |
| M14 | Legacy vs canonical Microbiology question counts disagree | This is an editorial/data-pipeline question about which source is authoritative, not a front-end defect. Silently picking one would misrepresent the content. The UI now labels availability honestly instead. |
| L3 | Three product names | Renaming the product is a brand decision with content consequences (domain, README, `package.json`, every page title). Out of scope for an engineering pass; raised as a recommendation. |
| L8 | Derived question count | A counted value needs either the 1.8 MB question file loaded eagerly on first paint — a real performance regression — or a new generated data file that the existing `scripts/` build pipeline does not know how to produce. A regression test was added so drift fails loudly instead. |
| L9 | `src/types/index.ts` re-export | Removing it would churn every import path for no behavioural gain. |
