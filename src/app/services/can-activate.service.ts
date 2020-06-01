import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoggedInService } from './logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate{

  // userLoggedIn : boolean;
  constructor(private logService : LoggedInService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
    if(this.logService.loggedIn){
      // this.userLoggedIn = true;
      return true;
    }else{
      window.alert('Sorry, You are not authorized to view the Page');
      // this.userLoggedIn = false;
       return false;
    }
  }

}
