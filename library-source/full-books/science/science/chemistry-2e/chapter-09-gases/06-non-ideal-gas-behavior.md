---
title: "Non-Ideal Gas Behavior"
subject: "Science"
book: "Chemistry 2e"
chapter: "9: Gases"
topic_number: "6"
source: "chemistry-2e.md"
tags:
  - "non-ideal-gas-behavior"
  - "science"
status: "complete"
---

# Non-Ideal Gas Behavior

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 9: Gases](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

The ideal gas law, \(PV = nRT\), treats gas particles as point masses with zero volume that never attract one another. That model is remarkably accurate at ordinary temperatures and pressures. But it is a **model**, not reality: real molecules have finite size and attract each other weakly. When a gas is compressed to high pressure or cooled to low temperature, those simplifications stop being harmless, and the gas behaves **non-ideally**.

This topic covers when and why real gases deviate from the ideal gas law, the **compressibility factor** \(Z\) that measures deviation, and the **van der Waals equation**, a corrected equation of state.

## Why This Matters

Most real-world gas problems fall where the ideal gas law is "close enough" — but close enough is not exact. Engineers designing high-pressure cylinders, scuba tanks, and industrial ammonia synthesis must know when ideal-gas estimates fail, because a 10–20% pressure error can mean the difference between a safe vessel and a rupture. Scientists modeling planetary atmospheres and chemists studying gases near liquefaction need corrected equations. Non-ideal behavior also connects to the next chapter: the forces behind deviations are the forces behind liquids and solids.

## Core Concepts

### Where the ideal gas law breaks down

The ideal gas law assumes particles have negligible volume and exert no forces on each other. At low pressure, molecules are far apart: their own volume is a tiny fraction of the container, and attractions are rare. At high pressure or low temperature, molecules are crowded: the space they occupy matters, and attractions pull them closer than the ideal model expects.

### The compressibility factor

The **compressibility factor** compares a real gas's measured pressure to the ideal prediction:

\[
Z = \frac{PV}{nRT}
\]

For an ideal gas, \(Z = 1\) exactly. For a real gas:

- \(Z < 1\): the gas is **more compressible** than ideal — attractions pull molecules together, so pressure is lower than ideal.
- \(Z > 1\): the gas is **less compressible** than ideal — finite molecular volume resists compression, so pressure is higher than ideal.

At very high pressure, \(Z\) rises well above 1 for all gases because molecular volume dominates. At moderate pressure, \(Z\) dips slightly below 1 because attractions dominate.

### The van der Waals equation

The **van der Waals equation** modifies the ideal gas law with two correction terms:

\[
\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT
\]

The attraction correction adds \(\frac{an^2}{V^2}\) to the pressure: molecules feel a net inward pull that reduces the pressure the gas exerts on the walls. Constant \(a\) measures the strength of intermolecular attraction (units \(\text{L}^2\cdot\text{atm}/\text{mol}^2\)). The volume correction subtracts \(nb\): each mole occupies volume \(b\) unavailable for compression (units \(\text{L}/\text{mol}\)). Values are measured experimentally: for CO₂, \(a = 3.59\) and \(b = 0.0427\); for N₂, \(a = 1.39\) and \(b = 0.0391\) (OpenStax Chemistry 2e, Table 9.3). CO₂'s larger \(a\) reflects its stronger intermolecular attraction.

### Conditions that push gases off ideal behavior

- **High pressure:** molecules are forced close together, so both corrections matter.
- **Low temperature:** slow-moving molecules let attractions act; gases approach liquefaction.
- **Polar or large molecules:** strong intermolecular forces (large \(a\)) cause larger deviations.

Helium has tiny \(a\) and \(b\) values and stays nearly ideal over a wide range. Ammonia and water vapor deviate noticeably even at moderate pressures.

## ELI-10: Explain Like I’m 10

> Imagine a crowded school bus. The ideal gas rule says every student takes up zero space and never bothers anyone — that works when the bus is almost empty. When the bus is packed, students take up real room and tug on each other. The van der Waals equation says: subtract the space students actually fill, and add back the tugging they do.

## High-Yield Points

- The ideal gas law is exact only for a hypothetical gas; real gases deviate most at **high pressure** and **low temperature**.
- \(Z = PV/(nRT)\). \(Z = 1\) ideal; \(Z < 1\) attractions dominate; \(Z > 1\) molecular volume dominates.
- Van der Waals: \(\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT\). \(a\) corrects attraction; \(b\) corrects molecular volume.
- Gases with strong intermolecular forces (large \(a\)) deviate more; helium deviates least.
- At very high pressure the \(V - nb\) correction dominates (\(Z > 1\)); at moderate pressure attractions dominate (\(Z < 1\)).
- The van der Waals equation reduces to the ideal gas law when \(a = b = 0\).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| ideal gas | A hypothetical gas with zero-volume particles and no intermolecular attractions | The reference model real gases are compared against |
| compressibility factor, \(Z\) | The ratio \(PV/(nRT)\); how far a gas is from ideal behavior | One number that tells whether attractions (\(Z<1\)) or volume (\(Z>1\)) dominate |
| van der Waals equation | A corrected gas equation adding attraction and volume corrections to the ideal gas law | The most commonly used simple model for real-gas behavior |
| van der Waals constant \(a\) | A measure of intermolecular attraction strength in a gas | Larger \(a\) means stronger attractions and larger deviations |
| van der Waals constant \(b\) | Volume occupied by one mole of the gas molecules themselves | Larger \(b\) means molecules resist compression more |
| liquefaction | The change of a gas into a liquid | The extreme of non-ideal behavior, driven by attractions |

## How It Works / Step-by-Step Process

1. Write the ideal gas law and compute the ideal pressure.
2. Look up the van der Waals constants \(a\) and \(b\) for the specific gas.
3. Subtract \(nb\) from the container volume \(V\).
4. Add \(\frac{an^2}{V^2}\) to the pressure term.
5. Solve for the corrected pressure.
6. Compare with the ideal result and compute \(Z\) to state whether attractions or volume dominate.

## Worked Examples

### Example 1: Is 1.00 mol of CO₂ ideal in a 22.4 L container at 273 K?

Ideal gas law:

\[
P = \frac{nRT}{V} = \frac{(1.00\ \text{mol})(0.08206\ \text{L}\cdot\text{atm}/(\text{mol}\cdot\text{K}))(273\ \text{K})}{22.4\ \text{L}} = 1.00\ \text{atm}
\]

Van der Waals, solved for \(P\):

\[
P = \frac{nRT}{V - nb} - \frac{an^2}{V^2}
\]

Substitute \(a = 3.59\ \text{L}^2\cdot\text{atm}/\text{mol}^2\), \(b = 0.0427\ \text{L}/\text{mol}\):

\[
P = \frac{(1.00)(0.08206)(273)}{22.4 - (1.00)(0.0427)} - \frac{(3.59)(1.00)^2}{(22.4)^2}
\]

Volume correction: \(22.4 - 0.0427 = 22.3573\ \text{L}\), so

\[
\frac{nRT}{V - nb} = \frac{22.402\ \text{L}\cdot\text{atm}}{22.3573\ \text{L}} = 1.0020\ \text{atm}
\]

Pressure correction:

\[
\frac{an^2}{V^2} = \frac{3.59\ \text{L}^2\cdot\text{atm}/\text{mol}^2 \cdot (1.00\ \text{mol})^2}{(22.4\ \text{L})^2} = 0.00716\ \text{atm}
\]

So \(P = 1.0020 - 0.00716 = 0.995\ \text{atm}\), only about 0.5% below ideal — CO₂ behaves essentially ideally here. The two corrections act in opposite directions and nearly cancel.

### Example 2: The same 1.00 mol of CO₂ squeezed into 0.500 L at 273 K

Ideal gas law first:

\[
P = \frac{(1.00)(0.08206)(273)}{0.500} = 44.8\ \text{atm}
\]

Van der Waals with \(V = 0.500\ \text{L}\):

\[
P = \frac{(1.00)(0.08206)(273)}{0.500 - (1.00)(0.0427)} - \frac{(3.59)(1.00)^2}{(0.500)^2}
\]

Volume correction: \(0.500 - 0.0427 = 0.4573\ \text{L}\), so

\[
\frac{nRT}{V - nb} = \frac{22.402}{0.4573} = 48.99\ \text{atm}
\]

Pressure correction:

\[
\frac{an^2}{V^2} = \frac{3.59}{0.25} = 14.36\ \text{atm}
\]

\[
P = 48.99 - 14.36 = 34.6\ \text{atm}
\]

Now the real pressure is about 23% **lower** than ideal (34.6 vs 44.8 atm): at high pressure, attractions pull CO₂ molecules together, making the gas far more compressible than ideal. The compressibility factor confirms it:

\[
Z = \frac{PV}{nRT} = \frac{(34.6)(0.500)}{(1.00)(0.08206)(273)} = \frac{17.3}{22.4} = 0.77 < 1
\]

A \(Z\) below 1 means attractions dominate — why ideal-gas numbers fail for high-pressure CO₂ systems.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "The ideal gas law is wrong." | It is highly accurate at ordinary conditions; it fails systematically only at high pressure or low temperature. |
| "\(Z > 1\) always means attractions." | No — \(Z > 1\) means molecular volume dominates; \(Z < 1\) means attractions dominate. |
| "The \(a\) term adds pressure to the gas." | It adds a term to the equation to correct for the fact that attractions *reduce* measured pressure. |
| "\(b\) is the volume of one molecule." | It is the excluded volume per mole — space unavailable because molecules occupy it. |
| "The van der Waals equation is exact for real gases." | It is an improvement, not an exact law; other equations of state exist because no simple equation is perfect. |

## Quick Review

1. Under what two conditions does a real gas deviate most from the ideal gas law?
2. A gas has \(Z = 1.2\) at high pressure. Which correction dominates — attraction or molecular volume — and why?
3. Write the van der Waals equation and identify what \(a\) and \(b\) correct for.
4. In Example 2, why is the real pressure of compressed CO₂ *lower* than the ideal pressure?
5. Helium (\(a = 0.0342\)) vs CO₂ (\(a = 3.59\)) at the same conditions: which deviates more, and why?

<details>
<summary>Show answers</summary>

1. High pressure (molecules crowded together) and low temperature (slow motion lets attractions act).
2. Molecular volume. \(Z > 1\) means the gas is less compressible than ideal because the molecules' own volume resists squeezing.
3. \(\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT\). \(a\) corrects for intermolecular attraction; \(b\) corrects for molecular volume.
4. Attractive forces between CO₂ molecules pull them inward, reducing the force on the container walls — the \(an^2/V^2\) correction is large at small volume (14.4 atm), far larger than the small volume correction.
5. CO₂ deviates far more, because its much larger \(a\) constant means stronger intermolecular attractions.
</details>

## Related Topics

- Previous: [The Kinetic-Molecular Theory](05-the-kinetic-molecular-theory.md)
- Next: End of chapter — [Chapter 10: Liquids and Solids](../chapter-10-liquids-and-solids/README.md)
- Related: [Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law.md)
- Related: [Gases chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against OpenStax Chemistry 2e Table 9.3 and NIST-referenced data (2026-08).
- Last updated: 2026-08-16
