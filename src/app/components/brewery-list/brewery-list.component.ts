import { Observable } from 'rxjs';
import { BreweryService } from './../../services/brewery.service';
import { IBrewery } from './../../types/brewery';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent {

  breweries$: Observable<IBrewery[]> = this.breweryService.breweries$;

  constructor(private breweryService: BreweryService) { } //NOTE the construtor injection

  searchByState(state: string) {
    // TODO 5: Add logic to search
    console.log(state); //STEP 5
    this.breweryService.search(state);  
}

  onToggleSave(brewery: IBrewery) {
    // TODO 10: assign brewery.favorited to be true
    // TODO: Add brewery to favorites list
    console.log(brewery);

   brewery.favorited = true;
  this.breweryService.addToFavorites(brewery);
  }
}
