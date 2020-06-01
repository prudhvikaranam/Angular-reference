import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateService } from 'src/app/services/can-activate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private canActivateService : CanActivateService) { }

  ngOnInit() {
    // console.log(this.canActivateService.logService.loggedIn);
  }

}
