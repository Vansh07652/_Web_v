---
title: "Telescopes"
subject: "Science"
book: "Astronomy 2e"
chapter: "6: Astronomical Instruments"
topic_number: "1"
source: "astronomy-2e.md"
tags:
  - "telescopes"
  - "science"
status: "complete"
---

# Telescopes

> **Book:** [Astronomy 2e](../../README.md)  
> **Chapter:** [Chapter 6: Astronomical Instruments](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

A telescope is, first and foremost, a **light collector**: it gathers as many photons as possible from a faint source and brings them to a sharp focus where a detector can record them. Three properties matter. **Light-gathering power** sets how faint an object you can see; **resolving power** sets how sharp the image is; **magnification** only makes the image larger — the least important of the three for science. Modern research telescopes rarely have eyepieces; they feed cameras and spectrographs, because the goal is to measure light.

There are two basic designs. **Refractors** use a lens to bend light to a focus; **reflectors** use a curved mirror. Nearly every serious telescope ever built — from Galileo's small tubes to today's 10-meter giants — belongs to one of these families, and almost all modern research instruments are reflectors, for reasons of physics and engineering this topic explains.

## Why This Matters

Every astronomical discovery, from the moons of Jupiter to the first exoplanet images, began with someone collecting more light or resolving finer detail than anyone before. The **aperture** — the diameter of the main lens or mirror — is the single most important number describing a telescope, because it sets both how faint an object can be seen and how fine the detail can be. It also explains why observatories sit on remote mountain tops, why some telescopes go to space (later in this chapter), and why "bigger is better" is so often true.

## Core Concepts

### Light-gathering power: the aperture is everything

The main lens or mirror has diameter **D**, called the **aperture**. Light collected is proportional to the *area* of the aperture, which scales with **D²**: double the diameter and you collect **4×** the light. A 10-meter telescope collects (10/1)² = 100 times as much light as a 1-meter telescope — enough to see objects 100 times fainter in the same exposure. Think of a rain gauge: a wider bucket catches more raindrops per minute. In astronomy, "raindrops" are photons, and faint objects simply deliver very few of them.

### Resolving power: seeing fine detail

**Angular resolution** is the smallest angle at which a telescope can separate two objects; smaller angles mean sharper images. Even a perfect telescope cannot focus light to a point: diffraction spreads light, so a star appears as a small blurry disk. The theoretical limit is the **Rayleigh criterion**:

**θ = 1.22 λ / D** (in radians)

where **λ** is the wavelength of light and **D** is the aperture. Larger aperture and shorter wavelength give finer resolution — so bigger telescopes are sharper, and detail improves at shorter wavelengths. The catch: on the ground, churning air smears images to roughly **1 arcsecond** of blur (called **seeing**), usually worse than the telescope's diffraction limit. That is why the sharpest ground-based images need adaptive optics (next topic) and why space telescopes like Hubble beat ground-based sharpness despite modest apertures — its ~2.4-m mirror achieves roughly 0.05 arcsecond resolution in visible light, a commonly cited figure to verify against current sources.

### Magnification: the least important power

Magnification is set by the eyepiece: **m = f_objective / f_eyepiece**, the ratio of the telescope's focal length to the eyepiece's. Crank it too high on a small telescope and you get "empty magnification" — a big, blurry image with no new detail, because aperture and atmosphere have already set the sharpness limit. Magnification enlarges the image; aperture and seeing decide what detail exists to be enlarged. Research telescopes therefore skip eyepieces.

### Refractors: the lens telescope

A refractor bends light with a convex lens — the design of Galileo and the classic "spyglass," still excellent for small telescopes. Its fundamental flaw is **chromatic aberration**: a lens bends different colors by different amounts, so red and blue focus at slightly different points, producing colored fringes. Correcting this requires extra lens elements, and a large lens can only be supported at its edges — a thick glass disk sags under its own weight. Large refractors are therefore rare; the largest practical ones reach roughly 1 meter in aperture (a commonly taught historical figure; verify against current sources).

### Reflectors: the mirror telescope

A reflector uses a concave primary mirror, which focuses all colors to the same point — no chromatic aberration. A mirror can be supported from behind, so it can be made much larger and thinner than a lens of the same aperture. Classic designs include the **Newtonian** (a small flat diagonal mirror sends the focus out the side) and the **Cassegrain** (a hole in the primary lets light reach a focus behind the mirror — the layout of most large telescopes). Because reflectors are cheaper per unit area, free of chromatic aberration, and scalable to huge sizes, essentially every major research telescope is a reflector.

### The focal plane: where the science happens

A telescope gathers and focuses light; the science happens at the **focal plane**, where instruments sit. A longer focal length spreads the image over a larger area (finer "plate scale"), letting a detector capture more detail per pixel, but also spreading the light thinner. Choosing focal length, detector, and instrument is part of designing an observation.

## ELI-10: Explain Like I'm 10

A telescope is like a giant rain bucket for light: the wider the bucket, the more raindrops (photons) it catches, so the fainter the stars you can see. It also magnifies like binoculars, but magnifying just makes the picture bigger — a big bucket and steady air are what make the picture sharp. Whether it uses a lens or a mirror, the point is the same: gather more light and focus it carefully.

## High-Yield Points

- **Light-gathering power ∝ D²**: double the aperture, get 4× the light; a 10-m telescope collects 100× the light of a 1-m telescope.
- **Resolution limit (Rayleigh criterion): θ = 1.22 λ/D** — bigger aperture and shorter wavelength give sharper images; ~1″ seeing usually limits ground-based sharpness more than the telescope does.
- **Magnification m = f_objective / f_eyepiece** is the least important power; too much magnification gives empty magnification.
- **Reflectors dominate research astronomy**: no chromatic aberration, mirrors supported from behind, scalable to giant sizes; refractors suffer chromatic aberration and lens sag.
- **Cassegrain** (focus behind a hole in the primary) and **Newtonian** (side focus) are the classic reflector designs.
- Modern telescopes feed detectors at the focal plane — eyepieces are for amateurs, not research.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Aperture | Diameter of the main lens or mirror (D) | Sets light collection (∝D²) and theoretical resolution (∝1/D) |
| Light-gathering power | Ability to collect photons, proportional to aperture area | Determines how faint an object can be detected |
| Angular resolution | Smallest angle at which two objects can be separated | Determines image sharpness and detail |
| Rayleigh criterion | θ = 1.22 λ/D: the diffraction-limited resolution of a telescope | The fundamental sharpness ceiling set by physics |
| Seeing | Blur caused by atmospheric turbulence | Usually the real limit on ground-based sharpness (~1″) |
| Chromatic aberration | Lens flaw: different colors focus at different points | Why large telescopes use mirrors, not lenses |
| Refractor | Telescope whose main light-collecting element is a lens | The classic design; limited in size by lens sag |
| Reflector | Telescope whose main light-collecting element is a mirror | The design of virtually all large research telescopes |
| Cassegrain focus | Focus located behind a hole in the primary mirror | Standard layout for large telescopes |

## Example: Comparing Two Telescopes by the Numbers

Suppose you own a small 0.1-meter telescope and you visit a 10-meter observatory telescope.

**Light gathering.** Compare areas: (10 / 0.1)² = 100² = **10,000**. The giant collects ten thousand times as much light per second — a star delivering one photon per minute to your scope delivers ten thousand per minute to the giant, the difference between "impossible" and "easy."

**Theoretical resolution.** Use the Rayleigh criterion at visible light, λ ≈ 500 nm. For the 10-m telescope:

**θ = 1.22 × (500 × 10⁻⁹ m) / (10 m) ≈ 6.1 × 10⁻⁸ rad ≈ 0.013 arcseconds**

Your 0.1-m scope gives about 1.3 arcseconds — but on the ground, both are beaten down by seeing of roughly an arcsecond. In other words, the giant's theoretical sharpness is wasted unless it uses adaptive optics (next topic) or goes to space. The takeaway: aperture buys light-collecting power immediately, but sharpness on the ground must be earned twice — once by the mirror, once by outwitting the atmosphere.

**Magnification.** If the giant's focal length is 100 m and an eyepiece is 25 mm, m = 100/0.025 = 4,000× — but nobody uses that eyepiece, because the atmosphere and diffraction set the useful limit. Instead, a camera or spectrograph sits at the focus, quietly counting photons for hours.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Magnification | Quality or "power" of a telescope | Aperture drives faintness and sharpness; magnification only enlarges what aperture and atmosphere allow |
| Bigger magnification being better | Useful magnification | Beyond the aperture/seeing limit you get empty magnification — bigger but no sharper |
| Telescopes being for looking through | Research instruments | Modern telescopes feed detectors; eyepieces are rarely installed on research telescopes |
| Refractors being superior (classic look) | Reflectors | Reflectors avoid chromatic aberration, cost less per area, and can be built far larger |
| Resolution depending on magnification | Resolution depending on aperture and wavelength | θ = 1.22 λ/D has no magnification term; magnification just enlarges the already-limited image |

## Quick Review

1. A telescope's aperture doubles. By what factor does its light-gathering power increase?
2. Write the Rayleigh criterion and explain each symbol. What does it say about using shorter wavelengths?
3. Why do almost all large research telescopes use mirrors instead of lenses?
4. Why is high magnification "useless" on a small telescope?
5. Hubble's mirror is much smaller than the largest ground-based mirrors, yet Hubble images are sharper. Why?

<details>
<summary>Show answers</summary>

1. 4× — light gathering scales with area, which scales with D².
2. θ = 1.22 λ/D, with θ the smallest resolvable angle (radians), λ the wavelength, and D the aperture. Shorter wavelengths give smaller θ, i.e., finer resolution — one reason astronomers observe at short wavelengths when they can.
3. Mirrors have no chromatic aberration, can be supported from behind (so they don't sag like large lenses), and are cheaper per unit area — all of which let them be built far larger.
4. Aperture and atmospheric seeing set the sharpness limit; magnification beyond that limit just enlarges a blurry image (empty magnification).
5. Hubble orbits above the atmosphere, so it is free of seeing; its 2.4-m mirror reaches close to its diffraction limit (~0.05 arcsecond in visible light), beating ground-based telescopes limited to ~1 arcsecond by the air.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Telescopes Today](02-telescopes-today.md)
- Related: [Visible-Light Detectors and Instruments](03-visible-light-detectors-and-instruments.md)
- Chapter overview: [Astronomical Instruments](../README.md)

## Source Notes

- Book: Astronomy 2e
- Local outline source: `astronomy-2e.md`
- Official source URL: https://openstax.org/details/books/astronomy-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (Hubble resolution, historical refractor limits, typical seeing) are commonly taught reference figures intended for learning; verify against current sources before citing in assessments.
- Last updated: 2026-08-16
