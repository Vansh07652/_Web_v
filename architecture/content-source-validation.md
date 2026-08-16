# Content source validation

## Result

Status: **PASS**

Validated source: the root `content/`, `data/`, `schemas/`, and `assets/` package. The original Phase 1 report recorded `UPLOAD_GITHUB_READY`; its checks covered JSON, front matter/headings, questions, unique IDs/questions, internal links, assets, secrets, index paths, schemas, and package structure.

Phase 3 independently validates the package with `scripts/validate-content-source`. It does not rewrite educational content.

## Inventory observed

| Item | Count/status |
| --- | ---: |
| Canonical subjects | 11 |
| Lessons | 121 |
| Notes | 111 |
| Questions | 1,032 |
| Content-index records | 1,143 |
| Search-index records | 1,143 |
| Tags | 2,064 |
| Approved asset files | 0 (reserved folders only) |

Approved material exists for Biology 1, Biology 2, Organic Chemistry 1, General Chemistry 1/2, Physics 1/2, Microbiology, and Genetics. Organic Chemistry 2 has no recoverable exact source; NCLEX Review remains gated on qualified current clinical review.

## Independent checks

- Required folder, seven data files, five schemas, validation report, and manifest exist.
- Every JSON file parsed.
- Subject IDs equal canonical slugs and all exported statuses are approved/audited as applicable.
- Entity IDs are unique within their collections.
- Every note/question resolves to a subject-scoped lesson.
- Every question-only lesson is explicitly declared, has questions, has no note, and cannot collide with a note-backed lesson.
- Every content-index path is relative, stays within the export, and exists.
- Every question has prompt, explanation, at least two options, an answer matching an option ID, and `humanVerificationRequired: false`.
- Every note has delimited front matter, all required fields, H1 content, and no human-review flag.
- Notes + questions equal content-index count; search-index count equals content-index count.
- Every manifest entry exists and matches its SHA-256 digest.
- Text scan finds no absolute user/home paths or common private-key/service-token formats.
- No prohibited or adjacent source directory is read by website source code.

The lack of asset files is a warning/valid empty state, not a blocker. Content accuracy is outside structural validation and remains subject to the export’s review statement.

## Reproduce

From the repository root, run `npm run validate:source`. A source error exits nonzero with a stable issue code and path/record. Fix content problems in the originating workflow and regenerate the approved export.
