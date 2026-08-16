---
title: "Reaction Stoichiometry"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "7: Stoichiometry of Chemical Reactions"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "reaction-stoichiometry"
  - "science"
status: "complete"
---

# Reaction Stoichiometry

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 7: Stoichiometry of Chemical Reactions](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Stoichiometry (from Greek *stoicheion*, "element," and *metron*, "measure") is the quantitative study of reactants and products in a chemical reaction. The balanced equation from Topic 1 gives the **mole ratios** — the exact proportions in which substances react — and stoichiometry uses those ratios to answer "how much product can I make?" and "how much reactant do I need?" The central strategy is the **mole bridge**: because you can rarely measure moles directly, you convert what you *can* measure (mass in grams, volume and molarity of solutions) into moles, use the balanced equation's mole ratio to move from one substance to another, and convert back to the unit the question asks for. This chapter covers mass-to-mass calculations, solution-based stoichiometry, and the general roadmap that makes every stoichiometry problem the same problem with different numbers.

## Why This Matters

Stoichiometry is where chemistry becomes engineering. A pharmaceutical chemist needs to know how many grams of each reagent to weigh to produce a target mass of drug. A combustion engineer calculates the air (oxygen) required to burn fuel completely. A clinical lab uses stoichiometric reactions to quantify blood glucose: the amount of colored product formed is directly proportional to the glucose that reacted. An environmental chemist uses stoichiometry to design the dose of a treatment chemical needed to remove a pollutant. Errors here are not just exam mistakes — in real processes they mean wasted reagents, failed syntheses, or unsafe concentrations. Nearly every later quantitative topic (gases, thermochemistry, equilibria, acids and bases) builds on the same mole-bridge logic.

## Core Concepts

### The mole ratio: what the coefficients really mean

In the balanced equation

\[
\mathrm{N_2(g) + 3\,H_2(g) \rightarrow 2\,NH_3(g)}
\]

the coefficients say: 1 mol N₂ reacts with 3 mol H₂ to produce 2 mol NH₃. The ratios 1:3:2 are **mole ratios**, and they can be read in either direction as conversion factors:

\[
\frac{3\ \text{mol H}_2}{1\ \text{mol N}_2}, \qquad \frac{2\ \text{mol NH}_3}{1\ \text{mol N}_2}, \qquad \frac{2\ \text{mol NH}_3}{3\ \text{mol H}_2}
\]

Mole ratios convert moles of one substance into moles of another. They do *not* convert masses directly — 1 mol of N₂ (28.01 g) and 3 mol of H₂ (6.05 g) have very different masses even though they react 1:3. That is why moles, not grams, are the currency of stoichiometry.

### The mole-bridge roadmap

Almost every stoichiometry problem follows the same path:

1. **Balance the equation** — you need correct mole ratios.
2. **Convert the given quantity to moles** — divide mass by molar mass, or multiply volume by molarity (mol/L).
3. **Apply the mole ratio** — multiply by the ratio that cancels the substance you know and introduces the substance you want.
4. **Convert moles to the requested unit** — multiply by molar mass to get grams, or divide by molarity to get volume.

Written as a chain of conversion factors, the problem becomes one long multiplication where units cancel step by step — **dimensional analysis** — which both guarantees correct units and catches errors.

### Mass-to-mass stoichiometry

The classic calculation: given grams of one substance, find grams of another. Example skeleton (combustion of methane):

\[
\mathrm{CH_4(g) + 2\,O_2(g) \rightarrow CO_2(g) + 2\,H_2O(g)}
\]

grams CH₄ → moles CH₄ (÷ molar mass) → moles H₂O (× mole ratio) → grams H₂O (× molar mass). Each step uses one conversion factor, and the units visibly cancel.

### Solution stoichiometry with molarity

When reactants are solutions, molarity links volume to moles:

\[
\text{moles of solute} = \text{molarity (mol/L)} \times \text{volume (L)}
\]

This turns a titration or a precipitation problem into the same mole-bridge: volume × molarity → moles of A → mole ratio → moles of B → (optionally) volume or mass of B. Solution stoichiometry is the workhorse of quantitative chemical analysis (Topic 5 of this chapter).

### Limiting reactants: the preview

Real reactions rarely have exactly the right amounts of every reactant. The reactant that runs out first — the **limiting reactant** — determines how much product forms; the others are in excess. Finding the limiting reactant means computing how much product each reactant could make and taking the smallest value. This concept is covered in depth in Reaction Yields (Topic 4), but it is worth previewing here because it is a stoichiometry calculation applied twice.

## ELI-10: Explain Like I'm 10

A balanced equation is like a cookie recipe that says "1 cup of sugar and 2 cups of flour make 12 cookies." If you have 3 cups of sugar, you can make 36 cookies — but only if you also have enough flour. Stoichiometry is the math for scaling recipes: it turns "how many cups do I have" into "how many cookies can I bake," using the recipe's numbers as the secret conversion. Grams are like cups, moles are like "batches," and the recipe numbers tell you how batches relate.

## High-Yield Points

- **Mole ratios come from the balanced equation's coefficients** — never from subscripts or from masses.
- The universal path: given → **moles of given** → **mole ratio** → **moles of wanted** → wanted unit.
- Moles = mass ÷ molar mass; moles = molarity × volume (L); mass = moles × molar mass.
- **Dimensional analysis**: set up every conversion factor so units cancel; if the units don't come out right, the answer is wrong.
- Always balance the equation first — an unbalanced equation gives wrong ratios and wrong answers.
- Molar masses: N₂ = 28.01 g/mol, H₂ = 2.016 g/mol, NH₃ = 17.03 g/mol, CH₄ = 16.04 g/mol, H₂O = 18.02 g/mol, CO₂ = 44.01 g/mol (commonly taught reference values).
- When two reactants are given, the problem is a limiting-reactant problem: compute product from each and take the smaller.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Stoichiometry | Quantitative relationships between reactants and products | The math of "how much" in every reaction |
| Mole ratio | Ratio of coefficients from a balanced equation | The conversion factor between substances |
| Molar mass | Grams per mole of a substance (g/mol) | Bridges mass and moles |
| Molarity | Moles of solute per liter of solution (mol/L) | Bridges volume and moles for solutions |
| Dimensional analysis | Unit-canceling setup of conversion factors | Guarantees correct units and catches errors |
| Conversion factor | A ratio equal to 1 that changes units | The building block of every stoichiometry step |
| Limiting reactant | The reactant that runs out first | Sets the maximum amount of product |
| Excess reactant | Reactant left over when the reaction stops | The unused portion of what you started with |

## Worked Examples

### Example 1: Mole-to-mole — how much ammonia?

Given the balanced reaction \(\mathrm{N_2(g) + 3\,H_2(g) \rightarrow 2\,NH_3(g)}\), how many moles of NH₃ are produced from 4.50 mol of N₂ (with excess H₂)?

**Step 1 — Write the mole ratio from the balanced equation:**

\[
\frac{2\ \text{mol NH}_3}{1\ \text{mol N}_2}
\]

**Step 2 — Multiply, canceling units:**

\[
4.50\ \text{mol N}_2 \times \frac{2\ \text{mol NH}_3}{1\ \text{mol N}_2} = 9.00\ \text{mol NH}_3
\]

**Step 3 — Check the sense:** 1:2 ratio means ammonia is twice the moles of nitrogen — 9.00 mol is double 4.50 mol. Correct.

### Example 2: Mass-to-mass — burning methane

How many grams of water are produced when 25.0 g of methane (CH₄) burns completely? Balanced equation: \(\mathrm{CH_4(g) + 2\,O_2(g) \rightarrow CO_2(g) + 2\,H_2O(g)}\). Molar masses: CH₄ = 16.04 g/mol; H₂O = 18.02 g/mol.

**Step 1 — Convert grams CH₄ to moles:**

\[
25.0\ \text{g CH}_4 \times \frac{1\ \text{mol CH}_4}{16.04\ \text{g CH}_4} = 1.559\ \text{mol CH}_4
\]

**Step 2 — Apply the mole ratio (2 mol H₂O per 1 mol CH₄):**

\[
1.559\ \text{mol CH}_4 \times \frac{2\ \text{mol H}_2\text{O}}{1\ \text{mol CH}_4} = 3.118\ \text{mol H}_2\text{O}
\]

**Step 3 — Convert to grams:**

\[
3.118\ \text{mol H}_2\text{O} \times \frac{18.02\ \text{g H}_2\text{O}}{1\ \text{mol H}_2\text{O}} = 56.2\ \text{g H}_2\text{O}
\]

**Step 4 — Verify units:** g CH₄ → mol CH₄ → mol H₂O → g H₂O; all units cancel except grams of water. Answer: 56.2 g H₂O.

### Example 3: Solution stoichiometry — a titration calculation

How many milliliters of 0.250 M HCl are required to exactly neutralize 20.0 mL of 0.150 M NaOH? Balanced equation: \(\mathrm{HCl(aq) + NaOH(aq) \rightarrow NaCl(aq) + H_2O(l)}\). The mole ratio is 1:1.

**Step 1 — Convert NaOH volume to moles (convert mL to L first):**

\[
20.0\ \text{mL} \times \frac{1\ \text{L}}{1000\ \text{mL}} = 0.0200\ \text{L}
\]

\[
0.0200\ \text{L} \times \frac{0.150\ \text{mol NaOH}}{1\ \text{L}} = 3.00 \times 10^{-3}\ \text{mol NaOH}
\]

**Step 2 — Mole ratio (1:1):** moles HCl needed = \(3.00 \times 10^{-3}\) mol.

**Step 3 — Convert moles HCl to volume using molarity:**

\[
V = \frac{\text{moles}}{\text{molarity}} = \frac{3.00 \times 10^{-3}\ \text{mol}}{0.250\ \text{mol/L}} = 0.0120\ \text{L} = 12.0\ \text{mL}
\]

**Step 4 — Check:** 0.250 M is more concentrated than 0.150 M, so less volume of HCl is needed than NaOH — 12.0 mL < 20.0 mL makes sense. Answer: 12.0 mL of 0.250 M HCl.

### Example 4: Preview — finding the limiting reactant

In the reaction \(\mathrm{Zn(s) + 2\,HCl(aq) \rightarrow ZnCl_2(aq) + H_2(g)}\), suppose 0.100 mol Zn reacts with 0.300 mol HCl. Which is limiting?

**Compute product from each reactant** (using moles of H₂ as the common product):

\[
0.100\ \text{mol Zn} \times \frac{1\ \text{mol H}_2}{1\ \text{mol Zn}} = 0.100\ \text{mol H}_2
\]

\[
0.300\ \text{mol HCl} \times \frac{1\ \text{mol H}_2}{2\ \text{mol HCl}} = 0.150\ \text{mol H}_2
\]

Zinc produces less H₂ (0.100 mol < 0.150 mol), so **Zn is the limiting reactant**; it runs out first, and at most 0.100 mol H₂ can form. The 2:1 HCl requirement means 0.200 mol HCl is consumed, leaving 0.100 mol HCl unreacted (excess). This is the same logic developed fully in Topic 4.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Mole ratio from coefficients | Mass ratio | 1 mol N₂ (28 g) ≠ 1 mol H₂ (2 g); ratios apply to moles only |
| Molarity (mol/L) | Moles | Molarity is a concentration; multiply by liters to get moles |
| "Limiting reactant" | "The smaller mass of reactant" | The limiting reactant is determined by moles AND mole ratio, not by which mass is smaller |
| Subscripts in a formula | Coefficients in an equation | Subscripts describe one molecule; coefficients describe how many molecules react |
| mL vs L in molarity | Same thing | Molarity is mol/L; volumes must be in liters before multiplying (or convert consistently) |
| Finding the wanted substance directly from mass | Going through moles | You cannot convert grams of A to grams of B directly; moles are the required bridge |
| One mole ratio direction | The other | Use the ratio that cancels the known substance's units — orientation matters |

## Quick Review

1. In \(\mathrm{2\,H_2(g) + O_2(g) \rightarrow 2\,H_2O(g)}\), how many moles of H₂O form from 3.0 mol of O₂?
2. How many grams of CO₂ are produced when 10.0 g of CH₄ burns completely (CH₄ = 16.04 g/mol, CO₂ = 44.01 g/mol)?
3. Why can't you convert grams of A directly to grams of B?
4. What volume of 0.100 M NaOH is needed to neutralize 25.0 mL of 0.200 M HCl (1:1 ratio)?
5. In \(\mathrm{N_2 + 3\,H_2 \rightarrow 2\,NH_3}\), which reactant is limiting when 2.0 mol N₂ and 4.0 mol H₂ are mixed?
6. Write the four-step roadmap for any stoichiometry problem.

<details>
<summary>Show answers</summary>

1. \(3.0\ \text{mol O}_2 \times \frac{2\ \text{mol H}_2\text{O}}{1\ \text{mol O}_2} = 6.0\ \text{mol H}_2\text{O}\).
2. \(10.0\ \text{g CH}_4 \times \frac{1\ \text{mol CH}_4}{16.04\ \text{g}} \times \frac{1\ \text{mol CO}_2}{1\ \text{mol CH}_4} \times \frac{44.01\ \text{g CO}_2}{1\ \text{mol CO}_2} = 27.4\ \text{g CO}_2\).
3. Because moles, not grams, are related by the balanced equation. Grams must first be converted to moles (÷ molar mass), the mole ratio applied, then converted back (× molar mass). A direct gram-to-gram factor does not exist without the mole bridge.
4. Moles HCl = 0.0250 L × 0.200 mol/L = \(5.00 \times 10^{-3}\) mol; same moles NaOH needed (1:1); volume = \(5.00 \times 10^{-3}\) mol ÷ 0.100 mol/L = 0.0500 L = 50.0 mL.
5. H₂ is limiting: 2.0 mol N₂ needs 6.0 mol H₂ but only 4.0 mol are available. (Alternatively, H₂ could make at most 2.67 mol NH₃ while N₂ could make 4.0 mol; the smaller value wins.)
6. (1) Balance the equation; (2) convert given quantity to moles; (3) apply the mole ratio from the balanced equation; (4) convert moles of the wanted substance to the requested unit.

</details>

## Related Topics

- Previous: [Classifying Chemical Reactions](02-classifying-chemical-reactions.md)
- Next: [Reaction Yields](04-reaction-yields.md)
- Related: [Chapter 7: Stoichiometry of Chemical Reactions overview](../README.md)
- Related: [Reaction Yields](04-reaction-yields.md)
- Related: [Quantitative Chemical Analysis](05-quantitative-chemical-analysis.md)
- Related: [Molarity](../chapter-06-composition-of-substances-and-solutions/03-molarity.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Reference-values note: molar masses are commonly taught reference values based on standard atomic weights; use the periodic table provided in your course for graded work.
- Last updated: 2026-08-16
