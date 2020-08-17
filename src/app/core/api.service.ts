import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import * as AppUtils from '../shared/app.utils';
import { CredencialModel } from '../models/credencial.model';
import { HttpParams, HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  isLoggedIn():boolean {
    return (window.localStorage[AppUtils.TOKEN]) ? true : false;
  }

  constructor(
    private http: HttpClient,
    private route: Router
  ) { 

  }

  login(user: CredencialModel): Observable <any> {

    return this.http.post(AppUtils.LOGIN_URL, user);

  }
  registerToken(token:string){
    window.localStorage.setItem(AppUtils.TOKEN, token);
    this.usuario.next( this.jwtDecode(this.getAccessToken()))
  }
  jwtDecode(token:string): UsuarioModel {
    let usuario: UsuarioModel;
    try{
      usuario = JSON.parse(window.atob(token.split('.')[1]));
      return usuario;
    }catch(err){
      return null;
    }

  }
  getAccessToken():string {
    return window.localStorage[AppUtils.TOKEN];
  }
  get usuario():BehaviorSubject<UsuarioModel>{
    return new BehaviorSubject(
      this.jwtDecode(this.getAccessToken())
    );
  }
  logout(){
    window.localStorage.removeItem(AppUtils.TOKEN);
    this.usuario.next( this.jwtDecode(this.getAccessToken()) )
    this.route.navigate(['/']);
  }
  get roleadmin():boolean{
    try{
      console.log("role: "+this.jwtDecode(this.getAccessToken()).role);
      return this.jwtDecode(this.getAccessToken()).role === 'ADMIN'? true : false
    }catch(err){
      return false;
    }
  }
  get roletecnico():boolean{
    try{
      console.log("role: "+this.jwtDecode(this.getAccessToken()).role);
      return this.jwtDecode(this.getAccessToken()).role === 'TECNICO'? true : false
    }catch(err){
      return false;
    }
  }

}
