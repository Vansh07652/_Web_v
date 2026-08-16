---
title: "Development of Quantum Theory"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "3: Electronic Structure and Periodic Properties of Elements"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "development-of-quantum-theory"
  - "science"
status: "complete"
---

# Development of Quantum Theory

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 3: Electronic Structure and Periodic Properties of Elements](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

The Bohr model worked for hydrogen but pointed toward something stranger: matter itself behaves like waves. In 1924, Louis de Broglie proposed that every moving particle has an associated wavelength:

\[
\lambda = \frac{h}{mv}
\]

where \(h\) is Planck's constant, \(m\) is the particle's mass, and \(v\) is its speed. For everyday objects this wavelength is absurdly small — but for an electron it is comparable to atomic dimensions, which is exactly why electrons inside atoms show wave-like behavior. Experiments soon confirmed that electrons diffract like light waves.

This wave–particle duality forced a complete rewrite of atomic theory. Werner Heisenberg's **uncertainty principle** says we cannot know both the position and the momentum of a particle precisely at the same time:

\[
\Delta x \cdot \Delta (mv) \geq \frac{h}{4\pi}
\]

Erwin Schrödinger then replaced Bohr's fixed orbits with **wavefunctions** (\(\psi\)), mathematical descriptions of the electron's wave. The square of the wavefunction gives the probability of finding the electron in a region of space. The result is the **orbital** — not a path, but a three-dimensional probability cloud. This chapter topic is where "orbits" become "orbitals," and it sets up electron configurations and periodic trends that follow.

## Why This Matters

Quantum theory is the true description of how electrons behave in atoms, and it explains:

- **Why atoms have structure at all:** electrons are standing waves that fit around the nucleus only at certain energies, giving discrete levels without inventing fixed orbits.
- **The shapes of chemistry:** orbitals (s, p, d, f) and their energies dictate how atoms bond, why the periodic table is organized as it is, and why elements in a column behave alike.
- **Modern technology:** semiconductors, lasers, MRI, LEDs, and quantum computing all rest on wave–particle duality and quantum states.

The uncertainty principle is not a limit of our instruments; it is a fundamental feature of nature. It also explains why electrons cannot collapse into the nucleus: confining an electron to a tiny region would require enormous, uncertain momentum. Students should know the quantum numbers because they are the "address system" used to write electron configurations in the next topic.

## Core Concepts

### Wave–particle duality and the de Broglie wavelength

De Broglie's equation \(\lambda = h/(mv)\) applies to everything, but its effect depends on mass:

- A 0.145 kg baseball thrown at 40 m/s: \(\lambda \approx 1.1 \times 10^{-34}\ \text{m}\) — far smaller than any measurable scale, so baseballs behave classically.
- An electron (\(9.11 \times 10^{-31}\ \text{kg}\)) moving at \(10^6\ \text{m/s}\): \(\lambda \approx 7 \times 10^{-10}\ \text{m}\) — about the size of an atom.

Because the electron's wavelength is comparable to atomic distances, the electron "fits" around the nucleus only in certain standing-wave patterns — exactly the quantization that Bohr had to assume. Diffraction experiments (Davisson and Germer, 1927) confirmed electrons scatter like waves.

### The uncertainty principle

Heisenberg showed that the product of the uncertainties in position (\(\Delta x\)) and momentum (\(\Delta (mv)\)) can never be smaller than about \(h/(4\pi)\):

\[
\Delta x \cdot \Delta (mv) \geq \frac{h}{4\pi}
\]

If you pin down an electron's position tightly (small \(\Delta x\)), its momentum becomes highly uncertain — so we cannot describe electrons as following definite trajectories. This is why "orbit" is the wrong picture: an electron has no single well-defined path at any instant. The principle also explains why atoms don't collapse: an electron squeezed into the nucleus would need such uncertain (large) momentum that its energy would be enormous.

### Wavefunctions and probability

Schrödinger's equation describes the electron as a wavefunction \(\psi\). The physically meaningful quantity is \(\psi^2\), the **probability density** — the chance of finding the electron per unit volume. The electron is most likely found where \(\psi^2\) is large. This probabilistic picture is confirmed by experiment: measure the position of an electron in a hydrogen atom many times, and the results form a cloud matching \(\psi^2\).

An **orbital** is a region of space (defined by a wavefunction) where the electron is most likely found. Orbitals have characteristic shapes: s orbitals are spherical, p orbitals are dumbbell-shaped (three orientations, one along each axis), d orbitals have four-lobed and ring shapes (five orientations), and f orbitals are more complex (seven orientations).

### The four quantum numbers

Each electron in an atom is described by four quantum numbers:

| Quantum number | Symbol | Allowed values | What it specifies |
|---|---|---|---|
| Principal | \(n\) | 1, 2, 3, … | Shell; energy and average distance |
| Angular momentum | \(l\) | 0 to \(n-1\) | Subshell shape (0 = s, 1 = p, 2 = d, 3 = f) |
| Magnetic | \(m_l\) | \(-l\) to \(+l\) | Orbital orientation in space |
| Spin | \(m_s\) | \(+1/2\) or \(-1/2\) | Electron spin direction |

For \(n = 2\), the allowed values are \(l = 0\) (2s) and \(l = 1\) (2p, with \(m_l = -1, 0, +1\), i.e., three 2p orbitals). Every orbital holds at most two electrons (one spin up, one spin down) — the Pauli exclusion principle, developed further in Topic 4.

## ELI-10: Explain Like I’m 10

> Imagine an electron as a tiny drum whose skin can only vibrate in certain special patterns — that is why only certain energies are allowed. We can never say exactly where the drum is; we can only say where it is most likely to be, like a fuzzy cloud around the nucleus. The cloud has shapes: round balls (s), figure-eights (p), and four-leaf clovers (d). The old idea of an electron circling like a planet was replaced by these probability clouds.

## High-Yield Points

- de Broglie wavelength: \(\lambda = h/(mv)\); electrons have atomic-scale wavelengths, macroscopic objects effectively do not.
- Uncertainty principle: \(\Delta x \cdot \Delta (mv) \geq h/(4\pi)\) — no definite trajectories for electrons.
- \(\psi^2\) is the probability density; orbitals are probability clouds, not paths.
- Orbitals: s (1 per shell, spherical), p (3 per shell, dumbbells), d (5 per shell), f (7 per shell).
- Quantum numbers: \(n\) (shell), \(l\) (subshell: 0=s, 1=p, 2=d, 3=f), \(m_l\) (orientation, \(-l\) to \(+l\)), \(m_s\) (\(\pm 1/2\)).
- Each orbital holds at most two electrons (Pauli exclusion principle).
- Electron diffraction experiments confirm wave behavior of matter.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| wave–particle duality | The fact that light and matter show both wave and particle properties | The core idea that makes quantum theory necessary |
| de Broglie wavelength | Wavelength of a moving particle, \(\lambda = h/(mv)\) | Explains why electrons in atoms are wave-like |
| uncertainty principle | Limits on simultaneously knowing position and momentum | Rules out electron orbits and explains atomic stability |
| wavefunction (\(\psi\)) | Mathematical description of an electron's wave | The object from which all electron properties are calculated |
| probability density (\(\psi^2\)) | Likelihood of finding the electron per unit volume | Converts wave theory into predictions of where electrons are |
| orbital | Region of space where an electron is most likely found | The modern replacement for Bohr's orbit; basis of electron configurations |
| quantum number | Integer or half-integer labeling a property of an electron | Four numbers fully specify each electron's state |

## How It Works / Step-by-Step Process

To find the de Broglie wavelength of a particle:

1. Write the equation: \(\lambda = h/(mv)\).
2. Convert the speed to m/s and use the mass in kg (electrons: \(9.11 \times 10^{-31}\ \text{kg}\)).
3. Substitute \(h = 6.626 \times 10^{-34}\ \text{J·s}\), the mass, and the speed with units.
4. Cancel units: \(\text{J·s} / (\text{kg·m/s}) = (\text{kg·m}^2/\text{s}^2 \cdot \text{s})/(\text{kg·m/s}) = \text{m}\).
5. Compare the result to atomic dimensions (\(\sim 10^{-10}\ \text{m}\)): if comparable, wave behavior matters; if far smaller, treat the particle classically.

## Worked Examples

### Example 1: de Broglie wavelength of an electron

An electron moves at \(1.00 \times 10^6\ \text{m/s}\). What is its de Broglie wavelength?

\[
\lambda = \frac{h}{mv} = \frac{6.626 \times 10^{-34}\ \text{J·s}}{(9.11 \times 10^{-31}\ \text{kg})(1.00 \times 10^6\ \text{m/s})}
\]

\[
\lambda = \frac{6.626 \times 10^{-34}}{9.11 \times 10^{-25}}\ \text{m} = 7.27 \times 10^{-10}\ \text{m} = 0.727\ \text{nm}
\]

Unit check: \(1\ \text{J} = 1\ \text{kg·m}^2/\text{s}^2\), so the J·s in the numerator divided by kg·m/s leaves meters. The wavelength (0.727 nm) is about seven times the diameter of a hydrogen atom — atomic-scale, confirming that electrons inside atoms must be treated as waves. This is the wavelength-scale used in electron microscopy.

### Example 2: de Broglie wavelength of a baseball (classical limit)

A 0.145 kg baseball travels at 40.0 m/s. What is its de Broglie wavelength?

\[
\lambda = \frac{h}{mv} = \frac{6.626 \times 10^{-34}\ \text{J·s}}{(0.145\ \text{kg})(40.0\ \text{m/s})} = \frac{6.626 \times 10^{-34}}{5.80}\ \text{m} = 1.14 \times 10^{-34}\ \text{m}
\]

This is about \(10^{-19}\) times the size of a proton — utterly unmeasurable. The baseball follows classical physics not because waves don't apply, but because its wavelength is too small to matter. The same calculation explains why we never see diffraction of everyday objects.

### Example 3: What the uncertainty principle forbids

If an electron's speed is known to within \(\Delta v = 1.00 \times 10^5\ \text{m/s}\), what is the minimum uncertainty in its position?

Use the uncertainty principle with momentum uncertainty \(\Delta (mv) = m\Delta v\):

\[
\Delta x \geq \frac{h}{4\pi m \Delta v} = \frac{6.626 \times 10^{-34}\ \text{J·s}}{4\pi (9.11 \times 10^{-31}\ \text{kg})(1.00 \times 10^5\ \text{m/s})}
\]

\[
\Delta x \geq \frac{6.626 \times 10^{-34}}{1.145 \times 10^{-24}}\ \text{m} = 5.79 \times 10^{-10}\ \text{m}
\]

The position uncertainty is about 0.6 nm — larger than a typical atom. Even with excellent momentum knowledge, we cannot localize the electron to a point; this is why chemists describe electrons by probability clouds (orbitals) rather than by coordinates along a path.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| Electrons are either waves or particles. | They are both: which description you use depends on the experiment, not on the electron. |
| The uncertainty principle is a limitation of our measuring tools. | It is a fundamental law of nature; no instrument can beat it. |
| An orbital is an orbit with a definite path. | An orbital is a probability cloud (region of high \(\psi^2\)), with no definite trajectory. |
| \(\psi\) itself is the probability. | \(\psi\) is the wavefunction; \(\psi^2\) is the probability density. |
| \(m_l\) can be larger than \(l\). | \(m_l\) ranges only from \(-l\) to \(+l\); e.g., for \(l = 1\), \(m_l = -1, 0, +1\). |
| All electrons in a shell have the same energy. | Energy differs by subshell (\(l\)) and even orbital; shells are only the coarsest label. |
| The de Broglie wavelength applies only to electrons. | It applies to all moving matter; it is just negligible for large objects. |

## Quick Review

1. Write the de Broglie equation and state which quantity makes an electron's wavelength significant.
2. What does the uncertainty principle say about an electron's position and momentum?
3. What is the physical meaning of \(\psi^2\)?
4. List the four quantum numbers and what each describes.
5. How many p orbitals are there in a shell, and what values of \(m_l\) do they have?
6. Why can't an electron be confined inside the nucleus?

<details>
<summary>Show answers</summary>

1. \(\lambda = h/(mv)\); the electron's tiny mass (\(9.11 \times 10^{-31}\ \text{kg}\)) makes its wavelength atomic-scale, unlike macroscopic objects.
2. The product of position uncertainty and momentum uncertainty is at least \(h/(4\pi)\); precise position knowledge destroys momentum knowledge, so electrons have no definite trajectories.
3. It is the probability density — the likelihood of finding the electron per unit volume at each point in space.
4. \(n\) (principal, shell), \(l\) (angular momentum, subshell shape), \(m_l\) (magnetic, orientation), \(m_s\) (spin, \(\pm 1/2\)).
5. Three p orbitals per shell, with \(m_l = -1, 0, +1\) (oriented along x, y, and z axes).
6. Confining the electron to a tiny region (small \(\Delta x\)) would force an enormous, uncertain momentum, giving the electron huge energy — so the electron "prefers" to spread out around the nucleus instead.

</details>

## Related Topics

- Previous: [The Bohr Model](02-the-bohr-model.md)
- Next: [Electronic Structure of Atoms (Electron Configurations)](04-electronic-structure-of-atoms-electron-configurations.md)
- Related: [Electromagnetic Energy](01-electromagnetic-energy.md), [Periodic Variations in Element Properties](05-periodic-variations-in-element-properties.md), [Chapter 3 overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
