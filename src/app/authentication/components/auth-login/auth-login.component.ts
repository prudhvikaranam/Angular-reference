import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthServiceService } from "src/app/services/Authentication/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.css"],
})
export class AuthLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private AuthServiceService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [""],
      password: [""],
    });
  }

  onSubmit(values) {
    this.AuthServiceService.logIn(values).subscribe((data: any) => {
      if (data) {
        this.router.navigate(['/authentication/profile']);
      }else{
        alert('Invalid');
      }
    });
  }
}
