export type SourceProvider = "pubmed" | "openalex" | "nlm" | "openlibrary" | "cdc";

export type SourceErrorCode =
  | "INVALID_QUERY"
  | "RATE_LIMITED"
  | "PROVIDER_UNAVAILABLE"
  | "TIMEOUT"
  | "NOT_CONFIGURED"
  | "MALFORMED_PROVIDER_RESPONSE"
  | "INTERNAL_ERROR";

export interface SourceErrorPayload {
  code: SourceErrorCode;
  message: string;
  provider?: SourceProvider;
  retryable: boolean;
}

export interface SourceResponse<T> {
  data: T;
  retrievedAt: string;
  cached?: boolean;
}

export interface SourceErrorResponse {
  error: SourceErrorPayload;
}

export type EvidenceFilter = "all" | "review" | "guideline" | "recent";

export interface OpenAlexEnrichment {
  provider: "openalex";
  providerId: string;
  originalUrl: string;
  retrievedAt: string;
  isOpenAccess: boolean;
  openAccessStatus?: string;
  landingPageUrl?: string;
  pdfUrl?: string;
  citationCount?: number;
}

export interface EvidenceArticle {
  provider: "pubmed";
  providerId: string;
  pmid: string;
  title: string;
  journal?: string;
  authors: string[];
  publicationDate?: string;
  doi?: string;
  originalUrl: string;
  retrievedAt: string;
  attribution: string;
  openAlex?: OpenAlexEnrichment;
}

export interface EvidenceSearchResult {
  provider: "pubmed";
  query: string;
  filter: EvidenceFilter;
  total: number;
  articles: EvidenceArticle[];
  enrichmentStatus: "complete" | "unconfigured" | "unavailable" | "disabled";
  attribution: string;
}

export type TerminologyKind = "conditions" | "icd10";

export interface TerminologyResult {
  provider: "nlm";
  providerId: string;
  kind: TerminologyKind;
  label: string;
  code?: string;
  originalUrl: string;
  retrievedAt: string;
  attribution: string;
}

export interface TerminologySearchResult {
  provider: "nlm";
  query: string;
  kind: TerminologyKind;
  total: number;
  results: TerminologyResult[];
  attribution: string;
}

export interface BookResult {
  provider: "openlibrary";
  providerId: string;
  title: string;
  authors: string[];
  firstPublishYear?: number;
  coverUrl?: string;
  originalUrl: string;
  accessUrl?: string;
  accessLabel?: "Read on Open Library" | "Borrow on Open Library";
  retrievedAt: string;
  attribution: string;
}

export interface BookSearchResult {
  provider: "openlibrary";
  query: string;
  total: number;
  books: BookResult[];
  attribution: string;
}

export interface EvidenceRequest {
  query: string;
  filter?: EvidenceFilter;
  limit?: number;
}

export interface TerminologyRequest {
  query: string;
  kind?: TerminologyKind;
  limit?: number;
}

export interface BookRequest {
  query: string;
  limit?: number;
}
