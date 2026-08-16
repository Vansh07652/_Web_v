---
title: "Carbohydrate Biosynthesis: Gluconeogenesis"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "29: The Organic Chemistry of Metabolic Pathways"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "carbohydrate-biosynthesis-gluconeogenesis"
  - "science"
status: "complete"
---

# Carbohydrate Biosynthesis: Gluconeogenesis

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 29: The Organic Chemistry of Metabolic Pathways](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

**Gluconeogenesis** is the biosynthesis of glucose from non-carbohydrate precursors: pyruvate, lactate, glycerol, and most amino acids. It is essentially glycolysis run in reverse — but not exactly, and that "not exactly" is the whole lesson of this topic. Glycolysis has three strongly exergonic, essentially irreversible steps (hexokinase, phosphofructokinase-1, pyruvate kinase). Thermodynamics forbids simply reversing them, so gluconeogenesis **bypasses each with a different enzyme** catalyzing a separate reaction. The result is a parallel route with four unique steps, and it costs energy: building glucose from two pyruvate consumes 4 ATP, 2 GTP, and 2 NADH.

Overall (from two pyruvate):

\\[
2\ pyruvate + 4\ ATP + 2\ GTP + 2\ NADH + 6\ H_2O \rightarrow glucose + 4\ ADP + 2\ GDP + 6\ P_i + 2\ NAD^+
\\]

The pathway runs mainly in the **liver** (and, to a lesser extent, kidney cortex) during fasting, and its product — free glucose — is released into the blood to supply the brain and red blood cells, which cannot survive on fatty acids alone. Gluconeogenesis is the biochemical reason we do not run out of glucose between meals.

## Why This Matters

- **Blood glucose homeostasis:** The brain consumes roughly 120 g of glucose per day, but glycogen stores cover only about a day of fasting. Gluconeogenesis keeps blood glucose in the normal range during overnight fasts and longer; its failure or hormonal dysregulation is central to hypoglycemia and to diabetes management.
- **The Cori cycle in action:** During intense exercise, muscle produces lactate anaerobically; the lactate travels to the liver, is converted back to glucose, and the glucose returns to muscle. Gluconeogenesis is the recycling half of that loop.
- **Hormonal control:** Glucagon (fasting) stimulates gluconeogenesis; insulin (fed state) suppresses it. The reciprocal regulation of glycolysis and gluconeogenesis — often through **fructose-2,6-bisphosphate** — is a model of how opposing pathways avoid running simultaneously in a futile cycle.
- **Clinical relevance:** Hereditary fructose-1,6-bisphosphatase deficiency causes severe fasting hypoglycemia; alcohol inhibits gluconeogenesis (via NADH shifts), which is why drinking on an empty stomach can cause dangerous drops in blood glucose.
- **Exam logic:** Knowing which glycolysis steps are bypassed, which enzymes replace them, and the energy cost is among the most frequently tested material in metabolism.

## Core Concepts

### The four bypass reactions

Glycolysis has three irreversible steps; gluconeogenesis uses **four unique enzymes** to get around them:

1. **Pyruvate → phosphoenolpyruvate (PEP)** — two enzymes replace pyruvate kinase. First, **pyruvate carboxylase** (mitochondrial, requires the vitamin **biotin** and ATP) adds \\(CO_2\\) to pyruvate to make **oxaloacetate**. Then **PEP carboxykinase (PEPCK)** (cytosolic or mitochondrial) removes that same \\(CO_2\\) while using GTP, converting oxaloacetate to **PEP**. Oxaloacetate must first cross the mitochondrial membrane — as malate or aspartate — because the inner membrane has no oxaloacetate transporter.
2. **Fructose-1,6-bisphosphate → fructose-6-phosphate** — **fructose-1,6-bisphosphatase** hydrolyzes the 1-phosphate, replacing the irreversible phosphofructokinase-1 step of glycolysis. This is the main regulated control point of gluconeogenesis.
3. **Glucose-6-phosphate → glucose** — **glucose-6-phosphatase** hydrolyzes the phosphate, releasing free glucose. This enzyme exists only in the liver and kidney (not in muscle), which is why muscle glycogen cannot be exported as blood glucose.

Everything between these bypasses — the middle of the pathway — runs through the **same enzymes as glycolysis**, just in reverse, because those steps are near-equilibrium and reversible.

### The energy cost and why it matters

Glycolysis nets 2 ATP per glucose; gluconeogenesis costs 6 high-energy phosphate bonds (4 ATP + 2 GTP) plus 2 NADH per glucose. The pathway is therefore not a cheap reversal — the cell invests energy to drive thermodynamically uphill carbon flow.

### Regulation: reciprocal control

Gluconeogenesis and glycolysis are regulated **reciprocally** so they do not run at the same time (which would waste ATP in a futile cycle):

- **Fructose-2,6-bisphosphate (F-2,6-BP):** made by PFK-2 in the fed state, this signal **activates phosphofructokinase-1** (glycolysis) and **inhibits fructose-1,6-bisphosphatase** (gluconeogenesis). Glucagon lowers F-2,6-BP, flipping the switch the other way.
- **Allosteric effectors:** AMP and ADP activate glycolytic enzymes and inhibit gluconeogenic ones; ATP and citrate do the opposite. High energy charge → gluconeogenesis; low energy charge → glycolysis.
- **Hormonal (long-term):** glucagon and cortisol induce (increase synthesis of) gluconeogenic enzymes; insulin does the reverse. Transcription-level control takes hours, matching the fasting timeline.

### Substrates: where the carbons come from

- **Lactate** → pyruvate (lactate dehydrogenase) → glucose (Cori cycle).
- **Glycerol** (from triacylglycerol breakdown, Topic 2) → glycerol phosphate → dihydroxyacetone phosphate, entering mid-stream.
- **Glucogenic amino acids** (Topic 9): after deamination, their carbon skeletons enter as pyruvate, oxaloacetate, α-ketoglutarate, succinyl CoA, or fumarate — all cycle intermediates that can feed gluconeogenesis.
- **Not acetyl CoA:** fatty acids cannot be net glucose precursors — acetyl CoA's carbons are lost as CO₂ in the cycle, and no enzyme converts acetyl CoA to oxaloacetate net. This is why very-low-carbohydrate, high-fat diets must rely on ketone bodies for brain fuel.

## ELI-10: Explain Like I'm 10

Gluconeogenesis is like building a Lego castle from smaller pieces when you're running low on castles. You can't just play the demolition video (glycolysis) in reverse, because some steps only work one way — so you use different tools to get around those one-way doors. It costs extra batteries (ATP) to build the castle, and it happens mainly in the liver, the body's Lego factory that keeps sending castles (glucose) to the brain between meals.

## High-Yield Points

- Gluconeogenesis = glucose synthesis from pyruvate, lactate, glycerol, and glucogenic amino acids; mainly in liver (and kidney cortex) during fasting.
- Three irreversible glycolysis steps bypassed by four enzymes: pyruvate carboxylase + PEPCK (replace pyruvate kinase), fructose-1,6-bisphosphatase (replaces PFK-1), glucose-6-phosphatase (replaces hexokinase).
- Pyruvate carboxylase requires biotin and ATP, is mitochondrial, and makes oxaloacetate; PEPCK uses GTP and makes PEP.
- Energy cost: 4 ATP + 2 GTP + 2 NADH per glucose (6 high-energy phosphate bonds).
- Glucose-6-phosphatase exists only in liver/kidney → muscle glycogen cannot raise blood glucose.
- Fatty acids cannot be converted to glucose (acetyl CoA has no net route to oxaloacetate).
- Regulated reciprocally with glycolysis, chiefly via fructose-2,6-bisphosphate and energy charge.
- Cori cycle: muscle lactate → liver glucose → muscle; the recycling loop during exercise.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Gluconeogenesis | Making new glucose from non-carbohydrate precursors | Maintains blood glucose during fasting; essential for brain and RBC fuel |
| Bypass reaction | A unique gluconeogenic enzyme replacing an irreversible glycolysis step | Lets the pathway run "uphill" thermodynamically |
| Pyruvate carboxylase | Biotin-dependent enzyme: pyruvate + CO₂ + ATP → oxaloacetate | First step of the pyruvate→PEP bypass; also anaplerotic |
| PEP carboxykinase (PEPCK) | Enzyme converting oxaloacetate to PEP using GTP | Completes the pyruvate bypass; CO₂ in, CO₂ out |
| Fructose-1,6-bisphosphatase | Enzyme hydrolyzing fructose-1,6-bisphosphate to fructose-6-phosphate | The main regulated control point of gluconeogenesis |
| Glucose-6-phosphatase | Enzyme releasing free glucose from glucose-6-phosphate | Liver/kidney only; explains why muscle can't export glucose |
| Cori cycle | Muscle lactate → liver glucose → muscle | Recycles lactate carbon during and after exercise |
| Fructose-2,6-bisphosphate | Regulatory signal activating glycolysis and inhibiting gluconeogenesis | The molecular switch controlled by glucagon/insulin |
| Biotin | Vitamin cofactor carrying CO₂ in carboxylation reactions | Required for pyruvate carboxylase (and acetyl CoA carboxylase, Topic 4) |
| Futile cycle | Two opposing pathways running at once, wasting ATP | Why glycolysis and gluconeogenesis are reciprocally regulated |

## Worked Examples

### Example 1: Energy cost of gluconeogenesis

Calculate the ATP-equivalent cost to build one glucose from two pyruvate.

**Write the investment first:**

\\[
Cost = 4\ ATP + 2\ GTP = 6\ ATP\ equivalents\ per\ glucose
\\]

**Compare with glycolysis's yield** (2 ATP + 2 NADH per glucose):

\\[
Net\ cost\ of\ the\ round\ trip = 6 - 2 = 4\ ATP\ equivalents
\\]

**Answer:** the Cori cycle is not free: each lactate → glucose → lactate round trip costs the body 4 ATP equivalents (counting the 2 NADH the liver also spends). This is the "interest" the body pays to recycle lactate — and a classic exam calculation.

### Example 2: Carbon counting — how many lactate molecules per glucose?

Lactate is \\(C_3H_6O_3\\), glucose is \\(C_6H_{12}O_6\\). How many lactates are needed per glucose?

**Set up the ratio from carbon counts:**

\\[
\frac{6\ carbons}{1\ glucose} \times \frac{1\ lactate}{3\ carbons} = 2\ lactate\ per\ glucose
\\]

**Answer:** two lactates (6 C total) → one glucose (6 C). The same 2:1 logic applies to pyruvate and glycerol (3-carbon) precursors — the basis of all stoichiometric problems in this pathway.

### Example 3: Moles of glucose from a lactate load

The liver receives 3.60 g of lactate (molar mass 90.08 g/mol) from exercising muscle. What is the theoretical maximum mass of glucose (180.16 g/mol) it can produce?

**Convert grams lactate → moles lactate → moles glucose → grams glucose:**

\\[
3.60\ \cancel{g\ lactate} \times \frac{1\ mol\ lactate}{90.08\ \cancel{g\ lactate}} \times \frac{1\ mol\ glucose}{2\ mol\ lactate} = 0.01998\ mol\ glucose
\\]

\\[
0.01998\ \cancel{mol\ glucose} \times \frac{180.16\ g\ glucose}{1\ \cancel{mol\ glucose}} = 3.60\ g\ glucose
\\]

**Answer:** 3.60 g of glucose — mass is conserved 1:1 because lactate and glucose have the same carbon fraction (40% C by mass). Note this is the *theoretical* maximum: some lactate carbon is always oxidized to CO₂ to supply the 6 ATP + 2 NADH the pathway needs.

### Example 4: Why fatty acids can't feed gluconeogenesis

Explain in one calculation why a 16-carbon fatty acid (palmitate, 8 acetyl CoA) cannot make net glucose.

**Trace the carbons:** each acetyl CoA enters the citric acid cycle and its 2 carbons leave as 2 \\(CO_2\\) before any net oxaloacetate accumulates:

\\[
acetyl\ CoA \rightarrow 2\ CO_2\ (no\ net\ oxaloacetate\ gain)
\\]

**Answer:** oxaloacetate is consumed and regenerated within the cycle but never produced *net* from acetyl CoA — the decarboxylation steps lose exactly the carbons that entered. Without a net source of oxaloacetate (or a 3-carbon precursor), there is no route to PEP and hence no glucose. This is the biochemical basis of the "fat can't make sugar" rule.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Gluconeogenesis | Glycolysis reversed | Same middle enzymes, but three irreversible steps are bypassed by four new enzymes; it costs 6 ATP/GTP equivalents instead of yielding 2 ATP |
| Pyruvate carboxylase | Pyruvate dehydrogenase | Carboxylase adds CO₂ (pyruvate → oxaloacetate, biotin, ATP); dehydrogenase removes CO₂ (pyruvate → acetyl CoA). They are competing fates of pyruvate |
| PEP carboxykinase | Pyruvate kinase | PEPCK makes PEP from oxaloacetate (gluconeogenesis, uses GTP); pyruvate kinase makes ATP from PEP (glycolysis) |
| Glucose-6-phosphatase | Hexokinase / glucokinase | Phosphatase removes phosphate (liver/kidney, releases glucose); kinases add phosphate (all tissues, traps glucose inside cells) |
| Gluconeogenesis | Glycogenolysis | Gluconeogenesis builds glucose from small precursors; glycogenolysis just releases glucose already stored as glycogen |
| Fructose-1,6-bisphosphatase | Phosphofructokinase-1 | FBPase-1 removes a phosphate (gluconeogenesis); PFK-1 adds one (glycolysis). Both regulated by F-2,6-BP in opposite directions |
| Cori cycle | Alanine cycle | Cori cycle shuttles lactate (no nitrogen); alanine cycle shuttles amino groups as alanine from muscle to liver (Topic 9) |

## Quick Review

1. Which three glycolysis steps are irreversible, and which four enzymes bypass them in gluconeogenesis?
2. What is the total ATP-equivalent cost of synthesizing one glucose from two pyruvate?
3. Why must oxaloacetate be converted to malate or aspartate to leave the mitochondrion?
4. Why can't muscle tissue export glucose to the blood even though it stores glycogen?
5. Why can't acetyl CoA from fatty acid oxidation serve as a net glucose precursor?
6. How does glucagon shift the fructose-2,6-bisphosphate switch, and what does that do to each pathway?

<details>
<summary>Show answers</summary>

1. Hexokinase → bypassed by glucose-6-phosphatase; phosphofructokinase-1 → bypassed by fructose-1,6-bisphosphatase; pyruvate kinase → bypassed by pyruvate carboxylase + PEP carboxykinase.
2. 4 ATP + 2 GTP = 6 high-energy phosphate bonds (plus 2 NADH) per glucose.
3. The inner mitochondrial membrane has no transporter for oxaloacetate; malate and aspartate do have transporters, and oxaloacetate is regenerated on the cytosolic side.
4. Muscle lacks glucose-6-phosphatase, so its glucose-6-phosphate cannot become free glucose; it is used locally (glycolysis or glycogen synthesis) instead.
5. Acetyl CoA's carbons are lost as CO₂ in the two decarboxylation steps of the cycle; no net oxaloacetate is produced, so there is no carbon route to PEP and glucose.
6. Glucagon lowers fructose-2,6-bisphosphate, which inhibits PFK-1 (slowing glycolysis) and activates fructose-1,6-bisphosphatase (speeding gluconeogenesis) — the liver switches from consuming to producing glucose.

</details>

## Related Topics

- Previous: [The Citric Acid Cycle](07-the-citric-acid-cycle.md)
- Next: [Catabolism of Proteins: Deamination](09-catabolism-of-proteins-deamination.md)
- Related: [The Organic Chemistry of Metabolic Pathways chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Energy costs (4 ATP + 2 GTP + 2 NADH per glucose) and substrate rules (fatty acids cannot be net glucose precursors) are standard biochemistry; the brain's daily glucose consumption (~120 g) is an approximate population value — verify against current sources before using in assessments.
- Last updated: 2026-08-16
