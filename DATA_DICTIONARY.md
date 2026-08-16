# Data Dictionary

## Note front matter

- `id`: globally unique lowercase identifier.
- `title`: human-readable lesson title.
- `slug`: URL-safe lesson slug.
- `subject` / `subjectName`: canonical slug and display name.
- `contentType`: `note`.
- `lesson` / `lessonNumber`: lesson identity and sequence.
- `description`: short summary.
- `status`: approval state; exported value is `approved`.
- `reviewStatus`: audit state; exported value is `audited`.
- `humanVerificationRequired`: whether additional human review is required; exported value is `false`.
- `difficulty`: introductory, intermediate, advanced, or unknown.
- `tags`: searchable topic labels.
- `source` / `sourceUrl`: supplied source label and URL; blank URL means none was supplied.
- `originalFile`: in-package pointer to `data/source-provenance.json` or a documented restoration record.
- `lastReviewed`: human-review date when supplied; blank is not a claim of human review.
- `version`: semantic content version.

## Question fields

`id`, `subject`, `lesson`, `contentType`, `questionType`, `question`, `options[{id,text}]`, `correctAnswer`, `explanation`, `difficulty`, `tags`, `source`, `originalFile`, `status`, `reviewStatus`, and `humanVerificationRequired` follow `schemas/question.schema.json`. `filePath` appears only in indexes.

## Index fields

- `filePath`: repository-relative content location.
- `title`: note title or question text.
- `approvedContentCount`: number of exported content records for a subject.
- `sha256`: source or export integrity digest.

## Question-only lessons and restoration provenance

- `data/question-only-lessons.json`: schema-shaped lesson records for approved question collections that have no approved Markdown note.
- `data/restored-content-sources.json`: logical preserved-source paths, hashes, validation evidence, course mapping, and unresolved approval boundaries for restored records.
