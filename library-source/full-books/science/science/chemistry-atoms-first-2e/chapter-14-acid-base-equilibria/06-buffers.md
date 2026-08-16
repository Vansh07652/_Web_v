---
title: "Buffers"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "6"
source: "chemistry-atoms-first-2e.md"
tags:
  - "buffers"
  - "science"
status: "complete"
---

# Buffers

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

A **buffer** is a solution that resists large pH changes when small amounts of strong acid or strong base are added. A buffer contains a weak acid and its conjugate base — or a weak base and its conjugate acid — in significant, comparable amounts. The weak acid "absorbs" added hydroxide; the conjugate base "absorbs" added hydronium, so pH barely moves until the buffer is overwhelmed. The **Henderson–Hasselbalch equation** links buffer pH to the acid's \(\text{p}K_a\) and the ratio \([\text{A}^-]/[\text{HA}]\). Two limits matter: a buffer works only within about one pH unit of its \(\text{p}K_a\) (the **buffer range**), and it neutralizes only a finite amount of added acid or base (the **buffer capacity**).

## Why This Matters

Living systems run on buffers. Blood stays near pH 7.4 (normal arterial range roughly 7.35–7.45), mainly through the carbonic acid/bicarbonate pair working with the lungs and kidneys; a shift of a few tenths of a unit is a medical emergency. Cells use phosphate buffers, and enzymes work only in narrow pH windows. Pharmaceuticals are formulated at controlled pH; fermentation, pools, and aquariums rely on buffers. Buffers also explain the flat "buffer region" of weak-acid titration curves — the next topic.

## Core Concepts

### What a buffer is made of

Both members of a conjugate pair must be present at significant concentrations: acetic acid with sodium acetate provides \(\text{HC}_2\text{H}_3\text{O}_2\) (HA) and \(\text{C}_2\text{H}_3\text{O}_2^-\) (A⁻); ammonium chloride with ammonia provides \(\text{NH}_4^+\) and \(\text{NH}_3\). The pair acts as two sinks:

- Added strong acid (H⁺) is consumed by the base: \(\text{A}^- + \text{H}^+ \rightarrow \text{HA}\).
- Added strong base (OH⁻) is consumed by the acid: \(\text{HA} + \text{OH}^- \rightarrow \text{A}^- + \text{H}_2\text{O}\).

A weak acid alone buffers poorly against added base, and a conjugate-base salt alone buffers poorly against added acid — you need both.

### Why pH stays nearly constant

In \(\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-\), added H⁺ shifts the reaction left (combining with A⁻); added OH⁻ consumes H⁺, shifting it right (HA dissociates to replace the H⁺). Either way, the system restores its original ratio \([\text{A}^-]/[\text{HA}]\), and since pH depends on that ratio, pH is nearly restored.

### The Henderson–Hasselbalch equation

Start from the weak-acid equilibrium expression:

\[K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}
\]

Solve for \([\text{H}^+]\) and take \(-\log\) of both sides:

\[[\text{H}^+] = K_a \cdot \frac{[\text{HA}]}{[\text{A}^-]} \qquad \Rightarrow \qquad \text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}
\]

The key insight: **buffer pH depends on the ratio** \([\text{A}^-]/[\text{HA}]\), not absolute concentrations — so diluting a buffer barely changes its pH but cuts its capacity. The equation assumes equilibrium concentrations equal the formal concentrations, which holds for normal buffers but not for strong acids or very dilute solutions.

### Buffer range and buffer capacity

The **buffer range** is \(\text{p}K_a \pm 1\): outside it the ratio exceeds 10:1 (or falls below 1:10) and one member of the pair is nearly exhausted. **Buffer capacity** is the moles of strong acid or base per liter the buffer can neutralize before pH changes sharply. Capacity peaks when \([\text{A}^-] = [\text{HA}]\) and grows with the total concentration of the pair.

### Choosing and preparing a buffer

Pick a weak acid whose \(\text{p}K_a\) is within about one unit of the target pH, compute the required ratio from the Henderson–Hasselbalch equation, and mix the acid with a salt of its conjugate base. The \(\text{HC}_2\text{H}_3\text{O}_2/\text{C}_2\text{H}_3\text{O}_2^-\) pair (\(\text{p}K_a = 4.74\)) suits targets near pH 5; \(\text{NH}_4^+/\text{NH}_3\) (\(\text{p}K_a = 9.25\)) suits pH near 9; \(\text{H}_2\text{PO}_4^-/\text{HPO}_4^{2-}\) (\(\text{p}K_a \approx 7.2\)) suits physiological pH. Real buffers are verified with a pH meter.

## ELI-10: Explain Like I'm 10

> A buffer is like a seesaw with a heavy weight on each side: the weak acid and its conjugate base. When you push on one side — add a little acid or base — the weights slide a bit and the seesaw barely tips. That is why your blood keeps nearly the same pH whether you eat a lemon or exercise hard.

## High-Yield Points

- A buffer contains a weak acid **and** its conjugate base in significant amounts.
- Added H⁺ is consumed by A⁻; added OH⁻ by HA; pH changes only slightly.
- \(\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}\) — pH depends on the **ratio**, not absolute concentrations.
- When \([\text{A}^-] = [\text{HA}]\), \(\text{pH} = \text{p}K_a\) — the half-neutralization point and the ratio of maximum capacity.
- Buffer range ≈ \(\text{p}K_a \pm 1\); capacity peaks at ratio 1:1 and grows with concentration.
- Blood is buffered near pH 7.4 mainly by the \(\text{H}_2\text{CO}_3/\text{HCO}_3^-\) pair with the lungs and kidneys.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| buffer | A weak acid + its conjugate base solution that resists pH change | Keeps pH nearly constant in biology, medicine, and the lab |
| conjugate acid–base pair | Two species differing by one proton, e.g., \(\text{HC}_2\text{H}_3\text{O}_2\) and \(\text{C}_2\text{H}_3\text{O}_2^-\) | Both members are required to make a buffer |
| Henderson–Hasselbalch equation | Links buffer pH to pKa and the ratio \([\text{A}^-]/[\text{HA}]\) | The standard tool for buffer pH and preparation calculations |
| buffer range | The pH interval (\(\text{p}K_a \pm 1\)) in which a buffer is effective | Choosing the wrong acid makes a useless buffer |
| buffer capacity | Moles of strong acid or base per liter a buffer can absorb before pH changes sharply | Predicts how much disturbance a buffer can survive |
| \(\text{p}K_a\) | \(-\log K_a\); the pH at which a weak acid is half dissociated | Tells you which acid to pick for a target pH |

## How It Works / Step-by-Step Process

### Computing the pH of a buffer

1. Write the acid dissociation equilibrium; identify HA and A⁻.
2. Convert \(K_a\) to \(\text{p}K_a = -\log K_a\).
3. Determine the ratio \([\text{A}^-]/[\text{HA}]\) from the concentrations mixed.
4. Substitute into the Henderson–Hasselbalch equation and solve.

### Predicting the effect of added strong acid or base

1. Convert added moles of strong acid (or base) to moles of H⁺ (or OH⁻) by 1:1 neutralization stoichiometry.
2. Subtract from the species that consumes it; add to the other member of the pair.
3. Divide by the volume, recompute the ratio, and apply the Henderson–Hasselbalch equation.

## Worked Examples

### Example 1: pH of an acetic acid/acetate buffer

A solution is 0.50 M in acetic acid and 0.40 M in sodium acetate. Given \(K_a = 1.8 \times 10^{-5}\), find the pH.

First compute \(\text{p}K_a\):

\[
\text{p}K_a = -\log(1.8 \times 10^{-5}) = 4.74
\]

Apply the Henderson–Hasselbalch equation with \([\text{A}^-] = 0.40\ \text{M}\) and \([\text{HA}] = 0.50\ \text{M}\):

\[
\text{pH} = 4.74 + \log\frac{0.40}{0.50} = 4.74 + \log(0.80) = 4.74 - 0.097 = 4.64
\]

The pH is 4.64 — slightly below the pKa because the acid form is more concentrated. A 0.050 M/0.040 M buffer at the same ratio would have the same pH but far less capacity.

### Example 2: Adding strong acid to a buffer versus to pure water

Add 0.010 mol of HCl to 1.0 L of the buffer from Example 1. The added acid reacts with the conjugate base:

\[\text{C}_2\text{H}_3\text{O}_2^- + \text{H}^+ \rightarrow \text{HC}_2\text{H}_3\text{O}_2
\]

Convert the added HCl to moles of H⁺ by dimensional analysis:

\[
0.010\ \text{mol HCl} \times \frac{1\ \text{mol H}^+}{1\ \text{mol HCl}} = 0.010\ \text{mol H}^+
\]

Each mole of H⁺ consumes one mole of acetate, so in 1.0 L:

\[
[\text{C}_2\text{H}_3\text{O}_2^-] = \frac{0.40 - 0.010\ \text{mol}}{1.0\ \text{L}} = 0.39\ \text{M}
\]

\[
[\text{HC}_2\text{H}_3\text{O}_2] = \frac{0.50 + 0.010\ \text{mol}}{1.0\ \text{L}} = 0.51\ \text{M}
\]

Now apply the Henderson–Hasselbalch equation:

\[
\text{pH} = 4.74 + \log\frac{0.39}{0.51} = 4.74 - 0.117 = 4.62
\]

The pH dropped only 0.02 units (4.64 → 4.62). Put the same 0.010 mol of HCl into 1.0 L of pure water instead: \([\text{H}^+] = 0.010\ \text{mol}/1.0\ \text{L} = 0.010\ \text{M}\), so \(\text{pH} = -\log(0.010) = 2.00\) — a drop of **five** pH units. That contrast is the whole point of a buffer.

**Buffer preparation in practice.** To make a pH 5.00 buffer from 1.00 L of 0.100 M acetic acid, the required ratio is \([\text{A}^-]/[\text{HA}] = 10^{5.00 - 4.74} = 1.8\), so \([\text{A}^-] = 0.18\ \text{M}\). That is \(0.18\ \text{mol}\) of sodium acetate — \(0.18\ \text{mol} \times 82.03\ \frac{\text{g}}{\text{mol}} \approx 15\ \text{g}\) — dissolved in the acid solution.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| A buffer | Any weak acid solution | A weak acid alone resists added base poorly; you need the conjugate pair in comparable amounts |
| Buffer pH | Buffer capacity | pH depends on the ratio \([\text{A}^-]/[\text{HA}]\); capacity depends on the total amount of the pair |
| Adding acid | Adding base | H⁺ is consumed by A⁻ (pH dips slightly); OH⁻ is consumed by HA (pH rises slightly) |
| \(\text{p}K_a\) | pH | pKa is a property of the acid; pH is a property of the solution. Equal only when \([\text{A}^-] = [\text{HA}]\) |
| Diluting a buffer | Destroying a buffer | Dilution barely changes pH (ratio unchanged) but sharply cuts capacity |
| Henderson–Hasselbalch equation | An exact law for any solution | Assumes equilibrium concentrations equal the formal concentrations — invalid for very dilute solutions and strong acids |

## Quick Review

1. What two species must a buffer contain, and what does each neutralize?
2. Write the Henderson–Hasselbalch equation. What is the pH when \([\text{A}^-] = [\text{HA}]\)?
3. A buffer made from an acid with \(\text{p}K_a = 4.74\) has \([\text{A}^-]/[\text{HA}] = 10\). What is its pH?
4. Which resists added base better: 0.10 M HA/0.10 M A⁻ or 0.50 M HA/0.50 M A⁻? Why?
5. Why is the bicarbonate buffer effective at blood pH 7.4 even though its \(\text{p}K_a\) is about 6.1?
6. What is the practical range of a buffer whose weak acid has \(K_a = 1.8 \times 10^{-5}\)?

<details>
<summary>Show answers</summary>

1. A weak acid (HA) and its conjugate base (A⁻). HA neutralizes added OH⁻; A⁻ neutralizes added H⁺.
2. \(\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}\). When \([\text{A}^-] = [\text{HA}]\), the log term is zero, so \(\text{pH} = \text{p}K_a\).
3. \(\text{pH} = 4.74 + \log(10) = 5.74\).
4. The 0.50 M/0.50 M buffer: same pH (ratio 1:1), but capacity scales with concentration, so it absorbs five times more added base.
5. Blood is an open system: the lungs exhale CO₂ and the kidneys regulate \(\text{HCO}_3^-\), keeping the ratio that gives pH 7.4.
6. \(\text{p}K_a = -\log(1.8 \times 10^{-5}) = 4.74\), so the effective range is about 3.7 to 5.7.

</details>

## Related Topics

- Previous: [Polyprotic Acids](05-polyprotic-acids.md)
- Next: [Acid-Base Titrations](07-acid-base-titrations.md)
- Related: [Hydrolysis of Salts](04-hydrolysis-of-salts.md), [Relative Strengths of Acids and Bases](03-relative-strengths-of-acids-and-bases.md)
- Chapter: [Acid-Base Equilibria overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
