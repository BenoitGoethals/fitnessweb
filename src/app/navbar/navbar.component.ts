import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string;
  password: string;


  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.userName, this.password)
     // .then((res) => {
       // this.flashMessagesService.show('You are logged in', {
       //   cssClass:'alert-success', timeout: 4000
       // });
      //  this.router.navigate(['/']);
     // })
   //  .catch((err) => {
     //   this.flashMessagesService.show(err.message, {
       //   cssClass:'alert-danger', timeout: 4000
     //   });
       // this.router.navigate(['/']);
     // });
  }
}
