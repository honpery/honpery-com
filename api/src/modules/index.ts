/**
 * root schema.
 */
import { GraphQLSchema } from 'graphql';
import { RootMutation, RootQuery, RootSubscription } from './root';

export const Schemas = new GraphQLSchema({
    query: RootQuery,
    // mutation: RootMutation,
    // subscription: RootSubscription,
});
