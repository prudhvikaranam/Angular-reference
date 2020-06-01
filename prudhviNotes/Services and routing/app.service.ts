import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
    userName = 'John';
    constructor() {
        console.log('inside AppService Constructor');
    }
}