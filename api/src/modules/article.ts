/**
 * article module.
 */
export const ArticleSchema = `
    type Query {
        article(_id: String): Article
        articles(limit: Int): [Article]
    }

    type Mutation {
        createArticle(title: String): Article
        updateArticle(_id: ID): Article
        deleteArticle(_id: ID): Article
    }

    type Article {
        _id: String
        title: String
        description: String
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

        },
        updateArticle: () => {

        },
        deleteArticle: () => {

        }
    }
};
