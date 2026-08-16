---
title: "Calorimetry"
subject: "Science"
book: "Chemistry 2e"
chapter: "5: Thermochemistry"
topic_number: "2"
source: "chemistry-2e.md"
tags:
  - "calorimetry"
  - "science"
status: "complete"
---

# Calorimetry

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 5: Thermochemistry](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

**Calorimetry** is the measurement of heat flow during a physical or chemical process. The instrument is a **calorimeter** — an insulated container that traps reaction heat so it can be measured through temperature change. The method rests on energy conservation: heat a reaction releases appears in the calorimeter; heat it absorbs is drawn from it.

The two main designs differ in what they hold constant:

- **Coffee-cup calorimetry** operates at constant pressure (open to the atmosphere) and measures heat flow \(q_p\), which equals the enthalpy change \(\Delta H\).
- **Bomb calorimetry** operates at constant volume in a sealed vessel and measures heat flow \(q_v\), which equals the change in internal energy \(\Delta E\).

Both convert a measured temperature change into heat using specific heat or heat capacity.

## Why This Matters

Calorimetry is how the energy numbers you meet every day are actually produced. The Calorie counts on food labels come from bomb calorimetry of food samples. Engineers measure fuel energy content, chemists study reaction energetics, and physiologists use similar techniques to measure metabolic rates. Understanding calorimetry also explains hot and cold packs: reactions engineered to release or absorb a predictable amount of heat.

## Core Concepts

### The energy balance of a calorimeter

Because the calorimeter is insulated, essentially no heat escapes to the room. Whatever heat the reaction produces must warm the water and the calorimeter itself:

\[
q_{\text{reaction}} = -(q_{\text{water}} + q_{\text{calorimeter}})
\]

The minus sign is conservation bookkeeping: heat lost by the reaction is gained by the water and apparatus. If the reaction is exothermic, \(q_{\text{reaction}}\) is negative and temperature rises; if endothermic, it falls.

### Heat capacity of the apparatus

Two related quantities describe how the calorimeter responds:

- **Specific heat** \(c\) (J/(g·°C)) applies to a material such as water, using \(q = mc\Delta T\).
- **Calorimeter heat capacity** \(C_{\text{cal}}\) (J/°C) applies to the whole apparatus (vessel, stirrer, thermometer), using \(q = C_{\text{cal}}\Delta T\).

It is determined once by calibration — burning a known substance or adding a measured amount of heat and recording the temperature rise.

### Coffee-cup calorimetry: constant pressure

A coffee-cup calorimeter is two nested polystyrene cups with a lid, thermometer, and stirrer. Reactions run in water at atmospheric pressure, so pressure is constant and:

\[
q_p = \Delta H
\]

To find the heat of reaction, measure the temperature change of the solution, treat the solution like water (mass \(m\), specific heat 4.184 J/(g·°C)), and account for the small heat absorbed by the cup if it is significant. Typical applications include acid–base neutralization and heats of solution.

### Bomb calorimetry: constant volume

A bomb calorimeter is a thick-walled steel vessel (the "bomb") that holds a sample under high-pressure oxygen, surrounded by a water bath. The sample is ignited electrically and burns completely. Because the volume is fixed, the measured heat is \(q_v = \Delta E\). The calculation uses the heat capacity of the entire assembly:

\[
q_{\text{reaction}} = -C_{\text{cal}}\Delta T
\]

Bomb calorimetry is the standard way to measure the energy content of foods and fuels.

### Converting measured heat to meaningful quantities

Raw calorimetry data is a temperature change; the useful output is heat per mole (thermochemistry) or per gram (food and fuel energy). After finding the total heat, divide by the moles or grams involved:

\[
\frac{q_{\text{reaction}}}{n} = \text{kJ per mole} \qquad \frac{q_{\text{reaction}}}{m} = \text{kJ per gram}
\]

## ELI-10: Explain Like I'm 10

> A calorimeter is like a very well-insulated thermos. If you mix two chemicals inside and the mixture warms, the chemicals gave off heat, and the thermos keeps it from escaping so the thermometer can measure it. Because it is so well insulated, everything the reaction gives off (or takes in) shows up as an easy-to-measure temperature change.

## High-Yield Points

- Calorimetry measures heat flow through temperature change; energy conservation gives \(q_{\text{reaction}} = -(q_{\text{water}} + q_{\text{cal}})\).
- Coffee-cup calorimeter: constant pressure, so \(q_p = \Delta H\); open to the atmosphere, uses \(q = mc\Delta T\) for the solution.
- Bomb calorimeter: constant volume, so \(q_v = \Delta E\); sealed vessel, uses \(q = -C_{\text{cal}}\Delta T\).
- Calorimeter heat capacity \(C_{\text{cal}}\) is for the apparatus (J/°C); specific heat \(c\) is for a material (J/(g·°C)).
- Assume the solution's density and specific heat approximate those of water unless told otherwise.
- Always convert the measured heat into kJ per mole or per gram — that is the meaningful quantity.
- Heat lost by the reaction equals heat gained by the calorimeter; signs always oppose.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Calorimeter | Insulated device that measures heat flow via temperature change. | The instrument behind all measured heats of reaction. |
| Calorimetry | The technique of measuring heat flow in physical or chemical processes. | Converts temperature readings into energy quantities. |
| Heat capacity (\(C_{\text{cal}}\)) | Heat needed to raise the calorimeter assembly by 1 °C (J/°C). | Calibrated once, then used for every run. |
| Constant-pressure calorimetry | Measurement at atmospheric pressure (coffee-cup). | Yields \(q_p = \Delta H\), the enthalpy change. |
| Constant-volume calorimetry | Measurement in a sealed vessel (bomb). | Yields \(q_v = \Delta E\), the internal energy change. |
| Calibration | Determining the calorimeter's heat capacity with a known heat source. | Without it, temperature changes cannot be converted to heat. |
| Specific heat (\(c\)) | Heat to raise 1 g of a substance by 1 °C. | Used with \(q = mc\Delta T\) for the water or solution. |

## Worked Examples

### Example 1: Heat of neutralization in a coffee-cup calorimeter

In a coffee-cup calorimeter, 50.0 mL of 1.0 M HCl and 50.0 mL of 1.0 M NaOH, both at 22.0 °C, are mixed. The neutralization reaction:

\[
\text{H}^+ + \text{OH}^- \rightarrow \text{H}_2\text{O}
\]

releases heat, and the final temperature is 28.7 °C. Assume the combined solution has a mass of 100.0 g, a specific heat of 4.184 J/(g·°C), and negligible heat absorbed by the cups.

**Heat gained by the solution:**

\[
q = mc\Delta T = (100.0\ \text{g})\left(4.184\ \frac{\text{J}}{\text{g·°C}}\right)(28.7 - 22.0)\text{°C}
\]

\[
q = (100.0)(4.184)(6.7)\ \text{J} = 2.80 \times 10^{3}\ \text{J} = 2.80\ \text{kJ}
\]

The reaction released this heat, so \(q_{\text{rxn}} = -2.80\ \text{kJ}\).

**Heat per mole of water formed:** moles of H⁺ = 0.0500 L × 1.0 mol/L = 0.0500 mol = moles of OH⁻, so 0.0500 mol of water formed:

\[
\frac{q_{\text{rxn}}}{n} = \frac{-2.80\ \text{kJ}}{0.0500\ \text{mol}} = -56\ \text{kJ/mol}
\]

This matches the accepted strong-acid/strong-base neutralization heat (about −56 kJ/mol).

### Example 2: Calibrating a bomb calorimeter

A bomb calorimeter is calibrated with 1.000 g of benzoic acid, whose combustion energy is a well-established 26.41 kJ/g. Combustion raises the temperature by 6.77 °C.

**Calorimeter heat capacity:**

\[
C_{\text{cal}} = \frac{q}{\Delta T} = \frac{26.41\ \text{kJ}}{6.77\text{ °C}} = 3.90\ \frac{\text{kJ}}{\text{°C}}
\]

Now a 0.800 g food sample is burned in the same calorimeter and produces a temperature rise of 2.45 °C.

**Heat released:**

\[
q = -C_{\text{cal}}\Delta T = -\left(3.90\ \frac{\text{kJ}}{\text{°C}}\right)(2.45\text{ °C}) = -9.56\ \text{kJ}
\]

**Energy per gram of food:**

\[
\frac{9.56\ \text{kJ}}{0.800\ \text{g}} = 11.95\ \frac{\text{kJ}}{\text{g}} \approx 12.0\ \frac{\text{kJ}}{\text{g}}
\]

In nutritional Calories: 11.95 ÷ 4.184 ≈ 2.9 Cal/g — plausible for a mixed food (carbohydrates and proteins ≈ 4 Cal/g, fats ≈ 9 Cal/g).

### Example 3: Finding the specific heat of a metal

A 50.0 g sample of a metal is heated to 100.0 °C and dropped into 100.0 g of water at 22.0 °C in a coffee-cup calorimeter. The final temperature is 25.4 °C.

**Heat gained by water:**

\[
q = (100.0\ \text{g})\left(4.184\ \frac{\text{J}}{\text{g·°C}}\right)(25.4 - 22.0)\text{°C} = 1.42 \times 10^{3}\ \text{J}
\]

The metal lost this heat: \(q_{\text{metal}} = -1.42 \times 10^{3}\ \text{J}\). Its temperature change was \(100.0 - 25.4 = 74.6\text{ °C}\), so:

\[
c_{\text{metal}} = \frac{q}{m\Delta T} = \frac{1.42 \times 10^{3}\ \text{J}}{(50.0\ \text{g})(74.6\text{ °C})} = 0.38\ \frac{\text{J}}{\text{g·°C}}
\]

This value is close to the specific heat of copper (0.385 J/(g·°C)) — the metal is likely copper.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Constant pressure (\(q_p\)) | Constant volume (\(q_v\)) | \(q_p = \Delta H\) (coffee cup); \(q_v = \Delta E\) (bomb). They differ by the pressure–volume work term. |
| Heat capacity of calorimeter | Specific heat of water | \(C_{\text{cal}}\) is J/°C for the apparatus; \(c\) is J/(g·°C) for a material. Different equations, different units. |
| Temperature rise | Heat released | \(\Delta T\) is only raw data; you must multiply by mass and specific heat (or \(C_{\text{cal}}\)) to get heat. |
| Sign of \(q\) for the reaction | Sign of \(q\) for the water | They always oppose: if water warms (+), the reaction is exothermic (−). |
| Endpoint of a titration | Final temperature in calorimetry | A titration endpoint is a color signal; the calorimeter's final temperature is the equilibrium temperature after heat transfer. |

## Quick Review

1. Why does a calorimeter need to be well insulated?
2. A reaction in a coffee-cup calorimeter warms 200.0 g of solution by 3.5 °C. How much heat did the solution absorb?
3. What is the difference between \(q_p\) and \(q_v\), and which device measures each?
4. Why must a bomb calorimeter be calibrated?
5. In Example 1, why is the heat per mole −56 kJ/mol rather than −2.80 kJ?

<details>
<summary>Show answers</summary>

1. Insulation keeps heat from escaping to the room, so all the heat released or absorbed by the reaction shows up as a measurable temperature change in the calorimeter.
2. \(q = (200.0)(4.184)(3.5) = 2.93 \times 10^{3}\ \text{J} = 2.93\ \text{kJ}\) absorbed by the solution; the reaction released −2.93 kJ.
3. \(q_p\) is heat at constant pressure (equals \(\Delta H\), coffee-cup); \(q_v\) is heat at constant volume (equals \(\Delta E\), bomb). They differ by \(P\Delta V\) work.
4. The temperature rise must be converted to heat using the apparatus's heat capacity, which is unique to that instrument and determined by calibration with a known heat source such as benzoic acid.
5. −2.80 kJ is the heat for the whole experiment (0.0500 mol of water). Dividing by 0.0500 mol normalizes it to kJ per mole, the quantity that characterizes the reaction itself.

</details>

## Related Topics

- Previous: [Energy Basics](01-energy-basics.md)
- Next: [Enthalpy](03-enthalpy.md)
- Related: [Thermochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
