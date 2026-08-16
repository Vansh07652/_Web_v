---
title: "Sequence Rules for Specifying Configuration"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "5: Stereochemistry at Tetrahedral Centers"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "sequence-rules-for-specifying-configuration"
  - "science"
status: "complete"
---

# Sequence Rules for Specifying Configuration

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 5: Stereochemistry at Tetrahedral Centers](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Enantiomers have the same name unless we add a label describing their **configuration** — the three-dimensional arrangement of groups around a stereocenter. The universally used system is the **Cahn–Ingold–Prelog (CIP) sequence rules**, which assign each stereocenter the descriptor **R** (Latin *rectus*, right) or **S** (*sinister*, left). The procedure has three steps: (1) rank the four substituents by priority using the sequence rules; (2) orient the molecule so the lowest-priority group points away from you; (3) trace a path from priority 1 → 2 → 3 — clockwise gives **R**, counterclockwise gives **S**. The R/S label is purely structural: it carries no information about optical rotation sign, which must be measured (Topic 3). This topic develops the sequence rules and walks through complete R/S assignments.

## Why This Matters

- **Unambiguous naming:** "2-Chlorobutane" names one compound but there are two enantiomers; "(R)-2-chlorobutane" and "(S)-2-chlorobutane" name them individually. Chemistry cannot be communicated without this precision.
- **Synthesis and biology:** When a drug company makes a single enantiomer, the product label must specify its configuration — a wrong R/S descriptor in a patent or procedure is a serious error. Biological activity often depends on configuration: only one enantiomer of a molecule fits a given enzyme or receptor.
- **Exams:** R/S assignment is one of the most tested skills in organic chemistry. The rules are mechanical and learnable — master the three steps and the tie-breaking logic.

## Core Concepts

### Sequence Rule 1: Higher atomic number first

Rank the four substituents by the atomic number of the atom directly attached to the stereocenter. Higher atomic number → higher priority. Thus, for a stereocenter bearing I, Br, Cl, F, and H groups, priority order is I > Br > Cl > F > H (hydrogen, atomic number 1, is almost always lowest).

### Sequence Rule 2: Higher atomic mass first (isotopes)

If two directly attached atoms are the same element, the one with higher **atomic mass** ranks higher. Deuterium (²H, mass 2) outranks protium (¹H, mass 1). This matters for isotopically labeled compounds used in mechanistic studies.

### Sequence Rule 3: First point of difference

If two substituents attach through the *same* element, move outward one bond at a time and compare the atoms bonded to that first atom, ranked by atomic number; the first difference encountered decides. Example: –CH₂CH₃ (ethyl) vs –CH₃ (methyl): both attach through carbon. Ethyl's carbon is bonded to C, H, H; methyl's carbon is bonded to H, H, H. At the first point of difference, C (atomic number 6) beats H (1), so **ethyl outranks methyl**. Work outward recursively until a difference appears.

### Sequence Rule 4: Multiple bonds count as multiple single bonds

A double bond is treated as if the atom were bonded to two copies of the attached atom; a triple bond as three copies. Thus –CH=CH₂ (vinyl) counts as carbon bonded to (C, C, H) and outranks –CH₂CH₃ (ethyl), carbon bonded to (C, H, H). Similarly, –CHO (aldehyde) outranks –CH₂OH (alcohol) because the aldehyde carbon is "bonded" to O, O, H versus O, H, H for the alcohol carbon.

### Assigning R or S

With priorities 1 > 2 > 3 > 4 established:

1. Orient the drawing so group 4 points away from you (if it points toward you, mentally rotate the molecule or invert the result).
2. Trace the path 1 → 2 → 3.
3. Clockwise (right turn) = **R**; counterclockwise (left turn) = **S**.

If the lowest-priority group points *toward* you instead of away, the traced direction is inverted: clockwise becomes S and counterclockwise becomes R. A common trick: if group 4 lies in the plane of the page, swap any two groups (which inverts configuration), assign, then invert the answer.

## ELI-10: Explain Like I’m 10

Imagine four kids of different heights standing around a round table. First, put them in order from tallest to shortest. Then turn the whole table so the shortest kid faces the wall (away from you). Now look at the tallest, then the second tallest, then the third tallest — if your eyes move clockwise, like the hands of a clock, the arrangement is an "R" table; if they move counterclockwise, it's an "S" table. Chemists do exactly this with the four things attached to a carbon: rank them by size (bigger atoms first), hide the smallest one behind, and read the direction of the other three. R and S are just labels for "turned right" or "turned left."

## High-Yield Points

- **Priority = atomic number** of the directly attached atom; higher number wins. H is lowest in nearly all cases.
- **Tie → same element?** Compare atomic mass (deuterium > hydrogen), then the next atoms out (Rule 3, first point of difference).
- **Multiple bonds** count as multiple copies of the bonded atom (C=O acts like C–O–O for ranking).
- **Orientation is everything:** group 4 must point *away*; then 1→2→3 clockwise = R, counterclockwise = S.
- If group 4 points toward you, invert the reading; if it's in the plane, do a two-group swap trick and invert.
- **R/S ≠ (+)/(–):** configuration is assigned from structure; rotation sign is measured. No correlation exists.
- Assign each stereocenter independently: a molecule with two centers gets labels like (2R,3S).
- Ethyl (–CH₂CH₃) beats methyl (–CH₃); vinyl/aldehyde-type groups beat saturated ones (Rule 4).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Configuration | The fixed three-dimensional arrangement of groups at a stereocenter | What R/S labels encode |
| Cahn–Ingold–Prelog (CIP) rules | The ranking system for assigning R/S | The international standard for naming enantiomers |
| Priority | Rank of a substituent by atomic number (then mass, then next atoms) | The ordering that drives the whole assignment |
| R (rectus) | Clockwise 1→2→3 trace with lowest priority away | One of the two configuration descriptors |
| S (sinister) | Counterclockwise 1→2→3 trace with lowest priority away | The other descriptor |
| First point of difference | The first atom outward where two substituents differ | The tie-breaker for groups like ethyl vs methyl |
| Stereocenter | Carbon with four different groups | The atom whose configuration you're naming |
| Enantiomer | Non-superimposable mirror image | The form that gets the opposite R/S label |

## How It Works / Step-by-Step Process

1. Identify the stereocenter and list its four substituents.
2. Rank them 1–4: atomic number → atomic mass → first point of difference → multiple-bond counting.
3. Redraw or mentally orient so the #4 group points away from you (dash) — not toward you (wedge), not in the plane.
4. Trace 1 → 2 → 3 and note the direction (clockwise or counterclockwise).
5. Assign R (clockwise) or S (counterclockwise). If #4 pointed toward you, invert the result. Repeat for each stereocenter.

## Worked Examples

### Example 1: Assigning R/S to 2-chlorobutane

**Problem:** Assign R or S to the stereocenter in this drawing of 2-chlorobutane: H on a dash (away), Cl on a wedge (toward), CH₂CH₃ to the left, CH₃ to the right.

**Step 1 — Rank the groups.** Directly attached atoms: Cl (17), C (ethyl), C (methyl), H (1). Cl is #1, H is #4. Ethyl vs methyl: both attach through carbon; ethyl's carbon sees (C, H, H), methyl's sees (H, H, H) — C beats H, so ethyl = #2, methyl = #3. Priority: Cl > CH₂CH₃ > CH₃ > H.

**Step 2 — Orient.** The lowest-priority H is on a dash — pointing away. Good, no rotation needed.

**Step 3 — Trace.** Path 1 → 2 → 3: from the wedge-Cl (toward you) to ethyl (left) to methyl (right). Visualize from above with H hidden behind: Cl is nearest, ethyl left, methyl right. Reading Cl → ethyl → methyl sweeps **counterclockwise**.

**Answer:** This drawing is **(S)-2-chlorobutane**. Its mirror image (Cl wedge/dash swapped) would be (R)-2-chlorobutane. Note: we cannot say whether (S) is (+) or (–) without measuring — configuration and rotation sign are independent.

### Example 2: Tie-breaking with the first point of difference

**Problem:** Rank the four substituents of the stereocenter in 2-hydroxy-2-methylbutanenitrile, `NC–C(CH₃)(OH)–CH₂CH₃`… more simply: a carbon bearing –OH, –CH₂CH₃, –CH₃, and –C≡N. What is the priority order?

**Step 1 — Atomic numbers of attached atoms.** O (8), C (ethyl), C (methyl), C (nitrile carbon). Oxygen is highest: –OH = #1. The three carbon substituents tie on atomic number.

**Step 2 — First point of difference for the three carbon groups.**
- –C≡N: the carbon is bonded to N (triple bond counts as three N's): (N, N, N).
- –CH₂CH₃: the carbon is bonded to (C, H, H).
- –CH₃: the carbon is bonded to (H, H, H).

**Step 3 — Compare atom sets.** N (7) beats C (6) beats H (1): –C≡N > –CH₂CH₃ > –CH₃.

**Answer:** Priority order: –OH > –C≡N > –CH₂CH₃ > –CH₃. The nitrile group outranks both alkyl groups even though all three attach through carbon — the triple-bonded nitrogen decides at the first point of difference.

### Example 3: Full assignment for a molecule with a double bond

**Problem:** Assign R/S to the stereocenter of 3-buten-2-ol, `CH₂=CH–CH(OH)–CH₃` (stereocenter = C2, bearing –OH, –CH₃, –CH=CH₂, –H), drawn with –OH on a wedge, –H on a dash, –CH₃ left, –CH=CH₂ right.

**Step 1 — Rank.** –OH (#1, O). –H (#4). –CH=CH₂ vs –CH₃: both attach through carbon. Vinyl carbon is "bonded" to (C, C, H); methyl carbon to (H, H, H). C beats H → –CH=CH₂ = #2, –CH₃ = #3.

**Step 2 — Orient.** H (#4) is on a dash — away from you. 

**Step 3 — Trace.** From #1 (OH, wedge toward you) to #2 (vinyl, right) to #3 (methyl, left): with H hidden, reading OH → vinyl → methyl sweeps **clockwise**.

**Answer:** **(R)-3-buten-2-ol.** The enantiomer (S) is its mirror image. The double bond never participates in bonding to the stereocenter directly — it only boosts the *priority* of its carbon via Rule 4.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| R/S configuration | (+)/(–) optical rotation | R/S is assigned from structure by rules; (+)/(–) is measured. An (S) compound can be dextrorotatory |
| Clockwise = R | Any clockwise trace | Only valid when the #4 group points *away* from you; if #4 points toward you, clockwise means S |
| Priority by atomic number | Priority by group size | A big –C(CH₃)₃ group can rank *below* a small –OH group because the directly attached atom decides |
| Ethyl vs methyl ranking | Counting carbons in the chain | It's the first point of difference: ethyl's C sees another C; methyl's sees only H's |
| Multiple bonds | More atoms in the group | A triple bond counts as three bonds to the same atom for ranking — not as three different atoms |
| Swapping groups | Rotating the molecule | Swapping any two groups inverts configuration; rotating does not. Use the swap trick deliberately and invert |
| (2R,3S) labels | One label for the molecule | Each stereocenter is assigned independently and listed with its carbon number |

## Quick Review

1. Rank these substituents by CIP priority: –H, –Br, –CH₃, –OH.
2. Why does –CH₂CH₃ outrank –CH₃ even though both attach through carbon?
3. In a drawing where the #4 group points *toward* you, a clockwise 1→2→3 trace gives what configuration?
4. Assign R or S: a stereocenter with priorities 1–4 where #4 is on a dash and the trace 1→2→3 is clockwise.
5. True or false: the (R)-enantiomer of a compound is always dextrorotatory. Explain.
6. Does –CH=CH₂ outrank –CH₂CH₃? Justify with the multiple-bond rule.

<details>
<summary>Show answers</summary>

1. –Br > –OH > –CH₃ > –H (atomic numbers 35 > 8 > 6 > 1).
2. First point of difference: ethyl's attached carbon is bonded to (C, H, H); methyl's is bonded to (H, H, H). Carbon (atomic number 6) beats hydrogen (1), so ethyl ranks higher.
3. S. With #4 toward you the trace direction is inverted: clockwise becomes S (and counterclockwise becomes R).
4. R — clockwise trace with #4 pointing away is the definition of R.
5. False. R/S describes structure; (+)/(–) describes measured rotation. There is no fixed correlation — it must be measured for each compound.
6. Yes. The vinyl carbon counts as bonded to (C, C, H) (double bond = two C's), while the ethyl carbon counts as (C, H, H). C beats H at the first point of difference.

</details>

## Related Topics

- Previous: [Pasteur’s Discovery of Enantiomers](04-pasteur-s-discovery-of-enantiomers.md)
- Next: [Diastereomers](06-diastereomers.md)
- Related: [Enantiomers and the Tetrahedral Carbon](01-enantiomers-and-the-tetrahedral-carbon.md) · [Optical Activity](03-optical-activity.md) · [A Review of Isomerism](09-a-review-of-isomerism.md)
- Related: [Stereochemistry at Tetrahedral Centers chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- CIP rules and worked examples follow the standard textbook treatment of stereochemical nomenclature; no experimental data are asserted. Verify any literature specific rotations against current sources before use in assessments.
- Last updated: 2026-08-16
