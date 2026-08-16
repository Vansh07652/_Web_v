import type { SourceErrorCode, SourceErrorPayload, SourceProvider } from "../src/lib/sources/types";

const STATUS_BY_CODE: Record<SourceErrorCode, number> = {
  INVALID_QUERY: 400,
  RATE_LIMITED: 429,
  PROVIDER_UNAVAILABLE: 503,
  TIMEOUT: 504,
  NOT_CONFIGURED: 503,
  MALFORMED_PROVIDER_RESPONSE: 502,
  INTERNAL_ERROR: 500,
};

export class SourceError extends Error {
  readonly status: number;
  readonly payload: SourceErrorPayload;

  constructor(code: SourceErrorCode, message: string, options: { provider?: SourceProvider; retryable?: boolean; cause?: unknown } = {}) {
    super(message, { cause: options.cause });
    this.name = "SourceError";
    this.status = STATUS_BY_CODE[code];
    this.payload = { code, message, provider: options.provider, retryable: options.retryable ?? false };
  }
}

export function safeSourceError(error: unknown): SourceError {
  return error instanceof SourceError
    ? error
    : new SourceError("INTERNAL_ERROR", "The learning-data request could not be completed.", { cause: error });
}
