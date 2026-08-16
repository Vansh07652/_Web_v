---
title: "Preparing Alkyl Halides from Alcohols"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "10: Organohalides"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "preparing-alkyl-halides-from-alcohols"
  - "science"
status: "complete"
---

# Preparing Alkyl Halides from Alcohols

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 10: Organohalides](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Alcohols are among the most abundant and inexpensive organic starting materials, so converting them into alkyl halides is one of the most practical functional-group transformations in the laboratory. The general reaction replaces the –OH group with a halogen:

\\[
\mathrm{R{-}OH + HX \longrightarrow R{-}X + H_2O}
\\]

where HX is a hydrogen halide (HCl, HBr, or HI). Two alternatives — phosphorus tribromide (PBr₃) and thionyl chloride (SOCl₂) — achieve the same conversion without strong acid and without the carbocation rearrangements that HX can trigger. The method you choose depends on the class of alcohol (primary, secondary, or tertiary) and on whether you need the halogen to replace the hydroxyl with clean, predictable stereochemistry.

## Why This Matters

Alkyl halides are the workhorses of organic synthesis: they are the starting materials for Grignard reagents (Topic 6), organometallic coupling reactions (Topic 7), and the nucleophilic substitution and elimination reactions of Chapter 11. Because alcohols are cheap and easy to handle, the alcohol-to-halide conversion is often the first step in a multi-step synthesis of a pharmaceutical, agrochemical, or specialty material. The Lucas test — a simple room-temperature reaction of an alcohol with HCl/ZnCl₂ — is also a classic way to classify an unknown alcohol as primary, secondary, or tertiary, which is a standard exam and lab skill.

## Core Concepts

### Why the –OH group must be activated first

A hydroxide ion (⁻OH) is a poor leaving group; hydroxide anion is a strong base and does not depart on its own. Before substitution can happen, the oxygen must be converted into a better leaving group. With HX, the alcohol is **protonated** first: the oxygen's lone pair grabs a proton to form an oxonium ion, R–OH₂⁺. Now the leaving group is neutral water, which departs far more easily. This single idea — activate the poor leaving group before substitution — explains why HX reactions work at all.

### Reaction with hydrogen halides

The mechanism depends on the class of alcohol:

- **Tertiary alcohols** react by an SN1-type pathway: protonation, loss of water to form a relatively stable tertiary carbocation, then capture of the halide ion. The reaction is fast and works even with HCl.
- **Primary alcohols** cannot form a stable carbocation, so they react by an SN2-type pathway in which the halide ion attacks the protonated alcohol while water leaves. This requires a strong nucleophile, which is why HBr and HI (good nucleophiles) react readily while HCl (chloride is a weaker nucleophile) is sluggish.
- **Secondary alcohols** sit in between and often show a mixture of behaviors.

Halide reactivity follows the order **HI > HBr > HCl >> HF**. Hydrogen fluoride is essentially useless here because fluoride is both a weak nucleophile and a poor leaving group. A practical consequence: HCl conversions of primary alcohols need a Lewis-acid catalyst such as ZnCl₂, which is exactly what the Lucas test exploits.

### Carbocation rearrangements

Whenever a carbocation forms, watch for rearrangement: a hydride or alkyl group can shift to give a more stable carbocation, so the product halogen ends up on a different carbon than the original –OH. For example, treating 3-methyl-2-butanol with HBr gives mostly 2-bromo-2-methylbutane, because the initially formed secondary carbocation rearranges (a methyl shift) to a more stable tertiary carbocation before bromide captures it. This is a classic exam trap.

### Phosphorus tribromide (PBr₃)

PBr₃ converts primary and secondary alcohols to bromides under mild, neutral conditions:

\\[
\mathrm{3\,R{-}OH + PBr_3 \longrightarrow 3\,R{-}Br + H_3PO_3}
\\]

The oxygen attacks PBr₃ to form an intermediate R–O–PBr₂, turning –OH into a good leaving group, and then bromide displaces it by an SN2 pathway. Because no carbocation forms, **no rearrangement occurs**, and a chiral center is converted **with inversion of configuration**. This makes PBr₃ the reagent of choice when stereochemistry must be controlled.

### Thionyl chloride (SOCl₂)

SOCl₂ converts alcohols to chlorides with only SO₂ and HCl as byproducts:

\\[
\mathrm{R{-}OH + SOCl_2 \longrightarrow R{-}Cl + SO_2 + HCl}
\\]

The alcohol attacks the sulfur to form a chlorosulfite ester, R–O–S(=O)Cl, which is an excellent leaving group. The stereochemical outcome depends on conditions: in the presence of pyridine, chloride displaces the chlorosulfite by SN2 with **inversion**; without pyridine, an ion pair is formed and chloride returns to the same face, giving **retention** of configuration. SOCl₂ is the standard route to alkyl chlorides from primary and secondary alcohols.

## ELI-10: Explain Like I'm 10

> Imagine the –OH group of an alcohol is a clumsy worker who cannot leave the job by himself. The HX reagent gives him a proton (a tiny helper) that turns him into water — and water can leave easily. For delicate jobs, chemists use PBr₃ or SOCl₂, which quietly replace the whole –OH group with a halogen without making a mess or shuffling the atoms around. Choosing the right tool depends on whether the alcohol is primary, secondary, or tertiary.

## High-Yield Points

- The –OH group is a poor leaving group; it must be protonated (with HX) or converted into a sulfite/phosphate ester (with SOCl₂ or PBr₃) before substitution.
- HX reactivity order: HI > HBr > HCl >> HF.
- Tertiary alcohols react by SN1 (via carbocation); primary alcohols react by SN2; secondary alcohols are intermediate.
- Carbocations can rearrange — watch for hydride or alkyl shifts that move the halogen to a different carbon.
- PBr₃ converts 1° and 2° alcohols to bromides with inversion and no rearrangement.
- SOCl₂ converts alcohols to chlorides; retention without pyridine, inversion with pyridine.
- Lucas test (HCl + ZnCl₂): tertiary alcohols turn cloudy immediately, secondary within minutes, primary barely react at room temperature.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| protonation | Adding an H⁺ to an atom; here, to the alcohol oxygen. | Turns –OH into –OH₂⁺, making water a good leaving group. |
| leaving group | The group that departs with the electron pair during substitution. | Water and halides are good leaving groups; hydroxide is not. |
| carbocation | A carbon bearing a positive charge and only six valence electrons. | Forms during SN1 reactions and can rearrange to change the product. |
| SN1 | Substitution, nucleophilic, unimolecular: two steps through a carbocation. | Dominates for tertiary alcohols; rate depends only on the alcohol. |
| SN2 | Substitution, nucleophilic, bimolecular: one concerted step. | Dominates for primary alcohols; causes inversion of configuration. |
| Lucas test | A mixture of concentrated HCl and ZnCl₂ used to classify alcohols. | Fast cloudiness = tertiary; slow = secondary; none = primary. |
| PBr₃ / SOCl₂ | Reagents that convert alcohols to bromides/chlorides without strong acid. | Give clean products with controlled stereochemistry and no rearrangement. |

## How It Works / Step-by-Step Process

1. Identify the class of the alcohol: primary, secondary, or tertiary (and whether it is allylic or benzylic, which react like tertiary).
2. Choose the reagent: HX for simple conversions; PBr₃ or SOCl₂ when you need controlled stereochemistry or want to avoid rearrangements.
3. For HX: protonate the oxygen, then let the halide substitute (SN2 for primary, SN1 for tertiary).
4. Check the product carbon skeleton for possible rearrangements; if a stable carbocation can form elsewhere, expect a mixture.

## Example: Two Worked Calculations

### Example 1: How much PBr₃ do you need?

A reaction calls for converting 0.30 mol of 1-butanol to 1-bromobutane with PBr₃. The balanced equation shows 3 mol of alcohol per 1 mol of PBr₃, so the mole ratio is:

\\[
n(\mathrm{PBr_3}) = n(\mathrm{alcohol}) \times \frac{1\ \mathrm{mol\ PBr_3}}{3\ \mathrm{mol\ alcohol}}
= 0.30\ \mathrm{mol} \times \frac{1}{3} = 0.10\ \mathrm{mol}
\\]

Now convert moles to mass using the molar mass of PBr₃ (P = 30.97, Br = 79.90):

\\[
m = n \times M = 0.10\ \mathrm{mol} \times 270.7\ \frac{\mathrm{g}}{\mathrm{mol}} \approx 27.1\ \mathrm{g}
\\]

The mol units cancel, leaving grams. You would measure out about 27 g of PBr₃ for this conversion — and because the reaction is done under dry conditions (PBr₃ hydrolyzes in water), an inert atmosphere and anhydrous technique are general good practice in a fume hood.

### Example 2: Predicting the product of 2-butanol + HBr

2-Butanol is secondary. With HBr it reacts by protonation followed by substitution of the secondary carbon. The immediate product is 2-bromobutane (CH3CHBrCH2CH3), a secondary alkyl bromide, formed with some SN1 character. Note the contrast with a tertiary alcohol: 2-methyl-2-propanol (tert-butyl alcohol) would instead form a tertiary carbocation almost instantly, giving 2-bromo-2-methylpropane as the only significant product — no rearrangement needed because the tertiary carbocation is already the most stable one available.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Hydroxide as a leaving group | Water as a leaving group | ⁻OH is a strong base and never leaves on its own; H₂O (from protonated alcohol) leaves readily. |
| Primary alcohol + HX | Tertiary alcohol + HX | Primary reacts by SN2 (slow, needs HBr/HI); tertiary reacts by SN1 via carbocation (fast, works with HCl). |
| PBr₃ reaction | HBr reaction | PBr₃ gives clean inversion with no carbocation and no rearrangement; HBr can form carbocations that rearrange. |
| Retention | Inversion | With SOCl₂/pyridine or PBr₃, configuration inverts (SN2); SOCl₂ alone can give retention through an ion pair. |
| "The reaction is fast" | "The reaction is thermodynamically favored" | Speed (kinetics) and favorability (thermodynamics) are different questions; tertiary alcohols are fast because the carbocation is stable. |

## Quick Review

1. Why can't an alcohol simply lose –OH to form a carbocation directly?
2. Rank HCl, HBr, HI, and HF in reactivity toward alcohols, and explain the order.
3. What is the Lucas test, and how does its result distinguish 1°, 2°, and 3° alcohols?
4. Why does PBr₃ give products with inversion of configuration and no rearrangement?
5. How many grams of SOCl₂ (M = 118.97 g/mol) are needed to convert 0.20 mol of 1-propanol to 1-chloropropane (1:1 stoichiometry)?

<details>
<summary>Show answers</summary>

1. Hydroxide is a strong base and a poor leaving group; it cannot depart with the electron pair. The oxygen must first be protonated (or converted to a sulfite/phosphate ester) so that a neutral molecule (H₂O) leaves instead.
2. HI > HBr > HCl >> HF. Iodide is the best nucleophile (largest, most polarizable) and the resulting C–I bond is weakest; fluoride is a poor nucleophile and forms a very strong C–F bond.
3. Mix the alcohol with concentrated HCl and ZnCl₂ (which helps chloride substitute). Tertiary alcohols give a cloudy layer (insoluble chloride) almost immediately; secondary alcohols cloud within minutes; primary alcohols give little or no cloudiness at room temperature.
4. PBr₃ converts –OH into a good leaving group (R–O–PBr₂) without ever forming a carbocation; bromide then displaces it in a single concerted SN2 step, which always approaches from the back side (inversion) and cannot rearrange.
5. \\(m = n \times M = 0.20\ \mathrm{mol} \times 118.97\ \mathrm{g/mol} \approx 23.8\ \mathrm{g}\\).

</details>

## Related Topics

- Previous: [Stability of the Allyl Radical: Resonance Revisited](04-stability-of-the-allyl-radical-resonance-revisited.md)
- Next: [Reactions of Alkyl Halides: Grignard Reagents](06-reactions-of-alkyl-halides-grignard-reagents.md)
- Related: [Organohalides chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
