---
title: "Carbonyl Condensations: The Aldol Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "23: Carbonyl Condensation Reactions"
topic_number: "1"
source: "organic-chemistry.md"
tags:
  - "carbonyl-condensations-the-aldol-reaction"
  - "science"
status: "complete"
---

# Carbonyl Condensations: The Aldol Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 23: Carbonyl Condensation Reactions](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

A **carbonyl condensation** joins two carbonyl compounds by a new carbon–carbon bond. The **aldol reaction** is the simplest and most important example: an enolate (or enol) of one aldehyde or ketone adds to the carbonyl group of a second molecule, producing a **β-hydroxy carbonyl**. The name "aldol" comes from the simplest product's two functional groups — an **ald**ehyde plus an **alcoh**ol.

For acetaldehyde, the base-catalyzed self-condensation gives 3-hydroxybutanal:

\[
2\ \mathrm{CH_3CHO} \xrightarrow{\text{cat. NaOH}} \mathrm{CH_3{-}CH(OH){-}CH_2{-}CHO}
\]

One molecule supplies the enolate (nucleophile); a second supplies the carbonyl that is attacked (electrophile). The overall process is called a condensation because, after dehydration (topic 3), two molecules end up joined with loss of water. The reaction is reversible and often favors starting materials — dehydration or product isolation drives it forward.

## Why This Matters

The aldol reaction is the single most important carbon–carbon bond-forming reaction in carbonyl chemistry, in the lab and in living cells. Its β-hydroxy carbonyl products dehydrate to versatile enones/enals used in drugs, fragrances, and polymers, and retrosynthetically any β-hydroxy carbonyl disconnects into two carbonyl fragments (topic 4). Biologically, aldol-type reactions run constantly: aldolase cleaves fructose-1,6-bisphosphate in glycolysis, and citrate synthase builds citrate from oxaloacetate and acetyl-CoA — the same enolate-adds-to-carbonyl logic with enzymes replacing the base. The mechanism transfers directly to every other reaction in this chapter.

## Core Concepts

### What counts as a carbonyl condensation

In a carbonyl condensation, one partner acts as the **nucleophile** (its enolate/enol form) and the other as the **electrophile** (its carbonyl carbon). Two structural requirements follow:

- The nucleophilic partner must have at least one α-hydrogen, so it can form an enolate or enol.
- The electrophilic partner must have a carbonyl group; it does not need an α-hydrogen.

Formaldehyde and benzaldehyde, which have no α-hydrogens, can only be the electrophile — a fact used to control crossed aldol reactions in topic 5.

### The base-catalyzed mechanism, step by step

1. **Enolate formation.** Hydroxide (catalytic) removes an α-hydrogen, giving the resonance-stabilized enolate.
2. **Nucleophilic addition.** The enolate carbon attacks the second molecule's carbonyl carbon: the enolate lone pair forms a C–C bond while the C=O π bond moves up onto oxygen, giving an alkoxide.
3. **Protonation.** The alkoxide picks up a proton, giving the neutral β-hydroxy carbonyl.

Only a catalytic amount of base is needed because it is regenerated in step 3.

### The acid-catalyzed mechanism: the enol pathway

Under acid catalysis the carbonyl oxygen is protonated (more electrophilic C=O) and the nucleophile is the **enol** form of the partner (acid-catalyzed tautomerization, Chapter 22). The enol attacks the protonated carbonyl; deprotonation gives the same β-hydroxy carbonyl. Aromatic aldehydes without α-hydrogens are especially good electrophilic partners in acid, and the product often dehydrates immediately (topic 3).

### Equilibrium: why aldol additions often stall

For simple ketones such as acetone, the aldol equilibrium lies substantially toward starting materials: dimerization to 4-hydroxy-4-methyl-2-pentanone (diacetone alcohol) reaches only a few percent conversion. Aldehydes, less hindered and more electrophilic, react more favorably. In practice the equilibrium is pulled forward by dehydration to the enone (topic 3), which is downhill because of conjugation.

### Regiochemistry and stereochemistry notes

When the nucleophilic partner has two different α positions, the enolate forms at the more acidic/less hindered site under kinetic control (LDA, low temperature) or the more substituted site under thermodynamic control — the same logic as Chapter 22's enolate alkylation. The addition creates a new stereocenter at the β carbon (the former electrophilic carbonyl carbon), so racemic mixtures are normal unless a chiral catalyst or enzyme is used.

## ELI-10: Explain Like I'm 10

> Imagine two kids building a bridge. One kid (the enolate) holds out a sticky hand; the other (a second aldehyde) holds out a hook. The sticky hand grabs the hook — that's the new carbon–carbon bond. A small helper (the base) re-sticks the glove after every grab, so only a tiny bit of it is needed.

## High-Yield Points

- Aldol reaction: enolate/enol of one carbonyl adds to the carbonyl of another → β-hydroxy carbonyl.
- Requirements: the nucleophile needs an α-H; the electrophile just needs a C=O.
- Base mechanism: enolate formation → addition to C=O → protonation; catalytic base is regenerated.
- Acid mechanism: protonated carbonyl + enol; often followed by rapid dehydration.
- Reversible, often favors starting materials; dehydration to the enone drives it forward.
- No atoms are lost in the addition: 2 mol aldehyde → 1 mol aldol, same total mass (water is lost only in dehydration).
- Same enolate logic as Chapter 22 — only the electrophile changes (alkyl halide → carbonyl).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| carbonyl condensation | Reaction joining two carbonyl compounds with a new C–C bond | Organizing theme of Chapter 23 |
| aldol reaction | Enolate/enol adds to a carbonyl, giving a β-hydroxy carbonyl | The foundational C–C bond-forming reaction of the chapter |
| β-hydroxy carbonyl | Product with an –OH on the carbon β to the C=O | The characteristic aldol product; ready to dehydrate |
| enolate | Conjugate base of a carbonyl at the α carbon | Nucleophilic partner in the base-catalyzed aldol |
| enol | Tautomer of a carbonyl with C=C and O–H | Nucleophilic partner in the acid-catalyzed aldol |
| nucleophile / electrophile partners | The molecule supplying the enolate vs the molecule being attacked | Determines which molecule ends up on which end of the new bond |
| diacetone alcohol | Aldol dimer of acetone (4-hydroxy-4-methyl-2-pentanone) | Classic example of an unfavorable aldol equilibrium |
| dehydration | Loss of water from the β-hydroxy carbonyl | Converts aldols to enones; drives the equilibrium forward |

## Worked Examples

### Example 1: Mass balance — how much 3-hydroxybutanal from 10.0 g of acetaldehyde?

Acetaldehyde (SMILES `CC=O`, M = 44.05 g/mol) dimerizes to 3-hydroxybutanal (SMILES `CC(O)CC=O`, M = 88.11 g/mol). Two moles of acetaldehyde give one mole of aldol; because the addition loses no atoms, total mass is conserved.

Moles of acetaldehyde:

\[
n(\mathrm{CH_3CHO}) = \frac{m}{M} = \frac{10.0\ \text{g}}{44.05\ \text{g mol}^{-1}} = 0.2270\ \text{mol}
\]

Stoichiometry is 2:1, so moles of aldol:

\[
n(\text{aldol}) = 0.2270\ \text{mol} \times \frac{1\ \text{mol aldol}}{2\ \text{mol CH}_3\mathrm{CHO}} = 0.1135\ \text{mol}
\]

Mass of product:

\[
m(\text{aldol}) = n \times M = 0.1135\ \text{mol} \times 88.11\ \text{g mol}^{-1} = 10.0\ \text{g}
\]

10.0 g in equals 10.0 g out — mass changes only when dehydration (topic 3) removes water.

### Example 2: Percent yield of 3-hydroxybutanal

A student runs the aldol reaction on 15.0 g of acetaldehyde and isolates 12.4 g of purified 3-hydroxybutanal.

Theoretical mass = 15.0 g (mass conserved, as shown above). So:

\[
\%\ \text{yield} = \frac{12.4\ \text{g}}{15.0\ \text{g}} \times 100\% = 82.7\%
\]

The 17.3% gap reflects equilibrium conversion, resinous polyaldol side products, and distillation losses.

### Example 3: The acetone equilibrium — why isolation is hard

Acetone (SMILES `CC(=O)C`, M = 58.08 g/mol) reacts with catalytic NaOH to give diacetone alcohol (SMILES `CC(=O)CC(C)(C)O`, M = 116.16 g/mol). Even with long reaction times, the equilibrium mixture contains only a small fraction of aldol product. Suppose 10% of 1.00 mol (58.08 g) of acetone were converted; two acetones make one dimer, so the dimer is 0.050 mol:

\[
m = 0.050\ \text{mol} \times 116.16\ \text{g mol}^{-1} = 5.8\ \text{g}
\]

Because the yield is so low, chemists remove water continuously, dehydrate directly to mesityl oxide (topic 3), or use aldehydes with more favorable equilibria.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Aldol addition | Aldol condensation | Addition = C–C bond formation only (β-hydroxy carbonyl, no water lost); condensation = overall process including dehydration to the enone |
| The enolate partner | The carbonyl partner | The enolate (nucleophile) must have an α-H; the carbonyl electrophile doesn't. Benzaldehyde can only be the electrophile |
| Catalytic base vs stoichiometric LDA | Two ways to run an aldol | NaOH/RO⁻ is catalytic and regenerated; LDA forms the enolate first, then a *different* carbonyl is added — a tool for crossed aldols (topic 5) |
| Acid-catalyzed mechanism | Base-catalyzed mechanism | Acid activates the electrophile (protonated C=O) and uses the enol; base creates the enolate nucleophile directly |
| "Aldol products are easy to isolate" | Equilibrium reality | Many aldol additions (especially ketones) sit far toward starting material |
| "2 mol → 1 mol halves the mass" | Mass conservation | 2 mol (2×M) of aldehyde = 1 mol (2×M) of aldol — same total mass |

## Quick Review

1. Write the base-catalyzed mechanism of the acetaldehyde aldol reaction in words.
2. Which partner must possess an α-hydrogen, and why?
3. Why is only a catalytic amount of NaOH needed for a simple aldol reaction?
4. Why does the aldol addition of acetone stall at low conversion, and what drives it forward?
5. A reaction of 22.0 g of acetaldehyde gives 17.5 g of 3-hydroxybutanal. Percent yield?

<details>
<summary>Show answers</summary>

1. (1) OH⁻ removes an α-H from acetaldehyde → enolate; (2) the enolate carbon attacks the carbonyl carbon of a second acetaldehyde → alkoxide intermediate; (3) the alkoxide is protonated by solvent/base → 3-hydroxybutanal, regenerating the catalyst.
2. The nucleophilic partner (the one that becomes the enolate/enol) must have an α-H; without it, no enolate can form and that molecule can only act as the electrophile.
3. The base is consumed in step 1 but regenerated when the alkoxide is protonated in step 3, so it cycles — a small amount catalyzes many turnovers.
4. Ketone carbonyls are hindered and less electrophilic, so the equilibrium favors starting materials. Driving forces: dehydration to the enone (conjugation), continuous water removal, or more reactive aldehydes.
5. Theoretical = 22.0 g (mass conserved). % yield = (17.5/22.0) × 100% = 79.5%.

</details>

## Related Topics

- Previous: [Chapter 22: Carbonyl Alpha-Substitution Reactions](../chapter-22-carbonyl-alpha-substitution-reactions/README.md)
- Next: [Carbonyl Condensations versus Alpha Substitutions](02-carbonyl-condensations-versus-alpha-substitutions.md)
- Related: [Dehydration of Aldol Products: Synthesis of Enones](03-dehydration-of-aldol-products-synthesis-of-enones.md)
- Related: [Using Aldol Reactions in Synthesis](04-using-aldol-reactions-in-synthesis.md)
- Related: [Chapter 23 overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Molar masses computed from standard atomic weights (2026); equilibrium behavior of acetone aldol described qualitatively.
- Last updated: 2026-08-16
