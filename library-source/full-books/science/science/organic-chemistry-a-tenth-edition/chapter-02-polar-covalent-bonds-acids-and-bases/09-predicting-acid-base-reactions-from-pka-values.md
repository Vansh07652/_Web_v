---
title: "Predicting Acid–Base Reactions from pKa Values"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "2: Polar Covalent Bonds; Acids and Bases"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "predicting-acid-base-reactions-from-pka-values"
  - "science"
status: "complete"
---

# Predicting Acid–Base Reactions from pKa Values

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 2: Polar Covalent Bonds; Acids and Bases](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

Every acid–base reaction is an equilibrium, and the single most useful number for predicting where that equilibrium lies is the **pKa** — a logarithmic measure of acid strength defined as \( \text{p}K_a = -\log K_a \). The lower the pKa, the stronger the acid; the higher the pKa, the weaker the acid and the more reluctant the molecule is to surrender a proton. Because pKa values of thousands of compounds are tabulated, you can predict the outcome of almost any proton-transfer reaction without running it: **the equilibrium always favors the side with the weaker acid (and the weaker base)**. In quantitative form, the equilibrium constant is \( K_{eq} = 10^{(\text{p}K_a^{\text{acid on product side}} - \text{p}K_a^{\text{acid on reactant side}})} \). A pKa gap of about 10 units corresponds to an equilibrium constant of \( 10^{10} \), which means the reaction is essentially complete. This topic turns memorized acid strength lists into a predictive tool you can apply to any new molecule.

## Why This Matters

- **Reagent selection in the lab:** choosing a base strong enough to deprotonate a given substrate is a routine synthetic decision. For example, terminal alkynes (\( \text{p}K_a \approx 25 \)) require sodium amide, \( \text{NaNH}_2 \), not aqueous sodium hydroxide, because water (\( \text{p}K_a = 15.7 \)) is too weak an acid to be pushed to completion by hydroxide.
- **Drug behavior in the body:** whether a drug is ionized or neutral at physiological pH controls absorption, distribution, and excretion. The pKa of aspirin (\( \approx 3.5 \)) explains why it crosses the stomach lining in its neutral form.
- **Mechanistic reasoning:** most organic mechanisms contain proton-transfer steps, and knowing which side a proton transfer favors is often the deciding step between two plausible pathways.
- **Exams:** pKa prediction problems appear in almost every organic chemistry assessment, and the "weaker acid wins" rule is the fastest route to the answer.

## Core Concepts

### pKa measures acid strength on a logarithmic scale

Acid strength is quantified by the equilibrium constant for dissociation in water:

\[ \text{HA} + \text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{A}^- \qquad K_a = \frac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]} \]

Because \( K_a \) values range over many orders of magnitude, chemists compress the scale: \( \text{p}K_a = -\log K_a \). A difference of one pKa unit means a tenfold difference in \( K_a \) — and therefore a tenfold difference in the equilibrium constant of a proton-transfer reaction. Useful reference points: hydronium ion, \( \text{p}K_a = -1.74 \); acetic acid, 4.76; phenol, about 10; water, 15.7; ethanol, about 16; terminal alkyne, about 25; ammonia, about 38; alkane, about 50.

### The fundamental rule: the weaker acid (and weaker base) wins

Consider a general proton transfer, where \( \text{HB}^+ \) is the conjugate acid of the base \( \text{B} \):

\[ \text{HA} + \text{B} \rightleftharpoons \text{A}^- + \text{HB}^+ \]

The equilibrium constant is the ratio of the two acidity constants:

\[ K_{eq} = \frac{K_a(\text{HA})}{K_a(\text{HB}^+)} = 10^{\, \text{p}K_a(\text{HB}^+) - \text{p}K_a(\text{HA})} \]

If \( \text{p}K_a(\text{HB}^+) > \text{p}K_a(\text{HA}) \), then \( K_{eq} > 1 \) and products are favored — meaning **the acid on the product side (HB⁺) is the weaker acid**. The rule in words: proton transfer proceeds from the stronger acid and stronger base toward the weaker acid and weaker base. The stronger acid and the stronger base always sit on the same side of the equation.

### Rules of thumb for pKa gaps

- **\( \Delta \text{p}K_a \ge 10 \):** essentially complete (better than 99.99% conversion; \( K_{eq} \ge 10^{10} \)).
- **\( \Delta \text{p}K_a \) of 3–9:** strongly favorable, usually usable for synthesis.
- **\( \Delta \text{p}K_a \) of 0–2:** a real mixture of both sides; the reaction is not a clean way to make products.
- **Negative \( \Delta \text{p}K_a \):** the reaction runs in the reverse direction; the "products" written are actually the reactants.

### From pKa to ionization state: the Henderson–Hasselbalch equation

For a weak acid \( \text{HA} \) in a solution of known pH:

\[ \text{pH} = \text{p}K_a + \log \frac{[\text{A}^-]}{[\text{HA}]} \]

At \( \text{pH} = \text{p}K_a \), the acid is 50% ionized. At \( \text{pH} \) one unit above the pKa, about 91% is ionized; one unit below, about 91% is neutral. This relationship lets you predict whether a molecule exists as a neutral species or a charged ion at any biological or laboratory pH — the key to solubility and membrane-crossing behavior.

## ELI-10: Explain Like I'm 10

> Imagine every acid has a number that says how badly it wants to give away a hydrogen atom: small number = really wants to give it away, big number = holding on tight. When two acids face off, the one that wants the hydrogen *less* (the bigger number) ends up with it. So the "winner" of an acid–base fight is the weaker acid — the one that's happiest to hold the hydrogen — and the stronger acid is forced to give its hydrogen away.

## High-Yield Points

- Lower pKa = stronger acid; each pKa unit = 10× in equilibrium constant.
- **The reaction always favors the weaker acid and weaker base**; stronger acid and stronger base are on the same side.
- \( K_{eq} = 10^{\, \text{p}K_a(\text{product acid}) - \text{p}K_a(\text{reactant acid})} \) — show the formula, then substitute.
- \( \Delta \text{p}K_a \ge 10 \) → essentially complete; 3–9 → favorable; 0–2 → mixture; negative → reverse direction.
- Common reference pKas: \( \text{H}_3\text{O}^+ \) −1.74; acetic acid 4.76; phenol ~10; water 15.7; ethanol ~16; terminal alkyne ~25; ammonia ~38.
- Henderson–Hasselbalch: \( \text{pH} = \text{p}K_a + \log([\text{A}^-]/[\text{HA}]) \); at pH = pKa the acid is half-ionized.
- Conjugate acid–base pairs: a strong acid has a weak conjugate base and vice versa.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| pKa | \( -\log K_a \); a number that measures how easily an acid donates a proton (lower = stronger acid) | The universal yardstick for predicting proton-transfer equilibria |
| Ka | Equilibrium constant for acid dissociation in water | Its logarithm is pKa; it quantifies intrinsic acid strength |
| Equilibrium constant (Keq) | Ratio of product to reactant concentrations at equilibrium | Tells you whether a reaction "goes" and how far |
| Stronger acid | Species with the lower pKa; donates protons readily | Always reacts to form the weaker acid (higher pKa) |
| Weaker acid | Species with the higher pKa; holds protons tightly | The side favored at equilibrium — "the winner" |
| Conjugate acid–base pair | Two species that differ by one proton (e.g., \( \text{CH}_3\text{COOH} \) / \( \text{CH}_3\text{COO}^- \)) | Every acid has a conjugate base; the pair's pKa is the same number viewed from either side |
| Henderson–Hasselbalch equation | \( \text{pH} = \text{p}K_a + \log([\text{A}^-]/[\text{HA}]) \) | Predicts ionization state of a weak acid at any pH — central to drug absorption and buffer design |

## Worked Examples

### Example 1: Is sodium hydroxide enough to deprotonate acetic acid?

**Problem:** Predict whether \( \text{CH}_3\text{COOH} + \text{NaOH} \) goes to completion in water.

**Plan and formula:** identify the acid on each side. The reactant acid is acetic acid, \( \text{p}K_a = 4.76 \). The base is hydroxide; its conjugate acid is water, \( \text{p}K_a = 15.7 \). Then:

\[ K_{eq} = 10^{\, \text{p}K_a(\text{water}) - \text{p}K_a(\text{acetic acid})} = 10^{\, 15.7 - 4.76} = 10^{10.94} \approx 8.7 \times 10^{10} \]

**Interpretation:** with \( K_{eq} \approx 10^{11} \), the deprotonation of acetic acid by hydroxide is essentially complete — vinegar is fully neutralized by a stoichiometric amount of NaOH, which is why \( \text{CH}_3\text{COO}^- \text{Na}^+ \) (sodium acetate) is easy to isolate.

### Example 2: Which base can deprotonate a terminal alkyne — hydroxide or amide?

**Problem:** Acetylene, \( \text{HC}\equiv\text{CH} \), has \( \text{p}K_a \approx 25 \). Which reagent generates the acetylide ion: aqueous NaOH (\( \text{p}K_a \) of water = 15.7) or \( \text{NaNH}_2 \) (\( \text{p}K_a \) of ammonia = 38)?

**Plan and formula:** compute \( K_{eq} \) for each candidate base using the same formula, substituting the conjugate acid of each base:

\[ K_{eq}(\text{OH}^-) = 10^{\, 15.7 - 25} = 10^{-9.3} \approx 5 \times 10^{-10} \qquad \text{(reactants favored; negligible reaction)} \]

\[ K_{eq}(\text{NH}_2^-) = 10^{\, 38 - 25} = 10^{13} \qquad \text{(products favored; essentially complete)} \]

**Interpretation:** hydroxide in water cannot deprotonate a terminal alkyne — the equilibrium constant is \( 10^{-9.3} \), meaning almost no acetylide forms. Sodium amide, however, drives the reaction to completion because ammonia (\( \text{p}K_a \) 38) is a much weaker acid than the alkyne. This is exactly why \( \text{NaNH}_2 \) in liquid ammonia is the standard reagent for making acetylide anions for carbon–carbon bond formation.

### Example 3: Why is aspirin absorbed in the stomach?

**Problem:** Aspirin (acetylsalicylic acid) has \( \text{p}K_a \approx 3.5 \). Compare its ionization in the stomach (\( \text{pH} \approx 2 \)) and in the blood (\( \text{pH} \approx 7.4 \)).

**Plan and formula:** use the Henderson–Hasselbalch equation to find the ratio of ionized to neutral forms at each pH:

\[ \log \frac{[\text{A}^-]}{[\text{HA}]} = \text{pH} - \text{p}K_a \]

**Substitution (stomach, pH 2):**

\[ \log \frac{[\text{A}^-]}{[\text{HA}]} = 2 - 3.5 = -1.5 \qquad \Rightarrow \qquad \frac{[\text{A}^-]}{[\text{HA}]} = 10^{-1.5} \approx 0.032 \]

Only about 3% is ionized — 97% of aspirin is the neutral, lipid-soluble form that crosses the stomach lining. **Substitution (blood, pH 7.4):**

\[ \log \frac{[\text{A}^-]}{[\text{HA}]} = 7.4 - 3.5 = 3.9 \qquad \Rightarrow \qquad \frac{[\text{A}^-]}{[\text{HA}]} = 10^{3.9} \approx 8000 \]

**Interpretation:** in blood the drug is essentially fully ionized (charged carboxylate), which keeps it trapped on the blood side of membranes — a classic example of "ion trapping" driven by pKa and pH.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| pKa | pH | pKa is a property of the acid (how easily it donates a proton); pH is a property of the solution (its current proton concentration). |
| Stronger acid = larger pKa | Stronger acid = smaller pKa | The scale is inverted: lower pKa means a stronger acid. |
| Acid on the product side | Acid on the reactant side | Equilibrium favors the *weaker* acid, which is the one with the higher pKa — always check which side has the higher pKa. |
| \( K_{eq} \) | \( K_a \) | \( K_a \) describes one acid's dissociation; \( K_{eq} \) describes the whole proton-transfer reaction and is a ratio of two \( K_a \) values. |
| Using the pKa of the base | Using the pKa of the base's conjugate acid | When a base like \( \text{NH}_2^- \) is a reactant, substitute the pKa of its conjugate acid (\( \text{NH}_3 \), 38) — not the pKa of \( \text{NH}_4^+ \) (9.24). |
| \( \Delta \text{p}K_a = 1 \) means slightly favorable | \( \Delta \text{p}K_a = 1 \) gives \( K_{eq} = 10 \) | One pKa unit = factor of 10 in \( K_{eq} \), which is a meaningful but not overwhelming drive; reactions with \( \Delta \text{p}K_a \) near zero are mixtures. |

## Quick Review

1. A reaction has a reactant acid with \( \text{p}K_a = 5 \) and a base whose conjugate acid has \( \text{p}K_a = 20 \). Does the reaction favor products or reactants? Compute \( K_{eq} \).
2. Explain in one sentence why a strong acid has a weak conjugate base.
3. At what pH is a weak acid with \( \text{p}K_a = 5.0 \) exactly 50% ionized? What fraction is ionized at \( \text{pH} = 6.0 \)?
4. Can \( \text{NaHCO}_3 \) (\( \text{p}K_a \) of \( \text{H}_2\text{CO}_3 \) ≈ 6.4) deprotonate a phenol (\( \text{p}K_a \) ≈ 10)? Show the \( K_{eq} \) calculation.
5. Why does \( \text{NaNH}_2 \) deprotonate terminal alkynes while aqueous \( \text{NaOH} \) does not?

<details>
<summary>Show answers</summary>

1. Favor products. \( K_{eq} = 10^{\, 20 - 5} = 10^{15} \) — the weaker acid on the product side (conjugate acid of the base, pKa 20) wins overwhelmingly.
2. A strong acid ionizes almost completely, so its conjugate base has essentially no tendency to grab a proton back — a weak base.
3. 50% ionized at \( \text{pH} = \text{p}K_a = 5.0 \). At pH 6.0: \( \log([\text{A}^-]/[\text{HA}]) = 6.0 - 5.0 = 1.0 \), so \( [\text{A}^-]/[\text{HA}] = 10 \), meaning 10/11 ≈ 91% ionized.
4. \( K_{eq} = 10^{\, 6.4 - 10} = 10^{-3.6} \approx 2.5 \times 10^{-4} \) — reactants favored; bicarbonate is far too weak a base to deprotonate phenol appreciably.
5. The equilibrium constant scales with \( \Delta \text{p}K_a \): amide gives \( 10^{13} \) (complete), hydroxide gives \( 10^{-9.3} \) (negligible), because water (15.7) is a much stronger acid than ammonia (38), so hydroxide's conjugate acid is too strong for the equilibrium to favor acetylide.

</details>

## Related Topics

- Previous: [Acid and Base Strength](08-acid-and-base-strength.md)
- Next: [Organic Acids and Organic Bases](10-organic-acids-and-organic-bases.md)
- Related: [Acids and Bases: The Brønsted–Lowry Definition](07-acids-and-bases-the-br-nsted-lowry-definition.md), [Polar Covalent Bonds; Acids and Bases chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Reference pKa values (acetic acid 4.76, water 15.7, ammonia 38, acetylene ~25, aspirin ~3.5) are standard textbook values; verify against current primary sources before formal citation.
- Last updated: 2026-08-16
