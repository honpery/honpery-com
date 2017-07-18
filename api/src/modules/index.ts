import { makeExecutableSchema } from 'graphql-tools';
import { ArticleSchema, ArticleResolver } from './article';

const RootSchema = `
    schema {
        query: Query
        mutation: Mutation
    }
`;

export const Schema = makeExecutableSchema({
    typeDefs: [RootSchema, ArticleSchema]
})