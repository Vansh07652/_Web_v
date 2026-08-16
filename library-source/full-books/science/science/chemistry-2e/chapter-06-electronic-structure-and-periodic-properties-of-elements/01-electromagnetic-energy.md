---
title: "Electromagnetic Energy"
subject: "Science"
book: "Chemistry 2e"
chapter: "6: Electronic Structure and Periodic Properties of Elements"
topic_number: "1"
source: "chemistry-2e.md"
tags:
  - "electromagnetic-energy"
  - "science"
status: "complete"
---

# Electromagnetic Energy

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 6: Electronic Structure and Periodic Properties of Elements](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Hold a copper wire in a Bunsen flame and the flame turns green. That color is a message: copper atoms absorbed heat, then released it as light of specific wavelengths. Almost everything chemists know about the inside of atoms comes from decoding such messages, and the decoder ring is **electromagnetic radiation** — energy traveling as synchronized oscillations of electric and magnetic fields. This topic gives you the two tools needed to read those messages. The **wave model** describes light by wavelength, frequency, amplitude, and speed; the **particle model** describes light as packets of energy called **photons**. Two compact equations — \(c = \lambda \nu\) and \(E = h\nu\) — connect the pictures, and you will use them in every spectroscopy problem in this course.

## Why This Matters

Electromagnetic energy is the only messenger that reaches us from the atomic world. Astronomers identify elements in distant stars by their light; hospitals image tissues with X-rays and microwaves; lasers, Wi-Fi, and radio all run on electromagnetic waves. The rest of this chapter — the Bohr model, quantum numbers, electron configurations, periodic trends — is built on the idea that atoms exchange energy in discrete packets of light. The wave–particle picture also matters for safety: higher-frequency radiation (ultraviolet, X-rays, gamma rays) carries more energy per photon and can damage tissue, which is why protective practices around such sources exist.

## Core Concepts

### Waves carry energy without carrying matter

An electromagnetic wave is a repeating pattern of electric and magnetic fields that travels outward. Three properties describe it:

- **Wavelength (\(\lambda\))** — distance between successive crests (m, nm, pm); sets the wave's "size".
- **Frequency (\(\nu\))** — wave cycles per second (s⁻¹, or **hertz**, Hz).
- **Amplitude** — wave height; controls **intensity** (brightness).

Wavelength and frequency are not independent. Their product is the wave's speed, and in a vacuum all electromagnetic radiation travels at \(c = 2.998 \times 10^{8}\ \text{m/s}\):

\[c = \lambda \nu\]

Since \(c\) is constant, long wavelength means low frequency and short wavelength means high frequency — they trade off.

### The electromagnetic spectrum

Arranged by frequency, radiation spans the **electromagnetic spectrum**: radio, microwave, infrared, visible, ultraviolet (UV), X-ray, and gamma rays, from lowest to highest frequency and energy. Visible light — the window our eyes detect, roughly 400–700 nm — is a sliver between infrared and UV. Uses track the regions: radio for communication, microwaves for radar, infrared for heat sensing, UV for sterilization, X-rays for imaging, gamma rays in medicine and astronomy.

### Light arrives in packets: the photon

In 1900, Max Planck found he could explain the colors of hot objects only if energy was exchanged in discrete chunks proportional to frequency. Einstein extended the idea in 1905: light itself is delivered in packets, now called **photons**, each carrying energy

\[E = h \nu\]

where \(h = 6.626 \times 10^{-34}\ \text{J·s}\) is **Planck's constant**. The photoelectric effect — electrons ejected from a metal only when light's frequency exceeds a threshold, regardless of brightness — makes sense only in the photon picture: one photon must carry enough energy to liberate one electron. More intensity means more photons, not more energy per photon.

### One phenomenon, two descriptions

Light diffracts and interferes like a wave, yet is absorbed and emitted in countable quanta like a particle. Both descriptions are needed; which you use depends on the experiment. This **wave–particle duality**, introduced for light, returns for electrons in the next topics.

## ELI-10: Explain Like I'm 10

Light is like an ocean wave: it has a wavelength (distance between wave tops), a frequency (how fast it bobs), and an amplitude that controls how bright it is. But light is also like a shower of tiny invisible marbles — each marble, called a photon, carries a fixed amount of energy that depends on the wave's frequency. High-frequency light like X-rays comes in high-energy marbles; radio comes in low-energy ones. The two equations here are the instruction manual for converting between "how wavy" and "how energetic."

## High-Yield Points

- In vacuum all EM radiation travels at \(c = 2.998 \times 10^{8}\ \text{m/s}\); wavelength and frequency are inversely related via \(c = \lambda \nu\).
- Higher frequency = shorter wavelength = more energy per photon: \(E = h\nu\), \(h = 6.626 \times 10^{-34}\ \text{J·s}\).
- Spectrum order (low → high frequency/energy): radio < microwave < infrared < visible < UV < X-ray < gamma.
- Visible light is roughly 400–700 nm.
- Amplitude controls intensity; frequency controls photon energy.
- Equivalent form: \(E = \frac{hc}{\lambda}\). Useful conversion: 1 eV = \(1.602 \times 10^{-19}\ \text{J}\) (visible photons are ~2–3 eV).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Electromagnetic radiation | Energy traveling as oscillating electric and magnetic fields | The carrier of all information from atoms and stars |
| Wavelength (\(\lambda\)) | Distance between successive wave crests | Sets where radiation falls in the spectrum |
| Frequency (\(\nu\)) | Wave cycles per second (Hz) | Sets photon energy; the "color" of radiation |
| Amplitude | Height of the wave | Controls intensity, not energy per photon |
| Photon | A discrete packet of light energy, \(E = h\nu\) | Explains absorption and emission of light by atoms |
| Quantization | Energy delivered in discrete packets | The core idea behind all quantum chemistry |
| Electromagnetic spectrum | The full range from radio to gamma rays | Organizes radiation by frequency and energy |
| Planck's constant (\(h\)) | \(6.626 \times 10^{-34}\ \text{J·s}\), linking photon energy to frequency | The fundamental constant joining wave and particle pictures |

## Worked Examples

### Worked Example 1: Wavelength of an FM radio signal

**Problem.** An FM station broadcasts at 98.5 MHz. What is the wavelength of its signal in meters?

**Strategy.** Frequency is given, wavelength wanted; the link is \(c = \lambda \nu\). Write the formula first, then solve:

\[\lambda = \frac{c}{\nu}\]

Convert: \(98.5\ \text{MHz} = 98.5 \times 10^{6}\ \text{s}^{-1}\). Substitute \(c = 2.998 \times 10^{8}\ \text{m/s}\):

\[\lambda = \frac{2.998 \times 10^{8}\ \text{m/s}}{98.5 \times 10^{6}\ \text{s}^{-1}} = 3.04\ \text{m}\]

**Dimensional analysis.** \(\frac{\text{m/s}}{\text{s}^{-1}} = \text{m}\) — units cancel to meters. **Sanity check:** FM antennas are about 3 m long; the answer matches.

### Worked Example 2: Energy of one green photon

**Problem.** A green laser emits 520 nm light. Find the frequency and the energy of one photon, in joules and in eV.

**Strategy.** Wavelength given; find frequency, then energy:

\[\nu = \frac{c}{\lambda} \qquad\text{and}\qquad E = h\nu\]

Convert nanometers first — this is where unit errors happen:

\[520\ \text{nm} \times \frac{10^{-9}\ \text{m}}{1\ \text{nm}} = 5.20 \times 10^{-7}\ \text{m}\]

\[\nu = \frac{2.998 \times 10^{8}\ \text{m/s}}{5.20 \times 10^{-7}\ \text{m}} = 5.77 \times 10^{14}\ \text{s}^{-1}\]

\[E = (6.626 \times 10^{-34}\ \text{J·s})(5.77 \times 10^{14}\ \text{s}^{-1}) = 3.82 \times 10^{-19}\ \text{J}\]

**Dimensional analysis.** \(\text{J·s} \times \text{s}^{-1} = \text{J}\). Convert with \(1\ \text{eV} = 1.602 \times 10^{-19}\ \text{J}\):

\[E = 3.82 \times 10^{-19}\ \text{J} \times \frac{1\ \text{eV}}{1.602 \times 10^{-19}\ \text{J}} = 2.39\ \text{eV}\]

**Sanity check.** Visible photons carry ~2–3 eV, so 2.39 eV is right. Many texts combine the steps as \(E = \frac{hc}{\lambda}\) — acceptable, but show the intermediate frequency if asked.

### Worked Example 3: Photon counting from a laser

**Problem.** A 5.00 mW green laser delivers \(5.00 \times 10^{-3}\ \text{J}\) per second. Using the photon energy from Worked Example 2, how many photons does it emit per second?

**Strategy.** Power = (energy per photon) × (photons per second), so:

\[\text{photons/s} = \frac{5.00 \times 10^{-3}\ \text{J/s}}{3.82 \times 10^{-19}\ \text{J/photon}} = 1.31 \times 10^{16}\ \text{photons/s}\]

**Dimensional analysis.** \(\frac{\text{J/s}}{\text{J/photon}} = \text{photons/s}\). About 13 quadrillion photons stream out each second — which is why light seems continuous despite arriving in packets.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Frequency | Wavelength | Inversely related via \(c = \lambda \nu\); high frequency = short wavelength |
| Amplitude | Frequency | Amplitude sets intensity; frequency sets color and photon energy |
| Photon energy | Light intensity | Intensity counts photons; each photon's energy is fixed by frequency |
| Speed in vacuum | Speed in matter | \(c\) is the vacuum value; light slows in glass and water (refraction) |
| Radio waves | Gamma rays | Same nature and speed; they differ hugely in frequency, wavelength, and energy per photon |
| "High-energy" radiation | "More intense" radiation | High energy = more energy per photon; intensity = more photons per second |

## Quick Review

1. Is the frequency of 600 nm light higher or lower than that of 400 nm light? Why?
2. Arrange the following by increasing photon energy: infrared, gamma rays, radio, visible, X-rays.
3. What does amplitude control, and what does it NOT control?
4. Why could the photoelectric effect not be explained by treating light as a pure wave?
5. If the frequency of light doubles, what happens to (a) its wavelength and (b) photon energy?
6. What is the wavelength (in m) of radiation with frequency \(1.0 \times 10^{15}\ \text{s}^{-1}\)?

<details>
<summary>Show answers</summary>

1. Lower. Since \(c = \lambda\nu\) with \(c\) constant, longer wavelength means lower frequency: 600 nm light has about \(5.0 \times 10^{14}\ \text{Hz}\), 400 nm about \(7.5 \times 10^{14}\ \text{Hz}\).
2. Radio < infrared < visible < X-rays < gamma rays.
3. Amplitude controls intensity — how many photons arrive. It does NOT control photon energy, which is set by frequency.
4. A pure wave delivers energy continuously, so dim light of any frequency should eventually eject electrons — but none are ejected below a threshold frequency, however intense. Only photons (energy \(h\nu\)) explain it.
5. (a) Wavelength halves. (b) Photon energy doubles (\(E = h\nu\)).
6. \(\lambda = \frac{c}{\nu} = \frac{2.998 \times 10^{8}\ \text{m/s}}{1.0 \times 10^{15}\ \text{s}^{-1}} = 3.0 \times 10^{-7}\ \text{m}\) (300 nm, ultraviolet).

</details>

## Related Topics

- Previous: Start of chapter
- Next: [The Bohr Model](02-the-bohr-model.md)
- Related: [Chapter 6: Electronic Structure and Periodic Properties of Elements overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Physical constants (c = 2.998 × 10⁸ m/s, h = 6.626 × 10⁻³⁴ J·s, 1 eV = 1.602 × 10⁻¹⁹ J) are standard textbook values; verify against current sources before using them in assessments.
- Last updated: 2026-08-16
