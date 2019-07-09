import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game/game.component';


const routes: Routes = [
  { path: '', redirectTo :'game', pathMatch : 'full'},
  { path: 'game', component: GameComponent},
  { path: 'landing', component: LandingComponent},
  //{ path: 'game', loadChildren: 'src/app/game/game.module#GameModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
