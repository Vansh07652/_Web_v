---
title: "Nucleophilic Addition of Hydrazine: The Wolff–Kishner Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "19: Aldehydes and Ketones: Nucleophilic Addition Reactions"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "nucleophilic-addition-of-hydrazine-the-wolff-kishner-reaction"
  - "science"
status: "complete"
---

# Nucleophilic Addition of Hydrazine: The Wolff–Kishner Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 19: Aldehydes and Ketones: Nucleophilic Addition Reactions](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

The **Wolff–Kishner reaction** converts an aldehyde or ketone into an alkane by replacing the carbonyl oxygen with two hydrogens: a C=O group becomes a CH₂ group, and dinitrogen gas (N₂) is the only byproduct. The reaction is named for Ludwig Wolff and Nikolai Kishner, who reported it independently in 1911–1912.

The sequence has two stages. First, the carbonyl reacts with hydrazine (H₂N–NH₂, SMILES `NN`) to form a **hydrazone**, with connectivity R₂C=N–NH₂ (cyclohexanone hydrazone, SMILES `NN=C1CCCCC1`). This step is a nucleophilic addition–elimination needing only mild acid catalysis. Second, strong base — traditionally KOH in ethylene glycol at about 180–200 °C, or potassium *tert*-butoxide in DMSO at lower temperatures — removes an N–H proton, and the resulting anion loses N₂, leaving a carbanion on the carbon bonded to nitrogen; protonation gives the alkane (e.g., cyclohexane, SMILES `C1CCCCC1`). Because the stages use very different conditions, think of the reaction as **hydrazone formation followed by base-promoted decomposition**, not one continuous mechanism.

## Why This Matters

The Wolff–Kishner reaction is one of only two classic methods that delete a carbonyl oxygen outright; the other is the Clemmensen reduction (zinc amalgam in hot hydrochloric acid). Converting a carbonyl to a methylene group is standard in multistep synthesis whenever a carbonyl must be removed, and it is a structural tool as well: the product has one fewer site of unsaturation, simplifying NMR and mass-spectral analysis.

It is also an exam favorite, testing several skills at once: recognizing nucleophilic addition to a carbonyl, writing a mechanism with an exceptionally stable leaving group (N₂), choosing conditions (strong base and heat versus strongly acidic Clemmensen conditions), and predicting the product. And it illustrates a recurring principle: a reaction is driven to completion when a byproduct of outstanding stability leaves — here, dinitrogen, whose N≡N triple bond is among the strongest known.

## Core Concepts

### Hydrazone formation: addition then elimination

Hydrazine is a nucleophile because each nitrogen carries a lone pair. One nitrogen attacks the carbonyl carbon to give a tetrahedral addition product, a carbinolamine (R₂C(OH)(NH–NH₂)). Loss of water, catalyzed by a trace of acid, gives the hydrazone R₂C=N–NH₂. The process is reversible, but hydrazones usually form in high yield because they are far less soluble than the carbonyl starting material.

The hydrazone C=N bond resembles an imine, except that the nitrogen carries an –NH₂ group. That extra N–H is the key to stage two: it is the proton base removes to trigger nitrogen elimination.

### Base-promoted decomposition: where the N₂ comes from

Strong base removes the hydrazone's N–H proton, giving an anion set up to expel dinitrogen: the N–N bond breaks, the terminal nitrogen's lone pair joins the N≡N triple bond, and the C=N electrons move onto carbon, generating a carbanion at the former carbonyl carbon. Loss of N₂ drives the entire reaction — a gas forms, leaves the flask, and the equilibrium is pulled completely to products.

The carbanion is strongly basic, so it immediately picks up a proton from the solvent or another hydrazone molecule, placing the second hydrogen on carbon and completing C=O → CH₂.

### The overall equation

For a generic ketone:

\[
\text{R}_2\text{C=O} + 2\text{H} \longrightarrow \text{R}_2\text{CH}_2
\]

with the intermediate written out:

\[
\text{R}_2\text{C=O} \xrightarrow{\text{H}_2\text{N–NH}_2} \text{R}_2\text{C=N–NH}_2 \xrightarrow{\text{KOH, heat}} \text{R}_2\text{CH}_2 + \text{N}_2
\]

The carbon skeleton does not change: a ketone becomes the alkane with the same number of carbons, and an aldehyde becomes the alkane with a terminal CH₃ group.

### Conditions and limits

- **Base and solvent:** KOH/ethylene glycol at reflux (≈200 °C) is classic; KOC(CH₃)₃ in DMSO works near room temperature for many substrates.
- **Compatibility:** base-sensitive groups are a problem — esters hydrolyze, and acidic C–H bonds elsewhere cause side reactions. Acid-sensitive substrates are safe here because the acidic Clemmensen conditions would destroy them.
- **Scope:** only aldehydes and ketones react. Esters, amides, and carboxylic acids have carbonyls too deactivated to form hydrazones.

## ELI-10: Explain Like I’m 10

> Imagine a bicycle wheel with a heavy basket bolted to the hub — the basket is the carbonyl oxygen, and you want a plain wheel. First you swap the basket for a long tube (hydrazine), making a hydrazone. Then you give the tube a hard shove with a strong base: the tube flies off as harmless nitrogen gas, leaving a bare axle that grabs two hydrogen atoms. Now you have a clean wheel — an alkane — and nothing else on the bike has changed.

## High-Yield Points

- Net result: R₂C=O → R₂CH₂ for aldehydes and ketones; the carbon skeleton is untouched.
- Two stages: hydrazone formation (mild acid), then base-catalyzed loss of N₂ and protonation (strong base, heat).
- Driving force: loss of the extremely stable N₂ molecule; gas evolution makes the reaction irreversible in practice.
- Classic conditions: KOH/ethylene glycol at ~200 °C; milder alternative: KOC(CH₃)₃/DMSO.
- Aldehydes give terminal CH₃ groups; ketones give internal CH₂ groups (cyclohexanone → cyclohexane).
- Contrast with Clemmensen (Zn/Hg, conc. HCl): Wolff–Kishner for acid-sensitive molecules, Clemmensen for base-sensitive ones.
- Esters, amides, and carboxylic acids do **not** react — only aldehydes and ketones.
- The carbanion intermediate is protonated by the medium; the carbon skeleton does not rearrange.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| hydrazine | H₂N–NH₂ (SMILES `NN`), a two-nitrogen nucleophile | Captures the carbonyl and later supplies the nitrogen for N₂ |
| hydrazone | R₂C=N–NH₂, the addition–elimination product of a carbonyl and hydrazine | The key intermediate; its N–H proton is what base removes |
| carbanion | A carbon bearing a negative charge and an unshared electron pair | The reactive intermediate after N₂ leaves; it is protonated to give the alkane |
| deoxygenation | Removal of oxygen from a molecule, here C=O → CH₂ | The synthetic purpose of the reaction |
| Clemmensen reduction | Reduction of a carbonyl to CH₂ with Zn(Hg)/HCl | The acidic alternative; reagent choice depends on the other functional groups present |
| ethylene glycol | HOCH₂CH₂OH, a high-boiling solvent for the classic conditions | Provides the ~200 °C temperatures that drive stage two |

## How It Works / Step-by-Step Process

1. **Form the hydrazone.** Mix the carbonyl with hydrazine in an alcohol solvent with a trace of acid; the nitrogen lone pair attacks the carbonyl carbon, water is lost, and the hydrazone forms.
2. **Deprotonate.** Add strong base (e.g., KOH in ethylene glycol); it removes the N–H proton to give the hydrazone anion.
3. **Expel nitrogen.** The anion collapses: the N–N bond breaks, N₂ gas leaves, and a carbanion forms on the carbon formerly double-bonded to nitrogen.
4. **Protonate.** The carbanion picks up a proton from the solvent or another hydrazone molecule, giving the alkane.
5. **Isolate.** The alkane is recovered by extraction or distillation; the nitrogen has already bubbled away.

## Worked Examples

### Example 1: Cyclohexanone to cyclohexane

Predict the product of the Wolff–Kishner reduction of cyclohexanone and check the atom accounting.

The hydrazone has C=N–NH₂ at C1 of the ring (SMILES `NN=C1CCCCC1`). After loss of N₂ and protonation, the former carbonyl carbon carries two hydrogens:

\[
\text{C}_6\text{H}_{10}\text{O} + \text{H}_2\text{N–NH}_2 \longrightarrow \text{C}_6\text{H}_{12}\text{N}_2 \xrightarrow{\text{KOH, heat}} \text{C}_6\text{H}_{12} + \text{N}_2
\]

The hydrazone contains all six ring carbons; losing N₂ removes both nitrogens and leaves C₆H₁₂, exactly the formula of cyclohexane. The product shows no strong C=O stretch near 1715 cm⁻¹ in its IR spectrum — a quick confirmation that the carbonyl is gone.

### Example 2: Stoichiometry of the hydrazone stage

How many grams of hydrazine (N₂H₄, molar mass 32.05 g/mol) are needed to convert 9.80 g of cyclohexanone (molar mass 98.15 g/mol) completely to its hydrazone?

Hydrazone formation consumes one equivalent of hydrazine per equivalent of ketone. First convert mass to moles:

\[
n_{\text{ketone}} = \frac{m}{M} = \frac{9.80\ \text{g}}{98.15\ \text{g mol}^{-1}} = 0.0998\ \text{mol}
\]

By 1:1 stoichiometry, \(n_{\text{N}_2\text{H}_4} = 0.0998\ \text{mol}\). Convert moles to grams:

\[
m_{\text{N}_2\text{H}_4} = n \times M = 0.0998\ \text{mol} \times 32.05\ \text{g mol}^{-1} = 3.20\ \text{g}
\]

Dimensional check: mol × g mol⁻¹ = g, so units cancel correctly. A practicing chemist would use excess hydrazine to drive the equilibrium, but 3.20 g is the theoretical minimum.

### Example 3: Choosing between Wolff–Kishner and Clemmensen

A substrate contains both a ketone and an acid-sensitive acetal. Which reduction method is appropriate?

The Clemmensen conditions (concentrated HCl) would hydrolyze the acetal, destroying the molecule. The Wolff–Kishner reaction, run under basic conditions, leaves the acetal intact: the ketone becomes a CH₂ group while the acetal survives — a clean demonstration of functional-group compatibility guiding reagent choice.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Wolff–Kishner conditions (strong base, heat) | Clemmensen conditions (Zn/Hg, conc. HCl) | Same net result (C=O → CH₂) but opposite acid/base conditions; choose by the other groups present |
| Hydrazone (R₂C=N–NH₂) | Imine (\(\text{R}_2\text{C=N–R}\)) | The hydrazone has an extra N–H and an N–N bond; only hydrazones lose N₂ on base treatment |
| Loss of N₂ (Wolff–Kishner) | Loss of water (imine formation) | Nitrogen elimination is the irreversible, driving step; water loss is reversible dehydration of an addition product |
| Aldehydes and ketones reacting | Esters and amides reacting | Only aldehyde/ketone carbonyls are electrophilic enough to form hydrazones; esters and amides do not react |
| Carbanion intermediate | Carbocation intermediate | The carbon left after N₂ loss is electron-rich (carbanion), so no rearrangement toward a more stable cation occurs |

## Quick Review

1. What is the net functional-group change in a Wolff–Kishner reduction, and what gas is evolved?
2. Why is the second stage (base, heat) irreversible even though hydrazone formation is reversible?
3. A molecule has both a ketone and an ester. Which reacts with hydrazine under Wolff–Kishner conditions, and why?
4. Would you use Wolff–Kishner or Clemmensen for a substrate containing an acid-sensitive ketal? Explain.
5. If 7.85 g of 4-heptanone (molar mass 114.19 g/mol) were reduced, what is the name and formula of the alkane product?
6. In Example 2, why would a practicing chemist add more than 3.20 g of hydrazine?

<details>
<summary>Show answers</summary>

1. The carbonyl oxygen is replaced by two hydrogens: C=O → CH₂. Dinitrogen (N₂) gas is evolved.
2. N₂ leaves as a gas and is extraordinarily stable (N≡N triple bond), so the reverse reaction never happens; gas evolution also pulls the equilibrium forward.
3. Only the ketone reacts. Aldehyde and ketone carbonyls are electrophilic enough to form hydrazones; the ester carbonyl is far less electrophilic because the alkoxy oxygen donates electron density by resonance.
4. Wolff–Kishner — the basic conditions do not hydrolyze the ketal, whereas Clemmensen's concentrated HCl would.
5. Heptane, C₇H₁₆ (4-heptanone, CH₃CH₂CH₂COCH₂CH₂CH₃, becomes CH₃(CH₂)₅CH₃).
6. Hydrazone formation is an equilibrium; excess hydrazine drives it to completion and compensates for losses and side reactions.

</details>

## Related Topics

- Previous: [Nucleophilic Addition of Amines: Imine and Enamine Formation](08-nucleophilic-addition-of-amines-imine-and-enamine-formation.md)
- Next: [Nucleophilic Addition of Alcohols: Acetal Formation](10-nucleophilic-addition-of-alcohols-acetal-formation.md)
- Related: [Nucleophilic Addition of HCN: Cyanohydrin Formation](06-nucleophilic-addition-of-hcn-cyanohydrin-formation.md)
- Related: [Nucleophilic Addition of Hydride and Grignard Reagents: Alcohol Formation](07-nucleophilic-addition-of-hydride-and-grignard-reagents-alcohol-formation.md)
- Related: [Aldehydes and Ketones: Nucleophilic Addition Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: molar masses from standard atomic weights (C 12.011, H 1.008, N 14.007, O 15.999); hydrazine 32.05 g/mol and cyclohexanone 98.15 g/mol cross-checked against these values (2026-08).
- Last updated: 2026-08-16
