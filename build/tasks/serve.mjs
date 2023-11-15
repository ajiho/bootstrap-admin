import gulp from 'gulp';
import browserSync from 'browser-sync';
import style from "./style.mjs";
import page from "./page.mjs";
import mock from "./mock.mjs";
import scripts from "./scripts.mjs";
import stylelint from "./stylelint.mjs";
import eslint from "./eslint.mjs";

const {watch, series} = gulp;
const bs = browserSync.create();


const serve = () => {

  // 变动需要重新编译
  watch('src/scss/**/*.scss', series(stylelint.lint, style))
  watch('src/pages/*.twig', page)
  watch('src/mock/**/*.js', mock)
  watch('src/js/**/*.js', series(eslint.lint, scripts))

  //对于图片和额外资源是不需要执行任务的，只需要刷新服务器
  watch([
    'src/img/**',
    'src/lib/**',
  ], bs.reload)

  bs.init({
    notify: false,
    port: 3001,
    open: true,
    files: "**",
    server: {
      baseDir: ['dist', 'src'],
      //处理从/node_modules引入的资源文件，让其可以正常的使用
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}

export default serve;
