/**
 * article modules.
 */
import { Context } from 'koa';

export const ArticleSchema = `
    type Query {
        # 文章列表
        articles(): [Article]

        # 文章详情
        article(id: ID): Article
    }

    type Mutation {

        # 创建文章
        addArticle(article: Article): Article

        # 更新文章
        updateArticle(article_id: ID, new_article: Article): Article

    }

    # 文章
    tyope Article {
        # ObjectID
        _id: ID

        # 标题
        title: String

        # 分类
        category: Category

        # 标签
        tags: [Tag]

        # 描述
        description: String

        # 内容
        body: String

        # 创建时间
        create_time: String

        # 更新时间
        update_time: String

        # 状态
        status: ArticleStatus
    }

    enum ArticleStatus {
        # 已发布
        PUBLISH

        # 草稿
        DRAFT

        # 已删除
        DELETE
    }
`;

export const ArticleResolvers = {
    Query: {
        async articles(_, { }, ctx: Context) {
            return [{}];
        },
        async article(_, { }, ctx: Context) {
            return {};
        },
    },
    Mutation: {
        async createArticle(_, { article }, ctx: Context) {
            return {};
        },
        async updateArticle(_, { article_id, new_article }, ctx: Context) {
            return {};
        },
    },
};
