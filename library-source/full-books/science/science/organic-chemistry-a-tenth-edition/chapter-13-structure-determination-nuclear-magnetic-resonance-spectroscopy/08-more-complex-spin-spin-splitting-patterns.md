---
title: "More Complex Spin–Spin Splitting Patterns"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "more-complex-spin-spin-splitting-patterns"
  - "science"
status: "complete"
---

# More Complex Spin–Spin Splitting Patterns

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

The simple **N+1 rule** — a proton coupled equally to N equivalent neighbors appears as N+1 lines — works beautifully for first-order spectra like the triplet of a CH₃ next to a CH₂. Real spectra are rarely that tidy. This topic covers where the rule needs extension or fails outright: protons coupled to **two different sets of neighbors** with different coupling constants, protons whose shifts are **too close to their coupling constants** (second-order or AB spectra), and coupling through **multiple bonds** (long-range coupling).

Two ideas carry the whole topic. First, when a proton couples to nₐ equivalent neighbors (coupling constant Jₐ) and n_b different ones (J_b), the multiplicity is (nₐ + 1)(n_b + 1) — the proton is split by each set in turn. Second, when the frequency separation between two coupled protons (Δν) is not much larger than their coupling constant J, the spectrum is no longer first-order: intensities distort (inner lines grow taller), producing "leaning" doublets called an **AB pattern**.

## Why This Matters

Misreading a complex multiplet is the fastest way to assign the wrong structure. An AB quartet from diastereotopic CH₂ hydrogens is routinely mistaken for two separate CH protons or even an impurity; a vinyl proton's doublet of doublets can be misread as overlapping doublets. Knowing when the N+1 rule applies — and what the spectrum looks like when it does not — lets you extract correct neighbor counts and coupling constants from messy real spectra, exactly what structure-determination problems on exams and in research demand.

## Core Concepts

### The N+1 rule and when it is valid

The N+1 rule assumes **first-order** conditions: the protons involved are weakly coupled, meaning their chemical-shift separation Δν is large compared with J (roughly Δν/J > 10). Under that condition, coupling to N equivalent neighbors splits a signal into N+1 lines whose intensities follow **Pascal's triangle** (a triplet is 1:2:1, a quartet 1:3:3:1, a quintet 1:4:6:4:1).

### Coupling to two different sets of neighbors

If a proton couples to nₐ equivalent protons with coupling constant Jₐ and to n_b *different* protons with a different J_b, the splitting is applied twice:

\[
\text{multiplicity} = (n_a + 1)(n_b + 1)
\]

For example, the central CH₂ of 1-bromopropane (`CCCBr`) couples to 3 equivalent CH₃ protons (J ≈ 7 Hz) and to 2 equivalent CH₂Br protons (J ≈ 7 Hz). When the two coupling constants happen to be nearly equal, the (3+1)(2+1) = 12 expected lines collapse into the familiar **sextet** (6 lines, 1:5:10:10:5:1); when J values differ measurably, the full multiplet of more lines appears.

### Second-order spectra and the AB pattern

When two coupled protons have shifts close compared with J (Δν/J less than about 10), the spectrum is **second-order**. The simplest case is an **AB system**: two coupled protons whose shifts differ by Δν comparable to J. The result is not two clean 1:1 doublets but a **four-line pattern with the inner lines taller than the outer ones** — the lines "lean" toward each other ("roofing"). The more the inner lines dominate, the smaller Δν/J is. Diastereotopic CH₂ hydrogens (topic 7) are the classic source.

For three coupled protons with one far removed in shift, an **ABX pattern** results: the AB part looks like a distorted quartet and the X part like a doublet, with extra lines from combination transitions.

### Coupling constants and what they report

The coupling constant J (in Hz) measures how strongly two protons interact through the bonding electrons — it does not depend on the magnetic field, unlike chemical shifts. Typical values (standard ranges from spectroscopy references):

- **Geminal** (²J, H–C–H, same carbon): 0–20 Hz; about −12 to −15 Hz for sp³ CH₂, near 0–3 Hz for alkene CH₂.
- **Vicinal** (³J, H–C–C–H): 6–8 Hz for freely rotating sp³ systems; **cis** alkene 6–12 Hz; **trans** alkene 11–18 Hz; aromatic **ortho** 6–10 Hz, **meta** 1–3 Hz, **para** 0–1 Hz.
- **Long-range** (⁴J and beyond): 0–3 Hz, seen for allylic (H–C–C=C–H) and benzylic systems.

The cis/trans distinction matters: in an alkene the trans proton couples with a larger J than the cis proton, which is how NMR distinguishes E/Z isomers.

### Coupling through π systems and exchange

Protons separated by four or more bonds can still couple when the pathway passes through a π system (allylic/homoallylic) or in rigid rings. Conversely, **exchangeable protons** (OH, NH) often show no splitting because chemical exchange averages away their couplings — returned to in "Uses of 1H NMR Spectroscopy."

## ELI-10: Explain Like I'm 10

> Imagine neighbors tapping on a wall. One tap from each neighbor splits your note into two; two neighbors tapping together make three notes; three make four. But if some neighbors tap harder than others, the notes get uneven — the middle notes grow louder and the pattern "leans." Complex splitting is just neighbors with different tapping strengths, plus neighbors whose notes are so close together that they interfere.

## High-Yield Points

- N+1 rule applies only to **first-order** spectra: equivalent neighbors, equal J values, and Δν/J > 10.
- Coupling to two different sets: multiplicity = (nₐ + 1)(n_b + 1); equal J values collapse the lines (e.g., the 1-bromopropane sextet).
- **AB patterns** (second-order): four lines with tall inner lines and "roofing"; arise from close shifts (e.g., diastereotopic CH₂).
- J values are field-independent; chemical shifts are not — changing spectrometer field changes Δν/J and can make a spectrum first- or second-order.
- Typical J ranges: geminal 0–20 Hz; vicinal sp³ 6–8 Hz; cis-alkene 6–12 Hz, trans-alkene 11–18 Hz; aromatic ortho 6–10 Hz.
- Long-range coupling (⁴J, 0–3 Hz) through π systems adds fine splitting (allylic/benzylic couplings).
- Exchanging OH/NH protons often show no splitting even with neighbors.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| first-order spectrum | Spectrum where Δν/J > 10, so N+1 splitting and Pascal's triangle intensities hold | The "clean" case assumed by the basic rules |
| second-order spectrum | Spectrum where Δν/J is small; line positions and intensities distort | Real spectra often look like this; patterns must be recognized, not force-fit to N+1 |
| AB system | Two coupled protons with comparable Δν and J, giving a leaning four-line pattern | Classic signature of diastereotopic CH₂ protons |
| roofing | Intensity distortion where inner lines of a multiplet grow taller and outer lines shrink | Tells you the pattern is second-order; also helps locate the coupled partner |
| coupling constant (J) | Size of the spin–spin interaction between protons, in Hz | Reports bond connectivity (geminal, vicinal, cis/trans, long-range) |
| geminal coupling (²J) | Coupling between two protons on the same carbon | Often observed only when the CH₂ protons are non-equivalent |
| vicinal coupling (³J) | Coupling between protons on adjacent carbons | The main source of N+1 splitting; reports dihedral geometry (Karplus-type behavior) |
| long-range coupling | Coupling through 4+ bonds, usually ≤ 3 Hz, often via π systems | Adds small splittings; explains allylic/benzylic fine structure |

## Worked Examples

### Example 1: Predicting the ethyl pattern — CH₃CH₂Br

Ethyl bromide (`CCBr`) has two proton sets: the CH₃ protons have 2 equivalent CH₂ neighbors → triplet (1:2:1); the CH₂ protons have 3 equivalent CH₃ neighbors → quartet (1:3:3:1). The spectrum shows a 3H triplet near δ 1.7 and a 2H quartet near δ 3.4. Because both coupling constants are ≈ 7 Hz, the splitting is first-order and Pascal intensities hold — the same pattern appears in every CH₃CH₂X fragment (ethyl esters, ethers, halides).

### Example 2: Recognizing an AB pattern from a chiral CH₂

A molecule like 2-chlorobutane (`CCC(Cl)C`) contains a CH₂ whose two hydrogens are diastereotopic (topic 7). They appear at slightly different shifts (Δν perhaps 20–60 Hz at 300 MHz) coupled by ²J ≈ −14 Hz. Since Δν/J is small, the expected doublets are actually an **AB quartet**: four lines with the two inner lines taller. Misreading it as "two doublets from two different CH protons" would give four proton environments instead of the real three; recognizing the roof tells you the lines are one CH₂ pair whose halves have equal area (1 H each).

### Example 3: Vinyl protons as doublets of doublets

In styrene (`C(=C)c1ccccc1`), the three vinyl protons Hₐ (geminal to phenyl), H_b (cis), and H_c (trans) couple to each other with three different J values: J_cis ≈ 11 Hz, J_trans ≈ 17 Hz, J_gem ≈ 1–2 Hz. Each vinyl proton therefore appears as a **doublet of doublets** (dd) — split once by one neighbor and again by the other. Each dd integrates to 1 H, and measuring the two J spacings inside the pattern assigns cis vs trans geometry — a direct structural payoff.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| The N+1 rule | A universal law | It holds only for first-order spectra with equivalent neighbors and equal J; otherwise use (nₐ+1)(n_b+1) |
| An AB quartet | Two overlapping doublets from different protons | In an AB pattern the inner lines are taller and the two "doublets" are halves of one coupled pair with equal areas |
| "Roofing" | An impurity or extra signal | Leaning intensities are an intrinsic second-order effect, not contamination |
| Coupling constant J | Chemical shift δ | J is field-independent (Hz) and reports connectivity; δ is field-dependent (ppm) |
| Cis and trans coupling | Equal couplings | Trans vicinal J (11–18 Hz) is larger than cis (6–12 Hz) in alkenes — a diagnostic tool |
| Geminal coupling | Always visible | ²J shows only when the two CH₂ protons are non-equivalent |

## Quick Review

1. When is the N+1 rule strictly valid?
2. A proton couples to 2 equivalent neighbors (J = 7 Hz) and to 1 other proton (J = 2 Hz). How many lines appear?
3. What is an AB pattern, and what physical situation usually produces it in organic molecules?
4. Why does changing the spectrometer field (e.g., 300 MHz vs 600 MHz) sometimes turn a second-order spectrum into a first-order one?
5. In an alkene, which protons couple more strongly — cis or trans?

<details>
<summary>Show answers</summary>

1. When the coupled protons are weakly coupled (first-order): Δν/J > 10, all N neighbors equivalent, and all coupling constants equal.
2. (2 + 1)(1 + 1) = 6 lines — a triplet from the two equivalent neighbors, each line then split into a doublet by the third proton.
3. An AB pattern is the second-order four-line spectrum of two coupled protons whose shift separation Δν is comparable to J — a "leaning" quartet with tall inner lines, classically from diastereotopic CH₂ protons next to a stereocenter.
4. Increasing the field increases Δν (in Hz) between protons but leaves J unchanged, so Δν/J grows and the spectrum moves toward first-order behavior.
5. Trans vicinal protons couple more strongly (J ≈ 11–18 Hz) than cis (J ≈ 6–12 Hz).
</details>

## Related Topics

- Previous: [1H NMR Spectroscopy and Proton Equivalence](07-1h-nmr-spectroscopy-and-proton-equivalence.md)
- Next: [Uses of 1H NMR Spectroscopy](09-uses-of-1h-nmr-spectroscopy.md)
- Related: [Spin–Spin Splitting in 1H NMR Spectra](06-spin-spin-splitting-in-1h-nmr-spectra.md)
- Related: [Chemical Shifts in 1H NMR Spectroscopy](04-chemical-shifts-in-1h-nmr-spectroscopy.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Coupling-constant ranges cross-checked against standard spectroscopy references (2026-08).
- Last updated: 2026-08-16
