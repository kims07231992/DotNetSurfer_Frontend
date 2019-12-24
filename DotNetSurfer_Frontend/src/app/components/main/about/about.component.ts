import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../animations/animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
    animations: [fadeInAnimation]
})
export class AboutComponent {
}
