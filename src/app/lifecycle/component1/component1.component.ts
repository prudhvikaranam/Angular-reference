import {
  Component,
  OnInit,
  DoCheck,
  AfterViewInit,
  ViewChild,
  AfterContentInit,
} from "@angular/core";
import { Component2Component } from "../component2/component2.component";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"],
})
export class Component1Component implements OnInit, AfterViewInit,AfterContentInit {
  c1FirstValue: any = {
    name: `first value`,
  };
  c1SecondValue: string = `second value`;

  
  constructor() {}

  @ViewChild(Component2Component) parentProperty;

  ngOnInit() { 
    console.log(`Comp 1 Init: ${this.parentProperty.viewChildProperty}`);
  }

  ngAfterViewInit() {
    console.log(`Comp 2 :I'm in after view init`);
  }

  ngAfterContentInit(){
    console.log(`content`);
    
  }
}
