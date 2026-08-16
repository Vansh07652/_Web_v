import type { SourceCache } from "../cache";
import type { HttpDependencies } from "../http";
import type { Env } from "../types";

export interface ProviderContext {
  env: Env;
  cache: SourceCache;
  http?: Partial<HttpDependencies>;
  now?: () => Date;
}
