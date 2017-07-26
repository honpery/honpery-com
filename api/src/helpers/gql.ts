import {
    GraphQLBoolean, GraphQLEnumType, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType,
    GraphQLObjectTypeConfig, GraphQLScalarType, GraphQLString, GraphQLType, GraphQLList,
} from 'graphql';

export const types = {
    int: GraphQLInt,
    float: GraphQLFloat,
    boolean: GraphQLBoolean,
    string: GraphQLString,
    id: GraphQLID,
    url: new GraphQLScalarType({
        name: 'URL',
        description: 'URL',
        serialize: val => val,
    }),
    date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date',
        serialize: val => val,
    }),
    email: new GraphQLScalarType({
        name: 'Email',
        description: 'Email',
        serialize: val => val,
    }),
    password: new GraphQLScalarType({
        name: 'Password',
        description: 'Password',
        serialize: val => val,
    }),
};

export function Required(type: GraphQLType) {
    return new GraphQLNonNull(type);
}

export function List(type: GraphQLType) {
    return new GraphQLList(type);
}

export function Enum(name: string, options: any) {
    return new GraphQLEnumType({ name, ...options });
}

export function Type(name: string, options: any) {
    return new GraphQLObjectType({ name, ...options });
}

export function Query(name: string, options: any) {
    return { name, ...options };
}

export function Mutation(name: string, options: any) {
    return { name, ...options };
}
