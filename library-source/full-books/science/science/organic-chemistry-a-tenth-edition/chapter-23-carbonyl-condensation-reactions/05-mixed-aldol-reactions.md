---
title: "Mixed Aldol Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "23: Carbonyl Condensation Reactions"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "mixed-aldol-reactions"
  - "science"
status: "complete"
---

# Mixed Aldol Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 23: Carbonyl Condensation Reactions](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

A **mixed (crossed) aldol reaction** joins two *different* carbonyl compounds: an enolate from one partner adds to the carbonyl of the other, giving a β-hydroxy carbonyl that usually dehydrates to an enone. The catch is that if both partners have α-hydrogens, each can serve as either enolate source or electrophile, so up to **four products** can form. Chemists tame this with two tactics: (1) use a partner with **no α-hydrogens** (only one compound can enolize), or (2) **pre-form the enolate** of one partner with a strong base such as LDA before adding the second. This topic shows how to predict which product a mixed aldol delivers — the skill behind syntheses ranging from cinnamaldehyde in flavor chemistry to the aldol steps of the Robinson annulation (topic 12).

## Why This Matters

- **Mixed aldols build one specific C–C bond between two chosen fragments** — exactly what real syntheses need, and what self-aldols cannot provide.
- **The four-product trap is a classic exam question:** counting products and explaining why a benzaldehyde partner eliminates three of them is high-yield reasoning.
- **Directed aldols (LDA enolates) are routine in drug and natural-product synthesis**, and the regiochemical thinking here recurs in mixed Claisen condensations (topic 08) and the Michael/Robinson reactions (topics 10–12).

## Core Concepts

### The four-product problem

Mix acetaldehyde and propanal with hydroxide and both enolates form, each able to attack either carbonyl. The result is up to four adducts — two self-aldols and two crossed:

\\[
\\text{enolate A + A} \\quad \\text{enolate A + B} \\quad \\text{enolate B + A} \\quad \\text{enolate B + B}
\\]

The crossed product you wanted is only a fraction of the mixture. Two structural features rescue the reaction.

### Strategy 1: a partner with no α-hydrogens

If one carbonyl has **no α-H**, it cannot enolize — it can only act as the electrophile. **Benzaldehyde** (C₆H₅CHO) is the classic example: the ring carbon bears no hydrogen. **Formaldehyde** (HCHO) has no α carbon at all. With benzaldehyde plus acetone under hydroxide, only acetone enolizes, and its enolate has only benzaldehyde to attack:

\\[
\\text{C}_6\\text{H}_5\\text{CHO} + \\text{CH}_3\\text{COCH}_3 \\xrightarrow{\\text{OH}^-} \\text{C}_6\\text{H}_5\\text{CH(OH)CH}_2\\text{COCH}_3 \\rightarrow \\text{C}_6\\text{H}_5\\text{CH}=\\text{CHCOCH}_3
\\]

The β-hydroxy adduct dehydrates in hot base (topic 03) to the conjugated enone — here **benzylideneacetone**, a single product.

### Strategy 2: a preformed enolate (directed aldol)

When *both* partners have α-H's, form the enolate of one partner **before** adding the other. LDA (lithium diisopropylamide), a strong, bulky, non-nucleophilic base, deprotonates a ketone completely and irreversibly at −78 °C. The enolate solution is then added to the second carbonyl, which never gets a chance to enolize — one product, complete regiochemical control. The equilibrium argument from Chapter 22 explains why LDA works: for deprotonation of a ketone (pKa ≈ 19) by LDA (conjugate acid pKa ≈ 36),

\\[
K_{\\text{eq}} = 10^{(pK_a(\\text{amine}) - pK_a(\\text{ketone}))} = 10^{(36 - 19)} = 10^{17}
\\]

Formula first, then substitution — the equilibrium lies so far right that enolate formation is essentially quantitative.

### Regiochemistry: which α-carbon enolizes?

If the enolizable partner has two different α positions (e.g., 2-methylcyclohexanone), the directed aldol can give two regioisomers. **Kinetic control** (LDA, −78 °C, fast and irreversible) removes the less hindered, more hydrogen-rich α-H; **thermodynamic control** (weaker base, longer time) favors the more substituted, more stable enolate. Predict the enolate first, then the aldol product.

### Dehydration completes the sequence

Aldol adducts are β-hydroxy carbonyls that typically dehydrate to α,β-unsaturated carbonyls under the reaction conditions. With benzaldehyde, dehydration is especially favorable because it extends conjugation into the aromatic ring — which is why cinnamaldehyde (C₆H₅CH=CHCHO) forms so readily from benzaldehyde and acetaldehyde.

## ELI-10: Explain Like I'm 10

Mixing two different carbonyls in an aldol is like a dance where both partners can lead — you'd get four different couples. To force one specific couple, you either pick a partner that can't lead (like benzaldehyde, which has no loose hydrogens to grab), or you grab the hydrogen off your chosen leader first with a very strong base so only it can move. Then the dance has exactly one outcome.

## High-Yield Points

- **Four products** form when two enolizable carbonyls are mixed under basic aldol conditions; the crossed product is only one of them.
- A partner **without α-H** (benzaldehyde, formaldehyde) cannot enolize — it is a pure electrophile, and the product count drops to one.
- **Directed aldol:** pre-form one enolate with LDA at −78 °C, then add the second carbonyl — one product with complete control.
- K_eq for enolate formation = 10^(pKa(conjugate acid of base) − pKa(substrate)); LDA (pKa ≈ 36) deprotonates ketones (pKa ≈ 19) essentially completely.
- Predict regiochemistry from the enolate: kinetic (less hindered α-H, LDA, cold) vs thermodynamic (more substituted enolate, equilibration).
- Aldol adducts are β-hydroxy carbonyls and usually **dehydrate to enones**; conjugation with an aromatic ring makes dehydration especially favorable.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Mixed (crossed) aldol | Aldol reaction between two different carbonyl compounds | The standard way to build a specific C–C bond between two chosen fragments |
| Non-enolizable partner | Carbonyl with no α-hydrogen (benzaldehyde, formaldehyde) | Can only act as the electrophile, eliminating three of the four possible products |
| Directed aldol | Enolate of one partner pre-formed with a strong base before adding the other | Gives a single crossed product even when both partners have α-H's |
| LDA (lithium diisopropylamide) | Strong, bulky, non-nucleophilic base (conjugate acid pKa ≈ 36) | Forms complete, kinetically controlled enolates at −78 °C |
| β-Hydroxy carbonyl | The initial aldol adduct (alcohol β to the carbonyl) | The intermediate that dehydrates to the enone product |
| Enone | α,β-Unsaturated carbonyl (C=C–C=O) | The dehydrated, conjugated product of most aldol reactions |

## Worked Examples

### Example 1: Acetaldehyde + formaldehyde

**Problem:** Acetaldehyde and aqueous formaldehyde are treated with dilute NaOH. Predict the product.

**Reasoning:** Formaldehyde (HCHO) has no α-H, so only acetaldehyde can enolize. Its enolate attacks formaldehyde's carbonyl:

\\[
\\text{CH}_2=\\text{CHO}^- \\text{(from CH}_3\\text{CHO)} + \\text{HCHO} \\rightarrow \\text{HOCH}_2\\text{CH}_2\\text{CHO}
\\]

**Answer:** 3-Hydroxypropanal (HOCH₂CH₂CHO) — a single crossed product; under forcing conditions it dehydrates to acrolein (CH₂=CHCHO).

### Example 2: Benzaldehyde + acetone → benzylideneacetone

**Step 1 — Identify the enolate source:** benzaldehyde has no α-H, so only acetone enolizes: CH₃COCH₂⁻.

**Step 2 — Attack:** the acetone enolate adds to the benzaldehyde carbonyl carbon:

\\[
\\text{C}_6\\text{H}_5\\text{CHO} + \\text{CH}_3\\text{COCH}_2^- \\rightarrow \\text{C}_6\\text{H}_5\\text{CH(O}^-\\text{)CH}_2\\text{COCH}_3
\\]

**Step 3 — Protonation and dehydration:** the alkoxide picks up a proton and the β-hydroxy ketone dehydrates to the conjugated enone:

\\[
\\text{C}_6\\text{H}_5\\text{CH(OH)CH}_2\\text{COCH}_3 \\rightarrow \\text{C}_6\\text{H}_5\\text{CH}=\\text{CHCOCH}_3
\\]

**Answer:** 4-Phenylbut-3-en-2-one (benzylideneacetone). With excess benzaldehyde, a second condensation at the remaining α position gives dibenzylideneacetone — evidence that each α-H enolizes independently.

### Example 3: Directed aldol with LDA — why one product

**Problem:** You need the crossed aldol of cyclohexanone and isobutyraldehyde, both with α-H's. Why does the LDA procedure succeed where hydroxide fails?

**Step 1 — Count products with hydroxide:** each enolate can attack either partner → up to four adducts, all interconverting through enolate equilibria.

**Step 2 — Pre-form the enolate:** LDA removes the less hindered α-H of cyclohexanone completely at −78 °C:

\\[
K_{\\text{eq}} = 10^{(pK_a(\\text{amine}) - pK_a(\\text{ketone}))} = 10^{(36 - 19)} = 10^{17}
\\]

essentially all ketone is enolate before isobutyraldehyde is added.

**Step 3 — Add the electrophile:** the preformed enolate attacks isobutyraldehyde's carbonyl; with no base present, isobutyraldehyde never enolizes.

**Answer:** 2-(1-Hydroxy-2-methylpropyl)cyclohexanone — one product, exactly as designed.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Mixed aldol | Self-aldol | Mixed uses two different carbonyls; self-aldol uses two molecules of the same one |
| Benzaldehyde (no α-H) | Acetone (has α-H) | Only the partner with α-H can be the enolate; the no-α-H partner is always the electrophile |
| Kinetic enolate | Thermodynamic enolate | Kinetic forms at the less hindered α-H under LDA/cold conditions; thermodynamic is the more substituted enolate from equilibration |
| Aldol adduct | Enone product | The adduct is the β-hydroxy carbonyl formed first; the enone is its dehydration product |
| Directed aldol (LDA) | Equilibrium aldol (OH⁻) | LDA pre-forms one enolate irreversibly; hydroxide generates both enolates reversibly, inviting all four products |

## Quick Review

1. Why does mixing acetaldehyde with propanal under NaOH give several products, not one?
2. Which of these can serve as the "no-enolate" partner: benzaldehyde, acetone, formaldehyde, ethyl acetate? Explain.
3. Predict the product of benzaldehyde + cyclohexanone with NaOH (after dehydration).
4. Calculate K_eq for deprotonation of acetone (pKa 19.3) by LDA (conjugate acid pKa 36). Is enolate formation complete?
5. 2-Methylcyclohexanone is enolized with LDA at −78 °C, then treated with benzaldehyde. Which regioisomeric product forms, and why?

<details>
<summary>Show answers</summary>

1. Both compounds have α-H's, so each can act as both enolate source and electrophile — up to four adducts (two self, two crossed) form simultaneously.
2. Benzaldehyde and formaldehyde only. Acetone and ethyl acetate both have α-H's and can enolize.
3. 2-Benzylidenecyclohexanone: the cyclohexanone enolate attacks benzaldehyde, and the adduct dehydrates to the conjugated enone.
4. K_eq = 10^(36 − 19.3) = 10^16.7 ≈ 5 × 10¹⁶ — essentially complete deprotonation; this is why LDA gives a clean, stoichiometric enolate.
5. The kinetic enolate forms at the less hindered α-H (the CH₂ away from the methyl group), so benzaldehyde adds at the unsubstituted α position: 2-(hydroxyphenylmethyl)-6-methylcyclohexanone.

</details>

## Related Topics

- Previous: [Using Aldol Reactions in Synthesis](04-using-aldol-reactions-in-synthesis.md)
- Next: [Intramolecular Aldol Reactions](06-intramolecular-aldol-reactions.md)
- Related: [Carbonyl Condensations: The Aldol Reaction](01-carbonyl-condensations-the-aldol-reaction.md), [Dehydration of Aldol Products: Synthesis of Enones](03-dehydration-of-aldol-products-synthesis-of-enones.md), [Mixed Claisen Condensations](08-mixed-claisen-condensations.md)
- Chapter overview: [Chapter 23: Carbonyl Condensation Reactions](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition (McMurry-style chapter organization)
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on the OpenStax outline structure. pKa values (acetone ~19, diisopropylamine ~36) are standard textbook values; the equilibrium constant is derived from K_eq = 10^(ΔpKa), not measured data.
- Lab safety note: LDA and alkyllithium reagents are pyrophoric and moisture-sensitive and require inert-atmosphere techniques and strict PPE under institutional safety rules. This guide states general principles only, not experimental procedures.
- Last updated: 2026-08-16
