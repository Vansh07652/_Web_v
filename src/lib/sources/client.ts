import type {
  BookRequest,
  BookSearchResult,
  EvidenceRequest,
  EvidenceSearchResult,
  SourceErrorPayload,
  SourceErrorResponse,
  SourceResponse,
  TerminologyRequest,
  TerminologySearchResult,
} from "./types";

export class SourceClientError extends Error {
  constructor(readonly details: SourceErrorPayload) {
    super(details.message);
    this.name = "SourceClientError";
  }
}

function apiOrigin() {
  const configured = import.meta.env.VITE_SOURCE_API_ORIGIN?.trim();
  if (configured) return configured.replace(/\/$/, "");
  return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:8787"
    : "https://api.medmosa.org";
}

async function post<T>(path: string, body: unknown, signal?: AbortSignal): Promise<SourceResponse<T>> {
  let response: Response;
  try {
    response = await fetch(`${apiOrigin()}${path}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    throw new SourceClientError({ code: "PROVIDER_UNAVAILABLE", message: "The source service could not be reached.", retryable: true });
  }
  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new SourceClientError({ code: "MALFORMED_PROVIDER_RESPONSE", message: "The source service returned an unexpected response.", retryable: true });
  }
  if (!response.ok) {
    const error = (payload as SourceErrorResponse | undefined)?.error;
    throw new SourceClientError(error && typeof error.message === "string"
      ? error
      : { code: "PROVIDER_UNAVAILABLE", message: "The source request could not be completed.", retryable: response.status >= 500 });
  }
  if (!payload || typeof payload !== "object" || !("data" in payload) || typeof (payload as { retrievedAt?: unknown }).retrievedAt !== "string") {
    throw new SourceClientError({ code: "MALFORMED_PROVIDER_RESPONSE", message: "The source service returned an unexpected response.", retryable: true });
  }
  return payload as SourceResponse<T>;
}

export const sourceClient = {
  evidence(request: EvidenceRequest, signal?: AbortSignal) {
    return post<EvidenceSearchResult>("/v1/evidence", request, signal);
  },
  terminology(request: TerminologyRequest, signal?: AbortSignal) {
    return post<TerminologySearchResult>("/v1/terminology", request, signal);
  },
  books(request: BookRequest, signal?: AbortSignal) {
    return post<BookSearchResult>("/v1/books", request, signal);
  },
};
