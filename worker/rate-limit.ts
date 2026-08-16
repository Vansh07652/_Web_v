import { SourceError } from "./errors";
import type { RateLimitBinding } from "./types";

const localWindows = new Map<string, { count: number; resetAt: number }>();

export async function assertRateLimit(binding: RateLimitBinding | undefined, key: string, fallback: { limit: number; periodMs: number }) {
  if (binding) {
    const result = await binding.limit({ key });
    if (!result.success) throw new SourceError("RATE_LIMITED", "Too many learning-data requests. Try again shortly.", { retryable: true });
    return;
  }
  const now = Date.now();
  const current = localWindows.get(key);
  if (!current || current.resetAt <= now) {
    localWindows.set(key, { count: 1, resetAt: now + fallback.periodMs });
    return;
  }
  current.count += 1;
  if (current.count > fallback.limit) throw new SourceError("RATE_LIMITED", "Too many learning-data requests. Try again shortly.", { retryable: true });
}

const readyAt = new Map<string, number>();

export async function paceProvider(provider: string, minimumIntervalMs: number) {
  const now = Date.now();
  const wait = Math.max(0, (readyAt.get(provider) ?? now) - now);
  readyAt.set(provider, now + wait + minimumIntervalMs);
  if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
}
