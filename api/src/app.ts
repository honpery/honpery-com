/**
 * api.honpery.com
 */
import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { SERVER, PORT } from './config';
import { Router } from './router';

const app = new koa();

app.use(bodyParser());

Router.init(app);

app.listen(PORT, () => console.log(`Server running at ${SERVER}:${PORT}.`));
