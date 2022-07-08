import {Injectable} from '@angular/core';

import * as countryData from 'countrycitystatejson';

@Injectable()
export class AppService {

  private countryData = countryData;

  constructor() {}

  getCountries() {
    return this.countryData.getCountries();
  }

  getStatesByCountry(countryShotName: string) {
    return this.countryData.getStatesByShort(countryShotName);
  }

  getCitiesByState(country: string, state: string) {
    return this.countryData.getCities(country, state);
  }
}