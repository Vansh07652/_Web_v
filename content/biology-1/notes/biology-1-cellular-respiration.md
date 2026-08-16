---
id: biology-1-cellular-respiration
title: "Cellular Respiration"
slug: cellular-respiration
subject: biology-1
subjectName: "Biology 1"
contentType: note
lesson: cellular-respiration
lessonNumber: 7
description: "Study notes covering Cellular Respiration." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - cellular
  - respiration
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-cd759f164948de21"
lastReviewed:
version: 1.0.0
---

# Cellular Respiration

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Cellular respiration is the set of pathways that harvest the chemical energy stored in **glucose** and package it into **ATP**, the molecule that powers nearly every job a cell does. It matters because muscle contraction, nerve signaling, active transport, and biosynthesis all run on the ATP these pathways supply. The topic builds directly on the enzyme and reaction concepts from Topic 06, and it sets up photosynthesis in Topic 08, where plants build the glucose that respiration later burns. In eukaryotes the later stages happen inside the **mitochondrion**, and its folded inner membrane is where the largest ATP harvest takes place.

### Glycolysis

Glycolysis is the first stage of respiration and the only one found in nearly all organisms, from bacteria to humans. It runs in the **cytosol**, the fluid of the cytoplasm, and needs no oxygen, so it works in aerobic and anaerobic cells. One six-carbon glucose is split through ten enzyme-catalyzed reactions into two three-carbon molecules of **pyruvate**. The pathway has an investment phase and a payoff phase. In the investment phase the cell spends two ATP to add phosphate groups to the sugar, which makes the molecule easier to cleave. In the payoff phase the reactions return four ATP, reduce two molecules of **NAD+** to **NADH**, and finish the two pyruvate. Key enzymes such as phosphofructokinase and pyruvate kinase move the steps forward, and phosphofructokinase acts as the throttle that paces the pathway. Because four made minus two spent leaves two, the net yield of glycolysis is exactly two ATP per glucose, plus two NADH that carry high-energy electrons for later stages. Glycolysis is ancient: it runs in the cytosol with no organelles involved, which is why even the simplest cells can use it.

> **Common Mistake:** Reporting gross ATP instead of net ATP from glycolysis. The pathway makes four ATP, but two ATP are invested up front to start it, so the net gain is two ATP per glucose, never four.

#### ELI-10

Think of glycolysis as sawing one long board into two shorter boards. The saw blade costs a little energy to run, so you spend two tokens before the board even splits. Once the board splits, the work pays back four tokens. After paying for the sawing, exactly two tokens stay in your pocket.

### Pyruvate Oxidation

Before the carbons of pyruvate can enter the cycle, each pyruvate must be trimmed into a smaller molecule the cycle accepts. That conversion is **pyruvate oxidation**, and it occurs in the mitochondrial matrix, the fluid inside the inner membrane. A multienzyme complex called pyruvate dehydrogenase removes one carbon from each pyruvate, and that carbon departs as **carbon dioxide**, the first CO2 of glucose breakdown. The remaining two-carbon acetyl group is attached to **coenzyme A**, forming **acetyl CoA**, while the electrons removed in the process reduce another NAD+ to NADH. For every glucose, two pyruvate are processed, so the totals for this step are two acetyl CoA, two CO2, and two NADH. No ATP is made here, and oxygen is not consumed at this point; the step simply trims the fuel and loads it onto a carrier. It is worth noting that the CO2 exhaled by animals is carbon that originally came from glucose, not from the oxygen they breathe.

> **Common Mistake:** Thinking the oxygen we breathe becomes the CO2 we exhale. The carbon dioxide released in pyruvate oxidation and the Krebs cycle is carbon broken off glucose; oxygen from the air ends up in water at the end of the electron transport chain, not in carbon dioxide.

#### ELI-10

Picture a delivery truck that is too long to enter the warehouse dock. The driver uncouples one trailer, leaves it behind, and hooks the shorter truck to a tow bar that pulls it inside. Each pyruvate drops one carbon as a puff of carbon dioxide and hitches onto a helper called acetyl CoA. Two pyruvate arrive for every glucose, so two puffs of carbon dioxide escape. The truck is shorter now, but it is still loaded with energy.

### Krebs Cycle

The **Krebs cycle**, also called the citric acid cycle, runs in the mitochondrial matrix and processes every acetyl group that pyruvate oxidation delivers. Each turn handles one acetyl CoA: the two-carbon acetyl group joins a four-carbon molecule called oxaloacetate, forming the six-carbon compound **citrate**. A series of reactions then strips carbons and electrons while regenerating oxaloacetate, so the wheel can spin again. Per turn the cycle releases two CO2, reduces three NAD+ to NADH, reduces one **FAD** to **FADH2**, and makes one ATP by substrate-level phosphorylation, a direct transfer of a phosphate group to ADP. Enzymes in the wheel include citrate synthase, isocitrate dehydrogenase, and succinate dehydrogenase, which generates FADH2 instead of NADH. Because each glucose yields two acetyl CoA, the cycle turns twice per glucose, for a total of two ATP, six NADH, two FADH2, and four CO2. Along with the two CO2 from pyruvate oxidation, those four CO2 account for all six carbons of the original glucose. The cycle captures most of its energy in NADH and FADH2 rather than in ATP made on the spot; the big payout waits for the electron transport chain.

> **Common Mistake:** Believing the Krebs cycle is where most ATP is produced. Only one ATP is made per turn, so the cycle contributes just two ATP per glucose; the majority of the ATP comes later, when NADH and FADH2 feed the electron transport chain.

#### ELI-10

Picture a carousel whose horses return to the starting gate after every ride. Each full spin of the ride earns the cell one coin, three refills of a strong battery called NADH, and one refill of a weaker battery called FADH2. Two puffs of carbon dioxide escape with every spin, like steam off the ride. The horses, like the helper molecule oxaloacetate, are never used up, so the ride can go around again and again. Glucose pays for two full spins, one for each acetyl CoA that arrives.

### Electron Transport Chain

The NADH and FADH2 built so far are cashed in at the **electron transport chain**, protein complexes embedded in the inner mitochondrial membrane. Each NADH drops two electrons into the chain, while each FADH2 enters later at a lower-energy point. The electrons hop from carrier to carrier, losing energy at each step, and three of the complexes use that energy to pump protons out of the matrix. Complexes I, III, and IV do the pumping, while complex II passes electrons along without pumping; small carriers such as ubiquinone and cytochrome c shuttle electrons between the big complexes. **Oxygen** is the final electron acceptor: it captures the spent electrons and combines with protons to form water, which is why every aerobic cell needs oxygen at the end. Without oxygen the chain jams, electrons back up, and the carriers remain reduced, so oxidative phosphorylation stops. The four stages of aerobic respiration are best compared by location, inputs, and outputs:

| Stage | Location | Main inputs | Carbon outputs | Energy captured |
| --- | --- | --- | --- | --- |
| Glycolysis | Cytosol | Glucose | Two pyruvate | 2 ATP, 2 NADH |
| Pyruvate oxidation | Matrix | Two pyruvate | Two CO2 | 2 NADH |
| Krebs cycle | Matrix | Two acetyl CoA | Four CO2 | 2 ATP, 6 NADH, 2 FADH2 |
| Electron transport chain | Inner membrane | NADH, FADH2, oxygen | None; water forms | About 26 to 28 ATP |

The flow of electrons follows a fixed sequence:

```text
1. NADH and FADH2 drop electrons into the chain.
2. Electrons hop from carrier to carrier, losing energy at every step.
3. The lost energy pumps protons out of the matrix.
4. Spent electrons reach oxygen, the final acceptor, and form water.
5. The proton gradient built along the way powers ATP production.
```

> **Common Mistake:** Treating oxygen as a food the cell eats. Oxygen is only the final electron acceptor; its single job is to receive electrons and form water, and when it is missing the chain backs up and ATP production from this stage stops.

#### ELI-10

Think of electrons as marbles rolling down a staircase. Every time a marble lands on a lower step, the bump of the landing does work, pushing a tiny pump that moves protons across the wall. Oxygen waits at the bottom to catch the marbles and keep the staircase clear. If the catcher disappears, marbles pile up at the top and the whole staircase stops rolling.

### Chemiosmosis

The proton gradient produced by the electron transport chain stores energy in two forms at once: a difference in proton concentration and a difference in electric charge across the inner membrane. Together these make up the **proton-motive force**, a kind of stored pressure. **Chemiosmosis** is the process that spends that pressure to build ATP: protons cannot cross the inner membrane on their own, so they must flow back into the matrix through the only open channels, the protein turbines called **ATP synthase**. As protons rush through each channel, the rotor of ATP synthase spins, and each rotation joins ADP and inorganic phosphate into ATP. The combined work of the electron transport chain and chemiosmosis is oxidative phosphorylation, and it supplies most of the cell's ATP. Each NADH that entered the chain ultimately supports about two and a half ATP, while each FADH2 supports about one and a half, because FADH2 enters at a lower-energy step and pumps fewer protons. Counting everything, one glucose yields about 30 to 32 ATP: 2 net from glycolysis, 2 from the Krebs cycle, and roughly 26 to 28 from oxidative phosphorylation. The proton flow through ATP synthase follows a simple sequence:

```text
1. The electron transport chain pumps protons out of the matrix.
2. Protons pile up outside, creating the proton-motive force.
3. Protons flow back through ATP synthase, the only open gate.
4. The flowing protons spin the rotor of the enzyme.
5. Each spin joins ADP and phosphate together into ATP.
```

> **Common Mistake:** Confusing which side of the membrane holds the protons. The chain pumps protons out of the matrix into the intermembrane space, so the outside is high in protons and the matrix is low; ATP synthase lets them run back down into the matrix.

#### ELI-10

Imagine a water wheel at a dam. The cell first pumps water uphill and stores it behind the wall, so it presses outward. When the gate opens, the water rushes back down and spins the wheel. Each spin of the wheel powers a little machine that snaps phosphate onto ADP to build ATP. No downhill water means no spinning wheel and no new ATP.

### Fermentation

When oxygen runs low, the electron transport chain stops, NADH stays reduced, and the pool of NAD+ drains because nothing accepts the electrons. Since glycolysis depends on NAD+ to keep working, the whole energy harvest would stall. **Fermentation** prevents that stall by regenerating NAD+: electrons of NADH are passed back to pyruvate or a molecule derived from it, and NAD+ is recycled for another round of glycolysis. Fermentation itself makes no ATP; the only ATP in anaerobic metabolism is the net two ATP per glucose that glycolysis yields. In **lactic acid fermentation**, which occurs in animal muscle during intense exercise and in many bacteria, pyruvate is reduced directly to **lactate**. In **alcohol fermentation**, carried out by yeast, pyruvate first loses CO2 and the remaining two-carbon molecule is reduced to **ethanol**. Both pathways are simpler and far less productive than aerobic respiration:

| Feature | Aerobic respiration | Fermentation |
| --- | --- | --- |
| Oxygen required | Yes | No |
| ATP per glucose | About 30 to 32 | 2 |
| NAD+ regeneration | Electron transport chain | Fermentation reactions |
| End products | CO2 and water | Lactate, or ethanol and CO2 |
| Site of ATP production | Multiple stages | Cytosol only |

> **Common Mistake:** Thinking fermentation is an ATP-producing pathway. Fermentation makes zero ATP directly; it only recycles NAD+ so glycolysis can keep earning its two ATP per glucose. The lactate or ethanol that results is a by-product of the recycling, not a fuel.

> **High-Yield:**
> - Net ATP per glucose is about 30 to 32 aerobically: two from glycolysis, two from the Krebs cycle, and roughly 26 to 28 from oxidative phosphorylation.
> - Each NADH is worth about two and a half ATP and each FADH2 about one and a half, because FADH2 enters the chain at a lower-energy step.
> - All six carbons of glucose end up as CO2: two released during pyruvate oxidation and four during the Krebs cycle.
> - Oxygen is the final electron acceptor; without it the chain jams and oxidative phosphorylation halts.
> - Fermentation regenerates NAD+ and keeps glycolysis running, but it caps the total yield at two ATP per glucose.

#### ELI-10

A runner out of breath is like a baker whose oven line has shut down. The big power plant stops, so the baker switches to hand kneading and reuses the same mixing bowl by washing it between batches. Fermentation washes the used battery, NADH, so it can be refilled and used again. The bakery stays open and earns two coins per batch, but the oven line would have earned many more.

### Quick Review

- Glycolysis runs in the cytosol, splits one glucose into two pyruvate, and nets two ATP and two NADH per glucose.
- Pyruvate oxidation converts each pyruvate to acetyl CoA in the matrix, releasing one CO2 per pyruvate and two CO2 per glucose.
- The Krebs cycle turns twice per glucose, releasing four CO2 and producing two ATP, six NADH, and two FADH2.
- The electron transport chain carries electrons from NADH and FADH2 to oxygen and pumps protons across the inner membrane.
- Chemiosmosis uses the proton gradient to spin ATP synthase and make most of the cell's ATP.
- Total aerobic yield is about 30 to 32 ATP per glucose, compared with only 2 ATP from fermentation.
- Fermentation regenerates NAD+ by reducing pyruvate to lactate or to ethanol and CO2.
- Without oxygen the chain jams, but glycolysis and fermentation can still keep a cell alive.

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
