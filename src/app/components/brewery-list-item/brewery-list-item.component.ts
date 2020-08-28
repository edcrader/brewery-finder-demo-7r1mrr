import { IBrewery } from './../../types/brewery';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brewery-list-item',
  templateUrl: './brewery-list-item.component.html',
  styleUrls: ['./brewery-list-item.component.scss']
})
export class BreweryListItemComponent {
  // TODO 8: Add an input for the brewery: IBrewery
  // TODO: Add an input for favorited: boolean
  // TODO: Add an output to toggleSave
@Input() brewery: IBrewery;
@Input() favorited: boolean;
@Output() toggleSave: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
}
