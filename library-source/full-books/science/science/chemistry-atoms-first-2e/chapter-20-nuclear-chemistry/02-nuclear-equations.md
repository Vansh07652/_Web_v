---
title: "Nuclear Equations"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "20: Nuclear Chemistry"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "nuclear-equations"
  - "science"
status: "complete"
---

# Nuclear Equations

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 20: Nuclear Chemistry](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

A nuclear equation is a before-and-after record of a change inside an atomic nucleus. The starting nucleus is the **parent nuclide**, the nucleus left behind is the **daughter nuclide**, and the difference shows up as an emitted particle or photon. Every nuclide is written with its chemical symbol, the **mass number** \(A\) (protons + neutrons) as a superscript, and the **atomic number** \(Z\) (protons) as a subscript, as in \(\ce{^{238}_{92}U}\).

Nuclear equations are balanced by two bookkeeping rules only: the total mass number on each side must match, and the total atomic number on each side must match. That is far simpler than balancing a chemical equation — no coefficients — but it demands precision. An alpha particle \(\ce{^{4}_{2}He}\), a beta particle \(\ce{^{0}_{-1}e}\), a positron \(\ce{^{0}_{+1}e}\), and a gamma ray \(\ce{^{0}_{0}\gamma}\) each change the balance differently. Once you can write and complete these equations, you can predict what element a sample turns into, what it emits, and how fast — the foundation for the rest of this chapter.

## Why This Matters

Nuclear equations are the working language of nuclear medicine, radiometric dating, and nuclear power. A technologist preparing a technetium-99m scan, a geologist measuring a rock's uranium-to-lead ratio, and an engineer tracking fission products all rely on the same balancing rules. For everyday decisions, the equation answers practical questions: does this isotope emit penetrating gamma rays (needing shielding) or short-range alpha particles (dangerous only if inhaled or swallowed)? Balancing skills are also the prerequisite for every calculation that follows, since half-lives, activities, and ages all start from a correctly written decay equation.

## Core Concepts

### The two bookkeeping rules

Every nuclear equation must conserve the total **mass number** \(A\) and the total **atomic number** \(Z\). The left side (parent, plus any captured particle) and the right side (daughter, plus any emitted particles) must show equal sums for both quantities:

\[
\sum A_{\text{left}} = \sum A_{\text{right}} \qquad \text{and} \qquad \sum Z_{\text{left}} = \sum Z_{\text{right}}
\]

Charge is conserved automatically, because the bottom numbers track protons: a particle with \(Z = -1\) (the beta particle) carries one unit of negative charge. The nucleon count (protons + neutrons) never changes in alpha and beta processes; the nucleus merely rearranges which particles are protons.

### The particles that appear in decay equations

- **Alpha particle**, \(\ce{^{4}_{2}He}\) — a helium-4 nucleus (2 protons, 2 neutrons) ejected by heavy nuclei; it lowers \(A\) by 4 and \(Z\) by 2.
- **Beta particle**, \(\ce{^{0}_{-1}e}\) — a high-speed electron created inside the nucleus when a neutron converts to a proton; it raises \(Z\) by 1 and leaves \(A\) unchanged.
- **Positron**, \(\ce{^{0}_{+1}e}\) — an antimatter electron produced when a proton converts to a neutron; it lowers \(Z\) by 1 and leaves \(A\) unchanged.
- **Gamma ray**, \(\ce{^{0}_{0}\gamma}\) — a high-energy photon carrying away excess nuclear energy; it changes neither \(A\) nor \(Z\).
- **Electron capture** — the nucleus pulls in an inner-shell electron, \(\ce{^{0}_{-1}e}\), which combines with a proton to form a neutron; like positron emission, \(Z\) falls by 1 with \(A\) unchanged.

### Writing and completing a decay equation

Write the parent nuclide on the left and the known emitted particle on the right, leave the daughter as the unknown, and solve the two balance equations for its \(A\) and \(Z\). Then look up the element with that \(Z\) on the periodic table. Finally, verify both sums — remembering that a beta particle contributes \(-1\) to the charge sum. If the daughter is itself radioactive, the process continues into a decay series.

### Decay series

One decay step often leaves a still-unstable daughter, so heavy nuclides travel through **decay series** — chains of alternating alpha and beta steps — until a stable nucleus forms. Uranium-238 passes through 14 steps (including the gas radon-222) before reaching stable lead-206. Every step obeys the same balance rules: alpha drops \(A\) by 4, beta keeps \(A\) the same.

## ELI-10: Explain Like I'm 10

> A nuclear equation is like a seesaw with two scoreboards. The top scoreboard counts the total pieces in the nucleus, and the bottom one counts the protons — and both must show the same total on both sides. When a big nucleus spits out an alpha particle, it loses 4 pieces and 2 protons, so a new element is born. When a neutron turns into a proton, a tiny electron called a beta particle flies out and the element moves one step right on the periodic table.

## High-Yield Points

- Nuclear equations conserve **mass number \(A\)** and **atomic number \(Z\)**; nothing else needs balancing.
- Alpha decay: \(\ce{^{A}_{Z}X -> ^{A-4}_{Z-2}Y + ^{4}_{2}He}\).
- Beta decay: \(\ce{^{A}_{Z}X -> ^{A}_{Z+1}Y + ^{0}_{-1}e}\) — a neutron becomes a proton.
- Positron emission and electron capture: \(\ce{^{A}_{Z}X -> ^{A}_{Z-1}Y + ^{0}_{+1}e}\) (or captured electron) — a proton becomes a neutron.
- Gamma emission changes neither \(A\) nor \(Z\); it only removes energy.
- To find an unknown daughter, subtract the emitted particle's \(A\) and \(Z\) from the parent's.
- Decay series continue until a stable nuclide forms; each step must balance.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| parent nuclide | The unstable nucleus that undergoes decay | Its \(A\) and \(Z\) are the starting values in the equation |
| daughter nuclide | The nucleus produced by the decay | Identified by solving the two balance equations |
| mass number \(A\) | Total protons + neutrons in a nucleus | Conserved on both sides of every nuclear equation |
| atomic number \(Z\) | Number of protons; defines the element | Conserved; its change reveals the new element |
| alpha particle | A helium-4 nucleus, \(\ce{^{4}_{2}He}\) | Drops \(A\) by 4 and \(Z\) by 2; stopped by paper or skin |
| beta particle | An electron created in the nucleus, \(\ce{^{0}_{-1}e}\) | Raises \(Z\) by 1; a neutron has become a proton |
| positron | An antimatter electron, \(\ce{^{0}_{+1}e}\) | Lowers \(Z\) by 1; the basis of PET imaging |
| gamma ray | High-energy photon, \(\ce{^{0}_{0}\gamma}\) | Carries energy only; needs dense shielding in medical use |
| electron capture | Nucleus absorbs an inner electron to make a neutron | Lowers \(Z\) by 1 with \(A\) unchanged |
| decay series | A chain of decays from a heavy nuclide to a stable end | Explains why uranium ore contains lead |

## How It Works / Step-by-Step Process

1. Read the parent's symbol to identify its \(A\) and \(Z\).
2. Identify the emitted particle from the decay type (alpha, beta, positron, gamma, or electron capture).
3. Write the skeleton equation with the daughter as an unknown.
4. Balance mass numbers: \(A_{\text{daughter}} = A_{\text{parent}} - A_{\text{particle}}\).
5. Balance atomic numbers: \(Z_{\text{daughter}} = Z_{\text{parent}} - Z_{\text{particle}}\) (watch the sign: beta contributes \(-1\)).
6. Identify the element from \(Z\), write the balanced equation, and check both sums.

## Examples

### Example 1: Alpha decay of radium-226

Radium-226, \(\ce{^{226}_{88}Ra}\), is an alpha emitter found in the uranium decay series. Use the balance formulas before substituting:

\[
A_{\text{daughter}} = A_{\text{parent}} - A_{\text{alpha}} = 226 - 4 = 222
\]

\[
Z_{\text{daughter}} = Z_{\text{parent}} - Z_{\text{alpha}} = 88 - 2 = 86
\]

The element with \(Z = 86\) is radon, so:

\[
\ce{^{226}_{88}Ra -> ^{222}_{86}Rn + ^{4}_{2}He}
\]

Check: \(226 = 222 + 4\) and \(88 = 86 + 2\) — both sides balance. The daughter, radon-222, is a radioactive gas whose decay products are the main source of residential radon exposure.

### Example 2: Beta decay of carbon-14

Carbon-14, \(\ce{^{14}_{6}C}\), the isotope used to date once-living material, decays by beta emission. A beta particle is \(\ce{^{0}_{-1}e}\), so the mass number is unchanged:

\[
A_{\text{daughter}} = 14 - 0 = 14
\]

Balance the atomic numbers, remembering the beta particle contributes \(-1\):

\[
6 = Z_{\text{daughter}} + (-1) \quad \Rightarrow \quad Z_{\text{daughter}} = 7
\]

The element with \(Z = 7\) is nitrogen:

\[
\ce{^{14}_{6}C -> ^{14}_{7}N + ^{0}_{-1}e}
\]

A neutron became a proton, so the daughter is the element one place to the right with the same mass number. This equation is the "clock" behind radiocarbon dating.

### Example 3: Positron emission of fluorine-18

Fluorine-18, \(\ce{^{18}_{9}F}\), is a positron emitter used in PET imaging. A positron is \(\ce{^{0}_{+1}e}\). The mass number is unchanged:

\[
A_{\text{daughter}} = 18 - 0 = 18
\]

Balance the atomic numbers:

\[
9 = Z_{\text{daughter}} + 1 \quad \Rightarrow \quad Z_{\text{daughter}} = 8
\]

The element with \(Z = 8\) is oxygen:

\[
\ce{^{18}_{9}F -> ^{18}_{8}O + ^{0}_{+1}e}
\]

Each emitted positron soon meets an ordinary electron; the pair annihilates into two gamma photons that PET scanners detect. Positron emission and beta emission move \(Z\) in opposite directions while both leave \(A\) untouched.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Beta particle | An electron orbiting the nucleus | A beta particle forms inside the nucleus at decay; it is not an orbital electron |
| Positron emission | Beta emission | Positron emission lowers \(Z\) by 1; beta emission raises \(Z\) by 1 |
| Nuclear equation balancing | Chemical equation balancing | Nuclear equations conserve \(A\) and \(Z\) only, not atoms or coefficients |
| Mass number \(A\) | Atomic mass in grams | \(A\) counts nucleons (unitless); atomic mass is a mass in amu or grams |
| Gamma emission | Particle emission | Gamma rays carry no mass or charge, so the nuclide keeps its identity |
| Electron capture | Beta decay | Both lower \(Z\) by 1; electron capture consumes an inner electron instead of emitting a positron |

## Quick Review

1. What two quantities must balance in every nuclear equation?
2. Write the alpha decay of polonium-210, \(\ce{^{210}_{84}Po}\), and identify the daughter.
3. In beta decay, what happens inside the nucleus, and how does \(Z\) change?
4. Why does gamma emission not change the identity of a nuclide?
5. What do the superscript and subscript in \(\ce{^{131}_{53}I}\) represent?
6. Write the positron emission of carbon-11, \(\ce{^{11}_{6}C}\), and identify the daughter.

<details>
<summary>Show answers</summary>

1. The total mass number \(A\) and the total atomic number \(Z\) on each side of the equation.
2. \(\ce{^{210}_{84}Po -> ^{206}_{82}Pb + ^{4}_{2}He}\); the daughter is lead-206. Check: \(210 = 206 + 4\) and \(84 = 82 + 2\).
3. A neutron becomes a proton and an electron (the beta particle) is emitted; \(Z\) increases by 1 while \(A\) is unchanged.
4. Gamma rays carry energy but no mass or charge, so both \(A\) and \(Z\) stay the same and the nuclide keeps its identity.
5. The superscript 131 is the mass number (protons + neutrons); the subscript 53 is the atomic number (protons), identifying iodine.
6. \(\ce{^{11}_{6}C -> ^{11}_{5}B + ^{0}_{+1}e}\); the daughter is boron-11.

</details>

## Related Topics

- Previous: [Nuclear Structure and Stability](01-nuclear-structure-and-stability.md)
- Next: [Radioactive Decay](03-radioactive-decay.md)
- Related: [Nuclear Chemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Science note: Nuclide identities, decay modes, and the uranium-238 decay chain are standard published facts; all worked equations balance from the stated inputs. Shielding statements are general principles for educational context, not operational safety instructions.
- Last updated: 2026-08-16
