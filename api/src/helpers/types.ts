import { GraphQLScalarType } from 'graphql';
import * as types from 'graphql/type';

export default {

    // int
    int: types.GraphQLInt,

    // float
    float: types.GraphQLFloat,

    // boolean
    boolean: types.GraphQLBoolean,

    // string
    string: types.GraphQLString,

    // id
    id: types.GraphQLID,

    // url
    url: new GraphQLScalarType({
        name: 'URL',
        description: 'URL',
        serialize: val => val,
    }),

    // date
    date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date',
        serialize: val => val,
    }),
};
