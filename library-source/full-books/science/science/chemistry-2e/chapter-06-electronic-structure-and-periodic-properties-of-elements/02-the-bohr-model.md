---
title: "The Bohr Model"
subject: "Science"
book: "Chemistry 2e"
chapter: "6: Electronic Structure and Periodic Properties of Elements"
topic_number: "2"
source: "chemistry-2e.md"
tags:
  - "the-bohr-model"
  - "science"
status: "complete"
---

# The Bohr Model

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 6: Electronic Structure and Periodic Properties of Elements](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Pass an electric discharge through a tube of hydrogen gas and it glows pink — yet through a prism the light separates into a few sharp colored lines, not a rainbow. This is the puzzle Niels Bohr set out to solve in 1913: why does hydrogen emit only specific wavelengths, never the ones in between? Classical physics predicted the opposite: an orbiting electron should radiate continuously and spiral into the nucleus almost instantly. Bohr's answer was to impose quantization on the atom: electrons occupy only certain allowed orbits and radiate or absorb light only when jumping between them. His model reproduced the hydrogen line spectrum with remarkable precision and introduced the energy-level picture all of quantum chemistry still uses — though the model itself was later superseded.

## Why This Matters

The Bohr model is the bridge between the photon idea and the quantum-mechanical atom. It explains why atoms emit fingerprint-like line spectra — the tool astronomers use to identify elements in stars, and the principle behind neon signs, flame tests, and lasers. Its key habit of thought — electrons occupy discrete energy levels, and light is emitted when they move between levels — survives unchanged in modern quantum mechanics. The model still works for single-electron species like \(\text{H}\), \(\text{He}^{+}\), \(\text{Li}^{2+}\); knowing its successes AND limits prevents the classic mistake of applying it to multi-electron atoms.

## Core Concepts

### The puzzle: line spectra instead of rainbows

A hot solid emits a continuous spectrum; a heated gas emits only discrete wavelengths, appearing as sharp lines. For hydrogen the visible lines are the **Balmer series** — red 656 nm, blue-green 486 nm, violet 434 nm — following a pattern encoded in the empirical **Rydberg equation** that a successful atomic model had to explain.

### Bohr's postulates

Bohr kept Rutherford's picture of a tiny, dense, positive nucleus but added three quantum rules:

1. **Quantized orbits.** The electron orbits only where its angular momentum is an integer multiple of \(\frac{h}{2\pi}\): \(mvr = n\frac{h}{2\pi}\), \(n = 1, 2, 3, \dots\).
2. **Stationary states.** In an allowed orbit, the electron does NOT radiate — a direct violation of classical electromagnetism, justified by its success.
3. **Quantized transitions.** Light is emitted or absorbed only during jumps between orbits, with photon energy equal to the level difference:

\[E_{\text{photon}} = |\Delta E| = h\nu\]

### Energy levels of the hydrogen atom

Combining the postulates with Coulomb's law and circular motion gives the energy of level \(n\):

\[E_n = -2.18 \times 10^{-18}\ \text{J} \times \frac{Z^2}{n^2}\]

For hydrogen (\(Z = 1\)), the lowest level is \(E_1 = -2.18 \times 10^{-18}\ \text{J}\) (\(-13.6\ \text{eV}\)). The negative sign means the electron is **bound** — energy is required to remove it. As \(n\) grows, levels crowd closer together, approaching \(E = 0\) at \(n = \infty\), where the electron is free.

### Emission, absorption, and spectral series

For a jump from level \(n_2\) (higher) to \(n_1\) (lower), the emitted wavelength obeys

\[\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right), \qquad R = 1.097 \times 10^{7}\ \text{m}^{-1}\]

Series are named for the final level: **Lyman** (\(n_1 = 1\), ultraviolet), **Balmer** (\(n_1 = 2\), visible), **Paschen** (\(n_1 = 3\), infrared). The Balmer series lands in the visible window — hence hydrogen's pink glow.

### Successes and limits of the model

The Bohr model reproduces the hydrogen spectrum almost perfectly and gives the correct ionization energy (13.6 eV), but fails for helium and all multi-electron atoms: it treats electrons as point particles, ignores electron–electron repulsion, and cannot explain line splitting in magnetic fields. It is a heroic first step — the next topic replaces orbits with probability clouds.

## ELI-10: Explain Like I'm 10

Imagine an electron is a kid on a staircase — it can stand on step 1, 2, or 3, but never hover between steps. Jumping down a step releases a flash of light; climbing up requires absorbing light of exactly the right color. Each jump gives one exact color — that is why hydrogen's glow shows sharp lines instead of a rainbow. The Bohr model first said "electrons live on staircases," and it worked beautifully for the simplest atom.

## High-Yield Points

- Energy of level \(n\): \(E_n = -2.18 \times 10^{-18}\ \text{J} \times \frac{Z^2}{n^2}\); memorize \(E_1 = -13.6\ \text{eV}\) for H.
- Negative energy = bound: \(n = 1\) is ground state; \(n = \infty\) is \(E = 0\), the ionization limit.
- Photon energy on any transition: \(h\nu = |E_{\text{final}} - E_{\text{initial}}|\).
- Rydberg equation: \(\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)\), \(R = 1.097 \times 10^{7}\ \text{m}^{-1}\); for emission \(n_1\) is the LOWER (final) level.
- Series: Lyman → UV, Balmer → visible, Paschen → infrared.
- Ionization energy of H = 13.6 eV (from \(n = 1\) to \(n = \infty\)).
- Works ONLY for one-electron species (\(\text{H}\), \(\text{He}^{+}\), \(\text{Li}^{2+}\)).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Line spectrum | Discrete wavelengths emitted by a gas, appearing as sharp lines | The experimental fingerprint any atomic model must explain |
| Stationary state | An allowed orbit in which the electron does not radiate | Bohr's key postulate; makes stable atoms possible |
| Principal quantum number (\(n\)) | Integer labeling the energy level: 1, 2, 3, ... | Sets the energy and size of the orbit |
| Ground state | The lowest energy level (\(n = 1\) for hydrogen) | The most stable arrangement; reference for excitation and ionization |
| Balmer series | Transitions ending at \(n = 2\), in the visible region | Why hydrogen glows pink; the most-tested series |
| Rydberg equation | \(\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)\) | Predicts every hydrogen line wavelength |
| Ionization energy | Energy to remove the electron completely | 13.6 eV for H; a fundamental atomic property |

## Worked Examples

### Worked Example 1: Energy of the electron in level \(n = 2\)

**Problem.** Calculate the energy of the electron in the \(n = 2\) level of hydrogen.

**Strategy.** Formula first, then substitute (\(Z = 1\) for hydrogen):

\[E_n = -2.18 \times 10^{-18}\ \text{J} \times \frac{Z^2}{n^2}\]

\[E_2 = -2.18 \times 10^{-18}\ \text{J} \times \frac{1^2}{2^2} = -2.18 \times 10^{-18}\ \text{J} \times \frac{1}{4} = -5.45 \times 10^{-19}\ \text{J}\]

**Dimensional analysis.** \(\frac{Z^2}{n^2}\) is unitless, so the answer is in joules. **Comparison.** \(E_1\) is more negative than \(E_2\), so the ground state is more stable.

### Worked Example 2: Wavelength of the first Balmer line

**Problem.** Hydrogen's most prominent visible line (H-alpha) comes from the \(n = 3 \to n = 2\) transition. Calculate its wavelength.

**Strategy.** Emission ends at \(n_1 = 2\), starts at \(n_2 = 3\). Write the Rydberg equation, then substitute:

\[\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right) = (1.097 \times 10^{7}\ \text{m}^{-1})\left(\frac{1}{2^2} - \frac{1}{3^2}\right) = (1.097 \times 10^{7}\ \text{m}^{-1})\left(\frac{5}{36}\right) = 1.524 \times 10^{6}\ \text{m}^{-1}\]

\[\lambda = \frac{1}{1.524 \times 10^{6}\ \text{m}^{-1}} = 6.56 \times 10^{-7}\ \text{m} = 656\ \text{nm}\]

**Dimensional analysis.** \(\frac{1}{\text{m}^{-1}} = \text{m}\); \(6.56 \times 10^{-7}\ \text{m} \times \frac{10^{9}\ \text{nm}}{1\ \text{m}} = 656\ \text{nm}\). **Sanity check.** 656 nm is visible and red — matching hydrogen's familiar red line.

### Worked Example 3: Ionization energy of hydrogen

**Problem.** Calculate the energy needed to ionize a ground-state hydrogen atom (from \(n = 1\) to \(n = \infty\)), in joules and in eV.

**Strategy.** Ionization is the \(n = 1 \to n = \infty\) transition, with \(E_\infty = 0\):

\[\Delta E = E_\infty - E_1 = 0 - (-2.18 \times 10^{-18}\ \text{J}) = +2.18 \times 10^{-18}\ \text{J}\]

Convert with \(1\ \text{eV} = 1.602 \times 10^{-19}\ \text{J}\):

\[2.18 \times 10^{-18}\ \text{J} \times \frac{1\ \text{eV}}{1.602 \times 10^{-19}\ \text{J}} = 13.6\ \text{eV}\]

**Interpretation.** The positive sign means energy must be supplied — the definition of ionization energy. The textbook value 13.6 eV is one of the model's celebrated successes.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Emission | Absorption | Emission: electron falls, photon released. Absorption: electron rises, photon consumed. |
| \(n_1\) in the Rydberg equation | The starting level | In emission problems \(n_1\) is the FINAL (lower) level; \(n_2\) is the starting (higher) level |
| The Bohr model | The modern quantum model | Bohr = fixed circular orbits, one-electron species only; modern = probability orbitals, all atoms |
| Hydrogen's pink glow | A continuous rainbow | Gases emit discrete lines; only hot solids emit continuous spectra |

## Quick Review

1. What are Bohr's three postulates, in your own words?
2. Which is more stable: an electron in \(n = 1\) or \(n = 4\)? Explain using the energy formula.
3. Why are the Balmer lines the visible ones while Lyman and Paschen lines are not?
4. A hydrogen atom absorbs a photon and its electron moves from \(n = 1\) to \(n = 3\). What determines the photon's energy?
5. Why does the Bohr model fail for helium?
<details>
<summary>Show answers</summary>

1. (1) Only orbits with angular momentum \(mvr = n\frac{h}{2\pi}\) are allowed; (2) electrons in allowed orbits do not radiate; (3) light is emitted/absorbed only during jumps, with \(h\nu = |\Delta E|\).
2. \(n = 1\). Its energy \(-2.18 \times 10^{-18}\ \text{J}\) is more negative than \(E_4 = -1.36 \times 10^{-19}\ \text{J}\); more negative = more stable.
3. Balmer transitions end at \(n = 2\) and produce wavelengths of 400–700 nm — the visible window. Lyman lines end at \(n = 1\) (UV) and Paschen at \(n = 3\) (infrared), so both are invisible.
4. The photon energy must exactly equal \(\Delta E = E_3 - E_1\), the level difference — no more, no less.
5. Helium has two electrons. The model treats one electron in a Coulomb field and ignores electron–electron repulsion, which is strong in multi-electron atoms.

</details>

## Related Topics

- Previous: [Electromagnetic Energy](01-electromagnetic-energy.md)
- Next: [Development of Quantum Theory](03-development-of-quantum-theory.md)
- Related: [Chapter 6: Electronic Structure and Periodic Properties of Elements overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Physical constants (R, h, 1 eV, hydrogen ionization energy 13.6 eV) are standard textbook values; verify against current sources before use in assessments.
- Last updated: 2026-08-16
