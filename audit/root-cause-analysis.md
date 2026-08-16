# Root-cause analysis

Generated: 2026-08-11

## Findings

The supplied Chemistry, Organic Chemistry, and NCLEX directories are genuinely empty, so their absence was not a frontend-only defect. The prior approval export excluded the preserved General Chemistry bank because its split across Chemistry 1, Chemistry 2, and Organic Chemistry 1 had not been resolved. The user's missing-subject correction resolved that course-sequence ambiguity, and the source itself was already final and independently audited.

The runtime index generator also assumed every lesson had a Markdown note. Question-only Chemistry lessons would therefore have been orphaned even after the question files were restored. The generator now merges note-derived lessons with validated `data/question-only-lessons.json` records and rejects duplicates, missing lesson relationships, or empty question-only lessons.

Static Pages route generation made the same one-note-per-lesson assumption. It now emits note detail entry points only when an indexed note exists. The browser audit mirrors this behavior and explicitly verifies the question-only lesson, quiz, and missing-note 404 states.

## Ruled out

- Genetics and Microbiology omission: ruled out; approved subtrees are byte-identical to the repository.
- JSON corruption, bad answers, computation failures, duplicates, or non-final Chemistry topics: ruled out by the source audit and import comparison.
- Organic Chemistry 2 recovery: ruled out after repository, backup, branch, and preserved-source search found only the topic 281 Organic Chemistry 1 candidate.
- NCLEX approval: not inferred. The preserved hub passes mechanical checks but remains clinical material requiring qualified current review.
