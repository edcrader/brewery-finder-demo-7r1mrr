import { IBrewery } from './../../types/brewery';
import { BreweryService } from './../../services/brewery.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brewery-favorites',
  templateUrl: './brewery-favorites.component.html',
  styleUrls: ['./brewery-favorites.component.scss']
})
export class BreweryFavoritesComponent {
  favorites$: Observable<IBrewery[]> = this.breweryService.favorites$;
  constructor(private breweryService: BreweryService) { }
}
