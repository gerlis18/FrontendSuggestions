import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

    public urlBase: string;
    public users;
    constructor(
        private _http: Http
    ) {
        this.urlBase = 'http://localhost:51117'
     }

    getUser() {
         let headers = new Headers();
        return this._http.get(`${this.urlBase}/api/users`)
        .map(res => res.json());
    }

    getUserById(id) {
        return this._http.get(`${this.urlBase}/api/users?id=${id}&username=`)
        .map(res => res.json());
    }

    getUserByUsername(username){
        return this._http.get(`${this.urlBase}/api/users?id=&username=${username}`)
        .map(res => res.json());
    }

    storeUserData(id){
        localStorage.setItem('id', id);
    }

    logOut(){
       // return tokenNotExpired('id');
       localStorage.clear();
    }

    

}
