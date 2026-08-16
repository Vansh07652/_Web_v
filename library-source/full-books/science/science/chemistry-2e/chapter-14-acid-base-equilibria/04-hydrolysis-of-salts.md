---
title: "Hydrolysis of Salts"
subject: "Science"
book: "Chemistry 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "hydrolysis-of-salts"
  - "science"
status: "complete"
---

# Hydrolysis of Salts

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A **salt** is an ionic compound formed when an acid and a base neutralize each other. Dissolve table salt (NaCl) in water and you get a neutral solution — but many salts do not. Sodium acetate gives a **basic** solution; ammonium chloride gives an **acidic** one. The reason is **hydrolysis**: one or both of the salt's ions react with water, transferring protons and disturbing the \([\mathrm{H^+}]/[\mathrm{OH^-}]\) balance. Which ions hydrolyze — and how strongly — depends on whether they came from strong or weak acids and bases.

## Why This Matters

Salt hydrolysis explains everyday chemistry: why soapy water feels slippery (basic), why ammonium nitrate cold packs work, and why gardeners use lime to sweeten acidic soil. In biology, the pH of body fluids depends on dissolved salts. On exams you will predict whether a salt solution is acidic, basic, or neutral and calculate its pH — a skill that also sets up equivalence-point pH in [Acid-Base Titrations](07-acid-base-titrations.md).

## Core Concepts

### The four source combinations

The acidity of a salt solution is set by its ions' parentage:

| Ion comes from | Example ions | Behavior in water |
|---|---|---|
| Strong acid (conjugate base of strong acid) | \(\mathrm{Cl^-}, \mathrm{NO_3^-}, \mathrm{Br^-}, \mathrm{I^-}, \mathrm{SO_4^{2-}}\) | Spectator — no reaction with water |
| Weak acid (conjugate base of weak acid) | \(\mathrm{CH_3COO^-}, \mathrm{CN^-}, \mathrm{F^-}, \mathrm{CO_3^{2-}}\) | Acts as a weak base; makes solution basic |
| Strong base (conjugate acid of strong base) | \(\mathrm{Na^+}, \mathrm{K^+}, \mathrm{Ca^{2+}}, \mathrm{Ba^{2+}}\) | Spectator — no reaction with water |
| Weak base (conjugate acid of weak base) | \(\mathrm{NH_4^+}, \mathrm{CH_3NH_3^+}\) | Acts as a weak acid; makes solution acidic |

Combining these: salt of **strong acid + strong base** → neutral (NaCl, KNO₃); **weak acid + strong base** → basic (NaCH₃COO, NaF); **strong acid + weak base** → acidic (NH₄Cl, NH₄NO₃); **weak acid + weak base** → depends on which constant is larger (compare \(K_a\) of the cation with \(K_b\) of the anion).

### Anion hydrolysis: why acetate makes water basic

Acetate is the conjugate base of weak acetic acid, so it is a real base in water:

\[
\mathrm{CH_3COO^-}(aq) + \mathrm{H_2O}(l) \rightleftharpoons \mathrm{CH_3COOH}(aq) + \mathrm{OH^-}(aq)
\]

The equilibrium constant for this reaction is the **base ionization constant of the anion**, obtained from the conjugate relationship:

\[
K_b(\mathrm{CH_3COO^-}) = \frac{K_w}{K_a(\mathrm{CH_3COOH})} = \frac{1.0\times10^{-14}}{1.8\times10^{-5}} = 5.6\times10^{-10}
\]

Producing \(\mathrm{OH^-}\) raises the pH above 7. The weaker the parent acid, the stronger its anion acts as a base: fluoride (\(K_a(\mathrm{HF}) = 6.3\times10^{-4}\), so \(K_b(\mathrm{F^-}) = 1.6\times10^{-11}\)) makes a less basic solution than acetate.

### Cation hydrolysis: why ammonium salts are acidic

Ammonium is the conjugate acid of weak base ammonia, so it donates a proton to water:

\[
\mathrm{NH_4^+}(aq) + \mathrm{H_2O}(l) \rightleftharpoons \mathrm{NH_3}(aq) + \mathrm{H_3O^+}(aq)
\]

with

\[
K_a(\mathrm{NH_4^+}) = \frac{K_w}{K_b(\mathrm{NH_3})} = \frac{1.0\times10^{-14}}{1.8\times10^{-5}} = 5.6\times10^{-10}
\]

Producing \(\mathrm{H_3O^+}\) lowers the pH below 7. Note that this is the same \(K_a\) value you computed for ammonium in the previous topic — hydrolysis is just the conjugate-strength idea applied to a salt.

### Salts of weak acid + weak base, and amphiprotic ions

When both ions hydrolyze, compare the numbers. For ammonium fluoride: \(K_a(\mathrm{NH_4^+}) = 5.6\times10^{-10}\) versus \(K_b(\mathrm{F^-}) = K_w/K_a(\mathrm{HF}) = 1.6\times10^{-11}\). The cation's acidity wins, so NH₄F is slightly acidic. Some ions can do either job: \(\mathrm{HCO_3^-}\) and \(\mathrm{H_2PO_4^-}\) are **amphiprotic**, able to accept or donate a proton. Their net effect is decided by comparing \(K_a\) and \(K_b\); for bicarbonate, basicity wins (\(K_b = K_w/K_{a1}(\mathrm{H_2CO_3}) = 2.3\times10^{-8}\) beats \(K_a = 5.6\times10^{-11}\)).

## ELI-10: Explain Like I'm 10

> A salt is like a team of two players: a "cation" and an "anion." Some players just stand around watching (the ones from strong acids and strong bases), while others quietly react with water — one kind makes the water more sour, the other more soapy. Check where each player came from: if both parents are strong, the water stays neutral; otherwise the weak parent's child changes the pH.

## High-Yield Points

- Neutral salts come from strong acid + strong base: NaCl, KBr, KNO₃, Na₂SO₄.
- Basic salts come from weak acid + strong base: the anion is a real base (acetate, fluoride, carbonate, cyanide).
- Acidic salts come from strong acid + weak base: the cation is a real acid (ammonium, alkylammonium).
- Weak acid + weak base salts: compare \(K_a\) of cation vs \(K_b\) of anion — the bigger constant wins.
- Hydrolysis constants come from conjugate pairs: \(K_b(\mathrm{A^-}) = K_w/K_a(\mathrm{HA})\), \(K_a(\mathrm{BH^+}) = K_w/K_b(\mathrm{B})\).
- Group 1/2 metal cations are spectators; \(\mathrm{OH^-}\) and \(\mathrm{O^{2-}}\) themselves make solutions strongly basic.
- A "salt of a strong acid" is not automatically acidic — the phrase means its anion is neutral.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| salt | Ionic compound from an acid–base neutralization. | Its ions decide whether a solution is acidic, basic, or neutral. |
| hydrolysis | Reaction of an ion with water that produces \(\mathrm{H_3O^+}\) or \(\mathrm{OH^-}\). | The mechanism behind non-neutral salt solutions. |
| spectator ion | Ion that does not react with water (conjugate of a strong acid or base). | Lets you ignore it and focus on the hydrolyzing ion. |
| amphiprotic ion | Ion that can act as either an acid or a base (\(\mathrm{HCO_3^-}\), \(\mathrm{H_2PO_4^-}\)). | Its net effect requires comparing its \(K_a\) and \(K_b\). |
| salt hydrolysis constant | \(K_b\) of a conjugate-base anion or \(K_a\) of a conjugate-acid cation. | The number you plug into an ICE table to find pH. |

## How It Works / Step-by-Step Process

1. Split the salt into its cation and anion.
2. Identify the parent acid of the anion and the parent base of the cation.
3. Classify each parent as strong or weak; label each ion spectator, acidic, or basic.
4. Predict the solution: spectator + spectator = neutral; basic anion present = basic; acidic cation present = acidic; both active = compare constants.
5. To find pH, write the hydrolysis reaction, compute the ion's \(K_a\) or \(K_b\) from the conjugate relationship, set up an ICE table, and solve (checking the 5% rule).

## Worked Examples

### Example 1: pH of sodium acetate

Calculate the pH of a 0.10 M sodium acetate solution.

Acetate hydrolyzes as a base; sodium is a spectator. First compute \(K_b\):

\[
K_b(\mathrm{CH_3COO^-}) = \frac{K_w}{K_a(\mathrm{CH_3COOH})} = \frac{1.0\times10^{-14}}{1.8\times10^{-5}} = 5.6\times10^{-10}
\]

Set up the ICE table for \(\mathrm{CH_3COO^-} + \mathrm{H_2O} \rightleftharpoons \mathrm{CH_3COOH} + \mathrm{OH^-}\). Let \(x = [\mathrm{OH^-}]\):

\[
K_b = \frac{[\mathrm{CH_3COOH}][\mathrm{OH^-}]}{[\mathrm{CH_3COO^-}]} = \frac{x^2}{0.10 - x} \approx \frac{x^2}{0.10}
\]

\[
x = \sqrt{K_b \times 0.10} = \sqrt{(5.6\times10^{-10})(0.10)} = \sqrt{5.6\times10^{-11}} = 7.5\times10^{-6}\ \mathrm{M}
\]

\[
\mathrm{pOH} = -\log(7.5\times10^{-6}) = 5.13, \qquad \mathrm{pH} = 14.00 - 5.13 = 8.87
\]

The solution is basic, as predicted. Check: \(x/C = 7.5\times10^{-5}\), far below 5%, so the approximation is valid.

### Example 2: pH of ammonium chloride

Calculate the pH of a 0.050 M NH₄Cl solution.

Ammonium hydrolyzes as an acid; chloride is a spectator. First compute \(K_a\):

\[
K_a(\mathrm{NH_4^+}) = \frac{K_w}{K_b(\mathrm{NH_3})} = \frac{1.0\times10^{-14}}{1.8\times10^{-5}} = 5.6\times10^{-10}
\]

For \(\mathrm{NH_4^+} + \mathrm{H_2O} \rightleftharpoons \mathrm{NH_3} + \mathrm{H_3O^+}\), let \(x = [\mathrm{H_3O^+}]\):

\[
K_a = \frac{x^2}{0.050 - x} \approx \frac{x^2}{0.050}
\]

\[
x = \sqrt{(5.6\times10^{-10})(0.050)} = \sqrt{2.8\times10^{-11}} = 5.3\times10^{-6}\ \mathrm{M}
\]

\[
\mathrm{pH} = -\log(5.3\times10^{-6}) = 5.28
\]

The solution is acidic, as predicted for a salt of a strong acid and weak base.

### Example 3: predicting without calculating

Classify these 0.10 M solutions as acidic, basic, or neutral: KNO₃, NaF, NH₄NO₃, NaHCO₃.

- **KNO₃:** K⁺ (spectator) + NO₃⁻ (spectator) → neutral.
- **NaF:** Na⁺ spectator + F⁻ (conjugate base of weak HF, \(K_b = 1.6\times10^{-11}\)) → basic.
- **NH₄NO₃:** NH₄⁺ (\(K_a = 5.6\times10^{-10}\)) + NO₃⁻ spectator → acidic.
- **NaHCO₃:** Na⁺ spectator; bicarbonate is amphiprotic. Compare \(K_b = K_w/K_{a1} = 2.3\times10^{-8}\) with \(K_a = K_{a2} = 5.6\times10^{-11}\). Since \(K_b > K_a\), the solution is basic (why baking soda solutions are slightly alkaline).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| "Salt of a strong acid" | "Acidic salt solution" | The phrase describes the anion's parent. NaCl is a salt of strong acid HCl yet is neutral. |
| Na⁺ hydrolyzing | K⁺/Na⁺ being active ions | Group 1/2 cations are spectators because their parent bases are strong; they do not react with water. |
| Salt dissolving | Salt hydrolyzing | Dissolving is just dispersal into ions; hydrolysis is a subsequent proton-transfer reaction with water. |
| Neutral solution pH = 7 | "Neutral" meaning no acid/base character | For salts, neutral means spectator ions only; pH stays 7 only at 25 °C (pure water pH shifts with temperature). |
| \(K_a\) of \(\mathrm{HCO_3^-}\) | \(K_{a1}\) of \(\mathrm{H_2CO_3}\) | Bicarbonate's acidity uses \(K_{a2}\) (5.6×10⁻¹¹); its basicity uses \(K_w/K_{a1}\). |

## Quick Review

1. Predict whether 0.10 M KCN is acidic, basic, or neutral. (For HCN, \(K_a = 4.9\times10^{-10}\).)
2. Why is Na₂SO₄ neutral even though sulfate carries a 2− charge?
3. A salt's cation is the conjugate acid of a weak base and its anion is the conjugate base of a weak acid. What determines whether the solution is acidic or basic?
4. Which solution has the higher pH: 0.10 M NaF or 0.10 M NaCH₃COO? (For HF, \(K_a = 6.3\times10^{-4}\); for acetic acid, \(K_a = 1.8\times10^{-5}\).)
5. Write the hydrolysis reaction for \(\mathrm{CO_3^{2-}}\) in water and identify the conjugate acid formed.

<details>
<summary>Show answers</summary>

1. Basic. K⁺ is a spectator; CN⁻ is the conjugate base of weak HCN with \(K_b = K_w/4.9\times10^{-10} = 2.0\times10^{-5}\), so it hydrolyzes to produce \(\mathrm{OH^-}\).
2. Both ions are conjugates of strong parents: Na⁺ of NaOH, SO₄²⁻ of HSO₄⁻/H₂SO₄ (a strong acid). Neither reacts with water, so pH stays ~7.
3. Compare \(K_a\) of the cation with \(K_b\) of the anion; the larger constant controls the pH. If they are equal, the solution is close to neutral.
4. Sodium acetate, because acetate has the larger \(K_b\) (\(5.6\times10^{-10}\) vs. \(1.6\times10^{-11}\) for fluoride) — the weaker the parent acid, the stronger the conjugate-base anion.
5. \(\mathrm{CO_3^{2-}} + \mathrm{H_2O} \rightleftharpoons \mathrm{HCO_3^-} + \mathrm{OH^-}\); the conjugate acid is bicarbonate.

</details>

## Related Topics

- Previous: [Relative Strengths of Acids and Bases](03-relative-strengths-of-acids-and-bases.md)
- Next: [Polyprotic Acids](05-polyprotic-acids.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
