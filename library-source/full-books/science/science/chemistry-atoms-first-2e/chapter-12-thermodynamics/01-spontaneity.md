---
title: "Spontaneity"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "12: Thermodynamics"
topic_number: "1"
source: "chemistry-atoms-first-2e.md"
tags:
  - "spontaneity"
  - "science"
status: "complete"
---

# Spontaneity

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 12: Thermodynamics](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Some processes happen by themselves — a hot cup of coffee cools, iron rusts, sugar dissolves in water — while others never do without outside help: a cooled cup does not spontaneously reheat, rust does not turn back into shiny iron, and a ball does not roll uphill. A **spontaneous process** is one that proceeds in a particular direction under a given set of conditions *without any external driving force*. Spontaneity is a statement about **direction**, not speed: a spontaneous process may be extremely slow (diamonds converting to graphite is spontaneous but takes eons).

The central question of this topic is: what determines the direction of a spontaneous change? The intuitive answer — "things go from high energy to low energy" — is only half right. Energy (enthalpy) matters, but it is not the whole story, because some spontaneous processes absorb heat (melting ice above 0 °C, dissolving ammonium nitrate). The full answer involves both the **energy** and the **entropy** (dispersal) of the system and its surroundings — the ideas developed in the next three topics of this chapter.

## Why This Matters

- **Predicting reactions:** Chemists need to know whether a reaction *can* happen under given conditions before investing time and money — spontaneity decides feasibility, kinetics decides speed.
- **Everyday chemistry:** Why does ice melt above 0 °C even though melting absorbs heat? Why do some "cold pack" reactions proceed while absorbing energy? Spontaneity explains both.
- **Biological systems:** Cells run reactions that are individually nonspontaneous (building proteins) by coupling them to spontaneous ones (ATP hydrolysis) — understanding spontaneity is the gateway to bioenergetics.
- **Engineering and environment:** Predicting whether corrosion, combustion, or a synthesis will proceed on its own guides materials selection and process design.
- **Exam value:** Distinguishing spontaneous from nonspontaneous processes, and identifying the driving force (energy vs. entropy), is a classic exam question.

## Core Concepts

### What "spontaneous" really means

A **spontaneous process** is one that occurs without continuous outside intervention once started; it proceeds in a specific direction under the given conditions. Three points to internalize:

- Spontaneity is **conditional**: water freezes spontaneously below 0 °C but melts spontaneously above 0 °C. The same substance, different conditions, opposite directions.
- Spontaneity is **not speed**: a spontaneous process can be so slow that it appears not to happen (diamond → graphite at room temperature).
- Spontaneity is **directional**: given the same initial and final states, only one direction is spontaneous under a given set of conditions.

### The first law does not answer the direction question

The first law of thermodynamics states that energy is conserved: \(\Delta E = q + w\). It tells us the *amount* of energy involved in a process, but it is silent on *which direction* a process will take. A ball rolls downhill and could, in principle, roll back up if energy were conserved — yet it never does on its own. Energy conservation alone cannot explain the arrow of time, so thermodynamics needs a second criterion.

### Enthalpy is not enough either

It is tempting to say "exothermic reactions are spontaneous and endothermic reactions are not." That rule works for many familiar cases — combustion releases heat and runs on its own — but it fails completely for others:

- Melting ice above 0 °C is **endothermic** (\(\Delta H > 0\)) yet spontaneous.
- Dissolving ammonium nitrate in water is strongly endothermic (that's how cold packs work) yet spontaneous.
- Dissolving salt in water has a near-zero heat effect yet is spontaneous.

So heat release is a *tendency* that favors spontaneity but cannot be the whole answer. The missing piece is **entropy**: the dispersal of energy and matter. Spontaneous processes tend to spread energy out and increase the number of ways energy can be arranged.

### Two driving forces

A spontaneous change is driven by two competing tendencies:

1. **Minimum energy (enthalpy):** systems tend to release heat and reach lower potential energy — the "downhill" tendency. This favors exothermic processes.
2. **Maximum entropy (dispersal):** systems tend to spread energy and matter into as many arrangements as possible — the "spreading out" tendency. This favors processes that increase disorder, like gases expanding or solids dissolving.

When both tendencies agree (exothermic *and* more dispersal — e.g., combustion, where heat is released and gas molecules are produced), the process is clearly spontaneous. When they conflict (endothermic but more dispersal — e.g., melting ice), the outcome depends on **temperature** and the relative magnitudes of the two effects.

### Temperature dependence of spontaneity

Because the entropy tendency becomes more powerful at higher temperature (thermal energy provides more ways to arrange particles), some processes switch direction with temperature:

- **Ice melting:** below 0 °C, the enthalpy cost wins and freezing is spontaneous; above 0 °C, the entropy gain wins and melting is spontaneous; at exactly 0 °C the two balance and both directions are equally favored (equilibrium).
- **Dissolving salts:** many salts dissolve spontaneously at some temperatures and precipitate at others, for the same reason.

This tug-of-war is quantified in the next topics: entropy (Topic 2) and the second law (Topic 3) define the criterion \(\Delta S_{\text{univ}} > 0\), and free energy (Topic 4) packages it into a single, practical number \(\Delta G\).

## ELI-10: Explain Like I'm 10

> Think of a toy block tower. It falls over by itself (that's spontaneous — it happens with no help), but it never builds itself back up. Falling releases energy and spreads the blocks out, which is what nature likes to do. But here's the twist: a messy room can also get messier all by itself — that's spreading out too, even without energy being released. Spontaneity is about which way things *naturally* go, not about how fast, and not always about losing energy.

## High-Yield Points

- **Spontaneous** = proceeds in a given direction without external driving force; **conditional** on conditions (T, P, concentrations).
- Spontaneity ≠ speed: diamond → graphite is spontaneous but imperceptibly slow.
- The **first law** (\(\Delta E = q + w\)) conserves energy but cannot predict direction.
- **Exothermicity favors** spontaneity but is not required: ice melting above 0 °C and cold packs (endothermic) are spontaneous.
- Two tendencies drive change: **minimum enthalpy** and **maximum entropy** (dispersal of energy and matter).
- Spontaneity is **temperature-dependent** when enthalpy and entropy tendencies conflict (e.g., melting/freezing at 0 °C).
- The quantitative criterion comes later: \(\Delta S_{\text{univ}} > 0\) (Topic 3) and \(\Delta G < 0\) (Topic 4).
- A process at equilibrium is spontaneous in neither direction — the forward and reverse tendencies balance.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Spontaneous process | A change that proceeds on its own in a given direction under given conditions. | The central question of chemical thermodynamics: what can happen without help. |
| Nonspontaneous process | A change that requires continuous outside input to proceed. | Reverse direction of a spontaneous process under the same conditions. |
| First law of thermodynamics | Energy is conserved: \(\Delta E = q + w\). | Sets the energy budget but cannot predict direction. |
| Enthalpy (\(\Delta H\)) | Heat exchanged at constant pressure. | The "minimum energy" tendency favoring exothermic change. |
| Entropy (\(S\)) | Measure of dispersal/randomness of energy and matter. | The "spreading out" tendency that can make endothermic processes spontaneous. |
| Driving force | The underlying tendency (enthalpy, entropy, or both) pushing a process forward. | Explains *why* a process is spontaneous. |
| Equilibrium | State where forward and reverse tendencies balance; no net change. | The boundary between spontaneity in each direction. |
| Kinetic control | The effect of rate, not direction, on whether a change is observed. | Separates "can happen" (thermodynamics) from "happens fast" (kinetics). |

## Example: Classifying processes and finding the driving force

**Worked example 1 — spontaneous or not?** Classify each process as spontaneous or nonspontaneous under the stated conditions, and identify the driving force.

| Process | Conditions | Spontaneous? | Driving force |
|---|---|---|---|
| Iron rusting | Room T, moist air | Yes | Exothermic (enthalpy) + more dispersal of matter |
| Ice melting | +5 °C, 1 atm | Yes | Entropy (endothermic but particles disperse) |
| Water freezing | +5 °C, 1 atm | No (reverse is spontaneous) | Enthalpy would favor it, but entropy wins at this T |
| Ball rolling uphill | Any | No | Requires external work; energy minimum favors downhill |
| Diamond → graphite | Room T | Yes (thermodynamically) | Enthalpy favors graphite; imperceptibly slow (kinetics) |
| Sugar dissolving in tea | Room T | Yes | Entropy (solute and solvent both gain arrangements) |

The table shows the pattern: processes that release heat *and* spread out are safely spontaneous; endothermic ones (melting, dissolving) rely entirely on the entropy tendency, which strengthens with temperature.

**Worked example 2 — why does the direction flip at 0 °C?** Ice melting is endothermic (\(\Delta H > 0\)): it absorbs 6.01 kJ per mole. Below 0 °C, freezing is spontaneous; above 0 °C, melting is. Sketch the reasoning:

1. **Melting spreads matter out** (solid lattice → free-moving liquid), so melting always increases the entropy of the system — a tendency *favoring* melting.
2. **Melting absorbs heat**, which is an enthalpy *cost* — a tendency opposing melting.
3. **At low temperature**, the entropy gain cannot pay the enthalpy bill: freezing wins. **At high temperature**, the same entropy gain "counts for more" because more thermal energy is available to disperse: melting wins.
4. **At exactly 0 °C**, the two tendencies balance — ice and water coexist at equilibrium, and neither direction is favored.

This is why the melting point is not a fixed property of "ice" alone but a balance point set by both \(\Delta H\) and the temperature-weighted entropy change — precisely the quantities combined in the free-energy equation of Topic 4.

**Worked example 3 — cold packs: endothermic but spontaneous.** An instant cold pack contains water and ammonium nitrate in separate compartments. When the seal breaks, the salt dissolves: \(\text{NH}_4\text{NO}_3(s) \rightarrow \text{NH}_4^+(aq) + \text{NO}_3^-(aq)\), absorbing about 25.7 kJ per mole and chilling the pack. The process is spontaneous even though it consumes heat. Why?

- The **entropy gain is enormous**: one crystalline solid becomes two kinds of hydrated ions free to move through the water — far more arrangements.
- The enthalpy cost is real but smaller than the entropy benefit at room temperature.
- Result: net dispersal of energy (heat pulled from surroundings) and matter (ions spread out) — both favored.

The cold pack is the classic proof that "spontaneous = exothermic" is wrong, and it previews the quantitative rule: spontaneity is decided by the total entropy change of the universe, not by the sign of \(\Delta H\) alone.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Spontaneous | Fast | Spontaneity is direction, not rate; diamond → graphite is spontaneous yet takes eons. |
| Spontaneous | Exothermic | Many endothermic processes (ice melting, cold packs) are spontaneous — entropy can pay the heat bill. |
| Nonspontaneous | Impossible | A nonspontaneous process can occur if driven by external work (electrolysis, refrigerators) — it just won't happen on its own. |
| Spontaneity under one condition | Spontaneity everywhere | Ice melting is spontaneous above 0 °C but freezing is spontaneous below — conditions define the direction. |
| First law | Direction of change | Energy conservation says nothing about which direction a process takes; that's the job of entropy/second law. |
| Equilibrium | "Nothing is happening" | At equilibrium both directions proceed at equal rates; net change is zero, but the system is dynamic. |
| Enthalpy tendency | Entropy tendency | Enthalpy favors heat release (lower energy); entropy favors dispersal. They can conflict, and temperature decides the winner. |

## Quick Review

1. Define a spontaneous process in your own words. Give one example of a spontaneous process that is endothermic.
2. Why can't the first law of thermodynamics tell us the direction of a spontaneous change?
3. Water freezes spontaneously at −10 °C but melts spontaneously at +10 °C. What determines which direction is spontaneous at each temperature?
4. True or false: "A spontaneous process must release heat." Explain.
5. Diamonds are thermodynamically unstable (graphite is more stable), yet diamonds last forever at room temperature. What resolves this apparent contradiction?
6. Name the two competing tendencies that decide spontaneity, and state which one strengthens as temperature rises.

<details>
<summary>Show answers</summary>

1. A process that proceeds in a given direction without external driving force under stated conditions. Endothermic spontaneous example: melting ice above 0 °C, or dissolving ammonium nitrate in water.
2. The first law only conserves energy (\(\Delta E = q + w\)); it says nothing about which direction is favored, so it cannot distinguish the real direction from its reverse.
3. The balance between enthalpy (favoring freezing, which releases heat) and entropy (favoring melting, which disperses particles); the entropy tendency grows with temperature and wins above 0 °C.
4. False. Many spontaneous processes absorb heat (endothermic), such as melting ice and dissolving ammonium nitrate; the entropy gain can outweigh the enthalpy cost.
5. Kinetics: the conversion diamond → graphite is spontaneous but has an enormous activation barrier, so the rate is essentially zero at room temperature. Spontaneity ≠ speed.
6. Minimum enthalpy (release of heat/lower energy) and maximum entropy (dispersal of energy and matter). The entropy tendency strengthens as temperature rises.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Entropy](02-entropy.md)
- Related: [Thermodynamics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure. Enthalpy values cited (ice fusion 6.01 kJ/mol; ammonium nitrate dissolution ~25.7 kJ/mol) are standard reference values; all classifications and reasoning are original.
- Last updated: 2026-08-16
