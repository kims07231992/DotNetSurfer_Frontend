import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Topic } from '../../../../../models/topic';
import { TopicDialogService } from '../../../../../services/admin/topic/topic-dialog.service';
import { SnackbarService, SnackbarAction } from '../../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-admin-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.scss']
})

export class TopicDialogComponent implements OnInit {
  public isAddMode?: boolean;
  public topicId?: number;
  private topic?: Topic;
  private topicFormControl?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private topicDialogService: TopicDialogService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<TopicDialogComponent>
  ) { }

  ngOnInit() {
    this.topic = new Topic(); // to avoid null reference
    if (!this.isAddMode) { // Edit mode
      this.getTopic(this.topicId!);
    }
    this.topicFormControl = this.formBuilder.group({
      title: ['', [<any>Validators.maxLength(20)]],
      description: ['', [<any>Validators.maxLength(200)]]
    });
  }

  uploadPictureBase64(event) {
    this.topic!.picture = event as string;
  }

  uploadPictureMimeType(event) {
    this.topic!.pictureMimeType = event as string;
  }

  getTopic(topicId: number) {
    this.topicDialogService.getTopic(topicId)
      .subscribe((topic: Topic) => {
        this.topic = topic;
      },
        error => {

        })
  }

  submitTopic() {
    this.isAddMode ? this.createTopic() : this.updateTopic();
  }

  createTopic() {
    return this.topicDialogService.createTopic(this.topic!)
      .subscribe(res => {
        this.snackbarService.openSnackBar('Your topic has been created.', SnackbarAction.Create);
        this.closeDialog();
      },
        error => {

        });
  }

  updateTopic() {
    return this.topicDialogService.updateTopic(this.topic!)
      .subscribe(res => {
        this.snackbarService.openSnackBar('Your topic has been updated.', SnackbarAction.Update);
        this.closeDialog();
      },
        error => {

        });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
