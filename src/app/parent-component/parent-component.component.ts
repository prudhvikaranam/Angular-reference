import { Component, OnInit,ViewEncapsulation, HostListener, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  // encapsulation : ViewEncapsulation.Native
})
export class ParentComponentComponent implements OnInit, AfterViewInit {

  propertyFromParent : string = 'Parent Component';

  childClassProperty = "background colorWhite";
  outputMethod : string;

  inputValue : string = 'Pragim';

  childButtonName : string = 'Add New Item';
  
  user3 = {idd: 'John'}
  user2 = {idd: 'Jane'}


  @ViewChild('viewChild') viewChildProperty : ElementRef;
  constructor() { }
  
  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.viewChildProperty);
    
    this.viewChildProperty.nativeElement.focus();
  }



  parentMethod(data){
    this.outputMethod = data;
  }
  @HostListener('mouseenter')
  onmouseenter(){
    console.log('Dom mouse entered');
  }
}
