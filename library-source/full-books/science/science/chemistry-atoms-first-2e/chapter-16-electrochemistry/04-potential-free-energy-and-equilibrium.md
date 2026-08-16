---
title: "Potential, Free Energy, and Equilibrium"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "16: Electrochemistry"
topic_number: "4"
source: "chemistry-atoms-first-2e.md"
tags:
  - "potential-free-energy-and-equilibrium"
  - "science"
status: "complete"
---

# Potential, Free Energy, and Equilibrium

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 16: Electrochemistry](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

This topic connects electrochemistry to the thermodynamics of Chapter 12. A cell potential measures the driving force per electron, and multiplying by the number of electrons and the charge they carry gives the **Gibbs free energy**: ΔG° = −nFE°. What thermodynamics calls a negative ΔG° (spontaneous) now appears as a positive E°cell — two sides of one coin. Because free energy also fixes the equilibrium constant K, every cell potential implies one, and the **Nernst equation** extends the prediction to nonstandard concentrations. A battery's voltage is not fixed; it drifts as reactants are consumed — the Nernst equation tells you exactly how.

## Why This Matters

These equations make electrochemistry quantitative. E° alone tells you *whether* a reaction can run; adding n and F tells you *how much* work it can do (ΔG°), *how far* it will go (K), and *what voltage* a real cell produces at nonstandard concentrations (Nernst). These calculations underlie battery design, fuel-cell efficiency, and analytical tools such as pH meters — essentially concentration cells. On exams, expect at least one ΔG°, K, or Nernst problem.

## Core Concepts

### Free energy and cell potential

For a redox reaction transferring n moles of electrons, the standard free-energy change is:

\[
\Delta G^\circ = -nFE^\circ
\]

where n is the moles of electrons transferred per mole of reaction, F is the **Faraday constant**, \(F = 96,485\ \text{C/mol}\) (the charge on one mole of electrons), and E° is in volts. The units work because a volt is a joule per coulomb: C × V = J. A positive E° gives a negative ΔG° — spontaneous — matching the thermodynamic criterion, and the free energy sets the maximum electrical work available from the cell.

### Equilibrium constants from cell potentials

Because ΔG° = −RT ln K as well (Chapter 12), the two expressions can be equated:

\[
E^\circ = \frac{RT}{nF} \ln K
\]

At 25 °C, converting to base-10 logs and inserting R = 8.314 J/(mol·K), T = 298 K, and F = 96,485 C/mol gives the practical form:

\[
\log_{10} K = \frac{nE^\circ}{0.0592\ \text{V}}
\]

A large positive E° implies a huge K — the reaction essentially runs to completion, which is why a charged battery's reactants are almost entirely consumed.

### The Nernst equation

Real cells rarely run at 1 M concentrations, and voltage depends on concentrations through the **reaction quotient Q**. The Nernst equation corrects E° to actual conditions:

\[
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{RT}{nF} \ln Q
\]

At 25 °C this becomes:

\[
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592\ \text{V}}{n} \log_{10} Q
\]

As the cell discharges, Q grows (products accumulate, reactants deplete) and E drops; at equilibrium Q = K and E = 0 — a dead battery in thermodynamic language. Q follows equilibrium rules: solids and pure liquids are omitted, and each concentration is raised to its stoichiometric coefficient. Identical half-reactions at different concentrations form a **concentration cell** whose entire voltage comes from Q.

## ELI-10: Explain Like I'm 10

> A battery's voltage is like the height of a water slide: the taller the slide, the more energy each drop can deliver. The free-energy equation multiplies that "height" by how many drops (electrons) go down. As the water level at the top falls and the pool below fills, the slide gets less exciting — that's the Nernst equation, explaining why batteries run down as they work.

## High-Yield Points

- ΔG° = −nFE° with F = 96,485 C/mol; units: C × V = J, so ΔG° comes out in joules per mole.
- E° > 0 ⟺ ΔG° < 0 ⟺ K > 1: all mean the reaction is product-favored.
- log₁₀ K = nE°/0.0592 V at 25 °C; E° = (RT/nF) ln K is the general form.
- Nernst at 25 °C: E = E° − (0.0592 V/n) log₁₀ Q.
- Q uses concentrations of aqueous ions and gas pressures; solids and pure liquids are omitted.
- At equilibrium, Q = K and E = 0 — the cell is "dead."
- A concentration cell's E°cell is zero; all its voltage comes from the concentration ratio.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Faraday constant (F) | The charge carried by one mole of electrons, 96,485 C/mol. | The conversion factor between moles of electrons and charge (and thus energy). |
| Gibbs free energy (ΔG°) | The maximum useful work available from a reaction under standard conditions. | The thermodynamic measure of spontaneity; links E° to K. |
| reaction quotient (Q) | The concentration ratio of products to reactants at any moment. | Tells the Nernst equation how far the cell is from equilibrium. |
| equilibrium constant (K) | The value of Q when the reaction is at equilibrium. | Sets the final state; predicted directly from E°. |
| Nernst equation | E = E° − (RT/nF) ln Q: voltage as a function of concentrations. | Predicts real-cell voltage under nonstandard conditions. |
| concentration cell | A cell with identical half-reactions at different concentrations. | The basis of ion-selective electrodes and pH meters. |

## How It Works / Step-by-Step Process

1. Balance the overall redox reaction and count n, the moles of electrons transferred.
2. Compute E°cell from the table (Topic 3): E°cell = E°cathode − E°anode.
3. Apply ΔG° = −nFE°, substituting values with units, and convert J to kJ if desired.
4. For K: use log₁₀ K = nE°/0.0592 V (25 °C) or the general E° = (RT/nF) ln K; for nonstandard concentrations, build Q and apply the Nernst equation (at equilibrium E = 0).

## Example: Free Energy, Equilibrium, and the Nernst Equation

### Example 1: Free energy of the Daniell cell

For Zn + Cu²⁺ → Zn²⁺ + Cu, E°cell = 1.10 V and n = 2. Write the formula, then substitute:

\[
\Delta G^\circ = -nFE^\circ = -(2)(96,485\ \frac{\text{C}}{\text{mol}})(1.10\ \text{V}) = -2.12 \times 10^5\ \frac{\text{J}}{\text{mol}}
\]

Convert to kilojoules (the C·V cancels to J):

\[
\Delta G^\circ = -2.12 \times 10^5\ \frac{\text{J}}{\text{mol}} \times \frac{1\ \text{kJ}}{1000\ \text{J}} = -212\ \frac{\text{kJ}}{\text{mol}}
\]

The negative value confirms the reaction is spontaneous, and the magnitude is the maximum work available per mole of reaction — the energy budget a Daniell cell can deliver.

### Example 2: Equilibrium constant of the Daniell cell

Use the same cell to find K at 25 °C. Formula first, then substitution:

\[
\log_{10} K = \frac{nE^\circ}{0.0592\ \text{V}} = \frac{(2)(1.10\ \text{V})}{0.0592\ \text{V}} = 37.2
\]

So:

\[
K = 10^{37.2} \approx 1.6 \times 10^{37}
\]

An enormous equilibrium constant: the reaction runs essentially to completion, which is why a fresh cell delivers close to its theoretical voltage until the zinc is nearly gone.

### Example 3: The Nernst equation at nonstandard concentrations

What is E if [Cu²⁺] = 2.0 M and [Zn²⁺] = 0.10 M at 25 °C? First build Q — solids are omitted:

\[
Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} = \frac{0.10}{2.0} = 0.050
\]

Then apply the Nernst equation with n = 2:

\[
E = E^\circ - \frac{0.0592\ \text{V}}{n}\log_{10} Q = 1.10\ \text{V} - \frac{0.0592\ \text{V}}{2}\log_{10}(0.050)
\]

Since log₁₀(0.050) = −1.30:

\[
E = 1.10\ \text{V} - (0.0296\ \text{V})(-1.30) = 1.10\ \text{V} + 0.038\ \text{V} = 1.14\ \text{V}
\]

The voltage rises slightly above E° because the product (Zn²⁺) is depleted and the reactant (Cu²⁺) is enriched, pushing the reaction away from equilibrium. As it runs, Q climbs toward K and E falls toward zero.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| ΔG° and E° signs | Spontaneity direction | E° > 0 means ΔG° < 0 (spontaneous); they always have opposite signs. |
| n in ΔG° = −nFE° | n in the Nernst equation | Same n: moles of electrons per mole of reaction as written — count them from the balanced half-reactions. |
| Q and K | Which one changes as the cell runs | Q changes continuously toward K; K is fixed at a given temperature. |
| Concentration cell | Cell with different metals | A concentration cell uses the same couple at two concentrations; all voltage comes from the ratio. |
| Multiplying the reaction by 2 | Doubling E° | Doubling coefficients doubles n and ΔG°, but E° is unchanged (intensive). |

## Quick Review

1. For a cell with E°cell = +0.45 V and n = 2, calculate ΔG° in kJ/mol.
2. A reaction has K = 1.0 × 10⁻⁵ at 25 °C. Is E°cell positive or negative? What about ΔG°?
3. Write the Nernst equation at 25 °C and identify what happens to E as a cell discharges.
4. Why is the voltage of a concentration cell nonzero even though both half-reactions are identical?
5. A fuel cell has E°cell = 1.23 V and n = 4. What is ΔG° per mole of O₂ reduced? (This connects to Topic 5.)

<details>
<summary>Show answers</summary>

1. ΔG° = −nFE° = −(2)(96,485 C/mol)(0.45 V) = −8.7 × 10⁴ J/mol = −87 kJ/mol.
2. K < 1 means the reaction is reactant-favored, so E°cell is negative and ΔG° is positive.
3. E = E° − (0.0592 V/n) log₁₀ Q. As the cell discharges, Q increases, the log term grows, and E falls toward zero.
4. The two half-reactions have identical E° values, so E°cell = 0, but the concentrations differ; the Nernst term (Q ≠ 1) generates the voltage.
5. ΔG° = −(4)(96,485 C/mol)(1.23 V) = −4.75 × 10⁵ J/mol ≈ −475 kJ per mole of O₂ (about −237 kJ per mole of H₂).

</details>

## Related Topics

- Previous: [Electrode and Cell Potentials](03-electrode-and-cell-potentials.md)
- Next: [Batteries and Fuel Cells](05-batteries-and-fuel-cells.md)
- Related: [Corrosion](06-corrosion.md), [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
