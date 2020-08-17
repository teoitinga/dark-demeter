import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
  }
  get usuario():BehaviorSubject<UsuarioModel>{
    return this.apiservice.usuario;
  }
  logout(){
    console.log('fazendo logout');
    this.apiservice.logout();
  }
  get roleadmin(): Observable<boolean>{
    return new Observable<boolean>(observer => {
      observer.next(this.apiservice.roleadmin);
    });

  }
  get roletecnico(): Observable<boolean>{
    return new Observable<boolean>(observer => {
      observer.next(this.apiservice.roletecnico);
    });

  }

}
