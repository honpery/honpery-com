/**
 * make graphql type.
 */
import { GraphQLEnumType, GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLType } from 'graphql';

interface IGqlTypeOptions {
    fields: any;
    description?: string;
}

export class GqlType {
    constructor(name: string, options: IGqlTypeOptions) {
        return new GraphQLObjectType({
            name,
            description: options.description,
            fields: () => options.fields,
        });
    }
}

// export class GqlEnum {
//     constructor(name: string) {
//         return new GraphQLEnumType({
//             name,
//             description: options,
//         });
//     }
// }
