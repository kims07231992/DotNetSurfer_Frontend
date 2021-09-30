import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../../services/main/home/banner.service'
import { HeaderService } from 'src/app/services/shared/header.service'
import { fadeInAnimation } from '../../../../animations/animations'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [fadeInAnimation]
})

export class BannerComponent implements OnInit {
  public isMobile: boolean;
  public video: String;

  constructor(
    private bannerService: BannerService,
    private headerService: HeaderService) {

  }

  ngOnInit() {
    this.headerService.getIsMobile()
    .subscribe(s => {
      this.isMobile = s as boolean;
    });
    
    this.initializeVideo();
  }

  initializeVideo() {
    this.video = this.bannerService.getVideo();
  }

  getIsMobile(): Observable<boolean> {
    return this.headerService.getIsMobile();
  }
}
