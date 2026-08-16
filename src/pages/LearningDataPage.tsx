import { Breadcrumbs, PageHeader } from "../components/ui";
import { RelatedBooks } from "../components/sources/RelatedBooks";
import { TerminologyLookup } from "../components/sources/TerminologyLookup";
import type { Navigate } from "../lib/navigation";

export function LearningDataPage({ navigate }: { navigate: Navigate }) {
  return (
    <div className="learning-data-page">
      <Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Learning resources" }]} />
      <PageHeader
        eyebrow="Free learning data"
        title="Learning resources"
        description="Optional lookups from public scholarly, terminology and library sources. These tools are educational only and do not provide diagnosis or treatment guidance."
      />
      <p className="learning-data-privacy">Do not enter patient names, records, symptoms for diagnosis, or other personal health information. Searches are sent only to the provider needed for the tool you use.</p>
      <TerminologyLookup />
      <RelatedBooks />
    </div>
  );
}
