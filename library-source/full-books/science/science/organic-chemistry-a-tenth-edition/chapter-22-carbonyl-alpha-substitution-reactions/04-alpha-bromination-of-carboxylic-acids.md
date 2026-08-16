---
title: "Alpha Bromination of Carboxylic Acids"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "22: Carbonyl Alpha-Substitution Reactions"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "alpha-bromination-of-carboxylic-acids"
  - "science"
status: "complete"
---

# Alpha Bromination of Carboxylic Acids

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Carboxylic acids RCH₂COOH have α-hydrogens, but they do **not** brominate under the conditions that work for aldehydes and ketones (topic 03). A carboxylic acid cannot enolize readily enough: the hydroxyl group makes the carbonyl less electrophilic, and the α-H is far less acidic than in a ketone. The **Hell–Volhard–Zelinsky (HVZ) reaction** solves this by first converting the acid into an **acyl bromide**, which enolizes and brominates easily, then hydrolyzing back to the acid. The net result is clean α-bromination:

\[
\text{RCH}_2\text{COOH} + \text{Br}_2 \xrightarrow{\text{PBr}_3} \text{RCHBrCOOH} + \text{HBr}
\]

HVZ is the standard route to α-bromocarboxylic acids, key intermediates for α-amino acids and other α-functionalized compounds.

## Why This Matters

- **α-Bromo acids are springboards to amino acids.** Treating an α-bromocarboxylic acid with ammonia displaces Br by SN2, giving an α-amino acid — historically a major laboratory synthesis of amino acids, still used for non-natural analogs.
- **Synthetic logic.** When a functional group blocks a pathway, temporarily convert it to a more reactive derivative, run the chemistry, then convert back — a general principle.
- **Real-world use.** α-Halo acids are used in synthesizing pharmaceuticals, peptides, and chiral building blocks.

## Core Concepts

### Why carboxylic acids resist direct α-bromination

In an aldehyde or ketone, the carbonyl oxygen can be protonated and the α-H removed to form an enol. In a carboxylic acid, the hydroxyl group donates electron density into the carbonyl, making it **less electrophilic** and disfavoring enolization. The acid's O–H is also far more acidic than its α-C–H, so reagents interact with the OH instead. Direct reaction of a carboxylic acid with Br₂ is impractically slow.

### The Hell–Volhard–Zelinsky strategy

The reaction uses bromine with **phosphorus tribromide (PBr₃)** — or red phosphorus plus bromine, which generates PBr₃ in situ. The sequence:

1. **Acyl bromide formation.** PBr₃ converts the acid to the acyl bromide, RCH₂COBr, releasing HBr and phosphorous acid derivatives. The acyl bromide's carbonyl is *more* electrophilic than the acid's, and its α-H's are more acidic — enolization is now feasible.
2. **α-Bromination.** HBr (from step 1) catalyzes enolization of the acyl bromide to its enol; the enol attacks Br₂ at the α carbon, giving the α-bromo acyl bromide, RCHBrCOBr.
3. **Hydrolysis.** Water hydrolyzes the α-bromo acyl bromide back to the α-bromocarboxylic acid, RCHBrCOOH.

Mechanism arrows in words: the acid's OH lone pair attacks PBr₃; P–Br bonds break stepwise; the carbonyl re-forms to give the acyl bromide. HBr protonates the acyl bromide's carbonyl; the α-H is removed to form the enol; the enol's terminal carbon attacks Br₂ (arrow from C=C to Br–Br); deprotonation re-forms the C=O; water adds and HBr is lost, giving the α-bromo acid.

### Scope and limitations

- Requires an **α-H**; acids without one (e.g., benzoic acid, C₆H₅COOH) do not react.
- Bromine is standard; chlorine works with PCl₃; iodine is slower and less common.
- The Br lands on the α carbon adjacent to the carbonyl, at the position that forms the more stable (more substituted) enol.
- The product is still a carboxylic acid: the carboxyl group is intact, and the C–Br bond is set up for SN2 displacement.

### From α-bromo acid to α-amino acid

The classic application: treat the α-bromo acid with excess ammonia. NH₃ deprotonates the carboxyl group, then the α carbon bearing Br undergoes SN2 attack by NH₃:

\[
\text{RCHBrCOOH} + 2\text{NH}_3 \rightarrow \text{RCH(NH}_2\text{)COOH} + \text{NH}_4\text{Br}
\]

Two equivalents of ammonia: one is the nucleophile, the second neutralizes the HBr formed.

## Worked Examples

### Example 1 — Synthesis of 2-bromopropanoic acid

Propanoic acid (CH₃CH₂COOH) is treated with Br₂ and PBr₃. Write the three-step sequence and the overall equation.

**Step 1 — acyl bromide.** CH₃CH₂COOH + PBr₃ → CH₃CH₂COBr (+ HBr, phosphorous acid).

**Step 2 — α-bromination.** CH₃CH₂COBr + Br₂ → CH₃CHBrCOBr + HBr.

**Step 3 — hydrolysis.** CH₃CHBrCOBr + H₂O → CH₃CHBrCOOH + HBr.

**Overall:**

\[
\text{CH}_3\text{CH}_2\text{COOH} + \text{Br}_2 \xrightarrow{\text{PBr}_3} \text{CH}_3\text{CHBrCOOH} + \text{HBr}
\]

The product has Br on C2 (the α carbon, adjacent to COOH), not on C3.

### Example 2 — Stoichiometry: grams of Br₂ needed (dimensional analysis)

A student wants to brominate 5.00 g of butanoic acid (CH₃CH₂CH₂COOH, molar mass 88.11 g/mol) to 2-bromobutanoic acid via HVZ. Calculate the mass of Br₂ (molar mass 159.81 g/mol) for a 1:1 molar ratio.

**Step 1 — mole relationship.** The balanced reaction uses 1 mol Br₂ per mol acid:

\[
\frac{1\ \text{mol Br}_2}{1\ \text{mol acid}}
\]

**Step 2 — moles of acid:**

\[
5.00\ \text{g acid} \times \frac{1\ \text{mol acid}}{88.11\ \text{g acid}} = 5.67 \times 10^{-2}\ \text{mol acid}
\]

**Step 3 — grams of Br₂:**

\[
5.67 \times 10^{-2}\ \text{mol Br}_2 \times \frac{159.81\ \text{g Br}_2}{1\ \text{mol Br}_2} = 9.06\ \text{g Br}_2
\]

The unit chain: g acid → mol acid → mol Br₂ → g Br₂. PBr₃ is catalytic in halogen equivalents (it converts the acid to the acyl bromide, and HBr from the reaction drives further catalysis), so the bromine requirement is set by the substrate.

### Example 3 — Recognizing what cannot react

Explain why benzoic acid (C₆H₅COOH) does not undergo HVZ, while 2-methylpropanoic acid ((CH₃)₂CHCOOH) does.

**Answer:** benzoic acid has no α-H (the α carbon is part of the aromatic ring), so no enol can form — no reaction. 2-Methylpropanoic acid has one α-H on the tertiary α carbon; it enolizes (forming the more substituted enol), and Br lands there, giving 2-bromo-2-methylpropanoic acid, (CH₃)₂CBrCOOH.

## ELI-10: Explain Like I'm 10

> A carboxylic acid is like a swing set whose frame has a "Do Not Touch" sign (the OH group) — the kids (hydrogens) beside it won't leave for a bromine ball. The Hell–Volhard–Zelinsky trick swaps the sign for a "Come On Up" handle (bromine on the carbonyl), so a kid climbs off, grabs a bromine ball, and then we swap the handle back for the original sign. Net result: the kid is gone and a bromine ball sits in that spot.

## High-Yield Points

- Carboxylic acids do **not** enolize readily; direct α-bromination with Br₂ alone is too slow.
- **HVZ reaction:** RCH₂COOH + Br₂ (with PBr₃ or P + Br₂) → RCHBrCOOH + HBr; three stages: acyl bromide → α-bromo acyl bromide → hydrolysis.
- PBr₃ converts the acid to the acyl bromide (more electrophilic C=O, more acidic α-H); HBr catalyzes enolization; water hydrolyzes back to the acid.
- Requires an α-H; aromatic acids (no α-H) do not react.
- α-Bromo acid → α-amino acid via SN2 with NH₃ (2 NH₃ per α-bromo acid) is a classic synthesis.
- Stoichiometry is 1 Br₂ per α-H replaced (1:1 for mono-bromination).
- Regiochemistry: bromine goes to the α carbon that forms the more stable (more substituted) enol.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Hell–Volhard–Zelinsky (HVZ) reaction | α-Bromination of a carboxylic acid using Br₂ with PBr₃ (or P + Br₂). | The standard way to α-halogenate carboxylic acids. |
| Acyl bromide (acid bromide) | RCOBr — the bromide analog of a carboxylic acid. | Key intermediate; enolizes and brominates far more easily than the acid. |
| α-Bromocarboxylic acid | RCHBrCOOH — Br on the carbon adjacent to COOH. | Versatile intermediate, especially for α-amino acid synthesis. |
| Enol | C=C–OH tautomer (of the acyl bromide here). | The nucleophilic species that attacks Br₂ in step 2. |
| SN2 | Bimolecular nucleophilic substitution (backside attack, one step). | How NH₃ displaces Br to give the α-amino acid. |

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| HVZ bromination | Ordinary ketone α-bromination | Ketones enolize directly (acid or base catalysis); acids need the acyl bromide detour via PBr₃. |
| Acyl bromide | Alkyl bromide | RCOBr has Br on the carbonyl carbon (acyl halide, electrophilic C=O); RCH₂Br is an alkyl bromide (leaving group for SN2). |
| Where Br lands | — | Br goes to the **α carbon** (adjacent to COOH), not the terminal carbon of the chain. |
| PBr₃ role | Br₂ role | PBr₃ converts acid → acyl bromide (activation); Br₂ provides the halogen that ends up on the α carbon. |
| α-Amino acid synthesis | Direct amination of the acid | You displace Br at the α carbon with NH₃; the carboxyl carbon is not the site of amination here. |

## Quick Review

1. Why is Br₂ alone ineffective for α-brominating a carboxylic acid?
2. List the three stages of the HVZ reaction and the reagent responsible for each.
3. What product forms when 3-methylbutanoic acid (CH₃CH(CH₃)CH₂COOH) undergoes HVZ bromination?
4. How many moles of Br₂ are needed per mole of 2-methylpropanoic acid for mono-bromination?
5. Show how you would synthesize alanine (2-aminopropanoic acid) from propanoic acid in two steps.

<details>
<summary>Show answers</summary>

1. The acid's OH donates electron density into the carbonyl, making enolization (and α-H removal) very unfavorable; the O–H is also more acidic than the α-C–H, so reagents interact with the OH. The acyl bromide overcomes both problems.
2. (1) Acyl bromide formation — PBr₃; (2) α-bromination — Br₂ (enol of the acyl bromide attacks Br₂); (3) hydrolysis — H₂O.
3. 2-Bromo-3-methylbutanoic acid, CH₃CH(CH₃)CHBrCOOH — bromine goes to the α carbon (C2), the more substituted position forming the more stable enol.
4. 1 mole of Br₂ per mole of acid (1:1) for mono-bromination of the single α-H.
5. Step 1: propanoic acid + Br₂/PBr₃ → 2-bromopropanoic acid. Step 2: 2-bromopropanoic acid + 2 NH₃ → alanine (CH₃CH(NH₂)COOH) + NH₄Br (SN2 displacement of Br by NH₃, with a second NH₃ neutralizing HBr).

</details>

## Related Topics

- Previous: [Alpha Halogenation of Aldehydes and Ketones](03-alpha-halogenation-of-aldehydes-and-ketones.md)
- Next: [Acidity of Alpha Hydrogen Atoms: Enolate Ion Formation](05-acidity-of-alpha-hydrogen-atoms-enolate-ion-formation.md)
- Related: [Reactivity of Enols: α-Substitution Reactions](02-reactivity-of-enols-substitution-reactions.md), [Reactivity of Enolate Ions](06-reactivity-of-enolate-ions.md)
- Chapter overview: [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition (McMurry-style chapter organization)
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on the OpenStax outline structure. Mechanism and stoichiometry follow standard treatments of the HVZ reaction; molar masses are standard values (C 12.01, H 1.008, O 16.00, Br 79.90).
- Lab safety note: PBr₃ is moisture-sensitive and corrosive, and HBr is a toxic gas; these reactions require a fume hood, strict exclusion of moisture, and PPE per institutional rules. This guide provides general principles only.
- Last updated: 2026-08-16
