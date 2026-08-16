---
title: "Spectroscopic and Magnetic Properties of Coordination Compounds"
subject: "Science"
book: "Chemistry 2e"
chapter: "19: Transition Metals and Coordination Chemistry"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "spectroscopic-and-magnetic-properties-of-coordination-compounds"
  - "science"
status: "complete"
---

# Spectroscopic and Magnetic Properties of Coordination Compounds

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 19: Transition Metals and Coordination Chemistry](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Why is \([Cu(H_2O)_6]^{2+}\) blue while \([Zn(H_2O)_6]^{2+}\) is colorless? Why does one iron complex get pulled into a magnetic field while another with the same metal barely notices it? The answers come from **crystal field theory**, which describes how ligands split the five d orbitals into different energy levels. The size of that split — the crystal field splitting energy \(\Delta\) — decides which wavelengths of visible light a complex absorbs (its color) and how its d electrons are arranged (its magnetic behavior). This topic covers the octahedral splitting diagram, the spectrochemical series that ranks ligands by field strength, high-spin vs low-spin configurations, the color-wheel logic of absorption, and the spin-only magnetic moment formula. Along the way: ruby and emerald are just chromium ions in different host crystals, and the color of blood depends on which ligand is bound to iron.

## Why This Matters

- **Everyday color:** Gemstones (ruby = Cr³⁺ in Al₂O₃, emerald = Cr³⁺ in beryl, sapphire = Fe/Ti in corundum), paints, inks, and glass get their colors from d-electron transitions.
- **Biology and medicine:** Hemoglobin turns bright red when oxygen binds iron and darker when it doesn't — a visible, ligand-controlled color change. MRI contrast agents are gadolinium complexes chosen for their large magnetic moments (7 unpaired electrons).
- **Analysis:** UV-visible spectroscopy measures \(\Delta\) directly, identifying metals, oxidation states, and ligand environments in solution.
- **Exams:** Predicting color from absorbed wavelength, ranking ligands by the spectrochemical series, and computing spin-only moments are classic problems.

## Core Concepts

### Crystal field theory: the five d orbitals split

In a free metal ion the five d orbitals have identical energy (degenerate). When ligands approach along the axes of an octahedron, the two orbitals pointing *directly at* the ligands — \(d_{z^2}\) and \(d_{x^2-y^2}\) (the e_g set) — rise in energy because the ligand lone pairs repel them. The three pointing *between* the axes — \(d_{xy}\), \(d_{xz}\), \(d_{yz}\) (the t₂g set) — are lowered. The gap is the octahedral splitting energy \(\Delta_{\text{oct}}\); t₂g sits \(2/5\,\Delta_{\text{oct}}\) below and e_g \(3/5\,\Delta_{\text{oct}}\) above the average energy.

### The spectrochemical series: ranking ligands

Ligands differ in how strongly they split the d orbitals. The empirical order, weakest to strongest field:

\[
\text{I}^- < \text{Br}^- < \text{Cl}^- < \text{F}^- < \text{OH}^- < \text{H}_2\text{O} < \text{NH}_3 < \text{en} < \text{NO}_2^- < \text{CN}^- < \text{CO}
\]

Weak-field ligands (halides, water) give small \(\Delta_{\text{oct}}\); strong-field ligands (CN⁻, CO) give large \(\Delta_{\text{oct}}\). Splitting also grows with the metal's charge (Fe³⁺ splits more than Fe²⁺) and down a group (4d, 5d metals split more than 3d).

### High spin vs low spin: filling the d orbitals

For d¹–d³ and d⁸–d¹⁰ the filling pattern is forced. For **d⁴–d⁷** there is a choice, decided by the competition between \(\Delta_{\text{oct}}\) and the electron **pairing energy** \(P\):

- If \(\Delta_{\text{oct}} > P\) (strong field, e.g. CN⁻): electrons pair in the low t₂g level before occupying e_g → **low spin**.
- If \(\Delta_{\text{oct}} < P\) (weak field, e.g. H₂O): electrons spread out per Hund's rule → **high spin**.

The classic pair, both Fe(II) (d⁶): \([Fe(CN)_6]^{4-}\) is low spin — all six electrons paired, zero unpaired, **diamagnetic**; \([Fe(H_2O)_6]^{2+}\) is high spin — four unpaired, **paramagnetic**. Tetrahedral complexes split much less (\(\Delta_{\text{tet}} \approx \frac{4}{9}\Delta_{\text{oct}}\)), so they are almost always high spin; square-planar geometry (common for d⁸: Pt²⁺, Ni²⁺) is low spin and diamagnetic.

### Color: absorbed vs observed

A complex appears colored because it absorbs some wavelengths of visible light and transmits/reflects the rest. The absorbed photon promotes a d electron from t₂g to e_g; the transition energy equals the splitting:

\[
\Delta_{\text{oct}} = E_{\text{photon}} = \frac{hc}{\lambda}
\]

where \(h\) is Planck's constant, \(c\) the speed of light, and \(\lambda\) the wavelength of maximum absorption. The color you *see* is the **complementary** of the absorbed one (opposite on the color wheel): absorb green (~500 nm) → look red-purple; absorb orange (~600 nm) → look blue. Consequences: (1) changing the ligand changes \(\Delta\), hence the observed color — why \([Cu(H_2O)_6]^{2+}\) (pale blue) differs from \([Cu(NH_3)_4]^{2+}\) (deep blue); (2) complexes with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺, Ag⁺) have no d–d transitions and are **colorless**.

### Magnetic properties: counting unpaired electrons

A complex with unpaired electrons is **paramagnetic** (weakly attracted into a magnetic field); all-paired is **diamagnetic** (weakly repelled). For first-row transition complexes the orbital contribution is small, so the measured moment follows the **spin-only formula**:

\[
\mu = \sqrt{n(n+2)}\ \text{BM}
\]

where \(n\) is the number of unpaired electrons and BM is the Bohr magneton. Measured \(\mu\) → solve for \(n\) → assign high/low spin. Benchmarks: \(n = 1\) → 1.73 BM; \(n = 3\) → 3.87 BM; \(n = 4\) → 4.90 BM; \(n = 5\) → 5.92 BM.

### Applications: gemstones and blood

Ruby is corundum (Al₂O₃) with ~1% Cr³⁺ substituting for Al³⁺; the d³ chromium absorbs yellow-green light, so ruby transmits red. Emerald is the same Cr³⁺ ion in beryl (Be₃Al₂Si₆O₁₈), where a slightly different crystal field shifts the absorption and the stone looks green. In hemoglobin, the iron porphyrin is bright red when O₂ (a strong field) binds and darker when it does not — ligand-field logic visible in your own veins.

## ELI-10: Explain Like I'm 10

Inside a metal ion, the five electron rooms (d orbitals) start with equal energy, but when ligands move in, the rooms split: two become "expensive" (high energy) and three become "cheap" (low energy). If a light wave carries exactly the energy gap between them, an electron jumps up and the light gets eaten — that's why the complex has color, and the color you see is the opposite of the color eaten. Strong-gripping ligands like cyanide make a big gap; weak ones like water make a small gap. Electrons also decide whether to share rooms (pair up) or spread out — and every unpaired electron makes the complex act like a tiny magnet.

## High-Yield Points

- Octahedral field splits d orbitals into t₂g (lower) and e_g (higher); gap = \(\Delta_{\text{oct}}\).
- **Spectrochemical series** (weak → strong): I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO.
- **High spin** = weak field (\(\Delta < P\)); **low spin** = strong field (\(\Delta > P\)); only d⁴–d⁷ have the choice.
- d⁶ pair: \([Fe(H_2O)_6]^{2+}\) high spin (4 unpaired, paramagnetic); \([Fe(CN)_6]^{4-}\) low spin (0 unpaired, diamagnetic).
- \(\Delta_{\text{tet}} \approx \frac{4}{9}\Delta_{\text{oct}}\) → tetrahedral complexes almost always high spin; square planar (d⁸) is low spin.
- Color = complementary of absorbed wavelength: \(\Delta_{\text{oct}} = hc/\lambda\). d⁰ and d¹⁰ complexes are colorless.
- Spin-only moment: \(\mu = \sqrt{n(n+2)}\) BM; measured \(\mu\) gives the unpaired-electron count.
- Ruby/emerald/sapphire and oxy- vs deoxyhemoglobin are ligand-field color effects.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Crystal field theory | Model in which ligands split the metal's d orbitals into different energy levels | Explains the color and magnetism of coordination compounds |
| \(\Delta_{\text{oct}}\) | Energy gap between the t₂g and e_g sets in an octahedral complex | Sets the absorbed wavelength (color) and high/low-spin behavior |
| Spectrochemical series | Ranking of ligands by how strongly they split d orbitals | Predicts whether a complex is high or low spin and its color |
| High spin | Configuration where \(\Delta < P\), so electrons spread out before pairing | Weak-field ligands give high-spin, more paramagnetic complexes |
| Low spin | Configuration where \(\Delta > P\), so electrons pair in the lower set | Strong-field ligands give low-spin, less paramagnetic complexes |
| Paramagnetic | Having unpaired electrons; weakly attracted into a magnetic field | Diagnostic of unpaired d electrons; \(\mu = \sqrt{n(n+2)}\) BM |
| Diamagnetic | All electrons paired; weakly repelled by a magnetic field | Identifies low-spin or d⁰/d¹⁰ complexes |
| Complementary color | The color opposite the absorbed one on the color wheel | The color you actually see is complementary to the absorbed light |

## How It Works / Step-by-Step Process

**Predicting color and magnetism of a complex:**

1. Determine the metal's oxidation state and d-electron count.
2. Identify the geometry (usually octahedral for 3d) and rank the ligands on the spectrochemical series.
3. Decide high vs low spin: strong field → pair up.
4. Fill the d orbitals; count unpaired electrons \(n\).
5. Predict magnetism: \(n = 0\) diamagnetic; \(n > 0\) paramagnetic with \(\mu = \sqrt{n(n+2)}\) BM.
6. Predict color: d⁰/d¹⁰ colorless; otherwise absorb \(hc/\Delta\) and report the complementary color.

## Worked Examples

### Example 1: Measuring \(\Delta_{\text{oct}}\) from an absorption spectrum

The d¹ complex \([Ti(H_2O)_6]^{3+}\) absorbs visible light with a maximum at 500 nm. Calculate the octahedral splitting energy in kJ/mol.

**Formula first** — energy of one photon:

\[
E = \frac{hc}{\lambda}
\]

with \(h = 6.626 \times 10^{-34}\ \text{J·s}\), \(c = 2.998 \times 10^8\ \text{m/s}\), \(\lambda = 500\ \text{nm} = 5.00 \times 10^{-7}\ \text{m}\):

\[
E = \frac{(6.626 \times 10^{-34}\ \text{J·s})(2.998 \times 10^8\ \text{m/s})}{5.00 \times 10^{-7}\ \text{m}} = 3.97 \times 10^{-19}\ \text{J}
\]

**Per mole** — multiply by Avogadro's number and convert to kJ:

\[
E = 3.97 \times 10^{-19}\ \text{J} \times 6.022 \times 10^{23}\ \text{mol}^{-1} \times \frac{1\ \text{kJ}}{10^3\ \text{J}} = 239\ \text{kJ/mol}
\]

**Answer:** \(\Delta_{\text{oct}} \approx 239\ \text{kJ/mol}\). Because it absorbs green (~500 nm), the complex appears red-purple — the complementary color.

### Example 2: High vs low spin and magnetic moment for two Fe(II) complexes

Predict the number of unpaired electrons and spin-only moment for \([Fe(H_2O)_6]^{2+}\) and \([Fe(CN)_6]^{4-}\).

**Step 1 — d count:** Fe is +2 in both; Fe²⁺ is d⁶.

**Step 2 — ligand field:** H₂O is weak-field (small \(\Delta\)); CN⁻ is strong-field (large \(\Delta\)).

**Step 3 — filling:** \([Fe(H_2O)_6]^{2+}\): \(\Delta < P\) → high spin: t₂g⁴ e_g² → **4 unpaired**. \([Fe(CN)_6]^{4-}\): \(\Delta > P\) → low spin: t₂g⁶ e_g⁰ → **0 unpaired**.

**Step 4 — moments** (\(\mu = \sqrt{n(n+2)}\) BM):

\[
\mu_{[\text{Fe(H}_2\text{O)}_6]^{2+}} = \sqrt{4(4+2)} = \sqrt{24} = 4.90\ \text{BM} \quad (\text{paramagnetic})
\]

\[
\mu_{[\text{Fe(CN)}_6]^{4-}} = \sqrt{0(0+2)} = 0\ \text{BM} \quad (\text{diamagnetic})
\]

**Answer:** The aqua complex is paramagnetic with \(\mu \approx 4.90\) BM; the cyano complex is diamagnetic — exactly how a measured moment distinguishes high- from low-spin complexes in the lab.

### Example 3: Why is \([Zn(NH_3)_4]^{2+}\) colorless?

Zn²⁺ is d¹⁰: all five d orbitals are fully occupied, so no d–d transition is possible (no empty d orbital to accept an electron), and no visible light is absorbed. **Answer:** d¹⁰ complexes — Zn²⁺, Cu⁺, Ag⁺ — are colorless regardless of ligand.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Absorbed color | Observed color | Absorb green (~500 nm) → looks red-purple; observed = complementary color |
| "All transition compounds are colored" | Only those with d–d transitions | d⁰ (Sc³⁺, Ti⁴⁺) and d¹⁰ (Zn²⁺, Cu⁺) complexes are colorless |
| High spin = strong field | High spin = weak field | High spin happens when \(\Delta < P\) (weak field); strong fields force pairing (low spin) |
| Paramagnetism | Ferromagnetism | Paramagnetic complexes are weakly attracted only inside a field; bulk iron's ferromagnetism is a collective solid-state effect |
| Number of d electrons | Number of unpaired electrons | The magnetic formula uses unpaired count \(n\), not total d count (d⁶ Fe²⁺ can have 4 or 0 unpaired) |
| \(\Delta_{\text{oct}}\) is a constant | \(\Delta\) depends on ligand, charge, geometry | Same metal + different ligand → different color; tetrahedral splitting ≈ 4/9 of octahedral |

## Quick Review

1. Why is \([Cu(H_2O)_6]^{2+}\) blue? Which wavelength region does it absorb?
2. Rank Cl⁻, CN⁻, and H₂O from weakest to strongest field.
3. How many unpaired electrons does a high-spin d⁵ complex have? A low-spin d⁶?
4. Calculate the spin-only moment for a complex with 3 unpaired electrons.
5. Why are Zn²⁺ and Sc³⁺ complexes colorless?
6. A complex absorbs at 400 nm. What is \(\Delta_{\text{oct}}\) in kJ/mol?

<details>
<summary>Show answers</summary>

1. It absorbs orange-red light around 600 nm (small \(\Delta\) from weak-field water), so it transmits/reflects blue — the complementary color.
2. Cl⁻ < H₂O < CN⁻ (weakest to strongest per the spectrochemical series).
3. High-spin d⁵: 5 unpaired (t₂g³ e_g²). Low-spin d⁶: 0 unpaired (t₂g⁶) — diamagnetic, like \([Fe(CN)_6]^{4-}\).
4. \(\mu = \sqrt{3(3+2)} = \sqrt{15} = 3.87\) BM.
5. Zn²⁺ is d¹⁰ and Sc³⁺ is d⁰: no d–d transition is possible (no empty d orbital / no d electrons), so no visible absorption.
6. \(E = hc/\lambda = (6.626 \times 10^{-34})(2.998 \times 10^8)/(4.00 \times 10^{-7}) = 4.97 \times 10^{-19}\ \text{J}\); per mole = \(4.97 \times 10^{-19} \times 6.022 \times 10^{23} = 2.99 \times 10^5\ \text{J/mol} = 299\ \text{kJ/mol}\).

</details>

## Related Topics

- Previous: [Coordination Chemistry of Transition Metals](02-coordination-chemistry-of-transition-metals.md)
- Next: End of chapter
- Related: [Transition Metals and Coordination Chemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (Planck's constant, speed of light, Avogadro's number, magnetic moments, spectrochemical series order) are standard reference values; verify against current sources before relying on them in assessments.
- Last updated: 2026-08-16
