# Content restoration log

Generated: 2026-08-11

| Action | Count/result |
| --- | --- |
| Questions restored | 120 — 60 Chemistry 1, 48 Chemistry 2, 12 Organic Chemistry 1 |
| Lessons restored | 10 question-only lessons |
| Notes restored | 0 — no approved Chemistry notes were found |
| Existing approved files modified | 0 |
| Unrecoverable subjects | 1 — Organic Chemistry 2 |
| Qualified-review exclusions | 1 — NCLEX Review |
| Indexes rebuilt | 7 of 7; 11 subjects, 121 lessons, 111 notes, 1,032 questions, 2,064 tags, 1,143 content records |

Each restored question preserves its source stem, four choices, answer key, detailed rationale, and ELI-10 explanation. Difficulty labels were structurally normalized as `foundational → easy`, `understanding/application → medium`, and `challenge → hard`. Source files and hashes are recorded in `data/restored-content-sources.json`.

The source General Chemistry audit passed all 10 topics and 120 questions. The source NCLEX validator also passed mechanically, but that did not override the existing qualified-review exclusion.

## Production evidence

- PR #9 merged normally as `84bd6eb6acfbb6a408675cd3592e0f3788f8b1b3`; its branch remains preserved.
- CI run `31460289046`, Pages run `31460288986`, and deployment `5844678587` passed.
- Both production hostnames passed 376 routes/deep links across five viewport widths.
