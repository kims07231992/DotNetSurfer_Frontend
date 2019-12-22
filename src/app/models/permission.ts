import { User } from './user';

export class Permission {
    permissionId?: number;
    PermissionType?: string;

    users?: User[];
}

export enum PermissionType {
    Admin = 0,
    User = 1
}