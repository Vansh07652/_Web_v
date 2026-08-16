# Baseline Inventory

Factual reference for the MedMosa website as it stands at the Phase 0 baseline,
recorded on 2026-08-15. Every figure here was read from the repository. Nothing
in this document is an estimate, a target, or a proposal.

Paths are given relative to the repository root, where the website lives in
`web/`.

---

## 1. Repository and toolchain

| Item | Value |
| --- | --- |
| Repository | `Vansh07652/ELI_Nur_Web` |
| Website directory | `web/` |
| Production URL | `https://medmosa.org` |
| Baseline commit | `e830e1a` |
| Baseline commit subject | Add 12 study libraries: MCAT, RPSGT sleep medicine, chemistry hub, developmental psychology, biology, cell biology, general chemistry, respiratory therapy, DAT, NBDHE, pathophysiology, physics ELI-10 |
| Working tree at baseline | Clean |
| Package name | `medmosa` |
| Package version | `1.0.0` |
| Module system | `"type": "module"` (ESM throughout) |
| Node engine | `^20.19.0 \|\| >=22.12.0` |
| npm engine | `>=10` |

### Runtime dependencies (2)

| Package | Range |
| --- | --- |
| `react` | `^19.2.8` |
| `react-dom` | `^19.2.8` |

### Development dependencies (8)

| Package | Range |
| --- | --- |
| `@types/react` | `^19.2.18` |
| `@types/react-dom` | `^19.2.3` |
| `@vitejs/plugin-react` | `^6.0.5` |
| `axe-core` | `^4.10.3` |
| `playwright-core` | `^1.54.2` |
| `typescript` | `^7.0.2` |
| `vite` | `^8.2.1` |
| `vitest` | `^4.1.10` |

The dependency surface is deliberately small: two runtime packages and eight
development packages, with no UI framework, router, state library, or Markdown
library. Everything else in the application is written in-repo, including the
router, the Markdown renderer, and the Supabase REST client.

### Build configuration (`web/vite.config.ts`)

| Setting | Value |
| --- | --- |
| Plugins | `@vitejs/plugin-react` |
| `base` | `/` under mode `github-pages`, otherwise `./` |
| `build.outDir` | `dist` |
| `build.sourcemap` | `false` |
| `build.chunkSizeWarningLimit` | `1400` |

The relative default base makes ordinary builds portable to any subdirectory;
the `github-pages` mode switches to an absolute base because Pages serves the
custom domain from the site root.

---

## 2. The dual content system

Two independent content systems ship side by side and are served under separate
route namespaces. Neither replaces the other at this baseline.

| System | Location | Routes | Scale |
| --- | --- | --- | --- |
| Legacy v1 | `web/data/` plus Markdown under `web/content/` | `/subjects/...` | 11 subjects, 121 lessons, 111 notes, 1,032 questions, 2,064 tags |
| Curriculum v2 | `web/content-v2/` | `/learn/...` | 33 subjects, 153 units, 1,409 topics, 25,000 question placements |

Legacy v1 is a flat subject/lesson/note/question model backed by JSON indexes in
`web/data/` with Markdown note bodies loaded from `web/content/`. Curriculum v2
is a hierarchical subject/unit/topic model with structured sections, per-topic
availability flags, and mapped question banks.

---

## 3. Curriculum v2 totals

`content-v2/catalog.json` and `content-v2/build-report.json` carry the same
totals and agree exactly.

| Total | Value |
| --- | --- |
| subjects | 33 |
| units | 153 |
| topics | 1,409 |
| teachingTopics | 1,047 |
| eli10Topics | 1,174 |
| referencedTopics | 1,360 |
| uniqueQuestionsAcrossCatalog | 24,400 |
| questionPlacements | 25,000 |

Registry identity, uniform across the corpus:

| Field | Value |
| --- | --- |
| `schemaVersion` | `2.0.0` |
| `generatedOn` | `2026-08-15` |
| `registryId` | `eli-explains-master-curriculum` |
| `registryVersion` | `1.0.0` |

### Placements versus unique questions

The per-subject `uniqueQuestionCount` column sums to 25,000, which equals
`questionPlacements`. The catalog's `uniqueQuestionsAcrossCatalog` of 24,400
counts distinct question IDs across the whole corpus. The difference is exactly
600: 600 question IDs each appear in precisely two subject banks.
`validate-all-curricula.mjs` requires a reused ID to carry identical stem,
options, correct answer, rationales, and source file in both banks, and fails
the build otherwise.

---

## 4. Subjects (33 rows, catalog order)

| slug | title | category | status | units | topics | teaching | eli10 | referenced | unique questions | citation review |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `anatomy-physiology-1` | Anatomy & Physiology I | pre-health-core | `final` | 8 | 54 | 54 | 54 | 54 | 553 | 300 |
| `anatomy-physiology-2` | Anatomy & Physiology II | pre-health-core | `final` | 7 | 45 | 45 | 45 | 45 | 647 | 300 |
| `microbiology` | Microbiology | pre-health-core | `final` | 8 | 133 | 133 | 35 | 133 | 300 | 300 |
| `developmental-psychology` | Developmental Psychology: Lifespan Development | pre-health-core | `final` | 8 | 31 | 31 | 31 | 31 | 459 | 459 |
| `biochemistry` | Biochemistry | pre-health-core | `final` | 7 | 26 | 26 | 26 | 26 | 0 | 0 |
| `pathophysiology` | Pathophysiology | pathophysiology | `final` | 12 | 40 | 40 | 40 | 40 | 300 | 300 |
| `biology-1` | Biology I | pre-health-core | `final` | 6 | 36 | 36 | 36 | 36 | 588 | 468 |
| `biology-2` | Biology II | pre-health-core | `final` | 5 | 33 | 33 | 33 | 33 | 468 | 468 |
| `cell-biology` | Cell Biology | pre-health-core | `final` | 12 | 153 | 153 | 153 | 153 | 0 | 0 |
| `general-chemistry-1` | General Chemistry I | pre-health-core | `final` | 9 | 72 | 72 | 72 | 72 | 586 | 490 |
| `general-chemistry-2` | General Chemistry II | pre-health-core | `final` | 8 | 70 | 70 | 70 | 70 | 516 | 492 |
| `organic-chemistry-1` | Organic Chemistry I | pre-health-core | `partial` | 9 | 77 | 77 | 24 | 76 | 0 | 0 |
| `organic-chemistry-2` | Organic Chemistry II | pre-health-core | `partial` | 9 | 84 | 84 | 8 | 82 | 0 | 0 |
| `physics-1` | Physics I | pre-health-core | `final` | 1 | 9 | 9 | 9 | 9 | 0 | 0 |
| `physics-2` | Physics II | pre-health-core | `final` | 1 | 7 | 7 | 7 | 7 | 0 | 0 |
| `genetics` | Genetics | pre-health-core | `final` | 1 | 16 | 16 | 16 | 0 | 192 | 192 |
| `medical-terminology` | Medical Terminology | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 420 | 300 |
| `nursing-math-dosage` | Nursing Math & Dosage Foundations | healthcare-foundations | `final_question_bank_no_college_notes` | 2 | 18 | 8 | 10 | 18 | 120 | 0 |
| `nutrition` | Nutrition for Pre-Health | pre-health-core | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 420 | 300 |
| `english-language-skills` | English & Language Skills for Healthcare | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 120 | 0 |
| `clinical-judgment` | Clinical Judgment Foundations | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 120 | 0 |
| `health-assessment` | Health Assessment Foundations | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 120 | 0 |
| `patient-safety` | Patient Safety & Infection Prevention | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 120 | 0 |
| `healthcare-communication` | Healthcare Communication | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 120 | 0 |
| `evidence-based-practice-basic-statistics` | Evidence-Based Practice & Basic Statistics | pre-health-core | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 420 | 300 |
| `healthcare-ethics-professionalism` | Healthcare Ethics & Professionalism | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 120 | 0 |
| `population-public-health` | Population & Public Health Foundations | healthcare-foundations | `final_question_bank_no_college_notes` | 1 | 10 | 0 | 10 | 10 | 120 | 0 |
| `pharmacology-foundations` | Pharmacology Foundations | healthcare-foundations | `final_question_bank_without_authoritative_citations` | 1 | 10 | 0 | 10 | 0 | 300 | 300 |
| `respiratory-therapy` | Respiratory Therapy | allied-health | `final` | 6 | 56 | 0 | 56 | 56 | 2800 | 0 |
| `sleep-technology` | Sleep Technology (RPSGT) | allied-health | `final` | 1 | 12 | 0 | 12 | 12 | 566 | 494 |
| `medical-office-assistant` | Medical Office Assistant | allied-health | `final` | 6 | 174 | 0 | 174 | 174 | 14505 | 0 |
| `mcat-foundations` | MCAT Foundations | pre-health-core | `final` | 9 | 124 | 124 | 124 | 124 | 0 | 0 |
| `clinical-mnemonics` | Clinical Mnemonics | healthcare-foundations | `final` | 7 | 29 | 29 | 29 | 9 | 0 | 0 |

### Category distribution

| Category | Subjects |
| --- | ---: |
| pre-health-core | 16 |
| healthcare-foundations | 12 |
| allied-health | 3 |
| pathophysiology | 1 |

### Subject status distribution

| Status | Subjects |
| --- | ---: |
| `final` | 19 |
| `final_question_bank_no_college_notes` | 11 |
| `partial` | 2 |
| `final_question_bank_without_authoritative_citations` | 1 |

### Per-subject `statistics` object

Every subject carries exactly these ten keys, and no others:

`unitCount`, `topicCount`, `teachingTopicCount`, `eli10TopicCount`,
`highYieldTopicCount`, `referencedTopicCount`, `exactOrMappedQuestionCount`,
`subjectWideQuestionCount`, `uniqueQuestionCount`, `citationReviewRequiredCount`.

Two of these are not shown in the table above; their column sums are
`highYieldTopicCount` 867 and `exactOrMappedQuestionCount` 20,149, with
`subjectWideQuestionCount` summing to 4,851.

---

## 5. Source tier and browser mirror

Curriculum v2 is stored twice: an authoritative source tier and a browser-facing
mirror. `content-v2/` holds 3,011 JSON files in total across both tiers, the
catalog, the build report, the search index, and the legacy pilot tree.

### Source tier

```
content-v2/subjects/<subject-slug>/
  subject.json
  questions.json
  topics/<unit-slug>/<topic-slug>.json
```

33 subject directories and 1,409 topic files.

### Browser mirror

```
content-v2/client/
  catalog.json
  search-index.json
  subjects/<subject-slug>/
    subject.json
    questions.json
    topics/<unit-slug>/<topic-slug>.json
```

A 1:1 parallel tree: 33 subject directories and 1,409 topic files, matching the
source tier file for file, plus the catalog and the search index.

### Mirror transformation contract

The mirror is the source tier with bulk provenance text removed so the shipped
bundle stays small.

| Transformation | Scope |
| --- | --- |
| Topic `sourceSnapshotMarkdown` set to `""` | All 1,409 client topic files |
| Topic `aliases` and `authority` emptied | 782 client topic files |
| Topic `aliases` and `authority` retained | 627 client topic files |
| Question `sourceSnapshotMarkdown` key deleted outright | Every question in every client `questions.json` |
| Subject and unit `aliases` emptied | Every client `subject.json` |
| `client/catalog.json` | Byte-identical to `content-v2/catalog.json` |

The 782/627 split is an inconsistency between the two writer scripts, not a
content decision. `scripts/build-all-curricula.mjs` empties both the snapshot
and the alias/authority metadata; `scripts/import-generated-subjects.mjs` strips
only the snapshot and leaves aliases and authority in place. The counts were
verified by reading every client topic file.

---

## 6. Topic bundle schema

Top-level keys of a topic bundle: `schemaVersion`, `id`, `slug`, `title`,
`subject`, `unit`, `order`, `status`, `sections`, `availability`, `aliases`,
`authority`, `provenance`, `sourceSnapshotMarkdown`.

### `sections` — always 14 keys, always present

`overview`, `whyItMatters`, `learningObjectives`, `keyTerms`, `collegeNotes`,
`howItWorks`, `comparisons`, `highYield`, `commonConfusions`, `memoryAids`,
`eli10`, `quickReview`, `workedExamples`, `references`.

The object shape is uniform across the corpus. Missing content is represented by
an empty string or an empty array, never by an absent key, so a consumer can
address any section without a presence check.

### Topic `status` values

| Value | Topics | Where |
| --- | ---: | --- |
| `final` | 1,364 | Corpus-wide |
| `available` | 35 | `organic-chemistry-1` (25), `organic-chemistry-2` (10) |
| `final_requires_citation_review` | 10 | `pharmacology-foundations` |

---

## 7. The availability model

Every topic carries an `availability` object with exactly seven keys:

| Key | Type |
| --- | --- |
| `collegeNotes` | boolean |
| `eli10` | boolean |
| `highYield` | boolean |
| `quickReview` | boolean |
| `workedExamples` | boolean |
| `references` | boolean |
| `exactQuestions` | integer |

`availability` is computed at build time and denormalized into three places: the
topic bundle itself, the topic summary inside the subject file, and the client
search index entry. The UI reads it to decide which tabs and affordances to
render without loading the topic body first. Because it is denormalized, all
three copies must be regenerated together whenever section content changes.

Topic summaries inside `subject.json` units carry `id`, `slug`, `title`,
`order`, `status`, `bundlePath`, `mappedQuestionCount`, and `availability`.
Search index entries carry `id`, `subjectSlug`, `subjectTitle`, `unitSlug`,
`unitTitle`, `topicSlug`, `topicTitle`, `aliases`, `availability`, and `href`;
the index holds one entry per topic, 1,409 in total.

---

## 8. Question schema and distributions

A question bank file has four keys: `schemaVersion`, `subjectSlug`, `questions`,
`subjectWideQuestions`, `deferred`.

### Question-level field census (25,000 placements)

| Field | Placements carrying it |
| --- | ---: |
| `id` | 25,000 |
| `stem` | 25,000 |
| `options` | 25,000 |
| `correctAnswer` | 25,000 |
| `rationales` | 25,000 |
| `references` | 25,000 |
| `citationReviewRequired` | 25,000 |
| `provenance` | 25,000 |
| `sourceSnapshotMarkdown` | 25,000 |
| `mappedCanonicalTopicIds` | 25,000 |
| `mappingScope` | 25,000 |
| `difficulty` | 24,506 |
| `tags` | 24,506 |
| `sourceCollection` | 24,506 |
| `sourceTopicId` | 24,506 |
| `computation` | 23,927 |

### `mappingScope`

| Value | Placements |
| --- | ---: |
| `exact` | 19,702 |
| `subject-wide-overlay` | 4,851 |
| `broad-source-topic` | 447 |

`mappedCanonicalTopicIds` is the only cross-reference edge in the corpus, and it
points from a question to one or more topics. There is no topic-to-topic edge
anywhere.

### `difficulty`

| Value | Placements |
| --- | ---: |
| intermediate | 9,331 |
| foundational | 6,652 |
| advanced | 4,675 |
| unknown | 3,848 |
| field absent | 494 |

The 494 placements with no `difficulty` key are the sleep-technology overlay.

### `citationReviewRequired`

| Value | Placements |
| --- | ---: |
| `false` | 19,537 |
| `true` | 5,463 |

### `computation`

Present on 23,927 of 25,000 placements, shaped
`{expression, expected_value, tolerance, unit}`.

### Bank composition

`subjectWideQuestions` totals 4,851 across the 33 banks. `deferred` is empty in
all 33 current banks; the only deferred questions in the repository are the 26 in
the legacy pilot tree.

### Source collections

11 distinct `sourceCollection` values. The largest is
`medical-office-assistant-question-bank` with 14,505 questions.

---

## 9. Legacy pilot tree

`content-v2/anatomy-physiology-1/` is a flat pilot tree predating the canonical
subject layout: 54 flat topics, 553 questions, 26 deferred, 57 JSON files in all.
It is fully superseded by `content-v2/subjects/anatomy-physiology-1/`, is not
referenced by `catalog.json`, and is not loaded by the application. It is still
validated by `npm run validate:ap1`, so it cannot simply be deleted without also
retiring or repointing that gate.

---

## 10. Legacy v1 content

Served under `/subjects/...` and validated by `npm run validate:completeness`.

| Record type | Count |
| --- | ---: |
| Subjects | 11 |
| Lessons | 121 |
| Notes | 111 |
| Questions | 1,032 |
| Tags | 2,064 |

Backing files in `web/data/`: `subjects.json`, `lessons.json`, `notes.json`,
`questions.json`, `tags.json`, `content-index.json`, `search-index.json`,
`question-only-lessons.json`, `restored-content-sources.json`,
`source-provenance.json`. Note bodies are Markdown files under `web/content/`,
loaded lazily through an `import.meta.glob` over `content/*/notes/*.md`.

---

## 11. Source code

`src/` contains 45 files. Line counts of the significant modules:

| File | Lines |
| --- | ---: |
| `src/App.tsx` | 978 |
| `src/pages/CurriculumExplorer.tsx` | 621 |
| `src/components/ui.tsx` | 392 |
| `src/lib/progress.ts` | 359 |
| `src/types/content.ts` | 303 |
| `src/lib/auth/client.ts` | 261 |
| `src/components/RichQuestionPractice.tsx` | 239 |
| `src/components/StudyDashboard.tsx` | 231 |
| `src/components/illustrations.tsx` | 206 |
| `src/components/CourseCatalog.tsx` | 167 |
| `src/lib/auth/sync.ts` | 125 |
| `src/components/MarkdownDocument.tsx` | 122 |
| `src/components/QuestionPractice.tsx` | 119 |
| `src/pages/SearchPage.tsx` | 111 |
| `src/lib/content/index.ts` | 98 |
| `src/lib/auth/config.ts` | 78 |
| `src/lib/content/search.ts` | 60 |
| `src/lib/content/curriculum-v2.ts` | 56 |
| `src/lib/navigation.ts` | 48 |
| `src/lib/quiz.ts` | 24 |
| `src/layouts/SiteLayout.tsx` | 13 |
| `src/lib/content/questions.ts` | 10 |
| `src/main.tsx` | 8 |

`src/App.tsx` is by a wide margin the largest module and holds the router.

### Content loading

Curriculum v2 content is loaded lazily through `import.meta.glob` over
`content-v2/client/**`. Anatomy & Physiology I is imported eagerly because it is
the default entry course; every other subject bundle, topic bundle, and question
bank is code-split behind a dynamic import, and the search index is itself
dynamically imported on first use. The catalog is the only always-resident piece
of curriculum data.

### Routing

Routing is a hand-rolled `RouteView` switch in `src/App.tsx`, paired with href
builder functions in `src/lib/navigation.ts` and
`src/lib/content/curriculum-v2.ts`. There is no router dependency.

`src/data/routes.json` is a hand-maintained declarative contract listing 22 route
patterns. No runtime code imports it; it exists so `scripts/validate-routes` can
assert that the intended route surface still exists and that `App.tsx` still
references each namespace.

---

## 12. Route contract (`src/data/routes.json`, 22 patterns)

| id | path | title |
| --- | --- | --- |
| `home` | `/` | Home |
| `subjects` | `/subjects` | Subjects |
| `subject` | `/subjects/:subjectSlug` | Subject |
| `lessons` | `/subjects/:subjectSlug/lessons` | Lessons |
| `lesson` | `/subjects/:subjectSlug/lessons/:lessonSlug` | Lesson |
| `subject-notes` | `/subjects/:subjectSlug/notes` | Subject notes |
| `note` | `/subjects/:subjectSlug/notes/:lessonSlug` | Note |
| `subject-questions` | `/subjects/:subjectSlug/questions` | Subject questions |
| `question-practice` | `/subjects/:subjectSlug/questions/:lessonSlug` | Question practice |
| `notes` | `/notes` | Notes |
| `questions` | `/questions` | Questions |
| `curriculum-catalog` | `/learn` | Master Curriculum |
| `curriculum-subject` | `/learn/:subjectSlug` | Curriculum subject |
| `curriculum-practice` | `/learn/:subjectSlug/practice` | Curriculum practice |
| `curriculum-unit` | `/learn/:subjectSlug/:unitSlug` | Curriculum unit |
| `curriculum-topic` | `/learn/:subjectSlug/:unitSlug/:topicSlug` | Curriculum topic |
| `search` | `/search` | Search |
| `downloads` | `/downloads` | Downloads |
| `about` | `/about` | About and help |
| `error` | `/error` | Error |
| `not-found` | `/404` | Page not found |
| `auth-callback` | `/auth/callback` | Signing in |

`scripts/validate-routes` requires 21 of these paths by name; `/auth/callback` is
present in the contract but not in the validator's required list. The validator
also rejects duplicate ids, duplicate paths, relative paths, and any legacy v1
subject whose `slug` differs from its `id`.

---

## 13. Local progress storage (`src/lib/progress.ts`)

Study progress is stored only in the visitor's own browser. There are no
accounts required and no server involved in this path.

### Keys

| Role | Key |
| --- | --- |
| Current | `medmosa.progress.v1` |
| Legacy, still read | `medmosaic.progress.v1` |
| Legacy, still read | `study-compass.progress.v1` |

Legacy keys are read when the current key is absent and are migrated to the
current key on the next write, so a rebrand does not silently reset a visitor's
streak and totals.

### State shape

```
{
  version: 1,
  days:    Record<dayKey, { minutes, questions, correct }>,
  topics:  Record<topicId, dayKey>,
  courses: Record<slug, { topicsViewed, questions, correct }>
}
```

`dayKey` is `YYYY-MM-DD` in the visitor's own time zone.

### Guards

| Guard | Value |
| --- | --- |
| `MAX_DAYS` | 400 |
| `MAX_MINUTES_PER_DAY` | 1440 |
| `MAX_COUNT` | 1,000,000 |

Stored data is treated as untrusted because it is user-editable by definition.
Every value is clamped on read to a finite, non-negative integer within its
maximum; `correct` is additionally clamped so it can never exceed `questions`;
and a day key is discarded unless it matches `^\d{4}-\d{2}-\d{2}$`.

### Storage probing

Storage availability is tested with an actual write, because Safari in private
mode only throws on `setItem` rather than on property access. The probe result is
cached against the storage object it ran on rather than latched in a boolean, so
a single transient failure such as a momentarily full quota does not disable
persistence for the remaining life of the single-page app. When the probe fails,
the store downgrades to an in-memory fallback for the session and the page keeps
working.

### Privacy properties

No personal data is stored: no name, no email address, no free text. Only
counters and ISO dates. `clearProgress()` removes the current key and all legacy
keys.

---

## 14. Quality gates

All gate commands are defined in `web/package.json` and implemented in
`web/scripts/`.

| Command | Script | Purpose |
| --- | --- | --- |
| `npm run typecheck` | `tsc --noEmit` on `tsconfig.app.json` and `tsconfig.node.json` | Type-checks application and build-script sources |
| `npm run lint` | `scripts/lint` (after `typecheck`) | Rejects `dangerouslySetInnerHTML`, literal local filesystem paths, and trailing whitespace across `src/` and every file in `scripts/` |
| `npm test` | `vitest run` | Unit, integration, and accessibility suites in `tests/` and `src/tests/` |
| `npm run validate:source` | `scripts/validate-content-source` | Checks legacy v1 data files and JSON schemas exist and parse, requires `validation-report.md` to report `UPLOAD_GITHUB_READY`, and recomputes a SHA-256 for every file listed in `manifest.json` |
| `npm run validate:ap1` | `scripts/validate-curriculum-v2.mjs` | Validates the legacy Anatomy & Physiology I pilot tree |
| `npm run validate:curricula` | `scripts/validate-all-curricula.mjs` | Re-derives all eight curriculum totals from disk and compares them against hard-coded expected values |
| `npm run validate:completeness` | `scripts/validate-content-completeness.mjs` | Compares expected, current, and runtime content manifests against the legacy v1 record counts, and guards the UI against truncating content |
| `npm run validate:routes` | `scripts/validate-routes` | Asserts the declared route contract is complete, unique, absolute, referenced by `App.tsx`, and that legacy subject slugs are canonical |
| `npm run validate:architecture` | `scripts/validate-architecture` | Requires 37 named artifacts and 13 named package scripts to exist, and rejects unapproved location or status references in `src/` |
| `npm run check:links` | `scripts/check-links` | Verifies every legacy note resolves to a known subject, a known lesson route, and an existing in-repository file |
| `npm run check:assets` | `scripts/check-assets` | Verifies every local image reference in legacy notes resolves, and that the `assets`, `public/static-assets`, and `public/favicon` directories exist |
| `npm run scan:secrets` | `scripts/scan-secrets` | Scans the repository for eight credential patterns |
| `npm run build` | `vite build` plus post-build scripts | Type-checks, builds, writes the Pages fallback and sitemap, then runs `scripts/validate-build` |
| `npm run build:pages` | as above in `github-pages` mode | Production build for GitHub Pages, with per-route fallback pages |
| `npm run validate` | all of the above in sequence | Full local gate chain, ending with `test:browser` |

Supporting commands: `release:manifest` regenerates `manifest.json` hashes,
`release:inventory` regenerates the release inventory, `rebuild:indexes` and
`rebuild:audit` regenerate derived indexes and audit manifests, `build:curricula`
and `build:ap1` regenerate curriculum content, and `test:browser` runs the
Playwright and axe-core audit.

`manifest.json` currently lists 4,380 files with a SHA-256 for each.

---

## 15. Continuous integration and deployment

### `.github/workflows/ci.yml`

Runs on push and on pull requests targeting `main`, in the `web` working
directory on Node 22 with `npm ci`. After `npm audit --audit-level=high`, it runs
in sequence: `typecheck`, `lint`, `test`, `validate:source`, `validate:routes`,
`validate:architecture`, `check:links`, `check:assets`, `scan:secrets`, `build`.

### `.github/workflows/deploy-pages.yml`

Triggers on `workflow_dispatch` and on push to `main` touching `web/**` or the
workflow file itself. It runs `npm ci`, then `typecheck`, `test`,
`validate:source`, `validate:routes`, `check:links`, `check:assets`, and
`scan:secrets`, then `npm run build:pages`, uploads `web/dist`, and deploys to
GitHub Pages.

The validation step runs before anything is published, so a failing gate stops
the deploy and leaves the live site exactly as it is. GitHub Pages already owns
the custom domain; `https://vansh07652.github.io/ELI_Nur_Web/` redirects to
`https://medmosa.org`.

---

## 16. Metadata field audit

An exhaustive census of all 3,011 JSON files under `content-v2/`.

### Present

| Field | Level | Notes |
| --- | --- | --- |
| `learningObjectives` | Topic, inside `sections` | A Markdown string, not a structured array |
| `difficulty` | Question only | Present on 24,506 of 25,000 placements |
| `tags` | Question only | Present on 24,506 of 25,000 placements |

### Absent everywhere

No file in the corpus defines any of these fields:

`programs`, `prerequisites`, `relatedTopics`, `examAlignment`, `contentStatus`,
`sourceIds`, `estimatedStudyMinutes`, `lastUpdated`, `lastReviewed`,
`placementScope`, `citationStatus`, `medicalReviewStatus`, `releaseStatus`.

The string `prerequisites` does occur in two files, but only as a question tag
value in the Medical Office Assistant bank and its mirror, never as a field name.

### Adjacent fields that do exist

These occupy neighboring conceptual ground and should be considered before any
new field is introduced, to avoid creating a second source of truth.

| Existing field | Level | Adjacent to |
| --- | --- | --- |
| `mappingScope` | Question placement | `placementScope` |
| `citationReviewRequired` | Question | `citationStatus` |
| `citationReviewRequiredCount` | Subject statistics | `citationStatus` |
| `status` | Subject, unit, and topic | `contentStatus`, `releaseStatus` |
| `sourceStatus` | Topic provenance | `contentStatus` |
| `lastVerified` | Question provenance | `lastReviewed`, `lastUpdated` |
| `sourceId`, `source_id`, `sourceCollection`, `sourceFile`, `ref_id` | Topic and question provenance | `sourceIds` |
| `mappedCanonicalTopicIds` | Question to topic | `relatedTopics` |

`lastVerified` appears in only two subject banks and their mirrors:
`respiratory-therapy` and `medical-office-assistant`. There is no topic-to-topic
relationship edge anywhere in the corpus, so `relatedTopics` has no existing
analogue to build on.
