const { styles, scripts } = require("./tasks/build");
const { series, parallel, src, symlink, dest, watch } = require("gulp");


function defaultTask() {
  watch("neumorize/**/*.scss", styles);
  watch("neumorize/**/*.js",scripts);
}

const build = series(parallel(styles,scripts),defaultTask);

exports.default = build;
