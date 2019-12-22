import { Topic } from './topic';
import { Tag } from './tag';
import { User } from './user';

export class Article {
    articleId?: number;
    title?: string;
    category?: string;
    content?: string;
    picture?: string; // base64
    pictureMimeType?: string;
    pictureUrl?: string;
    postDate?: Date;
    modifyDate?: Date;
    readCount?: number;
    showFlag?: boolean;
    visible?: boolean; // animation onoff

    topicId?: number;
    topic?: Topic;

    userId?: number;
    user?: User;

    tags?: Tag[];
}
