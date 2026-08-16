---
title: "Carbonyl Condensations with Enamines: The Stork Enamine Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "23: Carbonyl Condensation Reactions"
topic_number: "11"
source: "organic-chemistry.md"
tags:
  - "carbonyl-condensations-with-enamines-the-stork-enamine-reaction"
  - "science"
status: "complete"
---

# Carbonyl Condensations with Enamines: The Stork Enamine Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 23: Carbonyl Condensation Reactions](../README.md)  
> **Topic:** 11  
> **Source structure:** OpenStax public textbook outline

## Overview

Alkylating a ketone directly at its α-carbon is messy: the enolate is nucleophilic at both carbon and oxygen, and the mono-alkylated product is *more* acidic than the starting ketone, so it is re-deprotonated and polyalkylated. Gilbert Stork's solution (1950s–60s) converts the ketone into an **enamine** — the nitrogen analogue of an enol — a neutral species that is nucleophilic at carbon, alkylates exactly once, and then hydrolyzes back to the ketone. The **Stork enamine reaction** is therefore a clean **mono-α-alkylation of a ketone or aldehyde**: enamine formation, alkylation with an alkyl halide, then hydrolysis. It solved a real regioselectivity problem, and its iminium/enamine intermediates are the same species used by enzymes and modern organocatalysts.

## Why This Matters

- **Solves overalkylation:** direct enolate alkylation gives mono-, di-, and tri-alkylated mixtures; enamine alkylation stops at one alkyl group.
- **C–C bond formation at the α-carbon** with **regiocontrol:** the enamine forms at the *more substituted* α-carbon (thermodynamic), directing alkylation to a specific position — control direct enolate chemistry does not easily give.
- **Stork acylation variant:** enamines + acid chlorides give 1,3-dicarbonyls, key intermediates for further aldol/Claisen chemistry.
- **Exams:** product prediction, regiochemistry (thermodynamic vs kinetic), and mechanism are standard test items.

## Core Concepts

### Why direct α-alkylation fails

Base + alkyl halide on a ketone gives poor control: **polyalkylation** (the α-alkyl product is more acidic than the starting ketone, so it is alkylated again), **O-alkylation** (enolates are ambident; some attack gives enol ethers), and **self-aldol side reactions**. The Stork reaction avoids all of this by converting the ketone into a *neutral* nucleophile whose carbon is the only practical reaction site.

### Enamine formation

A **secondary amine** (classically pyrrolidine, `C1CCNC1`) condenses with a ketone under acid catalysis, with water removed to drive equilibrium: amine adds to the carbonyl (carbinolamine) → acid-catalyzed dehydration gives an **iminium ion** (C=N⁺) → loss of the α-proton gives the **enamine** (C=C–N). Example: cyclohexanone + pyrrolidine → 1-pyrrolidinocyclohexene (`C1CCC(=CC1)N2CCCC2`). The nitrogen lone pair donates into the C=C, making the **β-carbon of the enamine nucleophilic** — that carbon is the former α-carbon of the ketone. Enamine formation is reversible and thermodynamically controlled: the **more substituted enamine** predominates.

### Alkylation and hydrolysis

1. **Alkylation (SN2):** the enamine's nucleophilic carbon attacks the alkyl halide, displacing halide and forming a C–C bond; the product is an **iminium salt**. Carbon alkylation wins over nitrogen alkylation because C-alkylation is irreversible (stable iminium product) while N-alkylation is reversible.
2. **Hydrolysis:** aqueous acid adds water across the C=N (reverse of enamine formation), regenerating the ketone and releasing the amine.

Net: R₂C=O → R₂C(–R′)–C=O — one alkyl group at the α-carbon, no polyalkylation, because the product is a ketone (not an enolate) until the final hydrolysis.

### Regiochemistry, scope, and limits

With unsymmetrical ketones the **thermodynamic (more substituted) enamine** forms, so alkylation occurs at the **more substituted α-carbon** — the opposite regioselectivity from kinetic enolate alkylation with LDA (a favorite exam contrast). Best alkylating agents: **primary, allylic, and benzylic halides** (good SN2 substrates). Tertiary halides mostly eliminate; vinyl and aryl halides do not undergo SN2. Enamines also react with acid chlorides (**Stork acylation** → 1,3-dicarbonyls) and with enones (enamine Michael additions).

## ELI-10: Explain Like I'm 10

> Imagine a toy car (the ketone) that keeps getting a second sticker on top of the first one every time you try to put one sticker on it. The Stork trick is to put the car in a special holder (the enamine) that only accepts one sticker, then take it out of the holder. You end up with exactly one sticker on the car, right where you wanted it.

## High-Yield Points

- Stork enamine reaction = enamine formation → alkylation → hydrolysis = clean **mono-α-alkylation** of a ketone.
- Enamine formation: secondary amine (pyrrolidine) + ketone, acid catalyst, remove water; the more substituted enamine forms (thermodynamic).
- The enamine's nucleophilic carbon is the former α-carbon of the ketone; alkylation is SN2 with primary/allylic/benzylic halides.
- Hydrolyze the iminium salt with aqueous acid to regenerate the ketone.
- Regiochemistry: alkylation at the **more substituted** α-carbon — opposite to kinetic enolate alkylation with LDA.
- No polyalkylation: the neutral enamine is consumed in one alkylation; the product ketone is not re-enolized under the reaction conditions.
- Stork acylation: enamine + acid chloride → 1,3-dicarbonyl (e.g., 2-acylcyclohexanone); enamines also add to enones (1,5-dicarbonyls).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Enamine | A C=C–N compound, the nitrogen analogue of an enol; nucleophilic at its β-carbon | The key intermediate; alkylates at carbon, not nitrogen |
| Iminium ion | The C=N⁺ conjugate acid of an enamine | Forms during enamine formation and after alkylation; hydrolyzes back to the ketone |
| SN2 alkylation | One-step substitution; the enamine carbon displaces a halide | Primary/allylic/benzylic halides give clean alkylation |
| Thermodynamic enamine | The more substituted C=C enamine, favored at equilibrium | Sets regiochemistry — alkylation at the more substituted α-carbon |
| Stork acylation | Enamine + acid chloride → 1,3-dicarbonyl after hydrolysis | Builds β-dicarbonyls, versatile intermediates |

## Worked Examples

### Example 1: Cyclohexanone → 2-methylcyclohexanone (full cycle)

**Reaction:** cyclohexanone (`O=C1CCCCC1`) → enamine → CH₃I → hydrolysis → 2-methylcyclohexanone (`CC1CCCCC1=O`).

**Step 1 — Enamine formation.** Pyrrolidine's nitrogen adds to the carbonyl carbon (arrow: the lone pair forms the C–N bond; C=O π electrons move to oxygen), giving a carbinolamine; acid-catalyzed dehydration gives the iminium, and loss of the α-proton gives the enamine 1-pyrrolidinocyclohexene (`C1CCC(=CC1)N2CCCC2`).

**Step 2 — Alkylation.** The enamine's β-carbon attacks methyl iodide (SN2: its electrons form the new C–C bond as iodide leaves), giving the methylated iminium salt.

**Step 3 — Hydrolysis.** Aqueous acid adds water across the C=N (oxygen attacks the iminium carbon; deprotonation; protonation; loss of pyrrolidine), giving 2-methylcyclohexanone and regenerating pyrrolidine.

**Step 4 — Net accounting.** C₆H₁₀O + CH₃I → C₇H₁₂O: exactly ONE methyl installed — no dimethylation, which is the whole point of the method.

### Example 2: Regiochemistry — alkylation of the more substituted α-carbon

**Reaction:** 2-methylcyclohexanone (`CC1CCCCC1=O`) + pyrrolidine → enamine → CH₃CH₂I → hydrolysis.

**Step 1 — Which enamine?** The ketone has two enolizable α-carbons: C2 (bearing CH₃) and C6. Deprotonation at C2 gives the trisubstituted C1=C2 enamine; at C6, the disubstituted C1=C6. The **more substituted (trisubstituted)** enamine is thermodynamically favored, so C2 is the nucleophilic carbon.

**Step 2 — Alkylation and product.** Ethyl iodide reacts at C2; hydrolysis gives **2-ethyl-2-methylcyclohexanone** (`CCC1(CCCCC1=O)C`, C₉H₁₆O).

**Step 3 — Contrast.** With LDA at low temperature, the *kinetic* enolate (deprotonation at the less hindered C6) would form and ethyl iodide would give 6-ethyl-2-methylcyclohexanone. Same ketone, different alkylation site.

**Step 4 — DBE check.**

\[ \text{DBE} = \frac{2(9) + 2 - 16}{2} = 2 \]

One carbonyl + one ring = 2 ✓.

### Example 3: Stork acylation — a 1,3-dicarbonyl product

**Reaction:** cyclohexanone enamine + acetyl chloride → hydrolysis → 2-acetylcyclohexanone.

**Step 1 — Acylation.** The enamine's β-carbon attacks the carbonyl carbon of acetyl chloride (arrow: enamine carbon electrons form the C–C bond; chloride leaves), giving an iminium acyl species.

**Step 2 — Hydrolysis.** Aqueous acid converts the iminium back to the ketone.

**Step 3 — Product.** **2-Acetylcyclohexanone** (`CC(=O)C1CCCCC1=O`), a 1,3-dicarbonyl: ring carbonyl and acetyl carbonyl flank one carbon.

**Step 4 — Why useful.** 1,3-Dicarbonyls have a highly acidic central CH (pKa ≈ 9–11) and are superb enolate sources for further aldol and Claisen chemistry.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Enamine | Enol | Enamine = C=C–N (amine + ketone); enol = C=C–OH (tautomerism); enamines are neutral, isolable, and mono-alkylate cleanly |
| Alkylation at enamine carbon | Alkylation at enamine nitrogen | C-alkylation is irreversible (stable iminium salt); N-alkylation is reversible and unproductive |
| Stork (thermodynamic) regiochemistry | Kinetic enolate regiochemistry | Enamine forms at the more substituted α-carbon; LDA kinetic enolate forms at the less substituted side |
| Iminium ion | Enamine | Iminium (C=N⁺) is the electrophilic, protonated form; enamine (C=C–N) the nucleophilic, deprotonated form; acid/base interconverts them |
| Enamine + alkyl halide | Enamine + acid chloride | Alkyl halide → α-alkyl ketone; acid chloride → 1,3-dicarbonyl (Stork acylation) |

## Quick Review

1. Why does direct enolate alkylation give polyalkylated products, and how does the Stork reaction avoid this?
2. What are the three stages of the Stork enamine reaction, and what reagents drive each?
3. 2-Methylcyclohexanone + pyrrolidine → enamine → ethyl iodide → hydrolysis: which carbon is alkylated and what is the product?
4. Why is carbon alkylation of the enamine favored over nitrogen alkylation?
5. Enamines react with acetyl chloride to give what functional-group pattern after hydrolysis?
6. Which alkyl halides work best in enamine alkylation, and why do tertiary halides fail?

<details>
<summary>Show answers</summary>

1. The mono-alkylated product is more acidic than the starting ketone, so it is deprotonated again and alkylated repeatedly. The neutral enamine is alkylated once; the iminium product is not an enolate, so no second alkylation occurs until hydrolysis regenerates the ketone.
2. (1) Enamine formation: secondary amine + ketone, catalytic acid, remove water. (2) Alkylation: enamine + alkyl halide (SN2) → iminium salt. (3) Hydrolysis: aqueous acid → α-alkylated ketone.
3. The more substituted enamine (C1=C2) forms, so ethyl iodide alkylates C2: product = 2-ethyl-2-methylcyclohexanone (C₉H₁₆O). A kinetic enolate route would alkylate C6.
4. C-alkylation gives the stable iminium salt in an irreversible step; N-alkylation is reversible, so the productive pathway is alkylation at carbon.
5. A 1,3-dicarbonyl — e.g., cyclohexanone enamine + acetyl chloride → 2-acetylcyclohexanone (`CC(=O)C1CCCCC1=O`).
6. Primary, allylic, and benzylic halides (good SN2 substrates). Tertiary halides mostly give elimination (E2); vinyl and aryl halides do not undergo SN2.

</details>

## Related Topics

- Previous: [Conjugate Carbonyl Additions: The Michael Reaction](10-conjugate-carbonyl-additions-the-michael-reaction.md)
- Next: [The Robinson Annulation Reaction](12-the-robinson-annulation-reaction.md)
- Related: [The Aldol Reaction](01-carbonyl-condensations-the-aldol-reaction.md) — enolate nucleophilicity that enamines mimic
- Related: [Carbonyl Condensations versus Alpha Substitutions](02-carbonyl-condensations-versus-alpha-substitutions.md) — why direct α-substitution is hard to control
- Related: [The Claisen Condensation Reaction](07-the-claisen-condensation-reaction.md) — 1,3-dicarbonyl chemistry enabled by Stork acylation products
- Related: [Carbonyl Condensation Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Structures (SMILES) verified against PubChem PUG REST (August 2026); molecular formulas and DBE values computed from verified formulas.
- Last updated: 2026-08-16
