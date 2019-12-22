import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AnnouncementDialogComponent } from './announcement-dialog/announcement-dialog.component';
import { Announcement } from '../../../../models/announcement';
import { AnnouncementTableService } from '../../../../services/admin/announcement/announcement-table.service';
import { AnnouncementDialogService } from '../../../../services/admin/announcement/announcement-dialog.service';
import { SnackbarService, SnackbarAction } from '../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-admin-announcement-table',
  templateUrl: './announcement-table.component.html',
  styleUrls: ['./announcement-table.component.scss']
})

export class AnnouncementTableComponent implements OnInit {
  private isLoaded = false;
  private title = 'Announcement';
  private displayedColumns = ['announcementId', 'postDate', 'showFlag', 'content', 'status', 'action'];
  private dataSource?: MatTableDataSource<Announcement>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private announcementTableService: AnnouncementTableService,
    private announcementDialogService: AnnouncementDialogService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    this.fetchAllAnnouncements();
  }

  fetchAllAnnouncements() {
    return this.announcementTableService.getAnnouncements()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource<Announcement>(res as Announcement[]);
        this.dataSource.paginator = this.paginator!;
        this.dataSource.sort = this.sort!;
        this.isLoaded = true;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource!.filter = filterValue;
  }

  createAnnouncement() {
    const dialogRef = this.dialog.open(AnnouncementDialogComponent, {
      height: '60%', width: '50%'
    });
    dialogRef.componentInstance.isAddMode = true;
    dialogRef.afterClosed()
      .subscribe(res => {
        this.fetchAllAnnouncements();
      });
  }

  editAnnouncement(id: number) {
    const dialogRef = this.dialog.open(AnnouncementDialogComponent, {
      height: '60%', width: '50%'
    });
    dialogRef.componentInstance.isAddMode = false;
    dialogRef.componentInstance.announcementId = id;
    dialogRef.afterClosed()
      .subscribe(res => {
        this.fetchAllAnnouncements();
      });
  }

  deleteAnnouncement(id: number) {
    this.announcementDialogService.deleteAnnouncement(id)
      .subscribe(res => {
        this.fetchAllAnnouncements();
        this.snackbarService.openSnackBar('Your announcement has been deleted.', SnackbarAction.Delete);
      },
        error => {

        });
  }
}
