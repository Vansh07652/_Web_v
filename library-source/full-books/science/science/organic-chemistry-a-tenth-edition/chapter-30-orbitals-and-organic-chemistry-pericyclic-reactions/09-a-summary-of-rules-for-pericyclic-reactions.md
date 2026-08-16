---
title: "A Summary of Rules for Pericyclic Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "30: Orbitals and Organic Chemistry: Pericyclic Reactions"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "a-summary-of-rules-for-pericyclic-reactions"
  - "science"
status: "complete"
---

# A Summary of Rules for Pericyclic Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 30: Orbitals and Organic Chemistry: Pericyclic Reactions](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

This topic collects the selection rules developed across Topics 1–8 into one decision table. A **pericyclic reaction** is a concerted reaction in which bonds form and break in a single cyclic transition state. There are exactly three families — **electrocyclic** (ring closing/opening), **cycloadditions** (two molecules join to make a ring), and **sigmatropic rearrangements** (a σ bond migrates) — and one master rule governs all of them: the **Woodward–Hoffmann rules**, which tie thermal or photochemical "allowedness" to the number of electrons moving in the cyclic array and to the topology (suprafacial vs antarafacial) of the interaction.

The practical payoff is prediction. Given a proposed pericyclic reaction, you count the electrons in the cyclic transition state, decide whether the reaction is thermal or photochemical, and read off whether it is allowed. If it is allowed, the reaction proceeds easily with characteristic stereochemistry; if forbidden, it requires a different condition (light instead of heat) or a different mechanism altogether. "Forbidden" never means "impossible" — it means *symmetry-disfavored under those conditions*.

## Why This Matters

- **One framework, three reactions.** Memorizing three separate lists of rules is wasteful; the electron-counting framework replaces them with one consistent logic that exam questions reward.
- **Predicting conditions.** The rules tell you whether to apply heat or light — a question that comes up constantly in synthesis planning and in exams.
- **Stereochemical prediction.** Allowed pericyclic reactions are stereospecific: the stereochemistry of the starting material is carried through the transition state into the product. The rules let you predict *which* stereoisomer forms.
- **Interpreting "forbidden."** Understanding that forbidden = high symmetry-imposed barrier (not impossible) prevents the classic mistake of assuming such reactions never occur.

## Core Concepts

### The master rule: count the electrons, set the condition

Every pericyclic reaction has a cyclic array of electrons in its transition state. Count the total number of electrons *moving* in that array (the π electrons of double bonds plus the electrons of the σ bond being formed or broken):

- **4n + 2 electrons** (6, 10, 14, ...) → the reaction is **thermally allowed** (proceeds on heating) by the suprafacial path.
- **4n electrons** (4, 8, 12, ...) → the reaction is **thermally forbidden**; it becomes **photochemically allowed** when light promotes an electron to change the symmetry of the highest occupied molecular orbital.

This single statement is the heart of the Woodward–Hoffmann rules and reproduces every individual rule in the chapter.

### Electrocyclic reactions (Topics 2–4)

A conjugated polyene cyclizes by rotating its termini to form a new σ bond (or a ring opens by the reverse). The rule: with **4n + 2** π electrons the thermal ring closure is **conrotatory** (both ends rotate the same way); with **4n** π electrons the thermal closure is **disrotatory** (ends rotate in opposite directions). Under photochemical conditions the preferences flip: 4n becomes conrotatory, 4n + 2 becomes disrotatory. The rotation mode decides the stereochemistry of the new ring stereocenters.

### Cycloadditions (Topics 5–6)

Two unsaturated molecules join end-to-end, consuming two π bonds and forming two σ bonds. The rule: a **[4 + 2] cycloaddition** (the Diels–Alder reaction) has six electrons, is thermally allowed, and is suprafacial on both components. A **[2 + 2] cycloaddition** has four electrons, is thermally forbidden, and requires photochemical activation. The suprafacial–suprafacial [2+2] path is the one that forms thymine dimers in UV-damaged DNA.

### Sigmatropic rearrangements (Topics 7–8)

A σ bond migrates along a π system. The rule: **[1,5]-hydrogen shifts and [3,3] shifts** (six electrons) are thermally allowed suprafacially; **[1,3]-hydrogen shifts** (four electrons) are thermally forbidden and photochemically allowed. Carbon migrations carry the extra stereochemical constraint (retention vs inversion) discussed in Topic 7.

### Suprafacial vs antarafacial: the topology modifier

For each component, the new bonds can form on the **same face** (suprafacial) or **opposite faces** (antarafacial) of the π system. The thermal rules above assume the suprafacial path, which is the only geometrically feasible one for small molecules. Where antarafacial participation is possible (large rings, flexible systems), a thermally "forbidden" reaction can sometimes proceed by an antarafacial route — the rules are a ranking of paths, not a ban on reactions.

### The decision procedure (how to solve any problem)

1. Identify the reaction family (ring close/open? two molecules joining? bond migrating?).
2. Count the electrons in the cyclic transition state.
3. Note the condition (thermal or photochemical).
4. Apply the 4n + 2 / 4n rule to predict allowed/forbidden and the stereochemical mode (conrotatory/disrotatory, suprafacial/antarafacial).
5. Check the result against the starting geometry to name the product stereoisomer.

## ELI-10: Explain Like I'm 10

Pericyclic reactions are like a dance where everyone holds hands in a circle and moves in one smooth step. Whether the dance is allowed depends on how many dancers there are: with 6 dancers it works with music (heat); with 4 dancers it only works with a strobe light (light). Count the dancers, know the music, and you can predict the whole dance.

## High-Yield Points

- Three families, one rule: **electrocyclic**, **cycloaddition**, **sigmatropic** — all governed by the electron count in the cyclic transition state.
- **4n + 2 electrons → thermally allowed** (suprafacial path); **4n electrons → photochemically allowed**.
- Electrocyclic thermal closures: 4n + 2 → **conrotatory**; 4n → **disrotatory**; photochemical conditions flip both.
- Cycloadditions: [4 + 2] (six electrons, Diels–Alder) thermally allowed; [2 + 2] (four electrons) photochemically allowed.
- Sigmatropic: [1,5]-H and [3,3] shifts thermally allowed; [1,3]-H shifts photochemically allowed.
- "Forbidden" = symmetry-imposed barrier under those conditions, not impossible; other topologies (antarafacial) or conditions (light) can allow the reaction.
- Allowed pericyclic reactions are **stereospecific** — reactant geometry maps to product geometry through the cyclic transition state.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Pericyclic reaction | Concerted reaction with a single cyclic transition state | The umbrella category: electrocyclic, cycloaddition, sigmatropic |
| Woodward–Hoffmann rules | Selection rules relating electron count and condition to allowedness | The unifying predictive framework of the chapter |
| 4n + 2 rule | Electron count that makes a pericyclic reaction thermally allowed | The single most useful exam shortcut |
| Conrotatory / disrotatory | Termini rotate same direction / opposite directions on ring closure | Sets the stereochemistry of electrocyclic products |
| Suprafacial / antarafacial | Bonds form on same face / opposite faces of a π system | Determines which thermal paths are allowed |
| Stereospecific | Reactant geometry fully determines product geometry | Why allowed pericyclic reactions give clean single stereoisomers |

## Worked Examples

### Example 1: Classifying and predicting an electrocyclic reaction

**Problem.** 1,3,5-Hexatriene (six π electrons) is heated. Predict whether the ring closure is conrotatory or disrotatory, and name the ring product.

**Step 1 — Count electrons.** The triene has six π electrons (4n + 2 with n = 1).

**Step 2 — Apply the rule.** Thermal, 4n + 2 → **disrotatory** closure.

**Step 3 — Name the product.** 1,3,5-Hexatriene closes to **1,3-cyclohexadiene**; the disrotatory mode determines the relative configuration of the two new stereocenters (both hydrogens cis in the standard drawing).

**Answer.** Disrotatory thermal ring closure giving 1,3-cyclohexadiene with the stereochemistry set by the rotation mode.

### Example 2: Choosing the condition for a cycloaddition

**Problem.** Two molecules of ethylene are to be converted to cyclobutane. Should the chemist plan for heat or light?

**Step 1 — Count electrons.** Each ethylene contributes two π electrons: total = 4 (a [2 + 2] cycloaddition).

**Step 2 — Apply the rule.** Four electrons (4n, n = 1) → thermally forbidden.

**Step 3 — Choose the condition.** Photochemical activation makes the [2 + 2] reaction allowed.

**Answer.** Light, not heat. Heating ethylene gives no cyclobutane by this path; UV excitation is required (the same chemistry that forms thymine dimers in DNA).

### Example 3: Selecting the allowed sigmatropic path

**Problem.** A 1,3-pentadiene is proposed to undergo a [1,3]-hydrogen shift on heating. Is this allowed, and if not, what condition would work?

**Step 1 — Count electrons.** A [1,3] shift involves the two π bonds plus the migrating hydrogen's orbital: four electrons in the cyclic array.

**Step 2 — Apply the rule.** Four electrons → thermally forbidden for the suprafacial path.

**Step 3 — State the alternative.** Photoexcitation changes the frontier-orbital symmetry and allows the shift.

**Answer.** Not allowed thermally; the [1,3] shift requires photochemical conditions. (Compare: the [1,5]-H shift, with six electrons, proceeds on heating.)

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| 4n + 2 allowed | 4n allowed | 4n + 2 (6, 10 electrons) → thermal; 4n (4, 8) → photochemical. The most common exam error is applying the rule backwards. |
| Conrotatory | Disrotatory | Same-direction rotation vs opposite-direction rotation of ring termini; the mode decides product stereochemistry and depends on electron count and condition. |
| [4 + 2] cycloaddition | [2 + 2] cycloaddition | [4 + 2] (Diels–Alder) has 6 electrons, thermally allowed; [2 + 2] has 4, photochemically allowed. |
| Thermal allowedness | Reaction feasibility | "Forbidden" means a high symmetry-imposed barrier under thermal suprafacial conditions — light or an antarafacial path can still achieve the reaction. |
| Stereospecific | Stereoselective | Pericyclic reactions are stereospecific (geometry fully determined); stereoselective reactions merely favor one product. |

## Quick Review

1. State the master Woodward–Hoffmann rule in one sentence.
2. A thermal electrocyclic closure of a 4π system: conrotatory or disrotatory?
3. Why is the Diels–Alder reaction thermally allowed while the [2 + 2] cycloaddition is not?
4. A [1,5]-hydrogen shift is thermally allowed; what electron count makes this true?
5. What does "forbidden" mean in the Woodward–Hoffmann sense?
6. Name the three families of pericyclic reactions and one example reaction of each.

<details>
<summary>Show answers</summary>

1. A pericyclic reaction is thermally allowed when the cyclic transition state has 4n + 2 electrons (suprafacial path) and photochemically allowed when it has 4n electrons.
2. Disrotatory (4n electrons → disrotatory on heating; the preference flips under light).
3. The Diels–Alder [4 + 2] reaction has six electrons (4n + 2, thermally allowed); the [2 + 2] reaction has four electrons (4n, thermally forbidden, photochemically allowed).
4. Six electrons (4n + 2 with n = 1).
5. The reaction is symmetry-disfavored under those conditions — it faces a high barrier in the ground state but is not impossible; light or a different topology can allow it.
6. Electrocyclic (e.g., hexatriene → cyclohexadiene), cycloaddition (e.g., Diels–Alder), and sigmatropic (e.g., Cope rearrangement of a 1,5-diene).

</details>

## Related Topics

- Previous: [Some Examples of Sigmatropic Rearrangements](08-some-examples-of-sigmatropic-rearrangements.md)
- Related: [Molecular Orbitals of Conjugated Pi Systems](01-molecular-orbitals-of-conjugated-pi-systems.md) (the orbital basis for the rules), [Electrocyclic Reactions](02-electrocyclic-reactions.md), [Photochemical Electrocyclic Reactions](04-photochemical-electrocyclic-reactions.md), [Cycloaddition Reactions](05-cycloaddition-reactions.md), [Sigmatropic Rearrangements](07-sigmatropic-rearrangements.md)
- Related: [The Diels–Alder Cycloaddition Reaction](../../chapter-14-conjugated-compounds-and-ultraviolet-spectroscopy/04-the-diels-alder-cycloaddition-reaction.md) (the most important thermally allowed cycloaddition)
- Chapter overview: [Orbitals and Organic Chemistry: Pericyclic Reactions](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. The Woodward–Hoffmann selection rules (R. B. Woodward and R. Hoffmann, 1965; 1981 Nobel Prize in Chemistry) are standard, well-verified chemical theory; the 4n + 2/4n electron-counting summary is the textbook formulation. No numeric constants beyond electron counts were used.
- Lab safety note: none — this topic is theoretical chemistry; any photochemical or thermal laboratory work requires proper shielding, heat control, and PPE per institutional rules (general principles only).
- Last updated: 2026-08-16
