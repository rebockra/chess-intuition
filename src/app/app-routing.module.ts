import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game/game.component';
import { GameAnimatedComponent } from './game/game-animated/game-animated.component';


const routes: Routes = [
  { path: '', redirectTo : 'game', pathMatch: 'full'},
  { path: 'game', component: GameComponent, data: {animation : 'GamePage'}},
  { path: 'landing', component: LandingComponent, data: {animation: 'LandingPage'}},
  { path: 'gameanimated', component: GameAnimatedComponent, data: {animation: 'GameAnimationPage'}}
  // Lazy lodading of components is not supported by Github Pages, unfortunately
  // { path: 'game', loadChildren: 'src/app/game/game.module#GameModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
