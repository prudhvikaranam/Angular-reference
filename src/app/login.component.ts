import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInService } from './services/logged-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private LoggedInService : LoggedInService,
              private router : Router) { }

  ngOnInit() {

  }

  onLogin(){
    this.LoggedInService.loggedIn = true;
    this.router.navigate(['main']);
  }

}
