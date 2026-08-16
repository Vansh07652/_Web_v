---
title: "Amino Acid Analysis of Peptides"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "26: Biomolecules: Amino Acids, Peptides, and Proteins"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "amino-acid-analysis-of-peptides"
  - "science"
status: "complete"
---

# Amino Acid Analysis of Peptides

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 26: Biomolecules: Amino Acids, Peptides, and Proteins](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

**Amino acid analysis** answers the first question about an unknown peptide: *which* amino acids it contains and *how many of each* — its **composition**. It does not tell the order of residues (that is sequencing, Topic 6). The classical pipeline has three stages: (1) **total acid hydrolysis** — heat the peptide in 6 M HCl at 110 °C for about 24 h to break every peptide bond; (2) **separation** — resolve the freed amino acids by ion-exchange chromatography or HPLC; (3) **detection and quantitation** — react each amino acid with ninhydrin (or a similar reagent) and measure the colored product, comparing with standards of known amount.

## Why This Matters

Composition is the first piece of analytical information about any peptide or protein, and it is used daily: newborn screening programs quantify amino acids in dried blood spots to detect metabolic disorders such as phenylketonuria; food scientists measure protein quality by amino acid composition; pharmaceutical labs verify that a peptide drug has the expected composition before release. Composition also constrains sequencing: if an analysis says a peptide contains two glycines and one alanine, the sequence must be one of only three possibilities (Gly–Gly–Ala, Gly–Ala–Gly, Ala–Gly–Gly). Every step of the pipeline — including its artifacts — must be understood to interpret the numbers correctly.

## Core Concepts

### Total acid hydrolysis and its artifacts

Heating a peptide in 6 M HCl at 110 °C for 24 h in a sealed tube cleaves all peptide bonds, giving a mixture of free amino acids. But the harsh conditions cause reproducible side reactions that the analyst must account for:

- **Tryptophan is destroyed**, so it appears missing from the analysis.
- **Asparagine and glutamine are deamidated** to aspartic acid and glutamic acid, releasing ammonium ion (NH₄⁺). Measuring the ammonia tells you the combined Asn + Gln content.
- **Serine and threonine are partially destroyed** — reported values need correction factors.
- **Valine–isoleucine and other hindered bonds hydrolyze slowly**; a second, longer hydrolysis (48–72 h) is used, and values are extrapolated.

Alternative digestions (enzymatic proteases, or base hydrolysis with its own artifacts) give gentler but less complete cleavage.

### Separation by ion-exchange chromatography

The hydrolysate is loaded onto a column of sulfonated polystyrene — a strong cation-exchange resin. At low pH the amino acids are cations and bind to the resin; they are then eluted with a gradient of increasing pH and salt concentration. Because the pKa values and charges differ, amino acids elute in a reproducible order: acidic amino acids (Asp, Glu) first, then the neutral ones, then the basic ones (His, Lys, Arg) last. The elution order is calibrated against a mixture of known amino acid standards run under identical conditions, so each peak is identified by its elution time.

### Detection and quantitation with ninhydrin

Ninhydrin reacts with the free α-amino group of an amino acid to give a purple product called **Ruhemann's purple**, which absorbs at 570 nm; proline, a secondary amine, gives a yellow product measured at 440 nm. The absorbance is proportional to the amount of amino acid (Beer–Lambert law, constant path length), so peak areas are converted to amounts by comparison with standards of known concentration. Modern amino acid analyzers automate hydrolysis, chromatography, post-column ninhydrin reaction, and peak integration; HPLC-based methods instead derivative the amino acids *before* the column (for example, with phenyl isothiocyanate) for sensitive UV or fluorescence detection.

### Composition versus sequence

Composition is a list: "Gly₂, Ala₁, Ser₁" means the peptide has four residues — two glycine, one alanine, one serine — but says nothing about their order. Two different peptides can share a composition (Gly–Gly–Ala–Ser versus Gly–Ala–Gly–Ser). Establishing the order is the job of sequencing methods (Topic 6), which use the composition as a constraint and a check.

## ELI-10: Explain Like I'm 10

> Amino acid analysis is like taking apart a bead necklace and counting how many beads of each color it had — without caring about the order. You boil the necklace in strong acid to pop every knot, sort the loose beads by size and charge on a special column, and then count each color by how much purple dye it makes. Two kinds of beads melt in the boiling (tryptophan), and two others come out looking like their cousins (asparagine and glutamine), so you have to correct the count.

## High-Yield Points

- Pipeline: 6 M HCl hydrolysis (110 °C, 24 h) → ion-exchange separation → ninhydrin quantitation vs standards.
- Hydrolysis artifacts: Trp destroyed; Asn/Gln → Asp/Glu + NH₄⁺; Ser/Thr partial loss; Val–Ile bonds slow (use 48–72 h runs).
- Elution order on the cation exchanger: acidic → neutral → basic amino acids.
- Ninhydrin: primary amines give purple (570 nm); proline gives yellow (440 nm).
- Absorbance ∝ amount (Beer–Lambert); always compare with standards run under identical conditions.
- Composition ≠ sequence; composition constrains but does not determine the order.
- Quantitate NH₄⁺ to recover the Asn + Gln content lost to deamidation.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| composition | List of amino acids and their counts in a peptide | The first analytical question about any peptide |
| total acid hydrolysis | 6 M HCl, 110 °C, ~24 h cleavage of all peptide bonds | Converts the peptide to free amino acids for analysis |
| deamidation | Loss of –NH₂ from Asn/Gln side chains to give Asp/Glu | Makes Asn and Gln appear as Asp and Glu, plus NH₄⁺ |
| ion-exchange chromatography | Separation by charge on a resin column | Resolves the 20 amino acids into reproducible peaks |
| ninhydrin | Reagent that colors amino acids purple (570 nm) | Quantitative detection; proline gives yellow (440 nm) |
| Ruhemann's purple | The colored product of ninhydrin with primary amines | The measured chromophore in classic analyzers |
| standard | Known compound/amount run under identical conditions | The reference that converts peak area into amount |
| sequence | The order of residues in the chain | Not given by composition; determined by sequencing |

## Worked Examples

### Example 1: Reading a composition analysis

A peptide is hydrolyzed and analyzed. The ion-exchange chromatogram, normalized to the smallest peak, gives: Gly 2.0, Ala 1.0, Asp 1.0, Ser 1.0. The peptide therefore has 5 residues: two glycine, one alanine, one aspartic acid (or asparagine — see Example 2), and one serine. Composition: (Gly₂, Ala₁, Asp₁, Ser₁). Note that this does *not* identify the sequence: 5!/2! = 60 different sequences share this composition.

### Example 2: Correcting for hydrolysis artifacts

A peptide known to contain one tryptophan, one asparagine, and one glutamine is hydrolyzed in 6 M HCl and analyzed. Expect: **tryptophan is not detected** (destroyed), and the asparagine and glutamine appear as **aspartic acid and glutamic acid**, with two equivalents of NH₄⁺ released per peptide (one from each amide). An analyst who does not know the peptide's sequence would report "no Trp, Asp 1, Glu 1, plus 2 NH₄⁺" and should flag the ammonia signal as evidence of two amide side chains.

### Example 3: Ninhydrin quantitation with dimensional analysis

A leucine standard of 50.0 nmol gives absorbance 0.400 at 570 nm. An aliquot of the unknown hydrolysate gives 0.250 under identical conditions. Because absorbance is proportional to amount (Beer–Lambert, same path length), set up the ratio with units:

\[
n_{\text{unknown}} = \frac{A_{\text{unknown}}}{A_{\text{standard}}} \times n_{\text{standard}} = \frac{0.250}{0.400} \times 50.0\ \text{nmol} = 31.3\ \text{nmol leucine in the aliquot}
\]

The result must be scaled by the aliquot fraction and the hydrolysis dilution to report the leucine content of the whole peptide sample.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| Amino acid analysis gives the sequence. | It gives composition (which and how many); sequencing gives the order. |
| "Tryptophan was not detected, so the peptide has no tryptophan." | Trp is destroyed by acid hydrolysis; absence from the chromatogram is an artifact, not evidence. |
| Asparagine is reported as asparagine. | Deamidation converts Asn → Asp (and Gln → Glu) during hydrolysis; the ammonia peak reveals the original amides. |
| Proline gives the purple ninhydrin color. | Proline is a secondary amine — it gives the yellow product (440 nm). |
| One 24 h hydrolysis is complete for every bond. | Val–Ile and other hindered bonds hydrolyze slowly; a second longer run is standard practice. |
| Bigger peaks mean more amino acid only if compared to each other. | Peak areas must be compared with *standards* of known amount, not merely with each other, for absolute quantitation. |

## Quick Review

1. List the three stages of the classical amino acid analysis pipeline.
2. What happens to tryptophan, asparagine, and glutamine during 6 M HCl hydrolysis?
3. In what order do acidic, neutral, and basic amino acids elute from a sulfonated-polystyrene column?
4. What color does ninhydrin give with a primary amine, and with proline?
5. A standard of 25.0 nmol gives A = 0.500; the unknown aliquot gives A = 0.300. How much amino acid is in the aliquot?
6. Why does composition alone not determine a peptide's identity?

<details>
<summary>Show answers</summary>

1. Total acid hydrolysis (6 M HCl, 110 °C, ~24 h); separation by ion-exchange chromatography or HPLC; detection/quantitation with ninhydrin (or a pre-column derivative) versus standards.
2. Trp is destroyed; Asn → Asp and Gln → Glu (deamidation), each releasing NH₄⁺.
3. Acidic (Asp, Glu) first, then neutral, then basic (His, Lys, Arg).
4. Primary amines: purple (Ruhemann's purple, 570 nm); proline: yellow (440 nm).
5. n = (0.300/0.500) × 25.0 nmol = 15.0 nmol.
6. Two different sequences can share the same composition; composition lists only which residues and how many.
</details>

## Related Topics

- Previous: [Peptides and Proteins](04-peptides-and-proteins.md)
- Next: [Peptide Sequencing: The Edman Degradation](06-peptide-sequencing-the-edman-degradation.md)
- Related: [Amino Acids and the Henderson–Hasselbalch Equation: Isoelectric Points](02-amino-acids-and-the-henderson-hasselbalch-equation-isoelectric-points.md)
- Related: [Structures of Amino Acids](01-structures-of-amino-acids.md)
- Related: [Chapter 26 overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Hydrolysis conditions (6 M HCl, 110 °C, 24 h) and artifacts (Trp destruction, Asn/Gln deamidation, slow Val–Ile bonds), ion-exchange elution order, and ninhydrin wavelengths (570/440 nm) are standard analytical biochemistry facts.
- Last updated: 2026-08-16
