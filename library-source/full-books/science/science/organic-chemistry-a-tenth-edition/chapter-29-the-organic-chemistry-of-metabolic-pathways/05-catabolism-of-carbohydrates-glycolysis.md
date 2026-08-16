---
title: "Catabolism of Carbohydrates: Glycolysis"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "29: The Organic Chemistry of Metabolic Pathways"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "catabolism-of-carbohydrates-glycolysis"
  - "science"
status: "complete"
---

# Catabolism of Carbohydrates: Glycolysis

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 29: The Organic Chemistry of Metabolic Pathways](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

**Glycolysis** is the ten-enzyme pathway that splits the six-carbon sugar glucose into two three-carbon molecules of pyruvate. It is the oldest and most universal energy-harvesting pathway in biology: nearly every organism runs a version of it, and it needs no oxygen. The name comes from the Greek *glykys* ("sweet") and *lysis* ("splitting").

The pathway has three jobs: convert glucose into an oxidizable form, harvest some of its stored energy as **ATP** and **NADH**, and supply three-carbon building blocks for the citric acid cycle, fermentation, and biosynthesis. The net reaction is:

\[
\text{Glucose} + 2\,\text{NAD}^+ + 2\,\text{ADP} + 2\,P_i \rightarrow 2\,\text{Pyruvate} + 2\,\text{NADH} + 2\,\text{H}^+ + 2\,\text{ATP} + 2\,\text{H}_2\text{O}
\]

Read it carefully: two ATP are *produced* net, but the pathway actually spends two ATP early and makes four later. That two-part structure — an **energy-investment phase** followed by an **energy-payoff phase** — is the most useful organizing idea for the whole pathway.

## Why This Matters

- **The gateway to glucose metabolism.** Glycolysis is the only route by which glucose enters energy metabolism, and red blood cells (which lack mitochondria) depend on it completely.
- **Clinical relevance.** Enzyme defects cause inherited hemolytic anemias (e.g., pyruvate kinase deficiency); cancer cells rely heavily on aerobic glycolysis (the Warburg effect); lactate accumulation explains muscle fatigue after intense exercise.
- **Connects to the rest of the chapter.** Glycolysis feeds pyruvate to the pyruvate dehydrogenase complex (Topic 6) and the citric acid cycle (Topic 7), and gluconeogenesis (Topic 8) reverses it.


## Core Concepts

### The investment phase (steps 1–5): glucose → fructose-1,6-bisphosphate

The pathway begins by trapping glucose inside the cell and building a molecule that can be split. Step 1: **hexokinase** transfers a phosphate from ATP to glucose, giving **glucose-6-phosphate** — the negative charge traps the sugar in the cell. Step 2: **phosphoglucose isomerase** rearranges the ring to **fructose-6-phosphate**. Step 3: **phosphofructokinase-1 (PFK-1)** adds a second phosphate, giving **fructose-1,6-bisphosphate** (F-1,6-BP). This is the **committed step** — the molecule now has nowhere to go but down the glycolytic path — and PFK-1 is the pathway's main regulatory enzyme.

Step 4: **aldolase** cleaves F-1,6-BP into two three-carbon isomers, **dihydroxyacetone phosphate (DHAP)** and **glyceraldehyde-3-phosphate (G3P)**. Step 5: **triose phosphate isomerase** interconverts them. Because only G3P continues and the isomerase keeps the two in equilibrium, both fragments are metabolized — and from here on, every step happens twice per glucose.

### The payoff phase (steps 6–10): energy harvest

Step 6: **glyceraldehyde-3-phosphate dehydrogenase** oxidizes G3P and adds a phosphate, forming **1,3-bisphosphoglycerate (1,3-BPG)** while reducing NAD⁺ to NADH — the pathway's only oxidation step and its first "high-energy" intermediate. Step 7: **phosphoglycerate kinase** transfers 1,3-BPG's phosphate to ADP, making ATP — the first **substrate-level phosphorylation**. Step 8: **phosphoglycerate mutase** moves the phosphate to carbon 2. Step 9: **enolase** removes water to form **phosphoenolpyruvate (PEP)**, the second high-energy intermediate. Step 10: **pyruvate kinase** transfers PEP's phosphate to ADP, making a second ATP and leaving **pyruvate**.

### The ATP balance: 2 spent, 4 made, 2 net

Two ATP are invested in steps 1 and 3; four are made in steps 7 and 10 (two of each, because the payoff phase runs twice). Net: 2 ATP per glucose, plus 2 NADH. Anaerobically, NADH is recycled by lactate dehydrogenase (pyruvate → lactate); aerobically, its electrons go to the electron transport chain for extra ATP.

### Regulation: PFK-1 is the master switch

PFK-1 is activated by **AMP** and **fructose-2,6-bisphosphate** (a signaling molecule made from F-6-P) and inhibited by **ATP** and **citrate**. High ATP means the cell is energetically comfortable, so the pathway slows; high AMP means energy is scarce, so it speeds up. Hexokinase is inhibited by its product glucose-6-phosphate, and pyruvate kinase by ATP and acetyl CoA. Glycolysis runs fast when energy is needed and slows when it is plentiful — no central command required.

## ELI-10: Explain Like I'm 10

Imagine glucose is a large bill that is too big to spend. Glycolysis spends two small coins to break it into two medium bills (investment), then each medium bill becomes change that gives the cell two coins of energy twice (payoff). You end with two medium bills (pyruvate) plus two coins of profit.

## High-Yield Points

- Glycolysis: glucose (6C) → 2 pyruvate (3C each), 10 enzyme steps, all in the **cytosol**, no O₂ required.
- **Investment:** 2 ATP (hexokinase, PFK-1). **Payoff:** 4 ATP (2 × phosphoglycerate kinase, 2 × pyruvate kinase). **Net: 2 ATP + 2 NADH per glucose.**
- **PFK-1** catalyzes the committed step (F-6-P → F-1,6-BP) and is the main regulatory enzyme: activated by AMP and F-2,6-BP; inhibited by ATP and citrate.
- The only oxidation step is step 6 (G3P dehydrogenase), which makes 1,3-BPG and NADH.
- **Substrate-level phosphorylation** (direct ADP + high-energy phosphate → ATP) happens at steps 7 and 10 — no oxygen or electron transport needed.
- Anaerobic fate of pyruvate: **lactate** (animals, bacteria) or ethanol + CO₂ (yeast); aerobic fate: acetyl CoA (Topic 6).


## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Glycolysis | Ten-step cytosolic pathway splitting glucose into two pyruvate | Universal energy-harvesting pathway; gateway to glucose metabolism |
| Substrate-level phosphorylation | ATP made directly by transferring phosphate from a high-energy intermediate to ADP | Provides ATP without oxygen (steps 7 and 10) |
| Committed step | The irreversible reaction that commits a substrate to the pathway (PFK-1 step) | The main point of regulation; once past it, glucose must go through glycolysis |
| NADH | Reduced form of NAD⁺ carrying two electrons and a proton | Carries step 6's oxidation energy to the electron transport chain (aerobic) or recycles via lactate (anaerobic) |
| Fructose-2,6-bisphosphate | Regulatory signal made from F-6-P by a separate enzyme | Strongest activator of PFK-1; links glycolysis to hormonal control |
| Pyruvate | Three-carbon end product of glycolysis | Branch point feeding acetyl CoA, lactate, or amino acid synthesis |

## Worked Examples

### Example 1: ATP accounting with a substitution check

**Problem.** A muscle cell consumes 3.0 mmol of glucose via glycolysis under anaerobic conditions. How many mmol of ATP and NADH are produced net?

**Step 1 — State the ratio from the balanced pathway.** Per 1.0 mmol glucose, the net yield is 2.0 mmol ATP and 2.0 mmol NADH.

**Step 2 — Set up the conversion with units.**

\[
n(\text{ATP}) = 3.0\ \text{mmol glucose} \times \frac{2.0\ \text{mmol ATP}}{1.0\ \text{mmol glucose}} = 6.0\ \text{mmol ATP}
\]

\[
n(\text{NADH}) = 3.0\ \text{mmol glucose} \times \frac{2.0\ \text{mmol NADH}}{1.0\ \text{mmol glucose}} = 6.0\ \text{mmol NADH}
\]

**Answer.** 6.0 mmol ATP and 6.0 mmol NADH. The units cancel correctly (mmol glucose × mmol ATP/mmol glucose = mmol ATP), which confirms the setup.

### Example 2: Tracing carbons through the pathway

**Problem.** Glucose is labeled with ¹⁴C at carbon 1. After one pass through glycolysis, where do the labeled atoms end up, and why?

**Step 1 — Recall the split.** Aldolase cleaves F-1,6-BP between carbons 3 and 4, giving DHAP (carbons 1–3) and G3P (carbons 4–6); carbon 1 is in DHAP.

**Step 2 — Apply the isomerase.** Triose phosphate isomerase converts DHAP to G3P, moving the label to the carbonyl carbon of that triose.

**Step 3 — Trace to the product.** Each G3P becomes a pyruvate; the labeled carbon becomes the carboxylate carbon, lost as CO₂ later in the citric acid cycle (not in glycolysis itself).

**Answer.** After one pass, the label is in one of the two pyruvate molecules, specifically its carboxyl carbon; the other pyruvate is unlabeled. Glycolysis itself releases no CO₂ — the two carbons that become CO₂ are lost in later steps (Topics 6–7).

### Example 3: Predicting regulation from energy state

**Problem.** A cell suddenly has high ATP and high citrate. What happens to PFK-1 activity and to the rate of glycolysis, and what is the biological logic?

**Step 1 — Apply the effector rules.** ATP and citrate both inhibit PFK-1.

**Step 2 — Consequence.** PFK-1 activity falls and glycolytic flux drops.

**Step 3 — The logic.** High ATP signals a full energy charge; high citrate signals a well-supplied citric acid cycle. Slowing glycolysis prevents waste when the cell is already energetically comfortable.

**Answer.** PFK-1 is inhibited, glycolysis slows, and the cell spares glucose for times of need — classic negative feedback.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Net 2 ATP | Total ATP made | 2 are *invested* early and 4 are *made* later; net = 4 − 2 = 2. Exam questions often ask for gross vs net. |
| Fructose-6-phosphate | Fructose-1,6-bisphosphate | F-6-P is one phosphate on carbon 6; F-1,6-BP has phosphates on carbons 1 and 6 — it is the product of the committed PFK-1 step. |
| PFK-1 | Hexokinase | PFK-1 is the main regulated enzyme (committed step); hexokinase is the first enzyme but is secondary in regulation. Both consume ATP. |
| Substrate-level phosphorylation | Oxidative phosphorylation | Glycolysis makes ATP directly from high-energy intermediates (steps 7, 10); oxidative phosphorylation uses NADH/FADH₂ and oxygen in mitochondria. |
| NADH produced in glycolysis | NAD⁺ consumed | Step 6 *reduces* NAD⁺ to NADH; the NAD⁺ must be regenerated (by lactate formation or electron transport) or glycolysis stalls. |

## Quick Review

1. Write the net equation for glycolysis, including the correct stoichiometry of ATP, NADH, and pyruvate.
2. Which step is the committed step, and which enzyme catalyzes it? Name one activator and one inhibitor.
3. How many ATP are invested and how many are produced gross per glucose? Show the arithmetic.
4. Why can red blood cells survive on glycolysis alone?
5. A bacterial cell runs glycolysis anaerobically on 5.0 mmol of glucose. How many mmol of ATP are produced net?
6. Where in the cell does glycolysis occur, and why does the product of step 1 trap glucose inside the cell?

<details>
<summary>Show answers</summary>

1. Glucose + 2 NAD⁺ + 2 ADP + 2 Pᵢ → 2 pyruvate + 2 NADH + 2 H⁺ + 2 ATP + 2 H₂O.
2. Fructose-6-phosphate → fructose-1,6-bisphosphate, catalyzed by phosphofructokinase-1 (PFK-1). Activated by AMP and fructose-2,6-bisphosphate; inhibited by ATP and citrate.
3. Invested: 2 ATP (hexokinase, PFK-1). Produced gross: 4 ATP (2 × phosphoglycerate kinase, 2 × pyruvate kinase). Net = 4 − 2 = 2 ATP.
4. Red blood cells lack mitochondria, so they cannot run oxidative phosphorylation; glycolysis provides their ATP, and pyruvate is reduced to lactate to recycle NAD⁺.
5. 5.0 mmol glucose × 2.0 mmol ATP/mmol glucose = 10 mmol ATP net.
6. In the cytosol. Glucose-6-phosphate is negatively charged (phosphate group), so it cannot cross the hydrophobic cell membrane and is trapped for metabolism.

</details>

## Related Topics

- Previous: [Biosynthesis of Fatty Acids](04-biosynthesis-of-fatty-acids.md)
- Next: [Conversion of Pyruvate to Acetyl CoA](06-conversion-of-pyruvate-to-acetyl-coa.md)
- Related: [The Citric Acid Cycle](07-the-citric-acid-cycle.md) (where pyruvate's carbons are fully oxidized), [Carbohydrate Biosynthesis: Gluconeogenesis](08-carbohydrate-biosynthesis-gluconeogenesis.md) (the reverse pathway), [Catabolism of Triacylglycerols: The Fate of Glycerol](02-catabolism-of-triacylglycerols-the-fate-of-glycerol.md) (glycerol enters glycolysis at DHAP)
- Chapter overview: [The Organic Chemistry of Metabolic Pathways](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. ATP/NADH stoichiometry of glycolysis (2 ATP invested, 4 produced, 2 net, 2 NADH) is standard textbook biochemistry; regulatory effects of AMP, ATP, citrate, and fructose-2,6-bisphosphate on PFK-1 are established textbook facts. No experimental data were fabricated.
- Lab safety note: none — this topic describes metabolic biochemistry, not laboratory procedures. General principles only.
- Last updated: 2026-08-16
