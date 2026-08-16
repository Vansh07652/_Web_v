---
title: "Preparing Aldehydes and Ketones"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "19: Aldehydes and Ketones: Nucleophilic Addition Reactions"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "preparing-aldehydes-and-ketones"
  - "science"
status: "complete"
---

# Preparing Aldehydes and Ketones

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 19: Aldehydes and Ketones: Nucleophilic Addition Reactions](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Most carbonyl compounds are built by oxidation — adding oxygen or removing hydrogen at the right level. The master plan: **primary alcohols oxidize to aldehydes, secondary alcohols to ketones**; the only question is whether you can stop at the aldehyde stage. This topic organizes the toolbox into four routes: (1) alcohol oxidation with controlled reagents (PCC, Dess–Martin, Jones, Swern); (2) ozonolysis of alkenes; (3) addition of water to alkynes (Markovnikov hydration gives methyl ketones; hydroboration–oxidation gives aldehydes); and (4) acylation chemistry (Friedel–Crafts acylation, Rosenmund reduction, organocuprate coupling, Grignard–nitrile addition). Choosing a route is strategy: the same target can come from an alcohol, an alkene, or an alkyne, and the exam question is usually "which reagent stops at the aldehyde?"

## Why This Matters

Aldehydes and ketones are the gateway to most functional-group chemistry: hydride reductions make alcohols, Grignard reagents extend carbon chains, amines make imines. Knowing how to *make* them determines whether you can build a target molecule at all. The same logic runs at scale: acetone and MEK are produced by alcohol dehydrogenation, citral (an aldehyde) feeds vitamin A and fragrance synthesis, and the liver's oxidation of ethanol to acetaldehyde is the same chemistry. For exams, the highest-yield contrast is **PCC (stops at aldehyde) vs Jones reagent (goes to carboxylic acid)**, then ozonolysis and alkyne hydration.

## Core Concepts

### Oxidation of alcohols

A primary alcohol can be oxidized twice (alcohol → aldehyde → carboxylic acid), so stopping at the aldehyde needs **anhydrous, mild conditions**: **PCC** (pyridinium chlorochromate, in CH\(_2\)Cl\(_2\)) or **Dess–Martin periodinane**. With water present (Jones reagent, CrO\(_3\)/H\(_2\)SO\(_4\)), the aldehyde hydrates and is oxidized again to the carboxylic acid. Secondary alcohols have no such problem — any chromium reagent, PCC, or KMnO\(_4\) gives the ketone cleanly, since a ketone cannot be oxidized further without breaking C–C bonds. The mechanism is a two-electron oxidation: the C–H α to oxygen becomes a C–O bond, the metal oxidant accepting the hydride.

### Ozonolysis of alkenes

Ozone cleaves a C=C completely. With a **reductive workup** (dimethyl sulfide or Zn/H\(_2\)O), each alkene carbon becomes a carbonyl:

- An internal alkene gives two ketones (or aldehydes, depending on substitution): 2-methyl-2-butene → propanone + ethanal.
- A terminal alkene gives an aldehyde + formaldehyde.
- A cyclic alkene opens into a single molecule with two carbonyls (e.g., 1-methylcyclohexene → 6-oxoheptanal).

With an **oxidative workup** (H\(_2\)O\(_2\)), aldehydes oxidize further to carboxylic acids — the workup is a product-determining decision, not a detail.

### From alkynes: Markovnikov vs anti-Markovnikov hydration

Terminal alkynes are superb carbonyl synthons. **Acid-catalyzed hydration** (HgSO\(_4\), H\(_2\)SO\(_4\), water — the Kucherov reaction) adds water with Markovnikov regiochemistry; the enol tautomerizes to the more stable carbonyl, giving a **methyl ketone**: `CH3C≡CH` → propan-2-one (acetone). **Hydroboration–oxidation** (disiamylborane, then H\(_2\)O\(_2\)/NaOH) adds water anti-Markovnikov, giving the **aldehyde**: `CH3C≡CH` → propanal. Both routes run through an enol (C=C–OH) intermediate — a preview of enol chemistry later.

### Aromatic and acyl routes

Arenes acylate directly: benzene + acetyl chloride + AlCl\(_3\) gives **acetophenone** (Friedel–Crafts acylation). Unlike alkylation, acylation does not rearrange, and the ketone product deactivates the ring (mono-acylation only). Acid chlorides open both families: **Rosenmund reduction** (H\(_2\)/Pd on BaSO\(_4\)) converts RCOCl to the aldehyde; a **dialkylcuprate** (R\(_2\)CuLi) gives a ketone; and a **Grignard reagent** adds to a nitrile to give, after hydrolysis, a ketone. The acyl route is valuable because it installs the carbonyl at a fixed oxidation state without touching the rest of the molecule.

### Choosing the route

1. **Ketone?** Oxidize the secondary alcohol, hydrate the terminal alkyne, or ozonolyze an internal alkene.
2. **Aldehyde?** Use PCC/Dess–Martin on the primary alcohol, Rosenmund reduction of the acid chloride, hydroboration–oxidation of the terminal alkyne, or ozonolysis with reductive workup.
3. **Aryl ketone?** Friedel–Crafts acylation.
4. **Watch over-oxidation:** aqueous Cr(VI) on a 1° alcohol gives the acid, not the aldehyde.

## ELI-10: Explain Like I'm 10

Making an aldehyde or ketone is like cooking: start with a simpler ingredient (an alcohol, alkene, or alkyne) and follow a reagent "recipe." A primary alcohol cooks twice — once to an aldehyde, once to an acid — so stopping at the aldehyde needs a "no-water" recipe (PCC). A secondary alcohol cooks only once, straight to a ketone. Cutting a double bond with ozone is like slicing a rope: each cut end becomes a carbonyl.

## High-Yield Points

- 1° alcohol + PCC (anhydrous) → **aldehyde**; + Jones reagent (aqueous CrO\(_3\)/H\(_2\)SO\(_4\)) → carboxylic acid.
- 2° alcohol + any standard oxidant → **ketone** (no over-oxidation without C–C cleavage).
- Ozonolysis (reductive workup): alkene → carbonyl(s); cyclic alkene → ring-opened dicarbonyl.
- Terminal alkyne: Hg\(^{2+}\)/H\(^+\) hydration → **methyl ketone**; Sia\(_2\)BH then H\(_2\)O\(_2\)/NaOH → **aldehyde**.
- Friedel–Crafts acylation: arene + RCOCl/AlCl\(_3\) → aryl ketone (no rearrangement, mono-acylation).
- Rosenmund reduction (H\(_2\)/Pd–BaSO\(_4\)): RCOCl → aldehyde.
- General principle: chromium(VI) reagents are toxic and carcinogenic — handle with gloves, avoid dust, and follow your institution's waste-disposal rules; never neutralize them by guesswork.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| PCC | Pyridinium chlorochromate, a mild anhydrous Cr(VI) oxidant | The standard way to stop a primary alcohol at the aldehyde |
| Jones reagent | CrO\(_3\) in aqueous H\(_2\)SO\(_4\)/acetone | Strong aqueous oxidant; takes primary alcohols to carboxylic acids |
| Ozonolysis | Cleavage of a C=C bond by ozone, followed by a workup | Converts alkenes into carbonyl compounds; workup (reductive vs oxidative) sets the product |
| Enol | A C=C–OH isomer that tautomerizes to a carbonyl | The intermediate in alkyne hydration; explains the carbonyl product |
| Hydroboration–oxidation | Anti-Markovnikov addition of water to a π bond | Converts terminal alkynes to aldehydes (not methyl ketones) |
| Friedel–Crafts acylation | Electrophilic aromatic substitution with an acyl chloride/AlCl\(_3\) | Builds aryl ketones like acetophenone without rearrangement |
| Rosenmund reduction | Catalytic hydrogenation of an acid chloride to an aldehyde | A controlled route to aldehydes |

## Worked Examples

### Example 1: Synthesis strategy — make 2-methylbutanal from an alcohol

**Problem.** Propose a two-step synthesis of 2-methylbutanal, `CH3CH2CH(CH3)CHO`, starting from 2-methyl-1-butanol, `CH3CH2CH(CH3)CH2OH`.

**Analysis.** The target is an aldehyde; the starting material is its primary alcohol — the challenge is stopping at the aldehyde.

**Reagent choice.** PCC in CH\(_2\)Cl\(_2\) (anhydrous). Do *not* use aqueous Cr(VI): the aldehyde would hydrate and oxidize to 2-methylbutanoic acid.

**Equation.**

\[ \mathrm{CH_3CH_2CH(CH_3)CH_2OH} \xrightarrow{\text{PCC, CH}_2\text{Cl}_2} \mathrm{CH_3CH_2CH(CH_3)CHO} \]

**Why it works.** PCC lacks water, so the aldehyde cannot hydrate and survives.

### Example 2: Ozonolysis product prediction

**Problem.** What forms when 2-methyl-2-butene, `(CH3)2C=CHCH3`, is treated with O\(_3\) then dimethyl sulfide?

**Step 1 — cut the double bond.** Each alkene carbon becomes a carbonyl carbon:

\[ \mathrm{(CH_3)_2C{=}CHCH_3} \xrightarrow{1)\ \mathrm{O_3};\ 2)\ \mathrm{(CH_3)_2S}} \mathrm{(CH_3)_2C{=}O} + \mathrm{CH_3CHO} \]

**Step 2 — identify products.** The doubly substituted carbon becomes **propanone** (acetone); the singly substituted one becomes **ethanal**.

**Check.** Five carbons in, 3 + 2 out; reductive workup keeps both carbonyls, oxidative workup would convert ethanal to acetic acid.

### Example 3: Mass-based yield calculation

**Problem.** A student oxidizes 15.0 g of 2-propanol (MW 60.10) with acidic Cr(VI) and collects 10.9 g of acetone (MW 58.08). Calculate the percent yield.

**Balanced transformation (1:1):**

\[ \mathrm{CH_3CH(OH)CH_3} \longrightarrow \mathrm{CH_3COCH_3} \]

**Moles of 2-propanol:**

\[ n = \frac{15.0\ \text{g}}{60.10\ \text{g mol}^{-1}} = 0.2496\ \text{mol} \]

**Theoretical mass of acetone (dimensional analysis):**

\[ m_\text{theoretical} = 0.2496\ \text{mol C}_3\text{H}_8\text{O} \times \frac{1\ \text{mol C}_3\text{H}_6\text{O}}{1\ \text{mol C}_3\text{H}_8\text{O}} \times \frac{58.08\ \text{g C}_3\text{H}_6\text{O}}{1\ \text{mol}} = 14.5\ \text{g} \]

**Percent yield:**

\[ \%\text{ yield} = \frac{10.9\ \text{g}}{14.5\ \text{g}} \times 100\% = 75.2\% \]

The 1:1 stoichiometry and ~25% loss (volatile acetone lost during workup) make this a realistic lab result.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| PCC on a primary alcohol | Jones reagent on a primary alcohol | PCC (anhydrous) stops at the aldehyde; Jones (aqueous) oxidizes through to the carboxylic acid |
| Ozonolysis, reductive workup | Ozonolysis, oxidative workup | Reductive (DMS/Zn) leaves aldehydes/ketones; oxidative (H\(_2\)O\(_2\)) converts aldehydes to acids |
| Alkyne hydration (Hg\(^{2+}\)/H\(^+\), Markovnikov) | Alkyne hydroboration–oxidation (anti-Markovnikov) | Terminal alkyne: hydration → methyl ketone; hydroboration–oxidation → aldehyde |
| Friedel–Crafts acylation | Friedel–Crafts alkylation | Acylation doesn't rearrange and mono-acylates (ketone deactivates ring); alkylation rearranges and polyalkylates |
| Aldehyde from oxidation of a 1° alcohol | Aldehyde from oxidation of a 2° alcohol | Only primary alcohols give aldehydes; secondary alcohols give ketones (no aldehyde possible) |
| "Ozonolysis cleaves C=C" | "Ozonolysis removes C=C and nothing else changes" | Both alkene carbons become carbonyls — mass and carbon count change |

## Quick Review

1. Which reagent converts a primary alcohol to an aldehyde without further oxidation, and why does the reagent choice matter?
2. What products form from ozonolysis of 2-methyl-2-butene with reductive workup?
3. A terminal alkyne is treated with HgSO\(_4\)/H\(_2\)SO\(_4\)/H\(_2\)O. What functional group results, and via what intermediate?
4. How would you convert benzene to acetophenone in one step?
5. A student starts with 15.0 g of 2-propanol (MW 60.10) and obtains 10.9 g of acetone (MW 58.08). Is this result consistent with a 75% yield? Show the calculation.
6. Why can a secondary alcohol be oxidized to a ketone with any standard oxidant, while a primary alcohol needs a special reagent for the aldehyde?

<details>
<summary>Show answers</summary>

1. PCC (or Dess–Martin) in anhydrous conditions. In water the aldehyde hydrates and oxidizes further to the acid; PCC keeps the system dry so the aldehyde survives.
2. Propanone (acetone) and ethanal (acetaldehyde): the disubstituted alkene carbon becomes the ketone, the monosubstituted one the aldehyde.
3. A methyl ketone (e.g., propan-2-one from propyne). Water adds Markovnikov to give an enol, which tautomerizes to the more stable carbonyl.
4. Friedel–Crafts acylation: benzene + acetyl chloride + AlCl\(_3\) → acetophenone.
5. Moles of alcohol = 15.0/60.10 = 0.2496 mol; theoretical acetone = 0.2496 × 58.08 = 14.5 g; yield = (10.9/14.5) × 100% = 75.2%. Yes, consistent.
6. A ketone cannot be oxidized further without breaking C–C bonds, so even strong aqueous oxidants stop at the ketone. An aldehyde has a reactive C–H that aqueous oxidants convert to a C–OH, so stopping there requires anhydrous, mild conditions.

</details>

## Related Topics

- Previous: [Naming Aldehydes and Ketones](01-naming-aldehydes-and-ketones.md)
- Next: [Oxidation of Aldehydes and Ketones](03-oxidation-of-aldehydes-and-ketones.md)
- Related: [Aldehydes and Ketones: Nucleophilic Addition Reactions chapter overview](../README.md)
- Cross-chapter: [Ch. 8: Alkenes](../../chapter-08-alkenes-reactions-and-synthesis/README.md) (ozonolysis), [Ch. 9: Alkynes](../../chapter-09-alkynes-an-introduction-to-organic-synthesis/README.md) (hydration), [Ch. 17: Alcohols](../../chapter-17-alcohols-and-phenols/README.md) (oxidation)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
