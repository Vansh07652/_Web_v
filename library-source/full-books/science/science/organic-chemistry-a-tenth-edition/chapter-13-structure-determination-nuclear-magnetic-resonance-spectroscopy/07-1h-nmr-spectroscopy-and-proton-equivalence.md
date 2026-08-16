---
title: "1H NMR Spectroscopy and Proton Equivalence"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "1h-nmr-spectroscopy-and-proton-equivalence"
  - "science"
status: "complete"
---

# 1H NMR Spectroscopy and Proton Equivalence

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

A **¹H NMR (proton nuclear magnetic resonance) spectrum** is a graph of how much radiofrequency energy hydrogen nuclei absorb at each resonance frequency while a sample sits in a strong magnetic field. Because every hydrogen sits in a slightly different electron cloud, each chemically distinct set of protons absorbs at a slightly different frequency. The single most important reading skill is **proton equivalence**: deciding which hydrogens are in the *same* environment (one signal) and which are in *different* environments (separate signals).

The rule is simple to state: the **number of signals equals the number of chemically distinct proton sets**. The work is deciding what "chemically distinct" means. Hydrogens on the same sp³ carbon are usually equivalent because rapid bond rotation averages their environments. Hydrogens related by a symmetry operation of the molecule are equivalent. Hydrogens not interchangeable by any symmetry operation — such as a CH₂ group's two hydrogens next to a stereocenter — are not equivalent and can give two signals even on the same carbon.

## Why This Matters

¹H NMR is often the first experiment a chemist runs on a new compound, because one spectrum answers several questions at once: *How many different kinds of hydrogen are present? In what ratios? How many neighboring hydrogens does each set have?* Answering the first question — counting environments — is the foundation for integration, splitting patterns, and final structure assignment; misjudging equivalence is the most common source of wrong structures. The same reasoning matters beyond the lab: pharmacists use proton counts to confirm drug identity and purity, and the physics behind ¹H NMR is the physics behind **MRI**.

## Core Concepts

### What a ¹H NMR spectrum reports

In a routine ¹H NMR spectrum the horizontal axis is **chemical shift** (δ, in ppm), increasing from right (upfield, shielded) to left (downfield, deshielded), with the reference compound **TMS** (tetramethylsilane, `C[Si](C)(C)C`) set at δ 0; the vertical axis is signal intensity. From each signal a spectroscopist extracts three things: its **position** (chemical environment), its **area** (relative number of protons), and its **splitting** (number of neighboring protons). This topic focuses on the first step: how many signals there should be at all.

### What makes protons chemically equivalent

Two protons are **chemically equivalent** if they can be interchanged by a symmetry operation of the molecule (a rotation axis or a mirror plane) and they experience identical electronic environments. Equivalence concerns the molecule as a whole: replacing one proton with a test atom (say, deuterium) must give a molecule identical to, or related by symmetry to, the one from replacing the other.

Three classes result:

- **Homotopic protons** — interchangeable by a rotation axis (C₂ or higher). Replacing one or the other with X gives the *same* compound. They are chemically equivalent and give **one** signal.
- **Enantiotopic protons** — interchangeable by a mirror plane. Replacing one or the other with X gives *enantiomers*. In an achiral solvent they are equivalent and give **one** signal; in a chiral environment they can differ.
- **Diastereotopic protons** — NOT interchangeable by any symmetry operation. Replacing one or the other with X gives *diastereomers*. They are **not** chemically equivalent and give **separate** signals, even though they may sit on the same carbon atom.

### The substitution test

To classify two protons, imagine replacing each, in turn, with a group X (such as Cl or D) and compare the products:

- same compound → **homotopic** (equivalent, one signal)
- enantiomers → **enantiotopic** (equivalent in achiral NMR, one signal)
- diastereomers → **diastereotopic** (non-equivalent, two signals)

### Rapid rotation makes CH₃ hydrogens equivalent

A methyl group's three hydrogens give one signal (integrating to 3) because rotation about the C–CH₃ bond is fast on the NMR timescale, so each hydrogen spends equal time in every position. The same averaging applies to a freely rotating CH₂ in a symmetric environment (e.g., the CH₂ of ethanol), but **not** to a CH₂ whose two hydrogens sit in permanently different environments — the classic case being a CH₂ adjacent to a stereocenter.

### From equivalence to signal count

Count signals by identifying symmetry-related and rapidly averaged protons, then listing each remaining environment once:

- Ethane (`CC`): 6 equivalent H → **1 signal**.
- Propane (`CCC`): two equivalent CH₃ sets + one CH₂ → **2 signals** (area ratio 6:2).
- Ethanol (`CCO`): CH₃, CH₂, and OH → **3 signals**.
- 1,2-Dichloroethane (`ClCCCl`): symmetry makes all four H equivalent → **1 signal**.
- Toluene (`Cc1ccccc1`): CH₃ + three aromatic environments (ortho, meta, para) → **4 signals**.

## ELI-10: Explain Like I'm 10

> Imagine every hydrogen atom in a molecule has its own voice. Hydrogens that live in the same kind of neighborhood sing the same note, and hydrogens in different neighborhoods sing different notes. A proton NMR spectrum counts the notes — one note per neighborhood, and the louder the note, the more hydrogens are singing it.

## High-Yield Points

- **Number of signals = number of chemically distinct proton environments** — the first step in every ¹H NMR analysis.
- Homotopic protons (rotation-related) and enantiotopic protons (mirror-related) are equivalent in achiral NMR; diastereotopic protons are not.
- Use the **substitution test** (replace each H with X; compare products) to classify homotopic/enantiotopic/diastereotopic.
- CH₃ hydrogens are equivalent because of fast rotation; "same carbon" does NOT automatically mean "same environment."
- A CH₂ group next to a stereocenter usually contains **diastereotopic** hydrogens → two signals and extra splitting (an AB pattern).
- Integration (topic 5) gives the *relative* number of protons per environment; splitting (topic 6) gives the number of neighbors.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| ¹H NMR spectroscopy | Technique that records radiofrequency absorption by hydrogen nuclei in a magnetic field | Primary tool for counting hydrogen environments and assigning structures |
| chemical equivalence | Two protons that occupy identical electronic environments, interchangeable by symmetry or fast motion | Equivalent protons give one signal; non-equivalent protons give separate signals |
| homotopic protons | Protons interchangeable by a rotation axis; replacing either with X gives the same compound | Chemically equivalent → one signal |
| enantiotopic protons | Protons interchangeable by a mirror plane; replacing either with X gives enantiomers | Equivalent in achiral solvents (one signal); distinguishable in chiral environments |
| diastereotopic protons | Protons not interchangeable by any symmetry operation; replacement gives diastereomers | NOT equivalent → two signals with different shifts |
| substitution test | Mental experiment: replace each proton with X and compare the products | Quick way to classify proton equivalence |
| chemical shift (δ) | Position of a signal, in ppm, relative to TMS | Reports the electronic environment of each proton set |
| TMS | Tetramethylsilane, the δ 0 reference compound | Every spectrum is measured relative to its signal |

## Worked Examples

### Example 1: Counting signals in simple molecules

Predict the number of ¹H NMR signals for **chloroethane** (`CCCl`), **2-methylpropane** (`CC(C)C`), and **para-xylene** (`Cc1ccc(C)cc1`).

- **Chloroethane:** two environments — CH₃ and CH₂. Rotation makes the three CH₃ hydrogens equivalent and the two CH₂ hydrogens equivalent. Answer: **2 signals**, integrating 3:2.
- **2-Methylpropane:** three equivalent CH₃ groups (9 H) plus the central C–H (1 H). Answer: **2 signals**, ratio 9:1.
- **para-Xylene:** the two CH₃ groups are equivalent (ring symmetry); all four aromatic hydrogens are equivalent. Answer: **2 signals**, ratio 6:4 (3:2).

### Example 2: Diastereotopic CH₂ hydrogens in 2-butanol

Consider **2-butanol** (`CCC(O)C`), which has a stereocenter at C2. Apply the substitution test to the CH₂ (C3) hydrogens, Hₐ and H_b: replace Hₐ with D, then H_b with D. The two products are **diastereomers** (they differ at both the original C2 stereocenter and the new C3 center and are not mirror images), so Hₐ and H_b are **diastereotopic**: non-equivalent, at slightly different chemical shifts, and coupled to each other — producing a four-line **AB pattern** rather than a single CH₂ signal. This is why 2-butanol shows more ¹H signals than a naive carbon count suggests, and why the CH₂ of ethanol (`CCO`) gives ONE signal (enantiotopic hydrogens, replacement giving enantiomers) while the CH₂ of 2-butanol gives two.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "Same carbon = same environment" | Same environment | Hydrogens on the same carbon can be diastereotopic (CH₂ next to a stereocenter) and give two signals |
| Enantiotopic protons | Diastereotopic protons | Enantiotopic protons are equivalent in achiral NMR; diastereotopic protons always give separate signals |
| Equivalent protons | Coincidentally overlapping signals | Equivalent protons are related by symmetry or fast motion; overlapping signals are an accident of similar shifts |
| Chemical equivalence | Identical chemical shift | Equivalent protons must share one signal; non-equivalent protons *may* occasionally land at the same δ, but they are still separate environments |
| The substitution test products | Structural isomers | The test compares the *same* molecule modified at one position — not different connectivity isomers |

## Quick Review

1. How many ¹H NMR signals does propane (`CCC`) give, and in what integration ratio?
2. Define homotopic, enantiotopic, and diastereotopic protons; which are equivalent in achiral NMR?
3. Why do the three hydrogens of a methyl group always appear as one signal?
4. A molecule has formula C₄H₈ and shows exactly one ¹H NMR signal. What structure is it? (Hint: think symmetry.)

<details>
<summary>Show answers</summary>

1. Two signals in a 6:2 (3:1) ratio: the two equivalent CH₃ groups (6 H) and the single CH₂ (2 H).
2. Homotopic protons are related by a rotation axis (replacement gives the same compound); enantiotopic protons by a mirror plane (replacement gives enantiomers); diastereotopic protons by no symmetry operation (replacement gives diastereomers). Homotopic and enantiotopic protons are equivalent in achiral NMR; diastereotopic protons are not.
3. Rapid rotation about the C–CH₃ bond averages the three positions on the NMR timescale, so each hydrogen experiences the same average environment.
4. Cyclobutane (`C1CCC1`) — all eight hydrogens are equivalent by the ring's symmetry, so the spectrum shows one signal.
</details>

## Related Topics

- Previous: [Spin–Spin Splitting in 1H NMR Spectra](06-spin-spin-splitting-in-1h-nmr-spectra.md)
- Next: [More Complex Spin–Spin Splitting Patterns](08-more-complex-spin-spin-splitting-patterns.md)
- Related: [Chemical Shifts in 1H NMR Spectroscopy](04-chemical-shifts-in-1h-nmr-spectroscopy.md)
- Related: [Integration of 1H NMR Absorptions: Proton Counting](05-integration-of-1h-nmr-absorptions-proton-counting.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Equivalence classifications (homotopic/enantiotopic/diastereotopic) cross-checked against standard spectroscopy references (2026-08).
- Last updated: 2026-08-16
