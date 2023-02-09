//gfhgf

//     gulp exporta     Require importa los modulos instalados en este caso la dependencia gulp
const { src, dest, watch, series } = require("gulp");

//-----CSS-----SASS------------------------

//const sass requiere gulp sass para que se compile
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

//--------IMAGENES--------------------
const imagemin = require("gulp-imagemin"); //instalamos la version 7.1.0 de gulp-imagemin para que soporte la funcion require
const webp = require("gulp-webp"); //instalamos con npm i --save-dev gulp-webp.. lo utilizamos para convertir
const avif = require("gulp-avif");
//----------FUNCIONES------------
function css(done) {
  //compilar SASS
  //Identificar Archivo(src), Compilar(pipe(sass(Este se compila))) y guardar el .css (pipe(dest(lo mandamos a build/css)))
  src("src/scss/styles.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("build/css"));
  done();
}

function imgs(done) {
  src("src/img/**/*") //identifica img en esta ruta
    .pipe(imagemin({ optimizationLevel: 3 })) //mimificamos imagenes de la ruta disminuyendo su tamañp
    .pipe(dest("build/img"));
  done();
}
function imgswebp() {
  const options = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(webp(options))
    .pipe(dest("build/img")); //todas las imagenes seran filtradas por png y jpg
}

function imgsavif() {
  const options = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(avif(options))
    .pipe(dest("build/img"));
}
//JS no permite repetición de metodos asi que declaramos dev() para que no cree conflictos con watch()
function dev() {
  //Toma 2 parametros.. una es el archivo en src y cuando se hacen cambios.. llama al metodo css
  // watch("src/scss/_header.scss", css);
  // watch("src/scss/styles.scss", css);

  /*En lugar de usar watch para cada archivo scss podemos usar el siguiente comodin */
  /*Aqui nos dice que (**)son todos los archivos dentro de la carpeta src y *.scss son
  todos los archivos con la extension .scss */
  watch("src/**/*.scss", css);
  watch("src/img/**/*", imgs);
}
exports.css = css;
exports.dev = dev;
exports.imgs = imgs;
exports.imgswebp = imgswebp;
exports.imgsavif = imgsavif;

/*Series ejecuta la primera tarea (css) y cuando termina empieza la otra (dev) */

exports.default = series(imgs, imgswebp, imgsavif, css, dev);
/* Parallel ejecuta todas al mismo tiempo (dejar watch hasta el final (dev)
exports.default= parallel(css,dev);*/
