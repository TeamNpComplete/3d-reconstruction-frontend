import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { apiConfiguration } from '../config/api.config';

@Injectable({
    providedIn : 'root'
})
export class AuthenticationService {

    public authenticationStatus: Subject<boolean> = new Subject();
    token : String = "";
    isLoggedIn: boolean = false;

    constructor(private http : HttpClient) { }

    login(email : String, password : String) {
        let requestUrl = apiConfiguration.host + apiConfiguration.usersLoginRoute;

        let obj  = {
            email : email,
            password : password
        }

        return this.http.post(requestUrl, obj);
    }

    register(name : String, email : String, password : String ) {
        let requestUrl = apiConfiguration.host + apiConfiguration.usersRegistrationRoute;
        
        return this.http.post(requestUrl, { name : name, email : email, password : password});
    }

    public isAuthenticated() {
        return this.isLoggedIn && this.token !== "";
    }

    public sendAuthenticationStatus(value: boolean) {
        if(!value) {
            this.token = '';
        }

        this.isLoggedIn = value;
        this.authenticationStatus.next(value);
    }

    public getAuthenticationStatus() {
        return this.authenticationStatus;
    }
}
