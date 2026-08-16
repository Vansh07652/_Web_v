---
title: "Integrated Rate Laws"
subject: "Science"
book: "Chemistry 2e"
chapter: "12: Kinetics"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "integrated-rate-laws"
  - "science"
status: "complete"
---

# Integrated Rate Laws

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 12: Kinetics](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A rate law relates reaction rate to reactant concentration at one instant. An **integrated rate law** instead tells how a reactant's concentration changes over a measured time interval. It is the tool to use when a problem supplies an initial concentration, a concentration after some time, a rate constant, or a graph of concentration versus time.

For a reaction in which A disappears, the equation depends on its order. Experimental concentration–time data determine that order. With the correct form, calculate remaining reactant, elapsed time, or the rate constant \(k\).

## Why This Matters

Integrated rate laws turn a changing chemical system into a testable pattern. They help chemists follow drug breakdown, pollutants, and reactions monitored by spectroscopy. A straight-line graph can reveal reaction order and provide \(k\) from its slope.

## Core Concepts

### Concentration, time, and reaction order

Let \([A]_0\) mean the concentration of A at time zero and \([A]_t\) its concentration at time \(t\). For a **zero-order reaction**, the rate does not depend on \([A]\), so A is consumed by the same concentration amount in equal time intervals:

\[
[A]_t = [A]_0 - kt
\]

Thus, a plot of \([A]\) versus \(t\) is linear. Its slope is \(-k\), and \(k\) has units of mol L\(^{-1}\) s\(^{-1}\), often written M s\(^{-1}\).

For a **first-order reaction**, the rate is proportional to \([A]\). The amount lost per interval decreases as less A remains:

\[
\ln [A]_t = \ln [A]_0 - kt
\]

Equivalently, \(\ln([A]_t/[A]_0)=-kt\). A plot of \(\ln[A]\) versus \(t\) is linear, with slope \(-k\); here \(k\) has units s\(^{-1}\).

For a **second-order reaction** involving one reactant A, the rate is proportional to \([A]^2\):

\[
\frac{1}{[A]_t}=\frac{1}{[A]_0}+kt
\]

A plot of \(1/[A]\) versus \(t\) is linear with slope \(+k\). The units of \(k\) are M\(^{-1}\) s\(^{-1}\). The positive slope is sensible: as concentration falls, its reciprocal rises.

### Using plots as evidence

Transform the same data three ways: \([A]\), \(\ln[A]\), and \(1/[A]\) versus time. The plot that is straight within experimental scatter identifies zero-, first-, or second-order behavior, respectively. Its slope supplies the appropriately signed \(k\).

Units carry information about reaction order. Keep time units consistent: if \(k\) is in min\(^{-1}\), use minutes rather than seconds.

### Half-life patterns

The **half-life**, \(t_{1/2}\), is the time required for \([A]\) to decrease to one-half its current value. For first-order reactions,

\[
t_{1/2}=\frac{0.693}{k}
\]

so every halving takes the same time. Zero- and second-order half-lives depend on concentration: \(t_{1/2}=[A]_0/(2k)\) for zero order and \(t_{1/2}=1/(k[A]_0)\) for second order.

## ELI-10: Explain Like I’m 10

> An integrated rate law is a recipe for tracking how much of a chemical is left as time passes. Different reactions use different recipes: some lose the same amount each minute, while others lose the same fraction. A graph helps us discover which recipe fits the experiment.

## High-Yield Points

- The straight graph identifies the order: \([A]\) for zero order, \(\ln[A]\) for first order, and \(1/[A]\) for second order.
- The slope is \(-k\) for zero- and first-order linear plots, but \(+k\) for the second-order reciprocal plot.
- First-order reactions have a concentration-independent half-life; zero- and second-order reactions do not.
- Use the order determined experimentally, not coefficients from an overall balanced equation.
- A calculated concentration must be physically meaningful; a negative value signals that the zero-order equation has been extended beyond complete consumption.

## Key Terms

| Term | Plain-Language Definition |
|---|---|
| integrated rate law | An equation connecting reactant concentration and elapsed time for a specified reaction order. |
| reaction order | The experimentally determined concentration dependence of a rate law. |
| rate constant, \(k\) | The proportionality constant for a rate law; its units depend on order. |
| half-life, \(t_{1/2}\) | Time for a reactant concentration to become half of its starting or current value. |
| linear plot | A graph whose data fit a straight line; it can diagnose reaction order and give \(k\) from slope. |

## How It Works / Step-by-Step Process

1. Record concentrations at known times for the reactant being analyzed.
2. Test the three linearized plots or use the experimentally supplied order.
3. Choose the matching integrated rate law and preserve the units used for time and concentration.
4. Substitute known quantities, solve algebraically, and check that the sign and magnitude are chemically reasonable.
5. If half-life is requested, use the formula for that order rather than assuming the first-order expression.

## Worked Examples

### Worked example 1: concentration remaining after a set time (first order)

Suppose A is found experimentally to react by first-order kinetics with \(k=0.230\ \text{min}^{-1}\). A sample begins at \([A]_0=0.800\ \text{M}\). What concentration remains after 3.00 min?

Use \(\ln([A]_t/[A]_0)=-kt\):

\[
\ln([A]_t/0.800)=-(0.230)(3.00)=-0.690
\]

Exponentiating gives \([A]_t/0.800=e^{-0.690}\approx0.502\), so \([A]_t\approx0.402\ \text{M}\). The answer is close to one-half because \(t_{1/2}=0.693/0.230=3.01\) min. This agreement is a useful check, not an extra assumption: the constant half-life follows specifically from first-order kinetics.

### Worked example 2: time to reach a target concentration (second order)

Suppose the same reactant A follows second-order kinetics with \(k = 0.0445\ \text{M}^{-1}\text{min}^{-1}\), starting from \([A]_0 = 0.250\ \text{M}\). How long does it take for \([A]\) to fall to \(0.100\ \text{M}\)?

Write the integrated second-order law before substituting:

\[
\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt
\]

Substitute the known values:

\[
\frac{1}{0.100} = \frac{1}{0.250} + (0.0445)t
\]

\[
10.0\ \text{M}^{-1} = 4.00\ \text{M}^{-1} + (0.0445\ \text{M}^{-1}\text{min}^{-1})t
\]

\[
t = \frac{10.0 - 4.00}{0.0445}\ \text{min} = 134.8\ \text{min} \approx 135\ \text{min}
\]

The units cancel correctly: M\(^{-1}\) divided by M\(^{-1}\) min\(^{-1}\) leaves minutes. Two checks apply: the time is positive, and it is shorter than the second-order half-life \(t_{1/2} = 1/(k[A]_0) = 1/((0.0445)(0.250)) = 89.9\ \text{min}\) — sensible, because \(0.100\ \text{M}\) is more than halfway down from \(0.250\ \text{M}\).

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| “A larger \(k\) always has the same units.” | Units change with order; compare values only when the orders and units match. |
| “The coefficient in a balanced equation gives the order.” | That is true only for an elementary reaction; overall reactions require experimental data. |
| “A first-order reaction loses a constant amount each minute.” | It loses a constant fraction in equal intervals; the amount lost becomes smaller. |
| “Every half-life problem uses \(0.693/k\).” | That compact formula is only for first-order reactions. |
| “A positive second-order slope means concentration increases.” | The plotted quantity is \(1/[A]\), which rises as \([A]\) falls. |

## Quick Review

1. Which plot is linear for a first-order reaction?
2. A graph of \(1/[A]\) versus time is linear with positive slope. What order is the reaction, and what does the slope equal?
3. Why is the half-life of a first-order reaction unchanged by the starting concentration?
4. What is wrong with assigning reaction order directly from an overall balanced equation?
5. A zero-order calculation gives \([A]_t=-0.10\ \text{M}\). How should that result be interpreted?

<details>
<summary>Show answers</summary>

1. A plot of \(\ln[A]\) versus time; its slope is \(-k\).
2. It is second order in A, and the slope equals \(+k\).
3. Its integrated rate law leads to \(t_{1/2}=0.693/k\), which contains no concentration term.
4. Overall coefficients describe stoichiometry, whereas order is determined by the reaction mechanism and must usually be measured.
5. Concentration cannot be negative. The reaction has reached completion before that time, so the zero-order equation no longer represents a real concentration.

</details>

## Related Topics

- Previous: [Rate Laws](03-rate-laws.md)
- Next: [Collision Theory](05-collision-theory.md)
- Related: [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
