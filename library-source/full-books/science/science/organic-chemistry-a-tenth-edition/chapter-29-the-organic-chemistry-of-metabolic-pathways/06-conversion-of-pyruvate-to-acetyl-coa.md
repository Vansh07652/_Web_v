---
title: "Conversion of Pyruvate to Acetyl CoA"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "29: The Organic Chemistry of Metabolic Pathways"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "conversion-of-pyruvate-to-acetyl-coa"
  - "science"
status: "complete"
---

# Conversion of Pyruvate to Acetyl CoA

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 29: The Organic Chemistry of Metabolic Pathways](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Glycolysis (Topic 5) ends in the cytosol with **pyruvate**, the three-carbon anion \\(CH_3COCOO^-\\) (SMILES: `CC(=O)C(=O)[O-]`). For that carbon to be fully oxidized, pyruvate must enter the mitochondrion and be converted to **acetyl coenzyme A (acetyl CoA)**, the two-carbon thioester \\(CH_3C(=O)SCoA\\) that feeds the citric acid cycle (Topic 7). The conversion is an **oxidative decarboxylation**: pyruvate loses one carbon as \\(CO_2\\), the remaining two are oxidized, and the electrons pass to \\(NAD^+\\).

The reaction is catalyzed by the **pyruvate dehydrogenase complex (PDC)**, a giant assembly of three enzymes:

\\[
CH_3COCOO^- + CoA{-}SH + NAD^+ \rightarrow CH_3C(=O)SCoA + CO_2 + NADH
\\]

Because the reaction is essentially irreversible under cellular conditions, it is the **committed step** deciding whether carbohydrate carbon is burned aerobically or diverted elsewhere (fatty acid synthesis, gluconeogenesis). Three ideas recur through this chapter: **thioesters as activated acyl carriers**, **lipoamide as a swinging arm**, and **multi-enzyme substrate channeling**.

## Why This Matters

- **The gateway to aerobic energy:** Almost all carbohydrate carbon passes through acetyl CoA before entering the citric acid cycle. Without this step, glucose oxidation stops at pyruvate (fermentation).
- **Thiamine (vitamin B1) dependency:** PDC uses **thiamine pyrophosphate (TPP)**. Thiamine deficiency impairs pyruvate oxidation; the buildup of pyruvate and lactate underlies classic deficiency syndromes.
- **A hub for metabolism:** Acetyl CoA is also the product of fatty acid β-oxidation (Topic 3) and ketogenic amino acids (Topic 9), unifying the three fuel families.
- **Regulation as a model:** PDC shows how covalent modification (phosphorylation) and allosteric control cooperate — a pattern repeated throughout metabolism.
- **Exam logic:** Stoichiometry (1 pyruvate → 1 acetyl CoA + 1 CO₂ + 1 NADH), cofactor identity, and irreversibility are classic test questions.

## Core Concepts

### The three enzymes of the complex

PDC is built from many copies of three enzymes:

1. **E1, pyruvate dehydrogenase** — uses **TPP** to decarboxylate pyruvate. The thiazolium ylide of TPP attacks the pyruvate carbonyl; the intermediate loses \\(CO_2\\) to give **hydroxyethyl-TPP**, the two-carbon fragment still bound to the cofactor.
2. **E2, dihydrolipoyl transacetylase** — the complex's core. Its **lipoamide** cofactor accepts the hydroxyethyl group (as an acetyl group) and transfers it to CoA, forming acetyl CoA. The reduced lipoamide now carries the electrons.
3. **E3, dihydrolipoyl dehydrogenase** — regenerates oxidized lipoamide, passing electrons first to tightly bound **FAD**, then to **NAD⁺**, producing NADH.

Complete cofactor list: **TPP, lipoamide, CoA, FAD, and NAD⁺** — five cofactors for one overall reaction.

### The swinging-arm mechanism

Lipoamide is tethered to E2 by a flexible lysine side chain, swinging from E1's active site to E2's and then E3's. This **substrate channeling** keeps intermediates bound to the complex, so the unstable two-carbon fragment never accumulates in free solution.

### Why the thioester bond matters

Acetyl CoA is a **thioester**, not an ordinary ester. Thioesters are much less resonance-stabilized than oxygen esters, so they are **high-energy acyl carriers**: hydrolysis of acetyl CoA releases about −31 kJ/mol. This "activated" acetyl group drives the downstream condensation with oxaloacetate in the citric acid cycle.

### Regulation of the complex

- **Product inhibition:** High \\(NADH/NAD^+\\) and \\(acetyl{-}CoA/CoA\\) ratios inhibit PDC directly and stimulate the kinase that inactivates E1.
- **Covalent modification:** **PDC kinase** phosphorylates E1 and inactivates it; **PDC phosphatase** removes the phosphate and reactivates it. Pyruvate inhibits the kinase, so abundant substrate keeps the gate open.
- **Activators:** High \\(Ca^{2+}\\) in muscle (a contraction signal) activates the phosphatase, turning the complex on.

Net effect: PDC is on when the cell needs ATP or building blocks, off when energy stores are high.

## ELI-10: Explain Like I'm 10

Pyruvate is like a three-seat car full of carbon that must become a two-seat car (acetyl CoA) so the cell's energy factory can use it. A team of three workers does the job: the first pops off one carbon seat as CO₂, the second carries the two-seat car across a little bridge (lipoamide) and hands it to CoA, and the third recharges the bridge for reuse. The whole team needs vitamin B1 to make the first worker's special tool.

## High-Yield Points

- Overall: \\(pyruvate + CoA{-}SH + NAD^+ \rightarrow acetyl\ CoA + CO_2 + NADH + H^+\\) — one carbon leaves as \\(CO_2\\), two remain as the acetyl group.
- Three enzymes (E1–E3), five cofactors (TPP, lipoamide, CoA, FAD, NAD⁺).
- TPP does the decarboxylation; lipoamide shuttles the acetyl group; FAD/NAD⁺ carry the electrons out.
- The reaction is irreversible → pyruvate oxidation is a one-way gate into aerobic metabolism.
- Regulation: inactivated by phosphorylation (PDC kinase, stimulated by NADH and acetyl CoA); activated by dephosphorylation (PDC phosphatase, stimulated by Ca²⁺) and by high pyruvate.
- Acetyl CoA is a high-energy thioester; that energy drives the citric acid cycle's first step.
- Thiamine (B1) deficiency → impaired PDC → pyruvate and lactate accumulate.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Oxidative decarboxylation | Removal of a carboxyl group as CO₂ while oxidizing the rest of the molecule | Describes exactly what PDC does to pyruvate |
| Pyruvate dehydrogenase complex (PDC) | Multi-enzyme assembly of E1, E2, E3 converting pyruvate to acetyl CoA | The only route from pyruvate to the citric acid cycle |
| Acetyl CoA | The two-carbon thioester \\(CH_3C(=O)SCoA\\) | The universal two-carbon fuel and biosynthetic building block |
| Coenzyme A (CoA) | Nucleotide-derived carrier ending in a thiol (–SH) group | Carries acyl groups as high-energy thioesters |
| Thiamine pyrophosphate (TPP) | Vitamin B1-derived cofactor that decarboxylates α-keto acids | Explains the clinical consequences of thiamine deficiency |
| Lipoamide | Dithiol cofactor tethered to E2 by a flexible lysine arm | Shuttles the acetyl group between enzyme active sites |
| Substrate channeling | Passing intermediates directly between active sites without release | Speeds the reaction and protects unstable intermediates |
| PDC kinase / PDC phosphatase | Enzymes that phosphorylate / dephosphorylate E1 | The on–off switch regulating pyruvate oxidation |

## Worked Examples

### Example 1: Counting atoms in the overall reaction

Verify carbon and electron conservation for the oxidative decarboxylation.

**Write the formulas first:**

\\[
C_3H_3O_3^- \rightarrow C_2H_3OS{-}CoA + CO_2
\\]

**Check atoms:** pyruvate contributes 3 carbons; acetyl CoA carries 2 and \\(CO_2\\) carries 1, so carbon is conserved (3 = 2 + 1). The electrons removed appear as NADH: one pyruvate gives one NADH.

**Answer:** each mole of pyruvate produces exactly 1 mol acetyl CoA, 1 mol \\(CO_2\\), and 1 mol NADH — a 1:1:1:1 stoichiometry.

### Example 2: Moles and mass of CO₂ from a pyruvate sample

A muscle extract oxidizes 0.500 g of sodium pyruvate (\\(C_3H_3NaO_3\\), 110.04 g/mol). How many moles of \\(CO_2\\) (44.01 g/mol) are released?

**Write the conversion chain so units cancel:**

\\[
0.500\ \cancel{g\ pyruvate} \times \frac{1\ mol\ pyruvate}{110.04\ \cancel{g\ pyruvate}} \times \frac{1\ mol\ CO_2}{1\ mol\ pyruvate} = 4.54 \times 10^{-3}\ mol\ CO_2
\\]

**Answer:** \\(4.54 \times 10^{-3}\\) mol (0.200 g) of \\(CO_2\\) — about 40% of the pyruvate mass; the two-carbon acetyl group carries the rest into the cycle.

### Example 3: ATP yield from one pyruvate

With NADH ≈ 2.5 ATP and FADH₂ ≈ 1.5 ATP in oxidative phosphorylation, estimate the ATP from complete oxidation of one pyruvate.

**Sum the reduced cofactors per pyruvate:** PDC gives 1 NADH; the cycle turn gives 3 NADH, 1 FADH₂, 1 GTP.

\\[
ATP = 4(2.5) + 1(1.5) + 1(1.0) = 10.0 + 1.5 + 1.0 = 12.5
\\]

**Answer:** about 12.5 ATP per pyruvate — versus ~2 ATP per glucose anaerobically, the aerobic path captures roughly an order of magnitude more energy, which is why the PDC gate exists.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Pyruvate dehydrogenase complex (PDC) | Pyruvate carboxylase | PDC oxidizes pyruvate to acetyl CoA (catabolic); pyruvate carboxylase adds CO₂ to make oxaloacetate (anaplerotic, feeds gluconeogenesis, Topic 8) |
| Acetyl CoA | Acetate | Acetyl CoA is a high-energy thioester that donates its acetyl group; free acetate cannot drive the same reactions |
| Decarboxylation | Dehydrogenation | Decarboxylation removes CO₂; dehydrogenation removes electrons. PDC does both in one step |
| TPP's role | Lipoamide's role | TPP binds and decarboxylates pyruvate; lipoamide carries the resulting acetyl group to CoA |
| CoA–SH | Acetyl CoA | CoA–SH is the free carrier; acetyl CoA is the loaded (acylated) form |
| NADH made in PDC | NAD⁺ consumed in glycolysis | PDC adds NADH; glycolysis needs NAD⁺ regenerated to keep running |

## Quick Review

1. Write the overall PDC reaction, including all products.
2. Name the three enzymes and five cofactors of PDC, and state each cofactor's job.
3. Why is the thioester linkage of acetyl CoA "high energy" compared with an ordinary ester?
4. How does the cell shut PDC off when energy is plentiful, and how is it turned back on?
5. What happens to pyruvate metabolism in severe thiamine deficiency, and why?
6. How many moles of CO₂ are released when 2.00 mol of pyruvate pass through PDC?

<details>
<summary>Show answers</summary>

1. \\(CH_3COCOO^- + CoA{-}SH + NAD^+ \rightarrow CH_3C(=O)SCoA + CO_2 + NADH\\) (plus \\(H^+\\)).
2. E1 (TPP), E2 (lipoamide, CoA), E3 (FAD, NAD⁺). TPP decarboxylates; lipoamide shuttles the acetyl group; CoA receives it; FAD and NAD⁺ carry electrons.
3. Thioesters have little resonance stabilization of the carbonyl, so hydrolysis is much more exergonic than for oxygen esters; the released energy drives acyl transfer.
4. High NADH and acetyl CoA stimulate PDC kinase, which phosphorylates (inactivates) E1; falling energy charge, rising pyruvate, and Ca²⁺ activate PDC phosphatase, which removes the phosphate.
5. Pyruvate cannot enter the citric acid cycle, so pyruvate and lactate accumulate and tissues that depend on aerobic glucose oxidation get too little ATP.
6. 2.00 mol — 1 mol CO₂ per mole of pyruvate.

</details>

## Related Topics

- Previous: [Catabolism of Carbohydrates: Glycolysis](05-catabolism-of-carbohydrates-glycolysis.md)
- Next: [The Citric Acid Cycle](07-the-citric-acid-cycle.md)
- Related: [The Organic Chemistry of Metabolic Pathways chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Standard biochemical values (ATP/NADH ≈ 2.5, ATP/FADH₂ ≈ 1.5, acetyl CoA hydrolysis ≈ −31 kJ/mol, PDC irreversibility) are approximate and vary with conditions and reference; verify against current sources before using in assessments.
- Last updated: 2026-08-16
