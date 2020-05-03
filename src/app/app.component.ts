import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { RestcountriesHttpService } from './restcountries-http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restcountry';
  constructor(public location: Location, private router: Router, private restcountriesHttpService: RestcountriesHttpService) {
    console.log("app component constructer is called");
  }

  // goback to previous location
  public goBackToPreviousLocation() {
    this.location.back();
  }

  searchByCountry(f: NgForm) {
    console.log(f.value.searchRadio);
    console.log(f.value.search);
    this.router.navigateByUrl(`allcountries/${f.value.searchRadio}/${f.value.search}`);
    // this.restcountriesHttpService.getAllCountriesBySearch(f.value)
    //   .subscribe(data => {
    //       console.log(data);
    //     });
  }
}