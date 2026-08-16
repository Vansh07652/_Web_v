export interface RateLimitBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

export interface Env {
  ENABLE_PUBMED?: string;
  NCBI_EMAIL?: string;
  NCBI_API_KEY?: string;
  ENABLE_OPENALEX?: string;
  OPENALEX_API_KEY?: string;
  ENABLE_NLM_TERMINOLOGY?: string;
  ENABLE_OPEN_LIBRARY?: string;
  MEDMOSA_CONTACT_EMAIL?: string;
  ENABLE_CDC_DATA?: string;
  CDC_DATASET_ID?: string;
  CDC_DATASET_SOURCE_URL?: string;
  PUBLIC_RATE_LIMITER?: RateLimitBinding;
  PUBMED_RATE_LIMITER?: RateLimitBinding;
  OPEN_LIBRARY_RATE_LIMITER?: RateLimitBinding;
}

export interface WorkerContext {
  waitUntil(promise: Promise<unknown>): void;
}
