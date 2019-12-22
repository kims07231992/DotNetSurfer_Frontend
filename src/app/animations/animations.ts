import {
  animation, trigger, animateChild, group, stagger,
  transition, animate, style, query
} from '@angular/animations';

export const flyRightToLeftAnimations =
  trigger('flyRightToLeftAnimations', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        stagger(500, [
          animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
        ])
      ])
    ])
  ]);

export const fadeInAnimations =
  trigger('fadeInAnimations', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0 }),
        stagger(500, [
          animate('1000ms', style({ opacity: 1 }))
        ])
      ])
    ])
  ])

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(800)
    ])
  ]);

export const fastFadeInAnimation =
  trigger('fastFadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(500)
    ])
  ]);
