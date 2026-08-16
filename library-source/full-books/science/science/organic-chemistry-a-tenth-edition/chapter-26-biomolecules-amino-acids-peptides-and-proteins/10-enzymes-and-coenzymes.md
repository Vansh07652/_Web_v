---
title: "Enzymes and Coenzymes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "26: Biomolecules: Amino Acids, Peptides, and Proteins"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "enzymes-and-coenzymes"
  - "science"
status: "complete"
---

# Enzymes and Coenzymes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 26: Biomolecules: Amino Acids, Peptides, and Proteins](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

Enzymes are protein catalysts that accelerate biochemical reactions by factors of a million to a trillion or more without being consumed. Each enzyme recognizes specific substrates, binds them at an **active site**, and stabilizes the transition state so the reaction follows a lower-energy path. Many enzymes need a non-protein partner: a **cofactor** (usually a metal ion such as Zn²⁺ or Mg²⁺) or a **coenzyme** — a small organic molecule, often vitamin-derived, that carries chemical groups between reactions. This topic covers how enzymes catalyze reactions, how activity is measured (Michaelis–Menten kinetics), how enzymes are classified, and what coenzymes do.

## Why It Matters

Nearly every reaction in metabolism is catalyzed: without enzymes, glycolysis, the citric acid cycle, and DNA replication would take years instead of milliseconds. Enzymes are also the targets of about half of all drugs — aspirin inhibits cyclooxygenase, statins inhibit HMG-CoA reductase, and HIV protease inhibitors block viral maturation. Measuring enzyme activity is a core lab skill: elevated liver enzymes (ALT, AST) signal tissue damage. And coenzymes explain vitamin deficiencies: less niacin means less NAD⁺, less B₁ means less thiamine pyrophosphate — the vitamin is the raw material for the coenzyme.

## Core Concepts

### What an enzyme does: lowering the activation barrier

An enzyme does not change the thermodynamics of a reaction: the equilibrium constant and the overall free-energy change \(\Delta G\) are the same with or without the catalyst. What the enzyme changes is the *path* — it binds the substrate(s), positions catalytic groups, and stabilizes the transition state, lowering the activation energy \(\Delta G^\ddagger\). The result is a much faster approach to the same equilibrium. In the simplest picture, catalysis proceeds through an enzyme–substrate complex:

\[ \text{E} + \text{S} \rightleftharpoons \text{ES} \rightarrow \text{E} + \text{P} \]

### The active site: specificity and catalysis

The active site is a three-dimensional pocket lined with side chains that bind the substrate through hydrogen bonds, ionic interactions, and hydrophobic contacts; specificity comes from complementarity between pocket and substrate. The older **lock-and-key** model pictured a rigid fit; the **induced-fit** model holds that both enzyme and substrate change shape on binding, tightening the fit and straining bonds near the reaction center. Catalytic side chains act as general acids or bases, as nucleophiles forming covalent intermediates, and by stabilizing developing charges in the transition state (oxyanion holes).

### Michaelis–Menten kinetics: measuring enzyme activity

For a simple single-substrate enzyme, the initial rate \(v\) follows the Michaelis–Menten equation:

\[ v = \frac{V_{\max}\,[\text{S}]}{K_m + [\text{S}]} \]

- \(V_{\max}\) is the maximum rate, reached when the enzyme is saturated with substrate.
- \(K_m\) (the Michaelis constant) is the substrate concentration at which \(v = V_{\max}/2\); a smaller \(K_m\) means the enzyme binds/processes the substrate more avidly.
- At low [S] the rate is first order in substrate, \(v \approx (V_{\max}/K_m)[\text{S}]\); at high [S] it approaches \(V_{\max}\) (zero order).

The **turnover number** \(k_{\text{cat}} = V_{\max}/[\text{E}]_t\) reports how many substrate molecules one enzyme molecule converts per unit time.

### How enzymes are classified

Enzymes are named for the reaction they catalyze, usually with the suffix *-ase*, in six classes: **oxidoreductases** (redox), **transferases** (group transfer), **hydrolases** (cleavage with water), **lyases** (cleavage without water), **isomerases** (rearrangement), and **ligases** (ATP-driven bond formation). The class tells you the reaction type: a kinase is a transferase moving a phosphoryl group from ATP to a substrate.

### Cofactors and coenzymes: the non-protein partners

- **Cofactors** are metal ions needed for activity: Zn²⁺ in carbonic anhydrase, Mg²⁺ in kinases, Fe²⁺/Fe³⁺ in cytochromes.
- **Coenzymes** are organic molecules that shuttle chemical groups. Many are derived from vitamins:

| Coenzyme | Carries | Vitamin source |
|---|---|---|
| NAD⁺/NADH | hydride (2 e⁻ + H⁺) | niacin (B₃) |
| FAD/FADH₂ | electrons/hydrogens | riboflavin (B₂) |
| CoA (CoA–SH) | acyl groups | pantothenic acid (B₅) |
| Thiamine pyrophosphate | activated aldehydes | thiamine (B₁) |
| Pyridoxal phosphate | amino groups | pyridoxine (B₆) |
| Tetrahydrofolate | one-carbon units | folate (B₉) |
| Biotin | CO₂ | biotin (B₇) |

A coenzyme that binds and releases each turnover is a **cosubstrate** (NAD⁺); one that stays bound is a **prosthetic group** (FAD in succinate dehydrogenase). The enzyme without its partner is an inactive **apoenzyme**; the complete active form is the **holoenzyme**.

### Regulation: keeping catalysis under control

Enzyme activity is regulated by concentration, covalent modification (phosphorylation), **allosteric** effectors that bind away from the active site, and **feedback inhibition**, where a pathway's end product inhibits its first committed enzyme. **Competitive** inhibitors resemble the substrate and are overcome by raising [S]; **noncompetitive** inhibitors bind elsewhere and are not. Some enzymes are made as inactive **zymogens** (trypsinogen, pepsinogen) and activated by cleavage, protecting tissues from premature digestion.

## Worked Examples

### Example 1: Using the Michaelis–Menten equation

An enzyme has \(K_m = 2.0 \text{ mM}\) and \(V_{\max} = 40 \text{ μmol/min}\).

(a) At [S] = 2.0 mM (equal to \(K_m\)):

\[ v = \frac{V_{\max}[\text{S}]}{K_m + [\text{S}]} = \frac{40 \times 2.0}{2.0 + 2.0} = \frac{80}{4.0} = 20 \text{ μmol/min} \]

Half of \(V_{\max}\), as \(K_m\) predicts. (b) At [S] = 6.0 mM:

\[ v = \frac{40 \times 6.0}{2.0 + 6.0} = \frac{240}{8.0} = 30 \text{ μmol/min} \]

The rate rises toward \(V_{\max}\) but is not there yet — partial saturation.

### Example 2: Turnover number with dimensional analysis

The same enzyme is assayed at \([\text{E}]_t = 1.0 \text{ μmol}\). The turnover number is

\[ k_{\text{cat}} = \frac{V_{\max}}{[\text{E}]_t} = \frac{40 \text{ μmol/min}}{1.0 \text{ μmol}} = 40 \text{ min}^{-1} = 0.67 \text{ s}^{-1} \]

The μmol units cancel, leaving a frequency: about 0.67 substrate molecules per enzyme per second — modest; carbonic anhydrase, one of the fastest enzymes, reaches ~10⁶ s⁻¹.

### Example 3: Why a vitamin deficiency looks like an enzyme deficiency

A diet lacking niacin limits NAD⁺. Because NAD⁺ is a cosubstrate for hundreds of dehydrogenases, all of those reactions slow — the "one vitamin, many enzymes" pattern. That is why pellagra (niacin deficiency) has widespread metabolic and neurological symptoms.

## ELI-10: Explain Like I'm 10

An enzyme is like a factory worker whose station only one kind of piece fits. The worker grabs the piece, snaps it into the right shape, and lets it go — over and over, without ever getting used up. Some workers need a helper tool (a coenzyme) that carries parts between stations; if the factory runs out of the material those tools are made from, the whole line slows down.

## High-Yield Points

- Enzymes lower \(\Delta G^\ddagger\) (activation energy) but never change \(\Delta G\) or \(K_{\text{eq}}\) of a reaction.
- Catalysis goes through an ES complex: \(\text{E} + \text{S} \rightleftharpoons \text{ES} \rightarrow \text{E} + \text{P}\).
- \(K_m\) = [S] at half Vmax; small \(K_m\) = high affinity. \(k_{\text{cat}} = V_{\max}/[\text{E}]_t\).
- Six enzyme classes: oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases.
- Coenzymes are vitamin-derived shuttles: NAD⁺ (niacin), FAD (riboflavin), CoA (pantothenate), TPP (thiamine), PLP (B₆).
- Apoenzyme + cofactor/coenzyme = holoenzyme; NAD⁺ is a cosubstrate, FAD can be a prosthetic group.
- Competitive inhibitors are overcome by high [S]; noncompetitive inhibitors are not.
- Zymogens (trypsinogen) are inactive precursors activated by cleavage.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Active site | The pocket where the substrate binds and reacts | Determines specificity and catalysis |
| Induced fit | Enzyme and substrate change shape on binding | Explains how binding can strain bonds and speed reaction |
| Michaelis constant (\(K_m\)) | [S] at half of \(V_{\max}\) | Standard measure of substrate affinity |
| Turnover number (\(k_{\text{cat}}\)) | Substrates converted per enzyme per time | Measures catalytic power per active site |
| Cofactor | Metal ion needed for activity (Zn²⁺, Mg²⁺) | Many enzymes are inactive without it |
| Coenzyme | Vitamin-derived organic group shuttle (NAD⁺, CoA) | Connects vitamin nutrition to enzyme function |
| Apoenzyme / holoenzyme | Inactive enzyme / enzyme plus its cofactor | Defines what "active enzyme" means |
| Zymogen | Inactive precursor activated by cleavage | Protects tissues from premature enzyme action |

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Catalyst changes rate | Catalyst changes equilibrium | Enzymes speed approach to equilibrium; \(\Delta G\) and \(K_{\text{eq}}\) are unchanged |
| \(K_m\) | Affinity | \(K_m\) is a proxy for affinity (smaller = tighter), but it mixes rate constants, so it is not a true binding constant |
| Competitive inhibition | Noncompetitive inhibition | Competitive is overcome by raising [S]; noncompetitive is not |
| Cofactor | Coenzyme | Cofactor = metal ion; coenzyme = organic (usually vitamin-derived) molecule |
| Cosubstrate | Prosthetic group | Cosubstrate binds and leaves each turnover (NAD⁺); prosthetic group stays bound (FAD) |
| Enzyme class | Enzyme name | Class = reaction type (transferase, hydrolase); name often adds substrate, e.g., hexokinase |

## Quick Review

1. Does an enzyme change the equilibrium constant of a reaction? Explain.
2. Define \(K_m\) in words, and state what a small \(K_m\) implies.
3. A dehydrogenase needs NAD⁺. Which vitamin is the source, and what does NAD⁺ carry?
4. Why is a competitive inhibitor less effective when substrate concentration is high?
5. An enzyme with \(V_{\max} = 60 \text{ μmol/min}\) and \([\text{E}]_t = 2.0 \text{ μmol}\): what is \(k_{\text{cat}}\)?
6. What is the difference between an apoenzyme and a holoenzyme?

<details>
<summary>Show answers</summary>

1. No — enzymes lower the activation energy and speed up the reaction, but \(\Delta G\) and \(K_{\text{eq}}\) are unchanged.
2. \(K_m\) is the substrate concentration at which \(v = V_{\max}/2\); a small \(K_m\) implies high affinity (low [S] needed to half-saturate).
3. Niacin (B₃); NAD⁺ carries a hydride (2 electrons + H⁺) in oxidations.
4. Substrate and inhibitor compete for the same active site; high [S] outcompetes the inhibitor, restoring most of the rate.
5. \(k_{\text{cat}} = 60/2.0 = 30 \text{ min}^{-1} = 0.50 \text{ s}^{-1}\).
6. An apoenzyme lacks its cofactor/coenzyme and is inactive; the holoenzyme includes it and is the active form.

</details>

## Related Topics

- Previous: [Protein Structure](09-protein-structure.md)
- Next: [How Do Enzymes Work? Citrate Synthase](11-how-do-enzymes-work-citrate-synthase.md)
- Related: [Peptides and Proteins](04-peptides-and-proteins.md), [Biomolecules: Amino Acids, Peptides, and Proteins chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
