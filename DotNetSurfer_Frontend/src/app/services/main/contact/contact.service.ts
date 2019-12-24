import { Injectable } from '@angular/core';
import { Career } from '../../../models/career';

@Injectable()
export class ContactService {
  private experiences: Career[];
  private educations: Career[];

  constructor() {

  }

  getExperiences() {
    if (this.experiences == null) {
      this.experiences = [
        {
          name: 'iHerb Inc.',
          title: 'Jr. Software Developer II',
          location: 'Orange County, CA',
          imageUrl: '/assets/Images/contact/experiences/iHerb.jpg',
          fromDate: new Date('1/1/19'),
          toDate: null
        },
        {
          name: 'AmWest Funding Corp.',
          title: 'Jr. Software Developer I',
          location: 'Orange County, CA',
          imageUrl: '/assets/Images/contact/experiences/AmWest.png',
          fromDate: new Date('2/1/18'),
          toDate: new Date('12/1/18')
        },
        {
          name: 'University of Southern California',
          title: 'Research Assistant',
          imageUrl: '/assets/Images/contact/experiences/USC.png',
          location: 'Los Angeles, CA',
          fromDate: new Date('6/1/17'),
          toDate: new Date('8/1/17')
        },
        {
          name: 'Hyundai Mobis',
          title: 'Software Developer Internship',
          location: 'Montgomery, AL',
          imageUrl: '/assets/Images/contact/experiences/Hyundai_Mobis.jpg',
          fromDate: new Date('1/1/16'),
          toDate: new Date('11/1/16')
        }
      ];
    }
    return this.experiences;
  }

  getEducations() {
    if (this.educations == null) {
      this.educations = [
        {
          name: 'Georgia Institute of Technology',
          title: 'Master of Science, Computer Science',
          location: '',
          imageUrl: '/assets/Images/contact/educations/GT.png',
          fromDate: new Date('8/1/19'),
          toDate: null
        },
        {
          name: 'Dongguk University',
          title: 'Bachelor\'s degree, Computer Science and Engineering',
          location: '',
          imageUrl: '/assets/Images/contact/educations/DGU.png',
          fromDate: new Date('3/1/11'),
          toDate: new Date('2/1/18')
        },
        {
          name: 'University of Nebraska',
          title: 'Exchange Program Student',
          location: '',
          imageUrl: '/assets/Images/contact/educations/UNK.png',
          fromDate: new Date('8/1/16'),
          toDate: new Date('12/1/16')
        }
      ];
    }
    return this.educations;
  }
} 
