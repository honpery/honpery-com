const koa = require('koa');
const app = new koa();
const config = require('../../config');

app.listen(config.api.port, () => console.log(`Api server running at ${config.api.port}`));
