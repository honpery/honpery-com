/**
 * graphql root type.
 */
import { GraphQLObjectType } from 'graphql';
import { ArticleType } from './article';

export const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        article: {
            type: ArticleType,
            args: {},
            async resolve() {
                return { title: 'asdasd' };
            },
        },
    }),
});

export const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({

    }),
});

export const RootSubscription = new GraphQLObjectType({
    name: 'Subscription',
    fields: () => ({

    }),
});
