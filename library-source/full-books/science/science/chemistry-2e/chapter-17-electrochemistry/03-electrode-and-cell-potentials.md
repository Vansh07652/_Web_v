---
title: "Electrode and Cell Potentials"
subject: "Science"
book: "Chemistry 2e"
chapter: "17: Electrochemistry"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "electrode-and-cell-potentials"
  - "science"
status: "complete"
---

# Electrode and Cell Potentials

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 17: Electrochemistry](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Every galvanic cell produces a measurable **cell potential** (voltage) — the "push" that drives electrons through the external circuit. That voltage comes from the difference in the tendencies of the two half-reactions to gain electrons. Each half-reaction has a characteristic **electrode potential**, and the cell potential is the difference between the two electrode potentials.

Because an individual half-reaction's potential cannot be measured in isolation, chemists defined a reference: the **standard hydrogen electrode (SHE)**, assigned a potential of exactly 0.00 V. Every other half-reaction is measured against it under standard conditions (1 M concentrations for solutions, 1 atm for gases, usually 25 °C), producing a table of **standard reduction potentials**, \(E^\circ\). With that table, the potential of any cell — and therefore whether it is spontaneous — can be computed from

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}
\]

A positive \(E^\circ_{\text{cell}}\) means the reaction is spontaneous as written; a negative value means the reverse is favored. This topic explains the table, how to read it, and how to use it to predict cell voltage and spontaneity — the quantitative heart of electrochemistry.

## Why This Matters

- **Quantitative prediction:** Instead of building a cell to see if it works, you can compute its voltage and spontaneity from a table in minutes.
- **Comparing oxidizing/reducing strength:** The table ranks species: the most positive reduction potentials are the strongest oxidizing agents; the most negative are the strongest reducing agents.
- **Battery design:** Engineers select electrode pairs with large, opposite potentials to maximize voltage (e.g., lithium–ion cells exploit lithium's very negative potential).
- **Corrosion and protection:** Knowing potentials explains why one metal corrodes preferentially when in contact with another (galvanic corrosion) and why sacrificial anodes protect steel.
- **Biological and environmental systems:** Redox potentials govern electron-transfer chains in respiration and photosynthesis, and drive the chemistry of groundwater, soils, and wastewater treatment.
- **Exams:** Expect to compute \(E^\circ_{\text{cell}}\), identify the stronger oxidizing/reducing agent, and decide spontaneity from the sign of \(E^\circ_{\text{cell}}\).

## Core Concepts

### Electrode potential: what it measures

An **electrode potential** measures the tendency of a half-reaction to occur as a reduction (gain of electrons) relative to the SHE. Half-reactions are always tabulated as **reductions**:

\[
\text{Ox} + ne^- \rightarrow \text{Red}
\]

A more positive \(E^\circ\) means the oxidized form is a stronger **oxidizing agent** (it wants electrons more). A more negative \(E^\circ\) means the reduced form is a stronger **reducing agent** (it wants to give electrons away).

### The standard hydrogen electrode

The SHE consists of \(\text{H}_2\) gas (1 atm) bubbling over a platinum electrode in 1 M \(\text{H}^+\) solution:

\[
2\text{H}^+(aq, 1\ \text{M}) + 2e^- \rightarrow \text{H}_2(g, 1\ \text{atm}) \qquad E^\circ = 0.00\ \text{V}
\]

Platinum is an inert conductor; it does not react. By convention, this half-reaction defines the zero of the potential scale. All tabulated \(E^\circ\) values are measured against it under standard conditions: 1 M solutions, 1 atm gases, 25 °C.

### Reading the table of standard reduction potentials

- All values are written as reductions. When a half-reaction is reversed (used as oxidation), the sign of \(E^\circ\) flips, but the **magnitude does not change** — and it never gets multiplied by a stoichiometric coefficient, because potential is an intensive property.
- Example entries: \(\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}\), \(E^\circ = +0.34\ \text{V}\); \(\text{Zn}^{2+} + 2e^- \rightarrow \text{Zn}\), \(E^\circ = -0.76\ \text{V}\).

### Computing the cell potential

For a cell made of two half-cells, with the reduction written for the cathode and oxidation for the anode:

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}
\]

Using tabulated reduction potentials for both, the subtraction automatically handles the sign flip for the anode. A positive result means the reaction is spontaneous as written; negative means the reverse reaction is spontaneous.

### Potential, spontaneity, and free energy

The cell potential connects directly to free energy (detailed in the next topic):

\[
\Delta G^\circ = -nFE^\circ_{\text{cell}}
\]

where \(n\) is the number of moles of electrons transferred per mole of reaction and \(F\) is the Faraday constant, \(F = 96,485\ \text{C/mol}\ e^-\). A positive \(E^\circ_{\text{cell}}\) gives a negative \(\Delta G^\circ\) — spontaneous. This is why a battery's voltage and its thermodynamic favorability are the same fact viewed twice.

## ELI-10: Explain Like I'm 10

> Think of each half-reaction as a hill with a height. The standard hydrogen electrode is the "sea level" hill, set to zero. Every other reaction gets a height measured from sea level — some want electrons a lot (tall hills), some barely at all (valleys). The cell's voltage is just the difference in height between the two hills. If the downhill direction matches the way the reaction is written, the cell runs by itself.

## High-Yield Points

- Standard conditions: 1 M solutions, 1 atm gases, 25 °C; SHE defines \(E^\circ = 0.00\ \text{V}\).
- Half-reactions are tabulated as reductions; reversing a half-reaction flips the sign of \(E^\circ\) but not its magnitude.
- \(E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}\); positive = spontaneous, negative = nonspontaneous (reverse favored).
- More positive \(E^\circ\) = stronger oxidizing agent; more negative \(E^\circ\) = stronger reducing agent.
- \(E^\circ\) is intensive: never multiply it by stoichiometric coefficients when balancing half-reactions.
- \(\Delta G^\circ = -nFE^\circ_{\text{cell}}\) links voltage to free energy; \(F = 96,485\ \text{C/mol}\ e^-\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| electrode potential | The tendency of a half-reaction to gain electrons, measured against the SHE. | Quantifies each half-reaction's "electron hunger." |
| standard reduction potential, \(E^\circ\) | Electrode potential measured under standard conditions, with the half-reaction written as a reduction. | The tabulated data used to compute cell voltages. |
| standard hydrogen electrode (SHE) | Reference electrode: \(2\text{H}^+ + 2e^- \rightarrow \text{H}_2\), assigned \(E^\circ = 0.00\ \text{V}\). | The zero point of the potential scale. |
| cell potential, \(E^\circ_{\text{cell}}\) | Difference between cathode and anode reduction potentials. | Its sign predicts spontaneity; its magnitude predicts voltage. |
| Faraday constant, \(F\) | Charge of one mole of electrons, \(96,485\ \text{C/mol}\). | Converts between electrical charge and moles of electrons in \(\Delta G^\circ = -nFE^\circ\). |
| oxidizing agent strength | Ranked by \(E^\circ\): larger (more positive) \(E^\circ\) = stronger oxidizer. | Lets you predict which species will oxidize another. |

## How It Works / Step-by-Step Process

1. Write both half-reactions as reductions and look up their \(E^\circ\) values.
2. Identify which half-reaction will be the cathode (the one with the more positive \(E^\circ\), i.e., the stronger oxidizing agent) and which the anode.
3. Compute \(E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}\).
4. If positive, the cell reaction as written is spontaneous; if negative, the reverse is spontaneous (swap anode/cathode).
5. Balance the electrons if you need the full reaction — but never rescale the \(E^\circ\) values.
6. Optionally convert to free energy with \(\Delta G^\circ = -nFE^\circ_{\text{cell}}\).

## Worked Examples

### Example 1: The Daniell cell potential

For the cell \(\text{Zn}(s) \mid \text{Zn}^{2+}(aq) \mid\mid \text{Cu}^{2+}(aq) \mid \text{Cu}(s)\), look up \(E^\circ(\text{Cu}^{2+}/\text{Cu}) = +0.34\ \text{V}\) and \(E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0.76\ \text{V}\).

**Formula:**

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}
\]

**Substitution** (Cu²⁺ is the cathode since it has the more positive potential):

\[
E^\circ_{\text{cell}} = (+0.34\ \text{V}) - (-0.76\ \text{V}) = +1.10\ \text{V}
\]

Positive \(E^\circ_{\text{cell}}\) confirms the spontaneous direction: zinc is oxidized and copper(II) is reduced. The 1.10 V matches the measured voltage of a standard Daniell cell.

### Example 2: Predicting spontaneity from the table

Will \(\text{Ni}^{2+}\) oxidize metallic Al? Use \(E^\circ(\text{Ni}^{2+}/\text{Ni}) = -0.26\ \text{V}\) and \(E^\circ(\text{Al}^{3+}/\text{Al}) = -1.66\ \text{V}\).

If \(\text{Ni}^{2+}\) is reduced (cathode) and Al oxidized (anode):

\[
E^\circ_{\text{cell}} = E^\circ(\text{Ni}^{2+}/\text{Ni}) - E^\circ(\text{Al}^{3+}/\text{Al}) = (-0.26\ \text{V}) - (-1.66\ \text{V}) = +1.40\ \text{V}
\]

Positive — the reaction is spontaneous: \(\text{Ni}^{2+}(aq) + \text{Al}(s) \rightarrow \text{Ni}(s) + \text{Al}^{3+}(aq)\) proceeds, plating nickel onto aluminum and dissolving the aluminum. Aluminum's very negative potential makes it a strong reducing agent.

### Example 3: Stronger oxidizing agent

Between \(\text{Cu}^{2+}\) and \(\text{Fe}^{2+}\), which is the stronger oxidizing agent? Compare \(E^\circ(\text{Cu}^{2+}/\text{Cu}) = +0.34\ \text{V}\) with \(E^\circ(\text{Fe}^{2+}/\text{Fe}) = -0.44\ \text{V}\). The more positive potential belongs to \(\text{Cu}^{2+}/\text{Cu}\), so \(\text{Cu}^{2+}\) is the stronger oxidizing agent: it will accept electrons from anything Fe²⁺ could donate, and can even oxidize solid Fe. This ranking is exactly how you decide which of two species wins electrons in a spontaneous reaction.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| \(E^\circ_{\text{cell}}\) sign | Spontaneity of any direction | The sign applies to the reaction as written: positive = forward spontaneous, negative = reverse spontaneous. |
| Multiplying \(E^\circ\) by coefficients | Rescaling cell potential | \(E^\circ\) is intensive — doubling a half-reaction does not double its potential. |
| More negative \(E^\circ\) | "Stronger oxidizing agent" | More negative = stronger *reducing* agent; more positive = stronger oxidizing agent. |
| SHE potential | "Hydrogen is unreactive" | SHE is a defined reference (0.00 V), not a statement about hydrogen's chemistry. |
| \(E^\circ_{\text{cell}} = E^\circ_{\text{cat}} + E^\circ_{\text{an}}\) (both as written) | Subtraction formula | Using tabulated reduction values for both requires subtraction; adding applies only if the anode value is already sign-flipped. |

## Quick Review

1. What are the three standard conditions for tabulated \(E^\circ\) values, and what is the reference electrode?
2. Compute \(E^\circ_{\text{cell}}\) for \(\text{Fe}^{2+}/\text{Fe}\) (\(-0.44\ \text{V}\)) and \(\text{Ag}^+/\text{Ag}\) (\(+0.80\ \text{V}\)), and state whether the reaction is spontaneous.
3. Why is \(E^\circ\) not multiplied by stoichiometric coefficients when balancing half-reactions?
4. Which is the stronger reducing agent: Zn or Cu? Explain using potentials.
5. If \(E^\circ_{\text{cell}} = +1.10\ \text{V}\) and \(n = 2\), what is \(\Delta G^\circ\) for the Daniell cell?

<details>
<summary>Show answers</summary>

1. 1 M concentrations for dissolved species, 1 atm for gases, and 25 °C; the standard hydrogen electrode (SHE), \(E^\circ = 0.00\ \text{V}\).
2. \(E^\circ_{\text{cell}} = (+0.80) - (-0.44) = +1.24\ \text{V}\); positive, so \(\text{Ag}^+\) reduced and Fe oxidized is spontaneous.
3. Potential is an intensive property — it measures tendency per reaction, independent of how much material reacts; only the electron count (\(n\)) scales with stoichiometry.
4. Zn: its potential is more negative (\(-0.76\ \text{V}\) vs \(+0.34\ \text{V}\)), so Zn's reduced form more readily gives up electrons.
5. \(\Delta G^\circ = -nFE^\circ_{\text{cell}} = -(2)(96,485\ \text{C/mol})(1.10\ \text{V}) = -2.12 \times 10^5\ \text{J/mol} \approx -212\ \text{kJ/mol}\).

</details>

## Related Topics

- Previous: [Galvanic Cells](02-galvanic-cells.md)
- Next: [Potential, Free Energy, and Equilibrium](04-potential-free-energy-and-equilibrium.md)
- Related: [Review of Redox Chemistry](01-review-of-redox-chemistry.md)
- Related: [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
