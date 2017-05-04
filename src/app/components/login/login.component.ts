import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    public users;
    public status: string;
    public errorMessage;
    public elements;
    public username: string;
    public password: string;

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _flashMessages: FlashMessagesService
    ) { }

    ngOnInit() {
        this.status = 'cerrado'
        if (localStorage.getItem('id') !== null) {
            this._router.navigate(['home']);
        }
    }


    onSubmit() {
        const user = {
            username: this.username,
            password: this.password
        }

        if (user.username != undefined && user.password != undefined) {
            this._authService.getUserByUsername(user.username).subscribe(data => {
                data.forEach(element => {
                    this.users = element
                });
                console.log(this.users);
                if (this.users !== undefined) {
                    if (user.password !== this.users.password.toString()) {
                        this._router.navigate(['']);
                        this._flashMessages.show('Contraseña incorrecta', {
                            cssClass: 'alert alert-danger',
                            timeout: 3000
                        })
                    }
                    else {
                        this._authService.storeUserData(this.users.UserId)
                        this._router.navigate(['home']);
                        this.status = 'iniciado'
                    }
                } else {
                    this._router.navigate(['']);
                    this._flashMessages.show('Usuario inexistente', {
                        cssClass: 'alert alert-danger',
                        timeout: 3000
                    })
                }

            });
        } else if (user.username == undefined) {
            this._flashMessages.show('Ingrese usuario', {
                cssClass: 'alert alert-danger',
                timeout: 3000
            })
        } else if (user.password == undefined) {
            this._flashMessages.show('Ingrese Contraseña', {
                cssClass: 'alert alert-danger',
                timeout: 3000
            })
        } else {
            this._flashMessages.show('rellene los campos', {
                cssClass: 'alert alert-danger',
                timeout: 3000
            })
        }

    }

}
