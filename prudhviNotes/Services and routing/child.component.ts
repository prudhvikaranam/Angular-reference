import {Component} from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'child-app',
    templateUrl: './child.component.html'
})
export class ChildComponent {

    constructor(public appService: AppService) {
        console.log('inside child component constructor');
        console.log('Inside Child Component: ', this.appService.userName)
    }

}