# Content gap report

Generated: 2026-08-11

## Reconciliation result

Expected, repository, and runtime manifests now match at 11 subjects, 121 lessons, 111 notes, 1,032 questions, 2,064 tags, and zero subject assets.

| Category | Count | Result |
| --- | ---: | --- |
| MISSING_FROM_REPOSITORY | 120 questions / 10 lessons | Restored from final, audited Chemistry topics |
| PRESENT_BUT_NOT_INDEXED | 10 question-only lessons | Fixed index generator to include declared question-only lessons |
| INDEXED_BUT_NOT_RENDERED | 3 earlier systemic defects | Remains fixed; regression coverage preserved |
| DUPLICATE_OR_CONFLICTING_ID | 0 | None |
| MALFORMED_AND_SKIPPED | 0 | None |
| ORPHANED_ASSET | 0 | None |
| CONTENT_UNRECOVERABLE | 1 subject | Organic Chemistry 2 has no exact source |
| QUALIFIED_REVIEW_REQUIRED | 1 subject | NCLEX clinical content remains outside the approval boundary |

## Fixes

- Restored topics 272–276 as 60 Chemistry 1 questions across five lessons.
- Restored topics 277–280 as 48 Chemistry 2 questions across four lessons.
- Restored topic 281 as 12 Organic Chemistry 1 questions in one lesson.
- Rebuilt all seven indexes and all three audit manifests.
- Added explicit question-only lesson metadata, relationship validation, correct deep-link generation, and a regression check that a nonexistent note route remains a 404.
- Confirmed supplied Genetics and Microbiology approved content matches the repository exactly; no duplicate import was performed.

The unresolved subjects are not fabricated or silently promoted. Their exact status is recorded in `data/restored-content-sources.json` and `APPROVAL_STATUS.md`.
