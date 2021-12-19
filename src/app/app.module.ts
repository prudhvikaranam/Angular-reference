import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Animations and Material components

// import { AnimationsComponent } from "./animations/animations/animations.component";
// import {MatCheckboxModule} from '@angular/material/checkbox';



import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./routings/header/header.component";
import { HomeComponent } from "./routings/body/home/home.component";
import { ContactComponent } from "./routings/body/contact/contact.component";
import { EmployeeComponent } from "./routings/body/employee/employee.component";
import { EmployeessComponent } from "./routings/body/employeess/employeess.component";
import { AdminComponent } from "./routings/body/admin/admin.component";
import { AppRoutingModule } from "./routings/routing.module";
import { ParentComponentComponent } from "./parent-component/parent-component.component";
import { ChildComponentComponent } from "./child-component/child-component.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomDirective } from "./custom.directive";
import { LoginComponent } from "./login.component";
import { ReactiveComponent } from "./forms/reactive/reactive.component";
import { RxjsObservablesComponent } from "./observables/rxjs-observables/rxjs-observables.component";
import { MainComponent } from "./authentication/components/main/main.component";
import { AuthLoginComponent } from "./authentication/components/auth-login/auth-login.component";
import { AuthAdminComponent } from "./authentication/components/auth-admin/auth-admin.component";
import { AuthHomeComponent } from "./authentication/components/auth-home/auth-home.component";
import { authRoutingModule } from "./authentication/authRouting.module";
import { Component1Component } from "./lifecycle/component1/component1.component";
import { Component2Component } from "./lifecycle/component2/component2.component";
import { fakeBackendProvider } from "./services/Authentication/fake-backend";

import { MockBackend } from "@angular/http/testing";

import { HttpModule, Http, BaseRequestOptions } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    EmployeeComponent,
    EmployeessComponent,
    AdminComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    CustomDirective,
    LoginComponent,
    ReactiveComponent,
    RxjsObservablesComponent,
    MainComponent,
    AuthLoginComponent,
    AuthAdminComponent,
    AuthHomeComponent,
    Component1Component,
    Component2Component,
    // AnimationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    authRoutingModule,
    ReactiveFormsModule,
    // MatCheckboxModule
  ],
  providers: [fakeBackendProvider, MockBackend, BaseRequestOptions],
  bootstrap: [AppComponent],
})
export class AppModule {}
