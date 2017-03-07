import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx'
import { UserService } from '../services/user.service';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  user = {
        name : "",
        email:  "",
        password:  "",
        phone: "",
        designation:  "",
        organisation: ""
  };

  constructor(private userService: UserService, private router: Router ) {
   }

  

  ngOnInit() {  	
  }

  signup(){
      this.userService.create(this.user).subscribe(
        data => {
            this.router.navigate(['/login']);
          },
         error =>{
                console.log(error);
            }
        );
  	 }

    
}


