---
title: "Intramolecular Claisen Condensations: The Dieckmann Cyclization"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "23: Carbonyl Condensation Reactions"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "intramolecular-claisen-condensations-the-dieckmann-cyclization"
  - "science"
status: "complete"
---

# Intramolecular Claisen Condensations: The Dieckmann Cyclization

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 23: Carbonyl Condensation Reactions](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

The **Dieckmann cyclization** is the intramolecular version of the Claisen condensation (topic 07): a **diester** whose two ester groups are connected by a carbon chain forms an enolate at one ester and attacks the carbonyl of the *other* ester in the same molecule, expelling an alkoxide and closing a ring. The product is a **cyclic β-keto ester** (a 2-carbalkoxycycloalkanone). Like the intramolecular aldol (topic 06), the reaction works best when the tether permits a **five- or six-membered ring**, and it is driven to completion by deprotonation of the acidic β-keto ester product (pKa ≈ 11). The classic example is diethyl adipate, EtO₂C–(CH₂)₄–CO₂Et, which cyclizes under sodium ethoxide to **ethyl 2-oxocyclopentane-1-carboxylate** — a five-membered ring with an ester group at C1. Hydrolysis and decarboxylation of the product then deliver the parent cyclic ketone, making the Dieckmann a cornerstone of ring synthesis.

## Why This Matters

- **It is the best route to substituted cyclopentanones and cyclohexanones.** Alkylate a Dieckmann product at the α-carbon, then hydrolyze and decarboxylate, and you have a substituted cyclic ketone with controlled substitution.
- **It closes rings that other reactions cannot.** Esters are less reactive toward enolate addition than aldehydes and ketones, but intramolecularity (effective molarity) overcomes that — the two ester groups are held close, so even the modest nucleophilicity of an ester enolate suffices.
- **It completes the Claisen family.** Self-Claisen (07) → mixed Claisen (08) → intramolecular Claisen (09) is the natural progression, and the Dieckmann is the ester analog of the intramolecular aldol (06). Exams routinely ask you to compare these two ring-closing condensations.
- **Biological relevance.** Many biosynthetic ring closures — including steps in polyketide and terpenoid pathways — proceed by intramolecular Claisen-type reactions of thioesters (topic 13).

## Core Concepts

### The mechanism in words

1. **Enolate formation.** Alkoxide base removes an α-H from the carbon adjacent to one ester carbonyl of the diester, giving a small equilibrium amount of ester enolate (ester α-H pKa ≈ 25).
2. **Intramolecular attack.** The enolate carbon attacks the carbonyl carbon of the *other* ester group in the same molecule, forming a tetrahedral intermediate.
3. **Leaving-group expulsion.** The tetrahedral intermediate collapses, expelling alkoxide (EtO⁻) and forming the cyclic β-keto ester.
4. **Deprotonation of the product.** The ring's α-H between the ketone and ester carbonyls is very acidic (pKa ≈ 11); the alkoxide removes it, and this essentially irreversible step pulls the cyclization to completion:

\\[
K_{\\text{eq}} = 10^{(pK_a(\\text{EtOH}) - pK_a(\\text{cyclic }\\beta\\text{-keto ester}))} = 10^{(16 - 11)} = 10^5
\\]

### Ring-size rules: five and six again

The same geometric logic as the intramolecular aldol governs the Dieckmann: **six-membered rings** are the most favorable (chair geometry, minimal strain); **five-membered rings** are excellent and the workhorse case; **seven-membered and larger** are possible but slower, and competing intermolecular condensation becomes significant; **three- and four-membered rings** are too strained to be practical. Diethyl adipate (four carbons in the chain) closes a five-membered ring; diethyl pimelate (five carbons) closes a six-membered ring; diethyl glutarate (three carbons) would need a strained four-membered ring and fails as a preparative cyclization.

### Reading the ring size and product from the diester

For a diester EtO₂C–(CH₂)ₙ–CO₂Et, the enolate forms at the α-carbon next to one ester; the ring that closes contains that enolate carbon, the chain carbons, and the carbonyl carbon of the other ester. Count the atoms in the closed loop:

- n = 3 (glutarate): ring = 4 atoms → **unfavorable**.
- n = 4 (adipate): ring = 5 atoms → **favorable**, product is the 2-carbethoxycyclopentanone.
- n = 5 (pimelate): ring = 6 atoms → **favorable**, product is the 2-carbethoxycyclohexanone.

The product always carries the ester group at C1 of the ring (a 2-carbalkoxycycloalkanone), because one ester becomes the ring ketone and the other remains an ester substituent.

### Dieckmann vs intramolecular aldol: what to compare

Both reactions close rings with the same five/six-membered logic, but they differ in electrophile and product. The Dieckmann's ester electrophile expels an alkoxide, so the product is a 1,3-dicarbonyl (cyclic β-keto ester), not an alcohol; the intramolecular aldol's ketone/aldehyde electrophile has no leaving group, so its product is a cyclic β-hydroxy ketone that dehydrates to a cycloalkenone. And because the Dieckmann product is a β-keto ester, it is trapped as its enolate, driving the reaction.

### From cyclic β-keto ester to cyclic ketone

The value of the Dieckmann product is realized downstream: hydrolyze the ester (aqueous acid or base), then heat to decarboxylate the β-keto acid (Chapter 20). The result is the parent or substituted cycloalkanone:

\\[
\\text{cyclic }\\beta\\text{-keto ester} \\xrightarrow{\\text{1. H}_3\\text{O}^+ \\text{ or OH}^-} \\xrightarrow{\\text{2. heat, }-\\text{CO}_2} \\text{cycloalkanone}
\\]

This two-step sequence is the standard way to convert a diester into a ring ketone with a specific substitution pattern.

## ELI-10: Explain Like I'm 10

A Dieckmann cyclization is a molecule that has two "cookie jars" (ester groups) tied together by a string. One jar grabs a loose crumb (an α-hydrogen) and swings around to grab a cookie from the other jar — and since both jars are on the same string, it doesn't have to search the whole room. When it takes the cookie, the jar hands back a crumb (the alkoxide leaves), and the two jars are now linked into a ring. Just like the aldol game, the string has to be the right length: five or six links make a nice loop; three or four links are too twisted.

## High-Yield Points

- Dieckmann: **diester → cyclic β-keto ester** via intramolecular Claisen; alkoxide (EtO⁻) is the leaving group.
- Enolate forms at one ester's α-carbon and attacks the other ester's carbonyl in the same molecule.
- Favorable ring sizes: **five and six**; three- and four-membered rings are too strained.
- Diethyl adipate → ethyl 2-oxocyclopentane-1-carboxylate (five-membered); diethyl pimelate → ethyl 2-oxocyclohexane-1-carboxylate (six-membered).
- The product is trapped as its enolate (pKa ≈ 11 vs EtOH 16; K_eq ≈ 10⁵), which drives cyclization to completion.
- Base must be the alkoxide matching the diester's OR (NaOEt for ethyl diesters).
- Hydrolysis + decarboxylation converts the cyclic β-keto ester into a cycloalkanone.
- Same ring-size logic as the intramolecular aldol (06), but the electrophile is an ester (leaving group) rather than a ketone/aldehyde.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Dieckmann cyclization | Intramolecular Claisen condensation of a diester | The standard route to cyclic β-keto esters and, after decarboxylation, cyclic ketones |
| Cyclic β-keto ester | Ring with ketone and ester carbonyls flanking a CH (2-carbalkoxycycloalkanone) | The immediate product; its acidic α-H drives the reaction |
| Carbalkoxy group | The –CO₂R ester substituent on the ring (e.g., –CO₂Et) | Ends up at C1 of the cyclic product; removed by hydrolysis/decarboxylation |
| Tether | The carbon chain joining the two ester groups | Its length fixes the ring size |
| Alkoxide leaving group | The OR⁻ expelled when the tetrahedral intermediate collapses | What makes Claisen-type products 1,3-dicarbonyls rather than alcohols |
| Decarboxylation | Loss of CO₂ from a β-keto acid on heating | Converts the β-keto ester (after hydrolysis) into the cyclic ketone |

## Worked Examples

### Example 1: Diethyl adipate → ethyl 2-oxocyclopentane-1-carboxylate

**Problem:** Diethyl adipate (EtO₂C–CH₂CH₂CH₂CH₂–CO₂Et) is treated with NaOEt. Predict the product and ring size.

**Step 1 — Count the ring atoms.** The enolate forms at the α-carbon (the CH₂ next to one ester). It attacks the carbonyl carbon of the other ester. Ring atoms: the enolate carbon, the four chain carbons (CH₂CH₂CH₂CH₂), and the attacked ester's carbonyl carbon = **five atoms** — a five-membered ring.

**Step 2 — Write the product.** One ester carbonyl becomes the ring ketone; the other ester remains as a –CO₂Et substituent at C1:

\\[
\\text{EtO}_2\\text{C–(CH}_2\\text{)}_4\\text{–CO}_2\\text{Et} \\xrightarrow{\\text{NaOEt}} \\text{cyclopentanone-2-carboxylate ethyl ester}
\\]

**Answer:** Ethyl 2-oxocyclopentane-1-carboxylate (ethyl cyclopentanone-2-carboxylate), a five-membered ring β-keto ester, isolated after acid workup as the neutral β-keto ester.

### Example 2: Diethyl pimelate → the six-membered ring

**Problem:** Diethyl pimelate (EtO₂C–CH₂CH₂CH₂CH₂CH₂–CO₂Et) is treated with NaOEt. What ring size forms?

**Step 1 — Count the ring atoms.** Enolate at one α-CH₂ attacks the other ester's carbonyl: enolate carbon + five chain carbons + attacked carbonyl carbon = **six atoms** — a six-membered ring.

**Step 2 — Product.**

\\[
\\text{EtO}_2\\text{C–(CH}_2\\text{)}_5\\text{–CO}_2\\text{Et} \\xrightarrow{\\text{NaOEt}} \\text{cyclohexanone-2-carboxylate ethyl ester}
\\]

**Answer:** Ethyl 2-oxocyclohexane-1-carboxylate. The one-extra-carbon tether shifts the ring from five to six members, exactly as the atom count predicts — the same pattern as 2,5-hexanedione vs 2,6-heptanedione in the intramolecular aldol (topic 06).

### Example 3: Why diethyl glutarate does not cyclize cleanly

**Problem:** Diethyl glutarate (EtO₂C–CH₂CH₂CH₂–CO₂Et) is treated with NaOEt. Predict the outcome.

**Step 1 — Count the ring atoms.** Enolate at one α-CH₂ attacks the other ester's carbonyl: enolate carbon + three chain carbons + attacked carbonyl carbon = **four atoms** — a four-membered ring.

**Step 2 — Assess the strain.** A four-membered ring is highly strained, so the intramolecular closure is very slow; intermolecular condensation between two glutarate molecules (giving open-chain oligomers) competes effectively.

**Answer:** No clean cyclic product — the reaction is impractical for ring formation. This is the standard contrast case: glutarate (4-ring), adipate (5-ring, works), pimelate (6-ring, works).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Dieckmann (diester) | Intramolecular aldol (diketone/dialdehyde) | Both close rings, but Dieckmann's electrophile is an ester that expels OR⁻ → cyclic β-keto ester; the aldol's electrophile has no leaving group → β-hydroxy ketone/enone |
| Ring size from chain length | Ring size from ester count | Count the atoms in the closed loop (α-carbon + chain + attacked carbonyl carbon), not the number of ester groups |
| Ethyl 2-oxocyclopentane-1-carboxylate | Ethyl cyclopentane carboxylate | The Dieckmann product is a *β-keto* ester — it has a ring ketone in addition to the ester; naming traps are common |
| Product enolate (drives reaction) | Starting diester enolate (initiates) | The starting enolate is a tiny equilibrium amount; deprotonation of the product β-keto ester (pKa ≈ 11) is the irreversible step that pulls cyclization forward |
| Alkoxide base matching OR | Any strong base | Mismatched alkoxide transesterifies; hydroxide saponifies; only the matching alkoxide gives clean Claisen chemistry |
| Hydrolysis/decarboxylation of the product | The cyclization itself | Cyclization makes the β-keto ester; separate hydrolysis + heating steps remove CO₂ to give the cyclic ketone |

## Quick Review

1. What is the product of the Dieckmann cyclization of diethyl adipate, and what ring size forms?
2. Why does the Dieckmann reaction favor five- and six-membered rings?
3. Which diester would you choose to make a six-membered cyclic β-keto ester: glutarate, adipate, or pimelate?
4. Why does diethyl glutarate fail to give a clean cyclization?
5. How does the Dieckmann cyclization differ from the intramolecular aldol reaction?
6. What two downstream steps convert a Dieckmann product into a cyclic ketone?

<details>
<summary>Show answers</summary>

1. Ethyl 2-oxocyclopentane-1-carboxylate — a five-membered ring (enolate carbon + four chain carbons + attacked carbonyl carbon = 5 atoms).
2. The enolate carbon and the attacked ester carbonyl must reach each other without excessive strain; five- and six-membered rings have near-ideal geometry, while three- and four-membered rings are too strained and larger rings form slowly.
3. Diethyl pimelate (five-carbon tether → six-membered ring). Adipate gives five-membered; glutarate would need a strained four-membered ring.
4. The required four-membered ring is highly strained, so intramolecular closure is too slow and competing intermolecular condensation dominates.
5. Dieckmann uses an ester electrophile that expels an alkoxide, giving a cyclic β-keto ester; the intramolecular aldol uses a ketone/aldehyde electrophile with no leaving group, giving a cyclic β-hydroxy ketone that dehydrates to a cycloalkenone.
6. Hydrolysis of the ester to the β-keto acid, then heating to decarboxylate (loss of CO₂) — giving the parent cyclic ketone.

</details>

## Related Topics

- Previous: [Mixed Claisen Condensations](08-mixed-claisen-condensations.md)
- Next: [Conjugate Carbonyl Additions: The Michael Reaction](10-conjugate-carbonyl-additions-the-michael-reaction.md)
- Related: [The Claisen Condensation Reaction](07-the-claisen-condensation-reaction.md), [Intramolecular Aldol Reactions](06-intramolecular-aldol-reactions.md), [Some Biological Carbonyl Condensation Reactions](13-some-biological-carbonyl-condensation-reactions.md)
- Chapter overview: [Chapter 23: Carbonyl Condensation Reactions](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition (McMurry-style chapter organization)
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on the OpenStax outline structure. pKa values (β-keto ester ~11, ethanol 16) are standard textbook values; the equilibrium constant is derived from K_eq = 10^(ΔpKa), not measured data. Ring-size preferences are standard generalizations of the Dieckmann reaction.
- Lab safety note: sodium alkoxides are caustic and moisture-sensitive and require appropriate PPE and handling per institutional safety rules. This guide states general principles only, not experimental procedures.
- Last updated: 2026-08-16
