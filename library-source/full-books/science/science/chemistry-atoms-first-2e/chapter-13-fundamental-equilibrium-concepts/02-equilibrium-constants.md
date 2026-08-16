---
title: "Equilibrium Constants"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "13: Fundamental Equilibrium Concepts"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "equilibrium-constants"
  - "science"
status: "complete"
---

# Equilibrium Constants

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 13: Fundamental Equilibrium Concepts](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

The **equilibrium constant** \(K\) quantifies where a reversible reaction settles. For a reaction \(\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}\), the law of mass action gives, for molar concentrations,

\[
K_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
\]

and the analogous expression \(K_p\) for gas-phase reactions uses partial pressures instead of concentrations. Products go on top, reactants on the bottom, and every concentration is raised to its stoichiometric coefficient. Pure solids and pure liquids do not appear in the expression. The magnitude of \(K\) tells you whether products or reactants dominate at equilibrium, and comparing the **reaction quotient** \(Q\) — the same expression evaluated at the current, possibly non-equilibrium concentrations — with \(K\) predicts the direction of change. Because \(K\) depends only on the reaction as written and on temperature, it is a powerfully predictive number.

## Why This Matters

The equilibrium constant turns "which way does this go?" into arithmetic. Engineers use \(K\) to compute the maximum possible yield of ammonia, sulfuric acid, and pharmaceuticals. Chemists rank acid and base strength with \(K_a\) and \(K_b\) values (Chapter 14) and predict precipitation with the solubility product \(K_\text{sp}\) (Chapter 15). And on exams, virtually every equilibrium calculation — and most of acid-base chemistry — begins with writing the correct \(K\) expression.

## Core Concepts

### The law of mass action

For \(\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}\), the equilibrium expression is written with product concentrations in the numerator and reactant concentrations in the denominator, each raised to the stoichiometric coefficient from the *balanced* equation. A coefficient of 2 means the concentration is squared; a coefficient of 3 means it is cubed. It follows from setting the forward rate equal to the reverse rate at equilibrium: \(K_c = k_\text{f}/k_\text{r}\).

### What the magnitude of \(K\) means

A very large \(K\) (e.g., \(10^5\)) means products dominate — the reaction "goes far." A very small \(K\) (e.g., \(10^{-5}\)) means reactants dominate. A \(K\) near 1 means comparable amounts of both sides. Crucially, \(K\) says nothing about *speed*: a huge-\(K\) reaction can still be impossibly slow.

### The reaction quotient \(Q\) and the direction of change

\(Q\) uses the same expression as \(K\), but with current concentrations at any moment:

\[
Q_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
\]

- \(Q < K\): the system is "too reactant-heavy"; the forward reaction runs until \(Q\) reaches \(K\).
- \(Q > K\): the system is "too product-heavy"; the reverse reaction runs.
- \(Q = K\): the system is at equilibrium; no net change.

### \(K_p\) versus \(K_c\)

For gas-phase reactions, \(K_p\) uses partial pressures and \(K_c\) uses molarities. They are related by

\[
K_p = K_c(RT)^{\Delta n}
\]

where \(\Delta n = (\text{moles of gaseous products}) - (\text{moles of gaseous reactants})\) and \(R = 0.08206\) L atm mol⁻¹ K⁻¹ when pressures are in atm. If \(\Delta n = 0\), the two constants are equal.

### Heterogeneous equilibria

Pure solids and pure liquids have constant concentrations (fixed density and molar mass), so they are built into \(K\) and omitted from the expression. For the thermal decomposition of calcium carbonate,

\[
\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g),
\]

the equilibrium expression is simply \(K_c = [\text{CO}_2]\). Only gases and aqueous solutes appear.

### Manipulating reactions and their constants

If a reaction is reversed, the new constant is \(1/K\). If the coefficients are multiplied by \(n\), the constant is raised to the \(n\)-th power (\(K^n\)). If two reactions are added, their constants multiply. These rules let you combine known equilibria into new ones without new experiments.

## ELI-10: Explain Like I'm 10

The equilibrium constant is like a final score ratio: 100-to-1 means products win; 1-to-100 means reactants win. The reaction quotient is the score *right now* — if it is 10-to-1 but the final ratio should be 100-to-1, the game keeps going until the score reaches the right ratio.

## High-Yield Points

- \(K_c = [\text{C}]^c[\text{D}]^d/[\text{A}]^a[\text{B}]^b\) — products over reactants, coefficients as exponents.
- Large \(K\) → product-favored; small \(K\) → reactant-favored; \(K\) near 1 → comparable amounts.
- \(K\) depends only on temperature and on how the reaction is written — never on initial amounts, catalysts, or how equilibrium is approached.
- \(Q < K\) → forward; \(Q > K\) → reverse; \(Q = K\) → equilibrium.
- \(K_p = K_c(RT)^{\Delta n}\), with \(\Delta n =\) (moles gaseous products) − (moles gaseous reactants).
- Pure solids and pure liquids are omitted from \(K\) and \(Q\) expressions.
- Reverse reaction: \(K' = 1/K\). Coefficients multiplied by \(n\): \(K' = K^n\). Added reactions: multiply \(K\) values.
- Big \(K\) ≠ fast reaction. \(K\) is thermodynamics; rate is kinetics.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| equilibrium constant (\(K\)) | The fixed value of the mass-action ratio at a given temperature | Quantifies how far a reaction proceeds |
| reaction quotient (\(Q\)) | The mass-action ratio at the current, possibly non-equilibrium conditions | Predicts the direction of change |
| \(K_c\) / \(K_p\) | Equilibrium constant using molarities / partial pressures | The two common forms for solutions and gases |
| law of mass action | Rule relating equilibrium concentrations to \(K\) | The basis of all equilibrium expressions |
| product-favored / reactant-favored | Equilibrium lying toward products / reactants | Describes where \(K > 1\) / \(K < 1\) sits |

## How It Works / Step-by-Step Process

1. Write the balanced equation with physical states; include only gases and aqueous solutes (omit pure solids and pure liquids).
2. Raise each concentration (or partial pressure) to its stoichiometric coefficient.
3. To predict direction: compute \(Q\) from current conditions and compare with \(K\).
4. To convert between \(K_c\) and \(K_p\): use \(K_p = K_c(RT)^{\Delta n}\) with \(\Delta n\) from the balanced equation.

## Example 1: The Haber Reaction — Writing and Converting Constants

For \(\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)\):

\[
K_c = \frac{[\text{NH}_3]^2}{[\text{N}_2][\text{H}_2]^3}
\]

The coefficient 3 on \(\text{H}_2\) cubes the hydrogen concentration. Now convert between forms: Here \(\Delta n = 2 - (1 + 3) = -2\), so \(K_p = K_c(RT)^{-2}\), or rearranged, \(K_c = K_p(RT)^2\). At 25 °C, \(K_p \approx 6.0 \times 10^5\) atm⁻². With \(RT = (0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(298.15\ \text{K}) = 24.5\ \text{L atm mol}^{-1}\):

\[
K_c = (6.0 \times 10^5)(24.5)^2 = (6.0 \times 10^5)(598) = 3.6 \times 10^8
\]

Dimensional analysis: atm⁻² × (L atm mol⁻¹)² = L² mol⁻² = M⁻². The huge value of \(K\) confirms that at room temperature ammonia strongly dominates at equilibrium — which is why the industrial challenge is *speed*, not thermodynamics.

## Example 2: Using \(Q\) to Predict Direction

At 445 °C, \(K_c = 50.2\) for \(\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)\). Two mixtures are analyzed:

**Mixture A:** \([\text{H}_2] = 0.100\) M, \([\text{I}_2] = 0.100\) M, \([\text{HI}] = 0.300\) M.

\[
Q = \frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]} = \frac{(0.300)^2}{(0.100)(0.100)} = \frac{0.0900}{0.0100} = 9.0
\]

\(Q = 9.0 < K = 50.2\), so the forward reaction runs: HI forms until \(Q\) climbs to 50.2.

**Mixture B:** \([\text{H}_2] = 0.050\) M, \([\text{I}_2] = 0.050\) M, \([\text{HI}] = 0.400\) M.

\[
Q = \frac{(0.400)^2}{(0.050)(0.050)} = \frac{0.160}{0.00250} = 64
\]

\(Q = 64 > K = 50.2\), so the reverse reaction runs: HI decomposes. Same reaction, same temperature — only the current composition differs, and \(Q\) versus \(K\) gives the direction.

## Example 3: Combining and Reversing Constants

For the Haber reaction, \(K_c = 3.6 \times 10^8\) at 25 °C. The reverse reaction \(2\text{NH}_3(g) \rightleftharpoons \text{N}_2(g) + 3\text{H}_2(g)\) has

\[
K' = \frac{1}{K_c} = \frac{1}{3.6 \times 10^8} = 2.8 \times 10^{-9}
\]

Ammonia barely decomposes at room temperature. Doubling all coefficients (\(2\text{N}_2 + 6\text{H}_2 \rightleftharpoons 4\text{NH}_3\)) squares the constant: \(K'' = (3.6 \times 10^8)^2 = 1.3 \times 10^{17}\). A \(K\) value is meaningless without the exact balanced equation it belongs to.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "\(K\) and \(Q\) are interchangeable." | \(K\) is the equilibrium value; \(Q\) is the current value. Only when \(Q = K\) is the system at equilibrium. |
| "\(K\) changes when concentrations change." | Concentrations change *along the path to* equilibrium; \(K\) changes only with temperature. |
| "Include solids and pure liquids in the expression." | They are omitted; their concentrations are constant and absorbed into \(K\). |
| "The coefficients are multiplied, not raised to powers." | A coefficient \(c\) means \([\text{C}]\) raised to the power \(c\). |
| "A huge \(K\) means the reaction is fast." | It means product-favored; the rate is governed by kinetics (activation energy), not by \(K\). |
| "\(K\) depends on the starting amounts." | At a given temperature and reaction as written, \(K\) is the same regardless of initial amounts. |

## Quick Review

1. Write the \(K_c\) expression for \(\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)\) and explain the exponent on \([\text{H}_2]\).
2. For the same reaction, what is \(\Delta n\), and does \(K_p\) equal \(K_c\)?
3. A mixture has \(Q > K\). Which direction does the reaction shift, and why?
4. Why are \(\text{CaCO}_3(s)\) and \(\text{CaO}(s)\) absent from the expression for \(\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)\)?
5. If \(K = 4.0 \times 10^{-3}\) for a reaction, what is \(K\) for the reverse reaction?
<details>
<summary>Show answers</summary>

1. \(K_c = [\text{NH}_3]^2/([\text{N}_2][\text{H}_2]^3)\); the exponent 3 is the stoichiometric coefficient of H₂ in the balanced equation.
2. \(\Delta n = 2 - 4 = -2\), so \(K_p = K_c(RT)^{-2}\) — they are not equal.
3. Reverse. The numerator is too large relative to \(K\); the reverse reaction consumes products until \(Q = K\).
4. Pure solids have constant concentration (fixed density and molar mass), so they are built into \(K\) and omitted.
5. \(K' = 1/K = 1/(4.0 \times 10^{-3}) = 2.5 \times 10^2\).

</details>

## Related Topics

- Previous: [Chemical Equilibria](01-chemical-equilibria.md)
- Next: [Shifting Equilibria: Le Châtelier's Principle](03-shifting-equilibria-le-cha-telier-s-principle.md)
- Related: [Chemical Equilibria](01-chemical-equilibria.md)
- Related: [Equilibrium Calculations](04-equilibrium-calculations.md)
- Related: [Free Energy in Chapter 12](../../chapter-12-thermodynamics/04-free-energy.md)
- Related: [Fundamental Equilibrium Concepts chapter overview](../README.md)
- Related: [Relative Strengths of Acids and Bases in Chapter 14](../../chapter-14-acid-base-equilibria/03-relative-strengths-of-acids-and-bases.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Equilibrium data: \(K_c = 50.2\) at 445 °C for \(\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}\) is a widely used textbook value; \(K_p \approx 6.0 \times 10^5\) atm⁻² at 25 °C for ammonia synthesis is consistent with \(\Delta G^\circ = -RT\ln K\) using standard \(\Delta G^\circ_\text{f}(\text{NH}_3) \approx -16.5\) kJ mol⁻¹. Small variations exist among reference tables.
- Last updated: 2026-08-16
