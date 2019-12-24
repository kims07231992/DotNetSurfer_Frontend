import { Article } from './article';
import { User } from './user';

export class Topic {
    topicId?: number;
    title?: string;
    description?: string;
    picture?: string;
    pictureMimeType?: string;
    pictureUrl?: string;
    postDate?: Date;
    modifyDate?: Date;
    showFlag?: boolean;

    userId?: number;
    user?: User;

    articles?: Article[];
}
