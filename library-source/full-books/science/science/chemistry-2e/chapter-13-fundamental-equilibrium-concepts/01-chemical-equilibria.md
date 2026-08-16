---
title: "Chemical Equilibria"
subject: "Science"
book: "Chemistry 2e"
chapter: "13: Fundamental Equilibrium Concepts"
topic_number: "1"
source: "chemistry-2e.md"
tags:
  - "chemical-equilibria"
  - "science"
status: "complete"
---

# Chemical Equilibria

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 13: Fundamental Equilibrium Concepts](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Many chemical reactions are reversible: the products can collide and react to re-form the reactants. When such a reaction runs in a **closed system** — one that exchanges energy but not matter with its surroundings — the forward and reverse processes do not stop. Instead, they come to a balance. At **dynamic equilibrium**, the forward and reverse reaction rates are equal, so the concentrations of all reactants and products stop changing even though molecules keep reacting in both directions.

The classic example is dinitrogen tetroxide, a colorless gas, which converts to brown nitrogen dioxide:

\[
\ce{N2O4(g) <=> 2NO2(g)}
\]

Heat a sealed flask and the mixture darkens as more \(\ce{NO2}\) forms; cool it and the color fades as \(\ce{N2O4}\) returns. The double arrow \(\ce{<=>}\) signals reversibility. This topic establishes what equilibrium is — and what it is not — before the chapter moves on to equilibrium constants, Le Châtelier's principle, and equilibrium calculations.

## Why This Matters

Equilibrium thinking explains systems that are everywhere: the oxygen–hemoglobin exchange in your blood, the carbon dioxide dissolved in a sealed soft drink, the ammonia produced industrially by the Haber process, and the carbonate chemistry of the oceans. In every case, amounts stop changing not because chemistry has stopped but because opposing processes have balanced.

For exams and later chapters, this topic prevents a costly misunderstanding: equilibrium does **not** mean "no reaction." Nearly every acid–base, solubility, and redox problem in later chapters is an equilibrium problem in disguise.

## Core Concepts

### Reversible reactions and the double arrow

Many reactions written with a single arrow are reversible: under the same conditions, products re-form reactants. Chemists signal this with a double arrow, \(\ce{<=>}\). Examples include the \(\ce{N2O4/NO2}\) interconversion, esterification and its hydrolysis, and oxygen binding and release by hemoglobin. A reaction that cannot run backward (most combustions) cannot reach equilibrium; it simply runs until a reactant runs out.

### Dynamic equilibrium: equal rates, constant amounts

In a closed flask of \(\ce{N2O4}\) and \(\ce{NO2}\), both processes — \(\ce{N2O4 -> 2NO2}\) and \(\ce{2NO2 -> N2O4}\) — occur continuously. Early on, one rate dominates; as concentrations change, the rates move toward each other. At equilibrium they are exactly equal, so for every \(\ce{N2O4}\) molecule that splits, a pair of \(\ce{NO2}\) molecules recombines. Net change is zero and amounts are constant. This is **dynamic equilibrium**: constant at the macroscopic level, busy at the molecular level.

### Reaching equilibrium from either direction

The same equilibrium position is reached whether you start with pure \(\ce{N2O4}\), pure \(\ce{NO2}\), or any mixture — provided the temperature is the same and the container is closed. Starting with pure \(\ce{N2O4}\), the forward reaction dominates at first; starting with pure \(\ce{NO2}\), the reverse reaction dominates. Either way, the system settles at the same final concentrations. This behavior is strong evidence that equilibrium reflects a balance of rates, not the direction in which the reaction was started. The next topic quantifies that balance with the equilibrium constant.

### Equilibrium requires a closed system

An open bottle of soda never reaches equilibrium: \(\ce{CO2}\) escapes, the reverse process (gas dissolving back in) cannot keep up, and the drink keeps losing fizz. Sealed, the same bottle settles into an equilibrium among dissolved \(\ce{CO2}\), carbonic acid, and headspace gas. The rule: equilibrium concentrations are only constant when matter is neither lost nor added. Energy, however, can cross the boundary — heating a sealed flask changes the equilibrium position, as the color change of \(\ce{N2O4/NO2}\) demonstrates.

### Equilibrium is not limited to chemical reactions

Any process with a measurable reverse can reach equilibrium. A saturated sugar solution in contact with undissolved sugar is an equilibrium: sugar dissolves and crystallizes at equal rates. Liquid water and water vapor in a sealed container at constant temperature form another. Recognizing these as equilibria makes the same rate-balance reasoning useful far beyond reaction equations.

## ELI-10: Explain Like I'm 10

> Imagine a hallway with people walking both ways. At first more people walk one way, but after a while the same number walk each way every minute. Nothing changes, yet people keep moving. A reaction at equilibrium is like that: molecules keep reacting, but the amounts stay the same.

## High-Yield Points

- Dynamic equilibrium means forward and reverse rates are equal; concentrations are constant — not zero, and not necessarily equal.
- The same equilibrium position is reached from pure reactants, pure products, or any mixture at a given temperature.
- Equilibrium requires a closed system; open systems that lose matter never settle.
- A catalyst speeds the approach to equilibrium but does not change the equilibrium position or \(K\) at a fixed temperature.
- For an elementary reversible pair, the equilibrium constant is the ratio of rate constants, \(K = k_{\text{forward}}/k_{\text{reverse}}\) — a preview of the next topic.
- Macroscopic constancy hides microscopic activity: molecules keep reacting, with no net change.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| reversible reaction | A reaction that can proceed in both forward and reverse directions under the same conditions. | It is the precondition for equilibrium; only reversible reactions can balance. |
| closed system | A system that can exchange energy but not matter with its surroundings. | Equilibrium concentrations stay constant only when nothing is lost or added. |
| dynamic equilibrium | A state in which forward and reverse reaction rates are equal, so concentrations are constant over time. | It distinguishes "balanced chemistry" from "stopped chemistry." |
| forward reaction / reverse reaction | The reactant-to-product process and the product-to-reactant process. | Comparing their rates defines equilibrium. |
| equilibrium position | The set of concentrations a reaction settles at under given conditions. | It tells which side is favored; quantified by \(K\) in the next topic. |
| equilibrium constant, \(K\) | The ratio of product to reactant concentrations at equilibrium (introduced next). | It is the number that predicts how far a reaction proceeds. |

## Worked Examples

### Example 1: Reading an equilibrium composition

A sealed 1.00 L flask initially contains 0.100 mol \(\ce{N2O4}\) and no \(\ce{NO2}\). At equilibrium, 0.040 mol \(\ce{N2O4}\) remains. How much \(\ce{NO2}\) is present?

Write the stoichiometric relationship first: every mole of \(\ce{N2O4}\) that reacts produces two moles of \(\ce{NO2}\):

\[
n(\ce{NO2}) = 2 \times (n_0(\ce{N2O4}) - n_{\text{eq}}(\ce{N2O4}))
\]

Substitute the given amounts:

\[
n(\ce{NO2}) = 2 \times (0.100\ \text{mol} - 0.040\ \text{mol}) = 2 \times 0.060\ \text{mol} = 0.120\ \text{mol}
\]

The units check: mol \(\times\) (dimensionless ratio) = mol. Because \(\ce{NO2}\) is brown, the equilibrium mixture is brown, and its intensity reflects the \(\ce{NO2}\) concentration. (For practice: the equilibrium constant would be \(K_c = [\ce{NO2}]^2/[\ce{N2O4}] = (0.120)^2/0.040 = 0.36\); the method comes in topic 4.)

### Example 2: Forward rate equals reverse rate

For the same system, suppose the forward step is first order with \(k_f = 4.0 \times 10^{-4}\ \text{s}^{-1}\) and the reverse step is second order with \(k_r = 2.5 \times 10^{-2}\ \text{M}^{-1}\text{s}^{-1}\). At equilibrium \([\ce{N2O4}] = 0.040\ \text{M}\). Find \([\ce{NO2}]\) at equilibrium.

Write the rate expressions first, then set them equal:

\[
\text{rate}_{\text{forward}} = k_f[\ce{N2O4}] \qquad \text{rate}_{\text{reverse}} = k_r[\ce{NO2}]^2
\]

At equilibrium \(\text{rate}_{\text{forward}} = \text{rate}_{\text{reverse}}\):

\[
k_f[\ce{N2O4}] = k_r[\ce{NO2}]^2
\]

Substitute the known values:

\[
(4.0 \times 10^{-4}\ \text{s}^{-1})(0.040\ \text{M}) = (2.5 \times 10^{-2}\ \text{M}^{-1}\text{s}^{-1})[\ce{NO2}]^2
\]

\[
1.6 \times 10^{-5}\ \text{M s}^{-1} = (2.5 \times 10^{-2}\ \text{M}^{-1}\text{s}^{-1})[\ce{NO2}]^2
\]

\[
[\ce{NO2}]^2 = \frac{1.6 \times 10^{-5}\ \text{M s}^{-1}}{2.5 \times 10^{-2}\ \text{M}^{-1}\text{s}^{-1}} = 6.4 \times 10^{-4}\ \text{M}^2
\]

\[
[\ce{NO2}] = 2.5 \times 10^{-2}\ \text{M}
\]

The unit algebra works out: (M s\(^{-1}\))/(M\(^{-1}\)s\(^{-1}\)) = M\(^{2}\), and the square root gives M. As a check, \(K = k_f/k_r = (4.0 \times 10^{-4})/(2.5 \times 10^{-2}) = 0.016\), matching \([\ce{NO2}]^2/[\ce{N2O4}] = (2.5 \times 10^{-2})^2/0.040 = 0.016\). Equal rates really do produce a constant ratio of concentrations.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Equilibrium means the reaction has stopped | Dynamic equilibrium | Forward and reverse reactions continue at equal rates; only the net change is zero. |
| At equilibrium, concentrations are equal | At equilibrium, concentrations are constant | The equilibrium constant fixes a ratio, not an equality; one side can dominate. |
| Adding a catalyst changes the equilibrium position | A catalyst changes how fast equilibrium is reached | Catalysts lower activation barriers in both directions; \(K\) and the equilibrium composition at fixed temperature are unchanged. |
| An open container reaches the same equilibrium | Equilibrium requires a closed system | When products escape, the reverse reaction cannot balance them, so the system keeps shifting. |
| The double arrow means both directions run equally fast | The double arrow means the reaction is reversible | The arrow only signals reversibility; the actual balance depends on rates and \(K\). |

## Quick Review

1. What is the defining condition of dynamic equilibrium?
2. Why do concentrations stop changing at equilibrium if molecules are still reacting?
3. Can equilibrium be reached starting with only products? Explain.
4. A sealed \(\ce{N2O4/NO2}\) flask at equilibrium is heated and the mixture darkens. Which species has increased?
5. Does adding a catalyst change the equilibrium concentrations? Why or why not?
6. Why does an open bottle of soda keep losing \(\ce{CO2}\) instead of reaching equilibrium?

<details>
<summary>Show answers</summary>

1. Forward and reverse reaction rates are equal, so reactant and product concentrations remain constant over time.
2. Because each product molecule formed is matched, on average, by a product molecule reacting back; the net change is zero.
3. Yes. The reverse reaction converts products into reactants until forward and reverse rates balance, settling at the same equilibrium position as any other starting mixture at that temperature.
4. \(\ce{NO2}\) (brown) has increased; heating shifts this equilibrium toward products.
5. No. A catalyst lowers activation barriers in both directions equally, so it only changes how quickly equilibrium is reached — not the equilibrium concentrations at a given temperature.
6. \(\ce{CO2}\) escapes into the room, so the reverse process (gas dissolving back in) cannot balance it; the open system never reaches the closed-system equilibrium state.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Equilibrium Constants](02-equilibrium-constants.md)
- Related: [Fundamental Equilibrium Concepts chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
