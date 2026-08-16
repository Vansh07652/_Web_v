---
title: "Equilibrium Calculations"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "13: Fundamental Equilibrium Concepts"
topic_number: "4"
source: "chemistry-atoms-first-2e.md"
tags:
  - "equilibrium-calculations"
  - "science"
status: "complete"
---

# Equilibrium Calculations

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 13: Fundamental Equilibrium Concepts](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Equilibrium calculations answer two questions: *what is \(K\)?* and *what are the equilibrium concentrations?* Both are solved with the **ICE table** — **I**nitial, **C**hange, **E**quilibrium bookkeeping. Fill in what you know from the balanced equation, let \(x\) be the unknown change, write the equilibrium concentrations in terms of \(x\), and substitute into \(K\):

\[
K = \frac{(\text{product terms in } x)}{(\text{reactant terms in } x)}
\]

Find-\(K\) problems evaluate the expression directly. Find-concentration problems solve for \(x\) — directly, with the **small-\(x\) approximation** (when \(K\) is small, \(x\) is often negligible compared with initial concentrations), or with the quadratic formula. The approximation is valid only if it passes the **5% rule** (\(x <\) about 5% of the initial concentration it is subtracted from); otherwise use the exact quadratic.

## Why This Matters

Equilibrium calculations turn \(K\) values into predictions: the yield of an industrial synthesis, the concentration of a drug's active form at physiological pH, or the pH of a buffer (Chapter 14 extends the method to \(K_a\) and \(K_b\) problems). Laboratory data from one experiment give \(K\), which predicts any other starting mixture at the same temperature. On exams, ICE tables are the chapter's computational backbone; acid-base and solubility problems in later chapters are variations on the same method.

## Core Concepts

### Setting up the ICE table

The Change row follows stoichiometry exactly. If \(x\) moles per liter of a reactant are consumed, a product with coefficient 2 gains \(2x\), a reactant with coefficient 3 loses \(3x\), and so on. Signs matter: reactants decrease (\(-x\), \(-3x\)), products increase (\(+x\), \(+2x\)). The Equilibrium row is Initial plus Change, and only those expressions go into \(K\).

### Type 1: finding \(K\) from equilibrium data

When the problem supplies equilibrium concentrations, substitute them directly into \(K\) — no \(x\) needed.

### Type 2: finding equilibrium concentrations from \(K\)

When \(K\) and initial concentrations are given, the Equilibrium row contains \(x\), and you solve the resulting equation. If the equation is a perfect square (equal starting concentrations of reactants), take the square root of both sides. Otherwise, rearrange into the quadratic form \(ax^2 + bx + c = 0\) and apply

\[
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

keeping only the root that gives physically sensible (non-negative) concentrations.

### The small-\(x\) approximation and the 5% rule

When \(K\) is small (roughly \(10^{-3}\) or smaller), the reaction barely proceeds and \(x\) is tiny compared with initial concentrations, so \([\text{initial}] - x \approx [\text{initial}]\) turns a quadratic into a simple power. The shortcut must be verified: if \(x < 5\%\) of the initial concentration it was subtracted from, it is acceptable; otherwise solve exactly.

## ELI-10: Explain Like I'm 10

An ICE table is like balancing a budget. You start with what you have (Initial), then the reaction "spends" some amount \(x\) of reactants and "earns" some amount of products, in the exact proportions the recipe says (Change). At the end (Equilibrium), you plug what's left into the rule that says how the balance must look — and solve for \(x\).

## High-Yield Points

- ICE = Initial, Change, Equilibrium; the Change row follows the balanced stoichiometry with signs.
- Find-\(K\) problems: substitute equilibrium concentrations directly — no \(x\) solving needed.
- Equal starting reactant concentrations → take the square root of both sides.
- Small-\(K\) shortcut: approximate \([A]_0 - x \approx [A]_0\), then verify with the 5% rule.
- Quadratic formula: keep only the root giving positive concentrations.
- Always verify: substituted concentrations must reproduce the given \(K\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| ICE table | Initial–Change–Equilibrium accounting of concentrations | The standard setup for all equilibrium problems |
| change (\(x\)) | The unknown amount consumed/produced, scaled by coefficients | The variable you solve for |
| small-\(x\) approximation | Treating \([A]_0 - x\) as approximately \([A]_0\) when \(K\) is tiny | Avoids the quadratic in many acid-base problems |
| 5% rule | Approximation valid only if \(x < 5\%\) of the initial concentration | The check that keeps the shortcut honest |
| quadratic formula | \(x = (-b \pm \sqrt{b^2 - 4ac})/(2a)\) | The exact solver when the approximation fails |

## How It Works / Step-by-Step Process

1. Write the balanced equation with physical states; write the \(K\) expression (omit pure solids and liquids).
2. Build the ICE table: Initial concentrations from the problem, Change row with \(x\) and coefficients, Equilibrium row = Initial + Change.
3. Substitute the Equilibrium row into \(K\).
4. Choose the route: direct evaluation, square root, small-\(x\) approximation (then apply the 5% rule), or quadratic formula; discard non-physical roots.
5. Verify by substituting final concentrations back into \(K\).

## Example 1: Finding \(K_c\) from Equilibrium Data

At 445 °C, a flask with 0.100 M \(\text{H}_2\) and 0.100 M \(\text{I}_2\) reaches equilibrium with \([\text{HI}] = 0.156\) M. Find \(K_c\) for \(\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)\).

**ICE table:**

| | \([\text{H}_2]\) | \([\text{I}_2]\) | \([\text{HI}]\) |
|---|---|---|---|
| Initial | 0.100 | 0.100 | 0 |
| Change | \(-x\) | \(-x\) | \(+2x\) |
| Equilibrium | \(0.100 - x\) | \(0.100 - x\) | \(2x\) |

Since \([\text{HI}]_\text{eq} = 0.156\) M, \(2x = 0.156\), so \(x = 0.078\) M. Then \([\text{H}_2] = [\text{I}_2] = 0.100 - 0.078 = 0.022\) M. Substitute into the \(K\) expression:

\[
K_c = \frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]} = \frac{(0.156)^2}{(0.022)(0.022)} = \frac{0.0243}{0.000484} = 50.3 \approx 50.2
\]

The computed constant matches the accepted value at 445 °C — a built-in consistency check.

## Example 2: Small-\(x\) Approximation — NO Formation at High Temperature

At 2000 °C, \(K_c = 4.1 \times 10^{-4}\) for \(\text{N}_2(g) + \text{O}_2(g) \rightleftharpoons 2\text{NO}(g)\). A vessel starts with 0.25 M \(\text{N}_2\) and 0.25 M \(\text{O}_2\). Find the equilibrium \([\text{NO}]\).

**ICE table:**

| | \([\text{N}_2]\) | \([\text{O}_2]\) | \([\text{NO}]\) |
|---|---|---|---|
| Initial | 0.25 | 0.25 | 0 |
| Change | \(-x\) | \(-x\) | \(+2x\) |
| Equilibrium | \(0.25 - x\) | \(0.25 - x\) | \(2x\) |

Substitute into \(K_c\):

\[
K_c = \frac{[\text{NO}]^2}{[\text{N}_2][\text{O}_2]} = \frac{(2x)^2}{(0.25 - x)(0.25 - x)} = 4.1 \times 10^{-4}
\]

Since \(K_c\) is tiny, approximate \(0.25 - x \approx 0.25\):

\[
\frac{4x^2}{(0.25)^2} = 4.1 \times 10^{-4}
\]

\[
4x^2 = (4.1 \times 10^{-4})(0.0625) = 2.56 \times 10^{-5}, \qquad x^2 = 6.4 \times 10^{-6}, \qquad x = 2.5 \times 10^{-3}\ \text{M}
\]

So \([\text{NO}] = 2x = 5.0 \times 10^{-3}\) M and \([\text{N}_2] = [\text{O}_2] = 0.25 - 0.0025 = 0.2475\) M.

**5% rule check:** \(x/[\text{N}_2]_0 = 1.0\% < 5\%\), so the approximation is valid. This is why NO forms only in trace amounts even in a hot engine — a small \(K\) means reactants dominate.

## Example 3: The Quadratic — Unequal Starting Concentrations

At 445 °C, \(K_c = 50.2\) for \(\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)\). A flask starts with 0.100 M \(\text{H}_2\) and 0.050 M \(\text{I}_2\), no HI. Find the equilibrium concentrations.

**ICE table:**

| | \([\text{H}_2]\) | \([\text{I}_2]\) | \([\text{HI}]\) |
|---|---|---|---|
| Initial | 0.100 | 0.050 | 0 |
| Change | \(-x\) | \(-x\) | \(+2x\) |
| Equilibrium | \(0.100 - x\) | \(0.050 - x\) | \(2x\) |

Substitute into \(K_c\):

\[
50.2 = \frac{(2x)^2}{(0.100 - x)(0.050 - x)}
\]

The initial concentrations are unequal, so no square-root shortcut. Expand:

\[
4x^2 = 50.2(0.00500 - 0.150x + x^2)
\]

\[
0 = 46.2x^2 - 7.53x + 0.251
\]

Apply the quadratic formula with \(a = 46.2\), \(b = -7.53\), \(c = 0.251\):

\[
x = \frac{7.53 \pm \sqrt{(7.53)^2 - 4(46.2)(0.251)}}{2(46.2)} = \frac{7.53 \pm \sqrt{56.7 - 46.4}}{92.4} = \frac{7.53 \pm 3.21}{92.4}
\]

The roots are \(x = 0.116\) M and \(x = 0.0467\) M. The first exceeds the initial \([\text{I}_2] = 0.050\) M and would give a negative concentration, so keep \(x = 0.0467\) M:

\[
[\text{HI}] = 2x = 0.0935\ \text{M}, \qquad [\text{H}_2] = 0.100 - 0.0467 = 0.0533\ \text{M}, \qquad [\text{I}_2] = 0.050 - 0.0467 = 0.0033\ \text{M}
\]

**Verify:** \((0.0935)^2/((0.0533)(0.0033)) = 49.7 \approx 50.2\) (rounding). The iodine is nearly exhausted — it was the limiting reactant, exactly as a large \(K\) predicts.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "Forgetting the coefficients in the Change row." | A coefficient of 2 means the change is \(2x\), and the concentration is squared in \(K\). |
| "The 5% rule is optional." | It is the validity test for the approximation; if \(x \geq 5\%\) of the initial concentration, solve exactly. |
| "Either quadratic root works." | Only roots giving non-negative concentrations are physical; check both. |
| "Solids and liquids go in the ICE expression." | They are omitted from \(K\). |
| "\(K\) and \(Q\) are the same in the ICE table." | The Equilibrium row goes into \(K\); current non-equilibrium values go into \(Q\). |

## Quick Review

1. Write the ICE table (symbolically) for \(\text{N}_2 + 3\text{H}_2 \rightleftharpoons 2\text{NH}_3\) starting from 0.50 M \(\text{N}_2\) and 1.50 M \(\text{H}_2\).
2. When is the small-\(x\) approximation allowed, and how do you verify it?
4. In Example 3, why was the root \(x = 0.116\) M rejected?
5. After solving any equilibrium problem, what final check confirms the answer?

<details>
<summary>Show answers</summary>

1. Initial: 0.50, 1.50, 0; Change: −x, −3x, +2x; Equilibrium: 0.50 − x, 1.50 − 3x, 2x.
2. When \(K\) is small enough that \(x \ll\) the initial concentrations; verify that \(x\) is less than 5% of the initial concentration it is subtracted from.
3. \(x = 0.116\) M exceeds the initial \([I₂] = 0.050\) M, which would make the equilibrium \([I₂]\) negative — physically impossible.
4. Substitute the equilibrium concentrations back into the \(K\) expression; it should reproduce the given \(K\) (within rounding).

</details>

## Related Topics

- Previous: [Shifting Equilibria: Le Châtelier's Principle](03-shifting-equilibria-le-cha-telier-s-principle.md)
- Next: End of chapter
- Related: [Equilibrium Constants](02-equilibrium-constants.md)
- Related: [Chemical Equilibria](01-chemical-equilibria.md)
- Related: [Fundamental Equilibrium Concepts chapter overview](../README.md)
- Related: [Buffers in Chapter 14](../../chapter-14-acid-base-equilibria/06-buffers.md)
- Related: [pH and pOH in Chapter 14](../../chapter-14-acid-base-equilibria/02-ph-and-poh.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Equilibrium data: \(K_c = 50.2\) at 445 °C for \(\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}\) is a widely used textbook value; \(K_c = 4.1 \times 10^{-4}\) for \(\text{N}_2 + \text{O}_2 \rightleftharpoons 2\text{NO}\) at 2000 °C is a commonly taught textbook value (small variations exist among reference tables and temperatures). All worked examples use self-consistent arithmetic that reproduces the stated \(K\) on verification.
- Last updated: 2026-08-16
