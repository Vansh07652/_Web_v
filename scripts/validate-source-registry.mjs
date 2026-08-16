#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readCurriculumCorpus, referenceHost } from "./curriculum-corpus.mjs";
import { serializeSourceRegistry } from "./build-source-registry.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryFile = path.join(root, "content-v2", "indexes", "source-registry.json");
const errors = [];
const fail = (message) => errors.push(message);

let registry = { sources: [] };
if (!fs.existsSync(registryFile)) fail("content-v2/indexes/source-registry.json is missing; run node scripts/build-source-registry.mjs");
else {
  try { registry = JSON.parse(fs.readFileSync(registryFile, "utf8")); }
  catch (error) { fail(`content-v2/indexes/source-registry.json: ${error.message}`); }
}

const sources = Array.isArray(registry.sources) ? registry.sources : [];
if (!Array.isArray(registry.sources)) fail("Registry sources must be an array");
if (registry.schemaVersion !== "1.0.0") fail(`Registry schemaVersion is ${registry.schemaVersion ?? "missing"}`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(registry.generatedOn ?? "")) fail(`Registry generatedOn is not an ISO date: ${registry.generatedOn ?? "missing"}`);
if (!Array.isArray(registry.derivationRules) || registry.derivationRules.length === 0) fail("Registry must document its derivation rules");

const seenIds = new Set();
for (const source of sources) {
  if (typeof source.id !== "string" || source.id.length === 0) { fail("Source record has no id"); continue; }
  if (seenIds.has(source.id)) fail(`Duplicate source id: ${source.id}`);
  seenIds.add(source.id);
  if (typeof source.title !== "string" || source.title.length === 0) fail(`${source.id}: missing title`);
  if (!/^(?:collection|reference-host):.+$/.test(source.id)) fail(`${source.id}: id must be namespaced collection: or reference-host:`);
  if (source.url !== undefined && !/^https?:\/\/[^\s]+$/.test(source.url)) fail(`${source.id}: url is not http(s): ${source.url}`);
  if (source.usageType !== undefined && source.usageType !== "adaptation") fail(`${source.id}: unexpected usageType ${source.usageType}`);
  if (source.attributionRequired !== undefined && typeof source.attributionRequired !== "boolean") fail(`${source.id}: attributionRequired must be a boolean`);
  if (source.attributionRequired !== undefined && source.license === undefined) fail(`${source.id}: attributionRequired claimed without any licence evidence`);
  if (source.importedAt !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(source.importedAt)) fail(`${source.id}: importedAt is not an ISO date: ${source.importedAt}`);
  if (typeof source.notes !== "string" || source.notes.length === 0) fail(`${source.id}: every record must state its evidence in notes`);
}

// A licence may only be claimed when that exact string appears in repository text
// for that same source. Licences are never inferred from a hostname or publisher.
const corpus = readCurriculumCorpus();
const licenceTextByHost = new Map();
const noteHostLicence = (reference) => {
  const host = referenceHost(reference?.url);
  if (!host || typeof reference.text !== "string") return;
  if (!licenceTextByHost.has(host)) licenceTextByHost.set(host, []);
  licenceTextByHost.get(host).push(reference.text);
};
for (const subject of corpus.subjects) {
  for (const topic of subject.topics) for (const reference of topic.bundle.sections?.references ?? []) noteHostLicence(reference);
  for (const question of subject.questions) for (const reference of question.references ?? []) noteHostLicence(reference);
}
let licensedRecords = 0;
for (const source of sources) {
  if (source.license === undefined) continue;
  licensedRecords += 1;
  if (typeof source.license !== "string" || source.license.length === 0) { fail(`${source.id}: license must be a non-empty string`); continue; }
  const host = source.id.startsWith("reference-host:") ? source.id.slice("reference-host:".length) : undefined;
  const texts = host ? licenceTextByHost.get(host) ?? [] : [];
  if (!texts.some((text) => text.includes(source.license))) fail(`${source.id}: claims licence "${source.license}" but no matching literal appears in the repository for this source`);
}

const collectionCount = sources.filter((source) => source.id.startsWith("collection:")).length;
const hostCount = sources.filter((source) => source.id.startsWith("reference-host:")).length;

if (fs.existsSync(registryFile)) {
  const onDisk = fs.readFileSync(registryFile, "utf8");
  if (onDisk !== serializeSourceRegistry()) fail("content-v2/indexes/source-registry.json is stale; re-deriving it from the corpus produces different bytes");
}

console.log(`SOURCE REGISTRY VALIDATION: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`${sources.length} source records (${collectionCount} collections; ${hostCount} reference hosts); ${licensedRecords} with a licence copied literally from the repository; errors: ${errors.length}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
