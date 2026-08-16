---
title: "Mathematical Treatment of Measurement Results"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "1: Essential Ideas"
topic_number: "6"
source: "chemistry-atoms-first-2e.md"
tags:
  - "mathematical-treatment-of-measurement-results"
  - "science"
status: "complete"
---

# Mathematical Treatment of Measurement Results

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 1: Essential Ideas](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Measurements become useful only when their units are handled correctly. This topic covers the three mathematical tools chemists apply to measured numbers every day: **unit conversion** (changing a quantity from one unit to another), **density calculations** (relating mass and volume), and **percent calculations** (expressing one part of a sample relative to the whole). The unifying technique is **dimensional analysis**, a method in which units are carried through the calculation and canceled exactly like numbers. When a conversion is set up properly, the units themselves confirm the setup: the answer simply falls out with the units the problem asked for. If the units do not cancel to the target, the setup is wrong no matter how the arithmetic comes out.

## Why This Matters

Unit conversions are not a classroom-only chore. Nearly every quantitative skill in this book — molar masses, stoichiometry, gas laws, and solution concentrations — begins with a unit conversion. In everyday life the same logic converts recipe amounts, estimates fuel efficiency, and checks whether a speed or distance is reasonable. In health-related fields, converting between units of mass or volume (for example, milligrams versus grams) is a matter of patient safety, and a backward conversion can shift a value by a factor of a thousand. Density is used to identify materials and to predict whether an object will float or sink, while percent reports composition in a form everyone can compare. Mastering these calculations early makes every later chapter faster and less error-prone.

## Core Concepts

### Conversion factors

A **conversion factor** is a fraction equal to 1 that is built from an equality between two units. The exact equality \(1\ \text{in} = 2.54\ \text{cm}\) gives two possible factors:

\[
\frac{2.54\ \text{cm}}{1\ \text{in}} \quad \text{and} \quad \frac{1\ \text{in}}{2.54\ \text{cm}}
\]

Because multiplying by 1 never changes a value, multiplying a measurement by either factor changes only its units, not the physical amount it represents. The trick is choosing the orientation that cancels the unit you started with.

### Dimensional analysis

In **dimensional analysis**, write the given quantity and then multiply by conversion factors arranged so that unwanted units cancel diagonally:

\[
\text{given quantity} \times \frac{\text{unit wanted}}{\text{unit given}} = \text{answer in wanted units}
\]

The unit plan is written before any arithmetic. If the units reduce correctly to the target, the numbers can be trusted; if they do not, the setup is wrong. This built-in check is why dimensional analysis is taught before any other calculation strategy.

### SI prefixes

The International System (SI) uses prefixes to scale base units by powers of ten. The ones used most often in chemistry are:

| Prefix | Symbol | Meaning |
|---|---|---|
| kilo | k | \(10^{3}\) |
| deci | d | \(10^{-1}\) |
| centi | c | \(10^{-2}\) |
| milli | m | \(10^{-3}\) |
| micro | \(\mu\) | \(10^{-6}\) |
| nano | n | \(10^{-9}\) |
| pico | p | \(10^{-12}\) |

Each prefix is really a conversion factor in disguise: because \(1\ \text{nm} = 10^{-9}\ \text{m}\), converting nanometers to meters uses the factor \(\frac{10^{-9}\ \text{m}}{1\ \text{nm}}\).

### Density

**Density** is the mass of a substance divided by its volume:

\[
d = \frac{m}{V}
\]

Typical units are grams per milliliter (\(\text{g/mL}\)) or grams per cubic centimeter (\(\text{g/cm}^3\)). Because \(1\ \text{mL} = 1\ \text{cm}^3\), the two units give numerically identical densities. Density is an **intensive property**: it does not depend on how much sample you have. Rearranging the definition lets density serve as a conversion factor between mass and volume:

\[
m = d \cdot V \qquad V = \frac{m}{d}
\]

### Percent

**Percent** means "parts per hundred":

\[
\text{percent} = \frac{\text{part}}{\text{whole}} \times 100\%
\]

The part and the whole must be measured in the same units; the resulting percent is a dimensionless ratio. For example, if 25 of every 100 students in a survey ride a bike, then 25% ride bikes.

## ELI-10: Explain Like I'm 10

> Changing units is like trading money at a bank: you multiply by an exchange rate that cancels the old currency and leaves you with the new one. Density tells you how heavy a fixed-size lump of material is, so it lets you find a lump's weight from its size or its size from its weight. Percent just means "out of 100," like saying 25 out of every 100 students ride a bike.

## High-Yield Points

- A conversion factor is a fraction equal to 1; choose the orientation that cancels the starting unit.
- Write the unit plan before calculating; if units do not cancel to the target, the setup is wrong.
- Know the common SI prefixes — kilo, centi, milli, micro, nano — and their powers of ten.
- \(1\ \text{mL} = 1\ \text{cm}^3\), so \(\text{g/mL}\) and \(\text{g/cm}^3\) are numerically interchangeable.
- Density is \(d = m/V\); rearrange it to use density as a bridge between mass and volume.
- Percent = (part/whole) × 100%; part and whole must share the same units.
- Check magnitudes: common solid densities fall near 1–20 g/cm³; a wildly off value signals an error.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| conversion factor | A fraction equal to 1 expressing one unit in terms of another | Allows unit changes without changing the physical amount |
| dimensional analysis | Calculation method that carries units through and cancels them | Units verify the setup and catch inverted conversions |
| SI prefix | A letter or symbol scaling a base unit by a power of ten | Standardizes very large and very small measurements |
| density | Mass of a substance divided by its volume | Identifies materials and converts between mass and volume |
| percent | A part of a whole expressed per hundred | Standard, comparable way to report composition |
| intensive property | A property independent of sample size | Density of a substance is the same for any sample |

## How It Works / Step-by-Step Process

1. Read the problem and identify the starting quantity with its units and the target units.
2. Write each needed equality (for example, \(1\ \text{km} = 1000\ \text{m}\)).
3. Build conversion factors and arrange them so unwanted units cancel.
4. Multiply the numbers and track the units to the final answer.
5. Check that the magnitude and units are reasonable for the quantity described.

## Example

### Worked Example 1: Speed conversion by dimensional analysis

Convert \(72\ \text{km/h}\) to meters per second.

The equalities needed are \(1\ \text{km} = 1000\ \text{m}\) and \(1\ \text{h} = 3600\ \text{s}\). Set up the factors so that kilometers and hours cancel:

\[
72\ \frac{\text{km}}{\text{h}} \times \frac{1000\ \text{m}}{1\ \text{km}} \times \frac{1\ \text{h}}{3600\ \text{s}} = \frac{72 \times 1000}{3600}\ \frac{\text{m}}{\text{s}} = 20\ \text{m/s}
\]

Unit check: km cancels with km and h cancels with h, leaving m/s. Magnitude check: 72 km/h is highway speed, and 20 m/s is the familiar equivalent (since 1 m/s = 3.6 km/h).

### Worked Example 2: Density as a conversion factor

A block of aluminum has a volume of \(25.0\ \text{cm}^3\) and a mass of \(67.5\ \text{g}\). (a) Find its density. (b) What volume would \(270\ \text{g}\) of the same aluminum occupy?

(a) Use the density definition:

\[
d = \frac{m}{V} = \frac{67.5\ \text{g}}{25.0\ \text{cm}^3} = 2.70\ \text{g/cm}^3
\]

(b) Rearrange the definition to solve for volume, then substitute:

\[
V = \frac{m}{d} = 270\ \text{g} \times \frac{1\ \text{cm}^3}{2.70\ \text{g}} = 100\ \text{cm}^3
\]

Unit check: grams cancel, leaving cm³. Magnitude check: 270 g is four times 67.5 g, and 100 cm³ is four times 25.0 cm³, so the density is unchanged, as expected for an intensive property.

### Worked Example 3: Percent composition of a sample

A \(2.50\ \text{g}\) sample of a copper–zinc alloy contains \(0.90\ \text{g}\) of zinc. What percent of the alloy is zinc?

\[
\text{percent Zn} = \frac{0.90\ \text{g}}{2.50\ \text{g}} \times 100\% = 36\%
\]

The grams cancel, leaving a percentage. Because the whole is 100%, copper accounts for the remainder, \(100\% - 36\% = 64\%\).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Mass | Weight | Mass measures the amount of matter (g, kg); weight is a force. The two are proportional on Earth but not interchangeable conceptually. |
| \(\text{g/mL}\) and \(\text{g/cm}^3\) | Different densities | They are numerically identical because \(1\ \text{mL} = 1\ \text{cm}^3\). |
| Multiplying by a factor | Dividing by it | Let unit cancellation decide the orientation: the starting unit must land in the denominator. |
| Percent | Decimal fraction | A percent is a fraction times 100; 0.36 and 36% are the same quantity written differently — a classic test trap is reporting the decimal when percent is asked. |
| Micro (\(10^{-6}\)) | Nano (\(10^{-9}\)) | One is a thousand times the other; mixing prefixes shifts answers by a factor of 1000. |

## Quick Review

1. How many meters are in \(3.5\ \text{km}\)?
2. A liquid has a density of \(0.79\ \text{g/mL}\). What mass is present in \(250\ \text{mL}\) of the liquid?
3. Why does dimensional analysis act as a built-in error check?
4. A \(1.20\ \text{g}\) tablet contains \(0.30\ \text{g}\) of active ingredient. What percent of the tablet is the active ingredient?
5. A calculation produces a density of \(250\ \text{g/cm}^3\) for a common metal. What should you suspect?

<details>
<summary>Show answers</summary>

1. \(3.5\ \text{km} \times \frac{1000\ \text{m}}{1\ \text{km}} = 3.5 \times 10^{3}\ \text{m}\).
2. \(250\ \text{mL} \times \frac{0.79\ \text{g}}{1\ \text{mL}} = 198\ \text{g}\) (about \(2.0 \times 10^{2}\ \text{g}\)).
3. Because units are carried through the calculation: if the starting units do not cancel to the target unit, the setup is wrong even before the arithmetic is done.
4. \(\frac{0.30\ \text{g}}{1.20\ \text{g}} \times 100\% = 25\%\).
5. The setup or arithmetic is probably wrong. Common solids have densities near 1–20 g/cm³; 250 g/cm³ is off by orders of magnitude.

</details>

## Related Topics

- Previous: [Measurement Uncertainty, Accuracy, and Precision](05-measurement-uncertainty-accuracy-and-precision.md)
- Next: End of chapter
- Related: [Measurements](04-measurements.md), [Phases and Classification of Matter](02-phases-and-classification-of-matter.md), [Essential Ideas chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
