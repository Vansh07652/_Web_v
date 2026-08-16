---
title: "Uses of 1H NMR Spectroscopy"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "uses-of-1h-nmr-spectroscopy"
  - "science"
status: "complete"
---

# Uses of 1H NMR Spectroscopy

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

¹H NMR is the workhorse of organic structure determination because a single spectrum bundles four independent measurements: the **number of signals** tells how many proton environments exist (topic 7), **integration** gives their relative proton counts (topic 5), **splitting** tells how many neighbors each environment has (topics 6 and 8), and **chemical shifts** reveal nearby functional groups (topics 3 and 4). Read together, these four pieces usually pin down a structure — or narrow it to one or two candidates.

Beyond structure elucidation, the same experiment quantifies mixtures, monitors reactions, detects exchangeable protons, reports molecular dynamics, and — in the clinic — images human tissue as **MRI**.

## Why This Matters

Almost every organic synthesis ends with "take a ¹H NMR." The spectrum is used to confirm that the intended product formed, to prove it is pure, to measure how much of it was made relative to starting material, and to spot unexpected byproducts. In industry, NMR-based identity and purity checks are part of pharmaceutical quality control; in research, reaction monitoring by NMR replaces slower chromatography for kinetic studies. Understanding what the experiment can and cannot tell you — and how to design the analysis (integration, exchange tests, variable temperature) — is a core professional skill for chemists and a predictable exam theme.

## Core Concepts

### Structure elucidation workflow

To identify an unknown by ¹H NMR: (1) count signals and match the number to symmetry-equivalent environments; (2) integrate each signal to get relative proton counts (they must sum to the formula's H count); (3) read splitting patterns to count neighbors and identify fragments like CH₃CH₂– or –CH(CH₃)₂; (4) use chemical shifts to place fragments next to electronegative atoms, π systems, or carbonyls; (5) assemble a structure consistent with all four and check it against the molecular formula. A mismatch between formula and integrated proton sum is the first sign of error or impurity.

### Quantifying mixtures and monitoring reactions

Integration areas are proportional to proton counts, so the same spectrum gives **mole ratios** for mixtures: two compounds with non-overlapping signals can be quantified directly from their relative integrals. This is how chemists measure product:starting-material ratios, enantiomeric excess with the help of chiral reagents, and reaction progress over time (a series of spectra, each integrated). The limitation: integration is only as good as the baseline and only reliable for well-separated signals.

### Exchangeable protons: OH and NH

O–H and N–H protons are special: their shifts vary with concentration, temperature, and hydrogen bonding, and they are often **broad** because of chemical exchange. Two practical consequences: (a) an OH proton may appear anywhere from about δ 0.5 to δ 5+ (phenols and strongly hydrogen-bonded OH further downfield), so it cannot be assigned by shift alone; (b) adding a drop of D₂O replaces the OH/NH proton with deuterium and its signal **disappears** — the "D₂O shake" is the standard confirmation test. Exchange also explains why OH and NH protons usually show no splitting from neighbors.

### Dynamic processes: variable-temperature NMR

If a molecule interconverts between two conformations on the NMR timescale, the spectrum reflects the *average* structure. Cooling slows the exchange: broad signals appear, then split into separate signals for each species (e.g., the two N–CH₃ groups of dimethylformamide, `CN(C)C=O`, become distinct below the coalescence temperature); warming reverses this. Variable-temperature NMR thus measures rotation barriers, ring flips (cyclohexane's axial/equatorial protons), and other dynamic processes.

### Chirality: measuring enantiomeric excess

Ordinary ¹H NMR cannot distinguish enantiomers — their spectra are identical in an achiral solvent. Adding a **chiral shift reagent** (or using a chiral solvating agent) makes the two enantiomers diastereomeric in the NMR sense, and their signals separate. Integrating the separated signals gives the **enantiomeric excess**:

\[
\%\ \mathrm{ee} = \frac{|R - S|}{R + S} \times 100\%
\]

where R and S are the integrated amounts of each enantiomer.

### Beyond the flask: MRI and quality control

Magnetic resonance imaging is proton NMR applied to the water in living tissue; the same relaxation physics (T1, T2) that affects organic samples produces image contrast between tissues. In applied chemistry, ¹H NMR fingerprints identify raw materials, detect adulteration in foods and fuels, and verify drug identity and purity in pharmaceutical QC.

## ELI-10: Explain Like I'm 10

> A ¹H NMR spectrum is like a fingerprint made of hydrogen voices. It tells you how many different kinds of hydrogens a molecule has, how many of each kind, and which neighbors each one sits next to. Scientists use it to prove they made the molecule they wanted, to see how clean it is, and even — as MRI in hospitals — to look at the water inside your body without cutting you open.

## High-Yield Points

- **Four reads per spectrum:** count signals (environments), integrate (relative H), split (neighbors), shift (functional groups).
- Integration gives **relative**, not absolute, proton numbers; signals must sum sensibly against the molecular formula.
- **D₂O shake:** exchangeable OH/NH signals vanish after adding D₂O — the standard test for exchangeable protons.
- OH/NH shifts are variable and broad; they cannot be assigned by chemical shift alone.
- **Variable-temperature NMR** separates exchanging species; coalescence temperature estimates the exchange barrier.
- Enantiomers give identical achiral NMR spectra; chiral shift reagents split the signals to measure % ee.
- Integration of non-overlapping signals gives mole ratios → reaction monitoring and purity assays.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| structure elucidation | Using spectra to determine a molecule's connectivity | The primary job of ¹H NMR in synthesis |
| integration | Measuring the area under each NMR signal | Gives relative numbers of protons per environment |
| exchangeable proton | An OH or NH hydrogen that rapidly swaps between molecules | Shows a broad, concentration-dependent signal that disappears on D₂O shake |
| D₂O shake | Adding D₂O to replace OH/NH protons with deuterium | Confirms which signals are exchangeable |
| variable-temperature NMR | Recording spectra at different temperatures | Reveals dynamic processes: rotamers, ring flips, exchange |
| coalescence | Temperature at which two exchanging signals merge into one | Estimates the rate and barrier of the exchange process |
| chiral shift reagent | Chiral additive that separates enantiomer signals in NMR | Enables measurement of enantiomeric excess |
| enantiomeric excess (% ee) | Excess of one enantiomer over the other, as a percentage | Standard measure of stereochemical purity |

## Worked Examples

### Example 1: Distinguishing isomers by signal count and splitting

A student isolates C₃H₈O and must decide between **1-propanol** (`CCCO`) and **2-propanol** (`CC(C)O`). The ¹H NMR decides immediately:

- **1-Propanol:** four environments — CH₃ (triplet, ~3H), central CH₂ (complex multiplet, ~2H), CH₂–O (triplet, ~2H), OH (broad). Four signals, integrating 3:2:2:1.
- **2-Propanol:** three environments — two equivalent CH₃ (doublet, ~6H), central CH–O (septet, ~1H), OH (broad). Three signals, integrating 6:1:1.

The doublet + septet pair is the signature of an isopropyl group attached to oxygen; the triplet CH₃ of 1-propanol rules it out.

### Example 2: Reaction monitoring by integration

A reaction converts benzyl alcohol (`OCc1ccccc1`, CH₂–O at δ 4.7, 2H) into benzyl acetate (`CC(=O)OCc1ccccc1`, CH₂–O at δ 5.1, 2H). The two CH₂ signals appear at different shifts, so each spectrum's integrals are proportional to moles of alcohol and ester. If the integrals read 0.40 (alcohol) and 1.60 (ester), then 1.60/(0.40 + 1.60) = 80% of the starting material has been converted. Repeating the measurement over time traces the reaction to completion without any chromatography.

### Example 3: Purity check with a D₂O shake

A sample of "dry" ethanol in CDCl₃ shows, besides the expected CH₃ triplet and CH₂ quartet, a small broad signal near δ 2.5 that integrates to less than 1 H and vanishes when D₂O is added. Conclusion: the signal is an OH proton (residual water/ethanol hydrogen bonding) — the sample is not anhydrous, and the "extra" signal is not an organic impurity. This is the routine step of interpreting every signal before declaring a compound pure.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Integration values | Exact proton counts | Integrals give *ratios*; absolute numbers come from fitting them to the formula |
| An OH signal | A CH signal | OH is broad, exchange-dependent, and disappears on D₂O shake; CH is sharp and stays |
| Enantiomers in NMR | Diastereomers in NMR | Enantiomers give identical achiral spectra; diastereomers give different spectra — hence chiral shift reagents are needed for ee |
| Extra signals | Impurity | Could be an exchangeable proton, a rotamer, or a spinning sideband — test with D₂O shake and temperature before assuming contamination |
| Coalesced single signal | One environment | At room temperature, rapidly exchanging species (e.g., DMF N–CH₃ groups) may average into one signal that separates on cooling |

## Quick Review

1. List the four pieces of information extracted from a ¹H NMR spectrum and what each reports.
2. How would you confirm that a broad signal at δ 3.0 comes from an OH proton?
3. Why do enantiomers give identical spectra in ordinary achiral NMR, and how is this limitation overcome?
4. A mixture's two product signals integrate 1.2 and 2.4. What fraction of the mixture is the first product?
5. What happens to the ¹H NMR spectrum of dimethylformamide on cooling, and why?

<details>
<summary>Show answers</summary>

1. Number of signals (proton environments), integration (relative proton counts), splitting (number of neighboring protons), and chemical shift (electronic/functional-group environment).
2. Add a drop of D₂O and re-run: an exchangeable OH signal disappears (the proton is replaced by deuterium), while a C–H signal is unaffected.
3. Enantiomers have identical NMR properties in an achiral solvent. Adding a chiral shift reagent (or chiral solvating agent) makes the two enantiomers magnetically distinct, so their signals separate and can be integrated to compute % ee.
4. First product fraction = 1.2/(1.2 + 2.4) = 1/3 (about 33%).
5. At room temperature the two N–CH₃ groups exchange rapidly and appear as one averaged signal; on cooling, exchange slows, the signal broadens, and below the coalescence temperature it separates into two distinct methyl signals.
</details>

## Related Topics

- Previous: [More Complex Spin–Spin Splitting Patterns](08-more-complex-spin-spin-splitting-patterns.md)
- Next: [13C NMR Spectroscopy: Signal Averaging and FT–NMR](10-13c-nmr-spectroscopy-signal-averaging-and-ft-nmr.md)
- Related: [Integration of 1H NMR Absorptions: Proton Counting](05-integration-of-1h-nmr-absorptions-proton-counting.md)
- Related: [Uses of 13C NMR Spectroscopy](13-uses-of-13c-nmr-spectroscopy.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- % ee formula and D₂O-shake/coalescence behavior cross-checked against standard spectroscopy references (2026-08).
- Last updated: 2026-08-16
