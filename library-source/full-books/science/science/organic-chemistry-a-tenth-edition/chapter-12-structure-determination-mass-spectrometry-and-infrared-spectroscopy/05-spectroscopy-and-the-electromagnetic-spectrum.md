---
title: "Spectroscopy and the Electromagnetic Spectrum"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "spectroscopy-and-the-electromagnetic-spectrum"
  - "science"
status: "complete"
---

# Spectroscopy and the Electromagnetic Spectrum

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Spectroscopy is the study of how matter interacts with electromagnetic radiation. Every spectroscopic method in organic chemistry — UV-visible, infrared (IR), and nuclear magnetic resonance (NMR) — rests on one idea: a molecule (or nucleus) absorbs a photon only when its energy exactly matches the gap between two allowed energy states. The set of energies absorbed, plotted as a **spectrum**, is a fingerprint of molecular structure.

Electromagnetic radiation travels as waves; the complete family of such waves is the **electromagnetic spectrum**, ordered from highest to lowest energy: gamma rays, X-rays, ultraviolet (UV), visible, infrared, microwaves, and radio waves. Organic chemists exploit three windows, each matched to a different energy jump:

- **UV-visible light** moves electrons between orbitals (\(\pi \to \pi^*\) absorptions of conjugated molecules).
- **Infrared light** excites bond vibrations — stretches and bends.
- **Radio waves** flip the spin orientations of nuclei such as \(^{1}\text{H}\) and \(^{13}\text{C}\) (NMR).

Because these photon energies differ by orders of magnitude, each technique reports on a different structural level; together they assemble a full structure from a few milligrams.

## Why This Matters

Spectroscopy is how modern chemists identify molecules: no single test reveals a whole structure the way a set of spectra does. This topic is the quantitative backbone of Chapters 12 and 13 — the same equations that convert a wavenumber to photon energy are used again for every IR band and NMR frequency. The physics also runs everyday instruments: IR spectrometers identify drugs and water contaminants, and photon-matching explains why greenhouse gases absorb Earth's outgoing infrared. Master \(E = hc/\lambda\) once, and every later spectroscopy chapter gets easier.

## Core Concepts

### Photons: radiation as packets of energy

Light behaves as a wave but delivers energy in discrete packets called **photons**, whose energy is proportional to frequency:

\[
E = h\nu
\]

where \(E\) is in joules, \(\nu\) the frequency in hertz, and \(h\) Planck's constant, \(6.626 \times 10^{-34}\ \text{J·s}\). The proportionality is the quantization: a photon carries only the energy fixed by its frequency.

### One equation links wavelength, frequency, and energy

All electromagnetic radiation travels at the speed of light, \(c = 2.998 \times 10^8\ \text{m/s}\), so wavelength \(\lambda\) (m) and frequency \(\nu\) (Hz) are connected by:

\[
c = \lambda\nu
\]

Combining with \(E = h\nu\) gives the two most-used forms:

\[
E = h\nu = \frac{hc}{\lambda}
\]

Because \(c\) is constant, wavelength and frequency are inversely related. Given any one of \(\lambda\), \(\nu\), or \(E\), you can find the other two — that is the entire arithmetic of this topic.

### The regions of the spectrum and what they excite

| Region | Approximate range | Molecular event excited |
|---|---|---|
| UV | 10–400 nm | Valence electron transitions |
| Visible | 400–700 nm | Electron transitions (color) |
| Infrared | 700 nm–1 mm (4000–400 cm⁻¹) | Bond vibrations |
| Radio | > 30 cm | Nuclear spin flips (NMR) |

For structure determination, remember three boxes: **UV-vis → electrons, IR → vibrations, radio/NMR → nuclear spins**. A radio photon carries ~10⁹× less energy than a UV photon — which is why NMR instruments need enormous magnets.

### Wavenumber: the chemist's unit for IR

Infrared spectroscopists rarely quote wavelength; they use **wavenumber** \(\tilde{\nu}\), the reciprocal of the wavelength in centimeters:

\[
\tilde{\nu} = \frac{1}{\lambda\ (\text{cm})}
\]

in units of cm⁻¹. Wavenumber is directly proportional to frequency and energy:

\[
E = hc\tilde{\nu}
\]

so 3000 cm⁻¹ is higher in energy than 1200 cm⁻¹; mid-IR spectra run 4000→400 cm⁻¹.

### Quantized energy means selective absorption

A molecule cannot absorb just any photon. Its energy levels (electronic, vibrational, rotational, nuclear spin) are discrete, and absorption occurs only when \(h\nu\) equals a level spacing. That is why spectra are sharp bands rather than a continuous smear: each band marks a specific transition.

## ELI-10: Explain Like I'm 10

> Imagine a molecule is a piano with only a few keys, and light is a box of hammers — each hammer hits one exact note. The molecule can only accept a hammer whose note matches one of its keys; the list of accepted notes is its "spectrum," and it reveals what the molecule is made of. Infrared makes bonds wiggle, UV makes electrons jump, and radio waves flip nuclear magnets.

## High-Yield Points

- Apply \(c = \lambda\nu\) and \(E = hc/\lambda\) without prompting; write the formula first, then substitute with units.
- Energy order along the spectrum: gamma > X-ray > UV > visible > IR > microwave > radio.
- Technique mapping: UV-vis → electrons; IR → vibrations; NMR → nuclear spins.
- Wavenumber in cm⁻¹ is proportional to energy: 4000 cm⁻¹ > 400 cm⁻¹.
- Wavelength and frequency run opposite: longer \(\lambda\) = lower \(\nu\) = lower \(E\).
- Absorption is quantized: a photon is absorbed only if its energy matches an allowed transition, so spectra have discrete peaks.
- Conversion shortcuts: cm⁻¹ to m⁻¹ = ×100; Hz to cm⁻¹ = ÷ \(c = 2.998 \times 10^{10}\ \text{cm/s}\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Spectroscopy | Study of how matter absorbs or emits electromagnetic radiation | Underlies every structure-determination method in this book |
| Electromagnetic radiation | Waves of electric and magnetic fields traveling at \(c\) | Carries the energy that samples absorb |
| Photon | A discrete packet of light energy, \(E = h\nu\) | Explains why absorption is selective |
| Frequency (\(\nu\)) | Wave cycles per second, in Hz | Directly proportional to photon energy |
| Wavelength (\(\lambda\)) | Distance between wave crests, in m | Inversely proportional to energy |
| Wavenumber (\(\tilde{\nu}\)) | \(1/\lambda\) in cm⁻¹ | The unit on IR spectra; proportional to energy |
| Planck's constant (\(h\)) | \(6.626 \times 10^{-34}\ \text{J·s}\) | Conversion factor in photon-energy calculations |
| Absorption | Molecule gains a photon's energy and jumps to a higher state | Produces the dips in spectra |
| Energy levels | Discrete allowed energies of a molecule or nucleus | Quantization makes spectra sharp bands, not smears |

## Worked Examples

### Example 1: From wavelength to frequency and energy (green light)

Green light has a wavelength of 500 nm. Find its frequency and photon energy.

**Step 1 — convert to meters:** \(500\ \text{nm} \times \dfrac{10^{-9}\ \text{m}}{1\ \text{nm}} = 5.00 \times 10^{-7}\ \text{m}\).

**Step 2 — frequency** from \(c = \lambda\nu\):

\[
\nu = \frac{c}{\lambda} = \frac{2.998 \times 10^8\ \text{m/s}}{5.00 \times 10^{-7}\ \text{m}} = 6.00 \times 10^{14}\ \text{Hz}
\]

**Step 3 — photon energy:**

\[
E = h\nu = (6.626 \times 10^{-34}\ \text{J·s})(6.00 \times 10^{14}\ \text{s}^{-1}) = 3.98 \times 10^{-19}\ \text{J}
\]

Per mole: \((3.98 \times 10^{-19}\ \text{J})(6.022 \times 10^{23}\ \text{mol}^{-1}) \approx 240\ \text{kJ/mol}\) — enough to promote a \(\pi \to \pi^*\) transition in a conjugated dye, which is why colored molecules absorb visible light.

### Example 2: Converting an IR band between units

A carbonyl stretch appears at 1715 cm⁻¹. Express it as a wavelength in micrometers and as a frequency in hertz.

**Wavelength:**

\[
\lambda = \frac{1}{\tilde{\nu}} = \frac{1}{1715\ \text{cm}^{-1}} = 5.83 \times 10^{-4}\ \text{cm}
\]

Convert: \(5.83 \times 10^{-4}\ \text{cm} \times \dfrac{10^4\ \mu\text{m}}{1\ \text{cm}} = 5.83\ \mu\text{m}\).

**Frequency:** convert cm⁻¹ to m⁻¹ (\(1715 \times 100 = 1.715 \times 10^5\ \text{m}^{-1}\)), then:

\[
\nu = c\tilde{\nu} = (2.998 \times 10^8\ \text{m/s})(1.715 \times 10^5\ \text{m}^{-1}) = 5.14 \times 10^{13}\ \text{Hz}
\]

Unit check: \(\text{m/s} \times \text{m}^{-1} = \text{s}^{-1} = \text{Hz}\). ✓

### Example 3: Why IR light cannot break bonds

Using \(E = hc\tilde{\nu}\) for the 1715 cm⁻¹ photon:

\[
E = (6.626 \times 10^{-34}\ \text{J·s})(2.998 \times 10^8\ \text{m/s})(1.715 \times 10^5\ \text{m}^{-1}) = 3.41 \times 10^{-20}\ \text{J}
\]

Per mole: \(3.41 \times 10^{-20} \times 6.022 \times 10^{23} \approx 20.5\ \text{kJ/mol}\) — about 20× less than the ~413 kJ/mol needed to break a typical C–H bond, so IR cannot rupture bonds. A UV photon at 250 nm carries \(hc/\lambda \approx 479\ \text{kJ/mol}\), comparable to bond energies — why UV drives photochemistry and why UV exposure damages DNA. Safety principle: IR is non-ionizing and non-destructive; UV sources require eye and skin protection.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Wavenumber (\(\tilde{\nu}\), cm⁻¹) | Frequency (\(\nu\), Hz) | \(\tilde{\nu} = 1/\lambda\) in cm; \(\nu = c/\lambda\) in Hz; convert via \(\nu = c\tilde{\nu}\) after changing cm⁻¹ to m⁻¹ (×100) |
| High wavenumber | Low energy | Opposite — bigger cm⁻¹ means higher frequency and energy |
| Wavelength order | Frequency order | They run opposite: as \(\lambda\) increases, \(\nu\) and \(E\) decrease |
| Absorption | Emission | Absorption: molecule gains photon energy (dip in transmitted light); emission: molecule releases energy as light |
| IR radiation | Ionizing radiation | IR and radio cannot ionize atoms or break bonds; X-rays and gamma rays can |

## Quick Review

1. Which region of the electromagnetic spectrum excites bond vibrations, and in what wavenumber range?
2. Convert the O–H stretch at 3300 cm⁻¹ to a wavelength in micrometers.
3. Which photon is more energetic: one at 600 nm (visible) or one at 1200 cm⁻¹ (IR)? Show the energy of each.
4. Why do spectra show discrete absorption bands rather than continuous absorption?
5. Rank gamma rays, IR, and radio waves in order of increasing frequency.

<details>
<summary>Show answers</summary>

1. Infrared, roughly 4000–400 cm⁻¹ (mid-IR).
2. \(\lambda = 1/\tilde{\nu} = 1/(3300\ \text{cm}^{-1}) = 3.03 \times 10^{-4}\ \text{cm} = 3.03\ \mu\text{m}\).
3. 600 nm: \(E = hc/\lambda = (6.626 \times 10^{-34})(2.998 \times 10^8)/(6.00 \times 10^{-7}) = 3.31 \times 10^{-19}\ \text{J}\). 1200 cm⁻¹: \(E = hc\tilde{\nu} = 2.38 \times 10^{-20}\ \text{J}\). The visible photon is about 14× more energetic.
4. Because energy levels are quantized — a photon is absorbed only when its energy matches an allowed transition.
5. Radio < IR < gamma (frequency increases in that order).
</details>

## Related Topics

- Previous: [Mass Spectrometry in Biological Chemistry: Time-of-Flight (TOF) Instruments](04-mass-spectrometry-in-biological-chemistry-time-of-flight-tof-instruments.md)
- Next: [Infrared Spectroscopy](06-infrared-spectroscopy.md)
- Related: [Structure Determination: Mass Spectrometry and Infrared Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: CODATA standard values (\(c\), \(h\), \(N_A\)); last updated 2026-08-16
