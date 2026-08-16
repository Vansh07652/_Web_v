---
title: "Reactions of Alcohols"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "17: Alcohols and Phenols"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "reactions-of-alcohols"
  - "science"
status: "complete"
---

# Reactions of Alcohols

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 17: Alcohols and Phenols](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Every alcohol reaction is a contest between the three reactive features of the –OH carbon: the **oxygen lone pairs** (base and nucleophile), the **O–H bond** (weak acid), and the **C–O bond** (almost impossible to break on its own). Because hydroxide (\(\text{OH}^-\)) is a terrible leaving group, the C–O bond becomes reactive only when the oxygen is first converted into something that can leave — either by **protonation** (making water the leaving group) or by **derivatization** (making a tosylate or halide). This single idea — "activate the oxygen before you can break the C–O bond" — organizes the entire topic.

The major reaction families: (1) **dehydration** to alkenes under acid and heat, (2) **substitution** to alkyl halides with \(\text{HX}\), \(\text{PBr}_3\), or \(\text{SOCl}_2\), (3) **tosylate formation** as a gateway to \(\text{S}_\text{N}2\) chemistry, (4) **esterification** with acid chlorides or anhydrides, and (5) **alkoxide formation** with strong bases or alkali metals. Oxidation is the sixth family (next topic).

## Why This Matters

Alcohols are the most versatile intermediates in organic synthesis: nearly every functional group can be made from an alcohol, and nearly every one can be reduced to one. In industry and medicine, these reactions make ether anesthetics, alkene monomers, alkyl halide building blocks, and ester prodrugs. In the body, the same chemistry governs ethanol metabolism and enzyme activation of hydroxyl groups. For exams, alcohol reactions are a favorite "predict the product" target: the answer depends on three quick decisions — alcohol class (1°/2°/3°), acidic vs basic reagent, and whether the oxygen has been activated.

## Core Concepts

### The leaving-group problem: why –OH must be activated

Hydroxide is a strong base (pKa of water ≈ 15.7), so it never leaves on its own. Two fixes exist:

- **Protonation:** acid converts –OH into –\(\text{OH}_2^+\), making water (pKa ≈ –1.7) the leaving group — the path for dehydration and \(\text{HX}\) substitution.
- **Derivatization:** tosyl chloride converts –OH into –OTs; tosylate (pKa ≈ –2.8) leaves easily. This preserves stereochemistry at carbon and works where protonation would fail.

### Dehydration to alkenes (acid-catalyzed)

Heating an alcohol with a strong acid (\(\text{H}_2\text{SO}_4\) or \(\text{H}_3\text{PO}_4\)) removes water and forms an alkene. The mechanism is **E1** for 2° and 3° alcohols: protonation, loss of water to a carbocation, then loss of a β-hydrogen. The alkene obeys **Zaitsev's rule** — the more substituted alkene predominates. Two exam features:

- **Carbocation rearrangements:** hydride or alkyl shifts can change the product skeleton (e.g., 3,3-dimethyl-2-butanol rearranges via a methyl shift before elimination).
- **Reaction order by class:** 3° alcohols dehydrate under mild conditions (dilute acid, ~50 °C); 2° alcohols need stronger conditions; 1° alcohols require concentrated acid and ~180 °C and react by an E2-like pathway, since a 1° carbocation is too unstable to form.

### Conversion to alkyl halides with HX

Alcohols react with hydrogen halides to give alkyl halides plus water. Reactivity follows \(\text{HI} > \text{HBr} > \text{HCl}\); HCl is so sluggish with 1° and 2° alcohols that it needs \(\text{ZnCl}_2\) (the **Lucas reagent**) as a Lewis-acid catalyst.

- **3° alcohols:** rapid **S_N1** — protonation, loss of water, carbocation, halide capture. The Lucas test exploits this: 3° alcohols cloud within seconds.
- **2° alcohols:** S_N1 as well, but slow, with possible rearrangement (cloudy in ~5 min).
- **1° alcohols:** **S_N2** — bromide or iodide displaces the protonated hydroxyl with inversion. Even so, HCl is too slow; 1° alcohols give no Lucas reaction at room temperature.

### Conversion to alkyl halides with PBr3 and SOCl2

Using \(\text{HBr}\) directly risks carbocation rearrangements for 2° alcohols. **Phosphorus tribromide** avoids this: an \(\text{S}_\text{N}2\)-type displacement at carbon gives **inversion** and no free carbocation, so the skeleton is preserved. Stoichiometry: 3 mol alcohol per 1 mol \(\text{PBr}_3\):

\[
3\,\text{ROH} + \text{PBr}_3 \longrightarrow 3\,\text{RBr} + \text{H}_3\text{PO}_3
\]

Similarly, **thionyl chloride** (\(\text{SOCl}_2\), usually with pyridine) gives alkyl chlorides with inversion and no rearrangement (\(\text{SO}_2\) and HCl byproducts).

### Tosylate esters: the gateway to SN2

Tosyl chloride in pyridine converts –OH to –OTs with **retention of configuration** (the C–O bond never breaks). The tosylate is then displaced by any good nucleophile (\(\text{CN}^-\), \(\text{N}_3^-\), \(\text{RO}^-\), \(\text{I}^-\), \(\text{RS}^-\)) in a clean \(\text{S}_\text{N}2\) step with inversion:

\[
\text{R–OH} \xrightarrow{\text{TsCl, pyridine}} \text{R–OTs} \xrightarrow{\text{Nu}^-} \text{R–Nu} + \text{TsO}^-
\]

This "activate then displace" sequence converts an alcohol into almost any other functional group with controlled stereochemistry — one clean inversion, never a scrambled product.

### Esterification with acid chlorides and anhydrides

Alcohols react with acid chlorides or anhydrides (usually with pyridine to absorb the HCl) to give esters:

\[
\text{ROH} + \text{CH}_3\text{COCl} \longrightarrow \text{ROCOCH}_3 + \text{HCl}
\]

This is nucleophilic acyl substitution: the alcohol's oxygen attacks the carbonyl carbon, then chloride leaves. Phenols react the same way (topic 10). Acetylation of hydroxyl groups is also how the body tags molecules for transport or excretion, and how aspirin is made from salicylic acid.

### Alkoxide formation

Alcohols are weak acids (pKa ≈ 16–18), so strong bases deprotonate them. With sodium or potassium metal:

\[
2\,\text{ROH} + 2\,\text{Na} \longrightarrow 2\,\text{RO}^-\text{Na}^+ + \text{H}_2
\]

With sodium hydride, the byproduct is hydrogen gas as well. Alkoxides are the nucleophiles/bases in Williamson ether synthesis (Chapter 18) and in many eliminations. Practical warning: an alcohol's O–H proton is acidic, so alcohols **quench Grignard and organolithium reagents** — protect an –OH (topic 8) before using an organometallic reagent on the same molecule.

## ELI-10: Explain Like I'm 10

> Imagine –OH is a guest that refuses to leave a party (the carbon). The only way to get the guest out is to make it uncomfortable: squirt acid on it so it becomes water (then it happily leaves), or dress it up as a tosylate (then a strong "nudger" can push it out). Once the –OH is gone, whatever molecule was waiting outside takes its seat — sometimes with a twist, like a chair flip (inversion).

## High-Yield Points

- Hydroxide never leaves on its own; **activate –OH by protonation (→ \(\text{H}_2\text{O}\)) or tosylation (→ \(\text{OTs}^-\))** before breaking the C–O bond.
- Dehydration (acid + heat) gives alkenes via E1 for 2°/3° alcohols; products obey **Zaitsev's rule**; watch for hydride/methyl shifts.
- \(\text{HX}\) reactivity: \(\text{HI} > \text{HBr} > \text{HCl}\). 3° → S_N1 (fast, Lucas positive), 2° → S_N1 (slower), 1° → S_N2 (inversion).
- \(\text{PBr}_3\) and \(\text{SOCl}_2\) give alkyl halides **without rearrangement** (inversion at carbon); 3 mol ROH per 1 mol \(\text{PBr}_3\).
- \(\text{TsCl}\)/pyridine converts –OH to –OTs with retention; the tosylate then undergoes \(\text{S}_\text{N}2\) with inversion.
- Acid chlorides/anhydrides + alcohol → ester (nucleophilic acyl substitution).
- Na or NaH converts alcohols to alkoxides; alcohols destroy Grignard reagents, so protect –OH first.
- Lucas test: 3° cloudy immediately, 2° in ~5 min, 1° no reaction.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Dehydration | Loss of water from an alcohol to form an alkene | The route to alkenes; controlled by Zaitsev's rule and carbocation stability |
| Zaitsev's rule | The more substituted alkene forms preferentially | Predicts the major dehydration/elimination product |
| Lucas reagent | \(\text{ZnCl}_2\) in concentrated HCl | Quick classification of 1°/2°/3° alcohols by cloudiness timing |
| Tosylate (OTs) | \(p\)-Toluenesulfonate ester of an alcohol | Converts –OH into a superb leaving group without breaking C–O |
| \(\text{PBr}_3\) | Phosphorus tribromide; converts ROH to RBr (3:1 stoichiometry) | Substitution with inversion and no rearrangement |
| S_N1 / S_N2 | Unimolecular/bimolecular nucleophilic substitution | The two mechanisms controlling rate, stereochemistry, and rearrangement |
| Alkoxide | \(\text{RO}^-\); conjugate base of an alcohol | Key nucleophile/base for Williamson ether synthesis |
| Carbocation rearrangement | Hydride or alkyl shift to a more stable cation | Changes the carbon skeleton of the product — a classic exam trap |

## Worked Examples

### Example 1: Predict the major dehydration product

**Problem.** Dehydrate 2-methyl-2-butanol with sulfuric acid and heat. Predict the major alkene.

**Approach.** The alcohol is 3°, so the mechanism is E1: protonate –OH, lose water to give the 3° carbocation \((\text{CH}_3)_2\text{C}^+\text{CH}_2\text{CH}_3\), then remove a β-hydrogen. Zaitsev's rule says the more substituted alkene wins. Two β-positions exist: a methyl group (2-methyl-1-butene, disubstituted) and the \(\text{CH}_2\) of the ethyl group (2-methyl-2-butene, trisubstituted).

**Answer.** The major product is **2-methyl-2-butene** (trisubstituted, Zaitsev), with 2-methyl-1-butene as the minor product:

\[
(\text{CH}_3)_2\text{C(OH)CH}_2\text{CH}_3 \xrightarrow{\text{H}_2\text{SO}_4,\ \Delta} (\text{CH}_3)_2\text{C}=\text{CHCH}_3 + \text{H}_2\text{O}
\]

### Example 2: Convert 1-butanol to 1-bromobutane without rearrangement

**Problem.** You need 1-bromobutane from 1-butanol. Why is \(\text{PBr}_3\) better than \(\text{HBr}\), and how much \(\text{PBr}_3\) is required for 0.250 mol of alcohol?

**Step 1 — reagent choice.** For 1-butanol, HBr would give a clean S_N2 product too, but for 2° alcohols HBr can scramble stereochemistry through a carbocation; \(\text{PBr}_3\) always gives inversion without rearrangement, so it is the general-purpose choice for a stereochemically defined bromide.

**Step 2 — stoichiometry.** 1 mol \(\text{PBr}_3\) per 3 mol ROH:

\[
3\,\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{OH} + \text{PBr}_3 \longrightarrow 3\,\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{Br} + \text{H}_3\text{PO}_3
\]

**Step 3 — dimensional analysis.** Convert moles of alcohol to moles of \(\text{PBr}_3\), then to grams (molar mass of \(\text{PBr}_3\) = 30.97 + 3 × 79.90 = 270.67 g/mol):

\[
0.250\ \text{mol ROH} \times \frac{1\ \text{mol PBr}_3}{3\ \text{mol ROH}} = 0.0833\ \text{mol PBr}_3
\]

\[
0.0833\ \text{mol PBr}_3 \times \frac{270.67\ \text{g}}{\text{mol}} = 22.6\ \text{g PBr}_3
\]

**Answer.** 22.6 g of \(\text{PBr}_3\) (about 8.9 mL at density 2.85 g/mL) converts 0.250 mol of 1-butanol.

### Example 3: Tosylate strategy to install a nitrile with inversion

**Problem.** Convert (R)-2-butanol into (S)-2-butanenitrile (\(\text{CH}_3\text{CH}_2\text{CH(CN)CH}_3\)).

**Step 1 — tosylation.** Treat (R)-2-butanol with \(\text{TsCl}\)/pyridine. The C–O bond is untouched, so the product is (R)-2-butyl tosylate (retention).

**Step 2 — displacement.** Cyanide is a good nucleophile; \(\text{S}_\text{N}2\) at the tosylate carbon inverts configuration: (R) becomes (S).

**Step 3 — net result.** One inversion overall, with no carbocation intermediate and no rearranged byproducts:

\[
(R)\text{-CH}_3\text{CH}_2\text{CH(OH)CH}_3 \xrightarrow{1.\ \text{TsCl/pyridine}\ \ 2.\ \text{NaCN}} (S)\text{-CH}_3\text{CH}_2\text{CH(CN)CH}_3
\]

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Dehydration vs "dehydration of a hydrate" | Water loss from an alcohol (C–O cleavage) | Alcohol dehydration forms a C=C; the hydrate phrase refers to inorganic water of crystallization |
| \(\text{PBr}_3\) vs \(\text{HBr}\) | Both make alkyl bromides | \(\text{PBr}_3\): S_N2, inversion, no rearrangement. HBr on 2°/3° alcohols can rearrange via a carbocation |
| Retention vs inversion | Tosylation (retention) vs S_N2 displacement (inversion) | TsCl only changes O–H; the subsequent nucleophilic attack flips the stereocenter |
| E1 vs E2 dehydration | Mechanism for 1° vs 3° alcohols | 3° alcohols eliminate through a carbocation (E1); 1° alcohols use an E2-like pathway — no carbocation |
| Lucas positive vs Lucas negative | 3°/2° vs 1° alcohols | Cloudiness timing: 3° immediate, 2° ~5 min, 1° no reaction at room temperature |
| Alcohol + Na vs alcohol + NaH | Both give alkoxides | Na: 2 ROH → 2 RO⁻Na⁺ + H₂. NaH: ROH → RO⁻Na⁺ + H₂ (1:1, no H₂ from the alcohol's H) |

## Quick Review

1. Why can't hydroxide act as a leaving group, and what two strategies fix that?
2. Predict the major product of dehydrating 2-butanol with \(\text{H}_2\text{SO}_4\) and heat. Which rule decides the answer?
3. An unknown alcohol turns cloudy instantly with Lucas reagent. What does that tell you, and what reaction occurs?
4. How many grams of \(\text{PBr}_3\) are needed to convert 0.500 mol of cyclohexanol to bromocyclohexane?
5. (R)-2-Pentanol is converted to its tosylate, then treated with sodium azide. What is the stereochemical outcome of the final product?

<details>
<summary>Show answers</summary>

1. Hydroxide is a strong base (pKa of water ≈ 15.7), so it is a poor leaving group. Strategy 1: protonate –OH to –\(\text{OH}_2^+\) so that water leaves. Strategy 2: derivatize –OH to a tosylate (–OTs), which is an excellent leaving group.
2. 2-Butene (more substituted, Zaitsev's rule). Dehydration of 2-butanol gives 2-butene as the major product and 1-butene as the minor product.
3. It is a 3° alcohol. Lucas reagent (ZnCl₂ in concentrated HCl) protonates the –OH; the carbocation is captured by chloride, and the insoluble alkyl chloride clouds the solution. 3° react instantly; 2° take minutes; 1° do not react at room temperature.
4. 0.500 mol ROH × (1 mol PBr₃ / 3 mol ROH) = 0.1667 mol PBr₃ × 270.67 g/mol = 45.1 g.
5. The final product is (S)-2-pentyl azide. Tosylation retains configuration ((R) stays (R)); the S_N2 displacement by azide inverts it to (S).
</details>

## Related Topics

- Previous: [Alcohols from Carbonyl Compounds: Grignard Reaction](05-alcohols-from-carbonyl-compounds-grignard-reaction.md)
- Next: [Oxidation of Alcohols](07-oxidation-of-alcohols.md)
- Related: [Protection of Alcohols](08-protection-of-alcohols.md)
- Related: [Properties of Alcohols and Phenols](02-properties-of-alcohols-and-phenols.md)
- Related: [Reactions of Phenols](10-reactions-of-phenols.md)
- Related: [Alcohols and Phenols chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against current references (PubChem, 2026-08): PBr₃ molar mass 270.67 g/mol, density ~2.85 g/mL; pKa water 15.7, pKa hydronium ≈ −1.7, pKa TsOH ≈ −2.8; alcohol O–H pKa ≈ 16–18 (standard organic chemistry references).
- Last updated: 2026-08-16
