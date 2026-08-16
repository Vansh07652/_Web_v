---
title: "Quantitative Chemical Analysis"
subject: "Science"
book: "Chemistry 2e"
chapter: "4: Stoichiometry of Chemical Reactions"
topic_number: "5"
source: "chemistry-2e.md"
tags:
  - "quantitative-chemical-analysis"
  - "science"
status: "complete"
---

# Quantitative Chemical Analysis

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 4: Stoichiometry of Chemical Reactions](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Qualitative analysis asks *what* is present; **quantitative analysis** asks *how much*. Stoichiometry is the engine: you measure something easy and reliable — a precipitate's mass, a standard solution's volume, a combustion gas's mass — then use mole ratios from a balanced equation to convert that measurement into the amount of the substance you care about (the **analyte**). This topic surveys the three classic approaches: **gravimetric analysis** (weighing a product), **titrimetric analysis** (measuring a solution's volume), and **combustion analysis** (weighing the gases a sample produces).

Every method shares the same logical chain:

\[
\text{measured quantity} \rightarrow \text{moles of known species} \xrightarrow{\text{mole ratio}} \text{moles of analyte} \rightarrow \text{mass or concentration of analyte}
\]

The balanced equation is the bridge at the middle of that chain. If the mole ratio is wrong, every downstream number is wrong no matter how precise the measurement.

## Why This Matters

Quantitative analysis is how chemists answer questions that affect health, safety, and money every day:

- **Clinical labs** measure blood glucose, cholesterol, and electrolyte concentrations to guide medical decisions.
- **Environmental monitoring** checks drinking water for nitrate, lead, or chloride levels against legal limits.
- **Food and beverage production** verifies that products meet label claims, from vitamin content to alcohol percentage.

In all of these settings, a result drives a decision, so knowing how the numbers are derived — and where error creeps in — matters beyond the classroom.

## Core Concepts

### The analytical chain in practice

Quantitative analysis starts by choosing a reaction that is **complete** (goes essentially to completion), **specific** (tied to the analyte), and **stoichiometrically known**. The measured quantity can be a mass, a volume, or a gas mass; from there it is a stoichiometry problem in disguise.

### Gravimetric analysis: weighing a precipitate

In gravimetric analysis the analyte is converted into a compound of known composition that precipitates from solution. The precipitate is collected, washed, dried, and weighed; its known formula and the mole ratio yield the mass of the analyte. A classic example is chloride determination: excess silver nitrate precipitates all chloride as AgCl, whose mass is measured accurately; the 1:1 Cl:AgCl ratio does the rest.

### Titrimetric analysis: measuring a standard solution

In a **titration**, a solution of known concentration (the **titrant**) is added slowly to a measured portion of analyte until the reaction is just complete — the **equivalence point**. Titrant volume and molarity give moles of titrant:

\[
n = M \times V
\]

where \(M\) is molarity (mol/L) and \(V\) is volume in liters. A mole ratio from the balanced equation converts titrant moles into analyte moles, and dividing by the analyte's volume gives its molarity. An **indicator** signals when the reaction is complete; the observed color change is the **endpoint**, which should sit close to the equivalence point.

### Combustion analysis: weighing the gases

Combustion analysis determines the empirical formula of a C–H–O compound. A weighed sample is burned; the CO₂ and H₂O produced are trapped and weighed. All carbon in the sample becomes CO₂, and all hydrogen becomes H₂O, so:

\[
n(\text{C}) = \frac{m(\text{CO}_2)}{44.01\ \text{g/mol}} \qquad n(\text{H}) = 2 \times \frac{m(\text{H}_2\text{O})}{18.02\ \text{g/mol}}
\]

Oxygen is found by difference: subtract the masses of C and H from the sample mass and convert to moles. Divide the three mole quantities by the smallest to get the empirical formula ratio.

### Choosing a method

Gravimetry is slow but highly accurate, making it a reference standard; titrations are fast and versatile for routine acid–base and redox testing; combustion analysis characterizes new organic compounds. Choose by accuracy needs, sample size, and speed.

## ELI-10: Explain Like I'm 10

> Imagine a detective who cannot see the thief but can see the thief's footprints. Quantitative analysis works the same way: instead of measuring the substance you want directly, you react it with something that makes an easy-to-see clue — a solid that falls out of the liquid, or a color change. From the size of the clue, you work backward to figure out exactly how much of the hidden substance was there.

## High-Yield Points

- Every method follows the same chain: measurement → moles of a known species → mole ratio → moles of analyte.
- Gravimetry converts analyte to a weighable precipitate of known formula; the mole ratio is the key conversion.
- Titration uses \(n = M \times V\) for the titrant, then a mole ratio to the analyte.
- The equivalence point is the ideal completion point; the endpoint is the observed signal — they should nearly coincide.
- In combustion analysis, all C ends up in CO₂ and all H in H₂O; O is found by mass difference.
- Units must cancel at every step: molarity in mol/L requires volume in liters, not milliliters.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Analyte | The substance whose amount or concentration is being determined. | The whole analysis is designed around it. |
| Gravimetric analysis | Method that measures the mass of a precipitate to find analyte amount. | Very accurate; used for reference determinations. |
| Titrant | Solution of known concentration added during a titration. | Its volume and molarity supply the measured moles. |
| Equivalence point | Point where titrant and analyte react in exact stoichiometric ratio. | The target of every titration. |
| Endpoint | Observed signal (color change) indicating the reaction is complete. | Should match the equivalence point closely; a mismatch is indicator error. |
| Combustion analysis | Burning a sample and weighing the CO₂ and H₂O produced. | Yields empirical formulas of C–H–O compounds. |
| Empirical formula | Simplest whole-number ratio of atoms in a compound. | The typical output of combustion analysis. |

## Worked Examples

### Example 1: Gravimetric determination of chloride

A 0.4550 g sample of an unknown salt is dissolved and treated with excess silver nitrate. The chloride precipitates completely:

\[
\text{Ag}^+ + \text{Cl}^- \rightarrow \text{AgCl}(s)
\]

The dried precipitate has a mass of 0.6280 g. Molar masses: AgCl = 143.32 g/mol, Cl = 35.45 g/mol. What is the mass percent of chloride in the salt?

**Moles of precipitate:**

\[
n(\text{AgCl}) = \frac{0.6280\ \text{g}}{143.32\ \text{g/mol}} = 4.382 \times 10^{-3}\ \text{mol}
\]

**Moles of chloride (1:1 ratio):**

\[
n(\text{Cl}^-) = 4.382 \times 10^{-3}\ \text{mol}
\]

**Mass of chloride:**

\[
m(\text{Cl}) = 4.382 \times 10^{-3}\ \text{mol} \times 35.45\ \text{g/mol} = 0.1553\ \text{g}
\]

**Mass percent:**

\[
\%\text{Cl} = \frac{0.1553\ \text{g}}{0.4550\ \text{g}} \times 100\% = 34.1\%
\]

### Example 2: Titration of a diluted vinegar sample

A 25.00 mL sample of diluted vinegar is titrated with 0.1000 M NaOH. The endpoint is reached after 32.50 mL of NaOH. The reaction is:

\[
\text{HC}_2\text{H}_3\text{O}_2 + \text{NaOH} \rightarrow \text{NaC}_2\text{H}_3\text{O}_2 + \text{H}_2\text{O}
\]

**Moles of NaOH (titrant):**

\[
n(\text{NaOH}) = 0.1000\ \frac{\text{mol}}{\text{L}} \times 0.03250\ \text{L} = 3.250 \times 10^{-3}\ \text{mol}
\]

**Moles of acetic acid (1:1 ratio):**

\[
n(\text{HC}_2\text{H}_3\text{O}_2) = 3.250 \times 10^{-3}\ \text{mol}
\]

**Molarity of the vinegar sample:**

\[
M = \frac{3.250 \times 10^{-3}\ \text{mol}}{0.02500\ \text{L}} = 0.1300\ \text{M}
\]

As a mass–volume percentage: \(0.1300\ \text{mol/L} \times 60.05\ \text{g/mol} = 7.81\ \text{g/L}\), about 0.78 g per 100 mL.

### Example 3: Combustion analysis of an unknown compound

A 0.2402 g sample of an unknown compound containing only carbon, hydrogen, and oxygen is burned completely, producing 0.3521 g of CO₂ and 0.1442 g of H₂O. Find the empirical formula.

**Moles of C:**

\[
n(\text{C}) = \frac{0.3521\ \text{g}}{44.01\ \text{g/mol}} = 8.00 \times 10^{-3}\ \text{mol}
\]

**Moles of H (two per water molecule):**

\[
n(\text{H}) = 2 \times \frac{0.1442\ \text{g}}{18.02\ \text{g/mol}} = 1.60 \times 10^{-2}\ \text{mol}
\]

**Masses of C and H, then O by difference:**

\[
m(\text{C}) = 8.00\times10^{-3}\ \text{mol} \times 12.01\ \text{g/mol} = 0.0961\ \text{g}
\]

\[
m(\text{H}) = 1.60\times10^{-2}\ \text{mol} \times 1.008\ \text{g/mol} = 0.0161\ \text{g}
\]

\[
m(\text{O}) = 0.2402 - 0.0961 - 0.0161 = 0.1280\ \text{g} \qquad n(\text{O}) = \frac{0.1280\ \text{g}}{16.00\ \text{g/mol}} = 8.00 \times 10^{-3}\ \text{mol}
\]

**Ratio** C : H : O = 8.00×10⁻³ : 1.60×10⁻² : 8.00×10⁻³ = 1 : 2 : 1, so the empirical formula is CH₂O.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Endpoint | Equivalence point | Endpoint is the observed color change; equivalence point is the stoichiometric completion. A bad indicator makes them differ. |
| Volume in mL | Volume in L | Molarity needs liters: divide mL by 1000 first, or the mole count is off by 1000×. |
| Mass of precipitate | Mass of analyte | The precipitate contains the analyte plus the precipitating ion — convert via moles and the mole ratio. |
| Empirical formula | Molecular formula | Empirical is the simplest ratio; the molecular formula is a whole-number multiple (e.g., CH₂O vs C₆H₁₂O₆). |
| Gravimetric method | Titrimetric method | One weighs a solid product; the other measures a solution volume. |

## Quick Review

1. Write the general chain of conversions used in any quantitative analysis.
2. In a titration, 20.00 mL of 0.1500 M HCl neutralizes 25.00 mL of NaOH. What is the NaOH molarity?
3. Why is it important that a gravimetric precipitation be complete?
4. In combustion analysis, how do you find the oxygen content of a C–H–O sample?
5. What is the difference between the equivalence point and the endpoint of a titration?

<details>
<summary>Show answers</summary>

1. Measured quantity → moles of known species → mole ratio from the balanced equation → moles of analyte → mass or concentration of analyte.
2. Moles HCl = 0.1500 × 0.02000 = 3.000×10⁻³ mol = moles NaOH; M = 3.000×10⁻³ ÷ 0.02500 = 0.1200 M.
3. If precipitation is incomplete, some analyte never becomes precipitate and the result is too low — the measured mass no longer represents the full sample.
4. Oxygen is found by difference: subtract the masses of carbon and hydrogen from the original sample mass, then convert the remainder to moles using 16.00 g/mol.
5. The equivalence point is where stoichiometrically equivalent amounts have reacted; the endpoint is the observable signal (color change) that approximates it. Indicator choice keeps them close.

</details>

## Related Topics

- Previous: [Reaction Yields](04-reaction-yields.md)
- Next: End of chapter
- Related: [Reaction Stoichiometry](03-reaction-stoichiometry.md)
- Related: [Stoichiometry of Chemical Reactions chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
