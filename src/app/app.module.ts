import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewclientComponent } from './newclient/newclient.component';
import { PageNotFoundComponent } from './navbar/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { SheduleComponent } from './shedule/shedule.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { CountryService } from './country.service';
import { HttpModule }      from '@angular/http';
import {NgSelectModule} from '@ng-select/ng-select';
import {AuthService} from './auth.service';
const appRoutes: Routes = [
  { path: 'newclient', component: NewclientComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'shedule', component: SheduleComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewclientComponent,
    PageNotFoundComponent,
    HomeComponent,
    SheduleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FlashMessagesModule.forRoot(),
    BrowserModule,
    FlashMessagesModule,
    FormsModule,

    HttpModule,
    NgSelectModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [CountryService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
