---
title: "Free Energy"
subject: "Science"
book: "Chemistry 2e"
chapter: "16: Thermodynamics"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "free-energy"
  - "science"
status: "complete"
---

# Free Energy

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 16: Thermodynamics](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

The second law gives the complete condition for spontaneity, \(\Delta S_{\text{univ}} > 0\), but it is awkward because it requires tracking both the system and its surroundings. **Gibbs free energy**, defined as \(G = H - TS\), packages the same information into a property of the system alone. At constant temperature and pressure — the conditions of most chemical reactions — the change in free energy is

\[
\Delta G = \Delta H - T\Delta S
\]

The sign of \(\Delta G\) gives the direction: negative means the forward reaction is spontaneous, positive means the reverse is favored, zero means equilibrium. Because \(\Delta H\) and \(\Delta S\) both appear, free energy reconciles enthalpy and entropy effects: an endothermic reaction can still be spontaneous if its entropy gain is large enough.

Free energy also connects thermodynamics to equilibrium: under standard conditions, \(\Delta G^\circ\) determines the equilibrium constant through \(\Delta G^\circ = -RT\ln K\), and the temperature dependence of \(\Delta G\) explains why some reactions switch direction as temperature changes.

## Why This Matters

- **One number, one answer:** \(\Delta G\) collapses "system plus surroundings" into a single sign you can compute from tabulated data.
- **Engineering and industry:** Knowing how \(\Delta G\) changes with temperature lets engineers choose conditions that push a reaction the wanted way.
- **Biochemistry and medicine:** Cells run on coupled reactions — ATP hydrolysis drives otherwise nonspontaneous reactions like protein synthesis and muscle contraction.
- **Batteries and corrosion:** Electrochemistry uses the relationship between free energy and cell potential to predict how much electrical work a battery can do.
- **Exams:** Expect to compute \(\Delta G^\circ\) from formation values or from \(\Delta H^\circ\) and \(\Delta S^\circ\), and to relate \(\Delta G^\circ\) to \(K\).

## Core Concepts

### What "free" means

The Gibbs free energy \(G = H - TS\) represents the maximum useful (non-expansion) work a process can perform at constant temperature and pressure. "Free" means available for work; the rest is tied up in entropy costs. For a process at constant \(T\),

\[
\Delta G = \Delta H - T\Delta S
\]

with all quantities for the system. This is the central equation of the topic.

### Spontaneity by sign

- \(\Delta G < 0\): the forward process is spontaneous (thermodynamically favored).
- \(\Delta G > 0\): the reverse process is spontaneous; the forward direction requires energy input.
- \(\Delta G = 0\): the system is at equilibrium.

Because \(\Delta G\) carries both terms, it resolves apparent paradoxes: ice melting above 0 °C is endothermic (\(\Delta H > 0\)) yet spontaneous because \(T\Delta S\) outweighs \(\Delta H\).

### Standard free energy of formation

Standard free energies of formation, \(\Delta G^\circ_f\), are tabulated for pure substances in standard states (commonly 1 atm, 298 K). By convention, \(\Delta G^\circ_f = 0\) for elements in their standard states. For a reaction,

\[
\Delta G^\circ_{\text{rxn}} = \sum n\Delta G^\circ_f(\text{products}) - \sum m\Delta G^\circ_f(\text{reactants})
\]

### Temperature dependence: the four cases

Because \(\Delta G = \Delta H - T\Delta S\), the signs of \(\Delta H\) and \(\Delta S\) decide how temperature changes the outcome:

| \(\Delta H\) | \(\Delta S\) | Behavior |
|---|---|---|
| negative | positive | Spontaneous at all temperatures |
| positive | negative | Nonspontaneous at all temperatures |
| negative | negative | Spontaneous at low \(T\) only |
| positive | positive | Spontaneous at high \(T\) only |

The crossover temperature (where \(\Delta G = 0\), i.e., equilibrium) is

\[
T = \frac{\Delta H}{\Delta S}
\]

assuming \(\Delta H\) and \(\Delta S\) are roughly constant over the temperature range.

### Free energy and equilibrium

Under standard conditions, the equilibrium constant \(K\) relates to \(\Delta G^\circ\):

\[
\Delta G^\circ = -RT\ln K
\]

A very negative \(\Delta G^\circ\) corresponds to a large \(K\) (products favored); a very positive one to a small \(K\). For nonstandard conditions, \(\Delta G = \Delta G^\circ + RT\ln Q\), where \(Q\) is the reaction quotient from the equilibrium chapter.

## ELI-10: Explain Like I'm 10

> Free energy is like a "spontaneity score" for a reaction. It combines whether the reaction gives off energy (a ball rolling downhill) and whether it makes more disorder (scattering LEGO bricks). Negative score: the reaction happens on its own. Positive: you have to push it. Zero: balanced like a seesaw.

## High-Yield Points

- \(\Delta G = \Delta H - T\Delta S\); \(\Delta G < 0\) spontaneous, \(> 0\) nonspontaneous, \(= 0\) equilibrium.
- \(\Delta G^\circ_{\text{rxn}} = \Sigma n\Delta G^\circ_f(\text{products}) - \Sigma m\Delta G^\circ_f(\text{reactants})\); elements have \(\Delta G^\circ_f = 0\).
- \(\Delta G^\circ = -RT\ln K\): negative \(\Delta G^\circ\) means large \(K\); positive means small \(K\).
- Crossover temperature \(T = \Delta H/\Delta S\) marks where a reaction switches spontaneity (when signs of \(\Delta H\) and \(\Delta S\) match).
- When \(\Delta H\) and \(\Delta S\) have opposite signs, temperature does not change the direction of spontaneity.
- \(\Delta G\) says nothing about rate: a spontaneous reaction can be imperceptibly slow (diamond → graphite).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Gibbs free energy, \(G\) | \(H - TS\); energy available to do useful work at constant \(T\), \(P\). | Its sign predicts spontaneity from system properties alone. |
| standard free energy of formation, \(\Delta G^\circ_f\) | Free energy change when one mole of a compound forms from its elements in standard states. | Enables tabulated-data calculation of \(\Delta G^\circ_{\text{rxn}}\). |
| standard free energy change, \(\Delta G^\circ\) | \(\Delta G\) for a reaction with all reactants and products in standard states. | Links to \(K\) and to cell potentials in electrochemistry. |
| equilibrium constant, \(K\) | Ratio of product to reactant activities at equilibrium. | \(\Delta G^\circ = -RT\ln K\) ties thermodynamics to equilibrium chemistry. |
| coupled reaction | A spontaneous reaction (e.g., ATP hydrolysis) driving a nonspontaneous one. | Explains how cells do thermodynamically uphill work. |

## How It Works / Step-by-Step Process

1. Write the balanced equation with physical states.
2. Choose a path: \(\Delta G^\circ_f\) values, \(\Delta H^\circ\)/ \(\Delta S^\circ\) with \(T\), or \(K\) via \(\Delta G^\circ = -RT\ln K\).
3. If using \(\Delta H^\circ\) and \(\Delta S^\circ\), convert \(\Delta H\) to joules to match \(T\Delta S\), then subtract.
4. Interpret the sign; for a crossover temperature, set \(\Delta G = 0\) and solve \(T = \Delta H/\Delta S\).
5. For equilibrium questions, use \(K = e^{-\Delta G^\circ/(RT)}\) with \(R = 8.314\ \text{J/(mol·K)}\) and \(T\) in kelvin.

## Worked Examples

### Example 1: \(\Delta G^\circ\) from formation values

For the oxidation of nitrogen monoxide, \(2\text{NO}(g) + \text{O}_2(g) \rightarrow 2\text{NO}_2(g)\), use \(\Delta G^\circ_f(\text{NO}) = +86.6\ \text{kJ/mol}\) and \(\Delta G^\circ_f(\text{NO}_2) = +51.3\ \text{kJ/mol}\); oxygen (an element in its standard state) has \(\Delta G^\circ_f = 0\).

**Formula:**

\[
\Delta G^\circ_{\text{rxn}} = \sum n\Delta G^\circ_f(\text{products}) - \sum m\Delta G^\circ_f(\text{reactants})
\]

**Substitution:**

\[
\Delta G^\circ_{\text{rxn}} = 2(+51.3) - [2(+86.6) + 1(0)] = 102.6 - 173.2 = -70.6\ \text{kJ}
\]

\(\Delta G^\circ < 0\): the reaction is spontaneous under standard conditions — which is why NO is thermodynamically unstable toward oxidation in air.

### Example 2: Crossover temperature

A reaction has \(\Delta H^\circ = +177.8\ \text{kJ}\) and \(\Delta S^\circ = +160.5\ \text{J/K}\) (both positive — spontaneous only at high temperature). Find the temperature above which it becomes spontaneous.

**Formula:**

\[
T = \frac{\Delta H^\circ}{\Delta S^\circ}
\]

**Substitution** (converting kJ to J so units cancel):

\[
T = \frac{177.8 \times 10^3\ \text{J}}{160.5\ \text{J/K}} = 1108\ \text{K}
\]

Above ~1108 K, \(\Delta G < 0\) and the reaction proceeds; below it, the reverse is favored.

### Example 3: \(\Delta G^\circ\) from \(K\)

A reaction has \(K = 1.5 \times 10^{10}\) at 298 K. Find \(\Delta G^\circ\).

**Formula:**

\[
\Delta G^\circ = -RT\ln K
\]

**Substitution:**

\[
\Delta G^\circ = -(8.314\ \text{J/(mol·K)})(298\ \text{K})\ln(1.5 \times 10^{10})
\]

\[
\Delta G^\circ = -(2478\ \text{J/mol})(23.4) = -5.8 \times 10^4\ \text{J/mol} = -58\ \text{kJ/mol}
\]

A large \(K\) means a strongly negative \(\Delta G^\circ\) — products dominate.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| \(\Delta G < 0\) | "The reaction is fast." | Thermodynamic favorability says nothing about rate; kinetics governs speed. |
| \(\Delta G\) | \(\Delta G^\circ\) | \(\Delta G^\circ\) is for standard-state conditions; \(\Delta G\) includes nonstandard concentrations via \(RT\ln Q\). |
| \(\Delta S^\circ = 0\) for elements | \(\Delta G^\circ_f = 0\) for elements | Elements in standard states have zero *formation* free energy but nonzero standard entropy. |
| "Endothermic = nonspontaneous" | "Endothermic reactions can be spontaneous" | If \(\Delta S > 0\) and \(T\Delta S > \Delta H\), \(\Delta G < 0\) even with \(\Delta H > 0\). |
| \(T = \Delta H/\Delta S\) always | Only when \(\Delta G = 0\) | That expression is the equilibrium/crossover temperature, valid when \(\Delta H\) and \(\Delta S\) share a sign. |

## Quick Review

1. Write the equation for \(\Delta G\) at constant temperature and state the spontaneity rule.
2. Why is \(\Delta G^\circ_f = 0\) for an element like \(\text{O}_2(g)\) in its standard state?
3. A reaction has \(\Delta H^\circ = -100\ \text{kJ}\) and \(\Delta S^\circ = +50\ \text{J/K}\). Is it spontaneous at all temperatures? Why?
4. How does a very large \(K\) (e.g., \(10^{10}\)) manifest in \(\Delta G^\circ\)?
5. What is the crossover temperature for a reaction with \(\Delta H^\circ = +200\ \text{kJ}\) and \(\Delta S^\circ = +100\ \text{J/K}\)?

<details>
<summary>Show answers</summary>

1. \(\Delta G = \Delta H - T\Delta S\); \(\Delta G < 0\) spontaneous, \(\Delta G > 0\) nonspontaneous, \(\Delta G = 0\) equilibrium.
2. By convention, the free energy of formation of an element in its standard state is defined as zero — the reference point for all \(\Delta G^\circ_f\) values.
3. Yes. \(\Delta H < 0\) and \(\Delta S > 0\) both favor spontaneity at every temperature (opposite signs of \(\Delta H\) and \(\Delta S\) make the direction temperature-independent).
4. A very large \(K\) gives a very negative \(\Delta G^\circ = -RT\ln K\), meaning products strongly dominate at equilibrium.
5. \(T = 200 \times 10^3\ \text{J} / 100\ \text{J/K} = 2000\ \text{K}\).

</details>

## Related Topics

- Previous: [The Second and Third Laws of Thermodynamics](03-the-second-and-third-laws-of-thermodynamics.md)
- Next: End of chapter
- Related: [Entropy](02-entropy.md)
- Related: [Thermodynamics chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
