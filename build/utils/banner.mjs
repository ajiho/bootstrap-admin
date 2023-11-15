import fs from "fs-extra";


const banner = () => {
  const year = new Date().getFullYear();
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  //头部的版权信息
  return `/*!
 * ${pkg.name} v${pkg.version} (${pkg.homepage})
 * Copyright 2023-${year} ${pkg.author}
 * license ${pkg.license} (https://gitee.com/${pkg.author}/${pkg.name}/blob/master/LICENSE)
 */\n`;
}

export default banner;
