# User flows

## Primary study flow

1. Student opens Home and sees the title, brief purpose, subject cards, and quick links.
2. Student opens a subject.
3. Subject shows counts, lessons, and available study modes.
4. Student opens a lesson or goes directly to notes/questions.
5. Student reads the note or answers questions.
6. Note offers related practice and previous/next navigation; practice offers explanations and next/previous/restart.
7. Persistent navigation and breadcrumbs return the student to the subject or another course.

Success means the student reaches approved study material in at most three selections from Home.

## Notes flow

Home/Notes → choose subject → choose ordered lesson note → read objectives and sections → practice related questions or move to adjacent note. If no notes exist, explain that approved notes are not yet available and offer Subjects.

## Questions flow

Home/Questions → choose subject → choose lesson set → read progress → select a radio option using pointer or keyboard → Check answer → receive text plus visual correct/incorrect feedback → Next/Previous → Restart at the end. Check answer stays disabled until a selection. Submission locks the current answer so feedback cannot contradict a later accidental selection.

## Search flow

Home/Search → enter keyword or choose one or more filters → results update locally → scan content-type, subject, difficulty, title, excerpt, and tags → open a note or related question set. Clear resets all controls. No-result copy suggests broadening terms. Rendering is limited to 100 results with an instruction to narrow the query.

## Empty-course flow

Student opens a canonical course with zero approved material → subject name and zero counts remain visible → empty state says material has not completed approval/audit → student returns to Subjects. The system never substitutes material from another course.

## Invalid-route recovery

Invalid subject, lesson, or content path → 404 explains that the approved slug may not exist → Browse subjects or Search. An index-to-file mismatch instead produces an error alert with Browse subjects and Home actions. Empty content is not treated as an error.

## Mobile and keyboard equivalence

On mobile, Menu reveals the same six navigation items. Cards and filters stack without changing order. A keyboard user can skip to main content, tab through routes and filters, use arrow keys within radio groups, press Space to select, Enter to check, and receive focusable live feedback. No required action depends on drag, swipe, hover, or precise pointer input.

## Flow acceptance checks

- Every subject card reaches its canonical subject route.
- Every content action resolves through a typed selector.
- Breadcrumbs never expose internal paths.
- Browser Back returns to the previous page and preserves normal history.
- All dead ends provide at least one safe top-level destination.
