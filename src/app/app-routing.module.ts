import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { MtgApiCallerComponent } from './mtg-api-caller/mtg-api-caller.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'mtg', component: MtgApiCallerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
