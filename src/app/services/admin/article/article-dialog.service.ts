import { Injectable } from '@angular/core';
import { Article } from '../../../models/Article';
import { User } from '../../../models/user';
import { UserService } from '../../admin/user/user.service';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class ArticleDialogService {

    constructor(private userService: UserService,
        private jwtGateway: JWTGatewayService) {
    }

    getArticle(articleId: number) {
        return this.jwtGateway.get(`api/articles/${articleId}`);
    }

    createArticle(article: Article) {
        const user = this.userService.getUser as User;
        article.userId = user.userId;

        return this.jwtGateway.post('api/admin/articles', article);
    }

    updateArticle(article: Article) {
        return this.jwtGateway.put(`api/admin/articles/${article.articleId}`, article);
    }

    deleteArticle(articleId: number) {
        return this.jwtGateway.delete(`api/admin/articles/${articleId}`);
    }
}
