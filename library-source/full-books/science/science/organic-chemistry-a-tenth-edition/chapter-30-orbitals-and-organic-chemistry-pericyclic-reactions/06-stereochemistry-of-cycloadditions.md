---
title: "Stereochemistry of Cycloadditions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "30: Orbitals and Organic Chemistry: Pericyclic Reactions"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "stereochemistry-of-cycloadditions"
  - "science"
status: "complete"
---

# Stereochemistry of Cycloadditions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 30: Orbitals and Organic Chemistry: Pericyclic Reactions](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

A **cycloaddition** is a pericyclic reaction in which two unsaturated molecules combine to form a ring, creating two new \(\sigma\) bonds while consuming two \(\pi\) bonds. The [4+2] Diels–Alder reaction (diene + dienophile → cyclohexene) and the [2+2] photochemical dimerization of alkenes (two alkenes → cyclobutane) are the two examples you will meet most often. This topic is about the *spatial* outcome: because cycloadditions are **concerted** (one step, no intermediates), the three-dimensional relationships among substituents in the starting materials are carried directly into the products.

That fact makes cycloadditions **stereospecific**: a given stereoisomer of the reactants produces a specific stereoisomer of the product, with no scrambling of geometry. Prediction rests on four ideas: which faces of each \(\pi\) system bond together (**suprafacial** versus **antarafacial**), the **syn addition** rule that transfers alkene geometry into the ring, the **endo/exo** (Alder) preference with cyclic dienophiles, and the thermal-versus-photochemical selection rule that decides whether the reaction is allowed.

## Why This Matters

Biological molecules recognize each other in three dimensions, so a drug's shape — not just its formula — determines whether it binds a receptor or is metabolized. The Diels–Alder reaction is treasured in synthesis because it sets ring stereochemistry predictably: up to four new stereocenters can appear in one step, configured by the geometry of the starting materials rather than by chance.

The [2+2] cycloaddition is more than a lab curiosity: when ultraviolet light strikes DNA, adjacent thymine bases undergo a photochemical [2+2] cycloaddition to form a **cyclobutane pyrimidine dimer**, kinking the double helix and blocking replication. Repair enzymes recognize this specific stereoisomer (the *cis-syn* dimer), and the face-selectivity of the reaction explains why that isomer forms preferentially. On exams, stereochemical questions about cycloadditions are among the most predictable in the chapter: track the faces and you can write the product.

## Core Concepts

### Concerted mechanism and stereospecificity

In a cycloaddition the two new \(\sigma\) bonds form in the same step in which the \(\pi\) bonds break, with no carbocation, carbanion, or radical intermediate whose geometry could be lost. The reaction is therefore **stereospecific**: the stereochemistry of each reactant is preserved in the product. The classic demonstration pairs *cis*- and *trans*-dienophiles with the same diene — each gives a different, single product, proving the geometry was never scrambled.

### Syn addition: both bonds form on the same face

Because the two new \(\sigma\) bonds are created from the same set of orbitals at the same instant, they form on the **same face** of each \(\pi\) system — **syn addition**. The practical consequence for the Diels–Alder reaction: a *cis*-dienophile (substituents on the same side of the double bond) gives a product with those substituents *cis* on the new ring; a *trans*-dienophile gives a *trans* product. The alkene's geometry is "remembered" — the defining test of a concerted, suprafacial process.

### Suprafacial versus antarafacial addition

Each component of a cycloaddition can interact with the other in two ways:

- **Suprafacial:** both new bonds form on the *same* face of that component's \(\pi\) system.
- **Antarafacial:** the two new bonds form on *opposite* faces.

For the thermal [4+2] Diels–Alder reaction, **suprafacial–suprafacial** addition is allowed and is what actually happens. For a thermal [2+2] cycloaddition, suprafacial–suprafacial is **symmetry-forbidden**: the orbital symmetries of the two alkenes do not match in the ground state. The thermal path would require one alkene to add antarafacially — geometrically impossible for a small \(\pi\) system — so it simply does not occur. Excite one alkene with light and the suprafacial–suprafacial path becomes allowed: the photochemical [2+2] cycloaddition is one of the most reliable reactions in photochemistry.

### The endo rule (Alder rule)

When the dienophile is cyclic (maleic anhydride is the standard example), two stereoisomeric adducts are possible. In the **endo** adduct the dienophile's electron-withdrawing group points *toward* the diene's \(\pi\) cloud, under the new bridge; in the **exo** adduct it points away. The **endo adduct dominates** — the Alder rule — even though the exo adduct is often the thermodynamically more stable isomer. The explanation is **secondary orbital interactions**: in the endo transition state, orbitals of the dienophile's carbonyl carbons overlap constructively with the p orbitals at the diene's central atoms (C2 and C3), which form no bonds but stabilize the transition state, making endo the **kinetic** product.

### Counting stereocenters in the adduct

A Diels–Alder adduct typically contains two new stereocenters (the carbons that were the dienophile's alkene carbons); with an unsymmetrical diene and dienophile, up to four can be created. The maximum number of stereoisomers follows the familiar formula:

\[
N_{\text{max}} = 2^n
\]

where \(n\) is the number of stereocenters. The cyclopentadiene–maleic anhydride adduct has three stereocenters, so \(2^3 = 8\) stereoisomers are theoretically possible — yet the reaction delivers essentially one, because the concerted mechanism and the endo rule lock in the configuration.

## ELI-10: Explain Like I'm 10

> Imagine two puzzle pieces that can only snap together one way: when they click, the bumps and grooves on the pieces are still on the joined result, exactly where they started. A cycloaddition is the same — it joins two molecules in one click, and whatever "shape" (cis or trans) the starting pieces had is still visible in the product. If the pieces are excited by light, they can also click together into a square ring, which is what happens to your skin's DNA in strong sunlight.

## High-Yield Points

- Cycloadditions are **concerted** and therefore **stereospecific**: reactant geometry appears unchanged in the product.
- **Syn addition** means both new \(\sigma\) bonds form on the same face of each \(\pi\) system; *cis*-dienophiles give *cis* products, *trans*-dienophiles give *trans* products.
- Thermal [4+2] (Diels–Alder): **suprafacial–suprafacial allowed**. Thermal [2+2]: **suprafacial–suprafacial forbidden**.
- Photochemical [2+2] cycloadditions are allowed and stereospecific; thymine dimer formation in DNA is the biologically crucial example.
- **Endo rule (Alder rule):** cyclic dienophiles such as maleic anhydride give the endo adduct as the kinetic product, explained by secondary orbital interactions.
- Maximum stereoisomer count: \(N_{\text{max}} = 2^n\) — a ceiling, not a prediction; stereospecificity collapses the count.
- The exo adduct can be *more stable* than endo; endo wins because it forms *faster* (transition-state control).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| cycloaddition | Pericyclic reaction joining two unsaturated molecules into a ring, forming two \(\sigma\) bonds and consuming two \(\pi\) bonds | The reaction family this topic predicts |
| concerted | All bond breaking and forming happens in one step, with no intermediate | The reason geometry is preserved |
| stereospecific | A reaction in which reactant stereochemistry forces product stereochemistry | Lets you predict ring stereocenters exactly |
| syn addition | Both new bonds form on the same face of a \(\pi\) system | Source of the cis/trans memory effect |
| suprafacial | Both new bonds form on the same face of a component | The allowed mode for thermal [4+2] |
| antarafacial | The two new bonds form on opposite faces of a component | The mode required (but geometrically impossible) for thermal [2+2] |
| endo | Adduct with the dienophile's electron-withdrawing group pointing toward the diene's \(\pi\) cloud | The favored product with cyclic dienophiles |
| exo | Adduct with the electron-withdrawing group pointing away from the diene's \(\pi\) cloud | Often the more stable but slower product |
| secondary orbital interaction | Stabilizing non-bonding overlap in the endo transition state | Explains the Alder rule |
| cyclobutane pyrimidine dimer | DNA lesion from photochemical [2+2] of adjacent thymines | Major UV damage product repaired by nucleotide-excision repair |

## How It Works / Step-by-Step Process

To predict the stereochemistry of any cycloaddition:

1. **Classify the reaction:** count the \(\pi\) electrons in each partner — [4+2] (diene + dienophile) or [2+2] (two alkenes).
2. **Check the selection rule:** thermal [4+2] is allowed; thermal [2+2] is forbidden — it must be photochemical.
3. **Lock the reactant geometry:** note whether each alkene is *cis* or *trans*; this will be transferred to the product.
4. **Apply syn addition:** draw the new bonds on the same face of each \(\pi\) system, placing the dienophile's substituents on the same face they occupied in the alkene.
5. **Apply the endo rule** if the dienophile is cyclic: draw the electron-withdrawing group under the new bridge.
6. **Count stereocenters** and write \(N_{\text{max}} = 2^n\) to check how many stereoisomers are possible; then note that stereospecificity selects one.
7. **Sanity-check with the retro reaction:** heating the adduct should regenerate the original diene and dienophile with their original geometries.

## Worked Examples

### Example 1: Dimethyl maleate versus dimethyl fumarate with cyclopentadiene

The dienophiles are stereoisomers: **dimethyl maleate** has the two ester groups on the *same* side of the double bond (cis), while **dimethyl fumarate** has them on *opposite* sides (trans). Both react with cyclopentadiene (a locked s-cis diene).

Because the cycloaddition is concerted with syn addition, the relationship is preserved:

- Cyclopentadiene + dimethyl maleate → adduct with the two ester groups **cis** on the new bridge (the 5,6-positions of the bicyclo[2.2.1]heptene framework).
- Cyclopentadiene + dimethyl fumarate → adduct with the two ester groups **trans**.

The arrow-pushing is identical in both cases — the diene's C1–C2 \(\pi\) electrons form one \(\sigma\) bond while the C3–C4 \(\pi\) electrons form the other — but a trans-alkene's ends point to opposite faces, so the two new bonds land on opposite faces. Two starting isomers, two single products: the textbook demonstration of stereospecificity.

### Example 2: The endo adduct of cyclopentadiene and maleic anhydride

Maleic anhydride is a cyclic dienophile with both carbonyl groups on the same face of its double bond. Two adducts are possible:

- **Endo:** the anhydride's carbonyl oxygens point toward the diene's \(\pi\) cloud, under the new bridge.
- **Exo:** the carbonyls point away from the diene.

Apply the endo rule: the **endo adduct** (endo-bicyclo[2.2.1]hept-5-ene-2,3-dicarboxylic anhydride) is the major product, because the anhydride's carbonyl \(\pi^*\) orbitals overlap constructively with the diene's central C2–C3 p orbitals in the endo transition state, making endo the faster product even though it may be the less stable isomer. The stereocenter count confirms the power of the method:

\[
N_{\text{max}} = 2^3 = 8
\]

Three stereocenters allow eight possible stereoisomers, yet one product dominates — concerted stereospecificity plus the Alder rule did the selecting.

### Example 3: Thymine dimer formation — a photochemical [2+2] in your cells

When a DNA strand absorbs UV light (around 260 nm, in the absorption range of the pyrimidine bases), the C5–C6 double bonds of two adjacent thymines react. The suprafacial–suprafacial photochemical [2+2] cycloaddition joins C5 of one thymine to C5 of the other and C6 to C6, forming a cyclobutane ring fused to both bases. The dominant photoproduct is the **cis-syn** dimer — both thymines on the same face of the cyclobutane — exactly what the suprafacial mechanism dictates. If repair enzymes (photolyase, or the nucleotide-excision repair system) fail to remove this lesion, replication stalls and a mutation may result.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Endo product is more stable | Endo product forms faster | Endo wins kinetically (lower transition state via secondary orbital interactions); heating can equilibrate to the more stable exo isomer |
| Stereospecific | Stereoselective | Stereospecific: reactant geometry *forces* product geometry. Stereoselective: one of several possible products forms preferentially |
| Thermal [2+2] is just slow | Thermal [2+2] is forbidden | It is symmetry-forbidden, not merely sluggish — suprafacial–suprafacial addition is disallowed in the ground state; photochemical conditions are required |
| cis/trans of the dienophile | cis/trans of the product alkene | The dienophile's substituent geometry is preserved; the product's remaining double bond position is a separate feature |
| Antarafacial is just "trans" | A distinct topological concept | Antarafacial describes *faces of a \(\pi\) system*, not the E/Z arrangement of substituents |
| All cycloadditions follow the same rules | [4+2] and [2+2] differ | [4+2]: thermal suprafacial–suprafacial allowed. [2+2]: photochemical suprafacial–suprafacial allowed |
| \(2^n\) predicts the product | \(2^n\) is an upper limit | \(N_{\text{max}} = 2^n\) counts possibilities; stereospecificity selects one (or very few) |

## Quick Review

1. Why are cycloadditions stereospecific, and what is the one-word description of the mechanism that guarantees this?
2. A *cis*-dienophile reacts with a diene. What stereochemical relationship will its substituents have in the product?
3. Why does the thermal [2+2] cycloaddition of two simple alkenes not occur, yet the photochemical version works readily?
4. State the endo rule and the orbital-level explanation for it.
5. A Diels–Alder adduct has four stereocenters. What is the maximum number of stereoisomers possible, and why will the actual reaction typically give far fewer?
6. What lesion does UV light create in DNA, and which reaction type forms it?

<details>
<summary>Show answers</summary>

1. They are concerted — all bonds form and break in a single step with no intermediate whose geometry could scramble, so reactant stereochemistry is carried into the product.
2. They will be cis — syn addition preserves the dienophile's geometry on the new ring.
3. The thermal [2+2] reaction requires suprafacial–suprafacial addition, which orbital symmetry forbids in the ground state (an antarafacial component is geometrically impossible for a small alkene). Excitation by light changes the symmetry of the frontier orbitals, making suprafacial–suprafacial addition allowed.
4. The endo adduct dominates with cyclic dienophiles because the endo transition state is stabilized by secondary orbital interactions between the dienophile's electron-withdrawing group and the diene's central p orbitals.
5. \(2^4 = 16\) stereoisomers are theoretically possible, but the concerted mechanism plus the endo rule select essentially one product.
6. The cyclobutane pyrimidine dimer (predominantly the cis-syn isomer), formed by a photochemical [2+2] cycloaddition between adjacent thymines.

</details>

## Related Topics

- Previous: [Cycloaddition Reactions](05-cycloaddition-reactions.md)
- Next: [Sigmatropic Rearrangements](07-sigmatropic-rearrangements.md)
- Related: [Molecular Orbitals of Conjugated Pi Systems](01-molecular-orbitals-of-conjugated-pi-systems.md)
- Related: [A Summary of Rules for Pericyclic Reactions](09-a-summary-of-rules-for-pericyclic-reactions.md)
- Related: [The Diels–Alder Cycloaddition Reaction](../../chapter-14-conjugated-compounds-and-ultraviolet-spectroscopy/04-the-diels-alder-cycloaddition-reaction.md)
- Related: [Orbitals and Organic Chemistry: Pericyclic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Notes: Suprafacial/antarafacial terminology, the Alder (endo) rule, and the photochemical [2+2] selection rule are standard pericyclic-reaction concepts (Woodward–Hoffmann rules; see also the 1950 Nobel Prize in Chemistry for the Diels–Alder reaction). Thymine photodimerization is a well-established photochemistry topic; no numeric constants beyond standard counting formulas were used.
- Last updated: 2026-08-16
