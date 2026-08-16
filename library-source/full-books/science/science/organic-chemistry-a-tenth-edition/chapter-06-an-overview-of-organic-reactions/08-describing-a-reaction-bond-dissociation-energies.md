---
title: "Describing a Reaction: Bond Dissociation Energies"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "6: An Overview of Organic Reactions"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "describing-a-reaction-bond-dissociation-energies"
  - "science"
status: "complete"
---

# Describing a Reaction: Bond Dissociation Energies

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 6: An Overview of Organic Reactions](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

The **bond dissociation energy** (BDE, symbol \(D\)) is the energy required to break a specific bond homolytically in the gas phase: \(A\text{–}B \rightarrow A\cdot + B\cdot\). It measures how strong a bond actually is — the enthalpy change of breaking that exact bond, not an average. BDEs are tabulated for thousands of bonds and are the working currency for estimating reaction enthalpies: the heat of a reaction is approximately the sum of the BDEs of bonds broken minus the sum of the BDEs of bonds formed. Beyond calculation, BDEs explain trends that drive whole chapters — why tertiary radicals form more easily than primary ones, why \(\pi\) bonds react more readily than \(\sigma\) bonds, and why some hydrogens are easier to abstract than others.

## Why This Matters

Bond dissociation energies let you predict whether a proposed reaction is exothermic or endothermic before running it — the first screen any chemist applies to a synthetic idea. They also explain reactivity patterns you will meet constantly: the ease of halogenating different C–H bonds (previous topic), the reactivity of alkenes and alkynes (weak \(\pi\) bonds), and the stability ordering of radicals and carbocations. In biochemistry, the strength of the O–H bond in water and the energy stored in phosphate bonds govern which reactions are thermodynamically possible in a cell. On exams, BDE problems are favorite calculations, and the traps — homolysis versus heterolysis, average versus specific bond energies, and sign conventions — reliably cost points. Master the definition and the additivity rule, and the math and reasoning follow.

## Core Concepts

### The definition of bond dissociation energy

The bond dissociation energy \(D\) is the enthalpy change of the homolytic cleavage

\[
A\text{–}B \rightarrow A\cdot + B\cdot \qquad \Delta H^\circ = D(A\text{–}B)
\]

Values are measured in the gas phase at standard conditions and reported in kJ/mol (or kcal/mol; 1 kcal = 4.184 kJ). Homolytic cleavage is essential to the definition: each atom takes one electron, producing two radicals. Heterolytic cleavage — giving both electrons to one atom and forming ions — requires much more energy (often several hundred kJ/mol more) and is a different quantity.

### The additivity rule: estimating reaction enthalpies

Because energy is a state function, the reaction enthalpy can be estimated by adding the energies of bonds broken and subtracting the energies of bonds formed:

\[
\Delta H^\circ \approx \sum D(\text{bonds broken}) - \sum D(\text{bonds formed})
\]

Each bond on the reactant side that is absent from the products is "broken" and contributes positive energy; each new bond in the products is "formed" and subtracts energy. The result is approximate because tabulated BDEs are measured for specific molecules and may differ slightly from the bond in your compound, but the method reliably predicts the sign and rough magnitude of \(\Delta H^\circ\) — exactly what a first screen needs.

### What BDEs reveal about reactivity

Bond strength and radical stability are two sides of one coin: a bond that breaks easily (low \(D\)) produces a more stable radical. The C–H bonds of alkanes weaken as the carbon becomes more substituted — tertiary C–H (≈ 404 kJ/mol) < secondary (≈ 413 kJ/mol) < primary (≈ 423 kJ/mol) < methane (≈ 438 kJ/mol) — which is why halogenation prefers tertiary positions. Multiple bonds are more complex: the total \(\pi\) + \(\sigma\) energy of a C=C bond (about 728 kJ/mol) exceeds a C–C single bond (about 377 kJ/mol), but the \(\pi\) component alone is only about 264 kJ/mol. That weak \(\pi\) bond is why alkenes react readily with electrophiles and radicals — the "soft spot" of the molecule.

### BDEs in context: limitations and conventions

BDEs are gas-phase, homolytic values; in solution, solvation changes the effective energetics, so BDE estimates are guides, not exact predictions. Tables list values for particular bonds in particular molecules (e.g., the C–H bond of methane versus ethane), so use the value that matches your molecule. Note the convention: bond breaking is positive (energy input) and bond formation releases the same energy (negative contribution). Getting the sign right is the most common arithmetic error in BDE problems.

## ELI-10: Explain Like I'm 10

> A bond dissociation energy is like the tug-of-war strength of a pair of friends holding hands — it tells how hard you have to pull to snap them apart. Some pairs hold on tightly (strong bonds, big numbers) and some let go easily (weak bonds, small numbers). Chemists add up how much energy it takes to break the old hand-holds and subtract how much energy comes back when new ones form, and that tells them whether a reaction gives off heat or needs heat.

## High-Yield Points

- \(D\) = enthalpy of homolytic cleavage \(A\text{–}B \rightarrow A\cdot + B\cdot\); reported in kJ/mol (gas phase).
- Reaction estimate: \(\Delta H^\circ \approx \sum D(\text{broken}) - \sum D(\text{formed})\); positive = endothermic, negative = exothermic.
- Weak bonds (low \(D\)) give stable radicals: tertiary C–H (≈ 404) < secondary (≈ 413) < primary (≈ 423) < methane (≈ 438 kJ/mol).
- The \(\pi\) component of C=C (≈ 264 kJ/mol) is much weaker than a C–C \(\sigma\) bond (≈ 377 kJ/mol) — the reason alkenes are reactive.
- Homolysis (one electron each, radicals) is the BDE reference; heterolysis (both electrons to one atom, ions) needs far more energy.
- Use bond-specific values, watch the sign convention (breaking +, forming −), and remember results are estimates in solution.
- 1 kcal = 4.184 kJ; always check which unit a table uses.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| bond dissociation energy (\(D\)) | Energy to break one specific bond homolytically in the gas phase. | The fundamental measure of bond strength. |
| homolytic cleavage | Bond breaking where each fragment keeps one electron. | Produces radicals; the process \(D\) refers to. |
| heterolytic cleavage | Bond breaking where both electrons go to one atom. | Produces ions; much more energetic than homolysis. |
| additivity rule | \(\Delta H^\circ \approx \sum D(\text{broken}) - \sum D(\text{formed})\). | The standard way to estimate reaction enthalpies. |
| \(\sigma\) bond | End-to-end orbital overlap forming a strong single bond. | Example: C–C ≈ 377 kJ/mol. |
| \(\pi\) bond | Side-by-side p-orbital overlap, weaker than \(\sigma\). | The ≈ 264 kJ/mol "soft spot" that makes alkenes reactive. |

## How It Works / Step-by-Step Process

1. Write the balanced reaction and identify every bond broken (reactant side, absent from products) and every bond formed (product side, absent from reactants).
2. Look up the BDE for each bond, using the value for the specific molecule when the table provides it.
3. Sum broken-bond energies (positive) and formed-bond energies (negative).
4. Combine: \(\Delta H^\circ \approx \sum D(\text{broken}) - \sum D(\text{formed})\); negative is exothermic, positive is endothermic.
5. Check units (all kJ/mol) and interpret: a strongly exothermic estimate suggests a favorable reaction; a strongly endothermic one needs energy input. Remember this is an estimate — verify with experiments before relying on it.

## Worked Examples

### Example 1: Is the hydrogenation of ethylene exothermic?

Ethylene reacts with hydrogen to give ethane: \(\text{CH}_2=\text{CH}_2 + \text{H}_2 \rightarrow \text{CH}_3\text{CH}_3\). Estimate \(\Delta H^\circ\) using BDEs (approximate values): \(\pi\) C=C ≈ 264 kJ/mol, H–H ≈ 436 kJ/mol, C–H ≈ 413 kJ/mol.

Write the formula before substituting:

\[
\Delta H^\circ \approx D(\pi\ \text{C=C}) + D(\text{H–H}) - 2D(\text{C–H})
\]

Bonds broken: the \(\pi\) bond of the double bond (the \(\sigma\) bond survives) and the H–H bond. Bonds formed: two new C–H bonds. Substitute:

\[
\Delta H^\circ \approx 264 + 436 - 2(413) = 700 - 826 = -126\ \text{kJ/mol}
\]

The estimate is exothermic — hydrogenation releases heat, which is why alkene hydrogenation is a favorable, widely used reaction. Dimensional analysis: all terms are kJ/mol, so the sum is kJ/mol. (Measured values for this reaction are close to this estimate; BDE tables give the right sign and magnitude.)

### Example 2: Comparing two halogenations

Compare fluorination and chlorination of methane using BDEs: C–H (methane) ≈ 438, C–F ≈ 485, C–Cl ≈ 350, H–F ≈ 569, H–Cl ≈ 431, F–F ≈ 159, Cl–Cl ≈ 242 kJ/mol.

Fluorination, \(\text{CH}_4 + \text{F}_2 \rightarrow \text{CH}_3\text{F} + \text{HF}\):

\[
\Delta H^\circ \approx D(\text{C–H}) + D(\text{F–F}) - D(\text{C–F}) - D(\text{H–F})
\]

\[
\Delta H^\circ \approx 438 + 159 - 485 - 569 = -457\ \text{kJ/mol}
\]

Chlorination, \(\text{CH}_4 + \text{Cl}_2 \rightarrow \text{CH}_3\text{Cl} + \text{HCl}\):

\[
\Delta H^\circ \approx D(\text{C–H}) + D(\text{Cl–Cl}) - D(\text{C–Cl}) - D(\text{H–Cl})
\]

\[
\Delta H^\circ \approx 438 + 242 - 350 - 431 = -101\ \text{kJ/mol}
\]

Both are exothermic, but fluorination is far more so — in practice it is dangerously violent and hard to control, while chlorination is manageable. The huge difference comes from the very strong H–F bond formed. This example shows how a two-minute BDE estimate explains why we chlorinate alkanes but rarely fluorinate them directly.

### Example 3: Radical stability from bond strength

Rank the ease of hydrogen abstraction from ethane, propane, and 2-methylpropane given approximate C–H BDEs of 423, 413, and 404 kJ/mol respectively (primary, secondary, tertiary).

The lower the BDE, the easier the abstraction and the more stable the resulting radical:

\[
D(\text{tertiary C–H}) = 404 < D(\text{secondary C–H}) = 413 < D(\text{primary C–H}) = 423\ \text{kJ/mol}
\]

Abstraction is therefore easiest at the tertiary position of 2-methylpropane, then the secondary position of propane, then primary positions — the ordering that makes bromination selective for tertiary hydrogens. The weakest bond makes the most stable radical.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Homolysis | Heterolysis | Homolysis gives one electron to each fragment (radicals, low energy); heterolysis gives both to one atom (ions, much higher energy). |
| "Strong bond → stable radical" | Weak bond → stable radical | A bond that breaks easily (low \(D\)) leaves a more stable radical; bond strength and radical stability are inversely related. |
| Breaking bonds adds energy | Breaking bonds releases energy | Breaking always requires energy (positive contribution); formation releases it (negative contribution). Get the sign convention right. |
| Average bond energy | Specific bond dissociation energy | Average values (e.g., "average C–H") smooth over many molecules; \(D\) refers to one specific bond in one specific molecule. |
| BDE applies in solution directly | BDE is a gas-phase value | Solvation changes energies; BDE estimates are guides, not exact predictions, in solution. |
| A double bond is twice a single bond | A double bond is σ + weak π | Total C=C (≈ 728) is not double the C–C σ (≈ 377); the π component (≈ 264) is what makes alkenes reactive. |
| Exothermic estimate guarantees a fast reaction | It only says products are lower in energy | Kinetics (activation energy) is separate; an exothermic reaction can still be slow. |

## Quick Review

1. Define bond dissociation energy, and state whether it refers to homolytic or heterolytic cleavage.
2. Write the additivity rule for estimating \(\Delta H^\circ\) from BDEs.
3. Estimate \(\Delta H^\circ\) for \(\text{H}_2 + \text{Cl}_2 \rightarrow 2\,\text{HCl}\) using \(D(\text{H–H}) = 436\), \(D(\text{Cl–Cl}) = 242\), \(D(\text{H–Cl}) = 431\) kJ/mol.
4. Why is a tertiary C–H bond easier to break than a primary C–H bond?
5. Rank the following C–H bonds by ease of homolytic cleavage: secondary, primary, tertiary, methane.
6. Which is weaker: the C–C \(\sigma\) bond in ethane or the \(\pi\) bond of ethylene? What consequence does this have for reactivity?

<details>
<summary>Show answers</summary>

1. The bond dissociation energy \(D\) is the enthalpy change of homolytic cleavage \(A\text{–}B \rightarrow A\cdot + B\cdot\) in the gas phase. It refers to homolytic cleavage (one electron to each fragment).
2. \(\Delta H^\circ \approx \sum D(\text{bonds broken}) - \sum D(\text{bonds formed})\).
3. \(\Delta H^\circ \approx 436 + 242 - 2(431) = 678 - 862 = -184\ \text{kJ/mol}\) — exothermic.
4. A weaker bond releases a more stable radical; alkyl groups stabilize the unpaired electron by electron donation, so tertiary radicals are the most stable and their parent C–H bonds are the weakest (≈ 404 kJ/mol).
5. Tertiary (≈ 404 kJ/mol) < secondary (≈ 413 kJ/mol) < primary (≈ 423 kJ/mol) < methane (≈ 438 kJ/mol) — lower BDE means easier cleavage.
6. The \(\pi\) bond of ethylene (≈ 264 kJ/mol) is weaker than the C–C \(\sigma\) bond (≈ 377 kJ/mol). Because the \(\pi\) bond is the weak spot, alkenes react readily with electrophiles and radicals, which is why addition reactions to double bonds are so common.

</details>

## Related Topics

- Previous: [Describing a Reaction: Equilibria, Rates, and Energy Changes](07-describing-a-reaction-equilibria-rates-and-energy-changes.md)
- Next: [Describing a Reaction: Energy Diagrams and Transition States](09-describing-a-reaction-energy-diagrams-and-transition-states.md)
- Related: [An Overview of Organic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
