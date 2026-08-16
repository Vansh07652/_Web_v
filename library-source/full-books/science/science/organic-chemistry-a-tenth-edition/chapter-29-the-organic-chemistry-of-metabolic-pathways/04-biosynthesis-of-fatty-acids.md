---
title: "Biosynthesis of Fatty Acids"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "29: The Organic Chemistry of Metabolic Pathways"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "biosynthesis-of-fatty-acids"
  - "science"
status: "complete"
---

# Biosynthesis of Fatty Acids

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 29: The Organic Chemistry of Metabolic Pathways](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Fatty acid biosynthesis is the **reductive construction of long hydrocarbon chains from two-carbon units**, and it is the mirror image — literally and chemically — of β-oxidation (topic 3 of this chapter). Where β-oxidation degrades fatty acids in the mitochondrial matrix using FAD and NAD⁺ to make acetyl-CoA, biosynthesis builds them in the **cytosol**, uses **NADPH** as the reducing agent, and chains together **malonyl-CoA** units (three-carbon molecules that lose CO₂ during each condensation) onto an acetyl-CoA starter. The product of the classic pathway is **palmitate**, a 16-carbon saturated fatty acid, assembled in seven rounds of a four-step cycle: **condensation, reduction, dehydration, reduction**.

The chemical logic is beautiful and economical. Each round adds two carbons, but the actual condensing unit is a three-carbon malonyl group — the extra carbon is lost as CO₂. That decarboxylation provides the thermodynamic drive for what would otherwise be an uphill condensation, in the same way pyrophosphate hydrolysis drives nucleic acid and protein synthesis. Understanding the biosynthesis means understanding three things: the **activation step** (acetyl-CoA → malonyl-CoA, requiring biotin and ATP), the **cycle itself** (the four reactions and their stereochemistry), and the **bookkeeping** (how many ATP and NADPH molecules a 16-carbon fatty acid really costs).

## Why This Matters

Fatty acid synthesis is the body's way of storing excess dietary energy as fat, and it is the target of major pharmaceuticals: **statin drugs** lower cholesterol partly by inhibiting upstream acetyl-CoA production, and **weight-management and antimicrobial drugs** have been designed around the enzymes of this pathway (for example, the FAS inhibitor cerulenin-type compounds and the anti-tuberculosis drug isoniazid's effect on the mycobacterial FAS system). In agriculture and food science, the same pathway in oilseed plants produces cooking oils; in microbes it produces the fatty acids used in biodiesel. For organic chemistry students, the pathway is the best available example of **Claisen condensation chemistry** applied to biochemistry — the same carbon–carbon bond-forming logic used in Chapter 23's carbonyl condensation reactions — plus a crash course in how redox cofactors (NADPH vs NAD⁺/FAD) are compartmentalized to keep opposing pathways from running simultaneously.

## Core Concepts

### The building blocks: acetyl-CoA, malonyl-CoA, and the activated carrier ACP

- **Acetyl-CoA** (two carbons) is the starter unit; it comes from pyruvate oxidation (topic 6), β-oxidation, or amino acid catabolism.
- **Malonyl-CoA** (three carbons: acetyl + CO₂) is the elongating unit. It is made by **acetyl-CoA carboxylase**:

\[
\text{acetyl-CoA} + \text{CO}_2 + \text{ATP} \longrightarrow \text{malonyl-CoA} + \text{ADP} + \text{P}_\text{i}
\]

The enzyme uses the vitamin **biotin** as a CO₂ carrier and is the **committed, regulated step** of the pathway (activated by citrate, inhibited by palmitoyl-CoA). This is also where the ATP cost is paid: one ATP per malonyl-CoA, i.e., per two carbons added.

- **Acyl carrier protein (ACP)** is the "hand" that holds the growing chain. ACP carries a phosphopantetheine arm — the same prosthetic group found in coenzyme A — ending in a thiol (–SH), so the growing chain is always a **thioester** (\(\text{R–C(=O)–S–ACP}\)). Using thioesters makes the carbonyl carbon more electrophilic and the α-hydrogens more acidic, exactly the activation logic seen in acetyl-CoA itself.

### The four-step elongation cycle

The fatty acid synthase (FAS) complex repeats this cycle seven times to build palmitate (16 C). Written with acetyl-ACP as the starter and malonyl-ACP as the elongating unit:

**Step 1 — Condensation (Claisen-type).** The acetyl (or growing acyl) group on the synthase's cysteine thiol condenses with malonyl-ACP. The malonyl group decarboxylates, releasing CO₂, and a carbon–carbon bond forms between the acyl group and the remaining two carbons, giving a **β-ketoacyl-ACP** (a 1,3-dicarbonyl — the hallmark of a Claisen condensation):

\[
\text{acyl-ACP (C}_n\text{)} + \text{malonyl-ACP} \longrightarrow \text{β-ketoacyl-ACP (C}_{n+2}\text{)} + \text{CO}_2 + \text{ACP–SH}
\]

**Step 2 — Reduction.** The β-keto group is reduced to a β-hydroxy group by NADPH (β-ketoacyl-ACP reductase):

\[
\text{β-ketoacyl-ACP} + \text{NADPH} + \text{H}^+ \longrightarrow \text{β-hydroxyacyl-ACP} + \text{NADP}^+
\]

**Step 3 — Dehydration.** Water is removed, forming a **trans**-α,β-unsaturated (enoyl) thioester (β-hydroxyacyl-ACP dehydratase):

\[
\text{β-hydroxyacyl-ACP} \longrightarrow \text{trans-enoyl-ACP} + \text{H}_2\text{O}
\]

**Step 4 — Reduction.** The double bond is reduced by a second NADPH (enoyl-ACP reductase), giving the saturated acyl-ACP, two carbons longer:

\[
\text{trans-enoyl-ACP} + \text{NADPH} + \text{H}^+ \longrightarrow \text{acyl-ACP (C}_{n+2}\text{)} + \text{NADP}^+
\]

The elongated acyl group is then transferred back to the synthase's cysteine, and the cycle repeats. After seven cycles the 16-carbon chain is released as **palmitate** by a thioesterase. Note the stereochemistry: the β-hydroxy intermediate in synthesis is the **D** configuration, while β-oxidation's hydroxy intermediate is **L** — the pathways use mirror-image intermediates even though the reactions are "the same" run in reverse.

### Reductive power: why NADPH, not NAD⁺

Biosynthesis needs **reducing equivalents**, and cells keep synthesis and degradation separate by using different cofactors: β-oxidation produces NADH and FADH₂, while fatty acid synthesis consumes **NADPH**. NADPH is generated mainly by the **pentose phosphate pathway** (glucose-6-phosphate dehydrogenase) and by malic enzyme. This cofactor segregation means the two pathways can coexist in the same cell (cytosol vs mitochondria) without canceling each other out.

### Energy and atom bookkeeping for palmitate (C16)

To build one palmitate (16 C) from acetyl-CoA:

- **Units:** 1 acetyl-CoA (starter, 2 C) + 7 malonyl-CoA (each contributes 2 C net, after losing CO₂) → 16 C total.
- **ATP:** 7 ATP (one per malonyl-CoA made by acetyl-CoA carboxylase).
- **NADPH:** 14 NADPH (two per cycle × 7 cycles: one for the β-keto reduction, one for the enoyl reduction).
- **CO₂ released:** 7 (one per condensation).

So the overall stoichiometry is:

\[
8\,\text{acetyl-CoA} + 7\,\text{ATP} + 14\,\text{NADPH} + 14\,\text{H}^+ \longrightarrow \text{palmitate} + 7\,\text{CO}_2 + 7\,\text{ADP} + 7\,\text{P}_\text{i} + 14\,\text{NADP}^+ + 8\,\text{CoA–SH}
\]

(7 of the 8 acetyl-CoAs are first carboxylated to malonyl-CoA, which is why 7 CO₂ are released — the carboxyl group is a "taxi" that drives the condensation and leaves.)

### Regulation

- **Acetyl-CoA carboxylase** is the control point: **citrate** (an allosteric signal of abundant energy) activates it; **palmitoyl-CoA** (the product) inhibits it; the enzyme is also controlled by phosphorylation (inactive when phosphorylated by AMP-activated protein kinase, AMPK).
- **Malonyl-CoA** itself inhibits **carnitine palmitoyltransferase I**, the transporter that moves fatty acids into mitochondria for β-oxidation — so when synthesis is active, degradation is simultaneously switched off. This reciprocal control prevents a futile cycle.

## ELI-10: Explain Like I'm 10

> Building a fatty acid is like adding two Lego bricks at a time to a growing tower, but each delivery van carries three bricks and drops one off on the way (that's the CO₂ that gets lost). The tower grows two bricks per trip, and after seven trips it is 16 bricks tall. Each trip needs one battery (ATP) to load the van and two packs of glue (NADPH) to stick the bricks tight — so building one tower costs 7 batteries and 14 packs of glue. The opposite process, breaking the tower down, happens in a different room with different tools so they don't fight each other.

## High-Yield Points

- Fatty acid synthesis is **cytosolic**, **reductive** (NADPH), and builds chains **two carbons at a time from malonyl-CoA**; β-oxidation is mitochondrial, oxidative (NAD⁺/FAD), and releases acetyl-CoA.
- **Acetyl-CoA carboxylase** (biotin, ATP) makes malonyl-CoA; it is the committed, regulated step — activated by citrate, inhibited by palmitoyl-CoA.
- Cycle per 2 carbons: **condensation (Claisen + decarboxylation of malonyl) → NADPH reduction → dehydration → NADPH reduction.**
- The growing chain rides on **ACP** as a thioester; decarboxylation of malonyl drives the condensation thermodynamically.
- Palmitate (C16): 1 acetyl-CoA + 7 malonyl-CoA; cost **7 ATP + 14 NADPH**; **7 CO₂ released**.
- The β-hydroxy intermediate has **D** stereochemistry (β-oxidation's is L) — mirror-image pathways.
- **Malonyl-CoA inhibits CPT-1** (fatty acid import for β-oxidation): synthesis and degradation are reciprocally regulated.
- FAS inhibitors (cerulenin-type; isoniazid in mycobacteria) are drug targets; the pathway is the basis of fat storage and lipid-based fuels.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Malonyl-CoA | 3-Carbon (acetyl + CO₂) elongating unit | The actual building block; its decarboxylation drives condensation |
| Acetyl-CoA carboxylase | Biotin enzyme that makes malonyl-CoA (ATP-dependent) | The committed, regulated step and the ATP cost center |
| Acyl carrier protein (ACP) | Protein "hand" carrying the chain as a thioester | Keeps intermediates enzyme-bound; same activation logic as CoA |
| Thioester | \(\text{R–C(=O)–S–R}\) linkage | Makes carbonyls more electrophilic and α-H more acidic — enables Claisen chemistry |
| Claisen condensation | C–C bond formation between two thioesters/esters | The chemical heart of each elongation step |
| β-Ketoacyl-ACP | The 1,3-dicarbonyl product of condensation | The intermediate that is reduced, dehydrated, and reduced again |
| NADPH | The reductive cofactor of biosynthesis | Separates synthesis (cytosol) from degradation (NAD⁺/FAD, mitochondria) |
| Palmitate | C16 saturated fatty acid, the main product | The endpoint of the FAS cycle; precursor of longer/more unsaturated acids |
| Biotin | Vitamin cofactor that carries CO₂ | Required for malonyl-CoA formation (carboxylation) |
| CPT-1 | Carnitine palmitoyltransferase I, the fatty acid importer | Its inhibition by malonyl-CoA coordinates synthesis vs oxidation |

## Worked Examples

### Example 1: Atom accounting — where do the 16 carbons come from?

**Problem.** Show that building palmitate from acetyl-CoA adds exactly two carbons per cycle and identify the fate of the "extra" carbons.

**Step 1 — count inputs.** Starter: 1 acetyl-CoA = 2 C. Seven malonyl-CoAs, each 3 C = 21 C. Total input: 2 + 21 = 23 C.

**Step 2 — count losses.** Each of the 7 condensations releases 1 CO₂ (1 C): 7 C lost.

**Step 3 — balance.**

\[
23\ \text{C in} - 7\ \text{C out} = 16\ \text{C} = \text{palmitate}
\]

**Answer.** Each cycle nets +2 C: the malonyl unit contributes 3 C, but 1 C leaves as CO₂, so the chain grows by exactly two carbons per round.

### Example 2: Energy bookkeeping with dimensional analysis

**Problem.** Calculate the ATP and NADPH required to synthesize one palmitate, then scale to a 1.0 g sample.

**Step 1 — per palmitate.** 7 malonyl-CoA made (one per cycle) → 7 ATP; 2 NADPH per cycle × 7 cycles → 14 NADPH.

**Step 2 — molar mass.** Palmitic acid \(\text{C}_{16}\text{H}_{32}\text{O}_2\): 16 × 12.011 + 32 × 1.008 + 2 × 16.00 = 256.43 g/mol.

**Step 3 — moles in 1.0 g.**

\[
1.0\ \text{g} \times \frac{1\ \text{mol}}{256.43\ \text{g}} = 3.90 \times 10^{-3}\ \text{mol}
\]

**Step 4 — scale the cofactors.**

\[
3.90 \times 10^{-3}\ \text{mol} \times \frac{7\ \text{mol ATP}}{1\ \text{mol palmitate}} = 2.73 \times 10^{-2}\ \text{mol ATP}
\]

\[
3.90 \times 10^{-3}\ \text{mol} \times \frac{14\ \text{mol NADPH}}{1\ \text{mol palmitate}} = 5.46 \times 10^{-2}\ \text{mol NADPH}
\]

**Answer.** Per palmitate: 7 ATP and 14 NADPH. For 1.0 g of palmitate: \(2.7 \times 10^{-2}\) mol ATP and \(5.5 \times 10^{-2}\) mol NADPH.

### Example 3: Extending beyond palmitate — stearate and unsaturation

**Problem.** Predict the cofactor costs to build stearate (18:0) by the same FAS machinery, and state how double bonds are later introduced.

**Step 1 — cycles.** 18 C requires a starter + 8 elongation cycles: 1 acetyl-CoA + 8 malonyl-CoA.

**Step 2 — costs.** 8 ATP; 2 × 8 = 16 NADPH.

**Step 3 — desaturation.** After release from FAS, **desaturase** enzymes (e.g., stearoyl-CoA desaturase) introduce cis double bonds using O₂ plus NADH/NADPH — these are oxidative reactions, separate from the FAS cycle, and they stop at the first double bond in mammals (which cannot insert double bonds past C9, explaining the essentiality of linoleic and α-linolenic acids).

**Answer.** Stearate costs 8 ATP + 16 NADPH; later desaturation is a different, oxygen-dependent enzyme system.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Biosynthesis vs β-oxidation | Building vs degrading fatty acids | Synthesis: cytosol, NADPH, malonyl-CoA (adds 2 C, releases CO₂). Oxidation: mitochondria, NAD⁺/FAD, acetyl-CoA (removes 2 C) |
| Malonyl-CoA vs acetyl-CoA as the unit | Which molecule carries the new carbons | Elongation units are malonyl-CoA (3 C, losing CO₂); acetyl-CoA is the starter and the carboxylation substrate |
| NADPH vs NADH | Reductive vs oxidative cofactor | NADPH donates electrons for synthesis; NADH is made in catabolism (and FADH₂ in β-oxidation) |
| Claisen condensation vs aldol | C–C bond formation types | Claisen: thioester/ester enolate attacks a carbonyl, giving 1,3-dicarbonyls (FAS step 1). Aldol: enolate attacks aldehyde/ketone, giving β-hydroxy carbonyls |
| D vs L β-hydroxy intermediate | Synthesis vs degradation stereochemistry | FAS makes D-β-hydroxyacyl-ACP; β-oxidation uses L-β-hydroxyacyl-CoA — mirror-image chemistry |
| Acetyl-CoA carboxylase vs FAS | The regulated gate vs the assembly line | ACC is the committed step and main control point; FAS does the chain building once malonyl-CoA exists |
| One CO₂ "wasted" per cycle | Is it lost energy? | The decarboxylation is the thermodynamic driver of condensation — it is the price of a favorable C–C bond formation, not a waste |

## Quick Review

1. Why is malonyl-CoA used as the elongating unit instead of acetyl-CoA directly?
2. List the four steps of the FAS cycle in order, naming the cofactor consumed in each reduction.
3. What is the total ATP and NADPH cost of one palmitate, and how many CO₂ molecules are released?
4. How does the cell prevent fatty acid synthesis and β-oxidation from running at the same time?
5. In what configuration (D or L) is the β-hydroxy intermediate of synthesis, and what does this say about the relationship between synthesis and β-oxidation?
6. Why can humans not make linoleic acid even though we can make oleic acid?

<details>
<summary>Show answers</summary>

1. Because the condensation of acetyl-CoA with a growing chain is thermodynamically unfavorable, while the condensation with malonyl-CoA is driven by the loss of CO₂. The decarboxylation pays for the C–C bond formation (the same trick used in the citric acid cycle and elsewhere).
2. (1) Condensation (Claisen-type, with decarboxylation of malonyl) → β-ketoacyl-ACP; (2) reduction with NADPH → β-hydroxyacyl-ACP; (3) dehydration → trans-enoyl-ACP; (4) reduction with NADPH → saturated acyl-ACP. Two NADPH per cycle total.
3. 7 ATP + 14 NADPH, and 7 CO₂ released (one per cycle), for one palmitate (16 C).
4. Reciprocal regulation: acetyl-CoA carboxylase (and thus malonyl-CoA) is turned on by citrate and off by palmitoyl-CoA; malonyl-CoA inhibits CPT-1, which is required to import fatty acids into mitochondria for β-oxidation. Synthesis and oxidation also use different compartments (cytosol vs matrix) and different cofactors.
5. The D configuration. This is the mirror-image of β-oxidation's L-β-hydroxy intermediate — the two pathways are stereochemically distinct even where their reaction sequences are reversed images.
6. Mammalian desaturases cannot insert a double bond beyond C9 of the chain. Oleic acid (18:1 Δ9) can be made from stearate, but linoleic acid needs a Δ12 (and α-linolenic a Δ15) desaturation, which humans lack — hence they are dietary essentials.
</details>

## Related Topics

- Previous: [Catabolism of Triacylglycerols: β-Oxidation](03-catabolism-of-triacylglycerols-oxidation.md)
- Next: [Catabolism of Carbohydrates: Glycolysis](05-catabolism-of-carbohydrates-glycolysis.md)
- Related: [An Overview of Metabolism and Biochemical Energy](01-an-overview-of-metabolism-and-biochemical-energy.md)
- Related: [Catabolism of Triacylglycerols: The Fate of Glycerol](02-catabolism-of-triacylglycerols-the-fate-of-glycerol.md)
- Related: [Conversion of Pyruvate to Acetyl CoA](06-conversion-of-pyruvate-to-acetyl-coa.md)
- Related: [Biomolecules: Lipids](../chapter-27-biomolecules-lipids/README.md)
- Related: [Metabolic Pathways chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against current references (PubChem, 2026-08): palmitic acid molar mass 256.43 g/mol (C₁₆H₃₂O₂); stearic acid 284.48 g/mol (C₁₈H₃₆O₂); standard biosynthetic stoichiometry of 7 ATP and 14 NADPH per palmitate as cited in standard biochemistry references; D/L stereochemistry of β-hydroxyacyl intermediates per standard metabolism references. Drug-target statements (cerulenin-type FAS inhibitors; isoniazid and mycobacterial FAS) are general, educational descriptions — no dosing or clinical guidance implied.
- Last updated: 2026-08-16
