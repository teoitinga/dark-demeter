import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { take } from 'rxjs/operators';
 
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  isloggedIn = true;

  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
  }
  get usuario(): BehaviorSubject<UsuarioModel> {
    return this.apiservice.usuario;
  }
  logout() {
    this.apiservice.logout();
  }
  get roleadmin(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      observer.next(this.apiservice.roleadmin);
    });

  }
  isloggedInVerify(){
    this.isloggedIn = this.apiservice.isLoggedIn();
  }
  get roletecnico(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      observer.next(this.apiservice.roletecnico);
    });
  }

  get rolecedido(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      observer.next(this.apiservice.rolecedido);
    });
  }

}