---
id: biology-1-energy-and-metabolism-basics
title: "Energy And Metabolism Basics"
slug: energy-and-metabolism-basics
subject: biology-1
subjectName: "Biology 1"
contentType: note
lesson: energy-and-metabolism-basics
lessonNumber: 6
description: "Study notes covering Energy And Metabolism Basics." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - energy
  - metabolism
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-fef68424bbaa4d27"
lastReviewed:
version: 1.0.0
---

# Energy And Metabolism Basics

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Every living cell is a chemical engine, and this topic explains the currency and the rules of its operation. Here you learn why some reactions release energy, how the cell's energy currency ATP pays for work, and how enzymes control when those reactions run. This foundation connects backward to macromolecules and proteins and forward to cellular respiration, photosynthesis, and the metabolic pathways that use these principles at scale.

### Laws of Thermodynamics

Every chemical reaction involves energy changes, and cells obey the same rules as engines. The **first law of thermodynamics** states that energy can be transferred or converted from one form to another but never created or destroyed. The **second law of thermodynamics** states that every energy transfer increases the total **entropy** of the universe, the measure of disorder. A cell is an **open system**, exchanging both energy and matter with its surroundings, so it can build impressive order inside itself as long as it exports heat and waste to the outside; the disorder it exports always exceeds the order it builds. The total energy content of a system, including energy that cannot do work, is its **enthalpy**, and a reaction's direction reflects how its enthalpy and entropy changes combine.

Because each step of a **metabolic pathway** is itself a chemical reaction, thermodynamics applies step by step: a pathway survives only if the overall energy accounting of its steps is favorable, even when individual steps are not. Organisms do not defy the second law; they are temporary islands of order that pay for their maintenance by consuming energy from food or sunlight and releasing heat in return.

| Feature | First law | Second law |
| --- | --- | --- |
| Core claim | Energy is conserved | Entropy of the universe increases |
| What it governs | Transfers between energy forms | The direction of change and of order |
| Cell meaning | Inputs and outputs balance | Local order requires exported disorder |

> **Common Mistake:** Concluding that an ordered organism violates the second law. Cells are open systems that export heat and waste; the disorder they release to the surroundings always outweighs the order they create, so the universe's entropy still rises.

#### ELI-10

Imagine a snowball rolling down a hill. It spreads out, flattens, and gets messier as it rolls, and some of its motion turns into heat that warms the snow underneath. Nothing rolls it back to the top by itself. Energy is never lost, but order gets scattered and cannot be gathered again, and that is the second law at work.

### Free Energy

The **Gibbs free energy** of a system is the part of its energy that is available to do work at constant temperature and pressure. The change in free energy during a reaction, written ΔG, combines enthalpy, temperature, and entropy according to ΔG = ΔH − TΔS. A reaction is **exergonic** when ΔG is negative: it releases usable energy and is thermodynamically favorable. A reaction is **endergonic** when ΔG is positive: it absorbs energy and cannot run without an outside input of energy. Because ΔG depends only on the starting and ending states, not on the path between them, no catalyst or alternate route can change its value. Spontaneity also says nothing about speed: a spontaneous reaction can be virtually stalled by a high **activation energy**, which is why sugar in a bowl does not burst into flame even though burning sugar is highly exergonic.

When two reactions run together, their ΔG values add. A strongly exergonic reaction can therefore pay for an endergonic one as long as the sum stays negative, an arrangement called **energy coupling** that appears throughout metabolism, most importantly with ATP. Cells also exploit the fact that the total ΔG of a reaction is fixed: the complete oxidation of glucose releases the same free energy whether it happens in a flame or in small cell-controlled steps.

| Feature | Exergonic reaction | Endergonic reaction |
| --- | --- | --- |
| Sign of ΔG | Negative | Positive |
| Energy outcome | Releases usable energy | Absorbs usable energy |
| Spontaneous | Yes | No |
| Cell use | Drives work | Coupled to an energy source |

> **Common Mistake:** Reading "spontaneous" as "instantaneous". Iron rusting is spontaneous because ΔG is negative, yet it takes years; spontaneity fixes only the direction a reaction can run, and the activation energy fixes how fast.

#### ELI-10

A ball resting on a hilltop rolls down by itself once nudged, and it gives off its stored energy along the way. That is an exergonic reaction, which means it releases energy. Pushing the ball back uphill takes energy from you, and that is an endergonic reaction, which means it needs energy. Rolling down by itself does not mean the ball rolls fast, so a slow roll can still be completely downhill.

### ATP Structure and Coupling

**ATP** (adenosine triphosphate) is the cell's universal energy currency. Each molecule carries the nitrogenous base **adenine**, the five-carbon sugar **ribose**, and a chain of three phosphate groups joined by **phosphoanhydride bonds**. In **ATP hydrolysis**, water cleaves the terminal phosphate to yield **ADP** (adenosine diphosphate) and an inorganic phosphate group, releasing about 7.3 kcal per mole, or about 30.5 kJ per mole, of free energy under standard conditions. The energy is not stored inside the bond itself; it emerges because the products are more stable than the reactant, since the crowding of negatively charged phosphates is relieved and the products are better solvated and more disordered in water. ATP is well suited to its job because its phosphate-transfer potential sits in the middle of the scale, so it can accept phosphate from higher-energy donors and hand it to lower-energy acceptors.

In energy coupling, a favorable reaction such as ATP hydrolysis is tied to an unfavorable one so that the combined ΔG is negative. The first step of glycolysis provides the textbook case: ATP hands a phosphate to glucose, and the phosphorylation of glucose becomes favorable when paired with the hydrolysis. The ADP left behind is recharged by exergonic processes, so ATP circulates between its charged and discharged forms rather than accumulating. A typical cell keeps only seconds' worth of ATP and recycles it many thousands of times a day, so the molecule is a rechargeable transfer currency, while long-term energy is stockpiled as fats and glycogen.

```text
1. ATP hydrolysis splits ATP into ADP and a free phosphate group.
2. The step releases about 7.3 kcal per mole of free energy.
3. The phosphate is handed to glucose, storing that energy in the sugar.
4. The combined reaction is exergonic, so both steps proceed together.
```

> **Common Mistake:** Describing ATP as a large energy store. ATP holds only a small amount of energy per molecule and its pool turns over constantly; fats and glycogen are the long-term reserves, and ATP is the currency that transfers their energy to work.

#### ELI-10

Think of a rechargeable battery in a toy car. The car runs for a little while, the battery drains, and the car stops. You plug the battery in, it charges back up, and the car runs again. The cell's rechargeable battery is ATP, and it gets drained and recharged over and over, every single day.

### Enzyme Regulation and Inhibition

An **enzyme** is a protein that accelerates a specific reaction by lowering the activation energy needed to reach the transition state, without changing ΔG. The reactant is the **substrate**, which binds in a pocket called the **active site**; **induced fit** describes how the enzyme molds itself around the substrate, stressing bonds and stabilizing the transition state. Because ΔG is untouched, an enzyme speeds the forward and reverse reactions equally and never shifts the equilibrium; it simply lets the reaction arrive there sooner. A single enzyme molecule can convert many substrate molecules per second, and its speed depends on conditions, so enzymes work best near an optimal temperature and pH, where their folded shape is most stable.

Regulation matters because a pathway's products are useful only in the right amounts, and several layers of control exist. In **competitive inhibition**, an inhibitor that resembles the substrate occupies the active site, and raising the substrate concentration can outcompete it. In **noncompetitive inhibition**, the inhibitor binds away from the active site and distorts the enzyme's shape, so extra substrate does not help. Some inhibitors bind irreversibly, and many poisons and drugs act this way; **feedback inhibition** uses the end product of a pathway to dampen an early enzyme, preventing the cell from overproducing a molecule it already has enough of.

| Feature | Competitive inhibition | Noncompetitive inhibition |
| --- | --- | --- |
| Binding site | Active site | A separate site on the enzyme |
| Resembles the substrate | Yes | No |
| Blocked by raising substrate | Yes | No |
| Effect on enzyme | Blocks substrate access | Changes enzyme shape |

> **Common Mistake:** Believing an enzyme makes a reaction happen that could not otherwise occur. An enzyme only lowers the activation energy barrier, and the sign and size of ΔG are fixed by the reactants and products, so an endergonic reaction stays endergonic no matter which enzyme is present.

```text
1. The substrate binds to the active site.
2. The enzyme stresses bonds and stabilizes the transition state.
3. Products form and leave the active site.
4. The enzyme returns to its starting shape, ready for the next substrate.
```

#### ELI-10

Picture a water slide with a tall ladder. Kids can climb and slide by themselves, but the climb is slow and tiring. An attendant at the bottom helps each kid get onto the slide quickly and safely, without carrying anyone to the top. The line moves much faster with help. The attendant is the enzyme, and the climb is the activation energy, the energy needed to get the trip started.

### Allostery

**Allosteric regulation** is the most sophisticated layer of enzyme control: it switches enzymes on and off through changes in shape. A **regulatory molecule**, also called an effector, binds to an **allosteric site**, a pocket away from the active site, and the binding shifts the enzyme between an active and an inactive conformation. An **allosteric activator** stabilizes the active shape and speeds the enzyme up, while an **allosteric inhibitor** stabilizes the inactive shape and slows it down; neither one competes with the substrate for the active site. Many enzymes built from several subunits display **cooperativity**: the binding of one substrate molecule eases the binding of the next, so the reaction rate responds sharply rather than smoothly to substrate levels.

Feedback inhibition is usually allosteric in mechanism. The end product of a pathway binds the first committed enzyme of that pathway, closing the loop: when the product is abundant the pathway shuts down, and when it is consumed the enzyme springs back on. For example, the amino acid isoleucine is made by a five-step pathway, and isoleucine itself binds and inhibits the enzyme that catalyzes the first committed step, so the pathway runs only when isoleucine is scarce. This is why cells make amino acids, nucleotides, and other building blocks only as needed rather than all the time.

> **Common Mistake:** Confusing allosteric inhibition with competitive inhibition. A competitive inhibitor physically blocks the active site and can be outcompeted by substrate, whereas an allosteric inhibitor binds at a separate site, changes the enzyme's shape, and is not displaced by more substrate.

#### ELI-10

Imagine a door with a keyhole and a second chain lock that only a small lever can reach. The key turns the keyhole, but the chain still holds the door shut. Pulling the lever moves the chain away without touching the keyhole, and now the key works. The chain is a switch that changes whether the door can open, and the lever is the regulator molecule that flips it.

> **High-Yield:**
> - ΔG negative means exergonic and favorable; ΔG positive means endergonic and in need of energy input.
> - ATP hydrolysis releases about 7.3 kcal per mole, about 30.5 kJ per mole, under standard conditions.
> - Enzymes lower activation energy and never change ΔG.
> - Coupling works because ΔG values add, letting ATP hydrolysis pay for unfavorable reactions.
> - Feedback inhibition usually works allosterically on the first committed step of a pathway.

### Quick Review

- The first law says energy is conserved; the second law says entropy of the universe rises, so cells export heat and waste to keep their own order.
- Exergonic reactions have negative ΔG and release energy; endergonic reactions have positive ΔG and need an input of energy.
- Spontaneous means favorable in direction, not fast; activation energy governs speed.
- ATP hydrolysis releases about 7.3 kcal per mole, about 30.5 kJ per mole, under standard conditions.
- ATP is a rechargeable currency, while fats and glycogen are the long-term energy stores.
- Enzymes speed reactions by lowering activation energy and leave ΔG unchanged.
- Competitive inhibitors occupy the active site; noncompetitive inhibitors bind elsewhere and change the enzyme's shape.
- Allosteric activators and inhibitors, and feedback inhibition, tune enzyme activity to the cell's needs.

## Key terms

Key terms are emphasized and defined within the main notes.

## Important formulas or processes

See the formulas, procedures, and process blocks in the main notes where applicable.

## Common mistakes

See the labeled common-mistake callouts in the main notes where present.

## Review points

Use the quick-review or recap section in the main notes.

## Sources

Source citations from the original material are preserved in the main notes when supplied. The local-file provenance record is listed in the front matter.
