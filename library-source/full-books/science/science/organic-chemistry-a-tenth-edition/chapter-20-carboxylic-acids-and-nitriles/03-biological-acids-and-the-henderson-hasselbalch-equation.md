---
title: "Biological Acids and the Henderson–Hasselbalch Equation"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "20: Carboxylic Acids and Nitriles"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "biological-acids-and-the-henderson-hasselbalch-equation"
  - "science"
status: "complete"
---

# Biological Acids and the Henderson–Hasselbalch Equation

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 20: Carboxylic Acids and Nitriles](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Biology runs on weak acids. Lactic acid builds up in working muscle, pyruvic acid sits at the crossroads of metabolism, citric acid powers the Krebs cycle, and carbonic acid/bicarbonate keeps human blood near pH 7.4. Each exists in equilibrium with its conjugate base, and the balance between acid and carboxylate is set by the pH of the surrounding fluid. The **Henderson–Hasselbalch equation**,

\[
\text{pH} = \text{p}K_a + \log\frac{[\text{A}^{-}]}{[\text{HA}]}
\]

is a rearranged form of the acidity constant \(K_a\) that lets you compute what fraction of a weak acid is ionized at any pH. This topic derives it, shows how to use it with dimensional analysis, and applies it to biological buffers.

## Why This Matters

The Henderson–Hasselbalch equation is one of the few formulas from organic chemistry that appears daily in medicine, pharmacy, and biology. It explains why blood pH stays in a narrow band (about 7.35–7.45) despite constant production of carbon dioxide and lactic acid; why aspirin, a weak acid with pKa 3.5, is absorbed in the acidic stomach; why amino acids carry different charges at different pH; and why acidosis or alkalosis is dangerous. On exams, it is the reliable way to answer "what fraction is ionized?" questions.

## Core Concepts

### The weak-acid equilibrium and \(K_a\)

A weak acid \(\text{HA}\) (such as \(\text{RCOOH}\)) dissociates in water:

\[
\text{HA} \rightleftharpoons \text{H}^{+} + \text{A}^{-}
\]

with acidity constant

\[
K_a = \frac{[\text{H}^{+}][\text{A}^{-}]}{[\text{HA}]}
\]

where brackets mean molar concentrations (mol/L). The \(\text{p}K_a\) is \(-\log K_a\), so a smaller \(\text{p}K_a\) means a stronger acid. Simple carboxylic acids have \(\text{p}K_a\) values near 4–5.

### Deriving the Henderson–Hasselbalch equation

Take the negative logarithm of both sides of the \(K_a\) expression:

\[
K_a = \frac{[\text{H}^{+}][\text{A}^{-}]}{[\text{HA}]}
\]

\[
-\log K_a = -\log[\text{H}^{+}] - \log\frac{[\text{A}^{-}]}{[\text{HA}]}
\]

Substitute \(\text{p}K_a = -\log K_a\) and \(\text{pH} = -\log[\text{H}^{+}]\), then rearrange:

\[
\text{pH} = \text{p}K_a + \log\frac{[\text{A}^{-}]}{[\text{HA}]}
\]

The pH depends on the acid's pKa and the base/acid ratio. When \([\text{A}^{-}] = [\text{HA}]\), the log term is \(\log 1 = 0\), so \(\text{pH} = \text{p}K_a\): **at pH = pKa, a weak acid is exactly 50% ionized**.

### Reading the ratio: buffer region and beyond

When the pH is within about one unit of the pKa (the buffer region), both the acid and its conjugate base are present in significant amounts and the solution resists pH change — that is what a buffer is. If pH is more than about two units above pKa, the log ratio is ≥ 100 and the acid is essentially fully deprotonated; more than two units below, it is essentially fully protonated. 

### Biological acids and their pKa values

Standard reference pKa values: lactic acid 3.86, pyruvic acid 2.50, citric acid 3.13/4.76/6.39 (three successive protons), acetic acid 4.76, carbonic acid 6.35 (first proton). These explain biology: at blood pH 7.4, lactic acid (pKa 3.86) is mostly lactate anion plus protons; citric acid's three pKa values give it a mixture of charges in the cell; carbonic acid's 6.35 sits close enough to blood pH to buffer it.

### The bicarbonate buffer of blood

Blood is buffered by the carbon dioxide/bicarbonate system:

\[
\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^{+} + \text{HCO}_3^{-}
\]

For this system, the apparent pKa used in practice is about 6.1. The working form is

\[
\text{pH} = 6.1 + \log\frac{[\text{HCO}_3^{-}]}{(0.03 \times P_{\text{CO}_2})}
\]

where \([\text{HCO}_3^{-}]\) is in mmol/L and \(P_{\text{CO}_2}\) in mmHg. In healthy blood, bicarbonate is about 24 mmol/L and arterial \(P_{\text{CO}_2}\) about 40 mmHg, giving the famous 20:1 base-to-acid ratio that holds pH near 7.4. This is why hyperventilation (lowering \(P_{\text{CO}_2}\)) raises blood pH and why CO₂ retention lowers it.

### Predicting the charge on a biological acid

Compute \(\text{pH} - \text{p}K_a\): if it is positive by more than ~2 units, the acid is >99% in the \(\text{A}^{-}\) form (negatively charged); if negative by more than ~2, it is >99% \(\text{HA}\) (neutral). This is how drug absorption is reasoned: aspirin (pKa 3.5) is neutral in the acidic stomach (pH ~2), so it crosses membranes as the uncharged form and is absorbed.

## ELI-10: Explain Like I'm 10

> A weak acid is like a see-saw between two teams: the "acid team" (HA) and the "base team" (A⁻). The pKa is the see-saw's balance point. If the pH is exactly at the pKa, both teams have the same number of players — 50/50. Move the pH one unit higher and the base team gets 10 times more players; the Henderson–Hasselbalch equation is just the scoreboard that tells you the team sizes.

## High-Yield Points

- Henderson–Hasselbalch: \(\text{pH} = \text{p}K_a + \log([\text{A}^{-}]/[\text{HA}])\); it is just \(K_a\) rearranged.
- At pH = pKa, the acid is 50% ionized; each pH unit away from pKa changes the base/acid ratio by a factor of 10.
- Simple carboxylic acids: pKa 4–5 (acetic 4.76, lactic 3.86, pyruvic 2.50); carbonic acid pKa₁ = 6.35.
- Blood buffer: pH = 6.1 + log([HCO₃⁻]/(0.03 × PCO₂)); healthy ratio ≈ 20:1 → pH ≈ 7.4.
- The equation applies only to weak acid/conjugate base pairs near equilibrium, not to strong acids.
- A weak-acid drug is absorbed best where it is neutral: aspirin (pKa 3.5) is neutral in the acidic stomach.
- Check units before substituting: molar concentrations for the general form; mmol/L and mmHg for the blood form.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| weak acid | An acid that only partially dissociates in water, with an equilibrium \(K_a\). | Most biological acids are weak; their ionization state varies with pH. |
| \(K_a\) | The equilibrium constant for acid dissociation: \([\text{H}^{+}][\text{A}^{-}]/[\text{HA}]\). | Measures intrinsic acid strength. |
| pKa | \(-\log K_a\); smaller pKa means a stronger acid. | The "balance point" that sets where ionization changes with pH. |
| buffer | A solution of a weak acid and its conjugate base that resists pH change. | Keeps blood and cells at constant pH despite acid production. |
| conjugate base | The species \(\text{A}^{-}\) left after the acid loses \(\text{H}^{+}\). | Its concentration relative to HA sets the pH via the log ratio. |
| bicarbonate buffer | The CO₂/HCO₃⁻ system that buffers blood at pH ~7.4. | The body's main defense against pH swings. |

## Example 1: pH of a Lactate Buffer

A buffer is prepared with 0.10 M lactic acid and 0.25 M sodium lactate (the conjugate base). Lactic acid has \(\text{p}K_a = 3.86\). Write the Henderson–Hasselbalch equation, then substitute:

\[
\text{pH} = \text{p}K_a + \log\frac{[\text{A}^{-}]}{[\text{HA}]} = 3.86 + \log\frac{0.25}{0.10}
\]

The ratio is \(0.25/0.10 = 2.5\), and \(\log 2.5 = 0.40\), so:

\[
\text{pH} = 3.86 + 0.40 = 4.26
\]

The buffer sits about 0.4 pH units above the pKa because the base form is 2.5 times more concentrated than the acid form. Note that only the ratio matters — diluting both by the same factor leaves the pH unchanged.

## Example 2: What Fraction of Acetic Acid Is Ionized at pH 5.76?

Acetic acid has \(\text{p}K_a = 4.76\), and the pH is exactly 1.00 unit above it. Substitute:

\[
5.76 = 4.76 + \log\frac{[\text{A}^{-}]}{[\text{HA}]}
\]

\[
\log\frac{[\text{A}^{-}]}{[\text{HA}]} = 1.00 \quad\Rightarrow\quad \frac{[\text{A}^{-}]}{[\text{HA}]} = 10^1 = 10
\]

There is 10 times more acetate than acetic acid, so the fraction ionized is \(10/(10+1) = 0.91\), or 91%. At pH one unit *below* the pKa, the acid form dominates 10:1 and only about 9% is ionized; each pH unit above pKa adds one power of 10 to the ratio.

## Example 3: The Blood Buffer, with Dimensional Analysis

A patient's arterial blood has \([\text{HCO}_3^{-}] = 24\ \text{mmol/L}\) and \(P_{\text{CO}_2} = 40\ \text{mmHg}\). First convert the CO₂ term to a concentration using the solubility factor 0.03 mmol/L per mmHg:

\[
[\text{dissolved CO}_2] = 0.03\ \frac{\text{mmol/L}}{\text{mmHg}} \times 40\ \text{mmHg} = 1.2\ \text{mmol/L}
\]

The units cancel (mmHg cancels mmHg), leaving mmol/L. Now substitute:

\[
\text{pH} = 6.1 + \log\frac{24}{1.2} = 6.1 + \log 20 = 6.1 + 1.30 = 7.40
\]

The healthy 20:1 ratio produces pH 7.40. If the patient hypoventilates and \(P_{\text{CO}_2}\) rises to 60 mmHg, dissolved CO₂ becomes 1.8 mmol/L, the ratio drops to \(24/1.8 = 13.3\), \(\log 13.3 = 1.12\), and pH falls to 7.22 — a respiratory acidosis. This is how a blood-gas report becomes a pH prediction.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| pH | pKa | pH is the acidity of the solution; pKa is the intrinsic strength of the acid. They are equal only at 50% ionization. |
| Henderson–Hasselbalch for weak acids | Strong-acid pH calculations | Strong acids dissociate completely; the equilibrium ratio logic does not apply. |
| \(\log([\text{A}^{-}]/[\text{HA}])\) | \(\log([\text{HA}]/[\text{A}^{-}])\) | Inverting the ratio flips the sign; pH above pKa means more base, so the log term is positive. |
| Concentration units | Ratio | The log term needs the *same* units in numerator and denominator; mixing M with mM ruins the answer. |
| "Lactic acidosis" acid | Lactate | At pH 7.4, lactic acid (pKa 3.86) is >99% lactate; the problem is the co-produced protons, not the neutral acid. |
| Buffer region | Full neutralization | Buffering works within about ±1 pH unit of pKa; far outside, the solution behaves like a dilute strong acid/base. |

## Quick Review

1. Write the Henderson–Hasselbalch equation and state the condition under which pH = pKa.
2. A buffer contains 0.20 M propanoic acid (pKa 4.87) and 0.20 M sodium propanoate. What is its pH?
3. At what pH is acetic acid (pKa 4.76) 50% ionized, and what fraction is ionized at pH 6.76?
4. A patient has [HCO₃⁻] = 24 mmol/L and PCO₂ = 48 mmHg. Compute pH and state the direction of the disturbance.
5. Why does the bicarbonate buffer use the factor 0.03, and what units must PCO₂ have?

<details>
<summary>Show answers</summary>

1. \(\text{pH} = \text{p}K_a + \log([\text{A}^{-}]/[\text{HA}])\); pH = pKa when \([\text{A}^{-}] = [\text{HA}]\) (the log term is zero), i.e., at 50% ionization.
2. Since the concentrations are equal, the log term is \(\log 1 = 0\), so pH = pKa = 4.87.
3. 50% ionized at pH = pKa = 4.76. At pH 6.76 (two units above pKa), the base/acid ratio is 100, so the fraction ionized is 100/101 ≈ 0.99, or ~99%.
4. Dissolved CO₂ = 0.03 × 48 = 1.44 mmol/L; ratio = 24/1.44 = 16.7; log 16.7 = 1.22; pH = 6.1 + 1.22 = 7.32. This is below 7.35, consistent with a respiratory acidosis from CO₂ retention.
5. The factor 0.03 converts mmHg of CO₂ partial pressure into mmol/L of dissolved CO₂ (the solubility of CO₂ in plasma); PCO₂ must therefore be in mmHg for the units to cancel.

</details>

## Related Topics

- Previous: [Structure and Properties of Carboxylic Acids](02-structure-and-properties-of-carboxylic-acids.md)
- Next: [Substituent Effects on Acidity](04-substituent-effects-on-acidity.md)
- Related: [Naming Carboxylic Acids and Nitriles](01-naming-carboxylic-acids-and-nitriles.md)
- Related: [Carboxylic Acids and Nitriles chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
- Science note: pKa values (lactic 3.86, pyruvic 2.50, citric 3.13/4.76/6.39, acetic 4.76, carbonic 6.35) and the blood-buffer constants (apparent pKa 6.1, CO₂ solubility 0.03 mmol/L/mmHg, normal HCO₃⁻ 24 mmol/L, PCO₂ 40 mmHg) are standard values consistent with current reference sources; work-through examples use these tabulated constants, not fabricated measurements.
