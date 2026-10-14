import { defineConfig } from "rolldown";

export default defineConfig([
  {
    input: "src/js/adminlts.js",
    external: ["jquery", "bootstrap"],
    transform: {
      target: "es2022",
    },
    output: {
      file: "dist/js/adminlts.js",
      format: "umd",
      name: "adminlts",
      minify: false,
    },
  },
  {
    input: "src/js/bootstrap.js",
    transform: {
      target: "es2022",
    },
    output: {
      file: "dist/js/bootstrap.min.js",
      format: "umd",
      name: "bootstrap",
      minify: true,
    },
  },
]);
