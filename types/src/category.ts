/**
 * category module types.
 */
import { ObjectId, Time } from './common';

export type CategoryId = ObjectId;

export interface ICategory {
    _id?: CategoryId;
    name?: string;
    description?: string;
    create_time?: Time;
    udpate_time?: Time;
    is_deleted?: boolean;
}