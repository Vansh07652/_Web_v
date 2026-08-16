---
title: "Formal Charges"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "2: Polar Covalent Bonds; Acids and Bases"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "formal-charges"
  - "science"
status: "complete"
---

# Formal Charges

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 2: Polar Covalent Bonds; Acids and Bases](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A **formal charge** is a bookkeeping device chemists use to keep track of electrons in a structure. Imagine every bonding electron pair is split evenly between the two atoms sharing it: how does the number of electrons "owned" by each atom compare with the number it brought as a free atom? The difference is the formal charge — often, but not always, zero:

\[
\text{Formal charge} = (\text{valence electrons of the free atom}) - (\text{nonbonding electrons}) - \frac{1}{2}(\text{bonding electrons})
\]

It is essential to understand what formal charge is *not*: it is not the actual charge on the atom. In a polar bond the real electron distribution is skewed toward the more electronegative atom (the partial charge δ from the previous topic). Formal charge deliberately ignores electronegativity and assumes equal sharing — it is a tool for counting, not a measurement of reality.

Organic chemistry is full of charged species — carbocations (C⁺), carbanions (C⁻), ammonium salts (NH₄⁺), alkoxides (RO⁻) — and every mechanism step redistributes electrons. Formal charge is how you verify that a structure is drawn correctly, that an arrow-pushing step conserves charge, and that a resonance form is valid.

## Why This Matters

Formal charge is the accounting system of reaction mechanisms. When you push curved arrows, you must check that total charge is conserved: if a carbon gains a bond its formal charge drops by one; if it loses a bond, it rises. Mislabeled formal charges are a top source of mechanism errors on exams. Formal charge also helps you choose between possible structures (the best Lewis structure minimizes formal charges) and marks the reactive, charged centers of a molecule — a +1 carbon is where nucleophiles will attack. Finally, formal charge is easy to confuse with oxidation state — a recurring exam theme.

## Core Concepts

### The formula and what each term means

\[
\text{FC} = \text{VE} - \text{NB} - \frac{1}{2}\text{BE}
\]

- **VE** = valence electrons of the *free* atom (group number: C = 4, N = 5, O = 6, H = 1).
- **NB** = nonbonding electrons on the atom in the structure (each lone pair counts 2).
- **BE** = bonding electrons on the atom (each bond, single or multiple, contributes 2; so \(\frac{1}{2}\text{BE}\) is simply the number of bonds).

A practical shortcut: \(\frac{1}{2}\text{BE}\) is just the atom's bond count, so formal charge = (group valence) − (lone-pair electrons) − (number of bonds).

### How to count

For each atom in a drawn structure: write down the free-atom valence electrons (VE), count the lone-pair electrons on the atom (NB), count the bonds attached (each bond = 2 bonding electrons, so the half is 1 per bond), and substitute into the formula.

### Common formal charges worth memorizing

- Carbon with 4 bonds and no lone pairs: FC = 4 − 0 − 4 = 0 (the normal case).
- Carbon with 3 bonds and no lone pairs (carbocation, e.g., CH₃⁺): FC = 4 − 0 − 3 = **+1**.
- Carbon with 3 bonds and one lone pair (carbanion, e.g., CH₃⁻): FC = 4 − 2 − 3 = **−1**.
- Nitrogen with 4 bonds (NH₄⁺): FC = 5 − 0 − 4 = **+1**.
- Nitrogen with 3 bonds and one lone pair (NH₃, amines): FC = 5 − 2 − 3 = 0.
- Imine nitrogen (2 σ bonds + 1 π bond, one lone pair): 3 bonds total, FC = 5 − 2 − 3 = 0. Always count π bonds in BE — a double-bonded nitrogen "owns" two electrons from that bond.
- Oxygen with 2 bonds and 2 lone pairs (water, alcohols): FC = 6 − 4 − 2 = 0.
- Oxygen with 1 bond and 3 lone pairs (hydroxide, RO⁻): FC = 6 − 6 − 1 = **−1**.
- Oxygen with 3 bonds and 1 lone pair (hydronium, H₃O⁺): FC = 6 − 2 − 3 = **+1**.

### Rules for choosing the best structure

When several Lewis structures are possible for a molecule:

1. **The sum of all formal charges must equal the overall charge** of the molecule or ion — non-negotiable.
2. **Minimize formal charges**: the best structure has the fewest nonzero formal charges.
3. **Place negative formal charges on the more electronegative atoms**, positive charges on the less electronegative atoms.
4. The octet rule generally outranks formal-charge minimization — a structure with nonzero formal charges may still be best if the alternative violates the octet.

### Formal charge vs oxidation state vs partial charge

These three "charges" answer different questions:

- **Formal charge**: assumes equal sharing of every bond; used for structure drawing and mechanism bookkeeping.
- **Oxidation state**: assigns *all* bonding electrons to the more electronegative atom; used for redox bookkeeping.
- **Partial charge (δ)**: the real, uneven electron distribution caused by electronegativity; used to predict reactivity and polarity.

In CO₂, carbon has FC = 0 but oxidation state +4; in CH₄, carbon again has FC = 0 but oxidation state −4. Same formal charge, opposite oxidation states — the concepts differ.

## ELI-10: Explain Like I'm 10

> Formal charge is like a library book count. Each atom "checks out" its valence electrons, and you count how many it is actually holding — its own lone pairs plus half of each shared pair. Holding more than it brought → minus sign; fewer → plus sign; exactly what it brought → zero. The total of all the plus and minus signs must match the molecule's overall charge: the books always have to balance.

## High-Yield Points

- Formula: FC = VE − NB − ½(BE); equivalently, VE − (lone-pair electrons) − (number of bonds).
- Sum of all formal charges must equal the molecule's net charge.
- Carbocation C: +1 (3 bonds, no lone pairs); carbanion C: −1 (3 bonds, one lone pair); normal carbon: 0.
- NH₄⁺ nitrogen: +1; hydroxide/alkoxide oxygen: −1; hydronium oxygen: +1; neutral O in water: 0.
- Count π bonds in BE — a doubly bonded atom "owns" two electrons from that bond's pair split in half.
- Formal charge ≠ oxidation state ≠ partial charge; know when each applies.
- Best structure: minimize formal charges, put − on electronegative atoms, keep octets.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| formal charge | Bookkeeping charge: VE − NB − ½(BE), assuming equal electron sharing | Validates structures and tracks electrons in mechanisms |
| valence electrons (VE) | Electrons in the outermost shell of the free atom (group number) | The baseline each atom "brings" to the molecule |
| nonbonding electrons (NB) | Lone-pair electrons on the atom in the structure | Reduce formal charge; often overlooked when drawing |
| bonding electrons (BE) | Electrons shared in bonds (2 per bond, including π bonds) | Half of each pair is "owned" by the atom |
| octet rule | Atoms (except H) tend to surround themselves with 8 valence electrons | The main constraint when choosing between structures |
| oxidation state | Charge if all bonding electrons go to the more electronegative atom | Redox bookkeeping; often confused with formal charge |
| partial charge (δ) | Real, uneven electron distribution from electronegativity | Predicts reactivity; distinct from formal charge |

## Worked Examples

### Example 1: Formal charge of nitrogen in ammonium, NH₄⁺

Step 1 — count: nitrogen has VE = 5 (group 15). In NH₄⁺, nitrogen has 4 bonds (BE = 8) and no lone pairs (NB = 0).

Step 2 — write the formula and substitute:

\[
\text{FC(N)} = 5 - 0 - \frac{1}{2}(8) = 5 - 0 - 4 = +1
\]

Step 3 — check the sum: each hydrogen has VE = 1, one bond, no lone pairs, so FC(H) = 1 − 0 − 1 = 0. Total = +1 + 4(0) = +1, matching the ion's charge: ammonium is NH₄⁺ with the charge on nitrogen.

### Example 2: Oxygen in hydroxide, OH⁻

Step 1 — count: oxygen has VE = 6. In OH⁻, oxygen has 1 bond (BE = 2) and 3 lone pairs (NB = 6).

Step 2 — substitute:

\[
\text{FC(O)} = 6 - 6 - \frac{1}{2}(2) = 6 - 6 - 1 = -1
\]

The hydrogen contributes 0; total = −1, matching OH⁻. The negative charge sits on electronegative oxygen, which accommodates it well.

### Example 3: Carbocation vs carbanion carbon

Methyl cation, CH₃⁺: carbon has VE = 4, three bonds (BE = 6), no lone pairs (NB = 0):

\[
\text{FC(C)} = 4 - 0 - \frac{1}{2}(6) = 4 - 0 - 3 = +1
\]

Methyl anion, CH₃⁻: carbon has VE = 4, three bonds (BE = 6), one lone pair (NB = 2):

\[
\text{FC(C)} = 4 - 2 - \frac{1}{2}(6) = 4 - 2 - 3 = -1
\]

Same skeleton, different electron count at carbon → opposite formal charges: carbocations are electron-poor (accepting electrons from nucleophiles), carbanions electron-rich (donating them).

### Example 4: Choosing between resonance structures of CO

Carbon monoxide can be drawn as C=O (carbon with only 2 bonds — violates the octet) or as C≡O with a lone pair on each atom. Check formal charges in the second structure: carbon: VE = 4, 3 bonds (BE = 6), 1 lone pair (NB = 2) → FC = 4 − 2 − 3 = −1; oxygen: VE = 6, 3 bonds, 1 lone pair → FC = 6 − 2 − 3 = +1. Sum = 0, matching neutral CO. The best structure is C≡O with −1 on carbon and +1 on oxygen — surprising (carbon is less electronegative yet negative) but correct, because the alternative violates the octet rule. Nonzero formal charges can be the *right* answer when octets demand them — a favorite exam trap.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Formal charge | Actual (partial) charge | FC assumes equal sharing and is bookkeeping; real charge distribution follows electronegativity (δ+/δ−) |
| Formal charge | Oxidation state | FC splits every bond evenly; oxidation state gives all bonding electrons to the more electronegative atom (C: FC 0 in both CO₂ and CH₄, but oxidation state +4 vs −4) |
| "Formal charges must be zero" | "The best structure has no charges" | Nonzero FCs are common and correct (CO, carbocations); the rule is to *minimize* them while keeping octets |
| Bond count | Only σ bonds | π bonds count too: a C=O oxygen has 2 bonds for the FC calculation, not 1 |
| The charge label | Where the charge sits | The charge is on the atom whose FC is nonzero (NH₄⁺: on N, not spread out) |
| Lone pairs on charged atoms | "Optional to draw" | Required — omitting a lone pair changes NB and flips the calculated FC |

## Quick Review

1. Write the formal-charge formula and define each term.
2. What is the formal charge on nitrogen in NH₄⁺?
3. What is the formal charge on carbon in CH₃⁻ (a carbanion)?
4. Why does CO's best structure have formal charges of −1 on carbon and +1 on oxygen?
5. What must the sum of all formal charges equal, and why?

<details>
<summary>Show answers</summary>

1. FC = VE − NB − ½(BE), where VE is the free atom's valence electrons, NB its lone-pair electrons in the structure, and BE its bonding electrons (2 per bond).
2. +1: FC = 5 − 0 − ½(8) = +1.
3. −1: FC = 4 − 2 − ½(6) = −1.
4. The alternative, C=O, leaves carbon with only 6 valence electrons — an octet violation. C≡O satisfies the octet for both atoms; its −1/+1 formal charges are the price of a valid structure.
5. It must equal the overall charge of the molecule or ion — charge is conserved, so the bookkeeping must balance.

</details>

## Related Topics

- Previous: [Polar Covalent Bonds and Dipole Moments](02-polar-covalent-bonds-and-dipole-moments.md)
- Next: [Resonance](04-resonance.md)
- Related: [Rules for Resonance Forms](05-rules-for-resonance-forms.md)
- Related: [Polar Covalent Bonds; Acids and Bases chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Formal-charge convention (equal electron sharing) follows standard organic chemistry practice (2026-08).
- Last updated: 2026-08-16
