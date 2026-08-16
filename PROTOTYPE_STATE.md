# MedAtlas front-end prototype — state

Working log for the MedAtlas visual prototype (four demo screens + mobile
variants, three art-direction variants for comparison). Front-end only: no
backend, no persistence, no new dependencies, demo content only.

## Phase 0 — Discovery — COMPLETE

Findings (all later phases conform to these):

- **Framework:** React 19 + TypeScript, Vite 8 SPA (`src/main.tsx` → `App.tsx`).
- **Router:** hand-rolled history router in `App.tsx` (`RouteView` matches
  `segmentsFor(path)`); links via `components/ui.tsx` `Link` + `Navigate`.
  Route patterns for the *production* site live in `src/data/routes.json` and
  feed the sitemap — prototype routes are deliberately **not** added there so
  they stay out of the sitemap and release surface.
- **Styling:** single hand-written stylesheet `src/styles/main.css`, tokens in
  `:root` (navy/teal on warm paper, 8-pt spacing, fluid type scale, serif
  display stack). No Tailwind, no CSS modules, no icon library — icons are
  inline SVG components in `components/ui.tsx`.
- **Theme/dark mode:** none (`color-scheme: light` only) → per decision rules,
  **no dark-mode toggle** in the prototype.
- **Verification commands:** `npm run lint` (typecheck + `scripts/lint`),
  `npm run typecheck`, `npm test` (vitest), `npm run build`. Constraint
  confirmed from STATE.md and re-verified this session: **no package registry
  is reachable from this environment** (proxy returns 403 for npm tarballs;
  vite/tsc/vitest binaries are darwin-arm64 in the checked-in `node_modules`
  and this machine is Linux). The repo ships a purpose-built no-registry
  harness in `tools/` (TSX→ESM compiler + Chromium audits) — that is the
  verification path used here, plus `node scripts/lint`-style static checks
  that run on plain Node.
- **Conventions:** function components, explicit props types, accessibility
  first (skip link to `#main-content`, `focusMain()` after navigation,
  aria-current on nav), no `dangerouslySetInnerHTML`, no trailing whitespace
  (enforced by `scripts/lint`), design tokens only in CSS.

## Decisions (decision_rules judgment calls)

1. **Three art-direction variants** (user request mid-task: "make 3 different
   types so I can compare"): `classic`, `modern`, `editorial`, implemented as
   token scopes (`[data-ma-theme=…]`) over one shared component set, switchable
   from a persistent comparison toolbar. URL carries the variant so any screen
   can be compared in any direction.
2. **Routes:** `/prototype` (gallery) and `/prototype/:variant/:screen`
   following the repo's segment-router pattern. Handled ahead of the NotFound
   fallback in `App.tsx`; lazy-loaded so the production bundle is untouched
   until the route is visited.
3. **Not registered in `src/data/routes.json`** — keeps prototype out of
   sitemap/canonical tooling. `validate:routes` only asserts required
   production routes, so it still passes.
4. **Repo design system is the base** — the fallback palette from the brief is
   used only inside the `modern` variant scope, where the brief's palette *is*
   the art direction. `classic` derives from the repo tokens; `editorial` is a
   print-inspired direction using the repo's serif stack + amber accent.
5. **No dark mode** (no existing mechanism).
6. **Prototype CSS** lives in `src/styles/prototype.css`, pulled in via a
   single `@import` at the top of `main.css` (works in both Vite and the
   `tools/` harness). All prototype selectors are `.ma-` prefixed and scoped
   under `.ma-root` to avoid touching site styles.
7. **Read Aloud** is a pure visual state machine (Ready → Reading → Paused →
   Stopped) — no SpeechSynthesis, no audio.
8. **Planner** nav item (spec lists it, no screen speced) links to the
   prototype gallery rather than being a dead control.
9. Verification environment: `npm ci` cannot complete here (registry 403), so
   typecheck/vitest are recorded as "run on the Mac" follow-ups exactly like
   the audit session before this one; harness compile + Chromium audit + the
   repo's own Node-based lint/validators run here.

## Phases

| Phase | Status |
|---|---|
| 0 Discovery | complete |
| 1 Foundation (mock data + shared components) | complete |
| 2 Dashboard | complete |
| 3 Lesson Reader (flagship) | complete |
| 4 Practice Question | complete |
| 5 Flashcards | complete |
| 6 Mobile variants | complete |
| 7 Verification + final report | complete |

## Verification results (this session)

Registry-blocked commands (`npm run typecheck`, `npm test`, `npm run build`)
could not run — same environment constraint as the audit session; run them on
the Mac. What did run, all passing:

- `node scripts/lint` — PASS (no unsafe HTML, no local paths, no trailing
  whitespace, across `src/` including all prototype files)
- `node scripts/validate-routes` — PASS (21 route patterns intact)
- `node scripts/scan-secrets` — PASS (0 possible secrets)
- `node tools/devbuild.mjs` — 26 modules compiled cleanly (18 pre-existing +
  8 prototype)
- `node tools/audit.mjs` over all 13 prototype routes (gallery + 3 variants ×
  4 screens) at 375/768/1440 px — **zero console errors, zero failed
  requests, zero axe-core violations, zero horizontal overflow** (after
  fixing three findings: icon-only back link name, `--ma-muted` contrast in
  the modern scope, choice-flag wrap on mobile)
- Constraint self-audit — no `fetch`/XHR/WebSocket, no SpeechSynthesis/Audio,
  no localStorage/sessionStorage anywhere in prototype code; `package.json` +
  `package-lock.json` untouched; no `src/data/routes.json` change; no
  content/curriculum/data files touched.

## Files touched

Created:
- `src/prototype/data.ts` — `demoCourses`, `demoLesson`, `demoQuestion`,
  `demoFlashcards` (+ types), clearly demo-only content
- `src/prototype/icons.tsx` — inline SVG icon set (stroke = currentColor)
- `src/prototype/components.tsx` — `PrototypeShell`, `StudyHeader`,
  `AppSidebar`, `StudyCallout`, `ReadAloudPlayerDemo` (+ `useReadAloudDemo`),
  `ProgressStatCard`, `ProgressBar`, buttons/pills
- `src/prototype/DashboardScreen.tsx`
- `src/prototype/LessonScreen.tsx`
- `src/prototype/PracticeScreen.tsx`
- `src/prototype/FlashcardsScreen.tsx`
- `src/prototype/PrototypeRoutes.tsx` — gallery + variant/screen routing
- `src/styles/prototype.css` — `.ma-` scoped styles + three theme token scopes
- `PROTOTYPE_STATE.md` (this file)

Modified (minimal, isolated):
- `src/App.tsx` — lazy `/prototype` branch before NotFound + one
  `PAGE_METADATA` entry + `staticMetadataFor` early return for `/prototype`
- `src/styles/main.css` — one `@import "./prototype.css";` line at top
