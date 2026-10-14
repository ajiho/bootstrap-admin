import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
      util: "src/util/index.ts",
    },
    minify: false,
  },
  {
    entry: "src/index.iife.ts",
    sourcemap: true,
    format: "iife",
    minify: false,
    inlineOnly: false,
    outputOptions: {
      name: "moola",
      file: "dist/moola.js",
    },
  },
]);
