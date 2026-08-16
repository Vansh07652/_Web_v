interface CacheRecord<T> {
  expiresAt: number;
  value: T;
}

export interface SourceCache {
  get<T>(key: string): Promise<T | undefined>;
  put<T>(key: string, value: T, ttlSeconds: number): Promise<void>;
}

async function digest(value: string) {
  const bytes = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function cacheRequest(key: string) {
  return new Request(`https://source-cache.medmosa.internal/${await digest(key)}`);
}

export function createEdgeCache(now: () => number = Date.now): SourceCache {
  return {
    async get<T>(key: string) {
      const response = await caches.default.match(await cacheRequest(key));
      if (!response) return undefined;
      const record = await response.json() as CacheRecord<T>;
      return record.expiresAt > now() ? record.value : undefined;
    },
    async put<T>(key: string, value: T, ttlSeconds: number) {
      const record: CacheRecord<T> = { expiresAt: now() + ttlSeconds * 1_000, value };
      await caches.default.put(await cacheRequest(key), new Response(JSON.stringify(record), {
        headers: { "cache-control": `public, max-age=${ttlSeconds}`, "content-type": "application/json" },
      }));
    },
  };
}

export function createMemoryCache(now: () => number = Date.now): SourceCache {
  const records = new Map<string, CacheRecord<unknown>>();
  return {
    async get<T>(key: string) {
      const record = records.get(key);
      if (!record || record.expiresAt <= now()) return undefined;
      return record.value as T;
    },
    async put<T>(key: string, value: T, ttlSeconds: number) {
      records.set(key, { expiresAt: now() + ttlSeconds * 1_000, value });
    },
  };
}

export async function cached<T>(cache: SourceCache, key: string, ttlSeconds: number, load: () => Promise<T>) {
  const hit = await cache.get<T>(key);
  if (hit !== undefined) return { value: hit, cached: true };
  const value = await load();
  await cache.put(key, value, ttlSeconds);
  return { value, cached: false };
}
