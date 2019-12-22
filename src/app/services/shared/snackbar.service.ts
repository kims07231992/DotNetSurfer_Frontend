import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

export enum SnackbarAction {
  Load,
  Create,
  Update,
  Delete,
  Error,
  Success
}

@Injectable()
export class SnackbarService {

  public constructor(private snackBar: MatSnackBar) {

  }

  public openSnackBar(message: string, snackbarAction: SnackbarAction) {
    this.snackBar.open(message, SnackbarAction[snackbarAction], {
      duration: 3000
    });
  }

  public openHttpErrorSnackBar(httpErrorResponse: any) {
    const response = httpErrorResponse as HttpErrorResponse
    this.snackBar.open(response.message, SnackbarAction[SnackbarAction.Error], {
      duration: 3000
    });
  }
}
