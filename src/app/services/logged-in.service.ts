import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  loggedIn : boolean = false;
  constructor() { }
}
