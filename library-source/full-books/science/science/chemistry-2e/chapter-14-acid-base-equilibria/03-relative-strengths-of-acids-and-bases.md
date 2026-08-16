---
title: "Relative Strengths of Acids and Bases"
subject: "Science"
book: "Chemistry 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "relative-strengths-of-acids-and-bases"
  - "science"
status: "complete"
---

# Relative Strengths of Acids and Bases

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Not every acid or base is equally aggressive. A **strong acid** such as hydrochloric acid transfers essentially all of its protons to water, while a **weak acid** such as acetic acid transfers only a tiny fraction. This difference is not about how much acid you pour into a beaker — it is an intrinsic property of each molecule, measured with equilibrium constants. This topic builds the quantitative "strength ladder": the acid ionization constant \(K_a\), the base ionization constant \(K_b\), and their logarithmic relatives \(pK_a\) and \(pK_b\). Once you can rank acids and bases, you can predict reaction direction, salt-solution pH, and buffer behavior.

## Why This Matters

Acid strength decides the outcome of countless real processes. In your body, the conjugate pair \(\mathrm{HCO_3^-}/\mathrm{H_2CO_3}\) keeps blood pH near 7.4; the relative strengths of its members determine how much base the blood can absorb. In food preservation, weak acids like citric and acetic acid are gentle enough to eat yet still stop bacterial growth. In the lab, strong acids give fast, complete reactions, while weak acids are chosen when a controlled, partial reaction is safer. Exams lean heavily on strength comparisons, so ranking acids and predicting reaction direction from \(K_a\) or \(pK_a\) are routine.

## Core Concepts

### The acid ionization constant measures strength

When a weak acid \(\mathrm{HA}\) dissolves in water, it establishes an equilibrium with water acting as the base:

\[
\mathrm{HA}(aq) + \mathrm{H_2O}(l) \rightleftharpoons \mathrm{H_3O^+}(aq) + \mathrm{A^-}(aq)
\]

The equilibrium constant for this proton transfer is the **acid ionization constant**:

\[
K_a = \frac{[\mathrm{H_3O^+}][\mathrm{A^-}]}{[\mathrm{HA}]}
\]

A larger \(K_a\) means the equilibrium lies further toward products — more of the acid has donated its proton — so the acid is stronger. Strong acids such as HCl have \(K_a\) values so large that we treat their ionization as complete. Weak acids have small \(K_a\) values; acetic acid, for example, has \(K_a = 1.8\times10^{-5}\). The base analog is \(K_b\), the equilibrium constant for a base abstracting a proton from water; ammonia has \(K_b = 1.8\times10^{-5}\).

### Conjugate pairs are locked together

Every acid has a conjugate base (what remains after proton loss), and the two are linked by water's autoionization constant:

\[
K_a(\mathrm{HA}) \times K_b(\mathrm{A^-}) = K_w = 1.0\times10^{-14} \quad \text{at } 25^\circ\mathrm{C}
\]

This relationship explains a famous pattern: **the stronger the acid, the weaker its conjugate base.** Because HCl is strong, \(\mathrm{Cl^-}\) is a non-basic spectator; because acetic acid is weak, its conjugate base \(\mathrm{CH_3COO^-}\) is noticeably basic (see [Hydrolysis of Salts](04-hydrolysis-of-salts.md)). The same rule applies to bases: a strong base like \(\mathrm{OH^-}\) has a feeble conjugate acid, water.

### The pK_a scale: a log ladder for quick ranking

Because \(K_a\) values span many orders of magnitude, chemists compress the ladder with a logarithm:

\[
pK_a = -\log K_a
\]

Smaller \(pK_a\) means stronger acid: \(\mathrm{HCl}\) has \(pK_a \approx -7\), acetic acid \(pK_a = 4.74\), and water \(pK_a = 14\). The log form also simplifies the conjugate relationship at 25 °C:

\[
pK_a + pK_b = 14
\]

so \(\mathrm{NH_4^+}\) (\(pK_a = 9.25\)) pairs with ammonia (\(pK_b = 4.75\)).

### Structural trends in acid strength

Two trends let you rank acids without a table. **Down a group** (HF, HCl, HBr, HI), the H–X bond lengthens and weakens, so acidity increases: \(\mathrm{HF} < \mathrm{HCl} < \mathrm{HBr} < \mathrm{HI}\). HF is the only weak one of the four despite fluorine's electronegativity, because the H–F bond is unusually strong. **Across a period** (CH₄, NH₃, H₂O, HF), the atom holding the proton becomes more electronegative, so acidity increases. **Oxyacids** follow a third pattern: more oxygen atoms spread negative charge better and strengthen the acid, so \(\mathrm{HClO_4} > \mathrm{HClO_3} > \mathrm{HClO_2} > \mathrm{HClO}\).

## ELI-10: Explain Like I'm 10

> Some acids give away their proton almost instantly; others only pass it along once in a while. We rank them by counting how often they give it away — that is their "strength." If an acid is great at giving protons, its leftover partner is bad at taking them back. It has nothing to do with how much acid you have.

## High-Yield Points

- Large \(K_a\) = strong acid; small \(K_a\) = weak acid; same logic with \(K_b\) for bases.
- For any conjugate pair: \(K_a \times K_b = K_w = 1.0\times10^{-14}\) at 25 °C, so \(pK_a + pK_b = 14\).
- Smaller \(pK_a\) means a **stronger** acid — the sign inversion is a classic trap.
- Common strong acids: HCl, HBr, HI, HNO₃, H₂SO₄ (first proton), HClO₄.
- Stronger acid ⇄ weaker conjugate base; proton transfer favors the weaker acid and base.
- Strength ≠ concentration: a dilute strong acid can have a higher pH than a concentrated weak acid.
- Binary-acid strength increases down a group; oxyacid strength grows with more oxygen atoms.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| acid ionization constant, \(K_a\) | Equilibrium constant for an acid donating a proton to water; bigger = stronger acid. | Lets you rank acids numerically and compute pH of weak-acid solutions. |
| base ionization constant, \(K_b\) | Equilibrium constant for a base accepting a proton from water; bigger = stronger base. | Used to quantify weak bases like ammonia and to analyze salt solutions. |
| conjugate acid–base pair | Two species differing by one proton (e.g., \(\mathrm{NH_4^+}\)/\(\mathrm{NH_3}\)). | The pair's \(K_a\) and \(K_b\) multiply to \(K_w\); strength comparisons always use pairs. |
| \(pK_a\) | \(-\log K_a\); smaller value = stronger acid. | Quick mental ranking and the Henderson–Hasselbalch buffer equation. |
| strong acid | Acid that ionizes essentially completely in water. | Simplifies stoichiometry; no equilibrium calculation needed. |
| weak acid | Acid that ionizes only partially, leaving an equilibrium. | Requires ICE-table or \(K_a\) calculations; its conjugate base is active in water. |
| percent ionization | Fraction of weak-acid molecules that donate a proton, as a percentage. | Checks whether the small-\(x\) approximation is valid. |

## How It Works / Step-by-Step Process

1. Write the proton-transfer reaction and identify the two conjugate pairs involved.
2. Find the \(K_a\) (or \(pK_a\)) of each acid in the reaction from a table.
3. Identify which acid is stronger — the larger \(K_a\), or the smaller \(pK_a\).
4. The reaction proceeds so that the **stronger acid and stronger base are consumed**, producing the weaker acid and weaker base.
5. For weak-acid pH, set up an ICE table, apply \(K_a\), and check the 5% rule before using \(x \approx \sqrt{K_a C}\).

## Worked Examples

### Example 1: pH and percent ionization of acetic acid

Calculate the pH and percent ionization of a 0.10 M acetic acid solution (\(K_a = 1.8\times10^{-5}\)).

Write the equilibrium and the constant first:

\[
\mathrm{CH_3COOH}(aq) \rightleftharpoons \mathrm{H^+}(aq) + \mathrm{CH_3COO^-}(aq), \qquad
K_a = \frac{[\mathrm{H^+}][\mathrm{CH_3COO^-}]}{[\mathrm{CH_3COOH}]}
\]

Let \(x\) be the change in \([\mathrm{H^+}]\); then \([\mathrm{H^+}] = [\mathrm{CH_3COO^-}] = x\) and \([\mathrm{CH_3COOH}] = 0.10 - x\). Because \(K_a\) is small, try \(0.10 - x \approx 0.10\):

\[
K_a = \frac{x^2}{0.10 - x} \approx \frac{x^2}{0.10}
\]

\[
x = \sqrt{K_a \times 0.10} = \sqrt{(1.8\times10^{-5})(0.10)} = \sqrt{1.8\times10^{-6}} = 1.3\times10^{-3}\ \mathrm{M}
\]

\[
\mathrm{pH} = -\log(1.3\times10^{-3}) = 2.87
\]

Percent ionization:

\[
\% \text{ ionization} = \frac{[\mathrm{H^+}]}{[\mathrm{CH_3COOH}]_{\text{initial}}} \times 100 = \frac{1.3\times10^{-3}}{0.10} \times 100 = 1.3\%
\]

Since 1.3% < 5%, the approximation was valid. Only about 1 in 75 acetic acid molecules donates a proton — that is what "weak" means.

### Example 2: finding \(K_a\) of a conjugate acid from \(K_b\)

Ammonia has \(K_b = 1.8\times10^{-5}\). Find \(K_a\) of its conjugate acid \(\mathrm{NH_4^+}\). Write the conjugate relationship, then substitute:

\[
K_a(\mathrm{NH_4^+}) = \frac{K_w}{K_b(\mathrm{NH_3})} = \frac{1.0\times10^{-14}}{1.8\times10^{-5}} = 5.6\times10^{-10}
\]

So \(pK_a(\mathrm{NH_4^+}) = -\log(5.6\times10^{-10}) = 9.25\). Ammonium is a much weaker acid than acetic acid (\(K_a = 1.8\times10^{-5}\)) even though its parent base, ammonia, is respectable. Because both constants are defined against water's standard state, their numerical product equals \(K_w\) and they can be compared directly.

### Example 3: predicting reaction direction

Will acetic acid react with ammonia to a significant extent? Compare the acids on each side:

\[
\mathrm{CH_3COOH} + \mathrm{NH_3} \rightleftharpoons \mathrm{CH_3COO^-} + \mathrm{NH_4^+}
\]

Acids: \(\mathrm{CH_3COOH}\) (\(K_a = 1.8\times10^{-5}\)) vs. \(\mathrm{NH_4^+}\) (\(K_a = 5.6\times10^{-10}\)). Acetic acid is the stronger acid, so it is the proton donor, and the equilibrium lies far to the right — the weaker acid \(\mathrm{NH_4^+}\) and weaker base \(\mathrm{CH_3COO^-}\) are favored.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| "Strong acid" | "Concentrated acid" | Strength is \(K_a\), an intrinsic property; concentration is molarity. 0.0001 M HCl is strong but dilute. |
| Strong acid's conjugate base | A strong base | The conjugate base of a strong acid (e.g., \(\mathrm{Cl^-}\)) is essentially non-basic — a spectator ion. |
| Larger \(pK_a\) | Stronger acid | It is the opposite: smaller \(pK_a\) = stronger acid. |
| \(K_a \times K_b = K_w\) for any acid/base | Only for a **conjugate** pair | You cannot multiply the \(K_a\) of acetic acid by the \(K_b\) of ammonia. |
| HF as a strong acid because F is electronegative | HF is weak | The H–F bond is unusually strong; down-group hydrides (HCl, HBr, HI) are the strong ones. |

## Quick Review

1. Which is the stronger acid: one with \(K_a = 1.0\times10^{-2}\) or one with \(pK_a = 5\)?
2. If a weak acid has \(K_a = 4.0\times10^{-6}\), what is \(K_b\) of its conjugate base at 25 °C?
3. A solution of a weak acid HA is 0.25 M and has \(K_a = 1.6\times10^{-5}\). Estimate its pH using the approximation, and state why the approximation is valid.
4. Why is \(\mathrm{Cl^-}\) a spectator ion in water but \(\mathrm{CH_3COO^-}\) is not?
5. Arrange HF, HCl, HBr, HI from weakest to strongest acid and explain the trend.

<details>
<summary>Show answers</summary>

1. The one with \(K_a = 1.0\times10^{-2}\) (\(pK_a = 2\)); smaller \(pK_a\) = stronger acid.
2. \(K_b = K_w/K_a = (1.0\times10^{-14})/(4.0\times10^{-6}) = 2.5\times10^{-9}\).
3. \(x = \sqrt{(1.6\times10^{-5})(0.25)} = 2.0\times10^{-3}\) M, so pH ≈ 2.70. Valid because \(x/C = 0.8\% < 5\%\).
4. \(\mathrm{Cl^-}\) is the conjugate base of a strong acid, so its \(K_b\) is essentially zero; acetate's \(K_b = 5.6\times10^{-10}\) is large enough to react with water.
5. HF < HCl < HBr < HI. The H–X bond lengthens down the group, so the proton leaves more easily.

</details>

## Related Topics

- Previous: [pH and pOH](02-ph-and-poh.md)
- Next: [Hydrolysis of Salts](04-hydrolysis-of-salts.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
