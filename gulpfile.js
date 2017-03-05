const gulp = require('gulp');
const buildGulpTask = require('./tools/build_gulp_task');

// api app.
gulp.task('api:dev', buildGulpTask('api', 'dev'));
gulp.task('api:test', buildGulpTask('api', 'test'));

// index app.
gulp.task('index:dev', buildGulpTask('index', 'dev'));

// admin app.
gulp.task('admin:dev', buildGulpTask('amdin', 'dev'));