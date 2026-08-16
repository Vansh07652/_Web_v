---
title: "Reaction Stereochemistry: Addition of H2O to an Achiral Alkene"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "8: Alkenes: Reactions and Synthesis"
topic_number: "12"
source: "organic-chemistry.md"
tags:
  - "reaction-stereochemistry-addition-of-h2o-to-an-achiral-alkene"
  - "science"
status: "complete"
---

# Reaction Stereochemistry: Addition of H2O to an Achiral Alkene

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 8: Alkenes: Reactions and Synthesis](../README.md)  
> **Topic:** 12  
> **Source structure:** OpenStax public textbook outline

## Overview

"Reaction stereochemistry" asks a question the plain mechanism never answers: **when a reaction creates a new chiral center, which three-dimensional product(s) actually form?** This topic applies that question to the simplest possible case — the acid-catalyzed addition of water to an alkene that has **no** pre-existing chiral center (an *achiral* alkene).

The acid-catalyzed hydration of an alkene follows Markovnikov's rule: the proton lands on the less substituted alkene carbon, and water (through its nucleophilic oxygen) bonds to the more substituted carbon. The catch is that the carbocation intermediate is **planar** — a flat, \(sp^2\)-hybridized carbon with empty \(p\) orbitals above and below the plane. Water can attack that flat cation from either face with equal ease. If the carbon being attacked becomes a new chiral center, then attacking from the "top" and attacking from the "bottom" produce two different molecules: mirror-image enantiomers. Equal attack from both faces means equal amounts of both enantiomers — a **racemic mixture**.

The big-picture lesson of this topic: **an achiral starting material plus an achiral reagent plus an achiral catalyst gives an achiral (racemic) product mixture whenever a new stereocenter is created.** Chirality cannot appear out of thin air — a chiral environment is required to bias the reaction toward one enantiomer.

## Why This Matters

- **Enantiomers are different compounds in the body.** One enantiomer of a drug may be the active medicine while its mirror image is inactive, less effective, or even harmful (the classic example is thalidomide). Knowing that ordinary hydration makes a 50:50 mixture tells you why racemic drugs are so common — and why controlling stereochemistry matters in pharmaceutical synthesis.
- **Optical activity is a diagnostic tool.** A racemic mixture has a net rotation of zero, so polarimetry tells you whether a reaction was stereoselective or not.
- **It sets up the contrast with chiral alkenes.** Topic 13 shows what happens when the alkene already carries a stereocenter — the answer flips from "equal amounts of enantiomers" to "unequal amounts of diastereomers." You cannot understand that contrast without this topic first.
- **Exam staple.** "Does hydration of 1-butene give optically active 2-butanol?" is a classic question; the correct answer (no — it's racemic) tests whether you see the planar intermediate.

## Core Concepts

### The mechanism: protonate, attack, deprotonate

Acid-catalyzed hydration proceeds in three steps:

1. **Protonation:** A curved arrow from the \(\ce{C=C}\) \(\pi\) bond to a proton of \(\ce{H3O+}\). The proton adds to the *less* substituted carbon (Markovnikov), leaving a carbocation on the *more* substituted carbon.
2. **Nucleophilic attack:** A curved arrow from the oxygen lone pair of water to the empty \(p\) orbital of the carbocation. This step creates the \(\ce{C–O}\) bond.
3. **Deprotonation:** Water (or another base) removes a proton from the oxygen, giving the neutral alcohol and regenerating the acid catalyst.

The crucial structural fact is buried in step 2: the carbocation is **planar**, so the \(p\) orbital points straight up out of the page and straight down into the page. Water can attack from either side; nothing about the molecule or the reagent favors one side over the other.

### Enantiotopic faces → racemic product

When the carbocation carbon ends up bonded to four *different* groups after water attacks, that carbon is a new chiral center. The two faces of the planar cation are called **enantiotopic** because attacking one face or the other gives mirror-image products — a pair of enantiomers. Attack from the two faces is equally likely (same energy), so the reaction produces a **1:1 mixture of enantiomers**: a racemic mixture, written \((RS)\), that is optically inactive.

Worked through for **1-butene** (\(\ce{CH3CH2CH=CH2}\)):

- Protonation at C1 gives the secondary carbocation \(\ce{CH3CH2CH+CH3}\) (the more substituted carbon, C2, holds the charge).
- Water attacks C2 from either face; each face delivers the \(\ce{OH}\) group to C2 while the other three substituents stay put.
- The product is **2-butanol**, \(\ce{CH3CH(OH)CH2CH3}\). Because C2 carries four different groups (\(\ce{CH3}\), \(\ce{CH2CH3}\), \(\ce{OH}\), \(\ce{H}\)), it is chiral.
- Top attack gives one enantiomer, bottom attack gives the other: a racemic mixture of \((R)\)- and \((S)\)-2-butanol.

A **test for enantiotopic faces:** replace one face of attack with a new atom (imagine putting a different "marker" on the top versus the bottom of the flat cation). If the two resulting structures are mirror images, the faces are enantiotopic.

### When no chiral center forms

If the carbocation carbon is attacked by water but the resulting carbon carries two identical groups, no stereocenter forms and the stereochemistry question disappears. Hydration of **propene** (\(\ce{CH3CH=CH2}\)) gives **2-propanol** (\(\ce{(CH3)2CHOH}\)) — the central carbon bears two identical methyl groups, so it is achiral and the product is a single compound, not a mixture. The enantiotopic-faces argument only bites when a *new* stereocenter is actually created.

### What hydration is *not*

Acid-catalyzed hydration is **not stereospecific**: it does not deliver a single defined product geometry. Compare it with **hydroboration–oxidation** (Topic 5), which adds \(\ce{H}\) and \(\ce{OH}\) with *syn* stereochemistry, and with **oxymercuration** (Topic 4), which avoids carbocation rearrangements. Those methods control regiochemistry or rearrangement issues; acid-catalyzed hydration is the one whose stereochemical signature is "racemic when a new stereocenter appears."

## ELI-10: Explain Like I'm 10

Imagine a flat coin standing on a table — the middle of the coin is the carbocation, and the table is the flat molecule. Water can jump onto the coin from above or from below, and neither side is "better." If landing on one side makes a right-handed shape and landing on the other makes its left-handed mirror shape, you get exactly the same number of right-handed and left-handed copies: a 50:50 mix. That mix is called a racemic mixture, and it does not twist light, because the two shapes cancel each other out.

## High-Yield Points

- Hydration of an achiral alkene with a new stereocenter → **racemic mixture** (1:1 enantiomers), optically inactive.
- The **planar carbocation** is the reason: water attacks both faces with equal probability (enantiotopic faces).
- **Markovnikov's rule still applies**: \(\ce{H}\) to the less substituted carbon, \(\ce{OH}\) to the more substituted carbon.
- If the product carbon is achiral (two identical groups), no mixture forms — e.g., propene → 2-propanol is a single compound.
- Chirality cannot be created without a chiral influence: achiral reactants + achiral reagents → racemic products.
- A racemic mixture has \([\alpha]_{\mathrm{D}} = 0\); measuring optical rotation tells you whether a reaction was stereoselective.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Achiral | A molecule that is superimposable on its mirror image — no handedness. | The starting alkene here; its reactions cannot favor one enantiomer without outside help. |
| Planar carbocation | An \(sp^2\) carbocation with the positive charge in an empty \(p\) orbital above/below the plane. | Its flat shape lets water attack from either face, creating racemic mixtures. |
| Enantiotopic faces | Two faces of a flat intermediate whose attack gives mirror-image (enantiomeric) products. | Equal attack on enantiotopic faces is the reason hydration gives 1:1 enantiomers. |
| Racemic mixture | A 1:1 mixture of enantiomers; net optical rotation of zero. | The unavoidable product when an achiral alkene hydration creates a stereocenter. |
| Markovnikov's rule | In \(\ce{HX}\) or \(\ce{H2O}\) addition, the hydrogen bonds to the carbon that already has more hydrogens. | Predicts regiochemistry — which carbon gets the \(\ce{OH}\). |
| Specific rotation \([\alpha]_{\mathrm{D}}\) | The optical rotation of a pure compound at a standard path length, wavelength, and temperature. | The measurable quantity that is zero for a racemic mixture. |

## Worked Examples

### Example 1: Is the product of 1-butene hydration optically active?

**Setup:** Hydrate 1-butene with catalytic aqueous acid. Write the mechanism in words and predict the stereochemical outcome.

**Reasoning:** Protonation of \(\ce{CH3CH2CH=CH2}\) places \(\ce{H+}\) on C1 (less substituted), giving \(\ce{CH3CH2CH+CH3}\) — a secondary, planar carbocation at C2. Water attacks C2 from above or below; both attacks have the same energy. Each attack installs \(\ce{OH}\) at C2 and creates a chiral center (four different groups: \(\ce{CH3}\), \(\ce{CH2CH3}\), \(\ce{OH}\), \(\ce{H}\)).

**Conclusion:** \((R)\)-2-butanol and \((S)\)-2-butanol form in equal amounts. The product is a racemic mixture; its observed rotation is \(0^\circ\). This is the answer to the classic exam question — hydration of 1-butene gives *optically inactive* 2-butanol.

### Example 2: How much 2-butanol can 10.0 g of 1-butene make?

**Setup:** 1-butene (\(\ce{C4H8}\)) hydrates to 2-butanol (\(\ce{C4H10O}\)) in a 1:1 mole ratio. Calculate the theoretical mass of 2-butanol from 10.0 g of 1-butene.

**Formula first** (molar masses from standard atomic weights: \(\ce{C} = 12.01\), \(\ce{H} = 1.008\), \(\ce{O} = 16.00\) g/mol):

\[
M(\ce{C4H8}) = 4(12.01) + 8(1.008) = 56.10\ \text{g/mol}
\]

\[
M(\ce{C4H10O}) = 4(12.01) + 10(1.008) + 16.00 = 74.12\ \text{g/mol}
\]

**Dimensional analysis** (substitute after writing the conversion factors):

\[
10.0\ \text{g } \ce{C4H8} \times \frac{1\ \text{mol } \ce{C4H8}}{56.10\ \text{g } \ce{C4H8}} \times \frac{1\ \text{mol } \ce{C4H10O}}{1\ \text{mol } \ce{C4H8}} \times \frac{74.12\ \text{g } \ce{C4H10O}}{1\ \text{mol } \ce{C4H10O}} = 13.2\ \text{g } \ce{C4H10O}
\]

**Answer:** 13.2 g of 2-butanol at 100% yield (units check: g → mol → mol → g). If you recovered 9.9 g, your percent yield is \((9.9/13.2) \times 100\% = 75\%\).

### Example 3: Reading a polarimeter (practice scenario)

Suppose a "hydration" experiment reports a specific rotation of \(-7.0^\circ\) for the 2-butanol product, while pure \((R)\)-2-butanol has a literature value of \([\alpha]_{\mathrm{D}}^{20} = -13.9^\circ\). Find the enantiomeric excess.

**Formula:** \(\%ee = \dfrac{[\alpha]_{\mathrm{obs}}}{[\alpha]_{\max}} \times 100\%\)

**Substitute:**

\[
\%ee = \frac{-7.0^\circ}{-13.9^\circ} \times 100\% = 50\%
\]

**Interpretation:** The sample is 50% one enantiomer in excess (75:25 mixture), *not* a racemic mixture. A truly racemic product would read \(0^\circ\). (This is a practice problem with an invented reading — in reality, plain acid-catalyzed hydration gives a racemic mixture.)

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Racemic mixture | Optically inactive single compound | Racemic = 1:1 *mixture* of enantiomers; it rotates light to zero because the two cancel — it is still two compounds. |
| Enantiotopic faces | Homotopic faces | Attack on enantiotopic faces gives enantiomers (new stereocenter); homotopic faces give the identical molecule. |
| Markovnikov regiochemistry | Stereochemistry | Markovnikov tells you *which carbon* gets \(\ce{OH}\); stereochemistry tells you *which face* is attacked. Two separate questions. |
| Hydration being "not stereospecific" | Hydration being "random" | Not stereospecific means no single product geometry is enforced; the result is a predictable racemic mixture, not chaos. |
| A chiral product | An optically active product | A chiral product can be optically inactive if it is racemic. Check the *mixture*, not just the molecule. |

## Quick Review

1. Why does acid-catalyzed hydration of 1-butene produce a racemic mixture of 2-butanol?
2. Hydration of propene gives 2-propanol. Why is no stereochemistry question raised here?
3. What is the regiochemistry of \(\ce{H2O}\) addition to an unsymmetrical alkene, and which intermediate explains it?
4. A solution of a product alcohol has \([\alpha]_{\mathrm{D}} = 0^\circ\). Does that prove the product is achiral? Explain.
5. Name the three steps of the acid-catalyzed hydration mechanism in order.
6. If pure \((R)\)-2-butanol has \([\alpha]_{\mathrm{D}}^{20} = -13.9^\circ\) and a sample measures \(-9.7^\circ\), what is the enantiomeric excess?

<details>
<summary>Show answers</summary>

1. Protonation forms a planar secondary carbocation at C2; water attacks from either face with equal probability (enantiotopic faces), giving equal amounts of \((R)\)- and \((S)\)-2-butanol.
2. The central carbon of 2-propanol bears two identical methyl groups, so it is not a stereocenter — no chiral center is created, so there is nothing to be "racemic."
3. Markovnikov: \(\ce{H}\) adds to the less substituted carbon and \(\ce{OH}\) to the more substituted carbon; the carbocation intermediate (more stable when more substituted) dictates this.
4. No. A racemic mixture of a chiral compound also has zero rotation. You must check whether the sample is a single enantiomer, a mixture, or genuinely achiral.
5. Protonation of the alkene → nucleophilic attack by water on the carbocation → deprotonation to give the neutral alcohol (and regenerate the acid catalyst).
6. \(\%ee = (9.7/13.9) \times 100\% \approx 70\%\).

</details>

## Related Topics

- Previous: [Biological Additions of Radicals to Alkenes](11-biological-additions-of-radicals-to-alkenes.md)
- Next: [Reaction Stereochemistry: Addition of H2O to a Chiral Alkene](13-reaction-stereochemistry-addition-of-h2o-to-a-chiral-alkene.md)
- Related: [Hydration of Alkenes: Addition of H2O by Oxymercuration](04-hydration-of-alkenes-addition-of-h2o-by-oxymercuration.md)
- Related: [Hydration of Alkenes: Addition of H2O by Hydroboration](05-hydration-of-alkenes-addition-of-h2o-by-hydroboration.md)
- Related: [Alkenes: Reactions and Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. Specific rotation values are literature values (e.g., \((R)\)-2-butanol, \([\alpha]_{\mathrm{D}}^{20} \approx -13.9^\circ\)) presented for practice; invented readings in practice problems are labeled as such.
- Last updated: 2026-08-16
