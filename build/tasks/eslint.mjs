import gulp from 'gulp';
import gulpESLintNew from 'gulp-eslint-new'

const {src} = gulp;


const CONFIG = {
  //配置类型
  configType: 'flat',
  //配置文件
  overrideConfigFile: './eslint.config.mjs',
  //当 ESLint 忽略文件时添加结果警告
  warnIgnored: true,
}



export const lint = () => {

  return src('src/js/**/*.js')
    .pipe(gulpESLintNew({
      ...CONFIG,
      fix: false,
    }))
    .pipe(gulpESLintNew.format())
    //检测到错误后立马退出
    .pipe(gulpESLintNew.failAfterError())
}


export const fix = () => {

  return gulp.src('src/js/**/*.js')
    .pipe(gulpESLintNew({
      ...CONFIG,
      //尽可能的修复
      fix: true,
    }))
    .pipe(gulpESLintNew.fix());
}

export default {
  fix,
  lint
}
