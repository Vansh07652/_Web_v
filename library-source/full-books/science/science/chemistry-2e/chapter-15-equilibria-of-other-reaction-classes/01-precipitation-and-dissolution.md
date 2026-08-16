---
title: "Precipitation and Dissolution"
subject: "Science"
book: "Chemistry 2e"
chapter: "15: Equilibria of Other Reaction Classes"
topic_number: "1"
source: "chemistry-2e.md"
tags:
  - "precipitation-and-dissolution"
  - "science"
status: "complete"
---

# Precipitation and Dissolution

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 15: Equilibria of Other Reaction Classes](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

When an ionic compound is placed in water, two opposing processes begin immediately: ions leave the solid surface and enter solution (**dissolution**), while ions already in solution collide with the solid and rejoin it (**precipitation**). In many cases these processes reach a dynamic equilibrium in which a *saturated* solution coexists with undissolved solid. This is a **heterogeneous equilibrium**, because it involves both a solid phase and dissolved ions.

The quantitative language for this equilibrium is the **solubility product constant**, \(K_\text{sp}\), which is just an equilibrium constant written for a dissolution process. Because the solid's concentration is fixed, it does not appear in the \(K_\text{sp}\) expression. From \(K_\text{sp}\) we can compute **molar solubility** (how much solid dissolves per liter), predict whether a precipitate will form when solutions are mixed, and control solubility with the **common ion effect**.

## Why This Matters

Precipitation and dissolution govern chemistry everywhere that water meets a sparingly soluble salt. Kidney stones are calcium oxalate and calcium phosphate solids; understanding \(K_\text{sp}\) explains why urine chemistry and hydration affect their formation. Drinking-water plants remove ions like Ca²⁺, Mg²⁺, and Fe³⁺ by deliberately precipitating them as insoluble hydroxides or carbonates. Silver halide precipitates were the basis of traditional photography, and gravimetric analysis — determining an ion's amount by weighing a precipitate — is still used in environmental and clinical labs. Predicting when a solid forms (or dissolves) is also central to geochemistry: cave formation, scale buildup in pipes, and the release of lead from aging plumbing all obey these same equilibria.

## Core Concepts

### The dissolution equilibrium and \(K_\text{sp}\)

For silver chloride, the equilibrium is

\[
\text{AgCl}(s) \rightleftharpoons \text{Ag}^+(aq) + \text{Cl}^-(aq)
\]

and the solubility product is

\[
K_\text{sp} = [\text{Ag}^+][\text{Cl}^-]
\]

The solid is omitted because its "concentration" is constant. \(K_\text{sp}\) is small for sparingly soluble salts (e.g., \(1.8 \times 10^{-10}\) for AgCl at 25 °C) and larger for more soluble ones. Like every equilibrium constant, it depends on temperature.

### Molar solubility connects \(K_\text{sp}\) to a concentration

**Molar solubility**, \(s\), is the number of moles of solid that dissolve per liter of solution. Stoichiometry links \(s\) to the ion concentrations. For a 1:1 salt such as AgCl, \([\text{Ag}^+] = [\text{Cl}^-] = s\), so \(K_\text{sp} = s^2\). For a 1:2 salt such as CaF₂,

\[
\text{CaF}_2(s) \rightleftharpoons \text{Ca}^{2+}(aq) + 2\text{F}^-(aq)
\]

gives \([\text{Ca}^{2+}] = s\) and \([\text{F}^-] = 2s\), so \(K_\text{sp} = [\text{Ca}^{2+}][\text{F}^-]^2 = (s)(2s)^2 = 4s^3\). Always write the balanced dissolution equation first: the exponents in the \(K_\text{sp}\) expression come from the coefficients.

### The reaction quotient \(Q\) predicts precipitation

Before mixing solutions, compute the ion product \(Q\) from the *actual* concentrations. Compare it with \(K_\text{sp}\):

- \(Q < K_\text{sp}\): unsaturated; no precipitate forms (more solid could dissolve).
- \(Q = K_\text{sp}\): exactly saturated; equilibrium holds.
- \(Q > K_\text{sp}\): supersaturated; precipitation occurs until \(Q\) falls to \(K_\text{sp}\).

This is Le Châtelier's principle applied to a dissolution equilibrium: adding ions drives the equilibrium toward solid.

### The common ion effect

If the solution already contains one of the salt's ions from a different source, dissolution is suppressed. For BaSO₄ in a solution that also contains SO₄²⁻ from Na₂SO₄, the sulfate ion shifts the equilibrium

\[
\text{BaSO}_4(s) \rightleftharpoons \text{Ba}^{2+}(aq) + \text{SO}_4^{2-}(aq)
\]

to the left. The molar solubility drops dramatically. Chemists exploit this to precipitate ions as completely as possible in gravimetric analysis.

### Selective precipitation

When several ions could precipitate with the same reagent, the salt with the smaller \(K_\text{sp}\) precipitates first, provided its stoichiometry is comparable. Adding Cl⁻ to a solution containing Ag⁺, Pb²⁺, and Hg₂²⁺ precipitates them in stages — the classic qualitative-analysis scheme. The same idea separates ions in industrial and environmental chemistry.

## ELI-10: Explain Like I'm 10

Imagine a crowded dance floor. Dancers keep leaving the floor (dissolving), and dancers at the edge keep stepping back on (precipitating). At some point, just as many leave as come back, so the crowd size stops changing — that's equilibrium. The solubility product is the "crowd limit": if you push too many dancers on at once, the extras get pushed back off as solid.

## High-Yield Points

- \(K_\text{sp}\) is an equilibrium constant for dissolution; solids never appear in its expression.
- Write the balanced dissolution equation before writing \(K_\text{sp}\); coefficients become exponents.
- For \(\text{AB}\): \(K_\text{sp} = s^2\). For \(\text{AB}_2\) or \(\text{A}_2\text{B}\): \(K_\text{sp} = 4s^3\).
- \(Q > K_\text{sp}\) means precipitation; \(Q < K_\text{sp}\) means no precipitation; \(Q = K_\text{sp}\) means saturated.
- A common ion lowers molar solubility (Le Châtelier); this is why "like dissolves in like" fails for salts.
- Smaller \(K_\text{sp}\) generally means a less soluble salt, but compare only salts of the same stoichiometry (e.g., 1:1 vs 1:1).
- \(K_\text{sp}\) values are tabulated at 25 °C and change with temperature.
- Precipitation can be *forced* by removing a product ion (e.g., by complexation or acid) — the topic of coupled equilibria.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| heterogeneous equilibrium | Equilibrium between species in different phases (here, solid and aqueous ions) | Defines the setting for all solubility problems |
| solubility product (\(K_\text{sp}\)) | Equilibrium constant for dissolution; product of ion concentrations, each raised to its coefficient | The quantitative handle on "how insoluble is it?" |
| molar solubility (\(s\)) | Moles of solid that dissolve per liter of saturated solution | Converts \(K_\text{sp}\) into an actual concentration |
| saturated solution | Solution holding the maximum dissolved salt at equilibrium with solid | The state described by \(K_\text{sp}\) |
| reaction quotient (\(Q\)) | Ion product computed from real, pre-equilibrium concentrations | The tool for predicting precipitation |
| common ion effect | Reduced solubility caused by an ion already present from another source | Used to push precipitation to completion |
| selective (fractional) precipitation | Separating ions by precipitating them one at a time using \(K_\text{sp}\) differences | Basis of qualitative analysis and ion separation |

## How It Works / Step-by-Step Process

1. Write the balanced dissolution equation and its \(K_\text{sp}\) expression.
2. Relate ion concentrations to molar solubility \(s\) through the stoichiometric coefficients.
3. Substitute into \(K_\text{sp}\) and solve for \(s\), or invert to find \(K_\text{sp}\) from measured solubility.
4. For mixing problems, compute \(Q\) from the final (diluted) concentrations and compare with \(K_\text{sp}\).
5. Apply the common ion effect by including the extra source of the shared ion in the \(K_\text{sp}\) expression.

## Example 1: Molar Solubility from \(K_\text{sp}\)

**(a) AgCl.** With \(K_\text{sp} = 1.8 \times 10^{-10}\), the relation \(K_\text{sp} = s^2\) gives

\[
s = \sqrt{K_\text{sp}} = \sqrt{1.8 \times 10^{-10}} = 1.34 \times 10^{-5}
\]

so the molar solubility of AgCl in pure water is \(1.3 \times 10^{-5}\) mol/L.

**(b) CaF₂.** With \(K_\text{sp} = 4.0 \times 10^{-11}\), use \(K_\text{sp} = 4s^3\):

\[
s = \sqrt[3]{\frac{K_\text{sp}}{4}} = \sqrt[3]{\frac{4.0 \times 10^{-11}}{4}} = \sqrt[3]{1.0 \times 10^{-11}} = 2.2 \times 10^{-4}
\]

The molar solubility is \(2.2 \times 10^{-4}\) mol/L. Notice that CaF₂ is roughly ten times *more* soluble than AgCl even though its \(K_\text{sp}\) is smaller — the \(s^3\) relationship punishes small \(K_\text{sp}\) values less harshly than \(s^2\). Comparing salts of different stoichiometry by \(K_\text{sp}\) alone is a trap.

## Example 2: The Common Ion Effect on BaSO₄

Barium sulfate, \(K_\text{sp} = 1.1 \times 10^{-10}\), is used in medical imaging (barium swallow). In pure water, its molar solubility is

\[
s = \sqrt{1.1 \times 10^{-10}} = 1.05 \times 10^{-5}\ \text{mol/L}
\]

Now find the solubility in 0.010 M Na₂SO₄. The sulfate comes from both the dissolving salt and the added Na₂SO₄, so \([\text{SO}_4^{2-}] = 0.010 + s\). Because \(s\) is tiny compared with 0.010, approximate:

\[
K_\text{sp} = [\text{Ba}^{2+}][\text{SO}_4^{2-}] = s(0.010 + s) \approx s(0.010)
\]

\[
s = \frac{1.1 \times 10^{-10}}{0.010} = 1.1 \times 10^{-8}\ \text{mol/L}
\]

The added sulfate reduces the solubility by a factor of about 1000. This is why excess precipitating agent is used in gravimetric analysis: the common ion forces nearly all of the target ion out of solution.

## Example 3: Will a Precipitate Form?

A lab technician mixes 50.0 mL of 0.020 M AgNO₃ with 50.0 mL of 0.040 M NaCl. Mixing doubles the total volume, so each concentration is halved: \([\text{Ag}^+] = 0.010\ \text{M}\) and \([\text{Cl}^-] = 0.020\ \text{M}\). The ion product is

\[
Q = [\text{Ag}^+][\text{Cl}^-] = (0.010)(0.020) = 2.0 \times 10^{-4}
\]

Since \(Q = 2.0 \times 10^{-4}\) is enormously larger than \(K_\text{sp} = 1.8 \times 10^{-10}\), the solution is supersaturated and AgCl precipitates until the remaining ion product equals \(K_\text{sp}\).

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "\(K_\text{sp}\) is the same as molar solubility." | \(K_\text{sp}\) is the equilibrium constant; solubility \(s\) is the amount dissolved. They are related by stoichiometry, not equal. |
| "A salt with a smaller \(K_\text{sp}\) is always less soluble." | Only for identical stoichiometry. CaF₂ (\(K_\text{sp} = 4.0 \times 10^{-11}\)) is more soluble than AgCl (\(K_\text{sp} = 1.8 \times 10^{-10}\)) because of the \(s^3\) vs \(s^2\) relationship. |
| "The solid's concentration appears in \(K_\text{sp}\)." | Pure solids are omitted; their activity is constant. |
| "Adding a common ion makes the salt dissolve more." | It does the opposite: the equilibrium shifts toward solid, lowering solubility. |
| "\(Q > K_\text{sp}\) means nothing happens." | It means precipitation *will* happen — the system is supersaturated. |
| "Exponents in \(K_\text{sp}\) come from the ion charges." | They come from the balanced-equation *coefficients*, not the charges. For CaF₂ it's \([F^-]^2\), not \([F^-]^{1}\) from the −1 charge. |

## Quick Review

1. Write the \(K_\text{sp}\) expression for PbI₂. What relation does it give between \(s\) and \(K_\text{sp}\)?
2. The molar solubility of AgI is about \(9.2 \times 10^{-9}\) mol/L. Estimate its \(K_\text{sp}\).
3. A solution is 0.0010 M in both Ba²⁺ and Ag⁺. If solid Na₂SO₄ is added slowly, which precipitates first, BaSO₄ (\(K_\text{sp} = 1.1 \times 10^{-10}\)) or Ag₂SO₄ (\(K_\text{sp} = 1.2 \times 10^{-5}\))?
4. Why does BaSO₄ dissolve so much less in 0.010 M Na₂SO₄ than in pure water?
5. If \(Q = K_\text{sp}\), what happens macroscopically?

<details>
<summary>Show answers</summary>

1. \(\text{PbI}_2(s) \rightleftharpoons \text{Pb}^{2+} + 2\text{I}^-\), so \(K_\text{sp} = [\text{Pb}^{2+}][\text{I}^-]^2 = s(2s)^2 = 4s^3\).
2. For a 1:1 salt, \(K_\text{sp} = s^2 = (9.2 \times 10^{-9})^2 = 8.5 \times 10^{-17}\), matching the tabulated value.
3. BaSO₄ precipitates first: it needs only \([\text{SO}_4^{2-}] = K_\text{sp}/[\text{Ba}^{2+}] = 1.1 \times 10^{-7}\) M, while Ag₂SO₄ needs \([\text{SO}_4^{2-}] = 1.2 \times 10^{-5}/(0.0010)^2 = 12\) M.
4. The common ion SO₄²⁻ from Na₂SO₄ shifts the dissolution equilibrium toward solid (Le Châtelier), cutting \([\text{Ba}^{2+}]\) to roughly \(K_\text{sp}/0.010\).
5. The solution is exactly saturated: solid and solution coexist at equilibrium, and no net change is visible.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Lewis Acids and Bases](02-lewis-acids-and-bases.md)
- Related: [Coupled Equilibria](03-coupled-equilibria.md) — how complexation and acid dissolve "insoluble" salts
- Related: [Equilibria of Other Reaction Classes chapter overview](../README.md)
- Related: [Solubility in Chapter 11: Solutions and Colloids](../../chapter-11-solutions-and-colloids/03-solubility.md)
- Related: [Chemical Equilibria in Chapter 13: Fundamental Equilibrium Concepts](../../chapter-13-fundamental-equilibrium-concepts/01-chemical-equilibria.md)
- Related: [Acid-Base Equilibria chapter overview](../../chapter-14-acid-base-equilibria/README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Equilibrium constants are standard textbook values at 25 °C (e.g., AgCl \(1.8 \times 10^{-10}\), BaSO₄ \(1.1 \times 10^{-10}\), CaF₂ \(4.0 \times 10^{-11}\), AgI \(8.5 \times 10^{-17}\)); tabulated values vary slightly among reference sources.
- Last updated: 2026-08-15
