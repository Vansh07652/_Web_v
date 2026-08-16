---
title: "Describing a Reaction: Equilibria, Rates, and Energy Changes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "6: An Overview of Organic Reactions"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "describing-a-reaction-equilibria-rates-and-energy-changes"
  - "science"
status: "complete"
---

# Describing a Reaction: Equilibria, Rates, and Energy Changes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 6: An Overview of Organic Reactions](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

A chemical reaction can be described by three distinct questions: **Does it happen?** (equilibrium), **How fast?** (kinetics), and **Does it release or absorb energy?** (energy changes). Confusing them is one of the most common errors in organic chemistry. The equilibrium constant \(K_\text{eq}\) measures the product/reactant ratio at equilibrium and connects to the free-energy change through \(\Delta G^\circ = -RT\ln K_\text{eq}\). The rate depends on the activation energy \(E_\text{a}\) and on concentrations, not on thermodynamic favorability. And \(\Delta H^\circ\), related to the free energy by \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\), tells whether a reaction is exothermic or endothermic. A reaction can be thermodynamically favorable yet extremely slow — understanding why is essential for predicting whether it will occur on a useful timescale.

## Why This Matters

Every practical decision in chemistry — which reaction to run, at what temperature, and whether a product can be isolated — comes down to these three descriptors. A drug may be thermodynamically able to react with water yet kinetically stable enough to survive in the body for hours; that kinetic stability is what makes many pharmaceuticals work. Industrial synthesis balances thermodynamics (does equilibrium lie far enough toward product?) against kinetics (is it fast enough to be economical?) — which is why catalysts exist: they lower activation energy without changing equilibrium. Enzymes accelerate biological reactions by lowering \(E_\text{a}\), while the equilibrium position of a metabolic step sets the direction of a pathway. On exams, the "favorable vs. fast" distinction is a favorite trap.

## Core Concepts

### Equilibrium constants and the direction of a reaction

For a reaction \(A + B \rightleftharpoons C + D\), the equilibrium constant is

\[
K_\text{eq} = \frac{[C][D]}{[A][B]}
\]

where the brackets mean molar concentrations at equilibrium. If \(K_\text{eq} > 1\), products dominate; if \(K_\text{eq} < 1\), reactants dominate. The equilibrium constant is a ratio of concentrations — never a rate, and it says nothing about how long the reaction takes.

### Free energy and equilibrium

The connection between equilibrium and energy is

\[
\Delta G^\circ = -RT\ln K_\text{eq}
\]

where \(\Delta G^\circ\) is the standard Gibbs free-energy change, \(R\) is the gas constant (8.314 J mol⁻¹ K⁻¹), \(T\) is the Kelvin temperature, and \(\ln\) is the natural logarithm. A large \(K_\text{eq}\) gives negative \(\Delta G^\circ\) (favorable); a small \(K_\text{eq}\) gives positive \(\Delta G^\circ\) (unfavorable). The free energy is composed of enthalpy and entropy:

\[
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ
\]

An exothermic reaction (\(\Delta H^\circ < 0\)) and one that increases disorder (\(\Delta S^\circ > 0\)) both push \(\Delta G^\circ\) negative; a reaction can be favorable through either term or both.

### Rates: how fast a reaction proceeds

The rate of a reaction tells how quickly reactants convert to products. For a simple reaction \(A \rightarrow B\), the rate law is often \(\text{rate} = k[A]\), where \(k\) is the **rate constant**. The rate constant depends on temperature and the **activation energy** \(E_\text{a}\), the barrier reactants must climb; higher temperature and lower \(E_\text{a}\) both make \(k\) larger. Importantly, \(k\) and the rate law are set by the mechanism — the pathway — while \(\Delta G^\circ\) and \(K_\text{eq}\) depend only on the starting and ending states. That is why a reaction can have a favorable equilibrium yet a high barrier: thermodynamics describes the destination, kinetics describes the journey.

### Exothermic vs. endothermic

A reaction that releases heat is **exothermic** (\(\Delta H^\circ < 0\)); one that absorbs heat is **endothermic** (\(\Delta H^\circ > 0\)). You can estimate \(\Delta H^\circ\) from bond dissociation energies — add bonds broken, subtract bonds formed (the next topic develops this fully). Being exothermic does not make a reaction fast — burning paper is highly exothermic but needs a spark to start. Nor is an exothermic reaction automatically spontaneous if entropy opposes it; the full story is always in \(\Delta G^\circ\).

### Putting the three descriptors together

A complete description answers three questions: where does it end (equilibrium, \(K_\text{eq}\), \(\Delta G^\circ\))? how fast does it get there (rate, \(k\), \(E_\text{a}\))? what is the heat of the journey (\(\Delta H^\circ\), with \(\Delta S^\circ\) filling out \(\Delta G^\circ\))? Two reactions can share thermodynamics yet differ wildly in rate, or vice versa. Keeping the three questions separate — and knowing which equation answers which — is the core skill.

## ELI-10: Explain Like I'm 10

> Think of a reaction like sledding down a hill into a valley. Equilibrium asks: is the valley lower than the start, and how many kids end up at the bottom versus the top? Rate asks: is there a fence in between that slows the sled, even though the valley is lower? Energy asks: does the ride give off warmth or need it? A hill can be lower at the bottom yet have a huge fence at the top — a favorable but slow reaction.

## High-Yield Points

- \(K_\text{eq} = \dfrac{[C][D]}{[A][B]}\): products over reactants at equilibrium; \(K_\text{eq} > 1\) favors products.
- \(\Delta G^\circ = -RT\ln K_\text{eq}\) with \(R = 8.314\) J mol⁻¹ K⁻¹; negative \(\Delta G^\circ\) ⟺ \(K_\text{eq} > 1\).
- \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\): enthalpy, entropy, and temperature set spontaneity.
- Rate is controlled by \(E_\text{a}\) and temperature, not by \(\Delta G^\circ\) — favorable ≠ fast.
- Exothermic: \(\Delta H^\circ < 0\); endothermic: \(\Delta H^\circ > 0\).
- Catalysts lower \(E_\text{a}\) and speed reactions without changing \(K_\text{eq}\) or \(\Delta G^\circ\).
- Equilibrium describes the endpoint; kinetics the path; energy the heat. Never swap the three questions.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| equilibrium constant \(K_\text{eq}\) | Ratio of product concentrations to reactant concentrations at equilibrium. | Tells which side of a reaction dominates. |
| Gibbs free energy \(\Delta G^\circ\) | Energy available to do work under standard conditions; sign predicts spontaneity. | Negative \(\Delta G^\circ\) means products are favored. |
| enthalpy change \(\Delta H^\circ\) | Heat absorbed or released at constant pressure. | Negative = exothermic; positive = endothermic. |
| entropy change \(\Delta S^\circ\) | Change in disorder or randomness. | Positive entropy favors reactions; combined with \(\Delta H^\circ\) via \(T\Delta S^\circ\). |
| rate constant \(k\) | A temperature-dependent proportionality constant in the rate law. | Measures how fast a reaction proceeds. |
| activation energy \(E_\text{a}\) | The energy barrier between reactants and products. | Controls reaction speed; lowered by catalysts. |

## How It Works / Step-by-Step Process

1. Ask the thermodynamic question: write \(K_\text{eq}\) from the balanced reaction, decide which side dominates, and compute \(\Delta G^\circ = -RT\ln K_\text{eq}\) if a value is available.
2. Ask the energy question: identify bonds broken and formed to estimate \(\Delta H^\circ\), and note whether entropy (\(\Delta S^\circ\)) helps or opposes; combine them in \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\).
3. Ask the kinetic question: check the mechanism, activation energy, and temperature; higher \(T\) and lower \(E_\text{a}\) mean faster.
4. Synthesize: a reaction is "favorable" if \(\Delta G^\circ < 0\) and "fast" only if \(E_\text{a}\) is low enough — report both separately.

## Worked Examples

### Example 1: Converting an equilibrium constant to a free-energy change

A reaction at 298 K has \(K_\text{eq} = 1.0 \times 10^4\). What is \(\Delta G^\circ\)?

Start with the formula before substituting numbers:

\[
\Delta G^\circ = -RT\ln K_\text{eq}
\]

Substitute \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\), \(T = 298\ \text{K}\), \(K_\text{eq} = 1.0 \times 10^4\):

\[
\Delta G^\circ = -(8.314)(298)\ln(1.0 \times 10^4)
\]

Compute \(\ln(1.0 \times 10^4) = 9.21\):

\[
\Delta G^\circ = -(8.314)(298)(9.21) = -2.28 \times 10^4\ \text{J mol}^{-1} = -22.8\ \text{kJ mol}^{-1}
\]

Dimensional analysis: (J mol⁻¹ K⁻¹)(K) = J mol⁻¹, then 1000 J = 1 kJ. The negative sign matches \(K_\text{eq} > 1\): products favored.

### Example 2: A reactant-favored equilibrium

At 298 K, a reaction has \(K_\text{eq} = 2.5 \times 10^{-3}\). Is the reaction favorable?

Use the same formula:

\[
\Delta G^\circ = -RT\ln K_\text{eq} = -(8.314)(298)\ln(2.5 \times 10^{-3})
\]

\(\ln(2.5 \times 10^{-3}) = -5.99\):

\[
\Delta G^\circ = -(8.314)(298)(-5.99) = +1.48 \times 10^4\ \text{J mol}^{-1} = +14.8\ \text{kJ mol}^{-1}
\]

A positive \(\Delta G^\circ\) means reactants are favored — the reaction needs an external push (removing product, coupling to another reaction) to proceed. Units check: J mol⁻¹ K⁻¹ × K = J mol⁻¹, converted to kJ mol⁻¹.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "Favorable" (thermodynamics) | "Fast" (kinetics) | \(\Delta G^\circ < 0\) says products are favored at equilibrium; \(E_\text{a}\) says how fast. Favorable reactions can be essentially instantaneous or take millennia. |
| \(K_\text{eq}\) | Rate constant \(k\) | \(K_\text{eq}\) is a ratio of equilibrium concentrations (no time); \(k\) sets the speed (time-dependent). |
| Exothermic | Spontaneous | Exothermic (\(\Delta H^\circ < 0\)) is only part of \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\); a strongly unfavorable entropy term can make an exothermic reaction nonspontaneous. |
| \(\ln K\) | \(\log_{10} K\) | The equation \(\Delta G^\circ = -RT\ln K\) uses the natural logarithm; using base 10 changes the answer by a factor of \(\ln 10 \approx 2.303\). |
| Catalysts change the equilibrium | Catalysts change only the rate | Catalysts lower \(E_\text{a}\); they do not change \(K_\text{eq}\), \(\Delta G^\circ\), or the equilibrium position. |

## Quick Review

1. Write the equation connecting \(\Delta G^\circ\) to \(K_\text{eq}\), and state the sign of \(\Delta G^\circ\) when \(K_\text{eq} > 1\).
2. A reaction has \(K_\text{eq} = 1.0 \times 10^{-5}\) at 298 K. Roughly, is \(\Delta G^\circ\) positive or negative, and what does that mean?
3. What is the difference between the equilibrium constant and the rate constant?
4. A reaction is exothermic but extremely slow at room temperature. Explain this in terms of \(\Delta H^\circ\), \(\Delta G^\circ\), and \(E_\text{a}\).
5. For \(\Delta H^\circ = -50\ \text{kJ mol}^{-1}\) and \(\Delta S^\circ = -100\ \text{J mol}^{-1}\text{K}^{-1}\) at 298 K, compute \(\Delta G^\circ\).
6. Does adding a catalyst change \(K_\text{eq}\)? Why or why not?

<details>
<summary>Show answers</summary>

1. \(\Delta G^\circ = -RT\ln K_\text{eq}\). When \(K_\text{eq} > 1\), \(\ln K_\text{eq} > 0\), so \(\Delta G^\circ < 0\) — the reaction favors products.
2. Positive. \(K_\text{eq} < 1\) means \(\ln K_\text{eq} < 0\), so \(\Delta G^\circ > 0\); reactants dominate at equilibrium and the reaction is unfavorable as written.
3. \(K_\text{eq}\) is a unitless ratio of equilibrium concentrations (where the reaction ends); \(k\) is a rate constant with units such as s⁻¹ (how fast). They are unrelated.
4. Exothermic (\(\Delta H^\circ < 0\)) tends to make \(\Delta G^\circ\) negative, but the reaction is slow because \(E_\text{a}\) is high — molecules lack the energy to climb the barrier even though the products are lower.
5. \(\Delta S^\circ = -0.100\ \text{kJ mol}^{-1}\text{K}^{-1}\); \(T\Delta S^\circ = (298)(-0.100) = -29.8\ \text{kJ mol}^{-1}\); \(\Delta G^\circ = -50 - (-29.8) = -20.2\ \text{kJ mol}^{-1}\) (favorable at 298 K).
6. No. A catalyst lowers \(E_\text{a}\) and speeds up forward and reverse reactions equally; \(K_\text{eq}\) (the ratio of the two rate constants) and \(\Delta G^\circ\) are unchanged.

</details>

## Related Topics

- Previous: [Radical Reactions](06-radical-reactions.md)
- Next: [Describing a Reaction: Bond Dissociation Energies](08-describing-a-reaction-bond-dissociation-energies.md)
- Related: [An Overview of Organic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
