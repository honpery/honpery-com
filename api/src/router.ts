/**
 * app router.
 */
import { graphiqlKoa, graphqlKoa } from 'graphql-server-koa';
import * as koa from 'koa';
import * as KoaRouter from 'koa-router';
import { Schemas } from './modules';

export class Router {
    public static init(app: koa) {
        const router = new KoaRouter();

        router.post('/', graphqlKoa({ schema: Schemas }));
        router.get('/debug', graphiqlKoa({ endpointURL: '/' }));

        app.use(router.routes());
        app.use(router.allowedMethods());
    }
}
