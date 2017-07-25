/**
 * article module types.
 */
import { CategoryId, ICategory } from './category';
import { ObjectId, Time } from './common';
import { ITag, TagId } from './tag';
import { IUser, UserId } from './user';

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
    is_deleted?: boolean;
}
