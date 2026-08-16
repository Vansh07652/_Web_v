---
title: "Spin–Spin Splitting in 1H NMR Spectra"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "spin-spin-splitting-in-1h-nmr-spectra"
  - "science"
status: "complete"
---

# Spin–Spin Splitting in 1H NMR Spectra

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Many 1H NMR signals are groups of peaks — multiplets. This **spin–spin splitting** arises because the magnetic field one proton experiences is slightly modified by the spin states of *neighboring, nonequivalent* protons, transmitted through the bonding electrons. A proton coupled to \(n\) equivalent neighbors appears as \(n + 1\) peaks — the **\(n+1\) rule** — with intensities following Pascal's triangle (doublet 1:1, triplet 1:2:1, quartet 1:3:3:1). The spacing between adjacent lines is the **coupling constant** \(J\) in Hz, independent of field strength: 7 Hz is 7 Hz at 300 or 600 MHz.

Splitting answers the connectivity question: which protons sit next to which. A triplet methyl next to a quartet methylene proves an ethyl group \(CH_3\!-\!CH_2\!-\). Because equivalent protons do not split each other and coupling is significant mainly through 2–3 bonds, careful multiplet reading often settles debates shifts alone cannot.

## Why This Matters

- Multiplicity is decisive evidence for connectivity: a triplet means "two equivalent neighboring protons," a quartet "three." Chemists recognize ethyl, isopropyl, and tert-butyl fragments this way.
- Exam structure problems hinge on the \(n+1\) rule: "2H quartet at \(\delta\) 4.1 + 3H triplet at \(\delta\) 1.2" = an O–CH2–CH3 ethyl group.
- Coupling constants identify stereochemistry: the Karplus relationship links \(^3J\) to dihedral angle, and cis/trans alkene protons differ in \(J\) (~10 Hz cis vs. ~17 Hz trans).
- In pharmaceutical analysis, \(J\) values and multiplicities confirm the correct isomer (e.g., 1,4- vs. 1,2-disubstituted aromatics differ in coupling pattern), protecting patients from the wrong drug.

## Core Concepts

### Where splitting comes from

The spin of a neighboring proton is a tiny magnet: its \(\alpha\) or \(\beta\) orientation slightly raises or lowers the local field felt by its coupling partner (transmitted through the bonding electrons — "through-bond" coupling). For a proton next to one neighbor, half the neighbor population adds to the field and half subtracts, so the signal splits into two equal lines — a doublet. With two equivalent neighbors, the four spin combinations (αα, αβ, βα, ββ) collapse into three field values with 1:2:1 probabilities — a triplet; with three, four values with 1:3:3:1 intensities — a quartet. The generalization is the \(n+1\) rule.

### The \(n+1\) rule and Pascal's triangle

A proton (or equivalent set) coupled to \(n\) equivalent neighboring protons appears as \(n+1\) peaks:

| Neighbors (\(n\)) | Multiplicity | Intensity pattern |
|---|---|---|
| 0 | singlet (s) | 1 |
| 1 | doublet (d) | 1:1 |
| 2 | triplet (t) | 1:2:1 |
| 3 | quartet (q) | 1:3:3:1 |
| 4 | quintet | 1:4:6:4:1 |
| 5 | sextet | 1:5:10:10:5:1 |
| 6 | septet | 1:6:15:20:15:6:1 |

The rule applies to a *set* of equivalent protons collectively: the three \(CH_3\) protons are equivalent, so the methyl's multiplicity is set by its *neighbors* (the \(CH_2\)'s two protons) — a triplet — not by its own three protons. Equivalent protons never split one another.

### The coupling constant \(J\)

The spacing between adjacent lines of a multiplet equals \(J\) in Hz. Typical magnitudes: vicinal coupling (H–C–C–H, three bonds) is 6–8 Hz in freely rotating alkyl chains; geminal coupling (H–C–H, two bonds) is often 10–15 Hz but unobservable when the protons are equivalent (as in \(CH_2Cl_2\)). In alkenes, \(^3J_{cis}\) is ~6–12 Hz and \(^3J_{trans}\) ~12–18 Hz — a diagnostic for alkene geometry. Two properties are essential: (1) \(J\) is **field-independent** — the same Hz on any instrument, so multiplets look "tighter" (smaller ppm spread) at higher field; (2) each coupled proton keeps its own shift and is split by the other.

### Which protons split which

Coupling is significant only between nonequivalent protons 2–3 bonds apart; beyond that, visible splitting usually vanishes (small long-range couplings occur in alkenes and aromatics). Exchangeable OH and NH protons typically do **not** split their neighbors (or get split) because rapid exchange averages coupling away — why ethanol's OH is a singlet and its \(CH_2\) a clean quartet.

## ELI-10: Explain Like I'm 10

> Imagine kids whispering in a line: the kid next to you hears you louder or softer depending on how the kid *between* you is facing. A proton's signal works the same way — a neighbor's "facing" (spin) nudges the signal higher or lower, so instead of one peak you get a group: two peaks if one neighbor, three if two, and so on. The peak count tells you how many neighbors the proton has, and the spacing is the same on every machine.

## High-Yield Points

- \(n+1\) rule: a proton (or equivalent set) with \(n\) equivalent neighboring protons is split into \(n+1\) peaks.
- Intensities follow Pascal's triangle: d 1:1, t 1:2:1, q 1:3:3:1, quintet 1:4:6:4:1, sextet 1:5:10:10:5:1, septet 1:6:15:20:15:6:1.
- Equivalent protons do NOT split each other: \(CH_3\) gives one signal; \(CH_2Cl_2\) is a singlet.
- Ethyl fingerprint: \(CH_3\) triplet + \(CH_2\) quartet.
- \(J\) (Hz) = spacing between adjacent multiplet lines; field-independent (shifts and Hz offsets scale with field).
- Typical \(^3J\) (vicinal): 6–8 Hz in alkyl chains; cis-alkene ~6–12 Hz; trans ~12–18 Hz.
- OH and NH protons usually appear as singlets (fast exchange averages coupling away).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Spin–spin splitting | Division of one signal into multiple peaks by neighboring proton spins | Reveals which protons are adjacent — connectivity |
| \(n+1\) rule | A signal splits into \(n+1\) peaks when coupled to \(n\) equivalent neighbors | Quick count: triplet = 2 neighbors, quartet = 3, septet = 6 |
| Multiplet | A group of closely spaced peaks from one signal | The observed form of a split absorption |
| Coupling constant (\(J\)) | The Hz spacing between adjacent multiplet lines | Field-independent fingerprint of the coupling path; identifies cis/trans geometry |
| Vicinal coupling (\(^3J\)) | Coupling between protons three bonds apart (H–C–C–H) | Most common coupling; 6–8 Hz in alkyl chains, larger in alkenes |
| Geminal coupling (\(^2J\)) | Coupling between protons on the same carbon (H–C–H) | Often unobservable when protons are equivalent |
| Equivalent protons | Protons identical in environment that do not split each other | Sets the \(n+1\) rule's limit: only *nonequivalent* neighbors split |
| Pascal's triangle intensities | The 1:2:1, 1:3:3:1, … intensity patterns of multiplets | Confirms multiplet assignments; helps spot overlaps |

## Worked Examples

### Example 1: Predicting the 1H NMR pattern of 1-bromopropane

Predict the multiplicity and integration of each signal in 1-bromopropane, \(CH_3\!-\!CH_2\!-\!CH_2\!-\!Br\).

**Step 1 — List the three environments.** \(H_a = CH_3\), \(H_b =\) middle \(CH_2\), \(H_c = CH_2\!-\!Br\). \(H_a\), \(H_b\), and \(H_c\) are mutually nonequivalent.

**Step 2 — Apply the \(n+1\) rule.**
- \(H_a\) (\(CH_3\)): 2 neighbors (\(H_b\)) → **triplet**, 3H.
- \(H_b\) (middle \(CH_2\)): 5 neighbors (3 \(H_a\) + 2 \(H_c\)) → **sextet**, 2H.
- \(H_c\) (\(CH_2\!-\!Br\)): 2 neighbors (\(H_b\)) → **triplet**, 2H.

**Step 3 — Add shifts and check.** \(H_c\) triplet at \(\delta \approx 3.4\) (α to Br), \(H_b\) sextet at \(\delta \approx 1.9\), \(H_a\) triplet at \(\delta \approx 1.0\): two triplets flanking a sextet, integrations 3:2:2 — the signature of a \(CH_2\) between \(CH_3\) and \(CH_2X\).

### Example 2: Reading \(J\) and testing field independence

A doublet's two lines sit at \(\delta\) 7.24 and \(\delta\) 7.26 on a 400 MHz instrument. (a) What is \(J\)? (b) Where would the lines be at 600 MHz?

**Part (a) — Convert the ppm spacing to Hz (formula first):**

\[ \Delta\nu\ (\mathrm{Hz}) = \Delta\delta\ (\mathrm{ppm}) \times \nu_{\text{spectrometer}}\ (\mathrm{MHz}) \]

**Substitute:**

\[ J = (7.26 - 7.24) \times 400 = 0.02 \times 400 = 8\ \mathrm{Hz} \]

**Part (b) — \(J\) is field-independent, so the spacing stays 8 Hz.** At 600 MHz that is a *smaller* ppm separation:

\[ \Delta\delta = \frac{J}{\nu_{\text{spectrometer}}} = \frac{8\ \mathrm{Hz}}{600\ \mathrm{MHz}} = 0.013\ \mathrm{ppm} \]

The lines sit near \(\delta\) 7.247 and 7.260 — "tighter" in ppm though \(J\) is unchanged, which is why higher-field instruments resolve overlapping multiplets and \(J\) is quoted in Hz, never ppm.

### Example 3: Recognizing an ethyl and an isopropyl group

**(a) Ethyl.** A 3H triplet at \(\delta\) 1.2 plus a 2H quartet at \(\delta\) 4.1: the quartet needs 3 equivalent neighbors, the triplet 2 — so they are adjacent: \(CH_3\!-\!CH_2\!-\!O\!-\), an O–ethyl group (as in ethyl acetate).

**(b) Isopropyl.** A 6H doublet at \(\delta\) 1.3 and a 1H septet at \(\delta\) 4.0: the septet (1:6:15:20:15:6:1) means the central \(CH\) has 6 equivalent neighbors — the two \(CH_3\) groups — and each \(CH_3\) sees 1, giving the doublet: \((CH_3)_2CH\!-\!\).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Number of protons IN the signal | Number of neighboring protons | Multiplicity counts neighbors (\(n\)): a 3H triplet has 2 neighbors; a 6H doublet has 1 |
| Equivalent protons coupling to each other | Nonequivalent protons coupling | Equivalent protons never split each other: \(CH_3\) gives one line; \(CH_2Cl_2\) is a singlet |
| Coupling constant \(J\) (Hz) | Chemical shift separation (Hz) | \(J\) is field-independent (8 Hz anywhere); Hz separation between different signals scales with field |
| Triplet from 2 neighbors | Triplet from 3 protons | A triplet always means TWO equivalent neighbors, whatever the signal's own proton count |
| Splitting by OH/NH protons | Splitting by C–H neighbors | Exchangeable O–H/N–H usually do NOT couple, so alcohols show clean C–H multiplets |
| Quartet meaning "4 protons" | Quartet meaning "3 neighbors" | A quartet (1:3:3:1) comes from 3 equivalent neighbors — the classic \(CH_3\) beside a \(CH_2\) |

## Quick Review

1. State the \(n+1\) rule and give the intensity patterns for a doublet, triplet, quartet, and septet.
2. Predict multiplicities for all protons of 2-bromopropane, \((CH_3)_2CH\!-\!Br\).
3. A doublet has lines at \(\delta\) 1.32 and \(\delta\) 1.36 on a 500 MHz instrument. What is \(J\), and what would the line spacing be (in ppm and Hz) on a 700 MHz instrument?
4. Why do the three protons of a \(CH_3\) group not split each other, yet the group is split by neighboring protons?
5. Which shows a larger \(J\): a cis-alkene or a trans-alkene? About what values?
6. Why is the OH proton of ethanol a singlet even though it is adjacent to a \(CH_2\)?

<details>
<summary>Show answers</summary>

1. A proton coupled to \(n\) equivalent neighbors gives \(n+1\) peaks: doublet 1:1, triplet 1:2:1, quartet 1:3:3:1, septet 1:6:15:20:15:6:1.
2. Each \(CH_3\) sees 1 neighbor (the central \(CH\)) → doublet (6H); the central \(CH\) sees 6 equivalent neighbors (two \(CH_3\) groups) → septet (1H).
3. \(J = (1.36 - 1.32) \times 500 = 0.04 \times 500 = 20\ \mathrm{Hz}\). At 700 MHz, \(J\) stays 20 Hz; the ppm spacing becomes \(20/700 = 0.029\) ppm.
4. Equivalent protons are magnetically equivalent — their spin combinations don't alter each other's resonance. Neighboring *nonequivalent* protons split the group.
5. trans-Alkenes: \(^3J \approx 12\)–18 Hz; cis: \(^3J \approx 6\)–12 Hz. The larger trans coupling reflects the anti arrangement of the C–H bonds (Karplus relationship).
6. The OH proton exchanges rapidly between molecules, so its spin state is averaged over many environments — the coupling to the \(CH_2\) averages to zero and the OH appears as a singlet.

</details>

## Related Topics

- Previous: [Integration of 1H NMR Absorptions: Proton Counting](05-integration-of-1h-nmr-absorptions-proton-counting.md)
- Next: [1H NMR Spectroscopy and Proton Equivalence](07-1h-nmr-spectroscopy-and-proton-equivalence.md)
- Related: [Chemical Shifts in 1H NMR Spectroscopy](04-chemical-shifts-in-1h-nmr-spectroscopy.md) — shifts assign each multiplet to its environment
- Related: [Integration of 1H NMR Absorptions: Proton Counting](05-integration-of-1h-nmr-absorptions-proton-counting.md) — how many protons each multiplet represents
- Related: [1H NMR Spectroscopy and Proton Equivalence](07-1h-nmr-spectroscopy-and-proton-equivalence.md) — equivalence decides who splits whom
- Related: [More Complex Spin–Spin Splitting Patterns](08-more-complex-spin-spin-splitting-patterns.md) — overlapping multiplets and nonequivalent couplings
- Related: [Uses of 1H NMR Spectroscopy](09-uses-of-1h-nmr-spectroscopy.md) — putting shifts, integration, and splitting together
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
