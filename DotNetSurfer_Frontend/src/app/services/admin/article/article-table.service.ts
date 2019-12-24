import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../admin/user/user.service';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class ArticleTableService {
    private user: User;

    constructor(private userService: UserService,
        public jwtGateway: JWTGatewayService) {
        this.user = this.userService.getUser as User;
    }

    getArticles() {
        return this.jwtGateway.get(`api/articles/users/${this.user.userId}`);
    }
} 
