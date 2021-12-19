import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: {
    id: number,
    name: string,
    allow: any,
    admin : any
 };

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // this.employee = {
    //   id : this.router.snapshot.params['id'],
    //   name : this.router.snapshot.params['name']
    // };
    // this.router.params.subscribe((currentparams) => {
    //   this.employee.id = currentparams['id'];
    //   this.employee.name = currentparams['name'];
    // }); or below    
    
    // this.router.params.subscribe((currentParams) => {
    //   // this.employee = {
    //   //   id : currentParams['id'],
    //   //   name : currentParams['name']
    //   // }
    // })

    // // console.log(this.router.snapshot.queryParams);
    // this.router.queryParams.subscribe((queryparams) => {
    //   this.employee.allow = queryparams['allowEdit'];
    //   this.employee.admin = queryparams['isAdmin'];
    // })
  }

}
