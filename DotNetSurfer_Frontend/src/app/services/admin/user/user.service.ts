import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { map, tap} from "rxjs/operators";
import { SessionStorage } from 'ngx-store';
import { GatewayService } from '../../shared/gateway.service';

@Injectable()
export class UserService {
  @SessionStorage() private jwtTokenSession?: string;
  @SessionStorage() private signInTimeSession?: Date;
  @SessionStorage() private userSession?: User;

  redirectUrl: string;

  get getJwtToken(): string | undefined {
    return this.jwtTokenSession;
  }

  get getUser(): User | undefined {
    return this.userSession;
  }

  get getIsAuthenticated(): boolean | undefined {
    return this.isAuthenticated();
  }

  constructor(private gatewayService: GatewayService) {

  }

  signUp(user: User) {
    return this.gatewayService.post('users/signup', user)
      .pipe(
      map(res => res),
      tap(res => {
        this.navigateHome();
      }));
  }

  signIn(user: User) {
    return this.gatewayService.post('users/signin', user)
      .pipe(
      map(res => res),
      tap(res => {
        const user = res['user'] as User;
        const jwtToken = res['auth_Token'] as string;
        this.setUserSession(user, jwtToken);
        if (this.redirectUrl == null) {
          this.navigateHome();
        }
        else {
          this.navigateToPreviousUrl();
        }
      }));
  }

  signOut() {
    this.clearUserSession();
    this.navigateHome();
  }

  private navigateHome() {
    this.gatewayService.navigateHome();
  }

  private navigateToPreviousUrl() {
    this.gatewayService.navigateToPreviousUrl(this.redirectUrl);
  }

  private setUserSession(user: User, jwtToken: string) {
    this.signInTimeSession = new Date();
    this.jwtTokenSession = jwtToken;
    this.userSession = user;
  }

  private clearUserSession() {
    this.signInTimeSession = undefined;
    this.jwtTokenSession = undefined;
    this.userSession = undefined;
  }

  private isAuthenticated() {
    if (this.signInTimeSession == undefined) {
      return false;
    }
    else {
      const sessionTime = Date.parse(this.signInTimeSession.toString()); // Get time from session
      const diffMs = Date.now() - sessionTime; // Time comparison
      const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // Minutes
      const sessionMinutes = 30;

      return diffMins < sessionMinutes;
    }
  }
}

