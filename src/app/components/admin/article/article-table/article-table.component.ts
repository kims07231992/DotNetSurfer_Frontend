import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ArticleDialogComponent } from './article-dialog/article-dialog.component';
import { Article } from '../../../../models/article';
import { ArticleTableService } from '../../../../services/admin/article/article-table.service';
import { ArticleDialogService } from '../../../../services/admin/article/article-dialog.service';
import { SnackbarService, SnackbarAction } from '../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-admin-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.scss']
})

export class ArticleTableComponent implements OnInit {
  private readonly title = 'Article';
  private readonly contentDisplayLength = 100; // Content string length to show
  private readonly displayedColumns = ['articleId', 'postDate',
    'showFlag', 'pictureUrl', 'title', 'content', 'action'];
  private isLoaded = false;
  private dataSource?: MatTableDataSource<Article>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private articleTableService: ArticleTableService,
    private articleDialogService: ArticleDialogService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchAllArticles();
  }

  fetchAllArticles() {
    return this.articleTableService.getArticles()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Article>(res as Article[]);
        this.dataSource!.paginator = this.paginator!;
        this.dataSource!.sort = this.sort!;
        this.isLoaded = true;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource!.filter = filterValue;
  }

  createArticle() {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      height: '70%', width: '50%'
    });
    dialogRef.componentInstance.isAddMode = true;
    dialogRef.afterClosed()
      .subscribe(res => {
        this.fetchAllArticles();
      });
  }

  editArticle(id: number) {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      height: '70%', width: '50%'
    });
    dialogRef.componentInstance.isAddMode = false;
    dialogRef.componentInstance.articleId = id;
    dialogRef.afterClosed()
      .subscribe(res => {
        this.fetchAllArticles();
      });
  }

  deleteArticle(id: number) {
    this.articleDialogService.deleteArticle(id)
      .subscribe(res => {
        this.fetchAllArticles();
        this.snackbarService.openSnackBar('Your article has been deleted.', SnackbarAction.Delete);
      },
      error => {

        });
  }
}
