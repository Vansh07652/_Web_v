---
title: "Protein Structure"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "26: Biomolecules: Amino Acids, Peptides, and Proteins"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "protein-structure"
  - "science"
status: "complete"
---

# Protein Structure

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 26: Biomolecules: Amino Acids, Peptides, and Proteins](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

A protein's function is set by its three-dimensional shape, built from a single covalent thread: the amino acid sequence. Biochemists describe structure at four levels. **Primary structure** is the amino acid sequence itself. **Secondary structure** is local folding of the backbone into repeating patterns — the α-helix and β-sheet — held together by backbone hydrogen bonds. **Tertiary structure** is the overall 3D fold of one chain, stabilized by side-chain interactions. **Quaternary structure** is how multiple folded chains assemble into a functional complex. This topic explains each level, the planar peptide bond that underlies them, and how the Ramachandran plot maps allowed backbone shapes.

## Why It Matters

Almost every biological process depends on protein structure: enzymes position catalytic groups, antibodies recognize pathogens, and ion channels open and close. When structure is lost — by mutation, denaturation, or misfolding — function fails. Sickle-cell anemia is a single substitution (Glu→Val at position 6 of hemoglobin's β-chain); prion disease and Alzheimer's involve proteins misfolding into toxic aggregates. Understanding the four levels lets you predict why a mutation is harmful, why heat or pH destroys function, and how drugs stabilize or disrupt folds.

## Core Concepts

### Primary structure: the covalent blueprint

The primary structure is the linear sequence of amino acids joined by peptide bonds, written N-terminus to C-terminus. With 20 standard amino acids, a chain of \(n\) residues has \(20^n\) possible sequences. The gene encodes the sequence, and the sequence determines everything else: the chain folds into the most stable shape for that sequence.

### The planar peptide bond: the backbone's rigid unit

The peptide bond has partial double-bond character because the lone pair on the amide nitrogen is delocalized onto the carbonyl oxygen:

\[ \text{R–C(=O)–NH–R'} \leftrightarrow \text{R–C(O}^-\text{)=N}^+\text{H–R'} \]

This resonance makes the C–N bond about 40% double-bonded, so it is **planar** and cannot rotate freely (the measured C–N distance is ~1.33 Å, between single, ~1.47 Å, and double, ~1.27 Å). Rotation is limited to the two flanking single bonds — N–Cα (**phi**, φ) and Cα–C (**psi**, ψ). Almost all peptide bonds are **trans**, with the two α-carbons on opposite sides to avoid steric clash; cis bonds are rare, mostly before proline.

### Secondary structure: α-helix and β-sheet

- **α-Helix:** the backbone winds into a right-handed helix with 3.6 residues per turn and a 5.4 Å pitch, stabilized by H-bonds between the C=O of residue \(i\) and the N–H of residue \(i+4\). Side chains point outward. Glycine destabilizes helices (too flexible); proline breaks them (its ring locks the backbone, and it has no N–H to donate).
- **β-Sheet:** extended segments (β-strands) line up side by side, hydrogen-bonded between the C=O of one strand and the N–H of a neighbor. Strands run the same direction (**parallel**) or opposite (**antiparallel**); antiparallel sheets have more linear, stronger H-bonds. β-sheets form the core of silk and membrane β-barrel channels.
- **β-Turn:** a four-residue hairpin that reverses chain direction; glycine (small) and proline (rigid) are common there.

### The Ramachandran plot

A Ramachandran plot shows which (φ, ψ) combinations are sterically allowed; most are forbidden because backbone atoms collide. Allowed regions cluster in wedges: the α-helix region near (φ ≈ −57°, ψ ≈ −47°) and the β-sheet region near (φ ≈ −120°, ψ ≈ +120°). Glycine, with only a hydrogen side chain, is allowed almost everywhere; proline is restricted because its ring constrains φ. Checking structures against Ramachandran plots is standard validation.

### Tertiary structure: the folded chain

Tertiary structure is the complete 3D arrangement of one polypeptide, driven mainly by the **hydrophobic effect** — nonpolar side chains cluster in the interior, away from water. Additional forces then lock the shape in place:

- Hydrogen bonds between side chains and backbone,
- **Salt bridges** between oppositely charged side chains (e.g., Lys⁺…Asp⁻),
- **Disulfide bonds**: covalent S–S links from oxidation of two cysteines, `Cys–SH + HS–Cys → Cys–S–S–Cys`, the only covalent cross-links in most proteins,
- Van der Waals contacts in the tightly packed core.

Globular proteins (enzymes, antibodies) fold compactly with the hydrophobic core buried; fibrous proteins (collagen, keratin) are extended and structural.

### Quaternary structure: assembly of subunits

Quaternary structure is the arrangement of two or more folded chains (subunits) into a functional complex. Hemoglobin is the classic example: two α and two β subunits assemble into an α₂β₂ tetramer that binds oxygen cooperatively. The same forces that stabilize tertiary structure hold subunits together.

## Worked Examples

### Example 1: How many sequences are possible?

A protein fragment 5 residues long can have

\[ 20^5 = 3{,}200{,}000 \]

different sequences. For a modest 100-residue protein, \(20^{100}\) sequences are possible — far more than the atoms in the observable universe. This explains both life's diversity and the challenge of predicting structure.

### Example 2: Estimating a protein's molecular weight

Rule of thumb: the average residue contributes about 110 Da (a water molecule is lost per peptide bond formed, so the residue is lighter than the free amino acid). For a 150-residue protein:

\[ M \approx 150 \times 110 \text{ Da} = 16{,}500 \text{ Da} = 16.5 \text{ kDa} \]

A more careful estimate subtracts the water lost per peptide bond. A 150-residue chain has \(150 - 1 = 149\) peptide bonds, so

\[ M = 150 \times 110 \text{ Da} - 149 \times 18 \text{ Da} = 16{,}500 - 2{,}682 = 13{,}818 \text{ Da} \approx 13.8 \text{ kDa} \]

The units work out to Da, and the correction matters when comparing with mass spectrometry.

### Example 3: Reading a Ramachandran plot

A residue at (φ = −57°, ψ = −47°) sits in the allowed α-helix region. A residue at (φ = 0°, ψ = 0°) falls in a forbidden zone: backbone atoms would clash. A model with many forbidden residues is almost certainly wrong — hence Ramachandran analysis is routine validation.

## ELI-10: Explain Like I'm 10

A protein is like a long ribbon of beads that folds itself into a specific shape — a ball, a rope, or a fan. The bead order is the plan; the spiral and zigzag parts come from the ribbon grabbing itself with tiny magnets; and the final shape lets the protein do its job. Change one bead, and the shape — and the job — can change.

## High-Yield Points

- The peptide bond is planar and ~40% double-bonded; rotation occurs only at the N–Cα (φ) and Cα–C (ψ) bonds.
- Almost all peptide bonds are trans; cis bonds are rare and usually involve proline.
- α-Helix: 3.6 residues/turn, 5.4 Å pitch, H-bond from residue \(i\) C=O to residue \(i+4\) N–H.
- β-Sheets use inter-strand backbone H-bonds; antiparallel sheets are more stable.
- Ramachandran: α-helix ≈ (−57°, −47°), β-sheet ≈ (−120°, +120°); glycine flexible, proline rigid.
- Tertiary folding is driven by the hydrophobic effect; H-bonds, salt bridges, disulfides, and van der Waals contacts lock it in place.
- Quaternary structure = assembly of subunits (hemoglobin α₂β₂).
- One residue change can destroy function: Glu→Val at hemoglobin β6 causes sickle-cell anemia.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Primary structure | The linear amino acid sequence, N to C | The blueprint that determines all higher structure |
| Peptide bond | Planar, trans amide with ~40% double-bond character | Restricts rotation to φ/ψ; defines chain geometry |
| α-Helix | Right-handed coil, 3.6 residues/turn, i→i+4 H-bonds | The most common secondary structure |
| β-Sheet | Extended strands H-bonded side by side | Core of silk, antibodies, membrane channels |
| Ramachandran plot | Map of sterically allowed φ/ψ combinations | Standard validation tool for structures |
| Tertiary structure | The full 3D fold of one chain | Creates the active sites that do the work |
| Disulfide bond | Covalent S–S link between two cysteines | The only covalent cross-link; stabilizes secreted proteins |
| Quaternary structure | Assembly of multiple folded chains | Enables cooperativity (hemoglobin's O₂ binding) |

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Tertiary structure | Quaternary structure | Tertiary folds a single chain; quaternary assembles multiple chains |
| Secondary structure | Tertiary structure | Secondary is local backbone pattern (helix/sheet); tertiary is the whole-chain fold |
| Peptide bond rotation | φ/ψ rotation | The peptide bond itself cannot rotate; only the flanking single bonds (φ, ψ) can |
| Parallel β-sheet | Antiparallel β-sheet | Strands run the same vs. opposite directions; antiparallel H-bonds are more linear and stable |
| Hydrophobic effect | Hydrogen bonding | The hydrophobic effect *drives* folding; H-bonds add specificity and stability |
| Primary structure change | Function loss | One residue change can (but need not) change folding or function — sickle-cell anemia is the classic case |

## Quick Review

1. Why is the peptide bond planar, and which two bonds rotate freely?
2. What are the H-bonding partners in an α-helix, and how many residues per turn?
3. Where on a Ramachandran plot would you find α-helix and β-sheet residues?
4. Name four forces that stabilize tertiary structure, and the one that drives folding.
5. Estimate the molecular weight in kDa of a 200-residue protein using the 110 Da rule.
6. What is the quaternary structure of hemoglobin, and why does it matter?

<details>
<summary>Show answers</summary>

1. Resonance gives the C–N bond ~40% double-bond character, freezing it planar; rotation is free only at the N–Cα (φ) and Cα–C (ψ) bonds.
2. The C=O of residue \(i\) hydrogen-bonds to the N–H of residue \(i+4\); there are 3.6 residues per turn.
3. α-Helix near (φ ≈ −57°, ψ ≈ −47°); β-sheet near (φ ≈ −120°, ψ ≈ +120°).
4. Hydrophobic effect (drives folding), hydrogen bonds, salt bridges, disulfide bonds, and van der Waals contacts.
5. \(200 \times 110 = 22{,}000\) Da = 22 kDa (minus ~3.6 kDa for 199 waters → ~18.4 kDa).
6. Hemoglobin is an α₂β₂ tetramer; the quaternary assembly enables cooperative oxygen binding and release.

</details>

## Related Topics

- Previous: [Automated Peptide Synthesis: The Merrifield Solid-Phase Method](08-automated-peptide-synthesis-the-merrifield-solid-phase-method.md)
- Next: [Enzymes and Coenzymes](10-enzymes-and-coenzymes.md)
- Related: [Peptides and Proteins](04-peptides-and-proteins.md), [Peptide Synthesis](07-peptide-synthesis.md), [Biomolecules: Amino Acids, Peptides, and Proteins chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
