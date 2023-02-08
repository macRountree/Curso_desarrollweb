//gfhgf

//     gulp exporta     Require importa los modulos instalados en este caso la dependencia gulp
const { src, dest, watch, series } = require("gulp");
//const sass requiere gulp sass para que se compile
const sass = require("gulp-sass")(require("sass"));

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function css(done) {
  //compilar SASS
  //Identificar Archivo(src), Compilar(pipe(sass(Este se compila))) y guardar el .css (pipe(dest(lo mandamos a build/css)))
  src("src/scss/styles.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("build/css"));
  done();
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
}
exports.css = css;
exports.dev = dev;
/*Series ejecuta la primera tarea (css) y cuando termina empieza la otra (dev) */
exports.default = series(css, dev);
/* Parallel ejecuta todas al mismo tiempo (dejar watch hasta el final (dev)
exports.default= parallel(css,dev);*/
