---
title: "pH and pOH"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "ph-and-poh"
  - "science"
status: "complete"
---

# pH and pOH

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Hydronium-ion concentrations in real solutions span fourteen or more orders of magnitude — from about 10 M in concentrated strong acid down to 10⁻¹⁴ M or below in strong base. Working with such numbers directly is clumsy, so chemists compress the scale with a logarithm. The **pH** of a solution is defined as

\[
\mathrm{pH} = -\log[\ce{H3O+}]
\]

where \([\ce{H3O+}]\) is the molar concentration of hydronium ion. A related quantity, **pOH**, is defined the same way for hydroxide ion:

\[
\mathrm{pOH} = -\log[\ce{OH-}]
\]

Because \(K_w = [\ce{H3O+}][\ce{OH-}] = 1.0 \times 10^{-14}\) at 25 °C, the two scales are tied together by

\[
\mathrm{pH} + \mathrm{pOH} = 14.00
\]

This topic develops those definitions, the arithmetic of logarithms, and the practical meaning of the scale. Everything that follows in this chapter — acid strength, salt hydrolysis, buffers, titrations — reports its results in pH units.

## Why This Matters

The pH scale is the standard language for acidity in virtually every applied field:

- **Medicine and nursing:** Blood pH is tightly regulated near 7.4; a shift of a few tenths of a unit (acidosis or alkalosis) is a medical emergency. Urine pH, gastric fluid, and IV fluid choices all rely on pH thinking.
- **Biology and agriculture:** Enzyme activity peaks at a characteristic optimal pH — which is why soil pH determines which crops thrive and fermentation tanks are monitored continuously.
- **Industry and the environment:** Water-treatment plants adjust pH to control corrosion and disinfection; lakes, aquariums, and pools are monitored on the same scale. One pH unit is a tenfold change in hydronium concentration, so small pH shifts are large concentration changes.

## Core Concepts

### Logarithms compress a wide range

A logarithm answers the question "ten to what power?" \(\log(1.0 \times 10^{-3}) = -3\) because \(10^{-3} = 0.001\). The negative log converts tiny concentrations into convenient positive numbers: \([\ce{H3O+}] = 1.0 \times 10^{-7}\) M gives pH 7, and \([\ce{H3O+}] = 1.0 \times 10^{-3}\) M gives pH 3. Each decrease of one pH unit is a tenfold increase in hydronium: pH 4 is ten times more acidic than pH 5 and a hundred times more acidic than pH 6 — surprising because the scale looks linear.

### Significant figures in pH

When you take a logarithm, digits before the decimal only carry the power of ten; digits after the decimal carry the significant figures. A concentration with two significant figures, such as \(3.6 \times 10^{-4}\) M, must be reported as pH with two decimals (3.44), not two total digits; a pH of 5.25 (two decimals) likewise implies two significant figures in \([\ce{H3O+}]\) (\(5.6 \times 10^{-6}\) M).

### pOH and the pH + pOH = 14.00 relationship

pOH is defined exactly like pH but for hydroxide ion. The connection comes from taking \(-\log\) of both sides of the \(K_w\) expression:

\[
-\log K_w = -\log([\ce{H3O+}][\ce{OH-}]) = -\log[\ce{H3O+}] - \log[\ce{OH-}]
\]

Since \(-\log K_w = -\log(1.0 \times 10^{-14}) = 14.00\),

\[
\mathrm{pH} + \mathrm{pOH} = 14.00
\]

at 25 °C. So every aqueous solution can be described by either scale: acidic has pH < 7 and pOH > 7; basic has pH > 7 and pOH < 7; neutral has both at 7.00. "Neutral means pH 7" is only strictly true at 25 °C, because \(K_w\) changes with temperature.

### Measuring pH

Three common tools measure pH. **Indicators** are weak acids or bases whose color depends on the protonated form present (litmus turns red below pH 4.5, blue above pH 8.3); **pH paper** gives a rough reading by color match. A **pH meter** uses a glass electrode whose voltage depends on \([\ce{H3O+}]\) and reports pH directly — accurate, but it must be calibrated with standard buffers.

### Dilution and pH

Diluting a strong acid solution by a factor of ten raises its pH by exactly one unit, because the hydronium concentration falls tenfold — as long as the solution remains far more concentrated than pure water's own \(10^{-7}\) M background. Dilution can never turn an acidic solution basic: the pH approaches 7 (pure water's neutral value) but never crosses it.

## ELI-10: Explain Like I'm 10

> The pH scale is a number line from 0 to 14 telling how "sour" or "soapy" a liquid is: low numbers mean lots of hydronium (acidic, like lemon juice), high numbers mean lots of hydroxide (basic, like soap), and 7 is the middle, like pure water. Each step is a tenfold change, so pH 4 is ten times more acidic than pH 5. pOH is the same line measured from the other end, and the two ends always add up to 14.

## High-Yield Points

- \(\mathrm{pH} = -\log[\ce{H3O+}]\) and \(\mathrm{pOH} = -\log[\ce{OH-}]\); at 25 °C, \(\mathrm{pH} + \mathrm{pOH} = 14.00\).
- Acidic: pH < 7; neutral: pH = 7; basic: pH > 7 (at 25 °C). Each pH unit = tenfold change in \([\ce{H3O+}]\).
- To go from pH back to concentration: \([\ce{H3O+}] = 10^{-\mathrm{pH}}\).
- Significant figures: decimal places in pH = significant figures in concentration.
- \(K_w = 1.0 \times 10^{-14}\) at 25 °C; its value (and therefore "neutral" pH) changes with temperature.
- Diluting a strong acid by 10× raises pH by exactly 1; dilution never pushes pH past 7.
- pH meters must be calibrated with buffers; indicators give only approximate values.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| pH | \(-\log[\ce{H3O+}]\); the standard measure of acidity | Compresses a 14-order-of-magnitude concentration range into 0–14 |
| pOH | \(-\log[\ce{OH-}]\); the basicity twin of pH | Lets you work from hydroxide concentrations and check answers via pH + pOH = 14.00 |
| logarithm | The exponent to which 10 must be raised to give a number | Turns multiplicative tenfold changes into simple additive steps |
| neutral solution | \([\ce{H3O+}] = [\ce{OH-}]\), so pH = pOH = 7.00 at 25 °C | The reference dividing acidic from basic |
| indicator | A dye whose color changes with pH | A quick, approximate way to estimate pH without instruments |
| pH meter | An electrode-based instrument reporting pH directly | Accurate pH measurement for laboratory and clinical use |

## How It Works / Step-by-Step Process

### Worked example 1: from concentration to pH

**Problem.** A solution has \([\ce{H3O+}] = 3.6 \times 10^{-4}\) M. Calculate its pH and classify it.

**Solution.**

1. Write the defining equation: \(\mathrm{pH} = -\log[\ce{H3O+}]\) and substitute:
2. Substitute:

\[
\mathrm{pH} = -\log(3.6 \times 10^{-4}) = -(0.556 - 4) = 3.44
\]

(The log of \(3.6 \times 10^{-4}\) splits into \(\log 3.6 + \log 10^{-4} = 0.556 - 4\).)
3. The concentration had two significant figures, so pH is reported with two decimals: **3.44**. Because pH < 7, the solution is acidic.

### Worked example 2: from hydroxide to pH via pOH

**Problem.** At 25 °C, \([\ce{OH-}] = 2.0 \times 10^{-3}\) M. Find the pH.

**Solution.**

1. Write the pOH definition: \(\mathrm{pOH} = -\log[\ce{OH-}]\) and substitute:

\[
\mathrm{pOH} = -\log(2.0 \times 10^{-3}) = 2.70
\]

3. Convert with the sum rule: \(\mathrm{pH} = 14.00 - \mathrm{pOH} = 14.00 - 2.70 = 11.30\).

Dimensional analysis note: the logarithm acts on the *numeric value* of the molarity; the result is a pure number. The solution is basic (pH > 7), consistent with \([\ce{OH-}]\) well above \(10^{-7}\) M.

### Worked example 3: from pH back to concentration

**Problem.** The pH of a solution is 5.25. Find \([\ce{H3O+}]\).

**Solution.**

1. Rearrange the definition: \([\ce{H3O+}] = 10^{-\mathrm{pH}}\) and substitute:

\[
[\ce{H3O+}] = 10^{-5.25} = 5.6 \times 10^{-6}\ \text{M}
\]

3. The pH had two decimals, so the concentration gets two significant figures. Check: \(-\log(5.6 \times 10^{-6}) = 5.25\). ✓

### Worked example 4: dilution with dimensional analysis

**Problem.** Exactly 10.0 mL of 0.010 M HCl is diluted to 100.0 mL. Find the new pH.

**Solution.**

1. Use the dilution relationship \(M_1V_1 = M_2V_2\) (moles of solute are unchanged), solving for the new molarity:

\[
M_2 = \frac{M_1V_1}{V_2} = \frac{(0.010\ \text{M})(10.0\ \text{mL})}{100.0\ \text{mL}} = 1.0 \times 10^{-3}\ \text{M}
\]

Dimensional analysis: (M)(mL)/(mL) = M, so the result is a molarity. (HCl is a strong acid, so \([\ce{H3O+}] = 1.0 \times 10^{-3}\) M.)
2. Convert to pH: \(\mathrm{pH} = -\log(1.0 \times 10^{-3}) = 3.00\). The tenfold dilution raised the pH from 2.00 to 3.00 — exactly one unit.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| pH 4 vs pH 5 | Linear difference of one | Each pH unit is a tenfold change; pH 4 is 10× more acidic than pH 5. |
| Neutral = pH 7 | Neutral at any temperature | \(K_w\) changes with temperature, so neutral pH is exactly 7.00 only at 25 °C. |
| Significant figures in pH | Digits before the decimal | In a log, only digits after the decimal are significant; pH 3.44 has two significant figures. |
| Low pH | Low acidity | Low pH means HIGH \([\ce{H3O+}]\); pH 2 is far more acidic than pH 9. |
| pOH | pH | pOH measures hydroxide, not hydronium; pH + pOH = 14.00, so low pH means high pOH. |
| Diluting an acid | Diluting toward basic | Dilution moves pH only toward 7, never past it. |

## Quick Review

1. Write the definitions of pH and pOH, and the relationship between them at 25 °C.
2. A solution has \([\ce{H3O+}] = 1.0 \times 10^{-9}\) M. What are its pH and pOH? Acidic, basic, or neutral?
3. The pH of a solution is 8.70. What is \([\ce{OH-}]\)? (Hint: start with pOH.)
4. How many times more acidic is a solution at pH 3 than one at pH 6?
5. Why must a pH value of 7.00 be qualified with a temperature?

<details>
<summary>Show answers</summary>

1. \(\mathrm{pH} = -\log[\ce{H3O+}]\), \(\mathrm{pOH} = -\log[\ce{OH-}]\), and \(\mathrm{pH} + \mathrm{pOH} = 14.00\) at 25 °C.
2. \(\mathrm{pH} = -\log(1.0 \times 10^{-9}) = 9.00\), so \(\mathrm{pOH} = 14.00 - 9.00 = 5.00\). Basic.
3. \(\mathrm{pOH} = 14.00 - 8.70 = 5.30\), so \([\ce{OH-}] = 10^{-5.30} = 5.0 \times 10^{-6}\) M.
4. One thousand times (three pH units = \(10^3\) in concentration).
5. Because \(K_w\) depends on temperature, the neutral pH shifts from 7.00 as temperature changes.

</details>

## Related Topics

- Previous: [Brønsted-Lowry Acids and Bases](01-br-nsted-lowry-acids-and-bases.md)
- Next: [Relative Strengths of Acids and Bases](03-relative-strengths-of-acids-and-bases.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
