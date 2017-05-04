import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SugerenceService {

  public urlBase: string;

  constructor(
    private _http: Http
  ) {
    this.urlBase = 'http://localhost:51117'
   }

  sendSugerence(sugerence){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this.urlBase}/api/sugerences`,sugerence,{headers: headers}).map(res => res.json());
  }

  relSugerence(relSugerence){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this.urlBase}/api/UserSugerences`,relSugerence,{headers: headers}).map(res => res.json());
  }

  getSuggestionsRel(id){
    return this._http.get(`${this.urlBase}/api/UserSugerences?id=${id}&userRid=`).map(res => res.json());
  }

  getMySuggestionsRel(id){
    return this._http.get(`${this.urlBase}api/UserSugerences?id=&userRid=${id}`).map(res => res.json());
  }

  getSuggestions(sugerenceId){
    return this._http.get(`'${this.urlBase}/api/Sugerences?id='${sugerenceId}&titulo=`).map(res=> res.json());
  }

  getSuggestionByTitle(title){
    return this._http.get(`${this.urlBase}/api/Sugerences?id=&titulo=${title}`).map(res=> res.json());
  }

}
