---
title: "Preparing Alkyl Halides from Alkenes: Allylic Bromination"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "10: Organohalides"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "preparing-alkyl-halides-from-alkenes-allylic-bromination"
  - "science"
status: "complete"
---

# Preparing Alkyl Halides from Alkenes: Allylic Bromination

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 10: Organohalides](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Alkenes react with Br₂ in two fundamentally different ways depending on the conditions. In the dark, at low temperature, Br₂ adds **across the double bond** to give a vicinal dibromide (you saw this in Chapter 8). But in the presence of light or a peroxide initiator, Br₂ instead substitutes a hydrogen **one carbon away from the double bond** — at the *allylic position* — giving an allylic bromide. This substitution is called **allylic bromination**, and the standard reagent is **N-bromosuccinimide (NBS)**, which keeps the concentration of free Br₂ low enough that the radical substitution pathway wins.

The reaction is:

\[ \mathrm{CH_2{=}CH{-}CH_3 \xrightarrow{NBS,\ CCl_4,\ light} CH_2{=}CH{-}CH_2Br} \]

Propene becomes allyl bromide (3-bromopropene) — the halogen lands on the carbon next to the double bond, not on the double bond itself. The chemistry that makes this possible is the same radical chain logic you learned in Topic 2, with one crucial twist: the intermediate allylic radical is **resonance-stabilized**, which both speeds up the hydrogen abstraction and explains the product distribution when the alkene is unsymmetrical.

## Why This Matters

Allylic bromides are valuable synthetic intermediates: the C–Br bond is a handle for substitution and elimination, and the retained double bond is a second reactive site, so allylic bromides can be elaborated in two directions. Industrially and in the lab, NBS bromination is the standard, reliable way to install a bromine at an allylic position — used in countless syntheses of natural products and pharmaceuticals. Conceptually, this topic is where you first see the same alkene give *different products under different conditions* (addition vs substitution) and where the resonance-stabilized radical from Topic 4 becomes a practical tool. Exam questions love asking: "why NBS and not Br₂?", "what product forms?", and "why is the allylic hydrogen so easy to remove?" — all answered here.

## Core Concepts

### Why Br₂ alone is the wrong reagent for allylic bromination

The problem is competition. If you simply add Br₂ to an alkene in the light, the radical chain would want to do allylic substitution, but Br₂ is such a good electrophile that **ionic addition to the double bond happens much faster** — you get the dibromide, not the allylic bromide. The radical pathway only wins if the concentration of free Br₂ is kept very low. **NBS solves this**: it is a source of bromine that releases Br₂ slowly (by reacting with the HBr produced in the reaction), so [Br₂] stays tiny and the radical substitution outcompetes ionic addition. That is the whole trick of the reagent choice.

### The radical chain mechanism of allylic bromination

The mechanism mirrors Topic 2's halogenation, with the alkene's allylic C–H as the substrate:

1. **Initiation** (trace of radical initiator or light): a bromine radical forms — either from Br₂ directly, or because NBS reacts with traces of HBr to generate Br₂, which then undergoes homolysis.
2. **Propagation step 1 — hydrogen abstraction:** the bromine radical removes the *allylic* hydrogen:
\[ \mathrm{Br{\bullet} + CH_2{=}CH{-}CH_3 \rightarrow HBr + CH_2{=}CH{-}CH_2{\bullet}} \]
The allylic C–H bond is weak (about 368 kJ/mol vs ~413 kJ/mol for a typical secondary C–H) because the resulting allylic radical is resonance-stabilized, so this abstraction is relatively fast and selective.
3. **Propagation step 2 — bromine transfer:** the allylic radical reacts with a bromine source to form the allylic bromide and regenerate a bromine radical:
\[ \mathrm{CH_2{=}CH{-}CH_2{\bullet} + Br_2 \rightarrow CH_2{=}CH{-}CH_2Br + Br{\bullet}} \]
4. **Regeneration of Br₂:** the HBr from step 2 reacts with NBS to give succinimide and more Br₂, keeping the [Br₂] low and the cycle running:
\[ \mathrm{NBS + HBr \rightarrow succinimide + Br_2} \]
5. **Termination:** radical–radical combination, as usual.

Mechanism note: each propagation step uses a single-headed (fishhook) curved arrow to show one electron moving; radicals are conserved (one in, one out). The chain is the same pattern you learned for alkane chlorination — the difference is *which* hydrogen is abstracted and *why*.

### Regiochemistry: resonance controls the product

The allylic radical CH₂=CH–CH₂• is not a single structure; the unpaired electron is delocalized over **two terminal carbons** (Topic 4). For a simple alkene like propene the two ends are equivalent, so only one product (allyl bromide) forms. But for an unsymmetrical alkene, bromine can be delivered to either end of the delocalized system, giving **two allylic bromide products** — the "1-bromo" and "3-bromo" isomers (relative to the original double-bond numbering). Both products retain the double bond, just shifted. Expect a mixture when the two resonance ends are different; exam problems usually ask you to draw both products and identify them as a pair of allylic isomers.

### Reaction conditions and practical notes

- Solvent: typically carbon tetrachloride (CCl₄) or other nonpolar solvents; light or a peroxide initiator supplies radicals.
- NBS is used in slight excess or stoichiometric amounts; the reaction is run to keep [Br₂] low throughout.
- Allylic bromination works best when there is a usable allylic hydrogen; if the alkene has no allylic H (e.g., fully substituted allylic carbon), the reaction fails or takes a different path.
- General lab safety principle: bromine and its vapors are corrosive and toxic — handle halogenation reactions in a fume hood with proper PPE, and never mix oxidizers with organics carelessly. These are general precautions, not step-by-step instructions.

## ELI-10: Explain Like I'm 10

Your alkene is a seesaw with a spring at one end (the double bond). If a heavy ball (Br₂) lands right on the spring, it clamps on — that's the addition reaction. But NBS is like a friend who hands you the balls one at a time, very slowly, so the spring is never busy. Instead, a sneaky helper (a bromine radical) reaches past the spring and grabs the loose handle one seat away — the allylic spot — and a new ball snaps onto that handle. The result: a bromine on the seat next to the spring, with the spring still bouncing.

## High-Yield Points

- Allylic bromination: NBS, CCl₄, light (or peroxide) → allylic bromide; the double bond is preserved.
- The allylic position = carbon adjacent to the C=C; the allylic C–H bond is weak (~368 kJ/mol) because the allylic radical is resonance-stabilized.
- Radical chain: initiation → Br• abstracts allylic H (selective, fast) → allylic radical + Br₂ → allylic bromide + Br•; HBr + NBS regenerates Br₂.
- NBS keeps [Br₂] low so radical substitution beats ionic addition to the C=C.
- Resonance in the allylic radical puts spin density on both terminal carbons → unsymmetrical alkenes give **two allylic bromide products** (1-bromo and 3-bromo isomers).
- Compare: Br₂ in the dark adds across the double bond (vicinal dibromide); Br₂/NBS in light substitutes at the allylic position. Same reagent, different conditions, different products.
- The allylic radical is more stable than a simple secondary radical — that stability is what makes allylic bromination selective.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Allylic position | The carbon adjacent to a C=C double bond | The site of substitution in allylic bromination |
| NBS (N-bromosuccinimide) | A mild bromine carrier that releases Br₂ slowly | Keeps [Br₂] low so substitution wins over addition |
| Allylic radical | Radical with the unpaired electron delocalized over two terminal carbons | Resonance-stabilized; explains speed and product mixture |
| Vicinal dibromide | Product of Br₂ addition across a double bond (Br on adjacent carbons) | The product you get *without* NBS/light control |
| Initiation | Formation of the first radicals (light/peroxide) | Starts the chain |
| Propagation | H abstraction + Br transfer, regenerating Br• | The chain-carrying steps |
| Resonance stabilization | Delocalization of an unpaired electron over multiple atoms | Lowers the energy of the radical; drives selectivity |
| Regiochemistry | Which position the new Br occupies | Resonance ends dictate 1-bromo vs 3-bromo products |
| Allyl bromide | CH₂=CH–CH₂Br, the product from propene | The simplest example; a useful allylic synthon |

## Worked Examples

### Example 1: Allylic bromination of cyclohexene

**Substrate:** cyclohexene (a six-membered ring with one double bond). The allylic positions are the two carbons adjacent to the double bond — C3 and C6; both carry two hydrogens, and they are equivalent by symmetry.

**Reaction:**
\[ \mathrm{cyclohexene \xrightarrow{NBS,\ CCl_4,\ light} 3-bromocyclohexene} \]

**Step-by-step:**
1. Initiation: light homolyzes Br₂ (from NBS + HBr) to Br•.
2. Br• abstracts an allylic hydrogen from C3 (or the equivalent C6), giving HBr and a cyclohexenyl radical in which the unpaired electron is delocalized between C3 and C1 (the alkene carbon).
3. The delocalized radical reacts with Br₂: bromine can attach at C3, giving 3-bromocyclohexene, the product isolated.
4. HBr is consumed by NBS to regenerate Br₂; chain continues.

Because the two allylic carbons are equivalent, only one constitutional product forms: 3-bromocyclohexene. The double bond remains intact. This is the textbook example of allylic bromination working cleanly.

### Example 2: Allylic bromination of an unsymmetrical alkene — 1-butene

**Substrate:** 1-butene, CH₂=CH–CH₂–CH₃. The allylic carbon is C3 (CH₂). Removing its hydrogen gives the allylic radical CH₂=CH–CH•–CH₃, which is a resonance hybrid:

\[ \mathrm{CH_2{=}CH{-}CH{\bullet}{-}CH_3 \leftrightarrow {\bullet}CH_2{-}CH{=}CH{-}CH_3} \]

The unpaired electron sits on C1 in one resonance form and on C3 in the other — so Br₂ can deliver bromine to **either end**:

Product A (bromine at C3, double bond stays at C1–C2): CH₂=CH–CH(Br)–CH₃ = 3-bromo-1-butene.
Product B (bromine at C1, double bond shifts to C2–C3): BrCH₂–CH=CH–CH₃ = 1-bromo-2-butene.

**Both products form** — they are allylic isomers (positional isomers) of each other. The lesson: whenever an unsymmetrical alkene undergoes allylic bromination, draw both resonance forms of the allylic radical and you will see both possible products. This is a favorite exam pattern.

### Example 3: Contrast addition vs substitution on the same alkene

Propene + Br₂, dark, 0 °C:
\[ \mathrm{CH_2{=}CH{-}CH_3 + Br_2 \rightarrow CH_2Br{-}CHBr{-}CH_3} \]
1,2-dibromopropane — Br₂ adds across the double bond (vicinal dibromide).

Propene + NBS, CCl₄, light:
\[ \mathrm{CH_2{=}CH{-}CH_3 \xrightarrow{NBS} CH_2{=}CH{-}CH_2Br} \]
Allyl bromide — substitution at the allylic position, double bond intact.

Same starting material, same bromine source conceptually, completely different products — the deciding factor is whether free Br₂ is available in high concentration (addition) or kept scarce by NBS (substitution). Knowing which conditions give which outcome is a guaranteed exam question.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Allylic bromination (NBS, light) | Br₂ addition to the alkene (dark) | NBS = substitution at the allylic carbon, double bond preserved; Br₂ = addition across the double bond, dibromide |
| Allylic position | Vinylic position | Allylic = carbon *next to* the C=C; vinylic = carbon *of* the C=C. Bromination happens at allylic, not vinylic |
| Allylic radical | Simple alkyl radical | Allylic radical is resonance-stabilized (delocalized over two carbons), so allylic C–H is weaker and abstraction is faster |
| Two allylic products from unsymmetrical alkenes | A single product | The two resonance ends each accept Br, giving the 1-bromo and 3-bromo isomers |
| NBS as a "source of Br₂" | NBS as the brominating agent itself | NBS slowly generates Br₂ (with HBr); free Br₂ does the radical chemistry — the reagent just controls its concentration |
| "Which product is major?" | "Which product forms?" | With equivalent resonance ends, both products form; don't hunt for a major/minor split that may not exist |

## Quick Review

1. Why is NBS used instead of Br₂ for allylic bromination?
2. What product forms when cyclohexene is treated with NBS and light?
3. Draw (as condensed formulas) both products of allylic bromination of 1-butene, and explain why two form.
4. Write the two propagation steps of the allylic bromination of propene.
5. Why is the allylic C–H bond weaker than an ordinary secondary C–H bond?
6. What would happen if you treated propene with Br₂ in the dark at low temperature instead?

<details>
<summary>Show answers</summary>

1. NBS keeps the concentration of free Br₂ very low (releasing it slowly via reaction with HBr). At low [Br₂], the radical substitution pathway outcompetes the fast ionic addition of Br₂ to the double bond, so the allylic bromide forms instead of the vicinal dibromide.
2. 3-Bromocyclohexene — bromine at the allylic carbon (C3, equivalent to C6), double bond intact.
3. 3-bromo-1-butene (CH₂=CH–CH(Br)–CH₃) and 1-bromo-2-butene (BrCH₂–CH=CH–CH₃). The allylic radical delocalizes the unpaired electron over C1 and C3, and Br can be delivered to either end.
4. (1) Br• + CH₂=CH–CH₃ → HBr + CH₂=CH–CH₂•; (2) CH₂=CH–CH₂• + Br₂ → CH₂=CH–CH₂Br + Br•.
5. Because the allylic radical formed on abstraction is resonance-stabilized — the unpaired electron is delocalized over two carbons, lowering the energy of the product side and hence the bond energy of the C–H being broken.
6. You would get ionic addition: 1,2-dibromopropane (vicinal dibromide), because in the dark the electrophilic addition of Br₂ across the double bond dominates.

</details>

## Related Topics

- Previous: [Preparing Alkyl Halides from Alkanes: Radical Halogenation](02-preparing-alkyl-halides-from-alkanes-radical-halogenation.md)
- Next: [Stability of the Allyl Radical: Resonance Revisited](04-stability-of-the-allyl-radical-resonance-revisited.md)
- Related: [Stability of the Allyl Radical: Resonance Revisited](04-stability-of-the-allyl-radical-resonance-revisited.md), [Halogenation of Alkenes: Addition of X2](../chapter-08-alkenes-reactions-and-synthesis/02-halogenation-of-alkenes-addition-of-x2.md), [Organohalides chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
