# Content Guide

Study Compass accepts only approved, audited content that satisfies the repository schemas and validation commands. Do not change scientific, medical, nursing, question, answer, explanation, attribution, or copyright meaning as part of a technical integration.

## Canonical subjects

Use only these lowercase, hyphenated slugs: `biology-1`, `biology-2`, `organic-chemistry-1`, `organic-chemistry-2`, `chemistry-1`, `chemistry-2`, `physics-1`, `physics-2`, `microbiology`, `genetics`, and `nclex-review`. The subject `id`, `slug`, content directory, data relationships, and public route must agree.

## Notes

Store one lowercase, hyphenated Markdown file per note at `content/<subject>/notes/<id>.md`. The globally unique `id` should begin with the canonical subject slug. Use exactly one document H1 after the front matter, keep headings in order, retain source attribution, use descriptive link text, and provide alt text for meaningful images.

Each note must include all fields required by `schemas/note.schema.json`:

```yaml
---
id: biology-1-example-topic
title: Example Topic
slug: example-topic
subject: biology-1
subjectName: Biology 1
contentType: note
lesson: example-topic
lessonNumber: 1
description: Brief summary
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: unknown
tags: [example]
source: Supplied source label
sourceUrl: ""
originalFile: data/source-provenance.json#source-id
lastReviewed: ""
version: 1.0.0
---
```

Blank review/source dates must not be presented as claims. Use repository-relative asset paths only; never use local computer paths or parent-directory traversal.

## Questions

Store one JSON object per file at `content/<subject>/questions/<id>.json`. Follow `schemas/question.schema.json`. Required relationships and fields include a globally unique `id`, canonical `subject`, existing `lesson`, `contentType: "question"`, supported `questionType`, prompt, at least two options, a `correctAnswer` that matches an option ID, explanation, allowed difficulty (`easy`, `medium`, `hard`, or `unknown`), tags, source/provenance fields, `status: "approved"`, `reviewStatus: "audited"`, and `humanVerificationRequired: false`.

Do not silently repair an ambiguous answer or explanation. Route ambiguity, clinical meaning, nursing meaning, and qualified-review questions must be resolved by the content approval process before export.

## IDs, tags, lessons, and sources

- IDs are lowercase, hyphenated, globally unique, and stable after publication.
- Tags are searchable labels backed by `data/tags.json`; reuse canonical tags when possible.
- Every note and question references an existing subject/lesson pair in `data/lessons.json`.
- `originalFile` points to an in-package record in `data/source-provenance.json` or `data/restored-content-sources.json`; no runtime content may depend on a file outside this release.
- A lesson with approved questions but no approved note must be declared in `data/question-only-lessons.json`; the rebuild and source validators reject duplicates, orphan questions, and empty declarations.
- Only `approved` + `audited` records with `humanVerificationRequired: false` can become website-ready.

## Make new content website-ready

1. Complete the content review and place the approved source file under the matching canonical subject.
2. Add the source file and provenance. For a question-only lesson, update `data/question-only-lessons.json`; note-backed lessons are derived from note front matter.
3. Keep record counts and subject `approvedContentCount` values synchronized.
4. Run `npm run rebuild:indexes` and `npm run rebuild:audit`, then regenerate the release inventory and manifest.
5. Run the complete validation and production browser audit.

```bash
npm run release:inventory
npm run release:manifest
npm run validate
npm run release:manifest
# Remove ignored node_modules/ and dist/ from the release copy.
npm run validate:release
```

If a command fails, fix the data, path, schema relationship, or rendering integration; do not remove tests, suppress errors, or weaken validation. Do not commit `node_modules/`, `dist/`, coverage, caches, local environment files, editor settings, or operating-system metadata.

## Assets

Store approved images in `assets/images/`, diagrams in `assets/diagrams/`, downloads in `assets/downloads/`, and public runtime files in `public/`. Use relative references and descriptive alt text. Do not add oversized, proprietary, unlicensed, private, or executable content. `npm run check:assets` must pass.
