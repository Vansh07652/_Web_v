---
title: "Mechanisms of Neural Signaling"
subject: "Science"
book: "Introduction to Behavioral Neuroscience"
chapter: "2: Neurophysiology"
topic_number: "4"
source: "introduction-behavioral-neuroscience.md"
tags:
  - "mechanisms-of-neural-signaling"
  - "science"
status: "complete"
---

# Mechanisms of Neural Signaling

> **Book:** [Introduction to Behavioral Neuroscience](../../README.md)  
> **Chapter:** [Chapter 2: Neurophysiology](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Topic 1 described *what* neural communication is; Topic 3 described the *electricity* behind it. This topic assembles the full **mechanism**: the step-by-step molecular choreography by which a neuron converts incoming graded potentials into an action potential, propagates that spike along its axon, and hands the message across a synapse.

The sequence has four movements:

1. **Input:** Neurotransmitters bind receptors on dendrites/soma, opening channels that produce small graded potentials — excitatory (EPSP) or inhibitory (IPSP).
2. **Integration:** Graded potentials spread and sum at the axon hillock. Spatial summation adds simultaneous inputs from different places; temporal summation adds successive inputs arriving quickly at the same place.
3. **Decision and conduction:** If the summed voltage reaches threshold (≈ -55 mV, commonly taught), voltage-gated Na⁺ channels open explosively, producing the rising phase of the action potential. The spike regenerates down the axon via local current flow; in myelinated axons it jumps between nodes of Ranvier (**saltatory conduction**).
4. **Transmission:** At the terminal, the spike opens voltage-gated Ca²⁺ channels; Ca²⁺ triggers vesicle fusion; neurotransmitter is released, diffuses across the cleft, and opens channels on the postsynaptic cell — producing the next round of graded potentials.

Each movement is driven by specific channel types, and the choreography is the same from squid giant axons to human cortical neurons. Getting the sequence and the channel identities straight is the single most important task in neurophysiology.

## Why This Matters

- **This is where drugs, toxins, and diseases act.** Tetrodotoxin (pufferfish) blocks voltage-gated Na⁺ channels; local anesthetics do the same, reversibly. Botulinum toxin blocks vesicle release; curare blocks acetylcholine receptors at the muscle synapse; many antiepileptic drugs target Na⁺ channels or enhance inhibition.
- **Demyelinating disease makes sense here.** In multiple sclerosis, loss of myelin slows or blocks saltatory conduction, causing the sensory and motor symptoms of the disease.
- **Anesthesia, EEG, and neuromodulation** are applications of these exact mechanisms — from sodium-channel blockade to the synchronized firing that EEG records.
- **Exam high-yield:** action potential phases, refractory periods, summation, and synaptic steps are among the most-tested concepts in neuroscience.

## Core Concepts

### Graded potentials: EPSPs and IPSPs

When a neurotransmitter binds a receptor that opens an ion channel, the resulting ion movement changes the membrane potential slightly. If the net effect depolarizes the membrane (usually because Na⁺ or Ca²⁺ enters), it is an **excitatory postsynaptic potential (EPSP)**. If it hyperpolarizes or holds the membrane near rest (usually because Cl⁻ enters or K⁺ leaves), it is an **inhibitory postsynaptic potential (IPSP)**. EPSPs and IPSPs are graded: their size scales with how much transmitter was released, and they decay with distance. One EPSP almost never fires a neuron; hundreds of inputs must cooperate.

### Summation: the arithmetic of decisions

Because EPSPs and IPSPs add, the neuron's decision is arithmetic. **Spatial summation:** EPSPs arriving simultaneously at different dendrites add together as their currents converge on the hillock. **Temporal summation:** EPSPs arriving at the same synapse in rapid succession add because the first has not yet decayed when the second arrives. IPSPs subtract from the total. The axon hillock is the calculator: it continuously totals incoming currents, and when the total crosses threshold, the neuron fires.

### The action potential: a stereotyped voltage spike

The action potential is a rapid, self-amplifying swing in membrane potential with three phases (commonly taught reference figures):

- **Rising phase (depolarization):** At threshold, voltage-gated Na⁺ channels open. Na⁺ rushes in, and the voltage shoots toward \(E_{Na}\) (+60 mV), typically peaking near **+30 to +40 mV**.
- **Falling phase (repolarization):** Na⁺ channels inactivate (close and cannot reopen until repolarization), while voltage-gated K⁺ channels open. K⁺ leaves, driving the voltage back toward \(E_K\).
- **Afterhyperpolarization (undershoot):** K⁺ channels stay open slightly longer, so the membrane briefly dips *below* resting (≈ -80 mV) before returning to -70 mV.

The whole event lasts about 1–2 milliseconds in a typical neuron. Its hallmark is the **all-or-none principle**: below threshold, nothing happens; at or above threshold, a full, identical spike occurs.

### Refractory periods set direction and rate

After a spike, the neuron cannot immediately fire again. During the **absolute refractory period** (roughly the rising and early falling phases), Na⁺ channels are inactivated, so no stimulus — however strong — can trigger a new spike. During the **relative refractory period**, some Na⁺ channels have recovered but K⁺ conductance is still elevated, so a new spike needs a *stronger-than-usual* stimulus. Refractory periods guarantee that action potentials travel **one direction** (the membrane behind the spike can't re-fire) and that firing **rate is limited** (maximum frequency is set by recovery time).

### Conduction: regeneration and saltation

An action potential at one point of the axon depolarizes neighboring membrane via local current flow, opening that patch's Na⁺ channels and regenerating the spike — the signal travels at full amplitude like a line of dominoes. In **myelinated axons**, the myelin sheath insulates the membrane, so the spike regenerates only at the unmyelinated gaps (**nodes of Ranvier**). The signal effectively jumps from node to node — **saltatory conduction** — which is faster and more energy-efficient than continuous conduction. That is why myelinated fibers conduct at tens of meters per second while thin unmyelinated fibers crawl at ~1 m/s.

### Synaptic transmission: the handoff

When the spike reaches the terminal:

1. Voltage-gated Ca²⁺ channels open; Ca²⁺ enters (its intracellular concentration is normally tiny, so the driving force is huge).
2. Ca²⁺ triggers synaptic vesicles to fuse with the membrane (**exocytosis**), releasing neurotransmitter into the cleft.
3. The transmitter diffuses across and binds postsynaptic receptors — either opening channels directly (fast, ~millisecond **ionotropic** signaling) or activating second-messenger cascades (slower **metabotropic** signaling).
4. The signal is terminated by **reuptake** (transporters pull transmitter back into the terminal or glia), **enzymatic degradation** (e.g., acetylcholinesterase breaking down acetylcholine), or **diffusion** away from the cleft.

There is a built-in delay of roughly half a millisecond per synapse — the **synaptic delay** — which is why pathways with many synapses respond slower than reflexes with few.

## ELI-10: Explain Like I'm 10

> Firing a neuron is like starting a wave at a stadium. People (graded potentials) shout "go!" from different seats. If enough shouts arrive at the same time and place, the wave (action potential) starts — and once started, it travels around the whole stadium at the same size. After the wave passes, that section is tired for a moment (refractory), so the wave can't go backward. When the wave reaches the edge, the last person throws a message (neurotransmitter) across the aisle to the next section.

## High-Yield Points

- **EPSP** = depolarizing (excitatory) input; **IPSP** = hyperpolarizing/opposing (inhibitory) input; both are graded and sum at the axon hillock.
- **Spatial summation** = simultaneous inputs from different synapses; **temporal summation** = rapid successive inputs at one synapse.
- Action potential phases: **rising** (Na⁺ in, toward +30 to +40 mV) → **falling** (Na⁺ inactivates, K⁺ out) → **undershoot** (K⁺ lingers, dip below rest). Threshold ≈ -55 mV (commonly taught).
- **All-or-none:** below threshold, no spike; at threshold, a full, identical spike.
- **Absolute refractory** = Na⁺ channels inactivated, cannot fire at all; **relative refractory** = can fire, but only with a stronger stimulus. This enforces one-way travel and caps firing rate.
- **Saltatory conduction** (myelin + nodes of Ranvier) is faster and cheaper than continuous conduction; demyelination slows/stops signals (e.g., multiple sclerosis).
- Synaptic steps: AP → Ca²⁺ entry → vesicle fusion → release → diffusion → receptor binding → new graded potential; terminated by **reuptake, enzymatic degradation, or diffusion**.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| EPSP | Small depolarizing voltage change from an excitatory input | Pushes the neuron toward threshold — a "yes" vote |
| IPSP | Small hyperpolarizing or opposing voltage change from an inhibitory input | Pulls the neuron away from threshold — a "no" vote |
| Spatial summation | Adding inputs arriving at different locations at the same time | Lets many synapses cooperate to fire a neuron |
| Temporal summation | Adding inputs arriving at one location in rapid succession | Lets a high-frequency input build up to threshold |
| Threshold | The voltage (≈ -55 mV) at which the action potential triggers | The decision line; the all-or-none hinge point |
| Voltage-gated Na⁺ channel | Channel that opens with depolarization, letting Na⁺ in, then inactivates | Drives the rising phase; its inactivation creates the absolute refractory period |
| Voltage-gated K⁺ channel | Channel that opens with depolarization (slightly delayed), letting K⁺ out | Drives repolarization and the undershoot |
| Refractory period | The window after a spike during which firing is impossible or harder | Enforces one-way conduction and limits firing rate |
| Node of Ranvier | Unmyelinated gap in the myelin sheath where spikes regenerate | The "repeater station" enabling saltatory conduction |
| Synaptic delay | The ~0.5 ms gap between presynaptic spike and postsynaptic response | Limits how fast polysynaptic pathways can respond |
| Reuptake | Transporters pull released neurotransmitter back into the terminal | One of the main ways synaptic signaling is turned off |

## Example: From a Pinch to a Wince — the Full Mechanism

A friend pinches your arm. Mechanically sensitive channels open in a sensory neuron, producing graded potentials that sum and reach threshold at the first node of Ranvier. Voltage-gated Na⁺ channels snap open, the membrane rises to about +30 mV, Na⁺ channels inactivate, K⁺ channels open, the membrane repolarizes and undershoots, and the spike regenerates node-to-node up the arm at tens of meters per second (refractory periods ensure it only moves forward). At the spinal cord synapse, the spike opens Ca²⁺ channels in the terminal; vesicles fuse and release glutamate; glutamate binds receptors on the next neuron, opening Na⁺ channels and producing an EPSP; the EPSP sums with others and fires the next neuron in the chain. After release, glutamate is swiftly pulled back by transporters — otherwise the synapse would stay active and the "wince" would become a sustained cramp. Each of the ~4 synapses in the chain adds its ~0.5 ms delay; the whole loop takes well under a tenth of a second, which is why you yank your arm back before you even "decide" to.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| EPSP | Action potential | EPSP is a small graded input that *may* help fire the neuron; the action potential is the all-or-none output that actually travels |
| Na⁺ channels opening | K⁺ channels opening | Na⁺ in ⇒ rising phase (depolarization); K⁺ out ⇒ falling phase (repolarization). Same voltage trigger, opposite effects |
| "Stronger stimulus ⇒ bigger action potential" | "Stronger stimulus ⇒ more action potentials" | Spikes are all-or-none and constant size; stronger stimuli increase firing *rate* and recruit more neurons |
| Absolute refractory period | Relative refractory period | Absolute: cannot fire at all (Na⁺ inactivated). Relative: can fire with a stronger-than-normal stimulus (K⁺ still elevated) |
| Myelin speeds up "the signal" | Myelin is a passive coating | It *is* insulation; it speeds conduction by forcing regeneration at nodes (saltation) and reducing current leak |
| Reuptake | Enzymatic degradation | Reuptake: transporters pull transmitter back into the terminal for reuse. Degradation: an enzyme (e.g., acetylcholinesterase) destroys it in the cleft |
| Synaptic delay | Conduction delay | Synaptic delay is the time spent at the synapse itself (~0.5 ms); conduction delay is travel time along the axon |

## Quick Review

1. List the four movements of neural signaling (input → integration → decision/conduction → transmission) and name one channel type central to each.
2. Explain spatial vs. temporal summation and how an IPSP changes the arithmetic.
3. Describe the three phases of an action potential and which ion movements drive each.
4. Why can't an action potential travel backward along an axon?
5. Why is saltatory conduction faster than continuous conduction, and what happens to signaling when myelin is damaged?
6. List the steps from "action potential arrives at the terminal" to "new graded potential on the next cell," and name two ways the signal is terminated.

<details>
<summary>Show answers</summary>

1. Input: neurotransmitter opens ligand-gated channels → graded EPSP/IPSP. Integration: summation at the axon hillock. Decision/conduction: voltage-gated Na⁺ (rising) and K⁺ (falling) channels generate and propagate the spike; in myelinated axons, regeneration at nodes of Ranvier. Transmission: voltage-gated Ca²⁺ channels trigger vesicle release at the terminal.
2. Spatial summation adds simultaneous inputs from different synapses; temporal summation adds rapid successive inputs at one synapse. An IPSP subtracts from the total (moves the membrane away from threshold), so the neuron needs more EPSP input to fire.
3. Rising: voltage-gated Na⁺ channels open, Na⁺ floods in, voltage shoots toward +30 to +40 mV. Falling: Na⁺ channels inactivate and K⁺ channels open, K⁺ leaves, voltage falls. Undershoot: K⁺ channels stay open briefly, voltage dips below resting then recovers.
4. The membrane behind the spike is in its absolute refractory period — its Na⁺ channels are inactivated — so it cannot re-fire. The spike can only trigger fresh membrane ahead of it, forcing one-way travel.
5. Myelin insulates the axon so current flows quickly between nodes; the spike regenerates only at nodes of Ranvier, effectively jumping. Demyelination (e.g., multiple sclerosis) slows conduction, allows current leak, and can block signaling entirely, producing sensory/motor deficits.
6. Steps: Ca²⁺ channels open → Ca²⁺ enters → vesicles fuse and release transmitter → transmitter diffuses across the cleft → binds postsynaptic receptors → channels open → graded potential (EPSP/IPSP). Termination: reuptake by transporters, enzymatic breakdown, or diffusion away from the cleft.

</details>

## Related Topics

- Previous: [Principles of Bioelectricity](03-principles-of-bioelectricity.md)
- Next: [Our Deep but Still Incomplete Understanding of Neural Signaling](05-our-deep-but-still-incomplete-understanding-of-neural-signaling.md)
- Related: [Neurophysiology chapter overview](../README.md)
- Related: [Neurotransmitters Made from Amino Acids](../chapter-03-basic-neurochemistry/02-neurotransmitters-made-from-amino-acids.md) — the messengers released at the synapses described here
- Related: [Neural Circuits](02-neural-circuits.md) — how these signaling events combine into behavior

## Source Notes

- Book: Introduction to Behavioral Neuroscience
- Local outline source: `introduction-behavioral-neuroscience.md`
- Official source URL: https://openstax.org/details/books/introduction-behavioral-neuroscience/
- Content type: Original educational study guide based on OpenStax outline structure. Threshold, peak amplitude, duration, and synaptic-delay figures are commonly taught textbook reference values; verify against current sources before clinical application.
- Last updated: 2026-08-16
