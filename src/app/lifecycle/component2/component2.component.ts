import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-component2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.css"],
})
export class Component2Component implements OnInit, OnChanges {

  @Input("c2IncomingFirstValueAlias") c2IncomingFirstValue;
  @Input("c2IncomingSecondValueAlias") c2IncomingSecondValue;


  oldValue: string = '';

  viewChildProperty : any = `Hello I'm a view child propery`;

  constructor() {}

  ngOnInit() {
    this.oldValue = this.c2IncomingFirstValue.name;
    console.log(`Comp 2 : Init`);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("on changes", changes);
  }

  ngDoCheck() {
    if (this.c2IncomingFirstValue.name !== this.oldValue) {
      console.log(
        `DoCheck: Hero name changed to "${this.c2IncomingFirstValue.name}" from "${this.oldValue}"`
      );
      this.oldValue = this.c2IncomingFirstValue.name;
    }
  }
}
