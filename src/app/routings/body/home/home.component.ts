import { Component, OnInit, HostListener } from '@angular/core';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colorName : string;
  generatedNumber : number = Math.random();
  stylesToApply = 'color font background'; //This are defined in style.css file
  colorToApply = true;
  employees = []
  loremColor: string;

  constructor() { }

  ngOnInit() {
    if(this.generatedNumber > 0.5){
      this.colorName = 'red';
    }else{
      this.colorName = 'green';
    }
    console.log(this.generatedNumber);

    this.employees = [
      {name : 'teja',age : 25,country : 'India'},
      {name : 'abc',age : 215,country : 'Iasdsadndia'},
      {name : 'aqweq',age : 231,country : 'aadsa'},
      {name : 'qwer',age : 21,country : 'Inqwrwdia'},
      {name : 'ertteja',age : 1212,country : 'Iasdsadndia'}
    ]
    
  }

  @HostListener('click')
  click() {
    const somes  = document.getElementsByClassName('some') as HTMLCollectionOf<HTMLElement>; 
    for (let i = 0; i < somes.length; i++) {
      somes[i].style.display = 'none';
    }
  }

  onClick(){
    this.colorToApply = !this.colorToApply;
  }

  onReload(){
    this.employees = [
      {name : 'teja',age : 25,country : 'India'},
      {name : 'abc',age : 215,country : 'Iasdsadndia'},
      {name : 'aqweq',age : 231,country : 'aadsa'},
      {name : 'qwer',age : 21,country : 'Inqwrwdia'},
      {name : 'ertteja',age : 1212,country : 'Iasdsadndia'},
      {name : 'teja',age : 25,country : 'India'},
      {name : 'abc',age : 215,country : 'Iasdsadndia'},
      {name : 'aqweq',age : 231,country : 'aadsa'},
      {name : 'qwer',age : 21,country : 'Inqwrwdia'},
      {name : 'ertteja',age : 1212,country : 'Iasdsadndia'}
    ]
  }
  
  trackBy(index,emp){
    return emp.country;    
  }


}
