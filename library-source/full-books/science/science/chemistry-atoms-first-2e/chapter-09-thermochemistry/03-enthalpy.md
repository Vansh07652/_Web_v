---
title: "Enthalpy"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "9: Thermochemistry"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "enthalpy"
  - "science"
status: "complete"
---

# Enthalpy

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 9: Thermochemistry](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

When a reaction happens in an open beaker, the pressure is constant — the atmosphere pushes on the system the whole time. Under those conditions, the heat the reaction absorbs or releases is the **enthalpy change**, \(\Delta H\). Enthalpy (\(H\)) is defined as internal energy plus a pressure–volume term, \(H = E + PV\), but in practice think of it as **"the heat of a process at constant pressure."** It is a *state function*: its value depends only on where the system starts and ends, not on the path taken.

This topic explains the definition of enthalpy, the exothermic/endothermic distinction, how to read and use **thermochemical equations**, how to scale \(\Delta H\) with reactant amounts, and the two big calculation tools — **Hess's law** and **standard enthalpies of formation** — that let you find \(\Delta H\) without running the reaction in the lab.

## Why This Matters

- **Every thermochemical equation is a prediction of heat.** Knowing whether a reaction releases heat (exothermic) or absorbs it (endothermic), and how much, matters for reactor design, safety, cooking, and biology.
- **Hess's law is a lab shortcut.** Some reactions are too fast, too slow, too dangerous, or too incomplete to measure directly; Hess's law computes their \(\Delta H\) from reactions that *can* be measured.
- **Standard enthalpies of formation make thermochemistry routine.** Given a table of \(\Delta H_f^\circ\) values, you can calculate the heat of any reaction — the most-used calculation in this chapter and a guaranteed exam item.
- **Food and fuel.** The enthalpy of combustion of fuels and of metabolism of food are the numbers behind energy content claims; nutrition labels trace back to \(\Delta H_c^\circ\) measurements.
- **Real systems run at constant pressure.** Open beakers, industrial vats, and your own body operate at ~constant atmospheric pressure, so \(\Delta H\) — not \(\Delta E\) — matches everyday experience.

## Core Concepts

### Defining enthalpy

Enthalpy is defined as:

\[
H = E + PV
\]

where \(E\) is internal energy, \(P\) pressure, and \(V\) volume. For a process at constant pressure:

\[
\Delta H = \Delta E + P\Delta V
\]

Substituting the first law (\(\Delta E = q + w\)) and pressure–volume work (\(w = -P\Delta V\)) gives the result that matters:

\[
\Delta H = q_P
\]

At constant pressure, the enthalpy change equals the heat exchanged with the surroundings. That is why the coffee-cup calorimeter — a constant-pressure device — measures \(\Delta H\) directly. Because \(E\), \(P\), and \(V\) are all **state functions**, enthalpy is too: \(\Delta H\) depends only on initial and final states, never on the path. This property is the foundation of Hess's law.

### Exothermic and endothermic processes

- **Exothermic:** heat flows out of the system into the surroundings. \(\Delta H < 0\), surroundings warm up. Combustion, neutralization of strong acids and bases, and freezing are exothermic.
- **Endothermic:** heat flows into the system from the surroundings. \(\Delta H > 0\), surroundings cool down. Melting ice, dissolving ammonium nitrate in water (the "instant cold pack"), and photosynthesis are endothermic.

A useful reading of thermochemical equations: treat \(\Delta H\) like a product (exothermic) or a reactant (endothermic):

\[
\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(l) \quad \Delta H = -890.4\ \text{kJ}
\]

This one equation states: when 1 mol of methane reacts with 2 mol of oxygen at constant pressure, 890.4 kJ of heat is released to the surroundings.

### Thermochemical equations: scaling with amounts

A thermochemical equation is a recipe with a built-in amount: the \(\Delta H\) value belongs to the reaction *as written*, with its specific coefficients. To scale:

- **Multiply the whole equation by a factor** → multiply \(\Delta H\) by the same factor (2 mol of CH₄ releases \(2 \times 890.4 = 1780.8\ \text{kJ}\)).
- **Reverse the equation** → change the sign of \(\Delta H\) (making CO₂ and H₂O react to form CH₄ would *absorb* 890.4 kJ).
- **Physical states matter.** \(\Delta H\) depends on state: \(\Delta H\) for reactions producing \(\text{H}_2\text{O}(l)\) differs from those producing \(\text{H}_2\text{O}(g)\). Always note (s), (l), (g), (aq).

### Hess's law: adding reactions adds their enthalpy changes

**Hess's law** states that because enthalpy is a state function, the \(\Delta H\) of a reaction is the sum of the \(\Delta H\) values of any sequence of reactions that adds up to the target:

\[
\Delta H_{\text{target}} = \Delta H_1 + \Delta H_2 + \Delta H_3 + \cdots
\]

Strategy: (1) write the target equation; (2) find known reactions containing its reactants and products; (3) reverse or scale them as needed; (4) add the equations, canceling species on both sides; (5) add the \(\Delta H\) values. If the final equation matches the target, the arithmetic is correct.

### Standard enthalpies of formation

The **standard enthalpy of formation, \(\Delta H_f^\circ\)**, of a compound is the enthalpy change when **1 mole** forms from its elements **in their standard states** at 1 atm (and typically 25 °C). By definition:

\[
\Delta H_f^\circ(\text{element in standard state}) = 0
\]

So O₂(g), C(s, graphite), H₂(g), and Fe(s) all have \(\Delta H_f^\circ = 0\), while most compounds have nonzero (usually negative) values. Tables of \(\Delta H_f^\circ\) give \(\Delta H\) for any reaction through the summation formula:

\[
\Delta H_{\text{rxn}}^\circ = \sum n_p \Delta H_f^\circ(\text{products}) - \sum n_r \Delta H_f^\circ(\text{reactants})
\]

where \(n_p\) and \(n_r\) are the stoichiometric coefficients. Read it as "products minus reactants, each multiplied by its coefficient."

## ELI-10: Explain Like I'm 10

> Enthalpy is a way of counting how much heat a reaction gives away or takes in while it runs at normal air pressure. Think of a campfire: burning wood gives off heat — that's exothermic, a negative number, because the wood's "heat account" goes down. A cold pack, though, soaks up heat from your skin when you crack it — that's endothermic. The cool trick of Hess's law is that you can add up smaller, easy reactions to figure out the heat of one big reaction you can't easily run — like adding up the prices of ingredients to know the price of the whole cake.

## High-Yield Points

- **Definition:** \(H = E + PV\); at constant pressure, \(\Delta H = q_P\) — enthalpy change equals heat.
- **Enthalpy is a state function** — path-independent; this is why Hess's law works.
- **Exothermic:** \(\Delta H < 0\), heat released, surroundings warm; **endothermic:** \(\Delta H > 0\), heat absorbed, surroundings cool.
- **Scaling rules:** multiply coefficients → multiply \(\Delta H\); reverse equation → flip sign; physical states matter.
- **Hess's law:** \(\Delta H_{\text{target}} = \sum \Delta H_{\text{steps}}\) for any valid pathway.
- **Standard formation enthalpy:** \(\Delta H_f^\circ\) of an element in its standard state = 0; \(\Delta H_{\text{rxn}}^\circ = \sum n_p\Delta H_f^\circ(\text{products}) - \sum n_r\Delta H_f^\circ(\text{reactants})\).
- Standard state = 1 atm pressure; tables usually report 25 °C (298 K).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Enthalpy (\(H\)) | Internal energy plus pressure–volume term, \(H = E + PV\) | Its change equals heat at constant pressure — the everyday lab condition |
| Enthalpy change (\(\Delta H\)) | Heat absorbed or released by a process at constant pressure | The headline number in every thermochemical equation |
| Exothermic | Process with \(\Delta H < 0\), releasing heat to surroundings | Combustion, neutralization, freezing — surroundings warm |
| Endothermic | Process with \(\Delta H > 0\), absorbing heat from surroundings | Melting, cold packs, photosynthesis — surroundings cool |
| Thermochemical equation | Balanced equation with its \(\Delta H\) for the reaction as written | Carries the heat "recipe" tied to specific coefficients and states |
| State function | Property depending only on current state, not the path | Makes \(\Delta H\) additive and Hess's law possible |
| Hess's law | \(\Delta H\) of a reaction equals the sum of \(\Delta H\) of any valid pathway | Computes heats of reactions that can't be measured directly |
| Standard enthalpy of formation (\(\Delta H_f^\circ\)) | Heat to form 1 mol of compound from elements in standard states | The table values that power the summation formula |
| Standard state | Physical form of a substance at 1 atm (often 25 °C) | The reference conditions behind every \(\Delta H_f^\circ\) value |

## Worked Examples

### Example 1: Hess's law for the formation of carbon monoxide

Carbon monoxide forms from carbon and oxygen, but the reaction always "overshoots" to CO₂, so its \(\Delta H\) can't be measured directly. Use Hess's law with:

\[
\text{C}(s) + \text{O}_2(g) \rightarrow \text{CO}_2(g) \quad \Delta H = -393.5\ \text{kJ}
\]

\[
\text{CO}(g) + \frac{1}{2}\text{O}_2(g) \rightarrow \text{CO}_2(g) \quad \Delta H = -283.0\ \text{kJ}
\]

**Step 1 — Target equation:**

\[
\text{C}(s) + \frac{1}{2}\text{O}_2(g) \rightarrow \text{CO}(g)
\]

**Step 2 — Reverse reaction 2 so CO appears as a product, flipping its sign:**

\[
\text{CO}_2(g) \rightarrow \text{CO}(g) + \frac{1}{2}\text{O}_2(g) \quad \Delta H = +283.0\ \text{kJ}
\]

**Step 3 — Add the two reactions, canceling CO₂ and the O₂ halves:**

\[
\text{C}(s) + \text{O}_2(g) + \text{CO}_2(g) \rightarrow \text{CO}_2(g) + \text{CO}(g) + \frac{1}{2}\text{O}_2(g)
\]

After cancellation: \(\text{C}(s) + \frac{1}{2}\text{O}_2(g) \rightarrow \text{CO}(g)\) — matches the target.

**Step 4 — Add the \(\Delta H\) values:**

\[
\Delta H = (-393.5\ \text{kJ}) + (+283.0\ \text{kJ}) = -110.5\ \text{kJ}
\]

So \(\Delta H_f^\circ[\text{CO}(g)] = -110.5\ \text{kJ/mol}\), the standard table value. The pathway didn't matter — only the starting and ending states did.

### Example 2: \(\Delta H\) from standard enthalpies of formation

Calculate the standard enthalpy of combustion of methane:

\[
\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(l)
\]

using \(\Delta H_f^\circ\): CH₄(g) = −74.6 kJ/mol, CO₂(g) = −393.5 kJ/mol, H₂O(l) = −285.8 kJ/mol.

**Step 1 — Write the summation formula:**

\[
\Delta H_{\text{rxn}}^\circ = \sum n_p \Delta H_f^\circ(\text{products}) - \sum n_r \Delta H_f^\circ(\text{reactants})
\]

**Step 2 — Sum the products:**

\[
\sum n_p\Delta H_f^\circ = (1)(-393.5) + (2)(-285.8) = -393.5 - 571.6 = -965.1\ \text{kJ}
\]

**Step 3 — Sum the reactants (O₂ is an element in standard state, so \(\Delta H_f^\circ = 0\)):**

\[
\sum n_r\Delta H_f^\circ = (1)(-74.6) + (2)(0) = -74.6\ \text{kJ}
\]

**Step 4 — Subtract:**

\[
\Delta H_{\text{rxn}}^\circ = (-965.1) - (-74.6) = -890.5\ \text{kJ}
\]

The reaction releases 890.5 kJ per mole of methane — the well-known heat of combustion of methane. (Dimensional check: kJ/mol × mol = kJ.)

### Example 3: Scaling a thermochemical equation

Using the methane combustion from Example 2, how much heat is released when 4.00 g of CH₄ (molar mass 16.04 g/mol) is burned completely?

**Step 1 — Convert mass to moles:**

\[
n = \frac{4.00\ \text{g}}{16.04\ \text{g mol}^{-1}} = 0.249\ \text{mol CH}_4
\]

**Step 2 — Scale \(\Delta H\) by the mole ratio (1 mol CH₄ : −890.5 kJ):**

\[
q = 0.249\ \text{mol CH}_4 \times \frac{-890.5\ \text{kJ}}{1\ \text{mol CH}_4} = -222\ \text{kJ}
\]

About 222 kJ of heat is released. The mole ratio comes straight from the thermochemical equation's coefficients — the \(\Delta H\) value belongs to the reaction *as written*, so scaling it by actual moles is the only legitimate use.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| \(\Delta H\) (constant pressure) | \(\Delta E\) (constant volume) | \(\Delta H = q_P\) from coffee-cup calorimetry; \(\Delta E = q_V\) from bomb calorimetry; they differ by the \(P\Delta V\) work term |
| Exothermic | Endothermic | \(\Delta H < 0\) heat out (surroundings warm); \(\Delta H > 0\) heat in (surroundings cool) |
| Enthalpy \(H\) | Enthalpy change \(\Delta H\) | \(H\) is a property of a state; \(\Delta H\) is the *difference* between two states — only differences are measurable |
| \(\Delta H\) per mole | \(\Delta H\) for the equation as written | \(\Delta H_f^\circ\) is per mole formed; a thermochemical equation's \(\Delta H\) belongs to its coefficients |
| Products minus reactants | Reactants minus products | The formula is products first; reversing the order flips the sign and gives a wrong answer |
| \(\Delta H_f^\circ = 0\) for elements | \(\Delta H_f^\circ = 0\) for all pure substances | Only elements *in their standard states* have zero formation enthalpy |
| Standard state (1 atm) | Standard temperature (25 °C) | "Standard state" refers to pressure (1 atm); 25 °C is a reporting convention, not part of the definition |

## Quick Review

1. Define enthalpy and state why \(\Delta H = q_P\) at constant pressure.
2. Classify as exothermic or endothermic: (a) ice melting; (b) burning gasoline; (c) an instant cold pack dissolving; (d) freezing water.
3. \(2\text{H}_2(g) + \text{O}_2(g) \rightarrow 2\text{H}_2\text{O}(l)\) has \(\Delta H = -571.6\ \text{kJ}\). What is \(\Delta H\) when the equation is reversed, and what is \(\Delta H\) per mole of H₂O formed?
4. Why can Hess's law add \(\Delta H\) values from different pathways?
5. Why is O₂(g)'s contribution always zero in the formation-enthalpy summation?
6. A reaction's \(\Delta H\) changes if a product's physical state changes (H₂O(l) vs H₂O(g)). Why?

<details>
<summary>Show answers</summary>

1. \(H = E + PV\). At constant pressure, \(\Delta H = \Delta E + P\Delta V = (q + w) + P\Delta V = q - P\Delta V + P\Delta V = q_P\). The \(P\Delta V\) work terms cancel, leaving heat.
2. (a) endothermic (absorbs heat); (b) exothermic; (c) endothermic; (d) exothermic.
3. Reversed: \(\Delta H = +571.6\ \text{kJ}\). Per mole of H₂O: \(-571.6/2 = -285.8\ \text{kJ/mol}\).
4. Because enthalpy is a state function — its change depends only on initial and final states, so any valid pathway gives the same \(\Delta H\).
5. Elements in their standard states are the reference zero of the formation-enthalpy scale: \(\Delta H_f^\circ = 0\) by definition, so forming O₂(g) from O₂(g) involves no enthalpy change.
6. Different physical states have different energies (condensation releases heat), so the products' total enthalpy differs. That's why thermochemical equations must specify (s), (l), (g), (aq).

</details>

## Related Topics

- Previous: [Calorimetry](02-calorimetry.md)
- Next: [Strengths of Ionic and Covalent Bonds](04-strengths-of-ionic-and-covalent-bonds.md)
- Related: [Energy Basics](01-energy-basics.md) — the first law and heat/work conventions behind \(\Delta H\)
- Related: [Thermochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
