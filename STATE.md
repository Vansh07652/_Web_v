# STATE.md — audit, bug-fix and redesign run

Resume point for this workstream. If interrupted, read this file first, then
`AUDIT_REPORT.md` for the issue list and `DESIGN.md` for the design system.

- **Project root used for this work:** `GITHUB_VM/Web/Web_Apps/ELI_Nur_Web/web`
- **Working docs live in:** that same `web/` directory, alongside the existing
  `PHASE_*_STATUS.md` / `CHANGELOG.md` convention already used by the project.
- **Started:** 2026-08-14

## Phase status

| Phase | Name | Status |
|---|---|---|
| 0 | Recon | Complete |
| 1 | Deep audit | Complete |
| 2 | Bug fixes | Complete |
| 3 | Design system | Complete |
| 4 | Front-end redesign | Complete |
| 5 | UX improvements | Complete |
| 6 | Verification | Complete |
| 7 | Final report | Complete |

---

## Phase 0 — Recon (complete)

### Stack

| Item | Value |
|---|---|
| Framework | React 19.2 (no router library — hand-rolled history/pushState router) |
| Language | TypeScript 7 (`tsc --noEmit` typecheck only) |
| Build tool | Vite 8 (Rolldown) + `@vitejs/plugin-react` |
| Tests | Vitest 4 (8 files / 31 tests), axe-core for accessibility |
| Styling | One hand-written stylesheet, `src/styles/main.css` (325 lines) |
| Deploy target | GitHub Pages, custom domain `medmosa.org` (`public/CNAME`) |
| Routing | SPA with static fallback route entry points generated at build time |

### Inventory (Phase 0 baseline — used later to prove no content was lost)

| Thing | Count |
|---|---|
| App source modules (`src/**/*.ts,tsx`, excl. tests) | 18 |
| App source lines (incl. stylesheet, excl. tests) | 2,229 |
| Unit/integration/a11y test files | 8 |
| Build/validation scripts (`scripts/`) | 21 |
| Route patterns (`src/data/routes.json`) | 21 |
| Canonical subjects / units / topics | 28 / 123 / 782 |
| Unique canonical questions | 5,412 |
| Legacy subjects | 11 |
| Legacy lessons / notes / questions | 121 / 111 / 1,032 |
| Markdown files under `content/` | 116 (111 indexed as notes) |
| Public assets | `og.png`, `favicon/favicon.png`, `CNAME` |
| Discovered in-app routes (crawler) | 1,193 |

### Key structural finding

The site carries **two parallel content systems**:

1. **Canonical** — the Master Curriculum Registry at `/learn` (28 subjects,
   782 topics, 5,412 questions). This is the current, authoritative system.
2. **Legacy** — `/subjects`, `/notes`, `/questions` (11 subjects, 111 notes,
   992 questions), kept for backwards-compatible URLs.

The homepage was wired to the **legacy** list while its own hero copy promised
"Explore all 28 subjects", so the primary landing experience showed the smaller,
older catalog. That mismatch drove several Phase 4/5 decisions.

### Tooling constraint (important context for anyone re-running this)

Neither this environment nor the mounted workspace VM can reach a package
registry, and the installed `node_modules` contains **darwin-arm64** native
binaries while both machines are **linux**. So `vite`, `tsc` (TypeScript 7 is a
native binary) and `vitest` could not be executed here.

To keep verification real rather than assumed, a local harness was written under
`tools/` in the working copy (not shipped to the site):

- `tools/jsxc.mjs` — TSX→JS compiler (JSX to `react/jsx-runtime` calls), with
  TypeScript stripping delegated to Node's built-in `stripTypeScriptTypes`.
- `tools/devbuild.mjs` — emits browser-native ES modules, resolving Vite-only
  features (`import.meta.glob`, `?raw`, `?url`, JSON imports) at compile time.
- `tools/serve.mjs` — static server with SPA fallback.
- `tools/audit.mjs` — Chromium run: console errors, failed requests, axe-core
  violations, horizontal-overflow detection, screenshots at 375/768/1440.
- `tools/crawl.mjs` — follows in-app links to find dead routes/runtime errors.

**The project's real build is unchanged and still Vite.** Run `npm run dev` /
`npm run build:pages` on a machine with matching `node_modules`.

---

## Phase 1 — Deep audit (complete)

Full findings in `AUDIT_REPORT.md`. Baseline measurements taken before any edit:

- Chromium run over 11 representative routes × 3 viewports: **0** console
  errors, **0** failed requests, **0** axe violations, **0** horizontal overflow.
- Link crawl of 200 routes (of 1,193 discovered): **0** dead links, **0** errors.
- Widening to 17 routes (adding topic, unit, note and course-practice pages)
  surfaced **9 axe violation instances** on 2 route types.

So the codebase was **functionally sound**. The real problems were in
information architecture, SEO/social metadata, design maturity, semantics that
a narrow axe sweep did not reach, and dead code — not in crashes.

Issue counts found: 3 Critical, 9 High, 15 Medium, 9 Low (36 total).

---

## Phase 2 — Bug fixes (complete)

All Critical and High fixed, plus all Medium/Low except the three deliberately
deferred items listed below.

Highlights:

- Correct-answer feedback in `RichQuestionPractice` showed only the option
  letter (`"Correct answer: B"`). It now renders the full answer text.
- `og:image` / `twitter:image` were relative paths, invalid for social
  crawlers. Now absolute, both in the served HTML and at runtime.
- Added `robots.txt`, `site.webmanifest`, JSON-LD, an `apple-touch-icon`, and a
  generated `sitemap.xml` (1,331 URLs).
- The 1,332 static route entry points now each carry their **own** canonical and
  `og:url` instead of all claiming the homepage.
- Duplicated DOM ids in `EmptyState` and both quiz `legend`s replaced with
  `useId()`; identically-named scrollable regions given unique names.
- Back/forward now moves focus to `<main>` and resets scroll, matching in-app
  navigation.
- Dead modules moved to `archive/legacy-src/` (not deleted); dead exports
  removed from live modules.
- `scripts/site-routes.mjs` extracted so the sitemap and the route entry points
  can never disagree about what routes exist.

## Phase 3 — Design system (complete)

Documented in `DESIGN.md`: deep teal + navy on a warm paper neutral, an 8-point
spacing scale, a 1.2 fluid type scale, three elevation levels, one card
primitive, and documented button/link/nav/footer patterns. Tokens went 19 → 66.

Deliberate call: **no web fonts.** The old stylesheet asked for Inter and never
loaded it. Rather than add a third-party request to a student-facing site that
currently loads zero external origins, the design commits to a documented system
stack. Rationale and the upgrade path are both written up in `DESIGN.md`.

Every text/background pair is contrast-checked in code by `tools/contrast.mjs` —
23 pairs, all passing, run as part of verification.

## Phase 4 — Front-end redesign (complete)

`src/styles/main.css` rewritten on the tokens (326 → 791 lines, **0**
hard-coded radius values and **0** colours outside the token block, from 16 and
12). Markup reworked across `components/ui.tsx`, `components/CourseCatalog.tsx`,
`App.tsx` and `pages/CurriculumExplorer.tsx`: new hero with a real value
proposition and proof stats, sticky nav with a proper disclosure menu, one card
primitive across every grid, consistent CTA/hover/focus states, and a
sitemap-style footer. Mobile-first at 375 / 768 / 1440.

Page components were also reformatted from single-expression one-liners —
`App.tsx`'s longest line went from **1,816** characters to **241**.

## Phase 5 — UX improvements (complete)

- The homepage now leads with the canonical curriculum it advertises, showing
  six featured courses and linking to all 28. Every course is ≤2 clicks away.
- `/learn` carries the full filterable catalog, grouped into three named areas.
- `/questions` became a real practice hub covering all 28 courses, and states
  plainly which ones have no question bank yet instead of hiding them.
- Breadcrumbs on every deep page; previous/next on units, topics, lessons and
  notes.
- Empty, loading, no-result and error states for every async surface.
- Honest microcopy where coverage is partial, rather than empty `0 / 0` cards.

## Phase 6 — Verification (complete)

Re-ran the whole Phase 1 checklist. The "before" column was re-measured from a
clean checkout of the Phase 0 commit through the same harness, so the
comparison is like-for-like. Full table in `AUDIT_REPORT.md`.

- 17 routes × 3 viewports: 0 console errors, 0 failed requests, **9 → 0** axe
  violations, 0 horizontal overflow.
- 300-route crawl: 0 dead links, 0 runtime errors.
- 28 of 28 behavioural checks pass (menu, tablist keyboard nav, quiz feedback,
  filters, back/forward focus and scroll, skip link, metadata).
- All 7 of the project's own validators pass (`lint`, `validate-routes`,
  `validate-architecture`, `check-links`, `check-assets`, `scan-secrets`,
  `validate-content-source`).
- Content re-counted against the Phase 0 inventory: identical. `git diff` across
  `content/`, `content-v2/`, `curriculum/` and `data/` is empty.

## Phase 7 — Final report (complete)

See `FINAL_REPORT.md`.

---

## Decisions taken (judgment calls, not asked)

1. **Kept the name "Study Compass".** The package uses three names (README
   says "ELI Explains", `package.json` says `study-compass`, the domain is
   `medmosa.org`). Changing the visible name is a brand decision, not an
   engineering one, so the site keeps the name it already displays. Flagged in
   `AUDIT_REPORT.md` as a recommendation instead.
2. **Made the canonical Master Curriculum the primary path.** The homepage now
   leads with the 28-subject canonical catalog it already advertised. All
   legacy `/subjects`, `/notes`, `/questions` routes still work, are still
   linked from the footer and from an explicit "classic library" entry, and no
   legacy content was removed.
3. **Did not delete any source file.** Dead modules were moved to
   `archive/legacy-src/` so nothing is lost.
4. **Did not touch `content/`, `content-v2/`, `curriculum/` or `data/`.** All
   substantive text, questions, notes and provenance are byte-identical to the
   Phase 0 baseline.
5. **Left `dist/` stale.** It was produced by the real Vite build, which cannot
   run here; regenerating it with the local harness would replace a genuine
   production build with an unbundled development one. `FINAL_REPORT.md` tells
   the user to re-run `npm run build:pages`.

## Handoff environment notes

- The Desktop copy's git repo had **137 uncommitted entries before this work
  began** (from the previous session), and git cannot run on the mounted
  filesystem at all — `.git/index.lock` cannot be unlinked and `git log`
  bus-errors. Changes were therefore delivered to disk **uncommitted**. Commit
  selectively; see §8 of `FINAL_REPORT.md`.
- ~70 conflict-copy duplicates (`README 2.md`, `questions 2.json`, …) exist
  alongside their originals and are unreadable through the mount. None was
  touched.
- `CurriculumPilot.tsx` and `SearchPage 2.tsx` could not be deleted through the
  mount, so they were moved to `_Web_/_to_delete/src-pages/`. Readable copies
  are preserved in `web/archive/legacy-src/`.

## Deferred

| Item | Reason |
|---|---|
| Replacing the derived `getApprovedQuestionCount()` with a counted value | Would need either the 1.8 MB question file loaded eagerly on first paint, or a new generated data file the existing `scripts/` pipeline cannot produce. It is currently correct for all 11 legacy subjects; a regression test now asserts that, so drift fails loudly. |
| Compressing `public/og.png` (901 KB) | No image-optimisation binary is installable here. Exact command is in `FINAL_REPORT.md`; the file is not on the critical rendering path. |
| Reconciling legacy vs canonical Microbiology question counts | An editorial question about which source is authoritative, not a code defect. The UI now labels availability honestly instead of silently picking one. |
| Renaming the product | Three names exist (`README` "ELI Explains", `package.json` `study-compass`, domain `medmosa.org`). A brand decision, not an engineering one. |
