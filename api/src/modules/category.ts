import { globalIdField } from 'graphql-relay';
import { Enum, Mutation, Query, Type, types } from '../helpers';

export const CategoryStatus = Enum('CategoryStatus', {

});

export const Category = Type('Category', {
    desc: '分类',
    fields: {
        id: globalIdField('category', category => category._id),
        name: { type: types.string, desc: '名称' },
        desc: { type: types.string, desc: '描述' },
        create_time: { type: types.date, desc: '创建时间' },
        update_time: { type: types.date, desc: '更新时间' },
        status: { type: CategoryStatus, desc: '状态' },
    },
});

export const CategoryQuery = Query('category', {

});

export const CategoriesQuery = Query('categories', {

});

export const CreateCategoryMutation = Mutation('createCategory', {

});

export const UpdateCategoryMutation = Mutation('updateCategory', {

});
