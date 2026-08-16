---
title: "Biological Effects of Radiation"
subject: "Science"
book: "Chemistry 2e"
chapter: "21: Nuclear Chemistry"
topic_number: "6"
source: "chemistry-2e.md"
tags:
  - "biological-effects-of-radiation"
  - "science"
status: "complete"
---

# Biological Effects of Radiation

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 21: Nuclear Chemistry](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

Radiation interacts with living tissue by depositing energy. When an alpha, beta, or gamma emission passes through cells, it can knock electrons out of molecules, breaking bonds and creating reactive fragments. Most of the time the damage is repaired or the cell dies quietly — but a mis-repaired DNA break can become a permanent mutation, and enough damage at once can overwhelm repair systems. The **biological effects of radiation** study how much energy, delivered how fast, to which tissue, produces which outcome.

Two ideas frame the topic. First, the amount of energy deposited matters, but so does the *kind* of radiation: an alpha particle deposits its energy in a tiny volume and is far more damaging per joule than a gamma ray. Second, effects come in two flavors — **deterministic** effects that appear above a threshold dose (radiation burns, sickness) and **stochastic** effects whose probability rises with dose but whose severity does not (cancer). This framework turns decay physics into practical decisions about imaging, limits, and reactor safety.

## Why This Matters

Radiation is everywhere — cosmic rays, radon in basements, medical scans — and exposure limits come from decades of study. Understanding biological effects lets you read those limits intelligently instead of dismissing radiation or fearing it irrationally. Dose limits exist because effects accumulate; this topic explains why a chest X-ray is a tiny, justified risk while an uncontrolled source is a serious hazard. The difference is dose, dose rate, and type of radiation. On exams, expect unit conversions between grays, sieverts, rads, and rems, and expect to compare the biological impact of different radiation types.

## Core Concepts

### Ionizing versus non-ionizing radiation

**Ionizing radiation** carries enough energy per particle or photon to strip electrons from atoms and break chemical bonds; alpha particles, beta particles, gamma rays, and X-rays qualify. **Non-ionizing radiation** — visible light, radio waves, microwaves — lacks that energy; it can heat tissue but cannot knock electrons loose. This distinction matters because ionization creates the reactive species that damage DNA: a gamma photon deposits energy over a long path, while an alpha particle dumps comparable energy into a microscopic volume.

### Direct and indirect damage

Radiation harms cells through two routes. **Direct damage** occurs when radiation strikes DNA itself. **Indirect damage** is more common: radiation ionizes water, producing highly reactive **free radicals** such as hydroxyl (\(\ce{OH\cdot}\)), which diffuse a short distance and attack DNA, proteins, and membranes. Repair enzymes fix most single-strand breaks; double-strand breaks are harder to repair and are the main source of permanent mutation.  Rapidly dividing cells — bone marrow, intestinal lining, hair follicles, and tumors — are most sensitive because they have less time to repair before the next division.

### Measuring dose: grays, sieverts, rads, and rems

**Absorbed dose** is the energy deposited per unit mass of tissue, measured in **grays** (Gy); \(1\ \text{Gy} = 1\ \text{J/kg}\). The older unit is the **rad**: \(1\ \text{Gy} = 100\ \text{rad}\). Because equal absorbed doses of different radiation types do *different* biological damage, the **equivalent dose** weights the absorbed dose by a radiation weighting factor \(w_R\):

\[
H = D \times w_R
\]

where \(D\) is absorbed dose in grays. Equivalent dose is measured in **sieverts** (Sv); the older unit is the **rem**, with \(1\ \text{Sv} = 100\ \text{rem}\). Weighting factors are about 1 for gamma, X-ray, and beta; 5–20 for neutrons; and about 20 for alpha. A further refinement, **effective dose**, multiplies by tissue weighting factors reflecting that some organs are more radiosensitive than others — the quantity used for occupational and public dose limits.

### Deterministic and stochastic effects

**Deterministic effects** occur only above a threshold dose and worsen with dose: skin reddening, hair loss, cataracts, and acute radiation sickness. A whole-body dose above roughly 1 Sv (100 rem) can produce radiation sickness — nausea, fatigue, blood-cell changes — and a dose near 4–5 Sv without care is often fatal. **Stochastic effects** — mainly cancer — have no threshold in the standard model: any dose raises the probability slightly, and risk is assumed proportional to dose (the **linear no-threshold, LNT, model**). LNT is a conservative policy tool, not a measured certainty at low doses; it underlies the "as low as reasonably achievable" (ALARA) principle used to justify every radiation exposure, including medical imaging.

### Background radiation

No one receives zero dose. The global average background is about **2.4–3 mSv per year** (240–300 mrem), and in the United States about **6 mSv per year**, with radon gas in homes contributing roughly half. Background comes from cosmic rays, radioactive potassium-40 and carbon-14 inside the body, and radioactive elements in soil and buildings. Medical procedures add on top: a chest X-ray is about 0.1 mSv, a mammogram about 0.4 mSv, a typical CT scan about 10 mSv — roughly several years of background. These are approximations; exact values depend on equipment, protocol, and geography.

### Radiation protection principles

Three principles reduce exposure: **time** (spend less time near the source), **distance** (intensity falls roughly as \(1/r^2\) for a point source), and **shielding** (absorb radiation in the right material: paper for alpha, a few millimeters of aluminum for beta, lead or concrete for gamma and neutrons). These are general principles; specific procedures, limits, and licensed practices are governed by regulations (for example, the U.S. Nuclear Regulatory Commission's 50 mSv/yr occupational effective-dose limit).

## ELI-10: Explain Like I'm 10

> Radiation is like throwing tiny darts at your cells. A few darts, and your body patches the tiny holes — no problem. Many darts at once, and the cell can't fix itself and gets sick or dies. Big, slow darts (alpha) do the most damage in one spot, while tiny fast darts (gamma) pass through with less harm per dart — that's why the same number of darts can mean very different things.

## High-Yield Points

- Ionizing radiation (alpha, beta, gamma, X-ray) can strip electrons and damage DNA; non-ionizing radiation cannot.
- Indirect damage via water → free radicals causes most DNA damage; rapidly dividing cells are most radiosensitive.
- Absorbed dose: gray (Gy), \(1\ \text{Gy} = 1\ \text{J/kg} = 100\ \text{rad}\).
- Equivalent dose: \(H = D \times w_R\), in sieverts (Sv); \(1\ \text{Sv} = 100\ \text{rem}\). Alpha \(w_R \approx 20\), gamma/beta/X-ray \(w_R \approx 1\).
- Deterministic effects have a threshold (radiation sickness above ~1 Sv whole-body); stochastic effects (cancer) are modeled as proportional to dose (LNT).
- Background averages ~2.4–3 mSv/yr globally, ~6 mSv/yr in the U.S. (radon is the largest indoor contributor).
- Protection: time, distance, shielding; ALARA applies to every justified exposure.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Ionizing radiation | Radiation with enough energy to strip electrons and break chemical bonds | The type of radiation that damages DNA and causes biological effects |
| Free radical | A reactive fragment (e.g., \(\ce{OH\cdot}\)) formed when radiation ionizes water | Carries most of the indirect damage to DNA |
| Absorbed dose | Energy deposited per kilogram of tissue, in grays (Gy) | The physical quantity measured by dosimeters |
| Equivalent dose | Absorbed dose weighted by radiation type, \(H = D \times w_R\), in sieverts (Sv) | Lets you compare biological impact across alpha, beta, and gamma |
| Effective dose | Equivalent dose weighted by tissue sensitivity | The quantity used for occupational limits and risk comparisons |
| Deterministic effect | Effect with a threshold dose, worsening with dose (burns, radiation sickness) | Sets the doses that cause acute illness |
| Stochastic effect | Effect whose probability rises with dose, severity independent (cancer) | Motivates ALARA and dose limits |
| ALARA | "As low as reasonably achievable" | The principle that every exposure must be justified and minimized |

## How It Works / Step-by-Step Process

1. Identify the radiation type and its weighting factor \(w_R\) (alpha ≈ 20; gamma, beta, X-ray ≈ 1; neutrons 5–20).
2. Convert the absorbed dose to grays if given in rads (\(1\ \text{Gy} = 100\ \text{rad}\)).
3. Apply the equivalent-dose formula \(H = D \times w_R\) and report in sieverts (or convert to rem, \(1\ \text{Sv} = 100\ \text{rem}\)).
4. Compare with reference doses: background ~3 mSv/yr (US ~6 mSv/yr), chest X-ray ~0.1 mSv, CT ~10 mSv, deterministic threshold ~1 Sv.
5. Assess the scenario: above-threshold dose → deterministic risk; low dose → small stochastic risk; reduce exposure with time, distance, and shielding.

## Examples

### Example 1: Comparing alpha and gamma doses

A worker's skin receives 0.05 Gy from gamma rays and, in a separate incident, 0.05 Gy from alpha particles. Compare the equivalent doses. For gamma, \(w_R \approx 1\):

\[
H = D \times w_R = (0.05\ \text{Gy})(1) = 0.05\ \text{Sv} = 5\ \text{rem}
\]

For alpha, \(w_R \approx 20\):

\[
H = (0.05\ \text{Gy})(20) = 1.0\ \text{Sv} = 100\ \text{rem}
\]

The same absorbed energy delivers 20 times the biological dose when carried by alpha particles. This is why alpha emitters like americium are hazardous mainly if ingested or inhaled: outside the body their short range means they never reach living tissue, but inside, their high weighting makes them potent. 

### Example 2: Converting a medical imaging dose

A CT scan delivers an effective dose of about 10 mSv. Express this in rem and compare with one year of average global background. Convert using the unit relationship:

\[
10\ \text{mSv} \times \frac{1\ \text{Sv}}{1000\ \text{mSv}} \times \frac{100\ \text{rem}}{1\ \text{Sv}} = 1.0\ \text{rem}
\]

Compared with ~2.4–3 mSv/yr background (0.24–0.30 rem/yr), one CT is roughly three to four years of average background exposure — why imaging is justified only when benefit outweighs the small added risk, the essence of ALARA.

### Example 3: Shielding with distance (inverse-square rule)

For a point source the dose rate falls as the square of distance: doubling distance quarters the rate. If a technician measures 400 µSv/h at 0.5 m from a source, the rate at 2 m (four times the distance) is

\[
\frac{400\ \mu\text{Sv/h}}{(2/0.5)^2} = \frac{400\ \mu\text{Sv/h}}{16} = 25\ \mu\text{Sv/h}
\]

The rate drops by a factor of 16 with only a fourfold increase in distance — the simplest effective protection.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Exposure | Contamination | Exposure means radiation passes through you; contamination means radioactive material is on or in you, continuing to expose you until removed |
| Rad and rem | Gray and sievert | Rad/rem are the older units; 1 Gy = 100 rad and 1 Sv = 100 rem. Grays measure absorbed energy; sieverts measure weighted biological effect |
| Equivalent dose | Effective dose | Equivalent dose weights by radiation type only; effective dose also weights by which organs are irradiated |
| "All radiation is equally dangerous" | Dose-response differences | Type, dose, dose rate, and tissue all change the outcome; 0.1 mSv and 10 Sv are radically different |
| LNT model | Measured low-dose fact | LNT is a conservative extrapolation for regulation; low-dose cancer risk is too small to measure directly |
| Radiation sickness (deterministic) | Cancer (stochastic) | Sickness needs a high threshold dose and appears quickly; cancer risk rises slowly with dose and appears years later |
| Alpha "always most dangerous" | Context-dependent hazard | Alpha is only dangerous when internal; externally it is stopped by skin or paper. Gamma is the external hazard |

## Quick Review

1. A sample of tissue absorbs 0.2 Gy from beta radiation. What is the equivalent dose in sieverts and in rem?
2. Why does an alpha particle have a weighting factor near 20 while a gamma ray has about 1?
3. What is the difference between deterministic and stochastic effects, and why does it matter for safety limits?
4. Why is radon the largest contributor to average background dose in the United States?
5. A point source gives 100 µSv/h at 1 m. What is the rate at 4 m?
6. Why are rapidly dividing cells (bone marrow, intestinal lining) more sensitive to radiation than resting cells?

<details>
<summary>Show answers</summary>

1. \(H = D \times w_R = 0.2\ \text{Gy} \times 1 = 0.2\ \text{Sv}\), and \(0.2\ \text{Sv} \times 100\ \text{rem/Sv} = 20\ \text{rem}\).
2. An alpha particle deposits all its energy in a very short path, so the ionization density — and the chance of a double-strand DNA break — is far higher per joule than for a sparsely ionizing gamma ray.
3. Deterministic effects appear only above a threshold and worsen with dose (e.g., radiation sickness above ~1 Sv); stochastic effects have no threshold and their probability rises with dose (cancer). Limits keep stochastic risk low and stay below deterministic thresholds.
4. Radon-222, produced in the uranium-238 decay series, seeps from soil into buildings; its short-lived decay products are alpha emitters that can be inhaled and deposit high weighted doses on lung tissue.
5. Doubling distance twice quarters the rate twice: \(100/16 = 6.25\ \mu\text{Sv/h}\); directly, \(100 \times (1/4)^2 = 6.25\ \mu\text{Sv/h}\).
6. Dividing cells copy DNA frequently, so a radiation-induced lesion has less time to be repaired before being replicated into a permanent mutation; this is also why rapidly dividing tumors are selectively damaged by radiation therapy.

</details>

## Related Topics

- Previous: [Uses of Radioisotopes](05-uses-of-radioisotopes.md)
- Next: End of chapter
- Related: [Nuclear Chemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: \(1\ \text{Gy} = 1\ \text{J/kg} = 100\ \text{rad}\); \(1\ \text{Sv} = 100\ \text{rem}\); alpha weighting ≈ 20, gamma/beta/X-ray ≈ 1; global background ~2.4–3 mSv/yr; U.S. average ~6 mSv/yr; chest X-ray ~0.1 mSv; CT ~10 mSv; occupational limit 50 mSv/yr effective (standard published values; approximations flagged in text).
- Note: dose figures are representative approximations, not precise values for any individual procedure or location; this guide states general principles only and defers specifics to licensed professionals and current regulations.
- Last updated: 2026-08-16
