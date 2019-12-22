import { Component, OnInit } from '@angular/core';
import { Feature } from '../../../../models/feature'
import { AboutService } from '../../../../services/main/about/about.service';
import { SnackbarService, SnackbarAction } from '../../../../services/shared/snackbar.service';

@Component({
  selector: 'app-about-backend',
  templateUrl: './about-backend.component.html',
  styleUrls: ['./about-backend.component.scss']
})
export class AboutBackendComponent implements OnInit {
  private isLoaded = false;
  private features: Feature[];

  constructor(
    private aboutService: AboutService,
    private snackbarService: SnackbarService) {

  }

  ngOnInit() {
    this.initializeBackendFeatures();
  }

  fetchFeatures() {
    return this.aboutService.getBackendFeatures();
  }

  initializeBackendFeatures() {
    this.fetchFeatures().subscribe(res => {
      this.features = res as Feature[];
      this.isLoaded = true;
    },
      error => {

      });
  }
}
