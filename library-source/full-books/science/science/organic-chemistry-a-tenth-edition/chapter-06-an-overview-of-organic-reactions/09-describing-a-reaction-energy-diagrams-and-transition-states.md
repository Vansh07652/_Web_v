---
title: "Describing a Reaction: Energy Diagrams and Transition States"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "6: An Overview of Organic Reactions"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "describing-a-reaction-energy-diagrams-and-transition-states"
  - "science"
status: "complete"
---

# Describing a Reaction: Energy Diagrams and Transition States

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 6: An Overview of Organic Reactions](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

A **reaction coordinate diagram** (energy diagram) plots potential energy against reaction progress, from reactants on the left to products on the right. It packs two pieces of information into one picture: how *favorable* a reaction is (thermodynamics, from the relative heights of the reactant and product lines) and how *fast* it runs (kinetics, from the barrier height).

The highest point on the lowest-energy path is the **transition state** — a fleeting, high-energy arrangement of atoms in which bonds are partially broken and partially formed. The energy needed to climb from reactants to that summit is the **activation energy**. Chemists use these diagrams to compare mechanisms, find the slowest step of a multistep reaction, and see why a catalyst works.

## Why This Matters

Energy diagrams are the single most useful tool for judging whether a proposed mechanism is reasonable. A reaction can be thermodynamically favorable yet hopelessly slow: diamond converting to graphite releases energy, but the activation energy is so large that the conversion takes geologic time. Conversely, a reaction can be fast yet uphill overall, which is why cells couple unfavorable steps to energy-releasing ones. Every reaction in this book — additions, eliminations, substitutions, rearrangements — can be sketched as a diagram explaining why conditions change the outcome.

## Core Concepts

### Reading the axes and the landscape

The horizontal axis is the **reaction coordinate**: progress tracking the geometry of the atoms (bond lengths, bond angles) as reactants become products. The vertical axis is **potential energy**. A single-step reaction shows one smooth hill between reactants and products; a multistep reaction shows a series of hills and valleys, each hilltop a transition state, each valley floor an intermediate.

### The transition state: a summit, not a species

At the transition state, bonds that must break are stretched and nearly broken, bonds that must form are partially made, and the electrons are "in between." Two defining properties follow:

- A transition state has **no finite lifetime** — it exists only at the instant of maximum energy, about one bond vibration (\(10^{-13}\ \text{s}\)). It cannot be isolated, trapped, or observed directly.
- It is a **maximum** along the reaction coordinate but a minimum in every other direction — a saddle point, hence the double dagger in \(\Delta G^{\ddagger}\).

### Activation energy and rate

The rate depends exponentially on the activation energy (Arrhenius equation):

\[
k = A e^{-E_a / RT}
\]

where \(k\) is the rate constant, \(A\) the frequency factor, \(E_a\) the activation energy in joules per mole, \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\) the gas constant, and \(T\) the temperature in kelvin. Because the relationship is exponential, small changes in \(E_a\) produce enormous rate changes. A catalyst provides a pathway with a *lower* activation energy; it does not change the overall thermodynamics.

### Thermodynamics on the same diagram

The energy difference between products and reactants, \(\Delta G^\circ = G_{\text{products}} - G_{\text{reactants}}\), tells the direction of spontaneity: \(\Delta G^\circ < 0\) is **exergonic** (spontaneous), \(\Delta G^\circ > 0\) is **endergonic** (requires an input of energy). Free energy combines enthalpy and entropy:

\[
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ
\]

Enthalpy changes are estimated from bond dissociation energies (previous topic): \(\Delta H^\circ = \sum \text{BDE}_{\text{broken}} - \sum \text{BDE}_{\text{formed}}\). A reaction can be exergonic yet slow (big barrier) or endergonic yet fast (small barrier, driven by coupling). Kinetic and thermodynamic control are different ideas — the diagram separates them.

### Multistep reactions and the rate-determining step

Each elementary step contributes one hill. The step with the highest activation energy is the **rate-determining step**: the slowest climb sets the overall pace. Intermediates (valley floors) are real, short-lived species formed in one step and consumed in the next — the subject of the next topic.

## ELI-10: Explain Like I'm 10

> Imagine a hiker in one valley who wants to reach the next. The mountain pass she must cross is the "activation energy" — the higher the pass, the longer the hike. How far *down* the second valley sits is how much energy the trip releases. A catalyst is a guide who finds a lower pass: the hike gets faster, but the valleys don't move.

## High-Yield Points

- A reaction coordinate diagram plots **potential energy vs. reaction progress**; reactants left, products right.
- The **transition state** is the highest-energy geometry on the path: partial bonds, no lifetime, cannot be isolated, denoted \(\ddagger\).
- **Activation energy** (\(\Delta G^{\ddagger}\) or \(E_a\)) controls the *rate*; rate depends exponentially on it.
- **\(\Delta G^\circ\)** (product vs. reactant energy) controls *spontaneity* — separate from rate.
- Exergonic = \(\Delta G^\circ < 0\); endergonic = \(\Delta G^\circ > 0\); exothermic = \(\Delta H^\circ < 0\).
- **Catalysts lower the activation energy and speed the reaction; they never change \(\Delta G^\circ\).**
- In multistep reactions the **rate-determining step** has the highest barrier; intermediates sit in valleys.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| reaction coordinate | Axis tracking structural progress from reactants to products | Defines what "progress" means on the diagram |
| transition state | Highest-energy geometry along the path; bonds partially broken/formed | Its energy sets the activation barrier and hence the rate |
| activation energy (\(E_a\), \(\Delta G^{\ddagger}\)) | Energy needed to reach the transition state | Sets the rate; lowered by catalysts |
| exergonic / endergonic | \(\Delta G^\circ < 0\) / \(> 0\) — releases / requires free energy | Tells whether a reaction is thermodynamically spontaneous |
| exothermic / endothermic | \(\Delta H^\circ < 0\) / \(> 0\) — releases / absorbs heat | Enthalpy change from bond energies |
| rate-determining step | Elementary step with the highest activation energy | Sets the overall rate in multistep mechanisms |
| intermediate | Species at a valley floor between two transition states | Real but short-lived; formed then consumed |

## Worked Examples

### Example 1: Estimating \(\Delta H^\circ\) for HBr addition to ethylene

Reaction: \(\text{CH}_2\text{=CH}_2 + \text{HBr} \rightarrow \text{CH}_3\text{CH}_2\text{Br}\).

Step 1 — write the general relationship (formula first):

\[
\Delta H^\circ = \sum \text{BDE}_{\text{broken}} - \sum \text{BDE}_{\text{formed}}
\]

Step 2 — identify bonds broken and formed. Broken: the \(\pi\) bond of the C=C (the C–C \(\sigma\) bond survives into the product, so only the \(\pi\) part, \(614 - 348 = 266\ \text{kJ/mol}\), is lost) and the H–Br bond. Formed: one C–H and one C–Br bond.

Step 3 — substitute typical bond dissociation energies (kJ/mol): \(\text{C=C} = 614\), \(\text{H–Br} = 368\), \(\text{C–H} = 413\), \(\text{C–Br} = 285\):

\[
\Delta H^\circ = (266 + 368) - (413 + 285) = 634 - 698 = -64\ \text{kJ/mol}
\]

The reaction is **exothermic** by about \(64\ \text{kJ/mol}\) (\(\approx 15\ \text{kcal/mol}\) using \(4.184\ \text{kJ/kcal}\)). The negative sign is the takeaway: adding HBr to an alkene releases energy, so the product valley sits below the reactant valley.

### Example 2: How much does a 30 kJ/mol difference in \(E_a\) matter at 298 K?

Two competing reactions have activation energies of \(50\) and \(80\ \text{kJ/mol}\) at \(T = 298\ \text{K}\). With equal frequency factors \(A\), the rate-constant ratio follows from the Arrhenius equation:

\[
\frac{k_1}{k_2} = e^{(E_{a,2} - E_{a,1}) / RT}
\]

Substitute values, converting kJ to J where needed (\(1\ \text{kJ} = 10^3\ \text{J}\)):

\[
RT = (8.314\ \text{J mol}^{-1}\text{K}^{-1})(298\ \text{K}) = 2478\ \text{J mol}^{-1} = 2.48\ \text{kJ mol}^{-1}
\]

\[
k_1/k_2 = e^{(80 - 50)/2.48} = e^{12.1} \approx 1.8 \times 10^5
\]

The lower-barrier reaction runs roughly **180,000 times faster** at room temperature — which is why a modest change in activation energy can completely change which product forms.

### Example 3: Labeling a two-step diagram

For the mechanism \(\text{A} \rightarrow \text{B} \rightarrow \text{P}\), sketch the landscape in words: one valley floor between two hilltops. Species B sits at the valley floor (an intermediate); the two hilltops are transition states \(\ddagger_1\) and \(\ddagger_2\). If the second hill is taller, step 2 is the rate-determining step, and the overall rate is governed by the slow conversion of B to P, not the fast formation of B.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Transition state | Intermediate | A transition state is an energy **maximum** with no lifetime; an intermediate is a **minimum** that lives long enough to be a real (if short-lived) species |
| Activation energy | \(\Delta G^\circ\) of the reaction | \(E_a\) is the barrier to the transition state (kinetics); \(\Delta G^\circ\) is the net energy difference products vs. reactants (thermodynamics) |
| Exothermic | Exergonic | Exothermic = \(\Delta H^\circ < 0\) (heat); exergonic = \(\Delta G^\circ < 0\) (free energy, includes entropy) |
| "Spontaneous means fast" | Spontaneity is a thermodynamic statement | Many spontaneous reactions are slow (diamond → graphite); rate depends on the barrier, not on \(\Delta G^\circ\) |
| Catalyst changes the reaction | Catalyst changes the path | A catalyst lowers \(E_a\) via an alternate pathway; it cannot make an endergonic reaction spontaneous |

## Quick Review

1. What does a reaction coordinate diagram plot, and what do the axes represent?
2. Why can a transition state never be isolated, and how does that differ from an intermediate?
3. A reaction is highly exergonic but does not proceed at room temperature. Explain why using an energy diagram.
4. How does a catalyst speed a reaction, and what does it leave unchanged?
5. How do you identify the rate-determining step of a three-step mechanism?

<details>
<summary>Show answers</summary>

1. Potential energy (vertical axis) vs. reaction progress/geometry (horizontal axis); reactants on the left, products on the right.
2. A transition state is an energy maximum along the reaction coordinate with only a fleeting existence (about one bond vibration, \(10^{-13}\ \text{s}\)); it cannot be trapped. An intermediate is a valley-floor species with a finite lifetime that forms in one step and is consumed in the next.
3. Exergonic means \(\Delta G^\circ < 0\), which guarantees only that the product is thermodynamically favored. If the activation energy is large, the reaction is kinetically forbidden at that temperature — reactants sit behind a tall hill even though the product valley is lower.
4. A catalyst provides an alternative pathway with a lower activation energy, raising the rate exponentially. It does not change \(\Delta G^\circ\), the equilibrium constant, or the product/reactant energies.
5. The step whose transition state is highest above the preceding valley (largest activation energy) is rate-determining; the overall reaction cannot proceed faster than that step.

</details>

## Related Topics

- Previous: [Describing a Reaction: Bond Dissociation Energies](08-describing-a-reaction-bond-dissociation-energies.md)
- Next: [Describing a Reaction: Intermediates](10-describing-a-reaction-intermediates.md)
- Related: [Describing a Reaction: Equilibria, Rates, and Energy Changes](07-describing-a-reaction-equilibria-rates-and-energy-changes.md)
- Related: [An Overview of Organic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Bond dissociation energies are standard reference values; BDE tables vary slightly among sources, so estimates are approximate.
- Last updated: 2026-08-16
