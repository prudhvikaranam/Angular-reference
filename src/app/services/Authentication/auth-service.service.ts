import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";
import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  constructor(private http: Http) {}

  logIn(request) {
    return this.http.post("/api/authenticate", JSON.stringify(request)).pipe(
      map((response) => {
        if (response.json() && response.json().token) {
          localStorage.setItem("token", response.json().token);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  idLoggedIn() {}

  logOut() {


    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      console.log(`Token deleted`);
    }else{
      console.log(`No token stored`);
    }
    return !!localStorage.getItem("token");

  }
}
