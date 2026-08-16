---
title: "Describing Chemical Bonds: Molecular Orbital Theory"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "1: Structure and Bonding"
topic_number: "11"
source: "organic-chemistry.md"
tags:
  - "describing-chemical-bonds-molecular-orbital-theory"
  - "science"
status: "complete"
---

# Describing Chemical Bonds: Molecular Orbital Theory

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 1: Structure and Bonding](../README.md)  
> **Topic:** 11  
> **Source structure:** OpenStax public textbook outline

## Overview

Two quantum-mechanical models describe the covalent bond. **Valence bond (VB) theory** says a bond forms when two atomic orbitals overlap, with the shared electrons localized between the two bonded atoms. **Molecular orbital (MO) theory** takes the opposite approach: it combines atomic orbitals from all the atoms in a molecule into new **molecular orbitals** that belong to the molecule as a whole, not to any single atom.

The combining rule is simple and always the same: when \(n\) atomic orbitals combine, they produce exactly \(n\) molecular orbitals. Half of them are **bonding** — lower in energy than the original atomic orbitals — and half are **antibonding** — higher in energy and marked with an asterisk (σ*, π*). Electrons fill these orbitals from lowest energy upward, obeying the same Pauli and Hund rules used for atoms, and the balance of electrons in bonding versus antibonding orbitals decides whether a bond exists and how strong it is.

This topic develops the MO picture for σ (sigma) and π (pi) bonds, introduces the bond-order calculation, and explains why chemists care about the highest occupied molecular orbital (**HOMO**) and the lowest unoccupied molecular orbital (**LUMO**) — the "frontier" orbitals that govern both reactivity and the absorption of light.

## Why This Matters

MO theory answers questions that valence bond theory cannot. It explains why He₂ does not exist, why O₂ is attracted to a magnet (it is **paramagnetic**), and why colored organic molecules absorb visible light (a π → π* electron jump). It also supplies the vocabulary of reactivity used throughout the rest of organic chemistry: a nucleophile attacks using its HOMO, and an electrophile accepts electrons into its LUMO. Later topics — ultraviolet spectroscopy, conjugated systems, and pericyclic reactions — are essentially MO theory applied to the electrons of π systems.

## Core Concepts

### Combining atomic orbitals: in-phase and out-of-phase

Orbitals behave like waves, so they can combine in phase or out of phase. In-phase combination concentrates electron density *between* the nuclei (constructive interference) and lowers the energy: this is a **bonding** molecular orbital. Out-of-phase combination places a **node** — a region of zero electron density — between the nuclei (destructive interference) and raises the energy: this is an **antibonding** molecular orbital. Electron density in an antibonding orbital actually *pushes* the nuclei apart, which is why filling antibonding levels weakens or destroys bonds.

### σ orbitals: end-on overlap

When two \(s\) orbitals, or two \(p\) orbitals pointing along the internuclear axis, overlap head-on, they form a **σ bonding orbital** and a **σ\* antibonding orbital**. σ orbitals are cylindrically symmetric about the bond axis: rotating the molecule around the bond leaves the orbital unchanged. Every single bond in an organic molecule — C–C and C–H alike — is a σ bond built from this kind of overlap.

### π orbitals: side-by-side overlap

When two parallel \(p\) orbitals overlap side-by-side (above and below the bond axis), they form a **π bonding orbital** and a **π\* antibonding orbital**. π orbitals have a node that contains the bond axis, and rotation around the bond would destroy the overlap. That is the quantum-mechanical reason double bonds do not rotate freely. A double bond consists of one σ bond plus one π bond; a triple bond consists of one σ bond plus two π bonds.

### Filling orbitals and calculating bond order

Molecular orbitals fill by the same rules as atomic orbitals: lowest energy first, two electrons per orbital with opposite spins (Pauli principle), and electrons spread out before pairing (Hund's rule). The **bond order** reports the net number of bonding electron pairs:

\[
\text{Bond order} = \frac{\text{number of bonding electrons} - \text{number of antibonding electrons}}{2}
\]

A bond order of 1 is a single bond, 2 is a double bond, 3 is a triple bond, and 0 means no net bond — the molecule or ion does not exist as a stable species.

### Frontier orbitals: HOMO and LUMO

The **HOMO** is the highest-energy molecular orbital that contains electrons; the **LUMO** is the lowest-energy empty orbital. Together they are called the frontier orbitals. Bond-forming reactions are pictured as a HOMO (electron donor) interacting with a LUMO (electron acceptor). In a C=C double bond, the π orbital is the HOMO and the π* orbital is the LUMO; the energy gap between them determines which wavelengths of light the molecule absorbs and how easily it reacts with electron-rich or electron-poor partners.

### Limits of the model

MO theory is a model, not a photograph of the molecule. The exact energies and shapes of molecular orbitals come from computation, and the simple picture used here — one σ pair and one π pair per bond — is an approximation for larger molecules, where orbitals spread across many atoms. Still, the qualitative hierarchy (bonding orbitals lower, antibonding higher, electrons filling from the bottom) reliably explains structure, magnetism, color, and reactivity, which is why the model is used so widely.

## ELI-10: Explain Like I'm 10

> Imagine two drums sitting side by side. If you hit both at the same moment, the sound waves join into one bigger wave — that is a bonding orbital, and electrons love living there. If you hit them out of step so the waves fight, they cancel in the middle — that is an antibonding orbital, and electrons avoid it. A molecule only stays together when it has more electrons in the "big wave" orbitals than in the "fighting wave" ones.

## High-Yield Points

- \(n\) atomic orbitals always combine into \(n\) molecular orbitals: for a two-atom bond, one bonding and one antibonding.
- Bonding MOs are lower in energy; antibonding MOs are higher and carry a node between the nuclei.
- End-on overlap → σ/σ*; side-by-side overlap → π/π*. Every single bond is a σ bond; a double bond is σ + π; a triple bond is σ + 2π.
- Bond order = (bonding electrons − antibonding electrons)/2. Bond order 0 → no stable bond (He₂).
- O₂ has two unpaired electrons in its π* orbitals → paramagnetic (attracted into a magnetic field).
- The HOMO is the electron-donor orbital; the LUMO is the electron-acceptor orbital; the HOMO–LUMO gap controls color and reactivity.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| molecular orbital (MO) | An orbital that belongs to the whole molecule, formed by combining atomic orbitals | Describes where bonding electrons actually live |
| bonding orbital | Lower-energy MO formed by in-phase overlap; electrons here hold atoms together | More bonding electrons → stronger, shorter bond |
| antibonding orbital | Higher-energy MO formed by out-of-phase overlap; has a node between nuclei | Electrons here weaken or cancel the bond |
| σ orbital | MO from end-on overlap, cylindrically symmetric about the bond axis | The basis of every single bond |
| π orbital | MO from side-by-side p-orbital overlap; density above and below the axis | Basis of double and triple bonds; blocks rotation |
| node | A region of zero electron density | Marks antibonding orbitals and shapes the orbital |
| bond order | (bonding electrons − antibonding electrons)/2 | Predicts whether a bond exists, its strength, and its length |
| HOMO / LUMO | Highest occupied / lowest unoccupied molecular orbital | The electron donor–acceptor pair for reactions and spectroscopy |

## Worked Examples

### Example 1: Bond order of H₂ and He₂

Hydrogen molecule, H₂: each hydrogen contributes one 1s electron, so H₂ has two electrons. They fill the bonding σ orbital and leave σ* empty:

\[
\text{Bond order (H}_2\text{)} = \frac{2 - 0}{2} = 1
\]

A bond order of 1 means one stable single bond — H₂ exists, and its bond is a genuine σ bond.

Now helium: He₂ has four electrons (two from each atom). Two fill the bonding σ orbital; the next two must go into σ*:

\[
\text{Bond order (He}_2\text{)} = \frac{2 - 2}{2} = 0
\]

Zero net bonding — the antibonding electrons exactly cancel the bonding pair, so He₂ does not exist as a stable molecule. That is why helium is a monatomic gas.

### Example 2: Why O₂ is paramagnetic

Oxygen has 12 valence electrons per O₂ molecule. Filling the MO levels in order of energy places 8 electrons in bonding orbitals and 4 in antibonding orbitals:

\[
\text{Bond order (O}_2\text{)} = \frac{8 - 4}{2} = 2
\]

A bond order of 2 correctly predicts a double bond. But Hund's rule puts the last two electrons into the two π* orbitals singly, with parallel spins. Unpaired electrons make O₂ **paramagnetic** — it is pulled into a magnetic field. Valence bond theory could not explain this experimental fact; MO theory predicts it.

### Example 3: The π → π* transition in ethylene

Ethylene (CH₂=CH₂, SMILES `C=C`) has two electrons in its π bonding orbital (the HOMO) and an empty π* orbital (the LUMO). Absorbing light promotes one electron from π to π*:

\[
\Delta E = E_{\pi*} - E_{\pi}
\]

For an isolated alkene, this HOMO–LUMO gap corresponds to ultraviolet light (roughly 170 nm). The same π → π* jump, shifted into the visible region by extended conjugation, is what makes organic dyes colored. The frontier-orbital vocabulary used here — HOMO, LUMO, π, π* — is the language of later chapters on ultraviolet spectroscopy and pericyclic reactions.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| A molecular orbital | "The two atomic orbitals stuck together" | An MO is a new orbital with its own energy and shape; bonding is lower in energy, antibonding higher, and electrons redistribute accordingly |
| An antibonding orbital | A bond that repels electrons | Antibonding orbitals exist and can be occupied (He₂, O₂); occupying them is what cancels bonding |
| All σ bonds | Identical bonds | Every single bond is σ-type, but σ energies differ with the atoms and hybrid orbitals involved (C–C vs C–H vs O–H) |
| A double bond | Two bonds of the same kind | A double bond is one σ + one π; the π component is weaker and prevents free rotation (exam trap: "counting a double bond as two σ bonds") |
| Bond order | The physical charge on the bond | Bond order counts net bonding electron pairs; it predicts structure, not charge |

## Quick Review

1. If two atomic orbitals combine, how many molecular orbitals result, and what are their two types?
2. Write the bond-order formula, then compute the bond order of H₂.
3. Why does He₂ not exist as a stable molecule?
4. What is the HOMO of an alkene such as ethylene?
5. What experimental property of O₂ does MO theory explain that valence bond theory cannot?

<details>
<summary>Show answers</summary>

1. Two: one bonding and one antibonding. In general, \(n\) atomic orbitals produce \(n\) molecular orbitals.
2. Bond order = (bonding electrons − antibonding electrons)/2 = (2 − 0)/2 = 1.
3. He₂ has four electrons filling σ and σ* equally: bond order = (2 − 2)/2 = 0, so there is no net bonding.
4. The π bonding orbital — it is the highest occupied level.
5. Paramagnetism: O₂ has two unpaired electrons in π* orbitals, so it is attracted into a magnetic field.

</details>

## Related Topics

- Previous: [Hybridization of Nitrogen, Oxygen, Phosphorus, and Sulfur](10-hybridization-of-nitrogen-oxygen-phosphorus-and-sulfur.md)
- Next: [Drawing Chemical Structures](12-drawing-chemical-structures.md)
- Related: [Describing Chemical Bonds: Valence Bond Theory](05-describing-chemical-bonds-valence-bond-theory.md)
- Related: [Structure and Bonding chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Bond-order and paramagnetism results follow standard quantum-chemistry treatments of H₂, He₂, O₂, and ethylene (2026-08).
- Last updated: 2026-08-16
