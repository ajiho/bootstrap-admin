import gulp from 'gulp';


const {src, dest} = gulp;


const scripts = () => {
  return src('src/js/*')
    .pipe(dest('dist/js'));
}


export default scripts;

