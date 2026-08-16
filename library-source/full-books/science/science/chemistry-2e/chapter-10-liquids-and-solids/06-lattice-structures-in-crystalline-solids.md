---
title: "Lattice Structures in Crystalline Solids"
subject: "Science"
book: "Chemistry 2e"
chapter: "10: Liquids and Solids"
topic_number: "6"
source: "chemistry-2e.md"
tags:
  - "lattice-structures-in-crystalline-solids"
  - "science"
status: "complete"
---

# Lattice Structures in Crystalline Solids

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 10: Liquids and Solids](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

A crystalline solid is built from a repeating pattern of particles, and the smallest repeating unit of that pattern is the **unit cell**. Stacking unit cells in three dimensions reproduces the entire crystal, the way tiling one bathroom tile over and over fills a room. Where atoms sit inside a unit cell, how many belong to each cell, and how they touch determine properties such as density — the foundation of the structural view of metals, salts, and semiconductors.

This topic focuses on the **cubic unit cells**: primitive cubic (PC), body-centered cubic (BCC), and face-centered cubic (FCC). Counting atoms per cell, relating edge length to atomic radius, and computing density from unit-cell data turn abstract geometry into quantitative chemistry you can calculate by hand.

## Why This Matters

The unit cell is where macroscopic measurements meet atomic structure. If you know a metal's lattice type and either its density or its atomic radius, you can calculate the other — no microscope required. X-ray diffraction studies rely on the same lattice geometry. In materials science, atomic packing controls strength, ductility, and alloy formation; in pharmacy, a drug's crystal structure affects its stability and how it dissolves. Lattice geometry also explains why some metals are denser than others with similar atomic masses: face-centered metals pack their atoms more tightly than body-centered ones.

## Core Concepts

### The three cubic unit cells

In a **primitive cubic (PC)** cell, one atom sits at each of the eight corners, and atoms touch along the cube's edges. In a **body-centered cubic (BCC)** cell, atoms sit at the eight corners plus one atom in the very center; the center atom touches each corner atom along the cube's body diagonal. In a **face-centered cubic (FCC)** cell, atoms sit at the eight corners plus one atom centered on each of the six faces; atoms touch along the face diagonals.

### Counting atoms per unit cell: shared atoms count as fractions

Corner atoms belong to eight cells that meet at that corner, so each contributes only \(1/8\) of an atom to one cell. A face-centered atom is shared by two cells, so it contributes \(1/2\). A body-centered atom lies entirely inside one cell, so it contributes 1 full atom. Counting gives:

\[
\text{PC: } 8\times\tfrac{1}{8}=1 \text{ atom per cell} \qquad
\text{BCC: } 8\times\tfrac{1}{8}+1=2 \text{ atoms per cell} \qquad
\text{FCC: } 8\times\tfrac{1}{8}+6\times\tfrac{1}{2}=4 \text{ atoms per cell}
\]

The **coordination number** (number of nearest neighbors) is 6 for PC, 8 for BCC, and 12 for FCC — higher coordination means each atom touches more neighbors, which goes hand in hand with tighter packing.

### Relating edge length to atomic radius

The geometry of touching atoms fixes the edge length \(a\) in terms of the atomic radius \(r\):

- PC: atoms touch along the edge, so \(a=2r\).
- BCC: atoms touch along the body diagonal, which is \(\sqrt{3}\,a = 4r\), so \(a = 4r/\sqrt{3}\).
- FCC: atoms touch along the face diagonal, which is \(\sqrt{2}\,a = 4r\), so \(a = 2\sqrt{2}\,r\).

These relations let you convert a measured edge length into an atomic radius, or vice versa. They are the bridge between X-ray data and atomic size.

### Packing efficiency

The fraction of a unit cell actually occupied by atoms is the packing efficiency: about 52% for PC, 68% for BCC, and 74% for FCC. Face-centered metals pack most efficiently, which is why FCC metals such as copper and gold are relatively dense for their atomic masses.

### Density from unit-cell data

The mass of the atoms in one cell and the cell volume are both known, so density follows directly. With \(Z\) atoms per cell, molar mass \(M\), Avogadro's number \(N_A\), and edge length \(a\):

\[
\rho = \frac{Z \times M}{N_A \times a^3}
\]

\(Z \times M\) is the mass per cell in grams and \(a^3\) is the cell volume in cm³, so \(\rho\) comes out in g/cm³. This equation is the workhorse calculation of the topic.

### X-ray diffraction probes the lattice

When X-rays strike a crystal, they are scattered by the regularly spaced planes of atoms. Constructive interference occurs only at specific angles given by Bragg's law, \(n\lambda = 2d\sin\theta\), where \(\lambda\) is the X-ray wavelength, \(d\) the plane spacing, \(\theta\) the glancing angle, and \(n\) a small integer. Measured \(d\) values, combined with the geometry above, reveal the unit cell type and edge length.

## ELI-10: Explain Like I'm 10

> A crystal is like a wall built from identical bricks, and the unit cell is the design of one brick. If you know how the bricks touch and how heavy one brick is, you can figure out how much the whole wall weighs per box of space. Some patterns pack bricks tighter, so the wall gets heavier even when each brick is the same.

## High-Yield Points

- Cubic unit cells: PC (1 atom/cell, CN 6), BCC (2, CN 8), FCC (4, CN 12).
- Corner atoms contribute \(1/8\), face atoms \(1/2\), body-centered atoms 1.
- Edge–radius relations: PC \(a=2r\); BCC \(a=4r/\sqrt{3}\); FCC \(a=2\sqrt{2}\,r\).
- Packing efficiency: PC ≈ 52%, BCC ≈ 68%, FCC ≈ 74%.
- Density: \(\rho = ZM/(N_A a^3)\) with \(a\) in cm and \(M\) in g/mol → g/cm³.
- Convert pm or Å to cm before calculating density.
- Bragg's law \(n\lambda = 2d\sin\theta\) links diffraction angles to plane spacing.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| unit cell | Smallest repeating unit of a crystal lattice | Stacking unit cells reproduces the whole crystal |
| primitive cubic (PC) | Cube with atoms only at the eight corners | 1 atom/cell; loosest packing (52%) |
| body-centered cubic (BCC) | Corner atoms plus one central atom | 2 atoms/cell; 68% packing; e.g., iron |
| face-centered cubic (FCC) | Corner atoms plus atoms on each face | 4 atoms/cell; 74% packing; e.g., copper |
| coordination number | Number of nearest neighbors around one atom | Rises with packing density: 6, 8, 12 |
| packing efficiency | Fraction of cell volume actually filled by atoms | Explains density differences among metals |
| edge length \(a\) | Length of one cube edge of the unit cell | Links atomic radius to cell volume and density |
| Bragg's law | \(n\lambda = 2d\sin\theta\): diffraction condition | How X-ray data reveal lattice type and spacing |

## How It Works / Step-by-Step Process: Density from a Unit Cell

1. Identify the lattice type (PC, BCC, or FCC).
2. Determine \(Z\) by counting corners, faces, and body positions.
3. Convert the edge length to cm (1 pm = 10⁻¹⁰ cm; 1 Å = 10⁻⁸ cm).
4. Substitute into \(\rho = ZM/(N_A a^3)\) and cancel units to get g/cm³.
5. Sanity-check: metal densities are typically a few g/cm³.

## Worked Examples

### Example 1: How many atoms are in a face-centered cubic cell?

A metal crystallizes in the FCC structure. Count the atoms belonging to one unit cell.

**Solution.** There are 8 corner atoms, each shared by 8 cells, contributing \(8 \times \tfrac{1}{8} = 1\) atom. There are 6 face atoms, each shared by 2 cells, contributing \(6 \times \tfrac{1}{2} = 3\) atoms. Total: \(1 + 3 = 4\) atoms per FCC unit cell.

### Example 2: Density of copper from its atomic radius

Copper crystallizes in the FCC structure with an atomic radius of 128 pm and molar mass 63.55 g/mol. Calculate its density.

**Solution.** First convert the radius to cm: \(r = 128\ \text{pm} = 1.28 \times 10^{-8}\ \text{cm}\). For FCC, the edge length is \(a = 2\sqrt{2}\,r\):

\[
a = 2\sqrt{2} \times 1.28\times10^{-8}\ \text{cm} = 3.62\times10^{-8}\ \text{cm}
\]

The cell volume is \(a^3 = (3.62\times10^{-8}\ \text{cm})^3 = 4.74\times10^{-23}\ \text{cm}^3\). With \(Z = 4\) atoms per FCC cell and \(N_A = 6.022\times10^{23}\ \text{mol}^{-1}\):

\[
\rho = \frac{4 \times 63.55\ \text{g mol}^{-1}}{6.022\times10^{23}\ \text{mol}^{-1} \times 4.74\times10^{-23}\ \text{cm}^3}
= \frac{254.2\ \text{g}}{28.55\ \text{cm}^3}
= 8.90\ \text{g cm}^{-3}
\]

The calculated value of 8.90 g/cm³ agrees closely with the measured density of copper, about 8.96 g/cm³. The small difference reflects the idealized assumption of hard spheres touching perfectly.

### Example 3: Finding the atomic radius of iron from its density

Iron crystallizes in the BCC structure with a density of 7.87 g/cm³ and molar mass 55.85 g/mol. Find its atomic radius.

**Solution.** Rearrange the density formula to solve for \(a^3\):

\[
a^3 = \frac{Z \times M}{\rho \times N_A} = \frac{2 \times 55.85\ \text{g mol}^{-1}}{7.87\ \text{g cm}^{-3} \times 6.022\times10^{23}\ \text{mol}^{-1}}
= 2.36\times10^{-23}\ \text{cm}^3
\]

Taking the cube root gives \(a = 287\ \text{pm}\). For BCC, \(a = 4r/\sqrt{3}\), so:

\[
r = \frac{a\sqrt{3}}{4} = \frac{287\ \text{pm} \times 1.732}{4} = 124\ \text{pm}
\]

This agrees with tabulated values for iron (about 126 pm) — the unit-cell model reproduces atomic sizes from bulk density alone.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "Atoms in a unit cell" | Atoms shown in a drawing of a unit cell | Drawn corner/face atoms are shared with neighboring cells; only fractions belong to one cell |
| The body diagonal (BCC) | The face diagonal (FCC) | Body diagonal \(= \sqrt{3}a = 4r\); face diagonal \(= \sqrt{2}a = 4r\) — mixing them gives wrong radii |
| BCC and FCC "2 vs 4 atoms" | Which is denser | FCC packs more atoms per cell (74% vs 68%), so FCC metals are denser at equal atomic mass and radius |
| pm or Å in the density formula | cm | \(a^3\) must be in cm³ for \(\rho\) in g/cm³; convert first (128 pm → \(1.28\times10^{-8}\) cm) |
| Coordination number | Number of atoms per cell | CN counts nearest neighbors (6, 8, 12); atoms per cell counts ownership fractions (1, 2, 4) |

## Quick Review

1. How many atoms are in one BCC unit cell? Show the counting.
2. Write the density equation for a unit cell and define every symbol.
3. If an FCC metal has edge length \(a\), what is its atomic radius in terms of \(a\)?
4. Why must you convert pm to cm before using the density formula?
5. Which packs more efficiently, BCC or FCC? How does that show up in density?
6. What does Bragg's law relate, and what does it allow you to measure?

<details>
<summary>Show answers</summary>

1. \(8 \times \tfrac{1}{8} + 1 = 2\) atoms: eight shared corners plus one full body-centered atom.
2. \(\rho = ZM/(N_A a^3)\): \(Z\) atoms per cell, \(M\) molar mass, \(N_A\) Avogadro's number, \(a\) edge length.
3. \(r = a/(2\sqrt{2})\), from \(a = 2\sqrt{2}\,r\).
4. The formula needs \(a^3\) in cm³ so the result is in g/cm³; pm or Å would give nonsensical units.
5. FCC (74%) packs more efficiently than BCC (68%), so at equal atomic mass and radius, an FCC metal is denser.
6. Bragg's law \(n\lambda = 2d\sin\theta\) relates X-ray wavelength, plane spacing, and diffraction angle; it measures the spacing between atomic planes in a crystal.

</details>

## Related Topics

- Previous: [The Solid State of Matter](05-the-solid-state-of-matter.md)
- Next: End of chapter
- Related: [Liquids and Solids chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
