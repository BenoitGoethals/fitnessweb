import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
@Injectable()
export class CountryService {

  constructor(private http: Http) {
  }


  public getCountrys(): Observable<any> {
    return this.http.get("./assets/countries.json")
      .map((res: any) => res.json());

  }
}
