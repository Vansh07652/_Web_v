---
title: "Photochemical Electrocyclic Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "30: Orbitals and Organic Chemistry: Pericyclic Reactions"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "photochemical-electrocyclic-reactions"
  - "science"
status: "complete"
---

# Photochemical Electrocyclic Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 30: Orbitals and Organic Chemistry: Pericyclic Reactions](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A **photochemical electrocyclic reaction** is the same bond reorganization as the thermal version — a conjugated polyene closes to a cycloalkene or opens back — but driven by light instead of heat. The profound consequence is that the stereochemical outcome *flips*: the allowed mode of motion under photochemical conditions is the exact opposite of the thermal one. Where thermal butadiene closes conrotatorily, the photochemical reaction is disrotatory; where thermal hexatriene closes disrotatorily, the photochemical reaction is conrotatory.

The reason is the frontier-orbital logic of Topic 1. Absorption of a photon promotes an electron from the HOMO into the LUMO. The reacting orbital is now the formerly empty LUMO, whose symmetry is opposite to the ground-state HOMO (the S/A labels alternate up the ladder). Since the allowed rotation mode is dictated by that symmetry, light reverses the rules. Photochemical electrocyclic reactions are not a curiosity: they operate in nature (the first step of vitamin D₃ biosynthesis) and give chemists an alternative stereoisomer that heat cannot reach.

## Why This Matters

- **Complementary stereochemistry:** thermal and photochemical routes from the same starting material give different stereoisomers of the same product — a powerful way to reach either isomer on demand.
- **Vitamin D₃ biosynthesis:** in human skin, UV light drives the photochemical electrocyclic ring opening of 7-dehydrocholesterol (a steroid with a conjugated diene in the B ring) to previtamin D₃, which then isomerizes to vitamin D₃. This is a genuine, everyday example of a photochemical electrocyclic reaction.
- **Synthesis under mild conditions:** photochemical reactions can proceed at low temperature, which matters for thermally sensitive substrates.
- **Exams:** the "flip the rules" concept is a classic test of whether students understand *why* the rules exist rather than just memorizing them.

## Core Concepts

### What photoexcitation changes

In the ground state, butadiene's HOMO is ψ2 (antisymmetric, A) and its LUMO is ψ3 (symmetric, S). Absorption of a photon promotes one electron from ψ2 into ψ3. The excited molecule now has a singly occupied orbital (a SOMO) of **S symmetry** where its frontier electron lives — the symmetry the reaction must obey. Because S replaces A as the controlling orbital, the allowed mode reverses: the thermal conrotatory path (required for the A HOMO) is replaced by the disrotatory path (required for the S orbital).

### The photochemical rules

For a **photochemical** electrocyclic reaction, count the π electrons in the conjugated system:

- **4n π electrons** (4, 8, 12, ...) → **disrotatory** motion (opposite of thermal).
- **4n + 2 π electrons** (2, 6, 10, ...) → **conrotatory** motion (opposite of thermal).

So photochemical closure of butadiene (4 π electrons) is **disrotatory**, and photochemical closure of hexatriene (6 π electrons) is **conrotatory**. The mnemonic is simple: photochemical = thermal rules reversed.

### Stereochemical consequences

Because the mode flips, the product stereochemistry flips too (Topic 3's mapping with the modes exchanged):

- Photochemical closure of (2E,4E)-2,4-hexadiene (disrotatory) gives **cis-3,4-dimethylcyclobutene** — the isomer thermal reaction produces from the (2E,4Z) diene instead.
- Photochemical closure of (2Z,4E,6Z)-2,4,6-octatriene (conrotatory) gives **trans-5,6-dimethyl-1,3-cyclohexadiene**, while the thermal reaction gives the cis isomer.

The same starting material under heat vs light yields different stereoisomers — a dramatic demonstration that chemists control structure by choosing the energy source.

### What counts as "light"

For a photochemical reaction to occur, the photon must supply at least the HOMO→LUMO excitation energy of the π system. For simple dienes and trienes, that gap corresponds to ultraviolet wavelengths (roughly 200–300 nm; butadiene absorbs near 217 nm, hexatriene near 258 nm). Ordinary visible light cannot excite most unsubstituted polyenes. In practice, UV lamps emitting around 254 nm (mercury lamps) or 300 nm (sunlamps) drive these reactions; always follow standard UV safety precautions (protect eyes and skin, use UV-rated shielding) because UV is not visible and causes burns and eye damage.

## ELI-10: Explain Like I'm 10

> Think of the molecule as a swing set where one electron usually sits on the low swing (HOMO). Shining light gives that electron a big push so it jumps to the high swing (LUMO) — and now the rules of the game change, because the high swing sways the opposite way. The molecule still closes into a ring, but its flags (substituents) end up on the opposite sides compared with the heat version. Heat turns the doorknobs one way; light turns them the other way!

## High-Yield Points

- Photochemical electrocyclic reactions obey the **reversed** Woodward–Hoffmann rules: 4n → disrotatory; 4n + 2 → conrotatory.
- Photoexcitation promotes an electron HOMO → LUMO; the new frontier orbital has opposite symmetry, which is why the mode flips.
- Butadiene (4 e⁻) photochemically closes **disrotatorily**; hexatriene (6 e⁻) photochemically closes **conrotatorily**.
- Photochemical closure of (2E,4E)-2,4-hexadiene gives **cis-3,4-dimethylcyclobutene**; of (2Z,4E,6Z)-2,4,6-octatriene gives **trans-5,6-dimethyl-1,3-cyclohexadiene**.
- Vitamin D₃ synthesis begins with a photochemical electrocyclic ring opening of 7-dehydrocholesterol in skin.
- The photon must match the π→π* energy gap: unsubstituted dienes/trienes need UV light (~200–300 nm), not visible light.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| photochemical reaction | A reaction driven by absorption of light (photons) rather than heat | Reverses the pericyclic selection rules relative to thermal conditions |
| excited state | The molecule's configuration after an electron is promoted HOMO → LUMO | The frontier electron now occupies a different-symmetry orbital, changing the allowed mode |
| SOMO | Singly occupied molecular orbital in the excited state | The orbital whose symmetry controls the photochemical reaction |
| π→π* transition | Promotion of a π electron into an antibonding π orbital | The excitation that initiates photochemical electrocyclic reactions |
| UV (ultraviolet) light | Radiation at roughly 200–400 nm | The wavelength range that excites simple conjugated polyenes |

## How It Works / Step-by-Step Process

1. Count the π electrons in the conjugated chain.
2. Apply the *photochemical* rules: 4n → disrotatory; 4n + 2 → conrotatory (thermal rules reversed).
3. Check that the light source's wavelength is short enough to be absorbed (roughly λ ≤ 300 nm for simple dienes/trienes).
4. Rotate the ends by the photochemical mode and connect the termini with a new σ bond.
5. Read the stereochemistry: same face → cis; opposite faces → trans (Topic 3's tracking method).

## Worked Examples

### Example 1: Photochemical closure of (2E,4E)-2,4-hexadiene

The diene has 4 π electrons, so photochemical closure is **disrotatory** (thermal would be conrotatory). The (2E,4E) isomer has its terminal methyls on opposite faces of the chain zigzag. Disrotation rotates the ends in opposite directions, which — for this starting geometry — delivers the methyls to the **same face** of the forming cyclobutene ring. Product: **cis-3,4-dimethylcyclobutene**. Note the contrast: the thermal reaction (Topic 3) converts (2E,4E)-2,4-hexadiene to the *trans* cyclobutene; the photochemical reaction converts the same diene to the *cis* isomer. Same starting material, different stereoisomer, controlled entirely by heat vs light.

### Example 2: The photon energy requirement for butadiene

To close butadiene photochemically, a photon must first excite the π→π* transition. The excitation energy is \(E = hc/\lambda\), where \(h = 6.626 \times 10^{-34}\ \text{J·s}\) is Planck's constant, \(c = 2.998 \times 10^8\ \text{m/s}\) is the speed of light, and \(\lambda\) is the wavelength absorbed. Using butadiene's observed absorption maximum, \(\lambda_{\text{max}} = 217\ \text{nm} = 2.17 \times 10^{-7}\ \text{m}\):

\[
E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34}\ \text{J·s})(2.998 \times 10^8\ \text{m/s})}{2.17 \times 10^{-7}\ \text{m}} = 9.15 \times 10^{-19}\ \text{J}
\]

Unit check: J·s × (m/s) ÷ m = J. Converting to kilojoules per mole with Avogadro's number \(N_A = 6.022 \times 10^{23}\ \text{mol}^{-1}\):

\[
E = (9.15 \times 10^{-19}\ \text{J})(6.022 \times 10^{23}\ \text{mol}^{-1}) = 5.51 \times 10^5\ \text{J/mol} = 551\ \text{kJ/mol}
\]

So light of 217 nm (or shorter) carries enough energy to excite butadiene; a 254 nm mercury-lamp photon (471 kJ/mol) falls slightly short of the peak but still excites the low-energy tail of the absorption band. For hexatriene (λmax ≈ 258 nm), the required energy is \(E = hc/(2.58 \times 10^{-7}\ \text{m}) = 7.70 \times 10^{-19}\ \text{J} = 464\ \text{kJ/mol}\), which a 254 nm lamp easily supplies.

### Example 3: Photochemical closure of (2Z,4E,6Z)-2,4,6-octatriene

This triene has 6 π electrons, so photochemical closure is **conrotatory** (thermal would be disrotatory). The (2Z,4E,6Z) isomer has its terminal methyls on the same face of the chain. Conrotation moves both ends the same way, which delivers the methyls to **opposite faces** of the new six-membered ring. Product: **trans-5,6-dimethyl-1,3-cyclohexadiene** — the stereoisomer thermal reaction gives from the (2E,4E,6E) isomer instead. Once again: flip the conditions, flip the product.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Photochemical = hotter reaction | Photochemical = photon absorption | Light and heat are different energy sources with opposite stereochemical outcomes |
| Photochemical and thermal rules are the same | They are exact opposites | Excitation moves the frontier electron into an orbital of opposite symmetry |
| Any light source works | The photon must be absorbed | Only wavelengths matching the π→π* gap (UV for simple polyenes) drive the reaction |
| Light gives the same product as heat, just faster | Light gives a different stereoisomer | The reversed mode changes which faces the substituents land on |
| UV light is harmless because it's invisible | UV causes burns and eye damage | Always shield skin and eyes; use UV-rated glass/shielding |
| SOMO is the same as HOMO | SOMO is the excited-state frontier orbital | After excitation the reacting orbital is the former LUMO, now singly occupied |

## Quick Review

1. What is the photochemical rule for a 4-π-electron system, and why does it differ from the thermal rule?
2. Photochemical closure of (2E,4E)-2,4-hexadiene gives which stereoisomer?
3. Why does vitamin D₃ biosynthesis require UV light?
4. What energy (in kJ/mol) does a 254 nm photon carry, and is that enough to excite hexatriene (λmax ≈ 258 nm)?
5. How does photoexcitation change which orbital controls the reaction?

<details>
<summary>Show answers</summary>

1. 4n π electrons → disrotatory photochemically (thermal: conrotatory). The photon promotes an electron into the LUMO, whose symmetry is opposite to the ground-state HOMO, so the mode that achieves bonding overlap reverses.
2. cis-3,4-dimethylcyclobutene — disrotatory closure of the (2E,4E) diene brings its opposite-face methyls onto the same face of the ring.
3. The photochemical ring opening of 7-dehydrocholesterol requires a photon energetic enough to excite its conjugated π system; sunlight supplies the UV component that drives this step in skin.
4. \(E = hc/\lambda = (6.626 \times 10^{-34})(2.998 \times 10^8)/(2.54 \times 10^{-7}) = 7.82 \times 10^{-19}\ \text{J} = 471\ \text{kJ/mol}\). Hexatriene needs ~464 kJ/mol (from λmax ≈ 258 nm), so 254 nm light has enough energy.
5. The electron promoted HOMO → LUMO becomes the frontier electron (SOMO); its symmetry, opposite to the ground-state HOMO's, now dictates the allowed rotation mode.

</details>

## Related Topics

- Previous: [Stereochemistry of Thermal Electrocyclic Reactions](03-stereochemistry-of-thermal-electrocyclic-reactions.md)
- Next: [Cycloaddition Reactions](05-cycloaddition-reactions.md)
- Related: [Orbitals and Organic Chemistry: Pericyclic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: h = 6.62607015 × 10⁻³⁴ J·s, c = 2.99792458 × 10⁸ m/s, N_A = 6.02214076 × 10²³ mol⁻¹ (CODATA 2018). Observed λmax: butadiene ≈ 217 nm, trans,trans-hexatriene ≈ 258 nm (standard literature values). UV safety guidance is general: shield eyes/skin and use UV-rated shielding.
- Last updated: 2026-08-16
