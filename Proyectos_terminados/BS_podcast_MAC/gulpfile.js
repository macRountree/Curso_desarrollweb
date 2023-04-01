//llamamos las depeendencias src es paratomar un archivo y dest para destinar una ubicacion
const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass")); //const sass tiene asociado gulp-sass y sass
const purgecss = require("gulp-purgecss");
const rename = require("gulp-rename");
//aligerar imagenes

const imagemin = require("gulp-imagemin");

//funciones
function css(done) {
  //Identificar archivo principal
  src("src/scss/app.scss")
    .pipe(sass()) // compilamos sass
    .pipe(dest("build/css")); //guardamos

  done(); //callback done
}

function cssbuild(done) {
  src("build/css/app.css")
    .pipe(rename({ suffix: ".min" }))
    .pipe(purgecss({ content: ["index.html"] }))
    .pipe(dest("build/css"));
  done();
}
function dev() {
  watch("src/scss/**/*.scss", css); //llamamos la funcion css (6)
}

function imagenes(done) {
  src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 })) //buscamos todos los archivos con todos los formatos jpg /png/avif etc
    .pipe(dest("build/img"));

  done();
}

//exports
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev);
exports.build = series(cssbuild);
