# Phase 4 accessibility audit

Result: PASS

Semantic Vitest checks and axe-core browser checks passed on Home, Subjects, populated/empty subjects, long note, quiz, Search, and 404 templates against WCAG 2 A/AA, WCAG 2.1 A/AA, and WCAG 2.2 AA rules. The browser pass also verified the skip link, main focus target, mobile menu semantics, and question feedback/state.

Verified features include landmark order, one H1, heading hierarchy, labeled navigation/breadcrumbs/forms, native radio/checkbox/form controls, fieldset/legend, native progress, text-based correct/incorrect status, live feedback, visible focus, color-independent meaning, scrollable table regions, reduced motion, and explicit empty/error states.

Fixes: teal was darkened from `#137b7a` to `#0d6b6a` to pass contrast on soft-teal lesson-number and related-content surfaces; Markdown H4 shifting was corrected to H5.
