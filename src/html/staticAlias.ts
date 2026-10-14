import fs from "node:fs";
import path from "node:path";

const mimeTypes: Record<string, string> = {
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".map": "application/json",

  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",

  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".eot": "application/vnd.ms-fontobject",

  ".html": "text/html",
  ".txt": "text/plain",
};

export function staticAlias(map: Record<string, string>) {
  return {
    name: "static-alias",

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) {
          return next();
        }

        // 去掉 query/hash
        const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);

        for (const [prefix, dir] of Object.entries(map)) {
          if (!pathname.startsWith(prefix)) {
            continue;
          }

          const file = path.join(dir, pathname.slice(prefix.length));

          if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
            return next();
          }

          const ext = path.extname(file);

          res.setHeader("Content-Type", mimeTypes[ext] ?? "application/octet-stream");

          fs.createReadStream(file).pipe(res);
          return;
        }

        next();
      });
    },
  };
}
