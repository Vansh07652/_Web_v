---
title: "Stability of Alkenes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "7: Alkenes: Structure and Reactivity"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "stability-of-alkenes"
  - "science"
status: "complete"
---

# Stability of Alkenes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 7: Alkenes: Structure and Reactivity](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Not all alkenes are created equal. Isomers with the same formula can differ in energy by several kilocalories per mole, and that energy difference controls which alkene forms preferentially in reactions, which products dominate elimination chemistry, and how far equilibria shift. The single most useful pattern is **substitution**: the more alkyl groups attached to the double-bond carbons, the more stable the alkene. A second pattern is geometry: trans alkenes are more stable than their cis isomers.

Stability is measured experimentally through the **heat of hydrogenation**, \(\Delta H^\circ_\text{hyd}\) — the heat released when an alkene reacts with H2 to give the corresponding alkane. Because every alkene is converted to the same kind of saturated product, comparing these heats reveals the relative energies of the alkenes themselves. This topic explains the measurement, the substitution trend, the cis/trans effect, the electronic reason (hyperconjugation), and the practical consequences for reaction outcomes.

## Why This Matters

Stability explains which products reactions actually deliver. In elimination reactions (Chapter 8 and 11), the major alkene product is the most substituted one — Zaitsev's rule — precisely because the more substituted alkene is more stable; the product distribution is an energy story. In industry, knowing alkene stability guides which isomers survive cracking and equilibration conditions in refineries. Heats of hydrogenation are also a practical thermochemistry tool: they measure the energy content differences among fuel-grade olefins and feedstocks. And in biology, the cis/trans stability difference underlies why trans fats are thermodynamically favored in hydrogenation processes — the same chemistry that shapes dietary fats. Finally, stability data connect directly to the Hammond postulate (Topic 10): the more stable alkene is the lower-energy starting point, and reaction rates and equilibria both read that difference.

## Core Concepts

### Measuring stability: the heat of hydrogenation

Hydrogenation adds H2 across the double bond to give an alkane:

\[ \text{C}_n\text{H}_{2n} + \text{H}_2 \xrightarrow{\text{Pt, Pd, or Ni catalyst}} \text{C}_n\text{H}_{2n+2} \]

The reaction is exothermic, and the heat released at constant pressure, \(\Delta H^\circ_\text{hyd}\), is measured calorimetrically (the catalyst does not change the thermodynamics). Here is the key reasoning: if two alkene isomers hydrogenate to **the same alkane**, the one that releases more heat started at higher energy — so **a more negative \(\Delta H^\circ_\text{hyd}\) means a less stable alkene**. For the four C4H8 isomers, hydrogenation of each gives butane:

| Alkene | Substitution | \(\Delta H^\circ_\text{hyd}\) (kcal/mol) |
|---|---|---|
| 1-butene (CH2=CH–CH2–CH3) | monosubstituted | −30.3 |
| cis-2-butene (cis-CH3–CH=CH–CH3) | disubstituted | −28.6 |
| 2-methylpropene (CH2=C(CH3)2) | disubstituted | −28.4 |
| trans-2-butene (trans-CH3–CH=CH–CH3) | disubstituted | −27.6 |
| 2-methyl-2-butene (CH3–C(CH3)=CH–CH3) | trisubstituted | −26.9 |

(Values are classic literature values, Kistiakowsky and coworkers, reproduced in standard textbooks; approximate to ±0.1 kcal/mol.)

### The substitution trend: more alkyl groups, more stability

Reading the table from top to bottom, stability increases as alkyl substitution increases: monosubstituted 1-butene (−30.3) is the least stable; trisubstituted 2-methyl-2-butene (−26.9) is the most stable of the group. The general order is:

\[ \text{tetrasubstituted} > \text{trisubstituted} > \text{disubstituted} > \text{monosubstituted} > \text{ethene} \]

Each additional alkyl group lowers the energy by roughly 1.5–3 kcal/mol, and the effect is additive. The electronic origin is **hyperconjugation**: alkyl groups stabilize the double bond because C–H \(\sigma\) bonding electrons can delocalize into the empty \(\pi^*\) orbital of the alkene. More alkyl groups = more \(\sigma \rightarrow \pi^*\) donation = a lower-energy, more stable \(\pi\) system. (Alkyl groups are also weakly electron-donating by induction, which contributes.)

### cis vs trans: the steric penalty

Among disubstituted alkenes, the trans isomer is consistently ~1 kcal/mol more stable than the cis. For 2-butene the difference is exactly:

\[ \Delta H^\circ_\text{hyd}(\text{cis}) - \Delta H^\circ_\text{hyd}(\text{trans}) = (-28.6) - (-27.6) = -1.0\ \text{kcal/mol} \]

In cis-2-butene, the two methyl groups crowd each other on the same side of the double bond; their van der Waals repulsion (steric strain) raises the energy. The trans isomer places the methyls on opposite sides, relieving that strain. The same reasoning applies to any cis/trans pair: trans is the lower-energy geometry.

### Reading the table: substitution vs geometry

Two subtle points follow from the data. First, 2-methylpropene — which has **two** methyl groups but both on the same carbon — is a disubstituted alkene, not trisubstituted, and its heat of hydrogenation (−28.4) places it between cis-2-butene and trans-2-butene: it is more stable than the cis isomer but less stable than the trans isomer. Second, the cis/trans penalty (~1 kcal/mol) is smaller than the substitution bonus per alkyl group (~1.5–3 kcal/mol), so a more substituted cis alkene can easily be more stable than a less substituted trans alkene. Stability arguments must always count substitution first, geometry second.

### Consequences for reactions

Stability dictates product choice in two classic settings. In acid-catalyzed dehydration of alcohols and in E2 eliminations, the major alkene is the most substituted one (Zaitsev's rule) — the reaction preferentially forms the most stable alkene. In acid-catalyzed alkene equilibration (treatment with acid can isomerize double bonds), the equilibrium shifts toward the more substituted, more stable alkene. Whenever a reaction can form two alkenes, rank them by substitution and by cis/trans before predicting the product.

## ELI-10: Explain Like I’m 10

Think of the double bond as a tightrope walker. Each alkyl group is a helper holding a support rope: more helpers, steadier walker — more stable. If two helpers stand on the same side of the rope, they bump elbows (cis, unstable); if one stands on each side, they don’t (trans, stable). And you can measure "steadiness" by how much energy the walker gives off when finally helped down to the ground: the shakier the walker, the more energy released.

## High-Yield Points

- Stability order: tetra > tri > di > mono substituted > ethene; more alkyl groups = more stable (hyperconjugation).
- \(\Delta H^\circ_\text{hyd}\) more negative = **less** stable alkene (all isomers hydrogenate to the same alkane).
- Reference values (kcal/mol): 1-butene −30.3, cis-2-butene −28.6, 2-methylpropene −28.4, trans-2-butene −27.6, 2-methyl-2-butene −26.9.
- trans isomers are ~1 kcal/mol more stable than cis (steric strain in cis).
- 2-methylpropene is disubstituted (both alkyls on one carbon) — a common misclassification.
- Zaitsev's rule is a stability rule: eliminations favor the most substituted alkene.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| heat of hydrogenation (\(\Delta H^\circ_\text{hyd}\)) | Heat released when H2 adds across a double bond; measured in kcal/mol or kJ/mol. | The experimental ruler for alkene stability — more negative means less stable. |
| exothermic | A reaction that releases heat; \(\Delta H < 0\). | All hydrogenations are exothermic; the magnitude is what we compare. |
| hyperconjugation | Delocalization of C–H \(\sigma\) electrons into the alkene \(\pi^*\) orbital. | The electronic reason alkyl groups stabilize double bonds. |
| steric strain | Destabilization from atoms/groups crowding each other in space. | Explains why cis alkenes are less stable than trans. |
| substitution degree | Number of alkyl (carbon) groups attached to the C=C carbons (mono, di, tri, tetra). | The primary predictor of alkene stability. |
| Zaitsev's rule | Elimination reactions favor the most substituted (most stable) alkene. | A direct, exam-critical application of the stability trend. |

## Worked Examples

**Example 1 — Rank the four C4H8 alkenes by stability.** Given: \(\Delta H^\circ_\text{hyd}\) = −30.3 (1-butene), −28.6 (cis-2-butene), −28.4 (2-methylpropene), −27.6 (trans-2-butene) kcal/mol. All four hydrogenate to the same product (butane), so the alkene with the least negative value sits lowest in energy. Rank from most to least stable: **trans-2-butene (−27.6) > 2-methylpropene (−28.4) > cis-2-butene (−28.6) > 1-butene (−30.3)**. Check against the rules: trans beats cis (sterics), and both disubstituted alkenes beat monosubstituted 1-butene.

**Example 2 — Convert a heat of hydrogenation to SI units (dimensional analysis).** The conversion factor between calories and joules is exact: 1 cal = 4.184 J. Write the formula first, then substitute:

\[ E(\text{kJ/mol}) = E(\text{kcal/mol}) \times \frac{4.184\ \text{kJ}}{1\ \text{kcal}} \]

\[ E(\text{cis-2-butene}) = -28.6\ \text{kcal/mol} \times \frac{4.184\ \text{kJ}}{1\ \text{kcal}} = -119.7\ \text{kJ/mol} \]

The units cancel cleanly (kcal/mol × kJ/kcal = kJ/mol), confirming the setup. Same check for trans-2-butene: −27.6 × 4.184 = −115.5 kJ/mol — 4.2 kJ/mol less negative, i.e., more stable, exactly as expected.

**Example 3 — Predict the major alkene from dehydration of 2-methyl-2-butanol.** This alcohol can eliminate water to give either 2-methyl-1-butene (disubstituted, CH2=C(CH3)–CH2–CH3) or 2-methyl-2-butene (trisubstituted, CH3–C(CH3)=CH–CH3). Count substitution first: the trisubstituted alkene wins by the stability trend (and its measured \(\Delta H^\circ_\text{hyd}\) ≈ −26.9 kcal/mol versus roughly −30 kcal/mol for the disubstituted isomer). Predict **2-methyl-2-butene as the major product** — this is Zaitsev's rule in action, and the stability table is the reason behind it.

**Example 4 — Why is cis-2-hexene less stable than trans-2-hexene?** Both are disubstituted; geometry is the only difference. In the cis isomer the two alkyl groups crowd the same face of the double bond, and their van der Waals repulsion adds roughly 1 kcal/mol of steric strain; the trans isomer avoids the clash. Even without a table, rule 2 (trans > cis) gives the answer: trans-2-hexene is the more stable isomer.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| More negative \(\Delta H^\circ_\text{hyd}\) | more stable alkene | More negative = more heat released = higher-energy starting alkene = **less** stable. A classic sign trap. |
| Stability | reactivity | More stable alkenes are not "unreactive"; stability is about thermodynamic energy, not rate. |
| More substituted | more branched | A tetrasubstituted alkene may be less branched-looking than a monosubstituted one — count groups on the C=C carbons, not total branching. |
| 2-methylpropene (disubstituted) | trisubstituted alkene | Its two methyls are both on one alkene carbon: substitution = 2, and its −28.4 value sits with the disubstituted range. |
| cis-2-butene (bp 3.7 °C) | trans-2-butene (bp 0.9 °C) | The cis isomer boils higher (more polar) but is **less stable**; boiling point and stability are different questions. |
| Heat of hydrogenation | heat of combustion | Both measure energy, but hydrogenation is the cleaner alkene-vs-alkene comparison because every isomer gives the same alkane. |

## Quick Review

1. Explain, in one sentence, why a more negative heat of hydrogenation indicates a less stable alkene.
2. Rank these by stability: cis-2-butene, trans-2-butene, 2-methyl-2-butene, 1-butene.
3. Why is trans-2-butene about 1 kcal/mol more stable than cis-2-butene?
4. What is the substitution degree of 2-methylpropene, and why does that matter?
5. Which alkene is the predicted major product of an elimination that can form either 2-methyl-1-butene or 2-methyl-2-butene, and why?

<details>
<summary>Answers</summary>

1. If two alkene isomers hydrogenate to the same alkane, the one that releases more heat must have started at higher energy — so more negative \(\Delta H^\circ_\text{hyd}\) = higher-energy, less stable alkene.
2. Most to least stable: 2-methyl-2-butene (trisubstituted, −26.9) > trans-2-butene (−27.6) > cis-2-butene (−28.6) > 1-butene (−30.3).
3. In the cis isomer the two methyl groups occupy the same face of the double bond; their van der Waals repulsion (steric strain) raises the energy by about 1 kcal/mol. The trans isomer separates them.
4. Disubstituted: both methyl groups are attached to the same alkene carbon. It matters because students misclassify it as trisubstituted; its measured stability (−28.4 kcal/mol) places it between cis- and trans-2-butene.
5. 2-Methyl-2-butene, because it is trisubstituted and therefore more stable than the disubstituted 2-methyl-1-butene — Zaitsev's rule follows directly from the substitution/stability trend.

</details>

## Related Topics

- [Chapter 7 README](../README.md)
- [4. Cis–Trans Isomerism in Alkenes](04-cis-trans-isomerism-in-alkenes.md)
- [5. Alkene Stereochemistry and the E,Z Designation](05-alkene-stereochemistry-and-the-e-z-designation.md)
- [8. Orientation of Electrophilic Additions: Markovnikov’s Rule](08-orientation-of-electrophilic-additions-markovnikov-s-rule.md)
- [9. Carbocation Structure and Stability](09-carbocation-structure-and-stability.md)
- [10. The Hammond Postulate](10-the-hammond-postulate.md)
