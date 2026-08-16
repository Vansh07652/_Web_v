---
title: "Conformations of Other Alkanes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "3: Organic Compounds: Alkanes and Their Stereochemistry"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "conformations-of-other-alkanes"
  - "science"
status: "complete"
---

# Conformations of Other Alkanes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 3: Organic Compounds: Alkanes and Their Stereochemistry](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

Ethane introduced the central idea of conformational analysis: rotation about single C–C bonds is nearly free, so a molecule adopts many three-dimensional shapes (**conformations**), with staggered arrangements lower in energy than eclipsed ones. Ethane is a special case because it has only one C–C bond and identical groups at both ends. Real alkanes such as **butane** (CH₃CH₂CH₂CH₃) have multiple C–C bonds and carry methyl groups at both ends, so when the central C2–C3 bond rotates, the methyl groups sweep past each other and the energy rises and falls in a characteristic pattern. This topic maps that pattern: the four conformations that matter, the dihedral angle that labels them, and the approximate energy cost of each.

The payoff is predictive power: if gauche costs about 3.8 kJ/mol (0.9 kcal/mol) more than anti, you can estimate how much of a butane sample sits in each arrangement at a given temperature — and extend the same reasoning to the ring-shaped alkanes of Chapter 4.

## Why This Matters

- **Reactivity and mechanism:** A molecule reacts from a particular conformation, not a blurry average; later chapters rely on anti arrangements to explain E2 eliminations and addition stereochemistry.
- **Cycloalkane chemistry:** The chair form of cyclohexane (Chapter 4) is an alkane locked into a perfectly staggered arrangement — the same anti/gauche language applies.
- **Biomolecules:** Hydrocarbon chains in fatty acids and membrane lipids adopt staggered conformations to minimize strain; chain shape affects membrane fluidity and packing.
- **Physical properties:** Boiling points, viscosities, and densities of petroleum fractions depend on chain packing and sliding — a conformational phenomenon.

## Core Concepts

### The dihedral angle and Newman projections

To compare conformations, chemists use a **Newman projection**: imagine looking straight down the C2–C3 bond of butane so the front carbon (C2) hides the back carbon (C3). Each carbon carries a methyl group and two hydrogens. The relative positions of the two methyl groups are described by the **dihedral angle** between the C1–C2 bond and the C3–C4 bond:

- **0°** — methyl groups directly on top of each other: **fully eclipsed**.
- **60° and 300°** — staggered, methyls offset by one third of a turn: **gauche**.
- **120° and 240°** — eclipsed again, each methyl on a *hydrogen* of the neighboring carbon: **CH₃–H eclipsed**.
- **180°** — staggered, methyls opposite each other: **anti**.

### The butane energy profile

Rotating the C2–C3 bond through 360° passes through all four arrangements. Approximate energies relative to anti (calorimetric/computational values): anti 0; gauche +3.8 kJ/mol (+0.9 kcal/mol); CH₃–H eclipsed +16 kJ/mol (+3.8 kcal/mol); fully eclipsed CH₃ on CH₃ +19 kJ/mol (+4.5 kcal/mol) — the maximum.

Two strains produce these numbers. **Torsional strain** comes from eclipsing — electron pairs of aligned bonds repel. **Steric strain** (van der Waals) comes from groups forced closer than their radii allow. Gauche methyls crowd slightly (+3.8 kJ/mol); fully eclipsed adds direct methyl–methyl collision on top of torsional strain, making 0° the peak.

### Conformational populations: which shape wins?

Conformations interconvert constantly, so a sample is a mixture. Population depends on energy through the Boltzmann relationship:

\[
\text{population} \propto e^{-\Delta E/RT}
\]

where \(\Delta E\) is the energy above the lowest conformation, \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\), and \(T\) is temperature in kelvin. Because energy sits in an exponent, even a few kJ/mol shifts populations dramatically. Multiplicity matters too: butane has one anti form but two equivalent gauche forms (60° and 300°).

### Larger alkanes

Each additional C–C bond adds its own rotation axis, and segment conformations combine. A long chain at any instant is a mosaic of staggered segments — mostly anti with occasional gauche kinks — separated by picosecond eclipsed moments. Barriers of 12–19 kJ/mol are far below thermal energy, so no conformer can be frozen out or isolated — conformers are *not* isomers. Rings (Chapter 4) change this by locking rotation.

## ELI-10: Explain Like I'm 10

> Imagine two kids spinning around a stick, each carrying a big backpack. When the backpacks point opposite ways, everyone is comfortable (anti). Side by side, they bump a little (gauche). When one backpack swings over the other, they crash (eclipsed) — worst when both stack on the same side. The kids stay in the comfortable positions most of the time.

## High-Yield Points

- Butane's key conformations around C2–C3: anti (180°), gauche (60°/300°), CH₃–H eclipsed (120°/240°), fully eclipsed (0°).
- Approximate energies: anti 0; gauche +3.8 kJ/mol (+0.9 kcal/mol); CH₃–H eclipsed +16 kJ/mol (+3.8 kcal/mol); CH₃/CH₃ eclipsed +19 kJ/mol (+4.5 kcal/mol).
- Torsional strain = eclipsing penalty; steric strain = nonbonded crowding. Gauche pays steric strain only; eclipsed pays both.
- Population follows Boltzmann: fraction ∝ \(e^{-\Delta E/RT}\), and multiplicity counts (2 gauche, 1 anti in butane).
- At 25 °C butane is ≈70% anti and ≈30% total gauche (using the approximate energies above).
- Ethane barrier ≈ 12 kJ/mol; propane ≈ 14 kJ/mol; butane maximum ≈ 19 kJ/mol.
- Conformers are NOT isomers: they differ only by bond rotation and cannot be separated.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| conformation | Any 3-D arrangement reached by rotation about single bonds | Determines the shape a molecule has at the moment of reaction |
| Newman projection | Drawing the molecule as if looking straight down a C–C bond | Makes dihedral angles and eclipsing visible at a glance |
| dihedral angle | Angle between two groups on adjacent carbons viewed down the connecting bond | Labels each conformation (0°, 60°, 120°, 180°) |
| anti conformation | Staggered arrangement with the two largest groups 180° apart | Lowest-energy conformation of butane |
| gauche conformation | Staggered arrangement with the two largest groups 60° apart | Costs ~3.8 kJ/mol because the methyl groups crowd |
| torsional strain | Repulsion between electron pairs of eclipsed bonds | Main reason eclipsed conformations are unstable |
| steric strain | Repulsion between groups forced closer than their size allows | Makes gauche less stable than anti and 0° the worst |

## Worked Examples

### Example 1: Reading the butane energy profile

The minimum of the butane rotation curve is anti at 180° (both methyl groups staggered and opposite — no eclipsing, no crowding); the maximum is fully eclipsed at 0° (methyl on methyl). Between them the curve rises to +16 kJ/mol at 120° and 240° (CH₃–H eclipsed) and dips to +3.8 kJ/mol at 60° and 300° (gauche). **Strain-model check:** at 0° both torsional strain and direct CH₃–CH₃ collision act together (≈19 kJ/mol), so it must be the peak; at 180° neither operates, so it must be the trough.

### Example 2: What fraction of butane is gauche at 25 °C?

**Formula first:** population ∝ \(e^{-\Delta E/RT}\).

**Step 1 — convert units so they cancel.** \(\Delta E = 3.8\ \text{kJ mol}^{-1} = 3800\ \text{J mol}^{-1}\); \(T = 25\ ^\circ\text{C} = 298\ \text{K}\).

**Step 2 — compute the exponent for one gauche form:**

\[
\frac{\Delta E}{RT} = \frac{3800\ \text{J mol}^{-1}}{(8.314\ \text{J mol}^{-1}\text{K}^{-1})(298\ \text{K})} = 1.53
\]

(Unit check: J mol⁻¹ ÷ (J mol⁻¹ K⁻¹ × K) = unitless ✓)

**Step 3 — relative populations.** \(e^{-1.53} = 0.216\). Anti has weight 1; each gauche form has weight 0.216, and there are two:

\[
\text{fraction anti} = \frac{1}{1 + 2(0.216)} = 0.70 \qquad \text{fraction gauche} = \frac{2(0.216)}{1 + 2(0.216)} = 0.30
\]

So roughly 70% of molecules sit in anti and 30% in the two gauche forms combined (figures inherit the uncertainty of the ≈3.8 kJ/mol value).

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Conformers | Isomers | Conformers interconvert by bond rotation; isomers differ by connectivity or fixed geometry and can usually be separated |
| Gauche | Eclipsed | Gauche is staggered (methyls 60° apart, mild crowding); eclipsed has overlapping bonds (high torsional strain) |
| "All eclipsed forms are equal" | CH₃–H vs CH₃–CH₃ eclipsed | They differ: +16 vs +19 kJ/mol; 0° is the true maximum |
| Steric strain | Torsional strain | Steric = crowding of nonbonded groups; torsional = eclipsing of adjacent bonds. Gauche pays steric only; eclipsed pays both |
| "Butane is mostly gauche" | Anti dominance | One anti vs two gauche forms: anti ≈ 70% at 25 °C despite the gauche multiplicity |
| 60° dihedral angle | C–C–C bond angle | 60° is the rotation angle between groups; the bond angle stays near 109.5° |

## Quick Review

1. List the four conformations of butane in order of increasing energy (lowest to highest).
2. What two kinds of strain explain why the 0° (fully eclipsed) conformation is the highest in energy?
3. Why is gauche higher in energy than anti, even though both are staggered?
4. At 25 °C, why does butane exist mostly as anti despite there being two gauche forms?
5. What separates a conformer from an isomer?
6. Estimate the total gauche fraction if \(\Delta E\) were 6.0 kJ/mol instead of 3.8 kJ/mol.

<details>
<summary>Show answers</summary>

1. Anti (0 kJ/mol) → gauche (+3.8 kJ/mol) → CH₃–H eclipsed (+16 kJ/mol) → fully eclipsed CH₃/CH₃ (+19 kJ/mol). Approximate textbook values.
2. Torsional strain (eclipsed bonds repel) plus steric strain (the two methyl groups collide directly).
3. Gauche is staggered, so torsional strain is zero, but the methyl groups sit close enough to repel (steric/van der Waals strain) — about 3.8 kJ/mol worth.
4. Boltzmann weighting: each gauche form is only ~22% as populated as anti (\(e^{-1.53} = 0.216\)), so even two of them (≈30% total) lose to the single anti form (≈70%).
5. Conformers interconvert by single-bond rotation at room temperature and cannot be isolated; isomers differ in connectivity or fixed geometry and can usually be separated.
6. \(\Delta E/RT = 6000/(8.314 \times 298) = 2.42\); \(e^{-2.42} = 0.089\); fraction gauche = \(2(0.089)/(1 + 2(0.089)) \approx 0.15\), about 15%.

</details>

## Related Topics

- Previous: [Conformations of Ethane](06-conformations-of-ethane.md)
- Next: End of chapter
- Related: [Organic Compounds: Alkanes and Their Stereochemistry chapter overview](../README.md)
- Related: [Conformations of Cyclohexane](../chapter-04-organic-compounds-cycloalkanes-and-their-stereochemistry/05-conformations-of-cyclohexane.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Energy values (ethane 12 kJ/mol, propane 14 kJ/mol, butane 3.8/16/19 kJ/mol) are approximate textbook figures from calorimetric and computational studies; treat them as estimates, not exact constants.
- Last updated: 2026-08-16
