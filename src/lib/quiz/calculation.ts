/**
 * Grading for numeric-entry (calculation) questions.
 *
 * WHAT THIS IS BUILT ON
 *
 * The only evidence in this repository for a numeric answer is the
 * `computation` object some question placements carry:
 *
 *     { expression, expected_value, tolerance, unit }
 *
 * Nothing here authors a calculation, a dosage, a solution step or any clinical
 * fact. Every number graded comes from `expected_value`; every tolerance comes
 * from `tolerance`. Where the corpus says nothing, this module says nothing.
 *
 * HOW MANY QUESTIONS THIS ACTUALLY REACHES
 *
 * 23,927 of the 25,000 question placements have a `computation` key, but 23,617
 * of those are literally `null` — the corpus's way of writing "this is not a
 * calculation question". Only 310 placements carry an object, and all 310 have
 * a finite `expected_value`. So numeric entry applies to 310 questions, not to
 * 23,927, and `parseCalculationSpec` returns `undefined` for the rest rather
 * than inventing a number for them.
 *
 * THE UNIT TABLE
 *
 * `computation.unit` in this corpus is not a controlled vocabulary. It is a
 * free-text label for the answer, and across the corpus it takes 175 distinct
 * values, most of them appearing once and many of them whole phrases such as
 * "water molecules released forming a pentapeptide". So the table below covers
 * only the strings that are genuinely measurement units, on two rules:
 *
 *   1. the unit symbol actually occurs in `computation.unit` somewhere in the
 *      corpus, and
 *   2. every conversion inside a dimension is an exact defined ratio — SI
 *      prefixes, and the international pound at exactly 0.45359237 kg.
 *
 * Rule 1 has exactly one admitted exception, `L`, which no question uses but a
 * learner may reasonably type when the question asks for mL. It is marked
 * below.
 *
 * Two units that do occur are deliberately left out. The corpus uses `M` for
 * molarity (general chemistry) and `m` for metres (a scale-drawing question in
 * nursing maths). Unit matching folds case, which would make those two
 * indistinguishable, and accepting metres for a molarity answer is exactly the
 * silent mis-grade this module exists to prevent. Inventing a case-sensitive
 * exception for two units would be a rule nothing in the corpus supports, so
 * both are treated as free-text labels instead. `mol/L` and `mmol/L`, which are
 * unambiguous, are in the table.
 *
 * Conversion never crosses a dimension. mEq/L and osmol/L in particular are
 * their own dimensions: converting either to mmol/L needs a valence or a
 * particle count, which is a chemical judgement this module will not make.
 *
 * HOW A UNIT IS TREATED WHEN GRADING
 *
 *   spec has no unit                 the number alone is graded
 *   spec unit is in the table        a unit is required, and is converted
 *   spec unit is a free-text label   the number alone is graded, and an answer
 *                                    that supplies a unit anyway is rejected
 *                                    rather than quietly accepted
 *
 * PURITY
 *
 * Nothing here reads a clock, storage or the network, and nothing mutates its
 * arguments. This module is completely separate from `lib/quiz.ts`, which grades
 * multiple choice and is not imported, referenced or changed by any of it.
 */

export interface CalculationSpec {
  expression?: string;
  expectedValue: number;
  unit?: string;
  tolerance?: number | null;
}

export interface CalculationAnswer {
  value: string;
  unit?: string;
}

export interface CalculationResult {
  status: "correct" | "incorrect" | "invalid-number" | "missing-unit" | "unknown-unit";
  message: string;
  /** The answer converted into the spec's unit. Absent when it could not be read. */
  normalizedValue?: number;
  /** The canonical symbol the answer was compared in. Absent when no unit applies. */
  normalizedUnit?: string;
  expected?: number;
}

interface UnitDefinition {
  canonical: string;
  dimension: string;
  /** `canonicalValue = value * numerator / denominator`, both exact integers. */
  numerator: number;
  denominator: number;
  aliases: readonly string[];
}

/**
 * The reviewed unit table. `scripts/validate-question-quality.mjs` keeps its own
 * copy of the canonical symbols and fails if the two lists drift apart, so this
 * array is the single place a unit is added or removed.
 */
const UNIT_TABLE: readonly UnitDefinition[] = [
  // Mass. Base: gram.
  { canonical: "g", dimension: "mass", numerator: 1, denominator: 1, aliases: ["g", "gm", "gram", "grams"] },
  { canonical: "mg", dimension: "mass", numerator: 1, denominator: 1000, aliases: ["mg", "milligram", "milligrams"] },
  { canonical: "mcg", dimension: "mass", numerator: 1, denominator: 1_000_000, aliases: ["mcg", "ug", "µg", "μg", "microgram", "micrograms"] },
  { canonical: "kg", dimension: "mass", numerator: 1000, denominator: 1, aliases: ["kg", "kilogram", "kilograms"] },
  // 1 lb = 0.45359237 kg exactly, by definition of the international pound.
  { canonical: "lb", dimension: "mass", numerator: 45_359_237, denominator: 100_000, aliases: ["lb", "lbs", "pound", "pounds"] },
  // Volume. Base: millilitre.
  { canonical: "mL", dimension: "volume", numerator: 1, denominator: 1, aliases: ["ml", "milliliter", "milliliters", "millilitre", "millilitres"] },
  // `L` occurs in no question's unit field. It is admitted so that a learner who
  // answers 0.5 L to an mL question is converted rather than rejected.
  { canonical: "L", dimension: "volume", numerator: 1000, denominator: 1, aliases: ["l", "liter", "liters", "litre", "litres"] },
  // Amount concentration. Base: mol/L. `M` is excluded; see the header.
  { canonical: "mol/L", dimension: "amount-concentration", numerator: 1, denominator: 1, aliases: ["mol/l", "moles/l", "mol per l"] },
  { canonical: "mmol/L", dimension: "amount-concentration", numerator: 1, denominator: 1000, aliases: ["mmol/l", "millimol/l", "millimoles/l"] },
  // Mass concentration. Base: g/L. 1 g/L = 1 mg/mL exactly.
  { canonical: "g/L", dimension: "mass-concentration", numerator: 1, denominator: 1, aliases: ["g/l"] },
  { canonical: "mg/mL", dimension: "mass-concentration", numerator: 1, denominator: 1, aliases: ["mg/ml"] },
  // Everything below is a dimension of one: recognised, never converted.
  { canonical: "percent", dimension: "percent", numerator: 1, denominator: 1, aliases: ["percent", "percents", "%", "pct", "per cent"] },
  { canonical: "pH", dimension: "ph", numerator: 1, denominator: 1, aliases: ["ph", "ph unit", "ph units"] },
  { canonical: "mEq/L", dimension: "milliequivalent-concentration", numerator: 1, denominator: 1, aliases: ["meq/l"] },
  { canonical: "osmol/L", dimension: "osmolarity", numerator: 1, denominator: 1, aliases: ["osmol/l", "osm/l"] },
  { canonical: "g/mol", dimension: "molar-mass", numerator: 1, denominator: 1, aliases: ["g/mol"] },
  { canonical: "mol", dimension: "amount", numerator: 1, denominator: 1, aliases: ["mol", "mols", "mole", "moles"] },
  { canonical: "amu", dimension: "atomic-mass", numerator: 1, denominator: 1, aliases: ["amu"] },
  { canonical: "mmHg", dimension: "pressure", numerator: 1, denominator: 1, aliases: ["mmhg", "mm hg"] },
  { canonical: "mL/hr", dimension: "infusion-rate", numerator: 1, denominator: 1, aliases: ["ml/hr", "ml/h", "ml/hour", "ml per hour"] },
  { canonical: "mL/kg/hr", dimension: "weight-based-infusion-rate", numerator: 1, denominator: 1, aliases: ["ml/kg/hr", "ml/kg/h", "ml/kg/hour"] },
  { canonical: "gtt/min", dimension: "drop-rate", numerator: 1, denominator: 1, aliases: ["gtt/min", "gtts/min", "gtt/minute", "gtt per min", "drops/min", "drops per minute"] },
  { canonical: "beats/min", dimension: "beat-rate", numerator: 1, denominator: 1, aliases: ["beats/min", "bpm", "beats per minute"] },
  { canonical: "ppm", dimension: "parts-per-million", numerator: 1, denominator: 1, aliases: ["ppm"] },
  { canonical: "hr", dimension: "time", numerator: 1, denominator: 1, aliases: ["hr", "hrs", "h", "hour", "hours"] },
  { canonical: "degrees C", dimension: "temperature", numerator: 1, denominator: 1, aliases: ["degrees c", "degree c", "°c", "celsius", "degrees celsius"] },
  { canonical: "tablets", dimension: "tablet-count", numerator: 1, denominator: 1, aliases: ["tablet", "tablets", "tab", "tabs"] },
  { canonical: "units", dimension: "dose-unit-count", numerator: 1, denominator: 1, aliases: ["unit", "units"] },
  { canonical: "cups", dimension: "cup-count", numerator: 1, denominator: 1, aliases: ["cup", "cups"] },
  { canonical: "points", dimension: "score-point", numerator: 1, denominator: 1, aliases: ["point", "points"] },
];

/** Every canonical symbol, in table order. Exported so the UI can list them. */
export const CALCULATION_UNITS: readonly string[] = UNIT_TABLE.map((unit) => unit.canonical);

const byAlias = new Map<string, UnitDefinition>();
for (const unit of UNIT_TABLE) {
  byAlias.set(unit.canonical.toLowerCase(), unit);
  for (const alias of unit.aliases) byAlias.set(alias, unit);
}

/**
 * Trim, lower-case and collapse whitespace. Safe to fold case because every
 * single-letter unit whose meaning depends on case is kept out of the table.
 */
const fold = (unit: string): string => unit.trim().toLowerCase().replace(/\s+/g, " ").replace(/\.+$/, "");

const lookup = (unit: unknown): UnitDefinition | undefined => {
  if (typeof unit !== "string") return undefined;
  const folded = fold(unit);
  if (!folded) return undefined;
  const direct = byAlias.get(folded);
  if (direct) return direct;
  // A trailing plural the alias list does not spell out, such as "mLs".
  return folded.endsWith("s") ? byAlias.get(folded.slice(0, -1)) : undefined;
};

/** The canonical symbol for a unit in the reviewed table, or `undefined`. */
export const normalizeUnit = (unit: string): string | undefined => lookup(unit)?.canonical;

/**
 * Exact-ratio conversion inside one dimension. Returns `undefined` when either
 * unit is outside the table or when the two sit in different dimensions —
 * this never converts a mass to a volume, or a millequivalent to a millimole.
 */
export const convertValue = (value: number, fromUnit: string, toUnit: string): number | undefined => {
  if (typeof value !== "number" || !Number.isFinite(value)) return undefined;
  const from = lookup(fromUnit);
  const to = lookup(toUnit);
  if (!from || !to || from.dimension !== to.dimension) return undefined;
  if (from.canonical === to.canonical) return value;
  return (value * from.numerator * to.denominator) / (from.denominator * to.numerator);
};

/**
 * Canonical symbols a question in this unit will accept, in table order. Empty
 * for anything outside the reviewed table, including the corpus's free-text
 * answer labels.
 */
export const acceptedUnitsFor = (unit: string): string[] => {
  const known = lookup(unit);
  if (!known) return [];
  return UNIT_TABLE.filter((entry) => entry.dimension === known.dimension).map((entry) => entry.canonical);
};

const asNonEmptyString = (value: unknown): string | undefined => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
};

/**
 * Reads one `computation` object from the corpus.
 *
 * Returns `undefined` unless `expected_value` is a finite number, which is the
 * only field a numeric question cannot do without. Everything else is optional
 * and is dropped rather than repaired when it is malformed: a tolerance that is
 * not a non-negative finite number becomes `null`, which means "exact match".
 */
export const parseCalculationSpec = (computation: unknown): CalculationSpec | undefined => {
  if (!computation || typeof computation !== "object" || Array.isArray(computation)) return undefined;
  const raw = computation as Record<string, unknown>;
  const expectedValue = raw.expected_value;
  if (typeof expectedValue !== "number" || !Number.isFinite(expectedValue)) return undefined;
  const spec: CalculationSpec = {
    expectedValue,
    tolerance: typeof raw.tolerance === "number" && Number.isFinite(raw.tolerance) && raw.tolerance >= 0
      ? raw.tolerance
      : null,
  };
  const expression = asNonEmptyString(raw.expression);
  if (expression) spec.expression = expression;
  const unit = asNonEmptyString(raw.unit);
  if (unit) spec.unit = unit;
  return spec;
};

/**
 * Floating-point slack, sized to the magnitudes being compared. Eight units in
 * the last place absorbs the error of a few arithmetic steps — enough for
 * `0.1 + 0.2` to equal `0.3` — while staying far too small to accept an answer
 * that is actually wrong.
 */
const slackFor = (a: number, b: number): number => Number.EPSILON * 8 * Math.max(1, Math.abs(a), Math.abs(b));

const NUMBER_PATTERN = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;

const listUnits = (units: string[]): string => {
  if (units.length <= 1) return units[0] ?? "";
  return `${units.slice(0, -1).join(", ")} or ${units[units.length - 1]}`;
};

/**
 * Grades one numeric answer.
 *
 * Never throws, never mutates `spec` or `answer`, and never states a clinical
 * fact: every message is about the shape of the answer, not about the medicine.
 */
export const gradeCalculation = (spec: CalculationSpec, answer: CalculationAnswer): CalculationResult => {
  const expected = spec?.expectedValue;
  if (typeof expected !== "number" || !Number.isFinite(expected)) {
    return { status: "incorrect", message: "This question has no expected answer recorded, so it cannot be checked." };
  }

  const rawValue = typeof answer?.value === "string" ? answer.value.trim() : "";
  if (!rawValue) {
    return { status: "invalid-number", message: "Enter your answer as a number.", expected };
  }
  if (rawValue.includes(",")) {
    return { status: "invalid-number", message: "Use a decimal point, like 12.5, rather than a comma.", expected };
  }
  if (!NUMBER_PATTERN.test(rawValue)) {
    return { status: "invalid-number", message: "Enter digits only, like 12.5. Put any unit in the unit field.", expected };
  }
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) {
    return { status: "invalid-number", message: "That number is too large or too small to check.", expected };
  }

  const specUnit = asNonEmptyString(spec?.unit);
  const answerUnit = asNonEmptyString(answer?.unit);
  const specCanonical = specUnit ? normalizeUnit(specUnit) : undefined;
  let value = parsed;
  let normalizedUnit: string | undefined;

  if (specUnit && specCanonical) {
    const accepted = listUnits(acceptedUnitsFor(specCanonical));
    if (!answerUnit) {
      return {
        status: "missing-unit",
        message: `Include a unit. This question is answered in ${accepted}.`,
        expected,
      };
    }
    const answerCanonical = normalizeUnit(answerUnit);
    if (!answerCanonical) {
      return {
        status: "unknown-unit",
        message: `"${answerUnit}" is not a unit this question accepts. Answer in ${accepted}.`,
        expected,
      };
    }
    const converted = convertValue(parsed, answerCanonical, specCanonical);
    if (converted === undefined) {
      return {
        status: "unknown-unit",
        message: `${answerCanonical} measures something different from ${specCanonical}. Answer in ${accepted}.`,
        expected,
      };
    }
    value = converted;
    normalizedUnit = specCanonical;
  } else if (specUnit && answerUnit && fold(answerUnit) !== fold(specUnit)) {
    // The spec's "unit" is one of the corpus's free-text answer labels, so there
    // is no unit to convert to. An answer that supplies one anyway is refused
    // rather than quietly ignored.
    return { status: "unknown-unit", message: "Enter the number only. This question does not take a unit.", expected };
  }

  const tolerance = typeof spec?.tolerance === "number" && Number.isFinite(spec.tolerance) && spec.tolerance >= 0
    ? spec.tolerance
    : 0;
  const allowed = tolerance + slackFor(value, expected);
  const correct = Math.abs(value - expected) <= allowed;
  return {
    status: correct ? "correct" : "incorrect",
    message: correct ? "Correct." : "Not correct. Check your working and try again.",
    normalizedValue: value,
    normalizedUnit,
    expected,
  };
};
