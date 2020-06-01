import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: './user.component.html'
})
export class UserComponent {
    constructor(public router: Router) {}

    login() {
        this.router.navigate(['user', 'mohan']);
    }
}