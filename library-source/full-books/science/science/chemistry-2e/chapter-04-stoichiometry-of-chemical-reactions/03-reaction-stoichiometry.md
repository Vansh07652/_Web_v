---
title: "Reaction Stoichiometry"
subject: "Science"
book: "Chemistry 2e"
chapter: "4: Stoichiometry of Chemical Reactions"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "reaction-stoichiometry"
  - "science"
status: "complete"
---

# Reaction Stoichiometry

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 4: Stoichiometry of Chemical Reactions](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Stoichiometry** is the quantitative study of the amounts of substances consumed and produced in a chemical reaction — the arithmetic of chemical recipes. Its foundation is the balanced equation from the first topic of this chapter: **the coefficients are mole ratios**. In

\[
\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)
\]

the coefficients say that 1 mol of N₂ reacts with 3 mol of H₂ to produce 2 mol of NH₃ — a fixed ratio that holds no matter how much material you start with. The stoichiometric plan uses the mole as the universal currency:

\[
\text{mass A} \rightarrow \text{moles A} \rightarrow \text{moles B} \rightarrow \text{mass B}
\]

with molar mass carrying you into moles and the balanced-equation ratio carrying you from A to B. If a reaction happens in solution, molarity and volume (Chapter 3) supply the moles instead of a balance. This topic develops that machinery with worked mass–mass calculations; the next topics extend it to limiting reactants, yields, and titration analysis.

## Why This Matters

Stoichiometry is where chemistry becomes *predictive*: given a recipe and a starting amount, you can compute exactly how much product will form — or how much reactant you must buy to make a target amount. Chemical industry runs on these numbers: ammonia plants scale the N₂:H₂ = 1:3 ratio to thousands of tons; airbag inflators use the stoichiometry of sodium azide decomposition to generate just the right volume of nitrogen gas. In environmental chemistry, stoichiometry converts pollutant masses to the oxygen demand a wastewater plant must supply. The same three-step logic applies everywhere: grams to moles (molar mass), moles to moles (balanced-equation ratio), moles back to grams (molar mass). Because this pattern recurs in nearly every quantitative chapter that follows — gases (Chapter 9), solutions (Chapter 11), equilibria, acids and bases, electrochemistry — mastering it now compounds like interest.

## Core Concepts

### Mole ratios: the language of the balanced equation

The coefficients of a balanced equation are **stoichiometric factors** — ratios converting moles of one substance to moles of another. From \(\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3\), valid factors include

\[
\frac{3 \text{ mol H}_2}{1 \text{ mol N}_2} \qquad \frac{2 \text{ mol NH}_3}{1 \text{ mol N}_2} \qquad \frac{2 \text{ mol NH}_3}{3 \text{ mol H}_2}
\]

Pick the factor that cancels the unit you have and leaves the unit you want — the same dimensional-analysis discipline used throughout this book. Coefficients are ratios of *moles*, never grams: 1 g of N₂ does **not** react with 3 g of H₂.

### The stoichiometric pathway

For a reaction of pure substances, the universal plan is:

\[
\text{mass of A (g)} \xrightarrow{\div \text{ molar mass A}} \text{moles of A} \xrightarrow{\times \text{ mole ratio}} \text{moles of B} \xrightarrow{\times \text{ molar mass B}} \text{mass of B (g)}
\]

Each arrow is a conversion factor, so the whole calculation can be strung together in one dimensional-analysis chain — write the formula first, then substitute numbers, then cancel units.

### When reactions happen in solution

If a reactant or product is in solution, its amount is found from molarity and volume (Chapter 3): moles = \(M \times V\). The stoichiometric ratio then converts those moles as usual. This is the setup for titration problems in the final topic of this chapter — for example, using the volume of a standardized NaOH solution to find how many moles of acid were neutralized.

### Beyond the balanced equation: what stoichiometry assumes

Stoichiometric predictions assume complete reaction of pure materials. In reality, reactions often stop short (equilibrium, Chapter 13), run at finite speed (kinetics, Chapter 12), or have a reactant that runs out first (the **limiting reactant**, next topic). Stoichiometry gives the *theoretical* maximum; the next topic shows how real yields compare.

## ELI-10: Explain Like I'm 10

A chemical equation is a recipe, and stoichiometry is the math of scaling that recipe. If one pancake recipe needs 1 cup of flour and 2 eggs, then 3 pancakes need 3 cups of flour and 6 eggs — the ratio stays the same. Chemists do exactly this with molecules: the balanced equation says "1 nitrogen plus 3 hydrogens make 2 ammonias," so if you start with 5 nitrogen molecules, you'll use 15 hydrogens and make 10 ammonias. Stoichiometry just counts molecules (in giant "dozen-like" groups called moles) to figure out how much of each ingredient you need or how much food you'll get.

## High-Yield Points

- Balanced-equation coefficients are **mole ratios** — the conversion factors between substances (never grams directly).
- The universal plan: mass A → moles A (÷ molar mass) → moles B (× mole ratio) → mass B (× molar mass).
- Dimensional analysis: set up conversion factors so units cancel; write the formula, then substitute numbers.
- In solution, moles = \(M \times V\); the same mole-ratio logic then applies.
- Stoichiometry predicts *theoretical* amounts assuming complete reaction of pure materials; real reactions may be limited by a reactant or fall short of completion.
- Check your answer: more product mass than reactant mass is possible (extra atoms come from the other reactant), but every atom count must balance.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Stoichiometry | The quantitative relationships between amounts of reactants and products | Turns balanced equations into predictive calculations |
| Mole ratio | Ratio of coefficients from the balanced equation | The conversion factor linking moles of different substances |
| Molar mass | Grams per mole of a substance (g/mol) | Converts between the measurable (mass) and the countable (moles) |
| Dimensional analysis | Unit-canceling calculation method | Guarantees the answer has the right units if set up correctly |
| Theoretical amount | Amount predicted by stoichiometry for complete reaction | The benchmark against which real yields are measured |
| Limiting reactant | The reactant that runs out first, stopping the reaction | Determines the maximum product possible (next topic) |
| Aqueous solution | A substance dissolved in water | Supplies moles via molarity × volume in solution reactions |

## How It Works / Step-by-Step Process

1. Write and balance the equation; identify the known substance (A) and target substance (B).
2. Convert the given mass of A to moles using A's molar mass.
3. Multiply by the mole ratio from the balanced equation (moles B / moles A) to get moles of B.
4. Convert moles of B to grams using B's molar mass.
5. Check units at every step; verify the equation is balanced before trusting the ratio.

## Worked Examples

### Example 1: Mass of product from mass of reactant

**Problem:** How many grams of CO₂ form when 10.0 g of CH₄ (molar mass 16.04 g/mol) burns completely in oxygen? The balanced equation is

\[
\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(g)
\]

**Step 1 — Convert mass of CH₄ to moles:**

\[
10.0 \text{ g CH}_4 \times \frac{1 \text{ mol CH}_4}{16.04 \text{ g CH}_4} = 0.623 \text{ mol CH}_4
\]

**Step 2 — Apply the mole ratio (1 mol CH₄ : 1 mol CO₂):**

\[
0.623 \text{ mol CH}_4 \times \frac{1 \text{ mol CO}_2}{1 \text{ mol CH}_4} = 0.623 \text{ mol CO}_2
\]

**Step 3 — Convert moles of CO₂ to grams (molar mass 44.01 g/mol):**

\[
0.623 \text{ mol CO}_2 \times \frac{44.01 \text{ g CO}_2}{1 \text{ mol CO}_2} = 27.4 \text{ g CO}_2
\]

**Answer:** 10.0 g of methane produces 27.4 g of CO₂ — more than the starting mass, because the oxygen contributes most of the CO₂'s mass. That is not a violation of conservation of mass; it reflects the oxygen consumed.

### Example 2: One-chain dimensional analysis (mass → mass)

**Problem:** How many grams of water form when 5.00 g of H₂ (molar mass 2.016 g/mol) reacts with excess O₂? Balanced equation:

\[
2\text{H}_2(g) + \text{O}_2(g) \rightarrow 2\text{H}_2\text{O}(l)
\]

String all three conversions into one chain, writing the formula before substituting:

\[
5.00 \text{ g H}_2 \times \frac{1 \text{ mol H}_2}{2.016 \text{ g H}_2} \times \frac{2 \text{ mol H}_2\text{O}}{2 \text{ mol H}_2} \times \frac{18.02 \text{ g H}_2\text{O}}{1 \text{ mol H}_2\text{O}} = 44.7 \text{ g H}_2\text{O}
\]

Check units: g H₂ cancels, mol H₂ cancels, mol H₂O cancels, leaving g H₂O. **Answer:** 44.7 g of water. The mole ratio 2:2 (i.e., 1:1) came straight from the coefficients.

### Example 3: Mole ratio with different coefficients

**Problem:** How many grams of NH₃ (molar mass 17.03 g/mol) can be made from 28.0 g of N₂ (molar mass 28.02 g/mol) with excess H₂?

\[
\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)
\]

**Step 1 — Moles of N₂:**

\[
28.0 \text{ g N}_2 \times \frac{1 \text{ mol N}_2}{28.02 \text{ g N}_2} = 0.999 \text{ mol N}_2 \approx 1.00 \text{ mol N}_2
\]

**Step 2 — Mole ratio 2 mol NH₃ per 1 mol N₂:**

\[
1.00 \text{ mol N}_2 \times \frac{2 \text{ mol NH}_3}{1 \text{ mol N}_2} = 2.00 \text{ mol NH}_3
\]

**Step 3 — Grams of NH₃:**

\[
2.00 \text{ mol NH}_3 \times \frac{17.03 \text{ g NH}_3}{1 \text{ mol NH}_3} = 34.1 \text{ g NH}_3
\]

**Answer:** 34.1 g of NH₃ — the 1:2 coefficient ratio doubled the mole count, exactly what the balanced equation demands.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Mole ratios | Mass ratios | Coefficients are ratios of *moles*, not grams — 1 mol N₂ needs 3 mol H₂, not 3 g H₂ |
| Moles of A | Mass of A | Convert with molar mass before applying the mole ratio; jumping from grams to grams skips the required mole step |
| Product mass > reactant mass | Violation of conservation of mass | Other reactants (like O₂) contribute atoms; total mass is still conserved |
| Mole ratio direction | Ratio flipped | Choose the factor that cancels the unit you have (e.g., mol A on the bottom) |
| Theoretical yield | Actual yield | Stoichiometry gives the maximum possible; real reactions yield less (next topic) |
| Balanced equation coefficients | Reaction rate | Coefficients tell *how much*, not *how fast* — kinetics (Chapter 12) handles speed |

## Quick Review

1. Why must the equation be balanced before any stoichiometric calculation?
2. In \(2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}\), how many moles of H₂O form from 4 mol of H₂?
3. How many grams of H₂O form from 5.00 g of H₂ with excess O₂? (Molar masses: H₂ = 2.016, H₂O = 18.02.)
4. What are the three conversion steps in a mass → mass problem?
5. If a product's mass exceeds the mass of the single reactant you started with, is something wrong? Explain.
6. How would you find moles of a reactant if it is provided as a solution concentration and volume?

<details>
<summary>Show answers</summary>

1. Only a balanced equation gives correct mole ratios; an unbalanced equation's coefficients are meaningless as conversion factors.
2. 4 mol H₂ × (2 mol H₂O / 2 mol H₂) = 4 mol H₂O.
3. 5.00 g H₂ × (1 mol / 2.016 g) × (2 mol H₂O / 2 mol H₂) × (18.02 g / 1 mol) = 44.7 g H₂O.
4. Mass A → moles A (÷ molar mass of A) → moles B (× mole ratio) → mass B (× molar mass of B).
5. No — other reactants (e.g., O₂ in combustion) contribute atoms to the product; total mass of *all* reactants equals total mass of all products.
6. Moles = molarity × volume (\(n = M \times V\)), then use the mole ratio as usual.

</details>

## Related Topics

- Previous: [Classifying Chemical Reactions](02-classifying-chemical-reactions.md)
- Next: [Reaction Yields](04-reaction-yields.md)
- Related: [Stoichiometry of Chemical Reactions chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (molar masses) are commonly taught reference values; verify against current sources before relying on them in assessments.
- Last updated: 2026-08-16
