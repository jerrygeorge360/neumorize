const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const { src, dest } = require("gulp");

function styles() {
  console.log("scss processing")
  return src("neumorize/**/*.scss") // Get all SCSS files
    .pipe(sass().on("error", sass.logError))
    // .pipe(autoprefixer()) // Uncomment if you want to use autoprefixer
    .pipe(cleanCSS())
    .pipe(dest("dist/css/")); // Output directory for compiled CSS
}

function scripts() {
  console.log("script processing")
  return src("neumorize/**/*.js") 
  .pipe(sourcemaps.init())
  .pipe(babel({ presets: ['@babel/preset-env'] }))
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(dest("dist/js/"))
}

// Export tasks
module.exports = {
  styles,
  scripts,
};
