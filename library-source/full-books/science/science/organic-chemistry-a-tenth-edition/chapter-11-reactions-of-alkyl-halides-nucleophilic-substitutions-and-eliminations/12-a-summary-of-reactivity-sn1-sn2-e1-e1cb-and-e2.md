---
title: "A Summary of Reactivity: SN1, SN2, E1, E1cB, and E2"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations"
topic_number: "12"
source: "organic-chemistry.md"
tags:
  - "a-summary-of-reactivity-sn1-sn2-e1-e1cb-and-e2"
  - "science"
status: "complete"
---

# A Summary of Reactivity: SN1, SN2, E1, E1cB, and E2

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations](../README.md)  
> **Topic:** 12  
> **Source structure:** OpenStax public textbook outline

## Overview

An alkyl halide carries a halogen (Cl, Br, I, or sometimes F) on an sp³ carbon. When it meets a reagent, five mechanisms can compete: two substitutions (SN2 and SN1), two eliminations (E2 and E1), and one special elimination (E1cB). Which mechanism wins the race is decided by four dials: the substrate's structure, the reagent's identity, the solvent, and the temperature.

This topic is the decision map. Instead of memorizing five separate sets of facts, you learn one question at each fork: *Can this substrate make a stable carbocation? Is the reagent a strong nucleophile or a strong base? Is the solvent protic or aprotic? Am I heating?* Answer those four questions and the mechanism — and therefore the major product — follows.

## Why This Matters

Choosing between substitution and elimination is the most common prediction problem in organic chemistry. In the lab, it decides whether you isolate the alkylated product you want or an unwanted alkene. In medicinal chemistry, SN2 reactions build C–N and C–O bonds in drug molecules while competing elimination wastes material. On exams, "predict the major product" questions are built directly from this decision map, and most wrong answers come from choosing a mechanism the substrate cannot support (e.g., SN1 on a 1° halide). Mastering this summary turns five confusing mechanisms into one flowchart.

## Core Concepts

### The five mechanisms at a glance

| Mechanism | Steps | Intermediate | Rate law | Stereochemistry | Typical substrate |
|---|---|---|---|---|---|
| SN2 | One (concerted) | None | \( \text{rate} = k[\text{RX}][\text{Nu}^-] \) | Inversion | Methyl, 1° |
| SN1 | Two | Carbocation | \( \text{rate} = k[\text{RX}] \) | Racemization | 3° |
| E2 | One (concerted) | None | \( \text{rate} = k[\text{RX}][\text{B}^-] \) | Anti-periplanar H | 1°, 2°, 3° |
| E1 | Two | Carbocation | \( \text{rate} = k[\text{RX}] \) | Zaitsev alkene | 3° |
| E1cB | Two | Carbanion | \( \text{rate} = k[\text{RX}][\text{B}^-] \) | Zaitsev alkene | Poor LG + acidic β-H |

The rate laws are the first clue: SN2 and E2 are bimolecular (both reagents in the slow step), while SN1 and E1 are unimolecular (only the alkyl halide). That difference drives the solvent and concentration effects.

### Substrate structure: the first fork

The substrate decides which mechanisms are even possible:

- **Methyl and 1° halides:** no stable carbocation, so SN1 and E1 are out. Expect **SN2** (or E2 with a strong, bulky base).
- **2° halides:** the middle ground. Strong nucleophile → SN2; strong bulky base → E2; weak nucleophile in protic solvent → SN1/E1 (sluggish).
- **3° halides:** SN2 is blocked by steric hindrance — backside attack cannot reach the crowded carbon. Expect **SN1/E1** with weak nucleophiles, or **E2** with strong bases.

Carbocation stability follows \(3° > 2° > 1° > \text{methyl}\); SN1/E1 rates track that order.

### Nucleophile or base: what the reagent wants

A reagent can be good at both jobs, but its *identity* tips the scale:

- **Strong nucleophile, weak base** (N₃⁻, I⁻, HS⁻, CN⁻): substitution wins → SN2.
- **Strong, bulky base** (tert-butoxide, \((CH_3)_3CO^-\)): elimination wins → E2, often giving the *less* substituted (Hofmann) alkene because the bulky base cannot reach the hindered β-hydrogen.
- **Strong, small base** (HO⁻, CH₃O⁻): E2 on 2°/3° substrates, especially with heat.
- **Weak nucleophile, weak base** (H₂O, ROH): SN1/E1 on 3° substrates (solvolysis).

### Solvent and temperature: the fine-tuning dials

Polar **aprotic** solvents (DMSO, DMF, acetone) leave the nucleophile "naked" — they speed SN2 dramatically. Polar **protic** solvents (water, alcohols) solvate anions, slowing SN2, but stabilize the carbocation and leaving group, favoring SN1/E1.

Temperature: elimination has a higher activation energy than substitution, so **heat favors E2/E1** — that is why "reflux" appears in elimination procedures.

### The E1cB special case

E1cB (elimination, unimolecular, conjugate base) runs in the opposite order from E1: base removes the β-hydrogen **first**, forming a carbanion, then the leaving group departs. It matters when the leaving group is poor (F, OH, OR) but the β-H is unusually acidic — for example, next to a carbonyl, nitro, or cyano group. Resonance stabilizes the anion, so a strong base can form it even without a good leaving group.

## ELI-10: Explain Like I'm 10

An alkyl halide is like a Lego brick with a handle (the halogen). SN2 is a friend yanking the handle and snapping a new piece on from behind in one move — the brick flips over. SN1 is the handle falling off by itself, leaving an empty peg (carbocation), then someone gluing on a new piece. E2 is someone pushing a neighboring peg out while the handle falls, making a bridge. Whether you get a swap or a bridge depends on how crowded the brick is, how strong the tools are, and whether you heat the table.

## High-Yield Points

- **SN2/E2 = bimolecular** (rate depends on both reagents); **SN1/E1 = unimolecular** (rate depends only on the alkyl halide).
- **Methyl/1° → SN2** (or E2 with bulky base); **3° → SN1/E1/E2**; **2° → whichever reagent you bring**.
- **Strong nucleophile → substitution; strong base → elimination; heat → elimination.**
- **Polar aprotic solvent speeds SN2; polar protic solvent favors SN1/E1.**
- SN2 gives **inversion**; SN1 gives **racemization**; E2 requires **anti-periplanar** geometry of H and leaving group.
- **Zaitsev's rule:** the more substituted (more stable) alkene is usually the major E2/E1 product — unless a bulky base forces the Hofmann (less substituted) product.
- **E1cB** needs a poor leaving group *plus* an acidic β-H; watch for carbonyl/nitro/cyano neighbors.
- Units check: for \(\text{rate} = k[\text{RX}][\text{Nu}^-]\), \(k\) must have units \(\text{M}^{-1}\text{s}^{-1}\) so that \((\text{M}^{-1}\text{s}^{-1})(\text{M})(\text{M}) = \text{M}\,\text{s}^{-1}\).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| SN2 | One-step substitution: nucleophile attacks from behind as the leaving group departs | Gives inverted stereochemistry; fastest on unhindered carbons |
| SN1 | Two-step substitution through a carbocation | Gives racemic product; needs a stable carbocation (3°) |
| E2 | One-step elimination: base removes β-H as the leaving group leaves | The dominant elimination with strong bases |
| E1 | Two-step elimination through a carbocation | Competes with SN1 under solvolysis conditions |
| E1cB | Elimination where base deprotonates β-C *before* the leaving group departs | Explains eliminations with poor leaving groups |
| Carbocation | Carbon with six valence electrons and a positive charge | Stability 3° > 2° > 1° decides SN1/E1 feasibility |
| Carbanion | Carbon with a lone pair and negative charge | Key intermediate in E1cB |
| Leaving group | Fragment that departs with the electron pair (I⁻, Br⁻, Cl⁻, H₂O) | Better leaving group → faster reaction |
| Anti-periplanar | H and leaving group arranged 180° apart in the E2 transition state | Required geometry for a clean E2 |
| Zaitsev's rule | More substituted alkene forms preferentially | Predicts the major elimination product |
| Hofmann product | Less substituted alkene, favored by bulky bases | The exception to Zaitsev's rule |
| Solvolysis | Reaction where the solvent acts as the nucleophile | Typical SN1/E1 condition (ethanol, water) |

## Worked Examples

### Example 1: 2-bromopropane + sodium ethoxide (predict the major product)

**Setup.** Substrate: 2-bromopropane, \((CH_3)_2CH\text{Br}\) — a 2° halide. Reagent: ethoxide, \(CH_3CH_2O^-\), a strong base *and* decent nucleophile. Solvent: ethanol (protic). Temperature: reflux (heat).

**Reasoning.** 2° substrate can go SN2 or E2; a strong base plus heat pushes the balance toward E2. The β-hydrogens sit on two equivalent methyl groups, so removal gives propene.

\[ \text{CH}_3\text{CHBrCH}_3 + \text{CH}_3\text{CH}_2\text{O}^- \longrightarrow \text{CH}_3\text{CH}=\text{CH}_2 + \text{CH}_3\text{CH}_2\text{OH} + \text{Br}^- \]

**Mechanism, in words:** ethoxide approaches a β-hydrogen on either methyl; in one concerted step the C–H bond breaks as the C1–C2 π bond forms while bromide departs and the H–O bond forms. Product: propene (only one alkene possible — no Zaitsev choice needed). The minor path is SN2, giving ethyl isopropyl ether.

**Answer:** major product = **propene**, via **E2**.

### Example 2: tert-butyl bromide + methanol (solvolysis)

**Setup.** Substrate: \((CH_3)_3C\text{Br}\) — 3°. Reagent: methanol (weak nucleophile, weak base, protic solvent). No added base, no heat.

**Reasoning.** 3° cannot do SN2 (steric). Methanol is too weak a base for a clean E2. So the reaction ionizes: SN1 and E1 compete from the same tert-butyl cation.

**Mechanism, in words:** the C–Br bond breaks heterolytically to give the tert-butyl carbocation and bromide (slow step). Methanol then either captures the cation (SN1 → tert-butyl methyl ether) or removes a β-hydrogen (E1 → 2-methylpropene). The alkene is favored because the cation is very crowded; the major product is 2-methylpropene (Zaitsev product — the only alkene possible here).

\[ (CH_3)_3C^+ + \text{CH}_3\text{OH} \longrightarrow (CH_3)_3\text{COCH}_3 + \text{H}^+ \ \ (\text{minor, SN1}) \]

\[ (CH_3)_3C^+ + \text{CH}_3\text{OH} \longrightarrow (CH_3)_2\text{C}=\text{CH}_2 + \text{CH}_3\text{OH}_2^+ \ \ (\text{major, E1}) \]

**Answer:** major product = **2-methylpropene**, via **E1** (with tert-butyl methyl ether as the minor SN1 product).

### Example 3: E1cB — base-induced elimination of an alkyl fluoride next to a carbonyl

**Setup.** Consider 3-fluorobutan-2-one, \(CH_3COCH(F)CH_3\), treated with a strong base. Fluoride is a terrible leaving group, so neither E2 nor E1 runs easily — the C–F bond will not break in a concerted step.

**Reasoning.** The hydrogen on the fluorine-bearing carbon sits α to the carbonyl, so it is unusually acidic: removing it gives a carbanion stabilized by resonance with the C=O (an enolate). A strong base can form that carbanion even though fluoride is a poor leaving group.

**Mechanism, in words:** base removes the acidic α-proton to form the enolate (slow, reversible step — the carbanion intermediate); then the C–F bond breaks, expelling fluoride and forming the C=C double bond conjugated with the carbonyl. The product is but-3-en-2-one (methyl vinyl ketone), an α,β-unsaturated ketone.

**Answer:** elimination proceeds through a **carbanion (enolate) intermediate** — the signature of E1cB, not E2.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| SN1 and SN2 | Two substitution mechanisms | SN2 is one step, bimolecular, inverts; SN1 is two steps, unimolecular, racemizes |
| SN2 on 3° halides | A viable reaction | Never: backside attack is blocked by the alkyl groups |
| E1 and E1cB | Two elimination mechanisms | E1 forms a carbocation first; E1cB forms a carbanion first |
| Zaitsev vs Hofmann product | Which alkene is major | Normal bases → Zaitsev (more substituted); bulky bases → Hofmann (less substituted) |
| Strong base vs strong nucleophile | The same thing | Bases grab protons (elimination); nucleophiles attack carbon (substitution); bulky reagents favor elimination |
| "Rate depends on both" | Only for bimolecular paths | SN1/E1 rates ignore reagent concentration entirely — a classic test trap |
| Protic vs aprotic | Minor detail | Protic solvates anions (slows SN2); aprotic exposes the nucleophile (speeds SN2) |

## Quick Review

1. What is the rate law for SN2, and what does that imply about doubling the nucleophile concentration?
<details>
<summary>Answer</summary>
\( \text{rate} = k[\text{RX}][\text{Nu}^-] \). Doubling \([\text{Nu}^-]\) doubles the rate — the nucleophile appears in the rate-determining step.
</details>

2. Why does tert-butyl bromide never react by SN2?
<details>
<summary>Answer</summary>
Steric hindrance: the three methyl groups block backside attack at the central carbon, so the nucleophile cannot reach the reaction site.
</details>

3. A 1° alkyl bromide reacts with potassium tert-butoxide in tert-butanol. Which mechanism and which alkene?
<details>
<summary>Answer</summary>
E2, because tert-butoxide is a strong, bulky base that cannot act as a good SN2 nucleophile. With 1° substrates the Zaitsev and Hofmann products are often identical or the less-substituted alkene dominates.
</details>

4. What stereochemical outcome distinguishes SN2 from SN1?
<details>
<summary>Answer</summary>
SN2 gives inversion of configuration at the reacting carbon; SN1 gives racemization (both enantiomers) because attack can occur from either face of the planar carbocation.
</details>

5. Which conditions favor E1 over E2?
<details>
<summary>Answer</summary>
A substrate that forms a stable carbocation (3°), a weak base, a protic solvent, and no strong base added — classic solvolysis conditions.
</details>

6. What structural feature makes a substrate prone to E1cB instead of E2?
<details>
<summary>Answer</summary>
A poor leaving group (F, OH, OR) combined with an acidic β-hydrogen, usually from an adjacent electron-withdrawing group such as a carbonyl (enolate stabilization) — the base must be able to form the carbanion first.
</details>

## Related Topics

- [The SN2 Reaction](02-the-sn2-reaction.md)
- [Characteristics of the SN2 Reaction](03-characteristics-of-the-sn2-reaction.md)
- [The SN1 Reaction](04-the-sn1-reaction.md)
- [Characteristics of the SN1 Reaction](05-characteristics-of-the-sn1-reaction.md)
- [Elimination Reactions: Zaitsev's Rule](07-elimination-reactions-zaitsev-s-rule.md)
- [The E2 Reaction and the Deuterium Isotope Effect](08-the-e2-reaction-and-the-deuterium-isotope-effect.md)
- [The E1 and E1cB Reactions](10-the-e1-and-e1cb-reactions.md)
- [Chapter 11 README](../README.md)
