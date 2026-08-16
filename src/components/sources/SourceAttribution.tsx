import type { SourceProvider } from "../../lib/sources/types";

const PROVIDER_LABEL: Record<SourceProvider, string> = {
  pubmed: "NCBI PubMed",
  openalex: "OpenAlex",
  nlm: "NLM Clinical Table Search Service",
  openlibrary: "Open Library",
  cdc: "CDC",
};

export function SourceAttribution({ provider, retrievedAt }: { provider: SourceProvider; retrievedAt?: string }) {
  const timestamp = retrievedAt ? new Date(retrievedAt) : undefined;
  const readable = timestamp && !Number.isNaN(timestamp.getTime()) ? timestamp.toLocaleString() : undefined;
  return (
    <footer className="source-attribution">
      <p>Data provided by {PROVIDER_LABEL[provider]}. Educational use only — verify information with the original source.</p>
      {readable && <p>Retrieved or refreshed {readable}.</p>}
    </footer>
  );
}
