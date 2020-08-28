import { IBrewery } from './../types/brewery';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  favorites: BehaviorSubject<IBrewery[]> = new BehaviorSubject([]);
  favorites$ = this.favorites.asObservable();
  breweries: BehaviorSubject<IBrewery[]> = new BehaviorSubject([]);
  breweries$ = this.breweries.asObservable();

  // TODO: Inject HttpClient. Also a part of todo 6
  constructor(private http: HttpClient) { } //STEP 6 

  addToFavorites(brewery: IBrewery) {
 this.favorites.next([brewery, ...this.favorites.value]);
   }

  getSingleBreweryById(id: number) {
    // TODO: Logic for a single brewery call
  }

  search(query: string) {
    // TODO 6: Logic to search breweries
    console.log(query); //STEP 6
        return this.http.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries/search?query=${query}`)     .subscribe(breweries => this.breweries.next([...breweries, ...this.breweries.value]));

  }
}
