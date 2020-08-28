import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BreweryListComponent } from './components/brewery-list/brewery-list.component';
import { BreweryListItemComponent } from './components/brewery-list-item/brewery-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BreweryFavoritesComponent } from './components/brewery-favorites/brewery-favorites.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, BreweryListComponent, BreweryListItemComponent, BreweryFavoritesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
