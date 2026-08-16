---
title: "The Claisen Condensation Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "23: Carbonyl Condensation Reactions"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "the-claisen-condensation-reaction"
  - "science"
status: "complete"
---

# The Claisen Condensation Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 23: Carbonyl Condensation Reactions](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

The **Claisen condensation** is the ester counterpart of the aldol reaction: an ester enolate adds to the carbonyl of a *second* ester molecule, and an alkoxide (OR⁻) is expelled as a leaving group. The product is a **β-keto ester** — a 1,3-dicarbonyl — and the reaction is driven to completion by a thermodynamic trick: the product's α-hydrogen is acidic enough (pKa ≈ 11) to be removed by the alkoxide base, so the final enolate of the β-keto ester pulls every step forward. The classic example is the self-condensation of ethyl acetate with sodium ethoxide:

\\[
2\\,\\text{CH}_3\\text{CO}_2\\text{Et} \\xrightarrow{\\text{NaOEt}} \\text{CH}_3\\text{COCH}_2\\text{CO}_2\\text{Et} + \\text{EtOH}
\\]

giving **ethyl acetoacetate**. This topic covers the mechanism, the base requirements, and the equilibrium logic — the foundation for the mixed Claisen (topic 08) and Dieckmann (topic 09) variations.

## Why This Matters

- **β-Keto esters are the gateway to substituted ketones and acids.** The acetoacetic ester synthesis (alkylate at the α-carbon, then hydrolyze and decarboxylate) turns a Claisen product into a substituted ketone; the malonic ester synthesis makes substituted acids. Both classic sequences start from Claisen-type products.
- **The mechanism is a recurring exam theme:** ester enolate → addition → tetrahedral intermediate → alkoxide leaving group → deprotonation of the product. Knowing *why* the base must be an alkoxide is routinely tested.
- **Biological chemistry runs on Claisen-type logic.** Fatty acid biosynthesis couples thioesters (acetyl-CoA, malonyl-CoA) through enolate additions to thioester carbonyls — the same condensation pattern with thiolate leaving groups.
- **It completes the aldol picture**, clarifying what is special about esters (a leaving group on the carbonyl) versus aldehydes and ketones (no leaving group).

## Core Concepts

### The mechanism in words

1. **Enolate formation (equilibrium, tiny amount).** The alkoxide base removes an α-H from one ester molecule. Because an ester's α-H has pKa ≈ 25 while ethanol's OH has pKa ≈ 16, the equilibrium lies far to the left — only a small fraction of ester exists as enolate at any moment.
2. **Nucleophilic addition.** That enolate attacks the carbonyl carbon of a second ester molecule, giving a tetrahedral intermediate (an alkoxide on what was the carbonyl oxygen, with an OR group still attached).
3. **Leaving-group expulsion.** The tetrahedral intermediate collapses, expelling alkoxide (EtO⁻) and re-forming a carbonyl: the enolate's carbon is now bonded to the second ester's carbonyl carbon.
4. **The driving force — deprotonation of the product.** The new β-keto ester has an α-H between two carbonyls, with pKa ≈ 11. The alkoxide base (conjugate acid pKa 16) removes it essentially completely:

\\[
K_{\\text{eq}} = 10^{(pK_a(\\text{EtOH}) - pK_a(\\beta\\text{-keto ester}))} = 10^{(16 - 11)} = 10^5
\\]

Each condensation event is followed by irreversible deprotonation of the product, which removes the β-keto ester from the pool and drags the whole sequence forward.

### Why the base must match the ester

A Claisen condensation of ethyl esters uses **sodium ethoxide**, of methyl esters **sodium methoxide**. Two reasons: **transesterification** — if the base's alkoxide differs from the ester's OR group, it would exchange alkoxide groups onto the ester carbonyl, scrambling the esters in the pot; and **hydrolysis** — a hydroxide base would attack the ester carbonyl and saponify it to a carboxylate, destroying the ester before it can condense. The rule is simple: ethyl ester → NaOEt; methyl ester → NaOMe.

### Why only some esters undergo Claisen

The ester that provides the enolate **must have an α-hydrogen** — a C–H on the carbon adjacent to the carbonyl. Esters without one (e.g., ethyl benzoate, C₆H₅CO₂Et, whose α position is an aromatic ring carbon) cannot form an enolate and therefore cannot self-condense. They can still act as the *electrophilic* partner in a mixed Claisen with an enolizable ester (topic 08).

### Claisen vs aldol: the key structural difference

The aldol reaction joins an enolate to an aldehyde or ketone carbonyl, which has no leaving group — the product is a β-hydroxy carbonyl, and the reaction is reversible. The Claisen joins an enolate to an *ester* carbonyl, which does have a leaving group (OR⁻) — so the addition is followed by elimination, and the product is a β-keto ester rather than an alcohol. Same enolate chemistry; different electrophile; different product class.

## ELI-10: Explain Like I'm 10

Imagine two kids (ester molecules) passing a ball. The first kid grabs the ball (an α-hydrogen) and runs to the second kid, who is holding a cookie jar (an ester carbonyl). When the first kid takes a cookie, the jar gives back a crumb (the alkoxide leaves), and now the two kids share the cookie — a β-keto ester. The trick is that the shared cookie is so good that one kid grabs it completely and won't let go, which makes everyone want to make more cookies. The whole game keeps going forward because nobody wants to give that cookie back.

## High-Yield Points

- Claisen condensation: ester enolate + ester → **β-keto ester**; the ester carbonyl's OR group is the leaving group.
- Self-condensation of ethyl acetate with NaOEt gives **ethyl acetoacetate** (CH₃COCH₂CO₂Et).
- Mechanism: enolate formation (unfavorable equilibrium) → addition to ester carbonyl → tetrahedral intermediate → alkoxide expulsion → deprotonation of the β-keto ester product (pKa ≈ 11) drives the reaction.
- The base must be the **alkoxide matching the ester's OR group** (NaOEt for ethyl esters, NaOMe for methyl esters); hydroxide would hydrolyze, a mismatched alkoxide would transesterify.
- The ester supplying the enolate **needs an α-H**; esters without α-H (ethyl benzoate) cannot self-condense.
- Product acidity is the engine: β-keto ester pKa ≈ 11 vs EtOH pKa 16 → K_eq ≈ 10⁵ for the final deprotonation.
- Claisen gives β-keto esters; aldol gives β-hydroxy carbonyls — the difference is the ester's leaving group.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Claisen condensation | Ester enolate + ester → β-keto ester, with alkoxide expelled | The standard route to 1,3-dicarbonyls and, downstream, substituted ketones/acids |
| β-Keto ester | A 1,3-dicarbonyl: ester and ketone carbonyls flanking a CH₂ (pKa ≈ 11) | Its acidity drives the condensation to completion |
| Tetrahedral intermediate | The alkoxide adduct formed when the enolate attacks the ester carbonyl | The transient species that collapses by expelling OR⁻ |
| Alkoxide base | RO⁻ (e.g., EtO⁻ from NaOEt) | The correct base for Claisen; matches the ester's OR and deprotonates the product |
| Acetoacetic ester synthesis | Alkylate ethyl acetoacetate at the α-carbon, then hydrolyze/decarboxylate | Turns the Claisen product into a substituted ketone |
| Saponification | Base-promoted hydrolysis of an ester to a carboxylate salt | Why hydroxide destroys esters instead of condensing them |

## Worked Examples

### Example 1: Self-condensation of ethyl acetate

**Problem:** Ethyl acetate is treated with sodium ethoxide. Identify the product and explain why the reaction goes to completion despite the unfavorable enolate-formation step.

**Step 1 — Write the overall equation:**

\\[
2\\,\\text{CH}_3\\text{CO}_2\\text{Et} + \\text{NaOEt} \\rightarrow \\text{CH}_3\\text{COCH}_2\\text{CO}_2\\text{Et} + \\text{EtOH} + \\text{Na}^+
\\]

**Step 2 — Trace the mechanism:** ethoxide removes an α-H (the CH₃ adjacent to C=O) forming a small equilibrium amount of enolate; the enolate attacks a second ester's carbonyl; the tetrahedral intermediate expels EtO⁻; the resulting β-keto ester (ethyl acetoacetate, pKa ≈ 11) is deprotonated by ethoxide.

**Step 3 — Quantify the driving force:**

\\[
K_{\\text{eq}} = 10^{(pK_a(\\text{EtOH}) - pK_a(\\text{ethyl acetoacetate}))} = 10^{(16 - 11)} = 10^5
\\]

**Answer:** Ethyl acetoacetate. The final deprotonation is strongly favorable, so the product is trapped as its enolate and the overall condensation is driven essentially to completion — even though the first step (enolate formation from the ester) is uphill.

### Example 2: Methyl propanoate self-condensation

**Problem:** Methyl propanoate (CH₃CH₂CO₂Me) is treated with sodium methoxide. Predict the product.

**Step 1 — Identify the α-position:** the α-carbon is the CH₂ next to the carbonyl: CH₃CH⁻–CO₂Me after deprotonation.

**Step 2 — Attack a second ester:** the enolate carbon bonds to the second molecule's carbonyl carbon; the methoxide leaves.

**Step 3 — Product:** the β-keto ester is CH₃CH₂CO–CH(CH₃)–CO₂Me.

**Answer:** Methyl 2-methyl-3-oxopentanoate. Note the pattern: the enolate's α-carbon (now substituted with CH₃) becomes the carbon between the two carbonyls of the β-keto ester, and the original ester's carbonyl is the ketone end.

### Example 3: Why ethyl benzoate does not self-condense

**Problem:** Ethyl benzoate (C₆H₅CO₂Et) is treated with NaOEt. Predict what happens.

**Reasoning:** The α position of ethyl benzoate is a carbon of the aromatic ring — there is **no α-H** available. No enolate can form, so the self-condensation cannot even start; the ester is simply recovered unchanged.

**Answer:** No Claisen product. Ethyl benzoate can, however, act as the *electrophilic* partner in a mixed Claisen with an enolizable ester (topic 08), because it does not need to enolize to accept an enolate.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Claisen condensation | Aldol reaction | Claisen uses an ester electrophile (OR⁻ leaves → β-keto ester); aldol uses an aldehyde/ketone (no leaving group → β-hydroxy carbonyl) |
| Claisen with hydroxide | Claisen with alkoxide | Hydroxide saponifies the ester; only the matching alkoxide (NaOEt for ethyl esters) works |
| The ester that enolizes | The ester that is attacked | In a self-condensation both roles are the same molecule; the enolate always comes from the ester with an α-H |
| β-Keto ester product | α-Substituted ester | β-Keto ester has carbonyls on C1 and C3; α-substituted ester has the substituent on the carbon next to one carbonyl |
| Deprotonation of product (drives reaction) | Deprotonation of starting ester (initiates it) | Starting-ester enolate is a tiny equilibrium amount; the β-keto ester's deprotonation is the irreversible, product-pulling step |
| Acetoacetic ester synthesis | Malonic ester synthesis | Acetoacetic: β-keto ester → substituted ketone; malonic: diester → substituted acid. Both start from Claisen-type products |

## Quick Review

1. Write the product of the self-condensation of ethyl acetate with sodium ethoxide.
2. Why must the base in a Claisen condensation be an alkoxide that matches the ester's OR group?
3. Why does the Claisen condensation go to completion even though ester enolate formation is highly unfavorable?
4. Which of these esters can undergo a self-Claisen: ethyl acetate, ethyl benzoate, methyl propanoate?
5. Calculate K_eq for the deprotonation of ethyl acetoacetate (pKa 11) by ethoxide (EtOH pKa 16).
6. How does the Claisen product differ from the aldol product for the same starting carbonyl?

<details>
<summary>Show answers</summary>

1. Ethyl acetoacetate (CH₃COCH₂CO₂Et), plus one equivalent of ethanol.
2. A mismatched alkoxide would transesterify the ester (scrambling the OR groups), and hydroxide would hydrolyze (saponify) the ester to a carboxylate instead of condensing it.
3. The β-keto ester product is far more acidic (pKa ≈ 11) than ethanol (pKa 16), so the final deprotonation is strongly favorable (K_eq ≈ 10⁵) and pulls the equilibrium forward, compensating for the unfavorable enolate-formation step.
4. Ethyl acetate and methyl propanoate (both have α-H's). Ethyl benzoate has no α-H (its α position is an aromatic ring carbon) and cannot self-condense.
5. K_eq = 10^(pKa(EtOH) − pKa(β-keto ester)) = 10^(16 − 11) = 10⁵ — essentially complete deprotonation of the product.
6. Aldol gives a β-hydroxy carbonyl (from an aldehyde/ketone electrophile with no leaving group); Claisen gives a β-keto ester (from an ester electrophile that expels OR⁻).

</details>

## Related Topics

- Previous: [Intramolecular Aldol Reactions](06-intramolecular-aldol-reactions.md)
- Next: [Mixed Claisen Condensations](08-mixed-claisen-condensations.md)
- Related: [Carbonyl Condensations: The Aldol Reaction](01-carbonyl-condensations-the-aldol-reaction.md), [Acidity of Alpha Hydrogen Atoms: Enolate Ion Formation](../chapter-22-carbonyl-alpha-substitution-reactions/05-acidity-of-alpha-hydrogen-atoms-enolate-ion-formation.md), [Intramolecular Claisen Condensations: The Dieckmann Cyclization](09-intramolecular-claisen-condensations-the-dieckmann-cyclization.md)
- Chapter overview: [Chapter 23: Carbonyl Condensation Reactions](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition (McMurry-style chapter organization)
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on the OpenStax outline structure. pKa values (ester α-H ~25, β-keto ester ~11, ethanol 16) are standard textbook values; the equilibrium constant is derived from K_eq = 10^(ΔpKa), not measured data.
- Lab safety note: sodium alkoxides and strong bases are caustic and moisture-sensitive and require appropriate PPE and handling per institutional safety rules. This guide states general principles only, not experimental procedures.
- Last updated: 2026-08-16
