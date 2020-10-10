import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraftBeerDetailsComponent } from './craft-beer-details/craft-beer-details.component';
import { CraftBeerListComponent } from './craft-beer-list/craft-beer-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: CraftBeerListComponent },
  { path: 'details/:id', component: CraftBeerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
