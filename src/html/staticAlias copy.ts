import fs from "node:fs";
import path from "node:path";

export function staticAlias(map: Record<string, string>) {
  return {
    name: "static-alias",

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) {
          return next();
        }

        for (const [prefix, dir] of Object.entries(map)) {
          if (!req.url.startsWith(prefix)) {
            continue;
          }

          const file = path.join(dir, req.url.slice(prefix.length));

          if (!fs.existsSync(file)) {
            return next();
          }

          fs.createReadStream(file).pipe(res);
          return;
        }

        next();
      });
    },
  };
}
