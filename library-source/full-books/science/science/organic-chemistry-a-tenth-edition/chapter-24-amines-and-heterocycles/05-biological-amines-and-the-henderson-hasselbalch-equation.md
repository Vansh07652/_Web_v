---
title: "Biological Amines and the Henderson–Hasselbalch Equation"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "24: Amines and Heterocycles"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "biological-amines-and-the-henderson-hasselbalch-equation"
  - "science"
status: "complete"
---

# Biological Amines and the Henderson–Hasselbalch Equation

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 24: Amines and Heterocycles](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Biological systems are full of amines: the amino acid side chains of lysine and histidine, the neurotransmitters dopamine, serotonin, histamine, and epinephrine, the DNA/RNA bases adenine and guanine, and the plant-derived **alkaloids** such as morphine, nicotine, caffeine, and quinine. Every one of these molecules exists in an equilibrium between a neutral free base and a protonated ammonium form, and the position of that equilibrium is set by the local pH and the amine's \(\text{p}K_{aH}\). The **Henderson–Hasselbalch equation** converts those two numbers into the ratio of protonated to unprotonated forms:

\[
\text{pH} = \text{p}K_{aH} + \log_{10}\frac{[B]}{[BH^+]}
\]

The same equation, written with \([A^-]/[HA]\), describes acids — including the bicarbonate buffer that holds blood near pH 7.4. This topic derives the equation, shows how to use it, and applies it to drug absorption, alkaloid isolation, and biological buffers.

## Why This Matters

- **Drug absorption and distribution:** Only the *uncharged* free-base form of a drug crosses lipid membranes readily; the charged ammonium form is water-soluble but membrane-impermeable. Knowing \(\text{p}K_{aH}\) and the local pH tells you how much of a drug is where it needs to be.
- **Local anesthetics:** Lidocaine (\(\text{p}K_{aH} \approx 7.9\)) and procaine (\(\approx 8.9\)) work because a significant fraction exists as the free base at tissue pH, diffusing to the nerve, where lower local pH converts it to the active protonated form.
- **Alkaloid isolation:** Natural-product chemists protonate alkaloids with acid to extract them into water, then deprotonate with base to recover the free amine — a direct application of the same equilibrium.
- **Blood pH homeostasis:** The bicarbonate buffer, \(\text{pH} = 6.1 + \log_{10}([HCO_3^-]/[H_2CO_3])\), is the Henderson–Hasselbalch equation in action; its ~20:1 ratio at pH 7.4 is a standard chemistry illustration of buffering.
- **Protein chemistry:** Histidine (\(\text{p}K_{aH} \approx 6.0\)) and lysine (\(\approx 10.5\)) side chains change charge with local pH, controlling enzyme catalysis and protein folding.
- **Exams:** Henderson–Hasselbalch calculations (fractions, ratios, required pH) are among the most tested quantitative skills in organic and biochemistry courses.

## Core Concepts

### Deriving the equation for an amine base

Start from the acid dissociation of the conjugate acid \(BH^+\):

\[
BH^+ \rightleftharpoons B + H^+ \qquad K_a = \frac{[B][H^+]}{[BH^+]}
\]

Solve for \([H^+]\):

\[
[H^+] = K_a\,\frac{[BH^+]}{[B]}
\]

Take \(-\log_{10}\) of both sides. By the properties of logarithms, \(-\log_{10}[H^+] = \text{pH}\), \(-\log_{10}K_a = \text{p}K_{aH}\), and the ratio term becomes a positive log:

\[
-\log_{10}[H^+] = -\log_{10}K_a - \log_{10}\frac{[BH^+]}{[B]} = \text{p}K_{aH} + \log_{10}\frac{[B]}{[BH^+]}
\]

giving the working form:

\[
\text{pH} = \text{p}K_{aH} + \log_{10}\frac{[B]}{[BH^+]}
\]

For an acid \(HA\), the identical derivation with \([A^-]/[HA]\) gives \(\text{pH} = \text{p}K_a + \log_{10}([A^-]/[HA])\). The only difference is which species is "unprotonated."

### Reading the equation: three regimes

- **pH = \(\text{p}K_{aH}\):** \(\log_{10}([B]/[BH^+]) = 0\), so \([B] = [BH^+]\) — 50% protonated.
- **pH < \(\text{p}K_{aH}\):** the log term is negative, so \([BH^+] > [B]\) — the **protonated (ammonium) form dominates**. Rule of thumb: *pH below \(\text{p}K_{aH}\) means protonated.*
- **pH > \(\text{p}K_{aH}\):** the free base dominates.

The ratio moves by factors of ten per pH unit: one unit away → 10:1, two units → 100:1. So an amine with \(\text{p}K_{aH}\) two units above the pH is ~99% protonated.

### Biological amine \(\text{p}K_{aH}\) reference values

These are approximate aqueous values from standard pharmacology/biochemistry references — always check current sources for exact numbers:

| Molecule | \(\text{p}K_{aH}\) (approx.) | Note |
|---|---|---|
| Amphetamine | ≈ 9.9 | Stimulant; almost fully protonated at pH 7.4 |
| Ephedrine | ≈ 9.6 | Bronchodilator/decongestant |
| Atropine | ≈ 9.4 | Anticholinergic alkaloid |
| Morphine / codeine | ≈ 8.2 | Opiate analgesics |
| Procaine | ≈ 8.9 | Local anesthetic (ester) |
| Lidocaine | ≈ 7.9 | Local anesthetic (amide) |
| Nicotine (pyrrolidine N) | ≈ 8.0 | Alkaloid |
| Histidine side chain | ≈ 6.0 | Amino acid; titrates near physiological pH |
| Lysine side chain | ≈ 10.5 | Amino acid; protonated at pH 7.4 |

### Alkaloid isolation by acid–base extraction

A typical isolation: treat plant material with dilute aqueous acid. The alkaloid free base accepts a proton, becomes a water-soluble ammonium salt, and leaves the organic tissue for the aqueous layer. Neutral plant fats and waxes stay behind. Then add base to the aqueous layer: pH rises above \(\text{p}K_{aH}\), the ammonium ion loses its proton, and the neutral alkaloid precipitates or is extracted into an organic solvent. Each step is the same equilibrium pushed in a chosen direction by pH.

### The bicarbonate buffer (chemistry illustration)

Carbon dioxide dissolves and hydrates to carbonic acid: \(CO_2 + H_2O \rightleftharpoons H_2CO_3 \rightleftharpoons H^+ + HCO_3^-\). With the first \(\text{p}K_a \approx 6.1\):

\[
\text{pH} = 6.1 + \log_{10}\frac{[HCO_3^-]}{[H_2CO_3]}
\]

At blood pH 7.4 the ratio is about 20:1. This is a textbook chemistry model of a buffer; actual physiology involves the lungs and kidneys, which are beyond the scope of this chapter.

## ELI-10: Explain Like I'm 10

Imagine a crowd of "base" molecules that can either carry a proton (charged, like a wet coat) or drop it (neutral, like a dry coat). Whether they carry it depends on the room's "protoniness" (pH) and each molecule's own preference number (\(\text{p}K_{aH}\)). The Henderson–Hasselbalch equation is the calculator: if the pH is below the molecule's number, most molecules carry the proton; if the pH is above, most drop it. At the exact number, half and half. That's why a drug like lidocaine is partly dry (free base, able to slip through cell membranes) and partly wet (protonated, active) inside your body at the same time.

## High-Yield Points

- Henderson–Hasselbalch for bases: \(\text{pH} = \text{p}K_{aH} + \log_{10}([B]/[BH^+])\); for acids: \(\text{pH} = \text{p}K_a + \log_{10}([A^-]/[HA])\).
- pH < \(\text{p}K_{aH}\) → protonated form dominates; pH > \(\text{p}K_{aH}\) → free base dominates; pH = \(\text{p}K_{aH}\) → 50/50.
- Each 1.0 pH unit changes the ratio 10-fold (2 units → 100-fold).
- At pH 7.4, amines with \(\text{p}K_{aH} \gtrsim 9\) are >99% protonated; drugs like lidocaine (7.9) and procaine (8.9) exist in both forms — the balance is why they work.
- Only the uncharged form crosses lipid membranes; charged salts are water-soluble and trapped.
- Bicarbonate buffer: \(\text{pH} = 6.1 + \log_{10}([HCO_3^-]/[H_2CO_3])\); ratio ≈ 20:1 at pH 7.4.
- Histidine (≈ 6.0) and lysine (≈ 10.5) side chains change charge with pH — central to protein behavior.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Henderson–Hasselbalch equation | \(\text{pH} = \text{p}K_{aH} + \log_{10}([B]/[BH^+])\) | Converts pH and \(\text{p}K_{aH}\) into the protonation ratio |
| \(\text{p}K_{aH}\) | \(\text{p}K_a\) of the conjugate acid of a base | The amine's "preference number" for holding a proton |
| Free base | Neutral, unprotonated amine (B) | The membrane-permeable, lipid-soluble form |
| Ammonium salt form | Protonated, charged form (\(BH^+\)) | Water-soluble, membrane-impermeable; the active form for many drugs |
| Alkaloid | Plant-derived basic nitrogen compound (morphine, nicotine, quinine) | Isolated by pH-controlled protonation/deprotonation |
| Neurotransmitter | Signaling molecule, many are amines (dopamine, serotonin, histamine) | Protonation state affects storage, release, and receptor binding |
| Bicarbonate buffer | \(H_2CO_3/HCO_3^-\) pair with \(\text{p}K_a\) ≈ 6.1 | Model buffer system; keeps blood near pH 7.4 |
| Membrane permeability | Ability to cross lipid bilayers | Charged forms are blocked; neutral forms pass — controls drug distribution |

## Worked Examples

### Example 1: Lidocaine at blood pH — what fraction is active?

Lidocaine has \(\text{p}K_{aH} \approx 7.9\). What fraction is protonated at blood pH 7.4?

**Formula first:**

\[
\text{pH} = \text{p}K_{aH} + \log_{10}\frac{[B]}{[BH^+]}
\]

**Substitute** \(\text{pH} = 7.4\), \(\text{p}K_{aH} = 7.9\):

\[
7.4 = 7.9 + \log_{10}\frac{[B]}{[BH^+]} \quad\Rightarrow\quad \log_{10}\frac{[B]}{[BH^+]} = -0.5
\]

\[
\frac{[B]}{[BH^+]} = 10^{-0.5} \approx 0.32
\]

**Convert to fraction protonated** (protonated = 1 part for every 0.32 parts free base):

\[
\text{fraction protonated} = \frac{1}{1 + 0.32} = 0.76
\]

**Answer:** about 76% of lidocaine is protonated and 24% is free base at pH 7.4. The ~24% free base crosses membranes to reach the nerve; inside the slightly acidic nerve environment the equilibrium shifts toward the protonated form that blocks the sodium channel.

### Example 2: At what pH is procaine 90% protonated?

Procaine has \(\text{p}K_{aH} \approx 8.9\). Find the pH at which it is 90% protonated.

**Set up the ratio first:** 90% protonated means \([B]/([B] + [BH^+]) = 0.10\), so \([B]/[BH^+] = 0.10/0.90 = 0.111\).

**Formula:**

\[
\text{pH} = \text{p}K_{aH} + \log_{10}\frac{[B]}{[BH^+]} = 8.9 + \log_{10}(0.111)
\]

**Compute:**

\[
\log_{10}(0.111) = -0.954 \quad\Rightarrow\quad \text{pH} = 8.9 - 0.95 = 7.95 \approx 8.0
\]

**Answer:** procaine is 90% protonated at pH ≈ 8.0. Since \(\text{p}K_{aH} - 1 = 7.9\) gives 91% protonated, the "one pH unit ≈ 10:1" rule checks out.

### Example 3: The bicarbonate buffer ratio at blood pH

Using \(\text{p}K_a \approx 6.1\) for carbonic acid, find \([HCO_3^-]/[H_2CO_3]\) at pH 7.4.

**Formula (acid form):**

\[
\text{pH} = \text{p}K_a + \log_{10}\frac{[HCO_3^-]}{[H_2CO_3]}
\]

**Substitute:**

\[
7.4 = 6.1 + \log_{10}\frac{[HCO_3^-]}{[H_2CO_3]} \quad\Rightarrow\quad \log_{10}\frac{[HCO_3^-]}{[H_2CO_3]} = 1.3
\]

\[
\frac{[HCO_3^-]}{[H_2CO_3]} = 10^{1.3} \approx 20
\]

**Answer:** about 20 bicarbonate ions for every carbonic acid molecule — the buffer is poised to absorb acid. This ratio is why a modest addition of \(H^+\) is resisted: \(HCO_3^-\) is the abundant partner ready to consume protons.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Using \([A^-]/[HA]\) for an amine | \([B]/[BH^+]\) | For amines the unprotonated species is B and the protonated one is \(BH^+\); use \(\text{p}K_{aH}\) |
| "pH > \(\text{p}K_{aH}\) means protonated" | Free base dominates | pH above \(\text{p}K_{aH}\) → deprotonated (free base) dominates; pH below → protonated |
| \(\text{p}K_a\) and \(\text{p}K_{aH}\) interchangeable | Same symbol, different species | \(\text{p}K_{aH}\) always refers to the conjugate acid of the base in question |
| "Drugs must be fully uncharged to act" | Equilibrium balance | It's a ratio, not a switch; partial free-base fractions (like lidocaine's 24%) are functionally important |
| pH = \(\text{p}K_{aH}\) means fully protonated | 50/50 | At equality, \([B] = [BH^+]\) exactly |
| Henderson–Hasselbalch is exact in all systems | A good model in dilute solution | Proteins, membranes, and non-ideal media shift apparent \(\text{p}K_a\) values; treat results as approximations there |

## Quick Review

1. Write the Henderson–Hasselbalch equation for an amine base and identify each symbol.
2. A drug has \(\text{p}K_{aH} = 8.5\). At pH 6.5, is it mostly protonated or mostly free base? By what ratio?
3. What fraction of a base with \(\text{p}K_{aH} = 6.0\) is protonated at pH 7.0?
4. Why must a local anesthetic exist partly as the free base to reach a nerve?
5. What is the \([HCO_3^-]/[H_2CO_3]\) ratio at pH 7.4 (carbonic acid \(\text{p}K_a \approx 6.1\))?
6. Lysine's side-chain \(\text{p}K_{aH} \approx 10.5\). At pH 7.4, is the side chain protonated or not?

<details>
<summary>Show answers</summary>

1. \(\text{pH} = \text{p}K_{aH} + \log_{10}([B]/[BH^+])\), where B is the free base, \(BH^+\) the protonated ammonium form, and \(\text{p}K_{aH}\) the \(\text{p}K_a\) of the conjugate acid.
2. Mostly protonated: pH (6.5) is 2 units below \(\text{p}K_{aH}\) (8.5), so \([BH^+]/[B] = 10^{2} = 100:1\) — about 99% protonated.
3. pH 7.0 = 6.0 + \(\log_{10}([B]/[BH^+])\) → \(\log_{10}([B]/[BH^+]) = 1.0\) → \([B]/[BH^+] = 10\), so fraction protonated = \(1/(1+10) = 0.091\) — about 9%.
4. The charged ammonium form cannot cross the lipid membrane; the neutral free base diffuses to the nerve, where protonation (favored at the lower local pH) regenerates the active form.
5. \(\log_{10}([HCO_3^-]/[H_2CO_3]) = 7.4 - 6.1 = 1.3\), so the ratio ≈ 20:1.
6. Protonated: pH 7.4 is ~3 units below 10.5, so the ammonium form dominates by ~1000:1.

</details>

## Related Topics

- Previous: [Basicity of Arylamines](04-basicity-of-arylamines.md)
- Next: [Synthesis of Amines](06-synthesis-of-amines.md)
- Related: [Heterocyclic Amines](09-heterocyclic-amines.md), [Amines and Heterocycles chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- \(\text{p}K_a\) / \(\text{p}K_{aH}\) values are approximate aqueous reference values from standard pharmacology and biochemistry references; verify against current sources before relying on them in assessments.
- Blood-pH and buffer discussion is a chemistry illustration only; no clinical guidance is implied.
- Last updated: 2026-08-16
