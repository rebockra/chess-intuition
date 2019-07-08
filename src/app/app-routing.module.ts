import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: 'game', loadChildren: 'src/app/game/game.module#GameModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
