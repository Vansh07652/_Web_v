#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => JSON.parse(fs.readFileSync(path.join(root, "data", name), "utf8"));
const records = [...read("notes.json"), ...read("questions.json")];
const errors = [];
const inventory = records.map((record) => {
  const relativePath = record.filePath;
  const target = path.resolve(root, relativePath ?? "");
  const safe = relativePath && target.startsWith(`${root}${path.sep}`) && fs.existsSync(target);
  if (!safe) errors.push(`${record.id}: ${relativePath ?? "missing filePath"}`);
  return {
    subject: record.subject,
    contentType: record.contentType,
    id: record.id,
    relativePath,
    sha256: safe ? crypto.createHash("sha256").update(fs.readFileSync(target)).digest("hex") : null,
    exportStatus: safe && record.status === "approved" && record.reviewStatus === "audited" ? "included" : "blocked",
  };
}).sort((a, b) => a.relativePath.localeCompare(b.relativePath));

if (errors.length) {
  console.error(`RELEASE INVENTORY: FAIL (${errors.length} missing or unsafe paths)`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

fs.writeFileSync(path.join(root, "release-content-inventory.json"), `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  algorithm: "SHA-256",
  contentFileCount: inventory.length,
  files: inventory,
}, null, 2)}\n`);
const quote = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const fields = ["subject", "contentType", "id", "relativePath", "sha256", "exportStatus"];
const csv = [fields.join(","), ...inventory.map((item) => fields.map((field) => quote(item[field])).join(","))].join("\n");
fs.writeFileSync(path.join(root, "release-content-inventory.csv"), `${csv}\n`);
console.log(`RELEASE INVENTORY: PASS (${inventory.length} approved content files)`);
