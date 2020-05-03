import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RestcountriesHttpService } from '../restcountries-http.service';


@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit, OnDestroy {
  grid = true;

  public currentCountry;
  public allCountries;
  errormsg: boolean;
  constructor(private _route: ActivatedRoute, private router: Router, public _http: RestcountriesHttpService) {
    console.log("Country View constructor called.")
  }

  ngOnInit() {
    console.log('Single country ngOninit is called');
    let country_name = this._route.snapshot.paramMap.get('country.name');
    console.log(country_name);
    this._http.getSingleCountryDetails(country_name).subscribe(
      data => {
        console.log(data);
        this.currentCountry = data;
        // console.log(this.currentCountry.name); // resulting into undefined
        this.errormsg = false;
      },
      error => {
        this.errormsg = true;
        console.log(this.errormsg);
        console.log("some error occured");
        console.log(error.errorMessage);
        //alert(error.errorMessage);

        if (error.errorMessage === undefined) {
          alert('Invalid Search');
        }
        this.errormsg = false;
      }
    );
  }
  ngOnDestroy() {
    console.log("Single country component destroyed");
  }
}
