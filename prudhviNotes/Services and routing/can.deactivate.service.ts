import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';

@Injectable() 
export class CanDeactivateService implements CanDeactivate<boolean> {
    canDeactivate() {
        return false;
    }
}