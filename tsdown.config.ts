import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: {
      adminlts: "src/ts/index.ts",
    },
    format: "umd",
    platform: "browser",
    globalName: "AdminLTS",
    clean: false,
    minify: false,
    outputOptions: {
      entryFileNames: "js/adminlts.js",
    },
  },
]);
