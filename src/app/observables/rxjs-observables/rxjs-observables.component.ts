import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ObservableService } from "src/app/services/observable/observable.service";
import { Router } from "@angular/router";
import { of, Subscription, interval, timer, fromEvent, observable, Observable, concat, merge, Subject } from "rxjs";

import { map, filter, concatMap, mergeMap, tap, takeUntil, exhaustMap, shareReplay, debounce, debounceTime, distinctUntilChanged, switchMap, retryWhen, delayWhen,throttleTime  } from "rxjs/operators";

@Component({
  selector: "app-rxjs-observables",
  templateUrl: "./rxjs-observables.component.html",
  styleUrls: ["./rxjs-observables.component.css"],
})
export class RxjsObservablesComponent implements OnInit, AfterViewInit {
  subscription: Subscription;

  currentValue: any = 0;

  makeSingleCall: any;


  subject = new Subject();
  subject$ = this.subject.asObservable();
  debounceSubscribe: any;

  constructor(
    private observableService: ObservableService,
    private router: Router
  ) { }

  ngOnInit() {
    // **************************** Interval is an observable which triggers certain task for the mentioned time intervals
    // const interval$ = interval(1000);
    // this.subscription = interval$.subscribe((data) => {
    //   console.log("Hello word, I'm running for every second",data)
    //   if(data == 10){
    //     this.subscription.unsubscribe();
    //   }
    // });




    // **************************** Timer is an observable which triggers certain task as per the parameters passed
    // const timer$ = timer(3000,1000); // timer('initial delay','actual seconds to trigger the script')
    // this.subscription = timer$.subscribe((data) => {
    //   console.log(data,new Date())
    // });


    //emit 0 after 2 seconds then complete, since no second argument is supplied
    // const timer$ = timer(2000);
    // timer$.subscribe(data => console.log('Timer with one parameter',data))




    // **************************** fromEvent first parameter is the source where event should be applied and second on what basis event should be triggered
    // const click = fromEvent(document,'click')
    // click.subscribe((event) => {
    //   console.log(event);
    // })





    // shareReplay This will make sure call is happend only one time even after subscription call is triggered multiple times
    // this.makeSingleCall = this.observableService.getData().pipe(shareReplay())



    // **************************** Concat is used to concat the multiple OBSERVABLES and the result is also observable, hence we need to subscribe to that and ******** using concat if we get any error on the first observable then other's are failed and it happens one by one

    // In the below example second observable is not started until first is completed

    // const source = interval(1000);
    // const timer$ = timer(5000);
    // const example = source.pipe(takeUntil(timer$));

    // let def = of(14,5,6);
    // let ghi = of(17,8,9);


    // let abc = concat(example,def,ghi);

    // abc.subscribe((data) => console.log(data))






    // **************************** Concat map is used to make api calls consecutively (one after another), If first is failed then second is not started, To test try giving wrong URL in getData Method


    // fromEvent(document,'click').pipe(
    //   concatMap(data => {
    //          return this.observableService.getData()
    //   })
    // ).subscribe((data) => {
    //       console.log(data);
    // });



    // **************************** Merge (Unlike concat it does not depend on the first one, it starts executing simultanously)

    // const source = interval(1000);
    // const timer$ = timer(5000);
    // const example = source.pipe(takeUntil(timer$));

    // let def = of(14,5,6);
    // let ghi = of(17,8,9);


    // let abc = merge(example,def,ghi);

    // abc.subscribe((data) => console.log(data));



    // **************************** mergeMap for parallel request

    // fromEvent(document,'click').pipe(
    //   mergeMap(data => {
    //          return this.observableService.getData()
    //   })
    // ).subscribe((data) => {
    //       console.log(data);
    // });


    // Exhaust Map // waits until we receive response for the previous call
    // fromEvent(document, 'click').pipe(
    //   exhaustMap(data => {
    //     return this.observableService.getData()
    //   })
    // ).subscribe((data) => {
    //   console.log(data);
    // });









    // Some other methods are below
    // debounceMethod
    // will call method or do something until values are stabilized for given milliseconds b/w the two events, In below example values will not be consoled if we enter something continously, if we stop for 1 second the only value will be consoled. It is helpful if we want to make search something through API call and will reduce number of call's.navbar-expand


    this.debounceSubscribe = this.subject$.pipe( // This is using Subject method, check for valueChange method
      map((data) => {
        return data;
      }),
      debounceTime(1000)
    )





  }


  ngAfterViewInit() {



    // switchMap: when used it cancels the ongoing previous call if the new call is happened on the same API
    // let inputKey = document.getElementById('inputKey');

    // fromEvent(inputKey,'keyup').pipe(
    //   map(data => data),
    //   switchMap((data) => this.observableService.getData())
    // ).subscribe();

    // switchMap ends



    // Debounce method using fromEvent
    // let inputKey = document.getElementById('inputKey');

    // fromEvent(inputKey, 'keyup').pipe(
    //   map((data : any) => {
    //     return data.target.value
    //   }),
    //   debounceTime(1000),
    //   distinctUntilChanged()

    // ).subscribe((data) => {
    //   console.log(data);
    // }
    // );
    // DEbounce ends here





    // throttling 

    // let inputKey = document.getElementById('inputKey');

    // fromEvent(inputKey, 'keyup').pipe(
    //   map((data : any) => {
    //     return data.target.value
    //   }),
    //   throttleTime(2000),
    // ).subscribe((data) => {
    //   console.log('Throttling',data);
    // }
    // );

    // throttling ends here



    // retryWhen() method is used to retry the observable method when it gets failed, delayWhen is used to wait to the mentioned ms and then retry again.
    // this.observableService.getData().pipe(
    //   retryWhen((errors) => {
    //     return errors.pipe(
    //       delayWhen(() => timer(2000))
    //     )
    //   })
    // ).subscribe();
    // retryWhen ends here



  }

  valueChange(value) { // Debounce method using subject susbcription method.

    this.subject.next(value);

    this.debounceSubscribe.subscribe((data) => {
      console.log(data);
    })
  }


  makeCall() {  //to test shareReplay 
    this.makeSingleCall.subscribe((data) => {
      console.log('First Call');
    })
    this.makeAnotherCall();
  }

  makeAnotherCall() { //to test shareReplay 
    this.makeSingleCall.subscribe((data) => {
      console.log('Second Call');
    })
  }










  ngOnInit1() {
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
    // this.observableService.subject$.subscribe((data) => {
    //   console.log(`Component ngOnInit: ${data}`);
    // })



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

  // valueChange(value){
  //   this.observableService.subjectMethod(value);
  // }

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
