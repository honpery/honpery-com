import { GraphQLObjectType } from 'graphql';
import { connectionArgs, connectionDefinitions, connectionFromArray, globalIdField } from 'graphql-relay';
import { Enum, List, Mutation, Query, Required, Type, types } from '../helpers';

export const ArticleStatus = Enum('ArticleStatus', {});

export const Article = Type('Article', {
    desc: '文章',
    fields: {
        id: globalIdField('Article', article => article._id),
        title: { type: types.string, desc: '标题' },
        desc: { type: types.string, desc: '概述' },
        body: { type: types.string, desc: '内容' },
        create_time: { type: types.date, desc: '创建时间' },
        update_time: { type: types.date, desc: '更新时间' },
        status: { type: ArticleStatus, desc: '状态' },
    },
});

export const ArticlesQuery = Query('articles', {
    desc: 'article list',
    type: List(Article),
    args: {
        ...connectionArgs,
    },
    async resolve(_, args, ctx) {
        const result = [{ title: 'asdas' }];
        return connectionFromArray(result, args);
    },
});

export const ArticleQuery = Query('article', {
    desc: 'article detail.',
    type: Article,
    args: {
        id: { type: types.id, desc: 'id' },
    },
    async resolve(_, args, ctx) {
        return { title: 'asdasda' };
    },
});

export const CreateArticleMutation = Mutation('createArticle', {
    desc: 'create article.',
});

export const UpdateArticleMutation = Mutation('updateArticle', {
    desc: 'update article.',
});
