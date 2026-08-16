---
title: "Rate Laws"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "17: Kinetics"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "rate-laws"
  - "science"
status: "complete"
---

# Rate Laws

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 17: Kinetics](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A **rate law** is the mathematical relationship between a reaction's rate and the concentrations of its reactants. For a reaction \(a\text{A} + b\text{B} \rightarrow\) products, the general form is:

\[
\text{rate} = k[\text{A}]^m[\text{B}]^n
\]

where \(k\) is the **rate constant** and the exponents \(m\) and \(n\) are the **reaction orders** with respect to A and B. Two features make rate laws both powerful and tricky. First, the orders are **determined by experiment, not by the balanced equation's coefficients** — you cannot read them off the stoichiometry (except for elementary single-step mechanisms, a later topic). Second, the rate constant \(k\) and the orders together let you predict the rate at any concentrations, which is why the **method of initial rates** — running the reaction at different starting concentrations and comparing the initial rates — is the standard tool for extracting a rate law from data. This topic shows how to write rate laws, how to find orders and \(k\) from data tables, and how the units of \(k\) depend on the overall order.

## Why This Matters

- **Predicting and controlling reactions:** Once the rate law is known, chemists can compute how fast a reaction runs at any concentration — essential for designing reactors, drug formulations, and industrial processes.
- **Mechanism insight:** The orders hint at how many molecules participate in the rate-determining step, helping chemists propose (and test) reaction mechanisms.
- **Safety and stability:** Knowing the rate law for a decomposing substance (e.g., a medication or an explosive) tells you how its shelf life depends on concentration and how to store it safely.
- **Environment and health:** Pollutant degradation and drug metabolism follow rate laws; orders determine whether doubling a dose doubles or quadruples the relevant rate.
- **Exams:** Rate-law determination from initial-rate data tables is a classic calculation; knowing why coefficients ≠ orders is a frequently tested trap.

## Core Concepts

### The general form of a rate law

For the reaction \(a\text{A} + b\text{B} \rightarrow\) products, the rate law is:

\[
\text{rate} = k[\text{A}]^m[\text{B}]^n
\]

- \(k\) (**rate constant**): proportionality constant that depends on temperature and the reaction itself, but **not** on concentrations.
- \(m\), \(n\) (**orders**): exponents, often 0, 1, or 2, but they can be fractional or even negative.
- **Overall order** = \(m + n\).

Orders describe *sensitivity*, not amounts: if \(m = 2\), doubling \([\text{A}]\) quadruples the rate; if \(n = 0\), changing \([\text{B}]\) does not change the rate at all.

### Orders come from experiment, not from the equation

For the reaction \(2\text{NO} + \text{O}_2 \rightarrow 2\text{NO}_2\), the coefficients suggest orders of 2 and 1 — and in this case the experimental rate law is indeed \(\text{rate} = k[\text{NO}]^2[\text{O}_2]\) — but that agreement is coincidental. The balanced equation describes the overall stoichiometry; the rate law describes the slowest elementary step, whose participants are not necessarily the overall reactants in their stoichiometric amounts. Rate laws must be measured.

### The method of initial rates

To find \(m\) and \(n\), run the reaction at several different starting concentrations, measure the **initial rate** in each run, and compare runs in which only one concentration changes:

1. Hold \([\text{B}]\) constant, double \([\text{A}]\): if the rate doubles, \(m = 1\); if it quadruples, \(m = 2\); if unchanged, \(m = 0\).
2. Repeat for \([\text{B}]\) with \([\text{A}]\) held constant.
3. Substitute any run's data into \(\text{rate} = k[\text{A}]^m[\text{B}]^n\) and solve for \(k\).

Initial rates are used because at \(t = 0\) the concentrations are the known starting values, and no products have accumulated to complicate the measurement.

### Units of the rate constant

The units of \(k\) are set by making the rate law dimensionally consistent. Since \(\text{rate}\) has units \(\text{M s}^{-1}\):

\[
k = \frac{\text{rate}}{[\text{A}]^m[\text{B}]^n} \quad\Rightarrow\quad
\text{units of } k = \text{M}^{1 - \text{overall order}}\ \text{s}^{-1}
\]

So for overall order 0: \(\text{M s}^{-1}\); order 1: \(\text{s}^{-1}\); order 2: \(\text{M}^{-1}\text{s}^{-1}\); order 3: \(\text{M}^{-2}\text{s}^{-1}\). Checking that your \(k\)'s units match the overall order is a quick way to catch arithmetic mistakes.

### Zero, first, and second order behavior

- **Zero order:** rate is independent of the reactant's concentration (rate = \(k\)). Often occurs when a catalyst surface is saturated or an enzyme is fully occupied.
- **First order:** rate halves when concentration halves; each equal concentration change produces an equal rate change (radioactive decay, many decompositions).
- **Second order:** rate quadruples when concentration doubles; sensitive to concentration changes.

## ELI-10: Explain Like I'm 10

> A rate law is a recipe for speed: "how fast" = a number (k) times the amount of each ingredient raised to some power. You cannot read the powers from the recipe's ingredient list — you have to test it in the kitchen. Cook one batch with twice the sugar and see if it gets twice as fast (power 1), four times as fast (power 2), or no faster at all (power 0). Once you know the powers, you can predict the speed of any batch.

## High-Yield Points

- Rate law form: \(\text{rate} = k[\text{A}]^m[\text{B}]^n\); overall order = \(m + n\).
- **Orders are experimental — never from the balanced coefficients** (except for elementary steps).
- Method of initial rates: vary one concentration at a time, compare rate ratios.
- \(k\) depends on temperature and reaction identity, not concentration; its units depend on overall order: \(\text{M}^{1-\text{order}}\text{s}^{-1}\).
- Zero order: rate = \(k\); first order: rate ∝ [A]; second order: rate ∝ [A]².
- Fractional and negative orders exist (e.g., inhibition can give negative order).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Rate law | \(\text{rate} = k[\text{A}]^m[\text{B}]^n\), linking rate to concentrations | The quantitative heart of kinetics; predicts rate at any concentration |
| Rate constant \(k\) | Temperature-dependent proportionality constant in the rate law | Its value and units characterize the reaction's intrinsic speed |
| Reaction order | The exponent on a concentration in the rate law | Tells you how sensitive the rate is to each reactant |
| Overall order | Sum of all individual orders (\(m + n\)) | Sets the units of \(k\) and the qualitative concentration behavior |
| Initial rate | Instantaneous rate at \(t = 0\) | The measured quantity used to determine orders and \(k\) |
| Method of initial rates | Comparing runs with one concentration varied at a time | The standard experimental route to a rate law |
| Zero order | Rate independent of the reactant's concentration | Common when a surface or enzyme site is saturated |
| First order | Rate ∝ [A] to the first power | Equal concentration changes give equal rate changes; radioactive decay is first order |
| Second order | Rate ∝ [A]² | Doubling concentration quadruples the rate |
| Elementary step | A single molecular event in a reaction mechanism | The only case where orders can be read from coefficients (of that step) |

## Worked Examples

### Example 1: Determining a rate law from initial-rate data

Consider \(2\text{NO}(g) + \text{O}_2(g) \rightarrow 2\text{NO}_2(g)\) with the following sample initial-rate data:

| Run | \([\text{NO}]\) (M) | \([\text{O}_2]\) (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.010 | 0.010 | \(2.5 \times 10^{-5}\) |
| 2 | 0.020 | 0.010 | \(1.0 \times 10^{-4}\) |
| 3 | 0.010 | 0.020 | \(5.0 \times 10^{-5}\) |

**Step 1 — Find \(m\) (order in NO).** Compare runs 1 and 2 (\([\text{O}_2]\) constant):

\[
\frac{\text{rate}_2}{\text{rate}_1} = \frac{1.0 \times 10^{-4}}{2.5 \times 10^{-5}} = 4.0
= \left(\frac{0.020}{0.010}\right)^m = 2^m \quad\Rightarrow\quad m = 2
\]

**Step 2 — Find \(n\) (order in O₂).** Compare runs 1 and 3 (\([\text{NO}]\) constant):

\[
\frac{\text{rate}_3}{\text{rate}_1} = \frac{5.0 \times 10^{-5}}{2.5 \times 10^{-5}} = 2.0
= 2^n \quad\Rightarrow\quad n = 1
\]

**Step 3 — Write the rate law and solve for \(k\)** using run 1:

\[
\text{rate} = k[\text{NO}]^2[\text{O}_2], \qquad
k = \frac{\text{rate}}{[\text{NO}]^2[\text{O}_2]}
= \frac{2.5 \times 10^{-5}\ \text{M s}^{-1}}{(0.010\ \text{M})^2(0.010\ \text{M})}
= 25\ \text{M}^{-2}\text{s}^{-1}
\]

Dimensional check: overall order 3, so \(k\) should be \(\text{M}^{1-3}\text{s}^{-1} = \text{M}^{-2}\text{s}^{-1}\). ✓ The same \(k\) (within rounding) must come from runs 2 and 3 — a good cross-check of the whole calculation.

### Example 2: Predicting a rate with the determined rate law

Using the rate law and \(k\) from Example 1, predict the initial rate when \([\text{NO}] = 0.030\ \text{M}\) and \([\text{O}_2] = 0.020\ \text{M}\).

**Step 1 — Write the rate law with the known \(k\):**

\[
\text{rate} = (25\ \text{M}^{-2}\text{s}^{-1})[\text{NO}]^2[\text{O}_2]
\]

**Step 2 — Substitute:**

\[
\text{rate} = (25\ \text{M}^{-2}\text{s}^{-1})(0.030\ \text{M})^2(0.020\ \text{M})
= 25 \times 9.0 \times 10^{-4} \times 2.0 \times 10^{-2}\ \text{M s}^{-1}
= 4.5 \times 10^{-4}\ \text{M s}^{-1}
\]

Dimensional check: \(\text{M}^{-2}\text{s}^{-1} \times \text{M}^2 \times \text{M} = \text{M s}^{-1}\). ✓ The rate is roughly 18× the run-1 rate because \([\text{NO}]\) tripled (factor \(3^2 = 9\)) and \([\text{O}_2]\) doubled (factor 2).

### Example 3: Why coefficients are not orders

The reaction \(2\text{N}_2\text{O}_5 \rightarrow 4\text{NO}_2 + \text{O}_2\) is experimentally **first order** in \(\text{N}_2\text{O}_5\):

\[
\text{rate} = k[\text{N}_2\text{O}_5]
\]

even though the coefficient is 2. The explanation: \(\text{N}_2\text{O}_5\) decomposes through a slow first step (\(\text{N}_2\text{O}_5 \rightarrow \text{NO}_2 + \text{NO}_3\)) whose rate depends on only one molecule; the later steps are fast. This is the definitive example of why rate laws must come from data — reading the coefficient 2 would give a wrong prediction and wrong units for \(k\).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Reaction order | Stoichiometric coefficient | Orders come from experiments; coefficients describe overall stoichiometry. Only elementary-step coefficients equal orders |
| Rate constant \(k\) | Rate | \(k\) is constant at fixed temperature; rate changes with concentrations. \(k\) carries units; rate carries \(\text{M s}^{-1}\) |
| Individual order | Overall order | Individual orders are per reactant (\(m\), \(n\)); overall order is the sum and sets \(k\)'s units |
| Second order in one reactant | Second order overall | \(\text{rate} = k[\text{A}]^2\) is second order overall (2 = 2); \(\text{rate} = k[\text{A}][\text{B}]\) is first order in each but second order overall |
| Zero order means no reaction | Zero order means rate independent of that concentration | The reaction still proceeds at rate \(k\); changing that concentration just doesn't change the rate |
| Orders being whole numbers | Orders being any numbers | Orders can be 0, 1, 2, fractions, or negative — determined experimentally |
| "Doubling [A] doubles rate" (any reaction) | Only true for first order | Doubling [A] quadruples rate for second order, leaves it unchanged for zero order |
| Using one run to find \(k\) | Confirming \(k\) with all runs | Always cross-check \(k\) with a second run; if it differs, the rate law (or arithmetic) is wrong |

## Quick Review

1. Write the general rate law for \(a\text{A} + b\text{B} \rightarrow\) products and define each symbol.
2. Why can't the orders of a reaction be read from its balanced equation?
3. In Example 1, why is comparing runs 1 and 2 valid for finding the order in NO but not for finding the order in O₂?
4. What are the units of \(k\) for a reaction with overall order 2? Overall order 0?
5. A reaction is first order in A. By what factor does the rate change if [A] is halved?
6. What quantity is measured at \(t = 0\) in the method of initial rates, and why \(t = 0\)?

<details>
<summary>Show answers</summary>

1. \(\text{rate} = k[\text{A}]^m[\text{B}]^n\): \(k\) is the rate constant, \(m\) and \(n\) are the orders with respect to A and B.
2. The balanced equation states overall stoichiometry, but the rate is controlled by the slowest elementary step, whose molecularity may differ from the coefficients.
3. In runs 1 and 2 only \([\text{NO}]\) changes while \([\text{O}_2]\) stays at 0.010 M, so any rate change is attributable to NO; finding the O₂ order requires runs where only \([\text{O}_2]\) changes (runs 1 and 3).
4. Overall order 2: \(\text{M}^{-1}\text{s}^{-1}\); overall order 0: \(\text{M s}^{-1}\).
5. Rate halves (first order means rate ∝ [A]).
6. The initial rate (instantaneous rate at \(t = 0\)), because the concentrations are the known starting values and no products have accumulated to interfere.

</details>

## Related Topics

- Previous: [Factors Affecting Reaction Rates](02-factors-affecting-reaction-rates.md)
- Next: [Integrated Rate Laws](04-integrated-rate-laws.md)
- Related: [Chemical Reaction Rates](01-chemical-reaction-rates.md) — the definitions behind initial rates
- Related: [Reaction Mechanisms](06-reaction-mechanisms.md) — why orders match elementary steps, not the overall equation
- Related: [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
