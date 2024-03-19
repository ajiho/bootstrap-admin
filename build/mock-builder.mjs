import {rollup} from "rollup";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

import getBanner from "./banner.mjs";


const bundle = await rollup({
  input: 'src/mock/index.js',
  plugins: [resolve, commonjs],
  external: ['mockjs']
});

await bundle.write({
  banner: getBanner(),
  file: 'dist/js/bootstrap-admin.mock.min.js',
  format: 'iife',
  plugins: [terser({compress: {drop_console: false}})],
  globals: {
    mockjs: 'Mock',
  },
  sourcemap: false
});

