---
title: "Determining Empirical and Molecular Formulas"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "6: Composition of Substances and Solutions"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "determining-empirical-and-molecular-formulas"
  - "science"
status: "complete"
---

# Determining Empirical and Molecular Formulas

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 6: Composition of Substances and Solutions](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

When chemists isolate a new compound — a natural product, a drug candidate, a pollutant — one of the first questions is: *what is it made of, and in what ratio?* The answer comes in two layers. The **empirical formula** gives the simplest whole-number ratio of atoms in the compound (CH₂O for glucose). The **molecular formula** gives the actual number of each atom in one molecule (C₆H₁₂O₆ for glucose). The molecular formula is always a whole-number multiple of the empirical formula.

Both are derived from **percent composition** — the mass percentage of each element in the compound — obtained experimentally. Percent composition comes from combustion analysis (for C, H, and sometimes N, S, and halogens) or from instruments like mass spectrometers and elemental analyzers. The calculation pipeline is: mass data → moles of each element (using molar masses) → simplest ratio → empirical formula; then empirical formula mass + measured molar mass → molecular formula.

## Why This Matters

Determining formulas is how chemists identify unknown substances, verify the purity of synthesized products, and check that a pharmaceutical matches its label. Every year, patients are harmed by counterfeit or mislabeled drugs; elemental analysis confirming the correct molecular formula is part of the quality-control chain that catches such problems. In research, percent composition data for a newly discovered natural compound (like a novel antibiotic) is the first step toward identifying it and eventually synthesizing it. The same mole math powers combustion engines' fuel analysis, environmental monitoring of pollutants, and forensic identification of unknown powders. For students, this topic is also where "do I use the empirical or molecular formula?" first appears — and it reappears in every stoichiometry and solution problem that follows.

## Core Concepts

### Percent composition

The **percent composition** of an element in a compound is the fraction of the compound's mass contributed by that element, times 100%:

\[
\% \text{ element} = \frac{\text{mass of element in 1 mol of compound}}{\text{molar mass of compound}} \times 100\%
\]

For a formula like C₆H₁₂O₆, you find the mass of carbon in one mole (6 × 12.011 = 72.07 g), divide by the molar mass (180.16 g/mol), and multiply by 100%. The percentages of all elements in a compound add to 100% (within rounding), which is a handy check.

### From percent composition to empirical formula

The strategy: assume a convenient sample size — exactly 100 g makes each percentage equal to a mass in grams. Then:

1. Convert each element's mass to moles using its molar mass: \(n = m/M\).
2. Divide every mole value by the *smallest* mole value to get a ratio.
3. If ratios are not whole numbers, multiply all of them by the smallest integer that makes them whole (e.g., 1.5 → ×2 gives 3, 1.33 → ×3 gives 4, 1.25 → ×4 gives 5).
4. Write the empirical formula with those subscripts.

The empirical formula is the reduced, simplest ratio — it carries no information about the actual number of atoms in the molecule.

### From empirical to molecular formula

The **molecular formula** is \(n\) times the empirical formula, where:

\[
n = \frac{\text{molar mass of the compound}}{\text{empirical formula mass}}
\]

The compound's actual molar mass must be measured separately (e.g., by mass spectrometry or freezing-point depression). If \(n = 1\), the empirical and molecular formulas are the same (H₂O, CO₂, NaCl). If \(n = 2\), the molecular formula has twice every subscript (C₂H₄O₂ for acetic acid, whose empirical formula is CH₂O).

### Combustion analysis

For compounds containing carbon and hydrogen (and often oxygen), **combustion analysis** burns a known mass of sample in excess oxygen. The carbon becomes CO₂ and the hydrogen becomes H₂O, both collected and weighed. The moles of carbon equal the moles of CO₂; the moles of hydrogen equal *twice* the moles of H₂O (each water has two H). Oxygen is usually found **by difference**: subtract the measured masses of C and H from the sample mass. This method gives the empirical formula directly from measurable masses — no percentages needed as an intermediate.

## ELI-10: Explain Like I’m 10

> Imagine a recipe that only says "1 part flour, 2 parts sugar, 1 part salt" — that's an empirical formula: it tells the *ratio*, not the amount. The molecular formula tells the real recipe: "2 cups flour, 4 cups sugar, 2 cups salt" — the same ratio, just scaled up. Chemists figure out the ratio by burning a little of the stuff and weighing the smoke and water it makes, then scaling up using the measured total weight of one molecule.

## High-Yield Points

- Empirical formula = simplest whole-number ratio; molecular formula = actual atom count; molecular = \(n\) × empirical, with \(n\) = molar mass / empirical formula mass.
- The 100 g assumption converts percentages directly into grams; divide by smallest moles; multiply ratios to clear fractions.
- Percent composition of every element sums to 100% — use it to check work.
- Combustion analysis: moles C = moles CO₂; moles H = 2 × moles H₂O; O often by difference.
- Common fraction traps: ×2 for 1.5, ×3 for 1.33, ×4 for 1.25.
- Different compounds can share an empirical formula (CH₂O = glucose, acetic acid, formaldehyde); the molar mass is what tells them apart.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| empirical formula | Simplest whole-number ratio of atoms in a compound (CH₂O). | The first result of elemental analysis; identifies the ratio of elements. |
| molecular formula | Actual number of each atom in one molecule (C₆H₁₂O₆). | The true identity of the compound; needed for molar mass and stoichiometry. |
| percent composition | Mass percentage of each element in a compound. | Converts directly into grams via the 100 g assumption; sums to 100%. |
| combustion analysis | Burning a sample in O₂, collecting CO₂ and H₂O to find C and H. | Standard experimental route to empirical formulas for C/H/O compounds. |
| empirical formula mass | Sum of atomic masses in the empirical formula. | The denominator in \(n\) = molar mass / empirical formula mass. |
| by difference | Finding oxygen's mass by subtracting C + H masses from the sample mass. | Standard way to measure oxygen, which is not trapped by combustion analysis. |

## Worked Examples

### Example 1: Empirical formula from percent composition

A compound is 40.00% C, 6.71% H, and 53.29% O by mass. Find its empirical formula.

Assume 100.00 g of sample, so masses are 40.00 g C, 6.71 g H, 53.29 g O. Convert each to moles:

\[
n_{\text{C}} = \frac{40.00 \text{ g}}{12.011 \text{ g/mol}} = 3.330 \text{ mol}
\]

\[
n_{\text{H}} = \frac{6.71 \text{ g}}{1.008 \text{ g/mol}} = 6.657 \text{ mol}
\]

\[
n_{\text{O}} = \frac{53.29 \text{ g}}{15.999 \text{ g/mol}} = 3.331 \text{ mol}
\]

Divide by the smallest (3.330 mol): C = 1.000, H = 1.999 ≈ 2, O = 1.000. The empirical formula is **CH₂O**.

### Example 2: Molecular formula from empirical formula + molar mass

The compound above has a measured molar mass of 180.16 g/mol. First compute the empirical formula mass:

\[
\text{Empirical formula mass} = 12.011 + 2(1.008) + 15.999 = 30.026 \text{ u}
\]

Then:

\[
n = \frac{180.16 \text{ g/mol}}{30.026 \text{ g/mol}} = 6.00
\]

Multiply every subscript of CH₂O by 6: the molecular formula is **C₆H₁₂O₆** — glucose. If the molar mass had instead been 60.05 g/mol, \(n\) would be 2 and the compound would be C₂H₄O₂ (acetic acid); at 30.03 g/mol, \(n = 1\) and it would be CH₂O (formaldehyde). Same empirical formula, three different chemicals — the molar mass decides.

### Example 3: Combustion analysis with oxygen by difference

A 0.2500 g sample of a C/H/O compound burns completely, producing 0.3664 g of CO₂ and 0.1500 g of H₂O. Find the empirical formula.

Moles of carbon (from CO₂, molar mass 44.009 g/mol):

\[
n_{\text{C}} = n_{\text{CO}_2} = \frac{0.3664 \text{ g}}{44.009 \text{ g/mol}} = 0.008326 \text{ mol}
\]

Moles of hydrogen (two per water molecule, H₂O = 18.015 g/mol):

\[
n_{\text{H}} = 2 \times \frac{0.1500 \text{ g}}{18.015 \text{ g/mol}} = 0.01665 \text{ mol}
\]

Find oxygen by difference. Mass of C = 0.008326 × 12.011 = 0.1000 g; mass of H = 0.01665 × 1.008 = 0.01678 g. Remaining mass:

\[
m_{\text{O}} = 0.2500 - 0.1000 - 0.01678 = 0.1332 \text{ g}
\]

\[
n_{\text{O}} = \frac{0.1332 \text{ g}}{15.999 \text{ g/mol}} = 0.008326 \text{ mol}
\]

Ratios C : H : O = 0.008326 : 0.01665 : 0.008326 = 1 : 2 : 1. The empirical formula is **CH₂O** — the same ratio as Example 1, showing that many real compounds (sugars, acids, aldehydes) share it.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Empirical formula | Molecular formula | CH₂O is a ratio; C₆H₁₂O₆ is the real molecule. Molecular = empirical × n. |
| Moles of H₂O | Moles of H | Each water molecule contains two H atoms: \(n_{\text{H}} = 2 \times n_{\text{H}_2\text{O}}\). Forgetting the 2 is the #1 combustion-analysis error. |
| "Divide moles, then round 1.5 to 1 or 2" | Whole-number ratios | 1.5 must be multiplied by 2 (→3), 1.33 by 3 (→4); rounding to nearest integer invents a wrong formula. |
| Percent composition masses | Actual sample masses | Percentages are per 100 g; use the 100 g assumption, not the real sample mass, when given only percentages. |
| Empirical formula mass | Molecular molar mass | They differ by factor \(n\); using the wrong one gives the wrong molecular formula. |

## Quick Review

1. A compound is 92.3% C and 7.7% H by mass. What is its empirical formula? (C = 12.011, H = 1.008)
2. The same compound has a molar mass of 78.11 g/mol. What is its molecular formula?
3. In combustion analysis, why do you multiply the moles of water by 2 to get moles of hydrogen?
4. Why is oxygen usually found "by difference" rather than measured directly?
5. Two compounds have the same empirical formula but different molar masses. What does that tell you?

<details>
<summary>Show answers</summary>

1. Assume 100 g: 92.3 g C → 7.685 mol; 7.7 g H → 7.638 mol. Ratio ≈ 1 : 1, so CH.
2. Empirical formula mass of CH = 13.019; \(n = 78.11/13.019 = 6.00\); molecular formula C₆H₆ (benzene).
3. Every water molecule contains two hydrogen atoms, so moles of H atoms = 2 × moles of H₂O molecules.
4. Combustion traps carbon as CO₂ and hydrogen as H₂O, but oxygen from the sample is indistinguishable from the excess O₂ used for burning; subtracting the measured C and H masses from the sample mass is the reliable way to get O.
5. They contain the same elements in the same ratio but different numbers of atoms per molecule — the molecular formulas differ by the integer factor \(n\).

</details>

## Related Topics

- Previous: [Formula Mass](01-formula-mass.md)
- Next: [Molarity](03-molarity.md)
- Related: [Composition of Substances and Solutions chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
