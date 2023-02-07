//gfhgf

const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  //compilar SASS
  //Identificar Archivo, Compilar y guardar el .css
  src("scr/scss/styles.scss").pipe(sass()).pipe(dest("build/css"));
  done();
}

exports.css = css;
