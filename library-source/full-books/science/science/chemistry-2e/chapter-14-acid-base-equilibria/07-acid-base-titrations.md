---
title: "Acid-Base Titrations"
subject: "Science"
book: "Chemistry 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "7"
source: "chemistry-2e.md"
tags:
  - "acid-base-titrations"
  - "science"
status: "complete"
---

# Acid-Base Titrations

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

A **titration** is a controlled neutralization: you slowly add a solution of known concentration (the **titrant**) from a buret to a measured volume of solution with unknown concentration (the **analyte**), until the reaction is exactly complete. At that point — the **equivalence point** — the moles of acid and base added are stoichiometrically equivalent, and the volume of titrant used lets you calculate the unknown concentration.

The workhorse relationship is stoichiometry, not pH:

\[
\text{mol titrant} = \text{concentration} \times \text{volume}
\]

\[
n = M \times V
\]

For a monoprotic acid–base reaction (\(\ce{HA + OH- -> A- + H2O}\)), one mole of \(\ce{OH-}\) neutralizes one mole of \(\ce{HA}\), so at equivalence:

\[
M_a V_a = M_b V_b
\]

The **equivalence point is not always pH 7**: strong acid + strong base → pH 7; weak acid + strong base → pH > 7 (the conjugate base hydrolyzes); weak base + strong acid → pH < 7 (the conjugate acid hydrolyzes). Choosing an **indicator** whose color-change range brackets the equivalence-point pH is the practical skill — the **endpoint** (observed color change) should match it as closely as possible.

## Why This Matters

- **Analytical chemistry everywhere:** Titration determines the concentration of acids in wine and vinegar, bases in cleaning products, hardness of water, and active ingredients in pharmaceuticals — a standard quality-control technique.
- **Clinical and biological chemistry:** Quantifying acids in blood/urine, measuring enzyme activity, and calibrating reagents all rely on titration logic. The same \(M_a V_a = M_b V_b\) reasoning underlies how "normal" saline and buffer compositions are verified.
- **The titration curve is a map of acid-base behavior:** The shape of the pH-vs-volume curve reveals whether the acid is strong or weak, its \(K_a\), and the stoichiometry of polyprotic species — one experiment, many answers.
- **Exams:** Titration calculations (find unknown molarity, find \(K_a\) from half-equivalence, choose an indicator) are guaranteed exam material in general chemistry and health-science programs.

## Core Concepts

### The setup and the equivalence point

A buret delivers titrant in measured increments into a flask (or beaker) containing the analyte plus a few drops of indicator. The **equivalence point** is the theoretical point where moles of \(\ce{H3O+}\) and \(\ce{OH-}\) added are stoichiometrically equal. The **endpoint** is where the indicator actually changes color. A good indicator changes color right at the equivalence point, making endpoint ≈ equivalence point.

### Titration curves: three classic shapes

- **Strong acid–strong base:** pH starts low (e.g., 1 for 0.1 M HCl), rises slowly, then jumps almost vertically through pH 7 at equivalence; the curve is nearly symmetric. **Equivalence pH = 7.** Any indicator changing color between ~4 and ~10 (phenolphthalein, bromothymol blue, methyl red) works.
- **Weak acid–strong base:** The curve starts higher (pH ≈ 2.9 for 0.1 M acetic acid) and shows a **buffer region** — a flat stretch around p\(K_a\) where pH changes slowly — before the steep rise. **Equivalence pH > 7** (the acetate ion is a weak base). At the **half-equivalence point** (half the base needed), pH = p\(K_a\), which is how a titration can measure \(K_a\). Use phenolphthalein (color change ~8.2–10); methyl red would change too early.
- **Weak base–strong acid:** Mirror image. Starts basic (0.1 M \(\ce{NH3}\) has pH ≈ 11.1), buffer region around p\(K_a\) of \(\ce{NH4+}\) (9.25), steep drop, **equivalence pH < 7** (ammonium is a weak acid). Use methyl red (change ~4.4–6.2) or bromothymol blue; phenolphthalein would change too late.

### Indicators: how they work

An indicator is itself a weak acid whose acid and base forms have different colors: \(\ce{HIn}\) (color A) ⇌ \(\ce{H+ + In-}\) (color B). The eye sees the acid color when pH is below roughly p\(K_{a,\text{In}} - 1\) and the base color above p\(K_{a,\text{In}} + 1\), with a transition range of about 2 pH units around its p\(K_a\). **Rule: pick an indicator whose transition range contains the equivalence-point pH.**

### Polyprotic acids and specialized titrations

A diprotic acid like \(\ce{H2SO3}\) or \(\ce{H2CO3}\) shows **two** equivalence points and two buffer regions, one per proton. This is how chemists determine both the concentration and the identity of a polyprotic species. (Indicators and curves for these are more complex; general chemistry usually treats them qualitatively.)

### Practical notes

General safety principles apply whenever handling acids, bases, and glassware: wear eye protection, work in a ventilated area, and add reagents slowly to avoid splashing. Never taste or touch samples; treat all solutions as potentially hazardous.

## ELI-10: Explain Like I'm 10

> A titration is like figuring out how much salt is in a glass of water by adding one teaspoon of pure saltwater at a time until the taste is exactly balanced — the number of teaspoons tells you how much was there. In chemistry, the "taste" is a color change from an indicator. The instant the color flips, you stop and read the buret: the volume you added is the answer to the math problem.

## High-Yield Points

- Equivalence point: moles of acid and base are stoichiometrically equal; calculated from \(M_a V_a = M_b V_b\) (1:1 reactions).
- Endpoint ≠ equivalence point: endpoint is the observed color change; aim for an indicator whose range brackets the equivalence pH.
- Equivalence pH: strong+strong = 7; weak acid+strong base > 7; weak base+strong acid < 7.
- Half-equivalence point of a weak acid: pH = p\(K_a\) — the easiest way to measure \(K_a\) from a titration curve.
- Buffer region on a weak-acid curve: flat pH stretch around p\(K_a\), from the conjugate pair formed during titration.
- Indicator rule of thumb: phenolphthalein (8.2–10) for weak acid + strong base; methyl red (4.4–6.2) for weak base + strong acid; any mid-range indicator for strong + strong.
- Always use stoichiometry with units (dimensional analysis) — volume in L, concentration in mol/L, product in mol.
- General lab safety: eye protection, slow addition, no tasting — applies to all titrations.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| titration | Controlled addition of known-concentration solution to find an unknown concentration | Standard quantitative technique across chemistry, food, pharma, and clinical labs |
| titrant | Solution of known concentration delivered from the buret | Its volume at equivalence is the measured quantity |
| analyte | The solution of unknown concentration being analyzed | The target of the measurement |
| equivalence point | Point where added moles of titrant are stoichiometrically equal to moles of analyte | The theoretical basis of the calculation |
| endpoint | Point where the indicator changes color | Should coincide with (or bracket) the equivalence point |
| indicator | Weak acid whose two forms have different colors | Tells you when to stop; must match the equivalence pH |
| buffer region | Flat pH region near p\(K_a\) on a weak-acid/base titration curve | Where pH resists change; where pH = p\(K_a\) at half-equivalence |

## How It Works / Step-by-Step Process

### Worked example 1: strong acid–strong base — find the unknown concentration

**Problem.** 25.00 mL of \(\ce{HCl}\) of unknown concentration requires 30.00 mL of 0.100 M \(\ce{NaOH}\) to reach the equivalence point. Find the molarity of the acid.

**Solution.**

1. Convert volumes to liters: \(V_b = 30.00\ \text{mL} = 0.03000\ \text{L}\).
2. Compute moles of titrant (formula first, then substitution):
   \[
   n_b = M_b V_b = (0.100\ \text{mol/L})(0.03000\ \text{L}) = 3.00 \times 10^{-3}\ \text{mol NaOH}
   \]
   Dimensional check: (mol/L)(L) = mol ✓
3. Stoichiometry: \(\ce{HCl + NaOH -> NaCl + H2O}\) is 1:1, so \(n_a = n_b = 3.00 \times 10^{-3}\ \text{mol HCl}\).
4. Solve for the unknown:
   \[
   M_a = \frac{n_a}{V_a} = \frac{3.00 \times 10^{-3}\ \text{mol}}{0.02500\ \text{L}} = 0.120\ \text{M}
   \]
   Dimensional check: mol/L = M ✓
5. Equivalence pH is 7 (strong + strong); any mid-range indicator works.

### Worked example 2: weak acid–strong base — pH at equivalence and indicator choice

**Problem.** 25.00 mL of 0.100 M \(\ce{CH3COOH}\) (\(K_a = 1.8 \times 10^{-5}\)) is titrated with 0.100 M \(\ce{NaOH}\). (a) What volume of base reaches equivalence? (b) Estimate the pH at equivalence and choose an indicator.

**Solution (a):**

1. Moles of acid: \(n_a = (0.100\ \text{mol/L})(0.02500\ \text{L}) = 2.50 \times 10^{-3}\ \text{mol}\).
2. 1:1 reaction → need \(2.50 \times 10^{-3}\ \text{mol NaOH}\). Solve the volume formula for \(V_b\):
   \[
   V_b = \frac{n_b}{M_b} = \frac{2.50 \times 10^{-3}\ \text{mol}}{0.100\ \text{mol/L}} = 0.0250\ \text{L} = 25.00\ \text{mL}
   \]

**Solution (b):**

1. At equivalence all acid is converted to acetate. Total volume = 25.00 + 25.00 = 50.00 mL = 0.0500 L, so:
   \[
   [\ce{CH3COO-}] = \frac{2.50 \times 10^{-3}\ \text{mol}}{0.0500\ \text{L}} = 0.0500\ \text{M}
   \]
2. Acetate is a weak base: \(K_b = K_w/K_a = (1.0 \times 10^{-14})/(1.8 \times 10^{-5}) = 5.6 \times 10^{-10}\).
3. For a weak base, \([\ce{OH-}] \approx \sqrt{K_b [\ce{A-}]}\):
   \[
   [\ce{OH-}] = \sqrt{(5.6 \times 10^{-10})(0.0500)} = \sqrt{2.8 \times 10^{-11}} = 5.3 \times 10^{-6}\ \text{M}
   \]
4. \(\mathrm{pOH} = -\log(5.3 \times 10^{-6}) = 5.28\), so \(\mathrm{pH} = 14.00 - 5.28 = 8.72\).
5. Equivalence pH ≈ 8.7 (> 7). **Choose phenolphthalein** (transition 8.2–10), which brackets 8.7. Methyl red would change color far too early.

### Worked example 3: weak base–strong acid — indicator choice and half-equivalence

**Problem.** 0.100 M \(\ce{NH3}\) is titrated with 0.100 M \(\ce{HCl}\). (a) At half-equivalence, what is the pH? (b) What is the equivalence pH (qualitatively) and which indicator fits?

**Solution (a):**

1. At half-equivalence, half the \(\ce{NH3}\) has become \(\ce{NH4+}\): \([\ce{NH3}] = [\ce{NH4+}]\).
2. Use Henderson–Hasselbalch with p\(K_a\) of \(\ce{NH4+}\) = 9.25:
   \[
   \mathrm{pH} = \mathrm{p}K_a + \log\frac{[\ce{NH3}]}{[\ce{NH4+}]} = 9.25 + \log(1) = 9.25
   \]
3. Half-equivalence pH = p\(K_a\) = **9.25** — the buffer region of this titration.

**Solution (b):**

1. At equivalence the solution is pure \(\ce{NH4+}\), a weak acid → pH < 7 (about 5.3 for these concentrations, mirroring example 2's arithmetic with \(K_a = 5.6 \times 10^{-10}\)).
2. Indicator: **methyl red** (transition ~4.4–6.2) brackets pH ~5.3. Phenolphthalein would signal the endpoint in the buffer region, long before equivalence.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Equivalence point | Endpoint | Equivalence = stoichiometric completion (calculated); endpoint = color change (observed). A poor indicator makes them differ |
| Equivalence pH = 7 | Always true | Only for strong acid + strong base; weak acid + strong base is > 7, weak base + strong acid is < 7 |
| pH at half-equivalence | pH at equivalence | Half-equivalence → buffer with pH = p\(K_a\); equivalence → hydrolysis product determines pH |
| \(M_a V_a = M_b V_b\) | Any acid-base ratio | Only valid for 1:1 reactions; diprotic acids need mole-ratio factors (2:1) |
| Using any indicator | Matching indicator to curve | An indicator whose range misses the equivalence pH gives a wrong endpoint — and a wrong answer |
| Concentration of titrant | Amount of titrant | You need both: \(n = M \times V\). Many errors come from plugging mL instead of L into molarity formulas |

## Quick Review

1. Define equivalence point and endpoint. Why must they nearly coincide?
2. A 20.00 mL sample of \(\ce{HCl}\) needs 25.00 mL of 0.150 M \(\ce{NaOH}\). Find \(M_{\ce{HCl}}\).
3. Is the equivalence-point pH of a weak acid titrated with strong base above, below, or equal to 7? Why?
4. What is the pH at the half-equivalence point of a weak acid titration? What does it allow you to measure?
5. Which indicator would you choose for a weak base–strong acid titration, and why?

<details>
<summary>Show answers</summary>

1. Equivalence point is where moles of titrant are stoichiometrically equal to moles of analyte; endpoint is where the indicator changes color. They must nearly coincide so the volume read at the endpoint reflects the true equivalence volume.
2. \(n_b = (0.150\ \text{mol/L})(0.02500\ \text{L}) = 3.75 \times 10^{-3}\ \text{mol}\); 1:1 so \(M_a = 3.75 \times 10^{-3}\ \text{mol}/0.02000\ \text{L} = 0.1875\ \text{M}\).
3. Above 7, because the conjugate base (e.g., acetate) hydrolyzes to produce \(\ce{OH-}\).
4. pH = p\(K_a\) of the weak acid; it lets you determine the acid's \(K_a\) directly from the titration curve.
5. Methyl red (transition ~4.4–6.2), because the equivalence pH is below 7 (the conjugate acid, e.g., \(\ce{NH4+}\), is acidic); phenolphthalein would change too early in the buffer region.

</details>

## Related Topics

- Previous: [Buffers](06-buffers.md)
- Next: End of chapter
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
