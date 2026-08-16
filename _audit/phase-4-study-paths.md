# Phase 4 — Study paths and local planning

Scope of this report: the **pure logic** for study paths and offline planning.
No page, route or component is delivered here; the `/paths/...` UI is separate
work and `src/data/routes.json` is untouched.

## Phase objective

Give the site a defensible notion of a "study path" and a deterministic,
offline, privacy-preserving planner over it, without inventing a syllabus.

Concretely:

1. `src/lib/paths/study-paths.ts` — a small set of paths derived only from
   catalog evidence, each carrying explicit `limitations` that are rendered in
   the UI.
2. `src/lib/paths/planner.ts` — `generatePlan`, plus guarded `localStorage`
   round-tripping of six preference values and nothing else.
3. Tests for both, including determinism, clamping, hostile input and blocked
   storage.
4. `docs/study-paths.md` documenting every path, its derivation and its stated
   limitations.

The hard constraint throughout: **there is no exam blueprint anywhere in this
repository**, so no path may be presented as exam-aligned.

## Files inspected

- `content-v2/catalog.json` — the sole source of category, status and per-course
  statistics. All 33 subjects and their `statistics` blocks were read and
  totalled before any path was defined.
- `content-v2/indexes/topic-metadata.json` and
  `src/lib/content/metadata.ts` — `estimatedStudyMinutes` and the topic id
  format. Not modified.
- `scripts/build-topic-metadata.mjs` — read to learn exactly what
  `estimatedStudyMinutes` already includes, which is why question time is not
  added on top of it.
- `src/lib/progress.ts` — read in full. It is the model for the storage guard,
  the clamping discipline and the day-key arithmetic used here. Not modified.
- `src/lib/review/scheduler.ts`, `src/lib/review/mastery.ts` —
  `buildWeakTopics` is the only signal used for "this course is weak". Not
  modified.
- `src/lib/content/curriculum-v2.ts` — how the catalog is already imported and
  typed elsewhere.
- `src/data/routes.json`, `scripts/validate-routes`, `scripts/lint`,
  `scripts/validate-architecture`, `tsconfig.app.json`, `package.json` — the
  gates this work has to pass. None modified.
- `tests/unit/mastery.test.ts` and `src/tests/progress.test.ts` — house style
  for a unit suite and for the `localStorage` stub.

## Files created

- `src/lib/paths/study-paths.ts` — `StudyPath`, `StudyPathCourse`,
  `StudyPathDetail`, `STUDY_PATHS`, `listStudyPaths`, `getStudyPath`,
  `studyPathHref`, plus `estimatedMinutesForCourse` and `isStudyPathSlug` for
  the planner.
- `src/lib/paths/planner.ts` — `PlanInput`, `PlanSession`, `StudyPlan`,
  `generatePlan`, `PLAN_STORAGE_KEY`, `savePlanInput`, `readPlanInput`,
  `clearPlan`, plus `PLAN_DISCLAIMER`, `countReviewSessions`,
  `clampPlanMinutes`, `clampPlanDays` and the exported clamp bounds.
- `tests/unit/study-paths.test.ts` — 22 tests.
- `tests/unit/planner.test.ts` — 44 tests.
- `docs/study-paths.md` — every path, its derivation, its limitations, the
  planner's rules and the storage contract.
- `_audit/phase-4-study-paths.md` — this report.

## Files updated

None. No existing file in the repository was modified by this phase.

In particular `package.json`, `src/App.tsx`, `src/data/routes.json`,
`src/pages/CurriculumExplorer.tsx`, `src/lib/progress.ts`, `src/lib/review/*`,
`src/lib/content/metadata.ts`, `src/lib/quiz.ts`, `manifest.json`,
`content-v2/subjects/` and `content-v2/client/` are unchanged.

## Files moved or removed

None.

## User-facing behavior changed

Nothing yet. These are pure modules with no call site; no rendered page changes
until the `/paths` UI lands. What they make possible:

- five study paths at `/paths/<slug>`, each showing its course list, topic and
  question totals, an estimated time and a coverage summary;
- an explicit `limitations` list per path, intended to be rendered rather than
  buried;
- a local plan built from six preference values, savable and restorable in the
  browser, with honest warnings attached.

## Data/schema changes

No change to any content file, index or schema. Two read-only joins were added:

- `content-v2/catalog.json` is now imported by `src/lib/paths/study-paths.ts`.
  This is the build-side catalog, matching the shape the phase brief specified;
  `src/lib/content/curriculum-v2.ts` continues to use the `client/` mirror for
  everything it does, and neither file is affected by the other.
- Topic minutes are attributed to a course by parsing the subject slug out of
  the topic id. All 1,409 topic ids in the sidecar are
  `topic:<subjectSlug>:<unitSlug>:<topicSlug>` with a slug the catalog knows,
  and the per-course topic counts derived this way equal
  `statistics.topicCount` for all 33 courses — checked before the code was
  written, and asserted in `tests/unit/study-paths.test.ts`.

One new `localStorage` key: `medmosa.plan.v1`. It holds `pathSlug`,
`targetDate`, `daysPerWeek`, `minutesPerDay`, optional `focusCourseSlugs` and
optional `confidence`. Nothing else can reach it — `savePlanInput` sanitises
before writing, so extra fields on the object handed in are dropped rather than
stored.

## The five paths and the evidence for each

| Slug | Derivation | Courses | Topics | Questions | Est. minutes |
| --- | --- | --- | --- | --- | --- |
| `pre-health-foundations` | catalog category `pre-health-core` | 18 | 990 | 5,149 | 13,927 |
| `healthcare-foundations` | catalog category `healthcare-foundations` | 11 | 137 | 1,680 | 2,277 |
| `allied-health` | catalog category `allied-health` | 3 | 242 | 17,871 | 18,797 |
| `pathophysiology` | catalog category `pathophysiology` | 1 | 40 | 300 | 365 |
| `mcat-foundations` | the single course titled "MCAT Foundations" | 1 | 124 | 0 | 2,715 |

The rule is uniform: a path is either the full membership of one catalog
`category`, or the membership of one named course. Membership is computed from
the catalog at module load, so there is no hand-maintained slug list to drift.
The four category paths between them cover all 33 courses exactly once, which is
asserted by a test.

`estimatedMinutes` is the sum of the sidecar's `estimatedStudyMinutes` over the
path's topics. That per-topic figure is already
`round(sectionCharacterCount / 900 + exactQuestionCount)` clamped to `[2, 90]`,
so question time is **not** added again on top. Subject-wide question banks are
excluded because they attach to no topic; this is stated in the module header,
in `docs/study-paths.md` and in the path limitation copy.

## What was refused

- **No `/paths/teas`, `/paths/hesi`, `/paths/nclex` or exam-aligned
  `/paths/mcat`.** Nothing in the corpus maps a topic to an exam section, a
  content-area weight or a blueprint. Building one would have meant authoring a
  syllabus.
- **No prerequisite ordering.** The only topic-to-topic edge that exists is the
  sidecar's `relatedTopics`, which records that one question co-mapped two
  topics. That is not a prerequisite, and it is not used as one. Course order is
  catalog order and is labelled as such.
- **No difficulty ramp or "start here" recommendation.** There is no evidence
  for one at course level.
- **No hours-to-readiness figure.** `estimatedMinutes` is presented as a
  planning aid with its assumption written down, never as a target or a
  prediction.

## Test and validation commands run

```
node /path/to/typescript/bin/tsc --noEmit -p tsconfig.app.json
node scripts/lint
node scripts/validate-architecture
node scripts/validate-routes
node scripts/check-links
node scripts/check-assets
node scripts/scan-secrets
node scripts/validate-metadata.mjs
node scripts/validate-all-curricula.mjs
/root/localtest/run.sh tests/unit/study-paths.test.ts
/root/localtest/run.sh tests/unit/planner.test.ts
```

`npm test` (vitest) cannot run in this sandbox; the local shim maps `vitest`
onto `node:test` and was used instead.

## Test results

| Suite | Tests | Pass | Fail |
| --- | --- | --- | --- |
| `tests/unit/study-paths.test.ts` | 22 | 22 | 0 |
| `tests/unit/planner.test.ts` | 44 | 44 | 0 |

Typecheck: pass. `scripts/lint`: PASS. `validate-architecture`: PASS (37
required artifacts, 54 source files scanned). `validate-routes`: PASS.
`check-links`: PASS. `check-assets`: PASS. `scan-secrets`: PASS (0 possible
secrets). `validate-metadata.mjs`: PASS. `validate-all-curricula.mjs`: PASS (33
subjects, 153 units, 1,409 topics, 24,400 unique questions).

Pre-existing suites unaffected by this phase were re-run: `mastery` 19/19,
`review-scheduler` 40/40, `quiz` 3/3, `content-metadata` 13/13, `navigation`
2/2, `search-filters` 40/40, `speech` 47/47, `synonyms` 24/24. Five suites fail
in this sandbox for reasons that predate and are unrelated to this work:
`data-layer`, `content`, `curriculum-v2`, `curriculum-all` and
`search-and-routes` all reach `import.meta.glob`, which is a Vite API the shim
cannot provide, and `src/tests/progress.test.ts` uses `it.each`, which the shim
does not implement.

## Accessibility impact

None directly — no markup is produced here. Two decisions were taken with the
eventual UI in mind:

- `limitations` is a plain `string[]` of complete sentences, so it can be
  rendered as a list with real text rather than as tooltip or icon-only
  content.
- `PlanSession` carries `courseTitle` alongside `courseSlug`, so a schedule can
  be announced with the course's real name and never needs to expose a slug to
  a screen reader.

Nothing here relies on colour, hover or pointer input.

## Privacy impact

- The planner collects **six values**: a path slug, a date, a days-per-week
  count, a minutes-per-day count, an optional list of course slugs and an
  optional confidence band. No name, no email, no free text, no health
  information.
- Free text cannot be smuggled in. The only strings that survive the guard are
  slugs the catalog already publishes and a date matching `YYYY-MM-DD`;
  everything else is dropped. A test writes a payload carrying `name`, `email`
  and a clinical note and asserts none of it reaches storage.
- Storage is `localStorage` under `medmosa.plan.v1`. Nothing is sent anywhere;
  the module makes no network call and has no import that could.
- Everything read back is re-validated and clamped, on the same reasoning as
  `src/lib/progress.ts`: the data is user-editable by definition.
- Blocked, throwing and refusing-to-write storage are all handled without an
  exception, with an in-memory fallback for the session.
- `clearPlan()` deletes the key and the in-memory copy.
- The plan is not added to the account sync payload; nothing in this phase
  touches `src/lib/auth/sync.ts`.

## Known limitations

- **`estimatedMinutes` excludes subject-wide question banks.** Courses whose
  questions are mostly subject-wide — `microbiology`, `pathophysiology`,
  `sleep-technology` — are therefore under-estimated. Stated in the limitation
  copy rather than papered over.
- **`questionCount` counts placements, not distinct questions.** Summed across
  the whole catalog these come to 25,000 rather than 24,400, because a question
  mapped into two courses is counted in both. Stated in the limitation copy.
- **`pre-health-foundations` is large** (18 courses, 990 topics). It is the
  category, honestly reported; `focusCourseSlugs` is the intended way to narrow
  it.
- **`mcat-foundations` overlaps `pre-health-foundations`,** because the catalog
  files that course under `pre-health-core`. Stated in that path's limitations.
- **`pathophysiology` is a path of one course,** which makes it near-identical
  to the course page. Kept so the derivation rule stays uniform, and stated in
  its limitations.
- **The planner does not know what has already been read.** It prioritises by
  course, not by topic, so a session may point at a course whose early topics
  are already done. Topic-level sequencing would need a topic order the corpus
  does not publish.
- **The weekly rhythm is anchored to `today`,** not to named weekdays. Someone
  who always studies at weekends cannot say so.
- **`topicTarget` is derived from a course average,** so it is a rough number
  for a course whose topics vary widely in length.

## Deferred work

- The `/paths` and `/paths/:slug` routes, pages and plan form. `routes.json` is
  reserved, so no route was added.
- Rendering `PLAN_DISCLAIMER` and each path's `limitations` — the logic supplies
  both; the UI must actually show them.
- Named weekdays in the planner, and an "already covered" signal at topic level.
- An export of a plan (ICS or plain text). Deliberately not started: it would be
  the first thing here capable of leaving the browser.

## Risks or assumptions requiring later review

- **The category grouping is the whole basis of four of the five paths.** If
  `category` is ever re-scoped in the catalog, the paths change silently and
  correctly, but their titles and prose may no longer fit. The tests assert
  membership against the catalog, not against a frozen list, so a re-scope will
  not fail the build — someone must re-read the copy.
- **`estimatedStudyMinutes` carries a 900-characters-per-minute reading
  assumption** made in Phase 1. Every path estimate inherits it. It is
  documented in both places, but it has never been measured against a real
  reader.
- **The topic-id parse assumes the four-segment id format.** Verified for all
  1,409 topics and guarded (unparseable ids are skipped, not guessed at), but a
  future id scheme would quietly shrink the estimates. The per-course topic
  count assertion in the test suite is the tripwire.
- **The review cadence (every 3rd, 4th or 5th session) is a judgement call,**
  not a fitted result — the same honesty caveat the review ladder already
  carries in `docs/review-algorithm.md`.
- **`MAX_HORIZON_DAYS = 400`** matches the progress store's day cap. A visitor
  planning further ahead than that gets a truncated plan and a warning.
