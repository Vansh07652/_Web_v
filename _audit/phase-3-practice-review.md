# Phase 3 — Practice, local progress and review

Scope of this report: the **pure local-progress logic** for Phase 3. The review
and practice UI pages are delivered separately; nothing here renders anything.

## Phase objective

Extend the browser-local progress store with the data and the pure logic needed
for practice review — per-topic mastery, per-question spaced repetition, a
deterministic review queue and a review summary — without breaking any existing
behaviour, without adding a dependency, without a network call, and without
requiring an account.

Concretely:

1. Extend `ProgressState` with `mastery` and `questions` maps, validated and
   clamped as rigorously as the existing counters, and backward compatible with
   every payload already in visitors' browsers.
2. Add `src/lib/review/mastery.ts` — pure status derivation, with copy that does
   not overclaim.
3. Add `src/lib/review/scheduler.ts` — pure, clock-free spaced repetition.
4. Wire both into `recordAnswer` and `recordTopicView` additively.
5. Cover the lot with tests, including hostile input and determinism.

## Files inspected

- `src/lib/progress.ts` — read in full before any change; the source of every
  invariant listed under Data/schema changes.
- `src/tests/progress.test.ts` — the existing contract for the store; read first
  and re-run throughout.
- `src/lib/auth/sync.ts` — the only caller of `replaceProgress`, and the reason
  review data is kept out of the sync payload.
- `src/components/RichQuestionPractice.tsx`, `src/pages/CurriculumExplorer.tsx`,
  `src/components/StudyDashboard.tsx` — the existing call sites of
  `recordAnswer`, `recordTopicView`, `readProgress` and `summarise`, to confirm
  the new parameter is additive. None were modified.
- `src/lib/quiz.ts` — how an answer is graded before it reaches the store.
- `scripts/lint`, `scripts/validate-architecture`, `tsconfig.app.json`,
  `package.json` — the gates this work has to pass.
- `tests/unit/quiz.test.ts` — house style for a unit suite.

## Files created

- `src/lib/review/mastery.ts` — `MasteryStatus`, `TopicMastery`,
  `computeMastery`, `masteryStatusLabel`, `masteryStatusDescription`,
  `isReviewDue`. Pure; imports only types, so it stays a leaf of the module
  graph and cannot reach for storage.
- `src/lib/review/scheduler.ts` — `REVIEW_INTERVALS`, `scheduleQuestion`,
  `scheduleTopic`, `buildReviewQueue`, `buildWeakTopics`, `summariseReview`,
  and the `ReviewQueueItem` / `ReviewSummary` types. Pure and clock-free: every
  entry point takes `today` as an explicit day key.
- `tests/unit/mastery.test.ts` — 19 tests.
- `tests/unit/review-scheduler.test.ts` — 40 tests.
- `docs/review-algorithm.md` — the ladder, every scheduling rule, the queue
  ordering, the estimation assumption and the eviction cap, in enough detail to
  reimplement.
- `docs/local-progress-and-privacy.md` — what is stored, what is not, and what
  never leaves the browser.
- `_audit/phase-3-practice-review.md` — this report.

## Files updated

- `src/lib/progress.ts` — the only existing file changed. Additions:
  `TopicMasteryRecord`, `QuestionAttemptRecord`, `AnswerContext`; the `mastery`
  and `questions` fields on `ProgressState`; validation, capping and eviction for
  both; `readMastery`; `clearReviewHistory`; the optional third argument to
  `recordAnswer`; mastery seeding in `recordTopicView`; and three helpers now
  exported for the review modules to share rather than duplicate — `shiftDays`,
  `dayDifference`, `isDayKey` — plus `clamp`.

No other file in the repository was touched. In particular `package.json`,
`src/App.tsx`, `src/data/routes.json`, `src/pages/CurriculumExplorer.tsx`,
`src/lib/content/*`, `manifest.json` and `content-v2/` are unchanged, and
`src/lib/auth/sync.ts` needed no change because the new fields are optional on
the type.

## Files moved or removed

None.

## User-facing behavior changed

Nothing visible changed in this phase; no page imports the new modules yet. The
behavioural groundwork now in place:

- Opening a topic additionally records `topicsOpened` and `lastStudiedAt` against
  that topic. The course-level "topics viewed" total still counts a topic once
  per topic, ever, so no dashboard figure moves.
- Answering a practice question can now additionally file that answer against a
  topic id and a question id. The existing two-argument call — the one the
  practice component makes today — behaves exactly as it did; it schedules
  nothing because it says nothing about what was answered.
- Two new operations exist for the UI to call: `readMastery(topicId)` and
  `clearReviewHistory()`.

## Data/schema changes

`ProgressState` stays at `version: 1`. The reader rebuilds from a fresh empty
state and copies only known fields, so an old payload lacking the new maps loads
cleanly as two empty maps and needs no migration.

Added:

```ts
mastery?:   Record<string, TopicMasteryRecord>   // keyed by topic id
questions?: Record<string, QuestionAttemptRecord> // keyed by question id
```

Both are optional on the type and always present on write. They stay optional
because a payload from an older build — or from the account row, which
deliberately does not carry them — genuinely will not have them.

`TopicMasteryRecord`: `topicsOpened`, `questionsAttempted`, `questionsCorrect`,
`streak`, plus optional `lastStudiedAt`, `nextReviewAt`, `reviewedAt` day keys.
`QuestionAttemptRecord`: `attempts`, `misses`, `lastResult`, `lastAnsweredAt`,
`nextReviewAt`, `interval`.

Validation applied on every read **and** on `replaceProgress`:

- counters clamped to 0..1,000,000 (`MAX_COUNT`), intervals to 0..400
  (`MAX_DAYS`)
- `questionsCorrect` clamped to `questionsAttempted`; `misses` clamped to
  `attempts`
- every date checked against `^\d{4}-\d{2}-\d{2}$`; a bad optional date is
  dropped on its own, a question record missing either required date is dropped
  whole
- a question record with zero attempts, and a mastery record with nothing opened
  and nothing attempted, are dropped as recording nothing
- an unrecognised `lastResult` is read as `incorrect`, never as `correct`
- non-objects, arrays and nulls are skipped
- at most 5,000 question records and 5,000 mastery records, oldest activity
  evicted first with the id as tie-break

Preserved unchanged: the storage key `medmosa.progress.v1`; both legacy keys and
their migration on next write; `MAX_DAYS` 400, `MAX_MINUTES_PER_DAY` 1440,
`MAX_COUNT` 1,000,000; the never-throwing reader; the storage probe cached
against the storage object rather than latched; `clearProgress` deleting the
current key and every legacy key; the signatures of all twelve previously
exported functions and all four previously exported types.

One deliberate rule was added to `replaceProgress`: a state that **omits** the
review maps keeps whatever is already stored, while passing `{}` explicitly
clears them. This is what makes the account merge in `src/lib/auth/sync.ts` — the
only caller — safe: it produces counters only, so signing in cannot silently wipe
a review schedule that exists only on this device, and review data is never
uploaded.

## Test and validation commands run

```
node .../typescript/bin/tsc --noEmit -p tsconfig.app.json
node scripts/lint
node scripts/validate-architecture
node scripts/scan-secrets
/root/localtest/run.sh tests/unit/mastery.test.ts
/root/localtest/run.sh tests/unit/review-scheduler.test.ts
/root/localtest/run.sh src/tests/progress.test.ts
tsc --noEmit --ignoreConfig --strict ... tests/unit/mastery.test.ts tests/unit/review-scheduler.test.ts
```

The local runner maps `vitest` onto `node:test`; CI runs real vitest.

## Test results

| Suite | Result |
| ----- | ------ |
| `tests/unit/review-scheduler.test.ts` | 40 tests, 40 pass, 0 fail |
| `tests/unit/mastery.test.ts` | 19 tests, 19 pass, 0 fail |
| `src/tests/progress.test.ts` (pre-existing) | 14 tests, 14 pass, 0 fail |
| `tests/unit/quiz.test.ts` (pre-existing) | 3 tests, 3 pass, 0 fail |
| `tests/unit/content-metadata.test.ts` (pre-existing) | 13 tests, 13 pass, 0 fail |
| `src/tests/navigation.test.ts` (pre-existing) | 2 tests, 2 pass, 0 fail |
| Combined run of the six | 91 tests, 91 pass, 0 fail |

Typecheck: pass, 0 errors. Lint: PASS. Architecture validation: PASS (37
artifacts, 48 source files). Secret scan: PASS.

`src/tests/progress.test.ts` uses `it.each`, which `node:test` does not provide,
so under the bare local shim it reports 0 tests rather than failing. It was run
with a local three-line `it.each` polyfill (kept outside the repository) both
before and after the change, giving 14 pass / 0 fail each time. Real vitest
provides `it.each` natively and needs no polyfill.

Four pre-existing suites cannot run in this environment at all —
`src/tests/content.test.ts`, `src/tests/curriculum-v2.test.ts`,
`src/tests/curriculum-all.test.ts`, `tests/unit/data-layer.test.ts` and
`tests/integration/search-and-routes.test.ts` — because they import
`src/lib/content/index.ts`, which calls `import.meta.glob`, a Vite-only API the
node runner cannot supply. They fail identically before and after this work and
are untouched by it.

What the new suites cover: every status boundary (0 attempts, 4 vs 5, 9 vs 10,
79% vs 80%, and 10-at-exactly-80%); the full ladder walked up by consecutive
correct answers and collapsed to one day by a miss; the medium-interval rule for
a correct answer after difficulty, including that it holds at the cap; queue
ordering with equal misses falling back to overdue days then id, and the same
records in reversed insertion order producing an identical queue; a fixed clock
producing identical output on repeat runs; `summariseReview` returning zeros on
an empty state and the 45-second estimate at 1, 4 and 80 due; hostile stored
state (non-object entries, nulls, arrays, negative counts, `1e9` counts,
malformed dates, `questionsCorrect` above `questionsAttempted`, an unrecognised
result, truncated JSON, and a 6,000-entry `questions` map) throwing nothing,
inflating nothing and surviving nowhere it should not; round-tripping through
`replaceProgress`; old-format payloads loading cleanly; the two-argument
`recordAnswer` leaving the review maps empty; and `clearReviewHistory` clearing
only the review maps, including when storage refuses to persist.

## Accessibility impact

None directly — this phase adds no markup, no focus behaviour and no colour.

Two things were done here in service of the UI that will consume it. The status
labels are plain words ("Not started", "Learning", "Practicing", "Confident")
rather than a number alone, so a status can be announced without relying on a
percentage or a colour to carry the meaning. And `masteryStatusDescription`
provides a full sentence for each status, so a badge can have a text equivalent
rather than a tooltip that a screen reader may never reach.

## Privacy impact

**What is now stored locally, in addition to what was already stored.** Two maps
inside the existing `localStorage` entry `medmosa.progress.v1`:

- `mastery`, keyed by topic id: how many times the topic was opened, how many
  practice questions were attempted, how many were correct, the current run of
  consecutive correct answers, and up to three calendar dates — last studied,
  last reviewed, next review.
- `questions`, keyed by question id: attempts, misses, whether the last answer
  was right or wrong, the last answered date, the next review date, and the
  interval in whole days.

**What is not stored.** No name, no email, no free text, no typed answers, no
question text, no identifier of the visitor or the device, and no time of day —
every date is a calendar day key in the visitor's own timezone. A daily counter
is not a behavioural log, and that distinction was kept deliberately.

**No network transmission.** The progress store makes no network calls at all.
The review data is additionally excluded from the optional account sync by
design: `src/lib/auth/sync.ts` merges counters only, and `replaceProgress` treats
an omitted review map as "keep the local one", so `mastery` and `questions` are
never uploaded and never leave the browser — including for a signed-in visitor.

**No account requirement.** Nothing added in this phase needs, checks for, or
degrades without a sign-in. Practice, mastery and review scheduling all work in a
browser that has never seen an account.

**Deletion.** `clearProgress()` still deletes everything, including the new maps
and every legacy key. `clearReviewHistory()` is new and clears only `mastery` and
`questions`, leaving days, topics and course totals intact, so someone restarting
their revision does not also lose their streak. Clearing browser site data has
the same effect; there is no copy anywhere else, by design.

## Known limitations

- The scheduler is a fixed ladder, not an adaptive algorithm. It has no ease
  factor, no per-item difficulty and no notion of partial recall, because a
  right/wrong practice question does not produce the signal those would need.
- An item that has ever been missed is capped at the 7-day rung permanently.
  That is the specified rule and it is conservative by design, but it means an
  item missed once a year ago can never reach 60 days again without its record
  being cleared.
- Topic scheduling is driven by the topic's streak, not by the questions inside
  it, so a topic with 200 questions and one with 5 move at the same rate.
- Progress remains per-browser and per-device. Nothing in this phase changes
  that, and the review state is deliberately not syncable.
- Eviction is by date, not by usefulness. At 5,000 records the oldest answers go
  first even if they were the ones most often missed.
- `estimatedMinutes` is an assumption (45 seconds a question), not a measurement.
- The 5,000-record cap bounds this store's growth but not the whole origin's
  quota; another feature filling `localStorage` can still make writes fail. That
  path is handled — the store falls back to memory for the session — but the
  progress written in that session is lost when the tab closes.

## Deferred work

- The practice, review and mastery UI pages, which are delivered separately.
- Passing `topicId` and `questionId` at the call sites. `RichQuestionPractice`
  still calls `recordAnswer(subjectSlug, correct)`, so no schedule is built yet;
  the third argument exists and is tested, but wiring it is a change to a
  component reserved by other work.
- A "review due" figure on the dashboard. `ProgressSummary` was left untouched
  on purpose; `summariseReview` is available for whoever builds that panel.
- An export or import of the local store, which would make the per-device
  limitation less sharp without introducing a server.
- Tuning the ladder against real answer data, once there is any.

## Risks or assumptions requiring later review

1. **`replaceProgress` preserves omitted review maps.** This is the rule that
   keeps review data local and stops a sign-in wiping it. A future caller that
   expects `replaceProgress` to be a literal whole-state overwrite will be
   surprised. It is documented at the function and covered by a test in both
   directions; if account sync ever starts carrying review data, that test is the
   thing to change first, and the privacy claims above have to change with it.
2. **`src/lib/progress.ts` and `src/lib/review/scheduler.ts` import each other.**
   The scheduler needs the store's date arithmetic and counter guard; the store
   needs the scheduler's rules. Neither dereferences the other at module scope,
   which is what makes the cycle safe, and there is a comment on both sides
   saying so. Adding a top-level call across that boundary would break it at
   runtime in a way TypeScript will not catch.
3. **The medium-interval cap is permanent.** Confirm this is the intended
   product behaviour before the UI starts showing "next review" dates; the
   alternative reading — cap only while recovering — would need one line changed
   and one test updated.
4. **Mastery thresholds are judgement, not evidence.** Five attempts, ten
   attempts and 80% are stated in the spec and implemented exactly, but no data
   backs them. If "Confident" starts appearing too easily, this is the dial.
5. **The word "Confident" carries risk.** The description is explicit that it
   describes practice accuracy on this site and is neither a measure of clinical
   competence nor a prediction of an exam result, and a test asserts the copy
   does not drift into "guarantee", "exam-ready", "mastered" or "competent". Any
   redesign that shows the label without its description reintroduces the risk.
6. **Question ids are assumed stable across content rebuilds.** The `questions`
   map is keyed by question id; if a rebuild renumbers ids, every schedule
   silently points at nothing. Nothing breaks — orphaned records are simply due
   forever until evicted — but the review queue would fill with items the UI
   cannot resolve. Worth a resolve-and-drop pass when the UI lands.
7. **Day keys are local-timezone.** A visitor who travels across the date line
   can see a review fall due a day early or late. This matches the existing
   streak behaviour, which has the same property, and was kept consistent rather
   than fixed in one place only.
