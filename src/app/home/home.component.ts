import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RestcountriesHttpService } from '../restcountries-http.service';
import { AllcountriesComponent } from '../allcountries/allcountries.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchItem = null;
  // Dummy Array
  public regionNames: any = [
    {
      regionName: 'Africa',
      image: 'https://static.wixstatic.com/media/7677bd_e1afff96ad794b87bc73f35713f972ca.jpg/v1/fill/w_636,h_372,al_c,q_80,usm_0.66_1.00_0.01/7677bd_e1afff96ad794b87bc73f35713f972ca.webp',
    }, {
      regionName: 'Americas',
      image: 'https://s3-us-east-2.amazonaws.com/largefs-luxedb/luxedb/wp-content/uploads/2011/04/Discover-New-York-City-at-Night-9.jpg',
    },
    {
      regionName: 'Asia',
      image: 'https://cdn.pixabay.com/photo/2016/05/18/16/14/taj-mahal-1400824_960_720.jpg',
    },
    {
      regionName: 'Europe',
      image: 'https://silvertrips.in/wp-content/uploads/2018/06/erope1.jpg',
    },
    {
      regionName: 'Oceania',
      image: 'https://www.femalefirst.co.uk/image-library/land/500/s/sydney-opera-house---flickr---szeke.jpg',
    },
  ];
  constructor(private _route: ActivatedRoute, private router: Router, private restcountriesHttpService: RestcountriesHttpService) {
    console.log('Home component constructor called.');
  }

  ngOnInit() {
    console.log('home component ngOninit is called');
  }

  ngOnDestroy() {
    console.log('Home component destroyed');
  }
  onKey(value: string) {
    this.searchItem += value + ' | ';
  }



}
