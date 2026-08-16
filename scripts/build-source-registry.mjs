#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  indexesRoot,
  readCurriculumCorpus,
  referenceHost,
  repositoryRoot,
  serializeJson,
  writeGeneratedFile,
  questionSourceCollection,
} from "./curriculum-corpus.mjs";

const outputFile = path.join(indexesRoot, "source-registry.json");

/**
 * Licence strings are only ever copied out of the repository, never inferred
 * from a hostname. This pattern matches the Creative Commons identifiers that
 * actually appear verbatim in reference text; anything else stays unlicensed.
 */
const licencePattern = /\bCC0 \d\.\d\b|\bCC BY(?:-(?:SA|NC|ND)){0,2} \d\.\d\b/g;

export const derivationRules = [
  "Scope: one record per distinct evidence-backed source found in the generated corpus under content-v2/. Nothing here is authored by hand.",
  "Collection records: id = `collection:<value>` for every distinct value of a topic bundle's provenance.sourceCollection and of a question's sourceCollection.",
  "Collection fallback: 494 sleep-technology questions carry no top-level sourceCollection but do carry provenance.sourceCollection ('rpsgt-500-questions'); that value is read as a documented fallback so a real source is not silently dropped.",
  "Collection title: the raw value with '-' and '_' replaced by spaces and each word's first character upper-cased. The raw value is repeated in notes so the transformation is reversible.",
  "Collection usageType: 'adaptation' when every item attributed to the collection sets importedWithoutRewriting === true; omitted otherwise.",
  "Reference-host records: id = `reference-host:<hostname>` for every distinct hostname across topic sections.references[].url and question references[].url. provider = the hostname, url = `https://<hostname>`.",
  "Reference-host title: the most frequent reference text seen for that host, verbatim, ties broken by the lexicographically smallest text so the build is reproducible.",
  "license: emitted only when a licence string appears literally in the repository text for that source, and only when exactly one distinct licence string is found. Licences are never guessed from a hostname, a publisher name or a top-level domain. Every record without a licence says so in notes.",
  "attributionRequired: emitted as true only for records whose literal licence string is a CC BY variant, because attribution is that licence's defining condition. Omitted everywhere else, including for every source with no licence evidence.",
  "importedAt: the earliest YYYY-MM-DD prefix of a provenance.importBatch identifier, or the earliest question provenance.lastVerified date, observed for the source's own items. Omitted when neither field is present. The contributing batch identifiers are repeated in notes.",
  "authorOrOrganization: omitted everywhere. The corpus records collection slugs and reference text, not a verified author or rights holder, so any value here would be an invention.",
  "generatedOn: copied from content-v2/catalog.json so regeneration is reproducible rather than wall-clock dependent.",
  "Ordering: records are sorted by id, and every list inside a record is sorted, so the file regenerates byte-identically.",
];

const readableTitle = (value) => value
  .split(/[-_]+/)
  .filter((word) => word.length > 0)
  .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
  .join(" ");

const earliestDate = (values) => [...values].filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(value)).sort()[0];

const licenceStrings = (text) => (typeof text === "string" ? text.match(licencePattern) ?? [] : []);

const bumpCount = (map, key) => map.set(key, (map.get(key) ?? 0) + 1);

const collectionRecord = (value, evidence) => {
  const record = { id: `collection:${value}`, title: readableTitle(value) };
  const importBatches = [...evidence.importBatches].sort();
  if (evidence.importedWithoutRewriting.size === 1 && evidence.importedWithoutRewriting.has(true)) record.usageType = "adaptation";
  const importedAt = earliestDate([...importBatches.map((batch) => batch.slice(0, 10)), ...evidence.lastVerified]);
  if (importedAt) record.importedAt = importedAt;
  const notes = [
    `Raw sourceCollection value: "${value}".`,
    `Attributed items in the corpus: ${evidence.topicCount} topic bundles, ${evidence.questionCount} questions.`,
  ];
  if (importBatches.length > 0) notes.push(`Import batch identifiers: ${importBatches.join(", ")}.`);
  notes.push("No licence statement for this collection exists anywhere in the repository, so license and attributionRequired are omitted rather than guessed.");
  record.notes = notes.join(" ");
  return record;
};

const referenceHostRecord = (host, evidence) => {
  const title = [...evidence.texts.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))[0][0];
  const record = { id: `reference-host:${host}`, title, provider: host, url: `https://${host}` };
  const licences = [...evidence.licences].sort();
  const notes = [`${evidence.urls.size} distinct reference ${evidence.urls.size === 1 ? "URL" : "URLs"} in the corpus ${evidence.urls.size === 1 ? "resolves" : "resolve"} to this host.`];
  if (licences.length === 1) {
    record.license = licences[0];
    if (licences[0].startsWith("CC BY")) record.attributionRequired = true;
    notes.push(`Licence "${licences[0]}" is stated literally in reference text stored in this repository; it was copied, not inferred.`);
  } else if (licences.length > 1) {
    notes.push(`Reference text in this repository states more than one licence for this host (${licences.join(", ")}), so no single licence is recorded.`);
  } else {
    notes.push("No licence statement for this host exists anywhere in the repository, so license and attributionRequired are omitted rather than guessed.");
  }
  record.notes = notes.join(" ");
  return record;
};

export const buildSourceRegistry = () => {
  const corpus = readCurriculumCorpus();
  const collections = new Map();
  const hosts = new Map();
  const collectionEvidence = (value) => {
    if (!collections.has(value)) {
      collections.set(value, {
        topicCount: 0,
        questionCount: 0,
        importBatches: new Set(),
        lastVerified: new Set(),
        importedWithoutRewriting: new Set(),
      });
    }
    return collections.get(value);
  };
  const hostEvidence = (host) => {
    if (!hosts.has(host)) hosts.set(host, { urls: new Set(), texts: new Map(), licences: new Set() });
    return hosts.get(host);
  };
  const recordReference = (reference) => {
    const host = referenceHost(reference?.url);
    if (!host) return;
    const evidence = hostEvidence(host);
    evidence.urls.add(reference.url);
    if (typeof reference.text === "string" && reference.text.length > 0) bumpCount(evidence.texts, reference.text);
    for (const licence of licenceStrings(reference.text)) evidence.licences.add(licence);
  };

  for (const subject of corpus.subjects) {
    for (const topic of subject.topics) {
      const provenance = topic.bundle.provenance ?? {};
      if (provenance.sourceCollection) {
        const evidence = collectionEvidence(provenance.sourceCollection);
        evidence.topicCount += 1;
        evidence.importedWithoutRewriting.add(provenance.importedWithoutRewriting === true);
        if (provenance.importBatch) evidence.importBatches.add(provenance.importBatch);
      }
      for (const reference of topic.bundle.sections?.references ?? []) recordReference(reference);
    }
    for (const question of subject.questions) {
      const value = questionSourceCollection(question);
      if (value) {
        const evidence = collectionEvidence(value);
        evidence.questionCount += 1;
        evidence.importedWithoutRewriting.add(question.provenance?.importedWithoutRewriting === true);
        if (question.provenance?.importBatch) evidence.importBatches.add(question.provenance.importBatch);
        if (question.provenance?.lastVerified) evidence.lastVerified.add(question.provenance.lastVerified);
      }
      for (const reference of question.references ?? []) recordReference(reference);
    }
  }

  const sources = [
    ...[...collections.entries()].map(([value, evidence]) => collectionRecord(value, evidence)),
    ...[...hosts.entries()].map(([host, evidence]) => referenceHostRecord(host, evidence)),
  ].sort((left, right) => left.id.localeCompare(right.id));

  return {
    schemaVersion: "1.0.0",
    generatedOn: corpus.catalog.generatedOn,
    generatedBy: "scripts/build-source-registry.mjs",
    derivationRules,
    sources,
  };
};

export const serializeSourceRegistry = () => serializeJson(buildSourceRegistry());

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const registry = buildSourceRegistry();
  writeGeneratedFile(outputFile, serializeJson(registry));
  const collectionCount = registry.sources.filter((source) => source.id.startsWith("collection:")).length;
  const licensed = registry.sources.filter((source) => source.license).length;
  console.log(`Wrote ${path.relative(repositoryRoot, outputFile)}`);
  console.log(`${registry.sources.length} source records: ${collectionCount} collections; ${registry.sources.length - collectionCount} reference hosts.`);
  console.log(`Records carrying a licence copied literally from the repository: ${licensed}.`);
}

export const sourceRegistryPath = outputFile;
export const sourceRegistryRelativePath = path.relative(repositoryRoot, outputFile);
export const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
