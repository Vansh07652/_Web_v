---
title: "Reaction Yields"
subject: "Science"
book: "Chemistry 2e"
chapter: "4: Stoichiometry of Chemical Reactions"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "reaction-yields"
  - "science"
status: "complete"
---

# Reaction Yields

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 4: Stoichiometry of Chemical Reactions](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A balanced chemical equation is a recipe: it states the exact mole ratios in which reactants combine and products form. But chemistry in a beaker is not chemistry on paper. Real reactions lose material to side reactions, incomplete conversion, evaporation, and transfers between vessels, so the mass of product recovered is almost always less than the equation predicts. **Reaction yields** provides the vocabulary and the arithmetic for quantifying that gap.

Three quantities anchor this topic:

- **Theoretical yield** — the maximum mass of product the limiting reactant can produce, calculated entirely from stoichiometry. It answers the question: if everything went perfectly, how much product would we get?
- **Actual yield** — the mass of product actually recovered and weighed in the laboratory.
- **Percent yield** — the ratio of the two, reported as a percentage:

\[
\text{percent yield} = \frac{\text{actual yield}}{\text{theoretical yield}} \times 100\%
\]

A percent yield near 100% means the reaction ran almost perfectly. Lower values mean material was lost or the reaction did not go to completion. Values above 100% are possible when a product is wet, impure, or contaminated — a red flag that needs investigation, not a sign of a super-efficient reaction.

## Why This Matters

Percent yield is not an exam-only abstraction; it is an economic and environmental number. A pharmaceutical process that runs at 60% yield wastes 40% of every batch of expensive starting material, and the discarded material still must be handled and disposed of. Industrial chemists tune catalysts, temperatures, and purification steps specifically to push yields upward, because yield improvements translate directly into cost savings and less waste. For students, yield calculations tie together everything from this chapter: mole conversions, molar mass, limiting reactants, and mole ratios. On exams, yield problems are a favorite way to test whether you can run stoichiometry forward (reactants to products) *and* check your answer against the balanced equation.

## Core Concepts

### Theoretical yield comes from the limiting reactant

Before any yield can be computed, the **limiting reactant** must be identified — the reactant that runs out first and therefore caps product formation. A reliable method: convert each reactant's mass to moles, divide by its coefficient in the balanced equation, and the smallest quotient identifies the limiting reactant. The theoretical yield is then calculated from that reactant alone, using the balanced equation's mole ratio. The other reactant is present in excess and cannot produce additional product once the limiting reactant is gone.

### Why actual yield falls short

Actual yield is smaller than theoretical for several common reasons:

- **Incomplete reactions** — reversible reactions may reach equilibrium before all reactants are consumed.
- **Side reactions** — reactants may react with one another or with air and moisture to form unwanted by-products.
- **Losses during isolation** — product sticks to flask walls and filter paper and is lost during transfers, washing, and drying.
- **Solubility** — in precipitation-based purification, some product simply stays dissolved in the liquid phase.

None of these mean the chemist made an error; they mean real processes are inefficient.

### Percent yield: putting the numbers together

Percent yield expresses efficiency on a 0–100% scale, and the calculation always follows the same two steps: (1) find the theoretical yield from the limiting reactant, and (2) divide the actual yield by it and multiply by 100. Because theoretical yield is computed from moles, molar masses must be used correctly in both directions — from reactant mass to moles, and from product moles back to mass. Checking that units cancel (grams over grams, mol over mol) is a fast way to catch mistakes.

### Percent yield is not atom economy

Percent yield describes how much of a *specific* product you recovered. **Atom economy** describes what fraction of the atoms in the reactants end up in the desired product, regardless of recovery. A reaction can have high atom economy (all reactant atoms incorporated into the product) yet low percent yield (poor recovery), or vice versa. Both metrics matter in green-chemistry assessments of whether a process is sustainable.

## ELI-10: Explain Like I'm 10

> Imagine a cookie recipe that says the dough makes 24 cookies. The 24 cookies are the theoretical yield. When you actually bake, you drop one on the floor and burn another, so you end up with 21 — that is your actual yield. Percent yield is like a baking report card: 21 out of 24 is about 88% — pretty good baking!

## High-Yield Points

- Percent yield = (actual ÷ theoretical) × 100%; good chemistry alone never justifies a yield above 100%.
- The limiting reactant sets the theoretical yield — never compute yield from the reactant you have in excess.
- Convert masses to moles before applying mole ratios; the molar mass must match the species in the balanced equation.
- Actual yield is a measured mass from the lab; theoretical yield is a calculated mass from stoichiometry.
- Yields above 100% usually mean wet, impure, or contaminated product (or a weighing error).
- Percent yield measures product recovery; atom economy measures atom efficiency — different metrics, both used in green chemistry.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Theoretical yield | Maximum mass of product predicted by stoichiometry from the limiting reactant. | It is the benchmark every real result is compared against. |
| Actual yield | Mass of product actually obtained and weighed in the lab. | It is the real, measured outcome of a reaction. |
| Percent yield | (Actual yield ÷ theoretical yield) × 100%. | Quantifies reaction efficiency; used in industry and on exams. |
| Limiting reactant | The reactant that runs out first and stops the reaction. | Determines the theoretical yield. |
| Excess reactant | Reactant left over after the limiting reactant is consumed. | Must never be used to compute theoretical yield. |
| Atom economy | Fraction of reactant atoms that end up in the desired product. | A green-chemistry metric, distinct from percent yield. |

## Worked Examples

### Example 1: Calculating percent yield

Potassium chlorate decomposes on heating:

\[
2\text{KClO}_3 \rightarrow 2\text{KCl} + 3\text{O}_2
\]

A student heats 12.6 g of KClO₃ (molar mass 122.55 g/mol) and collects 4.20 g of O₂ gas (molar mass 32.00 g/mol). What is the percent yield?

**Step 1 — moles of reactant:**

\[
n(\text{KClO}_3) = \frac{12.6\ \text{g}}{122.55\ \text{g/mol}} = 0.1028\ \text{mol}
\]

**Step 2 — theoretical moles and mass of O₂ from the 3:2 mole ratio:**

\[
n(\text{O}_2) = 0.1028\ \text{mol KClO}_3 \times \frac{3\ \text{mol O}_2}{2\ \text{mol KClO}_3} = 0.1542\ \text{mol}
\]

\[
m(\text{O}_2) = 0.1542\ \text{mol} \times 32.00\ \text{g/mol} = 4.93\ \text{g}
\]

**Step 3 — percent yield:**

\[
\text{percent yield} = \frac{4.20\ \text{g}}{4.93\ \text{g}} \times 100\% = 85.2\%
\]

The grams cancel top and bottom, confirming the calculation is dimensionally sound.

### Example 2: Identifying the limiting reactant first

Ammonia is synthesized from nitrogen and hydrogen:

\[
\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3
\]

A reactor is charged with 28.0 g of N₂ (molar mass 28.02 g/mol) and 10.0 g of H₂ (molar mass 2.016 g/mol).

Moles of each reactant:

\[
n(\text{N}_2) = \frac{28.0\ \text{g}}{28.02\ \text{g/mol}} = 0.999\ \text{mol} \qquad n(\text{H}_2) = \frac{10.0\ \text{g}}{2.016\ \text{g/mol}} = 4.96\ \text{mol}
\]

Per coefficient: N₂ gives 0.999 ÷ 1 = 0.999; H₂ gives 4.96 ÷ 3 = 1.65. N₂ is limiting. Theoretical yield:

\[
n(\text{NH}_3) = 0.999\ \text{mol N}_2 \times \frac{2\ \text{mol NH}_3}{1\ \text{mol N}_2} = 1.998\ \text{mol}
\]

\[
m(\text{NH}_3) = 1.998\ \text{mol} \times 17.03\ \text{g/mol} = 34.0\ \text{g}
\]

If the plant recovers 27.2 g of NH₃, the percent yield is:

\[
\text{percent yield} = \frac{27.2\ \text{g}}{34.0\ \text{g}} \times 100\% = 80.0\%
\]

Even though H₂ was present in excess, the N₂ supply capped ammonia production at 34.0 g.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Theoretical yield | Actual yield | One is calculated from stoichiometry; the other is measured in the lab. |
| Percent yield | Percent error | Percent yield compares product obtained to product possible; percent error compares a measured value to an accepted value. |
| Yield above 100% | A sign of excellent chemistry | It signals wet, impure, or contaminated product — investigate before celebrating. |
| Limiting reactant | Reactant with the smallest mass | The limiting reactant has the smallest moles-per-coefficient, not the smallest mass. |
| Atom economy | Percent yield | Atom economy is about atom incorporation into product; percent yield is about recovery of that product. |

## Quick Review

1. Define theoretical yield and actual yield in one sentence each.
2. A reaction has a theoretical yield of 12.5 g and an actual yield of 9.85 g. What is the percent yield?
3. Why must you identify the limiting reactant before calculating theoretical yield?
4. List two reasons a real reaction might produce less than its theoretical yield.
5. You obtain 104% yield of a solid product. What are two likely explanations?

<details>
<summary>Show answers</summary>

1. Theoretical yield is the maximum product mass predicted by stoichiometry from the limiting reactant; actual yield is the mass of product actually recovered.
2. (9.85 g ÷ 12.5 g) × 100% = 78.8%.
3. The limiting reactant runs out first, so it alone determines the maximum possible product; using the excess reactant would overestimate the yield.
4. Incomplete reactions (equilibrium or reversibility) and losses during isolation (transfers, filtration, evaporation); side reactions are another common cause.
5. The product is probably wet (solvent not fully removed) or contaminated with an impurity that adds mass — re-dry and re-weigh before trusting the number.

</details>

## Related Topics

- Previous: [Reaction Stoichiometry](03-reaction-stoichiometry.md)
- Next: [Quantitative Chemical Analysis](05-quantitative-chemical-analysis.md)
- Related: [Stoichiometry of Chemical Reactions chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
