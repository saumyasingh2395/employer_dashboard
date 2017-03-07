import { Component, OnInit } from '@angular/core';
import { Company } from '../modules/company';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'info',
  templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {
	company = {
         name:"",
        website: "",
        headquarters: "",
        total_employees: 0,
        company_type: "",
        founding_date: 0,
        industry: ""
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  info(){
      this.userService.insertinfo(this.company).subscribe(
        data => {
            this.router.navigate(['/dashboard/about']);
          },
         error =>{
                console.log(error);
            }
        );
  	 }

}
