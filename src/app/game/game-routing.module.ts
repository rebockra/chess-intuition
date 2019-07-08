import { GameComponent } from './game/game.component'
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '',
   component: GameComponent,
   children: [
    {path: 'game', component: GameComponent}
   ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameRoutingModule {
}
