---
title: "Reaction Stereochemistry: Addition of H2O to a Chiral Alkene"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "8: Alkenes: Reactions and Synthesis"
topic_number: "13"
source: "organic-chemistry.md"
tags:
  - "reaction-stereochemistry-addition-of-h2o-to-a-chiral-alkene"
  - "science"
status: "complete"
---

# Reaction Stereochemistry: Addition of H2O to a Chiral Alkene

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 8: Alkenes: Reactions and Synthesis](../README.md)  
> **Topic:** 13  
> **Source structure:** OpenStax public textbook outline

## Overview

Topic 12 showed that hydrating an *achiral* alkene gives a racemic mixture whenever a new stereocenter forms. This topic asks the same question with one crucial change: **the alkene already contains a chiral center.** Now the two faces of the double bond are no longer equivalent, and the answer changes completely — instead of equal amounts of enantiomers, the reaction gives **unequal amounts of diastereomers**.

Here is the logic. In the achiral case, the two faces of the planar carbocation were *enantiotopic*: attacking either face gave mirror-image products with identical energies, so both formed 50:50. When the molecule already has a stereocenter (say, \(R\) configuration somewhere off to the side), the "top attack" and "bottom attack" products are no longer mirror images of each other — they are **diastereomers**. Diastereomers have different energies, so the two attack pathways have different transition-state energies, and the reaction proceeds faster through the lower-energy pathway. The product ratio is therefore *not* 1:1; one diastereomer predominates.

The key phrase to remember: **a chiral starting material creates a chiral (stereoselective) environment.** The existing stereocenter "feels" different to the two faces of the alkene, so the molecule distinguishes its own two faces. This is the same principle — on a molecular scale — behind enzymes and chiral catalysts favoring one product shape over another.

## Why This Matters

- **Stereoselectivity is how real synthesis works.** Reactions of chiral starting materials routinely produce unequal mixtures of diastereomers — this topic explains why, and gives you the vocabulary (diastereoselective, facial selectivity) to describe it.
- **Drug and natural-product chemistry.** Most biologically active molecules are chiral. When a synthesis starts from a chiral building block, every subsequent step can show this facial bias; predicting which product dominates is a core skill in pharmaceutical process chemistry.
- **Enzymes work this way.** An enzyme's chiral active site distinguishes the two faces of a bound substrate — that is exactly the "chiral environment" concept scaled up. Understanding the small-molecule version makes biochemistry mechanisms click.
- **Diastereomers are separable.** Unlike enantiomers, diastereomers have different physical properties (boiling points, solubilities), so an unequal diastereomer mixture can be purified by ordinary crystallization or chromatography — a practical advantage over racemic mixtures.
- **Exam favorite:** "Hydration of a chiral alkene gives a racemic mixture." False — that's only true for achiral alkenes. The chiral case gives diastereomers in unequal amounts.

## Core Concepts

### Setting the stage: a chiral alkene

A "chiral alkene" here means an alkene whose carbon skeleton already contains at least one stereocenter *somewhere in the molecule* — not at the alkene carbons themselves (the alkene carbons are \(sp^2\) and cannot be tetrahedral stereocenters). Example: **3-methyl-1-pentene**, \(\ce{CH2=CH-CH(CH3)-CH2CH3}\), where C3 bears four different groups (\(\ce{H}\), \(\ce{CH3}\), \(\ce{CH2CH3}\), and the \(\ce{CH2=CH-}\) group) and is therefore a chiral center. The molecule as a whole exists as \((R)\) and \((S)\) enantiomers.

### Why the faces become diastereotopic

Hydrate the alkene: protonation gives a planar carbocation at C2, and water attacks from either face to create a *new* stereocenter at C2. Now the molecule has **two** stereocenters — the pre-existing one at C3 and the new one at C2. The product is a mixture of two compounds:

- attack from face A → (new center \(R\), old center fixed, say \(R\)) → \((R,R)\)
- attack from face B → (new center \(S\), old center \(R\)) → \((S,R)\)

Because the old center is *fixed*, the two products are **diastereomers** (not enantiomers): \((R,R)\) and \((S,R)\) are not mirror images, and they have different energies. The faces of the alkene/carbocation are called **diastereotopic** — attacking one face vs. the other gives diastereomers rather than mirror images.

### Unequal amounts: the diastereomer ratio

Since the two diastereomeric products have different energies, the transition states leading to them differ in energy. The reaction prefers the lower-energy pathway, so the products form in **unequal amounts** — a diastereomer ratio such as 80:20 or 70:30 rather than 50:50. The reaction is said to be **diastereoselective** (or, more generally, **stereoselective**: one stereoisomer is formed in excess).

Important distinction from Topic 12:

| Starting alkene | Faces of the intermediate | Products | Ratio |
|---|---|---|---|
| Achiral | enantiotopic (equivalent) | enantiomers | 1:1 (racemic) |
| Chiral | diastereotopic (different energy) | diastereomers | unequal (e.g., 80:20) |

### The general principle: chirality is contagious

A chiral molecule (or chiral reagent, or chiral catalyst) acts as a **chiral environment** that breaks the symmetry between the two faces of a prochiral center. No matter how the chirality got into the molecule — from a natural product, a resolved starting material, or a chiral catalyst — once it is there, reactions at nearby prochiral centers become stereoselective. This single idea connects this topic to asymmetric synthesis, enzyme catalysis, and the origin of the 1:1 vs. unequal ratio distinction.

## ELI-10: Explain Like I'm 10

Imagine a flat pancake (the alkene) with a little colored sticker already glued on one side of the plate (the existing chiral center). Someone throws a berry (water) at the pancake from above or below. Because of the sticker, the pancake is no longer the same from both sides — throwing from one side "feels" different from throwing from the other. So the berry lands more often from one direction than the other, and you get more of one kind of finished pancake than the other kind. Unequal amounts, not a 50:50 split.

## High-Yield Points

- Chiral alkene + \(\ce{H2O}\) (acid) → **diastereomers in unequal amounts**, not a racemic mixture.
- The pre-existing stereocenter makes the alkene's two faces **diastereotopic** → different transition-state energies → one product favored.
- Products are diastereomers because they share the fixed old stereocenter and differ only at the new one.
- Same mechanism as Topic 12 (protonation → planar carbocation → water attack); only the *facial environment* differs.
- Diastereomers have different physical properties → the mixture is potentially separable by crystallization/chromatography.
- A reaction that produces one stereoisomer in excess is **stereoselective**; a reaction that forms only one stereoisomer out of several possible is **stereospecific**. Don't mix the two words up.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Chiral alkene | An alkene whose molecule contains a stereocenter somewhere in its skeleton. | Its reactions are biased by that stereocenter — the source of diastereoselectivity. |
| Diastereotopic faces | Two faces of a prochiral center whose attack gives diastereomers, not mirror images. | Explains why the two attack pathways have different energies. |
| Diastereomers | Stereoisomers that are not mirror images; they differ in some but not all stereocenters. | They have different physical properties and can be separated. |
| Diastereoselective | A reaction that produces one diastereomer in excess over another. | The standard outcome for reactions of chiral molecules. |
| Stereoselective | A reaction in which one stereoisomer (enantiomer or diastereomer) forms preferentially. | The umbrella term; diastereoselective and enantioselective are subtypes. |
| Stereospecific | A reaction that yields a single stereoisomer, determined by the starting material's stereochemistry. | Contrast with stereoselective: different starting isomers give different single products. |
| Prochiral center | A tetrahedral center that would become a stereocenter if one of its groups were changed. | The carbocation carbon after hydration is prochiral — its two faces are attacked. |

## Worked Examples

### Example 1: Predicting the products of hydrating a chiral alkene

**Setup:** Hydrate \((R)\)-3-methyl-1-pentene (\(\ce{CH2=CH-CH(CH3)-CH2CH3}\), with C3 in the \(R\) configuration) with aqueous acid. Predict the products and their relationship.

**Reasoning (mechanism in words):**

1. **Protonation (Markovnikov):** \(\ce{H+}\) adds to C1 (the terminal, less substituted carbon). A curved arrow from the \(\ce{C=C}\) \(\pi\) bond to the proton of \(\ce{H3O+}\) forms a C–H bond at C1, leaving the positive charge at C2 — a secondary, planar carbocation: \(\ce{CH3-CH+ -CH(CH3)-CH2CH3}\).
2. **Water attack:** Water's oxygen lone pair attacks the planar C2 from either face. Each face creates a new stereocenter at C2, giving a new C–O bond. Attack from above gives, say, \((2S,3R)\)-3-methyl-2-pentanol; attack from below gives \((2R,3R)\)-3-methyl-2-pentanol. (The old center at C3 stays \(R\) in both.)
3. **Deprotonation:** Water removes a proton from the oxonium ion, giving the neutral alcohol.

**Answer:** The products are **diastereomers** — \((2S,3R)\) and \((2R,3R)\) — because they share the fixed \(3R\) center and differ only at C2. They form in **unequal amounts** (the two attack pathways have different energies), so the product is a diastereomer mixture, not a racemate.

### Example 2: Interpreting a diastereomer ratio

**Setup (practice scenario):** A hydration of a chiral alkene is reported to give a 75:25 mixture of diastereomers A and B. Calculate the diastereomeric excess (de).

**Formula:**

\[
\%de = \frac{|A - B|}{A + B} \times 100\%
\]

**Substitute:**

\[
\%de = \frac{|75 - 25|}{75 + 25} \times 100\% = \frac{50}{100} \times 100\% = 50\%
\]

**Interpretation:** A is present in 50% excess over the 1:1 baseline — the reaction shows 50% diastereoselectivity. If the starting alkene had been achiral, the expected value would be 0% de (racemic, 50:50). The difference *is* the chiral-envvironment effect. (Invented numbers for practice; a real ratio must be measured.)

### Example 3: Separating the products

**Setup:** The 75:25 diastereomer mixture from Example 2 needs to be enriched. Why is this easier than separating a racemic mixture?

**Reasoning:** Diastereomers differ in physical properties — boiling point, solubility, crystal habit — because their intermolecular forces are different. Fractional crystallization or chromatography can therefore separate them directly. Enantiomers (from the achiral case) have identical physical properties in an achiral environment and require chiral resolving agents. Answer: the chiral starting material gives you a practical purification advantage.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Racemic mixture | Unequal diastereomer mixture | Racemic = 1:1 enantiomers (achiral starting material); unequal diastereomers = chiral starting material, one product in excess. |
| Diastereoselective | Stereospecific | Diastereoselective = one diastereomer *in excess* (both may form); stereospecific = one stereoisomer *exclusively*, dictated by starting stereochemistry. |
| Enantiotopic faces | Diastereotopic faces | Enantiotopic → mirror-image products (equal energy, racemic); diastereotopic → diastereomeric products (different energy, unequal amounts). |
| A chiral alkene | A chiral alkene carbon | Alkene carbons are \(sp^2\) and cannot be tetrahedral stereocenters; the chirality lives at a saturated carbon elsewhere in the molecule. |
| "One product predominates" | "Only one product forms" | Predominance means excess, not exclusivity — check the ratio before claiming stereospecificity. |

## Quick Review

1. Hydration of an achiral alkene gives a racemic mixture; hydration of a chiral alkene gives what?
2. Why are the two faces of the carbocation intermediate diastereotopic in this reaction?
3. What is the diastereomer ratio for a reaction reported as 60% de, and which diastereomer is in excess?
4. Name two physical properties that differ between diastereomers but not between enantiomers.
5. True or false: a stereospecific reaction always produces a single stereoisomer. Explain.
6. If you hydrate \((S)\)-3-methyl-1-pentene and isolate only \((2R,3S)\)-3-methyl-2-pentanol, is that result diastereoselective or stereospecific?

<details>
<summary>Show answers</summary>

1. A mixture of diastereomers in unequal amounts (diastereoselective), because the pre-existing stereocenter makes the two faces different.
2. The old stereocenter (e.g., C3) is fixed, so attack from the two faces gives products that differ at the new center while sharing the old one — they are diastereomers, and diastereomeric products imply diastereotopic faces.
3. For 60% de with A in excess: 80:20 (because \((80-20)/(80+20) = 60\%\)). A is in excess.
4. Boiling point and solubility (also crystal form, chromatographic retention) — diastereomers have different intermolecular interactions; enantiomers have identical ones in an achiral environment.
5. True. Stereospecific means the product's stereochemistry is fully determined by the starting material's stereochemistry — only one stereoisomer is possible. (Stereoselective, by contrast, only requires an excess.)
6. Diastereoselective (if the \((2S,3S)\) diastereomer also forms in smaller amount) — the "only" product claim would need to be verified; a single isolated product could still mean an inseparable or undetected minor diastereomer.

</details>

## Related Topics

- Previous: [Reaction Stereochemistry: Addition of H2O to an Achiral Alkene](12-reaction-stereochemistry-addition-of-h2o-to-an-achiral-alkene.md)
- Next: End of chapter
- Related: [Hydration of Alkenes: Addition of H2O by Hydroboration](05-hydration-of-alkenes-addition-of-h2o-by-hydroboration.md)
- Related: [Alkenes: Reactions and Synthesis chapter overview](../README.md)
- Related: [Enantiomers and the Tetrahedral Carbon](../chapter-05-stereochemistry-at-tetrahedral-centers/01-enantiomers-and-the-tetrahedral-carbon.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. Practice ratios (75:25, 60% de) are invented exercise numbers, not experimental data; actual product ratios must be measured.
- Last updated: 2026-08-16
