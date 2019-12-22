import { OnDestroy, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { UserService } from '../admin/user/user.service';
import { GatewayService } from '../shared/gateway.service';
import { SideMenuNode } from '../../models/sideMenuNode';

@Injectable()
export class HeaderService implements OnDestroy {
  private watcher: Subscription;
  private activeMediaQuery: string;
  private activeSize: string;
  private isSidenavOpened$ = new BehaviorSubject<boolean>(false); // Default closed
  private isMobile$ = new BehaviorSubject<boolean>(false);
  private menuItems: any[] = [];
  private adminMenuItems: any[] = [];
  private sideMenuNodes: SideMenuNode[];

  constructor(
    private mediaObserver: MediaObserver,
    private router: Router,
    private userSerivce: UserService,
    private gatewayService: GatewayService) {
    this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      this.activeSize = change.mqAlias; // 'xs', 'sm', ..., 'xl'
      this.isMobile$.next(this.activeSize == 'xs');
    });
    router.events.subscribe(res => this.isSidenavOpened$.next(false)); // Close side nav when route changed
    this.setMenuItems();
    this.setAdminMenuItems();
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  getIsSidenavOpened(): Observable<boolean> {
    return this.isSidenavOpened$.asObservable();
  }

  setIsSidenavOpened(isSidenavOpened: boolean) {
    this.isSidenavOpened$.next(isSidenavOpened);
  }

  getIsMobile(): Observable<boolean> {
    return this.isMobile$.asObservable();
  }

  setIsMobile(isMobile: boolean) {
    this.isMobile$.next(isMobile);
  }

  getMenuItems() {
    return this.menuItems;
  }

  getAdminMenuItems() {
    return this.adminMenuItems;
  }

  getIsAuthenticated() {
    return this.userSerivce.getIsAuthenticated;
  }

  getSideMenuNodes() {
    if (this.sideMenuNodes == null) {
      return this.gatewayService.get(`api/headers/menu/side`)
        .pipe(tap(res => {
          this.sideMenuNodes = res as SideMenuNode[];
        }));
    }
    else {
      return of(this.sideMenuNodes);
    }
  }

  signOut() {
    this.userSerivce.signOut();
  }

  private setMenuItems() {
    this.menuItems.push({
      name: 'Home',
      routerLink: '/home'
    });
    this.menuItems.push({
      name: 'About',
      routerLink: '/about'
    });
    this.menuItems.push({
      name: 'Contact',
      routerLink: '/contact'
    });
  }

  private setAdminMenuItems() {
    this.adminMenuItems.push({
      name: 'Profile',
      icon: 'person',
      routerLink: '/admin/profile'
    });
    this.adminMenuItems.push({
      name: 'Topic',
      icon: 'library_books',
      routerLink: '/admin/topic'
    });
    this.adminMenuItems.push({
      name: 'Article',
      icon: 'rate_review',
      routerLink: '/admin/article'
    });
    this.adminMenuItems.push({
      name: 'Announcement',
      icon: 'list_alt',
      routerLink: '/admin/announcement'
    });
  }
}
