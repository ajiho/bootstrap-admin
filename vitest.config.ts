import path from "node:path";

import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "test/boot.ts")],
    include: ["test/**/*.{test,spec}.ts"],
    coverage: {
      include: ["src/**/*.ts"],
      exclude: [...configDefaults.exclude, "**/test/**", "**/*.d.ts"],
      provider: "v8",
      thresholds: {
        branches: 90,
        functions: 95,
        lines: 95,
        statements: 95,
      },
    },
  },
});
