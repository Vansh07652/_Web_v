---
title: "Trisubstituted Benzenes: Additivity of Effects"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "16: Chemistry of Benzene: Electrophilic Aromatic Substitution"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "trisubstituted-benzenes-additivity-of-effects"
  - "science"
status: "complete"
---

# Trisubstituted Benzenes: Additivity of Effects

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 16: Chemistry of Benzene: Electrophilic Aromatic Substitution](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

When a benzene ring already has **two** substituents, a third electrophilic substitution is controlled by both of them at once. The directing effects are **additive**: each substituent "votes" for its preferred positions, and the product is determined by where the votes agree:

1. **If both substituents direct to the same positions**, the new group goes there — often giving a single dominant product.
2. **If the directing preferences conflict**, the **stronger activator** wins (activating groups override deactivating groups, and among activators the strongest dominates).
3. **Steric effects tip the balance** within an ortho/para pattern — a bulky group makes para attack strongly preferred over ortho.

Additivity is not an exact arithmetic rule — real reactions give mixtures whose ratios are set by relative group strengths — but it is an excellent predictive framework and the tool chemists use to plan multi-step syntheses of polysubstituted rings. This section also introduces *synthetic ordering*: to place three groups on a ring in the pattern you want, you must choose the reaction sequence so each step's director points where the next group should go.

## Why This Matters

Nearly every complex aromatic molecule in pharmaceuticals, agrochemicals, dyes, and materials carries three or more ring substituents, and their relative positions (ortho/meta/para relationships) often determine biological activity or physical properties. Additivity lets you predict — before running a reaction — which isomer dominates, which side products to expect, and how to order steps to reach a target structure. On exams, "predict the major product of nitration of p-nitrotoluene" questions are favorites because they test combining two directing rules at once. The same reasoning runs industrial processes like the stepwise nitration of toluene to 2,4,6-trinitrotoluene (TNT) and the construction of substituted benzoic acids and anilines across the chemical industry.

## Core Concepts

### Additivity when the directors agree

If both substituents point the electrophile to the same ring position, that position is doubly activated and the product forms there preferentially. Example: **p-nitrotoluene** has methyl (o/p director, activating) at C1 and nitro (meta director, deactivating) at C4. For a new electrophile, methyl votes for positions 2, 4, 6; nitro votes for its meta positions (C3, C5). Position 2 is ortho to methyl and meta to nitro — the practical intersection — so nitration of p-nitrotoluene gives mostly **2,4-dinitrotoluene**:

\\[\text{p-CH}_3\text{C}_6\text{H}_4\text{NO}_2 + \text{HNO}_3 \xrightarrow{\text{H}_2\text{SO}_4} \text{2,4-(NO}_2\text{)}_2\text{C}_6\text{H}_3\text{CH}_3 + \text{H}_2\text{O}
\\]

When directors agree on a position, the additivity prediction is reliable and the product is usually clean.

### Conflict resolution: the stronger activator wins

When the two substituents disagree, you cannot satisfy both. The rule: **the stronger activating group dominates**. In **m-nitrotoluene** (methyl at C1, nitro at C3), methyl votes o/p (positions 2, 4, 6) while nitro votes meta (positions 4 and 6 relative to itself). Methyl is an activator and nitro is a strong deactivator, so **methyl's preference wins**: nitration occurs at 2, 4, and 6, giving 2,4- and 2,6-dinitrotoluene. This is exactly how the third nitro reaches positions 2, 4, and 6 to build TNT (2,4,6-trinitrotoluene). The hierarchy: strong activators (\\(\text{NH}_2\\), \\(\text{OH}\\), \\(\text{OCH}_3\\)) beat weak activators (alkyl), which beat deactivators.

### Steric effects within an ortho/para pattern

An o/p-directing group offers two ortho positions and one para position. When the director is large (e.g., \\(\text{C}(\text{CH}_3)_3\\)), the ortho positions are crowded and **para attack is favored** — sometimes overwhelmingly. Example: nitration of **tert-butylbenzene** gives mainly **p-nitro-tert-butylbenzene**, with only a trace of the ortho isomer. The same steric argument explains the strong para selectivity of isopropylbenzene and other branched alkylbenzenes, and why bulky electrophiles (like large acyl cations) favor para products even on simple toluene.

### Synthetic ordering: choosing the sequence

Because each group added becomes a new director, the order of steps controls the final substitution pattern. To get a **para** relationship between an activator and a deactivator, put the activator in first (it directs the deactivator para to itself). To get a **meta** relationship, put a deactivator in first, or use a director whose preference gives the meta product. Some patterns (e.g., 1,3,5-trisubstitution with all groups meta to each other) are hard to reach directly and require clever sequences, blocking groups, or protecting groups — a preview of synthesis planning developed in this chapter's final topic.

## ELI-10: Explain Like I'm 10

> Picture two coaches shouting directions to a player (the incoming electrophile). If both coaches shout "go to position 2!", the player goes there — that's additivity. If one coach says "position 2" and the other says "position 5", the player listens to the louder coach — the stronger activator wins. And if a really big kid stands near one spot, the player avoids that spot and heads to the open side — that's the steric effect pushing products para.

## High-Yield Points

- **Additivity:** when two substituents direct to the same position, that position is strongly favored — often a single major product (p-nitrotoluene → 2,4-dinitrotoluene).
- **Conflicts:** the stronger activator wins. Order: strong +R groups (\\(\text{NH}_2\\), \\(\text{OH}\\), \\(\text{OCH}_3\\)) > alkyl > halogens > deactivators.
- **Sterics:** bulky groups and bulky electrophiles favor **para** over ortho; expect o/p mixtures, para usually major.
- **Two meta directors** (e.g., 1,3-dinitrobenzene) push the third group to position 5 — meta to both, giving 1,3,5 patterns.
- **Two o/p directors** can give *doubly* activated positions between them (e.g., 1,3-dimethoxybenzene is most reactive at position 2).
- **Order of reactions matters:** every new substituent changes the directing landscape; plan the sequence to reach the target pattern.
- On exams, draw the ring, mark each director's preferred positions, and look for the intersection.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Additivity of effects | Combining the directing preferences of two substituents to predict the third substitution | The core predictive rule for trisubstituted benzenes |
| Doubly activated position | Ring carbon that both substituents direct to (e.g., position 2 in p-nitrotoluene) | Usually gives the major, clean product |
| Stronger activator wins | When directors conflict, the more activating group controls the outcome | Resolves ambiguous predictions |
| Steric effect | Physical crowding that disfavors reactions at crowded (usually ortho) positions | Explains para selectivity with bulky groups |
| Blocking/protecting group | Temporary substituent used to prevent reaction at a specific position | Key tool for reaching otherwise inaccessible patterns |
| 1,3,5-trisubstituted pattern | Three groups all meta to each other | Common target; requires the right synthetic sequence |

## How It Works / Step-by-Step Process

### Predicting the third substitution product

1. Draw the ring with both substituents and number the positions.
2. For each substituent, list its preferred positions: o/p directors → positions 2, 4, 6 (relative to itself); meta directors → positions 3, 5.
3. **Intersect the two lists.** Positions in both lists are doubly activated — major products.
4. If the lists do not overlap, apply the strength hierarchy: strong activator > weak activator > deactivator; the strongest group's list wins.
5. Apply sterics: within the winning list, prefer para over ortho when the director or the incoming electrophile is bulky.
6. Check that no occupied position is in the list (a position already bearing a substituent is unavailable).

### Planning a synthesis of a trisubstituted benzene

1. Write the target pattern (which groups where, and their o/m/p relationships).
2. Identify which group must go in *first* to act as the director for the second.
3. Choose reactions compatible with the groups already present (e.g., Friedel–Crafts fails on nitro rings; nitration of anilines requires protecting the amino group as an amide).
4. If a needed position would be wrongly directed, consider a temporary blocking group or a different retrosynthetic cut.

## Worked Examples

### Example 1: Nitration of p-nitrotoluene — directors agree

p-Nitrotoluene: CH₃ at C1 (o/p director), NO₂ at C4 (meta director). Methyl's set is {2, 4, 6}; nitro's meta set is {3, 5}. Position 2 is ortho to CH₃ and meta to NO₂ — the effective intersection. The methyl (stronger director) dominates, but the nitro's meta influence suppresses attack at C3 and C5. The net result: nitration occurs mainly at **C2**, giving **2,4-dinitrotoluene**:

\\[\text{p-CH}_3\text{C}_6\text{H}_4\text{NO}_2 \xrightarrow{\text{HNO}_3/\text{H}_2\text{SO}_4} \text{2,4-dinitrotoluene (major)}
\\]

**Lesson:** when lists "almost" intersect, the stronger activator's pattern wins, refined by the deactivator's influence.

### Example 2: m-Xylene → the doubly activated positions

m-Xylene has CH₃ at C1 and C3 — both o/p directors. The methyl at C1 votes {2, 4, 6}; the methyl at C3 votes {2, 4, 6} too. The intersection is {2, 4, 6} — all three positions are doubly activated. Nitration gives mainly **2,4-dimethylnitrobenzene** (nitro at C2, between the methyls) and the 4-nitro isomer; position 5 (meta to both methyls) is strongly disfavored. This is additivity at its cleanest: two identical directors reinforce three positions.

### Example 3: tert-Butylbenzene — sterics choose para

tert-Butylbenzene's bulky \\(\text{C}(\text{CH}_3)_3\\) group is an o/p director, but nitration gives **p-nitro-tert-butylbenzene** as the dominant product because the ortho position is too crowded; the ortho isomer is only a minor side product. A quick mass check: 12.0 g of tert-butylbenzene (\\(M = 10(12.01)+14(1.008) = 134.20\\) g/mol) → theoretical p-nitro-tert-butylbenzene (\\(M = 10(12.01)+13(1.008)+14.01+2(16.00) = 179.22\\) g/mol):

\\[
\text{mass} = 12.0\ \text{g} \times \frac{1\ \text{mol}}{134.20\ \text{g}} \times \frac{1\ \text{mol product}}{1\ \text{mol reactant}} \times \frac{179.22\ \text{g}}{1\ \text{mol}} = 16.0\ \text{g}
\\]

The theoretical yield is **16.0 g** of p-nitro-tert-butylbenzene (ignoring the small ortho fraction).

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| "Directors agree" | "Identical lists" | Groups can have overlapping *effective* preferences even when formal sets don't intersect; the stronger activator's pattern dominates |
| Additivity as arithmetic | Additivity as a ranking rule | It does not give exact product ratios; it ranks which position is favored, and mixtures still form |
| Two o/p directors | Doubly activated position only | Two o/p directors can activate *several* positions; the most electron-rich (often between them) is the major site |
| Meta director's vote | Absolute veto | A deactivator does not forbid its non-preferred positions; it merely makes them slower. Activators can override deactivators |
| Steric effect | Electronic effect | Sterics only reshuffles *within* an o/p pattern (para vs. ortho); it never turns a meta director into an o/p director |
| Predicting one product | Real reaction mixture | Expect a major product plus isomers; "major" is what exams want, not "only" |

## Quick Review

1. State the three rules of additivity of effects.
2. Predict the major product of nitration of p-nitrotoluene and justify it.
3. Why does tert-butylbenzene nitrate mainly at the para position?
4. Which director wins when methyl (activating) and nitro (deactivating) conflict?
5. In m-xylene, why are positions 2, 4, and 6 all doubly activated?
6. Why must the order of synthetic steps be chosen carefully for polysubstituted rings?

<details>
<summary>Show answers</summary>

1. (1) Positions directed by both substituents are strongly favored (additivity). (2) When directors conflict, the stronger activator wins. (3) Steric crowding favors para over ortho with bulky groups.
2. 2,4-Dinitrotoluene. The methyl (o/p director, activating) dominates over the nitro (meta director), directing the new NO₂ to position 2 (ortho to methyl), while the nitro suppresses the positions ortho to itself.
3. The tert-butyl group is large; ortho attack is sterically crowded, so the para position — electronically equivalent but uncrowded — is strongly favored.
4. The activator (methyl) wins. Deactivators slow reactions but do not veto positions; activating o/p directing dominates.
5. Each methyl is an o/p director. For the C1 methyl: {2,4,6}. For the C3 methyl: {2,4,6} — the sets coincide, so all three positions are activated by both groups.
6. Each substituent added becomes a new director that steers the next step. Choosing the sequence (and using protecting/blocking groups when needed) is the only way to reach a target substitution pattern.

</details>

## Related Topics

- Previous: [Substituent Effects in Electrophilic Substitutions](04-substituent-effects-in-electrophilic-substitutions.md)
- Next: [Nucleophilic Aromatic Substitution](06-nucleophilic-aromatic-substitution.md)
- Related: [Chemistry of Benzene: Electrophilic Aromatic Substitution chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
