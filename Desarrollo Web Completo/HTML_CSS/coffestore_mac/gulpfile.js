//gfhgf

//     gulp exporta     Require importa los modulos instalados en este caso la dependencia gulp
const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  //compilar SASS
  //Identificar Archivo(src), Compilar(pipe(sass(Este se compila))) y guardar el .css (pipe(dest(lo mandamos a build/css)))
  src("scr/scss/styles.scss").pipe(sass()).pipe(dest("build/css"));
  done();
}

exports.css = css;
