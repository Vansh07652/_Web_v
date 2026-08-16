---
title: "Reactivity of Enolate Ions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "22: Carbonyl Alpha-Substitution Reactions"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "reactivity-of-enolate-ions"
  - "science"
status: "complete"
---

# Reactivity of Enolate Ions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

The enolate ion is the workhorse nucleophile of carbonyl chemistry. Formed by deprotonation of an α-H (topic 05), it carries its negative charge on **both carbon and oxygen** (resonance), making it an **ambident nucleophile** that attacks electrophiles from either end. Because C–C bond formation is the central goal of synthesis, most enolate reactions of interest — alkylation (topic 07), aldol, Claisen, Michael — occur at the **carbon** terminus.

This topic surveys what enolates react with and how outcomes are controlled: which electrophiles they attack, when O-attack competes with C-attack, and how kinetic vs thermodynamic enolate formation (topic 05) sets regiochemistry.

## Why This Matters

- **C–C bond formation is the heart of synthesis.** Enolates are among the few practical carbanion nucleophiles; nearly every complex molecule from carbonyl precursors uses one.
- **Regiochemistry and chemoselectivity are exam favorites.** Will the enolate alkylate at carbon or oxygen? Which α position reacts? The answers follow from electrophile, base, solvent, and temperature.
- **Biological C–C bond formation uses enolate equivalents.** Enzymes such as citrate synthase, aldolases, and fatty-acid synthase form enolate-like intermediates (often from thioesters) that attack carbonyls or Michael acceptors.
- **Predicting products.** Knowing what an enolate does with each electrophile class lets you predict aldol, Claisen, and Michael products (Chapter 23).

## Core Concepts

### The enolate is an ambident nucleophile

The enolate's two resonance forms put negative charge on carbon and oxygen:

- **C-nucleophile (carbanion form):** attack at the α carbon gives C–C bond formation — the desired path for synthesis.
- **O-nucleophile (oxyanion form):** attack at oxygen gives enol ethers or silyl enol ethers.

In simple alkylations with alkyl halides, **C-attack dominates**: C–C bonds are strong, and the alkyl halide's LUMO overlaps best with the carbanion HOMO. O-attack becomes significant with hard electrophiles such as silyl chlorides and in certain solvent/counterion combinations.

### Enolates attack a broad range of electrophiles

| Electrophile | Product class | Example reaction |
|---|---|---|
| Alkyl halides (R–X) | α-Alkylated carbonyl | Topic 07 (alkylation) |
| Aldehydes/ketones (C=O) | β-Hydroxy carbonyl (aldol adduct) | Aldol reaction (Ch. 23) |
| Acyl halides (RCOCl) | 1,3-Dicarbonyl (acylation) | Claisen-type acylation |
| α,β-Unsaturated carbonyls | 1,4-addition product | Michael addition (Ch. 23) |
| Halogens (X₂) | α-Haloketone | Topic 03 (halogenation) |
| Silyl chlorides (R₃SiCl) | Silyl enol ether (O-attack) | Protecting/activating enolates |

The common thread: the enolate carbon is a **soft, polarizable nucleophile** preferring soft electrophiles (alkyl halides, Michael acceptors, halogens) with C-attack; **hard electrophiles** (protons, silyl groups) can react at oxygen.

### Carbon vs oxygen attack: controlling the outcome

Factors favoring **C-alkylation**:

- **Polar aprotic solvents** (DMSO, DMF, THF with crown ethers): the counterion is loosely bound, the enolate behaves as a "naked" carbanion, and C-attack wins.
- **Counterions that do not chelate oxygen strongly** (potassium/sodium enolates in aprotic solvents favor C; lithium enolates in coordinating solvents can be more O-reactive).
- **Steric hindrance at oxygen** (bulky silyl groups) blocks O-attack.
- **Alkyl halides** (SN2 substrates) overwhelmingly react at carbon.

O-attack is deliberately exploited to make **silyl enol ethers** (R₃SiCl) and **enol acetates** (acetic anhydride) — valuable derivatives for aldol chemistry and enolate trapping.

### Regiochemistry: which α position reacts

For a ketone with two different α positions (e.g., 2-methylcyclohexanone), the enolate that forms (kinetic vs thermodynamic, topic 05) sets the product:

- **Kinetic enolate** (LDA, −78 °C): alkylation at the less substituted α carbon.
- **Thermodynamic enolate** (equilibration): alkylation at the more substituted α carbon.

The *same* ketone can give two different products depending on base and temperature — reactivity is set by enolate formation conditions.

### Stereoelectronic picture

The enolate α carbon is approximately sp², with its filled p orbital overlapping the carbonyl π system. Attack on an alkyl halide is backside (SN2-like), inverting configuration at the halide carbon; because the enolate carbon is planar, alkylation can occur from either face, giving stereoisomer mixtures unless substrate or reagents impose selectivity.

## Worked Examples

### Example 1 — Alkylation of cyclohexanone enolate

Cyclohexanone is treated with LDA at −78 °C, then iodomethane (CH₃I). Predict the product and attacking site.

**Step 1 — enolate formation.** LDA removes an α-H; charge is shared between the α carbon (C1) and ring oxygen.

**Step 2 — attack on CH₃I.** The enolate carbon attacks the methyl carbon in an SN2 step, expelling iodide:

\[
\text{cyclohexanone enolate} + \text{CH}_3\text{I} \rightarrow \text{2-methylcyclohexanone} + \text{I}^-
\]

C-attack dominates because CH₃I is an excellent SN2 electrophile and C–C bond formation is favored; O-methylation is at most minor.

### Example 2 — Kinetic vs thermodynamic alkylation of 2-methylcyclohexanone

2-Methylcyclohexanone (methyl at C2) is alkylated with CH₃I under two sets of conditions.

**Conditions A — LDA, −78 °C:** the kinetic enolate forms at the less hindered α carbon (C6, opposite the methyl); alkylation gives 2,6-dimethylcyclohexanone.

**Conditions B — NaOEt/EtOH, room temperature:** the thermodynamic enolate forms at the more substituted α carbon (C2); alkylation gives 2,2-dimethylcyclohexanone.

One ketone, two products — regiochemistry is set by enolate formation conditions. Classic exam scenario.

### Example 3 — Trapping the enolate as a silyl enol ether (O-attack)

Cyclohexanone enolate (from LDA) is quenched with trimethylsilyl chloride (TMSCl). Predict the product.

**Answer:** attack occurs at **oxygen** — the hard silyl electrophile reacts with the hard oxyanion terminus, giving the trimethylsilyl enol ether of cyclohexanone (the ring oxygen becomes OTMS and the α carbon becomes CH₂). Silyl enol ethers are stable, isolable enolate surrogates for Mukaiyama aldol reactions; the contrast with Example 1 (C-attack on CH₃I) shows ambident behavior.

## ELI-10: Explain Like I'm 10

> An enolate ion is like a two-handed player in a game of catch: the carbon hand catches soft balls (alkyl halides) and makes strong C–C catches; the oxygen hand catches hard balls (silyl groups). Throw a methyl ball (CH₃I) and carbon catches it — that is how we build bigger molecules. Throw a silyl ball (TMSCl) and oxygen catches it, making a stable "enol ether" disguise. Two hands, one player — ambident!

## High-Yield Points

- Enolate = ambident nucleophile: negative charge on C and O; C-attack builds C–C bonds, O-attack gives enol derivatives.
- Alkyl halides (SN2): C-alkylation dominates → α-alkylated carbonyl (topic 07).
- Hard electrophiles (R₃SiCl, some acyl halides): O-attack possible → silyl enol ethers, enol esters.
- Polar aprotic solvents and "naked" enolates favor C-attack.
- Regiochemistry: kinetic enolate (LDA, −78 °C) → less substituted α; thermodynamic (equilibration) → more substituted α.
- Enolates also attack aldehydes/ketones (aldol), acyl halides (acylation), and α,β-unsaturated carbonyls (Michael) — all in Chapter 23.
- Complete enolate formation (strong base) is required for controlled alkylation.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Ambident nucleophile | A nucleophile with two reactive atoms (here C and O). | Determines C–C bond formation vs enol derivatives. |
| C-alkylation / O-alkylation | Attack at the enolate carbon vs oxygen. | The central selectivity question of enolate chemistry. |
| SN2 | One-step substitution: backside attack, leaving group departs. | The mechanism of enolate attack on alkyl halides. |
| Silyl enol ether | Enol derivative with O–SiR₃ (O-attack on R₃SiCl). | Stable, isolable enolate surrogate for controlled reactions. |
| Kinetic enolate | Product of fast deprotonation at the less hindered α-H (LDA, −78 °C). | Controls alkylation at the less substituted α carbon. |
| Thermodynamic enolate | More substituted, more stable enolate from equilibration. | Controls alkylation at the more substituted α carbon. |

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| C-attack vs O-attack | — | Alkyl halides → C (C–C bond); silyl/acyl chlorides → O (enol ether/ester). Selectivity depends on electrophile hardness, solvent, counterion. |
| Kinetic vs thermodynamic enolate | — | Kinetic = less hindered α-H, bulky base, low T. Thermodynamic = more substituted enolate, equilibration. Different alkylation products. |
| Enolate vs enol | — | Enolate is negatively charged and far more nucleophilic; enol is neutral and reacts only with strong electrophiles. |
| Aldol adduct | Alkylation product | Enolate + aldehyde/ketone → aldol (β-hydroxy carbonyl); enolate + alkyl halide → alkylated carbonyl. Different electrophiles, different products. |
| Which carbon of the enolate attacks | Which carbon of the electrophile is attacked | The enolate attacks with its **carbon** (or oxygen) terminus; the electrophile is attacked at its electron-poor center (the CH₃ of CH₃I, not the I). |

## Quick Review

1. Why does an alkyl halide react with the carbon terminus of an enolate rather than the oxygen terminus?
2. What product forms when the enolate of cyclohexanone reacts with CH₃CH₂Br? Name the mechanism.
3. 2-Methylcyclohexanone + LDA (−78 °C), then CH₃I. What product forms, and why?
4. What reagent converts a ketone enolate into its silyl enol ether, and which terminus attacks?
5. List four electrophile classes enolates attack and the product class of each.

<details>
<summary>Show answers</summary>

1. C–C bonds are strong (thermodynamically favorable), and the carbanion form's HOMO overlaps well with the alkyl halide's LUMO in SN2 geometry; soft electrophiles prefer the soft carbon terminus. O-alkylation is usually minor.
2. 2-Ethylcyclohexanone (ethyl at the α carbon), by SN2 attack of the enolate carbon on the CH₂ of ethyl bromide, expelling Br⁻ — backside attack, inversion at the electrophilic carbon.
3. 2,6-Dimethylcyclohexanone. LDA at −78 °C forms the kinetic enolate at the less hindered α carbon (C6, opposite the methyl), where alkylation occurs.
4. Trimethylsilyl chloride (TMSCl), added after enolate formation; the **oxygen** terminus attacks the hard silyl electrophile, giving the silyl enol ether.
5. Alkyl halides → α-alkylated carbonyls; aldehydes/ketones → aldol adducts (β-hydroxy carbonyls); acyl halides → 1,3-dicarbonyls; α,β-unsaturated carbonyls → 1,4-addition (Michael) products.

</details>

## Related Topics

- Previous: [Acidity of Alpha Hydrogen Atoms: Enolate Ion Formation](05-acidity-of-alpha-hydrogen-atoms-enolate-ion-formation.md)
- Next: [Alkylation of Enolate Ions](07-alkylation-of-enolate-ions.md)
- Related: [Reactivity of Enols: α-Substitution Reactions](02-reactivity-of-enols-substitution-reactions.md), [Alpha Halogenation of Aldehydes and Ketones](03-alpha-halogenation-of-aldehydes-and-ketones.md)
- Chapter overview: [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition (McMurry-style chapter organization)
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on the OpenStax outline structure. Reactivity patterns, mechanisms, and selectivity rules follow standard textbook treatments; no experimental data are invented.
- Lab safety note: alkyl halides and LDA solutions are hazardous; strong bases are corrosive, and volatile alkyl halides must be handled in a fume hood with PPE per institutional rules. This guide provides general principles only.
- Last updated: 2026-08-16
