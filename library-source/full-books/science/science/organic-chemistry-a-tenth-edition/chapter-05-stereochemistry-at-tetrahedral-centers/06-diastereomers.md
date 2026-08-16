---
title: "Diastereomers"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "5: Stereochemistry at Tetrahedral Centers"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "diastereomers"
  - "science"
status: "complete"
---

# Diastereomers

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 5: Stereochemistry at Tetrahedral Centers](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

A **diastereomer** is a stereoisomer that is **not** a mirror image of the molecule it is compared with. With a single stereocenter, only two stereoisomers exist and they are necessarily enantiomers; diastereomers appear only when a molecule has **two or more stereocenters**, because then the possible configurations outgrow the mirror-image pairs.

The classic example is **2,3-dibromobutane**, \(\text{CH}_3\text{–CHBr–CHBr–CH}_3\) (SMILES: `CC(Br)C(Br)C`). Its two stereocenters give three stereoisomers: \((2R,3R)\), \((2S,3S)\), and the achiral *meso* form. The first two are enantiomers; the *meso* form is a diastereomer of each. Because diastereomers are not mirror images, they have **different physical properties** — melting point, boiling point, solubility — which makes them separable by distillation or crystallization. That practical difference is why the distinction matters so much.

## Why This Matters

- **Sugars and metabolism:** D-glucose and D-mannose are diastereomers (they differ only at C2), yet the body treats them very differently — glucose is cellular fuel, mannose is not.
- **Drugs and nutrition:** Drug diastereomers can differ in potency or toxicity, and *cis/trans* unsaturated fats — which are diastereomers — have different health effects.
- **Laboratory practice:** Unlike enantiomers, diastereomers are separable by ordinary physical methods, the foundation of every resolution scheme (Topic 8).
- **Exams:** "Enantiomer or diastereomer?" classification is among the most frequently tested stereochemistry skills.

## Core Concepts

### Stereoisomers that are not mirror images

Enantiomers and diastereomers are both **stereoisomers**: same formula, same connectivity, different three-dimensional arrangement. The mirror-image test separates them — nonsuperimposable mirror images are **enantiomers**; stereoisomers that are *not* mirror images are **diastereomers**. The practical rule: **two stereoisomers are diastereomers if they differ at some, but not all, of their stereocenters.** Flipping one center of a two-center molecule gives a diastereomer; flipping both gives the enantiomer.

### The \(2^n\) rule

A molecule with \(n\) stereocenters has at most:

\[
N_{\text{max}} = 2^n
\]

For 2,3-dibromobutane (\(n = 2\)):

\[
N_{\text{max}} = 2^2 = 4
\]

The four configurations are \((2R,3R)\), \((2S,3S)\), \((2R,3S)\), and \((2S,3R)\) — but the last two are the same meso molecule (Topic 7), so the real count is **three** stereoisomers: an enantiomeric pair plus a meso diastereomer. The same logic gives **tartaric acid**, \(\text{HOOC–CH(OH)–CH(OH)–COOH}\) (SMILES: `OC(C(O)C(=O)O)C(=O)O`), three stereoisomers: \((+)\), \((−)\), and *meso*.

### Enantiomeric pairs and diastereomeric pairs

For a molecule with centers A and B, changing **one** center's configuration produces a diastereomer; changing **both** produces the enantiomer. So the two "cross" configurations, \((2R,3S)\) and \((2S,3R)\), are mirror images of each other — a reminder that a diastereomeric pair of molecules can themselves be enantiomers (or the same molecule, in the meso case).

### Diastereomers differ in physical properties

| Property | Enantiomeric pair | Diastereomeric pair |
|---|---|---|
| Melting/boiling point, solubility | identical (achiral environment) | different |
| Optical rotation | equal magnitude, opposite sign | unrelated |
| Reaction with achiral reagents | identical | can differ |
| Reaction with chiral reagents | different rates | different rates |

Because diastereomers differ in solubility and boiling point, they separate by crystallization, distillation, or chromatography — the standard route to pure enantiomers goes through diastereomers first (Topic 8).

### Geometric isomers and epimers are diastereomers

_cis_-2-butene and _trans_-2-butene have identical connectivity but different geometry about the double bond; they are not mirror images, so they are **diastereomers** (geometric, E/Z isomers), with different boiling points. In carbohydrate chemistry, sugars differing at only one stereocenter are **epimers** — a specific kind of diastereomer: D-glucose and D-mannose are epimers at C2, D-glucose and D-galactose at C4.

## ELI-10: Explain Like I’m 10

> Imagine a two-switch control panel. Flipping both switches gives the mirror-image picture — that's an enantiomer. Flipping just one switch gives a related but different picture — that's a diastereomer. A left glove and a right glove are enantiomers; a left glove and a right *mitten* are diastereomers. Because diastereomers look different, they behave differently: different melting points and solubilities, so you can separate them like different-colored sand grains.

## High-Yield Points

- Diastereomers are stereoisomers that are **not mirror images**; enantiomers are.
- A molecule with \(n\) stereocenters has at most \(2^n\) stereoisomers; meso forms reduce the count.
- **Flip one stereocenter → diastereomer; flip all → enantiomer.**
- Diastereomers have **different physical properties**; enantiomers have identical ones in achiral environments.
- _cis/trans_ (E/Z) isomers and sugar **epimers** are diastereomers.
- Diastereomer separation by crystallization/distillation is the foundation of enantiomer resolution.
- With one stereocenter there are no diastereomers — only an enantiomeric pair.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| diastereomer | A stereoisomer that is not a mirror image of the comparison molecule | Different physical properties → separable; key to resolution |
| enantiomer | A nonsuperimposable mirror-image stereoisomer | Identical properties in achiral media; equal and opposite rotation |
| stereocenter | An atom bearing four different groups | Each one doubles the possible configurations (\(2^n\)) |
| epimer | A diastereomer differing at only one of several stereocenters | Describes sugar relationships (glucose vs mannose at C2) |
| geometric (E/Z) isomers | Stereoisomers differing in arrangement about a double bond or ring | Common real-world diastereomers (fats, alkenes) |
| meso compound | Achiral molecule with stereocenters and internal symmetry | Reduces the \(2^n\) count; optically inactive (Topic 7) |

## How It Works / Step-by-Step Process

To classify a pair of molecules:

1. Confirm identical formula and connectivity — otherwise they are constitutional isomers, not stereoisomers.
2. Assign R/S configurations at every stereocenter.
3. Differ at **no** centers → same compound (or conformers).
4. Differ at **all** centers → mirror-image test: nonsuperimposable → enantiomers; superimposable → meso (same compound).
5. Differ at **some but not all** centers → diastereomers.

## Worked Examples

### Example 1: Complete stereoisomer analysis of 2,3-dibromobutane

Start with the counting formula:

\[
N_{\text{max}} = 2^n = 2^2 = 4
\]

The configurations \((2R,3R)\), \((2S,3S)\), \((2R,3S)\), and \((2S,3R)\) collapse to three distinct stereoisomers because \((2R,3S)\) and \((2S,3R)\) are the same meso molecule (identical CH₃ ends, internal plane of symmetry). Inventory: \((2R,3R)\) and \((2S,3S)\) are **enantiomers** (equal and opposite rotation); *meso*-2,3-dibromobutane is a **diastereomer** of both, with zero rotation. The enantiomers cannot be separated by distillation; the meso form, being a diastereomer, can.

### Example 2: Counting and classifying 2,3-dibromopentane

2,3-Dibromopentane, \(\text{CH}_3\text{–CHBr–CHBr–CH}_2\text{CH}_3\) (SMILES: `CCC(Br)C(Br)C`), has two stereocenters but different end groups, so no meso form is possible:

\[
N_{\text{max}} = 2^2 = 4
\]

All four configurations are distinct chiral molecules, forming two enantiomeric pairs: \((2R,3R)/(2S,3S)\) and \((2R,3S)/(2S,3R)\). Any pair differing at only one center is a diastereomeric pair; any pair differing at both is an enantiomeric pair. The same reasoning applied to tartaric acid explains why *meso*-tartaric acid (mp ≈ 140 °C) is a diastereomer of \((+)\)-tartaric acid (mp ≈ 168–170 °C) — a melting-point gap large enough to make separation practical.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "Enantiomers and diastereomers are unrelated types of isomer." | Both are stereoisomers; the mirror-image test is the only difference. |
| "Two stereocenters always give four stereoisomers." | \(2^n\) is an upper limit; meso forms reduce the count (tartaric acid: three). |
| "_cis/trans_ isomers are not stereoisomers." | They are stereoisomers — specifically diastereomers. |
| "Enantiomers have different boiling points, so they can be distilled apart." | Enantiomers have identical boiling points in achiral environments; only diastereomers are physically separable. |
| "With one stereocenter you can have both enantiomers and diastereomers." | One stereocenter gives exactly two stereoisomers, which must be mirror images. |
| "Molecules differing at one of two stereocenters are enantiomers." | They are diastereomers; flip *every* center to get the enantiomer. |

## Quick Review

1. What structural condition guarantees that a molecule can have diastereomers?
2. How many stereoisomers does 2,3-dibromobutane have, and why is the number less than \(2^2\)?
3. A molecule has three stereocenters and no symmetry. How many stereoisomers exist, and how are they grouped?
4. Why can diastereomers be separated by fractional crystallization while enantiomers cannot?
5. Classify the pair D-glucose and D-galactose.
6. What is the relationship between the two stereoisomers obtained by flipping *both* centers of \((2R,3R)\)-2,3-dibromobutane?

<details>
<summary>Show answers</summary>

1. At least two stereocenters — with one stereocenter, the two stereoisomers must be mirror images.
2. Three. \(2^2 = 4\) configurations exist in principle, but \((2R,3S)\) and \((2S,3R)\) are the same meso molecule, leaving two enantiomers plus one meso form.
3. Maximum \(2^3 = 8\) stereoisomers: four enantiomeric pairs; molecules from different pairs are diastereomers of each other.
4. Diastereomers have different solubilities and boiling points; enantiomers have identical physical properties in achiral environments.
5. Diastereomers — identical connectivity, differing at only one stereocenter (C4); specifically epimers.
6. \((2S,3S)\)-2,3-dibromobutane — the enantiomer, because every stereocenter was flipped.

</details>

## Related Topics

- Previous: [Sequence Rules for Specifying Configuration](05-sequence-rules-for-specifying-configuration.md)
- Next: [Meso Compounds](07-meso-compounds.md)
- Related: [A Review of Isomerism](09-a-review-of-isomerism.md)
- Related: [Enantiomers and the Tetrahedral Carbon](01-enantiomers-and-the-tetrahedral-carbon.md)
- Related: [Stereochemistry at Tetrahedral Centers chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Values cited (meso-tartaric acid mp ≈ 140 °C; (+)-tartaric acid mp ≈ 168–170 °C; glucose \(2^4 = 16\) stereoisomer family) are standard textbook values; verify against the current edition for high-stakes use.
- Last updated: 2026-08-16
