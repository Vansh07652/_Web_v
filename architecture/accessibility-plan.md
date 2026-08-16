# Accessibility plan

Target: WCAG 2.2 Level AA for the implemented Phase 3 site, with automated and manual testing at every release.

## Structure and navigation

- Semantic header, nav, main, article, aside, footer, lists, tables, forms, fieldsets, and buttons.
- One H1 per page; approved note H1 is shifted beneath the interface H1 to prevent duplicate top-level headings.
- Skip link is first focusable item and moves to a programmatically focusable main region.
- Breadcrumbs are a labeled nav with an ordered list and `aria-current` on the current page.
- Page titles are descriptive and update on client navigation; Phase 3 adds subject/content-specific descriptions and canonical metadata.
- Browser History API preserves Back/Forward; navigation moves focus to main content without unexpected scroll animation.

## Keyboard and focus

- Every action is a native link, button, input, select, or radio.
- Visible 3px focus ring has sufficient contrast and is never removed.
- Mobile menu exposes `aria-expanded` and `aria-controls`; closing it does not reorder links.
- Quiz options use a radio group inside fieldset/legend. Tab reaches the group, arrow keys move within it, Space selects, and Enter submits.
- Answer feedback receives programmatic focus and is announced politely. Previous, Next, and Restart remain normal buttons.
- Scrollable tables receive `tabindex=0` and an accessible region label.
- No keyboard trap, custom drag interaction, hover-only disclosure, or time limit.

## Visual and responsive access

- Validate all text, control boundaries, and focus indicators with a contrast analyzer; minimum 4.5:1 normal text and 3:1 large text/UI.
- Correct/incorrect, content type, disabled state, and warnings include text or structure, never color alone.
- Body text stays at least 16px and supports browser zoom to 200% and reflow at 320 CSS px without two-dimensional page scrolling.
- Touch targets target at least 44×44 CSS px with adequate separation.
- `prefers-reduced-motion` suppresses nonessential transition/spinner motion; no autoplay or flashing content.
- Print notes retain heading/table structure and visible URLs where a print stylesheet later adds them.

## Forms, feedback, and errors

- Search fields have persistent visible labels; placeholder is only an example.
- Dependent lesson filter is disabled until a subject is selected and retains an explanatory label.
- No-results, untouched search, empty course, missing page, and load error use distinct plain-language states.
- Errors identify what failed and offer a safe action; they do not rely on error codes.
- Async status regions use polite announcements and avoid repeatedly announcing every keystroke; Phase 3 should debounce result-count announcements if user testing finds noise.

## Images and media

- Meaningful approved images require concise alt text derived from approved metadata.
- Decorative images use empty alt and must not be focusable.
- Complex diagrams require nearby text explanation or a long description.
- Downloads state format, size, and purpose. Audio/video additions require captions/transcripts and keyboard controls.

## Content quality

- Link text describes destination; avoid “click here.”
- Abbreviations and scientific notation should be understandable in context.
- Tables use header cells and scope; large tables offer a summary/caption in Phase 3.
- Markdown renderer must preserve ordered heading hierarchy, list semantics, quotes, and accessible links.

## Verification checklist

Automated: axe-core on each route template, HTML/ARIA linting, color contrast, broken links, TypeScript, and content validation. Manual: keyboard-only pass, VoiceOver + Safari, NVDA + Firefox or Chrome, 200%/400% zoom, 320px reflow, high contrast/forced colors, reduced motion, touch targets, and error/empty states. Representative content must include a long note, table, long option, no-content subject, and zero-result search.

Accessibility defects that block content or answer submission are release blockers. Lower-impact issues are recorded with owner, severity, workaround, and target release.
