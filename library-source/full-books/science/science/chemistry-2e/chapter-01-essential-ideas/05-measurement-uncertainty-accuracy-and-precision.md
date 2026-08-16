---
title: "Measurement Uncertainty, Accuracy, and Precision"
subject: "Science"
book: "Chemistry 2e"
chapter: "1: Essential Ideas"
topic_number: "5"
source: "chemistry-2e.md"
tags:
  - "measurement-uncertainty-accuracy-and-precision"
  - "science"
status: "complete"
---

# Measurement Uncertainty, Accuracy, and Precision

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 1: Essential Ideas](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

No measurement is perfect. Every reading carries **uncertainty** — the last digit you write down is an estimate — so a value is meaningful only if you know how trustworthy it is. Scientists communicate trustworthiness with **significant figures** (the digits that carry real information) and with two quality words students constantly mix up: **accuracy** (closeness to the true value) and **precision** (closeness of repeated measurements to each other). This topic gives the counting rules for significant figures, the arithmetic rules for carrying them through calculations, and the accuracy-versus-precision framework for judging data quality.

## Why This Matters

Reporting "2.0 g" versus "2.00 g" makes different claims: the first says the mass is known to one decimal place, the second to two. In a pharmacy, that precision difference can matter for potent drugs. Asking *is the data accurate, precise, both, or neither?* tells you whether a method is reliable and whether an instrument is biased. On exams, significant-figure arithmetic is guaranteed points if you follow the rules.

## Core Concepts

### Uncertainty is built into every measurement

A measurement consists of all the digits you are certain of, plus one digit you estimate. If a graduated cylinder is marked in 1 mL divisions, you read to the nearest 0.1 mL by estimating between marks — "25.3 mL" means 25 is certain and 0.3 is your best estimate. Digital instruments show their uncertainty in the last digit.

### Accuracy versus precision

**Accuracy** describes how close a measured value is to the accepted (true) value. **Precision** describes how close repeated measurements are to one another — the reproducibility of the method. The archery-target analogy gives four cases: a tight cluster at the bullseye is accurate and precise (ideal); a tight cluster off-center is precise but not accurate (systematic error, e.g., an uncalibrated balance); a scattered ring around the center is accurate on average but imprecise (random errors); a scattered cluster far from the center is neither. **Systematic errors** shift every result the same way; **random errors** scatter results unpredictably.

### Significant figures: the counting rules

Significant figures are the digits that carry meaning. The rules: (1) all nonzero digits are significant (123 has 3); (2) zeros between nonzero digits are significant (1005 has 4); (3) leading zeros are not significant — they only place the decimal (0.0012 has 2); (4) trailing zeros are significant only if the number contains a decimal point (1200 has 2, but 1200. has 4 and 1.200 has 4); (5) **exact numbers** — counted objects and defined conversion factors (5 coins, 1000 mL = 1 L) — have unlimited significant figures; (6) scientific notation removes ambiguity: \(1.2 \times 10^3\) has 2 significant figures, \(1.200 \times 10^3\) has 4.

### Rounding

Carry all digits through the calculation and round only at the end. Standard rounding: if the first digit to be dropped is 5 or greater, round up; if it is 4 or less, round down. For example, 81.51 rounds to 82 with two significant figures.

### Significant figures in calculations

The rules differ by operation. For **multiplication and division**, the answer has the same number of significant figures as the factor with the fewest. For **addition and subtraction**, the answer has the same number of decimal places as the term with the fewest decimal places. Mixed problems apply each rule at the corresponding step. Reason: multiplication uncertainty is relative, while addition uncertainty is absolute.

### Quantifying accuracy: percent error

**Percent error** compares a measured value with the accepted value:

\[
\%\ \text{error} = \frac{|\text{measured} - \text{accepted}|}{\text{accepted}} \times 100\%
\]

A small percent error means high accuracy; a large one flags a systematic problem or a blunder.

## ELI-10: Explain Like I'm 10

> When you measure anything, the last number you write down is a careful guess — "2.0 g" means you're sure to one decimal place, and "2.00 g" means you're sure to two. Accuracy is how close your answer is to the real value; precision is how close your repeated tries are to each other. Think darts: hitting near the bullseye is accurate, and landing in a tight bunch is precise — you can be precise without being accurate if you always aim at the wrong spot. Significant-figure rules tell you how many digits your answer honestly deserves.

## High-Yield Points

- Every measurement has uncertainty; the last digit is estimated.
- Accuracy = closeness to the accepted value; precision = agreement among repeats. Precise ≠ accurate (systematic error).
- Count significant figures: nonzero digits always; interior zeros yes; leading zeros no; trailing zeros only with a decimal point.
- Exact numbers (counted objects, defined conversions) have unlimited significant figures.
- Multiplication/division: fewest significant figures. Addition/subtraction: fewest decimal places.
- Round only at the end of a calculation.
- Scientific notation removes trailing-zero ambiguity: \(1.2 \times 10^3\) vs \(1.200 \times 10^3\).
- Percent error quantifies accuracy: \(\frac{|\text{measured} - \text{accepted}|}{\text{accepted}} \times 100\%\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| uncertainty | The inherent doubt in a measurement, shown by its last estimated digit. | Honest reporting requires stating how sure you are. |
| accuracy | Closeness of a measurement to the accepted (true) value. | The real goal of measurement; judged by percent error. |
| precision | Closeness of repeated measurements to each other. | Shows reproducibility; can be high while accuracy is low. |
| significant figures | The digits in a measurement that carry real information. | Tell readers how trustworthy a number is. |
| exact number | A counted or defined value with unlimited significant figures. | Never limits the precision of a calculated answer. |
| systematic error | An error that shifts all measurements the same way. | Causes precise-but-inaccurate results; fixed by calibration. |
| random error | An error that scatters measurements unpredictably. | Reduces precision; averaged out by repeated trials. |
| percent error | \(\frac{|\text{measured} - \text{accepted}|}{\text{accepted}} \times 100\%\). | A number that expresses accuracy directly. |
| scientific notation | Writing numbers as \(a \times 10^n\) with one digit before the decimal. | Removes ambiguity about which zeros are significant. |

## How It Works / Step-by-Step Process

1. Record the measurement with all certain digits plus one estimated digit.
2. Count significant figures using the five counting rules; use scientific notation if trailing zeros are ambiguous.
3. Perform the calculation, keeping extra digits until the end.
4. Apply the operation rule: fewest significant figures for ×/÷, fewest decimal places for +/−.
5. Round the final answer and, if an accepted value exists, compute percent error.

## Example: Significant Figures in Multiplication

A rectangle measures 24.7 cm by 3.3 cm. Compute its area. First, the formula and substitution:

\[
\text{area} = 24.7\ \text{cm} \times 3.3\ \text{cm} = 81.51\ \text{cm}^2
\]

24.7 has three significant figures; 3.3 has two. For multiplication, the answer takes the fewest significant figures, so the result rounds to two: **82 cm²**. Reporting 81.51 cm² would overstate the precision, because 3.3 cm does not justify four digits.

## Example: Significant Figures in Addition

Three masses are added: 103.42 g + 0.0041 g + 12.5 g. First, the sum:

\[
103.42 + 0.0041 + 12.5 = 115.9241\ \text{g}
\]

For addition, the answer takes the fewest decimal places. The terms have 2, 4, and 1 decimal places, so the answer has 1 decimal place: **115.9 g** — the 12.5 g term is the least precisely known.

## Example: Accuracy, Precision, and Percent Error

A student measures the density of a liquid three times: 1.28, 1.29, and 1.27 g/mL; the accepted value is 1.250 g/mL. The results agree closely (spread of 0.02 g/mL), so the method is **precise**. The mean is 1.28 g/mL, above the accepted value, so the results are systematically high — **accurate only to a limited degree**. Quantify the accuracy of the mean:

\[
\%\ \text{error} = \frac{|1.28 - 1.250|}{1.250} \times 100\% = \frac{0.030}{1.250} \times 100\% = 2.4\%
\]

The 2.4% error suggests a small systematic bias (perhaps an uncalibrated balance), not random scatter — a precise-but-not-quite-accurate data set.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Precision | Accuracy | Precision is repeatability; accuracy is closeness to truth. Tight but off-center results are precise, not accurate. |
| Multiplication rule | Addition rule | ×/÷ uses fewest significant figures; +/− uses fewest decimal places — applying the wrong rule is a top exam error. |
| Exact numbers in sig-fig limits | Measured numbers | Exact numbers (5 coins, 1000 mL = 1 L) have unlimited significant figures and never limit an answer. |

## Quick Review

1. How many significant figures are in each: 0.00450, 1005, 1000, 1.00 × 10³?
2. Compute \(3.20 \times 4.1\) and report the answer with the correct number of significant figures.
3. Compute \(25.46 + 3.7\) and report the answer with the correct number of significant figures.
4. A balance reads 12.3456 g, and three weighings of the same object give 12.35, 12.36, and 12.35 g; the accepted mass is 12.50 g. Is the balance accurate? Is it precise? Compute the percent error of the mean.
5. Why is a counted value such as "5 coins" treated as having unlimited significant figures?
6. A 2.50 L sample of water has a mass of 2.50 kg. Report its density in g/mL with the correct significant figures (1 L = 1000 mL, 1 kg = 1000 g).

<details>
<summary>Show answers</summary>

1. 0.00450 has 3 (leading zeros not significant, trailing zero after the decimal is). 1005 has 4 (interior zeros significant). 1000 has 1 (trailing zeros, no decimal). 1.00 × 10³ has 3.
2. \(3.20 \times 4.1 = 13.12\), rounded to 2 significant figures (4.1 has 2): **13**.
3. \(25.46 + 3.7 = 29.16\), rounded to 1 decimal place (3.7 has 1): **29.2**.
4. Precise (values agree within 0.01 g) but not accurate (all well above 12.50 g — systematic bias). Mean = 12.3533 g; percent error \(= \frac{|12.3533 - 12.50|}{12.50} \times 100\% = 1.2\%\).
5. Counting is exact: there are exactly 5 coins, with no measurement uncertainty, so it cannot limit the significant figures of a calculated result.
6. \(\rho = \frac{2500\ \text{g}}{2500\ \text{mL}} = 1.00\ \text{g/mL}\). Both inputs have 3 significant figures (2.50 L = 2.50 × 10³ mL; 2.50 kg = 2.50 × 10³ g), so the answer keeps 3: 1.00 g/mL.

</details>

## Related Topics

- Previous: [Measurements](04-measurements.md)
- Next: [Mathematical Treatment of Measurement Results](06-mathematical-treatment-of-measurement-results.md)
- Related: [Essential Ideas chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
