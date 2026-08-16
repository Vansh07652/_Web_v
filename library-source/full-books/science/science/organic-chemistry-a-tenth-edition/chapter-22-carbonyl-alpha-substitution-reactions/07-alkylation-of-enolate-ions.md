---
title: "Alkylation of Enolate Ions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "22: Carbonyl Alpha-Substitution Reactions"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "alkylation-of-enolate-ions"
  - "science"
status: "complete"
---

# Alkylation of Enolate Ions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

In the previous topic you saw that an enolate ion is a carbon nucleophile: removing an α-hydrogen from a carbonyl compound gives a resonance-stabilized carbanion whose negative charge sits mostly on the α carbon. When that nucleophile meets an **alkyl halide**, the reaction is **alkylation**, and the product is an α-alkylated carbonyl compound — the α carbon trades one of its hydrogens for an alkyl group:

\[
\mathrm{R{-}CH_2{-}C(=O){-}R'} \xrightarrow[\text{1. LDA (forms enolate)}]{\text{2. } \mathrm{R''{-}X}} \mathrm{R{-}CH(R''){-}C(=O){-}R'} + \mathrm{X^-}
\]

The alkylation step is an SN2 reaction: the enolate carbon attacks the alkyl halide from the back side while the halide leaves. Because it is SN2, methyl, primary, allylic, and benzylic halides work best; secondary halides react slowly, tertiary halides eliminate instead, and vinyl/aryl halides do not react at all.

## Why This Matters

Carbon–carbon bond formation is the central problem of organic synthesis, and enolate alkylation is one of the most general solutions: it puts an alkyl group exactly at the carbon next to a carbonyl. The earlier topics in this chapter — tautomerism, acidity, enolate reactivity — all lead here. The reaction builds substituted ketones, esters, and nitriles used in pharmaceutical and materials chemistry and underlies the malonic ester and acetoacetic ester syntheses. It also sets up Chapter 23, where the same enolate attacks carbonyl electrophiles instead of alkyl halides.

## Core Concepts

### Enolate formation: the α-hydrogen is the key

A carbonyl compound is acidic at the α carbon (directly attached to the carbonyl); its conjugate base is the enolate, stabilized by resonance between the carbanion and the carbonyl π bond. Approximate pKa values in water: aldehydes and ketones 17–20, esters and nitriles 25, amides 30, and 1,3-dicarbonyls such as ethyl acetoacetate 11–13. Strong bases such as LDA (conjugate acid pKa ≈ 36) deprotonate almost any α-hydrogen irreversibly; sodium alkoxides suffice for 1,3-dicarbonyls.

### The alkylation step is SN2

The enolate carbon attacks the alkyl halide from the back side of the C–X bond, displacing the halide. This explains the reactivity order of alkyl halides:

- **Methyl, primary, allylic, benzylic** — excellent substrates.
- **Secondary** — slow but usable, especially as iodides.
- **Tertiary** — useless; eliminates HX to give an alkene instead.
- **Vinyl and aryl** — unreactive; sp² carbon cannot undergo backside displacement.

The enolate is **ambident** — it can react at carbon or at oxygen. With alkyl halides, carbon alkylation is strongly favored, giving the valuable C–C bond; oxygen attack matters mainly with special electrophiles such as silyl chlorides (forming silyl enol ethers).

### Kinetic versus thermodynamic enolates: controlling regiochemistry

When a carbonyl has two different α positions, the enolate can form at either one:

- The **kinetic enolate** forms fastest, at the **less substituted** α carbon (most accessible hydrogens). It is made with bulky LDA at −78 °C, where deprotonation is irreversible.
- The **thermodynamic enolate** forms at the **more substituted** α carbon, because the more substituted enolate (more substituted C=C) is more stable. It forms under equilibrating conditions — a smaller base such as sodium methoxide in methanol, or warming so enolates can form and revert.

Example: 2-methylcyclohexanone. With LDA at −78 °C, the kinetic enolate forms at C6 (unsubstituted α carbon); methyl iodide then gives **2,6-dimethylcyclohexanone**. Under equilibrating conditions the thermodynamic enolate forms at C2 (next to the methyl), giving **2,2-dimethylcyclohexanone** with methyl iodide. Base and temperature are therefore a regiochemical decision.

### Over-alkylation and how to control it

The product is usually *more* acidic than the starting material, so it can be alkylated a second time — over-alkylation is a real problem for simple ketones. Common fixes: one equivalent of hindered LDA to make the enolate quantitatively before adding one equivalent of halide; use a 1,3-dicarbonyl (only one α-H remains after the first alkylation); or alkylate via an enamine (Stork enamine reaction, Chapter 23).

### Alkylation of 1,3-dicarbonyl compounds

Ethyl acetoacetate, diethyl malonate, and related 1,3-dicarbonyls have especially acidic α-hydrogens (pKa ≈ 11–13), so even sodium ethoxide forms their enolates completely. Alkylation + decarboxylation gives substituted ketones (acetoacetic ester synthesis) or carboxylic acids (malonic ester synthesis).

## ELI-10: Explain Like I'm 10

> The α carbon is like a hand holding a balloon. A strong base pops the balloon away, leaving a hand eager to grab something — that's the enolate. Offer it an alkyl halide (a toy) and the hand grabs the toy while the halide runs off. The carbonyl just watches.

## High-Yield Points

- Enolate alkylation builds a C–C bond at the α carbon; the carbonyl is unchanged.
- The step is SN2: methyl/primary/allylic/benzylic halides work; tertiary (E2) and vinyl/aryl halides do not.
- Enolates are ambident (C vs O); alkyl halides give C-alkylation.
- Regiochemistry: LDA at −78 °C gives the kinetic (less substituted) enolate; equilibrating conditions give the thermodynamic (more substituted) enolate.
- Over-alkylation is common (product is more acidic); suppress with stoichiometric LDA, 1,3-dicarbonyls, or enamines.
- pKa guide: aldehydes/ketones ≈ 17–20; esters/nitriles ≈ 25; amides ≈ 30; 1,3-dicarbonyls ≈ 11–13.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| α carbon | The carbon atom directly bonded to a carbonyl carbon | The site of enolate formation and alkylation |
| enolate ion | The conjugate base of a carbonyl compound, formed by removing an α-hydrogen | The carbon nucleophile that attacks the alkyl halide |
| SN2 reaction | A one-step nucleophilic substitution with backside attack and inversion | Determines which alkyl halides work as alkylating agents |
| LDA (lithium diisopropylamide) | Very strong, bulky amide base (pKa ≈ 36) | Forms enolates quantitatively; makes kinetic enolates |
| kinetic enolate | Enolate forming fastest, at the less substituted α carbon | Sets regiochemistry with LDA at low temperature |
| thermodynamic enolate | More stable enolate, at the more substituted α carbon | Sets regiochemistry under equilibrating conditions |
| over-alkylation | Unwanted second alkylation of the product | The main practical limitation; must be suppressed by design |
| 1,3-dicarbonyl compound | Molecule with two carbonyls separated by one carbon | Easily enolized (pKa ≈ 11–13); basis of malonic/acetoacetic ester syntheses |

## Worked Examples

### Example 1: How much LDA do you need to enolize 25.0 g of cyclohexanone?

Cyclohexanone (SMILES `O=C1CCCCC1`) has one type of α carbon, so stoichiometry is 1:1 with LDA (C₆H₁₄LiN, 107.13 g/mol; cyclohexanone C₆H₁₀O, 98.15 g/mol). Convert mass to moles:

\[
n = \frac{m}{M} = \frac{25.0\ \text{g}}{98.15\ \text{g mol}^{-1}} = 0.2547\ \text{mol}
\]

The reaction is 1:1, so the same moles of LDA are required. Convert to mass:

\[
m(\text{LDA}) = n \times M = 0.2547\ \text{mol} \times 107.13\ \text{g mol}^{-1} = 27.3\ \text{g}
\]

Units check: mol × g/mol = g. In practice a slight excess of LDA (1.1–1.2 equiv) guarantees complete enolization.

### Example 2: Percent yield of 2-methylcyclohexanone

A student enolizes 20.0 g of cyclohexanone with LDA, adds excess methyl iodide, and isolates 15.5 g of 2-methylcyclohexanone (C₇H₁₂O, M = 112.17 g/mol).

Moles of starting ketone:

\[
n(\text{cyclohexanone}) = \frac{20.0\ \text{g}}{98.15\ \text{g mol}^{-1}} = 0.2038\ \text{mol}
\]

Alkylation is 1:1, so:

\[
m_{\text{theoretical}} = 0.2038\ \text{mol} \times 112.17\ \text{g mol}^{-1} = 22.86\ \text{g}
\]

Percent yield:

\[
\%\ \text{yield} = \frac{m_{\text{actual}}}{m_{\text{theoretical}}} \times 100\% = \frac{15.5\ \text{g}}{22.86\ \text{g}} \times 100\% = 67.8\%
\]

The gap comes largely from workup losses and a small amount of dialkylation.

### Example 3: Choosing the regioisomer

Starting from 2-methylcyclohexanone (SMILES `O=C1C(C)CCCC1`), predict the product with methyl iodide under (a) LDA at −78 °C, then (b) sodium methoxide in methanol at reflux.

(a) LDA at −78 °C removes the more accessible α-hydrogen at C6 → kinetic enolate → CH₃I gives **2,6-dimethylcyclohexanone**.

(b) Under equilibrating conditions, the more substituted enolate at C2 (adjacent to the existing methyl) forms → CH₃I gives **2,2-dimethylcyclohexanone** (geminal dimethyl at C2).

Same starting material and alkylating agent, different products — the base and temperature decide.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Enolate alkylation (Ch 22) | Aldol condensation (Ch 23) | Same enolate, different electrophile: alkyl halide (substitution, C=O preserved) vs carbonyl (condensation, joins two molecules) |
| Kinetic enolate | Thermodynamic enolate | Kinetic = less substituted, bulky base at low T; thermodynamic = more substituted, stable, equilibrating conditions |
| C-alkylation | O-alkylation | Enolates are ambident; alkyl halides give C–C bonds, silyl-type electrophiles trap at oxygen |
| "Stronger base is always better" | Choosing the base to match pKa | LDA for ketones/esters; alkoxide suffices for 1,3-dicarbonyls — excess base invites side reactions |

## Quick Review

1. Why must the alkyl halide be methyl, primary, allylic, or benzylic?
2. What reagents make the kinetic vs thermodynamic enolate of 2-methylcyclohexanone?
3. Alkylation of cyclohexanone with LDA and isopropyl bromide gives mostly starting material. Why?
4. Why are 1,3-dicarbonyls easier to alkylate than simple ketones?
5. Why does over-alkylation occur, and how is it prevented?

<details>
<summary>Show answers</summary>

1. The alkylation step is SN2, which needs an unhindered sp³ carbon bearing a good leaving group; tertiary halides are too hindered (E2), and vinyl/aryl halides have no SN2 pathway at sp² carbon.
2. Kinetic enolate forms at C6 (less substituted) with LDA at −78 °C; thermodynamic enolate forms at C2 (more substituted) under equilibrating conditions such as NaOCH₃/CH₃OH or heat. Methyl iodide then gives 2,6- vs 2,2-dimethylcyclohexanone respectively.
3. Isopropyl bromide is a secondary halide — a poor SN2 substrate; elimination (E2) competes or dominates, so little alkylation product forms.
4. Their α-hydrogens are much more acidic (pKa ≈ 11–13 vs ≈ 19–20 for ketones) because the enolate is stabilized by two carbonyl groups, so even alkoxides form the enolate quantitatively — and after one alkylation, no acidic α-H remains to allow over-alkylation.
5. The alkylated product is more acidic than the starting carbonyl, so it is re-enolized and alkylated again. Prevention: stoichiometric LDA with one equivalent of halide, 1,3-dicarbonyl substrates, or the Stork enamine route.

</details>

## Related Topics

- Previous: [Reactivity of Enolate Ions](06-reactivity-of-enolate-ions.md)
- Next: End of chapter — see [Chapter 23: Carbonyl Condensation Reactions](../chapter-23-carbonyl-condensation-reactions/README.md)
- Related: [The Aldol Reaction](../chapter-23-carbonyl-condensation-reactions/01-carbonyl-condensations-the-aldol-reaction.md)
- Related: [The Stork Enamine Reaction](../chapter-23-carbonyl-condensation-reactions/11-carbonyl-condensations-with-enamines-the-stork-enamine-reaction.md)
- Related: [Chapter 22 overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Molar masses computed from standard atomic weights (2026); pKa ranges are approximate textbook values.
- Last updated: 2026-08-16
