---
title: "Electrolysis"
subject: "Science"
book: "Chemistry 2e"
chapter: "17: Electrochemistry"
topic_number: "7"
source: "chemistry-2e.md"
tags:
  - "electrolysis"
  - "science"
status: "complete"
---

# Electrolysis

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 17: Electrochemistry](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

A galvanic cell runs a spontaneous reaction and produces electricity; an **electrolytic cell** does the reverse — it uses electrical energy to force a **nonspontaneous** redox reaction to run. This process is **electrolysis**, and it is how industry makes aluminum, chlorine, sodium hydroxide, and hydrogen; how metals are refined and plated; and how rechargeable batteries are recharged. This topic explains the anatomy of an electrolytic cell (note the flipped anode/cathode sign convention), the competition between possible half-reactions in aqueous solutions, and **Faraday's laws**, which predict exactly how much product a given current and time will produce.

## Why This Matters

Electrolysis turns electricity into chemical change, which makes it central to modern industry: aluminum (Hall–Héroult process), chlorine and sodium hydroxide (chlor-alkali process), copper refining, and electroplating of jewelry, coins, and corrosion-resistant coatings. The same principles describe how rechargeable batteries are recharged, and they define the future of "green hydrogen" produced by splitting water. Faraday's laws give the quantitative link between electrical charge and amount of substance — the basis for electroplating specifications and industrial process design — and understanding overvoltage explains why real cells need more voltage than the textbook minimum.

## Core Concepts

### Anatomy of an electrolytic cell

An electrolytic cell has two electrodes immersed in an electrolyte and connected to an external power source (a battery or DC supply). The **anode** is the electrode where **oxidation** occurs and is connected to the positive terminal; the **cathode** is where **reduction** occurs and is connected to the negative terminal. Notice the sign flip: in a galvanic cell the anode is negative, but in an electrolytic cell the anode is **positive** — the external supply pushes electrons into the cathode and pulls them from the anode, driving the reaction uphill against its natural direction.

### Choosing what reacts: competition in aqueous solution

When the electrolyte is a molten salt, only its ions can react — electrolysis of molten NaCl gives sodium metal at the cathode and chlorine gas at the anode. In **aqueous** solution, however, water itself is a candidate for both half-reactions: water can be reduced to H₂ (at sufficiently negative potentials) or oxidized to O₂. The actual products are decided by which reaction needs less applied voltage under the conditions — that is, which is less unfavorable. A practical consequence: electrolyzing aqueous sodium chloride produces H₂ and OH⁻ at the cathode rather than sodium metal, because reducing water is far easier than reducing Na⁺. This competition is the reason chlor-alkali plants make NaOH and Cl₂, not Na metal.

### Faraday's laws: charge quantifies product

The amount of product is fixed by the charge passed, not by the identity of the electrode. One mole of electrons carries charge \(F = 96{,}485\ \text{C}\). For a current \(I\) flowing for time \(t\), the charge is \(Q = It\), and the moles of electrons are \(Q/F\). Since each mole of product requires \(n\) moles of electrons (from the balanced half-reaction), the mass of product is:

\[ m = \frac{M I t}{n F} \]

where \(M\) is the molar mass. This single equation does all electroplating and electrolysis stoichiometry.

### Overvoltage and why real cells need more

The theoretical voltage required to drive an electrolysis is the negative of the cell potential of the reverse (spontaneous) reaction — for water splitting, about 1.23 V. Real cells need more: electrode kinetics, slow steps, and gas-bubble formation create an **overvoltage** (overpotential), so practical water electrolysis runs at roughly 1.5–2 V or more. Overvoltage also changes product choices — for example, it is partly why H₂ rather than sodium forms at the cathode in aqueous NaCl. This is why textbook potentials predict products, but engineering must add the real-world overhead.

## ELI-10: Explain Like I'm 10

A battery makes electricity from chemistry; electrolysis is the opposite — you plug in electricity to force chemistry to happen, like using a pump to push water uphill. If you send electricity through salty water, the water splits into bubbles of hydrogen and oxygen gas. The more electricity you send (and the longer you send it), the more gas you get — it's a direct trade: so many electrons in, so many atoms out.

## High-Yield Points

- Electrolysis drives nonspontaneous reactions with external electrical energy.
- In an electrolytic cell the anode is positive and the cathode is negative — opposite of a galvanic cell; oxidation still occurs at the anode.
- In aqueous solution, water competes with the solute ions for both half-reactions; compare required voltages to predict products.
- Faraday's law: \(m = \frac{MIt}{nF}\), with \(n\) = moles of electrons per mole of product from the balanced half-reaction.
- \(Q = It\) converts current × time into charge; moles of electrons = \(Q/F\).
- Overvoltage means real electrolysis needs more voltage than the theoretical minimum.
- Applications: aluminum production, chlor-alkali (Cl₂ + NaOH), copper refining, electroplating, water splitting for H₂.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Electrolysis | Using electrical energy to force a nonspontaneous redox reaction | The basis of metal production, refining, plating, and H₂ generation |
| Electrolytic cell | Cell with an external power supply driving the reaction | Anode is positive; cathode is negative — signs flip vs. galvanic |
| Anode | Electrode where oxidation occurs | In electrolysis it is positive; the site where anions (or water) lose electrons |
| Cathode | Electrode where reduction occurs | In electrolysis it is negative; where cations (or water) gain electrons |
| Faraday's law | \(m = MIt/(nF)\) relating charge to mass of product | Lets you compute plating thickness, run times, and yields |
| Overvoltage | Extra voltage needed beyond the theoretical minimum | Explains real energy costs and some product selection |
| Chlor-alkali process | Electrolysis of aqueous NaCl to make Cl₂ and NaOH | One of the largest industrial electrolysis applications |
| Electroplating | Coating an object by reducing metal ions onto it as the cathode | Jewelry, corrosion protection, and electronic connectors |

## Example: Two Worked Problems

**Worked Example 1 — How long to plate 10.0 g of silver?** Silver plating reduces Ag⁺: \(\text{Ag}^+ + e^- \rightarrow \text{Ag}(s)\), so \(n = 1\) and \(M = 107.87\ \text{g/mol}\). Rearranging Faraday's law for time:

\[ t = \frac{m n F}{M I} = \frac{(10.0\ \text{g})(1)(96{,}485\ \text{C/mol})}{(107.87\ \text{g/mol})(2.50\ \text{A})} = 3.58 \times 10^3\ \text{s} \approx 59.6\ \text{min} \]

Unit check: \(\frac{\text{g} \cdot \text{C/mol}}{(\text{g/mol}) \cdot \text{A}} = \frac{\text{g} \cdot \text{C/mol} \cdot \text{mol}}{\text{g} \cdot \text{C/s}} = \text{s}\). A 2.50 A current deposits 10 g of silver in about an hour.

**Worked Example 2 — Mass of copper deposited.** Electrolysis of CuSO₄ solution reduces \(\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}(s)\), so \(n = 2\) and \(M = 63.55\ \text{g/mol}\). With \(I = 5.00\ \text{A}\) for \(t = 2.00\ \text{h} = 7.20 \times 10^3\ \text{s}\):

\[ m = \frac{M I t}{n F} = \frac{(63.55\ \text{g/mol})(5.00\ \text{A})(7.20 \times 10^3\ \text{s})}{(2)(96{,}485\ \text{C/mol})} = 11.9\ \text{g} \]

This is the same calculation an electroplater or copper refinery uses to plan how long to run a bath for a target coating mass — and why current and time must be controlled precisely in industrial plating.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Anode sign in electrolysis | Anode sign in a galvanic cell | Electrolytic anode is positive; galvanic anode is negative |
| Products of molten NaCl electrolysis | Products of aqueous NaCl electrolysis | Molten gives Na metal and Cl₂; aqueous gives H₂, OH⁻, and Cl₂ (water competes) |
| \(n\) in Faraday's law | \(n\) = moles of product | \(n\) is moles of **electrons** per mole of product from the half-reaction |
| Theoretical voltage | Actual applied voltage | Overvoltage means real cells need extra voltage (kinetics, bubbles, resistance) |
| Electrolysis of water | Electrolysis of brine | Water gives H₂ + O₂; brine gives H₂ + Cl₂ + NaOH |

## Quick Review

1. In an electrolytic cell, which electrode is positive, and what happens there?
2. Why does electrolyzing aqueous NaCl produce H₂ instead of sodium metal at the cathode?
3. State Faraday's law and the meaning of each symbol.
4. How much charge (in coulombs) is needed to deposit 1 mol of silver (Ag⁺ + e⁻ → Ag)?
5. Why does a commercial water-splitting cell operate above the theoretical 1.23 V?

<details>
<summary>Show answers</summary>

1. The anode is positive, and oxidation occurs there (e.g., Cl⁻ or water losing electrons).
2. Water is reduced to H₂ at a much less negative potential than Na⁺ needs, so water wins the competition in aqueous solution.
3. \(m = MIt/(nF)\): mass deposited equals molar mass × current × time divided by (electrons per mole of product × Faraday constant).
4. \(Q = nF = (1\ \text{mol e}^-)(96{,}485\ \text{C/mol}) = 96{,}485\ \text{C}\) — one faraday per mole of silver.
5. Overvoltage: slow electrode kinetics, gas-bubble buildup, and solution resistance require extra voltage beyond the thermodynamic minimum.

</details>

## Related Topics

- Previous: [Corrosion](06-corrosion.md)
- Next: End of chapter
- Related: [Potential, Free Energy, and Equilibrium](04-potential-free-energy-and-equilibrium.md) · [Batteries and Fuel Cells](05-batteries-and-fuel-cells.md) · [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
