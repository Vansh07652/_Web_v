---
title: "Oxidation of Alcohols"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "17: Alcohols and Phenols"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "oxidation-of-alcohols"
  - "science"
status: "complete"
---

# Oxidation of Alcohols

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 17: Alcohols and Phenols](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

In organic chemistry, "oxidation" means a change in the **number of C–H and C–O bonds at the carbon of interest**: a carbon is oxidized when it gains C–O bonds or loses C–H bonds. An alcohol carbon already holds one C–O bond; oxidation converts it to a carbonyl (a second C–O bond) or, for primary alcohols, all the way to a carboxylic acid (a C–O double bond plus an O–H). The carbon skeleton is never broken by these oxidations, and the product is dictated by two factors: whether the alcohol is **primary, secondary, or tertiary**, and **how strong and how wet** the oxidizing agent is.

The reagents form a predictable ladder. **Mild, anhydrous oxidants** such as PCC (pyridinium chlorochromate) stop at the aldehyde for 1° alcohols. **Strong aqueous oxidants** such as \(\text{CrO}_3/\text{H}_2\text{SO}_4\) (Jones reagent) or \(\text{KMnO}_4\) push 1° alcohols to carboxylic acids and convert 2° alcohols to ketones. **Tertiary alcohols have no hydrogen on the –OH carbon**, so they resist oxidation under normal conditions — a fact that is both a synthetic blessing and a classic exam question.

## Why This Matters

Alcohol oxidation is the industrial and laboratory route to aldehydes, ketones, and carboxylic acids — three of the most important carbonyl families. Formaldehyde (from methanol oxidation) is a building block for resins and disinfectants; acetaldehyde and acetic acid come from ethanol oxidation; cyclohexanone (from cyclohexanol) is the feedstock for nylon-6,6. In medicine, the same chemistry runs in the liver: **alcohol dehydrogenase** oxidizes ethanol to acetaldehyde using NAD⁺, and aldehyde dehydrogenase converts it to acetate. That two-step pathway explains both the effects of drinking and the toxicity of methanol, which is oxidized first to formaldehyde and then to formic acid. Knowing which functional group an oxidant delivers — and why a 3° alcohol survives — lets you read a synthesis plan, predict a metabolic fate, and spot the trap in a "product prediction" problem.

## Core Concepts

### What "oxidation" means for an alcohol carbon

Count bonds, not electrons. At the –OH carbon:

- **1° alcohol** (\(\text{RCH}_2\text{OH}\)): one C–O bond, three C–H bonds. Oxidation to aldehyde removes two C–H bonds and adds a second C–O bond (a C=O). Further oxidation to the carboxylic acid adds an O–H.
- **2° alcohol** (\(\text{R}_2\text{CHOH}\)): one C–O bond, one C–H bond. Oxidation to a ketone removes the C–H and forms the C=O. Ketones are resistant to further oxidation under normal conditions.
- **3° alcohol** (\(\text{R}_3\text{COH}\)): one C–O bond, **zero C–H bonds** on that carbon. There is nothing to remove, so no oxidation occurs with typical reagents.

### Chromium(VI) reagents: PCC vs Jones

Chromium(VI) oxidants are the workhorses. The mechanism is an **esterification–elimination**: the alcohol's oxygen attacks the electrophilic Cr(VI), forming a chromate ester; then a base removes the α-hydrogen while the Cr–O bond breaks, giving the carbonyl and a reduced chromium species. The oxidation state change is Cr(VI) → Cr(III), a three-electron reduction per chromium.

- **PCC** (pyridinium chlorochromate, \(\text{C}_5\text{H}_5\text{NH}^+\text{CrO}_3\text{Cl}^-\)) in dry \(\text{CH}_2\text{Cl}_2\): anhydrous, so the aldehyde cannot hydrate to the gem-diol that would be further oxidized. **1° alcohol → aldehyde; 2° alcohol → ketone.**
- **Jones reagent** (\(\text{CrO}_3\) + \(\text{H}_2\text{SO}_4\) in aqueous acetone): water is present, so 1° alcohols go all the way to **carboxylic acids**; 2° alcohols give ketones. Mild enough that C=C bonds usually survive.
- **Other Cr(VI) forms:** \(\text{K}_2\text{Cr}_2\text{O}_7/\text{H}_2\text{SO}_4\) behaves like Jones; \(\text{CrO}_3\) in pyridine is a milder variant.

### Other oxidants worth knowing

- **\(\text{KMnO}_4\)** (aqueous, often basic or with acid): strong; 1° → carboxylic acid, 2° → ketone. Harsher than Jones; it can also cleave alkenes, so it is not the gentle choice when a double bond is present.
- **\(\text{NaOCl}\) (household bleach)** with a catalytic amount of TEMPO: a mild, cheap, scalable route from 1° alcohols to aldehydes or, in buffered aqueous conditions, to carboxylic acids; 2° alcohols to ketones. Industrially important because it avoids toxic chromium waste.
- **\(\text{Ag}_2\text{O}/\text{NH}_3\) (Tollens' reagent)** and **\(\text{Cu}^{2+}\) (Benedict's/Fehling's)**: selectively oxidize aldehydes to carboxylic acids; a 1° alcohol is first converted to the aldehyde by the reagent itself, but the practical classic use is distinguishing aldehydes from ketones.

### Biological oxidation: NAD⁺ and the liver

Enzymes use **NAD⁺ (nicotinamide adenine dinucleotide)** as the oxidant. Alcohol dehydrogenase removes a hydride (\(\text{H}^-\)) from the –OH carbon and transfers it to NAD⁺, giving NADH and a carbonyl:

\[
\text{CH}_3\text{CH}_2\text{OH} + \text{NAD}^+ \longrightarrow \text{CH}_3\text{CHO} + \text{NADH} + \text{H}^+
\]

The reaction is formally the same loss of C–H / gain of C=O as the chromium reagents, but it runs at body temperature in water. Because methanol is oxidized to formaldehyde and then formic acid (both toxic), methanol poisoning is treated with ethanol: ethanol competes for alcohol dehydrogenase, slowing the production of the toxic metabolites.

## ELI-10: Explain Like I'm 10

> Think of the –OH carbon as having two "slots" that can hold hydrogen atoms. Oxidation is like taking hydrogen atoms out of those slots and putting in a double bond to oxygen instead. A secondary alcohol has one hydrogen to lose, so it can only become a ketone. A primary alcohol has two hydrogens to lose, so it can go one step (aldehyde) or two steps (carboxylic acid). A tertiary alcohol has no hydrogen in its slots at all — there is nothing to remove, so it just sits there while the oxidant fumes.

## High-Yield Points

- Oxidation = loss of C–H bonds and/or gain of C–O bonds at the –OH carbon; the carbon skeleton is preserved.
- **1° + PCC (dry) → aldehyde; 1° + Jones/KMnO₄ (aqueous) → carboxylic acid.**
- **2° + any oxidant → ketone** (ketones resist further oxidation).
- **3° alcohols do not oxidize** (no H on the –OH carbon).
- Jones reagent = \(\text{CrO}_3/\text{H}_2\text{SO}_4\) in aqueous acetone; mild enough to leave C=C intact.
- Chromium goes Cr(VI) → Cr(III) (3 e⁻ per Cr); the alcohol loses 2 e⁻ (1°→aldehyde or 2°→ketone) or 4 e⁻ (1°→acid).
- Biological oxidant: NAD⁺ → NADH; alcohol dehydrogenase converts ethanol → acetaldehyde.
- Aldehydes are more easily oxidized than alcohols — that is why anhydrous PCC is required to stop at the aldehyde.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Oxidation (organic) | Gain of C–O bonds / loss of C–H bonds at carbon | The organizing rule for predicting alcohol oxidation products |
| PCC | Pyridinium chlorochromate, an anhydrous Cr(VI) reagent | Stops 1° alcohols at the aldehyde; oxidizes 2° to ketones |
| Jones reagent | \(\text{CrO}_3\) + \(\text{H}_2\text{SO}_4\) in aqueous acetone | Takes 1° alcohols to carboxylic acids; standard for ketones from 2° alcohols |
| Chromate ester | R–O–Cr(VI) intermediate in chromium oxidations | The key mechanistic step; its breakdown forms the C=O |
| NAD⁺ / NADH | Nicotinamide adenine dinucleotide redox pair | The biological oxidant/reductant in alcohol and aldehyde metabolism |
| Aldehyde | \(\text{RCHO}\); the two-hydrogen oxidation product of a 1° alcohol | More reactive than the alcohol; easily oxidized further to the acid |
| TEMPO | A nitroxyl radical catalyst used with NaOCl | Enables mild, chromium-free industrial oxidations |
| Alcohol dehydrogenase | Enzyme that oxidizes alcohols with NAD⁺ | Central to ethanol metabolism and methanol toxicity |

## Worked Examples

### Example 1: Choose the reagent to make hexanal, not hexanoic acid

**Problem.** Convert 1-hexanol to hexanal without over-oxidation. Show the reaction.

**Step 1 — recognize the target.** Hexanal is the aldehyde; 1-hexanol is primary. Aldehydes are oxidized faster than alcohols in aqueous solution, so water must be excluded.

**Step 2 — reagent choice.** PCC in dry dichloromethane. (Jones or KMnO₄ would give hexanoic acid.)

**Step 3 — write the balanced transformation:**

\[
\text{CH}_3(\text{CH}_2)_4\text{CH}_2\text{OH} \xrightarrow{\text{PCC, CH}_2\text{Cl}_2} \text{CH}_3(\text{CH}_2)_4\text{CHO}
\]

**Answer.** Hexanal forms in high yield because the anhydrous conditions prevent hydration of the aldehyde.

### Example 2: Stoichiometry of a Jones oxidation with dimensional analysis

**Problem.** How many grams of \(\text{CrO}_3\) are required to oxidize 0.150 mol of cyclohexanol to cyclohexanone, assuming each \(\text{CrO}_3\) accepts 3 electrons and each alcohol donates 2?

**Step 1 — electron bookkeeping.** One 2° alcohol → ketone is a 2-electron oxidation. Chromium(VI) → chromium(III) is a 3-electron reduction.

**Step 2 — ratio.** To balance electrons, 3 alcohols donate 3 × 2 = 6 e⁻ and 2 chromiums accept 2 × 3 = 6 e⁻. Mole ratio: 3 mol alcohol per 2 mol \(\text{CrO}_3\).

\[
\frac{2\ \text{mol CrO}_3}{3\ \text{mol alcohol}}
\]

**Step 3 — dimensional analysis.** Molar mass of \(\text{CrO}_3\) = 52.00 + 3 × 16.00 = 100.00 g/mol.

\[
0.150\ \text{mol alcohol} \times \frac{2}{3} = 0.100\ \text{mol CrO}_3
\]

\[
0.100\ \text{mol CrO}_3 \times 100.00\ \frac{\text{g}}{\text{mol}} = 10.0\ \text{g CrO}_3
\]

**Answer.** 10.0 g of \(\text{CrO}_3\) provides the electrons needed for 0.150 mol of cyclohexanol. (In practice you use excess oxidant to drive the reaction to completion.)

### Example 3: Predict the product of 2-methyl-2-propanol + KMnO₄

**Problem.** Treat 2-methyl-2-propanol (tert-butyl alcohol) with hot aqueous \(\text{KMnO}_4\). What forms?

**Step 1 — classify.** The –OH carbon (central carbon of the tert-butyl group) bears three methyl groups and **no hydrogen**.

**Step 2 — apply the rule.** Oxidation requires removal of a C–H bond at the –OH carbon; there is none.

**Answer.** No oxidation occurs under normal conditions; the alcohol is recovered unchanged (this is why tert-butyl alcohol is used as a solvent in oxidations). Note the contrast: 2-methyl-2-propanol is the classic "unoxidizable" alcohol, whereas 2-propanol cleanly gives acetone.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| PCC vs Jones reagent | Both Cr(VI), both oxidize alcohols | PCC is anhydrous → stops at aldehyde. Jones is aqueous → carboxylic acid from 1° alcohols |
| Aldehyde vs ketone product | 1° vs 2° alcohol oxidation | 1° gives RCHO (then RCOOH with aqueous oxidants); 2° gives R₂C=O only |
| "Tertiary alcohols don't oxidize" | "Tertiary alcohols are inert" | They resist oxidation at the –OH carbon, but they still react as bases, form alkoxides, dehydrate, and can be cleaved by very harsh oxidants |
| Oxidation vs combustion | Controlled C–H/C–O changes vs burning | Laboratory oxidation preserves the skeleton; combustion destroys it to CO₂ and H₂O |
| NAD⁺ vs NADH | Oxidized vs reduced form | NAD⁺ accepts a hydride (oxidizes the alcohol); NADH is the electron-rich product that later donates electrons |
| Acetaldehyde from ethanol | "Alcohols make acids directly" | Ethanol → acetaldehyde (2 e⁻) → acetic acid (2 more e⁻): two separate enzyme/reagent steps |

## Quick Review

1. What structural feature of a tertiary alcohol makes it resistant to oxidation?
2. Which reagent converts 1-butanol to butanal, and why does it not continue to butanoic acid?
3. Jones reagent is used on 3-methyl-2-butanol. What is the major product?
4. How many grams of \(\text{CrO}_3\) (molar mass 100.00 g/mol) are needed to oxidize 0.300 mol of 2-butanol to 2-butanone (2 e⁻ per alcohol, 3 e⁻ per Cr)?
5. In the liver, ethanol is oxidized in two steps. Name the intermediates and the final product.
6. Why would a chemist choose NaOCl/TEMPO over Jones reagent for a large-scale oxidation?

<details>
<summary>Show answers</summary>

1. The –OH carbon has no hydrogen (three carbon groups attached, no C–H bonds), so there is no C–H to remove in forming a carbonyl.
2. PCC in dry CH₂Cl₂. It is anhydrous, so the aldehyde cannot hydrate; hydration (gem-diol formation) is what allows further oxidation to the acid with aqueous reagents.
3. 3-Methyl-2-butanone (a ketone). Jones oxidizes the 2° alcohol; the carbon skeleton (3-methylbutane with C=O at C2) is preserved.
4. 0.300 mol alcohol × (2/3) = 0.200 mol CrO₃ × 100.00 g/mol = 20.0 g.
5. Ethanol → acetaldehyde (alcohol dehydrogenase, NAD⁺) → acetic acid/acetate (aldehyde dehydrogenase, NAD⁺). The acid is then activated to acetyl-CoA for metabolism.
6. NaOCl/TEMPO avoids toxic chromium waste, is inexpensive, and runs safely on large scale in water; it gives the same aldehyde/ketone products with milder conditions.
</details>

## Related Topics

- Previous: [Reactions of Alcohols](06-reactions-of-alcohols.md)
- Next: [Protection of Alcohols](08-protection-of-alcohols.md)
- Related: [Properties of Alcohols and Phenols](02-properties-of-alcohols-and-phenols.md)
- Related: [Aldehydes and Ketones: Nucleophilic Addition Reactions](../chapter-19-aldehydes-and-ketones-nucleophilic-addition-reactions/README.md)
- Related: [Alcohols and Phenols chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against current references (PubChem, 2026-08): CrO₃ molar mass 99.99–100.00 g/mol; Cr(VI)→Cr(III) is a 3-electron change; standard organic oxidation potentials for Cr(VI)/Cr(III) and NAD⁺/NADH as cited in standard references.
- Last updated: 2026-08-16
