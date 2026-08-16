---
title: "Cis–Trans Isomerism in Alkenes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "7: Alkenes: Structure and Reactivity"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "cis-trans-isomerism-in-alkenes"
  - "science"
status: "complete"
---

# Cis–Trans Isomerism in Alkenes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 7: Alkenes: Structure and Reactivity](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Alkenes are flat, rigid molecules: the carbon–carbon double bond is a \(\sigma\) bond plus a \(\pi\) bond, and rotation about the double bond is essentially forbidden because it would require breaking the \(\pi\) bond. That locked geometry means two atoms (or groups) attached to the alkene carbons can be arranged in two different ways in space — same side or opposite sides — without any change in connectivity. These are **cis–trans isomers** (a kind of stereoisomer): identical molecular formula, identical atom-to-atom connections, different three-dimensional arrangement, and different physical properties.

This topic covers when cis–trans isomerism is possible, how to recognize and name the two forms, and why the difference matters physically and biologically — including the system's limitation: it becomes ambiguous for alkenes with three or four substituents, exactly the problem the \(E,Z\) system solves next.

## Why This Matters

Cis–trans isomerism is not a textbook curiosity; it changes how molecules behave. The cis and trans forms of 2-butene differ in boiling point, melting point, density, and stability. In biology, cis double bonds in unsaturated fatty acids kink the chain, keeping vegetable oils liquid at room temperature, while trans double bonds straighten it — which is why partially hydrogenated "trans fats" are more solid. Drug molecules depend on geometry too: the breast-cancer drug tamoxifen is given as one geometric isomer (the \(Z\) form); the other is far less active. Whenever a molecule has a double bond, "which side is which?" has real consequences — for properties, reactivity, and health.

## Core Concepts

### The double bond locks the molecule flat

In ethene, each carbon uses sp2 hybrids: three \(\sigma\) bonds lie in a plane at ~120°, and a \(\pi\) bond forms above and below that plane from parallel p orbitals. Rotating one end of the double bond would destroy p-orbital overlap and break the \(\pi\) bond — a cost of roughly 63–65 kcal/mol (264–272 kJ/mol), far above room-temperature thermal energy (~0.6 kcal/mol). The geometry is locked.

### When cis–trans isomerism is possible

Cis–trans isomerism exists only when **each alkene carbon bears two different substituents**. If either carbon bears two identical groups, swapping the "top" and "bottom" positions at that carbon changes nothing — the two arrangements are identical, and only one compound exists. Concretely:

- CH2=CH–CH2–CH3 (1-butene): C1 has two H → no.
- CH3–CH=CH–CH2–CH3 (2-pentene): each carbon has one H and one alkyl → yes.
- CH3–C(CH3)=CH–CH3 (2-methyl-2-butene): C2 has two methyls → no.

The quick test: look at each double-bond carbon independently — two different groups on each means a cis/trans candidate.

### cis means same side; trans means opposite

When the two identical (or similar) groups lie on the same side of the double bond, the isomer is **cis** (Latin, "on this side"); opposite sides is **trans** ("across"). In 2-butene, compare the two methyls: both up (or both down) = cis; one up, one down = trans. In SMILES, cis-2-butene is C/C=C/C and trans-2-butene is C/C=C\C. The two forms cannot interconvert by rotation — interconversion requires breaking the \(\pi\) bond — so they are configurational isomers, not conformers.

### Physical properties differ

Because cis isomers have a net molecular dipole (the two C–CH3 bond dipoles add instead of cancel), they are slightly more polar and pack less efficiently in crystals:

- cis-2-butene: bp ≈ 3.7 °C, mp ≈ −139.5 °C
- trans-2-butene: bp ≈ 0.9 °C, mp ≈ −105.5 °C

The cis isomer boils higher (more polar, stronger intermolecular forces); the trans isomer melts higher (more symmetrical, packs better). The trans isomer is also more stable by about 1 kcal/mol: the cis arrangement crowds the two methyls together (steric strain) — developed in Topic 6.

### Cis–trans in rings

Cycloalkenes are special: the ring forces the double bond planar, and a small ring (5–8 carbons) can only fit the cis geometry — trans-cyclooctene is the smallest isolable trans cycloalkene, and it is strained. Cyclohexene is therefore understood to be cis, and no prefix is used.

### Biology: cis fats vs trans fats

Oleic acid (C18:1) contains a cis double bond (SMILES: CCCCCCCC/C=C/CCCCCCCC(=O)O), which bends the chain ~30°; the kinks stop tight packing, so the oil is liquid. Its trans isomer, elaidic acid (SMILES: CCCCCCCC/C=C\CCCCCCCC(=O)O), is straight, packs like a saturated fat, and melts near 45 °C versus ~13 °C for oleic acid. Partial hydrogenation of vegetable oils converts some cis double bonds to trans, producing semisolid shortenings and raising dietary trans fats — a vivid example of one geometric difference changing macroscopic behavior.

## ELI-10: Explain Like I’m 10

Imagine a double rope with two flags tied to it, one on each post. The posts can’t twist, so you can only put the flags on the same side (cis) or on opposite sides (trans) — two different pictures of the same rope. Same rope, same flags, but the two pictures don’t behave the same way, and you can’t turn one into the other without untying the rope.

## High-Yield Points

- Rotation about a C=C double bond is forbidden (~63–65 kcal/mol barrier) because it breaks the \(\pi\) bond.
- Cis–trans isomerism requires **each** alkene carbon to carry two different substituents; 1-butene and 2-methyl-2-butene fail this test.
- cis = same side, trans = opposite side; the isomers are configurational, not conformational.
- cis-2-butene has the higher boiling point; trans-2-butene has the higher melting point and is more stable.
- Small-ring cycloalkenes are locked cis — no prefix needed.
- Biological fats: cis double bonds kink chains (liquid oils); trans double bonds straighten them (solid fats).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| stereoisomer | Same formula and same connectivity, different 3-D arrangement of atoms. | Cis/trans isomers are stereoisomers; interconversion needs bond breaking, not just rotation. |
| \(\pi\) bond | The sideways-overlap bond above and below the \(\sigma\) bond; it locks the alkene flat. | Its strength sets the ~63–65 kcal/mol barrier that prevents rotation. |
| cis | The two like groups lie on the same side of the double bond. | Determines polarity, packing, boiling/melting points, and biological shape. |
| trans | The two like groups lie on opposite sides of the double bond. | Usually more stable and higher melting; the geometry found in trans fats. |
| configurational isomer | An isomer that differs in geometry and cannot interconvert without breaking bonds. | Distinguishes cis/trans from conformers, which interconvert by rotation. |
| sp2 carbon | An alkene carbon with three \(\sigma\) bonds at ~120° in one plane plus a p orbital for the \(\pi\) bond. | Explains why alkene geometry is flat and rigid. |
| elaidic acid | The trans isomer of oleic acid (C18:1). | A real-world example of how trans geometry changes fat melting behavior. |

## Worked Examples

**Example 1 — Which alkenes can show cis–trans isomerism?** Test each double-bond carbon for "two different substituents."

- 1-Pentene, CH2=CH–CH2–CH2–CH3: C1 has two H → **no**.
- 2-Pentene, CH3–CH=CH–CH2–CH3: C2 has CH3 and H; C3 has CH2CH3 and H → **yes** (cis- and trans-2-pentene both exist).
- 2-Methyl-2-butene, CH3–C(CH3)=CH–CH3: C2 has two CH3 → **no**.
- 1,2-Dichloroethene, ClCH=CHCl: each carbon has Cl and H → **yes**; cis-1,2-dichloroethene (bp 60.3 °C) vs trans-1,2-dichloroethene (bp 48.4 °C) are classic textbook examples of the boiling-point trend.

**Example 2 — Name the two isomers of 2-butene.** Both have connectivity CH3–CH=CH–CH3. Place the double bond horizontally with both CH3 groups on the same side → cis-2-butene (SMILES C/C=C/C). One CH3 above, one below → trans-2-butene (SMILES C/C=C\C). The cis isomer has the higher boiling point (3.7 °C vs 0.9 °C) and the lower melting point (−139.5 °C vs −105.5 °C). Interconversion requires breaking the \(\pi\) bond; ordinary heating does not convert one to the other.

**Example 3 — Why is oleic acid liquid but elaidic acid solid?** Oleic acid's cis double bond at C9 (SMILES CCCCCCCC/C=C/CCCCCCCC(=O)O) bends the chain so it cannot pack tightly: mp ≈ 13 °C, liquid at room temperature. Elaidic acid, the trans isomer (SMILES CCCCCCCC/C=C\CCCCCCCC(=O)O), is straight, packs densely, and melts near 45 °C: solid. One geometric difference flips a cooking fat from liquid to solid — exactly why hydrogenated shortenings are more solid.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| cis/trans isomers | conformers (rotamers) | Cis/trans forms need a bond broken to interconvert; conformers interconvert by rotation about single bonds. |
| "cis" when a carbon has two identical groups | actual cis/trans isomerism | 1-butene and 2-methyl-2-butene have no cis/trans forms: one alkene carbon carries two identical groups. |
| Higher boiling point | Higher melting point | The more polar cis isomer boils higher; the more symmetrical trans isomer melts higher. |
| cis-2-butene (mp −139.5 °C) | trans-2-butene (mp −105.5 °C) | Melting-point order is the reverse of the boiling-point order — a common exam trap. |
| cis/trans terminology | E/Z terminology | Cis/trans works cleanly only for disubstituted alkenes; tri- and tetrasubstituted alkenes need the E/Z system (Topic 5). |
| Cycloalkenes (cis only) | acyclic trans alkenes | Rings ≤8 carbons cannot fit a trans double bond without severe strain; trans-cyclooctene is the smallest stable one. |

## Quick Review

1. Why can’t the two ends of a double bond rotate freely, and roughly how much energy would rotation cost?
2. Which of these alkenes exist as cis/trans isomers: 1-butene, 2-pentene, 2-methyl-2-butene, 3-hexene? Justify each answer.
3. Which isomer of 2-butene has the higher boiling point, and which has the higher melting point?
4. Why is oleic acid liquid at room temperature while elaidic acid is solid?
5. True or false: cis-2-butene can be converted to trans-2-butene by heating it above its boiling point. Explain.

<details>
<summary>Answers</summary>

1. Free rotation would break the \(\pi\) bond (p orbitals would lose overlap), and the barrier is about 63–65 kcal/mol — far above room-temperature thermal energy (~0.6 kcal/mol), so rotation is effectively impossible.
2. 2-Pentene: yes (each carbon has H plus an alkyl group). 3-Hexene: yes, for the same reason. 1-Butene: no (C1 has two H). 2-Methyl-2-butene: no (C2 has two identical methyl groups).
3. cis-2-Butene has the higher boiling point (≈3.7 °C vs ≈0.9 °C) because its net dipole strengthens intermolecular forces; trans-2-butene has the higher melting point (≈−105.5 °C vs ≈−139.5 °C) because it packs better in the crystal.
4. Oleic acid’s cis double bond bends the chain, preventing tight packing (mp ≈ 13 °C, liquid); elaidic acid’s trans double bond keeps the chain straight, so chains pack densely (mp ≈ 45 °C, solid).
5. False. Heating provides far too little energy to cross the ~63–65 kcal/mol \(\pi\)-bond-breaking barrier; interconversion requires a chemical reaction that breaks the \(\pi\) bond (for example, the addition–elimination sequences of later chapters).

</details>

## Related Topics

- [Chapter 7 README](../README.md)
- [3. Naming Alkenes](03-naming-alkenes.md)
- [5. Alkene Stereochemistry and the E,Z Designation](05-alkene-stereochemistry-and-the-e-z-designation.md)
- [6. Stability of Alkenes](06-stability-of-alkenes.md)
- [7. Electrophilic Addition Reactions of Alkenes](07-electrophilic-addition-reactions-of-alkenes.md)
- [2. Calculating the Degree of Unsaturation](02-calculating-the-degree-of-unsaturation.md)
