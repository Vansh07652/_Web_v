---
id: biology-1-photosynthesis
title: "Photosynthesis"
slug: photosynthesis
subject: biology-1
subjectName: "Biology 1"
contentType: note
lesson: photosynthesis
lessonNumber: 8
description: "Study notes covering Photosynthesis." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - photosynthesis
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-81d3155c567a004e"
lastReviewed:
version: 1.0.0
---

# Photosynthesis

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

**Photosynthesis** is the process by which plants, algae, and some bacteria turn sunlight, water, and carbon dioxide into sugar and oxygen, and it supplies nearly all of the energy that powers living systems. The **chloroplast** carries out the work in two linked stages: the **light dependent reactions** capture solar energy and bank it in the energy carriers **ATP** and **NADPH**, and the **Calvin cycle** spends those carriers to build sugar from carbon dioxide. This chapter pairs with cellular respiration, the topic that came just before it, which later releases the energy stored here; together the two processes drive the matter and energy cycles of every ecosystem.

### Light Dependent Reactions

The light dependent reactions take place in the **thylakoid** membranes inside the chloroplast. A chloroplast is stuffed with flattened sacs called thylakoids, a stack of sacs is a **granum**, and the fluid surrounding them is the **stroma**. Pigment molecules, mainly **chlorophyll a** plus accessory pigments, absorb **photons** of sunlight and pass the captured energy inward to the reaction centers. That energy drives two jobs: splitting water to supply electrons, and pumping protons across the thylakoid membrane to power ATP synthesis.

The splitting of water, called **photolysis**, breaks two water molecules into one molecule of oxygen gas, four protons, and four electrons, and it happens at the reaction center of **photosystem II**, the first photosystem in the chain. Later, **photosystem I** boosts the same electrons again so they have enough energy to reduce **NADP+** to NADPH. The oxygen released by photolysis is a byproduct that nearly all life breathes, and it escapes through the **stomata**, the pores of the leaf. As the excited electrons drop step by step along the **electron transport chain**, their energy pumps protons into the thylakoid lumen, and protons flowing back through **ATP synthase** convert the gradient into ATP.

The overall products of the light dependent reactions are ATP, NADPH, and oxygen. The ATP and NADPH are the energy-rich carriers delivered to the Calvin cycle; light has done its work once they are charged, and none of the sugar-building steps that follow needs light directly.

> **Common Mistake:** The oxygen that plants release does not come from carbon dioxide. It comes from water, which is split during photolysis. Trace the atoms carefully: the oxygen gas is a product of water splitting, not of carbon fixation.

The electron flow through the membrane follows a strict order:

```text
1. A photon strikes photosystem II, exciting its electrons.
2. Water is split to replace the lost electrons, releasing oxygen.
3. The excited electrons travel the electron transport chain, pumping protons into the thylakoid lumen.
4. Photosystem I re-excites the electrons, which reduce NADP+ to NADPH.
5. Protons flow back through ATP synthase, generating ATP.
```

#### ELI-10

A solar panel on a roof catches sunlight and sends electricity into the house. The light dependent reactions are the plant's solar panel, catching sunlight inside the leaf cells. The energy they collect is stored in the battery-like molecules ATP and NADPH, which the plant spends later to build sugar. The water the plant drinks gets split apart during this step, and the leftover oxygen is the gas we breathe.

### Photosystems

A **photosystem** is a cluster of pigments and proteins embedded in the thylakoid membrane. Its **antenna complex**, sometimes called a light harvesting complex, holds hundreds of chlorophyll molecules that absorb photons and funnel the excitation energy inward like a funnel gathering rain. The energy lands on the **reaction center**, a special pair of chlorophyll molecules that ejects excited electrons into the transport chain.

Photosynthesis uses two photosystems that work in sequence, each tuned to a different color of light. Photosystem II contains the reaction center **P680**, which absorbs best at 680 nm, and it acts first, splitting water and starting the electron flow. Photosystem I contains **P700**, which absorbs best at 700 nm, and it acts second, re-energizing the electrons so they can reduce NADP+ to NADPH. Because the electron receives two boosts, a diagram of the path looks like the letter Z, so the full flow is called the **Z scheme**.

| Feature | Photosystem II | Photosystem I |
| --- | --- | --- |
| Peak absorption | 680 nm | 700 nm |
| Reaction center | P680 | P700 |
| Position in the chain | First | Second |
| Main job | Split water, start electron flow | Re-energize electrons for NADPH |

> **Common Mistake:** The Roman numerals II and I are discovery numbers, not order numbers. Photosystem II runs first in the electron flow, and photosystem I runs second. Expect exam questions that try to reverse them.

#### ELI-10

Think of a relay race with two runners. The first runner catches a flash of sunlight and passes excited electrons to the chain. The second runner catches another flash and boosts the electrons to the finish line, where they help build NADPH. Each runner is tuned to a slightly different color of light, which is why the two photosystems absorb different wavelengths.

### Photophosphorylation

The proton gradient built during electron transport is the engine of ATP production. As electrons move down the electron transport chain, their energy pumps protons from the stroma into the thylakoid lumen, so protons end up far more concentrated inside the thylakoid than outside. The protons then flow back out through ATP synthase, a rotary enzyme embedded in the membrane, and each passage turns the rotor and attaches a phosphate group to ADP. This light-driven synthesis of ATP from ADP and phosphate is called **photophosphorylation**.

Two versions of the process exist. **Noncyclic photophosphorylation** runs through both photosystems, produces ATP and NADPH, splits water, and releases oxygen; it is the main route. **Cyclic photophosphorylation** involves only photosystem I, sends the electrons in a loop back to the transport chain, and produces ATP only, with no NADPH and no oxygen. The cell uses the cyclic route when it needs extra ATP to rebalance the ratio of ATP to NADPH that the Calvin cycle consumes.

> **Common Mistake:** Cyclic photophosphorylation does not release oxygen and does not make NADPH. It produces ATP only, by recycling electrons through photosystem I. Confusing its products with those of the noncyclic route is a classic error.

#### ELI-10

Picture a water wheel turning in a river. Sunlight acts as the pump that lifts water to the top of a hill, and the water then rushes downhill and spins the wheel. Each spin of the wheel builds one ATP molecule, the cell's energy currency. In the cyclic mode the water is pumped back up and spun again, while in the noncyclic mode some water is diverted to help make NADPH.

### Calvin Cycle

The Calvin cycle, also called the light independent reactions, runs in the **stroma**, the fluid that fills the chloroplast outside the thylakoids. It does not need light directly, but it depends entirely on the ATP and NADPH delivered by the light dependent reactions. The cycle has three phases: **carbon fixation**, reduction, and regeneration.

In carbon fixation, the enzyme **rubisco** joins carbon dioxide to **RuBP**, a five-carbon sugar, and the unstable six-carbon product splits immediately into two molecules of **3-PGA**, a three-carbon compound. Rubisco is one of the most abundant proteins on Earth because every plant depends on it. In reduction, ATP and NADPH convert each 3-PGA into **G3P**, a three-carbon sugar phosphate. In regeneration, most of the G3P is rearranged, with more ATP, to rebuild RuBP so the cycle can continue.

The arithmetic matters. One turn of the cycle fixes one carbon dioxide molecule, and three turns fix three, which yields one net G3P; the other five G3P molecules formed along the way are recycled into RuBP. Building one glucose requires two G3P, so six turns fix six carbon dioxide molecules. Those six turns consume 18 ATP and 12 NADPH, and each set of three turns consumes 9 ATP and 6 NADPH.

```text
1. Fixation: rubisco attaches carbon dioxide to RuBP, producing two molecules of 3-PGA.
2. Reduction: ATP and NADPH convert 3-PGA into G3P.
3. Regeneration: five of every six G3P are rebuilt into RuBP using more ATP.
4. Net gain: every three turns release one spare G3P, and every six turns build one glucose.
```

> **Common Mistake:** Three turns of the Calvin cycle do not produce a glucose molecule. They produce one net G3P, and two G3P, meaning six turns, are required for one glucose. The cycle also runs fine in daylight; "dark reactions" is only a name, not a schedule.

#### ELI-10

Imagine a cookie factory with a machine on a conveyor belt. Each turn of the machine takes in one cookie ingredient and then reshapes itself back to the starting form. Every three turns, the machine sets aside one spare cookie that the plant keeps. The plant snaps two spare cookies together to make one whole glucose sugar. The machine is rebuilt each time, which is why the cycle can repeat endlessly.

### C3 C4 and CAM

Plants that use only rubisco to fix carbon dioxide directly into 3-PGA are called **C3 plants**, because their first stable product has three carbons; rice, wheat, and soybeans are C3 plants. Their weakness is **photorespiration**: on hot, dry days the stomata close to save water, carbon dioxide levels inside the leaf fall, and rubisco begins to fix oxygen instead of carbon dioxide, wasting ATP and releasing already-fixed carbon. Rubisco cannot tell the two gases apart at low carbon dioxide levels, and photorespiration is the cost of that confusion.

**C4 plants** solved the problem with spatial separation. In their **mesophyll** cells, the enzyme **PEP carboxylase** grabs carbon dioxide and attaches it to a three-carbon acceptor, forming a four-carbon compound such as **oxaloacetate**. The four-carbon acid then travels into **bundle sheath cells**, where it releases carbon dioxide right beside rubisco, keeping carbon dioxide concentrated and photorespiration suppressed. Corn, sugarcane, and sorghum are C4 plants.

**CAM plants** solved the same problem with temporal separation. **Crassulacean acid metabolism** keeps the stomata closed during the day and open at night, when the air is cool and water loss is low. At night the plant fixes carbon dioxide into **malate**, which is stored in the vacuole; during the day the malate releases its carbon dioxide to the Calvin cycle while the stomata stay shut. Cacti, agaves, and pineapple are CAM plants.

| Feature | C3 plants | C4 plants | CAM plants |
| --- | --- | --- | --- |
| First fixed product | 3-carbon 3-PGA | 4-carbon acid | 4-carbon malate at night |
| Capture versus use | Same cells, same time | Mesophyll then bundle sheath | Night capture, day use |
| Photorespiration | High in heat and drought | Low | Very low |
| Examples | Rice, wheat, soybean | Corn, sugarcane | Cactus, pineapple |

> **Common Mistake:** C4 and CAM are not extra ways to make sugar. Both still run the Calvin cycle with rubisco; they differ only in how carbon dioxide reaches rubisco, by space in C4 plants and by time in CAM plants. The rubisco step itself is unchanged.

#### ELI-10

Imagine trying to shop for groceries while holding your breath. C3 plants grab carbon dioxide through open pores and use it right away, but on hot dry days they close the pores to save water and the carbon dioxide runs out. C4 plants fix the problem by stuffing the gas into a lunchbox in the outer layer and opening the lunchbox later in a private inner room. CAM plants pack the lunchbox at night, when the air is cool, and then eat all day long without opening a pore.

> **High-Yield:**
> - Oxygen released by photosynthesis comes from water, not carbon dioxide.
> - Photosystem II absorbs 680 nm light and runs first; photosystem I absorbs 700 nm and runs second.
> - Three Calvin cycle turns fix three carbon dioxide molecules and yield one net G3P.
> - Each glucose built needs 6 carbon dioxide, 18 ATP, and 12 NADPH.
> - C4 plants separate carbon dioxide capture in space and CAM plants in time; both suppress photorespiration.

### Quick Review

- Photosynthesis converts light energy into chemical energy stored in sugar, splitting water and releasing oxygen as a byproduct.
- The light dependent reactions run in the thylakoid membranes and produce ATP, NADPH, and oxygen.
- Photosystem II with P680 absorbs 680 nm light and acts first; photosystem I with P700 absorbs 700 nm light and acts second.
- Protons flowing back across the thylakoid membrane through ATP synthase drive photophosphorylation.
- The Calvin cycle runs in the stroma and uses ATP and NADPH to fix carbon dioxide into G3P.
- Three Calvin cycle turns yield one net G3P; six turns and six carbon dioxide build one glucose.
- C4 plants separate carbon dioxide capture in space and CAM plants in time, both to suppress photorespiration.

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
