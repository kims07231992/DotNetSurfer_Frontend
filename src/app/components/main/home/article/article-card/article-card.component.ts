import { Component, OnInit } from '@angular/core';
import { fadeInAnimations } from '../../../../../animations/animations';
import { Article } from '../../../../../models/article';
import { ArticleService } from '../../../../../services/main/home/article.service';
import { SnackbarService, SnackbarAction } from '../../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  animations: [fadeInAnimations]
})

export class ArticleCardComponent implements OnInit {
  private readonly articleDisplayLimit = 3; // Article number to show
  private readonly contentDisplayLength = 50; // Content string length to show
  private isLoaded = false;
  private articles?: Article[];

  constructor(
    private articleService: ArticleService,
    private snackbarService: SnackbarService) {

  }

  ngOnInit() {
    this.initializeArticles();
  }

  fetchArticles() {
    return this.articleService.getTopArticles(this.articleDisplayLimit);
  }

  initializeArticles() {
    this.fetchArticles().subscribe(res => {
      this.articles = res as Article[];
      if (this.articles.length > this.articleDisplayLimit) {
        this.articles = this.articles.slice(0, this.articleDisplayLimit); // Show only limited number of article      
      }
      this.isLoaded = true;
    },
      error => {

      });
  }
}
