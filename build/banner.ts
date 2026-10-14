import pkg from "../package.json" with { type: "json" };

const year = new Date().getFullYear();

function getBanner(pluginFilename: string = "") {
  return `/*!
  * AdminLTS${pluginFilename ? ` ${pluginFilename}` : ""} v${pkg.version} (${pkg.homepage})
  * Copyright 2011-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/ajiho/AdminLTS/blob/main/LICENSE)
  */`;
}

export default getBanner;
