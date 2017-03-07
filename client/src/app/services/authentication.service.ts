import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {

        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post('http://localhost:8000/login', 
            JSON.stringify({ email: email, password: password }), options)
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {

        localStorage.removeItem('currentUser');
    }
}

