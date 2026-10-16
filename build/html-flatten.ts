import { consola } from "consola";
import fs from "fs-extra";

import { PATHS } from "./config";

export async function main() {
  await fs.copy(PATHS.htmlDist, PATHS.dist, {
    overwrite: true,
  });

  consola.success("html 已经成功拍平");
}

main().catch((err) => {
  console.error(err);

  process.exit(1);
});
