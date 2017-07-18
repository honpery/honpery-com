/**
 * app router.
 */
import * as router from 'koa-router';
import * as koa from 'koa';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import { Schema } from './modules';

export class Router {
    static init(app: koa) {
        const _router = new router();

        _router.post('/', graphqlKoa({ schema: Schema }));
        _router.get('/', graphqlKoa({ schema: Schema }));
        _router.get('/debug', graphiqlKoa({ endpointURL: '/' }));

        app.use(_router.routes());
        app.use(_router.allowedMethods());
    }
}