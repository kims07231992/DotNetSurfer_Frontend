import { Injectable } from '@angular/core';
import { Announcement } from '../../../models/announcement';
import { User } from '../../../models/user';
import { UserService } from '../../admin/user/user.service';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class AnnouncementDialogService {

    constructor(private userService: UserService,
        private jwtGateway: JWTGatewayService) {

    }

    getAnnouncement(announcementId: number) {
        return this.jwtGateway.get(`api/announcements/${announcementId}`);
    }

    createAnnouncement(announcement: Announcement) {
        const user = this.userService.getUser as User;// Get user from session
        announcement.userId = user.userId;

        return this.jwtGateway.post('api/admin/announcements', announcement);
    }

    updateAnnouncement(announcement: Announcement) {
        return this.jwtGateway.put(`api/admin/announcements/${announcement.announcementId}`, announcement);
    }

    deleteAnnouncement(announcementId: number) {
        return this.jwtGateway.delete(`api/admin/announcements/${announcementId}`);
    }
}
