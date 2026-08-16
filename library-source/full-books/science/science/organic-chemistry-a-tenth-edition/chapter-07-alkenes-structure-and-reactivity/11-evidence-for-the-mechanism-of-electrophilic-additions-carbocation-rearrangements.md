---
title: "Evidence for the Mechanism of Electrophilic Additions: Carbocation Rearrangements"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "7: Alkenes: Structure and Reactivity"
topic_number: "11"
source: "organic-chemistry.md"
tags:
  - "evidence-for-the-mechanism-of-electrophilic-additions-carbocation-rearrangements"
  - "science"
status: "complete"
---

# Evidence for the Mechanism of Electrophilic Additions: Carbocation Rearrangements

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 7: Alkenes: Structure and Reactivity](../README.md)  
> **Topic:** 11  
> **Source structure:** OpenStax public textbook outline

## Overview

Chemists never see a carbocation directly in an addition reaction — the intermediate is gone in microseconds. How do we know electrophilic additions pass through carbocations? The most compelling evidence is **rearrangement**: some additions produce products whose carbon skeleton is *not* what simple Markovnikov addition to the starting alkene predicts. The only reasonable explanation: a carbocation formed, then rearranged by a 1,2-shift (a hydride or alkyl group migrating from an adjacent carbon) to a more stable cation, before the nucleophile captured it.

This topic reviews the classic cases — HBr + 3-methyl-1-butene and HCl + 3,3-dimethyl-1-butene — and the rules for predicting rearrangements: they occur when a 1,2-shift converts a less stable cation into a more stable one, and they can even expand a small ring. These are not curiosities: they force synthesis planning to avoid cationic intermediates, and they are textbook evidence that the two-step carbocation mechanism is real.

## Why This Matters

Rearrangements are the single best proof that electrophilic addition is stepwise with a cationic intermediate: a one-step, concerted addition would always preserve the original carbon skeleton, and the observed rearranged products rule that out. In synthesis, whenever a tertiary cation can form by a shift, "simple" Markovnikov prediction fails — chemists must either avoid the conditions or exploit the rearrangement deliberately (as in ring-expansion syntheses). In biochemistry, the same 1,2-shift logic is central to terpene biosynthesis, where cations from pyrophosphate esters undergo spectacular skeletal rearrangements. On exams, the skill is recognizing when a shift is possible and predicting the rearranged product.

## Core Concepts

### The classic case: HBr + 3-methyl-1-butene

3-Methyl-1-butene has the structure (CH3)2CH–CH=CH2. Markovnikov addition of HBr predicts the secondary cation (CH3)2CH–CH⁺–CH3 after protonation at the terminal carbon, giving 2-bromo-3-methylbutane. The actual major product is **2-bromo-2-methylbutane**, (CH3)2C(Br)–CH2–CH3. The carbon skeleton changed: the bromine ended up on a carbon that was not even part of the double bond.

The explanation is a **1,2-hydride shift**. The initially formed secondary cation (CH3)2CH–CH⁺–CH3 has a tertiary cation one shift away: if a hydride (H with its electron pair) migrates from the adjacent CH carbon to the cationic carbon, the positive charge moves to that adjacent carbon, which is tertiary — (CH3)2C⁺–CH2–CH3. Tertiary cations are more stable than secondary, so the shift is fast, and bromide captures the tertiary cation:

\[ (\text{CH}_3)_2\text{CH}-\text{CH}=\text{CH}_2 \xrightarrow{\text{H}^+} (\text{CH}_3)_2\text{CH}-\text{CH}^+\text{CH}_3 \xrightarrow{\text{1,2-H}^- \text{ shift}} (\text{CH}_3)_2\text{C}^+\text{CH}_2\text{CH}_3 \xrightarrow{\text{Br}^-} (\text{CH}_3)_2\text{CBrCH}_2\text{CH}_3 \]

The observed product is proof that the cation existed long enough to rearrange — evidence for the stepwise mechanism.

### 1,2-Alkyl shifts: HCl + 3,3-dimethyl-1-butene

Alkyl groups migrate too. Addition of HCl to 3,3-dimethyl-1-butene, (CH3)3C–CH=CH2, initially gives the secondary cation (CH3)3C–CH⁺–CH3. No hydride shift can help — the adjacent carbon (the quaternary center) has no hydrogens — but a **1,2-methyl shift** can: one methyl migrates from the quaternary carbon to the cationic carbon, leaving the positive charge on the quaternary center (now tertiary):

\[ (\text{CH}_3)_3\text{C}-\text{CH}^+\text{CH}_3 \xrightarrow{\text{1,2-CH}_3 \text{ shift}} (\text{CH}_3)_2\text{C}^+(\text{CH}_2\text{CH}_3)\text{CH}_3 \xrightarrow{\text{Cl}^-} \text{rearranged chloride} \]

The product is 2-chloro-2,3-dimethylbutane. Alkyl shifts are generally slower than hydride shifts but occur whenever they lead to a more stable cation.

### When do rearrangements occur?

A rearrangement occurs only when it is downhill — when the *new* cation is more stable than the *old* one: (1) a 1,2-hydride shift converts secondary → tertiary (or primary → secondary); (2) a 1,2-alkyl shift does the same when no hydride is available; (3) shifts can also give resonance-stabilized cations (allylic/benzylic). If the initial cation is already the most stable possible, no rearrangement is seen. Shifts always move a group from the carbon *adjacent* to the cation, because only adjacent groups have orbitals positioned to migrate.

### Ring expansion: the special case

When the cationic carbon is attached to a small ring, an alkyl shift can *expand the ring*. A cyclobutylmethyl-type cation (CH2⁺ attached to cyclobutane) rearranges to the more stable cyclopentyl cation by migration of a ring carbon, relieving ring strain. Carbocations adjacent to strained rings rearrange to ring-expanded cations whenever the product is more stable — a powerful method for building medium rings and a common exam structure puzzle.

### What rearrangements prove about the mechanism

Rearranged products are diagnostic evidence for a **stepwise, two-step mechanism** with a discrete carbocation intermediate (Topics 7 and 8). A concerted addition would give only the direct product — the migrating group would have no time to move before the nucleophile added. The rearranged product shows that (1) the cation forms first, (2) it has a finite lifetime, and (3) it can isomerize to a more stable cation before capture. Together with stereochemical and rate evidence, rearrangements establish the mechanism beyond reasonable doubt.

## ELI-10: Explain Like I'm 10

Imagine a game of musical chairs where a carbon atom loses its chair and is left standing with a "positive" sign. If the person next to it has an extra hydrogen, that hydrogen can slide over, and the positive sign jumps to the neighbor — who has more friends holding chairs, so everyone is happier. Sometimes a whole methyl group slides instead. The players rearrange before the music stops, and the final seating chart proves that the game really happened.

## High-Yield Points

- Rearranged products in HX addition prove a stepwise mechanism with a carbocation intermediate.
- 1,2-hydride shift: H (with its electron pair) migrates from an adjacent carbon to the cationic carbon.
- 1,2-alkyl (methyl) shift: an alkyl group migrates when no hydride is available; generally slower than hydride shift.
- Shifts occur only when they give a more stable cation (e.g., secondary → tertiary, or toward resonance-stabilized cations).
- Classic cases: HBr + 3-methyl-1-butene → 2-bromo-2-methylbutane; HCl + 3,3-dimethyl-1-butene → rearranged 2-chloro-2,3-dimethylbutane.
- Carbocations adjacent to small rings can undergo ring expansion (e.g., cyclobutylmethyl → cyclopentyl cation).
- A concerted mechanism would not produce rearranged skeletons — this is the key logical evidence.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| 1,2-shift | Migration of an atom or group from the carbon adjacent to the cationic carbon to the cation itself. | The elementary step of every carbocation rearrangement. |
| 1,2-hydride shift | Migration of a hydrogen atom with its bonding electrons. | Fastest common rearrangement; converts less stable to more stable cation. |
| 1,2-alkyl shift | Migration of an alkyl group (e.g., methyl) with its bonding electrons. | Occurs when no hydride is available; slower than hydride shift. |
| ring expansion | Skeletal rearrangement that increases ring size by inserting a migrating group into the ring. | Synthetically valuable; relieves ring strain in small rings. |
| stepwise mechanism | A mechanism with discrete intermediates and separate steps. | Rearrangements prove the intermediate exists. |
| carbocation lifetime | The time between cation formation and nucleophile capture. | Long enough for rearrangement when a favorable shift exists. |
| Markovnikov prediction | The product expected from direct carbocation formation without rearrangement. | The "default" prediction that rearrangements can override. |

## Worked Examples

**Example 1 — Predict the product of HBr addition to 3-methyl-1-butene.** Step 1: protonate the terminal carbon of (CH3)2CH–CH=CH2 to give the secondary cation (CH3)2CH–CH⁺–CH3. Step 2: check for a stabilizing shift — the adjacent CH carbon carries one H, so a 1,2-hydride shift gives the tertiary cation (CH3)2C⁺–CH2–CH3 (more stable). Step 3: bromide captures the tertiary cation:

\[ (\text{CH}_3)_2\text{C}^+-\text{CH}_2\text{CH}_3 + \text{Br}^- \rightarrow (\text{CH}_3)_2\text{CBr}-\text{CH}_2\text{CH}_3 \]

Product: 2-bromo-2-methylbutane (rearranged), not the direct Markovnikov bromide.

**Example 2 — Which shift? HCl + 3,3-dimethyl-1-butene.** Protonation gives (CH3)3C–CH⁺–CH3 (secondary). The adjacent carbon (CH3)3C– is quaternary — no hydrogens to migrate, so a hydride shift is impossible. A 1,2-methyl shift migrates one CH3 to the cation, leaving the positive charge on the carbon bearing three carbons: tertiary. Chloride captures it. *Answer:* 2-chloro-2,3-dimethylbutane. Rule: no H available → check for an alkyl shift.

**Example 3 — Does a shift happen? 2-methyl-2-butene + HBr.** Protonation gives the tertiary cation (CH3)2C⁺–CH2–CH3 directly. Any 1,2-shift would move the charge to a secondary carbon — less stable — so no shift occurs. *Answer:* direct Markovnikov product (2-bromo-2-methylbutane), no rearrangement, because the initial cation is already the most stable available.

**Example 4 — Ring expansion.** Draw the reasoning for a cation CH2⁺ attached to cyclobutane. The cationic carbon is adjacent to two ring carbons. A 1,2-alkyl shift of one ring carbon migrates into the cation, forming a five-membered ring with the positive charge on a ring carbon — the cyclopentyl cation. *Answer:* the rearrangement relieves cyclobutane's ring strain and gives a more stable (larger-ring) cation, so ring expansion is favorable. This logic extends to other small rings.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Hydride shift | proton transfer | A hydride migrates with its two electrons (H⁻) and leaves a cation behind; a proton (H⁺) transfer moves a bare nucleus to a lone pair. |
| 1,2-shift | shift of the leaving group | The migration happens *after* the cation forms, from the adjacent carbon — it is not part of the initial protonation step. |
| Rearrangement always happens | rearrangement never happens | Shifts occur only when the product cation is more stable; symmetric or already-most-stable cations do not rearrange. |
| Alkyl shift speed | hydride shift speed | Hydride shifts are generally faster (smaller migrating group); alkyl shifts occur only when no hydride is available. |
| Rearranged product | violation of Markovnikov | Rearrangements still follow carbocation-stability logic — the final cation is the most stable one reachable; the initial protonation still obeyed Markovnikov. |
| Ring expansion product | direct alkyl shift product | In ring expansion the migrating group is part of the ring, enlarging it; in a plain alkyl shift the ring size is unchanged. |

## Quick Review

1. Why does the formation of 2-bromo-2-methylbutane from 3-methyl-1-butene prove a carbocation intermediate?
2. Write the sequence of events in the hydride-shift rearrangement of the cation from 3-methyl-1-butene.
3. When is a 1,2-alkyl shift preferred over a 1,2-hydride shift?
4. Predict whether HBr addition to 2-methyl-2-butene gives a rearranged product, and explain.
5. What is a ring expansion, and why is it favorable for small rings?
6. Why would a concerted addition mechanism be unable to produce rearranged products?

<details>
<summary>Answers</summary>

1. The product's skeleton differs from the starting alkene's: the bromine sits on a carbon not part of the original double bond. Only a cation that lived long enough to undergo a 1,2-hydride shift could produce that skeleton, proving a discrete carbocation intermediate exists between protonation and capture.
2. (1) Protonation at the terminal carbon gives the secondary cation (CH3)2CH–CH⁺–CH3; (2) a hydride migrates from the adjacent CH carbon, moving the positive charge to that carbon; (3) the new cation is tertiary, (CH3)2C⁺–CH2CH3; (4) Br⁻ captures it, giving 2-bromo-2-methylbutane.
3. When the carbon adjacent to the cation has no hydrogen available for migration — e.g., when it is quaternary — an alkyl (methyl) group migrates instead, provided the product cation is more stable.
4. No. Protonation gives the tertiary cation directly (the most stable cation reachable); any shift would move the charge to a secondary carbon, which is downhill in the wrong direction, so the direct Markovnikov product (2-bromo-2-methylbutane) forms.
5. A ring expansion is a 1,2-alkyl shift in which a ring carbon migrates into the cation, enlarging the ring by one atom (e.g., cyclobutylmethyl → cyclopentyl cation). It is favorable for small rings because it relieves ring strain while giving a more stable cation.
6. A concerted addition is a single step: protonation, bond formation, and nucleophile capture happen in one motion with no time for an atom to migrate; rearranged skeletons can only arise if a cation exists as a discrete intermediate with a finite lifetime.

</details>

## Related Topics

- [Chapter 7 README](../README.md)
- [7. Electrophilic Addition Reactions of Alkenes](07-electrophilic-addition-reactions-of-alkenes.md)
- [8. Orientation of Electrophilic Additions: Markovnikov's Rule](08-orientation-of-electrophilic-additions-markovnikov-s-rule.md)
- [9. Carbocation Structure and Stability](09-carbocation-structure-and-stability.md)
- [10. The Hammond Postulate](10-the-hammond-postulate.md)
- [Chapter 6, Topic 10: Describing a Reaction: Intermediates](../chapter-06-an-overview-of-organic-reactions/10-describing-a-reaction-intermediates.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: none beyond standard carbocation stability ordering; the example products follow the classic rearrangement literature reproduced in standard textbooks.
- Last updated: 2026-08-16
