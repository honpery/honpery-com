
/**
 * merge gen modules schema.
 */
import { DefinitionNode, DocumentNode, OperationTypeNode, parse, print, TypeDefinitionNode, visit } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import * as modules from './modules';

const types: OperationTypeNode[] = ['query', 'mutation', 'subscription'];

/**
 * big camel case toggle.
 */
function bigCamel(...strs: string[]) {
    return strs.map((str = '') => str.charAt(0).toUpperCase() + str.substr(1)).join('');
}

/**
 * merge graphql ast.
 */
function mergeAST(nodes: TypeDefinitionNode[]) {
    return nodes.reduce((p: any, n: any) =>
        Object.assign(p, n, { fields: (n.fields || []).concat(p.fields || []) }), {});
}

/**
 * merge graphql schema.
 */
function mergeSchema(...schemas: string[]) {
    const result: DocumentNode = { kind: 'Document', definitions: [] };
    const schemaNodes: {[type in OperationTypeNode]: TypeDefinitionNode[]} = {
        query: [], mutation: [], subscription: [],
    };

    const withoutRootTypes = schemas.map(schema => visit(parse(schema), {
        enter(node: TypeDefinitionNode) {
            let isRoot = false;
            if (node.kind === 'ObjectTypeDefinition') {
                types.forEach(type => {
                    schemaNodes[type] = schemaNodes[type] || [];
                    if (node.name.value === bigCamel(type)) {
                        isRoot = true;
                        (schemaNodes[type] as TypeDefinitionNode[]).push(node);
                    }

                });
            }
            if (isRoot) return null;
        },
    }));

    const asts: {[type in OperationTypeNode]: DefinitionNode[]} = {
        query: [], mutation: [], subscription: [],
    };

    types.forEach(type => asts[type] = mergeAST(schemaNodes[type]));

    types.forEach(type => result.definitions = result.definitions.concat(asts[type]));

    withoutRootTypes.forEach(schema => result.definitions = [...result.definitions, ...schema.definitions]);

    result.definitions = result.definitions.filter(def => def.kind);

    return print(result);
}

const SchemaDefinition = `
    schema {
        query: Query
        mutation: Mutation
    }
`;

const typeDefs: string[] = [];

const resolvers = {};

Object.keys(modules).forEach(key => {

    if (key.includes('Schema')) typeDefs.push(modules[key]);

    if (key.includes('Resolver')) Object.assign(resolvers, modules[key]);

});

export const Schemas = makeExecutableSchema({
    typeDefs: [SchemaDefinition, mergeSchema(...typeDefs)],
    resolvers,
});