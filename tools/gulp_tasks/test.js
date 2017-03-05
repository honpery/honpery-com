/**
 * test module task.
 */
const gulp = require('gulp');
const shell = require('gulp-shell');
const { root } = require('../../helpers');

module.exports = terl => shell.task([`cd ${root(terl)} && npm run test`]);