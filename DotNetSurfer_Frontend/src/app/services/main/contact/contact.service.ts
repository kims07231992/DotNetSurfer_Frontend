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
          imageUrl: '/assets/Images/contact/experiences/Amazon.png',
          fromDate: new Date('9/1/20'),
          toDate: null
        },
        {
          name: 'iHerb Inc.',
          title: 'Jr. Software Developer II',
          location: 'Los Angeles Metropolitan Area',
          imageUrl: '/assets/Images/contact/experiences/iHerb.jpg',
          fromDate: new Date('1/1/19'),
          toDate: new Date('8/1/20')
        },
        {
          name: 'AmWest Funding Corp.',
          title: 'Jr. Software Developer I',
          location: 'Los Angeles Metropolitan Area',
          imageUrl: '/assets/Images/contact/experiences/AmWest.png',
          fromDate: new Date('2/1/18'),
          toDate: new Date('12/1/18')
        },
        {
          name: 'University of Southern California',
          title: 'Research Assistant',
          imageUrl: '/assets/Images/contact/experiences/USC.png',
          location: 'Los Angeles Metropolitan Area',
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
        },
        {
          name: 'Republic of Korea Army',
          title: 'Squad Leader',
          location: 'Gyeonggi-do, South Korea',
          imageUrl: '/assets/Images/contact/experiences/Republic_Of_Korea_Army.png',
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
        }
      ];
    }
    return this.educations;
  }
} 
