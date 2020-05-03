import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestcountriesHttpService } from '../restcountries-http.service';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnInit, OnDestroy {

  public allCountries = [];
  public allCountriesByCurrency;
  JSON: any;
  errormsg: boolean = false;
  constructor(private _route: ActivatedRoute, private router: Router, public _http: RestcountriesHttpService) {
    this.JSON = JSON;
    console.log("All countries component constructor is  called");
  }

  ngOnInit() {

    this._route.params.subscribe(param => {
      const searchBy = this._route.snapshot.paramMap.get('searchBy');
      const searchVal = this._route.snapshot.paramMap.get('searchVal');

      this.getCountryBySearch({ searchRadio: searchBy, search: searchVal });
    });
    // this.getCountryByRegion();
    // this.getCountryByCurrency();
    // this.getCountryByLanguage();
  }


  // to get countries of same region
  getCountryBySearch(queryParams) {
    this._http.getAllCountriesBySearch(queryParams).subscribe((data) => {
      console.log(data);
      this.allCountries = data.body;
      console.log('countries: ', this.allCountries);
      console.log(this.errormsg);
      this.errormsg = false;
    },
      error => {
        this.errormsg = true;
        console.log(this.errormsg);
        console.log(error.errorMessage);
        //alert(error.errorMessage);

        if (error.errorMessage === undefined) {
          alert('Invalid Search');
        }
        this.errormsg = false;
      }
    );
    console.log("All countries component ngOninite is called");
  }
  ngOnDestroy() {
    console.log("All countries component destroyed");
  }
}
