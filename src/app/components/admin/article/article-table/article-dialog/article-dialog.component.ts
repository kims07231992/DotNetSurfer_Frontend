import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Article } from '../../../../../models/article';
import { Topic } from '../../../../../models/topic';
import { ArticleDialogService } from '../../../../../services/admin/article/article-dialog.service';
import { TopicTableService } from '../../../../../services/admin/topic/topic-table.service';
import { SnackbarService, SnackbarAction } from '../../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-admin-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.scss']
})

export class ArticleDialogComponent implements OnInit {
  public isAddMode?: boolean;
  public articleId?: number;
  private article?: Article;
  private topics?: Topic[]; // for select list
  private articleFormControl?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private articleDialogService: ArticleDialogService,
    private topicTableService: TopicTableService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<ArticleDialogComponent>
  ) { }

  ngOnInit() {
    this.article = new Article(); // to avoid null reference
    this.geTopics(); // get select list
    if (!this.isAddMode) { // Edit mode
      this.getArticle(this.articleId!);
    }
    this.articleFormControl = this.formBuilder.group({
      title: ['', [<any>Validators.maxLength(100)]],
      category: ['', [<any>Validators.maxLength(10)]]
    });
  }


  uploadPictureBase64(event) {
    this.article!.picture = event as string;
  }

  uploadPictureMimeType(event) {
    this.article!.pictureMimeType = event as string;
  }

  saveContent(event) {
    this.article!.content = event as string;
  }

  geTopics() {
    this.topicTableService.getTopics()
      .subscribe(res => {
        this.topics = res as Topic[];
      },
        error => {

        });
  }

  getArticle(articleId: number) {
    this.articleDialogService.getArticle(articleId)
      .subscribe(res => {
        this.article = res as Article;
      },
        error => {

        });
  }

  createArticle() {
    return this.articleDialogService.createArticle(this.article!)
      .subscribe(res => {
        this.snackbarService.openSnackBar('Your article has been created.', SnackbarAction.Create);
        this.closeDialog();
      },
        error => {

        });
  }

  updateArticle() {
    return this.articleDialogService.updateArticle(this.article!)
      .subscribe(res => {
        this.snackbarService.openSnackBar('Your article has been updated.', SnackbarAction.Update);
        this.closeDialog();
      }, error => {

      });
  }

  submitArticle() {
    this.isAddMode ? this.createArticle() : this.updateArticle();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
