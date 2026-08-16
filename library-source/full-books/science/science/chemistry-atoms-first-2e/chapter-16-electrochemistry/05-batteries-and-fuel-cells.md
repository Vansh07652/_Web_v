---
title: "Batteries and Fuel Cells"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "16: Electrochemistry"
topic_number: "5"
source: "chemistry-atoms-first-2e.md"
tags:
  - "batteries-and-fuel-cells"
  - "science"
status: "complete"
---

# Batteries and Fuel Cells

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 16: Electrochemistry](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

A **battery** is one or more galvanic cells packaged for practical use — the anode/cathode/salt-bridge chemistry of Topic 2 in a container. Batteries fall into two classes: **primary batteries**, used once and discarded (alkaline cells, the classic zinc–carbon cell), and **secondary batteries**, recharged by reversing the reaction with an external power source (lead–acid, nickel–cadmium, lithium-ion). A **fuel cell** is different: an *open* system that continuously consumes fuel (often H₂) and oxidant (O₂ from air). This topic surveys the chemistry inside the devices you use daily.

## Why This Matters

Energy storage is one of the defining technologies of the 21st century. Portable electronics, electric vehicles, grid storage, and implantable devices depend on batteries, and their chemistry — not just packaging — sets voltage, energy density, lifetime, and safety. Lead–acid batteries start virtually every gasoline car; lithium-ion batteries power phones, laptops, and EVs; fuel cells power buses, spacecraft, and backup systems with water as their only direct emission. Understanding why batteries die, why some recharge, and how fuel cells differ is practical, exam-ready knowledge.

## Core Concepts

### Primary vs. secondary batteries

A **primary battery** uses a reaction that is difficult or impractical to reverse, so it is used once and discarded — for example, a zinc–carbon (Leclanché) dry cell or an alkaline cell. A **secondary battery** is rechargeable: an external voltage drives the reaction *backward*, regenerating the reactants. Rechargeability is a property of the specific chemistry, not the packaging. Note the terminology: a **cell** is one electrochemical unit; a **battery** is one or more cells wired together — the 12 V car battery is six 2 V cells in series.

### The alkaline cell

The standard disposable is the alkaline cell: a zinc anode and manganese dioxide cathode in a potassium hydroxide (KOH) paste. The anode reaction is Zn(s) + 2OH⁻(aq) → ZnO(s) + H₂O(l) + 2e⁻; the cathode reduces MnO₂. Compared with the older zinc–carbon cell, alkaline cells hold a steadier voltage, last longer under heavy loads, and have better shelf life. Both are single-use: recharging them can generate gas and leak.

### The lead–acid battery (a secondary battery)

The lead–acid battery, invented in 1859, still starts most cars: a lead anode and lead dioxide cathode in sulfuric acid, both converting to PbSO₄ on discharge while acid is consumed. Because sulfate moves between electrodes and solution, the acid's specific gravity shows state of charge. The chemistry is heavy (lead), but it delivers the surge currents a starter motor needs and is inexpensive and rugged.

### Lithium-ion batteries

Lithium-ion (Li-ion) cells power portable electronics and EVs because lithium is the lightest metal with a very negative reduction potential, giving high voltage (about 3.6–3.7 V per cell) and high energy per mass. Instead of dissolving, Li⁺ ions **intercalate** — slip between the layers of a graphite anode and a metal-oxide cathode — while electrons travel through the external circuit; charging drives Li⁺ back. Li-ion chemistry demands careful engineering: overcharging or damage can trigger thermal runaway, so commercial cells carry protection circuits and should be disposed of per manufacturer and local regulations.

### Fuel cells

A **fuel cell** converts chemical energy to electricity continuously, as long as fuel and oxidant are supplied. In the most studied design — the hydrogen–oxygen polymer electrolyte membrane (PEM) fuel cell — H₂ is oxidized at the anode:

\[
2\text{H}_2(g) \rightarrow 4\text{H}^+(aq) + 4e^-
\]

At the cathode, O₂ is reduced by protons migrating through the membrane:

\[
\text{O}_2(g) + 4\text{H}^+(aq) + 4e^- \rightarrow 2\text{H}_2\text{O}(l)
\]

The overall reaction is simply 2H₂ + O₂ → 2H₂O — hydrogen combustion, but with the electrons routed through a circuit, so chemical energy becomes electricity directly rather than via a heat engine. In practice, overpotentials and internal resistance lower the delivered voltage. The only direct product is water, which makes fuel cells attractive for zero-emission transport.

### Practical limits

Real cells deliver less than their theoretical E°cell and ΔG° because of **overpotential** (activation energy needed to drive electrode reactions at useful rates), internal resistance (ohmic losses), and concentration effects. These are engineering realities, not contradictions — the theory sets the ceiling.

## ELI-10: Explain Like I'm 10

> A battery is a box of "give-and-take" chemistry: one side gives electrons, the other grabs them, and the electrons do work on the way. Some boxes are single-use, like a juice box you throw away; rechargeable ones are cups you can refill by pouring energy back in. A fuel cell is different — it keeps making electricity as long as you keep feeding it hydrogen and air.

## High-Yield Points

- Primary batteries (alkaline, zinc–carbon) are single-use; secondary batteries (lead–acid, Li-ion) are rechargeable by reversing the reaction.
- A 12 V car battery = six 2 V lead–acid cells in series; Li-ion cells give ~3.6–3.7 V each.
- Lead–acid discharge: Pb and PbO₂ both become PbSO₄, consuming H₂SO₄ — acid concentration shows state of charge.
- Fuel cells are open systems: continuous fuel + oxidant → electricity; the H₂/O₂ fuel cell has E°cell = 1.23 V and produces water.
- Real cells lose voltage to overpotential, internal resistance, and concentration effects; E° is the ceiling.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| primary battery | A battery whose reactions are not practically reversible; used once. | Explains why disposables die and cannot be recharged. |
| secondary battery | A rechargeable battery; an external voltage reverses the discharge reaction. | The chemistry behind every rechargeable device. |
| intercalation | Ions sliding into and out of a host structure without breaking it apart. | The reversible mechanism behind Li-ion rechargeability. |
| fuel cell | An open device that converts a continuous fuel supply into electricity. | Zero-emission power for vehicles and backups. |
| state of charge | How much usable energy remains in a battery. | For lead–acid cells, read from the acid's specific gravity. |

## How It Works / Step-by-Step Process

1. Identify the battery type: primary (single-use) or secondary (rechargeable).
2. Write the anode (oxidation) and cathode (reduction) half-reactions plus the overall reaction.
3. Look up standard reduction potentials, compute E°cell (Topic 3), and use ΔG° = −nFE° for the energy budget (Topic 4).
4. For a multi-cell battery, multiply by the number of cells in series to get the total voltage.
5. For a fuel cell, confirm fuel (H₂) and oxidant (O₂) are supplied continuously and water is removed.

## Example: Voltage and Energy Calculations for Real Devices

### Example 1: The lead–acid cell

Each cell of a car battery has the anode reaction (oxidation of lead) and the cathode reaction (reduction of PbO₂):

\[
\text{Pb}(s) + \text{HSO}_4^-(aq) \rightarrow \text{PbSO}_4(s) + \text{H}^+(aq) + 2e^- \qquad E^\circ_{\text{anode}} = -0.36\ \text{V}
\]

\[
\text{PbO}_2(s) + \text{HSO}_4^-(aq) + 3\text{H}^+(aq) + 2e^- \rightarrow \text{PbSO}_4(s) + 2\text{H}_2\text{O}(l) \qquad E^\circ_{\text{cathode}} = +1.69\ \text{V}
\]

Apply the cell-potential formula before substituting:

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = +1.69\ \text{V} - (-0.36\ \text{V}) = +2.05\ \text{V}
\]

So each cell gives about 2.0 V. A "12-volt" battery wires six cells in series:

\[
V_{\text{battery}} = 6 \times 2.05\ \text{V} = 12.3\ \text{V} \approx 12\ \text{V}
\]

The free energy per cell, with n = 2, is ΔG° = −nFE° = −(2)(96,485 C/mol)(2.05 V) ≈ −3.96 × 10⁵ J/mol ≈ **−396 kJ per mole of reaction** — a large budget, one reason lead–acid still starts engines.

### Example 2: The hydrogen–oxygen fuel cell

For the fuel-cell half-reactions: anode H₂/H⁺ (E° = 0.00 V), cathode O₂/H₂O (E° = +1.23 V):

\[
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = +1.23\ \text{V} - 0.00\ \text{V} = +1.23\ \text{V}
\]

Each O₂ molecule consumes 4 electrons, so n = 4. The free energy:

\[
\Delta G^\circ = -nFE^\circ = -(4)(96,485\ \frac{\text{C}}{\text{mol}})(1.23\ \text{V}) = -4.75 \times 10^5\ \frac{\text{J}}{\text{mol}} \approx -475\ \frac{\text{kJ}}{\text{mol O}_2}
\]

Per mole of H₂ (two per O₂), that is about −237 kJ/mol, matching the standard free energy of formation of liquid water. The reaction is strongly spontaneous, and the device turns that driving force directly into electricity, with water as the only product.

### Example 3: Choosing a battery for the job (scenario)

A flashlight needs a long, steady voltage with no recharging: an **alkaline primary cell** (about 1.5 V) is cheap with a long shelf life. An electric vehicle needs high energy per kilogram and repeated recharging: **lithium-ion** wins on energy density and cycle life. A car engine needs a brief, enormous current surge: **lead–acid** delivers high current from robust, cheap chemistry, though heavy. Each application picks the chemistry that best trades voltage, energy, power, cost, weight, rechargeability.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Battery | Cell | A battery is one or more cells connected; a single cell is one anode/cathode unit. |
| Primary battery | Secondary battery | Primary cells are single-use (reactions not practically reversible); secondary cells recharge by reversing the reaction. |
| Fuel cell | Battery | A fuel cell needs continuous fuel (open system); a battery stores reactants internally (closed system). |
| Cell voltage | Battery capacity | Voltage is potential per electron (set by the chemistry); capacity is total charge stored (set by the amount of material). |

## Quick Review

1. Why is an alkaline cell called "primary," and a lead–acid cell "secondary"?
2. What is the overall reaction and standard cell potential of a hydrogen–oxygen fuel cell?
3. What is intercalation, and why is it essential to Li-ion rechargeability?
4. Why does the acid concentration in a lead–acid battery fall as it discharges?

<details>
<summary>Show answers</summary>

1. Primary: the discharge reaction is not practically reversible, so the battery is used once. Secondary: an external voltage reverses the reaction, so the battery is rechargeable.
2. 2H₂ + O₂ → 2H₂O; E°cell = 1.23 V − 0.00 V = 1.23 V.
3. Intercalation is the reversible sliding of Li⁺ ions into and out of the electrode host structures — the structural reversibility is what makes recharging possible.
4. Discharge converts both Pb and PbO₂ to PbSO₄, consuming H₂SO₄ from the electrolyte; charging reverses this and regenerates the acid.

</details>

## Related Topics

- Previous: [Potential, Free Energy, and Equilibrium](04-potential-free-energy-and-equilibrium.md)
- Next: [Corrosion](06-corrosion.md)
- Related: [Electrolysis](07-electrolysis.md), [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
