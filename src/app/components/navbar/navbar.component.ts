import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  protected UserName;
  protected userId;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) {
    this.UserName = 'Cargando...'
  }

  ngOnInit() {
    if (this.log()) {
      this.getUserName();
    }
    
  }

  onLogout() {
    this._authService.logOut();
    this._router.navigate(['']);
  }

  log() {
    if (localStorage.getItem('id') !== null) {
      this.userId = localStorage.getItem('id');
      return true
    } else {
      return false
    }
  }

  getUserName() {
    this._authService.getUserById(localStorage.getItem('id')).subscribe(
      data => {
        data.forEach(element => {
          this.UserName = element.Nombre + " " + element.Apellido;
        });
      },
      error => {
        this.UserName = 'Cargando...'
      }
    )
  }

}
