# OPENSTAX STUDY-NOTES — EXECUTION KICKOFF (canonical runbook)

Any session (cron or interactive) resumes the pipeline by following this runbook. Work happens
**one book at a time**; dispatch subagents only during off-peak windows (12a–2a, 6a–9p ET). During
peak hours do local prep only (per policy api-off-peak-scheduling-v1).

## State
- Queue/progress record: `~/Documents/Hermes-Policies/off-peak-queue.json` (read FIRST to find the
  current book; update status/progress after each book).
- Requirements: `~/GITHUB_VM/Education/openstax-study-notes/WRITING-REQUIREMENTS.md` (load before dispatching).
- Manifests: `~/GITHUB_VM/Education/openstax-study-notes/manifests/<subject>--<book>.json`
  (exact topic file lists per chapter).
- Verifier: `~/GITHUB_VM/Education/openstax-study-notes/scripts/verify-topic.py` (run after each book).

## Book order
Nursing (8): clinical-nursing-skills → fundamentals-of-nursing → maternal-newborn-nursing →
medical-surgical-nursing → nutrition-for-nurses → pharmacology-for-nurses → population-health-for-nurses
→ psychiatric-mental-health-nursing.
Science (16): anatomy-and-physiology-2e → astronomy-2e → biology-2e → biology-for-ap-courses →
chemistry-2e → chemistry-atoms-first-2e → college-physics-2e → college-physics-for-ap-courses-2e →
concepts-of-biology → introduction-to-behavioral-neuroscience → microbiology → organic-chemistry-a-tenth-edition
→ physics → university-physics-volume-1 → university-physics-volume-2 → university-physics-volume-3.

## Per-book procedure
1. Load `manifests/<subject>--<book>.json`. Read `WRITING-REQUIREMENTS.md`.
2. Group chapter topic lists into batches of ~5 topic files (each batch = one subagent). Prefer
   grouping by chapter so `## Related Topics` links stay within one batch when possible.
3. Dispatch batches in parallel via `delegate_task` (up to 8 tasks/call, several calls per window).
   Subagent goal template:
   `Rewrite these N topic files with REAL educational study-guide content, in place: <absolute paths>. Follow WRITING-REQUIREMENTS.md exactly; preserve each file's YAML frontmatter, title, links, and filename; do not edit README.md files.`
   Context: repo root path, instruction to read WRITING-REQUIREMENTS.md + existing file first, ~2–3
   pages of genuine subject content (ELI-10, high-yield, key terms table, example, common confusions,
   quick review with <details>, related-topic links to siblings), subject-specific safety rules
   (nursing: no invented clinical facts/doses; science: accurate terminology, no unsafe lab steps).
4. After batches complete, run `python3 scripts/verify-topic.py <book_dir>` — every file must pass
   (all required sections, no boilerplate markers, ≥500 words). Re-dispatch any failures.
5. `git add -A && git commit -m "OpenStax <book>: rewrote N topics with original content"`.
6. Update `~/Documents/Hermes-Policies/off-peak-queue.json`: status per book (done), next book, counts.
7. Continue to next book (one at a time). Stop cleanly at end of off-peak window or session limit;
   the queue file preserves resume state.

## Completion report format (per book)
"Completed: <book>. Output: <count> topics rewritten. Source validation: <ok/flagged>."
