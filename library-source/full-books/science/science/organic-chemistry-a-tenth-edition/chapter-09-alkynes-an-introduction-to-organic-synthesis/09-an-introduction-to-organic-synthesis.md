---
title: "An Introduction to Organic Synthesis"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "9: Alkynes: An Introduction to Organic Synthesis"
topic_number: "9"
source: "organic-chemistry.md"
tags:
  - "an-introduction-to-organic-synthesis"
  - "science"
status: "complete"
---

# An Introduction to Organic Synthesis

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 9: Alkynes: An Introduction to Organic Synthesis](../README.md)  
> **Topic:** 9  
> **Source structure:** OpenStax public textbook outline

## Overview

Organic synthesis is the branch of chemistry devoted to building complex molecules from simpler, readily available starting materials. The special skill of this topic is **retrosynthetic analysis**: instead of staring at a starting material and asking "what can I make from this?", you look at the *target molecule* and ask "what simpler molecules could I combine to build it?" This backward way of thinking, developed by E. J. Corey (1990 Nobel Prize in Chemistry), turns synthesis from a guessing game into a plan.

Chapter 9 earns its subtitle — "An Introduction to Organic Synthesis" — because alkynes are the first functional group you have met that can be *assembled* into larger carbon skeletons predictably. Three alkyne reactions make this possible:

1. **Acetylide anion alkylation** (Topic 8): a terminal alkyne treated with sodium amide gives a nucleophilic acetylide anion that attacks a primary alkyl halide, forming a new carbon–carbon bond.
2. **Reduction**: a triple bond can be reduced to a *cis*-alkene (Lindlar catalyst), a *trans*-alkene (sodium in liquid ammonia), or an alkane (H₂/Pd), so an alkyne can act as a temporary scaffold later "relaxed" into a softer functional group.
3. **Hydration** (Topic 4): Markovnikov hydration of a terminal alkyne gives a methyl ketone, converting a skeleton-builder into a carbonyl.

This topic ties the chapter together: the naming, acidity, alkylation, and reactions of alkynes are not separate facts but a coordinated toolkit for constructing real molecules — from laboratory targets to drugs and natural products.

## Why This Matters

Synthesis is how chemists make the molecules the modern world depends on: pharmaceuticals, agrochemicals, polymers, flavors, and materials. Retrosynthetic analysis is the *thinking method* behind all of that work. On exams, synthesis problems — "propose a synthesis of X from Y" — are scored on whether your plan is chemically valid at every step, not on luck. In research, retrosynthesis decides whether a target is worth making and which route is shortest, cheapest, and safest. Even in biology, the same logic explains how cells assemble complex molecules from simple building blocks such as acetyl-CoA. Mastering "work backward, build forward" now gives you a framework every later chapter assumes, since nearly every functional group chapter ends with a synthesis section.

## Core Concepts

### The retrosynthetic arrow and disconnections

In retrosynthetic analysis, write the target molecule on the left and draw an **open (hollow-headed) retrosynthetic arrow** pointing *from* the target *toward* its precursors. The arrow means "this target could have been made from these fragments." Cutting a bond in the target to reveal two fragments is a **disconnection**, marked with a wavy line through the broken bond; fragments are labeled a, b, c... so you can track which ends rejoin.

### Synthons and synthetic equivalents

A disconnection imagines the fragments as **synthons** — idealized reactive species, usually a nucleophile (anion) and an electrophile (cation). For example, disconnecting 5-decyne between C5 and C6 suggests a hex-1-ynyl anion (nucleophile) and a butyl cation (electrophile). Real reactions do not use free alkyl anions or cations; instead you choose **synthetic equivalents** — real reagents that behave like the idealized synthon. The alkyne equivalent of an alkyl anion is the **acetylide anion**, made by deprotonating a terminal alkyne with sodium amide (terminal alkyne pKa ≈ 25; NH₃ has pKa ≈ 38, so amide is strong enough). The equivalent of the alkyl cation is a **primary alkyl halide** or tosylate, which reacts by S_N2.

### Functional group interconversion (FGI)

Often the target's functional group cannot be built directly, or you need it installed at a stage where it would survive. **Functional group interconversion (FGI)** changes one functional group into another without touching the carbon skeleton. In this chapter, hydration (alkyne → ketone), reduction (alkyne → alkene or alkane), and halogenation (alkyne → dihalide) are all FGI steps. A retrosynthetic plan frequently ends with an FGI that "un-does" a reaction you know how to run forward.

### The planning loop and its constraints

A complete retrosynthesis repeats three moves until you reach a commercial starting material: (1) **identify** the target's key functional groups and skeleton; (2) **disconnect** a strategic bond — often the one that maps onto a known reaction such as acetylide alkylation; (3) **check** that each fragment maps to a real reagent and each forward reaction is plausible, then repeat.

Two constraints keep the plan honest. First, **acetylide alkylation works only on methyl or primary alkyl halides**: secondary and tertiary halides give E2 elimination instead, because the acetylide is a strong base as well as a nucleophile. Second, **the alkyne must be terminal** before deprotonation — only RC≡CH has the acidic hydrogen that becomes the acetylide. If both sides must be alkylated, run two separate deprotonation/alkylation cycles.

## ELI-10: Explain Like I'm 10

Building a molecule is like building with LEGO, but you have to plan backward. If you want a long LEGO bridge, you don't grab random bricks — you look at the finished bridge, decide where the last brick snaps in, and work out which pieces to put together first. Retrosynthesis is exactly that: start from the picture of the final molecule, imagine pulling it apart at its easiest snap points, and keep pulling apart until you have pieces you can actually buy. Then you build it forward, snapping pieces together in the reverse order you took them apart.

## High-Yield Points

- The retrosynthetic arrow is **open-headed** and points from **target → precursors**; a wavy line marks each disconnection.
- A **synthon** is an idealized fragment (anion or cation); a **synthetic equivalent** is the real reagent that delivers it (acetylide anion; primary alkyl halide).
- Acetylide alkylation builds C–C bonds but is **limited to methyl and primary alkyl halides**; secondary/tertiary halides mostly eliminate.
- Terminal alkyne pKa ≈ 25; NaNH₂ is the standard base for making acetylide anions.
- Reduction menu: Lindlar → *cis*-alkene; Na/NH₃(l) → *trans*-alkene; H₂/Pd-C → alkane. Hydration (Hg²⁺, H₂SO₄) of a terminal alkyne → methyl ketone.
- In multistep synthesis, **overall percent yield is the product of the individual step yields** — every extra step multiplies loss.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Synthesis | Building a target molecule from simpler starting materials through a sequence of reactions | The goal of the field; exam synthesis problems test this skill |
| Retrosynthetic analysis | Working backward from the target to available starting materials | The planning method that makes synthesis systematic |
| Retrosynthetic arrow | Open-headed arrow pointing from target toward precursors | Standard notation for "this could be made from" |
| Disconnection | Imaginary cutting of a bond to reveal fragments | Identifies where the target can be assembled |
| Synthon | Idealized reactive fragment (nucleophile or electrophile) from a disconnection | Bridges the imaginary cut and real chemistry |
| Synthetic equivalent | A real reagent that behaves like a synthon | Tells you what to put in the flask |
| Acetylide anion | RC≡C⁻, the conjugate base of a terminal alkyne | Powerful carbon nucleophile that forms new C–C bonds |
| FGI | Changing one functional group to another without changing the skeleton | Installs groups you cannot make directly |
| Lindlar catalyst | Poisoned Pd catalyst (Pd/CaCO₃, quinoline) that stops reduction at the alkene | The easy way to make a *cis*-alkene from an alkyne |

## Worked Examples

### Example 1: Retrosynthesis of 5-decyne from acetylene and 1-bromobutane

**Target:** 5-decyne, CH₃CH₂CH₂CH₂–C≡C–CH₂CH₂CH₂CH₃ (C10).

**Retrosynthesis:** The molecule is symmetric about the triple bond. Disconnect between C5 and C6: fragment a = CH₃CH₂CH₂CH₂–C≡C⁻ (a hex-1-ynyl anion synthon, C6) and fragment b = CH₃CH₂CH₂CH₂–Br (1-bromobutane, C4). Fragment a comes from deprotonating 1-hexyne (C6, terminal), so the plan requires 1-hexyne — itself built from acetylene.

**Forward synthesis (3 steps):**

Step 1 — make 1-hexyne from acetylene:
\[ \mathrm{HC{\equiv}CH \xrightarrow{NaNH_2} HC{\equiv}C^-Na^+ \xrightarrow{CH_3CH_2CH_2CH_2Br} CH_3CH_2CH_2CH_2C{\equiv}CH} \]

Step 2 — deprotonate the terminal alkyne:
\[ \mathrm{CH_3CH_2CH_2CH_2C{\equiv}CH + NaNH_2 \rightarrow CH_3CH_2CH_2CH_2C{\equiv}C^-Na^+ + NH_3} \]

Step 3 — alkylate to close the skeleton:
\[ \mathrm{CH_3CH_2CH_2CH_2C{\equiv}C^-Na^+ + CH_3CH_2CH_2CH_2Br \rightarrow CH_3CH_2CH_2CH_2C{\equiv}CCH_2CH_2CH_2CH_3} \]

**Check the constraints:** both alkylations use primary bromides (valid S_N2 partners for acetylides); the alkyne is terminal before step 2; no competing elimination on a primary substrate.

### Example 2: Stoichiometry and yield of a two-step alkylation

Suppose you begin with 10.0 g of acetylene and run the two alkylation steps of Example 1, each in 85% isolated yield. How many grams of 5-decyne do you obtain?

Molar masses: acetylene (C₂H₂) = 26.04 g/mol; 5-decyne (C₁₀H₁₈) = 138.26 g/mol.

**Step 1 — moles of acetylene:**
\[ n(\mathrm{C_2H_2}) = \frac{m}{M} = \frac{10.0\ \mathrm{g}}{26.04\ \mathrm{g/mol}} = 0.384\ \mathrm{mol} \]

**Step 2 — theoretical moles of 5-decyne** (1:1 stoichiometry: every acetylene carbon ends up in the product):
\[ n_{\mathrm{theor}}(\mathrm{C_{10}H_{18}}) = 0.384\ \mathrm{mol} \]

**Step 3 — theoretical mass:**
\[ m_{\mathrm{theor}} = n \times M = 0.384\ \mathrm{mol} \times 138.26\ \mathrm{g/mol} = 53.1\ \mathrm{g} \]

**Step 4 — apply the two 85% yields:**
\[ m_{\mathrm{actual}} = m_{\mathrm{theor}} \times 0.85 \times 0.85 = 53.1\ \mathrm{g} \times 0.7225 = 38.4\ \mathrm{g} \]

Overall yield is \(0.85 \times 0.85 = 0.7225\), or 72%. The takeaway: two 85% steps are only a 72% process — this is why synthetic chemists count every step.

### Example 3: A route that includes an FGI — 2-hexanone from 1-hexyne

**Target:** 2-hexanone, CH₃COCH₂CH₂CH₂CH₃.

**Retrosynthesis:** 2-hexanone is the methyl ketone from Markovnikov hydration of a terminal alkyne. Disconnect back through the FGI: 2-hexanone ← 1-hexyne (CH₃CH₂CH₂CH₂C≡CH). The alkyne is built from acetylene and 1-bromobutane as in Example 1. Full route: acetylene → 1-hexyne → (Hg²⁺, H₂SO₄, H₂O) → enol → tautomerize → 2-hexanone.

**Why this route matters:** you cannot easily make 2-hexanone by direct alkylation of a carbonyl, but the alkyne route installs the skeleton first and the carbonyl second — a classic use of the alkyne as a "masked carbonyl" that tolerates reactions a real carbonyl would not survive.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Retrosynthetic arrow | Forward reaction arrow | Retrosynthetic arrow is open-headed and points target → precursors; forward arrows are solid-headed, reactants → products |
| Synthon | Synthetic equivalent | Synthon is the idealized fragment (e.g., butyl anion); the equivalent is the real reagent (e.g., 1-bromobutane + acetylide) |
| Terminal alkyne | Internal alkyne | Only terminal alkynes (RC≡CH) form acetylides; internal alkynes have no acidic H |
| Alkylating with primary halides | Using secondary/tertiary halides | Primary halides substitute cleanly; secondary/tertiary mostly eliminate (E2) |
| *cis*-alkene from Lindlar | *trans*-alkene from Na/NH₃ | Lindlar adds both H's to the same face; dissolving-metal reduction gives the more stable *trans* isomer |
| Overall yield = sum of steps | Overall yield = product of steps | Yields multiply (0.85 × 0.85 = 0.72); they never add |

## Quick Review

1. Draw the retrosynthetic disconnection of 5-decyne and identify the two synthons produced.
2. Why can acetylide anions not be alkylated with tert-butyl bromide?
3. What is the difference between a synthon and a synthetic equivalent?
4. A synthesis has three steps with yields 90%, 80%, and 75%. What is the overall yield?
5. Which reagent pair converts a terminal alkyne into (a) a *cis*-alkene and (b) a *trans*-alkene?
6. What product results from hydration of 1-hexyne under Hg²⁺/H₂SO₄, and why is the carbonyl at C2 rather than C1?

<details>
<summary>Show answers</summary>

1. Disconnect the C5–C6 bond: fragment a = CH₃CH₂CH₂CH₂C≡C⁻ (hex-1-ynyl anion synthon) and fragment b = CH₃CH₂CH₂CH₂⁺ (butyl cation synthon); the real equivalents are the 1-hexynyl acetylide and 1-bromobutane.
2. tert-Butyl bromide is tertiary; the acetylide anion (a strong base) abstracts a β-hydrogen in E2, giving 2-methylpropene instead of substitution.
3. A synthon is the idealized fragment imagined during the disconnection; a synthetic equivalent is the actual stable reagent that delivers that fragment in the lab.
4. Overall yield = 0.90 × 0.80 × 0.75 = 0.54, or 54%.
5. (a) H₂ with Lindlar catalyst gives the *cis*-alkene; (b) Na in liquid NH₃ gives the *trans*-alkene.
6. 2-Hexanone. Hydration is Markovnikov, so OH adds to the terminal alkyne carbon; the enol CH₃C(OH)=CHCH₂CH₂CH₂CH₃ tautomerizes to the more stable keto form CH₃COCH₂CH₂CH₂CH₃.

</details>

## Related Topics

- Previous: [Alkylation of Acetylide Anions](08-alkylation-of-acetylide-anions.md)
- Next: End of chapter
- Related: [Alkyne Acidity: Formation of Acetylide Anions](07-alkyne-acidity-formation-of-acetylide-anions.md), [Hydration of Alkynes](04-hydration-of-alkynes.md), [Reduction of Alkynes](05-reduction-of-alkynes.md), [Alkynes: An Introduction to Organic Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
