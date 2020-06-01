import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChildComponent } from './child.component';
import { AppService } from './app.service';

import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { NotFoundComponent } from './not.found.component';
import { UserIDComponent } from './userid.component';
import { CanActivateService } from './can.activate.service';
import { CanDeactivateService } from './can.deactivate.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: UserComponent, canActivate: [CanActivateService], 
canDeactivate: [CanDeactivateService]},
  {path: 'user/:id', component: UserIDComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent, ChildComponent, HomeComponent, UserComponent, NotFoundComponent,
    UserIDComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AppService, CanActivateService, CanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
