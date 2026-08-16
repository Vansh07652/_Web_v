---
title: "Infrared Spectroscopy"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "infrared-spectroscopy"
  - "science"
status: "complete"
---

# Infrared Spectroscopy

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Infrared (IR) spectroscopy probes the **vibrations** of covalent bonds. A bond behaves like a tiny spring with a weight at each end: it can stretch (the bond length changes rhythmically) and it can bend (the bond angle changes). Each motion has a natural vibrational frequency set by the atomic masses and the bond strength. When infrared light of exactly that frequency shines on the molecule, the bond absorbs the photon and vibrates more vigorously — an event recorded as an absorption band.

The mid-infrared region, 4000 to 400 cm⁻¹, covers essentially all organic bond vibrations. Because every functional group contains characteristic bonds vibrating at characteristic frequencies, an IR spectrum is a quick readout of which groups a molecule contains: carbonyl (C=O), alcohol (O–H), nitrile (C≡N), alkene (C=C), and so on. IR does not give a complete structure by itself, but it is the fastest way to confirm the presence or absence of a functional group.

## Why This Matters

IR spectroscopy is the workhorse functional-group test in organic laboratories: confirming a reaction worked (did the starting C=O disappear?), checking product identity and purity, and identifying unknowns from plastics, inks, and pharmaceutical tablets. The same physics operates in the atmosphere: CO₂, water, and methane absorb infrared radiation, the molecular basis of the greenhouse effect. On exams, IR questions present a spectrum and ask which functional groups are present. IR radiation is non-ionizing, so routine sample handling needs no special shielding, unlike UV sources.

## Core Concepts

### Stretches and bends: two families of vibration

Bond vibrations fall into two families. **Stretches** change the bond length along the bond axis; a group with two identical bonds (like \(-\text{CH}_2-\)) can stretch symmetrically (both C–H bonds lengthen together) or antisymmetrically (one lengthens as the other shortens). **Bends** change bond angles — scissoring, rocking, wagging, twisting. Bending is easier to excite than stretching, so bends appear at lower wavenumbers: C–H stretches sit near 2850–3000 cm⁻¹, C–H bends near 1450 and 1375 cm⁻¹.

### Hooke's law: what sets a vibration's frequency

The vibrational frequency of a bond is approximated by the harmonic-oscillator (Hooke's law) expression:

\[
\tilde{\nu} = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}}
\]

where \(k\) is the **force constant** (bond stiffness, larger for multiple bonds), \(c\) is the speed of light, and \(\mu\) is the **reduced mass**:

\[
\mu = \frac{m_1 m_2}{m_1 + m_2}
\]

with \(m_1\) and \(m_2\) the atomic masses. Two practical rules fall out: **stronger bonds vibrate at higher wavenumber** (C≡C ≈ 2150 cm⁻¹ > C=C ≈ 1650 cm⁻¹ > C–C ≈ 1200 cm⁻¹), and **lighter atoms vibrate at higher wavenumber** (C–H ≈ 3000 cm⁻¹ versus C–C ≈ 1200 cm⁻¹). These trends let you predict where a band should appear — far more useful than memorizing numbers.

### The instrument: FT-IR

A modern IR spectrometer is a Fourier-transform instrument (FT-IR). A broadband source emits all IR frequencies at once; the beam passes through an interferometer (typically a Michelson design with a moving mirror), then through the sample, then to a detector. The detector records an **interferogram** — intensity versus mirror position — and a Fourier transform converts it into the familiar spectrum. Collecting all frequencies simultaneously gives speed and signal-to-noise: an FT-IR records a good spectrum of a tiny sample in seconds.

### Reading the raw spectrum

IR spectra plot wavenumber on the x-axis, running from about 4000 cm⁻¹ on the left to 400 cm⁻¹ on the right (energy decreases left to right), and percent transmittance (%T) on the y-axis, with 100% at the top. Absorption appears as **downward dips** whose depth reflects how strongly the vibration changes the bond's dipole moment.

### What makes a vibration IR-active

A vibration absorbs infrared light only if it changes the molecule's dipole moment. Vibrations of polar bonds (C=O, O–H, N–H) are strong absorbers; nonpolar vibrations may be weak or invisible. The C≡C stretch of a symmetrically substituted alkyne (e.g., 3-hexyne) is a classic near-silent vibration, because the dipole moment stays zero during the stretch — a structural feature that can hide from IR. Complementary techniques (Raman spectroscopy) probe such vibrations.

## ELI-10: Explain Like I'm 10

> A molecule is like a set of springs with weights on the ends — stiffer springs and lighter weights wiggle faster. Infrared light is a box of wiggles: shine the exact speed a spring likes and it wiggles harder, swallowing that light. The list of swallowed speeds tells you what kinds of springs (bonds) are in the molecule.

## High-Yield Points

- Two families of vibration: stretches (higher wavenumber) and bends (lower wavenumber).
- Hooke's law rules: stronger bond → higher \(\tilde{\nu}\); lighter atoms → higher \(\tilde{\nu}\).
- Signature anchors: C–H ≈ 2850–3100 cm⁻¹; C=O ≈ 1715 cm⁻¹; C≡N ≈ 2250 cm⁻¹; O–H ≈ 3200–3600 cm⁻¹ (broad).
- FT-IR records all frequencies at once (interferogram + Fourier transform), giving fast, sensitive spectra.
- Axes: x = wavenumber (4000 → 400 cm⁻¹); y = % transmittance (100 top, 0 bottom); absorption = downward dips.
- A vibration is IR-active only if it changes the dipole moment; symmetric C≡C stretches in symmetric alkynes can be nearly invisible.
- IR photons deliver only ~20–40 kJ/mol — enough to vibrate bonds, not break them (non-ionizing).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Vibration | Rhythmic motion of atoms in a bond — stretching or bending | The molecular motion that IR light excites |
| Stretch | Vibration that changes bond length | Appears at higher wavenumbers than bends |
| Bend | Vibration that changes bond angle (scissor, rock, wag, twist) | Lower-energy motions at lower wavenumbers |
| Force constant (\(k\)) | A measure of bond stiffness | Bigger \(k\) (multiple bonds) → higher \(\tilde{\nu}\) |
| Reduced mass (\(\mu\)) | \(m_1m_2/(m_1+m_2)\) for the two bonded atoms | Lighter atoms → higher \(\tilde{\nu}\) |
| FT-IR | Fourier-transform infrared spectrometer | Collects all frequencies at once; fast and sensitive |
| Interferogram | Raw detector signal (intensity vs mirror position) | Fourier-transformed to produce the spectrum |
| Transmittance (%T) | Fraction of IR light passing through the sample | Absorption shows as dips below 100% T |
| IR-active | A vibration that changes the dipole moment and absorbs IR | Determines which bands actually appear |

## Worked Examples

### Example 1: Why C–H stretches at ~3000 cm⁻¹ but C–C stretches near 1200 cm⁻¹

Compute the reduced masses (atomic masses in amu):

\[
\mu_{\text{C–H}} = \frac{(12.0)(1.008)}{12.0 + 1.008} = 0.930\ \text{amu}, \qquad
\mu_{\text{C–C}} = \frac{(12.0)(12.0)}{12.0 + 12.0} = 6.00\ \text{amu}
\]

Assuming similar force constants, the Hooke's law frequency ratio is:

\[
\frac{\tilde{\nu}_{\text{C–H}}}{\tilde{\nu}_{\text{C–C}}} = \sqrt{\frac{\mu_{\text{C–C}}}{\mu_{\text{C–H}}}} = \sqrt{\frac{6.00}{0.930}} = 2.54
\]

So the C–H stretch sits about 2.5× higher than the C–C stretch — indeed C–H appears near 3000 cm⁻¹ and C–C near 1200 cm⁻¹. The same logic explains why triple bonds (higher \(k\)) outrank double bonds, which outrank single bonds.

### Example 2: The energy of an O–H stretching photon at 3600 cm⁻¹

First convert wavenumber to m⁻¹: \(3600\ \text{cm}^{-1} \times 100\ \text{cm/m} = 3.60 \times 10^5\ \text{m}^{-1}\). Then:

\[
E = hc\tilde{\nu} = (6.626 \times 10^{-34}\ \text{J·s})(2.998 \times 10^8\ \text{m/s})(3.60 \times 10^5\ \text{m}^{-1}) = 7.16 \times 10^{-20}\ \text{J}
\]

Per mole: \((7.16 \times 10^{-20}\ \text{J})(6.022 \times 10^{23}\ \text{mol}^{-1}) \approx 43\ \text{kJ/mol}\) — about ten times too weak to break a typical C–H bond (~413 kJ/mol). IR merely intensifies vibration, which is why IR spectroscopy is a gentle, non-destructive analysis method.

### Example 3: Converting percent transmittance to absorbance

A carbonyl band reads 25% T. Absorbance is:

\[
A = 2 - \log_{10}(\%T)
\]

Substitute: \(A = 2 - \log_{10}(25) = 2 - 1.40 = 0.60\). Absorbance scales linearly with concentration via the Beer–Lambert law, \(A = \varepsilon b c\), where \(\varepsilon\) is molar absorptivity (L·mol⁻¹·cm⁻¹), \(b\) the path length (cm), and \(c\) the concentration (mol/L). Dimensional analysis: \(\text{L·mol}^{-1}\text{·cm}^{-1} \times \text{cm} \times \text{mol/L} = 1\), so \(A\) is unitless. This conversion moves IR from qualitative to quantitative analysis.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Stretching vibration | Bending vibration | Stretches change bond length and absorb at higher wavenumber; bends change angle at lower wavenumber |
| Symmetric stretch | Antisymmetric stretch | In \(-\text{CH}_2-\), symmetric = both C–H bonds lengthen together; antisymmetric = one lengthens as the other shortens |
| Direction of the wavenumber axis | Increasing energy left-to-right | Energy decreases left to right: 4000 cm⁻¹ (left) is high energy, 400 cm⁻¹ (right) is low |
| Absorption peaks | Emission peaks | In IR, absorption appears as downward dips in %T, not upward peaks |
| A vibration that exists | A vibration that absorbs IR | Only vibrations that change the dipole moment are IR-active; symmetric C≡C stretches can be silent |
| Weak IR bands | Unimportant bands | Weakness can be structural information (C≡C near 2150 cm⁻¹ is characteristically weak) |

## Quick Review

1. Rank these stretches by wavenumber, highest first: C–C, C=C, C≡C. Why?
2. Why does the C–H stretch appear near 3000 cm⁻¹ while the C–Cl stretch appears near 750 cm⁻¹?
3. A band has 50% transmittance. What is its absorbance?
4. What is the advantage of FT-IR over older dispersive instruments?
5. Why might the C≡C stretch of 3-hexyne be nearly invisible in its IR spectrum?

<details>
<summary>Show answers</summary>

1. C≡C (≈2150 cm⁻¹) > C=C (≈1650 cm⁻¹) > C–C (≈1200 cm⁻¹), because force constant increases with bond order and \(\tilde{\nu} \propto \sqrt{k}\).
2. Hydrogen is far lighter than chlorine: \(\mu_{\text{C–H}} = 0.930\) amu vs \(\mu_{\text{C–Cl}} = (12.0)(35.5)/(12.0+35.5) = 8.96\) amu; lighter reduced mass → higher wavenumber.
3. \(A = 2 - \log_{10}(50) = 2 - 1.70 = 0.30\).
4. It records all frequencies simultaneously (interferogram + Fourier transform), so spectra are much faster with better signal-to-noise.
5. The C≡C stretch in a symmetric alkyne does not change the dipole moment, so it is only weakly IR-active (often invisible).
</details>

## Related Topics

- Previous: [Spectroscopy and the Electromagnetic Spectrum](05-spectroscopy-and-the-electromagnetic-spectrum.md)
- Next: [Interpreting Infrared Spectra](07-interpreting-infrared-spectra.md)
- Related: [Structure Determination: Mass Spectrometry and Infrared Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: CODATA standard values (\(c\), \(h\), \(N_A\)); last updated 2026-08-16
