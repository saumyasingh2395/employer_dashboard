import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	 //  company = {
  //        name:"",
  //       website: "",
  //       headquarters: "",
  //       total_employees: 0,
  //       company_type: "",
  //       founding_date: 0,
  //       industry: ""
  // };

  constructor() { }

  ngOnInit() {

  }

  // info(){
  //     this.userService.insertinfo(this.company).subscribe(
  //       data => {
  //           this.router.navigate(['/about']);
  //         },
  //        error =>{
  //               console.log(error);
  //           }
  //       );
  // 	 }

}
