---
title: "Nucleophilic Addition of Amines: Imine and Enamine Formation"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "19: Aldehydes and Ketones: Nucleophilic Addition Reactions"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "nucleophilic-addition-of-amines-imine-and-enamine-formation"
  - "science"
status: "complete"
---

# Nucleophilic Addition of Amines: Imine and Enamine Formation

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 19: Aldehydes and Ketones: Nucleophilic Addition Reactions](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

Amines add to aldehydes and ketones by nucleophilic addition followed by loss of water, and the product depends on whether the amine is primary or secondary. A **primary amine** (RNH₂) gives an **imine** (also called a Schiff base), in which the carbonyl oxygen is replaced by an =NR group:

\[
\text{R}_2\text{C}=\text{O} + \text{R}'\text{NH}_2 \rightleftharpoons \text{R}_2\text{C}=\text{N}\text{R}' + \text{H}_2\text{O}
\]

A **secondary amine** (R'₂NH) gives an **enamine**, a molecule with a C=C double bond flanked by a nitrogen: the carbonyl oxygen is replaced by an –NR'₂ group and one of the adjacent C–H bonds is lost as part of the water:

\[
\text{R}_2\text{CH}{-}\text{C}(=\text{O}){-}\text{R} + \text{R}'_2\text{NH} \rightleftharpoons \text{R}_2\text{C}=\text{C}(\text{NR}'_2){-}\text{R} + \text{H}_2\text{O}
\]

The mechanism is addition followed by dehydration. The amine first attacks the carbonyl carbon (nucleophilic addition), giving a tetrahedral **carbinolamine** (hemiaminal) intermediate, R₂C(OH)(NHR'). Acid then catalyzes the loss of water: the OH is protonated and leaves as H₂O, and the nitrogen's lone pair forms the C=N double bond (imine) — or, for secondary amines, deprotonation at the α-carbon forms the C=C double bond (enamine). The reaction is reversible and requires acid catalysis, but too much acid is counterproductive because it protonates the amine itself, destroying its nucleophilicity. The optimum is usually mildly acidic conditions (pH 4–5). Water must often be removed to drive the equilibrium toward the imine or enamine.

Imines and enamines are everywhere in biology and synthesis. In the eye, retinal forms an imine (Schiff base) with a lysine side chain of opsin — the light-sensitive chromophore of vision. In the body, pyridoxal phosphate (PLP, the active form of vitamin B₆) forms imines with amino acids to catalyze transamination. In the lab, imines are intermediates in reductive amination (converting a carbonyl into an amine), and enamines enable alkylation at the α-carbon of ketones (the Stork enamine reaction).

## Why This Matters

Imine formation is the mechanism by which nature and chemists convert carbonyls into nitrogen-containing compounds, and nitrogen chemistry is central to drugs, dyes, and every biological amine. Reductive amination — imine formation followed by reduction of the C=N bond — is the standard way to make secondary and tertiary amines from ketones or aldehydes in pharmaceutical synthesis. Enamine alkylation is a classic carbon–carbon bond-forming strategy for putting a new alkyl group on the α-carbon of a ketone, a transformation that is otherwise difficult to do selectively. In biochemistry, PLP-dependent enzymes use imine (Schiff base) intermediates in the metabolism of amino acids, and the visual pigment rhodopsin operates through a protonated imine. Understanding when the product is an imine (primary amine) versus an enamine (secondary amine), and why mildly acidic conditions are needed, lets you predict products, choose conditions, and recognize these motifs in biological mechanisms — all high-yield exam territory.

## Core Concepts

### Step 1: Nucleophilic addition to the carbonyl — the carbinolamine

The amine's nitrogen lone pair attacks the carbonyl carbon, the C=O π electrons move to oxygen, and proton transfer gives a tetrahedral **carbinolamine** (hemiaminal), R₂C(OH)(NHR'), with both an OH and an NHR' on the same carbon. This step is the same nucleophilic addition seen throughout the chapter, and it is reversible. The carbinolamine is the common intermediate for both imine and enamine formation.

### Step 2: Acid-catalyzed dehydration — the fork in the road

For the addition to proceed to the imine/enamine, the OH must leave as water. Hydroxide is a terrible leaving group, so the reaction needs acid: protonation of the OH converts it into H₂O, which departs with the help of the nitrogen's lone pair. The difference between primary and secondary amines appears at this point:

- **Primary amine (RNH₂):** after water leaves, the nitrogen bears a hydrogen. Deprotonation gives the **imine**, R₂C=NR', with a C=N double bond (and a hydrogen still on nitrogen).
- **Secondary amine (R'₂NH):** after the addition, the intermediate loses water to form an iminium ion, R₂C=N⁺R'₂. Because the nitrogen now carries no hydrogen, deprotonation cannot occur on nitrogen; instead it occurs at the **α-carbon** (the carbon adjacent to the C=N), giving the **enamine**, R₂C=C(NR'₂)R, with a C=C double bond and the nitrogen attached by a single bond.

In other words: primary amines → imines (C=N); secondary amines → enamines (C=C–N). The iminium ion is the key intermediate in both pathways.

### pH control: the Goldilocks problem

Imine formation needs acid catalysis (to help water leave) but not too much acid (which protonates the amine, RNH₂ + H⁺ → RNH₃⁺, and removes the nucleophile). The two opposing requirements produce an optimum around pH 4–5 for most reactions: enough acid to protonate the OH and activate the carbonyl (via C=OH⁺) and catalyze dehydration, but not so much that all the amine is tied up as the ammonium salt. The Henderson–Hasselbalch relationship for the amine's conjugate acid explains the trade-off:

\[
\text{pH} = pK_a(\text{RNH}_3^+) + \log\frac{[\text{RNH}_2]}{[\text{RNH}_3^+]}
\]

Typical ammonium pKa values are 9–11, so at pH 4–5 almost all the amine is protonated — yet even a tiny equilibrium concentration of free amine is enough to react, because the addition steps are fast and the equilibrium is continuously pulled forward by dehydration. Too low a pH (below ~3) leaves essentially no free amine and the reaction stalls.

### Imines as intermediates: reductive amination

Because imines are in equilibrium with their carbonyl and amine precursors, they can be trapped by reduction. **Reductive amination** runs the carbonyl + primary or secondary amine mixture under reducing conditions (e.g., NaBH₃CN or NaBH(OAc)₃), so the imine (or iminium ion) formed in situ is immediately reduced to the amine:

\[
\text{R}_2\text{C}=\text{O} + \text{R}'\text{NH}_2 \xrightarrow{\text{NaBH}_3\text{CN}} \text{R}_2\text{CH}{-}\text{NH}\text{R}'
\]

This converts a carbonyl into an amine with a net addition of the amine's R' group — a one-pot way to make secondary and tertiary amines that avoids isolating the imine.

### Enamines in synthesis: the Stork reaction

Enamines are nucleophilic at the **α-carbon** (the carbon of the C=C), because the nitrogen's lone pair can push electron density through the double bond. This makes the α-carbon behave like an enolate, so an enamine can be alkylated with an alkyl halide (R''–X), and hydrolysis of the resulting iminium salt returns the ketone with a new alkyl group on its α-carbon. This sequence — enamine formation, alkylation, hydrolysis — is the **Stork enamine synthesis**, a classic method for α-alkylating ketones. The enamine effectively "carries" the ketone's α-carbon to the electrophile and brings it back alkylated.

### Biological imines

Retinal (the aldehyde form of vitamin A) forms a protonated imine with a lysine residue of opsin; light absorption by this Schiff base triggers the conformational change that starts vision. Pyridoxal phosphate forms imines with amino acids, positioning them for transamination, decarboxylation, and other reactions — all of which run through the same C=N chemistry. Recognizing "imine = Schiff base = C=N" lets you connect this lab reaction to an entire family of enzyme mechanisms.

## ELI-10: Explain Like I'm 10

> Imagine the carbonyl is a door that an amine visitor knocks on. First, the visitor attaches (addition) — now both an OH and the amine are on the carbon, like a guest holding the door. Then acid helps the OH leave as water, and the visitor locks in: a primary amine turns into an imine, where the carbon and nitrogen share two bonds (C=N); a secondary amine turns into an enamine, where the carbon–carbon bond becomes double and the nitrogen holds on by one bond. It's a bit like the guest choosing whether to hold hands with the door (imine) or with the wall beside it (enamine).

## High-Yield Points

- Primary amine + aldehyde/ketone → **imine** (Schiff base), R₂C=NR'; secondary amine + carbonyl → **enamine**, R₂C=C(NR'₂)R; both lose H₂O.
- Mechanism: nucleophilic addition → carbinolamine (hemiaminal) intermediate → acid-catalyzed dehydration via an iminium ion.
- Acid catalysis is required but must be mild: optimum pH ~4–5; too much acid protonates the amine and kills its nucleophilicity.
- The reaction is reversible; removing water (Dean–Stark trap, molecular sieves) drives it to completion.
- Imines are reduced in situ in **reductive amination** (NaBH₃CN/NaBH(OAc)₃) to make secondary/tertiary amines from carbonyls.
- Enamines are nucleophilic at the α-carbon — the basis of the **Stork enamine alkylation** of ketones.
- Biological examples: retinal–opsin Schiff base (vision) and PLP–amino acid imines (vitamin B₆ biochemistry).
- Aldehydes form imines/enamines faster than ketones (same reactivity trend as the rest of the chapter).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Imine (Schiff base) | Compound with a carbon–nitrogen double bond, R₂C=NR'. | Product of primary amine + carbonyl; key biological motif and reductive-amination intermediate. |
| Enamine | Compound with C=C–N, nitrogen single-bonded to a vinylic carbon. | Product of secondary amine + carbonyl; nucleophilic at the α-carbon for alkylation. |
| Carbinolamine (hemiaminal) | Tetrahedral intermediate with –OH and –NHR on the same carbon. | Formed by the addition step; dehydrated to the imine/enamine. |
| Iminium ion | Positively charged C=N⁺ species, protonated/alkylated imine. | The reactive intermediate in dehydration and in reductive amination. |
| Reductive amination | Carbonyl + amine + reducing agent → amine (net). | The standard route to secondary and tertiary amines. |
| Stork enamine synthesis | Enamine alkylation at the α-carbon followed by hydrolysis. | Classic method for α-alkylating ketones. |
| Transamination | Enzyme reaction moving an amino group between molecules. | PLP runs it through imine intermediates; ties lab chemistry to metabolism. |
| α-Carbon | The carbon directly attached to a carbonyl (or C=N) carbon. | The site of enamine nucleophilicity and ketone alkylation. |

## Worked Examples

### Example 1: Predicting the product — imine or enamine?

Predict the organic product of the reaction between (a) cyclohexanone and methylamine (CH₃NH₂), and (b) cyclohexanone and dimethylamine ((CH₃)₂NH), with acid catalysis and water removal.

(a) Methylamine is a primary amine (RNH₂), so the product is an imine: cyclohexanone gives N-methylcyclohexanimine, where the C=O is replaced by C=N–CH₃ with loss of water:

\[
\text{C}_6\text{H}_{10}\text{O} + \text{CH}_3\text{NH}_2 \rightarrow \text{C}_6\text{H}_{10}=\text{NCH}_3 + \text{H}_2\text{O}
\]

(b) Dimethylamine is a secondary amine (R₂NH), so the product is an enamine: the C=O is replaced by C=C–N(CH₃)₂, and a ring C–H adjacent to the carbonyl is lost along with the oxygen as water. Atom check: the carbonyl carbon and the α-carbon are retained; the two hydrogens lost (one on nitrogen, one on the α-carbon) plus the carbonyl oxygen account for the H₂O. Aldehydes and less hindered ketones react faster; the same steric trend applies to amine addition as to every addition in this chapter.

### Example 2: Planning a reductive amination with stoichiometry

How many grams of N-ethylcyclohexylamine can be obtained (theoretically) from 4.00 g of cyclohexanone (C₆H₁₀O, molar mass 98.15 g/mol) with excess ethylamine and NaBH₃CN?

The reaction converts cyclohexanone to N-ethylcyclohexylamine (C₈H₁₇N, molar mass: 8×12.01 + 17×1.008 + 14.01 = 127.23 g/mol) with a 1:1 molar relationship (the carbonyl becomes the C–N carbon; the amine supplies the ethyl group and the nitrogen).

Moles of cyclohexanone:

\[
n = \frac{4.00\ \text{g}}{98.15\ \text{g/mol}} = 0.04075\ \text{mol}
\]

Theoretical mass of product:

\[
m = 0.04075\ \text{mol} \times 127.23\ \text{g/mol} = 5.18\ \text{g}
\]

If 4.3 g was isolated, the percent yield is:

\[
\% \text{ yield} = \frac{4.3\ \text{g}}{5.18\ \text{g}} \times 100\% = 83\%
\]

Unit check: g ÷ (g/mol) = mol; mol × (g/mol) = g; the yield ratio is dimensionless. The retrosynthetic logic: any secondary amine R₂CH–NHR' whose C–N carbon came from a carbonyl can, in principle, be built by reductive amination of the corresponding ketone.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Imine (C=N) | Enamine (C=C–N) | Primary amines give imines; secondary amines give enamines. The double bond is C=N in one and C=C in the other. |
| Carbinolamine | Imine | The carbinolamine (C(OH)(NHR)) is the tetrahedral intermediate; the imine is the dehydrated product. |
| Acid as catalyst | Acid as reagent | Acid is consumed and regenerated (catalytic); too much acid stops the reaction by protonating the amine. |
| Reductive amination | Simple imine formation | Reductive amination reduces the imine in situ, ending at an amine; simple formation stops at the imine (C=N). |
| Enamine nucleophilicity | Amine nucleophilicity | The enamine's lone pair is on nitrogen, but it reacts at the α-carbon; the free amine reacts at nitrogen. |
| Imine stability | Imine formation rate | Imines hydrolyze easily in water (reversible); rates and equilibria are controlled by pH and water removal. |
| Aldehyde vs ketone reactivity with amines | Same as with hydride | Same trend: aldehydes react faster; exam questions often ask you to rank reactivity across reagent families. |

## Quick Review

1. What product results from adding propylamine (a primary amine) to propanal, with acid catalysis?
2. Why is strong acid (pH 1) bad for imine formation even though acid is a catalyst?
3. What is the role of water removal (Dean–Stark trap) in imine synthesis?
4. How does reductive amination differ from simply forming and isolating an imine?
5. In a Stork enamine alkylation, which carbon of the enamine attacks the alkyl halide, and what is the overall transformation?

<details>
<summary>Show answers</summary>

1. Propylamine is primary, so the product is an imine: propanal (CH₃CH₂CHO) gives N-propylpropan-1-imine, CH₃CH₂CH=N–CH₂CH₂CH₃, with loss of water.
2. At very low pH the amine is almost completely protonated (RNH₃⁺), which removes the nucleophile needed for the addition step; even though acid catalyzes dehydration, the reaction cannot start without free amine. Mild pH (~4–5) balances both needs.
3. Imine formation is reversible and produces water; removing water (azeotropic distillation with a Dean–Stark trap, or molecular sieves) pulls the equilibrium toward the imine by Le Châtelier's principle, giving higher yields.
4. Reductive amination traps the imine (or iminium ion) with a reducing agent (NaBH₃CN, NaBH(OAc)₃) as soon as it forms, so the product is the saturated amine; simple imine formation stops at the C=N stage. Reductive amination also works with ammonia or primary/secondary amines and avoids isolating moisture-sensitive imines.
5. The α-carbon of the enamine (the carbon of the C=C that is not attached to nitrogen) attacks the alkyl halide; hydrolysis of the alkylated iminium salt regenerates the ketone bearing a new alkyl group on its α-carbon — net α-alkylation of the ketone.

</details>

## Related Topics

- Previous: [Nucleophilic Addition of Hydride and Grignard Reagents: Alcohol Formation](07-nucleophilic-addition-of-hydride-and-grignard-reagents-alcohol-formation.md)
- Next: [Nucleophilic Addition of Hydrazine: The Wolff–Kishner Reaction](09-nucleophilic-addition-of-hydrazine-the-wolff-kishner-reaction.md)
- Related: [Nucleophilic Addition Reactions of Aldehydes and Ketones](04-nucleophilic-addition-reactions-of-aldehydes-and-ketones.md)
- Also: [Aldehydes and Ketones: Nucleophilic Addition Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
