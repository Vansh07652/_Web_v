---
title: "Spontaneity"
subject: "Science"
book: "Chemistry 2e"
chapter: "16: Thermodynamics"
topic_number: "1"
source: "chemistry-2e.md"
tags:
  - "spontaneity"
  - "science"
status: "complete"
---

# Spontaneity

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 16: Thermodynamics](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

A **spontaneous process** is one that proceeds on its own once it has started, without needing continuous outside intervention. Heat flows from a hot object to a cold one; a gas expands into a vacuum; ice melts above 0 °C. None of these needs a push — each happens by itself. Crucially, *spontaneous* does **not** mean *fast*: a diamond converts to graphite spontaneously at room temperature, yet the process is so slow that diamonds last forever on human timescales. Thermodynamics tells you the direction a process *tends* to go; kinetics (Chapter 12) tells you how quickly it gets there.

Why does the universe favor some processes and not others? The first law of thermodynamics only conserves energy — it never says which direction a change will take. Direction is decided by a combined accounting of **enthalpy** (heat at constant pressure, Chapter 5) and **entropy** (energy dispersal, next topic). That accounting is the **Gibbs free energy**,

\[
\Delta G = \Delta H - T\Delta S
\]

with the simple verdict: \(\Delta G < 0\) means the process is spontaneous at constant temperature and pressure; \(\Delta G > 0\) means it is not; \(\Delta G = 0\) means equilibrium.

## Why This Matters

Free-energy reasoning decides whether a reaction can ever be made to work, which is the first question of industrial chemistry. Ammonia synthesis, iron smelting, and cement production are all analyzed as \(\Delta G\) problems before anyone builds a plant. In the body, thermodynamically unfavorable reactions (building proteins, concentrating ions) are driven by coupling to ATP hydrolysis, which has a large negative \(\Delta G\). Batteries work because the cell reaction has \(\Delta G < 0\), and the maximum electrical work available is directly proportional to \(-\Delta G\). Even everyday questions — will this ice melt, will this salt dissolve, will this metal corrode — are \(\Delta G\) questions.

## Core Concepts

### What "spontaneous" means precisely

A spontaneous process proceeds without outside intervention *after it is initiated*. The classic clues are qualitative: systems tend toward lower potential energy (exothermic tends to be favorable) and toward more dispersal (more entropy tends to be favorable). But neither tendency alone is decisive — the balance is what matters, which is why some endothermic processes (melting ice, dissolving NH₄NO₃ in a cold pack) are spontaneous.

### The first law cannot predict direction

Energy conservation is symmetric: a ball can roll down a hill or up it without violating energy conservation, but only one direction happens by itself. Thermodynamics needs a *second* criterion beyond energy — the entropy of the universe — to fix the arrow of time. The free-energy criterion \(\Delta G < 0\) is the constant-pressure, constant-temperature version of that second-law reasoning.

### Gibbs free energy combines enthalpy and entropy

For a process at constant temperature and pressure,

\[
\Delta G = \Delta H - T\Delta S
\]

where \(\Delta H\) is the enthalpy change (J or kJ per mole of reaction), \(T\) is the absolute temperature in kelvin, and \(\Delta S\) is the entropy change (J K⁻¹ per mole of reaction). The sign combinations decide the temperature behavior:

| \(\Delta H\) | \(\Delta S\) | \(\Delta G\) behavior |
|---|---|---|
| negative | positive | always negative — spontaneous at all \(T\) |
| positive | negative | always positive — never spontaneous |
| negative | negative | spontaneous only below \(T = \Delta H/\Delta S\) |
| positive | positive | spontaneous only above \(T = \Delta H/\Delta S\) |

### Standard free energy changes

Standard molar free energies of formation, \(\Delta G^\circ_\text{f}\), are tabulated (0 for elements in their standard states), and

\[
\Delta G^\circ_\text{rxn} = \sum n\,\Delta G^\circ_\text{f}(\text{products}) - \sum n\,\Delta G^\circ_\text{f}(\text{reactants})
\]

Equivalently, from enthalpy and entropy data:

\[
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ
\]

And since \(\Delta G^\circ = -RT\ln K\), the equilibrium constant of Chapter 13 is just free energy in disguise: reactions with very negative \(\Delta G^\circ\) have very large \(K\).

## ELI-10: Explain Like I'm 10

A ball on a hill rolls downhill by itself — that's spontaneous. It can be pushed uphill, but it needs help, and the higher the hill, the more help. Gibbs free energy is the height of the hill: if the bottom is lower than the top (\(\Delta G < 0\)), the ball rolls down on its own. Rolling downhill has nothing to do with how *fast* the ball rolls — a slow roll is still downhill.

## High-Yield Points

- Spontaneous = proceeds without outside intervention once started; **not** a statement about speed.
- \(\Delta G < 0\): spontaneous (product-favored) at constant \(T, P\). \(\Delta G > 0\): non-spontaneous. \(\Delta G = 0\): equilibrium.
- \(\Delta G = \Delta H - T\Delta S\) — memorize the sign table for the four \(\Delta H\)/\(\Delta S\) combinations.
- Exothermic (\(\Delta H < 0\)) *and* entropy-increasing (\(\Delta S > 0\)) processes are spontaneous at every temperature.
- Endothermic processes can still be spontaneous when \(\Delta S > 0\) is large (melting, dissolving).
- Standard state is 1 bar (often approximated as 1 atm) and usually 298.15 K; \(\Delta G^\circ\) refers to standard conditions only.
- Temperature crossover: \(T = \Delta H/\Delta S\) (when both signs match) is where \(\Delta G\) changes sign.
- \(\Delta G^\circ = -RT\ln K\): big negative \(\Delta G^\circ\) → large \(K\); \(\Delta G^\circ = 0\) → \(K = 1\).
- Units trap: \(\Delta H\) in kJ and \(\Delta S\) in J/K — convert \(\Delta S\) to kJ/K before combining.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| spontaneous process | A process that proceeds without continuous outside intervention | Defines the direction nature "wants" to go |
| Gibbs free energy (\(G\)) | Energy available to do useful work; its change decides spontaneity | The master criterion for reaction feasibility |
| \(\Delta G = \Delta H - T\Delta S\) | The free-energy equation linking enthalpy, temperature, and entropy | The tool for all spontaneity predictions |
| standard free energy (\(\Delta G^\circ\)) | Free-energy change with all species in standard states | The comparable, tabulated version used in calculations |
| equilibrium | State where \(\Delta G = 0\) and forward/reverse rates match | The endpoint every spontaneous process approaches |
| activation energy | Kinetic barrier a reaction must climb before proceeding | Separates "spontaneous" from "fast" |

## How It Works / Step-by-Step Process

1. Write the balanced reaction and note the physical states.
2. Look up \(\Delta H^\circ_\text{f}\) and \(S^\circ\) (or \(\Delta G^\circ_\text{f}\)) for every species; \(\Delta H^\circ_\text{f} = 0\) and \(\Delta G^\circ_\text{f} = 0\) for elements in standard states.
3. Compute \(\Delta H^\circ = \sum n\Delta H^\circ_\text{f}(\text{products}) - \sum n\Delta H^\circ_\text{f}(\text{reactants})\) and similarly for \(\Delta S^\circ\).
4. Convert units so \(\Delta H\) and \(T\Delta S\) match (usually kJ), then evaluate \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\).
5. Apply the verdict: negative → spontaneous at that temperature; positive → not; zero → equilibrium. For mixed signs, solve \(T = \Delta H/\Delta S\) for the crossover temperature.

## Example 1: Is the Formation of Liquid Water Spontaneous?

Consider \(\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \rightarrow \text{H}_2\text{O}(l)\) at 298.15 K.

**Step 1 — entropy change.** Standard molar entropies: \(S^\circ(\text{H}_2) = 130.7\), \(S^\circ(\text{O}_2) = 205.2\), \(S^\circ(\text{H}_2\text{O}, l) = 69.9\) J mol⁻¹ K⁻¹.

\[
\Delta S^\circ = S^\circ(\text{H}_2\text{O},l) - \left[S^\circ(\text{H}_2) + \frac{1}{2}S^\circ(\text{O}_2)\right]
\]

\[
\Delta S^\circ = 69.9 - \left(130.7 + \frac{1}{2}(205.2)\right)\ \text{J mol}^{-1}\text{K}^{-1} = 69.9 - 233.3 = -163.4\ \text{J mol}^{-1}\text{K}^{-1}
\]

**Step 2 — combine with enthalpy.** \(\Delta H^\circ_\text{f}(\text{H}_2\text{O},l) = -285.8\) kJ/mol. Convert \(\Delta S^\circ\) to kJ:

\[
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -285.8\ \text{kJ mol}^{-1} - (298.15\ \text{K})\left(-0.1634\ \text{kJ mol}^{-1}\text{K}^{-1}\right)
\]

\[
\Delta G^\circ = -285.8 + 48.7 = -237.1\ \text{kJ mol}^{-1}
\]

The units cancel correctly (K × kJ mol⁻¹ K⁻¹ = kJ mol⁻¹), and the result matches the tabulated \(\Delta G^\circ_\text{f}(\text{H}_2\text{O},l) = -237.1\) kJ/mol — a nice self-check. Water formation is strongly spontaneous, which is why hydrogen and oxygen mixtures react so violently once ignited.

## Example 2: Ammonia Synthesis — Spontaneous but Not Everywhere

The Haber reaction \(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\) has \(\Delta H^\circ = -91.8\) kJ per mole of reaction and \(\Delta S^\circ = -198.1\) J mol⁻¹ K⁻¹. At 298.15 K:

\[
\Delta G^\circ = -91.8\ \text{kJ} - (298.15\ \text{K})(-0.1981\ \text{kJ K}^{-1}) = -91.8 + 59.1 = -32.7\ \text{kJ}
\]

Spontaneous at room temperature. But both signs are negative, so there is a crossover temperature:

\[
T = \frac{\Delta H}{\Delta S} = \frac{-91.8\ \text{kJ}}{-0.1981\ \text{kJ K}^{-1}} = 463\ \text{K}
\]

Above about 463 K (at standard pressures) the reaction becomes non-spontaneous — yet industrial ammonia plants run near 700 K! The resolution is kinetic: below ~600 K the reaction is too slow without a catalyst, so plants accept a thermodynamically less favorable temperature and use high pressure plus an iron catalyst to push the equilibrium and speed the reaction. This is the classic lesson that thermodynamics sets the limit while kinetics sets the practice.

## Example 3: Why Freezing Depends on Temperature

Freezing is the reverse of fusion: \(\Delta H = -6.01\) kJ/mol and \(\Delta S = -22.0\) J mol⁻¹ K⁻¹ for \(\text{H}_2\text{O}(l) \rightarrow \text{H}_2\text{O}(s)\).

At 263 K (below the freezing point):

\[
\Delta G = -6.01\ \text{kJ} - (263\ \text{K})(-0.0220\ \text{kJ K}^{-1}) = -6.01 + 5.79 = -0.22\ \text{kJ}
\]

Freezing is spontaneous — water freezes. At 298 K:

\[
\Delta G = -6.01\ \text{kJ} - (298\ \text{K})(-0.0220\ \text{kJ K}^{-1}) = -6.01 + 6.56 = +0.55\ \text{kJ}
\]

Now melting is spontaneous — ice melts. The same reaction flips direction purely because \(T\) changed, exactly as the sign table predicts for \(\Delta H < 0\), \(\Delta S < 0\).

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "Spontaneous means fast." | It means *self-driven*. Diamond → graphite is spontaneous but takes eons; activation energy controls speed. |
| "A reaction needs \(\Delta H < 0\) to be spontaneous." | Many spontaneous processes are endothermic (melting, dissolving cold packs); \(\Delta S\) can dominate. |
| "\(\Delta G^\circ < 0\) guarantees the reaction runs under any conditions." | \(\Delta G^\circ\) describes standard conditions only. Under real concentrations, use \(\Delta G = \Delta G^\circ + RT\ln Q\). |
| "\(\Delta H\) and \(\Delta S\) can just be added directly." | Units must match: convert J to kJ (or vice versa) so that \(T\Delta S\) and \(\Delta H\) are in the same units. |
| "A spontaneous process needs no energy input at all." | It needs none *to sustain itself once started*, but it may still need activation energy to begin — a spark for methane combustion. |
| "\(\Delta G = 0\) means nothing happens." | It means equilibrium: forward and reverse proceed at equal rates; macroscopic concentrations are constant. |

## Quick Review

1. Define spontaneous process and give one example that is spontaneous but slow.
2. For each \((\Delta H, \Delta S)\) pair — (+, +), (−, −), (+, −) — state when \(\Delta G < 0\).
3. Why must you convert \(\Delta S\) from J/K to kJ/K before using \(\Delta G = \Delta H - T\Delta S\)?
4. A reaction has \(\Delta H^\circ = +50.0\) kJ and \(\Delta S^\circ = +100.0\) J K⁻¹. Above what temperature does it become spontaneous?
5. How is the equilibrium constant \(K\) related to \(\Delta G^\circ\)?
6. Ice melts spontaneously at 10 °C but not at −10 °C. Which quantity in \(\Delta G = \Delta H - T\Delta S\) changes, and what direction does it flip the sign?

<details>
<summary>Show answers</summary>

1. A spontaneous process proceeds without outside intervention once started. Diamond converting to graphite is spontaneous but extremely slow at room temperature.
2. (+, +): spontaneous only above \(T = \Delta H/\Delta S\). (−, −): spontaneous only below \(T = \Delta H/\Delta S\). (+, −): never spontaneous at any temperature.
3. Because \(\Delta H\) is in kJ and \(T\Delta S\) would otherwise be in J; matching units is required before subtracting. (100 J = 0.1 kJ.)
4. \(T > \Delta H/\Delta S = 50.0\ \text{kJ} / 0.100\ \text{kJ K}^{-1} = 500\ \text{K}\).
5. \(\Delta G^\circ = -RT\ln K\). Large negative \(\Delta G^\circ\) → large \(K\); \(\Delta G^\circ = 0\) → \(K = 1\).
6. \(T\) changes; the \(-T\Delta S\) term grows with temperature. With \(\Delta H < 0\) and \(\Delta S < 0\), raising \(T\) eventually makes \(-T\Delta S\) positive enough to flip \(\Delta G\) from negative to positive.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Entropy](02-entropy.md)
- Related: [The Second and Third Laws of Thermodynamics](03-the-second-and-third-laws-of-thermodynamics.md)
- Related: [Free Energy](04-free-energy.md)
- Related: [Thermodynamics chapter overview](../README.md)
- Related: [Enthalpy in Chapter 5: Thermochemistry](../../chapter-05-thermochemistry/03-enthalpy.md)
- Related: [Equilibrium Constants in Chapter 13: Fundamental Equilibrium Concepts](../../chapter-13-fundamental-equilibrium-concepts/02-equilibrium-constants.md)
- Related: [Collision Theory in Chapter 12: Kinetics](../../chapter-12-kinetics/05-collision-theory.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Thermodynamic data are standard reference values at 25 °C (H₂O: \(\Delta H^\circ_\text{f} = -285.8\), \(\Delta G^\circ_\text{f} = -237.1\) kJ/mol, \(S^\circ = 69.9\) J mol⁻¹ K⁻¹; NH₃: \(\Delta H^\circ_\text{f} = -45.9\) kJ/mol, \(S^\circ = 192.8\) J mol⁻¹ K⁻¹; \(\Delta H_\text{fus}(\text{H}_2\text{O}) = 6.01\) kJ/mol, \(\Delta S_\text{fus} = 22.0\) J mol⁻¹ K⁻¹). Small variations exist among reference tables.
- Last updated: 2026-08-15
