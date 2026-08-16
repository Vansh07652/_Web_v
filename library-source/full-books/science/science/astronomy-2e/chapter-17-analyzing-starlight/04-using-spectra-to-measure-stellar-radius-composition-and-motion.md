---
title: "Using Spectra to Measure Stellar Radius, Composition, and Motion"
subject: "Science"
book: "Astronomy 2e"
chapter: "17: Analyzing Starlight"
topic_number: "4"
source: "astronomy-2e.md"
tags:
  - "using-spectra-to-measure-stellar-radius-composition-and-motion"
  - "science"
status: "complete"
---

# Using Spectra to Measure Stellar Radius, Composition, and Motion

> **Book:** [Astronomy 2e](../../README.md)  
> **Chapter:** [Chapter 17: Analyzing Starlight](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A spectrum is not just a classification tool — it is a **measuring instrument**. This topic shows how three fundamental stellar properties are extracted from spectral lines: **composition** (which elements are present, with caveats), **motion** (how fast a star moves toward or away from us, and how fast it spins), and **radius** (how big the star is, derived from temperature and luminosity). The same Doppler-shift logic reappears throughout astronomy: in binary orbits, exoplanet searches, galaxy rotation, and the expansion of the universe.

## Why This Matters

Almost everything astronomers know about a distant star comes from its spectrum, since the star is just a point of light. Composition tells us what stars are made of and lets us compare them to the Sun. The Doppler effect turns spectra into a cosmic speedometer, revealing otherwise invisible motions. And radius — from the Stefan–Boltzmann law — is what separates red giants from red dwarfs: two stars can share a temperature yet differ wildly in size and luminosity. Together these measurements feed the stellar census of Chapter 18.

## Core Concepts

### Composition: reading the elements

Every absorption line is produced by a specific atom or ion, identified by its wavelength pattern, so a spectrum is in principle a chemical inventory. Two cautions apply. First, as in the previous topic, **line strength reflects temperature as much as abundance** — a cool star shows strong metal lines because its atoms are in the right states, not because it is metal-rich. Second, only the *outer* layers are sampled; the interior is invisible. The message is nonetheless robust: stars are overwhelmingly hydrogen and helium — commonly taught reference values put hydrogen near 73% of the mass, helium near 25%, with all heavier elements (the "metals") making up a couple of percent. The Sun shows lines of dozens of elements but is still dominated by H and He.

### Motion: the Doppler effect as a speedometer

When a star moves along our line of sight, its lines shift: receding → longer wavelengths (**redshift**); approaching → shorter wavelengths (**blueshift**). The fractional shift equals the **radial velocity** (motion along our line of sight) via the commonly taught relation:

$$v = c \times \frac{\Delta \lambda}{\lambda}$$

where *v* is the radial velocity, *c* the speed of light, λ the rest wavelength, and Δλ the measured shift. A star moving perpendicular to our line of sight shows *no* shift — the effect senses only the toward/away component; sideways drift (proper motion) is measured as a change of position on the sky. Since laboratory wavelengths of common lines are well known, measuring a shift is straightforward: redder means receding, bluer means approaching.

### Rotation: the broadening of lines

The same Doppler logic reveals **rotation**. One limb of a spinning star approaches us while the opposite limb recedes, so the star's light is a blend of blueshifted and redshifted contributions: each spectral line is **broadened**, and faster spin means wider lines. Line width therefore gives the rotation speed projected along our line of sight (we see the full speed only roughly equator-on). Our Sun is a slow rotator, but many young massive stars spin so fast their lines are visibly broad. Thermal motion (thermal broadening) and pressure in dense atmospheres (pressure broadening) also widen lines, so width is a composite effect — rotation usually dominates.

### Radius: putting temperature and luminosity together

The most widely applicable method uses the **Stefan–Boltzmann law**: the energy a hot surface radiates per second grows with the fourth power of temperature and with surface area. For a spherical star:

$$L = 4 \pi R^2 \sigma T^4$$

where *L* is luminosity (total power), *R* radius, *T* surface temperature, and σ the Stefan–Boltzmann constant. Given luminosity and temperature, we solve for radius: a star luminous at a given temperature must have a large surface — it must be **big**. This is how astronomers separate **giants** from **dwarfs**: a red giant and a red dwarf can have nearly the same temperature (hence similar spectral class), but the giant is hundreds of times more luminous, so its radius must be hundreds of times larger. Temperature comes from the spectral class; luminosity from apparent brightness plus distance (Chapter 19).

## ELI-10: Explain Like I'm 10

A star's spectrum is like a ruler and a fingerprint at the same time. The dark lines tell you which atoms are in the star, and if the whole pattern is stretched toward red, the star is moving away — like the lower pitch of a receding siren. If the lines are smeared into a blur, the star is spinning fast. And if you know how hot the star is and how much light it pours out, you can figure out how big it is — a huge but cool star looks red yet shines far brighter than a small red star.

## High-Yield Points

- Composition: spectra reveal the elements in a star's outer layers; stars are mostly hydrogen (~73% by mass) and helium (~25%), with a couple of percent metals (commonly taught reference values).
- Line strength is set by temperature as much as by abundance — never equate strong lines with high abundance alone.
- Doppler effect: receding star → lines redshifted; approaching star → lines blueshifted; radial velocity *v* = *c*·Δλ/λ (commonly taught relation).
- Doppler shifts sense only motion along the line of sight; side-to-side motion is measured separately as proper motion.
- Rotation broadens spectral lines; faster spin = wider lines.
- Radius comes from the Stefan–Boltzmann law: *L* = 4π*R*²σ*T*⁴, so a star that is luminous but cool must be large (giant, not dwarf).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Radial velocity | The component of a star's motion directly toward or away from us | The quantity the Doppler shift measures; turns spectra into a speedometer |
| Redshift | Shift of spectral lines to longer wavelengths | Signature of a star (or galaxy) receding from us |
| Blueshift | Shift of spectral lines to shorter wavelengths | Signature of a star (or galaxy) approaching us |
| Doppler broadening | Widening of lines caused by a spinning star's two limbs moving toward and away from us | Lets us measure how fast a star rotates |
| Stefan–Boltzmann law | Energy radiated per second = 4π*R*²σ*T*⁴ for a spherical star | The bridge from luminosity + temperature to radius |
| Giant | A star with a huge radius (and luminosity) for its temperature | Distinguished from dwarfs by the radius derived from L and T |
| Metals | Astronomers' term for all elements heavier than helium | Convenient shorthand when describing stellar composition |
| Proper motion | A star's slow drift across the sky, perpendicular to our line of sight | The motion Doppler shifts cannot see |

## How It Works / Step-by-Step Process

1. Record the spectrum and identify the wavelengths of known lines (Balmer hydrogen, Ca II, etc.).
2. Compare observed wavelengths to laboratory values: a systematic shift toward red or blue gives radial velocity via *v* = *c*·Δλ/λ.
3. Measure the width of the lines: broad lines indicate fast rotation (plus thermal and pressure contributions).
4. Use the spectral class to assign temperature; combine with luminosity (apparent brightness + distance) in *L* = 4π*R*²σ*T*⁴ and solve for radius.
5. Cross-check: a large derived radius for a cool star is the signature of a giant; a small radius for a hot star points to a white dwarf.

## Example

Imagine a star whose hydrogen Balmer lines are all shifted toward longer wavelengths by 0.1% of their rest wavelength. The Doppler relation gives *v* = *c* × 0.001 ≈ 300 km/s — the star is receding at a typical galactic speed. The lines are also noticeably broad: the star spins fast, one side approaching while the other recedes, smearing each line. The spectral class is K, temperature about 4,000 K, and luminosity 100 times the Sun's. The Stefan–Boltzmann law says a star that cool cannot shine that brightly unless it is huge — solving for radius gives roughly 30–40 solar radii. Same temperature as many red dwarfs, but far more luminous: a red **giant**, its size revealed entirely through its spectrum.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Line shift (Doppler) | Line broadening (rotation) | Shift moves the whole line pattern red or blue (motion along our line of sight); broadening widens each line (spin, heat, pressure) |
| Redshift meaning | "Light getting tired" or color change | Redshift here is a wavelength measurement of motion; the star's intrinsic color is a separate property |
| Strong metal lines | Metal-rich star | Line strength depends on temperature too — cool stars show strong metal lines regardless of abundance |
| Radial velocity | Proper motion | Radial velocity is toward/away (Doppler); proper motion is sideways across the sky (position change) |
| Giant vs. dwarf classification | Size vs. brightness confusion | A giant is large *and* luminous for its temperature; a dwarf is small — a white dwarf is hot yet tiny, so it is faint |
| Apparent brightness | Luminosity | Brightness depends on distance as well as power; radius requires luminosity, which needs a distance measurement |

## Quick Review

1. A star's lines are all shifted to shorter wavelengths. Is it approaching or receding?
2. Why do rapidly rotating stars show broad spectral lines?
3. Two stars have the same temperature, but one is 100 times more luminous. What can you conclude about their radii?
4. Why can't the Doppler effect measure a star's sideways motion?
5. If a star's hydrogen lines are weak and its metal lines strong, does that mean the star is metal-rich? Why or why not?

<details>
<summary>Show answers</summary>

1. Approaching — shorter wavelengths mean blueshift, the signature of motion toward us.
2. One limb spins toward us (blueshifted) while the opposite limb spins away (redshifted); the blend of shifted light smears each line into a broad band.
3. The more luminous star must have a much larger radius — same temperature but 100× the surface area, so roughly 10× the diameter.
4. Doppler shifts respond only to motion along the line of sight; sideways motion is seen as a change of position on the sky (proper motion).
5. No. Line strength depends on temperature as well as abundance; a cool star shows strong metal lines because its atoms are in states that absorb those wavelengths — not because it is unusually metal-rich.

</details>

## Related Topics

- Previous: [The Spectra of Stars (and Brown Dwarfs)](03-the-spectra-of-stars-and-brown-dwarfs.md)
- Next: End of chapter — continue to [Chapter 18: The Stars: A Celestial Census](../chapter-18-the-stars-a-celestial-census/README.md)
- Related: [Analyzing Starlight chapter overview](../README.md)

## Source Notes

- Book: Astronomy 2e
- Local outline source: `astronomy-2e.md`
- Official source URL: https://openstax.org/details/books/astronomy-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (composition percentages, temperatures, velocities) are commonly taught reference values and illustrative examples; verify against current sources before relying on them in assessments.
- Last updated: 2026-08-16
