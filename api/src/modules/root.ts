import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

export const RootSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Root',
        fields: {
            name: {
                type: GraphQLString,
                resolve() {
                    return 'demo';
                }
            }
        }
    })
});