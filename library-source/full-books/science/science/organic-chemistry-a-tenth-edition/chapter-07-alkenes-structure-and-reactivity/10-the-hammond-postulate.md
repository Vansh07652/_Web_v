---
title: "The Hammond Postulate"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "7: Alkenes: Structure and Reactivity"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "the-hammond-postulate"
  - "science"
status: "complete"
---

# The Hammond Postulate

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 7: Alkenes: Structure and Reactivity](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

Transition states are the highest-energy configurations on a reaction coordinate — the fleeting structures molecules pass through as bonds break and form. They last only about \(10^{-13}\) seconds, too briefly to observe, yet they control activation energies, rates, and product distributions. The **Hammond postulate** lets chemists reason about them anyway: a transition state resembles the species (reactant, product, or intermediate) to which it is closest in energy. Exothermic steps have early, reactant-like transition states; endothermic steps have late, product-like ones. This single idea turns "which species is more stable?" into "which pathway is faster?", and it underlies Markovnikov's rule, radical-halogenation selectivity, and enzyme transition-state analog design.

## Why This Matters

The postulate turns stability data into rate predictions and reappears throughout the course. In this chapter it explains Markovnikov's rule: the cation-forming step is endothermic, so its transition state resembles the carbocation and cation stability transfers directly to the barrier. In Chapter 10 it explains why bromination is far more selective than chlorination — bromine abstraction is endothermic (late transition state magnifies radical-stability differences), while chlorination's early transition state barely feels them. In enzyme chemistry it explains why **transition-state analogs** — stable mimics of a transition state's geometry — are among the most potent enzyme inhibitors known. On exams it is the standard "explain why" tool for selectivity.

## Core Concepts

### The reaction coordinate and transition states

Every elementary step can be drawn on a **reaction coordinate diagram**: energy on the vertical axis, reaction progress (bond breaking/forming) on the horizontal axis. Reactants sit at one energy, products at another; between them is a maximum — the **transition state** (TS or ‡). The activation energy \(E_\text{a}\) is the energy difference between reactants and the transition state. In a multi-step mechanism each step has its own transition state, and intermediates appear as local minima between them; the highest transition state is the rate-determining step.

### The postulate in words and pictures

The Hammond postulate: if a transition state lies close in energy to a reactant or to a product (or intermediate), its structure closely resembles the species to which it is closest in energy.

- **Exothermic step (reactants higher than products):** transition state close in energy to the reactants — **early and reactant-like**; bonds have barely begun to break or form.
- **Endothermic step (products higher than reactants):** transition state close in energy to the products — **late and product-like**; bond breaking/forming is nearly complete.

Intuition: the transition state sits atop an energy hill, and the closer the downhill side, the sooner the top is reached.

### Application 1: Markovnikov selectivity

In electrophilic addition of HX to an alkene, step 1 — protonation to form a carbocation — is **endothermic**, so its transition state is late and resembles the cation. Any factor that stabilizes the cation (extra alkyl groups, resonance) therefore also stabilizes the transition state and lowers \(E_\text{a}\), so the more stable cation forms faster:

\[ \text{stabilize the carbocation} \Rightarrow \text{stabilize the transition state} \Rightarrow \text{lower } E_\text{a} \Rightarrow \text{faster formation} \]

This is exactly Markovnikov's rule.

### Application 2: selectivity in radical halogenation

In radical halogenation of alkanes (Chapter 10), the hydrogen-abstraction step X· + R–H → H–X + R· differs in thermochemistry between the halogens. For chlorine the step is slightly exothermic → early, reactant-like transition state that barely reflects the forming radical's stability → **unselective chlorination**. For bromine the step is endothermic → late, product-like transition state that strongly reflects radical stability → **highly selective bromination**. One postulate, two very different selectivities, both driven by step thermochemistry.

### Application 3: transition-state analogs in drug design

Enzymes work by stabilizing transition states, so a stable molecule that *geometrically mimics* an enzyme's transition state is bound very tightly. Such **transition-state analogs** are among the most powerful enzyme inhibitors known, and the principle guides the design of many drugs (e.g., HIV protease inhibitors). The postulate supplies the conceptual license: transition-state structure matters more than reactant or product structure for binding.

### Limits of the postulate

The Hammond postulate is a qualitative guide, not a quantitative law: it says *which* species the transition state resembles, not *how much*. It applies to elementary steps, not overall reactions; it never yields numerical activation energies; and exceptions arise when solvent or entropy effects dominate the coordinate. Use it to rank barriers and justify selectivities — never to compute them.

## ELI-10: Explain Like I'm 10

Imagine hiking over a hill. If the far side drops straight down (exothermic), the top of the hill looks almost exactly like the side you came from — you can't tell you're at the top until you're already falling. If the far side climbs up even higher (endothermic), the top looks like the far side: you're basically at the high destination already, just one step from the peak.

## High-Yield Points

- Hammond postulate: a transition state resembles the reactant or product (or intermediate) it is closest to in energy.
- Exothermic step → early, reactant-like transition state; endothermic step → late, product-like transition state.
- Cation formation is endothermic → transition state resembles the carbocation → cation stability controls the barrier (Markovnikov).
- Bromination selectivity (endothermic H-abstraction, late TS) >> chlorination selectivity (exothermic, early TS) in radical halogenation.
- Transition-state analogs are powerful enzyme inhibitors because enzymes bind transition states most tightly.
- The postulate is qualitative: it ranks barriers and explains selectivity; it does not compute activation energies.
- Apply it per elementary step, not to the overall reaction.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| transition state | Highest-energy configuration along a reaction coordinate; the point of bond breaking/forming. | Sets the activation energy; controls rates and selectivity. |
| reaction coordinate | Progress of a reaction from reactants to products (bond changes). | The horizontal axis of energy diagrams. |
| activation energy (\(E_\text{a}\)) | Energy difference between reactants and the transition state. | The barrier a reaction must climb; lower \(E_\text{a}\) = faster step. |
| endothermic step | A step whose products are higher in energy than its reactants. | Its transition state is late and product-like. |
| exothermic step | A step whose products are lower in energy than its reactants. | Its transition state is early and reactant-like. |
| rate-determining step | The highest-barrier step in a mechanism. | Controls overall rate and often selectivity. |
| transition-state analog | A stable molecule mimicking the geometry of a transition state. | Basis of potent enzyme inhibitors. |

## Worked Examples

**Example 1 — Early or late? Classify by thermochemistry.** (a) Protonation of an alkene to give a carbocation; (b) CH3· + H–Br → CH4 + Br· (exothermic); (c) Br· + CH4 → HBr + CH3· (endothermic). *Answer:* (a) Endothermic → late, resembles the carbocation. (b) Exothermic → early, reactant-like. (c) Endothermic → late, product-like (resembles the methyl radical). Parts (b) and (c) are the two directions of the same abstraction step: the same transition state looks "early" from one side and "late" from the other.

**Example 2 — Use the postulate to estimate a rate ratio.** A tertiary cation is more stable than a secondary one by roughly 30 kJ/mol (approximate, medium-dependent). Explain why protonation to the tertiary cation is faster, and estimate the rate ratio at 298 K assuming the entire stability difference appears in the transition state. Use the Arrhenius relation between rate ratio and activation-energy difference:

\[ \frac{k_1}{k_2} = e^{-\Delta E_\text{a}/(RT)}, \qquad R = 8.314\ \text{J mol}^{-1}\text{K}^{-1} \]

\[ \frac{k_1}{k_2} = e^{30\,000\ \text{J/mol} / (8.314 \times 298\ \text{K})} = e^{12.1} \approx 1.8 \times 10^5 \]

So the pathway through the more stable cation is predicted to be about five orders of magnitude faster. (The calculation assumes the full stability difference appears in the barrier; in reality part appears in the intermediate, so treat this as an upper-bound illustration, not a measured value.)

**Example 3 — Why is the Cl/Br selectivity difference so large?** Chlorination of 2-methylpropane shows only modest preference for the tertiary position; bromination gives almost exclusively the tertiary bromide. *Answer:* Cl· abstraction of H is exothermic → early, reactant-like transition state that barely reflects radical stability, so all C–H positions react at similar rates. Br· abstraction is endothermic → late, product-like transition state that strongly reflects radical stability, so the most substituted radical is strongly favored. One postulate explains both the low selectivity of chlorination and the high selectivity of bromination.

**Example 4 — Rationalize Markovnikov with an energy diagram in words.** *Answer:* Reactants (propene + HBr) sit low; the carbocation intermediate sits much higher (endothermic step), so the transition state resembles the cation. For the secondary-cation pathway both the intermediate and its transition state are lower than for the primary-cation pathway, so the barrier is lower and that pathway dominates — Markovnikov selectivity follows.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Hammond postulate | transition state theory | The postulate is a *structural* statement (what the TS resembles); TST is the quantitative framework connecting barrier height to rate. |
| Early TS = exothermic | early TS = fast | An early TS follows from exothermicity of that step, not from the overall rate; rate still depends on barrier height. |
| "Resembles the product" | "product is formed first" | The transition state is a fleeting configuration, not a formed product; it merely looks like the product's geometry and charge distribution. |
| Stability of the intermediate | stability of the transition state | They correlate only when the step is endothermic (late TS); for early TS steps, intermediate stability may be irrelevant to the barrier. |
| Hammond applied to overall reaction | Hammond applied per step | The postulate applies to elementary steps; overall reaction thermochemistry is not what determines TS position. |
| Chlorination selectivity | bromination selectivity | Cl: exothermic, early TS, unselective; Br: endothermic, late TS, highly selective — opposite appearances despite the same postulate. |

## Quick Review

1. State the Hammond postulate in one sentence.
2. For an endothermic step, is the transition state early or late? What does it resemble?
3. How does the postulate explain Markovnikov's rule?
4. Why is radical bromination more selective than chlorination?
5. What is a transition-state analog, and why is it a good enzyme inhibitor?
6. Why can the postulate rank barriers but not compute them?

<details>
<summary>Answers</summary>

1. A transition state resembles the species (reactant or product/intermediate) to which it is closest in energy on the reaction coordinate.
2. Late — it resembles the product (or intermediate), because the products lie close in energy to the top of the barrier.
3. The cation-forming protonation step is endothermic, so its transition state resembles the carbocation; stabilizing the cation (more substitution, resonance) also stabilizes the transition state, lowering the barrier for forming the more stable cation — which is exactly the Markovnikov product.
4. Bromine abstraction is endothermic (late, product-like TS), so the barrier reflects radical stability and strongly favors the most stable radical; chlorine abstraction is exothermic (early, reactant-like TS) and barely reflects radical stability, so selectivity is low.
5. A stable molecule that mimics the geometry/charge distribution of the enzyme-catalyzed reaction's transition state; because enzymes bind transition states more tightly than substrates or products, the analog is bound very strongly and blocks catalysis.
6. The postulate gives only the *direction* of structural resemblance (early vs. late), not the energy difference; it predicts relative barrier ordering but provides no quantitative value for \(E_\text{a}\).

</details>

## Related Topics

- [Chapter 7 README](../README.md)
- [8. Orientation of Electrophilic Additions: Markovnikov's Rule](08-orientation-of-electrophilic-additions-markovnikov-s-rule.md)
- [9. Carbocation Structure and Stability](09-carbocation-structure-and-stability.md)
- [6. Stability of Alkenes](06-stability-of-alkenes.md)
- [Chapter 6, Topic 9: Describing a Reaction: Energy Diagrams and Transition States](../chapter-06-an-overview-of-organic-reactions/09-describing-a-reaction-energy-diagrams-and-transition-states.md)
- [Chapter 10, Topic 2: Preparing Alkyl Halides from Alkanes: Radical Halogenation](../chapter-10-organohalides/02-preparing-alkyl-halides-from-alkanes-radical-halogenation.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\); the 30 kJ/mol cation-stability difference in Example 2 is an illustrative approximate value (medium-dependent), explicitly labeled as an upper-bound illustration, not a measured constant.
- Last updated: 2026-08-16
