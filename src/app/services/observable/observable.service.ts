import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as RX from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ObservableService {
  private subject = new RX.Subject(); // or new Subject(), since we have import as everything as RX we did that
  subject$ = this.subject.asObservable();

  private subject2 = new RX.BehaviorSubject("First"); // Behavior Subject

  private subject3 = new RX.ReplaySubject(4);

  constructor(private http : HttpClient) {
    // console.log(RX);
  }

  dummyData = [
    {
      id: 1,
      course: "Angular",
    },
    {
      id: 2,
      course: "React",
    },
    {
      id: 3,
      course: "Javascript",
    },
    {
      id: 4,
      course: "Redux",
    },
    {
      id: 5,
      course: "Node Js",
    },
  ];

  getData(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/commentsss');
    // return this.http.get(' http://localhost:3000/comments');

  }

  newObservable() {
    let observable = Observable.create((observer) => {
      try {
        observer.next("Hello");
        observer.next("How are you?");
        setInterval(() => {
          observer.next(`I'm Good`);
        }, 2000);
        // observer.complete();
      } catch (err) {
        observer.error(err);
      }
    });
    return observable;
  }

  coldObservable() {
    let coldObservable = new Observable((observer) => {
      observer.next(Math.random());
    });
    return coldObservable;
  }

  number = Math.random();

  hotObservable() {
    let hotObservable = new Observable((observer) => {
      observer.next(this.number);
    });
    return hotObservable;
  }

  subjectMethod(value) {
    this.subject.next(value);
  }

  // subjectBehaviour() {
  //   this.subject2.next(`Hello I'm a Subscriber`);
  //   this.subject2.next(`Hello I'm a Subscriber 2`);
  //   this.subject2.next(`Hello I'm a Subscriber 3`);
  //   this.subject2.next(`Hello I'm a Subscriber 4`);
  //   this.subject2.next(`Hello I'm a Subscriber 5`);
  //   setTimeout(() => {
  //     this.subject2.next(`Hello I'm a Subscriber 6`);
  //   }, 2000);
  //   return this.subject2.asObservable();
  // }

  // replaySubject() {
  //   this.subject3.next("This is in Replay Subject 1");
  //   this.subject3.next("This is in Replay Subject 2");
  //   this.subject3.next("This is in Replay Subject 3");
  //   this.subject3.next("This is in Replay Subject 4");
  //   this.subject3.next("This is in Replay Subject 5");
  //   return this.subject3.asObservable();
  // }

  // ---------------second set

  sObservable() {
    let sObservable = RX.Observable.create((observable) => {
      observable.next("Hello Observer");
      observable.next(`How are you? I'm Observable`);
      setInterval(() => {
        observable.next(`I won't leave you until you unsubscribe me`);
      }, 2000);
    });
    return sObservable;
  }
}
