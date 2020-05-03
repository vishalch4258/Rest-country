import { Injectable } from '@angular/core';
// importing HTTP client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//importing observable related code.
import { Observable } from "rxjs";
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestcountriesHttpService {

  public baseUrl = "https://a2dcb3ff.ngrok.io";
  sendRegion: any;

  constructor(public _http: HttpClient) {
    console.log('RestcountryHttp service constructor is called.');
  }
  // exception handler
  public handleError(err: HttpErrorResponse) {
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
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
    return this._http.get(this.baseUrl + `/${by}/` + search, { observe: 'response' });
    // return this._http.get(this.baseUrl + search, { observe: 'response' });

  }

  // method to get all countries with common language
  public getAllCountriesByLanguage(languageCode): any {
    const myResponse = this._http.get(this.baseUrl + '/lang' + '/' + languageCode);
    return myResponse;

  }

}
