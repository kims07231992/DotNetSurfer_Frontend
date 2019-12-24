import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GatewayService } from '../../shared/gateway.service';
import { Article } from '../../../models/article';

@Injectable()
export class ArticleService {
  private topArticles: Article[];
  private articlesByPage: Article[];

  constructor(private gatewayService: GatewayService) {

  }

  getTopArticles(item: number) {
    if (this.topArticles == null) {
      return this.gatewayService.get(`api/articles/top/${item}`)
        .pipe(tap(res => {
          this.topArticles = res as Article[];
        }));
    }
    else {
      return of(this.topArticles);
    }
  }

  getArticlesByPage(page: number, itemPerPage: number) {
    if (this.articlesByPage == null) {
      return this.gatewayService.get(`api/articles/page/${page}`)
        .pipe(tap(res => {
          this.articlesByPage = res as Article[];
        }));
    }
    else {
      if (this.articlesByPage.length > (page - 1) * itemPerPage) {
        const startIndex = itemPerPage * (page - 1);
        const endIndex = itemPerPage * page;
        return of(this.articlesByPage.slice(startIndex, endIndex));
      }
      else {
        return this.gatewayService.get(`api/articles/page/${page}`)
          .pipe(tap(res => {
            this.articlesByPage = this.articlesByPage.concat(res as Article[]);
          }));
      }
    }
  }

  getArticleDetail(articleId: any) {
    return this.gatewayService.get(`api/articles/detail/${articleId}`);
  }
} 
