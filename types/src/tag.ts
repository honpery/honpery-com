/**
 * tag module types.
 */
import { ObjectId, Time } from './common';

export type TagId = ObjectId;

export interface ITag {
    _id?: TagId;
    name?: string;
    description?: string;
    create_time?: Time;
    udpate_time?: Time;
    is_deleted?: boolean;
}