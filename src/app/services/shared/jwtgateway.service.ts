import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SnackbarService, SnackbarAction } from './snackbar.service';
import { GatewayService } from './gateway.service';
import { UserService } from '../admin/user/user.service';

@Injectable({ providedIn: 'root' })
export class JWTGatewayService extends GatewayService {
  private httpOptions: any;

  constructor(
    protected http: HttpClient,
    protected router: Router,
    protected snackbarService: SnackbarService,
    private userService: UserService) {
    super(http, router, snackbarService);
    this.makeDefaultHttpOption();
  }

  makeDefaultHttpOption() {
    const jwtToken = this.userService.getJwtToken;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      })
    };
  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`, this.httpOptions)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
        catchError(error => {
          this.handleError(error);
          return throwError(error);
        }));
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data, this.httpOptions)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
        catchError(error => {
          this.handleError(error);
          return throwError(error);
        }));
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, data, this.httpOptions)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
        catchError(error => {
          this.handleError(error);
          return throwError(error);
        }));
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`, this.httpOptions)
      .pipe(
        map(res => res),
        tap(data => this.writeInfoLog(url)),
        catchError(error => {
          this.handleError(error);
          return throwError(error);
        }));
  }
}
