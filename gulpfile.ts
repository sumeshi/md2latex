import { src, dest, watch } from 'gulp';
const exec = require('gulp-exec');
const del = require('del');

const md2Latex = () => {
  del('dist/main*')
  del('dist/template*')

  return src("src/main.md")
    .pipe(
      exec('sh /opt/compile.sh',)
    )
    .pipe(
      exec.reporter({err: true, stderr: true, stdout: true})
    )
}

const watchMarkDownFiles = () => watch(['src/main.md', 'src/template.tex'], md2Latex);
exports.default = watchMarkDownFiles;