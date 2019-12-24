import { Topic } from './topic';
import { Article } from './article';
import { Announcement } from './announcement';
import { Permission } from './permission';

export class User {
  userId?: number;
  name?: string;
  password?: string;
  email?: string;
  title?: string;
  phone?: string;
  address?: string;
  introduction?: string;
  birthdate?: Date;
  picture?: string;
  pictureMimeType?: string;
  pictureUrl?: string;

  permissionId?: number;
  permission?: Permission;

  topics?: Topic[];

  articles?: Article[];

  announcements?: Announcement[];
}
