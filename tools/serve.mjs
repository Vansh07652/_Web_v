// Static file server for the local verification harness.
import http from "node:http";
import { createReadStream, existsSync, statSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.argv[2]);
const PORT = Number(process.argv[3] ?? 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const indexHtml = path.join(ROOT, ".preview", "index.html");

http.createServer((request, response) => {
  const url = new URL(request.url, "http://localhost");
  let filePath = path.join(ROOT, decodeURIComponent(url.pathname));
  if (!filePath.startsWith(ROOT)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = indexHtml;
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    // Single-page-application fallback, mirroring the GitHub Pages deployment.
    response.writeHead(200, { "content-type": TYPES[".html"] }).end(readFileSync(indexHtml));
    return;
  }
  response.writeHead(200, { "content-type": TYPES[path.extname(filePath)] ?? "application/octet-stream", "cache-control": "no-store" });
  createReadStream(filePath).pipe(response);
}).listen(PORT, () => console.log(`serving ${ROOT} on http://127.0.0.1:${PORT}`));
