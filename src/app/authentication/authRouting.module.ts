import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthAdminComponent } from './components/auth-admin/auth-admin.component';
import { LogOutComponent } from './components/log-out/log-out.component';

const authRoutes : Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'main', component : MainComponent},
    {path : 'login', component : AuthLoginComponent},
    {path : 'admin',component : AuthAdminComponent},
    {path : 'home', component : AuthHomeComponent}
]

@NgModule({
    imports : [RouterModule.forChild(authRoutes)],
    exports : [RouterModule],
    declarations: [LogOutComponent]
})

export class authRoutingModule{

}
