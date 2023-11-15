import {rollup} from "rollup";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

import banner from "../utils/banner.mjs";

const mock = async () => {
  const bundle = await rollup({
    input: 'src/mock/index.js',
    plugins: [resolve, commonjs],
    external: ['jquery', 'mockjs']
  });

  await bundle.write({
    banner: banner(),
    file: 'dist/js/bootstrap-admin.mock.min.js',
    format: 'iife',
    plugins: [terser({compress: {drop_console: false}})],
    globals: {
      jquery: 'jQuery',
      mockjs: 'Mock',
    },
    sourcemap: false
  });
}


export default mock;

