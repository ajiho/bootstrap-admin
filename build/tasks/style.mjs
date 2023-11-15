import gulp from 'gulp';
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';
import header from "gulp-header";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cmq from "node-css-mqpacker";
import sourcemaps from "gulp-sourcemaps";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import ignore from "gulp-ignore";
import banner from "../utils/banner.mjs";

const {src, dest} = gulp;
const sass = gulpSass(dartSass);


const style = () => {
  return src('src/scss/**/*.scss')
    .pipe(header(banner()))
    .pipe(sass.sync({
      outputStyle: "expanded"
    }).on('error', sass.logError))
    .pipe(postcss([
      //给css添加前缀
      autoprefixer(),
      //合并媒体查询
      cmq({
        sort: function (a, b) {//按照从@media max-width 高到低排列
          let aMax = a.match(/\d+/)[0];
          let bMax = b.match(/\d+/)[0];
          return bMax - aMax;
        }
      })
    ]))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(ignore.include('*.css'))//只处理css文件，解决多余的.map文件生成
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
}






export default style;

