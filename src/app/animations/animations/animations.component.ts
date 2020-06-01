import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-animations",
  templateUrl: "./animations.component.html",
  styleUrls: ["./animations.component.css"],
  animations: [
    trigger("fadeIn", [
      transition("void => *", [
        style({
          background: "red",
          opacity: 0,
        }),
        animate('5s', style({ background: "yellow", opacity: 1 })),
      ]),
    ]),

    trigger("fadeOut", [
      // state("void", style({ opacity: 0 })),

      // transition("void => *, * => void", [animate(2000)]),
      // or
      // transition("void <=> *", [animate(2000)]),
      // or

      // transition(':enter, :leave', [animate(2000)]),

      transition('void => *', [animate('2s ease-in', style({transform : 'translateX(00%)'}))]),
      transition('* => void', [animate('2s ease-in', style({transform : 'translateX(100%)'}))])


    ]),
  ],
})
export class AnimationsComponent implements OnInit {
  sampleArray = ["One", "two", "three"];
  constructor() {}

  ngOnInit() {}

  add(item) {
    this.sampleArray.push(item);
  }

  delete(item) {
    let itemIndex = this.sampleArray.indexOf(item);
    this.sampleArray.splice(itemIndex, 1);
  }
}
