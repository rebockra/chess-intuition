import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('landingAnimation', [
      state('start', style({
        opacity: 1,
        width: '70vw'
      })),
      state('end', style({
        opacity: 0,
        width: '25vw',
        display: 'none'
      })),
      transition('start => end', [
        animate('3s ease-in', keyframes([
          style({ width: '70vw', opacity: 1}),
          style({ width: '65vw', opacity: .9}),
          style({ width: '60vw', opacity: .8}),
          style({ width: '55vw', opacity: .7}),
          style({ width: '50vw', opacity: .6}),
          style({ width: '45vw', opacity: .5}),
          style({ width: '40vw', opacity: .4}),
          style({ width: '35vw', opacity: .3}),
          style({ width: '30vw', opacity: .2}),
          style({ width: '25vw', opacity: 0}),
        ]))
      ]),
      transition('end => start', [
        animate('3s ease-out', keyframes([
          style({ width: '25vw', opacity: 0.25}),
          style({ width: '30vw', opacity: 0.35}),
          style({ width: '35vw', opacity: 0.45}),
          style({ width: '40vw', opacity: 0.55}),
          style({ width: '45vw', opacity: 0.65}),
          style({ width: '50vw', opacity: 0.75}),
          style({ width: '55vw', opacity: 0.85}),
          style({ width: '60vw', opacity: 0.90}),
          style({ width: '65vw', opacity: 0.95}),
          style({ width: '70vw', opacity: 0.1}),
        ]))
      ]),
    ]),
    trigger('revealAutherInfo', [
        state('begin', style({
          opacity: 0,
          display: 'flex',
          width: '25vw',
          height: '15vh'
        })),
        state('finish', style({
          opacity: 1,
          display: 'flex',
          width: '70vw',
          height: '50vh'
        })),
        transition('begin => finish', [
          animate('3s ease-out', keyframes([
            style({ width: '25vw', height: '15vh', opacity: 0.25}),
            style({ width: '30vw', height: '20vh', opacity: 0.35}),
            style({ width: '35vw', height: '23vh', opacity: 0.45}),
            style({ width: '40vw', height: '27vh', opacity: 0.55}),
            style({ width: '45vw', height: '33vh', opacity: 0.65}),
            style({ width: '50vw', height: '37vh', opacity: 0.75}),
            style({ width: '55vw', height: '43vh', opacity: 0.85}),
            style({ width: '60vw', height: '47vh', opacity: 0.90}),
            style({ width: '65vw', height: '49vh', opacity: 0.95}),
            style({ width: '70vw', height: '50vh', opacity: 0.1}),
          ]))
        ]),
        /*transition('finish => begin', [
          animate('3s ease-out', keyframes([
            style({ width: '25vw', height: '50vh', opacity: 1}),
            style({ width: '30vw', height: '49vh', opacity: 0.95}),
            style({ width: '35vw', height: '47vh', opacity: 0.9}),
            style({ width: '40vw', height: '43vh', opacity: 0.85}),
            style({ width: '45vw', height: '37vh', opacity: 0.75}),
            style({ width: '50vw', height: '33vh', opacity: 0.65}),
            style({ width: '55vw', height: '27vh', opacity: 0.55}),
            style({ width: '60vw', height: '23vh', opacity: 0.40}),
            style({ width: '65vw', height: '20vh', opacity: 0.35}),
            style({ width: '70vw', height: '15vh', opacity: 0.25}),
          ]))
        ]),*/
      ])
  ]
})

export class LandingComponent implements OnInit {

  public isDefined: boolean = true;
  public revealStatus: 'begin' | 'finish' = 'finish';

  ngOnInit(): void {
    document.documentElement.style['filter'] = 'invert(0%)';
  }

  public toggle() {
    this.isDefined = !this.isDefined;
  }

  public toggleAutherReveal() {
    if (this.revealStatus === 'begin') {
      this.revealStatus = 'finish';
    } else {
      this.revealStatus = 'begin';
    }
  }
}

