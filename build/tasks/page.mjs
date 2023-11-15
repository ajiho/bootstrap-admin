import gulp from 'gulp';

const {src, dest} = gulp;
import gulpTwig from 'gulp-twig'


const page = () => {
  return src('src/pages/*.twig')
    .pipe(gulpTwig({
      data: {
        title: 'bootstrap-admin',
        benefits: [
          'Fast',
          'Flexible',
          'Secure'
        ]
      }
    }))
    .pipe(dest('./dist'));
}


export default page;

