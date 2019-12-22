import { Injectable } from '@angular/core';
import { Topic } from '../../../models/topic';
import { User } from '../../../models/user';
import { UserService } from '../../admin/user/user.service';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class TopicDialogService {

    constructor(private userService: UserService,
        private jwtGateway: JWTGatewayService) {
    }

    getTopic(topicId: number) {
        return this.jwtGateway.get(`api/topics/${topicId}`);
    }

    createTopic(topic: Topic) {
        const user = this.userService.getUser as User;
        topic.userId = user.userId;

        return this.jwtGateway.post('api/admin/topics', topic);
    }

    updateTopic(topic: Topic) {
        return this.jwtGateway.put(`api/admin/topics/${topic.topicId}`, topic);
    }

    deleteTopic(topicId: number) {
        return this.jwtGateway.delete(`api/admin/topics/${topicId}`);
    }
}
