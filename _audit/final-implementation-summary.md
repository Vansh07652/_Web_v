# MedMosa — final implementation summary

The closing document for the seven-phase implementation. It records what was
built, what was deliberately not built, what the gates say, and what is left.

Everything below was verified against the repository before it was written.
Where a number appears, it came from running the tool that produces it, not from
a plan. Where something could not be verified, the report says so.

Companion documents: `implementation-change-log.md` (one row per phase),
`phase-0-baseline.md` through `phase-7-final-validation.md` (per-phase detail),
`baseline-inventory.md` (the pre-implementation state of the repository), and
`coverage-report.md` (generated, per-course coverage).

---

## 1. Completed work, by phase

### Phase 0 — Baseline

Observation only. Established the verified state of the repository before any
change: toolchain, both content systems, schemas, routes, local progress
storage, quality gates, and a field-by-field metadata audit. No application
code, content or configuration was touched.

Output: `_audit/baseline-inventory.md`, `_audit/phase-0-baseline.md`,
`_audit/implementation-change-log.md`.

### Phase 1 — Content governance

Two generated sidecars, four generators, two validators, one runtime reader and
four documents. Nothing in the corpus was edited.

- `content-v2/indexes/source-registry.json` — **136 source records**: 24
  collections and 112 reference hosts. Only **2** carry an explicit license, and
  both are CC BY 4.0 (OpenStax and BCcampus). Every other record omits `license`
  and `attributionRequired` rather than guessing one.
- `content-v2/indexes/topic-metadata.json` — **1,409 topics**, one per catalog
  topic. **352** carry a derived difficulty, **64** carry `relatedTopics`, and
  **1,364** are publishable.
- Generators: `scripts/build-source-registry.mjs`,
  `scripts/build-topic-metadata.mjs`, `scripts/build-coverage-report.mjs`, and
  the shared reader `scripts/curriculum-corpus.mjs`.
- Validators: `scripts/validate-source-registry.mjs`,
  `scripts/validate-metadata.mjs`. Both re-derive their file from the corpus and
  compare it byte for byte, so a hand edit fails.
- Runtime: `src/lib/content/metadata.ts`.
- Docs: `docs/content-governance.md`, `docs/source-and-license-policy.md`,
  `docs/topic-metadata-guide.md`, `docs/content-statuses.md`.

### Phase 2 — Learning experience

- `src/components/ExplanationTabs.tsx` — the college level / plain language /
  compare switch, implemented as a proper ARIA tablist.
- `src/components/TopicDetails.tsx` — topic facts, source records and the
  "continue with" related-topic list.
- `src/components/CourseTransparency.tsx` — per-course coverage, shown to the
  learner rather than buried in a report.
- `src/components/ListenControls.tsx` — the read-aloud controls.
- `src/styles/topic.css`, and a substantial rework of
  `src/pages/CurriculumExplorer.tsx`.

**Two features were deliberately not built.** Prerequisites and exam relevance
have no evidence in the corpus: there is no topic-to-topic ordering edge
anywhere, and no topic, question or catalog record names an exam blueprint,
competency code or test-plan section. A cross-course "also appears in" was
measured across all 25,000 question placements and found to be **zero** — no
question in this corpus maps to topics in more than one course — so it was not
built either.

### Phase 3 — Practice and review

- `src/lib/review/mastery.ts` — `computeMastery`, four statuses (`new`,
  `learning`, `practicing`, `confident`), `isReviewDue`.
- `src/lib/review/scheduler.ts` — a spaced-repetition ladder of
  **`[1, 3, 7, 14, 30, 60]` days**, plus `buildReviewQueue`, `buildWeakTopics`
  and `summariseReview`.
- Extensions to `src/lib/progress.ts` for per-question and per-topic history.
- Docs: `docs/local-progress-and-privacy.md`, `docs/review-algorithm.md`.

### Phase 4 — Study paths

- `src/lib/paths/study-paths.ts` — **5 paths**: `pre-health-foundations`,
  `healthcare-foundations`, `allied-health`, `pathophysiology`,
  `mcat-foundations`. Four are derived from catalog categories; the fifth is a
  single course. Membership is computed from the catalog at load, so no
  hand-maintained slug list can drift from the corpus.
- `src/lib/paths/planner.ts` — a local study planner with clamped inputs
  (10–240 minutes a day, 1–7 days a week, up to 400 days) and its own storage
  key.
- Doc: `docs/study-paths.md`.

### Phase 5 — Calculations

- `src/lib/quiz/calculation.ts` — grading for numeric-entry questions, with a
  reviewed unit table.
- `scripts/validate-question-quality.mjs` — the gate that keeps the unit table
  and the corpus in agreement.

**The corpus finding that shaped this phase.** Of 25,000 question placements,
**1,073** have no `computation` key at all, **23,617** have it set to literal
`null`, and only **310** carry a real computation object. The numeric-entry bank
is therefore 310 questions, not 23,927, and the module returns `undefined` for
everything else rather than inventing a number.

`computation.unit` is free text with **175 distinct values**, most appearing
once and many being whole phrases. A reviewed table of **30 canonical units**
plus **139 reviewed answer labels** covers them. `M` (molarity) and `m` (metres)
were deliberately excluded: unit matching folds case, which would make the two
indistinguishable, and accepting metres for a molarity answer is exactly the
silent mis-grade the module exists to prevent.

### Phase 6 — Speech and search

- `src/lib/speech.ts` — a controller over the browser's own `speechSynthesis`
  and nothing else. No cloud voice, no network call, no autoplay.
- `src/lib/content/synonyms.ts` — **39 curated entries**, matched whole-word.
- `src/lib/content/search-filters.ts` — deterministic ranking and filtering over
  the 1,409-entry curriculum index, pure and independent of React and of the
  progress store.
- Docs: `docs/text-to-speech.md`, `docs/search-and-discovery.md`.

### Phase 7 — SEO and structured data

- `src/lib/structured-data.ts` — emits **only** `WebSite`, `BreadcrumbList` and
  `ListItem`. `Course`, `Quiz`, `Question`, credential types and medical types
  were declined: nothing in this repository backs those claims.
- `scripts/validate-structured-data.mjs` — fails the build if a refused type
  appears, or if `index.html` loses the crawler-facing tags, or if the canonical
  and `og:url` tags stop matching the regexes the Pages fallback rewrites them
  with.
- Doc: `docs/seo-and-structured-data.md`.
- A stale `SearchAction` was removed from `index.html`, because
  `src/pages/SearchPage.tsx` keeps its query in component state and never reads
  a `q` query parameter — `/search?q=` was not a working endpoint.

### Legal layer

- `src/pages/LegalPages.tsx` — Terms of use, Privacy policy, Licensing and
  attribution, Accessibility statement.
- `src/components/LegalNotice.tsx` — `StudyUseNotice` (`role="note"`) and
  `SiteLegalFooter`.
- `src/lib/legal.ts` — the shared strings, extracted to break an import cycle.
- `src/styles/legal.css`, `docs/legal-and-licensing.md`.
- Copyright line: `© 2026 MedMosa · Created by Vansh Tiwari`.

### Integration

- Eight new routes wired in `src/App.tsx` and declared in
  `src/data/routes.json`, which now holds **30 patterns**: `/coverage`,
  `/review`, `/paths`, `/paths/:pathSlug`, `/terms`, `/privacy`, `/licensing`,
  `/accessibility`.
- `scripts/site-routes.mjs` gained `STUDY_PATH_SLUGS` and the new static routes,
  so the sitemap and the GitHub Pages route entry points cover them.
- `scripts/validate-study-paths.mjs` guards the three places a study path is
  declared — the TypeScript module, the generator mirror and `routes.json` —
  from drifting apart.
- New pages `src/pages/StudyTools.tsx` (coverage, review, paths, path detail)
  and styles `src/styles/study-tools.css`.
- `src/components/ui.tsx` gained Review and Paths in the primary nav, a Study
  tools footer column, and the legal footer block.

### Two engineering fixes worth recording

**1. The metadata sidecar was 8x too big for the first-paint bundle.**
`content-v2/indexes/topic-metadata.json` is imported statically by
`src/lib/content/metadata.ts`, so every byte of it lands in the bundle a phone
downloads first. Pretty-printed, with a full string on every field of every
entry, it was **842,493 bytes**. It was re-encoded into an interned format —
lookup tables for source ids, program combinations and the two enums, positional
entry arrays, optional fields dropped from the right — giving **100,992 bytes,
an 88.0% reduction**. The decoded output was proven byte-identical for all 1,409
topics before and after, and `scripts/validate-metadata.mjs` re-checks that on
every run.

**2. Two runtime import cycles were removed.** `ui.tsx -> LegalNotice.tsx ->
ui.tsx` was broken by extracting the shared strings into `src/lib/legal.ts`,
which imports nothing. `progress.ts -> review/scheduler.ts -> progress.ts` was
broken by extracting the date helpers into `src/lib/day-keys.ts`. A cycle scan
of `src/` — 59 modules, following runtime imports and dynamic imports, ignoring
type-only imports — now reports **zero cycles**.

---

## 2. Materially changed directory tree

Verified with `git status --porcelain` from the repository root: 56 entries, 13
modified and 43 created (counting each untracked directory once). Untracked
directories are expanded below.

```text
README.md                                    updated
web/
├── README.md                                updated
├── index.html                               updated  (stale SearchAction removed)
├── manifest.json                            updated  (regenerated; see note)
├── package.json                             updated  (9 new scripts)
├── _audit/                                  new directory
│   ├── baseline-inventory.md
│   ├── coverage-report.json                 generated
│   ├── coverage-report.md                   generated
│   ├── implementation-change-log.md
│   ├── phase-0-baseline.md
│   ├── phase-1-content-foundation.md
│   ├── phase-2-learning-experience.md
│   ├── phase-3-practice-review.md
│   ├── phase-4-study-paths.md
│   ├── phase-5-accessibility-support.md
│   ├── phase-6-search-seo.md
│   ├── phase-7-final-validation.md
│   └── final-implementation-summary.md
├── docs/                                    new directory
│   ├── content-governance.md
│   ├── content-statuses.md
│   ├── development-and-validation.md
│   ├── legal-and-licensing.md
│   ├── local-progress-and-privacy.md
│   ├── review-algorithm.md
│   ├── search-and-discovery.md
│   ├── seo-and-structured-data.md
│   ├── source-and-license-policy.md
│   ├── study-paths.md
│   ├── text-to-speech.md
│   └── topic-metadata-guide.md
├── content-v2/
│   ├── catalog.json                         unchanged
│   ├── build-report.json                    unchanged
│   ├── subjects/                            unchanged  (33 courses)
│   ├── client/                              unchanged
│   └── indexes/                             new directory
│       ├── source-registry.json             generated
│       └── topic-metadata.json              generated, interned
├── scripts/
│   ├── curriculum-corpus.mjs                new  (shared corpus reader)
│   ├── build-source-registry.mjs            new
│   ├── build-topic-metadata.mjs             new
│   ├── build-coverage-report.mjs            new
│   ├── validate-source-registry.mjs         new
│   ├── validate-metadata.mjs                new
│   ├── validate-question-quality.mjs        new
│   ├── validate-study-paths.mjs             new
│   ├── validate-structured-data.mjs         new
│   ├── site-routes.mjs                      updated
│   └── generate-sitemap.mjs                 updated
├── src/
│   ├── App.tsx                              updated
│   ├── main.tsx                             updated  (3 new stylesheets)
│   ├── components/
│   │   ├── CourseTransparency.tsx           new
│   │   ├── ExplanationTabs.tsx              new
│   │   ├── LegalNotice.tsx                  new
│   │   ├── ListenControls.tsx               new
│   │   ├── TopicDetails.tsx                 new
│   │   └── ui.tsx                           updated
│   ├── data/routes.json                     updated  (30 patterns)
│   ├── lib/
│   │   ├── content/
│   │   │   ├── metadata.ts                  new
│   │   │   ├── search-filters.ts            new
│   │   │   └── synonyms.ts                  new
│   │   ├── paths/
│   │   │   ├── planner.ts                   new
│   │   │   └── study-paths.ts               new
│   │   ├── quiz/calculation.ts              new
│   │   ├── review/
│   │   │   ├── mastery.ts                   new
│   │   │   └── scheduler.ts                 new
│   │   ├── day-keys.ts                      new  (cycle fix)
│   │   ├── legal.ts                         new  (cycle fix)
│   │   ├── speech.ts                        new
│   │   ├── structured-data.ts               new
│   │   └── progress.ts                      updated
│   ├── pages/
│   │   ├── CurriculumExplorer.tsx           updated
│   │   ├── LegalPages.tsx                   new
│   │   └── StudyTools.tsx                   new
│   └── styles/
│       ├── legal.css                        new
│       ├── study-tools.css                  new
│       └── topic.css                        new
└── tests/
    ├── accessibility/topic-experience.test.tsx   new
    └── unit/
        ├── calculation.test.ts              new
        ├── content-metadata.test.ts         new
        ├── mastery.test.ts                  new
        ├── planner.test.ts                  new
        ├── review-scheduler.test.ts         new
        ├── search-filters.test.ts           new
        ├── speech.test.ts                   new
        ├── structured-data.test.ts          new
        ├── study-paths.test.ts              new
        └── synonyms.test.ts                 new
```

Note on `manifest.json`: it is the SHA-256 release manifest and is regenerated
by `npm run release:manifest`, not hand-edited. It is currently **stale** —
see section 10.

---

## 3. Features, by what a learner does

### Learn

- **Two explanations, side by side.** `ExplanationTabs` switches between the
  college-level note and the plain-language explanation, or shows both at once
  in a compare layout. Full ARIA tabs semantics, arrow-key navigation.
- **Honest topic facts.** `TopicDetails` shows estimated study time, question
  count, content status and difficulty when one was derived — and shows nothing
  where the corpus says nothing.
- **Where the material came from.** Every topic lists its source records,
  resolved through the source registry.
- **Continue with.** Related topics, but only where a real question maps to both
  topics. 64 topics of 1,409 have them; the rest show nothing rather than a
  guess.
- **Read aloud.** `ListenControls` over `src/lib/speech.ts`, section by section,
  with the markup stripped so only prose is spoken. Never autoplays.
- **Course transparency.** `CourseTransparency` puts each course's real coverage
  on the course page, and `/coverage` puts all 33 courses in one table.

### Practice

- **Multiple choice and multiple select**, unchanged from the existing engine.
- **Numeric entry** for the 310 questions that carry a real computation, graded
  against the corpus's own `expected_value` and `tolerance`, with unit
  conversion inside a dimension and never across one. A free-text answer label
  is graded on the number alone, and an answer that supplies a unit anyway is
  rejected rather than quietly accepted.
- **Question quality is gated**, not assumed: `validate:question-quality` checks
  that every multiple-choice question can be answered and every numeric question
  can be graded.

### Review

- **Mastery per topic** — `new`, `learning`, `practicing`, `confident` —
  computed from the local answer history.
- **A spaced-repetition queue** on the `[1, 3, 7, 14, 30, 60]`-day ladder.
- **A weak-topic list** and a review summary, on `/review`.
- All of it computed in the browser from `localStorage`. Nothing is uploaded and
  nothing is required to sign in.

### Plan

- **Five study paths** on `/paths`, each with its real course membership, its
  real coverage figures, and an explicit list of its limitations.
- **A local planner** that turns a path plus a weekly time budget into dated
  sessions, with clamped inputs and a disclaimer that says what the estimate is
  based on.

### Support

- **Search** with medical synonyms (39 curated entries, whole-word matched),
  deterministic ranking, and filters that can be described back to the reader in
  words.
- **Four policy pages** — Terms, Privacy, Licensing and attribution,
  Accessibility — reachable from every page footer.
- **A study-use notice** next to the content, announced as an aside.
- **Twelve documents** under `docs/`, including
  `development-and-validation.md`, which is the practical guide to running
  everything in this repository.

---

## 4. Files created and updated

### Created — 43 tracked-tree entries

| Area | Count | Files |
| --- | ---: | --- |
| Generated content sidecars | 2 | `content-v2/indexes/source-registry.json`, `content-v2/indexes/topic-metadata.json` |
| Build and validation scripts | 9 | `curriculum-corpus.mjs`, `build-source-registry.mjs`, `build-topic-metadata.mjs`, `build-coverage-report.mjs`, `validate-source-registry.mjs`, `validate-metadata.mjs`, `validate-question-quality.mjs`, `validate-study-paths.mjs`, `validate-structured-data.mjs` |
| React components | 5 | `CourseTransparency.tsx`, `ExplanationTabs.tsx`, `LegalNotice.tsx`, `ListenControls.tsx`, `TopicDetails.tsx` |
| Library modules | 12 | `content/metadata.ts`, `content/search-filters.ts`, `content/synonyms.ts`, `paths/planner.ts`, `paths/study-paths.ts`, `quiz/calculation.ts`, `review/mastery.ts`, `review/scheduler.ts`, `day-keys.ts`, `legal.ts`, `speech.ts`, `structured-data.ts` |
| Pages | 2 | `LegalPages.tsx`, `StudyTools.tsx` |
| Stylesheets | 3 | `legal.css`, `study-tools.css`, `topic.css` |
| Test suites | 11 | 10 unit suites plus `accessibility/topic-experience.test.tsx` |
| Documentation | 12 | everything under `docs/` |
| Audit reports | 13 | everything under `_audit/`, including two generated coverage files |

### Updated — 13 files

| File | What changed |
| --- | --- |
| `web/index.html` | Stale `SearchAction` removed, with the reason recorded in a comment. |
| `web/manifest.json` | Regenerated SHA-256 release manifest. |
| `web/package.json` | Nine new scripts: three builders, five validators, and the `validate` chain updated to include them. |
| `web/scripts/site-routes.mjs` | `STUDY_PATH_SLUGS` and the seven new static routes. |
| `web/scripts/generate-sitemap.mjs` | Priorities for the new routes; legal pages indexable but ranked last. |
| `web/src/App.tsx` | Eight new routes, per-route structured data with teardown, breadcrumb title resolution, `PAGE_METADATA` for the new pages. |
| `web/src/main.tsx` | Imports the three new stylesheets. |
| `web/src/components/ui.tsx` | Review and Paths in the primary nav, a Study tools footer column, the legal footer block. |
| `web/src/data/routes.json` | Eight new route patterns; 30 in total. |
| `web/src/lib/progress.ts` | Per-question and per-topic history for mastery and scheduling; date helpers moved out to `day-keys.ts`. |
| `web/src/pages/CurriculumExplorer.tsx` | Rebuilt around `ExplanationTabs`, `TopicDetails`, `ListenControls` and `CourseTransparency`; tabs reduced from five to three. |
| `web/README.md` | New routes, validators and docs. |
| `README.md` (repository root) | New validators, docs and CI note. |

---

## 5. Source and provenance preservation

**Confirmed: no file under `content-v2/subjects/` or `content-v2/client/` was
modified.** `git status --porcelain` reports exactly one entry under
`content-v2/`, and it is the new untracked `indexes/` directory. Not one of the
33 course bundles, 1,409 topic bundles, question banks or client mirror files
shows as modified.

**The metadata layer is a sidecar.** `content-v2/indexes/topic-metadata.json`
and `content-v2/indexes/source-registry.json` sit beside the corpus and are
joined to it at runtime by topic id. They add derived fields; they never edit,
override or shadow the corpus. `scripts/curriculum-corpus.mjs`, the shared
reader every generator uses, is documented as side-effect-free and writes only
into `content-v2/indexes/`.

The consequence, which is the point: the mirror-equivalence checks and the
hard-coded totals asserted by `scripts/validate-all-curricula.mjs` still pass
untouched. It still reports 33 subjects, 153 units, 1,409 topics, 1,047 teaching
topics and 24,400 unique questions, with zero errors.

Provenance is preserved rather than summarized. Every topic's
`provenance.sourceCollection` and every reference host in its
`sections.references` becomes a record in the source registry, and the registry
copies a license only where the repository literally states one — two records of
136. The other 134 omit `license` and `attributionRequired` rather than assert a
license nobody wrote down.

---

## 6. Content and status model

A five-value content status is now defined, of which three are ever emitted:

| Status | Emitted? | Derived from | Count |
| --- | --- | --- | ---: |
| `source-grounded` | yes | topic bundle status `final` | 1,364 |
| `needs-medical-review` | yes | `final_requires_citation_review` | 10 |
| `draft` | yes | `available` | 35 |
| `medically-reviewed` | **never** | — | 0 |
| `archived` | not currently | — | 0 |

`medically-reviewed` is legal in the schema and is never emitted, because
nothing in this repository documents a credentialed clinical review. Its
presence in the table is deliberate: the code for a status never changes
meaning, so the interned encoding stays stable when a status is eventually used.

**The publish rule was tightened.** The brief phrased it as
`publish = contentStatus !== "draft"`, but also required the validator to reject
publishing a `needs-medical-review` topic. Those disagree for exactly 10 topics.
The stricter reading was implemented — `publish` is true only for
`source-grounded` — and both validators enforce it. The 10 affected topics are
all in `pharmacology-foundations` and are held from publish. If the looser
reading was intended, those 10 review-flagged pharmacology topics would go live;
confirm before changing it.

Other derived fields, each with an explicit rule recorded in the file itself:

- `programs` — from the topic's subject category, by a fixed mapping.
- `estimatedStudyMinutes` — `round(characters / 900 + questions)`, clamped to
  2–90 minutes.
- `difficulty` — emitted only where at least 5 exact-mapped questions carry a
  difficulty; the modal value wins. **352 of 1,409** topics clear that bar.
- `relatedTopics` — only where one question maps to two topics; up to six, by
  co-occurrence. **64 of 1,409**.
- `citationReviewQuestionCount` — how many of a topic's mapped questions set
  `citationReviewRequired`. Across the corpus that is **5,463 placements**.

Six fields were considered and omitted, each with the reason stored in the file:
`prerequisites`, `examAlignment`, structured `learningObjectives`, `tags`,
`lastReviewed`, and license or author attribution on the topic.

---

## 7. Privacy

**Nothing added by this implementation sends anything anywhere.** There is no
analytics, no telemetry, no beacon and no third-party script.

- Progress, mastery, review schedule, study-plan inputs and the read-aloud rate
  preference are written to `localStorage` under keys the app owns, read back
  from there, and never transmitted.
- `src/lib/speech.ts` uses the browser's own `speechSynthesis`. No audio is
  uploaded and no voice service is contacted.
- Structured data is computed in the browser from the current route and injected
  into the document.
- The search index, the curriculum and both sidecars are static files served
  with the site.
- Nothing in this implementation requires an account. The existing auth
  scaffolding was not extended and is not required to study.
- `/privacy` publishes all of this to the reader, and
  `docs/local-progress-and-privacy.md` is the engineering account of it.

---

## 8. Accessibility improvements

- **ARIA tabs, done properly.** `ExplanationTabs` uses `role="tablist"` with an
  `aria-label`, `role="tab"` with `aria-selected` and `aria-controls`, a single
  `role="tabpanel"`, and left/right arrow-key movement.
- **Read-aloud** for learners who process spoken text more easily, with markup
  stripped so nothing unspeakable is announced, an explicit rate control, and no
  autoplay ever.
- **Plain-language explanations** are a first-class tab, not a footnote.
- **The study-use notice** is `role="note"`, so it is announced as an aside
  rather than as an alert.
- **The footer's policy links** sit in a `nav` labelled `Legal and policies`.
- **An accessibility statement** at `/accessibility`, stating the target, what
  is implemented and what is known to be missing.
- **A new accessibility suite**, `tests/accessibility/topic-experience.test.tsx`
  (10 cases), alongside the existing `semantic-markup.test.tsx`.

Neither accessibility suite could be executed in the sandbox, and the axe-core
browser audit (`npm run test:browser`) needs a production build and a Chromium
binary and was not run. Both run in CI.

---

## 9. Quality gates added

Five new gates, all registered in `package.json`:

| Command | What it guards |
| --- | --- |
| `npm run validate:metadata` | Re-derives `topic-metadata.json` from the corpus and compares byte for byte; checks every topic id resolves, every `exactQuestionCount` matches the bundle's own `availability`, every enum code is legal, and every `sourceId` resolves in the registry. |
| `npm run validate:source-registry` | Re-derives `source-registry.json` the same way; checks the schema version, that every collection and reference host in the corpus has a record, and that no license was invented. |
| `npm run validate:question-quality` | Every multiple-choice question is answerable; every numeric question is gradable; the unit table in `calculation.ts` and the copy in the validator have not drifted apart. |
| `npm run validate:study-paths` | The three places a study path is declared — `study-paths.ts`, `STUDY_PATH_SLUGS` in `site-routes.mjs`, and `routes.json` — still agree. |
| `node scripts/validate-structured-data.mjs` | No refused schema type appears in `structured-data.ts`; `index.html` still carries the crawler-facing tags; the canonical and `og:url` tags still match the regexes the Pages fallback rewrites them with. |

Three new generators are also registered — `build:source-registry`,
`build:topic-metadata`, `build:coverage-report` — and the `validate` chain in
`package.json` was extended to run all five new validators.

**None of the five is in CI yet.** See section 12.

---

## 10. Commands run, and what they said

Run from `web/`. Full output and the gate table are in
`phase-7-final-validation.md`.

| Command | Result |
| --- | --- |
| `npm run validate:source` | **FAIL — `MANIFEST_HASH` only** (stale manifest; see below) |
| `npm run validate:ap1` | PASS — 8 units, 54 topics, 553 published questions |
| `npm run validate:curricula` | PASS — 33 subjects, 153 units, 1,409 topics, 24,400 unique questions |
| `npm run validate:metadata` | PASS — 1,409 entries, 1,364 publishable, 352 difficulties, 64 related sets |
| `npm run validate:source-registry` | PASS — 136 records, 24 collections, 112 reference hosts, 2 licensed |
| `npm run validate:question-quality` | PASS — 25,000 questions, 310 gradable, 30 units, 139 labels |
| `npm run validate:study-paths` | PASS — 5 declared, 5 mirrored |
| `npm run validate:completeness` | PASS — 11 subjects, 121 lessons, 111 notes, 1,032 questions |
| `npm run validate:routes` | PASS — 30 route patterns |
| `npm run validate:architecture` | PASS — 37 required artifacts, 67 files scanned |
| `npm run check:links` | PASS — 111 note routes, 121 lesson routes |
| `npm run check:assets` | PASS |
| `npm run scan:secrets` | PASS — 0 findings |
| `node scripts/lint` | PASS |
| `node scripts/validate-structured-data.mjs` | PASS — 3 types emitted, 15 refused types checked |
| Typecheck, `tsconfig.app.json` | PASS — 0 errors |
| Typecheck, `tsconfig.node.json` | PASS — 0 errors |
| Unit tests, 12 suites | **333 passing, 0 failing** |

**The `validate:source` failure is a stale manifest, not a defect.** Every
finding is `MANIFEST_HASH`; the gate reports no content error, no absolute path
and no secret. When the code gates were run there were four, on
`src/components/LegalNotice.tsx`, `src/components/ui.tsx`,
`src/lib/progress.ts` and `src/lib/review/scheduler.ts` — the four files touched
by the import-cycle removal, which happened after `manifest.json` was last
regenerated. Writing this documentation added two more, `README.md` and
`_audit/implementation-change-log.md`, because they are manifest entries too.
**Run `npm run release:manifest` before the next commit.**

Unit test counts, one suite per row: quiz 3, mastery 19, review-scheduler 40,
content-metadata 13, study-paths 22, planner 44, calculation 56, speech 47,
synonyms 24, search-filters 40, structured-data 23, navigation 2.

---

## 11. The production build

**It was not run locally, and here is exactly why.**

The execution sandbox cannot run `vitest` or `vite build`. The checked-out
`node_modules` was installed on macOS/arm64 and the npm registry is unreachable
from the sandbox, so the missing platform packages cannot be fetched:

- `rolldown` ships only `binding-darwin-arm64`, so on linux/x64 both `vitest`
  and `vite build` abort before doing any work.
- `typescript@7.0.2` is a wrapper around a native binary, and only
  `@typescript/typescript-darwin-arm64` is present, so `npm run typecheck` fails
  to start.

What was done instead:

1. **Type checking** used a platform-independent TypeScript **6.0.2** compiler.
   Both `tsconfig.app.json` and `tsconfig.node.json` reported zero errors. A
   TypeScript 7 run may still surface something 6.0.2 does not.
2. **Unit tests** ran through a local shim mapping the `vitest` module onto
   `node:test`, with `expect` mapped onto `node:assert/strict`. The shim is not
   committed. 333 real assertions passed; they were not produced by `vitest`.
3. **Five pre-existing suites cannot run outside Vite at all** —
   `src/tests/content.test.ts`, `src/tests/curriculum-v2.test.ts`,
   `src/tests/curriculum-all.test.ts`, `tests/unit/data-layer.test.ts` and
   `tests/integration/search-and-routes.test.ts` — because they reach modules
   that use `import.meta.glob`, a build-time transform with no Node equivalent.
   Three more did not run under the shim: the two `.tsx` accessibility suites
   (no JSX transform) and `src/tests/progress.test.ts`.
4. **The production build** was replaced with an esbuild smoke bundle during
   implementation. It completed with no unresolved imports and an estimated
   first-paint entry chunk of **668,816 bytes minified / 168,755 bytes
   gzipped**. Those figures come from that run; esbuild is not present in the
   checked-out `node_modules`, so they could not be re-derived while writing
   this report. Treat them as an order-of-magnitude estimate from a different
   bundler, not as a measurement of the Vite output.

**GitHub Actions runs the real toolchain and gates the deploy on it.**
`ci.yml` runs `npm ci` on ubuntu-latest with Node 22 — which installs the
correct linux/x64 binaries — then typecheck, lint, the full `vitest` suite, the
content, route and architecture validators, the link, asset and secret checks,
and `npm run build`. `deploy-pages.yml` runs its own validation step before
building, and its deploy job runs only if the build job succeeds. Nothing
reaches the live site without passing the real toolchain. The correct reading of
this report is: locally verified as far as this sandbox allows, with CI as the
authority on the build and the full test suite.

---

## 12. Held, deferred and incomplete work

### Held — deliberately not published

- **10 pharmacology topics.** All of `pharmacology-foundations` carries
  `needs-medical-review`, derived from the bundle status
  `final_requires_citation_review`. They are excluded from publish by the
  stricter publish rule. Releasing them requires a documented review, not a
  configuration change.

### Deferred — no evidence to build on

- **Prerequisites.** There is no topic-to-topic ordering edge anywhere in the
  corpus. Any prerequisite chain would be invented. Deferred until the corpus
  carries one.
- **Exam alignment.** No topic, question or catalog record names an exam
  blueprint, competency code or test-plan section. Deferred for the same reason.
  This includes the MCAT path, which is built from the membership of the one
  course titled "MCAT Foundations", not from the MCAT blueprint.
- **Cross-course "also appears in".** Measured across all 25,000 question
  placements: zero questions map to topics in more than one course. Nothing to
  render.
- **`medically-reviewed` as a content status.** Nothing in this repository
  evidences a credentialed clinical review. The status exists in the schema and
  is never emitted. It must only ever be emitted because a review actually
  happened and is documented.
- **Richer structured data.** `Course`, `Quiz` and `Question` markup becomes
  legitimate the day the repository holds an instructor, a credential or a
  documented review to point at.

### Incomplete — known, tracked, not blocking

- **5,463 citation-review question placements.** These are questions the
  importers flagged as needing a citation check. The flag is surfaced honestly
  in the coverage report and in the metadata sidecar's
  `citationReviewQuestionCount`, and no question was silently un-flagged. The
  review itself has not been done.
- **The 782 / 627 client-mirror inconsistency.** 782 client topic bundles have
  `aliases` and `authority` emptied; 627 retain them. This is a disagreement
  between two writer scripts, not a content decision:
  `scripts/build-all-curricula.mjs` empties both the source snapshot and the
  alias/authority metadata, while `scripts/import-generated-subjects.mjs` strips
  only the snapshot. Someone has to decide the intended contract and make one
  script match the other. Nothing in this implementation touched either script.
- **The five new validators are not in CI.** `validate:metadata`,
  `validate:source-registry`, `validate:question-quality`,
  `validate:study-paths` and `validate-structured-data.mjs` are registered in
  `package.json` and all pass, but **neither `.github/workflows/ci.yml` nor
  `.github/workflows/deploy-pages.yml` invokes them**. Until they are added, the
  sidecars, the unit table and the study-path mirror can drift without CI
  noticing. `validate:ap1`, `validate:curricula`, `validate:completeness` and
  `validate:architecture` are also absent from `deploy-pages.yml`.
- **`contact@medmosa.org` is not confirmed live.**
  `src/pages/LegalPages.tsx` publishes it as the route for corrections, takedown
  requests, privacy questions and accessibility problems. **It must be made
  live or changed before launch.** A policy page that names an address nobody
  reads is worse than one that names none.
- **`manifest.json` is stale**, as described in section 10. One command clears
  it, and it must be the last command run before a commit.
- **The copyright and source lines exist twice.** `src/lib/legal.ts` exports
  them and `src/components/ui.tsx` renders the exports, but `SiteLegalFooter` in
  `src/components/LegalNotice.tsx` repeats both as literals. They agree today;
  nothing fails if they stop agreeing.
- **The `web/README.md` product name.** The document is still titled
  "Study Compass" and describes 11 pre-nursing subjects, which is the v1 content
  system. The package, the domain and the UI are all MedMosa, and the v2
  curriculum is 33 courses. This pass added the new material without rewriting
  the existing voice; a deliberate renaming is still owed.

---

## 13. Recommended next actions

In the order they should be done.

1. **Run `npm run release:manifest`.** One command, clears the only failing
   gate. Do it before the next commit.
2. **Add the five new validators to `.github/workflows/ci.yml`**, and consider
   adding the content validators to `deploy-pages.yml` as well. They cost
   seconds and they are the only thing standing between a hand-edited sidecar
   and a silent inconsistency.
3. **Make `contact@medmosa.org` live, or change it.** This is the one item with
   a legal edge: four policy pages promise a reply at that address.
4. **Run the real build once and record the numbers.** Confirm the first-paint
   entry chunk against the esbuild estimate, and confirm that the 88.0%
   reduction of the metadata sidecar had the effect it was done for.
5. **Decide the client-mirror contract** and make `build-all-curricula.mjs` and
   `import-generated-subjects.mjs` agree, so the 782 / 627 split resolves.
6. **Plan the citation review** for the 5,463 flagged placements. It is the
   largest single piece of outstanding content work and the only one that blocks
   an honest claim of accuracy.
7. **Rename `web/README.md`** from Study Compass to MedMosa, and reconcile its
   subject list with the 33-course v2 catalog.
8. **Decide whether a clinical review is in scope at all.** If it is, the
   `medically-reviewed` status and the 10 held pharmacology topics are the first
   thing it should touch. If it is not, say so publicly on `/about` and
   `/licensing`, because the whole content model is built around not claiming
   it.
