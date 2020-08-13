import { Injectable } from '@angular/core';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as AppUtils from '../shared/app.utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtedimentoService {

  constructor(
    private http: HttpClient
  ) { }

  getAtendimentos(): Observable<any>{
    return this.http.get<any>(AppUtils.ATENDIMENTOS_URL);
  }
}
