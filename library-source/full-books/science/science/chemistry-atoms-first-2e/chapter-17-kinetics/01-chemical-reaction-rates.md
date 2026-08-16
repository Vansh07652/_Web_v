---
title: "Chemical Reaction Rates"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "17: Kinetics"
topic_number: "1"
source: "chemistry-atoms-first-2e.md"
tags:
  - "chemical-reaction-rates"
  - "science"
status: "complete"
---

# Chemical Reaction Rates

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 17: Kinetics](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Thermodynamics tells you *whether* a reaction can happen; **kinetics** tells you *how fast* it happens. The **reaction rate** is the change in concentration of a reactant or product per unit time — typically moles per liter per second, \(\text{M s}^{-1}\). Because concentrations change continuously during a reaction, chemists distinguish an **average rate** (over a time interval, the slope of a secant line on a concentration-vs-time graph) from an **instantaneous rate** (at one moment, the slope of the tangent line). A balanced equation also imposes a relationship: reactants disappear and products appear in proportion to their stoichiometric coefficients, so the rate of the overall reaction can be written from the rate of change of any species. This topic builds the language and definitions — rate expressions, the minus sign convention, average vs. instantaneous rates, and the initial rate — that the rest of the kinetics chapter (rate laws, integrated rate laws, collision theory) depends on.

## Why This Matters

- **Medicine and pharmacy:** How fast a drug is absorbed, distributed, and cleared depends on reaction rates; drug degradation in a vial is a chemical reaction with a measurable rate.
- **Safety and industry:** Explosives must react quickly when triggered but stay stable in storage; industrial reactors are sized using the rates of the reactions inside them.
- **Environment:** The breakdown of pollutants in air and water follows rate laws; ozone depletion chemistry is kinetics.
- **Food and everyday chemistry:** Spoilage, ripening, and cooking are all reactions proceeding at measurable rates.
- **Exams:** Rate expressions and the ability to read a concentration-vs-time graph are foundational — almost every kinetics problem in this chapter builds on them.

## Core Concepts

### What a reaction rate is

A reaction rate is a change in concentration divided by the time over which it occurs:

\[
\text{rate} = \frac{\Delta[\text{species}]}{\Delta t}
\]

Because concentrations are typically in molarity (\(\text{mol L}^{-1}\)) and time in seconds, rates carry units of \(\text{M s}^{-1}\) (or \(\text{mol L}^{-1}\text{s}^{-1}\)). Rates are always reported as **positive** numbers: we say a reactant is consumed or a product is formed, not that a concentration is "decreasing" with a negative rate.

### The rate expression from a balanced equation

For the general reaction:

\[
a\text{A} + b\text{B} \rightarrow c\text{C} + d\text{D}
\]

the rate of the reaction is the same no matter which species you monitor:

\[
\text{rate} = -\frac{1}{a}\frac{\Delta[\text{A}]}{\Delta t}
= -\frac{1}{b}\frac{\Delta[\text{B}]}{\Delta t}
= \frac{1}{c}\frac{\Delta[\text{C}]}{\Delta t}
= \frac{1}{d}\frac{\Delta[\text{D}]}{\Delta t}
\]

The **minus signs** on the reactant terms make those changes positive (reactant concentrations fall, so \(\Delta[\text{A}] < 0\)); the **\(1/\text{coefficient}\) factors** make every species report the same numerical rate. Without them, \(\text{H}_2\) would appear to react three times faster than \(\text{N}_2\) in ammonia synthesis even though they are part of the same reaction.

### Average rate vs. instantaneous rate

An **average rate** is measured over a finite interval: \(\text{rate} = |\Delta[\text{A}]/\Delta t|\) between two times. On a plot of concentration vs. time, it is the slope of the **secant line** connecting the two points. An **instantaneous rate** is the slope of the **tangent line** at a single time — the limit of the average rate as the interval shrinks to zero. The **initial rate** is the instantaneous rate at \(t = 0\), measured when concentrations are still at their starting values; it is the cleanest measurement because no products have accumulated to interfere, and it is the value used to determine rate laws.

### Why rates change as a reaction proceeds

Reactant concentrations fall as the reaction runs, so collisions between reactant particles become less frequent and the rate decreases with time. A concentration-vs-time curve therefore starts steep and flattens as it approaches the equilibrium or completion concentration — the slope of the tangent (the instantaneous rate) decreases continuously. The rate you report must always name its time (or explicitly be the initial rate), because the same reaction has many different instantaneous rates over its lifetime.

## ELI-10: Explain Like I'm 10

> A reaction rate is just a speed for chemistry — how much of a substance changes each second, like counting how many cookies disappear from the jar per minute. Early on, the jar is full and cookies vanish fast; later, fewer cookies remain and they vanish more slowly. The "rate" at any moment is how fast the pile is changing right then, and if you watch two different ingredients, their changes follow the recipe's numbers.

## High-Yield Points

- Rate = change in concentration per unit time; units \(\text{M s}^{-1}\).
- Reactants get a **minus sign** (their concentrations decrease); products get a **plus sign**.
- Divide each species' rate by its **stoichiometric coefficient** so all species report one reaction rate.
- Average rate = secant slope over an interval; instantaneous rate = tangent slope at a point; initial rate = instantaneous rate at \(t = 0\).
- Rates slow over time because reactant concentrations (and collision frequencies) fall.
- The initial rate is measured at \(t = 0\) and is the standard tool for determining rate laws.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Reaction rate | Change in concentration of a reactant or product per unit time | The central quantity of kinetics; how fast chemistry happens |
| Average rate | Rate over a finite time interval; secant slope | Useful for rough comparisons; what you can measure directly from two data points |
| Instantaneous rate | Rate at a single instant; tangent slope | The true rate at a given moment; needed for rate laws |
| Initial rate | Instantaneous rate at \(t = 0\) | The cleanest measurement for determining reaction orders |
| Rate expression | The stoichiometrically balanced way of writing a reaction's rate | Ensures every species gives the same numerical rate |
| Molarity | Concentration in moles per liter (\(\text{mol L}^{-1}\)) | The standard concentration unit in rate calculations |
| Secant line | Straight line through two points on a curve | Its slope is the average rate between those points |
| Tangent line | Line touching a curve at one point with the curve's local slope | Its slope is the instantaneous rate at that point |

## Worked Examples

### Example 1: Relating rates through the balanced equation

Ammonia forms from nitrogen and hydrogen:

\[
\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3
\]

If hydrogen is consumed at \(0.12\ \text{M s}^{-1}\) (\(\Delta[\text{H}_2]/\Delta t = -0.12\ \text{M s}^{-1}\)), find the rate of the reaction, the rate of \(\text{N}_2\) consumption, and the rate of \(\text{NH}_3\) formation.

**Step 1 — Write the rate expression:**

\[
\text{rate} = -\frac{\Delta[\text{N}_2]}{\Delta t}
= -\frac{1}{3}\frac{\Delta[\text{H}_2]}{\Delta t}
= \frac{1}{2}\frac{\Delta[\text{NH}_3]}{\Delta t}
\]

**Step 2 — Compute the reaction rate from the hydrogen data:**

\[
\text{rate} = -\frac{1}{3}(-0.12\ \text{M s}^{-1}) = +0.040\ \text{M s}^{-1}
\]

**Step 3 — Solve for the other species:**

\[
-\frac{\Delta[\text{N}_2]}{\Delta t} = 0.040\ \text{M s}^{-1}
\quad\Rightarrow\quad
\frac{\Delta[\text{N}_2]}{\Delta t} = -0.040\ \text{M s}^{-1}
\]

\[
\frac{1}{2}\frac{\Delta[\text{NH}_3]}{\Delta t} = 0.040\ \text{M s}^{-1}
\quad\Rightarrow\quad
\frac{\Delta[\text{NH}_3]}{\Delta t} = 0.080\ \text{M s}^{-1}
\]

Check: \(\text{N}_2\) is consumed one-third as fast as \(\text{H}_2\) (coefficients 1 vs. 3) and \(\text{NH}_3\) forms twice as fast as \(\text{N}_2\) is consumed (coefficients 2 vs. 1) — the numbers match the stoichiometry.

### Example 2: Average rate from two data points

A reactant A is at 0.500 M at \(t = 0\) and 0.350 M at \(t = 120\ \text{s}\). What is the average rate of consumption of A over this interval?

**Step 1 — Write the average-rate formula:**

\[
\text{average rate} = -\frac{\Delta[\text{A}]}{\Delta t}
\]

**Step 2 — Substitute the data:**

\[
\text{average rate} = -\frac{(0.350 - 0.500)\ \text{M}}{120\ \text{s}}
= \frac{0.150\ \text{M}}{120\ \text{s}}
= 1.25 \times 10^{-3}\ \text{M s}^{-1}
\]

Dimensional check: \(\text{M}/\text{s} = \text{M s}^{-1}\). The minus sign converts the falling concentration into a positive rate. Note this is an *average* over two minutes — the instantaneous rate at \(t = 0\) would be larger, because the reaction is fastest at the start.

### Example 3: Estimating the initial rate from early data

For the same reaction, \(\text{[A]} = 0.500\ \text{M}\) at \(t = 0\) and \(\text{[A]} = 0.480\ \text{M}\) at \(t = 5.0\ \text{s}\). Estimate the initial rate.

**Step 1 — Use a short early interval as an approximation of the tangent slope:**

\[
\text{initial rate} \approx -\frac{(0.480 - 0.500)\ \text{M}}{5.0\ \text{s}}
= \frac{0.020\ \text{M}}{5.0\ \text{s}}
= 4.0 \times 10^{-3}\ \text{M s}^{-1}
\]

This short-interval estimate (about 3× the two-minute average) correctly captures that the reaction is fastest near \(t = 0\). On a graph, this is the slope of the tangent drawn at the origin, while Example 2's value is the slope of the secant between two later points.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Rate of reaction | Rate of change of one species | Coefficients matter: \(\text{NH}_3\) forms at 0.080 M s⁻¹ while the reaction rate is 0.040 M s⁻¹ in Example 1 |
| A negative \(\Delta[\text{reactant}]\) | A negative rate | \(\Delta[\text{A}]\) is negative for reactants, but the reported rate is positive; the minus sign in the formula fixes the sign |
| Average rate | Instantaneous rate | Average is a secant over an interval; instantaneous is a tangent at one point; they agree only as the interval approaches zero |
| Rate | Rate constant \(k\) | Rate changes as concentrations change; \(k\) is constant at fixed temperature (topic: Rate Laws) |
| Speed of reaction from coefficients | Rate measured from data | Coefficients set the *ratios* between species' rates; they do not by themselves tell you the numerical speed |
| Fast reaction | Spontaneous reaction | Thermodynamics (spontaneity) and kinetics (speed) are independent: a spontaneous reaction can be extremely slow (diamond → graphite) |

## Quick Review

1. Write the rate expression for \(2\text{NO} + \text{O}_2 \rightarrow 2\text{NO}_2\) in terms of all three species.
2. If \(\text{O}_2\) is consumed at \(0.050\ \text{M s}^{-1}\) in the reaction above, how fast does \(\text{NO}_2\) form?
3. What is the difference between a secant-line slope and a tangent-line slope on a concentration-vs-time graph?
4. Why does a reaction's instantaneous rate decrease over time?
5. A reactant falls from 0.800 M to 0.600 M in 100 s. What is the average rate?
6. Why is the initial rate preferred for measuring reaction orders?

<details>
<summary>Show answers</summary>

1. \(\text{rate} = -\frac{1}{2}\frac{\Delta[\text{NO}]}{\Delta t} = -\frac{\Delta[\text{O}_2]}{\Delta t} = \frac{1}{2}\frac{\Delta[\text{NO}_2]}{\Delta t}\).
2. \(0.100\ \text{M s}^{-1}\) — twice the \(\text{O}_2\) rate because the coefficient ratio is 2:1.
3. A secant connects two points and gives the average rate over the interval; a tangent touches at one point and gives the instantaneous rate there.
4. Reactant concentrations fall as the reaction proceeds, so collisions between reactant particles become less frequent and the rate slows.
5. \(\text{rate} = -(0.600 - 0.800)/100 = 2.0 \times 10^{-3}\ \text{M s}^{-1}\).
6. At \(t = 0\) the concentrations are the known starting values and no products have built up to interfere, so the measured rate can be directly compared with initial concentrations to determine orders.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Factors Affecting Reaction Rates](02-factors-affecting-reaction-rates.md)
- Related: [Rate Laws](03-rate-laws.md) — the rate's dependence on concentration is expressed as a rate law
- Related: [Integrated Rate Laws](04-integrated-rate-laws.md) — concentration as a function of time, built from these rate definitions
- Related: [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
