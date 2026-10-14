import fs from "fs-extra";

import { logger, geoJsonFile } from "./config.ts";
// https://geojson.cn/
// https://datav.aliyun.com/portal/school/atlas/area_selector
const url = "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json";

async function main() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  fs.outputJSONSync(geoJsonFile, data, { spaces: 2 });

  logger.success(`geo-json数据已经写入${geoJsonFile}`);
}

main().catch((err) => {
  console.error(err);

  process.exit(1);
});
