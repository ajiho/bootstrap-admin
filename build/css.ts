import browserslist from "browserslist";
import consola from "consola";
import fs from "fs-extra";
import { browserslistToTargets, transform } from "lightningcss";
import { relative, dirname, join, resolve } from "pathe";
import postcss from "postcss";
import postcssPrefixCustomProperties from "postcss-custom-properties-prefix";
import sortMediaQueries from "postcss-sort-media-queries";
import { compile } from "sass";

import getBanner from "./banner";

const inputFile = "src/scss/adminlts.scss";
const baseOutDir = "dist/css";
const baseName = "adminlts";

const isProd = process.env.NODE_ENV === "production";
const mode = isProd ? "production" : "development";

/* ----------------------------------
 * 输出文件名
 * ---------------------------------- */
const fileName = isProd ? `${baseName}.min.css` : `${baseName}.css`;

const outFile = join(baseOutDir, fileName);
const mapFile = `${outFile}.map`;

async function main() {
  consola.start(`Building CSS in ${mode} mode...`);

  /* ----------------------------------
   * Sass
   * ---------------------------------- */
  const sassResult = compile(inputFile, {
    style: "expanded",

    sourceMap: true,
    // 源码写进地图文件的sourcesContent字段
    sourceMapIncludeSources: true,

    loadPaths: ["node_modules"],

    // 禁止显示依赖包的警告
    quietDeps: true,
  });

  /* ----------------------------------
   * PostCSS
   * ---------------------------------- */
  const postcssResult = await postcss([
    postcssPrefixCustomProperties({
      prefix: "lts-",
      ignore: [/^--bs-/, /^--bd-/],
    }),
    sortMediaQueries({
      sort: "mobile-first",
    }),
  ]).process(sassResult.css, {
    from: outFile,
    to: outFile,
    map: {
      prev: sassResult.sourceMap,
      inline: false,
      annotation: false,
    },
  });

  /* ----------------------------------
   * LightningCSS
   * ---------------------------------- */
  const transformed = transform({
    // browserslist -> LightningCSS targets
    targets: browserslistToTargets(browserslist()),

    filename: relative(dirname(postcssResult.opts.to!), postcssResult.opts.from!),

    projectRoot: resolve(baseOutDir),

    code: Buffer.from(postcssResult.css),

    minify: isProd,

    sourceMap: true,

    inputSourceMap: postcssResult.map.toString(),
  });

  /* ----------------------------------
   * 输出 CSS
   * ---------------------------------- */
  await fs.outputFile(
    outFile,
    [getBanner(), transformed.code.toString(), `/*# sourceMappingURL=${fileName}.map */`].join(
      "\n",
    ),
  );
  consola.success(`outFile:${outFile}`);
  /* ----------------------------------
   * 输出 SourceMap
   * ---------------------------------- */
  if (transformed.map) {
    await fs.outputFile(mapFile, transformed.map.toString());
    consola.success(`mapFile:${mapFile}`);
  }
}

main().catch((err) => {
  console.error(err);

  process.exit(1);
});
