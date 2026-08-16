---
title: "Polyprotic Acids"
subject: "Science"
book: "Chemistry 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "5"
source: "chemistry-2e.md"
tags:
  - "polyprotic-acids"
  - "science"
status: "complete"
---

# Polyprotic Acids

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

The acids you have met so far — HCl, acetic acid, ammonia's conjugate acid — donate or accept exactly one proton. **Polyprotic acids** can donate more than one: sulfuric acid has two, phosphoric acid has three, carbonic acid has two. The key twist: the protons come off **one at a time**, each step with its own equilibrium constant. The first step is the "easiest" and has the largest \(K_{a1}\); later steps fight the growing negative charge on the ion and have much smaller constants. A polyprotic acid in water is several simultaneous acid–base equilibria, and knowing which one controls the pH is the heart of this topic.

## Why This Matters

Polyprotic acids are everywhere in biology and industry. Phosphoric acid is the backbone of DNA and ATP, and phosphate's three \(pK_a\) values make it a versatile biological buffer. Carbonic acid and bicarbonate control blood pH and drive the release of CO₂ in your lungs. Sulfuric acid is the most-produced industrial chemical in the world, and its two-step behavior changes how it is handled and neutralized. Soft drinks fizz because carbonic acid decomposes; hard water leaves scale because carbonate chemistry shifts with pH. Predicting which species is present at a given pH is a constant skill in biochemistry and environmental chemistry.

## Core Concepts

### Stepwise ionization: one proton at a time

Phosphoric acid ionizes in three distinct steps, each with its own constant:

\[
\mathrm{H_3PO_4} + \mathrm{H_2O} \rightleftharpoons \mathrm{H_2PO_4^-} + \mathrm{H_3O^+} \qquad K_{a1} = 7.5\times10^{-3}
\]

\[
\mathrm{H_2PO_4^-} + \mathrm{H_2O} \rightleftharpoons \mathrm{HPO_4^{2-}} + \mathrm{H_3O^+} \qquad K_{a2} = 6.2\times10^{-8}
\]

\[
\mathrm{HPO_4^{2-}} + \mathrm{H_2O} \rightleftharpoons \mathrm{PO_4^{3-}} + \mathrm{H_3O^+} \qquad K_{a3} = 4.2\times10^{-13}
\]

Each constant is dramatically smaller than the one before it: removing a proton from a neutral molecule is easier than pulling one off a negatively charged ion, and harder still off a doubly charged one. This pattern — \(K_{a1} \gg K_{a2} \gg K_{a3}\) — holds for essentially every polyprotic acid. (Exception: sulfuric acid's first step is complete, so only \(K_{a2} = 1.2\times10^{-2}\) is a real equilibrium.)

### Which step controls the pH?

For the pure acid, the first ionization dominates \([\mathrm{H_3O^+}]\). The later steps are suppressed by their tiny constants and by the common-ion effect: the \(\mathrm{H_3O^+}\) already produced pushes them far to the left. For most diprotic acids you can calculate pH using only \(K_{a1}\); the step-1 species (like \(\mathrm{H_2PO_4^-}\)) matters for speciation, not for the pH of the acid's own solution.

### The special case of sulfuric acid

Sulfuric acid is unique among common acids: the first proton comes off completely (it is a strong acid), leaving \(\mathrm{HSO_4^-}\), which then behaves as a weak acid with \(K_{a2} = 1.2\times10^{-2}\). Calculating the pH of H₂SO₄ requires treating the first step as complete (initial \([\mathrm{H^+}] = [\mathrm{HSO_4^-}] = C\)) and then solving the second equilibrium for the extra protons. This is the one polyprotic case where you cannot ignore the second step, because \(K_{a2}\) is large enough to matter.

### Speciation: which form dominates at which pH

The fraction of each form (H₃PO₄, H₂PO₄⁻, HPO₄²⁻, PO₄³⁻) depends on pH, not concentration: the acid form dominates below \(pK_{a1}\), the first conjugate base between \(pK_{a1}\) and \(pK_{a2}\), and so on. At blood pH 7.4, phosphate exists mostly as H₂PO₄⁻ and HPO₄²⁻ in nearly equal amounts — exactly the pair that makes a good buffer.

## ELI-10: Explain Like I'm 10

> A polyprotic acid is like a candy machine that gives out protons one coin at a time. The first coin is easy — the machine is full and happy. After the first proton leaves, the molecule has a negative charge, the machine is less eager, and the second proton is harder to get. Each time one leaves, the next is even harder — which is why the equilibrium constants get smaller with each step.

## High-Yield Points

- Protons leave one at a time; each step has its own \(K_{a1}, K_{a2}, K_{a3}\).
- \(K_{a1} \gg K_{a2} \gg K_{a3}\): removing a proton from a negatively charged ion is harder.
- For the pure acid, pH is set almost entirely by \(K_{a1}\); later steps are negligible in most calculations.
- Sulfuric acid is the exception: step 1 is complete, then \(\mathrm{HSO_4^-}\) ionizes with \(K_{a2} = 1.2\times10^{-2}\) — the second step must be included.
- Common acids: H₂SO₄, H₃PO₄, H₂CO₃, H₂S, oxalic acid.
- Amphiprotic intermediates (H₂PO₄⁻, HCO₃⁻) can act as acids or bases; which constant applies decides the outcome.
- Speciation follows pH: below \(pK_{a1}\) the fully protonated form dominates; between \(pK_{a1}\) and \(pK_{a2}\) the singly deprotonated form does, etc.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| polyprotic acid | Acid that can donate more than one proton. | Requires stepwise treatment instead of a single \(K_a\). |
| stepwise ionization | Sequential loss of protons, each with its own equilibrium constant. | pH calculations use only the dominant first step. |
| \(K_{a1}, K_{a2}, K_{a3}\) | Equilibrium constants for the first, second, and third proton losses. | Each successive constant is orders of magnitude smaller. |
| amphiprotic ion | Intermediate that can accept or donate a proton (H₂PO₄⁻, HCO₃⁻). | Key to buffer behavior between \(pK_a\) values. |
| speciation | Distribution of an acid's forms as a function of pH. | Tells you which species dominates at a given pH. |

## How It Works / Step-by-Step Process

1. Write the stepwise reactions, each with its own \(K_a\).
2. For the pure acid, assume the first step sets \(\mathrm{[H_3O^+]}\); ignore later steps unless \(K_{a1}\) is large (e.g., sulfuric acid).
3. Set up an ICE table for the first step using \(K_{a1}\).
4. Check the 5% rule; if ionization exceeds 5%, solve the quadratic instead of using \(\sqrt{K_{a1} C}\).
5. For H₂SO₄ only: treat step 1 as complete, then run a second ICE table with \(K_{a2}\) for the extra \(\mathrm{[H_3O^+]}\).
6. For speciation, compare pH with \(pK_{a1}, pK_{a2}, pK_{a3}\) to identify the dominant form.

## Worked Examples

### Example 1: pH of 0.10 M phosphoric acid

Phosphoric acid has \(K_{a1} = 7.5\times10^{-3}\), \(K_{a2} = 6.2\times10^{-8}\), \(K_{a3} = 4.2\times10^{-13}\). Estimate the pH of a 0.10 M solution. Step 1 sets the pH, so use \(K_{a1}\):

\[
K_{a1} = \frac{x^2}{0.10 - x} = 7.5\times10^{-3}
\]

Try \(0.10 - x \approx 0.10\):

\[
x = \sqrt{(7.5\times10^{-3})(0.10)} = 2.7\times10^{-2}\ \mathrm{M}
\]

That is 27% ionization — far above the 5% rule — so the approximation fails and we must solve the quadratic:

\[
x^2 + (7.5\times10^{-3})x - 7.5\times10^{-4} = 0
\]

\[
x = \frac{-7.5\times10^{-3} + \sqrt{(7.5\times10^{-3})^2 + 4(7.5\times10^{-4})}}{2} = 2.4\times10^{-2}\ \mathrm{M}
\]

\[
\mathrm{pH} = -\log(2.4\times10^{-2}) = 1.62
\]

The second and third steps contribute almost nothing: \(K_{a2}\) is a hundred thousand times smaller than \(K_{a1}\), and the common-ion effect suppresses it further.

### Example 2: pH of 0.10 M sulfuric acid

Sulfuric acid's first proton ionizes completely: \([\mathrm{H_3O^+}]_0 = [\mathrm{HSO_4^-}]_0 = 0.10\) M. Now treat \(\mathrm{HSO_4^-}\) as a weak acid with \(K_{a2} = 1.2\times10^{-2}\):

\[
\mathrm{HSO_4^-} + \mathrm{H_2O} \rightleftharpoons \mathrm{SO_4^{2-}} + \mathrm{H_3O^+}, \qquad
K_{a2} = \frac{[\mathrm{SO_4^{2-}}][\mathrm{H_3O^+}]}{[\mathrm{HSO_4^-}]} = 1.2\times10^{-2}
\]

Let \(x = [\mathrm{SO_4^{2-}}]\). Then \([\mathrm{H_3O^+}] = 0.10 + x\) and \([\mathrm{HSO_4^-}] = 0.10 - x\):

\[
1.2\times10^{-2} = \frac{x(0.10 + x)}{0.10 - x}
\]

This rearranges to \(x^2 + 0.112x - 1.2\times10^{-3} = 0\), giving \(x = 9.9\times10^{-3}\ \mathrm{M}\). The total proton concentration:

\[
[\mathrm{H_3O^+}] = 0.10 + 9.9\times10^{-3} = 0.11\ \mathrm{M}, \qquad \mathrm{pH} = -\log(0.11) = 0.96
\]

Note the contrast: ignoring the second step predicts pH 1.00; including it gives 0.96 — a real difference and a common exam trap.

### Example 3: dominant species of carbonic acid at blood pH

Carbonic acid has \(pK_{a1} = 6.4\) and \(pK_{a2} = 10.3\). At blood pH 7.4, which form dominates?

Since 7.4 is above \(pK_{a1}\) but below \(pK_{a2}\), the first deprotonation has largely occurred and the second has not: the mixture is mostly \(\mathrm{HCO_3^-}\) (bicarbonate) with a substantial fraction of \(\mathrm{H_2CO_3}\). This H₂CO₃/HCO₃⁻ pair is the body's main buffer — see [Buffers](06-buffers.md). \(\mathrm{CO_3^{2-}}\) is essentially absent at blood pH.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| "One \(K_a\) for the whole acid" | One \(K_a\) per proton | Each step has its own constant; H₃PO₄ has three. |
| Doubling the \(K_{a1}\) result | Adding step-2 protons | Later steps are usually negligible, not additive — never "double" the first pH. |
| H₂SO₄ treated like H₃PO₄ | H₂SO₄'s first step is complete | H₂SO₄'s \(K_{a1}\) is effectively infinite; H₃PO₄'s first step is a real equilibrium (\(K_{a1} = 7.5\times10^{-3}\)). |
| \(\mathrm{HCO_3^-}\) as only a base | \(\mathrm{HCO_3^-}\) as amphiprotic | It can donate a proton (\(K_{a2}\)) or accept one (\(K_w/K_{a1}\)); the bigger constant wins. |
| Using \(K_{a2}\) for the acid's pH | Using \(K_{a1}\) | For the pure acid solution, \(K_{a1}\) sets the pH; \(K_{a2}\) matters for salts of the acid (e.g., NaHCO₃). |

## Quick Review

1. Why is \(K_{a2}\) always much smaller than \(K_{a1}\) for a polyprotic acid?
2. For 0.10 M H₂CO₃ (\(K_{a1} = 4.3\times10^{-7}\)), why is it safe to ignore the second ionization when finding pH, and what pH results?
3. Why can't you "ignore the second step" for 0.10 M H₂SO₄ as you can for carbonic acid?
4. At pH 12, which phosphate species dominates: H₃PO₄, H₂PO₄⁻, HPO₄²⁻, or PO₄³⁻?
5. Is \(\mathrm{HCO_3^-}\) an acid or a base in water, and how would you decide quantitatively?

<details>
<summary>Show answers</summary>

1. Pulling a proton off a negatively charged species is electrostatically harder than off a neutral molecule, and progressively harder with each added charge, so each successive constant is much smaller.
2. \(K_{a2} = 5.6\times10^{-11}\) is so tiny its proton contribution is negligible. Using \(K_{a1}\): \(x = \sqrt{(4.3\times10^{-7})(0.10)} = 2.1\times10^{-4}\) M, so pH ≈ 3.68 (0.2% ionization — well within the 5% rule).
3. Its first step is complete, leaving 0.10 M \(\mathrm{HSO_4^-}\); \(K_{a2} = 1.2\times10^{-2}\) is large enough that the second step adds measurably to \([\mathrm{H_3O^+}]\) (pH 0.96 vs. 1.00).
4. HPO₄²⁻. With \(pK_{a2} = 7.2\) and \(pK_{a3} = 12.4\), pH 12 falls between them, so the doubly deprotonated form dominates.
5. As an acid it uses \(K_{a2} = 5.6\times10^{-11}\); as a base, \(K_b = K_w/K_{a1} = 2.3\times10^{-8}\). Since \(K_b > K_a\), bicarbonate is a net base in water.

</details>

## Related Topics

- Previous: [Hydrolysis of Salts](04-hydrolysis-of-salts.md)
- Next: [Buffers](06-buffers.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
