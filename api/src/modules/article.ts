/**
 * article module.
 */
export const ArticleSchema = `
    type Query {
        article(_id: String): Article
        articles(limit: Int): [Article]
    }

    type Article {
        _id: String
        title: String
        description: String
    }

    type Mutation {
        createArticle(title: String): Article
    }
`;

export const ArticleResolver = {
    Query: {
        article: (_, { _id }) => {
            return { _id: 1, title: 'asd', description: 'asdasdas' };
        },
        articles: (_, { limit }) => {
            return [];
        }
    },
    Mutation: {
        createArticle: () => {

        }
    }
};
