---
title: "Integrated Rate Laws"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "17: Kinetics"
topic_number: "4"
source: "chemistry-atoms-first-2e.md"
tags:
  - "integrated-rate-laws"
  - "science"
status: "complete"
---

# Integrated Rate Laws

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 17: Kinetics](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A **rate law** describes how fast a reaction proceeds at a single moment, expressed in terms of reactant concentrations. An **integrated rate law** answers a different question: given that a reaction started at some concentration, how much reactant remains after a certain amount of time? It is obtained by integrating (hence the name) the differential rate law, so that concentration appears as a function of elapsed time rather than as an instantaneous rate.

The form of the integrated rate law depends on the reaction order — zero, first, or second — and that order must come from experiment, not from the coefficients of a balanced equation. With the correct form in hand, you can solve for a remaining concentration, an elapsed time, or the rate constant \(k\). The same equations also generate half-life expressions, which are especially useful for describing processes such as radioactive decay and drug elimination.

## Why This Matters

Integrated rate laws turn a changing chemical system into something predictable. Pharmacists use first-order kinetics to estimate how much of a medication remains in the body between doses; forensic and environmental chemists use them to predict how long a spilled pollutant will persist; and astronomers use the first-order decay of carbon-14 or potassium-40 to date ancient materials. In the lab, a researcher monitoring a reaction by spectroscopy can determine both the reaction order and the rate constant from a single straight-line graph. Understanding which integrated equation applies — and what its slope means — is a core skill for any chemistry exam and for interpreting real kinetic data.

## Core Concepts

### Concentration as a function of time

Let \([A]_0\) be the concentration of reactant A at time zero and \([A]_t\) its concentration at time \(t\). For a **zero-order reaction**, the rate is independent of \([A]\), so equal amounts of A disappear in equal time intervals:

\[
[A]_t = [A]_0 - kt
\]

A plot of \([A]\) versus \(t\) is a straight line with slope \(-k\), and \(k\) has units of concentration per time, such as \(\text{mol L}^{-1}\text{s}^{-1}\) or \(\text{M s}^{-1}\).

For a **first-order reaction**, the rate is proportional to \([A]\). Each equal time interval removes the same *fraction* of what remains, so the amount consumed per interval shrinks as the reaction proceeds:

\[
\ln[A]_t = \ln[A]_0 - kt
\]

A plot of \(\ln[A]\) versus \(t\) is linear with slope \(-k\); here \(k\) carries units of \(\text{s}^{-1}\) (or \(\text{min}^{-1}\), \(\text{h}^{-1}\), and so on).

For a **second-order reaction** in a single reactant, the rate is proportional to \([A]^2\):

\[
\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt
\]

A plot of \(1/[A]\) versus \(t\) is linear with slope \(+k\), and \(k\) has units of \(\text{M}^{-1}\text{s}^{-1}\). The positive slope makes sense: as \([A]\) falls, its reciprocal rises.

### Using linear plots as evidence

The same concentration–time data can be plotted three ways: \([A]\), \(\ln[A]\), or \(1/[A]\) against time. Whichever plot is a straight line (within experimental scatter) identifies the order: linear \([A]\) means zero order, linear \(\ln[A]\) means first order, and linear \(1/[A]\) means second order. The slope of that line supplies the rate constant with the correct sign. Always keep time units consistent — if \(k\) is in \(\text{min}^{-1}\), express times in minutes, not seconds.

### Half-life patterns

The **half-life**, \(t_{1/2}\), is the time needed for the concentration to fall to one-half of its current value. For a first-order reaction:

\[
t_{1/2} = \frac{0.693}{k}
\]

Because this expression contains no concentration term, every halving takes exactly the same amount of time — a hallmark of first-order behavior. Zero- and second-order half-lives do depend on concentration: \(t_{1/2} = [A]_0/(2k)\) for zero order and \(t_{1/2} = 1/(k[A]_0)\) for second order, so each successive half-life is shorter (zero order) or longer (second order) than the last.

## ELI-10: Explain Like I'm 10

> An integrated rate law is a recipe for tracking how much of a chemical is left as time goes by. Different reactions follow different recipes: some lose the same amount every minute, and others lose the same fraction. Drawing a graph of the data tells us which recipe the reaction is actually using.

## High-Yield Points

- The linear plot identifies the order: \([A]\) versus \(t\) → zero order, \(\ln[A]\) versus \(t\) → first order, \(1/[A]\) versus \(t\) → second order.
- The slope is \(-k\) for zero- and first-order plots but \(+k\) for the second-order reciprocal plot.
- Only first-order reactions have a concentration-independent half-life, \(t_{1/2} = 0.693/k\).
- Reaction order is an experimental quantity; never assign it from the coefficients of an overall balanced equation.
- Units of \(k\) encode the order: \(\text{M s}^{-1}\), \(\text{s}^{-1}\), and \(\text{M}^{-1}\text{s}^{-1}\) for zero, first, and second order, respectively.
- A calculated negative concentration means the reaction finished before that time; the integrated equation no longer describes a real concentration.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Integrated rate law | An equation relating reactant concentration to elapsed time for a given reaction order. | Lets you predict how much reactant remains at any future time. |
| Reaction order | The experimentally determined dependence of rate on each reactant's concentration. | Controls which integrated equation, plot, and \(k\) units are correct. |
| Rate constant \(k\) | The proportionality constant in a rate law; its units change with order. | A larger \(k\) means a faster reaction; comparing \(k\) values requires matching units. |
| Half-life \(t_{1/2}\) | The time for a concentration to drop to half of its starting or current value. | The standard way to discuss decay, drug elimination, and reaction speed. |
| Linear plot | A graph of transformed concentration data that fits a straight line. | The straight line diagnoses the order and gives \(k\) from its slope. |

## How It Works / Step-by-Step Process

1. Record the reactant's concentration at several known times (or obtain the data from an instrument such as a spectrometer).
2. Identify the order by testing the three linear plots, or use an order supplied by the experiment.
3. Select the matching integrated rate law and keep time and concentration units consistent.
4. Substitute the known values, solve algebraically, and check that the result is physically sensible (positive time, positive concentration).
5. If a half-life is requested, use the half-life expression for that order rather than assuming the first-order formula.

## Worked Examples

### Worked example 1: concentration remaining after a set time (first order)

The decomposition of hydrogen peroxide in dilute solution follows first-order kinetics with \(k = 0.0346\ \text{min}^{-1}\). A sample begins at \([H_2O_2]_0 = 1.25\ \text{M}\). What concentration remains after 40.0 min?

Write the integrated first-order law before substituting:

\[
\ln[H_2O_2]_t = \ln[H_2O_2]_0 - kt
\]

Substitute the known values:

\[
\ln[H_2O_2]_t = \ln(1.25) - (0.0346\ \text{min}^{-1})(40.0\ \text{min}) = 0.2231 - 1.384 = -1.161
\]

Exponentiate both sides:

\[
[H_2O_2]_t = e^{-1.161} \approx 0.313\ \text{M}
\]

Check with the half-life: \(t_{1/2} = 0.693/0.0346 = 20.0\ \text{min}\). Since 40.0 min is exactly two half-lives, \(1.25\ \text{M} \to 0.625\ \text{M} \to 0.313\ \text{M}\). The agreement confirms the calculation. Note that the units of \(k\) (\(\text{min}^{-1}\)) required time in minutes; had the problem supplied seconds, they would need converting first.

### Worked example 2: time to reach a target concentration (second order)

Dimerization of butadiene, \(2\ \text{C}_4\text{H}_6 \to \text{C}_8\text{H}_{12}\), is second order in butadiene with \(k = 0.250\ \text{M}^{-1}\text{s}^{-1}\). Starting from \([C_4H_6]_0 = 0.500\ \text{M}\), how long until the concentration reaches \(0.125\ \text{M}\)?

Write the integrated second-order law first:

\[
\frac{1}{[C_4H_6]_t} = \frac{1}{[C_4H_6]_0} + kt
\]

Substitute:

\[
\frac{1}{0.125} = \frac{1}{0.500} + (0.250\ \text{M}^{-1}\text{s}^{-1})t
\]

\[
8.00\ \text{M}^{-1} = 2.00\ \text{M}^{-1} + (0.250\ \text{M}^{-1}\text{s}^{-1})t
\]

\[
t = \frac{8.00 - 2.00}{0.250}\ \text{s} = 24.0\ \text{s}
\]

Dimensional analysis confirms the units: \(\text{M}^{-1}\) divided by \(\text{M}^{-1}\text{s}^{-1}\) leaves seconds. As a sanity check, the second-order half-life is \(t_{1/2} = 1/(k[A]_0) = 1/((0.250)(0.500)) = 8.0\ \text{s}\); reaching \(0.125\ \text{M}\) (two halvings) takes longer than one half-life but less than the naive doubling of 16 s, because second-order half-lives lengthen as concentration falls — the computed 24.0 s is consistent with that pattern.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| The straight-line plot for first order | The plot for second order | \(\ln[A]\) vs. \(t\) is linear (slope \(-k\)) for first order; \(1/[A]\) vs. \(t\) is linear (slope \(+k\)) for second order. |
| Losing a constant amount each interval | Losing a constant fraction each interval | Zero-order reactions lose a constant amount; first-order reactions lose a constant fraction, so the amount shrinks. |
| The first-order half-life formula \(0.693/k\) | Half-lives of other orders | Zero-order half-life is \([A]_0/(2k)\) and second-order is \(1/(k[A]_0)\); both depend on concentration. |
| Coefficients in the balanced equation | Reaction order | Coefficients are stoichiometry; order comes from the mechanism and must be measured. |
| A positive slope on the second-order plot | Concentration increasing | The plotted quantity is \(1/[A]\), which rises as \([A]\) falls. |

## Quick Review

1. Which plot would you make to test whether a reaction is first order, and what would the slope equal?
2. A plot of \(1/[A]\) versus time is linear with a positive slope. What is the reaction order, and what does the slope equal?
3. Why is the half-life of a first-order reaction independent of the starting concentration?
4. A reaction has \(k = 0.0500\ \text{M}^{-1}\text{s}^{-1}\). What is its order, and what are the units telling you?
5. A zero-order calculation returns \([A]_t = -0.05\ \text{M}\). How should you interpret this result?

<details>
<summary>Show answers</summary>

1. Plot \(\ln[A]\) versus time; a straight line indicates first order, and its slope is \(-k\).
2. Second order in A; the slope equals \(+k\).
3. The first-order integrated law gives \(t_{1/2} = 0.693/k\), which contains no concentration term, so the time for each halving is fixed.
4. The units \(\text{M}^{-1}\text{s}^{-1}\) are characteristic of a second-order reaction (one reactant, or overall second order).
5. A concentration cannot be negative. The reaction reached completion before that time, so the zero-order equation is no longer physically meaningful there.

</details>

## Related Topics

- Previous: [Rate Laws](03-rate-laws.md)
- Next: [Collision Theory](05-collision-theory.md)
- Related: [Factors Affecting Reaction Rates](02-factors-affecting-reaction-rates.md) · [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
