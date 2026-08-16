---
title: "Preparing Ethers"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "18: Ethers and Epoxides; Thiols and Sulfides"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "preparing-ethers"
  - "science"
status: "complete"
---

# Preparing Ethers

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 18: Ethers and Epoxides; Thiols and Sulfides](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

An ether is a molecule with an oxygen bonded to two carbon groups: \(\text{R–O–R}'\). Unlike alcohols, ethers have no O–H bond, which makes them chemically quiet — they resist acids (except strong HX), bases, and most nucleophiles, which is exactly why they are the solvents of choice for organometallic chemistry. The synthetic question is therefore not "how do ethers react?" but "how do you build the C–O–C linkage in the first place?" This topic covers the three standard strategies: the **Williamson ether synthesis** (alkoxide + alkyl halide, an S_N2 reaction), **alkoxymercuration–demercuration** (alkene + alcohol, Markovnikov addition), and **acid-catalyzed dehydration of alcohols** (two alcohols lose water). A fourth route — opening of epoxides by alkoxides — appears in topic 5, because it is really an epoxide reaction.

Choosing among the routes is an exercise in regiochemistry and mechanism: the Williamson synthesis is an S_N2 reaction and therefore demands a good (usually 1° or methyl) alkyl halide; the alkoxymercuration route adds an –OR group to the more substituted alkene carbon with no carbocation rearrangements; and the dehydration route is practical mainly for symmetrical ethers from 1° alcohols, because 2° and 3° alcohols prefer to eliminate to alkenes instead.

## Why This Matters

Ethers surround us: diethyl ether was the first general anesthetic (1846); tetrahydrofuran (THF) and 1,4-dioxane are indispensable reaction solvents; methyl tert-butyl ether (MTBE) was a billion-gallon gasoline oxygenate; anisole-type fragments appear in flavors, fragrances, and pharmaceuticals; and polyethylene glycol (PEG) ethers are used in drug formulation and laxatives. The Williamson reaction is the workhorse of ether synthesis in both the lab and industry, and understanding why it fails with tertiary halides (elimination wins) is a model lesson in S_N2 vs E2 competition. In biology, the same C–O bond-forming logic explains how enzymes glycosylate alcohols and how plant cell walls polymerize lignin-derived phenols. For exams, "propose a synthesis of this ether" is a guaranteed question type — and the answer is usually Williamson with a deliberate choice of which fragment becomes the alkoxide.

## Core Concepts

### The Williamson ether synthesis: alkoxide + alkyl halide

The classic route is an S_N2 displacement of halide by an alkoxide:

\[
\text{R–O}^- + \text{R}'\!-\!\text{X} \longrightarrow \text{R–O–R}' + \text{X}^-
\]

Rules that follow from the S_N2 mechanism:

- **The alkyl halide should be methyl, 1°, or (at most) a 2° halide that is unhindered.** S_N2 rates fall sharply with steric hindrance, so tert-butyl halides essentially never undergo S_N2.
- **Bulky alkoxides are fine** — the nucleophile can be 1°, 2°, 3°, or even aromatic (phenoxide, \(\text{C}_6\text{H}_5\text{O}^-\)).
- **Elimination is the competing reaction.** A 3° halide or a hindered 2° halide with a strong base gives the alkene instead of the ether. The classic trap: trying to make tert-butyl methyl ether from tert-butyl bromide and methoxide gives isobutylene, not the ether.
- **Symmetrical vs unsymmetrical:** for \(\text{R–O–R}'\), you may choose which carbon becomes the halide and which the alkoxide; pick the more hindered group as the alkoxide and the less hindered as the halide. For example, methyl tert-butyl ether is best made from tert-butoxide + methyl iodide, not from methoxide + tert-butyl bromide.

### Alkoxymercuration–demercuration: alkene + alcohol

Alkenes add alcohols with Markovnikov regiochemistry using mercury(II) acetate in the alcohol solvent, followed by sodium borohydride reduction:

\[
\text{R}_2\text{C}=\text{CH}_2 + \text{ROH} \xrightarrow{1.\ \text{Hg(OAc)}_2}\ \text{R}_2\text{C(OR')–CH}_3 \xrightarrow{2.\ \text{NaBH}_4} \text{R}_2\text{CH–CH}_2\text{OR}'
\]

Mechanistically, the mercury electrophile forms a bridged mercurinium ion; the alcohol opens it at the more substituted carbon (Markovnikov); and NaBH₄ replaces mercury with hydrogen. Because no free carbocation forms, **no rearrangements occur** — this is the advantage over direct acid-catalyzed addition of alcohols to alkenes. It works for 1°, 2°, and 3° alkenes and for alcohols of any class.

### Acid-catalyzed dehydration of alcohols

Two molecules of a 1° alcohol can condense with loss of water in the presence of sulfuric acid at ~130–140 °C:

\[
2\,\text{CH}_3\text{CH}_2\text{OH} \xrightarrow{\text{H}_2\text{SO}_4,\ 140\,^\circ\text{C}} \text{CH}_3\text{CH}_2\text{OCH}_2\text{CH}_3 + \text{H}_2\text{O}
\]

One alcohol is protonated and becomes the electrophile (losing water), and the second alcohol's oxygen attacks it in an S_N2-like step. The method is practical for **symmetrical ethers from 1° alcohols** (diethyl ether, diisopropyl ether). At higher temperature (~180 °C) the same 1° alcohol dehydrates to the alkene instead, and 2°/3° alcohols give mostly alkenes even at ether-forming temperatures, so this route is not general.

### Making phenols into ethers: phenoxide alkylation

Phenols are more acidic (pKa ≈ 10) than alcohols (pKa ≈ 16–18), so aqueous hydroxide suffices to form phenoxide:

\[
\text{C}_6\text{H}_5\text{OH} + \text{NaOH} \longrightarrow \text{C}_6\text{H}_5\text{O}^-\text{Na}^+ + \text{H}_2\text{O}
\]

\[
\text{C}_6\text{H}_5\text{O}^- + \text{CH}_3\text{I} \longrightarrow \text{C}_6\text{H}_5\text{OCH}_3 + \text{I}^-
\]

This is how anisole (methyl phenyl ether) and countless aryl ether drug fragments are made. The phenoxide is a good nucleophile, and because the negative charge is delocalized, the alkylation still proceeds cleanly with methyl or 1° halides.

## ELI-10: Explain Like I'm 10

> Making an ether is like joining two people with a rope: the alkoxide grabs one end (it has a spare electron to share), and the alkyl halide holds the other end but must let go of its "hand" (the halide) at the moment of joining. The catch: the person holding the halide end must not be too bulky, or they'll let go early and form a double bond instead (an alkene) — that is why we always put the small, quick partner on the halide side.

## High-Yield Points

- Williamson: \(\text{RO}^- + \text{R}'\!-\!\text{X} \rightarrow \text{R–O–R}' + \text{X}^-\); S_N2 — use 1°/methyl halides; bulky groups belong on the alkoxide.
- 3° halides fail in Williamson (E2 wins): tert-butyl bromide + methoxide → isobutylene, not the ether.
- Alkoxymercuration–demercuration: Markovnikov –OR addition, no rearrangements, works with any alcohol.
- Acid-catalyzed dehydration: practical for symmetrical ethers of 1° alcohols at ~140 °C; higher T → alkene.
- Phenoxides (from phenol + NaOH) alkylate to give aryl ethers like anisole.
- Epoxide + alkoxide (topic 5) is another ether-forming route, especially for β-alkoxy alcohols.
- Ethers are inert to base, nucleophiles, and mild acid — the reason they are used as solvents; their weakness is strong HX (topic 3).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Williamson ether synthesis | Alkoxide + alkyl halide → ether (S_N2) | The standard C–O bond-forming reaction for ethers |
| Alkoxide | \(\text{RO}^-\); alcohol minus its O–H proton | The nucleophile half of the Williamson reaction |
| S_N2 | Bimolecular nucleophilic substitution; one step, backside attack | Sets the rate, stereochemistry (inversion), and steric limits of Williamson synthesis |
| Alkoxymercuration–demercuration | Hg(OAc)₂ + ROH adds –OR to an alkene, then NaBH₄ replaces Hg | Markovnikov ether formation without carbocation rearrangements |
| Markovnikov addition | The –OR (or –OH) adds to the more substituted alkene carbon | Predicts the regiochemistry of alcohol/ether addition to alkenes |
| Dehydration of alcohols | Two 1° alcohols lose water to give a symmetrical ether | Industrial route to diethyl ether; competes with alkene formation |
| Phenoxide | \(\text{C}_6\text{H}_5\text{O}^-\); conjugate base of phenol | Key to making aryl ethers (anisole, drug fragments) |
| Mercurinium ion | Bridged Hg⁺–alkene intermediate | Explains Markovnikov addition with no free carbocation |

## Worked Examples

### Example 1: Design a Williamson synthesis of methyl tert-butyl ether

**Problem.** Propose the best Williamson route to \((\text{CH}_3)_3\text{COCH}_3\).

**Step 1 — decide the split.** The tert-butyl group is sterically huge, so it must never be the alkyl halide: tert-butyl bromide with methoxide would eliminate to isobutylene.

**Step 2 — assign roles.** tert-Butyl group → alkoxide: \((\text{CH}_3)_3\text{CO}^-\), made from tert-butyl alcohol + NaH. Methyl group → halide: \(\text{CH}_3\text{I}\) (methyl iodide is an excellent S_N2 substrate).

**Step 3 — write the reaction:**

\[
(\text{CH}_3)_3\text{CO}^-\text{Na}^+ + \text{CH}_3\text{I} \longrightarrow (\text{CH}_3)_3\text{COCH}_3 + \text{NaI}
\]

**Answer.** tert-Butoxide (from t-BuOH + NaH) + methyl iodide gives the ether in high yield.

### Example 2: Predict the product of 1-methylcyclohexene with methanol under alkoxymercuration–demercuration

**Problem.** Treat 1-methylcyclohexene with \(\text{Hg(OAc)}_2\) in methanol, then \(\text{NaBH}_4\). Predict the product.

**Step 1 — regiochemistry.** The mercurinium ion is opened by methanol at the more substituted alkene carbon (Markovnikov): the OCH₃ lands on the carbon that already bears the methyl group.

**Step 2 — demercuration.** NaBH₄ replaces the Hg substituent with H.

**Step 3 — product.** 1-Methoxy-1-methylcyclohexane:

\[
\text{(1-methylcyclohexene)} \xrightarrow{1.\ \text{Hg(OAc)}_2,\ \text{CH}_3\text{OH}\ \ 2.\ \text{NaBH}_4} \text{(1-methoxy-1-methylcyclohexane)}
\]

**Answer.** 1-Methoxy-1-methylcyclohexane (the methoxy is on the substituted carbon). No rearrangement occurs because the bridged intermediate prevents a free carbocation.

### Example 3: Williamson synthesis with a phenoxide — making anisole

**Problem.** Synthesize anisole (\(\text{C}_6\text{H}_5\text{OCH}_3\)) and calculate how much methyl iodide is needed for 0.200 mol of phenol.

**Step 1 — deprotonation.** Phenol + NaOH → phenoxide:

\[
\text{C}_6\text{H}_5\text{OH} + \text{NaOH} \longrightarrow \text{C}_6\text{H}_5\text{O}^-\text{Na}^+ + \text{H}_2\text{O}
\]

**Step 2 — alkylation.** Phenoxide + \(\text{CH}_3\text{I}\) (1:1 stoichiometry) → anisole + NaI.

**Step 3 — dimensional analysis.** 0.200 mol phenol → 0.200 mol \(\text{CH}_3\text{I}\) needed. Molar mass of \(\text{CH}_3\text{I}\) = 12.01 + 3 × 1.008 + 126.90 = 141.94 g/mol:

\[
0.200\ \text{mol} \times 141.94\ \frac{\text{g}}{\text{mol}} = 28.4\ \text{g CH}_3\text{I}
\]

**Answer.** 28.4 g of methyl iodide is the stoichiometric amount for 0.200 mol of phenol.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Williamson with 3° halides | Williamson with 3° alkoxides | 3° halides give elimination (E2), not ethers; 3° alkoxides are fine nucleophiles |
| Markovnikov vs anti-Markovnikov | –OR placement in alkene additions | Alkoxymercuration is Markovnikov (–OR on substituted carbon); radical HBr addition to alkenes is anti-Markovnikov — different mechanism, different rule |
| Ether formation vs alkene formation from alcohols | Dehydration at 140 °C vs 180 °C | Lower temperature favors the S_N2-like ether; higher temperature favors elimination |
| Alkoxymercuration vs acid-catalyzed addition of ROH to alkene | Both add ROH to a C=C | Hg route: no carbocation → no rearrangement; acid route: carbocation → rearrangements possible |
| Anisole vs phenol | Aryl methyl ether vs phenol | Anisole has no O–H (inert, nonacidic); phenol has O–H (acidic, reactive) |

## Quick Review

1. Why does the Williamson synthesis fail with tert-butyl bromide and methoxide?
2. Which fragment should be the alkoxide when making isopropyl ethyl ether (2-ethoxypropane) by Williamson?
3. Predict the product of 2-methyl-2-butene with \(\text{Hg(OAc)}_2\) in ethanol, then NaBH₄.
4. Why does alkoxymercuration–demercuration never give rearranged products, while acid-catalyzed alcohol addition can?
5. How many grams of ethyl bromide (molar mass 108.97 g/mol) are needed to convert 0.100 mol of sodium ethoxide to diethyl ether?
6. Which route would you choose to make diethyl ether on an industrial scale, and why?

<details>
<summary>Show answers</summary>

1. The tert-butyl halide is too hindered for S_N2, and methoxide is a strong base, so E2 elimination dominates: isobutylene is the product, not the ether.
2. The isopropyl group should be the alkoxide (isopropoxide) and ethyl should be the halide (ethyl bromide): isopropoxide + CH₃CH₂Br → CH₃CH₂OCH(CH₃)₂. Ethyl bromide is a clean S_N2 substrate; isopropyl bromide would give substantial elimination.
3. 2-Ethoxy-2-methylbutane (Markovnikov: the –OCH₂CH₃ adds to the more substituted alkene carbon, the one bearing the methyl).
4. Alkoxymercuration goes through a bridged mercurinium ion, which blocks formation of a free carbocation; acid-catalyzed addition protonates the alkene to a free carbocation, which can rearrange before the alcohol traps it.
5. 0.100 mol × 108.97 g/mol = 10.9 g (1:1 stoichiometry).
6. Acid-catalyzed dehydration of ethanol at ~140 °C: cheap feedstock, no waste halide salts, and the water byproduct is benign — the same process used since the 19th century.
</details>

## Related Topics

- Previous: [Names and Properties of Ethers](01-names-and-properties-of-ethers.md)
- Next: [Reactions of Ethers: Acidic Cleavage](03-reactions-of-ethers-acidic-cleavage.md)
- Related: [Cyclic Ethers: Epoxides](04-cyclic-ethers-epoxides.md)
- Related: [Reactions of Epoxides: Ring-Opening](05-reactions-of-epoxides-ring-opening.md)
- Related: [Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations](../chapter-11-reactions-of-alkyl-halides-nucleophilic-substitutions-and-eliminations/README.md)
- Related: [Ethers and Epoxides; Thiols and Sulfides chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against current references (PubChem, 2026-08): phenol pKa ≈ 10.0, alcohol pKa ≈ 16–18; methyl iodide molar mass 141.94 g/mol; ethyl bromide molar mass 108.97 g/mol; diethyl ether bp 34.6 °C (standard references).
- Last updated: 2026-08-16
