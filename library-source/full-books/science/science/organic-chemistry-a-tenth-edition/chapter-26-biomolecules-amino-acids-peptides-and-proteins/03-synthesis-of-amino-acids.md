---
title: "Synthesis of Amino Acids"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "26: Biomolecules: Amino Acids, Peptides, and Proteins"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "synthesis-of-amino-acids"
  - "science"
status: "complete"
---

# Synthesis of Amino Acids

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 26: Biomolecules: Amino Acids, Peptides, and Proteins](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

This topic covers the three main routes to α-amino acids: the **Strecker synthesis** (aldehyde + ammonia + hydrogen cyanide → α-aminonitrile → hydrolysis), the **amidomalonate synthesis** (alkylation of diethyl acetamidomalonate, then hydrolysis and decarboxylation), and **biological synthesis** (reductive amination and transamination of α-keto acids). The two laboratory routes are general — they can build any α-amino acid by choosing the right aldehyde or alkyl halide — but both give racemic mixtures because the chiral center forms from achiral starting materials. Biological routes are stereospecific and produce only the L-amino acids that proteins use.

## Why This Matters

Nine of the 20 standard amino acids (His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val) cannot be made by the human body and must come from the diet. Industry produces amino acids at scale: monosodium glutamate (MSG) by fermentation, and L-DOPA — a frontline Parkinson's drug — by asymmetric hydrogenation (Knowles, 2001 Nobel Prize). These syntheses also teach general reactivity that reappears throughout organic chemistry: nucleophilic addition to imines (Strecker), enolate alkylation and malonic-ester logic (amidomalonate), and nitrile and decarboxylation chemistry.

## Core Concepts

### Retrosynthetic thinking: what do you need to build?

An α-amino acid is H₂N–CH(R)–COOH: an amino group, a carboxyl group, and an R group all on one carbon. Two classic laboratory strategies exist:

- **Strecker approach:** start from an aldehyde R–CHO (which supplies R and the future chiral carbon), then add a one-carbon nucleophile (cyanide, which becomes the carboxyl) and ammonia (which becomes the amino group).
- **Amidomalonate approach:** start from a two-carboxyl "handle" (a malonate diester) that already carries the amino group, and attach R by alkylation.

### The Strecker synthesis

An aldehyde reacts with ammonia to give an **imine**, R–CH=NH: the ammonia nitrogen's lone pair attacks the carbonyl carbon, and loss of water forms the C=N bond. Hydrogen cyanide then adds — the cyanide carbon's lone pair attacks the imine carbon, the π electrons move onto the nitrogen, and the nitrogen accepts a proton from solvent. This nucleophilic addition gives an **α-aminonitrile**, R–CH(NH₂)–CN. Acid hydrolysis converts the nitrile to a carboxyl group, delivering the α-amino acid:

\[
\text{R–CHO} \xrightarrow{\text{NH}_3,\ \text{HCN}} \text{R–CH(NH}_2\text{)–CN} \xrightarrow{\text{H}_3\text{O}^+,\ \Delta} \text{R–CH(NH}_2\text{)–COOH}
\]

Example: acetaldehyde (CH₃CHO) gives alanine; isobutyraldehyde, (CH₃)₂CHCHO, gives valine. Because cyanide can add to either face of the planar imine, the product is a 1:1 mixture of enantiomers — a **racemate**.

### The amidomalonate synthesis

Diethyl acetamidomalonate, CH₃CONH–CH(CO₂Et)₂, is a malonate diester with an acetylamino group on the central carbon. The central C–H, flanked by two ester carbonyls, is acidic, so sodium ethoxide removes it to give an enolate. The enolate carbon — not the amide nitrogen — then performs an SN2 attack on an alkyl halide R–X, attaching R to the central carbon. Hydrolysis with hot aqueous acid removes the acetyl group and both ethyl esters, giving an α-amino dicarboxylic acid; heating drives a malonic-acid-type decarboxylation (one CO₂ lost per molecule) to yield the α-amino acid:

\[
\text{CH}_3\text{CONH–CH(CO}_2\text{Et)}_2 \xrightarrow{1)\ \text{NaOEt},\ \text{R–X} \quad 2)\ \text{H}_3\text{O}^+,\ \Delta} \text{R–CH(NH}_2\text{)–COOH} + \text{CO}_2
\]

Example: benzyl bromide (C₆H₅CH₂Br) gives phenylalanine. A primary alkyl halide is preferred because it gives clean SN2 alkylation with little competing elimination. Like the Strecker route, this synthesis gives a racemate.

### Biological synthesis: reductive amination and transamination

Cells build most of the 20 amino acids from α-keto acids. In **reductive amination**, an α-keto acid reacts with ammonia to form an imine, which is then reduced (using NADPH as the hydride donor) to the amino acid — glutamate dehydrogenase converts α-ketoglutarate plus NH₃ into glutamate this way. In **transamination**, pyridoxal phosphate (PLP)-dependent aminotransferases transfer an amino group from a donor amino acid to an acceptor α-keto acid; for example, alanine + α-ketoglutarate ⇌ pyruvate + glutamate. Because enzymes are chiral catalysts, these routes make only the L-enantiomer.

### Resolution of racemates

A racemic amino acid from a laboratory route must be resolved. One classical method: convert the mixture to N-acetyl derivatives and treat with the enzyme acylase, which hydrolyzes only the N-acetyl-L-amino acid, separating it from the unchanged N-acetyl-D-isomer. Modern industrial routes instead use asymmetric hydrogenation of dehydroamino acids — the Monsanto L-DOPA process is the classic example.

## ELI-10: Explain Like I'm 10

> Building an amino acid in the lab is like assembling a figure from LEGO pieces. The Strecker way clicks a head (the amino group), an arm that later becomes the carboxyl, and a base (the R group) onto one connector. The amidomalonate way starts with a two-arm piece and glues the R group on with a special tool, then snaps one arm off. Both ways make equal numbers of left- and right-handed copies — but your body's assembly line only makes the left-handed ones.

## High-Yield Points

- Strecker: R–CHO + NH₃ + HCN → α-aminonitrile → H₃O⁺ hydrolysis → α-amino acid.
- Amidomalonate: enolate of diethyl acetamidomalonate + R–X (SN2, C-alkylation) → hydrolysis → decarboxylation (−CO₂).
- Alkylation occurs at the carbon between the esters, never at the amide nitrogen.
- Both laboratory routes are general but give racemates; biological routes give only L-amino acids.
- Reductive amination and PLP-dependent transamination are the biological routes from α-keto acids.
- Nine amino acids are essential in humans (His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val).
- Cyanide salts and HCN are acutely toxic: work only in a fume hood and never acidify cyanide-containing waste (acid releases HCN gas).
- Resolution options: enzymatic acylase on N-acetyl derivatives, or asymmetric hydrogenation (Knowles) for industrial single-enantiomer production.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Strecker synthesis | Aldehyde + NH₃ + HCN → α-aminonitrile → hydrolysis | General route to α-amino acids from aldehydes |
| α-aminonitrile | R–CH(NH₂)–CN intermediate | Its nitrile group hydrolyzes to the carboxyl group |
| amidomalonate synthesis | Alkylation of acetamidomalonate + hydrolysis + decarboxylation | General route to α-amino acids from alkyl halides |
| enolate | Carbanion adjacent to a carbonyl, formed by a base | The nucleophile that attacks the alkyl halide |
| decarboxylation | Loss of CO₂ from a carboxylic acid on heating | Converts the malonate-derived diacid into the amino acid |
| racemate | 1:1 mixture of enantiomers | The product of both lab routes; must be resolved |
| transamination | Enzyme-catalyzed amino-group transfer between α-keto acids | How cells build and recycle amino acids |
| resolution | Separation of a racemate into its enantiomers | Needed to obtain the L-amino acid from laboratory routes |

## Worked Examples

### Example 1: Strecker synthesis of valine

Design a synthesis of valine, 2-amino-3-methylbutanoic acid, (CH₃)₂CH–CH(NH₂)–COOH. Retrosynthetic analysis: the R group is isopropyl, so the aldehyde is isobutyraldehyde. Forward: it reacts with ammonia to form the imine; HCN adds to give the α-aminonitrile; aqueous acid converts –CN to –COOH:

\[
(\text{CH}_3)_2\text{CH–CHO} \xrightarrow{\text{NH}_3} (\text{CH}_3)_2\text{CH–CH=NH} \xrightarrow{\text{HCN}} (\text{CH}_3)_2\text{CH–CH(NH}_2\text{)–CN} \xrightarrow{\text{H}_3\text{O}^+,\ \Delta} \text{valine}
\]

The product is racemic; resolution (or an asymmetric variant) gives the L-enantiomer.

### Example 2: Amidomalonate synthesis of phenylalanine

Target: Ph–CH₂–CH(NH₂)–COOH. The R group is benzyl, so the alkyl halide is benzyl bromide.

1. Diethyl acetamidomalonate + NaOEt → enolate (base removes the central C–H).
2. Enolate + PhCH₂Br (SN2) → PhCH₂–C(NHCOCH₃)(CO₂Et)₂.
3. Hot aqueous acid hydrolyzes the acetyl amide and both ethyl esters → PhCH₂–C(NH₃⁺)(CO₂H)₂.
4. Heat drives decarboxylation, losing one CO₂ per molecule → PhCH₂–CH(NH₂)–COOH (phenylalanine).

### Example 3: Theoretical yield with dimensional analysis

How much phenylalanine could be made from 0.100 mol of diethyl acetamidomalonate if benzyl bromide is in excess? The stoichiometry is 1:1 — one mole of malonate gives at most one mole of amino acid. Write the conversion factor with units:

\[
0.100\ \text{mol malonate} \times \frac{1\ \text{mol Phe}}{1\ \text{mol malonate}} \times \frac{165.2\ \text{g Phe}}{1\ \text{mol Phe}} = 16.5\ \text{g phenylalanine (theoretical maximum)}
\]

Molar mass of phenylalanine (C₉H₁₁NO₂) is 165.2 g/mol. Actual yield will be lower; this calculation gives the ceiling before any losses.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| Strecker works only with aldehydes. | Aldehydes are the textbook case, but ketones also react, giving α,α-disubstituted amino acids. |
| Amidomalonate alkylation happens at the nitrogen. | The enolate alkylates at the central *carbon* (C-alkylation); the N-acetyl group stays intact until hydrolysis. |
| Hydrolysis and decarboxylation are one step. | They are distinct: hydrolysis removes the acetyl and ester groups; heating then loses CO₂. |
| A racemate has no chiral center. | It has chiral centers; it is a 1:1 mixture of R and S enantiomers. |
| All amino acids are made by the human body. | Nine are essential and must come from the diet. |
| Biological synthesis gives the same mixture as the lab routes. | Enzymes are stereospecific catalysts; cells make only L-amino acids. |

## Quick Review

1. Write the reagents and intermediate for the Strecker synthesis of alanine from acetaldehyde.
2. In the amidomalonate synthesis, why is a primary alkyl halide preferred?
3. What is removed during the hydrolysis step, and what is removed during decarboxylation?
4. Why do the Strecker and amidomalonate routes give racemic products?
5. Name the two biological routes from α-keto acids to amino acids, and the cofactor family used in transamination.
6. How many grams of glycine (MW 75.07 g/mol) could be produced at most from 0.0500 mol of diethyl acetamidomalonate?

<details>
<summary>Show answers</summary>

1. CH₃CHO + NH₃ → imine CH₃CH=NH; then HCN → CH₃CH(NH₂)CN; H₃O⁺ hydrolysis → alanine.
2. Primary halides give clean SN2 alkylation without competing elimination; secondary and tertiary halides favor E2 side reactions.
3. Hydrolysis removes the N-acetyl group and the two ethyl esters; decarboxylation removes one CO₂ per molecule.
4. The chiral center forms when an achiral reagent attacks a planar intermediate (imine or enolate), so both faces react equally — a 1:1 R/S mixture.
5. Reductive amination (imine + NADPH reduction) and PLP-dependent transamination.
6. 0.0500 mol × (1 mol Gly / 1 mol malonate) × (75.07 g Gly / 1 mol Gly) = 3.75 g glycine (theoretical maximum).
</details>

## Related Topics

- Previous: [Amino Acids and the Henderson–Hasselbalch Equation: Isoelectric Points](02-amino-acids-and-the-henderson-hasselbalch-equation-isoelectric-points.md)
- Next: [Peptides and Proteins](04-peptides-and-proteins.md)
- Related: [Structures of Amino Acids](01-structures-of-amino-acids.md)
- Related: [Peptide Synthesis](07-peptide-synthesis.md)
- Related: [Automated Peptide Synthesis: The Merrifield Solid-Phase Method](08-automated-peptide-synthesis-the-merrifield-solid-phase-method.md)
- Related: [Chapter 26 overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Reactions and mechanisms described are standard textbook transformations (Strecker, amidomalonate, reductive amination, transamination); molar masses from standard atomic weights.
- Last updated: 2026-08-16
