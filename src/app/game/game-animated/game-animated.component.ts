import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-game-animated',
  templateUrl: './game-animated.component.html',
  styleUrls: ['./game-animated.component.scss'],
  animations: [
    trigger('changeFieldColor', [
      state('initial', style({ backgroundColor: 'rgb(255,255,255)' })),
      state('final', style({ backgroundColor: '#EB0048' })),

      transition('initial => final', [
        animate('5000ms 2700ms', keyframes([
          style({ backgroundColor: 'rgb(255,255,255' }),
          style({ backgroundColor: '#008008' }),
          style({ backgroundColor: '#0081FF' }),
          style({ backgroundColor: '#EB0048' })
        ])),
      ]),
    ])]
})
export class GameAnimatedComponent implements OnInit {

  private fields: string[] = [];
  public correctAnswerSelected: boolean = false;
  public wrongAnswerSelected: boolean = false;
  public initialRound: boolean = true;
  public manualReset: boolean = false;

  private fieldGenerated: number;
  public fieldToSelect: string;

  currentState: string = 'initial';
  public hits: number = 0;
  public misses: number = 0;
  public accuracy: number = 0;

  @ViewChild('fieldToSelectRef', { static: false }) fieldToSelectRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initFields();
    $(document).foundation();
    this.newRound();
    this.initialRound = true;
    //console.debug("onInit", this.currentState);
  }

  public newRound() {
    this.fieldGenerated = Math.floor(Math.random() * 64);
    this.fieldToSelect = this.fields[this.fieldGenerated];
    this.correctAnswerSelected = false;
  }

  public checkAnswer(element: any): void {
    this.correctAnswerSelected = false;
    // console.debug("element id: ", element.id);
    // console.debug("generated field no: ", this.fieldGenerated);
    if (Number(element.id) === this.fieldGenerated) {
      this.handleCorrectAnswer();

    } else {
      this.handleWrongAnswer();
    }
    this.calculateAccuracy();
  }

  public handleWrongAnswer(): void {
    this.wrongAnswerSelected = true;
    console.debug("handlewrong before", this.misses)
    if (this.initialRound) {
      this.initialRound = false;
      setTimeout(() => { this.wrongAnswerSelected = false; }, 1000);
      return;
    }
    this.misses++;
    setTimeout(() => { this.wrongAnswerSelected = false; }, 1000);
    console.debug("handlewrong after", this.misses)
    this.calculateAccuracy();
  }

  public handleCorrectAnswer(): void {
    this.correctAnswerSelected = true;
    this.manualReset = true;

    setTimeout(() => {
      this.fieldToSelectRef.nativeElement.click();
      setTimeout(() => {
        this.newRound();
        setTimeout(() => {
          this.fieldToSelectRef.nativeElement.click();
        }, 450);
      }, 500);
    }, 400);
    this.hits++;
  }

  public toggleAnimation() {
    //console.debug("toggleAnim Before", this.currentState);
    if (this.currentState === 'initial') {
      this.currentState = 'final';
    } else {
      this.currentState = 'initial';
    }
    console.debug("toggle animation before", this.misses)
    if ((this.misses === 0 && this.currentState === 'initial')) {
      this.misses++;
    }
    console.debug("toggle animation after", this.misses)

    //console.debug("toggleAnim After", this.currentState);
  }

  public resetFieldToSelectAnimation() {
    if (this.manualReset === true) {
      this.toggleAnimation();
      this.manualReset = false;
      return;
    } else {
      if (this.misses > 0) {
        this.handleWrongAnswer();
        this.newRound();
        this.toggleAnimation();
        //this.manualReset = true;
      } else {
        //this.newRound()
        this.toggleAnimation();
      }
    }


  }

  public calculateAccuracy(): void {
    this.misses > 0 ? (this.accuracy = (this.hits / (this.misses + this.hits))).toFixed(2) : this.accuracy = 1;
  }

  private initFields(): void {
    for (let i = 1; i < 9; i++) {
      this.fields.push("a" + i);
      this.fields.push("b" + i);
      this.fields.push("c" + i);
      this.fields.push("d" + i);
      this.fields.push("e" + i);
      this.fields.push("f" + i);
      this.fields.push("g" + i);
      this.fields.push("h" + i);
    }
  }
}
