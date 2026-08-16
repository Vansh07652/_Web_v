#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readCurriculumCorpus } from "./curriculum-corpus.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (message) => errors.push(message);

/**
 * Question quality checks, aimed at the two things a practice screen depends on:
 * a multiple-choice question that can actually be answered, and a numeric
 * question whose computation can actually be graded.
 *
 * ON HOW MANY CALCULATION QUESTIONS THERE ARE
 *
 * 23,927 of the 25,000 placements have a computation key, but 23,617 of those
 * are literally null - the corpus's way of writing "this is not a calculation
 * question". Only 310 carry an object. A null is counted below and is never an
 * error; the counts line reports both numbers so nobody reads the larger one as
 * the size of the numeric-entry bank.
 *
 * ON UNITS
 *
 * computation.unit in this corpus is not a controlled vocabulary. It is a
 * free-text label for the answer, and it takes 175 distinct values across the
 * 310 placements that carry a computation - most appearing once, and many of
 * them whole phrases. So the check runs in two tiers:
 *
 *   1. the reviewed measurement units, read straight out of
 *      src/lib/quiz/calculation.ts so the grader and this validator can never
 *      disagree about what a unit is;
 *   2. REVIEWED_ANSWER_LABELS below - every other unit string present in the
 *      corpus when this file was written, recorded verbatim.
 *
 * A unit string in neither tier is an error. That is the point: the snapshot
 * passes today, and the first unreviewed label anyone adds fails the build until
 * someone looks at it and decides which tier it belongs in.
 */

/**
 * The reviewed measurement units, parsed out of the grader's own table. Reading
 * the source rather than copying it means the two cannot drift; a reformat that
 * defeats the parse empties the list, which fails loudly below rather than
 * quietly passing everything.
 */
const readUnitTable = () => {
  const source = fs.readFileSync(path.join(root, "src", "lib", "quiz", "calculation.ts"), "utf8");
  const entries = [];
  const pattern = /\{\s*canonical:\s*"([^"]+)",\s*dimension:\s*"([^"]+)",[^}]*?aliases:\s*\[([^\]]*)\]\s*\}/g;
  let match = pattern.exec(source);
  while (match) {
    const aliases = [...match[3].matchAll(/"([^"]*)"/g)].map((alias) => alias[1]);
    entries.push({ canonical: match[1], dimension: match[2], aliases });
    match = pattern.exec(source);
  }
  return entries;
};

const unitTable = readUnitTable();
if (unitTable.length < 10) fail(`Only ${unitTable.length} units could be read from src/lib/quiz/calculation.ts; the reviewed unit table could not be parsed`);

const unitAliases = new Map();
for (const unit of unitTable) {
  unitAliases.set(unit.canonical.toLowerCase(), unit.canonical);
  for (const alias of unit.aliases) unitAliases.set(alias, unit.canonical);
}

/** Matches the grader's own folding: trim, lower-case, collapse whitespace, drop trailing dots. */
const fold = (unit) => unit.trim().toLowerCase().replace(/\s+/g, " ").replace(/\.+$/, "");

const measurementUnit = (unit) => {
  const folded = fold(unit);
  if (!folded) return undefined;
  return unitAliases.get(folded) ?? (folded.endsWith("s") ? unitAliases.get(folded.slice(0, -1)) : undefined);
};

/**
 * Every computation.unit string in the corpus that is a free-text answer label
 * rather than a measurement unit, exactly as written, recorded at review time.
 * Adding a value here is a review decision, not a formality.
 */
const REVIEWED_ANSWER_LABELS = new Set([
  "% reporting back pain",
  "GRADE certainty rating (4 = high, 3 = moderate, 2 = low, 1 = very low)",
  "M",
  "Pauling electronegativity difference for N-H",
  "Pauling electronegativity difference per C=O bond",
  "Pauling electronegativity units",
  "amu (g/mol)",
  "atoms",
  "atoms per formula unit",
  "bicarbonate-to-dissolved-CO2 ratio (dimensionless)",
  "bonding electrons",
  "calendar year follow-up ends",
  "carbon atoms per hydroxyl group",
  "charge units (+)",
  "clinical hours (corrected mean)",
  "clinics per condition",
  "components",
  "controls per case",
  "core (inner) electrons",
  "covalent bonds",
  "days (mean length of stay)",
  "decimal",
  "degrees Celsius difference in boiling point",
  "degrees of unsaturation",
  "difference in absolute value of r",
  "electrons",
  "electrons in one CH4 molecule",
  "exam points",
  "extra oxygen atom per molecule",
  "falls per month (median)",
  "fold change in [H3O+]",
  "fold change in ion concentration",
  "fold difference in solubility",
  "g CO2",
  "g NH3",
  "g NaCl per L",
  "g of water",
  "g/mol difference in molar mass",
  "g/mol lost as two hydrogen atoms",
  "growth score units",
  "hours (corrected mean)",
  "hydrocarbon tails per 500 phospholipids",
  "hydrogen atoms in a 3-carbon alkane",
  "hydrogen atoms in each C4H10 isomer",
  "ions per formula unit",
  "kJ to vaporize 2 mol of water at 100 degrees Celsius",
  "kJ/mol difference between an O-H bond and a hydrogen bond",
  "kappa coefficient",
  "levels separating the two designs",
  "m",
  "mEq per mmol Ca2+",
  "mEq/L Ca2+",
  "mEq/L K+",
  "mEq/L anion gap",
  "mEq/L bicarbonate",
  "mL (45 g x 1 mL per g)",
  "mL of 0.05 mol/L base needed to neutralize 25 mL of 0.1 mol/L monoprotic acid",
  "measurement points",
  "minutes added at each step of the dose ladder",
  "missed cases",
  "mmol/L bicarbonate",
  "mol Ca(OH)2",
  "mol Cl-",
  "mol H2O",
  "mol O2",
  "mol ions per mol MgCl2",
  "mol of atoms",
  "mol of dissolved ions from 0.15 mol NaCl",
  "mol of ions",
  "mol/L Cl-",
  "mol/L hydronium in 0.1 mol/L fully ionized monoprotic strong acid (pH 1)",
  "molecules",
  "more electrons in I2 than in F2",
  "net positive charge units",
  "neutrons",
  "nucleons (protons + neutrons)",
  "ordinal position of the median in the ordered set",
  "oxygen atoms in lactic acid",
  "pH units (Henderson–Hasselbalch with a 20:1 ratio)",
  "pH units between the target pH and the selected pKa",
  "pKa units separating ethanol and acetic acid",
  "participants",
  "participants per arm",
  "participants per condition",
  "participants per group",
  "participants total",
  "particle ratio (NaCl : glucose)",
  "particles/mol",
  "people treated per event prevented",
  "percent of total attraction from dipole-dipole",
  "percentage points",
  "points (interval width)",
  "portions",
  "primary sources",
  "product molecules formed from 2 H2O2",
  "projects",
  "proportion",
  "proportion (I-CVI)",
  "proportion of quiz-score variance shared with study hours",
  "proportion of shared variance (r squared)",
  "proportion of the cohort classified as heavy coffee drinkers",
  "proton masses per electron mass (ratio)",
  "protons",
  "protons (atomic number)",
  "quiz points",
  "quiz points (range of each class)",
  "ratio",
  "ratio (dimensionless)",
  "ratio of HCO3- (24 mmol/L) to dissolved CO2 (1.2 mmol/L)",
  "ratio of bicarbonate to dissolved CO2 (dimensionless)",
  "ratio of moles (water to glucose)",
  "ratio of protonated to neutral amine",
  "reliability coefficient",
  "scale points",
  "second term",
  "skills points (combined mean)",
  "sources",
  "spectator ions removed",
  "staff members total",
  "standard deviations",
  "step number",
  "students reporting the modal blood type",
  "study groups",
  "study hours (revised mean)",
  "times",
  "times as many participants",
  "times larger",
  "times longer (dimensionless ratio)",
  "total coefficient units",
  "unitless ratio",
  "units of positive charge",
  "valence electrons",
  "validity coefficient",
  "water molecules released forming a pentapeptide",
  "water molecules released forming one triglyceride",
  "year",
  "years from first to last wave",
  "years of age at end of follow-up",
  "years of age gap between the two samples",
]);

const corpus = readCurriculumCorpus();
let questions = 0;
let withComputation = 0;
let gradable = 0;
let withTolerance = 0;
let nullTolerance = 0;
let withMeasurementUnit = 0;
let withAnswerLabel = 0;
let emptyUnit = 0;
let noUnit = 0;
let nullComputation = 0;
const distinctUnits = new Set();

for (const subject of corpus.subjects) {
  const slug = subject.summary.slug;
  for (const question of subject.questions) {
    questions += 1;
    const id = `${slug}/${question.id ?? "<no id>"}`;
    const options = Array.isArray(question.options) ? question.options : [];
    const computation = question.computation;
    // null is the corpus's way of saying "not a calculation question", and it
    // is by far the most common value of this field. It is not a defect.
    if (computation === null) nullComputation += 1;
    const hasComputation = computation !== undefined && computation !== null;

    // A question with fewer than two options and no computation cannot be
    // answered at all: nothing to choose between, and nothing to type.
    if (options.length < 2 && !hasComputation) {
      fail(`${id}: ${options.length} option(s) and no computation, so it cannot be answered`);
    }
    // Every multiple-choice question must have a correctAnswer that points at
    // one of its own options.
    if (options.length >= 2) {
      const ids = new Set(options.map((option) => option && option.id));
      if (typeof question.correctAnswer !== "string" || !ids.has(question.correctAnswer)) {
        fail(`${id}: correctAnswer ${JSON.stringify(question.correctAnswer)} does not resolve to one of its option ids`);
      }
    }

    if (!hasComputation) continue;
    withComputation += 1;
    if (typeof computation !== "object" || Array.isArray(computation)) {
      fail(`${id}: computation is ${Array.isArray(computation) ? "an array" : typeof computation}, not an object`);
      continue;
    }

    if (!Number.isFinite(computation.expected_value)) {
      fail(`${id}: computation.expected_value ${JSON.stringify(computation.expected_value)} is not a finite number`);
    } else {
      gradable += 1;
    }
    if (computation.expression !== undefined && (typeof computation.expression !== "string" || !computation.expression.trim())) {
      fail(`${id}: computation.expression is present but not a non-empty string`);
    }
    // null is the corpus's ordinary way of saying "no tolerance"; it means an
    // exact match is required, and it is not a defect.
    if (computation.tolerance === null || computation.tolerance === undefined) {
      nullTolerance += 1;
    } else if (typeof computation.tolerance !== "number" || !Number.isFinite(computation.tolerance) || computation.tolerance < 0) {
      fail(`${id}: computation.tolerance ${JSON.stringify(computation.tolerance)} is not a non-negative finite number`);
    } else {
      withTolerance += 1;
    }

    if (computation.unit === undefined || computation.unit === null) {
      noUnit += 1;
      continue;
    }
    if (typeof computation.unit !== "string") {
      fail(`${id}: computation.unit ${JSON.stringify(computation.unit)} is not a string`);
      continue;
    }
    distinctUnits.add(computation.unit);
    const trimmed = computation.unit.trim();
    if (!trimmed) {
      emptyUnit += 1;
    } else if (measurementUnit(trimmed)) {
      withMeasurementUnit += 1;
    } else if (REVIEWED_ANSWER_LABELS.has(trimmed)) {
      withAnswerLabel += 1;
    } else {
      fail(`${id}: computation.unit ${JSON.stringify(computation.unit)} is neither a reviewed measurement unit nor a reviewed answer label`);
    }
  }
}

console.log(`QUESTION QUALITY: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`${questions} questions in ${corpus.subjects.length} courses; ${withComputation} carry a computation object and ${gradable} are calculation-capable, against ${nullComputation} placements whose computation is null; ${withTolerance} state a tolerance, ${nullTolerance} leave it null; units: ${withMeasurementUnit} measurement, ${withAnswerLabel} reviewed answer label, ${emptyUnit} empty, ${noUnit} absent, ${distinctUnits.size} distinct strings against ${unitTable.length} reviewed units and ${REVIEWED_ANSWER_LABELS.size} reviewed labels`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
