import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

// Routable animations
export const slideInAnimation =
trigger('routeAnimations', [
  transition('LandingPage <=> GamePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('700ms ease-out', style({ left: '100%'}))
      ], {optional: true}),
      query(':enter', [
        animate('700ms ease-out', style({ left: '0%'}))
      ], {optional: true})
    ]),
    query(':enter', animateChild()),
  ]),
  transition('GamePage <=> GameAnimationPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('700ms ease-out', style({ left: '100%'}))
      ], {optional: true}),
      query(':enter', [
        animate('700ms ease-out', style({ left: '0%'}))
      ], {optional: true})
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> LandingPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], {optional: true}),
    query(':enter', [
      style({ left: '-100%'})
    ], {optional: true}),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('700ms ease-out', style({ left: '100%'}))
      ], {optional: true}),
      query(':enter', [
        animate('700ms ease-out', style({ left: '0%'}))
      ], {optional: true})
    ]),
    query(':enter', animateChild(), {optional: true}),
  ]),


  ]);
