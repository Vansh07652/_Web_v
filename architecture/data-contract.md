# Data contract

## Source and trust boundary

The website consumes only the approved `content/`, `data/`, `schemas/`, and `assets/` directories in this repository. The export must report `UPLOAD_GITHUB_READY`, pass `scripts/validate-content-source`, and remain internally consistent with its schemas and SHA-256 manifest. UI code never imports these files outside modules under `src/lib/content/`.

JSON arrays are parsed at build time. Unknown optional fields are ignored by view components. Missing required fields, invalid relationships, unsafe paths, or unapproved statuses fail validation rather than being silently repaired. Valid zero-count subjects remain visible.

## Entity relationship

```text
Subject.slug 1 ── * Lesson.subject
Subject.slug 1 ── * Note.subject
Subject.slug 1 ── * Question.subject
Lesson.(subject, slug) 1 ── 0..1 Note.(subject, lesson)
Lesson.(subject, slug) 1 ── * Question.(subject, lesson)
Note/Question ── 1 ContentIndexItem by (contentType, id)
Note/Question ── 1 SearchIndex record by (contentType, id)
Note/Question * ── * Tag by tag name
ContentIndexItem.filePath ── 1 approved content file
```

IDs are unique within an entity collection. A lesson and its note intentionally may share an ID, so cross-entity uniqueness is not assumed. Relationship lookups use both subject and lesson slug to prevent cross-course collisions.

## File contracts

### `data/subjects.json` → `Subject`

| Field | Type | Required | Default / invalid behavior |
| --- | --- | --- | --- |
| `id` | string, canonical slug enum | yes | no default; must equal `slug` |
| `slug` | string, canonical slug enum | yes | no default; route key |
| `name` | nonempty string | yes | no default; visible label |
| `status` | `approved` or `needs-review` in schema | yes | website accepts only `approved` |
| `approvedContentCount` | integer ≥ 0 | no | derive from notes + questions when absent |

### `data/lessons.json` → `Lesson`

| Field | Type | Required | Default / invalid behavior |
| --- | --- | --- | --- |
| `id` | string | yes | reject missing/duplicate |
| `subject` | canonical subject slug | yes | reject unknown subject |
| `title` | nonempty string | yes | reject missing |
| `slug` | URL-safe string | yes | reject missing; unique within subject |
| `lessonNumber` | integer | yes | reject missing; ascending display order |
| `status` | literal `approved` | yes | exclude/fail any other value |

### `data/notes.json` → `Note`

Required fields are `id`, `subject`, `contentType: note`, `title`, `lesson`, `filePath`, `status: approved`, `reviewStatus: audited`, `source`, `originalFile`, and `tags[]`. There are no defaults for identity, relationship, path, or status fields. Missing tags may be treated as `[]` only after a future schema version explicitly permits it. `filePath` must be relative, remain inside the export, exist, and point to approved Markdown. Missing file means integration error, not empty content.

### `data/questions.json` → `Question`

| Field | Type | Required | Behavior |
| --- | --- | --- | --- |
| `id` | lowercase identifier | yes | unique in questions |
| `subject`, `lesson` | strings | yes | must resolve to canonical subject-scoped lesson |
| `contentType` | literal `question` | yes | reject otherwise |
| `questionType` | schema enum | yes | selects single, multiple, or written-answer interaction |
| `question` | nonempty string | yes | visible prompt; safe inline Markdown only |
| `options` | `QuestionOption[]` | yes | minimum two in current validation |
| `correctAnswer` | option ID string | yes | must match an option ID |
| `explanation` | nonempty string | yes | announced after submission |
| `difficulty` | `easy`, `medium`, `hard`, `unknown` | yes | visible/filterable; unknown stays explicit |
| `tags` | string[] | yes | searchable/filterable |
| `source`, `originalFile` | strings | yes | retained internally; not exposed as paths |
| `status`, `reviewStatus` | `approved`, `audited` | yes | fail other values |
| `humanVerificationRequired` | literal `false` | yes | fail `true` |
| `filePath` | relative string in aggregate index | website-required | must resolve inside export |

`QuestionOption` requires string `id` and `text`. The current source uses single-answer multiple choice. The interaction layer also accepts explicit multi-select answer arrays/comma-separated IDs and reliable written answers; it never guesses an answer key.

### `data/tags.json` → `Tag`

`id: string`, `name: string`, and `count: integer` are required. Names drive filters; IDs are stable keys; count ranks the local tag list. Unknown or zero-count tags are not errors but should not be promoted.

### `data/content-index.json` → `ContentIndexItem`

Required: `id`, canonical `subject`, `contentType` (`note`, `question`, `flashcard`), `title`, safe relative `filePath`, `status: approved`, `reviewStatus: audited`, `source`, `originalFile`. `lesson` and `tags` are optional by schema, defaulting only at the view-model layer to `undefined` and `[]`. Every path must exist. The index is the canonical relationship/path catalog; components do not resolve paths.

### `data/search-index.json`

Each record requires `id`, `subject`, `contentType`, `title`, searchable `text`, relative `filePath`, and `tags[]`. The loader joins it to content-index by `(contentType,id)` and to questions for difficulty/lesson. A missing join is a validation error in production.

## Markdown front matter and body

Approved notes require: `id`, `title`, `slug`, `subject`, `subjectName`, `contentType`, `lesson`, `lessonNumber`, `description`, `status`, `reviewStatus`, `humanVerificationRequired`, `difficulty`, `tags`, `source`, `sourceUrl`, `originalFile`, `lastReviewed`, and `version`. Empty `sourceUrl` and `lastReviewed` are allowed strings and make no claim. Front matter must agree with the note index for ID, subject, lesson, and status.

Body rules: one H1 followed by ordered headings, readable Markdown, descriptive links, and alt text for meaningful approved images. The renderer strips front matter, shifts the content H1 to preserve the page H1, safely renders headings, emphasis, links, images, lists, quotes, tables, and code, and never injects raw HTML.

## Assets → `Asset`

Approved assets live under `assets/images`, `assets/diagrams`, or `assets/downloads`. The future asset index should provide `id`, relative `path`, `kind`, optional `alt`, `title`, and MIME type. Paths must be relative and manifest-covered. Images require meaningful alt text unless marked decorative (`alt: ""`); downloads require visible purpose, format, and size. The current export has reserved directories but no asset files, so Downloads is an empty state.

## Search and filtering

`SearchFilters` includes optional query, subject, content type, lesson, difficulty, and tag. Query matching is case-insensitive across title, index text, subject slug, lesson slug, and tags. Filters combine with AND; tags match exact canonical tag name. An empty query with at least one filter is valid. No input returns the prompt state, not all records. Results expose `id`, title, safe excerpt, subject, content type, optional lesson/difficulty, tags, and a public `href`; never `filePath`.

## Versioning and invalid-data policy

The current contract is Phase 3 version 1. Compatible additions are optional fields ignored by old UI. Removing/renaming fields, changing enums, or changing relationship semantics requires a contract version, type update, fixtures/tests, loader adapter, and ADR. Builds fail closed on invalid approved records.
