import { Injectable } from '@angular/core';

@Injectable()
export class BannerService {
  private video: String;

  constructor() {

  }

  getVideo() {
    if (this.video == null) {
      this.video = '/assets/videos/banner/banner.mp4'
    }
    return this.video;
  }
} 
