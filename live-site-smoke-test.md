# Live-site smoke test

Status: `PASS`

Completed: 2026-08-11 01:09 EDT

- Primary URL: `https://studycorehub.com/`
- WWW alias: `https://www.studycorehub.com/` → `https://studycorehub.com/`
- Verified application commit: `84bd6eb6acfbb6a408675cd3592e0f3788f8b1b3`
- GitHub Pages workflow: `31460288986`
- GitHub Pages deployment: `5844678587`
- Main CI workflow: `31460289046`

The browser audit independently checked 376 routes and deep links through each hostname at 320, 375, 768, 1024, and 1440 pixels. Both runs passed without console, page, request, asset, layout, or accessibility failures.

- Homepage and all 11 subjects: PASS
- Exact 121-lesson, 111-note, and 1,032-question counts: PASS
- Chemistry 1: 5 lessons / 60 questions: PASS
- Chemistry 2: 4 lessons / 48 questions: PASS
- Organic Chemistry 1: 1 lesson / 12 questions: PASS
- Genetics and Microbiology existing content: PASS
- Notes and Markdown rendering: PASS
- Questions, correct/incorrect grading, and full answer explanations: PASS
- Search, subject/lesson/type/difficulty/tag filters, 2,064 tag options, clear, and no-result state: PASS
- Question-only lesson and quiz deep links: PASS
- Missing Chemistry note route: PASS — correct 404 experience and no fake static route
- Assets and root custom-domain loading: PASS
- Downloads: PASS — explicit empty state because no approved downloads exist
- Mobile menu and layout: PASS
- Keyboard skip link and focus behavior: PASS
- Axe WCAG 2 A/AA representative checks: PASS with 0 violations
- HTTPS and apex/`www` certificate behavior: PASS
- `www` redirect preserves secure canonical routing: PASS

GitHub reports `build_type: workflow`, `cname: studycorehub.com`, `https_enforced: true`, and no pending unverified-domain timestamp.
