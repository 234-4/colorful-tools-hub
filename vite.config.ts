
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/colorful-tools-hub/", // Base path for GitHub Pages
  server: {
    host: "::",
    port: 8080,
    open: true, // Automatically open browser when running dev server
  },
  build: {
    outDir: "dist", // Ensure output directory is explicitly set
    emptyOutDir: true, // Clear the output directory before building
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
