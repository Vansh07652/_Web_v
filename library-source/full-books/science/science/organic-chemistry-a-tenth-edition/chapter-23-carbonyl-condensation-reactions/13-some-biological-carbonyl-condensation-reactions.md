---
title: "Some Biological Carbonyl Condensation Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "23: Carbonyl Condensation Reactions"
topic_number: "13"
source: "organic-chemistry.md"
tags:
  - "some-biological-carbonyl-condensation-reactions"
  - "science"
status: "complete"
---

# Some Biological Carbonyl Condensation Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 23: Carbonyl Condensation Reactions](../README.md)  
> **Topic:** 13  
> **Source structure:** OpenStax public textbook outline

## Overview

The aldol and Claisen condensations of this chapter are not just laboratory reactions — they are the C–C bond-forming engines of metabolism. Cells run the *same* chemistry, controlled by two enzyme tricks: **thioesters** (acetyl-CoA and relatives) form enolates easily, and **Schiff-base (iminium)/enamine intermediates** (lysine condensing with carbonyls) activate carbonyls at physiological pH. Examples include the **aldolase** reaction of glycolysis, the **Claisen-type** condensations of fatty acid and ketone-body synthesis, the condensation that builds **HMG-CoA** (the statin-targeted cholesterol pathway), and decarboxylative variants in polyketide metabolism.

## Why This Matters

- **Metabolism is built on these reactions:** glycolysis (aldolase), the citric acid cycle (citrate synthase), fatty acid synthesis, and ketone-body formation all hinge on carbonyl condensations.
- **Clinical relevance:** statins inhibit HMG-CoA reductase, acting on a metabolite (HMG-CoA) made by carbonyl condensations.
- **Pharmaceuticals from polyketides:** polyketide synthases iterate Claisen condensations to build antibiotics (erythromycin, tetracyclines).

## Core Concepts

### Aldolase: the aldol reaction in reverse, with a Schiff base

**Fructose 1,6-bisphosphate aldolase** (glycolysis) catalyzes:

\[ \text{Fructose 1,6-bisphosphate} \rightleftharpoons \text{DHAP} + \text{G3P} \]

an **aldol cleavage** — the exact reverse of an aldol condensation. Class I aldolases use Schiff-base catalysis: a lysine ε-amino group condenses with the C2 carbonyl of F1,6BP to form an iminium ion; deprotonation at C3 gives an enamine; the C3–C4 bond breaks, releasing G3P; hydrolysis releases DHAP. The reverse direction (gluconeogenesis) is literally an aldol condensation: DHAP's enamine attacks G3P's aldehyde carbon. Class II aldolases instead use Zn²⁺ to stabilize the enolate.

### Thioesters: nature's activated carbonyls

In **acetyl-CoA**, the acetyl group is a thioester (`CH₃–C(=O)–S–CoA`). Its α-protons are **far more acidic** than an oxygen ester's — commonly quoted pKa values are about 19–21 for a thioester versus roughly 25 for an ester, a ~10⁴ difference in enolate concentration at physiological pH (values vary by source). Thioester enolates form readily, so **condensations proceed without strong base**; the thioester carbonyl is also a good electrophile — one group, donor and acceptor. This is why metabolic C–C bond formation almost always uses **CoA/ACP thioesters**.

### Claisen condensations in fatty acid biosynthesis

Fatty acid synthase extends an acyl chain two carbons at a time by **Claisen condensation of a thioester enolate with a malonyl thioester**:

\[ \text{acyl-ACP (C}_n\text{)} + \text{malonyl-ACP} \rightarrow \text{β-ketoacyl-ACP (C}_{n+2}\text{)} + \text{CO}_2 + \text{ACP-SH} \]

The malonyl group (`HOOC–CH₂–C(=O)–S-ACP`) is key: its α-CH₂ sits between *two* carbonyls (carboxylate + thioester), so it is far more acidic (pKa ≈ 13) and its enolate forms easily. The condensation is coupled to **decarboxylation** — loss of CO₂ drives the C–C bond formation. Each round adds two carbons and consumes two NADPH. Palmitate (C16) needs one acetyl-CoA starter plus seven malonyl-CoA extenders and fourteen NADPH.

### Ketone bodies and HMG-CoA

- **Thiolase:** 2 acetyl-CoA → **acetoacetyl-CoA** + CoA-SH (a Claisen condensation) — the first step of ketone-body formation.
- **HMG-CoA synthase:** acetoacetyl-CoA + acetyl-CoA → **HMG-CoA**, C₆; HMG-CoA reductase reduces it to mevalonate — **the statin target** — feeding cholesterol and isoprenoid biosynthesis.
- **Citrate synthase:** acetyl-CoA's enolate attacks oxaloacetate's carbonyl; citryl-CoA is hydrolyzed to citrate.

## ELI-10: Explain Like I'm 10

> Enzymes are like tiny assembly robots that use the same "snap two pieces together" moves you learned in the lab — aldol and Claisen snaps. With no strong base inside cells, nature glues a special tag (a thioester, like acetyl-CoA) onto one piece to make it extra "snappy," and sometimes builds a little bridge (a Schiff base) to hold it still.

## High-Yield Points

- Aldolase (glycolysis): F1,6BP ⇌ DHAP + G3P — an aldol cleavage/condensation; Class I uses a lysine Schiff base, Class II uses Zn²⁺.
- Thioesters (acetyl-CoA) have α-protons far more acidic than esters (pKa ≈ 19–21 vs ≈ 25) — why cells use CoA/ACP thioesters for condensations.
- Malonyl thioesters are doubly activated (α-CH₂ between two carbonyls, pKa ≈ 13), enabling decarboxylation-coupled Claisen condensations.
- Fatty acid synthase: acyl-ACP + malonyl-ACP → β-ketoacyl-ACP (Cₙ₊₂) + CO₂; each round adds 2 carbons and uses 2 NADPH; palmitate (C16) = 1 acetyl-CoA + 7 malonyl-CoA + 14 NADPH.
- Thiolase: 2 acetyl-CoA → acetoacetyl-CoA + CoA-SH (Claisen); HMG-CoA synthase adds a third acetyl-CoA → HMG-CoA, reduced by the statin target.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Thioester | An S–C(=O) compound, e.g., acetyl-CoA (CH₃–C(=O)–S–CoA) | Nature's activated carbonyl: acidic α-protons and reactive carbonyl enable condensations at neutral pH |
| Aldolase | The glycolytic enzyme that cleaves F1,6BP into DHAP + G3P | The aldol reaction in reverse; Schiff-base or Zn²⁺ catalysis |
| HMG-CoA | 3-Hydroxy-3-methylglutaryl-CoA (C₆) | Branch point to cholesterol; substrate of the statin target |

## Worked Examples

### Example 1: Aldolase — a mechanistic walkthrough

**Reaction:** fructose 1,6-bisphosphate (C₆H₁₄O₁₂P₂) ⇌ DHAP + G3P (each C₃H₇O₆P).

**Step 1 — Carbon counting.** A hexose (6 carbons) cleaves into two trioses: 6 = 3 + 3 ✓. DHAP (`C(C(=O)COP(=O)(O)O)O`) is a ketone phosphate; G3P (`C(C(C=O)O)OP(=O)(O)O`) an aldehyde phosphate.

**Step 2 — Schiff-base formation.** A lysine ε-NH₂ attacks the C2 carbonyl of F1,6BP (arrow: the lone pair forms the C–N bond; C=O π electrons move to oxygen); dehydration gives the iminium ion.

**Step 3 — Enamine formation and cleavage.** Deprotonation at C3 gives an enamine; its electrons reform the C=N while the C3–C4 bond breaks, releasing **G3P** and leaving the DHAP fragment as an iminium.

**Step 4 — Hydrolysis.** Water adds across the C=N, releasing **DHAP** and regenerating the lysine.

**Step 5 — The reverse direction.** In gluconeogenesis the enzyme runs backward: DHAP's enamine attacks G3P's aldehyde carbon — an aldol condensation in the textbook sense. One enzyme, one mechanism, both directions.

### Example 2: The fatty acid synthase Claisen cycle — counting carbons and electrons

**Reaction:** acetyl-ACP (C₂) + 7 malonyl-ACP (C₃ each) → palmitate (C₁₆) + 7 CO₂ + 8 ACP-SH.

**Step 1 — The condensation step.** The acyl thioester enolate attacks the carbonyl carbon of malonyl-ACP (arrow: enolate electrons form the new C–C bond; thioester π electrons move to sulfur). Loss of CO₂ drives the step; the product is a **β-ketoacyl-ACP** with two more carbons.

**Step 2 — Reductive finishing.** Each round continues with reduction (NADPH), dehydration, and a second reduction (NADPH). Per round: one condensation, two NADPH.

**Step 3 — Accounting.** Carbon: one starter acetyl (2 C) + seven malonyl extenders (7 × 3 = 21 C) − seven CO₂ (7 C) = 16 C = palmitate ✓. Reductant: 7 rounds × 2 NADPH = **14 NADPH** (plus 7 ATP for the malonyl extenders). Stoichiometry: 1 acetyl-CoA + 7 malonyl-CoA + 14 NADPH → palmitate + 7 CO₂ + 8 CoA-SH — a classic exam calculation.

### Example 3: Thiolase and HMG-CoA — ketone bodies and the statin connection

**Reaction 1:** 2 acetyl-CoA → acetoacetyl-CoA + CoA-SH.

**Mechanism in words.** One acetyl-CoA is deprotonated at its methyl (a thioester enolate); the enolate attacks the carbonyl carbon of the second acetyl-CoA (arrow: enolate electrons form the new C–C bond; C=O π electrons move to sulfur); loss of CoA-SH gives acetoacetyl-CoA (C₄). Carbon check: 2 + 2 = 4 ✓.

**Reaction 2:** acetoacetyl-CoA + acetyl-CoA → HMG-CoA (C₆) + CoA-SH — the same Claisen logic adds a third acetyl unit.

**Step 3 — Why it matters clinically.** HMG-CoA is reduced to mevalonate by **HMG-CoA reductase**; statins inhibit this enzyme, slowing cholesterol synthesis. The cholesterol pathway begins with these two condensations — a clinical example of this chapter's chemistry.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Aldolase cleavage | Aldol condensation | Same C–C bond, opposite direction: aldolase cleaves F1,6BP in glycolysis and condenses the trioses in gluconeogenesis |

## Quick Review

1. What are the two products of the aldolase reaction, and why is it called an aldol reaction?
2. Why do cells use thioesters (acetyl-CoA) rather than ordinary esters for condensations?
3. In fatty acid synthesis, why is malonyl-CoA the two-carbon donor, and what drives each condensation?
4. How many malonyl-CoA and NADPH are required to build palmitate (C16) from one acetyl-CoA starter?
5. What is the product of thiolase, and how is it connected to cholesterol-lowering drugs?
6. Name one enzyme that uses a Schiff-base intermediate and explain what the Schiff base accomplishes.

<details>
<summary>Show answers</summary>

1. Dihydroxyacetone phosphate (DHAP) and glyceraldehyde 3-phosphate (G3P). The C3–C4 bond is formed/cleaved exactly as in an aldol condensation/cleavage, assisted by a lysine Schiff base (Class I) or Zn²⁺ (Class II).
2. Thioester α-protons are far more acidic than ester α-protons (pKa ≈ 19–21 vs ≈ 25), so thioester enolates form readily at physiological pH; the thioester carbonyl is also a better electrophile.
3. Malonyl-CoA's α-CH₂ is flanked by two carbonyls (pKa ≈ 13), so its enolate forms easily, and condensation is coupled to decarboxylation, which drives C–C bond formation.
4. 7 malonyl-CoA and 14 NADPH (7 rounds × 2 NADPH); carbon check: 2 + 7(3) − 7(1) = 16 C ✓.
5. Acetoacetyl-CoA, from two acetyl-CoA (a Claisen condensation by thiolase). It leads to HMG-CoA, whose reduction by HMG-CoA reductase (the statin target) begins cholesterol synthesis.
6. Aldolase (or acetoacetate decarboxylase): the lysine Schiff base activates the carbonyl, enables enamine/enolate formation at physiological pH, and positions the substrate for bond cleavage or formation.

</details>

## Related Topics

- Previous: [The Robinson Annulation Reaction](12-the-robinson-annulation-reaction.md)
- Next: End of chapter
- Related: [The Aldol Reaction](01-carbonyl-condensations-the-aldol-reaction.md) — the textbook reaction aldolase runs in reverse
- Related: [The Claisen Condensation Reaction](07-the-claisen-condensation-reaction.md) — the thioester/ester condensation that fatty acid synthesis uses
- Related: [Conjugate Carbonyl Additions: The Michael Reaction](10-conjugate-carbonyl-additions-the-michael-reaction.md) — conjugate additions also appear in biosynthetic pathways
- Related: [Carbonyl Condensation Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Structures (SMILES) and formulas verified against PubChem PUG REST (August 2026). FAS stoichiometry (1 acetyl-CoA + 7 malonyl-CoA + 14 NADPH → palmitate + 7 CO₂ + 8 CoA-SH) is standard textbook material; exact H₂O/ATP accounting varies by source.
- pKa values (thioester ≈ 19–21; ester ≈ 25; malonyl ≈ 13) are commonly quoted approximations that differ slightly between sources; treat as order-of-magnitude. No clinical dosing/treatment claims; statin mechanism described at the enzyme level only.
- Last updated: 2026-08-16
