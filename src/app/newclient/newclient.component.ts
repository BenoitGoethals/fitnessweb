import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Client} from '../client';
import { FlashMessagesService } from 'angular2-flash-messages';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent {

   client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
     language: ''
   };

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  private value: any = {};
  private _disabledV = '0';
  private disabled = false;


  public countries: any[];


  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private countryService: CountryService

  ) {
   // this.flashMessagesService = flashMessages;
    // .subscribe(resHerbsData => this.herbs = resHerbsData);
    this.countryService.getCountrys().subscribe(res =>this.countries = res);
    console.log(this.countries);

  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {

    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', {
        cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['newclient']);
    } else {

      this.flashMessagesService.show('New client added', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    }
  }

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  onchangeCountry(event) {
    this.client.country = event.value;
    console.log("-->"+event);
  }
}
