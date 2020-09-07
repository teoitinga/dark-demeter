import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import * as AppUtils from '../shared/app.utils';
import { CredencialModel } from '../models/credencial.model';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  isLoggedIn(): boolean {
    return (window.localStorage[AppUtils.TOKEN]) ? true : false;
  }

  constructor(
    private http: HttpClient,
    private route: Router
  ) {

  }

  login(user: CredencialModel): Observable<any> {

    return this.http.post(AppUtils.LOGIN_URL, user);

  }
  getServicesForApi(value: string): Observable<any> {

    return this.http.get(`${AppUtils.SERVICOS_URL}/${value}`);

  }
  verificaRegistroPorCpf(value: string): Observable<any> {

    return this.http.get(`${AppUtils.PRODUTOR_SEARCH_CPF_URL}/${value}`);

  }
  getTecnicosForApi(value: string): Observable<any> {

    return this.http.get(`${AppUtils.TECNICOS_URL}/${value}`);

  }

  registerToken(token: string) {
    window.localStorage.setItem(AppUtils.TOKEN, token);
    this.usuario.next(this.jwtDecode(this.getAccessToken()))
  }

  jwtDecode(token: string): UsuarioModel {
    let usuario: UsuarioModel;
    try {
      usuario = JSON.parse(window.atob(token.split('.')[1]));

      if (moment(usuario.expiration).isAfter(moment())) {
        return usuario;
      }
      return null;

    } catch (err) {
      return null;
    }

  }
  getAccessToken(): string {
    return window.localStorage[AppUtils.TOKEN];
  }
  get usuario(): BehaviorSubject<UsuarioModel> {
    return new BehaviorSubject(
      this.jwtDecode(this.getAccessToken())
    );
  }
  logout() {
    window.localStorage.removeItem(AppUtils.TOKEN);
    this.usuario.next(this.jwtDecode(this.getAccessToken()))
    this.vaiParaPaginaPrincipal();
    this.route.navigate(['/']);
  }
  get roleadmin(): boolean {
    try {
      if (this.jwtDecode(this.getAccessToken()).role === 'ADMIN') {
        return true;
      }

    } catch (err) {
    }
    this.vaiParaPaginaPrincipal();
    return false;
  }
  get roletecnico(): boolean {
    try {
      if (this.jwtDecode(this.getAccessToken()).role === 'TECNICO') {
        return true;
      }
      if (this.jwtDecode(this.getAccessToken()).role === 'ADMIN') {
        return true;
      }

    } catch (err) {
    }
    this.vaiParaPaginaPrincipal();
    return false;


  }

  get rolecedido(): boolean {

    try {
      if (this.jwtDecode(this.getAccessToken()).role === 'ADMIN') {
        return true;
      }
      if (this.jwtDecode(this.getAccessToken()).role === 'TECNICO') {
        return true;
      }
      if (this.jwtDecode(this.getAccessToken()).role === 'CEDIDO') {
        return true;
      }

    } catch (err) {
    }
    this.vaiParaPaginaPrincipal()
    return false;

  }
  vaiParaPaginaPrincipal() {
    //this.route.navigate(['/']);
  }
}
