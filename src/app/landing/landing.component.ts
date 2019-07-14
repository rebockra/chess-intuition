import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('landingAnimation', [
      state('start', style({
        //opacity: 0,
        width: '70vw'
      })),
      state('end', style({
        //opacity: 1,
        width: '25vw'
      })),
      transition('start => end', [
        animate('3s ease-in', keyframes([
          style({ width: '70vw'}),
          style({ width: '65vw'}),
          style({ width: '60vw'}),
          style({ width: '55vw'}),
          style({ width: '50vw'}),
          style({ width: '45vw'}),
          style({ width: '40vw'}),
          style({ width: '35vw'}),
          style({ width: '30vw'}),
          style({ width: '25vw'}),
        ]))
      ]),
      transition('end => start', [
        animate('3s ease-out', keyframes([
          style({ width: '25vw'}),
          style({ width: '30vw'}),
          style({ width: '35vw'}),
          style({ width: '40vw'}),
          style({ width: '45vw'}),
          style({ width: '50vw'}),
          style({ width: '55vw'}),
          style({ width: '60vw'}),
          style({ width: '65vw'}),
          style({ width: '70vw'}),
        ]))
      ]),
      /*
      transition('start => end', [
        animate('3s', keyframes([
          style({ backgroundColor: 'white', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.2}),
          style({ backgroundColor: 'blue', offset: 1.0})
        ])),
      ]),
      transition('end => start', [
        animate('3s', keyframes([
          style({ backgroundColor: 'white', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.2}),
          style({ backgroundColor: 'blue', offset: 1.0})
        ])),
      ]),
      */
    ])
  ]
})


/*
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('landingAnimation', [
      state('inactive', style({ backgroundColor: 'blue' })),
      state('active', style({ backgroundColor: 'orange' })),

      transition('* => active', [
        animate('5s', keyframes([
          style({ backgroundColor: 'blue', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.8}),
          style({ backgroundColor: 'orange', offset: 1.0})
        ])),
      ]),
      transition('* => inactive', [
        animate('5s', keyframes([
          style({ backgroundColor: 'orange', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.2}),
          style({ backgroundColor: 'blue', offset: 1.0})
        ]))
      ]),

      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' })
        ]))
      ]),
    ])
  ]
})*/
export class LandingComponent implements OnInit {

  isDefined: boolean = true;
  ngOnInit(): void {
  }

  public toggle() {
    this.isDefined = !this.isDefined;
  }
}

