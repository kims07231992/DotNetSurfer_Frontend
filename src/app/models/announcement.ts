import { User } from './user';
import { Status } from './status';

export class Announcement {
    announcementId?: number;
    content?: string;
    postDate?: Date;
    modifyDate?: Date;
    showFlag?: boolean;

    userId?: number;
    user?: User;

    statusId?: number;
    status?: Status;
}