import { Component, OnInit } from '@angular/core';
import { About } from '../about';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./styles/styles.css']
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
