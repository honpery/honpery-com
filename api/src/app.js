/**
 * api app.
 */
const koa = require('koa');
const app = new koa();
const config = require('../../config');
const router = require('./router');

router.init(app);

app.listen(config.api.port, () => console.log(`Api server running at ${config.api.port}`));
