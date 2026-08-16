---
title: "Electrolysis"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "16: Electrochemistry"
topic_number: "7"
source: "chemistry-atoms-first-2e.md"
tags:
  - "electrolysis"
  - "science"
status: "complete"
---

# Electrolysis

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 16: Electrochemistry](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

**Electrolysis** is the use of electrical energy to drive a **nonspontaneous** redox reaction — the exact opposite of a galvanic cell. A galvanic cell converts chemical energy into electricity on its own; an electrolytic cell takes electricity from an external power source and forces chemistry to run backward: \(\text{Na}^+\) becomes sodium metal, \(\text{Al}^{3+}\) becomes aluminum metal, and water splits into \(\text{H}_2\) and \(\text{O}_2\). The key quantitative idea is **Faraday's laws of electrolysis**: the mass of substance produced is proportional to the charge passed, so a simple calculation connects current, time, and moles of electrons to grams of product. This topic covers how electrolytic cells are wired (which electrode is the anode, which is the cathode), what happens when water competes with dissolved ions, and the industrial and everyday uses of electrolysis — from aluminum smelting and chlorine production to electroplating and rechargeable batteries.

## Why This Matters

- **Industrial chemistry:** Aluminum is produced almost entirely by the Hall–Héroult electrolysis of molten \(\text{Al}_2\text{O}_3\); chlorine and sodium hydroxide come from electrolyzing brine (the chlor-alkali process).
- **Everyday objects:** Electroplating deposits the silver on cutlery, the gold on jewelry, and the chromium on car bumpers; electrolysis also refines copper for electrical wiring.
- **Energy technology:** Electrolysis of water produces hydrogen fuel; rechargeable batteries are electrolytic cells while charging (the discharge is galvanic).
- **Body and safety context:** Electrolyte balance and ion movement in the body are governed by similar charge-flow principles, and understanding electrolysis helps make sense of how batteries in medical devices are recharged.
- **Exams:** Faraday's-law stoichiometry problems (\(m = MIt/nF\)) are among the most reliable calculation points in the electrochemistry chapter.

## Core Concepts

### Electrolytic vs. galvanic cells

Both cell types have an anode (oxidation) and a cathode (reduction), and electrons always flow from anode to cathode through the external circuit. The difference is the sign of \(\text{E}^\circ_{\text{cell}}\) and the source of energy:

- **Galvanic (voltaic) cell:** spontaneous, \(\text{E}^\circ_{\text{cell}} > 0\), produces electrical energy; anode is negative, cathode is positive.
- **Electrolytic cell:** nonspontaneous, \(\text{E}^\circ_{\text{cell}} < 0\), consumes electrical energy; the anode is connected to the positive terminal of the power source (so anode is positive, cathode negative).

The applied voltage must exceed the cell's inherent reverse potential; the extra amount needed beyond \(\text{E}^\circ_{\text{cell}}\) is called **overpotential**.

### Electrolysis of molten ionic compounds

Molten \(\text{NaCl}\) contains mobile \(\text{Na}^+\) and \(\text{Cl}^-\) ions with no water present. Applying a voltage gives:

\[
\text{Cathode:}\quad \text{Na}^+ + e^- \rightarrow \text{Na}(l) \qquad
\text{Anode:}\quad 2\text{Cl}^- \rightarrow \text{Cl}_2(g) + 2e^-
\]

The compound must be **molten** (or dissolved) so ions can move; a solid salt crystal conducts almost no current because its ions are locked in place.

### Aqueous solutions: the competition with water

In aqueous electrolysis, water itself can be oxidized or reduced, so it competes with the dissolved ions. For aqueous \(\text{NaCl}\), the possible cathode reactions are \(\text{Na}^+ + e^- \rightarrow \text{Na}\) (\(-2.71\ \text{V}\)) and \(2\text{H}_2\text{O} + 2e^- \rightarrow \text{H}_2 + 2\text{OH}^-\) (\(-0.83\ \text{V}\)); the less negative (easier) reduction is water, so the products are \(\text{H}_2\) and \(\text{Cl}_2\), not sodium metal — the basis of the chlor-alkali industry. Predicting aqueous electrolysis products therefore requires comparing the potentials of the ion reactions against the potentials of water's own oxidation and reduction (with overpotential caveats).

### Faraday's laws and quantitative electrolysis

One mole of electrons carries a fixed charge, the **Faraday constant**:

\[
F = 96,485\ \text{C mol}^{-1}
\]

The charge passed by a steady current is \(q = It\), so the moles of electrons are:

\[
n(e^-) = \frac{It}{F}
\]

Each mole of product requires a stoichiometric number of moles of electrons, giving the mass produced:

\[
m = \frac{MIt}{nF}
\]

where \(M\) is the molar mass of the product, \(I\) the current in amperes (\(\text{C s}^{-1}\)), \(t\) the time in seconds, \(n\) the moles of electrons per mole of product, and \(F\) the Faraday constant. Two moles of product require twice the charge — this proportionality is the essence of Faraday's first law.

### Applications of electrolysis

- **Hall–Héroult process:** molten \(\text{Al}_2\text{O}_3\) in cryolite; \(\text{Al}^{3+} + 3e^- \rightarrow \text{Al}\).
- **Chlor-alkali process:** electrolysis of brine gives \(\text{Cl}_2\), \(\text{H}_2\), and \(\text{NaOH}\).
- **Electroplating:** the object to be plated is the cathode; metal ions in solution (e.g., \(\text{Ag}^+\), \(\text{Cu}^{2+}\), \(\text{Cr}^{3+}\)) are reduced onto it.
- **Electrorefining:** impure copper is the anode; pure copper deposits at the cathode while impurities fall away.
- **Water electrolysis:** \(2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2\), a route to hydrogen fuel.
- **Rechargeable batteries:** charging forces the discharge reaction backward — the battery is an electrolytic cell while plugged in.

## ELI-10: Explain Like I'm 10

> A galvanic battery makes electricity from chemistry; electrolysis is the reverse — you plug electricity in and force chemistry to happen backward. Imagine pushing a ball up a hill with a machine instead of letting it roll down: the machine (the power supply) does the work. The amount of stuff you make depends on how much electric charge you push through, so bigger current or longer time means more product.

## High-Yield Points

- Electrolytic cells drive **nonspontaneous** reactions (\(\text{E}^\circ_{\text{cell}} < 0\)) using an external power source.
- In both cell types: **oxidation at anode, reduction at cathode**; in electrolytic cells the anode is the positive terminal.
- Faraday constant: \(F = 96,485\ \text{C mol}^{-1}\) of electrons; charge \(q = It\).
- Moles of electrons: \(n(e^-) = It/F\); mass of product: \(m = MIt/(nF)\).
- Use seconds for time, amperes for current, and the correct \(n\) (electrons per mole of product: 1 for \(\text{Ag}\), 2 for \(\text{Cu}\) or \(\text{H}_2\), 3 for \(\text{Al}\)).
- In aqueous solution, water competes with ions: electrolyzing brine gives \(\text{H}_2\) and \(\text{Cl}_2\), not sodium metal.
- Electrolysis applications: aluminum smelting, chlor-alkali, electroplating, electrorefining, water splitting, battery charging.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Electrolysis | Using electrical energy to drive a nonspontaneous redox reaction | The industrial method for producing many pure elements and plated coatings |
| Electrolytic cell | A cell that consumes electrical energy to force chemistry to happen | Contrast with galvanic cells, which produce electricity |
| Anode | Electrode where oxidation occurs; in electrolysis, the positive terminal | Products form here; anions migrate toward it |
| Cathode | Electrode where reduction occurs; in electrolysis, the negative terminal | Metal deposits and \(\text{H}_2\) form here; cations migrate toward it |
| Faraday constant \(F\) | Charge carried by one mole of electrons: \(96,485\ \text{C mol}^{-1}\) | The conversion factor linking current/time to moles of substance |
| Overpotential | Extra voltage above \(\text{E}^\circ_{\text{cell}}\) needed to drive the reaction at a practical rate | Explains why real electrolysis needs more voltage than the ideal value |
| Electroplating | Depositing a thin metal layer by reducing its ions onto a cathode | Coating objects with silver, gold, chromium, or nickel |
| Chlor-alkali process | Electrolysis of brine producing \(\text{Cl}_2\), \(\text{H}_2\), and \(\text{NaOH}\) | Source of three major industrial chemicals |
| Hall–Héroult process | Electrolytic reduction of molten \(\text{Al}_2\text{O}_3\) to aluminum | How nearly all aluminum metal is produced |
| Molten | Melted, so ions are mobile and can conduct current | Required for electrolysis of ionic compounds without water |

## Worked Examples

### Example 1: How much aluminum from a given current?

A Hall–Héroult cell runs at 10.0 A for 2.00 hours to reduce molten \(\text{Al}_2\text{O}_3\). How many grams of aluminum metal are deposited? (\(\text{Al}^{3+} + 3e^- \rightarrow \text{Al}\); \(M_{\text{Al}} = 26.98\ \text{g mol}^{-1}\).)

**Step 1 — Write the mass formula:**

\[
m = \frac{MIt}{nF}
\]

**Step 2 — Convert time to seconds and identify \(n\):**

\[
t = 2.00\ \text{h} \times \frac{3600\ \text{s}}{1\ \text{h}} = 7200\ \text{s}, \qquad n = 3\ \text{mol e}^- \text{ per mol Al}
\]

**Step 3 — Substitute with units:**

\[
m = \frac{(26.98\ \text{g mol}^{-1})(10.0\ \text{A})(7200\ \text{s})}{(3)(96,485\ \text{C mol}^{-1})}
= \frac{26.98 \times 10.0 \times 7200}{289,455}\ \text{g}
= 6.71\ \text{g}
\]

Dimensional check: \(\text{A} \cdot \text{s} = \text{C}\), so \(\text{g mol}^{-1} \cdot \text{C} / (\text{C mol}^{-1}) = \text{g}\). About 6.7 g of aluminum requires roughly 20,000 C of charge — showing why aluminum smelters run at enormous currents.

### Example 2: Volume of hydrogen from water electrolysis

Water is electrolyzed at 1.00 A for exactly 1.00 hour. What volume of \(\text{H}_2\) gas is produced at STP? (\(2\text{H}_2\text{O} + 2e^- \rightarrow \text{H}_2 + 2\text{OH}^-\), so 2 mol e⁻ per mol \(\text{H}_2\).)

**Step 1 — Moles of electrons from charge:**

\[
n(e^-) = \frac{It}{F} = \frac{(1.00\ \text{A})(3600\ \text{s})}{96,485\ \text{C mol}^{-1}} = 0.03731\ \text{mol e}^-
\]

**Step 2 — Convert to moles of \(\text{H}_2\):**

\[
n(\text{H}_2) = \frac{0.03731\ \text{mol e}^-}{2\ \text{mol e}^- / \text{mol H}_2} = 0.01866\ \text{mol}
\]

**Step 3 — Convert to volume at STP (22.4 L/mol):**

\[
V = n \times 22.4\ \text{L mol}^{-1} = 0.01866 \times 22.4 = 0.418\ \text{L}
\]

Dimensional check: mol \(\times\) L/mol = L. One amp-hour of charge yields about 0.42 L of hydrogen gas at STP — the scale of a small laboratory electrolysis cell.

### Example 3: Time to electroplate a silver layer

How long must a 2.00 A current run to deposit 0.500 g of silver from a \(\text{AgNO}_3\) solution? (\(\text{Ag}^+ + e^- \rightarrow \text{Ag}\); \(M_{\text{Ag}} = 107.87\ \text{g mol}^{-1}\), \(n = 1\).)

**Step 1 — Solve the mass formula for \(t\):**

\[
m = \frac{MIt}{nF} \quad\Rightarrow\quad t = \frac{mnF}{MI}
\]

**Step 2 — Substitute:**

\[
t = \frac{(0.500\ \text{g})(1)(96,485\ \text{C mol}^{-1})}{(107.87\ \text{g mol}^{-1})(2.00\ \text{A})}
= \frac{48,242.5}{215.74}\ \text{s} = 223.6\ \text{s}
\]

Dimensional check: \(\text{g} \cdot \text{C mol}^{-1} / (\text{g mol}^{-1} \cdot \text{A}) = \text{C}/\text{A} = \text{s}\). About 224 seconds (3.7 minutes) — a reminder that electroplating is slow, which is exactly what makes it controllable.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Electrolytic cell | Galvanic cell | Electrolytic: nonspontaneous, consumes electricity, anode is positive; galvanic: spontaneous, produces electricity, anode is negative |
| Anode sign convention | Cathode sign convention | In electrolysis the anode is the positive terminal (connected to + of the supply); in galvanic cells it is negative. Oxidation happens at the anode in both |
| \(n(e^-) = It/F\) | \(m = MIt/(nF)\) | The first gives moles of electrons; the second converts to grams of product using molar mass and stoichiometry |
| Electrolysis of molten NaCl | Electrolysis of aqueous NaCl | Molten gives Na metal and \(\text{Cl}_2\); aqueous gives \(\text{H}_2\) and \(\text{Cl}_2\) because water is reduced more easily than \(\text{Na}^+\) |
| Faraday constant \(F\) | Faraday's laws | \(F = 96,485\ \text{C mol}^{-1}\) is the charge per mole of electrons; Faraday's laws are the proportional relationships between charge and amount of product |
| Current \(I\) | Charge \(q\) | Current is charge per time (\(\text{C s}^{-1}\)); charge is current times time. Use \(q = It\) before applying Faraday's constant |
| Time in hours | Time in seconds | Faraday calculations need seconds; convert hours to seconds (3600 s per hour) or the answer is off by 3600× |

## Quick Review

1. In an electrolytic cell, is the anode connected to the positive or negative terminal of the power supply? Does oxidation or reduction occur there?
2. Write the two half-reactions for electrolysis of molten \(\text{NaCl}\).
3. Why does electrolyzing an aqueous \(\text{NaCl}\) solution produce \(\text{H}_2\) at the cathode instead of sodium metal?
4. How many moles of electrons pass through a cell carrying 2.00 A for 30.0 minutes?
5. How many grams of copper (\(M = 63.55\ \text{g mol}^{-1}\)) deposit at a cathode when 1.00 A flows for 1.00 hour and \(\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}\)?
6. Give two industrial processes that rely on electrolysis.

<details>
<summary>Show answers</summary>

1. Positive terminal; oxidation occurs at the anode.
2. Cathode: \(\text{Na}^+ + e^- \rightarrow \text{Na}\); anode: \(2\text{Cl}^- \rightarrow \text{Cl}_2 + 2e^-\).
3. Water is reduced at a less negative potential (\(-0.83\ \text{V}\)) than \(\text{Na}^+\) (\(-2.71\ \text{V}\)), so \(2\text{H}_2\text{O} + 2e^- \rightarrow \text{H}_2 + 2\text{OH}^-\) wins the competition.
4. \(n(e^-) = It/F = (2.00 \times 1800)/96,485 = 0.0373\ \text{mol e}^-\).
5. \(m = MIt/(nF) = (63.55)(1.00)(3600)/(2 \times 96,485) = 1.19\ \text{g Cu}\).
6. Hall–Héroult aluminum production and the chlor-alkali process (also electroplating, electrorefining, or water electrolysis).

</details>

## Related Topics

- Previous: [Corrosion](06-corrosion.md)
- Next: End of chapter
- Related: [Galvanic Cells](02-galvanic-cells.md) — the spontaneous counterpart; rechargeable batteries switch between both
- Related: [Electrode and Cell Potentials](03-electrode-and-cell-potentials.md) — potentials tell you what electrolysis must overcome
- Related: [Potential, Free Energy, and Equilibrium](04-potential-free-energy-and-equilibrium.md) — why \(\text{E}^\circ_{\text{cell}} < 0\) means energy must be supplied
- Related: [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
