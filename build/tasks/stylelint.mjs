import gulp from 'gulp';
import gulpStylelint from "@ronilaukkarinen/gulp-stylelint";

const {src, dest} = gulp;


const config = {
  //直接指定配置文件,避免stylelint去查找配置文件
  configFile: "./stylelint.config.mjs",
  //打印错误堆栈跟踪
  debug: false,
  //报错后是否直接终止程序 true:终止
  failAfterError: true,
  //报错类型和格式处理
  reporters: [
    {formatter: 'string', console: true}
  ]
}


const lint = () => {
  return src('src/scss/**/*.scss')
    .pipe(gulpStylelint({
      ...config,
      fix: false,
    }))
}


const fix = () => {
  return src('src/scss/**/*.scss')
    .pipe(gulpStylelint({
      ...config,
      //自动尽可能的修复
      fix: true,
    }))
    .pipe(dest('src/scss'));
}


export default {
  fix,
  lint
}


