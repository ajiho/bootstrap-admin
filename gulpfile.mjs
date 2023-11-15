import gulp from "gulp";
import page from "./build/tasks/page.mjs";
import serve from "./build/tasks/serve.mjs";
import style from "./build/tasks/style.mjs";
import image from "./build/tasks/image.mjs";
import copy from "./build/tasks/copy.mjs";
import mock from "./build/tasks/mock.mjs";
import scripts from "./build/tasks/scripts.mjs";
import stylelint from "./build/tasks/stylelint.mjs";
import eslint from "./build/tasks/eslint.mjs";
import replace from "./build/tasks/replace.mjs";

import {deleteAsync} from 'del'


const {series, parallel} = gulp;

// 清理任务
const clean = () => {
  return deleteAsync(['dist'])
}


// 对scss尽可能的修复
const styleFix = stylelint.fix


// 对js尽可能的修复
const scriptsFix = eslint.fix


//编译任务
const compile = parallel(series(stylelint.lint, style), page, mock, series(eslint.lint, scripts))


//上线打包
const build = series(clean, parallel(series(compile,replace), image, copy));


// 开发任务
const dev = series(clean, compile, serve)


export {
  clean,
  dev,
  build,
  image,
  compile,
  copy,
  mock,
  style,
  scripts,
  styleFix,
  scriptsFix,
  replace
}

