import { Component, VERSION } from "@angular/core";
import { BreweryService } from "./services/brewery.service";
import { Observable } from "rxjs";
import { IBrewery } from "./types/brewery";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  favorites$: Observable<IBrewery[]> = this.breweryService.favorites$;

  view: string = "Search";
  constructor(private breweryService: BreweryService) {}

  toggleView(displayView: string): void { //Step 2
    // TODO 3: logic to toggle the view
    this.view = displayView; //STEP 3
  }
}
