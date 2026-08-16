---
title: "Precipitation and Dissolution"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "15: Equilibria of Other Reaction Classes"
topic_number: "1"
source: "chemistry-atoms-first-2e.md"
tags:
  - "precipitation-and-dissolution"
  - "science"
status: "complete"
---

# Precipitation and Dissolution

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 15: Equilibria of Other Reaction Classes](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Many salts are only slightly soluble in water, yet even "insoluble" salts dissolve a little — the solid sits in equilibrium with a tiny concentration of its ions. For silver chloride:

\[\text{AgCl}(s) \rightleftharpoons \text{Ag}^+(aq) + \text{Cl}^-(aq)
\]

The **solubility product constant**, \(K_{sp}\), quantifies this equilibrium:

\[K_{sp} = [\text{Ag}^+][\text{Cl}^-] = 1.8 \times 10^{-10} \text{ at } 25\ ^\circ\text{C}
\]

The solid itself is left out of the expression because its activity is constant. From \(K_{sp}\) you can compute the **molar solubility** — moles of salt that dissolve per liter of saturated solution — and, going the other way, the **reaction quotient** \(Q\) tells you whether a solution is unsaturated (more solid can dissolve), saturated, or supersaturated (precipitation is expected). Two factors dominate practical use: the **common-ion effect**, which suppresses solubility when a shared ion is already present, and **selective precipitation**, which exploits differences in \(K_{sp}\) to separate ions.

## Why This Matters

Precipitation chemistry surrounds us. Kidney stones form when calcium and oxalate concentrations in urine exceed the \(K_{sp}\) of calcium oxalate. Limestone caves, stalactites, and scale in pipes are precipitation–dissolution systems, and acid rain accelerates limestone dissolution by consuming carbonate ion. Photographic film relies on the low \(K_{sp}\) values of silver halides. In the lab, precipitation separates ions (qualitative analysis), powers gravimetric analysis, and underlies water softening and metal removal in environmental cleanup. Understanding \(K_{sp}\) also sets up the next topics, which explain why "insoluble" solids can still dissolve when acids or complexing agents are present.

## Core Concepts

### The dissolution equilibrium and \(K_{sp}\)

For a slightly soluble salt \(\text{A}_x\text{B}_y\):

\[\text{A}_x\text{B}_y(s) \rightleftharpoons x\,\text{A}^{y+}(aq) + y\,\text{B}^{x-}(aq) \qquad K_{sp} = [\text{A}^{y+}]^x[\text{B}^{x-}]^y
\]

The exponents are the stoichiometric coefficients and the pure solid is excluded. Compare \(K_{sp}\) values directly only for salts with the same stoichiometry — an AB salt and an A₂B salt with the same numerical \(K_{sp}\) are not directly comparable.

### From \(K_{sp}\) to molar solubility

If \(s\) is the molar solubility, then for an AB salt (AgCl):

\[K_{sp} = s \cdot s = s^2
\]

For an AB₂ salt (PbI₂), where one formula unit releases one \(\text{Pb}^{2+}\) and two \(\text{I}^-\):

\[K_{sp} = s(2s)^2 = 4s^3
\]

Always write the dissolution equation first: the stoichiometry sets the exponents and the relation between ion concentrations and \(s\).

### The reaction quotient Q and precipitation

Compare the quotient of actual ion concentrations with \(K_{sp}\):

- \(Q < K_{sp}\): unsaturated — more solid can dissolve.
- \(Q = K_{sp}\): saturated — equilibrium.
- \(Q > K_{sp}\): supersaturated — precipitation occurs until \(Q\) falls to \(K_{sp}\).

The classic exam problem: when two solutions are mixed, recompute ion concentrations **after dilution to the total volume**, then compare \(Q\) with \(K_{sp}\).

### The common-ion effect

If the solution already contains one of the salt's ions (e.g., Cl⁻ from NaCl), Le Châtelier's principle pushes the equilibrium toward the solid, and solubility drops — often by orders of magnitude. This is why precipitates are washed with a common-ion solution to keep them from dissolving, and why AgCl is far less soluble in seawater than in distilled water.

### Selective precipitation

When a reagent forms insoluble salts with several ions, the salt whose \(Q\) exceeds its \(K_{sp}\) at the lowest reagent concentration precipitates first. Adding Ag⁺ slowly to a mixture of 0.010 M Br⁻ and 0.010 M Cl⁻ precipitates AgBr first: AgBr (\(K_{sp} = 5.0 \times 10^{-13}\)) needs only \([\text{Ag}^+] = 5.0 \times 10^{-11}\ \text{M}\), whereas AgCl (\(K_{sp} = 1.8 \times 10^{-10}\)) needs \(1.8 \times 10^{-8}\ \text{M}\) — 360 times more.

## ELI-10: Explain Like I'm 10

> Even "solid rock" salts lose a few pieces into the water — like sugar dissolving, but barely. The \(K_{sp}\) is like a rule that says how many pieces can float free before the solid says "no more." If you already have lots of one kind of piece floating in the water, the solid dissolves even less — that's the common-ion effect — and when two solids could form, the one that needs the fewest pieces forms first.

## High-Yield Points

- \(K_{sp}\) is an equilibrium constant for a solid dissolving; the pure solid is excluded from the expression.
- Molar solubility: AB salt \(s = \sqrt{K_{sp}}\); AB₂ salt \(s = \sqrt[3]{K_{sp}/4}\) — write the dissolution equation first.
- \(Q < K_{sp}\) dissolves; \(Q > K_{sp}\) precipitates; \(Q = K_{sp}\) is saturated.
- Compare \(K_{sp}\) values only between salts of the same stoichiometry.
- Common-ion effect: adding an ion already in the salt's formula lowers its solubility.
- After mixing solutions, always use concentrations in the **total** volume.
- The salt needing the smallest precipitating-ion concentration to exceed \(K_{sp}\) precipitates first.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| solubility product (\(K_{sp}\)) | Equilibrium constant for a slightly soluble salt dissolving, equal to the product of ion concentrations raised to their coefficients | Quantifies how soluble a salt really is |
| molar solubility (\(s\)) | Moles of salt that dissolve per liter of saturated solution | Converts \(K_{sp}\) into a "how much dissolves" number |
| saturated solution | A solution in equilibrium with undissolved solid (\(Q = K_{sp}\)) | The limit of how much salt can stay dissolved |
| reaction quotient (\(Q\)) | The same product expression as \(K_{sp}\), but for actual current concentrations | Predicts whether precipitation will occur |
| common-ion effect | The drop in solubility caused by an ion already in solution being part of the salt | Explains washing precipitates, seawater effects, and solubility control |
| selective precipitation | Separating ions by precipitating them one at a time using differences in \(K_{sp}\) | Core tool of qualitative analysis and ion separation |

## How It Works / Step-by-Step Process

### Computing molar solubility from \(K_{sp}\)

1. Write the balanced dissolution equation and the \(K_{sp}\) expression.
2. Let \(s\) = molar solubility; express each ion concentration in terms of \(s\).
3. Substitute into \(K_{sp}\) and solve for \(s\).
4. Optionally convert to g/L by multiplying \(s\) by the salt's molar mass.

### Predicting precipitation when solutions are mixed

1. Calculate the final concentration of each ion after mixing (dilution: \(M_1V_1 = M_2V_2\) for each ion).
2. Write the \(K_{sp}\) expression for the possible precipitate and substitute the mixed concentrations to get \(Q\).
3. Compare \(Q\) with \(K_{sp}\): \(Q > K_{sp}\) means a precipitate forms.

## Worked Examples

### Example 1: Molar solubility of silver chloride, in mol/L and g/L

For AgCl, \(K_{sp} = 1.8 \times 10^{-10}\). Let \(s\) = molar solubility. Each formula unit gives one Ag⁺ and one Cl⁻:

\[
K_{sp} = [\text{Ag}^+][\text{Cl}^-] = s \cdot s = s^2
\]

\[
s = \sqrt{K_{sp}} = \sqrt{1.8 \times 10^{-10}} = 1.3 \times 10^{-5}\ \text{mol/L}
\]

Convert to grams per liter using the molar mass of AgCl (107.87 + 35.45 = 143.32 g/mol):

\[
1.3 \times 10^{-5}\ \frac{\text{mol}}{\text{L}} \times 143.32\ \frac{\text{g}}{\text{mol}} = 1.9 \times 10^{-3}\ \text{g/L}
\]

So "insoluble" AgCl dissolves about 1.9 mg per liter — tiny, but measurable, and enough to matter below.

### Example 2: Molar solubility of lead(II) iodide (2:1 stoichiometry)

For \(\text{PbI}_2\), \(K_{sp} = 7.1 \times 10^{-9}\). The dissolution:

\[\text{PbI}_2(s) \rightleftharpoons \text{Pb}^{2+}(aq) + 2\,\text{I}^-(aq)
\]

With \(s\) = molar solubility, \([\text{Pb}^{2+}] = s\) and \([\text{I}^-] = 2s\):

\[
K_{sp} = [\text{Pb}^{2+}][\text{I}^-]^2 = s(2s)^2 = 4s^3
\]

\[
s = \sqrt[3]{\frac{K_{sp}}{4}} = \sqrt[3]{\frac{7.1 \times 10^{-9}}{4}} = \sqrt[3]{1.775 \times 10^{-9}} = 1.2 \times 10^{-3}\ \text{mol/L}
\]

The trap: forgetting the factor of 2 on I⁻ (using \(s^3 = K_{sp}\)) gives the wrong answer. The 2:1 stoichiometry makes PbI₂ about 90 times more soluble than AgCl in molar terms, despite its larger \(K_{sp}\).

### Example 3: The common-ion effect on AgCl

How much AgCl dissolves in 0.010 M NaCl? The solution already contains \([\text{Cl}^-] = 0.010\ \text{M}\) before any AgCl dissolves. With \(s\) = molar solubility, \([\text{Ag}^+] = s\) and \([\text{Cl}^-] = 0.010 + s\):

\[
K_{sp} = s(0.010 + s) \approx s(0.010)
\]

because \(s\) is tiny compared with 0.010 M. Solve:

\[
s = \frac{1.8 \times 10^{-10}}{0.010} = 1.8 \times 10^{-8}\ \text{mol/L}
\]

That is roughly 700 times less soluble than in pure water (\(1.3 \times 10^{-5}\ \text{mol/L}\)). The common ion suppresses dissolution almost entirely.

### Example 4: Will a precipitate form when two solutions are mixed?

Mix 20.0 mL of \(1.0 \times 10^{-4}\ \text{M AgNO}_3\) with 20.0 mL of \(1.0 \times 10^{-4}\ \text{M NaCl}\). Could AgCl precipitate?

Compute the concentration of each ion **after mixing** (total volume = 40.0 mL):

\[
[\text{Ag}^+] = [\text{Cl}^-] = \frac{20.0\ \text{mL} \times 1.0 \times 10^{-4}\ \text{M}}{40.0\ \text{mL}} = 5.0 \times 10^{-5}\ \text{M}
\]

Form the quotient and compare with \(K_{sp}\):

\[
Q = [\text{Ag}^+][\text{Cl}^-] = (5.0 \times 10^{-5})(5.0 \times 10^{-5}) = 2.5 \times 10^{-9}
\]

Since \(Q = 2.5 \times 10^{-9} > K_{sp} = 1.8 \times 10^{-10}\), the solution is supersaturated and AgCl **will precipitate** until \(Q\) falls to \(K_{sp}\). Using the pre-mixing concentrations would overestimate \(Q\) by a factor of four.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| \(K_{sp}\) | Solubility | \(K_{sp}\) is an equilibrium constant (units vary with stoichiometry); solubility is a concentration. Related but not interchangeable |
| \(K_{sp}\) of AgCl and \(K_{sp}\) of PbI₂ | Directly comparable numbers | Only salts with the same stoichiometry (same expression form) can be compared directly |
| \(Q\) | \(K_{sp}\) | \(Q\) uses actual current concentrations; \(K_{sp}\) is the equilibrium value. The comparison predicts precipitation |
| "Insoluble" salt | Zero solubility | Every salt dissolves a little; \(K_{sp}\) tells you how little |
| Concentrations before mixing | Concentrations after mixing | Mixing dilutes both ions; always recompute for the total volume |
| Common-ion effect | A different equilibrium | It is the same dissolution equilibrium shifted by Le Châtelier when a product ion is added |
| Solubility of AB₂ | Solubility of AB with the same \(K_{sp}\) | The 2:1 stoichiometry inserts a factor of 4: \(K_{sp} = 4s^3\), not \(s^2\) |

## Quick Review

1. Write the \(K_{sp}\) expression for \(\text{CaF}_2\) dissolving into \(\text{Ca}^{2+}\) and \(\text{F}^-\).
2. The \(K_{sp}\) of AgCl is \(1.8 \times 10^{-10}\). What is its molar solubility in pure water?
3. A solution has \([\text{Ag}^+] = [\text{Cl}^-] = 1.0 \times 10^{-4}\ \text{M}\). Will AgCl precipitate?
4. Why does AgCl dissolve less in seawater than in distilled water?
5. A salt with AB stoichiometry has \(K_{sp} = 1.0 \times 10^{-12}\). If \([\text{A}^{2+}] = [\text{B}^{2-}] = 1.0 \times 10^{-6}\ \text{M}\), is the solution saturated, unsaturated, or supersaturated?
6. In a mixture of 0.010 M Cl⁻ and 0.010 M I⁻, which precipitates first — AgCl (\(K_{sp} = 1.8 \times 10^{-10}\)) or AgI (\(K_{sp} = 8.5 \times 10^{-17}\))? Why?

<details>
<summary>Show answers</summary>

1. \(\text{CaF}_2(s) \rightleftharpoons \text{Ca}^{2+} + 2\text{F}^-\); \(K_{sp} = [\text{Ca}^{2+}][\text{F}^-]^2\).
2. \(s = \sqrt{K_{sp}} = \sqrt{1.8 \times 10^{-10}} = 1.3 \times 10^{-5}\ \text{mol/L}\).
3. \(Q = (1.0 \times 10^{-4})^2 = 1.0 \times 10^{-8} > 1.8 \times 10^{-10}\), so yes — supersaturated, AgCl precipitates.
4. Seawater contains high Cl⁻, a common ion. By Le Châtelier's principle, the extra Cl⁻ pushes the equilibrium toward solid AgCl, cutting solubility to about \(1.8 \times 10^{-8}\ \text{mol/L}\) in 0.010 M Cl⁻.
5. \(Q = (1.0 \times 10^{-6})^2 = 1.0 \times 10^{-12} = K_{sp}\) — exactly saturated.
6. AgI: it needs only \([\text{Ag}^+] = 8.5 \times 10^{-17}/0.010 = 8.5 \times 10^{-15}\ \text{M}\), far less than the \(1.8 \times 10^{-8}\ \text{M}\) needed for AgCl. The smaller the \(K_{sp}\), the earlier the salt precipitates as Ag⁺ is added.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Lewis Acids and Bases](02-lewis-acids-and-bases.md)
- Related: [Coupled Equilibria](03-coupled-equilibria.md), [Acid-Base Titrations](../../chapter-14-acid-base-equilibria/07-acid-base-titrations.md)
- Chapter: [Equilibria of Other Reaction Classes overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
