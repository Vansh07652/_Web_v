---
title: "Electrocyclic Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "30: Orbitals and Organic Chemistry: Pericyclic Reactions"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "electrocyclic-reactions"
  - "science"
status: "complete"
---

# Electrocyclic Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 30: Orbitals and Organic Chemistry: Pericyclic Reactions](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

An **electrocyclic reaction** is a pericyclic reaction in which a conjugated polyene cyclizes to a cycloalkene — or, in the reverse direction, a cycloalkene opens to a conjugated polyene. One σ bond forms (or breaks) between the two ends of the π system while the π bonds rearrange, so a diene like 1,3-butadiene (SMILES `C=CC=C`) closes to cyclobutene (`C1=CCC1`), and 1,3,5-hexatriene (`C=CC=CC=C`) closes to 1,3-cyclohexadiene (`C1=CC=CCC1`).

The defining feature is that the reaction is **concerted**: all bond-making and bond-breaking occur simultaneously through a single cyclic transition state, with no carbocation, radical, or other intermediate. Because the electrons move as one continuous loop, the outcome is governed not by the stability of any intermediate but by the symmetry of the molecular orbitals — the frontier-orbital ideas from Topic 1.

Electrocyclic reactions are driven either by heat (thermal) or by light (photochemical). The choice of conditions determines not just whether the reaction happens, but *which stereoisomer* is produced. This topic introduces the two allowed modes of bond rotation — **conrotation** and **disrotation** — and the electron-counting rules that select between them.

## Why This Matters

- **Ring synthesis:** electrocyclic ring closure is one of the few ways to build small- and medium-sized rings in a single, predictable step, and ring opening is a route to specifically substituted dienes and trienes.
- **Stereochemical control:** because the reaction is concerted, the product's stereochemistry is fully determined by the starting material's geometry and the reaction conditions. Chemists exploit this to set several stereocenters at once.
- **Photochemistry in nature:** photochemical electrocyclic ring opening of 7-dehydrocholesterol in skin is the first step of vitamin D₃ synthesis — a real-world example where light, not heat, drives an electrocyclic reaction.
- **Exams:** electrocyclic reactions are a classic exam topic because a small set of counting rules predicts the entire outcome.

## Core Concepts

### The defining bond changes

In ring closure, the two terminal carbons of the conjugated chain form a new σ bond, and the system loses one π bond overall: a diene (two π bonds) becomes a cycloalkene (one π bond + one new σ bond). In ring opening the reverse happens: the σ bond breaks and a new π bond forms, converting the cycloalkene back into a diene. Count the electrons: butadiene ↔ cyclobutene, hexatriene ↔ 1,3-cyclohexadiene, and so on — each reaction shifts exactly one π bond.

### Two modes of motion

As the ends of the chain come together, the terminal p orbitals can rotate in two ways:

- **Conrotation:** both ends rotate in the *same* direction (both clockwise or both counterclockwise). Picture two doorknobs being turned the same way.
- **Disrotation:** the two ends rotate in *opposite* directions. Picture closing a double door whose two leaves swing toward each other.

Which mode is allowed is not free choice — it is dictated by orbital symmetry. The new σ bond can form only where the overlapping lobes of the terminal p orbitals have the same phase (same sign). Whether conrotation or disrotation achieves that match depends on the symmetry of the frontier orbital doing the reacting.

### The electron-counting rules (Woodward–Hoffmann)

For a **thermal** (ground-state) electrocyclic reaction, count the π electrons in the conjugated system:

- **4n π electrons** (4, 8, 12, ...) → **conrotatory** motion.
- **4n + 2 π electrons** (2, 6, 10, ...) → **disrotatory** motion.

So 1,3-butadiene (4 π electrons, 4n with n = 1) closes thermally by **conrotation** to cyclobutene, while 1,3,5-hexatriene (6 π electrons, 4n + 2 with n = 1) closes thermally by **disrotation** to 1,3-cyclohexadiene. Photochemical reactions follow the *opposite* rules (Topic 4), because excitation moves the frontier electron into a different orbital.

### Why the rules work: the frontier orbital

The rules come straight from Topic 1's symmetry ladder. In the thermal reaction, the HOMO controls the outcome:

- Butadiene's HOMO is ψ2, which is **antisymmetric (A)**. For same-phase lobes to overlap at the termini, both ends must rotate the same way — **conrotation**.
- Hexatriene's HOMO is ψ3, which is **symmetric (S)**. Same-phase overlap at the termini requires opposite rotation of the ends — **disrotation**.

The alternating S/A pattern of the MO ladder therefore generates the 4n / 4n+2 rule automatically. This is the classic Woodward–Hoffmann analysis, and it is why this chapter belongs after Topic 1.

## ELI-10: Explain Like I'm 10

> Imagine a line of dancers holding hands, and the two dancers at the ends need to grab each other's free hands to make a circle. If the end dancers both turn the same way (like turning two doorknobs), that's conrotation; if they turn toward each other like closing doors, that's disrotation. The rule says which move works: count the dancers' "steps" (π electrons) — if it's a 4-steps-multiple, turn the same way; if it's 4-steps-plus-2, turn the opposite way. Heat always picks one move, and light picks the other!

## High-Yield Points

- Electrocyclic = one molecule, one new σ bond (or one σ bond broken); concerted, no intermediates.
- Thermal rule: **4n π electrons → conrotatory; 4n + 2 π electrons → disrotatory.**
- Butadiene (4 e⁻) closes thermally by conrotation → cyclobutene; hexatriene (6 e⁻) closes thermally by disrotation → 1,3-cyclohexadiene.
- Ring opening follows the same rules as ring closure — the rules depend on the conjugated system, not on the direction of the reaction.
- Photochemical electrocyclic reactions use the *opposite* mode (Topic 4).
- The rules are ground in orbital symmetry: an antisymmetric HOMO (butadiene ψ2) demands conrotation; a symmetric HOMO (hexatriene ψ3) demands disrotation.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| electrocyclic reaction | Pericyclic ring closure or opening of a conjugated polyene, forming/breaking one σ bond at the chain ends | Converts dienes ↔ cyclobutenes, trienes ↔ cyclohexadienes in one step |
| pericyclic reaction | A reaction proceeding through a cyclic transition state with no intermediate | Explains why these reactions are concerted and stereospecific |
| concerted | All bond changes happen simultaneously in one step | No intermediates means geometry is fully controlled |
| conrotatory | Both chain ends rotate in the same direction during the reaction | The allowed thermal mode for 4n π electrons |
| disrotatory | The two chain ends rotate in opposite directions | The allowed thermal mode for 4n + 2 π electrons |
| frontier orbital | The HOMO (thermal) or LUMO/excited orbital (photochemical) controlling the reaction | Its symmetry determines conrotation vs disrotation |

## How It Works / Step-by-Step Process

1. Identify the conjugated chain and count its π electrons (2 per double bond).
2. Decide thermal vs photochemical conditions.
3. Thermal: 4n → conrotatory; 4n + 2 → disrotatory. (Photochemical: reverse.)
4. Picture the ends rotating accordingly — same direction or opposite.
5. Connect the terminal carbons with a new σ bond and count π bonds in the product (one fewer than the polyene).

## Worked Examples

### Example 1: Classifying thermal ring closures by electron count

**1,3-Butadiene.** Count π electrons: 4. Check the rule: \(4 = 4n\) with \(n = 1\), so thermal closure is **conrotatory**. Product: cyclobutene. **1,3,5-Hexatriene.** Count π electrons: 6. Check the rule: \(6 = 4n + 2\) with \(n = 1\), so thermal closure is **disrotatory**. Product: 1,3-cyclohexadiene. Both reactions proceed thermally, but with different motions — and, as Topic 3 shows, different stereochemical outcomes for substituted systems.

### Example 2: Thermal ring opening of cyclobutene

The reverse direction uses the same rule. Cyclobutene's ring opening produces a 4-π-electron diene: \(4 = 4n\) (\(n = 1\)), so the opening is **conrotatory**, giving 1,3-butadiene. With substituents on the ring, the conrotatory opening dictates exactly which E/Z isomer of the diene forms — the stereochemical consequences are the subject of Topic 3. The takeaway: never memorize "closure = X, opening = Y"; apply the electron count to the conjugated system and the mode follows.

### Example 3: Predicting the mode for a longer polyene

Consider an octatetraene (8 π electrons, \(8 = 4n\) with \(n = 2\)): thermal ring closure is **conrotatory**, closing to cyclooctatriene. The same 4n rule that classified butadiene covers every longer chain — 4, 8, 12, ... electrons all close conrotatorily when heated, and 6, 10, 14, ... close disrotatorily. Only the ring size changes; the logic does not.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Electrocyclic reactions | Cycloadditions | Electrocyclic: one molecule, one σ bond formed; cycloaddition: two molecules, two σ bonds formed |
| Thermal and photochemical products are the same | Thermal and photochemical products differ | Excitation changes the frontier orbital, reversing the allowed mode |
| Conrotation and disrotation are interchangeable | They are selected by electron count and conditions | 4n thermal = conrotatory; 4n + 2 thermal = disrotatory |
| Electrocyclic reactions involve carbocation intermediates | They are concerted | No intermediate exists; the transition state is cyclic |
| Ring opening follows different rules from closure | Both follow the same electron-counting rules | The mode depends on the π electrons of the conjugated system, not the direction |
| The 4n/4n+2 rule applies to photochemical reactions as written | It is reversed for photochemical reactions | Light changes the frontier orbital, so photochemical rules flip |

## Quick Review

1. What bond changes occur when 1,3-butadiene closes to cyclobutene?
2. Thermal ring closure of butadiene: conrotatory or disrotatory?
3. Which polyene closes thermally with disrotation, and why?
4. Why does photoexcitation change the allowed mode of an electrocyclic reaction?
5. Cyclobutene opens thermally to what diene, and with what motion?

<details>
<summary>Show answers</summary>

1. A new σ bond forms between the two terminal carbons, and the system loses one π bond overall (two π bonds in butadiene → one π bond + one σ bond in cyclobutene).
2. Conrotatory — 4 π electrons satisfies 4n (n = 1), and butadiene's antisymmetric HOMO (ψ2) requires same-direction rotation of the ends.
3. 1,3,5-Hexatriene (6 π electrons = 4n + 2); its symmetric HOMO (ψ3) allows bonding overlap only when the ends rotate in opposite directions.
4. Photoexcitation promotes an electron from the HOMO into the LUMO; the frontier electron now occupies an orbital of opposite symmetry, so the mode that achieves bonding overlap flips (the 4n/4n+2 rules reverse).
5. Cyclobutene opens thermally to 1,3-butadiene by conrotatory motion (same 4n rule applied to the ring opening).

</details>

## Related Topics

- Previous: [Molecular Orbitals of Conjugated Pi Systems](01-molecular-orbitals-of-conjugated-pi-systems.md)
- Next: [Stereochemistry of Thermal Electrocyclic Reactions](03-stereochemistry-of-thermal-electrocyclic-reactions.md)
- Related: [Orbitals and Organic Chemistry: Pericyclic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- The thermal 4n/4n+2 selection rules (Woodward–Hoffmann) are standard results of pericyclic reaction theory; vitamin D₃ biosynthesis proceeds via photochemical ring opening of 7-dehydrocholesterol.
- Last updated: 2026-08-16
