---
title: "Basicity of Arylamines"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "24: Amines and Heterocycles"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "basicity-of-arylamines"
  - "science"
status: "complete"
---

# Basicity of Arylamines

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 24: Amines and Heterocycles](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

An **arylamine** is an amine whose nitrogen is bonded directly to an aromatic ring — aniline, \(C_6H_5NH_2\), is the parent. Arylamines are dramatically weaker bases than alkylamines: aniline has \(\text{p}K_{aH} \approx 4.60\), while cyclohexylamine, its saturated relative, has \(\text{p}K_{aH} \approx 10.64\) — a difference of about six orders of magnitude in the equilibrium constant. The origin of the difference is **resonance delocalization**: the nitrogen lone pair is shared with the aromatic ring in the free base, stabilizing the unprotonated form, while the conjugate acid (anilinium ion) has no lone pair and gains no such stabilization. Substituents on the ring tune basicity predictably: electron-donating groups (methyl, methoxy) raise \(\text{p}K_{aH}\); electron-withdrawing groups (nitro, cyano, halogen) lower it, with para substituents that can conjugate directly having the largest effect.

## Why This Matters

- **Drug and dye chemistry:** Arylamines appear in sulfa antibiotics (sulfanilamide), many dyes, and analgesics. Their low basicity means they behave very differently from alkylamines at physiological pH.
- **Reactivity control:** The basicity of an arylamine determines when it is protonated (and therefore water-soluble and non-nucleophilic) versus free (and nucleophilic) — essential for planning the diazonium chemistry of Topic 8.
- **Structure–property reasoning:** Arylamines are the cleanest example of how resonance stabilizes a *reactant* and therefore suppresses a property (basicity) — the same logic explains phenol acidity and amide nonbasicity.
- **Substituent effects:** Predicting how \(NO_2\), \(OCH_3\), or \(Cl\) change basicity is a standard exam skill and a model for thinking about electronic effects in every later chapter.
- **Exams:** Ranking substituted anilines, explaining the para > meta ordering, and computing protonation fractions at a given pH are high-frequency questions.

## Core Concepts

### The resonance explanation: the lone pair is "used up" in the free base

In aniline, the nitrogen lone pair is conjugated with the aromatic ring. The important resonance forms put a negative charge at the **ortho and para** positions:

\[
\text{aniline resonance: } C_6H_5NH_2 \longleftrightarrow \ ^-C_6H_5=NH_2^+ \text{ (charge at ortho/para carbons)}
\]

Concretely: the lone pair on N forms a new π bond to the ring carbon, and the C=C π bond shifts so that a carbanion appears at the ortho or para carbon. Because the lone pair is delocalized, it is less available to accept a proton. Delocalization *stabilizes the free base* — the molecule is lower in energy than a hypothetical localized aniline would be.

### Why the conjugate acid loses this stabilization

When aniline accepts a proton, it becomes the anilinium ion, \(C_6H_5NH_3^+\). The anilinium ion has **no lone pair on nitrogen**, so none of the resonance forms above exist. Protonation therefore destroys the resonance stabilization of the free base while creating a cation that cannot be stabilized by the ring. The equilibrium:

\[
C_6H_5NH_3^+ \rightleftharpoons C_6H_5NH_2 + H^+ \qquad \text{p}K_{aH} \approx 4.60
\]

lies far to the right compared with alkylammonium ions because the acid form is relatively destabilized and the base form is stabilized. In short: resonance stabilizes the base, so the base is a worse proton acceptor.

### Substituent effects: donating groups help, withdrawing groups hurt

An electron-donating group (EDG: \(CH_3\), \(OCH_3\), \(NH_2\)) pushes electron density toward the ring, which can be delivered to nitrogen, stabilizing the positive anilinium ion and **increasing** basicity. An electron-withdrawing group (EWG: \(NO_2\), CN, \(CF_3\), halogen) pulls density away, destabilizing \(BH^+\) and **decreasing** basicity. Representative aqueous \(\text{p}K_{aH}\) values for para-substituted anilines:

| Substituent | \(\text{p}K_{aH}\) of anilinium | Effect |
|---|---|---|
| \(p\)-\(OCH_3\) | ≈ 5.36 | EDG: more basic |
| \(p\)-\(CH_3\) | ≈ 5.08 | EDG: more basic |
| H (aniline) | ≈ 4.60 | reference |
| \(p\)-Cl | ≈ 4.0 | EWG: less basic |
| \(m\)-\(NO_2\) | ≈ 2.5 | EWG: less basic |
| \(p\)-\(NO_2\) | ≈ 1.0 | EWG: much less basic |

### Position matters: para conjugates, meta only induces

A **para** EWG such as \(NO_2\) can participate directly in resonance with the lone pair: a resonance form places negative charge on the nitro group's oxygens, strongly stabilizing the free base and suppressing basicity. A **meta** EWG cannot conjugate with the para-related resonance system; it withdraws only inductively through the σ framework. That is why \(p\)-nitroaniline (\(\approx 1.0\)) is a far weaker base than \(m\)-nitroaniline (\(\approx 2.5\)). The same logic applies to EDGs: \(p\)-methoxy and \(p\)-methyl help more than their meta isomers. Ortho substituents are complicated by steric effects and by direct through-space/inductive interactions, so they are usually considered separately.

### Compare with pyridine and alkylamines

The arylamine pattern is distinct from heterocyclic aromatic amines. Pyridine's lone pair is in an \(sp^2\) orbital *orthogonal* to the ring π system — it is not delocalized — so pyridine (\(\text{p}K_{aH}\) 5.25) is a weaker base than alkylamines (sp³, ≈ 10–11) but **stronger than aniline** (4.60), because aniline's lone pair is delocalized while pyridine's is not, and protonation of pyridine retains aromaticity.

## ELI-10: Explain Like I'm 10

Imagine the nitrogen's extra electron pair is a toy that the ring of carbons loves to share — the ring "borrows" it so much that the nitrogen doesn't have it free to grab protons anymore. That's why aniline is a much weaker base than a plain alkylamine. If you glue an electron-pushing sticker (\(OCH_3\)) on the ring, it shoves more electron power back toward nitrogen and the amine grabs protons better; a pulling sticker (\(NO_2\)) steals the power and makes it a worse base. Where you put the sticker matters too: para (opposite the nitrogen) can share directly with the ring, while meta can only pull through the middle.

## High-Yield Points

- Aniline \(\text{p}K_{aH} \approx 4.60\) vs. cyclohexylamine ≈ 10.64 — arylamines are ~\(10^6\) times weaker bases than alkylamines.
- Cause: **resonance delocalization of the lone pair** stabilizes the free base; the anilinium conjugate acid has no lone pair and no resonance stabilization.
- EDGs (\(CH_3\), \(OCH_3\)) increase basicity; EWGs (\(NO_2\), CN, halogen) decrease it.
- Para > meta for both EDGs and EWGs, because para groups conjugate directly with the ring (resonance), meta groups act inductively only.
- Reference values: \(p\)-methoxyaniline ≈ 5.36, \(p\)-methylaniline ≈ 5.08, aniline ≈ 4.60, \(p\)-chloroaniline ≈ 4.0, \(m\)-nitroaniline ≈ 2.5, \(p\)-nitroaniline ≈ 1.0.
- Pyridine (5.25) is a stronger base than aniline (4.60) because its lone pair is NOT delocalized; alkylamines (10–11) are stronger still (sp³ lone pair + alkyl donation).
- Same resonance logic explains phenol acidity and amide nonbasicity — one concept, many applications.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Arylamine | Amine with nitrogen bonded directly to an aromatic ring (aniline, \(C_6H_5NH_2\)) | The weak-base pattern at the heart of this topic |
| Anilinium ion | Conjugate acid of aniline, \(C_6H_5NH_3^+\) | Its \(\text{p}K_a\) (≈ 4.60) measures aniline's basicity |
| Resonance delocalization | Lone pair shared into the ring through alternating π bonds | Stabilizes the free base → weaker base |
| Electron-donating group (EDG) | Substituent that pushes electron density (\(OCH_3\), \(CH_3\)) | Raises \(\text{p}K_{aH}\) (stronger base) |
| Electron-withdrawing group (EWG) | Substituent that pulls electron density (\(NO_2\), CN, Cl) | Lowers \(\text{p}K_{aH}\) (weaker base) |
| Ortho / meta / para | Ring positions: 2 (adjacent), 3 (one carbon away), 4 (opposite) | Position determines whether a group can conjugate directly with the N lone pair |
| Inductive withdrawal | Electron pull through σ bonds only | Why meta EWGs still weaken the base, just less than para |

## Worked Examples

### Example 1: How much aniline is protonated at stomach pH?

Stomach fluid can be near pH 5. What fraction of aniline is protonated (anilinium) at pH 5.0? Use the Henderson–Hasselbalch form for bases:

\[
\text{pH} = \text{p}K_{aH} + \log_{10}\frac{[B]}{[BH^+]}
\]

**Substitute** \(\text{pH} = 5.0\), \(\text{p}K_{aH} = 4.60\):

\[
5.0 = 4.60 + \log_{10}\frac{[B]}{[BH^+]} \quad\Rightarrow\quad \log_{10}\frac{[B]}{[BH^+]} = 0.40
\]

\[
\frac{[B]}{[BH^+]} = 10^{0.40} \approx 2.5
\]

**Convert to a fraction:** total = \([B] + [BH^+] = 2.5 + 1 = 3.5\) parts, so:

\[
\text{fraction protonated} = \frac{1}{1 + 2.5} = 0.29 \quad (29\%)
\]

**Answer:** only ~29% of aniline is protonated at pH 5.0 — most is free base. Contrast methylamine (\(\text{p}K_{aH}\) 10.66) at the same pH: \(\log_{10}([B]/[BH^+]) = -5.66\), ratio \(2.2 \times 10^{-6}\), i.e. >99.99% protonated. Same pH, opposite behavior — the six-unit \(\text{p}K_{aH}\) gap between aryl and alkyl amines is biologically and pharmaceutically decisive.

### Example 2: Ranking substituted anilines by basicity

Rank these anilines from strongest to weakest base: \(p\)-nitroaniline, \(p\)-methoxyaniline, aniline, \(p\)-methylaniline, \(p\)-chloroaniline.

**Formula/rule:** basicity follows \(\text{p}K_{aH}\), which rises with electron donation and falls with withdrawal:

\[
p\text{-}OCH_3\ (5.36) > p\text{-}CH_3\ (5.08) > H\ (4.60) > p\text{-}Cl\ (4.0) > p\text{-}NO_2\ (1.0)
\]

**Why:** methoxy and methyl are EDGs that deliver electron density to the ring (methoxy most strongly, via resonance + induction), stabilizing the anilinium cation; chloro withdraws inductively; nitro withdraws both inductively and (at para) by resonance, making the free base very stable and the conjugate acid very unstable.

### Example 3: Why does para-nitro beat meta-nitro?

Given \(\text{p}K_{aH}(m\text{-}NO_2) \approx 2.5\) and \(\text{p}K_{aH}(p\text{-}NO_2) \approx 1.0\), compute how much stronger the para acid is.

**Formula first:**

\[
\frac{K_a(p)}{K_a(m)} = 10^{\Delta \text{p}K_{aH}} \qquad \Delta \text{p}K_{aH} = \text{p}K_a(m) - \text{p}K_a(p)
\]

**Substitute:**

\[
\frac{K_a(p)}{K_a(m)} = 10^{2.5 - 1.0} = 10^{1.5} \approx 32
\]

**Answer:** \(p\)-nitroaniline's conjugate acid is ~32 times stronger an acid (i.e., the base is ~32 times weaker) than the meta isomer. The para nitro group accepts negative charge from the ring directly through resonance — a pathway unavailable at the meta position, which can only withdraw inductively.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| "The ring is electron-withdrawing, so aniline is weak" | Resonance delocalization of the lone pair | The ring doesn't simply pull density; the lone pair is *shared* into the ring, stabilizing the free base |
| Aniline weaker than pyridine | Pyridine weaker than aniline | Pyridine (5.25) is stronger: its lone pair is in an sp² orbital but NOT delocalized; aniline's is delocalized |
| EDG position doesn't matter | Para > meta | Only para groups conjugate directly with the N-lone-pair resonance system; meta groups act inductively |
| "Anilinium loses aromaticity" | Ring stays aromatic | Protonation removes the lone pair but leaves the aromatic sextet intact; the lost resonance is in the *free base* |
| \(\text{p}K_{aH}\) 4.6 means aniline is an acid | It is a weak base | The 4.6 refers to its conjugate acid; aniline still accepts protons, just far less readily than alkylamines |
| Substituent effects are additive guesses | Measured \(\text{p}K_{aH}\) values | Multiple substituents combine non-trivially; rely on measured values for real systems |

## Quick Review

1. Why is aniline a weaker base than cyclohexylamine by ~\(10^6\)-fold?
2. Which resonance positions of the ring carry negative charge in aniline's resonance forms?
3. Would \(p\)-methoxyaniline or \(p\)-nitroaniline be the stronger base? Give the \(\text{p}K_{aH}\) reasoning.
4. Why does a para \(NO_2\) weaken aniline more than a meta \(NO_2\)?
5. Rank pyridine, aniline, and methylamine by base strength, and give one reason for the order.
6. At pH 4.6, what fraction of aniline is protonated?

<details>
<summary>Show answers</summary>

1. The lone pair is delocalized into the aromatic ring (resonance), which stabilizes the free base; the anilinium conjugate acid has no lone pair and gains no resonance stabilization. Cyclohexylamine has no such delocalization.
2. Ortho and para positions (relative to the N).
3. \(p\)-Methoxyaniline (≈ 5.36) is stronger: \(OCH_3\) is an EDG that stabilizes the positive anilinium ion, while \(NO_2\) is an EWG that destabilizes it (and stabilizes the free base).
4. Para \(NO_2\) withdraws by resonance (it can accept the negative charge directly through conjugated positions); meta \(NO_2\) can only withdraw inductively through σ bonds.
5. Methylamine (10.66) > pyridine (5.25) > aniline (4.60). Methylamine has an sp³ lone pair plus alkyl donation; pyridine's sp² lone pair is not delocalized; aniline's lone pair is delocalized into the ring.
6. At pH = \(\text{p}K_{aH}\), \([B] = [BH^+]\), so 50% is protonated.

</details>

## Related Topics

- Previous: [Basicity of Amines](03-basicity-of-amines.md)
- Next: [Biological Amines and the Henderson–Hasselbalch Equation](05-biological-amines-and-the-henderson-hasselbalch-equation.md)
- Related: [Reactions of Arylamines](08-reactions-of-arylamines.md), [Amines and Heterocycles chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- \(\text{p}K_{aH}\) values are standard aqueous reference values from the organic chemistry literature (typical measurements for substituted anilines); verify against current sources before relying on them in assessments.
- Last updated: 2026-08-16
