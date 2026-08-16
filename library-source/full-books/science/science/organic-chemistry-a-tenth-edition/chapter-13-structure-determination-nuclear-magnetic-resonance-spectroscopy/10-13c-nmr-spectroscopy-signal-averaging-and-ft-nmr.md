---
title: "13C NMR Spectroscopy: Signal Averaging and FT–NMR"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "13c-nmr-spectroscopy-signal-averaging-and-ft-nmr"
  - "science"
status: "complete"
---

# 13C NMR Spectroscopy: Signal Averaging and FT–NMR

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

Carbon-13 NMR faces two obstacles that proton NMR does not. First, the abundant isotope **¹²C has nuclear spin zero** — invisible to NMR; only **¹³C**, at **1.1%** natural abundance, has the spin I = ½ needed to absorb. Second, ¹³C has a much smaller **gyromagnetic ratio** (about one quarter of the proton's), further weakening its signals. Together these factors make an individual ¹³C signal roughly **four orders of magnitude weaker** than a ¹H signal from the same number of nuclei.

Modern spectrometers defeat this handicap with two techniques: **signal averaging** (co-adding many scans so real signals add while random noise partially cancels) and **Fourier-transform (FT) NMR** (a short pulse excites every carbon at once, making thousands of scans fast enough to be practical). With broadband proton decoupling (next topic), these advances turned ¹³C NMR into a routine experiment.

## Why This Matters

¹³C NMR is the ideal complement to ¹H NMR: its spectra are simpler (one signal per unique carbon, usually singlets), its shifts span a far wider range, and it sees carbons with no attached hydrogen (carbonyls, quaternary carbons). Understanding *why* the experiment is insensitive (abundance, gyromagnetic ratio) and *how* the instrument compensates (pulsing, averaging, the FT) explains practical choices: why ¹³C spectra take many scans, why they are not integrated, and why modern NMR — including MRI — uses pulse methods.

## Core Concepts

### Why ¹³C is hard: spin, abundance, and gyromagnetic ratio

NMR signal strength depends on a nucleus's abundance and on the cube of its gyromagnetic ratio γ (γ controls both the spin-state population difference and the voltage induced in the detector coil). For ¹³C relative to ¹H:

\[
\frac{S({}^{13}\mathrm{C})}{S({}^1\mathrm{H})}
= (0.011) \times \left(\frac{\gamma({}^{13}\mathrm{C})}{\gamma({}^1\mathrm{H})}\right)^3
= 0.011 \times (0.2514)^3 \approx 1.7 \times 10^{-4}
\]

So a ¹³C signal is about **1/5700 as strong** as a ¹H signal from the same number of nuclei — roughly four orders of magnitude weaker. Constants: ¹³C abundance 1.1%; γ(¹³C) = 6.728 × 10⁷ rad·s⁻¹·T⁻¹; γ(¹H) = 2.675 × 10⁸ rad·s⁻¹·T⁻¹.

### The resonance frequency: Larmor equation

A nucleus resonates at the **Larmor frequency**, proportional to the applied field B₀:

\[
\nu = \frac{\gamma B_0}{2\pi}
\]

Since γ(¹³C) ≈ 0.2514 × γ(¹H), ¹³C resonates at roughly **one quarter** of the proton frequency at the same field (at 9.4 T: ¹H ≈ 400 MHz, ¹³C ≈ 100 MHz). Instrument names ("a 400 MHz spectrometer") refer to the proton frequency.

### Signal averaging: the √N law

Random noise fluctuates unpredictably, but a genuine signal is identical in every scan. Adding N scans adds signal linearly while noise, being random, adds only as √N:

\[
\left(\frac{S}{N}\right)_N = \left(\frac{S}{N}\right)_1 \sqrt{N}
\]

Doubling the number of scans improves S/N by only √2 ≈ 1.41 — which is why a good ¹³C spectrum requires thousands of scans, and why each scan must be fast.

### FT–NMR: pulse, FID, transform

Older **continuous-wave (CW)** instruments swept the frequency slowly, detecting one resonance at a time — hopeless for ¹³C. In **FT–NMR**, a short radiofrequency pulse excites all nuclei at once; each responds by precessing and inducing a decaying oscillating voltage called the **free induction decay (FID)**, a time-domain signal containing every resonance frequency. A **Fourier transform** converts the FID into the familiar frequency-domain spectrum. One pulse = one complete spectrum in a fraction of a second, so thousands of FIDs can be averaged in minutes — the **multiplex (Felgett) advantage**.

### Relaxation and the recycle delay

After each pulse, nuclei must return to equilibrium before the next; the time constant is the **spin–lattice relaxation time T1**. If pulses arrive faster than nuclei can relax, signals **saturate** (weaken or vanish). Carbon T1 values range from milliseconds to many seconds, so the experimenter sets a **recycle delay** (typically a few seconds) between pulses — a compromise between speed and signal.



## ELI-10: Explain Like I'm 10

> Only about one carbon atom in a hundred can "sing" in an NMR machine, and its voice is thousands of times weaker than a hydrogen's. So scientists act like photographers in a dark room: take the same picture many times and stack the copies — the real picture gets brighter while random fuzz cancels out. One clever pulse takes the whole picture in a flash, so stacking thousands of copies is fast.

## High-Yield Points

- ¹²C (spin 0) is NMR-invisible; only ¹³C (spin ½, 1.1% abundance) gives signals.
- Relative receptivity of ¹³C ≈ (0.011)(0.2514)³ ≈ 1.7 × 10⁻⁴ → about **1/5700** that of ¹H (≈ 4 orders of magnitude weaker).
- Larmor equation \(\nu = \gamma B_0/2\pi\): ¹³C resonates at ~25% of the ¹H frequency (100 MHz vs 400 MHz at 9.4 T).
- Signal averaging: S/N grows as √N — quadrupling scans doubles S/N.
- FT–NMR: one pulse excites all nuclei; the FID is Fourier-transformed to a spectrum; many FIDs are averaged quickly (multiplex advantage).
- T1 relaxation limits pulse repetition; recycle delays prevent saturation.
- ¹³C–¹³C coupling is negligible (≈1.2 × 10⁻⁴ probability), so carbon signals are singlets before H-coupling.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| natural abundance | Fraction of an element's atoms that are a given isotope | ¹³C at 1.1% makes carbon NMR inherently insensitive |
| gyromagnetic ratio (γ) | Constant linking a nucleus's magnetic moment to its spin | Governs resonance frequency and signal strength (γ³) |
| receptivity | Overall NMR sensitivity of a nucleus (abundance × γ³) | Explains why ¹³C needs thousands of scans |
| signal averaging | Co-adding many scans to improve signal-to-noise | The practical cure for weak signals; S/N ∝ √N |
| FID | Free induction decay: the time-domain signal after a pulse | Contains all resonances; must be Fourier-transformed |
| Fourier transform | Mathematical conversion of time-domain data to a frequency spectrum | Turns the FID into the familiar NMR plot |
| FT–NMR | NMR using pulses plus Fourier transformation | Makes multi-scan averaging fast enough for ¹³C |
| spin–lattice relaxation (T1) | Time for nuclei to return to equilibrium after a pulse | Sets the minimum delay between scans; slow T1 causes saturation |
| recycle delay | Pause between pulses to allow relaxation | Prevents signal loss from saturation |

## Worked Examples

### Example 1: Calculating the ¹³C resonance frequency (dimensional analysis)

Find the resonance frequency of ¹³C in a 9.4 T magnet, given γ(¹³C) = 6.728 × 10⁷ rad·s⁻¹·T⁻¹.

Write the Larmor equation first:

\[
\nu = \frac{\gamma B_0}{2\pi}
\]

Substitute the values:

\[
\nu({}^{13}\mathrm{C}) = \frac{(6.728 \times 10^7\ \mathrm{rad\,s^{-1}\,T^{-1}})(9.4\ \mathrm{T})}{2\pi}
= 1.006 \times 10^8\ \mathrm{s^{-1}} \approx 100.6\ \mathrm{MHz}
\]

Unit check: radians are dimensionless, so rad·s⁻¹·T⁻¹ × T leaves s⁻¹ (hertz) — the answer is a frequency. The same calculation for ¹H (γ = 2.675 × 10⁸ rad·s⁻¹·T⁻¹) gives 400 MHz, confirming the "one quarter" rule: 100.6/400 = 0.2514.

### Example 2: How many scans do you need?

A single scan of a dilute sample gives S/N = 5, and the experimenter wants S/N = 50.

Start from the averaging law:

\[
\frac{S}{N} = \left(\frac{S}{N}\right)_1 \sqrt{N}
\]

Rearrange to solve for N before substituting:

\[
N = \left(\frac{S/N}{(S/N)_1}\right)^2 = \left(\frac{50}{5}\right)^2 = 100
\]

So **100 scans** are needed. To double the S/N again (to 100) would require 400 scans — four times as long; signal averaging is a time budget, not a free lunch.

### Example 3: Why one pulse measures everything at once

A CW instrument spends minutes sweeping the ~100 MHz ¹³C range; an FT instrument excites the whole range with a ~10-microsecond pulse and records the FID in about a second. If 2000 scans are needed and each takes 2 s, the FT experiment needs about 4000 s (~1 hour); the CW approach would take weeks. The multiplex advantage makes routine ¹³C NMR possible.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "¹³C NMR is just ¹H NMR for carbons" | Same sensitivity and rules | ¹³C is ~5700× less sensitive, resonates at ~25% of the frequency, and is not routinely integrated |
| Signal averaging | Averaging different samples | Scans repeat on the *same* sample; signals reinforce, noise averages away |
| The Fourier transform | Creating new data | It only *reformats* the FID from time to frequency domain — no information is added |
| Sensitivity loss from abundance | Sensitivity loss from γ alone | Both matter: 1.1% abundance and γ³ ≈ 0.016 combine to give ~1/5700 |
| T1 relaxation | T2 relaxation | T1 (spin–lattice) governs how fast you can repeat pulses; T2 (spin–spin) broadens lines |
| ¹³C frequency | ¹H frequency | At any field ¹³C resonates at about 25% of the ¹H frequency (e.g., 100 vs 400 MHz at 9.4 T) |

## Quick Review

1. Why is ¹²C invisible in NMR, and what fraction of carbon atoms are ¹³C?
2. Compute the relative receptivity of ¹³C versus ¹H and express it as "1 in N."
3. If 16 scans give S/N = 8, what S/N will 64 scans give?
4. What is the FID, and what does the Fourier transform do to it?
5. Why is ¹³C–¹³C coupling never observed in ordinary spectra?
<details>
<summary>Show answers</summary>

1. ¹²C has nuclear spin I = 0, so it has no magnetic moment to interact with the field. ¹³C (spin ½) is 1.1% of natural carbon.
2. (0.011) × (0.2514)³ = 1.75 × 10⁻⁴, i.e., about 1/5700 — roughly four orders of magnitude less sensitive than ¹H.
3. S/N ∝ √N: √64/√16 = 8/4 = 2, so S/N = 8 × 2 = 16. (Quadrupling scans doubles S/N.)
4. The FID is the decaying oscillating voltage induced by precessing nuclei after a pulse — a time-domain signal containing all resonance frequencies; the Fourier transform converts it to the frequency-domain spectrum.
5. Observing C–C coupling requires two adjacent ¹³C nuclei; the probability is (0.011)² ≈ 1.2 × 10⁻⁴, so essentially no molecules contain such a pair.
</details>

## Related Topics

- Previous: [Uses of 1H NMR Spectroscopy](09-uses-of-1h-nmr-spectroscopy.md)
- Next: [Characteristics of 13C NMR Spectroscopy](11-characteristics-of-13c-nmr-spectroscopy.md)
- Related: [The Nature of NMR Absorptions](02-the-nature-of-nmr-absorptions.md)
- Related: [Nuclear Magnetic Resonance Spectroscopy](01-nuclear-magnetic-resonance-spectroscopy.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants verified against current reference sources (2026-08): ¹³C natural abundance 1.1%; γ(¹³C) = 6.728 × 10⁷ rad·s⁻¹·T⁻¹; γ(¹H) = 2.675 × 10⁸ rad·s⁻¹·T⁻¹; ¹³C receptivity ≈ 10⁻⁴ that of ¹H.
- Last updated: 2026-08-16
