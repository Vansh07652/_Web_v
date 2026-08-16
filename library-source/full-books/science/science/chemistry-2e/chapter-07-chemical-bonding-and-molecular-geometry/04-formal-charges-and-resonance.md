---
title: "Formal Charges and Resonance"
subject: "Science"
book: "Chemistry 2e"
chapter: "7: Chemical Bonding and Molecular Geometry"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "formal-charges-and-resonance"
  - "science"
status: "complete"
---

# Formal Charges and Resonance

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 7: Chemical Bonding and Molecular Geometry](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Sometimes more than one Lewis structure can be drawn for the same molecule, and chemists need a way to choose among them. **Formal charge** is the bookkeeping tool: it assigns each atom a charge as if every bond were split evenly. When several valid structures differ only in where the electrons sit — not where the atoms are — the molecule shows **resonance**: the real molecule is a blend, or hybrid, of all contributors, with electrons delocalized over several atoms. This topic explains how to calculate formal charges, how to use them to pick the most plausible structure, and why resonance explains the equal bond lengths and stability of carbonate, nitrate, and ozone.

## Why This Matters

Formal charge and resonance turn "a valid Lewis structure" into "the best description of a real molecule." Carbonate, CO₃²⁻, is central to blood pH buffering; nitrate, NO₃⁻, matters in agriculture and water quality; ozone, O₃, shields the atmosphere from UV radiation. All three are resonance-stabilized — which is why they exist as stable species. On exams, formal-charge rules quickly eliminate poor candidates, and resonance explains facts (equal bond lengths, fractional bond orders) that no single Lewis structure can.

## Core Concepts

### What formal charge is — and what it is not

Formal charge (FC) is an electron-bookkeeping device: count an atom's valence electrons \(V\), subtract its lone-pair electrons \(L\) and half its shared (bonding) electrons \(B/2\):

\[
FC = V - L - \frac{B}{2}
\]

Two checks make it trustworthy: the formal charges of all atoms must sum to the overall charge, and FC is bookkeeping, not a prediction of where real charge density sits. In CO, the formal charge lands on carbon even though oxygen is more electronegative.

### Using formal charge to choose the best structure

When two or more Lewis structures are plausible, prefer the one that:

1. Has formal charges closest to zero on every atom,
2. Places negative formal charges on the most electronegative atoms,
3. Avoids large like-signed formal charges on adjacent atoms.

These are guidelines — the lowest-formal-charge structure usually matches reality, but electronegativity and octet satisfaction still matter.

### Resonance: several structures, one real molecule

**Resonance** occurs when a molecule or ion can be drawn with the same atomic skeleton in more than one valid Lewis structure. Ozone, O₃, has two equivalent structures — double bond left or right — that differ only in electron placement; atoms never move. The structures are connected by a double-headed arrow, \(\leftrightarrow\), and no single drawing is "the real molecule." The real molecule is a **resonance hybrid** — an average of the contributors, with electrons delocalized across all three atoms. Resonance lowers the molecule's energy, which is why hybrids are more stable than any single contributor predicts.

### Consequences: equal bonds and fractional bond order

A resonance hybrid averages the bond orders of its contributors. Ozone's two structures each show one single and one double O–O bond, so the hybrid has bond order \((1 + 2)/2 = 1.5\) for both. Experiment agrees: ozone's O–O bonds are identical in length, between a single bond (about 148 pm) and a double bond (about 121 pm). The same reasoning gives carbonate and nitrate bond orders of \((1 + 2 + 2)/3 = 4/3\) per bond. Identical bond lengths within an ion are a fingerprint of resonance.

## ELI-10: Explain Like I'm 10

> Sometimes the same molecule can be drawn two or three correct ways, like one dance pose photographed from different angles. The real molecule is not flipping between pictures — it is a blend of all of them, with electrons spread over the whole molecule. The blend is more stable than any single picture.

## High-Yield Points

- Formal charge: \(FC = V - L - B/2\), with \(B\) = shared (bonding) electrons.
- The sum of all formal charges must equal the overall charge — use it as a check.
- Prefer structures with formal charges closest to zero; put negative formal charges on the most electronegative atoms.
- Resonance structures differ only in electron placement; atoms never move; connect with \(\leftrightarrow\), not \(\rightleftharpoons\).
- The real molecule is a resonance hybrid — a weighted average of contributors — and is more stable than any single structure.
- Identical bond lengths and fractional bond orders (O₃: 1.5; CO₃²⁻: 4/3) are experimental evidence of resonance.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| formal charge | Bookkeeping charge on an atom, shared electrons split evenly | Lets you choose the best Lewis structure |
| valence electron | Electron in the outermost shell, counted as \(V\) | The starting number for every formal-charge calculation |
| lone pair | Pair of electrons owned entirely by one atom, counted as \(L\) | Subtracts from formal charge and shapes the molecule |
| bonding electrons | Shared electrons, counted as \(B\), split \(B/2\) per atom | The only "owned" part of a bond in FC bookkeeping |
| resonance | Multiple valid Lewis structures for one atomic skeleton | Explains stability and equal bond lengths in many ions |
| resonance hybrid | The real molecule, an average of all contributing structures | More stable than any contributor; matches experimental geometry |
| delocalization | Spreading electrons over several atoms rather than fixing them in one bond | The physical basis of resonance stabilization |
| fractional bond order | Averaged bond order from resonance, e.g., 1.5 in O₃ | Predicts bond lengths between single and double values |

## How It Works / Step-by-Step Process

1. Draw a valid Lewis structure; identify each atom's \(V\), \(L\), and \(B\).
2. Apply \(FC = V - L - B/2\) to every atom.
3. Sum the formal charges; the total must equal the molecule's or ion's charge.
4. If other structures are possible, repeat and apply the preference rules.
5. If structures differ only in electron placement, label them resonance contributors and describe the hybrid.

## Worked Examples

### Example 1: Formal charges in carbon monoxide, CO

Carbon monoxide has 10 valence electrons (\(4 + 6 = 10\)); its best Lewis structure is a triple bond with a lone pair on each atom: \(:\text{C}{\equiv}\text{O}:\).

For carbon, \(V = 4\), \(L = 2\), \(B = 6\):

\[
FC_C = 4 - 2 - \frac{6}{2} = -1
\]

For oxygen, \(V = 6\), \(L = 2\), \(B = 6\):

\[
FC_O = 6 - 2 - \frac{6}{2} = +1
\]

The charges sum to \((-1) + (+1) = 0\), matching the neutral molecule. Note the surprising result: the formal charge is negative on carbon, the less electronegative atom. Formal charge assumes equal sharing, so it is bookkeeping — the real molecule has only a small dipole. This is the classic warning against mistaking formal charge for real charge.

### Example 2: Ozone, O₃, and its two resonance structures

Ozone has 18 valence electrons (\(3 \times 6 = 18\)). Two equivalent structures are possible: A, \(\text{O}=\text{O}-\text{O}\), and B, \(\text{O}-\text{O}=\text{O}\).

For the central oxygen, \(V = 6\), \(L = 2\), \(B = 6\):

\[
FC_{central} = 6 - 2 - \frac{6}{2} = +1
\]

The double-bonded terminal oxygen has \(V = 6\), \(L = 4\), \(B = 4\):

\[
FC = 6 - 4 - \frac{4}{2} = 0
\]

The single-bonded terminal oxygen has \(V = 6\), \(L = 6\), \(B = 2\):

\[
FC = 6 - 6 - \frac{2}{2} = -1
\]

The charges \(+1\), \(0\), \(-1\) sum to zero; Structure B mirrors A. The real molecule is the hybrid: both O–O bonds have order 1.5 and equal length (about 128 pm). The \(+1\) always sits on the central oxygen; the \(-1\) rides whichever terminal oxygen carries the single bond.

### Example 3: Choosing between structures with formal charge

Sulfur dioxide, SO₂, has 18 valence electrons (\(6 + 2 \times 6 = 18\)); its two resonance structures place the double bond on either oxygen. In either structure, sulfur has \(V = 6\), \(L = 2\), \(B = 6\):

\[
FC_S = 6 - 2 - \frac{6}{2} = +1
\]

The double-bonded oxygen has \(FC = 0\), the single-bonded oxygen \(FC = -1\). The \(+1\) on sulfur and \(-1\) on oxygen are acceptable because oxygen, being more electronegative, carries the negative charge better. This matches the observed equal S–O bond lengths (bond order 1.5).

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Formal charge | Actual (real) charge | FC assumes equal sharing; real charge depends on electronegativity (see CO) |
| Resonance structures being real molecules that interconvert | A single hybrid molecule | The hybrid is real; the drawings are limiting descriptions, with no actual flipping |
| The resonance arrow \(\leftrightarrow\) | The equilibrium arrow \(\rightleftharpoons\) | \(\leftrightarrow\) = electron delocalization within one molecule; \(\rightleftharpoons\) = reaction at equilibrium |
| "The most stable resonance structure is the real molecule" | "The hybrid is the real molecule" | The best drawing is just a drawing; the molecule averages all contributors |
| A bond shown as double in one structure being truly double | A fractional bond order | In O₃ every O–O bond is 1.5 — between single and double |
| Formal charge predicting reactivity directly | A structure-selection tool | FC guides which structure to draw; reactivity depends on real electron density |

## Quick Review

1. Calculate the formal charge on nitrogen in NH₄⁺.
2. Why are all three N–O bonds in NO₃⁻ the same length?
3. What is the difference between \(\leftrightarrow\) and \(\rightleftharpoons\)?
4. In cyanate, NCO⁻, which atom should carry a negative formal charge — and why?
5. What must the formal charges of every atom in an ion sum to?

<details>
<summary>Show answers</summary>

1. Nitrogen has \(V = 5\), \(L = 0\), \(B = 8\) (four N–H bonds): \(FC = 5 - 0 - 8/2 = +1\). Hydrogens are 0 each, so the total \(+1\) matches the ion's charge.
2. Resonance delocalizes electrons over all three N–O bonds, averaging the bond order to \(4/3\) for each — so none is shorter or longer.
3. \(\leftrightarrow\) links resonance structures of the same molecule; \(\rightleftharpoons\) separates reactants and products of a reversible reaction.
4. Oxygen — the preference rules place negative formal charge on the most electronegative atom.
5. The overall charge of the molecule or ion — zero for a neutral molecule, \(-2\) for CO₃²⁻. Use this as a built-in check.

</details>

## Related Topics

- Previous: [Lewis Symbols and Structures](03-lewis-symbols-and-structures.md)
- Next: [Strengths of Ionic and Covalent Bonds](05-strengths-of-ionic-and-covalent-bonds.md)
- Related: [Chemical Bonding and Molecular Geometry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Formal-charge rules, resonance conventions, and bond lengths (O–O single ~148 pm, double ~121 pm, ozone ~128 pm) are standard facts from OpenStax Chemistry 2e.
- Last updated: 2026-08-16
