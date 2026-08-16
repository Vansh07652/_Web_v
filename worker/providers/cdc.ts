import { sourceConfig } from "../config";
import { SourceError } from "../errors";
import type { ProviderContext } from "./context";

/**
 * CDC stays future-safe and disabled. A user-facing adapter is intentionally
 * unavailable until a public-health page defines a reviewed dataset contract.
 */
export function cdcStatus(context: ProviderContext) {
  const config = sourceConfig(context.env).cdc;
  if (!config.enabled) return { enabled: false as const };
  if (!config.datasetId || !config.sourceUrl) {
    throw new SourceError("NOT_CONFIGURED", "CDC data requires an explicit dataset ID and source URL.", { provider: "cdc" });
  }
  return { enabled: true as const, datasetId: config.datasetId, sourceUrl: config.sourceUrl };
}
