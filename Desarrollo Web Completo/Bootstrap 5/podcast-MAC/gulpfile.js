const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
function css(done) {
  //Identificar archivo principal
  src("src/scss/app.scss").pipe(sass()).pipe(dest("build/css")); // compilamos sass

  done();
}

exports.css = css;
