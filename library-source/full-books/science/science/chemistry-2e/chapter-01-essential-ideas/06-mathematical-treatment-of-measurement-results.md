---
title: "Mathematical Treatment of Measurement Results"
subject: "Science"
book: "Chemistry 2e"
chapter: "1: Essential Ideas"
topic_number: "6"
source: "chemistry-2e.md"
tags:
  - "mathematical-treatment-of-measurement-results"
  - "science"
status: "complete"
---

# Mathematical Treatment of Measurement Results

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 1: Essential Ideas](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Chemistry is a quantitative science: every meaningful measurement pairs a **number with a unit**. A result of "4.50" is meaningless until you add "grams," "liters," or "moles." This topic gives you the tools to move confidently between units: **SI base units** as the common language, **conversion factors** built from exact equalities, and **dimensional analysis** — the unit-canceling method that keeps conversions correct without memorizing formulas. The same toolkit handles temperature conversions (°C, °F, K) and **density**, which bridges mass and volume.

## Why This Matters

Unit errors are among the most common and most dangerous mistakes in chemistry. A medication dose in the wrong unit, a reagent measured in milliliters instead of liters, or mixed metric/imperial units in engineering (a real factor in the loss of the Mars Climate Orbiter in 1999) all trace back to failed conversions. In the lab, balances report grams while pipettes deliver milliliters — converting requires density. In health care, doses are often given per kilogram of body mass, so staff convert pounds to kilograms daily.

## Core Concepts

### SI base units: the common language

The International System of Units (SI) defines seven base units from which all others derive. Every scientist uses the same ones, which is why a result in Tokyo is reproducible in Toronto:

| Quantity | Base unit | Symbol |
|---|---|---|
| Length | meter | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

Derived units combine base units — volume in cubic meters (\(m^3\)), speed in meters per second (\(m/s\)), density in kilograms per cubic meter (\(kg/m^3\)). In the lab you will more often meet convenient relatives: liters (1 L = 1000 cm³ = 1 dm³) and grams.

### Equalities become conversion factors

Any equality — \(1\ \text{ft} = 12\ \text{in}\), \(1\ \text{in} = 2.54\ \text{cm}\) (exact by definition), \(1\ \text{kg} = 2.205\ \text{lb}\), \(1\ \text{L} = 1000\ \text{mL}\) — can be written as a fraction equal to 1. Multiplying by 1 changes nothing, so you may multiply any quantity by a conversion factor freely:

\[
\frac{12\ \text{in}}{1\ \text{ft}} = 1 \qquad \text{and} \qquad \frac{1\ \text{ft}}{12\ \text{in}} = 1
\]

The art is choosing the orientation that cancels the unit you have.

### Dimensional analysis: let the units do the work

Write the given quantity, multiply it by conversion factors arranged so unwanted units cancel like algebraic symbols, and read the answer's unit from whatever remains:

\[
\text{desired} = \text{given} \times \frac{\text{new unit}}{\text{old unit}} \times \frac{\text{next new unit}}{\text{next old unit}} \times \cdots
\]

If the units do not come out right, the setup is wrong — no exceptions. That self-checking property is why dimensional analysis beats memorized formulas. The final answer must also respect the **significant figures** of the least precise given value; exact conversion factors (like 2.54 cm/in) never limit the answer's precision.

### Temperature scales

Kelvin is the SI base unit and the scale used in gas-law calculations, where temperatures must be absolute. The conversions are exact linear relationships:

\[
\text{K} = {}^{\circ}\text{C} + 273.15
\]

\[
{}^{\circ}\text{C} = \frac{5}{9}\left({}^{\circ}\text{F} - 32\right) \qquad \text{and} \qquad {}^{\circ}\text{F} = \frac{9}{5}\,{}^{\circ}\text{C} + 32
\]

A kelvin and a degree Celsius are the **same size** — only the zero points differ — while a Fahrenheit degree is smaller (9 °F spans 5 °C).

### Density: mass per unit volume

Density is a ratio that behaves like a conversion factor between mass and volume:

\[
d = \frac{m}{V}
\]

where \(d\) is density, \(m\) is mass, and \(V\) is volume. Common units are \(g/cm^3\) or \(g/mL\) (identical, since 1 cm³ = 1 mL). Water's density is 1.00 g/mL at 4 °C, so objects less dense than 1 g/mL float. Because density is a fixed property of a pure substance under given conditions, it also helps identify unknowns.

## ELI-10: Explain Like I'm 10

Converting units is like trading coins at a bank. If 1 dollar equals 100 pennies, you can "trade" 5 dollars for 500 pennies by multiplying: \(5 \times 100 = 500\). Hold the exchange rate the right way up — dollars on the bottom so dollars cancel. Chemistry does the same with meters, grams, and liters: line up the "exchange rates" so old units cancel, and the units left over tell you the answer.

## High-Yield Points

- Every measurement = number × unit; the unit is half the information.
- The seven SI base units: meter, kilogram, second, ampere, kelvin, mole, candela.
- A conversion factor is a fraction equal to 1, built from an equality; choose the orientation that cancels the given unit.
- Dimensional analysis is self-checking: wrong units = wrong setup.
- Temperature: \(\text{K} = {}^{\circ}\text{C} + 273.15\); °F→°C subtracts 32 then multiplies by 5/9; °C→°F multiplies by 9/5 then adds 32.
- Density \(d = m/V\) converts between mass and volume; water is 1.00 g/mL at 4 °C.
- Exact conversion factors (2.54 cm/in, 12 in/ft) never affect significant figures; measured values do.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| SI base unit | One of seven defined units (m, kg, s, A, K, mol, cd) from which all others derive | The shared language that makes measurements reproducible worldwide |
| Derived unit | A unit built from base units, such as \(m/s\) or \(kg/m^3\) | Describes quantities like speed and density compactly |
| Conversion factor | A fraction equal to 1, formed from an equality, e.g. \(12\ \text{in}/1\ \text{ft}\) | The engine of every unit conversion |
| Dimensional analysis | Solving problems by canceling units through multiplication by conversion factors | Self-checking method that catches setup errors |
| Kelvin | The SI temperature unit; \(K = {}^{\circ}C + 273.15\) | Required for gas laws and absolute-temperature calculations |
| Density | Mass divided by volume, \(d = m/V\) | Links mass and volume; used for identification and conversion |
| Significant figures | Digits known with certainty plus one estimated digit | Keeps converted answers honestly precise |

## Worked Examples

**Example 1 — Converting length with two steps.** How many centimeters are in 6.8 feet?

The equalities \(1\ \text{ft} = 12\ \text{in}\) and \(1\ \text{in} = 2.54\ \text{cm}\) give the conversion factors. Apply them so units cancel:

\[
6.8\ \text{ft} \times \frac{12\ \text{in}}{1\ \text{ft}} \times \frac{2.54\ \text{cm}}{1\ \text{in}} = 207.264\ \text{cm}
\]

The given value has 2 significant figures, so the answer is \(2.1 \times 10^2\ \text{cm}\) — "ft" cancels against "ft" and "in" against "in," leaving only centimeters.

**Example 2 — Converting a rate.** A car travels at 75.0 miles per hour. What is that speed in kilometers per hour? (1 mi = 1.60934 km)

\[
75.0\ \frac{\text{mi}}{\text{h}} \times \frac{1.60934\ \text{km}}{1\ \text{mi}} = 120.7\ \frac{\text{km}}{\text{h}}
\]

The "mi" cancels top and bottom; the hour stays put.

**Example 3 — Converting temperature.** Normal body temperature is 98.6 °F. Express it in °C and in K.

First °C, using the formula before substituting:

\[
{}^{\circ}\text{C} = \frac{5}{9}\left({}^{\circ}\text{F} - 32\right) = \frac{5}{9}\left(98.6 - 32\right) = \frac{5}{9}\left(66.6\right) = 37.0\ {}^{\circ}\text{C}
\]

Then kelvin:

\[
\text{K} = {}^{\circ}\text{C} + 273.15 = 37.0 + 273.15 = 310.2\ \text{K}
\]

**Example 4 — Density as a conversion factor.** A piece of aluminum has mass 13.5 g and volume 5.00 cm³. What is its density? What mass would a 10.0 cm³ block of the same metal have?

Write the density formula, then substitute:

\[
d = \frac{m}{V} = \frac{13.5\ \text{g}}{5.00\ \text{cm}^3} = 2.70\ \frac{\text{g}}{\text{cm}^3}
\]

Now use density to convert volume to mass:

\[
m = d \times V = 2.70\ \frac{\text{g}}{\text{cm}^3} \times 10.0\ \text{cm}^3 = 27.0\ \text{g}
\]

The cm³ units cancel, leaving grams.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Mass | Weight | Mass is the amount of matter (kg); weight is the gravitational force on it — it changes with location |
| Kelvins | Degrees Celsius | Same degree size, different zero points: \(K = {}^{\circ}C + 273.15\), so 0 °C = 273.15 K |
| Multiplying by a conversion factor | Dividing | Choose the orientation that cancels the unit you start with; the wrong orientation gives nonsense units |
| 1 cm³ | 1 mL | They are equal (both \(10^{-6}\ \text{m}^3\)) — a useful bridge between volume units |
| °C→°F | °F→°C | °F→°C subtracts 32 then multiplies by 5/9; °C→°F multiplies by 9/5 then adds 32. Mixing them up is a classic exam trap |
| Significant figures | Decimal places | 2.10 × 10² has 3 significant figures but only 1 decimal place; the rules depend on the operation, not the decimal's position |

## Quick Review

1. Write the equality \(1\ \text{ft} = 12\ \text{in}\) as a conversion factor in the two possible orientations.
2. Convert 3.5 liters to milliliters using dimensional analysis. Which unit cancels?
3. A room is at 22.0 °C. Convert to kelvin and to degrees Fahrenheit.
4. A liquid has density 0.79 g/mL. What mass is contained in 25.0 mL of it?
5. Why does an exact conversion factor like 12 in/ft never limit the significant figures of an answer?

<details>
<summary>Show answers</summary>

1. \(\frac{12\ \text{in}}{1\ \text{ft}}\) and \(\frac{1\ \text{ft}}{12\ \text{in}}\); both equal exactly 1.
2. \(3.5\ \text{L} \times \frac{1000\ \text{mL}}{1\ \text{L}} = 3500\ \text{mL}\) (3.5 × 10³ mL with 2 significant figures). The liter cancels.
3. \(K = 22.0 + 273.15 = 295.2\ \text{K}\). For °F: \({}^{\circ}\text{F} = \frac{9}{5}(22.0) + 32 = 71.6\ {}^{\circ}\text{F}\).
4. \(m = d \times V = 0.79\ \frac{\text{g}}{\text{mL}} \times 25.0\ \text{mL} = 20.\ \text{g}\) (2 significant figures, because 0.79 limits the precision).
5. Exact conversion factors are defined quantities with unlimited significant figures; they carry no uncertainty, so they never reduce the precision of the final answer. Only measured values do.

</details>

## Related Topics

- Previous: [Measurement Uncertainty, Accuracy, and Precision](05-measurement-uncertainty-accuracy-and-precision.md)
- Next: End of chapter
- Related: [Essential Ideas chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (densities, conversion factors, body temperature) are standard reference values; verify against current sources before relying on them in assessments.
- Last updated: 2026-08-16
