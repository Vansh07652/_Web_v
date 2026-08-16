---
title: "Alkylation and Acylation of Aromatic Rings: The Friedel–Crafts Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "16: Chemistry of Benzene: Electrophilic Aromatic Substitution"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "alkylation-and-acylation-of-aromatic-rings-the-friedel-crafts-reaction"
  - "science"
status: "complete"
---

# Alkylation and Acylation of Aromatic Rings: The Friedel–Crafts Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 16: Chemistry of Benzene: Electrophilic Aromatic Substitution](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Bromination, nitration, and sulfonation place non-carbon substituents on benzene. The **Friedel–Crafts reactions** are the standard EAS routes that build **carbon–carbon bonds** on the ring. In **Friedel–Crafts alkylation**, an alkyl halide reacts with the ring in the presence of a Lewis acid catalyst (usually \\(\text{AlCl}_3\\)) to replace a ring hydrogen with an alkyl group:

\\[\text{C}_6\text{H}_6 + \text{RCl} \xrightarrow{\text{AlCl}_3} \text{C}_6\text{H}_5\text{R} + \text{HCl}
\\]

In **Friedel–Crafts acylation**, an acyl chloride installs an acyl group (\\(\text{RCO}{-}\\)), producing an aryl ketone:

\\[\text{C}_6\text{H}_6 + \text{RCOCl} \xrightarrow{\text{AlCl}_3} \text{C}_6\text{H}_5\text{COR} + \text{HCl}
\\]

Both reactions generate a powerful electrophile — a carbocation for alkylation, an acylium ion for acylation — that attacks the electron-rich ring. The two are siblings with the same general mechanism but very different behavior: alkylation suffers from rearrangement and over-alkylation, while acylation is clean but consumes the Lewis acid and leaves a ketone you may have to reduce later.

## Why This Matters

Alkylbenzenes and aryl ketones feed some of the world's largest chemical processes. **Ethylbenzene** is dehydrogenated to **styrene**, the monomer of polystyrene; **cumene** (isopropylbenzene) is oxidized to phenol and acetone; toluene and xylene are solvents and fuel additives. Friedel–Crafts acylation appears in syntheses of pharmaceuticals (ibuprofen and related aryl ketones) and dyes. When a chemist wants an aryl ketone or a substituted alkylbenzene, these reactions are usually the first tool considered — and their limitations (carbocation rearrangement, failure on deactivated rings) are classic exam topics and real planning constraints.

## Core Concepts

### The alkylation electrophile: a carbocation

\\(\text{AlCl}_3\\) is a Lewis acid that coordinates to the halogen and pulls it away as \\(\text{AlCl}_4^-\\):

\\[\text{R}{-}\text{Cl} + \text{AlCl}_3 \longrightarrow \text{R}^+ + \text{AlCl}_4^-
\\]

The resulting **carbocation** \\(\text{R}^+\\) is the electrophile. Because carbocation stability increases with substitution (3° > 2° > 1°), the alkyl group attaches in its most substituted form. Primary halides often give rearranged products because the 1° cation isomerizes through hydride or alkyl shifts before reaching the ring.

### The acylation electrophile: an acylium ion

The Lewis acid pulls chloride off the acyl chloride to form an **acylium ion**, stabilized by resonance — the positive charge is shared with an oxygen lone pair:

\\[\text{R}{-}\text{C}(= \text{O})\text{Cl} + \text{AlCl}_3 \longrightarrow \text{R}{-}\text{C} \equiv \text{O}^+ + \text{AlCl}_4^-
\\]

The acylium ion is much more stable than an ordinary carbocation, so acylium ions **do not rearrange**, and acylation is slower than alkylation. Acylation also needs more than one equivalent of \\(\text{AlCl}_3\\) because the ketone product forms a strong complex with the Lewis acid and must be freed by aqueous workup.

### The EAS mechanism applied to both

Both reactions follow the standard three-stage EAS pathway: generate the electrophile; let it add to the ring's π system, breaking aromaticity and forming a **sigma complex** (arenium ion) with the positive charge delocalized over three ring carbons; then lose a proton (to \\(\text{AlCl}_4^-\\) or another base), restoring the aromatic sextet and giving the product plus HCl. The catalyst is regenerated in alkylation (catalytic amount suffices) but consumed in acylation (stoichiometric amount needed).

### Limitations of alkylation vs. advantages of acylation

| Feature | Alkylation | Acylation |
|---|---|---|
| Electrophile | Carbocation \\(\text{R}^+\\) | Acylium ion \\(\text{RCO}^+\\) |
| Rearrangement? | Yes — 1°/2° cations rearrange | No — resonance-stabilized ion |
| Over-reaction? | Yes — alkylbenzene is *more* reactive → polyalkylation | No — ketone product *deactivates* the ring |
| Catalyst | Catalytic \\(\text{AlCl}_3\\) | ≥ 1 equiv \\(\text{AlCl}_3\\) (product complex) |

The standard strategy for an unrearranged straight-chain alkylbenzene is **acylate first, then reduce**: acylation gives an aryl ketone, and Clemmensen (Zn/Hg, HCl) or Wolff–Kishner (hydrazine, base) reduction converts the ketone to the alkyl group. Rings bearing strong electron-withdrawing groups (\\(\text{NO}_2\\), \\(\text{CN}\\), \\(\text{SO}_3\text{H}\\)) fail both reactions — nitrobenzene is inert.

## ELI-10: Explain Like I'm 10

> Friedel–Crafts alkylation is like parking a car (the alkyl group) in a crowded lot (the benzene ring): the attendant (AlCl₃) makes a key, and the car parks. But a nervous driver's car can change into a different car before parking (rearrangement), and once one car parks, it invites more cars (polyalkylation). Acylation is like a steady delivery truck (the acylium ion) that never changes shape, delivers exactly one package, and locks the gate behind it.

## High-Yield Points

- **Alkylation:** benzene + \\(\text{RCl}\\) + catalytic \\(\text{AlCl}_3\\) → alkylbenzene + HCl; the electrophile is a carbocation.
- **Acylation:** benzene + \\(\text{RCOCl}\\) + ≥ 1 equiv \\(\text{AlCl}_3\\) → aryl ketone + HCl; the electrophile is a resonance-stabilized acylium ion.
- Both go through the classic EAS sequence: form electrophile → attack ring to make a sigma complex (aromaticity lost) → deprotonate to restore aromaticity.
- **Rearrangement is an alkylation problem only** — acylium ions never rearrange.
- **Polyalkylation is an alkylation problem only** — acyl groups deactivate the ring, stopping the reaction after one substitution.
- **No Friedel–Crafts on strongly deactivated rings** — nitrobenzene and similar rings do not react.
- **Synthesis shortcut:** acylate → reduce (Clemmensen or Wolff–Kishner) to make unrearranged alkylbenzenes.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Friedel–Crafts alkylation | EAS reaction replacing a ring H with an alkyl group using an alkyl halide + Lewis acid | Main route to alkylbenzenes like toluene, ethylbenzene, cumene |
| Friedel–Crafts acylation | EAS reaction installing an acyl group using an acyl chloride + Lewis acid | Clean route to aryl ketones; avoids rearrangement |
| Carbocation | Carbon with only 6 valence electrons and a + charge; the alkylation electrophile | Its rearrangement limits which alkyl products are possible |
| Acylium ion | Resonance-stabilized \\(\text{RCO}^+\\) cation; the acylation electrophile | Does not rearrange; explains acylation's predictability |
| Sigma complex (arenium ion) | Cationic intermediate formed when the electrophile bonds to the ring, breaking aromaticity | Key intermediate in every EAS mechanism |
| Lewis acid catalyst | Electron-pair acceptor (\\(\text{AlCl}_3\\), \\(\text{FeCl}_3\\), \\(\text{BF}_3\\)) that generates the electrophile | Makes the alkyl halide or acyl chloride reactive enough to attack benzene |
| Clemmensen / Wolff–Kishner reduction | Methods that convert an aryl ketone (C=O) into a CH₂ group | Complete the acylate-then-reduce strategy for unrearranged alkylbenzenes |

## How It Works / Step-by-Step Process

### Predicting the Friedel–Crafts alkylation product

1. Identify the alkyl group of the halide and generate the carbocation \\(\text{R}^+\\).
2. Check whether the cation can rearrange to a more stable one (1° → 2° → 3°; hydride and alkyl shifts).
3. Attach the **most stable available cation** to the ring at any open position (all positions are equivalent on unsubstituted benzene).
4. Check the ring: if it bears a strong EWG (\\(\text{NO}_2\\), \\(\text{CN}\\), \\(\text{SO}_3\text{H}\\)), no reaction occurs.

### Planning an acylation–reduction sequence

1. Choose an acyl chloride whose acyl group matches the alkyl group you want.
2. Run the acylation with ≥ 1 equiv \\(\text{AlCl}_3\\); the product is an aryl ketone.
3. Reduce the ketone (Clemmensen: Zn/Hg + HCl; Wolff–Kishner: hydrazine + base) to the alkylbenzene.
4. No rearrangement is possible anywhere in this sequence.

## Worked Examples

### Example 1: Benzene + 1-chloropropane + AlCl₃

Removing \\(\text{Cl}^-\\) from \\(\text{CH}_3\text{CH}_2\text{CH}_2\text{Cl}\\) gives the **1° carbocation** \\(\text{CH}_3\text{CH}_2\text{CH}_2^+\\). A hydride shift moves \\(\text{H}^-\\) from C2 to C1, converting it into the more stable **2° cation** \\(\text{CH}_3\text{CH}^+\text{CH}_3\\). The ring attacks this cation, so the product is **isopropylbenzene (cumene)**, not n-propylbenzene:

\\[\text{C}_6\text{H}_6 + \text{CH}_3\text{CH}_2\text{CH}_2\text{Cl} \xrightarrow{\text{AlCl}_3} \text{C}_6\text{H}_5\text{CH}(\text{CH}_3)_2 + \text{HCl}
\\]

**Lesson:** with a 1° or 2° alkyl halide, expect a rearranged product.

### Example 2: How much ethylbenzene can 10.0 g of benzene make?

Balanced reaction: \\(\text{C}_6\text{H}_6 + \text{CH}_3\text{CH}_2\text{Cl} \rightarrow \text{C}_6\text{H}_5\text{CH}_2\text{CH}_3 + \text{HCl}\\). Molar masses: benzene \\(M = 6(12.01) + 6(1.008) = 78.11\\) g/mol; ethylbenzene \\(M = 8(12.01) + 10(1.008) = 106.17\\) g/mol.

**Step 1 — moles of benzene.** Show the formula, then substitute:

\\[\text{mol C}_6\text{H}_6 = \frac{\text{mass}}{M} = \frac{10.0\ \text{g}}{78.11\ \text{g/mol}} = 0.128\ \text{mol}
\\]

**Step 2 — moles of product.** The stoichiometry is 1:1:

\\[\text{mol C}_6\text{H}_5\text{C}_2\text{H}_5 = 0.128\ \text{mol C}_6\text{H}_6 \times \frac{1\ \text{mol C}_6\text{H}_5\text{C}_2\text{H}_5}{1\ \text{mol C}_6\text{H}_6} = 0.128\ \text{mol}
\\]

**Step 3 — mass of product** (dimensional analysis in one chain):

\\[
\text{mass C}_6\text{H}_5\text{C}_2\text{H}_5 = 10.0\ \text{g C}_6\text{H}_6 \times \frac{1\ \text{mol C}_6\text{H}_6}{78.11\ \text{g}} \times \frac{1\ \text{mol C}_6\text{H}_5\text{C}_2\text{H}_5}{1\ \text{mol C}_6\text{H}_6} \times \frac{106.17\ \text{g}}{1\ \text{mol C}_6\text{H}_5\text{C}_2\text{H}_5} = 13.6\ \text{g}
\\]

The theoretical yield is **13.6 g** of ethylbenzene; real yields are lower because of polyalkylation and workup losses.

### Example 3: Acetyl chloride → acetophenone, and the product–catalyst complex

Acetylation of benzene gives acetophenone:

\\[\text{C}_6\text{H}_6 + \text{CH}_3\text{COCl} \xrightarrow{\text{AlCl}_3} \text{C}_6\text{H}_5\text{COCH}_3 + \text{HCl}
\\]

The acylium ion \\(\text{CH}_3\text{C} \equiv \text{O}^+\\) does **not** rearrange, and the ketone product stops further substitution. But the carbonyl oxygen coordinates strongly to \\(\text{AlCl}_3\\), forming a \\(\text{C}_6\text{H}_5\text{COCH}_3\cdot\text{AlCl}_3\\) complex — which is why acylation needs a full equivalent (or more) of Lewis acid and an aqueous workup to release the free ketone.

How much acetophenone comes from 5.00 g of acetyl chloride (\\(M = 2(12.01)+3(1.008)+35.45+16.00 = 78.50\\) g/mol; acetophenone \\(M = 8(12.01)+8(1.008)+16.00 = 120.15\\) g/mol)?

\\[
\text{mass C}_6\text{H}_5\text{COCH}_3 = 5.00\ \text{g CH}_3\text{COCl} \times \frac{1\ \text{mol}}{78.50\ \text{g}} \times \frac{1\ \text{mol C}_6\text{H}_5\text{COCH}_3}{1\ \text{mol CH}_3\text{COCl}} \times \frac{120.15\ \text{g}}{1\ \text{mol}} = 7.65\ \text{g}
\\]

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| Alkylation | Acylation | Alkylation uses a carbocation (rearranges, polyalkylates); acylation uses an acylium ion (no rearrangement, stops after one substitution) |
| "Catalyst" amount of AlCl₃ | Stoichiometric amount | Alkylation regenerates AlCl₃ (catalytic works); acylation's ketone product ties it up (need ≥ 1 equiv) |
| Product of 1-chloropropane + benzene | n-propylbenzene | The 1° cation rearranges to 2°; the product is **isopropylbenzene** (cumene) |
| Deactivated ring | Inert ring | Rings with strong EWG (\\(\text{NO}_2\\)) fail Friedel–Crafts entirely; mildly deactivated rings (halogens) still react slowly |
| Acyl group | Alkyl group | Acyl = carbonyl attached to carbon (\\(\text{RCO}{-}\\)); alkyl = plain carbon chain (\\(\text{R}{-}\\)) |

## Quick Review

1. Write the general equations for Friedel–Crafts alkylation and acylation of benzene.
2. What electrophile does each reaction generate, and which one can rearrange?
3. Why does benzene + 1-chloropropane + AlCl₃ give cumene rather than n-propylbenzene?
4. Why is acylation self-limiting (no polyacylation) while alkylation is not?
5. Why does acylation require a full equivalent of AlCl₃?
6. What two-step route gives an unrearranged straight-chain alkylbenzene, and why is it needed?

<details>
<summary>Show answers</summary>

1. Alkylation: \\(\text{C}_6\text{H}_6 + \text{RCl} \xrightarrow{\text{AlCl}_3} \text{C}_6\text{H}_5\text{R} + \text{HCl}\\). Acylation: \\(\text{C}_6\text{H}_6 + \text{RCOCl} \xrightarrow{\text{AlCl}_3} \text{C}_6\text{H}_5\text{COR} + \text{HCl}\\).
2. Alkylation uses a carbocation \\(\text{R}^+\\) — it rearranges. Acylation uses a resonance-stabilized acylium ion \\(\text{RCO}^+\\) — it does not.
3. The initially formed 1° propyl cation \\(\text{CH}_3\text{CH}_2\text{CH}_2^+\\) undergoes a hydride shift to the more stable 2° cation \\(\text{CH}_3\text{CH}^+\text{CH}_3\\), which then attacks the ring.
4. Alkyl groups are electron-donating (activating), so the monoalkylated product is attacked again (polyalkylation). Acyl groups withdraw electron density (deactivating), so the ketone product stops reacting.
5. The ketone product forms a strong Lewis acid–base complex with AlCl₃ (\\(\text{C}_6\text{H}_5\text{COR}\cdot\text{AlCl}_3\\)), consuming the catalyst; aqueous workup releases the free ketone.
6. Friedel–Crafts acylation, then reduction of the aryl ketone (Clemmensen: Zn/Hg + HCl; or Wolff–Kishner: hydrazine + base). Direct alkylation with a 1° or 2° halide would rearrange.

</details>

## Related Topics

- Previous: [Other Aromatic Substitutions](02-other-aromatic-substitutions.md)
- Next: [Substituent Effects in Electrophilic Substitutions](04-substituent-effects-in-electrophilic-substitutions.md)
- Related: [Chemistry of Benzene: Electrophilic Aromatic Substitution chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
