---
title: "Peptide Sequencing: The Edman Degradation"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "26: Biomolecules: Amino Acids, Peptides, and Proteins"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "peptide-sequencing-the-edman-degradation"
  - "science"
status: "complete"
---

# Peptide Sequencing: The Edman Degradation

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 26: Biomolecules: Amino Acids, Peptides, and Proteins](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Composition (Topic 5) tells you *which* amino acids a peptide contains; **sequencing** tells you the *order*. The classic chemical method is the **Edman degradation** (Pehr Edman, 1950s). It removes and identifies one residue at a time from the N-terminus: **phenyl isothiocyanate (PITC)** couples to the free N-terminal amino group; anhydrous acid then cleaves the first peptide bond, releasing that residue as a **phenylthiohydantoin (PTH) derivative** identified by chromatography. Because the rest of the chain stays intact, the cycle repeats to read the sequence residue by residue, N-terminus to C-terminus.

## Why This Matters

Sequence determines function — a single change can cause disease, as when sickle-cell hemoglobin swaps glutamic acid for valine at position 6 of the β-globin chain. Insulin was the first protein sequenced (Sanger, 1958 Nobel Prize); Edman chemistry made routine sequencing possible for decades and still confirms N-termini today.

## Core Concepts

### What sequencing adds beyond composition

A composition such as Gly₂, Ala₁, Ser₁ is consistent with several sequences; sequencing determines the unique order and provides a built-in check — the residues identified by Edman must sum to the composition from Topic 5.

### Sanger's one-shot N-terminal method

Before Edman, Frederick Sanger labeled the N-terminus with **2,4-dinitrofluorobenzene (DNFB, Sanger's reagent)**: the fluorine is displaced by the N-terminal amino group (aromatic nucleophilic substitution), forming a stable DNP-labeled peptide. Total acid hydrolysis then destroys the peptide, releasing the labeled **DNP-amino acid**; chromatography identifies only the N-terminal residue — the method cannot sequence beyond the first.

### The Edman cycle: coupling, cleavage, conversion, identification

PITC is C₆H₅–N=C=S (SMILES-style: C1=CC=CC=C1N=C=S), an isothiocyanate that reacts specifically with free primary amino groups. Each cycle has four stages:

1. **Coupling (mild base, pH ≈ 9):** PITC adds to the N-terminal amine, forming a **phenylthiocarbamyl (PTC) peptide** — the nitrogen's lone pair attacks the isothiocyanate carbon, and the product is an N-terminal thiourea-like adduct.
2. **Cleavage (anhydrous trifluoroacetic acid, TFA):** the amide bond of the labeled N-terminal residue is selectively cleaved; the residue leaves as a **thiazolinone**, and the rest of the chain — now one residue shorter, with a fresh free N-terminus — survives intact.
3. **Conversion (aqueous acid):** the thiazolinone rearranges to the more stable **phenylthiohydantoin (PTH) amino acid**.
4. **Identification:** the PTH-amino acid is compared by HPLC (retention time) against a set of PTH standards, identifying which residue was removed.

The cycle repeats on the shortened peptide, so each cycle identifies the next residue in order.

### Practical limits and complications

Each cycle is not perfectly efficient — typically about 98% — so the signal of intact chains decays with cycle number; after roughly 50 cycles less than a third remain full-length, setting the practical limit near 50–70 residues per run. Complications: a **blocked N-terminus** (acetylation, formyl-Met, or pyroglutamate formation) prevents coupling, so the peptide resists Edman until deblocked; and **disulfide-linked chains** must be reduced (e.g., with dithiothreitol) and alkylated (e.g., with iodoacetamide) first, or the two chains sequence together as one.

### Sequencing larger proteins by fragment overlap

For longer proteins the standard strategy is: (1) reduce and alkylate disulfides; (2) cleave into fragments with sequence-specific reagents — trypsin after Lys/Arg, chymotrypsin after aromatic residues, cyanogen bromide (CNBr) after Met; (3) sequence each fragment by Edman; (4) reassemble by overlapping fragments from two cleavage chemistries. Modern labs often skip chemical sequencing for routine work, using tandem mass spectrometry (MS/MS) — but the overlap logic remains the conceptual foundation.

## ELI-10: Explain Like I'm 10

> Edman sequencing is like eating a sandwich one bite from the top. Each cycle nips off exactly the topmost amino acid, tags it with a colored label so you can name it, and leaves the rest of the sandwich untouched for the next bite. You keep biting and naming from the N-end until you have the whole order. The catch: each bite only works about 98 times out of 100, so after about 50 bites the signal gets too weak to continue.

## High-Yield Points

- Edman degrades one residue per cycle from the N-terminus: PITC coupling → TFA cleavage → PTH-amino acid → HPLC identification.
- The remaining chain is intact, so cycles repeat — this is what makes Edman a *sequencing* method, unlike Sanger's one-shot DNFB label.
- Practical limit ~50–70 residues (~98% yield per cycle; after 50 cycles only ~36% of chains remain unreacted).
- Blocked N-termini (acetyl, formyl-Met, pyroglutamate) resist coupling; disulfides must be reduced and alkylated first.
- Fragment strategy: trypsin (after Lys/Arg), chymotrypsin (after aromatic residues), CNBr (after Met); reassemble by overlap.
- Sanger/DNFB identifies only the N-terminal residue and destroys the peptide.
- Modern sequencing uses tandem mass spectrometry; Edman still confirms N-termini and handles short/novel peptides.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Edman degradation | Cycle that removes and identifies one N-terminal residue at a time | The classic chemical sequencing method |
| phenyl isothiocyanate (PITC) | Reagent that labels the free N-terminal amino group | The key to selective, repeatable removal |
| PTC-peptide | Phenylthiocarbamyl-labeled peptide after coupling | The activated species that cleaves in TFA |
| thiazolinone | First cleavage product of the labeled residue | Rearranges to the stable PTH derivative |
| PTH-amino acid | Phenylthiohydantoin derivative of a residue | Identified by HPLC against standards |
| DNFB (Sanger's reagent) | 2,4-dinitrofluorobenzene, labels the N-terminus | One-shot N-terminal identification; destroys the peptide |
| blocked N-terminus | N-terminal amine that is acylated or otherwise substituted | Prevents Edman coupling until deblocked |
| overlap strategy | Reassembling fragments using shared sequences | How long proteins are sequenced from short runs |

## Worked Examples

### Example 1: Edman cycle-by-cycle for a tetrapeptide

Sequence Ala–Gly–Ser–Leu (written N→C) by Edman:

- **Cycle 1:** PITC couples to the N-terminal alanine; TFA cleaves the Ala–Gly bond; the PTH derivative of alanine is identified by HPLC. Remaining chain: Gly–Ser–Leu.
- **Cycle 2:** PTH-glycine is identified. Remaining chain: Ser–Leu.
- **Cycle 3:** PTH-serine is identified. Remaining chain: Leu.
- **Cycle 4:** PTH-leucine is identified — the C-terminal residue confirms the last position.

Result: Ala–Gly–Ser–Leu. The first three cycles identify residues 1–3; the last cycle both identifies the C-terminus and checks the composition.

### Example 2: Yield decay with dimensional analysis

If each cycle proceeds with 98% yield, what fraction of peptide chains are still intact (not yet cleaved at the target position) after 50 cycles? Write the formula, then substitute:

\[
f = (0.98)^{50}
\]

Evaluate via logarithms: \(\ln f = 50 \ln(0.98) = 50(-0.0202) = -1.010\), so \(f = e^{-1.010} = 0.36\). Only about 36% of chains remain unreacted at position 50 — the signal from intact chains decays exponentially, which is why single-run Edman sequencing is practically limited to roughly 50–70 residues.

### Example 3: Reassembling a sequence from overlapping fragments

A decapeptide gives these fragments: trypsin cleavage → **Ala–Gly–Phe–Lys**, **Ser–Val–Leu–Arg**, **Asp–Gln–Thr**; chymotrypsin cleavage → **Phe–Lys–Ser–Val**, **Leu–Arg–Asp**. Overlap logic: the trypsin fragment ending in …Phe–Lys must continue with the chymotrypsin fragment starting Phe–Lys–Ser–Val, so the order is Ala–Gly–Phe–Lys–Ser–Val. The next chymotrypsin fragment Leu–Arg–Asp overlaps the second trypsin fragment Ser–Val–Leu–Arg (…Ser–Val continues with Leu–Arg…), giving Ala–Gly–Phe–Lys–Ser–Val–Leu–Arg, and the final Asp–Gln–Thr completes the chain:

\[
\text{Ala–Gly–Phe–Lys–Ser–Val–Leu–Arg–Asp–Gln–Thr}
\]

The two cleavage chemistries provide the redundant overlaps that make the assembly unambiguous — and the composition from Topic 5 serves as the final check.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| Edman removes residues from the C-terminus. | It works from the N-terminus; C-terminal analysis needs carboxypeptidases. |
| PITC and DNFB do the same job. | Both label the N-terminus, but Edman's PITC cycle removes one residue at a time without destroying the chain; DNFB is one-shot and hydrolytic. |
| Each cycle identifies the whole remaining peptide. | Each cycle identifies exactly one residue — the PTH-amino acid from the N-terminus. |
| "98% yield per cycle" means 98% of the sequence is correct. | It means 2% of chains fail to advance each cycle; the fraction of intact chains decays as (0.98)^n. |
| Disulfide-linked peptides sequence normally. | Two chains linked by disulfides behave as one molecule; reduce and alkylate first. |
| Edman sequencing can read entire proteins in one run. | Practical limit is ~50–70 residues; longer proteins need fragment/overlap strategies or mass spectrometry. |

## Quick Review

1. List the four stages of one Edman cycle.
2. Why is the Edman degradation a *sequencing* method while Sanger's DNFB method is not?
3. A peptide resists Edman degradation entirely. What structural feature is the likely culprit, and how can it be dealt with?
4. Compute the fraction of intact chains after 40 cycles at 98% yield per cycle.
5. Which reagent cleaves a polypeptide after methionine residues, and why is this useful?
6. Cycle 1 of a tripeptide gives PTH-glycine; cycle 2 gives PTH-leucine. What is the remaining residue, and where does it sit in the chain?

<details>
<summary>Show answers</summary>

1. Coupling (PITC, pH ≈ 9) → cleavage (anhydrous TFA) → conversion (aqueous acid to PTH) → identification (HPLC vs PTH standards).
2. Edman removes one residue per cycle and leaves the shortened chain intact for further cycles; Sanger's method hydrolyzes the whole peptide, so it identifies only the N-terminal residue once.
3. A blocked N-terminus (acetylation, formyl-Met, or pyroglutamate); deblock with the appropriate enzyme (e.g., pyroglutamate aminopeptidase) or remove the blocking group chemically.
4. f = (0.98)^40 = e^(40 × −0.0202) = e^(−0.808) ≈ 0.45 (about 45%).
5. Cyanogen bromide (CNBr) cleaves on the C-terminal side of methionine; the methionine-derived fragments provide overlap information for assembly.
6. Glycine is residue 1 and leucine residue 2; the third residue is whatever matches the composition (cycle 3 would confirm it), and it sits at the C-terminus.
</details>

## Related Topics

- Previous: [Amino Acid Analysis of Peptides](05-amino-acid-analysis-of-peptides.md)
- Next: [Peptide Synthesis](07-peptide-synthesis.md)
- Related: [Peptides and Proteins](04-peptides-and-proteins.md)
- Related: [Automated Peptide Synthesis: The Merrifield Solid-Phase Method](08-automated-peptide-synthesis-the-merrifield-solid-phase-method.md)
- Related: [Protein Structure](09-protein-structure.md)
- Related: [Chapter 26 overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Edman chemistry (PITC coupling, TFA cleavage, PTH conversion, HPLC identification), ~98% cycle yield, practical length limits, trypsin/chymotrypsin/CNBr specificity, and the sickle-cell Glu6Val example are standard biochemical facts.
- Last updated: 2026-08-16
