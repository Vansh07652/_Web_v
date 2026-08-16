---
title: "Mass Spectrometry in Biological Chemistry: Time-of-Flight (TOF) Instruments"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "mass-spectrometry-in-biological-chemistry-time-of-flight-tof-instruments"
  - "science"
status: "complete"
---

# Mass Spectrometry in Biological Chemistry: Time-of-Flight (TOF) Instruments

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Traditional electron-impact mass spectrometry vaporizes molecules and fragments them violently — fine for volatile small molecules, useless for proteins, DNA, and carbohydrates, which decompose before reaching the ion source. Biological mass spectrometry solves this with two inventions: **soft ionization methods** that make intact ions of enormous molecules, and **time-of-flight (TOF) analyzers** that measure mass without a magnetic field.

The physics is elegantly simple. All ions are accelerated to the same kinetic energy, then drift through a field-free tube: lighter ions travel faster and arrive earlier, heavier ions later. By measuring flight time, the instrument computes \(m/z\). Because TOF analyzers have no upper mass limit and record a full spectrum in microseconds, they pair naturally with electrospray ionization (ESI) and matrix-assisted laser desorption/ionization (MALDI) — the two soft methods that made proteomics possible.

## Why This Matters

Biological mass spectrometry is a defining technology of modern molecular biology. It identifies proteins from tiny tissue samples (proteomics), detects post-translational modifications, sequences DNA and RNA, profiles blood metabolites, and identifies bacteria directly from clinical specimens. A newborn screening sample can be tested for dozens of metabolic disorders at once. Understanding how ESI, MALDI, and TOF work together explains *why* instruments weigh a 150,000 Da protein to within a few daltons — and why that capability reshaped biomedical science.

## Core Concepts

### The TOF analyzer: a race down a tube

Ions are accelerated by a voltage \(V\), so each ion of charge \(ze\) and mass \(m\) gains kinetic energy:

\[ \frac{1}{2}mv^2 = zeV \]

All ions with the same charge therefore leave the accelerator with the **same kinetic energy** — but different speeds, since speed depends on mass:

\[ v = \sqrt{\frac{2zeV}{m}} \]

After acceleration, the ions enter a field-free drift tube of length \(L\). The flight time is \(t = L/v\):

\[ t = L\sqrt{\frac{m}{2zeV}} \]

Rearranging gives the working equation of TOF mass spectrometry:

\[ \frac{m}{z} = \frac{2eVt^2}{L^2} \]

Because \(e\), \(V\), and \(L\) are known constants, a measured flight time \(t\) yields \(m/z\) directly. **Lighter ions arrive first** — flight time scales with \(\sqrt{m/z}\), not linearly with mass. That is why a single TOF scan covers an enormous mass range in tens of microseconds, with no magnetic scanning.

### Resolution: the reflectron

Ions of the same \(m/z\) do not all start with identical kinetic energies, so arrival times spread slightly, blurring peaks. A **reflectron** — ring electrodes at the end of the flight tube — creates a field that repels ions back the way they came. Faster ions penetrate deeper and travel farther; slower ions turn around sooner. The result: ions of the same \(m/z\) arrive nearly together despite small energy differences, sharpening peaks and improving resolution.

### Electrospray ionization (ESI): charging droplets

ESI works from **solution**. The sample (often from a liquid chromatography column) is pumped through a narrow capillary held at high voltage. The emerging liquid forms a mist of charged droplets; solvent evaporates, droplets shrink, and repulsive charge forces them to explode into smaller droplets until bare ions are released. The critical trick: ESI produces **multiply charged ions** — a protein of mass \(M\) picks up \(n\) protons, giving \([M + nH]^{n+}\). A 50,000 Da protein carrying 50 protons appears at:

\[ \frac{m}{z} = \frac{M + n(1.008)}{n} \approx \frac{50{,}000}{50} = 1000 \]

A huge molecule drops into a measurable \(m/z\) range, and the envelope of peaks at successive charge states lets you reconstruct \(M\) precisely.

### MALDI: the matrix trick

MALDI works from **solid samples**. The analyte is mixed with a large excess of a small organic molecule (the matrix, e.g., sinapinic acid) and dried into a crystal. A nanosecond laser pulse hits the crystal; the matrix absorbs the energy, vaporizes, and carries the analyte into the gas phase with minimal fragmentation. MALDI mostly makes **singly charged ions** \([M + H]^+\), so each molecule gives one dominant peak. It tolerates salts and buffers, works on proteins, peptides, oligonucleotides, glycans, and even whole cells, and its mass range extends to hundreds of thousands of daltons.

### Putting it together: proteomics workflows

A typical proteomics experiment: digest a protein mixture with trypsin (cuts after lysine and arginine), separate the peptides by liquid chromatography, ionize with ESI, measure masses, then fragment selected peptides (tandem MS) to read sequences. Matching the measured masses against a genome-derived database identifies the proteins. MALDI-TOF is also used directly on intact bacteria for rapid clinical identification — the whole-cell spectrum fingerprints the species.

## ELI-10: Explain Like I'm 10

A TOF mass spectrometer is a race track in a vacuum. All the runners (ions) get the same starting push, so the light ones sprint ahead and the heavy ones lag behind. A camera at the finish line records exactly when each runner arrives, and from the times you can figure out every runner's weight. The tricky part is getting giant molecules like proteins into the race without smashing them — electrospray is like spraying them through a garden hose so they ride along in shrinking water droplets, and MALDI is like tucking each protein into a crystal blanket that a laser flash gently sets free.

## High-Yield Points

- **TOF working equation:** \(m/z = 2eVt^2/L^2\) — flight time scales with \(\sqrt{m/z}\); lighter ions arrive first.
- **All ions of the same charge share the same kinetic energy** \(zeV\) after acceleration — speed, not energy, carries the mass information.
- A **reflectron** compensates for small kinetic-energy spreads, sharpening peaks and improving resolution.
- **ESI makes multiply charged ions** \([M+nH]^{n+}\) from solution; the charge-state envelope lets you reconstruct the neutral mass \(M\).
- **MALDI makes mostly singly charged ions** \([M+H]^+\) from a solid matrix; it handles salts and very large molecules.
- **Soft ionization (ESI/MALDI) preserves intact biomolecules**; hard electron impact would destroy them.
- TOF analyzers have **no magnetic field and no practical upper mass limit** — ideal for biology.
- Tandem MS (MS/MS) adds fragmentation after mass selection: the basis of peptide sequencing.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Time-of-flight (TOF) | Analyzer that measures how long ions take to drift down a tube | Flight time ∝ √(m/z); full spectra in microseconds, unlimited mass range |
| Reflectron | Electrode mirror that corrects kinetic-energy spread | Sharper peaks, higher resolution, longer effective path |
| Electrospray ionization (ESI) | Soft ionization from solution producing multiply charged ions | Weighs proteins and peptides; couples to liquid chromatography |
| Matrix-assisted laser desorption/ionization (MALDI) | Soft ionization from a solid crystal using a laser and a matrix compound | Works on salts, cells, and huge molecules; mostly singly charged ions |
| Multiply charged ion | Ion carrying several protons, \([M+nH]^{n+}\) | Brings large molecules into measurable range; envelope → M |
| Matrix | Small organic molecule that absorbs laser energy in MALDI | Protects the analyte from fragmentation |
| m/z | Mass-to-charge ratio, the measured quantity | Always account for charge when converting to neutral mass |
| Tandem MS (MS/MS) | Two-stage analysis: select an ion, fragment it, record the pieces | Peptide sequencing and structure elucidation |
| Soft ionization | Ionization that deposits little excess energy | Keeps intact biomolecules alive long enough to weigh them |
| Proteomics | Large-scale identification of proteins from complex mixtures | The main application of biological mass spectrometry |

## Worked Examples

### Example 1: Reconstructing a protein's mass from its ESI envelope

An ESI spectrum of a protein shows adjacent peaks at \(m/z = 1001.0\) and \(m/z = 910.1\), which correspond to charge states \(n\) and \(n+1\). Find the protein's mass.

**Formula first.** Each peak satisfies:

\[ \frac{m}{z} = \frac{M + n(1.008)}{n} \]

For the two adjacent charge states \(n\) and \(n+1\):

\[ M + n(1.008) = n(1001.0) \]
\[ M + (n+1)(1.008) = (n+1)(910.1) \]

**Subtract the first equation from the second:**

\[ 1.008 = (n+1)(910.1) - n(1001.0) \]

\[ 1.008 = 910.1n + 910.1 - 1001.0n = 910.1 - 90.9n \]

\[ 90.9n = 909.09 \quad \Rightarrow \quad n \approx 10.0 \]

So the higher-mass peak carries \(n = 10\) charges. Substitute back:

\[ M = 10(1001.0) - 10(1.008) = 10{,}010 - 10.08 = 9999.92 \]

**Answer:** \(M \approx 10{,}000\) Da. Two adjacent peaks in one ESI spectrum give a protein's mass to ~0.1% — remarkable precision for a molecule that never appears as a single intact ion at \(m/z = 10{,}000\).

### Example 2: Predicting flight times in a TOF instrument

A TOF instrument has a drift tube of length \(L = 2.00\) m and an accelerating voltage \(V = 20{,}000\) V. Compare the flight times of singly charged ions at \(m/z = 100\) and \(m/z = 400\).

**Formula first:**

\[ t = L\sqrt{\frac{m}{2zeV}} \]

**Substitute for \(m/z = 100\)** (\(m = 100 \times 1.6605 \times 10^{-27}\) kg, \(z = 1\), \(e = 1.602 \times 10^{-19}\) C):

\[ t_{100} = 2.00\sqrt{\frac{100(1.6605 \times 10^{-27})}{2(1)(1.602 \times 10^{-19})(20{,}000)}} \]

\[ t_{100} = 2.00\sqrt{\frac{1.6605 \times 10^{-25}}{6.408 \times 10^{-15}}} = 2.00\sqrt{2.592 \times 10^{-11}} \]

\[ t_{100} = 2.00(5.091 \times 10^{-6}) = 1.018 \times 10^{-5}\ \text{s} \approx 10.2\ \mu\text{s} \]

**For \(m/z = 400\),** mass is 4× larger, and \(t \propto \sqrt{m}\), so:

\[ t_{400} = t_{100}\sqrt{4} = 2t_{100} \approx 20.4\ \mu\text{s} \]

**Answer:** the \(m/z = 400\) ion takes exactly twice as long (20.4 μs vs 10.2 μs) — the classic √m scaling of TOF. A 400-Da peptide is easy to tell from a 100-Da fragment by timing alone.

### Example 3: MALDI mass of a peptide

A peptide has molecular mass \(M = 1500.0\) Da. In MALDI it appears as \([M + H]^+\). Predict the observed \(m/z\).

**Formula first:**

\[ \frac{m}{z} = \frac{M + 1.008}{1} \]

**Substitute:**

\[ \frac{m}{z} = 1500.0 + 1.008 = 1501.008 \]

**Answer:** a single dominant peak at \(m/z \approx 1501\) — one peak per molecule, because MALDI mostly produces singly charged ions. The same peptide in ESI might show several peaks (charge states 2, 3, 4…), which is why MALDI spectra are easier to read for mixtures.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Flight time | Mass | Time ∝ √(m/z), not m/z itself — a 4× heavier ion takes only 2× as long |
| ESI multiply charged peaks | Impurities | The envelope of peaks at successive charge states is one molecule, not a mixture |
| m/z measured | Neutral mass | In ESI, m/z = (M + n·1.008)/n; forgetting the charge understates M by a factor of n |
| MALDI matrix | Sample contamination | The matrix is deliberate and necessary; it absorbs the laser energy and protects the analyte |
| TOF (no magnet) | Magnetic sector | Both measure m/z, but TOF uses time in a field-free tube; sector uses curvature in a magnet |
| Soft ionization = no fragmentation | Fragmentation is impossible | Soft methods minimize fragmentation, but tandem MS deliberately fragments selected ions for sequencing |
| Same kinetic energy | Same speed | All ions of a given charge share KE after acceleration; lighter ones move faster |
| Reflectron doubles path | Reflectron is optional | The reflectron corrects energy spread AND lengthens the flight path, improving both resolution and separation |

## Quick Review

1. Why do lighter ions arrive at a TOF detector before heavier ones?
<details>
<summary>Answer</summary>
All ions of the same charge gain the same kinetic energy \(zeV\), so speed \(v = \sqrt{2zeV/m}\) is larger for lighter ions; flight time \(t = L/v\) is therefore shorter.
</details>

2. What is the purpose of the matrix in MALDI?
<details>
<summary>Answer</summary>
The matrix absorbs the laser pulse's energy and vaporizes, carrying the analyte into the gas phase gently — preventing fragmentation of large biomolecules.
</details>

3. Why does ESI "solve" the problem of weighing huge proteins?
<details>
<summary>Answer</summary>
ESI adds many protons, producing multiply charged ions \([M+nH]^{n+}\). The measured m/z = (M + n·1.008)/n is small even for huge M, and the charge-state envelope allows exact reconstruction of M.
</details>

4. How does a reflectron improve a TOF spectrum?
<details>
<summary>Answer</summary>
It reflects ions back through the tube with an electric field, so faster ions travel slightly farther and slower ones turn earlier — ions of the same m/z arrive together despite kinetic-energy spread, sharpening peaks (higher resolution).
</details>

5. A TOF instrument has tube length 2.00 m and voltage 20,000 V. If an m/z = 100 ion takes 10.2 μs, how long does an m/z = 900 ion take?
<details>
<summary>Answer</summary>
\(t \propto \sqrt{m/z}\): \(t_{900} = 10.2\sqrt{9} = 30.6\ \mu\text{s}\).
</details>

6. Which ionization method gives mostly singly charged ions, and which gives multiply charged ions?
<details>
<summary>Answer</summary>
MALDI gives mostly singly charged \([M+H]^+\); ESI gives a distribution of multiply charged \([M+nH]^{n+}\) ions.
</details>

## Related Topics

- [Mass Spectrometry of Small Molecules: Magnetic-Sector Instruments](01-mass-spectrometry-of-small-molecules-magnetic-sector-instruments.md)
- [Interpreting Mass Spectra](02-interpreting-mass-spectra.md)
- [Mass Spectrometry of Some Common Functional Groups](03-mass-spectrometry-of-some-common-functional-groups.md)
- [Spectroscopy and the Electromagnetic Spectrum](05-spectroscopy-and-the-electromagnetic-spectrum.md)
- [Chapter 12 README](../README.md)
