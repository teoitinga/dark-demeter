import { Injectable } from '@angular/core';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as AppUtils from '../shared/app.utils';
import { Observable, BehaviorSubject } from 'rxjs';
import { ServicoModel } from '../models/servicos.model';
import { AtendimentoServiceModel } from './models/atendimento-service.model';
import { AtendimentoModel } from './models/atendimento-post.model';

@Injectable({
  providedIn: 'root'
})
export class AtedimentoService {


  servico: BehaviorSubject<ServicoModel>
  constructor(
    private http: HttpClient
  ) { }

  getAtendimentos(): Observable<any>{
    return this.http.get<any>(AppUtils.ATENDIMENTOS_URL);
  }
  getServico(): BehaviorSubject<ServicoModel> {
    if(this.servico){
      return this.servico;
    }else{
      return new BehaviorSubject(
        new ServicoModel()
      );
    }

  }
  setServico(servico: ServicoModel) {
    //this.servico.next(servico);

  }
  sendAtendimentos(registro: AtendimentoModel): Observable<any>{
    return this.http.post<any>(AppUtils.ATENDIMENTOS_POST_URL, registro);
  }
}
