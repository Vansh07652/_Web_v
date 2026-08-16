---
title: "Buffers"
subject: "Science"
book: "Chemistry 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "6"
source: "chemistry-2e.md"
tags:
  - "buffers"
  - "science"
status: "complete"
---

# Buffers

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

A **buffer** is a solution that resists changes in pH when small amounts of acid or base are added, or when it is diluted. Buffers work because they contain **both members of a conjugate pair in appreciable concentrations** — a weak acid with its conjugate base (e.g., acetic acid + acetate) or a weak base with its conjugate acid (e.g., ammonia + ammonium).

The chemistry is a direct application of the equilibrium ideas from earlier topics. The weak acid \(HA\) and its conjugate base \(A^-\) are connected by

\[
\ce{HA(aq) + H2O(l) <=> H3O+(aq) + A-(aq)}
\]

with

\[
K_a = \frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}
\]

Rearranging and taking \(-\log\) of both sides gives the **Henderson–Hasselbalch equation**, the workhorse of buffer calculations:

\[
\mathrm{pH} = \mathrm{p}K_a + \log\left(\frac{[\ce{A-}]}{[\ce{HA}]}\right)
\]

Added \(\ce{H3O+}\) reacts with the base member (\(A^-\)); added \(\ce{OH-}\) reacts with the acid member (\(HA\)). As long as both members are present in quantity, the ratio \([\ce{A-}]/[\ce{HA}]\) — and therefore the pH — changes only slightly.

## Why This Matters

- **The body runs on buffers.** Blood is held near pH 7.4 by the bicarbonate buffer (\(\ce{H2CO3}/\ce{HCO3-}\)); cellular fluids use phosphate buffers; proteins themselves buffer. A shift of a few tenths of a pH unit in blood can be life-threatening (acidosis/alkalosis), so understanding buffers is understanding how the body stays stable.
- **Laboratory and industry:** Buffer solutions calibrate pH meters, stabilize enzyme reactions, and control the pH of pharmaceuticals, food, and fermentation. Every biotech assay runs in a buffer.
- **Exams:** Buffer pH calculations (Henderson–Hasselbalch), buffer capacity, and buffer preparation are among the highest-yield acid-base problems in general chemistry and nursing/med school prerequisites.

## Core Concepts

### What a buffer is made of

A buffer must contain a weak acid/base pair **with both members present in comparable, non-trivial amounts**:

- Weak acid + its salt (e.g., \(\ce{CH3COOH}\) + \(\ce{CH3COONa}\))
- Weak base + its salt (e.g., \(\ce{NH3}\) + \(\ce{NH4Cl}\))

A strong acid cannot buffer: it fully ionizes, leaving no conjugate partner to react with added \(\ce{OH-}\). Similarly, a lone weak acid without added conjugate base resists base addition only weakly and is swamped by acid addition.

### How a buffer resists pH change

Two reactions absorb the added stress (Le Châtelier's principle):

- **Added strong acid** (\(\ce{H3O+}\)): neutralized by the base member:
  \[
  \ce{A-(aq) + H3O+(aq) -> HA(aq) + H2O(l)}
  \]
- **Added strong base** (\(\ce{OH-}\)): neutralized by the acid member:
  \[
  \ce{HA(aq) + OH-(aq) -> A-(aq) + H2O(l)}
  \]

In both cases the added ions are converted into the other member of the pair — the total amount of acid+base is conserved, and the ratio \([\ce{A-}]/[\ce{HA}]\) shifts only a little.

### The Henderson–Hasselbalch equation

Derived from the \(K_a\) expression:

\[
\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\ce{A-}]}{[\ce{HA}]}
\]

Three practical consequences:

1. **When \([\ce{A-}] = [\ce{HA}]\), pH = p\(K_a\)** (the log term is zero). The best buffer for a target pH uses a weak acid whose p\(K_a\) is close to that pH.
2. **Dilution does not change buffer pH** (to a good approximation): both concentrations shrink by the same factor, so the ratio is unchanged.
3. **The equation is only valid within its assumptions** — it works well when both concentrations are large compared with \(K_a\)-driven changes; it breaks down for very dilute or very strong buffers.

### Buffer capacity and buffer range

- **Buffer capacity** = the amount of strong acid or base a buffer can absorb before the pH changes significantly. Capacity is largest when both \([\ce{HA}]\) and \([\ce{A-}]\) are large, and it is maximal when the ratio is 1:1. Capacity is not the same as pH: a 1.0 M buffer and a 0.01 M buffer can have the same pH but wildly different capacities.
- **Buffer range** ≈ \(\mathrm{p}K_a \pm 1\). Outside this window the ratio becomes extreme (10:1 or worse), the log term dominates, and the buffer resists poorly. Choose the acid with p\(K_a\) nearest the desired pH.

### The bicarbonate buffer of blood

Blood uses \(\ce{H2CO3}/\ce{HCO3-}\) with p\(K_a\) ≈ 6.3 for the first proton, yet blood pH is 7.4 — the buffer operates far from p\(K_a\) because the body regulates it *openly*: lungs remove \(\ce{CO2}\) and kidneys manage \(\ce{HCO3-}\), continuously resupplying both members. This is a reminder that real biological buffers are dynamic systems, not just beakers.

## ELI-10: Explain Like I'm 10

> A buffer is like a seesaw with a grown-up on each side. If a small kid jumps on one side, the grown-ups shift their weight and the seesaw barely moves. One grown-up catches "sour" (acid) pushes, and the other catches "bitter" (base) pushes. When the grown-ups are equal in size, the seesaw stays level — that's when the buffer is best. If a huge truck jumps on instead of a kid, the seesaw tips — that's the buffer getting used up.

## High-Yield Points

- Buffer = weak acid + conjugate base (or weak base + conjugate acid), both at significant concentration.
- Henderson–Hasselbalch: \(\mathrm{pH} = \mathrm{p}K_a + \log([\ce{A-}]/[\ce{HA}])\).
- At \([\ce{A-}] = [\ce{HA}]\), pH = p\(K_a\); this is where capacity is greatest.
- Added \(\ce{H3O+}\) is consumed by \(A^-\); added \(\ce{OH-}\) is consumed by \(HA\) — the ratio barely changes.
- Buffer range ≈ p\(K_a\) ± 1; choose an acid with p\(K_a\) within ~1 unit of the target pH.
- Dilution changes concentrations but not the ratio, so buffer pH is dilution-resistant (ratio unchanged).
- Capacity depends on the *amounts* of both members, not on the ratio alone.
- Blood's \(\ce{H2CO3}/\ce{HCO3-}\) buffer (p\(K_a\) ≈ 6.3) holds pH near 7.4 because lungs and kidneys continuously regenerate both members.
- \(\mathrm{p}K_a = -\log K_a\); acetic acid p\(K_a\) = 4.74 (\(K_a = 1.8 \times 10^{-5}\)); ammonium p\(K_a\) = 9.25.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| buffer | Solution containing a weak acid/base pair that resists pH change | Keeps pH stable in blood, labs, and industry |
| conjugate pair | Acid/base pair differing by one proton | The two members are what absorb added acid or base |
| Henderson–Hasselbalch equation | \(\mathrm{pH} = \mathrm{p}K_a + \log([\ce{A-}]/[\ce{HA}])\) | The standard formula for buffer pH and preparation |
| buffer capacity | Amount of strong acid/base a buffer can absorb before pH changes much | Depends on concentrations of both members, maximized at 1:1 ratio |
| buffer range | pH window ≈ p\(K_a\) ± 1 over which the buffer works well | Guides choice of weak acid for a target pH |
| \(\mathrm{p}K_a\) | \(-\log K_a\), the pH where \([\ce{HA}] = [\ce{A-}]\) | The center of a buffer's useful range |

## How It Works / Step-by-Step Process

### Worked example 1: pH of a buffer, then the effect of added acid

**Problem.** A buffer is made from 0.50 M \(\ce{CH3COOH}\) and 0.50 M \(\ce{CH3COONa}\) (\(K_a = 1.8 \times 10^{-5}\), p\(K_a\) = 4.74). (a) Find the initial pH. (b) Find the pH after adding 0.010 mol of \(\ce{HCl}\) to 1.00 L of this buffer. (c) Compare with adding the same HCl to 1.00 L of pure water.

**Solution (a):**

1. Write the Henderson–Hasselbalch equation:
   \[
   \mathrm{pH} = \mathrm{p}K_a + \log\frac{[\ce{A-}]}{[\ce{HA}]}
   \]
2. Substitute: \(\mathrm{pH} = 4.74 + \log(0.50/0.50) = 4.74 + \log(1) = 4.74\).
3. Equal concentrations → pH = p\(K_a\) = **4.74**.

**Solution (b):**

1. Added \(\ce{H3O+}\) (0.010 mol) reacts with acetate: \(\ce{CH3COO- + H3O+ -> CH3COOH + H2O}\).
2. New amounts per liter: \([\ce{CH3COOH}] = 0.50 + 0.010 = 0.51\ \text{M}\); \([\ce{CH3COO-}] = 0.50 - 0.010 = 0.49\ \text{M}\).
3. Substitute into the same formula:
   \[
   \mathrm{pH} = 4.74 + \log\left(\frac{0.49}{0.51}\right) = 4.74 + \log(0.961) = 4.74 - 0.017 = 4.72
   \]
4. The pH dropped by only **0.02 units**.

**Solution (c):** In pure water, 0.010 mol \(\ce{HCl}\) in 1.00 L gives \([\ce{H3O+}] = 0.010\ \text{M}\) and pH = \(-\log(0.010) = 2.00\) — a change of **5 units**. The buffer absorbed the same acid with a 250× smaller pH change.

### Worked example 2: preparing a buffer at a target pH

**Problem.** You need 1.00 L of buffer at pH 5.00 using acetic acid (p\(K_a\) = 4.74) and sodium acetate. What ratio of \([\ce{CH3COO-}]/[\ce{CH3COOH}]\) is required?

**Solution.**

1. Solve Henderson–Hasselbalch for the ratio:
   \[
   \log\frac{[\ce{A-}]}{[\ce{HA}]} = \mathrm{pH} - \mathrm{p}K_a = 5.00 - 4.74 = 0.26
   \]
2. Exponentiate both sides (base 10):
   \[
   \frac{[\ce{A-}]}{[\ce{HA}]} = 10^{0.26} = 1.8
   \]
3. So use about 1.8 mol of acetate per 1.0 mol of acetic acid (e.g., 0.64 M acetate + 0.36 M acetic acid gives the ratio 1.8 and pH 5.00). The target pH sits within p\(K_a\) ± 1, so this buffer will resist well.

### Worked example 3: ammonia buffer (weak base system)

**Problem.** A buffer contains 0.20 M \(\ce{NH3}\) and 0.30 M \(\ce{NH4Cl}\). For the ammonium ion, \(K_a = 5.6 \times 10^{-10}\), p\(K_a\) = 9.25. Find the pH.

**Solution.**

1. Treat \(\ce{NH4+}\) as the weak acid \(HA\) and \(\ce{NH3}\) as its conjugate base \(A^-\). Use the same formula:
   \[
   \mathrm{pH} = \mathrm{p}K_a + \log\frac{[\ce{NH3}]}{[\ce{NH4+}]}
   \]
2. Substitute: \(\mathrm{pH} = 9.25 + \log(0.20/0.30) = 9.25 + \log(0.667) = 9.25 - 0.18 = 9.07\).
3. The buffer is basic (pH 9.07), as expected for an ammonia-based system; note the p\(K_a\) used is for \(\ce{NH4+}\), not \(K_b\) of \(\ce{NH3}\) — a classic trap.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Strong acid + its salt | Buffer | Strong acids fully ionize — no conjugate partner remains to absorb base; buffers require a *weak* pair |
| pH of buffer | Buffer capacity | pH depends on the ratio \([\ce{A-}]/[\ce{HA}]\); capacity depends on the total amount of both members |
| Adding acid vs adding base | Same reaction | Added \(\ce{H3O+}\) is consumed by \(A^-\); added \(\ce{OH-}\) is consumed by \(HA\) — always identify which member reacts |
| \(K_b\) of \(\ce{NH3}\) | \(K_a\) of \(\ce{NH4+}\) | For an ammonia buffer use p\(K_a\) of the conjugate acid \(\ce{NH4+}\) (9.25), not p\(K_b\) of \(\ce{NH3}\) (4.75) |
| Buffer range | Exact fixed pH | The buffer holds pH near p\(K_a\) but the pH value depends on the ratio; range is roughly p\(K_a\) ± 1 |
| Biological buffer (blood) | Closed beaker buffer | Blood's bicarbonate buffer operates away from p\(K_a\) (6.3 vs pH 7.4) because lungs/kidneys continuously replenish both members |

## Quick Review

1. What two components must a buffer contain?
2. Write the Henderson–Hasselbalch equation and state the condition under which pH = p\(K_a\).
3. A buffer of 0.40 M \(\ce{CH3COOH}\) and 0.40 M \(\ce{CH3COONa}\) (p\(K_a\) 4.74): what is its pH?
4. Which member of the pair consumes added \(\ce{OH-}\)?
5. Why is a 1.0 M buffer more effective than a 0.01 M buffer even at the same pH?
6. What happens to a buffer's pH when it is diluted 10-fold? Why?

<details>
<summary>Show answers</summary>

1. A weak acid and its conjugate base (or a weak base and its conjugate acid), both at significant concentration.
2. \(\mathrm{pH} = \mathrm{p}K_a + \log([\ce{A-}]/[\ce{HA}])\); pH = p\(K_a\) when \([\ce{A-}] = [\ce{HA}]\).
3. pH = 4.74 + log(0.40/0.40) = 4.74.
4. The weak acid \(HA\) reacts with \(\ce{OH-}\) to form \(A^-\) and water.
5. Capacity depends on the amounts of both members: the 1.0 M buffer can neutralize 100× more added acid or base before the ratio (and pH) shifts appreciably.
6. Essentially unchanged: both \([\ce{HA}]\) and \([\ce{A-}]\) decrease by the same factor, so their ratio — and the pH — stay the same (to a good approximation).

</details>

## Related Topics

- Previous: [Polyprotic Acids](05-polyprotic-acids.md)
- Next: [Acid-Base Titrations](07-acid-base-titrations.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
