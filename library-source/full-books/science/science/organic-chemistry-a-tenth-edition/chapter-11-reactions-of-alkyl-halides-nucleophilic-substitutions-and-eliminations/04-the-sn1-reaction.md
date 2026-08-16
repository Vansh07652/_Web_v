---
title: "The SN1 Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "the-sn1-reaction"
  - "science"
status: "complete"
---

# The SN1 Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

The SN2 reaction swaps a leaving group for a nucleophile in one concerted shove. The **SN1 reaction** takes the opposite strategy: the leaving group departs first, forming a **carbocation** intermediate, and only then does the nucleophile attack. The name decodes as **S** = substitution, **N** = nucleophilic, **1** = unimolecular — only the alkyl halide appears in the slow, rate-determining step. Because the first step is an ionization, SN1 works only when the carbocation formed is reasonably stable: tertiary and resonance-stabilized (benzylic, allylic) substrates are ideal, and polar protic solvents help by solvating the ions. Two consequences follow: the rate law contains no nucleophile term, and the planar carbocation can be attacked from either face, giving mostly racemized products from chiral starting materials. Carbocations can also **rearrange** to more stable isomers. The next topic examines stereochemistry, solvent effects, and reactivity in detail.

## Why This Matters

- **Solvolysis chemistry:** Dissolving an alkyl halide in water or an alcohol converts it to an alcohol or ether — relevant to drug stability.
- **Carbocations everywhere:** Terpene and steroid biosynthesis runs on carbocation intermediates and rearrangements; SN1's cation chemistry explains "unexpected" products.
- **Rearrangement prediction:** Exams routinely ask for the rearranged product; knowing when a hydride or methyl shift occurs is high-yield.
- **Acid-catalyzed reactions:** Alcohols under acidic conditions react through protonated forms whose chemistry mirrors SN1.
- **Mechanistic reasoning:** SN1 vs SN2 decisions test weighing substrate, nucleophile, solvent, and leaving group — the core analytical habit of the course.

## Core Concepts

### The two-step mechanism

SN1 proceeds through a **carbocation intermediate** in two steps:

1. **Ionization (slow, rate-determining):** the C–X bond breaks heterolytically; the leaving group departs with both electrons: R–X → R⁺ + X⁻. The carbocation is planar (sp²) at the charged carbon, with an empty p orbital.
2. **Nucleophilic capture (fast):** any nucleophile present — often the solvent itself — attacks the cation: R⁺ + Nu⁻ → R–Nu. If the nucleophile is neutral, a final deprotonation gives the neutral product.

Because step 1 is slow and step 2 is fast, everything after ionization is invisible to the rate.

### The rate law

Only the substrate appears in the rate law:

\[
\text{rate} = k[\text{R–X}]
\]

The reaction is first order overall. Doubling [R–X] doubles the rate; changing the nucleophile's concentration or identity has **no effect** on the rate, only on the product. This separates SN1 from SN2.

### Carbocation stability decides feasibility

The ionization step is energetically expensive, so SN1 proceeds only when the cation is reasonably stable:

\[
3^\circ > 2^\circ > 1^\circ > \text{CH}_3^+
\]

Alkyl groups stabilize the positive charge by **hyperconjugation** (σ-bond electrons delocalize into the empty p orbital) and **inductive donation**; resonance adds extra stability for benzylic and allylic cations. As an approximate guide, tertiary halides solvolyze roughly 10⁵–10⁶ times faster than primary halides. Methyl and primary halides almost never react by SN1; secondary halides do so only under strongly ionizing conditions.

### The role of leaving group and solvent

A good leaving group (I⁻ > Br⁻ > Cl⁻; also H₂O from a protonated alcohol, and tosylate) lowers the barrier to ionization. **Polar protic solvents** are essential partners: water and alcohols solvate both the cation and the departing anion, stabilizing the ions formed in the slow step — the opposite of SN2, which is slowed by protic solvents.

### Carbocation rearrangements

If a 1,2 shift (hydride or alkyl) produces a more stable cation, it happens before the nucleophile attacks. A 2° cation adjacent to a 3° carbon can rearrange via a 1,2-hydride shift; a 1,2-methyl shift is slower but occurs when no hydride is available. The result is a product with a different carbon skeleton — a classic exam trap that becomes predictable once you check cation stability.

### Solvolysis: the solvent as nucleophile

In **solvolysis**, the solvent acts as the nucleophile: R–X in water gives R–OH, in methanol R–OCH₃. The solvent is in huge excess, so the reaction is cleanly first order.

## ELI-10: Explain Like I'm 10

SN1 is like a relay race where the first runner (the leaving group) runs away before the second (the nucleophile) even starts. The first runner leaves slowly — that's the hard part — and the second grabs the open spot quickly. Because the spot is flat and open on both sides, the new runner can come from either direction. Sometimes the team rearranges into a stronger lineup before the second runner arrives — that's the carbocation rearrangement.

## High-Yield Points

- SN1 = substitution, nucleophilic, unimolecular: two steps, one intermediate (carbocation), ionization rate-determining.
- Rate law: rate = k[R–X] — first order; the nucleophile does not appear.
- Carbocation stability: 3° > 2° > 1° > methyl; benzylic and allylic cations are resonance-stabilized.
- Requires a good leaving group and a polar protic solvent (water, alcohols) that stabilizes ions.
- Planar cation → attack from either face → racemization (details in next topic).
- Watch for 1,2-hydride and 1,2-methyl shifts that form more stable cations; rearranged products are common.
- Solvolysis (solvent = nucleophile) is the classic SN1 experiment: R–X + H₂O → R–OH.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Carbocation | A carbon with a positive charge and only six valence electrons (empty p orbital) | The SN1 intermediate; its stability controls whether the reaction occurs |
| Unimolecular | Only one molecule appears in the rate-determining step | Explains why rate = k[R–X] and the nucleophile is absent |
| Ionization | Heterolytic breaking of C–X, both electrons go to X | The slow, rate-determining step of SN1 |
| Hyperconjugation | σ-bond electrons delocalize into the empty p orbital | The main reason alkyl groups stabilize carbocations (3° > 2° > 1°) |
| 1,2-Hydride shift | H with its electron pair migrates to the adjacent cationic carbon | Creates a more stable cation and a different product |
| 1,2-Methyl shift | A methyl group migrates when no hydride is available | Second pathway to a more stable cation |
| Solvolysis | The solvent (water, alcohol) acts as the nucleophile | The standard SN1 experiment; halides become alcohols or ethers |
| First-order kinetics | Rate ∝ [R–X] only | The experimental fingerprint of SN1 |

## How It Works / Step-by-Step Process

**Mechanism of (CH₃)₃CBr + H₂O → (CH₃)₃COH (tert-butyl alcohol):**

1. The C–Br bond breaks heterolytically; Br⁻ departs with the electron pair, leaving a planar tert-butyl cation, (CH₃)₃C⁺.
2. A water molecule's lone pair attacks the empty p orbital from either face, forming (CH₃)₃C–OH₂⁺.
3. A second water removes a proton, giving tert-butyl alcohol and H₃O⁺.

Curved arrows in words: C–Br bond pair → bromine; water lone pair → empty p orbital; O–H bond pair → second water.

## Worked Examples

### Example 1: Rate-law arithmetic for a solvolysis

tert-Butyl bromide solvolyzes in water: (CH₃)₃CBr + H₂O → (CH₃)₃COH + HBr, with rate = k[(CH₃)₃CBr]. Using an illustrative k = 4.5 × 10⁻³ s⁻¹ and [(CH₃)₃CBr] = 0.050 M, what is the rate? What happens if the water concentration is doubled?

**Formula first:**

\[
\text{rate} = k[(\text{CH}_3)_3\text{CBr}]
\]

**Substitute with units (dimensional analysis):**

\[
\text{rate} = (4.5 \times 10^{-3}\ \text{s}^{-1})(0.050\ \text{M}) = 2.25 \times 10^{-4}\ \text{M}\cdot\text{s}^{-1}
\]

The units work out because s⁻¹ × M = M·s⁻¹. Doubling [H₂O] changes nothing — water is the solvent, absent from the rate law. Only changes in [(CH₃)₃CBr] affect the rate.

### Example 2: Predicting the SN1 product

Predict the major product when 2-bromo-2-methylpropane reacts with water.

**Reasoning:** Tertiary substrate, good leaving group, polar protic solvent — textbook SN1.

**Steps:** ionization → (CH₃)₃C⁺; water attacks; deprotonation gives the neutral product:

\[
(\text{CH}_3)_3\text{CBr} \xrightarrow{\text{H}_2\text{O}} (\text{CH}_3)_3\text{COH}
\]

**Answer:** tert-butyl alcohol (2-methyl-2-propanol). No rearrangement is possible because the cation is already 3°.

### Example 3: Spotting a rearrangement

2-Bromo-3-methylbutane (CH₃CH(Br)CH(CH₃)₂) is treated with ethanol. Predict the major substitution product.

**Reasoning:** Ionization gives the 2° cation CH₃CH⁺CH(CH₃)₂; a 1,2-hydride shift gives the 3° cation CH₃CH₂–C⁺(CH₃)₂.

**Answer:** ethanol attacks the rearranged cation, giving **2-methyl-2-butanol**, CH₃CH₂C(OH)(CH₃)₂ — the rearranged product; the unrearranged 3-methyl-2-butanol is minor. Always check for a more stable cation first.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| SN1 (2 steps, carbocation) | SN2 (1 step, no intermediate) | SN1 has an intermediate and first-order kinetics; SN2 is concerted and second order |
| Rate depends on substrate only | Rate depends on both (SN2) | The nucleophile is absent from the SN1 rate law |
| 3° fast in SN1 | 3° fast in SN2 | Tertiary halides are inert to SN2 (steric) but ideal for SN1 (cation stability) |
| A 1,2-shift always happens | Shifts only to a more stable cation | If the cation is already 3° (most stable), no rearrangement occurs |
| Carbocation (intermediate) | Transition state | An intermediate is an energy minimum; a transition state is the energy maximum |
| SN1 needs a strong nucleophile | SN1 needs any nucleophile | The nucleophile doesn't affect the rate; even weak ones like water work (solvolysis) |

## Quick Review

1. Write the rate law for the solvolysis of (CH₃)₃CBr in water. What happens if [(CH₃)₃CBr] is tripled? If [H₂O] is doubled?
2. Why is 2-bromo-2-methylpropane an ideal SN1 substrate but 1-bromopropane never reacts by SN1?
3. What intermediate forms in the first step of SN1, and what is its geometry?
4. When does a carbocation rearrange, and what two kinds of 1,2-shifts exist?
5. Predict the product of (CH₃)₃CBr + CH₃OH.

<details>
<summary>Show answers</summary>

1. rate = k[(CH₃)₃CBr]; tripling [(CH₃)₃CBr] triples the rate; doubling [H₂O] changes nothing (water is the solvent and absent from the rate law).
2. tert-Butyl bromide gives a stable 3° carbocation; 1-bromopropane would give a very unstable primary cation, so SN1 never happens for primary halides.
3. A carbocation — planar (sp²), with an empty p orbital at the charged carbon.
4. A cation rearranges when a 1,2-hydride or 1,2-methyl shift forms a more stable cation (e.g., 2° → 3°); if already most stable, no shift occurs.
5. tert-Butyl methyl ether, (CH₃)₃COCH₃ — SN1 solvolysis with methanol as the nucleophile.

</details>

## Related Topics

- Previous: [Characteristics of the SN2 Reaction](03-characteristics-of-the-sn2-reaction.md)
- Next: [Characteristics of the SN1 Reaction](05-characteristics-of-the-sn1-reaction.md)
- Related: [Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Rate constants shown in worked examples are illustrative; relative rate comparisons (3° vs 1° solvolysis) are order-of-magnitude textbook approximations. Verify numerical values against current sources before relying on them in assessments.
- Last updated: 2026-08-16
