export class Status {
    statusId?: number;
    currentStatus?: string;
}

export enum StatusType {
    Requested = 0,
    Ongoing = 1,
    Pending = 2,
    Completed = 3
}