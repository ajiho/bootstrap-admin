import { defineConfig } from "vitepress";

import { en } from "./en.mjs";
import { shared } from "./shared.mjs";
import { zh } from "./zh.mjs";

export default defineConfig({
  ...shared,

  locales: {
    en: { label: "English", ...en },
    root: { label: "简体中文", ...zh },
  },
});
