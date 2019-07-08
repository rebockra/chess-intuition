import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onFieldSelected: EventEmitter<any> = new EventEmitter<any>();

  public checkAnswer = (element: any) : void => {
    console.log("inner");
    console.log(element);
    this.onFieldSelected.emit(element);
  }

}
