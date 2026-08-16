---
title: "Galvanic Cells"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "16: Electrochemistry"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "galvanic-cells"
  - "science"
status: "complete"
---

# Galvanic Cells

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 16: Electrochemistry](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

A **galvanic cell** (also called a *voltaic cell*) converts the energy of a spontaneous redox reaction directly into electrical energy. The trick is separation: instead of letting the oxidizing and reducing agents react in one container, the cell splits the reaction into two **half-cells** connected by a wire, so the electrons have no choice but to travel through the wire — and that moving charge *is* electric current. Alessandro Volta's 1800 "pile" of zinc and copper disks was the first practical battery, and every modern battery, from a pacemaker to an electric vehicle, is a galvanic cell or several wired together.

## Why This Matters

Galvanic cells are the physical embodiment of every battery you have used: they explain a battery's two metal contacts, its "plus" and "minus" ends, why it eventually dies, and why some batteries can be recharged. In medicine, galvanic cells power implantable devices and glucose sensors; in engineering, they protect pipelines from corrosion. Conceptually, this topic bridges the redox chemistry of Topic 1 and the measurable quantities — voltage, free energy, equilibrium — of Topics 3 and 4.

## Core Concepts

### Two half-cells, one reaction

A galvanic cell separates the oxidation and reduction halves of a redox reaction into different containers, each holding an **electrode** (a conductor, usually a metal rod) in solution. The electrode where **oxidation** occurs is the **anode**; where **reduction** occurs is the **cathode**. Because the electrodes are connected by an external wire, electrons released at the anode must travel through the wire to the cathode — that flow is the cell's current.

### Anode and cathode: the "minus" and "plus"

In a *galvanic* cell, the anode is the **negative** terminal and the cathode is the **positive** terminal. The signs describe the terminals' roles in the external circuit: electrons leave the cell at the anode (hence "negative") and return at the cathode. Remember **anode = oxidation = negative terminal** in a galvanic cell — but the signs flip in electrolytic cells (Topic 7).

### The salt bridge: keeping the circuit whole

A **salt bridge** (a gel-filled tube containing an inert electrolyte such as KNO₃) connects the two half-cell solutions. Its job is *ion transport*, not electron transport: as Zn²⁺ ions are produced at the anode, that solution would gain positive charge and repel further oxidation; as Cu²⁺ is consumed at the cathode, that solution would build up negative charge. The salt bridge lets **anions migrate toward the anode compartment** and **cations toward the cathode compartment**, keeping both solutions neutral. Without it, the cell runs for a moment and stops.

### The Daniell cell

The classic example is the **Daniell cell**: a zinc anode in ZnSO₄ solution and a copper cathode in CuSO₄ solution, joined by a salt bridge and a wire. The spontaneous reaction is:

\[
\text{Zn}(s) + \text{Cu}^{2+}(aq) \rightarrow \text{Zn}^{2+}(aq) + \text{Cu}(s)
\]

Zinc is oxidized at the anode, Zn(s) → Zn²⁺ + 2e⁻, and copper(II) is reduced at the cathode, Cu²⁺ + 2e⁻ → Cu(s). The standard cell potential is +1.10 V (Topic 3); the positive sign means the reaction is spontaneous, so the cell produces current on its own.

### Cell notation (line notation)

Chemists write cells in shorthand. The **cell notation** for the Daniell cell is:

\[
\text{Zn}(s) \mid \text{Zn}^{2+}(aq)\ (1\ \text{M}) \parallel \text{Cu}^{2+}(aq)\ (1\ \text{M}) \mid \text{Cu}(s)
\]

The **anode goes on the left** and the **cathode on the right**; a single vertical line | marks a phase boundary (electrode | solution); a double line ‖ marks the salt bridge; concentrations or pressures go in parentheses. If a half-reaction involves a gas or two ions with no solid metal (Fe³⁺/Fe²⁺, H⁺/H₂), an inert electrode such as platinum or graphite is written at that end.

## ELI-10: Explain Like I'm 10

> A galvanic cell is a machine that turns a "give-and-take" reaction into electricity. One metal gives electrons away and the other grabs them, but we make the electrons take a long path through a wire so we can catch them on the way. The salt bridge is a hallway that lets ions walk between the rooms so neither room gets too crowded with charge.

## High-Yield Points

- A galvanic cell converts a *spontaneous* redox reaction into electrical energy by separating the half-reactions.
- Oxidation happens at the **anode**; reduction happens at the **cathode**.
- In a galvanic cell the anode is the **negative** terminal and the cathode is the **positive** terminal.
- Electrons flow anode → cathode through the wire; conventional current flows the opposite way.
- The salt bridge carries **ions**, not electrons, and prevents charge buildup in either half-cell.
- Cell notation: anode | anode solution ‖ cathode solution | cathode; | = phase boundary, ‖ = salt bridge.
- A positive E°cell means the reaction is spontaneous, so a galvanic cell can be built; otherwise an electrolytic cell is needed (Topic 7).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| galvanic cell | A device that turns a spontaneous redox reaction into electric current using separated half-cells. | The basis of every battery; the core device of electrochemistry. |
| anode | The electrode where oxidation occurs; electrons leave here. | Tells you which half-reaction supplies the electrons. |
| cathode | The electrode where reduction occurs; electrons enter here. | Tells you which half-reaction consumes the electrons. |
| half-cell | One electrode plus its electrolyte solution, where one half-reaction occurs. | Separating half-cells forces electrons through the wire. |
| salt bridge | A connection filled with inert electrolyte that lets ions move between half-cells. | Keeps both solutions neutral so current can continue. |
| cell notation | Shorthand: anode | anode solution ‖ cathode solution | cathode. | Lets you read or write any cell at a glance. |

## How It Works / Step-by-Step Process

1. Write the overall spontaneous reaction and split it into half-reactions.
2. Identify the anode (oxidation) and cathode (reduction); choose matching electrodes and electrolytes.
3. Connect the electrodes with a wire (and a load) and join the solutions with a salt bridge.
4. Trace the flow: electrons anode → wire → cathode; anions toward the anode compartment, cations toward the cathode compartment.
5. Verify the reaction is spontaneous by computing E°cell (should be positive) — Topic 3.

## Example: Building and Tracing a Galvanic Cell

### Example 1: The Daniell cell, electron by electron

Consider Zn(s) | Zn²⁺(1 M) ‖ Cu²⁺(1 M) | Cu(s). The anode is zinc, where oxidation occurs:

\[
\text{Zn}(s) \rightarrow \text{Zn}^{2+}(aq) + 2e^-
\]

The cathode is copper, where reduction occurs:

\[
\text{Cu}^{2+}(aq) + 2e^- \rightarrow \text{Cu}(s)
\]

Each zinc atom releases 2 electrons and each Cu²⁺ accepts 2, so the halves already share electrons. Tracing the cell: electrons leave the zinc anode, travel through the wire (lighting a bulb), and enter the copper cathode, where Cu²⁺ ions grab them and plate out as copper metal. Meanwhile the salt bridge supplies NO₃⁻ toward the anode compartment and K⁺ toward the cathode compartment to balance charge. The cell runs until the zinc dissolves or the Cu²⁺ is used up.

### Example 2: Designing a cell from iron and silver

Suppose you want a galvanic cell from the Fe²⁺/Fe and Ag⁺/Ag couples. Which metal is the anode? The stronger reducing agent is oxidized: iron, whose potential (−0.44 V for Fe²⁺ + 2e⁻ → Fe) is more negative than silver's (+0.80 V for Ag⁺ + e⁻ → Ag). So the anode reaction is Fe(s) → Fe²⁺ + 2e⁻ and the cathode reaction is Ag⁺ + e⁻ → Ag(s). To balance electrons (2 per iron atom, 1 per silver ion):

\[
\text{Fe}(s) + 2\text{Ag}^+(aq) \rightarrow \text{Fe}^{2+}(aq) + 2\text{Ag}(s)
\]

The cell notation is Fe(s) | Fe²⁺(1 M) ‖ Ag⁺(1 M) | Ag(s), and E°cell = E°cathode − E°anode = 0.80 V − (−0.44 V) = **+1.24 V**, so the cell is spontaneous.

### Example 3: What happens without a salt bridge?

Imagine the Daniell cell with the salt bridge removed. The zinc half-reaction begins — Zn → Zn²⁺ + 2e⁻ — and electrons flow through the wire, so the bulb lights briefly. But the anode compartment gains Zn²⁺ while the cathode compartment loses Cu²⁺, and the charge buildup pulls the electrons back: the potential collapses and current stops almost immediately. Reinserting the salt bridge restores the cell — a working cell needs *both* an electron path (wire) and an ion path (salt bridge).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Anode sign in galvanic cells | Anode sign in electrolytic cells | In a galvanic cell the anode is negative and the cathode positive; in an electrolytic cell the signs are reversed (Topic 7). |
| Electron flow | Conventional current | Electrons flow anode → cathode; conventional current is defined the opposite way. |
| The salt bridge | A source of electrons | The salt bridge carries ions to balance charge; the redox reaction supplies the electrons. |
| Cations in the salt bridge | Anions in the salt bridge | Cations migrate toward the cathode compartment; anions toward the anode compartment. |

## Quick Review

1. In a galvanic cell, where does oxidation occur, and what sign is that terminal?
2. Write the cell notation for a cell with a nickel anode and a silver cathode (use 1 M solutions).
3. Which way do electrons flow through the external wire — from anode to cathode, or the reverse?
4. Why does the zinc electrode in a Daniell cell gradually dissolve?

<details>
<summary>Show answers</summary>

1. Oxidation occurs at the anode, which is the negative terminal of a galvanic cell.
2. Ni(s) | Ni²⁺(1 M) ‖ Ag⁺(1 M) | Ag(s). Nickel is the more active metal, so it is the anode on the left.
3. Electrons flow from anode to cathode through the external wire.
4. Zinc atoms lose electrons and enter solution as Zn²⁺, so the solid electrode dissolves over time.

</details>

## Related Topics

- Previous: [Review of Redox Chemistry](01-review-of-redox-chemistry.md)
- Next: [Electrode and Cell Potentials](03-electrode-and-cell-potentials.md)
- Related: [Potential, Free Energy, and Equilibrium](04-potential-free-energy-and-equilibrium.md), [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
