# Design system

## Principles

Calm, academic, uncluttered, high-contrast, mobile-first, consistent, and easy to scan. One page has one clear H1 and usually one primary action. Meaning is expressed with words, structure, and icons/shapes as well as color. Motion is optional, brief, and disabled by reduced-motion preferences.

## Foundations

| Role | Token/value | Use |
| --- | --- | --- |
| Ink | `#172b3a` | body text |
| Muted | `#5c6b76` | secondary text on light surfaces |
| Navy | `#123b5d` | primary buttons and strong UI |
| Navy dark | `#0b2a43` | headings/footer |
| Teal | `#137b7a` | accents/focus-adjacent emphasis |
| Cream | `#f7f5ef` | page background |
| Paper | `#ffffff` | cards and reading surface |
| Line | `#d7e0e5` | borders/dividers |
| Note | `#2d658f` + “Note” | note identity |
| Question | `#7a4e15` + “Question” | question identity |
| Correct | `#176b45`, pale green + “Correct” | positive answer feedback |
| Incorrect | `#a33c35`, pale red + “Not quite” | incorrect feedback |
| Warning | `#7a5412`, pale amber + label | review/study notices |

Exact contrast must be rechecked when tokens change. Current dark text and action combinations target WCAG 2.2 AA; normal text requires 4.5:1 and large text/UI 3:1.

Typography uses the system UI stack for controls and scanning, and Georgia for editorial H1/H2 and note body. Body is 16px minimum, line-height 1.6, note text about 17px, and reading width 790px. Responsive headings use `clamp` without preventing 200% zoom.

Spacing uses a 4px base with practical steps 8, 12, 16, 24, 32, 48, and 64px. Cards use 8–12px radii; pills use full radius. Borders are 1–2px. The standard shadow is subtle (`0 12px 32px rgba(18,59,93,.08)`) and never the only boundary.

## Components

- Buttons: 44px minimum target, solid navy primary, outlined secondary, visible disabled state, persistent text label.
- Links: underlined in prose; navigation/card links remain visibly interactive through placement, weight, and focus.
- Cards: white surface, solid border, concise heading, metadata, and one obvious route.
- Breadcrumbs: ordered inline list with slash separators and current item text.
- Tabs: future enhancement only when same-page panels genuinely benefit; use `tablist`, selected state, arrow-key model, and visible panel heading.
- Badges: always contain words such as Note, Question, difficulty, or tag.
- Alerts: border plus label/heading and plain-language recovery; error uses alert semantics only for actual errors.
- Form controls: label above input, 44px height, native semantics, high-contrast border, and focus ring.
- Question options: full-row radio label, option letter, selected border/background; feedback adds explicit status words.
- Progress: “Question x of y” plus native progress bar.
- Empty states: hollow-circle motif, direct heading, reason, and optional safe next action.
- Error states: red top border, “Something went wrong,” explanation, Subjects/Home actions.
- Loading states: text announcement plus optional spinner; no indefinite skeleton required for build-time data.
- Tables: header backgrounds, cell borders, horizontal scroll region with keyboard focus.

## Content-type distinction

Notes use a blue badge/border and the word “Note.” Questions use amber and “Question.” Flashcards, when approved, should use violet plus “Flashcard.” Downloads should use teal plus format/size text. Review warnings use amber notice structure. Correct and incorrect use icons or words in addition to green/red. Explanations appear in a bordered feedback panel after status.

## Responsive behavior

Breakpoints are content-driven near 920px and 700px. Three-column grids become two then one; hero and choice cards become one column; filters become two then one; navigation becomes a button-controlled vertical list. Touch targets remain at least 44px, controls never rely on horizontal page scrolling, and tables get their own scroll container.

## Motion, print, and states

Only small hover elevation and a loading spinner animate. `prefers-reduced-motion` reduces animation and scrolling to near zero. Print hides site chrome and renders notes on a plain white surface. Every interactive component defines default, hover, focus-visible, active/selected, disabled, and error/success states where relevant.
