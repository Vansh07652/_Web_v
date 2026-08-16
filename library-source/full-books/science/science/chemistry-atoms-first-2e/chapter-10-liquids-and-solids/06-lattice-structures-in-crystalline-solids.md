---
title: "Lattice Structures in Crystalline Solids"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "10: Liquids and Solids"
topic_number: "6"
source: "chemistry-atoms-first-2e.md"
tags:
  - "lattice-structures-in-crystalline-solids"
  - "science"
status: "complete"
---

# Lattice Structures in Crystalline Solids

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 10: Liquids and Solids](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

A crystal is built from particles arranged in a repeating three-dimensional pattern. That pattern is called a **crystal lattice** — an imaginary grid of points that marks where atoms, ions, or molecules sit — and the smallest piece of the grid that contains all the pattern's information is the **unit cell**. Stacking identical unit cells edge to edge in every direction regenerates the whole crystal, the way a single wallpaper tile regenerates a wall. This topic introduces the three simplest cubic unit cells — **simple cubic (sc)**, **body-centered cubic (bcc)**, and **face-centered cubic (fcc)** — and shows how to count atoms per cell, relate the cell's edge length to the atomic radius, and compute a solid's density from its unit-cell geometry. Most importantly, it explains why knowing a metal's crystal structure lets you predict its density to within a few percent.

## Why This Matters

- **Density prediction from structure alone:** Given the type of unit cell and the atomic radius, you can calculate a metal's density without ever touching a sample — a powerful check on both theory and experiment.
- **Materials design:** Steel's strength depends on which iron lattice (bcc vs. fcc) is present; the difference between the two explains why steel is heat-treated and why some metals are easier to machine than others.
- **Nanotechnology and alloys:** Controlling crystal structure at the unit-cell scale controls properties such as hardness, ductility, and electrical behavior.
- **X-ray crystallography:** The method that "photographs" crystals — including DNA and protein structures — works by reading the lattice spacing these cells define.
- **Exams:** Counting atoms per unit cell, computing edge length from radius, and density calculations are guaranteed-style problems in general chemistry.

## Core Concepts

### The lattice and the unit cell

A **crystal lattice** is a regular 3-D array of points; each point has identical surroundings. The **unit cell** is the smallest parallelepiped (box-shaped region) that repeats to fill space. Real crystals are made of atoms, ions, or molecules placed on or inside these lattice points. For cubic lattices the unit cell is a cube of edge length \(a\).

### The three cubic unit cells

| Unit cell | Particle positions | Atoms per cell | Coordination number | Edge length vs. radius | Packing efficiency |
|---|---|---|---|---|---|
| **Simple cubic (sc)** | 8 corners only | 1 | 6 | \(a = 2r\) | 52.4% |
| **Body-centered cubic (bcc)** | 8 corners + 1 body center | 2 | 8 | \(a = \frac{4r}{\sqrt{3}}\) | 68.0% |
| **Face-centered cubic (fcc)** | 8 corners + 6 face centers | 4 | 12 | \(a = \frac{4r}{\sqrt{2}} = 2\sqrt{2}\,r\) | 74.0% |

### Counting atoms per unit cell

Corner atoms are shared by 8 adjacent cells, so each corner contributes \(1/8\) of an atom. Face-centered atoms are shared by 2 cells, so each contributes \(1/2\). A body-centered atom belongs entirely to its own cell.

- **sc:** \(8 \times \frac{1}{8} = 1\) atom per cell
- **bcc:** \(8 \times \frac{1}{8} + 1 = 2\) atoms per cell
- **fcc:** \(8 \times \frac{1}{8} + 6 \times \frac{1}{2} = 4\) atoms per cell

### From edge length to atomic radius

Because atoms touch along specific directions, geometry links the edge length \(a\) to the atomic radius \(r\):

\[
\text{sc: } a = 2r \qquad \text{bcc: } a = \frac{4r}{\sqrt{3}} \qquad \text{fcc: } a = \frac{4r}{\sqrt{2}} = 2\sqrt{2}\,r
\]

In bcc the atoms touch along the body diagonal (length \(a\sqrt{3}\)), which spans \(4r\); in fcc they touch along a face diagonal (length \(a\sqrt{2}\)), which also spans \(4r\).

### Density from the unit cell

The density of a crystalline solid follows directly from the contents of one cell:

\[
\rho = \frac{Z \times M}{N_A \times a^3}
\]

where \(Z\) is the number of atoms (or formula units) per unit cell, \(M\) is the molar mass, \(N_A\) is Avogadro's number, and \(a^3\) is the volume of the cubic cell. This single equation turns structure into a measurable quantity.

## ELI-10: Explain Like I'm 10

> Think of stacking identical Lego bricks in a giant box: the pattern of studs repeats everywhere, and the smallest brick that shows the full pattern is the unit cell. Counting atoms per cell is like sharing a pizza — a corner slice is shared with seven friends at other tables, so you only get one-eighth of it, while a slice at the exact center is all yours. Once you know how many atoms are in one tiny cell and how big the cell is, you can figure out how heavy the whole crystal is.

## High-Yield Points

- **Unit cell = smallest repeating unit**; stacking cells builds the crystal; cubic cells have edge length \(a\).
- **Corner atom = \(1/8\)**, face atom = \(1/2\), body atom = \(1\): atoms per cell are sc 1, bcc 2, fcc 4.
- **Coordination numbers:** sc 6, bcc 8, fcc 12 (more neighbors = tighter packing).
- **Geometry links \(a\) and \(r\):** \(a = 2r\) (sc), \(a = 4r/\sqrt{3}\) (bcc), \(a = 4r/\sqrt{2}\) (fcc).
- **Packing efficiency:** fcc/hcp 74% is the maximum for equal spheres; bcc 68%; sc 52.4%.
- **Density formula:** \(\rho = \frac{ZM}{N_A a^3}\) — always check units: \(a\) in cm so \(a^3\) is cm³.
- Polonium (sc), iron (bcc), and copper/lead/silver (fcc) are the classic examples.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Crystal lattice | A regular 3-D grid of points marking particle positions | The skeleton of every crystalline solid |
| Unit cell | The smallest repeating unit that builds the lattice | All structure calculations start from its geometry |
| Simple cubic (sc) | Corners only; 1 atom per cell | The easiest cell, but only 52.4% space is filled — rare in metals |
| Body-centered cubic (bcc) | Corners + body center; 2 atoms per cell | Structure of iron at room temperature, chromium, tungsten |
| Face-centered cubic (fcc) | Corners + face centers; 4 atoms per cell | Structure of copper, silver, gold, aluminum, lead |
| Coordination number | Number of nearest neighbors of a particle | Measures packing tightness: sc 6, bcc 8, fcc 12 |
| Packing efficiency | Fraction of cell volume actually occupied by atoms | Explains density differences among similarly sized atoms |
| Avogadro's number \(N_A\) | \(6.022 \times 10^{23}\) particles per mole | Converts per-cell atom counts into per-mole quantities |

## Worked Examples

### Example 1: Counting atoms and coordination numbers

How many atoms are in one unit cell of (a) polonium (sc), (b) iron (bcc), and (c) copper (fcc)? What is the coordination number in each?

**(a) sc:** only the 8 corners, each shared by 8 cells:

\[
Z = 8 \times \frac{1}{8} = 1 \text{ atom per cell}, \qquad \text{CN} = 6
\]

**(b) bcc:** corners plus the body center, which is not shared:

\[
Z = 8 \times \frac{1}{8} + 1 = 2 \text{ atoms per cell}, \qquad \text{CN} = 8
\]

**(c) fcc:** corners plus 6 face centers, each shared by 2 cells:

\[
Z = 8 \times \frac{1}{8} + 6 \times \frac{1}{2} = 4 \text{ atoms per cell}, \qquad \text{CN} = 12
\]

Sanity check: more atoms per cell means more nearest neighbors — the trend 1 → 2 → 4 matches CN 6 → 8 → 12.

### Example 2: Edge length from atomic radius

Copper crystallizes in an fcc lattice with an atomic radius of 128 pm. What is the edge length of its unit cell?

**Step 1 — Write the fcc relationship (formula before substitution):**

\[
a = \frac{4r}{\sqrt{2}} = 2\sqrt{2}\,r
\]

**Step 2 — Substitute \(r = 128\ \text{pm}\):**

\[
a = 2\sqrt{2} \times 128\ \text{pm} = 362\ \text{pm}
\]

**Step 3 — Convert to cm for later use:**

\[
a = 362\ \text{pm} \times \frac{1\ \text{cm}}{10^{10}\ \text{pm}} = 3.62 \times 10^{-8}\ \text{cm}
\]

Dimensional check: pm cancels, leaving cm. The measured edge length of copper is 361.5 pm — the geometric model is accurate to better than 1%.

### Example 3: Density of iron from its unit cell

Iron crystallizes in a bcc lattice with an atomic radius of 126 pm and a molar mass of 55.85 g/mol. Calculate its density.

**Step 1 — Edge length from the bcc geometry:**

\[
a = \frac{4r}{\sqrt{3}} = \frac{4 \times 126\ \text{pm}}{\sqrt{3}} = 291\ \text{pm} = 2.91 \times 10^{-8}\ \text{cm}
\]

**Step 2 — Cell volume:**

\[
a^3 = (2.91 \times 10^{-8}\ \text{cm})^3 = 2.46 \times 10^{-23}\ \text{cm}^3
\]

**Step 3 — Density formula with \(Z = 2\) (bcc):**

\[
\rho = \frac{Z M}{N_A a^3} = \frac{2 \times 55.85\ \text{g mol}^{-1}}{(6.022 \times 10^{23}\ \text{mol}^{-1})(2.46 \times 10^{-23}\ \text{cm}^3)} = 7.54\ \text{g cm}^{-3}
\]

Dimensional check: mol⁻¹ cancels between \(N_A\) and \(M\), leaving g/cm³. The measured density of iron is 7.87 g/cm³; the small gap comes from the idealized model (perfect spheres, no defects) — and that close agreement is exactly why unit-cell calculations are trusted.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Atoms per unit cell | Coordination number | Atoms per cell is a count of whole-atom equivalents (sc 1, bcc 2, fcc 4); coordination number is how many *neighbors* touch each atom (6, 8, 12) |
| Corner atom contribution | Face atom contribution | Corner = \(1/8\) (shared by 8 cells); face = \(1/2\) (shared by 2 cells); body = 1 (unshared) |
| bcc edge length | fcc edge length | bcc atoms touch along the *body* diagonal (\(a = 4r/\sqrt{3}\)); fcc along the *face* diagonal (\(a = 4r/\sqrt{2}\)) — mixing them up inverts the answer |
| Simple cubic | Face-centered cubic | sc is the loosest packing (52.4%); fcc is the tightest cubic packing (74%) — "cubic" alone doesn't tell you which |
| \(a\) in pm | \(a\) in cm | Density requires cm; \(10^{10}\ \text{pm} = 1\ \text{cm}\) — forgetting the conversion changes density by a factor of \(10^{30}\) |
| Lattice point | Atom | A lattice point is a position in the grid; an atom (or ion, or molecule) may sit at it, and some cells contain atoms off the points too |

## Quick Review

1. Why does a corner atom count as only \(1/8\) of an atom in a unit cell, and a face atom as \(1/2\)?
2. List the atoms per unit cell and coordination numbers for sc, bcc, and fcc.
3. A metal crystallizes in a bcc lattice with \(r = 140\ \text{pm}\). Find its edge length \(a\) in pm and in cm.
4. Lead is fcc with an atomic radius of 175 pm and molar mass 207.2 g/mol. Calculate its density and compare with the accepted value of 11.3 g/cm³.
5. Which packs space more efficiently: bcc or fcc? What does that imply about their densities for atoms of the same size and mass?
6. Why must you convert the edge length to cm before using the density formula?

<details>
<summary>Show answers</summary>

1. A corner atom touches 8 adjacent unit cells, so only \(1/8\) of it belongs to any one cell; a face atom touches 2 cells, so \(1/2\) belongs to each.
2. sc: 1 atom, CN 6; bcc: 2 atoms, CN 8; fcc: 4 atoms, CN 12.
3. \(a = 4r/\sqrt{3} = 4(140)/1.732 = 323\ \text{pm} = 3.23 \times 10^{-8}\ \text{cm}\).
4. \(a = 2\sqrt{2}(175) = 495\ \text{pm} = 4.95 \times 10^{-8}\ \text{cm}\); \(a^3 = 1.21 \times 10^{-22}\ \text{cm}^3\); \(\rho = 4(207.2)/[(6.022 \times 10^{23})(1.21 \times 10^{-22})] = 11.4\ \text{g/cm}^3\) — within 1% of the accepted 11.3 g/cm³.
5. fcc (74.0%) packs better than bcc (68.0%); for equal-sized, equal-mass atoms the fcc crystal would be denser because more mass occupies the same cell volume.
6. The density formula \(\rho = ZM/(N_A a^3)\) needs \(a^3\) in cm³ to give g/cm³; pm³ would give a nonsensical result.

</details>

## Related Topics

- Previous: [The Solid State of Matter](05-the-solid-state-of-matter.md)
- Next: End of chapter
- Related: [Liquids and Solids chapter overview](../README.md)
- Related: [Phase Diagrams](04-phase-diagrams.md) — how structure changes across phase boundaries
- Related: [The Solid State of Matter](05-the-solid-state-of-matter.md) — crystalline vs. amorphous solids and the four solid types

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
