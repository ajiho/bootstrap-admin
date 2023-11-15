import gulpReplace from 'gulp-replace'
import gulp from 'gulp';

const {src, dest} = gulp;

const replace = () => {
  return src('dist/*.html')
    .pipe(gulpReplace('/node_modules/', 'lib/'))
    .pipe(dest('dist/'));
}

export default replace;
