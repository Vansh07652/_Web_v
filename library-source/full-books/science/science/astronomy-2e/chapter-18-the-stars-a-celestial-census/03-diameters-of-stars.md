---
title: "Diameters of Stars"
subject: "Science"
book: "Astronomy 2e"
chapter: "18: The Stars: A Celestial Census"
topic_number: "3"
source: "astronomy-2e.md"
tags:
  - "diameters-of-stars"
  - "science"
status: "complete"
---

# Diameters of Stars

> **Book:** [Astronomy 2e](../../README.md)  
> **Chapter:** [Chapter 18: The Stars: A Celestial Census](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Even in the largest telescopes, every star except the Sun appears as a point of light — yet astronomers can still measure stellar diameters. **Direct methods** catch a star's tiny angular size: timing an eclipse in a binary, watching a star blink out behind the Moon, or linking telescopes in an interferometer that resolves a stellar disk. **Indirect methods** use physics: combine luminosity and temperature in the Stefan–Boltzmann law and solve for radius. The results span an astonishing range — from white dwarfs the size of Earth to supergiants like Betelgeuse that would swallow Mars's orbit. This topic shows how each method works and why size, temperature, and luminosity are inseparable.

## Why This Matters

Diameter is the missing piece that turns a star's spectrum into a physical picture: a red star could be a humble dwarf or a bloated giant — only size separates them, and size is what the methods here measure. Diameters also carry density information: giants are enormous but gossamer-thin, white dwarfs tiny but crushingly dense — a first hint of how differently stars end their lives. Later chapters reuse these ideas for pulsating stars, eclipsing binaries as distance markers, and giant evolution.

## Core Concepts

### The angular-size problem and the distance link

A star's **angular diameter** — the angle its disk subtends on the sky — is tiny: even a nearby giant like Betelgeuse spans only about 50 milliarcseconds, the angle of a coin seen hundreds of kilometers away. Converting it into a linear diameter requires the distance: linear size = angular size × distance. So every direct method measures an angle, and distance does the rest — which is why stellar diameters had to wait for parallax.

### Direct method 1: eclipsing binaries

Viewed edge-on, a binary's stars eclipse once per orbit (previous topic), and the eclipse carries size information. With known orbital speeds (from Doppler shifts), the **duration** of an eclipse tells how far the eclipsing star traveled while covering the other — essentially the covered star's diameter, with a small correction for the cover's size. Timing between eclipses gives the period and hence the orbital speed. Eclipsing binaries therefore yield stellar diameters in kilometers with *no distance needed* — one of the few such measurements in astronomy, and the source of the first reliable diameters.

### Direct method 2: lunar occultations and interferometry

In a **lunar occultation**, the Moon passes in front of a star and its light winks out in a fraction of a second. Fast detectors record how the brightness falls; a star with a measurable disk fades gradually, and the fading time plus the Moon's known motion gives the angular diameter. It works only for the largest angular sizes and needs the star on the Moon's path — but no telescope bigger than a modest one.

**Interferometry** is the modern workhorse: linked telescopes combine their light, mimicking the resolving power of a telescope as wide as the baseline — tens or hundreds of meters — resolving angular sizes a single telescope cannot. In the 1920s, an interferometer on the Mount Wilson telescope measured **Betelgeuse**'s angular diameter — the first stellar diameter measured this way (a commonly taught milestone); today's arrays measure dozens of stars routinely.

### Indirect method: the Stefan–Boltzmann law

Most stars are too small in angle for any direct method, so astronomers fall back on physics — the Stefan–Boltzmann law links luminosity, radius, and temperature:

$$L = 4 \pi R^2 \sigma T^4$$

Rearranged, R = √(L / 4πσT⁴); compared with the Sun, in solar luminosities and kelvin,

$$\frac{R}{R_\odot} = \sqrt{\frac{L/L_\odot}{(T/T_\odot)^4}}$$

So diameter follows from just two numbers — luminosity (apparent brightness plus distance) and temperature (spectral class). A star 100 times as luminous as the Sun at the same temperature must have 10 times the radius (area scales as R²); at half the Sun's temperature, far larger still, since the fourth-power temperature factor demands a much bigger surface. This standard method is limited mainly by the accuracy of distances and temperatures.

### The size scale of stars

Together the methods reveal a dramatic size ladder (commonly taught reference figures):

- **Main-sequence stars:** radius grows with mass — from red dwarfs at roughly 0.1–0.5 solar radii to blue giants at ten or more. The Sun's radius is about 696,000 km (one solar radius).
- **Giants and supergiants:** 10 to 100+ solar radii. Aldebaran and Arcturus are red giants; Betelgeuse is commonly cited at several hundred to roughly a thousand solar radii — placed at the Sun's position, its surface would reach past Mars's orbit (some estimates, to Jupiter's).
- **White dwarfs:** about 0.01 solar radii — roughly Earth's size — despite masses near the Sun's. The contrast is density: giants have average densities far lower than air; white dwarf matter is commonly described as a teaspoon weighing tons.

## ELI-10: Explain Like I'm 10

Stars are so far away that they all look like tiny dots, even in big telescopes — but astronomers have clever ways to measure them. If two stars circle each other and one hides the other like an eclipse, the hiding time reveals the hidden star's width. You can also link telescopes into one giant eye, or use math: a star pouring out lots of light while only warm must be enormous — like a huge, lukewarm pizza oven versus a small, blazing one.

## High-Yield Points

- Linear diameter = angular diameter × distance; direct methods measure the angle, indirect methods skip it.
- Eclipsing binaries give diameters in absolute units (kilometers) using eclipse duration and orbital speed — no distance needed.
- Lunar occultations (fast fading) and interferometry (linked telescopes) resolve angular diameters; Betelgeuse was the first interferometric measurement (1920s).
- The standard indirect method: L = 4πR²σT⁴; radius follows from luminosity and temperature, usually expressed relative to the Sun.
- Size range: white dwarfs ~0.01 solar radii (Earth-sized), main-sequence stars ~0.1–10+, giants/supergiants 10–1000+ solar radii (commonly taught figures).
- Giants have extremely low average density, white dwarfs extremely high — the same mass spread over vastly different volumes.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Angular diameter | The angle a star's disk subtends on the sky | The raw quantity direct methods measure; tiny for all stars except the Sun |
| Interferometry | Linking two or more telescopes so they act like one giant aperture | Resolves angular sizes far smaller than any single telescope can |
| Lunar occultation | The Moon passing in front of a star, cutting off its light | The fading time reveals the star's angular diameter |
| Eclipsing binary | A binary viewed edge-on where stars pass in front of each other | Eclipse duration + orbital speed gives diameters in kilometers, distance-free |
| Stefan–Boltzmann law | L = 4πR²σT⁴ for a spherical radiator | The bridge from luminosity and temperature to radius |
| Solar radius (R☉) | The Sun's radius, about 696,000 km (commonly taught) | The standard unit for stellar sizes |

## How It Works / Step-by-Step Process

1. Ask what data you have: a binary light curve, an occultation timing, an interferometric measurement, or just luminosity + temperature.
2. Direct route: from eclipse durations and orbital speeds, occultation fading time, or interferometric fringes, extract the angular or absolute diameter.
3. Indirect route: take temperature T from the spectral class and luminosity L from apparent brightness + distance, then solve R = √(L / 4πσT⁴), scaled to solar units.
4. Convert to solar radii or kilometers and compare with the size scale: dwarfs, giants, supergiants, white dwarfs.
5. Cross-check: a cool yet very luminous star requires a large radius — the signature of a giant, consistent with its very low average density.

## Example

Take two stars at 5,000 K with luminosities of 1 and 100 solar. With identical temperatures, the second must have 10 times the radius (√100 = 10): a main-sequence dwarf a bit smaller than the Sun, versus a red giant like Aldebaran. Now a hotter case: 100 solar luminosities at 10,000 K — twice the Sun's temperature. The fourth-power factor (2⁴ = 16) already accounts for most of the luminosity, so the radius is only about √(100/16) ≈ 2.5 solar radii — a modest, warm star, not a giant. The lesson: *both* numbers must be known, since brightness alone cannot distinguish a large cool star from a small hot one. The classic resolution came in the 1920s, when interferometry measured Betelgeuse's angular diameter and confirmed its brightness comes from sheer size, not temperature.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Angular diameter | Linear diameter | Angular size is what telescopes measure; converting to kilometers requires the distance |
| Large angular size | Large physical size | A close dwarf can span a bigger angle than a distant supergiant — distance is part of the story |
| Bright star | Large star | Brightness mixes luminosity and distance; a hot dwarf can outshine a much larger cool star |
| Giant star | Massive star | Giants are *large in radius* but often only moderately massive — their density is extraordinarily low |
| Eclipse duration | Orbital period | Duration tells you how far the stars moved during the eclipse (→ sizes); the period between eclipses gives the orbit itself |
| Interferometer resolution | Telescope light collection | Interferometry boosts resolving power (sharpness), not necessarily light-gathering power |

## Quick Review

1. Why can't you just look through a telescope and measure a star's diameter?
2. How does an eclipsing binary reveal a star's diameter without knowing its distance?
3. Write the relationship among luminosity, radius, and temperature, and use it to explain why a cool star can be very luminous.
4. About how large is a typical white dwarf compared with the Sun, and what does that imply about its density?
5. What is the difference between the direct and indirect approaches to stellar diameter, and which is more widely applicable?

<details>
<summary>Show answers</summary>

1. Stars other than the Sun have angular diameters far too small for any telescope to resolve — they appear as points; diameter must be inferred via eclipses, occultations, interferometry, or the Stefan–Boltzmann law.
2. Doppler shifts give the orbital speeds; the eclipse duration tells how far the covering star traveled while blocking the other — equal to the covered star's diameter (plus a small correction for the cover's size).
3. L = 4πR²σT⁴. Since luminosity grows with R² and T⁴, a cool star can be very luminous only if its radius is enormous — precisely what a red giant is.
4. A white dwarf is roughly 0.01 solar radii — about Earth's size — with a mass near the Sun's, so its average density is enormous (commonly described as a teaspoonful weighing tons).
5. Direct methods measure an angle (eclipses, occultations, interferometry); indirect methods compute radius from luminosity and temperature via the Stefan–Boltzmann law — far more widely applicable, since most stars are too small in angle.

</details>

## Related Topics

- Previous: [Measuring Stellar Masses](02-measuring-stellar-masses.md)
- Next: [The H–R Diagram](04-the-h-r-diagram.md)
- Related: [The Stars: A Celestial Census chapter overview](../README.md)

## Source Notes

- Book: Astronomy 2e
- Local outline source: `astronomy-2e.md`
- Official source URL: https://openstax.org/details/books/astronomy-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (radii, temperatures, luminosities, historical dates) are commonly taught reference values; verify against current sources before relying on them in assessments.
- Last updated: 2026-08-16
