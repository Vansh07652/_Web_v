---
title: "The E1 and E1cB Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "the-e1-and-e1cb-reactions"
  - "science"
status: "complete"
---

# The E1 and E1cB Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

Not every elimination is concerted. **E1** (unimolecular elimination) and **E1cB** (unimolecular elimination from the conjugate base) are stepwise mechanisms that bracket E2. In **E1**, the leaving group departs *first* to give a carbocation, and a weak base then removes a β-hydrogen; the slow step involves only the substrate, so the reaction is first order:

\[
\text{rate} = k[\text{RX}]
\]

In **E1cB**, the base removes a β-hydrogen *first* to give a carbanion (often an enolate), and the leaving group departs second; the slow deprotonation step involves the base, so the overall rate is second order:

\[
\text{rate} = k[\text{RX}][\text{base}]
\]

The "cB" records that the key intermediate is the substrate's **conjugate base**. E1cB needs an acidic β-hydrogen (activated by an EWG) and tolerates a poor leaving group; E1 needs a good leaving group and a cation-stabilizing substrate.

## Why This Matters

E1 competes with S\(_N\)1 at every step — both share the same carbocation — so predicting alkene versus substitution products is a recurring exam question. E1cB, meanwhile, is the elimination mechanism that matters most in biology: enzymes stabilize carbanions and enolates with metal ions, hydrogen bonding, and cofactors, using deprotonation-then-leaving-group-loss pathways for dehydrations and decarboxylations. Knowing which mechanism operates lets you predict rate laws, isotope effects, rearrangements, and stereochemistry.

## Core Concepts

### E1: ionization first, deprotonation second

E1 proceeds in two steps. **Step 1 (slow, rate-determining):** the leaving group departs with its electron pair, forming a carbocation. **Step 2 (fast):** a base — the solvent or a weak base such as ethanol — removes a β-hydrogen and the C–H electrons form the alkene. The rate law is first order because only the substrate appears in the slow step. Conditions mirror S\(_N\)1: good leaving group, cation-stabilizing substrate (tertiary > secondary), polar protic solvent, weak base, and usually heat.

Because a carbocation forms, **rearrangements are possible**: a hydride or alkyl shift from an adjacent carbon can convert a less stable cation into a more stable one before deprotonation, so products reflect the rearranged cation. E1 still obeys Zaitsev's rule, but the cation that deprotonates may differ from the initial one.

### E1 versus S\(_N\)1: the same intermediate, different fates

E1 and S\(_N\)1 share the carbocation. Whether it eliminates or is trapped depends on conditions: more base or higher temperature favors E1; a more nucleophilic, less basic solvent favors S\(_N\)1; more β-hydrogens favor elimination.

### E1cB: deprotonation first, leaving group second

E1cB also has two steps, in reverse order. **Step 1 (usually rate-determining):** a base removes a β-hydrogen to form a **carbanion** — in carbonyl compounds, an **enolate** — stabilized by the electron-withdrawing group. **Step 2:** the electron pair reforms a π bond as the leaving group departs.

E1cB is favored when the β-hydrogen is unusually acidic and the leaving group is poor. Electron-withdrawing groups (carbonyl, nitro, cyano, sulfonyl) lower the β-H pKa into a range a base can reach; poor leaving groups (OH, OR, NR\(_3^+\), sometimes F) depart slowly, so deprotonation comes first. In arrow-pushing terms: the base's electron pair forms the H–base bond; the C–H pair moves onto the α-carbon (or into the carbonyl π system) to give the carbanion/enolate, whose lone pair then forms the C=C bond as the leaving group takes the C–X pair.

### Telling the mechanisms apart

- **Kinetics:** E2 and E1cB are second order overall; E1 is first order.
- **Isotope effect:** E2 and (usually) E1cB show a primary KIE on the β-H; E1 shows only a small secondary KIE.
- **Intermediates:** E1 has a carbocation; E1cB has a carbanion/enolate (no rearrangements).
- **Substrate preference:** E1 wants a tertiary cation; E1cB wants an acidic β-H; E2 wants a strong base and good LG in one step.

## ELI-10: Explain Like I’m 10

> E1 is a two-step fall: the handle (leaving group) pops off first, leaving a wobbly piece that tips over and drops a hydrogen to make the double bond. E1cB does the opposite: it pulls a hydrogen off first, making a temporary negative piece, and then the handle falls off. Order matters.

## High-Yield Points

- E1: two steps, carbocation intermediate, first order: \(\text{rate} = k[\text{RX}]\). Favored by good LG, 3° substrate, weak base, polar protic solvent, heat.
- E1cB: two steps, carbanion/enolate intermediate, overall second order: \(\text{rate} = k[\text{RX}][\text{base}]\). Favored by acidic β-H and poor LG.
- E1 and S\(_N\)1 share the same carbocation; base/heat favor E1, nucleophilic solvent favors S\(_N\)1.
- Hydride/alkyl shifts can occur before E1 deprotonation — products may come from the rearranged cation.
- E1cB shows a primary KIE when deprotonation is rate-determining; E1 shows only a small secondary KIE.
- E1cB is the mechanism of most enzymatic eliminations.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| E1 reaction | Two-step elimination: leaving group leaves first (slow), then base removes a β-H | For 3° substrates with weak bases; first order |
| E1cB reaction | Two-step elimination: base removes a β-H first (slow), then the leaving group leaves | For acidic β-H and poor leaving groups; second order overall |
| carbocation | A carbon with a positive charge and six valence electrons | The E1 intermediate; its stability and rearrangements control products |
| carbanion / enolate | A carbon bearing a negative charge; enolates are carbanions adjacent to a carbonyl | The E1cB intermediate, stabilized by EWGs |
| rate-determining step | The slow step that sets the overall rate | Determines the rate law and which bonds show a primary KIE |
| electron-withdrawing group (EWG) | A substituent (C=O, NO₂, CN, SO₂R) that stabilizes negative charge | Makes β-hydrogens acidic enough for E1cB |
| rearrangement | Migration of a hydride or alkyl group to a carbocation | Can change the E1 product set |

## How It Works / Step-by-Step Process

1. Survey the substrate: what β-H, what leaving group, what base?
2. Good LG plus stable cation (3°) → E1/S\(_N\)1: write the cation, check for shifts, then deprotonate.
3. Acidic β-H or poor LG → E1cB: deprotonate first, then eject the LG; strong base plus strong LG → E2.

## Worked Example: tert-Butyl Chloride in Ethanol

Heating *tert*-butyl chloride, \((\text{CH}_3)_3\text{CCl}\), in ethanol (weak, polar protic) favors E1/S\(_N\)1 chemistry. Step 1: chloride leaves (slow), giving the tertiary cation \((\text{CH}_3)_3\text{C}^+\). Step 2: ethanol (weak base) removes a β-H from a methyl group, forming the double bond:

\[
(\text{CH}_3)_3\text{CCl} \xrightarrow{\text{EtOH, } \Delta} \underset{\text{2-methylpropene}}{(\text{CH}_3)_2\text{C}{=}\text{CH}_2} + \text{HCl}
\]

The rate law is first order: \(\text{rate} = k[(\text{CH}_3)_3\text{CCl}]\) — base concentration never enters. Expect also a substitution product (*tert*-butyl ethyl ether) from trapping of the cation; all nine methyl hydrogens are equivalent.

## Worked Example: E1 with a Hydride Shift

Consider 2-bromo-3-methylbutane, \(\text{CH}_3\text{CH}(\text{Br})\text{CH}(\text{CH}_3)\text{CH}_3\), under E1 conditions. Step 1: bromide leaves, giving a **secondary** carbocation at C2. Step 2 (fast): a hydride shifts from C3 to C2, producing a **tertiary** carbocation. Step 3: a β-H is removed, giving 2-methyl-2-butene as major:

\[
\text{CH}_3\text{CH}(\text{Br})\text{CH}(\text{CH}_3)_2 \xrightarrow{\text{weak base, } \Delta} \text{CH}_3\text{CH}{=}\text{C}(\text{CH}_3)_2 + \text{HBr}
\]

Lesson: predict the *rearranged* cation before the alkene — deprotonating the initial secondary cation would predict different, less substituted alkenes and miss the major product.

## Worked Example: E1cB with 4-Chloro-2-butanone

4-Chloro-2-butanone, \(\text{ClCH}_2\text{CH}_2\text{C}({=}\text{O})\text{CH}_3\), has an acidic α-hydrogen (pKa ≈ 19–20) and a modest leaving group (β-chloride). With a base, step 1 deprotonates the α-carbon, giving an **enolate** stabilized by resonance:

\[
\text{ClCH}_2\text{CH}_2\text{C}({=}\text{O})\text{CH}_3 \xrightarrow{\text{B}^-} [\text{ClCH}_2\text{CH}^- \text{C}({=}\text{O})\text{CH}_3 \leftrightarrow \text{ClCH}_2\text{CH}{=}\text{C}(\text{O}^-)\text{CH}_3]
\]

Step 2: the enolate's electron pair forms the C=C bond as chloride departs, giving **methyl vinyl ketone** (but-3-en-2-one):

\[
[\text{enolate}] \longrightarrow \text{CH}_2{=}\text{CH}\text{C}({=}\text{O})\text{CH}_3 + \text{Cl}^-
\]

The overall rate is second order, with a primary KIE on the α-H because deprotonation is slow. A strong, non-selective base could instead give E2 or substitution — E1cB wins with an acidic β-H and a mediocre leaving group.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| E1 (carbocation) | E1cB (carbanion) | E1 ionizes the LG first; E1cB deprotonates first. Rate laws differ (first vs second order) |
| E1cB | E2 | E1cB is stepwise through an enolate/carbanion; E2 is concerted; E1cB tolerates poor LG |
| “E1 means weak base is fine” | E1 conditions | It also needs a *good leaving group* and a cation-stabilizing substrate |
| “E1cB needs a strong base like hydroxide” | E1cB base requirements | It needs a base able to remove an *acidic* β-H; enzymes use general bases |
| Zaitsev product always forms in E1 | Rearrangement caveat | Predict the most stable cation before applying Zaitsev; shifts can change the product set |
| “Primary KIE proves E2” | KIE interpretation | It proves the C–H bond breaks in the slow step — true for E2 *and* E1cB |

## Quick Review

1. Write the E1 rate law and explain why it is first order.
2. Write the E1cB rate law. What intermediate does E1cB form?
3. What conditions favor E1 over S\(_N\)1, given the same carbocation?
4. Why must you check for hydride/alkyl shifts before predicting the E1 alkene product?
5. What structural feature makes a substrate a good E1cB candidate?
6. What would a primary isotope effect on the β-H tell you about an elimination's mechanism?

<details>
<summary>Show answers</summary>

1. Rate = \(k[\text{RX}]\): the slow step is unimolecular loss of the leaving group, so only substrate concentration appears.
2. Rate = \(k[\text{RX}][\text{base}]\); the intermediate is the substrate's conjugate base — a carbanion, typically an enolate with a carbonyl present.
3. More base and/or heat favor E1; a nucleophilic solvent that traps the cation quickly favors S\(_N\)1.
4. A less stable cation can rearrange (hydride or alkyl shift) before deprotonation; the alkene then comes from the rearranged cation.
5. An acidic β-hydrogen (activated by an EWG such as C=O, NO₂, CN, SO₂R) and a leaving group poor enough for deprotonation to come first.
6. It indicates the C–H bond breaks in the rate-determining step — consistent with E2 or E1cB, not E1 (whose slow step is ionization).

</details>

## Related Topics

- Previous: [The E2 Reaction and Cyclohexane Conformation](09-the-e2-reaction-and-cyclohexane-conformation.md)
- Next: [Biological Elimination Reactions](11-biological-elimination-reactions.md)
- Related: [Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
