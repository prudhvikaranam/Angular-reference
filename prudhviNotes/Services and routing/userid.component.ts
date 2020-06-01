import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './userid.component.html'
})
export class UserIDComponent {

    id;

    constructor(public route: ActivatedRoute) {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.route.paramMap.subscribe((data) => {
            console.log( 'From Subscribe: ', data.get('id'));
            this.id = data.get('id');
        })
    }

}