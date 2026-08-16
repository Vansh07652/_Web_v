---
title: "The Second and Third Laws of Thermodynamics"
subject: "Science"
book: "Chemistry 2e"
chapter: "16: Thermodynamics"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "the-second-and-third-laws-of-thermodynamics"
  - "science"
status: "complete"
---

# The Second and Third Laws of Thermodynamics

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 16: Thermodynamics](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

The first law of thermodynamics states that energy is conserved — but it says nothing about *direction*. A cup of hot coffee cools spontaneously, yet the reverse process (the room warming the coffee further) never happens even though both directions conserve energy. The **second law** supplies the missing direction: in any spontaneous process, the total entropy of the universe increases. The **third law** gives entropy an absolute zero point, letting chemists tabulate actual (not relative) entropy values and calculate reaction entropy changes.

Together these laws turn "spontaneous" into something you can compute. A process is spontaneous if the entropy of the universe increases, \(\Delta S_{\text{univ}} > 0\). Because the universe is the system plus its surroundings, \(\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} > 0\). This topic shows how to evaluate both terms — the system's entropy change from tabulated standard entropies, and the surroundings' entropy change from the heat the process releases or absorbs.

## Why This Matters

- **Predicting spontaneity without running the reaction:** If you can calculate \(\Delta S_{\text{univ}}\), you can predict whether a reaction will proceed on its own — a huge shortcut.
- **Every real engine and refrigerator obeys it:** No engine converts heat completely into work (the second law in its Kelvin–Planck form), setting real efficiency limits on power plants and car engines.
- **Phase changes and biological processes:** Melting, boiling, dissolving, and even protein folding are governed by the balance between system and surroundings entropy.
- **Foundation for free energy:** The next topic defines Gibbs free energy as a convenient repackaging of \(\Delta S_{\text{univ}}\) — master this and the next topic is mostly algebra.
- **Exams:** Expect to calculate \(\Delta S^\circ_{\text{rxn}}\) from standard molar entropies, compute \(\Delta S_{\text{surr}} = -\Delta H_{\text{sys}}/T\), and justify spontaneity with signs.

## Core Concepts

### The second law: entropy of the universe increases

For any spontaneous process,

\[
\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} > 0
\]

At equilibrium the process is reversible and \(\Delta S_{\text{univ}} = 0\). Two classic statements capture the same idea: heat flows spontaneously from hot to cold bodies (Clausius), and it is impossible to convert heat completely into work in a cyclic process (Kelvin–Planck). Note that \(\Delta S_{\text{sys}}\) alone can be negative — the system can become more ordered — as long as the surroundings gain enough entropy to keep the total positive.

### The entropy change of the surroundings

At constant temperature and pressure, the surroundings exchange heat equal in magnitude but opposite in sign to the system's enthalpy change:

\[
\Delta S_{\text{surr}} = -\frac{\Delta H_{\text{sys}}}{T}
\]

An exothermic reaction (\(\Delta H_{\text{sys}} < 0\)) dumps heat into the surroundings, increasing their entropy; the minus sign makes \(\Delta S_{\text{surr}}\) positive. An endothermic reaction cools its surroundings, so \(\Delta S_{\text{surr}} < 0\). This formula is why enthalpy data feed into spontaneity predictions.

### Entropy changes at phase transitions

At the transition temperature, the system and surroundings are in equilibrium, so

\[
\Delta S_{\text{trans}} = \frac{\Delta H_{\text{trans}}}{T_{\text{trans}}}
\]

Melting and boiling both increase entropy (disorder grows), so both have positive \(\Delta S\) at the transition temperature. Boiling produces a much larger entropy increase than melting because a gas has vastly more accessible microstates than a liquid.

### The third law and standard molar entropies

The third law states that the entropy of a perfectly ordered crystalline substance approaches zero as the temperature approaches absolute zero:

\[
\lim_{T \to 0} S = 0
\]

This gives entropy an absolute scale, unlike enthalpy, which is only known relative to formation from elements. Standard molar entropy \(S^\circ\) is the entropy of one mole of a pure substance in its standard state at a specified temperature (usually 298 K), with units J/(mol·K). Elements in their standard states have **nonzero** standard entropies — a key difference from \(\Delta H^\circ_f\) and \(\Delta G^\circ_f\), which are zero for elements.

### Calculating \(\Delta S^\circ_{\text{rxn}}\)

For a reaction \(\text{aA} + \text{bB} \rightarrow \text{cC} + \text{dD}\):

\[
\Delta S^\circ_{\text{rxn}} = \sum n S^\circ(\text{products}) - \sum m S^\circ(\text{reactants})
\]

Useful trends for sign checks: forming gases increases entropy; reactions that reduce the number of gas moles typically have negative \(\Delta S^\circ\); larger, more complex molecules have higher standard entropies.

## ELI-10: Explain Like I'm 10

> The second law says that messiness (entropy) always increases in the universe when something happens by itself. Your messy room gets messier unless you clean it — cleaning takes energy. The third law says that if you cool a perfect crystal all the way to absolute zero, it has zero messiness, which gives scientists a starting point to measure how messy every substance is.

## High-Yield Points

- Spontaneity requires \(\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} > 0\); equilibrium means \(\Delta S_{\text{univ}} = 0\).
- \(\Delta S_{\text{surr}} = -\Delta H_{\text{sys}}/T\): exothermic reactions increase surroundings entropy; endothermic reactions decrease it.
- At a phase transition, \(\Delta S_{\text{trans}} = \Delta H_{\text{trans}}/T_{\text{trans}}\); melting and boiling both give positive \(\Delta S\).
- The third law assigns \(S = 0\) to a perfect crystal at 0 K, making standard molar entropies absolute values in J/(mol·K).
- \(\Delta S^\circ_{\text{rxn}} = \Sigma nS^\circ(\text{products}) - \Sigma mS^\circ(\text{reactants})\); elements do **not** have zero \(S^\circ\).
- Gases have much larger entropies than liquids or solids; a decrease in gas moles usually means \(\Delta S^\circ < 0\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| second law of thermodynamics | In any spontaneous process, the entropy of the universe increases. | Gives direction to energy changes; defines spontaneity quantitatively. |
| standard molar entropy, \(S^\circ\) | Entropy of one mole of a substance in its standard state at a stated temperature, in J/(mol·K). | The raw material for calculating \(\Delta S^\circ_{\text{rxn}}\). |
| surroundings entropy change, \(\Delta S_{\text{surr}}\) | Entropy change of everything outside the system, set by heat exchange: \(-\Delta H_{\text{sys}}/T\). | Determines whether a system's own entropy drop is "paid for." |
| spontaneous process | A process that proceeds without outside intervention once started. | The central prediction this topic enables. |

## How It Works / Step-by-Step Process

1. Write the balanced chemical equation and note the physical states.
2. Decide which term you need: \(\Delta S_{\text{sys}}\) from tabulated \(S^\circ\) values, \(\Delta S_{\text{surr}}\) from \(\Delta H_{\text{sys}}\) and \(T\), or both for \(\Delta S_{\text{univ}}\).
3. For \(\Delta S^\circ_{\text{rxn}}\), multiply each substance's \(S^\circ\) by its stoichiometric coefficient, sum products, subtract sum of reactants.
4. Keep units consistent: \(S^\circ\) is in J/(mol·K), so \(\Delta H\) must be converted to joules before using \(\Delta S_{\text{surr}} = -\Delta H/T\).
5. Check the sign against a physical trend (gas moles, phase changes) before trusting the arithmetic.

## Worked Examples

### Example 1: \(\Delta S^\circ_{\text{rxn}}\) for ammonia synthesis

Synthesizing ammonia, \(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\), is exothermic and industrially vital. Use standard molar entropies \(S^\circ(\text{N}_2) = 191.6\ \text{J/(mol·K)}\), \(S^\circ(\text{H}_2) = 130.7\ \text{J/(mol·K)}\), \(S^\circ(\text{NH}_3) = 192.8\ \text{J/(mol·K)}\).

**Formula:**

\[
\Delta S^\circ_{\text{rxn}} = \sum n S^\circ(\text{products}) - \sum m S^\circ(\text{reactants})
\]

**Substitution:**

\[
\Delta S^\circ_{\text{rxn}} = 2(192.8) - [1(191.6) + 3(130.7)]\ \text{J/(mol·K)}
\]

\[
\Delta S^\circ_{\text{rxn}} = 385.6 - 583.7 = -198.1\ \text{J/(mol·K)}
\]

The negative value makes sense: four moles of gas become two moles of gas, so the system becomes more ordered. Whether the reaction is spontaneous depends on whether the surroundings' entropy gain from the released heat outweighs this drop — exactly the calculation previewed above and formalized in the free-energy topic.

### Example 2: Melting ice at 0 °C

Ice melts at 273.15 K with \(\Delta H_{\text{fus}} = 6.01\ \text{kJ/mol}\). Find the entropy change of the system at the transition.

**Formula:**

\[
\Delta S_{\text{fus}} = \frac{\Delta H_{\text{fus}}}{T_{\text{fus}}}
\]

**Substitution** (converting kJ to J for unit consistency):

\[
\Delta S_{\text{fus}} = \frac{6.01 \times 10^3\ \text{J/mol}}{273.15\ \text{K}} = 22.0\ \text{J/(mol·K)}
\]

Compare with vaporizing water at 373.15 K: \(\Delta S_{\text{vap}} = 40.7 \times 10^3 / 373.15 = 109.1\ \text{J/(mol·K)}\) — nearly five times more entropy than melting, the hallmark of a gas's enormous number of accessible microstates. At the melting point the process is at equilibrium (\(\Delta S_{\text{univ}} = 0\)); slightly above it, melting is spontaneous; slightly below, freezing is.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| \(\Delta S_{\text{sys}} < 0\) | "The process is nonspontaneous." | The system can become more ordered as long as \(\Delta S_{\text{surr}}\) is positive enough that \(\Delta S_{\text{univ}} > 0\). |
| Standard molar entropy \(S^\circ\) | Standard enthalpy of formation \(\Delta H^\circ_f\) | \(S^\circ\) values are absolute (elements have nonzero values); \(\Delta H^\circ_f = 0\) for elements in standard states. |
| Melting point entropy | Boiling point entropy | Vaporization gives a much larger \(\Delta S\) (gas microstates) than fusion. |
| "Spontaneous means fast." | "Spontaneous means thermodynamically favored." | Spontaneity says nothing about rate; thermodynamics and kinetics are separate. |
| Using \(\Delta S_{\text{surr}} = -\Delta H/T\) with kJ | Mixing units | \(\Delta H\) must be in joules to match J/(mol·K) entropies. |

## Quick Review

1. State the second law in terms of the entropy of the universe, and give the equality condition.
2. A reaction is exothermic with \(\Delta H_{\text{sys}} = -50\ \text{kJ}\) at 298 K. What is \(\Delta S_{\text{surr}}\)?
3. Why is \(\Delta S^\circ_{\text{rxn}}\) for \(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\) negative, and how is that possible for a spontaneous process at 298 K?
4. What does the third law provide that enthalpy data cannot?
5. Which has the larger entropy change at its transition temperature: melting or boiling water? Why?

<details>
<summary>Show answers</summary>

1. \(\Delta S_{\text{univ}} > 0\) for any spontaneous process; \(\Delta S_{\text{univ}} = 0\) at equilibrium (reversible process).
2. \(\Delta S_{\text{surr}} = -(-50,000\ \text{J})/298\ \text{K} = +168\ \text{J/K}\). The released heat increases the surroundings' entropy.
3. Four moles of gas become two (\(\Delta S^\circ_{\text{rxn}} = -198.1\ \text{J/(mol·K)}\)), so the system's entropy falls — but the exothermic heat release raises \(\Delta S_{\text{surr}}\) enough that \(\Delta S_{\text{univ}} > 0\) at moderate temperatures.
4. An absolute entropy scale: \(S^\circ\) values are real, measurable quantities, not differences relative to elements.
5. Boiling: \(\Delta S_{\text{vap}} \approx 109\ \text{J/(mol·K)}\) versus \(\Delta S_{\text{fus}} \approx 22\ \text{J/(mol·K)}\), because gases have far more accessible microstates than liquids.

</details>

## Related Topics

- Previous: [Entropy](02-entropy.md)
- Next: [Free Energy](04-free-energy.md)
- Related: [Spontaneity](01-spontaneity.md)
- Related: [Thermodynamics chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
