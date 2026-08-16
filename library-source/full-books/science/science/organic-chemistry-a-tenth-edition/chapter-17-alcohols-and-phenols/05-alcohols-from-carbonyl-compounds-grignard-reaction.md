---
title: "Alcohols from Carbonyl Compounds: Grignard Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "17: Alcohols and Phenols"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "alcohols-from-carbonyl-compounds-grignard-reaction"
  - "science"
status: "complete"
---

# Alcohols from Carbonyl Compounds: Grignard Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 17: Alcohols and Phenols](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Reduction (Topic 4) adds hydrogen to a carbonyl; the **Grignard reaction** adds carbon instead. A Grignard reagent, \(\text{RMgX}\), forms when an alkyl or aryl halide is placed with magnesium metal in anhydrous ether; the carbon–magnesium bond is polarized so the carbon carries partial negative charge and acts as a **carbanion equivalent** — a powerful carbon nucleophile. When it meets a carbonyl, the carbon adds to the \(\delta+\) carbonyl carbon, and an aqueous workup delivers an alcohol with a **new carbon–carbon bond**. The product class depends on the carbonyl: **formaldehyde gives a primary alcohol**, other **aldehydes give secondary alcohols**, **ketones give tertiary alcohols**, and **esters** (two equivalents) also give tertiary alcohols. This is the single most important method for growing a carbon skeleton.

## Why This Matters

The Grignard reaction is the classic way to **build carbon–carbon bonds**, the central problem of organic synthesis. Pharmaceuticals and materials are assembled by connecting smaller fragments, and Grignard chemistry is one of the oldest, most reliable tools for that job (Victor Grignard won the 1912 Nobel Prize for it). Mechanistically it is the prototype for all organometallic additions to carbonyls; strategically, it is the reaction you will most often "disconnect" when planning an alcohol synthesis. It also teaches dry-technique discipline: water, alcohols, and amines destroy Grignard reagents.

## Core Concepts

### What a Grignard reagent is, and how it forms

Treating an organohalide \(\text{R–X}\) with magnesium turnings in anhydrous diethyl ether or THF gives \(\text{RMgX}\):

\[
\text{R–X} + \text{Mg} \rightarrow \text{RMgX}
\]

The reaction involves radical intermediates, but the product behaves as if carbon carried a negative charge: the C–Mg bond is covalent yet polarized, \(\text{C}^{\delta-}\text{–Mg}^{\delta+}\). Halide reactivity follows \(\text{RI} > \text{RBr} > \text{RCl}\); aryl and vinyl halides form Grignards more sluggishly than alkyl halides, usually needing THF and sometimes heat. Anything with an O–H or N–H bond **quenches** the reagent (a strong base abstracts the proton), so everything must be kept dry.

### The addition: mechanism in words

The electron-rich carbon of \(\text{RMgX}\) attacks the electron-poor carbonyl carbon; the \(\pi\) pair of the C=O moves onto the oxygen, and magnesium coordinates to it, forming a **magnesium alkoxide** (\(\text{R'–C(R)(O}^-\text{)MgX}^+\)). The addition is irreversible. Adding aqueous acid or ammonium chloride in the **workup** protonates the oxygen, delivering the alcohol. Because the reagent's carbon bonds directly to the carbonyl carbon, **one new C–C bond is formed** — the defining feature of the reaction.

### Which carbonyl gives which alcohol

- **Formaldehyde**, \(\text{H}_2\text{C=O}\): gives \(\text{RCH}_2\text{OH}\), a **primary** alcohol.
- **Other aldehydes**, \(\text{R'CHO}\): give \(\text{R'CH(OH)R}\), **secondary** alcohols.
- **Ketones**, \(\text{R'COR''}\): give \(\text{R'R''C(OH)R}\), **tertiary** alcohols.
- **Esters**, \(\text{R'CO}_2\text{R''}\): two equivalents add — the first gives a ketone, the second a tertiary alcohol — so **two R groups** land on the alcohol carbon.
- **Ethylene oxide**, the three-membered epoxide: ring opening at the less substituted carbon adds a **two-carbon chain**, giving a primary alcohol (\(\text{RCH}_2\text{CH}_2\text{OH}\)).

### Retrosynthetic thinking: disconnecting the C–C bond

Given a target alcohol, find the carbon bearing the OH and disconnect the bond to the R group that came from the Grignard: that R group is the reagent's fragment, and the rest of the molecule is the carbonyl. A primary alcohol \(\text{RCH}_2\text{OH}\) comes from formaldehyde plus \(\text{RMgX}\); a secondary alcohol \(\text{R'CH(OH)R}\) from an aldehyde plus \(\text{RMgX}\) (two disconnections are possible, since either carbon could have come from the reagent); a tertiary alcohol from a ketone plus \(\text{RMgX}\). Practicing both directions — reagent to product, and product back to reagents — is the skill this topic builds.

### Constraints and traps

The substrate cannot contain acidic hydrogens (O–H, N–H, terminal alkyne C–H): they would quench the reagent before addition. That is why alcohols, amines, and terminal alkynes must be **protected** (Topic 8) when a Grignard reaction is planned elsewhere in the molecule. Dry glassware, dry solvent, and an inert atmosphere are required.

## ELI-10: Explain Like I'm 10

A Grignard reagent is a molecule with a carbon end that is very hungry for electrons — like a strong magnet for the carbon of a carbonyl. When the two meet, the hungry carbon grabs the carbonyl's carbon, and after adding some water you get an alcohol with both pieces joined. A whole new carbon attaches, like snapping a brand-new brick onto a LEGO model — the model is bigger than before.

## High-Yield Points

- \(\text{RMgX}\) is a carbon nucleophile (carbanion equivalent); \(\text{C}^{\delta-}\text{–Mg}^{\delta+}\).
- Formaldehyde → primary alcohol; other aldehydes → secondary; ketones → tertiary; esters → tertiary (two R groups); ethylene oxide → primary with a two-carbon extension.
- Mechanism: nucleophilic addition to the carbonyl carbon → magnesium alkoxide → aqueous workup gives the alcohol.
- **Water, alcohols, amines, and terminal alkynes quench the reagent** — anhydrous conditions are mandatory.
- A new C–C bond is formed: the only alcohol preparation that grows the skeleton.
- Retrosynthesis: disconnect the new C–C bond to identify the carbonyl partner and the RMgX fragment.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Grignard reagent (\(\text{RMgX}\)) | An organomagnesium compound whose carbon acts as a carbanion | The carbon nucleophile that adds to carbonyls |
| Carbanion equivalent | A species that behaves as if carbon carried a negative charge | Explains the nucleophilic, basic behavior of RMgX |
| Magnesium alkoxide | The \(\text{C–O}^-\text{MgX}\) adduct formed before workup | Must be protonated to give the alcohol product |
| Anhydrous conditions | Complete absence of water | Required because water destroys Grignard reagents |
| Workup | Aqueous acid/ammonium chloride added after the addition | Protonates the alkoxide to the alcohol |
| Formaldehyde | \(\text{H}_2\text{C=O}\), the simplest aldehyde | Gives primary alcohols (adds a CH₂ unit) |
| Ethylene oxide | The three-membered epoxide ring | Opens to add a two-carbon chain (primary alcohols) |

## How It Works / Step-by-Step Process

1. Identify the alcohol carbon and its hydrogen count (primary, secondary, tertiary) — this fixes the carbonyl partner.
2. Choose \(\text{RMgX}\) so that R is the group you want to add (it becomes bonded to the carbonyl carbon).
3. Form the reagent from \(\text{R–X} + \text{Mg}\) in anhydrous ether/THF, or use a commercial solution.
4. Add the carbonyl under dry conditions; the alkoxide forms immediately.
5. Work up with aqueous acid or \(\text{NH}_4\text{Cl}\) to protonate the alkoxide; isolate the alcohol. If the substrate has acidic O–H, N–H, or terminal alkyne C–H, protect first (Topic 8).

## Worked Examples

### Example 1: A tertiary alcohol from a ketone, with a yield calculation

**Problem:** 2-Phenyl-2-propanol, \((CH_3)_2C(OH)C_6H_5\), is prepared from acetophenone, \(CH_3COC_6H_5\), and methylmagnesium bromide. If 2.00 g of acetophenone (molar mass 120.15 g/mol) reacts with excess \(\text{CH}_3\text{MgBr}\) and 1.85 g of product (molar mass 136.19 g/mol) is isolated, what is the percent yield?

**Step 1 — Moles of acetophenone:**

\[
n = \frac{2.00 \text{ g}}{120.15 \text{ g/mol}} = 0.0166 \text{ mol}
\]

**Step 2 — Theoretical yield** (1:1 mole ratio):

\[
m_{\text{theoretical}} = 0.0166 \text{ mol} \times 136.19 \text{ g/mol} = 2.27 \text{ g}
\]

**Step 3 — Percent yield:**

\[
\% \text{ yield} = \frac{1.85 \text{ g}}{2.27 \text{ g}} \times 100 = 81.5\%
\]

**Answer:** 81.5%. Mechanistically, \(\text{CH}_3^-\) adds to the ketone carbon, forming the magnesium alkoxide; the workup protonates it to the tertiary alcohol.

### Example 2: A secondary alcohol from an aldehyde — and its retrosynthesis

**Problem:** Propose a Grignard synthesis of 1-phenyl-1-propanol, \(C_6H_5CH(OH)CH_2CH_3\).

The OH-bearing carbon is attached to \(\text{C}_6\text{H}_5\), \(\text{CH}_2\text{CH}_3\), and H — a secondary alcohol. Disconnect either carbon bond: **Route A** — benzaldehyde, \(C_6H_5CHO\), plus ethylmagnesium bromide, \(CH_3CH_2MgBr\) (ethyl adds to the carbonyl carbon). **Route B** — propanal, \(CH_3CH_2CHO\), plus phenylmagnesium bromide, \(C_6H_5MgBr\) (phenyl adds). Both are valid; choose based on availability. In Route A, the ethyl carbanion equivalent attacks the carbonyl carbon; the alkoxide forms; workup gives the secondary alcohol.

### Example 3: Chain extension with ethylene oxide

**Problem:** How would you convert ethylmagnesium bromide into 1-butanol, and why does the epoxide route work?

Add \(CH_3CH_2MgBr\) to ethylene oxide in ether. The nucleophilic carbon attacks the less substituted (less hindered) carbon of the three-membered ring; the ring opens, and the alkoxide \(\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{O}^-\text{MgBr}\) forms. Aqueous workup gives **1-butanol**, \(CH_3CH_2CH_2CH_2OH\). The epoxide route adds exactly two carbons — the standard way to extend a Grignard by a two-carbon unit; formaldehyde plus propylmagnesium bromide would give the same product.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Grignard carbon (nucleophile) | Magnesium (electrophile) | The \(\delta-\) carbon attacks the carbonyl carbon; Mg is a spectator counterion |
| Ketone + RMgX | Aldehyde + RMgX | Ketones give tertiary alcohols; aldehydes give secondary |
| Formaldehyde + RMgX | Other aldehydes + RMgX | Formaldehyde gives primary alcohols; higher aldehydes give secondary |
| Ester + 1 equivalent | Ester + excess Grignard | Esters need **two** equivalents to reach a clean tertiary alcohol |
| Alkoxide | Alcohol | The direct product is the magnesium alkoxide; the workup gives the alcohol |
| Grignard in water | Water in the workup | Water destroys the reagent — protic solvents are forbidden during formation and addition; water is added only in the workup |
| Reduction (Topic 4) | Grignard addition | Both convert ketones to alcohols; reduction adds H, Grignard adds R (new C–C bond) |

## Quick Review

1. What alcohol classes come from formaldehyde, other aldehydes, ketones, and esters reacting with a Grignard reagent?
2. In the mechanism, what is the immediate product before workup, and what does the workup do?
3. Which two retrosynthetic disconnections produce 1-phenyl-1-propanol?
4. What product forms when ethylene oxide reacts with ethylmagnesium bromide?
5. If 2.00 g of acetophenone gives 1.85 g of 2-phenyl-2-propanol, what is the percent yield? (Molar masses: 120.15 and 136.19 g/mol.)

<details>
<summary>Show answers</summary>

1. Formaldehyde → primary; other aldehydes → secondary; ketones → tertiary; esters → tertiary (two R groups added).
2. A magnesium alkoxide, \(\text{R'–C(R)(O}^-\text{)MgX}^+\); the aqueous workup protonates the oxygen to give the alcohol. (Water must be excluded until then — it would quench the reagent.)
3. Benzaldehyde + ethylmagnesium bromide, or propanal + phenylmagnesium bromide.
4. 1-Butanol, \(CH_3CH_2CH_2CH_2OH\) — ring opening at the less substituted carbon adds a two-carbon chain.
5. Moles of acetophenone = 2.00/120.15 = 0.0166 mol; theoretical product = 0.0166 × 136.19 = 2.27 g; percent yield = (1.85/2.27) × 100 = 81.5%.

</details>

## Related Topics

- Previous: [Alcohols from Carbonyl Compounds: Reduction](04-alcohols-from-carbonyl-compounds-reduction.md)
- Next: [Reactions of Alcohols](06-reactions-of-alcohols.md)
- Related: [Protection of Alcohols](08-protection-of-alcohols.md), [Alcohols and Phenols chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Molar masses and product-class statements are standard teaching content; verify reagent specifics against current sources before relying on them in assessments.
- Last updated: 2026-08-16
