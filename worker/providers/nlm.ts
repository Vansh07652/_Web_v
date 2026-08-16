import type { TerminologyKind, TerminologySearchResult } from "../../src/lib/sources/types";
import { cached } from "../cache";
import { sourceConfig } from "../config";
import { SourceError } from "../errors";
import { fetchProviderJson } from "../http";
import type { ProviderContext } from "./context";

const TTL = 7 * 24 * 60 * 60;

export function parseNlm(payload: unknown, kind: TerminologyKind, query: string, retrievedAt: string): TerminologySearchResult {
  if (!Array.isArray(payload) || payload.length < 4 || !Number.isFinite(Number(payload[0])) || !Array.isArray(payload[1]) || !Array.isArray(payload[3])) {
    throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "NLM returned unexpected terminology data.", { provider: "nlm" });
  }
  const ids = payload[1] as unknown[];
  const displays = payload[3] as unknown[];
  if (ids.some((id) => typeof id !== "string") || displays.some((display) => !Array.isArray(display))) {
    throw new SourceError("MALFORMED_PROVIDER_RESPONSE", "NLM returned unexpected terminology data.", { provider: "nlm" });
  }
  const results = ids.flatMap((rawId, index) => {
    const id = rawId as string;
    const display = displays[index] as unknown[] | undefined;
    if (!display) return [];
    const strings = display.filter((value): value is string => typeof value === "string");
    const label = kind === "icd10" ? strings[1] : strings[0];
    if (!label) return [];
    return [{
      provider: "nlm" as const,
      providerId: id,
      kind,
      label,
      code: kind === "icd10" ? strings[0] ?? id : undefined,
      originalUrl: kind === "icd10"
        ? `https://clinicaltables.nlm.nih.gov/apidoc/icd10cm/v3/doc.html`
        : `https://clinicaltables.nlm.nih.gov/apidoc/conditions/v3/doc.html`,
      retrievedAt,
      attribution: "Data provided by the NLM Clinical Table Search Service.",
    }];
  });
  return { provider: "nlm", query, kind, total: Number(payload[0]), results, attribution: "Data provided by the NLM Clinical Table Search Service." };
}

export async function searchNlm(context: ProviderContext, query: string, kind: TerminologyKind, limit: number) {
  if (!sourceConfig(context.env).nlm.enabled) throw new SourceError("NOT_CONFIGURED", "NLM terminology lookup is disabled.", { provider: "nlm" });
  return (await cached(context.cache, `v1:nlm:${kind}:${query.toLowerCase()}:${limit}`, TTL, async () => {
    const endpoint = kind === "icd10" ? "icd10cm" : "conditions";
    const url = new URL(`https://clinicaltables.nlm.nih.gov/api/${endpoint}/v3/search`);
    url.searchParams.set("terms", query);
    url.searchParams.set("maxList", String(limit));
    url.searchParams.set("sf", kind === "icd10" ? "code,name" : "consumer_name,primary_name");
    url.searchParams.set("df", kind === "icd10" ? "code,name" : "consumer_name");
    const payload = await fetchProviderJson<unknown>("nlm", url, { timeoutMs: 6_000 }, context.http);
    return parseNlm(payload, kind, query, (context.now?.() ?? new Date()).toISOString());
  })).value;
}
