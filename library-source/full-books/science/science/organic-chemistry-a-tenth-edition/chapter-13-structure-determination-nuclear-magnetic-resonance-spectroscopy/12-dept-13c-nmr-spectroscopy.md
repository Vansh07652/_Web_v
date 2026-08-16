---
title: "DEPT 13C NMR Spectroscopy"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "12"
source: "organic-chemistry.md"
tags:
  - "dept-13c-nmr-spectroscopy"
  - "science"
status: "complete"
---

# DEPT 13C NMR Spectroscopy

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 12  
> **Source structure:** OpenStax public textbook outline

## Overview

An ordinary broadband-decoupled ¹³C NMR spectrum is a row of singlets — one line per chemically distinct carbon — but it hides the most useful piece of information a spectroscopist wants: **how many hydrogens are attached to each carbon**. DEPT (**D**istortionless **E**nhancement by **P**olarization **T**ransfer) solves that problem by using the strong signal of hydrogen to boost the weak signal of carbon while sorting carbons into groups: CH₃, CH₂, CH, and quaternary (no attached H). Three versions of the experiment — DEPT-45, DEPT-90, and DEPT-135 — differ only in the flip angle of a final proton pulse, and each reveals a different subset of carbon types. Reading them together (or just DEPT-135 plus the ordinary spectrum) tells you the carbon skeleton of an unknown almost at a glance.

## Why This Matters

- **It converts ¹³C data into structural assignments.** Knowing whether a signal is CH₃, CH₂, CH, or quaternary often decides between two candidate structures with identical carbon counts.
- **It sees what ¹H NMR cannot.** Quaternary carbons give no proton signal; only ¹³C methods reveal them.
- **It is fast.** A routine DEPT-135 spectrum takes minutes and directly reports carbon types, whereas 2D experiments need more time and interpretation.
- **It is an exam staple.** DEPT questions test whether you can translate "up" and "down" peaks into a molecular formula.

## Core Concepts

### The problem: ¹³C spectra do not report proton counts

Routine ¹³C spectra are acquired with **broadband decoupling**: protons are irradiated while the carbon signal is collected, so every carbon appears as a clean singlet. That simplification is great for counting signals but destroys the multiplet pattern that would reveal attached protons. DEPT restores this information by a different route.

### Polarization transfer: borrowing hydrogen's signal

Carbon-13 is only 1.1% abundant with a small magnetogyric ratio, so its signal is intrinsically weak. **Polarization transfer** starts magnetization on the abundant protons, lets it evolve under the one-bond C–H coupling \(^{1}J_{\text{C–H}}\) (≈125–160 Hz), then transfers it to carbon with carefully timed pulses. Because the magnetization originates on protons, the theoretical sensitivity gain is

\[
\frac{\gamma_{\text{H}}}{\gamma_{\text{C}}} = \frac{42.58\ \text{MHz/T}}{10.71\ \text{MHz/T}} \approx 4
\]

so DEPT delivers up to ~4× the signal of an ordinary ¹³C spectrum — hence "enhancement." "Distortionless" means the pulse sequence avoids phase and intensity distortion before decoupling.

### The three DEPT experiments

The final proton pulse is applied at a flip angle \(\theta\), and \(\theta\) decides which carbon types survive:

| Experiment | Pulse angle | What appears |
|---|---|---|
| DEPT-45 | 45° | All protonated carbons: CH₃, CH₂, CH |
| DEPT-90 | 90° | Only CH |
| DEPT-135 | 135° | CH and CH₃ up; CH₂ down |

**Quaternary carbons produce no signal in any DEPT experiment** — there is no hydrogen to transfer polarization from. That absence is itself information.

### Reading a DEPT-135 spectrum

1. Peaks pointing **up** are CH or CH₃.
2. Peaks pointing **down** are CH₂.
3. Peaks present in the ordinary ¹³C spectrum but **missing** from DEPT-135 are quaternary carbons.

To separate CH from CH₃ among the up-peaks, use DEPT-90: only CH survives there. If a molecule has no CH carbons (e.g., (CH₃)₃COH), the DEPT-90 spectrum is empty even though the ordinary spectrum shows two signals.

### Practical limitations

DEPT assumes reasonably uniform \(^{1}J_{\text{C–H}}\); carbons with unusual couplings (C–F, alkynes) can misbehave. Overlapping opposite-phase signals can partially cancel. And DEPT-135 tells you carbon *type*, not identity — chemical shift still assigns the functional group.

## ELI-10: Explain Like I'm 10

> Imagine a class photo where every name tag is blank. A normal ¹³C spectrum gives you the photo but no names. DEPT is three magic filters: one makes kids with exactly one book appear, another makes kids with two books point upside down, and the third makes kids with three books stand up straight. Kids with no books (quaternary carbons) vanish — which is also a clue, because you know they were in the original photo.

## High-Yield Points

- DEPT-135: CH and CH₃ up; CH₂ down; quaternary carbons absent.
- DEPT-90: only CH appears — use it to pull CH out of DEPT-135 up-peaks.
- DEPT-45: all protonated carbons appear in phase.
- Quaternary carbons never appear in DEPT; compare with the ordinary ¹³C spectrum to find them.
- Polarization transfer gives up to \(\gamma_{\text{H}}/\gamma_{\text{C}} \approx 4\) sensitivity gain.
- DEPT works through the one-bond coupling \(^{1}J_{\text{C–H}}\) (≈125–160 Hz).
- ¹³C peak heights are not integrations; use DEPT for type, not quantity.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| DEPT | An NMR experiment that sorts carbons by number of attached hydrogens | Converts a ¹³C signal list into CH₃/CH₂/CH/quaternary assignments |
| polarization transfer | Moving magnetization from abundant ¹H to dilute ¹³C via their mutual coupling | Provides up to ~4× sensitivity gain |
| \(^{1}J_{\text{C–H}}\) | The one-bond C–H coupling constant, ≈125–160 Hz | The coupling DEPT exploits for transfer |
| quaternary carbon | A carbon with no attached hydrogens | Invisible in DEPT; found by comparison with the ordinary spectrum |
| DEPT-135 / DEPT-90 | Experiments with 135° (CH/CH₃ up, CH₂ down) and 90° (only CH) final pulses | The standard carbon-type editors |
| broadband decoupling | Irradiating protons during ¹³C acquisition so all carbons are singlets | Gives one line per distinct carbon |

## How It Works / Step-by-Step Process

1. Obtain the ordinary decoupled ¹³C spectrum and count the signals (total distinct carbons, including quaternary).
2. Obtain DEPT-135: mark up-peaks (CH or CH₃) and down-peaks (CH₂).
3. Compare with the ordinary spectrum: signals that vanish are quaternary carbons.
4. Obtain DEPT-90: surviving peaks are CH; up-peaks of DEPT-135 that vanish here are CH₃.
5. Assign each signal a functional group by chemical shift, then assemble the skeleton.

## Worked Examples

### Example 1: ¹³C resonance frequency on a 500 MHz instrument

**Formula first.** The Larmor frequency is the product of the magnetogyric ratio (in frequency units) and the field:

\[
\nu = \left(\frac{\gamma}{2\pi}\right) B_0
\]

where \(\gamma/(2\pi)\) for ¹³C is 10.71 MHz/T. A "500 MHz" spectrometer is named for its proton frequency, so find the field first:

\[
B_0 = \frac{500\ \text{MHz}}{42.58\ \text{MHz/T}} = 11.74\ \text{T}
\]

**Substitution, with unit check** (MHz/T × T → MHz):

\[
\nu_{\text{C}} = 10.71\ \frac{\text{MHz}}{\text{T}} \times 11.74\ \text{T} \approx 125.7\ \text{MHz}
\]

So ¹³C resonates near 125 MHz when ¹H is at 500 MHz — and \(\nu_{\text{H}}/\nu_{\text{C}} \approx 4\) is exactly the sensitivity gain DEPT exploits.

### Example 2: Assigning butan-2-ol by DEPT

Butan-2-ol, CH₃CH(OH)CH₂CH₃, has four distinct carbons: ≈69 ppm (CH–O), ≈32 ppm (CH₂), ≈23 ppm (CH₃ next to CH₂), ≈10 ppm (terminal CH₃).

**DEPT-135 prediction.** The CH–O carbon (one H) points **up**; the CH₂ points **down**; both CH₃ groups point **up**. Result: three up-peaks, one down-peak.

**DEPT-90 check.** Only the CH–O carbon survives at ≈69 ppm — exactly one CH, diagnostic of a secondary alcohol.

**Cross-check with 2-methyl-2-propanol, (CH₃)₃COH:** two signals (three equivalent CH₃ and one quaternary C–O). DEPT-135 shows only the up CH₃ peak; the quaternary carbon at ≈69 ppm is present in the ordinary spectrum but absent in DEPT, and DEPT-90 is empty (no CH). The same "one experiment, two alcohols" comparison is a classic exam trap: both alcohols have a carbon near 69 ppm, but only DEPT reveals what is attached to it.

### Example 3: Distinguishing C₅H₁₂O isomers with DEPT

Two isomeric alcohols share the formula C₅H₁₂O but differ in skeleton:

- **3-methyl-2-butanol**, CH₃–CH(OH)–CH(CH₃)₂: four distinct carbons — a CH–O, a central CH, and two methyl environments; **no CH₂ at all**.
- **2-pentanol**, CH₃–CH(OH)–CH₂–CH₂–CH₃: five distinct carbons — a CH–O, two CH₂ groups, two CH₃ groups.

**Prediction.** Apply the phase rules (CH/CH₃ up, CH₂ down):

| Isomer | DEPT-135 prediction |
|---|---|
| 3-methyl-2-butanol | All four peaks up; **no down-peaks** |
| 2-pentanol | Three up (CH–O, two CH₃) and **two down-peaks** (the CH₂ groups) |

**Decision.** The observed spectrum shows two down-peaks, eliminating 3-methyl-2-butanol — a molecule without CH₂ cannot produce a down-peak. DEPT-90 confirms: 2-pentanol shows one up-peak (its single CH–O); 3-methyl-2-butanol would show two. The lesson: DEPT excels at *eliminating* candidates, but pair it with the ordinary spectrum and shifts — never treat peak heights as integrations.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "DEPT-135 up-peaks are all CH" | CH and CH₃ both point up | Use DEPT-90 to isolate CH; CH₃ vanishes there |
| "DEPT-135 down-peaks are quaternary" | Down-peaks are CH₂; quaternary carbons disappear entirely | Find quaternary carbons by comparing DEPT with the ordinary spectrum |
| "DEPT-90 shows all carbons" | DEPT-90 shows only CH | CH₂, CH₃, and quaternary are all absent |
| "DEPT peak heights are integrations" | Heights depend on coupling and relaxation, not carbon count | ¹³C integration is unreliable (NOE); DEPT gives type, not quantity |
| "DEPT-45 and DEPT-135 are interchangeable" | DEPT-45 shows all protonated carbons in phase; DEPT-135 flips CH₂ negative | Only the 135° experiment separates CH₂ by phase |

## Quick Review

1. Which DEPT experiment shows only CH carbons, and at what pulse angle?
2. In DEPT-135, do CH₃ groups point up or down? What about CH₂?
3. How do you find quaternary carbons, since they never appear in DEPT?
4. Why does polarization transfer enhance the ¹³C signal, and what is the theoretical maximum factor?
5. A molecule's DEPT-135 shows three up-peaks and one down-peak; DEPT-90 shows one up-peak. How many CH, CH₂, and CH₃ carbons does it have?

<details>
<summary>Show answers</summary>

1. DEPT-90, with a 90° final proton pulse, shows only CH carbons.
2. CH₃ groups point up (same phase as CH); CH₂ groups point down.
3. Quaternary carbons appear in the ordinary decoupled ¹³C spectrum but are absent from DEPT; compare the two.
4. Magnetization starts on abundant protons and transfers to ¹³C through \(^{1}J_{\text{C–H}}\). The theoretical maximum is \(\gamma_{\text{H}}/\gamma_{\text{C}} = 42.58/10.71 \approx 4\).
5. One CH (the DEPT-90 peak), one CH₂ (the down-peak), and two CH₃ groups (the two remaining up-peaks).

</details>

## Related Topics

- Previous: [Characteristics of 13C NMR Spectroscopy](11-characteristics-of-13c-nmr-spectroscopy.md)
- Next: [Uses of 13C NMR Spectroscopy](13-uses-of-13c-nmr-spectroscopy.md)
- Related: [13C NMR Spectroscopy: Signal Averaging and FT–NMR](10-13c-nmr-spectroscopy-signal-averaging-and-ft-nmr.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- DEPT phase conventions (45°/90°/135° behavior; quaternary carbons absent) verified against Wikipedia "Carbon-13 nuclear magnetic resonance" (DEPT section). Magnetogyric ratios (¹H 42.58 MHz/T, ¹³C 10.71 MHz/T) are standard reference values.
- Last updated: 2026-08-16
