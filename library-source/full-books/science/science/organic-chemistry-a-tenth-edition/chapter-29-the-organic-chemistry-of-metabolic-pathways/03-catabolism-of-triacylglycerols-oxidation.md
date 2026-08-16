---
title: "Catabolism of Triacylglycerols: β-Oxidation"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "29: The Organic Chemistry of Metabolic Pathways"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "catabolism-of-triacylglycerols-oxidation"
  - "science"
status: "complete"
---

# Catabolism of Triacylglycerols: β-Oxidation

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 29: The Organic Chemistry of Metabolic Pathways](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

The fatty acids released by lipolysis (Topic 2) are oxidized in the mitochondrial matrix by **β-oxidation**, a four-reaction spiral that chops two-carbon acetyl CoA units off the carboxyl end of the chain, one per cycle. The name comes from the site of oxidation: each cycle oxidizes the **β carbon** (C3, second carbon from the carbonyl end). Every substrate is a coenzyme A thioester, so the pathway is a study in thioester chemistry: a flavin-dependent dehydrogenation, hydration across a new double bond, an NAD⁺-dependent oxidation of an alcohol to a ketone, and a thiolytic cleavage that releases acetyl CoA. The acetyl CoA feeds the citric acid cycle (Topic 7); the FADH₂ and NADH deliver electrons to the electron-transport chain. A 16-carbon palmitate yields 8 acetyl CoA units and, in modern accounting, about 106 ATP — why fats are the body's most concentrated fuel.

## Why This Matters

Fatty-acid oxidation is the main energy source for resting skeletal muscle and the heart, which prefers fatty acids over glucose. It powers fasting: when glucose is scarce, tissues burn fat, and acetyl CoA exceeding the citric acid cycle's capacity becomes ketone bodies, which the brain can use during prolonged starvation. Inherited defects are serious — medium-chain acyl-CoA dehydrogenase (MCAD) deficiency, the most common fatty-acid oxidation disorder, causes fasting hypoglycemia and can be fatal. The pathway also explains why insulin-deficient type 1 diabetics make ketones (unrestrained lipolysis).

## Core Concepts

### Activation: fatty acids must be converted to CoA thioesters

A free fatty acid, e.g. palmitate \( \text{CH}_3(\text{CH}_2)_{14}\text{COOH} \), cannot be oxidized directly. In the cytosol, fatty acyl-CoA synthetase attaches coenzyme A, forming a thioester and spending two phosphate-transfer equivalents:

\[ \text{RCOOH} + \text{CoA–SH} + \text{ATP} \rightarrow \text{R–CO–S–CoA} + \text{AMP} + \text{PP}_i \]

The pyrophosphate (PPᵢ) is immediately hydrolyzed to two phosphates, so the reaction costs **2 ATP equivalents** although only one ATP appears in the equation.

### The β-oxidation spiral: four reactions per cycle

Each cycle removes two carbons in four enzyme-catalyzed reactions at the β carbon:

1. **Dehydrogenation:** acyl-CoA dehydrogenase removes two hydrogens from Cα–Cβ, forming a *trans* C2=C3 double bond; electrons go to FAD (FADH₂). Product: trans-Δ²-enoyl-CoA.
2. **Hydration:** enoyl-CoA hydratase adds water across the double bond so the OH lands on the β carbon. Product: L-3-hydroxyacyl-CoA.
3. **Dehydrogenation:** 3-hydroxyacyl-CoA dehydrogenase oxidizes the β-hydroxyl to a ketone; NAD⁺ → NADH. Product: 3-ketoacyl-CoA.
4. **Thiolysis:** β-ketoacyl-CoA thiolase attacks the carbonyl carbon with a second CoA–SH; the Cα–Cβ bond breaks, releasing acetyl-CoA and leaving an acyl-CoA two carbons shorter.

The shortened acyl-CoA re-enters the spiral; when the chain reaches four carbons (butyryl-CoA), one more cycle produces **two** acetyl-CoA molecules. Per cycle: 1 acetyl-CoA + 1 FADH₂ + 1 NADH, chain minus 2 carbons.

### Odd-chain fatty acids end in propionyl-CoA

An odd-chain fatty acid runs the same spiral until a three-carbon fragment, propionyl-CoA, remains. Propionyl-CoA is carboxylated (biotin, ATP), epimerized, and rearranged to succinyl-CoA by methylmalonyl-CoA mutase — a vitamin B₁₂ (adenosylcobalamin)-dependent reaction. Succinyl-CoA enters the citric acid cycle directly, so odd-chain fatty acids are **gluconeogenic**, unlike even-chain acetyl CoA.

### Unsaturated fatty acids need auxiliary enzymes

Natural fatty acids have *cis* double bonds, but the dehydrogenase makes a *trans* bond. A cis-Δ⁹ bond (e.g., oleate, 18:1) is repositioned by enoyl-CoA isomerase; polyunsaturated chains also need 2,4-dienoyl-CoA reductase. Each pre-existing double bond that bypasses the first dehydrogenase means one fewer FADH₂.

## ELI-10: Explain Like I'm 10

A fatty acid is like a long train of boxcars. β-oxidation is the station machine that uncouples the train two cars at a time from the front; each uncoupling makes one acetyl CoA package plus two energy tickets (FADH₂ and NADH). The packages go to the citric acid cycle power plant, and the tickets are cashed in for ATP batteries. A 16-car train gives you 8 packages and about 106 batteries.

## High-Yield Points

- β-oxidation runs in the **mitochondrial matrix**; it is not the reverse of fatty-acid synthesis.
- Activation costs **2 ATP equivalents** (ATP → AMP + PPᵢ); long-chain acyl-CoAs need the carnitine shuttle (CPT-1, translocase, CPT-2); malonyl-CoA inhibits CPT-1.
- Each cycle: 1 acetyl-CoA + 1 FADH₂ + 1 NADH, chain minus 2 carbons; even n-carbon acids: cycles = n/2 − 1, acetyl-CoA = n/2.
- Palmitate (16:0): 7 cycles → 8 acetyl-CoA, 7 FADH₂, 7 NADH → ≈ 106 ATP net (modern; 129 with older 3/2 convention).
- Odd chains: propionyl-CoA → succinyl-CoA (B₁₂-dependent), gluconeogenic; even-chain acetyl CoA is not.
- *cis* double bonds need isomerase/reductase; each bypassed dehydrogenation loses one FADH₂.
- Excess acetyl CoA → ketone bodies (acetoacetate, β-hydroxybutyrate) in the liver during fasting or insulin deficiency.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| β-Oxidation | Four-reaction spiral removing two-carbon acetyl CoA units from the β carbon of a fatty acyl-CoA | Main pathway for fatty-acid energy production |
| Fatty acyl-CoA | Coenzyme A thioester of a fatty acid, R–CO–S–CoA | The activated form that enters the mitochondrial pathway |
| Activation | Attachment of CoA to a fatty acid, costing 2 ATP equivalents | Fatty acids cannot be oxidized until thioesterified |
| Carnitine shuttle | CPT-1/translocase/CPT-2 system moving long-chain acyl groups into the matrix | Inner membrane is impermeable to long-chain acyl-CoAs |
| Acyl-CoA dehydrogenase | Flavin enzyme introducing the C2–C3 double bond | Produces FADH₂; sets up the hydration step |
| Enoyl-CoA hydratase | Adds water across the α,β double bond | Places the β-OH needed for the next oxidation |
| β-Ketoacyl-CoA thiolase | Cleaves the Cα–Cβ bond with CoA–SH | Releases acetyl CoA; regenerates the shortened acyl-CoA |
| Ketone bodies | Acetoacetate and β-hydroxybutyrate made from excess acetyl CoA in the liver | Water-soluble fasting fuel; overproduced in diabetic ketoacidosis |

## Examples

### Worked Example 1: Counting cycles and products

**Formula first:** for an even-chain fatty acid with \(n\) carbons, the number of β-oxidation cycles is \(n/2 - 1\), and the number of acetyl CoA units produced is \(n/2\). FADH₂ and NADH are each produced once per cycle, so both equal \(n/2 - 1\).

Substitution for palmitate, \(n = 16\): cycles \(= 16/2 - 1 = 7\); acetyl CoA \(= 16/2 = 8\); FADH₂ \(= \text{NADH} = 7\). Check the carbon balance: \(8 \times 2 = 16\) carbons — every carbon of palmitate is accounted for. For stearate, \(n = 18\): cycles \(= 18/2 - 1 = 8\); products: 9 acetyl CoA + 8 FADH₂ + 8 NADH.

### Worked Example 2: ATP yield from one palmitate

**Formula first:** each acetyl CoA in the citric acid cycle yields 3 NADH + 1 FADH₂ + 1 GTP; NADH ≈ 2.5 ATP, FADH₂ ≈ 1.5 ATP, GTP ≈ 1 (modern values). Add the 7 NADH and 7 FADH₂ from β-oxidation, subtract the 2 ATP activation cost:

\[ \text{ATP} = 8[(3 \times 2.5) + 1.5 + 1] + (7 \times 2.5) + (7 \times 1.5) - 2 \]

Substitution: \(8[7.5 + 1.5 + 1] = 8 \times 10 = 80\); \(7 \times 2.5 = 17.5\); \(7 \times 1.5 = 10.5\); \(80 + 17.5 + 10.5 - 2 = 106\ \text{ATP}\). With the older convention (3 ATP per NADH, 2 per FADH₂): \(8[9 + 2 + 1] = 96\); \(7 \times 3 = 21\); \(7 \times 2 = 14\); \(96 + 21 + 14 - 2 = 129\ \text{ATP}\). Textbooks differ — always state which convention you used.

### Worked Example 3: An odd-chain fatty acid

**Formula:** an odd-chain acid with \(n\) carbons gives \((n-3)/2\) cycles, \((n-3)/2\) acetyl CoA, and one propionyl-CoA. For a 15-carbon acid, \(n = 15\): cycles \(= (15-3)/2 = 6\); acetyl CoA \(= 6\); plus 1 propionyl-CoA. Carbon check: \(6 \times 2 + 3 = 15\) ✓. The propionyl-CoA → succinyl-CoA conversion (B₁₂-dependent) makes odd-chain fats gluconeogenic.

### Scenario: Fasting ketosis in the clinic

A patient with type 1 diabetes misses insulin doses. Without insulin, lipolysis is unrestrained: the liver floods with fatty acids, β-oxidation runs at full speed, and acetyl CoA overwhelms the citric acid cycle. The liver converts the excess to acetoacetate and β-hydroxybutyrate; their buildup acidifies the blood (ketoacidosis), and glucose and ketones spill into the urine. Insulin therapy reverses the cascade by shutting off lipolysis — how this pathway connects biochemistry to patient care.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| β-Oxidation | Lipolysis | β-Oxidation oxidizes acyl-CoAs in the matrix; lipolysis hydrolyzes triacylglycerol esters in the adipocyte |
| Activation costing 2 ATP | Activation costing 1 ATP | ATP → AMP + PPᵢ, with PPᵢ hydrolyzed — two equivalents |
| NADH value (2.5 ATP) | FADH₂ value (1.5 ATP) | NADH feeds Complex I; FADH₂ enters at Complex II |
| Acetyl CoA from fat | Glucose from fat | Even-chain acetyl CoA cannot become glucose in mammals; only the glycerol backbone can |
| Odd-chain acids | Even-chain acids | Odd chains end in propionyl-CoA → succinyl-CoA (B₁₂-dependent), which is gluconeogenic |
| Fatty-acid oxidation (matrix) | Fatty-acid synthesis (cytosol) | Different location, coenzymes (NADH/FADH₂ vs NADPH), and intermediates (acetyl CoA vs malonyl CoA) |

## Quick Review

1. Why is a free fatty acid not directly oxidized, and what does activation cost?
2. How many β-oxidation cycles and products does a C14 (myristate) fatty acid yield?
3. Which two dehydrogenases run each cycle, and what coenzymes do they reduce?
4. Why can't even-chain fatty acids support gluconeogenesis, but odd-chain ones can?
5. What happens to acetyl CoA when the citric acid cycle is overwhelmed, and why does it matter in diabetes?

<details>
<summary>Show answers</summary>

1. It must first be converted to a CoA thioester by fatty acyl-CoA synthetase; ATP → AMP + PPᵢ (PPᵢ hydrolyzed) costs 2 ATP equivalents.
2. n = 14: cycles = 14/2 − 1 = 6; products = 7 acetyl CoA + 6 FADH₂ + 6 NADH.
3. Acyl-CoA dehydrogenase (FAD → FADH₂) and 3-hydroxyacyl-CoA dehydrogenase (NAD⁺ → NADH).
4. Even-chain acetyl CoA cannot become glucose in mammals, but odd-chain propionyl-CoA enters the TCA cycle as succinyl-CoA, a gluconeogenic intermediate.
5. The liver converts excess acetyl CoA into ketone bodies; in insulin-deficient diabetes this causes ketoacidosis.

</details>

## Related Topics

- Previous: [Catabolism of Triacylglycerols: The Fate of Glycerol](02-catabolism-of-triacylglycerols-the-fate-of-glycerol.md)
- Next: [Biosynthesis of Fatty Acids](04-biosynthesis-of-fatty-acids.md)
- Related: [Conversion of Pyruvate to Acetyl CoA](06-conversion-of-pyruvate-to-acetyl-coa.md) · [The Citric Acid Cycle](07-the-citric-acid-cycle.md)
- Chapter: [The Organic Chemistry of Metabolic Pathways overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
