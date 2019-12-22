import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
import { Topic } from '../../../../models/topic';
import { TopicTableService } from '../../../../services/admin/topic/topic-table.service';
import { TopicDialogService } from '../../../../services/admin/topic/topic-dialog.service';
import { SnackbarService, SnackbarAction } from '../../../../services/shared/snackbar.service';

@Component({
    selector: 'app-admin-topic-table',
    templateUrl: './topic-table.component.html',
    styleUrls: ['./topic-table.component.scss']
})

export class TopicTableComponent implements OnInit {
    private title = 'Topic';
    private displayedColumns = ['topicId', 'postDate', 'showFlag', 'pictureUrl',
        'title', 'description', 'action'];
    private isLoaded = false;
    private dataSource?: MatTableDataSource<Topic>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(
        private topicTableService: TopicTableService,
      private topicDialogService: TopicDialogService,
        private snackbarService: SnackbarService,
        private dialog: MatDialog) {
        this.fetchAllTopics();
    }

    ngOnInit() {
        this.fetchAllTopics();
    }

    fetchAllTopics() {
        return this.topicTableService.getTopics()
            .subscribe(res => {
                this.dataSource = new MatTableDataSource<Topic>(res as Topic[]);
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

    createTopic() {
        const dialogRef = this.dialog.open(TopicDialogComponent, {
            height: '70%', width: '50%'
        });
        dialogRef.componentInstance.isAddMode = true;
        dialogRef.afterClosed()
            .subscribe(res => {
                this.fetchAllTopics();
            });
    }

    editTopic(id: number) {       
        const dialogRef = this.dialog.open(TopicDialogComponent, {
            height: '70%', width: '50%'
        });
        dialogRef.componentInstance.isAddMode = false;
        dialogRef.componentInstance.topicId = id;
        dialogRef.afterClosed()
            .subscribe(res => {
                this.fetchAllTopics();
            });
    }

    deleteTopic(id: number) {
        this.topicDialogService.deleteTopic(id)
            .subscribe(res => {
                this.fetchAllTopics();
                this.snackbarService.openSnackBar('Your topic has been deleted.', SnackbarAction.Delete);
            },
          error => {

            });  
    }
}
