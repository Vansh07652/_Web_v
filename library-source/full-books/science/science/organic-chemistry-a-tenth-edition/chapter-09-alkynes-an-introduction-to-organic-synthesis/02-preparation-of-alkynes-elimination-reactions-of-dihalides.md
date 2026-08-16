---
title: "Preparation of Alkynes: Elimination Reactions of Dihalides"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "9: Alkynes: An Introduction to Organic Synthesis"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "preparation-of-alkynes-elimination-reactions-of-dihalides"
  - "science"
status: "complete"
---

# Preparation of Alkynes: Elimination Reactions of Dihalides

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 9: Alkynes: An Introduction to Organic Synthesis](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Alkynes are rarely found in nature, so synthetic chemists must make them. The classic laboratory route is a **double dehydrohalogenation**: take a dihalide (two \(\ce{C–X}\) bonds on adjacent carbons, or on the same carbon), remove two equivalents of \(\ce{HX}\), and the two lost \(\ce{H}\)'s and two lost \(\ce{X}\)'s come from neighboring carbons, leaving a triple bond behind.

The overall transformation, for a **vicinal dihalide** (halogens on adjacent carbons):

\[
\ce{R-CHX-CH2X ->[\text{2 equiv strong base}] R-C#CH + 2 HX}
\]

Mechanistically this is two consecutive **E2 eliminations**. The first E2 removes one \(\ce{HX}\) and makes an alkene that still carries one halogen — a **vinyl halide** (halogen on a double-bond carbon). The second E2 removes the remaining \(\ce{HX}\), and the \(\ce{C=C}\) becomes \(\ce{C#C}\). Because vinyl halides are sluggish toward elimination, the second step needs a **very strong base** — typically **sodium amide**, \(\ce{NaNH2}\), dissolved in liquid ammonia — whereas the first elimination can often be done with the milder alcoholic potassium hydroxide, \(\ce{KOH/ethanol}\).

The same two-step logic works for **geminal dihalides** (both halogens on the same carbon, \(\ce{R-CH2-CHX2}\)), which also give alkynes after double elimination. Because elimination is an *anti* (or \(E2\) anti-periplanar) process in the usual staggered conformations, the stereochemistry of the starting dihalide matters in detail, but the practical message is simple: **heat + strong base + dihalide → alkyne.**

## Why This Matters

- **It's the standard alkyne synthesis.** If a target molecule contains a triple bond, the retrosynthetic question is usually "which dihalide (or which alkene) do I start from?" This reaction is the answer, and it connects directly to Chapter 8: bromination of an alkene gives a vicinal dibromide, and double elimination of that dibromide gives the alkyne — a two-step alkene → alkyne route.
- **It teaches E2 in stereo and in series.** You get to see elimination chemistry twice in one molecule: the first E2 is normal (alkyl halide), the second is special (vinyl halide). Understanding why the second needs a stronger base is a favorite exam question.
- **It feeds everything else in this chapter.** The alkynes made here are the substrates for hydration (Topic 4), reduction (Topic 5), oxidative cleavage (Topic 6), and — if terminal — acetylide chemistry (Topics 7–8). You cannot do the rest of the chapter without a reliable way to make the starting material.
- **Industrial relevance.** Acetylene and substituted alkynes are industrial feedstocks (acetylene in welding; alkynes in fine chemicals). The dehydrohalogenation route is also the historical basis for large-scale alkyne production.

## Core Concepts

### Step 1: E2 to the vinyl halide

A vicinal dihalide such as \(\ce{CH3CH2-CHBr-CH2Br}\) (1,2-dibromobutane) is treated with base. The base abstracts the \(\beta\)-hydrogen while the \(\ce{C–Br}\) bond breaks, forming a \(\ce{C=C}\) double bond — this is a standard E2, exactly like the dehydrohalogenation you learned in Chapter 8:

\[
\ce{CH3CH2-CHBr-CH2Br + KOH ->[EtOH, heat] CH3CH2-CBr=CH2 + KBr + H2O}
\]

The product, \(\ce{CH3CH2-CBr=CH2}\), is a **vinyl halide** — a bromide on an \(sp^2\) carbon of an alkene. (Regiochemistry follows the usual E2 preference for the more substituted alkene, so the major product is the one with the double bond between the two more-substituted carbons, as drawn.)

### Step 2: E2 on the vinyl halide — why \(\ce{NaNH2}\)?

Removing the second \(\ce{HX}\) from the vinyl halide is harder. Two factors fight the reaction:

1. **The leaving group is on an \(sp^2\) carbon.** The \(\ce{C–Br}\) bond of a vinyl halide is stronger than an alkyl \(\ce{C–Br}\) bond because the \(sp^2\) carbon holds its electrons closer to the nucleus. Vinyl halides are famously unreactive in \(S_N2\) and \(S_N1\) — but E2 is still possible with a strong enough base.
2. **The abstracted \(\ce{H}\) is on a vinylic position**, attached to the double-bond carbon bearing the halide.

So the second elimination needs a much stronger base: **\(\ce{NaNH2}\) in liquid \(\ce{NH3}\)** (sodium amide is a powerful, non-nucleophilic-but-basic reagent) or **potassium tert-butoxide**. The reaction:

\[
\ce{CH3CH2-CBr=CH2 + NaNH2 ->[liq NH3] CH3CH2-C#CH + NaBr + NH3}
\]

**Watch the stoichiometry:** a terminal alkyne product still has its acidic \(\ce{≡C–H}\), and excess \(\ce{NaNH2}\) will deprotonate it to the acetylide anion \(\ce{CH3CH2-C#C^-}\). That's not a failure of the synthesis — it's the standard situation. The reaction is usually run with \(\ge 2\) equivalents of \(\ce{NaNH2}\), and the acetylide is simply protonated back to the neutral alkyne on **aqueous workup** (adding water at the end). Expect exam problems that ask: "Why is the final step a water quench?" — because the product was isolated as its acetylide.

### Vicinal vs. geminal dihalides

- **Vicinal** (\(\ce{X–C–C–X}\), adjacent): obtained by adding \(\ce{X2}\) across an alkene (Chapter 8). Double elimination gives the alkyne.
- **Geminal** (\(\ce{CX2}\) on one carbon): obtained by adding two equivalents of \(\ce{HX}\) across an alkyne (or from ketones via \(\ce{PCl5}\)/\(\ce{SOCl2}\) chemistry). Double elimination also gives the alkyne.

Both routes converge on the same \(\ce{C#C}\). The practical difference: which starting material is available in your synthesis.

### The alkene → dibromide → alkyne strategy

Because bromination of an alkene (Chapter 8, Topic 2) gives a vicinal dibromide cleanly, the standard two-step alkene-to-alkyne sequence is:

1. \(\ce{alkene + Br2 -> vicinal dibromide}\) (anti addition, no rearrangements)
2. \(\ce{vicinal dibromide + 2 NaNH2 -> alkyne}\)

This works especially well for **terminal alkynes** because the starting alkene can be made by any alkene synthesis. It is a classic "how do you make that?" answer on synthesis exams.

## ELI-10: Explain Like I'm 10

Imagine a chain of building blocks where two blocks each have a little knob (a bromine atom) and the chain has two loose hydrogen ends. A strong base comes along like a magnet: it grabs a hydrogen from one block, the knob pops off the neighboring block, and the two blocks snap together with a double bond. Now one knob is still left. A much stronger magnet (sodium amide) grabs the next hydrogen, pops the last knob, and the blocks snap together with a triple bond — the strongest link of all. Two yanks, two pops, one triple bond.

## High-Yield Points

- **Double dehydrohalogenation:** dihalide → (1st E2) → vinyl halide → (2nd E2, \(\ce{NaNH2}\)) → alkyne.
- First elimination: \(\ce{KOH/EtOH}\), heat. Second elimination: **\(\ce{NaNH2}\) in liquid \(\ce{NH3}\)** — vinyl halides need a much stronger base.
- **Vicinal** dihalides (from alkene + \(\ce{X2}\)) and **geminal** dihalides both give alkynes.
- Use **≥2 equivalents of \(\ce{NaNH2}\)** for terminal-alkyne targets; the product forms as the acetylide and is protonated on **aqueous workup**.
- The alkene → \(\ce{Br2}\) → dibromide → \(\ce{NaNH2}\) → alkyne sequence is a standard retrosynthetic move.
- E2 requires the \(\ce{H}\) and \(\ce{X}\) to be anti-periplanar in the transition state — the reason conformational analysis matters.
- Safety note (general principle): strong bases and liquid ammonia are hazardous; these reactions are run with proper PPE, ventilation, and thermal control — never improvise lab conditions.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Dehydrohalogenation | Loss of \(\ce{HX}\) from a molecule, making a \(\pi\) bond. | The core reaction; done twice to make the triple bond. |
| Vicinal dihalide | Two halogens on adjacent carbons. | Standard substrate; made by adding \(\ce{X2}\) to an alkene. |
| Geminal dihalide | Two halogens on the same carbon. | Also eliminates to an alkyne; made by \(\ce{HX}\) addition to an alkyne or from carbonyls. |
| Vinyl halide | A halide on an \(sp^2\) (alkene) carbon. | The intermediate after the first E2; unreactive in substitution, needs strong base for E2. |
| E2 elimination | One-step bimolecular elimination: base removes \(\ce{H}\), leaving group departs, \(\pi\) bond forms. | The mechanism of both eliminations; requires anti-periplanar \(\ce{H}\) and \(\ce{X}\). |
| Sodium amide (\(\ce{NaNH2}\)) | Very strong base (amide ion, \(\ce{NH2^-}\)). | Strong enough to do the second (vinylic) elimination; also deprotonates terminal alkynes. |
| Acetylide anion | \(\ce{R-C#C^-}\), the conjugate base of a terminal alkyne. | The form in which the terminal alkyne is isolated before aqueous workup. |

## Worked Examples

### Example 1: 1,2-dibromobutane → 1-butyne (mechanism walkthrough)

**Setup:** Convert \(\ce{CH3CH2-CHBr-CH2Br}\) to \(\ce{CH3CH2-C#CH}\) and describe each step's mechanism in words.

**Step 1 — first elimination (E2):** In ethanol with \(\ce{KOH}\) and heat, the base abstracts a \(\beta\)-hydrogen from the \(\ce{CH2Br}\) carbon while the \(\ce{C–Br}\) bond on the adjacent carbon breaks. A curved arrow from the \(\ce{C–H}\) bond forms the \(\ce{C=C}\). Product: \(\ce{CH3CH2-CBr=CH2}\) (2-bromobut-1-ene, a vinyl bromide).

**Step 2 — second elimination (E2, strong base):** In liquid ammonia, \(\ce{NaNH2}\) abstracts the vinylic hydrogen on the \(\ce{CH2}\) group, the \(\ce{C–Br}\) bond breaks, and the \(\pi\) bond forms a triple bond. Product: \(\ce{CH3CH2-C#CH}\) (1-butyne), which immediately loses its terminal proton to excess amide, giving the acetylide \(\ce{CH3CH2-C#C^-}\).

**Step 3 — workup:** Adding water protonates the acetylide back to neutral 1-butyne.

**Answer:** The two eliminations are both E2; the second requires the much stronger base \(\ce{NaNH2}\) because the leaving group sits on an \(sp^2\) carbon.

### Example 2: Mole-ratio planning (dimensional analysis)

**Setup:** How many moles of \(\ce{NaNH2}\) are required to convert 0.40 mol of 1,2-dibromobutane into 1-butyne, accounting for the terminal-alkyne deprotonation? (Assume the reaction is run without a separate quenching base.)

**Formula first** (reaction stoichiometry: 1 mol dihalide needs 2 mol \(\ce{NaNH2}\) for the two eliminations, and the resulting terminal alkyne consumes a further 1 mol \(\ce{NaNH2}\) as it forms the acetylide):

\[
n(\ce{NaNH2}) = n(\text{dihalide}) \times \frac{3\ \text{mol } \ce{NaNH2}}{1\ \text{mol dihalide}}
\]

**Substitute:**

\[
n(\ce{NaNH2}) = 0.40\ \text{mol} \times \frac{3}{1} = 1.2\ \text{mol}
\]

**Answer:** 1.2 mol of \(\ce{NaNH2}\) (units: mol dihalide × mol \(\ce{NaNH2}\)/mol dihalide → mol \(\ce{NaNH2}\)). If the textbook problem states the amide is used in excess, "≥2 equiv" is the minimum for elimination and 3 equiv covers acetylide formation — check the problem's wording.

### Example 3: Retrosynthesis — "make 1-hexyne from an alkene"

**Setup:** Propose a synthesis of \(\ce{CH3CH2CH2CH2-C#CH}\) (1-hexyne) starting from 1-hexene.

**Forward plan:**

1. \(\ce{CH3CH2CH2CH=CH2 + Br2 -> CH3CH2CH2CHBr-CH2Br}\) (vicinal dibromide; anti addition, no rearrangement).
2. \(\ce{CH3CH2CH2CHBr-CH2Br + 2 NaNH2 (liq NH3) -> CH3CH2CH2CH2-C#C^-}\), then \(\ce{H2O}\) workup → \(\ce{CH3CH2CH2CH2-C#CH}\).

**Answer:** Two steps: bromination, then double dehydrohalogenation with sodium amide followed by aqueous workup. (The alternative — starting from a geminal dibromide — is also valid but requires making the dibromide first.)

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| First elimination (KOH/EtOH) | Second elimination (NaNH2) | The first removes \(\ce{HX}\) from an *alkyl* halide (mild base suffices); the second must eliminate from a *vinyl* halide (needs \(\ce{NaNH2}\)). |
| Acetylide formation | Unwanted side reaction | Deprotonating the terminal alkyne product is *expected*; aqueous workup restores the neutral alkyne. |
| Vicinal dihalide | Geminal dihalide | Adjacent carbons vs. same carbon; both eliminate to alkynes, but they come from different starting materials. |
| Elimination making a double bond | Elimination making a triple bond | One E2 → \(\ce{C=C}\); two E2s in the same molecule → \(\ce{C#C}\). |
| \(\ce{NaNH2}\) as base | \(\ce{NaNH2}\) as nucleophile | In this reaction amide acts as a base (abstracts \(\ce{H}\)); it is too basic to be a practical nucleophile here. |
| E2 "anti" requirement | "Any geometry works" | The \(\ce{H}\) and leaving group must be anti-periplanar in the E2 transition state; this controls which conformer reacts. |

## Quick Review

1. What two E2 eliminations convert a vicinal dihalide into an alkyne, and why does the second need a stronger base?
2. Why is aqueous workup the final step when making a terminal alkyne from a dihalide with excess \(\ce{NaNH2}\)?
3. How many equivalents of \(\ce{NaNH2}\) are needed (minimum) to convert 1,1-dibromobutane to 1-butyne, if the acetylide is the isolated intermediate?
4. Give the two-step sequence that converts 1-pentene into 1-pentyne, naming the reagents.
5. A student claims vinyl halides are unreactive toward substitution. Is that consistent with them undergoing elimination here? Explain.
6. Name one difference between making an alkyne from a vicinal vs. a geminal dihalide.

<details>
<summary>Show answers</summary>

1. First E2 (alkyl halide → vinyl halide) with \(\ce{KOH/EtOH}\); second E2 (vinyl halide → alkyne) with \(\ce{NaNH2}\) in liquid ammonia. The second is harder because the \(\ce{C–X}\) bond on an \(sp^2\) carbon is stronger, so a much stronger base is required.
2. The terminal alkyne's acidic hydrogen is removed by excess amide, forming the acetylide anion; adding water (aqueous workup) protonates it back to the neutral \(\ce{R-C#CH}\).
3. Three: two for the two eliminations plus one to deprotonate the terminal alkyne to its acetylide (2 equiv minimum for elimination alone).
4. (1) 1-pentene + \(\ce{Br2}\) → 1,2-dibromopentane; (2) 1,2-dibromopentane + 2 \(\ce{NaNH2}\) (liq \(\ce{NH3}\)), then \(\ce{H2O}\) → 1-pentyne.
5. Yes. Vinyl halides are poor substrates for substitution (the \(sp^2\) carbon resists \(S_N2\) and \(S_N1\)), but E2 elimination still proceeds when a strong enough base abstracts the adjacent hydrogen — elimination does not require a nucleophilic substitution step.
6. Vicinal dihalides come from \(\ce{X2}\) addition to alkenes (halogens on adjacent carbons); geminal dihalides come from two \(\ce{HX}\) additions to an alkyne or carbonyl-derived chemistry (halogens on the same carbon). Both give the same alkyne after double elimination.

</details>

## Related Topics

- Previous: [Naming Alkynes](01-naming-alkynes.md)
- Next: [Reactions of Alkynes: Addition of HX and X2](03-reactions-of-alkynes-addition-of-hx-and-x2.md)
- Related: [Halogenation of Alkenes: Addition of X2](../chapter-08-alkenes-reactions-and-synthesis/02-halogenation-of-alkenes-addition-of-x2.md)
- Related: [Alkyne Acidity: Formation of Acetylide Anions](07-alkyne-acidity-formation-of-acetylide-anions.md)
- Related: [Alkynes: An Introduction to Organic Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. General lab-safety guidance only (strong bases and liquid ammonia are hazardous; proper PPE/ventilation required) — no specific experimental procedures are provided.
- Last updated: 2026-08-16
