# MedMosa design system — Aurora Medical Instrument

MedMosa is a calm, dark-first medical-learning environment. Discovery surfaces
are cinematic and precise; study and reading surfaces are deliberately quiet.
The implementation source of truth is `src/styles/main.css`, with homepage
composition in `src/styles/learn.css`.

## Principles

1. **Clarity before spectacle.** Motion and atmospheric lighting guide attention;
   they never compete with medical learning content.
2. **Trust is explicit.** Source/provenance states and study-use limitations remain
   visible. Visual polish must not imply clinical review or endorsement.
3. **Mobile is authored, not collapsed.** Semantic DOM order is the reading order;
   grids enhance progressively at available width.
4. **The product demonstrates itself.** Homepage practice uses canonical question
   data and does not write to a learner's progress history.

## Foundations

The system is tokenized in `:root`.

| Concept | Tokens | Production use |
| --- | --- | --- |
| Canvas | `--canvas`, `--paper`, `--navy-*` | Near-black navy background and calm study surfaces |
| Text | `--ink`, `--ink-soft`, `--ink-muted` | Strong hierarchy without low-contrast glass text |
| Accents | `--accent-teal`, `--accent-mint`, `--accent-violet`, `--accent-blue`, `--accent-amber` | Teal/mint lead; violet/blue and amber are restrained signals |
| Materials | `--glass-surface`, `--glass-surface-strong`, `--glass-border`, `--glass-highlight` | Standard and feature glass surfaces |
| Geometry | `--space-*`, `--radius-*`, `--shell` | Fluid spacing, 320px-safe gutters, constrained prose |
| Motion | `--ease`, `--duration-fast`, `--duration`, `--duration-slow` | Small, purposeful feedback only |

The palette is intentionally approximately 90% navy/neutral, 6% teal/mint,
3% violet/blue and 1% amber. It is not a rainbow card system.

## Type and reading

`--font-display` and `--font-sans` are deliberate system stacks. There are no
third-party font requests. Headlines use fluid `clamp()` sizing and balanced
wrapping. Running text stays near `--measure` (68ch) with a 1.7 reading line
height. Long-form topic and book pages prioritize stable surfaces, hierarchy,
source visibility and previous/next navigation over decorative effects.

## Materials and interaction

Material 0 is the navy canvas. Material 1 is standard glass: restrained
transparency, fine border, small inset highlight and soft shadow. Material 2 is
reserved for feature surfaces such as the hero, homepage demo and final CTA;
it adds directional aurora light but keeps body text on a stable backing.

Hover is a minor enhancement (1–3px lift, border strengthening or arrow shift).
Keyboard focus is never hidden: `:focus-visible` provides a 3px mint ring with
offset. All core controls maintain practical touch targets of about 44px.

## Motion and accessibility modes

The heart illustration uses a short load-safe ambient loop only while visible
and while the document is visible. It uses no external media, canvas loop or
animation library. Under `prefers-reduced-motion: reduce`, continuous heart
motion and non-essential hover transitions are disabled. Under
`prefers-reduced-data: reduce`, grid decoration and orbit detail are removed.
Under `prefers-contrast: more`, glass becomes opaque and borders strengthen.

Correct and incorrect answer states always include text, not colour alone.
The homepage sample uses native radios, a labelled fieldset, keyboard support,
visible focus, and a polite status region; it never records an answer.

## Responsive system

The layout starts at 320px. Primary breakpoint intent is compact/mobile below
520px, two-column enhancement near 700–760px, and 12-column discovery layouts
from 980px. CSS Grid, `minmax`, `auto-fit`, and `clamp` are preferred over
one-off viewport patches. The header retains its accessible disclosure menu
until desktop navigation has sufficient room.

## Component direction

- **Discovery:** cinematic heart, proof strip, question demo, bento workspace,
  course universe and Books preview.
- **Catalogs:** abstract MedMosa Library covers identify books without copying or
  implying ownership of source covers.
- **Study:** shared controls, practice states, dashboard, sources and topic
  navigation use the same dark materials with lower visual energy.
- **Navigation:** a sticky translucent rail gains opacity and a subtle shadow
  after scrolling, with no layout shift.

## Guardrails

Do not add stock imagery, external font/icon CDNs, animation frameworks, fake
student data, testimonials, medical endorsements or unsupported review claims.
Use canonical loaders for course, question, path and book figures. Do not hard
code live counts. Do not use decorative motion behind long-form content.

## Validation

Before shipping UI changes, run the repository quality gates in `package.json`,
including type checks, tests, source/route/assets validation, a GitHub Pages
build, and representative browser QA. Verify both ordinary and reduced-motion
views without console errors or horizontal overflow.
