import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Feature, FeatureType } from '../../../models/feature';
import { GatewayService } from '../../shared/gateway.service';

@Injectable()
export class AboutService {
  private backendFeatures: Feature[];
  private frontendFeatures: Feature[];

  constructor(private gateway: GatewayService) {

  }

  getBackendFeatures() {
    if (this.backendFeatures == null) {
      return this.gateway.get(`api/features/${FeatureType[FeatureType.Backend]}`)
        .pipe(tap(res => {
          this.backendFeatures = res as Feature[];
        }));
    }
    else {
      return of(this.backendFeatures);
    }
  }

  getFrontendFeatures() {
    if (this.frontendFeatures == null) {
      return this.gateway.get(`api/features/${FeatureType[FeatureType.Frontend]}`)
        .pipe(tap(res => {
          this.frontendFeatures = res as Feature[];
        }));
    }
    else {
      return of(this.frontendFeatures);
    }
  }
} 
