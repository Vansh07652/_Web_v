---
title: "Acid-Base Titrations"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "7"
source: "chemistry-atoms-first-2e.md"
tags:
  - "acid-base-titrations"
  - "science"
status: "complete"
---

# Acid-Base Titrations

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

A **titration** adds a solution of known concentration (the **titrant**) gradually to a measured amount of a solution of unknown concentration (the **analyte**) until the reaction between them is just complete. For acid–base titrations the reaction is a neutralization, and the point where added moles of titrant exactly match moles of analyte is the **equivalence point**. The titrant volume, combined with the reaction stoichiometry, gives the unknown concentration. As titrant is added, pH is monitored to produce a **titration curve** (pH versus titrant volume), and an **indicator** — a dye whose color changes over a narrow pH window — signals when to stop. The curve's shape reveals the strengths of the acid and base: the pH at the equivalence point and the steep "jump" around it dictate which indicator will work, and polyprotic acids show multiple equivalence points.

## Why This Matters

Titration is one of the most common quantitative techniques in chemistry. Food chemists measure the acidity of vinegar, wine, and fruit juice; pharmaceutical labs assay active ingredients; water-treatment facilities measure alkalinity; clinical labs quantify analytes such as calcium or chloride in serum. The same logic — deliver a known reagent until reaction is complete, then compute from stoichiometry — underlies countless assays. Choosing the wrong indicator makes the endpoint miss the equivalence point, biasing every result.

## Core Concepts

### The setup and the vocabulary

A buret delivers the titrant in measured increments into the analyte solution, monitored by a pH meter or indicator. Three points must be distinguished:

- **Equivalence point:** the theoretical point where moles of titrant equal moles of analyte by stoichiometry. Calculated, not observed.
- **Endpoint:** the point where the indicator actually changes color. A good indicator puts the endpoint within a drop or two of the equivalence point.
- **Indicator:** a weak acid or base whose conjugate forms differ in color; it changes color over a characteristic **transition range** of about 1–2 pH units.

The convenient arithmetic unit is the **millimole**, since \(M \times \text{mL} = \text{mmol}\).

### Strong acid – strong base curves

The pH starts low, rises slowly, then jumps dramatically — often from about pH 3 to pH 11 within a fraction of a milliliter — around the equivalence point, where **pH = 7** because the salt (e.g., NaCl) does not hydrolyze. Any indicator whose transition range lies inside the jump works.

### Weak acid – strong base curves

Before equivalence, the partially neutralized weak acid and its conjugate base form a **buffer**, so the curve is flat — the buffer region from the previous topic. At the **half-equivalence point**, \([\text{HA}] = [\text{A}^-]\) and, from the Henderson–Hasselbalch equation, **pH = pKa** — a quick way to measure an unknown acid's pKa. At equivalence the solution is the conjugate base, which hydrolyzes, so **pH > 7** (typically 8–10). The indicator must change color on the alkaline side — phenolphthalein (about 8.2–10.0) is the classic choice.

### Weak base – strong acid curves

The mirror image: the curve starts alkaline, is buffered through the conjugate-acid region, and at equivalence contains the conjugate acid of the weak base, which hydrolyzes to give **pH < 7** (typically 3–6). For example, titrating 0.100 M ammonia with 0.100 M HCl gives a 0.0500 M \(\text{NH}_4^+\) solution at equivalence with pH ≈ 5.3, so an acidic-side indicator such as methyl orange (about 3.1–4.4) or methyl red (about 4.4–6.2) is appropriate.

### Polyprotic acids

An acid like \(\text{H}_3\text{PO}_4\) has one equivalence point per ionizable proton — three in all — with multiple buffer regions and jumps of decreasing size.

## ELI-10: Explain Like I'm 10

> A titration is like filling a measuring cup to exactly the line: you pour a liquid of known strength drop by drop into a mystery liquid until the reaction is just finished, and the amount you poured tells you how strong the mystery liquid was. The indicator is like the cup's color-change line — it changes color at just the right moment so you know when to stop pouring.

## High-Yield Points

- Equivalence point: moles of titrant = moles of analyte; endpoint: where the indicator changes color.
- Strong acid–strong base: equivalence pH = 7; weak acid–strong base: pH > 7; weak base–strong acid: pH < 7.
- Half-equivalence point of a weak acid titration: \([\text{HA}] = [\text{A}^-]\), so pH = pKa.
- The indicator's transition range must fall on the steep part of the curve, near the equivalence-point pH.
- Use millimoles: \(M \times \text{mL} = \text{mmol}\); at equivalence, mmol acid = mmol base.
- Before equivalence in a weak acid titration, the solution is a buffer; after equivalence, excess strong titrant sets the pH.
- Phenolphthalein (8.2–10.0) suits weak acid–strong base; methyl orange (3.1–4.4) suits weak base–strong acid.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| titration | Gradual addition of a known-concentration solution to an unknown one until reaction is complete | Measures unknown concentrations accurately |
| titrant | The solution of known concentration delivered from the buret | Its volume and molarity anchor the calculation |
| analyte | The substance being analyzed (unknown concentration) | The target of the measurement |
| equivalence point | The point where added moles of titrant exactly match analyte moles by stoichiometry | The theoretical goal of every titration |
| endpoint | The point where the indicator visibly changes color | Must coincide with the equivalence point |
| indicator | A dye that changes color over a narrow pH range | Tells you when to stop adding titrant |
| half-equivalence point | The point where half the titrant needed for equivalence has been added | pH = pKa here for a weak acid; marks the buffer region |

## How It Works / Step-by-Step Process

### Calculating pH along a titration curve

1. Identify the neutralization stoichiometry; compute millimoles of analyte present.
2. For each titrant volume, compute millimoles of H⁺ (or OH⁻) delivered and the amount remaining or in excess.
3. Decide what controls pH: before equivalence, the buffer for weak acids or the excess for strong ones; at equivalence, salt hydrolysis (pH 7 for strong–strong); after equivalence, the excess titrant.
4. Divide millimoles by the total volume in mL for molarity, then convert to pH.

### Choosing an indicator

1. Determine the equivalence-point pH from the curve or calculation.
2. Pick an indicator whose transition range lies inside the steep jump around that pH.

## Worked Examples

### Example 1: Strong acid–strong base titration of HCl with NaOH

A 25.00 mL sample of 0.100 M HCl is titrated with 0.100 M NaOH. Find the pH (a) initially, (b) after 10.00 mL of NaOH, (c) at equivalence, and (d) after 35.00 mL of NaOH.

**(a) Initial pH.** HCl is a strong acid, so \([\text{H}^+] = 0.100\ \text{M}\):

\[
\text{pH} = -\log(0.100) = 1.00
\]

**(b) After 10.00 mL NaOH.** Compute millimoles:

\[
\text{mmol H}^+ = 25.00\ \text{mL} \times 0.100\ \frac{\text{mmol}}{\text{mL}} = 2.500\ \text{mmol}
\]

\[
\text{mmol OH}^- \text{ added} = 10.00\ \text{mL} \times 0.100\ \frac{\text{mmol}}{\text{mL}} = 1.000\ \text{mmol}
\]

The OH⁻ neutralizes an equal number of millimoles of H⁺, leaving 1.500 mmol of H⁺ in \(25.00 + 10.00 = 35.00\ \text{mL}\):

\[
[\text{H}^+] = \frac{1.500\ \text{mmol}}{35.00\ \text{mL}} = 0.0429\ \text{M} \qquad \text{pH} = -\log(0.0429) = 1.37
\]

**(c) At equivalence.** The 1:1 stoichiometry requires 2.500 mmol of NaOH — \(2.500/0.100 = 25.00\ \text{mL}\). The salt NaCl does not hydrolyze, so:

\[
\text{pH} = 7.00
\]

**(d) After 35.00 mL NaOH.** Excess NaOH is \(35.00 - 25.00 = 10.00\ \text{mL}\), giving 1.000 mmol OH⁻ in \(25.00 + 35.00 = 60.00\ \text{mL}\):

\[
[\text{OH}^-] = \frac{1.000\ \text{mmol}}{60.00\ \text{mL}} = 0.0167\ \text{M}
\]

\[
\text{pOH} = -\log(0.0167) = 1.78 \qquad \text{pH} = 14.00 - 1.78 = 12.22
\]

The pH swings from 7.00 to 12.22 only 10 mL past equivalence — the steep jump indicators exploit.

### Example 2: Weak acid–strong base titration of acetic acid with NaOH

A 25.00 mL sample of 0.100 M acetic acid (\(K_a = 1.8 \times 10^{-5}\)) is titrated with 0.100 M NaOH. Find the pH (a) initially, (b) at the half-equivalence point, and (c) at equivalence.

**(a) Initial pH.** Let \(x = [\text{H}^+]\) and use the weak-acid approximation:

\[
K_a = \frac{x^2}{0.100 - x} \approx \frac{x^2}{0.100}
\]

\[
x = \sqrt{K_a \times 0.100} = \sqrt{1.8 \times 10^{-5} \times 0.100} = \sqrt{1.8 \times 10^{-6}} = 1.3 \times 10^{-3}\ \text{M}
\]

\[
\text{pH} = -\log(1.3 \times 10^{-3}) = 2.87
\]

**(b) Half-equivalence point (12.5 mL NaOH).** Half the acid is converted to acetate, so \([\text{HA}] = [\text{A}^-]\) and the Henderson–Hasselbalch log term is zero:

\[
\text{pH} = \text{p}K_a = -\log(1.8 \times 10^{-5}) = 4.74
\]

**(c) Equivalence point (25.0 mL NaOH).** All acid has become acetate: 2.50 mmol in \(25.00 + 25.00 = 50.00\ \text{mL}\):

\[
[\text{C}_2\text{H}_3\text{O}_2^-] = \frac{2.50\ \text{mmol}}{50.00\ \text{mL}} = 0.0500\ \text{M}
\]

Acetate is a weak base with \(K_b = K_w/K_a = 1.0 \times 10^{-14}/1.8 \times 10^{-5} = 5.6 \times 10^{-10}\). Then:

\[
[\text{OH}^-] = \sqrt{K_b \times 0.0500} = \sqrt{5.6 \times 10^{-10} \times 0.0500} = 5.3 \times 10^{-6}\ \text{M}
\]

\[
\text{pOH} = -\log(5.3 \times 10^{-6}) = 5.28 \qquad \text{pH} = 14.00 - 5.28 = 8.72
\]

The equivalence point is alkaline (8.72), so phenolphthalein — whose transition range (about 8.2–10.0) brackets 8.72 — is correct. Methyl orange would change color near pH 4, far too early.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| Equivalence point | Endpoint | Equivalence is theoretical (stoichiometric); endpoint is what the indicator shows. A poor indicator choice separates them |
| pH = 7 at equivalence | Always true | True only for strong acid–strong base; weak acid–strong base gives pH > 7, weak base–strong acid gives pH < 7 |
| Half-equivalence point | Equivalence point | Half-equivalence is mid-buffer where pH = pKa; equivalence is complete neutralization |
| A strong acid's pH | A weak acid's pH at the same molarity | 0.100 M HCl has pH 1.00; 0.100 M acetic acid has pH 2.87 because it barely dissociates |
| Indicator "changes at pH 7" | Indicator behavior | Each indicator has its own transition range; many change well away from 7 |
| Millimoles | Milligrams | mmol = \(M \times \text{mL}\) (amount); mg = mass. Confusing them wrecks the calculation |

## Quick Review

1. Distinguish equivalence point, endpoint, and indicator transition range.
2. A 20.00 mL sample of HCl requires 32.50 mL of 0.100 M NaOH for equivalence. What is the HCl concentration?
3. Why is the equivalence-point pH of a weak acid–strong base titration greater than 7?
4. Where on a weak acid–strong base curve is pH exactly equal to pKa, and what is the buffer doing there?
5. Which indicator — phenolphthalein or methyl orange — for titrating acetic acid with NaOH, and why?
6. Why is the pH jump around the equivalence point of a strong acid–strong base titration so steep?

<details>
<summary>Show answers</summary>

1. Equivalence point: stoichiometrically exact match of titrant and analyte (calculated, not observed). Endpoint: where the indicator visibly changes. Transition range: the 1–2 unit pH window of the indicator's color change; it must lie on the steep part of the curve.
2. \(\text{mmol NaOH} = 32.50 \times 0.100 = 3.25\ \text{mmol}\). Stoichiometry is 1:1, so the sample held 3.25 mmol HCl in 20.00 mL: \([\text{HCl}] = 3.25/20.00 = 0.1625\ \text{M}\).
3. At equivalence the solution is the conjugate base of the weak acid (e.g., acetate), which hydrolyzes to produce OH⁻, raising pH above 7.
4. At the half-equivalence point, where \([\text{HA}] = [\text{A}^-]\) and the solution is a buffer at maximum capacity; the log term is zero, so pH = pKa.
5. Phenolphthalein: the equivalence pH is about 8.7, and its transition range (about 8.2–10.0) brackets that value.
6. Once the acid is exhausted, a tiny excess of OH⁻ (or H⁺) dominates the pH because a 1:1 strong-strong reaction leaves no buffering — the curve jumps from about pH 3 to 11 within a fraction of a milliliter.

</details>

## Related Topics

- Previous: [Buffers](06-buffers.md)
- Next: End of chapter
- Related: [Polyprotic Acids](05-polyprotic-acids.md), [Precipitation and Dissolution](../../chapter-15-equilibria-of-other-reaction-classes/01-precipitation-and-dissolution.md)
- Chapter: [Acid-Base Equilibria overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
