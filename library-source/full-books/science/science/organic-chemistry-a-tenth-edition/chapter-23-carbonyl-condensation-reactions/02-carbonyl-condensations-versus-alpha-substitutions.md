---
title: "Carbonyl Condensations versus Alpha Substitutions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "23: Carbonyl Condensation Reactions"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "carbonyl-condensations-versus-alpha-substitutions"
  - "science"
status: "complete"
---

# Carbonyl Condensations versus Alpha Substitutions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 23: Carbonyl Condensation Reactions](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Chapter 22 and Chapter 23 both begin the same way: an α-hydrogen is removed from a carbonyl compound to make an enolate ion. The chapters then diverge at the **electrophile** the enolate meets:

- If the electrophile is a **non-carbonyl** species — a halogen (Br₂, Cl₂, I₂), an alkyl halide (R–X), or similar — the reaction is an **α-substitution**: the enolate replaces one α-hydrogen, and the carbonyl group survives intact.
- If the electrophile is another **carbonyl compound** (aldehyde, ketone, ester, nitrile), the reaction is a **condensation**: the enolate adds to the C=O, forming a new C–C bond and converting that carbonyl into an alcohol.

In both cases the enolate is the nucleophile; only the target changes. This topic trains you to look at a set of reagents and decide immediately which pathway operates, because the product classes — and the retrosynthetic logic built on them — are completely different.

## Why This Matters

When you see "enolate + reagent X," the first question is: substitution or condensation? The answer tells you what to draw and what mechanism to invoke, and it drives synthesis planning: α-substitution **appends a group** to an existing carbonyl, while condensation **joins two molecules** into a larger skeleton. Many exam reactions — Hell–Volhard–Zelinsky bromination, enolate alkylation, aldol, Claisen, Michael — are this one choice executed with different electrophiles. Misclassifying a reaction is the fastest way to draw the wrong product.

## Core Concepts

### The shared starting point: enolate formation

An enolate forms whenever a base removes an α-hydrogen from a carbonyl compound; the pKa of that hydrogen decides how easy this is (aldehydes/ketones ≈ 17–20, esters/nitriles ≈ 25, 1,3-dicarbonyls ≈ 11–13). With LDA the enolate forms quantitatively; with catalytic hydroxide or alkoxide it forms in a low steady-state concentration that is still enough to drive the reaction.

### α-Substitution: enolate meets a non-carbonyl electrophile

In α-substitution, the enolate attacks an electrophile that is *not* a carbonyl:

- **Halogens** (Br₂, Cl₂): α-halogenation. Under acid or base catalysis the α position gets a halogen; in base this can cascade into polyhalogenation (the haloform reaction is the extreme case, converting a methyl ketone to a carboxylate plus CHX₃).
- **Alkyl halides** (R–X): enolate alkylation (Chapter 22) via SN2 — methyl and primary halides work best.
- **Other electrophiles**: epoxides, and even molecular oxygen.

The carbonyl is untouched: a C–H at the α carbon becomes a C–E bond. The carbon count increases only if the electrophile is carbon-based.

### Condensation: enolate meets a carbonyl

In a condensation, the enolate attacks the carbonyl carbon of a second molecule. The C=O π bond moves onto oxygen as an alkoxide, which is then protonated. The product is a β-hydroxy carbonyl (aldol addition), which often dehydrates to an enone/enal. Two molecules become one, and the electrophilic partner's carbonyl is consumed.

Condensations come in families sharing the same logic:

- **Aldol** (topic 1): enolate of an aldehyde/ketone adds to an aldehyde/ketone.
- **Claisen** (topic 7): enolate of an ester adds to an ester's carbonyl, expelling alkoxide; product is a β-keto ester.
- **Michael** (topic 10): enolate adds to the *β carbon* of an enone (conjugate addition) rather than the carbonyl carbon.

### The decision rule

Cleanest approach: **find the enolate-forming partner, then identify the electrophile.**

| Reagents | Electrophile | Reaction | Product |
|---|---|---|---|
| Ketone + Br₂ (H⁺ or OH⁻) | Br₂ (non-carbonyl) | α-substitution | α-bromoketone |
| Ketone + LDA, then CH₃I | CH₃I (non-carbonyl) | α-substitution (alkylation) | α-methylketone |
| Ketone + NaOH (or LDA) + second carbonyl | C=O (carbonyl) | condensation | β-hydroxy carbonyl → enone |
| Ester + NaOEt + ester | ester C=O | condensation (Claisen) | β-keto ester |

If the electrophile has a C=O, it is a condensation; otherwise it is an α-substitution.

### Why the same enolate does different things

The enolate's behavior follows hard–soft and orbital logic: polarizable electrophiles (halogens, alkyl halides) react at the enolate carbon — the softer, more nucleophilic site — and carbonyl carbons react there too, via overlap of the enolate HOMO with the C=O π* (LUMO). Practical takeaway: enolates attack at carbon, and the electrophile's identity decides whether the carbonyl is preserved (substitution) or consumed (condensation).

## ELI-10: Explain Like I'm 10

> An enolate is like a kid holding a sticker. Hand the kid a sticker-book page (an alkyl halide or halogen) and the sticker lands on the page, which stays a page — substitution. Hand the kid a second sticker book (another carbonyl) and the two books stick together into one big book — condensation. Same sticker, different target.

## High-Yield Points

- Both reactions start with enolate formation; the electrophile decides the pathway.
- **Non-carbonyl electrophile → α-substitution** (halogenation, alkylation): carbonyl preserved, product is a substituted carbonyl.
- **Carbonyl electrophile → condensation** (aldol, Claisen, Michael): new C–C bond, one C=O becomes C–OH (then often C=C after dehydration).
- Aldol = enolate + aldehyde/ketone; Claisen = enolate + ester; Michael = enolate + β carbon of an enone.
- α-Substitution does not change the carbon count unless the electrophile is carbon-based; condensation always joins two molecules.
- α-Halogenation in base can over-halogenate; the haloform reaction converts methyl ketones to carboxylates.
- Classification first, mechanism second: name the electrophile before drawing arrows.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| α-substitution | Enolate replaces an α-H with a non-carbonyl electrophile | Preserves the carbonyl; makes substituted carbonyls (Ch 22) |
| condensation | Enolate adds to a carbonyl, forming a C–C bond between two molecules | Builds larger skeletons; the theme of Ch 23 |
| electrophile | The electron-poor species the enolate attacks | Its identity (C=O or not) decides the reaction class |
| enolate | α-carbanion of a carbonyl, resonance-stabilized | The nucleophile common to both pathways |
| β-hydroxy carbonyl | The initial condensation product (aldol addition) | Usually dehydrates to an enone |
| haloform reaction | Base-induced polyhalogenation of a methyl ketone, cleaving the C–C bond | Extreme α-substitution; makes carboxylates + CHX₃ |
| Claisen condensation | Enolate of an ester adds to an ester, expelling alkoxide | Ester version of the condensation (topic 7) |
| Michael reaction | Enolate adds to the β carbon of an enone | Conjugate (1,4) addition (topic 10) |

## Worked Examples

### Example 1: Classify and predict — cyclohexanone with two different electrophiles

Cyclohexanone (SMILES `O=C1CCCCC1`) is treated with (a) LDA at −78 °C, then methyl iodide; and (b) LDA, then acetaldehyde. Classify each and predict the product.

(a) The electrophile is CH₃I — an alkyl halide, not a carbonyl. This is an **α-substitution (alkylation)**. The enolate attacks the methyl carbon by SN2, displacing iodide. Product: **2-methylcyclohexanone** (SMILES `O=C1C(C)CCCC1`). The carbonyl is unchanged.

(b) The electrophile is acetaldehyde — a carbonyl. This is a **condensation (crossed aldol)**. The cyclohexanone enolate adds to acetaldehyde's carbonyl carbon, giving the β-hydroxy ketone 2-(1-hydroxyethyl)cyclohexanone (SMILES `O=C1C(C(O)C)CCCC1`). The acetaldehyde C=O is gone, replaced by an alcohol.

Same enolate, same base, different electrophile → different reaction class, different product.

### Example 2: How much Br₂ is needed to α-brominate 10.0 g of acetone?

Acetone (SMILES `CC(=O)C`, M = 58.08 g/mol) reacts with Br₂ (M = 159.81 g/mol) in acid to give α-bromoacetone, 1:1 stoichiometry. First find the moles of acetone:

\[
n(\text{acetone}) = \frac{m}{M} = \frac{10.0\ \text{g}}{58.08\ \text{g mol}^{-1}} = 0.1722\ \text{mol}
\]

Since the reaction is 1:1, the same number of moles of Br₂ is required. Convert to mass:

\[
m(\mathrm{Br_2}) = n \times M = 0.1722\ \text{mol} \times 159.81\ \text{g mol}^{-1} = 27.5\ \text{g}
\]

Check the units: mol × g/mol = g. In practice a slight excess of Br₂ is used, and the reaction is run in acetic acid or with HBr catalysis; the acidic medium suppresses polybromination by keeping the enol concentration low.

### Example 3: Same starting material, both pathways

Show how ethyl acetate can undergo (a) α-substitution and (b) condensation, and name the products.

(a) Ethyl acetate (SMILES `CC(=O)OCC`) + LDA, then CH₃CH₂Br → SN2 alkylation at the α carbon: **ethyl butanoate** (α-substitution; the ester carbonyl survives).

(b) Ethyl acetate + sodium ethoxide (its own enolate) → **Claisen condensation**: the enolate attacks a second ester's carbonyl, ethoxide is expelled, and the product after protonation is the β-keto ester **ethyl acetoacetate** (SMILES `CC(=O)CC(=O)OCC`). This is a condensation — two molecules joined, one C=O converted to an enolate-stabilized ketone.

Same enolate-forming starting material, same base — the choice of electrophile (alkyl halide vs ester) separates substitution from condensation.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| α-substitution | Condensation | Substitution: enolate + non-carbonyl electrophile, C=O preserved. Condensation: enolate + carbonyl, C–C bond between molecules |
| Aldol condensation | Enolate alkylation | Both use enolates, but aldol's electrophile is a C=O (product: β-hydroxy carbonyl/enone); alkylation's is R–X (product: α-alkylated carbonyl) |
| α-Halogenation product | Haloform product | One Br on the α carbon = normal substitution; three halogens on a methyl ketone → C–C cleavage to carboxylate + CHBr₃ |
| "Condensation always loses water" | Aldol addition step | The addition itself loses nothing; water is lost only in the subsequent dehydration of the β-hydroxy product |
| Claisen (ester + ester) | Aldol (aldehyde/ketone + aldehyde/ketone) | Different carbonyl families, same condensation logic; Claisen expels an alkoxide leaving group |
| Michael addition | Direct (1,2) carbonyl addition | Michael = enolate adds to the β carbon of an enone (1,4); aldol = addition to the carbonyl carbon (1,2) |

## Quick Review

1. State the decision rule that distinguishes an α-substitution from a carbonyl condensation.
2. Cyclohexanone + LDA, then benzaldehyde: substitution or condensation? What is the product class?
3. Why does base-catalyzed α-bromination of a methyl ketone tend to over-halogenate, while acid catalysis helps stop at the monobromo stage?
4. Name the condensation product of ethyl acetate with sodium ethoxide.
5. A reaction uses 8.0 g of acetone and excess Br₂ to make α-bromoacetone. How many grams of Br₂ are needed (1:1)? Show the calculation.

<details>
<summary>Show answers</summary>

1. Identify the electrophile the enolate attacks: if it contains a carbonyl (C=O), the reaction is a condensation; if it is a halogen, alkyl halide, or other non-carbonyl electrophile, it is an α-substitution.
2. Condensation (crossed aldol): benzaldehyde is a carbonyl electrophile; the enolate adds to its C=O, giving a β-hydroxy ketone (which can dehydrate to an enone).
3. In base, each bromination makes the remaining α-H more acidic, so the enolate reforms faster and the next Br adds readily. In acid, the enol concentration stays low and the reaction is slower, favoring isolation of the monobrominated product.
4. Ethyl acetoacetate (a β-keto ester), via the Claisen condensation.
5. n(acetone) = 8.0 g / 58.08 g mol⁻¹ = 0.1377 mol; m(Br₂) = 0.1377 mol × 159.81 g mol⁻¹ = 22.0 g.

</details>

## Related Topics

- Previous: [Carbonyl Condensations: The Aldol Reaction](01-carbonyl-condensations-the-aldol-reaction.md)
- Next: [Dehydration of Aldol Products: Synthesis of Enones](03-dehydration-of-aldol-products-synthesis-of-enones.md)
- Related: [Alkylation of Enolate Ions](../chapter-22-carbonyl-alpha-substitution-reactions/07-alkylation-of-enolate-ions.md)
- Related: [The Claisen Condensation Reaction](07-the-claisen-condensation-reaction.md)
- Related: [Conjugate Carbonyl Additions: The Michael Reaction](10-conjugate-carbonyl-additions-the-michael-reaction.md)
- Related: [Carbonyl Condensation Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Molar masses computed from standard atomic weights (2026).
- Last updated: 2026-08-16
