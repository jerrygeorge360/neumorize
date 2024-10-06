const { styles, scripts } = require("./tasks/build");
const { series, parallel, src, symlink, dest, watch } = require("gulp");


function defaultTask() {
  watch("EbonyUI/**/*.scss", styles);
  watch("EbonyUI/**/*.js",scripts);
}

exports.default = defaultTask;
