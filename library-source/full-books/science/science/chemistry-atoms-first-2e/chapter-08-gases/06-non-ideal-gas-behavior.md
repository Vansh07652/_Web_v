---
title: "Non-Ideal Gas Behavior"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "8: Gases"
topic_number: "6"
source: "chemistry-atoms-first-2e.md"
tags:
  - "non-ideal-gas-behavior"
  - "science"
status: "complete"
---

# Non-Ideal Gas Behavior

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 8: Gases](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

The ideal gas law, \(PV = nRT\), is remarkably accurate at ordinary conditions — but not exact, because it rests on two simplifying assumptions: gas particles have negligible volume, and they exert no forces on one another. Real molecules *do* have size, and they *do* attract each other weakly. When a gas is squeezed to high pressure or cooled to low temperature, those assumptions break down and the gas deviates measurably from ideal behavior.

This topic examines **when and why real gases misbehave**, introduces the **compressibility factor \(Z\)** as a quantitative measure of deviation, and presents the **van der Waals equation**, the most famous correction to the ideal gas law. Its constants \(a\) and \(b\) are not just fitting parameters — they encode physical information about the strength of a gas's intermolecular attractions and the size of its molecules.

## Why This Matters

- **High-pressure industry is real chemistry.** Natural gas pipelines, gas cylinders, and liquefied petroleum gas all operate where ideal-gas predictions are measurably wrong; engineers use corrected equations to size tanks and set safe pressures.
- **Refrigeration depends on non-ideal behavior.** Refrigerants are compressed until their attractions pull them into liquids — something an ideal gas can never do, since ideal gases cannot condense.
- **Balloons and scuba tanks push the limits.** A weather balloon at altitude is nearly ideal, but a scuba tank at 200 atm is not; knowing when \(PV = nRT\) fails prevents dangerous miscalculations.
- **It sharpens your mental model.** Understanding *why* a model fails teaches more than memorizing when it succeeds — and exam questions love "under what conditions does a gas behave most/least ideally?"
- **Foundation for later chapters.** Intermolecular forces (Chapter 10) are precisely the attractions the \(a\) correction accounts for.

## Core Concepts

### When gases deviate: two competing effects

A real gas behaves most ideally at **high temperature and low pressure**, and least ideally at **low temperature and high pressure**. Two effects cause the deviation:

- **Molecular volume (the \(b\) effect):** at high pressure, molecules are so crowded that their own volume is a significant fraction of the container volume. There is less empty space than the ideal gas law assumes, so the measured pressure is *higher* than ideal at extreme compression.
- **Intermolecular attractions (the \(a\) effect):** at low temperature and moderate-to-high pressure, molecules spend more time near each other and pull on one another. Attractions tug molecules away from the walls, so the measured pressure is *lower* than ideal.

Whether the measured pressure ends up above or below ideal depends on which effect wins. At moderate pressure, attractions usually win (\(P_{\text{real}} < P_{\text{ideal}}\)); at very high pressure, molecular volume wins (\(P_{\text{real}} > P_{\text{ideal}}\)).

### The compressibility factor \(Z\)

The **compressibility factor** compares real with ideal behavior in one number:

\[
Z = \frac{PV}{nRT}
\]

For an ideal gas, \(Z = 1\) exactly. Real gases deviate:

- \(Z < 1\): gas is **more compressible than ideal** — attractions dominate, pressure is lower than ideal (moderate pressure / low temperature).
- \(Z > 1\): gas is **less compressible than ideal** — molecular volume dominates, pressure is higher than ideal (very high pressure).

A graph of \(Z\) versus pressure dips below 1 at moderate pressure, crosses back through \(Z = 1\), then climbs well above 1 at high pressure. As pressure approaches zero, all gases converge to \(Z = 1\) — the ideal limit.

### The van der Waals equation

Johannes van der Waals corrected the ideal gas law with two physical terms:

\[
\left(P + a\frac{n^2}{V^2}\right)(V - nb) = nRT
\]

- **The \(a\) correction (attractions):** attractions reduce the pressure molecules exert on the walls, so we *add* \(a(n/V)^2\) to the measured pressure. The term \(n/V\) is the gas concentration; attractions matter twice as much as one might guess because both the approaching molecule and those it approaches are involved — hence the square.
- **The \(b\) correction (molecular volume):** molecules occupy volume, so the *available* volume is \(V - nb\).

The constants \(a\) and \(b\) are **substance-specific**, determined experimentally:

| Gas | \(a\) (atm L² mol⁻²) | \(b\) (L mol⁻¹) |
|---|---|---|
| He | 0.0341 | 0.0237 |
| N₂ | 1.352 | 0.0387 |
| CO₂ | 3.592 | 0.04267 |
| H₂O | 5.464 | 0.03049 |

Larger \(a\) means stronger attractions (compare tiny, nonpolar He with polar H₂O); larger \(b\) means a bigger molecule (compare He with CO₂). The equation reduces to \(PV = nRT\) exactly when \(a\) and \(b\) are zero — which is why it is called a *correction*, not a replacement.

### Reading the equation physically

When the gas is dilute (large \(V\), small \(n\)), the correction terms \(a(n/V)^2\) and \(nb\) become negligible and the van der Waals equation collapses toward the ideal gas law — the mathematical version of "low pressure = ideal behavior." When the gas is dense, the corrections grow and matter. The equation also predicts a **critical temperature** below which a gas can be liquefied by pressure alone: below it, attractions are strong enough relative to thermal motion for compression to force condensation.

## ELI-10: Explain Like I'm 10

> Imagine a room full of bouncy balls. The "ideal" rule says the balls are tiny dots that never bump into each other or stick — then the math is easy. But real balls take up space, and if they are slightly sticky they slow each other down near the walls. When the room is huge, it barely matters. When you cram the balls into a tiny box or make them cold and slow, the "tiny dot" rule stops working. The van der Waals fix adds two knobs: one for how big the balls are, one for how sticky they are.

## High-Yield Points

- Ideal behavior is approached at **low pressure and high temperature**; deviations grow at **high pressure and low temperature**.
- **Two causes of deviation:** molecular volume (raises \(P\) vs. ideal) and intermolecular attractions (lowers \(P\) vs. ideal).
- **Compressibility factor:** \(Z = PV/nRT\); \(Z = 1\) ideal, \(Z < 1\) attractions dominate, \(Z > 1\) volume dominates.
- **Van der Waals equation:** \(\left(P + a\frac{n^2}{V^2}\right)(V - nb) = nRT\).
- \(a\) = attraction strength; \(b\) = molecular size — both gas-specific.
- When \(V\) is large, van der Waals → ideal gas law; at high pressure, corrections are essential.
- Real gases liquefy below a critical temperature; ideal gases never do.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Ideal gas | Gas obeying \(PV = nRT\) exactly — zero particle volume, zero interparticle forces | The reference model; real gases approach it only at low pressure and high temperature |
| Compressibility factor (\(Z\)) | Ratio \(PV/nRT\) comparing real to ideal behavior | One number that says whether attractions (\(Z<1\)) or volume (\(Z>1\)) dominate |
| Van der Waals equation | Corrected gas law, \(\left(P + a\frac{n^2}{V^2}\right)(V - nb) = nRT\) | The standard improved model for real gases |
| Van der Waals \(a\) | Constant measuring intermolecular attraction strength | Bigger \(a\) = stickier molecules (e.g., H₂O > He) |
| Van der Waals \(b\) | Constant measuring molecular volume | Bigger \(b\) = bigger molecule (e.g., CO₂ > He) |
| Critical temperature | Temperature below which pressure alone can liquefy a gas | Explains why some gases condense easily and others (He) are nearly impossible to liquefy |

## Worked Examples

### Example 1: Ideal vs. van der Waals pressure at ordinary conditions

Calculate the pressure of 1.00 mol of CO₂ in a 22.4 L container at 273 K, first ideally and then with van der Waals (\(a = 3.592\ \text{atm L}^2\text{mol}^{-2}\), \(b = 0.04267\ \text{L mol}^{-1}\)).

**Step 1 — Write the ideal gas law before substituting:**

\[
PV = nRT \quad\Rightarrow\quad P = \frac{nRT}{V}
\]

**Step 2 — Substitute \(R = 0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}\):**

\[
P = \frac{(1.00\ \text{mol})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(273\ \text{K})}{22.4\ \text{L}} = 1.00\ \text{atm}
\]

**Step 3 — Write the van der Waals equation solved for \(P\):**

\[
P = \frac{nRT}{V - nb} - a\frac{n^2}{V^2}
\]

**Step 4 — Substitute:**

\[
P = \frac{(1.00)(0.08206)(273)}{22.4 - (1.00)(0.04267)} - (3.592)\frac{(1.00)^2}{(22.4)^2}
\]

\[
P = \frac{22.40}{22.357} - \frac{3.592}{501.8} = 1.002 - 0.0072 = 0.995\ \text{atm}
\]

The answers differ by ~0.5%. At ordinary pressure, CO₂ behaves nearly ideally — corrections are small when the volume is large.

### Example 2: Ideal vs. van der Waals pressure at high pressure

Repeat for the same 1.00 mol of CO₂ squeezed into 0.500 L at 273 K.

**Step 1 — Ideal gas law:**

\[
P = \frac{(1.00)(0.08206)(273)}{0.500} = 44.8\ \text{atm}
\]

**Step 2 — Van der Waals:**

\[
P = \frac{(1.00)(0.08206)(273)}{0.500 - (1.00)(0.04267)} - (3.592)\frac{(1.00)^2}{(0.500)^2}
\]

\[
P = \frac{22.40}{0.4573} - \frac{3.592}{0.250} = 49.0 - 14.4 = 34.6\ \text{atm}
\]

Now the real pressure (34.6 atm) is ~23% *lower* than ideal (44.8 atm). At high pressure, molecules are close enough that attractions dominate, pulling molecules away from the walls — the \(Z < 1\) regime.

### Example 3: Interpreting the compressibility factor

For the 0.500 L CO₂ sample, compute \(Z\) and state what it tells you.

**Step 1 — Write the definition:**

\[
Z = \frac{PV}{nRT}
\]

**Step 2 — Use the real pressure \(P = 34.6\ \text{atm}\):**

\[
Z = \frac{(34.6\ \text{atm})(0.500\ \text{L})}{(1.00\ \text{mol})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(273\ \text{K})} = \frac{17.3}{22.4} = 0.772
\]

Because \(Z < 1\), the gas is more compressible than ideal at this pressure: attractions pull molecules together, so the gas exerts less pressure than ideal behavior predicts. Compressed further, \(Z\) would eventually climb above 1 as molecular volume took over.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| \(P_{\text{real}} < P_{\text{ideal}}\) (attractions) | \(P_{\text{real}} > P_{\text{ideal}}\) (volume) | Attractions dominate at moderate/high pressure and low temperature; volume dominates at very high pressure |
| The \(a\) correction | The \(b\) correction | \(a\) corrects pressure (attractions); \(b\) corrects volume (molecular size) |
| Low-temperature deviation | High-temperature deviation | Cooling makes attractions matter (deviation grows); heating makes gases *more* ideal |
| Real gas at low pressure | Real gas at high pressure | At low pressure corrections vanish (near-ideal); at high pressure they are large |
| \(Z < 1\) | \(Z > 1\) | \(Z < 1\) = easier to compress than ideal; \(Z > 1\) = harder |
| Van der Waals equation | Exact equation of state | Van der Waals is an improved *model*, still approximate |

## Quick Review

1. Under what two conditions does a real gas deviate most from ideal behavior, and why?
2. Define the compressibility factor. What does \(Z = 0.85\) mean physically?
3. Which van der Waals constant corrects for attractions and which for molecular volume? Which is larger for H₂O vs. He, and what does that tell you?
4. A gas at 5 atm has \(Z < 1\). Are attractions or molecular volume dominating, and is the real pressure above or below ideal?
5. Why does the van der Waals equation reduce to the ideal gas law when the gas is very dilute?
6. Why can a real gas be liquefied by pressure alone but an ideal gas cannot?

<details>
<summary>Show answers</summary>

1. High pressure (molecules crowded; own volume matters) and low temperature (slow molecules; attractions significant). The ideal gas law is best at low pressure and high temperature.
2. \(Z = PV/nRT\). \(Z = 0.85\) means the gas is 15% more compressible than ideal — attractions dominate and real pressure is below ideal.
3. \(a\) corrects attractions (pressure); \(b\) corrects molecular volume. H₂O has much larger \(a\) (5.464 vs. 0.0341) because polar water molecules attract far more strongly than helium atoms.
4. \(Z < 1\) means attractions dominate and real pressure is *below* ideal.
5. When \(V\) is large, the corrections \(a(n/V)^2\) and \(nb\) become negligibly small, so the equation approaches \(PV = nRT\).
6. Ideal particles have no attractions, so no compression makes them stick into a liquid. Real molecules attract; below the critical temperature, compression brings them close enough to condense.

</details>

## Related Topics

- Previous: [The Kinetic-Molecular Theory](05-the-kinetic-molecular-theory.md)
- Next: End of chapter
- Related: [Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law.md) — the equation this topic corrects
- Related: [Gases chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
