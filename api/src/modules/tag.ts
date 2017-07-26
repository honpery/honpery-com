import { globalIdField } from 'graphql-relay';
import { Enum, Mutation, Query, Type, types } from '../helpers';

export const TagTypeName = 'Tag';

export const TagStatus = Enum('TagStatus', {

});

export const Tag = Type(TagTypeName, {
    desc: '标签',
    fields: {
        id: globalIdField(TagTypeName, tag => tag._id),
        name: { type: types.string, desc: '名称' },
        desc: { type: types.string, desc: '描述' },
        create_time: { type: types.date, desc: '创建时间' },
        update_time: { type: types.string, desc: '更新时间' },
        status: { type: TagStatus, desc: '状态' },
    },
});

export const TagQuery = Query('tag', {

});

export const TagsQuery = Query('tags', {

});

export const CreateTagMutation = Mutation('createTag', {

});

export const updateTagMutation = Mutation('updateTag', {

});