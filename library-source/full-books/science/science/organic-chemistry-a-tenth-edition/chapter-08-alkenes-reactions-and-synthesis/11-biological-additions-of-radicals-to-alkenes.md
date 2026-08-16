---
title: "Biological Additions of Radicals to Alkenes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "8: Alkenes: Reactions and Synthesis"
topic_number: "11"
source: "organic-chemistry.md"
tags:
  - "biological-additions-of-radicals-to-alkenes"
  - "science"
status: "complete"
---

# Biological Additions of Radicals to Alkenes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 8: Alkenes: Reactions and Synthesis](../README.md)  
> **Topic:** 11  
> **Source structure:** OpenStax public textbook outline

## Overview

Enzymes use radicals for reactions that ordinary polar (two-electron) chemistry cannot do easily: activating strong C–H bonds, removing hydroxyl groups, and rearranging carbon skeletons. Nature generates radicals with dedicated cofactors — **coenzyme B₁₂** (adenosylcobalamin), **radical SAM enzymes** (iron–sulfur clusters cleaving S-adenosylmethionine), and metalloenzymes like ribonucleotide reductase. Once formed, the radical does what radicals always do — adds to π bonds, abstracts hydrogens, rearranges — but the active site steers every step, controlling regiochemistry and stereochemistry impossible in a flask. This topic examines the best-known examples: methylmalonyl-CoA mutase, ribonucleotide reductase, radical SAM enzymes, and the uncontrolled radical chain that damages cells — lipid peroxidation.

## Why This Matters

Here, the chain-growth logic of Topic 10 meets human biology. Ribonucleotide reductase makes the deoxyribonucleotides required for DNA replication — without it, cells cannot divide, and its inhibitors (e.g., hydroxyurea) are anticancer drugs. Vitamin B₁₂ deficiency disrupts methylmalonyl-CoA mutase, causing methylmalonic acid buildup and serious metabolic and neurological problems (educational overview only — diagnosis and treatment are clinical matters). Radical reactions also build the **cyclopropane rings** of bacterial membrane lipids: cyclopropane fatty acid synthases (radical SAM enzymes) convert a fatty-acid C=C into a cyclopropane — the biological cyclopropanation. Uncontrolled radical chains — lipid peroxidation — are central to oxidative stress, rancidity, and antioxidants like vitamin E. One mechanistic concept connects lab chemistry, materials, and medicine.

## Core Concepts

### Radicals in biology: controlled generation

Enzymes generate radicals in two main ways:

- **Coenzyme B₁₂ (adenosylcobalamin):** homolysis of the cobalt–carbon bond (Co–C) to a 5'-deoxyadenosine unit gives a 5'-deoxyadenosyl radical and reduced cobalt; the adenosyl radical is a powerful hydrogen-atom abstractor.
- **Radical SAM enzymes:** a [4Fe–4S] cluster transfers an electron to SAM, which fragments into methionine and the same 5'-deoxyadenosyl radical — a huge family performing C–H activation, C–C formation, and methylene transfers.

The radical abstracts a hydrogen from the substrate, creating a substrate radical that rearranges or reacts; a hydrogen is returned at the end. The protein holds intermediates in place, so each step is regio- and stereospecific — unlike flask radical chemistry.

### Coenzyme B₁₂ and methylmalonyl-CoA mutase

The textbook example is **methylmalonyl-CoA mutase**, which converts (R)-methylmalonyl-CoA into succinyl-CoA — a step in odd-chain-fatty-acid and branched-chain-amino-acid metabolism. Steps:

1. Co–C homolysis gives the 5'-deoxyadenosyl radical.
2. It abstracts H from the substrate's methyl group, giving a substrate radical.
3. The substrate radical rearranges — a hydrogen and the CoA-carbonyl group exchange positions (1,2-shift) — giving a succinyl radical.
4. A hydrogen transfers back from 5'-deoxyadenosine, giving succinyl-CoA and regenerating the adenosyl radical, which recombines with cobalt.

Overall: a branched methylmalonyl group isomerizes to the straight-chain succinyl group.

### Ribonucleotide reductase: radicals make DNA possible

Ribonucleotide reductase (RNR) converts ribonucleoside diphosphates (NDPs) to **deoxy**ribonucleoside diphosphates (dNDPs) by removing the 2'-OH of the ribose — the step that commits a cell to DNA synthesis. A **thiyl radical** on a cysteine abstracts H from C3' of the ribose; a radical cascade removes the 2'-OH (as water) and returns H to C3'. The radical is stored as a stable **tyrosyl radical** until needed. Because dividing cells need dNDPs constantly, RNR is a validated drug target; hydroxyurea works by quenching the tyrosyl radical (mechanism-based principle, not a treatment recommendation).

### Lipid peroxidation: an uncontrolled radical chain

Polyunsaturated fatty acids (PUFAs) in membranes contain bis-allylic C–H bonds — a CH₂ flanked by two C=C units — unusually weak (~79 kcal/mol vs ~101 for a normal secondary C–H). A radical initiator (metabolism, pollution, light, etc.) abstracts this hydrogen, giving a resonance-stabilized **pentadienyl radical**; this adds O₂ to form a **peroxyl radical**, which abstracts an H from a neighboring PUFA — a new radical, a chain reaction, membrane damage. Antioxidants break the chain: vitamin E (α-tocopherol) donates H to the peroxyl radical, forming a non-propagating stable radical — the chemistry behind rancidity and oxidative-stress biology.

## ELI-10: Explain Like I'm 10

> Enzymes are like expert chefs using a very hot pan (a radical) with a safe handle, following a recipe exactly. Your body uses these hot pans on purpose — to make DNA parts for new cells, rearrange food molecules, and put little triangles (cyclopropanes) into bacterial membranes. But if a hot pan gets dropped, it starts a kitchen fire — which is why we have "fire extinguishers" like vitamin E.

## High-Yield Points

- Radicals in biology come mainly from coenzyme B₁₂ and radical SAM enzymes (both make the 5'-deoxyadenosyl radical).
- Coenzyme B₁₂ = adenosylcobalamin; Co–C homolysis generates the radical.
- Methylmalonyl-CoA mutase: methylmalonyl-CoA → succinyl-CoA via radical H-transfer and 1,2-shift.
- Ribonucleotide reductase removes the 2'-OH of ribonucleotides → deoxyribonucleotides — essential for DNA synthesis; a drug target.
- Radical SAM enzymes: [4Fe–4S] + SAM → 5'-deoxyadenosyl radical + methionine; also make membrane cyclopropane rings.
- Lipid peroxidation: H abstraction at a bis-allylic C–H → pentadienyl radical → O₂ → peroxyl radical → chain reaction, broken by antioxidants like vitamin E.
- Enzymes control radicals; uncontrolled ones damage cells (oxidative stress).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| radical | Species with an unpaired electron | Reactive intermediate used deliberately by enzymes, damaging when uncontrolled |
| coenzyme B₁₂ (adenosylcobalamin) | B₁₂ with 5'-deoxyadenosine bound to cobalt via a Co–C bond | Biological "radical generator" for rearrangements |
| 5'-deoxyadenosyl radical | Radical formed by Co–C homolysis or from SAM | The universal hydrogen-atom abstractor in B₁₂/radical SAM chemistry |
| radical SAM enzyme | Enzyme that uses a [4Fe–4S] cluster to cleave SAM into a radical | Huge family for C–H activation, C–C formation, cyclopropanation |
| methylmalonyl-CoA mutase | B₁₂-dependent enzyme: methylmalonyl-CoA → succinyl-CoA | Model for radical rearrangements; disrupted in B₁₂ deficiency |
| ribonucleotide reductase | Enzyme converting NDPs to dNDPs by removing ribose 2'-OH | Makes DNA building blocks; anticancer drug target |
| lipid peroxidation | Radical chain reaction oxidizing unsaturated membrane lipids | Mechanism of rancidity, oxidative stress, membrane damage |
| antioxidant | Molecule (e.g., vitamin E) that donates H to radicals, ending the chain | Protects membranes from peroxidation |
| bis-allylic C–H | CH₂ flanked by two C=C units | The weakest C–H in PUFAs; the entry point for peroxidation |

## Worked Examples

### Example 1: The methylmalonyl-CoA mutase radical cycle

**Question:** In the radical vocabulary of Topic 10, explain how methylmalonyl-CoA mutase converts methylmalonyl-CoA to succinyl-CoA.

The cycle mirrors a radical chain: Co–C homolysis generates the 5'-deoxyadenosyl radical (initiation); it abstracts H from the substrate's methyl group, giving a substrate radical (propagation analog); the substrate radical undergoes a 1,2-shift — a hydrogen and the CoA-carbonyl group exchange positions — forming the succinyl skeleton; and the product radical takes H back from 5'-deoxyadenosine, regenerating the adenosyl radical, which recombines with cobalt (termination). Every step is a textbook radical elementary step — abstraction, rearrangement, recombination — confined in the active site.

### Example 2: The lipid peroxidation chain, step by step

**Question:** Trace the chain reaction when a radical attacks linoleic acid (a PUFA with two C=C units separated by a CH₂).

Step 1 — H abstraction: the radical removes the bis-allylic H (~79 vs ~101 kcal/mol for a normal secondary C–H), leaving a pentadienyl radical delocalized over five carbons.

Step 2 — O₂ addition: O₂ (itself a diradical) adds, forming a peroxyl radical, ROO•.

Step 3 — propagation: ROO• abstracts an H from a neighboring PUFA, forming a hydroperoxide and a new pentadienyl radical — the chain continues.

Step 4 — chain breaking: vitamin E (α-tocopherol) donates H to ROO•, leaving a tocopherol radical too resonance-stabilized to propagate.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "Vitamin B₁₂ itself is the coenzyme." | Cyanocobalamin (the vitamin) is converted in the body to coenzyme forms like adenosylcobalamin, which carries the reactive Co–C bond. |
| "All radicals in the body are harmful." | Enzymes generate and control radicals for essential chemistry (DNA synthesis, rearrangements); harm comes from uncontrolled ones. |
| "B₁₂ is needed for ribonucleotide reductase." | RNR uses an iron/tyrosyl radical system, not B₁₂; B₁₂ serves mutases like methylmalonyl-CoA mutase. |
| "Membrane cyclopropanes come from alkene + diazomethane." | Bacteria use cyclopropane fatty acid synthase (a radical SAM enzyme) with SAM — biology's Simmons–Smith, minus the explosive. |

## Quick Review

1. What two biological systems generate the 5'-deoxyadenosyl radical, and what does that radical do first?
2. Describe the four steps of the methylmalonyl-CoA mutase cycle in radical-chemistry vocabulary.
3. What does ribonucleotide reductase do, and why is it essential for dividing cells?
4. Why is the bis-allylic C–H bond of a polyunsaturated fatty acid the weak point where peroxidation begins?
5. How does vitamin E stop a lipid peroxidation chain without starting a new one?

<details>
<summary>Show answers</summary>

1. Coenzyme B₁₂ (adenosylcobalamin, by Co–C homolysis) and radical SAM enzymes (by reductive cleavage of SAM at an iron–sulfur cluster). The adenosyl radical abstracts a hydrogen atom from the substrate, creating a substrate radical.
2. (1) Co–C homolysis → adenosyl radical; (2) H abstraction from the substrate methyl → substrate radical; (3) 1,2-shift rearrangement → succinyl skeleton; (4) H return from 5'-deoxyadenosine → succinyl-CoA; the adenosyl radical recombines with cobalt.
3. It removes the 2'-OH from ribonucleoside diphosphates, making the building blocks of DNA. Without it, DNA replication stalls, so dividing cells depend on it (the basis of its use as a drug target).
4. The bis-allylic C–H is flanked by two C=C units, so its bond dissociation energy is much lower (~79 vs ~101 kcal/mol): it is the easiest H to pull off, and the resulting pentadienyl radical is resonance-stabilized.
5. Vitamin E donates H to the peroxyl radical, forming a hydroperoxide; the tocopherol radical left behind is resonance-stabilized and too unreactive to propagate, so the chain ends.

</details>

## Related Topics

- Previous: [Radical Additions to Alkenes: Chain-Growth Polymers](10-radical-additions-to-alkenes-chain-growth-polymers.md)
- Next: [Reaction Stereochemistry: Addition of H2O to an Achiral Alkene](12-reaction-stereochemistry-addition-of-h2o-to-an-achiral-alkene.md)
- Related: [Addition of Carbenes to Alkenes: Cyclopropane Synthesis](09-addition-of-carbenes-to-alkenes-cyclopropane-synthesis.md)
- Related: [Biomolecules: Lipids chapter overview](../chapter-27-biomolecules-lipids/README.md)
- Related: [Alkenes: Reactions and Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Bond-dissociation values reflect standard reference data (2026-08); clinical remarks are educational context only.
- Last updated: 2026-08-16
