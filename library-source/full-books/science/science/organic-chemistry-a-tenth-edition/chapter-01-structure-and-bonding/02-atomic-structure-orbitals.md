---
title: "Atomic Structure: Orbitals"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "1: Structure and Bonding"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "atomic-structure-orbitals"
  - "science"
status: "complete"
---

# Atomic Structure: Orbitals

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 1: Structure and Bonding](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

If the previous topic described *where* the atom's mass lives, this one describes *where its electrons live* — and electrons do not behave like tiny planets. In the 1920s, physicists showed that an electron is both a particle and a wave, and its position can never be pinned down exactly. Instead, we describe electrons with **orbitals**: regions of space where an electron is most likely to be found.

An orbital is not a path — it is a probability map. Orbital sizes, shapes, and energies are fixed by a set of **quantum numbers**, and those shapes are the direct ancestors of the covalent bonds in every organic molecule. This topic focuses on the orbitals that matter most for organic chemistry: carbon's 1s, 2s, and 2p orbitals.

## Why This Matters

Almost everything in this book traces back to orbital shape.

- **Bonding is orbital overlap.** When two atoms bond, their orbitals merge; directional p orbitals (vs. spherical s orbitals) explain why bonds form at specific angles.
- **Hybridization is orbital mixing.** Later this chapter, carbon's 2s and 2p orbitals mix into hybrids pointing at a tetrahedron's corners — the source of methane's 109.5° bond angles.
- **Spectroscopy reads orbital energies:** the gaps between orbitals are exactly what ultraviolet and visible spectroscopy measure.
- **Periodic trends:** orbital size explains why atoms grow larger down a column of the periodic table.

## Core Concepts

### Electrons as waves: the de Broglie idea

In 1924, Louis de Broglie proposed that any moving particle has a wavelength. For a particle of mass \(m\) moving at speed \(v\), the wavelength \(\lambda\) is:

\[
\lambda = \frac{h}{mv}
\]

where \(h = 6.626 \times 10^{-34}\ \text{J·s}\) is Planck's constant. A baseball's wavelength is undetectably tiny, but an electron's is comparable to atomic dimensions — electron waves physically fit inside atoms, and this wave behavior governs where electrons settle.

### Quantum numbers: the atom's address system

Four quantum numbers fully describe an electron in an atom:

- **Principal quantum number \(n\)** (1, 2, 3, …): sets the size and energy of the orbital. Larger \(n\) = bigger orbital, higher energy, farther from the nucleus.
- **Angular momentum quantum number \(\ell\)** (0 to \(n - 1\)): sets the shape. \(\ell = 0\) is an **s orbital** (spherical), \(\ell = 1\) is a **p orbital** (dumbbell), \(\ell = 2\) is a **d orbital** (cloverleaf).
- **Magnetic quantum number \(m_\ell\)** (\(-\ell\) to \(+\ell\)): sets the orientation in space — for \(\ell = 1\), three p orbitals \(p_x, p_y, p_z\) point along the three axes.
- **Spin quantum number \(m_s\)** (\(+\frac{1}{2}\) or \(-\frac{1}{2}\)): the electron's intrinsic "spin," up or down.

A specific orbital is named by its \(n\) and \(\ell\): 1s, 2s, 2p, 3s, 3p, 3d, and so on.

### Orbital shapes and nodes

The shapes matter because they become bonds:

- **s orbitals** are spheres centered on the nucleus: a 1s is small, a 2s larger (with a spherical **node** inside — a shell where the probability of finding the electron is zero).
- **p orbitals** are dumbbells: two lobes on opposite sides of the nucleus along the x, y, or z axis, with the nucleus at a **node** — a plane of zero probability between the lobes. Each p orbital holds two electrons.
- **d orbitals** have four-lobed cloverleaf shapes (five orientations), which matter for transition metals but rarely for carbon chemistry.

A useful pattern: the number of nodes in an orbital equals \(n - 1\). The 1s has zero nodes; the 2s has one (spherical); each 2p has one (planar).

### Orbital energies in hydrogen

For a hydrogen atom — one proton, one electron — the energy of an orbital depends only on \(n\):

\[
E_n = -R_H \frac{1}{n^2}
\]

where \(R_H = 2.18 \times 10^{-18}\ \text{J}\) is the Rydberg constant. The negative sign means the electron is bound — energy must be added to remove it; the 1s orbital (\(n = 1\)) is the lowest-energy "ground state."

For multi-electron atoms like carbon, orbital energies also depend on \(\ell\) (2p is higher in energy than 2s), because inner electrons shield the outer ones from the full nuclear charge. The next topic uses this **energy ordering** to write configurations.

## ELI-10: Explain Like I'm 10

> An electron is like a bumblebee around a flower: you can't say where it is at any second, but you can map where it visits most. An orbital is that map — a fuzzy cloud of where the electron probably is. Some clouds are round like a balloon (s orbitals); some are two balloons tied together (p orbitals).

## High-Yield Points

- An orbital is a probability region, not a path; electrons are waves, not orbiting particles.
- Four quantum numbers — \(n, \ell, m_\ell, m_s\) — fully specify an electron.
- \(\ell = 0\) → s (sphere); \(\ell = 1\) → p (three dumbbells along x, y, z); \(\ell = 2\) → d (cloverleaf).
- Each orbital holds **two** electrons max (opposite spins) — Pauli exclusion.
- Nodes = \(n - 1\); every p orbital has a node at the nucleus.
- Hydrogen orbital energy depends only on \(n\): \(E_n = -R_H/n^2\).
- In multi-electron atoms, energy rises with \(n\) and \(\ell\): \(1s < 2s < 2p < 3s < 3p \dots\)
- Organic chemistry is dominated by s and p orbitals; d and f orbitals rarely participate in carbon bonding.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| orbital | A region of space where an electron is most likely to be found | The building block of every covalent bond |
| quantum number | One of four numbers (\(n\), \(\ell\), \(m_\ell\), \(m_s\)) describing an electron's state | The "address" that distinguishes every electron in an atom |
| s orbital | Spherical orbital with \(\ell = 0\) | The lowest-energy orbital; overlaps end-on in sigma bonds |
| p orbital | Dumbbell-shaped orbital with \(\ell = 1\), oriented along an axis | Directional orbitals that form the second bond in double/triple bonds |
| node | A region where the probability of finding an electron is zero | Sets orbital shape and energy; p orbitals have a node at the nucleus |
| de Broglie wavelength | The wavelength associated with a moving particle, \(\lambda = h/(mv)\) | Explains why electron waves, not particle paths, describe atoms |
| Rydberg constant (\(R_H\)) | \(2.18 \times 10^{-18}\) J; scale of hydrogen orbital energies | Gives the energy formula \(E_n = -R_H/n^2\) used in spectroscopy |
| Pauli exclusion principle | No two electrons in an atom can have all four quantum numbers identical | Caps every orbital at two electrons, with opposite spins |

## How It Works / Step-by-Step Process

To name and describe any orbital:

1. Read off \(n\) from the number in the orbital name (1s → \(n = 1\)).
2. Read off \(\ell\) from the letter (s → 0; p → 1; d → 2) and check it is less than \(n\).
3. Count orientations: \(2\ell + 1\) orbitals of that type (p gives 3).
4. Count nodes: \(n - 1\).
5. Capacity: two electrons per orbital, opposite spins.

## Worked Examples

### Example 1: How many nodes does a 3p orbital have?

The formula before substitution:

\[
\text{nodes} = n - 1
\]

Substituting \(n = 3\):

\[
\text{nodes} = 3 - 1 = 2
\]

A 3p orbital has two nodes: one planar node through the nucleus (like every p orbital) and one spherical node; its lobes are also larger than a 2p orbital's because \(n\) is bigger.

### Example 2: Energy of an electron in the 2s orbital of hydrogen

The formula before substitution:

\[
E_n = -R_H \frac{1}{n^2}
\]

Substituting \(R_H = 2.18 \times 10^{-18}\ \text{J}\) and \(n = 2\):

\[
E_2 = -(2.18 \times 10^{-18}\ \text{J}) \times \frac{1}{2^2} = -(2.18 \times 10^{-18}\ \text{J}) \times \frac{1}{4} = -5.45 \times 10^{-19}\ \text{J}
\]

Compared with the ground state \(E_1 = -2.18 \times 10^{-18}\ \text{J}\), the 2s electron is higher in energy (less negative, less tightly bound). Excitation from 1s to 2s costs:

\[
\Delta E = E_2 - E_1 = (-5.45 \times 10^{-19}\ \text{J}) - (-2.18 \times 10^{-18}\ \text{J}) = 1.64 \times 10^{-18}\ \text{J}
\]

This is exactly the energy a photon must carry to be absorbed — the principle behind all atomic spectroscopy.

### Example 3: How many orbitals are in the second shell?

For \(n = 2\), \(\ell\) can be 0 or 1. Orbitals of each type: \(2\ell + 1\):

\[
\text{s orbitals: } 2(0) + 1 = 1
\]

\[
\text{p orbitals: } 2(1) + 1 = 3
\]

Total in the second shell: \(1 + 3 = 4\) orbitals, each holding two electrons, so the shell caps at 8 — the basis of the "octet" you will meet in Lewis structures.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "An orbital is a fixed orbit like a planet's path." | An orbital is a probability cloud, not a trajectory; the electron can be anywhere in it. |
| "s and p orbitals have the same shape." | s orbitals are spheres; p orbitals are dumbbells with a node at the nucleus. |
| "2p is bigger than 1s, so 2p is closer to the nucleus." | Bigger \(n\) means *farther* from the nucleus and *higher* energy, not closer. |
| "Each p orbital can hold 6 electrons." | Each *orbital* holds 2 electrons; the three p orbitals together hold 6. |
| "All electrons in an atom can have identical quantum numbers." | Pauli's exclusion principle forbids it — two electrons share an orbital only with opposite spins. |
| "The electron orbits the nucleus like the Moon orbits Earth." | Electrons are waves with smeared-out positions; classical orbits fail to describe them — that was the point of quantum mechanics. |

## Quick Review

1. What physical quantity does an orbital represent?
2. List the four quantum numbers and the property each describes.
3. How many nodes does a 2p orbital have? A 3s orbital?
4. How many electrons can the three 2p orbitals of carbon hold in total?
5. Calculate the energy of an electron in the \(n = 3\) level of hydrogen using \(E_n = -R_H/n^2\).
6. Why can an electron's wave nature be ignored for a baseball but not for an electron?

<details>
<summary>Show answers</summary>

1. An orbital is a region of space where an electron is most likely to be found — a probability distribution, not a path.
2. \(n\) (size/energy), \(\ell\) (shape), \(m_\ell\) (orientation), \(m_s\) (spin).
3. A 2p orbital has \(n - 1 = 1\) node; a 3s orbital has \(3 - 1 = 2\) nodes.
4. Six — two per orbital × three orbitals.
5. \(E_3 = -(2.18 \times 10^{-18}\ \text{J}) \times (1/9) = -2.42 \times 10^{-19}\ \text{J}\).
6. The de Broglie wavelength \(\lambda = h/(mv)\) is inversely proportional to mass: a baseball's wavelength is unimaginably small, while an electron's is comparable to atomic size, so wave behavior dominates inside atoms.

</details>

## Related Topics

- Previous: [Atomic Structure: The Nucleus](01-atomic-structure-the-nucleus.md)
- Next: [Atomic Structure: Electron Configurations](03-atomic-structure-electron-configurations.md)
- Related: [Describing Chemical Bonds: Valence Bond Theory](05-describing-chemical-bonds-valence-bond-theory.md)
- Related: [Structure and Bonding chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants used are standard values: \(h = 6.626 \times 10^{-34}\ \text{J·s}\), \(R_H = 2.18 \times 10^{-18}\ \text{J}\).
- Last updated: 2026-08-16
