import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Form } from "@angular/forms";
import { AppService } from "./app.service";

interface country {
  id: number;
  name: string;
  iso2: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  countries: Array<any> = [];

  states: Array<any> = [];

  cities: Array<any> = [];

  selectedCountry: string;

  constructor(private appService: AppService, private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.countries = this.appService.getCountries();
    //console.table(this.countries);
  }

  onSelectCountry(e: any, type: string = "country") {
    console.log(e.target.value);

    if (type === "country") {
      this.states = [];
      this.cities = [];
      this.selectedCountry = e.target.value;
      this.states = this.appService.getStatesByCountry(e.target.value);
      // console.log(this.states);
    } else if (type === "state") {
      this.cities = [];
      this.cities = this.appService.getCitiesByState(
        this.selectedCountry,
        e.target.value
      );
    }
  }
}
