---
title: "Reaction Mechanisms"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "17: Kinetics"
topic_number: "6"
source: "chemistry-atoms-first-2e.md"
tags:
  - "reaction-mechanisms"
  - "science"
status: "complete"
---

# Reaction Mechanisms

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 17: Kinetics](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

A balanced chemical equation is a summary: it shows what starts a reaction and what ends it, but not how the atoms get from one side to the other. A **reaction mechanism** is the step-by-step sequence of molecular events that actually occurs — which bonds break, which bonds form, and in what order. Each step is an **elementary reaction** (elementary step): a single molecular event such as a molecule splitting or two molecules colliding.

The mechanism matters because it determines the rate law. When a rate law like \(\text{rate} = k[\text{NO}]^2[\text{Br}_2]\) does not match the coefficients of the overall equation, the mismatch is evidence that the reaction proceeds through several steps, one slower than the others. That slow step — the **rate-determining step** — controls the overall speed, and its molecularity dictates the rate law's concentration dependence.

## Why This Matters

Mechanisms are where kinetics becomes chemistry: knowing the mechanism tells a chemist which bonds to weaken, what intermediate to stabilize, or what catalyst to design to make a reaction faster or more selective. The Haber synthesis of ammonia was refined for decades by improving the picture of its mechanism, and enzyme mechanisms explain drug action, metabolism, and disease. For exams, mechanism problems test the central idea: the rate law is set by the slow elementary step, and intermediates never appear in the overall rate law.

## Core Concepts

### Elementary steps and molecularity

An **elementary reaction** describes what happens in a single molecular event; it cannot be broken into simpler steps. Each step is classified by its **molecularity** — the number of reactant particles that come together:

- **Unimolecular** (one molecule): a single molecule rearranges or splits, e.g., cyclobutane \(\to 2\) ethylene; rate law \(= k[A]\).
- **Bimolecular** (two particles): two molecules or atoms collide, e.g., \(\text{NO}_2 + \text{CO} \to \text{NO} + \text{CO}_2\); rate law \(= k[A][B]\).
- **Termolecular** (three particles): three particles collide at once, e.g., \(2\text{NO} + \text{O}_2 \to 2\text{NO}_2\); rate law \(= k[A]^2[B]\). Termolecular steps are rare because three particles must meet simultaneously.

For an elementary step, the rate law is written directly from its stoichiometry: exponents equal molecularities. This rule applies **only** to elementary steps — never to the overall balanced equation.

### Intermediates and transition states

An **intermediate** is a species produced in one elementary step and consumed in a later one, so it does not appear in the overall equation — for example, NO\(_3\) produced in step 1 and consumed in step 2 of a classic mechanism. Intermediates are real molecular species with finite lifetimes. Do not confuse them with **transition states** — fleeting, maximum-energy configurations at the top of the activation barrier that exist for only one bond vibration and can never be isolated.

### The rate-determining step

When one elementary step is much slower than the others, the overall reaction cannot proceed faster than that step allows — it is the **rate-determining step** (rate-limiting step). The overall rate law is the slow step's rate law, after substituting any concentrations set by fast steps that precede it. The slow step is often, but not always, the first step.

### Fast equilibrium before the slow step

If a fast, reversible step precedes the slow step, it establishes a **pre-equilibrium**. Solving its equilibrium constant expression for the intermediate's concentration and substituting into the slow step's rate law eliminates the intermediate — the standard technique for deriving rate laws for multi-step mechanisms.

### Testing a proposed mechanism

A mechanism is accepted only if (1) its steps sum to the overall balanced equation, (2) its derived rate law matches the experimentally measured one, and (3) its steps are chemically reasonable. If the derived rate law disagrees with experiment, the mechanism is wrong no matter how elegant it looks.

## ELI-10: Explain Like I'm 10

> A reaction mechanism is like a cake recipe: the overall equation only tells you the ingredients you start with and the cake you end with, but the recipe gives each step — mix, add eggs, bake. The slowest step, like waiting for the oven, controls how long everything takes.

## High-Yield Points

- A mechanism is a sequence of elementary steps; each step's rate law comes from its molecularity, not from the overall equation.
- The **rate-determining step** controls the rate; its rate law, after substituting pre-equilibrium concentrations, is the overall rate law.
- **Intermediates** cancel from the overall equation and never appear in the rate law.
- A valid mechanism must sum to the overall equation, give the correct experimental rate law, and be chemically plausible.
- Unimolecular and bimolecular steps are common, termolecular steps rare; when a fast step precedes the slow step, solve its equilibrium expression for the intermediate and substitute.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Reaction mechanism | The sequence of elementary steps describing how a reaction occurs. | Explains the observed rate law and guides catalyst design. |
| Elementary step | A single molecular event that cannot be subdivided. | Only elementary steps have rate laws written from their coefficients. |
| Molecularity | The number of particles that collide in an elementary step (1, 2, or 3). | Sets the exponents in the step's rate law. |
| Intermediate | A species made in one step and used up in a later step. | Never appears in the overall equation or final rate law; its concentration is substituted away. |
| Rate-determining step | The slowest elementary step, which limits the overall rate. | Its rate law is the overall rate law. |
| Pre-equilibrium | A fast, reversible step that establishes equilibrium before the slow step. | Lets you express the intermediate's concentration via the fast step's equilibrium constant. |

## How It Works / Step-by-Step Process

1. Write the proposed elementary steps and check that they sum to the overall balanced equation.
2. Identify the rate-determining (slowest) step.
3. Write its rate law from its molecularity: \(\text{rate} = k\) times each reactant concentration raised to its coefficient in that step.
4. If the slow step contains an intermediate, replace its concentration using the fast preceding step's equilibrium expression.
5. Compare the derived rate law with the experimental one; if they disagree, revise the mechanism.

## Worked Examples

### Worked example 1: the classic two-step mechanism

The reaction \(2\ \text{NO}_2 + \text{F}_2 \to 2\ \text{NO}_2\text{F}\) has the experimental rate law \(\text{rate} = k[\text{NO}_2][\text{F}_2]\). Proposed mechanism:

Step 1 (slow): \(\text{NO}_2 + \text{F}_2 \to \text{NO}_2\text{F} + \text{F}\)
Step 2 (fast): \(\text{NO}_2 + \text{F} \to \text{NO}_2\text{F}\)

First, check that the steps sum to the overall equation: adding step 1 and step 2 gives \(2\text{NO}_2 + \text{F}_2 \to 2\text{NO}_2\text{F}\), with the \(\text{F}\) atom canceling as an intermediate. Next, write the rate law from the slow step's molecularity:

\[
\text{rate} = k_1[\text{NO}_2][\text{F}_2]
\]

The slow step is bimolecular in NO\(_2\) and F\(_2\) and contains no intermediate, so the derived rate law matches the experimental one exactly. Note that the coefficient 2 on NO\(_2\) in the overall equation is irrelevant — the slow step is first order in NO\(_2\).

### Worked example 2: a fast equilibrium before the slow step

The reaction \(2\ \text{NO} + \text{Br}_2 \to 2\ \text{NOBr}\) has the experimental rate law \(\text{rate} = k[\text{NO}]^2[\text{Br}_2]\). Proposed mechanism:

Step 1 (fast, reversible): \(\text{NO} + \text{Br}_2 \rightleftharpoons \text{NOBr}_2\)
Step 2 (slow): \(\text{NOBr}_2 + \text{NO} \to 2\ \text{NOBr}\)

The steps sum to the overall equation (NOBr\(_2\) is an intermediate). The slow step is bimolecular, so its rate law is:

\[
\text{rate} = k_2[\text{NOBr}_2][\text{NO}]
\]

This contains the intermediate NOBr\(_2\), which must be eliminated. The fast step reaches equilibrium, so solve its equilibrium expression for the intermediate:

\[
K_1 = \frac{[\text{NOBr}_2]}{[\text{NO}][\text{Br}_2]} \quad\Rightarrow\quad [\text{NOBr}_2] = K_1[\text{NO}][\text{Br}_2]
\]

Substitute back into the slow-step rate law:

\[
\text{rate} = k_2 K_1 [\text{NO}]^2[\text{Br}_2] = k[\text{NO}]^2[\text{Br}_2]
\]

where the composite constant \(k = k_2 K_1\) collects the elementary rate constant and the equilibrium constant. The derived rate law matches the experimental one, so the mechanism is consistent with the data — and it shows why intermediates vanish from rate laws: the fast step controls their concentrations.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Coefficients in the overall equation | Exponents in the rate law | Exponents equal molecularities only for elementary steps; overall rate laws must be measured. |
| Intermediate | Transition state | An intermediate is a real species with a finite lifetime, formed in one step and used in the next; a transition state is the fleeting energy maximum of a single step and can never be isolated. |
| Intermediate | Catalyst | An intermediate is produced and then consumed within the reaction; a catalyst is added, participates, and is regenerated. Both vanish from the overall equation, but the catalyst is never consumed net. |
| The slow step being the first step | The slow step being rate-determining | The rate-determining step can sit anywhere in the sequence; if it is not first, fast preceding steps set up a pre-equilibrium that feeds it. |
| A mechanism that sums correctly | A mechanism that is correct | It must also reproduce the experimental rate law; summing correctly is necessary but not sufficient. |

## Quick Review

1. What is the rate law for the elementary step \(2\text{A} + \text{B} \to \text{products}\)?
2. Why do intermediates never appear in an overall rate law?
3. In a mechanism where a fast equilibrium precedes the slow step, how is the intermediate removed from the rate law?
4. A proposed mechanism sums correctly but predicts a rate law different from the experiment. What can you conclude?
5. What is the difference between a unimolecular and a bimolecular elementary step?

<details>
<summary>Show answers</summary>

1. \(\text{rate} = k[A]^2[B]\), because the step is termolecular and exponents come from the molecularities of the elementary step.
2. An intermediate is produced in one step and consumed in another, so its concentration is determined by the steps that create and destroy it; substituting those relationships eliminates it from the final rate law.
3. Use the fast step's equilibrium constant expression to solve for the intermediate's concentration, then substitute it into the slow step's rate law.
4. The mechanism is inconsistent with the data and must be revised — summing correctly is necessary but not sufficient.
5. A unimolecular step involves one molecule rearranging or splitting; a bimolecular step involves two particles colliding. Molecularity sets the rate law exponents (1 and 2).

</details>

## Related Topics

- Previous: [Collision Theory](05-collision-theory.md)
- Next: [Catalysis](07-catalysis.md)
- Related: [Rate Laws](03-rate-laws.md) · [Integrated Rate Laws](04-integrated-rate-laws.md) · [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
