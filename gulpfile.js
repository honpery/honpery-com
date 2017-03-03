const gulp = require('gulp');
const buildGulpTask = require('./tools/build_gulp_task');

gulp.task('api:dev', buildGulpTask('api', 'dev'));
gulp.task('index:dev', buildGulpTask('index', 'dev'));
gulp.task('admin:dev', buildGulpTask('amdin', 'dev'));