---
title: "Molecular Orbital Theory"
subject: "Science"
book: "Chemistry 2e"
chapter: "8: Advanced Theories of Covalent Bonding"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "molecular-orbital-theory"
  - "science"
status: "complete"
---

# Molecular Orbital Theory

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 8: Advanced Theories of Covalent Bonding](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Valence bond theory treats a molecule as atoms with localized bonds. **Molecular orbital (MO) theory** takes the opposite view: the molecule is one system, and its electrons occupy **molecular orbitals** spread over the whole molecule. Each MO is built by combining atomic orbitals from all the atoms — the linear combination of atomic orbitals (LCAO) method — and electrons fill MOs from lowest energy up, following the same rules (Pauli, Hund) used for atoms.

Combining \(N\) atomic orbitals produces \(N\) molecular orbitals: roughly half are **bonding** (lower energy, electron density concentrated between nuclei) and half are **antibonding** (higher energy, with a node between the nuclei, often marked with a star, e.g., \(\sigma^*\)). The distribution of electrons between bonding and antibonding orbitals gives the **bond order**:

\[
\text{bond order} = \frac{\text{electrons in bonding MOs} - \text{electrons in antibonding MOs}}{2}
\]

A bond order of zero means no bond (the molecule does not form); 1, 2, or 3 correspond to single, double, and triple bonds. MO theory succeeds where VB theory stumbles: it predicts that \(\ce{O2}\) is **paramagnetic** (has unpaired electrons), explains why \(\ce{He2}\) does not exist, and handles molecules with delocalized or fractional bonding naturally.

## Why This Matters

- **Magnetic and optical properties:** MO theory explains why liquid oxygen is attracted to a magnet (two unpaired electrons), and why many molecules absorb visible light (transitions between MOs) — the basis of color in dyes, and of spectroscopy used in labs and astronomy.
- **Stability and existence:** Bond order from MO theory tells you immediately whether a molecule can exist at all (\(\ce{He2}\), \(\ce{Be2}\), \(\ce{Ne2}\) → bond order 0), and how its bond length/energy compare with related species.
- **Ions and radicals:** Species like \(\ce{O2+}\), \(\ce{O2-}\), \(\ce{NO}\), and \(\ce{NO2}\) have non-integer bond orders and unpaired electrons; MO theory handles them cleanly, while Lewis structures require awkward resonance.
- **Semiconductors and materials:** Band theory — the extension of MO theory to millions of orbitals — explains why metals conduct, insulators don't, and semiconductors sit between. Every electronic device traces back to this idea.

## Core Concepts

### Building molecular orbitals from atomic orbitals

Two atomic orbitals on different atoms combine in two ways:

- **In phase** (same sign): the wavefunctions add → electron density piles up between the nuclei → **bonding MO**, lower energy than the separate atomic orbitals.
- **Out of phase** (opposite signs): the wavefunctions cancel between the nuclei, creating a **node** → **antibonding MO**, higher energy.

For \(s\) orbitals you get \(\sigma\) and \(\sigma^*\) MOs; for \(p\) orbitals, \(\sigma_p/\sigma_p^*\) (head-on) and degenerate \(\pi_p/\pi_p^*\) pairs (sideways).

### Filling order for second-row diatomic molecules

For \(\ce{O2}\), \(\ce{F2}\), and \(\ce{Ne2}\), the MO energy order is:

\[
\sigma_{2s} < \sigma_{2s}^* < \sigma_{2p_z} < \pi_{2p_x} = \pi_{2p_y} < \pi_{2p_x}^* = \pi_{2p_y}^* < \sigma_{2p_z}^*
\]

For \(\ce{Li2}\) through \(\ce{N2}\), the \(\sigma_{2p_z}\) and the \(\pi_{2p}\) pair swap order (the \(\pi\) pair sits lower) because of \(s\)–\(p\) mixing — a detail to check in the textbook's diagrams. In both cases, fill electrons from the bottom up, two per orbital, opposite spins first, then Hund's rule (one electron per degenerate orbital before pairing).

### Bond order from electron counts

After filling, subtract antibonding electrons from bonding electrons and divide by 2 (formula above). Examples:

- \(\ce{H2}\): 2 electrons in \(\sigma_{1s}\) → bond order 1.
- \(\ce{He2}\): 2 in \(\sigma_{1s}\), 2 in \(\sigma_{1s}^*\) → bond order 0 → does not exist.
- \(\ce{N2}\): 10 valence electrons → bond order 3 (matches the very strong triple bond).
- \(\ce{O2}\): 12 valence electrons → bond order 2.

### Paramagnetism: the \(\ce{O2}\) prediction

Hund's rule forces \(\ce{O2}\)'s last two electrons into the two degenerate \(\pi^*\) orbitals **unpaired**. Unpaired electrons make a molecule paramagnetic — weakly attracted into a magnetic field. Liquid \(\ce{O2}\) is indeed paramagnetic, and MO theory predicted this while localized VB/Lewis pictures could not explain it. Paramagnetism is direct evidence that molecular orbitals are real, not just a bookkeeping device.

### Heteronuclear diatomics: \(\ce{CO}\), \(\ce{NO}\), \(\ce{HF}\)

When the atoms differ, the atomic orbitals have different energies; the more electronegative atom contributes lower-energy orbitals, so its character dominates the bonding MOs (the bonding pair sits closer to it — polarity emerges naturally). \(\ce{CO}\) has 10 valence electrons → bond order 3 (isoelectronic with \(\ce{N2}\)); \(\ce{NO}\) has 11 → bond order 2.5 (an odd electron → paramagnetic radical). Bond order need not be an integer.

### MO vs VB: choosing the right tool

| Question | VB theory | MO theory |
|---|---|---|
| Where is each bond? | Localized between two atoms | Electrons spread over the whole molecule |
| \(\ce{O2}\) magnetism | Cannot explain | Explains (unpaired \(\pi^*\) electrons) |
| Existence of \(\ce{He2}\) | Predicts a bond | Bond order 0 → no bond |
| Geometry/hybridization | Excellent (topics 1–3) | Less intuitive |
| Fractional/odd-electron bonds | Needs resonance | Natural (e.g., \(\ce{NO}\), 2.5) |

Both are models; chemists use whichever fits the question.

## ELI-10: Explain Like I'm 10

> Think of atomic orbitals as two drums. If you hit them at the same time and the drumheads push together, the sound is stronger between them — that's a bonding orbital. If they push apart, there's a quiet spot (a node) between them — that's an antibonding orbital. Fill the "strong sound" spots first; if as many electrons end up in the quiet spots as in the loud spots, the molecule falls apart. Some molecules, like oxygen, end up with leftover single electrons that act like tiny magnets.

## High-Yield Points

- MO theory: electrons occupy molecular orbitals spanning the whole molecule; combining \(N\) atomic orbitals gives \(N\) MOs (bonding + antibonding).
- Bond order = (bonding electrons − antibonding electrons)/2; 0 → no bond; 1, 2, 3 → single, double, triple.
- \(\ce{H2}\) bond order 1; \(\ce{He2}\) and \(\ce{Ne2}\) bond order 0 (don't exist); \(\ce{N2}\) order 3; \(\ce{O2}\) order 2; \(\ce{CO}\) order 3 (isoelectronic with \(\ce{N2}\)); \(\ce{NO}\) order 2.5.
- \(\ce{O2}\) has two unpaired electrons in \(\pi^*\) MOs → paramagnetic; this is MO theory's signature success over VB theory.
- For \(\ce{O2}\)/\(\ce{F2}\), MO order: \(\sigma_{2s} < \sigma_{2s}^* < \sigma_{2p_z} < \pi_{2p} < \pi_{2p}^* < \sigma_{2p_z}^*\); for \(\ce{Li2}\)–\(\ce{N2}\), \(\pi_{2p}\) sits below \(\sigma_{2p_z}\).
- Antibonding MOs have a node between nuclei; bonding MOs concentrate density there.
- In heteronuclear molecules, bonding electrons sit closer to the more electronegative atom → polarity.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| molecular orbital (MO) | Orbital spread over the whole molecule, built from atomic orbitals | The fundamental object of MO theory; electrons fill MOs, not atomic orbitals |
| LCAO | Combining atomic orbitals to make molecular orbitals | The recipe for constructing MOs of any molecule |
| bonding MO | Lower-energy MO with density between the nuclei | Holds the molecule together; contributes +1 to bond-order counting |
| antibonding MO | Higher-energy MO with a node between the nuclei | Destabilizes; subtracts from bond order; explains why some molecules don't form |
| bond order | (bonding e⁻ − antibonding e⁻)/2 | Predicts existence, length, and strength; 0 means no bond |
| degenerate orbitals | MOs with the same energy (e.g., the two \(\pi_{2p}\) MOs) | Hund's rule fills them singly first → unpaired electrons → paramagnetism |
| paramagnetic | Attracted into a magnetic field due to unpaired electrons | Observable property that confirmed MO theory via \(\ce{O2}\) |

## How It Works / Step-by-Step Process

### Worked example 1: \(\ce{H2}\), \(\ce{He2}\), and \(\ce{H2+}\)

**Problem.** Use MO theory to find bond orders for \(\ce{H2}\), \(\ce{He2}\), and \(\ce{H2+}\), and state which exist.

**Solution.**

1. \(\ce{H2}\): 2 valence electrons. Fill \(\sigma_{1s}\) (2 e⁻) → bond order = (2 − 0)/2 = **1**. Exists as a stable single bond.
2. \(\ce{He2}\): 4 valence electrons. Fill \(\sigma_{1s}\) (2) then \(\sigma_{1s}^*\) (2) → bond order = (2 − 2)/2 = **0**. No net bond → \(\ce{He2}\) does not exist.
3. \(\ce{H2+}\): 1 electron. \(\sigma_{1s}\) (1 e⁻) → bond order = (1 − 0)/2 = **0.5**. A weak bond; the ion exists (bond energy 255 kJ/mol, less than \(\ce{H2}\)'s 436 kJ/mol). Fractional bond orders are fine in MO theory.

### Worked example 2: bond order and magnetism of \(\ce{O2}\)

**Problem.** Calculate the bond order of \(\ce{O2}\) and predict its magnetic behavior.

**Solution.**

1. Count valence electrons: each O contributes 6 → 12 total.
2. Fill in order for the O\(_2\)/F\(_2\) family: \(\sigma_{2s}\) (2), \(\sigma_{2s}^*\) (2), \(\sigma_{2p_z}\) (2), \(\pi_{2p}\) pair (4), then the last 2 electrons go singly into the two degenerate \(\pi_{2p}^*\) orbitals (Hund's rule) → \(\pi_{2p}^*\) has 2 electrons.
3. Bond order = (8 bonding − 4 antibonding)/2 = **2** — a double bond, matching the 121 pm bond length and 495 kJ/mol bond energy.
4. Because the two \(\pi^*\) electrons are unpaired, \(\ce{O2}\) is **paramagnetic** — confirmed by experiment (liquid oxygen is drawn into a magnetic field).

### Worked example 3: why \(\ce{CO}\) binds so strongly, and isoelectronic species

**Problem.** \(\ce{CO}\) and \(\ce{N2}\) both have 14 total electrons (10 valence). Predict \(\ce{CO}\)'s bond order and explain its toxicity.

**Solution.**

1. \(\ce{CO}\) valence electrons: C (4) + O (6) = 10 — same count as \(\ce{N2}\) (2 × 5). These are **isoelectronic**.
2. Same filling → bond order 3 → a very strong triple bond.
3. Polarity: O is more electronegative, so the bonding electrons (especially the \(\sigma\) pair) sit closer to O, but the lone pair on carbon remains available — CO binds to the iron in hemoglobin more tightly than \(\ce{O2}\) does, blocking oxygen transport. The strength and directionality of CO's bonding MOs explain both its stability and its danger.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Bonding MO | Lower energy = always filled first | Bonding MOs are lower energy and fill first — but antibonding MOs still get electrons in larger molecules (that's why bond orders drop) |
| Antibonding MO | "No bond" zone | Antibonding MOs are real orbitals that electrons occupy; they *subtract* from bonding, they don't just disappear |
| VB "bond pair" | MO "bond order" | VB pairs are localized between two atoms; MO bond order is a molecule-wide count that can be fractional (2.5 in \(\ce{NO}\)) |
| \(\ce{O2}\) paramagnetism | \(\ce{N2}\) paramagnetism | \(\ce{O2}\) has unpaired \(\pi^*\) electrons (paramagnetic); \(\ce{N2}\)'s electrons are all paired (diamagnetic) |
| Number of atomic orbitals | Number of molecular orbitals | Combining \(N\) atomic orbitals yields \(N\) MOs — never more, never fewer |
| \(\sigma_{2p_z}\) below \(\pi_{2p}\) | \(\sigma_{2p_z}\) above \(\pi_{2p}\) | Ordering differs between \(\ce{Li2}\)–\(\ce{N2}\) and \(\ce{O2}\)–\(\ce{Ne2}\) due to \(s\)–\(p\) mixing; check the diagram for the molecule at hand |

## Quick Review

1. State the bond order formula and the meaning of a bond order of 0.
2. Why does \(\ce{He2}\) not exist, according to MO theory?
3. What is the bond order of \(\ce{N2}\)? Of \(\ce{NO}\)?
4. How does MO theory explain \(\ce{O2}\)'s paramagnetism?
5. What does isoelectronic mean, and which famous pair of diatomics is isoelectronic?

<details>
<summary>Show answers</summary>

1. Bond order = (bonding electrons − antibonding electrons)/2; a bond order of 0 means bonding and antibonding effects cancel, so no net bond (molecule doesn't form).
2. \(\ce{He2}\) fills both \(\sigma_{1s}\) and \(\sigma_{1s}^*\) with 2 electrons each → bond order 0.
3. \(\ce{N2}\): 10 valence electrons → bond order 3. \(\ce{NO}\): 11 valence electrons → bond order (8 − 3)/2 = 2.5.
4. The last two electrons enter the degenerate \(\pi_{2p}^*\) orbitals singly (Hund's rule) → two unpaired electrons → paramagnetic.
5. Isoelectronic = same number of valence (total) electrons; \(\ce{CO}\) and \(\ce{N2}\) (both 10 valence electrons) are the classic pair.

</details>

## Related Topics

- Previous: [Multiple Bonds](03-multiple-bonds.md)
- Next: End of chapter
- Related: [Advanced Theories of Covalent Bonding chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
