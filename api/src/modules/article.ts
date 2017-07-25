/**
 * article type.
 */
import { GraphQLObjectType } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { GqlType, types } from '../helpers';

export const ArticleType = new GraphQLObjectType({
    name: 'Article',
    description: '文章',
    fields: () => ({
        id: globalIdField('Article', article => article._id),
        title: {
            type: types.string,
            description: '标题',
        },
        desc: {
            type: types.string,
            description: '概述',
        },
        body: {
            type: types.string,
            description: '内容',
        },
        create_time: {
            type: types.date,
            description: '创建时间',
        },
        update_time: {
            type: types.date,
            description: '更新时间',
        },
    }),
});

export const ArticleQuery = {
    articles: {
        type: ArticleType,
        description: '获取文章列表',
        async resolve() {
            return { title: 'asdasda' };
        },
    },
};
