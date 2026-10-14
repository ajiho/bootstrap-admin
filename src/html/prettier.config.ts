import { type Config } from "prettier";
export default {
  plugins: ["prettier-plugin-astro"],
  semi: false, // 不要分号
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
} satisfies Config;
