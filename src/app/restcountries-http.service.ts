import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesHttpService {

  public baseUrl = 'https://restcountries.eu/rest/v2';
  sendRegion: any;

  constructor(public _http: HttpClient) {
    console.log('service constructor is called.');
   }

   // search box ..

   getRegionCountries(region) {
    return this._http.get(`${this.baseUrl}/region/${region}`);
  }

   getCountries() {
    return this._http.get(`${this.baseUrl}/all`);
  }

   getCountry(id) {
    return this._http.get(`${this.baseUrl}/alpha?codes=${id}`);
  }

   // method to get all countries
  public getAllCountries(regionName): any {
    const myResponse = this._http.get(this.baseUrl + '/region' + '/' + regionName);
    return myResponse;

  }
  // method to get single country details
  public getSingleCountryDetails(countryName): any {
    const myResponse = this._http.get(this.baseUrl + '/name' + '/' + countryName + '?fullText=true');
    return myResponse;
  }
   // method to get all countries with common currency
   public getAllCountriesByCurrency(currencyCode): any {
    const myResponse = this._http.get(this.baseUrl + '/currency' + '/' + currencyCode);
    return myResponse;

  }

   // method to get all countries with common currency
   public getAllCountriesBySearch(queryParams): any {
     const by = queryParams.searchRadio;
     const search = queryParams.search;
     return this._http.get(this.baseUrl + `/${by}/` + search,{ observe: 'response' });

  }

  // method to get all countries with common language
  public getAllCountriesByLanguage(languageCode): any {
    const myResponse = this._http.get(this.baseUrl + '/lang' + '/' + languageCode);
    return myResponse;

  }

}