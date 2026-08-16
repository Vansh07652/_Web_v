---
title: "Radioactive Decay"
subject: "Science"
book: "Chemistry 2e"
chapter: "21: Nuclear Chemistry"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "radioactive-decay"
  - "science"
status: "complete"
---

# Radioactive Decay

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 21: Nuclear Chemistry](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Radioactive decay** is the spontaneous process in which an unstable nucleus emits particles or high-energy photons and transforms into a different nuclear state — often a different element. The trigger is built into the nucleus itself: when the balance between protons and neutrons falls outside the stable range, or when the nucleus carries surplus energy, it reorganizes toward stability and the excess escapes as radiation.

Every radioactive isotope has its own signature: the type of radiation it emits and the rate at which it decays. Some eject helium nuclei (alpha), some emit electrons or positrons (beta), some emit only photons (gamma), and many emit a combination. For heavy elements, decay continues step by step through a long chain until a stable nucleus forms. Because decay follows a predictable statistical clock, the same rules that date ancient artifacts also govern how long a medical tracer stays active in the body.

## Why This Matters

Decay is the engine behind nearly every application in this chapter. Doctors choose imaging isotopes by half-life and radiation type; archaeologists date artifacts by measuring remaining carbon-14; regulators set safety limits based on how far and how fast radiation travels. On exams, decay problems test two skills repeatedly: writing balanced nuclear equations and applying first-order kinetics. Nuclear equations conserve nucleon number and charge, and the math is the same exponential-decay model used for drug clearance and cooling problems.

## Core Concepts

### Why some nuclei decay

Stable nuclei cluster in a region of the neutron-versus-proton chart called the **belt of stability**. Light stable nuclei hold roughly equal numbers of protons and neutrons; as nuclei grow heavier, extra neutrons are needed to spread out the repulsive electric forces among protons. When a nucleus has too many neutrons, too few neutrons, or too much internal energy, it is radioactive. All nuclei with more than 83 protons (bismuth) are radioactive, and lighter elements can have radioactive isotopes too — carbon-14 is a famous example.

### Alpha emission

An **alpha particle** is a helium-4 nucleus. Heavy nuclei above the belt of stability often shed alpha particles to reduce mass and charge dramatically. In alpha decay, the mass number drops by 4 and the atomic number by 2:

\[
\ce{^{238}_{92}U -> ^{234}_{90}Th + ^{4}_{2}He}
\]

The daughter is a different element, two places left in the periodic table. Alpha particles are heavy and doubly charged, so they collide readily with matter: a sheet of paper or a few centimeters of air stops them. Their short range is offset by intense ionization along the path — the reason alpha emitters are dangerous when inhaled or ingested.

### Beta-minus emission

Nuclides with too many neutrons convert a neutron into a proton, releasing an electron from the nucleus — the **beta particle** — plus an antineutrino that carries off part of the energy:

\[
\ce{^{131}_{53}I -> ^{131}_{54}Xe + ^{0}_{-1}e}
\]

The mass number stays the same, but the atomic number rises by 1, moving the element one place right. The beta particle is created inside the nucleus at the moment of decay, not pulled from the electron cloud. Beta particles penetrate farther than alpha but are stopped by a few millimeters of aluminum.

### Positron emission and electron capture

Nuclides with too few protons can raise their neutron-to-proton ratio two ways. In **positron emission**, a proton converts into a neutron and releases a positively charged electron (a positron) plus a neutrino:

\[
\ce{^{11}_{6}C -> ^{11}_{5}B + ^{0}_{+1}e}
\]

In **electron capture**, the nucleus pulls an inner-shell electron inward, where it combines with a proton to form a neutron. Both processes lower the atomic number by 1 with the mass number unchanged. Positron emitters such as fluorine-18 drive PET imaging: each positron annihilates with an electron, producing two gamma photons that scanners detect.

### Gamma emission

A **gamma ray** is a high-energy photon emitted when a nucleus drops from an excited state to a lower-energy state. It changes neither the mass number nor the atomic number — only the nucleus's energy. Gamma rays accompany many alpha and beta decays and are emitted alone by metastable nuclides such as technetium-99m (the "m" for metastable), which relaxes to technetium-99 by gamma emission. Because gamma photons carry no charge, they penetrate deeply and need dense shielding such as lead or concrete.

### Decay series

When a decay produces a daughter that is itself radioactive, the process continues. Heavy nuclides run through long **decay series**: uranium-238 passes through 14 steps (including radon-222, a gas that can migrate into buildings) before reaching stable lead-206; uranium-235 ends at lead-207 and thorium-232 at lead-208.

### Half-life and first-order kinetics

Radioactive decay is **first order**: the number of decays per second is proportional to the number of radioactive nuclei present. If \(N_0\) nuclei are present at time zero, the number remaining after time \(t\) is

\[
N_t = N_0 e^{-kt}
\]

where \(k\) is the **decay constant**. Equivalently,

\[
\ln\left(\frac{N_t}{N_0}\right) = -kt
\]

The **half-life**, \(t_{1/2}\), is the time for half the nuclei to decay, and it relates to the decay constant by

\[
t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}
\]

The half-life is constant: after one half-life, half of whatever is present remains; after two, one quarter; after three, one eighth. The amount remaining after \(n\) half-lives is \(N_0/2^n\), regardless of starting quantity.

### Activity

The **activity** of a sample is its decay rate, \(A = kN\), and it follows the same exponential decay:

\[
A_t = A_0 e^{-kt}
\]

The SI unit of activity is the **becquerel** (Bq), equal to one decay per second. The older **curie** (Ci) remains common in medicine: \(1\ \text{Ci} = 3.7 \times 10^{10}\ \text{Bq}\). Medical tracer doses are typically stated in millicuries (mCi) or megabecquerels (MBq).

## ELI-10: Explain Like I'm 10

> Radioactive decay is like a giant bowl of popcorn popping. Each kernel has its own "pop time," but we can only talk about averages: in one half-life, half the kernels have popped, no matter how many you started with. The popped kernels are new, smaller pieces — new elements! — and the heat, light, and noise they make are like the radiation coming out.

## High-Yield Points

- Alpha decay: \(A\) down 4, \(Z\) down 2; daughter moves two places left.
- Beta-minus decay: \(Z\) up 1, \(A\) unchanged; a neutron becomes a proton plus an electron.
- Positron emission and electron capture both drop \(Z\) by 1 with \(A\) unchanged.
- Gamma emission changes neither \(A\) nor \(Z\); it only removes excess nuclear energy.
- First-order math: \(\ln(N_t/N_0) = -kt\) and \(t_{1/2} = 0.693/k\).
- After \(n\) half-lives, the fraction remaining is \(1/2^n\).
- Activity \(A = kN\) in Bq (decays/s) or Ci (\(1\ \text{Ci} = 3.7 \times 10^{10}\ \text{Bq}\)).
- Uranium-238 decays through 14 steps to stable lead-206.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Radioactive decay | Spontaneous emission of particles or photons from an unstable nucleus | The process that makes isotopes useful for dating, medicine, and power |
| Alpha particle | A helium-4 nucleus (2 protons + 2 neutrons) | Cuts \(A\) by 4 and \(Z\) by 2; short range, intense ionization |
| Beta particle | An electron (or positron) created in the nucleus during decay | Changes \(Z\) by \(\pm 1\) while \(A\) stays fixed |
| Gamma ray | High-energy photon from an excited nucleus | Carries away excess energy; deeply penetrating, needs dense shielding |
| Half-life | Time for half a radioactive sample to decay | Predicts how long activity persists in samples, patients, and waste |
| Decay constant (\(k\)) | First-order rate constant, \(k = 0.693/t_{1/2}\) | Connects half-life to the exponential decay equation |
| Activity | Decay rate, \(A = kN\) | The measurable quantity reported in Bq or Ci |
| Decay series | Chain of decays linking a heavy nuclide to a stable end product | Explains why uranium ore contains lead and why radon appears in homes |

## How It Works / Step-by-Step Process

1. Identify the nuclide's \(Z\) and \(A\), and locate it relative to the belt of stability.
2. Choose the decay mode: too heavy → alpha; too many neutrons → beta-minus; too few neutrons → positron emission or electron capture.
3. Write the decay equation, balancing mass numbers and charges on both sides.
4. Convert the daughter's \(Z\) to an element symbol; if the daughter is still unstable, expect further decay.
5. For time problems, write the exponential formula, substitute \(k\) or \(t_{1/2}\), and solve.

## Examples

### Example 1: Decay constant and remaining fraction for iodine-131

Iodine-131 has a half-life of 8.02 days. Find the decay constant from the formula before substituting:

\[
k = \frac{0.693}{t_{1/2}} = \frac{0.693}{8.02\ \text{days}} = 0.0864\ \text{days}^{-1}
\]

Now find the fraction remaining after 24 days:

\[
\ln\left(\frac{N_t}{N_0}\right) = -kt = -(0.0864\ \text{days}^{-1})(24\ \text{days}) = -2.07
\]

Taking the exponential of both sides:

\[
\frac{N_t}{N_0} = e^{-2.07} = 0.126
\]

About 12.6% of the original iodine-131 remains after 24 days. Sanity check: 24 days is almost exactly three half-lives, and \((1/2)^3 = 0.125\), so the answer is consistent.

### Example 2: Dating a bone fragment with carbon-14

Living organisms maintain a carbon-14 activity of about 15.3 decays per minute per gram of carbon; a bone fragment shows 1.91. The half-life of carbon-14 is 5730 years. First compute the decay constant:

\[
k = \frac{0.693}{t_{1/2}} = \frac{0.693}{5730\ \text{yr}} = 1.21 \times 10^{-4}\ \text{yr}^{-1}
\]

The activity ratio is \(1.91/15.3 = 0.125\). Substitute into the linear form:

\[
\ln(0.125) = -(1.21 \times 10^{-4}\ \text{yr}^{-1})t
\]

\[
-2.08 = -(1.21 \times 10^{-4}\ \text{yr}^{-1})t \quad\Rightarrow\quad t = \frac{2.08}{1.21 \times 10^{-4}\ \text{yr}^{-1}} = 1.72 \times 10^{4}\ \text{yr}
\]

The bone is about 17,200 years old. Note \(0.125 = (1/2)^3\), so the answer is three half-lives: \(3 \times 5730 = 17,190\) years — matching the exponential result.

### Example 3: Activity decay of technetium-99m

A patient dose of technetium-99m (half-life 6.0 h) is prepared at 40 mCi. How much activity remains after 24 hours? With \(n = 24/6 = 4\) half-lives:

\[
A_t = A_0\left(\frac{1}{2}\right)^n = 40\ \text{mCi}\left(\frac{1}{2}\right)^4 = 40\ \text{mCi} \times 0.0625 = 2.5\ \text{mCi}
\]

In becquerels, \(2.5\ \text{mCi} = 2.5 \times 10^{-3}\ \text{Ci} \times 3.7 \times 10^{10}\ \text{Bq/Ci} = 9.3 \times 10^{7}\ \text{Bq}\). This rapid decay is why 99mTc suits imaging: it delivers its diagnostic signal and largely disappears within a day.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Beta particle | Electron from the electron cloud | Beta particles are created inside the nucleus when a neutron converts to a proton |
| Half-life | Time until the sample is "safe" | After one half-life exactly half remains; safety depends on type and dose, not just time |
| Positron | Proton or ordinary electron | A positron is an antielectron (charge \(+1\)); it annihilates on contact with an electron |
| Gamma ray | X-ray | Both are photons; gamma rays come from the nucleus, X-rays from electron energy levels |
| Alpha decay | Chemical change | Alpha decay changes the element itself; chemical reactions only rearrange electrons |
| Radioactive | Always glowing or hazardous | Hazard depends on type, energy, and dose of radiation |

## Quick Review

1. Write the balanced equation for the alpha decay of polonium-210 (\(Z = 84\), \(A = 210\)).
2. A sample's activity drops from 800 Bq to 100 Bq in 30 days. What is the half-life?
3. Why does beta-minus decay raise the atomic number by 1 while the mass number is unchanged?
4. What happens when a positron meets an electron?
5. Why is carbon-14 dating unreliable for samples older than about 50,000 years?
6. Convert an activity of 0.50 mCi into becquerels.

<details>
<summary>Show answers</summary>

1. \(\ce{^{210}_{84}Po -> ^{206}_{82}Pb + ^{4}_{2}He}\). Check: \(210 = 206 + 4\) and \(84 = 82 + 2\).
2. 100 Bq is \(1/8 = (1/2)^3\) of 800 Bq, so 30 days is three half-lives: \(t_{1/2} = 10\) days. Alternatively solve \(0.125 = e^{-k(30)}\) for \(k\), then \(t_{1/2} = 0.693/k\).
3. A neutron (charge 0) becomes a proton (charge +1) plus an electron (charge \(-1\)); the nucleon count \(A\) is unchanged while \(Z\) rises by 1.
4. The positron annihilates with the electron, converting both masses into two gamma photons traveling in opposite directions.
5. After about 50,000 years (roughly 8–9 half-lives), less than about 0.4% of the original carbon-14 remains, and measurement uncertainty swamps the signal.
6. \(0.50\ \text{mCi} \times (10^{-3}\ \text{Ci/mCi}) \times (3.7 \times 10^{10}\ \text{Bq/Ci}) = 1.85 \times 10^{7}\ \text{Bq}\).

</details>

## Related Topics

- Previous: [Nuclear Equations](02-nuclear-equations.md)
- Next: [Transmutation and Nuclear Energy](04-transmutation-and-nuclear-energy.md)
- Related: [Nuclear Chemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: carbon-14 half-life 5730 yr; iodine-131 half-life 8.02 days; technetium-99m half-life 6.0 h; \(1\ \text{Ci} = 3.7 \times 10^{10}\ \text{Bq}\) (standard published values).
- Last updated: 2026-08-16
