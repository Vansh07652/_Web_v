---
title: "Reduction of Aromatic Compounds"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "16: Chemistry of Benzene: Electrophilic Aromatic Substitution"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "reduction-of-aromatic-compounds"
  - "science"
status: "complete"
---

# Reduction of Aromatic Compounds

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 16: Chemistry of Benzene: Electrophilic Aromatic Substitution](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

"Reduction of aromatic compounds" is really three different reactions hiding under one name, because three different parts of a substituted benzene can accept electrons:

1. **The ring itself** can be hydrogenated: benzene (C6H6) plus three molecules of H2 over a metal catalyst gives cyclohexane (C6H12).
2. **A nitro group** can be reduced: nitrobenzene (C6H5NO2) becomes aniline (C6H5NH2), the classic route to aromatic amines.
3. **A carbonyl in a side chain** can be reduced: acetophenone (C6H5COCH3) becomes ethylbenzene (C6H5CH2CH3) via Clemmensen or Wolff–Kishner, or the alcohol 1-phenylethanol (C6H5CH(OH)CH3) via hydrides.

The single most important thing to know is which reagent reduces which functional group: catalytic hydrogenation attacks the ring; other conditions reduce substituents; Clemmensen/Wolff–Kishner target an alkylbenzene, not an alcohol.

## Why This Matters

Reduction puts functional groups where electrophilic substitution cannot. You cannot put an amino group on a benzene ring directly with an electrophile — but you can nitrate the ring, then reduce NO2 to NH2. That two-step sequence is how aniline and its derivatives are made industrially; anilines feed dyes, pharmaceuticals (acetaminophen), and polymers (polyurethane). Catalytic hydrogenation converts aromatic feedstocks into saturated cycloalkanes, better diesel fuels and solvents. And Clemmensen/Wolff–Kishner are indispensable in synthesis: a Friedel–Crafts acylation installs a carbonyl where you want an alkyl group, and reduction converts it to CH2 — sidestepping alkylation's rearrangement and polyalkylation problems (topic 3).

## Core Concepts

### Catalytic hydrogenation of the ring

Benzene is reduced to cyclohexane with H2 over a metal catalyst (Pt, Pd, or Ni) under heat and pressure — one ring takes three H2 molecules:

\[
\text{C}_6\text{H}_6 + 3\,\text{H}_2 \longrightarrow \text{C}_6\text{H}_{12}
\]

The reaction is harder than alkene hydrogenation because the ring must first surrender its resonance stabilization; hence harsher conditions (heat, pressure). The measured heat of hydrogenation provides evidence for aromaticity: hydrogenating 1 mole of benzene releases less heat than 3 moles of a typical alkene would, because the delocalized ring is already unusually stable. The reaction is rarely used in multi-step synthesis precisely because it destroys aromaticity.

### Reduction of nitro groups to amines

Nitroarenes are reduced to anilines by iron or tin in acid (Fe/HCl, Sn/HCl) or by hydrogenation over Pd/C. In words, the mechanism is a sequence of electron-transfer steps: the nitro group accepts electrons and protons stepwise through nitroso (–N=O) and hydroxylamine (–NH–OH) intermediates, each gaining hydrogen, until –NH2 forms; water is a byproduct. Because NO2 is a meta-directing, deactivating group (topic 4), nitration followed by reduction is the standard way to place an amino group at the position directed by other substituents.

### Side-chain carbonyl reduction: Clemmensen and Wolff–Kishner

Both reactions convert an aryl ketone (Ar–CO–R) into the corresponding alkylbenzene (Ar–CH2–R):

- **Clemmensen reduction:** zinc amalgam (Zn–Hg) in concentrated HCl, with heat.
- **Wolff–Kishner reduction:** hydrazine (H2N–NH2) in a high-boiling basic solution (KOH in ethylene glycol), with heat; the carbonyl first forms a hydrazone (C=N–NH2), then nitrogen gas is expelled.

These are the standard "carbonyl to CH2" conversions. The classic sequence: Friedel–Crafts acylation places an acyl group (a meta director and a ketone), then Clemmensen or Wolff–Kishner converts it to an alkyl group (an ortho/para director) — alkylation without the rearrangements and over-alkylation of direct Friedel–Crafts alkylation.

### A note on selectivity

Hydride reagents (NaBH4, LiAlH4) reduce an aryl ketone's carbonyl to an alcohol, not to CH2, and they do not touch the ring. Catalytic hydrogenation reduces the ring and nitro groups but leaves simple ketones mostly intact. Choosing the reagent is choosing the target: ring → H2/metal; NO2 → Fe/HCl or H2/Pd; Ar–CO–R to Ar–CH2–R → Clemmensen or Wolff–Kishner; Ar–CO–R to Ar–CH(OH)–R → NaBH4 or LiAlH4.

## ELI-10: Explain Like I'm 10

> Reduction is like adding electrons as "handles" that grab hydrogen atoms. If you want to flatten a strong metal loop (the ring) into a simple circle, you add three pairs of handles. If you want to turn a mean NO2 badge into a friendly NH2 badge, you add handles one at a time until it is transformed. Different tools add handles to different parts — you just pick the right tool for the part you want to change.

## High-Yield Points

- Ring hydrogenation: C6H6 + 3 H2 → C6H12 over Pt/Pd/Ni; needs heat and pressure because aromaticity resists it.
- Nitro → amino: Fe/HCl, Sn/HCl, or H2/Pd converts C6H5NO2 to C6H5NH2; the classic indirect way to install –NH2.
- Clemmensen (Zn–Hg/HCl) and Wolff–Kishner (N2H4/KOH, heat) reduce aryl ketones Ar–CO–R to alkylbenzenes Ar–CH2–R.
- NaBH4/LiAlH4 reduce an aryl ketone only to the alcohol; they do not touch the ring.
- Catalytic hydrogenation destroys aromaticity — use it only when a saturated ring is the goal.
- Synthesis pattern: acylate (Friedel–Crafts) then reduce (Clemmensen/Wolff–Kishner) to place an alkyl group cleanly.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| catalytic hydrogenation | Adding H2 across a bond using a metal catalyst (Pt, Pd, Ni) | Reduces the aromatic ring to a saturated cycloalkane; also reduces nitro groups |
| aniline | C6H5NH2, the amino-substituted benzene | Key industrial intermediate for dyes, drugs, and polymers |
| nitro group | –NO2, a meta-directing, deactivating substituent | Once on the ring it can be reduced to –NH2, flipping its directing behavior |
| Clemmensen reduction | Zn–Hg in conc. HCl converts an aryl ketone to an alkylbenzene | A standard carbonyl-to-CH2 conversion used after Friedel–Crafts acylation |
| Wolff–Kishner reduction | Hydrazine + base + heat converts an aryl ketone to an alkylbenzene | The basic-condition alternative to Clemmensen |
| hydride reagent | NaBH4 or LiAlH4, sources of H⁻ | Reduce carbonyls to alcohols only — ring untouched |

## How It Works / Step-by-Step Process

To choose a reduction for a substituted benzene:

1. Write the target structure and circle the part that must change.
2. Saturated ring needed? Use H2/metal with heat and pressure.
3. Nitro → amine? Use Fe/HCl (or Sn/HCl, or H2/Pd); the ring stays aromatic.
4. Aryl ketone → alkylbenzene? Use Clemmensen (acidic) or Wolff–Kishner (basic).
5. Aryl ketone → secondary alcohol? Use NaBH4 or LiAlH4.
6. Check for side reactions: the chosen reagent must not touch the other groups present.

## Worked Examples

### Example 1: Ring hydrogenation stoichiometry

How many moles of H2 are consumed, and how many grams of cyclohexane (C6H12, M = 84.16 g/mol) are formed, when 7.81 g of benzene (C6H6, M = 78.11 g/mol) is fully hydrogenated?

First, the balanced reaction:

\[
\text{C}_6\text{H}_6 + 3\,\text{H}_2 \longrightarrow \text{C}_6\text{H}_{12}
\]

Moles of benzene:

\[
n(\text{C}_6\text{H}_6) = \frac{m}{M} = \frac{7.81\ \text{g}}{78.11\ \text{g/mol}} = 0.100\ \text{mol}
\]

From the 1:3 stoichiometry, hydrogen needed is \(3 \times 0.100 = 0.300\ \text{mol}\) H2. Benzene to cyclohexane is 1:1, so \(n(\text{C}_6\text{H}_{12}) = 0.100\ \text{mol}\), and the mass is:

\[
m(\text{C}_6\text{H}_{12}) = n \times M = 0.100\ \text{mol} \times 84.16\ \text{g/mol} = 8.42\ \text{g}
\]

### Example 2: Nitrobenzene to aniline

Show how to convert nitrobenzene to aniline, and explain why this sequence is used instead of direct electrophilic amination.

Reduction with iron and hydrochloric acid (followed by base workup to free the amine):

\[
\text{C}_6\text{H}_5\text{NO}_2 \xrightarrow{\text{Fe/HCl}} \text{C}_6\text{H}_5\text{NH}_2
\]

In words: the nitro group accepts electrons from iron and protons from acid through nitroso and hydroxylamine intermediates, losing oxygen as water, until –NH2 remains on the ring.

Why not direct amination? NH2 cannot be introduced by ordinary electrophilic aromatic substitution (it is not a good electrophile and would be protonated/oxidized). Nitration (an EAS reaction, topic 1) followed by reduction is the reliable route.

### Example 3: Choosing between reduction pathways

Acetophenone (C6H5COCH3) is treated with (a) NaBH4 and (b) Wolff–Kishner conditions. Predict and name each product.

(a) NaBH4 delivers hydride to the carbonyl carbon; the product is the secondary alcohol 1-phenylethanol (C6H5CH(OH)CH3). The ring is untouched.

(b) Hydrazine + base + heat converts the ketone to ethylbenzene (C6H5CH2CH3): the carbonyl oxygen leaves as water and the hydrazone's C=N exits as N2 gas, leaving CH2 in place of C=O.

Same starting material, two different targets — the reagent choice is the entire answer.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "All reductions of aromatics hydrogenate the ring." | Only catalytic hydrogenation (H2/metal) touches the ring. Fe/HCl, Clemmensen, Wolff–Kishner, and hydrides reduce substituents and leave the ring aromatic. |
| "Clemmensen and Wolff–Kishner give an alcohol." | They go all the way to the alkane (C=O → CH2). Use NaBH4/LiAlH4 for the alcohol. |
| "NaBH4 reduces nitrobenzene to aniline." | Hydrides are generally ineffective on isolated nitro groups; use Fe/HCl, Sn/HCl, or H2/Pd. |
| "Hydrogenating benzene is easy like hydrogenating an alkene." | Benzene needs harsher conditions (heat, pressure) because the resonance-stabilized ring resists addition. |
| "Reduction of NO2 removes the ring's aromaticity." | No — the ring stays intact and aromatic; only the substituent changes. |
| "Friedel–Crafts alkylation is the best way to make ethylbenzene from benzene." | Direct alkylation can rearrange and over-alkylate; acylation followed by Clemmensen/Wolff–Kishner is the controlled alternative. |

## Quick Review

1. Write the balanced equation for catalytic hydrogenation of benzene.
2. Which reagent systems reduce nitrobenzene to aniline?
3. What is the product of Clemmensen reduction of acetophenone?
4. You need 1-phenylethanol from acetophenone. Which reagent do you choose, and why not Clemmensen?
5. Why does ring hydrogenation require harsher conditions than alkene hydrogenation?

<details>
<summary>Show answers</summary>

1. C6H6 + 3 H2 → C6H12 (over Pt/Pd/Ni, heat and pressure).
2. Fe/HCl, Sn/HCl, or catalytic hydrogenation with H2/Pd (or H2/Raney Ni).
3. Ethylbenzene (C6H5CH2CH3) — the carbonyl becomes CH2.
4. NaBH4 (or LiAlH4): it reduces the ketone to the secondary alcohol 1-phenylethanol. Clemmensen would over-reduce to ethylbenzene.
5. Hydrogenation must first destroy benzene's resonance stabilization (aromaticity), which costs energy; alkenes have no such stabilization, so they hydrogenate under milder conditions.
</details>

## Related Topics

- Previous: [Oxidation of Aromatic Compounds](08-oxidation-of-aromatic-compounds.md)
- Next: [Synthesis of Polysubstituted Benzenes](10-synthesis-of-polysubstituted-benzenes.md)
- Related: [Alkylation and Acylation of Aromatic Rings: The Friedel–Crafts Reaction](03-alkylation-and-acylation-of-aromatic-rings-the-friedel-crafts-reaction.md)
- Related: [Substituent Effects in Electrophilic Substitutions](04-substituent-effects-in-electrophilic-substitutions.md)
- Related: [Nucleophilic Aromatic Substitution](06-nucleophilic-aromatic-substitution.md)
- Related: [Chemistry of Benzene: Electrophilic Aromatic Substitution chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Molar masses and hydrogenation stoichiometry are standard values; no experimental data claimed beyond textbook-typical conditions.
- Last updated: 2026-08-16
