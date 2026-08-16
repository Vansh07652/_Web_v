import type { EvidenceFilter, TerminologyKind } from "../src/lib/sources/types";
import { SourceError } from "./errors";

const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F]/;

export function normalizeQuery(value: unknown, options: { minimum: number; maximum?: number } = { minimum: 2 }) {
  if (typeof value !== "string") throw new SourceError("INVALID_QUERY", "Enter a search query.");
  const query = value.replace(/\s+/g, " ").trim();
  const maximum = options.maximum ?? 160;
  if (CONTROL_CHARACTERS.test(query)) throw new SourceError("INVALID_QUERY", "The search query contains unsupported characters.");
  if (query.length < options.minimum) throw new SourceError("INVALID_QUERY", `Enter at least ${options.minimum} characters.`);
  if (query.length > maximum) throw new SourceError("INVALID_QUERY", `Keep the search query under ${maximum + 1} characters.`);
  return query;
}

export function resultLimit(value: unknown, fallback: number, maximum = 10) {
  if (value === undefined) return fallback;
  if (!Number.isInteger(value) || Number(value) < 1 || Number(value) > maximum) {
    throw new SourceError("INVALID_QUERY", `Result count must be between 1 and ${maximum}.`);
  }
  return Number(value);
}

export function evidenceFilter(value: unknown): EvidenceFilter {
  const normalized = value ?? "all";
  if (normalized === "all" || normalized === "review" || normalized === "guideline" || normalized === "recent") return normalized;
  throw new SourceError("INVALID_QUERY", "Choose a supported evidence filter.");
}

export function terminologyKind(value: unknown): TerminologyKind {
  const normalized = value ?? "conditions";
  if (normalized === "conditions" || normalized === "icd10") return normalized;
  throw new SourceError("INVALID_QUERY", "Choose conditions or ICD-10-CM terminology.");
}

export async function readJsonBody(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") throw new SourceError("INVALID_QUERY", "Send a JSON request body.");
  try {
    const value: unknown = await request.json();
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("not an object");
    return value as Record<string, unknown>;
  } catch (error) {
    if (error instanceof SourceError) throw error;
    throw new SourceError("INVALID_QUERY", "Send a valid JSON request body.", { cause: error });
  }
}
