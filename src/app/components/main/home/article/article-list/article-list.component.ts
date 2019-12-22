import { Component, OnInit } from '@angular/core';
import { flyRightToLeftAnimations } from '../../../../../animations/animations';
import { Article } from '../../../../../models/article';
import { ArticleService } from '../../../../../services/main/home/article.service';
import { SnackbarService, SnackbarAction } from '../../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  animations: [flyRightToLeftAnimations]
})

export class ArticleListComponent implements OnInit {
  private readonly contentDisplayLength = 50; // Content string length to show
  private page = 1;
  private itemPerPage = 3;
  private isLoaded = false;
  private isAllLoaded = false;
  private isExpanded = true;
  private articles?: Article[];

  constructor(
    private articleService: ArticleService,
    private snackbarService: SnackbarService) {

  }

  ngOnInit() {
    this.initializeArticles();
  }

  fetchArticles() {
    return this.articleService.getArticlesByPage(this.page++, this.itemPerPage);
  }

  initializeArticles() {
    this.fetchArticles().subscribe(res => {
      this.articles = res as Article[];
      this.isLoaded = true;
    },
      error => {

      });
  }

  expandArticles() {
    this.isExpanded = false;
    this.fetchArticles().subscribe(res => {
      const loadedArticles = res as Article[];
      if (loadedArticles.length < this.itemPerPage) {
        this.isAllLoaded = true;
      }
      this.articles = this.articles!.concat(loadedArticles);
      this.isExpanded = true;
    });
  }
}
