---
title: "Chirality at Nitrogen, Phosphorus, and Sulfur"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "5: Stereochemistry at Tetrahedral Centers"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "chirality-at-nitrogen-phosphorus-and-sulfur"
  - "science"
status: "complete"
---

# Chirality at Nitrogen, Phosphorus, and Sulfur

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 5: Stereochemistry at Tetrahedral Centers](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

Carbon is not the only atom that can be a stereocenter. Nitrogen, phosphorus, and sulfur carry three-dimensional handedness too, but the *stability* of that chirality varies enormously — and one process controls the difference: **pyramidal inversion**. A trivalent amine nitrogen is pyramidal, and three different groups plus a lone pair make it a stereogenic center; yet simple amines cannot be resolved because the nitrogen umbrella-flips through a planar transition state billions of times per second, interconverting the two enantiomers. Phosphorus inverts far more slowly, so chiral phosphines are stable and are workhorses of asymmetric catalysis. Sulfur in sulfoxides and sulfonium salts does not invert at a detectable rate at ordinary temperatures, making chiral sulfoxides isolable — and the basis of a major drug class.

The controlling numbers: ammonia's inversion barrier is about 24 kJ/mol (≈ 6 kcal/mol), phosphine's roughly 130 kJ/mol (≈ 31 kcal/mol):

\[
\frac{\Delta G^\ddagger_{\text{PH}_3}}{\Delta G^\ddagger_{\text{NH}_3}} \approx \frac{130\ \text{kJ/mol}}{24\ \text{kJ/mol}} \approx 5.4
\]

Sulfoxides sit atop the stability ladder with inversion barriers far too high to measure by ordinary racemization experiments.

## Why This Matters

- **Asymmetric catalysis:** Chiral phosphine ligands — such as DIPAMP, 1,2-bis[(2-methoxyphenyl)phenylphosphino]ethane — coordinate to rhodium and deliver near-perfect enantioselectivity in hydrogenations. The Monsanto L-DOPA process using a DIPAMP–rhodium catalyst is a landmark of industrial asymmetric synthesis; W. S. Knowles shared the 2001 Nobel Prize in Chemistry for this work.
- **Drugs:** **Esomeprazole**, the \((S)\)-enantiomer of omeprazole, is a chiral sulfoxide marketed as a single enantiomer because the two sulfoxide enantiomers are metabolized differently.
- **Biochemistry:** **S-adenosylmethionine** (SAM), the body's main methyl donor, contains a chiral sulfonium center; methionine residues oxidized to chiral **methionine sulfoxide** under oxidative stress are recognized stereospecifically by repair enzymes.
- **Exams:** "Can this amine be resolved?" questions test whether you understand inversion barriers, not just memorized rules.

## Core Concepts

### Nitrogen: stereogenic but rapidly inverting

An amine nitrogen with three different substituents — e.g., ethylmethylpropylamine (SMILES: `CCN(C)CCC`) — is pyramidal, and the lone pair acts as a fourth "group," making the nitrogen stereogenic. In principle two enantiomers exist; in practice they interconvert too fast to isolate. The nitrogen passes through a planar \(sp^2\)-like transition state (**umbrella inversion**), and at room temperature a simple amine inverts roughly \(10^{10}\)–\(10^{11}\) times per second. The barrier is only about 25 kJ/mol, so thermal energy drives constant flipping, and ordinary amines are **configurationally unstable** at nitrogen.

Two ways to trap nitrogen chirality:

- **Quaternary ammonium salts,** \(\text{R}_4\text{N}^+\): no lone pair, no inversion. Four different groups → chiral and configurationally stable (e.g., benzylmethylphenyl(2-propyl)ammonium ion).
- **Aziridines** (three-membered rings): ring strain raises the inversion barrier to roughly 60–80 kJ/mol, slowing inversion enough that suitably substituted aziridines — especially N-chloro derivatives — have been resolved.

### Phosphorus: slow inversion, stable chirality

Phosphines, \(\text{PR}_3\), are pyramidal with a lone pair, so three different groups make phosphorus stereogenic. The crucial difference is the barrier — roughly 130 kJ/mol, more than five times ammonia's — so chiral phosphines are **configurationally stable** at room temperature, resolvable, and storable. Optically active phosphines such as \((R)\)-methylpropylphenylphosphine were resolved in the 1960s–70s, and the field exploded when chiral phosphines proved superb ligands for asymmetric hydrogenation. In the Monsanto L-DOPA process, the enamide substrate coordinates to a rhodium center bearing chiral DIPAMP; hydrogen adds across the double bond with strong facial selectivity, and hydrolysis delivers L-DOPA in high enantiomeric excess (Topic 8). Quaternary **phosphonium salts**, \(\text{R}_4\text{P}^+\), are chiral when the four groups differ, like ammonium salts.

### Sulfur: the most stable heteroatom chirality

Sulfur is stereogenic in two common forms:

- **Sulfoxides,** \(\text{R–S(=O)–R}'\): tetrahedral sulfur (two R groups, oxygen, lone pair). When R ≠ R′, the sulfoxide is chiral; the enantiomers of e.g. methyl phenyl sulfoxide (SMILES: `CS(=O)c1ccccc1`) do not racemize at ordinary temperatures because the inversion barrier is very high — well over 150 kJ/mol. Chiral sulfoxides are configurationally stable, easily prepared, and used as chiral auxiliaries and drugs (esomeprazole).
- **Sulfonium salts,** \(\text{R}_3\text{S}^+\): three different groups give a chiral pyramidal sulfur with no practical inversion pathway; SAM is the biological example.

Practical consequence: oxidizing a thioether such as methionine to the sulfoxide creates a new stereocenter at sulfur, so each methionine enantiomer gives **two diastereomeric sulfoxides**, which repair enzymes distinguish — a real chemical subtlety in protein oxidation.

### Assigning R/S at heteroatoms

The same Cahn–Ingold–Prelog rules apply (Topic 5) with two reminders: the **lone pair is the lowest-priority "group"** — view the molecule with the lone pair pointing away — and in sulfoxides the **oxygen is highest priority** (atomic number 8 beats carbon's 6), so the order is typically O > aryl > alkyl > lone pair.

## ELI-10: Explain Like I’m 10

> Think of a tent with three poles and a flag on top: it leans left or right depending on which way the flag points. A nitrogen tent flips its flag back and forth thousands of times a second in the wind — you can never catch it leaning one way. A phosphorus tent is stiffer, so its lean is locked in. A sulfur tent (a sulfoxide) is bolted down — its lean never changes, so you can bottle the left-leaning and right-leaning versions separately.

## High-Yield Points

- Amine N with three different groups is stereogenic but inverts ~\(10^{10}\)–\(10^{11}\) s⁻¹ (barrier ≈ 25 kJ/mol) — **not resolvable**.
- Ammonium salts \(\text{R}_4\text{N}^+\) with four different groups are chiral and stable (no lone pair → no inversion).
- Aziridine ring strain raises the N-inversion barrier to ~60–80 kJ/mol; some N-chiral aziridines have been resolved.
- Phosphine inversion barrier ≈ 130 kJ/mol (≈ 5× ammonia) → chiral phosphines are configurationally stable.
- Chiral phosphine ligands (DIPAMP) power industrial asymmetric hydrogenation (L-DOPA; Knowles, Nobel 2001).
- Sulfoxides and sulfonium salts are chiral when substituents differ and do not racemize — esomeprazole is a chiral sulfoxide drug.
- Methionine → methionine sulfoxide creates a new stereocenter at S: two diastereomeric sulfoxides per methionine enantiomer.
- In R/S assignment the lone pair is lowest priority; in sulfoxides oxygen is highest.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| pyramidal (umbrella) inversion | Flipping of trivalent N or P through a planar transition state | Determines whether heteroatom chirality can be isolated |
| stereogenic heteroatom | N, P, or S center whose substituent swap gives a stereoisomer | Expands chirality beyond carbon |
| quaternary ammonium salt | \(\text{R}_4\text{N}^+\) cation with no lone pair | Chiral when four groups differ; cannot invert |
| aziridine | Three-membered ring amine | High inversion barrier; N-chiral derivatives resolvable |
| chiral phosphine | \(\text{PR}_3\) with three different groups, configurationally stable | Ligands for asymmetric catalysis (DIPAMP → L-DOPA) |
| sulfoxide | \(\text{R–S(=O)–R}'\), tetrahedral sulfur with lone pair | Chiral and stable when R ≠ R′; drug scaffold (esomeprazole) |
| sulfonium salt | \(\text{R}_3\text{S}^+\) cation | Chiral when three groups differ; SAM is the biological example |
| lone pair | Unshared electron pair on the heteroatom | The fourth "group"; must point away when assigning R/S |

## How It Works / Step-by-Step Process

To predict whether a heteroatom center can be resolved:

1. Identify the heteroatom and its substituents (three different groups + lone pair, or four different groups in onium salts).
2. No lone pair (ammonium, phosphonium, 4-bonded sulfonium) → no inversion → chiral and stable if groups differ.
3. With a lone pair, estimate the barrier: amine N ≈ 25 kJ/mol → resolvable only in strained rings; phosphine P ≈ 130 kJ/mol → stable; sulfoxide S > 150 kJ/mol → stable.
4. If stable, resolve as for carbon stereocenters (Topic 8) or use the center directly as a ligand or auxiliary.

## Worked Examples

### Example 1: Resolvable or not? Three nitrogen cases

**(a) \(N\)-methylpiperidine** (SMILES: `CN1CCCCC1`). The nitrogen is stereogenic in principle, but nitrogen inversion plus ring flipping interconvert the "enantiomers" rapidly at a ~25 kJ/mol barrier. **Not resolvable.**

**(b) Benzylmethylphenyl(2-propyl)ammonium ion.** Four different groups, no lone pair:

\[
\text{no lone pair} \Rightarrow \text{no inversion} \Rightarrow \text{configurationally stable}
\]

The cation is chiral and resolvable by forming diastereomeric salts with a chiral anion (Topic 8's logic applied to a salt).

**(c) \(N\)-chloro-2,2-dimethylaziridine.** The three-membered ring cannot easily reach the planar transition state, raising the barrier to roughly 60–80 kJ/mol; suitably substituted N-chloroaziridines have been resolved. The lesson: ring strain, not the atom, decides nitrogen resolvability.

### Example 2: Counting stereoisomers at sulfur

Methionine, \(\text{CH}_3\text{S–CH}_2\text{CH}_2\text{CH(NH}_2\text{)COOH}\) (SMILES: `CSCCC(C(=O)O)N`), has one carbon stereocenter. Oxidation to methionine sulfoxide creates a *second* stereocenter at sulfur, so:

\[
N_{\text{max}} = 2^n = 2^2 = 4
\]

Four stereoisomers exist: the \((2S)\)- and \((2R)\)-carbon forms each pair with \((S)\)- and \((R)\)-sulfoxide configurations. The two sulfoxides derived from \((S)\)-methionine are **diastereomers** of each other — different physical properties, separable (Topic 6). Oxidative protein damage is therefore not one "oxidation product" but a mixture of two sulfoxide diastereomers with different biological fates.

### Example 3: The DIPAMP–rhodium asymmetric hydrogenation

The substrate is a prochiral enamide, \(\text{Ar–C(=O)–NH–C(=CH–CO}_2\text{H})(\text{H})\). In words, the mechanism runs: the enamide coordinates to rhodium in the chiral DIPAMP catalyst through its double bond; rhodium inserts hydrogen, transferring one H to the less hindered alkene face while the ligand's chiral pockets bias which face that is; reductive elimination delivers the saturated amide with one configuration strongly preferred; hydrolysis of the amide gives L-DOPA with ee above 90%. The catalyst's chirality — locked at the two phosphorus stereocenters of DIPAMP — turns an achiral hydrogenation enantioselective, showing why configurationally stable chiral phosphines are so valuable.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "Amines with three different groups are chiral, so they can be resolved." | The center is stereogenic, but umbrella inversion (≈ 25 kJ/mol) interconverts the enantiomers ~\(10^{10}\)–\(10^{11}\) s⁻¹ — simple amines cannot be resolved. |
| "Phosphines invert as fast as amines." | The phosphine barrier (≈ 130 kJ/mol) is ~5× ammonia's; chiral phosphines are stable at room temperature. |
| "Sulfoxides racemize like amines." | Sulfoxide barriers are very high (>150 kJ/mol); chiral sulfoxides are stable and isolable (esomeprazole). |
| "A lone pair doesn't count as a group for chirality." | It is the fourth ligand at N, P, and sulfoxide S — it makes the center stereogenic and points away in R/S assignment. |
| "Quaternary ammonium salts invert like amines." | No lone pair → no umbrella inversion; \(\text{R}_4\text{N}^+\) with four different groups is chiral and stable. |
| "Methionine sulfoxide is a single compound." | It is a pair of diastereomers (at the new sulfur center) per methionine enantiomer — four stereoisomers total. |

## Quick Review

1. Why can't a simple amine with three different groups be resolved?
2. What structural change makes a nitrogen center configurationally stable, and why?
3. Compare the inversion barriers of NH₃, PH₃, and a sulfoxide.
4. How many stereoisomers does methionine sulfoxide have, and how are they related?
5. What role do chiral phosphines play in the Monsanto L-DOPA process?
6. What are the priority rules when assigning R/S at a sulfoxide sulfur?

<details>
<summary>Show answers</summary>

1. The nitrogen umbrella-inverts through a planar transition state with a ~25 kJ/mol barrier, flipping about \(10^{10}\)–\(10^{11}\) times per second — the enantiomers interconvert faster than they could ever be separated.
2. Removing the lone pair — a quaternary ammonium salt \(\text{R}_4\text{N}^+\) with four different groups — because inversion requires a lone pair; alternatively aziridine ring strain raises the barrier enough to slow inversion.
3. NH₃ inverts rapidly (≈ 24 kJ/mol); PH₃ inverts slowly (≈ 130 kJ/mol); sulfoxides essentially never invert (>150 kJ/mol) under ordinary conditions.
4. Four stereoisomers (\(2^2 = 4\)) from the carbon and sulfur centers; the two sulfoxides of each methionine enantiomer are diastereomers (differ only at sulfur).
5. The chiral DIPAMP ligand coordinates rhodium and biases which face of the prochiral enamide accepts hydrogen, producing L-DOPA in high ee — the first industrial asymmetric hydrogenation.
6. Oxygen is highest priority (atomic number 8), then aryl/alkyl by the sequence rules, and the lone pair is lowest; view the molecule with the lone pair pointing away.

</details>

## Related Topics

- Previous: [A Review of Isomerism](09-a-review-of-isomerism.md)
- Next: [Prochirality](11-prochirality.md)
- Related: [Sequence Rules for Specifying Configuration](05-sequence-rules-for-specifying-configuration.md)
- Related: [Racemic Mixtures and the Resolution of Enantiomers](08-racemic-mixtures-and-the-resolution-of-enantiomers.md)
- Related: [Stereochemistry at Tetrahedral Centers chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Inversion barriers (NH₃ ≈ 24 kJ/mol; PH₃ ≈ 130 kJ/mol; aziridines ≈ 60–80 kJ/mol; sulfoxides > 150 kJ/mol) and the DIPAMP/L-DOPA history are standard literature values; verify against current sources before high-stakes use.
- Last updated: 2026-08-16
