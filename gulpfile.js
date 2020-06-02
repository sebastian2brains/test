var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite');

var config = {
  mode: {
    css: { // Activate the «css» mode
      render: {
        css: true // Activate CSS output (with default options)
      }
    }
  }
};

gulp.task('svg', function (next) {
  console.log('entrando');
  gulp.src('./src/icons/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./src/out'));
  next();
});

gulp.task('default', gulp.series('svg'));
