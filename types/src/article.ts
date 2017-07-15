/**
 * article module types.
 */
import { ObjectId, Time } from './common';
import { TagId, ITag } from './tag';
import { CategoryId, ICategory } from './category';
import { UserId, IUser } from './user';

export type ArticleId = ObjectId;

export interface IArticle {
    _id?: ArticleId;
    title?: string;
    category?: CategoryId | ICategory;
    tags?: TagId[] | ITag[];
    description?: string;
    body?: string;
    pv?: number;
    uv?: number;
    author?: UserId | IUser;
    create_time?: Time;
    update_time?: Time;
    id_deleted?: boolean;
}