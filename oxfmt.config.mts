import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["dist/**", "*.min.js"],
  sortImports: {
    order: "asc",
  },
});
