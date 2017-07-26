import { globalIdField } from 'graphql-relay';
import { Enum, Mutation, Query, Type, types } from '../helpers';

export const UserTypeName = 'User';

export const UserStatus = Enum('UserStatus', {

});

export const User = Type(UserTypeName, {
    desc: '用户',
    fields: {
        id: globalIdField(UserTypeName, tag => tag._id),
        username: { type: types.string, desc: '用户名' },
        desc: { type: types.string, desc: '描述' },
        create_time: { type: types.date, desc: '创建时间' },
        update_time: { type: types.string, desc: '更新时间' },
        status: { type: UserStatus, desc: '状态' },
    },
});

export const UserQuery = Query('user', {

});

export const UsersQuery = Query('users', {

});

export const CreateUserMutation = Mutation('createUser', {

});

export const UpdateUserMutation = Mutation('updateUser', {

});