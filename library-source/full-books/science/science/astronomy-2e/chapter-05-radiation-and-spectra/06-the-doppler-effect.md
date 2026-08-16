---
title: "The Doppler Effect"
subject: "Science"
book: "Astronomy 2e"
chapter: "5: Radiation and Spectra"
topic_number: "6"
source: "astronomy-2e.md"
tags:
  - "the-doppler-effect"
  - "science"
status: "complete"
---

# The Doppler Effect

> **Book:** [Astronomy 2e](../../README.md)  
> **Chapter:** [Chapter 5: Radiation and Spectra](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Everyone knows the sound of an ambulance siren: the pitch rises as it approaches and drops as it recedes. That is the **Doppler effect** — a change in the observed wavelength (and frequency) of waves caused by relative motion between source and observer. Light is a wave too, so light from an approaching object shifts to shorter wavelengths (a **blueshift**), and light from a receding object shifts to longer wavelengths (a **redshift**).

Astronomers can't hear stars, but they can measure shifts in spectral lines. Every element has known laboratory ("rest") wavelengths; by comparing where a star's lines appear versus the lab values, we measure how fast the star moves toward or away from us — its **radial velocity**. For speeds much smaller than the speed of light the shifts are tiny, but spectrographs measure them routinely. The Doppler effect is the single most important tool for measuring motion in the universe.

## Why This Matters

Almost every headline about motion in the cosmos rests on Doppler measurements. Shifts of spectral lines reveal the orbits and masses of binary stars; the rotation of galaxies (whose flat rotation curves are key evidence for dark matter); the presence and properties of exoplanets (the radial-velocity method detects a star's wobble as a planet tugs on it); and the expansion of the universe — the redshift of distant galaxies led to Hubble's law, which anchors modern cosmology. The topic is also a lesson in inference: a tiny shift in wavelength carries enormous physical meaning.

## Core Concepts

### Shifts in wavelength

Waves emitted by a moving source bunch up ahead of the motion and stretch out behind it. For light, "bunched up" means shorter wavelength (blueshift, higher frequency) and "stretched out" means longer wavelength (redshift, lower frequency):

- Source **receding** → **redshift** (λ observed > λ rest)
- Source **approaching** → **blueshift** (λ observed < λ rest)

The names come from the ends of the visible spectrum, but the shift applies at all wavelengths — radio, infrared, ultraviolet, X-ray. A "redshifted" galaxy may not look red; the label means its lines sit at longer wavelengths than in the lab.

### The radial-velocity equation

For speeds much smaller than the speed of light — the case for almost all stars and galaxies — the fractional shift is proportional to the radial velocity:

**Δλ/λ = v/c**

where **λ** is the rest wavelength, **Δλ = λ_observed − λ_rest** is the shift, **v** is the radial velocity (positive for recession under the common convention), and **c** is the speed of light. Rearranged, **v = c·Δλ/λ**. Because c is huge (~300,000 km/s), even fast stars shift lines by only a tiny fraction of a wavelength — so astronomers measure wavelengths to great precision.

### Only line-of-sight motion counts

The Doppler effect responds only to the component of velocity along the line of sight. Motion perpendicular to the line of sight produces (to first order) no shift: a star crossing the sky at high speed shows the same wavelengths as a stationary star. Doppler measurements therefore give radial velocity, not total speed. Astronomers combine Doppler data with proper motion (sideways drift) to reconstruct full three-dimensional motion.

### Doppler broadening and rotation

Random thermal motion makes atoms in a gas move toward and away from us at a range of speeds, so each line smears into a small range of wavelengths — the **Doppler broadening** from the previous topic. Hotter gas means faster random motion, hence broader lines. The same logic applies to a rotating star or galaxy: material on one side approaches while the other side recedes, widening the line. Line width and shape are practical tools for measuring temperatures and rotation speeds.

### Binaries, galaxies, and the expansion of the universe

In a **spectroscopic binary**, two stars orbit each other, so their lines shift back and forth periodically. From the timing and size of the shifts, astronomers derive orbital periods and stellar masses — the foundation of our knowledge of stellar masses. At galactic scales, the 21-cm line of hydrogen shows that galaxies rotate too fast at their edges for visible matter alone to hold them together — evidence for dark matter. And on the largest scale, nearly every galaxy outside our local group is redshifted, with recession speed proportional to distance: **Hubble's law, v = H₀·d**, where H₀ is commonly taught as roughly 70 km/s per megaparsec (verify against current values). Strictly, the distant-galaxy redshift is the expansion of space itself (a **cosmological redshift**) rather than motion through space; for nearby objects the Doppler description is an excellent approximation. A separate, smaller effect — gravitational redshift — comes from general relativity.

## ELI-10: Explain Like I'm 10

Think of a siren: the sound waves get squished together in front of the moving truck, so the pitch sounds higher as it comes toward you, and stretched out behind it, so the pitch drops as it drives away. Light does the same thing — an approaching star's light waves are squished (shorter wavelength, "bluer") and a receding star's are stretched (longer wavelength, "redder"). By measuring how much a star's fingerprint lines have moved, we can tell exactly how fast it is moving toward or away from us, even though we can never see the motion directly.

## High-Yield Points

- **Receding → redshift** (longer wavelength); **approaching → blueshift** (shorter wavelength).
- For slow speeds: **Δλ/λ = v/c**, so **v = c·Δλ/λ**; Δλ positive means recession under the common convention.
- The shift measures only the **radial** (line-of-sight) component of motion; sideways motion gives no shift to first order.
- Doppler broadening reveals temperature; rotation widens lines because one side approaches while the other recedes.
- Hubble's law v = H₀·d ties recession speed to distance; H₀ ≈ 70 km/s/Mpc is a commonly taught reference value (verify against current measurements).
- Distinguish Doppler redshift (motion), cosmological redshift (expansion of space), and gravitational redshift (general relativity).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Doppler effect | Change in observed wavelength/frequency caused by relative motion of source and observer | The standard way to measure cosmic motion |
| Redshift | Shift of lines to longer wavelengths (source receding) | Basis of galaxy distances and the expanding-universe picture |
| Blueshift | Shift of lines to shorter wavelengths (source approaching) | Reveals approaching motion, e.g., in binary stars |
| Radial velocity | The component of velocity along our line of sight | The only velocity component Doppler shifts measure |
| Rest wavelength | Wavelength of a line as measured in a stationary lab source | The reference point for computing the shift |
| Doppler broadening | Widening of lines due to random atomic motion | Turns line width into a temperature diagnostic |
| Spectroscopic binary | A binary star whose orbital motion shows as periodic line shifts | Main source of measured stellar masses |
| Hubble's law | v = H₀·d: galaxy recession speed grows with distance | Foundation of cosmology and cosmic distances |
| Cosmological redshift | Redshift caused by expansion of space itself, not local motion | Correct description for very distant galaxies |

## Example: Reading Motion from a Hydrogen Line

**Step 1 — the setup.** A star's spectrum shows the hydrogen Hα absorption line. In the lab, Hα sits at 656.3 nm (commonly taught reference value). On the star, it appears at 656.5 nm.

**Step 2 — compute the shift.** Δλ = 656.5 − 656.3 = +0.2 nm. The line is at a longer wavelength than rest, so the star is **receding** (redshifted).

**Step 3 — convert to velocity.** Using v = c·Δλ/λ with c ≈ 3 × 10⁵ km/s:

**v ≈ (3 × 10⁵ km/s) × (0.2 / 656.3) ≈ 91 km/s**

The star moves away at roughly 91 km/s — a typical stellar speed, which is why a 0.2 nm shift is typical too. Now imagine the same star is in a binary: six months later the line appears at 656.1 nm (blueshifted, approaching at ~91 km/s). The lines swing back and forth every orbit, revealing the orbital period — and, with orbital geometry, the masses of both stars. One tiny shift, measured repeatedly, gives us stellar masses that no other observation can provide directly.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| "Redshifted" meaning the object looks red | A label for longer wavelengths | The object may emit no visible light; redshift means its lines shifted to longer wavelengths |
| Doppler shift measuring total speed | Radial velocity only | Sideways motion produces no shift to first order |
| All redshifts being Doppler shifts | Cosmological and gravitational redshifts | Nearby motion → Doppler; distant galaxies → expansion of space; strong gravity → gravitational redshift |
| Blueshift meaning "moving closer" in any direction | Moving closer *along the line of sight* | Only the line-of-sight component matters |
| Bigger line shift always meaning faster | Shift scaling with v/c | The fractional shift Δλ/λ is what matters; at relativistic speeds the simple formula needs correction |

## Quick Review

1. A star's lines are all shifted to shorter wavelengths than in the lab. Is the star approaching or receding?
2. Write the Doppler equation and identify each symbol. What velocity does it give you?
3. Why can't Doppler measurements tell you a star's sideways motion?
4. How does rotation show up in the spectrum of a star or galaxy?
5. A galaxy's hydrogen lines are redshifted by Δλ/λ = 0.02. Roughly how fast is it receding, and what does Hubble's law then tell you about its distance?

<details>
<summary>Show answers</summary>

1. Approaching — shorter wavelengths are a blueshift, which means motion toward the observer along the line of sight.
2. Δλ/λ = v/c, where λ is the rest wavelength, Δλ is observed minus rest wavelength, v is the radial velocity (positive receding), and c is the speed of light. It gives the line-of-sight (radial) component of velocity.
3. The Doppler effect depends only on motion along the line of sight; transverse motion changes wave path length but not wave spacing to first order, so it produces no measurable shift.
4. Rotation broadens lines: one limb approaches (blueshifted light) while the other recedes (redshifted light), smearing each line wider. Faster rotation → wider lines.
5. v = c × 0.02 ≈ 3 × 10⁵ km/s × 0.02 = 6,000 km/s. With Hubble's law, d = v/H₀ ≈ 6,000 ÷ 70 ≈ 86 Mpc (using the commonly taught H₀; verify against current measurements).

</details>

## Related Topics

- Previous: [Formation of Spectral Lines](05-formation-of-spectral-lines.md)
- Next: End of chapter
- Related: [Spectroscopy in Astronomy](03-spectroscopy-in-astronomy.md), [The Behavior of Light](01-the-behavior-of-light.md)
- Chapter overview: [Radiation and Spectra](../README.md)

## Source Notes

- Book: Astronomy 2e
- Local outline source: `astronomy-2e.md`
- Official source URL: https://openstax.org/details/books/astronomy-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (Hα wavelength, Hubble constant, speed of light) are commonly taught reference figures intended for learning; verify against current sources before citing in assessments.
- Last updated: 2026-08-16
