---
title: "Catabolism of Proteins: Deamination"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "29: The Organic Chemistry of Metabolic Pathways"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "catabolism-of-proteins-deamination"
  - "science"
status: "complete"
---

# Catabolism of Proteins: Deamination

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 29: The Organic Chemistry of Metabolic Pathways](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

Proteins are not stored like glycogen or fat, so the amino acids released by protein turnover — and especially by the protein breakdown that accompanies fasting, starvation, or muscle wasting — must be dealt with immediately. The first problem is the **nitrogen**: the cell needs the carbon skeletons of amino acids for fuel and biosynthesis, but free ammonia (\\(NH_3\\)) is toxic. **Catabolism of proteins therefore begins by removing the amino group** — a process called **deamination** — and then disposing of the nitrogen as **urea**, while the remaining carbon skeletons enter central metabolism (pyruvate, acetyl CoA, or citric acid cycle intermediates) to make ATP or glucose.

The amino group is usually not removed directly. Instead, **transamination** first transfers it to a common acceptor, α-ketoglutarate, forming **glutamate**; glutamate then undergoes **oxidative deamination** to release ammonia, which the **urea cycle** converts to urea:

\\[
2\ NH_4^+ + CO_2 + 3\ ATP + aspartate \rightarrow urea + fumarate + 2\ ADP + 2\ P_i + AMP + PP_i
\\]

The overall strategy — collect amino groups onto glutamate, then strip them off in the liver — keeps ammonia levels low in peripheral tissues while concentrating nitrogen disposal in one organ. This topic connects protein chemistry (Chapter 26) to the metabolic pathways built in Chapters 25–29: amino acids are both fuel and gluconeogenic substrate.

## Why This Matters

- **Nitrogen must go somewhere:** Excess amino groups cannot be stored. If the urea cycle fails (genetic defects, severe liver disease), ammonia rises and causes hepatic encephalopathy — a life-threatening clinical situation.
- **Fuel during fasting:** After a few days without food, muscle protein is broken down and its amino acids are used for gluconeogenesis (Topic 8) and energy. Deamination is the gate that lets amino acid carbon enter those pathways.
- **Glucogenic vs. ketogenic:** Knowing whether an amino acid's carbon skeleton becomes pyruvate/TCA intermediates (glucogenic) or acetyl CoA/acetoacetate (ketogenic) predicts whether it can support blood glucose — an important clinical distinction in metabolic disease.
- **Transaminases in diagnosis:** Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) are released into blood when liver or muscle cells are damaged; elevated serum levels are routine clinical markers of liver injury.
- **Vitamin B6 connection:** Transaminases require **pyridoxal phosphate (PLP)**, the coenzyme form of vitamin B6 — a concrete example of a vitamin deficiency impairing a specific metabolic step.

## Core Concepts

### Step 1: Proteolysis

Before any amino group chemistry, proteins must be hydrolyzed to free amino acids. Dietary proteins are digested by proteases (pepsin in the stomach, trypsin/chymotrypsin in the intestine); intracellular proteins are turned over by the ubiquitin–proteasome system. The result is a pool of 20 amino acids whose fates depend on their side chains.

### Step 2: Transamination — moving the amino group

**Transaminases (aminotransferases)** transfer the α-amino group of an amino acid to α-ketoglutarate, converting the amino acid to its α-keto acid and α-ketoglutarate to **glutamate**. The coenzyme is **PLP**, which shuttles the amino group through a Schiff base intermediate (an imine formed between the amino group and PLP's aldehyde).

Two enzymes you must know by name:

- **Alanine aminotransferase (ALT):** alanine + α-ketoglutarate ⇌ pyruvate + glutamate
- **Aspartate aminotransferase (AST):** aspartate + α-ketoglutarate ⇌ oxaloacetate + glutamate

Transamination is freely reversible and does not release ammonia — it only redistributes amino groups onto glutamate. That is the key: **glutamate is the cell's amino-group collection point**.

### Step 3: Oxidative deamination — releasing ammonia

**Glutamate dehydrogenase (GDH)**, found mainly in the liver, removes the amino group of glutamate as free ammonia, regenerating α-ketoglutarate:

\\[
glutamate + NAD(P)^+ + H_2O \rightarrow \alpha{-}ketoglutarate + NH_4^+ + NAD(P)H
\\]

This reaction is unusual in that it can use either NAD⁺ or NADP⁺ (NAD⁺ for catabolism, NADP⁺ when the cell wants glutamate as a nitrogen donor for biosynthesis). Now the cycle is complete: α-ketoglutarate is recycled to accept more amino groups, and ammonia has been freed. Small amounts of ammonia also come from glutaminase (glutamine → glutamate + \\(NH_4^+\\)) and from serine/threonine dehydratases.

### Step 4: The urea cycle — disposing of ammonia safely

Ammonia is too toxic to accumulate, so the liver converts it to **urea**, a neutral, highly water-soluble molecule excreted in urine. The **urea cycle** (Krebs–Henseleit cycle) has five enzymes spanning the mitochondrial matrix and cytosol:

1. **Carbamoyl phosphate synthetase I (mitochondrial):** \\(NH_4^+\\) + \\(CO_2\\) + 2 ATP → carbamoyl phosphate.
2. **Ornithine transcarbamoylase (mitochondrial):** carbamoyl phosphate + ornithine → citrulline (citrulline leaves the mitochondrion).
3. **Argininosuccinate synthetase (cytosolic):** citrulline + aspartate + ATP → argininosuccinate (uses the second nitrogen, from aspartate).
4. **Argininosuccinate lyase:** argininosuccinate → arginine + fumarate (fumarate rejoins the citric acid cycle).
5. **Arginase:** arginine + \\(H_2O\\) → urea + ornithine (ornithine returns to the mitochondrion).

Net: **two nitrogens per urea** — one from ammonia (via carbamoyl phosphate), one from aspartate — and one carbon from \\(CO_2\\). The cycle costs 3 ATP (4 high-energy bonds, because ATP → AMP + PPᵢ counts as two).

### Step 5: Carbon skeletons enter central metabolism

After deamination, the α-keto acids feed into the pathways built earlier in this chapter:

- **Glucogenic amino acids** (e.g., alanine → pyruvate; aspartate → oxaloacetate; glutamate → α-ketoglutarate): their carbons can make glucose via gluconeogenesis.
- **Ketogenic amino acids** (leucine, lysine): their carbons become acetyl CoA or acetoacetate and can make ketone bodies or fatty acids, but not glucose.
- Many amino acids are **both** (e.g., isoleucine, phenylalanine, tyrosine, tryptophan).

The ATP yield of amino acid catabolism comes from oxidizing those carbon skeletons — through pyruvate, the citric acid cycle, and electron transport — not from the deamination steps themselves.

## ELI-10: Explain Like I'm 10

Amino acids are like snack boxes with a tasty snack (the carbon part) and a wrapper you must throw away (the nitrogen part). You can't just toss the wrapper anywhere — it's toxic. So the cell collects all the wrappers onto one special box (glutamate), carries them to the liver, and the liver seals them into a safe trash bag called urea that your body pees out. The tasty snack part goes into the energy factory to make fuel or sugar.

## High-Yield Points

- Protein catabolism = proteolysis → transamination → oxidative deamination → urea cycle → carbon skeletons to metabolism.
- Transamination: amino group moved to α-ketoglutarate forming glutamate; PLP (vitamin B6) is the coenzyme; no free ammonia released; reversible.
- Oxidative deamination: glutamate dehydrogenase releases \\(NH_4^+\\) from glutamate; regenerates α-ketoglutarate.
- Urea cycle (liver): 2 N per urea (one from \\(NH_4^+\\), one from aspartate), 1 C from \\(CO_2\\), cost 3 ATP (4 high-energy bonds).
- Key intermediates: ornithine → citrulline → argininosuccinate → arginine → urea (+ ornithine regenerated).
- Fumarate from argininosuccinate rejoins the citric acid cycle — a direct link between urea cycle and TCA cycle.
- ALT and AST (PLP-dependent transaminases) are clinical markers of liver damage.
- Glucogenic amino acids → glucose precursors; ketogenic (leucine, lysine) → acetyl CoA/acetoacetate only.
- Ammonia toxicity: urea cycle failure or liver disease → hyperammonemia → hepatic encephalopathy.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Transamination | Transfer of an amino group from an amino acid to α-ketoglutarate | Collects amino groups onto glutamate without releasing toxic ammonia |
| Deamination | Removal of the amino group from a molecule | The step that frees nitrogen for urea synthesis |
| Oxidative deamination | Deamination coupled to NAD(P)⁺ reduction (glutamate dehydrogenase) | Releases \\(NH_4^+\\) while regenerating α-ketoglutarate |
| Pyridoxal phosphate (PLP) | Vitamin B6-derived coenzyme of transaminases | Required for all amino group transfers; B6 deficiency impairs them |
| α-Ketoglutarate | The amino-group acceptor that becomes glutamate | The hub that collects nitrogen from all amino acids |
| Urea cycle | Five-enzyme liver pathway converting ammonia to urea | Detoxifies ammonia; failure causes hyperammonemia |
| Carbamoyl phosphate | The activated \\(NH_4^+ + CO_2\\) intermediate made with 2 ATP | First nitrogen donor of the urea cycle |
| Glucogenic amino acid | Amino acid whose carbon skeleton can make glucose | Predicts whether protein breakdown supports blood glucose |
| Ketogenic amino acid | Amino acid whose carbon skeleton becomes acetyl CoA/acetoacetate | Leucine and lysine only; cannot make glucose |
| ALT / AST | Transaminases coupling alanine/aspartate to glutamate | Elevated serum levels signal liver or muscle damage |

## Worked Examples

### Example 1: Transamination stoichiometry

Write and balance the ALT reaction and verify atom conservation.

**Write the reaction with formulas:**

\\[
alanine\ (C_3H_7NO_2) + \alpha{-}ketoglutarate\ (C_5H_6O_5) \rightleftharpoons pyruvate\ (C_3H_4O_3) + glutamate\ (C_5H_9NO_4)
\\]

**Check atoms:** carbons 3 + 5 = 3 + 5 (8 = 8); nitrogens 1 + 0 = 0 + 1 (the amino group simply moved); oxygens 2 + 5 = 3 + 4 (7 = 7). **Answer:** the reaction is a group transfer, not an oxidation — no NAD⁺/FAD involved, no \\(CO_2\\) released. That is why transamination is freely reversible.

### Example 2: Nitrogen budget of the urea cycle

One urea molecule contains two nitrogen atoms. If 1.00 g of ammonia nitrogen (14.01 g/mol N) is processed, what mass of urea (\\(CH_4N_2O\\), 60.06 g/mol) can be formed — a hypothetical upper bound if both nitrogens came from ammonia?

**Convert mass of nitrogen → moles N → moles urea → grams urea:**

\\[
1.00\ \cancel{g\ N} \times \frac{1\ mol\ N}{14.01\ \cancel{g\ N}} \times \frac{1\ mol\ urea}{2\ mol\ N} \times \frac{60.06\ g\ urea}{1\ \cancel{mol\ urea}} = 2.14\ g\ urea
\\]

**Answer:** 2.14 g urea — the theoretical maximum. In the real cycle the second nitrogen comes from aspartate, so ammonia nitrogen accounts for at most half of each urea's nitrogen. This calculation is a good check on the "2 N per urea" stoichiometry.

### Example 3: Glucogenic vs. ketogenic prediction

Alanine is glucogenic; leucine is ketogenic. Predict where each carbon skeleton enters metabolism after deamination.

**Write the products of deamination:**

\\[
alanine \rightarrow pyruvate \rightarrow oxaloacetate \rightarrow glucose\ (glucogenic)
\\]

\\[
leucine \rightarrow acetyl\ CoA\ and\ acetoacetate \rightarrow ketone\ bodies\ (ketogenic)
\\]

**Answer:** pyruvate and oxaloacetate are gluconeogenic precursors (Topic 8), so alanine supports blood glucose; acetyl CoA cannot make net glucose (Topic 8, Example 4), so leucine cannot. Rule of thumb: if an amino acid degrades to pyruvate or a TCA intermediate, it is glucogenic; if it degrades to acetyl CoA or acetoacetate alone, it is ketogenic.

### Example 4: Energy cost of urea synthesis

Calculate the ATP cost of the urea cycle in high-energy phosphate bonds.

**Write the two ATP-consuming steps:**

\\[
Carbamoyl\ phosphate\ synthetase: 2\ ATP \rightarrow 2\ ADP + 2\ P_i
\\]

\\[
Argininosuccinate\ synthetase: ATP \rightarrow AMP + PP_i\ (equivalent\ to\ 2\ ATP)
\\]

**Sum:** \\(2 + 2 = 4\\) high-energy bonds, usually quoted as "3 ATP" because the cycle consumes 3 ATP molecules (one split to AMP). **Answer:** 4 high-energy phosphate bonds per urea — a significant investment that explains why the body routes nitrogen disposal through one organ rather than doing it everywhere.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Transamination | Deamination | Transamination moves the amino group (no free ammonia, reversible); deamination removes it as \\(NH_3/NH_4^+\\) (irreversible) |
| Glutamate dehydrogenase | Transaminases | GDH releases free ammonia (oxidative deamination); transaminases only shuffle amino groups between substrates |
| Urea | Uric acid | Urea is the nitrogen waste from amino acid catabolism (mammals); uric acid is the purine breakdown product (birds/reptiles, and gout in humans) |
| Carbamoyl phosphate synthetase I | Carbamoyl phosphate synthetase II | CPS I is mitochondrial, uses ammonia, feeds the urea cycle; CPS II is cytosolic, uses glutamine, feeds pyrimidine synthesis |
| Glucogenic amino acid | Ketogenic amino acid | Glucogenic → pyruvate/TCA intermediates → glucose; ketogenic → acetyl CoA/acetoacetate only (leucine, lysine) |
| ALT | AST | ALT couples alanine to pyruvate; AST couples aspartate to oxaloacetate — both PLP transaminases, different substrates |
| Arginase step | Transamination | Arginase hydrolyzes arginine to urea + ornithine; it is not a transaminase and needs no PLP |

## Quick Review

1. What are the five stages of protein catabolism, in order?
2. Why is glutamate the "collection point" for amino groups, and which enzyme releases ammonia from it?
3. Which coenzyme do all transaminases require, and what vitamin is it derived from?
4. How many nitrogen atoms are in each urea molecule, and where do they come from?
5. What is the ATP cost (in high-energy bonds) of the urea cycle?
6. Alanine is glucogenic; leucine is ketogenic. Which one can support blood glucose during fasting, and why?

<details>
<summary>Show answers</summary>

1. Proteolysis → transamination → oxidative deamination → urea cycle → entry of carbon skeletons into central metabolism.
2. Transaminases move amino groups from every amino acid onto α-ketoglutarate, forming glutamate; glutamate dehydrogenase then removes the group as \\(NH_4^+\\) while regenerating α-ketoglutarate.
3. Pyridoxal phosphate (PLP), derived from vitamin B6.
4. Two nitrogen atoms: one from ammonia (via carbamoyl phosphate) and one from aspartate (via argininosuccinate synthetase).
5. 3 ATP molecules = 4 high-energy phosphate bonds (2 ATP → 2 ADP; 1 ATP → AMP + PPᵢ).
6. Alanine: its deamination product, pyruvate, can be converted to oxaloacetate and then glucose; leucine's product, acetyl CoA, cannot make net glucose.

</details>

## Related Topics

- Previous: [Carbohydrate Biosynthesis: Gluconeogenesis](08-carbohydrate-biosynthesis-gluconeogenesis.md)
- Next: [Some Conclusions about Biological Chemistry](10-some-conclusions-about-biological-chemistry.md)
- Related: [The Organic Chemistry of Metabolic Pathways chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Urea cycle stoichiometry (2 N per urea, 3 ATP/4 high-energy bonds) and the glucogenic/ketogenic classification of amino acids are standard biochemistry; diagnostic statements (ALT/AST as liver markers, ammonia in liver disease) are general educational principles, not clinical guidance — verify against current sources before using in assessments.
- Last updated: 2026-08-16
