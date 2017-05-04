import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import { Http, Headers } from '@angular/http';

@Injectable()
export class ThemeService {

  public urlBase: string;

  constructor(
    private _http: Http
  ) { 
    this.urlBase = 'http://localhost:51117'
  }

  getTheme(categoria){
    return this._http.get(`${this.urlBase}/api/SugerencesPosts?categoria=${categoria}`).map(res => res.json());
  }

  getIdCategoria(nombre){
    return this._http.get(`${this.urlBase}/api/categorias?nombre=${nombre}`).map(res => res.json());
  }

  sendThemeSuggestion(suggestionPost){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this.urlBase}/api/sugerencesposts`,suggestionPost, {headers: headers}).map(res => res.json());
  }

}
