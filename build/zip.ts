import { consola } from "consola";
import * as zl from "zip-lib";

import pkg from "../package.json" with { type: "json" };
import { PATHS } from "./config";

export async function main() {
  const zipDir = `adminlts-${pkg.version}-dist`;
  const zipFileName = `${zipDir}.zip`;

  await zl.archiveFolder(PATHS.dist, zipFileName);

  consola.success(`zip完成: ${zipFileName}`);
}

main().catch((err) => {
  console.error(err);

  process.exit(1);
});
