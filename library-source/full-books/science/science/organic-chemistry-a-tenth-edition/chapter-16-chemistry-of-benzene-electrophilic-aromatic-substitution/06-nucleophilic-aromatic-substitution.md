---
title: "Nucleophilic Aromatic Substitution"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "16: Chemistry of Benzene: Electrophilic Aromatic Substitution"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "nucleophilic-aromatic-substitution"
  - "science"
status: "complete"
---

# Nucleophilic Aromatic Substitution

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 16: Chemistry of Benzene: Electrophilic Aromatic Substitution](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Benzene rings are electron-rich, so their signature chemistry is electrophilic attack. Yet there are situations where a nucleophile must replace a group on the ring — and the ring can oblige, but only under special conditions. **Nucleophilic aromatic substitution (NAS)** is the umbrella term for reactions that put a nucleophile where a leaving group (usually a halide) sits on an aromatic ring. It comes in two mechanistically distinct flavors:

1. **Addition–elimination (SNAr):** a strong electron-withdrawing group (like \\(\text{NO}_2\\)) at the ortho or para position stabilizes the negatively charged intermediate, allowing a nucleophile to add and then eject the halide.
2. **Elimination–addition (benzyne):** with very strong bases, the halide and a neighboring hydrogen leave together, forming a reactive **benzyne** intermediate that the nucleophile then attacks.

Plain aryl halides do **not** undergo the \\(\text{S}_\text{N}2\\) and \\(\text{S}_\text{N}1\\) reactions that work on alkyl halides: the ring's rigid geometry blocks backside attack, and the phenyl cation is far too unstable to form. NAS is therefore the answer to a question that otherwise has none: *how do you put a nitrogen, oxygen, or carbon nucleophile onto an aromatic ring?* This section covers when each mechanism operates, what the intermediates look like, and how to predict the products.

## Why This Matters

NAS is the industrial and laboratory gateway to aromatic amines, phenols, ethers, and nitriles. **2,4-Dinitrochlorobenzene** reacting with ammonia or hydroxide is a classic route to substituted anilines and phenols; **chlorobenzene + NaOH at high temperature and pressure** produces phenol — one of the highest-volume industrial chemicals in the world. Aromatic fluorination, central to modern pharmaceuticals (many drugs contain a fluoroaromatic ring), is achieved by NAS-type displacement of chloride or nitro groups with fluoride. Dyes, herbicides, and polymers (such as PEEK) are built from NAS steps. For students, NAS delivers a key mechanistic lesson: reaction outcome depends less on the *identity* of the leaving group than on how well the ring can stabilize the transition states and intermediates — which is why fluoride, a terrible leaving group in alkyl chemistry, works fine in SNAr when the ring is activated.

## Core Concepts

### Why aryl halides resist S_N2 and S_N1

In \\(\text{S}_\text{N}2\\), the nucleophile must attack the carbon from the back side of the C–X bond, along the bond axis. On an sp² ring carbon, the C–X bond lies in the plane of the ring, and the π system blocks any backside approach — the geometry simply cannot be achieved. In \\(\text{S}_\text{N}1\\), the first step would form a **phenyl cation**, \\(\text{C}_6\text{H}_5^+\\): an sp² carbocation with the empty orbital in the ring plane, impossible to stabilize by hyperconjugation or solvation the way alkyl cations are. Phenyl cations are so high in energy that \\(\text{S}_\text{N}1\\) on aryl halides is effectively forbidden under normal conditions. Both standard mechanisms are dead ends; special mechanisms are required.

### Addition–elimination (SNAr): the Meisenheimer complex

In SNAr, the nucleophile attacks the carbon bearing the leaving group **first**, forming a negatively charged, non-aromatic intermediate called a **Meisenheimer complex** (also called an arenium or σ-complex anion). This intermediate carries a full negative charge that must be stabilized; that is the job of **electron-withdrawing groups at the ortho and para positions**, which delocalize the negative charge by resonance:

\\[\text{Nu}^- + \text{ArX} \longrightarrow [\text{Ar(Nu)(X)}]^- \longrightarrow \text{ArNu} + \text{X}^-
\\]

The more electron-withdrawing groups — and the more of them — the more stabilized the intermediate and the faster the reaction. Two \\(\text{NO}_2\\) groups ortho/para to the halide make the reaction so fast that even mild nucleophiles work at room temperature; one \\(\text{NO}_2\\) group requires heating. Critically, the **leaving-group order reverses** relative to alkyl chemistry: in SNAr, \\(\text{F} > \text{Cl} > \text{Br} > \text{I}\\), because the C–F bond's polarity puts the most positive character on the ring carbon, accelerating the nucleophilic attack (the slow step). A bad alkyl leaving group (F) becomes a good aryl leaving group when the ring is activated.

### Elimination–addition (benzyne mechanism)

When the ring has **no** electron-withdrawing groups but the base is extremely strong (e.g., \\(\text{NaNH}_2\\) in liquid ammonia), a different path opens: the base removes the hydrogen *ortho* to the halide, and the halide leaves in the same step, forming a **benzyne** — a six-membered ring containing a formal triple bond. The nucleophile then adds to either carbon of the triple bond, and protonation gives the substituted product:

\\[\text{ArX} + \text{NH}_2^- \longrightarrow [\text{benzyne}] \xrightarrow{\text{NH}_2^-} \text{ArNH}_2 + \text{X}^-
\\]

Because the nucleophile can attack either end of the benzyne triple bond, substituted rings can give **mixtures of isomers** — a key diagnostic that benzyne was involved. Benzyne is the subject of the next topic; here the point is that strong bases unlock a nucleophilic substitution pathway even on unactivated rings.

### When is NAS the right mechanism?

- **SNAr:** ring carries strong EWG(s) at ortho/para positions; nucleophile is a good anion (\\(\text{OH}^-\\), \\(\text{RO}^-\\), \\(\text{NH}_2^-\\)/amines, \\(\text{CN}^-\\), \\(\text{RS}^-\\)); mild-to-moderate conditions.
- **Benzyne:** no EWG needed; very strong base required; halogen plus ortho hydrogen must be present (an aryl fluoride with no ortho H cannot form benzyne).

## ELI-10: Explain Like I'm 10

> A benzene ring is like a fortress that only lets guests in if it has a secret password. Normally, a molecule with a halogen "guest card" (like a chloride) can't be swapped out — the fortress is too strict for the usual tricks. But if the ring has strong "magnet" groups (like –NO₂) pulling on the electrons, the fortress relaxes and a new guest can walk in and push the old one out. If instead you bring a super-strong battering ram (like NaNH₂), the fortress opens a secret tunnel (benzyne) — but then the new guest can come in from either side, so you sometimes get two different houses.

## High-Yield Points

- Aryl halides **cannot** do \\(\text{S}_\text{N}2\\) (geometry) or \\(\text{S}_\text{N}1\\) (phenyl cation too unstable).
- **SNAr = addition–elimination:** nucleophile adds first (Meisenheimer complex), leaving group leaves second.
- SNAr **requires strong EWG(s) ortho/para** to the leaving group to stabilize the negative intermediate; \\(\text{NO}_2\\) is the classic activator.
- **Leaving-group order in SNAr is F > Cl > Br > I** — opposite to alkyl substitution — because the slow step is nucleophilic attack on the electron-poor ring carbon.
- **Benzyne = elimination–addition:** needs a very strong base (\\(\text{NaNH}_2\\)), no EWG required; the base removes the ortho H, the halide leaves, and a strained triple-bonded intermediate forms.
- Benzyne intermediates are symmetric on unsubstituted rings but give **isomer mixtures** on substituted rings.
- Both mechanisms place the nucleophile where the leaving group was; the conditions distinguish the two.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Nucleophilic aromatic substitution | Reaction replacing a group on an aromatic ring with a nucleophile | The only practical route to many aryl amines, phenols, ethers, nitriles |
| Meisenheimer complex | Negatively charged σ-adduct intermediate in SNAr (nucleophile and leaving group both on the ring) | Its stability — set by EWG placement — controls SNAr rate |
| SNAr (addition–elimination) | NAS mechanism: add nucleophile, then eject leaving group | Dominant NAS route on activated rings |
| Benzyne | Highly reactive six-membered ring with a formal triple bond | Explains NAS on unactivated rings and the isomer mixtures observed |
| Phenyl cation | \\(\text{C}_6\text{H}_5^+\\); an sp² carbocation with the empty orbital in the ring plane | Far too unstable to form, which rules out SN1 on aryl halides |
| ortho/para EWG requirement | Electron-withdrawing groups at positions ortho and para to the leaving group | Resonance delocalization of the Meisenheimer negative charge |
| Leaving group | The halide (or other group) displaced from the ring | In SNAr the identity matters less than ring activation; F becomes a good leaving group |

## How It Works / Step-by-Step Process

### Recognizing which NAS mechanism applies

1. Look at the ring: does it carry a strong EWG (\\(\text{NO}_2\\), \\(\text{CN}\\), \\(\text{SO}_3\text{H}\\), carbonyl) **ortho or para** to the halide?
   - Yes → **SNAr**: nucleophile adds, then halide leaves; rate increases with the number and strength of EWGs.
   - No → check the base: a very strong base (\\(\text{NaNH}_2\\), \\(\text{NaH}\\), organolithium) → **benzyne** path (requires an ortho H).
2. Write the nucleophile's lone pair attacking the C–X carbon; form the Meisenheimer complex with the negative charge delocalized onto the EWG.
3. Eject the halide; verify the product has the nucleophile where the halide was.

### Predicting SNAr products on activated rings

1. Identify the position of the leaving group and the positions of the EWG(s).
2. The nucleophile attacks the C–X carbon (not the EWG-bearing carbons).
3. Product = ring with the nucleophile at the old halide position; EWGs stay put.
4. With multiple halides, the one flanked by the most EWGs (ortho/para) reacts fastest.

## Worked Examples

### Example 1: 1-chloro-2,4-dinitrobenzene + hydroxide → 2,4-dinitrophenol

The ring has chloride at C1 and \\(\text{NO}_2\\) groups at C2 and C4 — both ortho/para to the leaving group. Hydroxide attacks C1, forming a Meisenheimer complex whose negative charge is delocalized onto both nitro groups. Chloride then leaves:

\\[\text{ClC}_6\text{H}_3(\text{NO}_2)_2 + \text{OH}^- \longrightarrow \text{HOC}_6\text{H}_3(\text{NO}_2)_2 + \text{Cl}^-
\\]

(2,4-dinitrochlorobenzene + NaOH → 2,4-dinitrophenol + NaCl.) The two nitro groups make the reaction fast enough to run under mild conditions — the classic demonstration that SNAr rate tracks the *number* of activating groups. With only one nitro (e.g., p-chloronitrobenzene), the same reaction needs heat.

### Example 2: Mass calculation — phenol from chlorobenzene via NAS

Chlorobenzene reacts with hot aqueous NaOH (high pressure, industrial conditions) to give phenol and NaCl:

\\[\text{C}_6\text{H}_5\text{Cl} + \text{NaOH} \longrightarrow \text{C}_6\text{H}_5\text{OH} + \text{NaCl}
\\]

How much phenol can 50.0 g of chlorobenzene produce in theory? Molar masses: chlorobenzene \\(M = 6(12.01)+5(1.008)+35.45 = 112.56\\) g/mol; phenol \\(M = 6(12.01)+6(1.008)+16.00 = 94.11\\) g/mol.

**Moles of chlorobenzene:**

\\[\text{mol C}_6\text{H}_5\text{Cl} = \frac{50.0\ \text{g}}{112.56\ \text{g/mol}} = 0.444\ \text{mol}
\\]

**Theoretical mass of phenol** (1:1 stoichiometry, dimensional analysis in one chain):

\\[
\text{mass C}_6\text{H}_5\text{OH} = 50.0\ \text{g} \times \frac{1\ \text{mol}}{112.56\ \text{g}} \times \frac{1\ \text{mol C}_6\text{H}_5\text{OH}}{1\ \text{mol C}_6\text{H}_5\text{Cl}} \times \frac{94.11\ \text{g}}{1\ \text{mol}} = 41.8\ \text{g}
\\]

The theoretical yield is **41.8 g** of phenol. Unactivated chlorobenzene needs forcing conditions — high temperature and pressure — because there is no EWG to stabilize the Meisenheimer complex.

### Example 3: Predicting the SNAr product — p-chloronitrobenzene + methoxide

p-Chloronitrobenzene (\\(\text{Cl}\\) at C1, \\(\text{NO}_2\\) at C4) reacts with sodium methoxide to give p-nitroanisole (4-nitroanisole):

\\[\text{ClC}_6\text{H}_4\text{NO}_2 + \text{CH}_3\text{O}^- \longrightarrow \text{CH}_3\text{OC}_6\text{H}_4\text{NO}_2 + \text{Cl}^-
\\]

The nitro group is para to the chloride, so the Meisenheimer complex is stabilized by resonance onto the nitro oxygen. The methoxide ends up exactly where the chloride was (C1), and the nitro group remains at C4. Note the nitro group does **not** move or react; it only activates.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| SNAr | \\(\text{S}_\text{N}2\\) on alkyl halides | SNAr goes through an anionic σ-adduct and needs EWG activation; SN2 is a single backside attack with no ring |
| "Leaving group quality" (SN2: I > Br > Cl > F) | SNAr leaving group order (F > Cl > Br > I) | In SNAr the slow step is nucleophilic attack, favored by the strongly polar C–F bond; fluoride becomes a *good* aryl leaving group |
| Meisenheimer complex | Arenium ion of EAS | Meisenheimer is **negatively** charged (nucleophile added); EAS arenium ions are positively charged (electrophile added) |
| Benzyne mechanism needing EWG | SNAr needing EWG | Benzyne path needs a strong base but **no** EWG; SNAr needs EWG(s) and works with mild bases |
| Nucleophile attacking the EWG | Nucleophile attacking C–X | The nucleophile attacks the carbon bearing the leaving group; the EWG only stabilizes the intermediate |
| "Aryl halides never react with nucleophiles" | "Aryl halides need special mechanisms" | They react — via SNAr (activated rings) or benzyne (strong base) — just not via SN1/SN2 |

## Quick Review

1. Why can't aryl halides undergo \\(\text{S}_\text{N}2\\) or \\(\text{S}_\text{N}1\\)?
2. Describe the two-step SNAr mechanism and the role of ortho/para EWGs.
3. Why is the SNAr leaving-group order F > Cl > Br > I?
4. What conditions trigger the benzyne mechanism instead of SNAr?
5. Predict the product of 1-chloro-2,4-dinitrobenzene + \\(\text{NH}_3\\).
6. In Example 2, why does unactivated chlorobenzene need such harsh conditions for NAS?

<details>
<summary>Show answers</summary>

1. The sp² ring carbon blocks backside (in-line) attack required by SN2, and the phenyl cation that SN1 would require is far too high in energy to form.
2. The nucleophile adds to the C–X carbon, forming a negatively charged Meisenheimer complex; the leaving group then departs. Ortho/para EWGs delocalize the negative charge by resonance, stabilizing the intermediate and lowering the barrier.
3. In SNAr the rate-determining step is nucleophilic attack. The C–F bond is the most polar, placing the most positive character on the ring carbon, so the fluoride-bearing carbon is attacked fastest; F is also a viable leaving group from the stabilized complex.
4. A very strong base (e.g., \\(\text{NaNH}_2\\) in liquid ammonia) with an aryl halide that has an ortho hydrogen — no EWG required. The base removes the ortho H, the halide leaves, and benzyne forms.
5. 2,4-Dinitroaniline: ammonia's nitrogen attacks C1, the Meisenheimer complex is stabilized by both nitro groups, and chloride is expelled.
6. With no EWG to stabilize the anionic intermediate, the Meisenheimer complex is extremely high in energy; only high temperature and pressure push the reaction forward.

</details>

## Related Topics

- Previous: [Trisubstituted Benzenes: Additivity of Effects](05-trisubstituted-benzenes-additivity-of-effects.md)
- Next: [Benzyne](07-benzyne.md)
- Related: [Chemistry of Benzene: Electrophilic Aromatic Substitution chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
