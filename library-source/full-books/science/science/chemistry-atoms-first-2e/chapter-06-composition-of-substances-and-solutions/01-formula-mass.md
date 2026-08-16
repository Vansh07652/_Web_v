---
title: "Formula Mass"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "6: Composition of Substances and Solutions"
topic_number: "1"
source: "chemistry-atoms-first-2e.md"
tags:
  - "formula-mass"
  - "science"
status: "complete"
---

# Formula Mass

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 6: Composition of Substances and Solutions](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Atoms are far too small to weigh individually, so chemists weigh **moles** of them. The bridge between the microscopic world (individual atoms and molecules) and the macroscopic world (grams you can measure on a balance) is the **formula mass** — the sum of the atomic masses of all atoms in a chemical formula, expressed in atomic mass units (u or amu). When the same number is written in grams per mole (g/mol), it becomes the **molar mass**, \(M\), which tells you the mass of one mole of that substance.

For a molecular substance like water, the sum over its molecular formula is sometimes called the **molecular mass**; for an ionic compound like sodium chloride, the same calculation over the formula unit is the **formula mass**. In practice, both are computed identically — add up atomic masses from the periodic table, multiplying each by the number of atoms of that element in the formula — and the numeric value in g/mol is the molar mass used in every mole conversion from here through the rest of the book.

## Why This Matters

Every quantitative calculation in chemistry starts from the mole, and the mole starts from molar mass. If you need 0.100 mol of sodium chloride to make a solution, you cannot count out molecules — you weigh 5.844 g on a balance, because one mole of NaCl has a molar mass of 58.44 g/mol. Pharmacists, nurses, and lab technicians use this link constantly: preparing IV solutions, dosing reagents, and interpreting "how much solute is in this solution" all begin with molar mass. Formula mass also feeds directly into the next topics — empirical formulas, molarity, and every stoichiometry calculation in the book — so small errors here (misreading a subscript, forgetting waters of hydration) cascade through everything downstream.

## Core Concepts

### Average atomic mass and the periodic table

The mass number of an element is the mass of one specific isotope, but natural samples contain a mixture of isotopes. The **average atomic mass** on the periodic table is the weighted average of all naturally occurring isotopes' masses, in atomic mass units. For example, chlorine's 35.45 u reflects ~76% ³⁵Cl and ~24% ³⁷Cl. This average mass is what you use in formula-mass calculations; one mole of chlorine atoms (a mixture of isotopes) has a mass of 35.45 g.

### Calculating formula mass from a formula

To find the formula mass, multiply each element's average atomic mass by its subscript in the formula, then add:

\[
\text{Formula mass} = \sum_i (\text{atomic mass of element } i \times \text{number of atoms of element } i)
\]

Subscripts apply to everything inside parentheses. In Ca(NO₃)₂, the subscript 2 outside the parentheses doubles both N and O: one Ca, two N, six O.

### Molar mass: the same number in g/mol

The **molar mass**, \(M\), is the mass of one mole of a substance in grams, and its numerical value equals the formula mass in u. One mole is \(6.022 \times 10^{23}\) entities (Avogadro's number) — the same number of atoms, molecules, or formula units, depending on the substance. The molar mass is the conversion factor between mass in grams and amount in moles:

\[
n = \frac{m}{M}
\]

where \(n\) is amount in moles, \(m\) is mass in grams, and \(M\) is molar mass in g/mol.

### Hydrates: water counts too

A **hydrate** is an ionic compound that contains water molecules trapped in its crystal structure, e.g., copper(II) sulfate pentahydrate, CuSO₄·5H₂O. The waters of hydration are part of the formula and must be included in the formula mass — otherwise your mass-to-mole conversions will be systematically wrong. (A blue copper sulfate sample that has been heated and driven off its water turns white — the mass change is exactly the mass of the lost water.)

## ELI-10: Explain Like I’m 10

> Every element has a "weight" printed on the periodic table, like a price tag on a toy. To find how heavy one whole molecule is, you add up the price tags of all its pieces — 6 carbon tags, 12 hydrogen tags, 6 oxygen tags for sugar. The same number in grams tells you how much one giant bag of them (a mole, about 600 billion trillion pieces) weighs, so you can measure chemistry with a kitchen scale.

## High-Yield Points

- Formula mass = sum of (atomic mass × subscript) over all atoms in the formula; the periodic table's values are weighted isotope averages.
- Numerically, formula mass (u) = molar mass (g/mol). The unit tells you which you're using.
- One mole = \(6.022 \times 10^{23}\) entities; \(n = m/M\) is the master conversion.
- Subscripts inside parentheses multiply: Ca(NO₃)₂ has 1 Ca, 2 N, 6 O.
- Hydrates: include the water molecules (CuSO₄·5H₂O) in the mass — five waters for copper(II) sulfate pentahydrate.
- Distinguish entity type: a mole of NaCl is formula units, a mole of H₂O is molecules, a mole of Ar is atoms.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| formula mass | Sum of atomic masses of all atoms in a formula, in u. | The first number you compute for any substance; basis of all mole conversions. |
| average atomic mass | Weighted average of an element's natural isotopes, in u. | The periodic-table value; accounts for real isotope mixtures like chlorine's 35.45. |
| molar mass, \(M\) | Mass of one mole of a substance, in g/mol; numerically equal to formula mass. | The conversion factor between grams and moles — used in nearly every calculation in chemistry. |
| mole | \(6.022 \times 10^{23}\) entities (Avogadro's number). | The counting unit that connects atomic scale to laboratory scale. |
| hydrate | Ionic compound with water trapped in its crystal, e.g., CuSO₄·5H₂O. | The water adds real mass; forgetting it skews conversions and percent compositions. |
| Avogadro's number | \(6.022 \times 10^{23}\) entities per mole. | Fixed constant that defines the mole. |

## Worked Examples

### Example 1: Formula mass of glucose, C₆H₁₂O₆

From the periodic table: C = 12.011 u, H = 1.008 u, O = 15.999 u (values vary slightly by table edition; use whatever your periodic table prints).

\[
\begin{aligned}
\text{Formula mass} &= 6(12.011) + 12(1.008) + 6(15.999) \\
&= 72.066 + 12.096 + 95.994 \\
&= 180.156 \text{ u}
\end{aligned}
\]

Therefore the molar mass of glucose is 180.16 g/mol.

**Use it:** How many moles are in 45.0 g of glucose?

\[
n = \frac{m}{M} = \frac{45.0 \text{ g}}{180.16 \text{ g/mol}} = 0.2498 \text{ mol} \approx 0.250 \text{ mol}
\]

(Dimensional analysis check: grams × (mol/g) = mol ✓)

### Example 2: Formula mass of an ionic compound with parentheses, Ca(NO₃)₂

Calcium nitrate: one Ca (40.078 u), two N (14.007 u), six O (15.999 u) — the subscript 2 doubles both N and O.

\[
\begin{aligned}
\text{Formula mass} &= 40.078 + 2(14.007) + 6(15.999) \\
&= 40.078 + 28.014 + 95.994 \\
&= 164.086 \text{ u}
\end{aligned}
\]

Molar mass = 164.09 g/mol. **Use it:** What mass of Ca(NO₃)₂ contains 0.500 mol?

\[
m = n \times M = 0.500 \text{ mol} \times 164.09 \text{ g/mol} = 82.0 \text{ g}
\]

### Example 3: A hydrate — copper(II) sulfate pentahydrate, CuSO₄·5H₂O

Count: Cu 63.546, S 32.06, O 4(15.999) = 63.996, plus 5 H₂O = 5(2.016 + 15.999) = 5(18.015) = 90.075.

\[
\begin{aligned}
\text{Formula mass} &= 63.546 + 32.06 + 63.996 + 90.075 \\
&= 249.677 \text{ u}
\end{aligned}
\]

Molar mass = 249.68 g/mol. Note that the 5 waters contribute ~36% of the mass. If you ignored them (using anhydrous CuSO₄ = 159.60 g/mol), every calculation with hydrated salt would be wrong by more than a third — a classic lab error when weighing "copper sulfate" straight from the bottle without checking its formula.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Formula mass (u) | Molar mass (g/mol) | Same number, different unit; "formula mass" is per entity, "molar mass" is per mole. |
| Mass number (isotope) | Average atomic mass | Mass number is one isotope's nucleons; average atomic mass is the weighted mixture value on the periodic table. |
| Subscript vs coefficient | e.g., 6 H in C₆H₁₂O₆ vs 2 in front of H₂O | Subscripts count atoms inside one formula unit; coefficients count whole molecules in a reaction. |
| Hydrate mass | Anhydrous mass | The waters of hydration are real mass; CuSO₄·5H₂O ≠ CuSO₄. |
| "Mass = number of atoms" | Moles vs mass | Equal masses of different elements contain different numbers of atoms (1 g H vs 1 g C). |

## Quick Review

1. What is the molar mass of water, H₂O? (H = 1.008, O = 15.999)
2. How many moles of sodium chloride (NaCl, 58.44 g/mol) are in 11.688 g?
3. What mass of Ca(OH)₂ (74.09 g/mol) contains 1.25 mol?
4. Why is chlorine's atomic mass 35.45 rather than a whole number?
5. How many total atoms of oxygen are in one formula unit of Al₂(SO₄)₃?

<details>
<summary>Show answers</summary>

1. \(2(1.008) + 15.999 = 18.015 \text{ g/mol}\).
2. \(n = 11.688/58.44 = 0.2000\) mol.
3. \(m = 1.25 \times 74.09 = 92.6\) g.
4. Chlorine is a natural mixture of isotopes: ~76% ³⁵Cl and ~24% ³⁷Cl give a weighted average of 35.45 u.
5. The subscript 3 outside (SO₄) multiplies the 4 oxygens: 3 × 4 = 12 oxygen atoms.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Determining Empirical and Molecular Formulas](02-determining-empirical-and-molecular-formulas.md)
- Related: [Composition of Substances and Solutions chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
