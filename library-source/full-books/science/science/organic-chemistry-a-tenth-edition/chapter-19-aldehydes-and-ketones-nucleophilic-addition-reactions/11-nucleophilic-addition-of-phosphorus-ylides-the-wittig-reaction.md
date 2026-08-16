---
title: "Nucleophilic Addition of Phosphorus Ylides: The Wittig Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "19: Aldehydes and Ketones: Nucleophilic Addition Reactions"
topic_number: "11"
source: "organic-chemistry.md"
tags:
  - "nucleophilic-addition-of-phosphorus-ylides-the-wittig-reaction"
  - "science"
status: "complete"
---

# Nucleophilic Addition of Phosphorus Ylides: The Wittig Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 19: Aldehydes and Ketones: Nucleophilic Addition Reactions](../README.md)  
> **Topic:** 11  
> **Source structure:** OpenStax public textbook outline

## Overview

The **Wittig reaction** (Georg Wittig, 1954 Nobel Prize) converts an aldehyde or ketone into an alkene using a **phosphorus ylide** — a neutral, resonance-stabilized compound written Ph₃P=CR₂. The ylide carbon, bearing a lone pair and a formal negative charge in one resonance form, acts as a nucleophile toward the carbonyl carbon. The carbonyl carbon and the ylide carbon become the two carbons of the new double bond; triphenylphosphine oxide (Ph₃P=O) is the byproduct:

\[
\text{R}_2\text{C=O} + \text{Ph}_3\text{P}=\text{CR}'_2 \longrightarrow \text{R}_2\text{C}=\text{CR}'_2 + \text{Ph}_3\text{P=O}
\]

The reaction is prized because the double bond appears exactly where the carbonyl was: no migration, no elimination mixtures, no rearrangements. It works on aldehydes and ketones but not on esters, amides, or carboxylic acids.

The ylide is prepared in two steps: an \(\text{S}_\text{N}2\) reaction of triphenylphosphine with an alkyl halide gives a phosphonium salt, Ph₃P⁺–CHR₂ X⁻, and a strong base (butyllithium or sodium hydride) removes a proton from the carbon attached to phosphorus to give the ylide.

## Why This Matters

Before the Wittig reaction, specific alkenes were hard to make: eliminations gave isomer mixtures, and other olefinations had narrow scope. The Wittig reaction made alkene synthesis predictable and became a workhorse of total synthesis — the industrial route to vitamin A uses Wittig chemistry, and the reaction appears in countless natural-product syntheses.

It is also where most students meet **retrosynthetic thinking**: any alkene can be disconnected into a carbonyl and an ylide — seeing C=C as a future C=O + ylide pair, exactly what exam problems test. The reaction also showcases a recurring principle: it is driven by formation of the very strong P=O bond.

## Core Concepts

### Ylide structure: two faces of one reagent

The ylide is drawn with a P=C double bond, but it is better understood through resonance:

\[
\text{Ph}_3\text{P}^+-\text{C}^-\text{R}_2 \quad \longleftrightarrow \quad \text{Ph}_3\text{P}=\text{CR}_2
\]

The first (ylidic) form emphasizes that the carbon is carbanion-like and nucleophilic; the second (ylene) form shows the formal double bond (phosphorus is hypervalent — fine for a third-row element). **The ylide carbon is the nucleophile**, even though it sits next to a positively charged phosphorus. Substituents matter: alkyl or H give "unstabilized" ylides; electron-withdrawing groups (ester, nitrile, ketone) give "stabilized" ylides — less reactive but more selective.

### Preparing the ylide

1. **Phosphonium salt formation:** triphenylphosphine (Ph₃P) displaces halide from an alkyl halide in an \(\text{S}_\text{N}2\) reaction: Ph₃P + R–X → Ph₃P⁺–R X⁻. Primary and methyl halides work best.
2. **Deprotonation:** strong base removes the acidic α-proton (on the carbon attached to phosphorus), giving the ylide.

### Mechanism: addition, ring closure, and elimination

The accepted mechanism has three stages, described here in words (arrows omitted):

1. **Nucleophilic addition.** The ylide carbon attacks the carbonyl carbon; the C=O π electrons move onto oxygen, giving a zwitterionic **betaine** with positive charge on phosphorus and negative charge on oxygen (Ph₃P⁺–C–C–O⁻).
2. **Ring closure.** The oxygen attacks the phosphorus, closing a four-membered **oxaphosphetane** ring (P–O–C–C).
3. **Cycloreversion.** The ring fragments in an essentially concerted step: the C–C and P–O bonds become a new C=C, and the P–C and C–O bonds break, releasing triphenylphosphine oxide.

The driving force is the P=O double bond formed in step 3 — one of the strongest bonds in organic chemistry — making the reaction effectively irreversible.

### Scope and stereochemistry

- **Substrates:** aldehydes react faster than ketones; esters, amides, and nitriles do not react — their carbonyls are too deactivated toward the ylide.
- **Stereochemistry:** unstabilized ylides give predominantly **Z** alkenes under salt-free conditions; stabilized ylides give predominantly **E** alkenes. The Schlosser modification (low temperature, lithium salts) makes unstabilized-ylide reactions E-selective.
- **Position of the double bond:** the new C=C occupies exactly the position of the old C=O. The carbonyl carbon becomes one alkene carbon; the ylide carbon becomes the other.

## ELI-10: Explain Like I’m 10

> Imagine two dancers: a carbonyl molecule holds a bright balloon (the oxygen), and an ylide is a partner with a strong magnet. When they meet, the magnet grabs the balloon, the dancers twirl and link arms (forming the double bond), and the balloon pops off and sticks to the ylide's helper, who walks away with it. What's left is a new couple holding both arms — your alkene — and the helper never returns: popping that balloon released so much energy.

## High-Yield Points

- Net reaction: aldehyde or ketone + Ph₃P=CR₂ → alkene + Ph₃P=O.
- The ylide carbon is the nucleophile; its carbanion-like character comes from resonance with P⁺.
- Ylide preparation: \(\text{S}_\text{N}2\) (Ph₃P + R–X), then deprotonation with strong base.
- Mechanism: betaine → oxaphosphetane → cycloreversion; Ph₃P=O formation drives the reaction.
- Only aldehydes and ketones react — not esters, amides, or nitriles; aldehydes react faster than ketones.
- The C=C forms exactly where the C=O was; no rearrangement or migration.
- Unstabilized ylides → Z; stabilized ylides → E; Schlosser modification gives E from unstabilized ylides.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| ylide | Neutral molecule with adjacent opposite formal charges, \(\text{Ph}_3\text{P}^+\text{–C}^-\text{R}_2\) | The nucleophilic reagent that converts C=O into C=C |
| phosphonium salt | \(\text{Ph}_3\text{P}^+\text{–R}\ \text{X}^-\), from \(\text{S}_\text{N}2\) of Ph₃P with an alkyl halide | The precursor of the ylide |
| betaine | Zwitterionic intermediate Ph₃P⁺–C–C–O⁻ | First product of ylide attack on the carbonyl |
| oxaphosphetane | Four-membered P–O–C–C ring intermediate | Its fragmentation releases the alkene |
| triphenylphosphine oxide | Ph₃P=O, the byproduct | Its strong P=O bond drives the reaction |
| stabilized ylide | Ylide with an electron-withdrawing group on the ylide carbon | Less reactive; gives E alkenes predominantly |
| Schlosser modification | Low-temperature variant using lithium salts | Makes unstabilized-ylide reactions E-selective |

## How It Works / Step-by-Step Process

1. **Make the phosphonium salt:** Ph₃P + R–CH₂–X → Ph₃P⁺–CH₂R X⁻ (\(\text{S}_\text{N}2\)).
2. **Form the ylide:** strong base removes the α-proton next to P⁺, giving \(\text{Ph}_3\text{P}=\text{CHR}\).
3. **Add to the carbonyl:** the ylide carbon attacks the carbonyl carbon; the betaine forms.
4. **Close the ring:** \(\text{O}^-\) attacks P⁺ to give the oxaphosphetane.
5. **Fragment:** the ring breaks down to the alkene plus Ph₃P=O, which precipitates or is removed by chromatography.

## Worked Examples

### Example 1: Benzaldehyde to styrene

Predict the product of benzaldehyde (SMILES `O=Cc1ccccc1`) with methylenetriphenylphosphorane (Ph₃P=CH₂).

The ylide contributes a CH₂ group; the carbonyl carbon becomes the other alkene carbon. Benzaldehyde's \(\text{CHO}\) carbon plus the ylide's CH₂ give the terminal alkene styrene:

\[
\text{PhCHO} + \text{Ph}_3\text{P}=\text{CH}_2 \longrightarrow \text{PhCH}=\text{CH}_2 + \text{Ph}_3\text{P=O}
\]

The double bond sits exactly where the carbonyl was, and the product is a single isomer (terminal alkenes have no E/Z issue) — the classic laboratory route to styrene.

### Example 2: Cyclohexanone to methylenecyclohexane

Cyclohexanone (SMILES `O=C1CCCCC1`) reacts with the same ylide to give methylenecyclohexane (SMILES `C=C1CCCCC1`):

\[
\text{cyclohexanone} + \text{Ph}_3\text{P}=\text{CH}_2 \longrightarrow \text{methylenecyclohexane} + \text{Ph}_3\text{P=O}
\]

The exocyclic methylene forms at the ring carbon that was the carbonyl carbon. The product's IR spectrum shows a C=C stretch near 1650 cm⁻¹ and no carbonyl stretch near 1715 cm⁻¹ — a clean fingerprint of successful olefination.

### Example 3: Yield calculation with dimensional analysis

Benzyltriphenylphosphonium chloride, \(\text{Ph}_3\text{P}^+\text{–CH}_2\text{Ph}\ \text{Cl}^-\) (molar mass 388.9 g/mol), is converted to the ylide and reacted with benzaldehyde, giving styrene (molar mass 104.15 g/mol) in 85% yield. What mass of styrene is obtained from 3.89 g of the phosphonium salt?

Moles of phosphonium salt:

\[
n = \frac{m}{M} = \frac{3.89\ \text{g}}{388.9\ \text{g mol}^{-1}} = 1.00 \times 10^{-2}\ \text{mol}
\]

The 1:1 stoichiometry (salt → ylide → alkene) gives the same theoretical moles of styrene. Theoretical mass:

\[
m_{\text{theoretical}} = n \times M = (1.00 \times 10^{-2}\ \text{mol})(104.15\ \text{g mol}^{-1}) = 1.04\ \text{g}
\]

Apply the 85% yield:

\[
m_{\text{actual}} = 0.85 \times 1.04\ \text{g} = 0.885\ \text{g}
\]

Unit check: mol × g mol⁻¹ = g in both conversions. The sub-100% yield reflects losses during ylide formation, workup, and chromatography.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Ylide carbon as nucleophile | Phosphorus as the reactive site | The carbanionic carbon attacks the carbonyl; P⁺ only stabilizes it and later carries the oxygen away |
| Wittig reaction | Horner–Wadsworth–Emmons (HWE) reaction | HWE uses phosphonate esters, not ylides, and is generally E-selective even for unstabilized cases |
| "Ylide + ester gives alkene" | Ylide + aldehyde/ketone gives alkene | Esters, amides, and nitriles are unreactive toward ylides |
| Double-bond position can scramble | Position is fixed | The C=C replaces the C=O exactly; no migration or rearrangement occurs |
| Unstabilized ylides give E alkenes | Unstabilized give Z (stabilized give E) | EWG substituents on the ylide carbon flip the selectivity; a favorite exam trap |

## Quick Review

1. What two reagents react in a Wittig reaction, and what are the two products?
2. Which atom of the ylide acts as the nucleophile, and why?
3. Why does the reaction work for aldehydes and ketones but not esters?
4. What intermediate ring closes and then fragments during the mechanism?
5. Which ylide type gives Z alkenes, and which gives E?

<details>
<summary>Show answers</summary>

1. An aldehyde or ketone and a phosphorus ylide (Ph₃P=CR₂); the products are an alkene and triphenylphosphine oxide.
2. The ylide carbon — its carbanion-like character (resonance form \(\text{Ph}_3\text{P}^+\text{–C}^-\)) makes it nucleophilic despite sitting next to P⁺.
3. Ester, amide, and nitrile carbonyls are much less electrophilic because of resonance donation from the adjacent heteroatom; they cannot be attacked effectively by the ylide carbon.
4. The oxaphosphetane — a four-membered P–O–C–C ring formed from the betaine, which fragments to alkene + Ph₃P=O.
5. Unstabilized ylides give Z alkenes predominantly; stabilized ylides (electron-withdrawing group on the ylide carbon) give E alkenes.

</details>

## Related Topics

- Previous: [Nucleophilic Addition of Alcohols: Acetal Formation](10-nucleophilic-addition-of-alcohols-acetal-formation.md)
- Next: [Biological Reductions](12-biological-reductions.md)
- Related: [Nucleophilic Addition Reactions of Aldehydes and Ketones](04-nucleophilic-addition-reactions-of-aldehydes-and-ketones.md)
- Related: [Nucleophilic Addition of Hydride and Grignard Reagents: Alcohol Formation](07-nucleophilic-addition-of-hydride-and-grignard-reagents-alcohol-formation.md)
- Related: [Aldehydes and Ketones: Nucleophilic Addition Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: molar masses from standard atomic weights; styrene 104.15 g/mol and benzyltriphenylphosphonium chloride 388.9 g/mol cross-checked (2026-08).
- Last updated: 2026-08-16
