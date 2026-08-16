---
title: "Amino Acids and the Henderson–Hasselbalch Equation: Isoelectric Points"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "26: Biomolecules: Amino Acids, Peptides, and Proteins"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "amino-acids-and-the-henderson-hasselbalch-equation-isoelectric-points"
  - "science"
status: "complete"
---

# Amino Acids and the Henderson–Hasselbalch Equation: Isoelectric Points

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 26: Biomolecules: Amino Acids, Peptides, and Proteins](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

In water, a free amino acid is not the neutral molecule H₂N–CHR–COOH but a **zwitterion** (dipolar ion): the carboxylic acid has lost a proton and the amino group has gained one, giving H₃N⁺–CHR–COO⁻. Both ionizations are equilibria, so the molecule's net charge depends on the pH of the solution. The **Henderson–Hasselbalch equation** is the tool that quantifies that dependence:

\[
\text{pH} = \text{p}K_a + \log \frac{[\text{A}^-]}{[\text{HA}]}
\]

where [A⁻] is the deprotonated form and [HA] the protonated form of the group in question. The **isoelectric point** (pI) is the pH of zero net charge; without an ionizable side chain it is the average of the two pKa values:

\[
\text{pI} = \frac{\text{p}K_{a1} + \text{p}K_{a2}}{2}
\]

You will learn to predict the charge state of any amino acid at any pH, compute pI values from pKa data, and explain why charge controls separation, solubility, and biological buffering.

## Why This Matters

Charge state governs almost everything proteins do. Electrophoresis and ion-exchange chromatography — workhorses of protein purification and of the amino acid analysis in Topic 5 — separate molecules by charge at a chosen pH. Blood is buffered near pH 7.4 partly by histidine residues: the imidazole side chain has pKa ≈ 6.0, right in the physiological range. In medicine, a single charge-changing mutation can cause disease: sickle-cell hemoglobin replaces a glutamic acid (negatively charged at pH 7.4) with valine (neutral), changing the protein's solubility and causing red cells to sickle. Knowing pI and the Henderson–Hasselbalch equation also lets you predict whether a peptide drug will be charged in the bloodstream — charged molecules do not cross membranes easily.

## Core Concepts

### The two ionizations of a simple amino acid

For glycine (H₂N–CH₂–COOH, the simplest amino acid), two acid–base equilibria matter:

\[
\text{H}_3\text{N}^+\text{–CH}_2\text{–COOH} \rightleftharpoons \text{H}^+ + \text{H}_3\text{N}^+\text{–CH}_2\text{–COO}^- \quad (\text{p}K_{a1} \approx 2.3)
\]

\[
\text{H}_3\text{N}^+\text{–CH}_2\text{–COO}^- \rightleftharpoons \text{H}^+ + \text{H}_2\text{N}\text{–CH}_2\text{–COO}^- \quad (\text{p}K_{a2} \approx 9.6)
\]

Below pH ≈ 2, both groups are protonated and the molecule is a cation (+1). Between roughly 2 and 9 it is the zwitterion (net 0). Above pH ≈ 9, the amino group loses its proton and the molecule is an anion (−1). Ionizable side chains (Asp, Glu, His, Cys, Tyr, Lys, Arg) add further equilibria that shift these boundaries.

### The Henderson–Hasselbalch equation and its three rules

Start from the acid dissociation constant \(K_a = [\text{H}^+][\text{A}^-]/[\text{HA}]\), take the negative logarithm of both sides, and rearrange:

\[
\text{pH} = \text{p}K_a + \log \frac{[\text{A}^-]}{[\text{HA}]}
\]

Three rules follow immediately:

1. When pH = pKa, [A⁻] = [HA] — the group is exactly 50% deprotonated.
2. When pH > pKa, the deprotonated (conjugate base) form dominates.
3. When pH < pKa, the protonated form dominates.

The equation is most useful within about one pH unit of the pKa — the **buffer range** — and each unit change in pH shifts the ratio tenfold.

### Isoelectric points: neutral, acidic, and basic amino acids

The pI is the pH of zero net charge, where the average of all charge states balances to 0. The formula depends on which two ionizations flank the neutral species:

- **Neutral side chain:** pI = (pKa1 + pKa2)/2, using the α-carboxyl and α-amino pKa values.
- **Acidic side chain (Asp, Glu):** pI = (pKa(α-COOH) + pKa(side chain))/2 — the α-amino pKa is not used.
- **Basic side chain (His, Lys, Arg):** pI = (pKa(α-NH₃⁺) + pKa(side chain))/2 — the α-carboxyl pKa is not used.

Typical reference values (25 °C): glycine pI 5.97, alanine 6.01, aspartic acid 2.98, glutamic acid 3.22, histidine 7.59, lysine 9.74, arginine 10.76.

### Charge and electrophoresis

Place an amino acid in an electric field: at pH < pI it carries a net positive charge and migrates toward the cathode (−); at pH > pI it is net negative and migrates toward the anode (+); at pH = pI it has zero mobility. **Isoelectric focusing** creates a pH gradient in a gel so each molecule stops where pH equals its pI — also why pH control is essential in amino acid analysis (Topic 5).

## ELI-10: Explain Like I'm 10

> An amino acid is like a tiny battery that can be positive, neutral, or negative depending on how acidic the water around it is. The Henderson–Hasselbalch equation is the calculator that tells you which sign the battery has. The isoelectric point is the exact acidity where the battery is neutral, so it stops drifting when you switch on an electric field.

## High-Yield Points

- Free amino acids in water are zwitterions: H₃N⁺–CHR–COO⁻.
- Henderson–Hasselbalch: \(\text{pH} = \text{p}K_a + \log([\text{A}^-]/[\text{HA}])\) — never write [acid]/[base] in the log term.
- At pH = pKa a group is 50% deprotonated; the buffer range is roughly pKa ± 1.
- Neutral amino acids: pI = (pKa1 + pKa2)/2. Acidic: side-chain pKa with pKa1. Basic: side-chain pKa with pKa2.
- pH < pI → cation (migrates to cathode); pH > pI → anion (migrates to anode); pH = pI → no net migration.
- Histidine (side-chain pKa ≈ 6.0) is the key blood buffer near pH 7.4.
- pI values to know: Gly 5.97, Ala 6.01, Asp 2.98, Glu 3.22, His 7.59, Lys 9.74, Arg 10.76 (typical, 25 °C).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| zwitterion | Molecule carrying both + and − charges, net 0 | The dominant form of free amino acids in water |
| pKa | pH at which a group is 50% ionized | Sets the position of every acid–base equilibrium |
| Henderson–Hasselbalch equation | pH = pKa + log([base]/[acid]) | Predicts charge state and buffer behavior at any pH |
| isoelectric point (pI) | pH of zero net charge | Controls electrophoresis, solubility, and separation |
| buffer range | Roughly pKa ± 1 pH unit | The window where a solution resists pH change |
| cathode / anode | Negative / positive electrode | Cations move to the cathode, anions to the anode |
| isoelectric focusing | Electrophoresis in a pH gradient | Molecules stop where pH equals their pI |

## Worked Examples

### Example 1: pI of glycine

Glycine has pKa1 = 2.34 (α-COOH) and pKa2 = 9.60 (α-NH₃⁺). The side chain is neutral, so use the average formula. Write the formula before substituting:

\[
\text{pI} = \frac{\text{p}K_{a1} + \text{p}K_{a2}}{2} = \frac{2.34 + 9.60}{2} = \frac{11.94}{2} = 5.97
\]

### Example 2: What species dominates at blood pH?

At pH 7.4, which glycine species is present? Apply the Henderson–Hasselbalch equation to each group. For the α-amino group (pKa2 = 9.60):

\[
7.4 = 9.60 + \log \frac{[\text{NH}_2]}{[\text{NH}_3^+]} \quad \Rightarrow \quad \log \frac{[\text{NH}_2]}{[\text{NH}_3^+]} = -2.20 \quad \Rightarrow \quad \frac{[\text{NH}_2]}{[\text{NH}_3^+]} = 10^{-2.20} = 6.3 \times 10^{-3}
\]

Only about 0.6% of the amino groups are deprotonated — the group is essentially fully protonated. For the carboxyl group (pKa1 = 2.34):

\[
7.4 = 2.34 + \log \frac{[\text{COO}^-]}{[\text{COOH}]} \quad \Rightarrow \quad \frac{[\text{COO}^-]}{[\text{COOH}]} = 10^{5.06} \approx 1.1 \times 10^5
\]

The carboxyl is essentially fully deprotonated (−1). The dominant species at pH 7.4 is therefore the zwitterion H₃N⁺–CH₂–COO⁻ with net charge 0. This is consistent with 7.4 lying above pI 5.97: the small fraction of fully deprotonated molecules makes the *average* charge slightly negative even though the zwitterion dominates.

### Example 3: pI of aspartic acid

Aspartic acid has pKa1 = 2.10 (α-COOH), pKaR = 3.86 (side-chain β-COOH), and pKa2 = 9.82 (α-NH₃⁺). Because the side chain is acidic, the neutral species sits between the two carboxyl ionizations:

\[
\text{pI} = \frac{\text{p}K_{a1} + \text{p}K_{aR}}{2} = \frac{2.10 + 3.86}{2} = 2.98
\]

The α-amino pKa (9.82) is not part of this calculation.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "pH above pI means the amino acid is fully deprotonated." | It means the average net charge is negative; between pKa1 and pKa2 the zwitterion still dominates. |
| pI = (pKa1 + pKa2)/2 for every amino acid. | Acidic side chains use the side-chain pKa with pKa1; basic ones use it with pKa2. |
| At pH = pKa the group is fully deprotonated. | It is exactly 50% deprotonated — equal acid and base forms. |
| Amino acids are neutral only at pH 7. | Each amino acid is neutral at its own pI, which ranges from ~3 (Asp) to ~11 (Arg). |
| pH = pKa + log([acid]/[base]). | The log term is [base]/[acid] = [A⁻]/[HA]; reversing it flips the sign. |
| Zwitterions never move in an electric field. | They have zero net charge only at the pI; at any other pH the net charge is nonzero. |

## Quick Review

1. Write the Henderson–Hasselbalch equation and state the three pH rules that follow from it.
2. Glycine has pKa1 = 2.34 and pKa2 = 9.60. Compute its pI.
3. At pH 7.4, is the α-amino group of alanine (pKa2 = 9.69) mostly protonated or deprotonated? About what fraction is protonated?
4. Why is the pI of aspartic acid close to 3 rather than near 6?
5. An amino acid migrates toward the cathode in an electric field. Is the pH above or below its pI?
6. Which amino acid side chain buffers blood near pH 7.4, and what is its pKa?

<details>
<summary>Show answers</summary>

1. \(\text{pH} = \text{p}K_a + \log([\text{A}^-]/[\text{HA}])\); at pH = pKa the forms are 50/50, pH > pKa favors the conjugate base, pH < pKa favors the protonated form.
2. \(\text{pI} = (2.34 + 9.60)/2 = 5.97\).
3. Mostly protonated: pH 7.4 is 2.29 units below pKa2, so [NH₃⁺]/[NH₂] ≈ 10^2.29 ≈ 195; about 99.5% of the amino groups are protonated.
4. Asp's side-chain carboxyl (pKaR = 3.86) ionizes long before the α-amino group, so the zero-charge species exists near pH ~3: pI = (2.10 + 3.86)/2 = 2.98.
5. Below — a cation forms when pH < pI, and cations migrate to the cathode.
6. Histidine; its imidazole side chain has pKa ≈ 6.0, within buffering range of blood pH.
</details>

## Related Topics

- Previous: [Structures of Amino Acids](01-structures-of-amino-acids.md)
- Next: [Synthesis of Amino Acids](03-synthesis-of-amino-acids.md)
- Related: [Peptides and Proteins](04-peptides-and-proteins.md)
- Related: [Amino Acid Analysis of Peptides](05-amino-acid-analysis-of-peptides.md)
- Related: [Protein Structure](09-protein-structure.md)
- Related: [Chapter 26 overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- pKa/pI values are typical literature reference values at 25 °C, consistent with standard biochemistry tables; verify against your edition's tables before exams.
- Last updated: 2026-08-16
