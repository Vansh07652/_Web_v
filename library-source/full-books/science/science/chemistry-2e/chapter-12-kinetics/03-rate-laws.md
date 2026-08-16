---
title: "Rate Laws"
subject: "Science"
book: "Chemistry 2e"
chapter: "12: Kinetics"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "rate-laws"
  - "science"
status: "complete"
---

# Rate Laws

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 12: Kinetics](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A **rate law** is an experimentally determined equation that relates a reaction's rate to the concentrations of selected reactants. For a reaction involving A and B, a common form is:

\[
\text{rate} = k[A]^m[B]^n
\]

The constant \(k\) is the **rate constant**, while the exponents \(m\) and \(n\) — the **reaction orders** — state how strongly the rate depends on each concentration. Rate laws let chemists turn observations from kinetic experiments into predictions about how fast a reaction will proceed under comparable conditions.

The balanced chemical equation identifies what is consumed and formed, but it usually does *not* supply the exponents in the rate law. Those exponents depend on the reaction pathway, or mechanism, and must be measured. This distinction is central to kinetics: stoichiometry describes the overall chemical change; a rate law describes observed rate behavior.

## Why This Matters

Rate laws help explain why changing a reactant concentration can have a small, large, or no immediate effect on reaction speed. They are used to compare reaction conditions, determine the units of a rate constant, and gather evidence about possible mechanisms. Later, integrated rate laws use concentration changes over time; here, the emphasis is on how the *initial* rate responds when concentrations are deliberately changed.

## Core Concepts

### Reading a rate law

In \(\text{rate} = k[A]^m[B]^n\), the exponents are the **reaction orders**: the reaction is order \(m\) in A and order \(n\) in B. The **overall order** is their sum, \(m + n\). A first-order dependence on A means doubling \([A]\) doubles the rate, provided all other conditions stay fixed. A second-order dependence means doubling that concentration multiplies the rate by four. A zero-order reactant has an exponent of zero, so changing its concentration does not change the measured rate over that range.

Reaction order is an exponent in an empirical equation, not a coefficient and not a quantity of material. It can be zero or a fraction as well as a positive integer. For example, \(\text{rate} = k[X]^{1/2}\) is half-order in X. A reactant can appear in the overall equation yet be absent from the rate law if it does not influence the rate-limiting behavior under the conditions studied.

### The role of the rate constant

The **rate constant**, \(k\), is the proportionality constant that makes the rate law true at a specified temperature. Its numerical value changes when temperature changes, and a catalyst changes the effective rate constant by providing a different pathway. At one fixed temperature and catalyst condition, \(k\) stays constant even when reactant concentrations vary.

The units of \(k\) are not universal. Because rate has concentration-per-time units, the rate law determines the needed units. For an overall first-order reaction, \(k\) has units of \(\text{s}^{-1}\); for an overall second-order reaction, it has units of \(\text{M}^{-1}\,\text{s}^{-1}\). Checking units is a useful way to catch an incorrect claimed order.

### Determining orders from initial-rate data

The **method of initial rates** compares experiments conducted at the same temperature. Choose two trials in which only one reactant concentration changes. The ratio of the rates equals the concentration-change factor raised to that reactant's order. If doubling \([A]\) makes the initial rate four times larger, then \(4 = 2^m\), so \(m = 2\). Repeat with another pair of trials to find the order in B, then use any trial to calculate \(k\).

Initial rates are used because concentrations have changed very little at the start of the experiment. That prevents changing reactant and product concentrations from complicating the comparison.

## ELI-10: Explain Like I'm 10

> A rate law is a rule discovered by testing that tells how a reaction's speed changes when you add more ingredients. If doubling one ingredient makes the reaction twice as fast, that ingredient has a first-power effect. If it makes the reaction four times as fast, it has a second-power effect. Chemists must measure this rule; they cannot safely guess it from the recipe-like chemical equation.

## High-Yield Points

- Rate laws come from experiments, not usually from coefficients in an overall balanced equation.
- In \(\text{rate} = k[A]^m[B]^n\), \(m\) and \(n\) are individual orders; \(m + n\) is overall order.
- Compare trials where one concentration changes and the other relevant concentrations remain constant.
- A zero-order concentration has no effect on the observed rate; it does not mean the substance is irrelevant to the reaction.
- \(k\) is constant only when temperature and other conditions, including catalyst presence, are unchanged.
- Use the overall order to determine the units of \(k\).
- If doubling a concentration multiplies the rate by \(2^x\), the order is \(x\) — check for 1, 2, 3, or fractional patterns.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| rate law | Equation relating reaction rate to reactant concentrations and a rate constant | The quantitative rule that predicts how fast a reaction runs under given conditions |
| rate constant (\(k\)) | Proportionality constant for a particular reaction under specified conditions | Its value (and units) encodes temperature and catalyst effects in one number |
| reaction order | Exponent of a concentration term in a rate law | Tells you how sensitive the rate is to each reactant's concentration |
| overall order | Sum of the individual reaction orders in a rate law | Sets the units of \(k\) and the overall concentration dependence |
| method of initial rates | Procedure that infers orders by comparing rates at the beginnings of controlled experiments | The standard experimental route to a rate law |
| zero order | Dependence in which changing a species' concentration does not change the measured rate | Zero-order reactants are consumed but do not control the rate in that range |

## How It Works / Step-by-Step Process

1. Write a general form such as \(\text{rate} = k[A]^m[B]^n\) for the reactants being tested.
2. Find two experiments with the same \([B]\) but different \([A]\); compare the rate factor with the \([A]\) factor to solve for \(m\).
3. Hold \([A]\) fixed in another pair and determine \(n\) the same way.
4. Add the orders to obtain the overall order, then substitute one experiment's values to calculate \(k\).
5. State the rate law and the units of \(k\), including the conditions under which it applies.

## Worked Example 1: Initial-Rate Data to a Rate Law

Suppose experiments for a reaction give these initial-rate results:

| Trial | \([A]\) (M) | \([B]\) (M) | Initial rate (M s⁻¹) |
|---|---:|---:|---:|
| 1 | 0.10 | 0.10 | 0.020 |
| 2 | 0.20 | 0.10 | 0.080 |
| 3 | 0.20 | 0.20 | 0.160 |

**Write the general form first:** \(\text{rate} = k[A]^m[B]^n\).

**Find \(m\).** From trial 1 to 2, \([A]\) doubles while \([B]\) is fixed, and the rate becomes four times as large:

\[
\frac{\text{rate}_2}{\text{rate}_1} = \left(\frac{[A]_2}{[A]_1}\right)^m \quad\Rightarrow\quad 4 = 2^m \quad\Rightarrow\quad m = 2
\]

The reaction is second order in A.

**Find \(n\).** From trial 2 to 3, \([B]\) doubles with \([A]\) fixed and the rate doubles:

\[
2 = 2^n \quad\Rightarrow\quad n = 1
\]

**Write the rate law:** \(\text{rate} = k[A]^2[B]\), an overall third-order law (\(2 + 1 = 3\)).

**Find \(k\) and its units.** Substitute trial 1 into the rate law:

\[
k = \frac{\text{rate}}{[A]^2[B]} = \frac{0.020\ \text{M s}^{-1}}{(0.10\ \text{M})^2(0.10\ \text{M})} = 20\ \text{M}^{-2}\,\text{s}^{-1}
\]

Unit check: \(\text{M s}^{-1} / \text{M}^3 = \text{M}^{-2}\,\text{s}^{-1}\). The completed result is:

\[
\text{rate} = (20\ \text{M}^{-2}\,\text{s}^{-1})[A]^2[B]
\]

at the experiment's temperature.

## Worked Example 2: Dimensional Analysis Catches an Order Mistake

A student claims a reaction is first order overall and writes \(k\) with units of \(\text{M}^{-1}\,\text{s}^{-1}\). Is the claim self-consistent?

**Write the unit relationship.** The rate law always has the form rate = \(k \times\) (concentration terms), so the units of \(k\) must satisfy:

\[
\text{units of } k = \frac{\text{units of rate}}{\text{units of concentration terms}}
\]

**Substitute the claimed order.** For an overall first-order law, the concentration product has units of \(\text{M}^1\):

\[
\text{units of } k = \frac{\text{M s}^{-1}}{\text{M}^1} = \text{s}^{-1}
\]

**Compare.** The claimed units, \(\text{M}^{-1}\,\text{s}^{-1}\), match an overall *second-order* law, not first order. The student either misidentified the order or copied the units from a different reaction. This check works in general: count the total concentration power (overall order \(m + n\)) and subtract it from the rate's concentration power.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| The coefficients in \(2\text{A} + \text{B} \rightarrow \text{products}\) require \(\text{rate} = k[A]^2[B]\) | That is valid only if evidence or an elementary-step mechanism supports it; overall stoichiometry alone is insufficient |
| "Second order" means the reaction contains two reactants | It means a concentration is squared, or that the individual orders sum to two when referring to overall order |
| If B is zero order, B is not consumed | B may be consumed; its concentration simply does not control the observed rate in that condition range |
| A larger \(k\) always belongs to the same temperature comparison | Temperature and catalysts can change \(k\), so conditions must be specified |
| Order equals the balanced coefficient | Orders are measured; they equal coefficients only by coincidence or for an elementary step |

## Quick Review

1. What information in a rate law must be obtained experimentally?
2. If doubling \([C]\) makes the initial rate eight times larger, what is the order in C?
3. For \(\text{rate} = k[D][E]^2\), what is the overall order and what are the units of \(k\) if rate is in M s⁻¹?
4. Why should two trials differ in only one reactant concentration when finding an individual order?
5. Does a balanced overall equation normally determine the rate law? Explain briefly.
6. A reaction is zero order in Z. What happens to the rate when \([Z]\) triples?

<details>
<summary>Show answers</summary>

1. The concentration exponents (reaction orders), and then \(k\), are determined from kinetic measurements.
2. Third order, because \(8 = 2^3\).
3. It is third order overall. \(k\) has units \(\text{M}^{-2}\,\text{s}^{-1}\), because \((\text{M s}^{-1})/\text{M}^3 = \text{M}^{-2}\,\text{s}^{-1}\).
4. Keeping all other relevant concentrations fixed isolates the rate change caused by the one species being tested.
5. No. The equation gives overall stoichiometry, whereas the rate law depends on the actual pathway and experimental evidence.
6. Nothing — a zero-order species does not affect the rate, so tripling \([Z]\) leaves it unchanged (over the range where zero-order behavior holds).

</details>

## Related Topics

- Previous: [Factors Affecting Reaction Rates](02-factors-affecting-reaction-rates.md)
- Next: [Integrated Rate Laws](04-integrated-rate-laws.md)
- Related: [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
