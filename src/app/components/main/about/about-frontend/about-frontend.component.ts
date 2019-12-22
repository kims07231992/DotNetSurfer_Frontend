import { Component, OnInit } from '@angular/core';
import { Feature } from '../../../../models/feature'
import { AboutService } from '../../../../services/main/about/about.service';
import { SnackbarService, SnackbarAction } from '../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-about-frontend',
  templateUrl: './about-frontend.component.html',
  styleUrls: ['./about-frontend.component.scss']
})
export class AboutFrontendComponent implements OnInit {
  private isLoaded = false;
  private features: Feature[];

  constructor(
    private aboutService: AboutService,
    private snackbarService: SnackbarService) {

  }

  ngOnInit() {
    this.initializeFrontendFeatures();
  }

  fetchFeatures() {
    return this.aboutService.getFrontendFeatures();
  }

  initializeFrontendFeatures() {
    this.fetchFeatures().subscribe(res => {
      this.features = res as Feature[];
      this.isLoaded = true;
    },
      error => {

      });
  }
}
