import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa';
  userName = 'pruthvi';
  constructor(public appS: AppService) {
    console.log('Inside App Component: ', this.appS.userName);
    this.appS.userName = 'Jane';
  }
}
