import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SnackbarService, SnackbarAction } from './snackbar.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GatewayService {
  protected baseUrl = environment.baseUrl;

  constructor(
    protected http: HttpClient,
    protected router: Router,
    protected snackbarService: SnackbarService) {

  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
      catchError(error => {
        this.handleError(error);
        return throwError(error);
      }));
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
        catchError(error => {
          this.handleError(error);
          return throwError(error);
        }));
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, data)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
        catchError(error => {
          this.handleError(error);
          return throwError(error);
        }));
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
        catchError(error => {
          this.handleError(error);
          return throwError(error);
        }));
  }

  navigateHome() {
    this.router.navigateByUrl('');
  }

  navigateToPreviousUrl(redirectUrl: string) {
    this.router.navigateByUrl(redirectUrl);
  }

  writeErrorLog(message: string) {
    this.http.post(`${this.baseUrl}api/logs/error`, message);
  }

  writeInfoLog(message: string) {
    this.http.post(`${this.baseUrl}api/logs/info`, message);
  }

  protected handleError<T>(error: any) {
    const httpResponse = error as HttpErrorResponse;
    const message = httpResponse.error;
    this.writeErrorLog(error); // System side logging
    this.snackbarService.openSnackBar(message, SnackbarAction.Error); // Client side display
  }
}
