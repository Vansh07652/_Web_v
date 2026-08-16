---
title: "Hydration of Alkynes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "9: Alkynes: An Introduction to Organic Synthesis"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "hydration-of-alkynes"
  - "science"
status: "complete"
---

# Hydration of Alkynes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 9: Alkynes: An Introduction to Organic Synthesis](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Hydration is the addition of water across the carbon–carbon triple bond of an alkyne. The net reaction converts \(\mathrm{R{-}C{\equiv}C{-}R'}\) into a carbonyl compound, and the product you actually isolate depends on where the hydrogen and the hydroxyl group land:

- **Acid-catalyzed hydration** (\(\mathrm{H_2SO_4}\) with a mercury(II) catalyst such as \(\mathrm{HgSO_4}\)) follows Markovnikov's rule and gives a **ketone** (from an internal alkyne) or a **methyl ketone** (from a terminal alkyne).
- **Hydroboration–oxidation** (dialkylborane followed by alkaline hydrogen peroxide) adds water the "anti-Markovnikov" way and converts a terminal alkyne into an **aldehyde**.

In both cases the immediate product is not the carbonyl compound at all — it is an **enol** (an alkene with a hydroxyl group on the double-bond carbon). The enol then rearranges into its more stable **keto** form by a process called tautomerization. Understanding hydration therefore means understanding three linked ideas: the regiochemistry of water addition, the enol–keto equilibrium, and why alkynes behave differently from alkenes (an alkene hydration gives an alcohol; an alkyne hydration gives a carbonyl compound).

## Why This Matters

Hydration of alkynes is one of the most reliable ways to build **ketones and aldehydes** directly from a carbon–carbon multiple bond. The classic industrial example is the hydration of acetylene to acetaldehyde, which for decades was a major route to this important industrial chemical before cheaper ethylene-based methods replaced it. In the lab, hydrating a terminal alkyne is a standard strategy for making a methyl ketone \(\mathrm{RCOCH_3}\) in one step, and the regiochemistry questions that come with it — Markovnikov versus anti-Markovnikov, enol versus keto — appear constantly on exams and in synthesis problems. If you can predict the product of alkyne hydration, you can also predict the outcome of dozens of reactions in later chapters that rely on the same enol–keto logic, including halogenation at the alpha position and the aldol condensation.

## Core Concepts

### Acid-catalyzed hydration: Markovnikov addition of water

Treat the alkyne like an alkene that can react twice. Under strongly acidic conditions with \(\mathrm{HgSO_4}\) as a catalyst, the first equivalent of water adds across the triple bond:

\[
\mathrm{R{-}C{\equiv}C{-}H + H_2O \xrightarrow{H_2SO_4,\ HgSO_4} R{-}C(=O){-}CH_3}
\]

The mechanism follows the same logic as alkene hydration: the \(\pi\) electrons of the triple bond protonate to form a **vinylic carbocation** (a cation on a double-bond carbon). The cation forms on the more substituted carbon (Markovnikov's rule), water attacks it, and loss of a proton gives the enol. Because a vinylic cation is much less stable than the cations formed from alkenes, the reaction needs the mercury(II) catalyst to proceed at a practical rate. The net result for a terminal alkyne \(\mathrm{R{-}C{\equiv}CH}\) is a **methyl ketone**, \(\mathrm{RCOCH_3}\), because the terminal carbon ends up as the \(\mathrm{CH_3}\) group of the ketone.

### Keto–enol tautomerism

The enol produced by water addition has the connectivity \(\mathrm{R{-}C(OH){=}CH{-}R'}\) — a carbon–carbon double bond with an \(\mathrm{OH}\) on one of the alkene carbons. Enols are **tautomers** of carbonyl compounds: they differ only in the position of a proton and a double bond, and they interconvert rapidly in acid or base:

\[
\mathrm{R{-}C(OH){=}CH_2 \rightleftharpoons R{-}C(=O){-}CH_3}
\]

The equilibrium strongly favors the **keto** form because a \(\mathrm{C{=}O}\) double bond is significantly stronger than a \(\mathrm{C{=}C}\) double bond (roughly \(\mathrm{745\ kJ/mol}\) versus \(\mathrm{610\ kJ/mol}\) for typical \( \pi \)-bond-containing double bonds). So even though water adds to make the enol, what you isolate is the ketone. This is why alkyne hydration gives carbonyl compounds while alkene hydration gives alcohols: the alkene product cannot tautomerize.

### Regiochemistry: terminal versus internal alkynes

- **Terminal alkyne** (\(\mathrm{R{-}C{\equiv}CH\)): hydration gives a single product, a methyl ketone \(\mathrm{RCOCH_3}\).
- **Symmetrical internal alkyne** (\(\mathrm{R{-}C{\equiv}C{-}R\)): both ends are equivalent, so one ketone forms.
- **Unsymmetrical internal alkyne** (\(\mathrm{R{-}C{\equiv}C{-}R'\), with \(\mathrm{R \neq R'}\)): two different enols can form, so a **mixture of two ketones** results. Hydration is therefore most useful synthetically for terminal or symmetrical alkynes.

### Hydroboration–oxidation: the anti-Markovnikov route

To get the opposite regiochemistry, replace the acid catalyst with a dialkylborane (often disiamylborane, \(\mathrm{Sia_2BH}\)) followed by alkaline \(\mathrm{H_2O_2}\):

\[
\mathrm{R{-}C{\equiv}CH \xrightarrow{1)\ Sia_2BH \quad 2)\ H_2O_2,\ OH^-} R{-}CH_2{-}CHO}
\]

Boron adds to the less hindered terminal carbon, and after oxidation and tautomerization the terminal alkyne gives an **aldehyde** rather than a methyl ketone. Internal alkynes give ketones by this route as well. Hydroboration–oxidation is the standard complement to acid-catalyzed hydration and is the reaction to name when a problem asks for an aldehyde from a terminal alkyne.

## ELI-10: Explain Like I'm 10

Imagine a jump rope with both ends held tight. Water is like a pair of scissors that snips the rope — but the cut ends don't stay apart: they snap back together into a new shape. When water adds to a triple bond, the molecule first makes a wobbly intermediate (the enol) and then instantly rearranges into a much more stable shape: a carbonyl group, like the one in nail-polish remover (acetone). Which end of the rope the water grabs decides whether you get a ketone or an aldehyde — and chemists pick the conditions to control exactly that.

## High-Yield Points

- **Product type:** Hydration of an alkyne gives a **carbonyl compound**, never an alcohol (that is the big difference from alkene hydration).
- **Markovnikov conditions:** \(\mathrm{H_2SO_4/HgSO_4}\) + water; terminal alkyne → methyl ketone \(\mathrm{RCOCH_3}\).
- **Anti-Markovnikov conditions:** \(\mathrm{Sia_2BH}\), then \(\mathrm{H_2O_2/OH^-}\); terminal alkyne → aldehyde \(\mathrm{RCH_2CHO}\).
- **Enol → keto:** The initial enol tautomerizes; the keto form wins because \(\mathrm{C{=}O}\) is stronger than \(\mathrm{C{=}C}\).
- **Unsymmetrical internal alkynes** give mixtures of two ketones — poor synthetic choice.
- **Mechanism vocabulary:** vinylic carbocation (Markovnikov route) and enol–keto tautomerization are the two terms examiners expect you to use.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Hydration | Addition of water (H and OH) across a multiple bond | The core reaction of this topic; sets up carbonyl synthesis |
| Enol | Alkene with an OH on the double-bond carbon | The true first product of alkyne hydration; unstable intermediate |
| Tautomerization | Fast proton-and-double-bond shuffle between enol and keto forms | Explains why a ketone, not an alcohol, is isolated |
| Keto form | Carbonyl tautomer (\(\mathrm{C{=}O}\)) | Thermodynamically favored form; the isolated product |
| Vinylic carbocation | Carbocation on a double-bond carbon | Key Markovnikov intermediate in acid-catalyzed hydration |
| Markovnikov's rule | H adds to the carbon already bearing more H | Predicts which ketone forms from an unsymmetrical alkyne |
| Hydroboration–oxidation | Borane addition followed by oxidation to the alcohol/enol | Anti-Markovnikov route that gives aldehydes from terminal alkynes |

## Example: Predicting and Quantifying a Hydration

**Worked example 1 (prediction).** Hydrate 1-hexyne, \(\mathrm{CH_3(CH_2)_3C{\equiv}CH}\), with \(\mathrm{H_2SO_4/HgSO_4}\). The terminal carbon carries the hydrogen, so Markovnikov addition puts the \(\mathrm{OH}\) on the internal carbon. The enol \(\mathrm{CH_3(CH_2)_3C(OH){=}CH_2}\) tautomerizes to the methyl ketone **2-hexanone**, \(\mathrm{CH_3(CH_2)_3C(=O)CH_3}\). Under hydroboration–oxidation conditions instead, the same alkyne gives **hexanal**, \(\mathrm{CH_3(CH_2)_4CHO}\).

**Worked example 2 (stoichiometry with dimensional analysis).** How many grams of 2-hexanone can form in theory from 5.0 g of 1-hexyne? The reaction is 1:1 in moles. Write the conversion first, then substitute:

\[
n(\mathrm{1\text{-}hexyne}) = \frac{5.0\ \mathrm{g}}{82.15\ \mathrm{g/mol}} = 0.061\ \mathrm{mol}
\]

\[
m(\mathrm{2\text{-}hexanone}) = 0.061\ \mathrm{mol} \times 100.16\ \mathrm{g/mol} = 6.1\ \mathrm{g}
\]

So the theoretical yield is **6.1 g** (100% yield; actual yield is lower, and this ignores the need for excess water and catalyst).

**Worked example 3 (mechanism reasoning).** Why does hydration of propyne give acetone, \(\mathrm{CH_3COCH_3}\), and not propanal? Protonation of propyne forms the more substituted vinylic cation on the internal carbon; water attacks there; the resulting enol \(\mathrm{CH_3C(OH){=}CH_2}\) tautomerizes to acetone. The aldehyde would require anti-Markovnikov addition, which only hydroboration–oxidation provides.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| Alkyne hydration product | Alkene hydration product | Alkene → alcohol; alkyne → carbonyl compound (ketone/aldehyde) |
| Enol | Alcohol | An enol's OH sits on a double-bond carbon; simple alcohols have no \(\mathrm{C{=}C}\) and cannot tautomerize |
| Tautomers | Resonance forms | Tautomers are real, isolable isomers differing in atom positions; resonance forms differ only in electron placement |
| Markovnikov vs anti-Markovnikov | "More stable product" | Regiochemistry is set by the mechanism/conditions, not by which product looks more stable |
| \(\mathrm{HgSO_4}\) role | \(\mathrm{H_2SO_4}\) role | \(\mathrm{H_2SO_4}\) is the acid; \(\mathrm{HgSO_4}\) is a catalyst that helps form the vinylic cation |

## Quick Review

1. What functional group is formed when water adds to a terminal alkyne under \(\mathrm{H_2SO_4/HgSO_4}\) conditions?
2. Why is the enol not the isolated product of alkyne hydration?
3. What reagent sequence converts a terminal alkyne into an aldehyde?
4. Predict the product of hydrating 2-butyne, \(\mathrm{CH_3C{\equiv}CCH_3}\), under acid catalysis.
5. A student says "hydration of an alkyne gives an alcohol, just like an alkene." What is wrong with that statement?
6. Why do unsymmetrical internal alkynes give two ketones on hydration?

<details>
<summary>Show answers</summary>

1. A **methyl ketone**, \(\mathrm{RCOCH_3}\) — Markovnikov addition followed by enol-to-keto tautomerization.
2. The enol rapidly tautomerizes because the keto form is much more stable (the \(\mathrm{C{=}O}\) bond is stronger than the \(\mathrm{C{=}C}\) bond), so the ketone is what survives isolation.
3. Hydroboration–oxidation: (1) \(\mathrm{Sia_2BH}\), then (2) \(\mathrm{H_2O_2/NaOH}\). This is the anti-Markovnikov route.
4. 2-butanone, \(\mathrm{CH_3C(=O)CH_2CH_3}\) — the alkyne is symmetrical, so both ends give the same enol and the same ketone.
5. Alkene hydration gives an alcohol because the product has no \(\mathrm{C{=}C}\) left to tautomerize. Alkyne hydration first makes an enol (\(\mathrm{C{=}C{-}OH}\)), which tautomerizes to a carbonyl compound.
6. Water can add in either of two orientations, producing two different enols and therefore two different ketones; only symmetrical or terminal alkynes give a single product.

</details>

## Related Topics

- Previous: [Reactions of Alkynes: Addition of HX and X2](03-reactions-of-alkynes-addition-of-hx-and-x2.md)
- Next: [Reduction of Alkynes](05-reduction-of-alkynes.md)
- Related: [Alkyne Acidity: Formation of Acetylide Anions](07-alkyne-acidity-formation-of-acetylide-anions.md)
- Related: [Alkynes: An Introduction to Organic Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
