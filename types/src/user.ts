/**
 * user module types.
 */
import { ObjectId, Time } from './common';

export type UserId = ObjectId;

export type UserType = 'admin';

export interface IUser {
    _id?: UserId;
    username?: string;
    name?: string;
    password?: string;
    type?: UserType;
    create_time?: Time;
    update_time?: Time;
}