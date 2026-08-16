---
title: "Molecular Orbital Theory"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "5: Advanced Theories of Bonding"
topic_number: "4"
source: "chemistry-atoms-first-2e.md"
tags:
  - "molecular-orbital-theory"
  - "science"
status: "complete"
---

# Molecular Orbital Theory

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 5: Advanced Theories of Bonding](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Valence bond theory (earlier in this chapter) pictures a bond as two atomic orbitals overlapping, with electrons localized between specific pairs of atoms. **Molecular orbital (MO) theory** takes a different view: when atoms combine, their atomic orbitals merge into **molecular orbitals** — new orbitals that belong to the whole molecule, not to any single atom. Electrons are assigned to these molecule-wide orbitals, filling them by the same rules used for atoms (Aufbau, Pauli exclusion, Hund's rule).

The theory is built on the **linear combination of atomic orbitals (LCAO)**: combining N atomic orbitals produces N molecular orbitals. Roughly half are **bonding orbitals** (lower energy, electron density concentrated between nuclei, stabilizing the molecule) and half are **antibonding orbitals** (higher energy, with a node between nuclei, destabilizing). The key quantitative result is **bond order**:

\[
\text{Bond order} = \frac{\text{(number of bonding electrons)} - \text{(number of antibonding electrons)}}{2}
\]

MO theory explains observations that valence bond theory cannot — most famously the **paramagnetism of O₂** — and provides a unified picture of bonding, magnetism, and bond strength.

## Why This Matters

MO theory is the most general bonding model in general chemistry and the gateway to much of modern chemistry and physics. It correctly predicts that O₂ is paramagnetic (attracted into a magnetic field) because it has unpaired electrons in antibonding π orbitals — a fact Lewis structures and simple valence bond theory get wrong. It explains why He₂ does not exist while H₂ does, why N₂ is exceptionally stable, and why removing one electron from O₂ (O₂⁺) actually *strengthens* the bond. The same orbital picture underlies color in transition-metal complexes, the conductivity of solids (band theory is MO theory on a huge scale), and the frontier-orbital reasoning used to design catalysts.

## Core Concepts

### Combining atomic orbitals: LCAO

When two atoms approach, their orbitals interfere like waves. The **constructive** combination adds amplitudes between the nuclei, producing a **bonding molecular orbital (σ or π)** that is lower in energy than either starting atomic orbital. The **destructive** combination cancels amplitude between the nuclei, producing an **antibonding molecular orbital (σ\* or π\*)** — written with an asterisk — that is higher in energy and has a node between the nuclei.

For s orbitals on two atoms, the results are \(\sigma_{1s}\) (bonding) and \(\sigma_{1s}^*\) (antibonding). For p orbitals oriented along the bond axis, you get \(\sigma_{2p}\) and \(\sigma_{2p}^*\); for p orbitals perpendicular to the axis, you get \(\pi_{2p}\) and \(\pi_{2p}^*\) orbitals (two of each, from the two perpendicular directions), with the antibonding versions again starred. Each molecular orbital holds up to two electrons (Pauli), and electrons fill lowest-energy orbitals first, one at a time per orbital before pairing (Hund's rule).

### Bond order and bond stability

The bond order formula above is the theory's central tool. A bond order of 1 corresponds to a stable single bond; a bond order of 0 means no net bonding (the molecule is not stabilized). Fractional bond orders (0.5, 1.5, 2.5) occur for ions and radicals and correspond to weaker-than-integer bonds. Higher bond order → shorter, stronger, more stable bond.

### Diatomic molecules of the first and second periods

**H₂** has two electrons in \(\sigma_{1s}\): bond order = (2 − 0)/2 = 1 — a stable single bond. **He₂** would need four electrons: two in \(\sigma_{1s}\) and two in \(\sigma_{1s}^*\): bond order = (2 − 2)/2 = 0 — no net bond, which is why helium exists only as isolated atoms.

For second-row diatomics (Li₂ through F₂), the molecular orbitals in order of increasing energy are:

\[
\sigma_{2s} < \sigma_{2s}^* < \pi_{2p_y}, \pi_{2p_z} < \sigma_{2p_x} < \pi_{2p_y}^*, \pi_{2p_z}^* < \sigma_{2p_x}^*
\]

(for B₂, C₂, and N₂ the \(\pi_{2p}\) orbitals lie *below* \(\sigma_{2p}\); for O₂ and F₂ the order of these two switches, with \(\sigma_{2p}\) lower). Filling this diagram with the valence electrons of each molecule and applying the bond-order formula reproduces the observed bond orders: Li₂ = 1, Be₂ = 0, B₂ = 1, C₂ = 2, N₂ = 3, O₂ = 2, F₂ = 1, Ne₂ = 0 — an excellent match to experiment.

### Why O₂ is paramagnetic

Oxygen has 12 valence electrons. Filling the diagram: \(\sigma_{2s}^2\), \(\sigma_{2s}^{*2}\), \(\sigma_{2p}^2\), \(\pi_{2p}^4\), then two electrons go into the degenerate \(\pi_{2p}^*\) orbitals **one at a time** (Hund's rule). So O₂ has two unpaired electrons in antibonding orbitals:

\[
\text{Bond order (O}_2\text{)} = \frac{10 - 6}{2} = 2
\]

The unpaired electrons make O₂ paramagnetic — attracted into a magnetic field, exactly as measured. Lewis structures cannot explain this; MO theory can.

## ELI-10: Explain Like I’m 10

> Think of two flashlights shining toward each other. Where their beams overlap brightly, you get a “bonding” light that holds them together; where the beams cancel out, you get an “antibonding” light that pushes them apart. Electrons fill the bright spots first. If bright and dark spots balance exactly, the two flashlights don’t stick at all — that’s why two helium atoms never hold hands, but two hydrogen atoms do.

## High-Yield Points

- Combining N atomic orbitals gives N molecular orbitals: about half bonding (lower energy), half antibonding (higher, starred, with a node between nuclei).
- Bond order = (bonding electrons − antibonding electrons)/2. Zero → no bond; higher → stronger, shorter bond.
- H₂ has bond order 1; He₂ has bond order 0 (does not exist); N₂ has bond order 3; O₂ has bond order 2.
- O₂ has two unpaired electrons in \(\pi_{2p}^*\) orbitals → paramagnetic. This is MO theory's signature success.
- For B₂, C₂, N₂ the \(\pi_{2p}\) orbitals fill before \(\sigma_{2p}\); for O₂ and F₂ the order flips. Know which diagram to use for which molecule.
- Bonding orbitals concentrate electron density *between* nuclei; antibonding orbitals have a node there and raise energy.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| molecular orbital (MO) | An orbital spread over the whole molecule, formed by combining atomic orbitals. | Gives a molecule-wide electron picture; the basis of modern bonding theory. |
| LCAO | Linear combination of atomic orbitals: adding/subtracting wavefunctions to build MOs. | Explains why N orbitals in → N orbitals out, half bonding, half antibonding. |
| bonding orbital (σ, π) | Lower-energy orbital with electron density between nuclei. | Stabilizes the molecule; adds to bond order. |
| antibonding orbital (σ\*, π\*) | Higher-energy orbital with a node between nuclei. | Destabilizes the molecule; subtracts from bond order. |
| bond order | (bonding e⁻ − antibonding e⁻)/2. | Predicts existence, strength, and length of a bond; 0 means no bond. |
| paramagnetic | Attracted into a magnetic field because unpaired electrons are present. | O₂'s paramagnetism is direct experimental evidence for MO theory. |

## Worked Examples

### Example 1: Does He₂⁺ exist? Bond order of a cation

He₂⁺ has 3 electrons total (2 + 2 − 1). Filling: \(\sigma_{1s}^2\), \(\sigma_{1s}^{*1}\).

\[
\text{Bond order (He}_2^+\text{)} = \frac{2 - 1}{2} = 0.5
\]

A bond order of 0.5 means a real but weak bond — He₂⁺ *does* exist as a transient species in mass spectrometers, while neutral He₂ (bond order 0) does not. This shows how MO theory handles ions and radicals that Lewis structures cannot even draw.

### Example 2: O₂, O₂⁺, and O₂⁻ — removing or adding an electron

O₂ has 16 total electrons: bond order (10 − 6)/2 = 2. Removing an electron from the highest occupied orbital (a \(\pi_{2p}^*\) antibonding orbital) gives **O₂⁺** with 15 electrons: (10 − 5)/2 = 2.5. Adding an electron gives **O₂⁻** (superoxide) with 17 electrons: (10 − 7)/2 = 1.5.

Predictions: O₂⁺ has the *strongest, shortest* bond (highest bond order) and O₂⁻ the weakest — confirmed by experiment. This pattern is why removing an electron from O₂ strengthens the bond: you are removing an *antibonding* electron.

### Example 3: B₂ and C₂ — the "swapped" orbital order

Boron has 3 valence electrons each, so B₂ has 6. Using the B₂/C₂/N₂ ordering (\(\pi_{2p}\) below \(\sigma_{2p}\)): \(\sigma_{2s}^2\), \(\sigma_{2s}^{*2}\), then two electrons enter the degenerate \(\pi_{2p}\) orbitals singly (Hund's rule), giving \(\pi_{2p}^1\), \(\pi_{2p}^1\).

\[
\text{Bond order (B}_2\text{)} = \frac{4 - 2}{2} = 1
\]

with two unpaired electrons → B₂ is predicted (and found) to be paramagnetic with a single, relatively weak bond. C₂ (8 valence electrons) fills \(\pi_{2p}^2\), \(\pi_{2p}^2\): bond order (6 − 2)/2 = 2, diamagnetic. The magnetic predictions are confirmed experimentally and are impossible to obtain from simple Lewis structures.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Bonding vs antibonding | "Bonding = filled, antibonding = empty" | Bonding/antibonding is about *energy and nodes*, not occupancy; antibonding orbitals can hold electrons (e.g., in He₂, O₂). |
| σ vs π molecular orbitals | Atomic orbital labels | MOs are molecule-wide; σ MOs have cylindrical symmetry about the axis, π MOs have a nodal plane containing the axis. |
| Orbital order for O₂ vs N₂ | One universal diagram | For B₂–N₂, \(\pi_{2p}\) fills before \(\sigma_{2p}\); for O₂–F₂ the order flips. Using the wrong order gives wrong configurations. |
| "Bond order = number of bonds drawn" | (bonding − antibonding)/2 | For neutral diatomics the numbers often match, but for ions/radicals (O₂⁺, He₂⁺) you must use the formula. |
| Paramagnetic vs diamagnetic | One is "magnetic" | Paramagnetic = unpaired electrons (attracted); diamagnetic = all paired (weakly repelled). O₂ is paramagnetic despite having a "double bond." |

## Quick Review

1. What is the bond order of He₂, and what does that value predict?
2. Why is O₂ paramagnetic according to MO theory, and why is that a famous result?
3. Which has the stronger bond: O₂ or O₂⁺? Explain using bond order.
4. How many molecular orbitals result from combining six atomic orbitals?
5. What is the bond order of N₂, and how does it connect to nitrogen's very high bond energy?

<details>
<summary>Show answers</summary>

1. Bond order = (2 − 2)/2 = 0; it predicts no net bond, so He₂ does not exist as a stable molecule.
2. O₂'s two highest electrons occupy the degenerate \(\pi_{2p}^*\) orbitals singly (Hund's rule), leaving two unpaired electrons; experiment confirms O₂ is attracted into a magnetic field, which Lewis/valence bond pictures could not explain.
3. O₂⁺: bond order 2.5 vs 2 for O₂, because removing an electron removes an *antibonding* electron — a higher bond order means a stronger, shorter bond.
4. Six: N atomic orbitals combine to give exactly N molecular orbitals (three bonding, three antibonding).
5. N₂ has bond order (10 − 4)/2 = 3, a very strong triple bond, matching its high bond energy (~941 kJ/mol) and low reactivity.

</details>

## Related Topics

- Previous: [Multiple Bonds](03-multiple-bonds.md)
- Next: End of chapter
- Related: [Valence Bond Theory](01-valence-bond-theory.md), [Hybrid Atomic Orbitals](02-hybrid-atomic-orbitals.md), [Advanced Theories of Bonding chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
