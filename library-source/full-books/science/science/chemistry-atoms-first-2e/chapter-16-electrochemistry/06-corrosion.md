---
title: "Corrosion"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "16: Electrochemistry"
topic_number: "6"
source: "chemistry-atoms-first-2e.md"
tags:
  - "corrosion"
  - "science"
status: "complete"
---

# Corrosion

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 16: Electrochemistry](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

**Corrosion** is the spontaneous, usually unwanted oxidation of a metal by its environment, and it is electrochemistry in action on a grand scale. A piece of iron left outdoors does not simply "wear away" — it becomes the anode of an electrochemical cell in which oxygen from the air is reduced at nearby cathode sites, with rainwater, soil moisture, or salt spray acting as the electrolyte. Rusting is therefore not a single reaction but a coupled redox process: oxidation of the metal at anodic spots, reduction of oxygen at cathodic spots, electron flow through the metal itself, and ion flow through the surrounding solution. This topic examines the half-reactions behind rusting, why some metals corrode while others resist, and the electrochemical strategies — coatings, galvanizing, sacrificial anodes, and alloying — used to slow corrosion down.

## Why This Matters

- **Infrastructure and safety:** Corrosion degrades bridges, pipelines, ships, and aircraft. Industry studies estimate the global cost of corrosion at roughly 3–4% of world GDP, a large fraction of it preventable.
- **Catastrophic failures:** Corrosion-weakened gas pipelines, storage tanks, and fasteners can fail without warning; understanding the chemistry helps engineers inspect and protect the right things.
- **Medical devices:** Metal implants (stainless steel, titanium alloys) must resist corrosion inside the body, where saltwater-like fluids make corrosion more aggressive.
- **Prevention economics:** Choosing the right coating, alloy, or sacrificial anode can multiply a structure's lifetime many times over — a direct application of cell-potential logic from this chapter.
- **Exams:** Corrosion problems test whether you can identify the anode and cathode half-reactions, compute \(\text{E}^\circ_{\text{cell}}\), and explain why a more active metal protects a less active one.

## Core Concepts

### Corrosion is a spontaneous electrochemical cell

For corrosion to occur, four things must be present: a metal that can be oxidized, an oxidizing agent (usually \(\text{O}_2\)), water or moisture to serve as electrolyte, and an electrical path for electrons. In rusting iron, microscopic anodic regions lose electrons while nearby cathodic regions pass them to oxygen. The metal itself conducts electrons, and the water film conducts ions, so the cell is complete without any wires.

### The half-reactions of rusting

At anodic sites, iron dissolves:

\[
\text{Fe}(s) \rightarrow \text{Fe}^{2+}(aq) + 2e^- \qquad \text{E}^\circ = -0.447\ \text{V}
\]

At cathodic sites (in neutral or basic water), dissolved oxygen is reduced:

\[
\text{O}_2(g) + 2\text{H}_2\text{O}(l) + 4e^- \rightarrow 4\text{OH}^-(aq) \qquad \text{E}^\circ = +0.401\ \text{V}
\]

Combining (doubling the iron half-reaction to balance electrons) gives:

\[
2\text{Fe}(s) + \text{O}_2(g) + 2\text{H}_2\text{O}(l) \rightarrow 2\text{Fe}(\text{OH})_2(s)
\]

The iron(II) hydroxide then oxidizes further in air to the familiar reddish-brown **rust**, \(\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}\). Notice that both water and oxygen are reactants, which is why iron rusts faster in humid air than in dry air, and faster still where salt (an electrolyte) is present — salt water conducts ions far better than pure water, speeding the ionic half of the circuit.

### Why some metals corrode and others do not

Whether a metal corrodes depends on how easily it gives up electrons, quantified by its standard reduction potential. Active metals with very negative \(\text{E}^\circ\) values (magnesium, zinc, iron) oxidize readily; noble metals with positive \(\text{E}^\circ\) values (gold, platinum) resist corrosion because oxidation is not energetically favorable. Some metals, notably aluminum and chromium, corrode so quickly at first that they form a thin, tightly adherent oxide film (**passivation layer**) that seals the surface and stops further attack — the reason an aluminum ladder does not rust away.

### Preventing corrosion electrochemically

- **Barrier coatings** (paint, oil, plastic, enamel) keep water and oxygen away from the metal surface. Any scratch or chip, however, reopens the cell.
- **Galvanizing** coats steel with zinc. Zinc protects in two ways: it is a physical barrier, and if scratched, it becomes the sacrificial anode because \(\text{Zn}^{2+}/\text{Zn}\) (\(-0.762\ \text{V}\)) is more negative than \(\text{Fe}^{2+}/\text{Fe}\) (\(-0.447\ \text{V}\)). The zinc corrodes instead of the steel.
- **Cathodic protection** deliberately attaches a more active metal (zinc or magnesium) to pipelines, ship hulls, and underground tanks; the attached metal corrodes sacrificially while the protected structure is forced to act as cathode. Impressed-current systems use a rectifier to drive the same effect.
- **Alloying** produces stainless steel: adding chromium (and nickel) creates a self-healing passivation layer of \(\text{Cr}_2\text{O}_3\).
- **Environmental control** — removing oxygen (deaerated boilers), removing electrolytes, or adding corrosion inhibitors — attacks the conditions that sustain the cell.

## ELI-10: Explain Like I'm 10

> Rusting is like a tiny battery draining on the metal's surface. One spot on the iron gives up electrons and slowly dissolves away, while another spot hands those electrons to oxygen in the air. Water acts like the wet wire that completes the battery's circuit. If you cover the iron with paint, the battery cannot form; if you bolt a piece of zinc onto it, the zinc becomes the part that "battery-drains" instead of the iron.

## High-Yield Points

- Corrosion is a **spontaneous redox cell**: metal oxidation at the anode, \(\text{O}_2\) reduction at the cathode, with moisture as electrolyte.
- Rusting half-reactions: \(\text{Fe} \rightarrow \text{Fe}^{2+} + 2e^-\) (\(-0.447\ \text{V}\)) and \(\text{O}_2 + 2\text{H}_2\text{O} + 4e^- \rightarrow 4\text{OH}^-\) (\(+0.401\ \text{V}\)).
- \(\text{E}^\circ_{\text{cell}} = \text{E}^\circ_{\text{cathode}} - \text{E}^\circ_{\text{anode}}\); a positive value means the corrosion reaction is spontaneous under standard conditions.
- More negative \(\text{E}^\circ\) = more active metal = stronger tendency to corrode = better sacrificial anode (Zn, Mg protect Fe).
- Galvanizing and sacrificial anodes work because zinc or magnesium oxidizes **instead of** iron.
- Aluminum and chromium "self-protect" via passivating oxide films; this is why they resist corrosion despite active \(\text{E}^\circ\) values.
- Salt speeds corrosion by making the electrolyte more conductive; dry air and pure water slow it.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Corrosion | Spontaneous oxidation of a metal by its environment | The most widespread practical application (and problem) of electrochemistry |
| Anode | The electrode where oxidation occurs; metal dissolves here | In corrosion, the anodic spot is where metal is lost |
| Cathode | The electrode where reduction occurs; \(\text{O}_2\) is consumed here | Cathodic sites complete the cell; protecting them stops corrosion |
| Electrolyte | A solution containing ions that conducts charge between electrodes | Moisture plus dissolved salts is what closes the corrosion circuit |
| Rust | Hydrated iron(III) oxide, \(\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}\) | The familiar end product of iron corrosion |
| Passivation | Formation of a thin protective oxide film on a metal surface | Explains why Al and Cr resist corrosion despite negative \(\text{E}^\circ\) |
| Sacrificial anode | A more active metal attached to corrode in place of the protected metal | The basis of galvanizing and cathodic protection |
| Galvanizing | Coating steel with zinc to protect it | One of the most common corrosion-prevention methods |
| Standard reduction potential \(\text{E}^\circ\) | Voltage of a half-reaction measured against the standard hydrogen electrode | Tells you which metal oxidizes first and whether corrosion is spontaneous |
| Cathodic protection | Forcing a structure to act as cathode so it cannot oxidize | Protects pipelines, ship hulls, and underground tanks |

## Worked Examples

### Example 1: Is rusting spontaneous? Compute \(\text{E}^\circ_{\text{cell}}\)

Use standard potentials to show that the iron–oxygen couple that drives rusting is spontaneous.

**Step 1 — Write the half-reactions with potentials:**

\[
\text{Fe}^{2+} + 2e^- \rightarrow \text{Fe} \quad \text{E}^\circ = -0.447\ \text{V} \qquad
\text{O}_2 + 2\text{H}_2\text{O} + 4e^- \rightarrow 4\text{OH}^- \quad \text{E}^\circ = +0.401\ \text{V}
\]

**Step 2 — Identify anode and cathode.** Iron is oxidized, so the \(\text{Fe}^{2+}/\text{Fe}\) couple is the anode (oxidation reverses it); oxygen is reduced at the cathode.

**Step 3 — Apply the cell-potential formula:**

\[
\text{E}^\circ_{\text{cell}} = \text{E}^\circ_{\text{cathode}} - \text{E}^\circ_{\text{anode}} = 0.401\ \text{V} - (-0.447\ \text{V}) = +0.848\ \text{V}
\]

A positive \(\text{E}^\circ_{\text{cell}}\) means \(\Delta G^\circ = -nF\text{E}^\circ_{\text{cell}} < 0\), so the reaction is spontaneous — corrosion happens on its own, which is exactly why unprotected iron rusts without any external power source.

### Example 2: Why zinc protects iron (galvanizing)

Compare the standard reduction potentials to show why a scratch in a galvanized coating corrodes the zinc, not the steel underneath.

**Step 1 — Write the relevant potentials:**

\[
\text{Fe}^{2+} + 2e^- \rightarrow \text{Fe} \quad \text{E}^\circ = -0.447\ \text{V} \qquad
\text{Zn}^{2+} + 2e^- \rightarrow \text{Zn} \quad \text{E}^\circ = -0.762\ \text{V}
\]

**Step 2 — Identify which metal is the stronger reducing agent.** The more negative potential (\(\text{Zn}\), \(-0.762\ \text{V}\)) means zinc loses electrons more readily, so in a zinc–iron couple zinc is the anode and iron the cathode.

**Step 3 — Compute the cell potential for the protecting couple:**

\[
\text{E}^\circ_{\text{cell}} = \text{E}^\circ_{\text{cathode}} - \text{E}^\circ_{\text{anode}} = (-0.447\ \text{V}) - (-0.762\ \text{V}) = +0.315\ \text{V}
\]

Because this couple is spontaneous with zinc as anode, the zinc dissolves preferentially; the iron (cathode) is spared. The same logic explains why magnesium anodes (\(-2.372\ \text{V}\)) protect buried pipelines.

### Example 3: Tracing corrosion at a scratched surface

A galvanized steel gate is scratched down to bare steel and left in humid coastal air. Walk through what happens: the scratch exposes steel while zinc surrounds it; seawater spray provides an electrolyte; zinc, having the more negative \(\text{E}^\circ\), becomes the anode and oxidizes to \(\text{Zn}^{2+}\), releasing electrons that flow through the steel to cathodic sites where oxygen is reduced. The steel stays intact (cathodically protected) while the zinc coating slowly sacrifices itself — the reason galvanized steel lasts far longer than painted steel once both are scratched.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Rust (\(\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}\)) | \(\text{Fe}(\text{OH})_2\) | The hydroxide forms first and is then oxidized in air to rust; they are different compounds at different stages |
| Corrosion requiring two metals | Corrosion of a single metal | One metal alone corrodes if it can act as both anode and cathode — rusting iron needs no second metal |
| "Rusting is just oxidation" | Rusting as a redox couple | Both oxidation (Fe) and reduction (\(\text{O}_2\)) occur; a corrosion explanation must name both half-reactions |
| A more positive \(\text{E}^\circ\) metal protecting iron | A more negative \(\text{E}^\circ\) metal protecting iron | The **more negative** potential metal (Zn, Mg) is the sacrificial anode; noble metals like copper accelerate iron's corrosion when in contact |
| Standard \(\text{E}^\circ\) values | Real-world corrosion conditions | \(\text{E}^\circ\) assumes 1 M solutions, 1 atm, 25 °C; real corrosion rates also depend on kinetics, oxygen access, and electrolyte |
| Aluminum "doesn't corrode" | Aluminum passivates | Aluminum oxidizes readily but the oxide film seals the surface; the corrosion is happening, just stopped at the surface |
| Passivation layer | Paint coating | Passivation is a chemical oxide film that self-heals; paint is an applied physical barrier that does not |

## Quick Review

1. Write the two half-reactions of iron rusting and label the anode and cathode.
2. Why does iron corrode faster in salt spray than in pure water?
3. Why does galvanized steel protect iron even after the zinc coating is scratched?
4. Aluminum has a very negative \(\text{E}^\circ\) yet aluminum structures resist corrosion. Explain.
5. Compute \(\text{E}^\circ_{\text{cell}}\) for the zinc–iron couple and state which metal corrodes.
6. Name two electrochemical methods used to protect buried pipelines.

<details>
<summary>Show answers</summary>

1. Anode: \(\text{Fe} \rightarrow \text{Fe}^{2+} + 2e^-\); cathode: \(\text{O}_2 + 2\text{H}_2\text{O} + 4e^- \rightarrow 4\text{OH}^-\).
2. Salt dissolves into the water film, making the electrolyte more conductive, so the ionic half of the corrosion circuit carries charge faster.
3. Zinc has a more negative reduction potential (\(-0.762\ \text{V}\)) than iron (\(-0.447\ \text{V}\)), so zinc oxidizes preferentially at the scratch, keeping the exposed steel cathodic and protected.
4. Aluminum oxidizes to form a thin, tightly adherent \(\text{Al}_2\text{O}_3\) passivation film that blocks further contact between the metal and oxygen/water.
5. \(\text{E}^\circ_{\text{cell}} = \text{E}^\circ_{\text{cathode}} - \text{E}^\circ_{\text{anode}} = (-0.447) - (-0.762) = +0.315\ \text{V}\); zinc is the anode and corrodes.
6. Sacrificial (galvanic) anodes such as magnesium, and impressed-current cathodic protection.

</details>

## Related Topics

- Previous: [Batteries and Fuel Cells](05-batteries-and-fuel-cells.md)
- Next: [Electrolysis](07-electrolysis.md)
- Related: [Review of Redox Chemistry](01-review-of-redox-chemistry.md) — the half-reaction toolkit corrosion uses
- Related: [Galvanic Cells](02-galvanic-cells.md) — corrosion is a short-circuited galvanic cell
- Related: [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
