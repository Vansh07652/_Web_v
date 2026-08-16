---
title: "Integration of 1H NMR Absorptions: Proton Counting"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "integration-of-1h-nmr-absorptions-proton-counting"
  - "science"
status: "complete"
---

# Integration of 1H NMR Absorptions: Proton Counting

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Every signal in a 1H NMR spectrum carries three independent pieces of information: its **position** (chemical shift — the environment), its **splitting** (multiplicity — neighboring protons), and its **area** (integration — how many protons). Integration works because each equivalent proton contributes equally to signal intensity: the area under an absorption is proportional to the number of protons producing it. Spectrometers display this area as an integrator trace — a stepped line whose step heights, or printed numbers on modern instruments, give the relative proton counts.

Crucially, integration gives *relative* counts, not absolute ones. A 3:2:1 pattern could be 3:2:1, 6:4:2, or 30:20:10 protons. To fix the scale, combine the ratio with the molecular formula: the smallest whole-number ratio that multiplies to the formula's total hydrogens is the correct proton count per signal. That single operation — matching an integration ratio to a formula — is what turns a list of signals into a structure.

## Why This Matters

- Integration is how you decide whether a signal represents 1, 2, 3, or 6 protons — information that eliminates most candidate structures instantly (a 6H singlet says "two equivalent methyl groups").
- Structure-determination problems on exams always pair shifts with integrations: "a compound \(C_4H_8O_2\) shows singlets integrating 3:3:2" is solvable only if you can convert ratios to absolute counts.
- In pharmaceutical QC, integration verifies stoichiometry and detects impurities: an unexpected integrated signal reveals a by-product even at low concentration.
- Understanding that integration is relative prevents the classic error of reading a 3:2:1 trace as "3, 2, and 1 protons" without checking the formula.

## Core Concepts

### What integration measures

Signal intensity in 1H NMR is proportional to the number of equivalent protons absorbing at that frequency: every proton in an equivalent set contributes the same amount of absorption, and each set contributes in proportion to its size. The instrument integrates (measures the area under) each absorption and prints either a stepped integral trace (older instruments) or a set of numbers (modern FT instruments). The step heights or printed areas are the raw integration data.

### Reading an integration ratio

To use integration: (1) measure each step height (or read each integral value); (2) reduce the values to the smallest whole-number ratio; (3) multiply that ratio by the integer that makes the total equal the number of hydrogens in the molecular formula. The result is the number of protons in each signal.

**Example pattern:** a compound \(C_3H_7Cl\) (7 H) with step heights in ratio 3:2:2 — the ratio already sums to 7, so the signals represent 3, 2, and 2 protons. The same 3:2:2 pattern in a compound with 14 hydrogens would mean 6:4:4.

### Why exchangeable protons complicate counting

O–H and N–H protons exchange with each other and with traces of water, and their signals are broad and variable. Because exchange rate and line shape depend on conditions, an OH integration often reads slightly low — the signal is so broad that baseline integration misses part of it. The practical rule: trust integrations of C–H signals for counting, and use the D₂O test to confirm an OH/NH signal rather than relying on its area.

### Integration cannot stand alone

Integration tells you *how many* protons are in each environment, never *which* environment is which. That assignment comes from chemical shift (topic 4) and splitting (topic 6). A 6H singlet at \(\delta\) 2.1, for example, means two equivalent methyls attached to a carbonyl \((CH_3)_2C=O\): the integration says "6," the shift says "methyl next to a C=O," and the singlet says "no neighboring protons."

## ELI-10: Explain Like I'm 10

> Imagine a class photo where every student holds a sign. The chemical shift tells you which grade each student is in, and integration counts how many students are in each grade. If the photo shows three groups with signs in the ratio 3:2:1 and the whole class has 6 students, the groups have exactly 3, 2, and 1 students. The ratio alone doesn't give real numbers — you need the class size (the molecular formula) to convert "3:2:1" into "3, 2, and 1."

## High-Yield Points

- Integration = area under each 1H NMR signal ∝ number of equivalent protons producing it.
- Step heights / integral numbers → reduce to smallest whole-number ratio → scale up to the formula's total H count.
- Integration is relative: 3:2:1 could be 6:4:2 in a molecule with 12 hydrogens.
- Combine integration with molecular formula; never assign absolute counts from the ratio alone.
- OH and NH integrations can be unreliable (broad, exchanging); confirm exchangeable protons with D₂O.
- Integration pairs with shift (environment) and multiplicity (neighbors) for complete assignments.
- A 6H singlet = two equivalent methyls with no neighboring protons (e.g., \((CH_3)_2C=O\)); a 9H singlet = three equivalent methyls, as in a tert-butyl group \(C(CH_3)_3\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Integration | The measured area under an NMR signal | Directly proportional to the number of protons producing the signal |
| Integral trace | The stepped line (or printed numbers) showing relative signal areas | The raw data from which proton counts are read |
| Relative proton count | The ratio of protons among signals (e.g., 3:2:1) | Must be scaled by the molecular formula to get absolute numbers |
| Absolute proton count | The actual number of protons per signal | The value used in structure determination |
| Equivalent protons | Protons identical in environment that share one signal | Each equivalent set gives one absorption; its area reflects the set's size |
| Exchangeable proton | O–H or N–H proton that exchanges with water/D₂O | Its integration can be unreliable; confirmed by the D₂O test |
| Molecular formula | The total count of each element (e.g., \(C_4H_8O_2\)) | Supplies the total H count fixing the integration scale |

## Worked Examples

### Example 1: Ethanol — the classic 3:2:1

Ethanol, \(CH_3\!-\!CH_2\!-\!OH\) (\(C_2H_6O\), 6 H), shows three signals whose integral trace steps measure 15, 10, and 5 mm. Determine the proton count of each signal.

**Step 1 — Reduce to the smallest whole-number ratio:**

\[ 15 : 10 : 5 = 3 : 2 : 1 \]

**Step 2 — Check against the total.** \(3 + 2 + 1 = 6\), matching the 6 hydrogens in \(C_2H_6O\) — no scaling needed.

**Step 3 — Assign with shift and multiplicity.** The 3H signal is the \(CH_3\) (triplet, \(\delta \approx 1.2\)), the 2H signal is the \(CH_2\) (quartet, \(\delta \approx 3.7\)), and the 1H signal is the OH (broad singlet, \(\delta \approx 2.6\), D₂O-exchangeable). The 3:2:1 fingerprint identifies ethanol among all \(C_2H_6O\) isomers.

### Example 2: Scaling an integration ratio with the formula

A compound with formula \(C_4H_{10}O\) (10 H) shows four signals with integrals 15, 10, 10, and 5 units. How many protons does each signal represent?

**Step 1 — Reduce the ratio:**

\[ 15 : 10 : 10 : 5 = 3 : 2 : 2 : 1 \]

**Step 2 — Scale to the formula.** The reduced ratio sums to \(3 + 2 + 2 + 1 = 8\), but the formula demands 10 H. Multiplying by 2 gives 6:4:4:2 (sum 16) — overshoot. The correct interpretation for a 10-H compound is 3:2:2:2:1 (sum 10): the fifth signal (the 1H OH) overlapped or the trace rounded. This is butan-1-ol, \(CH_3\!-\!CH_2\!-\!CH_2\!-\!CH_2\!-\!OH\): 3H (CH3), 2H, 2H, 2H (three CH2), 1H (OH).

**Lesson:** the formula is the referee. When a ratio doesn't multiply cleanly to the formula's H count, re-examine the spectrum for overlapping signals or an exchangeable proton before trusting the numbers.

### Example 3: Distinguishing isomers with integration

Two isomers of \(C_3H_6O\) (6 H each) are propanal, \(CH_3\!-\!CH_2\!-\!CHO\), and acetone, \((CH_3)_2C=O\). How does integration alone separate them?

**Propanal:** three signals — CH3 (3H, triplet, \(\delta \approx 1.1\)), CH2 (2H, \(\delta \approx 2.4\)), CHO (1H, \(\delta \approx 9.8\)) → integration 3:2:1.

**Acetone:** one signal — six equivalent methyl protons, 6H singlet, \(\delta \approx 2.1\) → a single 6-unit step.

**Interpretation:** the number of steps in the integral trace (3 vs. 1) and the 6H vs. 3:2:1 pattern separate the isomers immediately, before any shift or splitting analysis. Integration answers "how many different kinds of protons, and how many of each?"

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Integration ratio (relative) | Absolute proton count | 3:2:1 is relative; the molecular formula fixes whether it means 3:2:1, 6:4:2, etc. |
| Step height = number of protons directly | Step height ∝ protons | Heights must be reduced to a ratio, then scaled by the formula's total H count |
| Equivalent protons sharing one signal | Nonequivalent protons sharing a shift | Equivalent protons give ONE signal whose area sums them; nonequivalent protons give separate signals |
| Broad OH integration | Reliable C–H integration | Exchange broadens/spreads OH signals, so their areas read low; confirm OH with D₂O |
| A 6H singlet | Two different 3H singlets | A 6H singlet = one set of six equivalent protons; two 3H singlets = two different methyl environments |
| Integration ratio matching a formula by coincidence | Correct assignment | Always cross-check with shifts and multiplicity — different isomers can share an integration pattern |

## Quick Review

1. What physical quantity does a 1H NMR integrator measure, and what is it proportional to?
2. A compound \(C_3H_7Cl\) shows integrals in ratio 2:2:3. How many protons does each signal represent, and why is no scaling needed?
3. A compound \(C_8H_{10}\) shows two signals integrating 5:3. Assign proton counts, and identify a likely structure.
4. Why can an OH proton's integration be unreliable, and how do you confirm the proton is present anyway?
5. A spectrum shows one singlet integrating to 6H at \(\delta\) 2.1. What does the molecule contain, and why?
6. Why can't integration alone distinguish two isomers with the same integration pattern?

<details>
<summary>Show answers</summary>

1. The area under each absorption, which is proportional to the number of equivalent protons producing that signal.
2. The ratio 2:2:3 sums to 7, matching the formula's 7 hydrogens, so the signals represent 2, 2, and 3 protons directly.
3. The ratio 5:3 sums to 8, matching \(C_8H_{10}\). Five aromatic + three methyl protons = toluene, \(C_6H_5\!-\!CH_3\).
4. Exchange broadens and shifts the OH signal, so baseline integration can miss part of its area; confirm the proton with the D₂O shake (the signal disappears when O–H becomes O–D).
5. A 6H singlet means six equivalent protons with no neighboring protons — two equivalent methyl groups attached to a carbonyl: acetone, \((CH_3)_2C=O\).
6. Integration gives only counts, not environments; two isomers can share a 3:2:1 pattern. Shifts and multiplicities (topics 4 and 6) assign each signal to its protons.

</details>

## Related Topics

- Previous: [Chemical Shifts in 1H NMR Spectroscopy](04-chemical-shifts-in-1h-nmr-spectroscopy.md)
- Next: [Spin–Spin Splitting in 1H NMR Spectra](06-spin-spin-splitting-in-1h-nmr-spectra.md)
- Related: [Chemical Shifts in 1H NMR Spectroscopy](04-chemical-shifts-in-1h-nmr-spectroscopy.md) — assigning each integrated signal to an environment
- Related: [Spin–Spin Splitting in 1H NMR Spectra](06-spin-spin-splitting-in-1h-nmr-spectra.md) — multiplicities refine what each integrated signal represents
- Related: [1H NMR Spectroscopy and Proton Equivalence](07-1h-nmr-spectroscopy-and-proton-equivalence.md) — why equivalent protons share a single integrated signal
- Related: [13C NMR Spectroscopy: Signal Averaging and FT–NMR](10-13c-nmr-spectroscopy-signal-averaging-and-ft-nmr.md) — why 13C integrations are NOT reliable proton-style counts (NOE, relaxation)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
