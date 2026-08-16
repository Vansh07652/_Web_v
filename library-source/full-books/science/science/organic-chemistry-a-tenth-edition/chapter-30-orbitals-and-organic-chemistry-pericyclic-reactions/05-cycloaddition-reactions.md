---
title: "Cycloaddition Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "30: Orbitals and Organic Chemistry: Pericyclic Reactions"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "cycloaddition-reactions"
  - "science"
status: "complete"
---

# Cycloaddition Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 30: Orbitals and Organic Chemistry: Pericyclic Reactions](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

A **cycloaddition** is a pericyclic reaction in which two unsaturated molecules join end-to-end to form a ring: two π bonds are consumed and two new σ bonds form, and no atoms are lost. The two most important cases are the **[2+2] cycloaddition**, in which two alkenes (two π electrons each) combine to give a cyclobutane (e.g., two molecules of ethylene, `C=C`, giving `C1CCC1`), and the **[4+2] cycloaddition** — the famous **Diels–Alder reaction** — in which a diene (four π electrons) and a dienophile (two π electrons) give a cyclohexene ring (butadiene `C=CC=C` + ethylene → cyclohexene `C1CC=CCC1`).

Like all pericyclic reactions, cycloadditions are **concerted**: the two new σ bonds form in a single step through one cyclic transition state, with no intermediate. The electron bookkeeping is exact — a [4+2] cycloaddition has six π electrons in the transition state, a [2+2] has four — and that electron count decides whether the reaction is allowed thermally or photochemically. The Diels–Alder reaction is covered in depth in Chapter 14 (conjugated compounds); this topic focuses on the orbital-symmetry logic that makes cycloadditions work and explains why [2+2] reactions are "forbidden" under heat but "allowed" under light.

## Why This Matters

- **Ring construction:** cycloadditions form two bonds and a ring in one operation with 100% atom economy — no byproducts. The Diels–Alder reaction is arguably the most important ring-forming reaction in synthesis.
- **Explaining the [2+2] "problem":** two alkenes do *not* dimerize to cyclobutane on heating, even though the reaction is strongly exothermic by simple bond counting. Orbital symmetry explains why: the thermal [2+2] path is forbidden, and photochemical activation is required. This is the classic illustration that thermodynamics alone does not predict reactivity.
- **Photochemistry in biology:** the [2+2] cycloaddition is responsible for thymine dimer formation in DNA when skin is exposed to UV light — a damaging photochemical cycloaddition with real health consequences (and a reason to protect skin from UV).
- **Exams:** classifying a reaction as [2+2] or [4+2] and predicting thermal vs photochemical conditions is a staple problem.

## Core Concepts

### The electron bookkeeping

Number the electrons in the transition state:

- **[2+2] cycloaddition:** 2 π electrons + 2 π electrons = 4 π electrons. Two alkenes → cyclobutane; both π bonds are consumed and two σ bonds form.
- **[4+2] cycloaddition:** 4 π electrons + 2 π electrons = 6 π electrons. Diene + dienophile → cyclohexene; both diene π bonds are consumed, the dienophile's π bond survives as the product's double bond, and two σ bonds form.

The bracket numbers name the *electron* contributions (2, 4, or 2), not the atom counts — a common trap.

### The Woodward–Hoffmann selection rules for cycloadditions

Count the total π electrons in the two reactants:

- **4n + 2 total π electrons** (6, 10, ...) → thermally **allowed** (suprafacial on both components).
- **4n total π electrons** (4, 8, ...) → thermally **forbidden**; photochemically **allowed**.

So the [4+2] Diels–Alder reaction (6 π electrons) proceeds on heating, while the [2+2] reaction (4 π electrons) requires light. In Woodward–Hoffmann language, "forbidden" does not mean impossible — it means the reaction must cross a high symmetry-imposed barrier under thermal conditions; photochemical activation bypasses it.

### Suprafacial and antarafacial components

Each reactant can participate in two ways: **suprafacial** (both new bonds form on the same face of the π system) or **antarafacial** (one bond forms on each face). The practical rule: thermally allowed reactions use suprafacial/suprafacial combination for 4n + 2 electrons; a thermally forbidden 4n reaction could in principle escape via an antarafacial component, but that geometry is strained or impossible for small alkenes — which is exactly why thermal [2+2] cycloadditions are not observed.

### The frontier-orbital picture

The selection rules follow from orbital phase matching (Topic 1). In the Diels–Alder reaction, the diene's HOMO (ψ2, with its terminal lobes of matching phase) overlaps in a bonding way with the dienophile's LUMO (π*). The two ends match simultaneously — hence suprafacial/suprafacial and thermally allowed. For the [2+2] case, the alkene HOMO (π) and alkene LUMO (π*) are phase-matched at one end but mismatched at the other, so the bonding and antibonding interactions cancel — thermally forbidden. Photoexcitation promotes an electron into the LUMO, and the new frontier combination becomes bonding at both ends, making the [2+2] reaction allowed under light.

## ELI-10: Explain Like I'm 10

> Imagine two friends each holding a rope, and they want to tie the ropes into a loop by clicking the ends together. The [4+2] reaction is like a long rope and a short rope clicking together at both ends at once — it works fine at room temperature. The [2+2] reaction is like two short ropes that only *almost* match — if you try to click them together, one end matches but the other end fights you (that's "forbidden"). Give one friend a big light shove (shine UV light), and now both ends click together and you get the loop.

## High-Yield Points

- Cycloaddition: two molecules, two new σ bonds, two π bonds consumed, no atoms lost.
- [4+2] (6 π electrons): **thermally allowed** — the Diels–Alder reaction (diene + dienophile → cyclohexene).
- [2+2] (4 π electrons): **thermally forbidden**, **photochemically allowed** (two alkenes → cyclobutane under UV).
- The bracket numbers count π electrons (2, 4), not atoms.
- Allowed thermally = 4n + 2 electrons, suprafacial/suprafacial; forbidden thermally = 4n electrons.
- Phase matching explains the rules: the Diels–Alder HOMO(diene)–LUMO(dienophile) interaction is bonding at both ends; the thermal [2+2] interaction cancels at one end.
- UV-induced [2+2] cycloaddition of thymines in DNA is a real biological example (DNA damage).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| cycloaddition | Two unsaturated molecules combine to form a ring, losing no atoms | The most atom-economical way to build rings |
| [2+2] cycloaddition | Two 2-π-electron partners (two alkenes) → cyclobutane | Thermally forbidden; photochemically allowed |
| [4+2] cycloaddition | A 4-π-electron diene + 2-π-electron dienophile → cyclohexene | The Diels–Alder reaction; thermally allowed |
| Diels–Alder reaction | The classic [4+2] cycloaddition of a diene and a dienophile | Premier ring-forming reaction in synthesis (Chapter 14) |
| suprafacial | Both new bonds form on the same face of a reactant's π system | The normal geometry for thermally allowed cycloadditions |
| antarafacial | One new bond forms on each face of the π system | A theoretical escape route for forbidden reactions; strained in small systems |
| thermally forbidden | A high symmetry-imposed barrier blocks the ground-state path | Explains why [2+2] needs light despite favorable bond counts |

## How It Works / Step-by-Step Process

1. Identify the two reactants and count the π electrons in each (2 per double bond, 4 per conjugated diene).
2. Add them: total 4n + 2 → thermal; total 4n → photochemical (or no reaction under heat).
3. Confirm both components can react suprafacially (the normal case for practical cycloadditions).
4. Draw the ring: [2+2] → cyclobutane; [4+2] → cyclohexene with one remaining double bond.
5. Check atom conservation: every atom of both reactants must appear in the product.

## Worked Examples

### Example 1: Classifying cycloadditions by electron count

**Butadiene + ethylene ([4+2]):** butadiene contributes 4 π electrons, ethylene contributes 2; total = 6 = 4n + 2 with n = 1. Thermally **allowed**, suprafacial/suprafacial. Product: cyclohexene (SMILES `C1CC=CCC1`). **Ethylene + ethylene ([2+2]):** 2 + 2 = 4 = 4n with n = 1. Thermally **forbidden**; photochemically **allowed**. Product under UV light: cyclobutane (`C1CCC1`). The same counting rule that classifies electrocyclic reactions (Topic 2) classifies cycloadditions — but here the count spans *both* reactants.

### Example 2: Why the thermal [2+2] reaction needs light — an energy check

The forbidden thermal path is blocked by orbital symmetry, not by lack of exothermicity. To find what a photon must supply, estimate the alkene π→π* excitation energy for ethylene using the particle-in-a-box model from Topic 1:

\[
E_n = \frac{n^2 h^2}{8 m_e L^2}
\]

For ethylene, the box spans the two carbons extended half a bond beyond each end: \(L = 3 \times 1.34\ \text{Å} = 4.02\ \text{Å} = 4.02 \times 10^{-10}\ \text{m}\) (C=C bond length ≈ 1.34 Å). Ethylene has 2 π electrons in \(n = 1\), so the excitation is \(n = 1 \to n = 2\):

\[
\Delta E = E_2 - E_1 = \frac{(2^2 - 1^2)h^2}{8 m_e L^2} = \frac{3h^2}{8 m_e L^2}
\]

Substituting \(h = 6.626 \times 10^{-34}\ \text{J·s}\) and \(m_e = 9.109 \times 10^{-31}\ \text{kg}\):

\[
\Delta E = \frac{3(6.626 \times 10^{-34})^2}{8(9.109 \times 10^{-31})(4.02 \times 10^{-10})^2} = \frac{1.317 \times 10^{-66}}{1.178 \times 10^{-48}} = 1.12 \times 10^{-18}\ \text{J}
\]

Unit check: J²·s² / (kg·m²) = J. Converting to kJ/mol: \((1.12 \times 10^{-18}\ \text{J})(6.022 \times 10^{23}\ \text{mol}^{-1}) = 6.74 \times 10^5\ \text{J/mol} = 674\ \text{kJ/mol}\). The corresponding photon wavelength:

\[
\lambda = \frac{hc}{\Delta E} = \frac{(6.626 \times 10^{-34})(2.998 \times 10^8)}{1.12 \times 10^{-18}} = 1.77 \times 10^{-7}\ \text{m} \approx 177\ \text{nm}
\]

The model predicts UV absorption near 177 nm (ethylene actually absorbs near 172 nm — a good match), confirming that UV light, not visible light or ordinary heat, is what activates the [2+2] cycloaddition.

### Example 3: Reading the electron bookkeeping in a substituted Diels–Alder

Consider 1,3-butadiene plus maleic anhydride (SMILES `O=C1C=CC(=O)O1`), a classic dienophile with two electron-withdrawing carbonyls. Count the electrons: diene 4 + dienophile 2 = 6 → thermally allowed. The product is a bicyclic cyclohexene fused to the anhydride ring; the dienophile's electron-poor double bond reacts suprafacially, and its substituents (the two carbonyl groups) end up on the same face of the newly formed ring (the endo preference is covered in Topic 6). Every atom of both reactants survives in the product — check that atom conservation holds: butadiene C₄H₆ + maleic anhydride C₄H₂O₃ → C₈H₈O₃, the bicyclic adduct.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| [2+2] and [4+2] as atom counts | Electron counts | The brackets count π *electrons* contributed by each partner |
| Thermal [2+2] and [4+2] both proceed | Only [4+2] is thermally allowed | 4n electrons → forbidden; 4n + 2 → allowed |
| Forbidden = impossible | Forbidden = blocked thermally, allowed photochemically | UV activation bypasses the symmetry barrier |
| Cycloadditions are stepwise | They are concerted | Two σ bonds form simultaneously; no intermediate |
| Diels–Alder loses atoms | It has 100% atom economy | All atoms of both reactants appear in the product |
| Suprafacial and antarafacial are interchangeable | They are different geometries with different allowedness | Suprafacial/suprafacial is the normal, allowed thermal geometry |
| Any alkene pair dimerizes on heating | [2+2] dimerization needs UV light | Orbital symmetry forbids the thermal ground-state path |

## Quick Review

1. What is the total π-electron count in a [2+2] cycloaddition, and is it thermally allowed?
2. Why is the Diels–Alder reaction thermally allowed while the [2+2] is not?
3. In the bracket notation [4+2], what do the 4 and 2 represent?
4. What product forms from two ethylene molecules under UV light?
5. Estimate the photon wavelength needed to activate the ethylene π→π* transition using the particle-in-a-box model, and compare with experiment.

<details>
<summary>Show answers</summary>

1. 4 π electrons (2 + 2 = 4n with n = 1); thermally forbidden, photochemically allowed.
2. The [4+2] has 6 π electrons (4n + 2), and the diene HOMO/dienophile LUMO phases match at both ends (suprafacial/suprafacial). The [2+2] has 4 π electrons (4n); its HOMO–LUMO interaction is bonding at one end and antibonding at the other, so the thermal path cancels — light is required.
3. The number of π electrons contributed by each reactant: the diene contributes 4, the dienophile contributes 2.
4. Cyclobutane — a photochemical [2+2] cycloaddition.
5. Model: ΔE = 3h²/(8mₑL²) with L = 3 × 1.34 Å = 4.02 Å gives ΔE = 1.12 × 10⁻¹⁸ J and λ = hc/ΔE ≈ 177 nm; ethylene's observed absorption is near 172 nm, in good agreement.

</details>

## Related Topics

- Previous: [Photochemical Electrocyclic Reactions](04-photochemical-electrocyclic-reactions.md)
- Next: [Stereochemistry of Cycloadditions](06-stereochemistry-of-cycloadditions.md)
- Related: [Orbitals and Organic Chemistry: Pericyclic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: h = 6.62607015 × 10⁻³⁴ J·s, mₑ = 9.1093837015 × 10⁻³¹ kg, c = 2.99792458 × 10⁸ m/s, N_A = 6.02214076 × 10²³ mol⁻¹ (CODATA 2018); C=C bond length ≈ 1.34 Å; ethylene π→π* observed near 172 nm (gas phase, standard literature value). UV exposure is a known cause of DNA thymine dimer formation (photochemical [2+2] cycloaddition).
- Last updated: 2026-08-16
