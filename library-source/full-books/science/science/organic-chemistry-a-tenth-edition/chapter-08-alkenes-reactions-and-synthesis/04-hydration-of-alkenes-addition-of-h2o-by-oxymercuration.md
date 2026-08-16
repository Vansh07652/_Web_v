---
title: "Hydration of Alkenes: Addition of H2O by Oxymercuration"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "8: Alkenes: Reactions and Synthesis"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "hydration-of-alkenes-addition-of-h2o-by-oxymercuration"
  - "science"
status: "complete"
---

# Hydration of Alkenes: Addition of H2O by Oxymercuration

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 8: Alkenes: Reactions and Synthesis](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Hydration means adding water across a double bond — the net result is an **alcohol**. Oxymercuration–demercuration is a two-step way to hydrate an alkene:

1. **Oxymercuration:** the alkene reacts with mercuric acetate, \(\text{Hg(OAc)}_2\), in water (usually with THF as a cosolvent). The mercury adds to one carbon and water adds to the other, forming an organomercury alcohol.
2. **Demercuration:** sodium borohydride (\(\text{NaBH}_4\)) replaces the carbon–mercury bond with a carbon–hydrogen bond.

The net transformation is the Markovnikov addition of water:

\[ \text{alkene} + \text{H}_2\text{O} \xrightarrow{\text{1. Hg(OAc)}_2;\ \text{2. NaBH}_4} \text{alcohol} \]

The hydroxyl group lands on the **more substituted** carbon of the double bond — the same regiochemistry as acid-catalyzed hydration — but the reaction goes through a cyclic mercurinium ion rather than a free carbocation, so **no rearrangements occur**. This makes oxymercuration–demercuration the most reliable way to make Markovnikov alcohols from alkenes.

## Why This Matters

Acid-catalyzed hydration (water plus sulfuric acid) also gives Markovnikov alcohols, but it passes through a carbocation, and carbocations can rearrange by hydride or methyl shifts — especially when a tertiary cation is not directly available. Oxymercuration–demercuration gives the same alcohol without ever forming a free carbocation, so the product you predict from the alkene's structure is the product you actually get. This predictability is essential in synthesis, where a single misplaced methyl group changes the whole molecule. It also introduces you to organometallic intermediates (C–Hg bonds), a theme that recurs in later chapters on organometallic reagents.

## Core Concepts

### Step 1: Oxymercuration (the mechanism)

Mercuric acetate is an electrophile: the mercury is electron-poor. The alkene's π electrons attack the mercury, and the acetate leaves, forming a **mercurinium ion** — a positively charged three-membered ring with mercury bridging the two alkene carbons. This is exactly analogous to the bromonium ion from halogenation. Water then attacks the more substituted carbon of the mercurinium ion from the back side, and deprotonation gives an organomercury alcohol:

\[ \text{alkene} + \text{Hg(OAc)}_2 + \text{H}_2\text{O} \longrightarrow \text{HO{-}alkene{-}HgOAc} + \text{HOAc} \]

Because the ring is bridged, the same anti-addition stereochemistry seen in halogenation applies: water and mercury add from opposite faces.

### Step 2: Demercuration

Sodium borohydride, \(\text{NaBH}_4\), is a source of hydride. It reduces the carbon–mercury bond to a carbon–hydrogen bond, replacing the –HgOAc group with a hydrogen atom. The mechanism is a radical process on the mercury, but the practical takeaway is simple: **the C–Hg bond becomes a C–H bond**, and the carbon keeps its stereochemistry. The alcohol survives because borohydride does not reduce alcohols or alkenes under these mild conditions.

### Regiochemistry and why no rearrangements occur

The hydroxyl group goes to the more substituted carbon because that carbon bears more positive charge in the mercurinium ion (it is more carbocation-like), so water attacks there. The hydrogen from demercuration lands on the less substituted carbon. The net product is the Markovnikov alcohol — but with a crucial difference from acid-catalyzed hydration: no carbocation ever forms, so hydride and methyl shifts cannot scramble the carbon skeleton. Whenever an alkene could rearrange under acidic conditions, oxymercuration–demercuration is the tool of choice.

### Practical notes

Mercuric acetate is a mercury(II) salt; mercury compounds are toxic, so this reaction is performed with care in a fume hood, and the borohydride step converts the mercury to metallic mercury, which is removed by filtration. THF is added because it dissolves both the water-soluble mercury salt and the organic alkene, keeping the mixture homogeneous.

## ELI-10: Explain Like I’m 10

Think of the double bond as two friends holding hands. A mercury "king" comes along and sits between them, holding both their hands (that is the mercurinium ring). A water balloon then attaches to the friend who has more friends already (the more substituted carbon). Finally, a helper molecule (borohydride) quietly replaces the mercury king with a plain hydrogen. The net effect: the double bond turned into an –OH on the busier carbon and an H on the other — and because the mercury king never let go, the friends never had a chance to shuffle their positions (no rearrangements).

## High-Yield Points

- Oxymercuration–demercuration is a two-step hydration: \(\text{Hg(OAc)}_2/\text{H}_2\text{O}\) then \(\text{NaBH}_4\).
- Net result: **Markovnikov alcohol** — the –OH goes to the more substituted carbon.
- The intermediate is a cyclic **mercurinium ion**, so **no rearrangements occur** (unlike acid-catalyzed hydration).
- Addition is anti, though the final stereochemistry is often of little practical concern because a C–H bond forms in step 2.
- \(\text{NaBH}_4\) replaces C–Hg with C–H; the alcohol group is untouched.
- This is the preferred method for Markovnikov alcohols from alkenes that might otherwise rearrange (e.g., 3,3-dimethyl-1-butene).
- Mercury compounds are toxic: work in a fume hood with gloves; filter off the metallic mercury formed during demercuration.
- Compare: oxymercuration gives Markovnikov alcohols; hydroboration–oxidation (next topic) gives anti-Markovnikov alcohols; both avoid rearrangements.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| hydration | Addition of water across a multiple bond to form an alcohol | One of the fundamental ways to install an –OH group |
| oxymercuration | Addition of mercury(II) and water across the alkene | Forms the organomercury intermediate with Markovnikov regiochemistry |
| demercuration | Replacement of the C–Hg bond by a C–H bond using NaBH4 | Completes the hydration and removes toxic mercury from the product |
| mercurinium ion | A positively charged three-membered ring with mercury bridging two carbons | The bridged intermediate that prevents rearrangements |
| Markovnikov addition | Addition where the electrophile's "positive end" goes to the more substituted carbon | Predicts that –OH (from water) lands on the more substituted carbon here |
| organomercury compound | A molecule with a carbon–mercury bond | The key intermediate of oxymercuration; an example of an organometallic compound |

## Worked Examples

### Example 1: 1-Methylcyclohexene by oxymercuration–demercuration

Predict the product of 1-methylcyclohexene treated with \(\text{Hg(OAc)}_2\) in water/THF, then \(\text{NaBH}_4\).

**Reasoning.** The mercurinium ion forms across C1–C2. C1 is the more substituted carbon (it bears the methyl), so water attacks C1 and the –OH lands there. Demercuration replaces the C–Hg bond at C2 with a C–H bond.

**Answer.** The product is 1-methylcyclohexan-1-ol (SMILES: CC1(O)CCCCC1) — a tertiary alcohol. Note that no rearrangement is possible here, and none occurs.

### Example 2: The rearrangement trap: 3,3-dimethyl-1-butene

3,3-Dimethyl-1-butene (SMILES: C=CC(C)(C)C) has a terminal double bond. Predict its product under (a) acid-catalyzed hydration and (b) oxymercuration–demercuration.

**Reasoning.** Under acidic conditions, protonation of the terminal alkene would give a secondary carbocation at C2 — but a methyl shift converts it to a more stable tertiary cation, so the product rearranges. In oxymercuration, the mercurinium ion is bridged and cannot rearrange; water attacks the more substituted carbon (C2), and demercuration adds H to C1.

**Answer.** (a) Acid-catalyzed hydration gives the rearranged product 2,3-dimethyl-2-butanol (SMILES: CC(C)C(C)(C)O) via a 1,2-methyl shift. (b) Oxymercuration–demercuration gives the unrearranged product 3,3-dimethyl-2-butanol (SMILES: CC(O)C(C)(C)C). Same formula, different carbon skeleton — exactly why the method matters.

### Example 3: Stoichiometry with dimensional analysis

What is the theoretical yield (in grams) of 1-methylcyclohexan-1-ol when 2.00 g of 1-methylcyclohexene (molar mass 96.17 g/mol) is hydrated by oxymercuration–demercuration?

**Formula first.** The reaction is 1:1, so moles of product equal moles of alkene. Moles from mass:

\[ n = \frac{m}{M} \]

then theoretical mass of product:

\[ m_{\text{product}} = n \times M_{\text{product}} \]

**Substitution.** Moles of alkene: \(n = 2.00\ \text{g} / 96.17\ \text{g mol}^{-1} = 0.0208\ \text{mol}\). The product 1-methylcyclohexan-1-ol, \(\text{C}_7\text{H}_{14}\text{O}\), has molar mass \(M = 7(12.01) + 14(1.008) + 16.00 = 114.18\ \text{g/mol}\):

\[ m_{\text{product}} = 0.0208\ \text{mol} \times 114.18\ \frac{\text{g}}{\text{mol}} = 2.37\ \text{g} \]

**Answer.** The theoretical yield is 2.37 g; the isolated (actual) yield will be lower after workup and purification.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Oxymercuration–demercuration | Acid-catalyzed hydration | Same Markovnikov regiochemistry, but oxymercuration never forms a carbocation, so no rearrangements |
| Oxymercuration (Markovnikov) | Hydroboration–oxidation (anti-Markovnikov) | The –OH goes to the more substituted carbon in oxymercuration and to the less substituted carbon in hydroboration–oxidation |
| Mercurinium ion | Carbocation | The bridged mercurinium ion cannot rearrange; a carbocation can |
| Hg(OAc)2 step | NaBH4 step | The mercury step adds Hg and –OH; the borohydride step only replaces C–Hg with C–H |
| Hydration of alkene | Hydration of alkyne | Alkynes need different conditions (often Hg2+ catalysis) and give carbonyl compounds, not alcohols |
| "Mercury is toxic" as a lab instruction | A clinical statement | This is a general laboratory-safety principle; mercury poisoning treatment is outside the scope of this study guide |

## Quick Review

1. What are the two steps of oxymercuration–demercuration, and what does each do?
2. Where does the –OH end up on an unsymmetrical alkene?
3. Why does oxymercuration–demercuration avoid carbocation rearrangements?
4. What product does 3,3-dimethyl-1-butene give under oxymercuration–demercuration, and what would acid-catalyzed hydration give instead?
5. What does \(\text{NaBH}_4\) do to the organomercury intermediate, and why is the alcohol unaffected?
6. How many grams of 1-methylcyclohexene are needed to make 5.00 g of 1-methylcyclohexan-1-ol (assume 100% yield)?

<details>
<summary>Show answers</summary>

1. (1) Oxymercuration: Hg(OAc)2 and water add across the alkene to form an organomercury alcohol. (2) Demercuration: NaBH4 replaces the C–Hg bond with a C–H bond, giving the alcohol.
2. The –OH goes to the more substituted carbon (Markovnikov regiochemistry).
3. The intermediate is a cyclic mercurinium ion that holds the two carbons in a bridged ring; no free carbocation exists, so hydride/methyl shifts are impossible.
4. Oxymercuration gives 3,3-dimethyl-2-butanol (unrearranged). Acid-catalyzed hydration gives 2,3-dimethyl-2-butanol (rearranged by a 1,2-methyl shift).
5. NaBH4 replaces the C–Hg bond with a C–H bond (demercuration). It does not reduce the alcohol group under these mild conditions, so the –OH survives.
6. Product moles: 5.00 g / 114.18 g/mol = 0.0438 mol. Alkene needed: same moles, mass = 0.0438 mol × 96.17 g/mol = 4.21 g.

</details>

## Related Topics

- Previous: [Halohydrins from Alkenes: Addition of HO-X](03-halohydrins-from-alkenes-addition-of-ho-x.md)
- Next: [Hydration of Alkenes: Addition of H2O by Hydroboration](05-hydration-of-alkenes-addition-of-h2o-by-hydroboration.md)
- Related: [Hydration of Alkenes: Addition of H2O by Hydroboration](05-hydration-of-alkenes-addition-of-h2o-by-hydroboration.md), [Reaction Stereochemistry: Addition of H2O to an Achiral Alkene](12-reaction-stereochemistry-addition-of-h2o-to-an-achiral-alkene.md)
- Chapter 7: [Evidence for the Mechanism of Electrophilic Additions: Carbocation Rearrangements](../chapter-07-alkenes-structure-and-reactivity/11-evidence-for-the-mechanism-of-electrophilic-additions-carbocation-rearrangements.md), [Orientation of Electrophilic Additions: Markovnikov's Rule](../chapter-07-alkenes-structure-and-reactivity/08-orientation-of-electrophilic-additions-markovnikov-s-rule.md)
- Chapter 9: [Hydration of Alkynes](../chapter-09-alkynes-an-introduction-to-organic-synthesis/04-hydration-of-alkynes.md)
- Related: [Alkenes: Reactions and Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
