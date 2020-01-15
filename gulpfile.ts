import { src, dest, watch } from 'gulp';
const exec = require('gulp-exec');
const del = require('del');

const md2Latex = () => {
  del('dist/*')

  return src("src/main.md")
    .pipe(
      exec('pandoc <%= file.path %> -f markdown -o dist/main.tex')
    )
}

const watchMarkDownFiles = () => watch("src/main.md", md2Latex);
exports.default = watchMarkDownFiles;