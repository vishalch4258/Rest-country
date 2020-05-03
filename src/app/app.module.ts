import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routing 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { RestcountriesHttpService } from './restcountries-http.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllcountriesComponent,
    CountryViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'allcountries/:regionName', component: AllcountriesComponent },
      { path: 'allcountries/:searchBy/:searchVal', component: AllcountriesComponent },
      { path: 'country-view/:country.name', component: CountryViewComponent },
    ], { onSameUrlNavigation: 'reload' }
    ),
    NgbModule
  ],
  providers: [RestcountriesHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


