---
title: "Formation of Spectral Lines"
subject: "Science"
book: "Astronomy 2e"
chapter: "5: Radiation and Spectra"
topic_number: "5"
source: "astronomy-2e.md"
tags:
  - "formation-of-spectral-lines"
  - "science"
status: "complete"
---

# Formation of Spectral Lines

> **Book:** [Astronomy 2e](../../README.md)  
> **Chapter:** [Chapter 5: Radiation and Spectra](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

When astronomers spread starlight out by wavelength, they rarely see a smooth rainbow. Instead, the rainbow is crossed by bright or dark **spectral lines**. A line forms when an atom absorbs or emits a **photon** (a particle of light) whose energy exactly matches the gap between two allowed energy states of that atom. Because every element has its own unique set of allowed levels, every element produces its own pattern of lines — so a spectrum is like a barcode that identifies the chemistry of objects billions of light-years away.

There are two flavors. **Emission lines** are bright: a hot, low-density gas glows at the specific wavelengths its atoms can emit. **Absorption lines** are dark: when light from a hot, dense source passes through cooler gas, the gas removes exactly those wavelengths, leaving dark gaps. Both effects come from the same physics — the quantization of atomic energy — which is why this topic builds directly on the structure of the atom.

## Why This Matters

Nearly everything astronomers know about distant objects is read from spectral lines: composition (helium was discovered in the Sun's spectrum decades before it was found on Earth), temperature and density, motion via the Doppler effect (the next topic), and even the chemistry of exoplanet atmospheres. Headlines about "redshifted galaxies" and "water vapor on an exoplanet" are practical payoffs of this topic. Without lines, astronomy would be limited to positions and brightnesses; with them, we can do chemistry and physics on objects we can never touch.

## Core Concepts

### Energy levels: why atoms emit only certain colors

An electron bound to a nucleus cannot have just any energy. In the Bohr model (still the standard teaching picture), electrons occupy specific orbits, each with a fixed **energy level**; the lowest is the **ground state**, higher ones are **excited states**. An atom changes level only by absorbing or emitting exactly the energy difference between two levels, ΔE. That energy travels as a photon with

**E = hf = hc/λ**

where *h* is Planck's constant, *f* is frequency, *c* is the speed of light, and *λ* is wavelength. Because the levels are fixed, each transition produces one fixed wavelength: a larger gap gives a shorter-wavelength (bluer), higher-energy photon. If an electron gains enough energy to escape entirely, the atom is **ionized**.

### Emission lines: hot gas that glows

In a hot, low-density gas, collisions and absorbed light kick electrons into excited states. When an electron falls back to a lower level, the atom emits a photon equal to the gap it crossed — one bright line per possible drop, at one wavelength. A neon sign is the familiar example: the gas glows in the specific colors its atoms can emit. Hydrogen, the most abundant element in the universe, produces a famous series of visible lines; the brightest, Hα, sits near 656.3 nm (deep red) — a commonly taught reference value to verify against current sources.

### Absorption lines: cooler gas in front of a bright light

Now put a hot, dense source — a star's interior — behind cooler gas. The source produces a **continuous spectrum** (light of every wavelength, like a rainbow). Atoms in the cooler gas absorb photons matching their own transitions, jumping to excited states, and those wavelengths go missing from the light that continues on. The detector sees dark **absorption lines** at exactly the wavelengths the gas would have emitted if glowing. The dark Fraunhofer lines in the Sun's spectrum are absorption lines made by the Sun's cooler outer layers — which is how we learned the Sun's composition.

### Kirchhoff's three rules of spectra

1. A hot, dense (opaque) object produces a **continuous spectrum**.
2. A hot, low-density gas produces **emission lines**.
3. A continuous spectrum viewed through cooler gas produces **absorption lines**.

The rules are idealized: a real gas can both emit and absorb, and which you see depends on geometry — which is why rule 3 says "viewed through."

### Real lines are not infinitely thin

A perfect line would sit at one wavelength, but real lines have width. Random thermal motion Doppler-shifts each atom's emission slightly, so hotter gas gives broader lines (**Doppler broadening**); higher pressure widens them too. Line width is therefore a thermometer and pressure gauge, and line shapes can reveal turbulence and rotation. The simple "one transition, one wavelength" picture is a starting point; the messy details carry extra information.

## ELI-10: Explain Like I'm 10

An atom is like a ladder whose rungs are at fixed heights — an electron can only stand on a rung, never between rungs. When an electron jumps down a rung, it releases a tiny packet of light with exactly the energy of that gap. Every element has its own ladder with its own rung spacing, so every element glows with its own set of colors, like a fingerprint. If cool gas sits in front of a bright light, it swallows exactly those colors, leaving dark stripes in the rainbow. Look at the stripes and you can name the gas.

## High-Yield Points

- Photon energy and wavelength are linked: **E = hf = hc/λ**; a bigger energy gap gives a shorter wavelength.
- **Emission lines** are bright lines from hot, low-density gas; **absorption lines** are dark lines made when cooler gas filters a continuous spectrum.
- The same element produces lines at the same wavelengths in emission and absorption — the whole pattern, not a single line, is the fingerprint.
- Kirchhoff's three rules tell you when to expect continuous spectra, emission lines, or absorption lines; they assume idealized conditions.
- Line **width** encodes temperature, pressure, and motion: hotter or denser gas gives broader lines.
- Hα near 656.3 nm is a classic teaching reference (verify values against current sources before citing them in assessments).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Spectral line | A bright or dark feature at one specific wavelength in a spectrum | The basic unit of all spectroscopic analysis |
| Photon | A particle (quantum) of light carrying energy E = hf | The currency of absorption and emission |
| Energy level | One of the fixed, allowed energies of an atom's electrons | Level spacing determines the wavelengths of lines |
| Ground state | The lowest-energy arrangement of an atom's electrons | Most atoms sit here; absorption starts here |
| Excited state | A higher-energy arrangement of an atom's electrons | Falling back to lower levels produces emission lines |
| Ionization | Removing an electron from an atom entirely | Sets the ultimate energy scale for an element |
| Emission line | Bright line produced when excited atoms emit photons | Reveals what hot gas is present and how hot it is |
| Absorption line | Dark line where cooler gas removed photons of that wavelength | Reveals gas between us and a bright background source |
| Continuous spectrum | Light of all wavelengths, like a smooth rainbow | The "canvas" on which absorption lines appear |

## Example: A Star's Barcode, Step by Step

Point a spectrograph at three glowing things: a candle flame, a neon sign, and the Sun.

1. **Candle flame** — hot and dense (mostly opaque soot and gas), so you expect a **continuous spectrum**: a smooth rainbow with no obvious lines.
2. **Neon sign** — hot but extremely low-density gas glows on its own: bright **emission lines**, the familiar red-orange pattern of neon.
3. **Sun** — the visible "surface" is dense and hot (continuous spectrum), but the cooler outer layers absorb on the way out: a rainbow crossed by dark **absorption lines**.

Now add a calculation. Hydrogen's visible Balmer lines come from electrons falling to the n = 2 level. The n = 3 → n = 2 transition has an energy gap of about 1.89 eV (a commonly taught value; check current sources). Convert to wavelength:

**λ = hc/ΔE ≈ (1240 eV·nm) / (1.89 eV) ≈ 656 nm**

That is Hα — the same red line you would see glowing in a hydrogen gas tube, and the same dark line in the Sun's spectrum at the same position. One physics story, three appearances: bright in emission, dark in absorption, identical wavelength in both. This is why astronomers can compare laboratory spectra with starlight and identify elements with confidence.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Absorption lines | Gaps where no light exists | Light of *all* wavelengths arrives; only the absorbed ones are missing |
| An element's single line | An element's whole pattern | One line can coincide with another element's; the full pattern is the reliable fingerprint |
| Emission vs. absorption lines | Different physics | Same transitions; emission = gas glows at those wavelengths, absorption = gas removes those wavelengths from background light |
| "Hot object gives a rainbow" | Any hot object | Only hot, *dense/opaque* objects give continuous spectra; hot low-density gas gives lines |
| Spectral lines being infinitely thin marks | Real lines with width | Width carries temperature, pressure, and motion information |

## Quick Review

1. Why do spectral lines appear at only certain wavelengths instead of everywhere in the rainbow?
2. What is the physical difference between an emission line and an absorption line?
3. A star's spectrum shows dark lines at exactly the wavelengths hydrogen emits in the lab. What can you conclude?
4. Using E = hc/λ, does a transition with a large energy gap produce a redder or bluer photon?
5. Under what conditions would you expect a continuous spectrum, and under what conditions would you expect emission lines?

<details>
<summary>Show answers</summary>

1. Electrons can only move between fixed energy levels, so each transition absorbs or emits one specific photon energy — hence one specific wavelength. Other wavelengths don't match any allowed transition.
2. In emission, excited atoms drop to lower levels and *emit* photons at the transition wavelengths (bright lines). In absorption, cooler gas *removes* photons of those same wavelengths from a continuous background (dark lines). Both involve the same energy-level jumps.
3. The star's outer atmosphere (or gas along the line of sight) contains hydrogen and is cooler than the continuous-emitting layers behind it.
4. A bluer (shorter-wavelength, higher-energy) photon — larger ΔE means higher energy means shorter wavelength.
5. A hot, dense, opaque source gives a continuous spectrum (rule 1); a hot, low-density gas gives emission lines (rule 2); a continuous source viewed through cooler gas gives absorption lines (rule 3).

</details>

## Related Topics

- Previous: [The Structure of the Atom](04-the-structure-of-the-atom.md)
- Next: [The Doppler Effect](06-the-doppler-effect.md)
- Related: [Spectroscopy in Astronomy](03-spectroscopy-in-astronomy.md), [The Behavior of Light](01-the-behavior-of-light.md)
- Chapter overview: [Radiation and Spectra](../README.md)

## Source Notes

- Book: Astronomy 2e
- Local outline source: `astronomy-2e.md`
- Official source URL: https://openstax.org/details/books/astronomy-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (Hα wavelength, transition energies) are commonly taught reference figures intended for learning; verify against current sources before citing in assessments.
- Last updated: 2026-08-16
