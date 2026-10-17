import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: {
      adminlts: "src/js/index.ts",
    },
    format: "umd",
    platform: "browser",
    globalName: "adminlts",
    clean: false,
    minify: false,
    deps: {
      neverBundle: ["bootstrap", "jquery"],
    },
    outputOptions: {
      entryFileNames: "js/adminlts.js",
      globals: { bootstrap: "bootstrap", jquery: "jQuery" },
    },
  },
]);
