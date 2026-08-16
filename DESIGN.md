# DESIGN.md — Study Compass design system

The audience is pre-healthcare college students (pre-med, pre-nursing,
respiratory therapy, PA and similar), aged roughly 18–24 and mostly on phones.
The design has to read as **calm, credible and current** — closer to a good
university teaching site or a modern health-tech product than to a consumer app.

Three principles drive every decision below:

1. **Calm over loud.** Students use this while tired and stressed. Low-chroma
   surfaces, one accent colour, generous whitespace, no gradients competing
   with text.
2. **Trust is a visual property.** Deep navy and teal, restrained serif
   headings, precise alignment and real numbers signal an academic source.
3. **Mobile is the primary canvas.** Every rule is written mobile-first; the
   desktop layout is the enhancement, not the baseline.

Everything here is implemented as CSS custom properties in
`src/styles/main.css` under `:root`. **No component may hard-code a colour,
radius, shadow or spacing value.**

---

## 1. Colour

### Brand ramp

| Token | Value | Use |
|---|---|---|
| `--navy-900` | `#0a2c42` | Footer, inverted panels, primary button hover |
| `--navy-800` | `#0d3b57` | Primary button, stat panels |
| `--navy-700` | `#0d2a3f` | Headings |
| `--teal-700` | `#0f5f63` | Links, eyebrows, focus ring, accent rules |
| `--teal-600` | `#12716f` | Icon and marker fills on light surfaces |
| `--teal-050` | `#e6f3f1` | Teal surface tint |
| `--amber-500` | `#f2b544` | The single warm accent: active markers, highlight bars |
| `--amber-050` | `#fdf6e6` | Notice / callout surface |

### Neutrals

| Token | Value | Use |
|---|---|---|
| `--canvas` | `#f6f4ef` | Page background (warm paper, not grey) |
| `--paper` | `#ffffff` | Cards, panels, prose surfaces |
| `--ink` | `#1b2a33` | Body text |
| `--ink-muted` | `#4d5f6b` | Secondary text, metadata |
| `--line` | `#d3dde3` | Borders, dividers |
| `--line-soft` | `#eceff1` | Internal separators, badge surface |
| `--on-dark` | `#dce9f1` | Body text on navy |
| `--on-dark-muted` | `#b4cbdb` | Secondary text on navy |

### Status

| Token | Text | Surface |
|---|---|---|
| Success | `--success` `#12603e` | `--success-soft` `#e3f3ea` |
| Danger | `--danger` `#96332d` | `--danger-soft` `#fceceb` |
| Warning | `--warning` `#6f4a10` | `--amber-050` `#fdf6e6` |

### Contrast

Every pair below is verified by `tools/contrast.mjs`, which computes WCAG 2.1
relative luminance. **All 23 pairs pass**, most with substantial headroom:

| Pair | Ratio | Required |
|---|---:|---:|
| Body text on paper | 14.73:1 | 4.5 |
| Body text on canvas | 13.40:1 | 4.5 |
| Heading on paper | 14.79:1 | 4.5 |
| Muted text on canvas | 6.04:1 | 4.5 |
| Muted text on amber surface | 6.16:1 | 4.5 |
| Muted text on teal surface | 5.83:1 | 4.5 |
| Link / eyebrow on canvas | 6.73:1 | 4.5 |
| Primary button label | 11.80:1 | 4.5 |
| Accent button label (ink on amber) | 8.04:1 | 4.5 |
| Body on navy | 11.69:1 | 4.5 |
| Muted on navy | 8.61:1 | 4.5 |
| Success / danger / warning text on their surfaces | 6.60 / 6.53 / 7.32:1 | 4.5 |
| Focus ring vs canvas (non-text) | 6.73:1 | 3.0 |

The previous focus ring (`#df7c16` on `#f7f5ef`) measured 2.74:1 and failed SC
1.4.11; the new ring uses `--teal-700` and clears it more than twice over.

### Rules

- One accent (`--amber-500`) and one link colour (`--teal-700`). No third hue.
- Colour is never the sole carrier of meaning: correct/incorrect answers also
  carry an icon and a text label; the current nav item also carries
  `aria-current`.
- No pure black, no pure grey. The neutral ramp is warm to match the canvas.

---

## 2. Typography

**Decision: no web fonts.** The previous stylesheet asked for `Inter` but never
loaded it — no `@font-face`, no link — so the intended typeface never rendered
for anyone who did not happen to have Inter installed locally. There were two
honest ways to close that gap: ship font files, or commit to a system stack.

This site commits to a **deliberate system stack**, because:

- The site currently loads **zero external origins**. Pulling fonts from a CDN
  would add a third-party request on the critical rendering path, a privacy
  consideration for a student-facing education site, and a new outdated-CDN
  surface that this audit specifically praised the project for not having.
- Self-hosted variable fonts would add ~90–150 KB before first paint, on a
  mobile-first site, to replace stacks that are already excellent.
- System fonts render instantly with **no FOUT, no layout shift, no CLS cost**.

| Role | Stack |
|---|---|
| Display (`--font-display`) — h1, h2, quiz stems, stat figures | `"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, "Times New Roman", serif` |
| Text / UI (`--font-sans`) — body, nav, buttons, labels | `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Mono (`--font-mono`) — code, formulae, IDs | `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace` |

This lands on Iowan Old Style / Palatino on Apple devices, Georgia elsewhere,
and San Francisco / Segoe UI / Roboto for UI text — a warm, high-legibility
academic pairing on every platform, at zero network cost.

If the project later wants a distinct brand face, `--font-display` and
`--font-sans` are the only two places to change, and the recommended route is
self-hosting a variable font in `public/fonts/` with `font-display: swap`,
keeping the stacks above as the fallback. That is written up in
`FINAL_REPORT.md` under next steps rather than half-implemented here.

### Scale

A 1.2 (minor third) ratio, fluid via `clamp()` between the 375 px and 1440 px
breakpoints:

| Token | Mobile → Desktop | Use |
|---|---|---|
| `--text-2xs` | 0.72rem | Overline metadata |
| `--text-xs` | 0.78rem | Eyebrows, badges, captions |
| `--text-sm` | 0.875rem | Metadata, breadcrumbs, footer |
| `--text-base` | 1rem | Body |
| `--text-md` | 1.06 → 1.125rem | Lead paragraphs in prose |
| `--text-lg` | 1.2 → 1.35rem | Card titles, section lede |
| `--text-xl` | 1.4 → 1.75rem | h3 |
| `--text-2xl` | 1.7 → 2.25rem | h2 |
| `--text-3xl` | 2.1 → 3rem | Page h1 |
| `--text-4xl` | 2.5 → 4rem | Homepage hero h1 |

### Rules

- Line height: `1.15` for display, `1.65` for body, `1.7` for long prose.
- **Measure is capped at 68ch** (`--measure`) for all running text, inside the
  65–75ch target. Prose surfaces use `max-width: var(--measure)`.
- Letter-spacing tightens as size grows (`-0.02em` at h2, `-0.03em` at hero);
  eyebrows and badges use `+0.10em` uppercase.
- Never more than one h1 per page. Card titles in a grid are h3 under a
  section h2, so the outline stays a tree instead of a flat list.

---

## 3. Spacing

An 8-point scale, with two half-steps for dense UI:

| Token | Value |
|---|---|
| `--space-1` | 0.25rem |
| `--space-2` | 0.5rem |
| `--space-3` | 0.75rem |
| `--space-4` | 1rem |
| `--space-5` | 1.5rem |
| `--space-6` | 2rem |
| `--space-7` | 3rem |
| `--space-8` | 4rem |
| `--space-9` | 6rem |

Section rhythm uses `--space-8` between major blocks on desktop and `--space-7`
on mobile, applied through a single `--section-gap` fluid token rather than
per-component margins.

Layout container: `--shell` = `min(1180px, 100% - 2 × --gutter)`, gutter
`1rem` on mobile and `1.5rem` from 768 px.

---

## 4. Radii, elevation, borders

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 0.25rem | Inline code, small chips |
| `--radius-sm` | 0.5rem | Inputs, buttons, tabs |
| `--radius-md` | 0.75rem | Cards, notices |
| `--radius-lg` | 1rem | Panels, hero surfaces, quiz |
| `--radius-pill` | 999px | Badges, counters |

Three elevation levels only — the previous stylesheet had six near-identical
shadows:

| Token | Value | Use |
|---|---|---|
| `--shadow-1` | `0 1px 2px rgb(13 43 63 / .06), 0 1px 3px rgb(13 43 63 / .05)` | Resting cards |
| `--shadow-2` | `0 4px 12px rgb(13 43 63 / .07), 0 2px 4px rgb(13 43 63 / .05)` | Hovered cards, sticky bars |
| `--shadow-3` | `0 16px 40px rgb(13 43 63 / .12)` | Prose surfaces, open menu |

Borders are always `1px solid var(--line)`. Emphasis uses a 3px top or left
rule in `--teal-700` or `--amber-500`, never a heavier border.

---

## 5. Components

### Buttons

Three variants, one geometry: `min-height: 2.75rem` (44 px touch target),
`--radius-sm`, `--text-sm` at weight 650, `0.7rem 1.15rem` padding.

| Variant | Resting | Hover | Focus |
|---|---|---|---|
| `.button` (primary) | `--navy-800` fill, white label | `--navy-900` | 3px `--teal-700` ring, 2px offset |
| `.button-secondary` | transparent, `--navy-800` label, `--line` border | `--navy-050` tint, `--navy-800` border | same ring |
| `.button-ghost` | transparent, no border | `--line-soft` tint | same ring |

All buttons transition `background-color`/`border-color` over 150 ms and
translate 1px on `:active`. Every transition is disabled under
`prefers-reduced-motion: reduce`.

### Cards

One card primitive (`.card`) with modifiers, replacing six near-duplicate
treatments (`.subject-card`, `.curriculum-card`, `.note-card`, `.unit-card`,
`.result-card`, `.choice-card`):

- `--paper` background, `1px solid var(--line)`, `--radius-md`, `--shadow-1`.
- Hover: `--shadow-2` and `translateY(-2px)`; the whole card is **not** a link —
  the heading holds the link and a `::after` overlay extends the hit area, so
  the accessible name stays the title.
- `.card--accent` adds a 3px `--teal-700` top rule; `.card--muted` drops the
  shadow and uses `--canvas` for "nothing here yet" states.
- Card grids are `repeat(auto-fill, minmax(17rem, 1fr))` so they reflow without
  breakpoint-specific column counts.

### Links

Body links: `--teal-700`, underline at `0.08em` with `0.18em` offset,
`text-decoration-skip-ink: auto`. Hover darkens and thickens to `0.12em`.
Navigation and button links drop the underline but keep a visible hover surface.

### Focus

A single global rule: `:focus-visible { outline: 3px solid var(--teal-700);
outline-offset: 2px; border-radius: var(--radius-xs); }`. Nothing removes
outlines anywhere.

### Navigation

- Sticky, `--paper` at 92% opacity with `backdrop-filter: blur(10px)`, bottom
  `1px solid var(--line)`, `--shadow-2` once scrolled.
- Wordmark left, primary links centre-right, a search affordance and a single
  primary CTA right.
- Below 900 px it collapses to a hamburger **disclosure** button
  (`aria-expanded` + `aria-controls`), which opens a full-width panel,
  closes on `Escape`, on route change and on outside click, and returns focus
  to the toggle.
- The sticky topic-tab bar offsets itself from the header using a shared
  `--header-height` custom property instead of a repeated magic number.

### Footer

`--navy-900`, four sitemap-style columns that stack to one on mobile:
**Study** (Master Curriculum, tracks, practice), **Library** (classic subjects,
notes, questions, downloads), **About** (how it works, content status,
accessibility), and a brand block with the study-aid disclaimer.

---

## 6. Motion

| Token | Value |
|---|---|
| `--ease` | `cubic-bezier(.2, .7, .3, 1)` |
| `--duration-fast` | 120ms |
| `--duration` | 180ms |

Only `opacity`, `transform`, `background-color`, `border-color` and
`box-shadow` are animated. No layout-affecting properties. Everything collapses
to `0.01ms` under `prefers-reduced-motion: reduce`.

---

## 7. Breakpoints

Mobile-first. Three authored breakpoints, matching the three test viewports:

| Name | Min width | Change |
|---|---|---|
| base | 0 | Single column, stacked nav, hamburger |
| `--bp-sm` | 640px | Two-column card grids, side-by-side stats |
| `--bp-md` | 900px | Full horizontal nav, hero splits, three-column grids |
| `--bp-lg` | 1180px | Container reaches max width, four-column footer |

Card grids use `auto-fill` rather than fixed counts, so between breakpoints the
layout degrades gracefully instead of snapping.
