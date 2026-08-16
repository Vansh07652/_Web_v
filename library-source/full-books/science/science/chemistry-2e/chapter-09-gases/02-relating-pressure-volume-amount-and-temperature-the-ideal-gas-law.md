---
title: "Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law"
subject: "Science"
book: "Chemistry 2e"
chapter: "9: Gases"
topic_number: "2"
source: "chemistry-2e.md"
tags:
  - "relating-pressure-volume-amount-and-temperature-the-ideal-gas-law"
  - "science"
status: "complete"
---

# Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 9: Gases](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Four properties describe any gas sample: pressure \(P\), volume \(V\), temperature \(T\), and amount of substance \(n\). The gas laws of the 1600s–1800s were discovered one pair at a time — hold two properties constant, change a third, and watch the fourth respond. Boyle found that squeezing a gas raises its pressure and shrinks its volume at constant temperature; Charles found that heating a gas expands it at constant pressure; Avogadro found that more gas means more volume at constant pressure and temperature. The **ideal gas law** combines all of these into a single equation:

\[ PV = nRT \]

where \(R\) is the ideal gas constant. This equation describes an *ideal* gas — a simplified model in which gas particles have negligible volume and do not attract one another. Real gases (air, oxygen, helium, carbon dioxide) follow it closely at ordinary temperatures and pressures, making the ideal gas law one of the most useful relationships in all of chemistry.

## Why This Matters

- **Predicting and controlling systems:** Any closed container of gas — a scuba tank, weather balloon, anesthesia circuit, car airbag, or industrial reactor — can be analyzed with the ideal gas law. Given any three of \(P, V, n, T\), the fourth is calculable.
- **Healthcare:** Oxygen tanks for patients are filled to high pressure so a small tank holds many moles of O₂. The pressure–volume–temperature relationships here explain why oxygen cylinders must be stored away from heat.
- **Weather and aviation:** Weather balloons expand as they rise because external pressure drops; hot-air balloons lift because heating expands the air inside. Both are Charles's law in action.
- **Diving safety:** How dissolved gases behave in divers' blood (decompression sickness risk) depends on how gas pressure and volume change with depth.
- **Exams:** Boyle's, Charles's, Avogadro's, and the combined gas laws, plus \(PV = nRT\) with unit conversions, are among the most tested concepts in general chemistry.

## Core Concepts

### Temperature must be in kelvin

Every gas law in this chapter requires **absolute temperature** in kelvin (K). The kelvin scale starts at absolute zero (0 K = −273.15 °C), where particle motion is minimal. Convert with:

\[ T(\text{K}) = T(°\text{C}) + 273.15 \]

Why kelvin? The gas laws are proportionalities — double the kelvin temperature and the volume doubles. That only works when the scale starts at true zero. Using Celsius would make "doubling" meaningless, and dividing by a negative Celsius temperature would produce nonsense. Convert to kelvin *before* substituting into any gas law.

### Boyle's law: pressure and volume at constant \(n\) and \(T\)

Robert Boyle (1662) showed that at constant temperature and amount, pressure and volume are **inversely proportional**:

\[ P_1V_1 = P_2V_2 \]

Squeeze a gas into half its volume and the pressure doubles. This is why a syringe with a blocked tip is hard to push and why a balloon shrinks when you sit on it.

### Charles's law: volume and temperature at constant \(n\) and \(P\)

Jacques Charles (1787) showed that at constant pressure and amount, volume is **directly proportional** to kelvin temperature:

\[ \frac{V_1}{T_1} = \frac{V_2}{T_2} \]

Heat a gas and its particles move faster, striking walls harder and more often; to keep pressure constant, the container must expand. This is why hot-air balloons rise and why a balloon left in a hot car expands.

### Gay-Lussac's (Amontons') law: pressure and temperature at constant \(n\) and \(V\)

At constant volume and amount, pressure is **directly proportional** to kelvin temperature:

\[ \frac{P_1}{T_1} = \frac{P_2}{T_2} \]

A sealed soda can left in a hot car heats up; the gas above the liquid gains pressure, which is why cans can bulge or burst. Aerosol cans carry "do not incinerate / store below 120 °F" warnings for exactly this reason.

### Avogadro's law: volume and amount at constant \(P\) and \(T\)

Equal volumes of gases at the same temperature and pressure contain equal numbers of particles:

\[ \frac{V_1}{n_1} = \frac{V_2}{n_2} \]

Blow more air into a balloon and it grows; release gas and it shrinks. This law bridges gas volume and moles, making gas stoichiometry possible (Topic 3).

### The combined gas law

When several conditions change at once (amount fixed), the individual laws merge into one expression:

\[ \frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2} \]

This is the workhorse equation for problems where a gas sample changes conditions — a balloon rising, a tire warming, a syringe being compressed. Each individual law is just the combined law with one variable held constant.

### The ideal gas law

Combining all four proportionalities gives:

\[ PV = nRT \]

with \(n\) in moles and \(R\) the ideal gas constant. The value of \(R\) depends on the pressure and volume units:

| Units of P and V | Value of R |
|---|---|
| atm and L | 0.08206 L·atm/(mol·K) |
| kPa and L | 8.314 L·kPa/(mol·K) |
| mmHg (torr) and L | 62.36 L·mmHg/(mol·K) |

At **STP** (273.15 K and 1 atm), one mole of any ideal gas occupies 22.4 L — the standard molar volume. The ideal gas law works best at low pressure and high temperature, where real gases behave most ideally (see Topic 6 for deviations).

## ELI-10: Explain Like I'm 10

Imagine a box of bouncy balls. If you make the box smaller without losing balls, the balls hit the walls more often — that's Boyle's law (smaller box, higher pressure). If you warm the balls so they bounce faster, they push the walls harder and the box stretches — that's Charles's law (hotter, bigger). If you add more balls, the box must grow to fit them — that's Avogadro's law. The ideal gas law is the one big rule tying it all together: more balls, smaller box, or hotter balls all mean more wall-pushing.

## High-Yield Points

- The ideal gas law is \(PV = nRT\); use \(R = 0.08206\) for atm·L units.
- ALWAYS convert Celsius to kelvin (\(T_\text{K} = T_\text{°C} + 273.15\)) before using any gas law.
- Boyle: \(P_1V_1 = P_2V_2\) (inverse). Charles: \(V_1/T_1 = V_2/T_2\) (direct, K only). Gay-Lussac: \(P_1/T_1 = P_2/T_2\) (direct, K only). Avogadro: \(V_1/n_1 = V_2/n_2\).
- Combined gas law \(\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}\) handles any fixed-amount change-of-conditions problem.
- At STP (273.15 K, 1 atm), 1 mol ideal gas = 22.4 L.
- Write the formula first, substitute numbers with units, then compute — units must cancel to give the correct final unit.
- The ideal gas law is a model: real gases deviate at high pressure and low temperature.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Ideal gas law | Equation \(PV = nRT\) relating pressure, volume, amount, and temperature | The central equation of gas chemistry; solves for any one variable given the other three |
| Ideal gas constant (R) | The proportionality constant in \(PV = nRT\); value depends on units | Using the wrong R (0.08206 vs 62.36) is a classic exam error |
| Boyle's law | At constant T and n, pressure and volume are inversely proportional | Explains compression and expansion of gases |
| Charles's law | At constant P and n, volume is directly proportional to kelvin temperature | Explains thermal expansion of gases, hot-air balloons |
| Gay-Lussac's law | At constant V and n, pressure is directly proportional to kelvin temperature | Explains why sealed containers overheat and burst |
| Avogadro's law | At constant P and T, volume is proportional to moles of gas | Links gas volume to moles; basis of gas stoichiometry |
| STP | Standard temperature and pressure: 273.15 K and 1 atm | Gives a reference condition; molar volume 22.4 L/mol |
| Kelvin scale | Absolute temperature scale starting at 0 K = −273.15 °C | Required in all gas law calculations |

## Worked Examples

### Example 1: Charles's law — balloon in a freezer

A balloon holds 3.00 L of air at 25.0 °C at constant pressure. It is placed in a freezer at −10.0 °C. What is the new volume?

**Step 1 — write the formula** (constant \(P\), constant \(n\)):

\[ \frac{V_1}{T_1} = \frac{V_2}{T_2} \]

**Step 2 — convert temperatures to kelvin:**

\[ T_1 = 25.0 + 273.15 = 298.15\ \text{K} \quad;\quad T_2 = -10.0 + 273.15 = 263.15\ \text{K} \]

**Step 3 — solve for \(V_2\) and substitute:**

\[ V_2 = V_1 \times \frac{T_2}{T_1} = 3.00\ \text{L} \times \frac{263.15\ \text{K}}{298.15\ \text{K}} = 2.65\ \text{L} \]

The volume shrank from 3.00 L to 2.65 L — sensible, because cooling slows the particles so the balloon contracts.

### Example 2: Combined gas law — a balloon rising

A weather balloon contains 25.0 L of helium at 1.00 atm and 20.0 °C. It rises to where the pressure is 0.500 atm and the temperature is −30.0 °C. Find the new volume.

**Step 1 — write the formula** (amount fixed):

\[ \frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2} \]

**Step 2 — convert to kelvin:**

\[ T_1 = 20.0 + 273.15 = 293.15\ \text{K} \quad;\quad T_2 = -30.0 + 273.15 = 243.15\ \text{K} \]

**Step 3 — solve for \(V_2\) and substitute:**

\[ V_2 = V_1 \times \frac{P_1}{P_2} \times \frac{T_2}{T_1} = 25.0\ \text{L} \times \frac{1.00\ \text{atm}}{0.500\ \text{atm}} \times \frac{243.15\ \text{K}}{293.15\ \text{K}} = 41.5\ \text{L} \]

Check the direction: pressure halved (should double the volume), temperature dropped (should shrink it). Doubling then shrinking ~17% gives a net increase — 41.5 L from 25.0 L is reasonable.

### Example 3: Ideal gas law — moles of gas in a tank

How many moles of nitrogen gas are in a 10.0 L cylinder at 25.0 °C and 15.0 atm?

**Step 1 — write the formula:**

\[ PV = nRT \]

**Step 2 — convert T to kelvin:** \(T = 25.0 + 273.15 = 298.15\ \text{K}\).

**Step 3 — solve for \(n\) and substitute** (using \(R = 0.08206\ \text{L·atm/(mol·K)}\) since P is in atm and V in L):

\[ n = \frac{PV}{RT} = \frac{(15.0\ \text{atm})(10.0\ \text{L})}{(0.08206\ \text{L·atm/(mol·K)})(298.15\ \text{K})} = 6.13\ \text{mol} \]

Check units: atm, L, and K cancel, leaving mol. The cylinder holds about 6.1 mol of N₂ — roughly 172 g of gas.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Kelvin temperature | Celsius temperature in gas laws | Gas laws require kelvin; 0 °C is 273.15 K, not "zero" |
| Boyle's law (inverse) | Charles's law (direct) | Boyle: P vs V at constant T (one up, other down). Charles: V vs T at constant P (both up or down) |
| \(R = 0.08206\) | \(R = 62.36\) or \(8.314\) | 0.08206 pairs with atm·L; 62.36 with mmHg·L; 8.314 with kPa·L. Match units or answers are off by 760× |
| Volume change with T (Charles) | Volume change with P (Boyle) | Same variable (V) but different partner and opposite proportionality direction |
| STP | Room temperature | STP is 273.15 K and 1 atm (molar volume 22.4 L); room conditions are roughly 298 K and 1 atm |
| Ideal gas | Real gas | Ideal gas assumes point particles with no attractions; real gases deviate at high P / low T (Topic 6) |
| n (moles) | Mass | n is amount in moles; convert mass to moles with molar mass before using \(PV = nRT\) |

## Quick Review

1. Write the ideal gas law and state what each symbol means.
2. A gas occupies 5.00 L at 300 K. At constant pressure and amount, what volume does it occupy at 600 K?
3. Why must temperature be in kelvin in all gas law calculations?
4. A 2.00 L flask contains 0.500 mol of gas at 27.0 °C. What is the pressure in atm?
5. What is the volume of 1.00 mol of an ideal gas at STP?

<details>
<summary>Show answers</summary>

1. \(PV = nRT\): P = pressure, V = volume, n = moles, T = kelvin temperature, R = ideal gas constant.
2. \(V_2 = V_1(T_2/T_1) = 5.00\ \text{L} \times (600/300) = 10.0\ \text{L}\). Doubling kelvin temperature doubles volume (Charles's law).
3. The gas laws are proportionalities that only hold on a scale starting at absolute zero; doubling kelvin temperature doubles particle kinetic energy and volume, but doubling Celsius temperature has no such meaning.
4. \(T = 27.0 + 273.15 = 300.15\ \text{K}\); \(P = nRT/V = (0.500)(0.08206)(300.15)/(2.00) = 6.16\ \text{atm}\).
5. 22.4 L (standard molar volume at STP: 273.15 K, 1 atm).

</details>

## Related Topics

- Previous: [Gas Pressure](01-gas-pressure.md)
- Next: [Stoichiometry of Gaseous Substances, Mixtures, and Reactions](03-stoichiometry-of-gaseous-substances-mixtures-and-reactions.md)
- Related: [Gases chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Standard constants used (R = 0.08206 L·atm·mol⁻¹·K⁻¹, 0 °C = 273.15 K, STP molar volume 22.4 L/mol) are widely published reference values (NIST/IUPAC conventions); verify against current primary sources before formal citation.
- Last updated: 2026-08-16
