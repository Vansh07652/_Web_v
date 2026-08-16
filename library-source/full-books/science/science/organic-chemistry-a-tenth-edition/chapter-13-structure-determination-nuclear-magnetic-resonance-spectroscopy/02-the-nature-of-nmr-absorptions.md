---
title: "The Nature of NMR Absorptions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "the-nature-of-nmr-absorptions"
  - "science"
status: "complete"
---

# The Nature of NMR Absorptions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Nuclear magnetic resonance (NMR) spectroscopy works because certain atomic nuclei behave like tiny bar magnets. A nucleus has a property called **spin**, described by a spin quantum number \(I\). Only nuclei with nonzero spin are NMR-active — and of those, the ones with \(I = \frac{1}{2}\), such as \(^1\mathrm{H}\) and \(^{13}\mathrm{C}\), give the cleanest signals. When an NMR-active nucleus sits in a strong external field \(B_0\), its two possible spin orientations have different energies, separated by \(\Delta E = \gamma \hbar B_0\), where \(\gamma\) is the **gyromagnetic ratio**, a constant of the nucleus itself. Irradiating the sample with radio-frequency (RF) energy whose frequency exactly matches this gap flips spins from the lower (aligned) state to the higher (opposed) state — that absorption of energy is the NMR signal.

Two facts dominate the rest of this chapter. First, the energy gap is tiny, so only about one nucleus in tens of thousands sits in the lower state — NMR is inherently insensitive, which is why samples are concentrated and scans are averaged. Second, the field a nucleus "feels" is modified by its own electrons, so identical nuclei in different environments absorb at slightly different frequencies — the origin of **chemical shifts** and the reason NMR is the most informative experiment for determining organic structure.

## Why This Matters

- NMR is the single most powerful tool for determining the structure of an unknown organic compound — how many kinds of protons and carbons it contains and how they connect.
- The same physics underlies **magnetic resonance imaging (MRI)**: hydrogen nuclei in water and fat absorb and re-emit RF energy with relaxation times that differ between tissues.
- Pharmaceutical and food-industry QC uses NMR to verify that a synthesized product matches its intended structure and purity.
- For exams, spin states, absorption frequency, and relaxation explain why 1H NMR shows certain signals and why 13C NMR needs signal averaging (a later topic).

## Core Concepts

### Which nuclei are NMR-active

Whether a nucleus has spin depends on its mass number and atomic number:

- **Odd mass number → half-integer spin.** \(^1\mathrm{H}\), \(^{13}\mathrm{C}\), \(^{19}\mathrm{F}\), \(^{31}\mathrm{P}\), and \(^{15}\mathrm{N}\) all have \(I = \frac{1}{2}\) and are strongly NMR-active.
- **Even mass number and even atomic number → \(I = 0\).** \(^{12}\mathrm{C}\), \(^{16}\mathrm{O}\), and \(^{32}\mathrm{S}\) have no spin and give no NMR signal. Conveniently, carbon NMR therefore "sees" only the 1.1% of carbon atoms that are \(^{13}\mathrm{C}\).
- **Even mass number and odd atomic number → integer spin.** \(^2\mathrm{H}\) (deuterium) and \(^{14}\mathrm{N}\) have \(I = 1\); they are NMR-active but give more complex signals.

For an \(I = \frac{1}{2}\) nucleus there are exactly two spin states, \(\alpha\) (aligned with \(B_0\)) and \(\beta\) (opposed to \(B_0\)).

### The energy gap and the resonance condition

In zero field the \(\alpha\) and \(\beta\) states are degenerate. In a field \(B_0\), the gap between them is

\[ \Delta E = \gamma \hbar B_0 \]

and since \(\Delta E = h\nu\), the frequency at which absorption occurs is

\[ \nu = \frac{\gamma B_0}{2\pi} \]

This is the **resonance condition**: a nucleus absorbs RF energy only when the applied frequency matches its **Larmor frequency**. The \(\gamma\) value sets how "strong" a nucleus appears: \(^1\mathrm{H}\) has \(\gamma = 2.675 \times 10^8\ \mathrm{rad\,s^{-1}\,T^{-1}}\) (42.58 MHz per tesla), so a 7.05 T magnet gives a 300 MHz proton spectrometer; \(^{13}\mathrm{C}\) has about one quarter of that \(\gamma\), resonating near 75 MHz in the same magnet.

### Why the signal is weak: Boltzmann populations

The \(\alpha\) and \(\beta\) states are populated according to the Boltzmann distribution:

\[ \frac{N_\alpha}{N_\beta} = e^{\Delta E / kT} \]

where \(k\) is the Boltzmann constant and \(T\) the absolute temperature. Because \(\Delta E\) is minuscule compared with \(kT\) at room temperature, the \(\alpha\) excess is tiny — about 1 part in 40,000 for protons at 300 MHz (Worked Example 2). Signal intensity is proportional to this population difference, which is why NMR is far less sensitive than infrared or mass spectrometry. Higher-field instruments (600, 900 MHz) increase \(\Delta E\) and the signal — why modern NMR magnets are superconducting.

### Relaxation: the pathway back to equilibrium

After absorbing, a spin sits in the \(\beta\) state. If nothing returned spins to \(\alpha\), the population difference would vanish and absorption would stop — **saturation**. Two relaxation processes restore equilibrium:

- **Spin–lattice (longitudinal) relaxation**, time \(T_1\): excess spin energy is released to the surroundings as heat. Short \(T_1\) gives sharp lines and allows rapid re-acquisition of scans.
- **Spin–spin (transverse) relaxation**, time \(T_2\): energy is exchanged among neighboring spins without net loss. Very short \(T_2\) broadens lines.

Relaxation also matters in MRI, where \(T_1\)- and \(T_2\)-weighted images distinguish tissues. Without relaxation, spectra could never be recorded — the sample would stay saturated.

## ELI-10: Explain Like I'm 10

> Every atom's core (nucleus) is a tiny spinning magnet, but only some cores are magnetic enough to notice. If you put those magnetic cores in a huge magnet and "ping" them with just the right radio wave, they flip over and absorb the ping — that's the NMR signal. Because only about 1 in 40,000 cores is in the right state to flip, the signal is weak, and each core needs a moment to settle back down before it can be pinged again.

## High-Yield Points

- NMR-active nuclei have nonzero spin: odd-mass nuclei like \(^1\mathrm{H}\) and \(^{13}\mathrm{C}\) have \(I = \frac{1}{2}\); \(^{12}\mathrm{C}\) and \(^{16}\mathrm{O}\) are invisible.
- Energy gap: \(\Delta E = \gamma \hbar B_0\); resonance frequency: \(\nu = \frac{\gamma B_0}{2\pi}\).
- \(^1\mathrm{H}\) resonates at 42.58 MHz per tesla; \(^{13}\mathrm{C}\) at about one quarter of that.
- Absorption occurs only at the resonance condition — RF frequency must match the Larmor frequency.
- Boltzmann population excess is ~\(10^{-5}\) at room temperature — the reason NMR is insensitive and needs many scans.
- Relaxation (\(T_1\) spin–lattice, \(T_2\) spin–spin) prevents saturation; slow relaxation broadens lines.
- The environment-dependent frequency variation of identical nuclei is the basis of chemical shifts.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Spin quantum number (\(I\)) | Intrinsic "amount of spin" of a nucleus; must be nonzero for NMR | Tells you which nuclei (1H, 13C) give signals and which (12C, 16O) are invisible |
| Gyromagnetic ratio (\(\gamma\)) | Nuclear constant relating magnetic moment to spin; sets the resonance frequency | Explains why 1H and 13C resonate at different frequencies in the same magnet |
| Resonance condition | The match between applied RF frequency and the nucleus's Larmor frequency | Absorption (signal) happens only at this match |
| Larmor frequency | Precession frequency of a spin in a field, \(\nu = \gamma B_0/2\pi\) | The frequency at which a nucleus absorbs; scales linearly with field |
| Boltzmann distribution | Population ratio of spin states at equilibrium, \(e^{\Delta E/kT}\) | Its tiny lower-state excess sets NMR's intrinsic low sensitivity |
| Spin–lattice relaxation (\(T_1\)) | Return of excited spins to equilibrium by releasing energy to surroundings | Prevents saturation; controls how fast scans can be repeated |
| Spin–spin relaxation (\(T_2\)) | Exchange of spin energy among neighboring nuclei | Short \(T_2\) broadens lines; basis of \(T_2\)-weighted MRI contrast |
| Saturation | Equalized \(\alpha\)/\(\beta\) populations, so no net absorption | Why relaxation is required for any NMR experiment |

## Worked Examples

### Example 1: Calculating the resonance frequency of 1H in a 7.05 T magnet

A "300 MHz NMR spectrometer" uses a 7.05 T magnet. Verify this with the proton resonance frequency. Given: \(\gamma(^1\mathrm{H}) = 2.675 \times 10^8\ \mathrm{rad\,s^{-1}\,T^{-1}}\), \(\pi = 3.1416\).

**Step 1 — Write the formula first:**

\[ \nu = \frac{\gamma B_0}{2\pi} \]

**Step 2 — Substitute values with units:**

\[ \nu = \frac{(2.675 \times 10^8\ \mathrm{rad\,s^{-1}\,T^{-1}})(7.05\ \mathrm{T})}{2(3.1416)} \]

**Step 3 — Cancel units and evaluate.** The radian is dimensionless and \(\mathrm{T^{-1} \cdot T} = 1\), leaving \(\mathrm{s^{-1}}\) = Hz:

\[ \nu = \frac{1.886 \times 10^9\ \mathrm{s^{-1}}}{6.2832} = 3.00 \times 10^8\ \mathrm{s^{-1}} = 300\ \mathrm{MHz} \]

**Sanity check:** 42.58 MHz/T × 7.05 T = 300 MHz. "300 MHz NMR" refers to the proton frequency; higher-field magnets (14.1 T → 600 MHz) give proportionally larger gaps and stronger signals.

### Example 2: Energy gap and population excess for 1H at 300 MHz

For protons at 300 MHz and 298 K, find (a) the energy gap \(\Delta E\) and (b) the fractional excess of \(\alpha\) over \(\beta\) spins. Given: \(h = 6.626 \times 10^{-34}\ \mathrm{J\,s}\), \(k = 1.381 \times 10^{-23}\ \mathrm{J\,K^{-1}}\).

**Part (a) — Frequency form of the energy equation:**

\[ \Delta E = h\nu \]

\[ \Delta E = (6.626 \times 10^{-34}\ \mathrm{J\,s})(3.00 \times 10^8\ \mathrm{s^{-1}}) = 1.99 \times 10^{-25}\ \mathrm{J} \]

**Part (b) — Thermal energy first:**

\[ kT = (1.381 \times 10^{-23}\ \mathrm{J\,K^{-1}})(298\ \mathrm{K}) = 4.12 \times 10^{-21}\ \mathrm{J} \]

**Then the gap-to-thermal ratio:**

\[ \frac{\Delta E}{kT} = \frac{1.99 \times 10^{-25}\ \mathrm{J}}{4.12 \times 10^{-21}\ \mathrm{J}} = 4.83 \times 10^{-5} \]

Because this ratio is \(\ll 1\), the population ratio is approximately \(1 + \frac{\Delta E}{kT} = 1.000048\), and the fractional excess of lower-state spins is about half that:

\[ \frac{N_\alpha - N_\beta}{N_\alpha + N_\beta} \approx \frac{\Delta E}{2kT} \approx 2.4 \times 10^{-5} \]

Roughly 2.4 extra \(\alpha\)-spins per 100,000 — about 1 in 40,000. This tiny excess is why NMR needs concentrated samples and signal averaging, and why raising the field (bigger \(\Delta E\)) is the main route to better sensitivity.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| NMR-active nuclei | All nuclei | Only nonzero-spin nuclei absorb; 12C, 16O, 32S are NMR-silent |
| Spin \(I = \frac{1}{2}\) nuclei | Spin \(I = 1\) nuclei | 1H/13C/19F/31P give simple two-state spectra; 2H/14N give more complex patterns |
| The resonance frequency | The chemical shift | Frequency is \(\nu = \gamma B_0/2\pi\) for the whole experiment; chemical shift is the small environment-dependent variation (next topic) |
| Weak NMR signal = bad instrument | Weak signal = intrinsic low population excess | Even a perfect instrument sees only ~1 extra spin per 40,000 because \(\Delta E \ll kT\) |
| \(T_1\) spin–lattice | \(T_2\) spin–spin | \(T_1\) releases energy to surroundings (scan repetition); \(T_2\) exchanges energy among spins (linewidth) |

## Quick Review

1. Which of the following are NMR-active: \(^{12}\mathrm{C}\), \(^{13}\mathrm{C}\), \(^1\mathrm{H}\), \(^{16}\mathrm{O}\), \(^{31}\mathrm{P}\), \(^2\mathrm{H}\)?
2. Write the resonance-frequency formula in terms of \(\gamma\) and \(B_0\). What happens if the field is doubled?
3. Calculate the \(^{13}\mathrm{C}\) resonance frequency in a 7.05 T magnet, given \(\gamma(^{13}\mathrm{C}) = 6.728 \times 10^7\ \mathrm{rad\,s^{-1}\,T^{-1}}\).
4. Why is the NMR signal so weak compared with IR or mass spectrometry signals?
5. What would happen if spin relaxation did not occur during an NMR experiment?
6. A proton absorbs at 300 MHz in a 7.05 T magnet. At what frequency would it absorb in a 14.1 T magnet?

<details>
<summary>Show answers</summary>

1. \(^{13}\mathrm{C}\), \(^1\mathrm{H}\), \(^{31}\mathrm{P}\), and \(^2\mathrm{H}\) are NMR-active. \(^{12}\mathrm{C}\) and \(^{16}\mathrm{O}\) have \(I = 0\).
2. \(\nu = \frac{\gamma B_0}{2\pi}\). Doubling the field doubles the frequency (300 → 600 MHz).
3. \(\nu = \frac{(6.728 \times 10^7)(7.05)}{2\pi} = \frac{4.743 \times 10^8}{6.2832} = 7.55 \times 10^7\ \mathrm{Hz} = 75.5\ \mathrm{MHz}\) — about one quarter of the proton frequency.
4. The population excess of lower-energy spins is only ~1 in 40,000 at room temperature; signal intensity is proportional to that tiny excess.
5. Without relaxation, populations would equalize (saturation) and net absorption — the signal — would stop.
6. 600 MHz, because \(\nu = \frac{\gamma B_0}{2\pi}\) scales linearly with field.

</details>

## Related Topics

- Previous: [Nuclear Magnetic Resonance Spectroscopy](01-nuclear-magnetic-resonance-spectroscopy.md)
- Next: [Chemical Shifts](03-chemical-shifts.md)
- Related: [Chemical Shifts](03-chemical-shifts.md) — the environment-dependent frequency variations introduced here
- Related: [13C NMR Spectroscopy: Signal Averaging and FT–NMR](10-13c-nmr-spectroscopy-signal-averaging-and-ft-nmr.md) — why 13C's low abundance and low \(\gamma\) demand signal averaging
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
