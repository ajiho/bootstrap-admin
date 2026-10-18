import { defineConfig } from "tsdown";
import type { UserConfig } from "tsdown";

const sharedConfig = {
  platform: "browser",
  clean: false,
  minify: false,

  deps: {
    neverBundle: ["bootstrap", "jquery"],
  },

  outputOptions: {
    globals: {
      bootstrap: "bootstrap",
      jquery: "jQuery",
    },
  },
} satisfies UserConfig;

export default defineConfig([
  // ESM
  {
    ...sharedConfig,

    entry: ["src/js/index.ts"],
    format: "esm",
    outputOptions: {
      ...sharedConfig.outputOptions,
      dir: "dist/js",
    },
  },

  // UMD
  {
    ...sharedConfig,

    entry: {
      adminlts: "src/js/index.umd.ts",
    },

    dts: false,
    format: "umd",
    globalName: "adminlts",

    outputOptions: {
      ...sharedConfig.outputOptions,
      entryFileNames: "js/adminlts.js",
    },
  },
]);
