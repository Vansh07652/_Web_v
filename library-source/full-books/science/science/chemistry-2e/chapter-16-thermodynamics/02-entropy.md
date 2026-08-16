---
title: "Entropy"
subject: "Science"
book: "Chemistry 2e"
chapter: "16: Thermodynamics"
topic_number: "2"
source: "chemistry-2e.md"
tags:
  - "entropy"
  - "science"
status: "complete"
---

# Entropy

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 16: Thermodynamics](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

**Entropy**, \(S\), is the thermodynamic quantity that measures how broadly a system's energy is dispersed among available states. A gas released from a small flask spreads into an entire room; a hot metal block cools toward the temperature of its surroundings; two gases in a container mix on their own. In every case energy is being shared more widely, and entropy increases. The more ways a system's energy can be arranged (its **microstates**), the higher its entropy.

Entropy is a **state function**: its value depends only on the current state of the system, not on how that state was reached. It has absolute values (unlike enthalpy, which is measured relative to formation conventions) with units of energy per temperature per amount — joules per kelvin per mole, J mol⁻¹ K⁻¹. Because tabulated standard molar entropies \(S^\circ\) are absolute, computing an entropy change is a simple products-minus-reactants sum:

\[
\Delta S^\circ = \sum n\,S^\circ(\text{products}) - \sum n\,S^\circ(\text{reactants})
\]

## Why This Matters

Entropy explains the *direction* of change — the thermodynamic arrow of time. It tells you why heat never spontaneously flows from cold to hot, why a dropped egg never reassembles, and why spontaneous reactions are product-favored even when they absorb heat. Engineers design heat engines and refrigerators around entropy accounting; biologists study how living systems export entropy to their surroundings to maintain order locally; pharmaceutical scientists care that many drugs dissolve with an entropy gain. Entropy also predicts simple, testable chemistry: reactions that produce gas are favored entropically, which is why effervescence and explosions proceed so vigorously, and why some solids dissolve even when dissolution is endothermic.

## Core Concepts

### Entropy is energy dispersal, not "messiness"

The everyday gloss "entropy is disorder" is a useful memory hook but can mislead. The precise idea is **microstates**: the number of distinct arrangements of particles and energy that look identical at the macroscopic level. A gas in one corner of a flask has few microstates; spread through the whole flask, the same gas has enormously more. Because each microstate is equally likely, the system overwhelmingly evolves toward the macrostate with more microstates — higher entropy. The Boltzmann formula expresses this:

\[
S = k_\text{B} \ln W
\]

where \(k_\text{B} = 1.38 \times 10^{-23}\ \text{J K}^{-1}\) is Boltzmann's constant and \(W\) counts microstates. More microstates → larger \(S\).

### Standard molar entropies are absolute

Standard molar entropy \(S^\circ\) is the entropy of one mole of substance in its standard state at the reference temperature (commonly 25 °C). Two contrasts with enthalpy are essential:

- **No formation convention.** There is no "entropy of formation"; \(S^\circ\) is absolute, and elements in standard states have *nonzero* values (e.g., \(S^\circ(\text{O}_2) = 205.2\ \text{J mol}^{-1}\text{K}^{-1}\)).
- **Values are small.** Entropies are typically tens to hundreds of J mol⁻¹ K⁻¹, so entropy terms contribute kJ-scale free energies only when multiplied by \(T\).

### Predicting entropy changes qualitatively

Three rules of thumb cover most predictions:

1. **Phase:** \(S(\text{gas}) \gg S(\text{liquid}) > S(\text{solid})\). Melting and vaporization increase entropy.
2. **Gas moles:** reactions producing more gas molecules have \(\Delta S > 0\); consuming gas gives \(\Delta S < 0\). Solute particles from dissolving a solid also raise entropy.
3. **Temperature and complexity:** entropy increases with temperature (more energy states populated) and with molecular complexity (more atoms, more ways to vibrate and rotate — e.g., \(S^\circ(\text{CO}_2) = 213.8\) vs \(S^\circ(\text{O}_2) = 205.2\ \text{J mol}^{-1}\text{K}^{-1}\)).

### Computing \(\Delta S^\circ\)

Using tabulated \(S^\circ\) values, apply

\[
\Delta S^\circ = \sum n\,S^\circ(\text{products}) - \sum n\,S^\circ(\text{reactants})
\]

where \(n\) are the stoichiometric coefficients. The result carries units of J mol⁻¹ K⁻¹ *per mole of reaction as written*.

### Entropy changes at phase transitions

At a transition temperature, the two phases are in equilibrium and the entropy change is exactly the heat absorbed divided by the absolute temperature:

\[
\Delta S_\text{trans} = \frac{\Delta H_\text{trans}}{T_\text{trans}}
\]

For vaporization of water at its boiling point, this gives about 109 J mol⁻¹ K⁻¹ — a large entropy gain, consistent with liquid water's ordered hydrogen-bond network becoming free gas.

## ELI-10: Explain Like I'm 10

Think of ten coins: heads is "ordered," tails is "spread out." There is only one way to have all heads, but hundreds of ways to have a mix — so a mix is what you almost always see. Entropy counts the ways. Nature always drifts toward the arrangement that can happen in the most ways.

## High-Yield Points

- Entropy \(S\) = number of microstates / breadth of energy dispersal; state function; units J mol⁻¹ K⁻¹.
- \(S(\text{gas}) \gg S(\text{liquid}) > S(\text{solid})\); melting, vaporization, and dissolution of solids raise entropy.
- Reactions that increase gas moles have \(\Delta S > 0\); decreasing gas moles gives \(\Delta S < 0\).
- Standard molar entropies \(S^\circ\) are absolute — elements are not zero — so use the products-minus-reactants sum directly.
- \(\Delta S^\circ = \sum nS^\circ(\text{products}) - \sum nS^\circ(\text{reactants})\).
- At a phase transition, \(\Delta S = \Delta H/T\) (use kelvin and matching energy units).
- A negative \(\Delta S\) for the *system* is fine: the second law requires the universe's entropy to increase (next topic).
- Bigger, more complex molecules have higher \(S^\circ\); temperature raises entropy too.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| entropy (\(S\)) | Measure of how broadly a system's energy is dispersed among microstates | The thermodynamic arrow of time; decides direction of change |
| microstate | One specific arrangement of particles and energy consistent with the macroscopic state | Counting microstates explains why some states are overwhelmingly likely |
| state function | Property depending only on current state, not the path taken | Lets you compute \(\Delta S\) from start and end states alone |
| standard molar entropy (\(S^\circ\)) | Absolute entropy of one mole in its standard state at the reference temperature | The tabulated input for all \(\Delta S^\circ\) calculations |
| Boltzmann constant (\(k_\text{B}\)) | \(1.38 \times 10^{-23}\ \text{J K}^{-1}\); links microstates to entropy | The fundamental bridge between statistics and thermodynamics |
| \(\Delta S_\text{trans} = \Delta H_\text{trans}/T\) | Entropy change when phases are at equilibrium during a transition | Gives the entropy cost/benefit of melting and boiling |

## How It Works / Step-by-Step Process

1. Write the balanced reaction; confirm physical states, since \(S^\circ\) differs for gas/liquid/solid.
2. Decide qualitatively first: does gas-mole count rise or fall? Does a phase change occur?
3. Look up \(S^\circ\) for every species (including elements — they are not zero).
4. Apply \(\Delta S^\circ = \sum nS^\circ(\text{products}) - \sum nS^\circ(\text{reactants})\), keeping J mol⁻¹ K⁻¹.
5. Check the sign against your qualitative prediction; investigate discrepancies.
6. For phase transitions, use \(\Delta S = \Delta H/T\) with \(T\) in kelvin and energy converted to joules.

## Example 1: Thermal Decomposition of Limestone

\(\text{CaCO}_3(s) \rightarrow \text{CaO}(s) + \text{CO}_2(g)\). Tabulated \(S^\circ\): CaCO₃ 92.9, CaO 39.8, CO₂ 213.8 J mol⁻¹ K⁻¹.

\[
\Delta S^\circ = [S^\circ(\text{CaO}) + S^\circ(\text{CO}_2)] - [S^\circ(\text{CaCO}_3)]
\]

\[
\Delta S^\circ = (39.8 + 213.8) - (92.9)\ \text{J mol}^{-1}\text{K}^{-1} = 253.6 - 92.9 = +160.7\ \text{J mol}^{-1}\text{K}^{-1}
\]

The positive sign matches the qualitative prediction: one mole of solid becomes one mole of solid plus one mole of gas, so dispersal increases. Note the units: subtracting J mol⁻¹ K⁻¹ values gives J mol⁻¹ K⁻¹ — no unit juggling needed because every term is an entropy.

## Example 2: Ammonia Synthesis — Entropy Decreases

\(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\). With \(S^\circ(\text{N}_2) = 191.6\), \(S^\circ(\text{H}_2) = 130.7\), \(S^\circ(\text{NH}_3) = 192.8\ \text{J mol}^{-1}\text{K}^{-1}\):

\[
\Delta S^\circ = 2(192.8) - [191.6 + 3(130.7)]\ \text{J mol}^{-1}\text{K}^{-1}
\]

\[
\Delta S^\circ = 385.6 - 583.7 = -198.1\ \text{J mol}^{-1}\text{K}^{-1}
\]

Four moles of gas become two, so entropy drops — the system becomes more ordered. This is exactly why the Haber process needs low temperatures thermodynamically (see Spontaneity), even though kinetics forces high ones.

## Example 3: Entropy of Vaporizing Water

At its normal boiling point, 373.15 K, water's enthalpy of vaporization is \(\Delta H_\text{vap} = 40.7\ \text{kJ mol}^{-1}\). The entropy change is

\[
\Delta S_\text{vap} = \frac{\Delta H_\text{vap}}{T_\text{b}} = \frac{40.7\ \text{kJ mol}^{-1}}{373.15\ \text{K}}
\]

Convert to joules so the result is in J mol⁻¹ K⁻¹:

\[
\Delta S_\text{vap} = \frac{40,700\ \text{J mol}^{-1}}{373.15\ \text{K}} = 109\ \text{J mol}^{-1}\text{K}^{-1}
\]

Dimensional analysis: J mol⁻¹ ÷ K = J mol⁻¹ K⁻¹. The measured value is about 109 J mol⁻¹ K⁻¹, confirming that a mole of water gains roughly 109 J of entropy per kelvin when it boils — a large gain that drives steam formation despite the energy cost.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "Entropy is just messiness or disorder." | The precise meaning is dispersal of energy among microstates; "disorder" is a rough proxy that fails for some systems (e.g., ordered ice has low entropy because few energy arrangements exist). |
| "Entropy always increases for a reaction's system." | Only the *universe's* entropy must increase for a spontaneous process. A reaction's system can have \(\Delta S < 0\) (ammonia synthesis) if the surroundings gain entropy. |
| "Elements have \(S^\circ = 0\) like \(\Delta H^\circ_\text{f}\)." | No: entropies are absolute. \(S^\circ(\text{O}_2) = 205.2\ \text{J mol}^{-1}\text{K}^{-1}\) at 25 °C. Zero entropy occurs only at absolute zero (third law, next topic). |
| "Dissolving a solid always decreases entropy." | Usually it *increases* it: the solid's ordered lattice breaks into freely moving ions — that is why many endothermic dissolutions are spontaneous. |
| "\(\Delta S^\circ\) changes with temperature the way \(\Delta G\) does." | \(\Delta S^\circ\) is tabulated at the reference temperature; the \(T\) dependence lives in the \(-T\Delta S\) term of \(\Delta G\). |
| "More gas moles always means the reaction is spontaneous." | Entropy is only half the story; \(\Delta H\) still matters through \(\Delta G = \Delta H - T\Delta S\). |

## Quick Review

1. State the two phase rules and the gas-mole rule for predicting the sign of \(\Delta S\).
2. Why are standard molar entropies of elements nonzero, unlike standard enthalpies of formation?
3. Compute \(\Delta S^\circ\) for \(\text{2H}_2(g) + \text{O}_2(g) \rightarrow \text{2H}_2\text{O}(l)\) given \(S^\circ(\text{H}_2) = 130.7\), \(S^\circ(\text{O}_2) = 205.2\), \(S^\circ(\text{H}_2\text{O}, l) = 69.9\ \text{J mol}^{-1}\text{K}^{-1}\).
4. Ice melts with \(\Delta H_\text{fus} = 6.01\ \text{kJ mol}^{-1}\) at 273.15 K. What is \(\Delta S_\text{fus}\)?
5. A reaction's system has \(\Delta S < 0\) yet is spontaneous. How is that possible?
6. Does boiling water or freezing water have the larger entropy change per mole, and why?

<details>
<summary>Show answers</summary>

1. Gas ≫ liquid > solid; melting/vaporization increase entropy; reactions that produce more gas moles have \(\Delta S > 0\), and consuming gas gives \(\Delta S < 0\).
2. Because entropy is an absolute property of the state (microstate count), with no formation reference; a perfect crystal at 0 K would be the only zero-entropy case.
3. \(\Delta S^\circ = 2(69.9) - [2(130.7) + 205.2] = 139.8 - 466.6 = -326.8\ \text{J mol}^{-1}\text{K}^{-1}\) — three moles of gas become liquid, so entropy falls.
4. \(\Delta S_\text{fus} = 6010\ \text{J mol}^{-1} / 273.15\ \text{K} = 22.0\ \text{J mol}^{-1}\text{K}^{-1}\).
5. The surroundings' entropy gain (from heat released) must outweigh the system's loss, so the universe's entropy still increases — the second law is satisfied.
6. Vaporization: about 109 J mol⁻¹ K⁻¹ vs about 22 J mol⁻¹ K⁻¹ for melting, because gas has vastly more microstates than liquid, which has only somewhat more than solid.

</details>

## Related Topics

- Previous: [Spontaneity](01-spontaneity.md)
- Next: [The Second and Third Laws of Thermodynamics](03-the-second-and-third-laws-of-thermodynamics.md)
- Related: [Free Energy](04-free-energy.md)
- Related: [Thermodynamics chapter overview](../README.md)
- Related: [Phase Transitions in Chapter 10: Liquids and Solids](../../chapter-10-liquids-and-solids/03-phase-transitions.md)
- Related: [Energy Basics in Chapter 5: Thermochemistry](../../chapter-05-thermochemistry/01-energy-basics.md)
- Related: [The Dissolution Process in Chapter 11: Solutions and Colloids](../../chapter-11-solutions-and-colloids/01-the-dissolution-process.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Standard molar entropies are reference values at 25 °C (CaCO₃ 92.9, CaO 39.8, CO₂ 213.8, N₂ 191.6, H₂ 130.7, NH₃ 192.8, O₂ 205.2, H₂O(l) 69.9 J mol⁻¹ K⁻¹); \(\Delta H_\text{vap}(\text{H}_2\text{O}) = 40.7\ \text{kJ mol}^{-1}\) at 373.15 K. Small variations exist among reference tables.
- Last updated: 2026-08-15
