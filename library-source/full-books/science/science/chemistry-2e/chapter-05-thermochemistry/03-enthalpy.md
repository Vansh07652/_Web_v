---
title: "Enthalpy"
subject: "Science"
book: "Chemistry 2e"
chapter: "5: Thermochemistry"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "enthalpy"
  - "science"
status: "complete"
---

# Enthalpy

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 5: Thermochemistry](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Enthalpy** (\(H\)) is a thermodynamic property defined as the internal energy of a system plus the pressure–volume work needed to make room for it:

\[
H = E + PV
\]

Chemists use enthalpy because of a remarkable practical fact: for any process at constant pressure — which describes most laboratory and biological chemistry, including reactions open to the atmosphere — the change in enthalpy equals the heat transferred:

\[
\Delta H = q_p
\]

So measuring heat at constant pressure directly gives the **enthalpy change**, \(\Delta H\), without ever knowing the absolute values of \(E\), \(P\), or \(V\). This topic explains what enthalpy change means, how to write **thermochemical equations**, and two tools for predicting it: **formation enthalpies** and **Hess's law**.

## Why This Matters

Enthalpy changes answer a question people ask about every reaction: does it give off or require heat, and how much? That information drives safety and design, and food energy comes from metabolic enthalpy changes. Hess's law lets chemists calculate heats of reactions that are difficult or impossible to measure directly, such as forming carbon monoxide from its elements.

## Core Concepts

### Enthalpy change: endothermic vs. exothermic

The enthalpy change of a reaction is the difference between products and reactants:

\[
\Delta H = H_{\text{products}} - H_{\text{reactants}}
\]

- If \(\Delta H < 0\), the reaction is **exothermic**: it releases heat, and the surroundings warm up.
- If \(\Delta H > 0\), the reaction is **endothermic**: it absorbs heat, and the surroundings cool down.

The sign convention is easy to invert: heat released by the system is negative for the system, even though it feels positive to your hand.

### Thermochemical equations

A **thermochemical equation** is a balanced equation that includes physical states and the enthalpy change:

\[
\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(l) \qquad \Delta H = -890.5\ \text{kJ}
\]

Three rules govern them:

- Physical states matter: different states have different enthalpies (H₂O(l) vs. H₂O(g)).
- The \(\Delta H\) value applies to the reaction exactly as written.
- If you multiply the equation by a factor, multiply \(\Delta H\) by the same factor; if you reverse the equation, change the sign of \(\Delta H\).

### Standard enthalpy of formation

The **standard enthalpy of formation** (\(\Delta H_f^\circ\)) of a compound is the enthalpy change when one mole forms from its elements in their standard states (most stable form at 1 bar and a specified temperature, usually 25 °C). By definition, \(\Delta H_f^\circ = 0\) for elements in their standard states — O₂(g), graphite, and so on. Tabulated formation values make these otherwise unmeasurable reactions known numbers.

### Hess's law: enthalpy is a state function

**Hess's law** states that a reaction's enthalpy change is the same whether it happens in one step or many, because enthalpy is a **state function** — it depends only on starting and ending states, not the path. The payoff: add, subtract, reverse, and scale known reactions to build a target reaction, doing the same to their \(\Delta H\) values. This is how heats of reactions that never run cleanly are determined.

### Computing \(\Delta H\) from formation values

The most common exam calculation uses tabulated values directly:

\[
\Delta H_{\text{rxn}}^\circ = \sum \Delta H_f^\circ(\text{products}) - \sum \Delta H_f^\circ(\text{reactants})
\]

Each term is multiplied by its coefficient from the balanced equation; forgetting this is the single most common error.

## ELI-10: Explain Like I'm 10

> Enthalpy change is the "heat receipt" of a reaction: how much heat the reaction gives off or takes in when it runs. If a reaction gives off heat, it's exothermic, like a campfire warming your hands. If it takes in heat, it's endothermic, like an ice pack getting cold as it absorbs heat. Hess's law says you can figure out the heat of a big reaction by adding up the heats of smaller steps — like knowing the total price of a shopping trip by adding up each item's receipt.

## High-Yield Points

- \(H = E + PV\); at constant pressure, \(\Delta H = q_p\) — enthalpy change is heat at constant pressure.
- Exothermic: \(\Delta H < 0\), heat released; endothermic: \(\Delta H > 0\), heat absorbed.
- Thermochemical equations must include physical states; \(\Delta H\) scales with coefficients and flips sign when reversed.
- \(\Delta H_f^\circ = 0\) for elements in their standard states; formation values are per mole of compound.
- Hess's law works because enthalpy is a state function — path independent.
- \(\Delta H_{\text{rxn}}^\circ = \sum \Delta H_f^\circ(\text{products}) - \sum \Delta H_f^\circ(\text{reactants})\), multiplied by coefficients.
- The accepted heat of methane combustion is about −890 kJ/mol — a benchmark exothermic value.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Enthalpy (\(H\)) | Internal energy plus pressure–volume work: \(H = E + PV\). | Its change at constant pressure equals measured heat. |
| Enthalpy change (\(\Delta H\)) | Heat absorbed or released by a process at constant pressure. | The headline number of thermochemistry. |
| Exothermic | Releases heat; \(\Delta H < 0\). | Describes combustion, neutralization, most industry reactions. |
| Endothermic | Absorbs heat; \(\Delta H > 0\). | Describes photosynthesis, decomposition, cold packs. |
| Thermochemical equation | Balanced equation with states and an enthalpy change. | The standard format for reporting reaction heat. |
| Standard enthalpy of formation | Heat to form 1 mol of a compound from elements in standard states. | Tabulated values power \(\Delta H\) predictions. |
| Standard state | Most stable form of a substance at 1 bar and set temperature. | Defines the zero point of formation values. |
| Hess's law | Total \(\Delta H\) is path independent; add step heats to get the total. | Calculates heats of unmeasurable reactions. |
| State function | Property depending only on current state, not path. | Why Hess's law works and \(\Delta H\) is well-defined. |

## Worked Examples

### Example 1: Combustion of methane from formation values

Calculate \(\Delta H_{\text{rxn}}^\circ\) for:

\[
\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(l)
\]

Using \(\Delta H_f^\circ\): CH₄(g) = −74.6 kJ/mol, CO₂(g) = −393.5 kJ/mol, H₂O(l) = −285.8 kJ/mol, O₂(g) = 0.

**Write the equation before substituting:**

\[
\Delta H_{\text{rxn}}^\circ = [\Delta H_f^\circ(\text{CO}_2) + 2\Delta H_f^\circ(\text{H}_2\text{O})] - [\Delta H_f^\circ(\text{CH}_4) + 2\Delta H_f^\circ(\text{O}_2)]
\]

**Substitute values (note the coefficient 2 on water):**

\[
\Delta H_{\text{rxn}}^\circ = [(-393.5) + 2(-285.8)] - [(-74.6) + 2(0)]
\]

\[
\Delta H_{\text{rxn}}^\circ = (-965.1) - (-74.6) = -890.5\ \text{kJ}
\]

The negative value confirms combustion is exothermic, releasing 890.5 kJ per mole of methane — matching the accepted −890 kJ/mol.

### Example 2: Hess's law for the formation of carbon monoxide

CO forms directly from carbon and oxygen but also produces CO₂, so it is hard to measure cleanly. Use Hess's law with these known reactions:

\[
\text{C}(s) + \text{O}_2(g) \rightarrow \text{CO}_2(g) \qquad \Delta H_1 = -393.5\ \text{kJ}
\]

\[
\text{CO}(g) + \tfrac{1}{2}\text{O}_2(g) \rightarrow \text{CO}_2(g) \qquad \Delta H_2 = -283.0\ \text{kJ}
\]

Target: \(\text{C}(s) + \tfrac{1}{2}\text{O}_2(g) \rightarrow \text{CO}(g)\).

Reverse the second equation (CO₂ becomes a reactant) and flip its sign:

\[
\text{CO}_2(g) \rightarrow \text{CO}(g) + \tfrac{1}{2}\text{O}_2(g) \qquad \Delta H = +283.0\ \text{kJ}
\]

Add the first equation and the reversed second:

\[
\text{C}(s) + \text{O}_2(g) + \text{CO}_2(g) \rightarrow \text{CO}_2(g) + \text{CO}(g) + \tfrac{1}{2}\text{O}_2(g)
\]

Cancel CO₂ and one O₂ on each side to recover the target reaction:

\[
\Delta H = -393.5 + 283.0 = -110.5\ \text{kJ}
\]

So \(\Delta H_f^\circ(\text{CO}) = -110.5\ \text{kJ/mol}\), the tabulated value — correctly canceling species confirms the manipulations.

### Example 3: The thermite reaction

The thermite reaction reduces iron oxide with aluminum:

\[
2\text{Al}(s) + \text{Fe}_2\text{O}_3(s) \rightarrow \text{Al}_2\text{O}_3(s) + 2\text{Fe}(s)
\]

Using \(\Delta H_f^\circ\): Fe₂O₃(s) = −824.2 kJ/mol, Al₂O₃(s) = −1675.7 kJ/mol; Al and Fe are elements, so both are 0.

\[
\Delta H_{\text{rxn}}^\circ = [\Delta H_f^\circ(\text{Al}_2\text{O}_3) + 2\Delta H_f^\circ(\text{Fe})] - [2\Delta H_f^\circ(\text{Al}) + \Delta H_f^\circ(\text{Fe}_2\text{O}_3)]
\]

\[
\Delta H_{\text{rxn}}^\circ = [(-1675.7) + 0] - [0 + (-824.2)] = -851.5\ \text{kJ}
\]

The large negative value explains why thermite is violently exothermic — used in railway welding because it delivers intense heat in a compact package.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| \(\Delta H\) | \(\Delta E\) | \(\Delta H\) is heat at constant pressure; \(\Delta E\) is heat at constant volume. They differ by the \(P\Delta V\) work term. |
| Exothermic sign | Endothermic sign | Exothermic: \(\Delta H < 0\) (heat out); endothermic: \(\Delta H > 0\) (heat in). |
| \(\Delta H_f^\circ\) value | Per-reaction heat | Formation values are per mole of the compound formed; multiply by the coefficient in the reaction. |
| Reversing an equation | Scaling an equation | Reversing flips the sign of \(\Delta H\); scaling by a factor multiplies \(\Delta H\) by that factor. |
| Standard state | STP (0 °C, 1 atm) | Standard state for thermochemistry is usually 1 bar and 25 °C; STP is a gas-law reference condition. |
| Hess's law arithmetic | Simple averaging | You add, reverse, and scale equations — never average heats unless the reactions actually combine that way. |

## Quick Review

1. Write the defining relationship between enthalpy, internal energy, and pressure–volume work.
2. Under what condition does \(\Delta H\) equal the heat transferred?
3. A reaction is reversed. What happens to its \(\Delta H\)?
4. Why is \(\Delta H_f^\circ = 0\) for O₂(g)?
5. Using the formation values from Example 1, would burning 2 mol of CH₄ release more or less than 890.5 kJ? How much?

<details>
<summary>Show answers</summary>

1. \(H = E + PV\).
2. At constant pressure — the usual condition for reactions open to the atmosphere — \(\Delta H = q_p\).
3. The sign reverses: a reaction that released heat absorbs heat when run backward.
4. \(\Delta H_f^\circ\) is defined as the heat of forming a substance from its elements in their standard states; forming an element from itself involves no change, so the value is zero by definition.
5. More: enthalpy change scales with the amount of reaction. Doubling the coefficients doubles the heat, so 2 mol of CH₄ release 2 × 890.5 = 1781 kJ.

</details>

## Related Topics

- Previous: [Calorimetry](02-calorimetry.md)
- Next: End of chapter
- Related: [Energy Basics](01-energy-basics.md)
- Related: [Thermochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
