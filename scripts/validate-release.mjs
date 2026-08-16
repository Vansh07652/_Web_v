#!/usr/bin/env node
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const isTracked = (relativePath) => {
  try {
    return execFileSync("git", ["-C", root, "ls-files", "--", relativePath], { encoding: "utf8" }).trim().length > 0;
  } catch {
    return false;
  }
};
const requiredFiles = [
  ".gitignore", "APPROVAL_STATUS.md", "CHANGELOG.md", "CONTENT_GUIDE.md", "DATA_DICTIONARY.md",
  "PHASE_4_STATUS.md", "PHASE_5_STATUS.md", "README.md", "manifest.json", "package-lock.json",
  "package.json", "release-content-inventory.csv", "release-content-inventory.json",
  "release-validation-report.md", "tsconfig.json", "vite.config.ts",
];
for (const name of requiredFiles) if (!fs.existsSync(path.join(root, name))) errors.push(`Missing ${name}`);
for (const name of [".DS_Store", ".env", ".env.local", "Thumbs.db"]) if (fs.existsSync(path.join(root, name))) errors.push(`Prohibited file ${name}`);
for (const name of ["node_modules", "dist", "build", "coverage"]) if (isTracked(name)) errors.push(`Generated directory ${name} must not be committed`);

if (fs.existsSync(path.join(root, "manifest.json"))) {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
  const manifestPaths = new Set(manifest.files?.map((entry) => entry.path));
  if (manifest.fileCountExcludingManifest !== manifest.files?.length) errors.push("Manifest count does not match files[]");
  for (const entry of manifest.files ?? []) {
    const target = path.resolve(root, entry.path);
    if (!target.startsWith(`${root}${path.sep}`) || !fs.existsSync(target)) { errors.push(`Manifest path missing or unsafe: ${entry.path}`); continue; }
    const hash = crypto.createHash("sha256").update(fs.readFileSync(target)).digest("hex");
    if (hash !== entry.sha256) errors.push(`Manifest hash mismatch: ${entry.path}`);
    for (const field of ["fileType", "sizeBytes", "sha256", "subject", "contentType", "status"]) {
      if (!(field in entry)) errors.push(`Manifest entry lacks ${field}: ${entry.path}`);
    }
  }
  const excludedDirectories = new Set([".git", "node_modules", "dist"]);
  const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) return [];
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [path.relative(root, target).split(path.sep).join("/")];
  });
  for (const relativePath of walk(root)) {
    if ([".DS_Store", "manifest.json"].includes(path.basename(relativePath))) continue;
    if (!manifestPaths.has(relativePath)) errors.push(`Manifest omits ${relativePath}`);
  }
}

if (fs.existsSync(path.join(root, "release-content-inventory.json"))) {
  const inventory = JSON.parse(fs.readFileSync(path.join(root, "release-content-inventory.json"), "utf8"));
  const expectedContentFiles = ["notes.json", "questions.json"].reduce((count, name) => count + JSON.parse(fs.readFileSync(path.join(root, "data", name), "utf8")).length, 0);
  if (inventory.contentFileCount !== expectedContentFiles || inventory.files?.length !== expectedContentFiles) errors.push(`Release inventory must contain ${expectedContentFiles} approved note/question files`);
  if (inventory.files?.some((item) => item.exportStatus !== "included")) errors.push("Release inventory contains a non-included record");
}

console.log(`RELEASE VALIDATION: ${errors.length ? "FAIL" : "PASS"}`);
console.log(`Errors: ${errors.length}`);
for (const error of errors) console.log(`- ${error}`);
if (errors.length) process.exit(1);
