import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../admin/user/user.service';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class ProfileService {
    private user: User;

    public constructor(private userService: UserService,
        private jwtGateway: JWTGatewayService) {
        this.user = this.userService.getUser as User;
    }

    public getProfile() {
        return this.jwtGateway.get(`api/profiles/${this.user.userId}`);
    }

    public updateProfile(user: User) {
        return this.jwtGateway.put(`api/admin/users/${user.userId}`, user);
    }
}
