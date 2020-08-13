import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as AppUtils from '../shared/app.utils';
import { CredencialModel } from '../models/credencial.model';
import { HttpParams, HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  isLoggedIn():boolean {
    return (window.localStorage[AppUtils.TOKEN]) ? true : false;
  }

  constructor(
    private http: HttpClient
  ) { }

  login(user: CredencialModel): Observable <any> {

    return this.http.post(AppUtils.LOGIN_URL, user);

  }
  registerToken(token:string){
    window.localStorage.setItem(AppUtils.TOKEN, token);
  }
  jwtDecode(token:string): UsuarioModel {
    let usuario: UsuarioModel;
    usuario = JSON.parse(window.atob(token.split('.')[1]));

    return usuario;
  }
  getAccessToken():string {
    return window.localStorage[AppUtils.TOKEN];
  }

}
