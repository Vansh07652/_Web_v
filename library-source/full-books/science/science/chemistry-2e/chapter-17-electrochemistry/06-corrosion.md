---
title: "Corrosion"
subject: "Science"
book: "Chemistry 2e"
chapter: "17: Electrochemistry"
topic_number: "6"
source: "chemistry-2e.md"
tags:
  - "corrosion"
  - "science"
status: "complete"
---

# Corrosion

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 17: Electrochemistry](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

**Corrosion** is the unwanted oxidation of a metal by its environment — the reason a steel railing rusts, a silver spoon tarnishes, and a copper roof turns green. Far from being a simple surface reaction, corrosion is electrochemistry in the open: the metal acts as an anode, oxygen (or another oxidant) acts as the cathode, and the metal itself conducts the electrons between them. This topic uses the half-reaction framework to explain why iron rusts, why rust keeps corroding instead of protecting the metal, and how coatings, alloying, and **cathodic protection** interrupt the electrochemical circuit.

## Why This Matters

Corrosion is one of the most expensive chemical reactions on Earth, with direct and indirect costs estimated in the hundreds of billions of dollars per year worldwide: crumbling bridges, leaking pipelines, failing aircraft fasteners, and corroded rebar in concrete. In healthcare, corrosion explains why surgical implants must be carefully chosen metals and why sterilization and body chemistry interact with them. Understanding the electrochemistry lets engineers prevent failure — and lets you explain why galvanized nails outlast plain steel ones, why salt accelerates rusting on cars, and why a magnesium block strapped to a water heater protects the steel tank.

## Core Concepts

### Rusting is an electrochemical cell

Iron rusts only when both **water** and **oxygen** are present. The metal surface splits into microscopic electrodes: at anodic regions, iron is oxidized; at cathodic regions, oxygen is reduced:

\[ \text{Anode: } \text{Fe}(s) \rightarrow \text{Fe}^{2+}(aq) + 2e^- \qquad \text{Cathode: } \text{O}_2(g) + 2\text{H}_2\text{O}(l) + 4e^- \rightarrow 4\text{OH}^-(aq) \]

The electrons travel through the iron itself, and the ions travel through the water film, completing the circuit. The Fe²⁺ then oxidizes further and combines with hydroxide to form hydrated iron(III) oxide — the familiar reddish-brown **rust**, \(\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}\). Because both half-reactions are spontaneous, no external energy is needed; the cell runs itself as long as water and oxygen are supplied.

### Why rust is worse than a surface film

Some metals protect themselves: aluminum instantly forms a thin, tightly adherent oxide layer that seals the surface and stops further attack. Rust does not. Rust is porous, flaky, and larger in volume than the iron it replaced, so it cracks away and exposes fresh metal to water and oxygen — the corrosion continues until the object is consumed. This is why a scratched aluminum ladder survives while a scratched steel beam keeps rusting.

### The role of the environment

Anything that helps the electrochemical circuit speeds corrosion. **Salts** (road salt, sea spray) increase the conductivity of the water film, so the cell carries more current. **Acids** supply H⁺ that can be reduced directly and dissolve protective oxide films. Even ordinary moisture condensing on metal — a "water line" or a droplet — creates aeration differences, with oxygen-poor regions becoming anodes. Galvanic corrosion is the same idea on purpose: when two dissimilar metals touch in an electrolyte (for example, copper pipe joined to steel), the less noble metal corrodes faster than it would alone.

### Prevention: break the circuit

Because corrosion is an electrochemical cell, it is stopped by removing any one of its parts. **Coatings** (paint, oil, plastic) exclude water and oxygen. **Galvanizing** coats iron with zinc, which both seals the surface and protects sacrificially: zinc is more easily oxidized than iron, so if the coating is scratched, the zinc corrodes instead of the steel. **Alloying** can change the metal's behavior — stainless steel adds chromium, which forms a protective oxide film much like aluminum's. **Cathodic protection** forces the metal to be the cathode: either a sacrificial anode (a block of magnesium or zinc, more active than the protected metal, that corrodes in its place) or an impressed current from an external power supply, used for pipelines, ship hulls, and buried tanks.

## ELI-10: Explain Like I'm 10

Rust is like a tiny, invisible battery spreading across the surface of iron. The iron is one side of the battery, the air and water are the other, and the metal itself is the wire between them — the battery runs until the iron is used up. A scratch lets water in, and rust is crumbly, so it keeps exposing new iron to keep the "battery" running. To stop it, you cover the metal, or attach a metal that would rather be the battery — like zinc — so the zinc gets eaten instead of the iron.

## High-Yield Points

- Rusting requires water **and** oxygen together; iron is the anode, oxygen is reduced at the cathode.
- Rust is porous and flakes off, exposing fresh metal — corrosion is self-sustaining.
- Salt accelerates corrosion by increasing electrolyte conductivity; acids accelerate it by supplying H⁺.
- Aluminum and stainless steel (chromium) form adherent oxide films that stop corrosion; iron's rust does not.
- Galvanizing = zinc coating: seals the surface and protects sacrificially if scratched.
- Cathodic protection: sacrificial anodes (Mg, Zn) or impressed current keep the structure as the cathode.
- \(E^\circ\) comparisons decide which metal corrodes: the more negative (less noble) metal is oxidized first.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Corrosion | Unwanted oxidation of a metal by its environment | Costs billions yearly and limits the life of metal structures |
| Rust | Hydrated iron(III) oxide, Fe₂O₃·xH₂O | Porous and flaky, so it exposes fresh iron and continues corroding |
| Anodic region | Spot where the metal is oxidized, losing electrons | The "wear" site where metal is eaten away |
| Cathodic region | Spot where oxygen (or H⁺) is reduced | Consumes the electrons the metal produces |
| Galvanizing | Coating iron with zinc | Zinc seals the surface and corrodes sacrificially instead of the steel |
| Cathodic protection | Making the structure the cathode by supplying electrons | Sacrificial anodes and impressed current save pipelines, ships, tanks |
| Sacrificial anode | A more active metal (Mg, Zn) attached to the protected metal | Corrodes in place of the structure — the classic water-heater anode rod |
| Passivation | Formation of a thin, adherent protective oxide film | Why aluminum and stainless steel resist corrosion |

## Example: Two Worked Problems

**Worked Example 1 — Is rusting spontaneous?** Combine the iron and oxygen half-reactions with standard potentials \(E^\circ(\text{Fe}^{2+}/\text{Fe}) = -0.45\ \text{V}\) and \(E^\circ(\text{O}_2/\text{OH}^-) = +0.40\ \text{V}\):

\[ E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 0.40\ \text{V} - (-0.45\ \text{V}) = 0.85\ \text{V} \]

The positive potential means the reaction is spontaneous, exactly as everyday experience suggests. The corresponding free-energy change for \(n = 4\) electrons per mole of O₂:

\[ \Delta G^\circ = -nFE^\circ_{\text{cell}} = -(4\ \text{mol e}^-)\left(96{,}485\ \frac{\text{C}}{\text{mol e}^-}\right)(0.85\ \text{V}) = -3.28 \times 10^5\ \text{J} = -328\ \text{kJ} \]

per mole of O₂ — a strongly downhill reaction that explains why unprotected iron does not stay shiny for long.

**Worked Example 2 — How fast does iron disappear?** Faraday's law relates the mass of metal oxidized to the charge passed: \(m = \frac{MIt}{nF}\), where \(M\) is the molar mass, \(I\) the current, and \(t\) the time. Suppose a corroding steel structure behaves like a cell carrying an average corrosion current of 0.50 A (as Fe → Fe²⁺ + 2e⁻, so \(n = 2\)). Over 30 days (\(t = 30 \times 24 \times 3600 = 2.59 \times 10^6\ \text{s}\)):

\[ m = \frac{(55.85\ \text{g/mol})(0.50\ \text{A})(2.59 \times 10^6\ \text{s})}{(2)(96{,}485\ \text{C/mol})} = 375\ \text{g} \]

Unit check: \(\frac{\text{g}}{\text{mol}} \times \text{A} \times \text{s} \times \frac{\text{mol}}{\text{C}} = \frac{\text{g}}{\text{mol}} \times \frac{\text{C}}{\text{s}} \times \text{s} \times \frac{\text{mol}}{\text{C}} = \text{g}\). Even a modest "leakage current" of half an amp quietly removes about 0.38 kg of iron a month — a powerful argument for protective coatings.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Rusting | Tarnishing or patina | Rust is porous and self-sustaining; silver tarnish and copper patina form protective films |
| Corrosion of iron | Corrosion of aluminum | Aluminum's oxide film stops attack; iron's rust does not |
| Anode in corrosion | Anode in a battery | Same definition (oxidation site) — corrosion is just an unwanted, uncontrolled battery |
| Galvanized = coated with zinc | Galvanized = coated with tin | Tin protects by sealing only (and is less active than iron); zinc protects sacrificially |
| Sacrificial anode | Cathode of the cell | The sacrificial anode is the anode — it corrodes so the structure can be the cathode |

## Quick Review

1. What two environmental components must be present for iron to rust, and why?
2. Why does rust keep corroding while aluminum oxide stops further attack?
3. Why does road salt make cars rust faster?
4. How does galvanizing protect a scratch in the zinc coating?
5. Explain cathodic protection in one sentence, and name one everyday example.

<details>
<summary>Show answers</summary>

1. Water and oxygen. Water carries ions that complete the electrochemical circuit, and oxygen is the oxidant reduced at the cathodic regions.
2. Rust is porous and flakes off, exposing fresh iron; aluminum oxide is a thin, adherent, impermeable film that seals the metal.
3. Salt dissolves in the water film and increases its ionic conductivity, so the corrosion cell carries more current and corrodes faster.
4. Zinc is more easily oxidized than iron, so at the scratch the zinc corrodes sacrificially, feeding electrons to the iron and keeping it as the cathode.
5. Supplying electrons to the structure keeps it as the cathode so it cannot be oxidized — for example, the sacrificial magnesium anode rod in a water heater (or zinc blocks on ship hulls).

</details>

## Related Topics

- Previous: [Batteries and Fuel Cells](05-batteries-and-fuel-cells.md)
- Next: [Electrolysis](07-electrolysis.md)
- Related: [Review of Redox Chemistry](01-review-of-redox-chemistry.md) · [Electrode and Cell Potentials](03-electrode-and-cell-potentials.md) · [Electrochemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
