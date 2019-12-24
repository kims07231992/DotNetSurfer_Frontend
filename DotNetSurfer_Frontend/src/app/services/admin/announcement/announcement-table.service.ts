import { Injectable } from '@angular/core';
import { Announcement } from '../../../models/announcement';
import { User } from '../../../models/user';
import { UserService } from '../../admin/user/user.service';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class AnnouncementTableService {
    private user: User;

    constructor(private userService: UserService,
        public jwtGateway: JWTGatewayService) {
        this.user = this.userService.getUser as User;
    }

    getAnnouncements() {
        return this.jwtGateway.get(`api/announcements/users/${this.user.userId}`);
    }
}
