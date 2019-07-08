import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private fields : string[] = [];
  public youGotIt : boolean = false;
  private fieldGenerated : number;
  public fieldToSelect : string;

  constructor() { }

  ngOnInit() {
    this.initFields();
    this.fieldGenerated = Math.floor(Math.random() * 64);
    this.fieldToSelect = this.fields[this.fieldGenerated];
  }

  public checkAnswer = (element: any) : void => {
    console.log(element);
    console.debug("element id: ", element.id);
    console.debug("generated field no: ", this.fieldGenerated);
    if (Number(element.id) === this.fieldGenerated) {
      this.youGotIt = true;
      //setTimeout(() => {}, 4000);
      //this.youGotIt = false;
    }
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
