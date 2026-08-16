---
title: "Quantitative Chemical Analysis"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "7: Stoichiometry of Chemical Reactions"
topic_number: "5"
source: "chemistry-atoms-first-2e.md"
tags:
  - "quantitative-chemical-analysis"
  - "science"
status: "complete"
---

# Quantitative Chemical Analysis

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 7: Stoichiometry of Chemical Reactions](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Qualitative analysis answers **"what is present?"** Quantitative chemical analysis answers **"how much is present?"** This topic surveys the two classical laboratory strategies for measuring amounts of a substance in a sample: **gravimetric analysis**, which turns a mass measurement into an amount, and **titrimetric (volumetric) analysis**, which turns a carefully measured volume of reacting solution into an amount.

Both methods are stoichiometry in action. A measured quantity — the mass of a precipitate, or the volume and concentration of a titrant — is converted into moles using molar mass or molarity, and the **mole ratios from a balanced equation** convert those moles into the amount of the **analyte**, the substance being measured. The tools are the same conversion factors used in reaction stoichiometry, applied to real measurements.

## Why This Matters

- **Quality control:** drug manufacturers, food producers, and water-treatment plants must certify how much of a key ingredient is present within tight tolerances.
- **Environmental and clinical labs:** measuring pollutants in water, or blood glucose and drug levels, requires quantitative methods with known accuracy.
- **Legal weight:** a reported concentration is only as trustworthy as the method behind it, which is why these analyses are held to strict standards of precision and accuracy.
- **Exams:** expect titration and gravimetric calculation problems; fluency with mole conversions and balanced-equation ratios is the core skill being tested.

## Core Concepts

### Gravimetric analysis: mass as the measurement

In gravimetric analysis, the analyte is converted into a **precipitate** — an essentially insoluble solid — then filtered, dried, and weighed. The key insight: the mass of the precipitate is directly related to the mass of the original analyte through the mole ratios in a balanced equation.

The workflow: dissolve the sample; add a reagent that forms an insoluble precipitate of known, fixed composition (the reaction must go essentially to completion); filter, wash, and dry; weigh to constant mass; then convert precipitate mass → moles of precipitate → moles of analyte → mass of analyte.

For example, chloride ion can be precipitated as silver chloride:

\[
\text{Ag}^+(aq) + \text{Cl}^-(aq) \rightarrow \text{AgCl}(s)
\]

Because the reaction is 1 mol Cl⁻ per 1 mol AgCl, the moles of chloride in the sample equal the moles of AgCl weighed.

### Titrimetric (volumetric) analysis: volume as the measurement

In a **titration**, a solution of known concentration — the **titrant** — is added from a buret to a measured volume of analyte solution until the reaction is just complete. The point of chemical equivalence is the **equivalence point**; the point where an indicator visibly changes color is the **endpoint**. Ideally the two coincide within one drop.

The calculation chain is:

\[
\text{mol titrant} = M_{\text{titrant}} \times V_{\text{titrant}}
\]

then moles of titrant are converted to moles of analyte using the balanced equation's mole ratio, and finally to concentration or mass of analyte.

### Standard solutions and standardization

A titration is only as good as the titrant's known concentration. A **primary standard** is a pure, stable, solid compound (e.g., potassium hydrogen phthalate, KHP, for base titrations) that can be weighed accurately and dissolved to make a solution of exactly known molarity. **Standardization** uses a primary standard to determine the exact concentration of a solution like NaOH, which absorbs CO₂ and water and cannot be weighed directly as a pure solid.

## ELI-10: Explain Like I'm 10

> Imagine you want to know how much salt is in a jar of soup powder. One way: add a chemical that turns the salt into sand-like grains, catch the grains on a filter, dry them, and weigh them — heavier grains mean more salt. Another way: add drops of a "salt-detecting" liquid of known strength until the color changes, counting the drops to figure out the salt. Both ways use a recipe (the balanced equation) to turn a simple measurement — mass or drops — into an answer.

## High-Yield Points

- Quantitative analysis measures **amount**; qualitative analysis identifies **what**.
- **Gravimetric** analysis: precipitate → filter → dry → weigh; convert precipitate mass to analyte mass via mole ratios.
- **Titrimetric** analysis: moles of titrant = \(M \times V\); convert to analyte moles via the balanced equation.
- The **equivalence point** (stoichiometric) and **endpoint** (indicator color change) should be within one drop of each other.
- A **primary standard** is pure, stable, and of known molar mass; **standardization** fixes a titrant's exact concentration.
- Percent composition by mass: \(\%\ \text{analyte} = \frac{\text{mass analyte}}{\text{mass sample}} \times 100\%\).
- Always write and balance the equation first; the mole ratio is the bridge between substances.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Analyte | The substance whose amount is being measured | Everything in the analysis is aimed at determining this quantity |
| Gravimetric analysis | A method that measures the mass of a precipitate to find the amount of analyte | Direct and highly accurate for many ions; requires complete, pure precipitation |
| Titrant | The solution of known concentration added from a buret | Its exact molarity anchors the whole titration calculation |
| Equivalence point | The point where added titrant is stoichiometrically equal to analyte | The mathematically correct end of the reaction |
| Endpoint | The point where the indicator changes color | The visible signal that should match the equivalence point within one drop |
| Primary standard | A pure, stable solid of known molar mass used to make standard solutions | Guarantees the reliability of the titrant's concentration |
| Standardization | Determining a solution's exact concentration using a primary standard | Corrects for impure or unstable reagents like NaOH |
| Precipitate | An insoluble solid that forms when two solutions react | In gravimetry it "captures" the analyte in a weighable form |

## Worked Examples

### Example 1: Gravimetric determination of chloride

A 0.4861 g sample of an ionic mixture is dissolved in water, and excess silver nitrate precipitates all chloride as AgCl. The dried precipitate has a mass of 0.4258 g. What is the mass percent of chloride in the sample?

**Step 1 — Balanced equation:**

\[
\text{Ag}^+(aq) + \text{Cl}^-(aq) \rightarrow \text{AgCl}(s)
\]

**Step 2 — Convert precipitate mass to moles (formula first, then substitute):**

\[
n_{\text{AgCl}} = \frac{m_{\text{AgCl}}}{M_{\text{AgCl}}} = \frac{0.4258\ \text{g}}{143.32\ \text{g mol}^{-1}} = 2.971 \times 10^{-3}\ \text{mol}
\]

**Step 3 — Mole ratio (1 mol Cl⁻ : 1 mol AgCl):**

\[
n_{\text{Cl}} = n_{\text{AgCl}} = 2.971 \times 10^{-3}\ \text{mol}
\]

**Step 4 — Convert moles of chloride to mass:**

\[
m_{\text{Cl}} = n_{\text{Cl}} \times M_{\text{Cl}} = (2.971 \times 10^{-3}\ \text{mol})(35.45\ \text{g mol}^{-1}) = 0.1053\ \text{g}
\]

**Step 5 — Mass percent:**

\[
\%\ \text{Cl} = \frac{m_{\text{Cl}}}{m_{\text{sample}}} \times 100\% = \frac{0.1053\ \text{g}}{0.4861\ \text{g}} \times 100\% = 21.66\%
\]

Dimensional check: grams cancel in the mole conversion, mol cancels in the mass conversion, and the percent is unitless. The sample is 21.66% chloride by mass.

### Example 2: Titration of HCl with NaOH

A 25.00 mL sample of HCl requires 32.50 mL of 0.1500 M NaOH to reach the endpoint. What is the molarity of the HCl?

**Step 1 — Balanced equation (1:1 mole ratio):**

\[
\text{HCl}(aq) + \text{NaOH}(aq) \rightarrow \text{NaCl}(aq) + \text{H}_2\text{O}(l)
\]

**Step 2 — Moles of titrant:**

\[
n_{\text{NaOH}} = M_{\text{NaOH}} \times V_{\text{NaOH}} = (0.1500\ \text{mol L}^{-1})(0.03250\ \text{L}) = 4.875 \times 10^{-3}\ \text{mol}
\]

**Step 3 — Mole ratio 1:1, so \(n_{\text{HCl}} = n_{\text{NaOH}}\).**

**Step 4 — Molarity of the acid:**

\[
M_{\text{HCl}} = \frac{n_{\text{HCl}}}{V_{\text{HCl}}} = \frac{4.875 \times 10^{-3}\ \text{mol}}{0.02500\ \text{L}} = 0.1950\ \text{M}
\]

Units check: mol divided by L gives mol L⁻¹ (M), as expected for a concentration.

### Example 3: Standardizing NaOH with KHP

A student dissolves 0.5012 g of potassium hydrogen phthalate (KHP, molar mass 204.22 g mol⁻¹) and titrates it with NaOH, requiring 24.55 mL to reach the endpoint. The reaction is 1:1 (one acidic proton per KHP). Find the molarity of the NaOH.

**Step 1 — Moles of primary standard:**

\[
n_{\text{KHP}} = \frac{0.5012\ \text{g}}{204.22\ \text{g mol}^{-1}} = 2.454 \times 10^{-3}\ \text{mol}
\]

**Step 2 — 1:1 mole ratio, so \(n_{\text{NaOH}} = n_{\text{KHP}}\).**

**Step 3 — Molarity of NaOH:**

\[
M_{\text{NaOH}} = \frac{2.454 \times 10^{-3}\ \text{mol}}{0.02455\ \text{L}} = 0.1000\ \text{M}
\]

This standardized NaOH can now be used as a titrant for other acid samples.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Equivalence point | Endpoint | Equivalence point is the stoichiometrically exact point; endpoint is where the indicator changes color. They should match within one drop |
| Gravimetric analysis | Titrimetric analysis | Gravimetric measures a mass of precipitate; titrimetric measures a volume of titrant solution |
| Mole ratio from coefficients | Subscripts in formulas | Coefficients (balanced equation) give mole ratios between substances; subscripts give atoms within one formula unit |
| Molarity \(M\) | Moles \(n\) | Molarity is mol L⁻¹; moles is the amount itself. \(n = M \times V\) only when volume is in liters |
| Excess reagent | Limiting reagent | In gravimetry, excess precipitating agent forces complete reaction; the analyte is the limiting reagent |
| Standardization | Dilution | Standardization fixes a concentration by reacting with a primary standard; dilution just adds solvent |

## Quick Review

1. What is the difference between qualitative and quantitative chemical analysis?
2. A sample yields 0.1053 g of chloride from a 0.4861 g sample. What is the mass percent of chloride?
3. In a titration, 32.50 mL of 0.1500 M NaOH neutralizes 25.00 mL of HCl. What is the molarity of the HCl?
4. Why is a primary standard (like KHP) preferred over directly weighing NaOH for a standard solution?
5. What role does the balanced chemical equation play in both gravimetric and titrimetric calculations?
6. A student stops the titration one drop past the color change. Is the reported analyte concentration too high or too low? Why?

<details>
<summary>Show answers</summary>

1. Qualitative analysis identifies which substances are present; quantitative analysis determines how much of a substance is present.
2. \(\% \text{Cl} = (0.1053 / 0.4861) \times 100\% = 21.66\%\).
3. \(M_{\text{HCl}} = (0.1500 \times 0.03250) / 0.02500 = 0.1950\ \text{M}\).
4. A primary standard is pure, stable, weighable, and of known molar mass, so its solution concentration is exactly known. NaOH absorbs water and CO₂ and cannot be weighed as a pure solid.
5. The balanced equation provides the mole ratio that converts moles of precipitate or titrant into moles of analyte — the essential bridge in every calculation.
6. Too low: slightly more titrant was delivered than stoichiometrically required, so the extra volume inflates the moles of analyte and the calculated concentration is overstated.

</details>

## Related Topics

- Previous: [Reaction Yields](04-reaction-yields.md)
- Next: End of chapter
- Related: [Stoichiometry of Chemical Reactions chapter overview](../README.md)
- Related: [Reaction Stoichiometry](03-reaction-stoichiometry.md) — the mole-ratio method used in every analysis calculation

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
