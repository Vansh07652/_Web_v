# Phase 1 — Content foundation and governance

## Phase objective

Add a content metadata and source-governance layer to MedMosa without touching the curriculum corpus. Specifically: a source registry, a per-topic metadata sidecar, a typed runtime accessor, two byte-identity validators, a coverage report, and documentation of every derivation rule and every deliberate omission.

The binding constraint was evidence. Every derived value had to come from data already in the repository; where evidence was absent, the field had to stay absent. This is a medical-education product, so a fabricated prerequisite, exam alignment or review status is worse than a missing one.

The second constraint was that `scripts/validate-all-curricula.mjs` hard-codes the published totals (33 subjects, 153 units, 1409 topics, 1047 teaching topics, 1174 ELI-10 topics, 1360 referenced topics, 24400 unique questions, 25000 question placements) and asserts `content-v2/client/` mirrors `content-v2/subjects/` exactly. So the metadata layer is a *sidecar* joined at runtime by topic id, never an edit to a topic bundle.

## Files inspected

- `content-v2/catalog.json`; all 33 `content-v2/subjects/*/subject.json`; all 1409 topic bundles; all 33 `content-v2/subjects/*/questions.json` (25000 questions).
- `scripts/lint`, `scripts/validate-architecture`, `scripts/scan-secrets`, `scripts/validate-all-curricula.mjs`, `scripts/validate-content-completeness.mjs`, `scripts/rebuild-content-indexes.mjs` — for the gate rules and the house script style.
- `src/lib/content/index.ts`, `src/lib/content/curriculum-v2.ts`, `src/types/content.ts` — for the accessor style and the existing JSON-import pattern.
- `package.json`, `tsconfig.app.json`, `tests/unit/data-layer.test.ts`, `/root/localtest/*` — for the test and typecheck setup.
- Repository-wide grep for licence strings (`CC BY`, `Creative Commons`, `SPDX`, `public domain`).

## Files created

| Path | What it is |
| --- | --- |
| `scripts/curriculum-corpus.mjs` | Shared read-only corpus reader; `node:` builtins only |
| `scripts/build-source-registry.mjs` | Generates the source registry; exports its builder for the validator |
| `scripts/build-topic-metadata.mjs` | Generates the metadata sidecar; exports its builder and mappings |
| `scripts/build-coverage-report.mjs` | Generates the coverage report in both formats |
| `scripts/validate-source-registry.mjs` | Registry validator |
| `scripts/validate-metadata.mjs` | Sidecar validator |
| `content-v2/indexes/source-registry.json` | Generated; 136 source records |
| `content-v2/indexes/topic-metadata.json` | Generated; 1409 topic entries |
| `_audit/coverage-report.json` | Generated |
| `_audit/coverage-report.md` | Generated |
| `src/lib/content/metadata.ts` | Typed, pure accessor over both sidecars |
| `tests/unit/content-metadata.test.ts` | 13 tests over the accessor, guards, copy and invariants |
| `docs/content-governance.md` | Layer model, generator/gate workflow, evidence rule |
| `docs/source-and-license-policy.md` | Registry derivation and the licence position |
| `docs/topic-metadata-guide.md` | Every field derivation and every omission |
| `docs/content-statuses.md` | The five statuses and the rules for their copy |
| `_audit/phase-1-content-foundation.md` | This report |

`docs/` and `content-v2/indexes/` did not previously exist.

## Files updated

None. No pre-existing file in the repository was modified. Nothing under `content-v2/subjects/` or `content-v2/client/` was read-modify-written; the corpus is read-only to every script added here. `package.json`, `src/App.tsx`, `src/data/routes.json`, `src/pages/CurriculumExplorer.tsx`, `src/lib/progress.ts`, `manifest.json` and all existing tests are untouched.

Not wiring the new generators into `package.json` scripts is deliberate — that file is reserved by other work. The commands are documented in `docs/content-governance.md` and should be added to `npm run validate` in a later phase.

## Files moved or removed

None.

## User-facing behavior changed

None. Nothing added here is rendered yet. `src/lib/content/metadata.ts` is a new module with no importers; no route, page or component was changed. The sidecar exists so that a later phase can show study estimates, source attribution and honest status badges without inventing data at render time.

## Data/schema changes

No change to any existing schema. Two new generated artefacts, both `schemaVersion: "1.0.0"`, both outside the corpus:

**`content-v2/indexes/source-registry.json`** — `{schemaVersion, generatedOn, generatedBy, derivationRules[], sources[]}`. 136 records: 24 `collection:<value>`, 112 `reference-host:<hostname>`. 24 carry `usageType: "adaptation"`; 13 carry `importedAt`; 2 carry a `license`; 0 carry `authorOrOrganization`.

**`content-v2/indexes/topic-metadata.json`** — `{schemaVersion, generatedOn, generatedBy, notes[], derivationRules[], topics{}}`. 1409 entries keyed by topic id. Every entry carries `programs`, `estimatedStudyMinutes`, `sectionCharacterCount`, `exactQuestionCount`, `citationReviewQuestionCount`, `contentStatus`, `sourceIds`, `publish`. 352 carry `difficulty`; 64 carry `relatedTopics`.

`generatedOn` on both is copied from the catalog (`2026-08-15`) rather than the wall clock, so both regenerate byte-identically; both validators compare bytes against a fresh in-memory derivation.

### Fields deliberately omitted, and why

| Field | Evidence sought | Why it is absent |
| --- | --- | --- |
| `prerequisites` | Any topic-to-topic ordering edge | None exists anywhere in the corpus. A prerequisite chain would be pure invention, and a wrong one sends a learner into material they are not ready for. |
| `examAlignment` | An exam blueprint, competency code or test plan reference | No topic, question or catalog record names one. |
| `learningObjectives` (structured array) | Discrete, separable objectives | `sections.learningObjectives` is free prose. Splitting it means rewriting source text, which the import contract (`importedWithoutRewriting: true` on all 1409 topics) forbids. |
| `tags` | A topic-level tag vocabulary | Only questions carry tags. Propagating them upward would attribute claims to topics that their own source text does not make. |
| `lastReviewed` | A record of a person reviewing a published topic | The corpus has `importBatch` and `lastVerified` for *source material* only. Reusing an import date as a review date would misrepresent it. |
| `difficulty` on 1057 topics | ≥5 exact-mapped questions with a mappable difficulty | Below threshold. `exact`-scope questions map to exactly one topic, so most topics do not reach five. Never guessed from a title. |
| `relatedTopics` on 1345 topics | A question co-mapping the topic with another | No co-mapping. The 64 that do get the field come from the 447 `broad-source-topic` questions; `exact` questions map to one topic and `subject-wide-overlay` questions map to none. |
| `license` on 134 of 136 source records | A literal licence string in repository text for that source | Absent. Only `openstax.org` and `opentextbc.ca` state `CC BY 4.0` in reference text. Licences are never inferred from a hostname, including for the 45 `.gov` hosts. |
| `authorOrOrganization` on all 136 records | A named author or rights holder | The corpus stores collection slugs and citation text. Parsing an author out of a citation would produce a value no field actually asserts. |
| `attributionRequired` on 134 records | A licence to attach the obligation to | Omitted where there is no licence. Omission means "unknown", not "not required". |
| `contentStatus: "medically-reviewed"` on all 1409 topics | A credentialed clinical review | **Nothing in this repository evidences one for any topic.** Never emitted; the validator and the unit test both fail if it appears. |

## Test and validation commands run

```
tsc --noEmit -p tsconfig.app.json
vitest run tests/unit/content-metadata.test.ts     # locally via the node:test shim
vitest run tests/unit/quiz.test.ts                 # locally via the node:test shim
node scripts/build-source-registry.mjs
node scripts/build-topic-metadata.mjs
node scripts/build-coverage-report.mjs
node scripts/validate-source-registry.mjs
node scripts/validate-metadata.mjs
node scripts/lint
node scripts/validate-architecture
node scripts/validate-all-curricula.mjs
node scripts/scan-secrets
```

## Test results

| Command | Result |
| --- | --- |
| `tsc --noEmit -p tsconfig.app.json` | **PASS** — 0 errors. (An earlier run during this phase reported 2 errors in `src/lib/progress.ts`, which imports `./review/scheduler`; that module landed from parallel work mid-phase and the project is now clean. No error was ever raised in a file added by this phase.) |
| `tests/unit/content-metadata.test.ts` | 13 pass, 0 fail |
| `tests/unit/quiz.test.ts` (regression) | 3 pass, 0 fail |
| `validate-source-registry.mjs` | **PASS** — 136 records (24 collections; 112 reference hosts); 2 with a licence copied literally from the repository; errors: 0 |
| `validate-metadata.mjs` | **PASS** — 1409 entries of 1409 catalog topics; 1364 publishable; 352 with a derived difficulty; 64 with relatedTopics; errors: 0 |
| `lint` | **PASS** |
| `validate-architecture` | **PASS** — 37 required artifacts; 48 source files scanned |
| `validate-all-curricula.mjs` | **PASS** — 33 subjects; 153 units; 1409 topics; 1047 teaching topics; 24400 unique questions; errors: 0 (unchanged from the pre-phase baseline) |
| `scan-secrets` | **PASS** — 0 possible secrets |

The coverage report independently re-derives the catalog's hard-coded totals from disk and reproduces them exactly: 1409 topics, 1047 college-note topics, 1174 ELI-10 topics, 1360 referenced topics, 25000 question placements, 5463 citation-review questions.

## Accessibility impact

None directly — no UI was added or changed. Two forward-looking effects:

- `describeContentStatus()` returns plain-language prose, not a colour or an icon, so status can be conveyed without relying on colour alone when it is eventually rendered.
- Copy is capped at 160 characters (enforced by test) so it fits a badge or tooltip without truncation, and reads sensibly to a screen reader in full.

Whatever renders `estimatedStudyMinutes` must label it as an estimate in text, not by styling alone.

## Privacy impact

None. No personal data is read, derived, stored or transmitted. All inputs are content files already in the repository; all outputs are content metadata. No network calls, no telemetry, no new dependencies, no environment variables. `scan-secrets` passes across the whole tree including the new files.

## Known limitations

- `estimatedStudyMinutes` rests on a 900-characters-per-minute reading assumption that is not measured against real learners. 126 topics sit at the `[2, 90]` lower clamp and 148 at the upper clamp, so the extremes are compressed.
- `difficulty` covers 352 of 1409 topics and is heavily skewed (11 `beginner`, 341 `intermediate`) because it inherits the question authors' labelling, which itself concentrates on `intermediate`.
- `relatedTopics` covers 64 of 1409 topics. It is a co-mapping signal, not a semantic one: it says a question was written against both topics, not that a learner should read them together.
- `programs` is a subject-category mapping applied uniformly. It cannot distinguish a topic within a course that a given programme does not need.
- Reference-host records are host-level, not work-level. `openstax.org` is one record covering 358 distinct URLs across many books.
- Reference-host titles are verbatim citation strings, so some read as full citations rather than publisher names. Tidying them would break traceability.
- The generators are not wired into `npm run validate`, because `package.json` is reserved by parallel work.
- Regeneration is a full corpus read (~25000 questions, ~1409 bundles) and takes a few seconds. Fine for a build step, too slow for a watch loop.

## Deferred work

- Add `build:metadata`, `validate:metadata` and `validate:source-registry` to `package.json` and into the `validate` chain.
- Surface the metadata in the UI: study estimates, source attribution with the two CC BY 4.0 records credited, and status badges driven by `describeContentStatus()`.
- Filter published content by `publish` at the route level so held and draft topics cannot be reached directly.
- Resolve the 10 `needs-medical-review` topics (all in Pharmacology Foundations) and the 35 drafts (25 Organic Chemistry I, 10 Organic Chemistry II).
- Decide the licence position for the 45 `.gov` hosts and the 24 collections with a human, then record the answer in the repository so the generator can pick it up as evidence.
- If a real clinical review process starts, record reviewer, credential and date in the corpus so `medically-reviewed` can be derived rather than asserted.

## Risks or assumptions requiring later review

1. **`publish` semantics were tightened against the brief.** The brief said `publish = contentStatus !== "draft"` but also required the validator to reject publishing a `needs-medical-review` topic. Those disagree for 10 topics. The stricter rule was implemented (`publish` is true only for `source-grounded`) and both validators enforce it. If the looser reading was intended, 10 review-flagged pharmacology topics would go live — confirm before changing it.
2. **The brief's stated corpus facts differed from the corpus in three places, and the data won.** The brief said 11 distinct `sourceCollection` values; the actual union of topic `provenance.sourceCollection` and question `sourceCollection` is 23. The brief said `pre-health-core` had 16 subjects and `healthcare-foundations` 12; the catalog says 18 and 11. Both were verified by re-reading `content-v2/`. Nothing was derived from the brief's numbers.
3. **One documented extension to the registry derivation rule.** 494 sleep-technology questions carry no top-level `sourceCollection` but do carry `provenance.sourceCollection: "rpsgt-500-questions"`. Reading only the top-level field would have dropped a real source from a governance artefact, so provenance is used as a fallback. The fallback is stated in the file's own `derivationRules`. This is the 24th collection record.
4. **`usageType: "adaptation"` is derived from `importedWithoutRewriting === true`,** per the brief. The literal reading of that flag is that text was reused *without* adaptation. The value describes importer behaviour, not a rights determination, and `notes` on every collection record says no licence evidence exists.
5. **`attributionRequired: true` on the two CC BY 4.0 records is one inferential step.** The repository states the licence; attribution is that licence's defining condition rather than a separate statement in the repo. Set conservatively, since over-stating an attribution obligation is safer than under-stating it. Reviewable.
6. **Reference-host titles are the modal citation text, ties broken lexicographically.** Reproducible, but the "most frequent" text for a host with many works is arbitrary as a title.
7. **`exactQuestionCount` counts every question mapping to a topic, not only `exact`-scope ones.** It equals `availability.exactQuestions` for all 1409 topics, and `validate-metadata.mjs` asserts that equality, so a future importer change that breaks the correspondence fails the build rather than drifting silently. The field name is inherited from the corpus and is mildly misleading.
8. **`content-v2/indexes/` is not mirrored into `content-v2/client/`.** `src/lib/content/metadata.ts` imports from `content-v2/indexes/` directly, unlike the rest of the content layer, which reads the client mirror. This was deliberate: writing into `content-v2/client/` would break the mirror-equivalence gate. If the client mirror later becomes the only bundled path, the sidecar needs a mirroring step and the equivalence rule needs to exempt it.
9. **`topic-metadata.json` is 842 KB and is imported eagerly.** Typecheck is unaffected (7.8 s for the whole app project) but bundle size is not measured here. If it matters, the accessor can move to a dynamic import without changing the sidecar.
