---
title: "Alpha Halogenation of Aldehydes and Ketones"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "22: Carbonyl Alpha-Substitution Reactions"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "alpha-halogenation-of-aldehydes-and-ketones"
  - "science"
status: "complete"
---

# Alpha Halogenation of Aldehydes and Ketones

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

When an aldehyde or ketone with α-hydrogens is treated with a halogen (Cl₂, Br₂, or I₂), one or more α-hydrogens are replaced by halogen — the **α-halogenation** reaction. The halogen attaches to the α carbon, not the carbonyl carbon, and the reaction proceeds through the enol (acid-catalyzed) or the enolate (base-catalyzed) intermediate from topics 01, 02, and 05. The carbonyl is preserved, so α-haloketones are useful building blocks for further substitution chemistry.

Two mechanistic regimes matter:

- **Acid-catalyzed:** rate depends only on enol formation; mono-halogenation is controllable.
- **Base-catalyzed:** rate depends on both enolate and halogen concentrations; reaction tends to continue to the trihalo stage, and for methyl ketones this ends in the **haloform reaction**.

## Why This Matters

- **α-Haloketones are synthetic intermediates.** The C–X bond at the α position is an excellent leaving group for substitution (e.g., making α-amino ketones) and a handle for many functional-group transformations.
- **The haloform reaction is a degradation tool.** A methyl ketone, RCOCH₃, treated with halogen and base is cleaved to a carboxylate plus a haloform. Iodoform (CHI₃) is a yellow solid, so the **iodoform test** historically identified methyl ketones (and ethanol, which oxidizes to acetaldehyde).
- **Exam value.** Distinguishing acid- vs base-catalyzed conditions, predicting mono vs polyhalogenation, and recognizing haloform cleavage are classic exam questions.

## Core Concepts

### Acid-catalyzed halogenation

The mechanism (topic 02):

1. **Enolization** — acid protonates the carbonyl oxygen and the α-H is lost, giving the enol (slow, rate-determining).
2. **Attack on halogen** — the nucleophilic terminal carbon of the enol attacks X₂, breaking the X–X bond; one halogen bonds to the α carbon and the other leaves as X⁻.
3. **Deprotonation** — loss of H⁺ from oxygen restores the carbonyl, giving the α-haloketone and HX.

Net change for one α-H:

\[
\text{RCOCH}_2\text{R}' + \text{X}_2 \rightarrow \text{RCOCH(X)R}' + \text{HX}
\]

The rate law is first order in the carbonyl compound and in acid, and zero order in halogen:

\[
\text{rate} = k[\text{carbonyl}][\text{H}^+]
\]

Because enolization is rate-limiting and slow, the reaction stops cleanly at the mono-halogenated product: the electron-withdrawing halogen makes the remaining α-H's enolization slower (it destabilizes the positive charge developing in the enolization transition state).

### Base-catalyzed halogenation

With base, the reaction runs through the **enolate** (topic 05):

1. **Enolate formation** — base removes an α-H, giving the enolate (fast, reversible).
2. **Attack on halogen** — the enolate's α carbon attacks X₂, giving the α-haloketone and X⁻.

The rate law now includes the halogen:

\[
\text{rate} = k[\text{enolate}][\text{X}_2]
\]

The product α-haloketone has an *even more acidic* α-H (the halogen withdraws electron density), so base removes it more easily than in the starting material — the reaction does not stop at monohalogenation but continues to di- and trihalo stages.

### The haloform reaction

For a **methyl ketone** (RCOCH₃), exhaustive base-catalyzed halogenation gives RCOCX₃. The three halogens make the carbonyl carbon extremely electrophilic; hydroxide attacks it, and the tetrahedral intermediate collapses by expelling the stabilized trihalomethyl carbanion CX₃⁻. Proton transfer gives the carboxylate RCOO⁻ plus the haloform CHX₃:

\[
\text{RCOCH}_3 + 3\text{X}_2 + 4\text{NaOH} \rightarrow \text{RCOONa} + \text{CHX}_3 + 3\text{NaX} + 3\text{H}_2\text{O}
\]

With X = I, iodoform (CHI₃) is a bright-yellow solid, making this a qualitative test for the CH₃CO– group. Note the stoichiometry: 3 equivalents of halogen and 4 of base per methyl ketone.

## Worked Examples

### Example 1 — Acid-catalyzed bromination of acetophenone

Acetophenone (C₆H₅COCH₃) is treated with 1 equivalent of Br₂ in acetic acid containing a trace of HBr. Predict the product and the rate law.

**Product:** under acid catalysis the reaction stops at mono-bromination:

\[
\text{C}_6\text{H}_5\text{COCH}_3 + \text{Br}_2 \xrightarrow{\text{H}^+} \text{C}_6\text{H}_5\text{COCH}_2\text{Br} + \text{HBr}
\]

Phenacyl bromide (α-bromoacetophenone) is a white solid widely used as a starting material for heterocycle synthesis.

**Rate law:** \( \text{rate} = k[\text{acetophenone}][\text{H}^+] \). Br₂ does not appear because enolization is rate-determining; the aromatic ring does not participate.

### Example 2 — Iodoform-test stoichiometry (dimensional analysis)

A student treats 1.00 g of acetone (molar mass 58.08 g/mol) with excess I₂ and NaOH. What mass of iodoform (CHI₃, molar mass 393.73 g/mol) can form at complete conversion?

**Step 1 — mole relationship.** Each mole of acetone gives one mole of iodoform:

\[
\frac{1\ \text{mol CHI}_3}{1\ \text{mol CH}_3\text{COCH}_3}
\]

**Step 2 — convert mass of acetone to moles:**

\[
1.00\ \text{g CH}_3\text{COCH}_3 \times \frac{1\ \text{mol CH}_3\text{COCH}_3}{58.08\ \text{g CH}_3\text{COCH}_3} = 1.72 \times 10^{-2}\ \text{mol CH}_3\text{COCH}_3
\]

**Step 3 — convert moles of iodoform to mass:**

\[
1.72 \times 10^{-2}\ \text{mol CHI}_3 \times \frac{393.73\ \text{g CHI}_3}{1\ \text{mol CHI}_3} = 6.78\ \text{g CHI}_3
\]

The unit chain is: g acetone → mol acetone → mol CHI₃ → g CHI₃. Forgetting the 1:1 mole relationship would mislead by a factor related to the three I atoms *within* each CHI₃ formula (not a stoichiometric multiplier).

### Example 3 — Mono vs polyhalogenation

Would you use acid or base catalysis to prepare α-chlorocyclohexanone cleanly from cyclohexanone?

**Answer:** acid catalysis. Under acid, the rate is set by enolization (zero-order in Cl₂), and the first chlorine slows further enolization, so the mono-chloro product dominates. Under base, the α-chloro ketone's remaining α-H is more acidic than the starting material's, so enolate formation is faster and di- and trichlorination (and haloform cleavage, for methyl ketones) compete.

## ELI-10: Explain Like I'm 10

> A swing set (the carbonyl) has kids (hydrogens) sitting beside it. Under acid, the set flips into a magnet form, grabs exactly one new ball (a halogen), and flips back — then politely refuses a second ball for a while. Under base, the kids get rowdy: after one ball, the set gets *more* eager, grabs two or three, and if the seat was a special "methyl" seat, the whole set tips over and the three balls roll away as a little yellow heap (iodoform). That is why the iodoform test gives a yellow precipitate only for methyl ketones.

## High-Yield Points

- **Acid-catalyzed:** enol intermediate; \( \text{rate} = k[\text{carbonyl}][\text{H}^+] \), zero-order in X₂; mono-halogenation is controllable.
- **Base-catalyzed:** enolate intermediate; \( \text{rate} = k[\text{enolate}][\text{X}_2] \); over-halogenates because each halogen acidifies the remaining α-H.
- **Haloform reaction:** RCOCH₃ + 3 X₂ + 4 NaOH → RCOONa + CHX₃ + 3 NaX + 3 H₂O; with I₂, yellow CHI₃ is the positive iodoform test.
- Only carbonyls with α-H react; no α-H = no α-halogenation.
- Aldehydes are easily oxidized under basic conditions, so aldehyde halogenation is usually run under acid catalysis.
- α-Haloketones are electrophilic building blocks (the C–X bond can be displaced by nucleophiles).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| α-Halogenation | Replacing an α-H of a carbonyl with Cl, Br, or I. | The simplest α-substitution; gateway to α-functionalized carbonyls. |
| Enol | Neutral C=C–OH tautomer (acid pathway). | The nucleophilic intermediate in acid-catalyzed halogenation. |
| Enolate | Deprotonated, negatively charged enol form (base pathway). | The nucleophilic intermediate in base-catalyzed halogenation. |
| Haloform reaction | Base-promoted cleavage of a methyl ketone into carboxylate + CHX₃. | Degrades RCOCH₃ to a carboxylic acid; basis of the iodoform test. |
| Iodoform test | Formation of yellow CHI₃ from a methyl ketone (or ethanol) with I₂/NaOH. | Historic qualitative test for the CH₃CO– group. |
| Rate-determining step | The slow step controlling the overall rate. | In acid catalysis it is enolization, hence zero-order in halogen. |

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Acid- vs base-catalyzed halogenation | — | Acid: enol, zero-order in X₂, stops at mono. Base: enolate, first-order in X₂, goes to polyhalogenation/haloform. |
| Mono- vs polyhalogenation | — | Under base, each halogen acidifies the remaining α-H, accelerating further reaction; under acid the opposite occurs. |
| Halogenation of aldehyde vs ketone | — | Aldehydes are readily oxidized by halogen/base; use acid conditions for aldehydes. |
| Iodoform (CHI₃) | Iodine (I₂) | CHI₃ is the yellow product of the test; I₂ is the reagent. |
| α-Halogenation | Halogen addition to an alkene | α-Halogenation keeps the C=O and substitutes H on the adjacent carbon; alkene halogenation adds X₂ across a C=C. |

## Quick Review

1. Write the rate law for acid-catalyzed bromination of cyclohexanone. Why is the halogen absent?
2. Why does base-catalyzed chlorination of acetone not stop at monochloroacetone?
3. What happens when 3-pentanone (CH₃CH₂COCH₂CH₃) is treated with excess I₂/NaOH? (Hint: is it a methyl ketone?)
4. How many equivalents of Br₂ and NaOH are consumed per mole of acetophenone in the haloform-type reaction?
5. A compound gives a yellow precipitate with I₂/NaOH but no reaction with Br₂/H⁺. What does that tell you?

<details>
<summary>Show answers</summary>

1. \( \text{rate} = k[\text{cyclohexanone}][\text{H}^+] \). Enolization is the slow step; Br₂ is consumed rapidly afterward, so its concentration does not control the rate.
2. The α-chloro product has a more acidic α-H (Cl withdraws electron density), so base deprotonates it faster than the starting ketone, driving the reaction to di- and trichloro stages.
3. 3-Pentanone is not a methyl ketone (the α carbons are CH₂ of ethyl groups), so no haloform cleavage occurs; only polyhalogenation takes place, and no CHI₃ forms.
4. 3 Br₂ and 4 NaOH per mole: C₆H₅COCH₃ + 3Br₂ + 4NaOH → C₆H₅COONa + CHBr₃ + 3NaBr + 3H₂O.
5. Yellow CHI₃ with I₂/NaOH indicates a methyl ketone (CH₃CO–) or an alcohol oxidizable to one. No reaction with Br₂/H⁺ would be unexpected for a simple enolizable ketone — re-check the structure; a non-enolizable carbonyl (no α-H) cannot do either reaction.

</details>

## Related Topics

- Previous: [Reactivity of Enols: α-Substitution Reactions](02-reactivity-of-enols-substitution-reactions.md)
- Next: [Alpha Bromination of Carboxylic Acids](04-alpha-bromination-of-carboxylic-acids.md)
- Related: [Keto–Enol Tautomerism](01-keto-enol-tautomerism.md), [Acidity of Alpha Hydrogen Atoms: Enolate Ion Formation](05-acidity-of-alpha-hydrogen-atoms-enolate-ion-formation.md), [Reactivity of Enolate Ions](06-reactivity-of-enolate-ions.md)
- Chapter overview: [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition (McMurry-style chapter organization)
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on the OpenStax outline structure. Rate laws, mechanisms, and stoichiometry are standard textbook-level chemistry; molar masses are standard values (C 12.01, H 1.008, I 126.90).
- Lab safety note: halogens and HX gases are corrosive and toxic; halogenations must be run in a fume hood with PPE per institutional rules. This guide provides general principles, not a procedure.
- Last updated: 2026-08-16
