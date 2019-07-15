import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private fields : string[] = [];
  public correctAnswerSelected : boolean = false;
  public wrongAnswerSelected : boolean = false;
  private fieldGenerated : number;
  public fieldToSelect : string;

  public hits : number = 0;
  public misses : number = 0;
  public accuracy : number = 0

  @ViewChild('fieldToSelectRef', {static: false}) fieldToSelectRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initFields();
    this.newRound()
    $(document).foundation();
    document.documentElement.style['filter'] = 'invert(0%)';
  }

  public newRound = () => {
      this.fieldGenerated = Math.floor(Math.random() * 64);
      this.fieldToSelect = this.fields[this.fieldGenerated];
      this.correctAnswerSelected = false;
  }

  public checkAnswer = (element: any) : void => {
    this.correctAnswerSelected = false;
    console.debug("element id: ", element.id);
    console.debug("generated field no: ", this.fieldGenerated);
    if (Number(element.id) === this.fieldGenerated) {
      this.correctAnswerSelected = true;
      setTimeout(() =>  {
        this.fieldToSelectRef.nativeElement.click();
          setTimeout(() => {
            this.newRound();
              setTimeout(() => {
                this.fieldToSelectRef.nativeElement.click();
              }, 450)
          }, 500)
        }, 400);
      this.hits++;

    } else {
      this.wrongAnswerSelected = true;
      this.misses++;
      setTimeout(() => {this.wrongAnswerSelected = false;}, 1000)
    }
    this.misses > 0 ? (this.accuracy = (this.hits / (this.misses + this.hits))).toFixed(2) : this.accuracy = 1;
  }

  private initFields = () : void => {
    for (let i = 1; i < 9; i++) {
      this.fields.push("a"+i);
      this.fields.push("b"+i);
      this.fields.push("c"+i);
      this.fields.push("d"+i);
      this.fields.push("e"+i);
      this.fields.push("f"+i);
      this.fields.push("g"+i);
      this.fields.push("h"+i);
    }
  }
}
