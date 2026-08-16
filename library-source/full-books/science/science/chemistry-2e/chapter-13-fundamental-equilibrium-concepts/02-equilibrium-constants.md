---
title: "Equilibrium Constants"
subject: "Science"
book: "Chemistry 2e"
chapter: "13: Fundamental Equilibrium Concepts"
topic_number: "2"
source: "chemistry-2e.md"
tags:
  - "equilibrium-constants"
  - "science"
status: "complete"
---

# Equilibrium Constants

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 13: Fundamental Equilibrium Concepts](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

When a reversible reaction reaches equilibrium, the forward and reverse reactions are still occurring, but at equal rates, so the concentrations stop changing. The **equilibrium constant** (\(K\)) is a number that summarizes the composition of the mixture at that point. For a reaction written generally as

\[
a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}
\]

the equilibrium constant expression (the **law of mass action**) is

\[
K_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
\]

where the square brackets mean molar concentration (mol/L) and the exponents are the stoichiometric coefficients from the balanced equation. The subscript \(c\) indicates concentration-based; for gas reactions there is a pressure-based version, \(K_p\), described below.

A key idea: \(K\) is a **constant at a given temperature**. It does not depend on how the equilibrium was reached — starting from pure reactants, pure products, or any mixture in between, the same value of \(K\) emerges. It does depend strongly on temperature, because temperature changes the relative energies of reactants and products.

## Why This Matters

The equilibrium constant turns a vague idea — "reactions can go both ways" — into a predictive tool. If you know \(K\), you can predict:

- **Which side is favored.** \(K > 1\) means products dominate at equilibrium; \(K < 1\) means reactants dominate.
- **What will happen when you start from a given mixture.** Comparing the reaction quotient \(Q\) (same formula as \(K\), but with current concentrations) to \(K\) tells you which direction the reaction must shift.
- **Whether a process is practical.** The Haber process for ammonia, for example, is limited by an equilibrium that favors reactants at low pressure; engineers use \(K\) (and Le Châtelier's principle, the next topic) to design conditions that maximize yield.

Equilibrium constants also govern biological chemistry. The binding of oxygen to hemoglobin, the dissolving of kidney stones, and the carbonate equilibria that control ocean acidity are all described by equilibrium constants.

## Core Concepts

### The law of mass action: products over reactants, raised to coefficients

The equilibrium expression always places product concentrations in the numerator and reactant concentrations in the denominator, each raised to its balanced-equation coefficient. It is a ratio of *concentrations at equilibrium*, not at any other time. Write the expression only from the balanced equation — never from the stoichiometry of some other step or from the rate law. For example, for

\[
\ce{N2(g) + 3H2(g) <=> 2NH3(g)}
\]

the expression is

\[
K_c = \frac{[\ce{NH3}]^2}{[\ce{N2}][\ce{H2}]^3}
\]

Note the exponent 3 on \([\ce{H2}]\), matching the coefficient 3 in the equation.

### Homogeneous versus heterogeneous equilibria

In a **homogeneous equilibrium**, all reactants and products are in the same phase (all gas, or all in one solution). In a **heterogeneous equilibrium**, more than one phase is present — for example, a solid decomposing to gases, or a gas dissolving in a liquid.

Pure solids and pure liquids do not appear in the equilibrium expression. Their concentrations are effectively constant (density does not change meaningfully), so they are built into the value of \(K\). For the thermal decomposition of calcium carbonate,

\[
\ce{CaCO3(s) <=> CaO(s) + CO2(g)}
\]

the equilibrium expression is simply

\[
K_c = [\ce{CO2}]
\]

### \(K_p\): equilibrium constants for gases

For gas-phase reactions, it is often more convenient to measure partial pressures than concentrations. The pressure-based constant \(K_p\) has the same product-over-reactants structure, but with partial pressures (in atm) instead of molarities. The two constants are related by

\[
K_p = K_c (RT)^{\Delta n}
\]

where \(R = 0.08206\ \text{L·atm·mol}^{-1}\text{K}^{-1}\), \(T\) is the Kelvin temperature, and \(\Delta n\) is the change in moles of gas: moles of gaseous products minus moles of gaseous reactants. When the number of gas moles is unchanged by the reaction (\(\Delta n = 0\)), \(K_p = K_c\).

### What the magnitude of \(K\) tells you

- \(K \gg 1\) (say \(> 10^3\)): products strongly favored; equilibrium lies far to the right.
- \(K \ll 1\) (say \(< 10^{-3}\)): reactants strongly favored; equilibrium lies far to the left.
- \(K\) near 1: significant amounts of both reactants and products coexist.

This tells you about *composition at equilibrium*, not about speed. A reaction can have a huge \(K\) and still be impractically slow without a catalyst — equilibrium constants say nothing about kinetics.

### Related constants: reversing and rescaling the reaction

The value of \(K\) depends on how the equation is written. **Reversing the reaction** inverts the constant: \(K_{\text{reverse}} = 1/K\). **Multiplying all coefficients by \(n\)** raises the constant to the \(n\)th power: \(K' = K^n\). **Adding reactions** multiplies their constants. These rules matter because the same process can be written different ways in different sources; comparing \(K\) values requires comparing identically written equations.

## ELI-10: Explain Like I’m 10

> Imagine a seesaw where kids keep jumping on and off. At equilibrium, the number of kids on each side isn't changing — but kids are still moving. The equilibrium constant is a scoreboard that tells you which side usually "wins" at a given temperature. If the scoreboard shows a big number, the right side (products) is winning; a tiny number means the left side (reactants) stays in charge.

## High-Yield Points

- \(K_c\) = product concentrations (each raised to its coefficient) divided by reactant concentrations (each raised to its coefficient).
- \(K\) depends on **temperature only** — not on initial amounts, pressure, or the presence of a catalyst.
- Pure solids and pure liquids are omitted from equilibrium expressions.
- \(K_p = K_c(RT)^{\Delta n}\) for gas reactions, with \(\Delta n =\) (moles gaseous products) − (moles gaseous reactants).
- \(K > 1\) favors products; \(K < 1\) favors reactants; magnitude says nothing about rate.
- Reversing a reaction gives \(K' = 1/K\); multiplying coefficients by \(n\) gives \(K' = K^n\).
- The reaction quotient \(Q\) uses the same formula as \(K\) but with current (non-equilibrium) concentrations; \(Q < K\) means the reaction proceeds forward.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| equilibrium constant (\(K\)) | A temperature-dependent ratio of product-to-reactant concentrations (or pressures) at equilibrium | It quantifies which side of a reversible reaction wins and lets you predict composition |
| law of mass action | The rule that \(K\) = products over reactants, each raised to its balanced coefficient | It is the mathematical heart of equilibrium chemistry |
| homogeneous equilibrium | Equilibrium where all species share one phase | Simplifies the expression — all species appear |
| heterogeneous equilibrium | Equilibrium involving more than one phase | Pure solids/liquids drop out of the expression |
| \(K_p\) | Pressure-based equilibrium constant using partial pressures in atm | Used for gas reactions; relates to \(K_c\) through \(K_p = K_c(RT)^{\Delta n}\) |
| reaction quotient (\(Q\)) | The same ratio as \(K\), but with current, possibly non-equilibrium concentrations | Comparing \(Q\) to \(K\) predicts the direction of shift |

## How It Works / Step-by-Step Process

### Worked example 1: writing an equilibrium expression (with dimensional analysis)

**Problem.** Write \(K_c\) for \(\ce{2SO2(g) + O2(g) <=> 2SO3(g)}\).

**Solution.**

1. Identify products and reactants from the balanced equation: products = \(\ce{SO3}\), reactants = \(\ce{SO2}\) and \(\ce{O2}\).
2. Place products over reactants and raise each concentration to its coefficient:

\[
K_c = \frac{[\ce{SO3}]^2}{[\ce{SO2}]^2[\ce{O2}]}
\]

3. Check units: each molarity is mol/L, so \(K_c\) has units of \(\frac{(\text{mol/L})^2}{(\text{mol/L})^2(\text{mol/L})} = \text{L/mol}\). In practice, chemists report \(K\) as a pure number using standard concentrations, but tracking the units confirms the exponent structure is correct.

### Worked example 2: converting \(K_c\) to \(K_p\)

**Problem.** For \(\ce{H2(g) + I2(g) <=> 2HI(g)}\), \(K_c = 50.2\) at 445 °C. Find \(K_p\).

**Solution.**

1. Convert temperature to kelvin: \(T = 445 + 273 = 718\ \text{K}\).
2. Compute \(\Delta n\) = moles gaseous products − moles gaseous reactants = \(2 - (1+1) = 0\).
3. Substitute into \(K_p = K_c(RT)^{\Delta n}\):

\[
K_p = 50.2 \times (0.08206 \times 718)^{0} = 50.2 \times 1 = 50.2
\]

Because the reaction uses the same number of gas moles on both sides, pressure cancels and \(K_p = K_c\). For a reaction with \(\Delta n \neq 0\), the \((RT)^{\Delta n}\) factor adjusts the units from molarity to pressure: \((\text{mol/L} \times \text{K})^{1} = \text{atm}\) when \(\Delta n = 1\), matching partial-pressure units.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Equilibrium constant | Rate constant (\(k\)) | \(K\) describes final composition; \(k\) describes how fast equilibrium is reached. They are unrelated numbers. |
| Concentrations in \(K\) | Initial concentrations | Only equilibrium concentrations go into \(K\); initial values are used to compute \(Q\) or to set up ICE tables (next topic). |
| Coefficients in the expression | Experimental rate-law orders | Coefficients in \(K\) come from the balanced equation; orders in rate laws come from experiments. |
| Excluding solids from \(K\) | Solids being irrelevant to the reaction | Solids are still reactants/products; they just have constant concentration and drop out of the expression. |
| \(K\) changing with concentration | \(K\) changing with temperature | Adding reactant shifts the mixture but the *value* of \(K\) stays fixed; only temperature changes \(K\). |

## Quick Review

1. Write the equilibrium expression for \(\ce{2NO2(g) <=> N2O4(g)}\).
2. Why do pure solids and pure liquids not appear in an equilibrium expression?
3. For \(\ce{N2(g) + 3H2(g) <=> 2NH3(g)}\), what is \(\Delta n\)? Will \(K_p\) be larger or smaller than \(K_c\)?
4. If \(K = 10^{-5}\) for a reaction, which side is favored at equilibrium?
5. A reaction is written forward with \(K = 4\). What is \(K\) for the reverse reaction?

<details>
<summary>Show answers</summary>

1. \(K_c = \frac{[\ce{N2O4}]}{[\ce{NO2}]^2}\).
2. Pure solids and liquids have effectively constant concentration (fixed density), so they are incorporated into the value of \(K\) rather than appearing in the expression.
3. \(\Delta n = 2 - (1 + 3) = -2\). Since \((RT)^{\Delta n} = (RT)^{-2} < 1\), \(K_p < K_c\).
4. \(K < 1\) means reactants are favored; equilibrium lies far to the left.
5. \(K_{\text{reverse}} = 1/K = 1/4 = 0.25\).

</details>

## Related Topics

- Previous: [Chemical Equilibria](01-chemical-equilibria.md)
- Next: [Shifting Equilibria: Le Châtelier’s Principle](03-shifting-equilibria-le-cha-telier-s-principle.md)
- Related: [Fundamental Equilibrium Concepts chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
