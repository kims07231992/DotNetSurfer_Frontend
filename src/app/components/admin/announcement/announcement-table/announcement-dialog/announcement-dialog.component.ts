import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatCheckboxModule } from '@angular/material';
import { Announcement } from '../../../../../models/announcement';
import { Status } from '../../../../../models/status';
import { AnnouncementDialogService } from '../../../../../services/admin/announcement/announcement-dialog.service';
import { StatusService } from '../../../../../services/admin/status/status.service';
import { SnackbarService, SnackbarAction } from '../../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-admin-announcement-dialog',
  templateUrl: './announcement-dialog.component.html',
  styleUrls: ['./announcement-dialog.component.scss']
})

export class AnnouncementDialogComponent implements OnInit {
  public isAddMode?: boolean;
  public announcementId?: number;
  private announcement?: Announcement;
  private statuses?: Status[]; // for select list
  private announcementFormControl?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private announcementDialogService: AnnouncementDialogService,
    private statusService: StatusService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<AnnouncementDialogComponent>
  ) { }

  ngOnInit() {
    this.announcement = new Announcement(); // to avoid null reference
    this.getStatuses(); // get select list
    if (!this.isAddMode) { // Edit mode
      this.getAnnouncement(this.announcementId!);
    }

    this.announcementFormControl = this.formBuilder.group({
      content: ['', [<any>Validators.maxLength(100)]]
    });
  }

  getAnnouncement(announcementId: number) {
    this.announcementDialogService.getAnnouncement(announcementId)
      .subscribe((announcement: Announcement) => {
        this.announcement = announcement;
      },
        error => {

        })
  }

  getStatuses() {
    this.statusService.getStatuses()
      .subscribe(res => {
        this.statuses = res as Status[];
      },
        error => {

        })
  }

  submitAnnouncement() {
    this.isAddMode ? this.createAnnouncement() : this.updateAnnouncement();
  }

  createAnnouncement() {
    return this.announcementDialogService.createAnnouncement(this.announcement!)
      .subscribe(res => {
        this.snackbarService.openSnackBar('Your announcement has been created.', SnackbarAction.Create);
        this.closeDialog();
      },
        error => {

        });
  }

  updateAnnouncement() {
    return this.announcementDialogService.updateAnnouncement(this.announcement!)
      .subscribe(res => {
        this.snackbarService.openSnackBar('Your announcement has been updated.', SnackbarAction.Update);
        this.closeDialog();
      },
        error => {

        });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
