---
title: "Electrode and Cell Potentials"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "16: Electrochemistry"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "electrode-and-cell-potentials"
  - "science"
status: "complete"
---

# Electrode and Cell Potentials

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 16: Electrochemistry](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Every half-reaction has a built-in tendency to gain electrons — some species pull strongly (fluorine, oxygen), others hold loosely (lithium, zinc). Electrochemistry turns that tendency into a number: the **standard reduction potential**, E°, measured in volts (1 V = 1 J per coulomb of charge). Because a single half-reaction cannot be measured in isolation, potentials are defined relative to the **standard hydrogen electrode (SHE)**, assigned exactly 0.00 V. Tables of standard reduction potentials then let you predict which reactions are spontaneous and compute any cell's voltage with one rule: E°cell = E°cathode − E°anode.

## Why This Matters

Cell potentials are the practical currency of electrochemistry. Battery makers use them to choose electrode pairs; corrosion engineers use them to pick sacrificial metals; analytical chemists use them to design sensors. Most importantly, the sign of E°cell tells you instantly whether a reaction is spontaneous — the chapter's single most useful prediction — and its magnitude feeds Topic 4's free-energy and equilibrium calculations. Reading a reduction-potential table correctly is tested on virtually every exam.

## Core Concepts

### Standard reduction potentials

A **standard reduction potential** is the voltage of a half-reaction written as a *reduction* (species + electrons → product) under standard conditions: solutes at 1 M, gases at 1 atm, 25 °C (298 K). The more positive the potential, the stronger the pull on electrons — and the stronger the **oxidizing agent** (the species on the left). The more negative the potential, the stronger the **reducing agent** (the species on the right). Reversing a half-reaction flips the sign of its potential, but multiplying it never changes the potential — potentials are intensive.

### The standard hydrogen electrode (SHE)

The SHE is the reference for all other potentials: a platinum electrode (inert — it only conducts electrons) immersed in 1 M H⁺ with H₂ gas bubbled over it at 1 atm. By convention:

\[
2\text{H}^+(aq, 1\ \text{M}) + 2e^- \rightarrow \text{H}_2(g, 1\ \text{atm}) \qquad E^\circ = 0.00\ \text{V}
\]

To measure any other couple's potential, build a cell with the SHE as one electrode and read the voltmeter: the measured voltage is that couple's reduction potential.

### Computing the cell potential

For any galvanic cell, the standard cell potential is the cathode potential minus the anode potential:

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}
\]

where E°cathode is the reduction potential of the half-reaction that runs as a reduction and E°anode is the potential of the half-reaction that runs as an oxidation (use the table value as written — the minus sign handles the reversal). Identify the electrodes by comparing potentials: the more positive couple is reduced (cathode), the more negative oxidized (anode).

### Predicting spontaneity

The sign of E°cell is the verdict: **E°cell > 0 means the reaction is spontaneous** (it can power a galvanic cell); **E°cell < 0 means it is nonspontaneous** as written (it requires an electrolytic cell and external energy). This is the electrochemical version of the Chapter 12 rule: spontaneous processes have negative ΔG°, linked to E° by ΔG° = −nFE° (Topic 4).

### Relative strengths of oxidizing and reducing agents

Think of the potential table as a ladder. Species high on the ladder (positive E°, e.g., F₂, MnO₄⁻) are the strongest oxidizing agents — they grab electrons from anything below them. Species low on the ladder (negative E°, e.g., Li, Zn) are the strongest reducing agents — they readily give electrons away. A reaction is spontaneous when the reducing agent sits *below* the oxidizing agent: electrons flow "downhill" from the more negative couple to the more positive one.

## ELI-10: Explain Like I'm 10

> Every kind of atom has its own "electron hunger." Some atoms, like fluorine, are super hungry; others, like lithium, are happy to let electrons go. The potential table is a hunger chart: the hungriest atoms are at the top. Electrons slide downhill, from an atom that doesn't want them to one that does — the farther the slide, the bigger the voltage.

## High-Yield Points

- E° values are measured against the SHE (0.00 V) at 1 M/1 atm/25 °C.
- More positive E° = stronger oxidizing agent; more negative E° = stronger reducing agent.
- E°cell = E°cathode − E°anode; the more positive couple is the cathode (reduced), the more negative is the anode (oxidized).
- E°cell > 0 → spontaneous (galvanic cell); E°cell < 0 → nonspontaneous (electrolytic cell).
- Reversing a half-reaction flips the sign of E°; multiplying it does not change E° — E° is intensive.
- A more negative E° (more active metal) predicts which metal corrodes or dissolves first.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| standard reduction potential (E°) | Voltage of a half-reaction written as a reduction under standard conditions. | Quantifies each couple's electron pull; the data for predicting cell behavior. |
| standard hydrogen electrode (SHE) | Reference electrode: Pt in 1 M H⁺ with H₂ at 1 atm, assigned 0.00 V. | The zero point that makes all potentials comparable. |
| standard conditions | 1 M solutes, 1 atm gases, 25 °C (298 K). | The fixed benchmark that makes E° values reproducible. |
| oxidizing agent strength | How strongly a species pulls electrons (high E°). | Predicts which species gets reduced and drives the reaction. |
| reducing agent strength | How readily a species gives up electrons (low E°). | Predicts which species is oxidized; active metals are strong reductants. |
| cell potential (E°cell) | The voltage of a full cell: E°cathode − E°anode. | Its sign predicts spontaneity; its size sets battery voltage. |

## How It Works / Step-by-Step Process

1. Write the two half-reactions and look up their standard reduction potentials.
2. Identify the cathode (more positive E°) and the anode (more negative E°).
3. Apply E°cell = E°cathode − E°anode, substituting the table values with their units.
4. Interpret: positive E°cell = spontaneous as written; negative = nonspontaneous.
5. If needed, balance the overall equation (Topic 1); the potential is unchanged.

## Example: Computing Cell Potentials

### Example 1: The Daniell cell

For the Zn/Cu cell (Zn anode, Cu cathode), the half-reactions and table values are:

\[
\text{Cu}^{2+}(aq) + 2e^- \rightarrow \text{Cu}(s) \qquad E^\circ = +0.34\ \text{V}
\]

\[
\text{Zn}^{2+}(aq) + 2e^- \rightarrow \text{Zn}(s) \qquad E^\circ = -0.76\ \text{V}
\]

Copper has the more positive potential, so it is the cathode and zinc the anode. Apply the formula before substituting:

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = +0.34\ \text{V} - (-0.76\ \text{V}) = +1.10\ \text{V}
\]

The positive value confirms the reaction is spontaneous, delivering 1.10 V under standard conditions.

### Example 2: A lead–nickel cell

Which electrode is the anode in a Pb²⁺/Pb (E° = −0.13 V) vs. Ni²⁺/Ni (E° = −0.26 V) cell? Lead's potential is less negative, so Pb²⁺ is reduced (cathode) and Ni oxidized (anode):

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = -0.13\ \text{V} - (-0.26\ \text{V}) = +0.13\ \text{V}
\]

The cell is spontaneous, but only barely — 0.13 V. Note the stronger reducing agent: nickel (−0.26 V) is more negative than lead. The balanced cell reaction is Ni(s) + Pb²⁺(aq) → Ni²⁺(aq) + Pb(s).

### Example 3: Will tin metal reduce iron(III)?

Predict whether Sn(s) will reduce Fe³⁺(aq) to Fe²⁺(aq) under standard conditions. The couples: Fe³⁺ + e⁻ → Fe²⁺ (E° = +0.77 V) and Sn²⁺ + 2e⁻ → Sn (E° = −0.14 V). Fe³⁺ has the more positive potential, so it is reduced (cathode), and Sn is oxidized (anode):

\[
E^\circ_{\text{cell}} = +0.77\ \text{V} - (-0.14\ \text{V}) = +0.91\ \text{V}
\]

Positive, so the reaction is spontaneous: 2Fe³⁺(aq) + Sn(s) → 2Fe²⁺(aq) + Sn²⁺(aq) — two Fe³⁺ accept the two electrons each Sn atom gives up. Had E°cell come out negative, you would predict no reaction — a common exam format.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| E°cathode − E°anode | E°reduction + E°oxidation | Both give the same number, but the subtraction form uses table values directly; adding requires flipping the anode sign first. |
| Which couple is the cathode | Which couple is the anode | The more *positive* E° is reduced (cathode); the more negative E° is oxidized (anode). |
| Oxidizing agent | Reducing agent in the table | The oxidized form (left side) is the oxidizing agent; the reduced form (right side) is the reducing agent. |
| Standard conditions | Actual lab conditions | E° applies only at 1 M/1 atm/25 °C; real cells deviate (Topic 4's Nernst equation handles this). |

## Quick Review

1. Why must every reduction potential be measured relative to the SHE rather than absolutely?
2. A cell uses the couples Fe³⁺/Fe²⁺ (+0.77 V) and Br₂/Br⁻ (+1.09 V). Which is the cathode, and what is E°cell?
3. True or false: doubling the coefficients of a half-reaction doubles its E° value. Explain.
4. Which is the stronger reducing agent, Zn (−0.76 V) or Ni (−0.26 V)? Which is the stronger oxidizing agent, Cu²⁺ (+0.34 V) or Ag⁺ (+0.80 V)?
5. If E°cell for a reaction is −0.45 V, will the reaction proceed spontaneously as written?
6. Why does a metal with a very negative E° (like sodium, −2.71 V) react vigorously with water rather than sitting quietly in it?

<details>
<summary>Show answers</summary>

1. A single electrode's absolute potential cannot be measured — only differences can. The SHE provides a fixed, reproducible zero.
2. Br₂/Br⁻ (+1.09 V) is the cathode. E°cell = 1.09 V − 0.77 V = +0.32 V.
3. False. E° is an intensive property; multiplying a half-reaction changes the number of electrons but not the potential per electron.
4. Zn is the stronger reducing agent (more negative E°); Ag⁺ is the stronger oxidizing agent (more positive E°).
5. No. A negative E°cell means the reaction is nonspontaneous as written.
6. Sodium's very negative E° makes it an extremely strong reducing agent: it readily gives up electrons, in this case to water, reducing H₂O to H₂ gas and OH⁻ (Topic 18 covers the reaction).

</details>

## Related Topics

- Previous: [Galvanic Cells](02-galvanic-cells.md)
- Next: [Potential, Free Energy, and Equilibrium](04-potential-free-energy-and-equilibrium.md)
- Related: [Batteries and Fuel Cells](05-batteries-and-fuel-cells.md), [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
