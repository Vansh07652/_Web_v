---
title: "How Do Enzymes Work? Citrate Synthase"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "26: Biomolecules: Amino Acids, Peptides, and Proteins"
topic_number: "11"
source: "organic-chemistry.md"
tags:
  - "how-do-enzymes-work-citrate-synthase"
  - "science"
status: "complete"
---

# How Do Enzymes Work? Citrate Synthase

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 26: Biomolecules: Amino Acids, Peptides, and Proteins](../README.md)  
> **Topic:** 11  
> **Source structure:** OpenStax public textbook outline

## Overview

The previous topic described enzymes in general; this one follows a single enzyme through its full catalytic cycle. **Citrate synthase** is the first enzyme of the citric acid (Krebs) cycle, joining the two-carbon acetyl group of acetyl-CoA to the four-carbon oxaloacetate to make the six-carbon citrate:

\[ \text{acetyl-CoA} + \text{oxaloacetate} + \text{H}_2\text{O} \rightarrow \text{citrate} + \text{CoA–SH} \]

The reaction is remarkable: it is essentially irreversible in the cell, pushing the whole cycle forward; its mechanism showcases the catalytic toolkit — ordered binding, induced-fit closure that seals off water, general-base enolate formation, and thioester hydrolysis; and the enzyme is *prochiral*, telling apart the two apparently identical arms of citrate.

## Why It Matters

The citric acid cycle is the hub of aerobic metabolism: it oxidizes acetyl groups to CO₂, harvesting NADH and FADH₂ for the electron-transport chain. As the cycle's irreversible entry point, citrate synthase is a major control point, inhibited by its products (citrate, CoA–SH) and by ATP and NADH — the cell's energy-surplus signals. Mechanistically it is a textbook enzyme: active site, induced fit, general acid–base catalysis, and prochirality all appear in one protein. Understanding it also explains how intermediate-mimic inhibitors can shut down a pathway.

## Core Concepts

### The reaction and its thermodynamics

Citrate synthase catalyzes a Claisen-type condensation: the acetyl group of acetyl-CoA (a thioester, `CH3–C(=O)–S–CoA`) is transferred to the ketone carbon of oxaloacetate. The reaction is strongly exergonic; textbook tables give \(\Delta G^{\circ\prime} \approx -32 \text{ kJ/mol}\) under standard biochemical conditions, and the equilibrium lies far toward citrate. That thermodynamic pull, plus the hydrolysis of the thioester intermediate, makes the overall reaction effectively irreversible in the cell — the cycle can only go forward at this step.

### Structure: a dimer with a moving lid

Pig-heart citrate synthase — the classic study enzyme — is a homodimer: two identical subunits, each with a large and a small domain and the active site in the cleft between them. The small domain acts like a lid: when oxaloacetate binds, it swings closed, burying the substrates and excluding bulk water. That exclusion matters, because water in the pocket would hydrolyze the activated intermediate instead of letting it form the new C–C bond.

### Ordered binding: oxaloacetate first

The enzyme uses an **ordered mechanism**: oxaloacetate binds first, then acetyl-CoA. Oxaloacetate binding triggers lid closure and creates the acetyl-CoA site. The order guarantees the reactive enolate is always formed next to its partner.

### The catalytic cycle in words

1. **Enolate formation (general-base catalysis):** a conserved active-site histidine (His 274 in the pig enzyme) removes the α-proton of the acetyl group; the electrons move onto the carbonyl oxygen, giving the nucleophilic enolate:

\[ \text{CH}_3\text{–C(=O)–S–CoA} \xrightarrow{\text{His 274}} \text{CH}_2=\text{C(O}^-\text{)–S–CoA} + \text{H}^+ \]

2. **C–C bond formation:** the enolate carbon attacks the carbonyl carbon of oxaloacetate, forming a new C–C bond and giving the tetrahedral alkoxide of **citryl-CoA**, a thioester of citrate.
3. **Hydrolysis:** water attacks the thioester carbonyl of citryl-CoA, assisted again by His 274; cleavage gives **citrate** and free **CoA–SH**, and the histidine is regenerated.

The same residue therefore plays two roles: enolate formation and thioester hydrolysis. Note that the overall reaction consumes a molecule of water — hydrolysis of the citryl-CoA intermediate is what makes the condensation effectively irreversible.

### Prochirality: the enzyme knows which "half" of citrate is which

Citrate is prochiral: its central carbon carries two identical-looking –CH₂COOH arms, indistinguishable in free solution. But the enzyme's asymmetric active site binds them differently — the *re* and *si* faces are distinct. Isotope-labeling experiments proved this: label from acetyl-CoA appears in only one arm, and the next enzyme, aconitase, always removes water from that same arm. This is the classic Ogston (1948) argument for how enzymes distinguish prochiral molecules.

### Control and inhibition

Because the step is irreversible, citrate synthase is a control point: ATP, NADH, and succinyl-CoA (high-energy-charge signals) inhibit it, and its products citrate and CoA–SH feed back. Intermediate-mimic inhibitors exploit the same active-site chemistry to block the enzyme — a general drug-design strategy.

## Worked Examples

### Example 1: Atom accounting for the condensation

Acetyl-CoA contributes 2 carbons and oxaloacetate 4, so citrate has

\[ 2 + 4 = 6 \text{ carbons} \]

and the reaction is 1:1 in the two substrates. If a mitochondrion oxidizes 2.0 mmol of acetyl-CoA, the citrate produced is

\[ 2.0 \text{ mmol acetyl-CoA} \times \frac{1 \text{ mmol citrate}}{1 \text{ mmol acetyl-CoA}} = 2.0 \text{ mmol citrate} \]

The molar ratio cancels, and carbon is conserved: every carbon of both substrates ends up in citrate.

### Example 2: From \(\Delta G^{\circ\prime}\) to an equilibrium constant

Using

\[ \Delta G^{\circ\prime} = -RT \ln K'_{\text{eq}} \]

with \(R = 8.314 \text{ J mol}^{-1}\text{K}^{-1}\), \(T = 298 \text{ K}\), \(\Delta G^{\circ\prime} = -32{,}000 \text{ J/mol}\):

\[ \ln K'_{\text{eq}} = \frac{32{,}000}{8.314 \times 298} = \frac{32{,}000}{2{,}478} = 12.9 \]

\[ K'_{\text{eq}} = e^{12.9} \approx 4 \times 10^5 \]

A very large equilibrium constant — the reaction strongly favors citrate, consistent with its role as the irreversible entry point of the cycle. (The prime on \(\Delta G^{\circ\prime}\) and \(K'_{\text{eq}}\) signals the biochemical convention: pH 7, water at 55.5 M, and standard concentrations.)

### Example 3: Label-tracking a prochiral molecule

If cells are fed acetyl-CoA with \(^{14}\text{C}\) in the acetyl carbon, the label appears in only one of citrate's two –CH₂COOH arms — the enzyme binds the prochiral center in a fixed orientation, and aconitase later removes water from that same arm. This is the proof that "identical" groups on a prochiral center are not equivalent at an enzyme's active site, a concept that recurs throughout metabolism.

## ELI-10: Explain Like I'm 10

Imagine a machine that joins the front and back halves of a car. The back half slides in first and closes a door so nothing else can get in; then the front half slides in, a helper grabs a lever to snap them together, and the finished car comes out — the helper ready for the next one. The machine also knows the left wheel from the right wheel, even though they look identical, and never mixes them up.

## High-Yield Points

- Citrate synthase: acetyl-CoA + oxaloacetate + H₂O → citrate + CoA–SH; the cycle's irreversible entry step.
- \(\Delta G^{\circ\prime} \approx -32 \text{ kJ/mol}\), \(K'_{\text{eq}} \approx 4 \times 10^5\) at 298 K.
- Ordered mechanism: oxaloacetate binds first; binding closes the small-domain lid and excludes water.
- His 274 (pig enzyme) is the general base for enolate formation and later for citryl-CoA hydrolysis.
- Mechanism: enolate formation → C–C bond formation (Claisen-type) → thioester hydrolysis; net reaction consumes H₂O.
- Citrate is prochiral; the enzyme distinguishes the two arms (Ogston), and aconitase later removes water from the labeled arm.
- Inhibited by ATP, NADH, succinyl-CoA, and its products (citrate, CoA–SH).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Citrate synthase | First enzyme of the citric acid cycle; joins acetyl-CoA and oxaloacetate | Irreversible entry point committing carbon to the cycle |
| Thioester | `R–C(=O)–S–CoA`; high-energy acyl carrier | Acetyl-CoA's activated form drives the condensation |
| Enolate | Carbanion adjacent to a carbonyl, formed by deprotonation | The nucleophile that attacks oxaloacetate |
| General-base catalysis | A side chain (His 274) removes a proton to make a nucleophile | Speeds enolate formation without free base in solution |
| Ordered mechanism | Substrates bind in a required sequence (oxaloacetate first) | Ensures the reactive enolate always meets its partner |
| Prochiral | A center with two identical groups that an enzyme can distinguish | Explains stereospecificity of citrate metabolism |
| Induced fit / domain closure | Binding oxaloacetate swings the small domain shut | Excludes water so the intermediate can react |

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Condensation step | Hydrolysis step | First the enolate makes the C–C bond (citryl-CoA); then water hydrolyzes the thioester — two separate steps, one enzyme |
| \(\Delta G^{\circ\prime}\) | \(\Delta G\) | Prime = standard biochemical conditions (pH 7, defined concentrations); the actual cellular \(\Delta G\) depends on real concentrations |
| Prochiral | Chiral | Prochiral centers have two identical groups that become distinguishable on binding; chiral centers already have four different groups |
| Acetyl-CoA's role | CoA's role | Acetyl-CoA carries the 2-carbon unit; CoA–SH is the released carrier, not the reacting carbon |
| Citrate synthase's irreversibility | Thermodynamic freedom | The large negative \(\Delta G^{\circ\prime}\) means the step is effectively one-way — it *pushes* the cycle rather than being freely reversible |

## Quick Review

1. Write the overall reaction catalyzed by citrate synthase, including water.
2. Why must oxaloacetate bind before acetyl-CoA?
3. What two jobs does His 274 perform, in order?
4. Why does excluding water from the active site matter during the condensation step?
5. Estimate \(K'_{\text{eq}}\) from \(\Delta G^{\circ\prime} = -32 \text{ kJ/mol}\) at 298 K (use \(RT \approx 2.5 \text{ kJ/mol}\)).
6. What does it mean that citrate is prochiral, and which experiment demonstrated it?

<details>
<summary>Show answers</summary>

1. Acetyl-CoA + oxaloacetate + H₂O → citrate + CoA–SH.
2. Oxaloacetate binding closes the lid (induced fit), excluding water and creating the acetyl-CoA site; the ordered sequence guarantees the enolate always forms next to its partner.
3. First it deprotonates acetyl-CoA to form the enolate (general base); then it activates water to hydrolyze citryl-CoA.
4. Water would hydrolyze the activated citryl-CoA intermediate before the C–C bond forms, wasting the acetyl group.
5. \(\ln K'_{\text{eq}} = 32/2.5 = 12.8\), so \(K'_{\text{eq}} \approx e^{12.8} \approx 3.6 \times 10^5\) — the reaction strongly favors citrate.
6. Citrate's two –CH₂COOH arms are identical in free solution but distinguishable at the enzyme's active site; feeding isotopically labeled acetyl-CoA showed the label always enters the same arm, which aconitase later distinguishes.

</details>

## Related Topics

- Previous: [Enzymes and Coenzymes](10-enzymes-and-coenzymes.md)
- Related: [Protein Structure](09-protein-structure.md), [Biomolecules: Amino Acids, Peptides, and Proteins chapter overview](../README.md)
- Next: (Chapter 27: Biomolecules: Lipids — fatty acid metabolism continues the theme of acetyl-CoA chemistry)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
