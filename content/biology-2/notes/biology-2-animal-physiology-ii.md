---
id: biology-2-animal-physiology-ii
title: "Animal Physiology Ii"
slug: animal-physiology-ii
subject: biology-2
subjectName: "Biology 2"
contentType: note
lesson: animal-physiology-ii
lessonNumber: 11
description: "Study notes covering Animal Physiology Ii." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - animal
  - physiology
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-2b9bde13955fe1ac"
lastReviewed:
version: 1.0.0
---

# Animal Physiology Ii

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Animals survive by sensing their surroundings and responding to them, and two great communication systems make that possible: the nervous system, which is fast and precise, and the endocrine system, which is slower and longer lasting. This chapter explains how neurons carry electrical signals, how synapses pass them between cells, how the nervous system is organized into central and peripheral parts, and how hormones and the immune system regulate and defend the body. It builds directly on Topic 10, whose circulatory and digestive systems are the very organs that these signals control and coordinate.

### Neuron Structure

Neurons are the signaling cells of the nervous system, each built to receive, carry, and hand off a message. The **dendrites** are branched extensions that receive signals from other cells and carry them toward the **cell body**, or soma, which holds the nucleus. A single long **axon** carries the signal away from the cell body, and its terminal branches pass it to the next cell. Many axons are wrapped in a fatty **myelin sheath** made by supporting glial cells; the sheath insulates the axon and dramatically speeds up signal conduction. Gaps in the sheath, called **nodes of Ranvier**, let the signal jump from node to node instead of crawling along the whole axon. The inside of a resting neuron is negatively charged relative to the outside, a difference called the **resting membrane potential** of about -70 mV, maintained by the sodium-potassium pump and by channels that keep sodium and potassium unevenly distributed.

> **Common Mistake:** Students often picture the signal as electricity flowing through the watery inside of the axon like current in a wire. In fact the signal is a wave of ion movement across the membrane itself, and the axon interior only supplies ions to the gates. The myelin sheath does not block the signal, it speeds it up by letting the wave jump between the nodes of Ranvier.

#### ELI-10

A neuron is like a walkie-talkie with a long antenna. The dendrites are the speaker that catches incoming sound, the cell body is the battery and the controls, and the axon is the antenna that sends your message out. The myelin sheath is like the rubber coating on a wire, which keeps the signal strong so it does not leak away. The signal travels along the surface of the antenna, not through the middle of it. That is how a message from your toe reaches your brain in a split second.

### Action Potentials

An **action potential** is a brief, all-or-none spike of voltage that travels down an axon. At rest the membrane sits near -70 mV, with sodium concentrated outside the cell and potassium inside. If a stimulus depolarizes the membrane enough to reach **threshold**, about -55 mV, voltage-gated sodium channels snap open, sodium ions rush in, and this influx **depolarizes** the membrane to about +30 mV, a swing of roughly 100 mV. Sodium channels then inactivate, voltage-gated potassium channels open, and potassium flowing outward **repolarizes** the membrane, which briefly dips below rest before settling back to -70 mV. Because the event is all-or-none, a subthreshold stimulus produces nothing and any stronger stimulus produces the same full spike; the brain reads stimulus strength from how often spikes fire, not from spike size. After a spike the neuron enters a **refractory period** during which it cannot fire again, which spaces out the spikes and ensures the wave cannot travel backward.

```text
1. Resting state: membrane at about -70 mV with gates closed.
2. A stimulus pushes the membrane to threshold at about -55 mV.
3. Voltage-gated sodium channels open, sodium floods in, and the membrane depolarizes.
4. Sodium channels inactivate, potassium channels open, and potassium leaves, repolarizing the membrane.
5. The membrane settles back to the resting potential, ready for the next spike.
```

> **Common Mistake:** The most common mix-up is the direction of the ions. Depolarization is driven by sodium entering the cell, and repolarization is driven by potassium leaving the cell. Reversing these two ions turns the whole mechanism upside down, so always check which ion moves and when.

#### ELI-10

An action potential is like popping a bubble of bubble wrap. You push with a finger, but nothing happens until you press hard enough, and then the whole bubble pops at once. A weak push gives no pop and a strong push gives the same single pop, so every pop is exactly the same size. After a bubble pops you cannot pop that same spot again right away. The same rules explain why nerve signals are all or nothing and why they travel in only one direction.

### Synapses

A **synapse** is the junction where a neuron hands its message to the next cell, and the handoff is usually chemical. The sending cell is the **presynaptic neuron**, the receiving cell is the **postsynaptic neuron**, and between them lies a narrow gap called the **synaptic cleft**. When the action potential arrives at the axon terminal, vesicles fuse with the membrane and release **neurotransmitters** into the cleft. They diffuse across the gap and bind to **receptors** on the postsynaptic membrane, opening ion channels that excite or inhibit the receiving cell. The classic transmitter is **acetylcholine**, which triggers skeletal muscle contraction at the neuromuscular junction. The signal ends quickly because enzymes break the transmitter down or reuptake pumps pull it back into the presynaptic cell, and this rapid cleanup is why you can contract and relax a muscle many times per second. Many drugs and poisons work here: some block receptors, some mimic transmitters, and some block the cleanup enzymes so the signal persists.

```text
1. An action potential arrives at the axon terminal.
2. Vesicles fuse with the membrane and release neurotransmitter into the synaptic cleft.
3. Neurotransmitter diffuses across the cleft and binds receptors on the postsynaptic cell.
4. Receptors open ion channels, generating a new electrical change in the receiving cell.
5. Enzymes or reuptake pumps remove the neurotransmitter, ending the signal.
```

> **Common Mistake:** Students often imagine the signal crossing the synaptic cleft as a spark jumping a gap. It cannot, because the gap is not insulated and the electrical wave fades before it reaches the other side. The signal crosses as a chemical, and the electrical event on the far side is a fresh signal triggered by the neurotransmitter, not a continuation of the first one.

#### ELI-10

A synapse is like two friends talking across a narrow hallway. The first friend cannot throw an electric wire across the gap, so she writes a note, slips it through a mail slot, and the second friend reads it. The note is the neurotransmitter and the mail slot is the gap between the cells. After the message is read, the note must be shredded so the friend does not keep answering it. That is why every message is short and clear and only the person it was addressed to reacts.

### Nervous System Organization

The nervous system is organized in two great tiers. The **central nervous system (CNS)**, the brain and spinal cord, processes information, and the **peripheral nervous system (PNS)**, all the nerves outside the CNS, carries signals to and from it. Information flows in two directions: **sensory (afferent) neurons** bring signals from sense organs into the CNS, and **motor (efferent) neurons** carry commands out to muscles and glands. The motor side splits again into the **somatic nervous system**, which controls voluntary skeletal muscle, and the **autonomic nervous system**, which runs involuntary functions such as heart rate, breathing, and digestion. The autonomic system has two opposing branches: the **sympathetic division**, which prepares the body for fight-or-flight by speeding the heart and redirecting blood to muscles, and the **parasympathetic division**, which promotes rest-and-digest activities such as slowing the heart.

| Division | Signal direction | Main job |
| --- | --- | --- |
| Sensory (afferent) | Into the CNS | Carries information from sense organs |
| Motor (efferent) | Out of the CNS | Carries commands to muscles and glands |
| Somatic | Voluntary | Controls skeletal muscle |
| Autonomic | Involuntary | Regulates heart rate, breathing, digestion |
| Sympathetic | Fight or flight | Speeds heart, dilates airways, mobilizes energy |
| Parasympathetic | Rest and digest | Slows heart, promotes digestion and recovery |

#### ELI-10

Your nervous system is like a home security system with two parts. The control room with the cameras is the brain and spinal cord, and the wires running through the walls are the peripheral nerves. Sensors on the windows send reports to the control room, and the control room sends orders back to the locks and the alarms. Some orders are things you choose to do, like opening a door. Other orders run all day and night on their own, like keeping the freezer cold.

### Endocrine Glands and Hormone Mechanisms

The **endocrine system** is the body's slower chemical signaling network, sending **hormones** through the blood to target cells that carry matching receptors. The major players are the **pituitary**, the master gland that directs other glands; the **thyroid**, which releases **thyroid hormone** to set the basal metabolic rate; the **adrenal glands**, whose medulla releases **epinephrine** for rapid fight-or-flight responses and whose cortex releases **cortisol** for sustained stress; and the **pancreas**, which uses **insulin** and **glucagon** to keep blood glucose in a narrow range. Hormones act through two basic mechanisms. **Peptide hormones** such as insulin are water soluble, cannot cross the lipid membrane, and bind surface receptors that trigger intracellular messenger cascades. **Steroid hormones** such as cortisol are lipid soluble, slip through the membrane, and bind receptors inside the cell that directly alter gene expression. Most endocrine axes run on **negative feedback**, in which a hormone's effect suppresses its own release: high blood glucose triggers insulin, and the resulting drop in glucose shuts insulin secretion down.

| Gland | Hormone | Main effect |
| --- | --- | --- |
| Pituitary | Growth hormone | Stimulates growth and controls other glands |
| Thyroid | Thyroid hormone | Sets basal metabolic rate |
| Adrenal medulla | Epinephrine | Fight-or-flight response |
| Adrenal cortex | Cortisol | Sustained stress response, raises blood glucose |
| Pancreas | Insulin | Lowers blood glucose |
| Pancreas | Glucagon | Raises blood glucose |

> **Common Mistake:** Students constantly reverse insulin and glucagon. Insulin is secreted when blood glucose is high and lowers it by making cells take up glucose. Glucagon is secreted when blood glucose is low and raises it by making the liver release stored glucose, so remember that insulin fixes the high and glucagon fixes the low.

#### ELI-10

Hormones are like letters sent through the blood instead of the postal service. A gland writes the letter, drops it into the bloodstream, and it floats past every cell in the body. Only cells with the right mailbox, meaning the right receptor, open and read the message. A water-loving hormone like insulin cannot slip through the cell wall, so it knocks on the door and the cell answers from inside. A fatty hormone like cortisol slides right through the wall and talks directly to the cell's command center.

### Innate and Adaptive Immunity

The immune system defends the body in two coordinated layers. **Innate immunity** is the fast, general first line of defense: physical barriers such as skin and mucus, **phagocytes** that swallow invaders, inflammation that walls off infection, and antimicrobial proteins such as **complement**. It acts within hours and treats every invader the same way. **Adaptive immunity** is slower on first exposure but specific and memorable, carried out by **B cells**, which mature in bone marrow and secrete **antibodies**, and **T cells**, which mature in the thymus and kill infected cells. Antibodies bind to **antigens**, the molecular markers on pathogens, and tag them for destruction. Some B and T cells become long-lived **memory cells**, so a second encounter with the same pathogen produces a faster and stronger response. **Vaccination** exploits this memory by presenting a harmless piece of a pathogen, such as a killed or weakened microbe, so the body builds protection without suffering the disease. **MHC (major histocompatibility complex)** proteins carry antigen fragments to the cell surface, which is how T cells recognize infected cells and how immune cells present antigens to one another.

| Feature | Innate immunity | Adaptive immunity |
| --- | --- | --- |
| Speed | Minutes to hours | Days on first exposure |
| Specificity | Nonspecific, general | Specific to one antigen |
| Memory | None | Memory cells give lasting protection |
| Main players | Skin, phagocytes, complement | B cells, T cells, antibodies |

> **Common Mistake:** Vaccination is often misunderstood as deliberately catching a mild version of the illness. A vaccine cannot give you the disease, because it uses a killed, weakened, or partial pathogen that cannot multiply enough to make you sick. What it delivers is the antigen, so your immune system builds memory cells without paying the price of a real infection.

#### ELI-10

Immunity is like a castle with two security systems. The first is a fast wall-and-sentry system that stops anything unfamiliar, day or night, whether it is a thief or a stray cat. The second is a file of wanted posters, and the first time a particular burglar appears the guards take days to learn his face, but they keep his file forever. The next time he tries to break in, the guards spot him at once and stop him quickly. A vaccine is like showing the guards a drawing of a future burglar before he ever comes, so they are ready before the first real break-in.

> **High-Yield:**
> - The action potential is all or none: threshold sits near -55 mV, sodium influx depolarizes, and potassium efflux repolarizes.
> - Synapses are chemical handoffs: neurotransmitter crosses the cleft and binds receptors on the postsynaptic cell.
> - Insulin lowers blood glucose, glucagon raises it, and cortisol handles sustained stress.
> - Innate immunity is fast and nonspecific, while adaptive immunity is slower at first but remembers what it has seen.
> - Vaccination works by building memory cells against a harmless antigen.

### Quick Review

- Neurons have dendrites for receiving, an axon for sending, and a myelin sheath that speeds conduction.
- The resting membrane potential is about -70 mV, and threshold is about -55 mV.
- Action potentials are all-or-none spikes of about 100 mV, driven by sodium influx and ended by potassium efflux.
- The refractory period keeps spikes separate and ensures one-way travel down the axon.
- Synaptic transmission is chemical, with acetylcholine the classic neurotransmitter at muscle junctions.
- The CNS is the brain and spinal cord, and the PNS splits into sensory, motor, somatic, and autonomic divisions.
- Endocrine glands use hormones with negative feedback, and peptide and steroid hormones act by different mechanisms.
- Innate immunity is fast and general, while B cells, T cells, antibodies, and memory cells make adaptive immunity specific and durable.

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
