---
title: "Principles of Bioelectricity"
subject: "Science"
book: "Introduction to Behavioral Neuroscience"
chapter: "2: Neurophysiology"
topic_number: "3"
source: "introduction-behavioral-neuroscience.md"
tags:
  - "principles-of-bioelectricity"
  - "science"
status: "complete"
---

# Principles of Bioelectricity

> **Book:** [Introduction to Behavioral Neuroscience](../../README.md)  
> **Chapter:** [Chapter 2: Neurophysiology](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Every neuron is a tiny battery. **Bioelectricity** is the study of how living cells generate and use electrical differences across their membranes — and the action potential is a controlled, traveling change in that difference.

The story begins with ions. Inside and outside every neuron, dissolved salts (mainly sodium, potassium, chloride, and calcium) exist at very different concentrations. The cell membrane is a thin lipid barrier that ions cannot freely cross; they pass only through specific **ion channels**, each selective for different ions. Because the membrane separates two solutions of unequal ionic composition, an electrical charge difference builds up across it — the **membrane potential**. At rest, a typical neuron sits at about **-70 mV** (inside negative; commonly taught reference value — verify against current texts).

Two forces drive ions across the membrane: the **concentration gradient** (ions diffuse from plentiful to scarce) and the **electrical gradient** (opposite charges attract). The balance point between these forces for a given ion is its **equilibrium potential**. The resting membrane potential is a weighted average of the equilibrium potentials of all permeable ions, dominated by potassium because the resting membrane is most permeable to K⁺. When channels open or close, permeability changes, the membrane potential moves — and that movement *is* the signal.

## Why This Matters

- **Bioelectricity is the physical basis of every nervous-system function.** Sensation, thought, movement, and memory all begin as ion movements across membranes.
- **Electrolyte imbalances change brain function.** Severe disturbances in blood potassium or sodium alter the gradients that drive signaling, causing confusion, weakness, and seizures.
- **Anesthetics and toxins work here.** Local anesthetics (e.g., lidocaine) block voltage-gated sodium channels; neurotoxins like tetrodotoxin (pufferfish) disable them.
- **Medical instruments read bioelectricity.** ECGs, EEGs, and EMGs detect the summed electrical activity of excitable tissue — the same principles covered here.
- **Exam foundation:** every later topic (synapses, sensory transduction, muscle contraction) assumes you can reason about ions, gradients, and equilibrium potentials.

## Core Concepts

### The membrane is a selective barrier

The phospholipid bilayer is impermeable to ions, so ions cross only through **ion channels** — protein pores, each selective for specific ions (K⁺ channels let K⁺ pass but not Na⁺). Channels are not static doors: many open or close in response to voltage (**voltage-gated channels**), chemical messengers (**ligand-gated channels**), or mechanical forces. The mix of open vs. closed channels sets the membrane's **permeability**, and permeability determines the membrane potential.

### Two gradients push every ion

An ion "wants" to move for two independent reasons:

1. **Concentration gradient:** particles diffuse high→low. Na⁺ is more concentrated *outside*, so it tends to enter; K⁺ is more concentrated *inside*, so it tends to leave.
2. **Electrical gradient:** the resting interior is negative, so *positively* charged ions (Na⁺, K⁺, Ca²⁺) are attracted inward, while *negatively* charged ions (Cl⁻) are pushed away.

For sodium, both forces point the same way (inward), so Na⁺ is strongly driven into the cell. For potassium, they oppose: concentration pushes K⁺ out, but the negative interior pulls it back in.

### Equilibrium potential: when the two forces balance

The **equilibrium potential** (\(E_{\text{ion}}\)) is the membrane voltage at which the electrical force exactly cancels the concentration force for one ion, so there is no net movement of that ion. It is calculated with the **Nernst equation** (for a monovalent cation at body temperature, commonly taught as):

\[
E_{\text{ion}} \approx 61.5 \log_{10}\left(\frac{[\text{ion}]_{\text{outside}}}{[\text{ion}]_{\text{inside}}}\right) \text{ mV}
\]

Using commonly taught reference concentrations (e.g., K⁺ ~140 mM inside / ~5 mM outside; Na⁺ ~12–15 mM inside / ~145 mM outside), the equilibrium potentials are approximately **-90 mV for K⁺** and **+60 mV for Na⁺**. These landmarks are worth memorizing: \(E_K\) is negative, \(E_{Na}\) is positive.

### The resting membrane potential is a compromise

If the membrane were permeable only to K⁺, the resting potential would sit at \(E_K\) (≈ -90 mV); if only to Na⁺, at \(E_{Na}\) (≈ +60 mV). The real resting membrane is *most* permeable to K⁺, slightly permeable to Na⁺ (a few leak channels), and nearly impermeable to anions — so the resting potential is a compromise, about **-70 mV**, close to \(E_K\) but pulled slightly positive by Na⁺ leak. The **Goldman (GHK) equation** formalizes this: the membrane potential is a weighted average of each ion's equilibrium potential, weighted by permeability.

### The Na⁺/K⁺ pump maintains the battery

Leak channels let K⁺ drift out and Na⁺ drift in continuously, slowly running the battery down. The **Na⁺/K⁺ ATPase** restores the gradients: for each ATP molecule hydrolyzed, it pumps **3 Na⁺ out and 2 K⁺ in**. This is why neurons need a constant energy supply — the brain's ATP consumption is largely the price of maintaining ion gradients.

### The membrane is a capacitor

The lipid bilayer stores separated charge like a capacitor, and ion channels act like resistors connecting the two "plates." This **RC circuit** model explains why voltage changes are not instantaneous: the membrane takes time to charge and discharge, and a voltage change applied at one point spreads passively with decay — exactly how graded potentials behave (next topic).

## ELI-10: Explain Like I'm 10

> A neuron is like a balloon with a special wall. Inside are lots of potassium marbles and very few sodium marbles; outside it's the opposite. The wall has tiny doors: mostly potassium doors are open at rest. Potassium marbles try to leave, but the balloon is negatively charged inside, and that pulls them back. The tug-of-war between "leave" and "come back" settles at about -70 mV. When a sodium door opens, sodium marbles rush in, the charge flips, and that flip is the neuron's signal.

## High-Yield Points

- Resting membrane potential ≈ **-70 mV** (inside negative) for a typical neuron — a commonly taught reference value.
- Ions move for **two reasons**: concentration (diffuse down) and charge (opposites attract). Equilibrium potential = the balance point.
- **Nernst landmarks:** \(E_K\) ≈ -90 mV, \(E_{Na}\) ≈ +60 mV (commonly taught textbook concentrations).
- The resting membrane is **most permeable to K⁺**, so the resting potential sits closer to \(E_K\) than to \(E_{Na}\) — about -70 mV, not -90 mV, because of small Na⁺ leak.
- The **Goldman equation** weights each ion's equilibrium potential by the membrane's permeability to that ion.
- The **Na⁺/K⁺ ATPase** pumps 3 Na⁺ out and 2 K⁺ in per ATP, maintaining the gradients that leak channels slowly erode.
- More open Na⁺ channels ⇒ membrane moves toward \(E_{Na}\) (depolarization); more open K⁺ channels ⇒ moves toward \(E_K\) (hyperpolarization).
- The membrane behaves as a **capacitor + resistor**, which is why voltage changes spread passively with decay (graded potentials) unless regenerated (action potentials).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Membrane potential | The voltage difference across the cell membrane (inside minus outside) | The neuron's "voltage state"; all signaling is a change in this value |
| Resting membrane potential | The stable membrane voltage of an unstimulated neuron (≈ -70 mV) | The baseline from which all signals depart |
| Ion channel | A protein pore that lets specific ions cross the membrane | Controls permeability — the "switch" that moves the membrane potential |
| Permeability | How easily a given ion can cross the membrane | Determines which equilibrium potential dominates the membrane voltage |
| Concentration gradient | The difference in ion concentration across the membrane | One of the two forces driving ion movement |
| Electrical gradient | The force from charge separation pulling opposite charges together | The other force; can oppose or reinforce the concentration gradient |
| Equilibrium potential | The voltage at which an ion's two forces exactly balance | The "target voltage" each ion would set alone |
| Nernst equation | Formula computing an ion's equilibrium potential from its concentrations | Turns concentration ratios into voltage numbers (\(E_K\), \(E_{Na}\)) |
| Goldman equation | Weighted-average equation for membrane potential using permeabilities | Explains why the resting potential is a compromise |
| Na⁺/K⁺ ATPase | The pump that moves 3 Na⁺ out and 2 K⁺ in per ATP | Maintains the gradients the whole system depends on |

## Example: Why K⁺ Leak Sets the Resting Potential

Take a "thought experiment neuron" with only K⁺ channels open. K⁺ is ~140 mM inside and ~5 mM outside, so the concentration gradient pushes K⁺ out. As K⁺ leaves, the inside loses positive charge and becomes increasingly negative. That growing negative charge pulls K⁺ back — until, at about -90 mV, the pull back exactly equals the push out: net K⁺ movement stops, and the membrane is at \(E_K\). Now add a few Na⁺ leak channels. Na⁺ (145 mM outside, ~13 mM inside) is driven strongly inward, adding positive charge and nudging the voltage from -90 mV toward -70 mV, where steady K⁺ outflow and Na⁺ inflow are balanced. That balance — not a single ion, but a running compromise between the K⁺-dominated and Na⁺-leak contributions — is the resting potential. The Na⁺/K⁺ pump works quietly in the background, hauling out the Na⁺ that leaks in and recovering the K⁺ that leaked out, so the battery never runs flat.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Equilibrium potential | Resting membrane potential | \(E_{\text{ion}}\) is the balance point for *one* ion; the resting potential is the *weighted compromise* across all permeable ions (≈ -70 mV) |
| "K⁺ leaves at rest" | "K⁺ leaving constantly is the signal" | K⁺ leak is a slow background current that sets the baseline; signaling involves *changes* in permeability (e.g., Na⁺ channels opening) |
| Concentration gradient | Electrical gradient | Concentration: high→low. Electrical: toward opposite charge. They often oppose each other (e.g., for K⁺ at rest) |
| More K⁺ channels open | More Na⁺ channels open | More K⁺ ⇒ toward \(E_K\) (hyperpolarize); more Na⁺ ⇒ toward \(E_{Na}\) (depolarize) |
| The pump "creates" the resting potential | The pump maintains gradients, channels create the potential | The pump is the battery charger; selective permeability of channels sets the voltage |
| -70 mV means ions are still | -70 mV means no net current | At rest there are continuous leaks (K⁺ out, Na⁺ in) balanced by the pump — the *voltage* is steady, not the ion traffic |

## Quick Review

1. What are the two forces that drive an ion across a membrane, and how do they oppose each other for K⁺ at rest?
2. Why is the resting membrane potential (-70 mV) closer to \(E_K\) (-90 mV) than to \(E_{Na}\) (+60 mV)?
3. What does the Nernst equation compute, and roughly what values does it give for K⁺ and Na⁺ with typical textbook concentrations?
4. What job does the Na⁺/K⁺ ATPase do, and why can't leak channels alone maintain the resting state?
5. If you opened many Na⁺ channels in a neuron's membrane, would the membrane potential move toward +60 mV or toward -90 mV? Explain why.
6. Why does the membrane behave like a capacitor, and what practical consequence does that have for voltage spread along a dendrite?

<details>
<summary>Show answers</summary>

1. The concentration gradient (ions diffuse high→low) and the electrical gradient (opposite charges attract). For K⁺ at rest, concentration pushes K⁺ out while the negative interior pulls it back in.
2. Because the resting membrane is far more permeable to K⁺ than to Na⁺. The Goldman equation weights \(E_K\) heavily and \(E_{Na}\) lightly, so the resting potential lands near \(E_K\), pulled only slightly positive by Na⁺ leak.
3. It computes an ion's equilibrium potential from the concentration ratio across the membrane: \(E \approx 61.5 \log_{10}([\text{out}]/[\text{in}])\) mV. With typical reference concentrations: \(E_K\) ≈ -90 mV, \(E_{Na}\) ≈ +60 mV.
4. It pumps 3 Na⁺ out and 2 K⁺ in per ATP, restoring the gradients that leak channels constantly erode. Without it, Na⁺ would accumulate inside and K⁺ would drain out; the gradients would collapse and the resting potential would drift toward zero.
5. Toward +60 mV (\(E_{Na}\)): opening Na⁺ channels makes the membrane more permeable to Na⁺, and the potential moves toward Na⁺'s equilibrium potential — a depolarization. This is exactly how the rising phase of an action potential begins.
6. The lipid bilayer separates charge like a capacitor, and channels act as resistors. The consequence: a voltage change at one point charges neighboring membrane slowly and decays with distance, so passive (graded) potentials fade as they spread.

</details>

## Related Topics

- Previous: [Neural Circuits](02-neural-circuits.md)
- Next: [Mechanisms of Neural Signaling](04-mechanisms-of-neural-signaling.md)
- Related: [Neurophysiology chapter overview](../README.md)
- Related: [General Neurochemistry Principles](../chapter-03-basic-neurochemistry/01-general-neurochemistry-principles.md) — the ions and molecules whose movements create bioelectricity
- Related: [Building a Nervous System](../chapter-01-structure-and-function-of-the-nervous-system-cells-and-anatomy/01-building-a-nervous-system.md) — the membrane structures (channels, pumps) described here in context

## Source Notes

- Book: Introduction to Behavioral Neuroscience
- Local outline source: `introduction-behavioral-neuroscience.md`
- Official source URL: https://openstax.org/details/books/introduction-behavioral-neuroscience/
- Content type: Original educational study guide based on OpenStax outline structure. All concentrations, equilibrium potentials, and the -70 mV resting value are commonly taught textbook reference values; verify against current sources before clinical application.
- Last updated: 2026-08-16
