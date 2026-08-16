---
title: "Galvanic Cells"
subject: "Science"
book: "Chemistry 2e"
chapter: "17: Electrochemistry"
topic_number: "2"
source: "chemistry-2e.md"
tags:
  - "galvanic-cells"
  - "science"
status: "complete"
---

# Galvanic Cells

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 17: Electrochemistry](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

A **galvanic (voltaic) cell** converts the chemical energy of a spontaneous redox reaction into electrical energy. The trick is to physically separate the oxidation and reduction half-reactions into two compartments, so electrons released by oxidation cannot reach the reduction site directly — they must travel through an external wire. That flow of electrons *is* electric current, and it can power a device.

The classic example is the **Daniell cell**: zinc metal in a \(\text{Zn}^{2+}\) solution connected to copper metal in a \(\text{Cu}^{2+}\) solution. Left together, Zn would directly reduce \(\text{Cu}^{2+}\), dumping electrons into the solution as heat. Separated by a salt bridge and connected by a wire, the same reaction produces a usable current. This topic covers the anatomy of a galvanic cell — electrodes, half-cells, salt bridge, external circuit — and the notation chemists use to describe cells compactly.

## Why This Matters

- **Batteries are galvanic cells.** Every battery, from a AA cell to a car battery to a lithium-ion pack, packages one or more galvanic cells; knowing the parts (anode, cathode, electrolyte, separator) explains how they work and why they fail.
- **Biological electricity:** Nerve impulses and muscle contraction run on ion gradients that behave like tiny galvanic cells; medical diagnostics (ECG, EEG) detect the resulting signals.
- **Corrosion and protection:** Rusting is a galvanic process; knowing which metal is the anode explains why zinc protects steel (galvanization) and why sacrificial anodes protect ships and pipelines.
- **Fuel cells and clean energy:** Hydrogen fuel cells convert fuel chemical energy directly to electricity — a cornerstone of emerging energy technology.
- **Exams:** Expect to identify anode/cathode, direction of electron flow, the role of the salt bridge, and to write cell notation from half-reactions.

## Core Concepts

### The basic architecture

A galvanic cell has two **half-cells**. Each contains an **electrode** (a conductor, often a metal) immersed in an **electrolyte** (a solution of ions). The two electrodes are connected by an external wire (through which electrons flow) and the two solutions are connected by a **salt bridge** (through which ions flow to keep charge balanced).

- **Anode:** the electrode where **oxidation** occurs; in a galvanic cell it is the **negative** terminal. Electrons leave the cell here.
- **Cathode:** the electrode where **reduction** occurs; in a galvanic cell it is the **positive** terminal. Electrons enter the cell here.

For the Daniell cell:

\[
\text{Anode (oxidation): } \text{Zn}(s) \rightarrow \text{Zn}^{2+}(aq) + 2e^-
\]

\[
\text{Cathode (reduction): } \text{Cu}^{2+}(aq) + 2e^- \rightarrow \text{Cu}(s)
\]

Electrons flow from the anode (Zn) through the external wire to the cathode (Cu). Conventional current, by historical convention, flows the opposite way (positive to negative).

### The salt bridge: why it's essential

If electrons leave the anode compartment without ions moving, the anode solution would build up positive charge (\(\text{Zn}^{2+}\)), and the cathode solution would build up negative charge as \(\text{Cu}^{2+}\) is consumed — stopping the current almost immediately. The **salt bridge** — a tube of electrolyte (often \(\text{KNO}_3\) or \(\text{KCl}\)) — fixes this:

- **Anions** from the bridge migrate toward the **anode** compartment, neutralizing the accumulating \(\text{Zn}^{2+}\).
- **Cations** from the bridge migrate toward the **cathode** compartment, replacing the \(\text{Cu}^{2+}\) being consumed.

The salt bridge completes the circuit internally and maintains electrical neutrality, allowing a steady current.

### Cell notation (line notation)

Chemists abbreviate a cell with **line notation**:

\[
\text{Zn}(s) \mid \text{Zn}^{2+}(aq) \mid\mid \text{Cu}^{2+}(aq) \mid \text{Cu}(s)
\]

- A single vertical line \(\mid\) separates phases within a half-cell (electrode | solution).
- A double vertical line \(\mid\mid\) represents the salt bridge.
- The **anode is written on the left**, the cathode on the right.
- Concentrations and pressures can be appended, e.g., \(\text{Cu}^{2+}(aq, 1.0\ \text{M})\).

### Electrodes: active and inert

An **active electrode** participates in the redox reaction (Zn and Cu in the Daniell cell: Zn dissolves as it oxidizes; Cu²⁺ plates out as Cu metal). An **inert electrode** (platinum, graphite) merely conducts electrons for half-reactions involving gases or ions in solution, such as \(\text{Fe}^{3+} + e^- \rightarrow \text{Fe}^{2+}\) or the hydrogen electrode.

### What happens at each electrode

At the anode, metal atoms lose electrons and enter solution (the electrode loses mass); at the cathode, ions gain electrons and deposit as metal (the electrode gains mass). Observing mass changes is a classic way to identify which electrode is which in an unknown cell.

## ELI-10: Explain Like I'm 10

> A galvanic cell is like a water wheel powered by a chemical reaction. One bucket (the anode) fills with electrons and sends them down a pipe (the wire) to turn the wheel; the other bucket (the cathode) catches them. The salt bridge is like a second pipe that lets ions move so neither bucket overflows. As long as the reaction wants to happen, the wheel keeps turning.

## High-Yield Points

- Galvanic cells convert spontaneous redox energy into electrical energy; anode = oxidation = negative terminal, cathode = reduction = positive terminal.
- Electrons flow anode → cathode through the external wire; conventional current flows the opposite direction.
- The salt bridge maintains charge neutrality; anions move toward the anode compartment, cations toward the cathode compartment.
- Line notation: anode | anode solution || cathode solution | cathode; single lines are phase boundaries, double line is the salt bridge.
- Anode loses mass (oxidation dissolves metal); cathode gains mass (reduction deposits metal).
- Inert electrodes (Pt, graphite) are used when the redox species are gases or ions in solution.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| galvanic (voltaic) cell | A device that uses a spontaneous redox reaction to produce electrical current. | The fundamental unit of every battery and fuel cell. |
| anode | Electrode where oxidation occurs (negative terminal in a galvanic cell). | Source of electrons; the site of mass loss. |
| cathode | Electrode where reduction occurs (positive terminal in a galvanic cell). | Sink for electrons; the site of mass gain. |
| salt bridge | Ion-conducting connection between half-cells that maintains charge balance. | Keeps the current flowing by preventing charge buildup. |
| half-cell | One electrode plus its electrolyte solution, where a single half-reaction occurs. | The building block of cells; two half-cells make a full cell. |
| cell notation | Shorthand (e.g., \(\text{Zn} \mid \text{Zn}^{2+} \mid\mid \text{Cu}^{2+} \mid \text{Cu}\)) describing a cell. | Compact, unambiguous way to communicate cell construction. |
| inert electrode | A non-reacting conductor (Pt, graphite) used for gas/ion half-reactions. | Lets redox occur without the electrode itself reacting. |

## How It Works / Step-by-Step Process

1. Write the two half-reactions; identify oxidation (anode) and reduction (cathode).
2. Build the cell: place each electrode in its electrolyte; connect electrodes with a wire (and a voltmeter or load); connect the solutions with a salt bridge.
3. Trace the electron path: electrons leave the anode, travel the wire to the cathode.
4. Trace the ion path: anions move toward the anode compartment, cations toward the cathode compartment, through the salt bridge.
5. Write the cell in line notation (anode on the left) and predict mass changes at each electrode.

## Worked Examples

### Example 1: The Daniell cell, step by step

Consider \(\text{Zn}(s) \mid \text{Zn}^{2+}(aq) \mid\mid \text{Cu}^{2+}(aq) \mid \text{Cu}(s)\).

- Anode (left): \(\text{Zn}(s) \rightarrow \text{Zn}^{2+}(aq) + 2e^-\). Zinc is oxidized; the Zn electrode dissolves and loses mass.
- Cathode (right): \(\text{Cu}^{2+}(aq) + 2e^- \rightarrow \text{Cu}(s)\). Copper ions are reduced; Cu metal plates out and the electrode gains mass.
- Electron flow: Zn electrode → wire → Cu electrode.
- Salt bridge: \(\text{NO}_3^-\) (or \(\text{Cl}^-\)) anions drift toward the Zn compartment; \(\text{K}^+\) cations drift toward the Cu compartment.
- Overall: \(\text{Zn}(s) + \text{Cu}^{2+}(aq) \rightarrow \text{Zn}^{2+}(aq) + \text{Cu}(s)\).

If the cell is left running, the Zn electrode eventually dissolves completely and the \(\text{Cu}^{2+}\) solution becomes depleted — the battery is "dead" when the reaction reaches equilibrium or a reactant runs out.

### Example 2: Building an unknown cell from half-reactions

You are given \(\text{Ag}^+ + e^- \rightarrow \text{Ag}\) (reduction) and \(\text{Fe}^{2+} \rightarrow \text{Fe}^{3+} + e^-\) (oxidation).

- Anode: \(\text{Fe}^{2+} \rightarrow \text{Fe}^{3+} + e^-\) (oxidation; iron is the reducing agent).
- Cathode: \(\text{Ag}^+ + e^- \rightarrow \text{Ag}\) (reduction; silver ion is the oxidizing agent).
- Balanced overall: \(\text{Ag}^+ + \text{Fe}^{2+} \rightarrow \text{Ag} + \text{Fe}^{3+}\).

Cell notation:

\[
\text{Pt}(s) \mid \text{Fe}^{2+}(aq), \text{Fe}^{3+}(aq) \mid\mid \text{Ag}^+(aq) \mid \text{Ag}(s)
\]

Both \(\text{Fe}^{2+}\) and \(\text{Fe}^{3+}\) are in solution, so a platinum inert electrode is required for that half-cell. Electrons flow from the Pt (anode) through the wire to the Ag electrode (cathode), where silver plates out and the electrode gains mass.

### Example 3: Predicting electrode mass change

Which electrode gains mass in a galvanic cell made from \(\text{Ni}^{2+}/\text{Ni}\) and \(\text{Al}^{3+}/\text{Al}\) half-cells?

Oxidation (anode): \(\text{Al} \rightarrow \text{Al}^{3+} + 3e^-\) — aluminum dissolves, anode loses mass.

Reduction (cathode): \(\text{Ni}^{2+} + 2e^- \rightarrow \text{Ni}\) — nickel plates out, cathode gains mass.

The Ni electrode gains mass. Aluminum, being the more reactive metal, is oxidized and serves as the sacrificial anode — the same principle behind sacrificial anodes that protect steel hulls.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Anode is "positive" | Anode is positive in galvanic cells | In galvanic cells the anode is negative; in electrolytic cells (forced reactions) the anode is positive. Sign depends on cell type. |
| Electrons flow through the salt bridge | Ions flow through the salt bridge | Electrons travel only through the external wire; the salt bridge carries ions. |
| Cathode gains mass always | Cathode gains mass only when plating a metal | If the cathode half-reaction produces a gas or ion, no solid deposit forms. |
| "Anode" means reduction | "Anode" means oxidation | Anode = oxidation site (anOx); cathode = reduction site (reD Cat) — mnemonics: "an ox" and "red cat." |
| Current direction | Electron flow direction | Conventional current is opposite electron flow (defined before electrons were discovered). |

## Quick Review

1. In a galvanic cell, which electrode is the negative terminal, and what happens there?
2. What would happen if the salt bridge were removed from a working Daniell cell?
3. Write the line notation for a cell with \(\text{Mg}/\text{Mg}^{2+}\) and \(\text{Ag}^+/\text{Ag}\) half-cells (anode first).
4. Which electrode gains mass when a copper–silver cell operates?
5. Why is an inert electrode needed for a half-cell containing only \(\text{Fe}^{3+}/\text{Fe}^{2+}\)?

<details>
<summary>Show answers</summary>

1. The anode is the negative terminal; oxidation occurs there (metal atoms lose electrons and may dissolve, so the electrode can lose mass).
2. Charge would build up in both compartments (excess \(\text{Zn}^{2+}\) at the anode, depletion of cations at the cathode), and the current would quickly stop because neutrality cannot be maintained.
3. \(\text{Mg}(s) \mid \text{Mg}^{2+}(aq) \mid\mid \text{Ag}^+(aq) \mid \text{Ag}(s)\).
4. The silver (cathode) electrode gains mass as \(\text{Ag}^+\) is reduced and plates out; the copper electrode (anode) dissolves.
5. \(\text{Fe}^{3+}\) and \(\text{Fe}^{2+}\) are both dissolved ions; a metal like Pt or graphite provides a surface for the electron transfer without reacting itself.

</details>

## Related Topics

- Previous: [Review of Redox Chemistry](01-review-of-redox-chemistry.md)
- Next: [Electrode and Cell Potentials](03-electrode-and-cell-potentials.md)
- Related: [Batteries and Fuel Cells](05-batteries-and-fuel-cells.md)
- Related: [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
