---
title: "Ultraviolet Spectroscopy"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "14: Conjugated Compounds and Ultraviolet Spectroscopy"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "ultraviolet-spectroscopy"
  - "science"
status: "complete"
---

# Ultraviolet Spectroscopy

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 14: Conjugated Compounds and Ultraviolet Spectroscopy](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

**Ultraviolet (UV) spectroscopy** measures how much ultraviolet light — roughly 200–400 nm, just beyond the violet end of the visible spectrum — a sample absorbs. A molecule absorbs a photon only when the photon's energy matches the gap between an occupied and an empty molecular orbital; the absorbed energy promotes an electron into a higher orbital, an **electronic transition**. The key transitions for organic chemists are **π → π\*** (alkenes, aromatics, carbonyls) and **n → π\*** (lone-pair electrons, especially carbonyls).

The quantitative heart of the method is the **Beer–Lambert law**, \(A = \varepsilon b c\): absorbance is directly proportional to concentration. That single relationship makes UV a quantitative tool — measure the absorbance, know the extinction coefficient, and you can calculate how much compound is in solution. The instrument (UV lamp, monochromator, sample cell, detector) is simple in principle, but practical details — quartz cells, solvent choice — matter because glass and many solvents absorb UV light themselves.

## Why This Matters

UV spectroscopy is one of the most widely used analytical techniques in science:

- **Quantitative analysis.** The Beer–Lambert law gives concentrations of drugs, dyes, and contaminants from a single absorbance reading; HPLC detectors and pharmaceutical quality control rely on it.
- **Detecting conjugation.** Where a molecule absorbs (λ_max) immediately reveals how many double bonds are conjugated — the topic that follows.
- **Biochemistry.** DNA and proteins absorb at 260 and 280 nm; the 260/280 ratio estimates nucleic-acid purity in seconds.
- **Reaction monitoring.** Watching a UV band grow or shrink tracks a reaction without stopping it.

General lab-safety principle: UV radiation can damage eyes and skin, so never look directly into a UV lamp or beam, keep sample compartments closed while the lamp is on, and shield the skin. (This is a general principle; follow your institution's specific protocols.)

## Core Concepts

### Electronic transitions and what absorbs UV

Molecules absorb UV light when an electron jumps between orbitals. The possible transitions, in order of increasing wavelength of practical interest:

- **σ → σ\*** — needs very high energy (vacuum UV, below ~150 nm); only sigma-bonded molecules like alkanes show it, outside the range of ordinary instruments.
- **n → σ\*** — lone-pair electrons promoted into σ\*; alkyl halides, ethers, and amines near 180–220 nm.
- **π → π\*** — the double-bond transition; strong (ε typically \(10^3\)–\(10^5\ \text{L mol}^{-1}\ \text{cm}^{-1}\)) and the main event for alkenes, dienes, aromatics, and carbonyls.
- **n → π\*** — a lone pair promoted into π\*; the classic weak carbonyl band near 280 nm with ε ~10–100, because the transition is symmetry-forbidden.

Because only π and lone-pair (n) electrons absorb in the practical range, UV selectively probes unsaturation, conjugation, and heteroatom lone pairs — saturated hydrocarbons are effectively transparent.

### The Beer–Lambert law

The fraction of light absorbed depends on how many absorbing molecules the beam encounters. The **Beer–Lambert law** states:

\[
A = \varepsilon b c
\]

where \(A\) is absorbance (unitless), \(\varepsilon\) is the molar absorptivity (extinction coefficient, \(\text{L mol}^{-1}\ \text{cm}^{-1}\)), \(b\) is the path length through the sample (cm), and \(c\) is concentration (\(\text{mol/L}\)). Absorbance is also defined directly from the measured light intensities:

\[
A = \log_{10}\left(\frac{I_0}{I}\right) = -\log_{10}(T)
\]

where \(I_0\) is the incident intensity, \(I\) the transmitted intensity, and \(T = I/I_0\) the transmittance. Absorbance is linear in concentration (within the limits noted below), so a calibration curve of A versus c is a straight line through the origin.

### Practical instrument details

A UV spectrophotometer has four parts: a **light source** (deuterium lamp for UV, tungsten-halogen for visible), a **monochromator** to select wavelength, a **sample cell**, and a **detector**. Most instruments are **double-beam**: light splits so one beam passes through the sample and the other through a reference cell of pure solvent, and the instrument reports the difference — automatically subtracting solvent absorption.

Two practical rules trip up exam takers:

- **Cells must be quartz.** Ordinary glass (and plastic) absorbs below about 300 nm; quartz transmits down to ~190 nm, so UV measurements use quartz cells.
- **The solvent must be transparent** at the wavelengths of interest. Common choices and their approximate lower cutoffs: water ~190 nm, hexane ~195 nm, 95% ethanol ~205 nm. Acetone, which absorbs strongly in the UV, is a poor choice.

### What a spectrum shows

A UV spectrum plots absorbance versus wavelength, usually 200–400 nm. Two numbers summarize each band: **λ_max** (position) and **ε_max** (intensity). Strong bands (ε \(10^4\)–\(10^5\)) belong to allowed transitions like π → π\*; weak bands (ε ~10–100) betray forbidden ones like n → π\*. Comparing λ_max against known values identifies a chromophore; comparing ε confirms the assignment.

## ELI-10: Explain Like I'm 10

> A UV spectrophotometer is like a light checkpoint at a tunnel: it shines an invisible beam through a liquid sample and counts how much light comes out the other side. Molecules that "catch" the light swallow it and jump to a higher energy state — like a kid catching a ball and climbing to the top of the playground. The more molecules, the more light swallowed, so the machine counts molecules by how much light disappears — one reading tells you how much medicine is in a pill.

## High-Yield Points

- UV spectroscopy probes **electronic transitions**: π → π\* (strong, ε \(10^3\)–\(10^5\)) and n → π\* (weak, ε ~10–100) dominate the practical 200–400 nm range.
- **Beer–Lambert law:** \(A = \varepsilon b c\). Absorbance is linear in concentration; \(\varepsilon\) is intrinsic to the molecule, \(b\) is the cell path length.
- Absorbance and transmittance: \(A = -\log_{10}(T)\). A is unitless.
- **Quartz cells** (not glass) and UV-transparent solvents (water, hexane, ethanol) are required below ~300 nm.
- Saturated hydrocarbons absorb only via σ → σ\* in the vacuum UV — transparent in the ordinary range, so UV selectively "sees" unsaturation and conjugation.
- Carbonyls show a weak n → π\* band near 280 nm and a strong π → π\* band at shorter wavelength.
- General safety: never look into a UV source; UV can damage eyes and skin.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| electronic transition | Promotion of an electron from an occupied to an empty molecular orbital | The physical event behind every UV absorption |
| chromophore | The part of a molecule responsible for its absorption (C=C, C=O, benzene ring) | Identifies which functional groups UV "sees" |
| λ_max | Wavelength of maximum absorbance | Fingerprint of the chromophore and its conjugation |
| molar absorptivity, ε | Intrinsic absorption strength of a molecule at a given wavelength (\(\text{L mol}^{-1}\ \text{cm}^{-1}\)) | Converts absorbance into concentration; distinguishes allowed vs forbidden transitions |
| Beer–Lambert law | \(A = \varepsilon b c\): absorbance is proportional to concentration and path length | The basis of all quantitative UV analysis |
| transmittance, T | Fraction of incident light that passes through the sample (\(I/I_0\)) | Related to absorbance by \(A = -\log_{10}(T)\) |
| n → π\* transition | Lone-pair electron promoted into a π\* orbital | The weak (~280 nm) carbonyl band; ε ~10–100 |
| π → π\* transition | π electron promoted into a π\* orbital | The strong UV band of alkenes/aromatics; ε up to \(10^5\) |

## How It Works / Step-by-Step Process

To measure and interpret a UV spectrum:

1. **Choose the solvent** — transparent at the wavelengths of interest (water, hexane, or 95% ethanol; never acetone).
2. **Prepare the blank** (pure solvent) in the reference cell and the sample in a quartz cell.
3. **Zero the instrument** — record the baseline with the blank.
4. **Scan 200–400 nm**; record λ_max and the absorbance there.
5. **Convert to concentration** using the Beer–Lambert law: \(c = A/(\varepsilon b)\), using the published ε for the chromophore.
6. **Interpret:** the position (λ_max) identifies the chromophore and its conjugation; the magnitude of ε tells you the transition type (strong π → π\* vs weak n → π\*).

## Worked Examples

### Example 1: Concentration from a single absorbance reading

A compound has \(\varepsilon = 1.5 \times 10^4\ \text{L mol}^{-1}\ \text{cm}^{-1}\) at its λ_max. A solution in a 1.00 cm quartz cell gives \(A = 0.450\) at that wavelength. What is the concentration?

Rearrange the Beer–Lambert law to solve for concentration:

\[
c = \frac{A}{\varepsilon b}
\]

Substituting:

\[
c = \frac{0.450}{(1.5 \times 10^4\ \text{L mol}^{-1}\ \text{cm}^{-1})(1.00\ \text{cm})} = 3.0 \times 10^{-5}\ \text{mol/L}
\]

Unit check: \((\text{L mol}^{-1}\ \text{cm}^{-1})(\text{cm}) = \text{L mol}^{-1}\), and the unitless absorbance divided by \(\text{L mol}^{-1}\) leaves \(\text{mol/L}\) — exactly the units of concentration. The reading was possible only because the cell was quartz; glass would have absorbed the 200–300 nm light itself.

### Example 2: Transmittance, and the energy of a UV photon

(a) A sample transmits 25.0% of the incident light at its λ_max. What is its absorbance?

Transmittance is a fraction, \(T = 0.250\). Using \(A = -\log_{10}(T)\):

\[
A = -\log_{10}(0.250) = 0.602
\]

(b) What energy does a single photon of 280 nm light carry, and what is that energy per mole of photons?

The photon energy is \(E = hc/\lambda\), with Planck's constant \(h = 6.626 \times 10^{-34}\ \text{J}\cdot\text{s}\) and the speed of light \(c = 2.998 \times 10^8\ \text{m/s}\):

\[
E = \frac{(6.626 \times 10^{-34}\ \text{J}\cdot\text{s})(2.998 \times 10^8\ \text{m/s})}{280 \times 10^{-9}\ \text{m}} = 7.09 \times 10^{-19}\ \text{J}
\]

Per mole, multiply by Avogadro's number, \(N_A = 6.022 \times 10^{23}\ \text{mol}^{-1}\):

\[
E_{\text{per mole}} = (7.09 \times 10^{-19}\ \text{J})(6.022 \times 10^{23}\ \text{mol}^{-1}) = 4.27 \times 10^5\ \text{J/mol} \approx 427\ \text{kJ/mol}
\]

Comparable to typical C–C bond energies (~350 kJ/mol), a UV photon can break bonds and drive photochemistry — why prolonged UV exposure damages DNA (and why UV safety matters), and why sunscreens absorb UV before it reaches skin.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Absorbance | Transmittance | \(A = -\log_{10}(T)\); A is linear in concentration, T is not |
| Molar absorptivity ε | Absorbance A | ε is a fixed property of the molecule; A depends on ε, b, and c |
| Weak n → π\* band | Strong π → π\* band | Carbonyl ~280 nm (ε ~10–30) is n → π\*; the alkene π → π\* band is ~1000× stronger |
| Glass cuvette | Quartz cuvette | Glass absorbs below ~300 nm; quartz is required for UV |
| σ → σ\* in ordinary UV range | Vacuum UV below ~150 nm | Alkanes appear transparent in 200–400 nm; σ → σ\* needs special instruments |
| Absorbance of the sample alone | Absorbance of sample + solvent | Double-beam instruments subtract the solvent (blank) automatically |

## Quick Review

1. Which electronic transition gives the weak absorption band of a carbonyl near 280 nm, and why is it weak?
2. A solution has absorbance 0.602 at its λ_max. What percentage of the light is transmitted?
3. Why must UV measurements use quartz cells rather than glass?
4. A compound with \(\varepsilon = 2.0 \times 10^4\ \text{L mol}^{-1}\ \text{cm}^{-1}\) in a 1.00 cm cell gives \(A = 0.800\). What is the concentration?
5. Why do saturated hydrocarbons like hexane appear transparent in ordinary UV spectroscopy?
6. Roughly how much energy (kJ/mol) does a 300 nm photon carry? (Use \(E = N_A hc/\lambda\).)

<details>
<summary>Show answers</summary>

1. The n → π\* transition — a carbonyl lone-pair electron promoted into the π\* orbital. It is weak (ε ~10–30) because the transition is symmetry-forbidden.
2. \(T = 10^{-A} = 10^{-0.602} = 0.250\), so 25.0% of the light is transmitted.
3. Glass absorbs UV light below about 300 nm; quartz transmits down to ~190 nm, so glass would block the very light the instrument needs to measure.
4. \(c = A/(\varepsilon b) = 0.800/((2.0 \times 10^4)(1.00)) = 4.0 \times 10^{-5}\ \text{mol/L}\).
5. Their only possible transition is σ → σ\*, which requires vacuum UV below ~150 nm — outside the 200–400 nm range of an ordinary instrument — so they absorb nothing measurable there.
6. \(E = N_A hc/\lambda = (6.022 \times 10^{23})(6.626 \times 10^{-34})(2.998 \times 10^8)/(300 \times 10^{-9}) = 3.99 \times 10^5\ \text{J/mol} \approx 399\ \text{kJ/mol}\).

</details>

## Related Topics

- Previous: [Diene Polymers: Natural and Synthetic Rubbers](06-diene-polymers-natural-and-synthetic-rubbers.md)
- Next: [Interpreting Ultraviolet Spectra: The Effect of Conjugation](08-interpreting-ultraviolet-spectra-the-effect-of-conjugation.md)
- Related: [Conjugation, Color, and the Chemistry of Vision](09-conjugation-color-and-the-chemistry-of-vision.md)
- Related: [Conjugated Compounds and Ultraviolet Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: \(h = 6.626 \times 10^{-34}\ \text{J}\cdot\text{s}\), \(c = 2.998 \times 10^8\ \text{m/s}\), \(N_A = 6.022 \times 10^{23}\ \text{mol}^{-1}\) (CODATA/standard values); solvent UV cutoffs (~190–205 nm) are typical literature values and vary slightly with grade and purity.
- Last updated: 2026-08-16
