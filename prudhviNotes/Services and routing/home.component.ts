import {Component} from '@angular/core';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    ngOnDestroy() {
        console.log('Home Component Destroyed');
    }
}