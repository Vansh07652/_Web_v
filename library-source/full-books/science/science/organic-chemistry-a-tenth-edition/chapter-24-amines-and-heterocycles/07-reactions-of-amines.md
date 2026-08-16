---
title: "Reactions of Amines"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "24: Amines and Heterocycles"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "reactions-of-amines"
  - "science"
status: "complete"
---

# Reactions of Amines

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 24: Amines and Heterocycles](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

An amine carries a nitrogen atom with a lone pair of electrons, and nearly every reaction in this topic is that lone pair doing one of two jobs: grabbing a proton (acting as a **base**) or attacking an electron-poor carbon (acting as a **nucleophile**). Alkyl amines have conjugate-acid pKa values near 10–11, so they are strong bases and good nucleophiles 

Amine reactions fall into a few families: **alkylation** (adding alkyl groups to nitrogen), **acylation** (converting the amine into an amide), **condensation** with aldehydes and ketones (imines and enamines), **reaction with nitrous acid** (diazonium ions), and **oxidation**. Learn where the electrons go and why each reaction stops, and you can predict unfamiliar products.

## Why This Matters

- **Drug synthesis:** Lidocaine, antihistamines, and countless medicines are built by alkylating or acylating amines.
- **Peptide bonds:** Nature links amino acids by acylating one amine with a neighboring carboxyl — the amine-to-amide conversion makes proteins.
- **Vision:** Rhodopsin holds its retinal chromophore as an **imine** (Schiff base) formed between an aldehyde and a lysine side chain.

## Core Concepts

### The lone pair: base and nucleophile in one

Basicity is reported as the pKa of the conjugate acid (pKaH): for methylamine, \(\text{p}K_\text{aH} \approx 10.6\), so at physiological pH alkyl amines are mostly protonated ammonium ions. Nucleophilicity tracks basicity for unhindered amines; bulky amines (e.g., triethylamine) stay basic but are poor nucleophiles because the nitrogen is crowded.

### Alkylation: to the quaternary ammonium salt

An amine displaces a halide from an alkyl halide:

\[
\text{RNH}_2 + \text{CH}_3\text{I} \longrightarrow \text{RNH}_2\text{CH}_3^{\,+}\, \text{I}^-
\]

The product is still an amine and still nucleophilic, so it reacts again. With excess methyl iodide and base, all N–H hydrogens are replaced:

\[
\text{RNH}_2 + 3\ \text{CH}_3\text{I} \xrightarrow{\text{excess, base}} \text{RN}^+(\text{CH}_3)_3\ \text{I}^- + 3\ \text{HI}
\]

The **quaternary ammonium salt** has no N–H bond and a permanent positive charge; the reaction stops there. This **over-alkylation** is why alkylation is a poor route to pure secondary or tertiary amines — reductive amination (Topic 6) is preferred.

### Acylation: the off switch

An acid chloride converts an amine into an **amide**:

\[
\text{RNH}_2 + \text{CH}_3\text{C}(=O)\text{Cl} \longrightarrow \text{CH}_3\text{C}(=O)\text{NHR} + \text{HCl}
\]

In words: the nitrogen lone pair attacks the carbonyl carbon, the C=O π electrons move onto oxygen, chloride leaves, and the HCl is neutralized by added base (aqueous hydroxide or pyridine — **Schotten–Baumann** conditions). The amide's lone pair is delocalized into the carbonyl, so amides are nearly nonbasic (pKaH ≈ −0.5). Acylation therefore *turns the amine off* — the standard way to protect an amino group before chemistry elsewhere in the molecule.

### Condensation: imines and enamines

A primary amine condenses with an aldehyde or ketone to give an **imine** (Schiff base), losing water:

\[
\text{RNH}_2 + \text{R}'_2\text{C}=O \rightleftharpoons \text{R}'_2\text{C}=\text{NR} + \text{H}_2\text{O}
\]

Mechanism in words: nitrogen attacks the carbonyl carbon, a proton transfer turns C–OH into water, and water leaves as the C=N bond forms. A **secondary** amine gives an **enamine** (C=C–N) instead. Imine formation is reversible — the basis of reductive amination.

### Nitrous acid and oxidation

Nitrous acid (from NaNO₂ + HCl) converts a primary amine into a **diazonium ion**:

\[
\text{RNH}_2 + \text{HNO}_2 + \text{H}^+ \longrightarrow \text{RN}_2^{\,+} + 2\ \text{H}_2\text{O}
\]

Aliphatic diazonium ions are unstable: N₂ leaves, and the resulting carbocation gives a messy mixture of alcohols, alkenes, and substitution products. Aromatic diazonium salts are stable when cold — the gateway to Sandmeyer chemistry (Topic 8). Quaternary ammonium hydroxides undergo the **Hofmann elimination** on heating; the bulky amine leaving group makes it favor the **least substituted** alkene — opposite to most E2 reactions.

## ELI-10: Explain Like I'm 10

> An amine is like a kid holding out a sticky hand — the lone pair — ready to grab protons or carbon atoms. Give it small carbon pieces (alkyl groups) and it grabs them one after another until all four hands are full, then it stops. Put a "coat" on it (an acyl group) and the sticky hand gets covered, so it calms down. With nitrous acid, the amine trades its sticky hand for a "pop-off" handle that chemists can later replace with almost anything.

## High-Yield Points

- **Alkylation over-reacts:** excess CH₃I + base drives 1° amines to quaternary ammonium salts (3 equivalents per N–H₂).
- **Acylation is the off switch:** acid chloride → amide; amides are essentially nonbasic (pKaH ≈ −0.5).
- Primary amine + aldehyde/ketone → **imine** (C=N); secondary amine → **enamine** (C=C–N).
- Primary *aliphatic* amines + HNO₂ → unstable diazonium ions → messy mixtures; *aromatic* amines give stable cold diazonium salts.
- Hofmann elimination gives the **least** substituted alkene; Cope elimination does the same via a syn pathway.
- Amines are poor leaving groups; quaternization or protonation is required before nitrogen can leave.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| alkylation | Adding an alkyl group to nitrogen by S_N2 displacement | Builds quaternary ammonium salts; suffers from over-alkylation |
| quaternary ammonium salt | Nitrogen with four alkyl groups, \(\text{R}_4\text{N}^+\) | Terminal product of exhaustive alkylation; no N–H, no nucleophilicity |
| acylation | Converting an amine into an amide with an acid chloride/anhydride | Tames the nitrogen; the chemical basis of peptide bonds |
| amide | A carbonyl attached to nitrogen, \(\text{RC}(=O)\text{NR}_2\) | Far less basic than an amine; the protected, deactivated form |
| imine (Schiff base) | A C=N compound from a primary amine + aldehyde/ketone | Key intermediate in reductive amination and in vision (rhodopsin) |
| enamine | A C=C–N compound from a secondary amine + carbonyl | Nucleophilic at carbon; useful for α-functionalization |
| diazonium ion | A \(\text{RN}_2^+\) group from amine + nitrous acid | Aliphatic versions decompose; aromatic versions enable Sandmeyer chemistry |

## How It Works / Step-by-Step Process

To predict the product of any amine reaction:

1. **Classify the amine:** count the N–H bonds (primary, secondary, tertiary).
2. **Identify the reagent's role:** alkyl halide (alkylation), acid chloride (acylation), aldehyde/ketone (condensation), nitrous acid (diazotization), peroxide (oxidation).
3. **Predict where the lone pair goes:** onto carbon (attack), onto H⁺ (protonation), or nowhere (no N–H left).
4. **Check the stopping point:** if the product still has an N–H, expect further reaction; acylation and quaternization stop the train.
5. **Name the product class:** ammonium salt, amide, imine, enamine, diazonium salt, or alkene.

## Worked Examples

### Example 1: How much methyl iodide quaternizes an amine?

Benzylamine is converted to its quaternary ammonium salt with excess methyl iodide; each molecule needs three methyl groups. How many grams of methyl iodide (molar mass 141.94 g/mol) are needed for 2.5 mmol of amine?

Moles of methyl iodide:

\[
n(\text{CH}_3\text{I}) = 3 \times n(\text{amine}) = 3 \times 0.0025\ \text{mol} = 0.0075\ \text{mol}
\]

Converting to mass:

\[
m = n \times M = 0.0075\ \text{mol} \times \frac{141.94\ \text{g}}{\text{mol}} = 1.06\ \text{g}
\]

Units check: mol × g/mol = g. The answer, 1.06 g, also shows why alkylation is wasteful for making pure mono- or dialkylamines: three equivalents of alkylating agent are consumed, and the product is still a salt.

### Example 2: Acylation kills basicity — prove it with numbers

Compare hexylamine and its acetylated product, N-hexylacetamide, at pH 7 (pKaH ≈ 10.6 for the amine, ≈ −0.5 for the amide). Henderson–Hasselbalch in the form:

\[
\log\frac{[\text{B}]}{[\text{BH}^+]} = \text{pH} - \text{p}K_\text{aH}
\]

For hexylamine:

\[
\log\frac{[\text{B}]}{[\text{BH}^+]} = 7.0 - 10.6 = -3.6 \quad\Rightarrow\quad \frac{[\text{B}]}{[\text{BH}^+]} = 10^{-3.6} \approx 2.5 \times 10^{-4}
\]

Only ~0.025% of the amine is free base; 99.97% is protonated. For the amide:

\[
\log\frac{[\text{B}]}{[\text{BH}^+]} = 7.0 - (-0.5) = 7.5 \quad\Rightarrow\quad \frac{[\text{B}]}{[\text{BH}^+]} \approx 3 \times 10^7
\]

The amide is essentially 100% neutral — exactly why acylation protects and deactivates amine nitrogens.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Amines | Amides | Amines are basic and nucleophilic (pKaH ~10); amides are nearly neutral (pKaH ≈ −0.5) |
| Alkylation | Acylation | Alkylation adds alkyl groups and over-reacts; acylation forms an amide and stops after one addition |
| Imine | Enamine | Imine: C=N with H on nitrogen (1° amine); enamine: C=C–N (2° amine) |
| "Tertiary amines form amides" | 1°/2° amine acylation | Acylation needs an N–H bond; tertiary amines just form ammonium salts |
| Hofmann product | Zaitsev product | Hofmann elimination favors the least substituted alkene; ordinary E2 favors the most substituted |

## Quick Review

1. Why is it hard to stop methyl iodide alkylation at the secondary amine stage?
2. Predict the product when cyclohexylamine is treated with acetyl chloride and aqueous NaOH.
3. What structural feature tells an imine from an enamine, and which amine class makes each?
4. What happens when a primary aliphatic amine meets nitrous acid, and why is the result usually a mixture?
5. Which alkene — more substituted or less substituted — is favored in a Hofmann elimination, and why?

<details>
<summary>Show answers</summary>

1. The mono-alkylated product is still an amine with a lone pair and N–H bonds, so it stays nucleophilic and reacts again; excess methyl iodide and base drive it all the way to the quaternary ammonium salt.
2. N-cyclohexylacetamide: the amine attacks the acid chloride's carbonyl carbon, chloride leaves, and the HCl is neutralized by hydroxide.
3. An imine has a C=N bond with a hydrogen on nitrogen (primary amine); an enamine has a C=C–N unit (secondary amine).
4. Nitrous acid (from NaNO₂ + HCl) makes an aliphatic diazonium ion, which loses N₂ to give a carbocation; the carbocation forms a mixture of alcohols, alkenes, and rearranged products.
5. The less substituted alkene (Hofmann product), because the bulky trialkylamine leaving group forces base to abstract the most accessible β-hydrogen.

</details>

## Related Topics

- Previous: [Synthesis of Amines](06-synthesis-of-amines.md)
- Next: [Reactions of Arylamines](08-reactions-of-arylamines.md)
- Related: [Basicity of Amines](03-basicity-of-amines.md)
- Related: [Biological Amines and the Henderson–Hasselbalch Equation](05-biological-amines-and-the-henderson-hasselbalch-equation.md)
- Related: [Amines and Heterocycles chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Basicity constants cited (alkylamine pKaH ≈ 10.6, amide pKaH ≈ −0.5) are standard literature values compiled in public pKa tables (e.g., the Evans pKa table); molar mass of CH₃I uses standard atomic weights (C 12.01, H 1.008, I 126.90).
- General laboratory principles only; no specific experimental procedures are given.
- Last updated: 2026-08-16
