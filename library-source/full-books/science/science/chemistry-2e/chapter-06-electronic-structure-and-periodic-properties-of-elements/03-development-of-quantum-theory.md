---
title: "Development of Quantum Theory"
subject: "Science"
book: "Chemistry 2e"
chapter: "6: Electronic Structure and Periodic Properties of Elements"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "development-of-quantum-theory"
  - "science"
status: "complete"
---

# Development of Quantum Theory

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 6: Electronic Structure and Periodic Properties of Elements](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

The Bohr model worked for hydrogen, but quantized orbits were assumed rather than explained, and the model collapsed for any atom with more than one electron. Between 1924 and 1926, new ideas replaced Bohr's fixed orbits with something stranger and far more successful. Louis de Broglie proposed that electrons — like photons — behave as waves. Werner Heisenberg showed that an electron's position and momentum cannot both be known precisely. Erwin Schrödinger wrote the equation whose solutions, called **wave functions**, describe electrons as probability clouds rather than points on tracks. This topic walks through those developments and the **quantum numbers** that grow out of them — the toolkit for electron configurations.

## Why This Matters

The quantum-mechanical model is the one chemists actually use. Every orbital diagram, electron configuration, and periodic trend in this course is shorthand for a wave function. Quantum numbers label every electron in any atom uniquely — the foundation of the Pauli exclusion principle and, ultimately, of why matter has structure. The same physics powers modern technology — the uncertainty principle constrains electron behavior in transistors, and Schrödinger's equation underlies semiconductor design, lasers, and MRI. Understanding wave–particle duality also clarifies why chemistry is probabilistic: we can say where an electron is likely to be, not exactly where it is.

## Core Concepts

### Matter waves: de Broglie's hypothesis

If light — long classified as a wave — comes in particle-like packets, reasoned Louis de Broglie, perhaps particles do too. He proposed that any moving particle has a wavelength:

\[\lambda = \frac{h}{mv} = \frac{h}{p}\]

where \(m\) is mass, \(v\) is speed, and \(p = mv\) is momentum. A macroscopic object's wavelength is absurdly small (a baseball's is about \(10^{-34}\ \text{m}\)), which is why we never notice matter waves; an electron's wavelength, however, is comparable to atomic dimensions. De Broglie then explained Bohr's quantized orbits: a stable orbit is one where the electron's wave closes on itself like a standing wave on a guitar string, with an integer number of wavelengths around the circumference (\(2\pi r = n\lambda\)). Waves that don't close cancel out — so only certain orbits survive.

### The Heisenberg uncertainty principle

If an electron is a wave, it has no single well-defined position. Heisenberg quantified the trade-off: the uncertainties in position (\(\Delta x\)) and momentum (\(\Delta p\)) cannot both be made arbitrarily small:

\[\Delta x \cdot \Delta p \geq \frac{h}{4\pi}\]

This is a property of nature, not a limitation of instruments: locating an electron precisely forces a large, indefinite momentum — exactly why Bohr's neat circular orbits are physically impossible. It also explains why atoms don't collapse: squeezing an electron into a smaller space forces its kinetic energy to grow, resisting compression.

### The Schrödinger equation and wave functions

Schrödinger's equation determines the **wave function** \(\psi\) (psi) of a quantum system; solving it for an atom's electron yields allowed wave functions, each with an associated energy. The physically meaningful quantity is \(\psi^2\), the **probability density**: how likely the electron is to be found in each tiny volume. An **orbital** is the region of high probability (usually drawn at the 90–95% surface). Orbitals are not paths — they are maps of likelihood, studded with **nodes**, surfaces where \(\psi^2 = 0\); more nodes generally mean higher energy.

### Quantum numbers: the address system for electrons

Each wave function is labeled by three quantum numbers, and the electron carries a fourth:

- **Principal quantum number \(n\)** = 1, 2, 3, ... — the shell; larger \(n\) means higher energy and greater average distance from the nucleus.
- **Angular momentum quantum number \(\ell\)** = 0, 1, ..., \(n-1\) — the subshell: 0 = s, 1 = p, 2 = d, 3 = f. It sets orbital shape and (mostly) energy.
- **Magnetic quantum number \(m_\ell\)** = \(-\ell, \dots, 0, \dots, +\ell\) — the orbital's orientation; \(2\ell + 1\) orbitals per subshell.
- **Spin quantum number \(m_s\)** = \(+\frac{1}{2}\) or \(-\frac{1}{2}\) — the electron's intrinsic spin.

The rules yield the familiar census: s has 1 orbital, p 3, d 5, f 7. A shell with principal number \(n\) contains \(n^2\) orbitals and holds \(2n^2\) electrons maximum.

### Orbital shapes and sizes

Shapes follow the quantum numbers: **s orbitals** are spheres growing larger with \(n\); **p orbitals** are dumbbells along the x-, y-, and z-axes (three per subshell); **d orbitals** are four-lobed (cloverleaf) shapes plus one with a donut (five); **f orbitals** are more complex still (seven). Orbital size grows with \(n\), which matters for periodic trends: outer electrons in higher shells sit farther out and are more easily removed.

## ELI-10: Explain Like I'm 10

Imagine you can't know exactly where a spinning toy top is AND how fast it's spinning — knowing one perfectly makes the other fuzzy. That's the Heisenberg rule for electrons. Instead of picturing an electron as a marble on a track, think of a fuzzy cloud of "maybe here, maybe there" — thick where you'd probably find it, thin where you wouldn't. The cloud has a shape (s, p, d, or f), a size (n), and a direction (mℓ), and the electron has a tiny built-in spin. Four numbers describe every electron in the universe, like an address that never repeats.

## High-Yield Points

- De Broglie wavelength: \(\lambda = \frac{h}{mv}\) — electrons behave as waves; stable orbits = standing waves (\(2\pi r = n\lambda\)).
- Heisenberg: \(\Delta x \cdot \Delta p \geq \frac{h}{4\pi}\) — position and momentum cannot both be precise.
- \(\psi^2\) is probability density; an orbital is a high-probability region, not a path; nodes are zero-probability surfaces.
- Quantum numbers: \(n\) = 1, 2, 3...; \(\ell\) = 0...(n−1) (s, p, d, f); \(m_\ell\) = −ℓ...+ℓ; \(m_s\) = ±½.
- Orbitals per subshell = \(2\ell + 1\) (s:1, p:3, d:5, f:7); per shell = \(n^2\); electrons per shell = \(2n^2\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Wave function (\(\psi\)) | Mathematical description of a quantum system; \(\psi^2\) gives probability density | The fundamental object of quantum mechanics; orbitals derive from it |
| Orbital | A high-probability region for an electron, labeled by \(n\), \(\ell\), \(m_\ell\) | The modern replacement for Bohr's orbits; the shapes bonding depends on |
| Quantum numbers | \((n, \ell, m_\ell, m_s)\) labeling every electron | Unique "address" per electron; basis of the Pauli exclusion principle |

## Worked Examples

### Worked Example 1: The electron as a standing wave in hydrogen

**Problem.** The electron in the \(n = 1\) orbit of hydrogen moves at about \(2.19 \times 10^{6}\ \text{m/s}\). Calculate its de Broglie wavelength and show it equals the orbit's circumference.

**Strategy.** Write the formula first, then substitute \(m_e = 9.109 \times 10^{-31}\ \text{kg}\) and \(h = 6.626 \times 10^{-34}\ \text{J·s}\):

\[\lambda = \frac{h}{mv} = \frac{6.626 \times 10^{-34}\ \text{J·s}}{(9.109 \times 10^{-31}\ \text{kg})(2.19 \times 10^{6}\ \text{m/s})} = \frac{6.626 \times 10^{-34}\ \text{J·s}}{1.995 \times 10^{-24}\ \text{kg·m/s}} = 3.32 \times 10^{-10}\ \text{m}\]

**Dimensional analysis.** \(\frac{\text{J·s}}{\text{kg·m/s}} = \frac{(\text{kg·m}^2/\text{s}^2)(\text{s})}{\text{kg·m/s}} = \text{m}\). Compare with the circumference, using the Bohr radius \(a_0 = 5.29 \times 10^{-11}\ \text{m}\):

\[2\pi r = 2\pi (5.29 \times 10^{-11}\ \text{m}) = 3.32 \times 10^{-10}\ \text{m}\]

**Interpretation.** The wavelength exactly matches the circumference — one full wave closes on itself, which is why the \(n = 1\) orbit is stable.

### Worked Example 2: Counting orbitals with the quantum-number rules

**Problem.** How many orbitals are in the \(n = 3\) shell? How many electrons can it hold?

**Strategy.** Rules: \(\ell\) runs 0 to \(n-1\); each subshell has \(2\ell+1\) orbitals; each orbital holds 2 electrons. For \(n = 3\):

- \(\ell = 0\) (3s): \(2(0)+1 = 1\) orbital
- \(\ell = 1\) (3p): \(2(1)+1 = 3\) orbitals
- \(\ell = 2\) (3d): \(2(2)+1 = 5\) orbitals

Total: \(1 + 3 + 5 = 9 = n^2\) orbitals; maximum \(9 \times 2 = 18 = 2n^2\) electrons — both routes agree. **Sanity check.** Period 3 has only 8 elements because 3s and 3p fill there; 3d (10 electrons) fills later, in period 4 — a preview of the next topic.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Orbital | Orbit | An orbital is a probability region with no defined path; an orbit is a classical trajectory (Bohr) |
| Uncertainty (Heisenberg) | Measurement error | Heisenberg's limit is a law of nature, not a problem with instruments |
| Electron spin | Electron literally spinning | \(m_s\) is an intrinsic quantum property with two values, not classical rotation |
| Wave function \(\psi\) | Probability density \(\psi^2\) | \(\psi\) can be positive or negative; only \(\psi^2\) is a probability |
| \(n\) = shell number | Number of orbitals in shell | Shell \(n\) contains \(n^2\) orbitals and \(2n^2\) electrons — the count is NOT \(n\) |

## Quick Review

1. State de Broglie's hypothesis and the equation for a particle's wavelength.
2. Why does the uncertainty principle rule out Bohr's circular orbits?
3. What physical meaning does \(\psi^2\) carry?
4. List the allowed \(\ell\) and \(m_\ell\) values for \(n = 4\). How many orbitals and electrons does that shell hold?
<details>
<summary>Show answers</summary>

1. Moving particles have wave character: \(\lambda = \frac{h}{mv}\). For electrons the wavelength is atomic-sized; for macroscopic objects it is negligible.
2. A circular orbit requires a definite position and momentum simultaneously (precise radius and speed). The uncertainty principle forbids knowing both, so electrons cannot travel on well-defined tracks.
3. \(\psi^2\) is the probability density — how likely the electron is to be found in a given small volume; an orbital is a region (usually the 90–95% surface) where it is very likely found.
4. \(n = 4\): \(\ell = 0, 1, 2, 3\) (4s, 4p, 4d, 4f); \(m_\ell\) ranges −ℓ to +ℓ. Orbitals: \(1 + 3 + 5 + 7 = 16 = n^2\); electrons: \(16 \times 2 = 32 = 2n^2\).

</details>

## Related Topics

- Previous: [The Bohr Model](02-the-bohr-model.md)
- Next: [Electronic Structure of Atoms (Electron Configurations)](04-electronic-structure-of-atoms-electron-configurations.md)
- Related: [Chapter 6: Electronic Structure and Periodic Properties of Elements overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Physical constants (h, mₑ, Bohr radius a₀) and the Bohr n = 1 electron speed (≈2.19 × 10⁶ m/s) are standard textbook values; verify against current sources before use in assessments.
- Last updated: 2026-08-16
