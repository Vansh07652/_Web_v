# FINAL_REPORT.md

Audit, bug-fix and front-end redesign of **Study Compass**
(`GITHUB_VM/Web/Web_Apps/ELI_Nur_Web/web`) — 14 August 2026.

Companion documents: `STATE.md` (phase log and decisions), `AUDIT_REPORT.md`
(every issue found, with severity), `DESIGN.md` (the design system).

---

## 1. The short version

The codebase arrived in good functional health — no crashes, no dead links, a
real content pipeline behind it. What it lacked was a **design system**, honest
**information architecture**, and the **metadata** a public site needs. It also
carried one genuinely serious content bug on its most-used screen.

Everything Critical and High is fixed. **31 of 36** logged issues are closed;
the 5 that are not are listed in §6 with reasons, and none of them affect a
student using the site.

| | Before | After |
|---|---|---|
| axe-core violation instances (17 routes × 3 viewports) | 9 | **0** |
| Console errors / failed requests | 0 / 0 | **0 / 0** |
| Dead links | 0 of 200 crawled | **0 of 300 crawled** |
| Behavioural tests | none existed | **28 of 28 pass** |
| Hard-coded radius values / stray colours in CSS | 16 / 12 | **0 / 0** |
| Design tokens | 19 | **66** |
| Contrast pairs verified in code | 0 | **23, all pass** |
| URLs in `sitemap.xml` | no sitemap | **1,331** |
| Route entry points with a correct canonical URL | 0 of 1,332 | **1,332 of 1,332** |
| Project's own validators passing | 6 of 7 | **7 of 7** |
| Longest line in `App.tsx` | 1,816 chars | **241 chars** |

**No content was removed.** `git diff` across `content/`, `content-v2/`,
`curriculum/` and `data/` against the starting commit is empty, and the Phase 0
inventory re-counts identically: 11 legacy subjects, 121 lessons, 111 notes,
1,032 legacy questions, 28 canonical courses, 123 units, 782 topics, 5,412
unique questions.

---

## 2. The three things that mattered most

### The practice screen hid the answer

`RichQuestionPractice` — the screen serving all 5,412 canonical questions —
rendered incorrect-answer feedback as:

> **Correct answer:** B

That is the option's internal id, not its text. A student who got a question
wrong was told a letter. The older legacy component did this correctly, which is
exactly why the gap was easy to miss: the two practice components diverged.

Fixed to resolve the id to its option and render the full text. A regression
test now asserts that every recorded `correctAnswer` resolves to a real option,
so the data can't silently drift into the same failure.

### The homepage advertised a catalog it wasn't showing

The hero read *"Explore all 28 subjects."* Directly beneath it was a grid of the
**11** older legacy subjects — two of which (`organic-chemistry-2`,
`nclex-review`) rendered as empty `0 notes / 0 questions` cards.

So the first impression was a smaller, partly-broken-looking catalog that
contradicted its own headline. The site was carrying two parallel content
systems and leading with the wrong one.

The homepage now leads with the canonical curriculum, shows six featured
courses, and links to all 28. **Every legacy URL still works**, the legacy
library is still linked from the nav and the footer, and nothing was deleted.

### Every social share was imageless

`og:image` and `twitter:image` were the relative string `og.png`. Facebook,
LinkedIn, Slack, iMessage and X all require an absolute URL, so every share of
this site rendered as a bare text link. `og:url` and the canonical link were
injected by JavaScript only, so crawlers that don't execute JS saw neither.

Now absolute in the served HTML, refreshed per route at runtime, and — the part
that actually matters for a 1,332-page static site — each generated route entry
point is written with **its own** canonical and `og:url` rather than all 1,332
claiming the homepage.

---

## 3. Design decisions, and why

Full system in `DESIGN.md`. The choices worth defending:

**Deep navy + teal on warm paper, one amber accent.** The audience is 18–24 and
stressed. Low-chroma surfaces and a single accent read as academic and calm; the
warm neutral (`#f6f4ef`) keeps it from feeling like a clinical dashboard. Colour
never carries meaning alone — right/wrong answers also carry an icon and a text
label.

**No web fonts — a deliberate reversal.** The old stylesheet asked for `Inter`
and never loaded it, so nobody ever saw the intended typeface. There were two
honest fixes: ship font files, or commit to a system stack. This site loads
**zero external origins** — no CDN, no analytics, no third-party fonts — which
is a real privacy and performance property for a student-facing site, and the
audit specifically credited the project for it. Spending that on a typeface,
plus ~90–150 KB before first paint on a mobile-first site, wasn't worth it.
`--font-display` and `--font-sans` are the only two values to change if you
later want a brand face; the upgrade path is in `DESIGN.md`.

**One card primitive instead of six.** `.subject-card`, `.curriculum-card`,
`.note-card`, `.unit-card`, `.result-card` and `.choice-card` were near-copies.
There is now one `.card` with modifiers. Card grids use
`repeat(auto-fill, minmax(17rem, 1fr))`, so they reflow smoothly rather than
snapping at breakpoints.

**The heading link owns the card, not a wrapper.** Wrapping a whole card in an
anchor gives it an accessible name that is every word inside it concatenated.
The heading link carries a `::after` overlay instead, so the click target is the
full card while the accessible name stays the title.

**Study modes became a real tablist.** They were `<button aria-pressed>` in a
`<nav>`, announced as "toggle button, pressed" with no arrow-key support. They
are now `role="tab"` with roving `tabindex` and Arrow/Home/End — verified by
test, not by inspection.

**Heading depths are compressed, not mapped.** Source documents disagree about
depth — some start at `#`, some at `##`, several jump straight from `#` to
`###`. Rather than assume, `MarkdownDocument` collects the depths a document
actually uses and maps them onto consecutive levels below the page `<h1>`. The
outline is valid whatever the source did.

---

## 4. How this was verified (please read this bit)

**Neither this environment nor the mounted workspace VM could reach a package
registry, and the installed `node_modules` contains darwin-arm64 binaries while
both machines are Linux.** `vite`, `tsc` (TypeScript 7 is a native binary) and
`vitest` therefore could not run here.

Rather than hand back unverified edits, the work included building a harness
(`web/tools/`, documented in `tools/README.md`) that compiles the TSX app to
browser-native ES modules — resolving `import.meta.glob`, `?raw`, `?url` and
JSON imports at compile time — purely so the real site could be loaded in
Chromium and audited. Verification is therefore **measured, not asserted**:

- `tools/audit.mjs` — 17 routes × 3 viewports: console errors, failed requests,
  axe-core, per-element horizontal overflow, screenshots.
- `tools/crawl.mjs` — followed in-app links across 300 routes.
- `tools/interactions.mjs` — 28 behavioural assertions.
- `tools/contrast.mjs` — 23 WCAG contrast pairs.
- The project's own 7 validators, all of which now pass.

**Two honest caveats:**

1. **TypeScript was never typechecked** and **the Vitest suite was never
   executed**, because their binaries cannot run here. The type annotations were
   written and reviewed by hand and the tests were updated to match the changes,
   but the first thing to do on your Mac is §5.
2. **`dist/` is stale.** It is the output of your real Vite build from before
   this work, and it was deliberately left alone — regenerating it with the
   local harness would have replaced a genuine production build with an
   unbundled development one. Re-run the build.

The "before" numbers in `AUDIT_REPORT.md` were re-measured from a clean checkout
of the starting commit through the same harness, so the comparison is
like-for-like rather than remembered.

---

## 5. Preview it locally

From the `_Web_` package on your Desktop, the site is at
`GITHUB_VM/Web/Web_Apps/ELI_Nur_Web/web` — this is the directory this file is
in, so `cd` into it and:

```bash
npm run typecheck     # do this first — see caveat 1 above
npm test              # and this
npm run dev           # then open the printed address, normally http://localhost:5173/
```

Production build (regenerates `dist/`, the route entry points and the sitemap):

```bash
npm run build:pages
```

To re-run the audit harness against a running dev server:

```bash
BASE=http://localhost:5173 node tools/audit.mjs
BASE=http://localhost:5173 node tools/interactions.mjs
node tools/contrast.mjs
```

If `npm run typecheck` or `npm test` reports anything, it will be a type
annotation or a test expectation in code I changed — the runtime behaviour is
verified. `AUDIT_REPORT.md` maps every change to the issue it closes.

---

## 6. Deferred, with reasoning

| Item | Severity | Why it was left | What to do |
|---|---|---|---|
| `public/og.png` is 901 KB | Medium | No image-optimisation binary is installable in this environment, and re-encoding the only social asset by hand risked degrading it. Not on the critical rendering path — only social scrapers fetch it. | `npx @squoosh/cli --oxipng auto public/og.png`, or any exporter at ~85% quality. Expect ~40 KB. |
| Legacy vs canonical Microbiology question counts disagree | Medium | Legacy reports 35 notes / 0 questions; canonical reports a full bank. Which source is authoritative is an editorial call, not a front-end one. Silently picking one would misrepresent the content. | Decide which pipeline is authoritative, then reconcile in the generator. |
| `getApprovedQuestionCount()` derives rather than counts | Low | A counted value needs either the 1.8 MB question file eagerly loaded on first paint — a real performance regression — or a new generated data file the existing `scripts/` pipeline cannot produce. | Nothing urgent. A regression test now asserts the derived value equals the real count for all 11 subjects, so drift fails loudly. |
| Three product names in one package | Low | `README` says "ELI Explains", `package.json` says `study-compass`, the domain is `studycorehub.com`, and the UI says "Study Compass". Renaming is a brand decision with content consequences. | Pick one. The UI name is the only one a student sees, so changing it is the expensive option. |
| `src/types/index.ts` one-line re-export | Low | Removing it churns every import path for no behavioural gain. | Leave it. |

---

## 7. Recommended next steps

**Do first**

1. Run `npm run typecheck && npm test` and clear anything they report.
2. Run `npm run build:pages` — `dist/` is stale until you do.
3. Compress `og.png`.
4. Submit `https://studycorehub.com/sitemap.xml` to Google Search Console. 1,331
   URLs became discoverable that previously were not.

**Worth doing next**

5. **Add a "last reviewed" date to topic pages.** The audit found 4,092 question
   placements flagged for citation review. The site now surfaces that flag
   honestly during practice, but an advising office will ask "how current is
   this?" and there is no answer on the page.
6. **Close the content gaps the handoff already identified** — 3 topics without a
   plain-language explanation, 29 without references, 6 courses without question
   banks. The UI states these plainly now, which buys credibility, but they are
   the most visible remaining rough edge.
7. **Save quiz progress.** Practice state resets on reload. `localStorage`
   keyed by course would make the 5,412-question bank genuinely usable across
   sessions, and it is a small change against the existing components.

**Later**

8. Retire the legacy content system once the canonical one demonstrably covers
   it, keeping the old URLs as redirects. Two parallel systems is the root cause
   of several issues in this report, including the one in §2.1.
9. Consider a service worker for offline study — the content is static and the
   audience studies on transit.
10. If you want a brand typeface, self-host one variable font and keep the
    current stacks as the fallback. Do not add a font CDN.

---

## 8. Two things I found on your Desktop copy (not caused by this work)

**1. Your git repo was already dirty, and git cannot run on it from here.**

`ELI_Nur_Web/.git` had **137** uncommitted entries *before* this pass — including
`src/data/routes.json`, `src/lib/content/search.ts` and `scripts/browser-audit.mjs`,
which I never touched. Those are leftovers from the previous session that
produced `WEBSITE_HANDOFF_AND_RECOMMENDATIONS.md`.

I could not commit for you: git on this mount fails with
`unable to unlink '.git/index.lock': Operation not permitted`, and `git log`
dies with a **bus error**. So the changes are on disk but **uncommitted**.

Before you commit, separate the two sets of changes — mine are listed in §1 of
`AUDIT_REPORT.md` and in `STATE.md`; everything else was already there:

```bash
git status                 # expect the prior session's changes plus mine
git add -p                 # stage deliberately, not with `git add -A`
```

**2. There are ~70 conflict-copy duplicates (`… 2.md`, `… 2.json`).**

Files like `web/README 2.md`, `web/data/questions 2.json` and
`web/architecture/accessibility-plan 2.md` sit next to their originals with
identical timestamps — the same class of artifact the earlier handoff noted in
`dist/`. They are untracked, unreferenced, and unreadable through this mount, so
I left every one of them alone. They look like sync-conflict copies (iCloud
Drive or similar).

```bash
find . -name "* 2.*" -not -path "*/node_modules/*" | wc -l   # check the count
find . -name "* 2.*" -not -path "*/node_modules/*"           # review before removing
```

Worth clearing once you have confirmed none is newer than its original — they
inflate the package and will confuse future audits.

**One housekeeping note:** two files I retired could not be deleted through this
mount, so following the safe convention they were **moved**, not removed, to
`_Web_/_to_delete/src-pages/` — `CurriculumPilot.tsx` and `SearchPage 2.tsx`.
Readable copies of both are preserved in `web/archive/legacy-src/`, so
`_Web_/_to_delete/` can be deleted outright. The transfer archives used to move
the work onto your disk are in `_Web_/_to_delete/transfer-archives/` and can go
too.
