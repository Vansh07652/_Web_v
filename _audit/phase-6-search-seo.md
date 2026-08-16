# Phase 6 — Text to speech, search and discovery

Scope of this report: the **pure logic** for two features — reading a lesson
aloud, and ranking and filtering curriculum search. Nothing here renders
anything, and no page was modified. The UI that consumes these modules is
delivered separately, as the practice and review logic was in Phase 3.

## Phase objective

Add read-aloud and better search to MedMosa without breaking the two promises
the product is built on: no network call, and no data leaving the device.

Concretely:

1. `src/lib/speech.ts` — a controller over `window.speechSynthesis` that reads a
   list of semantic sections one at a time, exposes what is being read, survives
   a missing or misbehaving engine, never autoplays, and persists exactly one
   preference.
2. `plainTextFromMarkdown` — a pure, total markdown-to-prose function, since
   markdown read aloud is unusable.
3. `src/lib/content/synonyms.ts` — a small, hand-curated medical synonym map
   with whole-word matching.
4. `src/lib/content/search-filters.ts` — deterministic ranking and filtering
   over the existing 1,409-entry curriculum index, pure and independent of React
   and of the progress store.
5. Tests for all of it, including hostile input, determinism and the
   whole-word cases that make a medical abbreviation list safe.

No new dependency, no new index build step, no external service.

## Files inspected

- `src/lib/content/search.ts` — the legacy v1 search: its token split,
  normalisation and result shape. Read first, left unchanged.
- `src/pages/SearchPage.tsx` — the existing search UI, its filter state, and how
  it already filters the curriculum index. The shape the new modules have to fit.
  Not modified.
- `content-v2/client/search-index.json` — 1,409 entries; field names, alias
  formats and the `availability` shape were read from the data, not assumed.
- `src/types/content.ts` — `CurriculumSearchEntryV2`,
  `CurriculumTopicAvailabilityV2`.
- `src/lib/progress.ts` — the house pattern for guarded storage, non-throwing
  reads and clamped untrusted values, which `readStoredRate` follows.
- `src/lib/review/mastery.ts`, `src/lib/review/scheduler.ts` — how the existing
  pure modules stay pure, and `buildWeakTopics` / `isReviewDue`, which are what a
  caller will use to build the two id sets `applyLocalFilters` takes.
- `src/lib/content/metadata.ts` — `getTopicMetadata` and `TopicDifficulty`; the
  reason difficulty arrives through a resolver rather than an import.
- `src/components/MarkdownDocument.tsx` — how the same markdown is rendered, so
  what is spoken and what is shown agree on links, code and `$formula$`.
- `scripts/lint`, `scripts/validate-architecture`,
  `scripts/validate-content-completeness.mjs`, `tsconfig.app.json`,
  `package.json` — the gates this work has to pass.
- `tests/unit/mastery.test.ts`, `tests/unit/content-metadata.test.ts` — house
  style for a unit suite.

## Files created

- `src/lib/speech.ts` — `SpeechRate`, `SpeechStatus`, `SpeechSection`,
  `SpeechController`, `SPEECH_RATES`, `RATE_STORAGE_KEY`, `isSpeechSupported`,
  `readStoredRate`, `storeRate`, `createSpeechController`,
  `plainTextFromMarkdown`. Imports nothing.
- `src/lib/content/synonyms.ts` — `SynonymEntry`, `SYNONYMS` (39 entries),
  `expandQuery`, `describeExpansion`. Imports nothing.
- `src/lib/content/search-filters.ts` — `CurriculumSearchFilters`,
  `RankedSearchEntry`, `DifficultyResolver`, `rankCurriculumEntries`,
  `applyLocalFilters`, `describeFilters`. Imports `expandQuery` and two types.
- `tests/unit/speech.test.ts` — 47 tests.
- `tests/unit/synonyms.test.ts` — 24 tests.
- `tests/unit/search-filters.test.ts` — 40 tests.
- `docs/text-to-speech.md` — the no-external-service guarantee, the fallback
  behaviour, the rate rules and the full markdown-stripping table.
- `docs/search-and-discovery.md` — the ranking tiers, every synonym entry, every
  filter, and why the two progress filters are computed from local data only.
- `_audit/phase-6-search-seo.md` — this report.

## Files updated

None. No existing file was modified.

`src/lib/content/search.ts` was available to change and was deliberately left
alone: the new ranking works over the v2 curriculum index, the legacy v1 search
serves notes and questions, and merging them is a UI decision that belongs with
the page rewrite. `src/pages/SearchPage.tsx` was likewise left as it is — see
Deferred work.

## Files moved or removed

None.

## User-facing behavior changed

None yet. Every module added here is pure logic with no call site in the
application; the rendered pages are byte-for-byte what they were. The behaviour
these modules enable, once a page consumes them:

- A lesson can be read aloud, one section at a time, with the section being read
  highlighted, at 0.8x, 1x, 1.2x or 1.5x, with pause, resume and stop, and with
  the play control absent entirely where the browser has no speech engine.
- Search can rank results instead of merely filtering them, can widen a query
  through the curated synonym list and say so, and can narrow by subject,
  by what a topic actually contains, by difficulty, and by the visitor's own
  weak or due topics.

## Data/schema changes

None. No file under `content-v2/` was touched, no index was rebuilt, no new
generated artefact was added, and no existing schema changed.

One new `localStorage` key is introduced: `medmosa.speech-rate.v1`, holding a
single number — one of `0.8`, `1`, `1.2`, `1.5`. It is separate from
`medmosa.progress.v1` and is not part of the account sync payload. Reads are
guarded and clamped, so a hand-edited or corrupt value degrades to `1` rather
than reaching the speech engine.

## Test and validation commands run

Vitest cannot run in this sandbox (its native binding is unavailable and the
registry is blocked), so the suites were executed through the local shim that
maps the vitest API used here onto `node:test`. CI still runs real vitest over
the same files.

```
node …/typescript/bin/tsc --noEmit -p tsconfig.app.json
node scripts/lint
node scripts/validate-architecture
node scripts/validate-content-completeness.mjs
node scripts/validate-routes
node scripts/scan-secrets
/root/localtest/run.sh tests/unit/speech.test.ts
/root/localtest/run.sh tests/unit/synonyms.test.ts
/root/localtest/run.sh tests/unit/search-filters.test.ts
/root/localtest/run.sh tests/unit/quiz.test.ts tests/unit/mastery.test.ts \
  tests/unit/review-scheduler.test.ts tests/unit/content-metadata.test.ts
```

## Test results

| Suite | Tests | Pass | Fail |
| --- | --- | --- | --- |
| `tests/unit/speech.test.ts` | 47 | 47 | 0 |
| `tests/unit/synonyms.test.ts` | 24 | 24 | 0 |
| `tests/unit/search-filters.test.ts` | 40 | 40 | 0 |
| **New total** | **111** | **111** | **0** |
| `tests/unit/quiz.test.ts` | 3 | 3 | 0 |
| `tests/unit/mastery.test.ts` | 19 | 19 | 0 |
| `tests/unit/review-scheduler.test.ts` | 40 | 40 | 0 |
| `tests/unit/content-metadata.test.ts` | 13 | 13 | 0 |

Typecheck: PASS. Lint: PASS. Architecture validation: PASS (37 required
artefacts present, every source file scanned). Content completeness: PASS.
Route validation: PASS. Secret scan: PASS.

Two pre-existing suites cannot run under the local shim and were not affected by
this work: `src/tests/progress.test.ts` uses `it.each`, which the shim does not
implement, and `tests/unit/data-layer.test.ts` and
`tests/integration/search-and-routes.test.ts` import modules that use Vite's
`import.meta.glob`. All three pass under real vitest and none of their inputs
changed.

What the new tests cover, beyond the happy path:

- **Speech:** an unsupported environment reporting `"unsupported"` with every
  method a safe no-op; a throwing `speechSynthesis` property; a throwing engine
  on speak, pause, resume and cancel; `pause` refusing to claim a pause the
  engine rejected; advancing through sections in order; `startAtId`, including
  an unknown one; sections that are empty after stripping; `stop` idempotence
  and utterance release; a late `end` event from a cancelled utterance; an
  engine error mid-run; subscriber notification, unsubscription and a throwing
  subscriber; rate round-trip, clamping of out-of-range, between-rung and
  corrupt values, storage that throws on read and on write, and that nothing but
  the rate is stored.
- **`plainTextFromMarkdown`:** headings at every level, bold, italic,
  bold-italic, strikethrough, underscore emphasis versus `snake_case`, inline
  code, fenced blocks including tilde fences and an unterminated fence, links,
  images, reference links, autolinks, link definitions, nested and ordered and
  task lists, tables with divider rows, blockquotes, horizontal rules, formulas,
  CRLF, blank input, non-string input, and prose containing no markdown at all.
- **Synonyms:** whole-word matching including `mi` inside "microbiology" and
  `ph` inside "phosphate" and "graph"; case-insensitivity; unknown terms;
  multi-word terms; substitution keeping the rest of the query; repeated
  occurrences; two terms in one query; overlapping terms; deduplication; empty
  and non-string input; and list integrity — size, lowercase, uniqueness, and
  that no expansion is itself an abbreviation or another entry's term.
- **Search filters:** the full six-tier order on a hand-built fixture; the
  synonym band sitting below every direct tier while preserving order inside
  itself; tie-breaking by title then id, verified by running twice and by
  reversing the input; every filter individually; two combined; `false` and
  `undefined` meaning "no constraint"; difficulty with and without a resolver;
  `weakTopicsOnly` against an empty set; the intersection of both progress
  filters; an empty query returning every entry; 60 entries returning 60
  results; that no input array or entry is mutated; and that the ranked results
  hold the original entry objects rather than copies.

## Accessibility impact

Positive, and deliberately conservative.

- Read-aloud is an accessibility feature in its own right: it serves dyslexic
  students, low-vision students who do not use a screen reader, and anyone
  studying while their eyes are busy.
- `currentSectionId` exists so the page can show what is being read. Following
  along visually is most of the benefit for a dyslexic reader.
- **No autoplay** is the accessibility decision that matters most here.
  Unexpected audio talks over a screen reader and cannot be silenced quickly.
- Where the engine is missing the controller reports `"unsupported"` rather than
  failing silently, so the UI can omit the control instead of shipping a button
  that does nothing — a dead control is worse than an absent one for anyone
  navigating by keyboard or screen reader.
- `plainTextFromMarkdown` keeps image alt text and link text, so a listener
  hears the description that was written for them, and drops raw URLs, which are
  unbearable read aloud.
- `describeFilters` and `describeExpansion` exist so the UI can state in words
  what is narrowing or widening the results, rather than relying on the visual
  state of a checkbox.
- Nothing here introduces markup, colour, focus behaviour or motion. No page was
  modified, so no existing accessibility characteristic changed.

## Privacy impact

**No lesson text and no query leaves the device.**

- Speech goes through `window.speechSynthesis`, a browser API. MedMosa opens no
  socket, sends no request carrying lesson text, and loads no third-party
  script. The honest boundary is stated in the module header and in
  `docs/text-to-speech.md`: some platforms synthesise on-device and some use a
  voice the operating system supplied, which is outside this application's
  reach. What is guaranteed is that MedMosa itself makes no network call for
  speech and never selects a cloud voice.
- Search runs entirely over a static JSON index the browser already downloaded.
  There is no search endpoint, no suggestion service, no external search
  provider, and no analytics event carrying a query.
- The only thing persisted by this work is the playback rate, one number under
  `medmosa.speech-rate.v1`. Nothing records what was read, how far it got, which
  voice was used, or what was searched for.
- `search-filters.ts` does not import the progress store and does not read
  `localStorage`. "My weak topics" and "review due" are two sets of ids the
  caller resolves from local progress and passes in, so study history is never
  read by a second module and never travels with a query.
- No new dependency, so no new supply-chain surface.

## Known limitations

- Search matching is phrase-based, not bag-of-words: a query whose words appear
  in the title out of order does not match. Adding a token-subset tier would
  need a seventh `matchedOn` value, which the agreed type does not have.
- No typo tolerance. Fuzzy matching over medical vocabulary produces confident
  wrong answers.
- The synonym list is English-only and intentionally small (39 entries). Growing
  it is a review decision, not a data exercise.
- `describeFilters` returns the subject *slug*, because resolving it to a title
  would mean importing the catalogue into a module that is deliberately pure.
- Speech uses the platform's default voice. Enumerating `getVoices()` is
  asynchronous, inconsistent, and a fingerprinting surface.
- Chrome truncates long utterances without a keep-alive timer; none is used, on
  the grounds that a background timer outliving the page is a worse bug.
- A rate change applies from the next section, not the current one — the Web
  Speech API cannot change the rate of an utterance already in flight.
- Fenced code blocks are dropped rather than spoken. Anyone who needs the code
  read aloud will not get it from here.

## Deferred work

- **No UI.** `src/pages/SearchPage.tsx` still uses its own inline token filter
  and was not modified, and no lesson page has a play control yet. Wiring both
  is the next piece of work; the modules were built to be dropped in, and the
  completeness validator's ban on slicing search results is respected by having
  no truncation anywhere in the new code.
- **SEO.** Despite this report's filename, no SEO work was done: no meta tags,
  no structured data, no sitemap change, no `index.html` change. It was not in
  scope for this phase and none of it is affected by these modules.
- Merging the legacy v1 note and question search with the v2 curriculum ranking
  into one result list.
- A "read this whole lesson" entry point, which needs the page to decide what
  counts as a section and in what order.

## Risks or assumptions requiring later review

- **The synonym list is a clinical-content decision.** Thirty-nine pairs were
  chosen for being standard and unambiguous, and three were deliberately
  excluded as ambiguous in this curriculum ("RR", "IM", "DM", "CA", "PT",
  "stroke"). It should be reviewed by someone with teaching credentials before
  the list is grown, and any addition should be justified in the same terms.
- **The scoring numbers are a judgement call.** The *order* of the tiers is the
  specified contract; the specific values, and the decision to place synonym
  hits at one tenth, are chosen so the bands cannot overlap. They should be
  revisited against real queries once the page is wired up.
- **Empty-set semantics for `weakTopicsOnly`.** Returning nothing when nothing
  is weak yet is correct, but a UI that shows an unexplained empty list will read
  as a bug. The caller needs an empty state that says so.
- **Difficulty coverage is sparse.** The metadata sidecar only assigns a
  difficulty where at least five mapped questions carry one, so a difficulty
  filter will exclude many topics that simply have no evidence either way. That
  is the honest behaviour, and it should be explained in the UI rather than
  looking like missing content.
- **The `WeakMap` normalisation cache** is a cache and nothing more, but it is
  the one piece of module-level state in an otherwise stateless file and should
  be re-checked if entries ever become freshly-constructed objects per render,
  in which case it would stop helping.
- **Speech engine variability is untested against real browsers.** Every
  behaviour here is verified against hand-written stubs; Safari, Firefox and
  Chrome each have their own quirks around `pause`, `cancel` and late events,
  and the module should be exercised on real devices before the feature ships.
