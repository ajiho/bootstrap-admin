import gulp from 'gulp';

import imagemin, {mozjpeg, gifsicle, svgo} from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant'

const {src, dest} = gulp;


const image = () => {
  return src('src/img/*')
    .pipe(imagemin([
      gifsicle({interlaced: true}),
      mozjpeg({quality: 75, progressive: true}),
      pngquant(),
      svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ], {
      verbose: true
    }))
    .pipe(dest('dist/img'));
}


export default image;

