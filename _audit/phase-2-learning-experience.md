# Phase 2 — Learning experience and course transparency

## Phase objective

Make the learning surfaces say what the library actually holds, and give a topic a shape a student can work through: an honest header, a college-level and a plain-language explanation that can be read side by side, the connections that are evidenced, the sources behind it, and the option to have it read aloud.

The binding constraint was the same one Phase 1 set for the data layer: a field with no evidence behind it does not get rendered. That rules out three things other study sites show as a matter of course — a prerequisite chain, an exam-blueprint alignment, and a "this also appears in" cross-course list. None of the three exists anywhere in this corpus, and the checks below say so with numbers rather than by assertion.

The second constraint was that no course may look more complete than its data supports. Eleven of the 33 courses carry no college-level notes at all, two are marked `partial`, one has a completed question bank whose citations are not yet authoritative, and eight have no practice questions. Every one of those facts is now on the course card and on the course page, in words rather than as a `0/174` ratio that reads like a progress bar.

## Files inspected

- `src/pages/CurriculumExplorer.tsx` (the file this phase owns), `src/components/ui.tsx`, `src/components/CourseCatalog.tsx`, `src/components/MarkdownDocument.tsx`, `src/components/LegalNotice.tsx`, `src/components/RichQuestionPractice.tsx` — existing markup, class vocabulary and component contracts.
- `src/lib/speech.ts`, `src/lib/content/metadata.ts`, `src/lib/content/curriculum-v2.ts`, `src/lib/progress.ts`, `src/lib/review/mastery.ts`, `src/lib/review/scheduler.ts`, `src/lib/navigation.ts`, `src/types/content.ts` — the modules this phase consumes.
- `src/pages/StudyTools.tsx` (read-only; reserved) — for the `/coverage` page's wording, so the two surfaces agree.
- `src/styles/main.css`, `src/styles/study-tools.css`, `src/styles/legal.css`, `src/styles/dashboard.css`, `src/styles/prototype.css`, `src/styles/auth.css` — tokens, existing component classes, and a full class-name inventory to guarantee the new stylesheet collides with nothing.
- `scripts/lint`, `scripts/validate-architecture`, `scripts/validate-content-completeness.mjs`, `scripts/browser-audit.mjs`, `scripts/build-topic-metadata.mjs`, `tests/accessibility/semantic-markup.test.tsx`, `tests/integration/search-and-routes.test.ts` — gate rules and the selectors the browser audit depends on.
- Corpus: `content-v2/client/catalog.json`, all 1,409 topic bundles, all 33 question banks (25,000 questions), `content-v2/indexes/topic-metadata.json`, `content-v2/indexes/source-registry.json`, `_audit/coverage-report.md`, `docs/text-to-speech.md`, `docs/study-paths.md`.

## Files created

| Path | What it is |
| --- | --- |
| `src/components/ListenControls.tsx` | Read-aloud controls over `lib/speech.ts`: Listen, Pause/Resume, Stop, a four-step speed radio group, and a polite status region |
| `src/components/ExplanationTabs.tsx` | The college-level / plain-language / compare switcher, as an ARIA tablist |
| `src/components/TopicDetails.tsx` | `TopicFacts` (header facts and actions), `ConnectedLearning`, `TopicSourceRecord` |
| `src/components/CourseTransparency.tsx` | `CourseCoverageCatalog` (the /learn course list) and `CourseCoverageSummary` (the per-course block) |
| `src/styles/topic.css` | Stylesheet for all of the above. Not imported by this phase — the App wiring imports it |
| `tests/accessibility/topic-experience.test.tsx` | 10 assertions over tablist semantics, the speech fallback, the no-bare-zero rule and the source block |
| `_audit/phase-2-learning-experience.md` | This report |

## Files updated

- `src/pages/CurriculumExplorer.tsx` — the only pre-existing file changed. Catalog page swaps the plain course grid for the coverage-carrying one and relabels one stat-band cell; the course page swaps the four-cell totals band for the coverage block; the topic page is restructured around the new components.

`src/components/ui.tsx` was **not** modified. No export signature in it changed, because nothing in it changed — the new components compose the existing `Link`, `EmptyState`, `PageHeader` and `Breadcrumbs` as they are. No other reserved file was touched, and `package.json` gained no dependency.

## Files moved or removed

Nothing moved or was deleted. One local component, `SourcePanel` in `CurriculumExplorer.tsx`, was removed after its content was folded — in full — into `TopicSourceRecord`, which renders the same provenance record on every topic page without requiring a tab to be opened first.

## User-facing behavior changed

**Course list (`/learn`).** Each course card now carries the figures from that course's own `statistics`: topics, practice questions, and `n of total` for college-level notes, plain-language explanations and topics with references, plus the count of questions awaiting citation review. A course with none of something says so in a sentence — "None yet. This course is practice-first, and standalone college notes are still being written" — never `0 of 174`. Courses the catalog marks `partial`, `final_question_bank_no_college_notes` or `final_question_bank_without_authoritative_citations` carry that status as a note in the catalog's own terms. A "View coverage" link points at `/coverage`. The filter, the category grouping and the empty state behave as before.

**Course page (`/learn/:course`).** The four-cell totals band, whose third cell read "Teaching notes 0" on eleven courses, is replaced by the same coverage block plus the unit count and a "View coverage for every course" link.

**Topic page.** New above the content: a facts list (estimated time; level, only where difficulty exists; practice-question count, only where there are questions; source status) and four actions — Start learning, Listen, Practice, Save for review. Save for review records the topic view locally and confirms it in a polite live region, including what saving does *not* do.

The study-mode tabs are now Learn / Practice / Quick review. The separate "In plain language" tab is gone, and its content is now one mode of the explanation switcher inside Learn; the "Sources" tab is gone, and its content is now part of a block that is always visible below the content. No content was dropped in either move. On the 230 topics that have learning objectives but no college note, the objectives are now rendered for the first time — previously the Learn tab was hidden on those topics and that prose reached nobody.

Where a topic has both explanations, a tablist offers College level, Plain language and Compare both; compare is two columns from 900px and two stacked cards below that. Where it has only one, that one is rendered directly with no tablist at all, and the plain-language intro no longer promises a college-level version that does not exist. The plain-language panel ends with a link into the college-level panel.

Below the content: "Continue with" (only on the 64 topics that have co-mapped neighbours) and "Sources and study status" (every topic) — source status, reference count, references as real links with `rel="noreferrer"`, a `<details>` disclosure for questions flagged for citation review, the provenance record, and the shared `StudyUseNotice`.

Read-aloud is offered on every topic. It never starts by itself, it stops on unmount and on a change of topic, and where the browser has no speech engine it is replaced by one sentence saying so.

## Data/schema changes

None. No file under `content-v2/` was read-modify-written, no index was regenerated, and no type in `src/types/` changed. This phase is a rendering layer over `content-v2/client/catalog.json`, the topic bundles and the Phase 1 sidecars.

Two facts about the corpus were established by measurement and are load-bearing for what is *not* rendered:

- **0 of 25,000 questions** map to topics in more than one course. `relatedTopics` therefore never crosses a course boundary, so an "Also appears in other courses" section would be empty on all 1,409 topics or filled by guessing. It is not rendered.
- **No prerequisite edge and no exam alignment exist anywhere**, which `scripts/build-topic-metadata.mjs` already records in its own omission notes. Neither is rendered.

A sweep of all 1,409 topics confirmed the render invariants: every topic has a metadata entry, every topic has at least one explanation to show (812 have both, 235 college-only, 362 plain-only), every topic has at least one non-empty section to read aloud, and no related-topic id points outside its own course.

## Test and validation commands run

```
npm run typecheck
node scripts/lint
node scripts/validate-architecture
node scripts/validate-content-completeness.mjs
npx vitest run tests/accessibility            # cannot run in this environment, see below
node /tmp/render-check.cjs                    # throwaway static-render harness
node /tmp/compose-check.cjs                   # explanation composition over real topics
node /tmp/sweep.cjs                           # render invariants over all 1409 topics
```

## Test results

- **Typecheck: pass.** No errors under `strict`.
- **`scripts/lint`: PASS.** No trailing whitespace, no local filesystem path, no `dangerouslySetInnerHTML`.
- **`scripts/validate-architecture`: PASS.** 37 required artefacts present; 64 source files scanned; no reference to an unapproved location or status.
- **`scripts/validate-content-completeness.mjs`: PASS.** 0 errors. `src/App.tsx` was not touched, so the `lessons.slice(` guard is unaffected.
- **`vitest`: could not run here.** `node_modules` in this checkout carries only the `darwin-arm64` rolldown binding, so vitest and `vite build` both fail at startup with `Cannot find native binding` on this Linux host. This is pre-existing and not caused by this phase: `npx vitest run tests/unit/mastery.test.ts` fails identically on an otherwise untouched tree. `tests/accessibility/topic-experience.test.tsx` is therefore written but unrun; every assertion in it was checked against markup produced by the harness below, but it should be run on a machine with a working install before release.
- **Static-render harness: pass.** Each new component was transpiled and rendered with `renderToStaticMarkup` outside the bundler. Verified: the switcher emits one `role="tablist"`, three `role="tab"`, exactly one `tabindex="0"` and one `aria-selected="true"`; a single-explanation topic emits no tab role at all; `ListenControls` with no speech engine emits no button and one `role="note"`; with no sections it emits nothing; references carry `rel="noreferrer"`; the citation-review `<details>` appears only when a topic has flagged questions.
- **Whole-catalog render: pass.** All 33 course cards render, and the markup contains **zero** occurrences of a bare `0 of` ratio.
- **Composition over real topics: pass.** Checked against a both-explanations topic (Anatomical Terminology), a plain-only topic with objectives (Amendments, Corrections & Late Entries) and a college-only topic (Acid-Fast & Atypical Envelopes): the tablist appears only in the first, heading levels never skip in any of the three, and the previously-hidden learning objectives appear in the second.

## Accessibility impact

- **One `h1` per page** is unchanged — the topic title, from `PageHeader`. Everything added below it starts at `h2`, and the compare columns are named by a paragraph and `aria-labelledby` rather than by a heading, so two markdown documents rendered side by side cannot break the outline. Heading order was checked programmatically on three real topics.
- **The explanation switcher is a real tablist**: `role="tablist"` with an accessible name, `role="tab"` with `aria-selected` and `aria-controls`, `role="tabpanel"` with `aria-labelledby`, roving tabindex so only the selected tab is a tab stop, and Left/Right/Home/End with wraparound. Selection follows focus, matching the study-mode tabs already on the page.
- **Compare is CSS-only.** No viewport listener, no measurement in JavaScript: a `grid-template-columns` change at 900px, so the stacked layout is correct before any script runs and correct if script never runs.
- **Speech never takes focus.** The section being read is announced in an `aria-live="polite"` region; no control is focused, and nothing is scrolled, while audio plays. Controls that are unavailable use `aria-disabled` rather than `disabled`, so a button that had focus when a lesson finished reading keeps it instead of dropping the user to the top of the document.
- **Targets and focus.** Every button and every speed radio is at least 44px tall. The global `:focus-visible` outline is untouched, and no rule in `topic.css` removes an outline. The one exception, `.explain-panel:focus`, suppresses the ring on a programmatically focused container that is not a keyboard tab stop, exactly as `main.css` already does for `.topic-panel`.
- **Sticky elements do not obscure focus.** The study-mode tab bar is sticky, so the tabs, panels and both new sections carry `scroll-margin-top: calc(var(--header-height) + var(--space-7))`.
- **No colour-only meaning.** Every status, flag and zero-coverage figure is a sentence; the speech indicator dot is `aria-hidden` and duplicates text that is already in the live region.
- **Reduced motion** stops the speech indicator animating, on top of the global reduced-motion rule.
- **320px** was reasoned through for every new block: single-column grids, flexible buttons that fill the width rather than wrapping into unreachable slivers, `overflow-wrap: anywhere` on references and provenance paths, and markdown tables still inside the existing scrollable, labelled region.
- **Live regions** are present in the DOM from first render rather than being inserted with their message, so the save confirmation and the playback status are announced reliably.

## Privacy impact

No new storage, no new network call, no new identifier.

- **Read-aloud** uses `window.speechSynthesis` only. Nothing is fetched to make it work and nothing about what was read is recorded. The one value persisted is the playback rate, one number under the existing `medmosa.speech-rate.v1` key, written by `lib/speech.ts`.
- **Save for review** calls the existing `recordTopicView`, which writes to the same local progress store the topic page already wrote to on load. The confirmation says explicitly that the record is in this browser only and that nothing was sent anywhere.
- **Reference links** open with `rel="noreferrer"`, so following a citation does not tell the destination which page it came from.
- Every coverage figure is read from JSON already bundled with the application. Nothing is requested at render time.

## Known limitations

- **The vitest suite could not be executed in this environment**, so the new test file has not been run by a runner. See Test results for what was verified instead.
- **"Also appears in" is absent**, not deferred-with-a-placeholder. It will stay absent until a question maps across courses or another cross-course edge appears in the corpus.
- **Related topics resolve within the loaded course only.** That matches the data exactly today (0 cross-course edges); an id from another course would be dropped silently rather than rendered from a guessed title.
- **Estimated time is a planning figure**, derived from prose length plus mapped questions. The row says so in the row itself rather than in a footnote elsewhere.
- **Difficulty exists for 352 of 1,409 topics** and is omitted on the rest. Of those, 341 are `intermediate` and 11 `beginner`, so the level row is close to constant where it appears.
- **The source status sentence appears twice on a topic page** — once in the header facts and once in the source block. That is deliberate: both surfaces were specified to carry `describeContentStatus()`, and one status sentence repeated is safer than two surfaces that could drift apart.
- **The course list is longer than it was.** Six coverage rows per card across 33 cards is a real increase in scroll on a phone. Hiding them behind a disclosure would have made the page shorter and the library look more finished than it is.
- **Speed changes apply from the next section**, because the Web Speech API cannot re-rate an utterance already in flight and restarting the current one would replay audio. The control says so while playback is running.

## Deferred work

- Running `tests/accessibility/topic-experience.test.tsx` and the rest of the suite on a machine with a working `node_modules`, and adding it to whatever CI gate runs `npm test`.
- An axe pass and a real-device screen-reader pass over the topic page: the ARIA here is verified in markup, not in a browser, because `scripts/browser-audit.mjs` needs a build and a browser binary, neither of which is available here.
- `src/components/CourseCatalog.tsx` still renders the homepage shelf (`StartingPoints`) with cards that carry only topic and question counts. It is reserved by other work; folding the coverage figures into it would make the homepage and `/learn` consistent.
- A "read from here" control that starts speech at a chosen section: `lib/speech.ts` already accepts `startAtId`, and nothing in this UI uses it yet.
- Highlighting the section currently being spoken. The controller exposes `currentSectionId` and the UI reads it for the announcement, but the prose is rendered as one markdown document per mode, so there is no per-section element to mark yet.

## Risks or assumptions requiring later review

- **Assumption: `sections.collegeNotes` and `sections.eli10` being non-empty is the right test for which explanations exist**, rather than the `availability` flags. Both were checked to agree across all 1,409 topics; the section text is used because it is the thing being rendered.
- **Assumption: the catalog's course `status` vocabulary means what its name says.** The four values are described in the words the catalog itself uses, and an unrecognised status produces no note at all rather than a guess. If a fifth value appears, it will render silently — worth a validator.
- **Risk: the topic page's tab set changed shape.** Any bookmark, test or audit that expected an "In plain language" or "Sources" tab will not find it. Nothing in `scripts/browser-audit.mjs` or the test suite selects those tabs today, and `.subject-summary`, which the browser audit does select, still exists on the classic-library subject page in `src/App.tsx` — only the curriculum course page stopped using it.
- **Risk: `src/styles/topic.css` is not imported by this phase.** Until the App wiring imports it, every new block renders unstyled but fully readable and operable — semantics, order and focus behaviour do not depend on the stylesheet.
- **Risk: class-name collisions.** The new names were checked against every class in all six existing stylesheets and none collide; in particular the `/coverage` page's `.coverage-*` rules are scoped under `.coverage-page` and are untouched by the `.course-*` names used here.
- **Assumption: one `SpeechController` per mounted control is correct.** Several controllers share one engine, so if a second read-aloud control is ever placed on the same page, starting one will silence the other while the other's state still reads "speaking". One control per page is the intended use and the only use today.
