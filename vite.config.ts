import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "github-pages" ? "/" : "./",
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1400,
  },
}));
