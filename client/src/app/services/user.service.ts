import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Users } from '../modules/users';
import { Company } from '../modules/company';
import { About } from '../modules/about';
import { Products } from '../modules/products';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  	constructor( private http: Http ) {}

  

  	private baseUrl = 'http://localhost:8000'; 

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

    insertinfo(body: Company): Observable<Company[]>{
   
        let bodyString = JSON.stringify(body); 
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options       = new RequestOptions({ headers: headers }); 

        let body2 = 'data=' + encodeURIComponent(bodyString);
        console.log(bodyString);
        let url = this.baseUrl+"/info";
        return this.http.post(url, body2, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }

    insertabout(body: About): Observable<About[]>{
   
        let bodyString = JSON.stringify(body); 
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options       = new RequestOptions({ headers: headers }); 

        let body2 = 'data=' + encodeURIComponent(bodyString);
        console.log(bodyString);
        let url = this.baseUrl+"/about";
        return this.http.post(url, body2, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    
}

insertproducts(body: Products): Observable<Products[]>{
   
        let bodyString = JSON.stringify(body); 
        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options       = new RequestOptions({ headers: headers }); 

        let body2 = 'data=' + encodeURIComponent(bodyString);
        console.log(bodyString);
        let url = this.baseUrl+"/products";
        return this.http.post(url, body2, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }
}

