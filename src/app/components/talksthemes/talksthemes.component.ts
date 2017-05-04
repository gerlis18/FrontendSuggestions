import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service'
import { SugerenceService } from '../../services/sugerence.service';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var $: any;
@Component({
  selector: 'app-talksthemes',
  templateUrl: './talksthemes.component.html',
  styleUrls: ['./talksthemes.component.css']
})
export class TalksthemesComponent implements OnInit {

  public categoria;
  public categoriaId;
  public suggestionId;
  public sub;
  public posts;
  public loading;
  public serviceError;
  public suggestionSend;
  public suggestionSendPost;

  //ngModel
  public suggestionPost;
  public titlePost;

  constructor(
    private _route: ActivatedRoute,
    private _themeService: ThemeService,
    private _suggestionService: SugerenceService,
    private _flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.getTheme();
    this.loading = 'show'
  }

  getTheme() {
    this.sub = this._route.params.subscribe(
      params => {
        this.categoria = params['categoria'];

        this._themeService.getTheme(this.categoria).subscribe(
          data => {
            this.posts = data;
            this.loading = 'hide'
          },
          err => {
            this.loading = 'hide'
            this.serviceError = 'show'
          },
          () => {
            this.serviceError = 'hide'

          }
        );
      }
    );

  }

  onSubmit() {
    var dateNow = new Date().toJSON();
    var suggstion = {
      titulo: this.titlePost,
      mensaje: this.suggestionPost,
      creacion: this.fecha()
    }

    if (this.titlePost != undefined && this.suggestionPost != undefined) {
      this._suggestionService.sendSugerence(suggstion).subscribe(
        data => {
          if (!data.success) {
            this.suggestionId = data.SugerenceId
            this._themeService.getIdCategoria(this.categoria).subscribe(
              data => {
                data.forEach(element => {
                  this.categoriaId = element
                });

                this.suggestionSendPost = {
                  CategoriaId: this.categoriaId.categoriaId,
                  SugerenceId: this.suggestionId,
                  UserId: localStorage.getItem('id')
                }
                this._themeService.sendThemeSuggestion(this.suggestionSendPost).subscribe(
                  data => {
                    if (!data.success) {
                      this._flashMessages.show('Se ha guardado correctamente tu sugerencia', {
                        cssClass: 'alert alert-dismissible alert-success',
                        timeout: 3000
                      });
                      this.titlePost = '';
                      this.suggestionPost = '';
                      this.getTheme();
                    }
                  },
                  error => {
                    this._flashMessages.show('Ooops, ocurrió un error', {
                      cssClass: 'alert alert-dismissible alert-danger',
                      timeout: 3000
                    });
                  }
                );
              }
            );
          }
        }

      );
    } else {
      this._flashMessages.show('Rellene los campos', {
        cssClass: 'alert alert-dismissible alert-danger',
        timeout: 3000
      })
    }

  }

  fecha() {
    let time = new Date().toLocaleTimeString();
    let fecha = new Date().toLocaleDateString();
    return fecha + ' ' + time;
  }

}
