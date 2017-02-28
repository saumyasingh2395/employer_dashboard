import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx'
import { UserService } from '../user.service';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  user: Users[]=[];

  constructor(private userService: UserService, private router: Router ) {

   }

  

  ngOnInit() {
  	
  	
  }

  signup(){
    console.log("hi");
   

      this.userService.create(this.user).subscribe(
        data => {
            this.router.navigate(['/dashboard']);
          },
         error =>{
                console.log(error);
            }
        );
  	 }

    
}


