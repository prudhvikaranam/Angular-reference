import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeess',
  templateUrl: './employeess.component.html',
  styleUrls: ['./employeess.component.css']
})
export class EmployeessComponent implements OnInit {

    employeeList : employee[];

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employeeList = [
      {
        id : 1,
        name : 'Prudhvi'
      },
      {
        id : 2,
        name : 'Teja'
      },
      {
        id : 3,
        name : 'Karanam'
      }
    ]
    

  }

  onLoadPage() {
    // this.router.navigate(['Home'], {relativeTo : this.activeRoute});
    // this.router.navigate(['Home']);
    this.router.navigate(['/Home', 'dummypage']);
  }
}

 interface employee {
  id : number,
  name : string,
  age ?: number
}
