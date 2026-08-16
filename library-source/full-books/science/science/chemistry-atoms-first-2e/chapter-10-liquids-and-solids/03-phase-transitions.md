---
title: "Phase Transitions"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "10: Liquids and Solids"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "phase-transitions"
  - "science"
status: "complete"
---

# Phase Transitions

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 10: Liquids and Solids](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A **phase transition** is a change of state — melting, freezing, vaporization, condensation, sublimation, or deposition — each carrying an enthalpy change: heat is absorbed for the "upward" transitions (melting, vaporization, sublimation) and released for the reverse ones. Since enthalpy of sublimation equals fusion plus vaporization, the six transitions form a closed energy loop (Hess's law).

The central idea is energy accounting: during a phase change at constant pressure the temperature stays constant — added heat breaks intermolecular attractions rather than raising kinetic energy. Only *within* a single phase does temperature rise. This topic develops the **heating curve**, the equations \(q = mc\Delta T\) and \(q = n\Delta H\), and multi-step calculations — the classic "heat ice to steam" problem.

## Why This Matters

Phase-change energy is everywhere: sweating cools you because vaporization absorbs heat from skin (about 2.26 kJ per gram of water); steam burns worse than boiling water because condensation *releases* the full enthalpy of vaporization; refrigerators and heat pumps are vaporization/condensation engines; freeze-drying preserves food by subliming ice. These heats let engineers size cooling systems — and explain why phase changes dominate cooking and weather energy budgets.

## Core Concepts

### The six transitions and their enthalpy changes

| Transition | Direction | Enthalpy change |
|---|---|---|
| Melting (fusion) | solid → liquid | endothermic, \(\Delta H_{\text{fus}} > 0\) |
| Freezing | liquid → solid | exothermic, \(-\Delta H_{\text{fus}}\) |
| Vaporization | liquid → gas | endothermic, \(\Delta H_{\text{vap}} > 0\) |
| Condensation | gas → liquid | exothermic, \(-\Delta H_{\text{vap}}\) |
| Sublimation | solid → gas | endothermic, \(\Delta H_{\text{sub}} > 0\) |
| Deposition | gas → solid | exothermic, \(-\Delta H_{\text{sub}}\) |

For a given substance, \(\Delta H_{\text{sub}} = \Delta H_{\text{fus}} + \Delta H_{\text{vap}}\) (Hess's law) — for water, \(46.66\ \text{kJ/mol}\). Vaporization dominates: nearly seven times the heat of fusion.

### Why temperature stays constant during a transition

During melting, added heat breaks the hydrogen bonds of the ice lattice, so temperature does not rise until the last crystal dissolves; the same plateau occurs at the boiling point. This is why an ice–water mixture stays at 0 °C while melting. At the transition, the two phases coexist in **dynamic equilibrium**.

### Heating curves: two kinds of heat

A heating curve plots temperature versus added heat. Sloped segments are single-phase regions where

\[
q = m c \Delta T
\]

with \(m\) mass, \(c\) specific heat capacity, \(\Delta T\) temperature change. Flat segments are phase changes where:

\[
q = n \Delta H
\]

with \(n\) moles and \(\Delta H\) molar enthalpy. Multi-step problems sum the heat per segment: heating absorbs (+), cooling releases (−).

### Supercooling and superheating (model limits)

Liquids can be cooled below their freezing point without freezing (**supercooling**) or heated above their boiling point without boiling (**superheating**) — the phase change needs a nucleation site to start. These metastable states don't violate equilibrium; boiling chips in the lab provide nucleation sites that prevent violent "bumping."

### Vapor pressure and temperature: the Clausius–Clapeyron link

Vapor pressure's temperature dependence follows:

\[
\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{\text{vap}}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
\]

At the boiling point, vapor pressure equals external pressure — which is why the boiling point moves with altitude, and why the vapor-pressure curve on a phase diagram doubles as the boiling-point curve.

## ELI-10: Explain Like I'm 10

> Changing phase is like breaking a chain of paper clips: melting snaps the chains so pieces slide (that takes energy), boiling snaps almost all links so pieces fly free (even more). While you're snapping clips, temperature doesn't rise — the heat is busy breaking links. Freezing and condensing re-link the pieces and give the energy back.

## High-Yield Points

- Six transitions: melting/freezing, vaporization/condensation, sublimation/deposition; upward = endothermic, downward = exothermic.
- \(\Delta H_{\text{sub}} = \Delta H_{\text{fus}} + \Delta H_{\text{vap}}\) for the same substance.
- Water: \(\Delta H_{\text{fus}} = 6.01\ \text{kJ/mol}\), \(\Delta H_{\text{vap}} = 40.65\ \text{kJ/mol}\).
- Temperature is constant during a phase change at constant pressure — the heating-curve plateaus.
- \(q = mc\Delta T\) for single-phase heating; \(q = n\Delta H\) for phase changes.
- Vaporization dominates the energy budget: ~7× the heat of fusion for water.
- Condensation and freezing release heat — the basis of steam burns and frost warming.
- Supercooling/superheating are metastable states needing nucleation sites; boiling chips prevent bumps.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| phase transition | Change between solid, liquid, and gas states | Every transition carries an enthalpy change |
| enthalpy of fusion | Heat to melt one mole of solid at its melting point | 6.01 kJ/mol for water |
| enthalpy of vaporization | Heat to vaporize one mole of liquid at its boiling point | 40.65 kJ/mol for water; dominates budgets |
| enthalpy of sublimation | Heat to convert one mole of solid directly to gas | Equals fusion + vaporization (Hess's law) |
| heating curve | Temperature vs. added heat, with plateaus at transitions | Map for multi-step heat problems |
| specific heat capacity | Heat to raise 1 g of a substance by 1 °C | Used in \(q = mc\Delta T\) |
| dynamic equilibrium | Two phases interconverting at equal rates | The state at any transition plateau |
| supercooling / superheating | Metastable states where a phase persists past its transition point | Explain frost on cars, boiling-chip use |

## How It Works / Step-by-Step Process

**Heating 18.0 g of ice from −20 °C to steam at 120 °C:**

1. Divide the process into segments: ice warming (−20 → 0 °C), melting at 0 °C, water warming (0 → 100 °C), vaporizing at 100 °C, steam warming (100 → 120 °C).
2. For warming segments use \(q = mc\Delta T\) with the right specific heat (ice 2.09, water 4.18, steam 2.01 J/(g·°C)).
3. For phase changes use \(q = n\Delta H\).
4. Sum all five heats; heating = +, cooling = −.
5. Check: vaporization should dominate.

## Worked Examples

### Example 1: Heating 18.0 g of ice from −20 °C to steam at 120 °C

Given: \(m = 18.0\ \text{g}\), \(n \approx 1.00\ \text{mol}\); specific heats: ice 2.09, water 4.18, steam 2.01 J/(g·°C); \(\Delta H_{\text{fus}} = 6.01\), \(\Delta H_{\text{vap}} = 40.65\ \text{kJ/mol}\).

**Step 1 — warm ice:** \(q_1 = (18.0)(2.09)(20) = 752\ \text{J}\)

**Step 2 — melt ice:** \(q_2 = (1.00)(6.01) = 6010\ \text{J}\)

**Step 3 — warm water:** \(q_3 = (18.0)(4.18)(100) = 7524\ \text{J}\)

**Step 4 — vaporize water:** \(q_4 = (1.00)(40.65) = 40{,}650\ \text{J}\)

**Step 5 — warm steam:** \(q_5 = (18.0)(2.01)(20) = 724\ \text{J}\)

**Total:**

\[
q_{\text{total}} = 752 + 6010 + 7524 + 40{,}650 + 724 = 55{,}660\ \text{J} \approx 55.7\ \text{kJ}
\]

Vaporization alone contributes 73% — the key lesson of the heating curve. Run in reverse, the same calculation releases exactly 55.7 kJ.

### Example 2: Why do steam burns hurt so much?

A 150 g jet of steam at 100 °C condenses to water at 100 °C: \(n = 150\ \text{g} / 18.02\ \text{g/mol} = 8.32\ \text{mol}\).

Write the condensation heat:

\[
q = n(-\Delta H_{\text{vap}}) = (8.32\ \text{mol})(-40.65\ \text{kJ/mol}) = -338\ \text{kJ}
\]

The negative sign means 338 kJ is *released* onto skin. For comparison, heating 1.0 kg of water from 20 °C to 100 °C requires:

\[
q = mc\Delta T = (1000\ \text{g})(4.18\ \text{J/(g·°C)})(80\ ^\circ\text{C}) = 334\ \text{kJ}
\]

So condensing 150 g of steam delivers roughly the energy of boiling an entire liter of water — in an instant. That is why steam scolds are so much worse than boiling-water splashes of the same size.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| Temperature rises while ice melts. | No — during melting temperature stays at 0 °C (constant pressure); heat breaks the lattice, not kinetic energy. |
| Boiling water gets hotter the longer it boils. | At constant pressure, no — temperature is pinned at the boiling point. |
| Evaporation requires reaching the boiling point. | Evaporation is surface-only, at any temperature; boiling is bulk vaporization at the boiling point. |
| Sublimation is special to dry ice. | Any solid with significant vapor pressure sublimes — iodine, snow in dry air, freezer frost. |
| Condensation and freezing absorb heat. | They *release* heat (exothermic) — the reverse of vaporization and melting. |
| \(\Delta H_{\text{sub}} = \Delta H_{\text{fus}} + \Delta H_{\text{vap}}\) only sometimes. | It always holds for the same substance — a Hess's-law path. |
| All heating curves have plateaus at the same temperatures. | Same *shape*, but plateau temperatures and lengths depend on the substance's \(\Delta H\) and specific heats. |

## Quick Review

1. Name the six phase transitions and state whether each is endothermic or exothermic.
2. Why does temperature remain constant while a pure substance melts, even as heat is added?
3. Which single step dominates the total heat for ice at −20 °C → steam at 120 °C?
4. How much heat is released when 1.00 mol of steam at 100 °C condenses to water at 100 °C?
5. Why are boiling chips added to liquids being heated in the lab?
6. Write \(\Delta H_{\text{sub}}\) for water in terms of \(\Delta H_{\text{fus}}\) and \(\Delta H_{\text{vap}}\), and give the value.

<details>
<summary>Show answers</summary>

1. Melting (+), freezing (−), vaporization (+), condensation (−), sublimation (+), deposition (−).
2. At constant pressure, added heat breaks intermolecular attractions (potential energy), not average kinetic energy — so temperature holds steady until the transition completes.
3. Vaporization (40.65 kJ) — by far the largest step (73% of the total).
4. −40.65 kJ — condensation releases \(-\Delta H_{\text{vap}}\).
5. Boiling chips provide nucleation sites for bubbles, preventing superheating and violent bumping.
6. \(\Delta H_{\text{sub}} = \Delta H_{\text{fus}} + \Delta H_{\text{vap}} = 46.66\ \text{kJ/mol}\).
</details>

## Related Topics

- Previous: [Properties of Liquids](02-properties-of-liquids.md)
- Next: [Phase Diagrams](04-phase-diagrams.md)
- Related: [Intermolecular Forces](01-intermolecular-forces.md)
- Related: [Enthalpy](../chapter-09-thermochemistry/03-enthalpy.md)
- Related: [Calorimetry](../chapter-09-thermochemistry/02-calorimetry.md)
- Related: [Liquids and Solids chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against standard references: water \(\Delta H_{\text{fus}} = 6.01\ \text{kJ/mol}\), \(\Delta H_{\text{vap}} = 40.65\ \text{kJ/mol}\) at 100 °C, \(\Delta H_{\text{sub}} = 46.66\ \text{kJ/mol}\); specific heats: ice 2.09, liquid water 4.18, steam 2.01 J/(g·°C) (2026-08).
- Last updated: 2026-08-16
