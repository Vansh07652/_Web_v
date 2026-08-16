---
title: "Coupled Equilibria"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "15: Equilibria of Other Reaction Classes"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "coupled-equilibria"
  - "science"
status: "complete"
---

# Coupled Equilibria

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 15: Equilibria of Other Reaction Classes](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A single equilibrium can be misleading: silver chloride looks "insoluble" (\(K_{sp} = 1.8 \times 10^{-10}\)) and calcium carbonate barely soluble, yet both dissolve readily under the right conditions. The explanation is that equilibria rarely act alone. **Coupled equilibria** are two or more equilibria that share a species, so shifting one shifts the other. When reactions are added, their equilibrium constants **multiply**, producing a net constant that can be enormously larger than any single one. This is how acid dissolves limestone (\(K_{sp} \times 1/K_{a2}\) turns a tiny constant into a favorable one), how ammonia dissolves silver chloride (\(K_{sp} \times K_f\) couples solubility to complexation), and how amphoteric hydroxides like \(\text{Al(OH)}_3\) dissolve in both acid and strong base. The same logic underlies buffers — the acid and its conjugate base are two coupled equilibria sharing \(\text{H}^+\) — and ties together the \(K_{sp}\) and Lewis acid–base chemistry of the previous topics.

## Why This Matters

Coupled equilibria explain real chemistry that single-constant thinking gets wrong. Rainwater (slightly acidic from dissolved CO₂) dissolves limestone, carving caves and creating sinkholes; acid rain accelerates the same coupled reaction, weathering carbonate rock and monuments. As oceans absorb CO₂, the extra H⁺ shifts the carbonate equilibria, making it harder for shell-building organisms to deposit \(\text{CaCO}_3\). Antacids like calcium carbonate and magnesium hydroxide must dissolve in the strongly acidic stomach, and chronic acidosis weakens bone because bone mineral dissolves when local pH drops — both coupled-equilibria phenomena. In the lab, chemists dissolve "insoluble" precipitates on purpose: AgCl in ammonia is a classic qualitative-analysis step, and scale removal from boilers and pipes uses acid on carbonate and hydroxide deposits.

## Core Concepts

### What "coupled" means

Two equilibria are **coupled** when a species produced by one is consumed by the other. \(\text{CaCO}_3(s) \rightleftharpoons \text{Ca}^{2+} + \text{CO}_3^{2-}\) produces carbonate; if acid is present, \(\text{CO}_3^{2-} + \text{H}^+ \rightleftharpoons \text{HCO}_3^-\) consumes it. Removing the product of the first equilibrium pulls it right by Le Châtelier's principle, so more solid dissolves than \(K_{sp}\) alone suggests. The acid works through the shared carbonate ion, not by attacking the solid in one step.

### The net reaction and the net constant

Add the two reactions and cancel the shared species:

\[\text{CaCO}_3(s) \rightleftharpoons \text{Ca}^{2+} + \text{CO}_3^{2-} \qquad K_1 = K_{sp}
\]

\[\text{CO}_3^{2-} + \text{H}^+ \rightleftharpoons \text{HCO}_3^- \qquad K_2 = \frac{1}{K_{a2}} = \frac{1}{4.7 \times 10^{-11}} = 2.1 \times 10^{10}
\]

Sum: \(\text{CaCO}_3(s) + \text{H}^+ \rightleftharpoons \text{Ca}^{2+} + \text{HCO}_3^-\) with:

\[K_{\text{net}} = K_1 \times K_2 = K_{sp} \times \frac{1}{K_{a2}} = (3.3 \times 10^{-9})(2.1 \times 10^{10}) = 70
\]

Why multiply? The mass-action expression for the summed reaction is the product of the two individual expressions. Two rules follow: **adding reactions multiplies their constants**, and **reversing a reaction inverts its constant** (\(K_{\text{rev}} = 1/K\)). With \(K_{\text{net}} = 70\), dissolution is favorable even though \(K_{sp}\) alone is tiny — dividing by the small \(K_{a2}\) amplified the constant by ten orders of magnitude.

### Dissolving precipitates with acid

Any salt whose anion is the conjugate base of a weak acid can be dissolved by strong acid, which removes the anion from solution: carbonates, hydroxides, sulfides, and phosphates all behave this way. The more basic the anion, the more effective acid is at dissolving the salt — which is why \(\text{CaCO}_3\), \(\text{Mg(OH)}_2\), and \(\text{ZnS}\) all dissolve in strong acid despite tiny \(K_{sp}\) values.

### Dissolving precipitates by complexation

A precipitating ion can also be removed by turning it into a complex. Silver chloride dissolves in ammonia:

\[\text{AgCl}(s) + 2\,\text{NH}_3 \rightleftharpoons [\text{Ag(NH}_3\text{)}_2\text{]}^+ + \text{Cl}^- \qquad K_{\text{net}} = K_{sp} \times K_f = 3.1 \times 10^{-3}
\]

The free Ag⁺ produced by dissolution is captured by ammonia (a Lewis base), starving the equilibrium of product and pulling it right — the previous topic's Lewis chemistry applied to solubility.

### Amphoteric hydroxides

Hydroxides like \(\text{Al(OH)}_3\) and \(\text{Zn(OH)}_2\) dissolve in **both** acid and strong base, because two different coupled paths remove their ions:

- In acid: \(\text{Al(OH)}_3(s) + 3\text{H}^+ \rightleftharpoons \text{Al}^{3+} + 3\text{H}_2\text{O}\) (OH⁻ is consumed by H⁺).
- In strong base: \(\text{Al(OH)}_3(s) + \text{OH}^- \rightleftharpoons [\text{Al(OH)}_4]^-\) (Al³⁺ is captured as a hydroxo complex).

A substance that reacts as both acid and base this way is **amphoteric**. Between these extremes, at intermediate pH, \(\text{Al(OH)}_3\) precipitates — the "amphoteric minimum" used to separate aluminum in qualitative analysis.

### Buffers as coupled equilibria

Even the buffer of Chapter 14 is a coupled system: the weak acid and its conjugate base are two equilibria sharing \(\text{H}^+\), and the Henderson–Hasselbalch equation is the algebraic result of coupling \(\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-\) with water autoionization. Viewing buffers, solubility, and complexation through the same "shared species" lens is the payoff of this chapter.

## ELI-10: Explain Like I'm 10

> Imagine a bucket with a small hole: water leaks out slowly (the salt dissolving). If you put a sponge under the hole that soaks up every drop (the acid or ammonia grabbing the ions), the bucket drains much faster — even though the hole is the same size. Coupled equilibria work like that: one reaction keeps removing what the other makes, so things dissolve that looked impossible.

## High-Yield Points

- Coupled equilibria share a species; removing a product of one drives the other via Le Châtelier.
- Adding reactions **multiplies** their constants: \(K_{\text{net}} = K_1 \times K_2\). Reversing a reaction inverts its constant.
- Acid dissolves salts whose anion is a weak-acid conjugate base: carbonates, hydroxides, sulfides, phosphates.
- For carbonate salts: \(K_{\text{net}} = K_{sp}/K_{a2}\) — dividing by a tiny number turns "insoluble" into "dissolves readily" (\(\text{CaCO}_3\): \(K_{\text{net}} \approx 70\)).
- Complexation dissolves precipitates: \(\text{AgCl} + 2\text{NH}_3 \rightleftharpoons [\text{Ag(NH}_3\text{)}_2\text{]}^+ + \text{Cl}^-\), \(K_{\text{net}} = K_{sp} \times K_f = 3.1 \times 10^{-3}\).
- Amphoteric hydroxides (\(\text{Al(OH)}_3\), \(\text{Zn(OH)}_2\)) dissolve in both acid and strong base via different coupled paths.
- Antacids work because acid-coupled dissolution is favorable; chronic acidosis dissolves bone mineral for the same reason.
- Buffers are coupled equilibria sharing H⁺ — one framework ties the whole chapter together.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| coupled equilibria | Two or more equilibria connected by a shared species | Explains dissolution that single constants cannot |
| net (overall) reaction | The sum of coupled reactions after canceling shared species | Shows the chemistry that actually happens |
| net equilibrium constant | \(K_{\text{net}} = K_1 \times K_2\) for summed reactions | A tiny constant can become favorable when coupled |
| amphoteric | Able to react as both an acid and a base | Hydroxides like \(\text{Al(OH)}_3\) dissolve in acid and in strong base |
| complexation | A Lewis base (ligand) binding a metal ion to form a complex | The mechanism that dissolves AgCl in ammonia |
| hydrolysis | Reaction of an ion with water, e.g., \(\text{CO}_3^{2-}\) with H⁺ from water | The acid-side partner in coupled dissolution |
| \(K_f\) | Formation constant for complex-ion formation | Supplies the "sponge" that captures metal ions |

## How It Works / Step-by-Step Process

### Combining two equilibria

1. Write both equilibria, making sure the shared species appears as a product of one and a reactant of the other.
2. Add the reactions; cancel the shared species to get the net reaction.
3. Multiply the constants (invert any reaction you reversed) to get \(K_{\text{net}}\).
4. Use \(K_{\text{net}}\) like any equilibrium constant — with an ICE table if concentrations are needed.

### Predicting whether a precipitate dissolves

1. Identify the ion the dissolving agent removes (anion by acid, cation by ligand).
2. Write the removal equilibrium (protonation: \(K = 1/K_a\); complexation: \(K = K_f\)).
3. Combine: \(K_{\text{net}} = K_{sp} \times\) (removal constant).
4. If \(K_{\text{net}}\) is not tiny (say \(10^{-3}\) or larger), dissolution is significant.

## Worked Examples

### Example 1: Calcium carbonate in acid — the limestone problem

Compute the net constant for dissolving calcite in acid. Constants: \(K_{sp}(\text{CaCO}_3) = 3.3 \times 10^{-9}\) (calcite; values vary slightly with polymorph), and the second acid dissociation of carbonic acid, \(K_{a2}(\text{H}_2\text{CO}_3) = 4.7 \times 10^{-11}\).

Reaction 1 — dissolution:

\[\text{CaCO}_3(s) \rightleftharpoons \text{Ca}^{2+}(aq) + \text{CO}_3^{2-}(aq) \qquad K_1 = 3.3 \times 10^{-9}
\]

Reaction 2 — protonation of carbonate (the reverse of the \(K_{a2}\) step):

\[\text{CO}_3^{2-}(aq) + \text{H}^+(aq) \rightleftharpoons \text{HCO}_3^-(aq) \qquad K_2 = \frac{1}{K_{a2}} = \frac{1}{4.7 \times 10^{-11}} = 2.1 \times 10^{10}
\]

Add them (carbonate cancels) and multiply the constants:

\[
K_{\text{net}} = K_{sp} \times \frac{1}{K_{a2}} = (3.3 \times 10^{-9})(2.1 \times 10^{10}) = 69 \approx 7 \times 10^1
\]

With \(K_{\text{net}} \approx 70\), the reaction is favorable: in acid, calcium carbonate dissolves steadily — dissolving antacid tablets in the stomach, carving limestone caves, and eroding carbonate rock. In neutral water (little H⁺), only the tiny \(K_{sp}\) path operates and dissolution is negligible.

### Example 2: Silver chloride in ammonia — how much dissolves?

Constants: \(K_{sp}(\text{AgCl}) = 1.8 \times 10^{-10}\), \(K_f([\text{Ag(NH}_3\text{)}_2\text{]}^+) = 1.7 \times 10^7\).

Combine the two equilibria:

\[\text{AgCl}(s) \rightleftharpoons \text{Ag}^+ + \text{Cl}^- \qquad K_{sp} = 1.8 \times 10^{-10}
\]

\[\text{Ag}^+ + 2\,\text{NH}_3 \rightleftharpoons [\text{Ag(NH}_3\text{)}_2\text{]}^+ \qquad K_f = 1.7 \times 10^7
\]

Net:

\[\text{AgCl}(s) + 2\,\text{NH}_3(aq) \rightleftharpoons [\text{Ag(NH}_3\text{)}_2\text{]}^+(aq) + \text{Cl}^-(aq)
\]

\[
K_{\text{net}} = K_{sp} \times K_f = (1.8 \times 10^{-10})(1.7 \times 10^7) = 3.1 \times 10^{-3}
\]

Now find how much AgCl dissolves in 1.0 M ammonia. Let \(x\) = molar solubility; then \([[\text{Ag(NH}_3\text{)}_2\text{]}^+] = x\), \([\text{Cl}^-] = x\), and \([\text{NH}_3] = 1.0 - 2x\):

\[
K_{\text{net}} = \frac{x \cdot x}{(1.0 - 2x)^2} = 3.1 \times 10^{-3}
\]

Take the square root of both sides:

\[\frac{x}{1.0 - 2x} = \sqrt{3.1 \times 10^{-3}} = 0.056
\]

\[
x = 0.056(1.0 - 2x) \quad \Rightarrow \quad x + 0.112x = 0.056 \quad \Rightarrow \quad x = 0.050\ \text{M}
\]

About 0.05 mol of AgCl dissolves per liter of 1.0 M ammonia — roughly **4,000 times** the pure-water solubility of \(1.3 \times 10^{-5}\ \text{M}\). This is the classic qualitative-analysis step: precipitate AgCl, then confirm its identity by dissolving it in ammonia.

### Example 3: Why milk of magnesia dissolves in the stomach

Magnesium hydroxide has \(K_{sp} \approx 8.9 \times 10^{-12}\) (values near \(10^{-12}\) appear in standard tables). In the strongly acidic stomach, the coupled path is:

\[\text{Mg(OH)}_2(s) \rightleftharpoons \text{Mg}^{2+} + 2\,\text{OH}^- \qquad K_{sp}
\]

\[2\,\text{OH}^- + 2\,\text{H}^+ \rightleftharpoons 2\,\text{H}_2\text{O} \qquad K = \left(\frac{1}{K_w}\right)^2
\]

Net: \(\text{Mg(OH)}_2(s) + 2\text{H}^+ \rightleftharpoons \text{Mg}^{2+} + 2\text{H}_2\text{O}\), with:

\[
K_{\text{net}} = K_{sp} \times \frac{1}{K_w^2} = \frac{8.9 \times 10^{-12}}{(1.0 \times 10^{-14})^2} = 8.9 \times 10^{16}
\]

A net constant on the order of \(10^{17}\) means the reaction runs essentially to completion: the solid dissolves, releasing Mg²⁺ and consuming H⁺ — exactly how the antacid neutralizes stomach acid. The same logic applies to amphoteric \(\text{Al(OH)}_3\), which dissolves in acid by this path and in strong base via \([\text{Al(OH)}_4]^-\) formation; its "insolubility" is only real in the middle pH range.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| Coupled equilibria | Independent simultaneous equilibria | Coupled equilibria share a species, so shifting one shifts the other; independent ones do not interact |
| \(K_{\text{net}} = K_1 \times K_2\) | \(K_{\text{net}} = K_1 + K_2\) | Constants **multiply** when reactions add (mass-action expressions multiply); they never add |
| Forward constant | Reverse constant | Reversing a reaction inverts its constant: \(K_{\text{rev}} = 1/K\) |
| Common-ion effect | Coupled equilibria | Common ion: one equilibrium, product added directly (AgCl in NaCl). Coupled: two equilibria, shared species removed (AgCl in NH₃) |
| Amphoteric | Amphiprotic | Amphoteric = reacts as acid and base generally; amphiprotic = specifically donates and accepts a proton (\(\text{HCO}_3^-\)) |
| "Insoluble" salt | A salt that never dissolves | Every salt has finite solubility; coupling can multiply effective solubility thousands of times (AgCl in NH₃) or make it essentially complete (Mg(OH)₂ in acid) |
| \(K_{sp}\) alone | Whether the salt dissolves in a real system | Real systems contain acids, ligands, and other ions; always check for coupling partners |

## Quick Review

1. State the rule for combining equilibrium constants when two reactions are added. What about when a reaction is reversed?
2. Write the two equilibria and the net constant for dissolving AgCl in ammonia.
3. Why does acid dissolve \(\text{CaCO}_3\) even though its \(K_{sp}\) is only \(3.3 \times 10^{-9}\)?
4. Compute \(K_{\text{net}}\) for \(\text{CaCO}_3(s) + \text{H}^+ \rightleftharpoons \text{Ca}^{2+} + \text{HCO}_3^-\) using \(K_{sp} = 3.3 \times 10^{-9}\) and \(K_{a2} = 4.7 \times 10^{-11}\).
5. Explain why \(\text{Al(OH)}_3\) dissolves in both acid and strong base.
6. Why is it wrong to call a salt with a very small \(K_{sp}\) "completely insoluble" in a real sample?

<details>
<summary>Show answers</summary>

1. Adding reactions multiplies their constants: \(K_{\text{net}} = K_1 \times K_2\). Reversing a reaction inverts its constant: \(K_{\text{rev}} = 1/K\).
2. \(\text{AgCl}(s) \rightleftharpoons \text{Ag}^+ + \text{Cl}^-\) (\(K_{sp}\)) and \(\text{Ag}^+ + 2\text{NH}_3 \rightleftharpoons [\text{Ag(NH}_3\text{)}_2\text{]}^+\) (\(K_f\)); net: \(\text{AgCl}(s) + 2\text{NH}_3 \rightleftharpoons [\text{Ag(NH}_3\text{)}_2\text{]}^+ + \text{Cl}^-\), \(K_{\text{net}} = K_{sp} \times K_f = 3.1 \times 10^{-3}\).
3. Acid consumes the carbonate ion produced by dissolution (\(\text{CO}_3^{2-} + \text{H}^+ \rightleftharpoons \text{HCO}_3^-\)), removing the product so the equilibrium shifts right. The combined constant \(K_{sp}/K_{a2} \approx 70\) is favorable even though \(K_{sp}\) alone is tiny.
4. \(K_{\text{net}} = 3.3 \times 10^{-9} / (4.7 \times 10^{-11}) = 7.0 \times 10^1 \approx 70\).
5. In acid, H⁺ consumes the OH⁻ product (dissolution via \(\text{Al}^{3+}\)). In strong base, OH⁻ complexes the \(\text{Al}^{3+}\) product as \([\text{Al(OH)}_4]^-\). Both paths remove a product of the dissolution equilibrium, pulling it right by different coupled reactions.
6. Because real samples contain coupling partners — acids, ligands, or other ions — that remove the dissolved ions and can multiply effective solubility by orders of magnitude (e.g., AgCl dissolves ~4,000× better in 1 M NH₃).

</details>

## Related Topics

- Previous: [Lewis Acids and Bases](02-lewis-acids-and-bases.md)
- Next: End of chapter
- Related: [Precipitation and Dissolution](01-precipitation-and-dissolution.md), [Buffers](../../chapter-14-acid-base-equilibria/06-buffers.md)
- Chapter: [Equilibria of Other Reaction Classes overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
