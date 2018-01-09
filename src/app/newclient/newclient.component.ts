import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Client} from '../client';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {

   client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
   };

  langs: string[] = [
    'English',
    'French',
    'German',
  ]

  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService

  ) {
   // this.flashMessagesService = flashMessages;
  }

  ngOnInit() {
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

}
