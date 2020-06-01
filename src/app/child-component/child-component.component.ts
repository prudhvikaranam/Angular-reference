import { Component, OnInit, Input,Output,EventEmitter,SimpleChanges,OnChanges  } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit, OnChanges {

  @Input()
  propertyFromChild;

  @Input() 
  propertyforInput : string;

  @Input() 
  buttonName;
  
  @Output()
  notify : EventEmitter<string> = new EventEmitter<string>();

  childColorClass = true;
  
  

  constructor() { }

  ngOnChanges(changes : SimpleChanges){
    // console.log(changes.propertyforInput.currentValue);
    for(var values in changes){
      console.log(changes[values]);
      let change = changes[values];
      let currentValue = change.currentValue;
      let previousValue = change.previousValue;
      console.log(`Current Value is : ${currentValue}`);
      console.log(`Previous Value is : ${previousValue}`);
    } 
  }
  ngOnInit() {
  }

  childMethod(){
    this.notify.emit('This is a string from Child which is getting through emit process');
  }

}
