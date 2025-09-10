import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Example of mapping an image asset from Figma → local file
      "figma-asset-logo": path.resolve(
        __dirname,
        "./src/assets/b3ad8e939dc2d455337cc8700b5c8148d81c78b2.png"
      ),
    },
  },
  build: {
    target: "esnext",
    outDir: "dist",
  },
  server: {
    port: 3000,
    open: true,
  },
});
