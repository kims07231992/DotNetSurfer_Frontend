import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/shared/header.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  private isOpen: boolean;
  private isMobile: boolean;
  private adminMenuItems: any[] = [];

  constructor(
    private headerService: HeaderService) {

  }

  ngOnInit() {
    this.headerService.getIsSidenavOpened()
      .subscribe(s => {
        this.isOpen = s as boolean;
      });

    this.headerService.getIsMobile()
      .subscribe(s => {
        this.isMobile = s as boolean;
      });

    this.adminMenuItems = this.headerService.getAdminMenuItems();
  }

  toggleSidenav() {
    this.headerService.setIsSidenavOpened(!this.isOpen);
  }

  isAuthenticated() {
    return this.headerService.getIsAuthenticated();
  }

  signOut() {
    this.headerService.signOut();
  }
}
