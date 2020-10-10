import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CraftBeerListComponent } from './craft-beer-list/craft-beer-list.component';
import { CraftBeerDetailsComponent } from './craft-beer-details/craft-beer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CraftBeerListComponent,
    CraftBeerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
