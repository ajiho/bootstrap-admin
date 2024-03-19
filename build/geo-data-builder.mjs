/**
 * 用于生成index.html的注册用户地区分布图表的地图数据
 */

import fs from "fs-extra";

const res = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
  .then(response => response.text())

fs.writeFile('dist/lib/china.json', res, 'utf8');

