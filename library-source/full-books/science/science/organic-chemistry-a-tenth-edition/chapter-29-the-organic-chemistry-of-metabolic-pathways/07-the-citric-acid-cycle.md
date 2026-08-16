---
title: "The Citric Acid Cycle"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "29: The Organic Chemistry of Metabolic Pathways"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "the-citric-acid-cycle"
  - "science"
status: "complete"
---

# The Citric Acid Cycle

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 29: The Organic Chemistry of Metabolic Pathways](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

The **citric acid cycle** — also called the **tricarboxylic acid (TCA) cycle** or **Krebs cycle** — is the central wheel of aerobic metabolism. It takes the two-carbon acetyl group of **acetyl CoA** (Topic 6) and oxidizes it completely to two \\(CO_2\\), harvesting electrons as **NADH** and **FADH₂** and making one **GTP** (≈ 1 ATP) per turn. The cycle runs in the mitochondrial matrix and is truly cyclic: the four-carbon acceptor **oxaloacetate** is consumed in the first step and regenerated at the last, so one oxaloacetate can process acetyl group after acetyl group.

Net reaction per turn:

\\[
acetyl\ CoA + 3\ NAD^+ + FAD + GDP + P_i + 2\ H_2O \rightarrow 2\ CO_2 + CoA{-}SH + 3\ NADH + FADH_2 + GTP
\\]

The cycle is **amphibolic**: it serves both catabolism (complete oxidation of fuel) and anabolism (carbon skeletons for amino acids, heme, and glucose). Intermediates drawn off for biosynthesis are replenished by **anaplerotic reactions**, most importantly pyruvate → oxaloacetate by pyruvate carboxylase.

## Why This Matters

- **The hub of energy metabolism:** Carbohydrate, fat, and protein catabolism all converge on acetyl CoA; every acetyl group entering the cycle carries the cell's main aerobic energy harvest. The NADH and FADH₂ produced here drive oxidative phosphorylation.
- **The source of exhaled CO₂:** Nearly all the \\(CO_2\\) a person exhales is produced in this cycle (plus the PDC step before it) — about 2 of the 3 \\(CO_2\\) per pyruvate.
- **Biosynthetic crossroads:** α-Ketoglutarate and oxaloacetate feed amino acid synthesis; succinyl CoA feeds heme synthesis. Cycle failure (e.g., fluoroacetate poisoning via fluorocitrate) stops both energy and biosynthesis, which is why it is lethal.
- **Clinical relevance:** Genetic defects in cycle enzymes cause rare but severe metabolic disease; toxins such as arsenite and fluoroacetate act on these enzymes.
- **Exam staples:** Enzyme order, which steps produce \\(CO_2\\), NADH, FADH₂, and GTP, and per-turn stoichiometry are among the most tested items in biochemistry.

## Core Concepts

### The eight steps, grouped by what they accomplish

1. **Condensation (citrate synthase):** Acetyl CoA (2C) + oxaloacetate (4C) → **citrate** (6C). The thioester energy of acetyl CoA drives this otherwise unfavorable addition; CoA–SH is released.
2. **Isomerization (aconitase):** Citrate → **cis-aconitate** → **isocitrate**, moving the –OH to a carbon that can be oxidized. Aconitase has an iron–sulfur cluster; **fluorocitrate** (from fluoroacetate) inhibits it.
3. **First oxidative decarboxylation (isocitrate dehydrogenase):** Isocitrate (6C) → **α-ketoglutarate** (5C) + first \\(CO_2\\), NAD⁺ → NADH. A major **regulatory step** (activated by ADP and \\(Ca^{2+}\\), inhibited by NADH and ATP).
4. **Second oxidative decarboxylation (α-ketoglutarate dehydrogenase):** α-Ketoglutarate (5C) → **succinyl CoA** (4C) + second \\(CO_2\\), one NADH — a complex mechanistically twin of the PDC (TPP, lipoamide, FAD, NAD⁺, CoA).
5. **Substrate-level phosphorylation (succinyl CoA synthetase):** The succinyl CoA thioester drives **GTP** formation and releases **succinate**. The cycle's only direct high-energy phosphate.
6. **Oxidation (succinate dehydrogenase):** Succinate → **fumarate**, electrons to **FAD** (not NAD⁺) because this oxidation is not exergonic enough to reduce NAD⁺. This enzyme is membrane-bound — it is Complex II of the electron transport chain.
7. **Hydration (fumarase):** Water adds across the double bond → **malate**.
8. **Final oxidation (malate dehydrogenase):** Malate → **oxaloacetate** with the third NADH, regenerating the acceptor.

### Accounting per acetyl CoA

One turn produces **2 \\(CO_2\\), 3 NADH, 1 FADH₂, 1 GTP (≈ 1 ATP)**. With NADH ≈ 2.5 ATP and FADH₂ ≈ 1.5 ATP, one turn yields roughly \\(3(2.5) + 1(1.5) + 1 = 10\\) ATP. The cycle makes almost no ATP directly — it makes reduced cofactors, and the ATP comes later in oxidative phosphorylation.

### Why the cycle is amphibolic

Intermediates leave for biosynthesis: oxaloacetate and α-ketoglutarate are transaminated to aspartate and glutamate; succinyl CoA is used for heme; citrate is exported for fatty acid synthesis (Topic 4). Because draining intermediates would stall the cycle, **anaplerotic reactions** refill them. Pyruvate carboxylase (pyruvate → oxaloacetate) is the most important, and it is activated by acetyl CoA — when acetyl CoA is abundant, the cell makes more oxaloacetate to accept it.

### Regulation at a glance

- **Citrate synthase:** inhibited by ATP, NADH, and citrate (product).
- **Isocitrate dehydrogenase:** activated by ADP and \\(Ca^{2+}\\); inhibited by ATP and NADH.
- **α-Ketoglutarate dehydrogenase:** inhibited by succinyl CoA, NADH, and ATP.

Net effect: the cycle runs fast when the cell is low on ATP/NADH and slows when energy is plentiful — the same energy-charge logic as the PDC.

## ELI-10: Explain Like I'm 10

The citric acid cycle is like a roundabout for carbon: a two-seat car (acetyl CoA) gets on, rides around, and is broken into two single-seat parts that leave as exhaust (CO₂). As it goes around, the car spins little generators that charge batteries (NADH and FADH₂) the cell uses later, and it drops off one coin (GTP) each lap. The roundabout itself never gets used up — the entrance spot (oxaloacetate) is always rebuilt at the end so the next car can get on.

## High-Yield Points

- Location: mitochondrial matrix (except succinate dehydrogenase, in the inner mitochondrial membrane).
- Per acetyl CoA: 3 NADH, 1 FADH₂, 1 GTP, 2 \\(CO_2\\), plus regeneration of oxaloacetate.
- Two decarboxylations: isocitrate dehydrogenase (step 3) and α-ketoglutarate dehydrogenase (step 4); both make NADH and \\(CO_2\\).
- Only substrate-level phosphorylation: succinyl CoA synthetase (GTP).
- Succinate dehydrogenase uses FAD, not NAD⁺, and is Complex II.
- α-Ketoglutarate dehydrogenase resembles the PDC: same five cofactors.
- Amphibolic: α-ketoglutarate → glutamate; oxaloacetate → aspartate; succinyl CoA → heme; citrate → fatty acids.
- Anaplerosis: pyruvate carboxylase refills oxaloacetate; activated by acetyl CoA.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Citric acid cycle | The eight-step mitochondrial cycle oxidizing acetyl CoA to CO₂ while making NADH, FADH₂, and GTP | The main aerobic energy-harvesting wheel; hub of catabolism and anabolism |
| Oxaloacetate | Four-carbon intermediate that condenses with acetyl CoA | The acceptor regenerated every turn |
| Substrate-level phosphorylation | Making GTP/ATP directly from a reaction, without electron transport | The cycle's only direct high-energy phosphate (step 5) |
| Anaplerotic reaction | A reaction refilling cycle intermediates (e.g., pyruvate → oxaloacetate) | Keeps the cycle running when intermediates are drained |
| Amphibolic | Serving both catabolism (energy) and anabolism (building blocks) | Explains the cycle's central role in fuel and biosynthesis |
| FAD | Cofactor accepting two electrons when oxidation isn't strong enough to reduce NAD⁺ | Explains succinate → fumarate using FAD, not NAD⁺ |
| α-Ketoglutarate | Five-carbon intermediate; product of the first decarboxylation | Precursor of glutamate; branch point to amino acid metabolism |
| Succinyl CoA | Four-carbon thioester intermediate | High-energy acyl carrier; heme precursor; source of the cycle's GTP |

## Worked Examples

### Example 1: Stoichiometry of a full turn

Verify atom and electron balance for one turn.

**Write the net equation first:**

\\[
C_2H_3OS{-}CoA + 3\ NAD^+ + FAD + GDP + P_i + 2\ H_2O \rightarrow 2\ CO_2 + CoA{-}SH + 3\ NADH + FADH_2 + GTP
\\]

**Check carbon:** 2 carbons enter in acetyl CoA; 2 leave as \\(CO_2\\) — cycle intermediates are conserved. **Check electrons:** the 8 electrons removed appear as 3 NADH (6 e⁻) plus 1 FADH₂ (2 e⁻).

**Answer:** the balance works: 2 C in, 2 C out; 8 e⁻ removed as 3 NADH + 1 FADH₂.

### Example 2: Moles of CO₂ from a glucose's acetyl groups

One glucose yields two acetyl CoA. How many moles of \\(CO_2\\) come from the cycle when 1.80 g of glucose (\\(C_6H_{12}O_6\\), 180.16 g/mol) is fully oxidized?

**Convert mass → moles glucose → acetyl CoA → CO₂ (units cancel):**

\\[
1.80\ \cancel{g\ glucose} \times \frac{1\ mol\ glucose}{180.16\ \cancel{g\ glucose}} \times \frac{2\ mol\ acetyl\ CoA}{1\ mol\ glucose} \times \frac{2\ mol\ CO_2}{1\ mol\ acetyl\ CoA} = 0.0400\ mol\ CO_2
\\]

**Answer:** 0.0400 mol \\(CO_2\\) from the cycle alone (0.0600 mol total counting the two PDC decarboxylations). Always separate "cycle CO₂" from "PDC CO₂" in these problems.

### Example 3: ATP from one turn vs. one glucose

Estimate ATP from the cycle per acetyl CoA, then per glucose, with NADH ≈ 2.5 and FADH₂ ≈ 1.5 ATP.

**Formula first, then substitute:**

\\[
ATP_{per\ turn} = 3(2.5) + 1(1.5) + 1(1.0) = 10.0
\\]

Two turns per glucose (plus 2 NADH and 2 ATP from glycolysis and 2 NADH from PDC):

\\[
ATP_{glucose} = 2(10.0) + 4(2.5) + 2(1.0) = 20.0 + 10.0 + 2.0 = 32
\\]

**Answer:** about 32 ATP per glucose with modern P/O ratios (older texts say 36–38). The cycle contributes 20 of those 32 — the largest share.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Citric acid cycle | Glycolysis | Glycolysis runs in the cytosol and needs no oxygen; the cycle is mitochondrial, aerobic, and makes no ATP directly (only GTP + reduced cofactors) |
| NADH-producing steps | FADH₂-producing step | Three steps make NADH; only succinate dehydrogenase (step 6) makes FADH₂ |
| Substrate-level phosphorylation | Oxidative phosphorylation | The cycle's GTP is made directly from succinyl CoA; most ATP comes later from NADH/FADH₂ in electron transport |
| Citrate synthase step | Isocitrate dehydrogenase step | Step 1 condenses and uses no NAD⁺; step 3 is the first oxidative decarboxylation and a major regulation point |
| α-Ketoglutarate dehydrogenase | Pyruvate dehydrogenase | Similar mechanism and cofactors, but acts on a 5-carbon substrate inside the cycle and is not regulated by phosphorylation |
| Anaplerosis | Gluconeogenesis | Anaplerosis refills cycle intermediates (pyruvate → oxaloacetate); gluconeogenesis (Topic 8) builds glucose from those intermediates in the opposite direction |

## Quick Review

1. List the eight intermediates in order, starting from citrate.
2. Which two steps release CO₂? Which steps produce NADH? Which step produces FADH₂ and GTP?
3. Why does succinate dehydrogenase use FAD instead of NAD⁺?
4. What is an anaplerotic reaction, and why is pyruvate carboxylase the most important one?
5. Name the three regulatory enzymes and their main activators/inhibitors.
6. If a cell oxidizes 10 mol of acetyl CoA through the cycle, how many moles of NADH, FADH₂, GTP, and CO₂ are produced?

<details>
<summary>Show answers</summary>

1. Citrate → isocitrate → α-ketoglutarate → succinyl CoA → succinate → fumarate → malate → oxaloacetate (citrate synthase, aconitase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, succinyl CoA synthetase, succinate dehydrogenase, fumarase, malate dehydrogenase).
2. CO₂: steps 3 and 4. NADH: steps 3, 4, 8. FADH₂: step 6 (succinate dehydrogenase). GTP: step 5 (succinyl CoA synthetase).
3. The oxidation of succinate releases too little energy to reduce NAD⁺; FAD's lower reduction potential lets the reaction proceed, and FADH₂ feeds electrons directly into the chain at Complex II.
4. An anaplerotic reaction refills cycle intermediates drained for biosynthesis; pyruvate carboxylase makes oxaloacetate from pyruvate and is activated by acetyl CoA, linking fuel abundance to acceptor supply.
5. Citrate synthase (inhibited by ATP, NADH, citrate), isocitrate dehydrogenase (activated by ADP, Ca²⁺; inhibited by ATP, NADH), α-ketoglutarate dehydrogenase (inhibited by succinyl CoA, NADH, ATP).
6. 30 mol NADH, 10 mol FADH₂, 10 mol GTP, 20 mol CO₂ — multiply the per-turn stoichiometry (3, 1, 1, 2) by 10.

</details>

## Related Topics

- Previous: [Conversion of Pyruvate to Acetyl CoA](06-conversion-of-pyruvate-to-acetyl-coa.md)
- Next: [Carbohydrate Biosynthesis: Gluconeogenesis](08-carbohydrate-biosynthesis-gluconeogenesis.md)
- Related: [The Organic Chemistry of Metabolic Pathways chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Standard biochemical values (ATP/NADH ≈ 2.5, ATP/FADH₂ ≈ 1.5, ~32 ATP/glucose) are approximate and textbook-dependent (older values 36–38); verify against current sources before using in assessments.
- Last updated: 2026-08-16
