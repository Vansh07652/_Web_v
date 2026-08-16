---
title: "Equilibrium Calculations"
subject: "Science"
book: "Chemistry 2e"
chapter: "13: Fundamental Equilibrium Concepts"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "equilibrium-calculations"
  - "science"
status: "complete"
---

# Equilibrium Calculations

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 13: Fundamental Equilibrium Concepts](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Knowing \(K\) and the initial amounts, or knowing the equilibrium amounts, you can solve for the missing quantities. There are two classic problem types:

1. **Compute \(K\) from equilibrium concentrations** — plug the measured equilibrium concentrations into the equilibrium expression.
2. **Compute equilibrium concentrations from \(K\) and initial amounts** — define a change variable \(x\), build an **ICE table** (Initial, Change, Equilibrium), substitute into the equilibrium expression, and solve.

The second type often produces a quadratic equation, but a useful approximation applies when \(K\) is very small: the change in reactant concentration is negligible compared with the initial amount, turning the quadratic into a square-root problem. This topic builds on the previous two.

## Why This Matters

Equilibrium calculations convert the abstract constant \(K\) into concrete numbers: the actual concentration of every species in a mixture. That matters whenever an outcome depends on a specific amount:

- **Pharmaceuticals:** The fraction of a weak drug in its uncharged (absorbable) form depends on acid-base equilibria in the stomach and bloodstream — exactly these \(K\)-type calculations.
- **Water treatment:** Solubility equilibria (Chapter 15) use the same ICE method to predict precipitation and dissolved contaminant levels.
- **Industry:** Yield predictions for the Haber or contact process are equilibrium calculations; engineers set reactor pressure and feed composition from computed equilibrium concentrations.
- **Biology:** Hemoglobin–oxygen binding curves are equilibrium calculations in disguise; the same mathematics (with \(K_d\)) describes receptor–drug binding.

## Core Concepts

### The ICE table method

An ICE table organizes three stages:

- **I** = initial concentrations (what was mixed),
- **C** = change as the reaction moves to equilibrium,
- **E** = equilibrium concentrations (I + C).

For \(\ce{aA + bB <=> cC + dD}\) starting with only reactants, if \(x\) mol/L of A react, the changes follow balanced stoichiometry: A decreases by \(ax\), B by \(bx\), products increase by \(cx\) and \(dx\). Substitute the equilibrium row into the equilibrium expression. The variable \(x\) is always defined by the balanced equation, never guessed.

### Type 1: computing \(K\) from equilibrium concentrations

When equilibrium concentrations are measured (by spectroscopy or titration, for example), substitute them into the equilibrium expression and evaluate. No \(x\) is needed. If different starting mixtures give the same \(K\), the system truly reached equilibrium.

### Type 2: computing equilibrium concentrations from \(K\)

When \(K\) and initial concentrations are known:

1. Write the balanced equation and the equilibrium expression.
2. Build the ICE table; express every equilibrium concentration in terms of \(x\).
3. Substitute into the equilibrium expression, giving an equation in \(x\).
4. Solve — using the quadratic formula if needed, keeping the root that gives non-negative concentrations.
5. Back-substitute \(x\) to find every equilibrium concentration.

### The small-\(K\) approximation

If \(K\) is very small (roughly \(< 10^{-3}\)), \(x\) is tiny compared with the initial concentrations, so \(0.10 - x pprox 0.10\), avoiding the quadratic. **Always check**: if \(x\) is more than about 5% of the initial concentration it was subtracted from, the approximation is invalid and the quadratic must be solved.

## ELI-10: Explain Like I’m 10

> An ICE table is like a balance sheet for a chemical reaction. You write down what you started with (Initial), how much changed (Change), and what you end up with (Equilibrium). If you know how the reaction "likes" to sit (the number \(K\)), you can use the balance sheet to figure out exactly how much of each chemical is left when everything stops changing.

## High-Yield Points

- ICE = Initial, Change, Equilibrium; the Change row follows balanced-equation stoichiometry.
- Type 1 problems: plug measured equilibrium concentrations straight into \(K\).
- Type 2 problems: define \(x\), build the ICE table, solve the resulting equation for \(x\).
- Small \(K\) (roughly \(< 10^{-3}\)) allows the approximation "initial − \(x \approx\) initial" — but verify with the 5% rule.
- When a quadratic appears, discard roots that give negative concentrations.
- If the reaction starts with only reactants, \(x\) is positive and appears with minus signs on the reactant side; if it starts with only products, run the reaction "in reverse" and \(x\) appears with minus signs on the product side.
- \(Q\) vs \(K\) (previous topic) tells you which direction the system moves before you build the table — the Change signs must match the predicted direction.
- Unit discipline: keep concentrations in mol/L; the equilibrium expression is unitless by convention (standard-state concentrations), so no units are carried into \(K\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| ICE table | Three-row bookkeeping: Initial, Change, Equilibrium | The standard framework for every equilibrium calculation |
| change variable (\(x\)) | The unknown amount (in mol/L) by which the reaction proceeds | Everything at equilibrium is expressed in terms of \(x\), which is solved from \(K\) |
| quadratic formula | \(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\) | Solves ICE problems when the small-\(K\) approximation fails |
| small-\(K\) approximation | Assuming initial − \(x \approx\) initial when \(K\) is tiny | Turns a quadratic into a square root; must satisfy the 5% rule |
| 5% rule | The check that \(x\) is less than ~5% of the concentration it was subtracted from | The gate that decides whether the approximation is valid |

## How It Works / Step-by-Step Process

### Worked example 1: computing \(K\) from equilibrium concentrations

**Problem.** A mixture of \(\ce{H2}\), \(\ce{I2}\), and \(\ce{HI}\) at 445 °C reaches equilibrium with \([\ce{H2}] = 0.110\ \text{M}\), \([\ce{I2}] = 0.110\ \text{M}\), and \([\ce{HI}] = 0.780\ \text{M}\) for \(\ce{H2(g) + I2(g) <=> 2HI(g)}\). Find \(K_c\).

**Solution.**

1. Write the equilibrium expression:

\[
K_c = \frac{[\ce{HI}]^2}{[\ce{H2}][\ce{I2}]}
\]

2. Substitute the equilibrium values:

\[
K_c = \frac{(0.780)^2}{(0.110)(0.110)} = \frac{0.6084}{0.0121} = 50.3
\]

3. Round: \(K_c \approx 50\) — large, consistent with the substantial product present; equilibrium favors \(\ce{HI}\).

### Worked example 2: computing equilibrium concentrations from \(K\)

**Problem.** For the same reaction at 445 °C (\(K_c = 50.2\)), start with \([\ce{H2}] = [\ce{I2}] = 0.500\ \text{M}\) and no \(\ce{HI}\). Find the equilibrium concentrations.

**Solution.**

1. **ICE table** with change \(x\):

| | \(\ce{H2}\) | \(\ce{I2}\) | \(\ce{HI}\) |
|---|---|---|---|
| Initial | 0.500 | 0.500 | 0 |
| Change | −\(x\) | −\(x\) | +\(2x\) |
| Equilibrium | 0.500 − \(x\) | 0.500 − \(x\) | \(2x\) |

2. Substitute into the equilibrium expression:

\[
50.2 = \frac{(2x)^2}{(0.500 - x)^2} = \frac{4x^2}{(0.500 - x)^2}
\]

3. Take the square root of both sides (both sides are positive):

\[
\sqrt{50.2} = \frac{2x}{0.500 - x} \quad \Rightarrow \quad 7.085 = \frac{2x}{0.500 - x}
\]

4. Solve for \(x\):

\[
7.085(0.500 - x) = 2x \quad \Rightarrow \quad 3.543 - 7.085x = 2x \quad \Rightarrow \quad x = \frac{3.543}{9.085} = 0.390
\]

5. Back-substitute:

\[
[\ce{HI}] = 2x = 0.780\ \text{M}, \qquad [\ce{H2}] = [\ce{I2}] = 0.500 - 0.390 = 0.110\ \text{M}
\]

Check by plugging back: \((0.780)^2/(0.110)^2 = 50.3 \approx K_c\). The result is consistent.

### Worked example 3: the small-\(K\) approximation with the 5% rule

**Problem.** For \(\ce{N2O4(g) <=> 2NO2(g)}\), \(K_c = 4.6 \times 10^{-3}\) at 25 °C. If pure \(\ce{N2O4}\) is placed in a flask at 0.100 M, find the equilibrium concentration of \(\ce{NO2}\).

**Solution.**

1. **ICE table:**

| | \(\ce{N2O4}\) | \(\ce{NO2}\) |
|---|---|---|
| Initial | 0.100 | 0 |
| Change | −\(x\) | +\(2x\) |
| Equilibrium | 0.100 − \(x\) | \(2x\) |

2. Equilibrium expression:

\[
4.6 \times 10^{-3} = \frac{(2x)^2}{0.100 - x} = \frac{4x^2}{0.100 - x}
\]

3. Because \(K\) is small, try the approximation \(0.100 - x \approx 0.100\):

\[
4.6 \times 10^{-3} \approx \frac{4x^2}{0.100} \quad \Rightarrow \quad x^2 \approx \frac{4.6 \times 10^{-3} \times 0.100}{4} = 1.15 \times 10^{-4}
\]

\[
x \approx \sqrt{1.15 \times 10^{-4}} = 1.07 \times 10^{-2}
\]

4. **Check the 5% rule:** \(x/0.100 = 0.107\) — **10.7% > 5%** — so the approximation is invalid. Solve the quadratic exactly:

\[
4x^2 + 4.6 \times 10^{-3}x - 4.6 \times 10^{-4} = 0
\]

Using the quadratic formula with \(a = 4\), \(b = 4.6 \times 10^{-3}\), \(c = -4.6 \times 10^{-4}\):

\[
x = \frac{-4.6 \times 10^{-3} + \sqrt{(4.6 \times 10^{-3})^2 + 4(4)(4.6 \times 10^{-4})}}{2(4)} = 1.02 \times 10^{-2}
\]

5. Equilibrium concentrations: \([\ce{NO2}] = 2.04 \times 10^{-2}\ \text{M}\), \([\ce{N2O4}] = 0.0898\ \text{M}\). The approximation would have overstated \([\ce{NO2}]\) by ~5% — exactly why the 5% check matters.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Change row signs | Initial concentrations | Change always follows stoichiometry of the balanced equation; sign tells you whether a species is consumed (−) or produced (+). |
| Using initial concentrations in \(K\) | Using equilibrium concentrations in \(K\) | Only equilibrium concentrations belong in \(K\); initials go in the I row and into \(Q\). |
| \(x\) being the amount reacted | \(x\) being a concentration of one specific species | \(x\) is the amount reacted in mol/L; a species with coefficient 2 has concentration change \(2x\), not \(x\). |
| Approximating whenever \(K < 1\) | Approximating only when \(K\) is very small | The approximation is a mathematical shortcut, not a rule of thumb about \(K < 1\); always apply the 5% check. |
| Solving only for \(x\) | Reporting the equilibrium concentrations | The final answer is the E row values, not \(x\) itself — a classic lost-points error. |

## Quick Review

1. What does ICE stand for, and what does the Change row encode?
2. In Worked Example 2, why was the square root taken before solving for \(x\)?
3. When is the small-\(K\) approximation valid, and how do you verify it?
4. In Worked Example 3, why did the approximation fail, and what was the exact value of \([\ce{NO2}]\)?
5. If a problem starts with only product present and \(K\) is large, in which direction does the reaction proceed, and how does that affect the ICE Change row?

<details>
<summary>Show answers</summary>

1. Initial, Change, Equilibrium. The Change row shows how each concentration changes as the reaction moves to equilibrium, in the stoichiometric ratio of the balanced equation.
2. Both sides were perfect squares, so taking the square root converted the quadratic into a linear equation — faster than the quadratic formula.
3. The approximation is valid when \(K\) is very small (roughly \(< 10^{-3}\)); verify that \(x\) is less than about 5% of the initial concentration it was subtracted from.
4. The approximation gave \(x = 1.07 \times 10^{-2}\), which is 10.7% of 0.100 M — above the 5% threshold. The exact quadratic solution gives \(x = 1.02 \times 10^{-2}\), so \([\ce{NO2}] = 2.04 \times 10^{-2}\) M.
5. With only products present, the reaction proceeds in reverse; the Change row has minus signs on the product side and plus signs on the reactant side. (This mirrors Le Châtelier logic: \(Q = \infty > K\), so reverse direction is required.)

</details>

## Related Topics

- Previous: [Shifting Equilibria: Le Châtelier’s Principle](03-shifting-equilibria-le-cha-telier-s-principle.md)
- Next: End of chapter
- Related: [Fundamental Equilibrium Concepts chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
