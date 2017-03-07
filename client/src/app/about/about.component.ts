import { Component, OnInit } from '@angular/core';
import { About } from '../modules/about';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	
	about = {
        vision: "",
        mission: "",
        about_us: ""
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  aboutus(){
      this.userService.insertabout(this.about).subscribe(
        data => {
            this.router.navigate(['/dashboard/products']);
          },
         error =>{
                console.log(error);
            }
        );
  	 }


}
