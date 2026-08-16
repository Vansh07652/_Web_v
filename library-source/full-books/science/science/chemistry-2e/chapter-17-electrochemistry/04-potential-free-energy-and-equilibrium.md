---
title: "Potential, Free Energy, and Equilibrium"
subject: "Science"
book: "Chemistry 2e"
chapter: "17: Electrochemistry"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "potential-free-energy-and-equilibrium"
  - "science"
status: "complete"
---

# Potential, Free Energy, and Equilibrium

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 17: Electrochemistry](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A working galvanic cell converts a spontaneous redox reaction into useful electrical work — but how much work, and under what conditions? The answer ties together three of chemistry's most important quantities: the **cell potential** \(E\), the **Gibbs free energy change** \(\Delta G\), and the **equilibrium constant** \(K\). This topic develops the exact equations connecting them — \(\Delta G^\circ = -nFE^\circ_{\text{cell}}\), the **Nernst equation**, and \(\ln K = \frac{nFE^\circ_{\text{cell}}}{RT}\) — so you can predict spontaneity, calculate maximum work, and find equilibrium constants that no direct experiment could measure.

## Why This Matters

These relationships are the quantitative engine of electrochemistry. Battery ratings, fuel-cell efficiencies, electroplating cost estimates, and even the way cells couple nonspontaneous reactions to ATP hydrolysis all rest on \(\Delta G = -nFE\). The equations let you predict a cell's voltage at any concentration (not just the 1 M standard state), decide whether a proposed redox pair will react at all, and compute equilibrium constants like \(K \approx 10^{37}\) for the zinc–copper cell — a number far too large for ordinary titration but obtained instantly from a single table of standard potentials.

## Core Concepts

### The master equation: \(\Delta G^\circ = -nFE^\circ_{\text{cell}}\)

The **standard cell potential** \(E^\circ_{\text{cell}}\) (in volts) measures the driving force per electron transferred. The symbol \(n\) is the number of **moles of electrons** in the balanced reaction, and the **Faraday constant** converts moles of electrons into charge:

\[ F = 96{,}485\ \text{C/mol e}^- \]

Because \(1\ \text{V} = 1\ \text{J/C}\), the product \(nFE^\circ\) has energy units: \(\text{mol} \times \frac{\text{C}}{\text{mol}} \times \frac{\text{J}}{\text{C}} = \text{J}\). A spontaneous reaction has \(E^\circ_{\text{cell}} > 0\) and \(\Delta G^\circ < 0\). Note the intensive/extensive distinction: \(E^\circ\) is intensive — doubling every coefficient in the reaction leaves \(E^\circ\) unchanged, while both \(n\) and \(\Delta G^\circ\) double.

### The Nernst equation: voltage at real concentrations

Standard potentials apply only at 1 M solutes, 1 atm gases, and 25 °C. Real cells rarely sit at standard conditions, and the **Nernst equation** corrects for that:

\[ E = E^\circ_{\text{cell}} - \frac{RT}{nF}\ln Q \]

where \(Q\) is the reaction quotient built exactly as for any equilibrium. At 298 K the constants fold into a convenient base-10 form: \(E = E^\circ_{\text{cell}} - \frac{0.0592}{n}\log_{10}Q\) (since \(\frac{RT}{F}\ln 10 \approx 0.0592\ \text{V}\)). For the zinc–copper cell, \(Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}\). As a cell discharges, \(Q\) grows and \(E\) falls toward zero. A **concentration cell** — the same redox couple at two different concentrations — shows the Nernst equation at its purest: \(E^\circ_{\text{cell}} = 0\), yet the cell still produces voltage because \(Q \neq 1\).

### Equilibrium: when the cell is "dead"

At equilibrium the cell can do no more work: \(E = 0\), \(\Delta G = 0\), and \(Q = K\). Substituting \(E = 0\) and \(Q = K\) into the Nernst equation gives:

\[ \ln K = \frac{nFE^\circ_{\text{cell}}}{RT} \]

At 298 K this becomes \(\log_{10}K = \frac{nE^\circ_{\text{cell}}}{0.0592}\). A modest potential of +0.30 V with \(n = 2\) corresponds to \(K \approx 10^{10}\) — the reaction is overwhelmingly product-favored, which is why redox titrations and batteries behave so decisively.

### The spontaneity triangle

Three statements are equivalent: \(E^\circ_{\text{cell}} > 0\), \(\Delta G^\circ < 0\), and \(K > 1\). Given any one of them you can rank reactions and predict direction. For nonstandard conditions, use the actual \(E\) from the Nernst equation in \(\Delta G = -nFE\) — the same formula, just with the real driving force instead of the standard one.

## ELI-10: Explain Like I'm 10

Think of a battery as a water slide. The voltage is how high the water starts — higher water means more speed at the bottom. As the ride goes on, the water level drops (concentrations change) and the slide slows down. When the water is level at both ends, the ride stops completely — that's equilibrium. Free energy is just a way of asking how much fun (work) the slide can still deliver.

## High-Yield Points

- Memorize the trio: \(\Delta G^\circ = -nFE^\circ_{\text{cell}}\), \(E = E^\circ - \frac{RT}{nF}\ln Q\), and \(\ln K = \frac{nFE^\circ}{RT}\).
- \(F = 96{,}485\ \text{C/mol e}^-\); at 298 K, \(\frac{RT}{F}\ln 10 \approx 0.0592\ \text{V}\).
- \(n\) = moles of electrons transferred — read it from the **balanced** half-reactions, and make sure both half-reactions involve the same number of electrons before adding.
- \(E^\circ > 0 \Leftrightarrow \Delta G^\circ < 0 \Leftrightarrow K > 1\): all three say "spontaneous."
- At equilibrium \(E = 0\), even though the reaction is not necessarily complete.
- Doubling a reaction leaves \(E^\circ\) unchanged but doubles \(n\) and \(\Delta G^\circ\).
- A concentration cell runs on \(E^\circ = 0\) but \(Q \neq 1\); the higher-concentration side is the cathode.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Cell potential \(E\) | Voltage a cell actually produces under its real conditions | Tells you how much work the cell can do right now |
| Standard cell potential \(E^\circ_{\text{cell}}\) | Voltage when all solutes are 1 M, gases 1 atm, at 25 °C | The reference value from tables that feeds every calculation |
| Gibbs free energy \(\Delta G\) | Energy available to do work at constant pressure and temperature | Its sign decides spontaneity; its size is the maximum work |
| Faraday constant \(F\) | Charge carried by one mole of electrons, 96,485 C/mol | Converts between moles of electrons and charge |
| Nernst equation | Formula correcting \(E^\circ\) for nonstandard concentrations | Lets you predict real battery voltages |
| Reaction quotient \(Q\) | Concentration ratio like \(K\), but at any moment, not just equilibrium | Tracks how far a reaction has progressed |
| Equilibrium constant \(K\) | The value of \(Q\) when the reaction stops changing | Predictable from \(E^\circ\) without any experiment |
| Concentration cell | Cell with identical electrodes but different ion concentrations | Proves voltage comes from the concentration difference, not the chemistry |

## Example: Two Worked Problems

**Worked Example 1 — Maximum work and \(K\) from \(E^\circ\).** For the zinc–copper cell, \(\text{Zn}(s) + \text{Cu}^{2+}(aq) \rightarrow \text{Zn}^{2+}(aq) + \text{Cu}(s)\), with \(E^\circ_{\text{cell}} = +1.10\ \text{V}\) and \(n = 2\):

\[ \Delta G^\circ = -nFE^\circ = -(2\ \text{mol e}^-)(96{,}485\ \text{C/mol e}^-)(1.10\ \text{V}) = -2.12 \times 10^5\ \text{J} = -212\ \text{kJ} \]

Unit check: \(\text{mol} \times \frac{\text{C}}{\text{mol}} \times \frac{\text{J}}{\text{C}} = \text{J}\). The negative sign confirms spontaneity. Now find \(K\):

\[ \ln K = \frac{nFE^\circ}{RT} = \frac{(2)(96{,}485)(1.10)}{(8.314)(298)} = \frac{212{,}267}{2{,}478} = 85.7 \]

so \(K = e^{85.7} \approx 1.5 \times 10^{37}\) — the reaction runs essentially to completion.

**Worked Example 2 — Nernst equation at nonstandard concentrations.** Suppose \([\text{Zn}^{2+}] = 0.10\ \text{M}\) and \([\text{Cu}^{2+}] = 2.0\ \text{M}\). Then \(Q = \frac{0.10}{2.0} = 0.050\), and at 298 K:

\[ E = E^\circ - \frac{0.0592}{n}\log_{10}Q = 1.10\ \text{V} - \frac{0.0592}{2}\log_{10}(0.050) = 1.10 - 0.0296(-1.30) = 1.14\ \text{V} \]

The cell delivers slightly more than its standard 1.10 V because the reactant side (\([\text{Cu}^{2+}]\)) is concentrated and the product side (\([\text{Zn}^{2+}]\)) is dilute — Le Châtelier's principle in electrochemical form.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Standard potential \(E^\circ\) | Actual potential \(E\) | \(E^\circ\) is fixed at standard conditions; \(E\) changes with \(Q\) |
| \(\Delta G^\circ\) | \(\Delta G\) | \(\Delta G^\circ\) comes from \(E^\circ\); \(\Delta G\) comes from the real \(E\) |
| \(n\) = moles of substance | \(n\) = moles of electrons | Read \(n\) from the balanced half-reactions, not the overall equation's coefficients |
| \(\ln Q\) in the Nernst equation | \(\log_{10} Q\) | Same equation, different bases: 0.0592 = (RT/F) × ln 10 |
| "Cell is dead" = no reactants left | "Cell is dead" = at equilibrium | At equilibrium \(Q = K\) and \(E = 0\), but both reactants and products remain |

## Quick Review

1. A cell has \(E^\circ_{\text{cell}} = +1.10\ \text{V}\) and \(n = 2\). What is \(\Delta G^\circ\), and is the reaction spontaneous?
2. Estimate \(K\) for a reaction with \(E^\circ = +0.30\ \text{V}\) and \(n = 2\) at 298 K.
3. If you double every coefficient in a cell reaction, what happens to \(E^\circ\), \(n\), and \(\Delta G^\circ\)?
4. Why does a battery's voltage drop as it discharges, even though \(E^\circ\) is constant?
5. A copper concentration cell has \([\text{Cu}^{2+}] = 1.0\ \text{M}\) in one compartment and 0.0010 M in the other. Which side is the cathode, and what is \(E\) at 298 K?

<details>
<summary>Show answers</summary>

1. \(\Delta G^\circ = -(2)(96{,}485)(1.10) = -2.12 \times 10^5\ \text{J} = -212\ \text{kJ}\). Negative \(\Delta G^\circ\) means spontaneous.
2. \(\log_{10}K = \frac{(2)(0.30)}{0.0592} \approx 10.1\), so \(K \approx 1 \times 10^{10}\) — strongly product-favored.
3. \(E^\circ\) is unchanged (intensive); \(n\) doubles; \(\Delta G^\circ\) doubles.
4. Discharging builds up products and depletes reactants, so \(Q\) increases and \(E = E^\circ - \frac{0.0592}{n}\log Q\) falls toward zero.
5. The 1.0 M side is the cathode (reduction of Cu²⁺). \(E = \frac{0.0592}{2}\log_{10}\left(\frac{1.0}{0.0010}\right) = 0.0296 \times 3.0 = 0.089\ \text{V}\).

</details>

## Related Topics

- Previous: [Electrode and Cell Potentials](03-electrode-and-cell-potentials.md)
- Next: [Batteries and Fuel Cells](05-batteries-and-fuel-cells.md)
- Related: [Review of Redox Chemistry](01-review-of-redox-chemistry.md) · [Galvanic Cells](02-galvanic-cells.md) · [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
