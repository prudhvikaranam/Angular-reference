import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./body/home/home.component";
import { EmployeeComponent } from "./body/employee/employee.component";
import { AdminComponent } from "./body/admin/admin.component";
import { ContactComponent } from "./body/contact/contact.component";
import { NotfoundComponent } from "./body/notfound/notfound.component";
import { EmployeessComponent } from "./body/employeess/employeess.component";
import { ConceptsComponent } from "./body/concepts/concepts.component";
import { ParentComponentComponent } from "../parent-component/parent-component.component";
import { CanActivateService } from "../services/can-activate.service";
import { MainComponent } from "../authentication/components/main/main.component";
import { AuthLoginComponent } from "../authentication/components/auth-login/auth-login.component";
import { AuthHomeComponent } from "../authentication/components/auth-home/auth-home.component";
import { AuthAdminComponent } from "../authentication/components/auth-admin/auth-admin.component";
import { Homerouter1Component } from "./body/home/homerouter1/homerouter1.component";
import { Homerouter2Component } from "./body/home/homerouter2/homerouter2.component";
import { LogOutComponent } from "../authentication/components/log-out/log-out.component";

const route: Routes = [
  { path: "", pathMatch: "full", redirectTo: "Home" },
  {
    path: "Home",
    component: HomeComponent,
    children: [
      { path: "router1", outlet: "nrouter1", component: Homerouter1Component },
      { path: "router2", outlet: "nrouter2", component: Homerouter2Component },
    ],
  },
  { path: "Employee/:id/:name", component: EmployeeComponent },
  { path: "Employees", component: EmployeessComponent },
  { path: "Admin", component: AdminComponent },
  {
    path: "Contact",
    component: ContactComponent,
    canActivate: [CanActivateService],
  },
  { path: "Concepts", component: ConceptsComponent },
  { path: "parentChild", component: ParentComponentComponent },
  {
    path: "authentication",
    component: AuthLoginComponent,
    children: [
      {
        path: "profile",
        component: MainComponent,
        children: [
          { path: "admin", component: AuthAdminComponent },
          { path: "home", component: AuthHomeComponent },
          { path: "logout", component: LogOutComponent },
          { path: "login", component: AuthLoginComponent }
        ],
      },
    ],
  },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
  declarations: [
    NotfoundComponent,
    ConceptsComponent,
    Homerouter1Component,
    Homerouter2Component,
  ],
})
export class AppRoutingModule {}
