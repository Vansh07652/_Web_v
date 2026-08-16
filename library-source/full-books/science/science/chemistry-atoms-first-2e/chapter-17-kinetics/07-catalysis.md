---
title: "Catalysis"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "17: Kinetics"
topic_number: "7"
source: "chemistry-atoms-first-2e.md"
tags:
  - "catalysis"
  - "science"
status: "complete"
---

# Catalysis

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 17: Kinetics](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

A **catalyst** is a substance that increases the rate of a chemical reaction without itself being consumed. It does this by providing an **alternative reaction pathway** with a lower activation energy than the uncatalyzed route. The catalyst participates in the reaction — it forms bonds, is transformed, and is then regenerated — so it appears in the mechanism but cancels out of the overall equation.

Because the rate constant depends exponentially on activation energy through the Arrhenius equation, even a modest reduction in \(E_a\) produces a dramatic speedup. Lowering \(E_a\) from 100 kJ mol\(^{-1}\) to 60 kJ mol\(^{-1}\) at room temperature changes the Boltzmann factor \(e^{-E_a/(RT)}\) by many orders of magnitude. Crucially, a catalyst changes only the *rate* at which equilibrium is reached — it does not shift the equilibrium position, change the enthalpy change \(\Delta H\), or alter the thermodynamic favorability of the reaction.

## Why This Matters

Catalysis is one of the most economically and biologically important ideas in chemistry. Roughly 90% of industrially produced chemicals pass through a catalytic step at some point: the Haber process for ammonia uses an iron catalyst, the Contact process for sulfuric acid uses vanadium(V) oxide, and catalytic converters in car exhaust use platinum, palladium, and rhodium to convert NO, CO, and unburned hydrocarbons into less harmful gases. In biology, essentially every reaction in a living cell is catalyzed by an **enzyme** — a protein catalyst whose failure or inhibition can cause disease. Many medicines work by inhibiting enzymes, which is a direct application of the same rate-law logic used to design industrial catalysts.

## Core Concepts

### Catalysts lower the activation energy

The rate constant follows the Arrhenius equation \(k = A e^{-E_a/(RT)}\). A catalyst lowers \(E_a\) by stabilizing the transition state of the rate-determining step, which raises \(k\) without changing \(A\) substantially. On an energy diagram, the catalyzed pathway is a lower hill between the same reactant and product valleys: the reactant and product energies are unchanged, so \(\Delta H\) and the equilibrium constant \(K\) are unchanged, but the barrier is shorter. The reaction reaches equilibrium faster along the low route.

### Homogeneous catalysis

In **homogeneous catalysis**, the catalyst is in the same phase as the reactants. A familiar example is the decomposition of hydrogen peroxide, \(\text{H}_2\text{O}_2 \to \text{H}_2\text{O} + \frac{1}{2}\text{O}_2\), which is slow on its own but rapid when a small amount of aqueous iodide ion (\(\text{I}^-\)) is added; the iodide is consumed and regenerated in the mechanism and emerges unchanged. Homogeneous catalysts are often easy to study spectroscopically because everything is dissolved, but separating the catalyst from the product mixture can be difficult.

### Heterogeneous catalysis

In **heterogeneous catalysis**, the catalyst is in a different phase — usually a solid — and the reactants are gases or liquids. Reaction occurs at the catalyst's surface: reactants adsorb (stick) onto active sites, bonds weaken, products form, and products desorb, freeing the site for the next cycle. This is how catalytic converters work: exhaust gases adsorb onto platinum-group metal surfaces where NO is reduced to N\(_2\) and CO is oxidized to CO\(_2\). Surface area is critical, which is why industrial catalysts are finely divided metals or porous oxides supported on high-surface-area ceramics.

### Enzymes: nature's catalysts

**Enzymes** are protein catalysts with remarkable specificity. A substrate binds at the enzyme's **active site**, where its conformation is distorted toward the transition state, lowering \(E_a\) by 30–100 kJ mol\(^{-1}\) compared with the uncatalyzed reaction. Enzyme kinetics are often described by the Michaelis–Menten model, in which the enzyme and substrate first form a complex before the catalytic step:

\[
\text{E} + \text{S} \rightleftharpoons \text{ES} \to \text{E} + \text{P}
\]

Enzyme activity is sensitive to temperature and pH; beyond the optimum, the protein denatures and loses function.

### Catalysts do not change equilibrium

Because a catalyst leaves the reactant and product energies untouched, it cannot make an unfavorable reaction favorable, cannot change the equilibrium constant \(K\), and cannot alter \(\Delta H\). If a reaction is thermodynamically impossible, no catalyst will help. The catalyst only shortens the time required to reach the equilibrium state — a distinction that repeatedly shows up on exams.

## ELI-10: Explain Like I'm 10

> A catalyst is like a ski lift that carries skiers up the mountain faster than hiking: it does not change where the top of the mountain is, and it does not get used up — the same lift carries skier after skier. A reaction without a catalyst still reaches the same place; it just takes much longer.

## High-Yield Points

- A catalyst speeds a reaction by lowering the activation energy through an alternative pathway; it is regenerated and not consumed.
- Catalysts change the rate constant but not \(\Delta H\), \(K\), or the equilibrium position.
- Homogeneous catalysts share a phase with reactants; heterogeneous catalysts (usually solids) act at surfaces, so surface area matters.
- Enzymes are highly specific protein catalysts; activity peaks at an optimal temperature and pH, then collapses on denaturation.
- Inhibitors slow or stop catalysts — many drugs are enzyme inhibitors; poisons such as lead disable catalytic converters by coating active sites.
- The Boltzmann factor \(e^{-E_a/(RT)}\) means small \(E_a\) reductions cause enormous rate increases.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Catalyst | A substance that increases reaction rate via a lower-energy pathway and is regenerated unchanged. | The central tool for controlling reaction speed in industry and biology. |
| Activation energy \(E_a\) | The energy barrier a collision must overcome for reaction. | Lowering \(E_a\) is exactly what a catalyst does. |
| Homogeneous catalysis | Catalysis where the catalyst and reactants are in the same phase. | Common in solution chemistry; easy to study, harder to separate from products. |
| Heterogeneous catalysis | Catalysis where the catalyst is in a different phase (typically a solid) from the reactants. | Used in catalytic converters and most industrial processes; depends on surface area and active sites. |
| Active site | The region of an enzyme (or solid surface) where the substrate binds and reacts. | Determines enzyme specificity and is the target of many drugs. |
| Enzyme | A protein catalyst that greatly accelerates a specific biochemical reaction. | Runs essentially all of cellular metabolism. |

## How It Works / Step-by-Step Process

1. Identify the uncatalyzed pathway and its activation energy \(E_a\) from an energy diagram or rate data.
2. Propose (or know) the catalyzed mechanism, in which the catalyst participates in one step and is regenerated in another.
3. Compare the activation energies: the catalyzed route must have the lower \(E_a\) for the rate-determining step.
4. Use the Arrhenius equation to estimate the rate enhancement, keeping \(E_a\) in joules to match \(R\).
5. Verify the catalyst is truly unchanged overall — it should cancel out of the net equation — and that equilibrium quantities (\(\Delta H\), \(K\)) are untouched.

## Worked Examples

### Worked example 1: how much faster is the catalyzed pathway?

An uncatalyzed reaction has \(E_a = 80\ \text{kJ mol}^{-1}\). A catalyst provides a pathway with \(E_a = 50\ \text{kJ mol}^{-1}\). Assuming the frequency factor \(A\) is unchanged, how many times faster is the catalyzed reaction at 300 K?

Write the Arrhenius ratio for the two pathways before substituting:

\[
\frac{k_{\text{cat}}}{k_{\text{uncat}}} = \frac{A e^{-E_{a,\text{cat}}/(RT)}}{A e^{-E_{a,\text{uncat}}/(RT)}} = e^{(E_{a,\text{uncat}} - E_{a,\text{cat}})/(RT)}
\]

Convert both energies to joules and substitute \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\) and \(T = 300\ \text{K}\):

\[
\frac{k_{\text{cat}}}{k_{\text{uncat}}} = e^{(80000 - 50000)/(8.314 \times 300)} = e^{30000/2494} = e^{12.03}
\]

\[
\frac{k_{\text{cat}}}{k_{\text{uncat}}} \approx 1.7 \times 10^5
\]

The catalyzed reaction is roughly 170,000 times faster at 300 K. Dimensional analysis confirms the exponent is unitless: joules per mole divided by joules per mole per kelvin times kelvin leaves a pure number.

### Worked example 2: how much energy does an enzyme save?

An enzyme lowers the activation energy of a biochemical reaction from \(E_a = 75\ \text{kJ mol}^{-1}\) (uncatalyzed) to \(E_a = 45\ \text{kJ mol}^{-1}\) (enzymatic) at body temperature, \(T = 310\ \text{K}\). Compare the rate constants.

Write the ratio expression first:

\[
\frac{k_{\text{enz}}}{k_{\text{uncat}}} = e^{(E_{a,\text{uncat}} - E_{a,\text{enz}})/(RT)}
\]

Substitute with energies in joules:

\[
\frac{k_{\text{enz}}}{k_{\text{uncat}}} = e^{(75000 - 45000)/(8.314 \times 310)} = e^{30000/2577} = e^{11.64}
\]

\[
\frac{k_{\text{enz}}}{k_{\text{uncat}}} \approx 1.1 \times 10^5
\]

A 30 kJ mol\(^{-1}\) reduction in \(E_a\) makes the reaction about 110,000 times faster — the difference between a reaction that takes years and one that takes seconds. This enormous leverage is why enzymes can sustain life's chemistry at moderate temperatures, and why a small change in \(E_a\) (for example, by a drug that stabilizes the transition state) can have dramatic biological effects.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| A catalyst | A reactant | A reactant is consumed; a catalyst is regenerated and appears on both sides of the mechanism's steps, canceling overall. |
| A catalyst changing the rate | A catalyst changing the equilibrium | The catalyst lowers \(E_a\) and speeds approach to equilibrium, but \(K\), \(\Delta H\), and \(\Delta G\) are unchanged. |
| Catalyst | Intermediate | An intermediate is produced and then consumed within the reaction; a catalyst is added from outside, participates, and is regenerated. |
| Homogeneous catalysis | Heterogeneous catalysis | Homogeneous: same phase as reactants; heterogeneous: different phase (usually solid surface), so surface area and active sites govern activity. |
| Inhibitor | Catalyst | An inhibitor slows a catalyzed reaction (often by blocking active sites); a catalyst speeds it. Many drugs and poisons are inhibitors. |

## Quick Review

1. What single quantity does a catalyst change in the Arrhenius equation, and what does it leave unchanged?
2. Why can a catalyst never make a thermodynamically unfavorable reaction occur?
3. A heterogeneous catalyst is a solid. Why does surface area matter so much for its activity?
4. How does an enzyme's activity change if the temperature rises far above the optimum?
5. In the catalyzed decomposition of hydrogen peroxide with iodide ion, why does the iodide not appear in the overall equation?

<details>
<summary>Show answers</summary>

1. It lowers the activation energy \(E_a\) of the rate-determining step; the frequency factor, \(\Delta H\), \(K\), and the equilibrium position are unchanged.
2. A catalyst cannot alter the energy difference between reactants and products, so it cannot change \(\Delta G\) or \(K\); an unfavorable reaction remains unfavorable — it just reaches equilibrium faster if a catalyst exists.
3. Reaction occurs at active sites on the surface; more surface area means more sites where reactants can adsorb and react per unit mass.
4. Above the optimum temperature, the protein denatures — its structure unfolds — and catalytic activity drops sharply or ceases.
5. The iodide participates in the mechanism but is regenerated in a later step, so it cancels out of the net reaction: a catalyst is not consumed.

</details>

## Related Topics

- Previous: [Reaction Mechanisms](06-reaction-mechanisms.md)
- Next: End of chapter
- Related: [Collision Theory](05-collision-theory.md) · [Factors Affecting Reaction Rates](02-factors-affecting-reaction-rates.md) · [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
