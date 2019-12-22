import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { fadeInAnimation } from '../../../../../animations/animations';
import { Article } from '../../../../../models/article';
import { ArticleService } from '../../../../../services/main/home/article.service';
import { SnackbarService, SnackbarAction } from '../../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  animations: [fadeInAnimation]
})

export class ArticleDetailComponent implements OnInit {
  private isLoaded = false;
  private article?: Article;
  private commentPageId?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private snackbarService: SnackbarService) {

  }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(res => { // When another article selected
        this.isLoaded = false;
        this.initializeArticle();
      });
    this.initializeArticle();
  }

  fetchArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    this.commentPageId = '/article/' + id;
    return this.articleService.getArticleDetail(id);
  }

  initializeArticle() {
    this.fetchArticle().subscribe(res => {
      this.article = res as Article;
      this.isLoaded = true;
    },
      error => {
        this.snackbarService.openSnackBar('Failed to load your article. Please try it again', SnackbarAction.Error);
      });
  }
}
