import { beforeEach, describe, expect, it } from "vitest";
import {
  RATE_STORAGE_KEY,
  SPEECH_RATES,
  createSpeechController,
  isSpeechSupported,
  plainTextFromMarkdown,
  readStoredRate,
  storeRate,
  type SpeechRate,
  type SpeechSection,
} from "../../src/lib/speech";

/**
 * Everything here is hand-rolled: no mocking library, and no jsdom. The speech
 * API and `localStorage` are plain objects assigned onto `globalThis` and
 * deleted again, which is also a fair model of the browsers this has to cope
 * with — the API is either there or it is not.
 */

class UtteranceStub {
  text: string;
  rate = 1;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) {
    this.text = text;
  }
}

const createSynthesisStub = (options: { throws?: boolean } = {}) => {
  const spoken: UtteranceStub[] = [];
  let current: UtteranceStub | undefined;
  let cancelCount = 0;
  let pauseCount = 0;
  let resumeCount = 0;
  const boom = (): void => {
    if (options.throws) throw new Error("speech engine offline");
  };
  return {
    spoken,
    counts: () => ({ cancel: cancelCount, pause: pauseCount, resume: resumeCount }),
    speak: (utterance: UtteranceStub): void => {
      boom();
      spoken.push(utterance);
      current = utterance;
    },
    cancel: (): void => {
      cancelCount += 1;
      boom();
      current = undefined;
    },
    pause: (): void => {
      pauseCount += 1;
      boom();
    },
    resume: (): void => {
      resumeCount += 1;
      boom();
    },
    /** Fires the engine's `end` event for whatever is playing. */
    finishCurrent: (): void => {
      const utterance = current;
      current = undefined;
      utterance?.onend?.();
    },
    /** Fires the engine's `error` event for whatever is playing. */
    failCurrent: (): void => {
      const utterance = current;
      current = undefined;
      utterance?.onerror?.();
    },
  };
};

const createStorageStub = (options: { throwOnWrite?: boolean; throwOnRead?: boolean } = {}) => {
  const entries = new Map<string, string>();
  return {
    entries,
    length: 0,
    getItem: (key: string): string | null => {
      if (options.throwOnRead) throw new Error("storage blocked");
      return entries.get(key) ?? null;
    },
    setItem: (key: string, value: string): void => {
      if (options.throwOnWrite) throw new Error("quota exceeded");
      entries.set(key, value);
    },
    removeItem: (key: string): void => {
      entries.delete(key);
    },
    clear: (): void => {
      entries.clear();
    },
    key: (): string | null => null,
  };
};

type Scope = Record<string, unknown>;
const scope = globalThis as unknown as Scope;

const installSpeech = (stub: ReturnType<typeof createSynthesisStub>): void => {
  scope.speechSynthesis = stub;
  scope.SpeechSynthesisUtterance = UtteranceStub;
};

const removeSpeech = (): void => {
  delete scope.speechSynthesis;
  delete scope.SpeechSynthesisUtterance;
};

const installStorage = (stub: ReturnType<typeof createStorageStub>): void => {
  scope.localStorage = stub;
};

const removeStorage = (): void => {
  delete scope.localStorage;
};

const sections = (...ids: string[]): SpeechSection[] =>
  ids.map((id) => ({ id, label: `Section ${id}`, text: `Prose for section ${id}.` }));

describe("plainTextFromMarkdown", () => {
  it("returns an empty string for empty and blank input", () => {
    expect(plainTextFromMarkdown("")).toBe("");
    expect(plainTextFromMarkdown("   ")).toBe("");
    expect(plainTextFromMarkdown("\n\n\t\n")).toBe("");
  });

  it("never throws on input that is not a string", () => {
    const hostile = plainTextFromMarkdown as unknown as (value: unknown) => string;
    expect(hostile(undefined)).toBe("");
    expect(hostile(null)).toBe("");
    expect(hostile(42)).toBe("");
    expect(hostile({})).toBe("");
    expect(hostile([])).toBe("");
  });

  it("leaves prose containing no markdown untouched", () => {
    const prose = "The heart pumps blood through two circuits, pulmonary and systemic.";
    expect(plainTextFromMarkdown(prose)).toBe(prose);
  });

  it("strips heading markers at every level, opening and closing", () => {
    expect(plainTextFromMarkdown("# The Cardiac Cycle")).toBe("The Cardiac Cycle");
    expect(plainTextFromMarkdown("### Systole")).toBe("Systole");
    expect(plainTextFromMarkdown("###### Diastole")).toBe("Diastole");
    expect(plainTextFromMarkdown("## Overview ##")).toBe("Overview");
  });

  it("strips bold, italic, bold-italic and strikethrough markers", () => {
    expect(plainTextFromMarkdown("**Systole** is contraction.")).toBe("Systole is contraction.");
    expect(plainTextFromMarkdown("*Diastole* is relaxation.")).toBe("Diastole is relaxation.");
    expect(plainTextFromMarkdown("***Critical*** finding.")).toBe("Critical finding.");
    expect(plainTextFromMarkdown("~~Obsolete~~ guidance.")).toBe("Obsolete guidance.");
    expect(plainTextFromMarkdown("__Bold__ and _italic_ together.")).toBe("Bold and italic together.");
  });

  it("leaves underscores inside a word alone", () => {
    expect(plainTextFromMarkdown("The sodium_potassium_pump moves ions.")).toBe("The sodium_potassium_pump moves ions.");
    expect(plainTextFromMarkdown("snake_case_identifier")).toBe("snake_case_identifier");
  });

  it("removes inline code backticks and keeps the term", () => {
    expect(plainTextFromMarkdown("Blood `pH` sits near 7.4.")).toBe("Blood pH sits near 7.4.");
    expect(plainTextFromMarkdown("Use ``a `tick` inside`` carefully.")).toBe("Use a tick inside carefully.");
  });

  it("drops fenced code blocks entirely", () => {
    const markdown = [
      "Before the block.",
      "```python",
      "print('this is never spoken')",
      "```",
      "After the block.",
    ].join("\n");
    expect(plainTextFromMarkdown(markdown)).toBe("Before the block. After the block.");
  });

  it("drops tilde fences as well, and drops the remainder of an unterminated fence", () => {
    expect(plainTextFromMarkdown("Intro.\n~~~\ncode\n~~~\nOutro.")).toBe("Intro. Outro.");
    expect(plainTextFromMarkdown("Intro.\n```\ncode that never closes")).toBe("Intro.");
  });

  it("keeps link text and alt text while dropping the target", () => {
    expect(plainTextFromMarkdown("See [the heart chapter](https://example.org/heart) for more."))
      .toBe("See the heart chapter for more.");
    expect(plainTextFromMarkdown("![Diagram of the aorta](/assets/aorta.png)")).toBe("Diagram of the aorta");
    expect(plainTextFromMarkdown("A [reference link][12] in prose.")).toBe("A reference link in prose.");
    expect(plainTextFromMarkdown("Autolink <https://example.org/page> removed.")).toBe("Autolink removed.");
    expect(plainTextFromMarkdown("Body text.\n[12]: https://example.org/page")).toBe("Body text.");
  });

  it("strips bullets and numbering from nested lists", () => {
    const markdown = [
      "Steps:",
      "- Atria contract",
      "  - Ventricles fill",
      "    * Valves close",
      "      + Pressure rises",
      "1. Isovolumetric contraction",
      "2) Ejection",
      "- [ ] Unchecked task",
      "- [x] Checked task",
    ].join("\n");
    expect(plainTextFromMarkdown(markdown))
      .toBe("Steps: Atria contract Ventricles fill Valves close Pressure rises Isovolumetric contraction Ejection Unchecked task Checked task");
  });

  it("reads table cells and drops the pipes and the divider row", () => {
    const markdown = [
      "| Phase | Duration |",
      "| --- | :-----: |",
      "| Systole | 0.3 s |",
      "| Diastole | 0.5 s |",
    ].join("\n");
    expect(plainTextFromMarkdown(markdown)).toBe("Phase Duration Systole 0.3 s Diastole 0.5 s");
  });

  it("strips blockquote markers and horizontal rules", () => {
    expect(plainTextFromMarkdown("> Remember the order.\n>> Nested note.")).toBe("Remember the order. Nested note.");
    expect(plainTextFromMarkdown("Above.\n---\nBelow.")).toBe("Above. Below.");
    expect(plainTextFromMarkdown("Above.\n***\nBelow.")).toBe("Above. Below.");
  });

  it("collapses whitespace across lines and line endings", () => {
    expect(plainTextFromMarkdown("One\r\n\r\nTwo\t\tthree   four")).toBe("One Two three four");
    expect(plainTextFromMarkdown("   padded   ")).toBe("padded");
  });

  it("unwraps inline formulas the same way the renderer does", () => {
    expect(plainTextFromMarkdown("Cardiac output is $CO = HR \\times SV$ overall.")).toBe("Cardiac output is CO = HR \\times SV overall.");
  });

  it("handles a realistic mixed section", () => {
    const markdown = [
      "## Gas Exchange",
      "",
      "Oxygen crosses the **alveolar** membrane by *diffusion*, driven by the",
      "partial-pressure gradient described in [Dalton's law](https://example.org/dalton).",
      "",
      "| Gas | Pressure |",
      "| --- | --- |",
      "| O2 | 104 mmHg |",
      "",
      "```text",
      "PAO2 = FiO2 * (Patm - PH2O) - PaCO2 / R",
      "```",
      "",
      "- Diffusion is passive",
      "- `Surfactant` lowers surface tension",
    ].join("\n");
    expect(plainTextFromMarkdown(markdown)).toBe(
      "Gas Exchange Oxygen crosses the alveolar membrane by diffusion, driven by the "
      + "partial-pressure gradient described in Dalton's law. Gas Pressure O2 104 mmHg "
      + "Diffusion is passive Surfactant lowers surface tension",
    );
  });

  it("is pure: the same input always gives the same output", () => {
    const markdown = "# Title\n\n- **one**\n- _two_";
    expect(plainTextFromMarkdown(markdown)).toBe(plainTextFromMarkdown(markdown));
    expect(plainTextFromMarkdown(plainTextFromMarkdown(markdown))).toBe(plainTextFromMarkdown(markdown));
  });
});

describe("isSpeechSupported", () => {
  beforeEach(() => {
    removeSpeech();
  });

  it("is false when the browser has no speech synthesis at all", () => {
    expect(isSpeechSupported()).toBe(false);
  });

  it("is false when only half of the API is present", () => {
    scope.speechSynthesis = createSynthesisStub();
    expect(isSpeechSupported()).toBe(false);
    removeSpeech();
    scope.SpeechSynthesisUtterance = UtteranceStub;
    expect(isSpeechSupported()).toBe(false);
  });

  it("is false, and does not throw, when the property itself throws", () => {
    Object.defineProperty(globalThis, "speechSynthesis", {
      configurable: true,
      get: () => {
        throw new Error("blocked by policy");
      },
    });
    scope.SpeechSynthesisUtterance = UtteranceStub;
    expect(isSpeechSupported()).toBe(false);
    delete scope.speechSynthesis;
  });

  it("is true once both halves are present", () => {
    installSpeech(createSynthesisStub());
    expect(isSpeechSupported()).toBe(true);
  });
});

describe("speech rate preference", () => {
  beforeEach(() => {
    removeStorage();
  });

  it("offers exactly four ascending rates", () => {
    expect(SPEECH_RATES).toEqual([0.8, 1, 1.2, 1.5]);
    expect(RATE_STORAGE_KEY).toBe("medmosa.speech-rate.v1");
  });

  it("falls back to normal speed when there is no storage", () => {
    expect(readStoredRate()).toBe(1);
    expect(() => storeRate(1.5)).not.toThrow();
  });

  it("round-trips every legal rate", () => {
    const store = createStorageStub();
    installStorage(store);
    for (const rate of SPEECH_RATES) {
      storeRate(rate);
      expect(readStoredRate()).toBe(rate);
    }
    expect(store.entries.get(RATE_STORAGE_KEY)).toBe("1.5");
  });

  it("clamps a stored value that is out of range", () => {
    const store = createStorageStub();
    installStorage(store);
    store.entries.set(RATE_STORAGE_KEY, "9");
    expect(readStoredRate()).toBe(1.5);
    store.entries.set(RATE_STORAGE_KEY, "0");
    expect(readStoredRate()).toBe(0.8);
    store.entries.set(RATE_STORAGE_KEY, "-4");
    expect(readStoredRate()).toBe(0.8);
  });

  it("snaps a stored value that sits between the legal rates, ties going slower", () => {
    const store = createStorageStub();
    installStorage(store);
    store.entries.set(RATE_STORAGE_KEY, "1.3");
    expect(readStoredRate()).toBe(1.2);
    store.entries.set(RATE_STORAGE_KEY, "1.45");
    expect(readStoredRate()).toBe(1.5);
    store.entries.set(RATE_STORAGE_KEY, "0.9");
    expect(readStoredRate()).toBe(0.8);
  });

  it("falls back to normal speed for a corrupt stored value", () => {
    const store = createStorageStub();
    installStorage(store);
    for (const corrupt of ["", "   ", "fast", "{\"rate\":1.5}", "NaN", "Infinity"]) {
      store.entries.set(RATE_STORAGE_KEY, corrupt);
      expect(readStoredRate()).toBe(1);
    }
  });

  it("stores a clamped value when given an illegal rate", () => {
    const store = createStorageStub();
    installStorage(store);
    const illegal = storeRate as unknown as (rate: number) => void;
    illegal(4);
    expect(store.entries.get(RATE_STORAGE_KEY)).toBe("1.5");
    illegal(Number.NaN);
    expect(store.entries.get(RATE_STORAGE_KEY)).toBe("1");
  });

  it("survives storage that throws on write and on read", () => {
    installStorage(createStorageStub({ throwOnWrite: true }));
    expect(() => storeRate(1.2)).not.toThrow();
    expect(readStoredRate()).toBe(1);
    installStorage(createStorageStub({ throwOnRead: true }));
    expect(readStoredRate()).toBe(1);
  });

  it("stores nothing but the rate", () => {
    const store = createStorageStub();
    installStorage(store);
    storeRate(1.2);
    expect([...store.entries.keys()]).toEqual([RATE_STORAGE_KEY]);
  });
});

describe("speech controller without browser support", () => {
  beforeEach(() => {
    removeSpeech();
    removeStorage();
  });

  it("reports unsupported and treats every method as a safe no-op", () => {
    const controller = createSpeechController();
    let notifications = 0;
    const unsubscribe = controller.subscribe(() => {
      notifications += 1;
    });
    expect(controller.status).toBe("unsupported");
    expect(controller.currentSectionId).toBeUndefined();
    expect(() => controller.speak(sections("a", "b"))).not.toThrow();
    expect(() => controller.speak(sections("a"), "a")).not.toThrow();
    expect(() => controller.pause()).not.toThrow();
    expect(() => controller.resume()).not.toThrow();
    expect(() => controller.stop()).not.toThrow();
    expect(() => controller.stop()).not.toThrow();
    expect(() => controller.setRate(1.5)).not.toThrow();
    expect(controller.status).toBe("unsupported");
    expect(controller.currentSectionId).toBeUndefined();
    expect(notifications).toBe(0);
    unsubscribe();
  });
});

describe("speech controller", () => {
  let engine: ReturnType<typeof createSynthesisStub>;

  beforeEach(() => {
    engine = createSynthesisStub();
    installSpeech(engine);
    installStorage(createStorageStub());
  });

  it("starts idle and silent, with no autoplay", () => {
    const controller = createSpeechController();
    expect(controller.status).toBe("idle");
    expect(controller.currentSectionId).toBeUndefined();
    expect(engine.spoken).toHaveLength(0);
  });

  it("reads the supplied sections one at a time, in order", () => {
    const controller = createSpeechController();
    controller.speak(sections("intro", "body", "summary"));
    expect(controller.status).toBe("speaking");
    expect(controller.currentSectionId).toBe("intro");
    expect(engine.spoken).toHaveLength(1);
    expect(engine.spoken[0].text).toBe("Prose for section intro.");

    engine.finishCurrent();
    expect(controller.currentSectionId).toBe("body");
    expect(engine.spoken).toHaveLength(2);

    engine.finishCurrent();
    expect(controller.currentSectionId).toBe("summary");
    expect(engine.spoken).toHaveLength(3);

    engine.finishCurrent();
    expect(controller.status).toBe("idle");
    expect(controller.currentSectionId).toBeUndefined();
    expect(engine.spoken.map((utterance) => utterance.text)).toEqual([
      "Prose for section intro.",
      "Prose for section body.",
      "Prose for section summary.",
    ]);
  });

  it("can start at a named section, and falls back to the first for an unknown one", () => {
    const controller = createSpeechController();
    controller.speak(sections("a", "b", "c"), "b");
    expect(controller.currentSectionId).toBe("b");
    engine.finishCurrent();
    expect(controller.currentSectionId).toBe("c");
    engine.finishCurrent();
    expect(controller.status).toBe("idle");

    controller.speak(sections("a", "b", "c"), "nope");
    expect(controller.currentSectionId).toBe("a");
  });

  it("converts each section from markdown and skips the ones with nothing to say", () => {
    const controller = createSpeechController();
    controller.speak([
      { id: "one", label: "One", text: "## Heading\n\nThe **aorta** carries blood." },
      { id: "two", label: "Two", text: "```\nonly code\n```" },
      { id: "three", label: "Three", text: "   " },
      { id: "", label: "No id", text: "Unreachable." },
      { id: "four", label: "Four", text: "Last one." },
    ]);
    expect(engine.spoken[0].text).toBe("Heading The aorta carries blood.");
    expect(controller.currentSectionId).toBe("one");
    engine.finishCurrent();
    expect(controller.currentSectionId).toBe("four");
    expect(engine.spoken[1].text).toBe("Last one.");
    engine.finishCurrent();
    expect(controller.status).toBe("idle");
    expect(engine.spoken).toHaveLength(2);
  });

  it("goes straight back to idle when there is nothing to read", () => {
    const controller = createSpeechController();
    controller.speak([]);
    expect(controller.status).toBe("idle");
    expect(controller.currentSectionId).toBeUndefined();
    expect(engine.spoken).toHaveLength(0);
  });

  it("applies the stored rate, and a new rate from the next section on", () => {
    const store = createStorageStub();
    store.entries.set(RATE_STORAGE_KEY, "1.2");
    installStorage(store);
    const controller = createSpeechController();
    controller.speak(sections("a", "b"));
    expect(engine.spoken[0].rate).toBe(1.2);

    controller.setRate(1.5);
    expect(engine.spoken[0].rate).toBe(1.2);
    engine.finishCurrent();
    expect(engine.spoken[1].rate).toBe(1.5);
    expect(store.entries.get(RATE_STORAGE_KEY)).toBe("1.5");
  });

  it("pauses and resumes, and ignores both when they make no sense", () => {
    const controller = createSpeechController();
    controller.pause();
    expect(controller.status).toBe("idle");
    expect(engine.counts().pause).toBe(0);

    controller.speak(sections("a", "b"));
    controller.resume();
    expect(controller.status).toBe("speaking");
    expect(engine.counts().resume).toBe(0);

    controller.pause();
    expect(controller.status).toBe("paused");
    expect(controller.currentSectionId).toBe("a");
    expect(engine.counts().pause).toBe(1);

    controller.pause();
    expect(engine.counts().pause).toBe(1);

    controller.resume();
    expect(controller.status).toBe("speaking");
    expect(controller.currentSectionId).toBe("a");
    expect(engine.counts().resume).toBe(1);
  });

  it("stops cleanly, releases the utterance, and is idempotent", () => {
    const controller = createSpeechController();
    controller.speak(sections("a", "b", "c"));
    const first = engine.spoken[0];
    // `speak` clears the engine before it starts, which is the first cancel.
    expect(engine.counts().cancel).toBe(1);

    controller.stop();
    expect(controller.status).toBe("idle");
    expect(controller.currentSectionId).toBeUndefined();
    expect(engine.counts().cancel).toBe(2);
    expect(first.onend).toBeNull();
    expect(first.onerror).toBeNull();

    // Every further stop is inert: no cancel, no state change, no throw.
    controller.stop();
    controller.stop();
    expect(controller.status).toBe("idle");
    expect(engine.counts().cancel).toBe(2);
    expect(engine.spoken).toHaveLength(1);
  });

  it("ignores a late end event from an utterance that was cancelled", () => {
    const controller = createSpeechController();
    controller.speak(sections("a", "b"));
    const first = engine.spoken[0];
    controller.stop();
    first.onend?.();
    expect(controller.status).toBe("idle");
    expect(controller.currentSectionId).toBeUndefined();
    expect(engine.spoken).toHaveLength(1);
  });

  it("replaces a run in progress rather than queueing behind it", () => {
    const controller = createSpeechController();
    controller.speak(sections("a", "b"));
    controller.speak(sections("x", "y"));
    expect(controller.currentSectionId).toBe("x");
    expect(engine.counts().cancel).toBe(2);
    expect(engine.spoken).toHaveLength(2);
    engine.finishCurrent();
    expect(controller.currentSectionId).toBe("y");
  });

  it("stops when the engine reports an error on a section", () => {
    const controller = createSpeechController();
    controller.speak(sections("a", "b", "c"));
    engine.failCurrent();
    expect(controller.status).toBe("idle");
    expect(controller.currentSectionId).toBeUndefined();
    expect(engine.spoken).toHaveLength(1);
  });

  it("notifies subscribers on every state change and stops on unsubscribe", () => {
    const controller = createSpeechController();
    const seen: string[] = [];
    const unsubscribe = controller.subscribe(() => {
      seen.push(`${controller.status}:${controller.currentSectionId ?? "-"}`);
    });
    let secondCount = 0;
    const unsubscribeSecond = controller.subscribe(() => {
      secondCount += 1;
    });

    controller.speak(sections("a", "b"));
    engine.finishCurrent();
    unsubscribeSecond();
    controller.pause();
    controller.resume();
    controller.stop();

    expect(seen).toEqual(["speaking:a", "speaking:b", "paused:b", "speaking:b", "idle:-"]);
    expect(secondCount).toBe(2);
    unsubscribe();
    controller.speak(sections("c"));
    expect(seen).toHaveLength(5);
  });

  it("keeps working when a subscriber throws", () => {
    const controller = createSpeechController();
    let reached = 0;
    controller.subscribe(() => {
      throw new Error("bad subscriber");
    });
    controller.subscribe(() => {
      reached += 1;
    });
    expect(() => controller.speak(sections("a"))).not.toThrow();
    expect(reached).toBe(1);
    expect(controller.status).toBe("speaking");
  });
});

describe("speech controller against a throwing engine", () => {
  let engine: ReturnType<typeof createSynthesisStub>;

  beforeEach(() => {
    engine = createSynthesisStub({ throws: true });
    installSpeech(engine);
    installStorage(createStorageStub());
  });

  it("never lets an engine failure escape", () => {
    const controller = createSpeechController();
    expect(controller.status).toBe("idle");
    expect(() => controller.speak(sections("a", "b"))).not.toThrow();
    expect(controller.status).toBe("idle");
    expect(controller.currentSectionId).toBeUndefined();
    expect(() => controller.pause()).not.toThrow();
    expect(() => controller.resume()).not.toThrow();
    expect(() => controller.stop()).not.toThrow();
    expect(() => controller.setRate(0.8)).not.toThrow();
    expect(controller.status).toBe("idle");
  });

  it("does not claim to be paused when the engine refused to pause", () => {
    const engineThatSpeaks = createSynthesisStub();
    installSpeech(engineThatSpeaks);
    const controller = createSpeechController();
    controller.speak(sections("a"));
    expect(controller.status).toBe("speaking");
    installSpeech(createSynthesisStub({ throws: true }));
    controller.pause();
    expect(controller.status).toBe("speaking");
  });
});

describe("speech rate type", () => {
  it("accepts only the four published rates", () => {
    const rates: SpeechRate[] = [0.8, 1, 1.2, 1.5];
    expect(rates).toEqual([...SPEECH_RATES]);
  });
});
