import path from "node:path";

import { defineConfig } from "astro/config";
import sirv from "sirv";

// https://astro.build/config
export default defineConfig({
  output: "static",
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: "file",
  },
  compressHTML: false,
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [
      {
        name: "static-alias",
        configureServer(server) {
          const distDir = path.resolve("dist");

          server.watcher.add(distDir);

          server.watcher.on("change", (file) => {
            const relative = path.relative(distDir, file);

            if (!relative.startsWith("..") && !path.isAbsolute(relative)) {
              server.ws.send({
                type: "full-reload",
              });
            }
          });

          server.middlewares.use(
            "/lib",
            sirv(path.resolve("node_modules"), {
              dev: true,
            }),
          );
          server.middlewares.use(
            "/css",
            sirv(path.resolve("dist/css"), {
              dev: true,
            }),
          );
          server.middlewares.use(
            "/js",
            sirv(path.resolve("dist/js"), {
              dev: true,
            }),
          );
        },
      },
    ],
    resolve: {
      // alias: {
      //   "/lib": path.resolve("./node_modules"),
      //   "/css": path.resolve("./dist/css"),
      //   "/js": path.resolve("./dist/js"),
      // },
    },
    server: {
      host: "0.0.0.0",
      watch: {
        ignored: ["!**/dist/**"],
      },
    },
  },
});
