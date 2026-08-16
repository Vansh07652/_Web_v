---
title: "Molecular Orbitals of Conjugated Pi Systems"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "30: Orbitals and Organic Chemistry: Pericyclic Reactions"
topic_number: "1"
source: "organic-chemistry.md"
tags:
  - "molecular-orbitals-of-conjugated-pi-systems"
  - "science"
status: "complete"
---

# Molecular Orbitals of Conjugated Pi Systems

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 30: Orbitals and Organic Chemistry: Pericyclic Reactions](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

A **conjugated π system** is a chain of adjacent atoms in which every atom contributes one p orbital that overlaps with its neighbors. In 1,3-butadiene (SMILES `C=CC=C`), four sp²-hybridized carbons form a continuous line of overlapping p orbitals; in 1,3,5-hexatriene (`C=CC=CC=C`), six do. Because the electrons are no longer confined to individual double bonds, they are **delocalized** over the whole chain, which lowers the molecule's energy and changes its spectroscopy.

Molecular orbital (MO) theory describes these delocalized electrons as wave functions built by combining the individual p orbitals. A chain of N p orbitals produces exactly N π MOs, each characterized by its number of **nodes** — planes where the wave function changes sign. More nodes mean higher energy, so the MOs form a predictable ladder: one with 0 nodes (all p orbitals in phase, most stable), one with 1 node, and so on up to N − 1 nodes.

Two orbitals matter most. The **HOMO** (highest occupied molecular orbital) controls how the molecule reacts in its ground (thermal) state, and the **LUMO** (lowest unoccupied molecular orbital) controls its photochemical behavior. This chapter's subject — pericyclic reactions — follows from the symmetries of these two orbitals.

## Why This Matters

- **UV–visible spectroscopy:** the HOMO–LUMO gap shrinks as conjugation lengthens, so absorption shifts from the ultraviolet (butadiene, λmax ≈ 217 nm) toward the visible. That is why conjugated molecules are colored and why vision depends on retinal's conjugated chain.
- **Pericyclic reactions:** the Woodward–Hoffmann rules in this chapter are statements about the symmetry of the HOMO (thermal) or LUMO (photochemical). Without a feel for these orbitals, electrocyclic reactions, cycloadditions, and sigmatropic rearrangements seem like arbitrary rules.
- **Photochemistry:** which orbital an electron is promoted into determines which reaction path is allowed — the same molecule can react differently in light and in the dark.

## Core Concepts

### From p orbitals to molecular orbitals

Take 1,3-butadiene's four p orbitals, labeled C1 through C4 along the chain. Combining them gives four MOs, ψ1 through ψ4:

- **ψ1** (0 nodes): every adjacent pair of p orbitals overlaps in phase — bonding everywhere, the most stable MO.
- **ψ2** (1 node): the node passes through the central C2–C3 bond, so the C1–C2 and C3–C4 bonds are bonding while C2–C3 is antibonding.
- **ψ3** (2 nodes): nodes pass through the two terminal bonds (C1–C2 and C3–C4), leaving the central bond bonding.
- **ψ4** (3 nodes): every adjacent pair is out of phase — antibonding everywhere, highest in energy.

Each additional node raises the energy, so the order is always ψ1 < ψ2 < ψ3 < ψ4. The same recipe extends to any chain: hexatriene has six MOs with 0 through 5 nodes.

### Filling the ladder: HOMO and LUMO

Electrons fill MOs from lowest energy upward, two per orbital (Aufbau principle, Pauli exclusion). Butadiene has four π electrons, so ψ1 and ψ2 are filled: **ψ2 is the HOMO and ψ3 is the LUMO**. Hexatriene has six π electrons, filling ψ1–ψ3: its HOMO is ψ3 and its LUMO is ψ4.

Absorption of light promotes an electron from the HOMO to the LUMO. In the resulting excited state, the "frontier" electron now sits in the orbital that was formerly the LUMO — so photochemical reactions are controlled by an orbital whose symmetry is different from the ground-state HOMO. That single fact explains why thermal and photochemical pericyclic reactions give different products.

### Symmetry: the property that governs reactions

Relative to the mirror plane that bisects the chain and lies perpendicular to the molecular plane, every π MO is either **symmetric (S)** — the two halves of the wave function have the same sign — or **antisymmetric (A)**. For butadiene: ψ1 S, ψ2 A, ψ3 S, ψ4 A. For hexatriene: ψ1 S, ψ2 A, ψ3 S, ψ4 A, ψ5 S, ψ6 A. The labels alternate, S, A, S, A, ... with increasing energy.

The pattern is what matters: butadiene's HOMO (ψ2) is **A**, while hexatriene's HOMO (ψ3) is **S**. When the chain ends rotate to form a new σ bond (an electrocyclic reaction, Topic 2), bonding overlap needs conrotation for an A HOMO and disrotation for an S HOMO. Memorize the alternating S/A ladder and the chapter's rules become derivable.

### Allyl cation, radical, and anion

The allyl system (three carbons, `C=CC`) has three MOs: ψ1 (bonding, 0 nodes), ψ2 (nonbonding, 1 node at the central carbon — its energy equals that of an isolated p orbital), and ψ3 (antibonding, 2 nodes). The electron count decides which are occupied:

- **Allyl cation** (2 π electrons): ψ1 only — stabilized relative to a simple alkene.
- **Allyl radical** (3 π electrons): ψ1 filled, ψ2 half-filled (the HOMO is the singly occupied ψ2).
- **Allyl anion** (4 π electrons): ψ1 and ψ2 filled — the HOMO is the nonbonding ψ2, which is why allylic anions are stable yet nucleophilic.

## ELI-10: Explain Like I'm 10

> Picture a row of friends holding hands in a line. If everyone holds hands the same way, the line is calm and relaxed — that's the lowest-energy wave. If a few neighbors push their hands against each other instead of holding, that's a "node," and the line is tenser — higher energy. Electrons fill the calmest arrangements first. The most important electron is the one in the highest filled arrangement (the HOMO): its pattern decides how the whole molecule reacts.

## High-Yield Points

- N conjugated p orbitals → N π MOs; energy rises with node count.
- Fill MOs from lowest up: butadiene HOMO = ψ2 (1 node), hexatriene HOMO = ψ3 (2 nodes).
- Symmetry alternates S, A, S, A with energy; HOMO symmetry dictates thermal reactivity, LUMO symmetry dictates photochemical reactivity.
- Conjugation narrows the HOMO–LUMO gap: butadiene λmax ≈ 217 nm, hexatriene λmax ≈ 258 nm; longer chains absorb longer wavelengths.
- Allyl systems: ψ2 is nonbonding; cation (2 e⁻), radical (3 e⁻), anion (4 e⁻).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| conjugated π system | A chain of alternating double/single bonds whose p orbitals all overlap | Delocalizes electrons, lowering energy and shifting absorption to longer wavelengths |
| molecular orbital (MO) | A wave function spanning several atoms, built from individual p orbitals | Describes where delocalized electrons actually live |
| node | A plane where the wave function changes sign | More nodes = higher energy; node count names the MO (ψ1, ψ2, ...) |
| HOMO | Highest occupied molecular orbital (ground state) | Its symmetry controls thermal pericyclic reactions |
| LUMO | Lowest unoccupied molecular orbital | Its symmetry controls photochemical reactions |
| Aufbau principle | Electrons fill MOs from lowest energy first, two per orbital | Predicts the ground-state configuration and identifies the HOMO/LUMO |
| nonbonding orbital | An MO with energy ≈ an isolated p orbital (e.g., allyl ψ2) | Explains allylic anion stability and nucleophilicity |

## How It Works / Step-by-Step Process

1. Count the p orbitals (N) in the conjugated chain.
2. Generate N MOs with 0, 1, 2, ... up to N − 1 nodes, in order of increasing energy.
3. Fill with the chain's π electrons, two per MO, lowest first.
4. Identify the HOMO and LUMO, then assign S/A symmetry (alternating pattern).
5. Use the HOMO symmetry for thermal questions and the LUMO symmetry for photochemical questions.

## Worked Examples

### Example 1: HOMO–LUMO gap of 1,3-butadiene from the particle-in-a-box model

The free-electron model treats the π electrons as particles in a one-dimensional box spanning the conjugated chain. The allowed energies are

\[
E_n = \frac{n^2 h^2}{8 m_e L^2}
\]

where \(n = 1, 2, 3, \dots\) is the quantum number, \(h = 6.626 \times 10^{-34}\ \text{J·s}\) is Planck's constant, \(m_e = 9.109 \times 10^{-31}\ \text{kg}\) is the electron mass, and \(L\) is the box length. For a polyene with N conjugated carbons the standard convention extends the box half a bond beyond each end: \(L = (N+1) \times 1.40\ \text{Å}\). For butadiene, \(L = 5 \times 1.40\ \text{Å} = 7.00\ \text{Å} = 7.00 \times 10^{-10}\ \text{m}\).

Butadiene's 4 π electrons fill \(n = 1\) and \(n = 2\), so HOMO \(n = 2\) and LUMO \(n = 3\). The transition energy is

\[
\Delta E = E_3 - E_2 = \frac{(3^2 - 2^2)h^2}{8 m_e L^2} = \frac{5h^2}{8 m_e L^2}
\]

Substituting:

\[
\Delta E = \frac{5(6.626 \times 10^{-34}\ \text{J·s})^2}{8(9.109 \times 10^{-31}\ \text{kg})(7.00 \times 10^{-10}\ \text{m})^2} = \frac{5(4.390 \times 10^{-67})}{3.571 \times 10^{-48}} = 6.15 \times 10^{-19}\ \text{J}
\]

Unit check: J²·s² / (kg·m²) = J, since 1 J = 1 kg·m²·s⁻². Convert to wavelength with \(E = hc/\lambda\), where \(c = 2.998 \times 10^8\ \text{m/s}\):

\[
\lambda = \frac{hc}{\Delta E} = \frac{(6.626 \times 10^{-34}\ \text{J·s})(2.998 \times 10^8\ \text{m/s})}{6.15 \times 10^{-19}\ \text{J}} = 3.23 \times 10^{-7}\ \text{m} = 323\ \text{nm}
\]

The model predicts ~323 nm, but butadiene absorbs at λmax ≈ 217 nm: the box model overestimates the wavelength because it ignores bond-length alternation, the σ framework, and electron–electron repulsion. Use it for trends, not exact numbers.

### Example 2: Why longer chains absorb longer wavelengths

Repeat for 1,3,5-hexatriene: 6 π electrons fill \(n = 1, 2, 3\); HOMO \(n = 3\), LUMO \(n = 4\); box length \(L = 7 \times 1.40\ \text{Å} = 9.80 \times 10^{-10}\ \text{m}\).

\[
\Delta E = \frac{(4^2 - 3^2)h^2}{8 m_e L^2} = \frac{7h^2}{8 m_e L^2} = \frac{7(4.390 \times 10^{-67}\ \text{J}^2\text{s}^2)}{8(9.109 \times 10^{-31}\ \text{kg})(9.80 \times 10^{-10}\ \text{m})^2} = 4.39 \times 10^{-19}\ \text{J}
\]

\[
\lambda = \frac{hc}{\Delta E} = \frac{1.986 \times 10^{-25}\ \text{J·m}}{4.39 \times 10^{-19}\ \text{J}} = 4.52 \times 10^{-7}\ \text{m} = 452\ \text{nm}
\]

Model: 323 → 452 nm from butadiene to hexatriene; observed: 217 → 258 nm. The trend is right even though absolute values are off: longer conjugation shrinks the gap and red-shifts absorption.

### Example 3: Electron count in the allyl anion

The allyl anion has 4 π electrons over 3 MOs: ψ1 filled (2 e⁻), ψ2 filled (2 e⁻), ψ3 empty. Its HOMO is ψ2, the **nonbonding** orbital — the extra electron pair sits at approximately isolated-p-orbital energy, stable enough to form readily yet still able to donate electrons as a nucleophile. The cation (2 e⁻) has HOMO = ψ1; the radical (3 e⁻) has a singly occupied ψ2.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| A node | An antibonding orbital | ψ2 of butadiene has one node yet is still net bonding; antibonding character is about overall destabilization |
| The HOMO is the highest-energy MO | The HOMO is the highest *occupied* MO | The LUMO is higher in energy but empty; photochemistry promotes an electron into it |
| Longer chain = more stable orbitals | Longer chain = more MOs and a *smaller* gap | Adding atoms raises the HOMO and lowers the LUMO; the gap shrinks, so absorption shifts to longer λ |
| A π MO is localized on one double bond | π MOs span the entire chain | All π MOs of a conjugated system are delocalized; that is the point of conjugation |
| The model wavelength is exact | The model shows trends | Particle-in-a-box overestimates λ; compare 323 vs 217 nm (butadiene) |

## Quick Review

1. How many π MOs does 1,3,5-hexatriene have, and how many nodes are in its HOMO?
2. Which orbital of 1,3-butadiene is the HOMO, and is it symmetric (S) or antisymmetric (A)?
3. Why does the HOMO–LUMO gap shrink as conjugation lengthens?
4. How many π electrons does the allyl cation have, and which MO is its HOMO?
5. Why do photochemical reactions follow the symmetry of the LUMO rather than the HOMO?

<details>
<summary>Show answers</summary>

1. Six π MOs (one per p orbital); the HOMO is ψ3 with 2 nodes.
2. ψ2, with 1 node; it is antisymmetric (A) with respect to the central mirror plane.
3. The number of MOs increases and they pack closer together, so the gap between the highest filled and lowest empty level narrows.
4. Two π electrons; the HOMO is ψ1 (the only bonding MO).
5. Absorption of light promotes an electron out of the HOMO into the LUMO, so the frontier electron now occupies the former LUMO; its symmetry, not the ground-state HOMO's, controls the reaction.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Electrocyclic Reactions](02-electrocyclic-reactions.md)
- Related: [Orbitals and Organic Chemistry: Pericyclic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: h = 6.62607015 × 10⁻³⁴ J·s, mₑ = 9.1093837015 × 10⁻³¹ kg, c = 2.99792458 × 10⁸ m/s (CODATA 2018). Observed λmax: 1,3-butadiene ≈ 217 nm and trans,trans-1,3,5-hexatriene ≈ 258 nm (hexane/cyclohexane, standard literature values); ethylene π→π* ≈ 172 nm (gas phase).
- Last updated: 2026-08-16
