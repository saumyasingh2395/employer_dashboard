import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Users } from './users';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  	constructor( private http: Http ) {}

  

  	private baseUrl = 'http://127.0.0.1/employer_dashboard/slimpart/public'; 

 	getAll() : Observable<Users[]> {
         return this.http.get(this.baseUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

  
	create(body: Users): Observable<Users[]>{
    console.log(body);
    
		let bodyString = JSON.stringify(body); 
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options       = new RequestOptions({ headers: headers }); 

        let body2 = 'data=' + encodeURIComponent(bodyString);
        console.log(bodyString);
        let url = this.baseUrl+"/signup";
        return this.http.post(url, body2, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
	}

}

