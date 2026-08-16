import { describe, expect, it } from "vitest";
import questionBank from "../../content-v2/subjects/nursing-math-dosage/questions.json";
import {
  CALCULATION_UNITS,
  acceptedUnitsFor,
  convertValue,
  gradeCalculation,
  normalizeUnit,
  parseCalculationSpec,
  type CalculationAnswer,
  type CalculationSpec,
} from "../../src/lib/quiz/calculation";

const spec = (over: Partial<CalculationSpec> = {}): CalculationSpec => ({
  expectedValue: 45,
  tolerance: null,
  ...over,
});

describe("parseCalculationSpec", () => {
  it("reads a well-formed computation object", () => {
    expect(parseCalculationSpec({ expression: "100 - 55", expected_value: 45, tolerance: 0.1, unit: "percent" })).toEqual({
      expression: "100 - 55",
      expectedValue: 45,
      tolerance: 0.1,
      unit: "percent",
    });
  });

  it("keeps a null tolerance as null, which means exact", () => {
    const parsed = parseCalculationSpec({ expression: "3/6", expected_value: 0.5, tolerance: null, unit: "unitless ratio" });
    expect(parsed?.tolerance).toBeNull();
    expect(parsed?.expectedValue).toBe(0.5);
  });

  it("accepts a zero expected value and a zero tolerance", () => {
    expect(parseCalculationSpec({ expected_value: 0, tolerance: 0 })).toEqual({ expectedValue: 0, tolerance: 0 });
  });

  it("returns undefined for anything that is not an object", () => {
    expect(parseCalculationSpec(undefined)).toBeUndefined();
    expect(parseCalculationSpec(null)).toBeUndefined();
    expect(parseCalculationSpec("expected_value: 45")).toBeUndefined();
    expect(parseCalculationSpec(45)).toBeUndefined();
    expect(parseCalculationSpec([])).toBeUndefined();
    expect(parseCalculationSpec([{ expected_value: 45 }])).toBeUndefined();
  });

  it("returns undefined unless expected_value is a finite number", () => {
    expect(parseCalculationSpec({})).toBeUndefined();
    expect(parseCalculationSpec({ expected_value: null })).toBeUndefined();
    expect(parseCalculationSpec({ expected_value: "45" })).toBeUndefined();
    expect(parseCalculationSpec({ expected_value: Number.NaN })).toBeUndefined();
    expect(parseCalculationSpec({ expected_value: Number.POSITIVE_INFINITY })).toBeUndefined();
    expect(parseCalculationSpec({ expression: "1 + 1", tolerance: 0.1, unit: "mL" })).toBeUndefined();
  });

  it("drops a malformed tolerance to null rather than trusting it", () => {
    expect(parseCalculationSpec({ expected_value: 5, tolerance: "0.1" })?.tolerance).toBeNull();
    expect(parseCalculationSpec({ expected_value: 5, tolerance: -1 })?.tolerance).toBeNull();
    expect(parseCalculationSpec({ expected_value: 5, tolerance: Number.NaN })?.tolerance).toBeNull();
    expect(parseCalculationSpec({ expected_value: 5 })?.tolerance).toBeNull();
  });

  it("drops an empty or non-string expression and unit", () => {
    const parsed = parseCalculationSpec({ expected_value: 5, expression: "   ", unit: "" });
    expect(parsed?.expression).toBeUndefined();
    expect(parsed?.unit).toBeUndefined();
    const other = parseCalculationSpec({ expected_value: 5, expression: 12, unit: ["mL"] });
    expect(other?.expression).toBeUndefined();
    expect(other?.unit).toBeUndefined();
  });

  it("trims the unit it keeps", () => {
    expect(parseCalculationSpec({ expected_value: 5, unit: "  mL  " })?.unit).toBe("mL");
  });
});

describe("normalizeUnit", () => {
  it("resolves the canonical spelling", () => {
    expect(normalizeUnit("mL")).toBe("mL");
    expect(normalizeUnit("mg")).toBe("mg");
    expect(normalizeUnit("gtt/min")).toBe("gtt/min");
  });

  it("folds case and surrounding space", () => {
    expect(normalizeUnit("ML")).toBe("mL");
    expect(normalizeUnit("  Kg ")).toBe("kg");
    expect(normalizeUnit("MMHG")).toBe("mmHg");
    expect(normalizeUnit("PH")).toBe("pH");
  });

  it("accepts the common plurals and spelt-out names", () => {
    expect(normalizeUnit("milliliters")).toBe("mL");
    expect(normalizeUnit("millilitres")).toBe("mL");
    expect(normalizeUnit("grams")).toBe("g");
    expect(normalizeUnit("micrograms")).toBe("mcg");
    expect(normalizeUnit("pounds")).toBe("lb");
    expect(normalizeUnit("mLs")).toBe("mL");
    expect(normalizeUnit("tablet")).toBe("tablets");
  });

  it("leaves the case-ambiguous single letters out of the table", () => {
    // The corpus uses M for molarity and m for metres. Folding case would make
    // them the same string, so neither is a unit here.
    expect(normalizeUnit("M")).toBeUndefined();
    expect(normalizeUnit("m")).toBeUndefined();
    expect(normalizeUnit("mol/L")).toBe("mol/L");
  });

  it("returns undefined for anything unreviewed", () => {
    expect(normalizeUnit("blorks")).toBeUndefined();
    expect(normalizeUnit("")).toBeUndefined();
    expect(normalizeUnit("   ")).toBeUndefined();
    expect(normalizeUnit("proportion of shared variance (r squared)")).toBeUndefined();
  });
});

describe("convertValue", () => {
  it("converts mass in both directions", () => {
    expect(convertValue(0.5, "g", "mg")).toBe(500);
    expect(convertValue(500, "mg", "g")).toBeCloseTo(0.5, 12);
    expect(convertValue(1, "g", "mcg")).toBe(1_000_000);
    expect(convertValue(1_000_000, "mcg", "g")).toBeCloseTo(1, 12);
    expect(convertValue(2, "kg", "g")).toBe(2000);
    expect(convertValue(2000, "g", "kg")).toBeCloseTo(2, 12);
  });

  it("converts volume in both directions", () => {
    expect(convertValue(1.5, "L", "mL")).toBe(1500);
    expect(convertValue(1500, "mL", "L")).toBeCloseTo(1.5, 12);
  });

  it("uses the exact definition of the pound", () => {
    expect(convertValue(1, "lb", "kg")).toBeCloseTo(0.45359237, 12);
    expect(convertValue(100, "lb", "kg")).toBeCloseTo(45.359237, 10);
  });

  it("returns the same value for the same unit", () => {
    expect(convertValue(12.5, "mL", "mL")).toBe(12.5);
    expect(convertValue(12.5, "milliliters", "mL")).toBe(12.5);
    expect(convertValue(7, "percent", "percent")).toBe(7);
  });

  it("refuses to cross a dimension", () => {
    expect(convertValue(1, "mg", "mL")).toBeUndefined();
    expect(convertValue(1, "mL", "g")).toBeUndefined();
    expect(convertValue(1, "kg", "L")).toBeUndefined();
    // Millequivalents need a valence and osmoles a particle count; neither is a
    // ratio this module is allowed to assume.
    expect(convertValue(1, "mEq/L", "mmol/L")).toBeUndefined();
    expect(convertValue(1, "osmol/L", "mol/L")).toBeUndefined();
    expect(convertValue(1, "percent", "proportion")).toBeUndefined();
  });

  it("returns undefined for an unreviewed unit or an unusable value", () => {
    expect(convertValue(1, "blorks", "mL")).toBeUndefined();
    expect(convertValue(1, "mL", "blorks")).toBeUndefined();
    expect(convertValue(Number.NaN, "mL", "L")).toBeUndefined();
    expect(convertValue(Number.POSITIVE_INFINITY, "mL", "L")).toBeUndefined();
  });
});

describe("acceptedUnitsFor", () => {
  it("lists the dimension a unit belongs to", () => {
    expect(acceptedUnitsFor("mL")).toEqual(["mL", "L"]);
    expect(acceptedUnitsFor("L")).toEqual(["mL", "L"]);
    expect(acceptedUnitsFor("mg")).toEqual(["g", "mg", "mcg", "kg", "lb"]);
  });

  it("lists just the unit itself when nothing converts to it", () => {
    expect(acceptedUnitsFor("percent")).toEqual(["percent"]);
    expect(acceptedUnitsFor("gtt/min")).toEqual(["gtt/min"]);
    expect(acceptedUnitsFor("mEq/L")).toEqual(["mEq/L"]);
  });

  it("lists nothing for a free-text answer label", () => {
    expect(acceptedUnitsFor("proportion")).toEqual([]);
    expect(acceptedUnitsFor("")).toEqual([]);
    expect(acceptedUnitsFor("study groups")).toEqual([]);
  });

  it("only ever returns units the table publishes", () => {
    for (const unit of CALCULATION_UNITS) {
      for (const accepted of acceptedUnitsFor(unit)) expect(CALCULATION_UNITS).toContain(accepted);
    }
  });
});

describe("grading an exact answer", () => {
  it("accepts the expected value", () => {
    const result = gradeCalculation(spec({ expectedValue: 45 }), { value: "45" });
    expect(result.status).toBe("correct");
    expect(result.normalizedValue).toBe(45);
    expect(result.expected).toBe(45);
    expect(result.message).toBe("Correct.");
  });

  it("rejects a value that is merely close when no tolerance is given", () => {
    expect(gradeCalculation(spec({ expectedValue: 45 }), { value: "45.1" }).status).toBe("incorrect");
    expect(gradeCalculation(spec({ expectedValue: 45 }), { value: "44.9" }).status).toBe("incorrect");
    expect(gradeCalculation(spec({ expectedValue: 0.3 }), { value: "0.3000001" }).status).toBe("incorrect");
    expect(gradeCalculation(spec({ expectedValue: 100 }), { value: "100.00001" }).status).toBe("incorrect");
  });

  it("accepts a signed or padded spelling of the same number", () => {
    expect(gradeCalculation(spec({ expectedValue: 45 }), { value: " +45 " }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 45 }), { value: "45.00" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 0.5 }), { value: ".5" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: -2 }), { value: "-2" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 45 }), { value: "45." }).status).toBe("correct");
  });

  it("accepts scientific notation, which the largest expected values need", () => {
    expect(gradeCalculation(spec({ expectedValue: 6.022e23, tolerance: 1e21 }), { value: "6.022e23" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 6.022e23, tolerance: 1e21 }), { value: "6.022E+23" }).status).toBe("correct");
  });

  it("absorbs floating-point noise without absorbing a wrong answer", () => {
    const sum = 0.1 + 0.2;
    expect(sum).not.toBe(0.3);
    expect(gradeCalculation(spec({ expectedValue: 0.3 }), { value: String(sum) }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: sum }), { value: "0.3" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 0.3 }), { value: "0.31" }).status).toBe("incorrect");
    // 0.1 * 3 lands one ulp away from 0.30000000000000004 as well.
    expect(gradeCalculation(spec({ expectedValue: 0.3 }), { value: String(0.1 * 3) }).status).toBe("correct");
  });
});

describe("grading against a tolerance", () => {
  it("accepts a value inside the stated tolerance", () => {
    expect(gradeCalculation(spec({ expectedValue: 0.9383, tolerance: 0.01 }), { value: "0.94" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 45, tolerance: 0.1 }), { value: "45.1" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 45, tolerance: 0.1 }), { value: "44.9" }).status).toBe("correct");
  });

  it("rejects a value just outside it", () => {
    expect(gradeCalculation(spec({ expectedValue: 45, tolerance: 0.1 }), { value: "45.2" }).status).toBe("incorrect");
    expect(gradeCalculation(spec({ expectedValue: 45, tolerance: 0.1 }), { value: "44.8" }).status).toBe("incorrect");
    expect(gradeCalculation(spec({ expectedValue: 0.0833, tolerance: 0.005 }), { value: "0.09" }).status).toBe("incorrect");
  });

  it("treats a zero tolerance as an exact match", () => {
    expect(gradeCalculation(spec({ expectedValue: 12, tolerance: 0 }), { value: "12" }).status).toBe("correct");
    expect(gradeCalculation(spec({ expectedValue: 12, tolerance: 0 }), { value: "12.0001" }).status).toBe("incorrect");
  });

  it("ignores a tolerance that is not a non-negative finite number", () => {
    expect(gradeCalculation({ expectedValue: 12, tolerance: -5 }, { value: "10" }).status).toBe("incorrect");
    expect(gradeCalculation({ expectedValue: 12, tolerance: Number.NaN }, { value: "10" }).status).toBe("incorrect");
  });
});

describe("grading with units", () => {
  const millilitres = spec({ expectedValue: 1500, unit: "mL" });

  it("accepts the spec's own unit", () => {
    const result = gradeCalculation(millilitres, { value: "1500", unit: "mL" });
    expect(result.status).toBe("correct");
    expect(result.normalizedUnit).toBe("mL");
    expect(result.normalizedValue).toBe(1500);
  });

  it("converts an answer given in a sibling unit, in both directions", () => {
    expect(gradeCalculation(millilitres, { value: "1.5", unit: "L" }).status).toBe("correct");
    const litres = spec({ expectedValue: 1.5, unit: "L" });
    expect(gradeCalculation(litres, { value: "1500", unit: "mL" }).status).toBe("correct");
    const milligrams = spec({ expectedValue: 500, unit: "mg" });
    expect(gradeCalculation(milligrams, { value: "0.5", unit: "g" }).status).toBe("correct");
    const grams = spec({ expectedValue: 0.5, unit: "g" });
    expect(gradeCalculation(grams, { value: "500", unit: "mg" }).status).toBe("correct");
  });

  it("reports the converted value in the spec's unit", () => {
    const result = gradeCalculation(millilitres, { value: "1.5", unit: "litres" });
    expect(result.normalizedValue).toBe(1500);
    expect(result.normalizedUnit).toBe("mL");
  });

  it("still marks a converted answer wrong when the number is wrong", () => {
    expect(gradeCalculation(millilitres, { value: "2.5", unit: "L" }).status).toBe("incorrect");
  });

  it("asks for a unit when the question is answered in one", () => {
    const result = gradeCalculation(millilitres, { value: "1500" });
    expect(result.status).toBe("missing-unit");
    expect(result.message).toContain("mL");
    expect(result.normalizedValue).toBeUndefined();
    expect(gradeCalculation(millilitres, { value: "1500", unit: "   " }).status).toBe("missing-unit");
  });

  it("refuses an unreviewed unit rather than passing it silently", () => {
    const result = gradeCalculation(millilitres, { value: "1500", unit: "blorks" });
    expect(result.status).toBe("unknown-unit");
    expect(result.message).toContain("blorks");
    expect(result.message).toContain("mL");
  });

  it("refuses a unit from another dimension", () => {
    const result = gradeCalculation(millilitres, { value: "1500", unit: "mg" });
    expect(result.status).toBe("unknown-unit");
    expect(result.message).toContain("mg");
    const other = gradeCalculation(spec({ expectedValue: 4, unit: "mmol/L" }), { value: "4", unit: "mEq/L" });
    expect(other.status).toBe("unknown-unit");
  });

  it("grades the number alone when the spec carries no unit", () => {
    const result = gradeCalculation(spec({ expectedValue: 45 }), { value: "45", unit: "anything at all" });
    expect(result.status).toBe("correct");
    expect(result.normalizedUnit).toBeUndefined();
  });
});

describe("grading when the spec's unit is a free-text answer label", () => {
  const proportion = spec({ expectedValue: 0.9, tolerance: 0.001, unit: "proportion" });

  it("grades the number alone when no unit is offered", () => {
    const result = gradeCalculation(proportion, { value: "0.9" });
    expect(result.status).toBe("correct");
    expect(result.normalizedUnit).toBeUndefined();
  });

  it("accepts the label typed back verbatim, whatever the case", () => {
    expect(gradeCalculation(proportion, { value: "0.9", unit: "Proportion" }).status).toBe("correct");
  });

  it("refuses any other unit rather than ignoring it", () => {
    const result = gradeCalculation(proportion, { value: "0.9", unit: "mL" });
    expect(result.status).toBe("unknown-unit");
    expect(result.message).toContain("number only");
  });
});

describe("grading unusable input", () => {
  it("asks for a number when the field is empty", () => {
    expect(gradeCalculation(spec(), { value: "" }).status).toBe("invalid-number");
    expect(gradeCalculation(spec(), { value: "   " }).status).toBe("invalid-number");
    expect(gradeCalculation(spec(), { value: "" }).message).toContain("number");
  });

  it("rejects words, symbols and units typed into the number field", () => {
    for (const value of ["about forty five", "45 mL", "forty-five", "4 5", "1/2", "45%", "--45", "0x2d", "", "e5"]) {
      expect(gradeCalculation(spec(), { value }).status).toBe("invalid-number");
    }
  });

  it("names the comma problem specifically, because it is the common one", () => {
    const result = gradeCalculation(spec({ expectedValue: 1250 }), { value: "1,250" });
    expect(result.status).toBe("invalid-number");
    expect(result.message).toContain("decimal point");
  });

  it("copes with a value that is not a string at all", () => {
    expect(gradeCalculation(spec(), { value: undefined as unknown as string }).status).toBe("invalid-number");
    expect(gradeCalculation(spec(), { value: 45 as unknown as string }).status).toBe("invalid-number");
  });

  it("refuses to grade a spec with no usable expected value", () => {
    const result = gradeCalculation({ expectedValue: Number.NaN }, { value: "45" });
    expect(result.status).toBe("incorrect");
    expect(result.message).toContain("cannot be checked");
    expect(gradeCalculation({ expectedValue: "45" as unknown as number }, { value: "45" }).status).toBe("incorrect");
  });
});

describe("grading messages", () => {
  const results = [
    gradeCalculation(spec({ expectedValue: 1500, unit: "mL" }), { value: "1500", unit: "mL" }),
    gradeCalculation(spec({ expectedValue: 1500, unit: "mL" }), { value: "1400", unit: "mL" }),
    gradeCalculation(spec({ expectedValue: 1500, unit: "mL" }), { value: "1500" }),
    gradeCalculation(spec({ expectedValue: 1500, unit: "mL" }), { value: "1500", unit: "blorks" }),
    gradeCalculation(spec({ expectedValue: 1500, unit: "mL" }), { value: "lots" }),
  ];

  it("keeps every message short and readable", () => {
    for (const result of results) {
      expect(result.message.length).toBeGreaterThan(0);
      expect(result.message.length).toBeLessThanOrEqual(120);
      expect(result.message.endsWith(".")).toBe(true);
    }
  });

  it("never states a clinical fact", () => {
    for (const result of results) {
      const message = result.message.toLowerCase();
      for (const word of ["patient", "dose", "prescrib", "administer", "safe", "mg/kg"]) {
        expect(message).not.toContain(word);
      }
    }
  });
});

describe("grading is free of side effects", () => {
  it("does not mutate the spec or the answer", () => {
    const original: CalculationSpec = { expression: "1500 / 1", expectedValue: 1500, tolerance: 0.5, unit: "mL" };
    const answer: CalculationAnswer = { value: "1.5", unit: "L" };
    const specBefore = JSON.parse(JSON.stringify(original));
    const answerBefore = JSON.parse(JSON.stringify(answer));
    gradeCalculation(original, answer);
    expect(original).toEqual(specBefore);
    expect(answer).toEqual(answerBefore);
  });

  it("returns the same result for the same input every time", () => {
    const input: CalculationSpec = { expectedValue: 0.9383, tolerance: 0.01, unit: "proportion" };
    expect(gradeCalculation(input, { value: "0.94" })).toEqual(gradeCalculation(input, { value: "0.94" }));
  });
});

describe("against the corpus", () => {
  const bank = (questionBank as unknown as { questions: Array<{ id: string; computation?: unknown }> }).questions;
  // 23,617 of the corpus's 23,927 computation keys are literally null, which is
  // how it writes "not a calculation question". Only an object is gradable.
  const computations = bank.filter((question) => question.computation !== undefined && question.computation !== null);

  it("finds calculation questions in the nursing maths bank", () => {
    expect(computations.length).toBeGreaterThan(50);
    expect(bank.filter((question) => question.computation === null).length).toBeGreaterThan(0);
  });

  it("returns undefined for the null computations, rather than inventing one", () => {
    for (const question of bank.filter((entry) => entry.computation === null)) {
      expect(parseCalculationSpec(question.computation)).toBeUndefined();
    }
  });

  it("parses every computation it carries", () => {
    for (const question of computations) {
      expect(parseCalculationSpec(question.computation)).toBeDefined();
    }
  });

  it("marks each recorded expected value correct when it is typed back", () => {
    for (const question of computations) {
      const parsed = parseCalculationSpec(question.computation);
      if (!parsed) continue;
      const result = gradeCalculation(parsed, { value: String(parsed.expectedValue), unit: parsed.unit });
      expect(result.status).toBe("correct");
    }
  });
});
