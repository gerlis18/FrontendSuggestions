import { Component, OnInit } from '@angular/core';
import { SugerenceService } from '../../services/sugerence.service';
import { Router } from '@angular/router';
import { Sugerence } from '../../model/sugerence';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sg-person',
  templateUrl: './sg-person.component.html',
  styleUrls: ['./sg-person.component.css']
})
export class SgPersonComponent implements OnInit {
  protected sugerence;
  protected relSug: Sugerence[];
  protected userR: string;
  protected title;
  protected dataService: CompleterData;
  protected searchData;
  protected selectedUser;

  constructor(
    private _sugerenceService: SugerenceService,
    private _router: Router,
    private _flashMessages: FlashMessagesService,
    private _completerService: CompleterService,
    private _authService: AuthService
  ) {
    //this.dataService = _completerService.local(this.searchData, 'color', 'color');
  }

  ngOnInit() {
    this.completeUser();
  }

  onSubmit() {
    var dateNow = new Date().toJSON();
    const sugerence = {
      mensaje: this.sugerence,
      creacion: this.fecha(),
      titulo: this.title
    }

    if (this.title != undefined && this.userR != undefined && this.sugerence != undefined) {
      this._sugerenceService.sendSugerence(sugerence).subscribe(
        data => {
          const relSugerence = {
            UserSugerenceId: data.SugerenceId,
            UserEId: localStorage.getItem('id'),
            UserRId: this.selectedUser.UserId
          }

          if (!data.success) {
            this._sugerenceService.relSugerence(relSugerence).subscribe(data => {
              if (!data.success) {
                this._flashMessages.show('Se ha guardado correctamente tu sugerencia', {
                  cssClass: 'alert alert-dismissible alert-success',
                  timeout: 3000
                })
              }
            });
            //this._router.navigate(['home']);
          } else {
            alert('ocurrio un error');
          }
          this.title = '';
          this.userR = '';
          this.sugerence = '';
        }
      );
    } else {
      this._flashMessages.show('Rellene los campos', {
        cssClass: 'alert alert-dismissible alert-danger',
        timeout: 3000
      })
    }


  }

  completeUser() {
    this._authService.getUser().subscribe(
      data => {
        this.searchData = data;
        this.dataService = this._completerService.local(this.searchData, 'Nombre', 'username');
        this.dataService.subscribe(
          data => {
            data.forEach(element => {
              this.selectedUser = element.originalObject
            })
          }
        );
      },
      error => {

      }
    );
  }

fecha(){
    let time = new Date().toLocaleTimeString();
    let fecha = new Date().toLocaleDateString();
    return fecha+' '+time;
  }

}
