import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game-routing.module';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameRoutingModule
  ],

})
export class GameModule { }
