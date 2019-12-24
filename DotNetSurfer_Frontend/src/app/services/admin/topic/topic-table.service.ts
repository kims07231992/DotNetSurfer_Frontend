import { Injectable } from '@angular/core';
import { Topic } from '../../../models/topic';
import { User } from '../../../models/user';
import { UserService } from '../../admin/user/user.service';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class TopicTableService {
    private user: User;

    constructor(private userService: UserService,
        public jwtGateway: JWTGatewayService) {
        this.user = this.userService.getUser as User;
    }

    getTopics() {
        return this.jwtGateway.get(`api/topics/users/${this.user.userId}`);
    }
} 
