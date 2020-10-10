import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraftBeerDetailsComponent } from './craft-beer-details/craft-beer-details.component';
import { CreateCraftBeerComponent } from './create-craft-beer/create-craft-beer.component';
import { CraftBeerListComponent } from './craft-beer-list/craft-beer-list.component';
import { UpdateCraftBeerComponent } from './update-craft-beer/update-craft-beer.component';

const routes: Routes = [
  { path: '', redirectTo: 'craft-beers', pathMatch: 'full' },
  { path: 'craft-beers', component: CraftBeerListComponent },
  { path: 'add', component: CreateCraftBeerComponent },
  { path: 'update/:id', component: UpdateCraftBeerComponent },
  { path: 'details/:id', component: CraftBeerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
