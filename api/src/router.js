/**
 * router.
 */
const fs = require('fs');
const { root } = require('../../helpers');
const router = new require('koa-router')();

fs.readdirSync(root('api/src/modules')).forEach(dirname => {
    if (dirname === 'common') return;
    router.use(`/${dirname}`, require(root(`api/src/modules/${dirname}/index`)).routes());
});



exports.init = app => app.use(router.routes());