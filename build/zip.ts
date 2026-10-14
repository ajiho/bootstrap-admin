import * as zl from "zip-lib";

import pkg from "../package.json" with { type: "json" };
import { PATHS } from "./config.ts";
import { logger } from "./config.ts";

export async function main() {
  const zipDir = `adminlts-${pkg.version}-dist`;
  const zipFileName = `${zipDir}.zip`;

  await zl.archiveFolder(PATHS.dist, zipFileName);

  logger.success(`zip完成: ${zipFileName}`);
}

main().catch((err) => {
  console.error(err);

  process.exit(1);
});
