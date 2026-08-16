---
title: "Acid and Base Strength"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "2: Polar Covalent Bonds; Acids and Bases"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "acid-and-base-strength"
  - "science"
status: "complete"
---

# Acid and Base Strength

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 2: Polar Covalent Bonds; Acids and Bases](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

Acid strength is measured by how far the dissociation equilibrium lies toward products — quantitatively, by \(K_a\) or \(pK_a\). This topic explains the structural factors that control \(pK_a\): the electronegativity of the atom bearing the proton, the strength of the H–X bond, the hybridization (s-character) of that atom, inductive effects from nearby substituents, resonance in the conjugate base, and the charge of the species. Because every base has a conjugate acid, base strength is simply the mirror image of acid strength: strong bases have weak conjugate acids, and the \(pK_a\) of the conjugate acid is the quantitative handle. The same factors that stabilize a conjugate base make the parent acid stronger, so one framework — "whatever stabilizes the conjugate base" — predicts nearly every acidity trend in the chapter and the book.

## Why This Matters

Predicting which proton comes off a molecule, and which base can remove it, is the core skill of organic synthesis and mechanism. Choosing a base for a deprotonation (lithium diisopropylamide vs. sodium hydroxide vs. bicarbonate) is a \(pK_a\) decision; estimating whether a reaction's equilibrium lies left or right is a \(pK_a\) comparison. In biology and medicine, acid–base strength governs drug ionization and absorption, enzyme active-site protonation states, and buffer systems in blood. The same reasoning also explains why carboxylic acids are acidic but alcohols are not, and why phenols are more acidic than alcohols — two facts that appear constantly in later chapters on carbonyl chemistry and aromatic compounds.

## Core Concepts

### The pKa scale

The acid-dissociation constant for \(\text{HA}\) in water is \(K_a = [\text{H}_3\text{O}^+][\text{A}^-]/[\text{HA}]\), and \(pK_a = -\log_{10} K_a\). The \(pK_a\) scale runs from about −10 (superacids) to 50 (alkanes). Rule of thumb: a change of one \(pK_a\) unit is a tenfold change in \(K_a\); a change of five units is a \(10^5\)-fold change. Representative values: HCl ≈ −7, \(\text{H}_3\text{O}^+\) ≈ −1.74, HF ≈ 3.2, \(\text{CH}_3\text{COOH}\) ≈ 4.74, \(\text{NH}_4^+\) ≈ 9.3, phenol ≈ 10, water ≈ 15.7, ethanol ≈ 16, terminal alkyne ≈ 25, ammonia ≈ 38, alkane ≈ 50.

### Factor 1: Electronegativity of the atom holding the proton

Across a row, acidity increases with electronegativity because a more electronegative atom holds the negative charge of the conjugate base better: \(\text{CH}_4\) (\(pK_a\) ≈ 50) < \(\text{NH}_3\) (38) < \(\text{H}_2\text{O}\) (15.7) < \(\text{HF}\) (3.2).

### Factor 2: Bond strength down a group

Down a column, electronegativity decreases but bond strength drops even faster; the weaker the H–X bond, the easier the proton leaves: \(\text{HF}\) (3.2) < \(\text{HCl}\) (−7) < \(\text{HBr}\) (−9) < \(\text{HI}\) (−10). Bond strength, not electronegativity, dominates this trend.

### Factor 3: Hybridization and s-character

A carbon with more s-character in its hybrid orbitals is more electronegative: \(sp > sp^2 > sp^3\). Thus terminal alkynes (\(sp\), \(pK_a\) ≈ 25) are much more acidic than alkenes (\(sp^2\), ≈ 44) and alkanes (\(sp^3\), ≈ 50). This is why acetylide ions exist and are used to build carbon–carbon bonds, while alkyl anions are essentially unattainable under normal conditions.

### Factor 4: Inductive effects

An electronegative substituent near the acidic proton withdraws electron density and stabilizes the conjugate base, raising acidity. Substituted acetic acids illustrate the effect: \(\text{CH}_3\text{COOH}\) \(pK_a\) ≈ 4.74, \(\text{ClCH}_2\text{COOH}\) ≈ 2.86, \(\text{Cl}_2\text{CHCOOH}\) ≈ 1.29, \(\text{Cl}_3\text{CCOOH}\) ≈ 0.64. Each added chlorine lowers the \(pK_a\) by roughly 1.5–2 units, and the effect fades with distance (β-chloro acids are weaker than α-chloro acids).

### Factor 5: Resonance in the conjugate base

If the conjugate base can delocalize its negative charge, the acid is dramatically stronger. Carboxylic acids (\(pK_a\) ≈ 4.74) beat alcohols (\(pK_a\) ≈ 16) by about eleven orders of magnitude because the carboxylate anion spreads the charge over two equivalent oxygens, while an alkoxide holds it on one. Phenol (\(pK_a\) ≈ 10) beats ethanol (16) because phenoxide delocalizes the charge into the ring. Resonance is the strongest of the stabilizing effects for common organic acids.

### Factor 6: Charge

Charged acids are much stronger than their neutral relatives: \(\text{H}_3\text{O}^+\) (−1.74) vs. \(\text{H}_2\text{O}\) (15.7); \(\text{NH}_4^+\) (9.3) vs. \(\text{NH}_3\) (38). A positive charge destabilizes the acid form relative to the neutral conjugate base, pushing dissociation forward.

### Base strength

Base strength is the inverse of the \(pK_a\) of the conjugate acid: a base whose conjugate acid has a high \(pK_a\) is a strong base. Ranking common bases: \(\text{NH}_2^-\) (conjugate acid \(pK_a\) ≈ 38) and \(\text{CH}_3\text{CH}_2\text{O}^-\) (16) are strong; \(\text{OH}^-\) (15.7) moderate-strong; \(\text{CH}_3\text{COO}^-\) (4.74) weak; \(\text{Cl}^-\) (−7) very weak. The same structural factors apply with the sign flipped: stabilize the conjugate acid, and the base gets stronger.

## ELI-10: Explain Like I'm 10

> Acid strength is like how easily a toy lets go of a marble. An acid that holds its proton loosely is strong, and one that grips it tightly is weak. What matters most is how comfortable the empty hand (the conjugate base) is after the marble leaves: the more ways it can spread the leftover charge — over hungrier atoms, through nearby helpers, or across a whole chain of atoms — the happier it is, and the easier the acid lets go.

## High-Yield Points

- Smaller \(pK_a\) = stronger acid; one \(pK_a\) unit = tenfold change in \(K_a\).
- Across a row: acidity rises with electronegativity (CH4 < NH3 < H2O < HF).
- Down a group: acidity rises as the H–X bond strength falls (HF < HCl < HBr < HI).
- More s-character = more acidic C–H: alkyne (25) > alkene (44) > alkane (50).
- Inductive withdrawal stabilizes conjugate bases: Cl3CCOOH (0.64) ≫ CH3COOH (4.74).
- Resonance beats induction: carboxylic acids (4.74) are ~10¹¹ times more acidic than alcohols (16).
- Charged acids are far stronger: H3O+ (−1.74) vs. H2O (15.7).
- Base strength is the mirror image: a strong base ⇄ a conjugate acid with high \(pK_a\).
- One framework unifies everything: factors that stabilize the conjugate base strengthen the acid.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| \(pK_a\) | Negative base-10 log of \(K_a\); smaller value = stronger acid. | The standard quantitative acidity scale. |
| conjugate base | The acid minus its proton; its stability determines acid strength. | The single best predictor of acidity. |
| electronegativity | An atom's pull on shared electrons. | Sets row trends: HF > H2O > NH3 > CH4. |
| bond dissociation energy | Energy needed to break a bond; weaker H–X bond = stronger acid. | Explains column trends: HI > HBr > HCl > HF. |
| s-character | Fraction of s-orbital character in a hybrid orbital. | More s-character = more electronegative carbon = more acidic C–H. |
| inductive effect | Electron withdrawal through σ bonds by electronegative atoms. | Extra chlorines on acetic acid raise acidity by ~2 units each. |
| resonance stabilization | Delocalization of charge in the conjugate base. | The dominant factor: carboxylates vs. alkoxides. |
| strong vs. weak base | Determined by the \(pK_a\) of the base's conjugate acid. | Guides reagent choice for deprotonations. |

## Example 1: Why Acetic Acid Is Much Stronger than Ethanol

Compare acetic acid, \(\text{CH}_3\text{COOH}\), \(pK_a\) ≈ 4.74, with ethanol, \(\text{CH}_3\text{CH}_2\text{OH}\), \(pK_a\) ≈ 16. Both donate a proton from an O–H bond, so electronegativity and bond strength are equal. The difference is in the conjugate bases. Ethoxide, \(\text{CH}_3\text{CH}_2\text{O}^-\), holds the entire negative charge on one oxygen. Acetate, \(\text{CH}_3\text{COO}^-\), spreads the same charge over two equivalent oxygens through resonance. Because charge spread over two atoms is far more stable than charge confined to one, acetate is dramatically more stable, and acetic acid is about \(10^{11}\) times more acidic:

\[
\frac{K_a(\text{CH}_3\text{COOH})}{K_a(\text{CH}_3\text{CH}_2\text{OH})} = 10^{(pK_a(\text{EtOH}) - pK_a(\text{AcOH}))} = 10^{(16 - 4.74)} = 10^{11.26} \approx 1.8 \times 10^{11}
\]

Rule of thumb: a \(pK_a\) gap of 11 units is an 11-order-of-magnitude gap in the equilibrium constant.

## Example 2: Ranking Halogen Acids and Predicting a Deprotonation

Rank the hydrohalic acids by strength using bond energy. The H–X bond dissociation energies fall down the group (H–F is strongest, H–I weakest), so acidity rises: \(\text{HI}\) (−10) > \(\text{HBr}\) (−9) > \(\text{HCl}\) (−7) > \(\text{HF}\) (3.2). Now predict whether \(\text{Cl}^-\) can deprotonate acetic acid. \(\text{Cl}^-\) is the conjugate base of HCl, whose \(pK_a\) is −7, so chloride is a very weak base. Acetic acid has \(pK_a\) 4.74. The equilibrium

\[
\text{CH}_3\text{COOH} + \text{Cl}^- \rightleftharpoons \text{CH}_3\text{COO}^- + \text{HCl}
\]

compares two acids: acetic acid (4.74) is a far weaker acid than HCl (−7), so the reaction does not proceed — chloride cannot deprotonate acetic acid. General rule: the base whose conjugate acid has the higher \(pK_a\) wins, and equilibrium favors the weaker acid and weaker base.

## Example 3: Quantifying Acidity with Ka and pKa

The \(pK_a\) of acetic acid is 4.74 at 25 °C. Convert to \(K_a\):

\[
K_a = 10^{-pK_a} = 10^{-4.74} = 1.8 \times 10^{-5}
\]

The value \(1.8 \times 10^{-5}\) carries units of molarity (mol/L), matching the definition \(K_a = [\text{H}_3\text{O}^+][\text{A}^-]/[\text{HA}]\), where the numerator units M × M divide by the denominator M to give M. Now estimate the pH of a \(0.10\ \text{M}\) acetic acid solution. With \(x = [\text{H}_3\text{O}^+]\), the equilibrium expression is:

\[
K_a = \frac{x^2}{0.10 - x} \approx \frac{x^2}{0.10}
\]

Solving:

\[
x = \sqrt{K_a \times 0.10\ \text{M}} = \sqrt{1.8 \times 10^{-5} \times 0.10\ \text{M}^2} = \sqrt{1.8 \times 10^{-6}\ \text{M}^2} = 1.3 \times 10^{-3}\ \text{M}
\]

Dimensional check: \(K_a\) (M) × concentration (M) = M², and the square root returns M. Then:

\[
\text{pH} = -\log_{10}(1.3 \times 10^{-3}) = 2.87
\]

A 0.10 M solution of a weak acid has pH near 3, far above the pH ≈ 1.0 that a 0.10 M strong acid would give — a direct demonstration of what "weak acid" means.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Strong acid | Concentrated acid | Strength is inherent (\(K_a\)); concentration is how much acid is in solution. |
| Large \(K_a\) | Large \(pK_a\) | Large \(K_a\) = strong; large \(pK_a\) = weak. They move in opposite directions. |
| Base strength | Nucleophilicity | Basicity is proton affinity (an equilibrium property); nucleophilicity is attack on carbon (a kinetic property) — discussed in later chapters. |
| Electronegativity trend | Bond-strength trend | Across a row electronegativity wins; down a group bond strength wins. |
| Resonance effect | Inductive effect | Resonance acts through π systems and does not fade with distance; induction acts through σ bonds and fades with distance. |
| Hydroxide as strongest base | Alkoxide/amide bases | Hydroxide's conjugate acid is water (15.7); alkoxides (16) and amide ion (38) are stronger bases. |

## Quick Review

1. Rank \(\text{H}_2\text{O}\), \(\text{HF}\), \(\text{NH}_3\), and \(\text{CH}_4\) by increasing acid strength. Which factor explains the order?
2. Why is \(\text{HI}\) a stronger acid than \(\text{HF}\) even though iodine is less electronegative?
3. Why are terminal alkynes (\(pK_a\) ≈ 25) far more acidic than alkanes (\(pK_a\) ≈ 50)?
4. Why is acetic acid about \(10^{11}\) times more acidic than ethanol?
5. Which is the stronger base, \(\text{Cl}^-\) or \(\text{CH}_3\text{COO}^-\)? Explain using the \(pK_a\) of the conjugate acids.
6. What is \(K_a\) for an acid with \(pK_a = 4.74\)?

<details>
<summary>Show answers</summary>

1. \(\text{CH}_4\) (50) < \(\text{NH}_3\) (38) < \(\text{H}_2\text{O}\) (15.7) < \(\text{HF}\) (3.2); the electronegativity of the atom bearing the proton.
2. The H–I bond is much weaker than H–F, so the proton leaves more easily; bond strength dominates down a group.
3. The \(sp\) hybrid carbon has more s-character and is more electronegative, better stabilizing the acetylide conjugate base.
4. The acetate conjugate base is resonance-stabilized over two oxygens, while ethoxide confines the charge to one oxygen.
5. \(\text{CH}_3\text{COO}^-\) is the stronger base: its conjugate acid has \(pK_a\) 4.74, far above HCl's −7; a higher conjugate-acid \(pK_a\) means a stronger base.
6. \(K_a = 10^{-4.74} = 1.8 \times 10^{-5}\ \text{M}\).

</details>

## Related Topics

- Previous: [Acids and Bases: The Brønsted–Lowry Definition](07-acids-and-bases-the-br-nsted-lowry-definition.md)
- Next: [Predicting Acid–Base Reactions from pKa Values](09-predicting-acid-base-reactions-from-pka-values.md)
- Related: [Organic Acids and Organic Bases](10-organic-acids-and-organic-bases.md)
- Related: [Polar Covalent Bonds; Acids and Bases chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
- Science note: \(pK_a\) values cited (HCl −7, H3O+ −1.74, HF 3.2, acetic acid 4.74, chloroacetic acids 2.86/1.29/0.64, NH4+ 9.3, phenol 10, water 15.7, ethanol 16, alkyne 25, NH3 38, alkane 50) are standard textbook values; no experimental data were fabricated.
