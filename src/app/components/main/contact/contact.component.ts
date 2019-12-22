import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/main/contact/contact.service';
import { fadeInAnimation } from '../../../animations/animations'
import { Career } from '../../../models/career';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation]
})

export class ContactComponent implements OnInit {
  private experiences: Career[];
  private educations: Career[];

  constructor(
    private contactService: ContactService) {

  }

  ngOnInit() {
    this.initializeExperiences();
    this.initializeEducations();
  }

  initializeExperiences() {
    this.experiences = this.contactService.getExperiences();
  }

  initializeEducations() {
    this.educations = this.contactService.getEducations();
  }
}
