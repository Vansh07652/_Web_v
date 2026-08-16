---
title: "Chemical Reaction Rates"
subject: "Science"
book: "Chemistry 2e"
chapter: "12: Kinetics"
topic_number: "1"
source: "chemistry-2e.md"
tags:
  - "chemical-reaction-rates"
  - "science"
status: "complete"
---

# Chemical Reaction Rates

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 12: Kinetics](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Chemical kinetics asks not whether a reaction is favorable, but **how quickly it occurs**. A chemical reaction rate is the change in amount or concentration of a reactant or product during a stated time interval.

For solution reactions, chemists usually track **molar concentration**. Reactant concentrations fall, product concentrations rise, and rate units are concentration per time, commonly mol L⁻¹ s⁻¹ (M s⁻¹). By convention rates are positive, so a minus sign is placed before a reactant’s concentration change.

## Why This Matters

Rates help chemists decide whether a process is useful, safe, or controllable. Drug stability, industrial production, and pollutant modeling all depend on them. Rate data also underpin later kinetic ideas: rate laws, temperature effects, and reaction mechanisms.

## Core Concepts

### Rate is a change divided by a time interval

For a species A, its average rate of concentration change over a time interval is \(\Delta[A]/\Delta t\). If A is consumed, the positive **average rate of disappearance** is:

\[
-\frac{\Delta[A]}{\Delta t}
\]

If P is produced, its positive **average rate of appearance** is:

\[
\frac{\Delta[P]}{\Delta t}
\]

The word *average* is essential. It describes the slope of a line joining two points on a concentration-versus-time graph. A reaction often slows as reactants are depleted, so this one number does not necessarily describe what happens at every moment in the interval.

### Instantaneous rate comes from the graph at one moment

The **instantaneous rate** is the rate at one particular time: the slope of the tangent line to a concentration-time curve. In calculus notation, the disappearance rate of A is \(-d[A]/dt\). A steep curve has a large rate magnitude; a nearly horizontal curve changes little per second. Estimate it from a tangent line or very close data points.

### One reaction has stoichiometrically related rates

Concentrations do not always change at equal numerical rates. Consider:

\[
2\text{N}_2\text{O}_5 \rightarrow 4\text{NO}_2 + \text{O}_2
\]

Every 2 moles of N₂O₅ consumed yield 4 moles of NO₂ and 1 mole of O₂. In a fixed-volume system, concentration changes reflect those coefficients. Define one **reaction rate** by dividing each species rate by its coefficient:

\[
\text{rate}=-\frac{1}{2}\frac{\Delta[\text{N}_2\text{O}_5]}{\Delta t}
=\frac{1}{4}\frac{\Delta[\text{NO}_2]}{\Delta t}
=\frac{\Delta[\text{O}_2]}{\Delta t}
\]

This normalization makes every correct description agree. Use coefficients from the **balanced equation**, not formula subscripts. Concentration may be measured indirectly through color, gas pressure, turbidity, or pH when its quantitative relation to a species is known.

## ELI-10: Explain Like I’m 10

> A reaction rate tells how fast ingredients are being used up or new substances are being made. If a baking-soda reaction makes bubbles quickly, its gas-making rate is high; if it makes only a few bubbles each minute, the rate is low. The recipe numbers matter: if one reaction event makes two bubbles’ worth of one product for every one of another, their amounts cannot increase at the same speed.

## High-Yield Points

- Rate means **change per unit time**, not simply how much product is present.
- Reactant concentration decreases, so include a minus sign when reporting its positive disappearance rate.
- Average rate uses two times; instantaneous rate is the slope at one time.
- Use stoichiometric coefficients to convert an individual species rate into the common reaction rate.
- Concentration-time data describe kinetics; they do not by themselves reveal the molecular pathway.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| chemical reaction rate | The change in concentration of a reactant or product per unit time, expressed for a specified reaction or species | Converts qualitative "fast/slow" observations into comparable numbers with units like M s⁻¹ |
| average rate | The concentration change over a finite interval divided by the length of that interval | The practical rate you can compute from two data points; describes the whole interval, not any single moment |
| instantaneous rate | The rate at one particular moment; the tangent slope of a concentration-time graph | The rate that matters at a specific time, e.g., at the start of a reaction |
| rate of disappearance | A positive expression for reactant consumption, \(-\Delta[\text{reactant}]/\Delta t\) | Lets you report reactant loss as a positive number despite a falling concentration |
| rate of appearance | A positive expression for product formation, \(\Delta[\text{product}]/\Delta t\) | Lets you track product gain on the same positive scale |
| stoichiometric coefficient | The balanced-equation number that gives the mole ratio among reacting species | The conversion factor that ties all species' rates to one common reaction rate |

## How It Works / Step-by-Step Process

1. Write the balanced chemical equation and identify the measured species.
2. Record its concentration (or a measurement calibrated to concentration) at two stated times.
3. Calculate \(\Delta[\text{species}] = [\text{species}]_\text{final}-[\text{species}]_\text{initial}\), then divide by \(\Delta t\).
4. Add a negative sign for a reactant if reporting a positive disappearance rate.
5. If the question asks for the reaction rate or another species’ rate, use the balanced coefficients to convert it and retain M s⁻¹ units.

## Example: Converting a Reactant Rate to Product Rates

For \(2\text{N}_2\text{O}_5 \rightarrow 4\text{NO}_2 + \text{O}_2\), suppose [N₂O₅] drops from 0.100 M to 0.070 M in 20.0 s. Its concentration change is \(-0.030\) M, so its average disappearance rate is \(1.5\times10^{-3}\ \text{M s}^{-1}\).

This is not yet the normalized reaction rate: divide by N₂O₅'s coefficient, 2, to obtain \(7.5\times10^{-4}\ \text{M s}^{-1}\). O₂ has coefficient 1, so it appears at that rate. NO₂ has coefficient 4 and appears at \(3.0\times10^{-3}\ \text{M s}^{-1}\), twice the N₂O₅ disappearance rate, as the equation requires.

## Worked Example: Relating Appearance and Disappearance Rates

For the decomposition of hydrogen peroxide,

\[
2\text{H}_2\text{O}_2(aq) \rightarrow 2\text{H}_2\text{O}(l) + \text{O}_2(g)
\]

suppose oxygen gas appears at \(1.20\times10^{-4}\ \text{M s}^{-1}\). What is the rate of disappearance of H₂O₂?

**Write the relationship first.** Each species rate is divided by its coefficient, and all are equal:

\[
\text{rate} = -\frac{1}{2}\frac{\Delta[\text{H}_2\text{O}_2]}{\Delta t} = \frac{\Delta[\text{O}_2]}{\Delta t}
\]

**Substitute the known appearance rate.** Since the O₂ coefficient is 1, the reaction rate equals \(1.20\times10^{-4}\ \text{M s}^{-1}\). Now solve for the H₂O₂ disappearance rate:

\[
-\frac{\Delta[\text{H}_2\text{O}_2]}{\Delta t} = 2 \times (1.20\times10^{-4}\ \text{M s}^{-1}) = 2.40\times10^{-4}\ \text{M s}^{-1}
\]

H₂O₂ disappears twice as fast as O₂ appears because two moles of H₂O₂ are consumed for each mole of O₂ formed. The units check: multiplying \(\text{M s}^{-1}\) by the dimensionless coefficient ratio (2 mol H₂O₂ / 1 mol O₂) leaves \(\text{M s}^{-1}\).

## Common Confusions

| Common confusion | Correct understanding |
|---|---|
| “A negative reactant slope means the reaction rate is negative.” | It means reactant concentration is falling. The conventional rate of disappearance and the reaction rate are reported as positive. |
| “All species have the same concentration change per second.” | Their changes are proportional to balanced coefficients; only coefficient-normalized expressions are equal. |
| “A fast reaction must release much energy.” | Speed and energy change are different properties. A thermodynamically favorable reaction can still be very slow. |
| “One average rate describes the entire reaction.” | It only describes the selected interval. Use instantaneous rates when behavior at a particular time matters. |

## Quick Review

1. What does the unit M s⁻¹ communicate about a reaction rate?
2. Why is a minus sign used in \(-\Delta[A]/\Delta t\) for a reactant A?
3. For \(3A \rightarrow 2B\), if A disappears at \(0.060\ \text{M s}^{-1}\), what are the reaction rate and B appearance rate?
4. How can you distinguish an average rate from an instantaneous rate on a graph?
5. Name one measurement other than concentration that can be used to follow a reaction and explain what must be known.

<details>
<summary>Show answers</summary>

1. It reports how many moles per liter change each second.
2. Because \(\Delta[A]\) is negative as A is consumed; the minus sign makes the disappearance rate positive.
3. The reaction rate is \((1/3)(0.060)=0.020\ \text{M s}^{-1}\). B appears at \(2(0.020)=0.040\ \text{M s}^{-1}\).
4. Average rate is a secant-line slope between two times; instantaneous rate is the tangent-line slope at one time.
5. Gas pressure or volume, color intensity, turbidity, or pH may work, provided it has a known quantitative relationship to the amount of a reacting species.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Factors Affecting Reaction Rates](02-factors-affecting-reaction-rates.md)
- Related: [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
