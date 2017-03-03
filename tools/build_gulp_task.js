/**
 * build gulp task.
 */
module.exports = (terl, task) => require(`./gulp_tasks/${task}`)(terl);