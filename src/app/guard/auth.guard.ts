import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
    
    constructor(
        private _authService: AuthService,
        private _router: Router
    ){}

    canActivate(){
        if (localStorage.getItem('id') !== null ) {
            return true;
        } else {
            this._router.navigate(['']);
            return false;
        }
    }
}