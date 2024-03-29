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
          name: 'Amazon',
          title: 'Software Development Engineer I',
          location: 'Los Angeles Metropolitan Area',
          imageUrl: '/assets/images/contact/experiences/Amazon.png',
          fromDate: new Date('11/1/20'),
          toDate: null
        },
        {
          name: 'iHerb Inc.',
          title: 'Software Developer I',
          location: 'Los Angeles Metropolitan Area',
          imageUrl: '/assets/images/contact/experiences/iHerb.jpg',
          fromDate: new Date('1/1/19'),
          toDate: new Date('10/1/20')
        },
        {
          name: 'University of Southern California',
          title: 'Research Assistant',
          imageUrl: '/assets/images/contact/experiences/USC.png',
          location: 'Los Angeles Metropolitan Area',
          fromDate: new Date('6/1/17'),
          toDate: new Date('8/1/17')
        },
        {
          name: 'Hyundai Mobis',
          title: 'Software Developer Internship',
          location: 'Montgomery, AL',
          imageUrl: '/assets/images/contact/experiences/Hyundai_Mobis.jpg',
          fromDate: new Date('1/1/16'),
          toDate: new Date('11/1/16')
        },
        {
          name: 'Republic of Korea Army',
          title: 'Squad Leader',
          location: 'Gyeonggi-do, South Korea',
          imageUrl: '/assets/images/contact/experiences/Republic_Of_Korea_Army.png',
          fromDate: new Date('2/1/12'),
          toDate: new Date('11/1/13')
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
          imageUrl: '/assets/images/contact/educations/GT.png',
          fromDate: new Date('8/1/19'),
          toDate: null
        },
        {
          name: 'Dongguk University',
          title: 'Bachelor\'s degree, Computer Science and Engineering',
          location: '',
          imageUrl: '/assets/images/contact/educations/DGU.png',
          fromDate: new Date('3/1/11'),
          toDate: new Date('2/1/18')
        }
      ];
    }
    return this.educations;
  }
} 
