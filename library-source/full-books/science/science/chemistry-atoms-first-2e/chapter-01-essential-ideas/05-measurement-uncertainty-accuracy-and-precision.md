---
title: "Measurement Uncertainty, Accuracy, and Precision"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "1: Essential Ideas"
topic_number: "5"
source: "chemistry-atoms-first-2e.md"
tags:
  - "measurement-uncertainty-accuracy-and-precision"
  - "science"
status: "complete"
---

# Measurement Uncertainty, Accuracy, and Precision

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 1: Essential Ideas](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Every measurement is imperfect: the ruler has finer divisions than your eye can resolve, the balance drifts, the thermometer lags. **Uncertainty** is the honest acknowledgment that a measured value is never exact — it is an estimate with a limited number of reliable digits, called **significant figures**, which tell the reader how much confidence to place in a number.

This topic covers the rules for **counting significant figures** in measured values and calculation results; the distinction between **accuracy** (closeness to the true value) and **precision** (reproducibility) — two ideas students constantly mix up; and **percent error**, the standard way to express how far a measurement sits from an accepted value.

## Why This Matters

- **Honest data reporting.** "3.0 g" vs. "3.00 g" says whether your balance reads to tenths or hundredths of a gram — significant figures state a measurement's uncertainty.
- **Calculators lie.** They happily report 12.4567832 from numbers measured to different precisions. Sig-fig rules separate meaningful digits from noise.
- **Lab quality and patient safety.** A lab test must be both accurate (close to the true concentration) and precise (repeatable). A precise-but-inaccurate instrument gives confident-looking wrong answers — the most dangerous kind.
- **Exam value:** sig-fig counting, sig-fig arithmetic, and accuracy-vs-precision scenarios are classic test questions.

## Core Concepts

### Uncertainty and significant figures

A **significant figure** is any digit that carries real information about a measurement — all digits known for certain plus one estimated. Reading a centimeter ruler, you can report 4.35 cm: the "4" and "3" are certain, the "5" is your best estimate between marks.

**Counting rules:**

1. **Non-zero digits are always significant** (452 has 3).
2. **Zeros between non-zero digits are significant** (4005 has 4).
3. **Leading zeros are never significant** — they only position the decimal point (0.0045 has 2).
4. **Trailing zeros are significant only with a decimal point** (4500 has 2; 4500. has 4; 4.500 has 4).
5. **Scientific notation removes ambiguity:** \(4.50 \times 10^3\) has 3 sig figs; the exponent never counts.

**Exact numbers** — counted values (12 eggs) and defined relationships (1 km = 1000 m) — have infinite sig figs and never limit calculations.

### Arithmetic with significant figures

A result cannot be more precise than its least precise input.

- **Multiplication and division:** the answer matches the factor with the fewest sig figs — \(2.5 \times 3.14159\) is limited by 2.5 (2 sig figs).
- **Addition and subtraction:** the answer matches the term with the fewest **decimal places** — \(12.11 + 18.0 + 1.013\) is limited by 18.0 (one decimal place).

**Rounding:** carry extra digits through multi-step work and round only at the end (round up on 5 or greater; some courses use "round half to even").

### Accuracy vs. precision

- **Accuracy** is closeness to the **true (accepted) value**; inaccuracy comes from **systematic error** — a flaw shifting every measurement the same way (a scale reading 0.5 g high every time).
- **Precision** is how close repeated measurements are to **each other**; imprecision comes from **random error** — fluctuations scattering measurements (air currents, reaction time).

The classic analogy is a target. Shots clustered tightly are precise; if that spot is the bullseye, they are also accurate. Tight clusters off-center = precise but not accurate (systematic error); scattered shots near the bullseye = accurate on average but not precise (random error). The ideal is a tight cluster on the bullseye — precise *and* accurate. Good strategy reduces both: calibrate instruments (systematic) and repeat and average (random).

### Percent error

**Percent error** compares a measured value to the accepted (true) value:

\[
\%\ \text{error} = \frac{|\text{measured} - \text{accepted}|}{\text{accepted}} \times 100\%
\]

The absolute value makes the error positive regardless of direction; a small percent error means high accuracy. Percent error measures **accuracy only**.

## ELI-10: Explain Like I'm 10

> When you measure something, your answer can never be perfectly exact — there is always a little guessing in the last digit. Significant figures are the "honest digits" you are sure about, plus one you had to estimate. Accuracy is how close your answer is to the real answer; precision is whether your repeated tries give nearly the same numbers. If a dart player always hits the same spot on the wall but misses the board entirely, that's precise but not accurate — practice the same spot, but aim at the bullseye!

## High-Yield Points

- **Significant figures = certain digits + one estimated digit.** Non-zero digits count; leading zeros never count; captive zeros count; trailing zeros count only with a decimal point.
- **Scientific notation removes zero ambiguity:** \(4.50 \times 10^3\) = 3 sig figs; the exponent never counts.
- **Exact numbers (counts, defined conversions) have infinite sig figs.**
- **Multiply/divide:** result has the fewest sig figs of any factor. **Add/subtract:** result has the fewest decimal places of any term.
- **Round only at the end** of a multi-step calculation.
- **Accuracy = closeness to true value** (systematic error); **precision = reproducibility** (random error). They are independent — precise ≠ accurate.
- **Percent error** \(= |\text{measured} - \text{accepted}|/\text{accepted} \times 100\%\) — a measure of accuracy only.
- Target analogy: tight cluster on the bullseye = precise and accurate; tight cluster off-target = precise but not accurate.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Uncertainty | The unavoidable limit on how exactly a measurement is known. | Every measured number is an estimate. |
| Significant figures | The meaningful digits in a measurement: certain digits plus one estimated digit. | The standard way to communicate uncertainty. |
| Exact number | A counted or defined value with no uncertainty (12 eggs, 1000 m/km). | Never limits sig figs in calculations. |
| Accuracy | How close a measurement is to the true/accepted value. | Affected by systematic error; checked with percent error. |
| Precision | How close repeated measurements are to each other. | Affected by random error; improved by repeating and averaging. |
| Systematic error | Error that shifts all measurements the same way (miscalibration). | Produces accurate-looking but wrong results; fixed by calibration. |
| Percent error | \(\frac{|\text{measured} - \text{accepted}|}{\text{accepted}} \times 100\%\). | Standard quantitative measure of accuracy. |
| Scientific notation | \(a \times 10^n\) form that makes significant figures explicit. | Removes ambiguity about trailing zeros. |

## Example: Weighing a coin three times — and judging the data

A student weighs a coin three times on the same balance: 12.4 g, 12.3 g, and 12.4 g. The coin's accepted mass (from the mint's specification, measured by a certified lab) is 12.48 g.

**Precision:** the three readings (12.4, 12.3, 12.4) spread over only 0.1 g.

**Accuracy:** compare the average — (12.4 + 12.3 + 12.4)/3 = 12.37 g — with the accepted value. Percent error:

\[
\%\ \text{error} = \frac{|\text{measured} - \text{accepted}|}{\text{accepted}} \times 100\%
\]

\[
\%\ \text{error} = \frac{|12.37 - 12.48|}{12.48} \times 100\% = \frac{0.11}{12.48} \times 100\% = 0.88\%
\]

An error under 1% means the measurements are quite accurate — the balance reads about 0.1 g low.

Now apply sig-fig arithmetic to a typical calculation. A rectangular block measures length 2.35 cm (3 sig figs), width 1.4 cm (2 sig figs), height 0.52 cm (2 sig figs). Volume = length × width × height:

\[
V = 2.35 \times 1.4 \times 0.52 = 1.7108\ \text{cm}^3
\]

The calculator says 1.7108, but width and height carry only 2 sig figs, so the answer may show only 2: **1.7 cm³**.

The clinical trap: a thermometer consistently reading 0.5 °C high (systematic error) gives precise but inaccurate readings. Calibration — comparing against a standard and correcting — fixes it. Precision alone is not enough.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Accuracy | Precision | Accuracy = closeness to the true value (systematic error); precision = reproducibility (random error). Precise can still be inaccurate. |
| Trailing zeros with decimal | Trailing zeros without decimal | 4500 has 2 sig figs (ambiguous); 4500. has 4; 4.500 has 4. A decimal point locks in trailing zeros. |
| Leading zeros | Captive zeros | Leading zeros (0.0045) never count; captive zeros (4005) always count. |
| Sig figs in add/subtract | Sig figs in multiply/divide | Add/subtract: fewest *decimal places*; multiply/divide: fewest *sig figs*. |
| Rounding mid-calculation | Rounding at the end | Rounding intermediate steps propagates error; round once at the end. |
| Percent error | Precision | Percent error measures accuracy only — one lucky reading can give a tiny error; consistent precise misses give a large one. |
| Counted values | Measured values | 3 beakers is exact; "3 g" is measured (1 sig fig). |

## Quick Review

1. How many significant figures are in each: (a) 0.00450, (b) 1200, (c) 1200., (d) \(4.50 \times 10^3\)?
2. A length is measured as 4.35 cm on a centimeter ruler. Which digits are certain, and which is estimated?
3. Calculate \(3.20 \times 4.1\) and report the answer with the correct number of significant figures.
4. Calculate \(12.11 + 18.0 + 1.013\) and report with the correct number of decimal places.
5. Three trials give 9.8, 10.1, and 9.9 m/s² for the acceleration of gravity (accepted value 9.81 m/s²). Are the trials precise? Accurate? Compute the percent error of the average.
6. A scale is miscalibrated to read 0.5 g high on every weighing. Is the resulting error systematic or random? Will repeating measurements fix it?

<details>
<summary>Show answers</summary>

1. (a) 3 — leading zeros do not count, but the trailing 0 after the decimal does; (b) 2; (c) 4 — the decimal makes trailing zeros count; (d) 3 — the exponent never counts.
2. The 4 and the 3 are certain; the 5 is estimated between the centimeter marks.
3. \(3.20 \times 4.1 = 13.12\), but 4.1 has 2 sig figs, so the answer is 13.
4. \(12.11 + 18.0 + 1.013 = 31.123\), limited by 18.0 (one decimal place), so the answer is 31.1.
5. The trials cluster within 0.3 of each other — precise. Average = (9.8 + 10.1 + 9.9)/3 = 9.93 m/s². Percent error = |9.93 − 9.81|/9.81 × 100% ≈ 1.2% — accurate as well.
6. Systematic error: every reading shifts high by the same amount. Repeating will not fix it — the same offset appears every time; only calibration corrects it.

</details>

## Related Topics

- Previous: [Measurements](04-measurements.md)
- Next: [Mathematical Treatment of Measurement Results](06-mathematical-treatment-of-measurement-results.md)
- Related: [Essential Ideas chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure. The standard value for the acceleration of gravity (9.81 m/s²) is a textbook reference value that varies slightly with location.
- Last updated: 2026-08-16
