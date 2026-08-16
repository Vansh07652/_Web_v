---
id: genetics-gene-regulation-prokaryotes
title: "Gene Regulation Prokaryotes"
slug: gene-regulation-prokaryotes
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: gene-regulation-prokaryotes
lessonNumber: 11
description: "Study notes covering Gene Regulation Prokaryotes." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - gene
  - regulation
  - prokaryotes
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-aef7c9f5a6e60d26"
lastReviewed:
version: 1.0.0
---

# Gene Regulation Prokaryotes

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Bacteria tune gene expression with a small set of devices: repressors, activators, RNA switches, and signaling molecules. This chapter traces each device through its classic bacterial example, from the Jacob and Monod operon model to the CRISPR immune system. Keep the direction of every control straight: inducible versus repressible, negative versus positive, cis-acting versus trans-acting.

### The Operon Concept from Jacob and Monod

Francois Jacob and Jacques Monod invented the **operon** concept to explain how Escherichia coli switches lactose metabolism on and off: genes transcribed together from one promoter into a single polycistronic messenger RNA. The enzyme-coding genes are the **structural genes**; the RNA polymerase entry site is the **promoter**; the repressor binding site is the **operator**. A separate **regulatory gene**, *lacI*, encodes the **Lac repressor**, which keeps the operon off until the inducer arrives. The repressor diffuses through the cell, so it acts **in trans** on every operon copy, while the operator controls only its own DNA molecule and acts **in cis**.

#### ELI-10
Think of an operon as a row of factory machines that all share one switch. A repressor is the worker who holds the switch off until a small messenger tells him to let go. Jacob and Monod discovered this arrangement by watching bacteria eat milk sugar.

### lac Operon Negative Inducible Control

The lac operon is **inducible**: off by default, switched on by the **inducer**. The structural genes are *lacZ*, encoding **beta galactosidase**, which cleaves lactose; *lacY*, encoding **lactose permease**, the transporter; and *lacA*, encoding **beta galactoside transacetylase**. The Lac repressor is made continuously, so without lactose only a trickle of enzyme appears. When lactose arrives, beta galactosidase converts a little of it into **allolactose**, the inducer that forces the repressor off the operator. Because a repressor must be removed, this is **negative control**; the system is **negative inducible**.

#### ELI-10
The lac operon is like a door that stays locked unless the sugar lactose is nearby. A guard protein holds the door shut, and lactose turns into a small key that makes the guard let go. When the sugar is gone, the guard locks the door again.

### CAP cAMP Positive Control and Catabolite Repression

The Lac repressor is only half the story; the rest decides whether the cell wants lactose. E. coli prefers **glucose**, a phenomenon called **catabolite repression**, visible in **diauxic growth**: with both sugars present, the culture grows on glucose first, pauses, then grows on lactose. Glucose keeps **cAMP** (made by **adenylate cyclase**, product of *cyaA*) low; its absence lets it rise. **CAP**, the **catabolite activator protein** (product of *crp*), binds DNA only with cAMP bound and bends the lac promoter so RNA polymerase opens it efficiently. This **positive control** makes lac an AND gate: lactose present and glucose absent.

> **Common Mistake:** Treating CAP and the Lac repressor as acting in the same direction. The repressor is an off switch that must be released; CAP is a booster that must be engaged. CAP does not turn the operon on without lactose, and the repressor has nothing to do with glucose sensing.

#### ELI-10
The cell needs two things to open its lactose door: the guard must leave, and the hinge must be oiled. The guard leaves when lactose is present, and the hinge is oiled by a helper protein only after the cell has eaten all its glucose. Both jobs must be done, or the door stays shut.

### lac Operon Mutant Analysis

Mutant analysis established the model. A *lacZ-* mutant makes no beta galactosidase and cannot use lactose; a *lacY-* mutant cannot import it. A *lacI-* mutant has no functional repressor, so its operon is **constitutive**. The **superrepressor** allele *lacI^s* encodes a repressor that cannot bind the inducer, so the operon is permanently off. The **operator-constitutive** allele *lacO^c* destroys the operator, so the operon is constitutive as well. A **partial diploid**, with a second operon copy on an F prime plasmid, separates the classes: a functional *lacI+* rescues both copies (the repressor is trans-acting), while *lacO^c* rescues only the operon on the same DNA molecule. So *lacI+* is dominant over *lacI-*, *lacI^s* over *lacI+*, and *lacO^c* is cis dominant.

| Genotype | Beta galactosidase without lactose | Beta galactosidase with lactose |
| --- | --- | --- |
| lacI+ lacZ+ (wild type) | low | high |
| lacI- lacZ+ | high | high |
| lacI^s lacZ+ | low | low |
| lacO^c lacZ+ | high | high |

#### ELI-10
Mutants are bacteria with a broken part, and the broken part shows in the phenotype, like a light switch stuck on. If the guard protein or the lock itself is broken, the lactose door stands open all the time. Giving the cell a second healthy guard fixes the first case but never the second.

### trp Operon Negative Repressible Control

The trp operon builds tryptophan, so its logic mirrors lac. The structural genes *trpE*, *trpD*, *trpC*, *trpB*, and *trpA* encode the enzymes of tryptophan biosynthesis, including **tryptophan synthase** (from *trpA*); *trpL* encodes the **leader peptide** used in attenuation. The **trp repressor** cannot bind DNA until it picks up tryptophan, which acts as the **corepressor**. With tryptophan plentiful, the repressor corepressor complex blocks the operator; with tryptophan scarce, the repressor falls off and the operon runs. Because the default is on and the signal turns it off, the trp operon is **negative repressible**.

| Feature | lac operon | trp operon |
| --- | --- | --- |
| Type of control | negative inducible | negative repressible |
| Default state | off | on |
| Regulatory protein | LacI repressor | trp repressor |
| Signal molecule | allolactose, the inducer | tryptophan, the corepressor |
| Effect of the signal | inactivates the repressor | activates the repressor |

> **Common Mistake:** Confusing inducible with repressible systems. In an inducible system the default is off and the signal turns it on; in a repressible system the default is on and the signal turns it off. Saying that tryptophan induces the trp operon gets the direction backwards.

#### ELI-10
The trp operon is like an automatic water heater that runs until the tank is full. When tryptophan is abundant, it sticks to the cell's float protein, and the float stops the heater. When tryptophan runs low, the float lets go and the heater runs again.

### Attenuation

Repression controls whether RNA polymerase starts the trp operon; **attenuation** controls whether a started transcript continues. The *trpL* leader message folds into four paired regions as it is made. Region 1 encodes the leader peptide, 14 amino acids long with two tryptophan codons in a row, a 2:14 ratio of tryptophan codons to total codons (sums to 16). Regions 3 and 4 pair into a **terminator** hairpin that stops RNA polymerase; regions 2 and 3 pair instead into an **antiterminator** that lets it continue. Because transcription and translation are coupled, the ribosome's progress through region 1 picks the winner. Plentiful tryptophan lets the ribosome rush past the tryptophan codons and cover region 2, so 3 pairs with 4 and transcription stops early; scarce tryptophan stalls the ribosome, so 2 pairs with 3 and the full message is made.

> **Common Mistake:** Treating attenuation as a direct tryptophan sensor. Attenuation reads ribosome speed on the leader message, responding to how readily tryptophan reaches translation, not to the tryptophan concentration directly. Repression and attenuation act on different steps: initiation versus elongation.

#### ELI-10
Attenuation is like a photocopier that stops printing when the paper tray is full. The machine starts copying the message, but first it reads a short test line that tells it how easy it is to find the building block tryptophan. If the building block is easy to find, the machine stops early; if it is hard to find, the machine prints the whole thing.

### ara Operon

The ara operon lets E. coli feed on arabinose and shows one protein doing two jobs. **AraC** (product of *araC*) is both repressor and activator. Without arabinose, AraC loops the DNA, binding a far upstream site and the promoter region at once, silencing transcription. With arabinose, AraC changes shape, releases the loop, and recruits RNA polymerase as an activator. The structural genes *araB*, *araA*, and *araD* encode ribulokinase, **L arabinose isomerase**, and **L ribulose 5 phosphate 4 epimerase**. Like lac, ara needs the CAP cAMP complex for full activation.

#### ELI-10
The ara operon is like a worker who is both the guard and the key holder of a machine. When the sugar arabinose is missing, the worker folds the wiring into a loop so the machine cannot run. When arabinose appears, the worker unfolds the wiring and plugs the machine in.

### Riboswitches

A **riboswitch** is a regulatory device made entirely of RNA. It sits in the leader region of a messenger RNA and folds into an **aptamer** domain that binds a small molecule, plus an **expression platform** that controls transcription or translation. When the metabolite is scarce, the permissive shape forms and the gene is expressed; when abundant, binding refolds the RNA into the blocking shape. In Bacillus subtilis, a riboswitch that binds **thiamine pyrophosphate** regulates thiamine biosynthesis genes. Because the switch is part of the message itself, it reacts in seconds and needs no new protein.

#### ELI-10
A riboswitch is a piece of the message itself that folds like a hinge and checks for a special chemical. If the chemical is already around, the hinge swings shut and hides the message from the cell's reading machine. If the chemical is missing, the hinge stays open and the message is read.

### Small Regulatory RNAs

**Small regulatory RNAs** (sRNAs) code for no protein; they regulate by base pairing with other RNAs. Antisense RNAs are made opposite a target gene and pair perfectly with it. Trans-acting sRNAs pair through short imperfect matches, usually with a chaperone protein's help. Pairing can block translation by covering the ribosome binding site, trigger degradation of the target message, or protect it and boost expression. E. coli uses such regulators in stress and metabolism circuits, for example to tune iron management. Small RNAs are cheap, act immediately, and degrade quickly.

#### ELI-10
A small regulatory RNA is a tiny message that acts like a sticky note over part of a recipe. When the cell wants to slow one product fast, it makes the note, which hides a step of the recipe so it cannot be followed. The cell can pull the note off later to change its mind.

### Stringent Response

Running out of amino acids triggers the **stringent response**, a global survival shift. Starved ribosomes stall with an empty slot waiting for a loaded transfer RNA, which activates an enzyme, the stringent factor, that makes the **alarmone** ppGpp. ppGpp binds RNA polymerase and changes its promoter preferences: it turns down the ribosomal RNA and transfer RNA genes, the cell's biggest expense, and turns up amino acid biosynthesis genes. Growth slows until amino acids return. One signal molecule re-tunes hundreds of genes at once.

#### ELI-10
The stringent response is the cell's emergency drill when the cafeteria runs out of food. The cell rings an alarm by making a special signal called ppGpp, which slows the machines that build new cell parts and speeds up the machines that cook food from scratch. When the cafeteria is restocked, the alarm stops and normal life resumes.

### Quorum Sensing

**Quorum sensing** lets a bacterial population act as one organism. Each cell releases and detects a small signaling molecule, the **autoinducer**. In dilute seawater it diffuses away, but in a crowded place it accumulates past a **threshold concentration**, and a regulatory protein then flips on a new set of genes in every cell at once. Vibrio fischeri, a marine bacterium that colonizes the light organ of the bobtail squid, stays dark alone but turns on bioluminescence genes when packed into the organ. Positive feedback, in which the autoinducer turns on its own synthesis, makes the switch sharp.

#### ELI-10
Quorum sensing is how bacteria take a vote by counting themselves. Every bacterium leaks a little perfume into the water, and when many bacteria are together the perfume gets strong enough that all of them smell it at once. A bacterium that can glow turns on its light only when it is sure the crowd is big enough to matter.

### CRISPR Cas as a Bacterial Defense System

**CRISPR** (clustered regularly interspaced short palindromic repeats) is an adaptive immune system in many bacteria and archaea, with a heritable memory of past viruses. The locus is an array of short repeats separated by **spacers**, DNA memories of past invaders. Defense has three stages. In **adaptation**, a capture complex inserts a new spacer. In expression, the array is transcribed into one long RNA cut into short **crRNAs**, each carrying one spacer; the *cas9* gene, listed in the gene index as bacterial from Streptococcus pyogenes, encodes the **Cas9** endonuclease, and a helper RNA joins the crRNA into the **guide RNA** complex. In **interference**, the guide pairs with the matching sequence in the invader's DNA and Cas9 cuts both strands. A short motif called the **PAM** marks invader DNA, so the cell never cuts its own array. Immunity is inherited with the spacers. Genome editing with Cas9 is covered elsewhere; here the system is purely a defense.

#### ELI-10
CRISPR is a bacterium's wanted poster collection. When a virus attacks, the cell saves a piece of the virus's code in its own DNA as a memory, and if the same virus comes again a cutting machine follows a small guide made from that memory to chop the virus apart. The children of the cell inherit the posters, so the whole family is safer.

### Worked Example lac Operon Mutant Phenotype

**Problem:** A partial diploid has the genotype *lacI- lacO+ lacZ- lacY+* on the chromosome and *lacI+ lacO+ lacZ+ lacY-* on the F prime. Predict whether beta galactosidase is made without lactose, and whether the strain is inducible.

**Given:** *lacI* encodes the Lac repressor, which acts in trans on any operator. An operator acts only in cis.

**Plan:** All beta galactosidase comes from the *lacZ+* allele on the F prime, since the chromosome's *lacZ-* allele makes none. The F prime also carries *lacI+* and *lacO+*, so a functional repressor binds its operator and blocks transcription until allolactose releases it.

**Solution:** Without lactose, the repressor occupies the F prime operator and activity is about 1 unit. With 1 mM lactose, activity rises to about 100 units, which is 100 divided by 1, a 100-fold induction.

**Answer:** The strain is inducible: activity rises from about 1 unit to about 100 units, a 100-fold induction.

### Worked Example Quorum Sensing Threshold Timing

**Problem:** A flask holds 1 liter of seawater with 10^8 cells per mL of a quorum sensing bacterium. Each cell releases 2 x 10^-17 moles of autoinducer per hour, and bioluminescence turns on at a threshold of 4 x 10^-6 moles per liter. Assuming no loss, how long until the population switches on?

**Given:** Volume 1 liter, cell density 10^8 per mL, release rate 2 x 10^-17 moles per cell per hour, threshold 4 x 10^-6 moles per liter.

**Plan:** Convert the density to total cells, multiply by the per cell rate to get the total release rate, then divide the threshold by that rate.

**Solution:** Total cells = 10^8 per mL x 10^3 mL per liter = 10^11 cells. Total release rate = 10^11 x 2 x 10^-17 = 2 x 10^-6 moles per hour. Time to threshold = 4 x 10^-6 divided by 2 x 10^-6 = 2 hours.

**Answer:** The population switches on in 2 hours, which is 120 minutes.

> **High-Yield:**
> - lac is off by default, trp is on by default: allolactose inactivates the Lac repressor, while tryptophan activates the trp repressor as corepressor.
> - Maximal lac expression needs lactose present (repressor released) and glucose absent (CAP cAMP engaged).
> - The repressor acts in trans, the operator in cis: *lacI-* and *lacO^c* are constitutive, *lacI^s* is uninducible.
> - Attenuation couples transcription to translation of the *trpL* leader peptide.
> - Riboswitches, small RNAs, ppGpp, autoinducers, and CRISPR spacers are all ways cells sense their state and adjust expression.

### Quick Review

- The operon: structural genes share one promoter, with a repressor at the operator controlling them; Jacob and Monod established it with the lac operon.
- lac is negative inducible, trp is negative repressible: the same repressor logic, opposite defaults.
- CAP cAMP is positive control; catabolite repression means glucose is used before lactose.
- Mutant logic: *lacI-* and *lacO^c* are constitutive, *lacI^s* is uninducible; repressor in trans, operator in cis.
- Attenuation reads ribosome speed on the *trpL* leader: stalling at the tryptophan codons allows readthrough.
- AraC is both repressor and activator; riboswitches and small RNAs act without repressor proteins.
- The stringent response uses ppGpp to shift the cell into survival mode during amino acid starvation.
- Quorum sensing counts cells with autoinducers; CRISPR uses spacer memories and the Cas9 endonuclease to destroy returning phages.

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
