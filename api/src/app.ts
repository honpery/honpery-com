/**
 * api.honpery.com
 */
import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { PORT, SERVER } from './config';
import { Router } from './router';

const app = new koa();

app.use(bodyParser());

Router.init(app);

// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`Server running at http://${SERVER}:${PORT}.`));
