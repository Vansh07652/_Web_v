---
title: "Nuclear Magnetic Resonance Spectroscopy"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "1"
source: "organic-chemistry.md"
tags:
  - "nuclear-magnetic-resonance-spectroscopy"
  - "science"
status: "complete"
---

# Nuclear Magnetic Resonance Spectroscopy

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Nuclear magnetic resonance (NMR) spectroscopy is the most information-rich tool in organic chemistry: it reveals the **carbon skeleton** and **hydrogen environment** of a molecule. The technique exploits **spin**, a property of certain nuclei: \(^{1}\text{H}\) and \(^{13}\text{C}\) behave like tiny bar magnets. In a strong magnetic field they point with or against the field, with slightly different energies, and radio-frequency (RF) photons whose energy matches that tiny gap flip them between orientations — **resonance** — at a frequency that depends on the electronic environment around each nucleus.

Because electrons shield nuclei to different degrees, chemically distinct hydrogens or carbons absorb at slightly different frequencies. The spectrum plots absorption intensity versus **chemical shift** (in ppm); each distinct H or C type gives its own signal. Counting, positioning, and splitting those signals maps a molecule's connectivity — which is why NMR is usually the final arbiter of structure.

## Why This Matters

NMR proves the identity and structure of synthetic and natural products and pharmaceuticals daily; no other method gives so much structural information so directly. The same physics powers **magnetic resonance imaging (MRI)**, which images water protons in the body. In metabolomics, NMR profiles of blood or urine help diagnose disease. For students, \(^{1}\text{H}\) and \(^{13}\text{C}\) NMR problems — "how many signals, at what shifts, with what splitting?" — appear on virtually every organic exam.

## Core Concepts

### Which nuclei are NMR-active

A nucleus is NMR-active only if its spin quantum number \(I\) is not zero. The organic workhorses are \(^{1}\text{H}\) (\(I = 1/2\), ≈ 99.98% abundant — essentially every hydrogen is visible) and \(^{13}\text{C}\) (\(I = 1/2\), ≈ 1.1% — dilute, so \(^{13}\text{C}\) NMR needs signal averaging); \(^{19}\text{F}\) and \(^{31}\text{P}\) are also \(I = 1/2\). Nuclei with even mass and even charge, like \(^{12}\text{C}\) and \(^{16}\text{O}\), have \(I = 0\) and are **NMR-silent**; \(I = 1/2\) nuclei are preferred for their clean, narrow lines.

### The resonance condition

A spin-\(1/2\) nucleus in a magnetic field \(B_0\) has two allowed orientations, \(m = +1/2\) (aligned with the field, lower energy) and \(m = -1/2\) (against the field). The energy gap is:

\[
\Delta E = \frac{h \gamma B_0}{2\pi}
\]

where \(\gamma\) is the **gyromagnetic ratio** (how strong a magnet the nucleus is). Absorption occurs when the RF photon energy equals the gap, \(h\nu = \Delta E\), giving the resonance (Larmor) frequency:

\[
\nu = \frac{\gamma B_0}{2\pi}
\]

For \(^{1}\text{H}\), \(\gamma/2\pi = 42.6\ \text{MHz/T}\); for \(^{13}\text{C}\), 10.7 — about a quarter of the proton value. In a 1.41 T magnet, protons resonate near 60 MHz and \(^{13}\text{C}\) near 15 MHz; at 14.1 T, near 600 MHz. Instrument "field" is quoted by the proton frequency (a "400 MHz NMR" has \(B_0 \approx 9.4\ \text{T}\)); the gap grows with field strength, so modern instruments use the strongest magnets.

### Shielding and chemical shift

Electrons around a nucleus circulate in the applied field and generate a small **induced field opposing \(B_0\)** — they *shield* the nucleus, so the effective field is \(B_{\text{eff}} = B_0(1 - \sigma)\). A more shielded nucleus needs a slightly higher applied frequency to reach resonance and appears **upfield** (smaller shift); a **deshielded** nucleus — near electronegative atoms or in a \(\pi\) system — appears **downfield** (larger shift). Shifts are reported relative to tetramethylsilane (TMS, \(\text{Si(CH}_3)_4\), SMILES: `C[Si](C)(C)C`), assigned 0 ppm:

\[
\delta\ (\text{ppm}) = \frac{\nu_{\text{sample}} - \nu_{\text{TMS}}}{\nu_{\text{instrument}}} \times 10^6
\]

Chemical shift \(\delta\) is field-independent: the same proton shows the same \(\delta\) at 60 and 600 MHz, even though its hertz offset is ten times larger on the bigger machine.

### \(^{1}\text{H}\) versus \(^{13}\text{C}\) NMR

- **\(^{1}\text{H}\) NMR** (0–12 ppm): each chemically distinct set of hydrogens gives one signal; the **integrated peak area** is proportional to the number of hydrogens; **spin–spin splitting** (topics 6–8) reveals how many neighboring hydrogens each set has.
- **\(^{13}\text{C}\) NMR** (0–220 ppm): each distinct carbon gives one signal; integration is not routinely used (areas are unreliable); the wide range distinguishes carbon types at a glance — carbonyl ~190–220, aromatic ~110–160, alkyne ~65–90, sp³ 0–90.

### FT-NMR: pulsed instruments

Instead of sweeping frequency slowly, a modern spectrometer applies a short **RF pulse** containing all frequencies at once, then records the decaying signal (**free induction decay**, FID); a **Fourier transform** converts it to the familiar spectrum — the same math as FT-IR. This makes \(^{13}\text{C}\) NMR (1.1% abundant) practical via signal averaging.

## ELI-10: Explain Like I'm 10

> Certain atomic nuclei act like tiny compass needles, and a strong magnet lines them all up. A radio "push" of just the right strength flips them over, and each kind of atom needs a slightly different push depending on how its electron "armor" shields it. By measuring which pushes each hydrogen and carbon accepts, scientists draw the whole skeleton of the molecule.

## High-Yield Points

- NMR-active nuclei have spin \(I \neq 0\): \(^{1}\text{H}\) and \(^{13}\text{C}\) (\(I = 1/2\)) are the organic workhorses; \(^{12}\text{C}\) and \(^{16}\text{O}\) are silent.
- Resonance frequency: \(\nu = \gamma B_0/2\pi\); \(^{1}\text{H}\) resonates ~4× higher than \(^{13}\text{C}\) (42.6 vs 10.7 MHz/T).
- Shielding lowers the field at the nucleus; shielded → upfield (smaller \(\delta\)), deshielded → downfield (larger \(\delta\)).
- Chemical shift is field-independent: \(\delta = (\nu_{\text{sample}} - \nu_{\text{TMS}}) \times 10^6 / \nu_{\text{instrument}}\), referenced to TMS at 0 ppm.
- \(^{1}\text{H}\) range 0–12 ppm with integration (area ∝ H count); \(^{13}\text{C}\) range 0–220 ppm, no routine integration.
- \(^{13}\text{C}\) abundance is only ~1.1%, so \(^{13}\text{C}\) NMR relies on FT pulses and signal averaging.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Nuclear spin (\(I\)) | Intrinsic nuclear angular momentum; \(I \neq 0\) for NMR | Determines whether a nucleus is NMR-visible |
| Shielding | Electrons reducing the field felt by a nucleus | Less shielding = downfield (larger \(\delta\)) |
| Chemical shift (\(\delta\)) | Field-independent signal position in ppm from TMS | The "address" of each H or C type — the main structural data |
| TMS | Tetramethylsilane, \(\text{Si(CH}_3)_4\) | The universal 0 ppm reference |
| Integration | Peak area in \(^{1}\text{H}\) NMR, proportional to H count | Counts the hydrogens per signal |
| FT-NMR | Pulsed NMR with Fourier transformation | Makes \(^{13}\text{C}\) (1.1% abundant) spectra practical |

## Worked Examples

### Example 1: Resonance frequencies of \(^{1}\text{H}\) and \(^{13}\text{C}\) at 1.41 T

Use the Larmor equation with \(\gamma/2\pi\) = 42.6 MHz/T (\(^{1}\text{H}\)) and 10.7 MHz/T (\(^{13}\text{C}\)):

\[
\nu(^{1}\text{H}) = (42.6\ \text{MHz/T})(1.41\ \text{T}) = 60.1\ \text{MHz}
\]

\[
\nu(^{13}\text{C}) = (10.7\ \text{MHz/T})(1.41\ \text{T}) = 15.1\ \text{MHz}
\]

At any field, \(^{13}\text{C}\) resonates at ~1/4 the proton frequency (at 14.1 T: ~600 vs ~150 MHz). Dimensional check: \(\text{MHz/T} \times \text{T} = \text{MHz}\). ✓

### Example 2: Converting a hertz offset to a chemical shift

A proton absorbs 427 Hz downfield of TMS on a 60 MHz instrument. Find its chemical shift.

\[
\delta = \frac{\nu_{\text{sample}} - \nu_{\text{TMS}}}{\nu_{\text{instrument}}} \times 10^6 = \frac{427\ \text{Hz}}{60 \times 10^6\ \text{Hz}} \times 10^6 = 7.12\ \text{ppm}
\]

The Hz units cancel, leaving ppm. On a 400 MHz instrument, the same proton would absorb \(7.12 \times 10^{-6} \times 400 \times 10^6 = 2848\ \text{Hz}\) — a much larger hertz offset, but the same 7.12 ppm. This is exactly why shifts are reported in ppm: the number is a property of the molecule, not the instrument.

### Example 3: Why NMR signals are so weak — the Boltzmann population difference

At 60 MHz, the energy gap is:

\[
\Delta E = h\nu = (6.626 \times 10^{-34}\ \text{J·s})(60 \times 10^6\ \text{s}^{-1}) = 3.98 \times 10^{-26}\ \text{J}
\]

The population ratio of the two spin states follows the Boltzmann distribution:

\[
\frac{N_{+1/2}}{N_{-1/2}} = e^{\Delta E / k_B T}
\]

At \(T = 300\ \text{K}\) with \(k_B = 1.381 \times 10^{-23}\ \text{J/K}\), \(\Delta E/k_B T = 3.98 \times 10^{-26}/((1.381 \times 10^{-23})(300)) = 9.6 \times 10^{-6}\).

The excess of spins in the lower state is only ~1 in 100,000, so absorption is extremely weak — stronger magnets (larger \(B_0\)) help, and \(^{13}\text{C}\)'s 4× smaller \(\gamma\) means 4× weaker signals, hence signal averaging. NMR photons are orders of magnitude below bond-breaking energies, making NMR non-destructive.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Chemical shift (ppm) | Frequency offset (Hz) | ppm is field-independent; Hz offset grows with \(B_0\). Convert with \(\delta = (\Delta\nu/\nu_{\text{instrument}}) \times 10^6\) |
| Shielded | Deshielded | Shielded → upfield (smaller \(\delta\)); deshielded (near O, N, \(\pi\) systems) → downfield (larger \(\delta\)) |
| \(^{1}\text{H}\) range | \(^{13}\text{C}\) range | \(^{1}\text{H}\) 0–12 ppm; \(^{13}\text{C}\) 0–220 ppm — never mix the scales |
| \(^{12}\text{C}\) | \(^{13}\text{C}\) | \(^{12}\text{C}\) is NMR-silent (\(I = 0\)); only the 1.1% abundant \(^{13}\text{C}\) is observed |
| NMR | MRI | Same physics; MRI images water protons; NMR analyzes molecular structure |
| Larger \(\delta\) (downfield) | Higher energy absorption | Both true, but downfield = less shielded = higher RF frequency at fixed \(B_0\) |
| IR photon energies | NMR photon energies | NMR RF photons (~10⁻²⁶ J) are far weaker than IR (~10⁻²⁰ J) — NMR is gentler |

## Quick Review

1. Why are \(^{12}\text{C}\) and \(^{16}\text{O}\) invisible in NMR?
2. A \(^{1}\text{H}\) signal appears 1420 Hz downfield of TMS on a 200 MHz instrument. What is its shift in ppm?
3. Why does a deshielded proton appear downfield (larger \(\delta\))?
4. Why is \(^{13}\text{C}\) NMR less sensitive than \(^{1}\text{H}\) NMR, and how is it compensated?

<details>
<summary>Show answers</summary>

1. They have \(I = 0\) (even mass, even charge), so no nuclear magnetic moment and no resonance.
2. \(\delta = (1420\ \text{Hz} / 200 \times 10^6\ \text{Hz}) \times 10^6 = 7.10\ \text{ppm}\).
3. Electron shielding reduces the field at the nucleus; a deshielded nucleus feels a larger effective field, so it resonates at a slightly higher applied frequency — a larger \(\delta\) (downfield).
4. \(^{13}\text{C}\) is only ~1.1% abundant with a 4× smaller gyromagnetic ratio (weaker signal, smaller \(\Delta E\)); FT-NMR pulses all frequencies at once and averages thousands of scans.
</details>

## Related Topics

- Previous: Start of chapter
- Next: [The Nature of NMR Absorptions](02-the-nature-of-nmr-absorptions.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: CODATA standard values; last updated 2026-08-16
