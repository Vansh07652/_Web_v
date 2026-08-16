---
title: "Visual Processing Begins in Bipolar, Horizontal, Amacrine and Ganglion Cells"
subject: "Science"
book: "Introduction to Behavioral Neuroscience"
chapter: "6: Vision"
topic_number: "3"
source: "introduction-behavioral-neuroscience.md"
tags:
  - "visual-processing-begins-in-bipolar-horizontal-amacrine-and-ganglion-cells"
  - "science"
status: "complete"
---

# Visual Processing Begins in Bipolar, Horizontal, Amacrine and Ganglion Cells

> **Book:** [Introduction to Behavioral Neuroscience](../../README.md)  
> **Chapter:** [Chapter 6: Vision](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Photoreceptors detect light, but they are not the cells that send visual information to the brain. Between the photoreceptors and the optic nerve sits a layer of processing circuitry: **bipolar cells** relay signals from photoreceptors to **ganglion cells**, while **horizontal cells** and **amacrine cells** make sideways (lateral) connections that shape and sharpen those signals. Retinal ganglion cells are the only retinal neurons that fire action potentials and the only ones whose axons leave the eye — they form the optic nerve.

This topic is where the retina stops being a simple light detector and becomes a **feature-extraction machine**: before a single signal leaves the eye, the retina has already computed contrast, edges, and motion. The key ideas are the vertical pathway (photoreceptor → bipolar → ganglion), the lateral modulators (horizontal and amacrine cells), and the **center–surround** receptive fields that make edges pop out.

## Why This Matters

- **Everything downstream inherits what the retina computes.** The thalamus and cortex analyze the retina's output, not the raw light pattern — so understanding what the retina already did explains why later areas look the way they do.
- **Contrast and edge detection are survival-relevant.** Center–surround organization is the neural basis of seeing the boundaries of objects — a predator's outline, a face's contour.
- **Clinical conditions start here.** Glaucoma damages ganglion cells and their axons; diabetic retinopathy disrupts retinal circuitry; night blindness traces to rod-pathway problems. Knowing which cell type fails explains which symptom appears.
- **It is a model system for neuroscience.** The retina is accessible, well-mapped tissue where lateral inhibition, graded potentials, and spike generation can be watched in action — the same principles the rest of the brain uses.

## Core Concepts

### The vertical pathway: photoreceptor → bipolar → ganglion

Light hyperpolarizes photoreceptors (they release less glutamate in the light). Bipolar cells read that change through two receptor mechanisms:

- **OFF-center bipolar cells** use ionotropic glutamate receptors (AMPA/kainate): less glutamate in the light means less excitation, so they report darkness in their receptive-field center.
- **ON-center bipolar cells** use a metabotropic glutamate receptor (mGluR6) that *inverts* the sign: less glutamate in the light **depolarizes** them.

Bipolar cells thus split the photoreceptor signal into two parallel channels — one reporting center light (ON), one reporting center darkness (OFF) — and both synapse onto matching **ON-center** and **OFF-center ganglion cells**, which integrate the input, generate action potentials, and send spikes down the optic nerve.

### Horizontal cells: building the surround

Horizontal cells are interneurons whose processes spread laterally across the photoreceptor layer. When light hits the area around a photoreceptor, horizontal cells inhibit that photoreceptor (they release GABA, and their feedback effectively subtracts the surrounding light level). The result is a **center–surround receptive field**: light in the center excites the cell, but light in the surround *antagonizes* the center response.

Why does this matter? A cell with a center–surround field responds most strongly not to uniform light but to **differences** in light — an edge. This **lateral inhibition** is why borders look sharper than they physically are and underlies classic illusions such as Mach bands and simultaneous contrast (a gray patch looks darker on white than on black). The retina's first processing step is contrast, not raw brightness.

### Amacrine cells: timing, motion, and the rod pathway

Amacrine cells are a diverse family of interneurons at the bipolar → ganglion cell synapse. They shape the *timing* of retinal responses — some convert sustained signals into brief "something changed!" signals — and starburst amacrine cells are essential for **direction selectivity**: certain ganglion cells fire for motion in one direction but not the opposite.

Amacrine cells also run the night-vision circuit. Rods are too sensitive to drive cone bipolar cells directly, so in dim light the signal travels rods → rod bipolar cells → **AII amacrine cells** → cone bipolar cells → ganglion cells. This AII bridge is why rods and cones can share the same output lines.

### Ganglion cells: the retina's output

Roughly a million ganglion cells (commonly taught figure) compress the photoreceptor array into the optic nerve. Major functional classes:

- **Midget (P-type) ganglion cells:** small receptive fields, high spatial resolution, color-opponent responses; they feed the **parvocellular** pathway (fine detail and color).
- **Parasol (M-type) ganglion cells:** larger receptive fields, faster conduction, less color selectivity; they feed the **magnocellular** pathway (motion and coarse form).
- **Intrinsically photosensitive retinal ganglion cells (ipRGCs):** contain melanopsin and respond to light directly, without photoreceptor input. They project to the suprachiasmatic nucleus and drive circadian entrainment and the pupillary light reflex — vision for the body clock, not for seeing.

### Convergence, acuity, and sensitivity

Many rod photoreceptors converge onto single bipolar and ganglion cells — pooling weak signals for high sensitivity but blurring spatial detail. Cone-dominated pathways, especially in the fovea, show much less convergence, giving high acuity. This is the neural trade-off behind the familiar facts that rods mediate dim-light (scotopic) vision with poor detail, while cones mediate bright-light (photopic) vision with sharp detail and color.

## ELI-10: Explain Like I'm 10

Your eye has a movie screen of light-detectors, but the cable to your brain is narrow. Bipolar cells are messengers who carry each detector's message one step closer to the cable, and horizontal and amacrine cells are the messengers who whisper sideways, "hey, the neighbors are brighter here!" so you notice edges and movement. The final messengers — ganglion cells — put all the messages together, decide what matters, and send that summary down the optic-nerve cable to the brain.

## High-Yield Points

- Retinal processing order: photoreceptors → **bipolar cells** → **ganglion cells**; **horizontal cells** act at the photoreceptor–bipolar synapse, **amacrine cells** at the bipolar–ganglion synapse.
- Ganglion cells are the **only retinal output**; their axons form the optic nerve; they are the only retinal neurons that fire action potentials.
- **Center–surround receptive fields** arise from lateral inhibition by horizontal cells and make the retina an **edge/contrast detector**, not a brightness meter.
- **ON-center** cells fire to light in the center; **OFF-center** cells fire to darkness in the center. Bipolar cells split the signal into these two channels (sign-inverting mGluR6 for ON, ionotropic receptors for OFF).
- Amacrine cells add **temporal sharpening and direction selectivity** and run the **AII rod pathway** for night vision.
- **Midget (P) cells → parvocellular pathway** (detail, color); **parasol (M) cells → magnocellular pathway** (motion); **ipRGCs** (melanopsin) drive circadian and pupillary functions.
- Rods converge heavily (sensitivity over acuity); foveal cones converge little (acuity over sensitivity).
- Clinical hook: glaucoma = ganglion cell loss; night blindness often = rod-pathway dysfunction.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Bipolar cell | Retinal interneuron connecting photoreceptors to ganglion cells | First relay of the visual signal; splits it into ON and OFF channels |
| Ganglion cell | Retinal output neuron whose axon leaves the eye in the optic nerve | The only spikes leaving the retina; everything the brain "sees" arrives as ganglion cell spikes |
| Horizontal cell | Lateral interneuron at the photoreceptor–bipolar synapse | Generates lateral inhibition and center–surround receptive fields |
| Amacrine cell | Lateral interneuron at the bipolar–ganglion synapse | Shapes timing, enables direction selectivity, bridges rod signals (AII cells) |
| Center–surround receptive field | A field where center and surround light have opposite effects | The neural basis of edge and contrast detection |
| Lateral inhibition | Neighboring cells suppressing each other's responses | Sharpens boundaries and enhances contrast |
| ON-center / OFF-center | Cells excited by center light vs. center darkness | Two parallel channels encoding brightness vs. darkness |
| ipRGC | Ganglion cell containing melanopsin, sensitive to light on its own | Drives circadian entrainment and the pupillary reflex |
| Midget / parasol cells | Small-field (P) and large-field (M) ganglion cell classes | Seed the parvocellular and magnocellular processing streams |

## Example: Why a gray square looks different on two backgrounds

Place the same mid-gray square on a white page and a black page: the square on white looks *darker*, even though a brightness meter would say both are identical — and physically they are. Each retinal cell's response is set by its center **minus** its surround. On white, the square's edges sit next to a bright surround that inhibits the cell, pushing the signal down; on black, the dark surround disinhibits it, and the signal rises. The center–surround design *predicts* this illusion: the retina codes contrast relative to context, and your brain reports that code, not raw luminance.

Extend the same logic: the border between the square and its background is where center and surround disagree most, so border cells fire hardest. That is why you can see the boundary of a gray object on a gray background even when overall illumination changes — the edge signal survives because it is a *difference* signal. This is lateral inhibition doing real perceptual work, and the same principle is used in camera and image-processing software that sharpens edges.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Photoreceptors sending signals to the brain | Photoreceptors signaling bipolar cells | Photoreceptors only synapse locally in the retina; they never spike and never reach the brain |
| Bipolar cells generating action potentials | Bipolar cells using graded potentials | Bipolar (and horizontal, amacrine) cells use graded potentials; only ganglion cells spike |
| Horizontal and amacrine cells doing the same job | Each other | Horizontal cells act at the photoreceptor–bipolar synapse (contrast/edges); amacrine cells act at the bipolar–ganglion synapse (timing/motion/rod pathway) |
| "ON" meaning the cell turns on in light | ON-center vs. OFF-center | ON-center cells fire to *center light*; OFF-center cells fire to *center darkness* — both encode edges |
| ipRGCs being ordinary image-forming cells | ipRGCs as non-image-forming light detectors | ipRGCs measure ambient light for circadian and pupillary control, not for seeing shapes |
| More convergence always being better | Convergence trading sensitivity vs. acuity | Rod convergence boosts sensitivity but blurs detail; foveal cones sacrifice sensitivity for acuity |

## Quick Review

1. List the five cell types of the retina in processing order, and state the job of each.
2. Why does a center–surround receptive field respond more to an edge than to uniform light?
3. What is the difference between an ON-center and an OFF-center bipolar cell at the receptor level?
4. How does the retina achieve high sensitivity in dim light without sacrificing acuity in bright light?
5. A person loses vision because of damage to retinal ganglion cell axons. Why can no other retinal cell type take over their job?
6. Name two functions of amacrine cells and one function of ipRGCs.

<details>
<summary>Show answers</summary>

1. Photoreceptors (absorb light, graded potentials) → bipolar cells (relay; split into ON/OFF channels) → ganglion cells (output, spike). Horizontal cells modulate the photoreceptor–bipolar synapse; amacrine cells modulate the bipolar–ganglion synapse.
2. Center light excites the center but the surround has the opposite effect, so uniform illumination partly cancels out; an edge stimulates center and surround unequally, producing a large net response — the cell is tuned to differences (contrast).
3. OFF-center bipolars use ionotropic glutamate receptors, so the light-induced decrease in glutamate *reduces* their excitation. ON-center bipolars use mGluR6, which inverts the sign, so less glutamate *depolarizes* them.
4. Convergence: many rods pool onto one output channel (sensitivity at the cost of acuity); foveal cone pathways have little convergence (acuity). The retina uses different circuits tuned to each goal.
5. Ganglion cells are the only retinal neurons that project out of the eye. Bipolar, horizontal, and amacrine cells are interneurons confined to the retina — information cannot reach the brain without the ganglion cell stage.
6. Amacrine cells shape response timing, enable direction-selective motion detection, and (as AII cells) bridge rod signals to the cone pathway. ipRGCs contain melanopsin and drive circadian entrainment and the pupillary light reflex.

</details>

## Related Topics

- Previous: [The Retina](02-the-retina.md)
- Next: [The Thalamus and Primary Visual Cortex](04-the-thalamus-and-primary-visual-cortex.md)
- Related: [Vision chapter overview](../README.md)

## Source Notes

- Book: Introduction to Behavioral Neuroscience
- Local outline source: `introduction-behavioral-neuroscience.md`
- Official source URL: https://openstax.org/details/books/introduction-behavioral-neuroscience
- Content type: Original educational study guide based on OpenStax outline structure. Cell classes, synaptic mechanisms, and receptive-field logic reflect standard introductory neuroscience teaching; quantitative figures (e.g., ~1 million ganglion cells) are commonly taught reference values to verify against current texts.
- Last updated: 2026-08-16
