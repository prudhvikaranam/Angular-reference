import { Component, OnInit } from "@angular/core";
import { ObservableService } from "src/app/services/observable/observable.service";
import { Router } from "@angular/router";
import { of, Subscription } from "rxjs";

import { map, filter } from "rxjs/operators";



@Component({
  selector: "app-rxjs-observables",
  templateUrl: "./rxjs-observables.component.html",
  styleUrls: ["./rxjs-observables.component.css"],
})
export class RxjsObservablesComponent implements OnInit {
  
  subscription : Subscription;

  currentValue : any = 0;
  constructor(private observableService: ObservableService,private router : Router) {}

  ngOnInit() {
    // let abc = this.observableService.newObservable().subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(`Error is ${error}`);
    //   },
    //   () => {
    //     console.log("All events received");
    //   }
    // );

    // setTimeout(() => {
    //   abc.unsubscribe();
    // }, 10000);


    // let abc2 = this.observableService.newObservable().subscribe( //If in case are subscribing multiple places
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(`Error is ${error}`);
    //   },
    //   () => {
    //     console.log("All events received");
    //   }
    // );

    // abc.add(abc2); // so that even abc2 will also get unsubscribed

    // setTimeout(() => {
    //   abc.unsubscribe();
    // }, 10000);

    // ---------------Cold Observable though we have subscribed to the same method since data is produced inside the observable we get different data because below methods will have different executions (Different execution context means observable methods are called multiple times)
    // this.observableService.coldObservable().subscribe((data) => {
    //   console.log(`Cold Observable 1 : ${data}`);
    // });

    // this.observableService.coldObservable().subscribe((data) => {
    //   console.log(`Cold Observable 2 : ${data}`);
    // });


    // ----------------------In Hot observable though below methods are having different execution context since data is  produced outside the observable it gets same data
    // this.observableService.hotObservable().subscribe((data) => {
    //   console.log(`Hot Observable 1 : ${data}`);
    // });

    // this.observableService.hotObservable().subscribe((data) => {
    //   console.log(`Hot Observable 2 : ${data}`);
    // });


    // ---------------------------Subject
    this.observableService.subject$.subscribe((data) => {
      console.log(`Component ngOnInit: ${data}`);
    })


    // ---------------------------Behavior Subject
    
    // this.observableService.subjectBehaviour().subscribe((data) => {
    //   console.log(data);
    // });


    // ---------------------------Replay Subject

    // this.observableService.replaySubject().subscribe((data) => {
    //   console.log(data);
    // })


    // this.operators();



    // ---------------Second set

    // this.subscription = this.observableService.sObservable().subscribe((data) => {
    //   console.log(data);
    // },(err) => {
    //   console.log(err)
    // },() => {
    //   console.log('completed');
    // })

    // setTimeout((message) => {
    //   this.subscription.unsubscribe();
    //   if(this.subscription.closed){
    //     console.log(`Hey Observable!You got unsubscribed, now please stop printing`);
    //   }
    // },5000,'hello')
  }


  valueChange(value){
    this.observableService.subjectMethod(value);
  }
  

  // observables(){
  //   this.observableService.subjectMethod();
  // }

  // operators(){
  //   let ops = of(1,2,3,4);
  //   let ops_value = ops.pipe(
  //     map(element => {
        
  //       return element * 3;
  //     }),
  //     filter( x => x % 2 === 0)
  //   )
  //   ops_value.subscribe((data) => {
  //     console.log(data);
  //   })    
  // }


}
