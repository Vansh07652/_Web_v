import type { Env } from "./types";

const enabled = (value: string | undefined, defaultValue: boolean) =>
  value === undefined ? defaultValue : value.trim().toLowerCase() === "true";

export function sourceConfig(env: Env) {
  const contactEmail = env.MEDMOSA_CONTACT_EMAIL?.trim() || "contact@medmosa.org";
  return {
    pubmed: {
      enabled: enabled(env.ENABLE_PUBMED, true),
      email: env.NCBI_EMAIL?.trim() || contactEmail,
      apiKey: env.NCBI_API_KEY?.trim() || undefined,
    },
    openAlex: {
      enabled: enabled(env.ENABLE_OPENALEX, true),
      apiKey: env.OPENALEX_API_KEY?.trim() || undefined,
    },
    nlm: { enabled: enabled(env.ENABLE_NLM_TERMINOLOGY, true) },
    openLibrary: { enabled: enabled(env.ENABLE_OPEN_LIBRARY, true), contactEmail },
    cdc: {
      enabled: enabled(env.ENABLE_CDC_DATA, false),
      datasetId: env.CDC_DATASET_ID?.trim() || undefined,
      sourceUrl: env.CDC_DATASET_SOURCE_URL?.trim() || undefined,
    },
  } as const;
}
