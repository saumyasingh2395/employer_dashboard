import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	model: any = {};
    loading = false;
    ;
	
  constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}

  ngOnInit() {
  	// reset login status
        this.authenticationService.logout();

     
  }

login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    console.log("error !!!!!");
                    this.loading = false;
                });
    }

}

