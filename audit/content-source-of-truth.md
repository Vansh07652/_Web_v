# Content source of truth

Generated: 2026-08-11

## Authoritative baseline

The current baseline combines the previously approved Phase 5 export with the user's explicit missing-subject correction. Genetics and Microbiology in the supplied `approved/content` tree match the repository byte-for-byte when their separate `needs-review` subtrees are excluded. The four supplied Chemistry directories and `nclex-review` contain no approved files.

The preserved General Chemistry bank is the only additional educational source that carries an explicit `final` status and a passing subject audit. Its 10 topics contain 120 questions with zero structural errors, computation errors, near duplicates, duplicate IDs, or non-final topics. `data/restored-content-sources.json` records every logical source path and SHA-256 hash.

The sequence was mapped without rewriting educational content:

- Chemistry 1: topics 272–276, atomic structure through chemical reactions.
- Chemistry 2: topics 277–280, moles through physiologic buffers.
- Organic Chemistry 1: topic 281, organic chemistry and functional groups.

Organic Chemistry 2 remains `CONTENT_UNRECOVERABLE` because no exact source exists. NCLEX Review remains excluded because its preserved clinical material is explicitly marked as requiring qualified, current human review; a mechanical content validator is not a clinical approval.

## Current approved counts

| Subject | Lessons | Notes | Questions | Assets | Unique tags |
| --- | ---: | ---: | ---: | ---: | ---: |
| biology-1 | 14 | 14 | 168 | 0 | 466 |
| biology-2 | 14 | 14 | 168 | 0 | 439 |
| organic-chemistry-1 | 1 | 0 | 12 | 0 | 47 |
| organic-chemistry-2 | 0 | 0 | 0 | 0 | 0 |
| chemistry-1 | 5 | 0 | 60 | 0 | 173 |
| chemistry-2 | 4 | 0 | 48 | 0 | 134 |
| physics-1 | 16 | 16 | 192 | 0 | 364 |
| physics-2 | 16 | 16 | 192 | 0 | 391 |
| microbiology | 35 | 35 | 0 | 0 | 97 |
| genetics | 16 | 16 | 192 | 0 | 480 |
| nclex-review | 0 | 0 | 0 | 0 | 0 |

Totals: 11 subjects, 121 lessons, 111 notes, 1,032 questions, 2,064 tags, and zero subject assets.

## Integrity decision

All 120 restored stems, choices, answer keys, `why_correct` explanations, and ELI-10 explanations were compared programmatically with the final source records. The only transformations are schema field names, lowercase option IDs, the documented difficulty mapping, repository-relative provenance, and course/lesson routing metadata. No educational meaning was rewritten.
