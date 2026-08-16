---
title: "Reaction Mechanisms"
subject: "Science"
book: "Chemistry 2e"
chapter: "12: Kinetics"
topic_number: "6"
source: "chemistry-2e.md"
tags:
  - "reaction-mechanisms"
  - "science"
status: "complete"
---

# Reaction Mechanisms

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 12: Kinetics](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

An overall equation shows reactants and products, not usually the molecular route between them. A **reaction mechanism** is a proposed sequence of individual molecular events—**elementary steps**—that adds up to the overall reaction. It connects an experimental rate law to a plausible account of bonds changing and short-lived species forming.

A mechanism must pass two tests: its steps must sum to the overall equation, and its predicted rate law must agree with experiment. A pathway can balance yet still be rejected by kinetic evidence.

## Why This Matters

Mechanisms explain why concentration affects rate in a particular way and identify where a reaction is slow. They help chemists control reactions and understand how a catalyst provides a faster route.

## Core Concepts

### Elementary steps and molecularity

An **elementary step** represents one event in a mechanism. Its **molecularity** is the number of reacting particles: one is unimolecular, two is bimolecular, and three is termolecular. Termolecular steps are uncommon because three particles must meet with suitable energy and orientation at once.

For an elementary step only, the reactant coefficients can be used directly as exponents in its rate law. Thus, for

\[
\ce{NO2 + F2 -> NO2F + F}
\]

the rate law is \(\text{rate}=k[\ce{NO2}][\ce{F2}]\). Do not apply this shortcut to an overall equation unless it is explicitly elementary. Overall coefficients describe stoichiometry, not necessarily rate behavior.

### Intermediates, catalysts, and the slow step

An **intermediate** is made in one step and consumed in a later step. It appears in the mechanism but cancels when the steps are added, so it does not appear in the overall reaction. A **catalyst** is consumed early and regenerated later; it also cancels from the net equation, but unlike an intermediate, it is present at the beginning and is recovered at the end.

Many multistep reactions have a **rate-determining step**, a slow step that limits the sequence. If it comes first, its rate law can often be the observed rate law. If it contains an intermediate, that concentration cannot remain in the final expression because intermediates are not normally measured or supplied initially. Use a prior fast-equilibrium expression or other stated relationship to replace it with stable reactants.

### Energy and evidence

Each elementary step has its own activation-energy barrier and transition state. Rate data, detected products, isotope labeling, and catalyst effects can support a mechanism. Several pathways can fit limited evidence, so a mechanism is a tested model, not a direct movie of molecules.

## ELI-10: Explain Like I’m 10

> A reaction equation is like saying a pile of building bricks became a castle. A reaction mechanism tells the small steps: which bricks were joined first and which partly built pieces appeared along the way. The slowest needed step can make the whole building job take longer, even if the other steps are quick.

## High-Yield Points

- A valid mechanism must reproduce both the overall balanced equation and the experimental rate law.
- Use coefficients as rate-law exponents only for an elementary step, never automatically for a complex overall reaction.
- Intermediates are formed and then used up; catalysts are used and then regenerated.
- A rate law written for a proposed overall mechanism must contain concentrations of measurable reactants (and sometimes catalysts), not intermediates.
- A slow first step often determines the rate directly; eliminate intermediates from a later slow step.
- Molecularity is defined for an elementary step; “reaction order” is determined experimentally for a rate law.

## Key Terms

| Term | Plain-Language Definition |
|---|---|
| reaction mechanism | A proposed series of elementary steps that explains an overall reaction. |
| elementary step | One molecular event in a mechanism. |
| molecularity | Number of reacting particles in one elementary step: usually one or two. |
| intermediate | A species produced in one step and consumed in a later step; it cancels from the net reaction. |
| catalyst | A substance consumed in one step and regenerated later, providing an alternative pathway. |
| rate-determining step | A step slow enough to limit the rate of a multistep reaction. |

## How It Works / Step-by-Step Process

1. Add the elementary steps, cancel shared species, and verify the stated overall reaction remains.
2. Mark species that cancel. A species made then consumed is an intermediate; one consumed then remade is a catalyst.
3. Identify the slow step or use the kinetic information supplied. Write its elementary-step rate law.
4. If the rate law contains an intermediate, use a stated relationship to replace it with reactant concentrations.
5. Compare the prediction with the experimental rate law. A mismatch rules out the mechanism.

## Worked Examples

### Worked example 1: identifying intermediates and testing a rate law

Consider the observed reaction \(\ce{2NO2 + F2 -> 2NO2F}\). Experiments give the rate law \(\text{rate}=k[\ce{NO2}][\ce{F2}]\). One proposed mechanism is:

\[
\ce{NO2 + F2 -> NO2F + F} \qquad \text{slow}
\]
\[
\ce{F + NO2 -> NO2F} \qquad \text{fast}
\]

Adding the steps cancels \(\ce{F}\), leaving \(\ce{2NO2 + F2 -> 2NO2F}\). Fluorine atom \(\ce{F}\) is an intermediate: it is produced, then consumed. The first, slow elementary step predicts \(\text{rate}=k[\ce{NO2}][\ce{F2}]\), exactly the observed form. This mechanism is consistent with the evidence, though not uniquely proven.

### Worked example 2: a mechanism with a fast pre-equilibrium

The gas-phase reaction \(\ce{2NO + O2 -> 2NO2}\) has the experimental rate law \(\text{rate} = k[\ce{NO}]^2[\ce{O2}]\). Consider this proposed mechanism:

\[
\ce{NO + O2 <=> NO3} \qquad \text{fast (equilibrium)}
\]
\[
\ce{NO3 + NO -> 2NO2} \qquad \text{slow}
\]

Adding the steps gives \(\ce{2NO + O2 -> 2NO2}\), so the stoichiometry is satisfied. The slow step predicts \(\text{rate} = k_2[\ce{NO3}][\ce{NO}]\), but \(\ce{NO3}\) is an intermediate and must be eliminated. Because the first step is a fast equilibrium, its equilibrium expression relates \([\ce{NO3}]\) to \([\ce{NO}]\) and \([\ce{O2}]\):

\[
K_1 = \frac{[\ce{NO3}]}{[\ce{NO}][\ce{O2}]} \qquad \Rightarrow \qquad [\ce{NO3}] = K_1[\ce{NO}][\ce{O2}]
\]

Substitute back into the slow-step rate law:

\[
\text{rate} = k_2K_1[\ce{NO}]^2[\ce{O2}] = k[\ce{NO}]^2[\ce{O2}]
\]

The predicted rate law matches the experimental one, so this mechanism is consistent with the evidence. The important move was replacing the intermediate concentration with observable reactants using the pre-equilibrium condition — never leave \([\ce{NO3}]\) in a final rate law.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| “The balanced overall equation gives the rate law.” | Only an elementary equation gives its rate law directly; overall reactions may have several hidden steps. |
| “Anything that cancels is an intermediate.” | A catalyst also cancels, but it is regenerated after being consumed; an intermediate is created during the pathway. |
| “The slow step always supplies the final rate law.” | Replace any intermediate in its starting expression before comparison with experiment. |
| “A mechanism that balances is correct.” | It must also match kinetics and other evidence; more than one mechanism may remain plausible. |
| “Molecularity and reaction order mean the same thing.” | Molecularity counts particles in an elementary step; order comes from the measured rate law. |

## Quick Review

1. What two requirements must a proposed reaction mechanism meet?
2. Why can the coefficients of an elementary step be used in its rate law, while those of an overall equation usually cannot?
3. In a mechanism, species X is formed in step 1 and consumed in step 2. What is X called?
4. A slow step has rate \(k[\ce{A}][\ce{I}]\), where \(\ce{I}\) is an intermediate. Why is that not yet an acceptable experimental rate law?
5. How does a catalyst differ from an intermediate in the sequence of steps?

<details>
<summary>Show answers</summary>

1. Its elementary steps must add to the overall reaction, and its predicted rate law must agree with experiment.
2. Its molecularity sets an elementary step’s concentration dependence. An overall equation may combine several events and hide the slow step.
3. X is an intermediate: it exists during the pathway but cancels from the net equation.
4. Intermediates are not normally controlled or measured as initial reactants. Use the other mechanistic relationships to rewrite \([\ce{I}]\) in terms of observable species.
5. An intermediate is generated and later consumed. A catalyst is consumed in an early step and regenerated in a later one, so it is available again after the reaction.

</details>

## Related Topics

- Previous: [Collision Theory](05-collision-theory.md)
- Next: [Catalysis](07-catalysis.md)
- Related: [Kinetics chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
