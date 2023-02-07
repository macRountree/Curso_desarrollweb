const { src, dest } = require("culp");
const sass = require("gulp-sass")(require("sass"));
function css(done) {
  //compilar sass
  // Paso 1 Identificar archivo , 2- Compilarla, 3- Guardar .css
  src("scr/scss/styles.css").pipe(sass()).pipe(dest("build/css"));
  done();
}
exports.css = css;
