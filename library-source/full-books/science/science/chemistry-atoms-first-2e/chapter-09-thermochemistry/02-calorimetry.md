---
title: "Calorimetry"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "9: Thermochemistry"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "calorimetry"
  - "science"
status: "complete"
---

# Calorimetry

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 9: Thermochemistry](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Heat is invisible — you cannot weigh or count it directly. **Calorimetry** measures heat indirectly, by watching how it changes the temperature of a known amount of material: if you know how much heat a substance needs to warm up by 1 °C (its **heat capacity**), and you measure how many degrees it warmed, you can calculate exactly how much heat flowed.

This topic develops the two key equations, \(q = mc\Delta T\) and \(q = C\Delta T\), introduces the two workhorse instruments — the **coffee-cup calorimeter** (constant pressure) and the **bomb calorimeter** (constant volume) — and shows how "heat gained = heat lost" bookkeeping finds specific heats and food energy content. Calorimetry is also the experimental bridge to the next topic: at constant pressure, the measured heat *is* the enthalpy change.

## Why This Matters

- **Nutrition labels come from calorimetry.** Food Calories are measured with bomb calorimeters — burn the food, measure the heat.
- **Specific heat is a practical number.** It explains why water cools engines efficiently, why coastal climates are milder, and why metal pan handles get hot while wooden ones stay cool.
- **Identifying unknowns.** Measuring an unknown metal's specific heat and comparing it with a table of values is a classic identification method and exam scenario.
- **Industrial and safety applications.** Calorimetry measures the energy released by fuels and explosives — information engineers need for safe reactor design.
- **It defines the chapter's central measurements.** Calorimetry is how chemists measure \(\Delta H\) (constant pressure) and \(\Delta E\) (constant volume).

## Core Concepts

### Heat capacity, specific heat, and molar heat capacity

Three related quantities describe how a material responds to heat:

- **Heat capacity (\(C\))** is the heat required to raise the temperature of a *whole object* by 1 °C: units \(\text{J}/{}^\circ\text{C}\). An engine block has a large heat capacity; a paperclip has a tiny one.
- **Specific heat (\(c\))** is the heat required to raise **1 gram** of a substance by 1 °C: units \(\text{J g}^{-1}{}^\circ\text{C}^{-1}\). It is an intensive property — it describes the material, not the sample size.
- **Molar heat capacity (\(C_m\))** is the heat required to raise 1 mole by 1 °C: units \(\text{J mol}^{-1}\text{K}^{-1}\).

Water's specific heat is the benchmark: \(c_{\text{water}} = 4.184\ \text{J g}^{-1}{}^\circ\text{C}^{-1}\) — the same number as the calorie (1 cal = 4.184 J). Metals are far lower (e.g., ~0.385 J g⁻¹ °C⁻¹ for copper), which is why a metal spoon heats up far faster than the soup it sits in.

### The calorimetry equations

For a substance of mass \(m\), specific heat \(c\), and temperature change \(\Delta T = T_{\text{final}} - T_{\text{initial}}\):

\[
q = mc\Delta T
\]

For a whole object or instrument with heat capacity \(C\):

\[
q = C\Delta T
\]

The sign follows the first-law convention: \(q > 0\) when the object gains heat, \(q < 0\) when it loses heat.

### Coffee-cup calorimetry: constant pressure

The **coffee-cup calorimeter** is a Styrofoam cup (a good insulator) holding a known mass of solution, with a thermometer and stirrer. A reaction or mixing occurs in the cup; the thermometer records the temperature change. Because the cup is open to the atmosphere, pressure stays constant — so the heat measured equals the **enthalpy change**:

\[
q_{\text{reaction}} = -q_{\text{solution}} = -mc\Delta T
\]

The negative sign implements "heat lost by the reaction = heat gained by the solution" (or vice versa). This is the device behind most general-chemistry labs: dissolving salts, neutralizing acids and bases, and measuring heats of solution.

### Bomb calorimetry: constant volume

The **bomb calorimeter** is a heavy steel vessel (the "bomb") containing a sample and high-pressure oxygen, submerged in a known mass of water inside an insulated jacket. The sample is ignited electrically and burns completely; the heat released warms the water and all calorimeter parts. Instead of tracking the water alone, chemists calibrate the *entire assembly* — water, bomb, stirrer, thermometer — as one object with a measured heat capacity \(C_{\text{cal}}\):

\[
q_{\text{reaction}} = -q_{\text{calorimeter}} = -C_{\text{cal}}\Delta T
\]

Because the bomb is sealed, volume — not pressure — is constant. At constant volume, no pressure–volume work is done (\(w = 0\)), so by the first law the heat measured equals the change in **internal energy**:

\[
q_V = \Delta E
\]

Bomb calorimetry is the standard method for measuring the energy content of foods and fuels.

### The golden rule: heat gained = heat lost

Every calorimetry problem is a conservation-of-energy statement:

\[
q_{\text{hot}} + q_{\text{cold}} = 0 \quad\text{or}\quad q_{\text{gained}} = -q_{\text{lost}}
\]

The workflow: identify all objects exchanging heat, write \(q = mc\Delta T\) (or \(q = C\Delta T\)) for each, set the sum to zero, and solve. The final temperature is always *between* the initial temperatures — a built-in sanity check.

## ELI-10: Explain Like I'm 10

> Imagine measuring how much money a fire gives off by watching how much a piggy bank warms up. First you learn the piggy bank's "warm-up rule" — how much heat it takes to get 1° warmer. Then you watch a fire and see the bank warm up 5°, and you can figure out exactly how much heat the fire gave. A calorimeter is that piggy bank for chemistry: when a reaction warms the water inside, you can count the reaction's heat. A bomb calorimeter is the same idea inside a strong steel box, used to burn food and fuel completely.

## High-Yield Points

- **Core equation:** \(q = mc\Delta T\) for a substance; \(q = C\Delta T\) for an object/instrument.
- **Specific heat of water:** \(4.184\ \text{J g}^{-1}{}^\circ\text{C}^{-1}\) — the benchmark; metals are far lower.
- **Coffee-cup (constant pressure):** \(q_{\text{rxn}} = -mc\Delta T\); the heat measured equals \(\Delta H\).
- **Bomb (constant volume):** \(q_{\text{rxn}} = -C_{\text{cal}}\Delta T\); the heat measured equals \(\Delta E\).
- **Conservation rule:** \(q_{\text{gained}} + q_{\text{lost}} = 0\); final temperature lies between initial temperatures.
- \(\Delta T = T_{\text{final}} - T_{\text{initial}}\), in °C or K (differences are identical in both scales).
- Write the formula before substituting; check units: mass in g, \(c\) in J g⁻¹ °C⁻¹, \(\Delta T\) in °C.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Calorimetry | Measuring heat by observing temperature changes | The experimental backbone of thermochemistry |
| Heat capacity (\(C\)) | Heat to raise a whole object by 1 °C (\(\text{J}/{}^\circ\text{C}\)) | Used for calorimeter assemblies and whole objects |
| Specific heat (\(c\)) | Heat to raise 1 g of a substance by 1 °C (\(\text{J g}^{-1}{}^\circ\text{C}^{-1}\)) | Material property; identifies substances and controls real-world heat flow |
| Molar heat capacity (\(C_m\)) | Heat to raise 1 mol by 1 °C (\(\text{J mol}^{-1}\text{K}^{-1}\)) | Connects heat to amounts in moles |
| Coffee-cup calorimeter | Insulated cup measuring heat at constant pressure | Measures \(\Delta H\) directly; the standard lab calorimeter |
| Bomb calorimeter | Sealed steel vessel measuring heat at constant volume | Measures \(\Delta E\); used for foods and fuels |
| Calorimeter heat capacity (\(C_{\text{cal}}\)) | Heat capacity of the entire bomb-calorimeter assembly | Calibrated once, then used for all subsequent runs |
| Thermal equilibrium | State where all objects share the same temperature | The endpoint of every calorimetry experiment |

## Worked Examples

### Example 1: Finding the specific heat of an unknown metal

A 30.0 g sample of an unknown metal is heated to 100.0 °C and dropped into a coffee-cup calorimeter containing 100.0 g of water at 20.0 °C. The final temperature reaches 23.5 °C. Find the metal's specific heat (\(c_{\text{water}} = 4.184\ \text{J g}^{-1}{}^\circ\text{C}^{-1}\)).

**Step 1 — Write the conservation statement:**

\[
q_{\text{metal}} + q_{\text{water}} = 0
\]

**Step 2 — Write the heat equation for each object:**

\[
mc\Delta T_{\text{metal}} + mc\Delta T_{\text{water}} = 0
\]

**Step 3 — Compute the temperature changes:**

\[
\Delta T_{\text{water}} = 23.5 - 20.0 = +3.5\ {}^\circ\text{C}
\]

\[
\Delta T_{\text{metal}} = 23.5 - 100.0 = -76.5\ {}^\circ\text{C}
\]

**Step 4 — Substitute and solve:**

\[
(30.0\ \text{g})(c_{\text{metal}})(-76.5\ {}^\circ\text{C}) + (100.0\ \text{g})(4.184\ \text{J g}^{-1}{}^\circ\text{C}^{-1})(+3.5\ {}^\circ\text{C}) = 0
\]

\[
-2295\ c_{\text{metal}} + 1464\ \text{J} = 0 \quad\Rightarrow\quad c_{\text{metal}} = \frac{1464}{2295} = 0.638\ \text{J g}^{-1}{}^\circ\text{C}^{-1}
\]

Sanity check: 0.638 J g⁻¹ °C⁻¹ lies in the metallic range (typical metals: 0.2–0.9), and the final temperature 23.5 °C lies between 20.0 and 100.0 °C as required.

### Example 2: Bomb calorimetry of a food sample

A 0.500 g sample of a snack food is burned in a bomb calorimeter with calibrated heat capacity \(C_{\text{cal}} = 2.50\ \text{kJ}/{}^\circ\text{C}\). The water temperature rises from 21.00 °C to 24.35 °C. Calculate the heat released per gram of food.

**Step 1 — Write the bomb-calorimeter equation:**

\[
q_{\text{sample}} = -C_{\text{cal}}\Delta T
\]

**Step 2 — Compute \(\Delta T\):**

\[
\Delta T = 24.35 - 21.00 = 3.35\ {}^\circ\text{C}
\]

**Step 3 — Substitute:**

\[
q_{\text{sample}} = -(2.50\ \text{kJ}/{}^\circ\text{C})(3.35\ {}^\circ\text{C}) = -8.38\ \text{kJ}
\]

The negative sign means the sample released 8.38 kJ.

**Step 4 — Divide by sample mass:**

\[
\frac{-8.38\ \text{kJ}}{0.500\ \text{g}} = -16.8\ \text{kJ g}^{-1}
\]

This food releases 16.8 kJ per gram when completely oxidized — about 4.0 nutritional Calories per gram, in the range expected for a food of mostly carbohydrates and proteins. (Dimensional check: kJ/°C × °C = kJ; kJ ÷ g = kJ/g.)

### Example 3: How much heat does water absorb?

How much heat is required to warm 250.0 g of water from 22.0 °C to 40.0 °C?

**Step 1 — Write the equation:**

\[
q = mc\Delta T
\]

**Step 2 — Compute \(\Delta T\) and substitute:**

\[
\Delta T = 40.0 - 22.0 = 18.0\ {}^\circ\text{C}
\]

\[
q = (250.0\ \text{g})(4.184\ \text{J g}^{-1}{}^\circ\text{C}^{-1})(18.0\ {}^\circ\text{C}) = 1.88 \times 10^4\ \text{J} = 18.8\ \text{kJ}
\]

Note how units cancel: \(\text{g} \times \text{J g}^{-1}{}^\circ\text{C}^{-1} \times {}^\circ\text{C} = \text{J}\). Water's high specific heat is why 18.8 kJ — the energy in ~4.5 food Calories — only warms a cup of water by 18 °C.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Heat capacity \(C\) | Specific heat \(c\) | \(C\) is for a whole object (J/°C); \(c\) is per gram (J g⁻¹ °C⁻¹) |
| Coffee-cup calorimeter | Bomb calorimeter | Coffee cup = constant pressure, measures \(\Delta H\); bomb = constant volume, measures \(\Delta E\) |
| \(\Delta T\) sign | Absolute temperature | \(\Delta T = T_f - T_i\); a cooling object has negative \(\Delta T\) and negative \(q\) |
| Heat gained by water | Heat released by reaction | Equal in magnitude, opposite in sign: \(q_{\text{rxn}} = -q_{\text{water}}\) |
| Calorimeter heat capacity | Water's specific heat | \(C_{\text{cal}}\) includes water + bomb + stirrer as one object; don't use \(c_{\text{water}}\) alone for a bomb |
| °C and K in \(\Delta T\) | °C and K as absolute values | A temperature *difference* is numerically identical in °C and K; absolute values are not |
| Temperature change | Heat | Big \(\Delta T\) doesn't mean big heat — mass and specific heat matter too |

## Quick Review

1. Write \(q = mc\Delta T\), defining every symbol and its units.
2. Why does a coffee-cup calorimeter measure \(\Delta H\), while a bomb calorimeter measures \(\Delta E\)?
3. A 50.0 g piece of aluminum (\(c = 0.900\ \text{J g}^{-1}{}^\circ\text{C}^{-1}\)) cools from 80.0 °C to 25.0 °C. How much heat does it release?
4. In Example 2, if the same 0.500 g food were burned in a calorimeter with \(C_{\text{cal}} = 5.00\ \text{kJ}/{}^\circ\text{C}\), would \(\Delta T\) be larger or smaller, and why?
5. Which requires more heat: warming 10 g of water or 10 g of copper by the same amount? Explain using specific heats.
6. A student forgets the stirrer and thermometer in the bomb calorimeter's heat capacity. Will the measured food energy be too high or too low? Why?

<details>
<summary>Show answers</summary>

1. \(q\) = heat (J), \(m\) = mass (g), \(c\) = specific heat (J g⁻¹ °C⁻¹), \(\Delta T = T_f - T_i\) (°C).
2. The coffee-cup calorimeter is open to the atmosphere, so pressure is constant — at constant pressure, \(q_p = \Delta H\). The sealed bomb keeps volume constant, so no \(P\Delta V\) work is done and \(q_V = \Delta E\).
3. \(\Delta T = 25.0 - 80.0 = -55.0\ {}^\circ\text{C}\); \(q = (50.0)(0.900)(-55.0) = -2.48 \times 10^3\ \text{J}\); the metal releases ~2.5 kJ.
4. Smaller. Doubling \(C_{\text{cal}}\) means the same heat produces half the temperature rise (\(\Delta T = q/C\)); the heat measured is the same, but the thermometer readout changes less.
5. Water — its specific heat (4.184 J g⁻¹ °C⁻¹) is about 11× copper's (0.385 J g⁻¹ °C⁻¹), so warming 10 g of water by the same amount needs ~11× more heat.
6. Too low. The omitted parts absorb heat that is not counted, so the calorimeter's *true* heat capacity is larger than the value used, and the computed heat (\(-C_{\text{cal}}\Delta T\)) underestimates the actual energy released.

</details>

## Related Topics

- Previous: [Energy Basics](01-energy-basics.md)
- Next: [Enthalpy](03-enthalpy.md)
- Related: [Strengths of Ionic and Covalent Bonds](04-strengths-of-ionic-and-covalent-bonds.md) — bond energies are measured calorimetrically
- Related: [Thermochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
