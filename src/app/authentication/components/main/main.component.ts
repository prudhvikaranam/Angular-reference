import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/Authentication/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService : AuthServiceService) { }

  ngOnInit() {
  }



  logOut(){
    console.log(this.authService.logOut());
  }
}
