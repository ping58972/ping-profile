const gulp = require('gulp');
const sass = require('./build/sass');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');

[sass, scripts, images, sync].forEach(task => {
    task(gulp);
});

gulp.task('build', gulp.series(['sass', 'scripts', 'images', 'jekyll-build']));


const { src, task } = require('gulp');
const ghPages = require('gulp-gh-pages');

task('deploy', () => src('./_site/**/*').pipe(ghPages()));